(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(91)),c=n(92),i={id:"polkadotjs_apps_local",title:"Conectarse a un nodo local"},s={unversionedId:"polkadotjs_apps_local",id:"polkadotjs_apps_local",isDocsHomePage:!1,title:"Conectarse a un nodo local",description:"Puede usar Polkadot/apps para conectarse a su nodo HydraDX local. Para este prop\xf3sito, necesita tener acceso al puerto 9944 que se usa para conexiones de websocket RPC.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/polkadotjs_apps_local.md",slug:"/polkadotjs_apps_local",permalink:"/es/polkadotjs_apps_local",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/polkadotjs_apps_local.md",version:"current",sidebar:"sidebar",previous:{title:"Set your Identity",permalink:"/es/identity"},next:{title:"Conectarse a un nodo p\xfablico",permalink:"/es/polkadotjs_apps_public"}},l=[{value:"Accediendo a su nodo local usando Polkadot/apps",id:"accessing-your-local-node-using-polkadotapps",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Puede usar Polkadot/apps para conectarse a su nodo HydraDX local. Para este prop\xf3sito, necesita tener acceso al puerto ",Object(o.b)("inlineCode",{parentName:"p"},"9944")," que se usa para conexiones de websocket RPC."),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Si est\xe1 ejecutando el nodo como un validador, le recomendamos encarecidamente que ponga en la lista negra el puerto ",Object(o.b)("inlineCode",{parentName:"p"},"9944")," para conexiones remotas. Este puerto podr\xeda ser abusado por terceros para degradar el rendimiento de su nodo, lo que puede resultar en cortes y p\xe9rdidas involuntarias de fondos. Debe usar el puerto ",Object(o.b)("inlineCode",{parentName:"p"},"9944")," para conectarse a su nodo validador solo cuando el nodo est\xe1 en su red local."))),Object(o.b)("h3",{id:"accessing-your-local-node-using-polkadotapps"},"Accediendo a su nodo local usando Polkadot/apps"),Object(o.b)("p",null,"Para acceder a tu nodo usa ",Object(o.b)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"Polkadot/apps")," y haga clic en en la esquina superior izquierda para cambiar la red."),Object(o.b)("div",null,Object(o.b)("img",{src:Object(c.a)("/polkadotjs-apps/PolkadotJS-APPS-1.png")})),Object(o.b)("p",null,"Luego de abrir el menu, haga  clic en ",Object(o.b)("strong",{parentName:"p"},"desarrollo")," y selecciona ",Object(o.b)("strong",{parentName:"p"},"Nodo local"),"."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{src:Object(c.a)("/polkadotjs-apps/local-1.png")})),Object(o.b)("p",null,"Ajuste la IP si es necesario y haga clic en ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Switch"))," para cambiar a su nodo local."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{src:Object(c.a)("/polkadotjs-apps/local-2.png")})),Object(o.b)("p",null,"Ahora deber\xeda estar conectado a su nodo local y poder interactuar con \xe9l."))}u.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var a=n(16),r=n(93);function o(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,c=o.forcePrependBaseUrl,i=void 0!==c&&c,s=o.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(i)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(o,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},93:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))}}]);