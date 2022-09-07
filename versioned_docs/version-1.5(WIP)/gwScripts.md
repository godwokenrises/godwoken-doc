---
id: gwScripts
title: Scripts
---
import useBaseUrl from "@docusaurus/useBaseUrl";

Godwoken scripts are written in *Rust* and *C*. Rust scripts run on the CKB to constrain the Rollup behavior, and C scripts run on Godwoken's nodes to provide layer-2 built-in contracts and programming interfaces.

Rust scripts are built in the `contracts` directory with the `capsule build` command. C scripts are built in the `c` directory with the `cd c && make` command. All data structures use [molecule](https://github.com/nervosnetwork/molecule) format for serialization, which is defined in the [godwoken.mol](https://github.com/nervosnetwork/godwoken/blob/develop/crates/types/schemas/godwoken.mol) file. 

Further details about the Godwoken mechanism can be found at [Life of a godwoken transaction](https://github.com/nervosnetwork/godwoken/blob/develop/docs/life_of_a_godwoken_transaction.md) and [Life of a polyjuice transaction](https://github.com/nervosnetwork/godwoken/blob/develop/docs/life_of_a_polyjuice_transaction.md).

### State Validator

State validator is the main script to verify the on-chain Rollup cell.
The Rollup cell is an identity cell on CKB which stores the [GlobalState](https://github.com/nervosnetwork/godwoken/blob/develop/crates/types/schemas/godwoken.mol), a structure that represents the layer-2 state.

  ```bash
  Rollup cell:
  data: GlobalState,
  capacity: <capacity>
  lock: <lock script>,
  type: <state validator script>,
  ```

To update the Rollup cell, we need to build a tx to consume the old cell and generate a new Rollup cell as the tx's output. We also need to provide a args in the tx's witness: `RollupAction`, which is a structure that contains the layer-2 block and Merkle proof. The state validator will ensure the state transition of the Rollup cell is valid by verifying these proofs.

The rollup behaviors are defined as the enumerated type `RollupAction`, which includes:

  - `RollupSubmitBlock`, which submits a layer-2 block.
    - The layer-2 transactions, deposits, and withdrawals are included in a layer-2 block structure. We won't verify the signatures of txs and withdrawals on-chain since we are using the optimistic mechanism.
    - Deposit cells are collected as inputs, and the action converts these deposit cells into custodian cells to complete the deposit.

  - `RollupEnterChallenge`, which refers to a challenger submitting a challenging target(transaction or withdrawal) to halt the rollup.

  - `RollupCancelChallenge`, an action that anyone can send to cancel a challenge. In this action, the challenging target(a tx or a withdrawal request) will run on the layer-1 chain to prove that the challenge in the previous step was wrong. After this action is implemented, the Rollup status will re-run.

  - `RollupRevert` represents a challenge that is successfully initiated and not cancelled within the challenge time. This action reverts the layer-2 block state to the parent block of the challenged block, and the stake of the block producer will be penalized. Within this action, we only revert the layer-2 state, the reverting of layer-1 locked cells(deposit/custodian/withdrawal) is handled in the `RollupSubmitBlock` action.

Also, another important structure needed to be mentioned here is the `RollupConfig`, where we define the consensus and initial Rollup settings in the cell.
  ```js
  table RollupConfig {
    l1_sudt_script_type_hash: Byte32,
    custodian_script_type_hash: Byte32,
    deposit_script_type_hash: Byte32,
    withdrawal_script_type_hash: Byte32,
    challenge_script_type_hash: Byte32,
    stake_script_type_hash: Byte32,
    l2_sudt_validator_script_type_hash: Byte32,
    burn_lock_hash: Byte32,
    required_staking_capacity: Uint64,
    challenge_maturity_blocks: Uint64,
    finality_blocks: Uint64,
    reward_burn_rate: byte, // * reward_burn_rate / 100
    chain_id: Uint64, // chain id
    allowed_eoa_type_hashes: AllowedTypeHashVec, // list of script code_hash allowed an EOA(external owned account) to use
    allowed_contract_type_hashes: AllowedTypeHashVec, // list of script code_hash allowed a contract account to use
  }
  ````



The `lock` field of a Rollup cell has its own rules comparatively. We assumed in the initial design that everyone who stakes can submit to the Rollup. But during the preliminary phase, we want a more stable setup in which only the block producer can submit to the rollup.

### Stake Lock

A block producer has to provide a stake cell to perform the `RollupSubmitBlock` action. `StakeLockArgs` is the stake lock args. After submitting a layer-2 block, the `args.stake_block_number` will be updated to the latest block number.

  ```js
  struct StakeLockArgs {
    owner_lock_hash: Byte32,
    stake_block_number: Uint64,
}
  ````


There are two ways to unlock stake lock:

1. Unlocked by the submitter after the `args.stake_block_number` block is finalized.
2. Unlocked by the challenger during the `RollupRevert` action.

### Deposit Lock

A layer-1 user can join the Rollup by creating a deposit cell. Godwoken collects deposit cells from the layer1 blockchain and puts them into the input of the tx which submits to a layer-2 block.

If the deposit is not processed by Godwoken, the sender can unlock a deposit cell after `cancel_timeout`. 

  ```js
  table DepositLockArgs {
    // layer1 lock hash
    owner_lock_hash: Byte32,
    layer2_lock: Script,
    cancel_timeout: Uint64,
    registry_id: Uint32,
  }
  ````


### Custodian Lock

Our Rollup uses the custodian lock to hold the deposited assets. `CustodianLockArgs` is the args of custodian lock, the field `deposit_block_number` represents the block number that the deposit is processed. The `deposit_block_number` also denotes whether the custodian lock is finalized or unfinalized.

```js
table CustodianLockArgs {
    deposit_block_hash: Byte32,
    deposit_block_number: Uint64,
    // used for revert this cell to deposit request cell
    // after finalize, this lock is meaningless
    deposit_lock_args: DepositLockArgs,
}

struct UnlockCustodianViaRevertWitness {
    deposit_lock_hash: Byte32,
}
```

For unfinalized custodian cells, once the deposit block is reverted, these cells must also be reverted to the deposit cells.
Since finalized custodian cells are finalized, we can free merge or split these cells.

When a withdrawal request is sent, Godwoken moves assets from finalized custodian cells to generate withdrawal cells.

### Withdrawal Lock

Withdrawal cells are generated in the `RollupSubmitBlock` action according to the `block.withdrawals` field.

```js
struct WithdrawalLockArgs {
    withdrawal_block_hash: Byte32,
    withdrawal_block_number: Uint64,
    account_script_hash: Byte32,
    // layer1 lock to withdraw after challenge period
    owner_lock_hash: Byte32,
}

union UnlockWithdrawalWitness {
    UnlockWithdrawalViaFinalize,
    UnlockWithdrawalViaRevert,
}
table UnlockWithdrawalViaFinalize {
}
struct UnlockWithdrawalViaRevert {
    custodian_lock_hash: Byte32,
}
````

The withdrawal lock has two unlock paths:

1. Unlock by withdrawer after the `WithdrawalLockArgs#withdrawal_block_number` is finalized.
2. Unlock as a reverted cell in the `RollupSubmitBlock` action, a corresponded custodian cell will be generated.

### Challenge Lock

When a Godwoken node finds an invalid state in the Rollup, it can send a `RollupEnterChallenge` action to the Rollup cell and generates a challenging cell. A challenge cell must set a challenging target in its `ChallengeLockArgs` lock args. The challenging target can be a layer-2 transaction or a withdrawal request.

If the challenging unit does not get cancelled when completed, the challenger can execute the `RollupRevert` action on the Rollup cell and takes the stake cell sent by reverted block submitter as a reward.

If the challenging target is invalid, other nodes can cancel this challenge by executing the `RollupCancelChallenge` action, and the challenging cell must be included in the tx.inputs.

* The challenge lock verifies that the account script is in tx.inputs in order to verify the signature for a withdrawal target.
* For a layer-2 transaction target, challenge lock reads the backend script code_hash from the state tree, then verifies if the backend validator script is in the tx.inputs.

## Layer 2 Scripts

The C scripts that located in the `c` directory are Godwoken layer-2 scripts. The layer-2 script can be executed on CKB when a challenge occurs, which means that a layer-2 script is also a valid layer-1 script, only it follows the special interface convenience required by Godwoken.

Godwoken accounts consisted of the following fields: `(id: u32, nonce: u32, script: Script)`. The `script` field determines the script that the account used. 

Layer-2 scripts exist in two types: lock and contract. If an account ID appears in `l2tx.from_id`, we will assume that the account's script is a lock, implying that the script follows the lock script interface convenience that can verify signatures(e.g., Ethereum EOA). If an account ID appears in `l2tx.to_id`, we will assume that the account's script is a contract, which means we should execute the tx when it is sent to the account(like an Ethereum contract account).

A layer-2 contract script is run both on and off-chain. The unified interface is defined in the `c/gw_def.h`. The on-chain implementation is `validator_utils.h`, and the off-chain implementation is `generator_utils.h`.

### ETH Account Lock

ETH Account Lock is a layer-2 lock script that verifies the layer-2 account signature.

### Meta Contract

Meta contract is a layer-2 contract script. A built-in layer-2 account allows creating another account by sending a tx to the account. Meta contract args is `MetaContractArgs`, and the built-in contract id is `0`.

### sUDT Contract

sUDT contract is a layer-2 contract script that keeps a consistent mapping to the layer-1 sUDT. The layer-1 sUDT script hash is equal to `account.script.args`. When the user deposits a new type of sUDT, Godwoken will create a new corresponding sUDT account. This contract args is `SUDTArgs`, and the built-in CKB Simple UDT contract id is `1`.

### ETH Address Registry

ETH address registry is a layer-2 contract that handles the mapping of Ethereum addresses to Godwoken accounts.

When a user deposits tokens to create a new account, a corresponding Ethereum address will be inserted into the contract. If the account is created through a Meta contract, the user must register the Ethereum address for the acount by calling the ETH address registry contract.

The built-in ETH address registry is allocated to id `2`.

### [Polyjuice](https://github.com/nervosnetwork/godwoken-polyjuice)

Polyjuice is a backend of Godwoken for state computation. The C scripts are in the `c` directory and are built using the command `make all-via-docker`. All tests run with the command `bash devtools/ci/integration-test.sh`.

Polyjuice backend accepts an Ethrereum-like transaction and executes it in the EVM. The Ethereum [transaction structure](https://eth.wiki/json-rpc/API#eth_sendtransaction) is as follows:

`(from, to, gas, gasPrice, value, data)`

With polyjuice, `from` and `to` are included in RawL2Transaction (`from_id`, `to_id`) directly. `call_kind`(CREATE/CALL), `gas`, `gasPrice`, `value` and `data` are included in `RawL2Transaction.args`.

----

For more information about Godwoken scripts, refer to [godwoken-scripts](https://github.com/nervosnetwork/godwoken-scripts).
