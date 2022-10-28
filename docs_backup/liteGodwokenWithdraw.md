---
id: liteGodwokenWithdraw
title: Light Godwoken Tutorial
---
import useBaseUrl from "@docusaurus/useBaseUrl";


This tutorial assumes users have already downloaded a web3 wallet, such as MetaMask, and that users have CKB or tokens in the wallet.

Visit [MetaMask](https://metamask.io/) to download the wallet. For more information about the concepts of Godwoken and CKB, refer to [Nervos CKB](https://docs.nervos.org/docs/basics/introduction) and [Godwoken](https://docs.godwoken.io). 

## Deposit CKB or Supported sUDT from Layer 1 to Layer 2 wallet

1. Add the Godwoken Network manually to the MetaMask wallet.  

 Godwoken v1 is currently in active development. For more information on Godwoken public networks, see [godwoken](https://github.com/nervosnetwork/godwoken-info).


2. Bridge Your Own Assets

 Login to the bridge with user's own MetaMask wallet, and connect to the Godwoken Network. 

<img src={useBaseUrl("img/liteGdwknCon1.jpg")}  width="40%"/>

<img src={useBaseUrl("img/liteGdwknCon2.jpg")}  width="40%"/>


3. Deposit CKB to Layer 2 Wallet
 
 Entering the amount, then click `Deposit` and sign to complete the transfer.

<img src={useBaseUrl("img/depo2lyr2.png")}  width="40%"/>

<img src={useBaseUrl("img/sign1.png")}  width="40%"/>

 **Note:** The minimum amount of deposit from Layer 1 to Layer 2 is 400 CKB.

## Withdraw Assets from Godwoken v0 to Godwoken v1

In the [Godwoken Bridge Withdrawal UI](https://testnet.bridge.godwoken.io/#/v0), choose the destination that you want to move the assets into, then click `Request Withdrawal` and `Confirm` to complete the transaction. 

<img src={useBaseUrl("img/withdrawV0-v1.png")}  width="40%"/>


 **Note:** Withdrawing assets from Layer 0 to Layer 1 has a withdrawal period of at least 5 days, which means that the user will have to wait at least 5 days until receiving the assets.

 
 
## Reference

|Resource|Link|
|---|---|
|Godwoken Docs| https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_submit_withdrawal_request|
|Godwoken Demos| https://github.com/classicalliu/gw-demos|
|Godwoken testnet config| https://github.com/nervosnetwork/godwoken-public/blob/master/testnet/config/scripts-deploy-result.json|
|Polyjuice Provider| https://github.com/nervosnetwork/polyjuice-provider|
|Godwoken Web3| https://github.com/nervosnetwork/godwoken-web3#godwoken-web3-api|
|Lumos Documentation| https://github.com/nervosnetwork/lumos| 