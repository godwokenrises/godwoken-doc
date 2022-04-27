---
id: decentralizationRoadmap
title: Decentralization Roadmap
---
import useBaseUrl from "@docusaurus/useBaseUrl";

Godwoken has a solid roadmap to incrementally evolve the Godwoken network from semi-decentralization to full decentralization.

- **Stage 1 (initial launch)**: The entire network comes with a sequencer to sort transactions. Developers can run their own Godwoken nodes in read-only mode and watch the on-chain rollup transactions to calculate and verify the rollup global state.
- **Stage 2**: Introduce the permissionless challenger node, so everyone can run their Godwoken node in challenger mode. If the sequencer commits an invalid state, a challenge will be automatically processed by a random Godwoken node, depending on which node sends the challenge first. If the challenge has succeeded, the sequencer will lose the collateral asset on the layer 1 and the rollup's state will be reverted.
- **Stage 3**: Introduce the permissionless full nodes. Multiple sequencer mechanisms will be investigated and explored.
