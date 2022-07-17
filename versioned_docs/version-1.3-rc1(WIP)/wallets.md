---
id: wallets
title: Wallets
---
import useBaseUrl from "@docusaurus/useBaseUrl";

## MetaMask

MetaMask is a cryptocurrency wallet used to interact with dApps. MetaMask initially started as a wallet designed for Ethereum, but now has some support for other cryptocurrencies as well.

Nervos has opted to support MetaMask as one of the primary wallets of the Nervos ecosystem. This decision was made because of its proven track record, large pre-existing install-base, and its support of all major web browsers and mobile phones.

Two modes of operation are supported with MetaMask when interacting with the Nervos ecosystem.

When interacting with an Ethereum-compatible layer 2 chain using the Godwoken and Polyjuice frameworks, MetaMask should be configured to use the Godwoken RPC. This process is identical to other layer 2 chains, such as Polygon (Matic), and is used to interact with EVM-compatible Solidity-based dApps running on Nervos. Godwoken uses pCKB by default, click to learn about [pCKB](pCKB.md).

When interacting directly with Nervos' layer 1 CKB blockchain, no configuration changes are required. The flexibility of Nervos' layer 1 blockchain allows for full compatibility out-of-the-box. To facilitate this, the Nervos community-supported [PW-SDK](https://github.com/lay2dev/pw-core) framework is used.

- [Official Website](https://metamask.io/)
- [Github](https://github.com/MetaMask)
- [Download](https://metamask.io/download.html)

<img src={useBaseUrl("img/wallets-metamask.png")}  width="40%"/>

## Neuron Wallet

Neuron is an officially supported desktop wallet for the Nervos ecosystem. This wallet allows for common Nervos operations such as transferring CKBytes and tokens and interacting with the Nervos DAO. Additional support for NFT assets is currently in the experimental phase.

Neuron is created by [Nervina Labs](https://nervina.cn/). Nervina is the development team for several products in the Nervos ecosystem, such as the [Keypering Wallet](https://nervosnetwork.github.io/keypering/), the [Nervos Explorer](https://explorer.nervos.org/), and several Nervos SDKs.

- [Github](https://github.com/nervosnetwork/neuron)
- [Download](https://github.com/nervosnetwork/neuron/releases)
- [Neuron Guide](https://docs.nervos.org/docs/basics/guides/neuron)

<img src={useBaseUrl("img/wallets-neuron.png")}  width="80%"/>

## Portal Wallet

Portal Wallet is a popular browser-based wallet for the Nervos ecosystem created by the [Lay2](https://lay2.tech/) development team. This wallet functions similar to a dApp, and allows for common Nervos operations such as transferring CKBytes and tokens and interacting with the Nervos DAO.

This wallet is user-friendly because it works entirely in a web browser and relies on the MetaMask extension for signing. MetaMask is currently the most widely used dApp interactive extension, meaning that in most cases the user does not need to install any additional software.

Lay2 are the developers of the [PW-SDK](https://github.com/lay2dev/pw-core) framework, which is used to power the Portal Wallet. This framework allows Portal Wallet to rely on the MetaMask wallet browser extension for private key management, without any configuration changes.

- [Official Website](https://ckb.pw/)
- [Github](https://github.com/lay2dev/PortalWallet)

<img src={useBaseUrl("img/portal-wallet.png")}  width="60%"/>