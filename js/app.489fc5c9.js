(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)a=u[l],c[a]&&f.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({"lang-en":"lang-en","lang-id":"lang-id"}[e]||e)+"."+{"chunk-2c4a5ecb":"0a669718","chunk-2d0abcb4":"d7b7a5fd","chunk-2d213127":"26cef683","chunk-2d21eb45":"0886ec3a","chunk-2d225216":"bfbdee0a","chunk-2d23118b":"d0bcc8b8","chunk-3beb6d94":"8727b323","chunk-7459534f":"6836614f","chunk-93c5fdaa":"d45f87a7","chunk-da4791d4":"cb2b4071","lang-en":"305289b1","lang-id":"6a7f8577"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-2c4a5ecb":1,"chunk-93c5fdaa":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({"lang-en":"lang-en","lang-id":"lang-id"}[e]||e)+"."+{"chunk-2c4a5ecb":"9eb8e684","chunk-2d0abcb4":"31d6cfe0","chunk-2d213127":"31d6cfe0","chunk-2d21eb45":"31d6cfe0","chunk-2d225216":"31d6cfe0","chunk-2d23118b":"31d6cfe0","chunk-3beb6d94":"31d6cfe0","chunk-7459534f":"31d6cfe0","chunk-93c5fdaa":"2a2e351b","chunk-da4791d4":"31d6cfe0","lang-en":"31d6cfe0","lang-id":"31d6cfe0"}[e]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.request=r,delete a[e],d.parentNode.removeChild(d),n(o)},d.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){a[e]=0}));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(function(t,n){r=c[e]=[t,n]});t.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e),s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");o.type=r,o.request=a,n[1](o)}c[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/ftn-vue-pwa-demo/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0615":function(e,t,n){},"0a6b":function(e,t,n){"use strict";n.r(t);var r=n("4360");t["default"]=function(e,t,n){r["a"].getters["auth/check"]?n({name:"home"}):n()}},1092:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"basic-layout d-flex align-items-center justify-content-center m-0 bg-white"},[n("child")],1)},a=[],c={name:"BasicLayout"},o=c,u=(n("78ca"),n("2877")),i=Object(u["a"])(o,r,a,!1,null,null,null);t["default"]=i.exports},4360:function(e,t,n){"use strict";var r=n("bd86"),a=n("cebc"),c=n("768b"),o=(n("a481"),n("ac6a"),n("2b0e")),u=n("2f62");o["a"].use(u["a"]);var i=n("6c17"),s=i.keys().map(function(e){return[e.replace(/(^.\/)|(\.js$)/g,""),i(e)]}).reduce(function(e,t){var n=Object(c["a"])(t,2),o=n[0],u=n[1];return void 0===u.namespaced&&(u.namespaced=!0),Object(a["a"])({},e,Object(r["a"])({},o,u))},{});t["a"]=new u["a"].Store({modules:s})},5459:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("cebc"),a=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("loading",{ref:"loading"}),n("transition",{attrs:{name:"page",mode:"out-in"}},[e.layout?n(e.layout,{tag:"component"}):e._e()],1)],1)},o=[],u=n("768b"),i=(n("a481"),n("ac6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"progress",style:{width:e.percent+"%",height:e.height,opacity:e.show?1:0,"background-color":e.canSuccess?e.color:e.failedColor}})}),s=[],l={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#77b6ff",failedColor:"red"}},methods:{start:function(){var e=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){e.increase(e._cut*Math.random()),e.percent>95&&e.finish()},100),this},set:function(e){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(e),this},get:function(){return Math.floor(this.percent)},increase:function(e){return this.percent=this.percent+Math.floor(e),this},decrease:function(e){return this.percent=this.percent-Math.floor(e),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var e=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){e.show=!1,e.$nextTick(function(){setTimeout(function(){e.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}},f=l,d=(n("d67b"),n("2877")),h=Object(d["a"])(f,i,s,!1,null,"54295590",null),p=h.exports,v=n("81be"),b=v.keys().map(function(e){return[e.replace(/(^.\/)|(\.vue$)/g,""),v(e)]}).reduce(function(e,t){var n=Object(u["a"])(t,2),r=n[0],a=n[1];return e[r]=a.default||a,e},{}),m={el:"#app",components:{Loading:p},data:function(){return{layout:null,defaultLayout:"default"}},metaInfo:function(){return{title:"ftn-vue-pwa",titleTemplate:"%s · ".concat("ftn-vue-pwa")}},mounted:function(){this.$loading=this.$refs.loading},methods:{setLayout:function(e){e&&b[e]||(e=this.defaultLayout),this.layout=b[e]}}},g=m,k=(n("5c0b"),Object(d["a"])(g,c,o,!1,null,null,null)),w=k.exports,y=n("4360"),O=(n("96cf"),n("bd86")),_=n("75fc"),j=n("a745"),x=n.n(j),E=n("795b"),C=n.n(E),T=(n("5df3"),n("3b8d")),L=n("0a89"),R=n.n(L),$=function(){return n.e("chunk-2c4a5ecb").then(n.bind(null,"0462")).then(function(e){return e.default||e})},S=function(){return n.e("chunk-3beb6d94").then(n.bind(null,"e37c")).then(function(e){return e.default||e})},U=function(){return n.e("chunk-da4791d4").then(n.bind(null,"8871")).then(function(e){return e.default||e})},M=function(){return n.e("chunk-2d225216").then(n.bind(null,"e2a4")).then(function(e){return e.default||e})},N=function(){return n.e("chunk-2d21eb45").then(n.bind(null,"d762")).then(function(e){return e.default||e})},B=function(){return n.e("chunk-7459534f").then(n.bind(null,"22dcd")).then(function(e){return e.default||e})},A=function(){return n.e("chunk-2d23118b").then(n.bind(null,"eea6")).then(function(e){return e.default||e})},D=function(){return n.e("chunk-93c5fdaa").then(n.bind(null,"dfac")).then(function(e){return e.default||e})},P=function(){return n.e("chunk-2d213127").then(n.bind(null,"aab3")).then(function(e){return e.default||e})},F=function(){return n.e("chunk-2d0abcb4").then(n.bind(null,"1791")).then(function(e){return e.default||e})},I=[{path:"/",name:"welcome",component:$},{path:"/login",name:"login",component:S},{path:"/register",name:"register",component:U},{path:"/password/reset",name:"password.request",component:M},{path:"/password/reset/:token",name:"password.reset",component:N},{path:"/home",name:"home",component:A},{path:"/settings",component:D,children:[{path:"",redirect:{name:"settings.profile"}},{path:"profile",name:"settings.profile",component:P},{path:"password",name:"settings.password",component:F}]},{path:"*",component:B}],q=n("8c4f"),H=n("31bd");a["a"].use(R.a),a["a"].use(q["a"]);var G=["locale","check-auth"],J=re(n("9091")),W=V();Object(H["sync"])(y["a"],W);var K=W;function V(){var e=new q["a"]({scrollBehavior:ne,routes:I});return e.beforeEach(z),e.afterEach(X),e}function z(e,t,n){return Q.apply(this,arguments)}function Q(){return Q=Object(T["a"])(regeneratorRuntime.mark(function e(t,n,a){var c,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ee(W.getMatchedComponents(Object(r["a"])({},t)));case 2:if(c=e.sent,0!==c.length){e.next=5;break}return e.abrupt("return",a());case 5:!1!==c[c.length-1].loading&&W.app.$nextTick(function(){return W.app.$loading.start()}),o=te(c),Z(o,t,n,function(){0===arguments.length&&W.app.setLayout(c[0].layout||""),a.apply(void 0,arguments)});case 8:case"end":return e.stop()}},e)})),Q.apply(this,arguments)}function X(){return Y.apply(this,arguments)}function Y(){return Y=Object(T["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,W.app.$nextTick();case 2:W.app.$loading.finish();case 3:case"end":return e.stop()}},e)})),Y.apply(this,arguments)}function Z(e,t,n,r){var a=e.reverse(),c=function e(){if(arguments.length>0||0===a.length)return arguments.length>0&&W.app.$loading.finish(),r.apply(void 0,arguments);var c=a.pop();if("function"===typeof c)c(t,n,e);else{if(!J[c])throw Error("Undefined middleware [".concat(c,"]"));J[c](t,n,e)}};c()}function ee(e){return C.a.all(e.map(function(e){return"function"===typeof e?e():e}))}function te(e){var t=[].concat(G);return e.filter(function(e){return e.middleware}).forEach(function(e){x()(e.middleware)?t.push.apply(t,Object(_["a"])(e.middleware)):t.push(e.middleware)}),t}function ne(e,t,n){if(n)return n;if(e.hash)return{selector:e.hash};var a=W.getMatchedComponents(Object(r["a"])({},e)).slice(-1),c=Object(u["a"])(a,1),o=c[0];return o&&!1===o.scrollToTop?{}:{x:0,y:0}}function re(e){return e.keys().map(function(t){return[t.replace(/(^.\/)|(\.js$)/g,""),e(t)]}).reduce(function(e,t){var n=Object(u["a"])(t,2),a=n[0],c=n[1];return Object(r["a"])({},e,Object(O["a"])({},a,c.default))},{})}var ae,ce=n("d3a4"),oe=n("9483"),ue=n("3d20"),ie=n.n(ue),se=function(e){ie()({type:"question",title:ce["a"].t("update_available"),text:ce["a"].t("update_now"),reverseButtons:!0,showCancelButton:!0,confirmButtonText:ce["a"].t("ok"),cancelButtonText:ce["a"].t("cancel")}).then(function(t){t.value&&e.postMessage({action:"skipWaiting"})})};Object(oe["a"])("".concat("/ftn-vue-pwa-demo/","service-worker.js"),{registrationOptions:{scope:"/ftn-vue-pwa-demo/"},ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(e){console.log("New content is available; please refresh."),se(e.waiting)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),navigator.serviceWorker.addEventListener("controllerchange",function(){ae||(window.location.reload(),ae=!0)});var le=n("bc3a"),fe=n.n(le);fe.a.defaults.params={},fe.a.interceptors.request.use(function(e){e.baseURL=null;var t=y["a"].getters["auth/token"];t&&(e.params.token=t);var n=y["a"].getters["lang/locale"];return n&&(e.headers.common["Accept-Language"]=n),e}),fe.a.interceptors.response.use(function(e){return e},function(e){var t=e.response.status;return t>=500&&ie()({type:"error",title:ce["a"].t("error_alert_title"),text:ce["a"].t("error_alert_text"),reverseButtons:!0,confirmButtonText:ce["a"].t("ok"),cancelButtonText:ce["a"].t("cancel")}),401===t&&y["a"].getters["auth/check"]&&ie()({type:"warning",title:ce["a"].t("token_expired_alert_title"),text:ce["a"].t("token_expired_alert_text"),reverseButtons:!0,confirmButtonText:ce["a"].t("ok"),cancelButtonText:ce["a"].t("cancel")}).then(function(){y["a"].commit("auth/LOGOUT"),K.push({name:"login"})}),C.a.reject(e)});var de=n("9f7b"),he=n.n(de);a["a"].use(he.a);n("7f7f");var pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"page",mode:"out-in"}},[e._t("default",[n("router-view")])],2)},ve=[],be={name:"Child"},me=be,ge=Object(d["a"])(me,pe,ve,!1,null,null,null),ke=ge.exports,we=n("e070");[ke,we["HasError"],we["AlertError"],we["AlertSuccess"]].forEach(function(e){a["a"].component(e.name,e)}),a["a"].config.productionTip=!1,new a["a"](Object(r["a"])({i18n:ce["a"],store:y["a"],router:K},w))},5892:function(e,t,n){var r={"./en":["e312","lang-en"],"./en.json":["e312","lang-en"],"./id":["2d3f","lang-id"],"./id.json":["2d3f","lang-id"]};function a(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n.t(e,3)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}a.keys=function(){return Object.keys(r)},a.id="5892",e.exports=a},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(e,t,n){},"6c17":function(e,t,n){var r={"./auth.js":"c7d4","./lang.js":"bbe9"};function a(e){var t=c(e);return n(t)}function c(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id="6c17"},"74a4":function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("3b8d"),a=n("4360");t["default"]=function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a["a"].getters["auth/check"]||!a["a"].getters["auth/token"]){e.next=8;break}return e.prev=1,e.next=4,a["a"].dispatch("auth/fetchUser");case 4:e.next=8;break;case 6:e.prev=6,e.t0=e["catch"](1);case 8:r();case 9:case"end":return e.stop()}},e,null,[[1,6]])}));return function(t,n,r){return e.apply(this,arguments)}}()},7867:function(e,t,n){"use strict";var r=n("0615"),a=n.n(r);a.a},"78ca":function(e,t,n){"use strict";var r=n("d486"),a=n.n(r);a.a},"7b3d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-layout"},[n("navbar"),n("div",{staticClass:"container mt-4"},[n("child")],1)],1)},a=[],c=(n("cadf"),n("551c"),n("f751"),n("097d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-white"},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:{name:e.user?"home":"welcome"}}},[e._v("\n      "+e._s(e.appName)+"\n    ")]),n("b-navbar-toggle",{attrs:{target:"navbarToggler"}}),n("b-collapse",{attrs:{"is-nav":"",id:"navbarToggler"}},[n("b-navbar-nav",[n("locale-dropdown")],1),n("b-navbar-nav",{staticClass:"ml-auto"},[e.user?n("b-nav-item-dropdown",{attrs:{id:"userAuthenticated",right:""}},[n("template",{slot:"button-content"},[n("img",{staticClass:"rounded-circle profile-photo mr-1",attrs:{src:e.user.photo_url}}),e._v("\n            "+e._s(e.user.name)+"\n          ")]),n("b-dropdown-item",{attrs:{to:{name:"settings.profile"}}},[n("i",{staticClass:"fa fa-fw fa-cog"}),e._v("\n            "+e._s(e.$t("settings"))+"\n          ")]),n("b-dropdown-item",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[n("i",{staticClass:"fa fa-fw fa-sign-out"}),e._v("\n            "+e._s(e.$t("logout"))+"\n          ")])],2):[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"login"},"active-class":"active"}},[e._v("\n              "+e._s(e.$t("login"))+"\n            ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"register"},"active-class":"active"}},[e._v("\n              "+e._s(e.$t("register"))+"\n            ")])],1)]],2)],1)],1)])}),o=[],u=(n("96cf"),n("3b8d")),i=n("2f62"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-nav-item-dropdown",{staticClass:"m-md-2",attrs:{id:"localeDropDown",text:e.locales[e.locale]}},e._l(e.locales,function(t,r){return n("b-dropdown-item",{key:r,on:{click:function(t){return t.preventDefault(),e.setLocale(r)}}},[e._v("\n    "+e._s(t)+"\n  ")])}),1)},l=[],f=n("d3a4"),d={computed:Object(i["b"])({locale:"lang/locale",locales:"lang/locales"}),methods:{setLocale:function(e){this.$i18n.locale!==e&&(Object(f["b"])(e),this.$store.dispatch("lang/setLocale",{locale:e}))}}},h=d,p=n("2877"),v=Object(p["a"])(h,s,l,!1,null,null,null),b=v.exports,m={components:{LocaleDropdown:b},data:function(){return{appName:"ftn-vue-pwa"}},computed:Object(i["b"])({user:"auth/user"}),methods:{logout:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("auth/logout");case 2:this.$router.push({name:"login"});case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},g=m,k=(n("7867"),Object(p["a"])(g,c,o,!1,null,"37f887ea",null)),w=k.exports,y={name:"MainLayout",components:{Navbar:w}},O=y,_=Object(p["a"])(O,r,a,!1,null,null,null);t["default"]=_.exports},"81be":function(e,t,n){var r={"./basic.vue":"1092","./default.vue":"7b3d"};function a(e){var t=c(e);return n(t)}function c(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id="81be"},9091:function(e,t,n){var r={"./admin.js":"fc7a","./auth.js":"efbe","./check-auth.js":"74a4","./guest.js":"0a6b","./locale.js":"e00f"};function a(e){var t=c(e);return n(t)}function c(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id="9091"},"9fb0":function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return o}),n.d(t,"f",function(){return u}),n.d(t,"e",function(){return i});var r="LOGOUT",a="SAVE_TOKEN",c="FETCH_USER_SUCCESS",o="FETCH_USER_FAILURE",u="UPDATE_USER",i="SET_LOCALE"},bbe9:function(e,t,n){"use strict";n.r(t);var r=n("bd86"),a=n("a78e"),c=n.n(a),o=n("9fb0"),u={id:"ID",en:"EN"};n.d(t,"state",function(){return i}),n.d(t,"getters",function(){return s}),n.d(t,"mutations",function(){return l}),n.d(t,"actions",function(){return f});var i={locale:c.a.get("locale")||"id",locales:u},s={locale:function(e){return e.locale},locales:function(e){return e.locales}},l=Object(r["a"])({},o["e"],function(e,t){var n=t.locale;e.locale=n}),f={setLocale:function(e,t){var n=e.commit,r=t.locale;n(o["e"],{locale:r}),c.a.set("locale",r,{expires:365})}}},c7d4:function(e,t,n){"use strict";n.r(t),n.d(t,"state",function(){return f}),n.d(t,"getters",function(){return d}),n.d(t,"mutations",function(){return h}),n.d(t,"actions",function(){return p});n("96cf");var r,a=n("3b8d"),c=n("bd86"),o=n("bc3a"),u=n.n(o),i=n("a78e"),s=n.n(i),l=n("9fb0"),f={user:null,token:s.a.get("token")},d={user:function(e){return e.user},token:function(e){return e.token},check:function(e){return null!==e.user}},h=(r={},Object(c["a"])(r,l["d"],function(e,t){var n=t.token,r=t.remember;e.token=n,s.a.set("token",n,{expires:r?365:null})}),Object(c["a"])(r,l["b"],function(e,t){var n=t.user;e.user=n}),Object(c["a"])(r,l["a"],function(e){e.token=null,s.a.remove("token")}),Object(c["a"])(r,l["c"],function(e){e.user=null,e.token=null,s.a.remove("token")}),Object(c["a"])(r,l["f"],function(e,t){var n=t.user;e.user=n}),r),p={saveToken:function(e,t){var n=e.commit;n(l["d"],t)},fetchUser:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var n,r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,u.a.get("/api/user");case 4:r=e.sent,a=r.data,n(l["b"],{user:a}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),n(l["a"]);case 12:case"end":return e.stop()}},e,null,[[1,9]])}));function t(t){return e.apply(this,arguments)}return t}(),updateUser:function(e,t){var n=e.commit;n(l["f"],t)},logout:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,u.a.post("/api/logout");case 4:e.next=8;break;case 6:e.prev=6,e.t0=e["catch"](1);case 8:n(l["c"]);case 9:case"end":return e.stop()}},e,null,[[1,6]])}));function t(t){return e.apply(this,arguments)}return t}(),fetchOauthUrl:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=n.provider,e.next=3,u.a.post("/api/oauth/".concat(r));case 3:return a=e.sent,c=a.data,e.abrupt("return",c.url);case 6:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()}},d3a4:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var r=n("a4bb"),a=n.n(r),c=(n("96cf"),n("3b8d")),o=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),u=n("4360"),i=n("a925");o["a"].use(i["a"]);var s=new i["a"]({locale:"id",messages:{}});function l(e){return f.apply(this,arguments)}function f(){return f=Object(c["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(0!==a()(s.getLocaleMessage(t)).length){e.next=5;break}return e.next=3,n("5892")("./".concat(t));case 3:r=e.sent,s.setLocaleMessage(t,r);case 5:s.locale!==t&&(s.locale=t);case 6:case"end":return e.stop()}},e)})),f.apply(this,arguments)}Object(c["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l(u["a"].getters["lang/locale"]);case 2:case"end":return e.stop()}},e)}))(),t["a"]=s},d486:function(e,t,n){},d67b:function(e,t,n){"use strict";var r=n("5459"),a=n.n(r);a.a},e00f:function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("3b8d"),a=n("4360"),c=n("d3a4");t["default"]=function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["b"])(a["a"].getters["lang/locale"]);case 2:r();case 3:case"end":return e.stop()}},e)}));return function(t,n,r){return e.apply(this,arguments)}}()},efbe:function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("3b8d"),a=n("4360");t["default"]=function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a["a"].getters["auth/check"]?r():r({name:"login"});case 1:case"end":return e.stop()}},e)}));return function(t,n,r){return e.apply(this,arguments)}}()},fc7a:function(e,t,n){"use strict";n.r(t);var r=n("4360");t["default"]=function(e,t,n){"admin"!==r["a"].getters["auth/user"].role?n({name:"home"}):n()}}});
//# sourceMappingURL=app.489fc5c9.js.map