---
id: releaseNote
title: Godwoken V1.0 Release Note
---
import useBaseUrl from "@docusaurus/useBaseUrl";

This release note includes the new features and major updates in Godwoken v1.

> Note that Godwoken v1 is **NOT** an upgrade to the existing chain! Instead, v1 will be deployed as a new chain with tools to help users and developers migrate to the new chain.
> 

## Ethereum Compatibility Improvements

In the new version, compatibility improvements for Godwoken include:

- Provide API level compatibility and remove the web3-provider plugin.
- Support native ETH addresses in API and EVM, removing the concept of Godwoken addresses.
- Support Ethereum signature format and EIP-712. Users can view the transaction before signing, rather than signing a random 32-byte message. For more details, see [#561](https://github.com/nervosnetwork/godwoken/pull/561).
- Fix total provisioning interface for sUDT ERC-20 proxy contracts. For more details, see [#560](https://github.com/nervosnetwork/godwoken/pull/560).
- Support interactions with Ethereum addresses that have not yet been registered with Godwoken.

Briefly stated, developers can use Godwoken v1 in the same way they use other Ethereum-compatible chains, by switching the network to Godwoken. The polyjuice-provider web3 plugin was removed in v1.

## Other Improvements

- Support p2p mem-pool syncing, further PRs to enable fully decentralized syncing, but this PR is a good starting. For more details, see [#642](https://github.com/nervosnetwork/godwoken/pull/642).
- perf: optimize molecule usage. For more details, see [#640](https://github.com/nervosnetwork/godwoken/pull/640).
- perf: use BTreeSet in FeeQueue. For more details, see [#641](https://github.com/nervosnetwork/godwoken/pull/641).
- Change rollup cell's lock to omni-lock. The witness field of CKB transactions cannot hold too much data due to a secp256k1 locking error. This PR allows optimistic rollup to submit larger blocks, so that the witness field can hold more data. For more details, see [#608](https://github.com/nervosnetwork/godwoken/pull/608).

## Godwoken Internal Changes

> DApp developers are free to skip this part.
> 

Godwoken v1 introduces a new contract, the Ethereum address registry, that stores Ethereum addresses. Once a user deposits a new account, Godwoken will create a mapping between the Ethereum address and the account. Additionally, some RPCs have been adapted to support Ethereum addresses as parameters, and some Godwoken data structures have been adapted to support the new address format.

For more details about Godwoken internal changes, see [docs/release-notes/v1-internal-CHANGES.md](https://github.com/nervosnetwork/godwoken/blob/72b6728e4315ab581282685cffe75cdbfe38670c/docs/release-notes/v1-internal-CHANGES.md).