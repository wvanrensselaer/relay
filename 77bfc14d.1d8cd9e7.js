(window.webpackJsonp=window.webpackJsonp||[]).push([[514],{1142:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,f=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return t?a.a.createElement(f,l(l({ref:n},s),{},{components:t})):a.a.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},1143:function(e,n,t){"use strict";(function(e){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return a(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.bloks=void 0,n.bloks=i(t(1146));const o=["internal","external"];let l;try{l=t(1144).usePluginData}catch(p){l=null}function c(e){return u(e),d()?"internal"in e?s(e.internal):[]:"external"in e?s(e.external):[]}function s(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const n=Object.keys(e).filter((e=>!o.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${o}`)}function d(){return e.env.FB_INTERNAL||l&&l("internaldocs-fb").FB_INTERNAL}n.fbContent=c,n.fbInternalOnly=function(e){return c({internal:e})},n.validateFbContentArgs=u,n.isInternal=d,n.FbInternalOnly=function(e){return d()?e.children:null},n.OssOnly=function(e){return d()?null:e.children}}).call(this,t(1145))},1144:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return a})),t.d(n,"useAllPluginInstancesData",(function(){return i})),t.d(n,"usePluginData",(function(){return o}));var r=t(22);function a(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var n=a()[e];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return n}function o(e,n){void 0===n&&(n="default");var t=i(e)[n];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+n);return t}},1145:function(e,n){var t,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,s=[],u=!1,d=-1;function p(){u&&c&&(u=!1,c.length?s=c.concat(s):d=-1,s.length&&b())}function b(){if(!u){var e=l(p);u=!0;for(var n=s.length;n;){for(c=s,s=[];++d<n;)c&&c[d].run();d=-1,n=s.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function f(e,n){this.fun=e,this.array=n}function m(){}a.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];s.push(new f(e,n)),1!==s.length||u||l(b)},f.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=m,a.addListener=m,a.once=m,a.off=m,a.removeListener=m,a.removeAllListeners=m,a.emit=m,a.prependListener=m,a.prependOnceListener=m,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},1146:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(n){i(n)}}function l(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const a=t(1147);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield a.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},1147:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(n){i(n)}}function l(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let a=!1,i=0;const o={};n.call=function(e){return r(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in o||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?o[n].resolve(e.data.response):o[n].reject(new Error(e.data.error)),delete o[n]})));const n=i++,t=new Promise(((e,t)=>{o[n]={resolve:e,reject:t}})),r={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(r,l),t}))}},1148:function(e,n,t){"use strict";t(61);var r=t(1143),a=t(0);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var n=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),n)}var l=function(){var e=a.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},s=function(){return a.createElement(o,null,a.createElement(c,null),a.createElement(l,null))},u=function(){return a.createElement(o,null,a.createElement(l,null))};n.a=function(){return Object(r.fbContent)({internal:a.createElement(s,null),external:a.createElement(u,null)})}},600:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(8),i=(t(0),t(1142)),o=t(1148),l=t(1143),c={id:"variables",title:"Variables",slug:"/guided-tour/rendering/variables/",description:"Relay guide to query variables",keywords:["query","variables"]},s={unversionedId:"guided-tour/rendering/variables",id:"guided-tour/rendering/variables",isDocsHomePage:!1,title:"Variables",description:"Relay guide to query variables",source:"@site/docs/guided-tour/rendering/variables.md",slug:"/guided-tour/rendering/variables/",permalink:"/docs/next/guided-tour/rendering/variables/",editUrl:"https://github.com/facebook/relay/edit/master/website/docs/guided-tour/rendering/variables.md",version:"current",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1618849067,sidebar:"docs",previous:{title:"Fragments",permalink:"/docs/next/guided-tour/rendering/fragments/"},next:{title:"Loading States with Suspense",permalink:"/docs/next/guided-tour/rendering/loading-states/"}},u=[{value:"@arguments and @argumentDefinitions",id:"arguments-and-argumentdefinitions",children:[]},{value:"Accessing GraphQL Variables At Runtime",id:"accessing-graphql-variables-at-runtime",children:[]}],d={toc:u};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You may have noticed that the query declarations in our examples above contain references to an ",Object(i.b)("inlineCode",{parentName:"p"},"$id")," symbol inside the GraphQL code: these are ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphql.org/learn/queries/#variables"}),"GraphQL Variables"),"."),Object(i.b)("p",null,"GraphQL variables are a construct that allows referencing dynamic values inside a GraphQL query. When fetching a query from the server, we also need to provide as input the actual set of values to use for the variables declared inside the query:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query UserQuery($id: ID!) {\n\n  # The value of $id is used as input to the user() call:\n  user(id: $id) {\n    id\n    name\n  }\n\n}\n")),Object(i.b)("p",null,"In the above, ",Object(i.b)("inlineCode",{parentName:"p"},"ID!")," is the type of the ",Object(i.b)("inlineCode",{parentName:"p"},"$id")," variable. That is, it is a required ID."),Object(i.b)("p",null,"When sending a network request to fetch the query above, we need to provide both the query, and the variables to be used for this particular execution of the query.  For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'# Query:\nquery UserQuery($id: ID!) {\n  # ...\n}\n\n# Variables:\n{"id": 4}\n')),Object(i.b)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(i.b)("p",null,"Fetching the above query and variables from the server would produce the following response, which can also be visualized in ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://fburl.com/graphiql/kiuar058"}),"GraphiQL"),":")),Object(i.b)(l.OssOnly,{mdxType:"OssOnly"},Object(i.b)("p",null,"Fetching the above query and variables from the server would produce the following response:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "user": {\n      "id": "4",\n      "name": "Mark Zuckerberg"\n    }\n  }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Note that changing the value of the ",Object(i.b)("inlineCode",{parentName:"li"},"id")," variable used as input would of course produce a different response.")),Object(i.b)("hr",null),Object(i.b)("p",null,"Fragments can also reference variables that have been declared by a query:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"fragment UserFragment on User {\n  name\n  profile_picture(scale: $scale) {\n    uri\n  }\n}\n\n\nquery ViewerQuery($scale: Float!) {\n  viewer {\n    actor {\n      ...UserFragment\n    }\n  }\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Even though the fragment above doesn't ",Object(i.b)("em",{parentName:"li"},"declare")," the ",Object(i.b)("inlineCode",{parentName:"li"},"$scale")," variable directly, it can still reference it. Doing so makes it so any query that includes this fragment, either directly or transitively, ",Object(i.b)("em",{parentName:"li"},"must")," declare the variable and its type, otherwise an error will be produced."),Object(i.b)("li",{parentName:"ul"},"In other words, ",Object(i.b)("em",{parentName:"li"},"query variables are available globally by any fragment that is a descendant of the query"),"."),Object(i.b)("li",{parentName:"ul"},"A fragment which references a global variable can only be included (directly or transitively) in a query which defines that global variable.")),Object(i.b)("p",null,"In Relay, fragment declarations inside components can also reference query variables:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function UserComponent(props: Props) {\n  const data = useFragment(\n    graphql`\n    fragment UserComponent_user on User {\n      name\n      profile_picture(scale: $scale) {\n        uri\n      }\n    }\n    `,\n    props.user,\n  );\n\n  return (...);\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The above fragment could be included by multiple queries, and rendered by different components, which means that any query that ends up rendering/including the above fragment ",Object(i.b)("em",{parentName:"li"},"must")," declare the ",Object(i.b)("inlineCode",{parentName:"li"},"$scale")," variable."),Object(i.b)("li",{parentName:"ul"},"If any query that happens to include this fragment ",Object(i.b)("em",{parentName:"li"},"doesn't")," declare the ",Object(i.b)("inlineCode",{parentName:"li"},"$scale")," variable, an error will be produced by the Relay Compiler at build time, ensuring that an incorrect query never gets sent to the server (sending a query with missing variable declarations will also produce an error in the server).")),Object(i.b)("h2",{id:"arguments-and-argumentdefinitions"},"@arguments and @argumentDefinitions"),Object(i.b)("p",null,"However, in order to prevent bloating queries with global variable declarations, Relay also provides a way to declare variables that are scoped locally to a fragment using  the ",Object(i.b)("inlineCode",{parentName:"p"},"@arguments")," and ",Object(i.b)("inlineCode",{parentName:"p"},"@argumentDefinitions")," directives:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'/**\n * Declare a fragment that accepts arguments with @argumentDefinitions\n */\n\nfunction PictureComponent(props) {\n  const data = useFragment(\n    graphql`\n      fragment PictureComponent_user on User\n        @argumentDefinitions(scale: {type: "Float!"}) {\n\n        # *`**$scale**`* is a local variable here, declared above\n        # as an argument *`**scale**`*, of type *`**Float!`*\n        profile_picture(scale: $scale) {\n          uri\n        }\n      }\n    `,\n    props.user,\n  );\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"/**\n * Include fragment using @arguments\n */\n\nfunction UserComponent(props) {\n  const data = useFragment(\n    graphql`\n      fragment UserComponent_user on User {\n        name\n\n        # Pass value of 2.0 for the *`*scale*`* variable\n        ...PictureComponent_user @arguments(scale: 2.0)\n      }\n    `,\n    props.user,\n  );\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"/**\n * Include same fragment using *_different_* @arguments\n */\n\nfunction OtherUserComponent(props) {\n  const data = useFragment(\n    graphql`\n      fragment OtherUserComponent_user on User {\n        name\n\n        # Pass a different value for the scale variable.\n        # The value can be another local or global variable:\n        ...PictureComponent_user @arguments(scale: $pictureScale)\n      }\n    `,\n    props.user,\n  );\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Note that when passing ",Object(i.b)("inlineCode",{parentName:"li"},"@arguments")," to a fragment, we can pass a literal value or pass another variable. The variable can be a global query variable, or another local variable declared via ",Object(i.b)("inlineCode",{parentName:"li"},"@argumentDefinitions"),"."),Object(i.b)("li",{parentName:"ul"},"When we actually fetch ",Object(i.b)("inlineCode",{parentName:"li"},"PictureComponent_user")," as part of a query, the ",Object(i.b)("inlineCode",{parentName:"li"},"scale")," value passed to the ",Object(i.b)("inlineCode",{parentName:"li"},"profile_picture")," field will depend on the argument that was provided by the parent of ",Object(i.b)("inlineCode",{parentName:"li"},"PictureComponent_user"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"For ",Object(i.b)("inlineCode",{parentName:"li"},"UserComponent_user")," the value of ",Object(i.b)("inlineCode",{parentName:"li"},"$scale")," will be 2.0."),Object(i.b)("li",{parentName:"ul"},"For ",Object(i.b)("inlineCode",{parentName:"li"},"OtherUserComponent_user"),", the value of ",Object(i.b)("inlineCode",{parentName:"li"},"$scale")," will be whatever value we pass to the server for the ",Object(i.b)("inlineCode",{parentName:"li"},"$pictureScale")," variable when we fetch the query.")))),Object(i.b)("p",null,"Fragments that expect arguments can also declare default values, making the arguments optional:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'/**\n * Declare a fragment that accepts arguments with default values\n */\n\nfunction PictureComponent(props) {\n  const data = useFragment(\n    graphql`\n      fragment PictureComponent_user on User\n        @argumentDefinitions(scale: {type: "Float!", defaultValue: 2.0}) {\n\n        # *`**$scale**`* is a local variable here, declared above\n        # as an argument *`**scale**`*, of type *`**Float!` with a default value of *`2.0**`**\n        profile_picture(scale: $scale) {\n          uri\n        }\n      }\n    `,\n    props.user,\n  );\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function UserComponent(props) {\n  const data = useFragment(\n    graphql`\n      fragment UserComponent_user on User {\n        name\n\n        # Do not pass an argument, value for scale will be **`2.0**`**\n        ...PictureComponent_user\n      }\n    `,\n    props.user,\n  );\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Not passing the argument to ",Object(i.b)("inlineCode",{parentName:"li"},"PictureComponent_user")," makes it use the default value for its locally declared ",Object(i.b)("inlineCode",{parentName:"li"},"$scale")," variable, in this case 2.0.")),Object(i.b)("h2",{id:"accessing-graphql-variables-at-runtime"},"Accessing GraphQL Variables At Runtime"),Object(i.b)("p",null,"If you want to access the variables that were set at the query root, the recommended approach is to pass the variables down the component tree in your application, using props, or your own application-specific context."),Object(i.b)("p",null,"Relay currently does not expose the resolved variables (i.e. after applying argument definitions) for a specific fragment, and you should very rarely need to do so."),Object(i.b)(o.a,{mdxType:"DocsRating"}))}p.isMDXComponent=!0}}]);