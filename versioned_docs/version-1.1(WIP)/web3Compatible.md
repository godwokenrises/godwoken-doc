---
id: web3Compatible
title: Godwoken Web3 API Compatibility
---

[Godwoken Web3 API](https://github.com/nervosnetwork/godwoken-web3) is a Web3 RPC compatible layer developed on top of Godwoken.

For more information about the usage, see [Ethereum RPC](https://eth.wiki/json-rpc/API) docs.

## RPC Compatibility

### `transaction.to` MUST be a Contract Address

The `to` member of a Godwoken transaction must be a contract address.

#### **Result**

The `to` parameter of the following RPC methods must be a contract address, **not** an EOA address:
 - `eth_call`
 - `eth_estimateGas`
 - `eth_sendRawTransaction`

#### **Recommend Workaround**

Use the transfer function of the [CKB_ERC20_Proxy](https://github.com/nervosnetwork/godwoken-polyjuice/blob/3f1ad5b/solidity/erc20/README.md) contract [combined](https://github.com/nervosnetwork/godwoken-polyjuice/blob/3f1ad5b322/solidity/erc20/SudtERC20Proxy_UserDefinedDecimals.sol#L154) with `sudtId = 1` (CKB a.k.a. [pCKB](https://github.com/nervosnetwork/godwoken/blob/develop/docs/life_of_a_polyjuice_transaction.md#pckb)) to transfer assets from EOA To EOA.

----

### Signing Transaction Only Support EIP155

Currently, we only support the [EIP155](https://eips.ethereum.org/EIPS/eip-155) signing scheme that incorporated `CHAIN_ID` for simple replay attack protection. 

#### **Result**

If you use an outdated Ethereum toolchain to send transactions, such as `truffle-hdwallet-provider`, you will experience failures.

#### **Recommend Workaround**

Make sure to use the latest Ethereum toolchain, such as [ether.js](https://docs.ethers.io/v5/) / [web3.js](https://web3js.readthedocs.io/en/v1.7.3/) / [truffle](https://trufflesuite.com/truffle/) / [@truffle/hdwallet-provider](https://github.com/trufflesuite/truffle-hdwallet-provider), etc.

----

### Zero Address

Godwoken does not support the concept of [zero address](https://ethereum.org/ru/glossary/#zero-address) (0x0000000000000000000000000000000000000000). This means that Polyjuice cannot support the zero address as well.

#### **Result**

Transactions with the zero address in the `from`/`to` field are not supported.

#### **Recommend Workaround**

To use the zero address as a black hole to burn ethers, you can use the transfer function of the [CKB_ERC20_Proxy](https://github.com/nervosnetwork/godwoken-polyjuice/blob/3f1ad5b/solidity/erc20/README.md) contract to send ethers to the zero address.

For more information on the compatibility changes of Godwoken Web3 API, see [compatibility-breaking-changes](https://github.com/nervosnetwork/godwoken-web3/tree/compatibility-breaking-changes).