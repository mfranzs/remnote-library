(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],d=0,u=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&u.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);m&&m(e);while(u.length)u.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==s[o]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},r={app:0},s={app:0},i=[];function o(t){return l.p+"js/"+({library:"library"}[t]||t)+"."+{library:"dcd12850"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={library:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({library:"library"}[t]||t)+"."+{library:"dd2122c0"}[t]+".css",s=l.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var c=i[o],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===a||d===s))return e()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){c=u[o],d=c.getAttribute("data-href");if(d===a||d===s)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],m.parentNode.removeChild(m),n(i)},m.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(m)})).then((function(){r[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=i);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=o(t);var u=new Error;c=function(e){d.onerror=d.onload=null,clearTimeout(m);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}s[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/remnote-library/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var m=d;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"42ee":function(t,e,n){t.exports=n.p+"img/library-logo.4cec064c.png"},5033:function(t){t.exports=JSON.parse('{"com.github.hannesfrank.remnote-css-rem-types":{"author":{"email":"frankhannes@gmail.com","name":"Hannes Frank"},"categories":["icon"],"customCSSBlock":"-\\n- # Rem Type and Practice Direction\\n    - id: com.github.hannesfrank.remnote-css-rem-types\\n    - version: 1.0.0\\n    - ## Code\\n        - Make or move a new Custom CSS block here and copy&paste the second part from the library.","description":"Add icons for flashcard/rem types and practice directions.","homepage":"https://github.com/hannesfrank/remnote-css-rem-types","id":"com.github.hannesfrank.remnote-css-rem-types","install":[{"content":"@import URL(\\"https://hannesfrank.github.io/remnote-css-rem-types/everything.css\\");","method":"copy"}],"installCount":1337,"name":"Rem Type and Practice Direction","preview":"scrolls/rem-type-icons/custom_style.png","rating":5,"ratingCount":42,"shelf":"Custom CSS","thumb":"scrolls/rem-type-icons/remnote-css-card-rems-social.png","version":"1.0.0"},"com.github.hannesfrank.remnote-library.kanban-board":{"author":{"email":"frankhannes@gmail.com","name":"Hannes Frank"},"categories":["kanban"],"config":{"demo":"demo.rems","tags":"kanban"},"customCSSBlock":"-\\n- # Kanban Board\\n    - id: com.github.hannesfrank.remnote-library.kanban-board\\n    - version: 0.0.1\\n    - ## Code\\n        - Make or move a new Custom CSS block here and copy&paste the second part from the library.\\n    - ## Tags\\n        - kanban\\n    - ## Demo\\n        - My Kanban Board #kanban\\n            - Todo\\n                - Write Essay\\n                - Polish Kanban Board\\n            - Doing\\n                - Publish Kanban Board\\n            - Done\\n                - Make Kanban Board\\n            - Archive\\n                - Exercise","description":"Display and drag&drop rems on a kanban board.","homepage":"https://github.com/hannesfrank/remnote-library/tree/master/public/scrolls/kanban-board","id":"com.github.hannesfrank.remnote-library.kanban-board","install":[{"content":".tree-node-container[data-rem-container-tags~=kanban] > .TreeNode {\\n  display: flex;\\n  /* auto jumps when toggling/writing rems */ \\n  /* grid-template-columns: auto auto auto; */\\n  background-color: lightgrey;\\n  border-radius: 3px;\\n  padding-left: 0 !important;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=kanban] > .TreeNode > .tree-node-container {\\n  /* equal width columns */\\n  flex: 1 1 0;\\n  /* more based on content */\\n  /* flex: 1 1 auto; */\\n  background-color: rgb(160, 170, 256);\\n  margin: 6px;\\n  border-radius: 3px;\\n  position: relative;\\n  overflow: hidden;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=kanban] > .TreeNode > .tree-node-container:not(:first-child) {\\n  margin-left: 0;\\n}\\n\\n/* bullet point only on hover */\\n.tree-node-container[data-rem-container-tags~=kanban] > .TreeNode .tree-node-container > div:first-child:not(:hover) .rem-bullet__container {\\n  visibility: hidden;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=kanban] > .TreeNode > .tree-node-container > div:first-child {\\n  background-color: rgba(0, 0, 0, 0.09);\\n  margin: 0;\\n  border-bottom: 1px solid grey;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=kanban] > .TreeNode > .tree-node-container > .TreeNode {\\n  margin: 0 !important;\\n  padding: 0 !important;\\n  border: unset !important;\\n}\\n\\n/* Task cards */\\n.tree-node-container[data-rem-container-tags~=kanban] > .TreeNode > .tree-node-container > .TreeNode > .tree-node-container {\\n  background-color: white;\\n  margin: 5px;\\n  border-radius: 2px;\\n  box-shadow: 0 0 1px 0;\\n}\\n\\n/* Drag & Drop bullets */\\n.tree-node-container[data-rem-container-tags~=kanban] > .TreeNode > .tree-node-container > .TreeNode > .tree-node-container > div:first-child .rem-bullet__container .rem-bullet {\\n  width: 100%;\\n  height: 100%;\\n  background-color: lightgrey;\\n  border-radius: 0;\\n  border: unset;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=kanban] > .TreeNode > .tree-node-container > .TreeNode > .tree-node-container > div:first-child .rem-bullet__container .rem-bullet:before {\\n  content: \'\';\\n}\\n\\n.tree-node-container[data-rem-container-tags~=kanban] > .TreeNode > .tree-node-container > .TreeNode > .tree-node-container > div:first-child .rem-bullet__container {\\n  height: 100%;\\n  width: 20px;\\n  top: 0;\\n  left: 0;\\n  margin-top: 0 !important;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=kanban] > .TreeNode > .tree-node-container > .TreeNode > .tree-node-container > div:first-child .rem-text {\\n  padding-left: 25px;\\n  margin-left: 0;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=kanban] > .TreeNode > .tree-node-container:nth-child(1) {\\n  background-color: rgb(256, 200, 160);\\n}\\n\\n.tree-node-container[data-rem-container-tags~=kanban] > .TreeNode > .tree-node-container:nth-child(2) {\\n  background-color: rgb(256, 256, 190);\\n}\\n\\n.tree-node-container[data-rem-container-tags~=kanban] > .TreeNode > .tree-node-container:nth-child(3) {\\n  background-color: rgb(200, 256, 190);\\n}","file":"style.css","method":"copy"}],"installCount":1337,"name":"Kanban Board","preview":"scrolls/kanban-board/demo.gif","rating":5,"ratingCount":42,"shelf":"Custom CSS","thumb":"scrolls/kanban-board/thumb.png","version":"0.0.1"},"com.github.hannesfrank.remnote-library.pills":{"author":{"email":"frankhannes@gmail.com","name":"Hannes Frank"},"categories":["layout","list"],"config":{"demo":"demo.rems","tags":"list pills"},"customCSSBlock":"-\\n- # Inline Pills List\\n    - id: com.github.hannesfrank.remnote-library.pills\\n    - version: 0.1.0\\n    - ## Code\\n        - Make or move a new Custom CSS block here and copy&paste the second part from the library.\\n    - ## Tags\\n        - list pills\\n    - ## Demo\\n        - Skills #[[list pills]]\\n            - HTML \\n            - CSS\\n            - JavaScript\\n            - RemNote #Highlight\\n            - Digital Gardening","description":"Display children in round buttons in a line.","homepage":"https://github.com/hannesfrank/remnote-library/tree/master/public/scrolls/inline-pills-list","id":"com.github.hannesfrank.remnote-library.pills","install":[{"content":":root {\\n  --pill-background-color: #f6f6fa;\\n  --pill-border-color: grey;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=\\"list-pills\\"]\\n  > .TreeNode\\n  > .tree-node-container {\\n  background-color: var(--pill-background-color, #f6f6fa);\\n  border: 1px solid var(--pill-border-color, grey);\\n  border-radius: 2000px;\\n  margin: 5px;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=\\"list-pills\\"]\\n  > .TreeNode\\n  > .tree-node-container\\n  .rem-text {\\n  padding-left: 10px;\\n  padding-right: 10px;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=\\"list-pills\\"] > .TreeNode {\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=\\"list-pills\\"]\\n  > .TreeNode\\n  > .tree-node-container {\\n  flex: 1 1 content;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=\\"list-pills\\"]\\n  > .TreeNode\\n  > .tree-node-container:not(:hover)\\n  .rem-bullet__container {\\n  visibility: hidden;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=\\"list-pills\\"]\\n  > .TreeNode\\n  > .tree-node-container.selected-rem {\\n  background-color: #cce2ff;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=\\"list-pills\\"]\\n  > .TreeNode\\n  > .tree-node-container\\n  .rem-text {\\n  margin: 0;\\n  border-radius: 2000px;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=\\"list-pills\\"]\\n  > .TreeNode\\n  > .tree-node-container:not(:hover)\\n  .hierarchy-editor__tag-bar {\\n  display: none;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=\\"list-pills\\"]\\n  > .TreeNode\\n  > .tree-node-container\\n  .hierarchy-editor__tag-bar {\\n  position: absolute;\\n  top: -10px;\\n  left: calc(100% - 20px);\\n  background: white;\\n  border: 1px solid black;\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=\\"list-pills\\"]\\n  > .TreeNode\\n  > .tree-node-container\\n  .hierarchy-editor__tag-bar\\n  > * {\\n  flex: 1 1 content;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=\\"list-pills\\"]\\n  > .TreeNode\\n  > .tree-node-container\\n  .hierarchy-editor__tag-bar\\n  .hierarchy-editor__tag-bar__tag {\\n  display: inline-block;\\n  margin: 4px;\\n}\\n","file":"style.css","method":"copy"}],"installCount":1337,"name":"Inline Pills List","preview":"scrolls/inline-pills-list/preview.gif","rating":5,"ratingCount":42,"shelf":"Custom CSS","thumb":"scrolls/inline-pills-list/thumb.png","version":"0.1.0"}}')},5234:function(t,e,n){"use strict";n("80ad")},"52e5":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scroll-card"},[n("div",{staticClass:"card",on:{click:function(e){return t.toggleDetails()}}},[n("div",{staticClass:"card-header"},[n("div",{staticClass:"card-header-title"},[n("span",{staticClass:"name"},[t._v(t._s(t.name))]),n("span",{staticClass:"author"},[n("i",{staticClass:"fas fa-user",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.authorName))])])]),n("div",{staticClass:"card-content"},[n("figure",{staticClass:"image"},[n("img",{attrs:{src:t.thumbPath,alt:"Placeholder image"}})])]),n("div",{staticClass:"card-footer"},[n("span",{staticClass:"categories card-footer-item"},[n("div",{staticClass:"tags small"},t._l(t.categories,(function(e){return n("span",{key:e,staticClass:"tag",class:["category-"+e]},[t._v("#"+t._s(e))])})),0)]),n("span",{staticClass:"stats card-footer-item"},[n("span",{staticClass:"stat"},[t._m(0),n("span",{staticClass:"value"},[t._v(t._s(t.installCount))])]),n("span",{staticClass:"stat"},[t._m(1),n("span",{staticClass:"value"},[t._v(t._s(t.rating))])])])])]),n("div",{staticClass:"scroll-details modal",class:{"is-active":t.showDetails}},[n("div",{staticClass:"modal-background",on:{click:function(e){return t.toggleDetails()}}}),n("div",{staticClass:"modal-card"},[n("header",{staticClass:"modal-card-head"},[n("div",{staticClass:"modal-card-title"},[t._m(2),n("div",[n("p",{staticClass:"title is-4"},[t._v(" "+t._s(t.name)+" ")]),n("p",{staticClass:"subtitle is-size-7"},[t._v(" "+t._s(t.id)+" ")])])]),n("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return t.toggleDetails()}}})]),n("section",{staticClass:"modal-card-body"},[n("div",{staticClass:"tile is-ancestor is-vertical"},[n("div",{staticClass:"tile is-parent"},[n("div",{staticClass:"description tile is-child content"},[n("p",[t._v(" "+t._s(t.description)+" ")]),t.previewPath?n("p",[n("img",{staticClass:"preview",attrs:{src:t.previewPath,alt:"Scroll preview"}})]):t._e()]),n("div",{staticClass:"about is-child"},[n("ul",{staticClass:"is-size-7 box m-0"},[n("li",[t._m(3),n("span",[t._v(t._s(t.authorName))])]),n("li",[t._m(4),n("span",[n("a",{attrs:{href:t.homepage}},[t._v("Homepage")])])]),n("li",[t._m(5),n("span",[t._v(t._s(t.version))])])])])]),n("div",{staticClass:"tile is-parent is-vertical"},[n("div",{staticClass:"tile is-child content"},[n("h4",[t._v("Installation")]),t._v(" See "),n("router-link",{attrs:{to:"/#custom-css-install-guide"}},[t._v("Custom CSS Install Guide")]),t._v(". "),n("ol",[n("li",[n("CopyButton",{attrs:{content:t.customCSSBlock,title:"Custom CSS Template"}})],1),n("li",[n("CopyButton",{attrs:{content:t.installCopy,title:"CSS Code Block"}})],1)])],1)])])])])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon is-small"},[n("i",{staticClass:"fas fa-angle-double-down",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon is-small mr-1"},[n("i",{staticClass:"fas fa-star fa-sm",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shelf-icon icon is-large is-pulled-left m-1 mr-4"},[n("i",{staticClass:"fas fa-palette fa-2x",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon is-small"},[n("i",{staticClass:"fas fa-sm fa-user",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon is-small"},[n("i",{staticClass:"fas fa-sm fa-external-link-alt",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon is-small"},[n("i",{staticClass:"fas fa-sm fa-code-branch",attrs:{"aria-hidden":"true"}})])}],s=(n("a4d3"),n("e01a"),n("99af"),n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button",on:{click:t.copy}},[t._m(0),n("span",[t._v(t._s(t.title))])])}),i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon is-small"},[n("i",{staticClass:"fas fa-copy"})])}],o={props:["content","title"],methods:{copy:function(){navigator.clipboard.writeText(this.content)}}},l=o,c=(n("7023"),n("2877")),d=Object(c["a"])(l,s,i,!1,null,null,null),u=d.exports,m={components:{CopyButton:u},props:["scrollData"],data:function(){return{publicPath:"/remnote-library/",showDetails:!1}},methods:{toggleDetails:function(){this.showDetails=!this.showDetails}},computed:{authorName:function(){return this.scrollData.author.name||this.scrollData.author.email||"Anonymous"},categories:function(){return this.scrollData.categories},customCSSBlock:function(){return this.scrollData.customCSSBlock},description:function(){return this.scrollData.description},homepage:function(){return this.scrollData.homepage},id:function(){return this.scrollData.id},install:function(){return this.scrollData.install},installCopy:function(){return this.install[0].content},installCount:function(){return this.scrollData.installCount},name:function(){return this.scrollData.name},rating:function(){return this.scrollData.rating},thumbPath:function(){return"".concat(this.publicPath).concat(this.scrollData.thumb)},previewPath:function(){return this.scrollData.preview?"".concat(this.publicPath).concat(this.scrollData.preview):this.thumbPath},version:function(){return this.scrollData.version||"--"}}},h=m,p=(n("5234"),Object(c["a"])(h,a,r,!1,null,null,null));e["a"]=p.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"app"}},[n("header",[t._m(0),n("nav",{staticClass:"navbar is-success"},[n("div",{staticClass:"navbar-brand"},[t._m(1),n("div",{staticClass:"navbar-burger burger",class:{"is-active":t.burgerToggle},attrs:{"aria-expanded":"false","aria-label":"menu","data-target":"navbarRemNoteLibrary"},on:{click:function(e){t.burgerToggle=!t.burgerToggle}}},[n("span"),n("span"),n("span")])]),n("div",{staticClass:"navbar-menu",class:{"is-active":t.burgerToggle},attrs:{id:"navbarRemNoteLibrary"}},[n("div",{staticClass:"navbar-start"},[n("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),n("router-link",{staticClass:"navbar-item",attrs:{to:"/library"}},[t._v("Library")]),n("router-link",{staticClass:"navbar-item",attrs:{to:"/scroll-guide"}},[t._v("Publish a Scroll")]),n("router-link",{staticClass:"navbar-item",attrs:{to:"/featured"}},[t._v("Featured Scrolls")]),n("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v("About")])],1),t._m(2)])])]),n("div",{attrs:{id:"main"}},[n("router-view")],1),t._m(3)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner is-centered columns m-0"},[a("div",{staticClass:"column is-one-quarter"},[a("img",{attrs:{src:n("42ee"),alt:""}})]),a("div",{staticClass:"has-text-centered"},[a("h1",{staticClass:"title is-1 mt-4"},[a("strong",[t._v("Rem")]),t._v("Note "),a("em",[t._v("Library")])]),a("h2",{staticClass:"subtitle is-4"},[t._v(" A package manager for RemNote. ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-item px-2 py-0",attrs:{href:"/"}},[a("img",{attrs:{src:n("42ee"),alt:"RemNote Library: A Package Manager for RemNote."}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-end"},[n("div",{staticClass:"navbar-item"},[n("div",{staticClass:"field is-grouped"},[n("p",{staticClass:"control"}),n("p",{staticClass:"control"},[n("a",{staticClass:"button is-secondary",attrs:{href:"https://github.com/hannesfrank/remnote-library"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fab fa-github"})]),n("span",[t._v("GitHub")])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"p-2 has-text-centered"},[n("div",[t._v("Made with ❤ by Hannes Frank.")]),n("div",{staticClass:"flaticons-attribution"},[t._v(" Icons made by "),n("a",{attrs:{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"}},[t._v("Freepik")]),t._v(" from "),n("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")])])])}],i={data:function(){return{burgerToggle:!1}}},o=i,l=(n("034f"),n("2877")),c=Object(l["a"])(o,r,s,!1,null,null,null),d=c.exports,u=(n("92c6"),n("d3b7"),n("8c4f")),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home content"},[n("h2",[t._v("What is this?")]),t._m(0),t._m(1),t._m(2),n("p",[t._v(" See "),n("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" for more information about the library: ")],1),n("ul",[n("li",[n("router-link",{attrs:{to:"/about#roadmap"}},[t._v("Roadmap")])],1),n("li",[n("router-link",{attrs:{to:"/about#vision"}},[t._v("Vision")])],1)]),n("h2",[t._v("What can I get here?")]),n("div",{staticClass:"is-flex"},[n("scroll-card",{staticClass:"m-2",attrs:{scrollData:t.scrolls["com.github.hannesfrank.remnote-css-rem-types"]}}),n("scroll-card",{staticClass:"m-2",attrs:{scrollData:t.scrolls["com.github.hannesfrank.remnote-library.kanban-board"]}})],1),t._v(" See "),n("router-link",{attrs:{to:"featured"}},[t._v("Featured Scrolls")]),t._v(" or the "),n("router-link",{attrs:{to:"library"}},[t._v("Library")]),t._v(" for all available "),t._m(3),t._v(". "),n("h2",{attrs:{id:"custom-css-install-guide"}},[t._v("How do I install a Custom CSS Scroll?")]),n("iframe",{attrs:{width:"1120",height:"630",src:"https://www.youtube.com/embed/4Y5MeO3g5Ik",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),t._m(4),t._m(5)],1)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("figure",{staticClass:"image is-128x128 is-pulled-right my-0"},[a("img",{attrs:{src:n("d4cd")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" This is my attempt to make sharing customizations for RemNote easier. Those customizations are packaged into "),a("em",[a("img",{staticClass:"icon",attrs:{src:n("d4cd"),alt:"scroll icon"}}),t._v(" Scrolls")]),t._v(". ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" At the moment you can only find Custom CSS Scrolls here (themes and widgets). For more information about Custom CSS look at this forum post: "),n("a",{attrs:{href:"https://forum.remnote.io/t/what-is-custom-css-and-how-do-i-use-it/1231"}},[t._v("See: What is Custom CSS and how do I use it?")]),t._v(". ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("em",[a("img",{staticClass:"icon",attrs:{src:n("d4cd"),alt:"scroll icon"}}),t._v(" Scrolls")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",[a("li",[t._v(" Find the "),a("em",[a("img",{staticClass:"icon",attrs:{src:n("d4cd"),alt:"scroll icon"}}),t._v(" Scroll ")]),t._v(" you want to install, click to open it and scroll to "),a("em",[t._v("Installation")]),t._v(". ")]),a("li",[t._v("Click the first copy button "),a("em",[t._v("Custom CSS Template")]),t._v(".")]),a("li",[t._v(" Go to RemNote and open the Custom CSS page using "),a("kbd",[t._v("Ctrl")]),t._v("+"),a("kbd",[t._v("P")]),t._v(". ")]),a("li",[t._v(" Paste the "),a("em",[t._v("Custom CSS Template")]),t._v(" with "),a("kbd",[t._v("Ctrl")]),t._v("+"),a("kbd",[t._v("V")]),t._v(". ")]),a("li",[t._v("Click the second copy button "),a("em",[t._v("CSS Code Block")]),t._v(".")]),a("li",[t._v(" Under the "),a("strong",[t._v("Code")]),t._v(" heading create a checked todo item and insert a code block. ")]),a("ul",[a("li",[t._v("Make sure the language is set to "),a("em",[t._v("CSS")]),t._v(".")])]),a("li",[t._v("Paste "),a("em",[t._v("CSS Code Block")]),t._v(" into the code block.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"message is-info"},[n("div",{staticClass:"message-header"},[n("p",[t._v("Don't worry!")])]),n("div",{staticClass:"message-body"},[t._v(" The install process will not always be that complicated. "),n("br"),t._v(" Once the API is extended it will be just a button click to install, update or remove! ")])])}],p=n("52e5"),f=n("5033"),v={name:"Home",data:function(){return{scrolls:f}},components:{ScrollCard:p["a"]}},b=v,g=(n("cccb"),Object(l["a"])(b,m,h,!1,null,null,null)),_=g.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about content"},[n("h2",[t._v("F.A.Q.")]),t._m(0),n("h2",[t._v("Contributing")]),n("p",[t._v(" You can "),n("router-link",{attrs:{to:"/scroll-guide"}},[t._v("share Scrolls")]),t._v(" or help developing the library itself. ")],1),n("h2",{attrs:{id:"roadmap"}},[t._v("WIP: roadmap")]),n("h3",[t._v(" Features for the library ")]),t._m(1),n("h3",[t._v("Scrolls")]),t._m(2),n("h2",{attrs:{id:"vision"}},[t._v("WIP: Vision and Theme")]),n("p",[t._v("A library is a institution to share the knowledge of humankind.")]),n("p",[t._v(" Knowledge of all kinds - facts, procedures and even computer code - have the unique property that it can be shared without additional properties without additional cost. This is magical. ")]),n("p",[t._v(" This library hosts numerous scroll which aid you on your learning journey. Take a break from watering your tree of knowledge and wander through the halls of this place. ")]),t._m(3),t._m(4),t._v(" Those will be organized into 📚 "),n("em",[t._v("Shelves")]),t._v(". "),n("h2",[t._v("Special Thanks")]),t._m(5),n("h2",[t._v("Support")]),n("p",[t._v(" Yes, please 🙃 ")])])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" Ask something on the "),n("a",{attrs:{href:"https://bit.ly/REMNOTEdiscord"}},[t._v("Discord")]),t._v(", the "),n("a",{attrs:{href:"https://forum.remnote.io"}},[t._v("Forum")]),t._v(" or "),n("a",{attrs:{href:"https://github.com/hannesfrank/remnote-library"}},[t._v("Github")]),t._v(". ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("Link scrolls for user scripts")]),n("li",[t._v("List installed scrolls")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("Divider")]),n("li",[t._v("Kanban Board")]),n("li",[t._v("Table")]),n("li",[t._v("Sidebar Icons")]),n("li",[t._v("Line Numbered Code Blocks")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" Later all kinds of "),a("em",[a("img",{staticClass:"icon",attrs:{src:n("d4cd"),alt:"scroll icon"}}),t._v(" Scrolls")]),t._v(" could be supported: ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("🍪 User Scripts")]),n("li",[t._v("Links resources like Video and Text Tutorials")]),n("li",[t._v(" Even plugins and shared documents (but those are also listed in RemNote itself). ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/WildGenius"}},[t._v("WildGenius")]),t._v(" and others for extensive feedback. ")])])}],k={name:"About",components:{}},S=k,w=(n("e76e"),Object(l["a"])(S,C,y,!1,null,null,null)),T=w.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home content"},[n("h2",[t._v("🎨 Custom CSS")]),n("scroll-card",{attrs:{scrollData:t.scrolls["com.github.hannesfrank.remnote-css-rem-types"]}}),n("h2",[t._v("🍪 User Scripts")]),n("p",[t._v("Coming Soon™")])],1)},N=[],E={name:"Featured",data:function(){return{scrolls:f}},components:{ScrollCard:p["a"]}},D=E,P=(n("b1bd"),Object(l["a"])(D,x,N,!1,null,null,null)),$=P.exports,B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"scroll-guide content"},[a("h2",{staticClass:"is-size-2"},[t._v("Make and Share a Scroll")]),a("figure",{staticClass:"image is-300x300 mt-0 is-pulled-right"},[a("img",{attrs:{src:n("57ba"),alt:"bound scroll"}})]),a("p",{staticClass:"is-size-4 is-family-primary"},[t._v(" Comming Soon... ")]),a("p",[t._v(" Basically you "),a("ol",[a("li",[t._v("Copy the Scroll template")]),a("li",[t._v('Add your "magic", e.g. a some awesome CSS')]),a("li",[t._v("Describe it in "),a("code",[t._v("manifest.json")]),t._v(" and")]),a("li",[t._v("Make a Pull Request on Github. If you plan to update it, add it as a submodule just referencing your own repo.")])])]),a("p",[t._v("Later we'll add a backend with a database and a UI to publish scrolls.")])])}],A=(n("7e67"),{}),O=Object(l["a"])(A,B,j,!1,null,"cfaafd32",null),L=O.exports;a["a"].use(u["a"]);var F=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:T},{path:"/featured",name:"Featured",component:$},{path:"/library",name:"Library",component:function(){return n.e("library").then(n.bind(null,"55a5"))}},{path:"/scroll-guide",name:"ScrollGuide",component:L}],I=new u["a"]({base:"/remnote-library/",routes:F,scrollBehavior:function(t,e,n){return t.hash?{selector:t.hash}:{x:0,y:0}},linkActiveClass:"is-active-dropdown",linkExactActiveClass:"is-active"}),M=I;a["a"].config.productionTip=!1,new a["a"]({router:M,render:function(t){return t(d)}}).$mount("#app")},"57ba":function(t,e,n){t.exports=n.p+"img/scroll-bound.3336952b.svg"},"5ced":function(t,e,n){},"6fe5":function(t,e,n){},7023:function(t,e,n){"use strict";n("6fe5")},"7e67":function(t,e,n){"use strict";n("9e69")},"80ad":function(t,e,n){},"85ec":function(t,e,n){},8928:function(t,e,n){},"91aa":function(t,e,n){},"9e69":function(t,e,n){},b1bd:function(t,e,n){"use strict";n("8928")},cccb:function(t,e,n){"use strict";n("5ced")},d4cd:function(t,e,n){t.exports=n.p+"img/scroll.ba1edfb1.svg"},e76e:function(t,e,n){"use strict";n("91aa")}});
//# sourceMappingURL=app.5bdeb867.js.map