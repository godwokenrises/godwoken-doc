---
id: evmTask2
title: 2. Deploy a Simple Ethereum Smart Contract on Polyjuice
---
import useBaseUrl from "@docusaurus/useBaseUrl";

Compiling and deploying a smart contract on Nervos' EVM compatible [Layer 2](structure.md#layer-1-layer-2) is a process that has a lot of similarities to the process on Ethereum. There are only a few minor changes that need to be made.

## Task Instructions

In this task, you will 
<div class="task-wrapper">

- Take a very basic smart contract written in [Solidity](https://soliditylang.org/).
- Compile it to EVM bytecode.
- Deploy it to [Godwoken Testnet](https://v1.testnet.gwscan.com/)

</div>

The code that we will work with in this step will compile and deploy your smart contract. This uses the original version of Hardhat for Ethereum.

The instructions will provide a basic smart contract you can work with, but you should feel free to use any smart contract of your choosing.

### Prerequisites

Before you begin this task, you must complete the [previous task](evm_training/evmTask1.md) to create a Godwoken account on the EVM Layer 2 Testnet. You will also need the private key and Testnet address from the previous task in order to proceed. If you have not completed it, please do so now.
<div class="task-wrapper">

- [Godwoken Account on EVM layer 2 Test](/evm_training/evmTask1.md)
- [Private Key](https://ethereum.org/en/developers/docs/accounts/#account-creation)
- [Testnet address](/evm_training/evmTask1.md#1-go-to-godwoken-bridge)

</div>

> Note: Never use a private key associated with a real account for any of these tasks. The following steps will show you how to extract your private key from MetaMask. But, you should never do this using a MetaMask installation that you use for real funds since this could potentially leak information that could compromise your account.

If you need instructions on how to extract your private key from MetaMask, follow the steps in [this tutorial](evm_training/evmTask5.md).

### 2. Clone and Setup the Code Examples Repository

In this step, you will clone the code examples repository. It contains the material required by this task and future tasks.

Create `~/projects` directory if it doesn't exist.

Linux/macOS:

```
mkdir -p ~/projects
```

Windows (PowerShell):

```
New-Item -ItemType Directory -Force -Path ~/projects
```

Enter the `~/projects` directory and clone the repository.

```
cd ~/projects
git clone https://github.com/nervosnetwork/layer2-evm-documentation.git
cd layer2-evm-documentation
```

Then we install all dependencies:

```
yarn install-all
```

You will find example contract file in 
```
cd ~/projects/layer2-evm-documentation/code-examples/2-deploy-contract/contracts
```

#### Example Smart Contract

Provided below is a simple smart contract example that you can use:

```solidity
pragma solidity >=0.8.0;

contract SimpleStorage {
  uint storedData;

  constructor() payable {
    storedData = 123;
  }

  function set(uint x) public payable {
    storedData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }
}
```

### 3. Deploy a Smart Contract

[Hardhat](https://hardhat.org/) will handle the process of compilation and deployment of the smart contract.

### Deploy.js
```Javascript
//~/project/code-examples/2-deploy-contract/scripts/deploy.js
async function main() {
    const [deployer] = await ethers.getSigners();
    
    console.log("Deploying contracts with the account:", deployer.address);
    
    console.log("Account balance:", (await deployer.getBalance()).toString());
    
    const ContractFactory = await ethers.getContractFactory(`${"YOUR CONTRACT NAME HERE"}`);
    const contract = await ContractFactory.deploy();
    
    console.log("Contract address:", contract.address);
    //...other code
}
  
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});

```

#### Deployment

Replace `<YOUR_PK>` below with your Ethereum private key and run the Hardhat command:

```
cd ~/projects/layer2-evm-documentation/code-examples/2-deploy-contract/
PRIVATE_KEY=<YOUR_PK> npx hardhat run scripts/deploy.js --network godwoken-testnet
```

After running the command, the contract should deploy without any errors. You will be presented with an Ethereum contract address.

Example Output:

```
➜ PRIVATE_KEY=d9066ff9f753a1898709b568119055660a77d9aae4d7a4ad677b8fb3d2a571e5 npx hardhat run scripts/deploy.js --network godwoken-testnet

Deploying contracts with the account: 0xD173313A51f8fc37BcF67569b463abd89d81844f
Account balance: 194999999999998673136
Contract address: 0xd4A8b3018f0c79f6BD3375C89a5Db47ca11A1C35
```