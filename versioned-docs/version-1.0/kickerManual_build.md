---
id: kickerManual_build
title: Godwoken-kicker Manual-Build Mode
---

Godwoken-Kicker supports manual-build mode [using multiple Docker Compose files](https://runnable.com/docker/advanced-docker-compose-configuration). Manual build mode is meant for advanced developers who want to customize the Docker Compose service, such as replacing pre-built artifacts with custom ones, and who are already familiar with Godwoken-kicker. Review the [kicker](https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/kicker) script in detail before starting to use the manual build mode.

## Environment

- Ubuntu 20.04 LTS

### Prerequisites

- Docker
- Docker Compose ≥ 1.29.0

## Steps

1. Clone the source of Godwoken-kicker, skip if installed.

```
$ git clone -b compatibility-changes https://github.com/RetricSu/godwoken-kicker
```

2. In[`docker/docker-compose.yml`](https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/docker/docker-compose.yml) , define a basic "godwoken" service that runs on a pre-built image. To locate the binary for godwoken, navigate to /usr/bin/godwoken.

```
godwoken:
  image: ghcr.io/flouse/godwoken-prebuilds:v1.0.x-202203160423
  environment:
    RUST_LOG: info,gw_generator=debug
    GODWOKEN_MODE: fullnode
    RUST_BACKTRACE: full
  volumes:
    - ./layer2:/var/lib/layer2
  ports:
    - 8119:8119
    - 8120:8120
  command: [ "godwoken", "run", "-c", "/var/lib/layer2/config/godwoken-config.toml" ]
```

3. Build the godwoken binary manually and place it in `docker/manual-artifacts/godwoken`

```
MANUAL_BUILD_GODWOKEN=true \
GODWOKEN_GIT_URL=ssh://git@github.com/nervosnetwork/godwoken \
GODWOKEN_GIT_CHECKOUT=compatibility-breaking-changes \
./kicker manual-build
```

The binary can be built using Godwoken-kicker command line `. /kicker manual-build` or users can build the binary on their own, just make sure the binary is placed in docker/manual-artifacts/.

4. Replace the prebuild godwoken and gw-tools with manual-build in the file `[docker/manual-godwoken.compose.yml](https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/docker/manual-godwoken.compose.yml)`

```
services:
  godwoken:
    volumes:
      # Volume our manual-build godwoken to
      # `/usr/bin/godwoken` inside container
      - ./manual-artifacts/godwoken:/usr/bin/godwoken
```

5. Launch the Godwoken service with manual-build artifacts

```
MANUAL_BUILD_GODWOKEN=true ./kicker start # Starts all services
MANUAL_BUILD_GODWOKEN=true ./kicker start godwoken # Starts only a single godwoken service
```

For more details on manual-build mode of Godwoken-kicker, refer to [manual-build mode](https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/docs/manual-build.md), and [the example of a one-click launch readonly node](https://github.com/nervosnetwork/godwoken-info/tree/info/testnet_v1).
