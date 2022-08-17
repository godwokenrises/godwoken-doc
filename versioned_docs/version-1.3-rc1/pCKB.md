---
id: pCKB
title: pCKB
---

# pCKB

**[pCKB](https://github.com/nervosnetwork/godwoken/blob/develop/docs/life_of_a_polyjuice_transaction.md#pckb)** is a defined layer 2 sUDT token type when deploying a Godwoken chain, it is the new concept that Godwoken v1 introduced.

In Godwoken, pCKB is used to collect transaction fees, similar to the role of ETH in Ethereum. Godwoken chain uses CKB as pCKB by default, while different Godwoken chains may use different token types as pCKB.

pCKB, as the unit for calculating transaction fees in Godwoken, has a similar calculating method for transaction fees to that of Ethereum, i.e. , the gas for each smart contract is derived by calculation, while the transaction fee is calculated by multiplying the gas with a specified gas price. In other words, the gas price in Ethereum is calculated as ETH/gas (in wei, i.e. 10-18 ETH), while the gas price in Godwoken is calculated as pCKB/gas. When Godwoken executes a transaction, it will deduct the transaction fee using layer 2 [sUDT](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0025-simple-udt/0025-simple-udt.md) type, which is represented by **pCKB**.

One thing to be noted is that pCKB has different decimals from CKB on layer 1. CKB is `8` decimals on layer 1, but is `18` decimals on layer 2, represented as pCKB. For more detailed about it, please refer to [CKB Decimals](v0difv1.md#ckb-decimals).