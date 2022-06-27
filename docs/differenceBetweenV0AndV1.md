---
id: comparisonEVM
title: Comparison with EVM
---
import useBaseUrl from "@docusaurus/useBaseUrl";

# Difference between v0 and v1

We introduce Godwoken v1 as a release of Godwoken source code and a standalone network. It fixes many compatibility issues on the v0 network. This document explains the difference between the two versions.

### Layer2 Block interval

In the v0 network, a new block is produced every ~48 seconds.

In the v1 network, the block time is dynamically adjusted, currently, the interval is (24 seconds ~ 48 seconds), we may optimize the block interval to a lower value to increase the layer2 TPS.

### How to get layer1 block number

Some Defi contracts need to calculate interests by block number, however, in both v0 and v1 networks, the layer2 block interval isn't a fixed time(it is affected by layer1 block time).

Arbitrum solved this issue by providing a syscall to get the layer1 block number. But it doesn't work for Godwoken since the layer1 chain CKB itself does not have a fixed block interval(CKB block interval is adjusted each epoch by the uncle block rate).

We recommend developers to use layer2 block timestamp as the trusted timestamp to calculate on-chain interests, the discussion is in the thread:

https://talk.nervos.org/t/how-to-get-layer-1-block-number-on-layer-2/6647

### Withdrawal time

In the v0 network, the withdrawal time is 3 days.

In the v1 network, the withdrawal time is adjusted to 7 days, it leaves more time to execute layer2 verification and challenge.

### Failed transactions

In the v0 network failed transactions are rejected by the client.

In the v1 network failed transactions are also packaged into layer2 block, and users need to pay the fee for failed transactions. This behavior improves the compatibility with the Ethereum toolchain and reduces DOS vulnerability.

### Ethereum toolchain compatible

In v0 network developers must use the `polyjuice-provider`  plugin to interact with contracts.

In v1 network developers can interact with contracts through web3 RPC. Ethereum tools such as Metamask can interact with Godwoken without modification.

### CKB transfer

In both v0 and v1, the transfer value transaction is unsupported. Users must transfer their CKB via the CKB ERC20 contract.

### CKB decimals

CKB is `8` decimals on layer1, however, to be compatible with the Ethereum toolchain, we change the decimals of CKB to `18` on layer2, just like the ETH.

Users operate CKB in Metamask or other Ethereum tools in `18` decimals. In the contract, CKB is also represented in `18` decimals.

Withdraw from layer2 must be in `8` decimals, so you cannot withdraw CKB that is less than `8` decimals (less than `1 shannon`) from layer2.

### Minimal gas price

To prevent DoS attacks, a minimal gas price is introduced into the v1 network, currently, the minimal gas price is `1000 shannon`.
