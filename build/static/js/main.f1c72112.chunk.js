(this["webpackJsonparrow-client"]=this["webpackJsonparrow-client"]||[]).push([[0],{117:function(e,t,n){e.exports=n(169)},122:function(e,t,n){},123:function(e,t,n){},169:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(13),o=n.n(r),c=(n(122),n(31)),i=n(24),s=(n(123),n(124),n(172)),u=n(42),m=n.n(u),d=n(73);function h(e){var t=e.username,n=e.password,a=e.submit;return l.a.createElement("div",null,l.a.createElement(s.f,{helperText:t.helperText,label:"Label A",labelFor:"text-input",labelInfo:"(required)"},l.a.createElement(s.j,{id:"username-text-input",placeholder:"Username",value:t.value,onChange:t.onChange})),l.a.createElement(s.f,{helperText:n.helperText,label:"Label A",labelFor:"text-input",labelInfo:"(required)"},l.a.createElement(s.j,{id:"password-text-input",placeholder:"Username",value:n.value,onChange:n.onChange})),l.a.createElement(s.b,{onClick:a,text:"Login",intent:"primary"}))}var p=n(23),E=n.n(p),g=n(14),f=function(e){var t=Object(a.useState)(e),n=Object(g.a)(t,2),l=n[0],r=n[1],o=Object(a.useState)(!1),c=Object(g.a)(o,2),i=c[0],s=c[1],u=Object(a.useState)(""),m=Object(g.a)(u,2),d=m[0],h=m[1];function p(){s(!1),h("")}return{value:l,onChange:function(e){p(),r(e.target.value)},clear:function(){r("")},hasError:i,helperText:d,setError:function(e){s(!0),h(e)},clearError:p}},v="arrow.garethdev.space";function b(){var e=Object(i.f)(),t=f(""),n=f("");function a(){return(a=Object(d.a)(m.a.mark((function a(){var l,r;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return l={username:t.value,password:n.value},a.prev=1,a.next=4,E.a.post(v+"/core/auth/login",l);case 4:r=a.sent,console.log(r),e.push("/dashboard"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),console.log(a.t0.message);case 12:case"end":return a.stop()}}),a,null,[[1,9]])})))).apply(this,arguments)}return l.a.createElement(h,{username:t,password:n,submit:function(){return a.apply(this,arguments)}})}var C=n(34),O=n(32),w=n(1);function x(e){var t=e.goto;return l.a.createElement(s.k,null,l.a.createElement(s.m,{align:O.a.LEFT},l.a.createElement(s.n,null,"Arrow"),l.a.createElement(s.l,null),l.a.createElement(s.b,{onClick:t("/"),className:w.a.MINIMAL,icon:"home",text:"Home"}),l.a.createElement(s.b,{onClick:t("/dashboard"),className:w.a.MINIMAL,icon:"control",text:"Dashboard"}),l.a.createElement(s.b,{onClick:t("/create"),className:w.a.MINIMAL,icon:"add",text:"Create"})),l.a.createElement(s.m,{align:O.a.RIGHT},l.a.createElement(s.b,{onClick:t("/login"),className:w.a.MINIMAL,icon:"log-in",text:"Login"})))}function y(){var e=Object(i.f)();return l.a.createElement(x,{goto:function(t){return function(){e.push(t)}}})}var j=n(29),k=(n(70),n(71),n(72),n(22));function T(e){var t=e.endpoints,n=e.selected,a=e.select,r=e.deleteAlert,o=e.cancelDelete,c=e.confirmDelete,i=e.view,u=e.edit,m=e.remove,d=e.endpointOverlay,h=e.handleViewClose;return l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement("section",null,l.a.createElement(s.a,{canOutsideClickCancel:!0,canEscapeKeyCancel:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete",icon:"trash",intent:k.a.DANGER,isOpen:r.isOpen,onCancel:o,onConfirm:c},l.a.createElement("p",null,"Are you sure you want to delete"," ",l.a.createElement("b",null,r.method," ",r.uri),"? This operation is irreversiable."))),l.a.createElement("div",{style:{padding:"25px"}},l.a.createElement(s.i,{bordered:!0,interactive:!0,style:{width:"100%"}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{style:{width:"75px"}},null),l.a.createElement("th",{style:{width:"100px"}},"METHOD"),l.a.createElement("th",null,"URL"),l.a.createElement("th",null,"Whitelist"),l.a.createElement("th",{style:{width:"300px"}},null))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",{style:{textAlign:"center"}},l.a.createElement(s.c,{checked:n.includes(e._id),onChange:a(e._id)})),l.a.createElement("td",null,e.method),l.a.createElement("td",null,e.uri),l.a.createElement("td",null,e.whitelist.toString()),l.a.createElement("td",null,l.a.createElement(s.b,{onClick:i(e._id),style:{marginRight:"10px"},small:!0,rightIcon:"eye-open",text:"View",intent:"primary",outlined:!0}),l.a.createElement(s.b,{onClick:u(e._id),style:{marginRight:"10px"},small:!0,rightIcon:"edit",text:"Edit",intent:"warning",outlined:!0}),l.a.createElement(s.b,{onClick:m(e._id),small:!0,rightIcon:"trash",text:"Delete",intent:"danger",outlined:!0})))}))))),l.a.createElement("section",null,l.a.createElement(s.o,{onClose:h,className:w.a.OVERLAY_SCROLL_CONTAINER,isOpen:d.isOpen,canEscapeKeyClose:!0,canOutsideClickClose:!0,hasBackdrop:!0,usePortal:!0,useTallContent:!1},l.a.createElement("div",{style:{top:"50%",left:"50%",width:"600px",transform:"translate(-50%, -50%)"},className:w.a.CARD},l.a.createElement(s.g,null,"[",d.method,"] ",d.uri),l.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",overflow:"scroll",width:"500px",height:"300px"},dangerouslySetInnerHTML:{__html:d.displayCode?Object(j.highlight)(d.displayCode,j.languages.js):null}}),l.a.createElement("div",null,d.whitelist&&d.whitelist.length>0&&d.whitelist.map((function(e){return l.a.createElement("div",null,e)}))),l.a.createElement("div",{className:w.a.DIALOG_FOOTER_ACTIONS},l.a.createElement(s.b,{intent:k.a.DANGER,onClick:h,style:{margin:""}},"Close"))))))}var S=n(11),A=s.p.create({className:"recipe-toaster",position:S.a.TOP});function D(){var e=Object(a.useState)([]),t=Object(g.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([""]),c=Object(g.a)(o,2),i=c[0],s=c[1],u=Object(a.useState)({isOpen:!1,uri:"",method:""}),m=Object(g.a)(u,2),d=m[0],h=m[1],p=Object(a.useState)({isOpen:!1}),f=Object(g.a)(p,2),v=f[0],b=f[1];return Object(a.useEffect)((function(){E.a.get("/core/endpoint").then((function(e){console.log(e.data.endpoints),r(e.data.endpoints)})).catch((function(e){console.log(e)}))}),[]),l.a.createElement(T,{endpoints:n,selected:i,select:function(e){return function(){if(i.includes(e)){var t=i.filter((function(t){return t!==e}));s(t)}else s([].concat(Object(C.a)(i),[e]))}},deleteAlert:d,confirmDelete:function(){E.a.delete("".concat("arrow.garethdev.space",'/core/endpoint?toDelete=["').concat(d.id,'"]')).then((function(e){h({isOpen:!1}),A.show({message:"Endpoint successfully deleted.",action:{onClick:function(){return window.location.reload(!1)},text:"Refresh"},intent:k.a.SUCCESS})})).catch((function(e){console.log(e)}))},cancelDelete:function(){h({isOpen:!1,uri:"",method:"",id:""})},view:function(e){return function(){var t=n.filter((function(t){return t._id===e}))[0];console.log(t),b({isOpen:!0,uri:t.uri,method:t.method,whitelist:t.whitelist,displayCode:t.displayCode})}},edit:function(e){return function(){}},remove:function(e){return function(){var t=n.filter((function(t){return t._id===e}))[0];console.log(t),h({isOpen:!0,uri:t.uri,method:t.method,id:e})}},endpointOverlay:v,handleViewClose:function(){b({isOpen:!1})}})}var I=n(78),N=n.n(I);function L(e){var t=e.uri,n=e.handleMethodChange,a=e.method,r=e.code,o=e.onCodeChange,c=e.testCode,i=e.createEndpoint,u=e.whitelist,m=e.authorizedDomains,d=e.addDomain,h=e.removeDomain,p=e.testResults,E=e.showTestResults;return l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement("div",{style:{padding:"30px"}},l.a.createElement(s.g,null,"Create Your New API Endpoint"),l.a.createElement(s.e,{style:{width:"450px",marginBottom:"15px"}},l.a.createElement(s.h,{id:"method-selector",value:a,options:["GET","POST","PUT","PATCH","DELETE"],onChange:n}),l.a.createElement(s.j,{id:"endpoint-uri-text-input",placeholder:"/animals/dogs",value:t.value,onChange:t.onChange})),l.a.createElement("div",{style:{width:"550px",marginBottom:"15px",border:"1px solid lightgrey"}},l.a.createElement(N.a,{value:r,onValueChange:o,highlight:function(e){return Object(j.highlight)(e,j.languages.js)},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}})),l.a.createElement("div",{style:{width:"300px"}},l.a.createElement(s.g,null,"Authorized Domain Origins"),l.a.createElement("p",null,"Only requests made from these domains can access your API."),l.a.createElement("div",{style:{marginBottom:"15px"}},m.length>0&&m.map((function(e){return l.a.createElement("div",null,l.a.createElement(s.b,{icon:"remove",minimal:!0,onClick:h(e),intent:"danger",small:!0}),e)}))),l.a.createElement("div",{style:{marginBottom:"15px"}},l.a.createElement(s.e,null,l.a.createElement(s.j,{placeholder:"realurl.com",onChange:u.onChange,value:u.value}),l.a.createElement(s.b,{onClick:d,rightIcon:"add",intent:"primary",text:"Add Domain"})))),l.a.createElement("div",{style:{marginBottom:"15px"}},l.a.createElement(s.b,{onClick:c,icon:"lab-test",intent:"warning",text:"Check Validity"})),l.a.createElement("p",null,"Results:"),l.a.createElement("div",{style:{width:"550px",marginBottom:"15px",border:"1px solid lightgrey"}},l.a.createElement(s.d,{isOpen:E},l.a.createElement("pre",null,p.map((function(e){return l.a.createElement("div",null,l.a.createElement("code",null,"[",e.time,"] ",e.message))}))))),l.a.createElement(s.b,{onClick:i,icon:"globe-network",intent:"primary",text:"Create Endpoint"})))}function R(){var e=Object(i.f)(),t=f(""),n=Object(a.useState)("module.exports = (req, res) => {\n    /* Your code here */\n\n    /* Make sure to return a response object */\n    return res.status(200).send();\n}\n"),r=Object(g.a)(n,2),o=r[0],c=r[1],s=Object(a.useState)("GET"),u=Object(g.a)(s,2),m=u[0],d=u[1],h=f(""),p=Object(a.useState)([]),v=Object(g.a)(p,2),b=v[0],O=v[1],w=Object(a.useState)([]),x=Object(g.a)(w,2),y=x[0],j=x[1],T=Object(a.useState)(!0),S=Object(g.a)(T,2),D=S[0],I=S[1];return l.a.createElement(L,{uri:t,handleMethodChange:function(e){d(e.currentTarget.value)},method:m,code:o,onCodeChange:function(e){c(e)},testCode:function(){var e={uri:t.value.substring(1),method:m,content:o,whitelist:b,body:{},query:{}};console.log(e),E.a.post("arrow.garethdev.space/core/endpoint/validate",e).then((function(e){var t=new Date;j([].concat(Object(C.a)(y),[{message:e.data.message,time:t.toLocaleTimeString()}])),I(!0)})).catch((function(e){console.log(e)}))},createEndpoint:function(){var n={uri:t.value.substring(1),method:m,content:o,whitelist:b,body:{},query:{}};console.log(n),E.a.post("arrow.garethdev.space/core/endpoint",n).then((function(t){console.log(t),A.show({message:"Endpoint created. ",action:{onClick:function(){return e.push("/dashboard")},text:"Go to Dashboard"},intent:k.a.SUCCESS})})).catch((function(e){console.log(e)}))},whitelist:h,authorizedDomains:b,addDomain:function(){O([].concat(Object(C.a)(b),[h.value])),h.clear()},removeDomain:function(e){return function(){O(b.filter((function(t){return t!==e})))}},testResults:y,showTestResults:D})}function M(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Welcome to Arrow"),l.a.createElement(s.b,{intent:"primary",text:"Nice"}))}var _=function(){return l.a.createElement(c.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:M}),l.a.createElement(i.a,{path:"/login",component:b}),l.a.createElement(i.a,{path:"/dashboard",component:D}),l.a.createElement(i.a,{path:"/create",component:R})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.f1c72112.chunk.js.map