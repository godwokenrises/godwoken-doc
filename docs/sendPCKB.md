---
id: sendPCKB
title: Transfer pCKB on Godwoken v1 
---
import useBaseUrl from "@docusaurus/useBaseUrl";

This section will show you how to deposit, withdraw and send pCKBs on Godwoken using [Godwoken Bridge](https://testnet.bridge.godwoken.io/#/v1/deposit/pending) and [MetaMask](https://metamask.io/) wallet.  Godwoken uses pCKB to collect transaction fees by default. Godwoken v1.6 starts to support the transfer of pCKB, the Godwoken native token, and no longer requires the user to transfer by `sUDT_ERC20_Proxy contract`.

Make sure that you have already installed the [MetaMask](https://metamask.io/) wallet, and that you have successfully connect your Metamask wallet to Godwoken. If not, you can check out [Developer Quick Start](quickstart.md) for details. All operations in this tutorial are performed on the Godwoken v1 Testnet. 


## Prerequisites

- [MetaMask](https://metamask.io/) account

## Setup MetaMask for Godwoken 

- Go to [Godwoken Bridge](https://testnet.bridge.godwoken.io/#/v1) with a browser that has installed Metamask wallet. Click `Connect` to connect your Metamask wallet. Click `Approve` to add Godwoken Testnet to your wallet.  

    <img src={useBaseUrl("img/sendpckb1.6/config1-1.png")}  width="30%"/>

    <img src={useBaseUrl("img/depositPCKB/configure1.png")}  width="30%"/>

- Click `Switch network` to change the network to Godwoken Testnet v1.

    <img src={useBaseUrl("img/depositPCKB/configure2-1.png")}  width="30%"/>

- You will see that `pCKB` has been added into your wallets. 

    <img src={useBaseUrl("img/depositPCKB/configure3-1.png")}  width="30%"/>


## Fund Layer-1 Account

- Obtaining test tokens for your account can be done by simply clicking on the top right corner.

    <img src={useBaseUrl("img/depositPCKB/fund1.png")}  width="40%"/>

- Click `Sign` to get the tokens instantly into your layer-1 wallet. 

    <img src={useBaseUrl("img/depositPCKB/fund2.png")}  width="30%"/>

## Deposit pCKB from Layer-1 to Layer-2

- Enter the CKB amount that you want to deposit from layer-1 account to layer-2 account and click `Deposit`.  Note that the minimum deposit amount is 400 CKBs.

    <img src={useBaseUrl("img/sendpckb1.6/deposit1.png")}  width="30%"/>


- Click `Sign` to sign and confirm the transaction.

    <img src={useBaseUrl("img/sendpckb1.6/deposit2.png")}  width="30%"/>

- You can check the status of your transaction at the bottom of the page by clicking on `Pending` or `Completed`.

    <img src={useBaseUrl("img/sendpckb1.6/deposit3.png")}  width="40%"/>

## Withdraw Assets from Layer-2 to Layer-1

- Go to `Withdrawal` and enter the CKB amount you want to withdraw, and then click `Request Withdrawal` to submit your withdrawal request.

    <img src={useBaseUrl("img/sendpckb1.6/withdraw1.png")}  width="40%"/>

- Click `Confirm` to submit your withdrawal request.

    <img src={useBaseUrl("img/sendpckb1.6/withdraw2.png")}  width="40%"/>

- Click on `Sign` at your Metamask wallet to authorise the withdrawal request.

    <img src={useBaseUrl("img/sendpckb1.6/withdraw3.png")}  width="40%"/>

    <img src={useBaseUrl("img/sendpckb1.6/withdraw4.png")}  width="40%"/>

- You will see a notification in the top right corner indicating that your withdrawal request has been successfully submitted and will be processed within 5 minutes.

    <img src={useBaseUrl("img/sendpckb1.6/withdraw5.png")}  width="40%"/>

- You can check the status of your withdrawal request at the bottom of the page by clicking on `Pending` or `Completed`.

    <img src={useBaseUrl("img/sendpckb1.6/withdraw6.png")}  width="40%"/>

## Send to Others From Godwoken Layer 2 Account

- Open the Metamask wallet, make sure to connect to Godwoken Testnet, check the account and click `Send`.

    <img src={useBaseUrl("img/sendpckb1.6/send1.png")}  width="30%"/>

- Enter the account address of the receiver.

    <img src={useBaseUrl("img/sendpckb1.6/send2.png")}  width="30%"/>

- Fill in the transfer amount, and click `Next`.

    <img src={useBaseUrl("img/sendpckb1.6/send3.png")}  width="30%"/>

- Click `Confirm` to complete the transaction. The Gas fee will be calculated automatically. 

    <img src={useBaseUrl("img/sendpckb1.6/send4.png")}  width="30%"/>

- You can see the status of the transaction at `Activity`.

    <img src={useBaseUrl("img/sendpckb1.6/send5.png")}  width="30%"/>

- The transaction will be completed after a few minutes of waiting. You can click the transaction to check the status.

    <img src={useBaseUrl("img/sendpckb1.6/send6.png")}  width="30%"/>
    
    <img src={useBaseUrl("img/sendpckb1.6/send6-1.png")}  width="30%"/>
