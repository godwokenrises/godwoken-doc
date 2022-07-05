"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[2683],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return c}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),p=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),k=p(a),c=n,h=k["".concat(l,".").concat(c)]||k[c]||m[c]||o;return a?r.createElement(h,i(i({ref:e},d),{},{components:a})):r.createElement(h,i({ref:e},d))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=k;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6822:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return k}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=a(4996),s=["components"],l={id:"fastWithdrawal",title:"Deposit & Fast Withdrawal to Godwoken Version 1"},p=void 0,d={unversionedId:"fastWithdrawal",id:"version-1.2-rc1(WIP)/fastWithdrawal",title:"Deposit & Fast Withdrawal to Godwoken Version 1",description:"",source:"@site/versioned_docs/version-1.2-rc1(WIP)/fastWithdrawal.md",sourceDirName:".",slug:"/fastWithdrawal",permalink:"/fastWithdrawal",draft:!1,tags:[],version:"1.2-rc1(WIP)",frontMatter:{id:"fastWithdrawal",title:"Deposit & Fast Withdrawal to Godwoken Version 1"},sidebar:"sidebar2",previous:{title:"Introduction to Godwoken Bridge",permalink:"/bridgeIntro"},next:{title:"Extract a Privkey from MetaMask Wallet",permalink:"/extractPrivkey"}},m={},k=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deposit CKB from Nervos CKB to MetaMask",id:"deposit-ckb-from-nervos-ckb-to-metamask",level:2},{value:"Withdraw Assets from MetaMask to Nervos CKB",id:"withdraw-assets-from-metamask-to-nervos-ckb",level:2},{value:"Withdraw Assets from Godwoken V0 to Godwoken V1",id:"withdraw-assets-from-godwoken-v0-to-godwoken-v1",level:2},{value:"Reference",id:"reference",level:2}],c={toc:k};function h(t){var e=t.components,a=(0,n.Z)(t,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This tutorial shows how to deposit and withdraw funds from old Godwoken - version 0 - to the new network - version 1. If you don't have any funds on old network you should skip this article."))),(0,o.kt)("p",null,"This guide will show you how to do Fast Withdrawal, which takes minutes instead of days and transfer funds from old Layer 2 EVM Godwoken network to the new Godwoken."),(0,o.kt)("p",null,"If you wish to withdraw funds from Godwoken V0 to Nervos Layer 1 then it will be a slower process (days) due to Optimistic Rollup security architecture. "),(0,o.kt)("p",null,"In order to follow this tutorial, you must have already downloaded a web3 wallet, such as ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),", and have enough CKB or supported sUDT tokens in the wallet."),(0,o.kt)("p",null,"For more information about the concepts of CKB, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nervos.org/docs/basics/introduction"},"Nervos CKB"),"."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set up an account in MetaMask.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Connect ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.bridge.godwoken.io/#/v1/"},"Godwoken Bridge")," with the MetaMask wallet and switch the network to ",(0,o.kt)("strong",{parentName:"p"},"Godwoken Testnet v1.1"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Acquire CKB for your layer 1 wallet from ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.nervos.org/"},"CKB Testnet Faucet"),". The ",(0,o.kt)("strong",{parentName:"p"},"L1 Wallet address")," can be found on the Deposit page of Godwoken Bridge."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Note:")," A deposit or a withdrawal requires at least 400 CKB."))),(0,o.kt)("h2",{id:"deposit-ckb-from-nervos-ckb-to-metamask"},"Deposit CKB from Nervos CKB to MetaMask"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," The minimum amount of a deposit from Nervos CKB layer 1 to MetaMask is 400 CKB."),(0,o.kt)("p",null,"To deposit CKB from Nervos CKB to MetaMask:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If Godwoken Bridge is connected to Godwoken V0, select ",(0,o.kt)("strong",{parentName:"p"},"Godwoken V1")," from the drop-down menu on the top right of the page.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the Deposit page, enter the amount for the deposit, then click ",(0,o.kt)("strong",{parentName:"p"},"Deposit"),"."),(0,o.kt)("img",{src:(0,i.Z)("img/depo2lyr2.png"),width:"40%"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Press ",(0,o.kt)("strong",{parentName:"p"},"Sign")," to authorize the transaction on the MetaMask popup to complete the deposit. "),(0,o.kt)("img",{src:(0,i.Z)("img/depositsign.png"),width:"40%"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Refresh the page after a few minutes to check the changes in layer 1 and layer 2 account balances. "))),(0,o.kt)("h2",{id:"withdraw-assets-from-metamask-to-nervos-ckb"},"Withdraw Assets from MetaMask to Nervos CKB"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," The minimum amount of a withdrawal from MetaMask to Nervos CKB layer 1 is 400 CKB."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If Godwoken Bridge is connected to Godwoken V0, select ",(0,o.kt)("strong",{parentName:"p"},"Godwoken V1")," from the drop-down menu on the top right of the page.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the amount for the withdrawal on the Withdrawal page, then click ",(0,o.kt)("strong",{parentName:"p"},"Request Withdrawal"),"."),(0,o.kt)("img",{src:(0,i.Z)("img/withdrawalrequest01.png"),width:"40%"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Confirm")," to complete the transaction."),(0,o.kt)("img",{src:(0,i.Z)("img/withdrawalconfirm01.png"),width:"40%"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sign the withdrawal."),(0,o.kt)("img",{src:(0,i.Z)("img/withdrawalsign01.png"),width:"40%"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After successfully withdrawing assets, check the wallet to see the balance."))),(0,o.kt)("h2",{id:"withdraw-assets-from-godwoken-v0-to-godwoken-v1"},"Withdraw Assets from Godwoken V0 to Godwoken V1"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," The minimum amount of a withdrawal from Godwoken v0 to v1 is 650 CKB."),(0,o.kt)("p",null,"To withdraw assets from Godwoken v0 to Godwoken v1:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Godwoken V0")," from the drop-down menu on the top right of the page.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the Withdrawal page, choose ",(0,o.kt)("strong",{parentName:"p"},"GodWoken V1")," as the withdrawal destination. "),(0,o.kt)("img",{src:(0,i.Z)("img/V0-V1.png"),width:"40%"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the amount for the withdrawal and click ",(0,o.kt)("strong",{parentName:"p"},"Request Withdrawal"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Confirm")," to complete the transaction."),(0,o.kt)("img",{src:(0,i.Z)("img/withdrawalconfirm02.png"),width:"40%"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sign the withdrawal."),(0,o.kt)("img",{src:(0,i.Z)("img/withdrawalsign02.png"),width:"40%"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After successfully withdrawing assets, check the wallet to see the balance."),(0,o.kt)("img",{src:(0,i.Z)("img/withdrawBalance.png"),width:"40%"}))),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Resource"),(0,o.kt)("th",{parentName:"tr",align:null},"Link"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Godwoken Docs"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_submit_withdrawal_request"},"https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_submit_withdrawal_request"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Godwoken Demos"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/classicalliu/gw-demos"},"https://github.com/classicalliu/gw-demos"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Godwoken testnet config"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken-public/blob/master/testnet/config/scripts-deploy-result.json"},"https://github.com/nervosnetwork/godwoken-public/blob/master/testnet/config/scripts-deploy-result.json"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Polyjuice Provider"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/polyjuice-provider"},"https://github.com/nervosnetwork/polyjuice-provider"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Godwoken Web3"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken-web3#godwoken-web3-api"},"https://github.com/nervosnetwork/godwoken-web3#godwoken-web3-api"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Lumos Documentation"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/lumos"},"https://github.com/nervosnetwork/lumos"))))))}h.isMDXComponent=!0}}]);