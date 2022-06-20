---
id: comparisonEVM
title: Comparison with EVM
---
import useBaseUrl from "@docusaurus/useBaseUrl";

Godwoken targets 100% EVM compatibility, the plan is to back every smart contract that the latest Ethereum hard fork version supports. But there are certain things that are incompatible with EVM in the current version.

## pETH

Godwoken introduced a new concept called pETH.

In Ethereum, the gas for each smart contract is derived by calculation, then calculating the transaction fee by multiplying the gas with a specified gas price. In Godwoken, however, pETH comes in as the unit for calculating transaction fees. In other words, the price of gas in Ethereum is ETH/gas ( denominated in wei, i. e. 1e-18 ether), while that of Godwoken is measured in pETH/gas.  When executing a transaction, Godwoken deducts the transaction fee by using tokens with the layer 2 sUDT type denoted by pETH. 

## Account Abstraction

Godwoken only provides [contract accounts](https://ethereum.org/en/glossary/#contract-account), and the user accounts of Godwoken serve as [EoAs](https://ethereum.org/en/glossary/#eoa).

### Different Address Types

* All eth_address(EoA/contract) format are `short_godwoken_account_script_hash`, which is the 20 bytes prefix of Godwoken account script hash.
* Creating a contract account returns `short_godwoken_account_script_hash`

When passing some parameters of [address-type](https://docs.soliditylang.org/en/v0.8.9/types.html#address) to call smart-contract, the `address` conversion has to be done beforehand, and vice versa to return the `address` value. Polyjuice-Provider is designed to handle these conversion tasks. It conducts `address` type conversions based on the ABI of the contract.

> Unfortunately, we are not yet able to display assets directly on metamask or other Ethereum wallets. We currently use a single web app to display users' assets. This wallet display issue will be resolved in future updates.

## Transaction Structure

A Polyjuice transaction is essentially a Godwoken transaction.

When sending an Ethereum transaction, the transaction gets converted to a Godwoken [RawL2Transaction](https://github.com/nervosnetwork/godwoken/blob/9a3d92/crates/types/schemas/godwoken.mol#L56-L61) type, which is automatically processed by [Polyjuice-Provider](https://github.com/nervosnetwork/polyjuice-provider).

## Behavioral Differences of Some Opcodes

| EVM Opcode | Solidity Usage     | Behavior in Polyjuice         | Behavior in EVM                                         |
| ---------- | ------------------ | ----------------------------- | ------------------------------------------------------- |
| COINBASE   | `block.coinbase`   | address of the block_producer | address of the current block's miner                    |
| CHAINID    | `chain_id()`       | creator_account_id            | Istanbul hardfork, EIP-1344: current network's chain id |
| GASLIMIT   | `block.gaslimit`   | 12,500,000                    | current block's gas limit                               |
| DIFFICULTY | `block.difficulty` | 2,500,000,000,000,000         | current block's difficulty                              |

## Addition Features

- pre-compiled contract
  - Add `recover_account` for recover any supported signature
  - Add `balance_of_any_sudt` for query the balance of any sudt_id account
  - Add `transfer_to_any_sudt` for transfer value by sudt_id (Must collaborate with SudtErc20Proxy.sol contract)
  - Add `eth_to_godwoken_addr` for convert ETH address to polyjuice contract address (godwoken short address)

### `recover_account` Spec

```
  Recover an EoA account script hash by signature

  input: (the input data is from abi.encode(mesage, signature, code_hash))
  ======
    input[ 0..32]  => message
    input[32..64]  => offset of signature part
    input[64..96]  => code_hash (EoA lock hash)
    input[96..128] => length of signature data
    input[128..]   => signature data

  output (32 bytes):
  =======
    output[0..32] => account script hash
```

See: [Example](https://github.com/nervosnetwork/godwoken-polyjuice/blob/docs-evm-compatibility/polyjuice-tests/src/test_cases/evm-contracts/RecoverAccount.sol)

### `balance_of_any_sudt` Spec

```
  Query the balance of `account_id` of `sudt_id` token.

   input:
   ======
     input[ 0..32] => sudt_id (big endian)
     input[32..64] => address (short_address)

   output:
   =======
     output[0..32] => amount
```

See: [Example](https://github.com/nervosnetwork/godwoken-polyjuice/blob/docs-evm-compatibility/solidity/erc20/SudtERC20Proxy.sol)

### `transfer_to_any_sudt` Spec

```
  Transfer `sudt_id` token from `from_id` to `to_id` with `amount` balance.

  NOTE: This pre-compiled contract need caller to check permission of `from_id`,
  currently only `solidity/erc20/SudtERC20Proxy.sol` is allowed to call this contract.

   input:
   ======
     input[ 0..32 ] => sudt_id (big endian)
     input[32..64 ] => from_addr (short address)
     input[64..96 ] => to_addr (short address)
     input[96..128] => amount (big endian)

   output: []
```

See: [Example](https://github.com/nervosnetwork/godwoken-polyjuice/blob/docs-evm-compatibility/solidity/erc20/SudtERC20Proxy.sol)

### `eth_to_godwoken_addr` Spec

```
 Calculate godwoken short address of an contract account by it's corresponding ETH address

 input:
 ======
   input[12..32] => ETH address

 output:
   output[12..32] => godwoken short address
```

See: [Example](https://github.com/nervosnetwork/godwoken-polyjuice/blob/docs-evm-compatibility/polyjuice-tests/src/test_cases/evm-contracts/EthToGodwokenAddr.sol)

### Others

- transaction context
  - chain_id is [creator_account_id](https://github.com/nervosnetwork/godwoken/blob/5735d8f/docs/life_of_a_polyjuice_transaction.md#root-account--deployment)
  - block gas limit is `12500000`, and is not block level limit, every transaction can reach the limit
  - block difficulty is always `2500000000000000`
- The `transfer value` can not exceed uint128:MAX
- pre-compiled contract
  - `bn256_pairing` is not supported yet，due to too high cycle cost (WIP)
  - [addition pre-compiled contracts](https://github.com/nervosnetwork/godwoken-polyjuice/blob/docs-evm-compatibility/docs/Addition-Features.md)
