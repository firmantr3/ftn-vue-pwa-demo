(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21eb45"],{d762:function(s,t,r){"use strict";r.r(t);var a=function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-8 m-auto"},[r("b-card",{attrs:{header:s.$t("reset_password"),"header-tag":"header"}},[r("form",{on:{submit:function(t){return t.preventDefault(),s.reset(t)},keydown:function(t){s.form.onKeydown(t)}}},[r("alert-success",{attrs:{form:s.form,message:s.status}}),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-3 col-form-label text-md-right"},[s._v(s._s(s.$t("email")))]),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:s.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":s.form.errors.has("email")},attrs:{type:"email",name:"email",readonly:""},domProps:{value:s.form.email},on:{input:function(t){t.target.composing||s.$set(s.form,"email",t.target.value)}}}),r("has-error",{attrs:{form:s.form,field:"email"}})],1)]),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-3 col-form-label text-md-right"},[s._v(s._s(s.$t("password")))]),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:s.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":s.form.errors.has("password")},attrs:{type:"password",name:"password"},domProps:{value:s.form.password},on:{input:function(t){t.target.composing||s.$set(s.form,"password",t.target.value)}}}),r("has-error",{attrs:{form:s.form,field:"password"}})],1)]),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-3 col-form-label text-md-right"},[s._v(s._s(s.$t("confirm_password")))]),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:s.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",class:{"is-invalid":s.form.errors.has("password_confirmation")},attrs:{type:"password",name:"password_confirmation"},domProps:{value:s.form.password_confirmation},on:{input:function(t){t.target.composing||s.$set(s.form,"password_confirmation",t.target.value)}}}),r("has-error",{attrs:{form:s.form,field:"password_confirmation"}})],1)]),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-md-9 ml-md-auto"},[r("b-button",{attrs:{variant:"primary",disabled:s.form.busy}},[s._v("\n              "+s._s(s.$t("reset_password"))+"\n            ")])],1)])],1)])],1)])},o=[],e=(r("96cf"),r("3b8d")),i=r("e070"),n=r.n(i),m={middleware:"guest",metaInfo:function(){return{title:this.$t("reset_password")}},data:function(){return{status:"",form:new n.a({token:"",email:"",password:"",password_confirmation:""})}},created:function(){this.form.email=this.$route.query.email,this.form.token=this.$route.params.token},methods:{reset:function(){var s=Object(e["a"])(regeneratorRuntime.mark(function s(){var t,r;return regeneratorRuntime.wrap(function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,this.form.post("/api/password/reset");case 2:t=s.sent,r=t.data,this.status=r.status,this.form.reset();case 6:case"end":return s.stop()}},s,this)}));function t(){return s.apply(this,arguments)}return t}()}},l=m,d=r("2877"),c=Object(d["a"])(l,a,o,!1,null,null,null);c.options.__file="reset.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d21eb45.ff1fb349.js.map