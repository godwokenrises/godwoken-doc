---
id: faq
title: FAQ
---

**Q**: It is so easy to switch from Layer 1 to Layer 2. Why does it take so long in reverse?

**A**: Layer 2 can trust Layer 1 because Layer 1 is more secure. But Layer 1 needs more time to make sure everything is fine on Layer 2 especially for optimistic rollup (a popular Layer 2 solution). 

Every optimistic rollup L2 uses challenge mechanism in their withdrawal process. After you initiated a withdrawal request, L1 put the withdrawal into a challenge period (~ 3 days), waiting for observers or challengers to report problems. The withdrawal can be approved only when no challenge is submitted. L1 guarantees that every withdrawal is intact and that the funds kept on L2 are safe in this way. Not only Godwoken, other optitmisc rollups like arbitrum and optimism also have such a challenge period, e.g. Arbitrum mandates a 7-day challenge period during a withdrawal.

We're actively exploring ways to improve the withdrawal experience and support fast withdrawal. Please stay tuned.

**Q**: Why does it require an amount of 63 CKBs to an intermediate address to move funds back to Layer 1 when using Yokai? 

**A**: This is a constraint of the current release of Godwoken (L2). Godwoken uses a withdrawal recipient account (actually a cell in Nervos' term) on Nervos CKB (L1) to act as an identity authenticator. Godwoken authenticates the receiver's identity by using an account signature provided by the recipient and then sends corresponding withdrawal funds. The recipient account requires at least 63 CKBs to be stored on Nervos CKB (L1). Those 63 CKBs are still yours and can be claimed back if you don't need this account later. [Actually anything stored on Nervos CKB (L1) requires an amount of CKBs (1 CKB = 1 Byte) for its storage space. L1 storage is validated by global consensus thus it's scarce and needs to be used carefully.](https://docs.nervos.org/docs/basics/concepts/economics)

This constraint is a temporary mechanism and will be removed in a future release. Godwoken is the world's first rollup running on a UTXO blockchain. The answer is not ready-made and we have to explore different ways to find the best design. It's your feedback and patience help us improve Godwoken and make it better in future iterations. Thank you.
