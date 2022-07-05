"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[2849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=c(n),u=o,m=h["".concat(s,".").concat(u)]||h[u]||p[u]||r;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(4996);const l={id:"withdraw_lightGodwoken",title:"Withdrawal Demo"},i=void 0,s={unversionedId:"withdraw_lightGodwoken",id:"version-0.10.4/withdraw_lightGodwoken",title:"Withdrawal Demo",description:"",source:"@site/versioned_docs/version-0.10.4/withdraw_lightGodwoken.md",sourceDirName:".",slug:"/withdraw_lightGodwoken",permalink:"/0.10.4/withdraw_lightGodwoken",draft:!1,tags:[],version:"0.10.4",frontMatter:{id:"withdraw_lightGodwoken",title:"Withdrawal Demo"},sidebar:"sidebar2",previous:{title:"Deposit & Withdraw CKB on Godwoken",permalink:"/0.10.4/deposit_withdrawal"},next:{title:"Integration Guide for Ethererm Developers",permalink:"/0.10.4/integration"}},c={},d=[{value:"Implementation of Assets Withdrawal",id:"implementation-of-assets-withdrawal",level:2},{value:"Step 1. Submit a Withdrawal Request to Godwoken",id:"step-1-submit-a-withdrawal-request-to-godwoken",level:3},{value:"Step 2. Unlock Withdrawal Cells",id:"step-2-unlock-withdrawal-cells",level:3},{value:"Cell Dependencies",id:"cell-dependencies",level:4},{value:"Run the Demo",id:"run-the-demo",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Steps",id:"steps",level:3}],p={toc:d};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide shows how to withdraw assets from Godwoken to CKB with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zhangyouxin/light-godwoken"},"Light Godwoken"),", a demo UI for depositing and withdrawing assets to Godwoken. "),(0,o.kt)("p",null,"An online demo is available here for more visualisation of a preview running without downloading the code\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://zhangyouxin.github.io/light-godwoken/"},"https://zhangyouxin.github.io/light-godwoken/")),(0,o.kt)("h2",{id:"implementation-of-assets-withdrawal"},"Implementation of Assets Withdrawal"),(0,o.kt)("p",null,"The withdrawal contains two steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Submit a Withdrawal Request to Godwoken."),(0,o.kt)("li",{parentName:"ol"},"Unlock Withdrawal Cells.")),(0,o.kt)("h3",{id:"step-1-submit-a-withdrawal-request-to-godwoken"},"Step 1. Submit a Withdrawal Request to Godwoken"),(0,o.kt)("p",null,"First, call the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_submit_withdrawal_request"},"gw_submit_withdrawal_request")," RPC method to burn the assets on layer 2 network. Godwoken then simultaneously creates equal assets on layer 1 network for the receiver, which can be unlocked in 5 days."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Some information, such as the sender's layer 2 address and the receiver's layer 1 address, are required as parameters when submitting such a request. "))),(0,o.kt)("p",null,"For further details, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/classicalliu/gw-demos/blob/d2780e4c20824796f21a8277ea357dcce34c8e9f/src/withdrawal.ts?_pjax=%23js-repo-pjax-container%2C%20div%5Bitemtype%3D%22http%3A%2F%2Fschema.org%2FSoftwareSourceCode%22%5D%20main%2C%20%5Bdata-pjax-container%5D#L26-L126"},"example"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  raw: {\n    nonce: '0x2e',\n    capacity: '0x9502f9000',\n    amount: '0x0',\n    sudt_script_hash: '0x0000000000000000000000000000000000000000000000000000000000000000',\n    account_script_hash: '0x1ddfd18bee966192f8e35e8fbaaae93b88c476960754077d039cf1e56c633c22',\n    sell_amount: '0x0',\n    sell_capacity: '0x0',\n    owner_lock_hash: '0xfda77156f5ec403242a03875b2b29e14ba1c910b14a62fbe0baa3e367ae1f0a6',\n    payment_lock_hash: '0x0000000000000000000000000000000000000000000000000000000000000000',\n    fee: {\n      sudt_id: '0x1',\n      amount: '0x0',\n    },\n  },\n  signature: '0x8109666e73e8e2ce0bc95d95e08a3a77844c9c5e8049882d863c765843f14af57107bf22c00bce8ea1e45cdbc85415d4f497061913bcbfa97258b2b27897a53a01',\n}\n")),(0,o.kt)("p",null,"In the sample above:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"owner_lock_hash")," is from the owner of layer 1"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"account_script_hash")," is from the ",(0,o.kt)("inlineCode",{parentName:"li"},"address")," of layer 2")),(0,o.kt)("p",null,"Sample code for calculating the hashes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { utils, helpers } from "@ckb-lumos/lumos";\n\n// layer 1 receiver lock\nconst ownerLock = helpers.parseAddress(owner /* a CKB address like ckt1... */);\nconst owner_lock_hash = utils.computeScriptHash(ownerLock);\n\n// layer 2 account\nconst l2AccountScript: Script = {\n  code_hash: ethAccountTypeHash,\n  hash_type: "type",\n  args: rollupTypeHash + l2Address.slice(2),\n};\nconst account_script_hash = utils.computeScriptHash(l2AccountScript);\n')),(0,o.kt)("p",null,"Once the RPC request has been successfully submitted, the hash value returned can be used to query the withdrawal status by calling the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_get_withdrawal"},"gw_get_withdrawal"),":"),(0,o.kt)("p",null,"Note:  Replace the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," in the following example with your withdrawal hash."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 2,\n  "jsonrpc": "2.0",\n  "method": "gw_get_withdrawal",\n  "params": ["0xb57c6da2f803413b5781f8c6508320a0ada61a2992bb59ab38f16da2d02099c1"]\n}\n')),(0,o.kt)("p",null," The value returned should look like\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 2,\n  "result": {\n    "withdrawal": {\n      "raw": {\n        "nonce": "0x2e",\n        "capacity": "0x9502f9000",\n        "amount": "0x0",\n        "sell_amount": "0x0",\n        "sell_capacity": "0x0",\n        "sudt_script_hash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n        "account_script_hash": "0x1ddfd18bee966192f8e35e8fbaaae93b88c476960754077d039cf1e56c633c22",\n        "owner_lock_hash": "0xfda77156f5ec403242a03875b2b29e14ba1c910b14a62fbe0baa3e367ae1f0a6",\n        "payment_lock_hash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n        "fee": {\n          "sudt_id": "0x1",\n          "amount": "0x0"\n        }\n      },\n      "signature": "0x8109666e73e8e2ce0bc95d95e08a3a77844c9c5e8049882d863c765843f14af57107bf22c00bce8ea1e45cdbc85415d4f497061913bcbfa97258b2b27897a53a01"\n    },\n    "status": "committed"\n  }\n}\n')),(0,o.kt)("p",null,"A cell with assets will then be created on layer 1, so as to list all the withdrawal cells that requested by the account on layer 2.\nHere it is named ",(0,o.kt)("inlineCode",{parentName:"p"},"AliceL2"),", and for querying one can use ",(0,o.kt)("inlineCode",{parentName:"p"},"@ckb-lumos/ckb-indexer"),", as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const getWithdrawalCellSearchParams = function (AliceL2: string) {\n  const layer2Lock: Script = {\n    code_hash: SCRIPTS.eth_account_lock.script_type_hash,\n    hash_type: "type",\n    args: ROLLUP_CONFIG.rollup_type_hash + AliceL2.slice(2).toLowerCase(),\n  };\n  const accountScriptHash = utils.computeScriptHash(layer2Lock);\n\n  return {\n    script: {\n      code_hash: SCRIPTS.withdrawal_lock.script_type_hash,\n      hash_type: "type" as HashType,\n      args: `${ROLLUP_CONFIG.rollup_type_hash}${accountScriptHash.slice(2)}`,\n    },\n    script_type: "lock",\n  };\n};\nconst searchParams = getWithdrawalCellSearchParams(AliceL2);\nconst collector = ckbIndexer.collector({ lock: searchParams.script });\n')),(0,o.kt)("h3",{id:"step-2-unlock-withdrawal-cells"},"Step 2. Unlock Withdrawal Cells"),(0,o.kt)("p",null,"To unlock assets previously created, it will take a while (approximately 5 days) to unlock the assets owing to security concerns. The ",(0,o.kt)("strong",{parentName:"p"},"Fast Withdrawal")," function will be available soon. Once the pending period is expired, the receiver can make a transaction on layer 1 to unlock the asset cell. This transaction will use the withdrawal cell as input and take another CKB cell to cover the transaction fee. Within the withdrawal cell used as output, the lock of the asset cell will be replaced with the lock of the receiver."),(0,o.kt)("p",null,"Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  version: "0x0",\n  cell_deps: [\n    {\n      // withdraw cell dep\n      out_point: {\n        tx_hash: "0xb4b07dcd1571ac18683b515ada40e13b99bd0622197b6817047adc9f407f4828",\n        index: "0x0",\n      },\n      dep_type: "code",\n    },\n    {\n      // rollup cell dep\n      out_point: {\n        tx_hash: "0x6ab0949b8ce8e7b268d12848c2668a049c3c0ac0d5e803311dd2512c96ce3072",\n        index: "0x0",\n      },\n      dep_type: "code",\n    },\n    {\n      // omni lock cell dep\n      out_point: {\n        tx_hash: "0x9154df4f7336402114d04495175b37390ce86a4906d2d4001cf02c3e6d97f39c",\n        index: "0x0",\n      },\n      dep_type: "code",\n    },\n    {\n      // secp256k1 cell dep\n      out_point: {\n        tx_hash: "0xf8de3bb47d055cdf460d93a2a6e1b05f7432f9777c8c474abf4eec1d4aee5d37",\n        index: "0x0",\n      },\n      dep_type: "dep_group",\n    },\n  ],\n  header_deps: [],\n  inputs: [\n    {\n      // withdrawal cell\n      since: "0x0",\n      previous_output: {\n        index: "0x27",\n        tx_hash: "0xfd6b226ca0cf63860b6958b75c498d44d780b273b9a5dd5563925dfb99c7b2d8",\n      },\n    },\n    {\n      // owner cell\n      since: "0x0",\n      previous_output: {\n        index: "0x0",\n        tx_hash: "0xe68156b56efe7da6143a4f4c6b1fd6e57cad34d5677a3eb2ebe0ab4a5a8b8c07",\n      },\n    },\n  ],\n  outputs: [\n    {\n      // with changing the lock of withdrawal cell to owner lock, the assets is unlocked by owner\n      capacity: "0xba43b7400",\n      lock: {\n        code_hash: "0x79f90bb5e892d80dd213439eeab551120eb417678824f282b4ffb5f21bad2e1e",\n        hash_type: "type",\n        args: "0x01a08bcc398854db4eaffd9c28b881c65f91e3a28b00",\n      },\n      type: null,\n    },\n    {\n      // owner cell exchange after paying tx fee\n      capacity: "0x95623ea60",\n      lock: {\n        code_hash: "0x79f90bb5e892d80dd213439eeab551120eb417678824f282b4ffb5f21bad2e1e",\n        hash_type: "type",\n        args: "0x01a08bcc398854db4eaffd9c28b881c65f91e3a28b00",\n      },\n    },\n  ],\n  outputs_data: ["0x", "0x"],\n  witnesses: ["0x1c000000100000001c0000001c000000080000000000000004000000", "..."],\n}\n')),(0,o.kt)("h4",{id:"cell-dependencies"},"Cell Dependencies"),(0,o.kt)("p",null,"A CKB ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md#Celll"},"cell")," contains ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md#Script"},"Scripts"),", execution of ",(0,o.kt)("inlineCode",{parentName:"p"},"Scripts")," depends on deployed codes. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md#celldep"},"Cell dependencies")," are used to provide the codes."),(0,o.kt)("p",null,"In this transaction, ",(0,o.kt)("inlineCode",{parentName:"p"},"cell_deps")," contains ",(0,o.kt)("inlineCode",{parentName:"p"},"rollup cellDep"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"lock cellDep")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw cellDep"),". If there are any sUDT withdrawals, be sure to add ",(0,o.kt)("inlineCode",{parentName:"p"},"sudt cellDep"),", as well as the other dependencies required by the receiver lock. ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw cellDep")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sudt cellDep")," can be obtained from some static config files, and ",(0,o.kt)("inlineCode",{parentName:"p"},"lock cellDep")," relies on the type of lock to be used. The ",(0,o.kt)("inlineCode",{parentName:"p"},"omnilock")," is used in the example, hence the ",(0,o.kt)("inlineCode",{parentName:"p"},"omnilock cellDep")," is added. For the ",(0,o.kt)("inlineCode",{parentName:"p"},"rollup cellDep"),", it needs to be obtained from the mem pool:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'async function getRollupCellDep(): Promise<CellDep> {\n  const result = await this.godwokenClient.getLastSubmittedInfo();\n  const txHash = result.transaction_hash;\n  const tx = await this.getPendingTransaction(txHash);\n\n  if (tx == null) {\n    throw new Error("Last submitted tx not found!");\n  }\n\n  let rollupIndex = tx.transaction.outputs.findIndex((o: any) => {\n    return (\n      o.type &&\n      utils.computeScriptHash(o.type) === ROLLUP_CONFIG.rollup_type_hash\n    );\n  });\n  return {\n    out_point: {\n      tx_hash: txHash,\n      index: `0x${rollupIndex.toString(16)}`,\n    },\n    dep_type: "code",\n  };\n}\n')),(0,o.kt)("h2",{id:"run-the-demo"},"Run the Demo"),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"The following prerequisites apply for withdrawing assets from Godwoken with Light Godwoken."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- MetaMask\n- NodeJS >= v14\n")),(0,o.kt)("h3",{id:"steps"},"Steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone the repo to your local machine.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate into the directory of the demo and install dependencies."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"yarn install\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the demo."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"yarn start\n")))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"CLICK ME"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"{1,2,5,7,8}","{1,2,5,7,8}":!0},"yarn run v1.22.17\n$ react-scripts start\ni \uff62wds\uff63: Project is running at http://192.168.238.1/\ni \uff62wds\uff63: webpack output is served from /light-godwoken\ni \uff62wds\uff63: Content not from webpack is served from E:\\01 Projects\\03 Documentation\\Godwoken documentation\\light-godwoken\\public\ni \uff62wds\uff63: 404s will fallback to /light-godwoken/\nStarting the development server...\n\n=============\n\nWARNING: You are currently running a version of TypeScript which is not officially supported by @typescript-eslint/typescript-estree.\n\nYou may find that it works just fine, or you may not.\n\nSUPPORTED TYPESCRIPT VERSIONS: >=3.3.1 <4.5.0\n\nYOUR TYPESCRIPT VERSION: 4.5.4\n\nPlease only submit bug reports when using the officially supported version.\n\n=============\nCompiled successfully!\n\nYou can now view withdraw-demo in the browser.\n\n  Local:            http://localhost:4001/light-godwoken\n  On Your Network:  http://192.168.238.1:4001/light-godwoken\n\nNote that the development build is not optimized.\nTo create a production build, use yarn build.\n")))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:4001/light-godwoken"},"withdraw-demo")," in the browser, and connect to the MetaMask wallet.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Withdrawal")," to launch a withdrawal transaction.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Confirm the withdrawal request.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify the Withdrawal Requests history. The ",(0,o.kt)("strong",{parentName:"p"},"Estimated time left")," shows the countdown of unlocking time."),(0,o.kt)("img",{src:(0,r.Z)("img/godwokenUI-demo.jpg"),width:"50%"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once the countdown runs up, click ",(0,o.kt)("strong",{parentName:"p"},"Withdraw"),", unlock asset to complete the transaction."),(0,o.kt)("h2",{parentName:"li",id:"reference"},"Reference"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Resource"),(0,o.kt)("th",{parentName:"tr",align:null},"Link"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Godwoken RPC Docs"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_submit_withdrawal_request"},"https://github.com/nervosnetwork/godwoken/blob/develop/docs/RPC.md#method-gw_submit_withdrawal_request"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Godwoken Demos"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/classicalliu/gw-demos"},"https://github.com/classicalliu/gw-demos"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Godwoken Testnet Config"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken-public/blob/master/testnet/config/scripts-deploy-result.json"},"https://github.com/nervosnetwork/godwoken-public/blob/master/testnet/config/scripts-deploy-result.json"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Polyjuice Provider"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/polyjuice-provider"},"https://github.com/nervosnetwork/polyjuice-provider"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Godwoken Web3"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/nervosnetwork/godwoken-web3#godwoken-web3-api"},"https://github.com/nervosnetwork/godwoken-web3#godwoken-web3-api"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Lumos Documentation"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://cryptape.github.io/lumos-doc/docs/introduction/about"},"https://cryptape.github.io/lumos-doc/docs/introduction/about"))))))}h.isMDXComponent=!0}}]);