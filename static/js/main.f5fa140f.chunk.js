(this.webpackJsonplab4=this.webpackJsonplab4||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),s=a.n(r),o=(a(93),a(13)),c=a(132),l=a(134),u=a(135),d=a(136),j=a(108),m=a(27),f=a(2),p=Object(c.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1,color:"#000099",textDecoration:"none"},menuButton:{marginRight:e.spacing(2)}}}));function b(){var e=p();return Object(f.jsx)("div",{children:Object(f.jsx)(l.a,{position:"static",color:"secondary",children:Object(f.jsxs)(u.a,{children:[Object(f.jsx)(d.a,{color:"inherit",component:m.b,to:"/searchProfiles",children:"Search Profiles"}),Object(f.jsx)(d.a,{color:"inherit",component:m.b,to:"/newProfile",children:"Add Profile"}),Object(f.jsx)(j.a,{align:"center",variant:"h4",className:e.title,to:"/",component:m.b,children:"Tinder for students projects"}),Object(f.jsx)(d.a,{color:"inherit",component:m.b,to:"/searchGroupsProfiles",children:"Search Groups"}),Object(f.jsx)(d.a,{color:"inherit",component:m.b,to:"/newGroupProfile",children:"Add Group"})]})})})}var h=a(53),g=a(54),x=a(59),O=a(57),v=a(106),C=a(105),N=a(137),S=a(143),y=a(138),P=a(55),w=a.n(P),F=a(75),L=a.n(F),T=a(56),k=a.n(T),I=function(e){Object(x.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={},n}return Object(g.a)(a,[{key:"render",value:function(){var e=this.props.classes;return Object(f.jsx)(C.a,{elevation:2,className:e.paper,children:Object(f.jsxs)(N.a,{children:[Object(f.jsxs)(S.a,{className:e.nameContainer,children:[Object(f.jsx)(L.a,{className:e.profile}),Object(f.jsx)(j.a,{className:e.name,color:"textPrimary",children:this.props.name})]}),Object(f.jsxs)(S.a,{className:e.emailContainer,children:[Object(f.jsx)(w.a,{className:e.emailIcon}),Object(f.jsx)(j.a,{variant:"caption",className:e.email,color:"primary",children:this.props.email})]}),Object(f.jsx)(j.a,{className:e.description,color:"inherit",children:this.props.description}),Object(f.jsxs)(j.a,{className:e.tags,color:"textSecondary",children:["Tags:"," "," ",this.props.tags]}),Object(f.jsx)(y.a,{className:e.cardActions,children:Object(f.jsx)(d.a,{variant:"contained",color:"secondary",className:e.buttonMessage,endIcon:Object(f.jsx)(k.a,{}),children:"Message"})})]})})}}]),a}(i.a.Component),G=Object(v.a)((function(e){return{paper:{margin:20,backgroundColor:"white"},nameContainer:{display:"flex",alignItems:"center"},name:{fontSize:35,fontWeight:500,marginLeft:10,fontStyle:"bold"},profile:{fontSize:80,color:"#FE3C72"},emailContainer:{display:"flex",alignItems:"center"},email:{fontSize:14,marginLeft:15,fontStyle:"italic"},emailIcon:{fontize:20,marginLeft:30,color:"#0099ff"},description:{fontSize:15,marginBottom:12,marginTop:10},tags:{fontSize:13,marginTop:20},cardActions:{height:1},buttonMessage:{marginLeft:600}}}))(I),D=a(142),W=a(139),A=a(140),B=a(38),E=a.n(B),z=a(78),M=Object(z.a)((function(e){return{searchField:{marginLeft:200}}}));var q=function(e){var t=M();return Object(f.jsxs)(S.a,{class:t.searchField,children:[Object(f.jsx)(D.a,{label:"Search in description",placeholder:"...",type:"search",variant:"filled",onChange:function(t){var a=t.target.value;e.updateProfilesDescription(a)},InputProps:{endAdornment:Object(f.jsx)(W.a,{position:"end",children:Object(f.jsx)(A.a,{children:Object(f.jsx)(E.a,{})})})}}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)(D.a,{label:"Search in tags",placeholder:"...",type:"search",variant:"filled",onChange:function(t){var a=t.target.value;e.updateProfilesTags(a)},InputProps:{endAdornment:Object(f.jsx)(W.a,{position:"end",children:Object(f.jsx)(A.a,{children:Object(f.jsx)(E.a,{})})})}})]})},Y=Object(c.a)((function(e){return{container:{display:"flex",justifyContent:"center",alignItems:"flex-start"},leftContainer:{width:800},searchContainer:{marginTop:30,marginLeft:65}}})),J=function(e){var t=Y(),a=Object(n.useState)(),i=Object(o.a)(a,2),r=i[0],s=i[1];return Object(f.jsx)(S.a,{class:t.container,children:Object(f.jsxs)(S.a,{class:t.leftContainer,children:[Object(f.jsx)(S.a,{class:t.searchContainer,children:Object(f.jsx)(q,{updateProfilesDescription:function(t){if(t){var a,n=null===(a=e.profiles)||void 0===a?void 0:a.filter((function(e){return e.description.toLowerCase().includes(t.toString().toLowerCase())}));s(n)}else s("")},updateProfilesTags:function(t){if(t){var a,n=null===(a=e.profiles)||void 0===a?void 0:a.filter((function(e){return e.tags.toLowerCase().includes(t.toString().toLowerCase())}));s(n)}else s("")}})}),(r||e.profiles).map((function(e){return Object(f.jsx)(G,{name:e.name,email:e.email,description:e.description,tags:e.tags})}))]})})},Q=a(58),H=a(141),R=Object(c.a)((function(e){return{paper:{padding:30,minHeight:450,width:300,margin:20},titleField:{marginLeft:20,fontStyle:"bold"},textFields:{marginTop:20},textField:{margin:"15px auto",height:40},addButton:{alignSelf:"flex-end",marginTop:120,height:40}}}));function U(e){var t=R(),a=Object(n.useState)(""),i=Object(o.a)(a,2),r=i[0],s=i[1],c=Object(n.useState)(""),l=Object(o.a)(c,2),u=l[0],m=l[1],p=Object(n.useState)(""),b=Object(o.a)(p,2),h=b[0],g=b[1],x=Object(n.useState)(""),O=Object(o.a)(x,2),v=O[0],N=O[1];return Object(f.jsx)(C.a,{elevation:3,className:t.paper,children:Object(f.jsxs)(H.a,{className:t.root,container:!0,children:[Object(f.jsx)(j.a,{variant:"h4",className:t.titleField,children:"Add new student"}),Object(f.jsxs)(H.a,{className:t.textFields,children:[Object(f.jsx)(D.a,{variant:"filled",label:"Your Full Name",placeholder:"Enter your full name",fullWidth:!0,className:t.textField,value:r,onChange:function(e){var t=e.target.value;s(t)}}),Object(f.jsx)(D.a,{variant:"filled",label:"Your Email",placeholder:"Enter your email",fullWidth:!0,className:t.textField,value:u,onChange:function(e){var t=e.target.value;m(t)}}),Object(f.jsx)(D.a,{variant:"filled",label:"Your Tags",placeholder:"Enter tags",fullWidth:!0,className:t.textField,value:h,onChange:function(e){var t=e.target.value;g(t)}}),Object(f.jsx)(D.a,{variant:"filled",label:"Your Description",placeholder:"Write something about yourself",multiline:!0,rows:4,fullWidth:!0,className:t.textField,value:v,onChange:function(e){var t=e.target.value;N(t)}}),Object(f.jsx)(d.a,{type:"submit",color:"secondary",variant:"contained",fullWidth:!0,className:t.addButton,onClick:function(){return e.addStudent(r,u,h,v),s(""),m(""),g(""),void N("")},children:"Add"})]})]})})}var V=Object(c.a)((function(e){return{container:{display:"flex",justifyContent:"center",alignItems:"flex-start",marginTop:50},titleContainer:{marginTop:20,marginLeft:40,color:"#0099ff"}}})),K=function(e){var t=V();return Object(f.jsx)(S.a,{class:t.container,children:Object(f.jsx)(S.a,{children:Object(f.jsx)(U,{addStudent:function(t,a,n,i){if(t&&a&&n&&i){var r={name:t,email:a,tags:n,description:i};e.setProfiles([].concat(Object(Q.a)(e.profiles),[r]))}else window.alert("Text field cannot be blank!")}})})})},X=a(76),Z=a.n(X),$=function(e){Object(x.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={},n}return Object(g.a)(a,[{key:"render",value:function(){var e=this.props.classes;return Object(f.jsx)(C.a,{elevation:2,className:e.root,children:Object(f.jsxs)(N.a,{children:[Object(f.jsxs)(S.a,{className:e.nameContainer,children:[Object(f.jsx)(Z.a,{className:e.profile}),Object(f.jsx)(j.a,{className:e.name,color:"textPrimary",children:this.props.name})]}),Object(f.jsxs)(S.a,{className:e.emailContainer,children:[Object(f.jsx)(w.a,{className:e.emailIcon}),Object(f.jsx)(j.a,{variant:"caption",className:e.email,color:"primary",children:this.props.email})]}),Object(f.jsx)(j.a,{className:e.description,color:"inherit",children:this.props.description}),Object(f.jsxs)(j.a,{className:e.tags,color:"textSecondary",children:["Tags:"," "," ",this.props.tags]}),Object(f.jsx)(y.a,{className:e.cardActions,children:Object(f.jsx)(d.a,{variant:"contained",color:"secondary",className:e.buttonMessage,endIcon:Object(f.jsx)(k.a,{}),children:"Message"})})]})})}}]),a}(i.a.Component),_=Object(v.a)((function(e){return{root:{margin:20,backgroundColor:"white"},nameContainer:{display:"flex",alignItems:"center"},name:{fontSize:35,fontWeight:500,marginLeft:10,fontStyle:"bold"},profile:{fontSize:80,color:"#FE3C72"},emailContainer:{display:"flex",alignItems:"center"},email:{fontSize:14,marginLeft:15,fontStyle:"italic"},emailIcon:{fontize:20,marginLeft:30,color:"#0099ff"},description:{fontSize:15,marginBottom:12,marginTop:10},tags:{fontSize:13,marginTop:20},cardActions:{height:1},buttonMessage:{marginLeft:600}}}))($),ee=Object(z.a)((function(e){return{searchField:{marginLeft:200}}}));var te=function(e){var t=ee();return Object(f.jsxs)(S.a,{class:t.searchField,children:[Object(f.jsx)(D.a,{label:"Search in description",placeholder:"...",type:"search",variant:"filled",onChange:function(t){var a=t.target.value;e.updateGroupProfilesDescription(a)},InputProps:{endAdornment:Object(f.jsx)(W.a,{position:"end",children:Object(f.jsx)(A.a,{children:Object(f.jsx)(E.a,{})})})}}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)(D.a,{label:"Search in tags",placeholder:"...",type:"search",variant:"filled",onChange:function(t){var a=t.target.value;e.updateGroupProfilesTags(a)},InputProps:{endAdornment:Object(f.jsx)(W.a,{position:"end",children:Object(f.jsx)(A.a,{children:Object(f.jsx)(E.a,{})})})}})]})},ae=Object(c.a)((function(e){return{container:{display:"flex",justifyContent:"center",alignItems:"flex-start"},leftContainer:{width:800},searchContainer:{marginTop:30,marginLeft:65}}})),ne=function(e){var t=ae(),a=Object(n.useState)(),i=Object(o.a)(a,2),r=i[0],s=i[1];return Object(f.jsx)(S.a,{class:t.container,children:Object(f.jsxs)(S.a,{class:t.leftContainer,children:[Object(f.jsx)(S.a,{class:t.searchContainer,children:Object(f.jsx)(te,{updateGroupProfilesDescription:function(t){if(t){var a,n=null===(a=e.groups)||void 0===a?void 0:a.filter((function(e){return e.description.toLowerCase().includes(t.toString().toLowerCase())}));s(n)}else s("")},updateGroupProfilesTags:function(t){if(t){var a,n=null===(a=e.groups)||void 0===a?void 0:a.filter((function(e){return e.tags.toLowerCase().includes(t.toString().toLowerCase())}));s(n)}else s("")}})}),(r||e.groups).map((function(e){return Object(f.jsx)(_,{name:e.name,email:e.email,description:e.description,tags:e.tags})}))]})})},ie=Object(c.a)((function(e){return{root:{display:"flex",flexDirextion:"row",alignItems:"center"},paper:{padding:30,minHeight:450,width:300,margin:20},titleField:{marginLeft:20,fontStyle:"bold"},textFields:{marginTop:20},textField:{margin:"15px auto",height:40},addButton:{alignSelf:"flex-end",marginTop:120,height:40}}}));function re(e){var t=ie(),a=Object(n.useState)(""),i=Object(o.a)(a,2),r=i[0],s=i[1],c=Object(n.useState)(""),l=Object(o.a)(c,2),u=l[0],m=l[1],p=Object(n.useState)(""),b=Object(o.a)(p,2),h=b[0],g=b[1],x=Object(n.useState)(""),O=Object(o.a)(x,2),v=O[0],N=O[1];return Object(f.jsx)(C.a,{elevation:3,className:t.paper,children:Object(f.jsxs)(H.a,{className:t.root,container:!0,children:[Object(f.jsx)(j.a,{variant:"h4",className:t.titleField,children:"Add new group"}),Object(f.jsxs)(H.a,{className:t.textFields,children:[Object(f.jsx)(D.a,{variant:"filled",label:"Your Group Name",placeholder:"Enter your group name",fullWidth:!0,className:t.textField,value:r,onChange:function(e){var t=e.target.value;s(t)}}),Object(f.jsx)(D.a,{variant:"filled",label:"Your Group Email",placeholder:"Enter your group email",fullWidth:!0,className:t.textField,value:u,onChange:function(e){var t=e.target.value;m(t)}}),Object(f.jsx)(D.a,{variant:"filled",label:"Your Tags",placeholder:"Enter tags",fullWidth:!0,className:t.textField,value:h,onChange:function(e){var t=e.target.value;g(t)}}),Object(f.jsx)(D.a,{variant:"filled",label:"Your group description",placeholder:"Write something about your group",multiline:!0,rows:4,fullWidth:!0,className:t.textField,value:v,onChange:function(e){var t=e.target.value;N(t)}}),Object(f.jsx)(d.a,{type:"submit",color:"secondary",variant:"contained",fullWidth:!0,className:t.addButton,onClick:function(){return e.addGroup(r,u,h,v),s(""),m(""),g(""),void N("")},children:"Add"})]})]})})}var se=Object(c.a)((function(e){return{container:{display:"flex",justifyContent:"center",alignItems:"flex-start",marginTop:50},titleContainer:{marginTop:20,marginLeft:40,color:"#0099ff"}}})),oe=function(e){var t=se();return Object(f.jsx)(S.a,{class:t.container,children:Object(f.jsx)(S.a,{children:Object(f.jsx)(re,{addGroup:function(t,a,n,i){if(t&&a&&n&&i){var r={name:t,email:a,tags:n,description:i};e.setGroupProfiles([].concat(Object(Q.a)(e.groups),[r]))}else window.alert("Text field cannot be blank!")}})})})},ce=a.p+"static/media/PageNotFound.b2df4ff4.svg",le=a(11),ue=Object(z.a)((function(e){return{image:{display:"flex",marginTop:50,marginLeft:380}}})),de=[{name:"Ragnar Lothbrok",email:"i.am.king@vikings.com",description:"Maecenas sed ante a arcu tincidunt congue. Etiam vel nibh ullamcorper, commodo lectus vitae,                   lacinia leo. Morbi risus ex, condimentum non posuere in, porta non risus.",tags:"Bash, Docker, Python"},{name:"Bjorn Lothbrok",email:"ironside@vikings.com",description:"Nulla vel ultricies augue. Vivamus neque erat, facilisis sit amet purus ac,                  interdum laoreet metus. Donec vitae vestibulum velit, id varius odio. ",tags:"Python, Django, SQL, JavaScript"},{name:"Travis Fimmel",email:"king.ragnar@vikings.com",description:"Suspendisse non bibendum nunc. Nullam tristique sodales mi et porta. Ut finibus nisl vitae risus cursus blandit.                   Nam et magna eget arcu luctus egestas. Duis a magna aliquam, volutpat enim nec, euismod urna.",tags:"Java, Docker, Python, C, C++"}],je=[{name:"Nokia Group",email:"nokia.group@gmail.com",description:"Sed felis neque, cursus vitae enim non, facilisis sagittis nulla. Mauris lacus nulla,                   ullamcorper non tincidunt ut, consequat ac sapien.",tags:"Python, Django, SQL, JavaScript"},{name:"PolWroProject",email:"polwroproject@gmail.com",description:"In gravida volutpat massa non tempor. Nunc commodo lacus sit amet nisi molestie,                   quis consectetur sapien tempus. Maecenas vel tellus sed justo hendrerit venenatis.",tags:"Java, Docker, Python, C, C++"},{name:"BEST Wroclaw",email:"best.wroclaw@gmail.com",description:"Nam varius diam quis odio suscipit, in porttitor est sodales. Mauris aliquam lacus at velit iaculis convallis.                   Quisque et mauris vel dui lobortis fringilla non vitae urna. Nullam vel velit vitae nibh rhoncus sodales vitae ac est.",tags:"Bash, Docker, Python"}],me=function(){var e=ue(),t=Object(n.useState)(de),a=Object(o.a)(t,2),i=a[0],r=a[1],s=Object(n.useState)(je),c=Object(o.a)(s,2),l=c[0],u=c[1];return Object(f.jsxs)(m.a,{basename:"/tinder",children:[Object(f.jsx)(b,{}),Object(f.jsxs)(le.c,{children:[Object(f.jsx)(le.a,{exact:!0,path:"/",component:function(){return Object(f.jsx)(J,{profiles:i,setProfiles:r})}}),Object(f.jsx)(le.a,{exact:!0,path:"/searchProfiles",component:function(){return Object(f.jsx)(J,{profiles:i,setProfiles:r})}}),Object(f.jsx)(le.a,{exact:!0,path:"/newProfile",component:function(){return Object(f.jsx)(K,{profiles:i,setProfiles:r})}}),Object(f.jsx)(le.a,{exact:!0,path:"/searchGroupsProfiles",component:function(){return Object(f.jsx)(ne,{groups:l,setGroupProfiles:u})}}),Object(f.jsx)(le.a,{exact:!0,path:"/newGroupProfile",component:function(){return Object(f.jsx)(oe,{groups:l,setGroupProfiles:u})}}),Object(f.jsx)(le.a,{children:Object(f.jsx)("div",{className:e.image,children:Object(f.jsx)("img",{src:ce,alt:"PageNotFound"})})})]})]})},fe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,145)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(me,{})}),document.getElementById("root")),fe()},93:function(e,t,a){}},[[102,1,2]]]);
//# sourceMappingURL=main.f5fa140f.chunk.js.map