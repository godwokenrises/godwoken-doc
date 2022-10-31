"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[4935],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1990:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));r(4996);const o={id:"oracles",title:"Oracles"},l=void 0,i={unversionedId:"oracles",id:"oracles",title:"Oracles",description:"Band",source:"@site/docs/oracles.md",sourceDirName:".",slug:"/oracles",permalink:"/oracles",draft:!1,tags:[],version:"current",frontMatter:{id:"oracles",title:"Oracles"},sidebar:"sidebar2",previous:{title:"Covalent",permalink:"/covalent"},next:{title:"Other Tools",permalink:"/otherTools"}},c={},p=[{value:"Band",id:"band",level:2},{value:"Mainnet",id:"mainnet",level:3},{value:"Testnet",id:"testnet",level:3}],s={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"band"},"Band"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.bandchain.org/band-standard-dataset/supported-blockchains.html"},"Official documentation")),(0,a.kt)("p",null,"Update frequency: updated every 1 hour with 1% deviation for stable coin / 5% deviation for non-stable coin."),(0,a.kt)("p",null,"Supported assets:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"ADA/USD"),(0,a.kt)("li",{parentName:"ol"},"BAND/USD"),(0,a.kt)("li",{parentName:"ol"},"BAT/USD"),(0,a.kt)("li",{parentName:"ol"},"BNB/USD"),(0,a.kt)("li",{parentName:"ol"},"BTC/USD"),(0,a.kt)("li",{parentName:"ol"},"BUSD/USD"),(0,a.kt)("li",{parentName:"ol"},"CKB/USD"),(0,a.kt)("li",{parentName:"ol"},"DAI/USD"),(0,a.kt)("li",{parentName:"ol"},"ETH/USD"),(0,a.kt)("li",{parentName:"ol"},"MKR/USD"),(0,a.kt)("li",{parentName:"ol"},"SUSHI/USD"),(0,a.kt)("li",{parentName:"ol"},"TUSD/USD"),(0,a.kt)("li",{parentName:"ol"},"UNI/USD"),(0,a.kt)("li",{parentName:"ol"},"USDC/USD"),(0,a.kt)("li",{parentName:"ol"},"USDT/USD"),(0,a.kt)("li",{parentName:"ol"},"YFI/USD")),(0,a.kt)("h3",{id:"mainnet"},"Mainnet"),(0,a.kt)("p",null,"Oracle: ",(0,a.kt)("a",{parentName:"p",href:"https://gw-mainnet-explorer.nervosdao.community/address/0xDA7a001b254CD22e46d3eAB04d937489c93174C3"},"0xda7a001b254cd22e46d3eab04d937489c93174c3")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},'Code and ABI can be found in "Code" section of the verified smart contract.')),(0,a.kt)("h3",{id:"testnet"},"Testnet"),(0,a.kt)("p",null,"Oracle: ",(0,a.kt)("a",{parentName:"p",href:"https://gw-explorer.nervosdao.community/address/0x0c2362c9A0586Dd7295549C65a4A5e3aFE10a88A"},"0x0c2362c9a0586dd7295549c65a4a5e3afe10a88a")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},'Code and ABI can be found in "Code" section of the verified smart contract.')))}d.isMDXComponent=!0}}]);