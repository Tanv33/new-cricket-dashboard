(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{126:function(a,e,t){},127:function(a,e,t){},129:function(a,e,t){},156:function(a,e,t){},162:function(a,e,t){"use strict";t.r(e);var n=t(0),l=t.n(n),r=t(39),i=t.n(r),o=(t(126),t(127),t(128),t(14)),s=t(9),c=(t(129),t(62)),b=t.n(c),u=t(203),d=t(195),j=t(212),m=t(110),h=t(1);var v=function(){var a="localhost"===window.location.hostname.split(":")[0]?"http://localhost:4000":"",e=Object(n.useState)({}),t=Object(s.a)(e,2),l=t[0],r=t[1];return Object(n.useEffect)((function(){b.a.get("".concat(a,"/api/v1/getscore")).then((function(a){r(a.data)})).catch((function(a){}))}),[]),Object(n.useEffect)((function(){var e=Object(m.a)("".concat(a));return e.on("connect",(function(){console.log("connected to server")})),e.on("disconnect",(function(a){console.log("disconnected from server: ",a)})),e.on("SCORE",(function(a){r(a)})),function(){e.close()}}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u.a,{bg:"dark",variant:"dark",children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(u.a.Brand,{children:"Live Cricket Score"}),Object(h.jsx)(j.a,{size:"sm",variant:"light",onClick:function(a){var e=document.getElementById("dashboard");"dashboard"===e.className?(e.classList.add("dashboard1"),e.classList.remove("dashboard")):(e.classList.add("dashboard"),e.classList.remove("dashboard1"))},children:"change Background"})]})}),Object(h.jsxs)("div",{id:"dashboard",className:"dashboard",children:[Object(h.jsx)("br",{}),Object(h.jsx)(d.a,{children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("h2",{className:"center",style:{backgroundColor:"#033A5C"},children:null===l||void 0===l?void 0:l.team1}),Object(h.jsx)("br",{}),Object(h.jsx)("h3",{className:"center",children:"Batting"}),Object(h.jsx)("div",{children:Object(h.jsxs)("h4",{children:["Total Runs: ",null===l||void 0===l?void 0:l.totalRuns," / ",null===l||void 0===l?void 0:l.totalOuts," ","\xa0 Overs: ",null===l||void 0===l?void 0:l.totalOvers,Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Batsman 1: ",null===l||void 0===l?void 0:l.batsman1," ",null===l||void 0===l?void 0:l.batsman1Runs," /"," ",null===l||void 0===l?void 0:l.batsman1Balls,Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Batsman 2: ",null===l||void 0===l?void 0:l.batsman2," ",null===l||void 0===l?void 0:l.batsman2Runs," /"," ",null===l||void 0===l?void 0:l.batsman2Balls,Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Run Rate:"," ",(l.totalRuns/l.totalOvers).toFixed(3)]})})]}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("h2",{className:"center",style:{backgroundColor:"#033A5C"},children:l.team2}),Object(h.jsx)("br",{}),Object(h.jsx)("h3",{className:"center",children:"Bowling"}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{children:Object(h.jsxs)("h4",{children:["Bowler 1: ",null===l||void 0===l?void 0:l.bowler1," ",null===l||void 0===l?void 0:l.bowler1balls," /"," ",null===l||void 0===l?void 0:l.bowler1Runs," \xa0Wickets:"," ",l.bowler1Wickets,Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Bowler 2: ",null===l||void 0===l?void 0:l.bowler2," ",null===l||void 0===l?void 0:l.bowler2Balls," /"," ",null===l||void 0===l?void 0:l.bowler2Runs," \xa0Wickets:"," ",l.bowler2Wickets,Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Target: ",Object(h.jsx)("strong",{children:l.target})]})})]})]},null===l||void 0===l?void 0:l._id)})]})]})},O=t(3),x=(t(156),t(206)),g=t(210),f=t(213),w=t(208),p=t(204),B=t(207),R=["Pakistan","India","Australia","New Zealand","England","Afghanistan","Namibia","Scotland","Sri Lanka","South Africa","Netherlands"],k={Pakistan:["Babar Azam","Mohammad Rizwan","Fakhar Zaman","Mohammad Hafeez","Shoaib Malik","Shadab Khan","Imad Wasim","Asif Ali","Haris Rauf","Hasan Ali","Shaheen Shah Afridi"],India:["Virat Kohli","Rohit Sharma","KL Rahul","Rishabh Pant","Ishan Kishan","Suryakumar Yadav","Hardik Pandya","Ravindra Jadeja","Rahul Chahar","Ravichandran Ashwin","Mohammed Shami"],Australia:["Aaron Finch","Pat Cummins","Josh Hazlewood","Josh Inglis","Glenn Maxwell","Kane Richardson","Mitchell Marsh","Steve Smith","David Warner","Adam Zampa","Ashton Agar"],"New Zealand":["Kane Williamson","Tim Seifert","Martin Guptill","Todd Astle","Trent Boult","Mark Chapman","Devon Conway","Adam Milne","Kyle Jamieson","Daryl Mitchell","Tim Southee"],England:["Eoin Morgan","Jos Buttler","Moeen Ali","Jonny Bairstow","Sam Billings","Tom Curran","Chris Jordan","Dawid Malan","Tymal Mills","David Willey","Mark Wood"],Afghanistan:["Mohammad Nabi","Rashid Khan","Mujeeb Ur Rahman","Usman Ghani","Mohammad Shahzad","Rahmanullah Gurbaz","Hashmatullah Shahidi","Asghar Afghan","Najibullah Zadran","Hazratullah Zazai","Naveen ul Haq"],Namibia:["Gerhard Erasmus","Stephen Baard","Karl Birkenstock","Michau du Preez","Jan Frylinck","Zane Green","Nicol Lofie-Eaton","Ben Shikongo","Michael van Lingen","Craig Williams","Pikky Ya France"],Scotland:["Kyle Coetzer","Richard Berrington","Dylan Budge","Mark Watt","Matthew Cross","Josh Davey","Michael Leask","Calum Macleod","George Munsey","Hamza Tahir","Brad Wheal"],"Sri Lanka":["Dasun Shanaka","Kusal Perera","Dinesh Chandimal","Dhananjaya de Silva","Charith Asalanka","Avishka Fernando","Chamika Karunaratne","Wanindu Hasaranga","Akila Dananjaya","Pathum Nissanka","Bhanuka Rajapaksa"],"South Africa":["Temba Bavuma","Quinton de Kock","Aiden Markram","David Miller","Keshav Maharaj","Bjorn Fortuin","Reeza Hendricks","Heinrich Klaasen","Wiaan Mulder","Lungi Ngidi","Rassie van der Dussen"],Netherlands:["Pieter Seelaar","Colin Ackermann","Ben Cooper","Philippe Boissevain","Bas de Leede","Scott Edwards","Brandon Glover","Fred Klaassen","Stephan Myburgh","Ryan ten Doeschate","Paul van Meekeren"]};var y=function(){var a,e,t,l,r="localhost"===window.location.hostname.split(":")[0]?"http://localhost:4000":"",i=Object(n.useState)({team1:"",batsman1:"",batsman1Runs:0,batsman1Balls:0,batsman2:"",batsman2Runs:0,batsman2Balls:0,totalRuns:0,totalOuts:0,totalOvers:0,team2:"",bowler1:"",bowler1balls:0,bowler1Runs:0,bowler1Wickets:0,bowler2:"",bowler2Balls:0,bowler2Runs:0,bowler2Wickets:0,target:0}),o=Object(s.a)(i,2),c=o[0],u=o[1];return Object(n.useEffect)((function(){b.a.get("".concat(r,"/api/v1/getscore")).then((function(a){u(a.data)}))}),[]),Object(h.jsxs)("div",{className:"adminMainDiv",children:[Object(h.jsx)("br",{}),Object(h.jsxs)(f.a,{children:[Object(h.jsx)("h1",{style:{textAlign:"center",fontWeight:"bold",color:"darkred"},children:"Admin Panel"}),Object(h.jsx)("br",{}),Object(h.jsxs)("form",{onSubmit:function(a){a.preventDefault(),b.a.post("".concat(r,"/api/v1/scorepost"),{team1:c.team1,batsman1:c.batsman1,batsman1Runs:c.batsman1Runs,batsman1Balls:c.batsman1Balls,batsman2:c.batsman2,batsman2Runs:c.batsman2Runs,batsman2Balls:c.batsman2Balls,totalRuns:c.totalRuns,totalOuts:c.totalOuts,totalOvers:c.totalOvers,team2:c.team2,bowler1:c.bowler1,bowler1balls:c.bowler1balls,bowler1Runs:c.bowler1Runs,bowler1Wickets:c.bowler1Wickets,bowler2:c.bowler2,bowler2Balls:c.bowler2Balls,bowler2Runs:c.bowler2Runs,bowler2Wickets:c.bowler2Wickets,target:c.target}).then((function(a){}))},children:[Object(h.jsx)("br",{}),Object(h.jsx)(w.a,{children:"Team 1"}),Object(h.jsx)(p.a,{required:!0,style:{width:"20vw",height:"7vh",marginBottom:"15px",fontSize:"22px"},sx:{minWidth:210},variant:"filled",name:"team1",value:c.team1,onChange:function(a){u((function(e){return Object(O.a)(Object(O.a)({},e),{},{team1:a.target.value})}))},children:R.map((function(a,e){return Object(h.jsx)(B.a,{value:a,children:a},e)}))}),Object(h.jsx)("br",{})," ",Object(h.jsx)("br",{}),Object(h.jsx)(w.a,{children:"Batsman 1"}),Object(h.jsx)(p.a,{required:!0,style:{width:"20vw",height:"7vh",marginBottom:"15px",fontSize:"22px"},sx:{minWidth:210},variant:"filled",name:"batsman1",value:c.batsman1,onChange:function(a){u((function(e){return Object(O.a)(Object(O.a)({},e),{},{batsman1:a.target.value})}))},children:null===(a=k[c.team1])||void 0===a?void 0:a.map((function(a,e){return Object(h.jsx)(B.a,{value:a,children:a},e)}))}),Object(h.jsx)(x.a,{type:"number",name:"batsman1Runs",label:"Batsman 1  Runs",variant:"outlined",value:c.batsman1Runs,onChange:function(a){u((function(e){return Object(O.a)(Object(O.a)({},e),{},{batsman1Runs:a.target.value})}))},style:{marginLeft:"15px",marginBottom:"15px"}}),Object(h.jsx)(x.a,{type:"number",name:"batsman1Balls",label:"Batsman 1  Balls",variant:"outlined",value:c.batsman1Balls,onChange:function(a){u((function(e){return Object(O.a)(Object(O.a)({},e),{},{batsman1Balls:a.target.value})}))},style:{marginLeft:"15px",marginBottom:"15px"}}),Object(h.jsx)("br",{}),Object(h.jsx)(w.a,{children:"Batsman 2"}),Object(h.jsx)(p.a,{required:!0,style:{width:"20vw",height:"7vh",marginBottom:"15px",fontSize:"22px"},sx:{minWidth:210},variant:"filled",name:"batsman2",value:c.batsman2,onChange:function(a){u((function(e){return Object(O.a)(Object(O.a)({},e),{},{batsman2:a.target.value})}))},children:null===(e=k[c.team1])||void 0===e?void 0:e.map((function(a,e){return Object(h.jsx)(B.a,{value:a,children:a},e)}))}),Object(h.jsx)(x.a,{type:"number",name:"batsman2Runs",label:"Batsman 2  Runs",variant:"outlined",value:c.batsman2Runs,onChange:function(a){u((function(e){return Object(O.a)(Object(O.a)({},e),{},{batsman2Runs:a.target.value})}))},style:{marginLeft:"15px",marginBottom:"15px"}}),Object(h.jsx)(x.a,{type:"number",name:"batsman2Balls",label:"Batsman 2  Balls",variant:"outlined",value:c.batsman2Balls,onChange:function(a){u((function(e){return Object(O.a)(Object(O.a)({},e),{},{batsman2Balls:a.target.value})}))},style:{marginLeft:"15px",marginBottom:"15px"}}),Object(h.jsx)("br",{}),Object(h.jsx)(w.a,{children:"Total"}),Object(h.jsx)("br",{}),Object(h.jsx)(x.a,{type:"number",name:"totalRuns",label:"Total Runs",variant:"outlined",value:c.totalRuns,onChange:function(a){u((function(e){return Object(O.a)(Object(O.a)({},e),{},{totalRuns:a.target.value})}))},style:{marginBottom:"15px"}}),Object(h.jsx)(x.a,{type:"number",name:"totalOuts",label:"Total Outs",variant:"outlined",value:c.totalOuts,onChange:function(a){u((function(e){return Object(O.a)(Object(O.a)({},e),{},{totalOuts:a.target.value})}))},style:{marginLeft:"15px",marginBottom:"15px"}}),Object(h.jsx)(x.a,{type:"number",name:"totalOvers",label:"Total Overs",variant:"outlined",value:c.totalOvers,onChange:function(a){u((function(e){return Object(O.a)(Object(O.a)({},e),{},{totalOvers:a.target.value})}))},style:{marginLeft:"15px",marginBottom:"15px"}}),Object(h.jsx)("br",{}),Object(h.jsx)("hr",{}),Object(h.jsx)("br",{}),Object(h.jsx)(w.a,{children:"Team 2"}),Object(h.jsx)(p.a,{required:!0,style:{width:"20vw",height:"7vh",marginBottom:"15px",fontSize:"22px"},sx:{minWidth:210},variant:"filled",name:"team2",value:c.team2,onChange:function(a){u((function(e){return Object(O.a)(Object(O.a)({},e),{},{team2:a.target.value})}))},children:R.map((function(a,e){return Object(h.jsx)(B.a,{value:a,children:a},e)}))}),Object(h.jsx)("br",{}),Object(h.jsx)(w.a,{children:"Bowler 1"}),Object(h.jsx)(p.a,{required:!0,style:{width:"20vw",height:"7vh",marginBottom:"15px",fontSize:"22px"},sx:{minWidth:210},variant:"filled",name:"bowler1",value:c.bowler1,onChange:function(a){u((function(e){return Object(O.a)(Object(O.a)({},e),{},{bowler1:a.target.value})}))},children:null===(t=k[c.team2])||void 0===t?void 0:t.map((function(a,e){return Object(h.jsx)(B.a,{value:a,children:a},e)}))}),Object(h.jsx)(x.a,{type:"number",name:"bowler1balls",label:"Bowler 1  Balls",variant:"outlined",value:c.bowler1balls,onChange:function(a){u((function(e){return Object(O.a)(Object(O.a)({},e),{},{bowler1balls:a.target.value})}))},style:{marginLeft:"15px",marginBottom:"15px"}}),Object(h.jsx)(x.a,{type:"number",name:"bowler1Runs",label:"Bowler 1  Runs",variant:"outlined",value:c.bowler1Runs,onChange:function(a){u((function(e){return Object(O.a)(Object(O.a)({},e),{},{bowler1Runs:a.target.value})}))},style:{marginLeft:"15px",marginBottom:"15px"}}),Object(h.jsx)(x.a,{type:"number",name:"bowler1Wickets",label:"Bowler 1  Wickets",variant:"outlined",value:c.bowler1Wickets,onChange:function(a){u((function(e){return Object(O.a)(Object(O.a)({},e),{},{bowler1Wickets:a.target.value})}))},style:{marginLeft:"15px",marginBottom:"15px"}}),Object(h.jsx)("br",{}),Object(h.jsx)(w.a,{children:"Bowler 2"}),Object(h.jsx)(p.a,{required:!0,style:{width:"20vw",height:"7vh",marginBottom:"15px",fontSize:"22px"},sx:{minWidth:210},variant:"filled",name:"bowler2",value:c.bowler2,onChange:function(a){u((function(e){return Object(O.a)(Object(O.a)({},e),{},{bowler2:a.target.value})}))},children:null===(l=k[c.team2])||void 0===l?void 0:l.map((function(a,e){return Object(h.jsx)(B.a,{value:a,children:a},e)}))}),Object(h.jsx)(x.a,{type:"number",name:"bowler2Balls",label:"Bowler 2  Balls",variant:"outlined",value:c.bowler2Balls,onChange:function(a){u((function(e){return Object(O.a)(Object(O.a)({},e),{},{bowler2Balls:a.target.value})}))},style:{marginLeft:"15px",marginBottom:"15px"}}),Object(h.jsx)(x.a,{type:"number",name:"bowler2Runs",label:"Bowler 2  Runs",variant:"outlined",value:c.bowler2Runs,onChange:function(a){u((function(e){return Object(O.a)(Object(O.a)({},e),{},{bowler2Runs:a.target.value})}))},style:{marginLeft:"15px",marginBottom:"15px"}}),Object(h.jsx)(x.a,{type:"number",name:"bowler2Wickets",label:"Bowler 2  Wickets",variant:"outlined",value:c.bowler2Wickets,onChange:function(a){u((function(e){return Object(O.a)(Object(O.a)({},e),{},{bowler2Wickets:a.target.value})}))},style:{marginLeft:"15px",marginBottom:"15px"}}),Object(h.jsx)("br",{}),Object(h.jsx)(w.a,{children:"Target"}),Object(h.jsx)(x.a,{type:"number",name:"target",variant:"filled",value:c.target,onChange:function(a){u((function(e){return Object(O.a)(Object(O.a)({},e),{},{target:a.target.value})}))},style:{marginBottom:"15px"}}),Object(h.jsx)("br",{}),Object(h.jsx)(g.a,{style:{marginTop:"5px",marginBottom:"15px",marginRight:"8px"},type:"submit",size:"medium",variant:"contained",color:"success",children:"Add"}),Object(h.jsx)(g.a,{style:{marginTop:"5px",marginBottom:"15px"},variant:"contained",color:"error",onClick:function(){b.a.post("".concat(r,"/api/v1/deleteRecord"),{}).then((function(a){a&&window.location.reload()})).catch((function(a){}))},children:"Delete All Record"})]})]})]})};var C=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/",element:Object(h.jsx)(v,{})}),Object(h.jsx)(o.a,{path:"/admin",element:Object(h.jsx)(y,{})}),Object(h.jsx)(o.a,{path:"*",element:Object(h.jsx)(v,{})})]})})},S=t(85),W=function(a){a&&a instanceof Function&&t.e(3).then(t.bind(null,216)).then((function(e){var t=e.getCLS,n=e.getFID,l=e.getFCP,r=e.getLCP,i=e.getTTFB;t(a),n(a),l(a),r(a),i(a)}))};i.a.render(Object(h.jsx)(l.a.StrictMode,{children:Object(h.jsx)(S.a,{children:Object(h.jsx)(C,{})})}),document.getElementById("root")),W()}},[[162,1,2]]]);
//# sourceMappingURL=main.a5f0d8f8.chunk.js.map