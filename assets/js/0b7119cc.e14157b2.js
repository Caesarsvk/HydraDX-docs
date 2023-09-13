"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[548],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return h}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),l=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=l(r),u=n,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return r?a.createElement(h,o(o({ref:e},p),{},{components:r})):a.createElement(h,o({ref:e},p))}));function h(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[d]="string"==typeof t?t:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8462:function(t,e,r){r.r(e),r.d(e,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=r(3117),n=(r(7294),r(3905)),i=r(4996);const o={id:"staking",title:"Staking"},s=void 0,c={unversionedId:"staking",id:"staking",title:"Staking",description:"HydraDX has a long-running HDX staking program which incentivizes user activity in areas that are beneficial to the Protocol. On this page you will find important information regarding the mechanics behind the HDX Staking program. You can also check out our step-by-step guide on staking.",source:"@site/docs/staking.md",sourceDirName:".",slug:"/staking",permalink:"/staking",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/staking.md",tags:[],version:"current",frontMatter:{id:"staking",title:"Staking"},sidebar:"sidebar",previous:{title:"Single-Sided LPing",permalink:"/omnipool_lp"},next:{title:"Hydrate Your Treasury (B2B)",permalink:"/omnipool_treasuries"}},l={},p=[{value:"Staking Basics",id:"basics",level:2},{value:"Boosting Your Rewards",id:"boosting-your-rewards",level:2},{value:"Claiming Your Rewards",id:"claiming-your-rewards",level:2}],d={toc:p};function m(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"HydraDX has a ",(0,n.kt)("strong",{parentName:"p"},"long-running HDX staking program")," which ",(0,n.kt)("strong",{parentName:"p"},"incentivizes user activity")," in areas that are beneficial to the Protocol. On this page you will find important information regarding the ",(0,n.kt)("strong",{parentName:"p"},"mechanics behind the HDX Staking program"),". You can also check out our ",(0,n.kt)("a",{parentName:"p",href:"/howto_stake"},"step-by-step guide on staking"),"."),(0,n.kt)("h2",{id:"basics"},"Staking Basics"),(0,n.kt)("p",null,"HDX holders can ",(0,n.kt)("strong",{parentName:"p"},"stake their HDX and receive rewards")," which become ",(0,n.kt)("strong",{parentName:"p"},"claimable as time passes"),". Staking rewards are distributed from a dedicated pot that is gradually filled up by ",(0,n.kt)("strong",{parentName:"p"},"different Protocol revenue streams"),". Initially, the main revenue stream are the ",(0,n.kt)("strong",{parentName:"p"},"LP fees")," which the HydraDX Protocol accrues from its ",(0,n.kt)("strong",{parentName:"p"},"HDX LP position in the Omnipool"),". Furthermore, the HydraDX community has approved a proposal to support the APR during the first year of the staking program with ",(0,n.kt)("strong",{parentName:"p"},"an additional subsidy of ~22M HDX")," from the HydraDX Treasury which is gradually distributed to the staking rewards pot once per day."),(0,n.kt)("p",null,"Rewards which enter the staking pot are always distributed directly to all stakers at any given moment. The amount that users are entitled to is proportional to the relative size of their stake in the stake pool. However, stakers do not automatically receive the rewards on their account - instead, they need to claim them."),(0,n.kt)("p",null,"When it comes to claiming rewards, all participants in HDX staking should be aware of the elements of ",(0,n.kt)("strong",{parentName:"p"},"loyalty and gamification"),". Once rewards are awarded, they cannot be instantly claimed for the full amount - doing so would yield just a fraction of the total rewards, with the remainder being returned the pot for redistribution to all stakers."),(0,n.kt)("p",null,"Users who want to claim as many rewards as possible should keep their HDX staked without claiming until sufficient time has passed (rewards are \u201cvested\u201d following a bonding curve). The length of the waiting period is dynamic and depends on the user (in)actions. A user who just ",(0,n.kt)("strong",{parentName:"p"},"stakes passively")," would need to ",(0,n.kt)("strong",{parentName:"p"},"wait ~2 years to claim 95% of their rewards"),". In contrast, ",(0,n.kt)("strong",{parentName:"p"},"active stakers")," who collect the maximum amount of action points (more on that below) could claim ",(0,n.kt)("strong",{parentName:"p"},"95% of their rewards in just over 2 months.")," These are rough estimates - the actual timelines may vary in accordance with user actions and overall count of referenda."),(0,n.kt)("h2",{id:"boosting-your-rewards"},"Boosting Your Rewards"),(0,n.kt)("p",null,"Stakers can increase the pace at which they can claim their rewards by ",(0,n.kt)("strong",{parentName:"p"},"collecting action points")," and ",(0,n.kt)("strong",{parentName:"p"},"boosting their rewards"),". Action points can be acquired by performing certain actions that are incentivized by the Protocol. Initially, the only way to collect action points is to ",(0,n.kt)("strong",{parentName:"p"},"participate in the governance of HydraDX")," by ",(0,n.kt)("a",{parentName:"p",href:"https://hydradx.subsquare.io/democracy/referenda"},"voting on community referenda")," ",(0,n.kt)("strong",{parentName:"p"},"using the staked HDX"),"."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{alt:"login",src:(0,i.Z)("/staking/rewards_bonding_curve.jpg"),width:"500px"})),(0,n.kt)("p",null,"There are 2 factors which determine the amount of action points that stakers will receive: The ",(0,n.kt)("strong",{parentName:"p"},"size of the vote")," (relative to the total size of their staked HDX), and the ",(0,n.kt)("strong",{parentName:"p"},"conviction multiplier"),". The higher the conviction multiplier of the vote, the greater its weight. Keep in mind that voting with a conviction multiplier places a ",(0,n.kt)("strong",{parentName:"p"},"temporary lock on the tokens"),". Stakers looking to achieve the highest rewards boost would be voting with 6x conviction multiplier, thereby locking their HDX for 192 days (counted from the last vote using such conviction). Just a reminder that ",(0,n.kt)("strong",{parentName:"p"},"this lock is not related to staking")," as such - instead, it is a standard feature of governance in the Polkadot ecosystem (more info ",(0,n.kt)("a",{parentName:"p",href:"/democracy_referenda#referenda-votes-weighing"},"in our docs"),")."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Conviction Multiplier"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Days Locked"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"0.1x"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"1x"),(0,n.kt)("td",{parentName:"tr",align:"center"},"6d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"2x"),(0,n.kt)("td",{parentName:"tr",align:"center"},"12d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"3x"),(0,n.kt)("td",{parentName:"tr",align:"center"},"24d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"4x"),(0,n.kt)("td",{parentName:"tr",align:"center"},"48d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"5x"),(0,n.kt)("td",{parentName:"tr",align:"center"},"96d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"6x"),(0,n.kt)("td",{parentName:"tr",align:"center"},"192d")))),(0,n.kt)("h2",{id:"claiming-your-rewards"},"Claiming Your Rewards"),(0,n.kt)("p",null,"As they keep their HDX staked, ",(0,n.kt)("strong",{parentName:"p"},"users accumulate rewards over time"),". These rewards become claimable subject to a bonding curve which is influenced by the boosts from action points (see above)."),(0,n.kt)("p",null,"At any given time, ",(0,n.kt)("strong",{parentName:"p"},"stakers can claim")," (a portion of) their claimable rewards. By doing so, however, they ",(0,n.kt)("strong",{parentName:"p"},"forfeit the remainder of their non-claimable rewards"),". These rewards are ",(0,n.kt)("strong",{parentName:"p"},"automatically transferred back to the staking rewards pot")," which ",(0,n.kt)("strong",{parentName:"p"},"redistributes them to all other stakers"),". Furthermore, claiming ",(0,n.kt)("strong",{parentName:"p"},"resets the past action points of the user"),", sending users back to the beginning of the bonding curve for future rewards from staking."),(0,n.kt)("p",null,"This mechanism creates an interesting ",(0,n.kt)("strong",{parentName:"p"},"gamification dynamic"),": By ",(0,n.kt)("strong",{parentName:"p"},"remaining longer in the pool of stakers"),", users not only ",(0,n.kt)("strong",{parentName:"p"},"unlock a greater part")," of their allocated rewards - they also have the chance to receive a ",(0,n.kt)("strong",{parentName:"p"},"juicy portion of rewards from other stakers who claim or exit early"),"."),(0,n.kt)("p",null,"Happy staking!"))}m.isMDXComponent=!0}}]);