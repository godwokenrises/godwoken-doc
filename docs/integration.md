---
id: integration
title: Integration Guide for Ethererm Developers
---
import useBaseUrl from "@docusaurus/useBaseUrl";

> Godwoken is a layer 2 rollup framework that provides an abstract account model and abstract layer 2 transactions atop the Nervos CKB. Whereas Ethereum developers can simply use Godwoken as an EVM-compatible layer 2 chain, just like Arbitrum and Optimism. 

This documentation describes how to interact with Godwoken using existing Ethereum develop tools, known caveats and workarouds.
Use this documentation as an integration guide for wallets and exchanges, or as a reference for developing dapps on Godwoken. 

This article assumes the user has knowledge of Ethereum.

## Why Develop on Godwoken?

- Security. Nervos Network is a PoW layer 1 chain and Godwoken is an optimistic rollup layer 2 chain built on Nervos Network. The security model is quite different from other EVM-compatible PoS/DPoS/PoA chains or sidechains. Check the references for more details for those so inclined.
- Low cost. A typical Godwoken transaction currently costs less than $0.0001.
- Ecosystem.
  - With Force Bridge, assets from 3 chains(Nervos, Ethereum and BSC) are already available on Godwoken. Support for more chains (Cardano, BTC) is on the way.
  - The TVL of Godwoken is now nearly [100 million](https://defillama.com/chains). A number of DeFi dapps(e.g. [YokaiSwap](https://www.yokaiswap.com/), [DARUMA](https://www.daruma.money/)) and wallets(e.g. [Safepal](https://www.safepal.io/download)) have already been integrated. 
- [Interoperability 2.0](https://medium.com/nervosnetwork/blockchain-abstraction-and-interoperability-2-0-eea98d81b7b6). This may be the trump card of Godwoken. With the design abstractions of Nervos Network and Godwoken, the ability to use any on-chain tool to port smart contracts to manipulate assets on the corresponding chain may be possible.

## Known Caveats

Godwoken targets 100% EVM compatibility, yet a few things are incompatible with EVM in the current version.

- The web3 RPC is not 100% compatible with EVM, so the existing web3.js libraries cannot be used to interact with Godwoken. But, [compatible providers](https://github.com/nervosnetwork/polyjuice-provider) are provided to minimize the workload of porting existing work with web3.js, ethers.js, truffle and hardhat. Simply replace the provider with polyjuice-provider when initiating.
- Ethereum wallets are used as transaction signers instead of a full-featured wallet. Metamask or other ethereum wallets are available to sign and send transactions on Godwoken, but not for checking balances, tracking transactions, transferring assets, etc.
- For more details on the incompatibilities when deploying Ethereum contracts, see the links below:
  - [Comparison with EVM](https://docs.godwoken.io/comparisonEVM)
  - [Godwoken Compatibility Examples](https://github.com/honestgoing/godwoken-polyjuice-compatibility-examples)

Godwoken V1 is still under development and is intended to be 100% EVM compatible. To develop on the current version, the caveats above must be noted.

## Account Initialization

Initialise the account in order to send transactions on Godwoken.

Visit YokaiSwap([Testnet](https://testnet.yokaiswap.com/), [Mainnet](https://www.yokaiswap.com/)), connect the wallet and obtain the L1 YOKAI DEPOSIT ADDRESS.

<img src={useBaseUrl("img/integration/yokai-wallet.png")}  width="100%"/>

<img src={useBaseUrl("img/integration/deposit-address.png")}  width="100%"/>

Send a minimum of **400 CKB** from the CKB wallet to this address.

> **Note:** Use [Nervos Faucet](https://faucet.nervos.org/) to fund the CKB wallet in Testnet.

Once the deposit is completed, the CKB balance will be available on the Yokai Exchange page, which means the account has been initialised.

<img src={useBaseUrl("img/integration/ckb-balance.png")}  width="100%"/>

## Assets Management

There are two different types of tokens on Godwoken, the [bridged token](https://www.gwscan.com/tokens/bridge) and the [layer 2 native token](https://www.gwscan.com/tokens/native).

The bridged token is a token bridged from other chains, and mapped as a ERC20 token on Godwoken.

The current source chains can be:
- Nervos Network
- Ethereum
- Binance Smart Chain

It is possible to manipulate the bridged token with ERC20 abi and given address.

- [Bridged Token list](https://github.com/nervosnetwork/godwoken-info/blob/master/mainnet/ERC20TokenList.json)
- [ERC20 contract and abi used in Godwoken](https://github.com/nervosnetwork/godwoken-polyjuice/tree/main/solidity/erc20)

CKB is also a bridge token on Godwoken. Meanwhile, CKB acts as an on-chain native token for Godwoken and, like ETH for Ethereum, is operable with the ERC20 proxy contract or be sent to the payment function of the contract.

A few facts to aware when manipulating the CKB:

1. Cannot transfer CKB with `sendTransaction` to arbitrary address carrying the value. Use the `transfer` method in the CKB ERC20 Proxy contract to do that.
2. Using the `getBalance` of Ethereum RPC to get the balance of CKB. Note that the decimal return value for CKB is 8, not 18 as in ETH. The balance of CKB can also be obtained using the `balanceOf` method in CKB ERC20 Proxy contract.
3. The CKB ERC20 Proxy contract address is `0x6BFD7c449B3FFDaCCcac80Cf3cA6bb89e9bF309C` for Testnet, and `0x9D9599c41383D7009C2093319d576AA6F89A4449` for Mainnet.
4. It is **impossible** to use Metamask or other wallets to show or send CKB.

Check the [demo](https://github.com/huwenchao/godwoken-demos/blob/main/gw-scripts/assets.ts) for more details.

## Dapp Development

An existing contract written in Solidity or Vyper can be ported to Godwoken, otherwise write a new contract.

There is a [demo](https://github.com/huwenchao/godwoken-demos/blob/main/gw-scripts/contract.ts) showing a simple way to deploy a contract to and interact with Godwoken.
There is no difference in compiling, so using truffle or hardhat to write, compile and test the contract is still possible.

More compatibility information:
- [Comparison with EVM](https://docs.godwoken.io/comparisonEVM)
- [Godwoken Compatibility Examples](https://github.com/honestgoing/godwoken-polyjuice-compatibility-examples)

## References

- rollup
  - [What is Rollup solution?](https://ethereum.org/en/developers/docs/scaling/layer-2-rollups/)
  - [(Almost) Everything you need to know about Optimistic Rollup | Low trust and Low Cost is important](https://research.paradigm.xyz/rollups)
