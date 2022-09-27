---
id: depAndWthd
title: Deposit and Withdrawal
---
import useBaseUrl from "@docusaurus/useBaseUrl";


Deposits and withdrawals comprise a special messaging mechanism between layer 1 (CKB) and layer 2 (Godwoken) that enables the exchange of assets through the transfer function. Users can deposit assets from layer 1 to layer 2, or withdraw assets from layer 2 to layer 1.

## Deposit

When a layer 1 transaction is sent, it creates a deposit request by generating a cell with a special lock, the deposit lock. The block producer will collect these cells and process the deposit requests in the blocks. It will unlock the deposit cells, move the assets under the custodian lock, update the layer 2 state and submit layer 1 transactions in the blocks. The block producer cannot take away these assets, because a layer 1 script verifies these transactions.

The deposit cell:

``` yaml
lock:
  code_hash:   (the deposit lock's code hash),
  hash_type:   Type,
  args: (rollup_type_hash(32 bytes) | DepositLockArgs)
capacity: (the amount of CKB to be deposited),
type_:  (none or SUDT script)
data:   (none or SUDT amount)
```

The `lock` field of the deposit cell uses the deposit lock. The first 32 bytes of `args` is a unique value associated with the rollup instance. `DepositLockArgs` indicates the layer 2 account to which the deposit will be made. `capacity` is the total amount of CKB deposited. The `type_` and `data` fields comply with the CKB Simple UDT format. With these fields, users can deposit Simple UDT assets to layer 2.

```
table DepositLockArgs {
    // layer1 lock hash
    owner_lock_hash: Byte32,
    layer2_lock: Script,
    cancel_timeout: Uint64,
    registry_id: Uint32,
}
```

`DepositLockArgs` represents the script and `registry_id` of a layer 2 account, which currently supports only the ETH registry. Users can cancel a deposit after the expiration of `cancel_timeout`, which the block producer can use to reject packed deposit cells containing invalid data.

## Custodian Cell

When assets are deposited to layer 2, deposit cells are converted to custodian cells. The custodian lock protects custodian cells and restricts the transfer of assets so users can only make withdrawals.

The custodian cell:

``` yaml
lock:
  code_hash:    (the custodian lock's code hash),
  hash_type:    Type,
  args: (rollup_type_hash(32 bytes) | CustodianLockArgs)
capacity:   (the amount of CKB to be deposited),
type_:  (none or SUDT script)
data:   (none or SUDT amount)
```

The first 32 bytes of `args` are unique values associated with the rollup instance. `CustodianLockArgs` contains deposit information. `capacity` is the amount of CKB to be deposited. The `type_` and `data` fields follow the CKB Simple UDT format.

```
table CustodianLockArgs {
    deposit_block_hash: Byte32,
    deposit_block_number: Uint64,
    deposit_lock_args: DepositLockArgs,
}
```

`CustodianLockArgs` stores the entire deposit information. `deposit_lock_args` is the args from the original deposit cell. `deposit_block_hash` and `deposit_block_number` denote the layer2 block that contains the deposit.

The `capacity` of a cell must cover the cost of the cell. The `capacity` of the deposit cell must also cover its custodian cell, so the minimum deposit capacity that Godwoken allows is as follows:

* Deposit CKB: 298 CKB
* Deposit CKB and Simple UDT: 379 CKB


## Withdrawal

### Withdrawal Cell (v1)

With Godwoken v1, users must sign and sent withdrawal requests to the block producer. The block producer will process these requests in the blocks, update the layer2 state, and convert custodian cells to withdrawal cells in layer1 block submission transactions.

The withdrawal cell:

``` yaml
lock:
  code_hash:    (the withdrawal lock's code hash),
  hash_type:    Type,
  args: (rollup_type_hash(32 bytes) | WithdrawalLockArgs (n bytes) | len (4 bytes) | layer1 owner lock (n bytes))
capacity:   (the CKB amount to be withdrawn),
type_:  (none or SUDT script)
data:   (none or SUDT amount)
```

Withdrawal lock guarantees the user can only unlock this cell after `finality blocks`.


```
struct WithdrawalLockArgs {
    withdrawal_block_hash: Byte32,
    withdrawal_block_number: Uint64,
    account_script_hash: Byte32,
    // layer1 lock to withdraw after challenge period
    owner_lock_hash: Byte32,
}
```

`withdrawal_block_hash` and `withdrawal_block_number` record the layer2 block that includes the withdrawal. `account_script_hash` represents the layer2 account. `owner_lock_hash` represents the layer1 lock that user uses to unlock the cell.


The `capacity` of a cell must cover the cost of the cell, so the minimum withdrawal capacity that Godwoken allows is as follows:

* Withdrawal CKB: 266 CKB
* Withdrawal CKB and Simple UDT: 347 CKB

The block producer processes layer-1 withdrawal cells without leaving the user with too much detail. Users simply need to submit a withdrawal request and wait for receiving the assets cell on CKB.

### Legacy Withdrawal Cells in Godwoken v0

In , the lagacy withdrawal cells are no longer in use in Godwoken v1.

The withdrawal cell:

``` yaml
 lock:
   code_hash:    (withdrawal lock's code hash),
   hash_type:    Type,
   args: (rollup_type_hash(32 bytes) | WithdrawalLockArgsV0 (n bytes) | owner lock len (optional) | owner lock (optional) | withdrawal_to_v1 flag byte (optional)
 capacity:   (CKB amount),
 type_:  (none or SUDT script)
 data:   (none or SUDT amount)
```

Withdrawal lock guarantees the cell can only be unlocked after `finality blocks`.

```
// --- withdrawal lock ---
// a rollup_type_hash exists before this args, to make args friendly to prefix search
struct WithdrawalLockArgsV0 {
    account_script_hash: Byte32,
    withdrawal_block_hash: Byte32,
    withdrawal_block_number: Uint64,
    // buyer can pay sell_amount token to unlock
    sudt_script_hash: Byte32,
    sell_amount: Uint128,
    sell_capacity: Uint64,
    // layer1 lock to withdraw after challenge period
    owner_lock_hash: Byte32,
    // layer1 lock to receive the payment, must exists on the chain
    payment_lock_hash: Byte32,
 }
```
----

We have **Optional** fields in the withdrawal cell's args:

- `owner lock`: a user submits a withdrawal request with an owner lock structure. The block producer will generate withdrawal cells with the `owner lock` field in the args, and will automatically unlock these cells when finalized. The use does not need to manually unlock layer-1 withdrawal cells.

- `withdrawal_to_v1`: functions only if the "owner lock" exists. If `withdrawal_to_v1` exists and the value is `1`, the withdrawal is a fast withdrawal to Godwoken v1. Fast withdrawal from Godwoken v0 to v1 can be instantly processed, and the assets will be migrated to Godwoken v1.

- `manually withdrawl` - if `owner lock` **does not exist**, the user must manually unlock the legacy withdrawal cell when finalized. And, the user must provide an input cell in the unlocking transaction with a `lock hash` that equals to the `owner_lock_hash` of the withdrawal lock args.

