"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[3865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var p=2;p<l;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));n(4996);const l={id:"evmPrep",title:"Setup and Requirements"},i=void 0,a={unversionedId:"evmPrep",id:"version-1.2-rc1/evmPrep",title:"Setup and Requirements",description:"",source:"@site/versioned_docs/version-1.2-rc1/evmPrep.md",sourceDirName:".",slug:"/evmPrep",permalink:"/1.2-rc1/evmPrep",draft:!1,tags:[],version:"1.2-rc1",frontMatter:{id:"evmPrep",title:"Setup and Requirements"},sidebar:"sidebar2",previous:{title:"Nervos' Layer 2 EVM Training",permalink:"/1.2-rc1/evmIntro"},next:{title:"1. Create account on the EVM Layer 2 Testnet",permalink:"/1.2-rc1/evmTask1"}},s={},p=[{value:"Supported Architectures",id:"supported-architectures",level:2},{value:"Supported Environments",id:"supported-environments",level:2},{value:"Prerequisite Development Software",id:"prerequisite-development-software",level:2},{value:"Prerequisite Wallet Software",id:"prerequisite-wallet-software",level:2},{value:"Setup Instructions",id:"setup-instructions",level:2},{value:"Ubuntu 20.04 (Native or Windows 10 + WSL2)",id:"ubuntu-2004-native-or-windows-10--wsl2",level:3},{value:"Build Tools + Git + Curl + 7zip + Unzip",id:"build-tools--git--curl--7zip--unzip",level:4},{value:"Node.js",id:"nodejs",level:4},{value:"Python 2.7.x",id:"python-27x",level:4},{value:"Yarn",id:"yarn",level:4},{value:"Docker",id:"docker",level:4},{value:"MacOS (10.13+)",id:"macos-1013",level:3},{value:"Build Tools + Git",id:"build-tools--git",level:4},{value:"Curl",id:"curl",level:4},{value:"7zip",id:"7zip",level:4},{value:"Node.js",id:"nodejs-1",level:4},{value:"Python 2.7.x",id:"python-27x-1",level:4},{value:"Yarn",id:"yarn-1",level:4},{value:"Docker",id:"docker-1",level:4},{value:"Windows 10 + PowerShell",id:"windows-10--powershell",level:3},{value:"Checking Your Node.js and Yarn Versions",id:"checking-your-nodejs-and-yarn-versions",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"supported-architectures"},"Supported Architectures"),(0,r.kt)("p",null,"The tooling currently supports the Intel-compatible x86","_","64 architecture and ARM (e.g. M1 Macs)."),(0,r.kt)("h2",{id:"supported-environments"},"Supported Environments"),(0,r.kt)("p",null,"The following operating systems are officially supported. Other operating systems may also be compatible, but have not officially been tested for compatibility by our teams."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ubuntu.com"},"Ubuntu Linux 20.04")," (Desktop or Server edition)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.apple.com/macos/"},"MacOS")," (Big Sur 11.0+)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/windows"},"Windows 10")," + ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/about"},"WSL2")," (Ubuntu 20.04 virtualized)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/windows"},"Windows 10")," + ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/powershell/scripting/overview"},"PowerShell"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Throughout most of our demos and walkthroughs, Ubuntu Linux 20.04 is used. This is the preferred platform by most developers.")),(0,r.kt)("h2",{id:"prerequisite-development-software"},"Prerequisite Development Software"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Build Tools"),(0,r.kt)("li",{parentName:"ul"},"Curl"),(0,r.kt)("li",{parentName:"ul"},"7zip (optional)"),(0,r.kt)("li",{parentName:"ul"},"Unzip (optional)"),(0,r.kt)("li",{parentName:"ul"},"Git"),(0,r.kt)("li",{parentName:"ul"},"Node.js 16.13.x (LTS)"),(0,r.kt)("li",{parentName:"ul"},"Python 2.7.x"),(0,r.kt)("li",{parentName:"ul"},"Yarn"),(0,r.kt)("li",{parentName:"ul"},"Docker")),(0,r.kt)("h2",{id:"prerequisite-wallet-software"},"Prerequisite Wallet Software"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://metamask.io/download.html"},"MetaMask"))),(0,r.kt)("h2",{id:"setup-instructions"},"Setup Instructions"),(0,r.kt)("h3",{id:"ubuntu-2004-native-or-windows-10--wsl2"},"Ubuntu 20.04 (Native or Windows 10 + WSL2)"),(0,r.kt)("h4",{id:"build-tools--git--curl--7zip--unzip"},"Build Tools + Git + Curl + 7zip + Unzip"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ sudo apt install build-essential git curl p7zip-full unzip\n")),(0,r.kt)("h4",{id:"nodejs"},"Node.js"),(0,r.kt)("p",null,"The default version of Node.js included with Ubuntu 20.04 is v10.19.0, and this is not sufficient."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For these tasks, version 16.13.x is needed. Versions lower than this may not work.")," This can be installed using NVM (Node Version Manager), or the normal Node.js installation instructions. We recommend using NVM because it allows you to change between any version of Node.js quickly."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm#installing-and-updating"},"NVM Install")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nodesource/distributions/blob/master/README.md#debinstall"},"Node.js Install"))),(0,r.kt)("h4",{id:"python-27x"},"Python 2.7.x"),(0,r.kt)("p",null,"Ubuntu 20.04 ships with Python 3.8.x installed, but Python 2.7.x is still available for compatibility with old tooling using the ",(0,r.kt)("inlineCode",{parentName:"p"},"python")," package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ sudo apt install python\n")),(0,r.kt)("h4",{id:"yarn"},"Yarn"),(0,r.kt)("p",null,"Yarn can easily be installed using NPM once Node.js is installed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npm i -g yarn\n")),(0,r.kt)("h4",{id:"docker"},"Docker"),(0,r.kt)("p",null,"Docker will be used for running the Solidity compiler to compile smart contracts. You can find information on how to install it on the official ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker website"),'. If you\'re using Windows + Windows Subsystem For Linux it will be the easiest if you download and install the official "Docker for Windows" desktop application. It makes using Docker easy thanks to the graphical interface.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: The current user must have permission to manage Docker instances. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/linux-postinstall/"},"How to manage Docker as a non-root user"),".")),(0,r.kt)("h3",{id:"macos-1013"},"MacOS (10.13+)"),(0,r.kt)("h4",{id:"build-tools--git"},"Build Tools + Git"),(0,r.kt)("p",null,"Download and install the Xcode Command Line Tools from ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/technotes/tn2339/"},"developer.apple.com"),"."),(0,r.kt)("h4",{id:"curl"},"Curl"),(0,r.kt)("p",null,"Curl should be installed by default on recent versions of macOS."),(0,r.kt)("h4",{id:"7zip"},"7zip"),(0,r.kt)("p",null,"There are several decompressors available for macOS that can handle 7z files. Still, we recommend ",(0,r.kt)("inlineCode",{parentName:"p"},"p7zip")," since it will be fully compatible with our scripts. This can be installed using ",(0,r.kt)("a",{parentName:"p",href:"https://formulae.brew.sh/formula/p7zip"},"Homebrew"),"."),(0,r.kt)("h4",{id:"nodejs-1"},"Node.js"),(0,r.kt)("p",null,"Node.js can be installed on macOS using NVM, or the Node.js installer. ",(0,r.kt)("strong",{parentName:"p"},"For these tasks, version 16.13.x is needed. Versions lower than this may not work.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm#installing-and-updating"},"NVM Install")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js Installer"))),(0,r.kt)("h4",{id:"python-27x-1"},"Python 2.7.x"),(0,r.kt)("p",null,"To install Python 2.7.x on macOS, please visit the official Python ",(0,r.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/release/python-2718/"},"download")," page."),(0,r.kt)("h4",{id:"yarn-1"},"Yarn"),(0,r.kt)("p",null,"Yarn can easily be installed using NPM once Node.js is installed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npm i -g yarn\n")),(0,r.kt)("h4",{id:"docker-1"},"Docker"),(0,r.kt)("p",null,"Docker will be used for running the Solidity compiler to compile smart contracts. You can find information on how to install it from the official ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker website"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: The current user must have permission to manage Docker instances. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/linux-postinstall/"},"How to manage Docker as a non-root user"),".")),(0,r.kt)("h3",{id:"windows-10--powershell"},"Windows 10 + PowerShell"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nodejs/node-gyp#on-windows"},"node-gyp dependencies")),(0,r.kt)("li",{parentName:"ol"},"Docker or ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/windows/install/"},"Docker Desktop"))),(0,r.kt)("h2",{id:"checking-your-nodejs-and-yarn-versions"},"Checking Your Node.js and Yarn Versions"),(0,r.kt)("p",null,"One of the most common causes of errors is having the incorrect version of Node.js or Yarn. These tasks specifically require Node.js v16.x.x, and a recent version of Yarn. You can check these versions using the commands below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ node -v\nv16.13.0\n$ yarn -v\n1.22.11\n")))}c.isMDXComponent=!0}}]);