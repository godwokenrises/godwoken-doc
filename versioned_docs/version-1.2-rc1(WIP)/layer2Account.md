---
id: layer2Account
title: Layer 2 Account in Godwoken
---

import useBaseUrl from "@docusaurus/useBaseUrl";

Godwoken v1 introduced the registry and registry address, both of which can be seen as alias mechanisms for layer 2 accounts. 

A layer 2 account can be referenced by an ID or by a script (usually a hash of a script). However, in some environments, it is also required to access an account by an alias. For example, in the EVM environment, there is no such thing as a Godwoken ID or script. Therefore, access to an account can only be made through an ETH address.

In this case, a registry is an account. Alias mappings are stored in the key-value storage of the registry account. The registry address is encoded as follows:

```
(registry ID 4 bytes) | (alias address length 4 bytes) | (alias address n bytes)

```

In Godwoken, every layer 2 account is a tuple of `(ID, L1 script)` concept. The `ID` is an auto-incrementing number, and the `L1 script` is the CKB core data structure unique as to each layer 2 account. `script` , i.e. the CKB core data structure is defined as follows:

```bash
/* https://github.com/nervosnetwork/ckb/blob/develop/util/types/schemas/blockchain.mol */
table Script {
    code_hash:      Byte32,
    hash_type:      byte,
    args:           Bytes,
}

```

This structure indicates the script that will be loaded when validating an L1 transaction. And, Godwoken re-used this structure on layer 2, in which:

- `code_hash - code_hash` indicates the executable binary used for verifying the layer 2 transaction. If a layer 2 account represents an EVM contract, the `script.code_hash` of that account will point to the binary file that can verify the EVM transaction.
- `hash_type - hash_type` shapes the way CKB loads the script binary, which is fixed to `HashType::Type` in the layer 2 account.
- `args - args` is used to set the script initial args. The first 32 bytes are set to `rollup_script_hash` in Godwoken to distinguish between accounts from different rollups.

An account on layer 2 is an EOA or a contract is determined by the `code_hash` of that account. If the script assumes the account is a receiver of transactions invariably, then the account is a contract. If the script assumes the account is the sender of a transaction, then the account is an EOA. Code in the script is expected to perform some contract logic checks or signature checks based on the assumptions.

Currently Godwoken v1 has implemented one registry, the ETH registry. For accounts created by deposit, an ETH address alias will be created automatically.