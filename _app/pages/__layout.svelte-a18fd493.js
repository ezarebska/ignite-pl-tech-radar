import{S as j,i as B,s as J,e as m,c as v,F as Q,b as f,g as F,G as R,d as g,H as U,t as K,a as $,h as O,I as w,J as d,K as W,w as X,k as S,x as Y,m as q,y as Z,j as x,L as ee,M as te,N as se,q as C,o as G,B as ae,O as le,P as re}from"../chunks/vendor-132ca1f5.js";import{b as z}from"../chunks/paths-4b3c6e7e.js";function ne(t){let e,r;return{c(){e=m("img"),this.h()},l(a){e=v(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Q(e.src,r="logo.svg")||f(e,"src",r),f(e,"alt","NoA Ignite Logo"),f(e,"class","svelte-1dgunl7")},m(a,_){F(a,e,_)},p:R,i:R,o:R,d(a){a&&g(e)}}}class oe extends j{constructor(e){super();B(this,e,null,ne,J,{})}}const ie=()=>{const t=U("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session,updated:t.updated}},ce={subscribe(t){return ie().page.subscribe(t)}},D=[{title:"NoA Ignite PL - Tech Radar Feb 2022",url:"/",link:"NoA Tech Radar"},{title:"NoA Ignite PL - Martech Radar Feb 2022",url:"/martech",link:"NoA Martech Radar"}];function T(t,e,r){const a=t.slice();return a[4]=e[r],a}function V(t){let e,r=t[4].link+"",a,_;return{c(){e=m("a"),a=K(r),this.h()},l(n){e=v(n,"A",{class:!0,href:!0});var i=$(e);a=O(i,r),i.forEach(g),this.h()},h(){f(e,"class","link svelte-1pbvm4d"),f(e,"href",_=z+t[4].url),w(e,"active",t[0].url.pathname===t[4].url)},m(n,i){F(n,e,i),d(e,a)},p(n,i){i&1&&w(e,"active",n[0].url.pathname===n[4].url)},d(n){n&&g(e)}}}function ue(t){let e,r,a,_,n,i,h,p,y,A,k,b;a=new oe({});let E=D,o=[];for(let s=0;s<E.length;s+=1)o[s]=V(T(t,E,s));const L=t[3].default,c=W(L,t,t[2],null);return{c(){e=m("div"),r=m("header"),X(a.$$.fragment),_=S(),n=m("h1"),i=K(t[1]),h=S(),p=m("main"),y=m("aside"),A=m("nav");for(let s=0;s<o.length;s+=1)o[s].c();k=S(),c&&c.c(),this.h()},l(s){e=v(s,"DIV",{class:!0});var u=$(e);r=v(u,"HEADER",{class:!0});var l=$(r);Y(a.$$.fragment,l),_=q(l),n=v(l,"H1",{class:!0});var I=$(n);i=O(I,t[1]),I.forEach(g),l.forEach(g),h=q(u),p=v(u,"MAIN",{class:!0});var N=$(p);y=v(N,"ASIDE",{});var H=$(y);A=v(H,"NAV",{});var P=$(A);for(let M=0;M<o.length;M+=1)o[M].l(P);P.forEach(g),H.forEach(g),k=q(N),c&&c.l(N),N.forEach(g),u.forEach(g),this.h()},h(){f(n,"class","svelte-1pbvm4d"),f(r,"class","svelte-1pbvm4d"),f(p,"class","svelte-1pbvm4d"),f(e,"class","root-container")},m(s,u){F(s,e,u),d(e,r),Z(a,r,null),d(r,_),d(r,n),d(n,i),d(e,h),d(e,p),d(p,y),d(y,A);for(let l=0;l<o.length;l+=1)o[l].m(A,null);d(p,k),c&&c.m(p,null),b=!0},p(s,[u]){if((!b||u&2)&&x(i,s[1]),u&1){E=D;let l;for(l=0;l<E.length;l+=1){const I=T(s,E,l);o[l]?o[l].p(I,u):(o[l]=V(I),o[l].c(),o[l].m(A,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=E.length}c&&c.p&&(!b||u&4)&&ee(c,L,s,s[2],b?se(L,s[2],u,null):te(s[2]),null)},i(s){b||(C(a.$$.fragment,s),C(c,s),b=!0)},o(s){G(a.$$.fragment,s),G(c,s),b=!1},d(s){s&&g(e),ae(a),le(o,s),c&&c.d(s)}}}function _e(t,e,r){let a,_;re(t,ce,h=>r(0,_=h));let{$$slots:n={},$$scope:i}=e;return t.$$set=h=>{"$$scope"in h&&r(2,i=h.$$scope)},t.$$.update=()=>{t.$$.dirty&1&&r(1,a=D.find(h=>`${z}${h.url}`.replaceAll("/","")===_.url.pathname.replaceAll("/","")).title)},[_,a,i,n]}class ge extends j{constructor(e){super();B(this,e,_e,ue,J,{})}}export{ge as default};
