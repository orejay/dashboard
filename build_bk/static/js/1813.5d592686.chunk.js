"use strict";(self.webpackChunktips180=self.webpackChunktips180||[]).push([[1813],{63559:function(e,t,r){var o=r(70885),n=r(47313),s=r(31417),l=r(99842),a=r(46417);t.Z=function(e){var t,r=e.data,i=e.dat,c=e.type,d=e.onClick,u=e.rollBook,h=void 0!==u&&u,p=(0,n.useState)(localStorage.getItem("currentDayis")),x=(0,o.Z)(p,2),f=x[0],m=x[1];(0,n.useEffect)((function(){localStorage.setItem("currentDayis","today")}),[]);var v={background:"#222222",borderRadius:"5px",color:"white"},y={background:"#ffffff",borderRadius:"5px",color:"#222222",border:"1px solid #222222"};return(0,a.jsxs)("div",{className:"w-full",style:{overflow:"hidden"},children:[(0,a.jsxs)("div",{className:"w-6/6  flex justify-around",children:[(0,a.jsx)("button",{className:"py-2 px-4 lg:w-1/4 md:text-base text-sm",style:"yesterday"===f?v:y,onClick:function(){m("yesterday",localStorage.setItem("currentDayis","yesterday")),d("yesterday")},children:"Yesterday"}),(0,a.jsx)("button",{className:"py-2 px-4 lg:w-1/4 md:text-base text-sm",style:"today"===f?v:y,onClick:function(){m("today",localStorage.setItem("currentDayis","today")),d("today")},children:"Today"}),(0,a.jsx)("button",{className:"py-2 px-4 lg:w-1/4 md:text-base text-sm",style:"tomorrow"===f?v:y,onClick:function(){m("tomorrow",localStorage.setItem("currentDayis","tomorrow")),d("tomorrow")},children:"Tomorrow"})]}),(0,a.jsx)("div",{style:{width:"100%",overflow:"scroll",scrollBehavior:"smooth",whiteSpace:"nowrap"},children:(0,a.jsxs)("table",{className:"w-full text-center my-10",children:[(0,a.jsxs)("tr",{className:"w-full my-2 md:text-base text-sm",children:[(0,a.jsx)("th",{children:"Time"}),(0,a.jsx)("th",{children:"League"}),(0,a.jsx)("th",{children:"Match"}),(0,a.jsx)("th",{children:"Tip"}),"ea1"===c||"ea2"===c?(0,a.jsx)("th",{children:"Confidence"}):"",!h&&(0,a.jsx)("th",{children:"Odds"}),(0,a.jsx)("th",{children:"Scores"})]}),null===(t=r[f])||void 0===t?void 0:t.map((function(e,t){return(0,a.jsxs)("tr",{className:"py-2 md:text-base text-xs",children:[(0,a.jsx)("td",{children:null===e||void 0===e?void 0:e.time}),(0,a.jsx)("td",{children:null===e||void 0===e?void 0:e.league}),(0,a.jsx)("td",{children:null===e||void 0===e?void 0:e.name}),(0,a.jsx)("td",{children:"5o"===c?null===e||void 0===e?void 0:e.sure50tip:"sb"===c?e.smartbettip:"ro"===c?e.rollovertip:"ea1"===c?e.expertsacca1tip:e.expertsacca2tip}),"ea1"===c||"ea2"===c?(0,a.jsx)("td",{children:null===e||void 0===e?void 0:e.confidence}):"",!h&&(0,a.jsx)("td",{children:"5o"===c?null===e||void 0===e?void 0:e.sure50odds:"sb"===c?null===e||void 0===e?void 0:e.smartbetodds:"ea1"===c?null===e||void 0===e?void 0:e.expertsacca1odds:null===e||void 0===e?void 0:e.expertsacca2odds}),(0,a.jsx)("td",{children:null===e||void 0===e?void 0:e.ftscore})]},t)}))]})}),"ea1"===c||"ea2"===c?(0,a.jsx)(l.SV,{FallbackComponent:function(){return(0,a.jsx)("div",{children:(0,a.jsx)("p",{children:"Codes not available at the moment."})})},onError:function(e,t){console.error("error",e,t)},children:(0,a.jsx)(s.Z,{data:i,CD:f,odd:i&&i["".concat(f,"_odds")],type:"ea"})}):"",h&&1!==Number(h["".concat(f,"_odds")])?(0,a.jsxs)("div",{className:"my-5 lg:my-0",children:[(0,a.jsx)("p",{className:"text-sm",children:"Total Odds:"}),(0,a.jsx)("p",{className:"text-xl font-bold millik",children:h["".concat(f,"_odds")]})]}):""]})}},90130:function(e,t,r){r.r(t);var o=r(74165),n=r(4942),s=r(42982),l=r(15861),a=r(70885),i=r(47313),c=r(54449),d=(r(63559),r(31417),r(31442),r(46417));t.default=function(){localStorage.getItem("token");var e=(0,i.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],h=function(){var e=(0,l.Z)((0,o.Z)().mark((function e(){var t,r,l,a,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://tips180.com/api","/getendpoints/jobs"),{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});case 2:return t=e.sent,e.next=5,t.json();case 5:for(r=e.sent,console.log(r),l=r.jobs.roles.split(","),a=[],i=0;i<l.length;i++)a=[].concat((0,s.Z)(a),[(0,n.Z)({},i,l[i])]);u(a);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){h()}),[]);var p=(0,d.jsx)("div",{className:" flex  w-full",children:(0,d.jsx)("h1",{style:{fontSize:"24px",color:"#22222"},className:"font-bold millik ",children:"We Are Hiring!"})}),x=(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:"font-semibold text-lg pb-3",children:"We are hiring for the following positions..."}),(0,d.jsx)("div",{children:r.map((function(e,t){return(0,d.jsx)("li",{children:e["".concat(t)]},t)}))}),(0,d.jsxs)("p",{className:"pt-3",children:["Please send your CV to"," ",(0,d.jsx)("a",{href:"mailto:jobs@tips180.com",className:"underline text-blue-500",children:"jobs@tips180.com"})]})]});return(0,d.jsx)(c.Z,{Top:p,Content:x,active:17})}},99842:function(e,t,r){r.d(t,{SV:function(){return u}});var o=r(15671),n=r(43144),s=r(97326),l=r(60136),a=r(27277),i=r(47313),c=(0,i.createContext)(null),d={didCatch:!1,error:null},u=function(e){(0,l.Z)(r,e);var t=(0,a.Z)(r);function r(e){var n;return(0,o.Z)(this,r),(n=t.call(this,e)).resetErrorBoundary=n.resetErrorBoundary.bind((0,s.Z)(n)),n.state=d,n}return(0,n.Z)(r,[{key:"resetErrorBoundary",value:function(){var e=this.state.error;if(null!==e){for(var t,r,o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];null===(t=(r=this.props).onReset)||void 0===t||t.call(r,{args:n,reason:"imperative-api"}),this.setState(d)}}},{key:"componentDidCatch",value:function(e,t){var r,o;null===(r=(o=this.props).onError)||void 0===r||r.call(o,e,t)}},{key:"componentDidUpdate",value:function(e,t){var r,o,n=this.state.didCatch,s=this.props.resetKeys;n&&null!==t.error&&function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.length!==t.length||e.some((function(e,r){return!Object.is(e,t[r])}))}(e.resetKeys,s)&&(null===(r=(o=this.props).onReset)||void 0===r||r.call(o,{next:s,prev:e.resetKeys,reason:"keys"}),this.setState(d))}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.fallbackRender,o=e.FallbackComponent,n=e.fallback,s=this.state,l=s.didCatch,a=s.error,d=t;if(l){var u={error:a,resetErrorBoundary:this.resetErrorBoundary};if("function"===typeof r)d=r(u);else if(o)d=(0,i.createElement)(o,u);else{if(null!==n&&!(0,i.isValidElement)(n))throw a;d=n}}return(0,i.createElement)(c.Provider,{value:{didCatch:l,error:a,resetErrorBoundary:this.resetErrorBoundary}},d)}}],[{key:"getDerivedStateFromError",value:function(e){return{didCatch:!0,error:e}}}]),r}(i.Component)}}]);