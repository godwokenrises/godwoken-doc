---
id: faq
title: FAQ
---
import useBaseUrl from "@docusaurus/useBaseUrl";

### Why is custodian cell needed in Godwoken?

In short, a [custodian cell](depAndWthd.md#custodian-cell) is an asset held in trust by Godwoken. Custodian cell transfers ownership of the deposit cell to the rollup contract so that the rollup contract can use the amount to process withdrawal requests and conduct operations such as merging custodian cells of the same type on the CKB.

----

### What is an ETH Registry Address?

[ETH address registry](https://github.com/godwokenrises/godwoken-scripts/blob/master/c/contracts/eth_addr_reg.c) is a new built-in contract introduced in Godwoken v1 which can be understood as a simple two-way mapping between `eth_address` and `gw_script_hash`. It serves as the alias mechanism for Godwoken layer 2 account. Because there is no concept of Godwoken ID or script in the EVM environment，with the ETH address registry, we could locate a Godwoken account by its ETH address. For more details, see [Layer 2 Account in Godwoken](layer2Account.md).

----

### How to get Layer 1 Block Number?

DeFi contracts often require interests to be calculated by block number. However, both v0 and v1 networks do not have a fixed layer2 block interval (it is affected by layer1 block interval).

Arbitrum solved this issue by providing a syscall to get the layer1 block number. However, this does not work for Godwoken since the layer1 chain, CKB itself, does not have a fixed block interval (CKB block interval is adjusted by the uncle block rate at each epoch).

We recommend developers use layer2 block timestamp as the trusted timestamp to calculate on-chain interests. More information is available in the following discussion thread: https://talk.nervos.org/t/how-to-get-layer-1-block-number-on-layer-2/6647

----

### What data is committed to layer-1 by Godwoken?

The transactions, deposits and withdrawals are contained in the block [structure](https://github.com/godwokenrises/godwoken/blob/v1.5.0/crates/types/schemas/godwoken.mol#L97-L110) of a layer-2 block, which is committed to layer-1. We use the optimistic rollup mechanism, so we do not verify the signatures of transactions and withdrawals on-chain. For more details, check [Godwoken-scripts](https://github.com/godwokenrises/godwoken-scripts/blob/master/README.md).

----

### Time-lapse of switch from layer 2 to layer 1

Q: It is so easy to switch from Layer 1 to Layer 2. Why does it take so long in reverse?

A: Layer 2 can trust Layer 1 because Layer 1 is more secure. But Layer 1 needs more time to ensure everything is fine on Layer 2 especially for optimistic rollup (a popular Layer 2 solution). 

Every optimistic rollup L2 uses a challenge mechanism in its withdrawal process. In Godwoken v1, L1 puts the withdrawal into a challenge period (~7 days) after you initiated the withdrawal request, waiting for observers or challengers to report problems. The withdrawal can be approved only when no challenge is submitted. L1 guarantees that every withdrawal is intact and that the funds kept on L2 are safe in this way. Not only Godwoken, but other optimistic rollups like arbitrum and optimism also have such a challenge period, e.g., Arbitrum mandates a 7-day challenge period during a withdrawal.

We're actively exploring ways to improve the withdrawal experience and support fast withdrawal. Please stay tuned.

----

### Transferring funds to layer-1 must send tokens to the intermediate address

Q: Why does it require an amount of 63 CKBs to an intermediate address to move funds back to Layer 1 when using Yokai? 

A: This is a constraint of the current release of Godwoken (L2). Godwoken uses a withdrawal recipient account (actually a cell in Nervos' term) on Nervos CKB (L1) to act as an identity authenticator. Godwoken authenticates the receiver's identity by using an account signature provided by the recipient and then sends corresponding withdrawal funds. The recipient account requires at least 63 CKBs to be stored on Nervos CKB (L1). Those 63 CKBs are still yours and can be claimed back if you don't need this account later. [Actually, anything stored on Nervos CKB (L1) requires an amount of CKBs (1 CKB = 1 Byte) for its storage space. L1 storage is validated by global consensus, thus it's scarce and needs to be used carefully.](https://docs.nervos.org/docs/basics/concepts/economics)

This constraint is a temporary mechanism and will be removed in a future release. Godwoken is the world's first rollup running on a UTXO blockchain. The answer is not ready-made, and we have to explore different ways to find the best design. It's your feedback and patience that help us improve Godwoken and make it better in future iterations. Thank you.

----

### Getting the transaction completed faster

Q: The average block confirmation interval on Godwoken is 30s or more, yet I would like to have my transactions completed more quickly, what should I do to make this happen?

A: This can be done with the Godwoken instant finality feature. Instant finality is a feature of Godwoken aimed at return to users an Ethereum-like receipt of the transaction, giving users a faster way to verify the status of the transaction before it goes on-chain. 

To utilise this feature, simply send the transaction and obtain forthwith the [`eth_getTransactionReceipt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_ gettransactionreceipt) transaction receipt will suffice.

Godwoken average block confirmation interval can be viewed at:
- Avg. Block Time of Godwoken testnet_v1: https://v1.testnet.gwscan.com/
- Avg. Block Time of Godwoken mainnet_v1: https://v1.gwscan.com/

----

### Why the layer-2 block timestamp is inaccurate

Q: The layer-2 block's timestamp is not always accurate, and it usually differs from the real-world time by a few minutes. Why is it inaccurate?

A: The layer-2 block's timestamp is linked to the [CKB block median timestamp](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0027-block-structure/0027-block-structure.md#timestamp-uint64), which is calculated from the last 37 CKB blocks. While using the layer-1 blockchain time, the layer-2 timestamp can be secured by the layer-1 miners. Additionally, since the layer-1 blockchain time is a median value, it is typically later than the actual real-world time.
