---
id: releaseNote1.5
title: Godwoken V1.5 Release Note
---
import useBaseUrl from "@docusaurus/useBaseUrl";

Godwoken is currently updated on a regular basis to provide new features and updates. The following release notes covers the most recent changes in Godwoken v1.4. You can check the full release notes in the [Godwoken Changlog](https://github.com/nervosnetwork/godwoken/blob/develop/CHANGELOG.md).

The latest update to Godwoken v1.5 includes the following changes:

#### Added
- feat: Introduced max_cycles_limit of a Godwoken block in [#767](https://github.com/nervosnetwork/godwoken/pull/767)
    This PR aims to add a dynamic and configurable way to manage the number of block transactions. This PR added a new cycle limit `max_cycles_limit` to the mem block. If there are not enough cycles available in the mem pool, the transaction will be packed into the next block. If a transaction has more cycles than `max_cycles_limit`, it will be discarded.

- Add RPC `get_pending_tx_hashes` in [#772](https://github.com/nervosnetwork/godwoken/pull/772)
    This PR added the new RPC `gw_get_pending_tx_hashes` to fetch pending transaction hashes, so that developers can get the `mem_pool` transactions of Godwoken.

#### Fixed
- fix `cargo test -p gw-tests` in [#773](https://github.com/nervosnetwork/godwoken/pull/773)
    This PR fixed `cargo test -p gw-tests` using rand 0.8 directly instead of using rand 0.6 via secp256k1. Before, `cargo test -p gw-tests` failed to compile the `gw-tests` separately because the `rand_os` feature of rand 0.6 was unenabled.

- fix submit_withdrawal_request random failure in [#774](https://github.com/nervosnetwork/godwoken/pull/774)
- fix(mempool): pool cycles not reset on next mem block for readonly node in [#781](https://github.com/nervosnetwork/godwoken/pull/781)
