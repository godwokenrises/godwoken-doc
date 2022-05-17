---
slug: /
id: overview
title: Overview
sidebar_label: Overview
---
import useBaseUrl from "@docusaurus/useBaseUrl";

With the vision to enable interoperability across the blockchain ecosystem through a multi-chain solution, Godwoken is an impactful move towards this objective for Nervos Network.

[Godwoken](https://github.com/nervosnetwork/godwoken) is a layer 2 optimistic rollup solution and an EVM-compatible layer that builds on top of Nervos Layer 1, which is also known as CKB. Godwoken comprises two key components: the Godwoken optimistic rollup framework and the Polyjuice EVM-compatible framework. Both Godwoken and Polyjuice together forge a scalable EVM-compatible solution for Nervos, generally known as **Godwoken**.

DApp builders who want to take advantage of Ethereum's advantages, such as its platform, tooling, and documentation, without its drawbacks, such as network congestion, high gas fees, oversaturation, and scalability issues, may find Godwoken to be a suitable option.

Powered by Godwoken, developers can choose to work with Solidity, just like on Ethereum, while enjoying extra bonuses of interoperability with other blockchains. For Ethereum developers, Godwoken is the go-to option for both universes. By using Godwoken, they can easily port their existing DApps to Nervos. It enables them to expand their reach and brand awareness within the DeFi development-focused network, while benefitting from instant transactions and low fees in an Ethereum-like environment.

**Polyjuice** serves as the backend for the Godwoken rollup framework, providing an Ethereum-compatible layer atop Nervos CKB. Polyjuice leverages the account model and the scalability provided by Godwoken, and integrates evmone as the EVM engine to run Ethereum smart contracts. For more information about Polyjuice, visit [godwoken-polyjuice](https://github.com/nervosnetwork/godwoken-polyjuice).

<img src={useBaseUrl("img/arch.png")}  width="40%"/>

Figure 1. Architecture of Godwoken

## Current Version

Current version of Godwoken is v1.1 beta. 

## Godwoken Public Networks

 Godwoken is currently in active development. For more information on Godwoken public networks, see [godwoken](https://github.com/nervosnetwork/godwoken-info).


A Godwoken v1 network can be deployed locally with Godwoken-Kicker in two ways, quick deployment and manual-build mode. For more information, refer to [godwoken-info](https://github.com/nervosnetwork/godwoken-info/tree/info). 

For an introduction to the Nervos ecosystem, an overview of various key concepts, and hands-on practice with the platform in preparation for deploying real-world DApps, check out **[Nervos Layer 2 EVM training](https://nervos.gitbook.io/layer-2-evm/).**


## Reference

| Resource                                   | Link                                                         |
| ------------------------------------------ | ------------------------------------------------------------ |
| Nervos&nbsp;Layer&nbsp;2 EVM&nbsp;Training | https://nervos.gitbook.io/layer-2-evm/                       |
| Nervos&nbsp;Document&nbsp;Website          | https://docs.nervos.org/                                     |
| Godwoken&nbsp;Basics                       | <ul><li>[Introducing Godwoken - A missing piece of the cell model](https://talk.nervos.org/t/introducing-godwoken-a-missing-piece-of-the-cell-model/4464?_360safeparam=13594453)</li><li>[Towards CKB style Lego pieces: Polyjuice on Godwoken](https://medium.com/nervosnetwork/towards-ckb-style-lego-pieces-polyjuice-on-godwoken-cbc935d77abf)</li></ul> |
| Source&nbsp;Code                           | https://github.com/nervosnetwork/godwoken                    |
| Godwoken-Kicker                            | [Godwoken-Kicker: one line command to start godwoken-polyjuice chain](https://github.com/RetricSu/godwoken-kicker) |
| Ethereum&nbsp;RPC&nbsp; (web3&nbsp;RPC)    | [Ethereum RPC (web3 RPC)](https://geth.ethereum.org/docs/rpc/server) |
| Gitcoin&nbsp;Hackathon                     | <ul><li>[Godwoken Gitcoin Instruction](https://github.com/Kuzirashi/gw-gitcoin-instruction)</li><li>[NERVOS - BROADEN THE SPECTRUM](https://gitcoin.co/hackathon/nervos/onboard)</li></ul> |

