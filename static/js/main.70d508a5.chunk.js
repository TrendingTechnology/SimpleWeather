(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(6),c=n.n(r),a=(n(17),n(7)),s=n(8),u=n(3),o=n(12),i=n(11),l=n(1),h=n.n(l),j=n(2),v=n.n(j),p=n(4),b=n(10),f=function(){var e=Object(p.a)(v.a.mark((function e(t){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.weatherapi.com/v1/current.json?key=7de576d75ec1409fbc9122745211208&q=".concat(t,"&aqi=no"));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,console.log(r),e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),d=(n(19),n(0)),O=function(e){var t=e.location,n=Object(l.useState)("NOT FOUND"),r=Object(b.a)(n,2),c=r[0],a=r[1],s=function(){var e=Object(p.a)(v.a.mark((function e(){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(t);case 3:n=e.sent,a(n.current.temp_c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){s(t)}),[s,t]),Object(d.jsxs)("div",{className:"weather border",children:[Object(d.jsxs)("h1",{children:["How do you like the weather in ",t,"?"]}),Object(d.jsxs)("h2",{children:["It's ",c," C\xb0 outside :)"]})]})},x=n(9),m=n.n(x),w=(n(24),function(e){return Object(d.jsx)("form",{className:"city-search",children:Object(d.jsxs)("label",{children:["Right now in",Object(d.jsx)(m.a,{minWidth:"70",inputStyle:{fontSize:30},value:e.value,onChange:function(t){return e.onChange(t)}})]})})}),g=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={value:""},r.handleEvent=r.handleEvent.bind(Object(u.a)(r)),r}return Object(s.a)(n,[{key:"handleEvent",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(w,{value:this.state.value,onChange:this.handleEvent}),Object(d.jsx)(O,{location:this.state.value})]})}}]),n}(h.a.Component);c.a.render(Object(d.jsx)(g,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.70d508a5.chunk.js.map