---
id: sendPCKB
title: Transfer pCKB on Godwoken v1 
---
import useBaseUrl from "@docusaurus/useBaseUrl";

This guide will show you how to configure, import and send pCKBs on Godwoken using [MetaMask](https://metamask.io/) wallet. Godwoken is a layer 2 optimistic rollup solution and an EVM-compatible layer that builds on top of Nervos Layer 1. When Godwoken executes a transaction, the transaction fee is deducted by using a layer 2 sUDT token, which is defined as the **pCKB**. That is to say, Godwoken uses pCKB，in place of CKB, to collect transaction fees by default, and users use [`pCKB (ERC20)`](pCKB.md) when [making native token transfer](faq.md#q-ckb-transfer-on-godwoken-testnet-via-metamask-has-failed-what-is-the-solution) on Godwoken. 

In order to follow this tutorial, make sure that you have already installed a web3 wallet, and that you have successfully created an account and have enough CKBs or supported sUDT tokens in your wallet. In the current version of [GodwokenBridge](https://bridge.godwoken.io/#/v1), a [MetaMask](https://metamask.io/) wallet is recommended for users.

All operations in this tutorial are performed on the Godwoken v1 **Testnet**. For more information on the concept of CKBs, refer to the [Nervos CKB](https://docs.nervos.org/docs/basics/introduction). You can also check out the tutorial video by clicking [here](https://youtu.be/58YHw4YJL8s). To fund an account on with CKB on Nervos Layer 1 testnet, you can refer to [Transfer tokens from Nervos L1 to L2](quickstart.md#transfer-tokens-from-Nervos-L1-to-L2).

## Prerequisites

- [MetaMask](https://metamask.io/) account
- Connect [Godwoken Bridge](https://testnet.bridge.godwoken.io/) with the MetaMask wallet and switch the network to **Godwoken Testnet v1**.
- Acquire CKB for your layer 1 wallet from [CKB Testnet Faucet](https://faucet.nervos.org/). The **L1 Wallet address** can be found on the Deposit page of Godwoken Bridge. 
    
:::note
A deposit or a withdrawal requires at least 400 CKB.
:::

## Configure MetaMask for Godwoken pCKB

- Visit [Godwoken Bridge](https://testnet.bridge.godwoken.io/#/v1) with your browser that has already installed Metamask wallet. Metamask will automatically add Godwoken Testnet to your wallet. Click `Approve` to add Godwoken Testnet to your wallet.  

    <img src={useBaseUrl("img/depositPCKB/configure1.png")}  width="30%"/>


- Click `Switch network` to change the network to Godwoken Testnet v1.

    <img src={useBaseUrl("img/depositPCKB/configure2-1.png")}  width="30%"/>


- You will see that `pCKB` has been added into your wallets. 

    <img src={useBaseUrl("img/depositPCKB/configure3-1.png")}  width="30%"/>

## Fund Layer 1 Account & Deposit to Layer 2 Account

Full details of the workflow can be found at the [Quickstart for Developers](quickstart.md#transfer-tokens-from-nervos-l1-to-l2) section. A quick tutorial is already available there with instructions on how to get funds for the layer 1 account and how to deposit to the layer 2 account.


## Send Funds From Godwoken Layer 2 Account to Others

- Open the Metamask wallet, make sure to connect to Godwoken Testnet, check the account and click `Send`.

    <img src={useBaseUrl("img/depositPCKB/send1-1.png")}  width="30%"/>

- Enter the account address of the receiver.

    <img src={useBaseUrl("img/depositPCKB/send2-1.png")}  width="30%"/>


- Fill in the transfer amount, and click `Next`.

    <img src={useBaseUrl("img/depositPCKB/send3-1.png")}  width="30%"/>


- Click `Confirm` to complete the transaction. The Gas fee will be calculated automatically. 

    <img src={useBaseUrl("img/depositPCKB/send5-1.png")}  width="30%"/>


- Go back to your Metamask account and check the status of the transaction at `Activity`.

    <img src={useBaseUrl("img/depositPCKB/send6-1.png")}  width="30%"/>

- The transaction will be completed after a few minutes of waiting. You can click the transaction to check the status.

    <img src={useBaseUrl("img/depositPCKB/send7-1.png")}  width="30%"/>
    
    <img src={useBaseUrl("img/depositPCKB/send7-2.png")}  width="30%"/>
