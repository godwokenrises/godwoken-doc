"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[6059],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return a?o.createElement(k,r(r({ref:t},c),{},{components:a})):o.createElement(k,r({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var d=2;d<l;d++)r[d]=a[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4040:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var o=a(7462),n=(a(7294),a(3905));a(4996);const l={id:"claimFaucet",title:"Claim assets on testnet v1"},r=void 0,i={unversionedId:"claimFaucet",id:"claimFaucet",title:"Claim assets on testnet v1",description:"Overview",source:"@site/docs/claimFaucet.md",sourceDirName:".",slug:"/claimFaucet",permalink:"/claimFaucet",draft:!1,tags:[],version:"current",frontMatter:{id:"claimFaucet",title:"Claim assets on testnet v1"},sidebar:"sidebar2",previous:{title:"6. Withdraw From Layer 2 Back to Layer 1",permalink:"/evm_training/evmTask6"},next:{title:"Deposit & Fast Withdrawal to Godwoken v1",permalink:"/fastWithdrawal"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Obtain your layer1/layer2 address",id:"obtain-your-layer1layer2-address",level:2},{value:"Claim Layer1 assets",id:"claim-layer1-assets",level:2},{value:"Claim CKB",id:"claim-ckb",level:3},{value:"Claim layer1 tokens",id:"claim-layer1-tokens",level:3},{value:"Claim Layer2 assets",id:"claim-layer2-assets",level:2},{value:"Claim pCKB",id:"claim-pckb",level:3},{value:"Bridge tokens from Goerli to Godwoken",id:"bridge-tokens-from-goerli-to-godwoken",level:2},{value:"Claim Goerli assets",id:"claim-goerli-assets",level:3},{value:"Bridge Goerli assets to Godwoken",id:"bridge-goerli-assets-to-godwoken",level:3},{value:"Claim CKB via Account-Faucet CLI",id:"claim-ckb-via-account-faucet-cli",level:2}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"If you want to test the functionality of Godwoken on testnet, but you don't have any asset available, you can follow this tutorial to claim assets to your testnet accounts."),(0,n.kt)("p",null,"In this section, you will learn how to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Obtain your layer1/layer2 address"),(0,n.kt)("li",{parentName:"ul"},"Claim layer1/layer2 assets"),(0,n.kt)("li",{parentName:"ul"},"Bridge assets from Goerli to Godwoken"),(0,n.kt)("li",{parentName:"ul"},"Claim CKB via Account-Faucet CLI")),(0,n.kt)("h2",{id:"obtain-your-layer1layer2-address"},"Obtain your layer1/layer2 address"),(0,n.kt)("p",null,"As a first step, you need to know what your layer1/layer2 addresses are, so then you can claim faucet to them."),(0,n.kt)("p",null,"Godwoken Bridge is an asset bridge to help us transfer assets between layer1 and layer2, it also provides a clean UI for you to check your layer1/layer2 addresses. You can follow these steps to connect to Godwoken Bridge:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open ",(0,n.kt)("a",{parentName:"li",href:"https://testnet.bridge.godwoken.io/"},"Godwoken Bridge (testnet)")),(0,n.kt)("li",{parentName:"ol"},"Click \u201cConnect\u201d button on the page to connect")),(0,n.kt)("p",null,"Once you have connected to Godwoken Bridge, your layer1/layer2 addresses and balances should appear on the page. Now let\u2019s see what these fields on the page mean:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"L1 Wallet Address")),(0,n.kt)("td",{parentName:"tr",align:null},"Your layer1 address, this is a CKB omni-lock address, you should use this address when claiming for layer1 assets")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"L1 Deposit Address")),(0,n.kt)("td",{parentName:"tr",align:null},"Your layer1 deposit address, you can transfer specific amount of capacity/sUDT to this address, and Godwoken will collect them to your layer2 account")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Ethereum Address")),(0,n.kt)("td",{parentName:"tr",align:null},"Your layer2 address, you should use this address when claiming for Goerli assets, or when you make actions on Ethereum networks")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"L1 Balance")),(0,n.kt)("td",{parentName:"tr",align:null},"Your layer1 balance, it means how much CKB your ",(0,n.kt)("inlineCode",{parentName:"td"},"L1 Wallet Address")," has on CKB layer1, you can deposit your ",(0,n.kt)("inlineCode",{parentName:"td"},"L1 Balance")," to layer2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"L2 Balance")),(0,n.kt)("td",{parentName:"tr",align:null},"Your layer2 balance, it means how much pCKB your ",(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"Ethereum Address"))," has on Godwoken layer2, you can withdraw your ",(0,n.kt)("inlineCode",{parentName:"td"},"L2 Balance")," to layer1")))),(0,n.kt)("p",null,"If you\u2019re new to Godwoken, it\u2019s normal that your ",(0,n.kt)("inlineCode",{parentName:"p"},"L1 Balance")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"L2 Balance")," are both ",(0,n.kt)("inlineCode",{parentName:"p"},"0"),". You can follow the tutorials below to claim free assets to your layer1/layer2 accounts. "),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"For more details on Godwoken Bridge, please visit: ",(0,n.kt)("a",{parentName:"p",href:"/fastWithdrawal"},"Deposit & Fast Withdrawal to Godwoken v1"),"."))),(0,n.kt)("h2",{id:"claim-layer1-assets"},"Claim Layer1 assets"),(0,n.kt)("h3",{id:"claim-ckb"},"Claim CKB"),(0,n.kt)("p",null,"On the CKB layer1 testnet, you can claim CKB using the Nervos Faucet, an official faucet site provided by Nervos. On Nervos Faucet, each layer1 address can claim 10,000 CKB once every 24 hours."),(0,n.kt)("p",null,"Follow these steps to claim CKB to your layer1 account:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Copy your ",(0,n.kt)("inlineCode",{parentName:"li"},"L1 Wallet Address")," on ",(0,n.kt)("a",{parentName:"li",href:"https://testnet.bridge.godwoken.io/"},"Godwoken Bridge (testnet)")),(0,n.kt)("li",{parentName:"ol"},"Open ",(0,n.kt)("a",{parentName:"li",href:"https://faucet.nervos.org/"},"Nervos Faucet")),(0,n.kt)("li",{parentName:"ol"},"Paste ",(0,n.kt)("inlineCode",{parentName:"li"},"L1 Wallet Address")," in the page input"),(0,n.kt)("li",{parentName:"ol"},"Click \u201cClaim\u201d button next to the page input")),(0,n.kt)("p",null,"Usually you should wait for a minute for the process to complete."),(0,n.kt)("p",null,"If you like to check the status of your faucet records, there\u2019s a \u201cSearch Address\u201d filter input on the page, you can paste your ",(0,n.kt)("inlineCode",{parentName:"p"},"L1 Wallet Address")," in the input, and then click \u201cEnter\u201d on your keyboard to search for claim records of your layer1 address."),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Nervos Faucet accepts all kinds of valid CKB address, so you can actually claim pCKB to your layer2 account directly. For this part of tutorial, please visit this part of content: ",(0,n.kt)("a",{parentName:"p",href:"#claim-pckb"},"Claim pCKB"),"."))),(0,n.kt)("h3",{id:"claim-layer1-tokens"},"Claim layer1 tokens"),(0,n.kt)("p",null,"TTKN is a sUDT (Simple User Defined Tokens) on Testnet of CKB layer1, if you want to test the functionality of depositing sUDT from layer1 to layer2, you can claim TTKN on Godwoken Bridge for free."),(0,n.kt)("p",null,"You can claim TTKN by following these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open and connect to ",(0,n.kt)("a",{parentName:"li",href:"https://testnet.bridge.godwoken.io/"},"Godwoken Bridge (testnet)")),(0,n.kt)("li",{parentName:"ol"},"Click the menu button on the header of page"),(0,n.kt)("li",{parentName:"ol"},"Click \u201cGet 1,000 Test Token(TTKN) on L1\u201d button")),(0,n.kt)("p",null,"When it\u2019s done, you should be able to see your TTKN layer1 balance on the deposit page of Godwoken Bridge."),(0,n.kt)("h2",{id:"claim-layer2-assets"},"Claim Layer2 assets"),(0,n.kt)("h3",{id:"claim-pckb"},"Claim pCKB"),(0,n.kt)("p",null,"If you want to claim pCKB to your layer2 account, there are two recommended methods."),(0,n.kt)("p",null,"The first method is if you only need a small amount of pCKB, you can visit ",(0,n.kt)("a",{parentName:"p",href:"https://faucet.godwoken.com/"},"Godwoken Testnet pCKB Faucet"),", and then click the \u201crequest 10 pCKB from faucet\u201d button to claim 10 pCKB to your layer2 account, on the way it will ask you to connect to your wallet, you should just follow the instructions and the whole process will complete soon."),(0,n.kt)("p",null,"However, if you want to claim a large amount of pCKB, the second method is more recommended: use ",(0,n.kt)("a",{parentName:"p",href:"https://faucet.nervos.org/"},"Nervos Faucet"),", the official faucet site provided by Nervos. "),(0,n.kt)("p",null,"On Nervos Faucet, each layer1 address can claim 10,000 CKB once every 24 hours. Although Nervos Faucet only provides free CKB, but you can claim funds to your ",(0,n.kt)("inlineCode",{parentName:"p"},"L1 Deposit Address"),", which is different from claiming to your ",(0,n.kt)("inlineCode",{parentName:"p"},"L1 Wallet Address"),"."),(0,n.kt)("p",null,"You can follow the below steps to try it out:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Copy your ",(0,n.kt)("inlineCode",{parentName:"li"},"L1 Deposit Address")," on ",(0,n.kt)("a",{parentName:"li",href:"https://testnet.bridge.godwoken.io/"},"Godwoken Bridge (testnet)")),(0,n.kt)("li",{parentName:"ol"},"Open ",(0,n.kt)("a",{parentName:"li",href:"https://faucet.nervos.org/"},"Nervos Faucet")),(0,n.kt)("li",{parentName:"ol"},"Paste ",(0,n.kt)("inlineCode",{parentName:"li"},"L1 Deposit Address")," in the page input"),(0,n.kt)("li",{parentName:"ol"},"Click \u201cClaim\u201d button next to the page input to claim")),(0,n.kt)("p",null,"After all above steps are completed, Godwoken will find the CKB cell that Nervos Faucet just sent you, and convert it into your layer2 account. So in conclusion, the CKB cell Nervos Faucet transfers to your ",(0,n.kt)("inlineCode",{parentName:"p"},"L1 Deposit Address")," is a deposit cell. "),(0,n.kt)("p",null,"How Godwoken deposit works with Nervos Faucet:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"You request to claim CKB for your ",(0,n.kt)("inlineCode",{parentName:"li"},"L1 Deposit Address")),(0,n.kt)("li",{parentName:"ol"},"Nervos Faucet transfers 10,000 CKB to your ",(0,n.kt)("inlineCode",{parentName:"li"},"L1 Deposit Address")," as a deposit transaction"),(0,n.kt)("li",{parentName:"ol"},"Godwoken finds the deposit transaction on layer1, and takes the 10,000 CKB away"),(0,n.kt)("li",{parentName:"ol"},"Godwoken transfers 10,000 pCKB to your ",(0,n.kt)("inlineCode",{parentName:"li"},"Ethereum Address")," on layer2")),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"If you like to learn more about the rules and procedures of depositing assets, please check this section for more detailed instructions: ",(0,n.kt)("a",{parentName:"p",href:"/fastWithdrawal"},"Deposit & Fast Withdrawal to Godwoken v1"),"."))),(0,n.kt)("h2",{id:"bridge-tokens-from-goerli-to-godwoken"},"Bridge tokens from Goerli to Godwoken"),(0,n.kt)("h3",{id:"claim-goerli-assets"},"Claim Goerli assets"),(0,n.kt)("p",null,"Unfortunately, right now there\u2019s no official method for claiming assets on layer2 directly. However, you can claim assets on Goerli network and then bridge them to Godwoken. First thing we need to do is to claim some ETH and tokens on Goerli."),(0,n.kt)("p",null,"Let\u2019s claim some Goerli ETH funds:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Copy your ",(0,n.kt)("inlineCode",{parentName:"li"},"Ethereum Address")," on ",(0,n.kt)("a",{parentName:"li",href:"https://testnet.bridge.godwoken.io/"},"Godwoken Bridge (testnet)")),(0,n.kt)("li",{parentName:"ol"},"Open ",(0,n.kt)("a",{parentName:"li",href:"https://goerlifaucet.com/"},"Goerli Faucet")),(0,n.kt)("li",{parentName:"ol"},"Paste ",(0,n.kt)("inlineCode",{parentName:"li"},"Ethereum Address")," in the input then claim some ETH")),(0,n.kt)("p",null,"And then, we should claim some Goerli tokens:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open ",(0,n.kt)("a",{parentName:"li",href:"https://faucet-eth-goerli.ckbapp.dev/"},"Gliaswap Faucet")),(0,n.kt)("li",{parentName:"ol"},"Select a token you like, then paste ",(0,n.kt)("inlineCode",{parentName:"li"},"Ethereum Address")," in the input"),(0,n.kt)("li",{parentName:"ol"},"Click the \u201cClaim\u201d button to claim that token to your Goerli account")),(0,n.kt)("p",null,"When it\u2019s all done, you should have enough ETH and tokens in your Goerli ETH account."),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"We need to claim Goerli tokens before we can bridge them to Godwoken, that\u2019s fine but why do we need to claim Goerli ETH? The reason is we need to pay Gas Fee with Goerli ETH when bridging assets in the next move."))),(0,n.kt)("h3",{id:"bridge-goerli-assets-to-godwoken"},"Bridge Goerli assets to Godwoken"),(0,n.kt)("p",null,"When you have a sufficient amount of ETH and tokens in on Goerli network, you can start to bridge them to Godwoken. The whole process will take some steps, and the simplified version of the process is like this:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Bridge assets from Goerli testnet to CKB layer1"),(0,n.kt)("li",{parentName:"ol"},"Deposit assets from CKB layer1 to Godwoken layer2")),(0,n.kt)("p",null,"If you\u2019re ready, let\u2019s follow the detailed steps of bridging your Goerli assets to Godwoken."),(0,n.kt)("p",null,"First step, let\u2019s bridge assets from Goerli testnet to CKB layer1:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Copy your ",(0,n.kt)("inlineCode",{parentName:"li"},"L1 Wallet Address")," on ",(0,n.kt)("a",{parentName:"li",href:"https://testnet.bridge.godwoken.io/"},"Godwoken Bridge (testnet)")),(0,n.kt)("li",{parentName:"ol"},"Open ",(0,n.kt)("a",{parentName:"li",href:"https://testnet.forcebridge.com/bridge/Ethereum/Nervos"},"Force Bridge")),(0,n.kt)("li",{parentName:"ol"},"Select an asset you\u2019d like to bridge, then input the amount you want to bridge"),(0,n.kt)("li",{parentName:"ol"},"Paste ",(0,n.kt)("inlineCode",{parentName:"li"},"L1 Wallet Address")," in the \u201cRecipient\u201d input"),(0,n.kt)("li",{parentName:"ol"},"Click \u201cApprove\u201d button to allow Force Bridge to bridge the selected asset"),(0,n.kt)("li",{parentName:"ol"},"When the approval is completed, click \u201cBridge\u201d button to bridge the selected asset to CKB layer1")),(0,n.kt)("p",null,"When the above process is completed, you should be able to see the bridged assets on Godwoken Bridge. Now you can deposit the bridged assets from CKB layer1 to Godwoken layer2, by following the below steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the deposit page of ",(0,n.kt)("a",{parentName:"li",href:"https://testnet.bridge.godwoken.io/"},"Godwoken Bridge (testnet)")),(0,n.kt)("li",{parentName:"ol"},"Enter the amount of deposit CKB in the \u201cDeposit\u201d input"),(0,n.kt)("li",{parentName:"ol"},"Click \u201cSelect Token\u201d and then select the bridge asset"),(0,n.kt)("li",{parentName:"ol"},"Enter the amount of deposit token in the \u201csUDT (optional)\u201d input"),(0,n.kt)("li",{parentName:"ol"},"Click \u201cDeposit\u201d button to deposit the bridge asset to Godwoken layer2")),(0,n.kt)("p",null,"Congratulations, the whole process of bridging Goerli assets to Godwoken is complete. When the above process is all done, you should be able to see your layer2 assets\u2019 balance in the withdrawal page of Godwoken Bridge."),(0,n.kt)("h2",{id:"claim-ckb-via-account-faucet-cli"},"Claim CKB via Account-Faucet CLI"),(0,n.kt)("p",null,"If you are tired of claiming faucet on Nervos Faucet every day, or if you have a lot of accounts that need to claim faucet, maybe you should try out ",(0,n.kt)("inlineCode",{parentName:"p"},"Account-Faucet"),", a command-line tool that can help you claim CKB on layer1/layer2, but easier."),(0,n.kt)("p",null,"For detailed instructions, please visit: ",(0,n.kt)("a",{parentName:"p",href:"/account-faucet"},"Account-Faucet"),"."))}p.isMDXComponent=!0}}]);