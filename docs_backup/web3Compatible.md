---
id: web3Compatible
title: Godwoken Web3 API Compatibility
---
---
id: web3Compatible
title: Godwoken Web3 API Compatibility
---

# Eth Compatibility
Godwoken Web3 API is a Web3 RPC compatible layer built atop Godwoken/Polyjuice.

## RPC compatibility

#### `transaction.to` MUST be a Contract Address

The `to` member of a Godwoken transaction must be a contract.

 **Result**

 - In the following RPCs, the `to` parameter can only be a contract address and **CANNOT** be an EOA address:
 - eth_call
 - eth_estimateGas
 - eth_sendRawTransaction

**Recommend Workaround**

 - *Transfer Value From EOA To EOA*: Use the `transfer function` in [CKB_ERC20_Proxy](https://github.com/nervosnetwork/godwoken-polyjuice/blob/3f1ad5b/solidity/erc20/README.md) contract [combined](https://github.com/nervosnetwork/godwoken-polyjuice/blob/3f1ad5b322/solidity/erc20/SudtERC20Proxy_UserDefinedDecimals.sol#L154) with sUDT_ID = 1 (CKB a.k.a. [pCKB](https://github.com/nervosnetwork/godwoken/blob/develop/docs/life_of_a_polyjuice_transaction.md#pckb)).

----

#### Signing Transaction Only Support EIP155

[EIP155](https://eips.ethereum.org/EIPS/eip-155) added the chainId for simple replay attack protection, but currently only EIP155 signing scheme is supported.

 **Result**
 - Using outdated Ethereum toolchain, like `truffle-hdwallet-provider`, to send transaction will result in failure.

**Recommend workaround**
 - always use latest ethereum toolchain, like `ether.js` / `web3.js` / `truffle` / `@truffle/hdwallet-provider` etc.

----

#### ZERO ADDRESS

Godwoken does not have corresponding "zero address"(0x0000000000000000000000000000000000000000) concept, so Polyjuice won't be able to handle zero address as well.

 **Result**
 - Transaction with zero address in from/to filed is not supported.
  
**Recommend workaround**

 - if you are trying use zero address as a black hole to burn ethers, you can use `transfer function` in CKB_ERC20_Proxy to send ethers to zero address. more info can be found on above section `Transfer Value From EOA To EOA`.

For more information on Godwoken Web3 API, visite [godwoken-web3](https://github.com/nervosnetwork/godwoken-web3/tree/compatibility-breaking-changes).