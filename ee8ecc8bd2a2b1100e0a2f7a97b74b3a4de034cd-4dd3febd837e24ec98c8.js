(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"6uTu":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("P93M");var i=()=>{const{state:{theme:e,style:t},dispatch:n}=Object(r.useContext)(o.a);return{theme:e,style:t,setTheme:e=>{n({type:"CHANGE_THEME",value:e})}}},c=n("TJpk"),u=n.n(c),l=n("t8Zj"),s=n("gbIQ"),T=n("WfPO"),f=n.n(T),E=n("Wbzz");n("bspC");var d=({title:e,color:t,path:n,className:r})=>a.a.createElement(E.a,{className:"cursor-pointer px-4 py-2 text-center w-full",activeClassName:"border leading-6 font-medium rounded-md text-purple-800 bg-white",activeStyle:{color:t,borderColor:t},to:n,color:"gray-600"},e);var p=({menuItems:e})=>a.a.createElement("div",{className:"menu flex md:flex-col flex-1 items-center md:mr-4"},e.map((e,t)=>{const n=0===t;return a.a.createElement(d,Object.assign({key:""+e.title+t,className:"menu-item"},e,{active:n}))})),A=n("M7l7"),m=n.n(A);function M({sizeX:e,sizeY:t}){const n=Math.ceil(e/16),r=Math.ceil(t/16);return a.a.createElement("div",{className:"flex-col hidden md:flex"},Object(l.a)(Array(r)).map((e,t)=>a.a.createElement("div",{className:"flex mb-3",key:t},Object(l.a)(Array(n)).map((e,t)=>a.a.createElement("div",{key:t,className:"rounded-full h-1 w-1 bg-gray-200 ml-3"})))))}function y({children:e}){return a.a.createElement("div",{className:"flex-col flex h-full items-center justify-center flex-1 md:flex-row md:-ml-16 md:justify-start"},e)}function N({avatarUrl:e,userName:t}){return a.a.createElement("img",{className:"rounded-full h-36 mt-10 md:mt-0 mr-4",src:e,alt:"foto de "+t})}function g({name:e,bio:t,location:n}){return a.a.createElement("div",{className:"flex flex-col flex-1 justify-center items-center md:items-start"},a.a.createElement(s.a,{value:e,size:"3xl",weight:"semibold",color:"gray-600"}),a.a.createElement(s.a,{size:"md",value:t,color:"gray-600"}),a.a.createElement("div",{className:"flex mt-3"},a.a.createElement("img",{className:"h-5 mr-1",src:f.a,alt:"Minha localidade"}),a.a.createElement(s.a,{size:"sm",value:n,color:"gray-600"})))}var S=function({personalData:e}){return a.a.createElement("div",{className:"h-96 border-b border-gray-200 flex"},a.a.createElement(M,{sizeX:"315",sizeY:"384"}),a.a.createElement(y,null,a.a.createElement(N,{avatarUrl:e.avatarUrl,userName:e.name}),a.a.createElement(g,e),a.a.createElement(p,{menuItems:m.a})))};t.a=function({personalData:e,children:t,socialMedias:n}){const{theme:o,setTheme:c}=i();return Object(r.useEffect)(()=>{document.body.style.backgroundColor=o.background},[o.background]),Object(r.useEffect)(()=>{setTimeout(()=>{const e=localStorage.getItem("theme");c(e)})},[]),a.a.createElement("div",null,a.a.createElement(S,{personalData:e}),a.a.createElement(u.a,{title:"Victor Mesquita - Fullstack developer"}),t)}},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=n("q1tI"),o=r(a),i=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function T(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var c=a.prototype;return c.shouldComponentUpdate=function(e){return!i(e,this.props)},c.componentWillMount=function(){s.push(this),T()},c.componentDidUpdate=function(){T()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),T()},c.render=function(){return o.createElement(r,this.props)},a}(a.Component);return c(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(f,"canUseDOM",u),f}}},Gytx:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),u=0;u<o.length;u++){var l=o[u];if(!c(l))return!1;var s=e[l],T=t[l];if(!1===(a=n?n.call(r,s,T,l):void 0)||void 0===a&&s!==T)return!1}return!0}},M7l7:function(e,t){e.exports=[{title:"Sobre",path:"/",color:"#38BDF8"},{title:"Projetos",path:"/projects",color:"#7C3AED"},{title:"Contato",path:"/contact",color:"#475569"}]},OKOb:function(e,t){e.exports={aboutMe:{title:"Sobre mim",subTitle:"Olá, sou tag[Victor Mesquita]tag, um apaixonado desenvolvedor de apps e serviços com experiência em amplas áreas do mercado. Meu interesse pela área começou muito cedo e aos 13 anos eu já era um entusiasta da profissão. \\n \\n Desde então tenho me dedicado a aprender cada vez mais tecnologias, buscando sempre novos conhecimentos e atualizações. \\n Atualmente tenho experiência em tecnologias de ponta do mercado, como tag[.NET Core]tag, tag[Kubernetes]tag, tag[Vuejs]tag, tag[React]tag e tag[NodeJs]tag. \\n \\n Mas nunca acho que já sei o bastante, afinal de contas o aprendizado é tag[CONSTANT]tag. \\n",icon:"/img/check.png"},timeline:{title:"Linha do tempo",subTitle:"Conheca um pouco da minha história contada pelo tempo",icon:"/img/time-line.png"},projects:{title:"Projetos",subTitle:"Conheca um pouco sobre os projetos no qual tive o prazer de trabalhar!",icon:"/img/projects.svg"},contact:{title:"Entre em contato",subTitle:"Deseja entrar em contato? utilize minhas rede sociais ou meu e-mail",icon:"/img/contact.svg"}}},STHm:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("gbIQ");n("kEuD");const i=e=>a.a.createElement("div",{className:"flex flex-col w-full items-center px-10 py-20"},a.a.createElement(c,e),a.a.createElement(o.a,{className:"max-w-6xl",size:"lg",color:"gray-400",value:e.subTitle}),e.children);function c({title:e,icon:t,iconSize:n}){return a.a.createElement("div",{className:"flex items-center mb-4"},a.a.createElement("img",{className:"mr-2 "+n,src:t,alt:""+e}),a.a.createElement(o.a,{weight:"semibold",color:"gray-600",size:"4xl",value:e}))}i.defaultProps={iconSize:"h-7"},t.a=i},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=T(n("q1tI")),i=T(n("17x9")),c=T(n("8+s/")),u=T(n("bmMU")),l=n("v1p5"),s=n("hFT/");function T(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p,A,m,M=(0,c.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),y=(p=M,m=A=function(e){function t(){return E(this,t),d(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(a.type){case s.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=c,t.titleAttributes=r({},i),t));case s.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},i)});case s.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},i)})}return r({},o,((n={})[a.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=f(a,["children"]),c=(0,l.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=f(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(p,a)},a(t,null,[{key:"canUseDOM",set:function(e){p.canUseDOM=e}}]),t}(o.default.Component),A.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},A.defaultProps={defer:!0,encodeSpecialCharacters:!0},A.peek=p.peek,A.rewind=function(){var e=p.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},m);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},WfPO:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNiAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjgyMDQgMTIuODIwMkw5LjE0ODAyIDE2LjQ5MjZDOC45ODc0MiAxNi42NTMzIDguNzk2NzEgMTYuNzgwOSA4LjU4Njc4IDE2Ljg2NzlDOC4zNzY4NiAxNi45NTQ5IDguMTUxODUgMTYuOTk5NyA3LjkyNDYxIDE2Ljk5OTdDNy42OTczNyAxNi45OTk3IDcuNDcyMzYgMTYuOTU0OSA3LjI2MjQzIDE2Ljg2NzlDNy4wNTI1MSAxNi43ODA5IDYuODYxOCAxNi42NTMzIDYuNzAxMTkgMTYuNDkyNkwzLjAyNzkyIDEyLjgyMDJDMi4wNTk1OSAxMS44NTE4IDEuNDAwMTYgMTAuNjE4IDEuMTMzMDIgOS4yNzQ4OEMwLjg2NTg4MSA3LjkzMTczIDEuMDAzMDIgNi41Mzk1MyAxLjUyNzExIDUuMjc0MzJDMi4wNTExOSA0LjAwOTEyIDIuOTM4NjggMi45Mjc3MyA0LjA3NzM1IDIuMTY2OTFDNS4yMTYwMiAxLjQwNjA5IDYuNTU0NzIgMSA3LjkyNDE4IDFDOS4yOTM2MyAxIDEwLjYzMjMgMS40MDYwOSAxMS43NzEgMi4xNjY5MUMxMi45MDk3IDIuOTI3NzMgMTMuNzk3MiA0LjAwOTEyIDE0LjMyMTIgNS4yNzQzMkMxNC44NDUzIDYuNTM5NTMgMTQuOTgyNSA3LjkzMTczIDE0LjcxNTMgOS4yNzQ4OEMxNC40NDgyIDEwLjYxOCAxMy43ODg4IDExLjg1MTggMTIuODIwNCAxMi44MjAyVjEyLjgyMDJaIiBzdHJva2U9IiM0NzU1NjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOS43NjAyNSA5Ljc1OTk1QzEwLjI0NzIgOS4yNzMgMTAuNTIwOCA4LjYxMjU1IDEwLjUyMDggNy45MjM5QzEwLjUyMDggNy4yMzUyNCAxMC4yNDcyIDYuNTc0OCA5Ljc2MDI1IDYuMDg3ODVDOS4yNzMzIDUuNjAwOSA4LjYxMjg1IDUuMzI3MzMgNy45MjQyIDUuMzI3MzNDNy4yMzU1NSA1LjMyNzMzIDYuNTc1MSA1LjYwMDkgNi4wODgxNSA2LjA4Nzg1QzUuNjAxMiA2LjU3NDggNS4zMjc2NCA3LjIzNTI0IDUuMzI3NjQgNy45MjM5QzUuMzI3NjQgOC42MTI1NSA1LjYwMTIgOS4yNzMgNi4wODgxNSA5Ljc1OTk1QzYuNTc1MSAxMC4yNDY5IDcuMjM1NTUgMTAuNTIwNSA3LjkyNDIgMTAuNTIwNUM4LjYxMjg1IDEwLjUyMDUgOS4yNzMzIDEwLjI0NjkgOS43NjAyNSA5Ljc1OTk1WiIgc3Ryb2tlPSIjNDc1NTY5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="},bmMU:function(e,t,n){"use strict";var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,u,l,s=r(t),T=r(n);if(s&&T){if((u=t.length)!=n.length)return!1;for(c=u;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(s!=T)return!1;var f=t instanceof Date,E=n instanceof Date;if(f!=E)return!1;if(f&&E)return t.getTime()==n.getTime();var d=t instanceof RegExp,p=n instanceof RegExp;if(d!=p)return!1;if(d&&p)return t.toString()==n.toString();var A=a(t);if((u=A.length)!==a(n).length)return!1;for(c=u;0!=c--;)if(!o.call(n,A[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=u;0!=c--;)if(!("_owner"===(l=A[c])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},bspC:function(e,t,n){},gbIQ:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);function o(e){let t=e.value.toString().replace(/[^\\]\\n/g,"\n");return t=function(e){return e=(e=e.replace(/tag\[/g,"<span class='border-b-4 border-blue-400'>")).replace(/\]tag/g,"</span>")}(t),a.a.createElement("div",{className:i(e)+" whitespace-pre-wrap "+e.className,dangerouslySetInnerHTML:{__html:t}})}function i(e){const t={["text-"+e.size]:!!e.size,["font-"+e.weight]:!!e.weight,["text-"+e.color]:!!e.color};return Object.keys(t).filter(e=>t[e]).join(" ")}o.defaultProps={size:"sm",weight:"normal"},t.a=o},"hFT/":function(e,t,n){n("RUBk"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},kEuD:function(e,t,n){},v1p5:function(e,t,n){(function(e){n("RUBk"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=u(n("q1tI")),i=u(n("YVoz")),c=n("hFT/");function u(e){return e&&e.__esModule?e:{default:e}}var l,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(e){var t=A(e,c.TAG_NAMES.TITLE),n=A(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=A(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return A(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},d=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},p=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&g("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var u=o[i],l=u.toLowerCase();-1===t.indexOf(l)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(u)||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),u=0;u<o.length;u++){var l=o[u],s=(0,i.default)({},a[l],r[l]);a[l]=s}return e}),[]).reverse()},A=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},m=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){m(e)}),0)}),M=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:e.requestAnimationFrame||m,N="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||M:e.cancelAnimationFrame||M,g=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,h=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,T=e.styleTags,f=e.title,E=e.titleAttributes;O(c.TAG_NAMES.BODY,r),O(c.TAG_NAMES.HTML,a),I(f,E);var d={baseTag:v(c.TAG_NAMES.BASE,n),linkTags:v(c.TAG_NAMES.LINK,o),metaTags:v(c.TAG_NAMES.META,i),noscriptTags:v(c.TAG_NAMES.NOSCRIPT,u),scriptTags:v(c.TAG_NAMES.SCRIPT,s),styleTags:v(c.TAG_NAMES.STYLE,T)},p={},A={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(A[e]=d[e].oldTags)})),t&&t(),l(e,p,A)},b=function(e){return Array.isArray(e)?e.join(""):e},I=function(e,t){void 0!==e&&document.title!==e&&(document.title=b(e)),O(c.TAG_NAMES.TITLE,t)},O=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),u=0;u<i.length;u++){var l=i[u],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var T=o.indexOf(l);-1!==T&&o.splice(T,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},v=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},_=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},P=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,a=j(n,r),[o.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=_(n),o=b(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+s(o,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+s(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(t)},toString:function(){return _(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){S&&N(S),e.defer?S=y((function(){h(e,(function(){S=null}))})):(h(e),S=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.scriptTags,s=e.styleTags,T=e.title,f=void 0===T?"":T,E=e.titleAttributes;return{base:P(c.TAG_NAMES.BASE,t,r),bodyAttributes:P(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:P(c.ATTRIBUTE_NAMES.HTML,a,r),link:P(c.TAG_NAMES.LINK,o,r),meta:P(c.TAG_NAMES.META,i,r),noscript:P(c.TAG_NAMES.NOSCRIPT,u,r),script:P(c.TAG_NAMES.SCRIPT,l,r),style:P(c.TAG_NAMES.STYLE,s,r),title:P(c.TAG_NAMES.TITLE,{title:f,titleAttributes:E},r)}},t.reducePropsToState=function(e){return{baseTag:d([c.TAG_PROPERTIES.HREF],e),bodyAttributes:E(c.ATTRIBUTE_NAMES.BODY,e),defer:A(e,c.HELMET_PROPS.DEFER),encode:A(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(c.ATTRIBUTE_NAMES.HTML,e),linkTags:p(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:p(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:p(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:p(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:p(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:T(e),titleAttributes:E(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=g}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=ee8ecc8bd2a2b1100e0a2f7a97b74b3a4de034cd-4dd3febd837e24ec98c8.js.map