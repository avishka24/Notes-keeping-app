(this["webpackJsonpkeeper-app"]=this["webpackJsonpkeeper-app"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(5),r=n.n(o),i=(n(19),n(13)),a=n(8),j=(n(20),n(21),n(1));var l=function(){return Object(j.jsx)("header",{children:Object(j.jsx)("h1",{children:"Notes Keeper"})})};n(23);var s=function(){var e=(new Date).getFullYear();return Object(j.jsx)("div",{children:Object(j.jsx)("footer",{children:Object(j.jsxs)("p",{children:["copyright \xa9 ",e]})})})},u=(n(24),n(11)),b=n.n(u);var d=function(e){return Object(j.jsxs)("div",{className:"note",children:[Object(j.jsx)("h1",{children:e.title}),Object(j.jsx)("p",{children:e.content}),Object(j.jsx)("button",{onClick:function(){e.onDelete(e.id)},children:Object(j.jsx)(b.a,{})})]})},O=n(7),f=n(10);n(33);var h=function(e){var t=Object(c.useState)({title:"",content:""}),n=Object(a.a)(t,2),o=n[0],r=n[1];function i(e){var t=e.target,n=t.name,c=t.value;console.log(e.target),r((function(e){return console.log(e),Object(f.a)(Object(f.a)({},e),{},Object(O.a)({},n,c))}))}return Object(j.jsx)("div",{className:"create",children:Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{name:"title",value:o.title,onChange:i,placeholder:"Title"}),Object(j.jsx)("textarea",{name:"content",value:o.content,onChange:i,placeholder:"Take a note...",rows:"3"}),Object(j.jsx)("button",{onClick:function(t){t.preventDefault(),r({title:"",content:""}),e.onAdd(o)},className:"addBtn",children:"+"})]})})};var p=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],o=t[1];function r(e){o((function(t){return t.filter((function(t,n){return console.log(t),n!==e}))}))}return console.log(n),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(l,{}),Object(j.jsx)(h,{onAdd:function(e){o((function(t){return[].concat(Object(i.a)(t),[e])}))}}),n.map((function(e,t){return Object(j.jsx)(d,{id:t,title:e.title,content:e.content,onDelete:r},t)})),Object(j.jsx)(s,{})]})};r.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.fca31360.chunk.js.map