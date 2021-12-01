---
id: decentralizationRoadmap
title: Decentralization Roadmap
---
import useBaseUrl from "@docusaurus/useBaseUrl";

We provide a solid roadmap to evolve the Godwoken network step by step from semi-decentralization to fully decentralization.

- **Stage 1 (initial launch)**: The whole network has one sequencer to sort transactions. Developers can run their own Godwoken nodes in the readonly mode and watch the on-chain rollup transactions to compute and verify the rollup global state.

- **Stage 2**: The network will introduce permissionless challenger node, everyone can run their Godwoken nodes in challenger mode. If the sequencer commits an invalid state, then, a challenge will be automatically processed by a random Godwoken node. It depends on which node sends the challenge first. If the challenge has successed, the sequencer will lose the staked assets on layer1 and the rollup's state will be reverted.

- **Stage 3**: The network will introduce permissionless full nodes. The multiple sequencer mechanism will be investigated and explored.
