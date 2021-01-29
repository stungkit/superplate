(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||c;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),c=(n(0),n(115)),o={id:"svgr",title:"SVGR",sidebar_label:"SVGR"},i={unversionedId:"svgr",id:"svgr",isDocsHomePage:!1,title:"SVGR",description:"SVGR transforms SVG into ready to use components.",source:"@site/docs/svgr.md",slug:"/svgr",permalink:"/superplate/docs/svgr",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/svgr.md",version:"current",sidebar_label:"SVGR",sidebar:"someSidebar",previous:{title:"Axios",permalink:"/superplate/docs/axios"},next:{title:"Environment Variables(.env)",permalink:"/superplate/docs/env"}},s=[{value:"Using SVGR in your project without plugin",id:"using-svgr-in-your-project-without-plugin",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"SVGR transforms SVG into ready to use components.",Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://react-svgr.com/docs/getting-started/"}),"Refer to official documentation for detailed usage. ","\u2192")),Object(c.b)("p",null,"Run"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"npm run svgr\n")),Object(c.b)("p",null,"to produce components from svg's."),Object(c.b)("p",null,"This will transform svg's at ",Object(c.b)("inlineCode",{parentName:"p"},"public/icons")," to ",Object(c.b)("inlineCode",{parentName:"p"},".tsx")," components, puts them in ",Object(c.b)("inlineCode",{parentName:"p"},"src/components/icons")," ignoring existing ones."),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"After adding new svg icons, you must again run"),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"npm run svgr\n")),Object(c.b)("p",{parentName:"div"},"to produce components for newly added svg's."))),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://react-svgr.com/docs/options/"}),"Refer to official documentation for detailed usage.  ","\u2192")),Object(c.b)("h3",{id:"using-svgr-in-your-project-without-plugin"},"Using SVGR in your project without plugin"),Object(c.b)("p",null,"If svgr plugin isn't added, it can be used later independently"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"install svgr cli")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"npm install @svgr/cli --save-dev\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"add command to scripts")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:'title="package.json"',title:'"package.json"'}),'{\n    scripts: {\n        "svgr": "npx @svgr/cli -d src/components/icons --ignore-existing --icon --typescript public/icons"\n    }\n}\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"run")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"npm run svgr\n")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://react-svgr.com/docs/cli/"}),"Refer to official documentation for detailed usage  ","\u2192")))}l.isMDXComponent=!0}}]);