import{I as E}from"./index.951d24f0.js";import{F as L,u as P}from"./provide.4aac1bb3.js";import{v as X}from"./index.5126101c.js";import{u as Z,a as m,t as N,c as j}from"./shared.67abcef7.js";import{d as G,Z as i,p as R,ai as H,f as b,h,M as J,F as K,ak as O,D as Q,R as k,N as c,q as F,n as Y}from"./vue-router.esm-bundler.94b4319d.js";var $={modelValue:{type:[String,Number],default:0},count:{type:[String,Number],default:5},color:{type:String},icon:{type:String,default:"star"},emptyColor:{type:String},emptyIcon:{type:String,default:"star-outline"},size:{type:[String,Number]},gap:{type:[String,Number]},namespace:{type:String},half:{type:Boolean,default:!1},halfIcon:{type:String,default:"star-half-full"},disabled:{type:Boolean,default:!1},disabledColor:{type:String},readonly:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},rules:{type:Array},onChange:{type:Function},"onUpdate:modelValue":{type:Function}},{n:s}=j("rate"),_=["onClick"];function x(e,a){var v=R("var-icon"),d=R("var-form-details"),f=H("ripple");return b(),h("div",{class:c(e.n("wrap"))},[J("div",{class:c(e.n())},[(b(!0),h(K,null,O(e.toNumber(e.count),n=>Q((b(),h("div",{key:n,style:k(e.getStyle(n)),class:c(e.getClass(n)),onClick:o=>e.handleClick(n,o)},[F(v,{class:c(e.n("content-icon")),"var-rate-cover":"",transition:0,namespace:e.namespace,name:e.getCurrentState(n).name,style:k({fontSize:e.toSizeUnit(e.size)})},null,8,["class","namespace","name","style"])],14,_)),[[f,{disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled||!e.ripple}]])),128))],2),F(d,{"error-message":e.errorMessage},null,8,["error-message"])],2)}const C=G({render:x,name:"VarRate",components:{VarIcon:E,VarFormDetails:L},directives:{Ripple:X},props:$,setup(e){var{form:a,bindForm:v}=P(),{errorMessage:d,validateWithTrigger:f,validate:n,resetValidation:o}=Z(),I=r=>{var{count:l,gap:t}=e;return{color:p(r).color,marginRight:r!==i(l)?N(t):0}},z=r=>{var{name:l,color:t}=p(r);return{[s("content")]:!0,[s("--disabled")]:(a==null?void 0:a.disabled.value)||e.disabled,[s("--error")]:d.value,[s("--primary")]:l!==e.emptyIcon&&!t}},p=r=>{var{modelValue:l,disabled:t,disabledColor:u,color:y,half:T,emptyColor:w,icon:W,halfIcon:q,emptyIcon:A}=e,g=y;return(t||a!=null&&a.disabled.value)&&(g=u),r<=i(l)?{color:g,name:W}:T&&r<=i(l)+.5?{color:g,name:q}:{color:t||a!=null&&a.disabled.value?u:w,name:A}},B=(r,l)=>{if(e.half){var{offsetWidth:t}=l.target;l.offsetX<=Math.floor(t/2)&&(r-=.5)}m(e["onUpdate:modelValue"],r)},S=()=>n(e.rules,i(e.modelValue)),D=()=>Y(()=>f(["onChange"],"onChange",e.rules,e.modelValue)),U=(r,l)=>{var{readonly:t,disabled:u,onChange:y}=e;t||u||a!=null&&a.disabled.value||a!=null&&a.readonly.value||(B(r,l),m(y,r),D())},V=()=>{m(e["onUpdate:modelValue"],0),o()},M={reset:V,validate:S,resetValidation:o};return m(v,M),{errorMessage:d,formDisabled:a==null?void 0:a.disabled,formReadonly:a==null?void 0:a.readonly,getStyle:I,getClass:z,getCurrentState:p,handleClick:U,reset:V,validate:S,resetValidation:o,toSizeUnit:N,toNumber:i,n:s}}});C.install=function(e){e.component(C.name,C)};export{C as R};
