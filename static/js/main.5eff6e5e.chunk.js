(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{73:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){e.exports={Favorite:"MyButton_Favorite__3LgFy"}},78:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(35),r=a.n(n),i=a(15),o=a(34),s=a(49),u=a(50),l=a(29),d=a.n(l),j=a(36),f=a(12),p=function(){var e=Object(j.a)(d.a.mark((function e(t){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.weatherapi.com/v1/current.json?key=7de576d75ec1409fbc9122745211208&q=".concat(t,"&aqi=no"));case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,console.log(c),e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),h=p,b="SET_CITY",O="UPDATE_WEATHER";function v(e){return{type:b,payload:e}}var m={location:"",responseLocation:"",country:"",temp:"",condition:"",wind:"",pressure:"",humidity:"",code:"",isDay:""};var y=a(16),x="ADD_TO_FAVORITES",w="REMOVE_FROM_FAVORITES",g="GET_CITIES";var D={arrOfCities:[]};var C=function(e){return function(t){N.dispatch(function(e){return{type:x,payload:e}}(e))}},S=function(e){return function(t){N.dispatch(function(e){return{type:w,payload:e}}(e))}},_=Object(u.composeWithDevTools)(Object(o.applyMiddleware)(s.a)),F=Object(o.combineReducers)({cities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(f.a)(Object(f.a)({},e),{},{arrOfCities:[].concat(Object(y.a)(e.arrOfCities),[t.payload])});case w:return Object(f.a)(Object(f.a)({},e),{},{arrOfCities:e.arrOfCities.filter((function(e){return e!==t.payload}))});case g:return Object(f.a)(Object(f.a)({},e),{},{arrOfCities:t.payload});default:return e}},weatherData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(f.a)(Object(f.a)({},e),{},{location:t.payload.toLowerCase()});case O:return Object(f.a)(Object(f.a)({},e),{},{responseLocation:t.payload.location.name,country:t.payload.location.country,temp:t.payload.current.temp_c,condition:"it's ".concat(t.payload.current.condition.text.toLowerCase()),wind:t.payload.current.wind_kph,pressure:t.payload.current.pressure_mb,humidity:t.payload.current.humidity,code:t.payload.current.condition.code,isDay:t.payload.current.is_day});default:return e}}}),N=Object(o.createStore)(F,_),E=a(103),I=(a(73),a(1)),k=function(){var e=JSON.parse(localStorage.getItem("cities"));return e.length>0?Object(I.jsx)("div",{className:"cities-list",children:e.map((function(e){return Object(I.jsx)("div",{className:"city",children:e})}))}):Object(I.jsx)("h1",{className:"empty-list",children:"Oops! You haven't added any city to your favorites yet!"})},L=a(7),T=a(54),R=a.n(T),A=(a(75),a(76),Object(i.b)((function(e){return{location:e.weatherData.location,responseLocation:e.weatherData.responseLocation,condition:e.weatherData.condition}}))((function(e){return e.condition&&e.location.toLowerCase()===e.responseLocation.toLowerCase()?e.condition?Object(I.jsx)("div",{className:"condition",children:e.condition}):void 0:Object(I.jsx)("span",{})}))),J=a(57),M=(a(77),a(104)),W=a(101),V=a(102),q=["isFavorite"],z=function(e){var t=e.isFavorite,a=Object(J.a)(e,q);return Object(I.jsx)(M.a,Object(f.a)(Object(f.a)({},a),{},{checked:t,icon:Object(I.jsx)(W.a,{}),checkedIcon:Object(I.jsx)(V.a,{}),size:"large",className:"Favorite",sx:{color:"white","&.Mui-checked":{color:"white"}}}))},B=Object(i.b)((function(e){return{location:e.weatherData.location,favoriteCities:e.cities.arrOfCities}}),(function(e){return{onChange:function(t){e(v(t.target.value))},addToFavorites:function(t){e(C(t))},removeFromFavorites:function(t){e(S(t))}}}))((function(e){var t=Object(c.useState)(e.favoriteCities.includes(e.location)),a=Object(L.a)(t,2),n=a[0],r=a[1];return Object(c.useEffect)((function(){r(e.favoriteCities.includes(e.location))}),[e.location]),Object(c.useEffect)((function(){localStorage.setItem("cities",JSON.stringify(e.favoriteCities))}),[e.favoriteCities]),Object(I.jsxs)("div",{className:"city-search",children:[Object(I.jsx)(z,{isFavorite:n,onClick:function(){n?(e.removeFromFavorites(e.location),r(!n)):(e.addToFavorites(e.location),r(!n))}}),Object(I.jsx)("h1",{children:"Right now in"}),Object(I.jsx)(R.a,{type:"text",minWidth:"70",inputStyle:{fontSize:35,fontWeight:600,display:"block"},value:e.location,onChange:function(t){return e.onChange(t)}}),Object(I.jsx)(A,{})]})})),H=Object(i.b)((function(e){return{code:e.weatherData.code,isDay:e.weatherData.isDay}}))((function(e){var t="day";e.isDay||(t="night");var a="/assets/icons/".concat(t,"/").concat(e.code,".svg");return Object(I.jsx)("div",{className:"icon",children:Object(I.jsx)("object",{data:"/weather-by-evergreen"+a,type:"image/svg+xml",className:"icon"})})})),Y=(a(78),Object(i.b)((function(e){return{location:e.weatherData.location,responseLocation:e.weatherData.responseLocation,country:e.weatherData.country,temp:e.weatherData.temp,wind:e.weatherData.wind,pressure:e.weatherData.pressure,humidity:e.weatherData.humidity,code:e.weatherData.code,isDay:e.weatherData.isDay}}))((function(e){var t=(1e3*e.wind/3600).toFixed(1),a=(.750063755419211*e.pressure).toFixed();return e.temp&&e.location.toLowerCase()===e.responseLocation.toLowerCase()?e.temp?Object(I.jsxs)("div",{className:"weather grid",children:[Object(I.jsx)(H,{}),Object(I.jsx)("div",{className:"temp",children:Object(I.jsx)("h1",{children:e.temp.toFixed()})}),Object(I.jsxs)("div",{className:"flex properties",children:[Object(I.jsxs)("div",{className:"properties__value",children:[t,Object(I.jsx)("span",{children:"m/s"})]}),Object(I.jsxs)("div",{className:"properties__value",children:[a,Object(I.jsx)("span",{children:"mm Hg"})]}),Object(I.jsxs)("div",{className:"properties__value",children:[e.humidity,Object(I.jsx)("span",{children:"%"})]})]})]}):void 0:Object(I.jsx)("div",{})}))),G=function(){return Object(I.jsxs)("div",{className:"app flex-container",children:[Object(I.jsx)(B,{}),Object(I.jsx)(Y,{})]})};var P=function(e,t){var a=Object(c.useState)(e),n=Object(L.a)(a,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){var a=setTimeout((function(){return i(e)}),t);return function(){return clearTimeout(a)}}),[t,e]),r},U=a(22),K=Object(U.a)(),Q=Object(i.b)((function(e){return{location:e.weatherData.location,favoriteCities:e.cities.arrOfCities}}))((function(e){Object(c.useEffect)((function(){localStorage.getItem("location")&&""===e.location&&N.dispatch(v(localStorage.getItem("location")))}),[]),Object(c.useEffect)((function(){return function(){localStorage.setItem("location",e.location)}}),[]);var t=P(e.location.trim(),700),a=Object(c.useCallback)(function(e){return function(){var t=Object(j.a)(d.a.mark((function t(a){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h(e);case 3:c=t.sent,N.dispatch({type:O,payload:c}),localStorage.setItem("location",c.location.name),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(t),[t]);return Object(c.useEffect)((function(){t&&a()}),[t,a]),Object(I.jsx)(E.b,{history:K,children:Object(I.jsxs)(E.c,{children:[Object(I.jsx)(E.a,{exact:!0,path:"/weather-by-evergreen",children:Object(I.jsx)(G,{})}),Object(I.jsx)(E.a,{exact:!0,path:"/city/:name",children:Object(I.jsx)(G,{})}),Object(I.jsx)(E.a,{exact:!0,path:"/cities",children:Object(I.jsx)(k,{})})]})})})),X=(a(83),a(84),a(56)),Z=a(10);if(localStorage.getItem("cities")){var $=localStorage.getItem("cities"),ee=JSON.parse($);N.dispatch({type:g,payload:ee})}else localStorage.setItem("cities","[]");var te=Object(X.a)({palette:{primary:{main:"#ffffff",darker:"#ffffff"},secondary:{main:"#ffffff",darker:"#ffffff"}}}),ae=document.getElementById("root");r.a.render(Object(I.jsx)(i.a,{store:N,children:Object(I.jsx)(Z.c,{theme:te,children:Object(I.jsx)(Q,{})})}),ae)}},[[85,1,2]]]);
//# sourceMappingURL=main.5eff6e5e.chunk.js.map