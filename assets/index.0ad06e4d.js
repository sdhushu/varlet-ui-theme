import{aA as x,X as I,W as B,d as W,q as y,aE as q,F as D}from"./vue-router.esm-bundler.94b4319d.js";import{a as N,c as P,j as d}from"./shared.67abcef7.js";var w=r=>["mini","small","normal","large"].includes(r),X=r=>w(r)||x(r)||I(r)||B(r),_=r=>["start","end","center","space-around","space-between"].includes(r),k={align:{type:String},size:{type:[String,Number,Array],default:"normal",validator:X},wrap:{type:Boolean,default:!0},direction:{type:String,default:"row"},justify:{type:String,default:"start",validator:_},inline:{type:Boolean,default:!1}},{n:S,classes:z}=P("space"),G={mini:[4,4],small:[6,6],normal:[8,12],large:[12,20]};const m=W({name:"VarSpace",props:k,setup(r,h){var{slots:b}=h,j=(a,u)=>u?G[a]:x(a)?a.map(d):[d(a),d(a)],v=a=>a==="start"||a==="end"?"flex-"+a:a;return()=>{var a,{inline:u,justify:l,align:V,wrap:A,direction:s,size:g}=r,o=(a=N(b.default))!=null?a:[],C=w(g),[e,p]=j(g,C),E=c=>{var n=[];return c.forEach(i=>{if(i.type!==q){if(i.type===D&&x(i.children)){i.children.forEach(t=>{n.push(t)});return}n.push(i)}}),n};o=E(o);var f=o.length-1,F=o.map((c,n)=>{var i=s==="row"?void 0:"100%",t="0";return s==="row"&&(l==="start"||l==="center"||l==="end"?n!==f?t=e/2+"px "+p+"px "+e/2+"px 0":t=e/2+"px 0":l==="space-around"?t=e/2+"px "+p/2+"px":l==="space-between"&&(n===0?t=e/2+"px "+p/2+"px "+e/2+"px 0":n===f?t=e/2+"px 0 "+e/2+"px "+p/2+"px":t=e/2+"px "+p/2+"px")),s==="column"&&n!==f&&(t="0 0 "+e+"px 0"),y("div",{style:{margin:t,width:i}},[c])});return y("div",{class:z(S(),"var--box",[u,S("--inline")]),style:{flexDirection:s,justifyContent:v(l),alignItems:v(V),flexWrap:A?"wrap":"nowrap",margin:s==="row"?"-"+e/2+"px 0":void 0}},[F])}}});m.install=function(r){r.component(m.name,m)};export{m as S};
