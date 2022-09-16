---
id: evmTask6
title: 6. Withdraw From Layer 2 Back to Layer 1
---
import useBaseUrl from "@docusaurus/useBaseUrl";


Withdrawing an asset from [Layer 2](structure.md#layer-1-layer-2) back to [Layer 1](structure.md#layer-1--layer-2) is another step in the roundtrip process of interoperability. [Godwoken](frameworks.md#godwoken) is a Layer 2 that is a natural extension of Layer 1, so it has deep integration allowing it to function seamlessly using a built-in withdrawal mechanism.

Deposits from Layer 1 to Layer 2 are quick. This is because Layer 1 has stronger security than Layer 2. When a deposit is made to Layer 2, it can reliably trust Layer 1 after waiting for only a few confirmations. However, a withdrawal is the opposite. When a withdrawal is made to Layer 1, it must rely on Layer 2, which inherently has lower security. For this reason, the number of confirmations required is much higher in order to guarantee that the security remains reliable. It takes approximately five days from the start of the withdrawal process to the point where funds are actually released on Layer 1.

This withdrawal duration may seem exceptionally long, but it is necessary at this stage. Godwoken uses an optimistic rollup architecture that only allows a single honest node in the network. This provides an exceptionally secure basis for Layer 2, but the tradeoff is that it requires a "challenge period" when exiting from Layer 2. This is a period where Layer 2 network operators have time to check and raise issues with any potentially malicious transactions and roll back if necessary. The safety of the network is the first concern. Network parameters may be changed in the future, but only after it has been proven to be safe. It is also possible that other solutions will be created in the future to allow for faster exits from Layer 2.

## Task Instructions

In this task, you will use withdraw from your Layer 2 account. This is the first part of the withdrawal process, and the funds must still undergo a five-day waiting period before they are unlocked and released. The funds will be unlocked automatically after the waiting period.

**On the testnet, the withdrawal period is shorter, and you may receive your funds within an hour.**

### Prerequisites

Before starting this task, you must complete the [first task](evm_training/evmTask1.md) to create a Godwoken account on the EVM Layer 2 Testnet. If you have not already done so, please do so now.

### 1. Go to Godwoken Bridge <a href="#1.-go-to-create-layer-2-account-tab-on-ckb-tools-website" id="1.-go-to-create-layer-2-account-tab-on-ckb-tools-website"></a>

Start by visiting [testnet.bridge.godwoken.io](https://testnet.bridge.godwoken.io). Make sure MetaMask wallet is installed in your browser. Switch to the "Withdrawal" view and click "Connect" button to connect your account.

<img src={useBaseUrl("img/evmTask6-1.png")}  width="40%"/>

### 2. Submit withdrawal request

Type the amount of CKB you want to withdraw in the "Withdraw" input field and press "Request Withdrawal".

<img src={useBaseUrl("img/evmTask6-2.png")}  width="40%"/>

Press "Confirm" again.

<img src={useBaseUrl("img/evmTask6-3.png")}  width="40%"/>

Now sign the MetaMask transaction. This is a Typed Signature which means you can see the details of the request you're signing. You can use this data to double-check everything matches your intentions.

<img src={useBaseUrl("img/evmTask6-4.png")}  width="40%"/>

After signing the transaction, you should see a notification confirming that a withdrawal request has been created.

<img src={useBaseUrl("img/evmTask6-5.png")}  width="40%"/>

It means you have successfully initiated a withdrawal process.

After five or ten minutes, you should be able to see your withdrawal request in "Pending" transactions:

<img src={useBaseUrl("img/evmTask6-6.png")}  width="40%"/>

When all the "Blocks remaining" will be mined and "Estimated time left" will be elapsed, you should see your funds back on your Layer 1 account.

Congratulations, you have completed the task! 👏
