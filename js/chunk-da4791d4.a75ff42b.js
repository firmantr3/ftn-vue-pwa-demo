(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da4791d4"],{"5d58":function(t,e,o){t.exports=o("d8d6")},"67bb":function(t,e,o){t.exports=o("f921")},"69d3":function(t,e,o){o("6718")("asyncIterator")},"765d":function(t,e,o){o("6718")("observable")},8871:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-8 m-auto"},[o("b-card",{attrs:{header:t.$t("register"),"header-tag":"header"}},[o("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)},keydown:function(e){t.form.onKeydown(e)}}},[o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("name")))]),o("div",{staticClass:"col-md-7"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),o("has-error",{attrs:{form:t.form,field:"name"}})],1)]),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("email")))]),o("div",{staticClass:"col-md-7"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),o("has-error",{attrs:{form:t.form,field:"email"}})],1)]),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("password")))]),o("div",{staticClass:"col-md-7"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",name:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),o("has-error",{attrs:{form:t.form,field:"password"}})],1)]),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("confirm_password")))]),o("div",{staticClass:"col-md-7"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password_confirmation")},attrs:{type:"password",name:"password_confirmation"},domProps:{value:t.form.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.form,"password_confirmation",e.target.value)}}}),o("has-error",{attrs:{form:t.form,field:"password_confirmation"}})],1)]),o("div",{staticClass:"form-group row"},[o("div",{staticClass:"col-md-7 offset-md-3 d-flex"},[o("b-button",{attrs:{variant:"primary",disabled:t.form.busy}},[t._v("\n              "+t._s(t.$t("register"))+"\n            ")]),o("login-with-github")],1)])])])],1)])},n=[],s=(o("96cf"),o("3b8d")),a=o("e070"),i=o.n(a),c=o("f2df"),u={middleware:"guest",components:{LoginWithGithub:c["a"]},metaInfo:function(){return{title:this.$t("register")}},data:function(){return{form:new i.a({name:"",email:"",password:"",password_confirmation:""})}},methods:{register:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,o,r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.form.post("/api/register");case 2:return e=t.sent,o=e.data,t.next=6,this.form.post("/api/login");case 6:return r=t.sent,n=r.data.token,this.$store.dispatch("auth/saveToken",{token:n}),t.next=11,this.$store.dispatch("auth/updateUser",{user:o});case 11:this.$router.push({name:"home"});case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},m=u,l=o("2877"),d=Object(l["a"])(m,r,n,!1,null,null,null);d.options.__file="register.vue";e["default"]=d.exports},d8d6:function(t,e,o){o("1654"),o("6c1c"),t.exports=o("ccb9").f("iterator")},f2df:function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.githubAuth?o("button",{staticClass:"btn btn-dark ml-auto",attrs:{type:"button"},on:{click:t.login}},[t._v("\n  "+t._s(t.$t("login_with"))+"\n  "),o("i",{staticClass:"fa fa-fw fa-github"})]):t._e()},n=[],s=o("a4bb"),a=o.n(s),i=o("cebc"),c=o("5d58"),u=o.n(c),m=o("67bb"),l=o.n(m);function d(t){return d="function"===typeof l.a&&"symbol"===typeof u.a?function(t){return typeof t}:function(t){return t&&"function"===typeof l.a&&t.constructor===l.a&&t!==l.a.prototype?"symbol":typeof t},d(t)}function f(t){return f="function"===typeof l.a&&"symbol"===d(u.a)?function(t){return d(t)}:function(t){return t&&"function"===typeof l.a&&t.constructor===l.a&&t!==l.a.prototype?"symbol":d(t)},f(t)}o("96cf");var p=o("3b8d"),h={name:"LoginWithGithub",computed:{githubAuth:function(){return window.config.githubAuth},url:function(){return"/api/oauth/github"}},mounted:function(){window.addEventListener("message",this.onMessage,!1)},beforeDestroy:function(){window.removeEventListener("message",this.onMessage)},methods:{login:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){var e,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=w("",this.$t("login")),t.next=3,this.$store.dispatch("auth/fetchOauthUrl",{provider:"github"});case 3:o=t.sent,e.location.href=o;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onMessage:function(t){t.origin===window.origin&&t.data.token&&(this.$store.dispatch("auth/saveToken",{token:t.data.token}),this.$router.push({name:"home"}))}}};function w(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===f(t)&&(o=t,t=""),o=Object(i["a"])({url:t,title:e,width:600,height:720},o);var r=void 0!==window.screenLeft?window.screenLeft:window.screen.left,n=void 0!==window.screenTop?window.screenTop:window.screen.top,s=window.innerWidth||document.documentElement.clientWidth||window.screen.width,c=window.innerHeight||document.documentElement.clientHeight||window.screen.height;o.left=s/2-o.width/2+r,o.top=c/2-o.height/2+n;var u=a()(o).reduce(function(t,e){return t.push("".concat(e,"=").concat(o[e])),t},[]).join(","),m=window.open(t,e,u);return window.focus&&m.focus(),m}var v=h,g=o("2877"),b=Object(g["a"])(v,r,n,!1,null,null,null);b.options.__file="LoginWithGithub.vue";e["a"]=b.exports},f921:function(t,e,o){o("014b"),o("c207"),o("69d3"),o("765d"),t.exports=o("584a").Symbol}}]);
//# sourceMappingURL=chunk-da4791d4.a75ff42b.js.map