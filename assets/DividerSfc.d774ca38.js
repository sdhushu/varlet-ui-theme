import{t as i,c as B}from"./shared.67abcef7.js";import{d as w,r as D,b as f,aH as p,o as N,al as O,aI as j,f as u,h as m,O as I,N as h,Q as T,j as z,R as C,Z as U}from"./vue-router.esm-bundler.94b4319d.js";var k={inset:{type:[Boolean,Number,String],default:!1},vertical:{type:Boolean,default:!1},description:{type:String},margin:{type:String},dashed:{type:Boolean,default:!1}};function n(){return n=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e},n.apply(this,arguments)}var{n:H,classes:M}=B("divider");function R(e,a){return u(),m("div",{class:h(e.classes(e.n(),"var--box",[e.vertical,e.n("--vertical")],[e.withText,e.n("--with-text")],[e.isInset,e.n("--inset")],[e.dashed,e.n("--dashed")])),style:C(e.style)},[I(e.$slots,"default",{},()=>[e.description?(u(),m("span",{key:0,class:h(e.n("text"))},T(e.description),3)):z("v-if",!0)])],6)}const c=w({render:R,name:"VarDivider",props:k,setup(e,a){var{slots:s}=a,t=D({withText:!1}),y=f(()=>p(e.inset)?e.inset:!0),g=f(()=>{var{inset:r,vertical:b,margin:S}=e,o={margin:S};if(p(r)||r===0)return n({},o);var l=U(r),d=Math.abs(l)+(r+"").replace(l+"","");return b?n({},o,{height:"calc(80% - "+i(d)+")"}):n({},o,{width:"calc(100% - "+i(d)+")",left:l>0?i(d):i(0)})}),v=()=>{t.withText=Boolean(s.default)||Boolean(e.description)};return N(()=>{v()}),O(()=>{v()}),n({n:H,classes:M},j(t),{style:g,isInset:y})}});c.install=function(e){e.component(c.name,c)};export{c as D};
