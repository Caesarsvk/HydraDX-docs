(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),s=(n(0),n(91)),i=n(92),o={id:"start_validating",title:"Devenez validateur"},c={unversionedId:"start_validating",id:"start_validating",isDocsHomePage:!1,title:"Devenez validateur",description:"Apr\xe8s avoir mis en place votre node HydraDX, vous devez engager (bonding) vos tokens HDX et d\xe9finir les cl\xe9s de validateur avant de pouvoir commencer \xe0 valider.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/start_validating.md",slug:"/start_validating",permalink:"/fr/start_validating",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/start_validating.md",version:"current",sidebar:"sidebar",previous:{title:"Devenez nominateur",permalink:"/fr/start_nominating"},next:{title:"Set your Identity",permalink:"/fr/identity"}},l=[{value:"01 Engagez vos tokens HDX",id:"01-bond-hdx-tokens",children:[]},{value:"02 G\xe9n\xe9rez des cl\xe9s de sessions",id:"02-generate-session-keys",children:[]},{value:"03 D\xe9finissez vos cl\xe9s de session",id:"03-set-your-session-keys",children:[]},{value:"04 Assurez vous que votre node est compl\xe8tement synchronis\xe9",id:"04-make-sure-that-your-node-is-fully-synced",children:[]},{value:"05 Commencer \xe0 valider",id:"05-start-validating",children:[]},{value:"06 V\xe9rifier le statut de votre node de validateur",id:"06-check-the-status-of-your-validator-node",children:[]}],d={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Apr\xe8s avoir ",Object(s.b)("a",{parentName:"p",href:"/node_setup"},"mis en place votre node HydraDX"),", vous devez engager (bonding) vos tokens HDX et d\xe9finir les cl\xe9s de validateur avant de pouvoir commencer \xe0 valider."),Object(s.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"Faire fonctionner un node de validateur requiert certaines comp\xe9tences techniques for l'installation correcte du node, et garantir sa dur\xe9e de fonctionnement. Nous exigeons aussi que les validateurs fassent fonctionner leur node en utilisant la version stable la plus r\xe9cente. Si vous n'\xeates pas s\xfbr de ce que vous faites ici, nous vous recommandons de ",Object(s.b)("a",{parentName:"p",href:"/start_nominating"},"d\xe9l\xe9guer vos HDX")," \xe0 un validateur exp\xe9riment\xe9. Ainsi, vous vous prot\xe9gez vous-m\xeame et vos nominateurs contre une perte de fonds involontaire."))),Object(s.b)("h2",{id:"01-bond-hdx-tokens"},"01 Engagez vos tokens HDX"),Object(s.b)("p",null,"Afin de prendre part au r\xe9seau en tant que node validateur, vous devez engager une certaine somme de tokens HDX. Si vous n'avez aucun HDX, il n'est pas possible de participer \xe0 l'\xe9tape initiale du testnet. D'\xe9xcitantes nouvelles vont \xeatre annonc\xe9es par l'\xe9quipe dans les prochaines semaines, donc restez \xe0 l'aff\xfbt et souscrivez \xe0 notre newsletter."),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"\xcates-vous toujours en possession de vos tokens xHDX que vous avez achet\xe9 pendant l'\xe9v\xe8nement de vente \"Balancer LBP\"? Vous devez d'abord ",Object(s.b)("a",{parentName:"p",href:"/claim"},"r\xe9cup\xe9rer vos HDX")," avant de continuer."))),Object(s.b)("p",null,"Pour lier des HDX, ouvrez Polkadot/apps, et connectez vous \xe0 un des",Object(s.b)("a",{parentName:"p",href:"/polkadotjs_apps_public"},"Nodes HydraDX RPC publique"),". Assurez vous que vous pouvez voir votre ",Object(s.b)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts"},"solde"),"."),Object(s.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},'Les tokens HDX engag\xe9s sont en jeu pour garantir la s\xe9curit\xe9 du r\xe9seau. Les comportements non conformes du node validateur peuvent \xeatre punis par un "slashing" qui peut r\xe9sulter par une perte involontaire de fonds. Nous recommandons seulement les personnes \xe9xperiment\xe9es \xe0 devenir validateur.'))),Object(s.b)("p",null,"Pour la prochaine \xe9tape, allez dans ",Object(s.b)("em",{parentName:"p"},"Network")," > ",Object(s.b)("em",{parentName:"p"},"Staking")," > ",Object(s.b)("em",{parentName:"p"},"Account actions")," > ",Object(s.b)("em",{parentName:"p"},"+ Stash")),Object(s.b)("p",null,"ou pour l'interface en fran\xe7ais:"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"R\xe9seau")," > ",Object(s.b)("em",{parentName:"p"},"Staking")," > ",Object(s.b)("em",{parentName:"p"},"Actions sur le compte")," > ",Object(s.b)("em",{parentName:"p"},"+ R\xe9serve")),Object(s.b)("div",{style:{textAlign:"center"}},Object(s.b)("img",{src:Object(i.a)("/validator-guide/bond-hdx-1.png")})),Object(s.b)("p",null,"Apr\xe8s avoir cliqu\xe9 sur le bouton R\xe9serve, vous devriez voir les pr\xe9f\xe9rences d'engagement (bonding)  avec quatre champs de saisie modifiables:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"stash account"),": Le compte contenant la plupart de vos tokens HDX. Les HDX vont \xeatre d\xe9l\xe9gu\xe9s depuis ce compte."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"controller account"),": un compte contenant une petite partie de HDX n\xe9cessaires pour couvrir les frais associ\xe9s \xe0 la mise en route et \xe0 l'arr\xeat du processus de validation."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"value bonded"),": La somme de HDX que vous engagez. N'engagez pas tous les HDX que vous poss\xe9dez - gardez en quelques un pour couvrir les frais de transactions qui surviendront plus tard."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"payment destination"),": Le compte sur lequel les r\xe9compenses de validation seront envoy\xe9es.")),Object(s.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"N'engagez pas tous vos tokens HDX disponibles. Gardez une petite r\xe9serve pour couvrir les frais de transaction. Si vous engagez tous vos tokens HDX, vous pourriez ne pas \xeatre capable de signer la transaction pour la mise en route du processus de validation."))),Object(s.b)("p",null,"Apr\xe8s avoir ajust\xe9 vos pr\xe9f\xe9rences d'engagement, cliquez sur Allouer et signez la transaction pour compl\xe9ter la proc\xe9dure d'engagement."),Object(s.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"Il est recommand\xe9 d'utiliser deux comptes diff\xe9rents, un pour le compte contr\xf4leur et un autre pour le compte de la r\xe9serve. Toutefois, puisque les transferts sont d\xe9sactiv\xe9s sur Snakenet, Il n'est pour l'instant pas possible d'utiliser des comptes s\xe9par\xe9s. Nous recommandons fortement l'utilisation de comptes de r\xe9serve et contr\xf4leur diff\xe9rents d\xe8s que cette fonctionnalit\xe9 sera disponible."))),Object(s.b)("div",{style:{textAlign:"center"}},Object(s.b)("img",{src:Object(i.a)("/validator-guide/bond-hdx-2.png")})),Object(s.b)("h2",{id:"02-generate-session-keys"},"02 G\xe9n\xe9rez des cl\xe9s de sessions"),Object(s.b)("p",null,"La deuxi\xe8me \xe9tape consiste \xe0 g\xe9n\xe9rer vos cl\xe9s de session. Les cl\xe9s de session sont utilis\xe9es pour associer le node validateur avec votre compte de contr\xf4leur et les HDX d\xe9l\xe9gu\xe9s (staked). Il est donc important qu'elles soient install\xe9es correctement. "),Object(s.b)("p",null,"Pour g\xe9n\xe9rer vos cl\xe9s de session, ex\xe9cuter sur le node:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},'$ curl -H "Content-Type: application/json" -d \'{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}\' http://localhost:9933\n\n# Example output\n{"jsonrpc":"2.0","result":"0x9257c7a88f94f858a6f477743b4180f0c9a0630a1cea85c3f47dc6ca78e503767089bebe02b18765232ecd67b35a7fb18fc3027613840f27aca5a5cc300775391cf298af0f0e0342d0d0d873b1ec703009c6816a471c64b5394267c6fc583c31884ac83d9fed55d5379bbe1579601872ccc577ad044dd449848da1f830dd3e45","id":1}\n')),Object(s.b)("p",null,"Vous trouverez vos cl\xe9s de session sous la partie ",Object(s.b)("em",{parentName:"p"},"result")," de la sortie (",Object(s.b)("inlineCode",{parentName:"p"},"0x9257...")," dans l'exemple de sortie ci-dessus)."),Object(s.b)("h2",{id:"03-set-your-session-keys"},"03 D\xe9finissez vos cl\xe9s de session"),Object(s.b)("p",null,"Pour associer les cl\xe9s de session g\xe9n\xe9r\xe9es avec votre compte de contr\xf4leur, ouvrez dans Polkadot/apps:",Object(s.b)("em",{parentName:"p"},"Developer")," > ",Object(s.b)("em",{parentName:"p"},"Extrinsics")),Object(s.b)("p",null,"ou pour l'interface en fran\xe7ais:"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"D\xe9veloppeur")," > ",Object(s.b)("em",{parentName:"p"},"Extrins\xe8ques")),Object(s.b)("p",null,"Remplissez les champs de saisie:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("em",{parentName:"li"},"using selected account"),": s\xe9lectionnez votre compte de contr\xf4leur;"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("em",{parentName:"li"},"submit the following extrinsic"),": choisissez ",Object(s.b)("inlineCode",{parentName:"li"},"session")," dans la barre de gauche et ",Object(s.b)("inlineCode",{parentName:"li"},"setKeys")," \xe0 droite;"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("em",{parentName:"li"},"keys"),": entrez votre cl\xe9 de session de l'\xe9tape pr\xe9c\xe9dente;"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("em",{parentName:"li"},"proof"),": ",Object(s.b)("inlineCode",{parentName:"li"},"0"),".")),Object(s.b)("p",null,"Pour terminer, cliquez sur ",Object(s.b)("em",{parentName:"p"},"soumettre la transaction")," et signez la transaction."),Object(s.b)("div",{style:{textAlign:"center"}},Object(s.b)("img",{src:Object(i.a)("/validator-guide/set-session-keys-1.png")})),Object(s.b)("h2",{id:"04-make-sure-that-your-node-is-fully-synced"},"04 Assurez vous que votre node est compl\xe8tement synchronis\xe9"),Object(s.b)("p",null,"Avant de continuer, vous devriez vous assurer que votre node fonctionne et que le processus de synchronisation est enti\xe8rement termin\xe9e. La meilleure fa\xe7on de v\xe9rifier l'\xe9tat de la synchronisation est de v\xe9rifier directement sur le node :"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"\n$ journalctl -f -u hydradx-validator.service\n\n# The output will be similar to this\nMar 22 18:37:38 Ubuntu-2010-groovy-64-minimal hydra-dx[232761]: 2021-03-22 18:37:38  \ud83d\udca4 \nIdle (52 peers), best: #622028 (0x5f5a\u20261041), finalized #622025 (0x5b21\u2026a746), \u2b07 9.1kiB/s \u2b06 6.1kiB/s\n\n")),Object(s.b)("p",null,"Vous pouvez comparer le num\xe9ro de bloc de la sortie (dans l'exemple ci-dessus:",Object(s.b)("inlineCode",{parentName:"p"},"#622025"),") avec le num\xe9ro de bloc courant que vous pouvez trouver dans ",Object(s.b)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/explorer"},"Polkadot/apps Explorateur"),". Au moment de la r\xe9daction nous sommes au bloc ",Object(s.b)("inlineCode",{parentName:"p"},"#622240"),", ce qui signifie que le node utilis\xe9 pour l'exemple n'est pas totalement synchronis\xe9. "),Object(s.b)("p",null,"Veuillez attendre que le num\xe9ro de bloc apparaissant dans votre journal local corresponde au num\xe9ro de bloc du r\xe9seau."),Object(s.b)("h2",{id:"05-start-validating"},"05 Commencer \xe0 valider"),Object(s.b)("p",null,"Pour commencer \xe0 valider, naviguer dans Polkadot/apps:"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Network")," > ",Object(s.b)("em",{parentName:"p"},"Staking")," > ",Object(s.b)("em",{parentName:"p"},"Account actions")," > ",Object(s.b)("em",{parentName:"p"},"Validate")," (Bouton \xe0 c\xf4t\xe9 de vos HDX engag\xe9s)"),Object(s.b)("p",null,"ou pour l'interface en fran\xe7ais:"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"R\xe9seau")," > ",Object(s.b)("em",{parentName:"p"},"Staking")," > ",Object(s.b)("em",{parentName:"p"},"Actions sur le compte")," > ",Object(s.b)("em",{parentName:"p"},"Valider")," (Bouton \xe0 c\xf4t\xe9 de vos HDX engag\xe9s)"),Object(s.b)("div",{style:{textAlign:"center"}},Object(s.b)("img",{src:Object(i.a)("/validator-guide/validate-1.png")})),Object(s.b)("p",null,"Apr\xe8s avoir cliqu\xe9 sur le bouton ",Object(s.b)("em",{parentName:"p"},"valider")," vous devriez voir une fen\xeatre popup appel\xe9e ",Object(s.b)("em",{parentName:"p"},"d\xe9finissez vos pr\xe9f\xe9rences de validateur"),". Ici, vous devez d\xe9finir votre ",Object(s.b)("em",{parentName:"p"},"Reward commission percentage"),". C'est la part de r\xe9compense qui vous sera pay\xe9e. Le reste des r\xe9compenses sera partag\xe9 parmi les nominateurs en accord avec leur stake (d\xe9l\xe9gation).  Si vous d\xe9cidez de ne prendre aucune commission de r\xe9compense, vous pouvez d\xe9finir le pourcentage \xe0 0."),Object(s.b)("p",null,"Pour confirmer, Cliquez ",Object(s.b)("em",{parentName:"p"},"Valider")," et signez la transaction."),Object(s.b)("div",{style:{textAlign:"center"}},Object(s.b)("img",{src:Object(i.a)("/validator-guide/validate-2.png")})),Object(s.b)("h2",{id:"06-check-the-status-of-your-validator-node"},"06 V\xe9rifier le statut de votre node de validateur"),Object(s.b)("p",null,"Vous pouvez v\xe9rifier le statut de votre node de validateur \xe0 Polkadot/apps dans: ",Object(s.b)("em",{parentName:"p"},"Network")," > ",Object(s.b)("em",{parentName:"p"},"Staking")," > ",Object(s.b)("em",{parentName:"p"},"Staking overview")),Object(s.b)("p",null,"ou pour l'interface en fran\xe7ais:"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"r\xe9seau")," > ",Object(s.b)("em",{parentName:"p"},"Staking")," > ",Object(s.b)("em",{parentName:"p"},"Staking overview")),Object(s.b)("p",null,"Cette onglet offre un aper\xe7u de tous les validateurs actifs connect\xe9s au r\xe9seau. En haut, il y a une indication du nombre de places de validateurs disponibles, ainsi que le nombre de nodes qui ont signal\xe9s leur intention d'\xeatre des validateurs. Vous pouvez confirmer si votre node est en liste d'attente en cliquant sur l'onglet ",Object(s.b)("em",{parentName:"p"},"En attente"),"."),Object(s.b)("p",null,"Votre node validateur restera en liste d'attente jusqu'\xe0 ce qu'il soit choisi pour \xeatre inclus dans l'ensemble des validateurs actifs. L'ensemble des validateurs est mis \xe0 jour \xe0 chaque \xe8re ce qui permet \xe0 de nouveaux nodes d'\xeatre inclus, \xe0 condition qu'il y ait des places disponibles."),Object(s.b)("div",{style:{textAlign:"center"}},Object(s.b)("img",{src:Object(i.a)("/validator-guide/validate-3.png")})),Object(s.b)("p",null,"Merci de soutenir HydraDX en devenant un validateur Snakenet ! \ud83c\udf89"))}u.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||s;return n?r.a.createElement(m,o(o({ref:t},l),{},{components:n})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var a=n(16),r=n(93);function s(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,s=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var s=void 0===a?{}:a,i=s.forcePrependBaseUrl,o=void 0!==i&&i,c=s.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(o)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+d:d}(s,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,s().withBaseUrl)(e,t)}},93:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))}}]);