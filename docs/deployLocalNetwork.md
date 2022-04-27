---
id: deployment
title: Deployment
---
import useBaseUrl from "@docusaurus/useBaseUrl";

## Deploy a Godwoken Network with Godwoken-Kicker

Godwoken-kicker is a one-line command to start a Godwoken network on **Devnet**. This deployment method helps developers deploy Ethereum contracts and quickly migrate Ethereum dapps to CKB Devnet in testing and development environments.

Godwoken-kicker provides a quick mode and a manual-build mode for deployment.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="quick"
  values={[
    {label: 'Quick Mode', value: 'quick'},
    {label: 'Manual-Build Mode', value: 'manual=build'},
  ]}>
<TabItem value="quick"><p>The quick mode is fast and simple. It executes the builds of all components from pre-built docker images.</p><b>Environment</b><p><ul><li>Ubuntu 20.04 LTS</li></ul></p><b>Prerequisites</b><p><ul><li><a href="https://docs.docker.com/engine/install/ubuntu/">Docker Engine</a></li><li><a href="https://docs.docker.com/compose/install/">Docker Compose >= 1.29.0</a></li><li>Metamask Wallet</li></ul></p>

<p><b>Steps</b></p>

<ol> 
    <li><p>Clone the Godwoken-kicker under the branch <code>compatibility-changes</code>.</p>


```bash
$ git clone -b compatibility-changes https://github.com/RetricSu/godwoken-kicker
```

</li>

<li><p>Start Godwoken devnet_v1.</p>
<p>The <code>kicker start</code> command can be used to start the deployed Godwoken network.</p>

```bash
$ cd godwoken-kicker
$ ./kicker start

NOTE: The docker-compose version should be newer than 1.29.0
NOTE: This might take several minutes on the first run

:> docker-compose -f docker/docker-compose.yml up -d --build

docker_postgres_1 is up-to-date
docker_redis_1 is up-to-date
docker_ckb-miner_1 is up-to-date
Starting docker_ckb_1 ... done
Starting docker_check-ckb-started-successfully_1 ... done
docker_ckb-indexer_1 is up-to-date
Recreating docker_godwoken_1                     ... done
Recreating docker_web3_1                         ... done
Creating docker_web3-indexer_1                   ... done
[start] Services started successfully
```
</li>


<p>This command deploys the Godwoken local network. The following docker containers should start running once the deployment completed:</p>

<ul>
<li><code>docker_ckb_1</code></li><li><code>docker_ckb-miner_1</code></li><li><code>docker_ckb-indexer_1</code></li><li><code>docker_godwoken_1</code></li><li><code>docker_web3_1</code></li><li><code>docker_web3-indexer_1</code></li><li><code>docker_postgres_1</code></li><li><code>docker_redis_1</code></li></ul>

<p>>More information can be viewed at <a href="https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/docker/docker-compose.yml">docker-compose.yml</a>.</p>

<li><p>Deposit CKB to a Layer 2 account for testing</p></li>

<p>The <code>kicker get-balance</code> command can be used to check the account balance.</p>

```bash
$ ./kicker get-balance 0xCD1d13450cFA630728D0390C99957C6948BF7d19 # check account balance
Creating docker_godwoken_run ... done
Creating docker_godwoken_run ... done
[2022-04-14T18:06:14Z INFO  gw_tools::get_balance] Balance: 0
```

<p>The <code>kicker deposit</code> command can be used to deposit ckb from an ETH address. </p>

```bash
$ ./kicker deposit 0xCD1d13450cFA630728D0390C99957C6948BF7d19 999 # deposit ckb to account
Creating docker_godwoken_run ... done
[2022-04-14T18:07:55Z INFO  gw_tools::deposit_ckb] eth address: 0xcd1d13450cfa630728d0390c99957c6948bf7d19
[2022-04-14T18:07:55Z INFO  gw_tools::deposit_ckb] layer2 script hash: 0xfe56afaef792f6d3de0d7271b995a6d663fa85483bf9ec757d6d2ce1346989a4
[2022-04-14T18:07:55Z INFO  gw_tools::deposit_ckb] short script hash: 0xfe56afaef792f6d3de0d7271b995a6d663fa8548
[2022-04-14T18:07:57Z INFO  gw_tools::deposit_ckb] tx_hash: 0xb8c84c7a2907b8765f7e6df6f95531466be83c76f8797d05ddf99be4f03d3552
[2022-04-14T18:07:57Z INFO  gw_tools::utils::transaction] waiting tx b8c84c7a2907b8765f7e6df6f95531466be83c76f8797d05ddf99be4f03d3552
[2022-04-14T18:08:02Z INFO  gw_tools::utils::transaction] tx pending
[2022-04-14T18:08:07Z INFO  gw_tools::utils::transaction] tx pending
[2022-04-14T18:08:12Z INFO  gw_tools::utils::transaction] tx pending
[2022-04-14T18:08:17Z INFO  gw_tools::utils::transaction] tx proposed
[2022-04-14T18:08:22Z INFO  gw_tools::utils::transaction] tx proposed
[2022-04-14T18:08:27Z INFO  gw_tools::utils::transaction] tx commited
[2022-04-14T18:08:29Z INFO  gw_tools::deposit_ckb] current balance: 0, waiting for 2 secs.
[2022-04-14T18:08:31Z INFO  gw_tools::deposit_ckb] current balance: 0, waiting for 4 secs.
[2022-04-14T18:08:33Z INFO  gw_tools::deposit_ckb] current balance: 0, waiting for 6 secs.
[2022-04-14T18:08:35Z INFO  gw_tools::deposit_ckb] current balance: 0, waiting for 8 secs.
[2022-04-14T18:08:37Z INFO  gw_tools::deposit_ckb] current balance: 99900000000, waiting for 10 secs.
[2022-04-14T18:08:37Z INFO  gw_tools::deposit_ckb] deposit success!
[2022-04-14T18:08:37Z INFO  gw_tools::deposit_ckb] Your account id: 7
Deposit finished
```

<p>Use <code>get-balance</code>to verify the balance when deposit finished. </p>

$ ./kicker get-balance 0xCD1d13450cFA630728D0390C99957C6948BF7d19
Creating docker_godwoken_run ... done
Creating docker_godwoken_run ... done
[2022-04-14T18:13:20Z INFO  gw_tools::get_balance] Balance: 99900000000
```
:::note

Note that the accounts are defined in <a href="https://github.com/nervosnetwork/godwoken-tests/blob/develop/contracts/hardhat.config.js/">contract/hardhat.config.js</a>. 

:::

<li><p>Run Godwoken-tests cases using <a href="https://hardhat.org">Hardhat</a>.</p></li>

```bash
$ git clone https://github.com/nervosnetwork/godwoken-tests
$ cd godwoken-tests
$ cd contracts
$ npm install
$ npm run test
```
<details><summary>Output</summary>

<p>

```bash
    
    > contracts@1.0.0 test
    > hardhat test --network gw_devnet_v1
    
    contracts/Token.sol: Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
    
    Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
    --> contracts/Calc.sol
    
    Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
    --> contracts/ErrorHandling.sol
    
    Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
    --> contracts/Memory.sol
    
    Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
    --> contracts/RecursionContract.sol
    
    Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
    --> contracts/Storage.sol
    
    Warning: Visibility for constructor is ignored. If you want the contract to be non-deployable, making it "abstract" is sufficient.
     --> contracts/Storage.sol:9:3:
      |
    9 |   constructor() public {
      |   ^ (Relevant source part starts here and spans across multiple lines).
    
    Warning: Function state mutability can be restricted to pure
      --> contracts/Calc.sol:24:5:
       |
    24 |     function add(uint256 x, uint256 y) public view returns (uint256) {
       |     ^ (Relevant source part starts here and spans across multiple lines).
    
    Warning: Function state mutability can be restricted to pure
      --> contracts/Calc.sol:28:5:
       |
    28 |     function sub(uint256 x, uint256 y) public view returns (uint256) {
       |     ^ (Relevant source part starts here and spans across multiple lines).
    
    Warning: Function state mutability can be restricted to pure
     --> contracts/ErrorHandling.sol:5:5:
      |
    5 |     function getRevertMsg(uint value) public view returns (uint) {
      |     ^ (Relevant source part starts here and spans across multiple lines).
    
    Compiled 18 Solidity files successfully
    
      BlockInfo Contract
    chainId 8521215115268
    contractChainId 8521215115268
        ✔ should compare web3 chain id and EVM with same results
    contractMiner 0x0Aa49d060c257758846d8E409421AD128c6d5080
    miner 0x0000000000000000000000000000000000000000
        ✔ should compare web3 coinbase and conibase from EVM with same results (181ms)
    blockNumber 606
    contractBlockNumber BigNumber { value: "607" }
        ✔ should compare web3 block number and block number from EVM with same results
    blockHash 0xd16d5455af88c73301a3fced98d5fe7cf3fe8dc6d82616bde133c21baa11eebc
        ✔ should compare web3 block hash and block hash from EVM with same results
    txBlockNumber 607
    eventBlockNumber 607
    txBlockHash 0xd16d5455af88c73301a3fced98d5fe7cf3fe8dc6d82616bde133c21baa11eebd
    eventBlockHash 0x0000000000000000000000000000000000000000000000000000000000000000
        ✔ should mine correct event with block number and hash with OK results (125ms)
    
      Calc contract
        ✔ Deployment computing contract (232ms)
    
      HeadTail
        Setup test
          ✔ deploys contract (4336ms)
          ✔ has valid initial values (202ms)
        Stage 1
          ✔ allows to deposit BET_VALUE (129ms)
          ✔ saves address of user (142ms)
          ✔ allows depositing 777 wei (242ms)
        Stage 2
          ✔ allows to save both users addresses (4247ms)
        Stage 5
          ✔ sends ether to a second user after a correct guess (4317ms)
    
      Memory Contract
        ✔ Deploy and new some memory (509ms)
    
      Recursion Contract
    depth: 1
    	 sum =  1
    depth: 2
    	 sum =  3
    depth: 3
    	 sum =  6
    depth: 4
    	 sum =  10
    depth: 5
    	 sum =  15
    depth: 6
    	 sum =  21
    depth: 7
    	 sum =  28
    depth: 8
    	 sum =  36
    depth: 9
    	 sum =  45
    depth: 10
    	 sum =  55
    depth: 11
    	 sum =  66
    depth: 12
    	 sum =  78
    depth: 13
    	 sum =  91
    depth: 14
    	 sum =  105
    depth: 15
    	 sum =  120
    depth: 16
    	 sum =  136
    depth: 17
    	 sum =  153
    depth: 18
    	 sum =  171
    depth: 19
    	 sum =  190
    depth: 20
    	 sum =  210
    depth: 21
    	 sum =  231
    depth: 22
    	 sum =  253
    depth: 23
    	 sum =  276
    depth: 24
    	 sum =  300
    depth: 25
    	 sum =  325
    depth: 26
    	 sum =  351
    depth: 27
    	 sum =  378
    depth: 28
    	 sum =  406
    depth: 29
    	 sum =  435
    depth: 30
    	 sum =  465
    depth: 31
    	 sum =  496
    depth: 32
    	 sum =  528
    depth: 33
    	 sum =  561
    depth: 34
    	 sum =  595
    depth: 35
    	 sum =  630
    depth: 36
    	 sum =  666
        ✔ Deploy and call recursive functions (3167ms)
    
      SisyphusGamble
    sender's address: 0x966B30e576A4d6731996748B48Dd67C94eF29067
    Deploying contract SisyphusGambleVenues
      Sisyphus gamble venues deployed on address: 0x1f4D5204c51007007fD21cF3e94B2Bb6dE8a2f2C
    Deploying contract testERC20
      TestERC20 on address: 0x5B0AdFF638E2862e4834948e559fd821680dc8DF
      sender's balnace = 10000
    Start a new sisyphus gamble
      Getting Sisyphus Gamble Venues...
    gameList: [
      [
        '0x6421e4Ea26E11C895266ab9EE4d724613276a588',
        1,
        2,
        '0x5B0AdFF638E2862e4834948e559fd821680dc8DF',
        BigNumber { value: "1" },
        '0x0000000000000000000000000000000000000000',
        BigNumber { value: "115792089237316195423570985008687907853269984665640564039457584007913129639935" },
        BigNumber { value: "1" },
        sisyphusGamble: '0x6421e4Ea26E11C895266ab9EE4d724613276a588',
        weight: 1,
        gamblingBlocks: 2,
        token: '0x5B0AdFF638E2862e4834948e559fd821680dc8DF',
        totalPrize: BigNumber { value: "1" },
        lastGambler: '0x0000000000000000000000000000000000000000',
        endBlock: BigNumber { value: "115792089237316195423570985008687907853269984665640564039457584007913129639935" },
        minGamble: BigNumber { value: "1" }
      ]
    ]
      Sisyphus gamble venues deployed on address: 0x6421e4Ea26E11C895266ab9EE4d724613276a588
    SisyphusGambling...
    >> Claim Prize
      sender's balnace = 9996
        ✔ Start a new sisyphus gamble -> gamble -> claimPrize (13045ms)
    
      Token contract
        Deployment
          ✔ Should set the right owner
          ✔ Should assign the total supply of tokens to the owner (52ms)
        Transactions
          ✔ Should transfer tokens between accounts (117ms)
          ✔ Should update balances after transfers (182ms)
    
      20 passing (53s)
```
</p>
</details>

<p>Generally speaking, user can configurate any network in the <code>hardhat.config.js</code>.</p>

```bash
$ npx hardhat run --network <your-network> scripts/deploy.js
```
<li><p>Discontinue Godwoken devnet_v1.</p></li>

<p>The <code>kicker stop</code> command can be used to stop the Godwoken services.</p>

```bash
$ ./kicker stop
:> docker-compose -f docker/docker-compose.yml down --remove-orphans

Stopping docker_web3-indexer_1 ... done
Stopping docker_web3_1         ... done
Stopping docker_godwoken_1     ... done
Stopping docker_ckb-indexer_1  ... done
Stopping docker_ckb_1          ... done
Stopping docker_postgres_1     ... done
Stopping docker_ckb-miner_1    ... done
Stopping docker_redis_1        ... done
Removing docker_godwoken_run_9a9824b6ed91        ... done
Removing docker_godwoken_run_48fed4562d8b        ... done
Removing docker_godwoken_run_1c4cbcafa53a        ... done
Removing docker_godwoken_run_73d931a6e2dd        ... done
Removing docker_godwoken_run_c9242edc0541        ... done
Removing docker_web3-indexer_1                   ... done
Removing docker_web3_1                           ... done
Removing docker_godwoken_1                       ... done
Removing docker_godwoken_run_f22dac2cb072        ... done
Removing docker_godwoken_run_20ec58f86f45        ... done
Removing docker_ckb-indexer_1                    ... done
Removing docker_check-ckb-started-successfully_1 ... done
Removing docker_ckb_1                            ... done
Removing docker_postgres_1                       ... done
Removing docker_ckb-miner_1                      ... done
Removing docker_redis_1                          ... done
Removing network docker_default
```
<p>The <code>kicker clean</code> command can be used to remove volumed data in the containers.</p>

```bash
$ sudo ./kicker clean
:> docker-compose -f docker/docker-compose.yml ps --quiet
rm -rf docker/layer2/data/
rm -f  docker/layer2/config/scripts-deployment.json
rm -f  docker/layer2/config/rollup-genesis-deployment.json
rm -f  docker/layer2/config/godwoken-config.toml
rm -f  docker/layer2/config/polyjuice-root-account-id
rm -f  docker/layer2/config/web3-config.env
rm -f  docker/layer2/config/web3-indexer-config.toml
rm -rf docker/ckb-indexer/
rm -rf docker/layer1/ckb/data/
rm -rf docker/layer1/ckb2/data/
rm -rf docker/layer1/ckb3/data/
rm -rf docker/postgres/data
rm -rf docker/redis/data
rm -rf docker/manual-artifacts
```

<p>The <code>kicker ps</code> command can be used to list out the services in use.</p>

```bash
$ ./kicker ps
:> docker-compose -f docker/docker-compose.yml ps

Name   Command   State   Ports
------------------------------
```
For more information on the use of the Godwoken-Kicker command line, see [Godwoken-kicker Usage](version-1.0/commandUsage.md).

</TabItem>
    <TabItem value="manual-build"><p>Godwoken-Kicker supports manual-build mode using <a href="https://runnable.com/docker/advanced-docker-compose-configuration">multiple Docker Compose files</a>. Manual build mode is meant for advanced developers who want to customize the Docker Compose service, such as replacing pre-built artifacts with custom ones, and who are already familiar with Godwoken-kicker. Review the [kicker](https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/kicker) script in detail before starting to use the manual build mode.</p><b>Environment</b><p><ul><li>Ubuntu 20.04 LTS</li></ul></p><b>Prerequisites</b><p><ul><li><a href="https://docs.docker.com/engine/install/ubuntu/">Docker Engine</a></li><li><a href="https://docs.docker.com/compose/install/">Docker Compose</a></li></ul></p>

<p><b>Steps</b></p>

<ol> 
    <li><p>Clone the Godwoken-kicker under the branch <code>compatibility-changes</code>.</p>


```bash
$  git clone -b compatibility-changes https://github.com/RetricSu/godwoken-kicker
```

</li>

<li><p>Define a basic Godwoken servcice that runs on a pre-built image in the <a href="https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/docker/docker-compose.yml"><code>docker/docker-compose.yml</code></a>. Godwoken binary can be seen under <code>/usr/bin/godwoken</code>.</p>

```bash
godwoken:
  image: ghcr.io/flouse/godwoken-prebuilds:v1.0.x-202203160423
  environment:
    RUST_LOG: info,gw_generator=debug
    GODWOKEN_MODE: fullnode
    RUST_BACKTRACE: full
  volumes:
    - ./layer2:/var/lib/layer2
  ports:
    - 8119:8119
    - 8120:8120
  command: [ "godwoken", "run", "-c", "/var/lib/layer2/config/godwoken-config.toml" ]
```

</li>

<li><p>Build Godwoken binary manually and place it in <code>docker/manual-artifacts/godwoken</code>.</p>


```bash
MANUAL_BUILD_GODWOKEN=true \
GODWOKEN_GIT_URL=ssh://git@github.com/nervosnetwork/godwoken \
GODWOKEN_GIT_CHECKOUT=compatibility-breaking-changes \
./kicker manual-build
```

Use Godwoken-kicker command line <code>. /kicker manual-build</code> to build the binary, or users can build the binary on their own. Just make sure that the binary is placed in docker/manual-artifacts/.

</li>

<li><p>SReplace the prebild godwoken and gw-tools with manual-build in the file <a href="https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/docker/manual-godwoken.compose.yml"><code>docker/manual-godwoken.compose.yml</code></a>.</p>

```bash
services:
  godwoken:
    volumes:
      # Volume our manual-build godwoken to
      # `/usr/bin/godwoken` inside container
      - ./manual-artifacts/godwoken:/usr/bin/godwoken

```

<li><p>Launch the Godwoken service with manual-build artifacts.</p></li>  

```bash
MANUAL_BUILD_GODWOKEN=true ./kicker start # Starts all services
MANUAL_BUILD_GODWOKEN=true ./kicker start godwoken # Starts only a single godwoken service
```

</TabItem>
</Tabs>

<p>For more details on manual-build mode of Godwoken-kicker, refer to <a href="https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/docs/manual-build.md">manual-build mode</a>, and <a href="https://github.com/nervosnetwork/godwoken-info/tree/info/testnet_v1">the example of a one-click launch readonly node</a>.</p>
