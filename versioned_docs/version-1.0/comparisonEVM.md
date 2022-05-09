---
id: comparisonEVM
title: Comparison with EVM
---
import useBaseUrl from "@docusaurus/useBaseUrl";

Godwoken targets 100% EVM compatibility and is designed to work with every smart contract that the latest Ethereum hard fork version supports. But, the current version is not yet fully compatible with EVM.

## EVM revision

The maximum EVM revision supported is `EVMC_BERLIN`. 


## pCKB

Godwoken v1 introduced a new concept, [**pCKB**](https://github.com/nervosnetwork/godwoken/blob/develop/docs/life_of_a_polyjuice_transaction.md#pckb).

In Ethereum, the gas for each smart contract is derived by calculation. And the transaction fee is then calculated by multiplying the gas with the specified gas price. In Godwoken, **pCKB** is the unit for calculating transaction fees. In other words, the gas price in Ethereum is calculated as ETH/gas (in wei, i.e. 1e-18 ether), and the gas price in Godwoken is calculated as pCKB/gas. When Godwoken executes a transaction, it will deduct the transaction fee by using the layer 2 [sUDT](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0025-simple-udt/0025-simple-udt.md) type, which is represented by **pCKB**.

Note that with certain transactions being sent to the smart contract, the `value` of the transaction is `pCKB`.

## Account Abstraction

Polyjuice only provides [contract accounts](https://ethereum.org/en/glossary/#contract-account). Godwoken's user accounts are leveraged as [EOAs](https://ethereum.org/en/glossary/#eoa).

## All Tokens Are ERC20 Tokens

Ethereum processes ERC20 tokens differently from native ETH tokens, which is the reason wETH was invented. However, Godwoken conceals this difference.

All tokens on Godwoken are represented as Layer 2 sUDT types, regardless of whether they are native CKB or any sUDT types. Polyjuice proceeds from this Layer 2 sUDT [contract](https://github.com/nervosnetwork/godwoken-polyjuice/blob/b9c3ad4/solidity/erc20/SudtERC20Proxy_UserDefinedDecimals.sol) and ensures that all tokens on Godwoken are ERC20 compliant, regardless of whether supported by native CKB or sUDT. That is to say, it is unnecessary to distinguish between native tokens and ERC20 tokens. All the different tokens must be handled with the same ERC20 interface.

## Transaction Structure

A Polyjuice transaction is essentially a Godwoken transaction. When Ethereum transactions are sent, they are converted to the Godwoken [RawL2Transaction](https://github.com/nervosnetwork/godwoken/blob/v1.0.0-rc1/crates/types/schemas/godwoken.mol#L69-L74) type, and are automatically processed by [Godwoken Web3](https://github.com/nervosnetwork/godwoken-web3/tree/v1.0.0-rc1).

## Behavioral Differences of Some Opcodes

| EVM Opcode | Solidity Usage | Behavior in Polyjuice | Behavior in EVM |
| --- | --- | --- | --- |
| COINBASE | block.coinbase | address of the block_producer | address of the current block miner |
| GASLIMIT | block.gaslimit | 12,500,000 | current block’s gas limit |
| DIFFICULTY | block.difficulty | 2,500,000,000,000,000 | current block’s difficulty |

## Others

- Transaction context
    - `chain_id` is defined in Godwoken [RollupConfig#chain_id](https://github.com/nervosnetwork/godwoken/blob/a099f2010b212355f5504a8d464b6b70d29640a5/crates/types/schemas/godwoken.mol#L64).
    - the block difficulty is always `2500000000000000`
    - the gas limit  is 12500000 per block, but it is not a transaction-level limit. Any transaction can reach the gas limit
    - the size limit for contract's return data is `[25600B](https://github.com/nervosnetwork/godwoken-scripts/blob/31293d1/c/gw_def.h#L21-L22)`
    - the size limit for contract's storage is `[25600B](https://github.com/nervosnetwork/godwoken-scripts/blob/31293d1/c/gw_def.h#L21-L22)`
  
- `transaction.to` MUST be a contract address
  
    Direct transfer of the value (pCKB) from EOA to EOA is not supported.
    
    > Scenario: pCKB (CKB) is represented as an ERC20 token on layer2, which can be transferred through the sUDT_ERC20_Proxycontract transfer function.
    
- The `transfer value` can not exceed uint128:MAX
- Pre-compiled contract
    - `bn256_pairing` is not yet supported because of the high cycle cost (WIP)
    - [addition pre-compiled contracts](https://github.com/nervosnetwork/godwoken-polyjuice/blob/compatibility-breaking-changes/docs/Addition-Features.md)
