var tt=Object.defineProperty;var we=Object.getOwnPropertySymbols;var lt=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable;var ye=(o,e,n)=>e in o?tt(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,_e=(o,e)=>{for(var n in e||(e={}))lt.call(e,n)&&ye(o,n,e[n]);if(we)for(var n of we(e))nt.call(e,n)&&ye(o,n,e[n]);return o};import{d as st,s as We,w as W,$ as it,g as ot,m as rt,D as at,S as Y,i as Z,a as x,b as ae,e as b,t as T,c as Q,f as _,h as $,j as p,l as M,k as O,n as w,o as L,p as I,q as X,r as B,u as V,v as se,x as U,Y as Je,y as Ke,z as Qe,A as $e,B as z,C as H,E as Xe,F as E,G as S,H as F,I as le,J as ne,K as oe,L as Ye,M as Ze,N as ct,O as Ce,P as J,Q as re,R as ft,T as Le,U as ue,V as ut,W as dt,X as xe,Z as pt,_ as _t,a0 as mt,a1 as gt}from"./vendor.07edf22e.js";const vt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))t(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerpolicy&&(s.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?s.credentials="include":l.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}};vt();const bt="locales/{locale}.json";let ge;const ve=W(!1);async function et(o){const{withLocale:e}=o;it({initialLocale:e,fallbackLocale:"en"});const n=bt.replace("{locale}",e);if(!$t(e)){ve.set(!0);const t=await kt(n);ge=e,rt(e,t),at.set(e),ve.set(!1)}}const ht=st([ve,We],([o,e])=>!o&&e[ge]&&Object.keys(e[ge]).length>0);async function kt(o){return await(await fetch(o)).json()}function $t(o){return ot(We)[o]}const wt="modulepreload",Ae={},yt="",ce=function(e,n){return!n||n.length===0?e():Promise.all(n.map(t=>{if(t=`${yt}${t}`,t in Ae)return;Ae[t]=!0;const l=t.endsWith(".css"),s=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${s}`))return;const i=document.createElement("link");if(i.rel=l?"stylesheet":wt,l||(i.as="script",i.crossOrigin=""),i.href=t,document.head.appendChild(i),l)return new Promise((r,a)=>{i.addEventListener("load",r),i.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>e())};class Ct extends Y{constructor(e){super();Z(this,e,null,null,x,{})}}var Lt={"/":Ct,"/reportTool/:title?/:name?/:lastname?/:citizenid?/:isvehicle?/:plate?/:observations?":ae({asyncComponent:()=>ce(()=>import("./Report.0906ae40.js"),["assets/Report.0906ae40.js","assets/Report.0655655d.css","assets/vendor.07edf22e.js","assets/short-unique-id.e6af5710.js","assets/About.d9703682.js","assets/ObservationsModal.f914144f.js"])}),"/about":ae({asyncComponent:()=>ce(()=>import("./About.d9703682.js"),["assets/About.d9703682.js","assets/vendor.07edf22e.js"])}),"/Search":ae({asyncComponent:()=>ce(()=>import("./Search.f456b531.js"),["assets/Search.f456b531.js","assets/Search.efee19e9.css","assets/vendor.07edf22e.js","assets/short-unique-id.e6af5710.js","assets/ObservationsModal.f914144f.js"])}),"/My/:reload":ae({asyncComponent:()=>ce(()=>import("./MyTool.7e932107.js"),["assets/MyTool.7e932107.js","assets/MyTool.926b8aa4.css","assets/vendor.07edf22e.js","assets/short-unique-id.e6af5710.js"])})};function Ee(o,e,n){const t=o.slice();return t[6]=e[n],t}function Ne(o){let e,n,t,l,s=o[0](`page.home.app.${o[6].name}`)+"",i,r,a;function c(){return o[4](o[6])}return{c(){e=b("li"),n=b("a"),t=b("img"),i=T(s),Q(t.src,l=o[6].icon)||_(t,"src",l),_(t,"alt",""),_(t,"class","svelte-xz4d4f"),_(n,"class","svelte-xz4d4f")},m(f,u){$(f,e,u),p(e,n),p(n,t),p(n,i),r||(a=M(e,"click",c),r=!0)},p(f,u){o=f,u&1&&s!==(s=o[0](`page.home.app.${o[6].name}`)+"")&&O(i,s)},d(f){f&&w(e),r=!1,a()}}}function At(o){let e,n,t,l,s,i,r,a=o[1],c=[];for(let f=0;f<a.length;f+=1)c[f]=Ne(Ee(o,a,f));return{c(){e=b("div"),n=b("div"),t=b("ul");for(let f=0;f<c.length;f+=1)c[f].c();l=L(),s=b("ul"),_(t,"id","programs"),_(t,"class","svelte-xz4d4f"),_(s,"id","links"),_(s,"class"," svelte-xz4d4f"),_(n,"id","startmenu"),_(n,"class","svelte-xz4d4f"),_(e,"class","absolute-bottom-left"),I(e,"bottom","90%")},m(f,u){$(f,e,u),p(e,n),p(n,t);for(let v=0;v<c.length;v+=1)c[v].m(t,null);p(n,l),p(n,s),r=!0},p(f,[u]){if(u&7){a=f[1];let v;for(v=0;v<a.length;v+=1){const m=Ee(f,a,v);c[v]?c[v].p(m,u):(c[v]=Ne(m),c[v].c(),c[v].m(t,null))}for(;v<c.length;v+=1)c[v].d(1);c.length=a.length}},i(f){r||(X(()=>{i||(i=B(e,V,{duration:100},!0)),i.run(1)}),r=!0)},o(f){i||(i=B(e,V,{duration:100},!1)),i.run(0),r=!1},d(f){f&&w(e),se(c,f),f&&i&&i.end()}}}function Et(o,e,n){let t;U(o,Je,c=>n(0,t=c));const l=Ke();let{open:s=!1}=e;const i=[{name:"report",icon:"iconos/agreement.png",path:"/reportTool"},{name:"user",icon:"iconos/search.png",path:"/Search"},{name:"mytool",icon:"iconos/user.png",path:`/My/${!0}`}];async function r(c){l("closeStart",{}),n(3,s=!1),await Qe(`${c}`)}const a=c=>r(c.path);return o.$$set=c=>{"open"in c&&n(3,s=c.open)},[t,i,r,s,a]}class Nt extends Y{constructor(e){super();Z(this,e,Et,At,x,{open:3})}}const ul=W([]),dl=W([]),pl=W([]),be=W(!1),de=W([]),ee=W([]),me=W([]),pe=W(""),he=W([]),ke=W(!1),K=W([]);function Ie(o,e,n){const t=o.slice();return t[10]=e[n],t}function Te(o){let e,n,t,l,s=o[3],i=[];for(let r=0;r<s.length;r+=1)i[r]=qe(Ie(o,s,r));return{c(){e=b("div"),n=b("div");for(let r=0;r<i.length;r+=1)i[r].c();_(n,"class","window-body"),_(e,"class","window absolute-bottom-right"),I(e,"bottom","7%"),I(e,"height","auto")},m(r,a){$(r,e,a),p(e,n);for(let c=0;c<i.length;c+=1)i[c].m(n,null);l=!0},p(r,a){if(a&40){s=r[3];let c;for(c=0;c<s.length;c+=1){const f=Ie(r,s,c);i[c]?i[c].p(f,a):(i[c]=qe(f),i[c].c(),i[c].m(n,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=s.length}},i(r){l||(X(()=>{t||(t=B(e,V,{duration:100},!0)),t.run(1)}),l=!0)},o(r){t||(t=B(e,V,{duration:100},!1)),t.run(0),l=!1},d(r){r&&w(e),se(i,r),r&&t&&t.end()}}}function qe(o){let e,n,t=o[10].lang+"",l,s,i,r;function a(){return o[7](o[10])}return{c(){e=b("div"),n=b("button"),l=T(t),s=L(),_(e,"class","field-row")},m(c,f){$(c,e,f),p(e,n),p(n,l),p(e,s),i||(r=M(n,"click",$e(a)),i=!0)},p(c,f){o=c,f&8&&t!==(t=o[10].lang+"")&&O(l,t)},d(c){c&&w(e),i=!1,r()}}}function Se(o){let e,n;return e=new Nt({}),e.$on("closeStart",o[4]),{c(){z(e.$$.fragment)},m(t,l){H(e,t,l),n=!0},p:Xe,i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function It(o){let e,n,t,l,s,i,r,a,c,f,u,v,m,k=o[2]&&Te(o),g=o[1]&&Se(o);return{c(){e=b("div"),n=b("img"),l=L(),k&&k.c(),s=L(),i=b("div"),g&&g.c(),r=L(),a=b("div"),c=b("img"),Q(n.src,t="iconos/agreement.png")||_(n,"src",t),_(n,"class","q-mr-lg q-mb-sm"),_(n,"alt",""),I(n,"width","18px"),_(e,"class","absolute-bottom-right"),I(e,"z-index","1"),_(c,"id","start"),Q(c.src,f="iconos/start-button.png")||_(c,"src",f),_(c,"alt","asd"),_(c,"class","svelte-1f7q0fk"),_(a,"id","bottom"),_(a,"class","svelte-1f7q0fk"),_(i,"class","bar absolute-bottom no-padding no-margin")},m(d,y){$(d,e,y),p(e,n),$(d,l,y),k&&k.m(d,y),$(d,s,y),$(d,i,y),g&&g.m(i,null),p(i,r),p(i,a),p(a,c),o[9](i),u=!0,v||(m=[M(n,"click",o[6]),M(c,"click",o[8])],v=!0)},p(d,[y]){d[2]?k?(k.p(d,y),y&4&&E(k,1)):(k=Te(d),k.c(),E(k,1),k.m(s.parentNode,s)):k&&(le(),S(k,1,1,()=>{k=null}),ne()),d[1]?g?(g.p(d,y),y&2&&E(g,1)):(g=Se(d),g.c(),E(g,1),g.m(i,r)):g&&(le(),S(g,1,1,()=>{g=null}),ne())},i(d){u||(E(k),E(g),u=!0)},o(d){S(k),S(g),u=!1},d(d){d&&w(e),d&&w(l),k&&k.d(d),d&&w(s),d&&w(i),g&&g.d(),o[9](null),v=!1,oe(m)}}}function Tt(o,e,n){let t,l;U(o,he,m=>n(3,l=m));let s,i=!1;function r(m){n(1,i=!1)}function a(m){et({withLocale:m}),n(2,t=!1)}const c=()=>n(2,t=!t),f=m=>a(m.index),u=()=>n(1,i=!i);function v(m){Ye[m?"unshift":"push"](()=>{s=m,n(0,s)})}return n(2,t=!1),[s,i,t,l,r,a,c,f,u,v]}class qt extends Y{constructor(e){super();Z(this,e,Tt,It,x,{})}}function fe(o,e){const n=t=>{const{action:l,data:s}=t.data;l===o&&e(s)};Ze(()=>window.addEventListener("message",n)),ct(()=>window.removeEventListener("message",n))}async function te(o,e={}){const n={method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(e)},t=window.GetParentResourceName?window.GetParentResourceName():"nui-frame-app";return await(await fetch(`https://${t}/${o}`,n)).json()}const Re=()=>!window.invokeNative;function _l(){const o=document.querySelectorAll("[role=tab]");o.forEach(e=>{e.addEventListener("click",n=>{n.preventDefault();const t=n.target.parentElement.parentElement,l=n.target.getAttribute("aria-controls");o.forEach(s=>s.setAttribute("aria-selected","false")),e.setAttribute("aria-selected","true"),t.querySelectorAll("[role=tabpanel]").forEach(s=>{s.setAttribute("style","display:none;")}),t.querySelector(`[role=tabpanel]#${l}`).removeAttribute("style","display:none;")})})}function St(o){let e,n,t,l,s,i,r,a,c,f,u=o[1].name+"",v,m,k,g,d,y,C,R,h,q,P,N,A,G,D;return{c(){e=b("div"),n=b("div"),t=L(),l=b("div"),s=b("div"),s.innerHTML=`<div class="title-bar-text">Add Callsign</div> 
			<div class="title-bar-controls"><button aria-label="Close"></button></div>`,i=L(),r=b("div"),a=b("p"),c=T("Welcome "),f=b("span"),v=T(u),m=L(),k=b("p"),k.textContent="To continue please ingress your Callsign",g=L(),d=b("div"),y=b("input"),C=L(),R=b("section"),h=b("button"),q=T("Aceptar"),_(n,"class","my-back fit svelte-y0aqg3"),_(s,"class","title-bar"),_(f,"class","text-center text-subtitle1 text-uppercase text-dark text-light"),_(a,"class","text-center"),_(k,"class","text-center text-bold"),_(y,"type","text"),_(y,"class","input text-center full-width"),_(y,"name",""),_(y,"id",""),_(d,"class","field-row"),h.disabled=P=o[0].length<3,_(R,"class","field-row"),I(R,"display","flex"),I(R,"align-items","center"),I(R,"flex-direction","row"),I(R,"flex-wrap","nowrap"),I(R,"justify-content","space-around"),_(r,"class","window-body"),_(l,"class","window absolute-center"),I(l,"max-width","17vw"),I(l,"max-height","20vh"),_(e,"class","modal-overlay svelte-y0aqg3")},m(j,ie){$(j,e,ie),p(e,n),p(e,t),p(e,l),p(l,s),p(l,i),p(l,r),p(r,a),p(a,c),p(a,f),p(f,v),p(r,m),p(r,k),p(r,g),p(r,d),p(d,y),Ce(y,o[0]),p(r,C),p(r,R),p(R,h),p(h,q),A=!0,G||(D=[M(y,"input",o[3]),M(h,"click",$e(o[2]))],G=!0)},p(j,[ie]){(!A||ie&2)&&u!==(u=j[1].name+"")&&O(v,u),ie&1&&y.value!==j[0]&&Ce(y,j[0]),(!A||ie&1&&P!==(P=j[0].length<3))&&(h.disabled=P)},i(j){A||(X(()=>{N||(N=B(e,V,{duration:100},!0)),N.run(1)}),A=!0)},o(j){N||(N=B(e,V,{duration:100},!1)),N.run(0),A=!1},d(j){j&&w(e),j&&N&&N.end(),G=!1,oe(D)}}}function Rt(o,e,n){let t,l,s;U(o,pe,a=>n(4,l=a)),U(o,ee,a=>n(1,s=a));async function i(){t.length>3&&await te("modifyCallsign",{call:t}).then(a=>{a&&(J(ee,s.callsign=t,s),ee.set(s),J(pe,l=t,l))})}function r(){t=this.value,n(0,t)}return n(0,t=""),[t,s,i,r]}class Dt extends Y{constructor(e){super();Z(this,e,Rt,St,x,{})}}function De(o,e,n){const t=o.slice();return t[4]=e[n],t}function Pe(o){let e,n,t,l,s,i,r=o[1][0].id+"",a,c,f,u,v,m,k,g,d,y,C,R,h,q,P=o[1],N=[];for(let A=0;A<P.length;A+=1)N[A]=Ue(De(o,P,A));return{c(){e=b("div"),n=b("div"),t=L(),l=b("div"),s=b("div"),i=b("div"),a=T(r),c=L(),f=b("div"),u=b("button"),v=L(),m=b("div"),k=b("fieldset");for(let A=0;A<N.length;A+=1)N[A].c();g=L(),d=b("section"),y=b("button"),y.textContent="Close",_(n,"class","my-back fit svelte-147cxbn"),_(i,"class","title-bar-text"),_(u,"aria-label","Close"),_(f,"class","title-bar-controls"),_(s,"class","title-bar"),_(d,"class","field-row"),I(d,"display","flex"),I(d,"align-items","center"),I(d,"flex-direction","row"),I(d,"flex-wrap","nowrap"),I(d,"justify-content","space-around"),_(m,"class","window-body"),_(l,"class","modals window absolute-center svelte-147cxbn"),_(e,"class","modal-overlay svelte-147cxbn")},m(A,G){$(A,e,G),p(e,n),p(e,t),p(e,l),p(l,s),p(s,i),p(i,a),p(s,c),p(s,f),p(f,u),p(l,v),p(l,m),p(m,k);for(let D=0;D<N.length;D+=1)N[D].m(k,null);p(m,g),p(m,d),p(d,y),R=!0,h||(q=[M(u,"click",$e(o[2])),M(y,"click",o[2])],h=!0)},p(A,G){if((!R||G&2)&&r!==(r=A[1][0].id+"")&&O(a,r),G&2){P=A[1];let D;for(D=0;D<P.length;D+=1){const j=De(A,P,D);N[D]?N[D].p(j,G):(N[D]=Ue(j),N[D].c(),N[D].m(k,null))}for(;D<N.length;D+=1)N[D].d(1);N.length=P.length}},i(A){R||(X(()=>{C||(C=B(e,V,{duration:100},!0)),C.run(1)}),R=!0)},o(A){C||(C=B(e,V,{duration:100},!1)),C.run(0),R=!1},d(A){A&&w(e),se(N,A),A&&C&&C.end(),h=!1,oe(q)}}}function Ue(o){let e,n,t=o[4].callsign===""||o[4].callsign===void 0?"Not Taked":`Taked By: ${o[4].callsign}`,l,s,i,r,a,c=o[4].location+"",f,u,v,m,k,g,d,y=o[4].observations+"",C,R;return{c(){e=b("div"),n=b("p"),l=T(t),s=L(),i=b("div"),r=b("p"),a=T("Street: "),f=T(c),u=L(),v=b("fieldset"),m=b("legend"),m.textContent="observations",k=L(),g=b("div"),d=b("p"),C=T(y),R=L(),_(n,"class","text-bold text-subtitle1"),_(e,"class","field-row"),_(e,"style",""),_(r,"class","text-bold text-subtitle1"),_(i,"class","field-row"),_(i,"style",""),_(d,"class","text-bold text-h6"),_(g,"class","field-row")},m(h,q){$(h,e,q),p(e,n),p(n,l),$(h,s,q),$(h,i,q),p(i,r),p(r,a),p(r,f),$(h,u,q),$(h,v,q),p(v,m),p(v,k),p(v,g),p(g,d),p(d,C),p(v,R)},p(h,q){q&2&&t!==(t=h[4].callsign===""||h[4].callsign===void 0?"Not Taked":`Taked By: ${h[4].callsign}`)&&O(l,t),q&2&&c!==(c=h[4].location+"")&&O(f,c),q&2&&y!==(y=h[4].observations+"")&&O(C,y)},d(h){h&&w(e),h&&w(s),h&&w(i),h&&w(u),h&&w(v)}}}function Pt(o){let e,n,t=o[0]&&Pe(o);return{c(){t&&t.c(),e=re()},m(l,s){t&&t.m(l,s),$(l,e,s),n=!0},p(l,[s]){l[0]?t?(t.p(l,s),s&1&&E(t,1)):(t=Pe(l),t.c(),E(t,1),t.m(e.parentNode,e)):t&&(le(),S(t,1,1,()=>{t=null}),ne())},i(l){n||(E(t),n=!0)},o(l){S(t),n=!1},d(l){t&&t.d(l),l&&w(e)}}}function Ut(o,e,n){const t=Ke();let{open:l=!1}=e,{data:s=[]}=e;const i=()=>{n(0,l=!1),t("Close",{open:l})};return o.$$set=r=>{"open"in r&&n(0,l=r.open),"data"in r&&n(1,s=r.data)},[l,s,i]}class Ot extends Y{constructor(e){super();Z(this,e,Ut,Pt,x,{open:0,data:1})}}function Oe(o,e,n){const t=o.slice();return t[17]=e[n],t}function Mt(o){let e=o[17].type.toUpperCase()+"",n,t,l=o[17].id+"",s;return{c(){n=T(e),t=L(),s=T(l)},m(i,r){$(i,n,r),$(i,t,r),$(i,s,r)},p(i,r){r&2&&e!==(e=i[17].type.toUpperCase()+"")&&O(n,e),r&2&&l!==(l=i[17].id+"")&&O(s,l)},d(i){i&&w(n),i&&w(t),i&&w(s)}}}function Bt(o){let e,n=(o[17].taked===1?o[17].callsign:"Not Taked")+"",t;return{c(){e=b("span"),t=T(n),_(e,"slot","description")},m(l,s){$(l,e,s),p(e,t)},p(l,s){s&2&&n!==(n=(l[17].taked===1?l[17].callsign:"Not Taked")+"")&&O(t,n)},d(l){l&&w(e)}}}function jt(o){let e=o[17].observations+"",n,t,l,s,i=o[17].name+"",r,a,c,f=o[17].citizenid+"",u,v,m,k=o[17].location+"",g;return{c(){n=T(e),t=L(),l=b("ul"),s=b("li"),r=T(i),a=L(),c=b("li"),u=T(f),v=L(),m=b("li"),g=T(k),_(s,"class","q-mt-sm"),_(c,"class","q-mt-sm"),_(m,"class","q-mt-sm")},m(d,y){$(d,n,y),$(d,t,y),$(d,l,y),p(l,s),p(s,r),p(l,a),p(l,c),p(c,u),p(l,v),p(l,m),p(m,g)},p(d,y){y&2&&e!==(e=d[17].observations+"")&&O(n,e),y&2&&i!==(i=d[17].name+"")&&O(r,i),y&2&&f!==(f=d[17].citizenid+"")&&O(u,f),y&2&&k!==(k=d[17].location+"")&&O(g,k)},d(d){d&&w(n),d&&w(t),d&&w(l)}}}function zt(o){let e,n,t,l;return e=new dt({props:{$$slots:{description:[Bt],default:[Mt]},$$scope:{ctx:o}}}),t=new xe({props:{$$slots:{default:[jt]},$$scope:{ctx:o}}}),{c(){z(e.$$.fragment),n=L(),z(t.$$.fragment)},m(s,i){H(e,s,i),$(s,n,i),H(t,s,i),l=!0},p(s,i){const r={};i&1048578&&(r.$$scope={dirty:i,ctx:s}),e.$set(r);const a={};i&1048578&&(a.$$scope={dirty:i,ctx:s}),t.$set(a)},i(s){l||(E(e.$$.fragment,s),E(t.$$.fragment,s),l=!0)},o(s){S(e.$$.fragment,s),S(t.$$.fragment,s),l=!1},d(s){F(e,s),s&&w(n),F(t,s)}}}function Ht(o){let e,n,t,l,s;function i(){return o[12](o[17])}function r(){return o[13](o[17])}return{c(){e=b("button"),e.textContent="Unassign",n=L(),t=b("button"),t.textContent="Delete"},m(a,c){$(a,e,c),$(a,n,c),$(a,t,c),l||(s=[M(e,"click",i),M(t,"click",r)],l=!0)},p(a,c){o=a},d(a){a&&w(e),a&&w(n),a&&w(t),l=!1,oe(s)}}}function Ft(o){let e,n,t,l,s;function i(){return o[10](o[17])}function r(){return o[11](o[17])}return{c(){e=b("button"),e.textContent="Delete",n=L(),t=b("button"),t.textContent="Unassign"},m(a,c){$(a,e,c),$(a,n,c),$(a,t,c),l||(s=[M(e,"click",i),M(t,"click",r)],l=!0)},p(a,c){o=a},d(a){a&&w(e),a&&w(n),a&&w(t),l=!1,oe(s)}}}function Gt(o){let e,n,t;function l(){return o[9](o[17])}return{c(){e=b("button"),e.textContent="Assign"},m(s,i){$(s,e,i),n||(t=M(e,"click",l),n=!0)},p(s,i){o=s},d(s){s&&w(e),n=!1,t()}}}function Me(o){let e,n,t,l,s,i,r,a,c,f,u;n=new ut({props:{color:o[17].taked===0?"primary":"secondary",$$slots:{default:[zt]},$$scope:{ctx:o}}});function v(d,y){if(!d[17].taked)return Gt;if(d[17].taked&&d[4])return Ft;if(d[17].callsign===d[2].callsign)return Ht}let m=v(o),k=m&&m(o);function g(){return o[14](o[17])}return{c(){e=b("div"),z(n.$$.fragment),t=L(),l=b("div"),k&&k.c(),s=L(),i=b("button"),i.textContent="Information",r=L(),_(l,"class","field-row q-mt-sm"),I(l,"align-items","center"),I(l,"justify-content","space-around"),_(e,"class","accordion-container q-mt-sm ")},m(d,y){$(d,e,y),H(n,e,null),p(e,t),p(e,l),k&&k.m(l,null),p(l,s),p(l,i),p(e,r),c=!0,f||(u=M(i,"click",g),f=!0)},p(d,y){o=d;const C={};y&2&&(C.color=o[17].taked===0?"primary":"secondary"),y&1048578&&(C.$$scope={dirty:y,ctx:o}),n.$set(C),m===(m=v(o))&&k?k.p(o,y):(k&&k.d(1),k=m&&m(o),k&&(k.c(),k.m(l,s)))},i(d){c||(E(n.$$.fragment,d),X(()=>{a||(a=B(e,ue,{},!0)),a.run(1)}),c=!0)},o(d){S(n.$$.fragment,d),a||(a=B(e,ue,{},!1)),a.run(0),c=!1},d(d){d&&w(e),F(n),k&&k.d(),d&&a&&a.end(),f=!1,u()}}}function Vt(o){let e,n,t=o[1],l=[];for(let i=0;i<t.length;i+=1)l[i]=Me(Oe(o,t,i));const s=i=>S(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=re()},m(i,r){for(let a=0;a<l.length;a+=1)l[a].m(i,r);$(i,e,r),n=!0},p(i,r){if(r&502){t=i[1];let a;for(a=0;a<t.length;a+=1){const c=Oe(i,t,a);l[a]?(l[a].p(c,r),E(l[a],1)):(l[a]=Me(c),l[a].c(),E(l[a],1),l[a].m(e.parentNode,e))}for(le(),a=t.length;a<l.length;a+=1)s(a);ne()}},i(i){if(!n){for(let r=0;r<t.length;r+=1)E(l[r]);n=!0}},o(i){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)S(l[r]);n=!1},d(i){se(l,i),i&&w(e)}}}function Wt(o){let e,n,t,l,s,i;return s=new ft({props:{$$slots:{default:[Vt]},$$scope:{ctx:o}}}),{c(){e=b("main"),n=b("div"),t=b("div"),l=b("div"),z(s.$$.fragment),_(l,"class","window-body hide-scrollbar scroll"),I(l,"height","70vh"),_(t,"class","window absolute-right "),I(t,"width","320px"),I(t,"max-height","71vh"),Le(t,"light-dimmed",o[3]===!1),_(n,"class","calls full-height"),I(n,"z-index","801")},m(r,a){$(r,e,a),p(e,n),p(n,t),p(t,l),H(s,l,null),o[15](n),i=!0},p(r,[a]){const c={};a&1048598&&(c.$$scope={dirty:a,ctx:r}),s.$set(c),a&8&&Le(t,"light-dimmed",r[3]===!1)},i(r){i||(E(s.$$.fragment,r),i=!0)},o(r){S(s.$$.fragment,r),i=!1},d(r){r&&w(e),F(s),o[15](null)}}}function Jt(o,e,n){let t,l,s,i,r;U(o,me,h=>n(16,t=h)),U(o,de,h=>n(1,l=h)),U(o,ee,h=>n(2,s=h)),U(o,ke,h=>n(3,i=h)),U(o,be,h=>n(4,r=h));let a;async function c(h){h.taked=!0;try{await te("updateReport",{caseinfo:_e({},h),userData:_e({},s)}).then(q=>{})}catch(q){console.log(`27 ${q}`)}}async function f({id:h,callsign:q}){try{await te("deleteAssignment",{id:h,callsign:q}).then(async P=>{P&&(t.splice(t.findIndex(N=>N.id===h),1),me.set(t))})}catch(P){console.log(`SideTab 44 ${P}`)}}function u({observations:h,coords:q,location:P,id:N,callsign:A}){let G=!0,D=new Ot({target:a,props:{open:G,data:[{coords:q,location:P,id:N,callsign:A,observations:h}]}});return D.$on("Close",()=>G=!1),D}async function v({id:h,isvehicle:q,plate:P}){try{await te("deleteReport",{id:h,isvehicle:q,plate:P}).then(N=>{N&&(l.some(A=>A.id===h)&&(l.splice(l.findIndex(A=>A.id===h),1),de.set(l)),t.some(A=>A.id===h)&&(t.splice(t.findIndex(A=>A.id===h),1),me.set(t)))})}catch(N){console.log(`SearchReports 85 ${N}`)}}const m=h=>c(h),k=h=>v(h),g=h=>f(h),d=h=>f(h),y=h=>v(h),C=h=>u(h);function R(h){Ye[h?"unshift":"push"](()=>{a=h,n(0,a)})}return[a,l,s,i,r,c,f,u,v,m,k,g,d,y,C,R]}class Kt extends Y{constructor(e){super();Z(this,e,Jt,Wt,x,{})}}function Be(o,e,n){const t=o.slice();t[6]=e[n];const l=t[6].callsing===t[1].callsign;return t[7]=l,t}function Qt(o){let e,n=o[6].callsign+"",t,l;return{c(){e=T("Unit "),t=T(n),l=T(" Need Help`")},m(s,i){$(s,e,i),$(s,t,i),$(s,l,i)},p(s,i){i&1&&n!==(n=s[6].callsign+"")&&O(t,n)},d(s){s&&w(e),s&&w(t),s&&w(l)}}}function Xt(o){let e,n=o[6].takedby.toUpperCase()+"",t,l;return{c(){e=T("Unit "),t=T(n),l=T(" has taked the call")},m(s,i){$(s,e,i),$(s,t,i),$(s,l,i)},p(s,i){i&1&&n!==(n=s[6].takedby.toUpperCase()+"")&&O(t,n)},d(s){s&&w(e),s&&w(t),s&&w(l)}}}function Yt(o){let e;function n(s,i){return s[6].taked?Xt:Qt}let t=n(o),l=t(o);return{c(){l.c(),e=re()},m(s,i){l.m(s,i),$(s,e,i)},p(s,i){t===(t=n(s))&&l?l.p(s,i):(l.d(1),l=t(s),l&&(l.c(),l.m(e.parentNode,e)))},d(s){l.d(s),s&&w(e)}}}function Zt(o){let e,n,t=o[6].code+"",l,s,i,r,a=o[6].text+"",c,f,u,v,m=o[6].street+"",k;return{c(){e=b("p"),n=T("Code: "),l=T(t),s=L(),i=b("p"),r=T("Detail: "),c=T(a),f=L(),u=b("p"),v=T("Street: "),k=T(m),_(e,"class","text-bold"),_(i,"class","text-light"),_(u,"class","text-light")},m(g,d){$(g,e,d),p(e,n),p(e,l),$(g,s,d),$(g,i,d),p(i,r),p(i,c),$(g,f,d),$(g,u,d),p(u,v),p(u,k)},p(g,d){d&1&&t!==(t=g[6].code+"")&&O(l,t),d&1&&a!==(a=g[6].text+"")&&O(c,a),d&1&&m!==(m=g[6].street+"")&&O(k,m)},d(g){g&&w(e),g&&w(s),g&&w(i),g&&w(f),g&&w(u)}}}function xt(o){let e,n,t,l;return e=new mt({props:{class:"text-white",$$slots:{default:[Yt]},$$scope:{ctx:o}}}),t=new xe({props:{class:"text-white",$$slots:{default:[Zt]},$$scope:{ctx:o}}}),{c(){z(e.$$.fragment),n=L(),z(t.$$.fragment)},m(s,i){H(e,s,i),$(s,n,i),H(t,s,i),l=!0},p(s,i){const r={};i&1025&&(r.$$scope={dirty:i,ctx:s}),e.$set(r);const a={};i&1025&&(a.$$scope={dirty:i,ctx:s}),t.$set(a)},i(s){l||(E(e.$$.fragment,s),E(t.$$.fragment,s),l=!0)},o(s){S(e.$$.fragment,s),S(t.$$.fragment,s),l=!1},d(s){F(e,s),s&&w(n),F(t,s)}}}function je(o){let e,n,t,l,s;function i(){return o[4](o[6])}return{c(){e=b("div"),n=b("img"),_(n,"class","btn q-px-sm svelte-tvol9g"),Q(n.src,t="iconos/take.svg")||_(n,"src",t),_(n,"alt",""),_(e,"class","field-row")},m(r,a){$(r,e,a),p(e,n),l||(s=M(n,"click",i),l=!0)},p(r,a){o=r},d(r){r&&w(e),l=!1,s()}}}function ze(o){let e,n,t,l,s;function i(){return o[5](o[6])}return{c(){e=b("div"),n=b("img"),_(n,"class","btn q-px-sm svelte-tvol9g"),Q(n.src,t="iconos/delete.svg")||_(n,"src",t),_(n,"alt",""),_(e,"class","field-row")},m(r,a){$(r,e,a),p(e,n),l||(s=M(n,"click",i),l=!0)},p(r,a){o=r},d(r){r&&w(e),l=!1,s()}}}function He(o){let e,n,t,l,s,i,r,a;n=new _t({props:{color:o[6].taked===!0?"seconday":"primary",variant:"outlined",square:!0,$$slots:{default:[xt]},$$scope:{ctx:o}}});let c=!o[6].take&&je(o),f=o[6].callsign===o[1].callsign&&ze(o);return{c(){e=b("div"),z(n.$$.fragment),t=L(),l=b("div"),c&&c.c(),s=L(),f&&f.c(),i=L(),_(l,"class","field-row q-px-sm"),I(l,"justify-content","space-around"),_(e,"class","accordion-container relative-position q-mt-sm ")},m(u,v){$(u,e,v),H(n,e,null),p(e,t),p(e,l),c&&c.m(l,null),p(l,s),f&&f.m(l,null),p(e,i),a=!0},p(u,v){const m={};v&1&&(m.color=u[6].taked===!0?"seconday":"primary"),v&1025&&(m.$$scope={dirty:v,ctx:u}),n.$set(m),u[6].take?c&&(c.d(1),c=null):c?c.p(u,v):(c=je(u),c.c(),c.m(l,s)),u[6].callsign===u[1].callsign?f?f.p(u,v):(f=ze(u),f.c(),f.m(l,null)):f&&(f.d(1),f=null)},i(u){a||(E(n.$$.fragment,u),X(()=>{r||(r=B(e,ue,{},!0)),r.run(1)}),a=!0)},o(u){S(n.$$.fragment,u),r||(r=B(e,ue,{},!1)),r.run(0),a=!1},d(u){u&&w(e),F(n),c&&c.d(),f&&f.d(),u&&r&&r.end()}}}function el(o){let e,n,t=o[0],l=[];for(let i=0;i<t.length;i+=1)l[i]=He(Be(o,t,i));const s=i=>S(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=re()},m(i,r){for(let a=0;a<l.length;a+=1)l[a].m(i,r);$(i,e,r),n=!0},p(i,r){if(r&15){t=i[0];let a;for(a=0;a<t.length;a+=1){const c=Be(i,t,a);l[a]?(l[a].p(c,r),E(l[a],1)):(l[a]=He(c),l[a].c(),E(l[a],1),l[a].m(e.parentNode,e))}for(le(),a=t.length;a<l.length;a+=1)s(a);ne()}},i(i){if(!n){for(let r=0;r<t.length;r+=1)E(l[r]);n=!0}},o(i){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)S(l[r]);n=!1},d(i){se(l,i),i&&w(e)}}}function tl(o){let e,n,t;return n=new pt({props:{$$slots:{default:[el]},$$scope:{ctx:o}}}),{c(){e=b("div"),z(n.$$.fragment),_(e,"class","jerico absolute-center flex column wrap hide-scrollbar scroll full-height")},m(l,s){$(l,e,s),H(n,e,null),t=!0},p(l,[s]){const i={};s&1027&&(i.$$scope={dirty:s,ctx:l}),n.$set(i)},i(l){t||(E(n.$$.fragment,l),t=!0)},o(l){S(n.$$.fragment,l),t=!1},d(l){l&&w(e),F(n)}}}function ll(o,e,n){let t,l;U(o,K,c=>n(0,t=c)),U(o,ee,c=>n(1,l=c));async function s({uid:c,callsign:f}){f===l.callsign?await te("takeHelp",{uid:c,callsign:f,type:"delete"}).then(u=>{u&&(t.splice(t.findIndex(v=>v.uid===c),1),K.set(t))}):(t.splice(t.findIndex(u=>u.uid===c),1),K.set(t))}function i({uid:c,callsign:f}){f===l.callsign?console.log("No no no"):te("takeHelp",{uid:c,callsign:l.callsign,type:"help"})}return fe("getHelpRequest",({data:c})=>{J(K,t=c,t),K.set(t)}),[t,l,s,i,c=>i(c),c=>s(c)]}class nl extends Y{constructor(e){super();Z(this,e,ll,tl,x,{})}}function Fe(o,e,n){const t=o.slice();return t[16]=e[n],t}function Ge(o){let e,n,t,l,s,i,r,a,c,f,u;const v=[il,sl],m=[];function k(g,d){return g[2]==="NO CALLSIGN"?0:1}return i=k(o),r=m[i]=v[i](o),c=new qt({}),{c(){e=b("img"),l=L(),s=b("div"),r.c(),a=L(),z(c.$$.fragment),Q(e.src,n=o[1]==="pc"?"iconos/background.png":"iconos/car.png")||_(e,"src",n),_(e,"class","absolute-center"),_(e,"alt",""),_(e,"srcset",""),I(e,"width","72.39vw",!1),I(e,"height","88.55vh",!1),I(e,"top","51.5%",!1),_(s,"class","background non-selectable absolute-center svelte-1ybcinr"),I(s,"width","66.66vw",!1),I(s,"height","74.92vh",!1)},m(g,d){$(g,e,d),$(g,l,d),$(g,s,d),m[i].m(s,null),p(s,a),H(c,s,null),u=!0},p(g,d){(!u||d&2&&!Q(e.src,n=g[1]==="pc"?"iconos/background.png":"iconos/car.png"))&&_(e,"src",n);let y=i;i=k(g),i===y?m[i].p(g,d):(le(),S(m[y],1,1,()=>{m[y]=null}),ne(),r=m[i],r?r.p(g,d):(r=m[i]=v[i](g),r.c()),E(r,1),r.m(s,a))},i(g){u||(X(()=>{t||(t=B(e,V,{},!0)),t.run(1)}),E(r),E(c.$$.fragment,g),X(()=>{f||(f=B(s,V,{},!0)),f.run(1)}),u=!0)},o(g){t||(t=B(e,V,{},!1)),t.run(0),S(r),S(c.$$.fragment,g),f||(f=B(s,V,{},!1)),f.run(0),u=!1},d(g){g&&w(e),g&&t&&t.end(),g&&w(l),g&&w(s),m[i].d(),F(c),g&&f&&f.end()}}}function sl(o){let e,n,t,l,s,i,r,a,c=o[6],f=[];for(let u=0;u<c.length;u+=1)f[u]=Ve(Fe(o,c,u));return t=new nl({}),s=new Kt({}),r=new gt({props:{routes:Lt}}),{c(){e=b("div");for(let u=0;u<f.length;u+=1)f[u].c();n=L(),z(t.$$.fragment),l=L(),z(s.$$.fragment),i=L(),z(r.$$.fragment),_(e,"class","apps svelte-1ybcinr")},m(u,v){$(u,e,v);for(let m=0;m<f.length;m+=1)f[m].m(e,null);$(u,n,v),H(t,u,v),$(u,l,v),H(s,u,v),$(u,i,v),H(r,u,v),a=!0},p(u,v){if(v&80){c=u[6];let m;for(m=0;m<c.length;m+=1){const k=Fe(u,c,m);f[m]?f[m].p(k,v):(f[m]=Ve(k),f[m].c(),f[m].m(e,null))}for(;m<f.length;m+=1)f[m].d(1);f.length=c.length}},i(u){a||(E(t.$$.fragment,u),E(s.$$.fragment,u),E(r.$$.fragment,u),a=!0)},o(u){S(t.$$.fragment,u),S(s.$$.fragment,u),S(r.$$.fragment,u),a=!1},d(u){u&&w(e),se(f,u),u&&w(n),F(t,u),u&&w(l),F(s,u),u&&w(i),F(r,u)}}}function il(o){let e,n;return e=new Dt({}),{c(){z(e.$$.fragment)},m(t,l){H(e,t,l),n=!0},p:Xe,i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function Ve(o){let e,n,t,l,s,i,r,a,c=o[4](`page.home.app.${o[16].name}`)+"",f,u,v,m;function k(){return o[7](o[16])}return{c(){e=b("div"),n=b("img"),s=L(),i=b("br"),r=L(),a=b("p"),f=T(c),u=L(),Q(n.src,t=o[16].icon)||_(n,"src",t),_(n,"alt",l=o[16].name),_(n,"srcset",""),I(n,"width","48px",!1),_(a,"class","menu-title text-center text-white text-h6"),_(e,"class","iconos svelte-1ybcinr")},m(g,d){$(g,e,d),p(e,n),p(e,s),p(e,i),p(e,r),p(e,a),p(a,f),p(e,u),v||(m=M(e,"dblclick",k),v=!0)},p(g,d){o=g,d&16&&c!==(c=o[4](`page.home.app.${o[16].name}`)+"")&&O(f,c)},d(g){g&&w(e),v=!1,m()}}}function ol(o){let e,n,t,l,s=o[0]&&o[3]===!0&&Ge(o);return{c(){s&&s.c(),e=re()},m(i,r){s&&s.m(i,r),$(i,e,r),n=!0,t||(l=M(window,"keydown",o[5]),t=!0)},p(i,[r]){i[0]&&i[3]===!0?s?(s.p(i,r),r&9&&E(s,1)):(s=Ge(i),s.c(),E(s,1),s.m(e.parentNode,e)):s&&(le(),S(s,1,1,()=>{s=null}),ne())},i(i){n||(E(s),n=!0)},o(i){S(s),n=!1},d(i){s&&s.d(i),i&&w(e),t=!1,l()}}}function rl(o,e,n){let t,l,s,i,r,a,c,f,u,v;U(o,de,C=>n(9,l=C)),U(o,ke,C=>n(10,s=C)),U(o,pe,C=>n(2,i=C)),U(o,he,C=>n(11,r=C)),U(o,be,C=>n(12,a=C)),U(o,ee,C=>n(13,c=C)),U(o,K,C=>n(14,f=C)),U(o,ht,C=>n(3,u=C)),U(o,Je,C=>n(4,v=C));let m=!!Re();fe("getHelpRequest",({data:C})=>{J(K,f=C,f),K.set(f)});let k=(Re(),"en");fe("openTablet",({isvisible:C,defaultLang:R,onduty:h,userdata:q,type:P,langs:N})=>{n(0,m=C),n(1,t=P),J(ee,c=q,c),J(be,a=q.isboss,a),J(he,r=N,r),J(pe,i=q.callsign,i),k=R,J(ke,s=h,s)}),Ze(async()=>{et({withLocale:k})}),fe("updateReports",({reports:C})=>{J(de,l=C,l)});function g(C){C.keyCode===27&&(n(0,m=!m),n(1,t=""),te("exitMDT"))}const d=[{name:"report",icon:"iconos/agreement.png",path:"/reportTool"},{name:"user",icon:"iconos/search.png",path:"/Search"},{name:"mytool",icon:"iconos/user.png",path:`/My/${!0}`}],y=C=>Qe(C.path);return n(1,t="pc"),[m,t,i,u,v,g,d,y]}class al extends Y{constructor(e){super();Z(this,e,rl,ol,x,{})}}new al({target:document.getElementById("app")});export{pe as C,be as I,K as N,ke as O,ul as P,de as R,_l as T,ee as U,dl as a,pl as b,me as c,te as f,Re as i,fe as u};
