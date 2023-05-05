---
id: connectionInfo
title: Godwoken Public Networks
---

import useBaseUrl from "@docusaurus/useBaseUrl";


## Godwoken Mainnet v1

| ITEM            	| Detail                                             	|
|-----------------	|----------------------------------------------------	|
| Network Name    	| Godwoken Mainnet v1                                 |
| RPC URL         	| https://v1.mainnet.godwoken.io/rpc                 	|
| Chain ID        	| 71402                                              	|
| Currency Symbol 	| pCKB                                                |
| Block Explorer  	| https://gwscan.com/                                	|
|                 	| https://v1.gwscan.com/                             	|
| Token Bridge    	| https://bridge.godwoken.io                         	|
| WebSocket       	| wss://v1.mainnet.godwoken.io/ws                    	|

- **ETH Address Registry ID**: 2

  > `ETH Address Registry` layer-2 [contract](https://github.com/godwokenrises/godwoken-scripts/blob/master/c/contracts/eth_addr_reg.c) introduces two-ways mappings between `eth_address` and `gw_script_hash`.

- [sUDT_ERC20_Proxy contracts](https://github.com/godwokenrises/godwoken-info/blob/main/mainnet_v1/bridged-token-list.json)


## Godwoken Testnet v1

| ITEM            	| Detail                                             	|
|-----------------	|----------------------------------------------------	|
| Network Name     	| Godwoken Testnet v1                                 |
| RPC URL         	| https://v1.testnet.godwoken.io/rpc                	|
| Chain ID        	| 71401                                              	|
| Currency Symbol 	| pCKB                                                |
| pCKB Faucet       | https://faucet-testnet.godwoken.io                  |
| Block Explorer  	| https://v1.testnet.gwscan.com/                     	|
| Token Bridge    	| https://testnet.bridge.godwoken.io                 	|
| WebSocket       	| wss://v1.testnet.godwoken.io/ws                     |
| Graph (subgraph)  | https://gw-testnet-graph.nervosdao.community  	    |
| Graph RPC       	| https://gw-testnet-graph.nervosdao.community/rpc/  	|
| Graph IPFS      	| https://gw-testnet-graph.nervosdao.community/ipfs/ 	|

- **ETH Address Registry ID:** 2

  > `ETH Address Registry` layer-2 [contract](https://github.com/godwokenrises/godwoken-scripts/blob/master/c/contracts/eth_addr_reg.c) introduces two-ways mappings between `eth_address` and `gw_script_hash`.


## Godwoken Mainnet v0

|ITEM             |                  Detail                     |
| --------------- | :------------------------------------------ |
| NETWORK NAME    | Godwoken Mainnet v0                  |
| RPC URL         | https://mainnet.godwoken.io/rpc             |
| Chain ID        | 71394                                       |
| Currency Symbol | pCKB                                        |
| Block Explorer  | https://v0.gwscan.com/                      |
| Token Bridge    | https://bridge.godwoken.io/#/v0 |
| WebSocket       | wss://mainnet.godwoken.io/ws                |


## Nervos Layer-1

| ITEM           | Testnet Pudge                      | Mainnet Mirana              |
| -------------- | :--------------------------------- | :-------------------------- |
| Block Explorer | https://pudge.explorer.nervos.org/ | https://explorer.nervos.org |
| Faucet         | https://faucet.nervos.org/         |                             |

### CKB Mainnet Mirana

Use the [latest release](https://github.com/nervosnetwork/ckb/releases/latest) and run `ckb init --chain mainnet` to initialize the node.

- Mirana is active since the epoch 5414, see the [migration guide](https://github.com/jordanmack/nervos-ckb2021-hard-fork-migration-guide) to upgrade from Lina.

### **CKB Testnet Pudge**

After adding the “Godwoken Testnet v1” to your wallet and copied your layer-1 Wallet Address which is connected to Metamask layer-1 address. We want to get some free CKB. Make sure your wallet is set to the “Godwoken Testnet v1”.

To deploy to Nervos layer-1 Testnet we need some free CKB on the L1 to use. Testnets require money just like our mainnets require real money but testnets use fake money that we can collect through a faucet.

There are many testnets available in this case the one we are using is the L1 Testnet faucet link below.

Paste your layer-1 address which should start with `ckt` and click claim.

**Note:** this might take a min to process.

- **Explorer:** [https://pudge.explorer.nervos.org/](https://pudge.explorer.nervos.org/)
- **Faucet:** [https://faucet.nervos.org/](https://faucet.nervos.org/)

## Run a CKB Mainnet Node and Testnet Node with Docker

- https://docs.nervos.org/docs/basics/guides/run-ckb-with-docker
