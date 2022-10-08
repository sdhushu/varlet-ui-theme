import{C as ge}from"./checkbox.f11873c6.js";import{v as ke}from"./index.5126101c.js";import{d as ae,a as h,b as V,w as $,p as M,ai as Se,D as Ve,f as v,h as C,M as m,N as s,R as k,i as G,aj as re,j as H,O as A,P as ne,Q as O,q as z,S as K,F as we,ak as Fe,aw as D,n as Ee,aA as Me}from"./vue-router.esm-bundler.94b4319d.js";import{v as Oe,h as Be,g as Te,w as Ne,c as oe,u as Pe,a as t,j as le}from"./shared.67abcef7.js";import{I as De}from"./index.951d24f0.js";import{M as $e}from"./menu.9ba73711.js";import{C as Ae}from"./chip.40801d9d.js";import{F as Ie,u as Ue}from"./provide.4aac1bb3.js";var se=Symbol("SELECT_BIND_OPTION_KEY"),ie=Symbol("SELECT_COUNT_OPTION_KEY");function Ye(){var{bindChildren:e,childProviders:a}=Be(se),{length:u}=Oe(ie);return{length:u,options:a,bindOptions:e}}function Le(){var{bindParent:e,parentProvider:a}=Te(se),{index:u}=Ne(ie);if(!e||!a)throw Error("<var-option/> must in <var-select/>");return{index:u,select:a,bindSelect:e}}var We={label:{},value:{}},{n:je,classes:ze}=oe("option");function Ke(e,a){var u=M("var-checkbox"),b=Se("ripple");return Ve((v(),C("div",{class:s(e.classes(e.n(),"var--box",[e.optionSelected,e.n("--selected-color")])),style:k({width:e.wrapWidth,color:e.optionSelected?e.focusColor:void 0}),onClick:a[2]||(a[2]=function(){return e.handleClick&&e.handleClick(...arguments)})},[m("div",{class:s(e.classes(e.n("cover"),[e.optionSelected,e.n("--selected-background")])),style:k({background:e.optionSelected?e.focusColor:void 0})},null,6),e.multiple?(v(),G(u,{key:0,ref:"checkbox","checked-color":e.focusColor,modelValue:e.optionSelected,"onUpdate:modelValue":a[0]||(a[0]=y=>e.optionSelected=y),onClick:a[1]||(a[1]=re(()=>{},["stop"])),onChange:e.handleSelect},null,8,["checked-color","modelValue","onChange"])):H("v-if",!0),m("div",{class:s(e.classes(e.n("text"),"var--ellipsis"))},[A(e.$slots,"default",{},()=>[ne(O(e.label),1)])],2)],6)),[[b]])}const R=ae({render:Ke,name:"VarOption",directives:{Ripple:ke},components:{VarCheckbox:ge},props:We,setup(e){var a=h(!1),u=V(()=>a.value),b=V(()=>e.label),y=V(()=>e.value),{select:g,bindSelect:f}=Le(),{wrapWidth:w,multiple:F,focusColor:I,onSelect:n}=g,U=()=>{a.value=!a.value,n(E)},c=()=>n(E),Y=L=>{a.value=L},E={label:b,value:y,selected:u,sync:Y};return $([()=>e.label,()=>e.value],()=>{if(e.label==null&&e.value==null)throw Error(`Props label and value can't both be undefined
`)},{immediate:!0}),f(E),{n:je,classes:ze,optionSelected:a,wrapWidth:w,multiple:F,focusColor:I,handleClick:U,handleSelect:c}}});R.install=function(e){e.component(R.name,R)};function Re(e){return["left","right","center"].includes(e)}var qe={modelValue:{default:void 0},placeholder:{type:String},multiple:{type:Boolean,default:!1},offsetY:{type:[String,Number],default:0},chip:{type:Boolean,default:!1},line:{type:Boolean,default:!0},hint:{type:Boolean,default:!0},textColor:{type:String},focusColor:{type:String},blurColor:{type:String},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},separator:{type:String,default:","},textAlign:{type:String,default:"left",validator:Re},validateTrigger:{type:Array,default:()=>["onChange","onClear","onClose"]},rules:{type:Array},onFocus:{type:Function},onBlur:{type:Function},onClick:{type:Function},onClear:{type:Function},onClose:{type:Function},onChange:{type:Function},"onUpdate:modelValue":{type:Function}},{n:q,classes:Qe}=oe("select"),Ge={key:0},He={key:1};function Je(e,a){var u=M("var-chip"),b=M("var-icon"),y=M("var-menu"),g=M("var-form-details");return v(),C("div",{class:s(e.classes(e.n(),"var--box",[e.formDisabled||e.disabled,e.n("--disabled")])),onClick:a[3]||(a[3]=function(){return e.handleClick&&e.handleClick(...arguments)})},[m("div",{class:s(e.classes(e.n("controller"),[e.isFocus,e.n("--focus")],[e.errorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")])),style:k({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor})},[m("div",{class:s(e.classes(e.n("icon"),[!e.hint,e.n("--non-hint")]))},[A(e.$slots,"prepend-icon")],2),m("div",{class:s(e.classes(e.n("wrap"),[!e.hint,e.n("--non-hint")])),ref:"wrapEl",onClick:a[2]||(a[2]=function(){return e.handleFocus&&e.handleFocus(...arguments)})},[z(y,{"var-select-cover":"",class:s(e.classes(e.n("menu"))),"offset-y":e.offsetY,disabled:e.readonly||e.disabled,"default-style":!1,show:e.isFocus,"onUpdate:show":a[1]||(a[1]=f=>e.isFocus=f),onClose:e.handleBlur},{menu:K(()=>[m("div",{ref:"menuEl",class:s(e.classes(e.n("scroller"),"var-elevation--3"))},[A(e.$slots,"default")],2)]),default:K(()=>[m("div",{class:s(e.classes(e.n("select"),[e.errorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")])),style:k({textAlign:e.textAlign,color:e.textColor})},[e.multiple?(v(),C("div",Ge,[e.chip?(v(),C("div",{key:0,class:s(e.n("chips"))},[(v(!0),C(we,null,Fe(e.labels,f=>(v(),G(u,{class:s(e.n("chip")),"var-select-cover":"",closable:"",size:"small",type:e.errorMessage?"danger":void 0,key:f,onClick:a[0]||(a[0]=re(()=>{},["stop"])),onClose:()=>e.handleClose(f)},{default:K(()=>[ne(O(f),1)]),_:2},1032,["class","type","onClose"]))),128))],2)):(v(),C("div",{key:1,class:s(e.n("values"))},O(e.labels.join(e.separator)),3))])):(v(),C("span",He,O(e.label),1)),z(b,{class:s(e.classes(e.n("arrow"),[e.isFocus,e.n("--arrow-rotate")])),"var-select-cover":"",name:"menu-down",transition:300},null,8,["class"])],6),m("label",{class:s(e.classes(e.n("placeholder"),"var--ellipsis",[e.isFocus,e.n("--focus")],[e.errorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")],e.computePlaceholderState(),[!e.hint,e.n("--placeholder-non-hint")])),style:k({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor})},O(e.placeholder),7)]),_:3},8,["class","offset-y","disabled","show","onClose"])],2),m("div",{class:s(e.classes(e.n("icon"),[!e.hint,e.n("--non-hint")]))},[A(e.$slots,"append-icon",{},()=>[e.clearable?(v(),G(b,{key:0,class:s(e.n("clear-icon")),name:"close-circle",size:"14px",onClick:e.handleClear},null,8,["class","onClick"])):H("v-if",!0)])],2)],6),e.line?(v(),C("div",{key:0,class:s(e.classes(e.n("line"),[e.formDisabled||e.disabled,e.n("--line-disabled")],[e.errorMessage,e.n("--line-error")])),style:k({background:e.errorMessage?void 0:e.blurColor})},[m("div",{class:s(e.classes(e.n("dot"),[e.isFocus,e.n("--spread")],[e.formDisabled||e.disabled,e.n("--line-disabled")],[e.errorMessage,e.n("--line-error")])),style:k({background:e.errorMessage?void 0:e.focusColor})},null,6)],6)):H("v-if",!0),z(g,{"error-message":e.errorMessage},null,8,["error-message"])],2)}const Q=ae({render:Je,name:"VarSelect",components:{VarIcon:De,VarMenu:$e,VarChip:Ae,VarFormDetails:Ie},props:qe,setup(e){var a=h(null),u=h(!1),b=V(()=>e.multiple),y=V(()=>e.focusColor),g=h(""),f=h([]),w=h("0px"),F=h(0),{bindForm:I,form:n}=Ue(),{length:U,options:c,bindOptions:Y}=Ye(),{errorMessage:E,validateWithTrigger:L,validate:ue,resetValidation:W}=Pe(),de=h(null),te=()=>{var{multiple:r,modelValue:l}=e;if(r){var o=l;f.value=o.map(J)}!r&&!D(l)&&(g.value=J(l)),!r&&D(l)&&(g.value="")},S=r=>{Ee(()=>{var{validateTrigger:l,rules:o,modelValue:i}=e;L(l,r,o,i)})},B=r=>{var{value:l,label:o}=r;return l.value!=null?l.value:o.value},J=r=>{var l,o,i=c.find(p=>{var{value:d}=p;return d.value===r});return i||(i=c.find(p=>{var{label:d}=p;return d.value===r})),(l=(o=i)==null?void 0:o.label.value)!=null?l:""},ve=()=>{var{hint:r,modelValue:l}=e;if(!r&&!D(l))return q("--placeholder-hidden");if(r&&(!D(l)||u.value))return q("--placeholder-hint")},X=()=>a.value&&window.getComputedStyle(a.value).width||"0px",fe=()=>{var{disabled:r,readonly:l,onFocus:o}=e;n!=null&&n.disabled.value||n!=null&&n.readonly.value||r||l||(w.value=X(),F.value=le(e.offsetY),u.value=!0,t(o),S("onFocus"))},me=()=>{var{disabled:r,readonly:l,onBlur:o}=e;n!=null&&n.disabled.value||n!=null&&n.readonly.value||r||l||(t(o),S("onBlur"))},pe=r=>{var{disabled:l,readonly:o,multiple:i,onChange:p}=e;if(!(n!=null&&n.disabled.value||n!=null&&n.readonly.value||l||o)){var d=i?c.filter(T=>{var{selected:N}=T;return N.value}).map(B):B(r);t(e["onUpdate:modelValue"],d),t(p,d),S("onChange"),!i&&(u.value=!1)}},be=()=>{var{disabled:r,readonly:l,multiple:o,clearable:i,onClear:p}=e;if(!(n!=null&&n.disabled.value||n!=null&&n.readonly.value||r||l||!i)){var d=o?[]:void 0;t(e["onUpdate:modelValue"],d),t(p,d),S("onClear")}},ce=r=>{var{disabled:l,onClick:o}=e;n!=null&&n.disabled.value||l||(t(o,r),S("onClick"))},he=r=>{var{disabled:l,readonly:o,modelValue:i,onClose:p}=e;if(!(n!=null&&n.disabled.value||n!=null&&n.readonly.value||l||o)){var d=i,T=c.find(j=>{var{label:P}=j;return P.value===r}),N=d.filter(j=>{var P;return j!==((P=T.value.value)!=null?P:T.label.value)});t(e["onUpdate:modelValue"],N),t(p,N),S("onClose")}},Z=()=>{var{multiple:r,modelValue:l}=e;if(r){var o=l;c.forEach(i=>i.sync(o.includes(B(i))))}else c.forEach(i=>i.sync(l===B(i)));te()},Ce=()=>{w.value=X(),F.value=le(e.offsetY),u.value=!0},ye=()=>{u.value=!1},_=()=>ue(e.rules,e.modelValue),x=()=>{t(e["onUpdate:modelValue"],e.multiple?[]:void 0),W()};$(()=>e.multiple,()=>{var{multiple:r,modelValue:l}=e;if(r&&!Me(l))throw Error("The modelValue must be an array when multiple is true")}),$(()=>e.modelValue,Z,{deep:!0}),$(()=>U.value,Z);var ee={wrapWidth:V(()=>w.value),multiple:b,focusColor:y,onSelect:pe,reset:x,validate:_,resetValidation:W};return Y(ee),t(I,ee),{wrapEl:a,offsetY:F,isFocus:u,errorMessage:E,formDisabled:n==null?void 0:n.disabled,label:g,labels:f,menuEl:de,n:q,classes:Qe,computePlaceholderState:ve,handleFocus:fe,handleBlur:me,handleClear:be,handleClick:ce,handleClose:he,reset:x,validate:_,resetValidation:W,focus:Ce,blur:ye}}});Q.install=function(e){e.component(Q.name,Q)};export{R as O,Q as S};
