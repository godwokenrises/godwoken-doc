---
id: releaseNote1.5
title: Godwoken V1.5 Release Note
---
import useBaseUrl from "@docusaurus/useBaseUrl";

Currently, Godwoken is updated on a regular basis to provide new features and updates. The following release notes covers the most recent changes in Godwoken v1.5. You can check the full release notes in the [Godwoken Changlog](https://github.com/nervosnetwork/godwoken/blob/develop/CHANGELOG.md).

The latest update to Godwoken v1.5 includes the following changes:

### Added

- feat: Adapt for auto create undeposited account in [#430](https://github.com/nervosnetwork/godwoken-web3/pull/430)

  Adapted to the automatic creation of account for undeposited sender on Godwoken.

- feat: Delete dropped auto create account tx in [#445](https://github.com/nervosnetwork/godwoken-web3/pull/445)

  Allow checks for the existence of an automatically created tx when calling RPC `eth_getTransactionByHash`, and will remove the dropped auto-create account tx.

- feat: add `poly_getEthTxHashByGwTxHash` and `poly_getGwTxHashByEthTxHash` in [#449](https://github.com/nervosnetwork/godwoken-web3/pull/449)

  Added two new methods, `poly_getEthTxHashByGwTxHash` and `poly_getGwTxHashByEthTxHash`, that allow the conversion between Godwoken transaction hash and Ethereum transaction hash.

- feat: Add gw_is_request_in_queue in [#450](https://github.com/nervosnetwork/godwoken-web3/pull/450)

  This RPC method returns if the request (transaction or withdrawal) is in the fee queue. The request goes through the fee queue before being pushed to the mempool. This method is only supported on full nodes.


### Fixed

- Fix some small bugs of filter methods (part 1) in #[427](https://github.com/nervosnetwork/godwoken-web3/pull/427)

- Fix and refactor eth filter methods (part 3) in [#429](https://github.com/nervosnetwork/godwoken-web3/pull/429)

- Improves the performance of `eth_getFilterChanges` by `BlockFilter`. in [#428](https://github.com/nervosnetwork/godwoken-web3/pull/428)

- fix: correct parameter type of SQL query of `eth_getBlockTransactionCountByHash` in [#440](https://github.com/nervosnetwork/godwoken-web3/pull/440)

- fix: Update revert error message and data in [#437](https://github.com/nervosnetwork/godwoken-web3/pull/437)

- fix: to eoa err msg in [#441](https://github.com/nervosnetwork/godwoken-web3/pull/441)

- fix: Add leading zeros for r & s when check auto create account tx ex… in [#457](https://github.com/nervosnetwork/godwoken-web3/pull/457)

- fix(indexer): r & s in rlp encode should be integer rather than bytes in [#458](https://github.com/nervosnetwork/godwoken-web3/pull/458)
  Fix `eth_tx_hash` calculation in indexer, where the `eth_tx_hash` will be incorrect when r / s has leading zeros

- fix(ci): use ubuntu: focal to build web3-indexer in [#465](https://github.com/nervosnetwork/godwoken-web3/pull/465)

- fix: Update insufficient balance error message in [#473](https://github.com/nervosnetwork/godwoken-web3/pull/473)

  This PR fixed an issue where ["from id not found by from Address" when the transfer account balance is insufficient](https://github.com/nervosnetwork/godwoken-web3/issues/468) with:
    - Update error message if `balance < requiredBalance` when send transaction
    - Remove `balance > 0` check in `eth_call` & `eth_estimateGas`

- Add cli command to fix  `eth tx hash` in [#475](https://github.com/nervosnetwork/godwoken-web3/pull/475)

  This PR is to fix the wrong data from `eth_tx_hash`. The `eth-tx-hash` data field in `web3-indexer-database`(PostgreSQL) could previously contain incorrect data. This problem was fixed in v1.5.1-rc1, so the data indexed by web3_version >= v1.5.1-rc1 is OK. Otherwise, you need to consider re-async database from scratch, or use the provided CLI tool to correct wrong data. See: https://github.com/nervosnetwork/godwoken-web3/blob/1.5-rc/packages/api-server/cli/README.md

  **Use the provided CLI tool**

  ```
  # Run `bash` in godwoken-web3 container
  cd /godwoken-web3
  
  yarn run cli list-wrong-eth-tx-hashes --help
  yarn run cli list-wrong-eth-tx-hashes
  
  yarn run cli fix-eth-tx-hash --help
  yarn run cli fix-eth-tx-hash
  ```

### Others

- chore(main): tune latest median tx to 50 in [#434](https://github.com/nervosnetwork/godwoken-web3/pull/434)
- chore: rm minSudtFee env in [#442](https://github.com/nervosnetwork/godwoken-web3/pull/442)
- fix(ci): upgrade baseimage to 22.04 in [#461](https://github.com/nervosnetwork/godwoken-web3/pull/461)
- chore: install openssl in docker build  in [#470](https://github.com/nervosnetwork/godwoken-web3/pull/470)

