---
id: evmPrep
title: Setup and Requirements
---
import useBaseUrl from "@docusaurus/useBaseUrl";

## Supported Architectures

The tooling currently supports the Intel-compatible x86\_64 architecture and ARM (e.g. M1 Macs).

## Supported Environments

The following operating systems are officially supported. Other operating systems may also be compatible, but have not officially been tested for compatibility by our teams.

* [Ubuntu Linux 20.04](https://ubuntu.com) (Desktop or Server edition)
* [MacOS](https://www.apple.com/macos/) (Big Sur 11.0+)
* [Windows 10](https://www.microsoft.com/en-us/windows) + [WSL2](https://docs.microsoft.com/en-us/windows/wsl/about) (Ubuntu 20.04 virtualized)
* [Windows 10](https://www.microsoft.com/en-us/windows) + [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/overview)

> Note: Throughout most of our demos and walkthroughs, Ubuntu Linux 20.04 is used. This is the preferred platform by most developers.

## Prerequisite Development Software

* Build Tools
* Curl
* 7zip (optional)
* Unzip (optional)
* Git
* Node.js 16.13.x (LTS)
* Python 2.7.x
* Yarn
* Docker

## Prerequisite Wallet Software

* [MetaMask](https://metamask.io/download.html)

## Setup Instructions

### Ubuntu 20.04 (Native or Windows 10 + WSL2)

#### Build Tools + Git + Curl + 7zip + Unzip

```
$ sudo apt install build-essential git curl p7zip-full unzip
```

#### Node.js

The default version of Node.js included with Ubuntu 20.04 is v10.19.0, and this is not sufficient.

**For these tasks, version 16.13.x is needed. Versions lower than this may not work.** This can be installed using NVM (Node Version Manager), or the normal Node.js installation instructions. We recommend using NVM because it allows you to change between any version of Node.js quickly.

* [NVM Install](https://github.com/nvm-sh/nvm#installing-and-updating)
* [Node.js Install](https://github.com/nodesource/distributions/blob/master/README.md#debinstall)

#### Python 2.7.x

Ubuntu 20.04 ships with Python 3.8.x installed, but Python 2.7.x is still available for compatibility with old tooling using the `python` package.

```
$ sudo apt install python
```

#### Yarn

Yarn can easily be installed using NPM once Node.js is installed.

```
$ npm i -g yarn
```

#### Docker

Docker will be used for running the Solidity compiler to compile smart contracts. You can find information on how to install it on the official [Docker website](https://docs.docker.com/get-docker/). If you're using Windows + Windows Subsystem For Linux it will be the easiest if you download and install the official "Docker for Windows" desktop application. It makes using Docker easy thanks to the graphical interface.

> Note: The current user must have permission to manage Docker instances. [How to manage Docker as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/).

### MacOS (10.13+)

#### Build Tools + Git

Download and install the Xcode Command Line Tools from [developer.apple.com](https://developer.apple.com/library/archive/technotes/tn2339/).

#### Curl

Curl should be installed by default on recent versions of macOS.

#### 7zip

There are several decompressors available for macOS that can handle 7z files. Still, we recommend `p7zip` since it will be fully compatible with our scripts. This can be installed using [Homebrew](https://formulae.brew.sh/formula/p7zip).

#### Node.js

Node.js can be installed on macOS using NVM, or the Node.js installer. **For these tasks, version 16.13.x is needed. Versions lower than this may not work.**

* [NVM Install](https://github.com/nvm-sh/nvm#installing-and-updating)
* [Node.js Installer](https://nodejs.org/en/download/)

#### Python 2.7.x

To install Python 2.7.x on macOS, please visit the official Python [download](https://www.python.org/downloads/release/python-2718/) page.

#### Yarn

Yarn can easily be installed using NPM once Node.js is installed.

```
$ npm i -g yarn
```

#### Docker

Docker will be used for running the Solidity compiler to compile smart contracts. You can find information on how to install it from the official [Docker website](https://docs.docker.com/get-docker/).

> Note: The current user must have permission to manage Docker instances. [How to manage Docker as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/).

### Windows 10 + PowerShell

1. [node-gyp dependencies](https://github.com/nodejs/node-gyp#on-windows)
2. Docker or [Docker Desktop](https://docs.docker.com/desktop/windows/install/)

## Checking Your Node.js and Yarn Versions

One of the most common causes of errors is having the incorrect version of Node.js or Yarn. These tasks specifically require Node.js v16.x.x, and a recent version of Yarn. You can check these versions using the commands below:

```
$ node -v
v16.13.0
$ yarn -v
1.22.11
```