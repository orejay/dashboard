"use strict";(self.webpackChunktips180=self.webpackChunktips180||[]).push([[513],{48513:function(e,t,s){s.r(t);var l=s(70885),n=s(47313),a=s(72704),r=s(46417);t.default=function(){var e=(0,n.useState)([]),t=(0,l.Z)(e,2),s=t[0],o=t[1];(0,n.useEffect)((function(){fetch("".concat("https://tips180.com/api","/postendpoints/news")).then((function(e){return e.json()})).then((function(e){o(e)}))}),[]);var i=(0,a.Z)("(max-width:450px)"),c=null===s||void 0===s?void 0:s.map((function(e,t){return(0,r.jsxs)("div",{className:"flex flex-col items-start w-full md:mx-2 mb-4",children:[(0,r.jsx)("div",{style:{width:i?"95vw":"370px",height:"230px",backgroundImage:"url(".concat(e.image_link,")"),backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"},className:"rounded-md mb-2"}),(0,r.jsxs)("p",{className:"font-medium w-10/12 text-sm lg:text-base mb-2",children:[e.caption.slice(0,50),"..."]}),(0,r.jsx)("a",{href:e.news_link,className:"flex items-center justify-center border-2 font-medium text-xs lg:text-sm w-2/5 p-2 rounded bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text",children:"Read More"})]},t)}));return(0,r.jsxs)("div",{className:"h-screen lg:h-auto overflow-y-scroll lg:overflow-x-scroll",style:{backgroundColor:"#FFF",padding:"80px 0"},children:[(0,r.jsxs)("div",{className:"flex w-10/12 mx-auto justify-between lg:mb-8 items-end mb-4",children:[(0,r.jsx)("h2",{className:"text-xl md:text-2xl lg:text-3xl font-medium millik",children:"Sport News"}),(0,r.jsx)("a",{href:"https://www.tips180.com/blog/",className:"bg-gradient-to-r text-sm lg:text-base underline underline-offset-1 from-teal-500 to-blue-600 text-transparent bg-clip-text decoration-cyan-600 hover:decoration-transparent font-bold",children:"More News"})]}),(0,r.jsx)("div",{className:"w-10/12 mx-auto mobilee lg:overflow-x-scroll",children:(0,r.jsx)("div",{className:"flex flex-col md:flex-row w-fit justify-between",children:c})})]})}}}]);