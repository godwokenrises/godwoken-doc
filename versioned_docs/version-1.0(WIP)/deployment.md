---
id: deployment
title: Deployment
---
import useBaseUrl from "@docusaurus/useBaseUrl";

## Deploy a Godwoken Network by Using Godwoken-Kicker

Godwoken-kicker is a one-line command to start a Godwoken network on **Devnet**. This deployment method helps developers deploy Ethereum contracts and quickly migrate Ethereum DApps to CKB Devnet in testing and development environments.

- RPC URL: http://localhost:8024
- Chain ID: 1024777

Godwoken-kicker provides a quick mode and a custom mode for deployment.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="quick"
  values={[
    {label: 'Quick Mode', value: 'quick'},
    {label: 'Custom Mode', value: 'custom'},
  ]}>
<TabItem value="quick"><p>The quick mode is fast and simple. It executes the builds of all components from pre-built docker images.</p><b>Environment</b><p><ul><li>Ubuntu 20.04 LTS</li></ul></p><b>Prerequisites</b><p><ul><li><a href="https://docs.docker.com/engine/install/ubuntu/">Docker Engine</a></li><li><a href="https://docs.docker.com/compose/install/">Docker Compose</a></li></ul></p>

<p><b>Steps</b></p>

<ol> 
    <li><p>Clone the source of Godwoken-kicker.</p>
        <p>If it is already cloned, skip to the next step.</p>


```bash
$ git clone https://github.com/RetricSu/godwoken-kicker.git
```

</li>

<li><p>Initialize Godwoken-kicker.</p>

:::note

Stop any running Godwoken network by using the <code>make stop</code> command before initializing Godwoken-kicker. 

:::

```bash
$ cd godwoken-kicker
$ make init
```

<p>The <code>make init</code> command can be used in the following situations:</p>

<ul>
<li>It is the first time to start the Godwoken network.</li><li>The deployment mode is changed.</li><li>The CKB chain data and all layer 1 related cache data are deleted.</li></ul>


</li>

<li><p>Start the Godwoken network.</p>

<p>The <code>make start</code> command can be used to start the deployed Godwoken network. The <code>make start-f</code> command can be used to force deploy and start a new Godwoken network.</p>

```bash
$ make start
```
:::note

  Do note that after running the <code>make clean</code> command, run <code>make init</code> again if a reboot is desired. 

:::
<details><summary>Output</summary>
<p>



```bash
Building ckb
Building polyjuice
Building call-polyman
Building godwoken
Building web3
Starting docker_postgres_1 ... done
Starting docker_ckb_1      ... done
Starting docker_polyjuice_1    ... done
Starting docker_call-polyman_1 ... done
Starting docker_indexer_1      ... done
Starting docker_godwoken_1     ... done
Starting docker_web3_1         ... done

Run commands to monitor background activities: 

    make sg (Godwoken)
    make sp (Polyjuice)
    make web3 (web3)
    make call-polyman (setup service)

All Jobs Done       : [########################################] 100%

Great! Checkout http://localhost:6100 to deploy contract!
```

</p>
</details>

</li>

<li><p>Set up an Ethereum wallet.</p><p>In this example, a MetaMask (an Ethereum Wallet) wallet is set up for the deployment. Add the MetaMask extension in the browser (Firefox, Google Chrome, Brave or Microsoft Edge) and create an account for the wallet.</p><p>If there is a MetaMask wallet ready to be used, skip to the next step directly.</p></li>

<li><p>After the Godwoken network has been successfully launched, visit the website <a>http://localhost:6100</a> and connect the MetaMask wallet by clicking the <b>Connect Wallet</b> button.</p>

      RPC URL=http://localhost:8024
      CHAIN ID=1024777

</li>

<li><p>Deploy an ETH contract to the Godwoken network.</p><ol><li><p>Prepare and compile an ETH contract.</p></li>

<li>Deposit 400 CKB to the ETH wallet on the <b>ACCOUNTS</b> page of the Godwoken network.</li>

<li>Deploy the ETH contract that you have compiled on the <b>CONTRACT</b> page of the Godwoken network.</li></ol></li></ol>

</TabItem>
    <TabItem value="custom"><p>The custom mode is more flexible for custom requirements. It can build the components from local packages and executes the builds locally.</p><b>Environment</b><p><ul><li>Ubuntu 20.04 LTS</li></ul></p><b>Prerequisites</b><p><ul><li><a href="https://docs.docker.com/engine/install/ubuntu/">Docker Engine</a></li><li><a href="https://docs.docker.com/compose/install/">Docker Compose</a></li><li><a href="https://github.com/nervosnetwork/molecule">Moleculec</a></li><li>Rustup nightly</li></ul></p>

<p><b>Steps</b></p>

<ol>  
    <li><p>Clone the source of Godwoken-kicker.</p>
        <p>If it is already cloned, skip to the next step directly.</p>


```bash
$ git clone https://github.com/RetricSu/godwoken-kicker.git
```

</li>

<li><p>Set the mode with <code>true</code> under the <code>[mode]</code> section in the <code>/docker/.build.mode.env</code> file for the components that you want to build from local packages.</p>

```title="/docker/.build.mode.env"
####[mode]
MANUAL_BUILD_GODWOKEN=false
MANUAL_BUILD_WEB3=false
MANUAL_BUILD_SCRIPTS=false
MANUAL_BUILD_POLYJUICE=false
...
```

<p>(Optional) Configure component version under the <code>[packages]</code> section in the <code>docker/.build.mode.env</code> file.</p>

```title="/docker/.build.mode.env"
####[packages]
GODWOKEN_GIT_URL=https://github.com/nervosnetwork/godwoken.git
GODWOKEN_GIT_CHECKOUT=master
POLYMAN_GIT_URL=https://github.com/RetricSu/godwoken-polyman.git
POLYMAN_GIT_CHECKOUT=master
WEB3_GIT_URL=https://github.com/nervosnetwork/godwoken-web3.git
WEB3_GIT_CHECKOUT=main
...
```

</li>

<li><p>Initialize Godwoken-kicker.</p>

:::note

Stop any running Godwoken network by using the <code>make stop</code> command before initializing Godwoken-kicker.

:::

```bash
$ cd godwoken-kicker
$ make init
```

The <code>make init</code> command can be used in the following situations:

<ul><li>The first time to start the Godwoken network.</li><li>The deployment mode is changed.</li><li>The CKB chain data and all layer 1 related cache data are deleted.</li></ul>

</li>

<li><p>Start the Godwoken network.</p>

<p>The <code>make start</code> command can be used to start the deployed Godwoken network. The <code>make start-f</code> command can be used to force deploy and start a new Godwoken network.</p>

```bash
$ make start
```

<details><summary>Output</summary>
<p>


```bash
Building ckb
Building polyjuice
Building call-polyman
Building godwoken
Building web3
Starting docker_postgres_1 ... done
Starting docker_ckb_1      ... done
Starting docker_polyjuice_1    ... done
Starting docker_call-polyman_1 ... done
Starting docker_indexer_1      ... done
Starting docker_godwoken_1     ... done
Starting docker_web3_1         ... done

Run commands to monitor background activities: 

    make sg (Godwoken)
    make sp (Polyjuice)
    make web3 (web3)
    make call-polyman (setup service)

All Jobs Done       : [########################################] 100%

Great! Checkout http://localhost:6100 to deploy contract!
```



</p>
</details>

</li>

<li><p>Set up an Ethereum wallet.</p><p>In this example, a MetaMask (an Ethereum Wallet) wallet is set up for the deployment. Add the MetaMask extension in the browser (Firefox, Google Chrome, Brave or Microsoft Edge) and create an account for the wallet.</p><p>If there is a MetaMask wallet ready to be used, skip this and go to the next step directly.</p></li>  

<li><p>After the Godwoken network has been successfully launched, visit the website <a>http://localhost:6100</a> and connect the MetaMask wallet by clicking the <b>Connect Wallet</b> button.</p>

      RPC URL=http://localhost:8024
      CHAIN ID=1024777

</li>

<li><p>Deploy an ETH contract to the Godwoken network.</p>

<ol><li><p>Prepare and compile an ETH contract.</p></li><li><p>Deposit 400 CKB to the ETH wallet on the <b>ACCOUNTS</b> page of the Godwoken network.</p></li><li><p>Deploy the ETH contract that you have compiled on the <b>CONTRACT</b> page of the Godwoken network.</p></li></ol>

</li></ol>

</TabItem>
</Tabs>

For more information about the Godwoken-kicker commands, see [godwoken-kicker](https://github.com/RetricSu/godwoken-kicker).

## Deploy a Godwoken Network Manually

This deployment method is useful in situations such as deploying a Godwoken network on <b>Testnet</b> or <b>Mainnet</b>.

### Environment

* OS: Ubuntu 20.04

### Prerequisites

The following tools need to be installed before entering the deployment process:

* Node.js (>=12.0.0)

* Yarn (version 1.22.5 or above)

* GCC and make

  To install `GCC` and `make` on Ubuntu 20.04, run the following command as root or user with sudo privileges:

  ```bash
  $ sudo apt update
  $ sudo apt install build-essential
  ```

* [Capsule v0.7.0](https://github.com/nervosnetwork/capsule/releases/tag/v0.7.0)

* Docker

  **Docker** must be installed for building and deploying Godwoken. For more information about Docker installation, see [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/).

  To manage Docker as a non-root user, see the Docker documentation of [Manage Docker as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/).


- ckb-cli: The ckb-cli tool is used for deploying smart contracts. It can be installed from a [CKB pre-built installer package](https://github.com/nervosnetwork/ckb/releases). The verified ckb-cli version in this documentation is [v0.42.0](https://github.com/nervosnetwork/ckb/releases/tag/v0.42.0).

* Rustc v1.54.0

*  llvm and clang

  ```
  sudo apt-get install libclang-dev
  ```

* OpenSSL library

  ```
  sudo apt-get install pkg-config libssl-dev
  ```

* [Moleculec v0.7.2](https://github.com/nervosnetwork/molecule)

  To install Moleculec:

  ```bash
  $ cargo install moleculec --locked --version 0.7.2
  ```

* [Tippy](https://github.com/nervosnetwork/tippy/releases)

  Tippy is a tool to help set up and manage CKB nodes. For more information, see [Install a CKB Node by Using Tippy](https://cryptape.github.io/lumos-doc/docs/reference/ckbnode#install-a-ckb-node-by-using-tippy). The verified Tippy version in this documentation is [v0.4.0-rc2](https://github.com/nervosnetwork/tippy/releases/tag/v0.4.0-rc2).

:::note

The current user must have permissions to run ckb-cli, Capsule, Moleculec and docker. If the execution of these tools requires sudo commands, that may cause issues during the deployment process.

:::

### Steps

1. Create a CKB account for the deployment.

   The account must have enough CKB capacity for the deployment.  For more information about CKB accounts and creating CKB accounts, see [CKB Accounts and Capacity](https://cryptape.github.io/lumos-doc/docs/reference/ckbaccount).

   Example:

   ```
   address:
     mainnet: ckb1qyqpadsep7yruydz5eaulty4xwc2sn6smhashalnjx
     testnet: ckt1qyqpadsep7yruydz5eaulty4xwc2sn6smhas2cpv76
   lock_arg: 0x1eb6190f883e11a2a67bcfac9533b0a84f50ddfb
   lock_hash: 0x499aa230ded32812a246778bc718f4d61a47497c1b7352211d241d2ad333ed75
   pk: 0xca02cc4b8e0e447e243204dd2e16a1692026bfdd4add502b203975999d3a6909
   ```

   :::note

   The account information in this documentation is only used for demonstration. Do **not** use these private keys, addresses and args elsewhere.

   :::

2. Start the CKB node and the CKB miner.

   1. Launch the Tippy dashboard.

      ```bash
      $ cd tippy-linux-x64
      $ ./Tippy
      ```

   2. Launch a CKB devnet if you haven't set up any chain yet and specify the miner with the account prepared for the deployment.

   3. Start the chain and the CKB miner on the Tippy dashboard.

3. Clone the Godwoken source.

   Open a new terminal window and run the following command to clone the Godwoken source:

   ```bash
   $ git clone --recursive https://github.com/nervosnetwork/godwoken
   ```

4. Deploy an SUDT script to the chain.

   For mor information, see [Nervos CKB Docs: Write an SUDT script by Capsule](https://docs.nervos.org/docs/labs/sudtbycapsule#introduction).

   Deploy plan  output example:

   ```shell
   $ capsule deploy --address ckt1qyqpadsep7yruydz5eaulty4xwc2sn6smhas2cpv76 --fee 0.0002
   Deployment plan:
   ---
   migrated_capacity: 0.0 (CKB)
   new_occupied_capacity: 17390.0 (CKB)
   txs_fee_capacity: 0.0002 (CKB)
   total_occupied_capacity: 17390.0 (CKB)
   recipe:
     cells:
       - name: my-sudt
         index: 0
         tx_hash: "0x07de15f8afbd4b55e5d11248f4cd9f5195c8d96f171af04e7f727042bb0643c6"
         occupied_capacity: 17390.0 (CKB)
         data_hash: "0xfe2a574febac93ef4da8e716403be072e4703da736676107d68a5e31b682943f"
         type_id: "0x5318897f71a58ca55b6325736b8170d92c49096719db7646427709a890a9eea0"
     dep_groups: []
   
   Confirm deployment? (Yes/No)
   y
   Password: 
   (1/1) Sending tx 07de15f8afbd4b55e5d11248f4cd9f5195c8d96f171af04e7f727042bb0643c6
   Deployment complete
   ```

   :::note

   The `tx_hash` and `data_hash` will be used in the next step to configure the `setup-config.json` file.

   :::

5. Prepare the following files under the `/godwoken/deploy` folder.

   - `pk`: The file stores the private key that is used to deploy Godwoken.

      Example:

      ```title="/godwoken/deploy/pk"
      0xca02cc4b8e0e447e243204dd2e16a1692026bfdd4add502b203975999d3a6909
      ```

   - `scripts-build.json`: The file specifies the pre-built docker image of Godwoken and the repositories of the other components like godwoken_scripts, godwoken_polyjuice and clerkb.

      Example:

         ```json title="/godwoken/deploy/scripts-build.json"
         {
             "prebuild_image": "nervos/godwoken-prebuilds:v0.6.9-rc1",
             "repos": {
                 "godwoken_scripts": "https://github.com/nervosnetwork/godwoken-scripts#master",
                 "godwoken_polyjuice": "https://github.com/nervosnetwork/godwoken-polyjuice#main",
                 "clerkb": "https://github.com/nervosnetwork/clerkb#v0.4.0"
             }
         } 
         ```

      For more information about the tags of the `prebuild_image`, see [nervos/godwoken-prebuilds](https://hub.docker.com/r/nervos/godwoken-prebuilds/tags?page=1&ordering=last_updated).

   - `setup-config.json`: The file provides configurations for the Rollup.

      - `l1_sudt_script_type_hash`: The `data_hash` of the deployed SUDT script.
      - `tx_hash` (under `l1_sudt_cell_dep`): The `tx_hash` of the deployed SUDT script.
      - `cells_lock`: `cells_lock` is used to unlock/upgrade Rollup scripts. 
      - `reward_lock`: `reward_lock` is used to receive challenge rewards. 
      - `burn_lock`: `burn_lock` is used to receive burned assets that can be unlocked.

      :::note

      The file must be configured with correct SUDT script to deposit SUDT successfully.

      :::

      Example:

      ```json title="/godwoken/deploy/setup-config.json"
      {
        "l1_sudt_script_type_hash": "0xfe2a574febac93ef4da8e716403be072e4703da736676107d68a5e31b682943f",
        "l1_sudt_cell_dep": {
          "dep_type": "code",
          "out_point": {
            "tx_hash": "0x07de15f8afbd4b55e5d11248f4cd9f5195c8d96f171af04e7f727042bb0643c6",
            "index": "0x0"
          }
        },
        "node_initial_ckb": 1200000,
        "cells_lock": {
          "code_hash": "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",
          "hash_type": "type",
          "args": "0x1eb6190f883e11a2a67bcfac9533b0a84f50ddfb"
        },
        "reward_lock": {
          "code_hash": "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",
          "hash_type": "type",
          "args": "0x1eb6190f883e11a2a67bcfac9533b0a84f50ddfb"
        },
        "burn_lock": {
          "code_hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
          "hash_type": "data",
          "args": "0x"
        }
      }
      ```


6. Set up Godwoken nodes.

   To set up Godwoken nodes:

   ```shell
   $ cd godwoken
   $ RUST_LOG=info cargo +nightly run --bin gw-tools setup -n 2 -k deploy/pk --network devnet --scripts-build-config deploy/build-scripts.json -c deploy/setup-config.json
   ```
   
   This setup command compiles Godwoken scripts, deploys the scripts and layer 2 genesis blocks, and generates configuration files for the Godwoken nodes.  
   
   The deployment requires approximately 10 minutes to complete depending on network connection.
   
   Output Example:
   
   ```
   ...
   2021-11-19T06:22:47Z INFO  gw_tools::deploy_genesis] tx_hash: 0x4ec4532a4b8c7d799ef30d36df413f1e4aa05402336a3df53b4f9afa5baf52cd
   [2021-11-19T06:22:47Z INFO  gw_tools::utils::transaction] waiting tx 4ec4532a4b8c7d799ef30d36df413f1e4aa05402336a3df53b4f9afa5baf52cd
   [2021-11-19T06:22:52Z INFO  gw_tools::utils::transaction] tx proposed
   [2021-11-19T06:22:57Z INFO  gw_tools::utils::transaction] tx commited
   [2021-11-19T06:22:57Z INFO  gw_tools::setup] Finish
   ```
   
7. Configure the receiver lock.

   After the setup command is completed, a `config.toml` file is generated under `/godwoken/output/node1` and `/godwoken/output/node2`, and a `scripts-deploy-result.json` file is generated under `/godwoken/output`.

   1. Download the [config generator](https://github.com/classicalliu/lumos-config-generator/releases/download/v0.1.1/lumos-config-generator-linux-amd64) tool and generate the `config.json` file for the CKB chain.

      :::note

      The CKB node must be running when executing the generator to generate the config file.

      :::

      To generate the `config.json` file in the project root directory:
   
      ```bash
      $ ./lumos-config-generator-linux-amd64 config.json http://127.0.0.1:8114
      ```
      
   2. Assign a receiver lock in the node's `config.toml` file. 

      The code_hash of the receiver lock is the CODE_HASH of the SECP256K1_BLAKE160 script from the `config.json` file.

      The args is the lock args of the deployment cells owner.

      Example:
   
      ```toml title="config.toml"
      [block_producer.challenger_config.rewards_receiver_lock]
      code_hash = '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8'
      hash_type = 'type'
      args = '0x1eb6190f883e11a2a67bcfac9533b0a84f50ddfb'
      ```
   
8. Start the Godwoken nodes.

   :::note

   The default node mode is `fullnode`. It can be modified in `config.toml` to either `readonly` mode or `test` mode.

   If the two nodes need to be started within the same environment, manually modify the listening port number in the `config.toml` file for each node.

   :::

   Run the following command to start node1:

   ```bash
   $ RUST_LOG=info cargo +nightly run --bin godwoken run -c output/node1/config.toml
   ```

   If an error about the use of unstable library feature is encountered during the process, try the following commands to fix the issue:

   ```bash
   $ cargo install cargo-edit
   $ cargo upgrade --workspace num-bigint
   ```

9. Set up Polyjuice.

   Clone the source of godwoken-examples. For more information, see [godwoken-examples](https://github.com/nervosnetwork/godwoken-examples).

   ```bash
   $ git clone --recursive https://github.com/nervosnetwork/godwoken-examples
   ```

   Then, create an account on Polyjuice. It will take some time to build index for the first time. 

   ```bash
   $ cd godwoken-examples
   $ yarn && yarn run build-all
   # export SCRIPT_DEPLOY_RESULT_PATH=<Path to scripts-deploy-result.json>
   $ export SCRIPT_DEPLOY_RESULT_PATH=~/godwoken/deploy/scripts-deploy-result.json
   # export GODWOKEN_CONFIG_PATH=<Path to godwoken config.toml>
   $ export GODWOKEN_CONFIG_PATH=~/godwoken/deploy/node1/config.toml
   $ yarn run copy-configs
   # LUMOS_CONFIG_FILE=<Path to config.json> node ./packages/tools/lib/account-cli.js deposit -c 40000000000 -p <privkey>
   $ LUMOS_CONFIG_FILE=~/config.json node ./packages/tools/lib/account-cli.js deposit -c 40000000000 -p 0xca02cc4b8e0e447e243204dd2e16a1692026bfdd4add502b203975999d3a6909
   ```

   For more information about generating the Lumos config file for DEV chain, see [Generate the config.json file for the DEV chain](https://cryptape.github.io/lumos-doc/docs/guides/config#step-1-generate-the-configjson-file-for-the-dev-chain).

10. Start the web3 server.

     1. Create a PostgreSQL instance.

          ```shell
          $ docker run --name postgres -e POSTGRES_USER=user -e POSTGRES_DB=godwoken -e POSTGRES_PASSWORD=mypassword -d -p 5432:5432 postgres
          ```

       2. Clone the source of [godwoken-web3](https://github.com/nervosnetwork/godwoken-web3).

          ```shell
          $ git clone https://github.com/nervosnetwork/godwoken-web3
          ```

       3. Prepare the `.env` file under `/godwoken-web3/packages/api-server`.

          ```shell
          $ cd godwoken-web3
          $ cat > ./packages/api-server/.env <<EOF
          DATABASE_URL=postgres://user:mypassword@postgres:5432/godwoken
          GODWOKEN_JSON_RPC=http://godwoken:8119
          ETH_ACCOUNT_LOCK_HASH=<Eth Account Lock Code Hash>
          ROLLUP_TYPE_HASH=<Rollup Type Hash>
          PORT=8024
          CHAIN_ID=1024777
          CREATOR_ACCOUNT_ID=3
          DEFAULT_FROM_ADDRESS=0x1eb6190f883e11a2a67bcfac9533b0a84f50ddfb
          POLYJUICE_VALIDATOR_TYPE_HASH=<Polyjuice Validator Code Hash>
          L2_SUDT_VALIDATOR_SCRIPT_TYPE_HASH=<L2 Sudt Validator Code Hash>
          TRON_ACCOUNT_LOCK_HASH=<Tron Account Lock Code Hash>
          EOF
          ```

       4. Start the web3 server.

          To start the web3 server properly, make sure to clear the postgres database, and then run the migration SQL file to recreate the tables before running the server:

          ```shell
          $ yarn
          $ yarn run migrate:latest
          $ yarn run build:godwoken
          $ yarn run start
          ```

