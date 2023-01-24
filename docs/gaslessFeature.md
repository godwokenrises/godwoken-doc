---
id: gasless-feature
title: Gasless Feature
---

import useBaseUrl from "@docusaurus/useBaseUrl";

The gas fee is preventing new users step into the web3 world. Users must learn to get the native token (CKB or ETH) before playing a blockchain game or exchanging tokens with a DEX. The gasless feature can provide a way for developers to sponsor transaction fees for users to give them a smooth experience.

The gas feature is based on the [ERC-4337 solution](https://eips.ethereum.org/EIPS/eip-4337) but way simpler. To use a such feature, users sign and send a special gasless transaction to call a specific smart contract named `Entrypoint`, then `Entrypoint` will call another smart contract named `Paymaster` deployed by developers to check if they are willing to pay the gas fee for this transaction. The special gasless transaction must satisfy the requirements:

- `tx.data` must be the call data of calling `Entrypoint`'s `handleOp(UserOperation calldata op)` function, which contains the target contract and the paymaster address.
- Must set `tx.gasPrice` to 0 (compatible with Metamask api)
- The `tx.to` must be set to the `Entrypoint` contract.
- `tx.gas` is equals to `op.callGasLimit + op.verificationGasLimit * 3`.


### Use cases

Each solving some decentralized problem. WIth gasless feature some of dapps could be improved with solutions like:
 - DEX/Lending and rest transaction gas payments with project token (descreasing project inflation);
 - NFT minting and exchange (to lower the entry threshold for the crypto gaming);


### How to use gasless transaction for your dapp

Let's say we have the entrypoint contract `ENTRYPOINT_CONTRACT_ADDRESS` and as a game developer, we want to pay the gas fee for some whitelist users, so we wrote a paymaster contract just like [this one](https://github.com/godwokenrises/account-abstraction/blob/gw-gasless/contracts/samples/GaslessDemoPaymaster.sol) as `PAYMASTER_CONTRACT_ADDRESS`.

dapp frontend using ethers.js

```ts
      // define UserOp
      const userOp: UserOperationStruct = {
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
      const userOp = abiCoder.encode(["tuple(address callContract, bytes callData, uint256 callGasLimit, uint256 verificationGasLimit, uint256 maxFeePerGas, uint256 maxPriorityFeePerGas, bytes paymasterAndData) UserOperation"], [userOp]);
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
      // 2. or just use ethers contract factory with EntryFactory and call directly it
      {
        // Send tx with a valid user.
        const EntryPoint = await ethers.getContractFactory("EntryPoint");
        const entrypoint = await EntryPoint.attach(ENTRYPOINT_CONTRACT_ADDRESS);
        const tx = await entryPoint.connect(whitelistUser).handleOp(userOp, {gasLimit: 100000, gasPrice: 0});
        await tx.wait();
      }
```

### How to configure a paymaster contract

From previous example we have deployed contract like [this one](https://github.com/godwokenrises/account-abstraction/blob/gw-gasless/contracts/samples/GaslessDemoPaymaster.sol). However this contract should be configurable in order to make it workable through web3 api. In order to do this, please execute the following smart contract methods:
1. Execute `deposit` [method](https://github.com/godwokenrises/account-abstraction/blob/541f7cac9d83e75d152e7a58bec6d97b51221012/contracts/core/GaslessBasePaymaster.sol#L68) on `paymaster` in order to add balance. This is required as all gasless tx costs will be covered by these balance on `paymaster` contract.
2. Execute `addStake` [method](https://github.com/godwokenrises/account-abstraction/blob/541f7cac9d83e75d152e7a58bec6d97b51221012/contracts/core/GaslessBasePaymaster.sol#L85) in order to register your `paymaster` on the `entrypoint`. This will add `paymaster` contract allowance to perform as `gasless provider` for you project.


### Project sample

https://gasless-nft-ui.pages.dev/ - first test NFT minting dapp in a gasless way with payment in test tokens

Example of codebase: https://github.com/BuildClub/gassless-nft-minter

Test project token for payment - [0x882e1EA0c0f49607711108Ffe9343124ae50431E](https://gw-explorer.nervosdao.community/address/0x882e1EA0c0f49607711108Ffe9343124ae50431E)

Paymaster address - [0x33F29EA00f022dF9e72a2bc7799Ddc652792E007](https://gw-explorer.nervosdao.community/address/0x33F29EA00f022dF9e72a2bc7799Ddc652792E007)

Entrypoint address - [0x791ec459f57362256f313f5512bdb9f6d7cae308](https://gw-explorer.nervosdao.community/address/0x791ec459f57362256f313f5512bdb9f6d7cae308)

NFT address - [0x9A39d4548eECC296bA4a7d0CE7960DefC662D4Fd](https://gw-explorer.nervosdao.community/address/0x9A39d4548eECC296bA4a7d0CE7960DefC662D4Fd)
