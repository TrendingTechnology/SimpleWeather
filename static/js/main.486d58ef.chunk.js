(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,n){},17:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(6),r=n.n(c),o=(n(12),n(3)),a=n.n(o),s=n(4),i=n(2),u=n(1),j=(n(14),n(17),n(0)),p=function(e){var t=e.temp,n=e.location,c=e.responseCity;return t&&n===c?t?Object(j.jsxs)("div",{className:"weather border",children:[Object(j.jsxs)("h1",{children:["How do you like the weather in ",n,"?"]}),Object(j.jsxs)("h2",{children:["It's ",t," C\xb0 outside :)"]})]}):void 0:Object(j.jsx)("div",{})},l=n(7),b=n.n(l),f=function(e){var t=e.location,n=e.responseCity,c=e.condition;return c&&t===n?c?Object(j.jsx)("span",{children:c}):void 0:Object(j.jsx)("span",{})},d=(n(22),function(e){return Object(j.jsxs)("div",{className:"city-search",children:["Right now in",Object(j.jsx)(b.a,{minWidth:"70",inputStyle:{fontSize:30},value:e.value,onChange:function(t){return e.onChange(t)}}),Object(j.jsx)(f,{condition:e.condition,location:e.location,responseCity:e.responseCity})]})});var h=function(e,t){var n=Object(u.useState)(e),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(u.useEffect)((function(){var n=setTimeout((function(){return o(e)}),t);return function(){return clearTimeout(n)}}),[t,e]),r},v=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.weatherapi.com/v1/current.json?key=7de576d75ec1409fbc9122745211208&q=".concat(t,"&aqi=no"));case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,console.log(c),e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(u.useState)(""),o=Object(i.a)(r,2),l=o[0],b=o[1],f=Object(u.useState)(""),O=Object(i.a)(f,2),x=O[0],m=O[1],y=Object(u.useState)(""),w=Object(i.a)(y,2),C=w[0],g=w[1],k=h(n,700),S=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v(k);case 3:t=e.sent,b(t.current.temp_c),m(t.location.name),g("it's ".concat(t.current.condition.text.toLowerCase())),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),E=Object(u.useCallback)(S,[k]);Object(u.useEffect)((function(){k&&E()}),[k,E]);return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(d,{value:n,onChange:function(e){c(e.target.value)},condition:C,location:k,responseCity:x}),Object(j.jsx)(p,{temp:l,location:k,responseCity:x})]})};r.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.486d58ef.chunk.js.map