(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{246:function(e,t,n){},437:function(e,t,n){"use strict";n.r(t);var c=n(7),s=n(107),a=n.n(s),r=(n(246),n(18)),A=n(24),i=n(21),o=n(29),j=n(0),l=n.n(j),d=n(1),u="SET_SKIN",b="UPDATE_SKIN",p="SET_CONTACT",O="UPDATE_CONTACT",m="SET_EDUCATION",g="UPDATE_EDUCATION",v="SIGN_IN_REQUEST",f="SIGN_IN_FAILED",x="SIGN_IN_SUCCESS",h="SIGN_UP_REQUEST",C="SIGN_UP_FAILED",N="SIGN_UP_SUCCESS",M="REMOVE_ERROR",Q=function(){return{type:M}},I=function(e){return function(t,n,c){var s=c.getFirebase,a=c.getFirestore;t({type:h});var r=s(),A=a();r.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(){var n=Object(d.a)(l.a.mark((function n(c){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.collection("users").doc(c.user.uid).set({email:e.email,resumeIds:[]});case 2:n.sent,t({type:N});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(e){t(function(e){return{type:C,payload:e.message}}(e)),setTimeout((function(){t(Q())}),2e3)}))}},D=n(3);function S(e){e.auth;return Object(D.jsxs)("ul",{children:[Object(D.jsx)("li",{className:"signup ",children:Object(D.jsx)(i.b,{className:" btnv-1",to:"/register",children:"Register"})}),Object(D.jsx)("li",{className:"signin",children:Object(D.jsx)(i.b,{className:"text-blue btnv-3",to:"/login",children:"Sign In"})})]})}var w=Object(A.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{signOut:function(){return e(function(){var e=Object(d.a)(l.a.mark((function e(t,n,c){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=c.getFirebase,c.getFirestore,s().auth().signOut().then((function(){t({type:"SIGN_OUT_SUCCESS"})})).catch((function(e){t({type:"SIGN_OUT_FAILED",payload:e}),setTimeout((function(){t(Q())}),2e3)}));case 3:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.auth;return Object(D.jsx)("header",{className:"header",children:Object(D.jsxs)("nav",{className:"nav",children:[Object(D.jsx)("a",{href:"/",className:"holder-logo",children:Object(D.jsx)("img",{className:"logo",src:"data:image/png;base64,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b0z7JmA9DICiDAB6Hpp653Zb+l8JWA8DoCgDgAu7czo/9c7tNvXABIxnABRlAPDd2nfwt1fM987rtnVOunoCxjIAijIA+G7tS31653Rba18tDIxlABRlAHCB9nW+m/pGv03VftVxwwSMYwAUZQBwgeel3vnc9l6fgHEMgKIMAJrrpjl8wc+obpeAMQyAogwAmr9IvXO5K70n+eZAGMMAKMoA4Cqpdx53raMSMD0DoCgDgONT7zzuWickYHoGQFEGAG9IvfO4a7XvCQCmZwAUZQDstsulXX7x34U7MgHTMgCKMgB22y+n3jnc1R6RgGkZAEUZALvtVal3Dne1kxMwLQOgKANgd7WvxP1m6p3DXe6KCZiOAVCUAbC7rpR652/Xu3kCpmMAFGUA7K6bpt752/V+LgHTMQCKMgB2111S7/zteu1zEYDpGABFGQC769dT7/zteu0rkYHpGABFGQC763dT7/ztei9MwHQMgKIMgN31gtQ7f7veXydgOgZAUQbA7npd6p2/Xa99MyAwHQOgKANgd+36VwBfVCclYDoGQFEGwO5qv+vunb9d728SMB0DoCgDYHc9NfXO3673sgRMxwAoygDYXQ9LvfO36/1BAqZjABRlAOyuX0u987frPTEB0zEAijIAdtdtU+/87Xq/moDpGABFGQC763Kpd/52vRskYDoGQFEGwG47JfXO4a52dtovAdMxAIoyAHbby1PvHO5qPgMApmcAFGUA7LbfTL1zuKs9JwHTMgCKMgB2281S7xzuandPwLQMgKIMAD6beudx12q//z8oAdMyAIoyAPifqXced63/nYDpGQBFGQDcMvXO4671ywmYngFQlAHA3umLqXcud6X24/+DEzA9A6AoA4Cmvfq9dy53pVcnYAwDoCgDgOaH0vmpdz53oaMTMIYBUJQBwAXafwX3zue2984EjGMAFGUAcIGfTL3zue39fALGMQCKMgD4bm9JvXO6rZ2a2osggXEMgKIMAL7bT6feOd3W7p+AsQyAogwALuzE1Duv29Z70z4JGMsAKMoA4MKuns5KvXO7Td0iAeMZAEUZAPQ8OvXO7bb0kgSshwFQlAFAT3tcnJJ653fufS0dkYD1MACKMgC4KLdK3069czznjkvA+hgARRkAXJxHpt45nmsvSsB6GQBFGQBcnL3S36beeZ5b7VX/ByZgvQyAogwALsnh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"})}),Object(D.jsxs)("div",{className:"header-links full-height",children:[Object(o.isLoaded)(t)&&!Object(o.isEmpty)(t)?Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("ul",{children:[Object(D.jsx)("li",{className:"signin ",children:Object(D.jsxs)(i.b,{className:"  ",to:"/",children:["Logged in as ",t.email]})}),Object(D.jsx)("li",{className:"signin",children:Object(D.jsx)("button",{className:"text-blue btnv-3",onClick:function(){e.signOut(),console.log("The user will sign out")},children:"Signout"})})]})}):Object(D.jsx)(S,{}),Object(D.jsxs)("ul",{id:"nav-mid",children:[Object(D.jsx)("li",{children:Object(D.jsx)(i.b,{className:"btn-nvt-gm",to:"/resume-templates",children:"Resume Templates"})}),Object(D.jsx)("li",{className:"holder-pricing",children:Object(D.jsx)(i.b,{className:"btn-nvt-gm",to:"/about-us",children:"About Us"})})]})]})]})})})),k=function(){return Object(D.jsx)("footer",{className:"footer",children:Object(D.jsx)("div",{})})},y=n.p+"static/media/resume.352231ef.png",B=function(){return Object(D.jsx)("div",{className:"container  lp-page center",children:Object(D.jsxs)("div",{className:"section",children:[Object(D.jsx)("h1",{children:"Create a resume that stands out"}),Object(D.jsx)("p",{children:"Create a Resume that perfectally describes your skils and match job profile."}),Object(D.jsx)("br",{}),Object(D.jsx)("div",{children:Object(D.jsx)(i.b,{to:"/getting-started",className:"btn hvr-float-shadow",children:Object(D.jsx)("span",{children:"Get Started for Free"})})}),Object(D.jsx)("img",{src:y,className:"lp-resume",alt:"logo"})]})})},U=["skin1","skin2","skin3","skin4","skin5","skin6","skin7","skin8"],G="FNAM",R="LNAM",T="PROF",E="PRSU",K="PHON",P="CITY",X="DGRE",Z="GRCG",J="GRYR",F="GRDT",Y="SCHO",q="STAT",z="STRT",H="ZIPC",L="EMAI",V="CNTY",W=n(442);var _=Object(A.b)((function(e){return{document:e.document}}),(function(e){return{setDocument:function(t){return e(function(e){return{type:u,payload:{id:Object(W.a)(),skinCd:e}}}(t))},updateDocument:function(t){return e(function(e){return{type:b,payload:{skinCd:e}}}(t))}}}))((function(e){var t=Object(r.g)(),n=function(){var n=Object(d.a)(l.a.mark((function n(c){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:null!=e.document.id?e.updateDocument(c):e.setDocument(c),t.push("/contact");case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(D.jsx)("div",{className:"container med gettingStarted",children:Object(D.jsxs)("div",{className:"section",children:[Object(D.jsx)("h1",{className:" center",children:"Select a resume template to get started"}),Object(D.jsx)("p",{className:" center",children:"You\u2019ll be able to edit and change this template later!"}),Object(D.jsx)("div",{className:"styleTemplate ",children:U.map((function(e,t){return Object(D.jsxs)("div",{className:"template-card rounded-border",children:[Object(D.jsx)("i",{className:"demo-value"==e?"selected fa fa-check":"hide"}),Object(D.jsx)("img",{className:"",src:"/images/"+e+".svg"}),Object(D.jsx)("button",{type:"button",onClick:function(){return n(e)},className:"btn-select-theme",children:"USE TEMPLATE"})]},t)}))})]})})})),$=n(13);n(403),n(6);var ee=Object(A.b)((function(e){return{authMine:e.auth}}),(function(e){return{signIn:function(t){return e(function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n,c,s){var a,r,A;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=s.getFirebase,r=s.getFirestore,n({type:v}),A=a(),r(),t.prev=4,t.next=7,A.auth().signInWithEmailAndPassword(e.email,e.password);case 7:t.sent,n({type:x}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(4),n((c=t.t0,{type:f,payload:c.message})),setTimeout((function(){n(Q())}),2e3);case 15:case"end":return t.stop()}var c}),t,null,[[4,11]])})));return function(e,n,c){return t.apply(this,arguments)}}()}(t))}}}))((function(e){console.log(e);var t=Object(r.g)(),n=Object(c.useState)(""),s=Object($.a)(n,2),a=s[0],A=s[1],i=Object(c.useState)(""),o=Object($.a)(i,2),j=o[0],u=o[1];Object(c.useEffect)((function(){var n;(null===(n=e.auth)||void 0===n?void 0:n.uid)&&t.push("/")}),[e]);var b=function(){var n=Object(d.a)(l.a.mark((function n(){var c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={email:a,password:j},n.next=3,e.signIn(c);case 3:""==e.authMine.error&&t.push("/");case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(D.Fragment,{children:e.authMine.loading?Object(D.jsx)("h4",{style:{marginTop:"10%",height:"52vh",textAlign:"center"},children:"Patiently Wait...we are logging you in"}):Object(D.jsx)("div",{className:"container med contact",children:Object(D.jsx)("div",{className:"section funnel-section",children:Object(D.jsxs)("div",{className:"form-card",children:[Object(D.jsx)("h2",{className:"form-heading center",children:"Enter Login details"}),Object(D.jsxs)("div",{className:"form-section",children:[Object(D.jsxs)("div",{className:"input-group full",children:[Object(D.jsx)("label",{children:"Email"}),Object(D.jsxs)("div",{className:"effect",children:[Object(D.jsx)("input",{type:"text",name:"email",value:a||"",onChange:function(e){A(e.target.value)}}),Object(D.jsx)("span",{})]})]}),Object(D.jsxs)("div",{className:"input-group full",children:[Object(D.jsx)("label",{children:"Password"}),Object(D.jsxs)("div",{className:"effect",children:[Object(D.jsx)("input",{type:"password",name:"password",value:j||"",onChange:function(e){u(e.target.value)}}),Object(D.jsx)("span",{})]})]}),e.authMine.error?Object(D.jsx)("div",{className:"input-group full",children:Object(D.jsx)("span",{className:"error-message",children:e.authMine.error})}):Object(D.jsx)(D.Fragment,{}),Object(D.jsx)("div",{className:"form-buttons",children:Object(D.jsx)("button",{onClick:b,className:"btn hvr-float-shadow",type:"button",children:"Login"})})]})]})})})})})}));var te=Object(A.b)((function(e){return{authMine:e.auth,auth:e.firebase.auth}}),(function(e){return{register:function(t){return e(I(t))}}}))((function(e){var t,n,s=Object(r.g)(),a=Object(c.useState)(""),A=Object($.a)(a,2),i=A[0],j=A[1],u=Object(c.useState)(""),b=Object($.a)(u,2),p=b[0],O=b[1],m=function(){var t=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.register({email:i,password:p});case 2:t.sent,null!=e.auth&&s.push("/");case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(D.jsx)(D.Fragment,{children:Object(o.isLoaded)(e.auth)?Object(D.jsx)(D.Fragment,{children:e.authMine.loading?Object(D.jsx)("h4",{style:{marginTop:"10%",height:"52vh",textAlign:"center"},children:"Patiently Wait...we are resgistering you in"}):Object(D.jsx)("div",{className:"container med contact",children:Object(D.jsx)("div",{className:"section funnel-section",children:Object(D.jsxs)("div",{className:"form-card",children:[Object(D.jsx)("h2",{className:"form-heading center",children:"Enter your details"}),Object(D.jsxs)("div",{className:"form-section",children:[Object(D.jsxs)("div",{className:"input-group full",children:[Object(D.jsx)("label",{children:"Email"}),Object(D.jsxs)("div",{className:"effect",children:[Object(D.jsx)("input",{type:"text",name:"email",value:i||"",onChange:function(e){j(e.target.value)}}),Object(D.jsx)("span",{})]})]}),Object(D.jsxs)("div",{className:"input-group full",children:[Object(D.jsx)("label",{children:"Password"}),Object(D.jsxs)("div",{className:"effect",children:[Object(D.jsx)("input",{type:"password",name:"password",value:p||"",onChange:function(e){O(e.target.value)}}),Object(D.jsx)("span",{})]})]}),(null===(t=e.authMine)||void 0===t?void 0:t.error)?Object(D.jsx)("div",{className:"input-group full",children:Object(D.jsx)("span",{className:"error-message",children:null===(n=e.authMine)||void 0===n?void 0:n.error})}):Object(D.jsx)(D.Fragment,{}),Object(D.jsx)("div",{className:"form-buttons",children:Object(D.jsx)("button",{onClick:m,className:"btn hvr-float-shadow",type:"button",children:"Register"})})]})]})})})}):Object(D.jsx)(D.Fragment,{})})})),ne=n.p+"static/media/aboutus.48416021.jpg",ce=function(){return Object(D.jsx)("div",{className:" container med   about-page",children:Object(D.jsxs)("div",{className:"section contact-section",children:[Object(D.jsxs)("div",{className:"  contact-left-section ",children:[Object(D.jsx)("p",{children:"Do you have any comments or questions? Our team will be happy to assist you. Send us a message."}),Object(D.jsx)("h2",{className:"email text-large",children:"mangoreayush@gmail.com"}),Object(D.jsx)("p",{className:"happy-to-help",children:"We are here to answer any questions regarding our resume generator, do not hesitate to contact us for any reason. We will respond in less than 24 hours from receipt of the email. Thanks for trusting us"})]}),Object(D.jsx)("div",{className:"contact-right-section",children:Object(D.jsx)("img",{src:ne,className:" full-width about-us-img",alt:"logo"})})]})})},se=n(5),ae=n(14);var re=function(e){var t=function(t,n){return e.contactSection&&e.contactSection[t]?e.contactSection[t]+(n||""):""},n=function(t,n){return e.educationSection&&e.educationSection[t]?e.educationSection[t]+(n||""):""};return Object(D.jsxs)("div",{className:e.skinCd+" resume-preview ",children:[Object(D.jsxs)("div",{className:"name-section",children:[Object(D.jsxs)("p",{className:"center contact-name text-upper",children:[" ",t(G," ")+t(R),"  "]}),Object(D.jsx)("p",{className:"center address",children:t(P,", ")+t(q,", ")+t(V,", ")+t(H,", ")}),Object(D.jsx)("p",{className:"center",children:t(L)}),Object(D.jsxs)("p",{className:"center",children:[t(K)," "]})]}),Object(D.jsxs)("div",{className:"profSummSection text-upper",children:[Object(D.jsx)("p",{className:"heading bold",children:"PROFESSIONAL SUMMARY"}),Object(D.jsx)("div",{className:"divider"}),Object(D.jsx)("p",{children:t(E)})]}),Object(D.jsxs)("div",{className:"educationSection text-upper",children:[Object(D.jsx)("p",{className:"heading bold",children:"EDUCATIONAL DETAILS"}),Object(D.jsx)("div",{className:"divider"}),Object(D.jsx)("p",{children:n(Y)}),Object(D.jsx)("p",{children:n(X)}),Object(D.jsx)("p",{children:n(P)}),Object(D.jsx)("p",{children:n(Z)}),Object(D.jsx)("p",{children:n(F)}),Object(D.jsx)("p",{children:n(J)})]})]})};var Ae=Object(A.b)((function(e){return{document:e.document,contact:e.contact}}),(function(e){return{setContact:function(t){return e(function(e){return{type:p,payload:e}}(t))},updateContact:function(t){return e(function(e){return{type:O,payload:e}}(t))}}}))((function(e){var t,n=Object(r.g)(),s=Object(c.useState)(e.contact),a=Object($.a)(s,2),A=a[0],o=a[1];Object(c.useEffect)((function(){null==e.document.id&&n.push("/getting-started")}));var j=function(e){var t=e.target.name,n=e.target.value;o(Object(ae.a)(Object(ae.a)({},A),{},Object(se.a)({},t,n)))},u=function(){var t=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null!=e.contact?e.updateContact(A):e.setContact(A),n.push("/education");case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(e){return A&&A[e]?A[e]:""};return Object(D.jsx)("div",{className:"container med contact",children:Object(D.jsxs)("div",{className:"section funnel-section",children:[Object(D.jsxs)("div",{className:"form-card",children:[Object(D.jsx)("h2",{className:"form-heading center",children:"Personal Details"}),Object(D.jsxs)("div",{className:"form-section",children:[Object(D.jsxs)("div",{className:"input-group",children:[Object(D.jsx)("label",{children:"First Name"}),Object(D.jsxs)("div",{className:"effect",children:[Object(D.jsx)("input",{type:"text",name:G,value:b(G),onChange:j}),Object(D.jsx)("span",{})]}),Object(D.jsx)("div",{className:"error"})]}),Object(D.jsxs)("div",{className:"input-group",children:[Object(D.jsx)("label",{children:"Last Name"}),Object(D.jsxs)("div",{className:"effect",children:[Object(D.jsx)("input",{type:"text",name:R,value:b(R),onChange:j}),Object(D.jsx)("span",{})]}),Object(D.jsx)("div",{className:"error"})]}),Object(D.jsxs)("div",{className:"input-group full",children:[Object(D.jsx)("label",{children:"Professional Summary"}),Object(D.jsxs)("div",{className:"effect",children:[Object(D.jsx)("input",{type:"text",name:E,value:b(E),onChange:j}),Object(D.jsx)("span",{})]}),Object(D.jsx)("div",{className:"error"})]}),Object(D.jsxs)("div",{className:"input-group",children:[Object(D.jsx)("label",{children:"Email"}),Object(D.jsxs)("div",{className:"effect",children:[Object(D.jsx)("input",{type:"text",name:L,value:b(L),onChange:j}),Object(D.jsx)("span",{})]}),Object(D.jsx)("div",{className:"error"})]}),Object(D.jsxs)("div",{className:"input-group",children:[Object(D.jsx)("label",{children:"Phone"}),Object(D.jsxs)("div",{className:"effect",children:[Object(D.jsx)("input",{type:"text",name:K,value:b(K),onChange:j}),Object(D.jsx)("span",{})]}),Object(D.jsx)("div",{className:"error"})]}),Object(D.jsxs)("div",{className:"input-group",children:[Object(D.jsx)("label",{children:"Profession"}),Object(D.jsxs)("div",{className:"effect",children:[Object(D.jsx)("input",{type:"text",name:T,value:b(T),onChange:j}),Object(D.jsx)("span",{})]}),Object(D.jsx)("div",{className:"error"})]}),Object(D.jsxs)("div",{className:"input-group",children:[Object(D.jsx)("label",{children:"Street"}),Object(D.jsxs)("div",{className:"effect",children:[Object(D.jsx)("input",{type:"text",name:z,value:b(z),onChange:j}),Object(D.jsx)("span",{})]}),Object(D.jsx)("div",{className:"error"})]}),Object(D.jsxs)("div",{className:"input-group",children:[Object(D.jsx)("label",{children:"City"}),Object(D.jsxs)("div",{className:"effect",children:[Object(D.jsx)("input",{type:"text",name:P,value:b(P),onChange:j}),Object(D.jsx)("span",{})]}),Object(D.jsx)("div",{className:"error"})]}),Object(D.jsxs)("div",{className:"input-group",children:[Object(D.jsx)("label",{children:"State"}),Object(D.jsxs)("div",{className:"effect",children:[Object(D.jsx)("input",{type:"text",name:q,value:b(q),onChange:j}),Object(D.jsx)("span",{})]}),Object(D.jsx)("div",{className:"error"})]}),Object(D.jsxs)("div",{className:"input-group",children:[Object(D.jsx)("label",{children:"Country"}),Object(D.jsxs)("div",{className:"effect",children:[Object(D.jsx)("input",{type:"text",name:V,value:b(V),onChange:j}),Object(D.jsx)("span",{})]}),Object(D.jsx)("div",{className:"error"})]}),Object(D.jsxs)("div",{className:"input-group",children:[Object(D.jsx)("label",{children:"Pin Code"}),Object(D.jsxs)("div",{className:"effect",children:[Object(D.jsx)("input",{type:"text",name:H,value:b(H),onChange:j}),Object(D.jsx)("span",{})]}),Object(D.jsx)("div",{className:"error"})]}),Object(D.jsxs)("div",{className:"form-buttons",children:[Object(D.jsx)("button",{onClick:u,className:"btn hvr-float-shadow",type:"button",children:"Next"}),Object(D.jsx)(i.b,{to:"/getting-started",className:"center",children:"Back"})]})]})]}),Object(D.jsx)("div",{className:"preview-card",children:Object(D.jsx)(re,{contactSection:A,skinCd:null===e||void 0===e||null===(t=e.document)||void 0===t?void 0:t.skinCd})})]})})}));var ie=Object(A.b)((function(e){return{document:e.document,contact:e.contact,education:e.education}}),(function(e){return{setEducation:function(t){return e(function(e){return{type:m,payload:e}}(t))},updateEducation:function(t){return e(function(e){return{type:g,payload:e}}(t))}}}))((function(e){var t;console.log("Education");var n=Object(r.g)(),s=Object(c.useState)(e.education),a=Object($.a)(s,2),A=a[0],o=a[1],j=function(e){var t=e.target.name,n=e.target.value;o(Object(ae.a)(Object(ae.a)({},A),{},Object(se.a)({},t,n)))},u=function(e){return A&&A[e]?A[e]:""},b=function(){var t=Object(d.a)(l.a.mark((function t(c){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null!=e.education?e.updateEducation(A):e.setEducation(A),n.push("/finalize");case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(D.jsx)("div",{className:"container med education",children:Object(D.jsxs)("div",{className:"section funnel-section",children:[Object(D.jsxs)("div",{className:"form-card",children:[Object(D.jsx)("h2",{className:"form-heading center",children:"Educational Section"}),Object(D.jsxs)("div",{className:"form-section",children:[Object(D.jsxs)("div",{className:"input-group",children:[Object(D.jsx)("label",{children:"College Name"}),Object(D.jsxs)("div",{className:"effect",children:[Object(D.jsx)("input",{type:"text",name:Y,onChange:j,value:u(Y)}),Object(D.jsx)("span",{})]}),Object(D.jsx)("div",{className:"error"})]}),Object(D.jsxs)("div",{className:"input-group",children:[Object(D.jsx)("label",{children:"Degree"}),Object(D.jsxs)("div",{className:"effect",children:[Object(D.jsx)("input",{type:"text",name:X,onChange:j,value:u(X)}),Object(D.jsx)("span",{})]}),Object(D.jsx)("div",{className:"error"})]}),Object(D.jsxs)("div",{className:"input-group",children:[Object(D.jsx)("label",{children:"CGPA"}),Object(D.jsxs)("div",{className:"effect",children:[Object(D.jsx)("input",{type:"text",name:Z,onChange:j,value:u(Z)}),Object(D.jsx)("span",{})]}),Object(D.jsx)("div",{className:"error"})]}),Object(D.jsxs)("div",{className:"input-group",children:[Object(D.jsx)("label",{children:"City/State"}),Object(D.jsxs)("div",{className:"effect",children:[Object(D.jsx)("input",{type:"text",name:P,onChange:j,value:u(P)}),Object(D.jsx)("span",{})]}),Object(D.jsx)("div",{className:"error"})]}),Object(D.jsxs)("div",{className:"input-group",children:[Object(D.jsx)("label",{children:"Graduation Month"}),Object(D.jsxs)("div",{className:"effect",children:[Object(D.jsx)("input",{type:"text",name:F,onChange:j,value:u(F)}),Object(D.jsx)("span",{})]}),Object(D.jsx)("div",{className:"error"})]}),Object(D.jsxs)("div",{className:"input-group",children:[Object(D.jsx)("label",{children:"Graduation Year"}),Object(D.jsxs)("div",{className:"effect",children:[Object(D.jsx)("input",{type:"text",name:J,onChange:j,value:u(J)}),Object(D.jsx)("span",{})]}),Object(D.jsx)("div",{className:"error"})]}),Object(D.jsxs)("div",{className:"form-buttons",children:[Object(D.jsx)("button",{className:"btn hvr-float-shadow",type:"button",onClick:b,children:"Next"}),Object(D.jsx)(i.b,{to:"/contact",className:"center",children:"Back"})]})]})]}),Object(D.jsx)("div",{className:"preview-card",children:Object(D.jsx)(re,{contactSection:e.contact,educationSection:A,skinCd:null===e||void 0===e||null===(t=e.document)||void 0===t?void 0:t.skinCd})})]})})})),oe=n(236),je=n(159),le=n.n(je);var de=Object(A.b)((function(e){return{document:e.document,contactSection:e.contact,educationSection:e.education,auth:e.firebase.auth}}))((function(e){var t,n=e.educationSection,c=e.contactSection,s=e.document,a=Object(o.useFirestore)(),r=function(){var t=Object(d.a)(l.a.mark((function t(){var r,A;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.collection("users").doc(e.auth.uid).get();case 2:return r=(r=t.sent).data(),console.log(r),A=void 0!=r.resumeIds?Object(ae.a)(Object(ae.a)({},r.resumeIds),{},Object(se.a)({},s.id,{educationSection:n,contactSection:c,document:s})):Object(se.a)({},s.id,{educationSection:n,contactSection:c,document:s}),t.next=8,a.collection("users").doc(e.auth.uid).update({resumeIds:A});case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(D.jsx)("div",{className:"container full finalize-page",children:Object(D.jsxs)("div",{className:"funnel-section ",children:[Object(D.jsx)("div",{className:"finalize-preview-card ",id:"resumePreview",children:Object(D.jsx)(re,{contactSection:e.contactSection,educationSection:e.educationSection,skinCd:null===e||void 0===e||null===(t=e.document)||void 0===t?void 0:t.skinCd})}),Object(D.jsxs)("div",{className:"finalize-settings center",children:[Object(D.jsxs)("div",{className:" download-resume resume-options",children:[Object(D.jsx)("p",{className:"no-margin",children:"Download Resume As PdF"}),Object(D.jsx)("a",{style:{cursor:"pointer"},onClick:function(){var e=document.getElementById("resumePreview");console.log(document),le()(e).then((function(e){var t=e.toDataURL("image/png"),n=new oe.a("p","mm","a4"),c=n.internal.pageSize.getWidth(),s=n.internal.pageSize.getHeight();n.addImage(t,"JPEG",0,0,c,s),n.save("resume.pdf")})).catch((function(e){console.log(e)}))},children:"download Resume"})]}),Object(D.jsxs)("div",{className:" download-resume resume-options",children:[Object(D.jsx)("p",{className:"no-margin",children:"Save to Database"}),Object(D.jsx)("a",{style:{cursor:"pointer"},onClick:r,children:"Save to Database"})]})]})]})})})),ue=n(239),be=["auth","component"];var pe=Object(A.b)((function(e){return{auth:e.firebase.auth}}))((function(e){var t=e.auth,n=e.component,c=Object(ue.a)(e,be);return Object(D.jsx)(r.b,Object(ae.a)(Object(ae.a)({},c),{},{render:function(e){return Object(o.isLoaded)(t)&&!Object(o.isEmpty)(t)?Object(D.jsx)(n,Object(ae.a)({},e)):Object(D.jsx)(r.a,{to:"/"})}}))}));var Oe=function(){return Object(D.jsxs)("div",{children:[Object(D.jsx)(w,{}),Object(D.jsxs)(r.d,{children:[Object(D.jsx)(pe,{path:"/education",component:ie}),Object(D.jsx)(pe,{path:"/contact",component:Ae}),Object(D.jsx)(pe,{path:"/getting-started",component:_}),Object(D.jsx)(pe,{path:"/resume-templates",component:_}),Object(D.jsx)(r.b,{path:"/about-us",component:ce}),Object(D.jsx)(pe,{path:"/finalize",component:de}),Object(D.jsx)(r.b,{path:"/login",component:ee}),Object(D.jsx)(r.b,{path:"/register",component:te}),Object(D.jsx)(r.b,{path:"/",component:B})]}),Object(D.jsx)(k,{})]})},me=n(68),ge=n(46),ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge.document,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(ae.a)(Object(ae.a)({},e),{},{id:t.payload.id,skinCd:t.payload.skinCd});case b:return Object(ae.a)(Object(ae.a)({},e),{},{skinCd:t.payload.skinCd});default:return e}},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge.contact,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:case O:return Object(ae.a)({},t.payload);default:return e}},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge.education,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:case g:return Object(ae.a)({},t.payload);default:return e}},he=n(55),Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge.auth,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(ae.a)(Object(ae.a)({},e),{},{loading:!0});case N:return Object(ae.a)(Object(ae.a)({},e),{},{loading:!1});case C:return Object(ae.a)(Object(ae.a)({},e),{},{loading:!1,error:t.payload});case v:return Object(ae.a)(Object(ae.a)({},e),{},{loading:!0});case x:return Object(ae.a)(Object(ae.a)({},e),{},{loading:!1});case f:return Object(ae.a)(Object(ae.a)({},e),{},{loading:!1,error:t.payload});case M:return Object(ae.a)(Object(ae.a)({},e),{},{error:""});default:return e}},Ne=Object(me.combineReducers)({document:ve,contact:fe,education:xe,firebase:o.firebaseReducer,firestore:he.firestoreReducer,auth:Ce}),Me=n(237),Qe=n(83),Ie=(n(438),n(435),n(238)),De={apiKey:"AIzaSyCM9W8TC_kpY2JPZaIbPuA8MW887X5FiyM",authDomain:"resume-builder-b0f3d.firebaseapp.com",projectId:"resume-builder-b0f3d",storageBucket:"resume-builder-b0f3d.appspot.com",messagingSenderId:"990854375496",appId:"1:990854375496:web:e005b4b14e0ffb6ba9d07d"};Qe.a.initializeApp(De),Qe.a.firestore();var Se=Object(me.createStore)(Ne,Object(Me.composeWithDevTools)(Object(me.applyMiddleware)(Ie.a.withExtraArgument({getFirebase:o.getFirebase,getFirestore:he.getFirestore})),Object(he.reduxFirestore)(Qe.a)));a.a.render(Object(D.jsx)(A.a,{store:Se,children:Object(D.jsx)(i.a,{children:Object(D.jsx)(o.ReactReduxFirebaseProvider,{firebase:Qe.a,config:De,dispatch:Se.dispatch,createFirestoreInstance:he.createFirestoreInstance,children:Object(D.jsx)(Oe,{})})})}),document.getElementById("root"))},46:function(e){e.exports=JSON.parse('{"document":{"id":null,"skincd":""},"contact":null,"education":null,"auth":{"error":"","loading":false}}')}},[[437,1,2]]]);
//# sourceMappingURL=main.2dcaa492.chunk.js.map