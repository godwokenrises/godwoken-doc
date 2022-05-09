---
id: commandUsage
title: Godwoken-kicker Command Line
---
import useBaseUrl from "@docusaurus/useBaseUrl";


Before running any Godwoken-kicker commands, it is useful to recap some conventions in all commands. Godwoken-kicker has a bunch of commands available for use, and the list of all possible commands can be viewed by running:

```bash
$ ./kicker --help
```

Deploy the local network and print service info:

```bash
$ ./kicker start
$ ./kicker info
```

Deposit 1000 CKBs from layer1 to layer2:

```bash
$ ./kicker deposit 0x618cc3C660cEBFDbA8570CA739b1744AE3E2553a 1000
$ ./kicker get-balance 0x618cc3C660cEBFDbA8570CA739b1744AE3E2553a
```

Redeploy the local network:

```bash
$ ./kicker stop
$ sudo ./kicker clean
$ ./kicker start
```

Execute docker-compose commands:

```bash
$ ./kicker -- exec ckb ls -l
$ ./kicker -- top godwoken
$ ./kicker -- kill godwoken
$ ./kicker -- --help
```

Available Commands:

```bash
./kicker --help
Usage: ./kicker [OPTIONS] <SUBCOMMAND>

OPTIONS:
  --help          Print usage information
  -- <args>...    Execute docker-compose command

SUBCOMMANDS:
  init                    Init running environment
  start                   Start services and deploy local network
  stop                    Stop services
  info                    Print some useful info about the network and running services, such as Web3 RPC URL
  clean                   Clean containers volumed data
  ps [service]            List services
  logs [service]          Tail target service's logs
  enter <service>         Enter target service's container
  manual-build            Manually build services artifacts
  deposit <eth-address> <amount>  Deposit CKB to layer2
  get-balance <eth-address>       Get layer2 balance
```
