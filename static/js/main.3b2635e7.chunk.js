(this.webpackJsonpawitter=this.webpackJsonpawitter||[]).push([[0],{52:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(34),r=a.n(c),s=(a(51),a(52),a(10)),i=a(31),o=a(28),l=a(11),j=a(13),u=a.n(j),d=a(17),b=a(29);a(54),a(75),a(76);b.a.initializeApp({apiKey:"AIzaSyDoyZvDcfMal0t6hV9WfVsKDrM1vdt_jBk",authDomain:"awitter-31c50.firebaseapp.com",projectId:"awitter-31c50",storageBucket:"awitter-31c50.appspot.com",messagingSenderId:"356925051981",appId:"1:356925051981:web:b68eb2372d80462f1bb804"});var x=b.a,m=b.a.auth(),p=b.a.firestore(),h=b.a.storage(),O=a(15),f=a(30),g=a(26),v=a.n(g),w=a(18),N=a(2),y=function(e){var t=e.msgObj,a=e.toggleHandler,c=Object(n.useState)(t.text),r=Object(s.a)(c,2),i=r[0],o=r[1],l=Object(n.useState)(""),j=Object(s.a)(l,2),b=j[0],x=j[1],m=function(){return x("")},g=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this message?")){e.next=7;break}if(""===t.imageUrl){e.next=7;break}return e.next=5,h.refFromURL(t.imageUrl).delete();case 5:return e.next=7,p.doc("aweets/".concat(t.id)).update({imageUrl:""});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(d.a)(u.a.mark((function e(n){var c,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),c="",""===b){e.next=11;break}return r=h.ref().child("".concat(t.creatorId,"/").concat(v()())),e.next=6,r.putString(b,"data_url");case 6:return s=e.sent,console.log(s,"response"),e.next=10,s.ref.getDownloadURL();case 10:c=e.sent;case 11:if(t.text===i&&!b){e.next=23;break}if(""===c){e.next=21;break}if(""===t.imageUrl){e.next=16;break}return e.next=16,h.refFromURL(t.imageUrl).delete();case 16:return e.next=18,p.doc("aweets/".concat(t.id)).update({text:i,imageUrl:c});case 18:m(),e.next=23;break;case 21:return e.next=23,p.doc("aweets/".concat(t.id)).update({text:i});case 23:a();case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"message-update",children:[Object(N.jsxs)("form",{onSubmit:y,className:"update-form",children:[Object(N.jsx)("input",{type:"text",placeholder:"Edit your message",value:i,onChange:function(e){var t=e.target.value;o(t)},required:!0,className:"update-input"}),b?Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"image-exists",children:[Object(N.jsx)("img",{src:b,width:"50px",height:"50px",style:{borderRadius:"20px"},className:"new-image"}),Object(N.jsxs)("span",{onClick:m,children:["Undo \xa0",Object(N.jsx)(O.a,{icon:w.c,size:"xs",className:"clear-icon"})]})]})}):t.imageUrl&&Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"image-exists",children:[Object(N.jsx)("img",{src:t.imageUrl,width:"50px",height:"50px",style:{borderRadius:"20px"}}),Object(N.jsxs)("span",{onClick:g,children:["Delete \xa0",Object(N.jsx)(O.a,{icon:f.b,size:"xs",className:"clear-icon"})]})]})}),Object(N.jsxs)("div",{className:"edit-image",children:[Object(N.jsxs)("label",{for:"image-update",className:"image-update-label",children:[Object(N.jsx)("span",{children:"Edit photo"}),Object(N.jsx)(O.a,{icon:w.b,style:{marginLeft:"10px"}})]}),Object(N.jsx)("input",{id:"image-update",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.target.result;console.log(t,"result"),x(t)},a.readAsDataURL(t)},className:"file-input"})]}),Object(N.jsx)("input",{type:"submit",value:"Update",className:"update-button"})]}),Object(N.jsx)("button",{onClick:a,children:"Cancel"})]})})},k=function(e){var t=e.msgObj,a=e.isOwner,c=Object(n.useState)(!1),r=Object(s.a)(c,2),i=r[0],o=r[1],l=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this message?")){e.next=7;break}if(""===t.imageUrl){e.next=5;break}return e.next=5,h.refFromURL(t.imageUrl).delete();case 5:return e.next=7,p.doc("aweets/".concat(t.id)).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){return o(!i)};return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{className:"messages-body",children:i?Object(N.jsx)(y,{msgObj:t,toggleHandler:j}):Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"message-item",children:[Object(N.jsx)("h3",{children:t.text}),t.imageUrl&&Object(N.jsx)("img",{src:t.imageUrl,width:"50px",height:"50px"}),a&&Object(N.jsxs)("div",{className:"message-option",children:[Object(N.jsx)(O.a,{icon:f.b,onClick:l,style:{marginRight:"5px"},size:"xs"}),Object(N.jsx)(O.a,{icon:f.a,onClick:j,size:"xs"})]})]})})})})},U=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(s.a)(a,2),r=c[0],i=c[1],o=Object(n.useState)(""),l=Object(s.a)(o,2),j=l[0],b=l[1],x=function(){return b("")},m=function(){var e=Object(d.a)(u.a.mark((function e(a){var n,c,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n="",""===j){e.next=11;break}return c=h.ref().child("".concat(t.uid,"/").concat(v()())),e.next=6,c.putString(j,"data_url");case 6:return s=e.sent,console.log(s),e.next=10,s.ref.getDownloadURL();case 10:n=e.sent;case 11:if(""!==r){e.next=15;break}return e.abrupt("return",alert("Please write anything!"));case 15:return o={text:r,createdAt:Date.now(),creatorId:t.uid,imageUrl:n},e.next=18,p.collection("aweets").add(o);case 18:i(""),x();case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("form",{onSubmit:m,className:"create-message",children:[Object(N.jsxs)("div",{className:"message-input-container",children:[Object(N.jsx)("input",{className:"message-input",type:"text",value:r,placeholder:"What's on your mind?",onChange:function(e){var t=e.target.value;i(t)},maxLength:120}),Object(N.jsx)("input",{type:"submit",value:"post",className:"message-post"})]}),Object(N.jsxs)("label",{for:"attach-image",className:"image-add-label",children:[Object(N.jsx)("span",{children:"Add photo"}),Object(N.jsx)(O.a,{icon:w.b,style:{marginLeft:"10px"}})]}),Object(N.jsx)("input",{id:"attach-image",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.target.result;b(t)},a.readAsDataURL(t)}}),j&&Object(N.jsxs)("div",{className:"image-display",children:[Object(N.jsx)("img",{src:j,width:"80px",height:"80px"}),Object(N.jsxs)("span",{onClick:x,children:["Remove \xa0",Object(N.jsx)(O.a,{icon:w.c,className:"clear-icon"})]})]})]})})},R=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(s.a)(a,2),r=c[0],o=c[1];return Object(n.useEffect)((function(){p.collection("aweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(i.a)({id:e.id},e.data())}));o(t)}))}),[]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(U,{userObj:t}),Object(N.jsx)("div",{className:"messages-container",children:r.map((function(e){return Object(N.jsx)(k,{msgObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},L=a(82),C=a(83),S=a(84),F=a(85),A=a(81),D=a(77),I=a(92),P=a(78),z=a(79),E=a(80),B=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(s.a)(r,2),o=i[0],l=i[1],j=Object(n.useState)(!0),b=Object(s.a)(j,2),x=b[0],p=b[1],h=Object(n.useState)(""),O=Object(s.a)(h,2),f=O[0],g=O[1],v=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&l(n)},w=function(){var e=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!x){e.next=8;break}return e.next=5,m.createUserWithEmailAndPassword(a,o);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,m.signInWithEmailAndPassword(a,o);case 10:n=e.sent;case 11:console.log(n),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.error(e.t0),g(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(D.a,{onSubmit:w,children:[f?Object(N.jsx)(I.a,{color:"danger",children:f}):"",Object(N.jsxs)(P.a,{children:[Object(N.jsx)(z.a,{for:"title",children:"Email"}),Object(N.jsx)(E.a,{type:"email",name:"email",id:"email",value:a,className:"form-control mb-2",required:!0,onChange:v})]}),Object(N.jsxs)(P.a,{children:[Object(N.jsx)(z.a,{for:"title",children:"Password"}),Object(N.jsx)(E.a,{type:"password",name:"password",id:"password",value:o,className:"form-control",required:!0,onChange:v})]}),Object(N.jsx)(A.a,{block:!0,className:"mt-4 create",children:x?"Create Account":"Login"}),Object(N.jsx)("div",{className:"toggle-auth",children:Object(N.jsx)("span",{onClick:function(){return p(!x)},children:x?"Sign In":"Create Account"})})]})})},W=a(35),G=function(){var e=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new x.auth.GoogleAuthProvider:"github"===a&&(n=new x.auth.GithubAuthProvider),e.next=4,m.signInWithPopup(n);case 4:c=e.sent,console.log(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{className:"login-container",children:Object(N.jsxs)(L.a,{sm:"12",md:{size:4,offset:4},children:[Object(N.jsx)("div",{className:"main-icon",children:Object(N.jsxs)("span",{children:[Object(N.jsx)(O.a,{icon:w.a,size:"3x"}),"witter"]})}),Object(N.jsxs)(C.a,{children:[Object(N.jsx)(S.a,{children:Object(N.jsx)(B,{})}),Object(N.jsxs)(F.a,{children:[Object(N.jsxs)(A.a,{block:!0,name:"google",className:"mt-4",onClick:e,children:["Continue with Google \xa0",Object(N.jsx)(O.a,{icon:W.b})]}),Object(N.jsxs)(A.a,{block:!0,name:"github",className:"mb-4",onClick:e,children:["Continue with Github \xa0\xa0",Object(N.jsx)(O.a,{icon:W.a})]})]})]})]})})})},_=a(87),q=a(86),H=a(88),J=a(89),K=a(90),M=function(e){var t=e.userObj,a=Object(n.useState)(!1),c=Object(s.a)(a,2),r=c[0],i=c[1],j=Object(l.g)();return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(q.a,{color:"dark",dark:!0,expand:"lg",className:"sticky-top",children:Object(N.jsxs)(_.a,{children:[Object(N.jsxs)(o.b,{to:"/",className:"text-white text-decoration-none",children:[Object(N.jsx)(O.a,{icon:w.a,size:"3x"}),Object(N.jsx)("span",{className:"head",children:"witter"})]}),Object(N.jsx)(H.a,{onClick:function(){i(!r)},className:"me-2"}),Object(N.jsx)(J.a,{color:"white",isOpen:r,navbar:!0,children:Object(N.jsxs)(K.a,{className:"ml-auto d-felx flex-direction-row justify-content-around nav-item",navbar:!0,children:[Object(N.jsxs)(o.b,{to:"/profile",className:"text-white text-decoration-none",children:[Object(N.jsx)("img",{src:t.photoURL,width:"40px",height:"40px",style:{borderRadius:"50%"}})," ","\xa0",Object(N.jsxs)("b",{children:[t.displayName,"'s Profile"]})]}),Object(N.jsx)("b",{className:"logout",onClick:function(){m.signOut(),j.push("/")},style:{color:"white"},children:"Log Out"})]})})]})})})},V=function(e){var t=e.userObj,a=e.refreshUser,c=Object(n.useState)(t.displayName),r=Object(s.a)(c,2),i=r[0],o=r[1],l=Object(n.useState)(""),j=Object(s.a)(l,2),b=j[0],x=j[1],m=function(){var e=Object(d.a)(u.a.mark((function e(n){var c,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),c="",""===b){e.next=11;break}return r=h.ref().child("".concat(t.uid,"-profile/").concat(v()())),e.next=6,r.putString(b,"data_url");case 6:return s=e.sent,console.log(s),e.next=10,s.ref.getDownloadURL();case 10:c=e.sent;case 11:if(console.log(t.photoURL,"photoURL"),console.log(t.photoURL.search(".com"),"\uc9c4\uc704\uc5ec\ubd80"),t.displayName===i&&!b){e.next=25;break}if(""===c){e.next=22;break}if(!(t.photoURL.search("firebase")>0)){e.next=18;break}return e.next=18,h.refFromURL(t.photoURL).delete();case 18:return e.next=20,t.updateProfile({displayName:i,photoURL:c});case 20:e.next=24;break;case 22:return e.next=24,t.updateProfile({displayName:i});case 24:a();case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{className:"profile-container",children:Object(N.jsxs)("form",{onSubmit:m,className:"profile",children:[Object(N.jsx)("div",{className:"image",children:b?Object(N.jsxs)("div",{id:"image",children:[Object(N.jsx)("img",{src:b,width:"100px",height:"100px",style:{borderRadius:"50%"},className:"new-image"}),Object(N.jsxs)("span",{onClick:function(){return x("")},children:["Remove \xa0",Object(N.jsx)(O.a,{icon:w.c,className:"clear-icon"})]})]}):Object(N.jsx)("div",{children:Object(N.jsx)("img",{src:t.photoURL,width:"100px",height:"100px",style:{borderRadius:"50%"}})})}),Object(N.jsx)("input",{type:"text",placeholder:"Display Name",value:i,onChange:function(e){var t=e.target.value;o(t)}}),Object(N.jsxs)("label",{for:"image-add",className:"image-add-label",children:[Object(N.jsx)("span",{children:"Change photo"}),Object(N.jsx)(O.a,{icon:w.b,style:{marginLeft:"10px"}})]}),Object(N.jsx)("input",{id:"image-add",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.target.result;console.log(t,"result"),x(t)},a.readAsDataURL(t)},className:"file-input"}),Object(N.jsx)("input",{type:"submit",value:"Update",className:"update-button"})]})})})},Y=function(e){var t=e.isLoggedIn,a=e.refreshUser,n=e.userObj,c=function(e,t){return function(a){return Object(N.jsx)(e,Object(i.a)(Object(i.a)({},t),a))}};return Object(N.jsxs)(o.a,{children:[t&&Object(N.jsx)(M,{userObj:n}),Object(N.jsx)("div",{id:"container",children:Object(N.jsx)(_.a,{id:"main-body",children:Object(N.jsx)(l.d,{children:t?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(l.b,{path:"/",exact:!0,component:c(R,{userObj:n})}),Object(N.jsx)(l.b,{path:"/profile",exact:!0,component:c(V,{userObj:n,refreshUser:a})})]}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(l.b,{path:"/",exact:!0,component:G}),Object(N.jsx)(l.a,{from:"*",to:"/"})]})})})})]})},Z=a(91),Q=function(){return Object(N.jsx)("div",{id:"main-footer",className:"text-center p-4",children:Object(N.jsx)(Z.a,{children:Object(N.jsx)(L.a,{children:Object(N.jsxs)("p",{children:["Copyright \xa9 ",Object(N.jsx)("span",{children:(new Date).getFullYear()})," Awitter"]})})})})},T=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),i=Object(s.a)(r,2),o=i[0],l=i[1];Object(n.useEffect)((function(){m.onAuthStateChanged((function(e){e?(console.log(e),l({displayName:e.displayName,uid:e.uid,photoURL:e.photoURL,updateProfile:function(t){return e.updateProfile(t)}})):l(null),c(!0)}))}),[]);return Object(N.jsxs)(N.Fragment,{children:[a?Object(N.jsx)(Y,{isLoggedIn:Boolean(o),refreshUser:function(){var e=m.currentUser;l({displayName:e.displayName,uid:e.uid,photoURL:e.photoURL,updateProfile:function(t){return e.updateProfile(t)}})},userObj:o}):"Initializing....",Object(N.jsx)(Q,{})]})};r.a.render(Object(N.jsx)(T,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.3b2635e7.chunk.js.map