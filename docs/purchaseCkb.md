---
id: purchaseCKB
title: Purchase CKB
---
import useBaseUrl from "@docusaurus/useBaseUrl";

## Purchase and withdraw

### Purchase on an exchange

If you need to use CKB/pCKB on mainnet, the most common way to get it is to purchase it from an exchange. There are a lot of exchanges on the market, you can visit here to pick an exchange to purchase CKB: [CKB market-cap and chart | CoinMarketCap](https://coinmarketcap.com/currencies/nervos-network/markets/).

The general steps to purchase CKB should be simple, but you may still need some guidance when you complete the purchase and want to transfer your CKB to CKB L1 or Godwoken L2. 

If so, please continue to read the following sections.

:::tip
After browsing the CoinMarketCap site, if you still don't know what exchange to use, here are some of the exchanges we tested, which definitely support the withdrawal of CKB to your `L1 wallet address` and `L1 recharge address`:
- [Binance](https://www.binance.com/)
- [KuCoin](https://www.kucoin.com/)
- [Bittrex](https://global.bittrex.com/)
- [Gate.io](https://www.gate.io/)
:::

### Withdraw from an exchange

If you’ve purchased some CKB on an exchange and want to transfer it to CKB L1, so maybe later you can deposit to Godwoken L2, you should withdraw your CKB from the exchange to your `L1 Wallet Address` first. 

To do that, please visit: [Godwoken Bridge (mainnet)](https://bridge.godwoken.io/). When you open the page, you should connect your wallet with the account you want to deposit CKB to Godwoken Bridge, and then you should be able to see the `L1 Wallet Address` field on the page. 

And then, you should copy the address and go to the exchange, and then withdraw your CKB to the address. If everything works, you should have your CKB transferred to the right account’s `L1 Wallet Address`, and you should see your `L1 Balance` updated on Godwoken Bridge.

:::tip
With a sufficient amount of CKB on L1, you can deposit some CKB to Godwoken L2 and start exploring the fascinating world of Godwoken. For this part of detailed guidance, please visit: [Deposit and Withdrawal](depAndWthd.md#deposit).
:::

### Withdraw from an exchange to Godwoken L2

If you want to transfer 400+ CKB from the exchange to Godwoken L2, in fact you can try to withdraw CKB from the exchange to the `L1 Deposit Address` (You can find this address on Godwoken Bridge like in the previous section) of the target account directly, and once the withdrawal is done, after a while you should see your `L2 Balance` updated on Godwoken Bridge. 

But how does it work? Well, Godwoken treats live cells belong to the `L1 Deposit Address` with sufficient amount of CKB as deposit cells, so transferring assets (with sufficient amount of CKB) to your `L1 Deposit Address` can be regarded as deposit.

:::tip
We don't want to give you too much information at once as it might get your reading progress stuck, so if you have an interest in the details of how the action of deposit works, please visit: [Life of a Godwoken Transaction](https://github.com/godwokenrises/godwoken/blob/ad898e7a9821df3e627737d32865bec85bf1a753/docs/life_of_a_godwoken_transaction.md#deposit).
:::

## Problem with locks and exchanges

Sometimes when you’re withdrawing from an exchange to `L1 Wallet Address` or `L1 Deposit Adderss`, the exchange could stop you and warn that your recipient’s address is invalid, or in a worse case the withdrawal just fails without a warning.

The reason why your withdrawals may fail may be because the exchange you’re using does not support the `Omni-lock` and the `Deposit-lock`, the locks used on `L1 Wallet Address` and `L1 Deposit Adderss`.

### Finding the reason

We don't want to overcomplicate things here, so I won't explain everything about locks but share some reading material, so you can read them individually. 

So, in the world of CKB L1, there are a lot of locks for different situations. For instance, there’s a [SECP256K1/blake160](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0024-ckb-genesis-script-list/0024-ckb-genesis-script-list.md#secp256k1blake160) lock as the default lock script to verify CKB transaction signatures. And as the default lock of CKB, it is commonly supported by exchanges and crypto wallets.

But in Godwoken’s perspective, we need to support transaction signing methods from the outside world, from other popular blockchains like `Ethereum` and `Bitcoin`, and we cannot do this with only the `SECP256K1/blake160` lock. So, here we have some other locks:

- [Omni-lock](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0042-omnilock/0042-omnilock.md): The lock is designed for interoperability with built-in support for verification of transaction signing methods used in Ethereum, Bitcoin and more, you can also read this blog for more details: [Omnilock, a Universal Lock that Powers Interoperability](https://blog.cryptape.com/omnilock-a-universal-lock-that-powers-interoperability-1).
- [Deposit-lock](https://github.com/godwokenrises/godwoken/blob/ad898e7a9821df3e627737d32865bec85bf1a753/docs/deposit_and_withdrawal.md#deposit): The lock is for depositing assets from CKB L1 to Godwoken L2, the block producer of Godwoken will collect cells with deposit-lock and process the deposit requests in blocks.

If the above content is still vague to you, perhaps think of it this way: Different locks correspond to different L1 addresses, and some exchanges just don’t reorganize locks other than the `SECP256K1/blake160` lock. Therefore `L1 Wallet Address` (Omni-lock) and `L1 Deposit Address` (Deposit-lock) may not be valid in the eyes of these exchanges.

### How to solve it

If you have encountered this issue, you can follow the below instructions to safely transfer your CKB to the `L1 Wallet Address` or the `L1 Deposit Address` of the target account.

Since the problem we’re facing is that the exchange doesn’t support the type of address we tend to transfer to, the overall solution is to add an extra step in the middle of buying CKB. Let’s take `L1 Wallet Address` as an example. 

The purchase process previously:

```
Purchase CKB on the exchange → Withdraw to L1 Wallet Address
```

New purchase process that solves our problem:

```
Purchase CKB on the exchange → Withdraw to a crypto wallet → Transfer to L1 Wallet Address
```

You can see the solution is to withdraw to a crypto wallet that supports CKB, and then transfer to the `L1 Wallet Address` of the target account. This is because crypto wallets usually has a higher compatibility to different locks (or they just don't verify the lock of the recipient’s address).

This solution should be simple enough, but as it always need us to make one more step in the process of purchasing CKB, the best solution for us should be to purchase on an exchange that allows us to withdraw to different kind of addresses. However, this is still a solid solution to the problem we’re facing.

Finally, if you have trouble finding a wallet, here are some crypto wallets for you to pick:

- [imToken Wallet](https://linktr.ee/Imtoken_Wallet)
- [Neuron Wallet](https://linktr.ee/NeuronWallet)
