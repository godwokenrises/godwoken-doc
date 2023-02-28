---
id: gasless-with-ERC4337
title: How Godwoken experiments gasless transaction using simplified ERC-4337 proposal
---

This post is supposed to introduce our recent works about bringing a gasless-transaction feature on Godwoken, the generic optimistic roll-up solution built on the CKB network. It covers the basic principle and details about how the gasless feature works based on simplified ERC-4337 specs. We would also love to treat it as an opportunity to discuss the pros and cons of such a model with the most intelligent readers in crypto.

## Basic Idea

Since layer2 is an extended network for the underlying layer1 blockchain, it serves as an ambition to embrace mainstream users, in which most of them are new to the crypto world and hard to onboard, due to the gas problem:
1. you need to understand how gas works to send a transaction, while most internet services we are using today are free of charge and easy to pay.
2. you need to have some cryptocurrencies in your wallet before you can pay for the gas to do anything on-chain.

When most users are on their first time onboard, they are often stuck at these two problems at the same time. On the other hand, some developers are eager to gain new users, they are willing to pay gas fees for users to use their product or play their blockchain games. There just doesn't exist an easy way to do that.
The basic idea of the gasless transaction is to allow users to send free-charged transactions so they can freely use the on-chain application first and then charge back from the application the transaction interacts with. In another way, the application is sponsoring the user's transaction so users don't need to pay for themselves.
For Godwoken to do that, we need to solve two problems:

## How to let users submit free-charged transactions

The transaction fee in EVM-equivalent blockchains is charged based on the gas price and the total gas used by this transaction. EIP-1559 gives a more complex model about this but since that's out of topic for this post, we will not touch it here.

> gas_fee = gas_price * gas_used

- the gas used is determined by what the transaction is doing (e.g. How much space it writes to the blockchain? Does it consume a lot of CPU to process computation?).
- the gas price is determined by how much you are willing to bid the block_producer to pack your transaction ASAP.

This mechanism works like a bidding marketplace for transaction fees. The block_producer sorts the transaction by gas price from high to low, then pack the first transaction from the top down in order to make it a profitable business.
Normally when the gas price is set to 0, the transaction won't be accepted by block_producer, since it takes the cost for the block producer to execute the transaction and included it into a new block.
Our gasless feature uses 0 gas price as a unique marker to allow users to submit gasless transactions. It is intuitive from the user’s point of view and more importantly, it only takes little work to change the code in Godwoken mem-pool implementation. 
With the gasless feature enabled, when Godwoken block_producer sees a transaction with 0 gas price, they will first check if the transaction is a valid gasless transaction, if it is, the block producer will reveal the real gas price (the sponsoring gas price) from this transaction, and sort the transaction in the mem-pool according to this real price, the rest work just becomes the same with normal transactions.
But How does one transaction with 0 gas price become a valid gasless transaction? This brings us to the second problem:

## How to charge the application for sponsoring transactions

In order to charge the application that sponsors the gasless transactions, the application developer must pre-deposit some funds and the application must have the ability to automatically check if they are willing to sponsor one specific transaction. If it does, it should then automatically transfer the transaction fee to the block producer who packs the transaction.
The Galsess feature encodes those logics into 2 EVM smart contracts and uses them to handle the process. They are called Paymaster and Entrypoint.

### 1. Paymaster

This contract is supposed to be written and controlled by application developers. 
It must have some pre-deposit funds to pay the gas fee for sponsoring gasless transactions. it is also in charge of validating if the transaction meets some specific requirements for sponsoring. 
For example, the paymaster can encode some mature ideas from traditional industries about how to onboard new users.
One validating logic can be Youtube's one-month free premium trial. The paymaster could check the block timestamp to reject sponsoring those users who have passed the expired time. 
Another example might be a blockchain gaming dApp that decides every new user will have the first 100 transactions fee-free. When the user sends the 101st transaction, the paymaster will stop sponsoring the gas fee. 
You can even have an interesting idea to leverage the gasless feature to let users pay the gas fee with non-native tokens. Say, one transaction can be sponsored only if the user owns some NFTs or some tokens you issued.
These ideas can also combine with some basic whitelist mechanisms. For example, when a user reaches a certain level, his/her public key will automatically join into the paymaster’s whitelist. And then the sponsoring premium will be unlocked for him/her.
The idea here is to make application developers focus on their needs while having the flexibility to set rules for sponsoring to do whatever they want.

### 2. Entrypoint

This contract is supposed to be deployed by the Godwoken network and must be owned by no one.

The entrypoint contract contains 3 parts:

- **managing fund pool**: In order to let Paymaster pre-deposit funds, Entrypoint also acts as a fund pool. When a paymaster transfer tokens to Entrypoint, Entrypoint records every paymaster's deposit balance. Entrypoint also has the ability to move the funds to block_producer after confirming that the paymaster is willing to sponsor the gas fee.
- **validating and executing**: Check if the paymaster is willing to sponsor one specific transaction, this involves calling the paymaster contract to get the validating result. If the result is good, Entrypoint is also responsible for actually executing this transaction, the execution is often related to some business logic of the application.
- **calculating and transferring**: After executing the transaction, Entrypoint will calculate how much gas fee the transaction costs, and take the corresponding cost from the paymaster balance (deposited in Entrypoint fund pool, remember?) to the block producer.

### Workflow

When a user signs a gasless transaction, the transaction is not only with 0 gas price but also supposed to call Entrypoint contract with a call data explaining what they really want to do. That call data uses a data structure named `UserOperation` and it contains information like the real gas price that the sponsor will pay, the paymaster contract address, the real target contract that the user is calling, etc.

```solidity
struct UserOperation {
    address callContract;
    bytes   callData;
    uint256 callGasLimit;
    uint256 verificationGasLimit;
    uint256 preVerificationGas;
    uint256 maxFeePerGas;
    uint256 maxPriorityFeePerGas;
    bytes   paymasterAndData;
}
```

Entrypoint will take this `UserOperation` call data to call the paymaster contract to validate if such a sponsor transaction is legal. If it is, Entrypoint will charge the gas fee and execute the transaction. If it is not, the transaction should be reverted. 
More details about how the Godwoken full-node assumes a transaction is a gasless transaction:

1. `tx.gasPrice` must be `0`.
2. `tx.data` must be a valid `UserOperation`. 
3. `tx.gas` must equal to **UserOperation.callGasLimit + UserOperation.verificationGasLimit * 3**.
4. `tx.to` must equal to `EntryPoint`'s address.
5. `UserOperation.paymasterAndData` must contain a valid paymaster address.

With users able to send free-charge transactions and block_producer able to receive funds from sponsor dApps, we can finally bring a gasless transaction experience to mainstream users.

### Difference between Gasless feature and ERC-4337

For those who are familiar with ERC-4337 proposal, you might already find entrypoint and paymaster contracts quite ring a bell. In fact, the gasless feature is intended to use a simplified version of ERC-4337 specs. 
The main difference is that ERC-4337 is also an account abstraction focus, which is to make mainstream users get rid of private keys and mnemonic stuff. You might often hear this as "smart-contract wallet". 

In a high-level explanation, 
> ERC-4337 = seedless feature + gasless feature

While in Godwoken, we only do the last half of it. We believe it is a better choice for Godwoken to abort the seedless idea in the current phase, due to many reasons:
- ERC-4337 is still in the protocol design phase, it is not widely accepted by the community. It might take a while before it makes a real influence in the crypto industry. However, we want the users and developers to enjoy the gasless feature today.
- Godwoken is focused on infrastructure while ERC-4337 is apparently an application-level business. The way Godwoken chooses to implement the gasless feature is more like an optional API, it doesn’t conflicts with the application developers who might wish to pursue a smart wallet opportunity when ERC-4337 is ready in the future.
- ERC-4337 is very flexible and brings more complexity thus making it unrealistic to safely use in the production stage right now.
- There is a gap between smart contract wallets and key-based wallets. Most users today are still using key-based wallets.
- Since Godwoken is built on the UTXO model of the CKB blockchain, there is a lot of space to explore account abstraction ideas, and it might not happen on the EVM-compatible level.

The seedless vision of ERC-4337 introduces a lot of complex details and involves different ecosystem actors in order to make it work. To implement account abstraction, ERC-4337 makes the user sign `UserOperation` call data and sends them to a separate mem-pool, A special class of actor called bundlers (either block builders, or users that can send transactions to block builders through a bundle marketplace) package up a set of these objects into a transaction making a special calling to `Entrypoint`, and that transaction then gets included in a block.
Godwoken inherent the `UserOperation` idea from ERC-4337 but exclude the complexity part of account abstraction. The gasless feature allows the user to sign a transaction with 0 gas price to call entrypoint contract with `UserOperation` call data. Since the user is still signing a transaction instead of a `UserOperation` call data, we don't need a separate mem-pool to handle different kinds of requests. Therefore we don't need the role of bundlers either. The block_producer is naturally the bundler who packs the gasless transaction into a new block. 
More clear differences can be found in the details of `UserOperation` structure changes:

```txt
struct UserOperation {
-        address sender;
-        uint256 nonce;
-        bytes   initCode;
+        address callContract;
         bytes   callData;
         uint256 callGasLimit;
         uint256 verificationGasLimit;
         uint256 preVerificationGas;
         uint256 maxFeePerGas;
         uint256 maxPriorityFeePerGas;
         bytes   paymasterAndData;
-        bytes   signature;
}
```

Account-related schemes like signature/nonce/sender address are removed since users are using the original key-based wallet. By having less functionality, we retain less complexity with fewer parties involved required, making it a more practical solution to move quickly and iterate fastly as a feature experimentation.
Some other differences:
- Bundlers in ERC-4337 can pack a batch of UserOperations into one single transaction. While in Godwoken, one UserOperation is mapped to one transaction.
- It is actually very hard to calculate precisely how much the gas fee that one transaction costs. ERC-4337 uses `preVerificationGas` to let bundlers adjust the cost differences. In gasless transaction, Godwoken block_producer must check if the `preVerificationGas` is large enough that the total calculation covers the gas fee cost.

## Summary

In this post, we introduced our recent experiments for the Godwoken gasless feature based on simplified ERC-4337 specs. In general, the ERC-4337 is more flexible and ambitious about the seedless and gasless abilities, while the Godwoken gasless feature is focused on a more practical and simpler dedicated solution to improve layer2’s usability while keeping the ecosystem opened and not conflict with smart wallet developers to work on ERC-4337 solutions.

