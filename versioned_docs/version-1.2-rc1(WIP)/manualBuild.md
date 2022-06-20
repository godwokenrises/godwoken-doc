---
id: manualBuild
title: Deploy a Godwoken Environment Manually
---
import useBaseUrl from "@docusaurus/useBaseUrl";

We recommend developer to use the Godwoken-kicker, but if you want to deploy an development environment manually, check out the breakdown below.

## Prerequisites

- ckb >= v0.100.0, run ckb and ckb-miner
- ckb indexer >= v0.3.0 and run
- ckb_cli >= v0.100.0
- moleculec v0.7.2
- capsule v0.4.6

:::note
Make sure that ckb, ckb-miner and ckb-indexer are up and run when deploying.
::: 

1. Clone the source of Godwoken

```
$ git clone --recursive https://github.com/nervosnetwork/godwoken
cd godwoken
```

2. Setup Environment

Use the `setup` command from gw-tools to complete the settings, includng build scripts, deploy scripts, initialize layer2 genesis block, and generate configurations.

We need to get a deployment key with enough CKBs ready in advance (the default setup is about 2 million).

````
gw-tools setup -n 2 -k <deploy_key> --network devnet --scripts-build-config build-scripts.json -c setup-config.json
```

`scripts-build.json` is the input file that describes the way we build the CKB script: 
```
{
    "prebuild_image": "nervos/godwoken-prebuilds:v0.6.7",
    "repos": {
        "godwoken_scripts": "https://github.com/nervosnetwork/godwoken-scripts#master",
        "godwoken_polyjuice": "https://github.com/nervosnetwork/godwoken-polyjuice#main",
        "clerkb": "https://github.com/nervosnetwork/clerkb#v0.4.0"
    }
}
```

As a default, the setup command is executed in `build` mode. However, you can use the additional parameter `-m copy` to specify the `copy` mode. If you do so, the deployment process will copy the script from the pre-built docker image rather than building it, which will save plenty of time.

`setup-config.json` is another input file that provides several configs the Rollup:
```
{
  "l1_sudt_script_type_hash": "0xc5e5dcf215925f7ef4dfaf5f4b4f105bc321c02776d6e7d52a1db3fcd9d011a4",
  "l1_sudt_cell_dep": {
    "dep_type": "code",
    "out_point": {
      "tx_hash": "0xe12877ebd2c3c364dc46c5c992bcfaf4fee33fa13eebdf82c591fc9825aab769",
      "index": "0x0"
    }
  },
  "node_initial_ckb": 1200000,
  "cells_lock": {
    "code_hash": "0x49027a6b9512ef4144eb41bc5559ef2364869748e65903bd14da08c3425c0503",
    "hash_type": "type",
    "args": "0x0000000000000000000000000000000000000000"
  },
  "reward_lock": {
    "code_hash": "0x49027a6b9512ef4144eb41bc5559ef2364869748e65903bd14da08c3425c0503",
    "hash_type": "type",
    "args": "0x0000000000000000000000000000000000000000"
  },
  "burn_lock": {
    "code_hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "hash_type": "data",
    "args": "0x"
  }
}
```

This file must be modified so as to correctly sets up the sUDT script, otherwise the sUDT deposit will not work. `cells_lock` is used to unlock/upgrade Rollup scripts. `reward_lock` is used to receive challenge rewards. `burn_lock` is used to receive burned assets should be unlock-able.

3. Start Node
Adjust the `config.toml` file and start the Godwoken node.

```
cd output/node1
cp -r ../scripts ./scripts
./godwoken run
```

:::note
The default node mode is read-only and can be modified in `config.toml` to full node mode or test mode.
When multiple nodes need to be started in the same environment, you can change the listening port number manually in the respective `config.toml`.
:::