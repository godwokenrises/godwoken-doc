---
id: web3Change1.6
title: Godwoken Web3 V1.6 Release Note
---
import useBaseUrl from "@docusaurus/useBaseUrl";

[Godwoken Web3](https://github.com/nervosnetwork/godwoken-web3) is a Ethereum-compatibility RPC layer on Godwoken. Godwoken Web3 is being continually updated. The following content covers the most recent changes in Godwoken Web3 v1.6. For the full release notes refer to [Godwoken Web3 Releases](https://github.com/nervosnetwork/godwoken-web3/releases).

The latest update to Godwoken Web3 v1.6 includes the following changes:

#### Added
- feat: add NewRelic instruments in [#444](https://github.com/nervosnetwork/godwoken-web3/pull/444)
This PR adds NewRelic instruments for:
 - Postgres
 - Redis
 - Godwoken RPC client
 - HTTP interfaces

- feat: add optional Prof rpc in [#447](https://github.com/nervosnetwork/godwoken-web3/pull/447)
[#444](https://github.com/nervosnetwork/godwoken-web3/pull/444) PR added NewRelic to watch for perf on web3. And this PR in turn added Prof RPC module to enable quick debugging on the local environment. Only with `ENABLE_PROF_RPC=true` will allow such a module, like ckb:
 - `prof_cpu` to debug CPU profiling
 - `prof_heap` to debug memory usage/ memory leak

- feat: disallow meta contract tx, add parser tooling in [#454](https://github.com/nervosnetwork/godwoken-web3/pull/454)
- feat: add blockSpecifer for blockParameter to support Eip1898 in [#476](https://github.com/nervosnetwork/godwoken-web3/pull/476)
- apply rate limit to ws in [#452](https://github.com/nervosnetwork/godwoken-web3/pull/452)
- perf(web3-indexer): Store block faster in [#414](https://github.com/nervosnetwork/godwoken-web3/pull/414)
This PR aimed at fetching and storing transactions & logs in batch, which can be faster if the block has many transactions and logs.

#### Fixed
- fix: Get transaction from fullnode if readonly node returns null in [#469](https://github.com/nervosnetwork/godwoken-web3/pull/469)

- fix(indexer): dockerfile install libcurl4 in [#485](https://github.com/nervosnetwork/godwoken-web3/pull/485)

- fix: handle error for vm max cycle exceed in [#486](https://github.com/nervosnetwork/godwoken-web3/pull/486)

- fix(indexer): Retry when tx receipt not found in [#488](https://github.com/nervosnetwork/godwoken-web3/pull/488)
    This PR fixed the issue that the web3 indexer cannot receive the receipt and then failed. After fixing, it will retry for 10 times and wait for ~55s approx, or exit with an error if it still not found.

- fix: `gw_submit_l2transaction` support auto create account tx in [#498](https://github.com/nervosnetwork/godwoken-web3/pull/498)

- Fix log transaction index in [#502](https://github.com/nervosnetwork/godwoken-web3/pull/502)
    This PR fixed the issue that [`eth_getTransactionReceipt` 's transactionIndex was inconsistent with `log.transactionIndex`](https://github.com/nervosnetwork/godwoken-web3/issues/495). `log.transaction_index` was always zero when indexed after version v1.6.0-rc1. You need to consider re-async database from scratch, or use the provided CLI tool to correct the wrong data. See: https://github.com/nervosnetwork/godwoken-web3/blob/1.6-rc/packages/api-server/cli/README.md
    **To use the provided CLI tool**
    ```
    // Get count, database-url can also read from env
    yarn run cli wrong-log-transaction-index-count -d <database url>
     yarn run cli wrong-log-transaction-index-count --help // for more info

    // Fix wrong data
    // database-url can also read from env
    yarn run cli fix-log-transaction-index -d <database url>
    yarn run cli fix-log-transaction-index --help // for more info
    ```


#### Others
- chore: Add log for auto create account tx in [#481](https://github.com/nervosnetwork/godwoken-web3/pull/481)
- chore: update gw schemas in [#453](https://github.com/nervosnetwork/godwoken-web3/pull/453)
- chore: Bump nodemon version in [#471](https://github.com/nervosnetwork/godwoken-web3/pull/471)
- Add issue templates in [#290](https://github.com/nervosnetwork/godwoken-web3/pull/290)
- chore: Update comments in [#501](https://github.com/nervosnetwork/godwoken-web3/pull/501) 