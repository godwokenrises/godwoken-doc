---
id: v0difv1
title: Differences between v0 and v1
---
import useBaseUrl from "@docusaurus/useBaseUrl";

Godwoken v1 is a release of the Godwoken source code and a standalone network. This release fixes many compatibility issues of the Godwoken v0 network. The following document explains the differences between the two versions.

## Layer 2 Block Interval

- The v0 network produces a new block every 48 seconds.
- The block interval in the v1 network is dynamically adjusted. Currently, the interval is between 24 and 48 seconds. We may optimize the layer 2 TPS by lowering the block interval.

## How to Get Layer 1 Block Number

Defi contracts often require interests to be calculated by block number, however, both v0 and v1 networks do not have a fixed layer2 block interval (it is affected by layer1 block interval).

Arbitrum solved this issue by providing a syscall to get the layer1 block number. However, this does not work for Godwoken since the layer1 chain, CKB itself, does not have a fixed block interval (CKB block interval is adjusted by the uncle block rate at each epoch).

We recommend developers use layer2 block timestamp as the trusted timestamp to calculate on-chain interests. More information is available in the following discussion thread: https://talk.nervos.org/t/how-to-get-layer-1-block-number-on-layer-2/6647

## Withdrawal Time

- In the v0 network, the withdrawal time is 3 days.
- In the v1 network, the withdrawal time is adjusted to 7 days. This gives more time for layer2 verification and challenge.

## Failed Transactions

- In the v0 network, failed transactions are rejected by the client.
- In the v1 network, failed transactions are packaged into layer2 blocks, and users must pay fees for the transactions. This behavior improves compatibility with the Ethereum toolchain and reduces vulnerabilities to DoS attacks.

## Ethereum Toolchain Compatible

- In the v0 network, developers must use the `polyjuice-provider` plugin to interact with contracts.
- In the v1 network, developers can interact with contracts through Web3 RPC, and Ethereum tools such as MetaMask can interact with Godwoken without modification.

## CKB Transfer

In both v0 and v1, the transfer value transaction is unsupported. Users must transfer their CKB via the CKB ERC20 contract.

## CKB Decimals

CKB is `8` decimals on layer 1. To be compatible with the Ethereum toolchain, we change the decimals of CKB to `18` on layer 2 in order to make it the same as ETH.

Users operate CKB in Metamask or other Ethereum tools in `18` decimals. In the contract, CKB is also represented in `18` decimals.

A withdrawal from layer 2 must be in 8 decimals, so you cannot withdraw CKB that is less than `8` decimals (less than `1 shannon`) from layer2.

## Minimal Gas Price

To prevent DoS attacks, a minimal gas price is introduced into the v1 network. Currently, the minimal gas price is around `0.00009 pCKB`(=[9E13](https://www.wolframalpha.com/input?i=9E13)), which means that a normal ERC20 transfer will cost less than $0.01.
