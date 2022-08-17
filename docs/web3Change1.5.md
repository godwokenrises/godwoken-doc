---
id: web3Change1.5
title: Godwoken Web3 V1.5 Release Note
---
import useBaseUrl from "@docusaurus/useBaseUrl";

[Godwoken Web3](https://github.com/nervosnetwork/godwoken-web3) is a Ethereum-compatibility RPC layer on Godwoken. Godwoken Web3 is being continually updated. The following content covers the most recent changes in Godwoken Web3 v1.5. For the full release notes refer to [Godwoken Web3 Releases](https://github.com/nervosnetwork/godwoken-web3/releases).

The latest update to Godwoken Web3 v1.5 includes the following changes:

#### Added

- feat: Adapt for auto create undeposited account in [#430](https://github.com/nervosnetwork/godwoken-web3/pull/430)
    Adapted to the automatic creation of account for undeposited sender on Godwoken.

- feat: Delete dropped auto create account tx in [#445](https://github.com/nervosnetwork/godwoken-web3/pull/445)
    Allow checks for the existence of an automatically created tx when calling RPC `eth_getTransactionByHash`, and will remove the dropped auto-create account tx.

- feat: add `poly_getEthTxHashByGwTxHash` and `poly_getGwTxHashByEthTxHash` in #449
    Added two new methods, `poly_getEthTxHashByGwTxHash` and `poly_getGwTxHashByEthTxHash`, that allow the conversion between Godwoken transaction hash and Ethereum transaction hash.

- feat: Add gw_is_request_in_queue in [#450](https://github.com/nervosnetwork/godwoken-web3/pull/450)
    This RPC method returns if the request (transaction or withdrawal) is in the fee queue. The request goes through the fee queue before being pushed to the mempool. This method is only supported on full nodes.


#### Fixed

- Fix some small bugs of filter methods (part 1) in #[427](https://github.com/nervosnetwork/godwoken-web3/pull/427)
- Fix and refactor eth filter methods (part 3) in [#429](https://github.com/nervosnetwork/godwoken-web3/pull/429)
- Improves the performance of `eth_getFilterChanges` by `BlockFilter`. in [#428](https://github.com/nervosnetwork/godwoken-web3/pull/428)
- fix: correct parameter type of SQL query of `eth_getBlockTransactionCountByHash` in [#440](https://github.com/nervosnetwork/godwoken-web3/pull/440)
- fix: Update revert error message and data in [#437](https://github.com/nervosnetwork/godwoken-web3/pull/437)
- fix: to eoa err msg in [#441](https://github.com/nervosnetwork/godwoken-web3/pull/441)
- fix: Add leading zeros for r & s when check auto create account tx ex… in [#457](https://github.com/nervosnetwork/godwoken-web3/pull/457)
- fix(indexer): r & s in rlp encode should be integer rather than bytes in [#458](https://github.com/nervosnetwork/godwoken-web3/pull/458)
   Fix `eth_tx_hash` calculation in indexer, where the `eth_tx_hash` will be incorrect when r / s has leading zeros

#### Others

- chore(main): tune latest median tx to 50 in [#434](https://github.com/nervosnetwork/godwoken-web3/pull/434)
- chore: rm minSudtFee env in [#442](https://github.com/nervosnetwork/godwoken-web3/pull/442)
- fix(ci): upgrade baseimage to 22.04 in [#461](https://github.com/nervosnetwork/godwoken-web3/pull/461)