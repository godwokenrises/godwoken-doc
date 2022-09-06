---
id: faq
title: FAQ
---
import useBaseUrl from "@docusaurus/useBaseUrl";

### Why is custodian cell needed in Godwoken?

In short, a [custodian cell](depAndWthd.md#custodian-cell) is an asset held in trust by Godwoken. Custodian cell transfers ownership of the deposit cell to the rollup contract so that the rollup contract can use the amount to process withdrawal requests and conduct operations such as merging custodian cells of the same type on the CKB.

----

### What is Registry Address?

Registry address, or ETH registry address, is a new term introduced in Godwoken v1 which can be understood as a simple two-way mapping of eth_address and gw_script_hash to the registry. It serves as alias mechanism for Godwoken layer 2 account, because some environments require an alias to access an account. For example, there is no Godwoken ID or script in the EVM environment. Therefore, to access an account you have to use an ETH address. For more details, see [Layer 2 Account in Godwoken](layer2Account.md).

----

### Is there any layer2 data on layer1?

The transactions, deposits and withdrawals in layer 2 are contained in the block structure of layer 2. We use the optimistic roll-up mechanism, so we do not verify the signatures of tx s and withdrawals on-chain. For more details, check [Godwoken-scripts](https://github.com/nervosnetwork/godwoken-scripts/blob/master/README.md).

----

### It is so easy to switch from Layer 1 to Layer 2. Why does it take so long in reverse?

Layer 2 can trust Layer 1 because Layer 1 is more secure. But Layer 1 needs more time to make sure everything is fine on Layer 2 especially for optimistic rollup (a popular Layer 2 solution). 

Every optimistic rollup L2 uses a challenge mechanism in their withdrawal process. In Godwoken v1, L1 puts the withdrawal into a challenge period (~7 days) after you initiated the withdrawal request, waiting for observers or challengers to report problems. The withdrawal can be approved only when no challenge is submitted. L1 guarantees that every withdrawal is intact and that the funds kept on L2 are safe in this way. Not only Godwoken, other optimistic rollups like arbitrum and optimism also have such a challenge period, e.g. Arbitrum mandates a 7-day challenge period during a withdrawal.

We're actively exploring ways to improve the withdrawal experience and support fast withdrawal. Please stay tuned.

----

### Why does it require an amount of 63 CKBs to an intermediate address to move funds back to Layer 1 when using Yokai? 

This is a constraint of the current release of Godwoken (L2). Godwoken uses a withdrawal recipient account (actually a cell in Nervos' term) on Nervos CKB (L1) to act as an identity authenticator. Godwoken authenticates the receiver's identity by using an account signature provided by the recipient and then sends corresponding withdrawal funds. The recipient account requires at least 63 CKBs to be stored on Nervos CKB (L1). Those 63 CKBs are still yours and can be claimed back if you don't need this account later. [Actually, anything stored on Nervos CKB (L1) requires an amount of CKBs (1 CKB = 1 Byte) for its storage space. L1 storage is validated by global consensus, thus it's scarce and needs to be used carefully.](https://docs.nervos.org/docs/basics/concepts/economics)

This constraint is a temporary mechanism and will be removed in a future release. Godwoken is the world's first rollup running on a UTXO blockchain. The answer is not ready-made, and we have to explore different ways to find the best design. It's your feedback and patience that help us improve Godwoken and make it better in future iterations. Thank you.

----

### How to Get Layer 1 Block Number?

Defi contracts often require interests to be calculated by block number. However, both v0 and v1 networks do not have a fixed layer2 block interval (it is affected by layer1 block interval).

Arbitrum solved this issue by providing a syscall to get the layer1 block number. However, this does not work for Godwoken since the layer1 chain, CKB itself, does not have a fixed block interval (CKB block interval is adjusted by the uncle block rate at each epoch).

We recommend developers use layer2 block timestamp as the trusted timestamp to calculate on-chain interests. More information is available in the following discussion thread: https://talk.nervos.org/t/how-to-get-layer-1-block-number-on-layer-2/6647

----

### CKB transfer on Godwoken testnet via Metamask has failed. What is the solution?

In Godwoken, `transaction.to` must be a contract address. In RPCs such as `eth_call`, `eth_estimateGas` and `eth_sendRawTransaction`, the `to` parameter can only be a contract address, not an EOA address.

To transfer value from EOA to EOA, we recommend developers to use the `transfer function` in the `pCKB_ERC20_Proxy` contract which combines sUDT_ID=1. In Godwoken and Polyjuice, we use CKB as pCKB. More details can be found at [pCKB](integration.md#pckb) and [Godwoken Web3 API Compatibility](integration.md#godwoken-web3-api-compatibility). The contract addresses are:

 - mainnet_v1 pCKB_ERC20_Proxy contract: 0x7538C85caE4E4673253fFd2568c1F1b48A71558a (pCKB)
 - testnet_v1 pCKB_ERC20_Proxy contract: 0xE05d380839f32bC12Fb690aa6FE26B00Bd982613 (pCKB)