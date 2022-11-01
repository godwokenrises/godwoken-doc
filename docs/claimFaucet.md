---
id: claimFaucet
title: Claim assets on testnet v1
---
import useBaseUrl from "@docusaurus/useBaseUrl";

## Overview

If you want to test the functionality of Godwoken on testnet, but you don't have any asset available, you can follow this tutorial to claim assets to your testnet accounts.

In this section, you will learn how to:

- Obtain your layer1/layer2 address
- Claim layer1/layer2 assets
- Bridge assets from Goerli to Godwoken
- Claim CKB via Account-Faucet CLI

## Obtain your layer1/layer2 address

As a first step, you need to know what your layer1/layer2 addresses are, so then you can claim faucet to them.

Godwoken Bridge is an asset bridge to help us transfer assets between layer1 and layer2, it also provides a clean UI for you to check your layer1/layer2 addresses. You can follow these steps to connect to Godwoken Bridge:

1. Open [Godwoken Bridge (testnet)](https://testnet.bridge.godwoken.io/)
2. Click “Connect” button on the page to connect

Once you have connected to Godwoken Bridge, your layer1/layer2 addresses and balances should appear on the page. Now let’s see what these fields on the page mean:

| Field                | Explanation                                                                                                                                           |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `L1 Wallet Address`  | Your layer1 address, this is a CKB omni-lock address, you should use this address when claiming for layer1 assets                                     |
| `L1 Deposit Address` | Your layer1 deposit address, you can transfer specific amount of capacity/sUDT to this address, and Godwoken will collect them to your layer2 account |
| `Ethereum Address`   | Your layer2 address, you should use this address when claiming for Goerli assets, or when you make actions on Ethereum networks                       |
| `L1 Balance`         | Your layer1 balance, it means how much CKB your `L1 Wallet Address` has on CKB layer1, you can deposit your `L1 Balance` to layer2                    |
| `L2 Balance`         | Your layer2 balance, it means how much pCKB your **`Ethereum Address`** has on Godwoken layer2, you can withdraw your `L2 Balance` to layer1          |

If you’re new to Godwoken, it’s normal that your `L1 Balance` and `L2 Balance` are both `0`. You can follow the tutorials below to claim free assets to your layer1/layer2 accounts. 

:::tip
For more details on Godwoken Bridge, please visit: [Deposit & Fast Withdrawal to Godwoken v1](fastWithdrawal.md).
:::

## Claim Layer1 assets

### Claim CKB

On the CKB layer1 testnet, you can claim CKB using the Nervos Faucet, an official faucet site provided by Nervos. On Nervos Faucet, each layer1 address can claim 10,000 CKB once every 24 hours.

Follow these steps to claim CKB to your layer1 account:

1. Copy your `L1 Wallet Address` on [Godwoken Bridge (testnet)](https://testnet.bridge.godwoken.io/)
2. Open [Nervos Faucet](https://faucet.nervos.org/)
3. Paste `L1 Wallet Address` in the page input
4. Click “Claim” button next to the page input

Usually you should wait for a minute for the process to complete.

If you like to check the status of your faucet records, there’s a “Search Address” filter input on the page, you can paste your `L1 Wallet Address` in the input, and then click “Enter” on your keyboard to search for claim records of your layer1 address.

:::tip
Nervos Faucet accepts all kinds of valid CKB address, so you can actually claim pCKB to your layer2 account directly. For this part of tutorial, please visit this part of content: [Claim pCKB](#claim-pckb).
:::

### Claim layer1 tokens

TTKN is a sUDT (Simple User Defined Tokens) on Testnet of CKB layer1, if you want to test the functionality of depositing sUDT from layer1 to layer2, you can claim TTKN on Godwoken Bridge for free.

You can claim TTKN by following these steps:
1. Open and connect to [Godwoken Bridge (testnet)](https://testnet.bridge.godwoken.io/)
2. Click the menu button on the header of page
3. Click “Get 1,000 Test Token(TTKN) on L1” button

When it’s done, you should be able to see your TTKN layer1 balance on the deposit page of Godwoken Bridge.

## Claim Layer2 assets

### Claim pCKB

If you want to claim pCKB to your layer2 account, there are two recommended methods.

The first method is if you only need a small amount of pCKB, you can visit [Godwoken Testnet pCKB Faucet](https://faucet.godwoken.com/), and then click the “request 10 pCKB from faucet” button to claim 10 pCKB to your layer2 account, on the way it will ask you to connect to your wallet, you should just follow the instructions and the whole process will complete soon.

However, if you want to claim a large amount of pCKB, the second method is more recommended: use [Nervos Faucet](https://faucet.nervos.org/), the official faucet site provided by Nervos. 

On Nervos Faucet, each layer1 address can claim 10,000 CKB once every 24 hours. Although Nervos Faucet only provides free CKB, but you can claim funds to your `L1 Deposit Address`, which is different from claiming to your `L1 Wallet Address`.

You can follow the below steps to try it out:

1. Copy your `L1 Deposit Address` on [Godwoken Bridge (testnet)](https://testnet.bridge.godwoken.io/)
2. Open [Nervos Faucet](https://faucet.nervos.org/)
3. Paste `L1 Deposit Address` in the page input
4. Click “Claim” button next to the page input to claim

After all above steps are completed, Godwoken will find the CKB cell that Nervos Faucet just sent you, and convert it into your layer2 account. So in conclusion, the CKB cell Nervos Faucet transfers to your `L1 Deposit Address` is a deposit cell. 

How Godwoken deposit works with Nervos Faucet:

1. You request to claim CKB for your `L1 Deposit Address`
2. Nervos Faucet transfers 10,000 CKB to your `L1 Deposit Address` as a deposit transaction
3. Godwoken finds the deposit transaction on layer1, and takes the 10,000 CKB away
4. Godwoken transfers 10,000 pCKB to your `Ethereum Address` on layer2

:::tip
If you like to learn more about the rules and procedures of depositing assets, please check this section for more detailed instructions: [Deposit & Fast Withdrawal to Godwoken v1](fastWithdrawal.md).
:::tip

## Bridge tokens from Goerli to Godwoken

### Claim Goerli assets

Unfortunately, right now there’s no official method for claiming assets on layer2 directly. However, you can claim assets on Goerli network and then bridge them to Godwoken. First thing we need to do is to claim some ETH and tokens on Goerli.

Let’s claim some Goerli ETH funds:

1. Copy your `Ethereum Address` on [Godwoken Bridge (testnet)](https://testnet.bridge.godwoken.io/)
2. Open [Goerli Faucet](https://goerlifaucet.com/)
3. Paste `Ethereum Address` in the input then claim some ETH

And then, we should claim some Goerli tokens:

1. Open [Gliaswap Faucet](https://faucet-eth-goerli.ckbapp.dev/)
2. Select a token you like, then paste `Ethereum Address` in the input
3. Click the “Claim” button to claim that token to your Goerli account

When it’s all done, you should have enough ETH and tokens in your Goerli ETH account.

:::tip
We need to claim Goerli tokens before we can bridge them to Godwoken, that’s fine but why do we need to claim Goerli ETH? The reason is we need to pay Gas Fee with Goerli ETH when bridging assets in the next move.
:::

### Bridge Goerli assets to Godwoken

When you have a sufficient amount of ETH and tokens in on Goerli network, you can start to bridge them to Godwoken. The whole process will take some steps, and the simplified version of the process is like this:

1. Bridge assets from Goerli testnet to CKB layer1
2. Deposit assets from CKB layer1 to Godwoken layer2

If you’re ready, let’s follow the detailed steps of bridging your Goerli assets to Godwoken.

First step, let’s bridge assets from Goerli testnet to CKB layer1:

1. Copy your `L1 Wallet Address` on [Godwoken Bridge (testnet)](https://testnet.bridge.godwoken.io/)
2. Open [Force Bridge](https://testnet.forcebridge.com/bridge/Ethereum/Nervos)
3. Select an asset you’d like to bridge, then input the amount you want to bridge
4. Paste `L1 Wallet Address` in the “Recipient” input
5. Click “Approve” button to allow Force Bridge to bridge the selected asset
6. When the approval is completed, click “Bridge” button to bridge the selected asset to CKB layer1

When the above process is completed, you should be able to see the bridged assets on Godwoken Bridge. Now you can deposit the bridged assets from CKB layer1 to Godwoken layer2, by following the below steps:

1. Open the deposit page of [Godwoken Bridge (testnet)](https://testnet.bridge.godwoken.io/)
2. Enter the amount of deposit CKB in the “Deposit” input
3. Click “Select Token” and then select the bridge asset
4. Enter the amount of deposit token in the “sUDT (optional)” input
5. Click “Deposit” button to deposit the bridge asset to Godwoken layer2

Congratulations, the whole process of bridging Goerli assets to Godwoken is complete. When the above process is all done, you should be able to see your layer2 assets’ balance in the withdrawal page of Godwoken Bridge.

## Claim CKB via Account-Faucet CLI

If you are tired of claiming faucet on Nervos Faucet every day, or if you have a lot of accounts that need to claim faucet, maybe you should try out `Account-Faucet`, a command-line tool that can help you claim CKB on layer1/layer2, but easier.

For detailed instructions, please visit: [Account-Faucet](account-faucet.md).
