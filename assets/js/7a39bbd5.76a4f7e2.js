"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[6018],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1364:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));r(4996);const a={id:"releaseNote",title:"Godwoken V1.1 Release Note"},i=void 0,l={unversionedId:"releaseNote",id:"version-1.3-rc1(WIP)/releaseNote",title:"Godwoken V1.1 Release Note",description:"",source:"@site/versioned_docs/version-1.3-rc1(WIP)/releaseNote.md",sourceDirName:".",slug:"/releaseNote",permalink:"/releaseNote",draft:!1,tags:[],version:"1.3-rc1(WIP)",frontMatter:{id:"releaseNote",title:"Godwoken V1.1 Release Note"},sidebar:"sidebar2",previous:{title:"Godwoken V1.2 Release Note",permalink:"/releaseNote2"},next:{title:"Differences Between v0 and v1",permalink:"/v0difv1"}},s={},p=[{value:"Ethereum Compatibility Improvements",id:"ethereum-compatibility-improvements",level:2},{value:"Other Improvements",id:"other-improvements",level:2},{value:"Godwoken Internal Changes",id:"godwoken-internal-changes",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This release note includes the new features and major updates in Godwoken v1.1."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Godwoken v1 is not an upgrade on the existing chain! Instead, v1 will be deployed as a new chain with tools to help users and developers migrate to the new chain."),(0,o.kt)("p",{parentName:"blockquote"},"Developers can use Godwoken v1 in the same way they use other Ethereum-compatible chains, by switching the network to Godwoken. ")),(0,o.kt)("h2",{id:"ethereum-compatibility-improvements"},"Ethereum Compatibility Improvements"),(0,o.kt)("p",null,"In the new version, compatibility improvements for Godwoken include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provide API level compatibility and remove the web3-provider plugin."),(0,o.kt)("li",{parentName:"ul"},"Support native ETH addresses in API and EVM, removing the concept of Godwoken addresses."),(0,o.kt)("li",{parentName:"ul"},"Support Ethereum signature format and EIP-712. Users can view the transaction before signing, rather than signing a random 32-byte message. For more details, see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/561"},"#561"),"."),(0,o.kt)("li",{parentName:"ul"},"Fix total provisioning interface for sUDT ERC-20 proxy contracts. For more details, see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/560"},"#560"),"."),(0,o.kt)("li",{parentName:"ul"},"Support interactions with Ethereum addresses that have not yet been registered with Godwoken."),(0,o.kt)("li",{parentName:"ul"},"Unify layer 2 fungible token representation as unit256."),(0,o.kt)("li",{parentName:"ul"},"Change layer 2 CKB decimal from 8 to 18, improve compatibility between MetaMask and native CKB. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/675"},"#675")),(0,o.kt)("li",{parentName:"ul"},"Remove the polyjuice-provider web3 plugin.")),(0,o.kt)("h2",{id:"other-improvements"},"Other Improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support p2p mem-pool syncing, further PRs to enable fully decentralized syncing, but this PR is a good starting. For more details, see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/642"},"#642"),"."),(0,o.kt)("li",{parentName:"ul"},"perf: optimize molecule usage.\xa0For more details, see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/640"},"#640"),"."),(0,o.kt)("li",{parentName:"ul"},"perf: use BTreeSet in FeeQueue.\xa0For more details, see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/641"},"#641"),"."),(0,o.kt)("li",{parentName:"ul"},"Change the lock of rollup cells to Omnilock. The witness field of CKB transactions cannot hold too much data due to a secp256k1 locking error. By implementing this PR, optimistic rollup can submit larger blocks, allowing the witness field to contain more data. For more details, see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/godwoken/pull/608"},"#608"),".")),(0,o.kt)("h2",{id:"godwoken-internal-changes"},"Godwoken Internal Changes"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"DApp developers are free to skip this part.")),(0,o.kt)("p",null,"This version of Godwoken introduces a new feature, the Ethereum address registry, which stores Ethereum addresses in Godwoken. When a user deposits tokens to create a new account, a corresponding Ethereum address is inserted into the contract. Godwoken will automatically map the Ethereum address and the new account. In addition, some RPCs have been adapted to support Ethereum addresses as parameters, and some Godwoken data structures have been modified to accommodate the new address format."),(0,o.kt)("p",null,"For more details about Godwoken internal changes, refer to:\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/72b6728e4315ab581282685cffe75cdbfe38670c/docs/release-notes/v1-internal-CHANGES.md"},"docs/release-notes/v1-internal-CHANGES.md"),"."))}u.isMDXComponent=!0}}]);