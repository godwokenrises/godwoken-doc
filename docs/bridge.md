---
id: deposit & withdrawal
content:  description of deposit / withdrawal
---
## How to Deposit & Wirhdraw CKB on Godwoken

For deposit and withdrawal operations on Godwoken, two options are available:
1. Using an UI deposit/withdraw provided by [yokaiswap](https://testnet.yokaiswap.com/bridge/deposit) to perform the relevant actions.
2. Using `gw-tools` deposit/withdraw to perform the relevant actions.

### Using GW-tools for Operations

Use `--help` to view the available commands.

```shell
cargo run --bin gw-tools -- deposit-ckb --help
```

<details>
<summary>Click to view detailed output</summary>

```
gw-tools-deposit-ckb
Deposit CKB to godwoken

USAGE:
	 gw-tools deposit-ckb [OPTIONS] --capacity <capaciry> --config-path <config-path>  --privkey-path <privkey-path>  --scripts-deployment-path <scripts-deployment-path>

FLAGS:
	 -h, --help		Prints help informaiton
	 -V, --version	Prints version information

OPTIONS:
	 -c, --capacity <capacity>		CKB capacity to deposit
	 	 --ckb-rpc <ckb-rpc-url>	CKB jsonrpc rpc sever URL [default: http://127.0.0.1:8114]

	 -o, --config-path <config-path>	The config.homl file path
	 -e, --eth-address <eth-address>	Target eth address, calculated by private key in default
	 -f, --fee <fee>					Transaction fee, default to 0.0001 CKB [default: 0.0001]
	 -g, --godwoken-rpc-url <godwoken-rpc-url>Godwoken jsonrpc rpc sever URL [default: http://127.0.0.1:8119]

	 -k, --privkey-path <privkey-path>	The private key file path
	 	 --scripts-deployment-path <scripts-deployment-path>	The scripts deployment results json file path

```
</details>

