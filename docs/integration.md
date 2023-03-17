---
id: integration
title: Integration Guide for Ethereum Developers
---

import useBaseUrl from "@docusaurus/useBaseUrl";

import Link from "@docusaurus/Link";

This documentation can be used as an integration guide for wallets and exchanges or as a reference for developing dApps on Godwoken. It explains the rationale for developing decentralized applications using Godwoken, the known caveats of version 1 and corresponding workarounds, as well as providing hands-on training on integrating Ethereum dApps with CKB through Godwoken.

Prior knowledge of Ethereum is required for using this guide. 

:::note
If you want to obtain direct experience and prepare yourself for deploying applications, you can check out the [Layer 2 EVM Training](evm_training/evmIntro.md) section for a hands-on trial of developing your own EVM dapps on the Nervos platform.
:::

## Why Develop on Godwoken?

- **Security** - Nervos Network is a Proof-of-Work (PoW) layer 1 chain, and Godwoken is an optimistic rollup layer 2 chain built on Nervos Network. The security model is quite different from other EVM-compatible PoS/DPoS/PoA chains or sidechains.
- **Low-cost** - A typical Godwoken transaction currently costs less than $0.01.
  
- **Ecosystem**
  - With Force Bridge, assets from 3 chains (Nervos, Ethereum and BSC) are already available on Godwoken. The support for more chains (Cardano, BTC) is on the way.

- [**Interoperability 2.0**](https://medium.com/nervosnetwork/blockchain-abstraction-and-interoperability-2-0-eea98d81b7b6) - This may be the trump card of Godwoken. With the design abstractions of Nervos Network and Godwoken, it is possible to use any on-chain tool to port smart contracts to manipulate assets on the corresponding chain.

## Known Caveats

Godwoken V1 is still under development and targets 100% EVM compatibility. Having the best compatibility is the objective of designing and building Godwoken:

- The EVM being used in Godwoken must be 100% compatible with the latest forked version of Ethereum.
- Godwoken must be 100% compatible with Ethereum over the Web3 interfaces by using [Godwoken Web3](https://github.com/godwokenrises/godwoken/tree/develop/web3).

Several discrepancies inevitably exist due to the wide architectural and design differences between Godwoken and Ethereum.

## Comparison with EVM

Godwoken targets 100% EVM compatibility and is designed to work with every smart contract that the latest Ethereum hard fork version supports. But, the current version is not yet fully compatible with EVM.

### EVM Revision

The maximum EVM revision supported is `EVMC_BERLIN`.

### pCKB

Godwoken v1 introduced a new concept, [**pCKB**](https://github.com/godwokenrises/godwoken/blob/develop/docs/life_of_a_polyjuice_transaction.md#pckb) which is a defined layer-2 sUDT token type when deploying a Godwoken chain.

pCKB serves a similar purpose for the Godwoken chain as ETH does for the Ethereum chain, in the sense that it is used for collecting transaction fees. In Ethereum, the gas for each smart contract is derived by calculation. And the transaction fee is then calculated by multiplying the gas by the specified gas price. In Godwoken, pCKB is the unit for calculating transaction fees. In other words, the gas price in Ethereum is calculated as ETH/gas (in wei, i.e., 10<sup>-18</sup> ETH), and the gas price in Godwoken is calculated as pCKB/gas. When Godwoken executes a transaction, it will deduct the transaction fee by using layer-2 [sUDT](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0025-simple-udt/0025-simple-udt.md) type, which is represented by **pCKB**.

Godwoken chain uses CKB as pCKB by default, while different Godwoken chains may use different token types as pCKB.

**Note**: With certain transactions being sent to the smart contract, the `value` of the transaction is `pCKB`.

### Account Abstraction

Polyjuice only provides [contract accounts](https://ethereum.org/en/glossary/#contract-account). Godwoken's user accounts are leveraged as [EOAs](https://ethereum.org/en/glossary/#eoa).

### sUDT-ERC20 proxy contract

When you use a sUDT token type, it will be represented in Godwoken as a layer-2 sUDT type. Polyjuice ensures that all the layer-2 sUDT tokens on Godwoken are in compliance with the ERC20 standard by the [sUDT-ERC20 Proxy Contract](https://github.com/godwokenrises/godwoken/blob/develop/gwos-evm/solidity/erc20/README.md). This contract provides a way for EVM code to interact with ERC20 standard interface to operate sUDT tokens on Godwoken as if they were ERC20 tokens.

In other words, all bridged sUDT tokens have the same ERC20 interface thanks to the 1-to-1 sUDT-ERC20 proxy contract:

### Bridged sUDT Token List

- mainnet_v1: https://github.com/godwokenrises/godwoken-info/blob/main/mainnet_v1/bridged-token-list.json
- testnet_v1: https://github.com/godwokenrises/godwoken-info/blob/main/testnet_v1_1/bridged-token-list.json

### Transaction Structure

A Polyjuice transaction is essentially a Godwoken transaction. When Ethereum transactions are sent, they are converted to the Godwoken [RawL2Transaction](https://github.com/godwokenrises/godwoken/blob/v1.5.0/crates/types/schemas/godwoken.mol#L69-L76) type when being sent and are automatically processed by [Godwoken Web3](https://github.com/godwokenrises/godwoken/tree/develop/web3).

### Behavioral Differences of Some Opcodes

| EVM Opcode | Solidity Usage   | Behavior in Polyjuice         | Behavior in EVM                    |
| ---------- | ---------------- | ----------------------------- | ---------------------------------- |
| COINBASE   | block.coinbase   | address of the block_producer | address of the current block miner |
| GASLIMIT   | block.gaslimit   | 12,500,000                    | current block’s gas limit          |
| DIFFICULTY | block.difficulty | 2,500,000,000,000,000         | current block’s difficulty         |

### Restriction of Memory Usage

Polyjuice runs EVM on [CKB-VM](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0003-ckb-vm/0003-ckb-vm.md#risc-v-runtime-model). EVM has no limit on memory usage, yet EVM has a limit of 1024 on stack depth. But, CKB-VM can currently use a maximum of 4MB of memory, of which 3MB is for heap space and 1MB is for stack space. For more information, refer [here](https://github.com/nervosnetwork/riscv-newlib/blob/00c6ae3c481bc62b4ac016b3e86c508cdf2e68d2/libgloss/riscv/sys_sbrk.c#L38-L56).

### Others

- Transaction context

  - `chain_id` is defined in Godwoken [RollupConfig#chain_id](https://github.com/godwokenrises/godwoken/blob/v1.5.0/crates/types/schemas/godwoken.mol#L64).
  - the block difficulty is always `2500000000000000`.
  - the gas limit is 12500000 per block, but it is not a transaction-level limit. Any transaction can reach the gas limit.
  - the size limit for contract's return data is [`25KB`](https://github.com/godwokenrises/godwoken-scripts/blob/31293d1/c/gw_def.h#L21-L22).
  - the size limit for contract's storage is [`25KB`](https://github.com/godwokenrises/godwoken-scripts/blob/31293d1/c/gw_def.h#L21-L22).

- The `transaction.to` MUST be a Contract Address.

- The `transfer value` can not exceed `uint128:MAX`, because the type of [sUDT.amount](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0025-simple-udt/0025-simple-udt.md#sudt-cell) is `uint128`.

- [Addition pre-compiled contracts](https://github.com/godwokenrises/godwoken/blob/develop/gwos-evm/docs/Addition-Features.md)

## Godwoken Web3 Compatibility

[Godwoken Web3](https://github.com/godwokenrises/godwoken/tree/develop/web3) is a Web3 RPC compatible layer developed on top of Godwoken.

### ETH Compatibility

**1. Gas Limit** 

Godwoken applies the [Cycle Limit](https://docs-xi-two.vercel.app/docs/rfcs/0014-vm-cycle-limits/0014-vm-cycle-limits) to limit transaction execution resources in CKB-VM. By setting the `RPC_GAS_LIMIT` to `50000000` to maximise the compatibility with Ethereum toolchain, but the real gas limit that users can utilize relies on this Cycle Limit.
