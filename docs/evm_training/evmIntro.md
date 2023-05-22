---
id: evmIntro
title: Thinking in Nervos Layer2
---
import useBaseUrl from "@docusaurus/useBaseUrl";

## Introduction to this tutorial

Welcome to the Nervos' Layer 2 EVM (Ethereum Virtual Machine) Training! Here you will get an introduction to the Nervos ecosystem, learn about the various important concepts, and gain hands-on experience with the platform in preparation for deploying real-world applications.

## About the Training Tasks and Compatibility

To accomplish these goals, we have put together a set of tasks to guide you through the learning process. Each task will tell you what needs to be accomplished, and direct you to all the necessary tooling and informative materials you will need to do the job.

:::note

In this training, you'll learn how to:

- [Quick start with TestNet](/evm_training/evmTask1.md)

- [Deploy a Simple Ethereum Smart Contract on Godwoken](/evm_training/evmTask2.md)

- [Invoking Deployed Smart Contracts - Interacting with Existing Contracts](/evm_training/evmTask3.md)

- ~~[Use Force Bridge to Deposit Tokens from Ethereum](/evm_training/evmTask4.md)~~

- [Migrating an existing contract to Godwoken](/evm_training/evmTask5.md)

- ~~[Withdraw From Layer 2 Back to Layer 1](/evm_training/evmTask6.md)~~

:::

## Layer 2 and Solidity

Nervos has the ability to support compatibility with multiple different kinds of smart contract platforms, but this first set of tasks  is explicitly geared towards the Ethereum ecosystem. Nervos is a [multi-layer blockchain](structure.md#layer-1-layer-2) platform, and support for smart contract languages like Solidity is handled by an Ethereum EVM compatible [Layer 2](structure.md#layer-1-layer-2). If you're coming from a background in Ethereum, or you have worked with the Solidity smart contract programming language in the past, you should feel right at home once you pickup the basics of how the tooling works on Nervos.

## Interoperability in the Nervos Ecosystem

One of Nervos' cornerstone features is interoperability with other blockchain platforms. This is the ability for tokens and assets from other blockchains to be transferred to and from Nervos, as well as between the different layers that comprise the Nervos ecosystem. Any dApp that is developed on Nervos will immediately benefit from the infrastructure that has been put in place to interact with other blockchain platforms. This gives developers a seamless way to access a global network of users across all major blockchain platforms without having to modify their dApp for each new blockchain platform they want to support.

## Benefits for dApp Developers

All of this is made possible by the extreme flexibility of the underlying Nervos platform, which gives developers a superior level of control that cannot be found anywhere else. Nervos is so flexible that third-party wallets, such as the popular [MetaMask wallet](wallets.md#metamask), can be used to interact with Nervos without requiring the user to install any additional software. The process is so seamless that users from other blockchains might not even realize they are using Nervos!

## Current State and Future of Nervos Ecosystem

The Nervos ecosystem is still growing, and several pieces of infrastructure are currently in active development. Not everything is ready to be used today. In our tasks, we will guide you through the pieces that are available for testing now and will be ready for a production environment soon. This will give you the opportunity to get a head start on familiarizing yourself with how EVM dApps are built on Nervos. Once the infrastructure is ready, you'll be first in line to release your dApp to the users of Nervos and to the users of any blockchain platform connected to Nervos.


## Getting Assistance and Closing Notes

If you get stuck on any of the tasks, feel free to [create an issue on GitHub](https://github.com/godwokenrises/godwoken/issues/new/choose). We'll be available to help you work through any problems you may have. Good luck!
