---
id: sourcify
title: sourcify
---
import useBaseUrl from "@docusaurus/useBaseUrl";


### Hardhat Environment
After deploying a contract, it is possible to verify it using Sourcify.

*If using a version of Hardhat prior to v2.6.8, the following code must be added to `hardhat-config.js`:*
```Javascript
// hardhat-config.js
module.exports = {
    settings: {
        outputSelection: {
            "*": {
                "*": ["metadata"] // <--- add this
            }
        }
    }
}
```

For users on version v2.6.8 or later, the file with a .json extension can be found in the artifact/build-info folder. This file contains the Standard JSON Input-Output of the Solidity compiler for all contracts.

After locating this file, open [Sourcify](https://sourcify.dev/#/) to verify your contract using one of the two methods below:

### Method 1. [Import from contract](https://sourcify.dev/#/verifier)
- Verify the JSON file by dragging and dropping it into the file upload box and selecting "Import from contract".
  <img src={useBaseUrl("img/sourcify-drop.jpg")}  width="60%"/>
- If the JSON file is verified, the corresponding contracts will appear on the right-hand side. Select the main contract deployed at the address you want to verify.
  
  <img src={useBaseUrl("img/sourcify-contracts.jpg")}  width="60%"/>
- Input the address and chain and click "Verify".

### Method 2. [Contract Lookup](https://sourcify.dev/#/lookup)
- Input the address of the contract.
- Check the matching list for `Godwoken Mainnet(71402)` or `Godwoken testnet(71401)` depending on the network the contract was deployed on.

  <img src={useBaseUrl("img/sourcify-lookup.jpg")}  width="60%"/>
