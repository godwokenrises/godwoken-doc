---
id: overview
title: Godwoken Overview
---
import useBaseUrl from "@docusaurus/useBaseUrl";

With the vision to enable interoperability across the blockchain ecosystem through a multi-chain solution, Godwoken is an impactful move towards this objective for Nervos Network.

<!--[Godwoken](https://github.com/nervosnetwork/godwoken) is a layer 2 optimistic rollup solution and an EVM-compatible layer that builds on top of Nervos Layer 1, which is also known as CKB.-->

[Godwoken](https://github.com/nervosnetwork/godwoken) comprises two key components: the Godwoken optimistic rollup framework and the Polyjuice EVM-compatible framework. Polyjuice serves as the backend for the Godwoken rollup framework, providing an Ethereum-compatible layer atop Nervos CKB. Polyjuice leverages the account model and the scalability provided by Godwoken, and integrates [evmone](https://github.com/ethereum/evmone) as the EVM engine to run Ethereum smart contracts. For more information about Polyjuice, see [godwoken-polyjuice](https://github.com/nervosnetwork/godwoken-polyjuice).

Both Godwoken and Polyjuice together forge a scalable EVM-compatible solution for Nervos, generally known as **Godwoken**.

Godwoken is a suitable choice for those who wish to utilize Ethereum's advantages, including its platform, tooling, and documentation, without the downsides, such as network congestion, high gas fees, oversaturation, and scalability issues. By using Godwoken, Ethereum developers can easily port their existing DApps to Nervos and enjoy instant transactions and low fees in an Ethereum-like environment. For more information on porting Ethereum DApps to Nervos, see [Integration Guide for Ethereum Developers](integration).

<!--Powered by Godwoken, developers can choose to work with Solidity, just like on Ethereum, while enjoying extra bonuses of interoperability with other blockchains. For Ethereum developers, Godwoken is the go-to option for both universes. By using Godwoken, they can easily port their existing DApps to Nervos. It enables them to expand their reach and brand awareness within the DeFi development-focused network, while benefitting from instant transactions and low fees in an Ethereum-like environment.-->

<img src={useBaseUrl("img/arch.png")}  width="40%"/>

Figure 1. Architecture of Godwoken

## Godwoken Public Networks

Godwoken is currently in active development. For more information on Godwoken public networks, see [Godwoken info](https://github.com/nervosnetwork/godwoken-info/tree/info).

With Godwoken-Kicker, you can deploy a local Godwoken v1 network in two modes, quick mode or manual-build mode. For more information, see [Godwoken-Kicker](godwokenkicker).

## Decentralization Roadmap

Godwoken has a solid roadmap to incrementally evolve the Godwoken network from semi-decentralization to full decentralization.

- **Stage 1 (initial launch)**: The entire network comes with a sequencer to sort transactions. Developers can run their own Godwoken nodes in read-only mode and watch the on-chain rollup transactions to calculate and verify the rollup global state.
- **Stage 2**: Introduce the permissionless challenger node, so everyone can run their Godwoken node in challenger mode. If the sequencer commits an invalid state, a challenge will be automatically processed by a random Godwoken node, depending on which node sends the challenge first. If the challenge has succeeded, the sequencer will lose the collateral asset on the layer 1 and the rollup's state will be reverted.
- **Stage 3**: Introduce the permissionless full nodes. Multiple sequencer mechanisms will be investigated and explored.


