"use strict";(self.webpackChunktips180=self.webpackChunktips180||[]).push([[56],{50056:function(e,l,s){s.r(l),s.d(l,{default:function(){return f}});var t=s(70885),a=s(47313),n=s(54449),i=s(34491),r=(s(88282),s(1413)),c=s(74165),d=s(15861),o=s(24655),u=s.n(o),m=(s(5978),s(59402)),x=s(46417),h=(0,m.Z)((0,x.jsx)("path",{d:"M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H9V4h9zM3 15v-2h2v2zm0-5.5h2v2H3zM10 20h2v2h-2zm-7-1.5v-2h2v2zM5 22c-1.1 0-2-.9-2-2h2zm3.5 0h-2v-2h2zm5 0v-2h2c0 1.1-.9 2-2 2M5 6v2H3c0-1.1.9-2 2-2"}),"CopyAllRounded");function p(e){var l=e.user,s=e.tab,n=e.api,o=e.token,m=(0,a.useRef)(null),p=(0,a.useRef)(null),v=(0,a.useRef)(null),f=(0,a.useRef)(null),j=(0,a.useState)("Update Password"),w=(0,t.Z)(j,2),N=w[0],y=w[1],g=(0,a.useState)(!1),b=(0,t.Z)(g,2),k=b[0],C=b[1],S=(0,a.useState)({fname:"",email:"",phone:""}),P=(0,t.Z)(S,2),A=P[0],_=P[1],Z=(0,a.useState)("Save Changes"),E=(0,t.Z)(Z,2),F=E[0],O=E[1],T=(0,a.useState)(JSON.stringify({value:"ng",label:"Nigeria"})),z=(0,t.Z)(T,2),R=z[0],H=(z[1],function(){var e=(0,d.Z)((0,c.Z)().mark((function e(){var l,s;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y(". . ."),v.current.value===f.current.value){e.next=3;break}return e.abrupt("return",(i.Am.error("Password mismatch"),y("Update Password")));case 3:return e.prev=3,e.next=6,fetch("".concat(n,"/auth/change-pass"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o)},body:JSON.stringify({old_password:m.current.value,new_password:f.current.value})});case 6:return l=e.sent,e.next=9,l.json();case 9:s=e.sent,l.ok?i.Am.success("Password Changed Successfully "):i.Am.error(s.msg),y("Update Password"),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),console.log("Check your network"),y("Update Password");case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}}()),I=function(){var e=(0,d.Z)((0,c.Z)().mark((function e(){var l,s,t;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O("..."),e.prev=1,l=JSON.stringify(A),e.next=5,fetch("".concat(n,"/edit/edit-profile"),{method:"PATCH",headers:{"Content-type":"application/json","Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(o)},redirect:"follow",credentials:"same-origin",body:l});case 5:return s=e.sent,e.next=8,s.json();case 8:if(t=e.sent,s.ok){e.next=13;break}return e.abrupt("return",(i.Am.error("Please check your data and try again"),O("SAVE CHANGES")));case 13:localStorage.setItem("user",JSON.stringify(t)),localStorage.setItem("token",t.refresh_token),i.Am.success("Changes Saved"),O("SAVE CHANGES"),_({fname:"",email:"",phone:""}),C(!1),window.location.reload(!1);case 20:e.next=26;break;case 22:e.prev=22,e.t0=e.catch(1),i.Am.error("Please check your network connection"),O("SAVE CHANGES");case 26:case"end":return e.stop()}}),e,null,[[1,22]])})));return function(){return e.apply(this,arguments)}}();return(0,x.jsxs)("div",{className:"w-full",children:[0===s?(0,x.jsxs)("div",{className:"",children:[(0,x.jsxs)("div",{className:"lg:flex items-center my-5",children:[(0,x.jsx)("h1",{className:"lg:w-1/4",children:"Name:"}),(0,x.jsx)("div",{className:"flex lg:w-2/3",children:(0,x.jsx)("div",{className:"w-full",children:(0,x.jsx)("p",{type:"text",className:"input-styles w-full",placeholder:"Full Name",children:null===l||void 0===l?void 0:l.name})})})]}),(0,x.jsxs)("div",{className:"lg:flex items-center my-5",children:[(0,x.jsx)("h1",{className:"lg:w-1/4",children:"Email Address:"}),(0,x.jsx)("div",{className:"lg:w-2/3",children:(0,x.jsx)("p",{type:"text",className:"input-styles w-full",children:null===l||void 0===l?void 0:l.email})})]}),(0,x.jsxs)("div",{className:"lg:flex items-center my-5",children:[(0,x.jsx)("h1",{className:"lg:w-1/4",children:"User ID:"}),(0,x.jsx)("div",{className:"lg:w-2/3",children:(0,x.jsx)("div",{type:"text",className:"input-styles w-full",children:null===l||void 0===l?void 0:l.user_id})})]}),(0,x.jsxs)("div",{className:"lg:flex items-center my-5",children:[(0,x.jsx)("h1",{className:"lg:w-1/4",children:"Wallet Balance:"}),(0,x.jsx)("div",{className:"lg:w-2/3",children:(0,x.jsx)("div",{type:"text",className:"input-styles w-full",children:null===l||void 0===l?void 0:l.balance})})]}),(0,x.jsxs)("div",{className:"lg:flex items-center my-5",children:[(0,x.jsx)("h1",{className:"lg:w-1/4",children:"Referral Code:"}),(0,x.jsx)("div",{className:"lg:w-2/3",children:(0,x.jsxs)("div",{type:"text",className:"input-styles flex items-center cursor-pointer justify-between w-full",onClick:function(){var e=p.current.innerText;navigator.clipboard.writeText(e).then((function(){i.Am.info("Copied to clipboard!")})).catch((function(e){console.error("failed to copy: ",e)}))},children:[(0,x.jsx)("p",{ref:p,children:null===l||void 0===l?void 0:l.ref_code}),(0,x.jsxs)("div",{className:"",children:[(0,x.jsx)("span",{className:"text-xs italic mr-1",children:"copy to clipboard"}),(0,x.jsx)(h,{sx:{color:"black"}})]})]})})]}),(0,x.jsxs)("div",{className:"lg:flex items-center my-5",children:[(0,x.jsx)("h1",{className:"lg:w-1/4",children:"Total Ref Points:"}),(0,x.jsx)("div",{className:"lg:w-2/3",children:(0,x.jsx)("div",{type:"text",className:"input-styles w-full",children:null===l||void 0===l?void 0:l.ref_points})})]}),(0,x.jsxs)("div",{className:"lg:flex items-center my-5",children:[(0,x.jsx)("h1",{className:"lg:w-1/4",children:"Total Loyalty Points:"}),(0,x.jsx)("div",{className:"lg:w-2/3",children:(0,x.jsx)("div",{type:"text",className:"input-styles w-full",children:null===l||void 0===l?void 0:l.loyalty_points})})]}),(0,x.jsxs)("div",{className:"lg:flex items-center my-5",children:[(0,x.jsx)("h1",{className:"lg:w-1/4",children:"Phone:"}),(0,x.jsx)("div",{className:"lg:w-2/3",children:(0,x.jsx)("div",{type:"text",className:"input-styles w-full",children:null===l||void 0===l?void 0:l.phone})})]}),(0,x.jsxs)("div",{className:"lg:flex items-center my-5",children:[(0,x.jsx)("h1",{className:"lg:w-1/4",children:"Country:"}),(0,x.jsx)("div",{className:"lg:w-2/3",children:(0,x.jsx)("div",{type:"text",className:"input-styles w-full",children:null===l||void 0===l?void 0:l.country})})]}),(0,x.jsxs)("div",{className:"lg:flex items-center my-5",children:[(0,x.jsx)("h1",{className:"lg:w-1/4",children:"Key/Premium:"}),(0,x.jsx)("div",{className:"lg:w-2/3",children:(0,x.jsx)("p",{type:"text",className:"input-styles w-full",children:null===l||void 0===l?void 0:l.accoutplan})})]}),(null===l||void 0===l?void 0:l.acc_plan_exp)&&(0,x.jsxs)("div",{className:"lg:flex items-center my-5",children:[(0,x.jsx)("h1",{className:"lg:w-1/4",children:"Key/Premium Expiry:"}),(0,x.jsx)("div",{className:"lg:w-2/3",children:(0,x.jsx)("p",{type:"text",className:"input-styles w-full",children:null===l||void 0===l?void 0:l.acc_plan_exp})})]}),(0,x.jsxs)("div",{className:"lg:flex items-center my-5",children:[(0,x.jsx)("h1",{className:"lg:w-1/4",children:"Smart Bet:"}),(0,x.jsx)("div",{className:"lg:w-2/3",children:(0,x.jsx)("p",{type:"text",className:"input-styles w-full",children:null===l||void 0===l?void 0:l.isubscriptstatus})})]}),(null===l||void 0===l?void 0:l.smart_exp)&&(0,x.jsxs)("div",{className:"lg:flex items-center my-5",children:[(0,x.jsx)("h1",{className:"lg:w-1/4",children:"Smart Bet Expiry:"}),(0,x.jsx)("div",{className:"lg:w-2/3",children:(0,x.jsx)("p",{type:"text",className:"input-styles w-full",children:null===l||void 0===l?void 0:l.smart_exp})})]}),(0,x.jsxs)("div",{className:"lg:flex items-center my-5",children:[(0,x.jsx)("h1",{className:"lg:w-1/4",children:"Rollover Bet:"}),(0,x.jsx)("div",{className:"lg:w-2/3",children:(0,x.jsx)("p",{type:"text",className:"input-styles w-full",children:null!==l&&void 0!==l&&l.rollsubscriptstatus?l.rollsubscriptstatus:"Inactive"})})]}),(null===l||void 0===l?void 0:l.roll_exp)&&(0,x.jsxs)("div",{className:"lg:flex items-center my-5",children:[(0,x.jsx)("h1",{className:"lg:w-1/4",children:"Rollover Expiry:"}),(0,x.jsx)("div",{className:"lg:w-2/3",children:(0,x.jsx)("p",{type:"text",className:"input-styles w-full",children:null===l||void 0===l?void 0:l.roll_exp})})]}),(0,x.jsxs)("div",{className:"lg:flex items-center my-5",children:[(0,x.jsx)("h1",{className:"lg:w-1/4",children:"50 Odds:"}),(0,x.jsx)("div",{className:"lg:w-2/3",children:(0,x.jsx)("p",{type:"text",className:"input-styles w-full",children:null===l||void 0===l?void 0:l.odds50status})})]}),(null===l||void 0===l?void 0:l.odds50_exp)&&(0,x.jsxs)("div",{className:"lg:flex items-center my-5",children:[(0,x.jsx)("h1",{className:"lg:w-1/4",children:"50 Odds Expiry:"}),(0,x.jsx)("div",{className:"lg:w-2/3",children:(0,x.jsx)("p",{type:"text",className:"input-styles w-full",children:null===l||void 0===l?void 0:l.odds50_exp})})]}),(0,x.jsxs)("div",{className:"lg:flex items-center my-5",children:[(0,x.jsx)("h1",{className:"lg:w-1/4",children:"Weekend 10:"}),(0,x.jsx)("div",{className:"lg:w-2/3",children:(0,x.jsx)("p",{type:"text",className:"input-styles w-full",children:null===l||void 0===l?void 0:l.w10subscriptstatus})})]}),(null===l||void 0===l?void 0:l.w10_exp)&&(0,x.jsxs)("div",{className:"lg:flex items-center my-5",children:[(0,x.jsx)("h1",{className:"lg:w-1/4",children:"Weekend 10 Expiry:"}),(0,x.jsx)("div",{className:"lg:w-2/3",children:(0,x.jsx)("p",{type:"text",className:"input-styles w-full",children:null===l||void 0===l?void 0:l.w10_exp})})]}),(0,x.jsx)("div",{className:"flex w-full justify-center",onClick:function(){return C(!0)},children:(0,x.jsx)("button",{className:"bg-gradient-to-r from-teal-500 to-blue-600 loadText-white py-2 px-5 rounded-md w-full lg:w-1/3 lg:ml-20 text-white",children:"Edit Profile"})})]}):(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:"lg:flex items-center my-5",children:[(0,x.jsx)("h1",{className:"lg:w-1/4",children:"Current Password:"}),(0,x.jsx)("div",{className:"lg:w-2/3",children:(0,x.jsx)("input",{type:"text",className:"input-styles w-full",ref:m})})]}),(0,x.jsxs)("div",{className:"lg:flex items-center my-5",children:[(0,x.jsx)("h1",{className:"lg:w-1/4",children:"New Password:"}),(0,x.jsx)("div",{className:"lg:w-2/3",children:(0,x.jsx)("input",{ref:v,id:"mes",name:"mes",type:"text",className:"input-styles w-full"})})]}),(0,x.jsxs)("div",{className:"lg:flex items-center my-5",children:[(0,x.jsx)("h1",{className:"lg:w-1/4",children:"Confirm New Password:"}),(0,x.jsx)("div",{className:"lg:w-2/3",children:(0,x.jsx)("input",{ref:f,type:"text",id:"message",name:"message",className:"input-styles w-full"})})]}),(0,x.jsx)("div",{className:"flex w-full justify-center",children:(0,x.jsx)("button",{onClick:function(){return H()},className:"bg-gradient-to-r from-teal-500 to-blue-600 text-white py-2 px-5 rounded-md w-full lg:w-1/3 lg:ml-40",children:N})})]}),k?(0,x.jsx)("div",{className:"lg:w-full w-10/12 mx-auto flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:(0,x.jsx)("div",{className:"w-full relative my-6 mx-auto",children:(0,x.jsxs)("div",{className:"lg:w-2/4 opacity-100 mx-auto border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none",children:[(0,x.jsxs)("div",{className:"flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ",children:[(0,x.jsx)("h3",{className:"text-2xl millik",children:"Edit Profile"}),(0,x.jsx)("button",{className:"bg-transparent border-0 text-black float-right",onClick:function(){return C(!1)},children:(0,x.jsx)("span",{className:"text-black opacity-7 h-7 w-8  text-xl lg:text-2xl block  rounded-full",children:"x"})})]}),(0,x.jsx)("div",{className:"relative p-3 flex-auto",children:(0,x.jsxs)("form",{className:" rounded px-4 md:pt-6 md:pb-4 w-full",children:[(0,x.jsxs)("div",{className:"w-full lg:w-5/6 md:flex items-center ",children:[(0,x.jsx)("label",{className:"label w-2/5",children:"Full Name :"}),(0,x.jsx)("input",{type:"text",className:"input-styles text-gray-300 w-full",placeholder:"FirstName LastName",onChange:function(e){return _((0,r.Z)((0,r.Z)({},A),{},{fname:e.target.value}))}})]}),(0,x.jsxs)("div",{className:"my-4 w-full lg:w-5/6 md:flex items-center",children:[(0,x.jsx)("label",{className:"label  w-2/5",children:"Phone Number :"}),(0,x.jsx)("div",{className:"w-full  mt-3",children:(0,x.jsx)(u(),{country:JSON.parse(R).value,inputClass:"input-styles",inputStyle:{width:"100%"},onChange:function(e){return _((0,r.Z)((0,r.Z)({},A),{},{phone:e,country:JSON.parse(R).label}))}})})]})]})}),(0,x.jsx)("div",{className:"flex w-full item-center justify-center ",children:(0,x.jsx)("button",{className:"text-white w-3/12 p-2 lg:text-base bg-gradient-to-r from-teal-500 to-blue-600 text-sm rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-6",type:"button",onClick:function(){A.fname.length>3?I():i.Am.error("Please enter a valid name!")},children:F})})]})})}):null]})}var v=s(90182),f=function(){var e=JSON.parse(localStorage.getItem("user")),l=localStorage.getItem("token"),s=(0,a.useState)(0),i=(0,t.Z)(s,2),r=i[0],c=i[1],d=(0,x.jsx)("div",{className:"flex rounded-lg w-full p-2 px-8",style:{background:"#F2F2F2",border:"1px solid #E0E0E0"},children:["My Information","Change Password"].map((function(e,l){return(0,x.jsx)("p",{style:{color:"".concat(r===l?"#222222":"#828282"),background:"".concat(r===l?"#FFFFFF":"transparent")},className:"px-2 py-1 rounded-lg cursor-pointer",onClick:function(){return c(l)},children:e},l)}))}),o=(0,x.jsx)(p,{user:e,tab:r,api:"https://tips180.com/api",token:l});return(0,x.jsxs)("div",{children:[(0,x.jsx)(v.q,{children:(0,x.jsx)("title",{children:"My Account-Football Tips and Predictions from seasoned experts - Tips180"})}),(0,x.jsx)(n.Z,{Top:d,Content:o,active:0})]})}}}]);