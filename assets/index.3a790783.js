import{C as X}from"./index.dc5aa843.js";import{S as re}from"./sticky.bcffaa11.js";import{d as K,a as c,b,G as te,f as h,i as q,S as C,M as G,O as U,P as A,Q as v,m as oe,av as se,w as le,o as j,e as ie,Z as H,h as I,F as Q,ak as Z,N as z,R as V,V as ue,an as m,q as $}from"./vue-router.esm-bundler.94b4319d.js";import{v as de,h as ce,g as ve,w as fe,c as J,j as pe,a as M,x as me,k as F,l as he,r as ye,n as ge,o as ke,q as be,y as Ce}from"./shared.67abcef7.js";/* empty css             *//* empty css             */import"./CellSfc.90047be6.js";import{d as Ie}from"./index.fb915d03.js";import{p as R,u as Te}from"./index.cc5ec697.js";import{a as xe,b as Be}from"./utils.625f73d8.js";import{u as Ne}from"./sync.818fac4e.js";import"./index.951d24f0.js";import"./index.7e98eda1.js";var W=Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"),ee=Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");function _e(){var{bindChildren:e,childProviders:t}=ce(W),{length:n}=de(ee);return{length:n,indexAnchors:t,bindIndexAnchors:e}}function Ae(){var{parentProvider:e,bindParent:t}=ve(W),{index:n}=fe(ee);if(!e||!t)throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');return{index:n,indexBar:e,bindIndexBar:t}}var Ee={index:{type:[Number,String]}},{n:Se,classes:we}=J("index-anchor");function De(e,t){return h(),q(se(e.sticky?"var-sticky":e.Transition),{"offset-top":e.sticky?e.stickyOffsetTop:null,"z-index":e.sticky?e.zIndex:null,disabled:e.disabled&&!e.cssMode,"css-mode":e.cssMode,ref:"anchorEl"},{default:C(()=>[G("div",oe({class:e.n()},e.$attrs),[U(e.$slots,"default",{},()=>[A(v(e.name),1)])],16)]),_:3},8,["offset-top","z-index","disabled","css-mode"])}const E=K({render:De,name:"VarIndexAnchor",components:{VarSticky:re},inheritAttrs:!1,props:Ee,setup(e){var{index:t,indexBar:n,bindIndexBar:u}=Ae(),i=c(0),a=c(!1),s=b(()=>e.index),r=c(null),{active:l,sticky:g,cssMode:w,stickyOffsetTop:k,zIndex:T}=n,D=()=>{!r.value||(i.value=r.value.$el?r.value.$el.offsetTop:r.value.offsetTop)},x=N=>{a.value=N},B={index:t,name:s,ownTop:i,setOwnTop:D,setDisabled:x};return u(B),{n:Se,classes:we,name:s,anchorEl:r,active:l,sticky:g,zIndex:T,disabled:a,cssMode:w,stickyOffsetTop:k,Transition:te}}});E.install=function(e){e.component(E.name,E)};var Oe={sticky:{type:Boolean,default:!0},stickyOffsetTop:{type:[String,Number],default:0},cssMode:{type:Boolean,default:!1},hideList:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:1},highlightColor:{type:String},duration:{type:[Number,String],default:0},onClick:{type:Function},onChange:{type:Function}};function Y(e,t,n,u,i,a,s){try{var r=e[a](s),l=r.value}catch(g){n(g);return}r.done?t(l):Promise.resolve(l).then(u,i)}function L(e){return function(){var t=this,n=arguments;return new Promise(function(u,i){var a=e.apply(t,n);function s(l){Y(a,u,i,s,r,"next",l)}function r(l){Y(a,u,i,s,r,"throw",l)}s(void 0)})}}var{n:Pe,classes:ze}=J("index-bar"),$e=["onClick"];function Me(e,t){return h(),I("div",{class:z(e.n()),ref:"barEl"},[U(e.$slots,"default"),G("ul",{class:z(e.n("anchor-list")),style:V({zIndex:e.toNumber(e.zIndex)+2,display:e.hideList?"none":"block"})},[(h(!0),I(Q,null,Z(e.anchorNameList,n=>(h(),I("li",{key:n,class:z(e.classes(e.n("anchor-item"),[e.active===n,e.n("anchor-item--active")])),style:V({color:e.active===n&&e.highlightColor?e.highlightColor:""}),onClick:u=>e.anchorClick(n,!0)},v(n),15,$e))),128))],6)],2)}const S=K({render:Me,name:"VarIndexBar",props:Oe,setup(e){var{length:t,indexAnchors:n,bindIndexAnchors:u}=_e(),i=c(""),a=c(null),s=c(null),r=c([]),l=c(),g=b(()=>e.sticky),w=b(()=>e.cssMode),k=b(()=>pe(e.stickyOffsetTop)),T=b(()=>e.zIndex),D={active:l,sticky:g,cssMode:w,stickyOffsetTop:k,zIndex:T};u(D);var x=d=>{var o=ue(d)?d.name.value:d;o===l.value||o===void 0||(l.value=o,M(e.onChange,o))},B=()=>{var d=ye(a.value),o=a.value===window?document.body.scrollHeight:a.value.scrollHeight,{offsetTop:y}=s.value;n.forEach((f,p)=>{var O=f.ownTop.value,_=d-O+k.value-y,P=p===n.length-1?o:n[p+1].ownTop.value-f.ownTop.value;_>=0&&_<P&&!i.value&&(p&&!e.cssMode&&n[p-1].setDisabled(!0),f.setDisabled(!1),x(f))})},N=function(){var d=L(function*(o,y){var{offsetTop:f}=s.value;if(y&&M(e.onClick,o),o!==l.value){var p=n.find(P=>{var{name:ne}=P;return o===ne.value});if(!!p){var O=p.ownTop.value-k.value+f,_=ge(a.value);i.value=o,x(o),yield ke(a.value,{left:_,top:O,animation:be,duration:H(e.duration)}),Ce(()=>{i.value=""})}}});return function(y,f){return d.apply(this,arguments)}}(),ae=d=>{me(()=>N(d))};return le(()=>t.value,L(function*(){yield F(),n.forEach(d=>{var{name:o,setOwnTop:y}=d;o.value&&r.value.push(o.value),y()})})),j(L(function*(){yield F(),a.value=he(s.value),a.value.addEventListener("scroll",B)})),ie(()=>{M(a.value.removeEventListener,"scroll",B)}),{n:Pe,classes:ze,barEl:s,active:l,zIndex:T,anchorNameList:r,toNumber:H,scrollTo:ae,anchorClick:N}}});S.install=function(e){e.component(S.name,S)};const Ze={setup(e){const t=c([]),n=c("#e7edf7"),u=c("#2e67ba");j(()=>{for(let a=0;a<26;a++)t.value.push(String.fromCharCode(65+a))});const i=a=>{console.log(a)};return xe(Te),Be(Ie,a=>{n.value=a==="darkTheme"?"rgb(41, 42, 45)":"#e7edf7",u.value=a==="darkTheme"?"#3980e8":"#2e67ba"}),Ne(),(a,s)=>(h(),q(m(S),{onChange:i,duration:"300","sticky-offset-top":"14.4vw"},{default:C(()=>[(h(!0),I(Q,null,Z(t.value,r=>(h(),I("div",{key:r},[$(m(E),{index:r,class:"var-index-anchor__example",style:V({background:n.value,color:u.value})},{default:C(()=>[A(v(m(R).title)+" "+v(r),1)]),_:2},1032,["index","style"]),$(m(X),null,{default:C(()=>[A(v(r)+" "+v(m(R).text),1)]),_:2},1024),$(m(X),null,{default:C(()=>[A(v(r)+" "+v(m(R).text),1)]),_:2},1024)]))),128))]),_:1}))}};export{Ze as default};
