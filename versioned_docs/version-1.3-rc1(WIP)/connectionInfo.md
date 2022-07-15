---
id: connectionInfo
title: Godwoken Public Networks
---
import useBaseUrl from "@docusaurus/useBaseUrl";

## GODWOKEN MAINNET V1：

### Godwoken Web3 RPC

- **RPC URL**: https://v1.mainnet.godwoken.io/rpc
- **WebSocket**: wss://v1.mainnet.godwoken.io/ws

### Tools

- **Explorer (GwScan)**: https://v1.gwscan.com
- **Token Bridge**: https://bridge.godwoken.io

### Deployment Information

- **Chain ID**: 71402

- **ETH Address Registry ID**: 2
   > `ETH Address Registry` layer2 [contract](https://github.com/nervosnetwork/godwoken-scripts/blob/master/c/contracts/eth_addr_reg.c) introduces two-ways mappings between `eth_address` and `gw_script_hash`.

-  [sUDT_ERC20_Proxy contracts](https://github.com/nervosnetwork/godwoken-info/blob/mainnet_v1/mainnet_v1/bridged-token-list.json)


## GODWOKEN TESTNET V1:

### Godwoken Web3 RPC

* **RPC URL**: https://godwoken-testnet-v1.ckbapp.dev
* **WebSocket**: wss://godwoken-testnet-v1.ckbapp.dev/ws

### Tools

* **Explorer (GwScan)**: https://v1.testnet.gwscan.com
* **Explorer (Blockscout)**: https://gw-explorer.nervosdao.community
* **Token Bridge**: https://testnet.bridge.godwoken.io
  It's also a testnet account generator.

### Deployment Information

* **Chain ID:** 71401
  
* **ETH Address Registry ID:** 2
  > `ETH Address Registry` layer2 [contract](https://github.com/nervosnetwork/godwoken-scripts/blob/master/c/contracts/eth_addr_reg.c) introduces two-ways mappings between `eth_address` and `gw_script_hash`.

* **L2 Godwoken Testnet pCKB Contract**

    - Address: 0xE05d380839f32bC12Fb690aa6FE26B00Bd982613
    - Symbol: pCKB
    - Decimals: 18

## Nervos Layer 1

### CKB Mainnet Mirana:

**Explorer:** [https://explorer.nervos.org](https://explorer.nervos.org)

Use the [latest release](https://github.com/nervosnetwork/ckb/releases/latest) and run `ckb init --chain mainnet` to initialize the node.
 - Mirana is active since the epoch 5414, see the [migration guide](https://github.com/jordanmack/nervos-ckb2021-hard-fork-migration-guide) to upgrade from Lina.


### **CKB Testnet Pudge:**

* **Explorer:** [https://pudge.explorer.nervos.org/](https://pudge.explorer.nervos.org/)
* **Faucet:** [https://faucet.nervos.org/](https://faucet.nervos.org/)

### Run a CKB Mainnet Node and Testnet Node with Docker
- https://docs.nervos.org/docs/basics/guides/run-ckb-with-docker