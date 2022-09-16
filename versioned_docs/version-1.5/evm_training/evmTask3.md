---
id: evmTask3
title: 3. Issue a Smart Contract Call to the Deployed Smart Contract
---
import useBaseUrl from "@docusaurus/useBaseUrl";


In this task, we will learn how to make function calls to the smart contract deployed in the previous task. We will provide some simple example code that uses the popular Web3.js library to do so. This code will allow you to interact with your smart contract, which is running on Nervos' [Layer 2](structure.md#layer-1--layer-2) in a nearly identical way to if it was running on Ethereum.

Your smart contract should operate just like it would on Ethereum, but in actuality, it will be running in an EVM environment provided by [Polyjuice](frameworks.md#polyjuice). When combined with [Godwoken](frameworks.md#godwoken), which provides a Layer 2 solution with optimistic rollups, total throughput performance is significantly higher. This means that all users will experience dramatically lower fees and more reliable transaction confirmation than if they were using Ethereum.

## Task Instructions

### Prerequisites

Before you begin on this task you must complete the [first](evm_training/evmTask1.md) and [second](evm_training/evmTask2.md) tasks. If you have not completed them, please do so now.

You will need the private key from the **Ethereum** address you used in the previous task. Make sure this is Ethereum private key for Layer 2, not the private key from your Nervos CKB Layer 1 address. If you do not have this, you can follow the instructions in [this tutorial](evm_training/evmTask5.md) to extract your private key from MetaMask.

This task requires the Code Examples repo ([layer2-evm-documentation](https://github.com/nervosnetwork/layer2-evm-documentation)) which was set up in [task 2](evm_training/evmTask2.md#2.-clone-and-setup-the-code-examples-repository). If you do not have this repo available for any reason, please set it up now.

### 1. Prepare the Smart Contract Address and ABI

In order to execute a function call on a smart contract, it must be deployed, and you must have the ABI that was generated when the code was originally compiled. "ABI" stands for Application Binary Interface, which contains the information an application requires to interface and call functions on the smart contract requires.

In the [previous task](evm_training/evmTask2.md), you compiled and deployed an Ethereum smart contract. You may be able to reuse that smart contract for this task. If it is no longer available, please revisit the [previous task](evm_training/evmTask2.md) and complete it again.&#x20;

The example smart contract from the previous task is `SimpleStorage.sol`, and the corresponding ABI value can be found in `code-examples/2-deploy-contract/artifacts/contracts/SimpleStorage.sol/SimpleStorage.json` after the contract is compiled. Below is the ABI value which has been extracted from this file.

```json
[
    {
      "inputs": [],
      "stateMutability": "payable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "x",
          "type": "uint256"
        }
      ],
      "name": "set",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
]
```

The SimpleStorage contract has also been deployed to Testnet at the address below. You can optionally use it for testing purposes.

```
0xd4A8b3018f0c79f6BD3375C89a5Db47ca11A1C35
```

### 2. Prepare and Run the Example Code to Call the Smart Contract

Next, we will use the example code to make a function call in your smart contract. Open the file `code-examples/3-call-contract/index.js` in an editor of your choosing, and find the `readCall()` and `writeCall()` functions.

The function `readCall()` will read a value from the smart contract without a state change. This does not require a transaction because no data is changing. The `writeCall()` function will write a new value to your smart contract. A transaction will be required because state changes can only occur through transactions. This behavior is the same as on the Ethereum chain.

Next, you need to update the values in `index.js` to match your private keys and smart contract.

#### Private Key

The first thing you will need to do is update `index.js` with your Ethereum private key. This private key will be used to make the function calls, and it should be the same Ethereum private key that funds were added to in the previous tasks. Make sure you use your **Ethereum** private key for Layer 2, not your Nervos CKB Layer 1 private key. Replace `<YOUR_ETHEREUM_PRIVATE_KEY>` with this value. **Always make sure your private key is prefixed with "0x".**

```js
const ACCOUNT_PRIVATE_KEY = '<YOUR_ETHEREUM_PRIVATE_KEY>';
```

#### ABI

Next, add your contract ABI to the script by replacing `<YOUR_CONTRACT_ABI>` with the ABI value from the JSON file which was generated during compilation.

> Note: The `CONTRACT_ABI` constant is expecting an array with your ABI items. Make sure this is a data structure, just like it is in `SimpleStorage.json`, and does not get input as a string.

```js
const CONTRACT_ABI = [<YOUR_CONTRACT_ABI>]; // Array
```

#### Contract Address

Replace `<YOUR_CONTRACT_ADDRESS>` with the address of the Ethereum contract you will call. This value should be a hex string that will be returned after deploying the contract.

```js
const CONTRACT_ADDRESS = '<YOUR_CONTRACT_ADDRESS>';
```

#### Replace the Read Function Name

Locate `<YOUR_READ_FUNCTION_NAME>` within the `readCall()` function. This must be replaced with function name from your contract that is used for reading.

```js
const callResult = await contract.methods.<YOUR_READ_FUNCTION_NAME>().call({
  from: account.address
});
```

#### Replace the Write Function Name

Locate `<YOUR_WRITE_FUNCTION_NAME>` within the `writeCall()` function. This must be replaced with function name from your contract that is used for writing.

```js
const callResult = await contract.methods.<YOUR_WRITE_FUNCTION_NAME>().call({
  from: account.address,
  gas: 6000000
});
```

#### Run the Script

After having replaced all values, use the following command in the console to execute the script.

```
cd ~/projects/layer2-evm-documentation/code-examples/3-call-contract
node index.js
```

Example Output:

```
➜ node index.js

Calling contract...
Read call result: 123
Write call transaction hash: 0xaea90a808e87d838008b12fb15e83651ed7603ffce0997e33f13d9a17345142b
Write call transaction receipt:  {
  transactionHash: '0xaea90a808e87d838008b12fb15e83651ed7603ffce0997e33f13d9a17345142b',
  transactionIndex: 0,
  blockHash: '0xd1c09e906f1ab9ab2f8f2d949dffe2b54a918fcd2509ebe6654ad8b94a9f6c69',
  blockNumber: 26767,
  from: '0xd173313a51f8fc37bcf67569b463abd89d81844f',
  to: '0xd4a8b3018f0c79f6bd3375c89a5db47ca11a1c35',
  gasUsed: 20374,
  cumulativeGasUsed: 20374,
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  contractAddress: null,
  status: true,
  events: {}
}
Read call result: 3332
```

If you've seen transaction hash and the transaction receipt, then congratulations! You have successfully issued a smart contract write call on Nervos Layer 2.