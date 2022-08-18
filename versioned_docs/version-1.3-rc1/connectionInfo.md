---
id: connectionInfo
title: Godwoken Public Networks
---

import useBaseUrl from "@docusaurus/useBaseUrl";

## Godwoken

| ITEM            | Godwoken Testnet                        | Godwoken Mainnet v0             | Godwoken Mainnet v1                         |
| --------------- | :-------------------------------------- | :------------------------------ | :------------------------------------------ |
| NETWORK NAME    | Godwoken/PolyJuice Testnet              | Godwoken/PolyJuice Mainnet      | Godwoken/PolyJuice Mainnet                  |
| RPC URL         | https://godwoken-testnet-v1.ckbapp.dev, | https://mainnet.godwoken.io/rpc | https://v1.mainnet.godwoken.io/rpc          |
| Chain ID        | 71401                                   | 71394                           | 71402                                       |
| Currency Symbol | CKB                                     | CKB                             | CKB                                         |
| Block Explorer  | https://v1.testnet.gwscan.com/,         | https://v0.gwscan.com/          | https://gwscan.com/, https://v1.gwscan.com/ |
|                 | https://gw-explorer.nervosdao.community |                                 |
| Token Bridge    | https://testnet.bridge.godwoken.io      | https://bridge.godwoken.io      | https://bridge.godwoken.io                  |
| WebSocket       | wss://godwoken-testnet-v1.ckbapp.dev/ws | wss://mainnet.godwoken.io/ws    | wss://v1.mainnet.godwoken.io/ws             |

## Nervos Layer 1

| ITEM           | Testnet Pudge                      | Mainnet Mirana              |
| -------------- | :--------------------------------- | :-------------------------- |
| Block Explorer | https://pudge.explorer.nervos.org/ | https://explorer.nervos.org |
| Faucet         | https://faucet.nervos.org/         |                             |

## Notes

### GODWOKEN MAINNET V1

- **ETH Address Registry ID**: 2

  > `ETH Address Registry` layer2 [contract](https://github.com/nervosnetwork/godwoken-scripts/blob/master/c/contracts/eth_addr_reg.c) introduces two-ways mappings between `eth_address` and `gw_script_hash`.

- [sUDT_ERC20_Proxy contracts](https://github.com/nervosnetwork/godwoken-info/blob/main/mainnet_v1/bridged-token-list.json)

### GODWOKEN TESTNET V1

- **ETH Address Registry ID:** 2

  > `ETH Address Registry` layer2 [contract](https://github.com/nervosnetwork/godwoken-scripts/blob/master/c/contracts/eth_addr_reg.c) introduces two-ways mappings between `eth_address` and `gw_script_hash`.

- **L2 Godwoken Testnet pCKB Contract**

  - Address: 0xE05d380839f32bC12Fb690aa6FE26B00Bd982613
  - Symbol: pCKB
  - Decimals: 18

### CKB Mainnet Mirana

Use the [latest release](https://github.com/nervosnetwork/ckb/releases/latest) and run `ckb init --chain mainnet` to initialize the node.

- Mirana is active since the epoch 5414, see the [migration guide](https://github.com/jordanmack/nervos-ckb2021-hard-fork-migration-guide) to upgrade from Lina.

### **CKB Testnet Pudge**

After adding the “Godwoken Testnet v1” to your wallet and copied your L1 Wallet Address which is connected to Metamask L1 address. We want to get some free CKB. Make sure your wallet is set to the “Godwoken Testnet v1”.

To deploy to Nervos L1 Testnet we need some free CKB on the L1 to use. Testnets require money just like our mainnets require real money but testnets use fake money that we can collect through a faucet.

There are many testnets available in this case the one we are using is the L1 Testnet faucet link below.

Paste your L1 address which should start with `ckt` and click claim.

**Note:** this might take a min to process.

- **Explorer:** [https://pudge.explorer.nervos.org/](https://pudge.explorer.nervos.org/)
- **Faucet:** [https://faucet.nervos.org/](https://faucet.nervos.org/)

### Run a CKB Mainnet Node and Testnet Node with Docker

- https://docs.nervos.org/docs/basics/guides/run-ckb-with-docker
