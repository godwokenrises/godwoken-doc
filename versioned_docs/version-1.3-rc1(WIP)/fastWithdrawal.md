---
id: fastWithdrawal
title: Deposit & Fast Withdrawal to Godwoken Version 1
---

import useBaseUrl from "@docusaurus/useBaseUrl";

:::note
This tutorial shows how to deposit and withdraw funds from old Godwoken - version 0 - to the new network - version 1. If you don't have any funds on old network you should skip this article.
:::

This guide will show you how to do Fast Withdrawal, which takes minutes instead of days and transfer funds from old Layer 2 EVM Godwoken network to the new Godwoken.

If you wish to withdraw funds from Godwoken V0 to Nervos Layer 1 then it will be a slower process (days) due to Optimistic Rollup security architecture. 

In order to follow this tutorial, you must have already downloaded a web3 wallet, such as [MetaMask](https://metamask.io/), and have enough CKB or supported sUDT tokens in the wallet.

For more information about the concepts of CKB, refer to [Nervos CKB](https://docs.nervos.org/docs/basics/introduction).

## Prerequisites

- Set up an account in MetaMask.

- Connect [Godwoken Bridge](https://testnet.bridge.godwoken.io/#/v1/) with the MetaMask wallet and switch the network to **Godwoken Testnet v1.1**.

- Acquire CKB for your layer 1 wallet from [CKB Testnet Faucet](https://faucet.nervos.org/). The **L1 Wallet address** can be found on the Deposit page of Godwoken Bridge.

  **Note:** A deposit or a withdrawal requires at least 400 CKB.

## Deposit CKB from Nervos CKB to MetaMask

**Note:** The minimum amount of a deposit from Nervos CKB layer 1 to MetaMask is 400 CKB.

To deposit CKB from Nervos CKB to MetaMask:

<!--Add the Godwoken Network manually to the MetaMask wallet.--><!--Godwoken v1 is currently in active development. For more information on Godwoken public networks, see [Godwoken info](https://github.com/nervosnetwork/godwoken-info).--><!--Login [Godwoken Bridge](https://testnet.bridge.godwoken.io/#/v1/).--><!--<img src={useBaseUrl("img/liteGdwknCon1.jpg")}  width="40%"/><img src={useBaseUrl("img/liteGdwknCon2.jpg")}  width="40%"/>Click **Switch network** to allow this site to switch the network to Godwoken Testnet v1.1.-->

1. If Godwoken Bridge is connected to Godwoken V0, select **Godwoken V1** from the drop-down menu on the top right of the page.

2. On the Deposit page, enter the amount for the deposit, then click **Deposit**.

   <img src={useBaseUrl("img/depo2lyr2.png")}  width="40%"/>

3. Press **Sign** to authorize the transaction on the MetaMask popup to complete the deposit. 

   <img src={useBaseUrl("img/depositsign.png")}  width="40%"/>

4. Refresh the page after a few minutes to check the changes in layer 1 and layer 2 account balances. 

## Withdraw Assets from MetaMask to Nervos CKB

**Note:** The minimum amount of a withdrawal from MetaMask to Nervos CKB layer 1 is 400 CKB.

1. If Godwoken Bridge is connected to Godwoken V0, select **Godwoken V1** from the drop-down menu on the top right of the page.

2. Enter the amount for the withdrawal on the Withdrawal page, then click **Request Withdrawal**.

   <img src={useBaseUrl("img/withdrawalrequest01.png")}  width="40%"/>

3. Click **Confirm** to complete the transaction.

      <img src={useBaseUrl("img/withdrawalconfirm01.png")}  width="40%"/>

4. Sign the withdrawal.

      <img src={useBaseUrl("img/withdrawalsign01.png")}  width="40%"/>
      
5. After successfully withdrawing assets, check the wallet to see the balance.


## Withdraw Assets from Godwoken V0 to Godwoken V1

**Note:** The minimum amount of a withdrawal from Godwoken v0 to v1 is 650 CKB.

To withdraw assets from Godwoken v0 to Godwoken v1:

1. Select **Godwoken V0** from the drop-down menu on the top right of the page.

2. On the Withdrawal page, choose **GodWoken V1** as the withdrawal destination. 

   <img src={useBaseUrl("img/V0-V1.png")}  width="40%"/>

3. Enter the amount for the withdrawal and click **Request Withdrawal**.

4. Click **Confirm** to complete the transaction.

   <img src={useBaseUrl("img/withdrawalconfirm02.png")}  width="40%"/>

5. Sign the withdrawal.

   <img src={useBaseUrl("img/withdrawalsign02.png")}  width="40%"/>

6. After successfully withdrawing assets, check the wallet to see the balance.

   <img src={useBaseUrl("img/withdrawBalance.png")}  width="40%"/>



 ## Reference

| Resource                | Link                                                         |
| ----------------------- | ------------------------------------------------------------ |
| Godwoken Docs           | https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_submit_withdrawal_request |
| Godwoken Demos          | https://github.com/classicalliu/gw-demos                     |
| Godwoken testnet config | https://github.com/nervosnetwork/godwoken-info/tree/main/testnet_v1_1 |
| Godwoken Web3           | https://github.com/nervosnetwork/godwoken-web3#godwoken-web3-api |
| Lumos Documentation     | https://github.com/nervosnetwork/lumos                       |

