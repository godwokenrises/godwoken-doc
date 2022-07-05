"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[4340],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(p,".").concat(u)]||m[u]||s[u]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));n(4996);const o={id:"deployContractHardhat",title:"Deploy a Simple Contract with Hardhat"},i=void 0,l={unversionedId:"deployContractHardhat",id:"version-1.1/deployContractHardhat",title:"Deploy a Simple Contract with Hardhat",description:"",source:"@site/versioned_docs/version-1.1/deployContractHardhat.md",sourceDirName:".",slug:"/deployContractHardhat",permalink:"/1.1/deployContractHardhat",draft:!1,tags:[],version:"1.1",frontMatter:{id:"deployContractHardhat",title:"Deploy a Simple Contract with Hardhat"}},p={},c=[{value:"Environment",id:"environment",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2}],d={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this guide you will take a very basic smart contract written in Ethereum's Solidity, compile it to EVM bytecode, and deploy it to Godwoken on Layer 2."),(0,r.kt)("h2",{id:"environment"},"Environment"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ubuntu 20.04 LTS")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Godwoken network is available for connection."),(0,r.kt)("li",{parentName:"ul"},"npm is installed.")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the source of Hardhat.  "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone --depth=1 https://github.com/NomicFoundation/hardhat\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Prepare a simple hardhat project."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ mv hardhat/packages/hardhat-core/sample-projects/basic .\n$ cd basic/\n$ ls\ncontracts  hardhat.config.js  LICENSE.md  README.md  scripts  test\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install requirements."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init --yes\n$ npm install --save-dev hardhat @nomiclabs/hardhat-waffle chai\n$ npx hardhat --version\n2.9.3\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the configuration of a Godwoken network to ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat.config.js"),". "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note"),": The Godwoken network can be a local network or public network. "),(0,r.kt)("p",{parentName:"li"},"The following example includes the configuration of a local Godwoken network in the ",(0,r.kt)("inlineCode",{parentName:"p"},"networks")," section of the ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat.config.js"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n\n  networks: {\n    gw_devnet_v1: {\n      url: `http://127.0.0.1:8024`,\n      accounts: [`0x9d5bc55413c14cf4ce360a6051eacdc0e580100a0d3f7f2f48f63623f6b05361`],\n    }\n  },\n\n  ...\n}\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8024"),"\xa0is the Web3 URL of the local Godwoken network, which can be checked by the command line ",(0,r.kt)("inlineCode",{parentName:"p"},"./kicker info"),"  while deploying the local Godwoken network. For more information about deploying a local Godwoken network, see ",(0,r.kt)("a",{parentName:"p",href:"deployLocalNetwork"},"Deploy a Local Network with Godwoken-Kicker"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"0x9d5bc55413c14cf4ce360a6051eacdc0e580100a0d3f7f2f48f63623f6b05361"),"\xa0is the private key used for demonstration in the example. Replace the key with your own key when deploying a simple contract with Hardhat.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run hardhat on the local Godwoken network."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx hardhat accounts --network gw_devnet_v1\n0xCD1d13450cFA630728D0390C99957C6948BF7d19\n\n$ npx hardhat compile\nCompiled 2 Solidity files successfully\n\n$ npx hardhat test --network gw_devnet_v1\nGreeter\n    \u2714 Should return the new greeting once it's changed (4376ms)\n\n\n  1 passing (4s)\n\n$ npx hardhat run --network gw_devnet_v1 scripts/sample-script.js\nGreeter deployed to: 0x61acD6135A5F1d7046132EB43D59e0FC1264214d\n")))))}s.isMDXComponent=!0}}]);