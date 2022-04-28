---
id: deployContractHardhat
title: Deploy a Simple Contract with Hardhat
--- 
import useBaseUrl from "@docusaurus/useBaseUrl";

## Environment

- Ubuntu 20.04 LTS

## Prerequisites

- npm


## Steps:

1. Clone the source of Hardhat.  
```
$ git clone --depth=1 https://github.com/NomicFoundation/hardhat
```

2. Prepare a simple hardhat project.

```
$ mv hardhat/packages/hardhat-core/sample-projects/basic .
$ cd basic/
$ ls
contracts  hardhat.config.js  LICENSE.md  README.md  scripts  test
```

3. Install requirements.

```
$ npm init --yes
$ npm install --save-dev hardhat @nomiclabs/hardhat-waffle chai
$ npx hardhat --version
2.9.3
```

4. Adapt `hardhat.config.js` to Godwoken local network. Add the following `network` configuration to `hardhat.config.js`.
    
```bash
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

- `http://127.0.0.1:8024` is the Godwoken Web3 URL, which can be checked by the command line `./kicker info`  while deploy Godwoken local network.
- `0x9d5bc55413c14cf4ce360a6051eacdc0e580100a0d3f7f2f48f63623f6b05361` is the private key of account, which can be replaced with user’s own testing keys.
  
5. Run hardhat on Godwoken local network.

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
