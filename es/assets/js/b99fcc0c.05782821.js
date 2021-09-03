(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[258],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return i}});var a=n(2263),r=n(3919);function o(){var e=(0,a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,p=void 0!==i&&i,l=o.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(p)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+c:c}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},3811:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=n(4996),p={id:"participate_in_referenda",title:"Participate in Referenda"},l={unversionedId:"participate_in_referenda",id:"participate_in_referenda",isDocsHomePage:!1,title:"Participate in Referenda",description:"This post provides a step-by-step guide on how to participate in referenda - voting and proposing. There are two alternative tools which you can use for this purpose - Commonwealth.im or Polkadot/apps.",source:"@site/docs/participate_in_referenda.md",sourceDirName:".",slug:"/participate_in_referenda",permalink:"/es/participate_in_referenda",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/participate_in_referenda.md",version:"current",frontMatter:{id:"participate_in_referenda",title:"Participate in Referenda"},sidebar:"sidebar",previous:{title:"Soliciar tips de la Tesorer\xeda",permalink:"/es/tip_request"},next:{title:"Participate in Council Elections",permalink:"/es/participate_in_council_elections"}},s=[{value:"Using Commonwealth.im",id:"cw",children:[{value:"Vote in a Referendum",id:"cw-vote",children:[]},{value:"Propose a Referendum",id:"cw-propose",children:[]}]},{value:"Using Polkadot/apps",id:"polkajs",children:[{value:"Vote in a Referendum",id:"polkajs-vote",children:[]},{value:"Propose a Referendum",id:"polkajs-propose",children:[]}]}],c={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This post provides a step-by-step guide on how to participate in referenda - voting and proposing. There are two alternative tools which you can use for this purpose - ",(0,o.kt)("a",{parentName:"p",href:"#cw"},"Commonwealth.im")," or ",(0,o.kt)("a",{parentName:"p",href:"#polkajs"},"Polkadot/apps"),"."),(0,o.kt)("p",null,"Before you decide to participate, we strongly encourage you to read through the ",(0,o.kt)("a",{parentName:"p",href:"/democracy_referenda"},"knowledge article")," in the Learn / Democracy section. There you will find some important details on the mechanics behind referenda."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The HydraDX democracy module will be launched on or after ",(0,o.kt)("strong",{parentName:"p"},"15 September 2021"),". Please do not attempt any of the shown actions before that date."))),(0,o.kt)("h2",{id:"cw"},"Using Commonwealth.im"),(0,o.kt)("h3",{id:"cw-vote"},"Vote in a Referendum"),(0,o.kt)("p",null,"You can see all referenda which are open for voting by navigating to the ",(0,o.kt)("a",{parentName:"p",href:"https://commonwealth.im/hydradx/referenda"},"Referenda tab")," on the HydraDX Commonwealth page."),(0,o.kt)("p",null,"To vote on an active referendum, you need to click on it. After that, you will see a page showing all relevant details."),(0,o.kt)("p",null,"In the section ",(0,o.kt)("em",{parentName:"p"},"Cast Your Vote"),", fill in the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Amount to vote - this is the amount of HDX tokens you are willing to lock in support of the referendum"),(0,o.kt)("li",{parentName:"ul"},"Conviction multiplier - this is the multiplier which co-determines the ",(0,o.kt)("a",{parentName:"li",href:"/democracy_referenda#referenda-votes-weighing"},"weight of your vote"),".")),(0,o.kt)("p",null,"After that, bring out your vote by clicking on ",(0,o.kt)("em",{parentName:"p"},"Vote yes")," or ",(0,o.kt)("em",{parentName:"p"},"Vote no")," and sign the transaction."),(0,o.kt)("h3",{id:"cw-propose"},"Propose a Referendum"),(0,o.kt)("p",null,"To propose a referendum, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://commonwealth.im/hydradx/"},"HydraDX Commonwealth page")," and click in the top menu on ",(0,o.kt)("em",{parentName:"p"},"New Thread > New democracy proposal"),"."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,i.Z)("/participate_in_referenda/cw-proposal.jpg")})),(0,o.kt)("p",null,"Fill in the information in the fields show above. The most important parameters are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Module"),(0,o.kt)("li",{parentName:"ul"},"Function"),(0,o.kt)("li",{parentName:"ul"},"Any additional information as specified by the function that you are proposing to be called"),(0,o.kt)("li",{parentName:"ul"},"Deposit - the amount of HDX tokens which you are willing to deposit in support of the proposal")),(0,o.kt)("p",null,"In the example above, the proposal module is ",(0,o.kt)("em",{parentName:"p"},"balances"),", and the function is ",(0,o.kt)("em",{parentName:"p"},"setBalance")," which modifies the free and reserve balances of a given account."),(0,o.kt)("p",null,"To submit the proposal, click on ",(0,o.kt)("em",{parentName:"p"},"Send transaction")," and sign using your wallet."),(0,o.kt)("p",null,"After submitting the proposal on-chain and signing the transaction, your proposal should appear in the ",(0,o.kt)("a",{parentName:"p",href:"https://commonwealth.im/hydradx/referenda"},"list of proposed referenda"),"."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Every voting period, the referendum proposal with the highest backing (",(0,o.kt)("em",{parentName:"p"},"seconding"),") enters the voting round. As the amount of referenda grows, there is no guarantee that your proposal will ever gain sufficient seconding to enter voting. There is no option to withdraw a referendum proposal, meaning that your funds might remain locked for a longer period of time."),(0,o.kt)("p",{parentName:"div"},"Malicious referendum proposals are punished. The HydraDX Council and the Technical Committee have the right to cancel any referendum which was proposed in bad faith. As a result, the deposited tokens will be burnt."))),(0,o.kt)("h2",{id:"polkajs"},"Using Polkadot/apps"),(0,o.kt)("h3",{id:"polkajs-vote"},"Vote in a Referendum"),(0,o.kt)("p",null,"You can see all referenda which are open for voting by navigating to ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/democracy"},(0,o.kt)("em",{parentName:"a"},"Governance > Democracy"))," in Polkadot/apps."),(0,o.kt)("p",null,"To vote in a referendum, click on the ",(0,o.kt)("em",{parentName:"p"},"Vote")," button next to it."),(0,o.kt)("p",null,"In the popup, fill in the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Vote value - this is the amount of HDX tokens you are willing to lock in support of the referendum"),(0,o.kt)("li",{parentName:"ul"},"Conviction multiplier - this is the multiplier which co-determines the ",(0,o.kt)("a",{parentName:"li",href:"/democracy_referenda#referenda-votes-weighing"},"weight of your vote"),".")),(0,o.kt)("p",null,"After that, bring out your vote by clicking on ",(0,o.kt)("em",{parentName:"p"},"Vote Nay")," (No) or ",(0,o.kt)("em",{parentName:"p"},"Vote Aye")," (Yes) and sign the transaction."),(0,o.kt)("h3",{id:"polkajs-propose"},"Propose a Referendum"),(0,o.kt)("p",null,"Proposing a referendum via Polkadot/apps consists of two steps - submitting a preimage, and submitting the proposal on-chain."),(0,o.kt)("h4",{id:"polkajs-propose-01"},"01 Submit preimage"),(0,o.kt)("p",null,"To submit the preimage, visit Polkadot/apps and navigate to ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/democracy"},(0,o.kt)("em",{parentName:"a"},"Governance > Democracy")),"."),(0,o.kt)("p",null,"After clicking on ",(0,o.kt)("em",{parentName:"p"},"Submit preimage"),", you should see the following popup:"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,i.Z)("/participate_in_referenda/polkajs-preimage.jpg")})),(0,o.kt)("p",null,"Fill in the information in the fields show above. The most important parameters are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Account from which the proposal is sent"),(0,o.kt)("li",{parentName:"ul"},"Proposal area"),(0,o.kt)("li",{parentName:"ul"},"Proposed action")),(0,o.kt)("p",null,"In the example above, the proposal area is ",(0,o.kt)("em",{parentName:"p"},"balances"),", and the action is ",(0,o.kt)("em",{parentName:"p"},"forceTransfer")," of tokens from one account to another."),(0,o.kt)("p",null,"Before submitting the preimage and signing the transaction, please make sure to copy the preimage hash. You will need it for the next step."),(0,o.kt)("h4",{id:"polkajs-propose-02"},"02 Submit proposal"),(0,o.kt)("p",null,"To submit the referendum proposal, visit ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/democracy"},(0,o.kt)("em",{parentName:"a"},"Governance > Democracy"))," in Polkadot/apps."),(0,o.kt)("p",null,"After clicking on ",(0,o.kt)("em",{parentName:"p"},"Submit proposal"),", you should see the following popup:"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,i.Z)("/participate_in_referenda/polkajs-proposal.jpg")})),(0,o.kt)("p",null,"Enter the preimage hash from the previous step, and the amount of tokens you are willing to deposit for the proposal. The minimum is 100,000 HDX."),(0,o.kt)("p",null,"After submitting the proposal on-chain and signing the transaction, your proposal should appear in the list of proposed referenda."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Every voting period, the referendum proposal with the highest backing (",(0,o.kt)("em",{parentName:"p"},"seconding"),") enters the voting round. As the amount of referenda grows, there is no guarantee that your proposal will ever gain sufficient seconding to enter voting. There is no option to withdraw a referendum proposal, meaning that your funds might remain locked for a longer period of time."),(0,o.kt)("p",{parentName:"div"},"Malicious referendum proposals are punished. The HydraDX Council and the Technical Committee have the right to cancel any referendum which was proposed in bad faith. As a result, the deposited tokens will be burnt."))))}d.isMDXComponent=!0}}]);