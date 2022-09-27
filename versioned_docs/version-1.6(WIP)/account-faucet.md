---
id: account-faucet
title: Account-Faucet 
---

import useBaseUrl from "@docusaurus/useBaseUrl";

Account-Faucet is a CLI tool for claiming faucets for Godwoken layer-2 accounts. Previously, to claim faucets, you must first visit the [Faucet](https://faucet.nervos.org) page, enter your CKB account address, then go to the [Godwoken Bridge](https://testnet.bridge.godwoken.io/) page and deposit those CKBs into your Godwoken layer-2 account. 

With the Account-Faucet CLI tool, you can complete these two moves in one-step by simply having your `ETH address` and your `CKB private key` ready. The following will show you how to use this CLI tool. Before that, please install [Godwoken-Tests](https://github.com/nervosnetwork/godwoken-tests) in your local environment.

## Install Godwoken-Tests

- Enter the command-line below to install Godwoken-Tests in your local environment, and navigate to the `godwoken-tests` folder.

    ```jsx
    $ git clone https://github.com/nervosnetwork/godwoken-tests
    $ cd godwoken-tests
    ```

- Then, go to the `account-faucet` folder located in the `scripts` directory, install the dependencies, and setup the tool.

    ```jsx
    $ cd scripts/account-faucet
    $ npm install && npm run build
    ```

## Claim Faucets for Layer-2 Account

You can claim faucets directly to your layer-2 account by executing the `claim-l2` command. This command will calculate your `L2 deposit address` and then automatically claim faucets for that address, saving you from extra fees or time that might be incurred by operating manually.

### Claim Faucets with ETH Address

Use `-e` or `--eth-address` to claim faucets for your layer-2 account.

```
# direct to ~/godwoken-tests/scripts/account-faucet
$ account-faucet claim-l2 --eth-address <ETH_ADDRESS> # replace it with your eth address
```

### Claim Faucets with Privkeys

Use `-p` or `--private-key` to claim faucets for your layer-2 account when you only have a private key.

```jsx
# direct to ~/godwoken-tests/scripts/account-faucet
$ account-faucet claim-l2 --private-key <PRIVATE_KEY> # replace it with your privkey
```

### Claim Faucets in Different Networks

You can use the account-faucet CLI tool to claim faucets in the different networks it supports. Networks currently supported are:

- testnet_v1
- alphanet_v1

Use `-n` or `--network` to claim faucets in different networks.

```jsx
# direct to ~/godwoken-tests/scripts/account-faucet
$ account-faucet claim-l2 --private-key <PRIVATE_KEY> --network <NETWORK>
```

## Claim Faucets for Layer-1 Account

You can claim faucets for your layer-1 account by executing the `claim-l1` command. This command will automatically claim faucets for your layer-1 account with your **privkeys** or **ckb addresses**.

### Claim Faucets with Privkeys

Use `-p` or `--private-key` to claim faucets for your layer-1 account.

```jsx
# direct to ~/godwoken-tests/scripts/account-faucet
$ account-faucet claim-l1 -p <PRIVATE_KEY>
```

### Claim Faucets with CKB Address

Use `-c`  or `--ckb-address` to claim for your layer-1 account.

```jsx
# direct to ~/godwoken-tests/scripts/account-faucet
$ account-faucet claim-l1 -c <CKB_ADDRESS>
```

### Claim Faucets in Different Networks

Use `-n` or `--network` to claim faucets in different networks. 

```jsx
# direct to ~/godwoken-tests/scripts/account-faucet
$ account-faucet claim-l1 --private-key <PRIVATE_KEY> --network <NETWORK>
```

Networks currently supported are:

- testnet_v1
- alphanet_v1

## Obtain Layer-2 Deposit Address

A **Layer-2 Deposit Address** is a CKB address. When you transfer your capacity to this particular address,  Godwoken will take that away and then give you that capacity on layer-2. The process of transferring capacity to a Layer-2 deposit address is referred to as **Deposit**. 

To get this **Layer-2 Deposit Address**, you can use the command `get-l2-address`, which calculates the **Layer-2 Deposit Address** of your account. Similar to the claim faucet commands above, you can get this address with an ETH address or a privkey. 

### Obtain Layer-2 Deposit Address with ETH Address

Use `-e` or `--eth-address` to get the address.

```jsx
$ account-faucet get-l2-address --eth-address <ETH_ADDRESS>
```

### Obtain Layer-2 Deposit Address with Privkey

Use `-p` or `--private-key` to get the address.

```jsx
$ account-faucet get-l2-address --private-key <PRIVATE_KEY>
```

### Obtain Layer-2 Deposit Address in Different Networks

Use `-n` or `--network` to get the address in different networks. 

```jsx
$ account-faucet get-l2-address --eth-address <ETH_ADDRESS> --network <NETWORK>
```