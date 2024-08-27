"use strict";(self.webpackChunktips180=self.webpackChunktips180||[]).push([[5231],{63559:function(e,t,r){var n=r(70885),s=r(47313),o=r(31417),l=r(99842),i=r(46417);t.Z=function(e){var t,r=e.data,a=e.dat,d=e.type,c=e.onClick,u=e.rollBook,h=void 0!==u&&u,x=(0,s.useState)(localStorage.getItem("currentDayis")),v=(0,n.Z)(x,2),m=v[0],p=v[1];(0,s.useEffect)((function(){localStorage.setItem("currentDayis","today")}),[]);var f={background:"#222222",borderRadius:"5px",color:"white"},y={background:"#ffffff",borderRadius:"5px",color:"#222222",border:"1px solid #222222"};return(0,i.jsxs)("div",{className:"w-full",style:{overflow:"hidden"},children:[(0,i.jsxs)("div",{className:"w-6/6  flex justify-around",children:[(0,i.jsx)("button",{className:"py-2 px-4 lg:w-1/4 md:text-base text-sm",style:"yesterday"===m?f:y,onClick:function(){p("yesterday",localStorage.setItem("currentDayis","yesterday")),c("yesterday")},children:"Yesterday"}),(0,i.jsx)("button",{className:"py-2 px-4 lg:w-1/4 md:text-base text-sm",style:"today"===m?f:y,onClick:function(){p("today",localStorage.setItem("currentDayis","today")),c("today")},children:"Today"}),(0,i.jsx)("button",{className:"py-2 px-4 lg:w-1/4 md:text-base text-sm",style:"tomorrow"===m?f:y,onClick:function(){p("tomorrow",localStorage.setItem("currentDayis","tomorrow")),c("tomorrow")},children:"Tomorrow"})]}),(0,i.jsx)("div",{style:{width:"100%",overflow:"scroll",scrollBehavior:"smooth",whiteSpace:"nowrap"},children:(0,i.jsxs)("table",{className:"w-full text-center my-10",children:[(0,i.jsxs)("tr",{className:"w-full my-2 md:text-base text-sm",children:[(0,i.jsx)("th",{children:"Time"}),(0,i.jsx)("th",{children:"League"}),(0,i.jsx)("th",{children:"Match"}),(0,i.jsx)("th",{children:"Tip"}),"ea1"===d||"ea2"===d?(0,i.jsx)("th",{children:"Confidence"}):"",!h&&(0,i.jsx)("th",{children:"Odds"}),(0,i.jsx)("th",{children:"Scores"})]}),null===(t=r[m])||void 0===t?void 0:t.map((function(e,t){return(0,i.jsxs)("tr",{className:"py-2 md:text-base text-xs",children:[(0,i.jsx)("td",{children:null===e||void 0===e?void 0:e.time}),(0,i.jsx)("td",{children:null===e||void 0===e?void 0:e.league}),(0,i.jsx)("td",{children:null===e||void 0===e?void 0:e.name}),(0,i.jsx)("td",{children:"5o"===d?null===e||void 0===e?void 0:e.sure50tip:"sb"===d?e.smartbettip:"ro"===d?e.rollovertip:"ea1"===d?e.expertsacca1tip:e.expertsacca2tip}),"ea1"===d||"ea2"===d?(0,i.jsx)("td",{children:null===e||void 0===e?void 0:e.confidence}):"",!h&&(0,i.jsx)("td",{children:"5o"===d?null===e||void 0===e?void 0:e.sure50odds:"sb"===d?null===e||void 0===e?void 0:e.smartbetodds:"ea1"===d?null===e||void 0===e?void 0:e.expertsacca1odds:null===e||void 0===e?void 0:e.expertsacca2odds}),(0,i.jsx)("td",{children:null===e||void 0===e?void 0:e.ftscore})]},t)}))]})}),"ea1"===d||"ea2"===d?(0,i.jsx)(l.SV,{FallbackComponent:function(){return(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:"Codes not available at the moment."})})},onError:function(e,t){console.error("error",e,t)},children:(0,i.jsx)(o.Z,{data:a,CD:m,odd:a&&a["".concat(m,"_odds")],type:"ea"})}):"",h&&1!==Number(h["".concat(m,"_odds")])?(0,i.jsxs)("div",{className:"my-5 lg:my-0",children:[(0,i.jsx)("p",{className:"text-sm",children:"Total Odds:"}),(0,i.jsx)("p",{className:"text-xl font-bold millik",children:h["".concat(m,"_odds")]})]}):""]})}},15231:function(e,t,r){r.r(t);var n=r(74165),s=r(15861),o=r(70885),l=r(47313),i=r(54449),a=(r(63559),r(31417)),d=r(31442),c=r(90182),u=r(46417);t.default=function(){var e="https://tips180.com/api",t=localStorage.getItem("token"),r=(0,l.useState)(null),h=(0,o.Z)(r,2),x=h[0],v=h[1],m=(0,l.useState)({}),p=(0,o.Z)(m,2),f=p[0],y=p[1],j=(0,l.useState)(!0),k=(0,o.Z)(j,2),w=k[0],b=k[1],g=function(){var r=(0,s.Z)((0,n.Z)().mark((function r(){var s,o;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("".concat(e,"/getendpoints/w10"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:return s=r.sent,r.next=6,s.json();case 6:o=r.sent,b(!1),s.ok?v(o.matches):(localStorage.removeItem("user"),localStorage.removeItem("token")),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),console.log("Check your network");case 14:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(){return r.apply(this,arguments)}}(),C=function(){var r=(0,s.Z)((0,n.Z)().mark((function r(){var s,o;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("".concat(e,"/getendpoints/bookings/w10"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:return s=r.sent,r.next=6,s.json();case 6:o=r.sent,s.ok&&y(o),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),console.log("Check your network");case 13:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(){return r.apply(this,arguments)}}(),N=(0,u.jsx)("div",{className:" flex  w-full",children:(0,u.jsx)("h1",{style:{color:"#22222"},className:"font-bold millik md:text-2xl text-xl",children:"Weekend 10 Odds!"})}),S=(0,u.jsxs)("div",{className:"w-full",style:{overflow:"hidden"},children:[w?(0,u.jsx)(d.Z,{}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{style:{width:"100%",overflow:"scroll",scrollBehavior:"smooth",whiteSpace:"nowrap"},children:(0,u.jsx)("table",{className:"text-center my-10",children:(0,u.jsxs)("tbody",{children:[(0,u.jsxs)("tr",{className:"w-full my-2 md:text-base text-sm",children:[(0,u.jsx)("th",{children:"Date"}),(0,u.jsx)("th",{children:"Time"}),(0,u.jsx)("th",{children:"League"}),(0,u.jsx)("th",{children:"Match"}),(0,u.jsx)("th",{children:"Tip"}),(0,u.jsx)("th",{children:"Confidence"}),(0,u.jsx)("th",{children:"Odds"}),(0,u.jsx)("th",{children:"Scores"})]}),null===x||void 0===x?void 0:x.map((function(e,t){return(0,u.jsxs)("tr",{className:"py-2 md:text-base text-xs",children:[(0,u.jsx)("td",{children:"".concat(null===e||void 0===e?void 0:e.date.slice(8),"/").concat(null===e||void 0===e?void 0:e.date.slice(5,7))}),(0,u.jsx)("td",{children:null===e||void 0===e?void 0:e.time}),(0,u.jsx)("td",{children:null===e||void 0===e?void 0:e.league}),(0,u.jsx)("td",{children:null===e||void 0===e?void 0:e.name}),(0,u.jsx)("td",{children:null===e||void 0===e?void 0:e.weekend10tip}),(0,u.jsx)("td",{children:null===e||void 0===e?void 0:e.confidence}),(0,u.jsx)("td",{children:null===e||void 0===e?void 0:e.weekend10odds}),(0,u.jsx)("td",{children:null===e||void 0===e?void 0:e.ftscore})]},t)}))]})})}),(0,u.jsx)(a.Z,{data:f})]}),(0,u.jsxs)("div",{className:"md:w-5/6 mx-auto",children:[(0,u.jsxs)("div",{className:"",children:[(0,u.jsx)("h2",{className:"millik text-md",style:{color:"#4f4f4f"},children:"Notes :"}),(0,u.jsx)("p",{children:"Although matches were carefully selected by our experts, we strongly recommend you stake responsibly!"})]}),(0,u.jsx)("h2",{className:"millik text-md my-8 text-red-600",children:"STAKE WHAT YOU CAN AFFORD TO LOSE!!!"})]})]});return(0,l.useEffect)((function(){g(),C()}),[]),(0,u.jsxs)("div",{children:[(0,u.jsx)(c.q,{children:(0,u.jsx)("title",{children:"Buy Weekend 10 Odds! - Tips180"})}),(0,u.jsx)(i.Z,{Top:N,Content:S,active:9})]})}},99842:function(e,t,r){r.d(t,{SV:function(){return u}});var n=r(15671),s=r(43144),o=r(97326),l=r(60136),i=r(27277),a=r(47313),d=(0,a.createContext)(null),c={didCatch:!1,error:null},u=function(e){(0,l.Z)(r,e);var t=(0,i.Z)(r);function r(e){var s;return(0,n.Z)(this,r),(s=t.call(this,e)).resetErrorBoundary=s.resetErrorBoundary.bind((0,o.Z)(s)),s.state=c,s}return(0,s.Z)(r,[{key:"resetErrorBoundary",value:function(){var e=this.state.error;if(null!==e){for(var t,r,n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];null===(t=(r=this.props).onReset)||void 0===t||t.call(r,{args:s,reason:"imperative-api"}),this.setState(c)}}},{key:"componentDidCatch",value:function(e,t){var r,n;null===(r=(n=this.props).onError)||void 0===r||r.call(n,e,t)}},{key:"componentDidUpdate",value:function(e,t){var r,n,s=this.state.didCatch,o=this.props.resetKeys;s&&null!==t.error&&function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.length!==t.length||e.some((function(e,r){return!Object.is(e,t[r])}))}(e.resetKeys,o)&&(null===(r=(n=this.props).onReset)||void 0===r||r.call(n,{next:o,prev:e.resetKeys,reason:"keys"}),this.setState(c))}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.fallbackRender,n=e.FallbackComponent,s=e.fallback,o=this.state,l=o.didCatch,i=o.error,c=t;if(l){var u={error:i,resetErrorBoundary:this.resetErrorBoundary};if("function"===typeof r)c=r(u);else if(n)c=(0,a.createElement)(n,u);else{if(null!==s&&!(0,a.isValidElement)(s))throw i;c=s}}return(0,a.createElement)(d.Provider,{value:{didCatch:l,error:i,resetErrorBoundary:this.resetErrorBoundary}},c)}}],[{key:"getDerivedStateFromError",value:function(e){return{didCatch:!0,error:e}}}]),r}(a.Component)}}]);