(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f3e2afc"],{a55b:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("h2",[e._v("Entrar")]),r("LoginForm"),r("p",[e._v("Quer pegar um item emprestado ou reservar a sala de treinamentos pela primeira vez? Cadastre-se "),r("router-link",{attrs:{to:{name:"newPerson"}}},[e._v("aqui")])],1),r("p",[e._v("Consulte a agenda de reservas "),r("router-link",{attrs:{to:{name:"calendar"}}},[e._v("aqui")])],1)],1)},n=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-form",{ref:"loginForm",on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[r("custom-alert"),r("b-form-group",{attrs:{id:"emailInputGroup",label:"E-mail","label-for":"emailInput","label-class":"font-weight-bold"}},[r("b-form-input",{attrs:{id:"emailInput",type:"email",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("b-form-group",{attrs:{id:"passwordInputGroup",label:"Senha","label-for":"passwordInput","label-class":"font-weight-bold"}},[r("b-form-input",{attrs:{id:"passwordInput",type:"password",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("b-button",{attrs:{type:"submit",variant:"success"}},[e._v("Entrar")])],1)},s=[],i=r("7c15"),u={name:"LoginForm",data:function(){return{api:new i["b"],form:{}}},mounted:function(){this.clearForm()},methods:{clearForm:function(){this.form={email:null,password:null}},handleSubmit:function(){var e=this;this.api.login(this.form).then(function(t){e.$store.dispatch("login",t.data),e.$router.push(e.$route.params.nextUrl||"/")}).catch(function(t){400===t.response.status&&e.$store.commit("setError",t.response.data.message)})}}},l=u,m=r("2877"),c=Object(m["a"])(l,o,s,!1,null,null,null),p=c.exports,d={name:"login",components:{LoginForm:p},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn}},watch:{isLoggedIn:function(e){e&&this.$router.push({name:"home"})}}},f=d,b=(r("d6db"),Object(m["a"])(f,a,n,!1,null,null,null));t["default"]=b.exports},a9e7:function(e,t,r){},d6db:function(e,t,r){"use strict";var a=r("a9e7"),n=r.n(a);n.a}}]);
//# sourceMappingURL=chunk-9f3e2afc.d69ddccf.js.map