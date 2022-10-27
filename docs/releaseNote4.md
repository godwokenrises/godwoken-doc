---
id: releaseNote4
title: Godwoken V1.4 Release Note
---
import useBaseUrl from "@docusaurus/useBaseUrl";


Currently, Godwoken is updated on a regular basis to provide new features and updates. The following release notes covers the most recent changes in Godwoken v1.4. You can check the full release notes in the [Godwoken Changlog](https://github.com/godwokenrises/godwoken/blob/develop/CHANGELOG.md).

The latest update to Godwoken v1.4 includes the following changes:

#### Added

- automatically create account for undeposited sender in [#710](https://github.com/godwokenrises/godwoken/pull/710)
- export and import block commands in [#754](https://github.com/godwokenrises/godwoken/pull/754)

     - export-block subcommand
      ```
      godwoken export-block -c config.toml --output-path ./blocks_testnet_v1
      ```

     - import-block subcommand
      ```
      godwoken import-block -c config.toml --source-path ./block_testnet_v1
      ```
#### Fixed

- always refresh pending deposit cells in [#753](https://github.com/godwokenrises/godwoken/pull/753)
- Add new argument finality-blocks to gw-tools stat-custodian-ckb … in [#757](https://github.com/godwokenrises/godwoken/pull/757)
- block-producer exit during bad block challenge by in [#755](https://github.com/godwokenrises/godwoken/pull/755)
- Update parse log in [#752](https://github.com/godwokenrises/godwoken/pull/752)
- fix(rpc): calculate tx signature hash using packed bytes by in [#760](https://github.com/godwokenrises/godwoken/pull/760)
- fix(withdrawal unlocker): unhandle tx status unknown and rejected by in [#763](https://github.com/godwokenrises/godwoken/pull/763)
- fix(config): removed block producer wallet config requirement for readonly node in [#768](https://github.com/godwokenrises/godwoken/pull/768)
- hotfix(rpc server): submit withdrawal missing data for submit_tx in [#770](https://github.com/godwokenrises/godwoken/pull/770)

#### Others

- Redirect syscall debug logs by in [#758](https://github.com/godwokenrises/godwoken/pull/758)
