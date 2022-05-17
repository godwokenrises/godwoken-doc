---
id: deployContractHardhat
title: Deploy a Simple Contract with Hardhat
---
import useBaseUrl from "@docusaurus/useBaseUrl";

## Environment

- Ubuntu 20.04 LTS

## Prerequisites

- A Godwoken network is available for connection.
- npm is installed.


## Steps

1. Clone the source of Hardhat.  

   ```bash
   $ git clone --depth=1 https://github.com/NomicFoundation/hardhat
   ```

2. Prepare a simple hardhat project.

   ```bash
   $ mv hardhat/packages/hardhat-core/sample-projects/basic .
   $ cd basic/
   $ ls
   contracts  hardhat.config.js  LICENSE.md  README.md  scripts  test
   ```

3. Install requirements.

   ```bash
   $ npm init --yes
   $ npm install --save-dev hardhat @nomiclabs/hardhat-waffle chai
   $ npx hardhat --version
   2.9.3
   ```

4. Add the configuration of a Godwoken network to `hardhat.config.js`. 

   **Note**: The Godwoken network can be a local network or public network. 

   The following example includes the configuration of a local Godwoken network in the `networks` section of the `hardhat.config.js`:

   ```js
   module.exports = {
   
     networks: {
       gw_devnet_v1: {
         url: `http://127.0.0.1:8024`,
         accounts: [`0x9d5bc55413c14cf4ce360a6051eacdc0e580100a0d3f7f2f48f63623f6b05361`],
       }
     },
   
     ...
   }
   ```

   - `http://127.0.0.1:8024` is the Web3 URL of the local Godwoken network, which can be checked by the command line `./kicker info`  while deploying the local Godwoken network. For more information about deploying a local Godwoken network, see [Deploy a Local Network with Godwoken-Kicker](deployLocalNetwork).

   -  `0x9d5bc55413c14cf4ce360a6051eacdc0e580100a0d3f7f2f48f63623f6b05361` is the private key used for demonstration in the example. Replace the key with your own key when deploying a simple contract with Hardhat.
   
5. Run hardhat on the local Godwoken network.

   ```bash
   $ npx hardhat accounts --network gw_devnet_v1
   0xCD1d13450cFA630728D0390C99957C6948BF7d19
   
   $ npx hardhat compile
   Compiled 2 Solidity files successfully
   
   $ npx hardhat test --network gw_devnet_v1
   Greeter
       ✔ Should return the new greeting once it's changed (4376ms)
   
   
     1 passing (4s)
   
   $ npx hardhat run --network gw_devnet_v1 scripts/sample-script.js
   Greeter deployed to: 0x61acD6135A5F1d7046132EB43D59e0FC1264214d
   ```

   
