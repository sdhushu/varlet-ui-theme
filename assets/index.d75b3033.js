import{B as i}from"./index.29b192e3.js";import{C as g}from"./cell.3a81f3a9.js";import{D as u}from"./DialogSfc.ee4be5af.js";import{I as T}from"./index.3fe6af9c.js";import{S as m}from"./index.035b588c.js";import{A as w}from"./AppType.3d33c17c.js";import{d as I}from"./index.fb915d03.js";import{p as o,u as b}from"./index.6ec1e27e.js";import{a as _,b as A}from"./utils.68b0d7ff.js";import"./shared.afebc00a.js";/* empty css             */import"./IconSfc.61818718.js";import"./CellSfc.90047be6.js";import"./popup.d9c93643.js";/* empty css               */import{u as V}from"./sync.d1807e50.js";import{_ as $,r as F,aI as N,f as P,h as R,q as t,S as a,an as e,aJ as y,F as q,P as l,Q as n}from"./vue-router.esm-bundler.bcd2b732.js";import"./index.8cad3476.js";import"./index.28d36455.js";import"./index.ec60c451.js";import"./index.8ba1c8be.js";import"./zIndex.ab1f70b9.js";import"./lock.4391fc05.js";import"./AppType.vue_vue_type_style_index_0_lang.7ee9e932.js";import"./_commonjsHelpers.b8add541.js";const E={setup(J){_(b),V();const d=u.Component,B=F({show:!1,show1:!1,show2:!1}),{show:p,show1:f,show2:c}=N(B),C={confirm:()=>m.success("confirm"),cancel:()=>m.error("cancel"),close:()=>m.info("close")},x=()=>u({message:o.value.message}),h=async()=>C[await u(o.value.message)](),S=()=>{u({title:o.value.title,message:o.value.message})},U=()=>{u({message:o.value.message,confirmButton:!1,cancelButton:!1})},k=(v,s)=>{m.loading(o.value.asyncCloseProgress),setTimeout(()=>{C[v](),s()},1e3)},D=()=>{u({message:o.value.message,onBeforeClose:k})};return _(b),A(I),(v,s)=>(P(),R(q,null,[t(e(w),null,{default:a(()=>[l(n(e(o).functionCall),1)]),_:1}),t(e(i),{type:"primary",block:"",onClick:x},{default:a(()=>[l(n(e(o).basicUsage),1)]),_:1}),t(e(i),{type:"primary",block:"",onClick:S},{default:a(()=>[l(n(e(o).modifyTitle),1)]),_:1}),t(e(i),{type:"primary",block:"",onClick:U},{default:a(()=>[l(n(e(o).hideButton),1)]),_:1}),t(e(i),{type:"primary",block:"",onClick:h},{default:a(()=>[l(n(e(o).handleUserBehavior),1)]),_:1}),t(e(i),{type:"primary",block:"",onClick:D},{default:a(()=>[l(n(e(o).asyncClose),1)]),_:1}),t(e(w),null,{default:a(()=>[l(n(e(o).componentCall),1)]),_:1}),t(e(i),{type:"warning",block:"",onClick:s[0]||(s[0]=r=>p.value=!0)},{default:a(()=>[l(n(e(o).basicUsage),1)]),_:1}),t(e(d),{show:e(p),"onUpdate:show":s[1]||(s[1]=r=>y(p)?p.value=r:null),title:e(o).title,message:e(o).message,onConfirm:s[2]||(s[2]=()=>e(m).success("confirm")),onCancel:s[3]||(s[3]=()=>e(m).error("cancel")),onClosed:s[4]||(s[4]=()=>e(m).info("closed"))},null,8,["show","title","message"]),t(e(i),{type:"warning",block:"",onClick:s[5]||(s[5]=r=>f.value=!0)},{default:a(()=>[l(n(e(o).asyncClose),1)]),_:1}),t(e(d),{show:e(f),"onUpdate:show":s[6]||(s[6]=r=>y(f)?f.value=r:null),title:e(o).title,message:e(o).message,onBeforeClose:k},null,8,["show","title","message"]),t(e(i),{type:"warning",block:"",onClick:s[7]||(s[7]=r=>c.value=!0)},{default:a(()=>[l(n(e(o).customSlots),1)]),_:1}),t(e(d),{show:e(c),"onUpdate:show":s[8]||(s[8]=r=>y(c)?c.value=r:null)},{title:a(()=>[t(e(T),{name:"information",color:"#2979ff"})]),default:a(()=>[t(e(g),null,{default:a(()=>[l(n(e(o).message),1)]),_:1}),t(e(g),null,{default:a(()=>[l(n(e(o).message),1)]),_:1}),t(e(g),null,{default:a(()=>[l(n(e(o).message),1)]),_:1})]),_:1},8,["show"])],64))}},fe=$(E,[["__scopeId","data-v-b3cbb682"]]);export{fe as default};
