(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[653],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),h=o,m=p["".concat(d,".").concat(h)]||p[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return i}});var r=n(2263),o=n(3919);function a(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,d=a.absolute,s=void 0!==d&&d;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},7486:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=n(4996),c={id:"democracy_referenda",title:"Referenda"},d={unversionedId:"democracy_referenda",id:"democracy_referenda",isDocsHomePage:!1,title:"Referenda",description:"Referenda allow stakeholders to put a proposal to a weighted, stake-based vote by the wider community. The object of the referendum is some suggested action which affects the protocol - for example, a Treasury payout, or even a change in the runtime code.",source:"@site/docs/democracy_referenda.md",sourceDirName:".",slug:"/democracy_referenda",permalink:"/fr/democracy_referenda",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/democracy_referenda.md",version:"current",frontMatter:{id:"democracy_referenda",title:"Referenda"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/fr/democracy_intro"},next:{title:"HydraDX Council",permalink:"/fr/democracy_council"}},s=[{value:"Initiating a Referendum",id:"referenda-initiate",children:[{value:"Public Referendum",id:"referenda-initiate-public",children:[]},{value:"Council Referendum",id:"referenda-initiate-council",children:[]},{value:"Emergency Proposals by the Technical Committee",id:"referenda-initiate-tech-committee",children:[]},{value:"Canceling a Referendum",id:"cancel",children:[]}]},{value:"Voting in a Referendum",id:"referenda-vote",children:[{value:"Votes Weighing",id:"referenda-votes-weighing",children:[]},{value:"Voting Modes",id:"referenda-voting-modes",children:[]}]}],l={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Referenda allow stakeholders to put a proposal to a weighted, stake-based vote by the wider community. The object of the referendum is some suggested action which affects the protocol - for example, a Treasury payout, or even a change in the runtime code."),(0,a.kt)("p",null,"Generally speaking, only one referendum is brought to a vote at a time. Other pending referendum proposals are put in a queue. There are separate queues for publicly submitted proposals and for Council proposals. Every 3 days, the referendum mechanism picks the top proposal with the highest amount of support, alternating between the two queues. After a referendum has been voted upon and accepted, there is a so-called ",(0,a.kt)("em",{parentName:"p"},"enactment delay")," period of 3 days which needs to pass before the decision is put into effect. An exception to these rules applies for emergency proposals by the Technical Committee which deal with major protocol problems and need to be fast-tracked."),(0,a.kt)("h2",{id:"referenda-initiate"},"Initiating a Referendum"),(0,a.kt)("p",null,"There are multiple ways to initiate a referendum which are described in greater detail below. The way the referendum was initiated is decisive for the applicable voting mode."),(0,a.kt)("h3",{id:"referenda-initiate-public"},"Public Referendum"),(0,a.kt)("p",null,"Any holder of HDX tokens can ",(0,a.kt)("a",{parentName:"p",href:"/participate_in_referenda"},"propose a referendum")," by depositing the minimum required amount of HDX tokens and submitting the proposal on-chain. Other community members can ",(0,a.kt)("a",{parentName:"p",href:"/participate_in_referenda"},"support (",(0,a.kt)("em",{parentName:"a"},"second"),") the proposal")," for a referendum by locking up an equal amount of tokens. At the beginning of every voting cycle, the referendum proposal with the highest amount of ",(0,a.kt)("em",{parentName:"p"},"seconding")," (total deposited tokens) is advanced to a vote by the community."),(0,a.kt)("p",null,"The voting mode which applies to public referenda is ",(0,a.kt)("a",{parentName:"p",href:"#referenda-voting-modes"},"Positive Turnout Bias"),"."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"All HDX tokens which are deposited to propose or second a referendum are locked up for the whole period until the referendum has entered the voting cycle. It is important to remember that there is no guarantee that any given proposal will ever receive sufficient backing to move into the voting round, meaning that your funds might remain locked for an indefinite period."))),(0,a.kt)("h3",{id:"referenda-initiate-council"},"Council Referendum"),(0,a.kt)("p",null,"The HydraDX Council has the powers to propose a referendum for a community vote. If it does so unanimously, the applicable voting mode for the referendum is ",(0,a.kt)("a",{parentName:"p",href:"#referenda-voting-modes"},"Negative Turnout Bias"),". If the referendum is proposed with a simple majority of the Council votes, then the voting mode for accepting the proposals by the community is ",(0,a.kt)("a",{parentName:"p",href:"#referenda-voting-modes"},"Simple Majority"),"."),(0,a.kt)("h3",{id:"referenda-initiate-tech-committee"},"Emergency Proposals by the Technical Committee"),(0,a.kt)("p",null,"The Technical Committee can submit emergency proposals which deal with (critical) bug fixes or the quick adoption of battle-tested functionality. Emergency proposals skip the waiting queue and enter the voting round directly. The community can vote on emergency proposals in parallel to any regular proposal which has entered the voting round. Furthermore, emergency proposals have a shorter voting period to ensure that they can be fast-tracked."),(0,a.kt)("h3",{id:"cancel"},"Canceling a Referendum"),(0,a.kt)("p",null,"Once a referendum has been proposed, it cannot be revoked until it has entered the voting round. An exception to this rule is made for proposals which are deemed detrimental to the protocol (e.g. code changes introducing a bug). In this limited case, the referendum proposal can be cancelled by the ",(0,a.kt)("a",{parentName:"p",href:"/democracy_council"},"HydraDX Council")," (with a 60% super-majority) or the ",(0,a.kt)("a",{parentName:"p",href:"/democracy_technical_committee"},"Technical Committee")," (unanimously). All tokens wich were locked by supporters seconding the proposal are burned."),(0,a.kt)("h2",{id:"referenda-vote"},"Voting in a Referendum"),(0,a.kt)("p",null,"HydraDX referenda have a launch period of 3 days. At the beginning of every new period, the proposal with the highest amount of seconding is taken from the waiting queue and put into a voting round. Every voting round has a duration of 3 days. During this period, community members can vote on the referendum using a weighted, stake-base mechanism. They do so by locking up a certain amount of HDX tokens for a given timeframe."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Locked HDX tokens cannot be transferred for the duration of the chosen lock period. However, they can still be used for staking and for voting."))),(0,a.kt)("h3",{id:"referenda-votes-weighing"},"Votes Weighing"),(0,a.kt)("p",null,"There are two factors which determine the weight of each vote in a referendum. The first factor is the ",(0,a.kt)("strong",{parentName:"p"},"amount of HDX tokens")," which the voter locks up in support of the vote. The second factor is the so-called ",(0,a.kt)("strong",{parentName:"p"},"conviction multiplier")," which reflects the duration for which the voter is willing to lock up the tokens."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vote_weight = tokens * conviction_multiplier\n")),(0,a.kt)("p",null,"Vote lock periods have the same duration as the enactment delay. If tokens are locked for 1 voting period, this means that they will remain locked for ",(0,a.kt)("strong",{parentName:"p"},"3 days")," after the voting has ended. Voters can influence the weight of their votes by decreasing or increasing the amount of periods for which the tokens are locked. It is possible to bring out a vote with 0 lock periods, however its weight would be only a fraction (conviction multiplier of 0.1x). On the other hand, the conviction multiplier increases by 1 for every doubling of the lock periods. As shown in the table below, locking the votes for the maximum of 32 periods would raise the conviction multiplier to 6x."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Lock Periods"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Conviction Multiplier"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"0"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"2"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"8"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"16"),(0,a.kt)("td",{parentName:"tr",align:"center"},"5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"32"),(0,a.kt)("td",{parentName:"tr",align:"center"},"6")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"An example:\n\nAlice votes with 5000 HDX and 0 lock periods.\nBob votes with 100 HDX and 32 lock periods.\n\nWeight Alice: 500\nWeight Bob: 600\n")),(0,a.kt)("h3",{id:"referenda-voting-modes"},"Voting Modes"),(0,a.kt)("p",null,"Another important aspect of the democracy module are the different voting modes which apply. The threshold of votes needed for approving or rejecting a referendum can vary depending on how the referendum was initiated and on the turnout of the vote. The turnout is calculated based on the total amount of HDX tokens which were used to vote in the referendum (conviction multipliers excluded). Whether the turnout was low or not is determined by the relationship between the turnout and the elactorate (i.e. the total amount of HDX tokens eligible to vote)."),(0,a.kt)("h4",{id:"positive-turnout-bias"},"Positive Turnout Bias"),(0,a.kt)("p",null,"This is the default voting mode when a referendum is proposed by the Community. At lower turnouts, a qualified super-majority of ",(0,a.kt)("inlineCode",{parentName:"p"},"yes")," votes is required in order to approve the referendum. As the turnout grows, the threshold decreases towards a simple majority."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,i.Z)("/democracy/positive-turnout-bias.png"),width:"300px"})),(0,a.kt)("h4",{id:"negative-turnout-bias"},"Negative Turnout Bias"),(0,a.kt)("p",null,"This voting mode applies to referenda which have been proposed by the Council unanimously. Such proposals require a qualified super-majority of ",(0,a.kt)("inlineCode",{parentName:"p"},"no")," votes to be rejected at low turnouts. As the turnout grows, the threshold for rejecting the referendum decreases towards a simple majority."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,i.Z)("/democracy/negative-turnout-bias.png"),width:"280px"})),(0,a.kt)("h4",{id:"simple-majority"},"Simple Majority"),(0,a.kt)("p",null,"Referenda which were initiated by the Council with majority agreement (i.e. not unanimously) can be accepted by the community with a simple majority of the votes (50% + 1)."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,i.Z)("/democracy/simple-majority.png"),width:"200px"})))}u.isMDXComponent=!0}}]);