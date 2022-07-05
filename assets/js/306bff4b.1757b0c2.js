"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[5534],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>c});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=d(o),c=n,u=k["".concat(s,".").concat(c)]||k[c]||m[c]||a;return o?r.createElement(u,i(i({ref:t},p),{},{components:o})):r.createElement(u,i({ref:t},p))}));function c(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<a;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}k.displayName="MDXCreateElement"},5075:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=o(7462),n=(o(7294),o(3905)),a=o(4996);const i={id:"liteGodwokenWithdraw",title:"Light Godwoken Tutorial"},l=void 0,s={unversionedId:"liteGodwokenWithdraw",id:"liteGodwokenWithdraw",title:"Light Godwoken Tutorial",description:"",source:"@site/docs/liteGodwokenWithdraw.md",sourceDirName:".",slug:"/liteGodwokenWithdraw",permalink:"/next/liteGodwokenWithdraw",draft:!1,tags:[],version:"current",frontMatter:{id:"liteGodwokenWithdraw",title:"Light Godwoken Tutorial"},sidebar:"sidebar2",previous:{title:"Light Godwoken",permalink:"/next/lightGodwoken"},next:{title:"Godwoken-kicker Command Line",permalink:"/next/commandUsage"}},d={},p=[{value:"Deposit CKB or Supported sUDT from Layer 1 to Layer 2 wallet",id:"deposit-ckb-or-supported-sudt-from-layer-1-to-layer-2-wallet",level:2},{value:"Withdraw Assets from Godwoken v0 to Godwoken v1",id:"withdraw-assets-from-godwoken-v0-to-godwoken-v1",level:2},{value:"Reference",id:"reference",level:2}],m={toc:p};function k(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This tutorial assumes users have already downloaded a web3 wallet, such as MetaMask, and that users have CKB or tokens in the wallet."),(0,n.kt)("p",null,"Visit ",(0,n.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," to download the wallet. For more information about the concepts of Godwoken and CKB, refer to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.nervos.org/docs/basics/introduction"},"Nervos CKB")," and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.godwoken.io"},"Godwoken"),". "),(0,n.kt)("h2",{id:"deposit-ckb-or-supported-sudt-from-layer-1-to-layer-2-wallet"},"Deposit CKB or Supported sUDT from Layer 1 to Layer 2 wallet"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the Godwoken Network manually to the MetaMask wallet.  "),(0,n.kt)("p",{parentName:"li"},"Godwoken v1 is currently in active development. For more information on Godwoken public networks, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-info"},"godwoken"),"."))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Bridge Your Own Assets"),(0,n.kt)("p",{parentName:"li"},"Login to the bridge with user's own MetaMask wallet, and connect to the Godwoken Network. "))),(0,n.kt)("img",{src:(0,a.Z)("img/liteGdwknCon1.jpg"),width:"40%"}),(0,n.kt)("img",{src:(0,a.Z)("img/liteGdwknCon2.jpg"),width:"40%"}),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Deposit CKB to Layer 2 Wallet"),(0,n.kt)("p",{parentName:"li"},"Entering the amount, then click ",(0,n.kt)("inlineCode",{parentName:"p"},"Deposit")," and sign to complete the transfer."))),(0,n.kt)("img",{src:(0,a.Z)("img/depo2lyr2.png"),width:"40%"}),(0,n.kt)("img",{src:(0,a.Z)("img/sign1.png"),width:"40%"}),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"Note:")," The minimum amount of deposit from Layer 1 to Layer 2 is 400 CKB."),(0,n.kt)("h2",{id:"withdraw-assets-from-godwoken-v0-to-godwoken-v1"},"Withdraw Assets from Godwoken v0 to Godwoken v1"),(0,n.kt)("p",null,"In the ",(0,n.kt)("a",{parentName:"p",href:"https://testnet.bridge.godwoken.io/#/v0"},"Godwoken Bridge Withdrawal UI"),", choose the destination that you want to move the assets into, then click ",(0,n.kt)("inlineCode",{parentName:"p"},"Request Withdrawal")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Confirm")," to complete the transaction. "),(0,n.kt)("img",{src:(0,a.Z)("img/withdrawV0-v1.png"),width:"40%"}),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"Note:")," Withdrawing assets from Layer 0 to Layer 1 has a withdrawal period of at least 5 days, which means that the user will have to wait at least 5 days until receiving the assets."),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Resource"),(0,n.kt)("th",{parentName:"tr",align:null},"Link"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Godwoken Docs"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_submit_withdrawal_request"},"https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_submit_withdrawal_request"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Godwoken Demos"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/classicalliu/gw-demos"},"https://github.com/classicalliu/gw-demos"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Godwoken testnet config"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken-public/blob/master/testnet/config/scripts-deploy-result.json"},"https://github.com/nervosnetwork/godwoken-public/blob/master/testnet/config/scripts-deploy-result.json"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Polyjuice Provider"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/polyjuice-provider"},"https://github.com/nervosnetwork/polyjuice-provider"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Godwoken Web3"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken-web3#godwoken-web3-api"},"https://github.com/nervosnetwork/godwoken-web3#godwoken-web3-api"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Lumos Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/lumos"},"https://github.com/nervosnetwork/lumos"))))))}k.isMDXComponent=!0}}]);