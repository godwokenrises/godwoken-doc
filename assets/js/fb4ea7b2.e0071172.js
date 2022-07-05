"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[4361],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(n),k=o,u=m["".concat(l,".").concat(k)]||m[k]||c[k]||a;return n?r.createElement(u,p(p({ref:t},d),{},{components:n})):r.createElement(u,p({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));n(4996);const a={id:"deployEthDapp",title:"Deploy Ethereum DApps to Godwoken"},p=void 0,i={unversionedId:"deployEthDapp",id:"version-1.2-rc1(WIP)/deployEthDapp",title:"Deploy Ethereum DApps to Godwoken",description:"",source:"@site/versioned_docs/version-1.2-rc1(WIP)/deployEthDapp.md",sourceDirName:".",slug:"/deployEthDapp",permalink:"/deployEthDapp",draft:!1,tags:[],version:"1.2-rc1(WIP)",frontMatter:{id:"deployEthDapp",title:"Deploy Ethereum DApps to Godwoken"}},l={},s=[{value:"Workflow",id:"workflow",level:2},{value:"RPC Documentation for Reference",id:"rpc-documentation-for-reference",level:2},{value:"An Example of Deploying an Ethereum DApp to Godwoken by Godwoken-Kicker",id:"an-example-of-deploying-an-ethereum-dapp-to-godwoken-by-godwoken-kicker",level:2},{value:"Environment",id:"environment",level:3},{value:"Prerequisite Development Software",id:"prerequisite-development-software",level:3},{value:"Prerequisite Wallet Software",id:"prerequisite-wallet-software",level:3},{value:"Steps",id:"steps",level:3},{value:"Project Examples",id:"project-examples",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"workflow"},"Workflow"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set up the environment.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose Godwoken testnet or mainnet network, or deploy a local Godwoken network."),(0,o.kt)("p",{parentName:"li"},"For more information about Godwoken networks, see ",(0,o.kt)("a",{parentName:"p",href:"#godwoken-networks"},"Godwoken Networks"),"."),(0,o.kt)("p",{parentName:"li"},"For more information about deploying a Godwoken network, see the sections under Deployment.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deploy an Ethereum DApp to Godwoken."))),(0,o.kt)("h2",{id:"rpc-documentation-for-reference"},"RPC Documentation for Reference"),(0,o.kt)("p",null,"Godwoken provides a web3 RPC compatible layer."),(0,o.kt)("p",null,"For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-web3"},"Ethereum RPC (web3 RPC)"),"."),(0,o.kt)("h2",{id:"an-example-of-deploying-an-ethereum-dapp-to-godwoken-by-godwoken-kicker"},"An Example of Deploying an Ethereum DApp to Godwoken by Godwoken-Kicker"),(0,o.kt)("h3",{id:"environment"},"Environment"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ubuntu 20.04")),(0,o.kt)("h3",{id:"prerequisite-development-software"},"Prerequisite Development Software"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node.js v14"),(0,o.kt)("li",{parentName:"ul"},"Yarn "),(0,o.kt)("li",{parentName:"ul"},"Docker"),(0,o.kt)("li",{parentName:"ul"},"Docker-compose"),(0,o.kt)("li",{parentName:"ul"},"Rust")),(0,o.kt)("h3",{id:"prerequisite-wallet-software"},"Prerequisite Wallet Software"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"MetaMask")),(0,o.kt)("h3",{id:"steps"},"Steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone an existing ETH DApp."),(0,o.kt)("p",{parentName:"li"},"Create a relative directory, if needed, then enter the directory and clone the repository . "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ mkdir -p ~/projects\n$ cd ~/projects\n$ git clone https://github.com/TTNguyenDev/Dapps-Support-ForceBridge -b starter\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the ETH DApp.\nInstall the dependencies and  build the smart contracts. Start Ganache to run a local Ethereum development chain."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ cd ~/projects/Dapps-Support-ForceBridge\n$ yarn && yarn build && yarn start:ganache\n")),(0,o.kt)("p",{parentName:"li"},"Open another terminal and start the UI server. "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ cd ~/projects/Dapps-Support-ForceBridge\n$ yarn ui\n")),(0,o.kt)("p",{parentName:"li"},"Open a browser tab to http://localhost:3000 to view the DApp after the server started. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set up Godwoken Testnet in MetaMask."),(0,o.kt)("p",{parentName:"li"},"Set up the Metamask extension in browser and the custom RPC with the following information:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"Network Name: Godwoken Testnet\nNew RPC URL: http://godwoken-testnet-web3-rpc.ckbapp.dev/\nChain ID: 71393\nCurrency Symbol (optional): N/A\nBlock Explorer URL (optional): N/A\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install Polyjuice dependencies."),(0,o.kt)("p",{parentName:"li"},"To port the Ethereum application with Nervos' Layer 2, the first step is to install the dependencies that are necessary for Godwoken and Polyjuice to work with. "),(0,o.kt)("p",{parentName:"li"},"Two dependencies need to be added to allow the existing web3 DApp to work with the second tier solution Polyjuice: ",(0,o.kt)("inlineCode",{parentName:"p"},"@polyjuice-provider/web3")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"nervos-godwoken-integration"),"."),(0,o.kt)("p",{parentName:"li"},"@polyjuice-provider/web3 is a custom Polyjuice web3 provider used to replace the web3 library, necessary to interact with the Nervos Layer 2 smart contract. Nervos-godwoken-integration is a tool that can generate Polyjuice addresses based on Ethereum addresses."),(0,o.kt)("p",{parentName:"li"},"Use the following commands to install both:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ cd ~/projects/Dapps-Support-ForceBridge\n$ yarn add @polyjuice-provider/web3@0.0.1-rc7 nervos-godwoken-integration@0.0.6\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add and configure the web3 provider for the Polyjuice web3 provider."),(0,o.kt)("p",{parentName:"li"},"Create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"config.ts")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"src"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ cd ~/projects/Dapps-Support-ForceBridge/src\n$ touch config.ts\n")),(0,o.kt)("p",{parentName:"li"},"Then fill it with the values presented:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"export const CONFIG = {\nWEB3_PROVIDER_URL: 'https://godwoken-testnet-web3-rpc.ckbapp.dev'\nROLLUP_TYPE_HASH: '0x4cc2e6526204ae6a2e8fcf12f7ad472f41a1606d5b9624beebd215d780809f6a'\nETH_ACCOUNT_LOCK_CODE_HASH: '0xdeec13a7b8e100579541384ccaf4b5223733e4a5483c3aec95ddc4c1d5ea5b22'\n}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the UI file.\nUpdate the main UI in the file ",(0,o.kt)("inlineCode",{parentName:"p"},"~/projects/blockchain-workshop-ethereum-simple/src/ui/app.tsx"),". Add the following lines in the main dependency importation section of the file:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"import { PolyjuiceHttpProvider } from '@polyjuice-provider/web3';\n\nimport { AddressTranslator } from 'nervos-godwoken-integration';\n\nimport { CONFIG } from '../config';\n")),(0,o.kt)("p",{parentName:"li"},"Find and replace line."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"const web3 = new Web3((window as any).ethereum);\n")),(0,o.kt)("p",{parentName:"li"}," to"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"const godwokenRpcUrl = CONFIG.WEB3_PROVIDER_URL;\nconst providerConfig = {\nrollupTypeHash: CONFIG.ROLLUP_TYPE_HASH,\nethAccountLockCodeHash: CONFIG.ETH_ACCOUNT_LOCK_CODE_HASH,\nweb3Url: godwokenRpcUrl\n};\nconst provider = new PolyjuiceHttpProvider(godwokenRpcUrl, providerConfig);\nconst web3 = new Web3(provider);\n")),(0,o.kt)("p",{parentName:"li"},"Add a new constant and include the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook to display the Polyjuice address to the user:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"const [polyjuiceAddress, setPolyjuiceAddress] = useState<string | undefined>();\n\nuseEffect(() => {\n    if (accounts-.[0]) {\n        const addressTranslator = new AddressTranslator();\n        setPolyjuiceAddress(addressTranslator.ethAddressToGodwokenShortAddress(accounts-.[0]));\n    } else {\n        setPolyjuiceAddress(undefined);\n    }\n}, [accounts-.[0]]);\n")),(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook will execute when ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts-[0]")," changes. "),(0,o.kt)("p",{parentName:"li"},"Add a new line to the html code to display Polyjuice Address:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"<br />\nYour Polyjuice address: <b>{polyjuiceAddress || ' - '}</b>\n<br />\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set gas limit higher."),(0,o.kt)("p",{parentName:"li"},"Godwoken Testnet requires a higher gas limit to be set for transactions."),(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"TTNguyenToken.ts ")," file under the path ",(0,o.kt)("inlineCode",{parentName:"p"},"~/projects/Dapps-Support-ForceBridge/src/lib/contracts")," and add a new constant at the beginning of the file:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"const DEFAULT_SEND_OPTIONS = {\n    gas: 6000000\n};\n")),(0,o.kt)("p",{parentName:"li"},"Modify 2 functions from:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"async setTransferToken(fromAddress: string, toAddress: string, amount: number) {\n        const tx = await this.contract.methods\n            .transfer(toAddress, this.web3.utils.toWei(this.web3.utils.toBN(amount)))\n            .send({\n                from: fromAddress\n            });\n\n        return tx;\n    }\n    \n      async deploy(fromAddress: string) {\n        const deployTx = await (this.contract\n            .deploy({\n                data: TTNguyenTokenJSON.bytecode,\n                arguments: []\n            })\n            .send({\n                from: fromAddress,\n                to: '0x0000000000000000000000000000000000000000'\n            } as any) as any);\n\n        this.useDeployed(deployTx.contractAddress);\n\n        return deployTx.transactionHash;\n    }\n")),(0,o.kt)("p",{parentName:"li"},"to:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"async setTransferToken(fromAddress: string, toAddress: string, amount: number) {\n        const tx = await this.contract.methods\n            .transfer(toAddress, this.web3.utils.toWei(this.web3.utils.toBN(amount)))\n            .send({\n                ...DEFAULT_SEND_OPTIONS,\n                from: fromAddress\n            });\n\n        return tx;\n    }\n    \n      async deploy(fromAddress: string) {\n        const deployTx = await (this.contract\n            .deploy({\n                data: TTNguyenTokenJSON.bytecode,\n                arguments: []\n            })\n            .send({\n                ...DEFAULT_SEND_OPTIONS,\n                from: fromAddress,\n                to: '0x0000000000000000000000000000000000000000'\n            } as any) as any);\n\n        this.useDeployed(deployTx.contractAddress);\n\n        return deployTx.transactionHash;\n    }\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run and test the DApp"),(0,o.kt)("p",{parentName:"li"},"Input the following command to run the app once all the configs for Godwoken have been completed."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ yarn ui\n")),(0,o.kt)("p",{parentName:"li"},"Open the browser and navigate to http://localhost:3000/."))),(0,o.kt)("h2",{id:"project-examples"},"Project Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/TTNguyenDev/Hackathon-Nervos/tree/main/task_12#document-porting-an-existing-ethereum-dapp-to-polyjuice"},"Porting an Existing Ethereum DApp to Polyjuice"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/Kuzirashi/blockchain-workshop/tree/godwoken-simple"},"godwoken-simple"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/Kuzirashi/blockchain-workshop/tree/godwoken-simple-js"},"godwoken-simple-js"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/YokaiSwap"},"YokaiSwap")))))}c.isMDXComponent=!0}}]);