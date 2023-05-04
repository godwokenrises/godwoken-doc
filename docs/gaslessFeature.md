---
id: gasless-feature
title: Gasless Feature
---

import useBaseUrl from "@docusaurus/useBaseUrl";

Gas fees prevent new users from entering the Web3 world every day. This forces new users to acquire the native token (CKB or ETH) before participating in blockchain games or exchanging tokens on a DEX, which can be challenging. The gasless feature enables developers to sponsor transaction fees for users to ensure a smooth user experience.

The gas feature is based on a simpler version of the [ERC-4337 solution](https://eips.ethereum.org/EIPS/eip-4337). To use such a feature, users sign and send a unique gasless transaction to call a specific smart contract named `Entrypoint`, `Entrypoint` will then call another smart contract named `Paymaster`, which developers deploy to check if they are willing to pay the gas fee for this transaction. The unique gasless transaction must satisfy these requirements:

- `tx.data` must be the call data of calling `Entrypoint`'s `handleOp(UserOperation calldata op)` function, which contains the target contract and the paymaster address.
- Must set `tx.gasPrice` to 0 (compatible with Metamask api)
- The `tx.to` must be set to the `Entrypoint` contract.
- `tx.gas` is equals to `op.callGasLimit + op.verificationGasLimit * 3`.

The gasless feature doesn't work with the native token transfer, which means the user still needs to pay the gas fee. And it doesn't allow users to pay the gas fee with ERC20 tokens either. The gasless feature only supports paying the gas fee with native tokens.

### Use cases

Each solves some decentralized problem. With this gasless feature, some of these dapps can be improved with solutions like:
 - DEX/Lending and rest transaction gas payments with project token (decreasing project inflation);
 - NFT minting and exchange (to lower the entry threshold for crypto gaming);


### How to use gasless transactions for your dapp

Let's say we have the entrypoint contract `ENTRYPOINT_CONTRACT_ADDRESS`, and as a game developer, we want to pay the gas fees for some whitelist users, so we'll write a paymaster contract just like [this one](https://github.com/godwokenrises/account-abstraction/blob/gw-gasless/contracts/samples/GaslessDemoPaymaster.sol) as `PAYMASTER_CONTRACT_ADDRESS`.

dapp frontend using ethers.js

```ts
      // define UserOp
      const userOperation: UserOperationStruct = {
          callContract: realGameContract.address,
          callData: realGameContractCallData,
          callGasLimit: gasToExecuteRealGameContractCallData,
          verificationGasLimit: gasToVerifyPaymaster,
          maxFeePerGas: gasPrice,
          maxPriorityFeePerGas: gasPrice,
          paymasterAndData: PAYMASTER_CONTRACT_ADDRESS 
      }
      
      // 1. construct and send gasless transaction via native sendTransaction
      const abiCoder = new ethers.utils.AbiCoder();
      const userOp = abiCoder.encode(["tuple(address callContract, bytes callData, uint256 callGasLimit, uint256 verificationGasLimit, uint256 maxFeePerGas, uint256 maxPriorityFeePerGas, bytes paymasterAndData) UserOperation"], [userOperation]);
      // first 4 bytes of keccak hash of handleOp((address,bytes,uint256,uint256,uint256,uint256,bytes))
      const fnSelector = "fb4350d8";
      // gasless payload = ENTRYPOINT_HANDLE_OP_SELECTOR + abiEncode(UserOperation)
      const payload = "0x" + fnSelector + userOp.slice(2);
      const gaslessTx = {
        from: whitelistUser.address,
        to: ENTRYPOINT_CONTRACT_ADDRESS,
        data: payload,
        gasPrice: 0,
        gasLimit: 1000000,
        value: 0,
      }
      const signer = new ethers.Wallet("private key");
      const tx = await signer.sendTransaction(gaslessTx);
      await tx.wait();
      // 2. or just use ethers contract factory with EntryFactory and call it directly
      {
        // Send tx with a valid user.
        const EntryPoint = await ethers.getContractFactory("EntryPoint");
        const entrypoint = await EntryPoint.attach(ENTRYPOINT_CONTRACT_ADDRESS);
        const tx = await entryPoint.connect(whitelistUser).handleOp(userOp, {gasLimit: 100000, gasPrice: 0});
        await tx.wait();
      }
```

### How to configure a paymaster contract

From the previous example we have deployed a contract like [this one](https://github.com/godwokenrises/account-abstraction/blob/gw-gasless/contracts/samples/GaslessDemoPaymaster.sol). However, this contract should be configurable to work through the web3 API. To do this, please execute the following smart contract methods:
You can find more detail in the [unit test](https://github.com/godwokenrises/account-abstraction/blob/gw-gasless/test/gasless_paymaster.test.ts#L45). In this test, we deploy a DummyContract as our dapp. Then we can send some gasless trasactions to interface with the DummyContract.
1. The developer should execute `addStake` [method](https://github.com/godwokenrises/account-abstraction/blob/541f7cac9d83e75d152e7a58bec6d97b51221012/contracts/core/GaslessBasePaymaster.sol#L85) to register your `paymaster` on the `entrypoint`. This will add `paymaster` contract allowance to perform as a `gasless provider` for your project. 
2. The developer should deposit some balance to the paymaster through entrypoint. You can execute `deposit` [method](https://github.com/godwokenrises/account-abstraction/blob/541f7cac9d83e75d152e7a58bec6d97b51221012/contracts/core/GaslessBasePaymaster.sol#L68) on `paymaster` to add a balance. Or, you can execute `entrypoint.depositTo(address paymaster)` with a balance directly. This is required as all gasless tx costs will be covered by the balance on the `paymaster` contract.
3. We can put an account to the whitelist by executing [addWhitelistAddress](https://github.com/godwokenrises/account-abstraction/blob/541f7cac9d/contracts/core/GaslessBasePaymaster.sol#L127). So now, only users from the whitelist can send gasless transactions.
4. Just putting a user in the whitelist is dangerous. We need to make sure the user can only send transactions to our dapp(which is DummyContract in this sample). So we need another `whitelist` of contract addresses. We can execute [addAvailAddr](https://github.com/godwokenrises/account-abstraction/blob/541f7cac9d/contracts/core/GaslessBasePaymaster.sol#L140) to put DummyContract into the whitelist. You can find that our demo paymaster will check the contract address [here](https://github.com/godwokenrises/account-abstraction/blob/541f7cac9d/contracts/samples/GaslessDemoPaymaster.sol#L32).
5. Attention, please set the same values to `maxFeePerGas` and `maxPriorityFeePerGas` in UserOperation. Otherwise, `block.basefee` which is introduced in [EIP-3198](https://eips.ethereum.org/EIPS/eip-3198) since London hard fork, will be used to calculate the gas price. For now, godwoken doesn't support London hard fork yet, so you will see a weird error if you give them different values.

All setup! Now the user can send gasless transactions to DummyContract.

### Project sample

https://gasless-nft-ui.pages.dev/ - first test the NFT minting dapp in a gasless way with payment in test tokens

Example of codebase: https://github.com/BuildClub/gassless-nft-minter

Test project token for payment - [0xced7c0c6DE215c995Cf08D464f6a2132b2FAD37D](https://v1.testnet.gwscan.com/address/0xced7c0c6DE215c995Cf08D464f6a2132b2FAD37D)

Paymaster address - [0x2078cf0E3535A48f8e28a36b2fCFcEC429162F60](https://v1.testnet.gwscan.com/address/0x2078cf0E3535A48f8e28a36b2fCFcEC429162F60)

Entrypoint address - [0x791ec459f57362256f313f5512bdb9f6d7cae308](https://v1.testnet.gwscan.com/address/0x791ec459f57362256f313f5512bdb9f6d7cae308)

NFT address - [0x9bFAA0A71390061DF1F69D2640808a015653D84b](https://v1.testnet.gwscan.com/address/0x9bFAA0A71390061DF1F69D2640808a015653D84b)

Here is another demo with less code: [godwoken gasless example](https://github.com/sunchengzhu/godwoken-gasless-example)

### More about paymaster

In this document, we give a demo about how to use a whitelist paymaster. Another great example, and a more practical one, is [TokenPaymaster](https://github.com/godwokenrises/account-abstraction/blob/gw-gasless/contracts/samples/TokenPaymaster.sol). Compare with a whitelist, you can see that it's more convenient to manage users who can send gasless transactions with ERC20 tokens.

You may find something more interesting behind the idea of godwoken gasless feature in here: [How Godwoken experiments gasless transaction using simplified ERC-4337 proposal](gasless-with-ERC4337).
