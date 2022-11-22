import{a as _,o as A,u as M,v as X,x as J,a9 as K,r as Z,av as R,b as F,aw as U,n as L,ax as W,z as O,e as Q,C as Y,d as ee,s as te}from"./vue-router.esm-bundler.94bfc301.js";import{c as g}from"./_commonjsHelpers.b8add541.js";const v=e=>typeof e=="string",ne=e=>typeof e=="boolean",B=e=>typeof e=="number",xe=e=>Object.prototype.toString.call(e)==="[object Object]",je=e=>typeof e=="object"&&e!==null,I=e=>Array.isArray(e),Ae=e=>e?/^(http)|(\.*\/)/.test(e):!1,Oe=e=>e==null||e===""||Array.isArray(e)&&!e.length,re=e=>e==null?0:v(e)?(e=parseFloat(e),e=Number.isNaN(e)?0:e,e):ne(e)?Number(e):e,N=(e,t)=>{if(e.length){const n=e.indexOf(t);if(n>-1)return e.splice(n,1)}},Ee=(e,t=200)=>{let n,r=0;return function o(...a){const s=Date.now(),c=s-r;r||(r=s),n&&window.clearTimeout(n),c>=t?(e.apply(this,a),r=s):n=window.setTimeout(()=>{o.apply(this,a)},t-c)}},Te=()=>typeof window<"u",Le=e=>[...new Set(e)],oe=e=>e.replace(/([A-Z])/g," $1").trim().split(" ").join("-").toLowerCase();var Pe=e=>e==null?!1:e.startsWith("data:image")||/\.(png|jpg|gif|jpeg|svg|webp)$/.test(e),Se=e=>e==null?!1:e.startsWith("data:video")||/\.(mp4|webm|ogg)$/.test(e),Ce=e=>e,P=e=>Math.pow(e,3),_e=e=>e<.5?P(e*2)/2:1-P((1-e)*2)/2,Me=(e,t)=>e==null?t:e,ae=()=>typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:self,Re=function(e,t,n){if(e===void 0&&(e=""),n===void 0&&(n=""),e.length>=t)return e;var r=t-e.length,o=Math.floor(r/n.length);return n.repeat(o)+n.slice(0,r%n.length)+e};function Fe(e){var{left:t}=e.getBoundingClientRect();return t+(document.body.scrollLeft||document.documentElement.scrollLeft)}function ie(e){var t="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(t,0)}function se(e){var t="scrollLeft"in e?e.scrollLeft:e.pageXOffset;return Math.max(t,0)}function Ue(e){var{transform:t}=window.getComputedStyle(e);return+t.slice(t.lastIndexOf(",")+2,t.length-1)}function We(e){for(var t=e;t&&!(!t.parentNode||(t=t.parentNode,t===document.body||t===document.documentElement));){var n=/(scroll|auto)/,{overflowY:r,overflow:o}=window.getComputedStyle(t);if(n.test(r)||n.test(o))return t}return window}var V=e=>v(e)&&e.endsWith("rem"),ue=e=>v(e)&&e.endsWith("px")||B(e),ce=e=>v(e)&&e.endsWith("%"),H=e=>v(e)&&e.endsWith("vw"),k=e=>v(e)&&e.endsWith("vh"),le=e=>{if(B(e))return e;if(ue(e))return+e.replace("px","");if(H(e))return+e.replace("vw","")*window.innerWidth/100;if(k(e))return+e.replace("vh","")*window.innerHeight/100;if(V(e)){var t=+e.replace("rem",""),n=window.getComputedStyle(document.documentElement).fontSize;return t*parseFloat(n)}return v(e)?re(e):0},de=e=>{if(e!=null)return ce(e)||H(e)||k(e)||V(e)?e:le(e)+"px"},Be=function(e,t){if(t===void 0&&(t=1),e!=null){var n=de(e),r=n.match(/(vh|%|rem|px|vw)$/)[0];return""+parseFloat(n)*t+r}};function h(e){var t=ae();return t.requestAnimationFrame?t.requestAnimationFrame(e):t.setTimeout(e,16)}function Ie(e){h(()=>{h(e)})}function Ne(){return new Promise(e=>{h(()=>{h(e)})})}function Ve(e,t){var{top:n=0,left:r=0,duration:o=300,animation:a}=t,s=Date.now(),c=ie(e),d=se(e);return new Promise(i=>{var u=()=>{var p=(Date.now()-s)/o;if(p<1){var l=c+(n-c)*a(p),f=d+(r-d)*a(p);e.scrollTo(f,l),h(u)}else e.scrollTo(r,n),i()};h(u)})}function z(e){return Object.entries(e!=null?e:{}).reduce((t,n)=>{var[r,o]=n,a=r.startsWith("--")?r:"--"+oe(r);return t[a]=o,t},{})}function He(){var e=typeof window<"u";return e&&"ontouchstart"in window}var fe=["collect","clear"];function S(e,t,n,r,o,a,s){try{var c=e[a](s),d=c.value}catch(i){n(i);return}c.done?t(d):Promise.resolve(d).then(r,o)}function C(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function s(d){S(a,r,o,s,c,"next",d)}function c(d){S(a,r,o,s,c,"throw",d)}s(void 0)})}}function pe(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function ke(e,t){return Array.isArray(t)?t.reduce((n,r)=>(n[r]=e[r],n),{}):e[t]}function ve(e){var t=K(e),n=document.createElement("div");return document.body.appendChild(n),{instance:t.mount(n),unmount(){t.unmount(),document.body.removeChild(n)}}}function ze(e,t,n){t===void 0&&(t={}),n===void 0&&(n={});var r={setup(){return()=>W(e,y({},t,n))}},{unmount:o}=ve(r);return{unmountInstance:o}}function me(e){var t=[],n=r=>{if(r!=null&&r.component){n(r==null?void 0:r.component.subTree);return}Array.isArray(r==null?void 0:r.children)&&r.children.forEach(o=>{Y(o)&&(t.push(o),n(o))})};return n(e),t}function De(e){var t=Z([]),n=O(),r=()=>{var c=me(n.subTree);t.sort((d,i)=>c.indexOf(d.vnode)-c.indexOf(i.vnode))},o=c=>{t.push(c),r()},a=c=>{N(t,c)};R(e,{collect:o,clear:a,instances:t});var s=F(()=>t.length);return{length:s}}function $e(e){if(!D(e))return{index:null};var t=U(e),{collect:n,clear:r,instances:o}=t,a=O();A(()=>{L().then(()=>n(a))}),M(()=>{L().then(()=>r(a))});var s=F(()=>o.indexOf(a));return{index:s}}function Ge(e){var t=[],n=a=>{t.push(a)},r=a=>{N(t,a)},o=a=>{R(e,y({collect:n,clear:r},a))};return{childProviders:t,bindChildren:o}}function qe(e){if(!D(e))return{parentProvider:null,bindParent:null};var t=U(e),{collect:n,clear:r}=t,o=pe(t,fe),a=s=>{A(()=>n(s)),Q(()=>r(s))};return{parentProvider:o,bindParent:a}}function D(e){var t=O();return e in t.provides}function Xe(){var e=_(""),t=function(){var o=C(function*(a,s,c){if(!I(a)||!a.length)return!0;var d=yield Promise.all(a.map(i=>i(s,c)));return!d.some(i=>i!==!0?(e.value=String(i),!0):!1)});return function(s,c,d){return o.apply(this,arguments)}}(),n=()=>{e.value=""},r=function(){var o=C(function*(a,s,c,d,i){a.includes(s)&&(yield t(c,d,i))&&(e.value="")});return function(s,c,d,i,u){return o.apply(this,arguments)}}();return{errorMessage:e,validate:t,resetValidation:n,validateWithTrigger:r}}function Je(e){A(()=>{window.addEventListener("hashchange",e),window.addEventListener("popstate",e)}),M(()=>{window.removeEventListener("hashchange",e),window.removeEventListener("popstate",e)})}function Ke(){var e=_(!1);return X(()=>{e.value=!1}),J(()=>{e.value=!0}),{disabled:e}}function he(e){var t="var-"+e,n=o=>o?o.startsWith("--")?""+t+o:t+"__"+o:t,r=function(){for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return a.map(c=>{if(I(c)){var[d,i,u=null]=c;return d?i:u}return c})};return{n,classes:r}}function we(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(e)return e(...n)}var{n:ge}=he("style-provider");const m=ee({name:"VarStyleProvider",props:{styleVars:{type:Object,default:()=>({})},tag:{type:String,default:"div"}},setup(e,t){var{slots:n}=t;return()=>W(e.tag,{class:ge(),style:z(e.styleVars)},we(n.default))}});var j=[];function $(e){j.forEach(n=>document.documentElement.style.removeProperty(n)),j.length=0;var t=z(e!=null?e:{});Object.entries(t).forEach(n=>{var[r,o]=n;document.documentElement.style.setProperty(r,o),j.push(r)})}$.Component=m;m.install=function(e){e.component(m.name,m)};$.install=function(e){e.component(m.name,m)};var G={exports:{}};(function(e,t){(function(n,r){r()})(g,function(){function n(i,u){return typeof u>"u"?u={autoBom:!1}:typeof u!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(i.type)?new Blob(["\uFEFF",i],{type:i.type}):i}function r(i,u,p){var l=new XMLHttpRequest;l.open("GET",i),l.responseType="blob",l.onload=function(){d(l.response,u,p)},l.onerror=function(){console.error("could not download file")},l.send()}function o(i){var u=new XMLHttpRequest;u.open("HEAD",i,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function a(i){try{i.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),i.dispatchEvent(u)}}var s=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof g=="object"&&g.global===g?g:void 0,c=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),d=s.saveAs||(typeof window!="object"||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(i,u,p){var l=s.URL||s.webkitURL,f=document.createElement("a");u=u||i.name||"download",f.download=u,f.rel="noopener",typeof i=="string"?(f.href=i,f.origin===location.origin?a(f):o(f.href)?r(i,u,p):a(f,f.target="_blank")):(f.href=l.createObjectURL(i),setTimeout(function(){l.revokeObjectURL(f.href)},4e4),setTimeout(function(){a(f)},0))}:"msSaveOrOpenBlob"in navigator?function(i,u,p){if(u=u||i.name||"download",typeof i!="string")navigator.msSaveOrOpenBlob(n(i,p),u);else if(o(i))r(i,u,p);else{var l=document.createElement("a");l.href=i,l.target="_blank",setTimeout(function(){a(l)})}}:function(i,u,p,l){if(l=l||open("","_blank"),l&&(l.document.title=l.document.body.innerText="downloading..."),typeof i=="string")return r(i,u,p);var f=i.type==="application/octet-stream",q=/constructor/i.test(s.HTMLElement)||s.safari,E=/CriOS\/[\d]+/.test(navigator.userAgent);if((E||f&&q||c)&&typeof FileReader<"u"){var b=new FileReader;b.onloadend=function(){var w=b.result;w=E?w:w.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=w:location=w,l=null},b.readAsDataURL(i)}else{var T=s.URL||s.webkitURL,x=T.createObjectURL(i);l?l.location=x:location.href=x,l=null,setTimeout(function(){T.revokeObjectURL(x)},4e4)}});s.saveAs=d.saveAs=d,e.exports=d})})(G);function Ze(e){return Object.entries(e).reduce((t,[n,r])=>(t={...t,...r},t),{})}async function Qe(e){const t=Object.keys(e).reduce((a,s)=>(a+=`  '${s}': '${e[s]}',
`,a),""),{default:n}=await te(()=>import("./jszip.min.e72b04a6.js").then(a=>a.j),["jszip.min.e72b04a6.js","_commonjsHelpers.b8add541.js"],import.meta.url),r=new n;r.file("varlet-ute-theme.js",`export default {
${t}}`);const o=await r.generateAsync({type:"blob"});G.exports.saveAs(o,"varlet-ute-theme.zip")}export{se as A,Ve as B,_e as C,Ee as D,je as E,ie as F,De as G,$e as H,ne as I,Le as J,h as K,Ie as L,Re as M,Fe as N,Se as O,Pe as P,Ce as Q,Ue as R,$ as S,Me as a,we as b,he as c,Qe as d,v as e,Ze as f,B as g,Ae as h,Te as i,re as j,Oe as k,Ke as l,ze as m,xe as n,Je as o,ke as p,qe as q,Ge as r,He as s,de as t,Xe as u,Be as v,I as w,le as x,Ne as y,We as z};
