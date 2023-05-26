---
id: evmTask4
title: Interact with Smart Contract
---
import useBaseUrl from "@docusaurus/useBaseUrl";

:::tip

In this tutorial, we will quickly guide you through the process of deploying, calling, and migrating contracts. We provide a brief overview without going into detailed explanations of various aspects. If you require specific code details and explanations, please refer to the documentation provided on the official Hardhat website.
:::

## Quick Start

The first things you need to do are cloning this repository and installing its dependencies:

```bash 

git clone https://github.com/NomicFoundation/hardhat-boilerplate.git
cd hardhat-boilerplate
npm install

```

This is a brief introduction to the project structure of a Hardhat boilerplate.

```bash

├─ hardhat-boilerplate
│  ├─ contract          <-- save contract `.sol` file
│  │  └─ Token.sol      <-- test sol file
│  ├─ script
│  │  └ deploy.js       <-- deploy contract to network
│  ├─ test
│  │  └ Token.js        <-- Automated tests contract 
│  └─ front-end         <-- dapp Web frontend 
│  │
│  └─ hardhat.config.js <-- hardhat network settings
```

## Test your contract
Writing automated tests when building smart contracts is of crucial importance, as your user's money is what's at stake. In this example, the test file is already written and located at `./test/Token.js`. To execute the tests, simply run the following command in the command line. If all the checks pass, your contract will have passed the testing successfully. [More details about testing scripts](https://hardhat.org/tutorial/testing-contracts)
```bash
npx hardhat test

      Token contract
    Deployment
      ✔ Should set the right owner (719ms)
      ✔ Should assign the total supply of tokens to the owner
    Transactions
      ✔ Should transfer tokens between accounts (52ms)
      ✔ should emit Transfer events
      ✔ Should fail if sender doesn't have enough tokens
  5 passing (849ms)
```


## Start Local Network
Let's start [Hardhat Network](https://hardhat.org/hardhat-network/docs/overview#hardhat-network) which is designed for local development

```bash
npx hardhat node
```
You can see the following content, which includes the startup state and port number. By default, it is 8545.
```bash
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

Accounts
========

WARNING: These accounts, and their private keys, are publicly known.
Any funds sent to them on Mainnet or any other live network WILL BE LOST.

Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

...other content
```

## Deploy Smart Contract on [Hardhat Network](https://hardhat.org/hardhat-network/docs/overview#hardhat-network) designed for local development
Now that we have set up a local network, let's deploy a contract to the network we just created. The smart contract file `Token.sol` is already written and placed in `/contracts/Token.sol` folder. Here, we will also need a script `deploy.js`, it has been placed in `./script/deploy.js`. 

In the current project, we have already written the code for deploy.js. To deploy the Token smart contract to the local network, you simply need to enter the following command in the command line:
```bash
npx hardhat run scripts/deploy.js --network localhost
```
Running this command will execute the `deploy.js` script and initiate the deployment process of the `Token` smart contract to the local network.
```bash
Deploying the contracts with the account: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266  <-- receive address for next step
Account balance: 10000000000000000000000
Token address: 0x5FbDB2315678afecb367f032d93F642f64180aa3  <--- your contract address
```

If you see the above content, it means that your contract deployment was successful. Next, we will learn how to invoke the deployed contract.

## Invoke the Smart Contract

Next, we are going to invoke the contract that we deployed locally. Before proceeding with this step, please ensure that your local network is running without any interruptions. First, we need to add an index.js file in the root directory and copy the following content into it.

:::tip
You Need to change the receiver address and contract address, the value could be found from previous step.
:::

```javascript
// ./index.js
const ethers = require('ethers');

async function main() {
    // Connect to the local network
    let provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');

    // The address that will receive the contract
    const receiverAddress = 'YOUR RECEIVER ADDRESS';

    // ABI of the contract
    const abi = [
        // ABI details omitted for brevity
    ];

    // Address of the deployed contract
    const contractAddress = 'YOUR CONTRACT ADDRESS';

    // Instantiate a new ethers contract
    const contract = new ethers.Contract(contractAddress, abi, provider.getSigner());

    // Call the contract functions
    console.log(contract)
    const balance = await contract.balanceOf(receiverAddress);
    const totalSupply = await contract.totalSupply();

    // Log the results
    console.log('Balance: ', balance.toString());
    console.log('Total Supply: ', totalSupply.toString());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
```
Save the file and run it using Node.js
```bash
node index.js

Balance:  1000000
Total Supply:  1000000
```


## Deploy Smart Contract on Godwoken Testnet

Once you're ready to share your dApp with other people, you may want to deploy it to a live network. This way others can access an instance that's not running locally on your system.

In this tutorial, we will deploy this dApp on Godwoken Testnet. At the software level, deploying to a testnet is the same as deploying to mainnet. The only difference is which network you connect to.

The main concepts used are Signer, ContractFactory and Contract which explained in [hardhat tutorial](https://hardhat.org/tutorial/testing-contracts). There's nothing new that needs to be done when compared to testing, given that when you're testing your contracts you're actually making a deployment to your development network.

If you want to deploy to a test network, you will need to make some changes in the `hardhat.config.js`.

```javascript
//./hardhat.config.js
networks: {
    //...your network info
    'godwoken-testnet': {
        url: `https://v1.testnet.godwoken.io/rpc`,
        accounts: [PRIVATE_KEY]
    }
}
```

Then, use almost same command as network, just change the network from 'localhost' to 'godwoken-testnet'
```bash
npx hardhat run scripts/deploy.js --network godwoken-testnet
```

If you successfully execute this step, there won't be any immediate difference compared to the previous step. The only distinction is that the contract, which was previously deployed on the localhost network, is now deployed on the Godwoken test network.





