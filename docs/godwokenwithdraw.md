---
id: withdrawgodwoken
title: Withdrawing Assets from Godwoken
---

# Withdrawing Assets from Godwoken

This is a guide for withdrawing assets from Godwoken which contains two steps. In this guide, a browser with MetaMask Wallet pre-installed is required. 

For more information about the concepts of Godwoken and CKB, refer to [Nervos CKB](https://docs.nervos.org/docs/basics/introduction) and [Godwoken](https://docs.godwoken.io).

## Prerequisites

The following prerequisites apply for withdrawing assets from Godwoken.

	- MetaMask
	- NodeJS >= v14


## Process of Assets Withdrawal

### Step 1. Submit a Withdrawal Request to Godwoken

First, call the [gw_submit_withdrawal_request](https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_submit_withdrawal_request) RPC method to burn the assets on layer 2 network. Godwoken then simultaneously creates equal assets on layer 1 network for the receiver, which can be unlocked in 5 days.

Note: some information, such as the sender's layer 2 address and the receiver's layer 1 address, are required as parameters when submitting such a request. 

For further details see [example](https://github.com/classicalliu/gw-demos/blob/d2780e4c20824796f21a8277ea357dcce34c8e9f/src/withdrawal.ts?_pjax=%23js-repo-pjax-container%2C%20div%5Bitemtype%3D%22http%3A%2F%2Fschema.org%2FSoftwareSourceCode%22%5D%20main%2C%20%5Bdata-pjax-container%5D#L26-L126).

```json5
 {
   raw: {
     nonce: "0x2e", // from [get_nonce](https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_get_nonce)
     capacity: "0x9502f9000", // amount of ckb to withdraw in shannon unit
     amount: "0x0", // amount of sUDT to withdraw, default to 0x0 if you don't need to withdraw sUDT
     sudt_script_hash: "0x0000000000000000000000000000000000000000000000000000000000000000", // l1 SUDT script hash, default to all zero if you don't need to withdraw sUDT
     account_script_hash: "0x1ddfd18bee966192f8e35e8fbaaae93b88c476960754077d039cf1e56c633c22", // withdrawer layer 2 ckb account lock hash, layer 2 address -> layer 2 lock script -> lock hash
     sell_amount: "0x0", // TODO unimplemented, selling price of the withdrawal cell in CKB
     sell_capacity: "0x0", // TODO unimplemented, selling price of the withdrawal cell in SUDT
     owner_lock_hash: "0xfda77156f5ec403242a03875b2b29e14ba1c910b14a62fbe0baa3e367ae1f0a6", // owner ckb account lock hash, layer 1 address -> lock script -> lock hash
     payment_lock_hash: "0x0000000000000000000000000000000000000000000000000000000000000000", // TODO unimplemented, layer1 lock to receive the payment, must exists on the chain
     fee: {
       sudt_id: "0x1",
       amount: "0x0",
     },
   },
   signature: "0x8109666e73e8e2ce0bc95d95e08a3a77844c9c5e8049882d863c765843f14af57107bf22c00bce8ea1e45cdbc85415d4f497061913bcbfa97258b2b27897a53a01",
 }
 ```

 In the sample above:

- `owner_lock_hash` is from the owner of layer 1
- `account_script_hash` is from the `address` of layer 2

To calculate the hashes:

```ts
 import { utils, helpers } from "@ckb-lumos/lumos";

 // layer 1 receiver lock
 const ownerLock = helpers.parseAddress(owner /* a CKB address like ckt1... */);
 const owner_lock_hash = utils.computeScriptHash(ownerLock);

 // layer 2 account
 const l2AccountScript: Script = {
   code_hash: ethAccountTypeHash,
   hash_type: "type",
   args: rollupTypeHash + l2Address.slice(2),
 };
 const account_script_hash = utils.computeScriptHash(l2AccountScript);
 ```

 Once the RPC request has been successfully submitted, the hash value returned can be used to query the withdrawal status by calling the [gw_get_withdrawal](https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_get_withdrawal):

 ```json
 {
   "id": 2,
   "jsonrpc": "2.0",
   "method": "gw_get_withdrawal",
   //REPLACE PARAMS BELOW WITH YOUR WITHDRAWAL HASH
   "params": ["0xb57c6da2f803413b5781f8c6508320a0ada61a2992bb59ab38f16da2d02099c1"]
 }
 ```

 The value returned should look like：

 ```json
 {
   "jsonrpc": "2.0",
   "id": 2,
   "result": {
     "withdrawal": {
       "raw": {
         "nonce": "0x2e",
         "capacity": "0x9502f9000",
         "amount": "0x0",
         "sell_amount": "0x0",
         "sell_capacity": "0x0",
         "sudt_script_hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
         "account_script_hash": "0x1ddfd18bee966192f8e35e8fbaaae93b88c476960754077d039cf1e56c633c22",
         "owner_lock_hash": "0xfda77156f5ec403242a03875b2b29e14ba1c910b14a62fbe0baa3e367ae1f0a6",
         "payment_lock_hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
         "fee": {
           "sudt_id": "0x1",
           "amount": "0x0"
         }
       },
       "signature": "0x8109666e73e8e2ce0bc95d95e08a3a77844c9c5e8049882d863c765843f14af57107bf22c00bce8ea1e45cdbc85415d4f497061913bcbfa97258b2b27897a53a01"
     },
     "status": "committed"
   }
 }
 ```

A cell with assets will then be created on layer 1, so as to list all the withdrawal cells that requested by the account on layer 2. 
Here it is named `AliceL2`, and for querying one can use `@ckb-lumos/ckb-indexer`, as follows:

```ts
 const getWithdrawalCellSearchParams = function (AliceL2: string) {
   const layer2Lock: Script = {
     code_hash: SCRIPTS.eth_account_lock.script_type_hash,
     hash_type: "type",
     args: ROLLUP_CONFIG.rollup_type_hash + AliceL2.slice(2).toLowerCase(),
   };
   const accountScriptHash = utils.computeScriptHash(layer2Lock);

   return {
     script: {
       code_hash: SCRIPTS.withdrawal_lock.script_type_hash,
       hash_type: "type" as HashType,
       args: `${ROLLUP_CONFIG.rollup_type_hash}${accountScriptHash.slice(2)}`,
     },
     script_type: "lock",
   };
 };
 const searchParams = getWithdrawalCellSearchParams(AliceL2);
 const collector = ckbIndexer.collector({ lock: searchParams.script });
 ```

 ### Step 2. Unlock Withdrawal Cells

 To unlock assets previously created, it will take a while ( approximately 5 days) to unlock the assets owing to security concerns. The **Fast Withdrawal** will be available soon. Once the pending period is expired, the receiver can make a transaction on layer 1 to unlock the asset cell. This transaction will use the withdrawal cell as input and take another CKB cell to cover the transaction fee. Within the withdrawal cell used as output, the lock of the asset cell will be replaced with the lock of the receiver.

Here is an example:


 ```json5
 {
   version: "0x0",
   cell_deps: [
     {
       // withdraw cell dep
       out_point: {
         tx_hash: "0xb4b07dcd1571ac18683b515ada40e13b99bd0622197b6817047adc9f407f4828",
         index: "0x0",
       },
       dep_type: "code",
     },
     {
       // rollup cell dep
       out_point: {
         tx_hash: "0x6ab0949b8ce8e7b268d12848c2668a049c3c0ac0d5e803311dd2512c96ce3072",
         index: "0x0",
       },
       dep_type: "code",
     },
     {
       // omni lock cell dep
       out_point: {
         tx_hash: "0x9154df4f7336402114d04495175b37390ce86a4906d2d4001cf02c3e6d97f39c",
         index: "0x0",
       },
       dep_type: "code",
     },
     {
       // secp256k1 cell dep
       out_point: {
         tx_hash: "0xf8de3bb47d055cdf460d93a2a6e1b05f7432f9777c8c474abf4eec1d4aee5d37",
         index: "0x0",
       },
       dep_type: "dep_group",
     },
   ],
   header_deps: [],
   inputs: [
     {
       // withdrawal cell
       since: "0x0",
       previous_output: {
         index: "0x27",
         tx_hash: "0xfd6b226ca0cf63860b6958b75c498d44d780b273b9a5dd5563925dfb99c7b2d8",
       },
     },
     {
       // owner cell
       since: "0x0",
       previous_output: {
         index: "0x0",
         tx_hash: "0xe68156b56efe7da6143a4f4c6b1fd6e57cad34d5677a3eb2ebe0ab4a5a8b8c07",
       },
     },
   ],
   outputs: [
     {
       // with changing the lock of withdrawal cell to owner lock, the assets is unlocked by owner
       capacity: "0xba43b7400",
       lock: {
         code_hash: "0x79f90bb5e892d80dd213439eeab551120eb417678824f282b4ffb5f21bad2e1e",
         hash_type: "type",
         args: "0x01a08bcc398854db4eaffd9c28b881c65f91e3a28b00",
       },
       type: null,
     },
     {
       // owner cell exchange after paying tx fee
       capacity: "0x95623ea60",
       lock: {
         code_hash: "0x79f90bb5e892d80dd213439eeab551120eb417678824f282b4ffb5f21bad2e1e",
         hash_type: "type",
         args: "0x01a08bcc398854db4eaffd9c28b881c65f91e3a28b00",
       },
     },
   ],
   outputs_data: ["0x", "0x"],
   witnesses: ["0x1c000000100000001c0000001c000000080000000000000004000000", "..."],
 }
 ```


#### Cell Dependencies

A [CKB Cell](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md#Celll) contains [Scripts](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md#Script), execution of `Scripts` depends on deployed codes. [Cell dependencies](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md#celldep) is used to provide the codes.

In this transaction, cell Deps contain `rollup cellDep`, `lock cellDep` and `withdraw cellDep`. If there are any sudt withdrawals, be sure to add `sudt cellDep`, as well as the other deps required by the receiver lock. `withdraw cellDep` and `sudt cellDep` can be obtained from some static config files, and `lock cellDep` relies on the type of lock to be used. The `omnilock` is used in the example, hence the `omnilock cellDep` is added. For the`rollup cellDep`, it needs to be obtained from the mem pool:

```ts
 async function getRollupCellDep(): Promise<CellDep> {
   const result = await this.godwokenClient.getLastSubmittedInfo();
   const txHash = result.transaction_hash;
   const tx = await this.getPendingTransaction(txHash);

   if (tx == null) {
     throw new Error("Last submitted tx not found!");
   }

   let rollupIndex = tx.transaction.outputs.findIndex((o: any) => {
     return o.type && utils.computeScriptHash(o.type) === ROLLUP_CONFIG.rollup_type_hash;
   });
   return {
     out_point: {
       tx_hash: txHash,
       index: `0x${rollupIndex.toString(16)}`,
     },
     dep_type: "code",
   };
 }
 ```


 ## Reference

|Resource|Link|
|---|---|
|Godwoken Docs| https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_submit_withdrawal_request|
|Godwoken Demos| https://github.com/classicalliu/gw-demos|
|Godwoken testnet config| https://github.com/nervosnetwork/godwoken-public/blob/master/testnet/config/scripts-deploy-result.json|
|Polyjuice Provider| https://github.com/nervosnetwork/polyjuice-provider|
|Godwoken Web3| https://github.com/nervosnetwork/godwoken-web3#godwoken-web3-api|
|Lumos Documentation| https://github.com/nervosnetwork/lumos| 