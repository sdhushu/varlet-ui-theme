import{A as f}from"./AppType.9ff697f8.js";import{j as S,x as w,t as M,v as W,c as I}from"./shared.683c68c7.js";import{d as T,b as C,f as n,h as u,N as i,M as g,R as c,j as p,O as N,P as d,Q as v,a as V,o as $,u as j,q as a,S as s,an as l,F as A}from"./vue-router.esm-bundler.94bfc301.js";import{S as b}from"./index.a079afdf.js";/* empty css              */import{d as F}from"./index.b9d01deb.js";import{p as m,u as L}from"./index.1b8be8e2.js";import{a as q,b as E}from"./utils.ec5be6f5.js";import{u as O}from"./sync.45b658de.js";import"./AppType.vue_vue_type_style_index_0_lang.d7747dd0.js";import"./_commonjsHelpers.b8add541.js";import"./index.cd0f538d.js";function Q(e){return["linear","circle"].includes(e)}var R={mode:{type:String,default:"linear",validator:Q},lineWidth:{type:[Number,String],default:4},color:{type:String},trackColor:{type:String},ripple:{type:Boolean,default:!1},value:{type:[Number,String],default:0},label:{type:Boolean,default:!1},labelClass:{type:String},size:{type:[Number,String],default:40},rotate:{type:Number,default:0},track:{type:Boolean,default:!0}},{n:G,classes:H}=I("progress"),J=["viewBox"],K=["cx","cy","r","stroke-width"],X=["cx","cy","r","stroke-width"];function Y(e,o){return n(),u("div",{class:i(e.n())},[e.mode==="linear"?(n(),u("div",{key:0,class:i(e.n("linear"))},[g("div",{class:i(e.n("linear-block")),style:c({height:e.toSizeUnit(e.lineWidth)})},[e.track?(n(),u("div",{key:0,class:i(e.n("linear-background")),style:c({background:e.trackColor})},null,6)):p("v-if",!0),g("div",{class:i(e.classes(e.n("linear-certain"),[e.ripple,e.n("linear-ripple")])),style:c({background:e.color,width:e.linearProps.width})},null,6)],6),e.label?(n(),u("div",{key:0,class:i(e.classes(e.n("linear-label"),[e.labelClass,e.labelClass]))},[N(e.$slots,"default",{},()=>[d(v(e.linearProps.roundValue),1)])],2)):p("v-if",!0)],2)):p("v-if",!0),e.mode==="circle"?(n(),u("div",{key:1,class:i(e.n("circle")),style:c({width:e.toSizeUnit(e.size),height:e.toSizeUnit(e.size)})},[(n(),u("svg",{class:i(e.n("circle-svg")),style:c({transform:"rotate("+(e.rotate-90)+"deg)"}),viewBox:e.circleProps.viewBox},[e.track?(n(),u("circle",{key:0,class:i(e.n("circle-background")),cx:e.multiplySizeUnit(e.size,.5),cy:e.multiplySizeUnit(e.size,.5),r:e.circleProps.radius,fill:"transparent","stroke-width":e.toSizeUnit(e.lineWidth),style:c({strokeDasharray:e.circleProps.perimeter,stroke:e.trackColor})},null,14,K)):p("v-if",!0),g("circle",{class:i(e.n("circle-certain")),cx:e.multiplySizeUnit(e.size,.5),cy:e.multiplySizeUnit(e.size,.5),r:e.circleProps.radius,fill:"transparent","stroke-width":e.toSizeUnit(e.lineWidth),style:c({strokeDasharray:e.circleProps.strokeDasharray,stroke:e.color})},null,14,X)],14,J)),e.label?(n(),u("div",{key:0,class:i(e.classes(e.n("circle-label"),[e.labelClass,e.labelClass]))},[N(e.$slots,"default",{},()=>[d(v(e.circleProps.roundValue),1)])],2)):p("v-if",!0)],6)):p("v-if",!0)],2)}const r=T({render:Y,name:"VarProgress",props:R,setup(e){var o=C(()=>{var t=S(e.value),y=t>100?100:t,k=t>100?100:Math.round(t);return{width:y+"%",roundValue:k+"%"}}),h=C(()=>{var{size:t,lineWidth:y,value:k}=e,B="0 0 "+w(t)+" "+w(t),P=S(k)>100?100:Math.round(S(k)),U=(w(t)-w(y))/2,z=2*Math.PI*U,D=P/100*z+", "+z;return{viewBox:B,radius:U,strokeDasharray:D,perimeter:z,roundValue:P+"%"}});return{n:G,classes:H,toSizeUnit:M,multiplySizeUnit:W,linearProps:o,circleProps:h}}});r.install=function(e){e.component(r.name,r)};const Z=d("success"),de={setup(e){const o=V(0),h=V(0);return $(()=>{h.value=window.setInterval(()=>{o.value>=100?o.value=0:o.value+=20},1e3)}),q(L),E(F),O(),j(()=>{window.clearInterval(h.value)}),(t,y)=>(n(),u(A,null,[a(l(f),null,{default:s(()=>[d(v(l(m).basicUsage),1)]),_:1}),a(l(b),{direction:"column",size:["3vh","3vh"]},{default:s(()=>[a(l(r),{value:20,track:!1}),a(l(r),{value:o.value,track:!1},null,8,["value"]),a(l(r),{value:100,track:!1})]),_:1}),a(l(f),null,{default:s(()=>[d(v(l(m).showLabel),1)]),_:1}),a(l(b),{direction:"column",size:["3vh","3vh"]},{default:s(()=>[a(l(r),{value:30,label:""}),a(l(r),{value:o.value,label:""},null,8,["value"]),a(l(r),{value:100,label:""},{default:s(()=>[Z]),_:1})]),_:1}),a(l(f),null,{default:s(()=>[d(v(l(m).style),1)]),_:1}),a(l(b),{direction:"column",size:["3vh","3vh"]},{default:s(()=>[a(l(r),{value:30,"line-width":"8",color:"#ff9f00"}),a(l(r),{value:60,"line-width":"8",color:"#ff9f00","track-color":"#f5cb90"}),a(l(r),{value:80,ripple:"","line-width":"8",color:"#ff9f00","track-color":"#f5cb90"})]),_:1}),a(l(f),null,{default:s(()=>[d(v(l(m).circle),1)]),_:1}),a(l(b),{size:["8vw","8vw"]},{default:s(()=>[a(l(r),{mode:"circle",value:30,"line-width":"5",size:"18vw"}),a(l(r),{mode:"circle",label:"",value:o.value,"line-width":"5",size:"18vw"},null,8,["value"]),a(l(r),{mode:"circle",label:"",value:100,"line-width":"5",size:"18vw"})]),_:1}),a(l(f),null,{default:s(()=>[d(v(l(m).hideTrack),1)]),_:1}),a(l(r),{mode:"circle",value:50,size:"18vw",track:!1})],64))}};export{de as default};
