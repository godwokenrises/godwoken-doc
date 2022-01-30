---
id: integration
title: Integration Guide for Ethererm Developers
---
import useBaseUrl from "@docusaurus/useBaseUrl";

> Godwoken is a layer 2 rollup framework that provides an abstracted account model and abstracted layer 2 transactions upon Nervos CKB.

This is the introduction of Godwoken in [Overview](./overview.md).
For Ethereum Developers, you can simply use Godwoken as an EVM-compatible layer 2 chain, just like Arbitrum and Optimism. 

This documentation describes how to interact with Godwoken with existing Ethereum develop tools, known caveats and workarouds.
You can use it as an integration guide for wallets and exchanges, or a reference to develop dapps on Godwoken. 

It assumes you have prior knowledge of Ethereum.

## Why Develop on Godwoken?

- Security. Nervos Network is a PoW layer 1 chain and Godwoken is an optimistic rollup layer 2 chain built on Nervos Network. The security model is quite different with other EVM-compatible PoS/DPoS/PoA chains or sidechains. Check the references for more details if you are interested.
- Low cost. A typical Godwoken transaction costs less than 0.0001 dollar right now. 
- Ecosystem.
  - With the help of Force Bridge, we already have assets from 3 chains(Nervos, Ethereum and BSC) on Godwoken. And support for more chains(Cardano, BTC) is coming.
  - The TVL of Godwoken is nearly [100 million](https://defillama.com/chains) right now. There are already some DeFi dapps(e.g. [YokaiSwap](https://www.yokaiswap.com/), [DARUMA](https://www.daruma.money/)) and wallets(e.g. [Safepal](https://www.safepal.io/download)) integrated. 
- [Interoperability 2.0](https://medium.com/nervosnetwork/blockchain-abstraction-and-interoperability-2-0-eea98d81b7b6). It might be the killing feature of Godwoken. With the design abstraction of Nervos Network and Godwoken, we might be able to use tools from any chain to manipulate assets from any chain with smart contracts ported from any chain.

## Known Caveats

Godwoken targets 100% EVM compatibility, but there are certain things that are incompatible with EVM in the current version.

- The web3 RPC is not 100% compatible with EVM, so we can't use existing web3.js libraries to interact with Godwoken. We provide [compatible providers](https://github.com/nervosnetwork/polyjuice-provider) to minimize your work to port existing work with web3.js, ethers.js, truffle and hardhat. Just replace the provider with what polyjuice-provider when you initiate.
- Ethererm wallet are used as transaction signer instead of a fully-featured wallet. We can use Metamask or other Ethereum wallets to sign and send transactions on Godwoken, but we can not use them to check balance, track transactions, transfer assets, etc.
- There are some incompatibilities when deploying Ethereum contracts. You can check the links below for more details.
  - [Comparison with EVM](https://docs.godwoken.io/comparisonEVM)
  - [Godwoken Compatibility Examples](https://github.com/honestgoing/godwoken-polyjuice-compatibility-examples)

We are working on Godwoken V1, which is targeting 100% EVM compatibility. If you are going to develop on current version, you should know the caveats above.

## Account Initialization

Before you can send transaction on Godwoken, you need to initialize the account.

Visit YokaiSwap([Testnet](https://testnet.yokaiswap.com/), [Mainnet](https://www.yokaiswap.com/)), connect your wallet,
get your L1 YOKAI DEPOSIT ADDRESS.

<img src={useBaseUrl("img/integration/yokai-wallet.png")}  width="100%"/>

<img src={useBaseUrl("img/integration/deposit-address.png")}  width="100%"/>

Send at least **400 CKB** to this address from your CKB wallet.

> **Note:** You can use [Nervos Faucet](https://faucet.nervos.org/) to fund it in Testnet.

After the deposition finish, you will see your CKB balance on Yokai Exchange page.
It means your account is initialized.

<img src={useBaseUrl("img/integration/ckb-balance.png")}  width="100%"/>

## Assets Management

There are two different kinds of token on Godwoken, [bridged token](https://www.gwscan.com/tokens/bridge) and [layer 2 native token](https://www.gwscan.com/tokens/native).

A bridged token is a token bridged from other chains, and mapped as a ERC20 token on Godwoken.

The source chain right now can be:
- Nervos Network
- Ethereum
- Binance Smart Chain

You can manipulate the bridged token with ERC20 abi and given address.

- [Bridged Token list](https://github.com/nervosnetwork/godwoken-info/blob/master/mainnet/ERC20TokenList.json)
- [ERC20 contract and abi used in Godwoken](https://github.com/nervosnetwork/godwoken-polyjuice/tree/main/solidity/erc20)

CKB is also a bridged token on Godwoken. But it is also used as the chain native token on Godwoken, like ETH on Ethereum.
You can manipulate it with the ERC20 proxy contract or send it to payable functions of contract.

There are something you need to know if you want to manipulate CKB:

1. You can not transfer CKB with `sendTransaction` to arbitrary address with value. Use `transfer` method in CKB ERC20 Proxy contract to do that.
2. You can use `getBalance` of Ethereum RPC to get the balance of CKB. Watch out that the decimal of return value is 8 for CKB, not 18 like ETH. You can also use `balanceOf` method in CKB ERC20 Proxy contract to get the balance of CKB.
3. The CKB ERC20 Proxy contract address is `0x6BFD7c449B3FFDaCCcac80Cf3cA6bb89e9bF309C` for Testnet, and `0x9D9599c41383D7009C2093319d576AA6F89A4449` for Mainnet.
4. You can not use Metamask or other wallets to show or send CKB.

Check the [demo](https://github.com/huwenchao/godwoken-demos/blob/main/gw-scripts/assets.ts) for more details.

## Dapp Development

You can port your existing contracts writen in Solidity or Vyper to Godwoken or write new.

There is a [demo](https://github.com/huwenchao/godwoken-demos/blob/main/gw-scripts/contract.ts) to show the simple way to deploy a contract to Godwoken and interact with it.
There is nothing different in compiling. So you can still use truffle or hardhat to wirite, compile and test your contracts.

More compatibility information:
- [Comparison with EVM](https://docs.godwoken.io/comparisonEVM)
- [Godwoken Compatibility Examples](https://github.com/honestgoing/godwoken-polyjuice-compatibility-examples)

## References

- rollup
  - [What is Rollup solution?](https://ethereum.org/en/developers/docs/scaling/layer-2-rollups/)
  - [(Almost) Everything you need to know about Optimistic Rollup | Low trust and Low Cost is important](https://research.paradigm.xyz/rollups)
