(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},s={app:0},r={app:0},i=[];function o(t){return l.p+"js/"+({library:"library"}[t]||t)+"."+{library:"dcd12850"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={library:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var n="css/"+({library:"library"}[t]||t)+"."+{library:"dd2122c0"}[t]+".css",r=l.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var c=i[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===r))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],u=c.getAttribute("data-href");if(u===n||u===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete s[t],m.parentNode.removeChild(m),a(i)},m.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(m)})).then((function(){s[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",d.name="ChunkLoadError",d.type=n,d.request=s,a[1](d)}r[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/remnote-library/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var m=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"42ee":function(t,e,a){t.exports=a.p+"img/library-logo.4cec064c.png"},5033:function(t){t.exports=JSON.parse('{"com.github.hannesfrank.remnote-css-rem-types":{"author":{"email":"frankhannes@gmail.com","name":"Hannes Frank"},"categories":["icon"],"customCSSBlock":"-\\n- # Rem Type and Practice Direction\\n    - id: com.github.hannesfrank.remnote-css-rem-types\\n    - version: 1.0.0\\n    - ## Code\\n        - Make or move a new Custom CSS block here and copy&paste the second part from the library.","description":"Add icons for flashcard/rem types and practice directions.","homepage":"https://github.com/hannesfrank/remnote-css-rem-types","id":"com.github.hannesfrank.remnote-css-rem-types","install":[{"content":"@import URL(\\"https://hannesfrank.github.io/remnote-css-rem-types/everything.css\\");","method":"copy"}],"installCount":1337,"name":"Rem Type and Practice Direction","preview":"scrolls/rem-type-icons/custom_style.png","rating":5,"ratingCount":42,"shelf":"Custom CSS","thumb":"scrolls/rem-type-icons/remnote-css-card-rems-social.png","version":"1.0.0"},"com.github.hannesfrank.remnote-library.pills":{"author":{"email":"frankhannes@gmail.com","name":"Hannes Frank"},"categories":["layout","list"],"config":{"demo":"demo.rems","tags":"list pills"},"customCSSBlock":"-\\n- # Inline Pills List\\n    - id: com.github.hannesfrank.remnote-library.pills\\n    - version: 0.1.0\\n    - ## Code\\n        - Make or move a new Custom CSS block here and copy&paste the second part from the library.\\n    - ## Tags\\n        - {\'tags\': \'list pills\', \'demo\': \'demo.rems\'}\\n    - ## Demo\\n        - - Skills #[[list pills]]\\n    - HTML \\n    - CSS\\n    - JavaScript\\n    - RemNote #Highlight\\n    - Digital Gardening","description":"Display children in round buttons in a line.","homepage":"https://github.com/hannesfrank/remnote-library/tree/master/public/scrolls/inline-pills-list","id":"com.github.hannesfrank.remnote-library.pills","install":[{"content":":root {\\n  --pill-background-color: #f6f6fa;\\n  --pill-border-color: grey;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=\\"list-pills\\"]\\n  > .TreeNode\\n  > .tree-node-container {\\n  background-color: var(--pill-background-color, #f6f6fa);\\n  border: 1px solid var(--pill-border-color, grey);\\n  border-radius: 2000px;\\n  margin: 5px;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=\\"list-pills\\"]\\n  > .TreeNode\\n  > .tree-node-container\\n  .rem-text {\\n  padding-left: 10px;\\n  padding-right: 10px;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=\\"list-pills\\"] > .TreeNode {\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=\\"list-pills\\"]\\n  > .TreeNode\\n  > .tree-node-container {\\n  flex: 1 1 content;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=\\"list-pills\\"]\\n  > .TreeNode\\n  > .tree-node-container:not(:hover)\\n  .rem-bullet__container {\\n  visibility: hidden;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=\\"list-pills\\"]\\n  > .TreeNode\\n  > .tree-node-container.selected-rem {\\n  background-color: #cce2ff;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=\\"list-pills\\"]\\n  > .TreeNode\\n  > .tree-node-container\\n  .rem-text {\\n  margin: 0;\\n  border-radius: 2000px;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=\\"list-pills\\"]\\n  > .TreeNode\\n  > .tree-node-container:not(:hover)\\n  .hierarchy-editor__tag-bar {\\n  display: none;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=\\"list-pills\\"]\\n  > .TreeNode\\n  > .tree-node-container\\n  .hierarchy-editor__tag-bar {\\n  position: absolute;\\n  top: -10px;\\n  left: calc(100% - 20px);\\n  background: white;\\n  border: 1px solid black;\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=\\"list-pills\\"]\\n  > .TreeNode\\n  > .tree-node-container\\n  .hierarchy-editor__tag-bar\\n  > * {\\n  flex: 1 1 content;\\n}\\n\\n.tree-node-container[data-rem-container-tags~=\\"list-pills\\"]\\n  > .TreeNode\\n  > .tree-node-container\\n  .hierarchy-editor__tag-bar\\n  .hierarchy-editor__tag-bar__tag {\\n  display: inline-block;\\n  margin: 4px;\\n}\\n","file":"style.css","method":"copy"}],"installCount":1337,"name":"Inline Pills List","preview":"scrolls/inline-pills-list/preview.gif","rating":5,"ratingCount":42,"shelf":"Custom CSS","thumb":"scrolls/inline-pills-list/thumb.png","version":"0.1.0"}}')},5234:function(t,e,a){"use strict";a("80ad")},"52e5":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"scroll-card"},[a("div",{staticClass:"card",on:{click:function(e){return t.toggleDetails()}}},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"card-header-title"},[a("span",{staticClass:"name"},[t._v(t._s(t.name))]),a("span",{staticClass:"author"},[a("i",{staticClass:"fas fa-user",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.authorName))])])]),a("div",{staticClass:"card-content"},[a("figure",{staticClass:"image"},[a("img",{attrs:{src:t.thumbPath,alt:"Placeholder image"}})])]),a("div",{staticClass:"card-footer"},[a("span",{staticClass:"categories card-footer-item"},[a("div",{staticClass:"tags small"},t._l(t.categories,(function(e){return a("span",{key:e,staticClass:"tag",class:["category-"+e]},[t._v("#"+t._s(e))])})),0)]),a("span",{staticClass:"stats card-footer-item"},[a("span",{staticClass:"stat"},[t._m(0),a("span",{staticClass:"value"},[t._v(t._s(t.installCount))])]),a("span",{staticClass:"stat"},[t._m(1),a("span",{staticClass:"value"},[t._v(t._s(t.rating))])])])])]),a("div",{staticClass:"scroll-details modal",class:{"is-active":t.showDetails}},[a("div",{staticClass:"modal-background",on:{click:function(e){return t.toggleDetails()}}}),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("div",{staticClass:"modal-card-title"},[t._m(2),a("div",[a("p",{staticClass:"title is-4"},[t._v(" "+t._s(t.name)+" ")]),a("p",{staticClass:"subtitle is-size-7"},[t._v(" "+t._s(t.id)+" ")])])]),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return t.toggleDetails()}}})]),a("section",{staticClass:"modal-card-body"},[a("div",{staticClass:"tile is-ancestor is-vertical"},[a("div",{staticClass:"tile is-parent"},[a("div",{staticClass:"description tile is-child content"},[a("p",[t._v(" "+t._s(t.description)+" ")]),t.previewPath?a("p",[a("img",{staticClass:"preview",attrs:{src:t.previewPath,alt:"Scroll preview"}})]):t._e()]),a("div",{staticClass:"about is-child"},[a("ul",{staticClass:"is-size-7 box m-0"},[a("li",[t._m(3),a("span",[t._v(t._s(t.authorName))])]),a("li",[t._m(4),a("span",[a("a",{attrs:{href:t.homepage}},[t._v("Homepage")])])]),a("li",[t._m(5),a("span",[t._v(t._s(t.version))])])])])]),a("div",{staticClass:"tile is-parent"},[a("div",{staticClass:"tile is-child content"},[a("h4",[t._v("Installation")]),t._v(" See "),a("ol",[a("li",[t._v(" Paste into Custom CSS Page: "),a("CopyButton",{attrs:{content:t.customCSSBlock}})],1),a("li",[t._v(" Paste into the new Code Block: "),a("CopyButton",{attrs:{content:t.installCopy}})],1)])]),t._m(6)])])])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small"},[a("i",{staticClass:"fas fa-angle-double-down",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small mr-1"},[a("i",{staticClass:"fas fa-star fa-sm",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shelf-icon icon is-large is-pulled-left m-1 mr-4"},[a("i",{staticClass:"fas fa-palette fa-2x",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small"},[a("i",{staticClass:"fas fa-sm fa-user",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small"},[a("i",{staticClass:"fas fa-sm fa-external-link-alt",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small"},[a("i",{staticClass:"fas fa-sm fa-code-branch",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tile is-child content"},[a("h4",[t._v("Usage")])])}],r=(a("a4d3"),a("e01a"),a("99af"),a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"button is-small",on:{click:t.copy}},[t._m(0)])}),i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small"},[a("i",{staticClass:"fas fa-copy"})])}],o={props:["content"],methods:{copy:function(){navigator.clipboard.writeText(this.content)}}},l=o,c=(a("7023"),a("2877")),u=Object(c["a"])(l,r,i,!1,null,null,null),d=u.exports,m={components:{CopyButton:d},props:["scrollData"],data:function(){return{publicPath:"/remnote-library/",showDetails:!1}},methods:{toggleDetails:function(){this.showDetails=!this.showDetails}},computed:{authorName:function(){return this.scrollData.author.name||this.scrollData.author.email||"Anonymous"},categories:function(){return this.scrollData.categories},customCSSBlock:function(){return this.scrollData.customCSSBlock},description:function(){return this.scrollData.description},homepage:function(){return this.scrollData.homepage},id:function(){return this.scrollData.id},install:function(){return this.scrollData.install},installCopy:function(){return this.install[0].content},installCount:function(){return this.scrollData.installCount},name:function(){return this.scrollData.name},rating:function(){return this.scrollData.rating},thumbPath:function(){return"".concat(this.publicPath).concat(this.scrollData.thumb)},previewPath:function(){return this.scrollData.preview?"".concat(this.publicPath).concat(this.scrollData.preview):this.thumbPath},version:function(){return this.scrollData.version||"--"}}},h=m,p=(a("5234"),Object(c["a"])(h,n,s,!1,null,null,null));e["a"]=p.exports},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"app"}},[a("header",[t._m(0),a("nav",{staticClass:"navbar is-success"},[a("div",{staticClass:"navbar-brand"},[t._m(1),a("div",{staticClass:"navbar-burger burger",class:{"is-active":t.burgerToggle},attrs:{"aria-expanded":"false","aria-label":"menu","data-target":"navbarRemNoteLibrary"},on:{click:function(e){t.burgerToggle=!t.burgerToggle}}},[a("span"),a("span"),a("span")])]),a("div",{staticClass:"navbar-menu",class:{"is-active":t.burgerToggle},attrs:{id:"navbarRemNoteLibrary"}},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/library"}},[t._v("Library")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/scroll-guide"}},[t._v("Publish a Scroll")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/featured"}},[t._v("Featured Scrolls")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v("About")])],1),t._m(2)])])]),a("div",{attrs:{id:"main"}},[a("router-view")],1),t._m(3)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner is-centered columns m-0"},[n("div",{staticClass:"column is-one-quarter"},[n("img",{attrs:{src:a("42ee"),alt:""}})]),n("div",{staticClass:"has-text-centered"},[n("h1",{staticClass:"title is-1 mt-4"},[n("strong",[t._v("Rem")]),t._v("Note "),n("em",[t._v("Library")])]),n("h2",{staticClass:"subtitle is-4"},[t._v(" A package manager for RemNote. ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"navbar-item px-2 py-0",attrs:{href:"/"}},[n("img",{attrs:{src:a("42ee"),alt:"RemNote Library: A Package Manager for RemNote."}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("div",{staticClass:"field is-grouped"},[a("p",{staticClass:"control"}),a("p",{staticClass:"control"},[a("a",{staticClass:"button is-secondary",attrs:{href:"https://github.com/hannesfrank/remnote-library"}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fab fa-github"})]),a("span",[t._v("GitHub")])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"p-2 has-text-centered"},[a("div",[t._v("Made with ❤ by Hannes Frank.")]),a("div",{staticClass:"flaticons-attribution"},[t._v(" Icons made by "),a("a",{attrs:{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"}},[t._v("Freepik")]),t._v(" from "),a("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")])])])}],i={data:function(){return{burgerToggle:!1}}},o=i,l=(a("034f"),a("2877")),c=Object(l["a"])(o,s,r,!1,null,null,null),u=c.exports,d=(a("92c6"),a("d3b7"),a("8c4f")),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home content"},[a("h2",[t._v("What is this?")]),t._m(0),t._m(1),t._m(2),a("p",[t._v(" See "),a("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" for more information about the library: ")],1),a("ul",[a("li",[a("router-link",{attrs:{to:"/about#roadmap"}},[t._v("Roadmap")])],1),a("li",[a("router-link",{attrs:{to:"/about#vision"}},[t._v("Vision")])],1)]),a("h2",[t._v("How do I install a Custom CSS Scroll?")]),t._m(3)])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figure",{staticClass:"image is-128x128 is-pulled-right my-0"},[n("img",{attrs:{src:a("d4cd")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" This is my attempt to make sharing customizations for RemNote easier. Those customizations are packaged into "),n("em",[n("img",{staticClass:"icon",attrs:{src:a("d4cd"),alt:"scroll icon"}}),t._v(" Scrolls")]),t._v(". ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" At the moment you can only find Custom CSS Scrolls here (themes and widgets). For more information about Custom CSS look at this forum post: "),a("a",{attrs:{href:"https://forum.remnote.io/t/what-is-custom-css-and-how-do-i-use-it/1231"}},[t._v("See: What is Custom CSS and how do I use it?")]),t._v(". ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"message is-info"},[a("div",{staticClass:"message-header"},[a("p",[t._v("Don't worry!")])]),a("div",{staticClass:"message-body"},[t._v(" The install process will not always be that complicated. "),a("br"),t._v(" Once the API is extended it will be just a button click to install, update or remove! ")])])}],p={name:"Home",components:{}},f=p,v=(a("cccb"),Object(l["a"])(f,m,h,!1,null,null,null)),_=v.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about content"},[a("h2",[t._v("F.A.Q.")]),t._m(0),a("h2",[t._v("Contributing")]),a("p",[t._v(" You can "),a("router-link",{attrs:{to:"/scroll-guide"}},[t._v("share Scrolls")]),t._v(" or help developing the library itself. ")],1),a("h2",{attrs:{id:"roadmap"}},[t._v("WIP: roadmap")]),a("h3",[t._v(" Features for the library ")]),t._m(1),a("h3",[t._v("Scrolls")]),t._m(2),a("h2",{attrs:{id:"vision"}},[t._v("WIP: Vision and Theme")]),a("p",[t._v("A library is a institution to share the knowledge of humankind.")]),a("p",[t._v(" Knowledge of all kinds - facts, procedures and even computer code - have the unique property that it can be shared without additional properties without additional cost. This is magical. ")]),a("p",[t._v(" This library hosts numerous scroll which aid you on your learning journey. Take a break from watering your tree of knowledge and wander through the halls of this place. ")]),t._m(3),t._m(4),t._v(" Those will be organized into 📚 "),a("em",[t._v("Shelves")]),t._v(". "),a("h2",[t._v("Special Thanks")]),t._m(5),a("h2",[t._v("Support")]),a("p",[t._v(" Yes, please 🙃 ")])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" Ask something on the "),a("a",{attrs:{href:"https://bit.ly/REMNOTEdiscord"}},[t._v("Discord")]),t._v(", the "),a("a",{attrs:{href:"https://forum.remnote.io"}},[t._v("Forum")]),t._v(" or "),a("a",{attrs:{href:"https://github.com/hannesfrank/remnote-library"}},[t._v("Github")]),t._v(". ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("Link scrolls for user scripts")]),a("li",[t._v("List installed scrolls")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("Divider")]),a("li",[t._v("Kanban Board")]),a("li",[t._v("Table")]),a("li",[t._v("Sidebar Icons")]),a("li",[t._v("Line Numbered Code Blocks")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" Later all kinds of "),n("em",[n("img",{staticClass:"icon",attrs:{src:a("d4cd"),alt:"scroll icon"}}),t._v(" Scrolls")]),t._v(" could be supported: ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("🍪 User Scripts")]),a("li",[t._v("Links resources like Video and Text Tutorials")]),a("li",[t._v(" Even plugins and shared documents (but those are also listed in RemNote itself). ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/WildGenius"}},[t._v("WildGenius")]),t._v(" and others for extensive feedback. ")])])}],C={name:"About",components:{}},y=C,k=(a("e76e"),Object(l["a"])(y,b,g,!1,null,null,null)),w=k.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home content"},[a("h2",[t._v("🎨 Custom CSS")]),a("scroll-card",{attrs:{scrollData:t.scrolls["com.github.hannesfrank.remnote-css-rem-types"]}}),a("h2",[t._v("🍪 User Scripts")]),a("p",[t._v("Coming Soon™")])],1)},x=[],E=a("52e5"),T=a("5033"),D={name:"Home",data:function(){return{scrolls:T}},components:{ScrollCard:E["a"]}},P=D,N=(a("b1bd"),Object(l["a"])(P,S,x,!1,null,null,null)),$=N.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scroll-guide content"},[n("h2",{staticClass:"is-size-2"},[t._v("Make and Share a Scroll")]),n("figure",{staticClass:"image is-300x300 mt-0 is-pulled-right"},[n("img",{attrs:{src:a("57ba"),alt:"bound scroll"}})]),n("p",{staticClass:"is-size-4 is-family-primary"},[t._v(" Comming Soon... ")]),n("p",[t._v(" Basically you "),n("ol",[n("li",[t._v("Copy the Scroll template")]),n("li",[t._v('Add your "magic", e.g. a some awesome CSS')]),n("li",[t._v("Describe it in "),n("code",[t._v("manifest.json")]),t._v(" and")]),n("li",[t._v("Make a Pull Request on Github. If you plan to update it, add it as a submodule just referencing your own repo.")])])]),n("p",[t._v("Later we'll add a backend with a database and a UI to publish scrolls.")])])}],O=(a("7e67"),{}),L=Object(l["a"])(O,j,A,!1,null,"cfaafd32",null),B=L.exports;n["a"].use(d["a"]);var R=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:w},{path:"/featured",name:"Featured",component:$},{path:"/library",name:"Library",component:function(){return a.e("library").then(a.bind(null,"55a5"))}},{path:"/scroll-guide",name:"ScrollGuide",component:B}],F=new d["a"]({base:"/remnote-library/",routes:R,scrollBehavior:function(t,e,a){return t.hash?{selector:t.hash}:{x:0,y:0}},linkActiveClass:"is-active-dropdown",linkExactActiveClass:"is-active"}),H=F;n["a"].config.productionTip=!1,new n["a"]({router:H,render:function(t){return t(u)}}).$mount("#app")},"57ba":function(t,e,a){t.exports=a.p+"img/scroll-bound.3336952b.svg"},"5ced":function(t,e,a){},"6fe5":function(t,e,a){},7023:function(t,e,a){"use strict";a("6fe5")},"7e67":function(t,e,a){"use strict";a("9e69")},"80ad":function(t,e,a){},"85ec":function(t,e,a){},8928:function(t,e,a){},"91aa":function(t,e,a){},"9e69":function(t,e,a){},b1bd:function(t,e,a){"use strict";a("8928")},cccb:function(t,e,a){"use strict";a("5ced")},d4cd:function(t,e,a){t.exports=a.p+"img/scroll.ba1edfb1.svg"},e76e:function(t,e,a){"use strict";a("91aa")}});
//# sourceMappingURL=app.aab467d5.js.map