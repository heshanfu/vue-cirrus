(function(t){function e(e){for(var r,i,s=e[0],u=e[1],l=e[2],f=0,p=[];f<s.length;f++)i=s[f],a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-cirrus/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("section",{staticClass:"padtop"},[n("space",{staticClass:"x-large"}),n("space",{staticClass:"x-large"}),n("div",{staticClass:"content"},[n("router-view")],1)],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navbar",{attrs:{dark:"",title:"Vue Cirrus"}},[n("div",{staticClass:"nav-left"},[n("v-navbar-item",{attrs:{link:"https://github.com/FlorianWoelki/vue-cirrus"}},[n("i",{staticClass:"fab fa-github fa-lg"})]),n("v-navbar-item",{attrs:{link:"https://www.npmjs.com/package/vue-cirrus"}},[n("i",{staticClass:"fab fa-npm fa-lg"})])],1),n("div",{staticClass:"nav-right"},[n("v-nav-dropdown",{attrs:{animated:""},scopedSlots:t._u([{key:"title",fn:function(){return[n("i",{staticClass:"fas fa-file-alt fa-lg"}),t._v(" Docs")]},proxy:!0}])},t._l(t.components,function(e){return n("v-nav-dropdown-item",{key:e},[t._v("\n        "+t._s(e)+"\n      ")])}),1)],1)])},s=[],u={data:function(){return{components:["Component 1","Component 2","Component 3","Component 4"]}}},l=u,c=n("2877"),f=Object(c["a"])(l,i,s,!1,null,null,null),p=f.exports,v={components:{Navbar:p}},d=v,b=Object(c["a"])(d,a,o,!1,null,null,null),m=b.exports,h=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("Coming Soon")]),n("v-btn",{attrs:{animated:"",loadingLeft:""}},[t._v("Button")])],1)},_=[],y={},w=Object(c["a"])(y,g,_,!1,null,null,null),C=w.exports;r["default"].use(h["a"]);var j=new h["a"]({routes:[{path:"/",name:"home",component:C}]});n("550f");r["default"].config.productionTip=!1,new r["default"]({router:j,render:function(t){return t(m)}}).$mount("#app")}});
//# sourceMappingURL=app.b75a9318.js.map