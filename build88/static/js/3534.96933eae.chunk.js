"use strict";(self.webpackChunktips180=self.webpackChunktips180||[]).push([[3534],{54449:function(e,t,o){o.d(t,{Z:function(){return g}});var s=o(74165),i=o(15861),a=o(70885),n=o(47313),r=o(58467),l=o(2135),d=o(46417),u=function(e){var t=e.tab,o=e.active,s=e.index,i=e.onClick;return(0,d.jsx)("div",{className:o===s?"flex items-center my-2 mr-14 px-4 py-2 cursor-pointer shadow lg:shadow-none bg-gradient-to-r from-teal-500 to-blue-600 w-full lg:w-2/3 ":"flex items-center my-2 mr-14 px-4 py-2 cursor-pointer shadow lg:shadow-none bg-gradient-to-r from-white to-gray-100 lg:bg-white lg:from-white lg:to-white w-full lg:w-2/3 ",style:o===s?{color:"#FFFFFF",backgroundColor:"linear-gradient(90.12deg, #62C7A1 , #6D55F1)",fontSize:"14px",borderRadius:"5px"}:{color:"black",backgroundColor:"#FFFFFF",fontSize:"14px",borderRadius:"5px"},onClick:function(){return i()},children:t})},h=function(e){var t=e.active,o=(0,n.useState)(0),s=(0,a.Z)(o,2),i=s[0],r=s[1];return(0,d.jsx)("div",{className:"h-full left-side pt-5 items-left hidden lg:block ",style:{height:"100vh",overflowY:"scroll",position:"relative"},children:[{name:"My Profile",link:"/dashboard/profile"},{name:"My Store",link:"/dashboard/store"},{name:"How to Subscribe",link:"/dashboard/subscribe"},{name:"Make Payment",link:"/dashboard/payment"},{name:"2 Odds",link:"/dashboard/odds2"},{name:"3 Odds",link:"/dashboard/odds3"},{name:"50 Odds Plan",link:"/dashboard/50odds"},{name:"Smart Bet Plan",link:"/dashboard/smartbet"},{name:"Rollover Bet",link:"/dashboard/rollover"},{name:"Weekend 10",link:"/dashboard/weekend10"},{name:"Experts ACCA",link:"/dashboard/acca"},{name:"Banker Tips of the Day",link:"/dashboard/bankertips"},{name:"Punter\u2019s Guide",link:"/dashboard/puntersguide"},{name:"Betting Glossary",link:"/dashboard/glossary"},{name:"We Are Hiring",link:"/dashboard/hiring"}].map((function(e,o){return(0,d.jsx)(l.rU,{to:e.link,children:(0,d.jsx)(u,{tab:e.name,active:t||i,index:o,onClick:function(){return r(o)}})})}))})},c=o(83758),m=o(1413),y=o(85508),v=o.n(y),b=o(59740),p=function(e){var t=e.active,o=(0,n.useState)(0),s=(0,a.Z)(o,2),i=s[0],h=s[1],c=((0,r.s0)(),[{name:"My Profile",link:"/dashboard/profile"},{name:"My Store",link:"/dashboard/store"},{name:"How to Subscribe",link:"/dashboard/subscribe"},{name:"Make Payment",link:"/dashboard/payment"},{name:"2 Odds",link:"/dashboard/odds2"},{name:"3 Odds",link:"/dashboard/odds3"},{name:"50 Odds Plan",link:"/dashboard/50odds"},{name:"Smart Bet Plan",link:"/dashboard/smartbet"},{name:"Rollover Bet",link:"/dashboard/rollover"},{name:"Weekend 10",link:"/dashboard/weekend10"},{name:"Experts ACCA",link:"/dashboard/acca"},{name:"Banker Tips of the Day",link:"/dashboard/bankertips"},{name:"Punter\u2019s Guide",link:"/dashboard/puntersguide"},{name:"Betting Glossary",link:"/dashboard/glossary"},{name:"We Are Hiring",link:"/dashboard/hiring"}]);JSON.parse(localStorage.getItem("user"));return(0,d.jsx)("div",{className:"z-50",children:(0,d.jsx)(v(),{style:{zIndex:289},children:function(e){var o=e.isVisible;return(0,d.jsx)(b.AM,{delay:100,to:{transform:o?"translateY(0)":"translateY(-2%)"},children:function(e){return(0,d.jsx)("div",{style:{border:"1px solid #62C7A1",height:"92%",overflow:"scroll",zIndex:100},className:"w-3/5 lg:hidden fixed top-16 px-2 shadow-lg bg-white",children:(0,d.jsx)("div",{style:(0,m.Z)({},e),children:(0,d.jsx)("div",{className:"mb-10 mt-20",children:c.map((function(e,o){return(0,d.jsx)(l.rU,{to:e.link,children:(0,d.jsx)(u,{tab:e.name,active:i||t,index:o,onClick:function(){return h(o)}})})}))})})})}})}})})},f=o(34491),g=(o(88282),function(e){var t=e.Content,o=e.Top,l=e.active,u=JSON.parse(localStorage.getItem("user")),m=(0,n.useState)(!1),y=(0,a.Z)(m,2),v=y[0],b=y[1],g=localStorage.getItem("token"),k=(0,n.useState)(!0),w=(0,a.Z)(k,2),x=w[0],j=w[1],S=(0,r.s0)(),N={opened:{color:"#62C7A1"},closed:{color:"red"}},C=function(){var e,a,r,c,m,y,k,w,x,C,T=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://tips180.com/api","/getendpoints/auth"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(g)}});case 3:return t=e.sent,e.next=6,t.json();case 6:o=e.sent,t.ok&&500!==t.status?(j(!0),localStorage.setItem("token",o.new_token)):(S("/auth/login"),localStorage.removeItem("user"),localStorage.removeItem("token"),j(!1)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Check your network");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),A=function(e){S("/dashboard/payment"),6===e?f.Am.info("Please Subscribe to 50 Odds Plan to view 50 Odds Plan"):7===e?f.Am.info("Please Subscribe to Smart Bet Plan to view Smart Bet Plan"):8===e?f.Am.info("Please Subscribe to Rollover plan to view Rollover plan"):9===e?f.Am.info("Please Subscribe to Weekend 10 Plan view Weeekend 10 plan"):f.Am.info("Please Upgrade to Key or Premium to view Experts Acca plan"),f.Am.clearWaitingQueue()};return(0,n.useEffect)((function(){T()}),[]),(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"w-full db-bg py-10",style:{height:"100%"},children:[(0,d.jsx)("div",{className:"w-full py-10 hidden lg:block",children:(0,d.jsxs)("div",{className:"w-5/6 pl-5 rounded-xl mx-auto flex bg-white",children:[(0,d.jsx)("div",{className:"w-1/4",style:{borderRight:"1px solid #E0E0E0",minHeight:"100vh",overflowY:"scroll",zIndex:200},children:(0,d.jsx)(h,{active:l})}),(0,d.jsxs)("div",{className:"w-3/4",children:[(0,d.jsx)("div",{className:"py-4 px-10",style:{borderBottom:" 1px solid #E0E0E0"},children:o}),6===l&&("inactive"===(null===u||void 0===u||null===(e=u.odds50status)||void 0===e?void 0:e.toLowerCase())||null===(null===u||void 0===u?void 0:u.odds50status))||7===l&&("inactive"===(null===u||void 0===u||null===(a=u.isubscriptstatus)||void 0===a?void 0:a.toLowerCase())||null===(null===u||void 0===u?void 0:u.isubscriptstatus))||8===l&&("inactive"===(null===u||void 0===u||null===(r=u.rollsubscriptstatus)||void 0===r?void 0:r.toLowerCase())||null===(null===u||void 0===u?void 0:u.rollsubscriptstatus))||9===l&&("inactive"===(null===u||void 0===u||null===(c=u.w10subscriptstatus)||void 0===c?void 0:c.toLowerCase())||null===(null===u||void 0===u?void 0:u.w10subscriptstatus))||10===l&&("inactive"===(null===u||void 0===u||null===(m=u.rsubscriptstatus)||void 0===m?void 0:m.toLowerCase())||null===(null===u||void 0===u?void 0:u.rsubscriptstatus)||"Free"===(null===u||void 0===u?void 0:u.accoutplan))?A(l):(0,d.jsx)("div",{className:"px-10 py-10",style:{height:"100vh",overflowY:"scroll"},children:t})]})]})}),(0,d.jsxs)("div",{className:"w-full lg:hidden",children:[(0,d.jsxs)("div",{className:v?"text-right text-2xl mx-3":"text-left flex mx-5 w-24 h-14 text-2xl",onClick:function(){return b(!v)},children:[(0,d.jsx)("ion-icon",{size:"large",name:v?"close":"grid",style:v?N.closed:N.opened}),(0,d.jsx)("h1",{className:v?"hidden":"ml-1 millik",children:"Menu"})]}),!0===v&&(0,d.jsx)(p,{active:l}),6===l&&("inactive"===(null===u||void 0===u||null===(y=u.odds50status)||void 0===y?void 0:y.toLowerCase())||null===(null===u||void 0===u?void 0:u.odds50status))||7===l&&("inactive"===(null===u||void 0===u||null===(k=u.isubscriptstatus)||void 0===k?void 0:k.toLowerCase())||null===(null===u||void 0===u?void 0:u.isubscriptstatus))||8===l&&("inactive"===(null===u||void 0===u||null===(w=u.rollsubscriptstatus)||void 0===w?void 0:w.toLowerCase())||null===(null===u||void 0===u?void 0:u.rollsubscriptstatus))||9===l&&("inactive"===(null===u||void 0===u||null===(x=u.w10subscriptstatus)||void 0===x?void 0:x.toLowerCase())||null===(null===u||void 0===u?void 0:u.w10subscriptstatus))||10===l&&("inactive"===(null===u||void 0===u||null===(C=u.rsubscriptstatus)||void 0===C?void 0:C.toLowerCase())||null===(null===u||void 0===u?void 0:u.rsubscriptstatus))?A(l):(0,d.jsxs)("div",{className:"px-4 lg:px-10 py-5",style:{height:"100vh",overflowY:"scroll"},children:[(0,d.jsx)("div",{children:o}),(0,d.jsx)("div",{children:t})]})]})]})})};return(0,d.jsx)(c.Z,{Prop:(0,d.jsx)(C,{}),logIn:x})})},93534:function(e,t,o){o.r(t),o.d(t,{default:function(){return r}});o(47313);var s=o(54449),i=o(46417),a=[{title:"What are your odds target for the day?",content:["What is an Odd Target? Most successful punters worldwide that cash out steadily has a formula which goes - DON'T GAMBLE, INVEST! An Odd Target simply means betting budget. For Example, I have $10 today, and I want to make 100$ out of it. This simply implies I'm looking for 10 odds. This is where we - Tips180 comes in to ensure you have the best of odds provided daily."]},{title:"How do you select the best odds?",content:["Use the expert\u2019s confidence level to set your staking plans. For Example, Bordeaux vs Marseille (X) @ 3.10 odds. Expert Confidence: 65%. If I were looking for 3odds, I\u2019d rather avoid that fixture due to the high risk in the prediction market and accumulate other matches with 85% Confidence Level till I get my 3 Odds.","For accumulators, you are advised not to accumulate all into one ticket; if you are doing so, then don't stake too high. See Accumlators in Tips Store.","For Sure 2/3 ODDS category. When you get 2 sets of SURE 2/3 ODDS, you are advised to split your budget across the given sets of game.","For Example, Set 1. Real Madrid vs Getafe (HOME WIN). There are days when unforeseen upsets occur in football. Let's say it was one of those days where Getafe goes ahead to beat Madrid... Instead of feeling bad about how much stake you lost. You have a backup set- Set 2 to make up for it. It is very rare for both sets to get foiled. In Summary, if you have a $100 to stake for the Sure 2/3 odds. We advise you split your budget 60:40 across both sets."]},{title:"When should you bet?",content:["At the risk of stating the obvious, you bet when you believe the odds being offered are too high, or let me put it in another way, you think an event is more likely than the bookies are implying in their odds. Another way of saying this is you should bet when the expected value of the bet based on the probability forecast is greater than 1.",'For Example: Barcelona vs Levante @1.03 odds for Home Win. I have seen some punters make the mistake of including this in their games "just to boost their returned income" This is absolutely wrong! $1000 x 1.03 odds will still give you $1000.3 #ValuelessBet!']},{title:"How much should you bet?",content:["There are many different systems for determining the size of your bets and each system has a different risk/return profile. Some of the key characteristics to look at are:",(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"my-2",children:"- The risk of going bust;"})," ",(0,i.jsx)("p",{className:"my-2",children:"- The risk of losing money;"})," ",(0,i.jsx)("p",{className:"my-2",children:"- The volatility of returns and the size of your betting ticket; and"})," ",(0,i.jsx)("p",{className:"my-2",children:"- The magnitude of winnings when you get things right."})]}),"Each of these characteristics is in turn impacted by the level of edge that you have, the size of the bookies over round and various other factors. There is no approach to position sizing that will cause a bad forecasting system to make money \u2013 as a starting point, you have to have an edge-Betensured over the bookies if you want to win consistently. Unfortunately, a bad approach to position sizing can cause a good forecasting system to lose money. That is, even where you have an edge over the bookie, you can lose money if you choose your stake sizes poorly."]},{title:"What system should you use?",content:["So which is the best system? Or is there some other system that does a better job than these? Is it possible to extract the best parts of each system and combine them? Some characteristics you may want to have in a position sizing system are:",(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"my-2",children:"- Place more money on bets that are more certain/lower risk. This reduces the volatility of returns."})," ",(0,i.jsx)("p",{className:"my-2",children:"- The system should be fairly tolerant of forecast errors."}),(0,i.jsx)("p",{className:"my-2",children:"- Bet size shouldn\u2019t depend on arbitrary factors such as what happened with your last bet \u2013 play each bet on its merits."})," ",(0,i.jsx)("p",{className:"my-2",children:"- Maximize returns, subject to managing risk."}),(0,i.jsx)("p",{className:"my-2",children:"- You don\u2019t want volatility of your betting book to be too great."})]})]},{title:"Time value of money",content:["This section is really only relevant if you bet on longer term markets such as season outcomes. Some bets are nearly certain and have correspondingly low odds. For example, Chelsea may be clearly top of the league table half way through the season and looking strong. You could bet on them finishing in the Top 6 but you are only getting odds of 1.01 at best and it is four months until the bet settles. Even with such small odds, this could be a well-priced bet if you believe the outcome is virtually certain.","Some position sizing systems will recommend a large bet if you have a very high forecast probability. The catch is that a 1% return in four months is a poor return on your money and you could probably do better by pulling the money out of your bookmaker\u2019s account and sticking it in the bank. Money has a time value \u2013 a rate of return that you can earn with no risk"]},{title:"Risk tolerance",content:["It is important to understand the theory of risk management but it is also critical that you understand your own tolerance for risk. Psychology is very important in betting (and investing) and if you feel uncomfortable with the volatility in your betting returns it will impact on your ability to maintain the discipline necessary for a successful betting system. Maintaining a disciplined approach to position sizing when you have lost your nerve, or alternatively when you are feeling invincible, is very challenging. All punters have great runs where they feel unbeatable and believe they may just have discovered the secret to free money. And all punters also have periods where nothing goes right and they feel like giving up. Never underestimate the impact of luck on your short term returns. Ensuring you operate within your risk tolerance will help you stay focused. Everyone goes into betting hoping to win or at least break even but many people don\u2019t. So how much are you prepared to lose? How do you feel when you lose half of your book? These considerations and others feed into the determination of your standard bet size which in turn determines how fast you could lose your money. You need to adapt your system so that you are comfortable with the volatility."]}],n=o(90182),r=function(){var e=(0,i.jsx)("div",{className:"flex w-full",style:{lineHeight:"2"},children:(0,i.jsx)("h1",{style:{fontSize:"24px",color:"#22222"},className:"font-bold millik ",children:"Punter's Guide"})}),t=(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"mb-8 md:text-base text-sm",children:"Anybody can win a bet. It could be through skill or it could just be through dumb luck on a bet with terrible odds. To consistently win more than you lose is much harder and requires skill rather than luck."}),(0,i.jsx)("p",{className:"my-8 md:text-base text-sm",children:"Even if you have skill in estimating what the odds for an event should be, you are likely to lose many of your bets, as betting by definition exposes you to uncertain future outcomes. You will have periods where everything goes right and periods where nothing goes right \u2013 all due to luck."}),(0,i.jsx)("p",{className:"my-8 md:text-base text-sm",children:"To survive all of this, you need a consistent approach to decide when and how much to bet to ensure you make the most from the bookmakers; that is why we advise you thoroughly examine this page to be a successful punter and minimize the negative impact of bad luck."}),a.map((function(e,t){return(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{className:"font-bold millik",children:null===e||void 0===e?void 0:e.title}),(0,i.jsx)("div",{children:e.content.map((function(e,t){return(0,i.jsx)("p",{className:"my-8 md:text-base text-sm",children:e},t)}))})]},t)}))]});return(0,i.jsxs)("div",{children:[(0,i.jsx)(n.q,{children:(0,i.jsx)("title",{children:"Punters Guide - Tips180"})}),(0,i.jsx)(s.Z,{Top:e,Content:t,active:12})]})}}}]);