"use strict";(self.webpackChunktips180=self.webpackChunktips180||[]).push([[9006],{54449:function(e,n,i){i.d(n,{Z:function(){return k}});var t=i(74165),l=i(15861),s=i(70885),o=i(47313),a=i(58467),r=i(2135),d=i(46417),c=function(e){var n=e.tab,i=e.active,t=e.index,l=e.onClick;return(0,d.jsx)("div",{className:i===t?"flex items-center my-2 mr-14 px-4 py-2 cursor-pointer shadow lg:shadow-none bg-gradient-to-r from-teal-500 to-blue-600 w-full lg:w-2/3 ":"flex items-center my-2 mr-14 px-4 py-2 cursor-pointer shadow lg:shadow-none bg-gradient-to-r from-white to-gray-100 lg:bg-white lg:from-white lg:to-white w-full lg:w-2/3 ",style:i===t?{color:"#FFFFFF",backgroundColor:"linear-gradient(90.12deg, #62C7A1 , #6D55F1)",fontSize:"14px",borderRadius:"5px"}:{color:"black",backgroundColor:"#FFFFFF",fontSize:"14px",borderRadius:"5px"},onClick:function(){return l()},children:n})},u=function(e){var n=e.active,i=(0,o.useState)(0),t=(0,s.Z)(i,2),l=t[0],a=t[1];return(0,d.jsx)("div",{className:"h-full left-side pt-5 items-left hidden lg:block ",style:{height:"100vh",overflowY:"scroll",position:"relative"},children:[{name:"My Profile",link:"/dashboard/profile"},{name:"My Store",link:"/dashboard/store"},{name:"How to Subscribe",link:"/dashboard/subscribe"},{name:"Make Payment",link:"/dashboard/payment"},{name:"2 Odds",link:"/dashboard/odds2"},{name:"3 Odds",link:"/dashboard/odds3"},{name:"50 Odds Plan",link:"/dashboard/50odds"},{name:"Smart Bet Plan",link:"/dashboard/smartbet"},{name:"Rollover Bet",link:"/dashboard/rollover"},{name:"Weekend 10",link:"/dashboard/weekend10"},{name:"Experts ACCA",link:"/dashboard/acca"},{name:"Banker Tips of the Day",link:"/dashboard/bankertips"},{name:"Punter\u2019s Guide",link:"/dashboard/puntersguide"},{name:"Betting Glossary",link:"/dashboard/glossary"},{name:"We Are Hiring",link:"/dashboard/hiring"}].map((function(e,i){return(0,d.jsx)(r.rU,{to:e.link,children:(0,d.jsx)(c,{tab:e.name,active:n||l,index:i,onClick:function(){return a(i)}})})}))})},v=i(83758),m=i(1413),h=i(85508),p=i.n(h),b=i(59740),x=function(e){var n=e.active,i=(0,o.useState)(0),t=(0,s.Z)(i,2),l=t[0],u=t[1],v=((0,a.s0)(),[{name:"My Profile",link:"/dashboard/profile"},{name:"My Store",link:"/dashboard/store"},{name:"How to Subscribe",link:"/dashboard/subscribe"},{name:"Make Payment",link:"/dashboard/payment"},{name:"2 Odds",link:"/dashboard/odds2"},{name:"3 Odds",link:"/dashboard/odds3"},{name:"50 Odds Plan",link:"/dashboard/50odds"},{name:"Smart Bet Plan",link:"/dashboard/smartbet"},{name:"Rollover Bet",link:"/dashboard/rollover"},{name:"Weekend 10",link:"/dashboard/weekend10"},{name:"Experts ACCA",link:"/dashboard/acca"},{name:"Banker Tips of the Day",link:"/dashboard/bankertips"},{name:"Punter\u2019s Guide",link:"/dashboard/puntersguide"},{name:"Betting Glossary",link:"/dashboard/glossary"},{name:"We Are Hiring",link:"/dashboard/hiring"}]);JSON.parse(localStorage.getItem("user"));return(0,d.jsx)("div",{className:"z-50",children:(0,d.jsx)(p(),{style:{zIndex:289},children:function(e){var i=e.isVisible;return(0,d.jsx)(b.AM,{delay:100,to:{transform:i?"translateY(0)":"translateY(-2%)"},children:function(e){return(0,d.jsx)("div",{style:{border:"1px solid #62C7A1",height:"92%",overflow:"scroll",zIndex:100},className:"w-3/5 lg:hidden fixed top-16 px-2 shadow-lg bg-white",children:(0,d.jsx)("div",{style:(0,m.Z)({},e),children:(0,d.jsx)("div",{className:"mb-10 mt-20",children:v.map((function(e,i){return(0,d.jsx)(r.rU,{to:e.link,children:(0,d.jsx)(c,{tab:e.name,active:l||n,index:i,onClick:function(){return u(i)}})})}))})})})}})}})})},f=i(34491),k=(i(88282),function(e){var n=e.Content,i=e.Top,r=e.active,c=JSON.parse(localStorage.getItem("user")),m=(0,o.useState)(!1),h=(0,s.Z)(m,2),p=h[0],b=h[1],k=localStorage.getItem("token"),g=(0,o.useState)(!0),w=(0,s.Z)(g,2),y=w[0],j=w[1],S=(0,a.s0)(),C={opened:{color:"#62C7A1"},closed:{color:"red"}},P=function(){var e,s,a,v,m,h,g,w,y,P,N=function(){var e=(0,l.Z)((0,t.Z)().mark((function e(){var n,i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://tips180.com/api","/getendpoints/auth"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(k)}});case 3:return n=e.sent,e.next=6,n.json();case 6:i=e.sent,n.ok&&500!==n.status?(j(!0),localStorage.setItem("token",i.new_token)):(S("/auth/login"),localStorage.removeItem("user"),localStorage.removeItem("token"),j(!1)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Check your network");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),A=function(e){S("/dashboard/payment"),6===e?f.Am.info("Please Subscribe to 50 Odds Plan to view 50 Odds Plan"):7===e?f.Am.info("Please Subscribe to Smart Bet Plan to view Smart Bet Plan"):8===e?f.Am.info("Please Subscribe to Rollover plan to view Rollover plan"):9===e?f.Am.info("Please Subscribe to Weekend 10 Plan view Weeekend 10 plan"):f.Am.info("Please Upgrade to Key or Premium to view Experts Acca plan"),f.Am.clearWaitingQueue()};return(0,o.useEffect)((function(){N()}),[]),(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"w-full db-bg py-10",style:{height:"100%"},children:[(0,d.jsx)("div",{className:"w-full py-10 hidden lg:block",children:(0,d.jsxs)("div",{className:"w-5/6 pl-5 rounded-xl mx-auto flex bg-white",children:[(0,d.jsx)("div",{className:"w-1/4",style:{borderRight:"1px solid #E0E0E0",minHeight:"100vh",overflowY:"scroll",zIndex:200},children:(0,d.jsx)(u,{active:r})}),(0,d.jsxs)("div",{className:"w-3/4",children:[(0,d.jsx)("div",{className:"py-4 px-10",style:{borderBottom:" 1px solid #E0E0E0"},children:i}),6===r&&("inactive"===(null===c||void 0===c||null===(e=c.odds50status)||void 0===e?void 0:e.toLowerCase())||null===(null===c||void 0===c?void 0:c.odds50status))||7===r&&("inactive"===(null===c||void 0===c||null===(s=c.isubscriptstatus)||void 0===s?void 0:s.toLowerCase())||null===(null===c||void 0===c?void 0:c.isubscriptstatus))||8===r&&("inactive"===(null===c||void 0===c||null===(a=c.rollsubscriptstatus)||void 0===a?void 0:a.toLowerCase())||null===(null===c||void 0===c?void 0:c.rollsubscriptstatus))||9===r&&("inactive"===(null===c||void 0===c||null===(v=c.w10subscriptstatus)||void 0===v?void 0:v.toLowerCase())||null===(null===c||void 0===c?void 0:c.w10subscriptstatus))||10===r&&("inactive"===(null===c||void 0===c||null===(m=c.rsubscriptstatus)||void 0===m?void 0:m.toLowerCase())||null===(null===c||void 0===c?void 0:c.rsubscriptstatus)||"Free"===(null===c||void 0===c?void 0:c.accoutplan))?A(r):(0,d.jsx)("div",{className:"px-10 py-10",style:{height:"100vh",overflowY:"scroll"},children:n})]})]})}),(0,d.jsxs)("div",{className:"w-full lg:hidden",children:[(0,d.jsxs)("div",{className:p?"text-right text-2xl mx-3":"text-left flex mx-5 w-24 h-14 text-2xl",onClick:function(){return b(!p)},children:[(0,d.jsx)("ion-icon",{size:"large",name:p?"close":"grid",style:p?C.closed:C.opened}),(0,d.jsx)("h1",{className:p?"hidden":"ml-1 millik",children:"Menu"})]}),!0===p&&(0,d.jsx)(x,{active:r}),6===r&&("inactive"===(null===c||void 0===c||null===(h=c.odds50status)||void 0===h?void 0:h.toLowerCase())||null===(null===c||void 0===c?void 0:c.odds50status))||7===r&&("inactive"===(null===c||void 0===c||null===(g=c.isubscriptstatus)||void 0===g?void 0:g.toLowerCase())||null===(null===c||void 0===c?void 0:c.isubscriptstatus))||8===r&&("inactive"===(null===c||void 0===c||null===(w=c.rollsubscriptstatus)||void 0===w?void 0:w.toLowerCase())||null===(null===c||void 0===c?void 0:c.rollsubscriptstatus))||9===r&&("inactive"===(null===c||void 0===c||null===(y=c.w10subscriptstatus)||void 0===y?void 0:y.toLowerCase())||null===(null===c||void 0===c?void 0:c.w10subscriptstatus))||10===r&&("inactive"===(null===c||void 0===c||null===(P=c.rsubscriptstatus)||void 0===P?void 0:P.toLowerCase())||null===(null===c||void 0===c?void 0:c.rsubscriptstatus))?A(r):(0,d.jsxs)("div",{className:"px-4 lg:px-10 py-5",style:{height:"100vh",overflowY:"scroll"},children:[(0,d.jsx)("div",{children:i}),(0,d.jsx)("div",{children:n})]})]})]})})};return(0,d.jsx)(v.Z,{Prop:(0,d.jsx)(P,{}),logIn:y})})},69006:function(e,n,i){i.r(n);var t=i(47313),l=i(90182),s=i(54449),o=i(17226),a=i(58467),r=i(34491),d=i(46417);n.default=function(){var e=(0,a.s0)();(0,t.useEffect)((function(){(["weekendtip","singlecombo","bts","over2"].includes(c)&&!["Key","Premium"].includes(null===i||void 0===i?void 0:i.accoutplan)||!["weekendtip","singlecombo","bts","over2","doublechance","over1","pr","correctscore"].includes(c)&&!["Premium"].includes(null===i||void 0===i?void 0:i.accoutplan))&&(e("/dashboard/payment"),["weekendtip","singlecombo","bts","over2"].includes(c)?r.Am.info("Kindly Upgrade to Key or Premium Plan to View This Store!"):r.Am.info("Kindly Upgrade to Premium Plan to View This Store!"),r.Am.clearWaitingQueue())}),[]);var n={width:"90%"},i=JSON.parse(localStorage.getItem("user")),c=window.location.href.split("/")[4],u=(0,d.jsx)("div",{className:" flex  w-full",children:(0,d.jsx)("h1",{style:{fontSize:"24px",color:"#22222"},className:"font-bold millik ",children:"3 Odds"})}),v=(0,d.jsx)("div",{children:{odds3:[{endpoint:"sure3/1",tip:"sure3tip",title:"3 Odds Tips"},{endpoint:"sure3/2",tip:"sure3tip",title:"3 Odds Tips"}]}[c].map((function(e,i){return(0,d.jsxs)("div",{className:"mt-10",children:["odds2"===c||"odds3"===c?(0,d.jsxs)("p",{className:"text-2xl millik font-bold mt-1 mb-6 text-center",children:["Set ",i+1]}):"over2"===c?(0,d.jsx)("p",{className:"text-2xl millik font-bold mt-1 mb-6 text-center",children:0===i?"Over 2.5":"Under 2.5"}):"",(0,d.jsx)(o.default,{style:n,endpoint:e.endpoint,profile:!0,tip:e.tip,index:i,link:c})]},i)}))});return(0,d.jsxs)("div",{children:[(0,d.jsx)(l.q,{children:(0,d.jsx)("title",{children:"3 Odds- Tips180"})}),(0,d.jsx)(s.Z,{Top:u,Content:v,active:5})]})}}}]);