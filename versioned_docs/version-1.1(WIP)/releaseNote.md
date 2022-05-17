---
id: releaseNote
title: Godwoken V1.1 Release Note
---
import useBaseUrl from "@docusaurus/useBaseUrl";

This release note includes the new features and major updates in Godwoken v1.1.

> Godwoken v1 is not an upgrade on the existing chain! Instead, v1 will be deployed as a new chain with tools to help users and developers migrate to the new chain.
>
> Developers can use Godwoken v1 in the same way they use other Ethereum-compatible chains, by switching the network to Godwoken. 

## Ethereum Compatibility Improvements

In the new version, compatibility improvements for Godwoken include:

- Provide API level compatibility and remove the web3-provider plugin.
- Support native ETH addresses in API and EVM, removing the concept of Godwoken addresses.
- Support Ethereum signature format and EIP-712. Users can view the transaction before signing, rather than signing a random 32-byte message. For more details, see [#561](https://github.com/nervosnetwork/godwoken/pull/561).
- Fix total provisioning interface for sUDT ERC-20 proxy contracts. For more details, see [#560](https://github.com/nervosnetwork/godwoken/pull/560).
- Support interactions with Ethereum addresses that have not yet been registered with Godwoken.
- Unify layer 2 fungible token representation as unit256.
- Change layer 2 CKB decimal from 8 to 18, improve compatibility between MetaMask and native CKB. [#675](https://github.com/nervosnetwork/godwoken/pull/675)
- Remove the polyjuice-provider web3 plugin.

## Other Improvements

- Support p2p mem-pool syncing, further PRs to enable fully decentralized syncing, but this PR is a good starting. For more details, see [#642](https://github.com/nervosnetwork/godwoken/pull/642).
- perf: optimize molecule usage. For more details, see [#640](https://github.com/nervosnetwork/godwoken/pull/640).
- perf: use BTreeSet in FeeQueue. For more details, see [#641](https://github.com/nervosnetwork/godwoken/pull/641).
- Change the lock of rollup cells to Omnilock. The witness field of CKB transactions cannot hold too much data due to a secp256k1 locking error. By implementing this PR, optimistic rollup can submit larger blocks, allowing the witness field to contain more data. For more details, see [#608](https://github.com/nervosnetwork/godwoken/pull/608).


## Godwoken Internal Changes

> DApp developers are free to skip this part.
> 

This version of Godwoken introduces a new feature, the Ethereum address registry, which stores Ethereum addresses in Godwoken. When a user deposits tokens to create a new account, a corresponding Ethereum address is inserted into the contract. Godwoken will automatically map the Ethereum address and the new account. In addition, some RPCs have been adapted to support Ethereum addresses as parameters, and some Godwoken data structures have been modified to accommodate the new address format.

For more details about Godwoken internal changes, refer to: [docs/release-notes/v1-internal-CHANGES.md](https://github.com/nervosnetwork/godwoken/blob/72b6728e4315ab581282685cffe75cdbfe38670c/docs/release-notes/v1-internal-CHANGES.md).