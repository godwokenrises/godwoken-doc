---
id: evmTask1
title: 1. Create account on the EVM Layer 2 Testnet
---
import useBaseUrl from "@docusaurus/useBaseUrl";


Nervos supports the use of Ethereum-compatible smart contracts, which allow developers to create dApps using the popular Solidity smart contract language. This is done by running the EVM (Ethereum Virtual Machine) in a [Layer 2](structure.md#layer-1--layer-2) based execution environment using the [Godwoken](frameworks.md#godwoken) and [Polyjuice](frameworks.md#polyjuice) frameworks.

EVM dApps run nearly identically on Nervos as they do on Ethereum. This, in turn, allows dApp users to continue using the popular [MetaMask](wallets.md#metamask) wallet without having to install anything new. DApp users who are familiar with Ethereum will feel right at home!

## Introduction

In this tutorial, you'll create a Godwoken account on Nervos' EVM Layer 2 [Testnet](structure.md#mainnet-testnet-devnet). Creating a Godwoken account is the first step that all users must perform on Nervos' [Layer 1](structure.md#layer-1--layer-2) blockchain before they can begin interacting with EVM smart contracts on Layer 2.

We will focus on Layer 2 in this documentation, so you don't need to think about Layer 1 too much right now. Alright, let's start creating an account!

### 1. Go to Godwoken Bridge

Start by visiting [testnet.bridge.godwoken.io](https://testnet.bridge.godwoken.io/). Make sure MetaMask wallet is installed in your browser.

Connect your MetaMask account to the page by clicking the "Connect" button.

<img src={useBaseUrl("img/evmTask1-1.png")}  width="40%"/>

### 2. Fund an Account with CKBytes on Layer 1

You have to fund your Layer 1 account. It will be the source of funds for Layer 2 deposit. To accomplish this, click "Copy Address" to the right of "L1 Wallet Address".&#x20;

<img src={useBaseUrl("img/evmTask1-2.png")}  width="40%"/>

Now, visit the Layer 1 faucet where you can request Layer 1 testnet funds: [faucet.nervos.org](https://faucet.nervos.org/).

Paste the copied address into the faucet and click "Claim".

<img src={useBaseUrl("img/evmTask1-3.png")}  width="40%"/>

Now, wait for your Layer 1 transaction to be completed. You should see your transaction in the list in the middle of the page.

After using Layer 1 faucet, your "L1 Balance" should be equal to "10,000 CKB" or more.

<img src={useBaseUrl("img/evmTask1-4.png")}  width="40%"/>

### 3. Create Layer 2 Account

Make sure the previous step is complete, and your Layer 1 account is funded.

Now type minimum "400" in the "Deposit" field. Then click the "Deposit" button.

<img src={useBaseUrl("img/evmTask1-5.png")}  width="40%"/>

You will be asked to sign a message in your wallet. The process will begin after you sign. Your account should be created after few minutes.

<img src={useBaseUrl("img/evmTask1-6.png")}  width="40%"/>

<img src={useBaseUrl("img/evmTask1-7.png")}  width="40%"/>

After you "Sign" the transaction, you should see your deposit in "Pending" transactions.

<img src={useBaseUrl("img/evmTask1-8.png")}  width="40%"/>

After a few minutes, your deposit should land in "Completed" transactions.

<img src={useBaseUrl("img/evmTask1-9.png")}  width="40%"/>

Congratulations! Your account is now created!

### Alternatives

* A JavaScript library that can be integrated into the application to  create an account programmatically: [nervos-godwoken-integration](https://github.com/Roger-Rumblefish/nervos-godwoken-integration) (code examples in readme).