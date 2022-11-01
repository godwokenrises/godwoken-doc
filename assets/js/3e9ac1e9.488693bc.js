"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[8904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),k=o,h=d["".concat(p,".").concat(k)]||d[k]||u[k]||a;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));n(4996);const a={id:"web3Change1.7",title:"Godwoken Web3 V1.7 Release Note"},l=void 0,i={unversionedId:"web3changelog/web3Change1.7",id:"web3changelog/web3Change1.7",title:"Godwoken Web3 V1.7 Release Note",description:"Godwoken Web3 is a Ethereum-compatibility RPC layer on Godwoken. Godwoken Web3 is being continually updated. The following content covers the most recent changes in Godwoken Web3 v1.7. For the full release notes refer to Godwoken Web3 Releases.",source:"@site/docs/web3changelog/web3Change1.7.md",sourceDirName:"web3changelog",slug:"/web3changelog/web3Change1.7",permalink:"/web3changelog/web3Change1.7",draft:!1,tags:[],version:"current",frontMatter:{id:"web3Change1.7",title:"Godwoken Web3 V1.7 Release Note"},sidebar:"sidebar2",previous:{title:"Godwoken V1.6 Release Note",permalink:"/gwchangelog/releaseNote1.6"},next:{title:"Covalent",permalink:"/covalent"}},p={},s=[{value:"Feat",id:"feat",level:2},{value:"Fixed",id:"fixed",level:2},{value:"Other",id:"other",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3"},"Godwoken Web3")," is a Ethereum-compatibility RPC layer on Godwoken. Godwoken Web3 is being continually updated. The following content covers the most recent changes in Godwoken Web3 v1.7. For the full release notes refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/releases"},"Godwoken Web3 Releases"),"."),(0,o.kt)("p",null,"The latest update to Godwoken Web3 v1.7 includes the following changes:"),(0,o.kt)("h2",{id:"feat"},"Feat"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Support native transfer in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/pull/505"},"#505")),(0,o.kt)("p",{parentName:"li"},"Added support for native token transfers. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"feat: Support non eip155 tx in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/pull/490"},"#490"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"feat: add poly_getHealthStatus api and health-check script in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/pull/497"},"#497"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"feat: Restart worker if exit with error code in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/pull/513"},"#513")))),(0,o.kt)("h2",{id:"fixed"},"Fixed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"fix: declare StorageKey as HexNumber type in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/pull/510"},"#510"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"fix: method not found in ws api in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/pull/493"},"#493")))),(0,o.kt)("h2",{id:"other"},"Other"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"refactor: use global redis client in cacheStore in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/pull/491"},"#491"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"refactor: reuse tx hash convert fn in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/godwokenrises/godwoken-web3/pull/489"},"#489")))))}u.isMDXComponent=!0}}]);