---
id: releaseNote1.6
title: Godwoken V1.6 Release Note
---

import useBaseUrl from "@docusaurus/useBaseUrl";

Godwoken is currently updated on a regular basis to provide new features and updates. The following release notes covers the most recent changes in Godwoken v1.6. You can check the full release notes in the [Godwoken Changlog](https://github.com/godwokenrises/godwoken/blob/develop/CHANGELOG.md).

The latest update to Godwoken v1.6 includes the following changes:

- feat: add to_address to polyjuice parser in [#784](https://github.com/godwokenrises/godwoken/pull/784)

  Added `to_address` for checking and supporting native token transfers.

- Support non EIP-155 tx in [#777](https://github.com/godwokenrises/godwoken/pull/777)

  Godwoken now supports `EIP-155` transactions. Due to the reuse of the chain_id field, if we deploy a different Godwoken implementation with `chain_id = 0`, then a valid `EIP-155` transaction cannot be sent on-chain because Godwoken would assume the transaction as a non-EIP-155 transaction. With this pr, Godwoken accepts layer-2 transactions with `chain_id = 0`. 

- Validate native token transfer raw tx and signature in [#788](https://github.com/godwokenrises/godwoken/pull/788)

  Related to Polyjuice [#173](https://github.com/godwokenrises/godwoken-polyjuice/pull/173), see Polyjuice updates below for details. 


- refactor: remove sentry in [#780](https://github.com/godwokenrises/godwoken/pull/780)

- fix: recover sender of non EIP-155 txs in [#790](https://github.com/godwokenrises/godwoken/pull/790)

- fix(tools): Fix for withdraw cli in [#792](https://github.com/godwokenrises/godwoken/pull/792)

## Polyjuice

Polyjuice is an EVM-compatible executing environment built to work with the Godwoken layer-2 rollup framework, and allows Solidity-based smart contracts to run on the Nervos infrastructure.

Updates in the current release include:

- feat: support native token transfer in [#173](https://github.com/godwokenrises/godwoken-polyjuice/pull/173)

  A handler is added to deal with native token transfers before accessing EVM, and defined a native token transfer transaction as follows:

     - `to_id` is `CONTRACT_CREATOR_ID`.
     - only accept `call_kind` is equivalent to `EVMC_CALL`.
     - Added `to_address` to the end of the polyjuice args.
     - `to_addrress` should not be a contract.

- feat: Create new account during transferring if the to_address is not registered in [#177](https://github.com/godwokenrises/godwoken-polyjuice/pull/177)

  With this pr, a new EoA account will be created during the native token transfer if `to_address` is not registered. It also fixed a test issue triggered by an update to the account recovered from godwoken.

- fix: g_gas_price constant is too large for its type in [#175](https://github.com/godwokenrises/godwoken-polyjuice/pull/175)

- test: handle logs hash in post of ethereum tests in [#174](https://github.com/godwokenrises/godwoken-polyjuice/pull/174)

- test: integrate ethereum tests in [#172](https://github.com/godwokenrises/godwoken-polyjuice/pull/172)

- Fix wrong used_gas of native transfer in polyjuice_system_log in [#179](https://github.com/godwokenrises/godwoken-polyjuice/pull/179)
