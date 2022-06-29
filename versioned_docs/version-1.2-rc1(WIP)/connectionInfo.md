---
id: connectionInfo
title: Godwoken Public Networks
---
import useBaseUrl from "@docusaurus/useBaseUrl";

## GODWOKEN L2 MAINNET V1：

### Godwoken Web3 RPC

- **RPC URL**: https://v1.mainnet.godwoken.io/rpc
- **WebSocket**: wss://v1.mainnet.godwoken.io/ws

### Tools

- **Explorer (GwScan)**: https://v1.gwscan.com
- **Token Bridge**: https://mainnet.bridge.godwoken.io

### Deployment Information

- **Chain ID**: 71402
```bash
$ curl -X POST 'https://v1.mainnet.godwoken.io/rpc' \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_chainId","params": [],"id":1}'

 # Result
 # {"jsonrpc":"2.0","id":1,"result":"0x116ea"}
```

- **ETH Address Registry ID**: 2
   > `ETH Address Registry` layer2 [contract](https://github.com/nervosnetwork/godwoken-scripts/blob/master/c/contracts/eth_addr_reg.c) introduces two-ways mappings between `eth_address` and `gw_script_hash`.

-  [sUDT_ERC20_Proxy contracts](./briged-token-list.json)


### Run a Godwoken mainnet_v1 readonly node

-  [Godwoken readonly node config](./gw-mainnet_v1-config-readonly.toml)
```sh
$ cd mainnet_v1
# Note: It is better to run your own CKB mainnet node first.
# see: https://docs.nervos.org/docs/basics/guides/run-ckb-with-docker/#run-a-ckb-mainnet-node
$ docker-compose up -d gw-readonly
```

## GODWOKEN L2 TESTNET:

**RPC url**: [https://godwoken-testnet-v1.ckbapp.dev](https://godwoken-testnet-v1.ckbapp.dev/)

**Chain ID:** 71401 (or 0x116e9)

**L2 Godwoken Testnet explorer:**

- [https://v1.betanet.gwscan.com](https://v1.betanet.gwscan.com/)
- [https://gw-explorer.nervosdao.community](https://gw-explorer.nervosdao.community/) (Blockscout)

**L2 Godwoken Testnet Account Generator:**

- [https://testnet.bridge.godwoken.io](https://testnet.bridge.godwoken.io/)

**L2 Godwoken Testnet pCKB Contract**

- Address: 0xE05d380839f32bC12Fb690aa6FE26B00Bd982613
- Symbol: pCKB
- Decimals: 18

## Nervos L1 Mainnet Mirana:

**L1 Mainnet explorer:** [https://explorer.nervos.org](https://explorer.nervos.org)

Use the [latest release](https://github.com/nervosnetwork/ckb/releases/latest) and run `ckb init --chain mainnet` to initialize the node.
 - Mirana is active since the epoch 5414, see the [migration guide](https://github.com/jordanmack/nervos-ckb2021-hard-fork-migration-guide) to upgrade from Lina.


## **NERVOS L1 TESTNET:**

**L1 Testnet explorer:** [https://pudge.explorer.nervos.org/](https://pudge.explorer.nervos.org/)

**L1 Testnet faucet:** [https://faucet.nervos.org/](https://faucet.nervos.org/)