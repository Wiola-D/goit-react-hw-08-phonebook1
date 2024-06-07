"use strict";(self.webpackChunkgoit_react_hw_08_phonebook1=self.webpackChunkgoit_react_hw_08_phonebook1||[]).push([[14],{9014:function(t,n,e){e.r(n),e.d(n,{default:function(){return Z}});var a=e(3050),s=e(4420),c=e(3553),r=function(t){return t.contacts.isLoading},i=(0,c.P1)([function(t){return t.contacts.contacts},function(t){return t.contacts.filter}],(function(t,n){return t.filter((function(t){return t.name&&t.name.toLowerCase().includes(n.toLowerCase())}))})),o=e(3634),l="Contact_buttonDelete__vZNO3",u="Contact_container__J1LZ1",d="Contact_liName__8TuQP",_=e(184),m=function(t){var n=t.contact,e=(0,s.I0)();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:u,children:[(0,_.jsxs)("p",{className:d,children:[n.name,": "]}),(0,_.jsx)("p",{children:n.number})]}),(0,_.jsx)("button",{className:l,onClick:function(){return e((0,o.GK)(n.id))},children:"Delete"})]})},h="ContactsList_noContacts__fNydB",x="ContactsList_list__KDt-1",f="ContactsList_listItem__dByPp",p=function(){var t=(0,s.v9)(i);return(0,_.jsx)("div",{children:t.length>0?(0,_.jsx)("ul",{className:x,children:t.map((function(t){return(0,_.jsx)("li",{className:f,children:(0,_.jsx)(m,{contact:t})},t.id)}))}):(0,_.jsx)("p",{className:h,children:"No contacts"})})},j="ContactForm_container__qpJ1N",C="ContactForm_button__eSwX9",v="ContactForm_title__jZguf",N="ContactForm_inputs__x3RUg",b="ContactForm_label__-cVXI",g=function(){var t=(0,s.I0)();return(0,_.jsxs)("form",{className:j,onSubmit:function(n){n.preventDefault();var e=n.target,a={name:e[0].value,number:e[1].value};t((0,o.uK)(a)),e.reset()},children:[(0,_.jsx)("h3",{className:v,children:"Add Contact"}),(0,_.jsxs)("div",{className:N,children:[(0,_.jsx)("input",{className:b,type:"text",name:"name",id:"nameInput",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+((['\\s\\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces.",required:!0,placeholder:"Enter the name"}),(0,_.jsx)("input",{className:b,type:"text",name:"number",id:"numberInput",pattern:"^\\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\\W*\\d){0,13}\\d$",title:"Phone number must start with +",required:!0,placeholder:"Enter the number"})]}),(0,_.jsx)("button",{className:C,type:"submit",children:"Add contact"})]})},y=e(1538),w=function(){var t=(0,s.I0)();return(0,_.jsx)("div",{children:(0,_.jsx)("input",{id:"filter",type:"text",name:"filter",onChange:function(n){t((0,y.T)(n.target.value))},placeholder:"Find Contact by name"})})},F=e(2791),I=e(5562),L="ContactsPage_contactsList__satCJ",k="ContactsPage_container__BnqXB",Z=function(){var t=(0,s.I0)(),n=(0,s.v9)(r);return(0,F.useEffect)((function(){t((0,o.yF)())}),[t]),(0,_.jsx)(a.B6,{children:(0,_.jsxs)("div",{className:k,children:[(0,_.jsx)(a.ql,{children:(0,_.jsx)("title",{children:"Your Contacts"})}),(0,_.jsx)("div",{children:n&&(0,_.jsx)(I.Z,{})}),(0,_.jsx)(g,{}),(0,_.jsxs)("div",{className:L,children:[(0,_.jsx)(w,{}),(0,_.jsx)(p,{})]})]})})}}}]);
//# sourceMappingURL=14.d801fa9f.chunk.js.map