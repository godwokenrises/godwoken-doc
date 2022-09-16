---
id: web3Change1.7
title: Godwoken Web3 V1.7 Release Note
---

import useBaseUrl from "@docusaurus/useBaseUrl";

[Godwoken Web3](https://github.com/nervosnetwork/godwoken-web3) is a Ethereum-compatibility RPC layer on Godwoken. Godwoken Web3 is being continually updated. The following content covers the most recent changes in Godwoken Web3 v1.7. For the full release notes refer to [Godwoken Web3 Releases](https://github.com/nervosnetwork/godwoken-web3/releases).

The latest update to Godwoken Web3 v1.7 includes the following changes:

## Feat

- Support native transfer in [#505](https://github.com/nervosnetwork/godwoken-web3/pull/505)

  Added support for native token transfers. 

- feat: Support non eip155 tx in [#490](https://github.com/nervosnetwork/godwoken-web3/pull/490)

- feat: add poly_getHealthStatus api and health-check script in [#497](https://github.com/nervosnetwork/godwoken-web3/pull/497)

- feat: Restart worker if exit with error code in [#513](https://github.com/nervosnetwork/godwoken-web3/pull/513)

## Fixed

- fix: declare StorageKey as HexNumber type in [#510](https://github.com/nervosnetwork/godwoken-web3/pull/510)

- fix: method not found in ws api in [#493](https://github.com/nervosnetwork/godwoken-web3/pull/493)

## Other

- refactor: use global redis client in cacheStore in [#491](https://github.com/nervosnetwork/godwoken-web3/pull/491)

- refactor: reuse tx hash convert fn in [#489](https://github.com/nervosnetwork/godwoken-web3/pull/489)