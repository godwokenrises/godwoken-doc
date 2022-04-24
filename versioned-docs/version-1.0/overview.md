---
slug: /
id: overview
title: Overview
sidebar_label: Overview
---

With the vision to enable interoperability across the blockchain ecosystem through a multi-chain solution, Godwoken is an impactful move towards this objective for Nervos Network.

Godwoken is a layer 2 optimistic rollup solution and an EVM-compatible layer that builds on top of Nervos Layer 1, which is also known as CKB. Godwoken comprises two key component: Godwoken optimistic rollup framework and the Polyjuice EVM-compatible framework. Both Godwoken and Polyjuice together forge a scalable EVM-compatible solution for Nervos, generally known as **Godwoken**.

Godwoken emerged as a solution for dapp builders as they seek to benefit from the advantages of Ethereum, such as its establishment, good tooling, and documentation, by not being plagued by its drawbacks, such as network congestion, high gas fees, oversaturation, and scalability issues. 

Powered by Godwoken, developers can choose to work with Solidity, just like on Ethereum, while enjoying extra bonuses of interoperability with other blockchains. For Ethereum developers, Godwoken is the go-to option for both universes. Developers can port their existing dapps to Nervos with ease, expanding their reach and brand awareness in a DeFi development-focused network, while benefiting from an instant transaction end result and a low fee in an Ethereum-like environment.

![image](https://github.com/nervosnetwork/godwoken-doc/issues/7#issue-1213755248)

Figure 1. Godwoken Architecture

**Polyjuice** is a backend for the Ethereum-compatible Godwoken rollup framework, provides an Ethereum-compatible layer atop Nervos CKB. Polyjuice leverages the account model and the scalability provided by Godwoken to integrate evmone as the EVM engine to run Ethereum smart contracts. More information about Polyjuice, visite [godwoken-polyjuice](https://github.com/nervosnetwork/godwoken-polyjuice).

## Current Version

Godwoken v1 version now is available. Godwoken v1 adds a new built-in contract: the Ethereum address registry. To wit, deploying and interacting with Solidity contracts will become simpler with Godwoken v1, thanks to the compatibility of Godwoken v1 with the existing toolchains of Ethereum.

To be specific, when a user creates a new account by making a deposit, an Ethereum address will be inserted into the contract. With the new built-in contract, the Ethereum address is directly supported in EVM so users can submit transactions to Godwoken with no need to use the web3-provider plugin. Godwoken is designed for 100% compatibility on RPC level, so users can use Ethereum dapps or toolchains with no modification when switching to the Godwoken network.

## Godwoken v1 Public Networks

- **Godwoken testnet_v1**
    - [Readonly node config](https://github.com/nervosnetwork/godwoken-info/blob/info/testnet_v1/gw-testnet_v1-config-readonly.toml)
    - Explorer: [https://v1.aggron.gwscan.com](https://v1.aggron.gwscan.com/)
- **Web3 RPC**
    - RPC URL: [https://godwoken-testnet-web3-v1-rpc.ckbapp.dev](https://godwoken-testnet-web3-v1-rpc.ckbapp.dev/)
    - Websocket RPC URL: wss://godwoken-testnet-web3-v1-rpc.ckbapp.dev/ws
    - ETH-wallet (Metamask) RPC URL: [https://godwoken-testnet-web3-v1-rpc.ckbapp.dev/eth-wallet](https://godwoken-testnet-web3-v1-rpc.ckbapp.dev/eth-wallet)
    - Polyjuice Creator ID: 6
    - Chain ID: 0x315DB00000006 or 868455272153094
    - ETH Address Registry ID: 4
    
Godwoken v1 network can be deployed locally in two ways, deploy manually and quick deploy by Godwoken-kicker. For more information, refer to Github Repository [godwoken-info](https://github.com/nervosnetwork/godwoken-info/tree/info). 
    
For an introduction to the Nervos ecosystem, an overview of various important concepts, and hands-on direct experience with the platform in preparation for deploying real-world dapps, check **[Nervos Layer 2 EVM training](https://nervos.gitbook.io/layer-2-evm/).**
