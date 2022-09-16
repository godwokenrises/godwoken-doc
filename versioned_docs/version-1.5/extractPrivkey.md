---
id: extractPrivkey
title: Extract a Privkey from MetaMask Wallet
---
import useBaseUrl from "@docusaurus/useBaseUrl";

This tutorial will show you how to extract a private key from the [MetaMask](wallets.md#metamask) wallet. This will allow you to provide it with tools and services which require it to create transactions on your behalf.

**Sharing your private keys with any other person or application gives them complete control of all funds on the account!** Never provide this information for any account with real funds unless you are absolutely certain that this is something you can trust.

Note: If you already have MetaMask installed and use it for anything else, it is **highly recommended** you use a separate installation of MetaMask that is used only for testing purposes. This can be done by using a different profile within your browser, reinstalling MetaMask and generating a new seed phrase, or using a different web browser entirely. Failing to do so could compromise the accounts and all funds contained within your MetaMask installation.

## 1. Select the Account

The first step is selecting the account that you want to export the private key from. This is done by clicking the round icon in the right top corner of MetaMask.

<img src={useBaseUrl("img/metamask-export-00.png")}  width="40%"/>

## 2. Open Account Details

Next, open the account details for the selected account. This is done by selecting the `Account details` item from the Account Options menu by clicking the "three dots" button.

<img src={useBaseUrl("img/metamask-export-01.png")}  width="40%"/>

## 3. Click Export Private Key

From the Account Details screen, click the Export Private Key button.

<img src={useBaseUrl("img/metamask-export-02.png")}  width="40%"/>

## 4. Enter Your MetaMask Password

Enter your MetaMask password to unlock your wallet.

<img src={useBaseUrl("img/metamask-export-03.png")}  width="40%"/>

## 5. Copy Your Private Key

The private key for your account should now be displayed in hex format. Copy this value so it can be used later.

> Note: You will need to prepend "0x" to the front of your private key in order to make it usable by most applications.

<img src={useBaseUrl("img/metamask-export-04.png")}  width="40%"/>