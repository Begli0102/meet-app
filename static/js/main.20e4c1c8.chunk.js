(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(21),i=n.n(r),s=(n(28),n(7)),c=n.n(s),u=n(8),l=n(2),d=n(6),h=n(4),f=n(3),g=(n(30),n(31),n(0)),p=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={event:{},showHideDetails:!1},e.handleShowHideButton=function(){!0===e.state.showHideDetails?e.setState({showHideDetails:!1}):e.setState({showHideDetails:!0})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(g.jsxs)("div",{className:"event-container",children:[Object(g.jsx)("p",{className:"locations",children:t.location}),Object(g.jsx)("p",{className:"date",children:t.start.dateTime}),Object(g.jsx)("p",{className:"time",children:t.start.timeZone}),this.state.showHideDetails&&Object(g.jsxs)("div",{className:"event-details",children:[Object(g.jsx)("h2",{children:"About event"}),Object(g.jsx)("p",{className:"description",children:t.description})]}),Object(g.jsx)("button",{className:"show-hide-btn",onClick:function(){return e.handleShowHideButton()},children:this.state.showHideDetails?"hide-details":"show details"})]})}}]),n}(a.Component),v=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(g.jsx)("div",{children:Object(g.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(g.jsx)("li",{children:Object(g.jsx)(p,{event:e})},e.id)}))})})}}]),n}(a.Component),m=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"Alert",children:Object(g.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),b=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,fontStyle:"italic",fontSize:"15px"}},a.color="blue",a}return n}(m),w=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,fontStyle:"italic",fontSize:"15px"}},a.color="red",a}return n}(m),E=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"Can not find the city. Please try another city",suggestions:[]})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"CitySearch",children:[Object(g.jsx)("h4",{className:"search",children:"Search your city"}),Object(g.jsx)(b,{text:this.state.infoText}),Object(g.jsx)("input",{type:"text",className:"city",placeholder:"Type the city you want",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(g.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(g.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(g.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(g.jsx)("b",{className:"suggest",children:"See all cities"})},"all")]})]})}}]),n}(a.Component),j=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={eventValue:32,errorText:""},e.handleEventInputChanged=function(t){var n=t.target.value;if(n<1||n>32)return e.setState({eventValue:n,errorText:"Choose the number between 1 and 32"});e.setState({eventValue:n,errorText:""}),e.props.eventCount(n)},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"event-number",children:[Object(g.jsx)("h4",{className:"text-events",children:"Number of Events"}),Object(g.jsx)(w,{text:this.state.errorText}),Object(g.jsx)("input",{type:"number",name:"numberOfEvent",className:"event-number-input",placeholder:"32",value:this.state.eventValue,onChange:this.handleEventInputChanged})]})}}]),n}(a.Component),A=n(23),I=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],O=n(11),C=n.n(O),y=n(9),R=n.n(y),S=function(e){var t=e.map((function(e){return e.location}));return Object(A.a)(new Set(t))},x=function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(c.a.mark((function e(){var t,n,a,o,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return R.a.done(),e.abrupt("return",I);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),R.a.done(),e.abrupt("return",JSON.parse(t));case 8:return e.next=10,B();case 10:if(!(n=e.sent)){e.next=20;break}return Q(),a="https://069f7muo32.execute-api.eu-central-1.amazonaws.com/dev/api/get-events"+n,e.next=16,C.a.get(a);case 16:return(o=e.sent).data&&(r=S(o.data.events),localStorage.setItem("lastEvents",JSON.stringify(o.data)),localStorage.setItem("locations",JSON.stringify(r))),R.a.done(),e.abrupt("return",o.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(c.a.mark((function e(){var t,n,a,o,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,x(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(o=e.sent){e.next=20;break}return e.next=17,C.a.get("https://069f7muo32.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return r=e.sent,i=r.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",o&&T(o));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},T=function(){var e=Object(u.a)(c.a.mark((function e(t){var n,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch(" https://069f7muo32.execute-api.eu-central-1.amazonaws.com/dev/api/token"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(o=a.access_token)&&localStorage.setItem("access_token",o),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n(50);var F=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={events:[],locations:[],eventValue:32,currentLocation:"all",showWelcomeScreen:void 0},e.updateEvents=function(t){k().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t})),o=e.state.eventValue;e.mounted&&e.setState({events:a.slice(0,o),currentLocation:t})}))},e.eventCount=function(t){var n=e.state.currentLocation;e.setState({eventValue:t}),e.updateEvents(n)},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(" ").shift(),number:t}}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t,n,a,o,r,i=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.eventValue,this.mounted=!0,n=localStorage.getItem("access_token"),a=!x(n).error,o=new URLSearchParams(window.location.search),r=o.get("code"),this.setState({showWelcomeScreen:!(r||a)}),navigator.onLine?this.setState({warningText:""}):this.setState({warningText:"You are currently using the app offline. Events may be out of date."}),(r||a)&&this.mounted&&k().then((function(e){i.mounted&&i.setState({events:e.slice(0,t),locations:S(e)})}));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?Object(g.jsx)("div",{className:"App"}):Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAIAAADdvvtQAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAADxJJREFUeJztnIlzG+UZh/mTkgAJAwRC4ku25UOWb1nxLeu2TtvyfcWO4zSQcE0oA0NT0kmHkjYECgyFobR0mGFgoBToBQN0oLQUCrRhEpjpT1qskfbblVd6FdvQ38wzGtm7+2m137Pv977f7uqaXYeGCSmZa7Z9D8h3GgpERFAgIoICEREUiIigQEQEBSIiKBARQYGICApERFAgIoICEREUiIigQEQEBSIiKBARQYGICApERFAgIoICEREUiIigQEQEBSIiKBARQYGICApERFAgIoICEREUiIigQEQEBSIiKBARQYGICApERFAgIoICEREUiIigQEQEBSIiKBARQYGICApERFAgIoICEREUiIigQEQEBSIiKBARQYGICApERFAgIoICEREUiIigQEQEBSIiKBARQYGICApERFAgIoICEREUiIigQEQEBSIiKBARQYGICApERFAgIoICEREUiIigQEQEBSIiKBARQYGICApEROwggW6qGgHbvhukKKwKtPvQ8LUVHrA7835PRSkftlv5z8Fq740ZafZWegabRrsaQtt+REhRWBXoLtfES75FcK5v6k7XxPmBmRstR4uqGt9611hFjW+1M7knf1HQETnRPXZ79/iTQ3NPD88965n3NUeyS6+v8Nxa5cVrtc2/7UeKGGJVoA57KOSI1NX6E85YuCWq4W4MZ1fYX+W9sdJYKUjT0xDqtIec9UHdInut/5H+6d6Ndg5Ue5c6kmd6J+90jd9a7d1X6TnePeZ3RPDPbT9SxBCrAjXXBQKOiM3mH2gKI2xotNQHtKUYgJ4fmX9meK6yxqdue3PVyB3d457m0bXOMd2i+9ypDnuw3R68ODj7knfxbN8UHMU/YSeWXlfhGWuN9TWGR3LCEtlRlCeJRvg57U7d3TNRbTMQKD0SVXsRh/Ca/SeiEZKelc5kQ63/lGscyRDyKkj20OHJproARkysgwgEk2psvt6cUFcsXfbQb0cWclloT8D4khvE13m4d0rXZptdH1z/TyhbFYY+RizZY3l9DGpIfXyOCDr48IYfGATxT7y5p2eiXDuGpOqb5Hou74ZXugXZOr6prkGAk2Hb+3Jb2ESgVFv83p6J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",alt:"logo",className:"logo"}),Object(g.jsx)("h1",{className:"header",children:"Meet-app"}),Object(g.jsxs)("div",{className:"search-container",children:[Object(g.jsx)(E,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(g.jsx)(j,{numberOfEvents:this.state.numberOfEvents,eventCount:this.eventCount})]}),Object(g.jsx)(v,{events:this.state.events})]})}}]),n}(a.Component),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),r(e),i(e)}))};n(22).config("c9c64e46ef4b4b93bfa3ba49cc02f554").install(),i.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(F,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet-app","/service-worker.js");U?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Y(t,e)}))}}(),N()}},[[52,1,2]]]);
//# sourceMappingURL=main.20e4c1c8.chunk.js.map