---
slug: /
id: overview
title: Overview
sidebar_label: Overview
---
import useBaseUrl from "@docusaurus/useBaseUrl";

[Godwoken](https://github.com/nervosnetwork/godwoken) is a layer 2 rollup framework that provides an abstract account model and abstract layer 2 transactions atop Nervos CKB.

[Polyjuice](https://github.com/nervosnetwork/godwoken-polyjuice) is an Ethereum compatible layer designed upon the Godwoken account model. Godwoken comes together with Polyjuice giving developers the ability to seamlessly deploy and run Ethereum contracts.

<img src={useBaseUrl("img/arch.png")}  width="40%"/>

Figure 1. Architecture of Godwoken

## Godwoken Public Networks

Testnet and Mainnet are provided for deploying Ethereum DApps to CKB.

- [Testnet](https://github.com/nervosnetwork/godwoken-testnet/tree/master/testnet)
  - RPC URL: https://godwoken-testnet-web3-rpc.ckbapp.dev/
  - Chain ID: 71393
  - Websocket RPC URL: ws://godwoken-testnet-web3-rpc.ckbapp.dev/ws
  - Explorer: https://aggron.gwscan.com/
- [Mainnet](https://github.com/nervosnetwork/godwoken-testnet/tree/master/mainnet)
  - RPC URL: https://mainnet.godwoken.io/rpc
  - Chain ID: 71394

  - Websocket RPC URL: https://mainnet.godwoken.io/ws

  - Explorer: https://www.gwscan.com/


A Godwoken network can also be deployed locally. For more information, see the sections of Deployment.

## Current Version 

The current version available is the **v0.10.4**. For more information refer to [godwoken-docker-prebuilds](https://github.com/nervosnetwork/godwoken-docker-prebuilds/releases/tag/v0.10.4). 

**About Godwoken Beta**

It is the responsible way to make Godwoken available while we keep up improving the system before the official release.
Here is what you can do with Godwoken beta:

| features                    | maintainer | developer |
| :-------------------------- | :--------: | :-------: |
| deploy contract             |    yes     | trusted*  |
| deploy ERC20 proxy contract |    yes     |    no     |
| run full nodes              |    yes     |    no     |
| run readonly nodes          |    yes     |   yes**   |

During the Godwoken beta phase, the deploy contract feature is only open to developers allowed on the list. We need to upgrade the Godwoken beta or coordinate with developers in case of emergency. Developers or teams are welcome to participate in the Godwoken beta anyways.

Godwoken beta is limited to the following design choices:

1. An optimistic rollup-based design will be used
2. A single sequencer sort transactions and issue blocks

Beware of Scams and Rugs: Nervos is a permissionless platform. Anybody can deploy an instant of Godwoken. Users and developers must interact with the instant that they can trust.

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

