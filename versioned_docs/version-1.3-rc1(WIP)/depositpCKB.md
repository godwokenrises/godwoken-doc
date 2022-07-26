---
id: depositpCKB
title: Add & Transfer pCKB on Godwoken v1
---
import useBaseUrl from "@docusaurus/useBaseUrl";

This guide will show you how to add and transfer pCKB on Godwoken. Godwoken chain uses CKB as pCKB by default to collect transaction fees. For more information about pCKB, refer to [pCKB](pCKB.md). 

In order to follow this tutorial, make sure that you have already installed a web3 wallet, and that you have successfully created an account and have enough CKBs or supported sUDT tokens in your wallet. In the current version of GodwokenBridge, a [MetaMask](https://metamask.io/) wallet is recommended for users.

All operations in this tutorial are performed on the Godwoken v1 Testnet. For more information on the concept of CKBs, refer to the [Nervos CKB](https://docs.nervos.org/docs/basics/introduction). You can also check out the tutorial video by clicking [here](https://youtu.be/58YHw4YJL8s).

## Prerequisites

- [MetaMask](https://metamask.io/) account
- Connect [Godwoken Bridge](https://testnet.bridge.godwoken.io/#/v1/) with the MetaMask wallet and switch the network to **Godwoken Testnet v1**.
- Acquire CKB for your layer 1 wallet from [CKB Testnet Faucet](https://faucet.nervos.org/). The **L1 Wallet address** can be found on the Deposit page of Godwoken Bridge. 
    
:::note
A deposit or a withdrawal requires at least 400 CKB.
:::

## Configure MetaMask for Godwoken pCKB

<li><p>Connect to the <a href="https://testnet.bridge.godwoken.io/#/v1">Godwoken Bridge</a> with your Metamask wallet, which will automatically add Godwoken Testnet to your wallet.</p></li>

<img src={useBaseUrl("img/depositPCKB/configure1.png")}  width="30%"/>


<li><p>Go to Metamask wallet, click <code>import tokens</code>.</p></li>

<img src={useBaseUrl("img/depositPCKB/configure2.png")}  width="30%"/>


<li><p>Fill the Token Contract Address with the info that you could copy from the <a href="https://docs.godwoken.io/connectionInfo#deployment-information-1">Godwoken Public Networks</a> page, then click <code>Add Custom Token</code>. Normally, token symbol and token decimal will be filled automatically. </p></li>

<img src={useBaseUrl("img/depositPCKB/configure3.png")}  width="30%"/>

<li><p>Click <code>Import Tokens</code> to confirm the import of custom token.</p></li>

<img src={useBaseUrl("img/depositPCKB/configure4.png")}  width="30%"/>

<li><p>You will see that pCKB has been added into your wallets. </p></li>

<img src={useBaseUrl("img/depositPCKB/configure5.png")}  width="30%"/>

## Send Funds on Godwoken

<li><p>Go to your MetaMask wallet, select pCKB in your Assets. On Godwoken, users use tokens instead of native assets when making transfer, because <a href="http://docs.godwoken.io/faq#q-ckb-transfer-on-godwoken-testnet-via-metamask-has-failed-what-is-the-solution">Godwoken uses pCKB to calculate transaction fees by default</a>. </p></li>

<img src={useBaseUrl("img/depositPCKB/send1.png")}  width="30%"/>

<li><p>Click <code>Send</code> to make a transfer transaction. </p></li>

<img src={useBaseUrl("img/depositPCKB/send2.png")}  width="30%"/>


<li><p>Enter the address of the receiver.</p></li>

<img src={useBaseUrl("img/depositPCKB/send3.png")}  width="30%"/>


<li><p>Fill in the transfer amount, and click <code>Next</code>.</p></li>

<img src={useBaseUrl("img/depositPCKB/send4.png")}  width="30%"/>


<li><p>Click <code>Confirm</code> to complete the transaction. The Gas fee will be calculated automatically. </p></li>

<img src={useBaseUrl("img/depositPCKB/send5.png")}  width="30%"/>


<li><p>After completing, you can see the status of the transaction at <code>Activity</code>.</p></li>

<img src={useBaseUrl("img/depositPCKB/send6.png")}  width="30%"/>

