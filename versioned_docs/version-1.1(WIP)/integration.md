---
id: integration
title: Integration Guide for Ethererm Developers
---

import useBaseUrl from "@docusaurus/useBaseUrl";

import Link from "@docusaurus/Link";

Ethereum developers can simply use Godwoken as an EVM-compatible layer 2 chain, just like Arbitrum and Optimism.

This documentation can be used as an integration guide for wallets and exchanges, or as a reference for developing dApps on Godwoken. It describes how to interact with Godwoken using existing Ethereum development tools, known caveats of version 1 and corresponding workarounds.

The knowledge of Ethereum is a prerequisite for using this guide.

## Why Develop on Godwoken?

- **Security** - Nervos Network is a Proof-of-Work (PoW) layer 1 chain and Godwoken is an optimistic rollup layer 2 chain built on Nervos Network. The security model is quite different from other EVM-compatible PoS/DPoS/PoA chains or sidechains. For more information, see the references section.
- **Low cost** - A typical Godwoken transaction currently costs less than $0.0001.
- **Ecosystem**
  - With Force Bridge, assets from 3 chains (Nervos, Ethereum and BSC) are already available on Godwoken. The support for more chains (Cardano, BTC) is on the way.
  - The TVL of Godwoken is now nearly [100 million](https://defillama.com/chains). A number of DeFi dApps (e.g. [YokaiSwap](https://www.yokaiswap.com/), [DARUMA](https://www.daruma.money/)) and wallets (e.g. [SafePal](https://www.safepal.io/download)) have already been integrated. 
- [**Interoperability 2.0**](https://medium.com/nervosnetwork/blockchain-abstraction-and-interoperability-2-0-eea98d81b7b6) - This may be the trump card of Godwoken. With the design abstractions of Nervos Network and Godwoken, it is possible to use any on-chain tool to port smart contracts to manipulate assets on the corresponding chain.

## Known Caveats

Godwoken V1 is still under development and targets 100% EVM compatibility. Having the best compatibility is the objective of designing and building Godwoken/Polyjuice:

- The EVM being used in Godwoken/Polyjuice should be 100% compatible with the latest forked version of Ethereum.
- Godwoken/Polyjuice should be 100% compatible with Ethereum over the Web3 interfaces by using the [Web3 layer](https://github.com/nervosnetwork/godwoken-web3).

Given the wide architechtural and design differences between Godwoken/Polyjuice and Ethereum, several discrepancies inevitably exsit. 

## Account Creation

It is mandatory to create an account on a Godwoken chain in order to use Polyjuice. Two ways to create a layer 2 account:
- Make a deposit to Godwoken at layer 1;
- Call the Godwoken built-in `[meta_contract](https://github.com/nervosnetwork/godwoken-scripts/blob/86b299f/c/contracts/meta_contract.c)` and create an account at layer 2.

## pCKB

**pCKB** is a defined layer 2 sUDT token type of choice when deploying a Godwoken/Polyjuice chain. The pCKB serves a similar purpose for the Godwoken/Polyjuice chain as ETH does for the Ethereum chain, i.e., to collect transaction fees. The gas price of a Godwoken transaction is measured with the pCKB that is designated to the Godwoken chain, and will be debited from the sender's account once the transaction is committed on the chain. Godwoken chain uses CKB as pCKB by default, while different Godwoken chains may use different token types as pCKB.

## All Tokens Are ERC20 Tokens

The difference in handling ERC20 tokens and native ETH tokens in Ethereum brought wETH into existence. But with Godwoken, this difference disappears. Either the native CKB or any sUDT token types are all layer 2 sUDT types in Godwoken.

From this layer 2 sUDT contract, Polyjuice ensures that all tokens on Godwoken are ERC20 compatible, regardless the tokens are backed by native CKBs or sUDTs. In other words, it will not be necessary to deal with native tokens and ERC20 tokens separately, as all the different tokens have the same ERC20 interface.

