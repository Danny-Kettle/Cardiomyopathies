(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Su(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Au(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Pe(s)?Jv(s):Au(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Pe(t))return t;if(pe(t))return t}}const Qv=/;(?![^(]*\))/g,Yv=/:([^]+)/,Xv=/\/\*.*?\*\//gs;function Jv(t){const e={};return t.replace(Xv,"").split(Qv).forEach(n=>{if(n){const s=n.split(Yv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Xo(t){let e="";if(Pe(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=Xo(t[n]);s&&(e+=s+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ew=Su(Zv);function Yd(t){return!!t||t===""}function tw(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=gi(t[s],e[s]);return n}function gi(t,e){if(t===e)return!0;let n=gh(t),s=gh(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Hr(t),s=Hr(e),n||s)return t===e;if(n=H(t),s=H(e),n||s)return n&&s?tw(t,e):!1;if(n=pe(t),s=pe(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!gi(t[o],e[o]))return!1}}return String(t)===String(e)}function Cu(t,e){return t.findIndex(n=>gi(n,e))}const ph=t=>Pe(t)?t:t==null?"":H(t)||pe(t)&&(t.toString===Zd||!Y(t.toString))?JSON.stringify(t,Xd,2):String(t),Xd=(t,e)=>e&&e.__v_isRef?Xd(t,e.value):Ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:tr(e)?{[`Set(${e.size})`]:[...e.values()]}:pe(e)&&!H(e)&&!ep(e)?String(e):e,me={},Rs=[],Ct=()=>{},nw=()=>!1,sw=/^on[^a-z]/,Jo=t=>sw.test(t),ku=t=>t.startsWith("onUpdate:"),tt=Object.assign,Ru=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},rw=Object.prototype.hasOwnProperty,se=(t,e)=>rw.call(t,e),H=Array.isArray,Ds=t=>mi(t)==="[object Map]",tr=t=>mi(t)==="[object Set]",gh=t=>mi(t)==="[object Date]",Y=t=>typeof t=="function",Pe=t=>typeof t=="string",Hr=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",Jd=t=>pe(t)&&Y(t.then)&&Y(t.catch),Zd=Object.prototype.toString,mi=t=>Zd.call(t),iw=t=>mi(t).slice(8,-1),ep=t=>mi(t)==="[object Object]",Du=t=>Pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,no=Su(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ow=/-(\w)/g,Gt=Zo(t=>t.replace(ow,(e,n)=>n?n.toUpperCase():"")),aw=/\B([A-Z])/g,nr=Zo(t=>t.replace(aw,"-$1").toLowerCase()),ea=Zo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ha=Zo(t=>t?`on${ea(t)}`:""),Kr=(t,e)=>!Object.is(t,e),so=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},yo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},vo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let mh;const cw=()=>mh||(mh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Et;class tp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Et,!e&&Et&&(this.index=(Et.scopes||(Et.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Et;try{return Et=this,e()}finally{Et=n}}}on(){Et=this}off(){Et=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function uw(t){return new tp(t)}function lw(t,e=Et){e&&e.active&&e.effects.push(t)}function hw(){return Et}const Nu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},np=t=>(t.w&Pn)>0,sp=t=>(t.n&Pn)>0,fw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Pn},dw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];np(r)&&!sp(r)?r.delete(t):e[n++]=r,r.w&=~Pn,r.n&=~Pn}e.length=n}},kc=new WeakMap;let Tr=0,Pn=1;const Rc=30;let bt;const Zn=Symbol(""),Dc=Symbol("");class Pu{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,lw(this,s)}run(){if(!this.active)return this.fn();let e=bt,n=An;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=bt,bt=this,An=!0,Pn=1<<++Tr,Tr<=Rc?fw(this):yh(this),this.fn()}finally{Tr<=Rc&&dw(this),Pn=1<<--Tr,bt=this.parent,An=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){bt===this?this.deferStop=!0:this.active&&(yh(this),this.onStop&&this.onStop(),this.active=!1)}}function yh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let An=!0;const rp=[];function sr(){rp.push(An),An=!1}function rr(){const t=rp.pop();An=t===void 0?!0:t}function ut(t,e,n){if(An&&bt){let s=kc.get(t);s||kc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Nu()),ip(r)}}function ip(t,e){let n=!1;Tr<=Rc?sp(t)||(t.n|=Pn,n=!np(t)):n=!t.has(bt),n&&(t.add(bt),bt.deps.push(t))}function on(t,e,n,s,r,i){const o=kc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const c=Number(s);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?Du(n)&&a.push(o.get("length")):(a.push(o.get(Zn)),Ds(t)&&a.push(o.get(Dc)));break;case"delete":H(t)||(a.push(o.get(Zn)),Ds(t)&&a.push(o.get(Dc)));break;case"set":Ds(t)&&a.push(o.get(Zn));break}if(a.length===1)a[0]&&Nc(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Nc(Nu(c))}}function Nc(t,e){const n=H(t)?t:[...t];for(const s of n)s.computed&&vh(s);for(const s of n)s.computed||vh(s)}function vh(t,e){(t!==bt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const pw=Su("__proto__,__v_isRef,__isVue"),op=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Hr)),gw=Ou(),mw=Ou(!1,!0),yw=Ou(!0),wh=vw();function vw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=oe(this);for(let i=0,o=this.length;i<o;i++)ut(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(oe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){sr();const s=oe(this)[e].apply(this,n);return rr(),s}}),t}function ww(t){const e=oe(this);return ut(e,"has",t),e.hasOwnProperty(t)}function Ou(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Mw:hp:e?lp:up).get(s))return s;const o=H(s);if(!t){if(o&&se(wh,r))return Reflect.get(wh,r,i);if(r==="hasOwnProperty")return ww}const a=Reflect.get(s,r,i);return(Hr(r)?op.has(r):pw(r))||(t||ut(s,"get",r),e)?a:Ke(a)?o&&Du(r)?a:a.value:pe(a)?t?fp(a):yi(a):a}}const _w=ap(),Ew=ap(!0);function ap(t=!1){return function(n,s,r,i){let o=n[s];if(Vs(o)&&Ke(o)&&!Ke(r))return!1;if(!t&&(!wo(r)&&!Vs(r)&&(o=oe(o),r=oe(r)),!H(n)&&Ke(o)&&!Ke(r)))return o.value=r,!0;const a=H(n)&&Du(s)?Number(s)<n.length:se(n,s),c=Reflect.set(n,s,r,i);return n===oe(i)&&(a?Kr(r,o)&&on(n,"set",s,r):on(n,"add",s,r)),c}}function Iw(t,e){const n=se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&on(t,"delete",e,void 0),s}function Tw(t,e){const n=Reflect.has(t,e);return(!Hr(e)||!op.has(e))&&ut(t,"has",e),n}function bw(t){return ut(t,"iterate",H(t)?"length":Zn),Reflect.ownKeys(t)}const cp={get:gw,set:_w,deleteProperty:Iw,has:Tw,ownKeys:bw},Sw={get:yw,set(t,e){return!0},deleteProperty(t,e){return!0}},Aw=tt({},cp,{get:mw,set:Ew}),xu=t=>t,ta=t=>Reflect.getPrototypeOf(t);function Vi(t,e,n=!1,s=!1){t=t.__v_raw;const r=oe(t),i=oe(e);n||(e!==i&&ut(r,"get",e),ut(r,"get",i));const{has:o}=ta(r),a=s?xu:n?Uu:zr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Bi(t,e=!1){const n=this.__v_raw,s=oe(n),r=oe(t);return e||(t!==r&&ut(s,"has",t),ut(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ji(t,e=!1){return t=t.__v_raw,!e&&ut(oe(t),"iterate",Zn),Reflect.get(t,"size",t)}function _h(t){t=oe(t);const e=oe(this);return ta(e).has.call(e,t)||(e.add(t),on(e,"add",t,t)),this}function Eh(t,e){e=oe(e);const n=oe(this),{has:s,get:r}=ta(n);let i=s.call(n,t);i||(t=oe(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Kr(e,o)&&on(n,"set",t,e):on(n,"add",t,e),this}function Ih(t){const e=oe(this),{has:n,get:s}=ta(e);let r=n.call(e,t);r||(t=oe(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&on(e,"delete",t,void 0),i}function Th(){const t=oe(this),e=t.size!==0,n=t.clear();return e&&on(t,"clear",void 0,void 0),n}function qi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=oe(o),c=e?xu:t?Uu:zr;return!t&&ut(a,"iterate",Zn),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function Hi(t,e,n){return function(...s){const r=this.__v_raw,i=oe(r),o=Ds(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?xu:e?Uu:zr;return!e&&ut(i,"iterate",c?Dc:Zn),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function gn(t){return function(...e){return t==="delete"?!1:this}}function Cw(){const t={get(i){return Vi(this,i)},get size(){return ji(this)},has:Bi,add:_h,set:Eh,delete:Ih,clear:Th,forEach:qi(!1,!1)},e={get(i){return Vi(this,i,!1,!0)},get size(){return ji(this)},has:Bi,add:_h,set:Eh,delete:Ih,clear:Th,forEach:qi(!1,!0)},n={get(i){return Vi(this,i,!0)},get size(){return ji(this,!0)},has(i){return Bi.call(this,i,!0)},add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear"),forEach:qi(!0,!1)},s={get(i){return Vi(this,i,!0,!0)},get size(){return ji(this,!0)},has(i){return Bi.call(this,i,!0)},add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear"),forEach:qi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Hi(i,!1,!1),n[i]=Hi(i,!0,!1),e[i]=Hi(i,!1,!0),s[i]=Hi(i,!0,!0)}),[t,n,e,s]}const[kw,Rw,Dw,Nw]=Cw();function Mu(t,e){const n=e?t?Nw:Dw:t?Rw:kw;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(se(n,r)&&r in s?n:s,r,i)}const Pw={get:Mu(!1,!1)},Ow={get:Mu(!1,!0)},xw={get:Mu(!0,!1)},up=new WeakMap,lp=new WeakMap,hp=new WeakMap,Mw=new WeakMap;function Lw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fw(t){return t.__v_skip||!Object.isExtensible(t)?0:Lw(iw(t))}function yi(t){return Vs(t)?t:Lu(t,!1,cp,Pw,up)}function Uw(t){return Lu(t,!1,Aw,Ow,lp)}function fp(t){return Lu(t,!0,Sw,xw,hp)}function Lu(t,e,n,s,r){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Fw(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Ns(t){return Vs(t)?Ns(t.__v_raw):!!(t&&t.__v_isReactive)}function Vs(t){return!!(t&&t.__v_isReadonly)}function wo(t){return!!(t&&t.__v_isShallow)}function dp(t){return Ns(t)||Vs(t)}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}function Fu(t){return yo(t,"__v_skip",!0),t}const zr=t=>pe(t)?yi(t):t,Uu=t=>pe(t)?fp(t):t;function pp(t){An&&bt&&(t=oe(t),ip(t.dep||(t.dep=Nu())))}function gp(t,e){t=oe(t);const n=t.dep;n&&Nc(n)}function Ke(t){return!!(t&&t.__v_isRef===!0)}function _o(t){return mp(t,!1)}function $w(t){return mp(t,!0)}function mp(t,e){return Ke(t)?t:new Vw(t,e)}class Vw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:oe(e),this._value=n?e:zr(e)}get value(){return pp(this),this._value}set value(e){const n=this.__v_isShallow||wo(e)||Vs(e);e=n?e:oe(e),Kr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:zr(e),gp(this))}}function Ps(t){return Ke(t)?t.value:t}const Bw={get:(t,e,n)=>Ps(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ke(r)&&!Ke(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function yp(t){return Ns(t)?t:new Proxy(t,Bw)}var vp;class jw{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[vp]=!1,this._dirty=!0,this.effect=new Pu(e,()=>{this._dirty||(this._dirty=!0,gp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=oe(this);return pp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}vp="__v_isReadonly";function qw(t,e,n=!1){let s,r;const i=Y(t);return i?(s=t,r=Ct):(s=t.get,r=t.set),new jw(s,r,i||!r,n)}function Cn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){na(i,e,n)}return r}function kt(t,e,n,s){if(Y(t)){const i=Cn(t,e,n,s);return i&&Jd(i)&&i.catch(o=>{na(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(kt(t[i],e,n,s));return r}function na(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Cn(c,null,10,[t,o,a]);return}}Hw(t,n,r,s)}function Hw(t,e,n,s=!0){console.error(t)}let Wr=!1,Pc=!1;const qe=[];let Bt=0;const Os=[];let Zt=null,zn=0;const wp=Promise.resolve();let $u=null;function _p(t){const e=$u||wp;return t?e.then(this?t.bind(this):t):e}function Kw(t){let e=Bt+1,n=qe.length;for(;e<n;){const s=e+n>>>1;Gr(qe[s])<t?e=s+1:n=s}return e}function Vu(t){(!qe.length||!qe.includes(t,Wr&&t.allowRecurse?Bt+1:Bt))&&(t.id==null?qe.push(t):qe.splice(Kw(t.id),0,t),Ep())}function Ep(){!Wr&&!Pc&&(Pc=!0,$u=wp.then(Tp))}function zw(t){const e=qe.indexOf(t);e>Bt&&qe.splice(e,1)}function Ww(t){H(t)?Os.push(...t):(!Zt||!Zt.includes(t,t.allowRecurse?zn+1:zn))&&Os.push(t),Ep()}function bh(t,e=Wr?Bt+1:0){for(;e<qe.length;e++){const n=qe[e];n&&n.pre&&(qe.splice(e,1),e--,n())}}function Ip(t){if(Os.length){const e=[...new Set(Os)];if(Os.length=0,Zt){Zt.push(...e);return}for(Zt=e,Zt.sort((n,s)=>Gr(n)-Gr(s)),zn=0;zn<Zt.length;zn++)Zt[zn]();Zt=null,zn=0}}const Gr=t=>t.id==null?1/0:t.id,Gw=(t,e)=>{const n=Gr(t)-Gr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Tp(t){Pc=!1,Wr=!0,qe.sort(Gw);const e=Ct;try{for(Bt=0;Bt<qe.length;Bt++){const n=qe[Bt];n&&n.active!==!1&&Cn(n,null,14)}}finally{Bt=0,qe.length=0,Ip(),Wr=!1,$u=null,(qe.length||Os.length)&&Tp()}}function Qw(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||me;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[l]||me;d&&(r=n.map(g=>Pe(g)?g.trim():g)),h&&(r=n.map(vo))}let a,c=s[a=Ha(e)]||s[a=Ha(Gt(e))];!c&&i&&(c=s[a=Ha(nr(e))]),c&&kt(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,kt(u,t,6,r)}}function bp(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=u=>{const l=bp(u,e,!0);l&&(a=!0,tt(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(pe(t)&&s.set(t,null),null):(H(i)?i.forEach(c=>o[c]=null):tt(o,i),pe(t)&&s.set(t,o),o)}function sa(t,e){return!t||!Jo(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,nr(e))||se(t,e))}let ze=null,Sp=null;function Eo(t){const e=ze;return ze=t,Sp=t&&t.type.__scopeId||null,e}function It(t,e=ze,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Oh(-1);const i=Eo(e);let o;try{o=t(...r)}finally{Eo(i),s._d&&Oh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ka(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:g,ctx:v,inheritAttrs:E}=t;let R,C;const L=Eo(t);try{if(n.shapeFlag&4){const X=r||s;R=Vt(l.call(X,X,h,i,g,d,v)),C=c}else{const X=e;R=Vt(X.length>1?X(i,{attrs:c,slots:a,emit:u}):X(i,null)),C=e.props?c:Yw(c)}}catch(X){xr.length=0,na(X,t,1),R=Ee(On)}let D=R;if(C&&E!==!1){const X=Object.keys(C),{shapeFlag:ge}=D;X.length&&ge&7&&(o&&X.some(ku)&&(C=Xw(C,o)),D=Bs(D,C))}return n.dirs&&(D=Bs(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),R=D,Eo(L),R}const Yw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Jo(n))&&((e||(e={}))[n]=t[n]);return e},Xw=(t,e)=>{const n={};for(const s in t)(!ku(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Jw(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Sh(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==s[d]&&!sa(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Sh(s,o,u):!0:!!o;return!1}function Sh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!sa(n,i))return!0}return!1}function Zw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const e_=t=>t.__isSuspense;function t_(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Ww(t)}function ro(t,e){if(Re){let n=Re.provides;const s=Re.parent&&Re.parent.provides;s===n&&(n=Re.provides=Object.create(s)),n[t]=e}}function Ht(t,e,n=!1){const s=Re||ze;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Y(e)?e.call(s.proxy):e}}const Ki={};function Nr(t,e,n){return Ap(t,e,n)}function Ap(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=me){const a=hw()===(Re==null?void 0:Re.scope)?Re:null;let c,u=!1,l=!1;if(Ke(t)?(c=()=>t.value,u=wo(t)):Ns(t)?(c=()=>t,s=!0):H(t)?(l=!0,u=t.some(D=>Ns(D)||wo(D)),c=()=>t.map(D=>{if(Ke(D))return D.value;if(Ns(D))return Gn(D);if(Y(D))return Cn(D,a,2)})):Y(t)?e?c=()=>Cn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),kt(t,a,3,[d])}:c=Ct,e&&s){const D=c;c=()=>Gn(D())}let h,d=D=>{h=C.onStop=()=>{Cn(D,a,4)}},g;if(Xr)if(d=Ct,e?n&&kt(e,a,3,[c(),l?[]:void 0,d]):c(),r==="sync"){const D=G_();g=D.__watcherHandles||(D.__watcherHandles=[])}else return Ct;let v=l?new Array(t.length).fill(Ki):Ki;const E=()=>{if(C.active)if(e){const D=C.run();(s||u||(l?D.some((X,ge)=>Kr(X,v[ge])):Kr(D,v)))&&(h&&h(),kt(e,a,3,[D,v===Ki?void 0:l&&v[0]===Ki?[]:v,d]),v=D)}else C.run()};E.allowRecurse=!!e;let R;r==="sync"?R=E:r==="post"?R=()=>rt(E,a&&a.suspense):(E.pre=!0,a&&(E.id=a.uid),R=()=>Vu(E));const C=new Pu(c,R);e?n?E():v=C.run():r==="post"?rt(C.run.bind(C),a&&a.suspense):C.run();const L=()=>{C.stop(),a&&a.scope&&Ru(a.scope.effects,C)};return g&&g.push(L),L}function n_(t,e,n){const s=this.proxy,r=Pe(t)?t.includes(".")?Cp(s,t):()=>s[t]:t.bind(s,s);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Re;js(this);const a=Ap(r,i.bind(s),n);return o?js(o):es(),a}function Cp(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Gn(t,e){if(!pe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ke(t))Gn(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)Gn(t[n],e);else if(tr(t)||Ds(t))t.forEach(n=>{Gn(n,e)});else if(ep(t))for(const n in t)Gn(t[n],e);return t}function kp(t){return Y(t)?{setup:t,name:t.name}:t}const Pr=t=>!!t.type.__asyncLoader,Rp=t=>t.type.__isKeepAlive;function s_(t,e){Dp(t,"a",e)}function r_(t,e){Dp(t,"da",e)}function Dp(t,e,n=Re){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ra(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Rp(r.parent.vnode)&&i_(s,e,n,r),r=r.parent}}function i_(t,e,n,s){const r=ra(e,t,s,!0);Pp(()=>{Ru(s[e],r)},n)}function ra(t,e,n=Re,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;sr(),js(n);const a=kt(e,n,t,o);return es(),rr(),a});return s?r.unshift(i):r.push(i),i}}const dn=t=>(e,n=Re)=>(!Xr||t==="sp")&&ra(t,(...s)=>e(...s),n),o_=dn("bm"),Np=dn("m"),a_=dn("bu"),c_=dn("u"),u_=dn("bum"),Pp=dn("um"),l_=dn("sp"),h_=dn("rtg"),f_=dn("rtc");function d_(t,e=Re){ra("ec",t,e)}function MD(t,e){const n=ze;if(n===null)return t;const s=aa(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=me]=e[i];o&&(Y(o)&&(o={mounted:o,updated:o}),o.deep&&Gn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function Bn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(sr(),kt(c,n,8,[t.el,a,t,e]),rr())}}const Op="components";function xp(t,e){return g_(Op,t,!0,e)||t}const p_=Symbol();function g_(t,e,n=!0,s=!1){const r=ze||Re;if(r){const i=r.type;if(t===Op){const a=K_(i,!1);if(a&&(a===e||a===Gt(e)||a===ea(Gt(e))))return i}const o=Ah(r[t]||i[t],e)||Ah(r.appContext[t],e);return!o&&s?i:o}}function Ah(t,e){return t&&(t[e]||t[Gt(e)]||t[ea(Gt(e))])}function LD(t,e,n,s){let r;const i=n&&n[s];if(H(t)||Pe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(pe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function m_(t,e,n={},s,r){if(ze.isCE||ze.parent&&Pr(ze.parent)&&ze.parent.isCE)return e!=="default"&&(n.name=e),Ee("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),dt();const o=i&&Mp(i(n)),a=Yr(Tt,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Mp(t){return t.some(e=>To(e)?!(e.type===On||e.type===Tt&&!Mp(e.children)):!0)?t:null}const Oc=t=>t?zp(t)?aa(t)||t.proxy:Oc(t.parent):null,Or=tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Oc(t.parent),$root:t=>Oc(t.root),$emit:t=>t.emit,$options:t=>Bu(t),$forceUpdate:t=>t.f||(t.f=()=>Vu(t.update)),$nextTick:t=>t.n||(t.n=_p.bind(t.proxy)),$watch:t=>n_.bind(t)}),za=(t,e)=>t!==me&&!t.__isScriptSetup&&se(t,e),y_={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(za(s,e))return o[e]=1,s[e];if(r!==me&&se(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&se(u,e))return o[e]=3,i[e];if(n!==me&&se(n,e))return o[e]=4,n[e];xc&&(o[e]=0)}}const l=Or[e];let h,d;if(l)return e==="$attrs"&&ut(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==me&&se(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,se(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return za(r,e)?(r[e]=n,!0):s!==me&&se(s,e)?(s[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==me&&se(t,o)||za(e,o)||(a=i[0])&&se(a,o)||se(s,o)||se(Or,o)||se(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let xc=!0;function v_(t){const e=Bu(t),n=t.proxy,s=t.ctx;xc=!1,e.beforeCreate&&Ch(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:g,updated:v,activated:E,deactivated:R,beforeDestroy:C,beforeUnmount:L,destroyed:D,unmounted:X,render:ge,renderTracked:be,renderTriggered:Je,errorCaptured:nt,serverPrefetch:Lt,expose:ft,inheritAttrs:pn,components:Ft,directives:vs,filters:$n}=e;if(u&&w_(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const fe in o){const ue=o[fe];Y(ue)&&(s[fe]=ue.bind(n))}if(r){const fe=r.call(n,n);pe(fe)&&(t.data=yi(fe))}if(xc=!0,i)for(const fe in i){const ue=i[fe],vt=Y(ue)?ue.bind(n,n):Y(ue.get)?ue.get.bind(n,n):Ct,Vn=!Y(ue)&&Y(ue.set)?ue.set.bind(n):Ct,wt=it({get:vt,set:Vn});Object.defineProperty(s,fe,{enumerable:!0,configurable:!0,get:()=>wt.value,set:st=>wt.value=st})}if(a)for(const fe in a)Lp(a[fe],s,n,fe);if(c){const fe=Y(c)?c.call(n):c;Reflect.ownKeys(fe).forEach(ue=>{ro(ue,fe[ue])})}l&&Ch(l,t,"c");function Se(fe,ue){H(ue)?ue.forEach(vt=>fe(vt.bind(n))):ue&&fe(ue.bind(n))}if(Se(o_,h),Se(Np,d),Se(a_,g),Se(c_,v),Se(s_,E),Se(r_,R),Se(d_,nt),Se(f_,be),Se(h_,Je),Se(u_,L),Se(Pp,X),Se(l_,Lt),H(ft))if(ft.length){const fe=t.exposed||(t.exposed={});ft.forEach(ue=>{Object.defineProperty(fe,ue,{get:()=>n[ue],set:vt=>n[ue]=vt})})}else t.exposed||(t.exposed={});ge&&t.render===Ct&&(t.render=ge),pn!=null&&(t.inheritAttrs=pn),Ft&&(t.components=Ft),vs&&(t.directives=vs)}function w_(t,e,n=Ct,s=!1){H(t)&&(t=Mc(t));for(const r in t){const i=t[r];let o;pe(i)?"default"in i?o=Ht(i.from||r,i.default,!0):o=Ht(i.from||r):o=Ht(i),Ke(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Ch(t,e,n){kt(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Lp(t,e,n,s){const r=s.includes(".")?Cp(n,s):()=>n[s];if(Pe(t)){const i=e[t];Y(i)&&Nr(r,i)}else if(Y(t))Nr(r,t.bind(n));else if(pe(t))if(H(t))t.forEach(i=>Lp(i,e,n,s));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&Nr(r,i,t)}}function Bu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>Io(c,u,o,!0)),Io(c,e,o)),pe(e)&&i.set(e,c),c}function Io(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Io(t,i,n,!0),r&&r.forEach(o=>Io(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=__[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const __={data:kh,props:Hn,emits:Hn,methods:Hn,computed:Hn,beforeCreate:Ze,created:Ze,beforeMount:Ze,mounted:Ze,beforeUpdate:Ze,updated:Ze,beforeDestroy:Ze,beforeUnmount:Ze,destroyed:Ze,unmounted:Ze,activated:Ze,deactivated:Ze,errorCaptured:Ze,serverPrefetch:Ze,components:Hn,directives:Hn,watch:I_,provide:kh,inject:E_};function kh(t,e){return e?t?function(){return tt(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function E_(t,e){return Hn(Mc(t),Mc(e))}function Mc(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ze(t,e){return t?[...new Set([].concat(t,e))]:e}function Hn(t,e){return t?tt(tt(Object.create(null),t),e):e}function I_(t,e){if(!t)return e;if(!e)return t;const n=tt(Object.create(null),t);for(const s in e)n[s]=Ze(t[s],e[s]);return n}function T_(t,e,n,s=!1){const r={},i={};yo(i,oa,1),t.propsDefaults=Object.create(null),Fp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Uw(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function b_(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=oe(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(sa(t.emitsOptions,d))continue;const g=e[d];if(c)if(se(i,d))g!==i[d]&&(i[d]=g,u=!0);else{const v=Gt(d);r[v]=Lc(c,a,v,g,t,!1)}else g!==i[d]&&(i[d]=g,u=!0)}}}else{Fp(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!se(e,h)&&((l=nr(h))===h||!se(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=Lc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!se(e,h))&&(delete i[h],u=!0)}u&&on(t,"set","$attrs")}function Fp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(no(c))continue;const u=e[c];let l;r&&se(r,l=Gt(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:sa(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=oe(n),u=a||me;for(let l=0;l<i.length;l++){const h=i[l];n[h]=Lc(r,c,h,u[h],t,!se(u,h))}}return o}function Lc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Y(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(js(r),s=u[n]=c.call(null,e),es())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===nr(n))&&(s=!0))}return s}function Up(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const l=h=>{c=!0;const[d,g]=Up(h,e,!0);tt(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return pe(t)&&s.set(t,Rs),Rs;if(H(i))for(let l=0;l<i.length;l++){const h=Gt(i[l]);Rh(h)&&(o[h]=me)}else if(i)for(const l in i){const h=Gt(l);if(Rh(h)){const d=i[l],g=o[h]=H(d)||Y(d)?{type:d}:Object.assign({},d);if(g){const v=Ph(Boolean,g.type),E=Ph(String,g.type);g[0]=v>-1,g[1]=E<0||v<E,(v>-1||se(g,"default"))&&a.push(h)}}}const u=[o,a];return pe(t)&&s.set(t,u),u}function Rh(t){return t[0]!=="$"}function Dh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Nh(t,e){return Dh(t)===Dh(e)}function Ph(t,e){return H(e)?e.findIndex(n=>Nh(n,t)):Y(e)&&Nh(e,t)?0:-1}const $p=t=>t[0]==="_"||t==="$stable",ju=t=>H(t)?t.map(Vt):[Vt(t)],S_=(t,e,n)=>{if(e._n)return e;const s=It((...r)=>ju(e(...r)),n);return s._c=!1,s},Vp=(t,e,n)=>{const s=t._ctx;for(const r in t){if($p(r))continue;const i=t[r];if(Y(i))e[r]=S_(r,i,s);else if(i!=null){const o=ju(i);e[r]=()=>o}}},Bp=(t,e)=>{const n=ju(e);t.slots.default=()=>n},A_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=oe(e),yo(e,"_",n)):Vp(e,t.slots={})}else t.slots={},e&&Bp(t,e);yo(t.slots,oa,1)},C_=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=me;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(tt(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Vp(e,r)),o=e}else e&&(Bp(t,e),o={default:1});if(i)for(const a in r)!$p(a)&&!(a in o)&&delete r[a]};function jp(){return{app:null,config:{isNativeTag:nw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let k_=0;function R_(t,e){return function(s,r=null){Y(s)||(s=Object.assign({},s)),r!=null&&!pe(r)&&(r=null);const i=jp(),o=new Set;let a=!1;const c=i.app={_uid:k_++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Q_,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&Y(u.install)?(o.add(u),u.install(c,...l)):Y(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const d=Ee(s,r);return d.appContext=i,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,aa(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function Fc(t,e,n,s,r=!1){if(H(t)){t.forEach((d,g)=>Fc(d,e&&(H(e)?e[g]:e),n,s,r));return}if(Pr(s)&&!r)return;const i=s.shapeFlag&4?aa(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===me?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Pe(u)?(l[u]=null,se(h,u)&&(h[u]=null)):Ke(u)&&(u.value=null)),Y(c))Cn(c,a,12,[o,l]);else{const d=Pe(c),g=Ke(c);if(d||g){const v=()=>{if(t.f){const E=d?se(h,c)?h[c]:l[c]:c.value;r?H(E)&&Ru(E,i):H(E)?E.includes(i)||E.push(i):d?(l[c]=[i],se(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,se(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(l[t.k]=o))};o?(v.id=-1,rt(v,n)):v()}}}const rt=t_;function D_(t){return N_(t)}function N_(t,e){const n=cw();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:g=Ct,insertStaticContent:v}=t,E=(f,p,m,y=null,I=null,A=null,O=!1,S=null,k=!!p.dynamicChildren)=>{if(f===p)return;f&&!vr(f,p)&&(y=N(f),st(f,I,A,!0),f=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:T,ref:B,shapeFlag:F}=p;switch(T){case ia:R(f,p,m,y);break;case On:C(f,p,m,y);break;case io:f==null&&L(p,m,y,O);break;case Tt:Ft(f,p,m,y,I,A,O,S,k);break;default:F&1?ge(f,p,m,y,I,A,O,S,k):F&6?vs(f,p,m,y,I,A,O,S,k):(F&64||F&128)&&T.process(f,p,m,y,I,A,O,S,k,ne)}B!=null&&I&&Fc(B,f&&f.ref,A,p||f,!p)},R=(f,p,m,y)=>{if(f==null)s(p.el=a(p.children),m,y);else{const I=p.el=f.el;p.children!==f.children&&u(I,p.children)}},C=(f,p,m,y)=>{f==null?s(p.el=c(p.children||""),m,y):p.el=f.el},L=(f,p,m,y)=>{[f.el,f.anchor]=v(f.children,p,m,y,f.el,f.anchor)},D=({el:f,anchor:p},m,y)=>{let I;for(;f&&f!==p;)I=d(f),s(f,m,y),f=I;s(p,m,y)},X=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),r(f),f=m;r(p)},ge=(f,p,m,y,I,A,O,S,k)=>{O=O||p.type==="svg",f==null?be(p,m,y,I,A,O,S,k):Lt(f,p,I,A,O,S,k)},be=(f,p,m,y,I,A,O,S)=>{let k,T;const{type:B,props:F,shapeFlag:j,transition:W,dirs:Z}=f;if(k=f.el=o(f.type,A,F&&F.is,F),j&8?l(k,f.children):j&16&&nt(f.children,k,null,y,I,A&&B!=="foreignObject",O,S),Z&&Bn(f,null,y,"created"),Je(k,f,f.scopeId,O,y),F){for(const le in F)le!=="value"&&!no(le)&&i(k,le,null,F[le],A,f.children,y,I,x);"value"in F&&i(k,"value",null,F.value),(T=F.onVnodeBeforeMount)&&$t(T,y,f)}Z&&Bn(f,null,y,"beforeMount");const de=(!I||I&&!I.pendingBranch)&&W&&!W.persisted;de&&W.beforeEnter(k),s(k,p,m),((T=F&&F.onVnodeMounted)||de||Z)&&rt(()=>{T&&$t(T,y,f),de&&W.enter(k),Z&&Bn(f,null,y,"mounted")},I)},Je=(f,p,m,y,I)=>{if(m&&g(f,m),y)for(let A=0;A<y.length;A++)g(f,y[A]);if(I){let A=I.subTree;if(p===A){const O=I.vnode;Je(f,O,O.scopeId,O.slotScopeIds,I.parent)}}},nt=(f,p,m,y,I,A,O,S,k=0)=>{for(let T=k;T<f.length;T++){const B=f[T]=S?vn(f[T]):Vt(f[T]);E(null,B,p,m,y,I,A,O,S)}},Lt=(f,p,m,y,I,A,O)=>{const S=p.el=f.el;let{patchFlag:k,dynamicChildren:T,dirs:B}=p;k|=f.patchFlag&16;const F=f.props||me,j=p.props||me;let W;m&&jn(m,!1),(W=j.onVnodeBeforeUpdate)&&$t(W,m,p,f),B&&Bn(p,f,m,"beforeUpdate"),m&&jn(m,!0);const Z=I&&p.type!=="foreignObject";if(T?ft(f.dynamicChildren,T,S,m,y,Z,A):O||ue(f,p,S,null,m,y,Z,A,!1),k>0){if(k&16)pn(S,p,F,j,m,y,I);else if(k&2&&F.class!==j.class&&i(S,"class",null,j.class,I),k&4&&i(S,"style",F.style,j.style,I),k&8){const de=p.dynamicProps;for(let le=0;le<de.length;le++){const Ae=de[le],_t=F[Ae],_s=j[Ae];(_s!==_t||Ae==="value")&&i(S,Ae,_t,_s,I,f.children,m,y,x)}}k&1&&f.children!==p.children&&l(S,p.children)}else!O&&T==null&&pn(S,p,F,j,m,y,I);((W=j.onVnodeUpdated)||B)&&rt(()=>{W&&$t(W,m,p,f),B&&Bn(p,f,m,"updated")},y)},ft=(f,p,m,y,I,A,O)=>{for(let S=0;S<p.length;S++){const k=f[S],T=p[S],B=k.el&&(k.type===Tt||!vr(k,T)||k.shapeFlag&70)?h(k.el):m;E(k,T,B,null,y,I,A,O,!0)}},pn=(f,p,m,y,I,A,O)=>{if(m!==y){if(m!==me)for(const S in m)!no(S)&&!(S in y)&&i(f,S,m[S],null,O,p.children,I,A,x);for(const S in y){if(no(S))continue;const k=y[S],T=m[S];k!==T&&S!=="value"&&i(f,S,T,k,O,p.children,I,A,x)}"value"in y&&i(f,"value",m.value,y.value)}},Ft=(f,p,m,y,I,A,O,S,k)=>{const T=p.el=f?f.el:a(""),B=p.anchor=f?f.anchor:a("");let{patchFlag:F,dynamicChildren:j,slotScopeIds:W}=p;W&&(S=S?S.concat(W):W),f==null?(s(T,m,y),s(B,m,y),nt(p.children,m,B,I,A,O,S,k)):F>0&&F&64&&j&&f.dynamicChildren?(ft(f.dynamicChildren,j,m,I,A,O,S),(p.key!=null||I&&p===I.subTree)&&qp(f,p,!0)):ue(f,p,m,B,I,A,O,S,k)},vs=(f,p,m,y,I,A,O,S,k)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?I.ctx.activate(p,m,y,O,k):$n(p,m,y,I,A,O,k):mr(f,p,k)},$n=(f,p,m,y,I,A,O)=>{const S=f.component=V_(f,y,I);if(Rp(f)&&(S.ctx.renderer=ne),B_(S),S.asyncDep){if(I&&I.registerDep(S,Se),!f.el){const k=S.subTree=Ee(On);C(null,k,p,m)}return}Se(S,f,p,m,I,A,O)},mr=(f,p,m)=>{const y=p.component=f.component;if(Jw(f,p,m))if(y.asyncDep&&!y.asyncResolved){fe(y,p,m);return}else y.next=p,zw(y.update),y.update();else p.el=f.el,y.vnode=p},Se=(f,p,m,y,I,A,O)=>{const S=()=>{if(f.isMounted){let{next:B,bu:F,u:j,parent:W,vnode:Z}=f,de=B,le;jn(f,!1),B?(B.el=Z.el,fe(f,B,O)):B=Z,F&&so(F),(le=B.props&&B.props.onVnodeBeforeUpdate)&&$t(le,W,B,Z),jn(f,!0);const Ae=Ka(f),_t=f.subTree;f.subTree=Ae,E(_t,Ae,h(_t.el),N(_t),f,I,A),B.el=Ae.el,de===null&&Zw(f,Ae.el),j&&rt(j,I),(le=B.props&&B.props.onVnodeUpdated)&&rt(()=>$t(le,W,B,Z),I)}else{let B;const{el:F,props:j}=p,{bm:W,m:Z,parent:de}=f,le=Pr(p);if(jn(f,!1),W&&so(W),!le&&(B=j&&j.onVnodeBeforeMount)&&$t(B,de,p),jn(f,!0),F&&J){const Ae=()=>{f.subTree=Ka(f),J(F,f.subTree,f,I,null)};le?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ae()):Ae()}else{const Ae=f.subTree=Ka(f);E(null,Ae,m,y,f,I,A),p.el=Ae.el}if(Z&&rt(Z,I),!le&&(B=j&&j.onVnodeMounted)){const Ae=p;rt(()=>$t(B,de,Ae),I)}(p.shapeFlag&256||de&&Pr(de.vnode)&&de.vnode.shapeFlag&256)&&f.a&&rt(f.a,I),f.isMounted=!0,p=m=y=null}},k=f.effect=new Pu(S,()=>Vu(T),f.scope),T=f.update=()=>k.run();T.id=f.uid,jn(f,!0),T()},fe=(f,p,m)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,b_(f,p.props,y,m),C_(f,p.children,m),sr(),bh(),rr()},ue=(f,p,m,y,I,A,O,S,k=!1)=>{const T=f&&f.children,B=f?f.shapeFlag:0,F=p.children,{patchFlag:j,shapeFlag:W}=p;if(j>0){if(j&128){Vn(T,F,m,y,I,A,O,S,k);return}else if(j&256){vt(T,F,m,y,I,A,O,S,k);return}}W&8?(B&16&&x(T,I,A),F!==T&&l(m,F)):B&16?W&16?Vn(T,F,m,y,I,A,O,S,k):x(T,I,A,!0):(B&8&&l(m,""),W&16&&nt(F,m,y,I,A,O,S,k))},vt=(f,p,m,y,I,A,O,S,k)=>{f=f||Rs,p=p||Rs;const T=f.length,B=p.length,F=Math.min(T,B);let j;for(j=0;j<F;j++){const W=p[j]=k?vn(p[j]):Vt(p[j]);E(f[j],W,m,null,I,A,O,S,k)}T>B?x(f,I,A,!0,!1,F):nt(p,m,y,I,A,O,S,k,F)},Vn=(f,p,m,y,I,A,O,S,k)=>{let T=0;const B=p.length;let F=f.length-1,j=B-1;for(;T<=F&&T<=j;){const W=f[T],Z=p[T]=k?vn(p[T]):Vt(p[T]);if(vr(W,Z))E(W,Z,m,null,I,A,O,S,k);else break;T++}for(;T<=F&&T<=j;){const W=f[F],Z=p[j]=k?vn(p[j]):Vt(p[j]);if(vr(W,Z))E(W,Z,m,null,I,A,O,S,k);else break;F--,j--}if(T>F){if(T<=j){const W=j+1,Z=W<B?p[W].el:y;for(;T<=j;)E(null,p[T]=k?vn(p[T]):Vt(p[T]),m,Z,I,A,O,S,k),T++}}else if(T>j)for(;T<=F;)st(f[T],I,A,!0),T++;else{const W=T,Z=T,de=new Map;for(T=Z;T<=j;T++){const lt=p[T]=k?vn(p[T]):Vt(p[T]);lt.key!=null&&de.set(lt.key,T)}let le,Ae=0;const _t=j-Z+1;let _s=!1,hh=0;const yr=new Array(_t);for(T=0;T<_t;T++)yr[T]=0;for(T=W;T<=F;T++){const lt=f[T];if(Ae>=_t){st(lt,I,A,!0);continue}let Ut;if(lt.key!=null)Ut=de.get(lt.key);else for(le=Z;le<=j;le++)if(yr[le-Z]===0&&vr(lt,p[le])){Ut=le;break}Ut===void 0?st(lt,I,A,!0):(yr[Ut-Z]=T+1,Ut>=hh?hh=Ut:_s=!0,E(lt,p[Ut],m,null,I,A,O,S,k),Ae++)}const fh=_s?P_(yr):Rs;for(le=fh.length-1,T=_t-1;T>=0;T--){const lt=Z+T,Ut=p[lt],dh=lt+1<B?p[lt+1].el:y;yr[T]===0?E(null,Ut,m,dh,I,A,O,S,k):_s&&(le<0||T!==fh[le]?wt(Ut,m,dh,2):le--)}}},wt=(f,p,m,y,I=null)=>{const{el:A,type:O,transition:S,children:k,shapeFlag:T}=f;if(T&6){wt(f.component.subTree,p,m,y);return}if(T&128){f.suspense.move(p,m,y);return}if(T&64){O.move(f,p,m,ne);return}if(O===Tt){s(A,p,m);for(let F=0;F<k.length;F++)wt(k[F],p,m,y);s(f.anchor,p,m);return}if(O===io){D(f,p,m);return}if(y!==2&&T&1&&S)if(y===0)S.beforeEnter(A),s(A,p,m),rt(()=>S.enter(A),I);else{const{leave:F,delayLeave:j,afterLeave:W}=S,Z=()=>s(A,p,m),de=()=>{F(A,()=>{Z(),W&&W()})};j?j(A,Z,de):de()}else s(A,p,m)},st=(f,p,m,y=!1,I=!1)=>{const{type:A,props:O,ref:S,children:k,dynamicChildren:T,shapeFlag:B,patchFlag:F,dirs:j}=f;if(S!=null&&Fc(S,null,m,f,!0),B&256){p.ctx.deactivate(f);return}const W=B&1&&j,Z=!Pr(f);let de;if(Z&&(de=O&&O.onVnodeBeforeUnmount)&&$t(de,p,f),B&6)_(f.component,m,y);else{if(B&128){f.suspense.unmount(m,y);return}W&&Bn(f,null,p,"beforeUnmount"),B&64?f.type.remove(f,p,m,I,ne,y):T&&(A!==Tt||F>0&&F&64)?x(T,p,m,!1,!0):(A===Tt&&F&384||!I&&B&16)&&x(k,p,m),y&&ws(f)}(Z&&(de=O&&O.onVnodeUnmounted)||W)&&rt(()=>{de&&$t(de,p,f),W&&Bn(f,null,p,"unmounted")},m)},ws=f=>{const{type:p,el:m,anchor:y,transition:I}=f;if(p===Tt){$i(m,y);return}if(p===io){X(f);return}const A=()=>{r(m),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(f.shapeFlag&1&&I&&!I.persisted){const{leave:O,delayLeave:S}=I,k=()=>O(m,A);S?S(f.el,A,k):k()}else A()},$i=(f,p)=>{let m;for(;f!==p;)m=d(f),r(f),f=m;r(p)},_=(f,p,m)=>{const{bum:y,scope:I,update:A,subTree:O,um:S}=f;y&&so(y),I.stop(),A&&(A.active=!1,st(O,f,p,m)),S&&rt(S,p),rt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},x=(f,p,m,y=!1,I=!1,A=0)=>{for(let O=A;O<f.length;O++)st(f[O],p,m,y,I)},N=f=>f.shapeFlag&6?N(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),$=(f,p,m)=>{f==null?p._vnode&&st(p._vnode,null,null,!0):E(p._vnode||null,f,p,null,null,null,m),bh(),Ip(),p._vnode=f},ne={p:E,um:st,m:wt,r:ws,mt:$n,mc:nt,pc:ue,pbc:ft,n:N,o:t};let _e,J;return e&&([_e,J]=e(ne)),{render:$,hydrate:_e,createApp:R_($,_e)}}function jn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function qp(t,e,n=!1){const s=t.children,r=e.children;if(H(s)&&H(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=vn(r[i]),a.el=o.el),n||qp(o,a)),a.type===ia&&(a.el=o.el)}}function P_(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const O_=t=>t.__isTeleport,Tt=Symbol(void 0),ia=Symbol(void 0),On=Symbol(void 0),io=Symbol(void 0),xr=[];let St=null;function dt(t=!1){xr.push(St=t?null:[])}function x_(){xr.pop(),St=xr[xr.length-1]||null}let Qr=1;function Oh(t){Qr+=t}function Hp(t){return t.dynamicChildren=Qr>0?St||Rs:null,x_(),Qr>0&&St&&St.push(t),t}function qn(t,e,n,s,r,i){return Hp(he(t,e,n,s,r,i,!0))}function Yr(t,e,n,s,r){return Hp(Ee(t,e,n,s,r,!0))}function To(t){return t?t.__v_isVNode===!0:!1}function vr(t,e){return t.type===e.type&&t.key===e.key}const oa="__vInternal",Kp=({key:t})=>t??null,oo=({ref:t,ref_key:e,ref_for:n})=>t!=null?Pe(t)||Ke(t)||Y(t)?{i:ze,r:t,k:e,f:!!n}:t:null;function he(t,e=null,n=null,s=0,r=null,i=t===Tt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Kp(e),ref:e&&oo(e),scopeId:Sp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ze};return a?(qu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Pe(n)?8:16),Qr>0&&!o&&St&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&St.push(c),c}const Ee=M_;function M_(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===p_)&&(t=On),To(t)){const a=Bs(t,e,!0);return n&&qu(a,n),Qr>0&&!i&&St&&(a.shapeFlag&6?St[St.indexOf(t)]=a:St.push(a)),a.patchFlag|=-2,a}if(z_(t)&&(t=t.__vccOpts),e){e=L_(e);let{class:a,style:c}=e;a&&!Pe(a)&&(e.class=Xo(a)),pe(c)&&(dp(c)&&!H(c)&&(c=tt({},c)),e.style=Au(c))}const o=Pe(t)?1:e_(t)?128:O_(t)?64:pe(t)?4:Y(t)?2:0;return he(t,e,n,s,r,o,i,!0)}function L_(t){return t?dp(t)||oa in t?tt({},t):t:null}function Bs(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?F_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Kp(a),ref:e&&e.ref?n&&r?H(r)?r.concat(oo(e)):[r,oo(e)]:oo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Tt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Bs(t.ssContent),ssFallback:t.ssFallback&&Bs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Jt(t=" ",e=0){return Ee(ia,null,t,e)}function FD(t,e){const n=Ee(io,null,t);return n.staticCount=e,n}function Es(t="",e=!1){return e?(dt(),Yr(On,null,t)):Ee(On,null,t)}function Vt(t){return t==null||typeof t=="boolean"?Ee(On):H(t)?Ee(Tt,null,t.slice()):typeof t=="object"?vn(t):Ee(ia,null,String(t))}function vn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Bs(t)}function qu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),qu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(oa in e)?e._ctx=ze:r===3&&ze&&(ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:ze},n=32):(e=String(e),s&64?(n=16,e=[Jt(e)]):n=8);t.children=e,t.shapeFlag|=n}function F_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Xo([e.class,s.class]));else if(r==="style")e.style=Au([e.style,s.style]);else if(Jo(r)){const i=e[r],o=s[r];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function $t(t,e,n,s=null){kt(t,e,7,[n,s])}const U_=jp();let $_=0;function V_(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||U_,i={uid:$_++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new tp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Up(s,r),emitsOptions:bp(s,r),emit:null,emitted:null,propsDefaults:me,inheritAttrs:s.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Qw.bind(null,i),t.ce&&t.ce(i),i}let Re=null;const js=t=>{Re=t,t.scope.on()},es=()=>{Re&&Re.scope.off(),Re=null};function zp(t){return t.vnode.shapeFlag&4}let Xr=!1;function B_(t,e=!1){Xr=e;const{props:n,children:s}=t.vnode,r=zp(t);T_(t,n,r,e),A_(t,s);const i=r?j_(t,e):void 0;return Xr=!1,i}function j_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Fu(new Proxy(t.ctx,y_));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?H_(t):null;js(t),sr();const i=Cn(s,t,0,[t.props,r]);if(rr(),es(),Jd(i)){if(i.then(es,es),e)return i.then(o=>{xh(t,o,e)}).catch(o=>{na(o,t,0)});t.asyncDep=i}else xh(t,i,e)}else Wp(t,e)}function xh(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=yp(e)),Wp(t,n)}let Mh;function Wp(t,e,n){const s=t.type;if(!t.render){if(!e&&Mh&&!s.render){const r=s.template||Bu(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=tt(tt({isCustomElement:i,delimiters:a},o),c);s.render=Mh(r,u)}}t.render=s.render||Ct}js(t),sr(),v_(t),rr(),es()}function q_(t){return new Proxy(t.attrs,{get(e,n){return ut(t,"get","$attrs"),e[n]}})}function H_(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=q_(t))},slots:t.slots,emit:t.emit,expose:e}}function aa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(yp(Fu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Or)return Or[n](t)},has(e,n){return n in e||n in Or}}))}function K_(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function z_(t){return Y(t)&&"__vccOpts"in t}const it=(t,e)=>qw(t,e,Xr);function Gp(t,e,n){const s=arguments.length;return s===2?pe(e)&&!H(e)?To(e)?Ee(t,null,[e]):Ee(t,e):Ee(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&To(n)&&(n=[n]),Ee(t,e,n))}const W_=Symbol(""),G_=()=>Ht(W_),Q_="3.2.47",Y_="http://www.w3.org/2000/svg",Wn=typeof document<"u"?document:null,Lh=Wn&&Wn.createElement("template"),X_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Wn.createElementNS(Y_,t):Wn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Wn.createTextNode(t),createComment:t=>Wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Lh.innerHTML=s?`<svg>${t}</svg>`:t;const a=Lh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function J_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Z_(t,e,n){const s=t.style,r=Pe(n);if(n&&!r){if(e&&!Pe(e))for(const i in e)n[i]==null&&Uc(s,i,"");for(const i in n)Uc(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Fh=/\s*!important$/;function Uc(t,e,n){if(H(n))n.forEach(s=>Uc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=e0(t,e);Fh.test(n)?t.setProperty(nr(s),n.replace(Fh,""),"important"):t[s]=n}}const Uh=["Webkit","Moz","ms"],Wa={};function e0(t,e){const n=Wa[e];if(n)return n;let s=Gt(e);if(s!=="filter"&&s in t)return Wa[e]=s;s=ea(s);for(let r=0;r<Uh.length;r++){const i=Uh[r]+s;if(i in t)return Wa[e]=i}return e}const $h="http://www.w3.org/1999/xlink";function t0(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS($h,e.slice(6,e.length)):t.setAttributeNS($h,e,n);else{const i=ew(e);n==null||i&&!Yd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function n0(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Yd(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function _n(t,e,n,s){t.addEventListener(e,n,s)}function s0(t,e,n,s){t.removeEventListener(e,n,s)}function r0(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=i0(e);if(s){const u=i[e]=c0(s,r);_n(t,a,u,c)}else o&&(s0(t,a,o,c),i[e]=void 0)}}const Vh=/(?:Once|Passive|Capture)$/;function i0(t){let e;if(Vh.test(t)){e={};let s;for(;s=t.match(Vh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):nr(t.slice(2)),e]}let Ga=0;const o0=Promise.resolve(),a0=()=>Ga||(o0.then(()=>Ga=0),Ga=Date.now());function c0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;kt(u0(s,n.value),e,5,[s])};return n.value=t,n.attached=a0(),n}function u0(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Bh=/^on[a-z]/,l0=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?J_(t,s,r):e==="style"?Z_(t,n,s):Jo(e)?ku(e)||r0(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):h0(t,e,s,r))?n0(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),t0(t,e,s,r))};function h0(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Bh.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Bh.test(e)&&Pe(n)?!1:e in t}const qs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>so(e,n):e};function f0(t){t.target.composing=!0}function jh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const UD={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=qs(r);const i=s||r.props&&r.props.type==="number";_n(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=vo(a)),t._assign(a)}),n&&_n(t,"change",()=>{t.value=t.value.trim()}),e||(_n(t,"compositionstart",f0),_n(t,"compositionend",jh),_n(t,"change",jh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=qs(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&vo(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},$D={deep:!0,created(t,e,n){t._assign=qs(n),_n(t,"change",()=>{const s=t._modelValue,r=Jr(t),i=t.checked,o=t._assign;if(H(s)){const a=Cu(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const u=[...s];u.splice(a,1),o(u)}}else if(tr(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(Qp(t,i))})},mounted:qh,beforeUpdate(t,e,n){t._assign=qs(n),qh(t,e,n)}};function qh(t,{value:e,oldValue:n},s){t._modelValue=e,H(e)?t.checked=Cu(e,s.props.value)>-1:tr(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=gi(e,Qp(t,!0)))}const VD={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=tr(e);_n(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?vo(Jr(o)):Jr(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=qs(s)},mounted(t,{value:e}){Hh(t,e)},beforeUpdate(t,e,n){t._assign=qs(n)},updated(t,{value:e}){Hh(t,e)}};function Hh(t,e){const n=t.multiple;if(!(n&&!H(e)&&!tr(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=Jr(i);if(n)H(e)?i.selected=Cu(e,o)>-1:i.selected=e.has(o);else if(gi(Jr(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Jr(t){return"_value"in t?t._value:t.value}function Qp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const d0=["ctrl","shift","alt","meta"],p0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>d0.some(n=>t[`${n}Key`]&&!e.includes(n))},BD=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=p0[e[r]];if(i&&i(n,e))return}return t(n,...s)},jD={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):wr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),wr(t,!0),s.enter(t)):s.leave(t,()=>{wr(t,!1)}):wr(t,e))},beforeUnmount(t,{value:e}){wr(t,e)}};function wr(t,e){t.style.display=e?t._vod:"none"}const g0=tt({patchProp:l0},X_);let Kh;function m0(){return Kh||(Kh=D_(g0))}const y0=(...t)=>{const e=m0().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=v0(s);if(!r)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function v0(t){return Pe(t)?document.querySelector(t):t}var w0=!1;/*!
  * pinia v2.0.36
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const _0=Symbol();var zh;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(zh||(zh={}));function E0(){const t=uw(!0),e=t.run(()=>_o({}));let n=[],s=[];const r=Fu({install(i){r._a=i,i.provide(_0,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!w0?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const bs=typeof window<"u";function I0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ae=Object.assign;function Qa(t,e){const n={};for(const s in e){const r=e[s];n[s]=Dt(r)?r.map(t):t(r)}return n}const Mr=()=>{},Dt=Array.isArray,T0=/\/$/,b0=t=>t.replace(T0,"");function Ya(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=k0(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function S0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Wh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function A0(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Hs(e.matched[s],n.matched[r])&&Yp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Yp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!C0(t[n],e[n]))return!1;return!0}function C0(t,e){return Dt(t)?Gh(t,e):Dt(e)?Gh(e,t):t===e}function Gh(t,e){return Dt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function k0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Zr;(function(t){t.pop="pop",t.push="push"})(Zr||(Zr={}));var Lr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Lr||(Lr={}));function R0(t){if(!t)if(bs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),b0(t)}const D0=/^[^#]+#/;function N0(t,e){return t.replace(D0,"#")+e}function P0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ca=()=>({left:window.pageXOffset,top:window.pageYOffset});function O0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=P0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Qh(t,e){return(history.state?history.state.position-e:-1)+t}const $c=new Map;function x0(t,e){$c.set(t,e)}function M0(t){const e=$c.get(t);return $c.delete(t),e}let L0=()=>location.protocol+"//"+location.host;function Xp(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Wh(c,"")}return Wh(n,t)+s+r}function F0(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=Xp(t,location),v=n.value,E=e.value;let R=0;if(d){if(n.value=g,e.value=d,o&&o===v){o=null;return}R=E?d.position-E.position:0}else s(g);r.forEach(C=>{C(n.value,v,{delta:R,type:Zr.pop,direction:R?R>0?Lr.forward:Lr.back:Lr.unknown})})};function c(){o=n.value}function u(d){r.push(d);const g=()=>{const v=r.indexOf(d);v>-1&&r.splice(v,1)};return i.push(g),g}function l(){const{history:d}=window;d.state&&d.replaceState(ae({},d.state,{scroll:ca()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Yh(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ca():null}}function U0(t){const{history:e,location:n}=window,s={value:Xp(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:L0()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),r.value=u}catch(g){console.error(g),n[l?"replace":"assign"](d)}}function o(c,u){const l=ae({},e.state,Yh(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=ae({},r.value,e.state,{forward:c,scroll:ca()});i(l.current,l,!0);const h=ae({},Yh(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function $0(t){t=R0(t);const e=U0(t),n=F0(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ae({location:"",base:t,go:s,createHref:N0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function V0(t){return typeof t=="string"||t&&typeof t=="object"}function Jp(t){return typeof t=="string"||typeof t=="symbol"}const mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Zp=Symbol("");var Xh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Xh||(Xh={}));function Ks(t,e){return ae(new Error,{type:t,[Zp]:!0},e)}function Yt(t,e){return t instanceof Error&&Zp in t&&(e==null||!!(t.type&e))}const Jh="[^/]+?",B0={sensitive:!1,strict:!1,start:!0,end:!0},j0=/[.+*?^${}()[\]/\\]/g;function q0(t,e){const n=ae({},B0,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const d=u[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(j0,"\\$&"),g+=40;else if(d.type===1){const{value:v,repeatable:E,optional:R,regexp:C}=d;i.push({name:v,repeatable:E,optional:R});const L=C||Jh;if(L!==Jh){g+=10;try{new RegExp(`(${L})`)}catch(X){throw new Error(`Invalid custom RegExp for param "${v}" (${L}): `+X.message)}}let D=E?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(D=R&&u.length<2?`(?:/${D})`:"/"+D),R&&(D+="?"),r+=D,g+=20,R&&(g+=-8),E&&(g+=-20),L===".*"&&(g+=-50)}l.push(g)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const g=l[d]||"",v=i[d-1];h[v.name]=g&&v.repeatable?g.split("/"):g}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const g of d)if(g.type===0)l+=g.value;else if(g.type===1){const{value:v,repeatable:E,optional:R}=g,C=v in u?u[v]:"";if(Dt(C)&&!E)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const L=Dt(C)?C.join("/"):C;if(!L)if(R)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);l+=L}}return l||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function H0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function K0(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=H0(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Zh(s))return 1;if(Zh(r))return-1}return r.length-s.length}function Zh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const z0={type:0,value:""},W0=/[a-zA-Z0-9_]/;function G0(t){if(!t)return[[]];if(t==="/")return[[z0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:W0.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function Q0(t,e,n){const s=q0(G0(t.path),n),r=ae(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Y0(t,e){const n=[],s=new Map;e=nf({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,d){const g=!d,v=X0(l);v.aliasOf=d&&d.record;const E=nf(e,l),R=[v];if("alias"in l){const D=typeof l.alias=="string"?[l.alias]:l.alias;for(const X of D)R.push(ae({},v,{components:d?d.record.components:v.components,path:X,aliasOf:d?d.record:v}))}let C,L;for(const D of R){const{path:X}=D;if(h&&X[0]!=="/"){const ge=h.record.path,be=ge[ge.length-1]==="/"?"":"/";D.path=h.record.path+(X&&be+X)}if(C=Q0(D,h,E),d?d.alias.push(C):(L=L||C,L!==C&&L.alias.push(C),g&&l.name&&!tf(C)&&o(l.name)),v.children){const ge=v.children;for(let be=0;be<ge.length;be++)i(ge[be],C,d&&d.children[be])}d=d||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&c(C)}return L?()=>{o(L)}:Mr}function o(l){if(Jp(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&K0(l,n[h])>=0&&(l.record.path!==n[h].record.path||!eg(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!tf(l)&&s.set(l.record.name,l)}function u(l,h){let d,g={},v,E;if("name"in l&&l.name){if(d=s.get(l.name),!d)throw Ks(1,{location:l});E=d.record.name,g=ae(ef(h.params,d.keys.filter(L=>!L.optional).map(L=>L.name)),l.params&&ef(l.params,d.keys.map(L=>L.name))),v=d.stringify(g)}else if("path"in l)v=l.path,d=n.find(L=>L.re.test(v)),d&&(g=d.parse(v),E=d.record.name);else{if(d=h.name?s.get(h.name):n.find(L=>L.re.test(h.path)),!d)throw Ks(1,{location:l,currentLocation:h});E=d.record.name,g=ae({},h.params,l.params),v=d.stringify(g)}const R=[];let C=d;for(;C;)R.unshift(C.record),C=C.parent;return{name:E,path:v,params:g,matched:R,meta:Z0(R)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function ef(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function X0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:J0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function J0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function tf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Z0(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function nf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function eg(t,e){return e.children.some(n=>n===t||eg(t,n))}const tg=/#/g,eE=/&/g,tE=/\//g,nE=/=/g,sE=/\?/g,ng=/\+/g,rE=/%5B/g,iE=/%5D/g,sg=/%5E/g,oE=/%60/g,rg=/%7B/g,aE=/%7C/g,ig=/%7D/g,cE=/%20/g;function Hu(t){return encodeURI(""+t).replace(aE,"|").replace(rE,"[").replace(iE,"]")}function uE(t){return Hu(t).replace(rg,"{").replace(ig,"}").replace(sg,"^")}function Vc(t){return Hu(t).replace(ng,"%2B").replace(cE,"+").replace(tg,"%23").replace(eE,"%26").replace(oE,"`").replace(rg,"{").replace(ig,"}").replace(sg,"^")}function lE(t){return Vc(t).replace(nE,"%3D")}function hE(t){return Hu(t).replace(tg,"%23").replace(sE,"%3F")}function fE(t){return t==null?"":hE(t).replace(tE,"%2F")}function bo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function dE(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(ng," "),o=i.indexOf("="),a=bo(o<0?i:i.slice(0,o)),c=o<0?null:bo(i.slice(o+1));if(a in e){let u=e[a];Dt(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function sf(t){let e="";for(let n in t){const s=t[n];if(n=lE(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Dt(s)?s.map(i=>i&&Vc(i)):[s&&Vc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function pE(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Dt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const gE=Symbol(""),rf=Symbol(""),ua=Symbol(""),og=Symbol(""),Bc=Symbol("");function _r(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function wn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ks(4,{from:n,to:e})):h instanceof Error?a(h):V0(h)?a(Ks(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Xa(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(mE(a)){const u=(a.__vccOpts||a)[e];u&&r.push(wn(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=I0(u)?u.default:u;i.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&wn(d,n,s,i,o)()}))}}return r}function mE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function of(t){const e=Ht(ua),n=Ht(og),s=it(()=>e.resolve(Ps(t.to))),r=it(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(Hs.bind(null,l));if(d>-1)return d;const g=af(c[u-2]);return u>1&&af(l)===g&&h[h.length-1].path!==g?h.findIndex(Hs.bind(null,c[u-2])):d}),i=it(()=>r.value>-1&&_E(n.params,s.value.params)),o=it(()=>r.value>-1&&r.value===n.matched.length-1&&Yp(n.params,s.value.params));function a(c={}){return wE(c)?e[Ps(t.replace)?"replace":"push"](Ps(t.to)).catch(Mr):Promise.resolve()}return{route:s,href:it(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const yE=kp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:of,setup(t,{slots:e}){const n=yi(of(t)),{options:s}=Ht(ua),r=it(()=>({[cf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[cf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Gp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),vE=yE;function wE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function _E(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Dt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function af(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const cf=(t,e,n)=>t??e??n,EE=kp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ht(Bc),r=it(()=>t.route||s.value),i=Ht(rf,0),o=it(()=>{let u=Ps(i);const{matched:l}=r.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=it(()=>r.value.matched[o.value]);ro(rf,it(()=>o.value+1)),ro(gE,a),ro(Bc,r);const c=_o();return Nr(()=>[c.value,a.value,t.name],([u,l,h],[d,g,v])=>{l&&(l.instances[h]=u,g&&g!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),u&&l&&(!g||!Hs(l,g)||!d)&&(l.enterCallbacks[h]||[]).forEach(E=>E(u))},{flush:"post"}),()=>{const u=r.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return uf(n.default,{Component:d,route:u});const g=h.props[l],v=g?g===!0?u.params:typeof g=="function"?g(u):g:null,R=Gp(d,ae({},v,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return uf(n.default,{Component:R,route:u})||R}}});function uf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const IE=EE;function TE(t){const e=Y0(t.routes,t),n=t.parseQuery||dE,s=t.stringifyQuery||sf,r=t.history,i=_r(),o=_r(),a=_r(),c=$w(mn);let u=mn;bs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Qa.bind(null,_=>""+_),h=Qa.bind(null,fE),d=Qa.bind(null,bo);function g(_,x){let N,$;return Jp(_)?(N=e.getRecordMatcher(_),$=x):$=_,e.addRoute($,N)}function v(_){const x=e.getRecordMatcher(_);x&&e.removeRoute(x)}function E(){return e.getRoutes().map(_=>_.record)}function R(_){return!!e.getRecordMatcher(_)}function C(_,x){if(x=ae({},x||c.value),typeof _=="string"){const f=Ya(n,_,x.path),p=e.resolve({path:f.path},x),m=r.createHref(f.fullPath);return ae(f,p,{params:d(p.params),hash:bo(f.hash),redirectedFrom:void 0,href:m})}let N;if("path"in _)N=ae({},_,{path:Ya(n,_.path,x.path).path});else{const f=ae({},_.params);for(const p in f)f[p]==null&&delete f[p];N=ae({},_,{params:h(_.params)}),x.params=h(x.params)}const $=e.resolve(N,x),ne=_.hash||"";$.params=l(d($.params));const _e=S0(s,ae({},_,{hash:uE(ne),path:$.path})),J=r.createHref(_e);return ae({fullPath:_e,hash:ne,query:s===sf?pE(_.query):_.query||{}},$,{redirectedFrom:void 0,href:J})}function L(_){return typeof _=="string"?Ya(n,_,c.value.path):ae({},_)}function D(_,x){if(u!==_)return Ks(8,{from:x,to:_})}function X(_){return Je(_)}function ge(_){return X(ae(L(_),{replace:!0}))}function be(_){const x=_.matched[_.matched.length-1];if(x&&x.redirect){const{redirect:N}=x;let $=typeof N=="function"?N(_):N;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=L($):{path:$},$.params={}),ae({query:_.query,hash:_.hash,params:"path"in $?{}:_.params},$)}}function Je(_,x){const N=u=C(_),$=c.value,ne=_.state,_e=_.force,J=_.replace===!0,f=be(N);if(f)return Je(ae(L(f),{state:typeof f=="object"?ae({},ne,f.state):ne,force:_e,replace:J}),x||N);const p=N;p.redirectedFrom=x;let m;return!_e&&A0(s,$,N)&&(m=Ks(16,{to:p,from:$}),Vn($,$,!0,!1)),(m?Promise.resolve(m):Lt(p,$)).catch(y=>Yt(y)?Yt(y,2)?y:vt(y):fe(y,p,$)).then(y=>{if(y){if(Yt(y,2))return Je(ae({replace:J},L(y.to),{state:typeof y.to=="object"?ae({},ne,y.to.state):ne,force:_e}),x||p)}else y=pn(p,$,!0,J,ne);return ft(p,$,y),y})}function nt(_,x){const N=D(_,x);return N?Promise.reject(N):Promise.resolve()}function Lt(_,x){let N;const[$,ne,_e]=bE(_,x);N=Xa($.reverse(),"beforeRouteLeave",_,x);for(const f of $)f.leaveGuards.forEach(p=>{N.push(wn(p,_,x))});const J=nt.bind(null,_,x);return N.push(J),Is(N).then(()=>{N=[];for(const f of i.list())N.push(wn(f,_,x));return N.push(J),Is(N)}).then(()=>{N=Xa(ne,"beforeRouteUpdate",_,x);for(const f of ne)f.updateGuards.forEach(p=>{N.push(wn(p,_,x))});return N.push(J),Is(N)}).then(()=>{N=[];for(const f of _.matched)if(f.beforeEnter&&!x.matched.includes(f))if(Dt(f.beforeEnter))for(const p of f.beforeEnter)N.push(wn(p,_,x));else N.push(wn(f.beforeEnter,_,x));return N.push(J),Is(N)}).then(()=>(_.matched.forEach(f=>f.enterCallbacks={}),N=Xa(_e,"beforeRouteEnter",_,x),N.push(J),Is(N))).then(()=>{N=[];for(const f of o.list())N.push(wn(f,_,x));return N.push(J),Is(N)}).catch(f=>Yt(f,8)?f:Promise.reject(f))}function ft(_,x,N){for(const $ of a.list())$(_,x,N)}function pn(_,x,N,$,ne){const _e=D(_,x);if(_e)return _e;const J=x===mn,f=bs?history.state:{};N&&($||J?r.replace(_.fullPath,ae({scroll:J&&f&&f.scroll},ne)):r.push(_.fullPath,ne)),c.value=_,Vn(_,x,N,J),vt()}let Ft;function vs(){Ft||(Ft=r.listen((_,x,N)=>{if(!$i.listening)return;const $=C(_),ne=be($);if(ne){Je(ae(ne,{replace:!0}),$).catch(Mr);return}u=$;const _e=c.value;bs&&x0(Qh(_e.fullPath,N.delta),ca()),Lt($,_e).catch(J=>Yt(J,12)?J:Yt(J,2)?(Je(J.to,$).then(f=>{Yt(f,20)&&!N.delta&&N.type===Zr.pop&&r.go(-1,!1)}).catch(Mr),Promise.reject()):(N.delta&&r.go(-N.delta,!1),fe(J,$,_e))).then(J=>{J=J||pn($,_e,!1),J&&(N.delta&&!Yt(J,8)?r.go(-N.delta,!1):N.type===Zr.pop&&Yt(J,20)&&r.go(-1,!1)),ft($,_e,J)}).catch(Mr)}))}let $n=_r(),mr=_r(),Se;function fe(_,x,N){vt(_);const $=mr.list();return $.length?$.forEach(ne=>ne(_,x,N)):console.error(_),Promise.reject(_)}function ue(){return Se&&c.value!==mn?Promise.resolve():new Promise((_,x)=>{$n.add([_,x])})}function vt(_){return Se||(Se=!_,vs(),$n.list().forEach(([x,N])=>_?N(_):x()),$n.reset()),_}function Vn(_,x,N,$){const{scrollBehavior:ne}=t;if(!bs||!ne)return Promise.resolve();const _e=!N&&M0(Qh(_.fullPath,0))||($||!N)&&history.state&&history.state.scroll||null;return _p().then(()=>ne(_,x,_e)).then(J=>J&&O0(J)).catch(J=>fe(J,_,x))}const wt=_=>r.go(_);let st;const ws=new Set,$i={currentRoute:c,listening:!0,addRoute:g,removeRoute:v,hasRoute:R,getRoutes:E,resolve:C,options:t,push:X,replace:ge,go:wt,back:()=>wt(-1),forward:()=>wt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:mr.add,isReady:ue,install(_){const x=this;_.component("RouterLink",vE),_.component("RouterView",IE),_.config.globalProperties.$router=x,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Ps(c)}),bs&&!st&&c.value===mn&&(st=!0,X(r.location).catch(ne=>{}));const N={};for(const ne in mn)N[ne]=it(()=>c.value[ne]);_.provide(ua,x),_.provide(og,yi(N)),_.provide(Bc,c);const $=_.unmount;ws.add(_),_.unmount=function(){ws.delete(_),ws.size<1&&(u=mn,Ft&&Ft(),Ft=null,c.value=mn,st=!1,Se=!1),$()}}};return $i}function Is(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function bE(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Hs(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Hs(u,c))||r.push(c))}return[n,s,r]}function SE(){return Ht(ua)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},AE=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},cg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),s.push(n[l],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ag(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):AE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw new CE;const d=i<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const v=u<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class CE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kE=function(t){const e=ag(t);return cg.encodeByteArray(e,!0)},So=function(t){return kE(t).replace(/\./g,"")},ug=function(t){try{return cg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=()=>RE().__FIREBASE_DEFAULTS__,NE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ug(t[1]);return e&&JSON.parse(e)},Ku=()=>{try{return DE()||NE()||PE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lg=t=>{var e,n;return(n=(e=Ku())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hg=t=>{const e=lg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},OE=()=>{var t;return(t=Ku())===null||t===void 0?void 0:t.config},fg=t=>{var e;return(e=Ku())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[So(JSON.stringify(n)),So(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function LE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function dg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function FE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UE(){const t=Ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pg(){try{return typeof indexedDB=="object"}catch{return!1}}function gg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function $E(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="FirebaseError";class Mt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=VE,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hs.prototype.create)}}class hs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?BE(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Mt(r,a,s)}}function BE(t,e){return t.replace(jE,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const jE=/\{\$([^}]+)}/g;function qE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ao(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(lf(i)&&lf(o)){if(!Ao(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function lf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function br(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Sr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function HE(t,e){const n=new KE(t,e);return n.subscribe.bind(n)}class KE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");zE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ja),r.error===void 0&&(r.error=Ja),r.complete===void 0&&(r.complete=Ja);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ja(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE=1e3,GE=2,QE=4*60*60*1e3,YE=.5;function hf(t,e=WE,n=GE){const s=e*Math.pow(n,t),r=Math.round(YE*s*(Math.random()-.5)*2);return Math.min(QE,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t){return t&&t._delegate?t._delegate:t}class yt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new xE;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZE(e))try{this.getOrInitializeService({instanceIdentifier:Kn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kn){return this.instances.has(e)}getOptions(e=Kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:JE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Kn){return this.component?this.component.multipleInstances?e:Kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JE(t){return t===Kn?void 0:t}function ZE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new XE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const tI={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},nI=re.INFO,sI={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},rI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=sI[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class la{constructor(e){this.name=e,this._logLevel=nI,this._logHandler=rI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const iI=(t,e)=>e.some(n=>t instanceof n);let ff,df;function oI(){return ff||(ff=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aI(){return df||(df=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mg=new WeakMap,jc=new WeakMap,yg=new WeakMap,Za=new WeakMap,zu=new WeakMap;function cI(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(kn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mg.set(n,t)}).catch(()=>{}),zu.set(e,t),e}function uI(t){if(jc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});jc.set(t,e)}let qc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lI(t){qc=t(qc)}function hI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ec(this),e,...n);return yg.set(s,e.sort?e.sort():[e]),kn(s)}:aI().includes(t)?function(...e){return t.apply(ec(this),e),kn(mg.get(this))}:function(...e){return kn(t.apply(ec(this),e))}}function fI(t){return typeof t=="function"?hI(t):(t instanceof IDBTransaction&&uI(t),iI(t,oI())?new Proxy(t,qc):t)}function kn(t){if(t instanceof IDBRequest)return cI(t);if(Za.has(t))return Za.get(t);const e=fI(t);return e!==t&&(Za.set(t,e),zu.set(e,t)),e}const ec=t=>zu.get(t);function dI(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=kn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(kn(o.result),c.oldVersion,c.newVersion,kn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const pI=["get","getKey","getAll","getAllKeys","count"],gI=["put","add","delete","clear"],tc=new Map;function pf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tc.get(e))return tc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=gI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||pI.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return tc.set(e,i),i}lI(t=>({...t,get:(e,n,s)=>pf(e,n)||t.get(e,n,s),has:(e,n)=>!!pf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function yI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hc="@firebase/app",gf="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new la("@firebase/app"),vI="@firebase/app-compat",wI="@firebase/analytics-compat",_I="@firebase/analytics",EI="@firebase/app-check-compat",II="@firebase/app-check",TI="@firebase/auth",bI="@firebase/auth-compat",SI="@firebase/database",AI="@firebase/database-compat",CI="@firebase/functions",kI="@firebase/functions-compat",RI="@firebase/installations",DI="@firebase/installations-compat",NI="@firebase/messaging",PI="@firebase/messaging-compat",OI="@firebase/performance",xI="@firebase/performance-compat",MI="@firebase/remote-config",LI="@firebase/remote-config-compat",FI="@firebase/storage",UI="@firebase/storage-compat",$I="@firebase/firestore",VI="@firebase/firestore-compat",BI="firebase",jI="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="[DEFAULT]",qI={[Hc]:"fire-core",[vI]:"fire-core-compat",[_I]:"fire-analytics",[wI]:"fire-analytics-compat",[II]:"fire-app-check",[EI]:"fire-app-check-compat",[TI]:"fire-auth",[bI]:"fire-auth-compat",[SI]:"fire-rtdb",[AI]:"fire-rtdb-compat",[CI]:"fire-fn",[kI]:"fire-fn-compat",[RI]:"fire-iid",[DI]:"fire-iid-compat",[NI]:"fire-fcm",[PI]:"fire-fcm-compat",[OI]:"fire-perf",[xI]:"fire-perf-compat",[MI]:"fire-rc",[LI]:"fire-rc-compat",[FI]:"fire-gcs",[UI]:"fire-gcs-compat",[$I]:"fire-fst",[VI]:"fire-fst-compat","fire-js":"fire-js",[BI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new Map,zc=new Map;function HI(t,e){try{t.container.addComponent(e)}catch(n){ss.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nt(t){const e=t.name;if(zc.has(e))return ss.debug(`There were multiple attempts to register component ${e}.`),!1;zc.set(e,t);for(const n of Co.values())HI(n,t);return!0}function ir(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rn=new hs("app","Firebase",KI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=jI;function vg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Kc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Rn.create("bad-app-name",{appName:String(r)});if(n||(n=OE()),!n)throw Rn.create("no-options");const i=Co.get(r);if(i){if(Ao(n,i.options)&&Ao(s,i.config))return i;throw Rn.create("duplicate-app",{appName:r})}const o=new eI(r);for(const c of zc.values())o.addComponent(c);const a=new zI(n,s,o);return Co.set(r,a),a}function Wu(t=Kc){const e=Co.get(t);if(!e&&t===Kc)return vg();if(!e)throw Rn.create("no-app",{appName:t});return e}function ot(t,e,n){var s;let r=(s=qI[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ss.warn(a.join(" "));return}Nt(new yt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI="firebase-heartbeat-database",GI=1,ei="firebase-heartbeat-store";let nc=null;function wg(){return nc||(nc=dI(WI,GI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ei)}}}).catch(t=>{throw Rn.create("idb-open",{originalErrorMessage:t.message})})),nc}async function QI(t){try{return(await wg()).transaction(ei).objectStore(ei).get(_g(t))}catch(e){if(e instanceof Mt)ss.warn(e.message);else{const n=Rn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ss.warn(n.message)}}}async function mf(t,e){try{const s=(await wg()).transaction(ei,"readwrite");return await s.objectStore(ei).put(e,_g(t)),s.done}catch(n){if(n instanceof Mt)ss.warn(n.message);else{const s=Rn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ss.warn(s.message)}}}function _g(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=1024,XI=30*24*60*60*1e3;class JI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eT(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=yf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=XI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=yf(),{heartbeatsToSend:n,unsentEntries:s}=ZI(this._heartbeatsCache.heartbeats),r=So(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function yf(){return new Date().toISOString().substring(0,10)}function ZI(t,e=YI){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),vf(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),vf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class eT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pg()?gg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await QI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return mf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return mf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function vf(t){return So(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(t){Nt(new yt("platform-logger",e=>new mI(e),"PRIVATE")),Nt(new yt("heartbeat",e=>new JI(e),"PRIVATE")),ot(Hc,gf,t),ot(Hc,gf,"esm2017"),ot("fire-js","")}tT("");var nT="firebase",sT="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ot(nT,sT,"app");const rT=(t,e)=>e.some(n=>t instanceof n);let wf,_f;function iT(){return wf||(wf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oT(){return _f||(_f=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eg=new WeakMap,Wc=new WeakMap,Ig=new WeakMap,sc=new WeakMap,Gu=new WeakMap;function aT(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Dn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Eg.set(n,t)}).catch(()=>{}),Gu.set(e,t),e}function cT(t){if(Wc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Wc.set(t,e)}let Gc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ig.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uT(t){Gc=t(Gc)}function lT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(rc(this),e,...n);return Ig.set(s,e.sort?e.sort():[e]),Dn(s)}:oT().includes(t)?function(...e){return t.apply(rc(this),e),Dn(Eg.get(this))}:function(...e){return Dn(t.apply(rc(this),e))}}function hT(t){return typeof t=="function"?lT(t):(t instanceof IDBTransaction&&cT(t),rT(t,iT())?new Proxy(t,Gc):t)}function Dn(t){if(t instanceof IDBRequest)return aT(t);if(sc.has(t))return sc.get(t);const e=hT(t);return e!==t&&(sc.set(t,e),Gu.set(e,t)),e}const rc=t=>Gu.get(t);function fT(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Dn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Dn(o.result),c.oldVersion,c.newVersion,Dn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const dT=["get","getKey","getAll","getAllKeys","count"],pT=["put","add","delete","clear"],ic=new Map;function Ef(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ic.get(e))return ic.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=pT.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||dT.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return ic.set(e,i),i}uT(t=>({...t,get:(e,n,s)=>Ef(e,n)||t.get(e,n,s),has:(e,n)=>!!Ef(e,n)||t.has(e,n)}));const Tg="@firebase/installations",Qu="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=1e4,Sg=`w:${Qu}`,Ag="FIS_v2",gT="https://firebaseinstallations.googleapis.com/v1",mT=60*60*1e3,yT="installations",vT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},rs=new hs(yT,vT,wT);function Cg(t){return t instanceof Mt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg({projectId:t}){return`${gT}/projects/${t}/installations`}function Rg(t){return{token:t.token,requestStatus:2,expiresIn:ET(t.expiresIn),creationTime:Date.now()}}async function Dg(t,e){const s=(await e.json()).error;return rs.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Ng({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function _T(t,{refreshToken:e}){const n=Ng(t);return n.append("Authorization",IT(e)),n}async function Pg(t){const e=await t();return e.status>=500&&e.status<600?t():e}function ET(t){return Number(t.replace("s","000"))}function IT(t){return`${Ag} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TT({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=kg(t),r=Ng(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={fid:n,authVersion:Ag,appId:t.appId,sdkVersion:Sg},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Pg(()=>fetch(s,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Rg(u.authToken)}}else throw await Dg("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bT(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST=/^[cdef][\w-]{21}$/,Qc="";function AT(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=CT(t);return ST.test(n)?n:Qc}catch{return Qc}}function CT(t){return bT(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=new Map;function Mg(t,e){const n=ha(t);Lg(n,e),kT(n,e)}function Lg(t,e){const n=xg.get(t);if(n)for(const s of n)s(e)}function kT(t,e){const n=RT();n&&n.postMessage({key:t,fid:e}),DT()}let Qn=null;function RT(){return!Qn&&"BroadcastChannel"in self&&(Qn=new BroadcastChannel("[Firebase] FID Change"),Qn.onmessage=t=>{Lg(t.data.key,t.data.fid)}),Qn}function DT(){xg.size===0&&Qn&&(Qn.close(),Qn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT="firebase-installations-database",PT=1,is="firebase-installations-store";let oc=null;function Yu(){return oc||(oc=fT(NT,PT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(is)}}})),oc}async function ko(t,e){const n=ha(t),r=(await Yu()).transaction(is,"readwrite"),i=r.objectStore(is),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Mg(t,e.fid),e}async function Fg(t){const e=ha(t),s=(await Yu()).transaction(is,"readwrite");await s.objectStore(is).delete(e),await s.done}async function fa(t,e){const n=ha(t),r=(await Yu()).transaction(is,"readwrite"),i=r.objectStore(is),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&Mg(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xu(t){let e;const n=await fa(t.appConfig,s=>{const r=OT(s),i=xT(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===Qc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function OT(t){const e=t||{fid:AT(),registrationStatus:0};return Ug(e)}function xT(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(rs.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=MT(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:LT(t)}:{installationEntry:e}}async function MT(t,e){try{const n=await TT(t,e);return ko(t.appConfig,n)}catch(n){throw Cg(n)&&n.customData.serverCode===409?await Fg(t.appConfig):await ko(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function LT(t){let e=await If(t.appConfig);for(;e.registrationStatus===1;)await Og(100),e=await If(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Xu(t);return s||n}return e}function If(t){return fa(t,e=>{if(!e)throw rs.create("installation-not-found");return Ug(e)})}function Ug(t){return FT(t)?{fid:t.fid,registrationStatus:0}:t}function FT(t){return t.registrationStatus===1&&t.registrationTime+bg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UT({appConfig:t,heartbeatServiceProvider:e},n){const s=$T(t,n),r=_T(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={installation:{sdkVersion:Sg,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Pg(()=>fetch(s,a));if(c.ok){const u=await c.json();return Rg(u)}else throw await Dg("Generate Auth Token",c)}function $T(t,{fid:e}){return`${kg(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ju(t,e=!1){let n;const s=await fa(t.appConfig,i=>{if(!$g(i))throw rs.create("not-registered");const o=i.authToken;if(!e&&jT(o))return i;if(o.requestStatus===1)return n=VT(t,e),i;{if(!navigator.onLine)throw rs.create("app-offline");const a=HT(i);return n=BT(t,a),a}});return n?await n:s.authToken}async function VT(t,e){let n=await Tf(t.appConfig);for(;n.authToken.requestStatus===1;)await Og(100),n=await Tf(t.appConfig);const s=n.authToken;return s.requestStatus===0?Ju(t,e):s}function Tf(t){return fa(t,e=>{if(!$g(e))throw rs.create("not-registered");const n=e.authToken;return KT(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function BT(t,e){try{const n=await UT(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await ko(t.appConfig,s),n}catch(n){if(Cg(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Fg(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ko(t.appConfig,s)}throw n}}function $g(t){return t!==void 0&&t.registrationStatus===2}function jT(t){return t.requestStatus===2&&!qT(t)}function qT(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+mT}function HT(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function KT(t){return t.requestStatus===1&&t.requestTime+bg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zT(t){const e=t,{installationEntry:n,registrationPromise:s}=await Xu(e);return s?s.catch(console.error):Ju(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WT(t,e=!1){const n=t;return await GT(n),(await Ju(n,e)).token}async function GT(t){const{registrationPromise:e}=await Xu(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(t){if(!t||!t.options)throw ac("App Configuration");if(!t.name)throw ac("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ac(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ac(t){return rs.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="installations",YT="installations-internal",XT=t=>{const e=t.getProvider("app").getImmediate(),n=QT(e),s=ir(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},JT=t=>{const e=t.getProvider("app").getImmediate(),n=ir(e,Vg).getImmediate();return{getId:()=>zT(n),getToken:r=>WT(n,r)}};function ZT(){Nt(new yt(Vg,XT,"PUBLIC")),Nt(new yt(YT,JT,"PRIVATE"))}ZT();ot(Tg,Qu);ot(Tg,Qu,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf="analytics",eb="firebase_id",tb="origin",nb=60*1e3,sb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Zu="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new la("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},mt=new hs("analytics","Analytics",rb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t){if(!t.startsWith(Zu)){const e=mt.create("invalid-gtag-resource",{gtagURL:t});return at.warn(e.message),""}return t}function Bg(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function ob(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function ab(t,e){const n=ob("firebase-js-sdk-policy",{createScriptURL:ib}),s=document.createElement("script"),r=`${Zu}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function cb(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function ub(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await Bg(n)).find(u=>u.measurementId===r);c&&await e[c.appId]}}catch(a){at.error(a)}t("config",r,i)}async function lb(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Bg(n);for(const c of o){const u=a.find(h=>h.measurementId===c),l=u&&e[u.appId];if(l)i.push(l);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){at.error(i)}}function hb(t,e,n,s){async function r(i,...o){try{if(i==="event"){const[a,c]=o;await lb(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await ub(t,e,n,s,a,c)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,c,u]=o;t("get",a,c,u)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){at.error(a)}}return r}function fb(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=hb(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function db(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Zu)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=30,gb=1e3;class mb{constructor(e={},n=gb){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const jg=new mb;function yb(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function vb(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:yb(s)},i=sb.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw mt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function wb(t,e=jg,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw mt.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw mt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Ib;return setTimeout(async()=>{a.abort()},n!==void 0?n:nb),qg({appId:s,apiKey:r,measurementId:i},o,a,e)}async function qg(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=jg){var i;const{appId:o,measurementId:a}=t;try{await _b(s,e)}catch(c){if(a)return at.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await vb(t);return r.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!Eb(u)){if(r.deleteThrottleMetadata(o),a)return at.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const l=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?hf(n,r.intervalMillis,pb):hf(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return r.setThrottleMetadata(o,h),at.debug(`Calling attemptFetch again in ${l} millis`),qg(t,h,s,r)}}function _b(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(mt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Eb(t){if(!(t instanceof Mt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Ib{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Tb(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bb(){if(pg())try{await gg()}catch(t){return at.warn(mt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return at.warn(mt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Sb(t,e,n,s,r,i,o){var a;const c=wb(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&at.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>at.error(g)),e.push(c);const u=bb().then(g=>{if(g)return s.getId()}),[l,h]=await Promise.all([c,u]);db(i)||ab(i,l.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[tb]="firebase",d.update=!0,h!=null&&(d[eb]=h),r("config",l.measurementId,d),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e){this.app=e}_delete(){return delete Fr[this.app.options.appId],Promise.resolve()}}let Fr={},Sf=[];const Af={};let cc="dataLayer",Cb="gtag",Cf,Hg,kf=!1;function kb(){const t=[];if(dg()&&t.push("This is a browser extension environment."),$E()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=mt.create("invalid-analytics-context",{errorInfo:e});at.warn(n.message)}}function Rb(t,e,n){kb();const s=t.options.appId;if(!s)throw mt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)at.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw mt.create("no-api-key");if(Fr[s]!=null)throw mt.create("already-exists",{id:s});if(!kf){cb(cc);const{wrappedGtag:i,gtagCore:o}=fb(Fr,Sf,Af,cc,Cb);Hg=i,Cf=o,kf=!0}return Fr[s]=Sb(t,Sf,Af,e,Cf,cc,n),new Ab(t)}function Db(t,e,n,s){t=xe(t),Tb(Hg,Fr[t.app.options.appId],e,n,s).catch(r=>at.error(r))}const Rf="@firebase/analytics",Df="0.10.0";function Nb(){Nt(new yt(bf,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return Rb(s,r,n)},"PUBLIC")),Nt(new yt("analytics-internal",t,"PRIVATE")),ot(Rf,Df),ot(Rf,Df,"esm2017");function t(e){try{const n=e.getProvider(bf).getImmediate();return{logEvent:(s,r,i)=>Db(n,s,r,i)}}catch(n){throw mt.create("interop-component-reg-failed",{reason:n})}}}Nb();function el(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Kg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pb=Kg,zg=new hs("auth","Firebase",Kg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new la("@firebase/auth");function Ob(t,...e){Ro.logLevel<=re.WARN&&Ro.warn(`Auth (${or}): ${t}`,...e)}function ao(t,...e){Ro.logLevel<=re.ERROR&&Ro.error(`Auth (${or}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t,...e){throw tl(t,...e)}function Kt(t,...e){return tl(t,...e)}function xb(t,e,n){const s=Object.assign(Object.assign({},Pb()),{[e]:n});return new hs("auth","Firebase",s).create(e,{appName:t.name})}function tl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return zg.create(t,...e)}function q(t,e,...n){if(!t)throw tl(e,...n)}function en(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ao(e),new Error(e)}function an(t,e){t||en(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Mb(){return Nf()==="http:"||Nf()==="https:"}function Nf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mb()||dg()||"connection"in navigator)?navigator.onLine:!0}function Fb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n){this.shortDelay=e,this.longDelay=n,an(n>e,"Short delay should be less than long delay!"),this.isMobile=LE()||FE()}get(){return Lb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(t,e){an(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;en("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;en("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;en("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b=new wi(3e4,6e4);function fs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ds(t,e,n,s,r={}){return Gg(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=vi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Wg.fetch()(Qg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Gg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ub),e);try{const r=new Vb(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw zi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw zi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw zi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw zi(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xb(t,l,u);Pt(t,l)}}catch(r){if(r instanceof Mt)throw r;Pt(t,"network-request-failed",{message:String(r)})}}async function _i(t,e,n,s,r={}){const i=await ds(t,e,n,s,r);return"mfaPendingCredential"in i&&Pt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Qg(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?nl(t.config,r):`${t.config.apiScheme}://${r}`}class Vb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Kt(this.auth,"network-request-failed")),$b.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Kt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bb(t,e){return ds(t,"POST","/v1/accounts:delete",e)}async function jb(t,e){return ds(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qb(t,e=!1){const n=xe(t),s=await n.getIdToken(e),r=sl(s);q(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ur(uc(r.auth_time)),issuedAtTime:Ur(uc(r.iat)),expirationTime:Ur(uc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function uc(t){return Number(t)*1e3}function sl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ao("JWT malformed, contained fewer than 3 sections"),null;try{const r=ug(n);return r?JSON.parse(r):(ao("Failed to decode base64 JWT payload"),null)}catch(r){return ao("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Hb(t){const e=sl(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Mt&&Kb(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Kb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ur(this.lastLoginAt),this.creationTime=Ur(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(t){var e;const n=t.auth,s=await t.getIdToken(),r=await ti(t,jb(n,{idToken:s}));q(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Qb(i.providerUserInfo):[],a=Gb(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Yg(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Wb(t){const e=xe(t);await Do(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gb(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Qb(t){return t.map(e=>{var{providerId:n}=e,s=el(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yb(t,e){const n=await Gg(t,{},async()=>{const s=vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Qg(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Wg.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Yb(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ni;return s&&(q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(q(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ni,this.toJSON())}_performRefresh(){return en("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ts{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=el(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Yg(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ti(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qb(this,e)}reload(){return Wb(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ts(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Do(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ti(this,Bb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(u=n.createdAt)!==null&&u!==void 0?u:void 0,L=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:D,emailVerified:X,isAnonymous:ge,providerData:be,stsTokenManager:Je}=n;q(D&&Je,e,"internal-error");const nt=ni.fromJSON(this.name,Je);q(typeof D=="string",e,"internal-error"),yn(h,e.name),yn(d,e.name),q(typeof X=="boolean",e,"internal-error"),q(typeof ge=="boolean",e,"internal-error"),yn(g,e.name),yn(v,e.name),yn(E,e.name),yn(R,e.name),yn(C,e.name),yn(L,e.name);const Lt=new ts({uid:D,auth:e,email:d,emailVerified:X,displayName:h,isAnonymous:ge,photoURL:v,phoneNumber:g,tenantId:E,stsTokenManager:nt,createdAt:C,lastLoginAt:L});return be&&Array.isArray(be)&&(Lt.providerData=be.map(ft=>Object.assign({},ft))),R&&(Lt._redirectEventId=R),Lt}static async _fromIdTokenResponse(e,n,s=!1){const r=new ni;r.updateFromServerResponse(n);const i=new ts({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Do(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new Map;function tn(t){an(t instanceof Function,"Expected a class definition");let e=Pf.get(t);return e?(an(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xg.type="NONE";const Of=Xg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t,e,n){return`firebase:${t}:${e}:${n}`}class xs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=co(this.userKey,r.apiKey,i),this.fullPersistenceKey=co("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ts._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new xs(tn(Of),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||tn(Of);const o=co(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=ts._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new xs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new xs(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(em(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nm(e))return"Blackberry";if(sm(e))return"Webos";if(rl(e))return"Safari";if((e.includes("chrome/")||Zg(e))&&!e.includes("edge/"))return"Chrome";if(tm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Jg(t=Ye()){return/firefox\//i.test(t)}function rl(t=Ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zg(t=Ye()){return/crios\//i.test(t)}function em(t=Ye()){return/iemobile/i.test(t)}function tm(t=Ye()){return/android/i.test(t)}function nm(t=Ye()){return/blackberry/i.test(t)}function sm(t=Ye()){return/webos/i.test(t)}function da(t=Ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xb(t=Ye()){var e;return da(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Jb(){return UE()&&document.documentMode===10}function rm(t=Ye()){return da(t)||tm(t)||sm(t)||nm(t)||/windows phone/i.test(t)||em(t)}function Zb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(t,e=[]){let n;switch(t){case"Browser":n=xf(Ye());break;case"Worker":n=`${xf(Ye())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${or}/${s}`}async function om(t,e){return ds(t,"GET","/v2/recaptchaConfig",fs(t,e))}function Mf(t){return t!==void 0&&t.enterprise!==void 0}class am{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function cm(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Kt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",eS().appendChild(s)})}function tS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const nS="https://www.google.com/recaptcha/enterprise.js?render=",sS="recaptcha-enterprise",rS="NO_RECAPTCHA";class um{constructor(e){this.type=sS,this.auth=ps(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{om(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new am(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Mf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(rS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Mf(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}cm(nS+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function zs(t,e,n,s=!1){const r=new um(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lf(this),this.idTokenSubscription=new Lf(this),this.beforeStateQueue=new iS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Do(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xe(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tn(e))})}async initializeRecaptchaConfig(){const e=await om(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new am(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new um(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=im(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ob(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ps(t){return xe(t)}class Lf{constructor(e){this.auth=e,this.observer=null,this.addObserver=HE(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(t,e){const n=ir(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ao(i,e??{}))return r;Pt(r,"already-initialized")}return n.initialize({options:e})}function cS(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function uS(t,e,n){const s=ps(t);q(s._canInitEmulator,s,"emulator-config-failed"),q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=lm(e),{host:o,port:a}=lS(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||hS()}function lm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lS(t){const e=lm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Ff(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Ff(o)}}}function Ff(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return en("not implemented")}_getIdTokenResponse(e){return en("not implemented")}_linkToIdToken(e,n){return en("not implemented")}_getReauthenticationResolver(e){return en("not implemented")}}async function fS(t,e){return ds(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lc(t,e){return _i(t,"POST","/v1/accounts:signInWithPassword",fs(t,e))}async function hm(t,e){return ds(t,"POST","/v1/accounts:sendOobCode",fs(t,e))}async function dS(t,e){return hm(t,e)}async function hc(t,e){return hm(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pS(t,e){return _i(t,"POST","/v1/accounts:signInWithEmailLink",fs(t,e))}async function gS(t,e){return _i(t,"POST","/v1/accounts:signInWithEmailLink",fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends il{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new si(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new si(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await zs(e,s,"signInWithPassword");return lc(e,r)}else return lc(e,s).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await zs(e,s,"signInWithPassword");return lc(e,i)}else return Promise.reject(r)});case"emailLink":return pS(e,{email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return fS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gS(e,{idToken:n,email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(t,e){return _i(t,"POST","/v1/accounts:signInWithIdp",fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS="http://localhost";class os extends il{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new os(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=el(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new os(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ms(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ms(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ms(e,n)}buildRequest(){const e={requestUri:mS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vS(t){const e=br(Sr(t)).link,n=e?br(Sr(e)).deep_link_id:null,s=br(Sr(t)).deep_link_id;return(s?br(Sr(s)).link:null)||s||n||e||t}class ol{constructor(e){var n,s,r,i,o,a;const c=br(Sr(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=yS((r=c.mode)!==null&&r!==void 0?r:null);q(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=vS(e);try{return new ol(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.providerId=ar.PROVIDER_ID}static credential(e,n){return si._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ol.parseLink(n);return q(s,"argument-error"),si._fromEmailAndCode(e,s.code,s.tenantId)}}ar.PROVIDER_ID="password";ar.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ar.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends fm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Ei{constructor(){super("facebook.com")}static credential(e){return os._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.FACEBOOK_SIGN_IN_METHOD="facebook.com";En.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Ei{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return os._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return In.credential(n,s)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Ei{constructor(){super("github.com")}static credential(e){return os._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.GITHUB_SIGN_IN_METHOD="github.com";Tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Ei{constructor(){super("twitter.com")}static credential(e,n){return os._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return bn.credential(n,s)}catch{return null}}}bn.TWITTER_SIGN_IN_METHOD="twitter.com";bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fc(t,e){return _i(t,"POST","/v1/accounts:signUp",fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await ts._fromIdTokenResponse(e,s,r),o=Uf(s);return new as({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Uf(s);return new as({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Uf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No extends Mt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,No.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new No(e,n,s,r)}}function dm(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?No._fromErrorAndOperation(t,i,e,s):i})}async function wS(t,e,n=!1){const s=await ti(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return as._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _S(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await ti(t,dm(s,r,e,t),n);q(i.idToken,s,"internal-error");const o=sl(i.idToken);q(o,s,"internal-error");const{sub:a}=o;return q(t.uid===a,s,"user-mismatch"),as._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Pt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pm(t,e,n=!1){const s="signIn",r=await dm(t,s,e),i=await as._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function ES(t,e){return pm(ps(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t,e,n){var s;q(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),q(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(q(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(q(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qD(t,e,n){var s;const r=ps(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const o=await zs(r,i,"getOobCode",!0);n&&uo(r,o,n),await hc(r,o)}else n&&uo(r,i,n),await hc(r,i).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await zs(r,i,"getOobCode",!0);n&&uo(r,a,n),await hc(r,a)}else return Promise.reject(o)})}async function HD(t,e,n){var s;const r=ps(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const u=await zs(r,i,"signUpPassword");o=fc(r,u)}else o=fc(r,i).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await zs(r,i,"signUpPassword");return fc(r,l)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),c=await as._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function KD(t,e,n){return ES(xe(t),ar.credential(e,n))}async function zD(t,e){const n=xe(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&uo(n.auth,r,e);const{email:i}=await dS(n.auth,r);i!==t.email&&await t.reload()}function IS(t,e,n,s){return xe(t).onIdTokenChanged(e,n,s)}function TS(t,e,n){return xe(t).beforeAuthStateChanged(e,n)}function bS(t){return xe(t).signOut()}const Po="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Po,"1"),this.storage.removeItem(Po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(){const t=Ye();return rl(t)||da(t)}const AS=1e3,CS=10;class mm extends gm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=SS()&&Zb(),this.fallbackToPolling=rm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Jb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,CS):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},AS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mm.type="LOCAL";const kS=mm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym extends gm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ym.type="SESSION";const vm=ym;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new pa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await RS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=al("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return window}function NS(t){zt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function PS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xS(){return wm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m="firebaseLocalStorageDb",MS=1,Oo="firebaseLocalStorage",Em="fbase_key";class Ii{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ga(t,e){return t.transaction([Oo],e?"readwrite":"readonly").objectStore(Oo)}function LS(){const t=indexedDB.deleteDatabase(_m);return new Ii(t).toPromise()}function Xc(){const t=indexedDB.open(_m,MS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Oo,{keyPath:Em})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Oo)?e(s):(s.close(),await LS(),e(await Xc()))})})}async function $f(t,e,n){const s=ga(t,!0).put({[Em]:e,value:n});return new Ii(s).toPromise()}async function FS(t,e){const n=ga(t,!1).get(e),s=await new Ii(n).toPromise();return s===void 0?null:s.value}function Vf(t,e){const n=ga(t,!0).delete(e);return new Ii(n).toPromise()}const US=800,$S=3;class Im{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>$S)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pa._getInstance(xS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PS(),!this.activeServiceWorker)return;this.sender=new DS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xc();return await $f(e,Po,"1"),await Vf(e,Po),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>$f(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>FS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ga(r,!1).getAll();return new Ii(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),US)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Im.type="LOCAL";const VS=Im;new wi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(t,e){return e?tn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl extends il{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jS(t){return pm(t.auth,new cl(t),t.bypassAuthState)}function qS(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),_S(n,new cl(t),t.bypassAuthState)}async function HS(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),wS(n,new cl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jS;case"linkViaPopup":case"linkViaRedirect":return HS;case"reauthViaPopup":case"reauthViaRedirect":return qS;default:Pt(this.auth,"internal-error")}}resolve(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS=new wi(2e3,1e4);class Cs extends Tm{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Cs.currentPopupAction&&Cs.currentPopupAction.cancel(),Cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const e=al();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KS.get())};e()}}Cs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS="pendingRedirect",lo=new Map;class WS extends Tm{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=lo.get(this.auth._key());if(!e){try{const s=await GS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}lo.set(this.auth._key(),e)}return this.bypassAuthState||lo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GS(t,e){const n=XS(e),s=YS(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function QS(t,e){lo.set(t._key(),e)}function YS(t){return tn(t._redirectPersistence)}function XS(t){return co(zS,t.config.apiKey,t.name)}async function JS(t,e,n=!1){const s=ps(t),r=BS(s,e),o=await new WS(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=10*60*1e3;class eA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!bm(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Kt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ZS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bf(e))}saveEventToCache(e){this.cachedEventUids.add(Bf(e)),this.lastProcessedEventTime=Date.now()}}function Bf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function bm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nA(t,e={}){return ds(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rA=/^https?/;async function iA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nA(t);for(const n of e)try{if(oA(n))return}catch{}Pt(t,"unauthorized-domain")}function oA(t){const e=Yc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!rA.test(n))return!1;if(sA.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=new wi(3e4,6e4);function jf(){const t=zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cA(t){return new Promise((e,n)=>{var s,r,i;function o(){jf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jf(),n(Kt(t,"network-request-failed"))},timeout:aA.get()})}if(!((r=(s=zt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=zt().gapi)===null||i===void 0)&&i.load)o();else{const a=tS("iframefcb");return zt()[a]=()=>{gapi.load?o():n(Kt(t,"network-request-failed"))},cm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ho=null,e})}let ho=null;function uA(t){return ho=ho||cA(t),ho}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=new wi(5e3,15e3),hA="__/auth/iframe",fA="emulator/auth/iframe",dA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gA(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nl(e,fA):`https://${t.config.authDomain}/${hA}`,s={apiKey:e.apiKey,appName:t.name,v:or},r=pA.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${vi(s).slice(1)}`}async function mA(t){const e=await uA(t),n=zt().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:gA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dA,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Kt(t,"network-request-failed"),a=zt().setTimeout(()=>{i(o)},lA.get());function c(){zt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vA=500,wA=600,_A="_blank",EA="http://localhost";class qf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function IA(t,e,n,s=vA,r=wA){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},yA),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Ye().toLowerCase();n&&(a=Zg(u)?_A:n),Jg(u)&&(e=e||EA,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if(Xb(u)&&a!=="_self")return TA(e||"",a),new qf(null);const h=window.open(e||"",a,l);q(h,t,"popup-blocked");try{h.focus()}catch{}return new qf(h)}function TA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA="__/auth/handler",SA="emulator/auth/handler",AA=encodeURIComponent("fac");async function Hf(t,e,n,s,r,i){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:or,eventId:r};if(e instanceof fm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(i||{}))o[l]=h}if(e instanceof Ei){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await t._getAppCheckToken(),u=c?`#${AA}=${encodeURIComponent(c)}`:"";return`${CA(t)}?${vi(a).slice(1)}${u}`}function CA({config:t}){return t.emulator?nl(t,SA):`https://${t.authDomain}/${bA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="webStorageSupport";class kA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vm,this._completeRedirectFn=JS,this._overrideRedirectResult=QS}async _openPopup(e,n,s,r){var i;an((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Hf(e,n,s,Yc(),r);return IA(e,o,al())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Hf(e,n,s,Yc(),r);return NS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(an(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await mA(e),s=new eA(e);return n.register("authEvent",r=>(q(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dc,{type:dc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[dc];o!==void 0&&n(!!o),Pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=iA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rm()||rl()||da()}}const RA=kA;var Kf="@firebase/auth",zf="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function PA(t){Nt(new yt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),q(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:im(t)},u=new oS(s,r,i,c);return cS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Nt(new yt("auth-internal",e=>{const n=ps(e.getProvider("auth").getImmediate());return(s=>new DA(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ot(Kf,zf,NA(t)),ot(Kf,zf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=5*60,xA=fg("authIdTokenMaxAge")||OA;let Wf=null;const MA=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>xA)return;const r=n==null?void 0:n.token;Wf!==r&&(Wf=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function LA(t=Wu()){const e=ir(t,"auth");if(e.isInitialized())return e.getImmediate();const n=aS(t,{popupRedirectResolver:RA,persistence:[VS,kS,vm]}),s=fg("authTokenSyncURL");if(s){const i=MA(s);TS(n,i,()=>i(n.currentUser)),IS(n,o=>i(o))}const r=lg("auth");return r&&uS(n,`http://${r}`),n}PA("Browser");var FA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,ul=ul||{},z=FA||self;function xo(){}function ma(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ti(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function UA(t){return Object.prototype.hasOwnProperty.call(t,pc)&&t[pc]||(t[pc]=++$A)}var pc="closure_uid_"+(1e9*Math.random()>>>0),$A=0;function VA(t,e,n){return t.call.apply(t.bind,arguments)}function BA(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function We(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?We=VA:We=BA,We.apply(null,arguments)}function Wi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Le(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Fn(){this.s=this.s,this.o=this.o}var jA=0;Fn.prototype.s=!1;Fn.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),jA!=0)&&UA(this)};Fn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Sm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ll(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Gf(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ma(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Ge(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var qA=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",xo,e),z.removeEventListener("test",xo,e)}catch{}return t}();function Mo(t){return/^[\s\xa0]*$/.test(t)}var Qf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function gc(t,e){return t<e?-1:t>e?1:0}function ya(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function jt(t){return ya().indexOf(t)!=-1}function hl(t){return hl[" "](t),t}hl[" "]=xo;function Am(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var HA=jt("Opera"),Ws=jt("Trident")||jt("MSIE"),Cm=jt("Edge"),Jc=Cm||Ws,km=jt("Gecko")&&!(ya().toLowerCase().indexOf("webkit")!=-1&&!jt("Edge"))&&!(jt("Trident")||jt("MSIE"))&&!jt("Edge"),KA=ya().toLowerCase().indexOf("webkit")!=-1&&!jt("Edge");function Rm(){var t=z.document;return t?t.documentMode:void 0}var Lo;e:{var mc="",yc=function(){var t=ya();if(km)return/rv:([^\);]+)(\)|;)/.exec(t);if(Cm)return/Edge\/([\d\.]+)/.exec(t);if(Ws)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(KA)return/WebKit\/(\S+)/.exec(t);if(HA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(yc&&(mc=yc?yc[1]:""),Ws){var vc=Rm();if(vc!=null&&vc>parseFloat(mc)){Lo=String(vc);break e}}Lo=mc}var zA={};function WA(){return Am(zA,9,function(){let t=0;const e=Qf(String(Lo)).split("."),n=Qf("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=gc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||gc(r[2].length==0,i[2].length==0)||gc(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Zc;if(z.document&&Ws){var Yf=Rm();Zc=Yf||parseInt(Lo,10)||void 0}else Zc=void 0;var GA=Zc;function ri(t,e){if(Ge.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(km){e:{try{hl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:QA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ri.$.h.call(this)}}Le(ri,Ge);var QA={2:"touch",3:"pen",4:"mouse"};ri.prototype.h=function(){ri.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var bi="closure_listenable_"+(1e6*Math.random()|0),YA=0;function XA(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++YA,this.fa=this.ia=!1}function va(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function fl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Dm(t){const e={};for(const n in t)e[n]=t[n];return e}const Xf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nm(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Xf.length;i++)n=Xf[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function wa(t){this.src=t,this.g={},this.h=0}wa.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=tu(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new XA(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function eu(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Sm(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(va(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function tu(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var dl="closure_lm_"+(1e6*Math.random()|0),wc={};function Pm(t,e,n,s,r){if(s&&s.once)return xm(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Pm(t,e[i],n,s,r);return null}return n=ml(n),t&&t[bi]?t.O(e,n,Ti(s)?!!s.capture:!!s,r):Om(t,e,n,!1,s,r)}function Om(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ti(r)?!!r.capture:!!r,a=gl(t);if(a||(t[dl]=a=new wa(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=JA(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)qA||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Lm(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function JA(){function t(n){return e.call(t.src,t.listener,n)}const e=ZA;return t}function xm(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)xm(t,e[i],n,s,r);return null}return n=ml(n),t&&t[bi]?t.P(e,n,Ti(s)?!!s.capture:!!s,r):Om(t,e,n,!0,s,r)}function Mm(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Mm(t,e[i],n,s,r);else s=Ti(s)?!!s.capture:!!s,n=ml(n),t&&t[bi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=tu(i,n,s,r),-1<n&&(va(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=gl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=tu(e,n,s,r)),(n=-1<t?e[t]:null)&&pl(n))}function pl(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[bi])eu(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Lm(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=gl(e))?(eu(n,t),n.h==0&&(n.src=null,e[dl]=null)):va(t)}}}function Lm(t){return t in wc?wc[t]:wc[t]="on"+t}function ZA(t,e){if(t.fa)t=!0;else{e=new ri(e,this);var n=t.listener,s=t.la||t.src;t.ia&&pl(t),t=n.call(s,e)}return t}function gl(t){return t=t[dl],t instanceof wa?t:null}var _c="__closure_events_fn_"+(1e9*Math.random()>>>0);function ml(t){return typeof t=="function"?t:(t[_c]||(t[_c]=function(e){return t.handleEvent(e)}),t[_c])}function Me(){Fn.call(this),this.i=new wa(this),this.S=this,this.J=null}Le(Me,Fn);Me.prototype[bi]=!0;Me.prototype.removeEventListener=function(t,e,n,s){Mm(this,t,e,n,s)};function $e(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new Ge(e,t);else if(e instanceof Ge)e.target=e.target||t;else{var r=e;e=new Ge(s,t),Nm(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Gi(o,s,!0,e)&&r}if(o=e.g=t,r=Gi(o,s,!0,e)&&r,r=Gi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Gi(o,s,!1,e)&&r}Me.prototype.N=function(){if(Me.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)va(n[s]);delete t.g[e],t.h--}}this.J=null};Me.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Me.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Gi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&eu(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var yl=z.JSON.stringify;function eC(){var t=$m;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class tC{constructor(){this.h=this.g=null}add(e,n){const s=Fm.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Fm=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new nC,t=>t.reset());class nC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function sC(t){z.setTimeout(()=>{throw t},0)}function Um(t,e){nu||rC(),su||(nu(),su=!0),$m.add(t,e)}var nu;function rC(){var t=z.Promise.resolve(void 0);nu=function(){t.then(iC)}}var su=!1,$m=new tC;function iC(){for(var t;t=eC();){try{t.h.call(t.g)}catch(n){sC(n)}var e=Fm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}su=!1}function _a(t,e){Me.call(this),this.h=t||1,this.g=e||z,this.j=We(this.qb,this),this.l=Date.now()}Le(_a,Me);P=_a.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),$e(this,"tick"),this.ga&&(vl(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function vl(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){_a.$.N.call(this),vl(this),delete this.g};function wl(t,e,n){if(typeof t=="function")n&&(t=We(t,n));else if(t&&typeof t.handleEvent=="function")t=We(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function Vm(t){t.g=wl(()=>{t.g=null,t.i&&(t.i=!1,Vm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class oC extends Fn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Vm(this)}N(){super.N(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ii(t){Fn.call(this),this.h=t,this.g={}}Le(ii,Fn);var Jf=[];function Bm(t,e,n,s){Array.isArray(n)||(n&&(Jf[0]=n.toString()),n=Jf);for(var r=0;r<n.length;r++){var i=Pm(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function jm(t){fl(t.g,function(e,n){this.g.hasOwnProperty(n)&&pl(e)},t),t.g={}}ii.prototype.N=function(){ii.$.N.call(this),jm(this)};ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ea(){this.g=!0}Ea.prototype.Ea=function(){this.g=!1};function aC(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function cC(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ks(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+lC(t,n)+(s?" "+s:"")})}function uC(t,e){t.info(function(){return"TIMEOUT: "+e})}Ea.prototype.info=function(){};function lC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return yl(n)}catch{return e}}var gs={},Zf=null;function Ia(){return Zf=Zf||new Me}gs.Ta="serverreachability";function qm(t){Ge.call(this,gs.Ta,t)}Le(qm,Ge);function oi(t){const e=Ia();$e(e,new qm(e))}gs.STAT_EVENT="statevent";function Hm(t,e){Ge.call(this,gs.STAT_EVENT,t),this.stat=e}Le(Hm,Ge);function et(t){const e=Ia();$e(e,new Hm(e,t))}gs.Ua="timingevent";function Km(t,e){Ge.call(this,gs.Ua,t),this.size=e}Le(Km,Ge);function Si(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var Ta={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},zm={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function _l(){}_l.prototype.h=null;function ed(t){return t.h||(t.h=t.i())}function Wm(){}var Ai={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function El(){Ge.call(this,"d")}Le(El,Ge);function Il(){Ge.call(this,"c")}Le(Il,Ge);var ru;function ba(){}Le(ba,_l);ba.prototype.g=function(){return new XMLHttpRequest};ba.prototype.i=function(){return{}};ru=new ba;function Ci(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new ii(this),this.P=hC,t=Jc?125:void 0,this.V=new _a(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new Gm}function Gm(){this.i=null,this.g="",this.h=!1}var hC=45e3,iu={},Fo={};P=Ci.prototype;P.setTimeout=function(t){this.P=t};function ou(t,e,n){t.L=1,t.v=Aa(cn(e)),t.s=n,t.S=!0,Qm(t,null)}function Qm(t,e){t.G=Date.now(),ki(t),t.A=cn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),sy(n.i,"t",s),t.C=0,n=t.l.I,t.h=new Gm,t.g=by(t.l,n?e:null,!t.s),0<t.O&&(t.M=new oC(We(t.Pa,t,t.g),t.O)),Bm(t.U,t.g,"readystatechange",t.nb),e=t.I?Dm(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),oi(),aC(t.j,t.u,t.A,t.m,t.W,t.s)}P.nb=function(t){t=t.target;const e=this.M;e&&nn(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const l=nn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Jc||this.g&&(this.h.h||this.g.ja()||rd(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?oi(3):oi(2)),Sa(this);var n=this.g.da();this.aa=n;t:if(Ym(this)){var s=rd(this.g);t="";var r=s.length,i=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yn(this),$r(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,cC(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Mo(a)){var u=a;break t}}u=null}if(n=u)ks(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,au(this,n);else{this.i=!1,this.o=3,et(12),Yn(this),$r(this);break e}}this.S?(Xm(this,l,o),Jc&&this.i&&l==3&&(Bm(this.U,this.V,"tick",this.mb),this.V.start())):(ks(this.j,this.m,o,null),au(this,o)),l==4&&Yn(this),this.i&&!this.J&&(l==4?_y(this.l,this):(this.i=!1,ki(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,et(12)):(this.o=0,et(13)),Yn(this),$r(this)}}}catch{}finally{}};function Ym(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Xm(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=fC(t,n),r==Fo){e==4&&(t.o=4,et(14),s=!1),ks(t.j,t.m,null,"[Incomplete Response]");break}else if(r==iu){t.o=4,et(15),ks(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ks(t.j,t.m,r,null),au(t,r);Ym(t)&&r!=Fo&&r!=iu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,et(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Rl(e),e.L=!0,et(11))):(ks(t.j,t.m,n,"[Invalid Chunked Response]"),Yn(t),$r(t))}P.mb=function(){if(this.g){var t=nn(this.g),e=this.g.ja();this.C<e.length&&(Sa(this),Xm(this,t,e),this.i&&t!=4&&ki(this))}};function fC(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Fo:(n=Number(e.substring(n,s)),isNaN(n)?iu:(s+=1,s+n>e.length?Fo:(e=e.substr(s,n),t.C=s+n,e)))}P.cancel=function(){this.J=!0,Yn(this)};function ki(t){t.Y=Date.now()+t.P,Jm(t,t.P)}function Jm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Si(We(t.lb,t),e)}function Sa(t){t.B&&(z.clearTimeout(t.B),t.B=null)}P.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(uC(this.j,this.A),this.L!=2&&(oi(),et(17)),Yn(this),this.o=2,$r(this)):Jm(this,this.Y-t)};function $r(t){t.l.H==0||t.J||_y(t.l,t)}function Yn(t){Sa(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,vl(t.V),jm(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function au(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||cu(n.h,t))){if(!t.K&&cu(n.h,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Vo(n),Ra(n);else break e;kl(n),et(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.M&&n.A==0&&!n.v&&(n.v=Si(We(n.ib,n),6e3));if(1>=oy(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Xn(n,11)}else if((t.K||n.g==t)&&Vo(n),!Mo(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const l=u[3];l!=null&&(n.qa=l,n.j.info("VER="+n.qa));const h=u[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=s.h;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Tl(i,i.h),i.h=null))}if(s.F){const E=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(s.Da=E,we(s.G,s.F,E))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Ty(s,s.I?s.oa:null,s.Y),o.K){ay(s.h,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Sa(a),ki(a)),s.g=o}else vy(s);0<n.i.length&&Da(n)}else u[0]!="stop"&&u[0]!="close"||Xn(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Xn(n,7):Cl(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}oi(4)}catch{}}function dC(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ma(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function pC(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ma(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Zm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ma(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=pC(t),s=dC(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var ey=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ns(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ns){this.h=e!==void 0?e:t.h,Uo(this,t.j),this.s=t.s,this.g=t.g,$o(this,t.m),this.l=t.l,e=t.i;var n=new ai;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),td(this,n),this.o=t.o}else t&&(n=String(t).match(ey))?(this.h=!!e,Uo(this,n[1]||"",!0),this.s=Ar(n[2]||""),this.g=Ar(n[3]||"",!0),$o(this,n[4]),this.l=Ar(n[5]||"",!0),td(this,n[6]||"",!0),this.o=Ar(n[7]||"")):(this.h=!!e,this.i=new ai(null,this.h))}ns.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Cr(e,nd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Cr(e,nd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Cr(n,n.charAt(0)=="/"?vC:yC,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Cr(n,_C)),t.join("")};function cn(t){return new ns(t)}function Uo(t,e,n){t.j=n?Ar(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $o(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function td(t,e,n){e instanceof ai?(t.i=e,EC(t.i,t.h)):(n||(e=Cr(e,wC)),t.i=new ai(e,t.h))}function we(t,e,n){t.i.set(e,n)}function Aa(t){return we(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ar(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Cr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,mC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function mC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var nd=/[#\/\?@]/g,yC=/[#\?:]/g,vC=/[#\?]/g,wC=/[#\?@]/g,_C=/#/g;function ai(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Un(t){t.g||(t.g=new Map,t.h=0,t.i&&gC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=ai.prototype;P.add=function(t,e){Un(this),this.i=null,t=cr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ty(t,e){Un(t),e=cr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ny(t,e){return Un(t),e=cr(t,e),t.g.has(e)}P.forEach=function(t,e){Un(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};P.sa=function(){Un(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};P.Z=function(t){Un(this);let e=[];if(typeof t=="string")ny(this,t)&&(e=e.concat(this.g.get(cr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return Un(this),this.i=null,t=cr(this,t),ny(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function sy(t,e,n){ty(t,e),0<n.length&&(t.i=null,t.g.set(cr(t,e),ll(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function cr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function EC(t,e){e&&!t.j&&(Un(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(ty(this,s),sy(this,r,n))},t)),t.j=e}var IC=class{constructor(t,e){this.h=t,this.g=e}};function ry(t){this.l=t||TC,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ka&&z.g.Ka()&&z.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var TC=10;function iy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function oy(t){return t.h?1:t.g?t.g.size:0}function cu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Tl(t,e){t.g?t.g.add(e):t.h=e}function ay(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ry.prototype.cancel=function(){if(this.i=cy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function cy(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ll(t.i)}function bl(){}bl.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};bl.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function bC(){this.g=new bl}function SC(t,e,n){const s=n||"";try{Zm(t,function(r,i){let o=r;Ti(r)&&(o=yl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function AC(t,e){const n=new Ea;if(z.Image){const s=new Image;s.onload=Wi(Qi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Wi(Qi,n,s,"TestLoadImage: error",!1,e),s.onabort=Wi(Qi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Wi(Qi,n,s,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Qi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ri(t){this.l=t.fc||null,this.j=t.ob||!1}Le(Ri,_l);Ri.prototype.g=function(){return new Ca(this.l,this.j)};Ri.prototype.i=function(t){return function(){return t}}({});function Ca(t,e){Me.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Sl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Le(Ca,Me);var Sl=0;P=Ca.prototype;P.open=function(t,e){if(this.readyState!=Sl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ci(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Di(this)),this.readyState=Sl};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ci(this)),this.g&&(this.readyState=3,ci(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;uy(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function uy(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Di(this):ci(this),this.readyState==3&&uy(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,Di(this))};P.Ya=function(t){this.g&&(this.response=t,Di(this))};P.ka=function(){this.g&&Di(this)};function Di(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ci(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ci(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var CC=z.JSON.parse;function Te(t){Me.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ly,this.L=this.M=!1}Le(Te,Me);var ly="",kC=/^https?$/i,RC=["POST","PUT"];P=Te.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ru.g(),this.C=this.u?ed(this.u):ed(ru),this.g.onreadystatechange=We(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){sd(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=z.FormData&&t instanceof z.FormData,!(0<=Sm(RC,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{dy(this),0<this.B&&((this.L=DC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=We(this.ua,this)):this.A=wl(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){sd(this,i)}};function DC(t){return Ws&&WA()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof ul<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,$e(this,"timeout"),this.abort(8))};function sd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,hy(t),ka(t)}function hy(t){t.F||(t.F=!0,$e(t,"complete"),$e(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,$e(this,"complete"),$e(this,"abort"),ka(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ka(this,!0)),Te.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?fy(this):this.kb())};P.kb=function(){fy(this)};function fy(t){if(t.h&&typeof ul<"u"&&(!t.C[1]||nn(t)!=4||t.da()!=2)){if(t.v&&nn(t)==4)wl(t.La,0,t);else if($e(t,"readystatechange"),nn(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.I).match(ey)[1]||null;if(!r&&z.self&&z.self.location){var i=z.self.location.protocol;r=i.substr(0,i.length-1)}s=!kC.test(r?r.toLowerCase():"")}n=s}if(n)$e(t,"complete"),$e(t,"success");else{t.m=6;try{var o=2<nn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",hy(t)}}finally{ka(t)}}}}function ka(t,e){if(t.g){dy(t);const n=t.g,s=t.C[0]?xo:null;t.g=null,t.C=null,e||$e(t,"ready");try{n.onreadystatechange=s}catch{}}}function dy(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function nn(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),CC(e)}};function rd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case ly:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function py(t){let e="";return fl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Al(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=py(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):we(t,e,n))}function Er(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function gy(t){this.Ga=0,this.i=[],this.j=new Ea,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Er("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Er("baseRetryDelayMs",5e3,t),this.hb=Er("retryDelaySeedMs",1e4,t),this.eb=Er("forwardChannelMaxRetries",2,t),this.xa=Er("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new ry(t&&t.concurrentRequestLimit),this.Ja=new bC,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}P=gy.prototype;P.qa=8;P.H=1;function Cl(t){if(my(t),t.H==3){var e=t.W++,n=cn(t.G);we(n,"SID",t.J),we(n,"RID",e),we(n,"TYPE","terminate"),Ni(t,n),e=new Ci(t,t.j,e,void 0),e.L=2,e.v=Aa(cn(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=by(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ki(e)}Iy(t)}function Ra(t){t.g&&(Rl(t),t.g.cancel(),t.g=null)}function my(t){Ra(t),t.u&&(z.clearTimeout(t.u),t.u=null),Vo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function Da(t){iy(t.h)||t.m||(t.m=!0,Um(t.Na,t),t.C=0)}function NC(t,e){return oy(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Si(We(t.Na,t,e),Ey(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Ci(this,this.j,t,void 0);let i=this.s;if(this.U&&(i?(i=Dm(i),Nm(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=yy(this,r,e),n=cn(this.G),we(n,"RID",t),we(n,"CVER",22),this.F&&we(n,"X-HTTP-Session-Id",this.F),Ni(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(py(i)))+"&"+e:this.o&&Al(n,this.o,i)),Tl(this.h,r),this.bb&&we(n,"TYPE","init"),this.P?(we(n,"$req",e),we(n,"SID","null"),r.ba=!0,ou(r,n,null)):ou(r,n,e),this.H=2}}else this.H==3&&(t?id(this,t):this.i.length==0||iy(this.h)||id(this))};function id(t,e){var n;e?n=e.m:n=t.W++;const s=cn(t.G);we(s,"SID",t.J),we(s,"RID",n),we(s,"AID",t.V),Ni(t,s),t.o&&t.s&&Al(s,t.o,t.s),n=new Ci(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=yy(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Tl(t.h,n),ou(n,s,e)}function Ni(t,e){t.ma&&fl(t.ma,function(n,s){we(e,s,n)}),t.l&&Zm({},function(n,s){we(e,s,n)})}function yy(t,e,n){n=Math.min(t.i.length,n);var s=t.l?We(t.l.Va,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{SC(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,s}function vy(t){t.g||t.u||(t.ba=1,Um(t.Ma,t),t.A=0)}function kl(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Si(We(t.Ma,t),Ey(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,wy(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Si(We(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,et(10),Ra(this),wy(this))};function Rl(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function wy(t){t.g=new Ci(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=cn(t.wa);we(e,"RID","rpc"),we(e,"SID",t.J),we(e,"CI",t.M?"0":"1"),we(e,"AID",t.V),we(e,"TYPE","xmlhttp"),Ni(t,e),t.o&&t.s&&Al(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Aa(cn(e)),n.s=null,n.S=!0,Qm(n,t)}P.ib=function(){this.v!=null&&(this.v=null,Ra(this),kl(this),et(19))};function Vo(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function _y(t,e){var n=null;if(t.g==e){Vo(t),Rl(t),t.g=null;var s=2}else if(cu(t.h,e))n=e.F,ay(t.h,e),s=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=Ia(),$e(s,new Km(s,n)),Da(t)}else vy(t);else if(r=e.o,r==3||r==0&&0<t.ta||!(s==1&&NC(t,e)||s==2&&kl(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Xn(t,5);break;case 4:Xn(t,10);break;case 3:Xn(t,6);break;default:Xn(t,2)}}}function Ey(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Xn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=We(t.pb,t);n||(n=new ns("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||Uo(n,"https"),Aa(n)),AC(n.toString(),s)}else et(2);t.H=0,t.l&&t.l.za(e),Iy(t),my(t)}P.pb=function(t){t?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function Iy(t){if(t.H=0,t.pa=[],t.l){const e=cy(t.h);(e.length!=0||t.i.length!=0)&&(Gf(t.pa,e),Gf(t.pa,t.i),t.h.i.length=0,ll(t.i),t.i.length=0),t.l.ya()}}function Ty(t,e,n){var s=n instanceof ns?cn(n):new ns(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),$o(s,s.m);else{var r=z.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new ns(null,void 0);s&&Uo(i,s),e&&(i.g=e),r&&$o(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&we(s,n,e),we(s,"VER",t.qa),Ni(t,s),s}function by(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Te(new Ri({ob:!0})):new Te(t.va),e.Oa(t.I),e}function Sy(){}P=Sy.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.Va=function(){};function Bo(){if(Ws&&!(10<=Number(GA)))throw Error("Environmental error: no available transport.")}Bo.prototype.g=function(t,e){return new ht(t,e)};function ht(t,e){Me.call(this),this.g=new gy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Mo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Mo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ur(this)}Le(ht,Me);ht.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;et(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=Ty(t,null,t.Y),Da(t)};ht.prototype.close=function(){Cl(this.g)};ht.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=yl(t),t=n);e.i.push(new IC(e.fb++,t)),e.H==3&&Da(e)};ht.prototype.N=function(){this.g.l=null,delete this.j,Cl(this.g),delete this.g,ht.$.N.call(this)};function Ay(t){El.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Le(Ay,El);function Cy(){Il.call(this),this.status=1}Le(Cy,Il);function ur(t){this.g=t}Le(ur,Sy);ur.prototype.Ba=function(){$e(this.g,"a")};ur.prototype.Aa=function(t){$e(this.g,new Ay(t))};ur.prototype.za=function(t){$e(this.g,new Cy)};ur.prototype.ya=function(){$e(this.g,"b")};function PC(){this.blockSize=-1}function Ot(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Le(Ot,PC);Ot.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ec(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}Ot.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)Ec(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){Ec(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){Ec(this,s),r=0;break}}this.h=r,this.i+=e};Ot.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function ce(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var OC={};function Dl(t){return-128<=t&&128>t?Am(OC,t,function(e){return new ce([e|0],0>e?-1:0)}):new ce([t|0],0>t?-1:0)}function qt(t){if(isNaN(t)||!isFinite(t))return Ls;if(0>t)return Ue(qt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=uu;return new ce(e,0)}function ky(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ue(ky(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=qt(Math.pow(e,8)),s=Ls,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=qt(Math.pow(e,i)),s=s.R(i).add(qt(o))):(s=s.R(n),s=s.add(qt(o)))}return s}var uu=4294967296,Ls=Dl(0),lu=Dl(1),od=Dl(16777216);P=ce.prototype;P.ea=function(){if(pt(this))return-Ue(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:uu+s)*e,e*=uu}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(sn(this))return"0";if(pt(this))return"-"+Ue(this).toString(t);for(var e=qt(Math.pow(t,6)),n=this,s="";;){var r=qo(n,e).g;n=jo(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,sn(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function sn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function pt(t){return t.h==-1}P.X=function(t){return t=jo(this,t),pt(t)?-1:sn(t)?0:1};function Ue(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new ce(n,~t.h).add(lu)}P.abs=function(){return pt(this)?Ue(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new ce(n,n[n.length-1]&-2147483648?-1:0)};function jo(t,e){return t.add(Ue(e))}P.R=function(t){if(sn(this)||sn(t))return Ls;if(pt(this))return pt(t)?Ue(this).R(Ue(t)):Ue(Ue(this).R(t));if(pt(t))return Ue(this.R(Ue(t)));if(0>this.X(od)&&0>t.X(od))return qt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,Yi(n,2*s+2*r),n[2*s+2*r+1]+=i*c,Yi(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Yi(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Yi(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new ce(n,0)};function Yi(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ir(t,e){this.g=t,this.h=e}function qo(t,e){if(sn(e))throw Error("division by zero");if(sn(t))return new Ir(Ls,Ls);if(pt(t))return e=qo(Ue(t),e),new Ir(Ue(e.g),Ue(e.h));if(pt(e))return e=qo(t,Ue(e)),new Ir(Ue(e.g),e.h);if(30<t.g.length){if(pt(t)||pt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=lu,s=e;0>=s.X(t);)n=ad(n),s=ad(s);var r=Ts(n,1),i=Ts(s,1);for(s=Ts(s,2),n=Ts(n,2);!sn(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=Ts(s,1),n=Ts(n,1)}return e=jo(t,r.R(e)),new Ir(r,e)}for(r=Ls;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=qt(n),o=i.R(e);pt(o)||0<o.X(t);)n-=s,i=qt(n),o=i.R(e);sn(i)&&(i=lu),r=r.add(i),t=jo(t,o)}return new Ir(r,t)}P.gb=function(t){return qo(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new ce(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new ce(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new ce(n,this.h^t.h)};function ad(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new ce(n,t.h)}function Ts(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ce(r,t.h)}Bo.prototype.createWebChannel=Bo.prototype.g;ht.prototype.send=ht.prototype.u;ht.prototype.open=ht.prototype.m;ht.prototype.close=ht.prototype.close;Ta.NO_ERROR=0;Ta.TIMEOUT=8;Ta.HTTP_ERROR=6;zm.COMPLETE="complete";Wm.EventType=Ai;Ai.OPEN="a";Ai.CLOSE="b";Ai.ERROR="c";Ai.MESSAGE="d";Me.prototype.listen=Me.prototype.O;Te.prototype.listenOnce=Te.prototype.P;Te.prototype.getLastError=Te.prototype.Sa;Te.prototype.getLastErrorCode=Te.prototype.Ia;Te.prototype.getStatus=Te.prototype.da;Te.prototype.getResponseJson=Te.prototype.Wa;Te.prototype.getResponseText=Te.prototype.ja;Te.prototype.send=Te.prototype.ha;Te.prototype.setWithCredentials=Te.prototype.Oa;Ot.prototype.digest=Ot.prototype.l;Ot.prototype.reset=Ot.prototype.reset;Ot.prototype.update=Ot.prototype.j;ce.prototype.add=ce.prototype.add;ce.prototype.multiply=ce.prototype.R;ce.prototype.modulo=ce.prototype.gb;ce.prototype.compare=ce.prototype.X;ce.prototype.toNumber=ce.prototype.ea;ce.prototype.toString=ce.prototype.toString;ce.prototype.getBits=ce.prototype.D;ce.fromNumber=qt;ce.fromString=ky;var xC=function(){return new Bo},MC=function(){return Ia()},Ic=Ta,LC=zm,FC=gs,cd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},UC=Ri,Xi=Wm,$C=Te,VC=Ot,Fs=ce;const ud="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Be.UNAUTHENTICATED=new Be(null),Be.GOOGLE_CREDENTIALS=new Be("google-credentials-uid"),Be.FIRST_PARTY=new Be("first-party-uid"),Be.MOCK_USER=new Be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lr="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new la("@firebase/firestore");function ld(){return cs.logLevel}function U(t,...e){if(cs.logLevel<=re.DEBUG){const n=e.map(Nl);cs.debug(`Firestore (${lr}): ${t}`,...n)}}function un(t,...e){if(cs.logLevel<=re.ERROR){const n=e.map(Nl);cs.error(`Firestore (${lr}): ${t}`,...n)}}function Gs(t,...e){if(cs.logLevel<=re.WARN){const n=e.map(Nl);cs.warn(`Firestore (${lr}): ${t}`,...n)}}function Nl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${lr}) INTERNAL ASSERTION FAILED: `+t;throw un(e),new Error(e)}function ve(t,e){t||K()}function Q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Mt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Be.UNAUTHENTICATED))}shutdown(){}}class jC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class qC{constructor(e){this.t=e,this.currentUser=Be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new rn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new rn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ve(typeof s.accessToken=="string"),new Ry(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new Be(e)}}class HC{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Be.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class KC{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new HC(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WC{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.T=n.token,new zC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=GC(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ie(t,e){return t<e?-1:t>e?1:0}function Qs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ne(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new Ne(0,0))}static max(){return new G(new Ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n,s){n===void 0?n=0:n>e.length&&K(),s===void 0?s=e.length-n:s>e.length-n&&K(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ui.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ui?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ye extends ui{construct(e,n,s){return new ye(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new M(w.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const QC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends ui{construct(e,n,s){return new He(e,n,s)}static isValidIdentifier(e){return QC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new He(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new M(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new M(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new M(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(ye.fromString(e))}static fromName(e){return new V(ye.fromString(e).popFirst(5))}static empty(){return new V(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new ye(e.slice()))}}function YC(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=G.fromTimestamp(s===1e9?new Ne(n+1,0):new Ne(n,s));return new xn(r,V.empty(),e)}function XC(t){return new xn(t.readTime,t.key,-1)}class xn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new xn(G.min(),V.empty(),-1)}static max(){return new xn(G.max(),V.empty(),-1)}}function JC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class e1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==ZC)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(r=>r?b.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new b((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new b((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Oi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Pl.ct=-1;function Na(t){return t==null}function Ho(t){return t===0&&1/t==-1/0}function t1(t){return typeof t=="number"&&Number.isInteger(t)&&!Ho(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ny(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||Fe.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ji(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ji(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ji(this.root,e,this.comparator,!0)}}class Ji{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Fe.RED,this.left=r??Fe.EMPTY,this.right=i??Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Fe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Fe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Fe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new fd(this.data.getIterator())}getIteratorFrom(e){return new fd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class fd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new At([])}unionWith(e){let n=new Qe(He.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new At(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Py("Invalid base64 string: "+r):r}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const n1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mn(t){if(ve(!!t),typeof t=="string"){let e=0;const n=n1.exec(t);if(ve(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function us(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xl(t){const e=t.mapValue.fields.__previous_value__;return Ol(e)?xl(e):e}function li(t){const e=Mn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class hi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new hi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ls(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ol(t)?4:r1(t)?9007199254740991:10:K()}function Qt(t,e){if(t===e)return!0;const n=ls(t);if(n!==ls(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return li(t).isEqual(li(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Mn(s.timestampValue),o=Mn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return us(s.bytesValue).isEqual(us(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return ke(s.geoPointValue.latitude)===ke(r.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return ke(s.integerValue)===ke(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=ke(s.doubleValue),o=ke(r.doubleValue);return i===o?Ho(i)===Ho(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Qs(t.arrayValue.values||[],e.arrayValue.values||[],Qt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(hd(i)!==hd(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Qt(i[a],o[a])))return!1;return!0}(t,e);default:return K()}}function fi(t,e){return(t.values||[]).find(n=>Qt(n,e))!==void 0}function Ys(t,e){if(t===e)return 0;const n=ls(t),s=ls(e);if(n!==s)return ie(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=ke(r.integerValue||r.doubleValue),a=ke(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return dd(t.timestampValue,e.timestampValue);case 4:return dd(li(t),li(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(r,i){const o=us(r),a=us(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ie(o[c],a[c]);if(u!==0)return u}return ie(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ie(ke(r.latitude),ke(i.latitude));return o!==0?o:ie(ke(r.longitude),ke(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ys(o[c],a[c]);if(u)return u}return ie(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Zi.mapValue&&i===Zi.mapValue)return 0;if(r===Zi.mapValue)return 1;if(i===Zi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ie(a[l],u[l]);if(h!==0)return h;const d=Ys(o[a[l]],c[u[l]]);if(d!==0)return d}return ie(a.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function dd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=Mn(t),s=Mn(e),r=ie(n.seconds,s.seconds);return r!==0?r:ie(n.nanos,s.nanos)}function Xs(t){return hu(t)}function hu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Mn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?us(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,V.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=hu(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${hu(s.fields[a])}`;return i+"}"}(t.mapValue):K();var e,n}function pd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function fu(t){return!!t&&"integerValue"in t}function Ml(t){return!!t&&"arrayValue"in t}function gd(t){return!!t&&"nullValue"in t}function md(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fo(t){return!!t&&"mapValue"in t}function Vr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Vr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Vr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function r1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!fo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vr(n)}setAll(e){let n=He.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Vr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());fo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];fo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){hr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new gt(Vr(this.value))}}function Oy(t){const e=[];return hr(t.fields,(n,s)=>{const r=new He([n]);if(fo(s)){const i=Oy(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new At(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new je(e,0,G.min(),G.min(),G.min(),gt.empty(),0)}static newFoundDocument(e,n,s,r){return new je(e,1,n,G.min(),s,r,0)}static newNoDocument(e,n){return new je(e,2,n,G.min(),G.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new je(e,3,n,G.min(),G.min(),gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n){this.position=e,this.inclusive=n}}function yd(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=V.comparator(V.fromName(o.referenceValue),n.key):s=Ys(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function vd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n="asc"){this.field=e,this.dir=n}}function i1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{}class De extends xy{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new a1(e,n,s):n==="array-contains"?new l1(e,s):n==="in"?new h1(e,s):n==="not-in"?new f1(e,s):n==="array-contains-any"?new d1(e,s):new De(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new c1(e,s):new u1(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ys(n,this.value)):n!==null&&ls(this.value)===ls(n)&&this.matchesComparison(Ys(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class xt extends xy{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new xt(e,n)}matches(e){return My(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function My(t){return t.op==="and"}function Ly(t){return o1(t)&&My(t)}function o1(t){for(const e of t.filters)if(e instanceof xt)return!1;return!0}function du(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+Xs(t.value);if(Ly(t))return t.filters.map(e=>du(e)).join(",");{const e=t.filters.map(n=>du(n)).join(",");return`${t.op}(${e})`}}function Fy(t,e){return t instanceof De?function(n,s){return s instanceof De&&n.op===s.op&&n.field.isEqual(s.field)&&Qt(n.value,s.value)}(t,e):t instanceof xt?function(n,s){return s instanceof xt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Fy(i,s.filters[o]),!0):!1}(t,e):void K()}function Uy(t){return t instanceof De?function(e){return`${e.field.canonicalString()} ${e.op} ${Xs(e.value)}`}(t):t instanceof xt?function(e){return e.op.toString()+" {"+e.getFilters().map(Uy).join(" ,")+"}"}(t):"Filter"}class a1 extends De{constructor(e,n,s){super(e,n,s),this.key=V.fromName(s.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class c1 extends De{constructor(e,n){super(e,"in",n),this.keys=$y("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class u1 extends De{constructor(e,n){super(e,"not-in",n),this.keys=$y("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $y(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>V.fromName(s.referenceValue))}class l1 extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ml(n)&&fi(n.arrayValue,this.value)}}class h1 extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fi(this.value.arrayValue,n)}}class f1 extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(fi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fi(this.value.arrayValue,n)}}class d1 extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ml(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>fi(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function wd(t,e=null,n=[],s=[],r=null,i=null,o=null){return new p1(t,e,n,s,r,i,o)}function Ll(t){const e=Q(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>du(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Na(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Xs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Xs(s)).join(",")),e.ft=n}return e.ft}function Fl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!i1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Fy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vd(t.startAt,e.startAt)&&vd(t.endAt,e.endAt)}function pu(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function g1(t,e,n,s,r,i,o,a){return new xi(t,e,n,s,r,i,o,a)}function Ul(t){return new xi(t)}function _d(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Vy(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $l(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function By(t){return t.collectionGroup!==null}function Us(t){const e=Q(t);if(e.dt===null){e.dt=[];const n=$l(e),s=Vy(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Br(n)),e.dt.push(new Br(He.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Br(He.keyField(),i))}}}return e.dt}function ln(t){const e=Q(t);if(!e._t)if(e.limitType==="F")e._t=wd(e.path,e.collectionGroup,Us(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Us(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Br(i.field,o))}const s=e.endAt?new Ko(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ko(e.startAt.position,e.startAt.inclusive):null;e._t=wd(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function gu(t,e){e.getFirstInequalityField(),$l(t);const n=t.filters.concat([e]);return new xi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function mu(t,e,n){return new xi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pa(t,e){return Fl(ln(t),ln(e))&&t.limitType===e.limitType}function jy(t){return`${Ll(ln(t))}|lt:${t.limitType}`}function yu(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Uy(s)).join(", ")}]`),Na(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Xs(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Xs(s)).join(",")),`Target(${n})`}(ln(t))}; limitType=${t.limitType})`}function Oa(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):V.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Us(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=yd(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Us(n),s)||n.endAt&&!function(r,i,o){const a=yd(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Us(n),s))}(t,e)}function m1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qy(t){return(e,n)=>{let s=!1;for(const r of Us(t)){const i=y1(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function y1(t,e,n){const s=t.field.isKeyField()?V.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ys(a,c):K()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){hr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Ny(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=new Ie(V.comparator);function hn(){return v1}const Hy=new Ie(V.comparator);function kr(...t){let e=Hy;for(const n of t)e=e.insert(n.key,n);return e}function Ky(t){let e=Hy;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Jn(){return jr()}function zy(){return jr()}function jr(){return new fr(t=>t.toString(),(t,e)=>t.isEqual(e))}const w1=new Ie(V.comparator),_1=new Qe(V.comparator);function ee(...t){let e=_1;for(const n of t)e=e.add(n);return e}const E1=new Qe(ie);function I1(){return E1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ho(e)?"-0":e}}function Gy(t){return{integerValue:""+t}}function T1(t,e){return t1(e)?Gy(e):Wy(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(){this._=void 0}}function b1(t,e,n){return t instanceof zo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Ol(r)&&(r=xl(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof di?Yy(t,e):t instanceof pi?Xy(t,e):function(s,r){const i=Qy(s,r),o=Ed(i)+Ed(s.wt);return fu(i)&&fu(s.wt)?Gy(o):Wy(s.serializer,o)}(t,e)}function S1(t,e,n){return t instanceof di?Yy(t,e):t instanceof pi?Xy(t,e):n}function Qy(t,e){return t instanceof Wo?fu(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class zo extends xa{}class di extends xa{constructor(e){super(),this.elements=e}}function Yy(t,e){const n=Jy(e);for(const s of t.elements)n.some(r=>Qt(r,s))||n.push(s);return{arrayValue:{values:n}}}class pi extends xa{constructor(e){super(),this.elements=e}}function Xy(t,e){let n=Jy(e);for(const s of t.elements)n=n.filter(r=>!Qt(r,s));return{arrayValue:{values:n}}}class Wo extends xa{constructor(e,n){super(),this.serializer=e,this.wt=n}}function Ed(t){return ke(t.integerValue||t.doubleValue)}function Jy(t){return Ml(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function A1(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof di&&s instanceof di||n instanceof pi&&s instanceof pi?Qs(n.elements,s.elements,Qt):n instanceof Wo&&s instanceof Wo?Qt(n.wt,s.wt):n instanceof zo&&s instanceof zo}(t.transform,e.transform)}class C1{constructor(e,n){this.version=e,this.transformResults=n}}class Rt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rt}static exists(e){return new Rt(void 0,e)}static updateTime(e){return new Rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function po(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ma{}function Zy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Vl(t.key,Rt.none()):new Mi(t.key,t.data,Rt.none());{const n=t.data,s=gt.empty();let r=new Qe(He.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ms(t.key,s,new At(r.toArray()),Rt.none())}}function k1(t,e,n){t instanceof Mi?function(s,r,i){const o=s.value.clone(),a=Td(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ms?function(s,r,i){if(!po(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Td(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(ev(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function qr(t,e,n,s){return t instanceof Mi?function(r,i,o,a){if(!po(r.precondition,i))return o;const c=r.value.clone(),u=bd(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof ms?function(r,i,o,a){if(!po(r.precondition,i))return o;const c=bd(r.fieldTransforms,a,i),u=i.data;return u.setAll(ev(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return po(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function R1(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Qy(s.transform,r||null);i!=null&&(n===null&&(n=gt.empty()),n.set(s.field,i))}return n||null}function Id(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Qs(n,s,(r,i)=>A1(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Mi extends Ma{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ms extends Ma{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ev(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Td(t,e,n){const s=new Map;ve(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,S1(o,a,n[r]))}return s}function bd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,b1(i,o,e))}return s}class Vl extends Ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class D1 extends Ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&k1(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=qr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=qr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=zy();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Zy(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(G.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Qs(this.mutations,e.mutations,(n,s)=>Id(n,s))&&Qs(this.baseMutations,e.baseMutations,(n,s)=>Id(n,s))}}class Bl{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ve(e.mutations.length===s.length);let r=w1;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Bl(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,te;function x1(t){switch(t){default:return K();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function tv(t){if(t===void 0)return un("GRPC error has no .code"),w.UNKNOWN;switch(t){case Ce.OK:return w.OK;case Ce.CANCELLED:return w.CANCELLED;case Ce.UNKNOWN:return w.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return w.INTERNAL;case Ce.UNAVAILABLE:return w.UNAVAILABLE;case Ce.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Ce.NOT_FOUND:return w.NOT_FOUND;case Ce.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Ce.ABORTED:return w.ABORTED;case Ce.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Ce.DATA_LOSS:return w.DATA_LOSS;default:return K()}}(te=Ce||(Ce={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return eo}static getOrCreateInstance(){return eo===null&&(eo=new jl),eo}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let eo=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1=new Fs([4294967295,4294967295],0);function Sd(t){const e=M1().encode(t),n=new VC;return n.update(e),new Uint8Array(n.digest())}function Ad(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Fs([n,s],0),new Fs([r,i],0)]}class ql{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Rr(`Invalid padding: ${n}`);if(s<0)throw new Rr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Rr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Rr(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=Fs.fromNumber(this.yt)}Tt(e,n,s){let r=e.add(n.multiply(Fs.fromNumber(s)));return r.compare(L1)===1&&(r=new Fs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=Sd(e),[s,r]=Ad(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(s,r,i);if(!this.Et(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ql(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=Sd(e),[s,r]=Ad(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Rr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Li.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new La(G.min(),r,new Ie(ie),hn(),ee())}}class Li{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Li(s,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n,s,r){this.vt=e,this.removedTargetIds=n,this.key=s,this.Pt=r}}class nv{constructor(e,n){this.targetId=e,this.bt=n}}class sv{constructor(e,n,s=Xe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Cd{constructor(){this.Vt=0,this.St=Rd(),this.Dt=Xe.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=ee(),n=ee(),s=ee();return this.St.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:K()}}),new Li(this.Dt,this.Ct,e,n,s)}$t(){this.xt=!1,this.St=Rd()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class F1{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=hn(),this.jt=kd(),this.zt=new Ie(ie)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const s=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&s.Mt(e.resumeToken);break;case 1:s.qt(),s.Nt||s.$t(),s.Mt(e.resumeToken);break;case 2:s.qt(),s.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(s.Ut(),s.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),s.Mt(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((s,r)=>{this.Zt(r)&&n(r)})}ee(e){var n;const s=e.targetId,r=e.bt.count,i=this.ne(s);if(i){const o=i.target;if(pu(o))if(r===0){const a=new V(o.path);this.Jt(s,a,je.newNoDocument(a,G.min()))}else ve(r===1);else{const a=this.se(s);if(a!==r){const c=this.ie(e,a);if(c!==0){this.te(s);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(s,u)}(n=jl.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,l,h){var d,g,v,E,R,C;const L={localCacheCount:l,existenceFilterCount:h.count},D=h.unchangedNames;return D&&(L.bloomFilter={applied:u===0,hashCount:(d=D==null?void 0:D.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(E=(v=(g=D==null?void 0:D.bits)===null||g===void 0?void 0:g.bitmap)===null||v===void 0?void 0:v.length)!==null&&E!==void 0?E:0,padding:(C=(R=D==null?void 0:D.bits)===null||R===void 0?void 0:R.padding)!==null&&C!==void 0?C:0}),L}(c,a,e.bt))}}}}ie(e,n){const{unchangedNames:s,count:r}=e.bt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,u;try{c=us(i).toUint8Array()}catch(l){if(l instanceof Py)return Gs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{u=new ql(c,o,a)}catch(l){return Gs(l instanceof Rr?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return u.yt===0?1:r!==n-this.re(e.targetId,u)?2:0}re(e,n){const s=this.Kt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.At(a)||(this.Jt(e,i,null),r++)}),r}ue(e){const n=new Map;this.Gt.forEach((i,o)=>{const a=this.ne(o);if(a){if(i.current&&pu(a.target)){const c=new V(a.target.path);this.Qt.get(c)!==null||this.ce(o,c)||this.Jt(o,c,je.newNoDocument(c,e))}i.kt&&(n.set(o,i.Ot()),i.$t())}});let s=ee();this.jt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.ne(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.Qt.forEach((i,o)=>o.setReadTime(e));const r=new La(e,n,this.zt,this.Qt,s);return this.Qt=hn(),this.jt=kd(),this.zt=new Ie(ie),r}Ht(e,n){if(!this.Zt(e))return;const s=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,s),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,s){if(!this.Zt(e))return;const r=this.Xt(e);this.ce(e,n)?r.Ft(n,1):r.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),s&&(this.Qt=this.Qt.insert(n,s))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new Cd,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new Qe(ie),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new Cd),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function kd(){return new Ie(V.comparator)}function Rd(){return new Ie(V.comparator)}const U1=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$1=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),V1=(()=>({and:"AND",or:"OR"}))();class B1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function vu(t,e){return t.useProto3Json||Na(e)?e:{value:e}}function Go(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function j1(t,e){return Go(t,e.toTimestamp())}function Wt(t){return ve(!!t),G.fromTimestamp(function(e){const n=Mn(e);return new Ne(n.seconds,n.nanos)}(t))}function Hl(t,e){return function(n){return new ye(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function iv(t){const e=ye.fromString(t);return ve(uv(e)),e}function wu(t,e){return Hl(t.databaseId,e.path)}function Tc(t,e){const n=iv(e);if(n.get(1)!==t.databaseId.projectId)throw new M(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(ov(n))}function _u(t,e){return Hl(t.databaseId,e)}function q1(t){const e=iv(t);return e.length===4?ye.emptyPath():ov(e)}function Eu(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ov(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Dd(t,e,n){return{name:wu(t,e),fields:n.value.mapValue.fields}}function H1(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(ve(u===void 0||typeof u=="string"),Xe.fromBase64String(u||"")):(ve(u===void 0||u instanceof Uint8Array),Xe.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?w.UNKNOWN:tv(c.code);return new M(u,c.message||"")}(o);n=new sv(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Tc(t,s.document.name),i=Wt(s.document.updateTime),o=s.document.createTime?Wt(s.document.createTime):G.min(),a=new gt({mapValue:{fields:s.document.fields}}),c=je.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new go(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Tc(t,s.document),i=s.readTime?Wt(s.readTime):G.min(),o=je.newNoDocument(r,i),a=s.removedTargetIds||[];n=new go([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Tc(t,s.document),i=s.removedTargetIds||[];n=new go([],i,r,null)}else{if(!("filter"in e))return K();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new O1(r,i),a=s.targetId;n=new nv(a,o)}}return n}function K1(t,e){let n;if(e instanceof Mi)n={update:Dd(t,e.key,e.value)};else if(e instanceof Vl)n={delete:wu(t,e.key)};else if(e instanceof ms)n={update:Dd(t,e.key,e.data),updateMask:ek(e.fieldMask)};else{if(!(e instanceof D1))return K();n={verify:wu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof zo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof di)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof pi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Wo)return{fieldPath:i.field.canonicalString(),increment:o.wt};throw K()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:j1(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:K()}(t,e.precondition)),n}function z1(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Wt(s.updateTime):Wt(r);return i.isEqual(G.min())&&(i=Wt(r)),new C1(i,s.transformResults||[])}(n,e))):[]}function W1(t,e){return{documents:[_u(t,e.path)]}}function G1(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=_u(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=_u(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return cv(xt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Ss(l.field),direction:X1(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=vu(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Q1(t){let e=q1(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ve(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=av(l);return h instanceof xt&&Ly(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Br(As(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Na(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Ko(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Ko(d,h)}(n.endAt)),g1(e,r,o,i,a,"F",c,u)}function Y1(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function av(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=As(e.unaryFilter.field);return De.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=As(e.unaryFilter.field);return De.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=As(e.unaryFilter.field);return De.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=As(e.unaryFilter.field);return De.create(i,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(e){return De.create(As(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return xt.create(e.compositeFilter.filters.map(n=>av(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(t):K()}function X1(t){return U1[t]}function J1(t){return $1[t]}function Z1(t){return V1[t]}function Ss(t){return{fieldPath:t.canonicalString()}}function As(t){return He.fromServerFormat(t.fieldPath)}function cv(t){return t instanceof De?function(e){if(e.op==="=="){if(md(e.value))return{unaryFilter:{field:Ss(e.field),op:"IS_NAN"}};if(gd(e.value))return{unaryFilter:{field:Ss(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(md(e.value))return{unaryFilter:{field:Ss(e.field),op:"IS_NOT_NAN"}};if(gd(e.value))return{unaryFilter:{field:Ss(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ss(e.field),op:J1(e.op),value:e.value}}}(t):t instanceof xt?function(e){const n=e.getFilters().map(s=>cv(s));return n.length===1?n[0]:{compositeFilter:{op:Z1(e.op),filters:n}}}(t):K()}function ek(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,n,s,r,i=G.min(),o=G.min(),a=Xe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Sn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.le=e}}function nk(t){const e=Q1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?mu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(){this.sn=new rk}addToCollectionParentIndex(e,n){return this.sn.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(xn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(xn.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class rk{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Qe(ye.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Qe(ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new Js(0)}static kn(){return new Js(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(){this.changes=new fr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&qr(s.mutation,r,At.empty(),Ne.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ee()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ee()){const r=Jn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=kr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Jn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ee()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=hn();const o=jr(),a=jr();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof ms)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),qr(l.mutation,u,l.mutation.getFieldMask(),Ne.now())):o.set(u.key,At.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new ok(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=jr();let r=new Ie((o,a)=>o-a),i=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||At.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||ee()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=zy();l.forEach(d=>{if(!i.has(d)){const g=Zy(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return V.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):By(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):b.resolve(Jn());let a=-1,c=i;return o.next(u=>b.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?b.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ee())).next(l=>({batchId:a,changes:Ky(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(s=>{let r=kr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=kr();return this.indexManager.getCollectionParents(e,r).next(o=>b.forEach(o,a=>{const c=function(u,l){return new xi(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,je.newInvalidDocument(u)))});let o=kr();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&qr(u.mutation,c,At.empty(),Ne.now()),Oa(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return b.resolve(this.us.get(n))}saveBundleMetadata(e,n){var s;return this.us.set(n.id,{id:(s=n).id,version:s.version,createTime:Wt(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(s){return{name:s.name,query:nk(s.bundledQuery),readTime:Wt(s.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(){this.overlays=new Ie(V.comparator),this.hs=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Jn();return b.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.de(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.hs.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.hs.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const r=Jn(),i=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return b.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ie((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Jn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Jn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return b.resolve(a)}de(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.hs.get(r.largestBatchId).delete(s.key);this.hs.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new P1(n,s));let i=this.hs.get(n);i===void 0&&(i=ee(),this.hs.set(n,i)),this.hs.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(){this.ls=new Qe(Oe.fs),this.ds=new Qe(Oe._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const s=new Oe(e,n);this.ls=this.ls.add(s),this.ds=this.ds.add(s)}ws(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.gs(new Oe(e,n))}ys(e,n){e.forEach(s=>this.removeReference(s,n))}ps(e){const n=new V(new ye([])),s=new Oe(n,e),r=new Oe(n,e+1),i=[];return this.ds.forEachInRange([s,r],o=>{this.gs(o),i.push(o.key)}),i}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new V(new ye([])),s=new Oe(n,e),r=new Oe(n,e+1);let i=ee();return this.ds.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Oe(e,0),s=this.ls.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Oe{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return V.comparator(e.key,n.key)||ie(e.Es,n.Es)}static _s(e,n){return ie(e.Es,n.Es)||V.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new Qe(Oe.fs)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new N1(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new Oe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ps(s),i=r<0?0:r;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Oe(n,0),r=new Oe(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.vs(o.Es);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Qe(ie);return n.forEach(r=>{const i=new Oe(r,0),o=new Oe(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.Es)})}),b.resolve(this.bs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;V.isDocumentKey(i)||(i=i.child(""));const o=new Oe(new V(i),0);let a=new Qe(ie);return this.Rs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.Es)),!0)},o),b.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(s=>{const r=this.vs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ve(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return b.forEach(n.mutations,r=>{const i=new Oe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Dn(e){}containsKey(e,n){const s=new Oe(n,0),r=this.Rs.firstAfterOrEqual(s);return b.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e){this.Ss=e,this.docs=new Ie(V.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ss(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():je.newInvalidDocument(n))}getEntries(e,n){let s=hn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():je.newInvalidDocument(r))}),b.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=hn();const o=n.path,a=new V(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||JC(XC(l),s)<=0||(r.has(l.key)||Oa(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,s,r){K()}Ds(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new fk(this)}getSize(e){return b.resolve(this.size)}}class fk extends ik{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.rs.addEntry(e,r)):this.rs.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e){this.persistence=e,this.Cs=new fr(n=>Ll(n),Fl),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.xs=0,this.Ns=new Kl,this.targetCount=0,this.ks=Js.Nn()}forEachTarget(e,n){return this.Cs.forEach((s,r)=>n(r)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.xs&&(this.xs=n),b.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new Js(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.$n(n),b.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Cs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),b.waitFor(i).next(()=>r)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.Cs.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.Ns.ws(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.Ns.ys(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ns.Ts(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e,n){this.Ms={},this.overlays={},this.Os=new Pl(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new dk(this),this.indexManager=new sk,this.remoteDocumentCache=function(s){return new hk(s)}(s=>this.referenceDelegate.Bs(s)),this.serializer=new tk(n),this.Ls=new ck(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new uk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ms[e.toKey()];return s||(s=new lk(n,this.referenceDelegate),this.Ms[e.toKey()]=s),s}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,s){U("MemoryPersistence","Starting transaction:",e);const r=new gk(this.Os.next());return this.referenceDelegate.qs(),s(r).next(i=>this.referenceDelegate.Us(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ks(e,n){return b.or(Object.values(this.Ms).map(s=>()=>s.containsKey(e,n)))}}class gk extends e1{constructor(e){super(),this.currentSequenceNumber=e}}class zl{constructor(e){this.persistence=e,this.Gs=new Kl,this.Qs=null}static js(e){return new zl(e)}get zs(){if(this.Qs)return this.Qs;throw K()}addReference(e,n,s){return this.Gs.addReference(s,n),this.zs.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.Gs.removeReference(s,n),this.zs.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),b.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(r=>this.zs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.zs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.zs,s=>{const r=V.fromPath(s);return this.Ws(e,r).next(i=>{i||n.removeEntry(r,G.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(s=>{s?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return b.or([()=>b.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.$i=s,this.Fi=r}static Bi(e,n){let s=ee(),r=ee();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Wl(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ui(e,n).next(i=>i||this.Ki(e,n,r,s)).next(i=>i||this.Gi(e,n))}Ui(e,n){if(_d(n))return b.resolve(null);let s=ln(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=mu(n,null,"F"),s=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ee(...i);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Qi(n,a);return this.ji(n,u,o,c.readTime)?this.Ui(e,mu(n,null,"F")):this.zi(e,u,n,c)}))})))}Ki(e,n,s,r){return _d(n)||r.isEqual(G.min())?this.Gi(e,n):this.qi.getDocuments(e,s).next(i=>{const o=this.Qi(n,i);return this.ji(n,o,s,r)?this.Gi(e,n):(ld()<=re.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),yu(n)),this.zi(e,o,n,YC(r,-1)))})}Qi(e,n){let s=new Qe(qy(e));return n.forEach((r,i)=>{Oa(e,i)&&(s=s.add(i))}),s}ji(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Gi(e,n){return ld()<=re.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",yu(n)),this.qi.getDocumentsMatchingQuery(e,n,xn.min())}zi(e,n,s,r){return this.qi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n,s,r){this.persistence=e,this.Wi=n,this.serializer=r,this.Hi=new Ie(ie),this.Ji=new fr(i=>Ll(i),Fl),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(s)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ak(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function vk(t,e,n,s){return new yk(t,e,n,s)}async function lv(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ee();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({tr:u,removedBatchIds:o,addedBatchIds:a}))})})}function wk(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=b.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(v=>{const E=c.docVersions.get(g);ve(E!==null),v.version.compareTo(E)<0&&(l.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),u.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ee();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function hv(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function _k(t,e){const n=Q(t),s=e.snapshotVersion;let r=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});r=n.Hi;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(n.Fs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(i,l.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(Xe.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(v,E,R){return v.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(d,g,l)&&a.push(n.Fs.updateTargetData(i,g))});let c=hn(),u=ee();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Ek(i,o,e.documentUpdates).next(l=>{c=l.er,u=l.nr})),!s.isEqual(G.min())){const l=n.Fs.getLastRemoteSnapshotVersion(i).next(h=>n.Fs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Hi=r,i))}function Ek(t,e,n){let s=ee(),r=ee();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=hn();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(G.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{er:o,nr:r}})}function Ik(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Tk(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Fs.getTargetData(s,e).next(i=>i?(r=i,b.resolve(r)):n.Fs.allocateTargetId(s).next(o=>(r=new Sn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Fs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Hi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(s.targetId,s),n.Ji.set(e,s.targetId)),s})}async function Iu(t,e,n){const s=Q(t),r=s.Hi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Oi(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Hi=s.Hi.remove(e),s.Ji.delete(r.target)}function Nd(t,e,n){const s=Q(t);let r=G.min(),i=ee();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=Q(a),h=l.Ji.get(u);return h!==void 0?b.resolve(l.Hi.get(h)):l.Fs.getTargetData(c,u)}(s,o,ln(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Wi.getDocumentsMatchingQuery(o,e,n?r:G.min(),n?i:ee())).next(a=>(bk(s,m1(e),a),{documents:a,sr:i})))}function bk(t,e,n){let s=t.Yi.get(e)||G.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Yi.set(e,s)}class Pd{constructor(){this.activeTargetIds=I1()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Sk{constructor(){this.Wr=new Pd,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,s){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new Pd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{Jr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to=null;function bc(){return to===null?to=268435456+Math.round(2147483648*Math.random()):to++,"0x"+to.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="WebChannelConnection";class Rk extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,s,r,i){const o=bc(),a=this.Io(e,n);U("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.To(c,r,i),this.Eo(e,a,c,s).then(u=>(U("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Gs("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}Ao(e,n,s,r,i,o){return this.po(e,n,s,r,i)}To(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+lr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Io(e,n){const s=Ck[e];return`${this.wo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,s,r){const i=bc();return new Promise((o,a)=>{const c=new $C;c.setWithCredentials(!0),c.listenOnce(LC.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ic.NO_ERROR:const l=c.getResponseJson();U(Ve,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case Ic.TIMEOUT:U(Ve,`RPC '${e}' ${i} timed out`),a(new M(w.DEADLINE_EXCEEDED,"Request time out"));break;case Ic.HTTP_ERROR:const h=c.getStatus();if(U(Ve,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const v=function(E){const R=E.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(R)>=0?R:w.UNKNOWN}(g.status);a(new M(v,g.message))}else a(new M(w.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new M(w.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{U(Ve,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);U(Ve,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}Ro(e,n,s){const r=bc(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=xC(),a=MC(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new UC({})),this.To(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");U(Ve,`Creating RPC '${e}' stream ${r}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,d=!1;const g=new kk({io:E=>{d?U(Ve,`Not sending because RPC '${e}' stream ${r} is closed:`,E):(h||(U(Ve,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),U(Ve,`RPC '${e}' stream ${r} sending:`,E),l.send(E))},ro:()=>l.close()}),v=(E,R,C)=>{E.listen(R,L=>{try{C(L)}catch(D){setTimeout(()=>{throw D},0)}})};return v(l,Xi.EventType.OPEN,()=>{d||U(Ve,`RPC '${e}' stream ${r} transport opened.`)}),v(l,Xi.EventType.CLOSE,()=>{d||(d=!0,U(Ve,`RPC '${e}' stream ${r} transport closed`),g.fo())}),v(l,Xi.EventType.ERROR,E=>{d||(d=!0,Gs(Ve,`RPC '${e}' stream ${r} transport errored:`,E),g.fo(new M(w.UNAVAILABLE,"The operation could not be completed")))}),v(l,Xi.EventType.MESSAGE,E=>{var R;if(!d){const C=E.data[0];ve(!!C);const L=C,D=L.error||((R=L[0])===null||R===void 0?void 0:R.error);if(D){U(Ve,`RPC '${e}' stream ${r} received error:`,D);const X=D.status;let ge=function(Je){const nt=Ce[Je];if(nt!==void 0)return tv(nt)}(X),be=D.message;ge===void 0&&(ge=w.INTERNAL,be="Unknown error status: "+X+" with message "+D.message),d=!0,g.fo(new M(ge,be)),l.close()}else U(Ve,`RPC '${e}' stream ${r} received:`,C),g._o(C)}}),v(a,FC.STAT_EVENT,E=>{E.stat===cd.PROXY?U(Ve,`RPC '${e}' stream ${r} detected buffering proxy`):E.stat===cd.NOPROXY&&U(Ve,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.lo()},0),g}}function Sc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t){return new B1(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,n,s=1e3,r=1.5,i=6e4){this.si=e,this.timerId=n,this.vo=s,this.Po=r,this.bo=i,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),s=Math.max(0,Date.now()-this.Do),r=Math.max(0,n-s);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e,n,s,r,i,o,a,c){this.si=e,this.Mo=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new fv(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(un(n.toString()),un("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.$o===n&&this.Xo(s,r)},s=>{e(()=>{const r=new M(w.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Zo(r)})})}Xo(e,n){const s=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{s(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(r=>{s(()=>this.Zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Dk extends dv{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=H1(this.serializer,e),s=function(r){if(!("targetChange"in r))return G.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?G.min():i.readTime?Wt(i.readTime):G.min()}(e);return this.listener.eu(n,s)}nu(e){const n={};n.database=Eu(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=pu(a)?{documents:W1(r,a)}:{query:G1(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=rv(r,i.resumeToken);const c=vu(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(G.min())>0){o.readTime=Go(r,i.snapshotVersion.toTimestamp());const c=vu(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=Y1(this.serializer,e);s&&(n.labels=s),this.zo(n)}su(e){const n={};n.database=Eu(this.serializer),n.removeTarget=e,this.zo(n)}}class Nk extends dv{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=z1(e.writeResults,e.commitTime),s=Wt(e.commitTime);return this.listener.uu(s,n)}return ve(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=Eu(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>K1(this.serializer,s))};this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.hu=!1}lu(){if(this.hu)throw new M(w.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,s){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.po(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new M(w.UNKNOWN,r.toString())})}Ao(e,n,s,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Ao(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(w.UNKNOWN,i.toString())})}terminate(){this.hu=!0}}class Ok{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(un(n),this.wu=!1):U("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=i,this.vu.Jr(o=>{s.enqueueAndForget(async()=>{ys(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Q(a);c.Au.add(4),await Fi(c),c.Pu.set("Unknown"),c.Au.delete(4),await Ua(c)}(this))})}),this.Pu=new Ok(s,r)}}async function Ua(t){if(ys(t))for(const e of t.Ru)await e(!0)}async function Fi(t){for(const e of t.Ru)await e(!1)}function pv(t,e){const n=Q(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),Yl(n)?Ql(n):dr(n).Uo()&&Gl(n,e))}function gv(t,e){const n=Q(t),s=dr(n);n.Eu.delete(e),s.Uo()&&mv(n,e),n.Eu.size===0&&(s.Uo()?s.Qo():ys(n)&&n.Pu.set("Unknown"))}function Gl(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}dr(t).nu(e)}function mv(t,e){t.bu.Lt(e),dr(t).su(e)}function Ql(t){t.bu=new F1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),dr(t).start(),t.Pu.mu()}function Yl(t){return ys(t)&&!dr(t).qo()&&t.Eu.size>0}function ys(t){return Q(t).Au.size===0}function yv(t){t.bu=void 0}async function Mk(t){t.Eu.forEach((e,n)=>{Gl(t,e)})}async function Lk(t,e){yv(t),Yl(t)?(t.Pu.pu(e),Ql(t)):t.Pu.set("Unknown")}async function Fk(t,e,n){if(t.Pu.set("Online"),e instanceof sv&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Eu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Eu.delete(o),s.bu.removeTarget(o))}(t,e)}catch(s){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Qo(t,s)}else if(e instanceof go?t.bu.Wt(e):e instanceof nv?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(G.min()))try{const s=await hv(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.bu.ue(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.Eu.get(c);u&&r.Eu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const u=r.Eu.get(a);if(!u)return;r.Eu.set(a,u.withResumeToken(Xe.EMPTY_BYTE_STRING,u.snapshotVersion)),mv(r,a);const l=new Sn(u.target,a,c,u.sequenceNumber);Gl(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){U("RemoteStore","Failed to raise snapshot:",s),await Qo(t,s)}}async function Qo(t,e,n){if(!Oi(e))throw e;t.Au.add(1),await Fi(t),t.Pu.set("Offline"),n||(n=()=>hv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Ua(t)})}function vv(t,e){return e().catch(n=>Qo(t,n,e))}async function $a(t){const e=Q(t),n=Ln(e);let s=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;Uk(e);)try{const r=await Ik(e.localStore,s);if(r===null){e.Tu.length===0&&n.Qo();break}s=r.batchId,$k(e,r)}catch(r){await Qo(e,r)}wv(e)&&_v(e)}function Uk(t){return ys(t)&&t.Tu.length<10}function $k(t,e){t.Tu.push(e);const n=Ln(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function wv(t){return ys(t)&&!Ln(t).qo()&&t.Tu.length>0}function _v(t){Ln(t).start()}async function Vk(t){Ln(t).au()}async function Bk(t){const e=Ln(t);for(const n of t.Tu)e.ou(n.mutations)}async function jk(t,e,n){const s=t.Tu.shift(),r=Bl.from(s,e,n);await vv(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await $a(t)}async function qk(t,e){e&&Ln(t).ru&&await async function(n,s){if(r=s.code,x1(r)&&r!==w.ABORTED){const i=n.Tu.shift();Ln(n).Go(),await vv(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await $a(n)}var r}(t,e),wv(t)&&_v(t)}async function xd(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const s=ys(n);n.Au.add(3),await Fi(n),s&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Ua(n)}async function Hk(t,e){const n=Q(t);e?(n.Au.delete(2),await Ua(n)):e||(n.Au.add(2),await Fi(n),n.Pu.set("Unknown"))}function dr(t){return t.Vu||(t.Vu=function(e,n,s){const r=Q(e);return r.lu(),new Dk(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{oo:Mk.bind(null,t),co:Lk.bind(null,t),eu:Fk.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),Yl(t)?Ql(t):t.Pu.set("Unknown")):(await t.Vu.stop(),yv(t))})),t.Vu}function Ln(t){return t.Su||(t.Su=function(e,n,s){const r=Q(e);return r.lu(),new Nk(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{oo:Vk.bind(null,t),co:qk.bind(null,t),cu:Bk.bind(null,t),uu:jk.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await $a(t)):(await t.Su.stop(),t.Tu.length>0&&(U("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Xl(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jl(t,e){if(un("AsyncQueue",`${e}: ${t}`),Oi(t))return new M(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.comparator=e?(n,s)=>e(n,s)||V.comparator(n.key,s.key):(n,s)=>V.comparator(n.key,s.key),this.keyedMap=kr(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new $s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new $s;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this.Du=new Ie(V.comparator)}track(e){const n=e.doc.key,s=this.Du.get(n);s?e.type!==0&&s.type===3?this.Du=this.Du.insert(n,e):e.type===3&&s.type!==1?this.Du=this.Du.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Du=this.Du.remove(n):e.type===1&&s.type===2?this.Du=this.Du.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):K():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,s)=>{e.push(s)}),e}}class Zs{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Zs(e,n,$s.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(){this.xu=void 0,this.listeners=[]}}class zk{constructor(){this.queries=new fr(e=>jy(e),Pa),this.onlineState="Unknown",this.Nu=new Set}}async function Ev(t,e){const n=Q(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Kk),r)try{i.xu=await n.onListen(s)}catch(o){const a=Jl(o,`Initialization of query '${yu(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.ku(n.onlineState),i.xu&&e.Mu(i.xu)&&Zl(n)}async function Iv(t,e){const n=Q(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Wk(t,e){const n=Q(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Mu(r)&&(s=!0);o.xu=r}}s&&Zl(n)}function Gk(t,e,n){const s=Q(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Zl(t){t.Nu.forEach(e=>{e.next()})}class Tv{constructor(e,n,s){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=s||{}}Mu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Zs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Uu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=Zs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e){this.key=e}}class Sv{constructor(e){this.key=e}}class Qk{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=ee(),this.mutatedKeys=ee(),this.Zu=qy(e),this.tc=new $s(this.Zu)}get ec(){return this.Ju}nc(e,n){const s=n?n.sc:new Md,r=n?n.tc:this.tc;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),g=Oa(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let R=!1;d&&g?d.data.isEqual(g.data)?v!==E&&(s.track({type:3,doc:g}),R=!0):this.ic(d,g)||(s.track({type:2,doc:g}),R=!0,(c&&this.Zu(g,c)>0||u&&this.Zu(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),R=!0):d&&!g&&(s.track({type:1,doc:d}),R=!0,(c||u)&&(a=!0)),R&&(g?(o=o.add(g),i=E?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{tc:o,sc:s,ji:a,mutatedKeys:i}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const i=e.sc.Cu();i.sort((u,l)=>function(h,d){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return g(h)-g(d)}(u.type,l.type)||this.Zu(u.doc,l.doc)),this.rc(s);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,c=a!==this.Yu;return this.Yu=a,i.length!==0||c?{snapshot:new Zs(this.query,e.tc,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new Md,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=ee(),this.tc.forEach(s=>{this.cc(s.key)&&(this.Xu=this.Xu.add(s.key))});const n=[];return e.forEach(s=>{this.Xu.has(s)||n.push(new Sv(s))}),this.Xu.forEach(s=>{e.has(s)||n.push(new bv(s))}),n}ac(e){this.Ju=e.sr,this.Xu=ee();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return Zs.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class Yk{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Xk{constructor(e){this.key=e,this.lc=!1}}class Jk{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new fr(a=>jy(a),Pa),this._c=new Map,this.wc=new Set,this.mc=new Ie(V.comparator),this.gc=new Map,this.yc=new Kl,this.Ic={},this.Tc=new Map,this.Ec=Js.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function Zk(t,e){const n=uR(t);let s,r;const i=n.dc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.hc();else{const o=await Tk(n.localStore,ln(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await eR(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&pv(n.remoteStore,o)}return r}async function eR(t,e,n,s,r){t.Rc=(h,d,g)=>async function(v,E,R,C){let L=E.view.nc(R);L.ji&&(L=await Nd(v.localStore,E.query,!1).then(({documents:ge})=>E.view.nc(ge,L)));const D=C&&C.targetChanges.get(E.targetId),X=E.view.applyChanges(L,v.isPrimaryClient,D);return Fd(v,E.targetId,X.uc),X.snapshot}(t,h,d,g);const i=await Nd(t.localStore,e,!0),o=new Qk(e,i.sr),a=o.nc(i.documents),c=Li.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);Fd(t,n,u.uc);const l=new Yk(e,n,o);return t.dc.set(e,l),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function tR(t,e){const n=Q(t),s=n.dc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!Pa(i,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Iu(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),gv(n.remoteStore,s.targetId),Tu(n,s.targetId)}).catch(Pi)):(Tu(n,s.targetId),await Iu(n.localStore,s.targetId,!0))}async function nR(t,e,n){const s=lR(t);try{const r=await function(i,o){const a=Q(i),c=Ne.now(),u=o.reduce((d,g)=>d.add(g.key),ee());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=hn(),v=ee();return a.Xi.getEntries(d,u).next(E=>{g=E,g.forEach((R,C)=>{C.isValidDocument()||(v=v.add(R))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(E=>{l=E;const R=[];for(const C of o){const L=R1(C,l.get(C.key).overlayedDocument);L!=null&&R.push(new ms(C.key,L,Oy(L.value.mapValue),Rt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,R,o)}).next(E=>{h=E;const R=E.applyToLocalDocumentSet(l,v);return a.documentOverlayCache.saveOverlays(d,E.batchId,R)})}).then(()=>({batchId:h.batchId,changes:Ky(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Ic[i.currentUser.toKey()];c||(c=new Ie(ie)),c=c.insert(o,a),i.Ic[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ui(s,r.changes),await $a(s.remoteStore)}catch(r){const i=Jl(r,"Failed to persist write");n.reject(i)}}async function Av(t,e){const n=Q(t);try{const s=await _k(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.gc.get(i);o&&(ve(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.lc=!0:r.modifiedDocuments.size>0?ve(o.lc):r.removedDocuments.size>0&&(ve(o.lc),o.lc=!1))}),await Ui(n,s,e)}catch(s){await Pi(s)}}function Ld(t,e,n){const s=Q(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.dc.forEach((i,o)=>{const a=o.view.ku(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Q(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.ku(o)&&(c=!0)}),c&&Zl(a)}(s.eventManager,e),r.length&&s.fc.eu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function sR(t,e,n){const s=Q(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.gc.get(e),i=r&&r.key;if(i){let o=new Ie(V.comparator);o=o.insert(i,je.newNoDocument(i,G.min()));const a=ee().add(i),c=new La(G.min(),new Map,new Ie(ie),o,a);await Av(s,c),s.mc=s.mc.remove(i),s.gc.delete(e),eh(s)}else await Iu(s.localStore,e,!1).then(()=>Tu(s,e,n)).catch(Pi)}async function rR(t,e){const n=Q(t),s=e.batch.batchId;try{const r=await wk(n.localStore,e);kv(n,s,null),Cv(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ui(n,r)}catch(r){await Pi(r)}}async function iR(t,e,n){const s=Q(t);try{const r=await function(i,o){const a=Q(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(ve(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);kv(s,e,n),Cv(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ui(s,r)}catch(r){await Pi(r)}}function Cv(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function kv(t,e,n){const s=Q(t);let r=s.Ic[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Ic[s.currentUser.toKey()]=r}}function Tu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.dc.delete(s),n&&t.fc.vc(s,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(s=>{t.yc.containsKey(s)||Rv(t,s)})}function Rv(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(gv(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),eh(t))}function Fd(t,e,n){for(const s of n)s instanceof bv?(t.yc.addReference(s.key,e),oR(t,s)):s instanceof Sv?(U("SyncEngine","Document no longer in limbo: "+s.key),t.yc.removeReference(s.key,e),t.yc.containsKey(s.key)||Rv(t,s.key)):K()}function oR(t,e){const n=e.key,s=n.path.canonicalString();t.mc.get(n)||t.wc.has(s)||(U("SyncEngine","New document in limbo: "+n),t.wc.add(s),eh(t))}function eh(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new V(ye.fromString(e)),s=t.Ec.next();t.gc.set(s,new Xk(n)),t.mc=t.mc.insert(n,s),pv(t.remoteStore,new Sn(ln(Ul(n.path)),s,"TargetPurposeLimboResolution",Pl.ct))}}async function Ui(t,e,n){const s=Q(t),r=[],i=[],o=[];s.dc.isEmpty()||(s.dc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Wl.Bi(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.fc.eu(r),await async function(a,c){const u=Q(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>b.forEach(c,h=>b.forEach(h.$i,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>b.forEach(h.Fi,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Oi(l))throw l;U("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Hi.get(h),g=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(g);u.Hi=u.Hi.insert(h,v)}}}(s.localStore,i))}async function aR(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const s=await lv(n.localStore,e);n.currentUser=e,function(r,i){r.Tc.forEach(o=>{o.forEach(a=>{a.reject(new M(w.CANCELLED,i))})}),r.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ui(n,s.tr)}}function cR(t,e){const n=Q(t),s=n.gc.get(e);if(s&&s.lc)return ee().add(s.key);{let r=ee();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.dc.get(o);r=r.unionWith(a.view.ec)}return r}}function uR(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Av.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sR.bind(null,e),e.fc.eu=Wk.bind(null,e.eventManager),e.fc.vc=Gk.bind(null,e.eventManager),e}function lR(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iR.bind(null,e),e}class Ud{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Fa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return vk(this.persistence,new mk,e.initialUser,this.serializer)}createPersistence(e){return new pk(zl.js,this.serializer)}createSharedClientState(e){return new Sk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class hR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ld(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=aR.bind(null,this.syncEngine),await Hk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new zk}createDatastore(e){const n=Fa(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Rk(r));var r;return function(i,o,a,c){return new Pk(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Ld(this.syncEngine,a,0),o=Od.D()?new Od:new Ak,new xk(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new Jk(s,r,i,o,a,c);return u&&(l.Ac=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);U("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Fi(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):un("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Be.UNAUTHENTICATED,this.clientId=Dy.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Jl(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Ac(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await lv(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $d(t,e){t.asyncQueue.verifyOperationInProgress();const n=await pR(t);U("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>xd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>xd(e.remoteStore,i)),t._onlineComponents=e}function dR(t){return t.name==="FirebaseError"?t.code===w.FAILED_PRECONDITION||t.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function pR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ac(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!dR(n))throw n;Gs("Error using user provided cache. Falling back to memory cache: "+n),await Ac(t,new Ud)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Ac(t,new Ud);return t._offlineComponents}async function Nv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await $d(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await $d(t,new hR))),t._onlineComponents}function gR(t){return Nv(t).then(e=>e.syncEngine)}async function Pv(t){const e=await Nv(t),n=e.eventManager;return n.onListen=Zk.bind(null,e.syncEngine),n.onUnlisten=tR.bind(null,e.syncEngine),n}function mR(t,e,n={}){const s=new rn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Dv({next:h=>{i.enqueueAndForget(()=>Iv(r,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new M(w.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new M(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Tv(Ul(o.path),u,{includeMetadataChanges:!0,Uu:!0});return Ev(r,l)}(await Pv(t),t.asyncQueue,e,n,s)),s.promise}function yR(t,e,n={}){const s=new rn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Dv({next:h=>{i.enqueueAndForget(()=>Iv(r,l)),h.fromCache&&a.source==="server"?c.reject(new M(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Tv(o,u,{includeMetadataChanges:!0,Uu:!0});return Ev(r,l)}(await Pv(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(t,e,n){if(!n)throw new M(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vR(t,e,n,s){if(e===!0&&s===!0)throw new M(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Bd(t){if(!V.isDocumentKey(t))throw new M(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function jd(t){if(V.isDocumentKey(t))throw new M(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Va(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function fn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Va(t);throw new M(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new BC;switch(n.type){case"firstParty":return new KC(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Vd.get(e);n&&(U("ComponentProvider","Removing Datastore"),Vd.delete(e),n.terminate())}(this),Promise.resolve()}}function wR(t,e,n,s={}){var r;const i=(t=fn(t,Ba))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Gs("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Be.MOCK_USER;else{o=ME(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new M(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Be(c)}t._authCredentials=new jC(new Ry(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}}class pr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new pr(this.firestore,e,this._query)}}class Nn extends pr{constructor(e,n,s){super(e,n,Ul(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new V(e))}withConverter(e){return new Nn(this.firestore,e,this._path)}}function WD(t,e,...n){if(t=xe(t),Ov("collection","path",e),t instanceof Ba){const s=ye.fromString(e,...n);return jd(s),new Nn(t,null,s)}{if(!(t instanceof ct||t instanceof Nn))throw new M(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ye.fromString(e,...n));return jd(s),new Nn(t.firestore,null,s)}}function _R(t,e,...n){if(t=xe(t),arguments.length===1&&(e=Dy.A()),Ov("doc","path",e),t instanceof Ba){const s=ye.fromString(e,...n);return Bd(s),new ct(t,null,new V(s))}{if(!(t instanceof ct||t instanceof Nn))throw new M(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ye.fromString(e,...n));return Bd(s),new ct(t.firestore,t instanceof Nn?t.converter:null,new V(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new fv(this,"async_queue_retry"),this.Yc=()=>{const n=Sc();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=Sc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=Sc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new rn;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!Oi(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(s=>{this.zc=s,this.Wc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw un("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Wc=!1,s))));return this.Kc=n,n}enqueueAfterDelay(e,n,s){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const r=Xl.createAndSchedule(this,e,n,s,i=>this.ea(i));return this.jc.push(r),r}Xc(){this.zc&&K()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class gr extends Ba{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new ER,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||xv(this),this._firestoreClient.terminate()}}function IR(t,e){const n=typeof t=="object"?t:Wu(),s=typeof t=="string"?t:e||"(default)",r=ir(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=hg("firestore");i&&wR(r,...i)}return r}function th(t){return t._firestoreClient||xv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function xv(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,u){return new s1(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new fR(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new er(Xe.fromBase64String(e))}catch(n){throw new M(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new er(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=/^__.*__$/;class bR{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ms(e,this.data,this.fieldMask,n,this.fieldTransforms):new Mi(e,this.data,n,this.fieldTransforms)}}function Lv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class rh{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.oa(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new rh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ca({path:s,ha:!1});return r.la(e),r}fa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ca({path:s,ha:!1});return r.oa(),r}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Yo(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Lv(this.ua)&&TR.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class SR{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Fa(e)}ga(e,n,s,r=!1){return new rh({ua:e,methodName:n,ma:s,path:He.emptyPath(),ha:!1,wa:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ih(t){const e=t._freezeSettings(),n=Fa(t._databaseId);return new SR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Fv(t,e,n,s,r,i={}){const o=t.ga(i.merge||i.mergeFields?2:0,e,n,r);Vv("Data must be an object, but it was:",o,s);const a=Uv(s,o);let c,u;if(i.merge)c=new At(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=CR(e,h,n);if(!o.contains(d))throw new M(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);RR(l,d)||l.push(d)}c=new At(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new bR(new gt(a),c,u)}function AR(t,e,n,s=!1){return oh(n,t.ga(s?4:3,e))}function oh(t,e){if($v(t=xe(t)))return Vv("Unsupported field value:",e,t),Uv(t,e);if(t instanceof Mv)return function(n,s){if(!Lv(s.ua))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=oh(o,s.da(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=xe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return T1(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ne.fromDate(n);return{timestampValue:Go(s.serializer,r)}}if(n instanceof Ne){const r=new Ne(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Go(s.serializer,r)}}if(n instanceof sh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof er)return{bytesValue:rv(s.serializer,n._byteString)};if(n instanceof ct){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Hl(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${Va(n)}`)}(t,e)}function Uv(t,e){const n={};return Ny(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hr(t,(s,r)=>{const i=oh(r,e.aa(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function $v(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof sh||t instanceof er||t instanceof ct||t instanceof Mv)}function Vv(t,e,n){if(!$v(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Va(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function CR(t,e,n){if((e=xe(e))instanceof nh)return e._internalPath;if(typeof e=="string")return Bv(t,e);throw Yo("Field path arguments must be of type string or ",t,!1,void 0,n)}const kR=new RegExp("[~\\*/\\[\\]]");function Bv(t,e,n){if(e.search(kR)>=0)throw Yo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nh(...e.split("."))._internalPath}catch{throw Yo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Yo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new M(w.INVALID_ARGUMENT,a+t+c)}function RR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ah("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class DR extends jv{data(){return super.data()}}function ah(t,e){return typeof e=="string"?Bv(t,e):e instanceof nh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ch{}class PR extends ch{}function GD(t,e,...n){let s=[];e instanceof ch&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof uh).length,o=r.filter(a=>a instanceof ja).length;if(i>1||i>0&&o>0)throw new M(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class ja extends PR{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new ja(e,n,s)}_apply(e){const n=this._parse(e);return qv(e._query,n),new pr(e.firestore,e.converter,gu(e._query,n))}_parse(e){const n=ih(e.firestore);return function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new M(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Kd(l,u);const d=[];for(const g of l)d.push(Hd(a,r,g));h={arrayValue:{values:d}}}else h=Hd(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Kd(l,u),h=AR(o,i,l,u==="in"||u==="not-in");return De.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function QD(t,e,n){const s=e,r=ah("where",t);return ja._create(r,s,n)}class uh extends ch{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new uh(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:xt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)qv(i,a),i=gu(i,a)}(e._query,n),new pr(e.firestore,e.converter,gu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Hd(t,e,n){if(typeof(n=xe(n))=="string"){if(n==="")throw new M(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!By(e)&&n.indexOf("/")!==-1)throw new M(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ye.fromString(n));if(!V.isDocumentKey(s))throw new M(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return pd(t,new V(s))}if(n instanceof ct)return pd(t,n._key);throw new M(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Va(n)}.`)}function Kd(t,e){if(!Array.isArray(t)||t.length===0)throw new M(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function qv(t,e){if(e.isInequality()){const s=$l(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new M(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Vy(t);i!==null&&OR(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function OR(t,e,n){if(!n.isEqual(e))throw new M(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class xR{convertValue(e,n="none"){switch(ls(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return hr(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new sh(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=xl(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(li(e));default:return null}}convertTimestamp(e){const n=Mn(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ye.fromString(e);ve(uv(s));const r=new hi(s.get(1),s.get(3)),i=new V(s.popFirst(5));return r.isEqual(n)||un(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Kv extends jv{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new mo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ah("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class mo extends Kv{data(e={}){return super.data(e)}}class MR{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Dr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new mo(this._firestore,this._userDataWriter,s.key,s,new Dr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new mo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Dr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new mo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Dr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:LR(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function LR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YD(t){t=fn(t,ct);const e=fn(t.firestore,gr);return mR(th(e),t._key).then(n=>FR(e,t,n))}class zv extends xR{constructor(e){super(),this.firestore=e}convertBytes(e){return new er(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function XD(t){t=fn(t,pr);const e=fn(t.firestore,gr),n=th(e),s=new zv(e);return NR(t._query),yR(n,t._query).then(r=>new MR(e,s,t,r))}function JD(t,e,n){t=fn(t,ct);const s=fn(t.firestore,gr),r=Hv(t.converter,e,n);return lh(s,[Fv(ih(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Rt.none())])}function ZD(t){return lh(fn(t.firestore,gr),[new Vl(t._key,Rt.none())])}function eN(t,e){const n=fn(t.firestore,gr),s=_R(t),r=Hv(t.converter,e);return lh(n,[Fv(ih(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Rt.exists(!1))]).then(()=>s)}function lh(t,e){return function(n,s){const r=new rn;return n.asyncQueue.enqueueAndForget(async()=>nR(await gR(n),s,r)),r.promise}(th(t),e)}function FR(t,e,n){const s=n.docs.get(e._key),r=new zv(t);return new Kv(t,r,e._key,s,new Dr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){lr=n})(or),Nt(new yt("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new gr(new qC(n.getProvider("auth-internal")),new WC(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hi(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),ot(ud,"3.11.0",t),ot(ud,"3.11.0","esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,n,s){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(r=>this.auth=r,()=>{}),this.messaging||n.get().then(r=>this.messaging=r,()=>{}),this.appCheck||s.get().then(r=>this.appCheck=r,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),s=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="us-central1";class $R{constructor(e,n,s,r,i=bu,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new UR(n,s,r),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(i);this.customDomain=a.origin,this.region=bu}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function VR(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}const zd="@firebase/functions",Wd="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR="auth-internal",jR="app-check-internal",qR="messaging-internal";function HR(t,e){const n=(s,{instanceIdentifier:r})=>{const i=s.getProvider("app").getImmediate(),o=s.getProvider(BR),a=s.getProvider(qR),c=s.getProvider(jR);return new $R(i,o,a,c,r,t)};Nt(new yt(Wv,n,"PUBLIC").setMultipleInstances(!0)),ot(zd,Wd,e),ot(zd,Wd,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(t=Wu(),e=bu){const s=ir(xe(t),Wv).getImmediate({identifier:e}),r=hg("functions");return r&&zR(s,...r),s}function zR(t,e,n){VR(xe(t),e,n)}HR(fetch.bind(self));const WR={apiKey:"AIzaSyDtHDqAiZSBSSe5S5U4FLQxcoStC6jW8FI",authDomain:"cardiomyopathy-ada0f.firebaseapp.com",projectId:"cardiomyopathy-ada0f",storageBucket:"cardiomyopathy-ada0f.appspot.com",messagingSenderId:"66124791357",appId:"1:66124791357:web:7dd55dbc50febdda77b454",measurementId:"G-X03WBZWS2B"},GR=vg(WR),QR=LA(),tN=IR();KR(GR);const Cc=()=>{const t=JSON.parse(sessionStorage.getItem("user"));return t?{isLoggedIn:!0,firstName:t.firstName,username:t.username,lastName:t.lastName,institute:t.institute,email:t.email,role:t.role}:{isLoggedIn:!1,firstName:"",username:"",lastName:"",institute:"",email:"",role:""}};function YR(t){return{all:t=t||new Map,on:function(e,n){var s=t.get(e);s?s.push(n):t.set(e,[n])},off:function(e,n){var s=t.get(e);s&&(n?s.splice(s.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var s=t.get(e);s&&s.slice().map(function(r){r(n)}),(s=t.get("*"))&&s.slice().map(function(r){r(e,n)})}}}const Gd=YR();const XR="/img/heartlogo.png";const JR=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},ZR={name:"Layout",setup(){const t=SE(),e=_o(Cc()),n=_o(!1),s=it(()=>e.value.firstName.charAt(0).toUpperCase()+e.value.firstName.slice(1).toLowerCase()),r=async()=>{try{await bS(QR),sessionStorage.removeItem("user"),Gd.emit("user-changed"),t.push("/login")}catch(a){console.error(a)}},i=it(()=>n.value?"flex":"hidden"),o=()=>{n.value=!n.value,console.log(n.value)};return Np(()=>{e.value=Cc(),Gd.on("user-changed",()=>{e.value=Cc()})}),Nr(t.currentRoute,()=>{n.value=!1}),{user:e,capitalizedFirstName:s,toggleSidebar:o,sidebarClasses:i,sidebarOpen:n,logout:r}}},eD={class:"flex flex-row min-h-screen w-full bg-gray-100"},tD=he("i",{class:"fa fa-home my-auto w-12"},null,-1),nD=he("span",{class:"w-12"},"Home",-1),sD=he("i",{class:"fa-solid fa-chart-simple my-auto w-12"},null,-1),rD=he("span",{class:"w-12"},"Charts",-1),iD={key:0,class:"fa fa-user my-auto w-12"},oD={key:1,class:"fas fa-user-doctor my-auto w-12"},aD={class:"w-12"},cD={key:0,class:"fa fa-user my-auto w-12"},uD={class:"w-12"},lD=he("i",{class:"fa fa-newspaper w-12 my-auto"},null,-1),hD=he("span",{class:"w-12"},"News",-1),fD=he("i",{class:"fa-solid fa-circle-info my-auto w-12"},null,-1),dD=he("span",{class:"w-12"},"FAQ",-1),pD=he("i",{class:"fa-solid fa-book-open w-12 my-auto"},null,-1),gD=he("span",{class:"w-12"},"HPO",-1),mD={key:3,class:"mt-auto"},yD=he("i",{class:"fa fa-sign-in w-12 my-auto"},null,-1),vD=he("span",{class:"w-12"},"Login",-1),wD=he("i",{class:"fa fa-sign-in w-12 my-auto"},null,-1),_D=he("span",{class:"w-12"},"Logout",-1),ED={class:"flex-1 overflow-y-hidden"},ID={class:"w-full h-32 lg:mb-10 py-4 flex justify-content shadow-md lg:shadow-none"},TD=he("i",{class:"fa-solid fa-bars text-slate-600 text-2xl"},null,-1),bD=[TD],SD=he("div",{class:"h-full mx-auto flex justify-center items-center"},[he("span",{class:"text-slate-600 font-extrabold text-lg lg:text-4xl tracking-tight -mr-3 lg:-mr-4"},"GR"),he("img",{class:"h-3/5 lg:h-3/4",src:XR}),he("span",{class:"text-slate-600 font-extrabold text-lg lg:text-4xl tracking-tight -ml-3 lg:-ml-4"},"PH")],-1);function AD(t,e,n,s,r,i){const o=xp("router-link");return dt(),qn("div",eD,[he("div",{id:"sidebar",class:Xo(["h-full z-40 fixed lg:flex w-1/2 lg:w-1/6 bg-slate-500 text-white gap-8 shadow-lg items-center py-40 font-semibold tracking-wider text-lg flex-col",s.sidebarClasses])},[s.sidebarOpen?(dt(),qn("i",{key:0,onClick:e[0]||(e[0]=(...a)=>s.toggleSidebar&&s.toggleSidebar(...a)),class:"z-50 absolute left-8 top-8 fa-solid fa-xmark"})):Es("",!0),Ee(o,{class:"flex flex-row",to:"/"},{default:It(()=>[tD,Jt(),nD]),_:1}),Ee(o,{class:"flex flex-row",to:"/charts"},{default:It(()=>[sD,Jt(),rD]),_:1}),s.user.isLoggedIn?(dt(),Yr(o,{key:1,class:"flex flex-row",to:"/profile"},{default:It(()=>[s.user.role!=="doctor"?(dt(),qn("i",iD)):(dt(),qn("i",oD)),Jt(),he("span",aD,ph(s.user.isLoggedIn?s.capitalizedFirstName:"Profile"),1)]),_:1})):Es("",!0),s.user.isLoggedIn?Es("",!0):(dt(),Yr(o,{key:2,class:"flex flex-row",to:"/login"},{default:It(()=>[s.user.role!=="doctor"?(dt(),qn("i",cD)):Es("",!0),he("span",uD,ph(s.user.isLoggedIn?s.capitalizedFirstName:"Profile"),1)]),_:1})),Ee(o,{class:"flex flex-row",to:"/news"},{default:It(()=>[lD,Jt(),hD]),_:1}),Ee(o,{class:"flex flex-row",to:"/faq"},{default:It(()=>[fD,Jt(),dD]),_:1}),Ee(o,{class:"flex flex-row",to:"/HPO"},{default:It(()=>[pD,Jt(),gD]),_:1}),s.user.isLoggedIn?Es("",!0):(dt(),qn("div",mD,[Ee(o,{class:"flex flex-row",to:"/login"},{default:It(()=>[yD,Jt(),vD]),_:1})])),s.user.isLoggedIn?(dt(),qn("div",{key:4,class:"mt-auto",onClick:e[1]||(e[1]=(...a)=>s.logout&&s.logout(...a))},[Ee(o,{class:"flex flex-row",to:"/login"},{default:It(()=>[wD,Jt(),_D]),_:1})])):Es("",!0)],2),he("main",ED,[he("header",ID,[he("div",{onClick:e[2]||(e[2]=(...a)=>s.toggleSidebar&&s.toggleSidebar(...a)),class:"absolute lg:hidden left-10 top-12"},bD),SD]),m_(t.$slots,"default")])])}const CD=JR(ZR,[["render",AD]]),kD={__name:"App",setup(t){return(e,n)=>{const s=xp("RouterView");return dt(),Yr(CD,null,{default:It(()=>[Ee(s)]),_:1})}}},RD="modulepreload",DD=function(t){return"/"+t},Qd={},Xt=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=DD(i),i in Qd)return;Qd[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let l=r.length-1;l>=0;l--){const h=r[l];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":RD,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},ND=TE({history:$0("/"),routes:[{path:"/",name:"home",component:()=>Xt(()=>import("./HomeView-467d27b2.js"),["assets/HomeView-467d27b2.js","assets/HomeView-ae0ef087.css"])},{path:"/charts",name:"charts",component:()=>Xt(()=>import("./ChartView-052a4e86.js"),[])},{path:"/login",name:"login",component:()=>Xt(()=>import("./LoginView-fff92c38.js"),["assets/LoginView-fff92c38.js","assets/LoginView-e3b0c442.css"])},{path:"/profile",name:"profile",component:()=>Xt(()=>import("./Profile-318d515f.js"),[])},{path:"/register",name:"register",component:()=>Xt(()=>import("./RegisterView-5103e249.js"),["assets/RegisterView-5103e249.js","assets/LoginView-e3b0c442.css"])},{path:"/FAQ",name:"FAQ",component:()=>Xt(()=>import("./FAQ-51a9d099.js"),[])},{path:"/news",name:"news",component:()=>Xt(()=>import("./news-bafd54b5.js"),["assets/news-bafd54b5.js","assets/axios-4a70c6fc.js"])},{path:"/reset-password",name:"reset-password",component:()=>Xt(()=>import("./Reset-8f3d0b93.js"),[])},{path:"/HPO",name:"HPO",component:()=>Xt(()=>import("./HPO-7f5067a5.js"),["assets/HPO-7f5067a5.js","assets/axios-4a70c6fc.js"])}]});function PD(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gv={exports:{}};(function(t,e){(function(){var n={expires:"1d",path:"; path=/",domain:"",secure:"",sameSite:"; SameSite=Lax"},s={install:function(r,i){i&&this.config(i.expires,i.path,i.domain,i.secure,i.sameSite),r.prototype&&(r.prototype.$cookies=this),r.config&&r.config.globalProperties&&(r.config.globalProperties.$cookies=this,r.provide("$cookies",this)),r.$cookies=this},config:function(r,i,o,a,c){n.expires=r||"1d",n.path=i?"; path="+i:"; path=/",n.domain=o?"; domain="+o:"",n.secure=a?"; Secure":"",n.sameSite=c?"; SameSite="+c:"; SameSite=Lax"},get:function(r){var i=decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(r).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null;if(i&&(i.substring(0,1)==="{"&&i.substring(i.length-1,i.length)==="}"||i.substring(0,1)==="["&&i.substring(i.length-1,i.length)==="]"))try{i=JSON.parse(i)}catch{return i}return i},set:function(r,i,o,a,c,u,l){if(r){if(/^(?:expires|max\-age|path|domain|secure|SameSite)$/i.test(r))throw new Error('Cookie name illegality. Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]	 current key name: '+r)}else throw new Error("Cookie name is not found in the first argument.");i&&typeof i=="object"&&(i=JSON.stringify(i));var h="";if(o=o??n.expires,o&&o!=0)switch(o.constructor){case Number:o===1/0||o===-1?h="; expires=Fri, 31 Dec 9999 23:59:59 GMT":h="; max-age="+o;break;case String:if(/^(?:\d+(y|m|d|h|min|s))$/i.test(o)){var d=o.replace(/^(\d+)(?:y|m|d|h|min|s)$/i,"$1");switch(o.replace(/^(?:\d+)(y|m|d|h|min|s)$/i,"$1").toLowerCase()){case"m":h="; max-age="+ +d*2592e3;break;case"d":h="; max-age="+ +d*86400;break;case"h":h="; max-age="+ +d*3600;break;case"min":h="; max-age="+ +d*60;break;case"s":h="; max-age="+d;break;case"y":h="; max-age="+ +d*31104e3;break}}else h="; expires="+o;break;case Date:h="; expires="+o.toUTCString();break}return document.cookie=encodeURIComponent(r)+"="+encodeURIComponent(i)+h+(c?"; domain="+c:n.domain)+(a?"; path="+a:n.path)+(u==null?n.secure:u?"; Secure":"")+(l==null?n.sameSite:l?"; SameSite="+l:""),this},remove:function(r,i,o){return!r||!this.isKey(r)?!1:(document.cookie=encodeURIComponent(r)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(o?"; domain="+o:n.domain)+(i?"; path="+i:n.path)+"; SameSite=Lax",!0)},isKey:function(r){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(r).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){if(!document.cookie)return[];for(var r=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),i=0;i<r.length;i++)r[i]=decodeURIComponent(r[i]);return r}};t.exports=s,typeof window<"u"&&(window.$cookies=s)})()})(Gv);var OD=Gv.exports;const xD=PD(OD);const qa=y0(kD);qa.use(E0());qa.use(ND);qa.use(xD);qa.mount("#app");export{BD as A,UD as B,Ee as C,It as D,Jt as E,Tt as F,ZD as G,Xo as H,_o as I,Cc as J,eN as K,SE as L,it as M,Np as N,qD as O,QD as P,GD as R,JR as _,FD as a,he as b,qn as c,Es as d,jD as e,IR as f,WD as g,XD as h,YD as i,$D as j,LD as k,Yr as l,GR as m,HD as n,dt as o,QR as p,tN as q,xp as r,zD as s,ph as t,JD as u,VD as v,MD as w,_R as x,KD as y,Gd as z};
