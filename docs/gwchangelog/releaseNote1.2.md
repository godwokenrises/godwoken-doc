---
id: releaseNote1.2
title: Godwoken V1.2 Release Note
---
import useBaseUrl from "@docusaurus/useBaseUrl";

The following release notes cover the most recent and major changes in Godwoken v1.2. You can also see all release notes in the [Godwoken Changlog](https://github.com/nervosnetwork/godwoken/blob/develop/CHANGELOG.md). 

> Godwoken v1 is not an upgrade on the existing chain but is being deployed as a new vhain with tools to help users and developers migrate to the new chain.  Developers can use Godwoken v1 to switch networks to Godwoken in the same way as they use other EVM-compatible chains.
> 

The changes to Godwoken v1.2 include:

- Refresh readonly mem-pool when receives new mem-block. [#721](https://github.com/nervosnetwork/godwoken/pull/721)
    - Fixed the inconsistent state of the ReadOnly node by ceasing the reset in the MemPool#reset function.
    - ReadOnly node will clean up the mem-pool state when a new mem-block is received from the fullnode.
    - Fixed filter_withdrawals to prevent removing subsequent withdrawals from the same sender.

- Fixed the rejection of transactions that have less gas than intrinsic gas，and added intrinsic gas check feature to Godwoken. [#725](https://github.com/nervosnetwork/godwoken/pull/725)

- Support packaging failed transactions into layer2 block. [#684](https://github.com/nervosnetwork/godwoken/pull/684)
    - Fixed some issues caused by the behaviour of packaging only successful transactions.
    - Introduced a backward compatibility approach to solve some compatibility issues. If a transaction failed (returned a non-zero exit code), the written state of the transaction gets reverted, the sender's nonce increases by 1 , and the transaction fee gets paid to the block producer.
    - Charges PolyjuiceTx the CKB amount of gas_used * gas_price. A charge of args.fee would be made for other transactions.

- Support upgrade backend executable binaries. [#713](https://github.com/nervosnetwork/godwoken/pull/713)
    - Defined `backend_switch` in `config.toml` instead of defining `backends`.
    
    ```rust
    pub struct BackendSwitchConfig {
        pub switch_height: u64, # means at which height the new version of backend is used.
        pub backends: Vec<BackendConfig>,
    }
    ```
    
- Support for the new options in the config file: `max_txs`, `max_deposits` and `max_withdrawals`. These options regulate the max number of each items in a block. [#714](https://github.com/nervosnetwork/godwoken/pull/714)

- Added the return of committed info on the withdrawal query RPC. [#706](https://github.com/nervosnetwork/godwoken/pull/706)
