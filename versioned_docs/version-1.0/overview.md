---
slug: /
id: overview
title: Overview
sidebar_label: Overview
---
import useBaseUrl from "@docusaurus/useBaseUrl";

With the vision to enable interoperability across the blockchain ecosystem through a multi-chain solution, Godwoken is an impactful move towards this objective for Nervos Network.

[Godwoken](https://github.com/nervosnetwork/godwoken) is a layer 2 optimistic rollup solution and an EVM-compatible layer that builds on top of Nervos Layer 1, which is also known as CKB. Godwoken comprises two key component: Godwoken optimistic rollup framework and the Polyjuice EVM-compatible framework. Both Godwoken and Polyjuice together forge a scalable EVM-compatible solution for Nervos, generally known as **Godwoken**.

Godwoken emerged as a solution for dapp builders as they seek to benefit from the advantages of Ethereum, such as its establishment, good tooling, and documentation, by not being plagued by its drawbacks, such as network congestion, high gas fees, oversaturation, and scalability issues. 

Powered by Godwoken, developers can choose to work with Solidity, just like on Ethereum, while enjoying extra bonuses of interoperability with other blockchains. For Ethereum developers, Godwoken is the go-to option for both universes. Developers can port their existing dapps to Nervos with ease, expanding their reach and brand awareness in a DeFi development-focused network, while benefiting from an instant transaction end result and a low fee in an Ethereum-like environment.

**Polyjuice** is a backend for the Ethereum-compatible Godwoken rollup framework, provides an Ethereum-compatible layer atop Nervos CKB. Polyjuice leverages the account model and the scalability provided by Godwoken to integrate evmone as the EVM engine to run Ethereum smart contracts. More information about Polyjuice, visite [godwoken-polyjuice](https://github.com/nervosnetwork/godwoken-polyjuice).

<img src={useBaseUrl("img/arch.png")}  width="40%"/>

Figure 1. Architecture of Godwoken

## Current Version

Godwoken v1 version now is available. Godwoken v1 adds a new built-in contract: the Ethereum address registry. To wit, deploying and interacting with Solidity contracts will become simpler with Godwoken v1, thanks to the compatibility of Godwoken v1 with the existing toolchains of Ethereum.

To be specific, when a user creates a new account by making a deposit, an Ethereum address will be inserted into the contract. With the new built-in contract, the Ethereum address is directly supported in EVM so users can submit transactions to Godwoken with no need to use the web3-provider plugin. Godwoken is designed for 100% compatibility on RPC level, so users can use Ethereum dapps or toolchains with no modification when switching to the Godwoken network.

## Godwoken Public Networks

Godwoken is under active deveopment phase, for more information on Godwoken public Networks see [godwoken](https://github.com/nervosnetwork/godwoken).


Godwoken v1 network can be deployed locally with Godwoken-kicker in two ways, quick deploy and manual-build mode. For more information, refer to Github Repository [godwoken-info](https://github.com/nervosnetwork/godwoken-info/tree/info). 

For an introduction to the Nervos ecosystem, an overview of various important concepts, and hands-on direct experience with the platform in preparation for deploying real-world dapps, check **[Nervos Layer 2 EVM training](https://nervos.gitbook.io/layer-2-evm/).**


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

