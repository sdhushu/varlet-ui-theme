import{P as C}from"./PaginationSfc.66995053.js";import{t as T,c as V}from"./shared.67abcef7.js";import{d as w,f as u,h as d,M as t,N as c,R as z,O as g,j as I,_ as $,a as A,q as r,S as i,an as a,F as v,P as y,Q as l,ak as B,ao as P,ap as U}from"./vue-router.esm-bundler.94b4319d.js";import{p as n,u as j}from"./index.d586c1c1.js";import{A as S}from"./AppType.ec0f70f1.js";/* empty css                  */import"./menu.9ba73711.js";/* empty css             */import"./input.57dcdf1c.js";/* empty css               *//* empty css             */import{a as F}from"./utils.625f73d8.js";import{u as L}from"./sync.818fac4e.js";import"./index.5126101c.js";import"./index.ed021aaa.js";import"./index.951d24f0.js";import"./index.dc5aa843.js";import"./index.7e98eda1.js";import"./AppType.vue_vue_type_style_index_0_lang.5046ce66.js";import"./zIndex.76de7dbc.js";import"./provide.4aac1bb3.js";var{n:W,classes:q}=V("table");function D(e,f){return u(),d("div",{class:c(e.classes(e.n(),"var-elevation--1 var--box"))},[t("div",{class:c(e.n("main"))},[t("table",{class:c(e.n("table")),style:z({width:e.toSizeUnit(e.fullWidth)})},[g(e.$slots,"default")],6)],2),e.$slots.footer?(u(),d("div",{key:0,class:c(e.n("footer"))},[g(e.$slots,"footer")],2)):I("v-if",!0)],2)}const m=w({render:D,name:"VarTable",props:{fullWidth:{type:[Number,String],default:"100%"}},setup(){return{toSizeUnit:T,n:W,classes:q}}});m.install=function(e){e.component(m.name,m)};const h=e=>(P("data-v-2bd6b8a8"),e=e(),U(),e),E=h(()=>t("td",null,"124",-1)),M=h(()=>t("td",null,"38",-1)),O=h(()=>t("td",null,"100",-1)),Q=h(()=>t("td",null,"135",-1)),R={class:"footer"},x={setup(e){const f=(p,o)=>Array.from({length:o}).map((s,k)=>{const _=(p-1)*o+k+1;return{name:`Name ${_}`,math:_,english:_}}),b=A(f(1,10)),N=(p,o)=>{b.value=f(p,o)};return F(j),L(),(p,o)=>(u(),d(v,null,[r(a(S),null,{default:i(()=>[y(l(a(n).basicUsage),1)]),_:1}),r(a(m),null,{default:i(()=>[t("thead",null,[t("tr",null,[t("th",null,l(a(n).name),1),t("th",null,l(a(n).math),1),t("th",null,l(a(n).english),1)])]),t("tbody",null,[t("tr",null,[t("td",null,l(a(n).jerry),1),E,M]),t("tr",null,[t("td",null,l(a(n).tom),1),O,Q])])]),_:1}),r(a(S),null,{default:i(()=>[y(l(a(n).slot),1)]),_:1}),r(a(m),null,{footer:i(()=>[t("div",R,[r(a(C),{current:1,total:100,"size-option":[5,10],onChange:N})])]),default:i(()=>[t("thead",null,[t("tr",null,[t("th",null,l(a(n).name),1),t("th",null,l(a(n).math),1),t("th",null,l(a(n).english),1)])]),t("tbody",null,[(u(!0),d(v,null,B(b.value,s=>(u(),d("tr",{key:s.name},[t("td",null,l(s.name),1),t("td",null,l(s.math),1),t("td",null,l(s.english),1)]))),128))])]),_:1})],64))}},ht=$(x,[["__scopeId","data-v-2bd6b8a8"]]);export{ht as default};
