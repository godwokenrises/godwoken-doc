---
id: integration
title: Integration Guide for Ethererm Developers
---

import useBaseUrl from "@docusaurus/useBaseUrl";

import Link from "@docusaurus/Link";

Ethereum developers can simply use Godwoken as an EVM-compatible layer 2 chain, just like Arbitrum and Optimism.

This documentation can be used as an integration guide for wallets and exchanges, or as a reference for developing dApps on Godwoken. It describes how to interact with Godwoken using existing Ethereum development tools, known caveats of version 1 and corresponding workarounds.

The knowledge of Ethereum is a prerequisite for using this guide.

## Why Develop on Godwoken?

- **Security** - Nervos Network is a Proof-of-Work (PoW) layer 1 chain and Godwoken is an optimistic rollup layer 2 chain built on Nervos Network. The security model is quite different from other EVM-compatible PoS/DPoS/PoA chains or sidechains. For more information, see the references section.
- **Low cost** - A typical Godwoken transaction currently costs less than $0.0001.
- **Ecosystem**
  - With Force Bridge, assets from 3 chains (Nervos, Ethereum and BSC) are already available on Godwoken. The support for more chains (Cardano, BTC) is on the way.
  - The TVL of Godwoken is now nearly [100 million](https://defillama.com/chains). A number of DeFi dApps (e.g. [YokaiSwap](https://www.yokaiswap.com/), [DARUMA](https://www.daruma.money/)) and wallets (e.g. [SafePal](https://www.safepal.io/download)) have already been integrated. 
- [**Interoperability 2.0**](https://medium.com/nervosnetwork/blockchain-abstraction-and-interoperability-2-0-eea98d81b7b6) - This may be the trump card of Godwoken. With the design abstractions of Nervos Network and Godwoken, it is possible to use any on-chain tool to port smart contracts to manipulate assets on the corresponding chain.

## Known Caveats

Godwoken V1 is still under development and targets 100% EVM compatibility.

To develop on Godwoken V1, the following caveats must be noted:

- The existing web3.js libraries are not used to interact with Godwoken because the web3 RPC is not fully compatible with EVM. [compatible providers](https://github.com/nervosnetwork/polyjuice-provider) are provided to minimize the workload of porting existing work with web3.js, ethers.js, Truffle and Hardhat. Simply replace the provider with polyjuice-provider when initiating the wallet provider.
- Ethereum wallets are used as transaction signers instead of a full-featured wallet that support checking balances, tracking transactions, transferring assets etc. The Ethereum wallets such as MetaMask support signing and sending transactions on Godwoken.
- For more details on the incompatibilities when deploying Ethereum contracts, see the links below:
  - <Link to={useBaseUrl('/comparisonEVM')}>Comparison with EVM</Link>
  - [Godwoken Compatibility Examples](https://github.com/honestgoing/godwoken-polyjuice-compatibility-examples)

## Account Initialization

It is necessary to initialize an account in order to send transactions on Godwoken.

1. Visit YokaiSwap ([Testnet](https://testnet.yokaiswap.com/) or [Mainnet](https://www.yokaiswap.com/)). 

2. Connect the wallet and obtain the **L1 YOKAI DEPOSIT ADDRESS**.
   <img src={useBaseUrl("img/integration/yokai-wallet.png")}  width="60%"/>
   <img src={useBaseUrl("img/integration/deposit-address.png")}  width="50%"/>
   
3. Send a minimum of **400** CKBs from a CKB wallet to this address.

   **Note:** Use [Nervos Faucet](https://faucet.nervos.org/) to fund the CKB wallet in Testnet.

   Once the deposit is completed, the CKB balance will be visible on the Yokai Exchange page, which means the account has been initialized.

   <img src={useBaseUrl("img/integration/ckb-balance.png")}  width="60%"/>

## Assets Management

There are two different types of tokens on Godwoken, the [bridged token](https://www.gwscan.com/tokens/bridge) and the [layer 2 native token](https://www.gwscan.com/tokens/native).

The bridged token is a token bridged from other chains, and mapped as an ERC20 token on Godwoken.

The current source chains can be:
- Nervos Network
- Ethereum
- Binance Smart Chain

It is possible to manipulate the bridged token with ERC20 ABI and given address.

- [Bridged Token list](https://github.com/nervosnetwork/godwoken-info/blob/master/mainnet/ERC20TokenList.json)
- [ERC20 contract and ABI used in Godwoken](https://github.com/nervosnetwork/godwoken-polyjuice/tree/main/solidity/erc20)

CKB is also a bridged token on Godwoken. CKB acts as a native token for Godwoken in the same way that ETH does for Ethereum, but can also operate with the ERC20 proxy contract.

A few facts to keep in mind when manipulating the CKB:

1. Do not transfer CKB with `sendTransaction` to arbitrary address carrying the value. Use the `transfer` method in the CKB ERC20 proxy contract to transfer CKB.
2. Use the `getBalance` method of the Ethereum RPC to get the balance of CKB. Note that the decimal return value for CKB is 8, not 18 as in ETH. The balance of CKB can also be obtained using the `balanceOf` method in the CKB ERC20 proxy contract.
3. The CKB ERC20 proxy contract address is `0x6BFD7c449B3FFDaCCcac80Cf3cA6bb89e9bF309C` for Testnet, and `0x9D9599c41383D7009C2093319d576AA6F89A4449` for Mainnet.
4. It is **impossible** to use MetaMask or other wallets to show or send CKB.

Check the [demo](https://github.com/huwenchao/godwoken-demos/blob/main/gw-scripts/assets.ts) for more details.

## DApp Development

An existing contract written in Solidity or Vyper can be ported to Godwoken, otherwise write a new contract.

There is a [demo](https://github.com/huwenchao/godwoken-demos/blob/main/gw-scripts/contract.ts) showing a simple way to deploy a contract to and interact with Godwoken.
There is no difference in compiling, so using Truffle or Hardhat to write, compile and test the contract is still possible.

More compatibility information:
- <Link to={useBaseUrl('/comparisonEVM')}>Comparison with EVM</Link>
- [Godwoken Compatibility Examples](https://github.com/honestgoing/godwoken-polyjuice-compatibility-examples)

## References

- Rollup
  - [What is Rollup solution?](https://ethereum.org/en/developers/docs/scaling/layer-2-rollups/)
  - [(Almost) Everything you need to know about Optimistic Rollup | Low trust and Low Cost is important](https://research.paradigm.xyz/rollups)
