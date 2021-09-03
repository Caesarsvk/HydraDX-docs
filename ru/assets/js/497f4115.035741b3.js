(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[650],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(h,r(r({ref:t},p),{},{components:n})):i.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return r}});var i=n(2263),a=n(3919);function o(){var e=(0,i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var o=void 0===i?{}:i,r=o.forcePrependBaseUrl,c=void 0!==r&&r,l=o.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(c)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+p:p}(o,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},27:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var i=n(2122),a=n(9756),o=(n(7294),n(3905)),r=n(4996),c={id:"participate_in_council_elections",title:"Participate in Council Elections"},l={unversionedId:"participate_in_council_elections",id:"participate_in_council_elections",isDocsHomePage:!1,title:"Participate in Council Elections",description:"This article provides step-by-step guidance on how to participate in Council elections - voting for Council members and becoming a Council candidate. There are two alternative tools which you can use for this purpose - Commonwealth.im or Polkadot/apps.",source:"@site/docs/participate_in_council_elections.md",sourceDirName:".",slug:"/participate_in_council_elections",permalink:"/ru/participate_in_council_elections",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/participate_in_council_elections.md",version:"current",frontMatter:{id:"participate_in_council_elections",title:"Participate in Council Elections"},sidebar:"sidebar",previous:{title:"Participate in Referenda",permalink:"/ru/participate_in_referenda"},next:{title:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0443\u0437\u043b\u0443 HydraDX",permalink:"/ru/polkadotjs_apps_local"}},s=[{value:"Using Commonwealth.im",id:"cw",children:[{value:"Vote in Council member elections",id:"cw-vote",children:[]},{value:"Apply as a Council candidate",id:"cw-become_candidate",children:[]}]},{value:"Using Polkadot/apps",id:"polkajs",children:[{value:"Vote in Council member elections",id:"polkajs-vote",children:[]},{value:"Apply as a Council candidate",id:"polkajs-become_candidate",children:[]}]}],p={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article provides step-by-step guidance on how to participate in Council elections - voting for Council members and becoming a Council candidate. There are two alternative tools which you can use for this purpose - ",(0,o.kt)("a",{parentName:"p",href:"#cw"},"Commonwealth.im")," or ",(0,o.kt)("a",{parentName:"p",href:"#polkajs"},"Polkadot/apps"),"."),(0,o.kt)("p",null,"If you are interested in how the election mechanism works, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/democracy_council#elections"},"this post"),"."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The HydraDX democracy module will be launched on or after ",(0,o.kt)("strong",{parentName:"p"},"15 September 2021"),". Please do not attempt any of the shown actions before that date."))),(0,o.kt)("h2",{id:"cw"},"Using Commonwealth.im"),(0,o.kt)("h3",{id:"cw-vote"},"Vote in Council member elections"),(0,o.kt)("p",null,"You can see the current Council members as well as the runners-up in the ",(0,o.kt)("a",{parentName:"p",href:"https://commonwealth.im/hydradx/council"},"Councillors tab")," on the HydraDX Commonwealth page."),(0,o.kt)("p",null,"To bring out your vote for Council members, click on ",(0,o.kt)("em",{parentName:"p"},"Vote"),"."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,r.Z)("/participate_in_council_elections/cw-vote.jpg")})),(0,o.kt)("p",null,"Enter the amount of tokens you are willing to lock in support of your candidates."),(0,o.kt)("p",null,"After that, select your preferred candidates by clicking on their names. Remeber to select multiple candidates - this will help the algorithm select the optimal distribution of candidates to the Council."),(0,o.kt)("p",null,"To bring out your vote, click on ",(0,o.kt)("em",{parentName:"p"},"Submit vote")," and sign the transaction."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Locked tokens cannot be transferred, however they can still be used for staking and voting in referenda. Your tokens will remain lucked and used for subsequent elections until you have decided to unlock them."))),(0,o.kt)("h3",{id:"cw-become_candidate"},"Apply as a Council candidate"),(0,o.kt)("p",null,"You can submit your application for Council membership by navigating to the ",(0,o.kt)("a",{parentName:"p",href:"https://commonwealth.im/hydradx/council"},"Councillors tab")," on the HydraDX Commonwealth page."),(0,o.kt)("p",null,"Click on ",(0,o.kt)("em",{parentName:"p"},"Run for council")," which will bring you to a page showing the minimum deposit required for membership."),(0,o.kt)("p",null,"To submit your candidacy, click on ",(0,o.kt)("em",{parentName:"p"},"Sign and send transaction")," and sign using your wallet."),(0,o.kt)("h2",{id:"polkajs"},"Using Polkadot/apps"),(0,o.kt)("h3",{id:"polkajs-vote"},"Vote in Council member elections"),(0,o.kt)("p",null,"You can see the current Council members as well as the runners-up on the ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/council"},(0,o.kt)("em",{parentName:"a"},"Governance > Council")," page")," in Polkadot/apps."),(0,o.kt)("p",null,"To bring out your vote for Council members, click on ",(0,o.kt)("em",{parentName:"p"},"Vote"),"."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,r.Z)("/participate_in_council_elections/polkajs-vote.jpg")})),(0,o.kt)("p",null,"Enter the amount of tokens you are willing to lock in support of your candidates."),(0,o.kt)("p",null,"After that, select your candidates in order of preference by moving them from the left list to the right one. Remeber to select multiple candidates - this will help the algorithm select the optimal distribution of candidates to the Council."),(0,o.kt)("p",null,"To bring out your vote, click on ",(0,o.kt)("em",{parentName:"p"},"Vote")," and sign the transaction."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Locked tokens cannot be transferred, however they can still be used for staking and voting in referenda. Your tokens will remain lucked and used for subsequent elections until you have decided to unlock them."))),(0,o.kt)("h3",{id:"polkajs-become_candidate"},"Apply as a Council candidate"),(0,o.kt)("p",null,"You can submit your application for Council membership by navigating to ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/council"},(0,o.kt)("em",{parentName:"a"},"Governance > Council"))," in Polkadot/apps."),(0,o.kt)("p",null,"Click on ",(0,o.kt)("em",{parentName:"p"},"Submit candidacy")," which will trigger a popup."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,r.Z)("/participate_in_council_elections/polkajs-apply.jpg")})),(0,o.kt)("p",null,"Select the account which is running for Council membership, click on ",(0,o.kt)("em",{parentName:"p"},"Submit"),", and sign the transaction."))}u.isMDXComponent=!0}}]);