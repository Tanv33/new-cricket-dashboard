(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{126:function(a,e,t){},127:function(a,e,t){},129:function(a,e,t){},156:function(a,e,t){},162:function(a,e,t){"use strict";t.r(e);var n=t(0),l=t.n(n),r=t(39),i=t.n(r),s=(t(126),t(127),t(128),t(14)),o=t(9),c=(t(129),t(62)),b=t.n(c),u=t(203),d=t(195),j=t(212),m=t(110),h=t(1);var v=function(){var a=Object(n.useState)({}),e=Object(o.a)(a,2),t=e[0],l=e[1];return Object(n.useEffect)((function(){b.a.get("http://localhost:4000/api/v1/getscore").then((function(a){l(a.data)})).catch((function(a){}))}),[]),Object(n.useEffect)((function(){var a=Object(m.a)("http://localhost:4000");return a.on("connect",(function(){console.log("connected to server")})),a.on("disconnect",(function(a){console.log("disconnected from server: ",a)})),a.on("SCORE",(function(a){l(a)})),function(){a.close()}}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u.a,{bg:"dark",variant:"dark",children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(u.a.Brand,{children:"Live Cricket Score"}),Object(h.jsx)(j.a,{size:"sm",variant:"light",onClick:function(a){var e=document.getElementById("dashboard");"dashboard"===e.className?(e.classList.add("dashboard1"),e.classList.remove("dashboard")):(e.classList.add("dashboard"),e.classList.remove("dashboard1"))},children:"change Background"})]})}),Object(h.jsxs)("div",{id:"dashboard",className:"dashboard",children:[Object(h.jsx)("br",{}),Object(h.jsx)(d.a,{children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("h2",{className:"center",style:{backgroundColor:"#033A5C"},children:null===t||void 0===t?void 0:t.team1}),Object(h.jsx)("br",{}),Object(h.jsx)("h3",{className:"center",children:"Batting"}),Object(h.jsx)("div",{children:Object(h.jsxs)("h4",{children:["Total Runs: ",null===t||void 0===t?void 0:t.totalRuns," / ",null===t||void 0===t?void 0:t.totalOuts," ","\xa0 Overs: ",null===t||void 0===t?void 0:t.totalOvers,Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Batsman 1: ",null===t||void 0===t?void 0:t.batsman1," ",null===t||void 0===t?void 0:t.batsman1Runs," /"," ",null===t||void 0===t?void 0:t.batsman1Balls,Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Batsman 2: ",null===t||void 0===t?void 0:t.batsman2," ",null===t||void 0===t?void 0:t.batsman2Runs," /"," ",null===t||void 0===t?void 0:t.batsman2Balls,Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Run Rate:"," ",(t.totalRuns/t.totalOvers).toFixed(3)]})})]}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("h2",{className:"center",style:{backgroundColor:"#033A5C"},children:t.team2}),Object(h.jsx)("br",{}),Object(h.jsx)("h3",{className:"center",children:"Bowling"}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{children:Object(h.jsxs)("h4",{children:["Bowler 1: ",null===t||void 0===t?void 0:t.bowler1," ",null===t||void 0===t?void 0:t.bowler1balls," /"," ",null===t||void 0===t?void 0:t.bowler1Runs," \xa0Wickets:"," ",t.bowler1Wickets,Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Bowler 2: ",null===t||void 0===t?void 0:t.bowler2," ",null===t||void 0===t?void 0:t.bowler2Balls," /"," ",null===t||void 0===t?void 0:t.bowler2Runs," \xa0Wickets:"," ",t.bowler2Wickets,Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Target: ",Object(h.jsx)("strong",{children:t.target})]})})]})]},null===t||void 0===t?void 0:t._id)})]})]})},O=t(3),x=(t(156),t(206)),g=t(210),f=t(213),p=t(208),w=t(204),B=t(207),R=["Pakistan","India","Australia","New Zealand","England","Afghanistan","Namibia","Scotland","Sri Lanka","South Africa","Netherlands"],k={Pakistan:["Babar Azam","Mohammad Rizwan","Fakhar Zaman","Mohammad Hafeez","Shoaib Malik","Shadab Khan","Imad Wasim","Asif Ali","Haris Rauf","Hasan Ali","Shaheen Shah Afridi"],India:["Virat Kohli","Rohit Sharma","KL Rahul","Rishabh Pant","Ishan Kishan","Suryakumar Yadav","Hardik Pandya","Ravindra Jadeja","Rahul Chahar","Ravichandran Ashwin","Mohammed Shami"],Australia:["Aaron Finch","Pat Cummins","Josh Hazlewood","Josh Inglis","Glenn Maxwell","Kane Richardson","Mitchell Marsh","Steve Smith","David Warner","Adam Zampa","Ashton Agar"],"New Zealand":["Kane Williamson","Tim Seifert","Martin Guptill","Todd Astle","Trent Boult","Mark Chapman","Devon Conway","Adam Milne","Kyle Jamieson","Daryl Mitchell","Tim Southee"],England:["Eoin Morgan","Jos Buttler","Moeen Ali","Jonny Bairstow","Sam Billings","Tom Curran","Chris Jordan","Dawid Malan","Tymal Mills","David Willey","Mark Wood"],Afghanistan:["Mohammad Nabi","Rashid Khan","Mujeeb Ur Rahman","Usman Ghani","Mohammad Shahzad","Rahmanullah Gurbaz","Hashmatullah Shahidi","Asghar Afghan","Najibullah Zadran","Hazratullah Zazai","Naveen ul Haq"],Namibia:["Gerhard Erasmus","Stephen Baard","Karl Birkenstock","Michau du Preez","Jan Frylinck","Zane Green","Nicol Lofie-Eaton","Ben Shikongo","Michael van Lingen","Craig Williams","Pikky Ya France"],Scotland:["Kyle Coetzer","Richard Berrington","Dylan Budge","Mark Watt","Matthew Cross","Josh Davey","Michael Leask","Calum Macleod","George Munsey","Hamza Tahir","Brad Wheal"],"Sri Lanka":["Dasun Shanaka","Kusal Perera","Dinesh Chandimal","Dhananjaya de Silva","Charith Asalanka","Avishka Fernando","Chamika Karunaratne","Wanindu Hasaranga","Akila Dananjaya","Pathum Nissanka","Bhanuka Rajapaksa"],"South Africa":["Temba Bavuma","Quinton de Kock","Aiden Markram","David Miller","Keshav Maharaj","Bjorn Fortuin","Reeza Hendricks","Heinrich Klaasen","Wiaan Mulder","Lungi Ngidi","Rassie van der Dussen"],Netherlands:["Pieter Seelaar","Colin Ackermann","Ben Cooper","Philippe Boissevain","Bas de Leede","Scott Edwards","Brandon Glover","Fred Klaassen","Stephan Myburgh","Ryan ten Doeschate","Paul van Meekeren"]};var y=function(){var a,e,t,l,r=Object(n.useState)({team1:"",batsman1:"",batsman1Runs:0,batsman1Balls:0,batsman2:"",batsman2Runs:0,batsman2Balls:0,totalRuns:0,totalOuts:0,totalOvers:0,team2:"",bowler1:"",bowler1balls:0,bowler1Runs:0,bowler1Wickets:0,bowler2:"",bowler2Balls:0,bowler2Runs:0,bowler2Wickets:0,target:0}),i=Object(o.a)(r,2),s=i[0],c=i[1];return Object(n.useEffect)((function(){b.a.get("http://localhost:4000/api/v1/getscore").then((function(a){c(a.data)}))}),[]),Object(h.jsxs)("div",{className:"adminMainDiv",children:[Object(h.jsx)("br",{}),Object(h.jsxs)(f.a,{children:[Object(h.jsx)("h1",{style:{textAlign:"center",fontWeight:"bold",color:"darkred"},children:"Admin Panel"}),Object(h.jsx)("br",{}),Object(h.jsxs)("form",{onSubmit:function(a){a.preventDefault(),b.a.post("http://localhost:4000/api/v1/scorepost",{team1:s.team1,batsman1:s.batsman1,batsman1Runs:s.batsman1Runs,batsman1Balls:s.batsman1Balls,batsman2:s.batsman2,batsman2Runs:s.batsman2Runs,batsman2Balls:s.batsman2Balls,totalRuns:s.totalRuns,totalOuts:s.totalOuts,totalOvers:s.totalOvers,team2:s.team2,bowler1:s.bowler1,bowler1balls:s.bowler1balls,bowler1Runs:s.bowler1Runs,bowler1Wickets:s.bowler1Wickets,bowler2:s.bowler2,bowler2Balls:s.bowler2Balls,bowler2Runs:s.bowler2Runs,bowler2Wickets:s.bowler2Wickets,target:s.target}).then((function(a){}))},children:[Object(h.jsx)("br",{}),Object(h.jsx)(p.a,{children:"Team 1"}),Object(h.jsx)(w.a,{required:!0,style:{width:"20vw",height:"7vh",marginBottom:"15px",fontSize:"22px"},sx:{minWidth:210},variant:"filled",name:"team1",value:s.team1,onChange:function(a){c((function(e){return Object(O.a)(Object(O.a)({},e),{},{team1:a.target.value})}))},children:R.map((function(a,e){return Object(h.jsx)(B.a,{value:a,children:a},e)}))}),Object(h.jsx)("br",{})," ",Object(h.jsx)("br",{}),Object(h.jsx)(p.a,{children:"Batsman 1"}),Object(h.jsx)(w.a,{required:!0,style:{width:"20vw",height:"7vh",marginBottom:"15px",fontSize:"22px"},sx:{minWidth:210},variant:"filled",name:"batsman1",value:s.batsman1,onChange:function(a){c((function(e){return Object(O.a)(Object(O.a)({},e),{},{batsman1:a.target.value})}))},children:null===(a=k[s.team1])||void 0===a?void 0:a.map((function(a,e){return Object(h.jsx)(B.a,{value:a,children:a},e)}))}),Object(h.jsx)(x.a,{type:"number",name:"batsman1Runs",label:"Batsman 1  Runs",variant:"outlined",value:s.batsman1Runs,onChange:function(a){c((function(e){return Object(O.a)(Object(O.a)({},e),{},{batsman1Runs:a.target.value})}))},style:{marginLeft:"15px",marginBottom:"15px"}}),Object(h.jsx)(x.a,{type:"number",name:"batsman1Balls",label:"Batsman 1  Balls",variant:"outlined",value:s.batsman1Balls,onChange:function(a){c((function(e){return Object(O.a)(Object(O.a)({},e),{},{batsman1Balls:a.target.value})}))},style:{marginLeft:"15px",marginBottom:"15px"}}),Object(h.jsx)("br",{}),Object(h.jsx)(p.a,{children:"Batsman 2"}),Object(h.jsx)(w.a,{required:!0,style:{width:"20vw",height:"7vh",marginBottom:"15px",fontSize:"22px"},sx:{minWidth:210},variant:"filled",name:"batsman2",value:s.batsman2,onChange:function(a){c((function(e){return Object(O.a)(Object(O.a)({},e),{},{batsman2:a.target.value})}))},children:null===(e=k[s.team1])||void 0===e?void 0:e.map((function(a,e){return Object(h.jsx)(B.a,{value:a,children:a},e)}))}),Object(h.jsx)(x.a,{type:"number",name:"batsman2Runs",label:"Batsman 2  Runs",variant:"outlined",value:s.batsman2Runs,onChange:function(a){c((function(e){return Object(O.a)(Object(O.a)({},e),{},{batsman2Runs:a.target.value})}))},style:{marginLeft:"15px",marginBottom:"15px"}}),Object(h.jsx)(x.a,{type:"number",name:"batsman2Balls",label:"Batsman 2  Balls",variant:"outlined",value:s.batsman2Balls,onChange:function(a){c((function(e){return Object(O.a)(Object(O.a)({},e),{},{batsman2Balls:a.target.value})}))},style:{marginLeft:"15px",marginBottom:"15px"}}),Object(h.jsx)("br",{}),Object(h.jsx)(p.a,{children:"Total"}),Object(h.jsx)("br",{}),Object(h.jsx)(x.a,{type:"number",name:"totalRuns",label:"Total Runs",variant:"outlined",value:s.totalRuns,onChange:function(a){c((function(e){return Object(O.a)(Object(O.a)({},e),{},{totalRuns:a.target.value})}))},style:{marginBottom:"15px"}}),Object(h.jsx)(x.a,{type:"number",name:"totalOuts",label:"Total Outs",variant:"outlined",value:s.totalOuts,onChange:function(a){c((function(e){return Object(O.a)(Object(O.a)({},e),{},{totalOuts:a.target.value})}))},style:{marginLeft:"15px",marginBottom:"15px"}}),Object(h.jsx)(x.a,{type:"number",name:"totalOvers",label:"Total Overs",variant:"outlined",value:s.totalOvers,onChange:function(a){c((function(e){return Object(O.a)(Object(O.a)({},e),{},{totalOvers:a.target.value})}))},style:{marginLeft:"15px",marginBottom:"15px"}}),Object(h.jsx)("br",{}),Object(h.jsx)("hr",{}),Object(h.jsx)("br",{}),Object(h.jsx)(p.a,{children:"Team 2"}),Object(h.jsx)(w.a,{required:!0,style:{width:"20vw",height:"7vh",marginBottom:"15px",fontSize:"22px"},sx:{minWidth:210},variant:"filled",name:"team2",value:s.team2,onChange:function(a){c((function(e){return Object(O.a)(Object(O.a)({},e),{},{team2:a.target.value})}))},children:R.map((function(a,e){return Object(h.jsx)(B.a,{value:a,children:a},e)}))}),Object(h.jsx)("br",{}),Object(h.jsx)(p.a,{children:"Bowler 1"}),Object(h.jsx)(w.a,{required:!0,style:{width:"20vw",height:"7vh",marginBottom:"15px",fontSize:"22px"},sx:{minWidth:210},variant:"filled",name:"bowler1",value:s.bowler1,onChange:function(a){c((function(e){return Object(O.a)(Object(O.a)({},e),{},{bowler1:a.target.value})}))},children:null===(t=k[s.team2])||void 0===t?void 0:t.map((function(a,e){return Object(h.jsx)(B.a,{value:a,children:a},e)}))}),Object(h.jsx)(x.a,{type:"number",name:"bowler1balls",label:"Bowler 1  Balls",variant:"outlined",value:s.bowler1balls,onChange:function(a){c((function(e){return Object(O.a)(Object(O.a)({},e),{},{bowler1balls:a.target.value})}))},style:{marginLeft:"15px",marginBottom:"15px"}}),Object(h.jsx)(x.a,{type:"number",name:"bowler1Runs",label:"Bowler 1  Runs",variant:"outlined",value:s.bowler1Runs,onChange:function(a){c((function(e){return Object(O.a)(Object(O.a)({},e),{},{bowler1Runs:a.target.value})}))},style:{marginLeft:"15px",marginBottom:"15px"}}),Object(h.jsx)(x.a,{type:"number",name:"bowler1Wickets",label:"Bowler 1  Wickets",variant:"outlined",value:s.bowler1Wickets,onChange:function(a){c((function(e){return Object(O.a)(Object(O.a)({},e),{},{bowler1Wickets:a.target.value})}))},style:{marginLeft:"15px",marginBottom:"15px"}}),Object(h.jsx)("br",{}),Object(h.jsx)(p.a,{children:"Bowler 2"}),Object(h.jsx)(w.a,{required:!0,style:{width:"20vw",height:"7vh",marginBottom:"15px",fontSize:"22px"},sx:{minWidth:210},variant:"filled",name:"bowler2",value:s.bowler2,onChange:function(a){c((function(e){return Object(O.a)(Object(O.a)({},e),{},{bowler2:a.target.value})}))},children:null===(l=k[s.team2])||void 0===l?void 0:l.map((function(a,e){return Object(h.jsx)(B.a,{value:a,children:a},e)}))}),Object(h.jsx)(x.a,{type:"number",name:"bowler2Balls",label:"Bowler 2  Balls",variant:"outlined",value:s.bowler2Balls,onChange:function(a){c((function(e){return Object(O.a)(Object(O.a)({},e),{},{bowler2Balls:a.target.value})}))},style:{marginLeft:"15px",marginBottom:"15px"}}),Object(h.jsx)(x.a,{type:"number",name:"bowler2Runs",label:"Bowler 2  Runs",variant:"outlined",value:s.bowler2Runs,onChange:function(a){c((function(e){return Object(O.a)(Object(O.a)({},e),{},{bowler2Runs:a.target.value})}))},style:{marginLeft:"15px",marginBottom:"15px"}}),Object(h.jsx)(x.a,{type:"number",name:"bowler2Wickets",label:"Bowler 2  Wickets",variant:"outlined",value:s.bowler2Wickets,onChange:function(a){c((function(e){return Object(O.a)(Object(O.a)({},e),{},{bowler2Wickets:a.target.value})}))},style:{marginLeft:"15px",marginBottom:"15px"}}),Object(h.jsx)("br",{}),Object(h.jsx)(p.a,{children:"Target"}),Object(h.jsx)(x.a,{type:"number",name:"target",variant:"filled",value:s.target,onChange:function(a){c((function(e){return Object(O.a)(Object(O.a)({},e),{},{target:a.target.value})}))},style:{marginBottom:"15px"}}),Object(h.jsx)("br",{}),Object(h.jsx)(g.a,{style:{marginTop:"5px",marginBottom:"15px",marginRight:"8px"},type:"submit",size:"medium",variant:"contained",color:"success",children:"Add"}),Object(h.jsx)(g.a,{style:{marginTop:"5px",marginBottom:"15px"},variant:"contained",color:"error",onClick:function(){b.a.post("http://localhost:4000/api/v1/deleteRecord",{}).then((function(a){a&&window.location.reload()})).catch((function(a){}))},children:"Delete All Record"})]})]})]})};var C=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{path:"/",element:Object(h.jsx)(v,{})}),Object(h.jsx)(s.a,{path:"/admin",element:Object(h.jsx)(y,{})}),Object(h.jsx)(s.a,{path:"*",element:Object(h.jsx)(v,{})})]})})},S=t(85),W=function(a){a&&a instanceof Function&&t.e(3).then(t.bind(null,216)).then((function(e){var t=e.getCLS,n=e.getFID,l=e.getFCP,r=e.getLCP,i=e.getTTFB;t(a),n(a),l(a),r(a),i(a)}))};i.a.render(Object(h.jsx)(l.a.StrictMode,{children:Object(h.jsx)(S.a,{children:Object(h.jsx)(C,{})})}),document.getElementById("root")),W()}},[[162,1,2]]]);
//# sourceMappingURL=main.f5005765.chunk.js.map