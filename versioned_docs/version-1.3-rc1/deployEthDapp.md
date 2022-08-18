---
id: deployEthDapp
title: Deploy Ethereum DApps to Godwoken
---
import useBaseUrl from "@docusaurus/useBaseUrl";

## Workflow

1. Set up the environment.

2. Choose Godwoken testnet or mainnet network, or deploy a local Godwoken network.

   For more information about Godwoken networks, see [Godwoken Networks](#godwoken-networks).

   For more information about deploying a Godwoken network, see the sections under Deployment.

3. Deploy an Ethereum DApp to Godwoken.

## RPC Documentation for Reference

Godwoken provides a web3 RPC compatible layer.

For more information, see [Ethereum RPC (web3 RPC)](https://github.com/nervosnetwork/godwoken-web3).

## An Example of Deploying an Ethereum DApp to Godwoken by Godwoken-Kicker

### Environment

- Ubuntu 20.04

### Prerequisite Development Software

- Node.js v14
- Yarn 
- Docker
- Docker-compose
- Rust

### Prerequisite Wallet Software

- MetaMask

### Steps
1. Clone an existing ETH DApp.

   Create a relative directory, if needed, then enter the directory and clone the repository . 

   ```
   $ mkdir -p ~/projects
   $ cd ~/projects
   $ git clone https://github.com/TTNguyenDev/Dapps-Support-ForceBridge -b starter
   ```

2. Run the ETH DApp.
    Install the dependencies and  build the smart contracts. Start Ganache to run a local Ethereum development chain.
    
    ```
    $ cd ~/projects/Dapps-Support-ForceBridge
    $ yarn && yarn build && yarn start:ganache
    ```
    
    Open another terminal and start the UI server. 
    
    ```
    $ cd ~/projects/Dapps-Support-ForceBridge
    $ yarn ui
    ```
    
    Open a browser tab to http://localhost:3000 to view the DApp after the server started. 

3. Set up Godwoken Testnet in MetaMask.

   Set up the Metamask extension in browser and the custom RPC with the following information:

   ```
   Network Name: Godwoken Testnet
   New RPC URL: http://godwoken-testnet-web3-rpc.ckbapp.dev/
   Chain ID: 71393
   Currency Symbol (optional): N/A
   Block Explorer URL (optional): N/A
   ```

4. Install Polyjuice dependencies.

   To port the Ethereum application with Nervos' Layer 2, the first step is to install the dependencies that are necessary for Godwoken and Polyjuice to work with. 

   Two dependencies need to be added to allow the existing web3 DApp to work with the second tier solution Polyjuice: `@polyjuice-provider/web3` and `nervos-godwoken-integration`.

   @polyjuice-provider/web3 is a custom Polyjuice web3 provider used to replace the web3 library, necessary to interact with the Nervos Layer 2 smart contract. Nervos-godwoken-integration is a tool that can generate Polyjuice addresses based on Ethereum addresses.

   Use the following commands to install both:

   ```
   $ cd ~/projects/Dapps-Support-ForceBridge
   $ yarn add @polyjuice-provider/web3@0.0.1-rc7 nervos-godwoken-integration@0.0.6
   ```

5. Add and configure the web3 provider for the Polyjuice web3 provider.

   Create a new `config.ts` file under the `src`:

   ```
   $ cd ~/projects/Dapps-Support-ForceBridge/src
   $ touch config.ts
   ```

   Then fill it with the values presented:

   ```
   export const CONFIG = {
   WEB3_PROVIDER_URL: 'https://godwoken-testnet-web3-rpc.ckbapp.dev'
   ROLLUP_TYPE_HASH: '0x4cc2e6526204ae6a2e8fcf12f7ad472f41a1606d5b9624beebd215d780809f6a'
   ETH_ACCOUNT_LOCK_CODE_HASH: '0xdeec13a7b8e100579541384ccaf4b5223733e4a5483c3aec95ddc4c1d5ea5b22'
   }
   ```

6. Update the UI file.
    Update the main UI in the file `~/projects/blockchain-workshop-ethereum-simple/src/ui/app.tsx`. Add the following lines in the main dependency importation section of the file:
    
    ```
    import { PolyjuiceHttpProvider } from '@polyjuice-provider/web3';
    
    import { AddressTranslator } from 'nervos-godwoken-integration';
    
    import { CONFIG } from '../config';
    ```
    
    Find and replace line.
    
    ```
    const web3 = new Web3((window as any).ethereum);
    ```
    
     to
    
    ```
    const godwokenRpcUrl = CONFIG.WEB3_PROVIDER_URL;
    const providerConfig = {
    rollupTypeHash: CONFIG.ROLLUP_TYPE_HASH,
    ethAccountLockCodeHash: CONFIG.ETH_ACCOUNT_LOCK_CODE_HASH,
    web3Url: godwokenRpcUrl
    };
    const provider = new PolyjuiceHttpProvider(godwokenRpcUrl, providerConfig);
    const web3 = new Web3(provider);
    ```
    
    Add a new constant and include the `useEffect` hook to display the Polyjuice address to the user:
    
    ```
    const [polyjuiceAddress, setPolyjuiceAddress] = useState<string | undefined>();
    
    useEffect(() => {
        if (accounts-.[0]) {
            const addressTranslator = new AddressTranslator();
            setPolyjuiceAddress(addressTranslator.ethAddressToGodwokenShortAddress(accounts-.[0]));
        } else {
            setPolyjuiceAddress(undefined);
        }
    }, [accounts-.[0]]);
    ```
    
    The `useEffect` hook will execute when `accounts-[0]` changes. 
    
    Add a new line to the html code to display Polyjuice Address:
    
    ```
    <br />
    Your Polyjuice address: <b>{polyjuiceAddress || ' - '}</b>
    <br />
    ```

7. Set gas limit higher.

   Godwoken Testnet requires a higher gas limit to be set for transactions.

   Open the `TTNguyenToken.ts ` file under the path `~/projects/Dapps-Support-ForceBridge/src/lib/contracts` and add a new constant at the beginning of the file:

   ```
   const DEFAULT_SEND_OPTIONS = {
       gas: 6000000
   };
   ```

   Modify 2 functions from:

   ```
   async setTransferToken(fromAddress: string, toAddress: string, amount: number) {
           const tx = await this.contract.methods
               .transfer(toAddress, this.web3.utils.toWei(this.web3.utils.toBN(amount)))
               .send({
                   from: fromAddress
               });
   
           return tx;
       }
       
         async deploy(fromAddress: string) {
           const deployTx = await (this.contract
               .deploy({
                   data: TTNguyenTokenJSON.bytecode,
                   arguments: []
               })
               .send({
                   from: fromAddress,
                   to: '0x0000000000000000000000000000000000000000'
               } as any) as any);
   
           this.useDeployed(deployTx.contractAddress);
   
           return deployTx.transactionHash;
       }
   ```

   to:

   ```
   async setTransferToken(fromAddress: string, toAddress: string, amount: number) {
           const tx = await this.contract.methods
               .transfer(toAddress, this.web3.utils.toWei(this.web3.utils.toBN(amount)))
               .send({
                   ...DEFAULT_SEND_OPTIONS,
                   from: fromAddress
               });
   
           return tx;
       }
       
         async deploy(fromAddress: string) {
           const deployTx = await (this.contract
               .deploy({
                   data: TTNguyenTokenJSON.bytecode,
                   arguments: []
               })
               .send({
                   ...DEFAULT_SEND_OPTIONS,
                   from: fromAddress,
                   to: '0x0000000000000000000000000000000000000000'
               } as any) as any);
   
           this.useDeployed(deployTx.contractAddress);
   
           return deployTx.transactionHash;
       }
   ```

8. Run and test the DApp

   Input the following command to run the app once all the configs for Godwoken have been completed.
   ```
   $ yarn ui
   ```
   Open the browser and navigate to http://localhost:3000/.

## Project Examples

- [Porting an Existing Ethereum DApp to Polyjuice](https://github.com/TTNguyenDev/Hackathon-Nervos/tree/main/task_12#document-porting-an-existing-ethereum-dapp-to-polyjuice)

- [godwoken-simple](https://github.com/Kuzirashi/blockchain-workshop/tree/godwoken-simple)
- [godwoken-simple-js](https://github.com/Kuzirashi/blockchain-workshop/tree/godwoken-simple-js)
- [YokaiSwap](https://github.com/YokaiSwap)
