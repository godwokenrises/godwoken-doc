---
id: godwokenbridge
title: Godwoken Bridge
---

import useBaseUrl from "@docusaurus/useBaseUrl";

[Godwoken Bridge](https://testnet.bridge.godwoken.io/#/v1/) functions as a token bridge between CKB and Godwoken and allows the quick deposit and withdrawal of assets. <!--which is powered by Light Godwoken, an SDK dedicated to the development of decentralized applications on Godwoken.--> All you need to do is connect your MetaMask wallet.

In contrast to the previous version, the current version offers:
- A unified deposit/withdraw page;
- Quick asset withdrawal from v0 to v1.

This tutorial assumes users have already downloaded a web3 wallet, such as [MetaMask](https://metamask.io/), and users have enough CKBs or tokens in the wallet.

**Note:** A deposit requires at least 400 CKBs and a withdrawal requires at least 650 CKBs.

For more information about the concepts of Godwoken and CKB, refer to [Nervos CKB](https://docs.nervos.org/docs/basics/introduction) and [Godwoken](https://docs.godwoken.io). 

## Deposit CKB or Supported sUDT Tokens from Layer 1 to a Layer 2 Wallet

**Note:** The minimum amount of a deposit from layer 1 to layer 2 is 400 CKBs.

To deposit CKB or supported sUDT from layer 1 to layer 2 wallet:

1. Add the Godwoken Network manually to the MetaMask wallet. 

   Godwoken v1 is currently in active development. For more information on Godwoken public networks, see [godwoken](https://github.com/nervosnetwork/godwoken-info).

2. Bridge your own assets.

   Login to the bridge with user's own MetaMask wallet, and connect to the Godwoken Network. 

   <img src={useBaseUrl("img/liteGdwknCon1.jpg")}  width="40%"/>

   <img src={useBaseUrl("img/liteGdwknCon2.jpg")}  width="40%"/>

3. Enter the amount, then click `Deposit`.

   <img src={useBaseUrl("img/depo2lyr2.png")}  width="40%"/>

4. Press `sign` to authorize the transaction on the MetaMask popup to complete the transfer. 

   <img src={useBaseUrl("img/sign1.png")}  width="40%"/>

   Refresh the page after a few minutes to check the changes in layer 1 and layer 2 account balances. 

## Withdraw Assets from Godwoken V0 to Godwoken V1

To withdraw assets from Godwoken v0 to Godwoken v1:

1. In the [Godwoken Bridge Withdrawal UI](https://testnet.bridge.godwoken.io/#/v0), choose the destination that you want to move the assets into, then click `Request Withdrawal`. 

   <img src={useBaseUrl("img/V0-V1.png")}  width="40%"/>

2. Click `Confirm` to complete the transaction.

   <img src={useBaseUrl("img/withdrawConfirm.png")}  width="40%"/>

3. Sign the withdrawal.

   <img src={useBaseUrl("img/withdrawSign.png")}  width="40%"/>

4. After successfully withdrawing assets from v0 to v1, check the wallet to see the balance.

   <img src={useBaseUrl("img/withdrawBalance.png")}  width="40%"/>

:::note

The withdrawal period is at least 5 days for withdrawing assets from v0 to v1. Therefore, the user must wait at least five days to receive the assets.

:::

 ## Reference

| Resource                | Link                                                         |
| ----------------------- | ------------------------------------------------------------ |
| Godwoken Docs           | https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_submit_withdrawal_request |
| Godwoken Demos          | https://github.com/classicalliu/gw-demos                     |
| Godwoken testnet config | https://github.com/nervosnetwork/godwoken-public/blob/master/testnet/config/scripts-deploy-result.json |
| Polyjuice Provider      | https://github.com/nervosnetwork/polyjuice-provider          |
| Godwoken Web3           | https://github.com/nervosnetwork/godwoken-web3#godwoken-web3-api |
| Lumos Documentation     | https://github.com/nervosnetwork/lumos                       |

