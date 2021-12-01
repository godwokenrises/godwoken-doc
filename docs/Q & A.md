Q & A.md

Q: 几位好，这两天伴随Yokai IDO我们收到了大量的用户问询，目前社区里比较集中问询是 "为什么从LY1-LY2那么简单，反过来就要那么久" 以及 “为什么用Yokai去搬钱回L1还需要卡63CKB到一个中间地址”. 针对这两个问题，请问Yokai或Nervos有没有任何开放的文档能够供我们去回应用户的.
We have received plenty of user queries with the Yokai IDO over the last couple of days. Inquiries in the community are currently focused on " why is it so easy to switch from Layer 1 to Layer 2 but why does it take so long in reverse?", and "why it requires an amount of 63 CKBs to an intermediate address to move funds back to Layer 1 when using Yokai ". Are there any open documents from Yokai or Nervos that we can use to answer these two questions for our users?

 
A: 关于为什么反过来要那么久：Godwoken是一个 optimistic rollup，这是 optimistic rollup 技术路线决定的。在 withdraw 到 L1 的过程中，有一个 challenge period 允许用户对有问题的 withdrawal 发起挑战，通过这种方式保证每一笔 withdrawal 是没有问题的，L2 资金是安全的。例如同样是 optimistic rollup 的项目 arbitrum 和 optimism，也是有这样一个挑战期的，而且更长，例如 arbitrum 是 7天。未来会通过 LP 和其他方式提供更好的 withdrawal 体验。
On why it takes so long on the reverse side: Godwoken is an optimistic rollup, and this is the outcome of the optimistic rollup technical route. In the process of withdrawal to L1, there is a challenge period that allows users to challenge problematic withdrawals, in this way to guarantee that every withdrawal is intact and that the L2 funds are safe. For example, arbitrum and optimism, which are also optimistic rollups, also have such a challenge period and are longer, i. e. arbitrum is 7 days. A better withdrawal experience will be available soon through LP and other approaches.

为什么用Yokai去搬钱回L1还需要卡63CKB到一个中间地址
why it requires an amount of 63 CKBs to an intermediate address to move funds back to Layer 1 using Yokai
这是 Godwoken 当前版本的一个限制，因为需要 L1 上存在一个 cell 作为 withdraw user 身份的验证器，通过用户提供这个 L1 cell unlock signature 的方式来证明用户身份是对的，可以收到对应的 withdraw funds. 因为 Godwoken 是世界上第一个在 UTXO 模型上运行的 rollup，并没有现成的答案可以抄，有一些设计是在有限的时间下做出的一个妥协。我们现在已经想到了更好的设计方案，这个限制在后面的版本中会优化掉。
This is a constraint of the Godwoken current version, because it requires a cell on the Layer 1 to act as a authenticator against the withdrawing user's identity, and by having the user provide this L1 cell unlock signature to prove that the user is authentic and can receive the corresponding withdrawal funds. Godwoken is the first rollup running on the UTXO model worldwide, the answer is not ready-made and some of the designs were concessions given the time constraints. However, a better design solution has been devised and this restriction will be optimized in a later release.
