---
id: evmTask4
title: 4. Use Force Bridge to Deposit Tokens from Ethereum
---
import useBaseUrl from "@docusaurus/useBaseUrl";


Moving assets between blockchains is an extremely important part of building the cross-chain dApps of the future. Not only do developers need secure infrastructure to build on, but the experience for the end-user must be simple and straightforward.

Nervos' solutions to cross-chain interoperability are major steps towards these goals. At the base of this is Force Bridge, the decentralized cross-chain bridge which enables the transfer of assets between Nervos and other blockchains. You can learn more about the way a user from another blockchain will interact with Nervos in this document about the [Common User Action Flow](structure.md#common-user-action-flow).

Force Bridge is currently deployed both to [mainnet ](https://forcebridge.com)and [testnet](https://testnet.forcebridge.com) network. It supports moving tokens to and from the Ethereum Rinkeby testnet as well as Ethereum Mainnet. The Cardano bridge has also been announced and is in the late stages of development. More networks will continue to be added, continuously growing the available audience for any developers building on Nervos today.

## Task Instructions

In this task, you will use Force Bridge to transfer ETH from the Ethereum Rinkeby testnet to ckETH on Nervos Layer 2. ETH is a native asset on Ethereum and is represented as a wrapped token on Nervos using ckETH SUDT tokens. The ckETH SUDT token is a native asset on Nervos, which can be used both on Layer 1 and Layer 2, and is widely supported by all tooling within the Nervos ecosystem.

To do this, you will use MetaMask and Force Bridge to transfer ETH from the Rinkeby testnet directly to Nervos' Layer 2. Under the hood, the assets will flow from Ethereum to Force Bridge to Nervos Layer 1 to Nervos Layer 2, but from the end-user's perspective, this will all be done in a single step.

### Prerequisites

This task requires the Code Examples repo ([layer2-evm-documentation](https://github.com/nervosnetwork/layer2-evm-documentation)) which was set up in [task 2](evmTask2.md#2.-clone-and-setup-the-code-examples-repository). If you do not have this repo available for any reason, please set it up now.

### 1. Configure MetaMask to Use the Rinkeby Testnet

Open MetaMask and select the Ethereum account you want to use for the Force Bridge transfer. This should be the same Ethereum account you are using for Layer 2 on Nervos. Then select the "Rinkeby Test Network" from the Network dropdown.

<img src={useBaseUrl("img/evmTask4-1.png")}  width="40%"/>

You will need to get some Testnet ETH from one of the Rinkeby faucets. You can use the [https://rinkebyfaucet.com/](https://rinkebyfaucet.com/) or [MyCrypto Rinkeby Faucet](https://app.mycrypto.com/faucet) to get a small amount of testnet funds.

### 2. Calculate Your Layer 2 Deposit Receiver Address

Nervos' unique architecture allows a single account to have multiple addresses to be created for different purposes. We will be using one of these addresses to streamline the process of moving tokens to Layer 2.

The process flow we mentioned earlier of Ethereum to Force Bridge to Nervos Layer 1 to Nervos Layer 2 is still going on, but the steps can be consolidated to a single action by the end-user. We will walk through the steps of the developer process, which starts with calculating the Layer 2 deposit receiver address for the user.

Open the example code from [code-examples/bridge/index.js](https://github.com/nervosnetwork/layer2-evm-documentation/blob/master/code-examples/bridge/index.js) in an editor of your choosing.

Replace `<YOUR_ETHEREUM_ADDRESS>` with the Ethereum address that you wish to receive your Layer 2 ckETH tokens.

After replacing all the values, use the following command in the console to execute the script.

```
cd ~/projects/layer2-evm-documentation/code-examples/6-bridge
yarn
node index.js
```

You should see console output similar to this:

```
➜ node index.js 

Using Ethereum address: 0xD173313A51f8fc37BcF67569b463abd89d81844f
Deposit to Layer 2 address on Layer 1: 
ckt1q3g8qjuyaj6vfvftg0r6evnqmhtfzuwzrdxqhg2l83rfklg58ah3suprt8487pe4tzfpadgd3sw806f0wcxglpjkhhjfjhexhztrutwc4yqqqqq5qqqqqdqqqqqf6qqqqzjsqqqqhy0z4ehvactg6n9kyh7pjuyd3lkwcmfjt3ymfpwe00tghn5s483xjqqqqqgqqqqqxqqqqqp3qqqqqp6jr5923enw73q7hscjqnvxhv3leqlfahzccxwmkxcwhejrxmkqqy6qqqqqwq34n6nlqu643ys7k5xcc8rhayhhvry0settmeyetunt39379hvdzue38fgl3lphhnm826d5vw4a38vps38czwsfqqqqqqxqqgqqqqqzy48xe
```

The long address shown at the bottom of your output is your deposit receiver address. This is a Layer 1 address used to automatically transfer funds to Layer 2. We will use this with Force Bridge in the next step.

### 3. Initiate a Force Bridge Transfer

Open the [Force Bridge Testnet](https://testnet.forcebridge.com/bridge/Ethereum/Nervos?xchain-asset=0x0000000000000000000000000000000000000000) in a web browser. Make sure you have the Rinkeby network selected in MetaMask and your selected account has Rinkeby ETH.

You will be transferring from Ethereum to Nervos, and you will be transferring ETH to ckETH. Make sure these values are selected as seen in the screenshots below, if they are not already selected.

<img src={useBaseUrl("img/evmTask4-2.png")}  width="40%"/>
<img src={useBaseUrl("img/evmTask4-3.png")}  width="40%"/>

After you have selected the assets to transfer across the bridge, you can specify the amount in the top box. There will be a small transfer fee, which will be calculated automatically.

In the box marked "Recipient", you will specify the Nervos destination address for the funds. Input the deposit receiver address that was generated in the previous step.

When you have finished inputting and reviewing your selections, click the `Bridge` button. You will be asked to sign the transaction using MetaMask as seen below.

<img src={useBaseUrl("img/evmTask4-4.png")}  width="40%"/>

When you confirm the signing of the transaction in the MetaMask, you will get a modal with a link to the Etherscan explorer, where you can optionally view the progress of mining your transaction on the Ethereum chain.

<img src={useBaseUrl("img/evmTask4-5.png")}  width="40%"/>

You will also see the transaction at the bottom of the page in the **History** section of the UI under the **Pending** tab. It will first be in a "lock asset on Ethereum (x/12)" state, where X is the number of block confirmations on the Ethereum chain.

<img src={useBaseUrl("img/evmTask4-6.png")}  width="40%"/>

When there are at least 12 block confirmations, your pending transaction will transition to the "lock asset on Ethereum (confirmed)" state.

<img src={useBaseUrl("img/evmTask4-7.png")}  width="40%"/>

After all the required confirmations are received, the first part of the transfer is complete. Force Bridge has now received the funds, and the second part of the transfer is to send the SUDT tokens on Nervos' Layer 1. Once this transaction has been submitted, the History status will move from the "Pending" to the "Succeed" tab.

<img src={useBaseUrl("img/evmTask4-8.png")}  width="40%"/>

At this point, the SUDT tokens reside on Layer 1 and are awaiting collection by a Layer 2 validator node. Once a validator node picks them up, the SUDT tokens will be released on Layer 2 to the user's Ethereum account. This process is automatic but can take up to 10 minutes under normal conditions.

### Check Your Layer 2 Balance

If you would like to check your Layer 2 token balance, you can use ["Tokens" page](tokens.md) to find ERC20 token addresses. You are encouraged to do so to verify that the tokens have arrived safely in your account.




