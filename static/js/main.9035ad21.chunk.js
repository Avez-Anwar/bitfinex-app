(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,c){},24:function(e,t,c){},32:function(e,t,c){},51:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(10),r=c.n(s),j=(c(32),c.p,c(15),c(14)),l=c.n(j),a=c(4),d=c(5),b=c.n(d),o=c(11),h=c.n(o),O=(c(51),c(0));var x=function(){var e=Object(n.useState)(!0),t=Object(a.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)([]),r=Object(a.a)(s,2),j=r[0],d=r[1],o=Object(n.useState)(""),x=Object(a.a)(o,2),u=(x[0],x[1]);Object(n.useEffect)((function(){l.a.get("https://api-pub.bitfinex.com/v2/book/tBTCUSD/P0").then((function(e){i(!1),d(e.data),u("")})).catch((function(){i(!1),d([]),u("Something went Wrong...")}))}),[]);var p=j.map((function(e){return Object(O.jsxs)("div",{children:[" BTC:  ",e]})}));return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"main__funding__one",children:[Object(O.jsx)("p",{children:"NAME"}),Object(O.jsx)("p",{children:"LAST"}),Object(O.jsx)("p",{children:"24H"}),Object(O.jsx)("p",{children:"VOL USD"}),Object(O.jsxs)("div",{class:"tooltip",children:[Object(O.jsx)(h.a,{}),Object(O.jsx)("span",{class:"tooltiptext",children:"Only Favorites"})]})]}),Object(O.jsx)("div",{className:"main__fetch",children:c?"Loading...":p}),Object(O.jsxs)("div",{className:"main__fetch__funding",children:[Object(O.jsx)(b.a,{}),"FUNDING FORM"]}),Object(O.jsxs)("div",{className:"main__fetch__button",children:[Object(O.jsx)("button",{className:"fetch__button__one",children:"USD Bid"}),Object(O.jsx)("button",{className:"fetch__button__Two",children:"USD Offer"})]})]})};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var c,n,i=function(e,t){if(null==e)return{};var c,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)c=s[n],t.indexOf(c)>=0||(i[c]=e[c]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)c=s[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(i[c]=e[c])}return i}var f=n.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"});function m(e,t){var c=e.title,i=e.titleId,s=p(e,["title","titleId"]);return n.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"white",ref:t,"aria-labelledby":i},s),c?n.createElement("title",{id:i},c):null,f)}var v=n.forwardRef(m);c.p;function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var c,n,i=function(e,t){if(null==e)return{};var c,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)c=s[n],t.indexOf(c)>=0||(i[c]=e[c]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)c=s[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(i[c]=e[c])}return i}var _=n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"});function y(e,t){var c=e.title,i=e.titleId,s=N(e,["title","titleId"]);return n.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white",ref:t,"aria-labelledby":i},s),c?n.createElement("title",{id:i},c):null,_)}var C=n.forwardRef(y),w=(c.p,c(24),c(12)),S=c.n(w),k=c(26),T=c.n(k),E=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],i=t[1],s=function(){return i(!1)};return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsxs)("div",{className:"logo-nav",children:[Object(O.jsx)("div",{className:"logo-container",children:Object(O.jsx)("a",{href:"#"})}),Object(O.jsx)("div",{className:"mobile-menu",onClick:function(){return i(!c)},children:c?Object(O.jsx)(v,{className:"menu-icon"}):Object(O.jsx)(C,{className:"menu-icon"})}),Object(O.jsx)("li",{className:"option option-bit",onClick:s,children:Object(O.jsx)("a",{className:"option-a",href:"#",children:"BITFINEX"})}),Object(O.jsxs)("ul",{className:c?"nav-options active":"nav-options",children:[Object(O.jsx)("li",{className:"option",onClick:s,children:Object(O.jsx)("a",{href:"#",children:"Trading"})}),Object(O.jsx)("li",{className:"option",onClick:s,children:Object(O.jsx)("a",{href:"#",children:"Derivatives"})}),Object(O.jsx)("li",{className:"option",onClick:s,children:Object(O.jsx)("a",{href:"#",children:"Funding"})}),Object(O.jsx)("li",{className:"option",onClick:s,children:Object(O.jsx)("a",{href:"#",children:"OTC"})}),Object(O.jsx)("li",{className:"option",onClick:s,children:Object(O.jsx)("a",{href:"#",children:"More"})}),Object(O.jsx)("li",{className:"option mobile-option",onClick:s,children:Object(O.jsx)("a",{href:"#",children:"SIGN-IN"})})]})]}),Object(O.jsxs)("ul",{className:"signin-up",children:[Object(O.jsx)("li",{className:"sign-in-four",onClick:s,children:Object(O.jsx)("a",{href:"",className:"signup-btn-four",children:Object(O.jsx)(S.a,{})})}),Object(O.jsx)("li",{className:"sign-in-four",onClick:s,children:Object(O.jsx)("a",{href:"",className:"signup-btn-four",children:Object(O.jsx)(T.a,{})})}),Object(O.jsx)("li",{className:"sign-in-four",onClick:s,children:Object(O.jsx)("a",{href:"",className:"signup-btn-four",children:"LOG IN"})}),Object(O.jsx)("li",{className:"sign-in-two sign-in-star",onClick:s,children:Object(O.jsx)("a",{href:"",className:"signup-btn-two",children:"Tour up"})}),Object(O.jsx)("li",{className:"sign-in-two",onClick:s,children:Object(O.jsx)("a",{href:"",className:"signup-btn-two",children:"SIGN-UP"})}),Object(O.jsx)("li",{className:"sign-in-three",onClick:s,children:Object(O.jsx)("a",{href:"",className:"signup-btn-three",children:"English"})})]})]})};c(58);var B=function(){return Object(O.jsxs)("div",{className:"main__div",children:[Object(O.jsx)("div",{className:"main__content",children:Object(O.jsxs)("table",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"USD"}),Object(O.jsx)("td",{children:"0.013306%"}),Object(O.jsx)("td",{children:"ff"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"VOL"}),Object(O.jsx)("td",{children:"0.00"}),Object(O.jsx)("td",{children:"94"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"LOW"}),Object(O.jsx)("td",{children:"High"}),Object(O.jsx)("td",{children:"80"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"FRR APR"}),Object(O.jsx)("td",{children:"Doe"}),Object(O.jsx)("td",{children:"0.015372%"})]})]})}),Object(O.jsxs)("div",{className:"main__tickers",children:[Object(O.jsx)(b.a,{}),"TICKERS"]}),Object(O.jsxs)("div",{className:"main__tickers__one",children:[Object(O.jsx)("p",{children:"Trading"}),Object(O.jsx)("p",{children:"Derevatives"}),Object(O.jsx)("p",{children:"Funding"}),Object(O.jsx)("p",{children:"M"}),Object(O.jsxs)("div",{class:"tooltip",children:[Object(O.jsx)(h.a,{}),Object(O.jsx)("span",{class:"tooltiptext",children:"Only Favorites"})]})]}),Object(O.jsxs)("div",{className:"main__search",children:[Object(O.jsx)("input",{type:"text"}),Object(O.jsx)(S.a,{}),Object(O.jsxs)("select",{name:"cars",id:"cars",children:[Object(O.jsx)("option",{value:"volvo",children:"ANY"}),Object(O.jsx)("option",{value:"saab",children:"USD"}),Object(O.jsx)("option",{value:"opel",children:"BTC"}),Object(O.jsx)("option",{value:"audi",children:"EUR"}),Object(O.jsx)("option",{value:"audi",children:"JRY"}),Object(O.jsx)("option",{value:"audi",children:"ETH"}),Object(O.jsx)("option",{value:"audi",children:"GPB"}),Object(O.jsx)("option",{value:"audi",children:"USDt"})]})]}),Object(O.jsx)(x,{})]})},P=(c(59),c.p+"static/media/Bit-Image.4f90721b.png");var I=function(){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"content__heading",children:[Object(O.jsx)("div",{className:"content__para",children:Object(O.jsx)("p",{children:"Charts "})}),Object(O.jsx)("div",{children:Object(O.jsx)("p",{children:"USD"})})]}),Object(O.jsx)("img",{src:P,alt:""})]})};c(60);var L=function(){return Object(O.jsxs)("div",{className:"main__footer",children:[Object(O.jsx)("h2",{children:"BITFINEX"}),Object(O.jsxs)("table",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Services"}),Object(O.jsx)("th",{children:"Products"}),Object(O.jsx)("th",{children:"Company"}),Object(O.jsx)("th",{children:"Support"}),Object(O.jsx)("th",{children:"Legal & Privacy"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Exchange"}),Object(O.jsx)("td",{children:"Exchange"}),Object(O.jsx)("td",{children:"About"}),Object(O.jsx)("td",{children:"Help Center"}),Object(O.jsx)("td",{children:"Privacy"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Margin Trading"}),Object(O.jsx)("td",{children:"Mobile App"}),Object(O.jsx)("td",{children:"Affiliates"}),Object(O.jsx)("td",{children:"Contact Us"}),Object(O.jsx)("td",{children:"Exchange Terms"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Derivatives"}),Object(O.jsx)("td",{children:"Leading Pro"}),Object(O.jsx)("td",{children:"Careers"}),Object(O.jsx)("td",{children:"Bug Bounty"}),Object(O.jsx)("td",{children:"Derivative Terms"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"OTC"}),Object(O.jsx)("td",{children:"Bitfinex Borrow"}),Object(O.jsx)("td",{children:"Announcements"}),Object(O.jsx)("td",{children:"Status"}),Object(O.jsx)("td",{children:"General Notices & Terms"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Leading"}),Object(O.jsx)("td",{children:"Bitfinex Pay"}),Object(O.jsx)("td",{children:"Blog"}),Object(O.jsx)("td",{children:"Learn"}),Object(O.jsx)("td",{children:"Bitfinex Pay Terms"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"Staking"}),Object(O.jsx)("td",{children:"Bitfinex Terminal"}),Object(O.jsx)("td",{children:"Press"}),Object(O.jsx)("td",{children:"Paper Trading"}),Object(O.jsx)("td",{children:"Token Specific Terms"})]})]}),Object(O.jsx)("h4",{className:"main__name",children:"Copyright \xa9 2021  All rights reserved.Created by AVEZ ANWAR"})]})};var D=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(E,{}),Object(O.jsxs)("div",{className:"App__content",children:[Object(O.jsx)(B,{}),Object(O.jsx)(I,{})]}),Object(O.jsx)(L,{})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,74)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(D,{})}),document.getElementById("root")),A()}},[[62,1,2]]]);
//# sourceMappingURL=main.9035ad21.chunk.js.map