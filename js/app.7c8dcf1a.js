(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({"lang-en":"lang-en","lang-id":"lang-id"}[e]||e)+"."+{"chunk-2c4a5ecb":"54fcbdba","chunk-2d0abcb4":"e7e02b24","chunk-2d0b23b5":"66cffa41","chunk-2d213127":"7a48651d","chunk-2d21eb45":"6cb653f2","chunk-2d225216":"9e95cd9e","chunk-2d23118b":"4761b9d9","chunk-7d644c97":"260162a5","chunk-93c5fdaa":"9041d6e2","chunk-c2e4d292":"0a628a8d","lang-en":"cda4a680","lang-id":"8d6e078e"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-2c4a5ecb":1,"chunk-93c5fdaa":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({"lang-en":"lang-en","lang-id":"lang-id"}[e]||e)+"."+{"chunk-2c4a5ecb":"9eb8e684","chunk-2d0abcb4":"31d6cfe0","chunk-2d0b23b5":"31d6cfe0","chunk-2d213127":"31d6cfe0","chunk-2d21eb45":"31d6cfe0","chunk-2d225216":"31d6cfe0","chunk-2d23118b":"31d6cfe0","chunk-7d644c97":"31d6cfe0","chunk-93c5fdaa":"2a2e351b","chunk-c2e4d292":"31d6cfe0","lang-en":"31d6cfe0","lang-id":"31d6cfe0"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/ftn-vue-pwa-demo/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a6b":function(e,t,n){"use strict";n.r(t);var r=n("4360");t["default"]=function(e,t,n){r["a"].getters["auth/check"]?n({name:"home"}):n()}},1092:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"basic-layout d-flex align-items-center justify-content-center m-0 bg-white"},[n("child")],1)},a=[],o={name:"BasicLayout"},c=o,u=(n("78ca"),n("2877")),i=Object(u["a"])(c,r,a,!1,null,null,null);t["default"]=i.exports},"2c0b":function(e,t,n){},4360:function(e,t,n){"use strict";n("8e6e"),n("456d");var r=n("bd86"),a=n("768b"),o=(n("a481"),n("ac6a"),n("2b0e")),c=n("2f62");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}o["default"].use(c["a"]);var s=n("6c17"),l=s.keys().map((function(e){return[e.replace(/(^.\/)|(\.js$)/g,""),s(e)]})).reduce((function(e,t){var n=Object(a["a"])(t,2),o=n[0],c=n[1];return void 0===c.namespaced&&(c.namespaced=!0),i({},e,Object(r["a"])({},o,c))}),{});t["a"]=new c["a"].Store({modules:l})},5459:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("8e6e"),n("ac6a"),n("456d");var r=n("bd86"),a=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("loading",{ref:"loading"}),n("transition",{attrs:{name:"page",mode:"out-in"}},[e.layout?n(e.layout,{tag:"component"}):e._e()],1)],1)},c=[],u=n("768b"),i=(n("a481"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"progress",style:{width:e.percent+"%",height:e.height,opacity:e.show?1:0,"background-color":e.canSuccess?e.color:e.failedColor}})}),s=[],l={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#77b6ff",failedColor:"red"}},methods:{start:function(){var e=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval((function(){e.increase(e._cut*Math.random()),e.percent>95&&e.finish()}),100),this},set:function(e){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(e),this},get:function(){return Math.floor(this.percent)},increase:function(e){return this.percent=this.percent+Math.floor(e),this},decrease:function(e){return this.percent=this.percent-Math.floor(e),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var e=this;return clearInterval(this._timer),this._timer=null,setTimeout((function(){e.show=!1,e.$nextTick((function(){setTimeout((function(){e.percent=0}),200)}))}),500),this},fail:function(){return this.canSuccess=!1,this}}},f=l,d=(n("d67b"),n("2877")),p=Object(d["a"])(f,i,s,!1,null,"54295590",null),h=p.exports,b=n("81be"),v=b.keys().map((function(e){return[e.replace(/(^.\/)|(\.vue$)/g,""),b(e)]})).reduce((function(e,t){var n=Object(u["a"])(t,2),r=n[0],a=n[1];return e[r]=a.default||a,e}),{}),m={el:"#app",components:{Loading:h},data:function(){return{layout:null,defaultLayout:"default"}},metaInfo:function(){return{title:"ftn-vue-pwa",titleTemplate:"%s · ".concat("ftn-vue-pwa")}},mounted:function(){this.$loading=this.$refs.loading},methods:{setLayout:function(e){e&&v[e]||(e=this.defaultLayout),this.layout=v[e]}}},g=m,O=(n("5c0b"),Object(d["a"])(g,o,c,!1,null,null,null)),y=O.exports,w=n("4360"),k=(n("96cf"),n("75fc")),j=(n("5df3"),n("3b8d")),_=n("0a89"),x=n.n(_),E=function(){return n.e("chunk-2c4a5ecb").then(n.bind(null,"0462")).then((function(e){return e.default||e}))},P=function(){return n.e("chunk-c2e4d292").then(n.bind(null,"e37c")).then((function(e){return e.default||e}))},C=function(){return n.e("chunk-7d644c97").then(n.bind(null,"8871")).then((function(e){return e.default||e}))},T=function(){return n.e("chunk-2d225216").then(n.bind(null,"e2a4")).then((function(e){return e.default||e}))},D=function(){return n.e("chunk-2d21eb45").then(n.bind(null,"d762")).then((function(e){return e.default||e}))},L=function(){return n.e("chunk-2d0b23b5").then(n.bind(null,"22dc")).then((function(e){return e.default||e}))},S=function(){return n.e("chunk-2d23118b").then(n.bind(null,"eea6")).then((function(e){return e.default||e}))},$=function(){return n.e("chunk-93c5fdaa").then(n.bind(null,"dfac")).then((function(e){return e.default||e}))},R=function(){return n.e("chunk-2d213127").then(n.bind(null,"aab3")).then((function(e){return e.default||e}))},U=function(){return n.e("chunk-2d0abcb4").then(n.bind(null,"1791")).then((function(e){return e.default||e}))},A=[{path:"/",name:"welcome",component:E},{path:"/login",name:"login",component:P},{path:"/register",name:"register",component:C},{path:"/password/reset",name:"password.request",component:T},{path:"/password/reset/:token",name:"password.reset",component:D},{path:"/home",name:"home",component:S},{path:"/settings",component:$,children:[{path:"",redirect:{name:"settings.profile"}},{path:"profile",name:"settings.profile",component:R},{path:"password",name:"settings.password",component:U}]},{path:"*",component:L}],M=n("8c4f"),N=n("31bd");function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}a["default"].use(x.a),a["default"].use(M["a"]);var I=["locale","check-auth"],q=ee(n("9091")),H=G();Object(N["sync"])(w["a"],H);var W=H;function G(){var e=new M["a"]({scrollBehavior:Z,routes:A});return e.beforeEach(J),e.afterEach(z),e}function J(e,t,n){return K.apply(this,arguments)}function K(){return K=Object(j["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,X(H.getMatchedComponents(F({},t)));case 2:if(a=e.sent,0!==a.length){e.next=5;break}return e.abrupt("return",r());case 5:!1!==a[a.length-1].loading&&H.app.$nextTick((function(){"undefined"!==typeof H.app.$loading&&H.app.$loading.start()})),o=Y(a),Q(o,t,n,(function(){0===arguments.length&&"function"===typeof H.app.setLayout&&H.app.setLayout(a[0].layout||""),r.apply(void 0,arguments)}));case 8:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}function z(){return V.apply(this,arguments)}function V(){return V=Object(j["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,H.app.$nextTick();case 2:"undefined"!==typeof H.app.$loading&&H.app.$loading.finish();case 3:case"end":return e.stop()}}),e)}))),V.apply(this,arguments)}function Q(e,t,n,r){var a=e.reverse(),o=function e(){if(arguments.length>0||0===a.length)return arguments.length>0&&"undefined"!==typeof H.app.$loading&&H.app.$loading.finish(),r.apply(void 0,arguments);var o=a.pop();if("function"===typeof o)o(t,n,e);else{if(!q[o])throw Error("Undefined middleware [".concat(o,"]"));q[o](t,n,e)}};o()}function X(e){return Promise.all(e.map((function(e){return"function"===typeof e?e():e})))}function Y(e){var t=[].concat(I);return e.filter((function(e){return e.middleware})).forEach((function(e){Array.isArray(e.middleware)?t.push.apply(t,Object(k["a"])(e.middleware)):t.push(e.middleware)})),t}function Z(e,t,n){if(n)return n;if(e.hash)return{selector:e.hash};var r=H.getMatchedComponents(F({},e)).slice(-1),a=Object(u["a"])(r,1),o=a[0];return o&&!1===o.scrollToTop?{}:{x:0,y:0}}function ee(e){return e.keys().map((function(t){return[t.replace(/(^.\/)|(\.js$)/g,""),e(t)]})).reduce((function(e,t){var n=Object(u["a"])(t,2),a=n[0],o=n[1];return F({},e,Object(r["a"])({},a,o.default))}),{})}var te,ne=n("d3a4"),re=n("9483"),ae=n("3d20"),oe=n.n(ae),ce=function(e){oe()({type:"question",title:ne["a"].t("update_available"),text:ne["a"].t("update_now"),reverseButtons:!0,showCancelButton:!0,confirmButtonText:ne["a"].t("ok"),cancelButtonText:ne["a"].t("cancel")}).then((function(t){t.value&&e.postMessage({action:"skipWaiting"})}))};(Object(re["a"])("".concat("/ftn-vue-pwa-demo/","service-worker.js"),{registrationOptions:{scope:"/ftn-vue-pwa-demo/"},ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(e){console.log("New content is available; please refresh."),ce(e.waiting)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),"serviceWorker"in navigator)&&navigator.serviceWorker.addEventListener("controllerchange",(function(){te||(window.location.reload(),te=!0)}));var ue=n("bc3a"),ie=n.n(ue);ie.a.defaults.params={},ie.a.interceptors.request.use((function(e){e.baseURL=null;var t=w["a"].getters["auth/token"];t&&(e.headers.common["Authorization"]="Bearer ".concat(t));var n=w["a"].getters["lang/locale"];return n&&(e.headers.common["Accept-Language"]=n),e})),ie.a.interceptors.response.use((function(e){return e}),(function(e){var t=e.response.status;return t>=500&&oe()({type:"error",title:ne["a"].t("error_alert_title"),text:ne["a"].t("error_alert_text"),reverseButtons:!0,confirmButtonText:ne["a"].t("ok"),cancelButtonText:ne["a"].t("cancel")}),401===t&&w["a"].getters["auth/check"]&&oe()({type:"warning",title:ne["a"].t("token_expired_alert_title"),text:ne["a"].t("token_expired_alert_text"),reverseButtons:!0,confirmButtonText:ne["a"].t("ok"),cancelButtonText:ne["a"].t("cancel")}).then((function(){w["a"].commit("auth/LOGOUT"),W.push({name:"login"})})),Promise.reject(e)}));var se=n("5f5b");a["default"].use(se["a"]);n("7f7f");var le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"page",mode:"out-in"}},[e._t("default",[n("router-view")])],2)},fe=[],de={name:"Child"},pe=de,he=Object(d["a"])(pe,le,fe,!1,null,null,null),be=he.exports,ve=n("e070");function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ge(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(n,!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}[be,ve["HasError"],ve["AlertError"],ve["AlertSuccess"]].forEach((function(e){a["default"].component(e.name,e)})),a["default"].config.productionTip=!1,new a["default"](ge({i18n:ne["a"],store:w["a"],router:W},y))},5892:function(e,t,n){var r={"./en":["e312","lang-en"],"./en.json":["e312","lang-en"],"./id":["2d3f","lang-id"],"./id.json":["2d3f","lang-id"]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n.t(a,3)}))}a.keys=function(){return Object.keys(r)},a.id="5892",e.exports=a},"5c0b":function(e,t,n){"use strict";var r=n("e332"),a=n.n(r);a.a},"6c17":function(e,t,n){var r={"./auth.js":"c7d4","./lang.js":"bbe9"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="6c17"},"74a4":function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("3b8d"),a=n("4360");t["default"]=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a["a"].getters["auth/check"]||!a["a"].getters["auth/token"]){e.next=8;break}return e.prev=1,e.next=4,a["a"].dispatch("auth/fetchUser");case 4:e.next=8;break;case 6:e.prev=6,e.t0=e["catch"](1);case 8:r();case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,n,r){return e.apply(this,arguments)}}()},"78ca":function(e,t,n){"use strict";var r=n("2c0b"),a=n.n(r);a.a},"7b3d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-layout"},[n("navbar"),n("div",{staticClass:"container mt-4"},[n("child")],1)],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{attrs:{toggleable:"sm",type:"light",variant:"light"}},[n("div",{staticClass:"container"},[n("b-navbar-brand",{attrs:{id:"navbrand",to:{name:e.user?"home":"welcome"}}},[e._v("\n      "+e._s(e.appName)+"\n    ")]),n("b-navbar-toggle",{attrs:{target:"navbarToggler"}}),n("b-collapse",{attrs:{"is-nav":"",id:"navbarToggler"}},[n("b-navbar-nav",[n("locale-dropdown")],1),n("b-navbar-nav",{staticClass:"ml-auto"},[e.user?n("b-nav-item-dropdown",{attrs:{id:"userAuthenticated",right:""}},[n("template",{slot:"button-content"},[n("img",{staticClass:"rounded-circle profile-photo mr-1",attrs:{src:e.user.photo_url}}),e._v("\n            "+e._s(e.user.name)+"\n          ")]),n("b-dropdown-item",{attrs:{to:{name:"settings.profile"}}},[n("i",{staticClass:"fa fa-fw fa-cog"}),e._v("\n            "+e._s(e.$t("settings"))+"\n          ")]),n("b-dropdown-item",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[n("i",{staticClass:"fa fa-fw fa-sign-out"}),e._v("\n            "+e._s(e.$t("logout"))+"\n          ")])],2):[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"login"},"active-class":"active"}},[e._v("\n              "+e._s(e.$t("login"))+"\n            ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"register"},"active-class":"active"}},[e._v("\n              "+e._s(e.$t("register"))+"\n            ")])],1)]],2)],1)],1)])],1)},c=[],u=(n("8e6e"),n("ac6a"),n("456d"),n("96cf"),n("3b8d")),i=n("bd86"),s=n("2f62"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-nav-item-dropdown",{attrs:{id:"localeDropDown",text:e.locales[e.locale]}},e._l(e.locales,(function(t,r){return n("b-dropdown-item",{key:r,on:{click:function(t){return t.preventDefault(),e.setLocale(r)}}},[e._v("\n    "+e._s(t)+"\n  ")])})),1)},f=[],d=n("d3a4"),p={computed:Object(s["b"])({locale:"lang/locale",locales:"lang/locales"}),methods:{setLocale:function(e){this.$i18n.locale!==e&&(Object(d["b"])(e),this.$store.dispatch("lang/setLocale",{locale:e}))}}},h=p,b=n("2877"),v=Object(b["a"])(h,l,f,!1,null,null,null),m=v.exports;function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y={components:{LocaleDropdown:m},data:function(){return{appName:"ftn-vue-pwa"}},computed:O({},Object(s["b"])({user:"auth/user"})),methods:{logout:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("auth/logout");case 2:this.$router.push({name:"login"});case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},w=y,k=(n("f885"),Object(b["a"])(w,o,c,!1,null,"a8a4e6de",null)),j=k.exports,_={name:"MainLayout",components:{Navbar:j}},x=_,E=Object(b["a"])(x,r,a,!1,null,null,null);t["default"]=E.exports},"81be":function(e,t,n){var r={"./basic.vue":"1092","./default.vue":"7b3d"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="81be"},9091:function(e,t,n){var r={"./admin.js":"fc7a","./auth.js":"efbe","./check-auth.js":"74a4","./guest.js":"0a6b","./locale.js":"e00f"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="9091"},"9fb0":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return i}));var r="LOGOUT",a="SAVE_TOKEN",o="FETCH_USER_SUCCESS",c="FETCH_USER_FAILURE",u="UPDATE_USER",i="SET_LOCALE"},b990:function(e,t,n){},bbe9:function(e,t,n){"use strict";n.r(t);var r=n("bd86"),a=n("a78e"),o=n.n(a),c=n("9fb0"),u={id:"ID",en:"EN"};n.d(t,"state",(function(){return i})),n.d(t,"getters",(function(){return s})),n.d(t,"mutations",(function(){return l})),n.d(t,"actions",(function(){return f}));var i={locale:o.a.get("locale")||"id",locales:u},s={locale:function(e){return e.locale},locales:function(e){return e.locales}},l=Object(r["a"])({},c["e"],(function(e,t){var n=t.locale;e.locale=n})),f={setLocale:function(e,t){var n=e.commit,r=t.locale;n(c["e"],{locale:r}),o.a.set("locale",r,{expires:365})}}},c7d4:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return f})),n.d(t,"getters",(function(){return d})),n.d(t,"mutations",(function(){return p})),n.d(t,"actions",(function(){return h}));n("96cf");var r,a=n("3b8d"),o=n("bd86"),c=n("bc3a"),u=n.n(c),i=n("a78e"),s=n.n(i),l=n("9fb0"),f={user:null,token:s.a.get("token")},d={user:function(e){return e.user},token:function(e){return e.token},check:function(e){return null!==e.user}},p=(r={},Object(o["a"])(r,l["d"],(function(e,t){var n=t.token,r=t.remember;e.token=n,s.a.set("token",n,{expires:r?365:null})})),Object(o["a"])(r,l["b"],(function(e,t){var n=t.user;e.user=n})),Object(o["a"])(r,l["a"],(function(e){e.token=null,s.a.remove("token")})),Object(o["a"])(r,l["c"],(function(e){e.user=null,e.token=null,s.a.remove("token")})),Object(o["a"])(r,l["f"],(function(e,t){var n=t.user;e.user=n})),r),h={saveToken:function(e,t){var n=e.commit;n(l["d"],t)},fetchUser:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,u.a.get("/api/user");case 4:r=e.sent,a=r.data,n(l["b"],{user:a}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),n(l["a"]);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));function t(t){return e.apply(this,arguments)}return t}(),updateUser:function(e,t){var n=e.commit;n(l["f"],t)},logout:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,u.a.post("/api/logout");case 4:e.next=8;break;case 6:e.prev=6,e.t0=e["catch"](1);case 8:n(l["c"]);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));function t(t){return e.apply(this,arguments)}return t}(),fetchOauthUrl:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.provider,e.next=3,u.a.post("/api/oauth/".concat(r));case 3:return a=e.sent,o=a.data,e.abrupt("return",o.url);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()}},d3a4:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));n("ac6a"),n("456d"),n("96cf");var r=n("3b8d"),a=n("2b0e"),o=n("4360"),c=n("a925");a["default"].use(c["a"]);var u=new c["a"]({locale:"id",messages:{}});function i(e){return s.apply(this,arguments)}function s(){return s=Object(r["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!==Object.keys(u.getLocaleMessage(t)).length){e.next=5;break}return e.next=3,n("5892")("./".concat(t));case 3:r=e.sent,u.setLocaleMessage(t,r);case 5:u.locale!==t&&(u.locale=t);case 6:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i(o["a"].getters["lang/locale"]);case 2:case"end":return e.stop()}}),e)})))(),t["a"]=u},d67b:function(e,t,n){"use strict";var r=n("5459"),a=n.n(r);a.a},e00f:function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("3b8d"),a=n("4360"),o=n("d3a4");t["default"]=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["b"])(a["a"].getters["lang/locale"]);case 2:r();case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},e332:function(e,t,n){},efbe:function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("3b8d"),a=n("4360");t["default"]=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a["a"].getters["auth/check"]?r():r({name:"login"});case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},f885:function(e,t,n){"use strict";var r=n("b990"),a=n.n(r);a.a},fc7a:function(e,t,n){"use strict";n.r(t);var r=n("4360");t["default"]=function(e,t,n){"admin"!==r["a"].getters["auth/user"].role?n({name:"home"}):n()}}});
//# sourceMappingURL=app.7c8dcf1a.js.map