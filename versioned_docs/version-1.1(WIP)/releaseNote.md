---
id: releaseNote
title: Godwoken Release Notes
---
import useBaseUrl from "@docusaurus/useBaseUrl";

This release note includes the new features and major updates in Godwoken v1.1.

> Note that Godwoken v1 is not an upgrade on the existing chain! Instead, v1 will be deployed as a new chain with tools to help users and developers migrate to the new chain.
> 

## Ethereum Compatiblility Improvements

In the new version, compatibility improvements for Godwoken include:

- Unify layer 2 fungible token represatation as unit256.
- Change layer 2 ckb decimal from 8 to 18, improve compatibility between metamask and native ckb. [#675](https://github.com/nervosnetwork/godwoken/pull/675)

Developers can use Godwoken v1 the same way they use other ethereum-compatible chains, requiring only switching the network to Godwoken. With v1, the polyjuice-provider web3 plugin was removed.
 

## Godwoken internal changes

> Dapp developers are free to skip this part.
> 

v1 adds a new concept in having the Ethereum address registry stores Ethereum addresses in Godwoken. Once user deposits a new account, Godwoken will create a mapping between the Ethereum address and the account. In addition, some RPCs have been adapted to support Ethereum addresses as parameters, and some Godwoken data structures have been adapted to support the new address format.

More details about Godwoken internal changes refer to: [docs/release-notes/v1-internal-CHANGES.md](https://github.com/nervosnetwork/godwoken/blob/72b6728e4315ab581282685cffe75cdbfe38670c/docs/release-notes/v1-internal-CHANGES.md).