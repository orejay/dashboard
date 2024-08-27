"use strict";(self.webpackChunktips180=self.webpackChunktips180||[]).push([[2955],{52955:function(e,n,s){s.r(n),s.d(n,{default:function(){return p}});var l=s(74165),t=s(15861),i=s(70885),o=s(47313),a=s(54449),c=s(46417),r=function(e){var n=e.match,s=e.league,l=e.tip,t=e.odds,i=e.analysis,o=e.level;return(0,c.jsxs)("div",{className:"lg:flex justify-evenly ",children:[(0,c.jsxs)("div",{className:"mx-3",children:[(0,c.jsxs)("div",{className:"my-7",style:{fontSize:"16px",color:"#4F4F4F"},children:[(0,c.jsx)("p",{children:"Match:"}),(0,c.jsx)("h3",{style:{color:"#222222",fontSize:"20px"},className:"font-bold millik",children:n})]}),(0,c.jsxs)("div",{className:"my-7",style:{fontSize:"16px",color:"#4F4F4F"},children:[(0,c.jsx)("p",{children:" League:"}),(0,c.jsx)("h3",{style:{color:"#222222",fontSize:"20px"},className:"font-bold millik",children:s})]}),(0,c.jsxs)("div",{className:"my-7",style:{fontSize:"16px",color:"#4F4F4F"},children:[(0,c.jsx)("p",{children:"Tip:"}),(0,c.jsx)("h3",{style:{color:"#222222",fontSize:"20px"},className:"font-bold millik",children:l})]})]}),(0,c.jsxs)("div",{className:"mx-3",children:[(0,c.jsxs)("div",{className:"my-7",style:{fontSize:"16px",color:"#4F4F4F"},children:[(0,c.jsx)("p",{children:"Odds:"}),(0,c.jsx)("h3",{style:{color:"#222222",fontSize:"20px"},className:"font-bold millik",children:t})]}),(0,c.jsxs)("div",{className:"my-7",style:{fontSize:"16px",color:"#4F4F4F"},children:[(0,c.jsx)("p",{children:"Analysis:"}),(0,c.jsx)("h3",{style:{color:"#222222",fontSize:"14px"},className:"font-semibold",children:i})]}),(0,c.jsxs)("div",{className:"my-7",style:{fontSize:"16px",color:"#4F4F4F"},children:[(0,c.jsx)("p",{children:"Confidence Level:"}),(0,c.jsx)("h3",{style:{color:"#222222",fontSize:"20px"},className:"font-bold millik",children:o})]})]})]})},d=s(31417),x=s(31442),u=s(2135),h=s(90182),p=function(){var e="https://tips180.com/api",n=localStorage.getItem("token"),s=(0,o.useState)(null),p=(0,i.Z)(s,2),f=p[0],m=p[1],v=(0,o.useState)(null),j=(0,i.Z)(v,2),y=j[0],k=j[1],N=(0,o.useState)(!0),g=(0,i.Z)(N,2),b=g[0],F=g[1],S=function(){var s=(0,t.Z)((0,l.Z)().mark((function s(){var t,i;return(0,l.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,fetch("".concat(e,"/getendpoints/bankers-tip"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:return t=s.sent,s.next=6,t.json();case 6:i=s.sent,t.ok?m(i):console.log(null===t||void 0===t?void 0:t.message),s.next=13;break;case 10:s.prev=10,s.t0=s.catch(0),console.log("Check your network");case 13:case"end":return s.stop()}}),s,null,[[0,10]])})));return function(){return s.apply(this,arguments)}}(),z=function(){var s=(0,t.Z)((0,l.Z)().mark((function s(){var t,i;return(0,l.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return F(!0),s.prev=1,s.next=4,fetch("".concat(e,"/getendpoints/bookings/banker"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 4:return t=s.sent,s.next=7,t.json();case 7:i=s.sent,F(!1),t.ok&&k(i),s.next=15;break;case 12:s.prev=12,s.t0=s.catch(1),console.log("Check your network");case 15:case"end":return s.stop()}}),s,null,[[1,12]])})));return function(){return s.apply(this,arguments)}}();(0,o.useEffect)((function(){S(),z()}),[]);var w=(0,c.jsx)("div",{className:"flex w-full",children:(0,c.jsx)("h1",{style:{fontSize:"24px",color:"#22222"},className:"font-bold millik",children:"Banker Tip Of The Day"})}),Z=b?(0,c.jsx)(x.Z,{}):(0,c.jsxs)(c.Fragment,{children:[null!==f&&void 0!==f&&f.msg?(0,c.jsx)("h1",{className:"text-xl millik",children:null===f||void 0===f?void 0:f.msg}):(0,c.jsx)(r,{match:null===f||void 0===f?void 0:f.name,league:null===f||void 0===f?void 0:f.league,tip:null===f||void 0===f?void 0:f.tip,odds:null===f||void 0===f?void 0:f.odds,analysis:""!==(null===f||void 0===f?void 0:f.analysis)?null===f||void 0===f?void 0:f.analysis:"N/A",level:null===f||void 0===f?void 0:f.confidence}),(0,c.jsx)("div",{className:"flex w-full justify-center",children:(0,c.jsx)("button",{className:"rounded px-3 h-9 flex justify-center items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white mx-auto lg:mx-0",children:(0,c.jsx)(u.rU,{className:"text-white mx-auto",to:"/dashboard/acca",children:"View more banker tips on expert acca"})})}),(0,c.jsx)(d.Z,{data:y,type:"banker"})]});return(0,c.jsxs)("div",{children:[(0,c.jsx)(h.q,{children:(0,c.jsx)("title",{children:"Banker Betting Tip of the Day - Tips180"})}),(0,c.jsx)(a.Z,{Top:w,Content:Z,active:11})]})}}}]);