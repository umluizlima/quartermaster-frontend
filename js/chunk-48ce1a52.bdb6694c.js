(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48ce1a52"],{1169:function(t,e,r){var o=r("2d95");t.exports=Array.isArray||function(t){return"Array"==o(t)}},"11e9":function(t,e,r){var o=r("52a7"),n=r("4630"),a=r("6821"),i=r("6a99"),s=r("69a8"),l=r("c69a"),u=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?u:function(t,e){if(t=a(t),e=i(e,!0),l)try{return u(t,e)}catch(r){}if(s(t,e))return n(!o.f.call(t,e),t[e])}},"37c8":function(t,e,r){e.f=r("2b4c")},"3a72":function(t,e,r){var o=r("7726"),n=r("8378"),a=r("2d00"),i=r("37c8"),s=r("86cc").f;t.exports=function(t){var e=n.Symbol||(n.Symbol=a?{}:o.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:i.f(t)})}},"463e":function(t,e,r){},"5dbc":function(t,e,r){var o=r("d3f4"),n=r("8b97").set;t.exports=function(t,e,r){var a,i=e.constructor;return i!==r&&"function"==typeof i&&(a=i.prototype)!==r.prototype&&o(a)&&n&&n(t,a),t}},"65ec":function(t,e,r){"use strict";var o=r("463e"),n=r.n(o);n.a},"67ab":function(t,e,r){var o=r("ca5a")("meta"),n=r("d3f4"),a=r("69a8"),i=r("86cc").f,s=0,l=Object.isExtensible||function(){return!0},u=!r("79e5")(function(){return l(Object.preventExtensions({}))}),c=function(t){i(t,o,{value:{i:"O"+ ++s,w:{}}})},f=function(t,e){if(!n(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,o)){if(!l(t))return"F";if(!e)return"E";c(t)}return t[o].i},b=function(t,e){if(!a(t,o)){if(!l(t))return!0;if(!e)return!1;c(t)}return t[o].w},d=function(t){return u&&p.NEED&&l(t)&&!a(t,o)&&c(t),t},p=t.exports={KEY:o,NEED:!1,fastKey:f,getWeak:b,onFreeze:d}},"7bbc":function(t,e,r){var o=r("6821"),n=r("9093").f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return n(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==a.call(t)?s(t):n(o(t))}},"7f7f":function(t,e,r){var o=r("86cc").f,n=Function.prototype,a=/^\s*function ([^ (]*)/,i="name";i in n||r("9e1e")&&o(n,i,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},"8a81":function(t,e,r){"use strict";var o=r("7726"),n=r("69a8"),a=r("9e1e"),i=r("5ca1"),s=r("2aba"),l=r("67ab").KEY,u=r("79e5"),c=r("5537"),f=r("7f20"),b=r("ca5a"),d=r("2b4c"),p=r("37c8"),m=r("3a72"),h=r("d4c0"),v=r("1169"),y=r("cb7c"),g=r("d3f4"),j=r("6821"),I=r("6a99"),_=r("4630"),x=r("2aeb"),w=r("7bbc"),S=r("11e9"),N=r("86cc"),O=r("0d58"),E=S.f,k=N.f,F=w.f,T=o.Symbol,$=o.JSON,G=$&&$.stringify,L="prototype",q=d("_hidden"),M=d("toPrimitive"),D={}.propertyIsEnumerable,Y=c("symbol-registry"),P=c("symbols"),C=c("op-symbols"),A=Object[L],R="function"==typeof T,H=o.QObject,V=!H||!H[L]||!H[L].findChild,U=a&&u(function(){return 7!=x(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,e,r){var o=E(A,e);o&&delete A[e],k(t,e,r),o&&t!==A&&k(A,e,o)}:k,J=function(t){var e=P[t]=x(T[L]);return e._k=t,e},K=R&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},W=function(t,e,r){return t===A&&W(C,e,r),y(t),e=I(e,!0),y(r),n(P,e)?(r.enumerable?(n(t,q)&&t[q][e]&&(t[q][e]=!1),r=x(r,{enumerable:_(0,!1)})):(n(t,q)||k(t,q,_(1,{})),t[q][e]=!0),U(t,e,r)):k(t,e,r)},B=function(t,e){y(t);var r,o=h(e=j(e)),n=0,a=o.length;while(a>n)W(t,r=o[n++],e[r]);return t},X=function(t,e){return void 0===e?x(t):B(x(t),e)},z=function(t){var e=D.call(this,t=I(t,!0));return!(this===A&&n(P,t)&&!n(C,t))&&(!(e||!n(this,t)||!n(P,t)||n(this,q)&&this[q][t])||e)},Q=function(t,e){if(t=j(t),e=I(e,!0),t!==A||!n(P,e)||n(C,e)){var r=E(t,e);return!r||!n(P,e)||n(t,q)&&t[q][e]||(r.enumerable=!0),r}},Z=function(t){var e,r=F(j(t)),o=[],a=0;while(r.length>a)n(P,e=r[a++])||e==q||e==l||o.push(e);return o},tt=function(t){var e,r=t===A,o=F(r?C:j(t)),a=[],i=0;while(o.length>i)!n(P,e=o[i++])||r&&!n(A,e)||a.push(P[e]);return a};R||(T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=b(arguments.length>0?arguments[0]:void 0),e=function(r){this===A&&e.call(C,r),n(this,q)&&n(this[q],t)&&(this[q][t]=!1),U(this,t,_(1,r))};return a&&V&&U(A,t,{configurable:!0,set:e}),J(t)},s(T[L],"toString",function(){return this._k}),S.f=Q,N.f=W,r("9093").f=w.f=Z,r("52a7").f=z,r("2621").f=tt,a&&!r("2d00")&&s(A,"propertyIsEnumerable",z,!0),p.f=function(t){return J(d(t))}),i(i.G+i.W+i.F*!R,{Symbol:T});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;et.length>rt;)d(et[rt++]);for(var ot=O(d.store),nt=0;ot.length>nt;)m(ot[nt++]);i(i.S+i.F*!R,"Symbol",{for:function(t){return n(Y,t+="")?Y[t]:Y[t]=T(t)},keyFor:function(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var e in Y)if(Y[e]===t)return e},useSetter:function(){V=!0},useSimple:function(){V=!1}}),i(i.S+i.F*!R,"Object",{create:X,defineProperty:W,defineProperties:B,getOwnPropertyDescriptor:Q,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),$&&i(i.S+i.F*(!R||u(function(){var t=T();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))})),"JSON",{stringify:function(t){var e,r,o=[t],n=1;while(arguments.length>n)o.push(arguments[n++]);if(r=e=o[1],(g(e)||void 0!==t)&&!K(t))return v(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!K(e))return e}),o[1]=e,G.apply($,o)}}),T[L][M]||r("32e9")(T[L],M,T[L].valueOf),f(T,"Symbol"),f(Math,"Math",!0),f(o.JSON,"JSON",!0)},"8b97":function(t,e,r){var o=r("d3f4"),n=r("cb7c"),a=function(t,e){if(n(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{o=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),o(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,r){return a(t,r),e?t.__proto__=r:o(t,r),t}}({},!1):void 0),check:a}},9093:function(t,e,r){var o=r("ce10"),n=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,n)}},aa77:function(t,e,r){var o=r("5ca1"),n=r("be13"),a=r("79e5"),i=r("fdef"),s="["+i+"]",l="​",u=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),f=function(t,e,r){var n={},s=a(function(){return!!i[t]()||l[t]()!=l}),u=n[t]=s?e(b):i[t];r&&(n[r]=u),o(o.P+o.F*s,"String",n)},b=f.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=f},ac4d:function(t,e,r){r("3a72")("asyncIterator")},ac6a:function(t,e,r){for(var o=r("cadf"),n=r("0d58"),a=r("2aba"),i=r("7726"),s=r("32e9"),l=r("84f2"),u=r("2b4c"),c=u("iterator"),f=u("toStringTag"),b=l.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=n(d),m=0;m<p.length;m++){var h,v=p[m],y=d[v],g=i[v],j=g&&g.prototype;if(j&&(j[c]||s(j,c,b),j[f]||s(j,f,v),l[v]=b,y))for(h in o)j[h]||a(j,h,o[h],!0)}},c5f6:function(t,e,r){"use strict";var o=r("7726"),n=r("69a8"),a=r("2d95"),i=r("5dbc"),s=r("6a99"),l=r("79e5"),u=r("9093").f,c=r("11e9").f,f=r("86cc").f,b=r("aa77").trim,d="Number",p=o[d],m=p,h=p.prototype,v=a(r("2aeb")(h))==d,y="trim"in String.prototype,g=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=y?e.trim():b(e,3);var r,o,n,a=e.charCodeAt(0);if(43===a||45===a){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+e}for(var i,l=e.slice(2),u=0,c=l.length;u<c;u++)if(i=l.charCodeAt(u),i<48||i>n)return NaN;return parseInt(l,o)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof p&&(v?l(function(){h.valueOf.call(r)}):a(r)!=d)?i(new m(g(e)),r,p):g(e)};for(var j,I=r("9e1e")?u(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;I.length>_;_++)n(m,j=I[_])&&!n(p,j)&&f(p,j,c(m,j));p.prototype=h,h.constructor=p,r("2aba")(o,d,p)}},c78a:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)},reset:t.clearForm}},["/categories"==t.resource?r("CategoryFields",{attrs:{obj:t.form}}):"/items"==t.resource?r("ItemFields",{attrs:{obj:t.form}}):"/users"==t.resource?r("UserFields",{attrs:{obj:t.form}}):"/thirdparties"==t.resource?r("ThirdpartyFields",{attrs:{obj:t.form}}):"/lendings"==t.resource?r("LendingFields",{attrs:{obj:t.form}}):"/reservations"==t.resource?r("ReservationFields",{attrs:{obj:t.form}}):t._e(),r("div",{attrs:{id:"formButtons"}},[t.objectId?r("b-button",{attrs:{type:"submit",variant:"warning"}},[t._v("Confirmar")]):r("b-button",{attrs:{type:"submit",variant:"success"}},[t._v("Confirmar")]),0!=Object.keys(t.form)?r("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Limpar")]):t._e()],1)],1)},n=[],a=(r("c5f6"),r("7c15")),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-form-group",{attrs:{id:"nameInputGroup",label:"Nome","label-for":"nameInput","label-class":"font-weight-bold"}},[r("b-form-input",{attrs:{id:"nameInput",type:"text",required:""},model:{value:t.obj.name,callback:function(e){t.$set(t.obj,"name",e)},expression:"obj.name"}})],1),r("b-form-group",{attrs:{id:"descriptionInputGroup",label:"Descrição","label-for":"descriptionInput","label-class":"font-weight-bold"}},[r("b-form-input",{attrs:{id:"descriptionInput",type:"text"},model:{value:t.obj.description,callback:function(e){t.$set(t.obj,"description",e)},expression:"obj.description"}})],1)],1)},s=[],l={name:"CategoryFields",props:{obj:{type:Object,required:!0}}},u=l,c=r("2877"),f=Object(c["a"])(u,i,s,!1,null,null,null),b=f.exports,d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-form-group",{attrs:{id:"nameInputGroup",label:"Nome","label-for":"nameInput","label-class":"font-weight-bold"}},[r("b-form-input",{attrs:{id:"nameInput",type:"text",required:""},model:{value:t.obj.name,callback:function(e){t.$set(t.obj,"name",e)},expression:"obj.name"}})],1),r("b-form-group",{attrs:{id:"descriptionInputGroup",label:"Descrição","label-for":"descriptionInput","label-class":"font-weight-bold"}},[r("b-form-input",{attrs:{id:"descriptionInput",type:"text"},model:{value:t.obj.description,callback:function(e){t.$set(t.obj,"description",e)},expression:"obj.description"}})],1),r("b-form-group",{attrs:{id:"categoryInputGroup",label:"Categoria","label-for":"categoryInput","label-class":"font-weight-bold"}},[r("b-form-select",{attrs:{id:"categoryInput",options:t.categories},model:{value:t.obj.category_id,callback:function(e){t.$set(t.obj,"category_id",e)},expression:"obj.category_id"}})],1),r("b-form-group",{attrs:{id:"statusInputGroup",label:"Status","label-for":"statusInput","label-class":"font-weight-bold"}},[r("b-form-radio-group",{attrs:{id:"statusInput",buttons:"","button-variant":"outline-primary",options:t.status,required:""},model:{value:t.obj.available,callback:function(e){t.$set(t.obj,"available",e)},expression:"obj.available"}})],1),r("b-form-group",{attrs:{id:"registryInputGroup",label:"Tombo","label-for":"registryInput","label-class":"font-weight-bold"}},[r("b-form-input",{attrs:{id:"registryInput",type:"number"},model:{value:t.obj.registry,callback:function(e){t.$set(t.obj,"registry",e)},expression:"obj.registry"}})],1)],1)},p=[],m=(r("7f7f"),r("ac4d"),r("8a81"),r("ac6a"),{name:"ItemFields",props:{obj:{type:Object,required:!0}},data:function(){return{status:[{text:"Disponível",value:!0},{text:"Indisponível",value:!1}],categories:[{value:null,text:""}]}},mounted:function(){this.getCategories()},methods:{getCategories:function(){var t=this,e=new a["a"]("/categories");e.get().then(function(e){var r=!0,o=!1,n=void 0;try{for(var a,i=e.data[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var s=a.value;t.categories.push({value:s.id,text:s.name})}}catch(l){o=!0,n=l}finally{try{r||null==i.return||i.return()}finally{if(o)throw n}}})}}}),h=m,v=Object(c["a"])(h,d,p,!1,null,null,null),y=v.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-form-group",{attrs:{id:"firstNameInputGroup",label:"Nome","label-for":"firstNameInput","label-class":"font-weight-bold"}},[r("b-form-input",{attrs:{id:"firstNameInput",type:"text",required:""},model:{value:t.obj.first_name,callback:function(e){t.$set(t.obj,"first_name",e)},expression:"obj.first_name"}})],1),r("b-form-group",{attrs:{id:"lastNameInputGroup",label:"Sobrenome","label-for":"lastNameInput","label-class":"font-weight-bold"}},[r("b-form-input",{attrs:{id:"lastNameInput",type:"text",required:""},model:{value:t.obj.last_name,callback:function(e){t.$set(t.obj,"last_name",e)},expression:"obj.last_name"}})],1),r("b-form-group",{attrs:{id:"emailInputGroup",label:"E-mail","label-for":"emailInput","label-class":"font-weight-bold"}},[r("b-form-input",{attrs:{id:"emailInput",type:"email",required:""},model:{value:t.obj.email,callback:function(e){t.$set(t.obj,"email",e)},expression:"obj.email"}})],1),r("b-form-group",{attrs:{id:"adminInputGroup",label:"Função","label-for":"adminInput","label-class":"font-weight-bold"}},[r("b-form-radio-group",{attrs:{id:"adminInput",buttons:"","button-variant":"outline-primary",options:t.admin,required:""},model:{value:t.obj.admin,callback:function(e){t.$set(t.obj,"admin",e)},expression:"obj.admin"}})],1),r("p",[t._v(" Novos usuários são criados com a senha padrão 'abcdef'")])],1)},j=[],I={name:"UserFields",props:{obj:{type:Object,required:!0}},data:function(){return{admin:[{text:"Administrador",value:!0},{text:"Usuário",value:!1}]}}},_=I,x=Object(c["a"])(_,g,j,!1,null,null,null),w=x.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-form-group",{attrs:{id:"firstNameInputGroup",label:"Nome","label-for":"firtsNameInput","label-class":"font-weight-bold"}},[r("b-form-input",{attrs:{id:"firstNameInput",type:"text",required:""},model:{value:t.obj.first_name,callback:function(e){t.$set(t.obj,"first_name",e)},expression:"obj.first_name"}})],1),r("b-form-group",{attrs:{id:"lastNameInputGroup",label:"Sobrenome","label-for":"lastNameInput","label-class":"font-weight-bold"}},[r("b-form-input",{attrs:{id:"lastNameInput",type:"text",required:""},model:{value:t.obj.last_name,callback:function(e){t.$set(t.obj,"last_name",e)},expression:"obj.last_name"}})],1),r("b-form-group",{attrs:{id:"emailInputGroup",label:"E-mail","label-for":"emailInput","label-class":"font-weight-bold"}},[r("b-form-input",{attrs:{id:"emailInput",type:"email",required:""},model:{value:t.obj.email,callback:function(e){t.$set(t.obj,"email",e)},expression:"obj.email"}})],1),r("b-form-group",{attrs:{id:"phoneInputGroup",label:"Telefone","label-for":"phoneInput","label-class":"font-weight-bold"}},[r("b-form-input",{attrs:{id:"phoneInput",type:"tel",required:""},model:{value:t.obj.phone,callback:function(e){t.$set(t.obj,"phone",e)},expression:"obj.phone"}})],1)],1)},N=[],O={name:"ThirdpartyFields",props:{obj:{type:Object,required:!0}}},E=O,k=Object(c["a"])(E,S,N,!1,null,null,null),F=k.exports,T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-form-group",{attrs:{id:"userInputGroup",label:"Responsável","label-for":"userInput","label-class":"font-weight-bold"}},[r("b-form-select",{attrs:{id:"userInput",options:t.users,required:""},model:{value:t.obj.user_id,callback:function(e){t.$set(t.obj,"user_id",e)},expression:"obj.user_id"}})],1),r("b-form-group",{attrs:{id:"thirdpartyInputGroup",label:"Tomador","label-for":"thirdpartyInput","label-class":"font-weight-bold"}},[r("b-form-select",{attrs:{id:"thirdpartyInput",options:t.thirdparties,required:""},model:{value:t.obj.thirdparty_id,callback:function(e){t.$set(t.obj,"thirdparty_id",e)},expression:"obj.thirdparty_id"}})],1),r("b-form-group",{attrs:{id:"nameInputGroup",label:"Evento","label-for":"nameInput","label-class":"font-weight-bold"}},[r("b-form-input",{attrs:{id:"nameInput",type:"text",required:""},model:{value:t.obj.name,callback:function(e){t.$set(t.obj,"name",e)},expression:"obj.name"}})],1),r("b-form-group",{attrs:{id:"descriptionInputGroup",label:"Descrição","label-for":"descriptionInput","label-class":"font-weight-bold"}},[r("b-form-input",{attrs:{id:"descriptionInput",type:"text"},model:{value:t.obj.description,callback:function(e){t.$set(t.obj,"description",e)},expression:"obj.description"}})],1),r("b-form-group",{attrs:{id:"dateStartInputGroup",label:"Início","label-for":"dateStartInput","label-class":"font-weight-bold"}},[r("b-form-input",{attrs:{id:"dateStartInput",type:"datetime-local",required:""},model:{value:t.obj.date_start,callback:function(e){t.$set(t.obj,"date_start",e)},expression:"obj.date_start"}})],1),r("b-form-group",{attrs:{id:"dateEndInputGroup",label:"Fim","label-for":"dateEndInput","label-class":"font-weight-bold"}},[r("b-form-input",{attrs:{id:"dateEndInput",type:"datetime-local",required:""},model:{value:t.obj.date_end,callback:function(e){t.$set(t.obj,"date_end",e)},expression:"obj.date_end"}})],1)],1)},$=[],G=r("c1df"),L=r.n(G),q={name:"ReservationForm",props:{obj:{type:Object,required:!0}},data:function(){return{users:[],thirdparties:[]}},mounted:function(){this.obj.user_id||(this.obj.user_id=this.$store.getters.userId),this.obj.date_start||(this.obj.date_start=L()().format("YYYY-MM-DDTHH:mm")),this.obj.date_end||(this.obj.date_end=L()().add(4,"hours").format("YYYY-MM-DDTHH:mm")),this.getUsers(),this.getThirdparties()},methods:{getUsers:function(){var t=this,e=new a["a"]("/users");e.get().then(function(e){var r=!0,o=!1,n=void 0;try{for(var a,i=e.data[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var s=a.value;t.users.push({value:s.id,text:"".concat(s.first_name," ").concat(s.last_name)})}}catch(l){o=!0,n=l}finally{try{r||null==i.return||i.return()}finally{if(o)throw n}}})},getThirdparties:function(){var t=this,e=new a["a"]("/thirdparties");e.get().then(function(e){var r=!0,o=!1,n=void 0;try{for(var a,i=e.data[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var s=a.value;t.thirdparties.push({value:s.id,text:"".concat(s.first_name," ").concat(s.last_name)})}}catch(l){o=!0,n=l}finally{try{r||null==i.return||i.return()}finally{if(o)throw n}}})}}},M=q,D=Object(c["a"])(M,T,$,!1,null,null,null),Y=D.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-form-group",{attrs:{id:"userInputGroup",label:"Responsável","label-for":"userInput","label-class":"font-weight-bold"}},[r("b-form-select",{attrs:{id:"userInput",options:t.users,required:""},model:{value:t.obj.user_id,callback:function(e){t.$set(t.obj,"user_id",e)},expression:"obj.user_id"}})],1),r("b-form-group",{attrs:{id:"thirdpartyInputGroup",label:"Tomador","label-for":"thirdpartyInput","label-class":"font-weight-bold"}},[r("b-form-select",{attrs:{id:"thirdpartyInput",options:t.thirdparties,required:""},model:{value:t.obj.thirdparty_id,callback:function(e){t.$set(t.obj,"thirdparty_id",e)},expression:"obj.thirdparty_id"}})],1),r("b-form-group",{attrs:{id:"itemInputGroup",label:"Item","label-for":"itemInput","label-class":"font-weight-bold"}},[r("b-form-select",{attrs:{id:"itemInput",options:t.items,required:""},model:{value:t.obj.item_id,callback:function(e){t.$set(t.obj,"item_id",e)},expression:"obj.item_id"}})],1),r("b-form-group",{attrs:{id:"dateStartInputGroup",label:"Retirada","label-for":"dateStartInput","label-class":"font-weight-bold"}},[r("b-form-input",{attrs:{id:"dateStartInput",type:"datetime-local",required:""},model:{value:t.obj.date_start,callback:function(e){t.$set(t.obj,"date_start",e)},expression:"obj.date_start"}})],1),r("b-form-group",{attrs:{id:"dateEndInputGroup",label:"Retorno","label-for":"dateEndInput","label-class":"font-weight-bold"}},[r("b-form-input",{attrs:{id:"dateEndInput",type:"datetime-local",required:""},model:{value:t.obj.date_end,callback:function(e){t.$set(t.obj,"date_end",e)},expression:"obj.date_end"}})],1),t.obj.id?r("b-form-group",{attrs:{id:"dateReturnInputGroup",label:"Entregue em","label-for":"dateReturnInput","label-class":"font-weight-bold"}},[r("b-form-input",{attrs:{id:"dateReturnInput",type:"datetime-local"},model:{value:t.obj.date_return,callback:function(e){t.$set(t.obj,"date_return",e)},expression:"obj.date_return"}})],1):t._e()],1)},C=[],A={name:"LendingForm",props:{obj:{type:Object,required:!0}},data:function(){return{users:[],thirdparties:[],items:[]}},mounted:function(){this.obj.user_id||(this.obj.user_id=this.$store.getters.userId),this.obj.date_start||(this.obj.date_start=L()().format("YYYY-MM-DDTHH:mm")),this.obj.date_end||(this.obj.date_end=L()().add(7,"days").format("YYYY-MM-DDTHH:mm")),null===this.obj.date_return&&(this.obj.date_return=L()().format("YYYY-MM-DDTHH:mm")),this.getUsers(),this.getThirdparties(),this.getItems()},methods:{getUsers:function(){var t=this,e=new a["a"]("/users");e.get().then(function(e){var r=!0,o=!1,n=void 0;try{for(var a,i=e.data[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var s=a.value;t.users.push({value:s.id,text:"".concat(s.first_name," ").concat(s.last_name)})}}catch(l){o=!0,n=l}finally{try{r||null==i.return||i.return()}finally{if(o)throw n}}})},getThirdparties:function(){var t=this,e=new a["a"]("/thirdparties");e.get().then(function(e){var r=!0,o=!1,n=void 0;try{for(var a,i=e.data[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var s=a.value;t.thirdparties.push({value:s.id,text:"".concat(s.first_name," ").concat(s.last_name)})}}catch(l){o=!0,n=l}finally{try{r||null==i.return||i.return()}finally{if(o)throw n}}})},getItems:function(){var t=this,e=new a["a"]("/items");e.get().then(function(e){var r=!0,o=!1,n=void 0;try{for(var a,i=e.data[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var s=a.value;t.items.push({value:s.id,text:s.name})}}catch(l){o=!0,n=l}finally{try{r||null==i.return||i.return()}finally{if(o)throw n}}})}}},R=A,H=Object(c["a"])(R,P,C,!1,null,null,null),V=H.exports,U={name:"CustomForm",components:{CategoryFields:b,ItemFields:y,UserFields:w,ThirdpartyFields:F,ReservationFields:Y,LendingFields:V},props:{resource:{type:String,required:!0},objectId:{type:Number,required:!1}},data:function(){return{api:new a["a"](this.resource),form:{}}},watch:{objectId:function(){var t=this;0!==this.objectId&&this.api.getOne(this.objectId).then(function(e){t.form=e.data}).catch(function(e){404===e.response.status&&t.$store.commit("setError",e.response.data.message)})}},methods:{handleSubmit:function(){var t={},e=this.form;for(var r in e)e.hasOwnProperty(r)&&"id"!==r&&(""===e[r]?t[r]=null:t[r]=e[r]);this.$emit("submitted",t)},clearForm:function(){var t=this.form;for(var e in t)t.hasOwnProperty(e)&&(t[e]=null)}}},J=U,K=(r("65ec"),Object(c["a"])(J,o,n,!1,null,null,null));e["a"]=K.exports},d4c0:function(t,e,r){var o=r("0d58"),n=r("2621"),a=r("52a7");t.exports=function(t){var e=o(t),r=n.f;if(r){var i,s=r(t),l=a.f,u=0;while(s.length>u)l.call(t,i=s[u++])&&e.push(i)}return e}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-48ce1a52.bdb6694c.js.map