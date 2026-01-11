function Rx(t,e){for(var r=0;r<e.length;r++){const n=e[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(n,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function Px(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var S0={exports:{}},tu={},C0={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ta=Symbol.for("react.element"),Nx=Symbol.for("react.portal"),Ox=Symbol.for("react.fragment"),Dx=Symbol.for("react.strict_mode"),Lx=Symbol.for("react.profiler"),Vx=Symbol.for("react.provider"),Mx=Symbol.for("react.context"),$x=Symbol.for("react.forward_ref"),Fx=Symbol.for("react.suspense"),Ux=Symbol.for("react.memo"),zx=Symbol.for("react.lazy"),vv=Symbol.iterator;function jx(t){return t===null||typeof t!="object"?null:(t=vv&&t[vv]||t["@@iterator"],typeof t=="function"?t:null)}var k0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R0=Object.assign,P0={};function No(t,e,r){this.props=t,this.context=e,this.refs=P0,this.updater=r||k0}No.prototype.isReactComponent={};No.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};No.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function N0(){}N0.prototype=No.prototype;function lp(t,e,r){this.props=t,this.context=e,this.refs=P0,this.updater=r||k0}var cp=lp.prototype=new N0;cp.constructor=lp;R0(cp,No.prototype);cp.isPureReactComponent=!0;var yv=Array.isArray,O0=Object.prototype.hasOwnProperty,up={current:null},D0={key:!0,ref:!0,__self:!0,__source:!0};function L0(t,e,r){var n,i={},o=null,s=null;if(e!=null)for(n in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)O0.call(e,n)&&!D0.hasOwnProperty(n)&&(i[n]=e[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(n in l=t.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:Ta,type:t,key:o,ref:s,props:i,_owner:up.current}}function Bx(t,e){return{$$typeof:Ta,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function dp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ta}function qx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var _v=/\/+/g;function md(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qx(""+t.key):e.toString(36)}function zl(t,e,r,n,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Ta:case Nx:s=!0}}if(s)return s=t,i=i(s),t=n===""?"."+md(s,0):n,yv(i)?(r="",t!=null&&(r=t.replace(_v,"$&/")+"/"),zl(i,e,r,"",function(u){return u})):i!=null&&(dp(i)&&(i=Bx(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(_v,"$&/")+"/")+t)),e.push(i)),1;if(s=0,n=n===""?".":n+":",yv(t))for(var l=0;l<t.length;l++){o=t[l];var c=n+md(o,l);s+=zl(o,e,r,c,i)}else if(c=jx(t),typeof c=="function")for(t=c.call(t),l=0;!(o=t.next()).done;)o=o.value,c=n+md(o,l++),s+=zl(o,e,r,c,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function ll(t,e,r){if(t==null)return t;var n=[],i=0;return zl(t,n,"","",function(o){return e.call(r,o,i++)}),n}function Hx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Tt={current:null},jl={transition:null},Wx={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:jl,ReactCurrentOwner:up};function V0(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:ll,forEach:function(t,e,r){ll(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return ll(t,function(){e++}),e},toArray:function(t){return ll(t,function(e){return e})||[]},only:function(t){if(!dp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=No;se.Fragment=Ox;se.Profiler=Lx;se.PureComponent=lp;se.StrictMode=Dx;se.Suspense=Fx;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wx;se.act=V0;se.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=R0({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=up.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)O0.call(e,c)&&!D0.hasOwnProperty(c)&&(n[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:Ta,type:t.type,key:i,ref:o,props:n,_owner:s}};se.createContext=function(t){return t={$$typeof:Mx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Vx,_context:t},t.Consumer=t};se.createElement=L0;se.createFactory=function(t){var e=L0.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:$x,render:t}};se.isValidElement=dp;se.lazy=function(t){return{$$typeof:zx,_payload:{_status:-1,_result:t},_init:Hx}};se.memo=function(t,e){return{$$typeof:Ux,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=jl.transition;jl.transition={};try{t()}finally{jl.transition=e}};se.unstable_act=V0;se.useCallback=function(t,e){return Tt.current.useCallback(t,e)};se.useContext=function(t){return Tt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return Tt.current.useDeferredValue(t)};se.useEffect=function(t,e){return Tt.current.useEffect(t,e)};se.useId=function(){return Tt.current.useId()};se.useImperativeHandle=function(t,e,r){return Tt.current.useImperativeHandle(t,e,r)};se.useInsertionEffect=function(t,e){return Tt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return Tt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return Tt.current.useMemo(t,e)};se.useReducer=function(t,e,r){return Tt.current.useReducer(t,e,r)};se.useRef=function(t){return Tt.current.useRef(t)};se.useState=function(t){return Tt.current.useState(t)};se.useSyncExternalStore=function(t,e,r){return Tt.current.useSyncExternalStore(t,e,r)};se.useTransition=function(){return Tt.current.useTransition()};se.version="18.3.1";C0.exports=se;var Q=C0.exports;const Kx=Px(Q),Gx=Rx({__proto__:null,default:Kx},[Q]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qx=Q,Yx=Symbol.for("react.element"),Xx=Symbol.for("react.fragment"),Jx=Object.prototype.hasOwnProperty,Zx=Qx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eA={key:!0,ref:!0,__self:!0,__source:!0};function M0(t,e,r){var n,i={},o=null,s=null;r!==void 0&&(o=""+r),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(n in e)Jx.call(e,n)&&!eA.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:Yx,type:t,key:o,ref:s,props:i,_owner:Zx.current}}tu.Fragment=Xx;tu.jsx=M0;tu.jsxs=M0;S0.exports=tu;var U=S0.exports,$0={exports:{}},Ft={},F0={exports:{}},U0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,Z){var ie=H.length;H.push(Z);e:for(;0<ie;){var q=ie-1>>>1,ee=H[q];if(0<i(ee,Z))H[q]=Z,H[ie]=ee,ie=q;else break e}}function r(H){return H.length===0?null:H[0]}function n(H){if(H.length===0)return null;var Z=H[0],ie=H.pop();if(ie!==Z){H[0]=ie;e:for(var q=0,ee=H.length,fe=ee>>>1;q<fe;){var Jt=2*(q+1)-1,Zt=H[Jt],er=Jt+1,Ke=H[er];if(0>i(Zt,ie))er<ee&&0>i(Ke,Zt)?(H[q]=Ke,H[er]=ie,q=er):(H[q]=Zt,H[Jt]=ie,q=Jt);else if(er<ee&&0>i(Ke,ie))H[q]=Ke,H[er]=ie,q=er;else break e}}return Z}function i(H,Z){var ie=H.sortIndex-Z.sortIndex;return ie!==0?ie:H.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],f=1,p=null,m=3,T=!1,S=!1,P=!1,N=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(H){for(var Z=r(u);Z!==null;){if(Z.callback===null)n(u);else if(Z.startTime<=H)n(u),Z.sortIndex=Z.expirationTime,e(c,Z);else break;Z=r(u)}}function D(H){if(P=!1,x(H),!S)if(r(c)!==null)S=!0,Kn(F);else{var Z=r(u);Z!==null&&Xt(D,Z.startTime-H)}}function F(H,Z){S=!1,P&&(P=!1,b(v),v=-1),T=!0;var ie=m;try{for(x(Z),p=r(c);p!==null&&(!(p.expirationTime>Z)||H&&!A());){var q=p.callback;if(typeof q=="function"){p.callback=null,m=p.priorityLevel;var ee=q(p.expirationTime<=Z);Z=t.unstable_now(),typeof ee=="function"?p.callback=ee:p===r(c)&&n(c),x(Z)}else n(c);p=r(c)}if(p!==null)var fe=!0;else{var Jt=r(u);Jt!==null&&Xt(D,Jt.startTime-Z),fe=!1}return fe}finally{p=null,m=ie,T=!1}}var z=!1,_=null,v=-1,w=5,E=-1;function A(){return!(t.unstable_now()-E<w)}function C(){if(_!==null){var H=t.unstable_now();E=H;var Z=!0;try{Z=_(!0,H)}finally{Z?I():(z=!1,_=null)}}else z=!1}var I;if(typeof y=="function")I=function(){y(C)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,Rr=it.port2;it.port1.onmessage=C,I=function(){Rr.postMessage(null)}}else I=function(){N(C,0)};function Kn(H){_=H,z||(z=!0,I())}function Xt(H,Z){v=N(function(){H(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){S||T||(S=!0,Kn(F))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(H){switch(m){case 1:case 2:case 3:var Z=3;break;default:Z=m}var ie=m;m=Z;try{return H()}finally{m=ie}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,Z){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ie=m;m=H;try{return Z()}finally{m=ie}},t.unstable_scheduleCallback=function(H,Z,ie){var q=t.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?q+ie:q):ie=q,H){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=ie+ee,H={id:f++,callback:Z,priorityLevel:H,startTime:ie,expirationTime:ee,sortIndex:-1},ie>q?(H.sortIndex=ie,e(u,H),r(c)===null&&H===r(u)&&(P?(b(v),v=-1):P=!0,Xt(D,ie-q))):(H.sortIndex=ee,e(c,H),S||T||(S=!0,Kn(F))),H},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(H){var Z=m;return function(){var ie=m;m=Z;try{return H.apply(this,arguments)}finally{m=ie}}}})(U0);F0.exports=U0;var tA=F0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rA=Q,$t=tA;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var z0=new Set,qs={};function Ri(t,e){go(t,e),go(t+"Capture",e)}function go(t,e){for(qs[t]=e,t=0;t<e.length;t++)z0.add(e[t])}var Kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yh=Object.prototype.hasOwnProperty,nA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wv={},bv={};function iA(t){return yh.call(bv,t)?!0:yh.call(wv,t)?!1:nA.test(t)?bv[t]=!0:(wv[t]=!0,!1)}function oA(t,e,r,n){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function sA(t,e,r,n){if(e===null||typeof e>"u"||oA(t,e,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xt(t,e,r,n,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tt[t]=new xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tt[e]=new xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tt[t]=new xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tt[t]=new xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tt[t]=new xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tt[t]=new xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tt[t]=new xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tt[t]=new xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tt[t]=new xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var hp=/[\-:]([a-z])/g;function fp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hp,fp);tt[e]=new xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hp,fp);tt[e]=new xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hp,fp);tt[e]=new xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tt[t]=new xt(t,1,!1,t.toLowerCase(),null,!1,!1)});tt.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tt[t]=new xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function pp(t,e,r,n){var i=tt.hasOwnProperty(e)?tt[e]:null;(i!==null?i.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sA(e,r,i,n)&&(r=null),n||i===null?iA(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type===3?!1:"":r:(e=i.attributeName,n=i.attributeNamespace,r===null?t.removeAttribute(e):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?t.setAttributeNS(n,e,r):t.setAttribute(e,r))))}var rn=rA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cl=Symbol.for("react.element"),Ki=Symbol.for("react.portal"),Gi=Symbol.for("react.fragment"),mp=Symbol.for("react.strict_mode"),_h=Symbol.for("react.profiler"),j0=Symbol.for("react.provider"),B0=Symbol.for("react.context"),gp=Symbol.for("react.forward_ref"),wh=Symbol.for("react.suspense"),bh=Symbol.for("react.suspense_list"),vp=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),q0=Symbol.for("react.offscreen"),Ev=Symbol.iterator;function is(t){return t===null||typeof t!="object"?null:(t=Ev&&t[Ev]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,gd;function gs(t){if(gd===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);gd=e&&e[1]||""}return`
`+gd+t}var vd=!1;function yd(t,e){if(!t||vd)return"";vd=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var n=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){n=u}t.call(e.prototype)}else{try{throw Error()}catch(u){n=u}t()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=n.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=s&&0<=l);break}}}finally{vd=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?gs(t):""}function aA(t){switch(t.tag){case 5:return gs(t.type);case 16:return gs("Lazy");case 13:return gs("Suspense");case 19:return gs("SuspenseList");case 0:case 2:case 15:return t=yd(t.type,!1),t;case 11:return t=yd(t.type.render,!1),t;case 1:return t=yd(t.type,!0),t;default:return""}}function Eh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Gi:return"Fragment";case Ki:return"Portal";case _h:return"Profiler";case mp:return"StrictMode";case wh:return"Suspense";case bh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B0:return(t.displayName||"Context")+".Consumer";case j0:return(t._context.displayName||"Context")+".Provider";case gp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vp:return e=t.displayName||null,e!==null?e:Eh(t.type)||"Memo";case dn:e=t._payload,t=t._init;try{return Eh(t(e))}catch{}}return null}function lA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Eh(e);case 8:return e===mp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function H0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cA(t){var e=H0(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ul(t){t._valueTracker||(t._valueTracker=cA(t))}function W0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),n="";return t&&(n=H0(t)?t.checked?"true":"false":t.value),t=n,t!==r?(e.setValue(t),!0):!1}function uc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ih(t,e){var r=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Iv(t,e){var r=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;r=Dn(e.value!=null?e.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function K0(t,e){e=e.checked,e!=null&&pp(t,"checked",e,!1)}function Th(t,e){K0(t,e);var r=Dn(e.value),n=e.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xh(t,e.type,r):e.hasOwnProperty("defaultValue")&&xh(t,e.type,Dn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tv(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function xh(t,e,r){(e!=="number"||uc(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var vs=Array.isArray;function oo(t,e,r,n){if(t=t.options,e){e={};for(var i=0;i<r.length;i++)e["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=e.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&n&&(t[r].defaultSelected=!0)}else{for(r=""+Dn(r),e=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ah(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xv(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(M(92));if(vs(r)){if(1<r.length)throw Error(M(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:Dn(r)}}function G0(t,e){var r=Dn(e.value),n=Dn(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function Av(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Q0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Q0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var dl,Y0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,n,i){MSApp.execUnsafeLocalFunction(function(){return t(e,r,n,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(dl=dl||document.createElement("div"),dl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=dl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Hs(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var As={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uA=["Webkit","ms","Moz","O"];Object.keys(As).forEach(function(t){uA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),As[e]=As[t]})});function X0(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||As.hasOwnProperty(t)&&As[t]?(""+e).trim():e+"px"}function J0(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=X0(r,e[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,i):t[r]=i}}var dA=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ch(t,e){if(e){if(dA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function kh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rh=null;function yp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ph=null,so=null,ao=null;function Sv(t){if(t=Sa(t)){if(typeof Ph!="function")throw Error(M(280));var e=t.stateNode;e&&(e=su(e),Ph(t.stateNode,t.type,e))}}function Z0(t){so?ao?ao.push(t):ao=[t]:so=t}function ew(){if(so){var t=so,e=ao;if(ao=so=null,Sv(t),e)for(t=0;t<e.length;t++)Sv(e[t])}}function tw(t,e){return t(e)}function rw(){}var _d=!1;function nw(t,e,r){if(_d)return t(e,r);_d=!0;try{return tw(t,e,r)}finally{_d=!1,(so!==null||ao!==null)&&(rw(),ew())}}function Ws(t,e){var r=t.stateNode;if(r===null)return null;var n=su(r);if(n===null)return null;r=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(M(231,e,typeof r));return r}var Nh=!1;if(Kr)try{var os={};Object.defineProperty(os,"passive",{get:function(){Nh=!0}}),window.addEventListener("test",os,os),window.removeEventListener("test",os,os)}catch{Nh=!1}function hA(t,e,r,n,i,o,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(r,u)}catch(f){this.onError(f)}}var Ss=!1,dc=null,hc=!1,Oh=null,fA={onError:function(t){Ss=!0,dc=t}};function pA(t,e,r,n,i,o,s,l,c){Ss=!1,dc=null,hA.apply(fA,arguments)}function mA(t,e,r,n,i,o,s,l,c){if(pA.apply(this,arguments),Ss){if(Ss){var u=dc;Ss=!1,dc=null}else throw Error(M(198));hc||(hc=!0,Oh=u)}}function Pi(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function iw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cv(t){if(Pi(t)!==t)throw Error(M(188))}function gA(t){var e=t.alternate;if(!e){if(e=Pi(t),e===null)throw Error(M(188));return e!==t?null:t}for(var r=t,n=e;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return Cv(i),t;if(o===n)return Cv(i),e;o=o.sibling}throw Error(M(188))}if(r.return!==n.return)r=i,n=o;else{for(var s=!1,l=i.child;l;){if(l===r){s=!0,r=i,n=o;break}if(l===n){s=!0,n=i,r=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===r){s=!0,r=o,n=i;break}if(l===n){s=!0,n=o,r=i;break}l=l.sibling}if(!s)throw Error(M(189))}}if(r.alternate!==n)throw Error(M(190))}if(r.tag!==3)throw Error(M(188));return r.stateNode.current===r?t:e}function ow(t){return t=gA(t),t!==null?sw(t):null}function sw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sw(t);if(e!==null)return e;t=t.sibling}return null}var aw=$t.unstable_scheduleCallback,kv=$t.unstable_cancelCallback,vA=$t.unstable_shouldYield,yA=$t.unstable_requestPaint,Le=$t.unstable_now,_A=$t.unstable_getCurrentPriorityLevel,_p=$t.unstable_ImmediatePriority,lw=$t.unstable_UserBlockingPriority,fc=$t.unstable_NormalPriority,wA=$t.unstable_LowPriority,cw=$t.unstable_IdlePriority,ru=null,wr=null;function bA(t){if(wr&&typeof wr.onCommitFiberRoot=="function")try{wr.onCommitFiberRoot(ru,t,void 0,(t.current.flags&128)===128)}catch{}}var cr=Math.clz32?Math.clz32:TA,EA=Math.log,IA=Math.LN2;function TA(t){return t>>>=0,t===0?32:31-(EA(t)/IA|0)|0}var hl=64,fl=4194304;function ys(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pc(t,e){var r=t.pendingLanes;if(r===0)return 0;var n=0,i=t.suspendedLanes,o=t.pingedLanes,s=r&268435455;if(s!==0){var l=s&~i;l!==0?n=ys(l):(o&=s,o!==0&&(n=ys(o)))}else s=r&~i,s!==0?n=ys(s):o!==0&&(n=ys(o));if(n===0)return 0;if(e!==0&&e!==n&&!(e&i)&&(i=n&-n,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(n&4&&(n|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)r=31-cr(e),i=1<<r,n|=t[r],e&=~i;return n}function xA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function AA(t,e){for(var r=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-cr(o),l=1<<s,c=i[s];c===-1?(!(l&r)||l&n)&&(i[s]=xA(l,e)):c<=e&&(t.expiredLanes|=l),o&=~l}}function Dh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function uw(){var t=hl;return hl<<=1,!(hl&4194240)&&(hl=64),t}function wd(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function xa(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-cr(e),t[e]=r}function SA(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<r;){var i=31-cr(r),o=1<<i;e[i]=0,n[i]=-1,t[i]=-1,r&=~o}}function wp(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var n=31-cr(r),i=1<<n;i&e|t[n]&e&&(t[n]|=e),r&=~i}}var pe=0;function dw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hw,bp,fw,pw,mw,Lh=!1,pl=[],In=null,Tn=null,xn=null,Ks=new Map,Gs=new Map,pn=[],CA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rv(t,e){switch(t){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Ks.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gs.delete(e.pointerId)}}function ss(t,e,r,n,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Sa(e),e!==null&&bp(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function kA(t,e,r,n,i){switch(e){case"focusin":return In=ss(In,t,e,r,n,i),!0;case"dragenter":return Tn=ss(Tn,t,e,r,n,i),!0;case"mouseover":return xn=ss(xn,t,e,r,n,i),!0;case"pointerover":var o=i.pointerId;return Ks.set(o,ss(Ks.get(o)||null,t,e,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,Gs.set(o,ss(Gs.get(o)||null,t,e,r,n,i)),!0}return!1}function gw(t){var e=ni(t.target);if(e!==null){var r=Pi(e);if(r!==null){if(e=r.tag,e===13){if(e=iw(r),e!==null){t.blockedOn=e,mw(t.priority,function(){fw(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Vh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.constructor(r.type,r);Rh=n,r.target.dispatchEvent(n),Rh=null}else return e=Sa(r),e!==null&&bp(e),t.blockedOn=r,!1;e.shift()}return!0}function Pv(t,e,r){Bl(t)&&r.delete(e)}function RA(){Lh=!1,In!==null&&Bl(In)&&(In=null),Tn!==null&&Bl(Tn)&&(Tn=null),xn!==null&&Bl(xn)&&(xn=null),Ks.forEach(Pv),Gs.forEach(Pv)}function as(t,e){t.blockedOn===e&&(t.blockedOn=null,Lh||(Lh=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,RA)))}function Qs(t){function e(i){return as(i,t)}if(0<pl.length){as(pl[0],t);for(var r=1;r<pl.length;r++){var n=pl[r];n.blockedOn===t&&(n.blockedOn=null)}}for(In!==null&&as(In,t),Tn!==null&&as(Tn,t),xn!==null&&as(xn,t),Ks.forEach(e),Gs.forEach(e),r=0;r<pn.length;r++)n=pn[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<pn.length&&(r=pn[0],r.blockedOn===null);)gw(r),r.blockedOn===null&&pn.shift()}var lo=rn.ReactCurrentBatchConfig,mc=!0;function PA(t,e,r,n){var i=pe,o=lo.transition;lo.transition=null;try{pe=1,Ep(t,e,r,n)}finally{pe=i,lo.transition=o}}function NA(t,e,r,n){var i=pe,o=lo.transition;lo.transition=null;try{pe=4,Ep(t,e,r,n)}finally{pe=i,lo.transition=o}}function Ep(t,e,r,n){if(mc){var i=Vh(t,e,r,n);if(i===null)Rd(t,e,n,gc,r),Rv(t,n);else if(kA(i,t,e,r,n))n.stopPropagation();else if(Rv(t,n),e&4&&-1<CA.indexOf(t)){for(;i!==null;){var o=Sa(i);if(o!==null&&hw(o),o=Vh(t,e,r,n),o===null&&Rd(t,e,n,gc,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else Rd(t,e,n,null,r)}}var gc=null;function Vh(t,e,r,n){if(gc=null,t=yp(n),t=ni(t),t!==null)if(e=Pi(t),e===null)t=null;else if(r=e.tag,r===13){if(t=iw(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return gc=t,null}function vw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_A()){case _p:return 1;case lw:return 4;case fc:case wA:return 16;case cw:return 536870912;default:return 16}default:return 16}}var wn=null,Ip=null,ql=null;function yw(){if(ql)return ql;var t,e=Ip,r=e.length,n,i="value"in wn?wn.value:wn.textContent,o=i.length;for(t=0;t<r&&e[t]===i[t];t++);var s=r-t;for(n=1;n<=s&&e[r-n]===i[o-n];n++);return ql=i.slice(t,1<n?1-n:void 0)}function Hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ml(){return!0}function Nv(){return!1}function Ut(t){function e(r,n,i,o,s){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(r=t[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ml:Nv,this.isPropagationStopped=Nv,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),e}var Oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tp=Ut(Oo),Aa=Se({},Oo,{view:0,detail:0}),OA=Ut(Aa),bd,Ed,ls,nu=Se({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ls&&(ls&&t.type==="mousemove"?(bd=t.screenX-ls.screenX,Ed=t.screenY-ls.screenY):Ed=bd=0,ls=t),bd)},movementY:function(t){return"movementY"in t?t.movementY:Ed}}),Ov=Ut(nu),DA=Se({},nu,{dataTransfer:0}),LA=Ut(DA),VA=Se({},Aa,{relatedTarget:0}),Id=Ut(VA),MA=Se({},Oo,{animationName:0,elapsedTime:0,pseudoElement:0}),$A=Ut(MA),FA=Se({},Oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),UA=Ut(FA),zA=Se({},Oo,{data:0}),Dv=Ut(zA),jA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qA[t])?!!e[t]:!1}function xp(){return HA}var WA=Se({},Aa,{key:function(t){if(t.key){var e=jA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?BA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xp,charCode:function(t){return t.type==="keypress"?Hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),KA=Ut(WA),GA=Se({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lv=Ut(GA),QA=Se({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xp}),YA=Ut(QA),XA=Se({},Oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),JA=Ut(XA),ZA=Se({},nu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),eS=Ut(ZA),tS=[9,13,27,32],Ap=Kr&&"CompositionEvent"in window,Cs=null;Kr&&"documentMode"in document&&(Cs=document.documentMode);var rS=Kr&&"TextEvent"in window&&!Cs,_w=Kr&&(!Ap||Cs&&8<Cs&&11>=Cs),Vv=" ",Mv=!1;function ww(t,e){switch(t){case"keyup":return tS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qi=!1;function nS(t,e){switch(t){case"compositionend":return bw(e);case"keypress":return e.which!==32?null:(Mv=!0,Vv);case"textInput":return t=e.data,t===Vv&&Mv?null:t;default:return null}}function iS(t,e){if(Qi)return t==="compositionend"||!Ap&&ww(t,e)?(t=yw(),ql=Ip=wn=null,Qi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _w&&e.locale!=="ko"?null:e.data;default:return null}}var oS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $v(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oS[t.type]:e==="textarea"}function Ew(t,e,r,n){Z0(n),e=vc(e,"onChange"),0<e.length&&(r=new Tp("onChange","change",null,r,n),t.push({event:r,listeners:e}))}var ks=null,Ys=null;function sS(t){Ow(t,0)}function iu(t){var e=Ji(t);if(W0(e))return t}function aS(t,e){if(t==="change")return e}var Iw=!1;if(Kr){var Td;if(Kr){var xd="oninput"in document;if(!xd){var Fv=document.createElement("div");Fv.setAttribute("oninput","return;"),xd=typeof Fv.oninput=="function"}Td=xd}else Td=!1;Iw=Td&&(!document.documentMode||9<document.documentMode)}function Uv(){ks&&(ks.detachEvent("onpropertychange",Tw),Ys=ks=null)}function Tw(t){if(t.propertyName==="value"&&iu(Ys)){var e=[];Ew(e,Ys,t,yp(t)),nw(sS,e)}}function lS(t,e,r){t==="focusin"?(Uv(),ks=e,Ys=r,ks.attachEvent("onpropertychange",Tw)):t==="focusout"&&Uv()}function cS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return iu(Ys)}function uS(t,e){if(t==="click")return iu(e)}function dS(t,e){if(t==="input"||t==="change")return iu(e)}function hS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hr=typeof Object.is=="function"?Object.is:hS;function Xs(t,e){if(hr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!yh.call(e,i)||!hr(t[i],e[i]))return!1}return!0}function zv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jv(t,e){var r=zv(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=e&&n>=e)return{node:r,offset:e-t};t=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=zv(r)}}function xw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Aw(){for(var t=window,e=uc();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=uc(t.document)}return e}function Sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fS(t){var e=Aw(),r=t.focusedElem,n=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&xw(r.ownerDocument.documentElement,r)){if(n!==null&&Sp(r)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!t.extend&&o>n&&(i=n,n=o,o=i),i=jv(r,o);var s=jv(r,n);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>n?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pS=Kr&&"documentMode"in document&&11>=document.documentMode,Yi=null,Mh=null,Rs=null,$h=!1;function Bv(t,e,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;$h||Yi==null||Yi!==uc(n)||(n=Yi,"selectionStart"in n&&Sp(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Rs&&Xs(Rs,n)||(Rs=n,n=vc(Mh,"onSelect"),0<n.length&&(e=new Tp("onSelect","select",null,e,r),t.push({event:e,listeners:n}),e.target=Yi)))}function gl(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Xi={animationend:gl("Animation","AnimationEnd"),animationiteration:gl("Animation","AnimationIteration"),animationstart:gl("Animation","AnimationStart"),transitionend:gl("Transition","TransitionEnd")},Ad={},Sw={};Kr&&(Sw=document.createElement("div").style,"AnimationEvent"in window||(delete Xi.animationend.animation,delete Xi.animationiteration.animation,delete Xi.animationstart.animation),"TransitionEvent"in window||delete Xi.transitionend.transition);function ou(t){if(Ad[t])return Ad[t];if(!Xi[t])return t;var e=Xi[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in Sw)return Ad[t]=e[r];return t}var Cw=ou("animationend"),kw=ou("animationiteration"),Rw=ou("animationstart"),Pw=ou("transitionend"),Nw=new Map,qv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(t,e){Nw.set(t,e),Ri(e,[t])}for(var Sd=0;Sd<qv.length;Sd++){var Cd=qv[Sd],mS=Cd.toLowerCase(),gS=Cd[0].toUpperCase()+Cd.slice(1);Fn(mS,"on"+gS)}Fn(Cw,"onAnimationEnd");Fn(kw,"onAnimationIteration");Fn(Rw,"onAnimationStart");Fn("dblclick","onDoubleClick");Fn("focusin","onFocus");Fn("focusout","onBlur");Fn(Pw,"onTransitionEnd");go("onMouseEnter",["mouseout","mouseover"]);go("onMouseLeave",["mouseout","mouseover"]);go("onPointerEnter",["pointerout","pointerover"]);go("onPointerLeave",["pointerout","pointerover"]);Ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ri("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vS=new Set("cancel close invalid load scroll toggle".split(" ").concat(_s));function Hv(t,e,r){var n=t.type||"unknown-event";t.currentTarget=r,mA(n,e,void 0,t),t.currentTarget=null}function Ow(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],i=n.event;n=n.listeners;e:{var o=void 0;if(e)for(var s=n.length-1;0<=s;s--){var l=n[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Hv(i,l,u),o=c}else for(s=0;s<n.length;s++){if(l=n[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Hv(i,l,u),o=c}}}if(hc)throw t=Oh,hc=!1,Oh=null,t}function we(t,e){var r=e[Bh];r===void 0&&(r=e[Bh]=new Set);var n=t+"__bubble";r.has(n)||(Dw(e,t,2,!1),r.add(n))}function kd(t,e,r){var n=0;e&&(n|=4),Dw(r,t,n,e)}var vl="_reactListening"+Math.random().toString(36).slice(2);function Js(t){if(!t[vl]){t[vl]=!0,z0.forEach(function(r){r!=="selectionchange"&&(vS.has(r)||kd(r,!1,t),kd(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[vl]||(e[vl]=!0,kd("selectionchange",!1,e))}}function Dw(t,e,r,n){switch(vw(e)){case 1:var i=PA;break;case 4:i=NA;break;default:i=Ep}r=i.bind(null,e,r,t),i=void 0,!Nh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,r,{capture:!0,passive:i}):t.addEventListener(e,r,!0):i!==void 0?t.addEventListener(e,r,{passive:i}):t.addEventListener(e,r,!1)}function Rd(t,e,r,n,i){var o=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=n.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=ni(l),s===null)return;if(c=s.tag,c===5||c===6){n=o=s;continue e}l=l.parentNode}}n=n.return}nw(function(){var u=o,f=yp(r),p=[];e:{var m=Nw.get(t);if(m!==void 0){var T=Tp,S=t;switch(t){case"keypress":if(Hl(r)===0)break e;case"keydown":case"keyup":T=KA;break;case"focusin":S="focus",T=Id;break;case"focusout":S="blur",T=Id;break;case"beforeblur":case"afterblur":T=Id;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Ov;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=LA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=YA;break;case Cw:case kw:case Rw:T=$A;break;case Pw:T=JA;break;case"scroll":T=OA;break;case"wheel":T=eS;break;case"copy":case"cut":case"paste":T=UA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Lv}var P=(e&4)!==0,N=!P&&t==="scroll",b=P?m!==null?m+"Capture":null:m;P=[];for(var y=u,x;y!==null;){x=y;var D=x.stateNode;if(x.tag===5&&D!==null&&(x=D,b!==null&&(D=Ws(y,b),D!=null&&P.push(Zs(y,D,x)))),N)break;y=y.return}0<P.length&&(m=new T(m,S,null,r,f),p.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",m&&r!==Rh&&(S=r.relatedTarget||r.fromElement)&&(ni(S)||S[Gr]))break e;if((T||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,T?(S=r.relatedTarget||r.toElement,T=u,S=S?ni(S):null,S!==null&&(N=Pi(S),S!==N||S.tag!==5&&S.tag!==6)&&(S=null)):(T=null,S=u),T!==S)){if(P=Ov,D="onMouseLeave",b="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(P=Lv,D="onPointerLeave",b="onPointerEnter",y="pointer"),N=T==null?m:Ji(T),x=S==null?m:Ji(S),m=new P(D,y+"leave",T,r,f),m.target=N,m.relatedTarget=x,D=null,ni(f)===u&&(P=new P(b,y+"enter",S,r,f),P.target=x,P.relatedTarget=N,D=P),N=D,T&&S)t:{for(P=T,b=S,y=0,x=P;x;x=ji(x))y++;for(x=0,D=b;D;D=ji(D))x++;for(;0<y-x;)P=ji(P),y--;for(;0<x-y;)b=ji(b),x--;for(;y--;){if(P===b||b!==null&&P===b.alternate)break t;P=ji(P),b=ji(b)}P=null}else P=null;T!==null&&Wv(p,m,T,P,!1),S!==null&&N!==null&&Wv(p,N,S,P,!0)}}e:{if(m=u?Ji(u):window,T=m.nodeName&&m.nodeName.toLowerCase(),T==="select"||T==="input"&&m.type==="file")var F=aS;else if($v(m))if(Iw)F=dS;else{F=cS;var z=lS}else(T=m.nodeName)&&T.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=uS);if(F&&(F=F(t,u))){Ew(p,F,r,f);break e}z&&z(t,m,u),t==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&xh(m,"number",m.value)}switch(z=u?Ji(u):window,t){case"focusin":($v(z)||z.contentEditable==="true")&&(Yi=z,Mh=u,Rs=null);break;case"focusout":Rs=Mh=Yi=null;break;case"mousedown":$h=!0;break;case"contextmenu":case"mouseup":case"dragend":$h=!1,Bv(p,r,f);break;case"selectionchange":if(pS)break;case"keydown":case"keyup":Bv(p,r,f)}var _;if(Ap)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Qi?ww(t,r)&&(v="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(v="onCompositionStart");v&&(_w&&r.locale!=="ko"&&(Qi||v!=="onCompositionStart"?v==="onCompositionEnd"&&Qi&&(_=yw()):(wn=f,Ip="value"in wn?wn.value:wn.textContent,Qi=!0)),z=vc(u,v),0<z.length&&(v=new Dv(v,t,null,r,f),p.push({event:v,listeners:z}),_?v.data=_:(_=bw(r),_!==null&&(v.data=_)))),(_=rS?nS(t,r):iS(t,r))&&(u=vc(u,"onBeforeInput"),0<u.length&&(f=new Dv("onBeforeInput","beforeinput",null,r,f),p.push({event:f,listeners:u}),f.data=_))}Ow(p,e)})}function Zs(t,e,r){return{instance:t,listener:e,currentTarget:r}}function vc(t,e){for(var r=e+"Capture",n=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ws(t,r),o!=null&&n.unshift(Zs(t,o,i)),o=Ws(t,e),o!=null&&n.push(Zs(t,o,i))),t=t.return}return n}function ji(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wv(t,e,r,n,i){for(var o=e._reactName,s=[];r!==null&&r!==n;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&u!==null&&(l=u,i?(c=Ws(r,o),c!=null&&s.unshift(Zs(r,c,l))):i||(c=Ws(r,o),c!=null&&s.push(Zs(r,c,l)))),r=r.return}s.length!==0&&t.push({event:e,listeners:s})}var yS=/\r\n?/g,_S=/\u0000|\uFFFD/g;function Kv(t){return(typeof t=="string"?t:""+t).replace(yS,`
`).replace(_S,"")}function yl(t,e,r){if(e=Kv(e),Kv(t)!==e&&r)throw Error(M(425))}function yc(){}var Fh=null,Uh=null;function zh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jh=typeof setTimeout=="function"?setTimeout:void 0,wS=typeof clearTimeout=="function"?clearTimeout:void 0,Gv=typeof Promise=="function"?Promise:void 0,bS=typeof queueMicrotask=="function"?queueMicrotask:typeof Gv<"u"?function(t){return Gv.resolve(null).then(t).catch(ES)}:jh;function ES(t){setTimeout(function(){throw t})}function Pd(t,e){var r=e,n=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){t.removeChild(i),Qs(e);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Qs(e)}function An(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var Do=Math.random().toString(36).slice(2),_r="__reactFiber$"+Do,ea="__reactProps$"+Do,Gr="__reactContainer$"+Do,Bh="__reactEvents$"+Do,IS="__reactListeners$"+Do,TS="__reactHandles$"+Do;function ni(t){var e=t[_r];if(e)return e;for(var r=t.parentNode;r;){if(e=r[Gr]||r[_r]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=Qv(t);t!==null;){if(r=t[_r])return r;t=Qv(t)}return e}t=r,r=t.parentNode}return null}function Sa(t){return t=t[_r]||t[Gr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ji(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function su(t){return t[ea]||null}var qh=[],Zi=-1;function Un(t){return{current:t}}function Ee(t){0>Zi||(t.current=qh[Zi],qh[Zi]=null,Zi--)}function ye(t,e){Zi++,qh[Zi]=t.current,t.current=e}var Ln={},mt=Un(Ln),Rt=Un(!1),vi=Ln;function vo(t,e){var r=t.type.contextTypes;if(!r)return Ln;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=e[o];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(t){return t=t.childContextTypes,t!=null}function _c(){Ee(Rt),Ee(mt)}function Yv(t,e,r){if(mt.current!==Ln)throw Error(M(168));ye(mt,e),ye(Rt,r)}function Lw(t,e,r){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in e))throw Error(M(108,lA(t)||"Unknown",i));return Se({},r,n)}function wc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ln,vi=mt.current,ye(mt,t),ye(Rt,Rt.current),!0}function Xv(t,e,r){var n=t.stateNode;if(!n)throw Error(M(169));r?(t=Lw(t,e,vi),n.__reactInternalMemoizedMergedChildContext=t,Ee(Rt),Ee(mt),ye(mt,t)):Ee(Rt),ye(Rt,r)}var Mr=null,au=!1,Nd=!1;function Vw(t){Mr===null?Mr=[t]:Mr.push(t)}function xS(t){au=!0,Vw(t)}function zn(){if(!Nd&&Mr!==null){Nd=!0;var t=0,e=pe;try{var r=Mr;for(pe=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}Mr=null,au=!1}catch(i){throw Mr!==null&&(Mr=Mr.slice(t+1)),aw(_p,zn),i}finally{pe=e,Nd=!1}}return null}var eo=[],to=0,bc=null,Ec=0,zt=[],jt=0,yi=null,Fr=1,Ur="";function ei(t,e){eo[to++]=Ec,eo[to++]=bc,bc=t,Ec=e}function Mw(t,e,r){zt[jt++]=Fr,zt[jt++]=Ur,zt[jt++]=yi,yi=t;var n=Fr;t=Ur;var i=32-cr(n)-1;n&=~(1<<i),r+=1;var o=32-cr(e)+i;if(30<o){var s=i-i%5;o=(n&(1<<s)-1).toString(32),n>>=s,i-=s,Fr=1<<32-cr(e)+i|r<<i|n,Ur=o+t}else Fr=1<<o|r<<i|n,Ur=t}function Cp(t){t.return!==null&&(ei(t,1),Mw(t,1,0))}function kp(t){for(;t===bc;)bc=eo[--to],eo[to]=null,Ec=eo[--to],eo[to]=null;for(;t===yi;)yi=zt[--jt],zt[jt]=null,Ur=zt[--jt],zt[jt]=null,Fr=zt[--jt],zt[jt]=null}var Mt=null,Lt=null,Ie=!1,ar=null;function $w(t,e){var r=Bt(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function Jv(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mt=t,Lt=An(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mt=t,Lt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=yi!==null?{id:Fr,overflow:Ur}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Bt(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,Mt=t,Lt=null,!0):!1;default:return!1}}function Hh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wh(t){if(Ie){var e=Lt;if(e){var r=e;if(!Jv(t,e)){if(Hh(t))throw Error(M(418));e=An(r.nextSibling);var n=Mt;e&&Jv(t,e)?$w(n,r):(t.flags=t.flags&-4097|2,Ie=!1,Mt=t)}}else{if(Hh(t))throw Error(M(418));t.flags=t.flags&-4097|2,Ie=!1,Mt=t}}}function Zv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mt=t}function _l(t){if(t!==Mt)return!1;if(!Ie)return Zv(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zh(t.type,t.memoizedProps)),e&&(e=Lt)){if(Hh(t))throw Fw(),Error(M(418));for(;e;)$w(t,e),e=An(e.nextSibling)}if(Zv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){Lt=An(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}Lt=null}}else Lt=Mt?An(t.stateNode.nextSibling):null;return!0}function Fw(){for(var t=Lt;t;)t=An(t.nextSibling)}function yo(){Lt=Mt=null,Ie=!1}function Rp(t){ar===null?ar=[t]:ar.push(t)}var AS=rn.ReactCurrentBatchConfig;function cs(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(M(309));var n=r.stateNode}if(!n)throw Error(M(147,t));var i=n,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(M(284));if(!r._owner)throw Error(M(290,t))}return t}function wl(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ey(t){var e=t._init;return e(t._payload)}function Uw(t){function e(b,y){if(t){var x=b.deletions;x===null?(b.deletions=[y],b.flags|=16):x.push(y)}}function r(b,y){if(!t)return null;for(;y!==null;)e(b,y),y=y.sibling;return null}function n(b,y){for(b=new Map;y!==null;)y.key!==null?b.set(y.key,y):b.set(y.index,y),y=y.sibling;return b}function i(b,y){return b=Rn(b,y),b.index=0,b.sibling=null,b}function o(b,y,x){return b.index=x,t?(x=b.alternate,x!==null?(x=x.index,x<y?(b.flags|=2,y):x):(b.flags|=2,y)):(b.flags|=1048576,y)}function s(b){return t&&b.alternate===null&&(b.flags|=2),b}function l(b,y,x,D){return y===null||y.tag!==6?(y=Fd(x,b.mode,D),y.return=b,y):(y=i(y,x),y.return=b,y)}function c(b,y,x,D){var F=x.type;return F===Gi?f(b,y,x.props.children,D,x.key):y!==null&&(y.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===dn&&ey(F)===y.type)?(D=i(y,x.props),D.ref=cs(b,y,x),D.return=b,D):(D=Jl(x.type,x.key,x.props,null,b.mode,D),D.ref=cs(b,y,x),D.return=b,D)}function u(b,y,x,D){return y===null||y.tag!==4||y.stateNode.containerInfo!==x.containerInfo||y.stateNode.implementation!==x.implementation?(y=Ud(x,b.mode,D),y.return=b,y):(y=i(y,x.children||[]),y.return=b,y)}function f(b,y,x,D,F){return y===null||y.tag!==7?(y=hi(x,b.mode,D,F),y.return=b,y):(y=i(y,x),y.return=b,y)}function p(b,y,x){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Fd(""+y,b.mode,x),y.return=b,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case cl:return x=Jl(y.type,y.key,y.props,null,b.mode,x),x.ref=cs(b,null,y),x.return=b,x;case Ki:return y=Ud(y,b.mode,x),y.return=b,y;case dn:var D=y._init;return p(b,D(y._payload),x)}if(vs(y)||is(y))return y=hi(y,b.mode,x,null),y.return=b,y;wl(b,y)}return null}function m(b,y,x,D){var F=y!==null?y.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return F!==null?null:l(b,y,""+x,D);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case cl:return x.key===F?c(b,y,x,D):null;case Ki:return x.key===F?u(b,y,x,D):null;case dn:return F=x._init,m(b,y,F(x._payload),D)}if(vs(x)||is(x))return F!==null?null:f(b,y,x,D,null);wl(b,x)}return null}function T(b,y,x,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return b=b.get(x)||null,l(y,b,""+D,F);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case cl:return b=b.get(D.key===null?x:D.key)||null,c(y,b,D,F);case Ki:return b=b.get(D.key===null?x:D.key)||null,u(y,b,D,F);case dn:var z=D._init;return T(b,y,x,z(D._payload),F)}if(vs(D)||is(D))return b=b.get(x)||null,f(y,b,D,F,null);wl(y,D)}return null}function S(b,y,x,D){for(var F=null,z=null,_=y,v=y=0,w=null;_!==null&&v<x.length;v++){_.index>v?(w=_,_=null):w=_.sibling;var E=m(b,_,x[v],D);if(E===null){_===null&&(_=w);break}t&&_&&E.alternate===null&&e(b,_),y=o(E,y,v),z===null?F=E:z.sibling=E,z=E,_=w}if(v===x.length)return r(b,_),Ie&&ei(b,v),F;if(_===null){for(;v<x.length;v++)_=p(b,x[v],D),_!==null&&(y=o(_,y,v),z===null?F=_:z.sibling=_,z=_);return Ie&&ei(b,v),F}for(_=n(b,_);v<x.length;v++)w=T(_,b,v,x[v],D),w!==null&&(t&&w.alternate!==null&&_.delete(w.key===null?v:w.key),y=o(w,y,v),z===null?F=w:z.sibling=w,z=w);return t&&_.forEach(function(A){return e(b,A)}),Ie&&ei(b,v),F}function P(b,y,x,D){var F=is(x);if(typeof F!="function")throw Error(M(150));if(x=F.call(x),x==null)throw Error(M(151));for(var z=F=null,_=y,v=y=0,w=null,E=x.next();_!==null&&!E.done;v++,E=x.next()){_.index>v?(w=_,_=null):w=_.sibling;var A=m(b,_,E.value,D);if(A===null){_===null&&(_=w);break}t&&_&&A.alternate===null&&e(b,_),y=o(A,y,v),z===null?F=A:z.sibling=A,z=A,_=w}if(E.done)return r(b,_),Ie&&ei(b,v),F;if(_===null){for(;!E.done;v++,E=x.next())E=p(b,E.value,D),E!==null&&(y=o(E,y,v),z===null?F=E:z.sibling=E,z=E);return Ie&&ei(b,v),F}for(_=n(b,_);!E.done;v++,E=x.next())E=T(_,b,v,E.value,D),E!==null&&(t&&E.alternate!==null&&_.delete(E.key===null?v:E.key),y=o(E,y,v),z===null?F=E:z.sibling=E,z=E);return t&&_.forEach(function(C){return e(b,C)}),Ie&&ei(b,v),F}function N(b,y,x,D){if(typeof x=="object"&&x!==null&&x.type===Gi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case cl:e:{for(var F=x.key,z=y;z!==null;){if(z.key===F){if(F=x.type,F===Gi){if(z.tag===7){r(b,z.sibling),y=i(z,x.props.children),y.return=b,b=y;break e}}else if(z.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===dn&&ey(F)===z.type){r(b,z.sibling),y=i(z,x.props),y.ref=cs(b,z,x),y.return=b,b=y;break e}r(b,z);break}else e(b,z);z=z.sibling}x.type===Gi?(y=hi(x.props.children,b.mode,D,x.key),y.return=b,b=y):(D=Jl(x.type,x.key,x.props,null,b.mode,D),D.ref=cs(b,y,x),D.return=b,b=D)}return s(b);case Ki:e:{for(z=x.key;y!==null;){if(y.key===z)if(y.tag===4&&y.stateNode.containerInfo===x.containerInfo&&y.stateNode.implementation===x.implementation){r(b,y.sibling),y=i(y,x.children||[]),y.return=b,b=y;break e}else{r(b,y);break}else e(b,y);y=y.sibling}y=Ud(x,b.mode,D),y.return=b,b=y}return s(b);case dn:return z=x._init,N(b,y,z(x._payload),D)}if(vs(x))return S(b,y,x,D);if(is(x))return P(b,y,x,D);wl(b,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,y!==null&&y.tag===6?(r(b,y.sibling),y=i(y,x),y.return=b,b=y):(r(b,y),y=Fd(x,b.mode,D),y.return=b,b=y),s(b)):r(b,y)}return N}var _o=Uw(!0),zw=Uw(!1),Ic=Un(null),Tc=null,ro=null,Pp=null;function Np(){Pp=ro=Tc=null}function Op(t){var e=Ic.current;Ee(Ic),t._currentValue=e}function Kh(t,e,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===r)break;t=t.return}}function co(t,e){Tc=t,Pp=ro=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(kt=!0),t.firstContext=null)}function Gt(t){var e=t._currentValue;if(Pp!==t)if(t={context:t,memoizedValue:e,next:null},ro===null){if(Tc===null)throw Error(M(308));ro=t,Tc.dependencies={lanes:0,firstContext:t}}else ro=ro.next=t;return e}var ii=null;function Dp(t){ii===null?ii=[t]:ii.push(t)}function jw(t,e,r,n){var i=e.interleaved;return i===null?(r.next=r,Dp(e)):(r.next=i.next,i.next=r),e.interleaved=r,Qr(t,n)}function Qr(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var hn=!1;function Lp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sn(t,e,r){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,ue&2){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,Qr(t,r)}return i=n.interleaved,i===null?(e.next=e,Dp(n)):(e.next=i.next,i.next=e),n.interleaved=e,Qr(t,r)}function Wl(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,wp(t,r)}}function ty(t,e){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=s:o=o.next=s,r=r.next}while(r!==null);o===null?i=o=e:o=o.next=e}else i=o=e;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function xc(t,e,r,n){var i=t.updateQueue;hn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==s&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(o!==null){var p=i.baseState;s=0,f=u=c=null,l=o;do{var m=l.lane,T=l.eventTime;if((n&m)===m){f!==null&&(f=f.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=t,P=l;switch(m=e,T=r,P.tag){case 1:if(S=P.payload,typeof S=="function"){p=S.call(T,p,m);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=P.payload,m=typeof S=="function"?S.call(T,p,m):S,m==null)break e;p=Se({},p,m);break e;case 2:hn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else T={eventTime:T,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=T,c=p):f=f.next=T,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);wi|=s,t.lanes=s,t.memoizedState=p}}function ry(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(M(191,i));i.call(n)}}}var Ca={},br=Un(Ca),ta=Un(Ca),ra=Un(Ca);function oi(t){if(t===Ca)throw Error(M(174));return t}function Vp(t,e){switch(ye(ra,e),ye(ta,t),ye(br,Ca),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sh(e,t)}Ee(br),ye(br,e)}function wo(){Ee(br),Ee(ta),Ee(ra)}function qw(t){oi(ra.current);var e=oi(br.current),r=Sh(e,t.type);e!==r&&(ye(ta,t),ye(br,r))}function Mp(t){ta.current===t&&(Ee(br),Ee(ta))}var xe=Un(0);function Ac(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Od=[];function $p(){for(var t=0;t<Od.length;t++)Od[t]._workInProgressVersionPrimary=null;Od.length=0}var Kl=rn.ReactCurrentDispatcher,Dd=rn.ReactCurrentBatchConfig,_i=0,Ae=null,ze=null,He=null,Sc=!1,Ps=!1,na=0,SS=0;function lt(){throw Error(M(321))}function Fp(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!hr(t[r],e[r]))return!1;return!0}function Up(t,e,r,n,i,o){if(_i=o,Ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Kl.current=t===null||t.memoizedState===null?PS:NS,t=r(n,i),Ps){o=0;do{if(Ps=!1,na=0,25<=o)throw Error(M(301));o+=1,He=ze=null,e.updateQueue=null,Kl.current=OS,t=r(n,i)}while(Ps)}if(Kl.current=Cc,e=ze!==null&&ze.next!==null,_i=0,He=ze=Ae=null,Sc=!1,e)throw Error(M(300));return t}function zp(){var t=na!==0;return na=0,t}function yr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Ae.memoizedState=He=t:He=He.next=t,He}function Qt(){if(ze===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var e=He===null?Ae.memoizedState:He.next;if(e!==null)He=e,ze=t;else{if(t===null)throw Error(M(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},He===null?Ae.memoizedState=He=t:He=He.next=t}return He}function ia(t,e){return typeof e=="function"?e(t):e}function Ld(t){var e=Qt(),r=e.queue;if(r===null)throw Error(M(311));r.lastRenderedReducer=t;var n=ze,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var l=s=null,c=null,u=o;do{var f=u.lane;if((_i&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:t(n,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,s=n):c=c.next=p,Ae.lanes|=f,wi|=f}u=u.next}while(u!==null&&u!==o);c===null?s=n:c.next=l,hr(n,e.memoizedState)||(kt=!0),e.memoizedState=n,e.baseState=s,e.baseQueue=c,r.lastRenderedState=n}if(t=r.interleaved,t!==null){i=t;do o=i.lane,Ae.lanes|=o,wi|=o,i=i.next;while(i!==t)}else i===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Vd(t){var e=Qt(),r=e.queue;if(r===null)throw Error(M(311));r.lastRenderedReducer=t;var n=r.dispatch,i=r.pending,o=e.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);hr(o,e.memoizedState)||(kt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),r.lastRenderedState=o}return[o,n]}function Hw(){}function Ww(t,e){var r=Ae,n=Qt(),i=e(),o=!hr(n.memoizedState,i);if(o&&(n.memoizedState=i,kt=!0),n=n.queue,jp(Qw.bind(null,r,n,t),[t]),n.getSnapshot!==e||o||He!==null&&He.memoizedState.tag&1){if(r.flags|=2048,oa(9,Gw.bind(null,r,n,i,e),void 0,null),We===null)throw Error(M(349));_i&30||Kw(r,e,i)}return i}function Kw(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function Gw(t,e,r,n){e.value=r,e.getSnapshot=n,Yw(e)&&Xw(t)}function Qw(t,e,r){return r(function(){Yw(e)&&Xw(t)})}function Yw(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!hr(t,r)}catch{return!0}}function Xw(t){var e=Qr(t,1);e!==null&&ur(e,t,1,-1)}function ny(t){var e=yr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},e.queue=t,t=t.dispatch=RS.bind(null,Ae,t),[e.memoizedState,t]}function oa(t,e,r,n){return t={tag:t,create:e,destroy:r,deps:n,next:null},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,e.lastEffect=t)),t}function Jw(){return Qt().memoizedState}function Gl(t,e,r,n){var i=yr();Ae.flags|=t,i.memoizedState=oa(1|e,r,void 0,n===void 0?null:n)}function lu(t,e,r,n){var i=Qt();n=n===void 0?null:n;var o=void 0;if(ze!==null){var s=ze.memoizedState;if(o=s.destroy,n!==null&&Fp(n,s.deps)){i.memoizedState=oa(e,r,o,n);return}}Ae.flags|=t,i.memoizedState=oa(1|e,r,o,n)}function iy(t,e){return Gl(8390656,8,t,e)}function jp(t,e){return lu(2048,8,t,e)}function Zw(t,e){return lu(4,2,t,e)}function eb(t,e){return lu(4,4,t,e)}function tb(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rb(t,e,r){return r=r!=null?r.concat([t]):null,lu(4,4,tb.bind(null,e,t),r)}function Bp(){}function nb(t,e){var r=Qt();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&Fp(e,n[1])?n[0]:(r.memoizedState=[t,e],t)}function ib(t,e){var r=Qt();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&Fp(e,n[1])?n[0]:(t=t(),r.memoizedState=[t,e],t)}function ob(t,e,r){return _i&21?(hr(r,e)||(r=uw(),Ae.lanes|=r,wi|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,kt=!0),t.memoizedState=r)}function CS(t,e){var r=pe;pe=r!==0&&4>r?r:4,t(!0);var n=Dd.transition;Dd.transition={};try{t(!1),e()}finally{pe=r,Dd.transition=n}}function sb(){return Qt().memoizedState}function kS(t,e,r){var n=kn(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},ab(t))lb(e,r);else if(r=jw(t,e,r,n),r!==null){var i=bt();ur(r,t,n,i),cb(r,e,n)}}function RS(t,e,r){var n=kn(t),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(ab(t))lb(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,r);if(i.hasEagerState=!0,i.eagerState=l,hr(l,s)){var c=e.interleaved;c===null?(i.next=i,Dp(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}r=jw(t,e,i,n),r!==null&&(i=bt(),ur(r,t,n,i),cb(r,e,n))}}function ab(t){var e=t.alternate;return t===Ae||e!==null&&e===Ae}function lb(t,e){Ps=Sc=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function cb(t,e,r){if(r&4194240){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,wp(t,r)}}var Cc={readContext:Gt,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},PS={readContext:Gt,useCallback:function(t,e){return yr().memoizedState=[t,e===void 0?null:e],t},useContext:Gt,useEffect:iy,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,Gl(4194308,4,tb.bind(null,e,t),r)},useLayoutEffect:function(t,e){return Gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gl(4,2,t,e)},useMemo:function(t,e){var r=yr();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var n=yr();return e=r!==void 0?r(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=kS.bind(null,Ae,t),[n.memoizedState,t]},useRef:function(t){var e=yr();return t={current:t},e.memoizedState=t},useState:ny,useDebugValue:Bp,useDeferredValue:function(t){return yr().memoizedState=t},useTransition:function(){var t=ny(!1),e=t[0];return t=CS.bind(null,t[1]),yr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var n=Ae,i=yr();if(Ie){if(r===void 0)throw Error(M(407));r=r()}else{if(r=e(),We===null)throw Error(M(349));_i&30||Kw(n,e,r)}i.memoizedState=r;var o={value:r,getSnapshot:e};return i.queue=o,iy(Qw.bind(null,n,o,t),[t]),n.flags|=2048,oa(9,Gw.bind(null,n,o,r,e),void 0,null),r},useId:function(){var t=yr(),e=We.identifierPrefix;if(Ie){var r=Ur,n=Fr;r=(n&~(1<<32-cr(n)-1)).toString(32)+r,e=":"+e+"R"+r,r=na++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=SS++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},NS={readContext:Gt,useCallback:nb,useContext:Gt,useEffect:jp,useImperativeHandle:rb,useInsertionEffect:Zw,useLayoutEffect:eb,useMemo:ib,useReducer:Ld,useRef:Jw,useState:function(){return Ld(ia)},useDebugValue:Bp,useDeferredValue:function(t){var e=Qt();return ob(e,ze.memoizedState,t)},useTransition:function(){var t=Ld(ia)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:Hw,useSyncExternalStore:Ww,useId:sb,unstable_isNewReconciler:!1},OS={readContext:Gt,useCallback:nb,useContext:Gt,useEffect:jp,useImperativeHandle:rb,useInsertionEffect:Zw,useLayoutEffect:eb,useMemo:ib,useReducer:Vd,useRef:Jw,useState:function(){return Vd(ia)},useDebugValue:Bp,useDeferredValue:function(t){var e=Qt();return ze===null?e.memoizedState=t:ob(e,ze.memoizedState,t)},useTransition:function(){var t=Vd(ia)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:Hw,useSyncExternalStore:Ww,useId:sb,unstable_isNewReconciler:!1};function or(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Gh(t,e,r,n){e=t.memoizedState,r=r(n,e),r=r==null?e:Se({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var cu={isMounted:function(t){return(t=t._reactInternals)?Pi(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var n=bt(),i=kn(t),o=qr(n,i);o.payload=e,r!=null&&(o.callback=r),e=Sn(t,o,i),e!==null&&(ur(e,t,i,n),Wl(e,t,i))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var n=bt(),i=kn(t),o=qr(n,i);o.tag=1,o.payload=e,r!=null&&(o.callback=r),e=Sn(t,o,i),e!==null&&(ur(e,t,i,n),Wl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=bt(),n=kn(t),i=qr(r,n);i.tag=2,e!=null&&(i.callback=e),e=Sn(t,i,n),e!==null&&(ur(e,t,n,r),Wl(e,t,n))}};function oy(t,e,r,n,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,o,s):e.prototype&&e.prototype.isPureReactComponent?!Xs(r,n)||!Xs(i,o):!0}function ub(t,e,r){var n=!1,i=Ln,o=e.contextType;return typeof o=="object"&&o!==null?o=Gt(o):(i=Pt(e)?vi:mt.current,n=e.contextTypes,o=(n=n!=null)?vo(t,i):Ln),e=new e(r,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cu,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function sy(t,e,r,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,n),e.state!==t&&cu.enqueueReplaceState(e,e.state,null)}function Qh(t,e,r,n){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs={},Lp(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Gt(o):(o=Pt(e)?vi:mt.current,i.context=vo(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Gh(t,e,o,r),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&cu.enqueueReplaceState(i,i.state,null),xc(t,r,i,n),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function bo(t,e){try{var r="",n=e;do r+=aA(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Md(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Yh(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var DS=typeof WeakMap=="function"?WeakMap:Map;function db(t,e,r){r=qr(-1,r),r.tag=3,r.payload={element:null};var n=e.value;return r.callback=function(){Rc||(Rc=!0,af=n),Yh(t,e)},r}function hb(t,e,r){r=qr(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=e.value;r.payload=function(){return n(i)},r.callback=function(){Yh(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Yh(t,e),typeof n!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),r}function ay(t,e,r){var n=t.pingCache;if(n===null){n=t.pingCache=new DS;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(r)||(i.add(r),t=GS.bind(null,t,e,r),e.then(t,t))}function ly(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cy(t,e,r,n,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=qr(-1,1),e.tag=2,Sn(r,e,1))),r.lanes|=1),t)}var LS=rn.ReactCurrentOwner,kt=!1;function wt(t,e,r,n){e.child=t===null?zw(e,null,r,n):_o(e,t.child,r,n)}function uy(t,e,r,n,i){r=r.render;var o=e.ref;return co(e,i),n=Up(t,e,r,n,o,i),r=zp(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Yr(t,e,i)):(Ie&&r&&Cp(e),e.flags|=1,wt(t,e,n,i),e.child)}function dy(t,e,r,n,i){if(t===null){var o=r.type;return typeof o=="function"&&!Xp(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=o,fb(t,e,o,n,i)):(t=Jl(r.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(r=r.compare,r=r!==null?r:Xs,r(s,n)&&t.ref===e.ref)return Yr(t,e,i)}return e.flags|=1,t=Rn(o,n),t.ref=e.ref,t.return=e,e.child=t}function fb(t,e,r,n,i){if(t!==null){var o=t.memoizedProps;if(Xs(o,n)&&t.ref===e.ref)if(kt=!1,e.pendingProps=n=o,(t.lanes&i)!==0)t.flags&131072&&(kt=!0);else return e.lanes=t.lanes,Yr(t,e,i)}return Xh(t,e,r,n,i)}function pb(t,e,r){var n=e.pendingProps,i=n.children,o=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(io,Dt),Dt|=r;else{if(!(r&1073741824))return t=o!==null?o.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(io,Dt),Dt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,ye(io,Dt),Dt|=n}else o!==null?(n=o.baseLanes|r,e.memoizedState=null):n=r,ye(io,Dt),Dt|=n;return wt(t,e,i,r),e.child}function mb(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Xh(t,e,r,n,i){var o=Pt(r)?vi:mt.current;return o=vo(e,o),co(e,i),r=Up(t,e,r,n,o,i),n=zp(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Yr(t,e,i)):(Ie&&n&&Cp(e),e.flags|=1,wt(t,e,r,i),e.child)}function hy(t,e,r,n,i){if(Pt(r)){var o=!0;wc(e)}else o=!1;if(co(e,i),e.stateNode===null)Ql(t,e),ub(e,r,n),Qh(e,r,n,i),n=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var c=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=Gt(u):(u=Pt(r)?vi:mt.current,u=vo(e,u));var f=r.getDerivedStateFromProps,p=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==n||c!==u)&&sy(e,s,n,u),hn=!1;var m=e.memoizedState;s.state=m,xc(e,n,s,i),c=e.memoizedState,l!==n||m!==c||Rt.current||hn?(typeof f=="function"&&(Gh(e,r,f,n),c=e.memoizedState),(l=hn||oy(e,r,l,n,m,c,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=c),s.props=n,s.state=c,s.context=u,n=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{s=e.stateNode,Bw(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:or(e.type,l),s.props=u,p=e.pendingProps,m=s.context,c=r.contextType,typeof c=="object"&&c!==null?c=Gt(c):(c=Pt(r)?vi:mt.current,c=vo(e,c));var T=r.getDerivedStateFromProps;(f=typeof T=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||m!==c)&&sy(e,s,n,c),hn=!1,m=e.memoizedState,s.state=m,xc(e,n,s,i);var S=e.memoizedState;l!==p||m!==S||Rt.current||hn?(typeof T=="function"&&(Gh(e,r,T,n),S=e.memoizedState),(u=hn||oy(e,r,u,n,m,S,c)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,S,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,S,c)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=S),s.props=n,s.state=S,s.context=c,n=u):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),n=!1)}return Jh(t,e,r,n,o,i)}function Jh(t,e,r,n,i,o){mb(t,e);var s=(e.flags&128)!==0;if(!n&&!s)return i&&Xv(e,r,!1),Yr(t,e,o);n=e.stateNode,LS.current=e;var l=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&s?(e.child=_o(e,t.child,null,o),e.child=_o(e,null,l,o)):wt(t,e,l,o),e.memoizedState=n.state,i&&Xv(e,r,!0),e.child}function gb(t){var e=t.stateNode;e.pendingContext?Yv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yv(t,e.context,!1),Vp(t,e.containerInfo)}function fy(t,e,r,n,i){return yo(),Rp(i),e.flags|=256,wt(t,e,r,n),e.child}var Zh={dehydrated:null,treeContext:null,retryLane:0};function ef(t){return{baseLanes:t,cachePool:null,transitions:null}}function vb(t,e,r){var n=e.pendingProps,i=xe.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(xe,i&1),t===null)return Wh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=n.children,t=n.fallback,o?(n=e.mode,o=e.child,s={mode:"hidden",children:s},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=hu(s,n,0,null),t=hi(t,n,r,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=ef(r),e.memoizedState=Zh,t):qp(e,s));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return VS(t,e,s,n,l,i,r);if(o){o=n.fallback,s=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:n.children};return!(s&1)&&e.child!==i?(n=e.child,n.childLanes=0,n.pendingProps=c,e.deletions=null):(n=Rn(i,c),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Rn(l,o):(o=hi(o,s,r,null),o.flags|=2),o.return=e,n.return=e,n.sibling=o,e.child=n,n=o,o=e.child,s=t.child.memoizedState,s=s===null?ef(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~r,e.memoizedState=Zh,n}return o=t.child,t=o.sibling,n=Rn(o,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n}function qp(t,e){return e=hu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bl(t,e,r,n){return n!==null&&Rp(n),_o(e,t.child,null,r),t=qp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function VS(t,e,r,n,i,o,s){if(r)return e.flags&256?(e.flags&=-257,n=Md(Error(M(422))),bl(t,e,s,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=n.fallback,i=e.mode,n=hu({mode:"visible",children:n.children},i,0,null),o=hi(o,i,s,null),o.flags|=2,n.return=e,o.return=e,n.sibling=o,e.child=n,e.mode&1&&_o(e,t.child,null,s),e.child.memoizedState=ef(s),e.memoizedState=Zh,o);if(!(e.mode&1))return bl(t,e,s,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(M(419)),n=Md(o,n,void 0),bl(t,e,s,n)}if(l=(s&t.childLanes)!==0,kt||l){if(n=We,n!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qr(t,i),ur(n,t,i,-1))}return Yp(),n=Md(Error(M(421))),bl(t,e,s,n)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=QS.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Lt=An(i.nextSibling),Mt=e,Ie=!0,ar=null,t!==null&&(zt[jt++]=Fr,zt[jt++]=Ur,zt[jt++]=yi,Fr=t.id,Ur=t.overflow,yi=e),e=qp(e,n.children),e.flags|=4096,e)}function py(t,e,r){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Kh(t.return,e,r)}function $d(t,e,r,n,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function yb(t,e,r){var n=e.pendingProps,i=n.revealOrder,o=n.tail;if(wt(t,e,n.children,r),n=xe.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&py(t,r,e);else if(t.tag===19)py(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(ye(xe,n),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(r=e.child,i=null;r!==null;)t=r.alternate,t!==null&&Ac(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=e.child,e.child=null):(i=r.sibling,r.sibling=null),$d(e,!1,i,r,o);break;case"backwards":for(r=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ac(t)===null){e.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}$d(e,!0,r,null,o);break;case"together":$d(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ql(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Yr(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),wi|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,r=Rn(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=Rn(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function MS(t,e,r){switch(e.tag){case 3:gb(e),yo();break;case 5:qw(e);break;case 1:Pt(e.type)&&wc(e);break;case 4:Vp(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,i=e.memoizedProps.value;ye(Ic,n._currentValue),n._currentValue=i;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(ye(xe,xe.current&1),e.flags|=128,null):r&e.child.childLanes?vb(t,e,r):(ye(xe,xe.current&1),t=Yr(t,e,r),t!==null?t.sibling:null);ye(xe,xe.current&1);break;case 19:if(n=(r&e.childLanes)!==0,t.flags&128){if(n)return yb(t,e,r);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(xe,xe.current),n)break;return null;case 22:case 23:return e.lanes=0,pb(t,e,r)}return Yr(t,e,r)}var _b,tf,wb,bb;_b=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};tf=function(){};wb=function(t,e,r,n){var i=t.memoizedProps;if(i!==n){t=e.stateNode,oi(br.current);var o=null;switch(r){case"input":i=Ih(t,i),n=Ih(t,n),o=[];break;case"select":i=Se({},i,{value:void 0}),n=Se({},n,{value:void 0}),o=[];break;case"textarea":i=Ah(t,i),n=Ah(t,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=yc)}Ch(r,n);var s;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(qs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var c=n[u];if(l=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(r||(r={}),r[s]=c[s])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(qs.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&we("scroll",t),o||l===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};bb=function(t,e,r,n){r!==n&&(e.flags|=4)};function us(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,n=0;if(e)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=r,e}function $S(t,e,r){var n=e.pendingProps;switch(kp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(e),null;case 1:return Pt(e.type)&&_c(),ct(e),null;case 3:return n=e.stateNode,wo(),Ee(Rt),Ee(mt),$p(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(_l(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ar!==null&&(uf(ar),ar=null))),tf(t,e),ct(e),null;case 5:Mp(e);var i=oi(ra.current);if(r=e.type,t!==null&&e.stateNode!=null)wb(t,e,r,n,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(M(166));return ct(e),null}if(t=oi(br.current),_l(e)){n=e.stateNode,r=e.type;var o=e.memoizedProps;switch(n[_r]=e,n[ea]=o,t=(e.mode&1)!==0,r){case"dialog":we("cancel",n),we("close",n);break;case"iframe":case"object":case"embed":we("load",n);break;case"video":case"audio":for(i=0;i<_s.length;i++)we(_s[i],n);break;case"source":we("error",n);break;case"img":case"image":case"link":we("error",n),we("load",n);break;case"details":we("toggle",n);break;case"input":Iv(n,o),we("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},we("invalid",n);break;case"textarea":xv(n,o),we("invalid",n)}Ch(r,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&yl(n.textContent,l,t),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&yl(n.textContent,l,t),i=["children",""+l]):qs.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&we("scroll",n)}switch(r){case"input":ul(n),Tv(n,o,!0);break;case"textarea":ul(n),Av(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=yc)}n=i,e.updateQueue=n,n!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Q0(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=s.createElement(r,{is:n.is}):(t=s.createElement(r),r==="select"&&(s=t,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):t=s.createElementNS(t,r),t[_r]=e,t[ea]=n,_b(t,e,!1,!1),e.stateNode=t;e:{switch(s=kh(r,n),r){case"dialog":we("cancel",t),we("close",t),i=n;break;case"iframe":case"object":case"embed":we("load",t),i=n;break;case"video":case"audio":for(i=0;i<_s.length;i++)we(_s[i],t);i=n;break;case"source":we("error",t),i=n;break;case"img":case"image":case"link":we("error",t),we("load",t),i=n;break;case"details":we("toggle",t),i=n;break;case"input":Iv(t,n),i=Ih(t,n),we("invalid",t);break;case"option":i=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},i=Se({},n,{value:void 0}),we("invalid",t);break;case"textarea":xv(t,n),i=Ah(t,n),we("invalid",t);break;default:i=n}Ch(r,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?J0(t,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Y0(t,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Hs(t,c):typeof c=="number"&&Hs(t,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(qs.hasOwnProperty(o)?c!=null&&o==="onScroll"&&we("scroll",t):c!=null&&pp(t,o,c,s))}switch(r){case"input":ul(t),Tv(t,n,!1);break;case"textarea":ul(t),Av(t);break;case"option":n.value!=null&&t.setAttribute("value",""+Dn(n.value));break;case"select":t.multiple=!!n.multiple,o=n.value,o!=null?oo(t,!!n.multiple,o,!1):n.defaultValue!=null&&oo(t,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=yc)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ct(e),null;case 6:if(t&&e.stateNode!=null)bb(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(M(166));if(r=oi(ra.current),oi(br.current),_l(e)){if(n=e.stateNode,r=e.memoizedProps,n[_r]=e,(o=n.nodeValue!==r)&&(t=Mt,t!==null))switch(t.tag){case 3:yl(n.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yl(n.nodeValue,r,(t.mode&1)!==0)}o&&(e.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[_r]=e,e.stateNode=n}return ct(e),null;case 13:if(Ee(xe),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Lt!==null&&e.mode&1&&!(e.flags&128))Fw(),yo(),e.flags|=98560,o=!1;else if(o=_l(e),n!==null&&n.dehydrated!==null){if(t===null){if(!o)throw Error(M(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(M(317));o[_r]=e}else yo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ct(e),o=!1}else ar!==null&&(uf(ar),ar=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?je===0&&(je=3):Yp())),e.updateQueue!==null&&(e.flags|=4),ct(e),null);case 4:return wo(),tf(t,e),t===null&&Js(e.stateNode.containerInfo),ct(e),null;case 10:return Op(e.type._context),ct(e),null;case 17:return Pt(e.type)&&_c(),ct(e),null;case 19:if(Ee(xe),o=e.memoizedState,o===null)return ct(e),null;if(n=(e.flags&128)!==0,s=o.rendering,s===null)if(n)us(o,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Ac(t),s!==null){for(e.flags|=128,us(o,!1),n=s.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=r,r=e.child;r!==null;)o=r,t=n,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return ye(xe,xe.current&1|2),e.child}t=t.sibling}o.tail!==null&&Le()>Eo&&(e.flags|=128,n=!0,us(o,!1),e.lanes=4194304)}else{if(!n)if(t=Ac(s),t!==null){if(e.flags|=128,n=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),us(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ie)return ct(e),null}else 2*Le()-o.renderingStartTime>Eo&&r!==1073741824&&(e.flags|=128,n=!0,us(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(r=o.last,r!==null?r.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Le(),e.sibling=null,r=xe.current,ye(xe,n?r&1|2:r&1),e):(ct(e),null);case 22:case 23:return Qp(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?Dt&1073741824&&(ct(e),e.subtreeFlags&6&&(e.flags|=8192)):ct(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function FS(t,e){switch(kp(e),e.tag){case 1:return Pt(e.type)&&_c(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return wo(),Ee(Rt),Ee(mt),$p(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Mp(e),null;case 13:if(Ee(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));yo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(xe),null;case 4:return wo(),null;case 10:return Op(e.type._context),null;case 22:case 23:return Qp(),null;case 24:return null;default:return null}}var El=!1,ht=!1,US=typeof WeakSet=="function"?WeakSet:Set,W=null;function no(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Re(t,e,n)}else r.current=null}function rf(t,e,r){try{r()}catch(n){Re(t,e,n)}}var my=!1;function zS(t,e){if(Fh=mc,t=Aw(),Sp(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var s=0,l=-1,c=-1,u=0,f=0,p=t,m=null;t:for(;;){for(var T;p!==r||i!==0&&p.nodeType!==3||(l=s+i),p!==o||n!==0&&p.nodeType!==3||(c=s+n),p.nodeType===3&&(s+=p.nodeValue.length),(T=p.firstChild)!==null;)m=p,p=T;for(;;){if(p===t)break t;if(m===r&&++u===i&&(l=s),m===o&&++f===n&&(c=s),(T=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=T}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Uh={focusedElem:t,selectionRange:r},mc=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var P=S.memoizedProps,N=S.memoizedState,b=e.stateNode,y=b.getSnapshotBeforeUpdate(e.elementType===e.type?P:or(e.type,P),N);b.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(D){Re(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return S=my,my=!1,S}function Ns(t,e,r){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&rf(e,r,o)}i=i.next}while(i!==n)}}function uu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==e)}}function nf(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Eb(t){var e=t.alternate;e!==null&&(t.alternate=null,Eb(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_r],delete e[ea],delete e[Bh],delete e[IS],delete e[TS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ib(t){return t.tag===5||t.tag===3||t.tag===4}function gy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ib(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function of(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=yc));else if(n!==4&&(t=t.child,t!==null))for(of(t,e,r),t=t.sibling;t!==null;)of(t,e,r),t=t.sibling}function sf(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(sf(t,e,r),t=t.sibling;t!==null;)sf(t,e,r),t=t.sibling}var Qe=null,sr=!1;function cn(t,e,r){for(r=r.child;r!==null;)Tb(t,e,r),r=r.sibling}function Tb(t,e,r){if(wr&&typeof wr.onCommitFiberUnmount=="function")try{wr.onCommitFiberUnmount(ru,r)}catch{}switch(r.tag){case 5:ht||no(r,e);case 6:var n=Qe,i=sr;Qe=null,cn(t,e,r),Qe=n,sr=i,Qe!==null&&(sr?(t=Qe,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Qe.removeChild(r.stateNode));break;case 18:Qe!==null&&(sr?(t=Qe,r=r.stateNode,t.nodeType===8?Pd(t.parentNode,r):t.nodeType===1&&Pd(t,r),Qs(t)):Pd(Qe,r.stateNode));break;case 4:n=Qe,i=sr,Qe=r.stateNode.containerInfo,sr=!0,cn(t,e,r),Qe=n,sr=i;break;case 0:case 11:case 14:case 15:if(!ht&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&rf(r,e,s),i=i.next}while(i!==n)}cn(t,e,r);break;case 1:if(!ht&&(no(r,e),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){Re(r,e,l)}cn(t,e,r);break;case 21:cn(t,e,r);break;case 22:r.mode&1?(ht=(n=ht)||r.memoizedState!==null,cn(t,e,r),ht=n):cn(t,e,r);break;default:cn(t,e,r)}}function vy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new US),e.forEach(function(n){var i=YS.bind(null,t,n);r.has(n)||(r.add(n),n.then(i,i))})}}function nr(t,e){var r=e.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:Qe=l.stateNode,sr=!1;break e;case 3:Qe=l.stateNode.containerInfo,sr=!0;break e;case 4:Qe=l.stateNode.containerInfo,sr=!0;break e}l=l.return}if(Qe===null)throw Error(M(160));Tb(o,s,i),Qe=null,sr=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Re(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xb(e,t),e=e.sibling}function xb(t,e){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(nr(e,t),gr(t),n&4){try{Ns(3,t,t.return),uu(3,t)}catch(P){Re(t,t.return,P)}try{Ns(5,t,t.return)}catch(P){Re(t,t.return,P)}}break;case 1:nr(e,t),gr(t),n&512&&r!==null&&no(r,r.return);break;case 5:if(nr(e,t),gr(t),n&512&&r!==null&&no(r,r.return),t.flags&32){var i=t.stateNode;try{Hs(i,"")}catch(P){Re(t,t.return,P)}}if(n&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=r!==null?r.memoizedProps:o,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&K0(i,o),kh(l,s);var u=kh(l,o);for(s=0;s<c.length;s+=2){var f=c[s],p=c[s+1];f==="style"?J0(i,p):f==="dangerouslySetInnerHTML"?Y0(i,p):f==="children"?Hs(i,p):pp(i,f,p,u)}switch(l){case"input":Th(i,o);break;case"textarea":G0(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var T=o.value;T!=null?oo(i,!!o.multiple,T,!1):m!==!!o.multiple&&(o.defaultValue!=null?oo(i,!!o.multiple,o.defaultValue,!0):oo(i,!!o.multiple,o.multiple?[]:"",!1))}i[ea]=o}catch(P){Re(t,t.return,P)}}break;case 6:if(nr(e,t),gr(t),n&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(P){Re(t,t.return,P)}}break;case 3:if(nr(e,t),gr(t),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Qs(e.containerInfo)}catch(P){Re(t,t.return,P)}break;case 4:nr(e,t),gr(t);break;case 13:nr(e,t),gr(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Kp=Le())),n&4&&vy(t);break;case 22:if(f=r!==null&&r.memoizedState!==null,t.mode&1?(ht=(u=ht)||f,nr(e,t),ht=u):nr(e,t),gr(t),n&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(p=W=f;W!==null;){switch(m=W,T=m.child,m.tag){case 0:case 11:case 14:case 15:Ns(4,m,m.return);break;case 1:no(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){n=m,r=m.return;try{e=n,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(P){Re(n,r,P)}}break;case 5:no(m,m.return);break;case 22:if(m.memoizedState!==null){_y(p);continue}}T!==null?(T.return=m,W=T):_y(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=X0("display",s))}catch(P){Re(t,t.return,P)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(P){Re(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:nr(e,t),gr(t),n&4&&vy(t);break;case 21:break;default:nr(e,t),gr(t)}}function gr(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(Ib(r)){var n=r;break e}r=r.return}throw Error(M(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Hs(i,""),n.flags&=-33);var o=gy(t);sf(t,o,i);break;case 3:case 4:var s=n.stateNode.containerInfo,l=gy(t);of(t,l,s);break;default:throw Error(M(161))}}catch(c){Re(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jS(t,e,r){W=t,Ab(t)}function Ab(t,e,r){for(var n=(t.mode&1)!==0;W!==null;){var i=W,o=i.child;if(i.tag===22&&n){var s=i.memoizedState!==null||El;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||ht;l=El;var u=ht;if(El=s,(ht=c)&&!u)for(W=i;W!==null;)s=W,c=s.child,s.tag===22&&s.memoizedState!==null?wy(i):c!==null?(c.return=s,W=c):wy(i);for(;o!==null;)W=o,Ab(o),o=o.sibling;W=i,El=l,ht=u}yy(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,W=o):yy(t)}}function yy(t){for(;W!==null;){var e=W;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ht||uu(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!ht)if(r===null)n.componentDidMount();else{var i=e.elementType===e.type?r.memoizedProps:or(e.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&ry(e,o,n);break;case 3:var s=e.updateQueue;if(s!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}ry(e,s,r)}break;case 5:var l=e.stateNode;if(r===null&&e.flags&4){r=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Qs(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}ht||e.flags&512&&nf(e)}catch(m){Re(e,e.return,m)}}if(e===t){W=null;break}if(r=e.sibling,r!==null){r.return=e.return,W=r;break}W=e.return}}function _y(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var r=e.sibling;if(r!==null){r.return=e.return,W=r;break}W=e.return}}function wy(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{uu(4,e)}catch(c){Re(e,r,c)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var i=e.return;try{n.componentDidMount()}catch(c){Re(e,i,c)}}var o=e.return;try{nf(e)}catch(c){Re(e,o,c)}break;case 5:var s=e.return;try{nf(e)}catch(c){Re(e,s,c)}}}catch(c){Re(e,e.return,c)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var BS=Math.ceil,kc=rn.ReactCurrentDispatcher,Hp=rn.ReactCurrentOwner,Ht=rn.ReactCurrentBatchConfig,ue=0,We=null,$e=null,Ze=0,Dt=0,io=Un(0),je=0,sa=null,wi=0,du=0,Wp=0,Os=null,St=null,Kp=0,Eo=1/0,Lr=null,Rc=!1,af=null,Cn=null,Il=!1,bn=null,Pc=0,Ds=0,lf=null,Yl=-1,Xl=0;function bt(){return ue&6?Le():Yl!==-1?Yl:Yl=Le()}function kn(t){return t.mode&1?ue&2&&Ze!==0?Ze&-Ze:AS.transition!==null?(Xl===0&&(Xl=uw()),Xl):(t=pe,t!==0||(t=window.event,t=t===void 0?16:vw(t.type)),t):1}function ur(t,e,r,n){if(50<Ds)throw Ds=0,lf=null,Error(M(185));xa(t,r,n),(!(ue&2)||t!==We)&&(t===We&&(!(ue&2)&&(du|=r),je===4&&mn(t,Ze)),Nt(t,n),r===1&&ue===0&&!(e.mode&1)&&(Eo=Le()+500,au&&zn()))}function Nt(t,e){var r=t.callbackNode;AA(t,e);var n=pc(t,t===We?Ze:0);if(n===0)r!==null&&kv(r),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(r!=null&&kv(r),e===1)t.tag===0?xS(by.bind(null,t)):Vw(by.bind(null,t)),bS(function(){!(ue&6)&&zn()}),r=null;else{switch(dw(n)){case 1:r=_p;break;case 4:r=lw;break;case 16:r=fc;break;case 536870912:r=cw;break;default:r=fc}r=Db(r,Sb.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Sb(t,e){if(Yl=-1,Xl=0,ue&6)throw Error(M(327));var r=t.callbackNode;if(uo()&&t.callbackNode!==r)return null;var n=pc(t,t===We?Ze:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=Nc(t,n);else{e=n;var i=ue;ue|=2;var o=kb();(We!==t||Ze!==e)&&(Lr=null,Eo=Le()+500,di(t,e));do try{WS();break}catch(l){Cb(t,l)}while(!0);Np(),kc.current=o,ue=i,$e!==null?e=0:(We=null,Ze=0,e=je)}if(e!==0){if(e===2&&(i=Dh(t),i!==0&&(n=i,e=cf(t,i))),e===1)throw r=sa,di(t,0),mn(t,n),Nt(t,Le()),r;if(e===6)mn(t,n);else{if(i=t.current.alternate,!(n&30)&&!qS(i)&&(e=Nc(t,n),e===2&&(o=Dh(t),o!==0&&(n=o,e=cf(t,o))),e===1))throw r=sa,di(t,0),mn(t,n),Nt(t,Le()),r;switch(t.finishedWork=i,t.finishedLanes=n,e){case 0:case 1:throw Error(M(345));case 2:ti(t,St,Lr);break;case 3:if(mn(t,n),(n&130023424)===n&&(e=Kp+500-Le(),10<e)){if(pc(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){bt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=jh(ti.bind(null,t,St,Lr),e);break}ti(t,St,Lr);break;case 4:if(mn(t,n),(n&4194240)===n)break;for(e=t.eventTimes,i=-1;0<n;){var s=31-cr(n);o=1<<s,s=e[s],s>i&&(i=s),n&=~o}if(n=i,n=Le()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*BS(n/1960))-n,10<n){t.timeoutHandle=jh(ti.bind(null,t,St,Lr),n);break}ti(t,St,Lr);break;case 5:ti(t,St,Lr);break;default:throw Error(M(329))}}}return Nt(t,Le()),t.callbackNode===r?Sb.bind(null,t):null}function cf(t,e){var r=Os;return t.current.memoizedState.isDehydrated&&(di(t,e).flags|=256),t=Nc(t,e),t!==2&&(e=St,St=r,e!==null&&uf(e)),t}function uf(t){St===null?St=t:St.push.apply(St,t)}function qS(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!hr(o(),i))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mn(t,e){for(e&=~Wp,e&=~du,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-cr(e),n=1<<r;t[r]=-1,e&=~n}}function by(t){if(ue&6)throw Error(M(327));uo();var e=pc(t,0);if(!(e&1))return Nt(t,Le()),null;var r=Nc(t,e);if(t.tag!==0&&r===2){var n=Dh(t);n!==0&&(e=n,r=cf(t,n))}if(r===1)throw r=sa,di(t,0),mn(t,e),Nt(t,Le()),r;if(r===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ti(t,St,Lr),Nt(t,Le()),null}function Gp(t,e){var r=ue;ue|=1;try{return t(e)}finally{ue=r,ue===0&&(Eo=Le()+500,au&&zn())}}function bi(t){bn!==null&&bn.tag===0&&!(ue&6)&&uo();var e=ue;ue|=1;var r=Ht.transition,n=pe;try{if(Ht.transition=null,pe=1,t)return t()}finally{pe=n,Ht.transition=r,ue=e,!(ue&6)&&zn()}}function Qp(){Dt=io.current,Ee(io)}function di(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,wS(r)),$e!==null)for(r=$e.return;r!==null;){var n=r;switch(kp(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&_c();break;case 3:wo(),Ee(Rt),Ee(mt),$p();break;case 5:Mp(n);break;case 4:wo();break;case 13:Ee(xe);break;case 19:Ee(xe);break;case 10:Op(n.type._context);break;case 22:case 23:Qp()}r=r.return}if(We=t,$e=t=Rn(t.current,null),Ze=Dt=e,je=0,sa=null,Wp=du=wi=0,St=Os=null,ii!==null){for(e=0;e<ii.length;e++)if(r=ii[e],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var s=o.next;o.next=i,n.next=s}r.pending=n}ii=null}return t}function Cb(t,e){do{var r=$e;try{if(Np(),Kl.current=Cc,Sc){for(var n=Ae.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Sc=!1}if(_i=0,He=ze=Ae=null,Ps=!1,na=0,Hp.current=null,r===null||r.return===null){je=1,sa=e,$e=null;break}e:{var o=t,s=r.return,l=r,c=e;if(e=Ze,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var T=ly(s);if(T!==null){T.flags&=-257,cy(T,s,l,o,e),T.mode&1&&ay(o,u,e),e=T,c=u;var S=e.updateQueue;if(S===null){var P=new Set;P.add(c),e.updateQueue=P}else S.add(c);break e}else{if(!(e&1)){ay(o,u,e),Yp();break e}c=Error(M(426))}}else if(Ie&&l.mode&1){var N=ly(s);if(N!==null){!(N.flags&65536)&&(N.flags|=256),cy(N,s,l,o,e),Rp(bo(c,l));break e}}o=c=bo(c,l),je!==4&&(je=2),Os===null?Os=[o]:Os.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var b=db(o,c,e);ty(o,b);break e;case 1:l=c;var y=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Cn===null||!Cn.has(x)))){o.flags|=65536,e&=-e,o.lanes|=e;var D=hb(o,l,e);ty(o,D);break e}}o=o.return}while(o!==null)}Pb(r)}catch(F){e=F,$e===r&&r!==null&&($e=r=r.return);continue}break}while(!0)}function kb(){var t=kc.current;return kc.current=Cc,t===null?Cc:t}function Yp(){(je===0||je===3||je===2)&&(je=4),We===null||!(wi&268435455)&&!(du&268435455)||mn(We,Ze)}function Nc(t,e){var r=ue;ue|=2;var n=kb();(We!==t||Ze!==e)&&(Lr=null,di(t,e));do try{HS();break}catch(i){Cb(t,i)}while(!0);if(Np(),ue=r,kc.current=n,$e!==null)throw Error(M(261));return We=null,Ze=0,je}function HS(){for(;$e!==null;)Rb($e)}function WS(){for(;$e!==null&&!vA();)Rb($e)}function Rb(t){var e=Ob(t.alternate,t,Dt);t.memoizedProps=t.pendingProps,e===null?Pb(t):$e=e,Hp.current=null}function Pb(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=FS(r,e),r!==null){r.flags&=32767,$e=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,$e=null;return}}else if(r=$S(r,e,Dt),r!==null){$e=r;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);je===0&&(je=5)}function ti(t,e,r){var n=pe,i=Ht.transition;try{Ht.transition=null,pe=1,KS(t,e,r,n)}finally{Ht.transition=i,pe=n}return null}function KS(t,e,r,n){do uo();while(bn!==null);if(ue&6)throw Error(M(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var o=r.lanes|r.childLanes;if(SA(t,o),t===We&&($e=We=null,Ze=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Il||(Il=!0,Db(fc,function(){return uo(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Ht.transition,Ht.transition=null;var s=pe;pe=1;var l=ue;ue|=4,Hp.current=null,zS(t,r),xb(r,t),fS(Uh),mc=!!Fh,Uh=Fh=null,t.current=r,jS(r),yA(),ue=l,pe=s,Ht.transition=o}else t.current=r;if(Il&&(Il=!1,bn=t,Pc=i),o=t.pendingLanes,o===0&&(Cn=null),bA(r.stateNode),Nt(t,Le()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)i=e[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Rc)throw Rc=!1,t=af,af=null,t;return Pc&1&&t.tag!==0&&uo(),o=t.pendingLanes,o&1?t===lf?Ds++:(Ds=0,lf=t):Ds=0,zn(),null}function uo(){if(bn!==null){var t=dw(Pc),e=Ht.transition,r=pe;try{if(Ht.transition=null,pe=16>t?16:t,bn===null)var n=!1;else{if(t=bn,bn=null,Pc=0,ue&6)throw Error(M(331));var i=ue;for(ue|=4,W=t.current;W!==null;){var o=W,s=o.child;if(W.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(W=u;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:Ns(8,f,o)}var p=f.child;if(p!==null)p.return=f,W=p;else for(;W!==null;){f=W;var m=f.sibling,T=f.return;if(Eb(f),f===u){W=null;break}if(m!==null){m.return=T,W=m;break}W=T}}}var S=o.alternate;if(S!==null){var P=S.child;if(P!==null){S.child=null;do{var N=P.sibling;P.sibling=null,P=N}while(P!==null)}}W=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,W=s;else e:for(;W!==null;){if(o=W,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ns(9,o,o.return)}var b=o.sibling;if(b!==null){b.return=o.return,W=b;break e}W=o.return}}var y=t.current;for(W=y;W!==null;){s=W;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,W=x;else e:for(s=y;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:uu(9,l)}}catch(F){Re(l,l.return,F)}if(l===s){W=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,W=D;break e}W=l.return}}if(ue=i,zn(),wr&&typeof wr.onPostCommitFiberRoot=="function")try{wr.onPostCommitFiberRoot(ru,t)}catch{}n=!0}return n}finally{pe=r,Ht.transition=e}}return!1}function Ey(t,e,r){e=bo(r,e),e=db(t,e,1),t=Sn(t,e,1),e=bt(),t!==null&&(xa(t,1,e),Nt(t,e))}function Re(t,e,r){if(t.tag===3)Ey(t,t,r);else for(;e!==null;){if(e.tag===3){Ey(e,t,r);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Cn===null||!Cn.has(n))){t=bo(r,t),t=hb(e,t,1),e=Sn(e,t,1),t=bt(),e!==null&&(xa(e,1,t),Nt(e,t));break}}e=e.return}}function GS(t,e,r){var n=t.pingCache;n!==null&&n.delete(e),e=bt(),t.pingedLanes|=t.suspendedLanes&r,We===t&&(Ze&r)===r&&(je===4||je===3&&(Ze&130023424)===Ze&&500>Le()-Kp?di(t,0):Wp|=r),Nt(t,e)}function Nb(t,e){e===0&&(t.mode&1?(e=fl,fl<<=1,!(fl&130023424)&&(fl=4194304)):e=1);var r=bt();t=Qr(t,e),t!==null&&(xa(t,e,r),Nt(t,r))}function QS(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Nb(t,r)}function YS(t,e){var r=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(M(314))}n!==null&&n.delete(e),Nb(t,r)}var Ob;Ob=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rt.current)kt=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return kt=!1,MS(t,e,r);kt=!!(t.flags&131072)}else kt=!1,Ie&&e.flags&1048576&&Mw(e,Ec,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;Ql(t,e),t=e.pendingProps;var i=vo(e,mt.current);co(e,r),i=Up(null,e,n,t,i,r);var o=zp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pt(n)?(o=!0,wc(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Lp(e),i.updater=cu,e.stateNode=i,i._reactInternals=e,Qh(e,n,t,r),e=Jh(null,e,n,!0,o,r)):(e.tag=0,Ie&&o&&Cp(e),wt(null,e,i,r),e=e.child),e;case 16:n=e.elementType;e:{switch(Ql(t,e),t=e.pendingProps,i=n._init,n=i(n._payload),e.type=n,i=e.tag=JS(n),t=or(n,t),i){case 0:e=Xh(null,e,n,t,r);break e;case 1:e=hy(null,e,n,t,r);break e;case 11:e=uy(null,e,n,t,r);break e;case 14:e=dy(null,e,n,or(n.type,t),r);break e}throw Error(M(306,n,""))}return e;case 0:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:or(n,i),Xh(t,e,n,i,r);case 1:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:or(n,i),hy(t,e,n,i,r);case 3:e:{if(gb(e),t===null)throw Error(M(387));n=e.pendingProps,o=e.memoizedState,i=o.element,Bw(t,e),xc(e,n,null,r);var s=e.memoizedState;if(n=s.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=bo(Error(M(423)),e),e=fy(t,e,n,r,i);break e}else if(n!==i){i=bo(Error(M(424)),e),e=fy(t,e,n,r,i);break e}else for(Lt=An(e.stateNode.containerInfo.firstChild),Mt=e,Ie=!0,ar=null,r=zw(e,null,n,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(yo(),n===i){e=Yr(t,e,r);break e}wt(t,e,n,r)}e=e.child}return e;case 5:return qw(e),t===null&&Wh(e),n=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,zh(n,i)?s=null:o!==null&&zh(n,o)&&(e.flags|=32),mb(t,e),wt(t,e,s,r),e.child;case 6:return t===null&&Wh(e),null;case 13:return vb(t,e,r);case 4:return Vp(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=_o(e,null,n,r):wt(t,e,n,r),e.child;case 11:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:or(n,i),uy(t,e,n,i,r);case 7:return wt(t,e,e.pendingProps,r),e.child;case 8:return wt(t,e,e.pendingProps.children,r),e.child;case 12:return wt(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(n=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,ye(Ic,n._currentValue),n._currentValue=s,o!==null)if(hr(o.value,s)){if(o.children===i.children&&!Rt.current){e=Yr(t,e,r);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(o.tag===1){c=qr(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),Kh(o.return,r,e),l.lanes|=r;break}c=c.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(M(341));s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),Kh(s,r,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}wt(t,e,i.children,r),e=e.child}return e;case 9:return i=e.type,n=e.pendingProps.children,co(e,r),i=Gt(i),n=n(i),e.flags|=1,wt(t,e,n,r),e.child;case 14:return n=e.type,i=or(n,e.pendingProps),i=or(n.type,i),dy(t,e,n,i,r);case 15:return fb(t,e,e.type,e.pendingProps,r);case 17:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:or(n,i),Ql(t,e),e.tag=1,Pt(n)?(t=!0,wc(e)):t=!1,co(e,r),ub(e,n,i),Qh(e,n,i,r),Jh(null,e,n,!0,t,r);case 19:return yb(t,e,r);case 22:return pb(t,e,r)}throw Error(M(156,e.tag))};function Db(t,e){return aw(t,e)}function XS(t,e,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(t,e,r,n){return new XS(t,e,r,n)}function Xp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function JS(t){if(typeof t=="function")return Xp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gp)return 11;if(t===vp)return 14}return 2}function Rn(t,e){var r=t.alternate;return r===null?(r=Bt(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Jl(t,e,r,n,i,o){var s=2;if(n=t,typeof t=="function")Xp(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Gi:return hi(r.children,i,o,e);case mp:s=8,i|=8;break;case _h:return t=Bt(12,r,e,i|2),t.elementType=_h,t.lanes=o,t;case wh:return t=Bt(13,r,e,i),t.elementType=wh,t.lanes=o,t;case bh:return t=Bt(19,r,e,i),t.elementType=bh,t.lanes=o,t;case q0:return hu(r,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case j0:s=10;break e;case B0:s=9;break e;case gp:s=11;break e;case vp:s=14;break e;case dn:s=16,n=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=Bt(s,r,e,i),e.elementType=t,e.type=n,e.lanes=o,e}function hi(t,e,r,n){return t=Bt(7,t,n,e),t.lanes=r,t}function hu(t,e,r,n){return t=Bt(22,t,n,e),t.elementType=q0,t.lanes=r,t.stateNode={isHidden:!1},t}function Fd(t,e,r){return t=Bt(6,t,null,e),t.lanes=r,t}function Ud(t,e,r){return e=Bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ZS(t,e,r,n,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wd(0),this.expirationTimes=wd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wd(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Jp(t,e,r,n,i,o,s,l,c){return t=new ZS(t,e,r,l,c),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Bt(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lp(o),t}function eC(t,e,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ki,key:n==null?null:""+n,children:t,containerInfo:e,implementation:r}}function Lb(t){if(!t)return Ln;t=t._reactInternals;e:{if(Pi(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var r=t.type;if(Pt(r))return Lw(t,r,e)}return e}function Vb(t,e,r,n,i,o,s,l,c){return t=Jp(r,n,!0,t,i,o,s,l,c),t.context=Lb(null),r=t.current,n=bt(),i=kn(r),o=qr(n,i),o.callback=e??null,Sn(r,o,i),t.current.lanes=i,xa(t,i,n),Nt(t,n),t}function fu(t,e,r,n){var i=e.current,o=bt(),s=kn(i);return r=Lb(r),e.context===null?e.context=r:e.pendingContext=r,e=qr(o,s),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=Sn(i,e,s),t!==null&&(ur(t,i,s,o),Wl(t,i,s)),s}function Oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Iy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function Zp(t,e){Iy(t,e),(t=t.alternate)&&Iy(t,e)}function tC(){return null}var Mb=typeof reportError=="function"?reportError:function(t){console.error(t)};function em(t){this._internalRoot=t}pu.prototype.render=em.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));fu(t,e,null,null)};pu.prototype.unmount=em.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;bi(function(){fu(null,t,null,null)}),e[Gr]=null}};function pu(t){this._internalRoot=t}pu.prototype.unstable_scheduleHydration=function(t){if(t){var e=pw();t={blockedOn:null,target:t,priority:e};for(var r=0;r<pn.length&&e!==0&&e<pn[r].priority;r++);pn.splice(r,0,t),r===0&&gw(t)}};function tm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ty(){}function rC(t,e,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var u=Oc(s);o.call(u)}}var s=Vb(e,n,t,0,null,!1,!1,"",Ty);return t._reactRootContainer=s,t[Gr]=s.current,Js(t.nodeType===8?t.parentNode:t),bi(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var u=Oc(c);l.call(u)}}var c=Jp(t,0,!1,null,null,!1,!1,"",Ty);return t._reactRootContainer=c,t[Gr]=c.current,Js(t.nodeType===8?t.parentNode:t),bi(function(){fu(e,c,r,n)}),c}function gu(t,e,r,n,i){var o=r._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=Oc(s);l.call(c)}}fu(e,s,t,i)}else s=rC(r,e,t,i,n);return Oc(s)}hw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=ys(e.pendingLanes);r!==0&&(wp(e,r|1),Nt(e,Le()),!(ue&6)&&(Eo=Le()+500,zn()))}break;case 13:bi(function(){var n=Qr(t,1);if(n!==null){var i=bt();ur(n,t,1,i)}}),Zp(t,1)}};bp=function(t){if(t.tag===13){var e=Qr(t,134217728);if(e!==null){var r=bt();ur(e,t,134217728,r)}Zp(t,134217728)}};fw=function(t){if(t.tag===13){var e=kn(t),r=Qr(t,e);if(r!==null){var n=bt();ur(r,t,e,n)}Zp(t,e)}};pw=function(){return pe};mw=function(t,e){var r=pe;try{return pe=t,e()}finally{pe=r}};Ph=function(t,e,r){switch(e){case"input":if(Th(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var n=r[e];if(n!==t&&n.form===t.form){var i=su(n);if(!i)throw Error(M(90));W0(n),Th(n,i)}}}break;case"textarea":G0(t,r);break;case"select":e=r.value,e!=null&&oo(t,!!r.multiple,e,!1)}};tw=Gp;rw=bi;var nC={usingClientEntryPoint:!1,Events:[Sa,Ji,su,Z0,ew,Gp]},ds={findFiberByHostInstance:ni,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iC={bundleType:ds.bundleType,version:ds.version,rendererPackageName:ds.rendererPackageName,rendererConfig:ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ow(t),t===null?null:t.stateNode},findFiberByHostInstance:ds.findFiberByHostInstance||tC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{ru=Tl.inject(iC),wr=Tl}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nC;Ft.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tm(e))throw Error(M(200));return eC(t,e,null,r)};Ft.createRoot=function(t,e){if(!tm(t))throw Error(M(299));var r=!1,n="",i=Mb;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Jp(t,1,!1,null,null,r,!1,n,i),t[Gr]=e.current,Js(t.nodeType===8?t.parentNode:t),new em(e)};Ft.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=ow(e),t=t===null?null:t.stateNode,t};Ft.flushSync=function(t){return bi(t)};Ft.hydrate=function(t,e,r){if(!mu(e))throw Error(M(200));return gu(null,t,e,!0,r)};Ft.hydrateRoot=function(t,e,r){if(!tm(t))throw Error(M(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",s=Mb;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),e=Vb(e,null,t,1,r??null,i,!1,o,s),t[Gr]=e.current,Js(t),n)for(t=0;t<n.length;t++)r=n[t],i=r._getVersion,i=i(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,i]:e.mutableSourceEagerHydrationData.push(r,i);return new pu(e)};Ft.render=function(t,e,r){if(!mu(e))throw Error(M(200));return gu(null,t,e,!1,r)};Ft.unmountComponentAtNode=function(t){if(!mu(t))throw Error(M(40));return t._reactRootContainer?(bi(function(){gu(null,null,t,!1,function(){t._reactRootContainer=null,t[Gr]=null})}),!0):!1};Ft.unstable_batchedUpdates=Gp;Ft.unstable_renderSubtreeIntoContainer=function(t,e,r,n){if(!mu(r))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return gu(t,e,r,!1,n)};Ft.version="18.3.1-next-f1338f8080-20240426";function $b(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($b)}catch(t){console.error(t)}}$b(),$0.exports=Ft;var oC=$0.exports,Fb,xy=oC;Fb=xy.createRoot,xy.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aa(){return aa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},aa.apply(this,arguments)}var si;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(si||(si={}));const Ay="popstate";function sC(t){t===void 0&&(t={});function e(i,o){let{pathname:s="/",search:l="",hash:c=""}=ka(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),df("",{pathname:s,search:l,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(i,o){let s=i.document.querySelector("base"),l="";if(s&&s.getAttribute("href")){let c=i.location.href,u=c.indexOf("#");l=u===-1?c:c.slice(0,u)}return l+"#"+(typeof o=="string"?o:zb(o))}function n(i,o){Ub(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return lC(e,r,n,t)}function Er(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ub(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function aC(){return Math.random().toString(36).substr(2,8)}function Sy(t,e){return{usr:t.state,key:t.key,idx:e}}function df(t,e,r,n){return r===void 0&&(r=null),aa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ka(e):e,{state:r,key:e&&e.key||n||aC()})}function zb(t){let{pathname:e="/",search:r="",hash:n=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function ka(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function lC(t,e,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:o=!1}=n,s=i.history,l=si.Pop,c=null,u=f();u==null&&(u=0,s.replaceState(aa({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function p(){l=si.Pop;let N=f(),b=N==null?null:N-u;u=N,c&&c({action:l,location:P.location,delta:b})}function m(N,b){l=si.Push;let y=df(P.location,N,b);r&&r(y,N),u=f()+1;let x=Sy(y,u),D=P.createHref(y);try{s.pushState(x,"",D)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(D)}o&&c&&c({action:l,location:P.location,delta:1})}function T(N,b){l=si.Replace;let y=df(P.location,N,b);r&&r(y,N),u=f();let x=Sy(y,u),D=P.createHref(y);s.replaceState(x,"",D),o&&c&&c({action:l,location:P.location,delta:0})}function S(N){let b=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof N=="string"?N:zb(N);return y=y.replace(/ $/,"%20"),Er(b,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,b)}let P={get action(){return l},get location(){return t(i,s)},listen(N){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Ay,p),c=N,()=>{i.removeEventListener(Ay,p),c=null}},createHref(N){return e(i,N)},createURL:S,encodeLocation(N){let b=S(N);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:m,replace:T,go(N){return s.go(N)}};return P}var Cy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Cy||(Cy={}));function cC(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,n=t.charAt(r);return n&&n!=="/"?null:t.slice(r)||"/"}const uC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dC=t=>uC.test(t);function hC(t,e){e===void 0&&(e="/");let{pathname:r,search:n="",hash:i=""}=typeof t=="string"?ka(t):t,o;if(r)if(dC(r))o=r;else{if(r.includes("//")){let s=r;r=r.replace(/\/\/+/g,"/"),Ub(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+r))}r.startsWith("/")?o=ky(r.substring(1),"/"):o=ky(r,e)}else o=e;return{pathname:o,search:vC(n),hash:yC(i)}}function ky(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function zd(t,e,r,n){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fC(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function pC(t,e){let r=fC(t);return e?r.map((n,i)=>i===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function mC(t,e,r,n){n===void 0&&(n=!1);let i;typeof t=="string"?i=ka(t):(i=aa({},t),Er(!i.pathname||!i.pathname.includes("?"),zd("?","pathname","search",i)),Er(!i.pathname||!i.pathname.includes("#"),zd("#","pathname","hash",i)),Er(!i.search||!i.search.includes("#"),zd("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=r;else{let p=e.length-1;if(!n&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let c=hC(i,l),u=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const gC=t=>t.join("/").replace(/\/\/+/g,"/"),vC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,yC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,jb=["post","put","patch","delete"];new Set(jb);const _C=["get",...jb];new Set(_C);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dc(){return Dc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Dc.apply(this,arguments)}const Bb=Q.createContext(null),rm=Q.createContext(null),nm=Q.createContext(null),im=Q.createContext({outlet:null,matches:[],isDataRoute:!1});function om(){return Q.useContext(nm)!=null}function qb(){return om()||Er(!1),Q.useContext(nm).location}function Hb(t){Q.useContext(rm).static||Q.useLayoutEffect(t)}function wC(){let{isDataRoute:t}=Q.useContext(im);return t?xC():bC()}function bC(){om()||Er(!1);let t=Q.useContext(Bb),{basename:e,future:r,navigator:n}=Q.useContext(rm),{matches:i}=Q.useContext(im),{pathname:o}=qb(),s=JSON.stringify(pC(i,r.v7_relativeSplatPath)),l=Q.useRef(!1);return Hb(()=>{l.current=!0}),Q.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){n.go(u);return}let p=mC(u,JSON.parse(s),o,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:gC([e,p.pathname])),(f.replace?n.replace:n.push)(p,f.state,f)},[e,n,s,o,t])}var Wb=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Wb||{}),Kb=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Kb||{});function EC(t){let e=Q.useContext(Bb);return e||Er(!1),e}function IC(t){let e=Q.useContext(im);return e||Er(!1),e}function TC(t){let e=IC(),r=e.matches[e.matches.length-1];return r.route.id||Er(!1),r.route.id}function xC(){let{router:t}=EC(Wb.UseNavigateStable),e=TC(Kb.UseNavigateStable),r=Q.useRef(!1);return Hb(()=>{r.current=!0}),Q.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Dc({fromRouteId:e},o)))},[t,e])}function AC(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function SC(t){let{basename:e="/",children:r=null,location:n,navigationType:i=si.Pop,navigator:o,static:s=!1,future:l}=t;om()&&Er(!1);let c=e.replace(/^\/*/,"/"),u=Q.useMemo(()=>({basename:c,navigator:o,static:s,future:Dc({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof n=="string"&&(n=ka(n));let{pathname:f="/",search:p="",hash:m="",state:T=null,key:S="default"}=n,P=Q.useMemo(()=>{let N=cC(f,c);return N==null?null:{location:{pathname:N,search:p,hash:m,state:T,key:S},navigationType:i}},[c,f,p,m,T,S,i]);return P==null?null:Q.createElement(rm.Provider,{value:u},Q.createElement(nm.Provider,{children:r,value:P}))}new Promise(()=>{});/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hf(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,r)=>{let n=t[r];return e.concat(Array.isArray(n)?n.map(i=>[r,i]):[[r,n]])},[]))}function CC(t,e){let r=hf(t);return e&&e.forEach((n,i)=>{r.has(i)||e.getAll(i).forEach(o=>{r.append(i,o)})}),r}const kC="6";try{window.__reactRouterVersion=kC}catch{}const RC="startTransition",Ry=Gx[RC];function PC(t){let{basename:e,children:r,future:n,window:i}=t,o=Q.useRef();o.current==null&&(o.current=sC({window:i,v5Compat:!0}));let s=o.current,[l,c]=Q.useState({action:s.action,location:s.location}),{v7_startTransition:u}=n||{},f=Q.useCallback(p=>{u&&Ry?Ry(()=>c(p)):c(p)},[c,u]);return Q.useLayoutEffect(()=>s.listen(f),[s,f]),Q.useEffect(()=>AC(n),[n]),Q.createElement(SC,{basename:e,children:r,location:l.location,navigationType:l.action,navigator:s,future:n})}var Py;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Py||(Py={}));var Ny;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ny||(Ny={}));function NC(t){let e=Q.useRef(hf(t)),r=Q.useRef(!1),n=qb(),i=Q.useMemo(()=>CC(n.search,r.current?null:e.current),[n.search]),o=wC(),s=Q.useCallback((l,c)=>{const u=hf(typeof l=="function"?l(i):l);r.current=!0,o("?"+u,c)},[o,i]);return[i,s]}var Oy={};/**
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
 */const Gb=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},OC=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[r++];e[n++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[r++],s=t[r++],l=t[r++],c=((i&7)<<18|(o&63)<<12|(s&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const o=t[r++],s=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},Qb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,l=s?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,f=o>>2,p=(o&3)<<4|l>>4;let m=(l&15)<<2|u>>6,T=u&63;c||(T=64,s||(m=64)),n.push(r[f],r[p],r[m],r[T])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const o=r[t.charAt(i++)],l=i<t.length?r[t.charAt(i)]:0;++i;const u=i<t.length?r[t.charAt(i)]:64;++i;const p=i<t.length?r[t.charAt(i)]:64;if(++i,o==null||l==null||u==null||p==null)throw new DC;const m=o<<2|l>>4;if(n.push(m),u!==64){const T=l<<4&240|u>>2;if(n.push(T),p!==64){const S=u<<6&192|p;n.push(S)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class DC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const LC=function(t){const e=Gb(t);return Qb.encodeByteArray(e,!0)},Lc=function(t){return LC(t).replace(/\./g,"")},Yb=function(t){try{return Qb.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function VC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const MC=()=>VC().__FIREBASE_DEFAULTS__,$C=()=>{if(typeof process>"u"||typeof Oy>"u")return;const t=Oy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},FC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yb(t[1]);return e&&JSON.parse(e)},vu=()=>{try{return MC()||$C()||FC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xb=t=>{var e,r;return(r=(e=vu())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},UC=t=>{const e=Xb(t);if(!e)return;const r=e.lastIndexOf(":");if(r<=0||r+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(r+1),10);return e[0]==="["?[e.substring(1,r-1),n]:[e.substring(0,r),n]},Jb=()=>{var t;return(t=vu())===null||t===void 0?void 0:t.config},Zb=t=>{var e;return(e=vu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class zC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,n))}}}/**
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
 */function jC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},n=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Lc(JSON.stringify(r)),Lc(JSON.stringify(s)),""].join(".")}/**
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
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function BC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function qC(){var t;const e=(t=vu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function WC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function KC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GC(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function QC(){return!qC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function eE(){try{return typeof indexedDB=="object"}catch{return!1}}function tE(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(r){e(r)}})}function YC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const XC="FirebaseError";class kr extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=XC,Object.setPrototypeOf(this,kr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?JC(o,n):"Error",l=`${this.serviceName}: ${s} (${i}).`;return new kr(i,l,n)}}function JC(t,e){return t.replace(ZC,(r,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const ZC=/\{\$([^}]+)}/g;function e1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vc(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const i of r){if(!n.includes(i))return!1;const o=t[i],s=e[i];if(Dy(o)&&Dy(s)){if(!Vc(o,s))return!1}else if(o!==s)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function Dy(t){return t!==null&&typeof t=="object"}/**
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
 */function Ra(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function ws(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,o]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function bs(t){const e=t.indexOf("?");if(!e)return"";const r=t.indexOf("#",e);return t.substring(e,r>0?r:void 0)}function t1(t,e){const r=new r1(t,e);return r.subscribe.bind(r)}class r1{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,n){let i;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");n1(e,["next","error","complete"])?i=e:i={next:e,error:r,complete:n},i.next===void 0&&(i.next=jd),i.error===void 0&&(i.error=jd),i.complete===void 0&&(i.complete=jd);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function n1(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function jd(){}/**
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
 */function Pe(t){return t&&t._delegate?t._delegate:t}class fr{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ri="[DEFAULT]";/**
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
 */class i1{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const n=new zC;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(s1(e))try{this.getOrInitializeService({instanceIdentifier:ri})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);try{const o=this.getOrInitializeService({instanceIdentifier:i});n.resolve(o)}catch{}}}}clearInstance(e=ri){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ri){return this.instances.has(e)}getOptions(e=ri){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[o,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);n===l&&s.resolve(i)}return i}onInit(e,r){var n;const i=this.normalizeInstanceIdentifier(r),o=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,r){const n=this.onInitCallbacks.get(r);if(n)for(const i of n)try{i(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:o1(e),options:r}),this.instances.set(e,n),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=ri){return this.component?this.component.multipleInstances?e:ri:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function o1(t){return t===ri?void 0:t}function s1(t){return t.instantiationMode==="EAGER"}/**
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
 */class a1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new i1(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const l1={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},c1=le.INFO,u1={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},d1=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=u1[e];if(i)console[i](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sm{constructor(e){this.name=e,this._logLevel=c1,this._logHandler=d1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?l1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const h1=(t,e)=>e.some(r=>t instanceof r);let Ly,Vy;function f1(){return Ly||(Ly=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function p1(){return Vy||(Vy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rE=new WeakMap,ff=new WeakMap,nE=new WeakMap,Bd=new WeakMap,am=new WeakMap;function m1(t){const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{r(Hr(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(r=>{r instanceof IDBCursor&&rE.set(r,t)}).catch(()=>{}),am.set(e,t),e}function g1(t){if(ff.has(t))return;const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{r(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});ff.set(t,e)}let pf={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return ff.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nE.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Hr(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function v1(t){pf=t(pf)}function y1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(qd(this),e,...r);return nE.set(n,e.sort?e.sort():[e]),Hr(n)}:p1().includes(t)?function(...e){return t.apply(qd(this),e),Hr(rE.get(this))}:function(...e){return Hr(t.apply(qd(this),e))}}function _1(t){return typeof t=="function"?y1(t):(t instanceof IDBTransaction&&g1(t),h1(t,f1())?new Proxy(t,pf):t)}function Hr(t){if(t instanceof IDBRequest)return m1(t);if(Bd.has(t))return Bd.get(t);const e=_1(t);return e!==t&&(Bd.set(t,e),am.set(e,t)),e}const qd=t=>am.get(t);function yu(t,e,{blocked:r,upgrade:n,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),l=Hr(s);return n&&s.addEventListener("upgradeneeded",c=>{n(Hr(s.result),c.oldVersion,c.newVersion,Hr(s.transaction),c)}),r&&s.addEventListener("blocked",c=>r(c.oldVersion,c.newVersion,c)),l.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}function Hd(t,{blocked:e}={}){const r=indexedDB.deleteDatabase(t);return e&&r.addEventListener("blocked",n=>e(n.oldVersion,n)),Hr(r).then(()=>{})}const w1=["get","getKey","getAll","getAllKeys","count"],b1=["put","add","delete","clear"],Wd=new Map;function My(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wd.get(e))return Wd.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,i=b1.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||w1.includes(r)))return;const o=async function(s,...l){const c=this.transaction(s,i?"readwrite":"readonly");let u=c.store;return n&&(u=u.index(l.shift())),(await Promise.all([u[r](...l),i&&c.done]))[0]};return Wd.set(e,o),o}v1(t=>({...t,get:(e,r,n)=>My(e,r)||t.get(e,r,n),has:(e,r)=>!!My(e,r)||t.has(e,r)}));/**
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
 */class E1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(I1(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function I1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mf="@firebase/app",$y="0.10.13";/**
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
 */const Xr=new sm("@firebase/app"),T1="@firebase/app-compat",x1="@firebase/analytics-compat",A1="@firebase/analytics",S1="@firebase/app-check-compat",C1="@firebase/app-check",k1="@firebase/auth",R1="@firebase/auth-compat",P1="@firebase/database",N1="@firebase/data-connect",O1="@firebase/database-compat",D1="@firebase/functions",L1="@firebase/functions-compat",V1="@firebase/installations",M1="@firebase/installations-compat",$1="@firebase/messaging",F1="@firebase/messaging-compat",U1="@firebase/performance",z1="@firebase/performance-compat",j1="@firebase/remote-config",B1="@firebase/remote-config-compat",q1="@firebase/storage",H1="@firebase/storage-compat",W1="@firebase/firestore",K1="@firebase/vertexai-preview",G1="@firebase/firestore-compat",Q1="firebase",Y1="10.14.1";/**
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
 */const gf="[DEFAULT]",X1={[mf]:"fire-core",[T1]:"fire-core-compat",[A1]:"fire-analytics",[x1]:"fire-analytics-compat",[C1]:"fire-app-check",[S1]:"fire-app-check-compat",[k1]:"fire-auth",[R1]:"fire-auth-compat",[P1]:"fire-rtdb",[N1]:"fire-data-connect",[O1]:"fire-rtdb-compat",[D1]:"fire-fn",[L1]:"fire-fn-compat",[V1]:"fire-iid",[M1]:"fire-iid-compat",[$1]:"fire-fcm",[F1]:"fire-fcm-compat",[U1]:"fire-perf",[z1]:"fire-perf-compat",[j1]:"fire-rc",[B1]:"fire-rc-compat",[q1]:"fire-gcs",[H1]:"fire-gcs-compat",[W1]:"fire-fst",[G1]:"fire-fst-compat",[K1]:"fire-vertex","fire-js":"fire-js",[Q1]:"fire-js-all"};/**
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
 */const Mc=new Map,J1=new Map,vf=new Map;function Fy(t,e){try{t.container.addComponent(e)}catch(r){Xr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function Sr(t){const e=t.name;if(vf.has(e))return Xr.debug(`There were multiple attempts to register component ${e}.`),!1;vf.set(e,t);for(const r of Mc.values())Fy(r,t);for(const r of J1.values())Fy(r,t);return!0}function Lo(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}function lr(t){return t.settings!==void 0}/**
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
 */const Z1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pn=new Ni("app","Firebase",Z1);/**
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
 */class ek{constructor(e,r,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
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
 */const Vo=Y1;function iE(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const n=Object.assign({name:gf,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Pn.create("bad-app-name",{appName:String(i)});if(r||(r=Jb()),!r)throw Pn.create("no-options");const o=Mc.get(i);if(o){if(Vc(r,o.options)&&Vc(n,o.config))return o;throw Pn.create("duplicate-app",{appName:i})}const s=new a1(i);for(const c of vf.values())s.addComponent(c);const l=new ek(r,n,s);return Mc.set(i,l),l}function lm(t=gf){const e=Mc.get(t);if(!e&&t===gf&&Jb())return iE();if(!e)throw Pn.create("no-app",{appName:t});return e}function Wt(t,e,r){var n;let i=(n=X1[t])!==null&&n!==void 0?n:t;r&&(i+=`-${r}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&l.push("and"),s&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xr.warn(l.join(" "));return}Sr(new fr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const tk="firebase-heartbeat-database",rk=1,la="firebase-heartbeat-store";let Kd=null;function oE(){return Kd||(Kd=yu(tk,rk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(la)}catch(r){console.warn(r)}}}}).catch(t=>{throw Pn.create("idb-open",{originalErrorMessage:t.message})})),Kd}async function nk(t){try{const r=(await oE()).transaction(la),n=await r.objectStore(la).get(sE(t));return await r.done,n}catch(e){if(e instanceof kr)Xr.warn(e.message);else{const r=Pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xr.warn(r.message)}}}async function Uy(t,e){try{const n=(await oE()).transaction(la,"readwrite");await n.objectStore(la).put(e,sE(t)),await n.done}catch(r){if(r instanceof kr)Xr.warn(r.message);else{const n=Pn.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});Xr.warn(n.message)}}}function sE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ik=1024,ok=30*24*60*60*1e3;class sk{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new lk(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,r;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=zy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const l=new Date(s.date).valueOf();return Date.now()-l<=ok}),this._storage.overwrite(this._heartbeatsCache))}catch(n){Xr.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=zy(),{heartbeatsToSend:n,unsentEntries:i}=ak(this._heartbeatsCache.heartbeats),o=Lc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=r,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(r){return Xr.warn(r),""}}}function zy(){return new Date().toISOString().substring(0,10)}function ak(t,e=ik){const r=[];let n=t.slice();for(const i of t){const o=r.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),jy(r)>e){o.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),jy(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class lk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eE()?tE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await nk(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uy(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uy(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jy(t){return Lc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ck(t){Sr(new fr("platform-logger",e=>new E1(e),"PRIVATE")),Sr(new fr("heartbeat",e=>new sk(e),"PRIVATE")),Wt(mf,$y,t),Wt(mf,$y,"esm2017"),Wt("fire-js","")}ck("");function cm(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}function R(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o}function aE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uk=aE,lE=new Ni("auth","Firebase",aE());/**
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
 */const $c=new sm("@firebase/auth");function dk(t,...e){$c.logLevel<=le.WARN&&$c.warn(`Auth (${Vo}): ${t}`,...e)}function Zl(t,...e){$c.logLevel<=le.ERROR&&$c.error(`Auth (${Vo}): ${t}`,...e)}/**
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
 */function Yt(t,...e){throw dm(t,...e)}function dr(t,...e){return dm(t,...e)}function um(t,e,r){const n=Object.assign(Object.assign({},uk()),{[e]:r});return new Ni("auth","Firebase",n).create(e,{appName:t.name})}function Wr(t){return um(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hk(t,e,r){const n=r;if(!(e instanceof n))throw n.name!==e.constructor.name&&Yt(t,"argument-error"),um(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function dm(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return lE.create(t,...e)}function J(t,e,...r){if(!t)throw dm(e,...r)}function zr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zl(e),new Error(e)}function Jr(t,e){t||zr(e)}/**
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
 */function yf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fk(){return By()==="http:"||By()==="https:"}function By(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function pk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fk()||WC()||"connection"in navigator)?navigator.onLine:!0}function mk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Pa{constructor(e,r){this.shortDelay=e,this.longDelay=r,Jr(r>e,"Short delay should be less than long delay!"),this.isMobile=BC()||KC()}get(){return pk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function hm(t,e){Jr(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
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
 */class cE{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vk=new Pa(3e4,6e4);function jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bn(t,e,r,n,i={}){return uE(t,i,async()=>{let o={},s={};n&&(e==="GET"?s=n:o={body:JSON.stringify(n)});const l=Ra(Object.assign({key:t.config.apiKey},s)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},o);return HC()||(u.referrerPolicy="no-referrer"),cE.fetch()(dE(t,t.config.apiHost,r,l),u)})}async function uE(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},gk),e);try{const i=new _k(t),o=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw xl(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const l=o.ok?s.errorMessage:s.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw xl(t,"credential-already-in-use",s);if(c==="EMAIL_EXISTS")throw xl(t,"email-already-in-use",s);if(c==="USER_DISABLED")throw xl(t,"user-disabled",s);const f=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw um(t,f,u);Yt(t,f)}}catch(i){if(i instanceof kr)throw i;Yt(t,"network-request-failed",{message:String(i)})}}async function Na(t,e,r,n,i={}){const o=await Bn(t,e,r,n,i);return"mfaPendingCredential"in o&&Yt(t,"multi-factor-auth-required",{_serverResponse:o}),o}function dE(t,e,r,n){const i=`${e}${r}?${n}`;return t.config.emulator?hm(t.config,i):`${t.config.apiScheme}://${i}`}function yk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _k{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(dr(this.auth,"network-request-failed")),vk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xl(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=dr(t,e,n);return i.customData._tokenResponse=r,i}function qy(t){return t!==void 0&&t.enterprise!==void 0}class wk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===e)return yk(r.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function bk(t,e){return Bn(t,"GET","/v2/recaptchaConfig",jn(t,e))}/**
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
 */async function Ek(t,e){return Bn(t,"POST","/v1/accounts:delete",e)}async function hE(t,e){return Bn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ls(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ik(t,e=!1){const r=Pe(t),n=await r.getIdToken(e),i=fm(n);J(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:n,authTime:Ls(Gd(i.auth_time)),issuedAtTime:Ls(Gd(i.iat)),expirationTime:Ls(Gd(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Gd(t){return Number(t)*1e3}function fm(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return Zl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yb(r);return i?JSON.parse(i):(Zl("Failed to decode base64 JWT payload"),null)}catch(i){return Zl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Hy(t){const e=fm(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ca(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof kr&&Tk(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function Tk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class xk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _f{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ls(this.lastLoginAt),this.creationTime=Ls(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fc(t){var e;const r=t.auth,n=await t.getIdToken(),i=await ca(t,hE(r,{idToken:n}));J(i==null?void 0:i.users.length,r,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?fE(o.providerUserInfo):[],l=Sk(t.providerData,s),c=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new _f(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function Ak(t){const e=Pe(t);await Fc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sk(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function fE(t){return t.map(e=>{var{providerId:r}=e,n=cm(e,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function Ck(t,e){const r=await uE(t,{},async()=>{const n=Ra({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=dE(t,i,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",cE.fetch()(s,{method:"POST",headers:l,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function kk(t,e){return Bn(t,"POST","/v2/accounts:revokeToken",jn(t,e))}/**
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
 */class ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}updateFromIdToken(e){J(e.length!==0,"internal-error");const r=Hy(e);this.updateTokensAndExpiration(e,null,r)}async getToken(e,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:i,expiresIn:o}=await Ck(e,r);this.updateTokensAndExpiration(n,i,Number(o))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:i,expirationTime:o}=r,s=new ho;return n&&(J(typeof n=="string","internal-error",{appName:e}),s.refreshToken=n),i&&(J(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(J(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ho,this.toJSON())}_performRefresh(){return zr("not implemented")}}/**
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
 */function un(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jr{constructor(e){var{uid:r,auth:n,stsTokenManager:i}=e,o=cm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new _f(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const r=await ca(this,this.stsTokenManager.getToken(this.auth,e));return J(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return Ik(this,e)}reload(){return Ak(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new jr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await Fc(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(lr(this.auth.app))return Promise.reject(Wr(this.auth));const e=await this.getIdToken();return await ca(this,Ek(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var n,i,o,s,l,c,u,f;const p=(n=r.displayName)!==null&&n!==void 0?n:void 0,m=(i=r.email)!==null&&i!==void 0?i:void 0,T=(o=r.phoneNumber)!==null&&o!==void 0?o:void 0,S=(s=r.photoURL)!==null&&s!==void 0?s:void 0,P=(l=r.tenantId)!==null&&l!==void 0?l:void 0,N=(c=r._redirectEventId)!==null&&c!==void 0?c:void 0,b=(u=r.createdAt)!==null&&u!==void 0?u:void 0,y=(f=r.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:x,emailVerified:D,isAnonymous:F,providerData:z,stsTokenManager:_}=r;J(x&&_,e,"internal-error");const v=ho.fromJSON(this.name,_);J(typeof x=="string",e,"internal-error"),un(p,e.name),un(m,e.name),J(typeof D=="boolean",e,"internal-error"),J(typeof F=="boolean",e,"internal-error"),un(T,e.name),un(S,e.name),un(P,e.name),un(N,e.name),un(b,e.name),un(y,e.name);const w=new jr({uid:x,auth:e,email:m,emailVerified:D,displayName:p,isAnonymous:F,photoURL:S,phoneNumber:T,tenantId:P,stsTokenManager:v,createdAt:b,lastLoginAt:y});return z&&Array.isArray(z)&&(w.providerData=z.map(E=>Object.assign({},E))),N&&(w._redirectEventId=N),w}static async _fromIdTokenResponse(e,r,n=!1){const i=new ho;i.updateFromServerResponse(r);const o=new jr({uid:r.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Fc(o),o}static async _fromGetAccountInfoResponse(e,r,n){const i=r.users[0];J(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?fE(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new ho;l.updateFromIdToken(n);const c=new jr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new _f(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(c,u),c}}/**
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
 */const Wy=new Map;function Br(t){Jr(t instanceof Function,"Expected a class definition");let e=Wy.get(t);return e?(Jr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wy.set(t,e),e)}/**
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
 */class pE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}pE.type="NONE";const Ky=pE;/**
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
 */function ec(t,e,r){return`firebase:${t}:${e}:${r}`}class fo{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:i,name:o}=this.auth;this.fullUserKey=ec(this.userKey,i.apiKey,o),this.fullPersistenceKey=ec("persistence",i.apiKey,o),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new fo(Br(Ky),e,n);const i=(await Promise.all(r.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Br(Ky);const s=ec(n,e.config.apiKey,e.name);let l=null;for(const u of r)try{const f=await u._get(s);if(f){const p=jr._fromJSON(e,f);u!==o&&(l=p),o=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new fo(o,e,n):(o=c[0],l&&await o._set(s,l.toJSON()),await Promise.all(r.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new fo(o,e,n))}}/**
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
 */function Gy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wE(e))return"Blackberry";if(bE(e))return"Webos";if(gE(e))return"Safari";if((e.includes("chrome/")||vE(e))&&!e.includes("edge/"))return"Chrome";if(_E(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function mE(t=gt()){return/firefox\//i.test(t)}function gE(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vE(t=gt()){return/crios\//i.test(t)}function yE(t=gt()){return/iemobile/i.test(t)}function _E(t=gt()){return/android/i.test(t)}function wE(t=gt()){return/blackberry/i.test(t)}function bE(t=gt()){return/webos/i.test(t)}function pm(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Rk(t=gt()){var e;return pm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Pk(){return GC()&&document.documentMode===10}function EE(t=gt()){return pm(t)||_E(t)||bE(t)||wE(t)||/windows phone/i.test(t)||yE(t)}/**
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
 */function IE(t,e=[]){let r;switch(t){case"Browser":r=Gy(gt());break;case"Worker":r=`${Gy(gt())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${Vo}/${n}`}/**
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
 */class Nk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const n=o=>new Promise((s,l)=>{try{const c=e(o);s(c)}catch(c){l(c)}});n.onAbort=r,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const n of this.queue)await n(e),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function Ok(t,e={}){return Bn(t,"GET","/v2/passwordPolicy",jn(t,e))}/**
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
 */const Dk=6;class Lk{constructor(e){var r,n,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=s.minPasswordLength)!==null&&r!==void 0?r:Dk,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,n,i,o,s,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(r=c.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(n=c.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsUppercaseLetter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(s=c.containsNumericCharacter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,r){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(r.meetsMinPasswordLength=e.length>=n),i&&(r.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(r,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,r,n,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class Vk{constructor(e,r,n,i){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qy(this),this.idTokenSubscription=new Qy(this),this.beforeStateQueue=new Nk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=Br(r)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await fo.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const r=await hE(this,{idToken:e}),n=await jr._fromGetAccountInfoResponse(this,r,e);await this.directlySetCurrentUser(n)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(lr(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!s||s===l)&&(c!=null&&c.user)&&(i=c.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await Fc(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(lr(this.app))return Promise.reject(Wr(this));const r=e?Pe(e):null;return r&&J(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return lr(this.app)?Promise.reject(Wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return lr(this.app)?Promise.reject(Wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Br(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ok(this),r=new Lk(e);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ni("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},r)}})}async revokeAccessToken(e){if(this.currentUser){const r=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:r};this.tenantId!=null&&(n.tenantId=this.tenantId),await kk(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&Br(e)||this._popupRedirectResolver;J(r,this,"argument-error"),this.redirectPersistenceManager=await fo.create(this,[Br(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,i){if(this._deleted)return()=>{};const o=typeof r=="function"?r:r.next.bind(r);let s=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{s||o(this.currentUser)}),typeof r=="function"){const c=e.addObserver(r,n,i);return()=>{s=!0,c()}}else{const c=e.addObserver(r);return()=>{s=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=IE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(r["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(r["X-Firebase-AppCheck"]=i),r}async _getAppCheckToken(){var e;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r!=null&&r.error&&dk(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function qn(t){return Pe(t)}class Qy{constructor(e){this.auth=e,this.observer=null,this.addObserver=t1(r=>this.observer=r)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let _u={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Mk(t){_u=t}function TE(t){return _u.loadJS(t)}function $k(){return _u.recaptchaEnterpriseScript}function Fk(){return _u.gapiScript}function Uk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const zk="recaptcha-enterprise",jk="NO_RECAPTCHA";class Bk{constructor(e){this.type=zk,this.auth=qn(e)}async verify(e="verify",r=!1){async function n(o){if(!r){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,l)=>{bk(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new wk(c);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(c=>{l(c)})})}function i(o,s,l){const c=window.grecaptcha;qy(c)?c.enterprise.ready(()=>{c.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(jk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{n(this.auth).then(l=>{if(!r&&qy(window.grecaptcha))i(l,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let c=$k();c.length!==0&&(c+=l),TE(c).then(()=>{i(l,o,s)}).catch(u=>{s(u)})}}).catch(l=>{s(l)})})}}async function Yy(t,e,r,n=!1){const i=new Bk(t);let o;try{o=await i.verify(r)}catch{o=await i.verify(r,!0)}const s=Object.assign({},e);return n?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function wf(t,e,r,n){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Yy(t,e,r,r==="getOobCode");return n(t,o)}else return n(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Yy(t,e,r,r==="getOobCode");return n(t,s)}else return Promise.reject(o)})}/**
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
 */function qk(t,e){const r=Lo(t,"auth");if(r.isInitialized()){const i=r.getImmediate(),o=r.getOptions();if(Vc(o,e??{}))return i;Yt(i,"already-initialized")}return r.initialize({options:e})}function Hk(t,e){const r=(e==null?void 0:e.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Br);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Wk(t,e,r){const n=qn(t);J(n._canInitEmulator,n,"emulator-config-failed"),J(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,o=xE(e),{host:s,port:l}=Kk(e),c=l===null?"":`:${l}`;n.config.emulator={url:`${o}//${s}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),Gk()}function xE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Kk(t){const e=xE(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const o=i[1];return{host:o,port:Xy(n.substr(o.length+1))}}else{const[o,s]=n.split(":");return{host:o,port:Xy(s)}}}function Xy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Gk(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class mm{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return zr("not implemented")}_getIdTokenResponse(e){return zr("not implemented")}_linkToIdToken(e,r){return zr("not implemented")}_getReauthenticationResolver(e){return zr("not implemented")}}async function Qk(t,e){return Bn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Yk(t,e){return Na(t,"POST","/v1/accounts:signInWithPassword",jn(t,e))}/**
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
 */async function Xk(t,e){return Na(t,"POST","/v1/accounts:signInWithEmailLink",jn(t,e))}async function Jk(t,e){return Na(t,"POST","/v1/accounts:signInWithEmailLink",jn(t,e))}/**
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
 */class ua extends mm{constructor(e,r,n,i=null){super("password",n),this._email=e,this._password=r,this._tenantId=i}static _fromEmailAndPassword(e,r){return new ua(e,r,"password")}static _fromEmailAndCode(e,r,n=null){return new ua(e,r,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wf(e,r,"signInWithPassword",Yk);case"emailLink":return Xk(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,r){switch(this.signInMethod){case"password":const n={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wf(e,n,"signUpPassword",Qk);case"emailLink":return Jk(e,{idToken:r,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function po(t,e){return Na(t,"POST","/v1/accounts:signInWithIdp",jn(t,e))}/**
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
 */const Zk="http://localhost";class Zr extends mm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new Zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):Yt("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=r,o=cm(r,["providerId","signInMethod"]);if(!n||!i)return null;const s=new Zr(n,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const r=this.buildRequest();return po(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,po(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,po(e,r)}buildRequest(){const e={requestUri:Zk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=Ra(r)}return e}}/**
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
 */function eR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tR(t){const e=ws(bs(t)).link,r=e?ws(bs(e)).deep_link_id:null,n=ws(bs(t)).deep_link_id;return(n?ws(bs(n)).link:null)||n||r||e||t}class gm{constructor(e){var r,n,i,o,s,l;const c=ws(bs(e)),u=(r=c.apiKey)!==null&&r!==void 0?r:null,f=(n=c.oobCode)!==null&&n!==void 0?n:null,p=eR((i=c.mode)!==null&&i!==void 0?i:null);J(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(o=c.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=c.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const r=tR(e);try{return new gm(r)}catch{return null}}}/**
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
 */class Mo{constructor(){this.providerId=Mo.PROVIDER_ID}static credential(e,r){return ua._fromEmailAndPassword(e,r)}static credentialWithLink(e,r){const n=gm.parseLink(r);return J(n,"argument-error"),ua._fromEmailAndCode(e,n.code,n.tenantId)}}Mo.PROVIDER_ID="password";Mo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class vm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $o extends vm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Vs extends $o{static credentialFromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;return J("providerId"in r&&"signInMethod"in r,"argument-error"),Zr._fromParams(r)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return J(e.idToken||e.accessToken,"argument-error"),Zr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Vs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Vs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:o,nonce:s,providerId:l}=e;if(!n&&!i&&!r&&!o||!l)return null;try{return new Vs(l)._credential({idToken:r,accessToken:n,nonce:s,pendingToken:o})}catch{return null}}}/**
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
 */class gn extends $o{constructor(){super("facebook.com")}static credential(e){return Zr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
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
 */class $r extends $o{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return Zr._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n}=e;if(!r&&!n)return null;try{return $r.credential(r,n)}catch{return null}}}$r.GOOGLE_SIGN_IN_METHOD="google.com";$r.PROVIDER_ID="google.com";/**
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
 */class vn extends $o{constructor(){super("github.com")}static credential(e){return Zr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.GITHUB_SIGN_IN_METHOD="github.com";vn.PROVIDER_ID="github.com";/**
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
 */class yn extends $o{constructor(){super("twitter.com")}static credential(e,r){return Zr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=e;if(!r||!n)return null;try{return yn.credential(r,n)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
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
 */async function rR(t,e){return Na(t,"POST","/v1/accounts:signUp",jn(t,e))}/**
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
 */class Ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,i=!1){const o=await jr._fromIdTokenResponse(e,n,i),s=Jy(n);return new Ei({user:o,providerId:s,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const i=Jy(n);return new Ei({user:e,providerId:i,_tokenResponse:n,operationType:r})}}function Jy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Uc extends kr{constructor(e,r,n,i){var o;super(r.code,r.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Uc.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,r,n,i){return new Uc(e,r,n,i)}}function AE(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Uc._fromErrorAndOperation(t,o,e,n):o})}async function nR(t,e,r=!1){const n=await ca(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return Ei._forOperation(t,"link",n)}/**
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
 */async function iR(t,e,r=!1){const{auth:n}=t;if(lr(n.app))return Promise.reject(Wr(n));const i="reauthenticate";try{const o=await ca(t,AE(n,i,e,t),r);J(o.idToken,n,"internal-error");const s=fm(o.idToken);J(s,n,"internal-error");const{sub:l}=s;return J(t.uid===l,n,"user-mismatch"),Ei._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Yt(n,"user-mismatch"),o}}/**
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
 */async function SE(t,e,r=!1){if(lr(t.app))return Promise.reject(Wr(t));const n="signIn",i=await AE(t,n,e),o=await Ei._fromIdTokenResponse(t,n,i);return r||await t._updateCurrentUser(o.user),o}async function oR(t,e){return SE(qn(t),e)}/**
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
 */async function CE(t){const e=qn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function sR(t,e,r){if(lr(t.app))return Promise.reject(Wr(t));const n=qn(t),s=await wf(n,{returnSecureToken:!0,email:e,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rR).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&CE(t),c}),l=await Ei._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(l.user),l}function aR(t,e,r){return lr(t.app)?Promise.reject(Wr(t)):oR(Pe(t),Mo.credential(e,r)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&CE(t),n})}function lR(t,e,r,n){return Pe(t).onIdTokenChanged(e,r,n)}function cR(t,e,r){return Pe(t).beforeAuthStateChanged(e,r)}function uR(t,e,r,n){return Pe(t).onAuthStateChanged(e,r,n)}function dR(t){return Pe(t).signOut()}const zc="__sak";/**
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
 */class kE{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(zc,"1"),this.storage.removeItem(zc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const hR=1e3,fR=10;class RE extends kE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=EE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&e(r,i,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((s,l,c)=>{this.notifyListeners(s,c)});return}const n=e.key;r?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(n);!r&&this.localCache[n]===s||this.notifyListeners(n,s)},o=this.storage.getItem(n);Pk()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,fR):i()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},hR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}RE.type="LOCAL";const pR=RE;/**
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
 */class PE extends kE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}PE.type="SESSION";const NE=PE;/**
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
 */function mR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class wu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(i=>i.isListeningto(e));if(r)return r;const n=new wu(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:i,data:o}=r.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const l=Array.from(s).map(async u=>u(r.origin,o)),c=await mR(l);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wu.receivers=[];/**
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
 */function ym(t="",e=10){let r="";for(let n=0;n<e;n++)r+=Math.floor(Math.random()*10);return t+r}/**
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
 */class gR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((l,c)=>{const u=ym("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(m.data.response);break;default:clearTimeout(f),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:r},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Ir(){return window}function vR(t){Ir().location.href=t}/**
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
 */function OE(){return typeof Ir().WorkerGlobalScope<"u"&&typeof Ir().importScripts=="function"}async function yR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _R(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wR(){return OE()?self:null}/**
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
 */const DE="firebaseLocalStorageDb",bR=1,jc="firebaseLocalStorage",LE="fbase_key";class Oa{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function bu(t,e){return t.transaction([jc],e?"readwrite":"readonly").objectStore(jc)}function ER(){const t=indexedDB.deleteDatabase(DE);return new Oa(t).toPromise()}function bf(){const t=indexedDB.open(DE,bR);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(jc,{keyPath:LE})}catch(i){r(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(jc)?e(n):(n.close(),await ER(),e(await bf()))})})}async function Zy(t,e,r){const n=bu(t,!0).put({[LE]:e,value:r});return new Oa(n).toPromise()}async function IR(t,e){const r=bu(t,!1).get(e),n=await new Oa(r).toPromise();return n===void 0?null:n.value}function e_(t,e){const r=bu(t,!0).delete(e);return new Oa(r).toPromise()}const TR=800,xR=3;class VE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bf(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>xR)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return OE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wu._getInstance(wR()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await yR(),!this.activeServiceWorker)return;this.sender=new gR(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((r=n[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_R()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bf();return await Zy(e,zc,"1"),await e_(e,zc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zy(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>IR(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>e_(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=bu(i,!1).getAll();return new Oa(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}VE.type="LOCAL";const AR=VE;new Pa(3e4,6e4);/**
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
 */function ME(t,e){return e?Br(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class _m extends mm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return po(e,this._buildIdpRequest())}_linkToIdToken(e,r){return po(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return po(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function SR(t){return SE(t.auth,new _m(t),t.bypassAuthState)}function CR(t){const{auth:e,user:r}=t;return J(r,e,"internal-error"),iR(r,new _m(t),t.bypassAuthState)}async function kR(t){const{auth:e,user:r}=t;return J(r,e,"internal-error"),nR(r,new _m(t),t.bypassAuthState)}/**
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
 */class $E{constructor(e,r,n,i,o=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:i,tenantId:o,error:s,type:l}=e;if(s){this.reject(s);return}const c={auth:this.auth,requestUri:r,sessionId:n,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SR;case"linkViaPopup":case"linkViaRedirect":return kR;case"reauthViaPopup":case"reauthViaRedirect":return CR;default:Yt(this.auth,"internal-error")}}resolve(e){Jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const RR=new Pa(2e3,1e4);async function PR(t,e,r){if(lr(t.app))return Promise.reject(dr(t,"operation-not-supported-in-this-environment"));const n=qn(t);hk(t,e,vm);const i=ME(n,r);return new ai(n,"signInViaPopup",e,i).executeNotNull()}class ai extends $E{constructor(e,r,n,i,o){super(e,r,i,o),this.provider=n,this.authWindow=null,this.pollId=null,ai.currentPopupAction&&ai.currentPopupAction.cancel(),ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Jr(this.filter.length===1,"Popup operations only handle one event");const e=ym();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(dr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RR.get())};e()}}ai.currentPopupAction=null;/**
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
 */const NR="pendingRedirect",tc=new Map;class OR extends $E{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let e=tc.get(this.auth._key());if(!e){try{const n=await DR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}tc.set(this.auth._key(),e)}return this.bypassAuthState||tc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DR(t,e){const r=MR(e),n=VR(t);if(!await n._isAvailable())return!1;const i=await n._get(r)==="true";return await n._remove(r),i}function LR(t,e){tc.set(t._key(),e)}function VR(t){return Br(t._redirectPersistence)}function MR(t){return ec(NR,t.config.apiKey,t.name)}async function $R(t,e,r=!1){if(lr(t.app))return Promise.reject(Wr(t));const n=qn(t),i=ME(n,e),s=await new OR(n,i,r).execute();return s&&!r&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,e)),s}/**
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
 */const FR=10*60*1e3;class UR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zR(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var n;if(e.error&&!FE(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(dr(this.auth,i))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FR&&this.cachedEventUids.clear(),this.cachedEventUids.has(t_(e))}saveEventToCache(e){this.cachedEventUids.add(t_(e)),this.lastProcessedEventTime=Date.now()}}function t_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function FE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return FE(t);default:return!1}}/**
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
 */async function jR(t,e={}){return Bn(t,"GET","/v1/projects",e)}/**
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
 */const BR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qR=/^https?/;async function HR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jR(t);for(const r of e)try{if(WR(r))return}catch{}Yt(t,"unauthorized-domain")}function WR(t){const e=yf(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&s.hostname===n}if(!qR.test(r))return!1;if(BR.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const KR=new Pa(3e4,6e4);function r_(){const t=Ir().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function GR(t){return new Promise((e,r)=>{var n,i,o;function s(){r_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{r_(),r(dr(t,"network-request-failed"))},timeout:KR.get()})}if(!((i=(n=Ir().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Ir().gapi)===null||o===void 0)&&o.load)s();else{const l=Uk("iframefcb");return Ir()[l]=()=>{gapi.load?s():r(dr(t,"network-request-failed"))},TE(`${Fk()}?onload=${l}`).catch(c=>r(c))}}).catch(e=>{throw rc=null,e})}let rc=null;function QR(t){return rc=rc||GR(t),rc}/**
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
 */const YR=new Pa(5e3,15e3),XR="__/auth/iframe",JR="emulator/auth/iframe",ZR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tP(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?hm(e,JR):`https://${t.config.authDomain}/${XR}`,n={apiKey:e.apiKey,appName:t.name,v:Vo},i=eP.get(t.config.apiHost);i&&(n.eid=i);const o=t._getFrameworks();return o.length&&(n.fw=o.join(",")),`${r}?${Ra(n).slice(1)}`}async function rP(t){const e=await QR(t),r=Ir().gapi;return J(r,t,"internal-error"),e.open({where:document.body,url:tP(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZR,dontclear:!0},n=>new Promise(async(i,o)=>{await n.restyle({setHideOnLeave:!1});const s=dr(t,"network-request-failed"),l=Ir().setTimeout(()=>{o(s)},YR.get());function c(){Ir().clearTimeout(l),i(n)}n.ping(c).then(c,()=>{o(s)})}))}/**
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
 */const nP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iP=500,oP=600,sP="_blank",aP="http://localhost";class n_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lP(t,e,r,n=iP,i=oP){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const c=Object.assign(Object.assign({},nP),{width:n.toString(),height:i.toString(),top:o,left:s}),u=gt().toLowerCase();r&&(l=vE(u)?sP:r),mE(u)&&(e=e||aP,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[T,S])=>`${m}${T}=${S},`,"");if(Rk(u)&&l!=="_self")return cP(e||"",l),new n_(null);const p=window.open(e||"",l,f);J(p,t,"popup-blocked");try{p.focus()}catch{}return new n_(p)}function cP(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const uP="__/auth/handler",dP="emulator/auth/handler",hP=encodeURIComponent("fac");async function i_(t,e,r,n,i,o){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:Vo,eventId:i};if(e instanceof vm){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",e1(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))s[f]=p}if(e instanceof $o){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(s.scopes=f.join(","))}t.tenantId&&(s.tid=t.tenantId);const l=s;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${hP}=${encodeURIComponent(c)}`:"";return`${fP(t)}?${Ra(l).slice(1)}${u}`}function fP({config:t}){return t.emulator?hm(t,dP):`https://${t.authDomain}/${uP}`}/**
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
 */const Qd="webStorageSupport";class pP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=NE,this._completeRedirectFn=$R,this._overrideRedirectResult=LR}async _openPopup(e,r,n,i){var o;Jr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await i_(e,r,n,yf(),i);return lP(e,s,ym())}async _openRedirect(e,r,n,i){await this._originValidation(e);const o=await i_(e,r,n,yf(),i);return vR(o),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:i,promise:o}=this.eventManagers[r];return i?Promise.resolve(i):(Jr(o,"If manager is not set, promise should be"),o)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(e){const r=await rP(e),n=new UR(e);return r.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(Qd,{type:Qd},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Qd];s!==void 0&&r(!!s),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=HR(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return EE()||gE()||pm()}}const mP=pP;var o_="@firebase/auth",s_="1.7.9";/**
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
 */class gP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yP(t){Sr(new fr("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:l}=n.options;J(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:s,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:IE(t)},u=new Vk(n,i,o,c);return Hk(u,r),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),Sr(new fr("auth-internal",e=>{const r=qn(e.getProvider("auth").getImmediate());return(n=>new gP(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(o_,s_,vP(t)),Wt(o_,s_,"esm2017")}/**
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
 */const _P=5*60,wP=Zb("authIdTokenMaxAge")||_P;let a_=null;const bP=t=>async e=>{const r=e&&await e.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>wP)return;const i=r==null?void 0:r.token;a_!==i&&(a_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function EP(t=lm()){const e=Lo(t,"auth");if(e.isInitialized())return e.getImmediate();const r=qk(t,{popupRedirectResolver:mP,persistence:[AR,pR,NE]}),n=Zb("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(n,location.origin);if(location.origin===o.origin){const s=bP(o.toString());cR(r,s,()=>s(r.currentUser)),lR(r,l=>s(l))}}const i=Xb("auth");return i&&Wk(r,`http://${i}`),r}function IP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Mk({loadJS(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const o=dr("internal-error");o.customData=i,r(o)},n.type="text/javascript",n.charset="UTF-8",IP().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yP("Browser");var l_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fi,UE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,v){function w(){}w.prototype=v.prototype,_.D=v.prototype,_.prototype=new w,_.prototype.constructor=_,_.C=function(E,A,C){for(var I=Array(arguments.length-2),it=2;it<arguments.length;it++)I[it-2]=arguments[it];return v.prototype[A].apply(E,I)}}function r(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,r),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,v,w){w||(w=0);var E=Array(16);if(typeof v=="string")for(var A=0;16>A;++A)E[A]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(A=0;16>A;++A)E[A]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=_.g[0],w=_.g[1],A=_.g[2];var C=_.g[3],I=v+(C^w&(A^C))+E[0]+3614090360&4294967295;v=w+(I<<7&4294967295|I>>>25),I=C+(A^v&(w^A))+E[1]+3905402710&4294967295,C=v+(I<<12&4294967295|I>>>20),I=A+(w^C&(v^w))+E[2]+606105819&4294967295,A=C+(I<<17&4294967295|I>>>15),I=w+(v^A&(C^v))+E[3]+3250441966&4294967295,w=A+(I<<22&4294967295|I>>>10),I=v+(C^w&(A^C))+E[4]+4118548399&4294967295,v=w+(I<<7&4294967295|I>>>25),I=C+(A^v&(w^A))+E[5]+1200080426&4294967295,C=v+(I<<12&4294967295|I>>>20),I=A+(w^C&(v^w))+E[6]+2821735955&4294967295,A=C+(I<<17&4294967295|I>>>15),I=w+(v^A&(C^v))+E[7]+4249261313&4294967295,w=A+(I<<22&4294967295|I>>>10),I=v+(C^w&(A^C))+E[8]+1770035416&4294967295,v=w+(I<<7&4294967295|I>>>25),I=C+(A^v&(w^A))+E[9]+2336552879&4294967295,C=v+(I<<12&4294967295|I>>>20),I=A+(w^C&(v^w))+E[10]+4294925233&4294967295,A=C+(I<<17&4294967295|I>>>15),I=w+(v^A&(C^v))+E[11]+2304563134&4294967295,w=A+(I<<22&4294967295|I>>>10),I=v+(C^w&(A^C))+E[12]+1804603682&4294967295,v=w+(I<<7&4294967295|I>>>25),I=C+(A^v&(w^A))+E[13]+4254626195&4294967295,C=v+(I<<12&4294967295|I>>>20),I=A+(w^C&(v^w))+E[14]+2792965006&4294967295,A=C+(I<<17&4294967295|I>>>15),I=w+(v^A&(C^v))+E[15]+1236535329&4294967295,w=A+(I<<22&4294967295|I>>>10),I=v+(A^C&(w^A))+E[1]+4129170786&4294967295,v=w+(I<<5&4294967295|I>>>27),I=C+(w^A&(v^w))+E[6]+3225465664&4294967295,C=v+(I<<9&4294967295|I>>>23),I=A+(v^w&(C^v))+E[11]+643717713&4294967295,A=C+(I<<14&4294967295|I>>>18),I=w+(C^v&(A^C))+E[0]+3921069994&4294967295,w=A+(I<<20&4294967295|I>>>12),I=v+(A^C&(w^A))+E[5]+3593408605&4294967295,v=w+(I<<5&4294967295|I>>>27),I=C+(w^A&(v^w))+E[10]+38016083&4294967295,C=v+(I<<9&4294967295|I>>>23),I=A+(v^w&(C^v))+E[15]+3634488961&4294967295,A=C+(I<<14&4294967295|I>>>18),I=w+(C^v&(A^C))+E[4]+3889429448&4294967295,w=A+(I<<20&4294967295|I>>>12),I=v+(A^C&(w^A))+E[9]+568446438&4294967295,v=w+(I<<5&4294967295|I>>>27),I=C+(w^A&(v^w))+E[14]+3275163606&4294967295,C=v+(I<<9&4294967295|I>>>23),I=A+(v^w&(C^v))+E[3]+4107603335&4294967295,A=C+(I<<14&4294967295|I>>>18),I=w+(C^v&(A^C))+E[8]+1163531501&4294967295,w=A+(I<<20&4294967295|I>>>12),I=v+(A^C&(w^A))+E[13]+2850285829&4294967295,v=w+(I<<5&4294967295|I>>>27),I=C+(w^A&(v^w))+E[2]+4243563512&4294967295,C=v+(I<<9&4294967295|I>>>23),I=A+(v^w&(C^v))+E[7]+1735328473&4294967295,A=C+(I<<14&4294967295|I>>>18),I=w+(C^v&(A^C))+E[12]+2368359562&4294967295,w=A+(I<<20&4294967295|I>>>12),I=v+(w^A^C)+E[5]+4294588738&4294967295,v=w+(I<<4&4294967295|I>>>28),I=C+(v^w^A)+E[8]+2272392833&4294967295,C=v+(I<<11&4294967295|I>>>21),I=A+(C^v^w)+E[11]+1839030562&4294967295,A=C+(I<<16&4294967295|I>>>16),I=w+(A^C^v)+E[14]+4259657740&4294967295,w=A+(I<<23&4294967295|I>>>9),I=v+(w^A^C)+E[1]+2763975236&4294967295,v=w+(I<<4&4294967295|I>>>28),I=C+(v^w^A)+E[4]+1272893353&4294967295,C=v+(I<<11&4294967295|I>>>21),I=A+(C^v^w)+E[7]+4139469664&4294967295,A=C+(I<<16&4294967295|I>>>16),I=w+(A^C^v)+E[10]+3200236656&4294967295,w=A+(I<<23&4294967295|I>>>9),I=v+(w^A^C)+E[13]+681279174&4294967295,v=w+(I<<4&4294967295|I>>>28),I=C+(v^w^A)+E[0]+3936430074&4294967295,C=v+(I<<11&4294967295|I>>>21),I=A+(C^v^w)+E[3]+3572445317&4294967295,A=C+(I<<16&4294967295|I>>>16),I=w+(A^C^v)+E[6]+76029189&4294967295,w=A+(I<<23&4294967295|I>>>9),I=v+(w^A^C)+E[9]+3654602809&4294967295,v=w+(I<<4&4294967295|I>>>28),I=C+(v^w^A)+E[12]+3873151461&4294967295,C=v+(I<<11&4294967295|I>>>21),I=A+(C^v^w)+E[15]+530742520&4294967295,A=C+(I<<16&4294967295|I>>>16),I=w+(A^C^v)+E[2]+3299628645&4294967295,w=A+(I<<23&4294967295|I>>>9),I=v+(A^(w|~C))+E[0]+4096336452&4294967295,v=w+(I<<6&4294967295|I>>>26),I=C+(w^(v|~A))+E[7]+1126891415&4294967295,C=v+(I<<10&4294967295|I>>>22),I=A+(v^(C|~w))+E[14]+2878612391&4294967295,A=C+(I<<15&4294967295|I>>>17),I=w+(C^(A|~v))+E[5]+4237533241&4294967295,w=A+(I<<21&4294967295|I>>>11),I=v+(A^(w|~C))+E[12]+1700485571&4294967295,v=w+(I<<6&4294967295|I>>>26),I=C+(w^(v|~A))+E[3]+2399980690&4294967295,C=v+(I<<10&4294967295|I>>>22),I=A+(v^(C|~w))+E[10]+4293915773&4294967295,A=C+(I<<15&4294967295|I>>>17),I=w+(C^(A|~v))+E[1]+2240044497&4294967295,w=A+(I<<21&4294967295|I>>>11),I=v+(A^(w|~C))+E[8]+1873313359&4294967295,v=w+(I<<6&4294967295|I>>>26),I=C+(w^(v|~A))+E[15]+4264355552&4294967295,C=v+(I<<10&4294967295|I>>>22),I=A+(v^(C|~w))+E[6]+2734768916&4294967295,A=C+(I<<15&4294967295|I>>>17),I=w+(C^(A|~v))+E[13]+1309151649&4294967295,w=A+(I<<21&4294967295|I>>>11),I=v+(A^(w|~C))+E[4]+4149444226&4294967295,v=w+(I<<6&4294967295|I>>>26),I=C+(w^(v|~A))+E[11]+3174756917&4294967295,C=v+(I<<10&4294967295|I>>>22),I=A+(v^(C|~w))+E[2]+718787259&4294967295,A=C+(I<<15&4294967295|I>>>17),I=w+(C^(A|~v))+E[9]+3951481745&4294967295,_.g[0]=_.g[0]+v&4294967295,_.g[1]=_.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,_.g[2]=_.g[2]+A&4294967295,_.g[3]=_.g[3]+C&4294967295}n.prototype.u=function(_,v){v===void 0&&(v=_.length);for(var w=v-this.blockSize,E=this.B,A=this.h,C=0;C<v;){if(A==0)for(;C<=w;)i(this,_,C),C+=this.blockSize;if(typeof _=="string"){for(;C<v;)if(E[A++]=_.charCodeAt(C++),A==this.blockSize){i(this,E),A=0;break}}else for(;C<v;)if(E[A++]=_[C++],A==this.blockSize){i(this,E),A=0;break}}this.h=A,this.o+=v},n.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var v=1;v<_.length-8;++v)_[v]=0;var w=8*this.o;for(v=_.length-8;v<_.length;++v)_[v]=w&255,w/=256;for(this.u(_),_=Array(16),v=w=0;4>v;++v)for(var E=0;32>E;E+=8)_[w++]=this.g[v]>>>E&255;return _};function o(_,v){var w=l;return Object.prototype.hasOwnProperty.call(w,_)?w[_]:w[_]=v(_)}function s(_,v){this.h=v;for(var w=[],E=!0,A=_.length-1;0<=A;A--){var C=_[A]|0;E&&C==v||(w[A]=C,E=!1)}this.g=w}var l={};function c(_){return-128<=_&&128>_?o(_,function(v){return new s([v|0],0>v?-1:0)}):new s([_|0],0>_?-1:0)}function u(_){if(isNaN(_)||!isFinite(_))return p;if(0>_)return N(u(-_));for(var v=[],w=1,E=0;_>=w;E++)v[E]=_/w|0,w*=4294967296;return new s(v,0)}function f(_,v){if(_.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(_.charAt(0)=="-")return N(f(_.substring(1),v));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(v,8)),E=p,A=0;A<_.length;A+=8){var C=Math.min(8,_.length-A),I=parseInt(_.substring(A,A+C),v);8>C?(C=u(Math.pow(v,C)),E=E.j(C).add(u(I))):(E=E.j(w),E=E.add(u(I)))}return E}var p=c(0),m=c(1),T=c(16777216);t=s.prototype,t.m=function(){if(P(this))return-N(this).m();for(var _=0,v=1,w=0;w<this.g.length;w++){var E=this.i(w);_+=(0<=E?E:4294967296+E)*v,v*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(S(this))return"0";if(P(this))return"-"+N(this).toString(_);for(var v=u(Math.pow(_,6)),w=this,E="";;){var A=D(w,v).g;w=b(w,A.j(v));var C=((0<w.g.length?w.g[0]:w.h)>>>0).toString(_);if(w=A,S(w))return C+E;for(;6>C.length;)C="0"+C;E=C+E}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function S(_){if(_.h!=0)return!1;for(var v=0;v<_.g.length;v++)if(_.g[v]!=0)return!1;return!0}function P(_){return _.h==-1}t.l=function(_){return _=b(this,_),P(_)?-1:S(_)?0:1};function N(_){for(var v=_.g.length,w=[],E=0;E<v;E++)w[E]=~_.g[E];return new s(w,~_.h).add(m)}t.abs=function(){return P(this)?N(this):this},t.add=function(_){for(var v=Math.max(this.g.length,_.g.length),w=[],E=0,A=0;A<=v;A++){var C=E+(this.i(A)&65535)+(_.i(A)&65535),I=(C>>>16)+(this.i(A)>>>16)+(_.i(A)>>>16);E=I>>>16,C&=65535,I&=65535,w[A]=I<<16|C}return new s(w,w[w.length-1]&-2147483648?-1:0)};function b(_,v){return _.add(N(v))}t.j=function(_){if(S(this)||S(_))return p;if(P(this))return P(_)?N(this).j(N(_)):N(N(this).j(_));if(P(_))return N(this.j(N(_)));if(0>this.l(T)&&0>_.l(T))return u(this.m()*_.m());for(var v=this.g.length+_.g.length,w=[],E=0;E<2*v;E++)w[E]=0;for(E=0;E<this.g.length;E++)for(var A=0;A<_.g.length;A++){var C=this.i(E)>>>16,I=this.i(E)&65535,it=_.i(A)>>>16,Rr=_.i(A)&65535;w[2*E+2*A]+=I*Rr,y(w,2*E+2*A),w[2*E+2*A+1]+=C*Rr,y(w,2*E+2*A+1),w[2*E+2*A+1]+=I*it,y(w,2*E+2*A+1),w[2*E+2*A+2]+=C*it,y(w,2*E+2*A+2)}for(E=0;E<v;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=v;E<2*v;E++)w[E]=0;return new s(w,0)};function y(_,v){for(;(_[v]&65535)!=_[v];)_[v+1]+=_[v]>>>16,_[v]&=65535,v++}function x(_,v){this.g=_,this.h=v}function D(_,v){if(S(v))throw Error("division by zero");if(S(_))return new x(p,p);if(P(_))return v=D(N(_),v),new x(N(v.g),N(v.h));if(P(v))return v=D(_,N(v)),new x(N(v.g),v.h);if(30<_.g.length){if(P(_)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var w=m,E=v;0>=E.l(_);)w=F(w),E=F(E);var A=z(w,1),C=z(E,1);for(E=z(E,2),w=z(w,2);!S(E);){var I=C.add(E);0>=I.l(_)&&(A=A.add(w),C=I),E=z(E,1),w=z(w,1)}return v=b(_,A.j(v)),new x(A,v)}for(A=p;0<=_.l(v);){for(w=Math.max(1,Math.floor(_.m()/v.m())),E=Math.ceil(Math.log(w)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),C=u(w),I=C.j(v);P(I)||0<I.l(_);)w-=E,C=u(w),I=C.j(v);S(C)&&(C=m),A=A.add(C),_=b(_,I)}return new x(A,_)}t.A=function(_){return D(this,_).h},t.and=function(_){for(var v=Math.max(this.g.length,_.g.length),w=[],E=0;E<v;E++)w[E]=this.i(E)&_.i(E);return new s(w,this.h&_.h)},t.or=function(_){for(var v=Math.max(this.g.length,_.g.length),w=[],E=0;E<v;E++)w[E]=this.i(E)|_.i(E);return new s(w,this.h|_.h)},t.xor=function(_){for(var v=Math.max(this.g.length,_.g.length),w=[],E=0;E<v;E++)w[E]=this.i(E)^_.i(E);return new s(w,this.h^_.h)};function F(_){for(var v=_.g.length+1,w=[],E=0;E<v;E++)w[E]=_.i(E)<<1|_.i(E-1)>>>31;return new s(w,_.h)}function z(_,v){var w=v>>5;v%=32;for(var E=_.g.length-w,A=[],C=0;C<E;C++)A[C]=0<v?_.i(C+w)>>>v|_.i(C+w+1)<<32-v:_.i(C+w);return new s(A,_.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,UE=n,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=u,s.fromString=f,fi=s}).apply(typeof l_<"u"?l_:typeof self<"u"?self:typeof window<"u"?window:{});var Al=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zE,Es,jE,nc,Ef,BE,qE,HE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,h){return a==Array.prototype||a==Object.prototype||(a[d]=h.value),a};function r(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Al=="object"&&Al];for(var d=0;d<a.length;++d){var h=a[d];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=r(this);function i(a,d){if(d)e:{var h=n;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in h))break e;h=h[k]}a=a[a.length-1],g=h[a],d=d(g),d!=g&&d!=null&&e(h,a,{configurable:!0,writable:!0,value:d})}}function o(a,d){a instanceof String&&(a+="");var h=0,g=!1,k={next:function(){if(!g&&h<a.length){var O=h++;return{value:d(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(a){return a||function(){return o(this,function(d,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},l=this||self;function c(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function f(a,d,h){return a.call.apply(a.bind,arguments)}function p(a,d,h){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),a.apply(d,k)}}return function(){return a.apply(d,arguments)}}function m(a,d,h){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function T(a,d){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function S(a,d){function h(){}h.prototype=d.prototype,a.aa=d.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(g,k,O){for(var j=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)j[ve-2]=arguments[ve];return d.prototype[k].apply(g,j)}}function P(a){const d=a.length;if(0<d){const h=Array(d);for(let g=0;g<d;g++)h[g]=a[g];return h}return[]}function N(a,d){for(let h=1;h<arguments.length;h++){const g=arguments[h];if(c(g)){const k=a.length||0,O=g.length||0;a.length=k+O;for(let j=0;j<O;j++)a[k+j]=g[j]}else a.push(g)}}class b{constructor(d,h){this.i=d,this.j=h,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function y(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var F=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function z(a,d,h){for(const g in a)d.call(h,a[g],g,a)}function _(a,d){for(const h in a)d.call(void 0,a[h],h,a)}function v(a){const d={};for(const h in a)d[h]=a[h];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,d){let h,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(h in g)a[h]=g[h];for(let O=0;O<w.length;O++)h=w[O],Object.prototype.hasOwnProperty.call(g,h)&&(a[h]=g[h])}}function A(a){var d=1;a=a.split(":");const h=[];for(;0<d&&a.length;)h.push(a.shift()),d--;return a.length&&h.push(a.join(":")),h}function C(a){l.setTimeout(()=>{throw a},0)}function I(){var a=Z;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class it{constructor(){this.h=this.g=null}add(d,h){const g=Rr.get();g.set(d,h),this.h?this.h.next=g:this.g=g,this.h=g}}var Rr=new b(()=>new Kn,a=>a.reset());class Kn{constructor(){this.next=this.g=this.h=null}set(d,h){this.h=d,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Xt,H=!1,Z=new it,ie=()=>{const a=l.Promise.resolve(void 0);Xt=()=>{a.then(q)}};var q=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(h){C(h)}var d=Rr;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}H=!1};function ee(){this.s=this.s,this.C=this.C}ee.prototype.s=!1,ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Jt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};l.addEventListener("test",h,d),l.removeEventListener("test",h,d)}catch{}return a}();function Zt(a,d){if(fe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(F){e:{try{D(d.nodeName);var k=!0;break e}catch{}k=!1}k||(d=null)}}else h=="mouseover"?d=a.fromElement:h=="mouseout"&&(d=a.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:er[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Zt.aa.h.call(this)}}S(Zt,fe);var er={2:"touch",3:"pen",4:"mouse"};Zt.prototype.h=function(){Zt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ke="closure_listenable_"+(1e6*Math.random()|0),tr=0;function ex(a,d,h,g,k){this.listener=a,this.proxy=null,this.src=d,this.type=h,this.capture=!!g,this.ha=k,this.key=++tr,this.da=this.fa=!1}function qa(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ha(a){this.src=a,this.g={},this.h=0}Ha.prototype.add=function(a,d,h,g,k){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var j=Ku(a,d,g,k);return-1<j?(d=a[j],h||(d.fa=!1)):(d=new ex(d,this.src,O,!!g,k),d.fa=h,a.push(d)),d};function Wu(a,d){var h=d.type;if(h in a.g){var g=a.g[h],k=Array.prototype.indexOf.call(g,d,void 0),O;(O=0<=k)&&Array.prototype.splice.call(g,k,1),O&&(qa(d),a.g[h].length==0&&(delete a.g[h],a.h--))}}function Ku(a,d,h,g){for(var k=0;k<a.length;++k){var O=a[k];if(!O.da&&O.listener==d&&O.capture==!!h&&O.ha==g)return k}return-1}var Gu="closure_lm_"+(1e6*Math.random()|0),Qu={};function yg(a,d,h,g,k){if(Array.isArray(d)){for(var O=0;O<d.length;O++)yg(a,d[O],h,g,k);return null}return h=bg(h),a&&a[Ke]?a.K(d,h,u(g)?!!g.capture:!1,k):tx(a,d,h,!1,g,k)}function tx(a,d,h,g,k,O){if(!d)throw Error("Invalid event type");var j=u(k)?!!k.capture:!!k,ve=Xu(a);if(ve||(a[Gu]=ve=new Ha(a)),h=ve.add(d,h,g,j,O),h.proxy)return h;if(g=rx(),h.proxy=g,g.src=a,g.listener=h,a.addEventListener)Jt||(k=j),k===void 0&&(k=!1),a.addEventListener(d.toString(),g,k);else if(a.attachEvent)a.attachEvent(wg(d.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function rx(){function a(h){return d.call(a.src,a.listener,h)}const d=nx;return a}function _g(a,d,h,g,k){if(Array.isArray(d))for(var O=0;O<d.length;O++)_g(a,d[O],h,g,k);else g=u(g)?!!g.capture:!!g,h=bg(h),a&&a[Ke]?(a=a.i,d=String(d).toString(),d in a.g&&(O=a.g[d],h=Ku(O,h,g,k),-1<h&&(qa(O[h]),Array.prototype.splice.call(O,h,1),O.length==0&&(delete a.g[d],a.h--)))):a&&(a=Xu(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Ku(d,h,g,k)),(h=-1<a?d[a]:null)&&Yu(h))}function Yu(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[Ke])Wu(d.i,a);else{var h=a.type,g=a.proxy;d.removeEventListener?d.removeEventListener(h,g,a.capture):d.detachEvent?d.detachEvent(wg(h),g):d.addListener&&d.removeListener&&d.removeListener(g),(h=Xu(d))?(Wu(h,a),h.h==0&&(h.src=null,d[Gu]=null)):qa(a)}}}function wg(a){return a in Qu?Qu[a]:Qu[a]="on"+a}function nx(a,d){if(a.da)a=!0;else{d=new Zt(d,this);var h=a.listener,g=a.ha||a.src;a.fa&&Yu(a),a=h.call(g,d)}return a}function Xu(a){return a=a[Gu],a instanceof Ha?a:null}var Ju="__closure_events_fn_"+(1e9*Math.random()>>>0);function bg(a){return typeof a=="function"?a:(a[Ju]||(a[Ju]=function(d){return a.handleEvent(d)}),a[Ju])}function ot(){ee.call(this),this.i=new Ha(this),this.M=this,this.F=null}S(ot,ee),ot.prototype[Ke]=!0,ot.prototype.removeEventListener=function(a,d,h,g){_g(this,a,d,h,g)};function vt(a,d){var h,g=a.F;if(g)for(h=[];g;g=g.F)h.push(g);if(a=a.M,g=d.type||d,typeof d=="string")d=new fe(d,a);else if(d instanceof fe)d.target=d.target||a;else{var k=d;d=new fe(g,a),E(d,k)}if(k=!0,h)for(var O=h.length-1;0<=O;O--){var j=d.g=h[O];k=Wa(j,g,!0,d)&&k}if(j=d.g=a,k=Wa(j,g,!0,d)&&k,k=Wa(j,g,!1,d)&&k,h)for(O=0;O<h.length;O++)j=d.g=h[O],k=Wa(j,g,!1,d)&&k}ot.prototype.N=function(){if(ot.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var h=a.g[d],g=0;g<h.length;g++)qa(h[g]);delete a.g[d],a.h--}}this.F=null},ot.prototype.K=function(a,d,h,g){return this.i.add(String(a),d,!1,h,g)},ot.prototype.L=function(a,d,h,g){return this.i.add(String(a),d,!0,h,g)};function Wa(a,d,h,g){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var k=!0,O=0;O<d.length;++O){var j=d[O];if(j&&!j.da&&j.capture==h){var ve=j.listener,Ge=j.ha||j.src;j.fa&&Wu(a.i,j),k=ve.call(Ge,g)!==!1&&k}}return k&&!g.defaultPrevented}function Eg(a,d,h){if(typeof a=="function")h&&(a=m(a,h));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function Ig(a){a.g=Eg(()=>{a.g=null,a.i&&(a.i=!1,Ig(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class ix extends ee{constructor(d,h){super(),this.m=d,this.l=h,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Ig(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ho(a){ee.call(this),this.h=a,this.g={}}S(Ho,ee);var Tg=[];function xg(a){z(a.g,function(d,h){this.g.hasOwnProperty(h)&&Yu(d)},a),a.g={}}Ho.prototype.N=function(){Ho.aa.N.call(this),xg(this)},Ho.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zu=l.JSON.stringify,ox=l.JSON.parse,sx=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function ed(){}ed.prototype.h=null;function Ag(a){return a.h||(a.h=a.i())}function Sg(){}var Wo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function td(){fe.call(this,"d")}S(td,fe);function rd(){fe.call(this,"c")}S(rd,fe);var Gn={},Cg=null;function Ka(){return Cg=Cg||new ot}Gn.La="serverreachability";function kg(a){fe.call(this,Gn.La,a)}S(kg,fe);function Ko(a){const d=Ka();vt(d,new kg(d))}Gn.STAT_EVENT="statevent";function Rg(a,d){fe.call(this,Gn.STAT_EVENT,a),this.stat=d}S(Rg,fe);function yt(a){const d=Ka();vt(d,new Rg(d,a))}Gn.Ma="timingevent";function Pg(a,d){fe.call(this,Gn.Ma,a),this.size=d}S(Pg,fe);function Go(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function Qo(){this.g=!0}Qo.prototype.xa=function(){this.g=!1};function ax(a,d,h,g,k,O){a.info(function(){if(a.g)if(O)for(var j="",ve=O.split("&"),Ge=0;Ge<ve.length;Ge++){var de=ve[Ge].split("=");if(1<de.length){var st=de[0];de=de[1];var at=st.split("_");j=2<=at.length&&at[1]=="type"?j+(st+"="+de+"&"):j+(st+"=redacted&")}}else j=null;else j=O;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+d+`
`+h+`
`+j})}function lx(a,d,h,g,k,O,j){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+d+`
`+h+`
`+O+" "+j})}function $i(a,d,h,g){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+ux(a,h)+(g?" "+g:"")})}function cx(a,d){a.info(function(){return"TIMEOUT: "+d})}Qo.prototype.info=function(){};function ux(a,d){if(!a.g)return d;if(!d)return null;try{var h=JSON.parse(d);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var g=h[a];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var O=k[0];if(O!="noop"&&O!="stop"&&O!="close")for(var j=1;j<k.length;j++)k[j]=""}}}}return Zu(h)}catch{return d}}var Ga={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ng={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},nd;function Qa(){}S(Qa,ed),Qa.prototype.g=function(){return new XMLHttpRequest},Qa.prototype.i=function(){return{}},nd=new Qa;function sn(a,d,h,g){this.j=a,this.i=d,this.l=h,this.R=g||1,this.U=new Ho(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Og}function Og(){this.i=null,this.g="",this.h=!1}var Dg={},id={};function od(a,d,h){a.L=1,a.v=Za(Pr(d)),a.m=h,a.P=!0,Lg(a,null)}function Lg(a,d){a.F=Date.now(),Ya(a),a.A=Pr(a.v);var h=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Qg(h.i,"t",g),a.C=0,h=a.j.J,a.h=new Og,a.g=fv(a.j,h?d:null,!a.m),0<a.O&&(a.M=new ix(m(a.Y,a,a.g),a.O)),d=a.U,h=a.g,g=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(Tg[0]=k.toString()),k=Tg);for(var O=0;O<k.length;O++){var j=yg(h,k[O],g||d.handleEvent,!1,d.h||d);if(!j)break;d.g[j.key]=j}d=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Ko(),ax(a.i,a.u,a.A,a.l,a.R,a.m)}sn.prototype.ca=function(a){a=a.target;const d=this.M;d&&Nr(a)==3?d.j():this.Y(a)},sn.prototype.Y=function(a){try{if(a==this.g)e:{const at=Nr(this.g);var d=this.g.Ba();const zi=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||rv(this.g)))){this.J||at!=4||d==7||(d==8||0>=zi?Ko(3):Ko(2)),sd(this);var h=this.g.Z();this.X=h;t:if(Vg(this)){var g=rv(this.g);a="";var k=g.length,O=Nr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qn(this),Yo(this);var j="";break t}this.h.i=new l.TextDecoder}for(d=0;d<k;d++)this.h.h=!0,a+=this.h.i.decode(g[d],{stream:!(O&&d==k-1)});g.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=h==200,lx(this.i,this.u,this.A,this.l,this.R,at,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,Ge=this.g;if((ve=Ge.g?Ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(ve)){var de=ve;break t}}de=null}if(h=de)$i(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ad(this,h);else{this.o=!1,this.s=3,yt(12),Qn(this),Yo(this);break e}}if(this.P){h=!0;let rr;for(;!this.J&&this.C<j.length;)if(rr=dx(this,j),rr==id){at==4&&(this.s=4,yt(14),h=!1),$i(this.i,this.l,null,"[Incomplete Response]");break}else if(rr==Dg){this.s=4,yt(15),$i(this.i,this.l,j,"[Invalid Chunk]"),h=!1;break}else $i(this.i,this.l,rr,null),ad(this,rr);if(Vg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||j.length!=0||this.h.h||(this.s=1,yt(16),h=!1),this.o=this.o&&h,!h)$i(this.i,this.l,j,"[Invalid Chunked Response]"),Qn(this),Yo(this);else if(0<j.length&&!this.W){this.W=!0;var st=this.j;st.g==this&&st.ba&&!st.M&&(st.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),fd(st),st.M=!0,yt(11))}}else $i(this.i,this.l,j,null),ad(this,j);at==4&&Qn(this),this.o&&!this.J&&(at==4?cv(this.j,this):(this.o=!1,Ya(this)))}else Cx(this.g),h==400&&0<j.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),Qn(this),Yo(this)}}}catch{}finally{}};function Vg(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function dx(a,d){var h=a.C,g=d.indexOf(`
`,h);return g==-1?id:(h=Number(d.substring(h,g)),isNaN(h)?Dg:(g+=1,g+h>d.length?id:(d=d.slice(g,g+h),a.C=g+h,d)))}sn.prototype.cancel=function(){this.J=!0,Qn(this)};function Ya(a){a.S=Date.now()+a.I,Mg(a,a.I)}function Mg(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Go(m(a.ba,a),d)}function sd(a){a.B&&(l.clearTimeout(a.B),a.B=null)}sn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(cx(this.i,this.A),this.L!=2&&(Ko(),yt(17)),Qn(this),this.s=2,Yo(this)):Mg(this,this.S-a)};function Yo(a){a.j.G==0||a.J||cv(a.j,a)}function Qn(a){sd(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,xg(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function ad(a,d){try{var h=a.j;if(h.G!=0&&(h.g==a||ld(h.h,a))){if(!a.K&&ld(h.h,a)&&h.G==3){try{var g=h.Da.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)ol(h),nl(h);else break e;hd(h),yt(18)}}else h.za=k[1],0<h.za-h.T&&37500>k[2]&&h.F&&h.v==0&&!h.C&&(h.C=Go(m(h.Za,h),6e3));if(1>=Ug(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Xn(h,11)}else if((a.K||h.g==a)&&ol(h),!y(d))for(k=h.Da.g.parse(d),d=0;d<k.length;d++){let de=k[d];if(h.T=de[0],de=de[1],h.G==2)if(de[0]=="c"){h.K=de[1],h.ia=de[2];const st=de[3];st!=null&&(h.la=st,h.j.info("VER="+h.la));const at=de[4];at!=null&&(h.Aa=at,h.j.info("SVER="+h.Aa));const zi=de[5];zi!=null&&typeof zi=="number"&&0<zi&&(g=1.5*zi,h.L=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const rr=a.g;if(rr){const al=rr.g?rr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(al){var O=g.h;O.g||al.indexOf("spdy")==-1&&al.indexOf("quic")==-1&&al.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(cd(O,O.h),O.h=null))}if(g.D){const pd=rr.g?rr.g.getResponseHeader("X-HTTP-Session-Id"):null;pd&&(g.ya=pd,_e(g.I,g.D,pd))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),g=h;var j=a;if(g.qa=hv(g,g.J?g.ia:null,g.W),j.K){zg(g.h,j);var ve=j,Ge=g.L;Ge&&(ve.I=Ge),ve.B&&(sd(ve),Ya(ve)),g.g=j}else av(g);0<h.i.length&&il(h)}else de[0]!="stop"&&de[0]!="close"||Xn(h,7);else h.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Xn(h,7):dd(h):de[0]!="noop"&&h.l&&h.l.ta(de),h.v=0)}}Ko(4)}catch{}}var hx=class{constructor(a,d){this.g=a,this.map=d}};function $g(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ug(a){return a.h?1:a.g?a.g.size:0}function ld(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function cd(a,d){a.g?a.g.add(d):a.h=d}function zg(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}$g.prototype.cancel=function(){if(this.i=jg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function jg(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const h of a.g.values())d=d.concat(h.D);return d}return P(a.i)}function fx(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var d=[],h=a.length,g=0;g<h;g++)d.push(a[g]);return d}d=[],h=0;for(g in a)d[h++]=a[g];return d}function px(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var d=[];a=a.length;for(var h=0;h<a;h++)d.push(h);return d}d=[],h=0;for(const g in a)d[h++]=g;return d}}}function Bg(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var h=px(a),g=fx(a),k=g.length,O=0;O<k;O++)d.call(void 0,g[O],h&&h[O],a)}var qg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mx(a,d){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var g=a[h].indexOf("="),k=null;if(0<=g){var O=a[h].substring(0,g);k=a[h].substring(g+1)}else O=a[h];d(O,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Yn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Yn){this.h=a.h,Xa(this,a.j),this.o=a.o,this.g=a.g,Ja(this,a.s),this.l=a.l;var d=a.i,h=new Zo;h.i=d.i,d.g&&(h.g=new Map(d.g),h.h=d.h),Hg(this,h),this.m=a.m}else a&&(d=String(a).match(qg))?(this.h=!1,Xa(this,d[1]||"",!0),this.o=Xo(d[2]||""),this.g=Xo(d[3]||"",!0),Ja(this,d[4]),this.l=Xo(d[5]||"",!0),Hg(this,d[6]||"",!0),this.m=Xo(d[7]||"")):(this.h=!1,this.i=new Zo(null,this.h))}Yn.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Jo(d,Wg,!0),":");var h=this.g;return(h||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Jo(d,Wg,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(Jo(h,h.charAt(0)=="/"?yx:vx,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",Jo(h,wx)),a.join("")};function Pr(a){return new Yn(a)}function Xa(a,d,h){a.j=h?Xo(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Ja(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Hg(a,d,h){d instanceof Zo?(a.i=d,bx(a.i,a.h)):(h||(d=Jo(d,_x)),a.i=new Zo(d,a.h))}function _e(a,d,h){a.i.set(d,h)}function Za(a){return _e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Xo(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Jo(a,d,h){return typeof a=="string"?(a=encodeURI(a).replace(d,gx),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function gx(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Wg=/[#\/\?@]/g,vx=/[#\?:]/g,yx=/[#\?]/g,_x=/[#\?@]/g,wx=/#/g;function Zo(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function an(a){a.g||(a.g=new Map,a.h=0,a.i&&mx(a.i,function(d,h){a.add(decodeURIComponent(d.replace(/\+/g," ")),h)}))}t=Zo.prototype,t.add=function(a,d){an(this),this.i=null,a=Fi(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(d),this.h+=1,this};function Kg(a,d){an(a),d=Fi(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Gg(a,d){return an(a),d=Fi(a,d),a.g.has(d)}t.forEach=function(a,d){an(this),this.g.forEach(function(h,g){h.forEach(function(k){a.call(d,k,g,this)},this)},this)},t.na=function(){an(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),h=[];for(let g=0;g<d.length;g++){const k=a[g];for(let O=0;O<k.length;O++)h.push(d[g])}return h},t.V=function(a){an(this);let d=[];if(typeof a=="string")Gg(this,a)&&(d=d.concat(this.g.get(Fi(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)d=d.concat(a[h])}return d},t.set=function(a,d){return an(this),this.i=null,a=Fi(this,a),Gg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Qg(a,d,h){Kg(a,d),0<h.length&&(a.i=null,a.g.set(Fi(a,d),P(h)),a.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var h=0;h<d.length;h++){var g=d[h];const O=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var k=O;j[g]!==""&&(k+="="+encodeURIComponent(String(j[g]))),a.push(k)}}return this.i=a.join("&")};function Fi(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function bx(a,d){d&&!a.j&&(an(a),a.i=null,a.g.forEach(function(h,g){var k=g.toLowerCase();g!=k&&(Kg(this,g),Qg(this,k,h))},a)),a.j=d}function Ex(a,d){const h=new Qo;if(l.Image){const g=new Image;g.onload=T(ln,h,"TestLoadImage: loaded",!0,d,g),g.onerror=T(ln,h,"TestLoadImage: error",!1,d,g),g.onabort=T(ln,h,"TestLoadImage: abort",!1,d,g),g.ontimeout=T(ln,h,"TestLoadImage: timeout",!1,d,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else d(!1)}function Ix(a,d){const h=new Qo,g=new AbortController,k=setTimeout(()=>{g.abort(),ln(h,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(k),O.ok?ln(h,"TestPingServer: ok",!0,d):ln(h,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(k),ln(h,"TestPingServer: error",!1,d)})}function ln(a,d,h,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(h)}catch{}}function Tx(){this.g=new sx}function xx(a,d,h){const g=h||"";try{Bg(a,function(k,O){let j=k;u(k)&&(j=Zu(k)),d.push(g+O+"="+encodeURIComponent(j))})}catch(k){throw d.push(g+"type="+encodeURIComponent("_badmap")),k}}function el(a){this.l=a.Ub||null,this.j=a.eb||!1}S(el,ed),el.prototype.g=function(){return new tl(this.l,this.j)},el.prototype.i=function(a){return function(){return a}}({});function tl(a,d){ot.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(tl,ot),t=tl.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,ts(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,es(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ts(this)),this.g&&(this.readyState=3,ts(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?es(this):ts(this),this.readyState==3&&Yg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,es(this))},t.Qa=function(a){this.g&&(this.response=a,es(this))},t.ga=function(){this.g&&es(this)};function es(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ts(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var h=d.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=d.next();return a.join(`\r
`)};function ts(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(tl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Xg(a){let d="";return z(a,function(h,g){d+=g,d+=":",d+=h,d+=`\r
`}),d}function ud(a,d,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=Xg(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):_e(a,d,h))}function ke(a){ot.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(ke,ot);var Ax=/^https?$/i,Sx=["POST","PUT"];t=ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():nd.g(),this.v=this.o?Ag(this.o):Ag(nd),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(O){Jg(this,O);return}if(a=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)h.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())h.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(O=>O.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Sx,d,void 0))||g||k||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,j]of h)this.g.setRequestHeader(O,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tv(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Jg(this,O)}};function Jg(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Zg(a),rl(a)}function Zg(a){a.A||(a.A=!0,vt(a,"complete"),vt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,vt(this,"complete"),vt(this,"abort"),rl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rl(this,!0)),ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ev(this):this.bb())},t.bb=function(){ev(this)};function ev(a){if(a.h&&typeof s<"u"&&(!a.v[1]||Nr(a)!=4||a.Z()!=2)){if(a.u&&Nr(a)==4)Eg(a.Ea,0,a);else if(vt(a,"readystatechange"),Nr(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var h;if(!(h=d)){var g;if(g=j===0){var k=String(a.D).match(qg)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),g=!Ax.test(k?k.toLowerCase():"")}h=g}if(h)vt(a,"complete"),vt(a,"success");else{a.m=6;try{var O=2<Nr(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Zg(a)}}finally{rl(a)}}}}function rl(a,d){if(a.g){tv(a);const h=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||vt(a,"ready");try{h.onreadystatechange=g}catch{}}}function tv(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Nr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Nr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),ox(d)}};function rv(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Cx(a){const d={};a=(a.g&&2<=Nr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var h=A(a[g]);const k=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const O=d[k]||[];d[k]=O,O.push(h)}_(d,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rs(a,d,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||d}function nv(a){this.Aa=0,this.i=[],this.j=new Qo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rs("baseRetryDelayMs",5e3,a),this.cb=rs("retryDelaySeedMs",1e4,a),this.Wa=rs("forwardChannelMaxRetries",2,a),this.wa=rs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new $g(a&&a.concurrentRequestLimit),this.Da=new Tx,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=nv.prototype,t.la=8,t.G=1,t.connect=function(a,d,h,g){yt(0),this.W=a,this.H=d||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.I=hv(this,null,this.W),il(this)};function dd(a){if(iv(a),a.G==3){var d=a.U++,h=Pr(a.I);if(_e(h,"SID",a.K),_e(h,"RID",d),_e(h,"TYPE","terminate"),ns(a,h),d=new sn(a,a.j,d),d.L=2,d.v=Za(Pr(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=d.v,h=!0),h||(d.g=fv(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ya(d)}dv(a)}function nl(a){a.g&&(fd(a),a.g.cancel(),a.g=null)}function iv(a){nl(a),a.u&&(l.clearTimeout(a.u),a.u=null),ol(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function il(a){if(!Fg(a.h)&&!a.s){a.s=!0;var d=a.Ga;Xt||ie(),H||(Xt(),H=!0),Z.add(d,a),a.B=0}}function kx(a,d){return Ug(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Go(m(a.Ga,a,d),uv(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new sn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=v(O),E(O,this.S)):O=this.S),this.m!==null||this.O||(k.H=O,O=null),this.P)e:{for(var d=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=h;break e}if(d===4096||h===this.i.length-1){d=h+1;break e}}d=1e3}else d=1e3;d=sv(this,k,d),h=Pr(this.I),_e(h,"RID",a),_e(h,"CVER",22),this.D&&_e(h,"X-HTTP-Session-Id",this.D),ns(this,h),O&&(this.O?d="headers="+encodeURIComponent(String(Xg(O)))+"&"+d:this.m&&ud(h,this.m,O)),cd(this.h,k),this.Ua&&_e(h,"TYPE","init"),this.P?(_e(h,"$req",d),_e(h,"SID","null"),k.T=!0,od(k,h,null)):od(k,h,d),this.G=2}}else this.G==3&&(a?ov(this,a):this.i.length==0||Fg(this.h)||ov(this))};function ov(a,d){var h;d?h=d.l:h=a.U++;const g=Pr(a.I);_e(g,"SID",a.K),_e(g,"RID",h),_e(g,"AID",a.T),ns(a,g),a.m&&a.o&&ud(g,a.m,a.o),h=new sn(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),d&&(a.i=d.D.concat(a.i)),d=sv(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),cd(a.h,h),od(h,g,d)}function ns(a,d){a.H&&z(a.H,function(h,g){_e(d,g,h)}),a.l&&Bg({},function(h,g){_e(d,g,h)})}function sv(a,d,h){h=Math.min(a.i.length,h);var g=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let O=-1;for(;;){const j=["count="+h];O==-1?0<h?(O=k[0].g,j.push("ofs="+O)):O=0:j.push("ofs="+O);let ve=!0;for(let Ge=0;Ge<h;Ge++){let de=k[Ge].g;const st=k[Ge].map;if(de-=O,0>de)O=Math.max(0,k[Ge].g-100),ve=!1;else try{xx(st,j,"req"+de+"_")}catch{g&&g(st)}}if(ve){g=j.join("&");break e}}}return a=a.i.splice(0,h),d.D=a,g}function av(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Xt||ie(),H||(Xt(),H=!0),Z.add(d,a),a.v=0}}function hd(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Go(m(a.Fa,a),uv(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,lv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Go(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),nl(this),lv(this))};function fd(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function lv(a){a.g=new sn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Pr(a.qa);_e(d,"RID","rpc"),_e(d,"SID",a.K),_e(d,"AID",a.T),_e(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&_e(d,"TO",a.ja),_e(d,"TYPE","xmlhttp"),ns(a,d),a.m&&a.o&&ud(d,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=Za(Pr(d)),h.m=null,h.P=!0,Lg(h,a)}t.Za=function(){this.C!=null&&(this.C=null,nl(this),hd(this),yt(19))};function ol(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function cv(a,d){var h=null;if(a.g==d){ol(a),fd(a),a.g=null;var g=2}else if(ld(a.h,d))h=d.D,zg(a.h,d),g=1;else return;if(a.G!=0){if(d.o)if(g==1){h=d.m?d.m.length:0,d=Date.now()-d.F;var k=a.B;g=Ka(),vt(g,new Pg(g,h)),il(a)}else av(a);else if(k=d.s,k==3||k==0&&0<d.X||!(g==1&&kx(a,d)||g==2&&hd(a)))switch(h&&0<h.length&&(d=a.h,d.i=d.i.concat(h)),k){case 1:Xn(a,5);break;case 4:Xn(a,10);break;case 3:Xn(a,6);break;default:Xn(a,2)}}}function uv(a,d){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*d}function Xn(a,d){if(a.j.info("Error code "+d),d==2){var h=m(a.fb,a),g=a.Xa;const k=!g;g=new Yn(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Xa(g,"https"),Za(g),k?Ex(g.toString(),h):Ix(g.toString(),h)}else yt(2);a.G=0,a.l&&a.l.sa(d),dv(a),iv(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function dv(a){if(a.G=0,a.ka=[],a.l){const d=jg(a.h);(d.length!=0||a.i.length!=0)&&(N(a.ka,d),N(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function hv(a,d,h){var g=h instanceof Yn?Pr(h):new Yn(h);if(g.g!="")d&&(g.g=d+"."+g.g),Ja(g,g.s);else{var k=l.location;g=k.protocol,d=d?d+"."+k.hostname:k.hostname,k=+k.port;var O=new Yn(null);g&&Xa(O,g),d&&(O.g=d),k&&Ja(O,k),h&&(O.l=h),g=O}return h=a.D,d=a.ya,h&&d&&_e(g,h,d),_e(g,"VER",a.la),ns(a,g),g}function fv(a,d,h){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new ke(new el({eb:h})):new ke(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function pv(){}t=pv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function sl(){}sl.prototype.g=function(a,d){return new Ot(a,d)};function Ot(a,d){ot.call(this),this.g=new nv(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!y(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!y(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Ui(this)}S(Ot,ot),Ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){dd(this.g)},Ot.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=Zu(a),a=h);d.i.push(new hx(d.Ya++,a)),d.G==3&&il(d)},Ot.prototype.N=function(){this.g.l=null,delete this.j,dd(this.g),delete this.g,Ot.aa.N.call(this)};function mv(a){td.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const h in d){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}S(mv,td);function gv(){rd.call(this),this.status=1}S(gv,rd);function Ui(a){this.g=a}S(Ui,pv),Ui.prototype.ua=function(){vt(this.g,"a")},Ui.prototype.ta=function(a){vt(this.g,new mv(a))},Ui.prototype.sa=function(a){vt(this.g,new gv)},Ui.prototype.ra=function(){vt(this.g,"b")},sl.prototype.createWebChannel=sl.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,HE=function(){return new sl},qE=function(){return Ka()},BE=Gn,Ef={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ga.NO_ERROR=0,Ga.TIMEOUT=8,Ga.HTTP_ERROR=6,nc=Ga,Ng.COMPLETE="complete",jE=Ng,Sg.EventType=Wo,Wo.OPEN="a",Wo.CLOSE="b",Wo.ERROR="c",Wo.MESSAGE="d",ot.prototype.listen=ot.prototype.K,Es=Sg,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,zE=ke}).apply(typeof Al<"u"?Al:typeof self<"u"?self:typeof window<"u"?window:{});const c_="@firebase/firestore";/**
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
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
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
 */let Fo="10.14.0";/**
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
 */const Ii=new sm("@firebase/firestore");function hs(){return Ii.logLevel}function G(t,...e){if(Ii.logLevel<=le.DEBUG){const r=e.map(wm);Ii.debug(`Firestore (${Fo}): ${t}`,...r)}}function en(t,...e){if(Ii.logLevel<=le.ERROR){const r=e.map(wm);Ii.error(`Firestore (${Fo}): ${t}`,...r)}}function Io(t,...e){if(Ii.logLevel<=le.WARN){const r=e.map(wm);Ii.warn(`Firestore (${Fo}): ${t}`,...r)}}function wm(t){if(typeof t=="string")return t;try{/**
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
*/return function(r){return JSON.stringify(r)}(t)}catch{return t}}/**
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
 */function te(t="Unexpected state"){const e=`FIRESTORE (${Fo}) INTERNAL ASSERTION FAILED: `+t;throw en(e),new Error(e)}function me(t,e){t||te()}function ne(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends kr{constructor(e,r){super(e,r),this.code=e,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pi{constructor(){this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}}/**
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
 */class WE{constructor(e,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class TP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,r){e.enqueueRetryable(()=>r(dt.UNAUTHENTICATED))}shutdown(){}}class xP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,r){this.changeListener=r,e.enqueueRetryable(()=>r(this.token.user))}shutdown(){this.changeListener=null}}class AP{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,r){me(this.o===void 0);let n=this.i;const i=c=>this.i!==n?(n=this.i,r(c)):Promise.resolve();let o=new pi;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new pi,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const c=o;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new pi)}},0),s()}getToken(){const e=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then(n=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(me(typeof n.accessToken=="string"),new WE(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new dt(e)}}class SP{constructor(e,r,n){this.l=e,this.h=r,this.P=n,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class CP{constructor(e,r,n){this.l=e,this.h=r,this.P=n}getToken(){return Promise.resolve(new SP(this.l,this.h,this.P))}start(e,r){e.enqueueRetryable(()=>r(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,r){me(this.o===void 0);const n=o=>{o.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,G("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?r(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>n(o))};const i=o=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(r=>r?(me(typeof r.token=="string"),this.R=r.token,new kP(r.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function PP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),r=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(r);else for(let n=0;n<t;n++)r[n]=Math.floor(256*Math.random());return r}/**
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
 */class KE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=PP(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<r&&(n+=e.charAt(i[o]%e.length))}return n}}function he(t,e){return t<e?-1:t>e?1:0}function To(t,e,r){return t.length===e.length&&t.every((n,i)=>r(n,e[i]))}/**
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
 */class Be{constructor(e,r){if(this.seconds=e,this.nanoseconds=r,r<0)throw new K(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new K(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(e<-62135596800)throw new K(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const r=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*r));return new Be(r,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new Be(0,0))}static max(){return new re(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class da{constructor(e,r,n){r===void 0?r=0:r>e.length&&te(),n===void 0?n=e.length-r:n>e.length-r&&te(),this.segments=e,this.offset=r,this.len=n}get length(){return this.len}isEqual(e){return da.comparator(this,e)===0}child(e){const r=this.segments.slice(this.offset,this.limit());return e instanceof da?e.forEach(n=>{r.push(n)}):r.push(e),this.construct(r)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}forEach(e){for(let r=this.offset,n=this.limit();r<n;r++)e(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,r){const n=Math.min(e.length,r.length);for(let i=0;i<n;i++){const o=e.get(i),s=r.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<r.length?-1:e.length>r.length?1:0}}class be extends da{construct(e,r,n){return new be(e,r,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const r=[];for(const n of e){if(n.indexOf("//")>=0)throw new K(L.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);r.push(...n.split("/").filter(i=>i.length>0))}return new be(r)}static emptyPath(){return new be([])}}const NP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends da{construct(e,r,n){return new Je(e,r,n)}static isValidIdentifier(e){return NP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const r=[];let n="",i=0;const o=()=>{if(n.length===0)throw new K(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(n),n=""};let s=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new K(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,i+=2}else l==="`"?(s=!s,i++):l!=="."||s?(n+=l,i++):(o(),i++)}if(o(),s)throw new K(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(r)}static emptyPath(){return new Je([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(be.fromString(e))}static fromName(e){return new X(be.fromString(e).popFirst(5))}static empty(){return new X(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,r){return be.comparator(e.path,r.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new be(e.slice()))}}function OP(t,e){const r=t.toTimestamp().seconds,n=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(n===1e9?new Be(r+1,0):new Be(r,n));return new Vn(i,X.empty(),e)}function DP(t){return new Vn(t.readTime,t.key,-1)}class Vn{constructor(e,r,n){this.readTime=e,this.documentKey=r,this.largestBatchId=n}static min(){return new Vn(re.min(),X.empty(),-1)}static max(){return new Vn(re.max(),X.empty(),-1)}}function LP(t,e){let r=t.readTime.compareTo(e.readTime);return r!==0?r:(r=X.comparator(t.documentKey,e.documentKey),r!==0?r:he(t.largestBatchId,e.largestBatchId))}/**
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
 */const VP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Da(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==VP)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(r=>{this.isDone=!0,this.result=r,this.nextCallback&&this.nextCallback(r)},r=>{this.isDone=!0,this.error=r,this.catchCallback&&this.catchCallback(r)})}catch(e){return this.next(void 0,e)}next(e,r){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(r,this.error):this.wrapSuccess(e,this.result):new V((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(r,o).next(n,i)}})}toPromise(){return new Promise((e,r)=>{this.next(e,r)})}wrapUserFunction(e){try{const r=e();return r instanceof V?r:V.resolve(r)}catch(r){return V.reject(r)}}wrapSuccess(e,r){return e?this.wrapUserFunction(()=>e(r)):V.resolve(r)}wrapFailure(e,r){return e?this.wrapUserFunction(()=>e(r)):V.reject(r)}static resolve(e){return new V((r,n)=>{r(e)})}static reject(e){return new V((r,n)=>{n(e)})}static waitFor(e){return new V((r,n)=>{let i=0,o=0,s=!1;e.forEach(l=>{++i,l.next(()=>{++o,s&&o===i&&r()},c=>n(c))}),s=!0,o===i&&r()})}static or(e){let r=V.resolve(!1);for(const n of e)r=r.next(i=>i?V.resolve(i):n());return r}static forEach(e,r){const n=[];return e.forEach((i,o)=>{n.push(r.call(this,i,o))}),this.waitFor(n)}static mapArray(e,r){return new V((n,i)=>{const o=e.length,s=new Array(o);let l=0;for(let c=0;c<o;c++){const u=c;r(e[u]).next(f=>{s[u]=f,++l,l===o&&n(s)},f=>i(f))}})}static doWhile(e,r){return new V((n,i)=>{const o=()=>{e()===!0?r().next(()=>{o()},i):n()};o()})}}function $P(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}function La(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class bm{constructor(e,r){this.previousValue=e,r&&(r.sequenceNumberHandler=n=>this.ie(n),this.se=n=>r.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}bm.oe=-1;function Eu(t){return t==null}function Bc(t){return t===0&&1/t==-1/0}function FP(t){return typeof t=="number"&&Number.isInteger(t)&&!Bc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function u_(t){let e=0;for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&e++;return e}function Oi(t,e){for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&e(r,t[r])}function GE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ce{constructor(e,r){this.comparator=e,this.root=r||Ye.EMPTY}insert(e,r){return new Ce(this.comparator,this.root.insert(e,r,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let r=this.root;for(;!r.isEmpty();){const n=this.comparator(e,r.key);if(n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}indexOf(e){let r=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return r+n.left.size;i<0?n=n.left:(r+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((r,n)=>(e(r,n),!1))}toString(){const e=[];return this.inorderTraversal((r,n)=>(e.push(`${r}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sl(this.root,e,this.comparator,!0)}}class Sl{constructor(e,r,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=r?n(e.key,r):1,r&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const r={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return r}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,r,n,i,o){this.key=e,this.value=r,this.color=n??Ye.RED,this.left=i??Ye.EMPTY,this.right=o??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,r,n,i,o){return new Ye(e??this.key,r??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,r,n){let i=this;const o=n(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,r,n),null):o===0?i.copy(null,r,null,null,null):i.copy(null,null,null,null,i.right.insert(e,r,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,r){let n,i=this;if(r(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,r),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),r(e,i.key)===0){if(i.right.isEmpty())return Ye.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,r))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),r=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,r)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(e,r,n,i,o){return this}insert(e,r,n){return new Ye(e,r)}remove(e,r){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class et{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((r,n)=>(e(r),!1))}forEachInRange(e,r){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;r(i.key)}}forEachWhile(e,r){let n;for(n=r!==void 0?this.data.getIteratorFrom(r):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const r=this.data.getIteratorFrom(e);return r.hasNext()?r.getNext().key:null}getIterator(){return new d_(this.data.getIterator())}getIteratorFrom(e){return new d_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let r=this;return r.size<e.size&&(r=e,e=this),e.forEach(n=>{r=r.add(n)}),r}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const r=this.data.getIterator(),n=e.data.getIterator();for(;r.hasNext();){const i=r.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(r=>{e.push(r)}),e}toString(){const e=[];return this.forEach(r=>e.push(r)),"SortedSet("+e.toString()+")"}copy(e){const r=new et(this.comparator);return r.data=e,r}}class d_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Vt{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new Vt([])}unionWith(e){let r=new et(Je.comparator);for(const n of this.fields)r=r.add(n);for(const n of e)r=r.add(n);return new Vt(r.toArray())}covers(e){for(const r of this.fields)if(r.isPrefixOf(e))return!0;return!1}isEqual(e){return To(this.fields,e.fields,(r,n)=>r.isEqual(n))}}/**
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
 */class QE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const r=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new QE("Invalid base64 string: "+o):o}}(e);return new rt(r)}static fromUint8Array(e){const r=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new rt(r)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(r){return btoa(r)}(this.binaryString)}toUint8Array(){return function(r){const n=new Uint8Array(r.length);for(let i=0;i<r.length;i++)n[i]=r.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const UP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mn(t){if(me(!!t),typeof t=="string"){let e=0;const r=UP.exec(t);if(me(!!r),r[1]){let i=r[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(t);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ti(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
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
 */function Em(t){var e,r;return((r=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||r===void 0?void 0:r.stringValue)==="server_timestamp"}function Im(t){const e=t.mapValue.fields.__previous_value__;return Em(e)?Im(e):e}function ha(t){const e=Mn(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
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
 */class zP{constructor(e,r,n,i,o,s,l,c,u){this.databaseId=e,this.appId=r,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class fa{constructor(e,r){this.projectId=e,this.database=r||"(default)"}static empty(){return new fa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Cl={mapValue:{}};function xi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Em(t)?4:BP(t)?9007199254740991:jP(t)?10:11:te()}function Cr(t,e){if(t===e)return!0;const r=xi(t);if(r!==xi(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ha(t).isEqual(ha(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=Mn(i.timestampValue),l=Mn(o.timestampValue);return s.seconds===l.seconds&&s.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return Ti(i.bytesValue).isEqual(Ti(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return De(i.geoPointValue.latitude)===De(o.geoPointValue.latitude)&&De(i.geoPointValue.longitude)===De(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return De(i.integerValue)===De(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=De(i.doubleValue),l=De(o.doubleValue);return s===l?Bc(s)===Bc(l):isNaN(s)&&isNaN(l)}return!1}(t,e);case 9:return To(t.arrayValue.values||[],e.arrayValue.values||[],Cr);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},l=o.mapValue.fields||{};if(u_(s)!==u_(l))return!1;for(const c in s)if(s.hasOwnProperty(c)&&(l[c]===void 0||!Cr(s[c],l[c])))return!1;return!0}(t,e);default:return te()}}function pa(t,e){return(t.values||[]).find(r=>Cr(r,e))!==void 0}function xo(t,e){if(t===e)return 0;const r=xi(t),n=xi(e);if(r!==n)return he(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(o,s){const l=De(o.integerValue||o.doubleValue),c=De(s.integerValue||s.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return h_(t.timestampValue,e.timestampValue);case 4:return h_(ha(t),ha(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(o,s){const l=Ti(o),c=Ti(s);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const l=o.split("/"),c=s.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=he(l[u],c[u]);if(f!==0)return f}return he(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const l=he(De(o.latitude),De(s.latitude));return l!==0?l:he(De(o.longitude),De(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return f_(t.arrayValue,e.arrayValue);case 10:return function(o,s){var l,c,u,f;const p=o.fields||{},m=s.fields||{},T=(l=p.value)===null||l===void 0?void 0:l.arrayValue,S=(c=m.value)===null||c===void 0?void 0:c.arrayValue,P=he(((u=T==null?void 0:T.values)===null||u===void 0?void 0:u.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:f_(T,S)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===Cl.mapValue&&s===Cl.mapValue)return 0;if(o===Cl.mapValue)return 1;if(s===Cl.mapValue)return-1;const l=o.fields||{},c=Object.keys(l),u=s.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=he(c[p],f[p]);if(m!==0)return m;const T=xo(l[c[p]],u[f[p]]);if(T!==0)return T}return he(c.length,f.length)}(t.mapValue,e.mapValue);default:throw te()}}function h_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const r=Mn(t),n=Mn(e),i=he(r.seconds,n.seconds);return i!==0?i:he(r.nanos,n.nanos)}function f_(t,e){const r=t.values||[],n=e.values||[];for(let i=0;i<r.length&&i<n.length;++i){const o=xo(r[i],n[i]);if(o)return o}return he(r.length,n.length)}function Ao(t){return If(t)}function If(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const n=Mn(r);return`time(${n.seconds},${n.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(r){return Ti(r).toBase64()}(t.bytesValue):"referenceValue"in t?function(r){return X.fromName(r).toString()}(t.referenceValue):"geoPointValue"in t?function(r){return`geo(${r.latitude},${r.longitude})`}(t.geoPointValue):"arrayValue"in t?function(r){let n="[",i=!0;for(const o of r.values||[])i?i=!1:n+=",",n+=If(o);return n+"]"}(t.arrayValue):"mapValue"in t?function(r){const n=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const s of n)o?o=!1:i+=",",i+=`${s}:${If(r.fields[s])}`;return i+"}"}(t.mapValue):te()}function p_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Tf(t){return!!t&&"integerValue"in t}function Tm(t){return!!t&&"arrayValue"in t}function m_(t){return!!t&&"nullValue"in t}function g_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ic(t){return!!t&&"mapValue"in t}function jP(t){var e,r;return((r=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||r===void 0?void 0:r.stringValue)==="__vector__"}function Ms(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Oi(t.mapValue.fields,(r,n)=>e.mapValue.fields[r]=Ms(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let r=0;r<(t.arrayValue.values||[]).length;++r)e.arrayValue.values[r]=Ms(t.arrayValue.values[r]);return e}return Object.assign({},t)}function BP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let r=this.value;for(let n=0;n<e.length-1;++n)if(r=(r.mapValue.fields||{})[e.get(n)],!ic(r))return null;return r=(r.mapValue.fields||{})[e.lastSegment()],r||null}}set(e,r){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ms(r)}setAll(e){let r=Je.emptyPath(),n={},i=[];e.forEach((s,l)=>{if(!r.isImmediateParentOf(l)){const c=this.getFieldsMap(r);this.applyChanges(c,n,i),n={},i=[],r=l.popLast()}s?n[l.lastSegment()]=Ms(s):i.push(l.lastSegment())});const o=this.getFieldsMap(r);this.applyChanges(o,n,i)}delete(e){const r=this.field(e.popLast());ic(r)&&r.mapValue.fields&&delete r.mapValue.fields[e.lastSegment()]}isEqual(e){return Cr(this.value,e.value)}getFieldsMap(e){let r=this.value;r.mapValue.fields||(r.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=r.mapValue.fields[e.get(n)];ic(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},r.mapValue.fields[e.get(n)]=i),r=i}return r.mapValue.fields}applyChanges(e,r,n){Oi(r,(i,o)=>e[i]=o);for(const i of n)delete e[i]}clone(){return new Ct(Ms(this.value))}}function YE(t){const e=[];return Oi(t.fields,(r,n)=>{const i=new Je([r]);if(ic(n)){const o=YE(n.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new Vt(e)}/**
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
 */class ft{constructor(e,r,n,i,o,s,l){this.key=e,this.documentType=r,this.version=n,this.readTime=i,this.createTime=o,this.data=s,this.documentState=l}static newInvalidDocument(e){return new ft(e,0,re.min(),re.min(),re.min(),Ct.empty(),0)}static newFoundDocument(e,r,n,i){return new ft(e,1,r,re.min(),n,i,0)}static newNoDocument(e,r){return new ft(e,2,r,re.min(),re.min(),Ct.empty(),0)}static newUnknownDocument(e,r){return new ft(e,3,r,re.min(),re.min(),Ct.empty(),2)}convertToFoundDocument(e,r){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=r,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qc{constructor(e,r){this.position=e,this.inclusive=r}}function v_(t,e,r){let n=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?n=X.comparator(X.fromName(s.referenceValue),r.key):n=xo(s,r.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function y_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let r=0;r<t.position.length;r++)if(!Cr(t.position[r],e.position[r]))return!1;return!0}/**
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
 */class ma{constructor(e,r="asc"){this.field=e,this.dir=r}}function qP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class XE{}class Fe extends XE{constructor(e,r,n){super(),this.field=e,this.op=r,this.value=n}static create(e,r,n){return e.isKeyField()?r==="in"||r==="not-in"?this.createKeyFieldInFilter(e,r,n):new WP(e,r,n):r==="array-contains"?new QP(e,n):r==="in"?new YP(e,n):r==="not-in"?new XP(e,n):r==="array-contains-any"?new JP(e,n):new Fe(e,r,n)}static createKeyFieldInFilter(e,r,n){return r==="in"?new KP(e,n):new GP(e,n)}matches(e){const r=e.data.field(this.field);return this.op==="!="?r!==null&&this.matchesComparison(xo(r,this.value)):r!==null&&xi(this.value)===xi(r)&&this.matchesComparison(xo(r,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pr extends XE{constructor(e,r){super(),this.filters=e,this.op=r,this.ae=null}static create(e,r){return new pr(e,r)}matches(e){return JE(this)?this.filters.find(r=>!r.matches(e))===void 0:this.filters.find(r=>r.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,r)=>e.concat(r.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function JE(t){return t.op==="and"}function ZE(t){return HP(t)&&JE(t)}function HP(t){for(const e of t.filters)if(e instanceof pr)return!1;return!0}function xf(t){if(t instanceof Fe)return t.field.canonicalString()+t.op.toString()+Ao(t.value);if(ZE(t))return t.filters.map(e=>xf(e)).join(",");{const e=t.filters.map(r=>xf(r)).join(",");return`${t.op}(${e})`}}function eI(t,e){return t instanceof Fe?function(n,i){return i instanceof Fe&&n.op===i.op&&n.field.isEqual(i.field)&&Cr(n.value,i.value)}(t,e):t instanceof pr?function(n,i){return i instanceof pr&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,s,l)=>o&&eI(s,i.filters[l]),!0):!1}(t,e):void te()}function tI(t){return t instanceof Fe?function(r){return`${r.field.canonicalString()} ${r.op} ${Ao(r.value)}`}(t):t instanceof pr?function(r){return r.op.toString()+" {"+r.getFilters().map(tI).join(" ,")+"}"}(t):"Filter"}class WP extends Fe{constructor(e,r,n){super(e,r,n),this.key=X.fromName(n.referenceValue)}matches(e){const r=X.comparator(e.key,this.key);return this.matchesComparison(r)}}class KP extends Fe{constructor(e,r){super(e,"in",r),this.keys=rI("in",r)}matches(e){return this.keys.some(r=>r.isEqual(e.key))}}class GP extends Fe{constructor(e,r){super(e,"not-in",r),this.keys=rI("not-in",r)}matches(e){return!this.keys.some(r=>r.isEqual(e.key))}}function rI(t,e){var r;return(((r=e.arrayValue)===null||r===void 0?void 0:r.values)||[]).map(n=>X.fromName(n.referenceValue))}class QP extends Fe{constructor(e,r){super(e,"array-contains",r)}matches(e){const r=e.data.field(this.field);return Tm(r)&&pa(r.arrayValue,this.value)}}class YP extends Fe{constructor(e,r){super(e,"in",r)}matches(e){const r=e.data.field(this.field);return r!==null&&pa(this.value.arrayValue,r)}}class XP extends Fe{constructor(e,r){super(e,"not-in",r)}matches(e){if(pa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const r=e.data.field(this.field);return r!==null&&!pa(this.value.arrayValue,r)}}class JP extends Fe{constructor(e,r){super(e,"array-contains-any",r)}matches(e){const r=e.data.field(this.field);return!(!Tm(r)||!r.arrayValue.values)&&r.arrayValue.values.some(n=>pa(this.value.arrayValue,n))}}/**
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
 */class ZP{constructor(e,r=null,n=[],i=[],o=null,s=null,l=null){this.path=e,this.collectionGroup=r,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=s,this.endAt=l,this.ue=null}}function __(t,e=null,r=[],n=[],i=null,o=null,s=null){return new ZP(t,e,r,n,i,o,s)}function xm(t){const e=ne(t);if(e.ue===null){let r=e.path.canonicalString();e.collectionGroup!==null&&(r+="|cg:"+e.collectionGroup),r+="|f:",r+=e.filters.map(n=>xf(n)).join(","),r+="|ob:",r+=e.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),Eu(e.limit)||(r+="|l:",r+=e.limit),e.startAt&&(r+="|lb:",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(n=>Ao(n)).join(",")),e.endAt&&(r+="|ub:",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(n=>Ao(n)).join(",")),e.ue=r}return e.ue}function Am(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!qP(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(!eI(t.filters[r],e.filters[r]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!y_(t.startAt,e.startAt)&&y_(t.endAt,e.endAt)}function Af(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Uo{constructor(e,r=null,n=[],i=[],o=null,s="F",l=null,c=null){this.path=e,this.collectionGroup=r,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=s,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function eN(t,e,r,n,i,o,s,l){return new Uo(t,e,r,n,i,o,s,l)}function Sm(t){return new Uo(t)}function w_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function nI(t){return t.collectionGroup!==null}function $s(t){const e=ne(t);if(e.ce===null){e.ce=[];const r=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),r.add(o.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let l=new et(Je.comparator);return s.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(o=>{r.has(o.canonicalString())||o.isKeyField()||e.ce.push(new ma(o,n))}),r.has(Je.keyField().canonicalString())||e.ce.push(new ma(Je.keyField(),n))}return e.ce}function Tr(t){const e=ne(t);return e.le||(e.le=tN(e,$s(t))),e.le}function tN(t,e){if(t.limitType==="F")return __(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new ma(i.field,o)});const r=t.endAt?new qc(t.endAt.position,t.endAt.inclusive):null,n=t.startAt?new qc(t.startAt.position,t.startAt.inclusive):null;return __(t.path,t.collectionGroup,e,t.filters,t.limit,r,n)}}function Sf(t,e){const r=t.filters.concat([e]);return new Uo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),r,t.limit,t.limitType,t.startAt,t.endAt)}function Cf(t,e,r){return new Uo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,r,t.startAt,t.endAt)}function Iu(t,e){return Am(Tr(t),Tr(e))&&t.limitType===e.limitType}function iI(t){return`${xm(Tr(t))}|lt:${t.limitType}`}function Bi(t){return`Query(target=${function(r){let n=r.path.canonicalString();return r.collectionGroup!==null&&(n+=" collectionGroup="+r.collectionGroup),r.filters.length>0&&(n+=`, filters: [${r.filters.map(i=>tI(i)).join(", ")}]`),Eu(r.limit)||(n+=", limit: "+r.limit),r.orderBy.length>0&&(n+=`, orderBy: [${r.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),r.startAt&&(n+=", startAt: ",n+=r.startAt.inclusive?"b:":"a:",n+=r.startAt.position.map(i=>Ao(i)).join(",")),r.endAt&&(n+=", endAt: ",n+=r.endAt.inclusive?"a:":"b:",n+=r.endAt.position.map(i=>Ao(i)).join(",")),`Target(${n})`}(Tr(t))}; limitType=${t.limitType})`}function Tu(t,e){return e.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):X.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(t,e)&&function(n,i){for(const o of $s(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,l,c){const u=v_(s,l,c);return s.inclusive?u<=0:u<0}(n.startAt,$s(n),i)||n.endAt&&!function(s,l,c){const u=v_(s,l,c);return s.inclusive?u>=0:u>0}(n.endAt,$s(n),i))}(t,e)}function rN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function oI(t){return(e,r)=>{let n=!1;for(const i of $s(t)){const o=nN(i,e,r);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function nN(t,e,r){const n=t.field.isKeyField()?X.comparator(e.key,r.key):function(o,s,l){const c=s.data.field(o),u=l.data.field(o);return c!==null&&u!==null?xo(c,u):te()}(t.field,e,r);switch(t.dir){case"asc":return n;case"desc":return-1*n;default:return te()}}/**
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
 */class zo{constructor(e,r){this.mapKeyFn=e,this.equalsFn=r,this.inner={},this.innerSize=0}get(e){const r=this.mapKeyFn(e),n=this.inner[r];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,r){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,r]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,r]);i.push([e,r]),this.innerSize++}delete(e){const r=this.mapKeyFn(e),n=this.inner[r];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[r]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Oi(this.inner,(r,n)=>{for(const[i,o]of n)e(i,o)})}isEmpty(){return GE(this.inner)}size(){return this.innerSize}}/**
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
 */const iN=new Ce(X.comparator);function tn(){return iN}const sI=new Ce(X.comparator);function Is(...t){let e=sI;for(const r of t)e=e.insert(r.key,r);return e}function aI(t){let e=sI;return t.forEach((r,n)=>e=e.insert(r,n.overlayedDocument)),e}function li(){return Fs()}function lI(){return Fs()}function Fs(){return new zo(t=>t.toString(),(t,e)=>t.isEqual(e))}const oN=new Ce(X.comparator),sN=new et(X.comparator);function ae(...t){let e=sN;for(const r of t)e=e.add(r);return e}const aN=new et(he);function lN(){return aN}/**
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
 */function Cm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bc(e)?"-0":e}}function cI(t){return{integerValue:""+t}}function cN(t,e){return FP(e)?cI(e):Cm(t,e)}/**
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
 */class xu{constructor(){this._=void 0}}function uN(t,e,r){return t instanceof ga?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Em(o)&&(o=Im(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(r,e):t instanceof va?dI(t,e):t instanceof ya?hI(t,e):function(i,o){const s=uI(i,o),l=b_(s)+b_(i.Pe);return Tf(s)&&Tf(i.Pe)?cI(l):Cm(i.serializer,l)}(t,e)}function dN(t,e,r){return t instanceof va?dI(t,e):t instanceof ya?hI(t,e):r}function uI(t,e){return t instanceof Hc?function(n){return Tf(n)||function(o){return!!o&&"doubleValue"in o}(n)}(e)?e:{integerValue:0}:null}class ga extends xu{}class va extends xu{constructor(e){super(),this.elements=e}}function dI(t,e){const r=fI(e);for(const n of t.elements)r.some(i=>Cr(i,n))||r.push(n);return{arrayValue:{values:r}}}class ya extends xu{constructor(e){super(),this.elements=e}}function hI(t,e){let r=fI(e);for(const n of t.elements)r=r.filter(i=>!Cr(i,n));return{arrayValue:{values:r}}}class Hc extends xu{constructor(e,r){super(),this.serializer=e,this.Pe=r}}function b_(t){return De(t.integerValue||t.doubleValue)}function fI(t){return Tm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class hN{constructor(e,r){this.field=e,this.transform=r}}function fN(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof va&&i instanceof va||n instanceof ya&&i instanceof ya?To(n.elements,i.elements,Cr):n instanceof Hc&&i instanceof Hc?Cr(n.Pe,i.Pe):n instanceof ga&&i instanceof ga}(t.transform,e.transform)}class pN{constructor(e,r){this.version=e,this.transformResults=r}}class Kt{constructor(e,r){this.updateTime=e,this.exists=r}static none(){return new Kt}static exists(e){return new Kt(void 0,e)}static updateTime(e){return new Kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Au{}function pI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new km(t.key,Kt.none()):new Va(t.key,t.data,Kt.none());{const r=t.data,n=Ct.empty();let i=new et(Je.comparator);for(let o of e.fields)if(!i.has(o)){let s=r.field(o);s===null&&o.length>1&&(o=o.popLast(),s=r.field(o)),s===null?n.delete(o):n.set(o,s),i=i.add(o)}return new Hn(t.key,n,new Vt(i.toArray()),Kt.none())}}function mN(t,e,r){t instanceof Va?function(i,o,s){const l=i.value.clone(),c=I_(i.fieldTransforms,o,s.transformResults);l.setAll(c),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,r):t instanceof Hn?function(i,o,s){if(!oc(i.precondition,o))return void o.convertToUnknownDocument(s.version);const l=I_(i.fieldTransforms,o,s.transformResults),c=o.data;c.setAll(mI(i)),c.setAll(l),o.convertToFoundDocument(s.version,c).setHasCommittedMutations()}(t,e,r):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,r)}function Us(t,e,r,n){return t instanceof Va?function(o,s,l,c){if(!oc(o.precondition,s))return l;const u=o.value.clone(),f=T_(o.fieldTransforms,c,s);return u.setAll(f),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,r,n):t instanceof Hn?function(o,s,l,c){if(!oc(o.precondition,s))return l;const u=T_(o.fieldTransforms,c,s),f=s.data;return f.setAll(mI(o)),f.setAll(u),s.convertToFoundDocument(s.version,f).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(p=>p.field))}(t,e,r,n):function(o,s,l){return oc(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):l}(t,e,r)}function gN(t,e){let r=null;for(const n of t.fieldTransforms){const i=e.data.field(n.field),o=uI(n.transform,i||null);o!=null&&(r===null&&(r=Ct.empty()),r.set(n.field,o))}return r||null}function E_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&To(n,i,(o,s)=>fN(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Va extends Au{constructor(e,r,n,i=[]){super(),this.key=e,this.value=r,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Hn extends Au{constructor(e,r,n,i,o=[]){super(),this.key=e,this.data=r,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function mI(t){const e=new Map;return t.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){const n=t.data.field(r);e.set(r,n)}}),e}function I_(t,e,r){const n=new Map;me(t.length===r.length);for(let i=0;i<r.length;i++){const o=t[i],s=o.transform,l=e.data.field(o.field);n.set(o.field,dN(s,l,r[i]))}return n}function T_(t,e,r){const n=new Map;for(const i of t){const o=i.transform,s=r.data.field(i.field);n.set(i.field,uN(o,s,e))}return n}class km extends Au{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vN extends Au{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class yN{constructor(e,r,n,i){this.batchId=e,this.localWriteTime=r,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,r){const n=r.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&mN(o,e,n[i])}}applyToLocalView(e,r){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(r=Us(n,e,r,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(r=Us(n,e,r,this.localWriteTime));return r}applyToLocalDocumentSet(e,r){const n=lI();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let l=this.applyToLocalView(s,o.mutatedFields);l=r.has(i.key)?null:l;const c=pI(s,l);c!==null&&n.set(i.key,c),s.isValidDocument()||s.convertToNoDocument(re.min())}),n}keys(){return this.mutations.reduce((e,r)=>e.add(r.key),ae())}isEqual(e){return this.batchId===e.batchId&&To(this.mutations,e.mutations,(r,n)=>E_(r,n))&&To(this.baseMutations,e.baseMutations,(r,n)=>E_(r,n))}}class Rm{constructor(e,r,n,i){this.batch=e,this.commitVersion=r,this.mutationResults=n,this.docVersions=i}static from(e,r,n){me(e.mutations.length===n.length);let i=function(){return oN}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,n[s].version);return new Rm(e,r,n,i)}}/**
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
 */class _N{constructor(e,r){this.largestBatchId=e,this.mutation=r}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class wN{constructor(e,r){this.count=e,this.unchangedNames=r}}/**
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
 */var Me,ce;function bN(t){switch(t){default:return te();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function gI(t){if(t===void 0)return en("GRPC error has no .code"),L.UNKNOWN;switch(t){case Me.OK:return L.OK;case Me.CANCELLED:return L.CANCELLED;case Me.UNKNOWN:return L.UNKNOWN;case Me.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Me.INTERNAL:return L.INTERNAL;case Me.UNAVAILABLE:return L.UNAVAILABLE;case Me.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Me.NOT_FOUND:return L.NOT_FOUND;case Me.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Me.ABORTED:return L.ABORTED;case Me.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Me.DATA_LOSS:return L.DATA_LOSS;default:return te()}}(ce=Me||(Me={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function EN(){return new TextEncoder}/**
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
 */const IN=new fi([4294967295,4294967295],0);function x_(t){const e=EN().encode(t),r=new UE;return r.update(e),new Uint8Array(r.digest())}function A_(t){const e=new DataView(t.buffer),r=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new fi([r,n],0),new fi([i,o],0)]}class Pm{constructor(e,r,n){if(this.bitmap=e,this.padding=r,this.hashCount=n,r<0||r>=8)throw new Ts(`Invalid padding: ${r}`);if(n<0)throw new Ts(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Ts(`Invalid hash count: ${n}`);if(e.length===0&&r!==0)throw new Ts(`Invalid padding when bitmap length is 0: ${r}`);this.Ie=8*e.length-r,this.Te=fi.fromNumber(this.Ie)}Ee(e,r,n){let i=e.add(r.multiply(fi.fromNumber(n)));return i.compare(IN)===1&&(i=new fi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const r=x_(e),[n,i]=A_(r);for(let o=0;o<this.hashCount;o++){const s=this.Ee(n,i,o);if(!this.de(s))return!1}return!0}static create(e,r,n){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new Pm(o,i,r);return n.forEach(l=>s.insert(l)),s}insert(e){if(this.Ie===0)return;const r=x_(e),[n,i]=A_(r);for(let o=0;o<this.hashCount;o++){const s=this.Ee(n,i,o);this.Ae(s)}}Ae(e){const r=Math.floor(e/8),n=e%8;this.bitmap[r]|=1<<n}}class Ts extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Su{constructor(e,r,n,i,o){this.snapshotVersion=e,this.targetChanges=r,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,r,n){const i=new Map;return i.set(e,Ma.createSynthesizedTargetChangeForCurrentChange(e,r,n)),new Su(re.min(),i,new Ce(he),tn(),ae())}}class Ma{constructor(e,r,n,i,o){this.resumeToken=e,this.current=r,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,r,n){return new Ma(n,r,ae(),ae(),ae())}}/**
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
 */class sc{constructor(e,r,n,i){this.Re=e,this.removedTargetIds=r,this.key=n,this.Ve=i}}class vI{constructor(e,r){this.targetId=e,this.me=r}}class yI{constructor(e,r,n=rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=r,this.resumeToken=n,this.cause=i}}class S_{constructor(){this.fe=0,this.ge=k_(),this.pe=rt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ae(),r=ae(),n=ae();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:r=r.add(i);break;case 1:n=n.add(i);break;default:te()}}),new Ma(this.pe,this.ye,e,r,n)}Ce(){this.we=!1,this.ge=k_()}Fe(e,r){this.we=!0,this.ge=this.ge.insert(e,r)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class TN{constructor(e){this.Le=e,this.Be=new Map,this.ke=tn(),this.qe=C_(),this.Qe=new Ce(he)}Ke(e){for(const r of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(r,e.Ve):this.Ue(r,e.key,e.Ve);for(const r of e.removedTargetIds)this.Ue(r,e.key,e.Ve)}We(e){this.forEachTarget(e,r=>{const n=this.Ge(r);switch(e.state){case 0:this.ze(r)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(r);break;case 3:this.ze(r)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(r)&&(this.je(r),n.De(e.resumeToken));break;default:te()}})}forEachTarget(e,r){e.targetIds.length>0?e.targetIds.forEach(r):this.Be.forEach((n,i)=>{this.ze(i)&&r(i)})}He(e){const r=e.targetId,n=e.me.count,i=this.Je(r);if(i){const o=i.target;if(Af(o))if(n===0){const s=new X(o.path);this.Ue(r,s,ft.newNoDocument(s,re.min()))}else me(n===1);else{const s=this.Ye(r);if(s!==n){const l=this.Ze(e),c=l?this.Xe(l,e,s):1;if(c!==0){this.je(r);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(r,u)}}}}}Ze(e){const r=e.me.unchangedNames;if(!r||!r.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=r;let s,l;try{s=Ti(n).toUint8Array()}catch(c){if(c instanceof QE)return Io("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Pm(s,i,o)}catch(c){return Io(c instanceof Ts?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,r,n){return r.me.count===n-this.nt(e,r.targetId)?0:2}nt(e,r){const n=this.Le.getRemoteKeysForTarget(r);let i=0;return n.forEach(o=>{const s=this.Le.tt(),l=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.Ue(r,o,null),i++)}),i}rt(e){const r=new Map;this.Be.forEach((o,s)=>{const l=this.Je(s);if(l){if(o.current&&Af(l.target)){const c=new X(l.target.path);this.ke.get(c)!==null||this.it(s,c)||this.Ue(s,c,ft.newNoDocument(c,e))}o.be&&(r.set(s,o.ve()),o.Ce())}});let n=ae();this.qe.forEach((o,s)=>{let l=!0;s.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new Su(e,r,this.Qe,this.ke,n);return this.ke=tn(),this.qe=C_(),this.Qe=new Ce(he),i}$e(e,r){if(!this.ze(e))return;const n=this.it(e,r.key)?2:0;this.Ge(e).Fe(r.key,n),this.ke=this.ke.insert(r.key,r),this.qe=this.qe.insert(r.key,this.st(r.key).add(e))}Ue(e,r,n){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,r)?i.Fe(r,1):i.Me(r),this.qe=this.qe.insert(r,this.st(r).delete(e)),n&&(this.ke=this.ke.insert(r,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const r=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let r=this.Be.get(e);return r||(r=new S_,this.Be.set(e,r)),r}st(e){let r=this.qe.get(e);return r||(r=new et(he),this.qe=this.qe.insert(e,r)),r}ze(e){const r=this.Je(e)!==null;return r||G("WatchChangeAggregator","Detected inactive target",e),r}Je(e){const r=this.Be.get(e);return r&&r.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new S_),this.Le.getRemoteKeysForTarget(e).forEach(r=>{this.Ue(e,r,null)})}it(e,r){return this.Le.getRemoteKeysForTarget(e).has(r)}}function C_(){return new Ce(X.comparator)}function k_(){return new Ce(X.comparator)}const xN={asc:"ASCENDING",desc:"DESCENDING"},AN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SN={and:"AND",or:"OR"};class CN{constructor(e,r){this.databaseId=e,this.useProto3Json=r}}function kf(t,e){return t.useProto3Json||Eu(e)?e:{value:e}}function Wc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _I(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kN(t,e){return Wc(t,e.toTimestamp())}function xr(t){return me(!!t),re.fromTimestamp(function(r){const n=Mn(r);return new Be(n.seconds,n.nanos)}(t))}function Nm(t,e){return Rf(t,e).canonicalString()}function Rf(t,e){const r=function(i){return new be(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?r:r.child(e)}function wI(t){const e=be.fromString(t);return me(xI(e)),e}function Pf(t,e){return Nm(t.databaseId,e.path)}function Yd(t,e){const r=wI(e);if(r.get(1)!==t.databaseId.projectId)throw new K(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+t.databaseId.projectId);if(r.get(3)!==t.databaseId.database)throw new K(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+t.databaseId.database);return new X(EI(r))}function bI(t,e){return Nm(t.databaseId,e)}function RN(t){const e=wI(t);return e.length===4?be.emptyPath():EI(e)}function Nf(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function EI(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function R_(t,e,r){return{name:Pf(t,e),fields:r.value.mapValue.fields}}function PN(t,e){let r;if("targetChange"in e){e.targetChange;const n=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(u,f){return u.useProto3Json?(me(f===void 0||typeof f=="string"),rt.fromBase64String(f||"")):(me(f===void 0||f instanceof Buffer||f instanceof Uint8Array),rt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,l=s&&function(u){const f=u.code===void 0?L.UNKNOWN:gI(u.code);return new K(f,u.message||"")}(s);r=new yI(n,i,o,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=Yd(t,n.document.name),o=xr(n.document.updateTime),s=n.document.createTime?xr(n.document.createTime):re.min(),l=new Ct({mapValue:{fields:n.document.fields}}),c=ft.newFoundDocument(i,o,s,l),u=n.targetIds||[],f=n.removedTargetIds||[];r=new sc(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=Yd(t,n.document),o=n.readTime?xr(n.readTime):re.min(),s=ft.newNoDocument(i,o),l=n.removedTargetIds||[];r=new sc([],l,s.key,s)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=Yd(t,n.document),o=n.removedTargetIds||[];r=new sc([],o,i,null)}else{if(!("filter"in e))return te();{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,s=new wN(i,o),l=n.targetId;r=new vI(l,s)}}return r}function NN(t,e){let r;if(e instanceof Va)r={update:R_(t,e.key,e.value)};else if(e instanceof km)r={delete:Pf(t,e.key)};else if(e instanceof Hn)r={update:R_(t,e.key,e.data),updateMask:zN(e.fieldMask)};else{if(!(e instanceof vN))return te();r={verify:Pf(t,e.key)}}return e.fieldTransforms.length>0&&(r.updateTransforms=e.fieldTransforms.map(n=>function(o,s){const l=s.transform;if(l instanceof ga)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof va)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ya)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Hc)return{fieldPath:s.field.canonicalString(),increment:l.Pe};throw te()}(0,n))),e.precondition.isNone||(r.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:kN(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:te()}(t,e.precondition)),r}function ON(t,e){return t&&t.length>0?(me(e!==void 0),t.map(r=>function(i,o){let s=i.updateTime?xr(i.updateTime):xr(o);return s.isEqual(re.min())&&(s=xr(o)),new pN(s,i.transformResults||[])}(r,e))):[]}function DN(t,e){return{documents:[bI(t,e.path)]}}function LN(t,e){const r={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,r.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),r.structuredQuery.from=[{collectionId:n.lastSegment()}]),r.parent=bI(t,i);const o=function(u){if(u.length!==0)return TI(pr.create(u,"and"))}(e.filters);o&&(r.structuredQuery.where=o);const s=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:qi(m.field),direction:$N(m.dir)}}(f))}(e.orderBy);s&&(r.structuredQuery.orderBy=s);const l=kf(t,e.limit);return l!==null&&(r.structuredQuery.limit=l),e.startAt&&(r.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(r.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:r,parent:i}}function VN(t){let e=RN(t.parent);const r=t.structuredQuery,n=r.from?r.from.length:0;let i=null;if(n>0){me(n===1);const f=r.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let o=[];r.where&&(o=function(p){const m=II(p);return m instanceof pr&&ZE(m)?m.getFilters():[m]}(r.where));let s=[];r.orderBy&&(s=function(p){return p.map(m=>function(S){return new ma(Hi(S.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(r.orderBy));let l=null;r.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Eu(m)?null:m}(r.limit));let c=null;r.startAt&&(c=function(p){const m=!!p.before,T=p.values||[];return new qc(T,m)}(r.startAt));let u=null;return r.endAt&&(u=function(p){const m=!p.before,T=p.values||[];return new qc(T,m)}(r.endAt)),eN(e,i,s,o,l,"F",c,u)}function MN(t,e){const r=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te()}}(e.purpose);return r==null?null:{"goog-listen-tags":r}}function II(t){return t.unaryFilter!==void 0?function(r){switch(r.unaryFilter.op){case"IS_NAN":const n=Hi(r.unaryFilter.field);return Fe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Hi(r.unaryFilter.field);return Fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Hi(r.unaryFilter.field);return Fe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Hi(r.unaryFilter.field);return Fe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(t):t.fieldFilter!==void 0?function(r){return Fe.create(Hi(r.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(r.fieldFilter.op),r.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(r){return pr.create(r.compositeFilter.filters.map(n=>II(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return te()}}(r.compositeFilter.op))}(t):te()}function $N(t){return xN[t]}function FN(t){return AN[t]}function UN(t){return SN[t]}function qi(t){return{fieldPath:t.canonicalString()}}function Hi(t){return Je.fromServerFormat(t.fieldPath)}function TI(t){return t instanceof Fe?function(r){if(r.op==="=="){if(g_(r.value))return{unaryFilter:{field:qi(r.field),op:"IS_NAN"}};if(m_(r.value))return{unaryFilter:{field:qi(r.field),op:"IS_NULL"}}}else if(r.op==="!="){if(g_(r.value))return{unaryFilter:{field:qi(r.field),op:"IS_NOT_NAN"}};if(m_(r.value))return{unaryFilter:{field:qi(r.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qi(r.field),op:FN(r.op),value:r.value}}}(t):t instanceof pr?function(r){const n=r.getFilters().map(i=>TI(i));return n.length===1?n[0]:{compositeFilter:{op:UN(r.op),filters:n}}}(t):te()}function zN(t){const e=[];return t.fields.forEach(r=>e.push(r.canonicalString())),{fieldPaths:e}}function xI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class En{constructor(e,r,n,i,o=re.min(),s=re.min(),l=rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=r,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new En(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,r){return new En(this.target,this.targetId,this.purpose,this.sequenceNumber,r,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new En(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new En(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class jN{constructor(e){this.ct=e}}function BN(t){const e=VN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Cf(e,e.limit,"L"):e}/**
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
 */class qN{constructor(){this.un=new HN}addToCollectionParentIndex(e,r){return this.un.add(r),V.resolve()}getCollectionParents(e,r){return V.resolve(this.un.getEntries(r))}addFieldIndex(e,r){return V.resolve()}deleteFieldIndex(e,r){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,r){return V.resolve()}getDocumentsMatchingTarget(e,r){return V.resolve(null)}getIndexType(e,r){return V.resolve(0)}getFieldIndexes(e,r){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,r){return V.resolve(Vn.min())}getMinOffsetFromCollectionGroup(e,r){return V.resolve(Vn.min())}updateCollectionGroup(e,r,n){return V.resolve()}updateIndexEntries(e,r){return V.resolve()}}class HN{constructor(){this.index={}}add(e){const r=e.lastSegment(),n=e.popLast(),i=this.index[r]||new et(be.comparator),o=!i.has(n);return this.index[r]=i.add(n),o}has(e){const r=e.lastSegment(),n=e.popLast(),i=this.index[r];return i&&i.has(n)}getEntries(e){return(this.index[e]||new et(be.comparator)).toArray()}}/**
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
 */class So{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new So(0)}static kn(){return new So(-1)}}/**
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
 */class WN{constructor(){this.changes=new zo(e=>e.toString(),(e,r)=>e.isEqual(r)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,r){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(r))}getEntry(e,r){this.assertNotApplied();const n=this.changes.get(r);return n!==void 0?V.resolve(n):this.getFromCache(e,r)}getEntries(e,r){return this.getAllFromCache(e,r)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class KN{constructor(e,r){this.overlayedDocument=e,this.mutatedFields=r}}/**
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
 */class GN{constructor(e,r,n,i){this.remoteDocumentCache=e,this.mutationQueue=r,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,r){let n=null;return this.documentOverlayCache.getOverlay(e,r).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,r))).next(i=>(n!==null&&Us(n.mutation,i,Vt.empty(),Be.now()),i))}getDocuments(e,r){return this.remoteDocumentCache.getEntries(e,r).next(n=>this.getLocalViewOfDocuments(e,n,ae()).next(()=>n))}getLocalViewOfDocuments(e,r,n=ae()){const i=li();return this.populateOverlays(e,i,r).next(()=>this.computeViews(e,r,i,n).next(o=>{let s=Is();return o.forEach((l,c)=>{s=s.insert(l,c.overlayedDocument)}),s}))}getOverlayedDocuments(e,r){const n=li();return this.populateOverlays(e,n,r).next(()=>this.computeViews(e,r,n,ae()))}populateOverlays(e,r,n){const i=[];return n.forEach(o=>{r.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,l)=>{r.set(s,l)})})}computeViews(e,r,n,i){let o=tn();const s=Fs(),l=function(){return Fs()}();return r.forEach((c,u)=>{const f=n.get(u.key);i.has(u.key)&&(f===void 0||f.mutation instanceof Hn)?o=o.insert(u.key,u):f!==void 0?(s.set(u.key,f.mutation.getFieldMask()),Us(f.mutation,u,f.mutation.getFieldMask(),Be.now())):s.set(u.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,o).next(c=>(c.forEach((u,f)=>s.set(u,f)),r.forEach((u,f)=>{var p;return l.set(u,new KN(f,(p=s.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,r){const n=Fs();let i=new Ce((s,l)=>s-l),o=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,r).next(s=>{for(const l of s)l.keys().forEach(c=>{const u=r.get(c);if(u===null)return;let f=n.get(c)||Vt.empty();f=l.applyToLocalView(u,f),n.set(c,f);const p=(i.get(l.batchId)||ae()).add(c);i=i.insert(l.batchId,p)})}).next(()=>{const s=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=lI();f.forEach(m=>{if(!o.has(m)){const T=pI(r.get(m),n.get(m));T!==null&&p.set(m,T),o=o.add(m)}}),s.push(this.documentOverlayCache.saveOverlays(e,u,p))}return V.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,r){return this.remoteDocumentCache.getEntries(e,r).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,r,n,i){return function(s){return X.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(r)?this.getDocumentsMatchingDocumentQuery(e,r.path):nI(r)?this.getDocumentsMatchingCollectionGroupQuery(e,r,n,i):this.getDocumentsMatchingCollectionQuery(e,r,n,i)}getNextDocuments(e,r,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,r,n,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,r,n.largestBatchId,i-o.size):V.resolve(li());let l=-1,c=o;return s.next(u=>V.forEach(u,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),o.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,u,o)).next(()=>this.computeViews(e,c,u,ae())).next(f=>({batchId:l,changes:aI(f)})))})}getDocumentsMatchingDocumentQuery(e,r){return this.getDocument(e,new X(r)).next(n=>{let i=Is();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,r,n,i){const o=r.collectionGroup;let s=Is();return this.indexManager.getCollectionParents(e,o).next(l=>V.forEach(l,c=>{const u=function(p,m){return new Uo(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(r,c.child(o));return this.getDocumentsMatchingCollectionQuery(e,u,n,i).next(f=>{f.forEach((p,m)=>{s=s.insert(p,m)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,r,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,r.path,n.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,r,n,o,i))).next(s=>{o.forEach((c,u)=>{const f=u.getKey();s.get(f)===null&&(s=s.insert(f,ft.newInvalidDocument(f)))});let l=Is();return s.forEach((c,u)=>{const f=o.get(c);f!==void 0&&Us(f.mutation,u,Vt.empty(),Be.now()),Tu(r,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class QN{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,r){return V.resolve(this.hr.get(r))}saveBundleMetadata(e,r){return this.hr.set(r.id,function(i){return{id:i.id,version:i.version,createTime:xr(i.createTime)}}(r)),V.resolve()}getNamedQuery(e,r){return V.resolve(this.Pr.get(r))}saveNamedQuery(e,r){return this.Pr.set(r.name,function(i){return{name:i.name,query:BN(i.bundledQuery),readTime:xr(i.readTime)}}(r)),V.resolve()}}/**
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
 */class YN{constructor(){this.overlays=new Ce(X.comparator),this.Ir=new Map}getOverlay(e,r){return V.resolve(this.overlays.get(r))}getOverlays(e,r){const n=li();return V.forEach(r,i=>this.getOverlay(e,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(e,r,n){return n.forEach((i,o)=>{this.ht(e,r,o)}),V.resolve()}removeOverlaysForBatchId(e,r,n){const i=this.Ir.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(n)),V.resolve()}getOverlaysForCollection(e,r,n){const i=li(),o=r.length+1,s=new X(r.child("")),l=this.overlays.getIteratorFrom(s);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!r.isPrefixOf(u.path))break;u.path.length===o&&c.largestBatchId>n&&i.set(c.getKey(),c)}return V.resolve(i)}getOverlaysForCollectionGroup(e,r,n,i){let o=new Ce((u,f)=>u-f);const s=this.overlays.getIterator();for(;s.hasNext();){const u=s.getNext().value;if(u.getKey().getCollectionGroup()===r&&u.largestBatchId>n){let f=o.get(u.largestBatchId);f===null&&(f=li(),o=o.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=li(),c=o.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=i)););return V.resolve(l)}ht(e,r,n){const i=this.overlays.get(n.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(n.key,new _N(r,n));let o=this.Ir.get(r);o===void 0&&(o=ae(),this.Ir.set(r,o)),this.Ir.set(r,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class XN{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,r){return this.sessionToken=r,V.resolve()}}/**
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
 */class Om{constructor(){this.Tr=new et(qe.Er),this.dr=new et(qe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,r){const n=new qe(e,r);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,r){e.forEach(n=>this.addReference(n,r))}removeReference(e,r){this.Vr(new qe(e,r))}mr(e,r){e.forEach(n=>this.removeReference(n,r))}gr(e){const r=new X(new be([])),n=new qe(r,e),i=new qe(r,e+1),o=[];return this.dr.forEachInRange([n,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const r=new X(new be([])),n=new qe(r,e),i=new qe(r,e+1);let o=ae();return this.dr.forEachInRange([n,i],s=>{o=o.add(s.key)}),o}containsKey(e){const r=new qe(e,0),n=this.Tr.firstAfterOrEqual(r);return n!==null&&e.isEqual(n.key)}}class qe{constructor(e,r){this.key=e,this.wr=r}static Er(e,r){return X.comparator(e.key,r.key)||he(e.wr,r.wr)}static Ar(e,r){return he(e.wr,r.wr)||X.comparator(e.key,r.key)}}/**
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
 */class JN{constructor(e,r){this.indexManager=e,this.referenceDelegate=r,this.mutationQueue=[],this.Sr=1,this.br=new et(qe.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,r,n,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new yN(o,r,n,i);this.mutationQueue.push(s);for(const l of i)this.br=this.br.add(new qe(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(s)}lookupMutationBatch(e,r){return V.resolve(this.Dr(r))}getNextMutationBatchAfterBatchId(e,r){const n=r+1,i=this.vr(n),o=i<0?0:i;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,r){const n=new qe(r,0),i=new qe(r,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([n,i],s=>{const l=this.Dr(s.wr);o.push(l)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,r){let n=new et(he);return r.forEach(i=>{const o=new qe(i,0),s=new qe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],l=>{n=n.add(l.wr)})}),V.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,r){const n=r.path,i=n.length+1;let o=n;X.isDocumentKey(o)||(o=o.child(""));const s=new qe(new X(o),0);let l=new et(he);return this.br.forEachWhile(c=>{const u=c.key.path;return!!n.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.wr)),!0)},s),V.resolve(this.Cr(l))}Cr(e){const r=[];return e.forEach(n=>{const i=this.Dr(n);i!==null&&r.push(i)}),r}removeMutationBatch(e,r){me(this.Fr(r.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return V.forEach(r.mutations,i=>{const o=new qe(i.key,r.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,r){const n=new qe(r,0),i=this.br.firstAfterOrEqual(n);return V.resolve(r.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,r){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const r=this.vr(e);return r<0||r>=this.mutationQueue.length?null:this.mutationQueue[r]}}/**
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
 */class ZN{constructor(e){this.Mr=e,this.docs=function(){return new Ce(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,r){const n=r.key,i=this.docs.get(n),o=i?i.size:0,s=this.Mr(r);return this.docs=this.docs.insert(n,{document:r.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const r=this.docs.get(e);r&&(this.docs=this.docs.remove(e),this.size-=r.size)}getEntry(e,r){const n=this.docs.get(r);return V.resolve(n?n.document.mutableCopy():ft.newInvalidDocument(r))}getEntries(e,r){let n=tn();return r.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():ft.newInvalidDocument(i))}),V.resolve(n)}getDocumentsMatchingQuery(e,r,n,i){let o=tn();const s=r.path,l=new X(s.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!s.isPrefixOf(u.path))break;u.path.length>s.length+1||LP(DP(f),n)<=0||(i.has(f.key)||Tu(r,f))&&(o=o.insert(f.key,f.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(e,r,n,i){te()}Or(e,r){return V.forEach(this.docs,n=>r(n))}newChangeBuffer(e){return new e2(this)}getSize(e){return V.resolve(this.size)}}class e2 extends WN{constructor(e){super(),this.cr=e}applyChanges(e){const r=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?r.push(this.cr.addEntry(e,i)):this.cr.removeEntry(n)}),V.waitFor(r)}getFromCache(e,r){return this.cr.getEntry(e,r)}getAllFromCache(e,r){return this.cr.getEntries(e,r)}}/**
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
 */class t2{constructor(e){this.persistence=e,this.Nr=new zo(r=>xm(r),Am),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Om,this.targetCount=0,this.kr=So.Bn()}forEachTarget(e,r){return this.Nr.forEach((n,i)=>r(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,r,n){return n&&(this.lastRemoteSnapshotVersion=n),r>this.Lr&&(this.Lr=r),V.resolve()}Kn(e){this.Nr.set(e.target,e);const r=e.targetId;r>this.highestTargetId&&(this.kr=new So(r),this.highestTargetId=r),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,r){return this.Kn(r),this.targetCount+=1,V.resolve()}updateTargetData(e,r){return this.Kn(r),V.resolve()}removeTargetData(e,r){return this.Nr.delete(r.target),this.Br.gr(r.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,r,n){let i=0;const o=[];return this.Nr.forEach((s,l)=>{l.sequenceNumber<=r&&n.get(l.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(o).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,r){const n=this.Nr.get(r)||null;return V.resolve(n)}addMatchingKeys(e,r,n){return this.Br.Rr(r,n),V.resolve()}removeMatchingKeys(e,r,n){this.Br.mr(r,n);const i=this.persistence.referenceDelegate,o=[];return i&&r.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),V.waitFor(o)}removeMatchingKeysForTargetId(e,r){return this.Br.gr(r),V.resolve()}getMatchingKeysForTargetId(e,r){const n=this.Br.yr(r);return V.resolve(n)}containsKey(e,r){return V.resolve(this.Br.containsKey(r))}}/**
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
 */class r2{constructor(e,r){this.qr={},this.overlays={},this.Qr=new bm(0),this.Kr=!1,this.Kr=!0,this.$r=new XN,this.referenceDelegate=e(this),this.Ur=new t2(this),this.indexManager=new qN,this.remoteDocumentCache=function(i){return new ZN(i)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new jN(r),this.Gr=new QN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let r=this.overlays[e.toKey()];return r||(r=new YN,this.overlays[e.toKey()]=r),r}getMutationQueue(e,r){let n=this.qr[e.toKey()];return n||(n=new JN(r,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,r,n){G("MemoryPersistence","Starting transaction:",e);const i=new n2(this.Qr.next());return this.referenceDelegate.zr(),n(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,r){return V.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,r)))}}class n2 extends MP{constructor(e){super(),this.currentSequenceNumber=e}}class Dm{constructor(e){this.persistence=e,this.Jr=new Om,this.Yr=null}static Zr(e){return new Dm(e)}get Xr(){if(this.Yr)return this.Yr;throw te()}addReference(e,r,n){return this.Jr.addReference(n,r),this.Xr.delete(n.toString()),V.resolve()}removeReference(e,r,n){return this.Jr.removeReference(n,r),this.Xr.add(n.toString()),V.resolve()}markPotentiallyOrphaned(e,r){return this.Xr.add(r.toString()),V.resolve()}removeTarget(e,r){this.Jr.gr(r.targetId).forEach(i=>this.Xr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,r.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>n.removeTargetData(e,r))}zr(){this.Yr=new Set}jr(e){const r=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,n=>{const i=X.fromPath(n);return this.ei(e,i).next(o=>{o||r.removeEntry(i,re.min())})}).next(()=>(this.Yr=null,r.apply(e)))}updateLimboDocument(e,r){return this.ei(e,r).next(n=>{n?this.Xr.delete(r.toString()):this.Xr.add(r.toString())})}Wr(e){return 0}ei(e,r){return V.or([()=>V.resolve(this.Jr.containsKey(r)),()=>this.persistence.getTargetCache().containsKey(e,r),()=>this.persistence.Hr(e,r)])}}/**
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
 */class Lm{constructor(e,r,n,i){this.targetId=e,this.fromCache=r,this.$i=n,this.Ui=i}static Wi(e,r){let n=ae(),i=ae();for(const o of r.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Lm(e,r.fromCache,n,i)}}/**
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
 */class i2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class o2{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return QC()?8:$P(gt())>0?6:4}()}initialize(e,r){this.Ji=e,this.indexManager=r,this.Gi=!0}getDocumentsMatchingQuery(e,r,n,i){const o={result:null};return this.Yi(e,r).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,r,i,n).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new i2;return this.Xi(e,r,s).next(l=>{if(o.result=l,this.zi)return this.es(e,r,s,l.size)})}).next(()=>o.result)}es(e,r,n,i){return n.documentReadCount<this.ji?(hs()<=le.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Bi(r),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(hs()<=le.DEBUG&&G("QueryEngine","Query:",Bi(r),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(hs()<=le.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Bi(r),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tr(r))):V.resolve())}Yi(e,r){if(w_(r))return V.resolve(null);let n=Tr(r);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(r.limit!==null&&i===1&&(r=Cf(r,null,"F"),n=Tr(r)),this.indexManager.getDocumentsMatchingTarget(e,n).next(o=>{const s=ae(...o);return this.Ji.getDocuments(e,s).next(l=>this.indexManager.getMinOffset(e,n).next(c=>{const u=this.ts(r,l);return this.ns(r,u,s,c.readTime)?this.Yi(e,Cf(r,null,"F")):this.rs(e,u,r,c)}))})))}Zi(e,r,n,i){return w_(r)||i.isEqual(re.min())?V.resolve(null):this.Ji.getDocuments(e,n).next(o=>{const s=this.ts(r,o);return this.ns(r,s,n,i)?V.resolve(null):(hs()<=le.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Bi(r)),this.rs(e,s,r,OP(i,-1)).next(l=>l))})}ts(e,r){let n=new et(oI(e));return r.forEach((i,o)=>{Tu(e,o)&&(n=n.add(o))}),n}ns(e,r,n,i){if(e.limit===null)return!1;if(n.size!==r.size)return!0;const o=e.limitType==="F"?r.last():r.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,r,n){return hs()<=le.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Bi(r)),this.Ji.getDocumentsMatchingQuery(e,r,Vn.min(),n)}rs(e,r,n,i){return this.Ji.getDocumentsMatchingQuery(e,n,i).next(o=>(r.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
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
 */class s2{constructor(e,r,n,i){this.persistence=e,this.ss=r,this.serializer=i,this.os=new Ce(he),this._s=new zo(o=>xm(o),Am),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new GN(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",r=>e.collect(r,this.os))}}function a2(t,e,r,n){return new s2(t,e,r,n)}async function AI(t,e){const r=ne(t);return await r.persistence.runTransaction("Handle user change","readonly",n=>{let i;return r.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,r.ls(e),r.mutationQueue.getAllMutationBatches(n))).next(o=>{const s=[],l=[];let c=ae();for(const u of i){s.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of o){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return r.localDocuments.getDocuments(n,c).next(u=>({hs:u,removedBatchIds:s,addedBatchIds:l}))})})}function l2(t,e){const r=ne(t);return r.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),o=r.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const p=u.batch,m=p.keys();let T=V.resolve();return m.forEach(S=>{T=T.next(()=>f.getEntry(c,S)).next(P=>{const N=u.docVersions.get(S);me(N!==null),P.version.compareTo(N)<0&&(p.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),f.addEntry(P)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(r,n,e,o).next(()=>o.apply(n)).next(()=>r.mutationQueue.performConsistencyCheck(n)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let c=ae();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>r.localDocuments.getDocuments(n,i))})}function SI(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",r=>e.Ur.getLastRemoteSnapshotVersion(r))}function c2(t,e){const r=ne(t),n=e.snapshotVersion;let i=r.os;return r.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=r.cs.newChangeBuffer({trackRemovals:!0});i=r.os;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(r.Ur.removeMatchingKeys(o,f.removedDocuments,p).next(()=>r.Ur.addMatchingKeys(o,f.addedDocuments,p)));let T=m.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(rt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,n)),i=i.insert(p,T),function(P,N,b){return P.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(m,T,f)&&l.push(r.Ur.updateTargetData(o,T))});let c=tn(),u=ae();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(r.persistence.referenceDelegate.updateLimboDocument(o,f))}),l.push(u2(o,s,e.documentUpdates).next(f=>{c=f.Ps,u=f.Is})),!n.isEqual(re.min())){const f=r.Ur.getLastRemoteSnapshotVersion(o).next(p=>r.Ur.setTargetsMetadata(o,o.currentSequenceNumber,n));l.push(f)}return V.waitFor(l).next(()=>s.apply(o)).next(()=>r.localDocuments.getLocalViewOfDocuments(o,c,u)).next(()=>c)}).then(o=>(r.os=i,o))}function u2(t,e,r){let n=ae(),i=ae();return r.forEach(o=>n=n.add(o)),e.getEntries(t,n).next(o=>{let s=tn();return r.forEach((l,c)=>{const u=o.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(re.min())?(e.removeEntry(l,c.readTime),s=s.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),s=s.insert(l,c)):G("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ps:s,Is:i}})}function d2(t,e){const r=ne(t);return r.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),r.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function h2(t,e){const r=ne(t);return r.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return r.Ur.getTargetData(n,e).next(o=>o?(i=o,V.resolve(i)):r.Ur.allocateTargetId(n).next(s=>(i=new En(e,s,"TargetPurposeListen",n.currentSequenceNumber),r.Ur.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=r.os.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(r.os=r.os.insert(n.targetId,n),r._s.set(e,n.targetId)),n})}async function Of(t,e,r){const n=ne(t),i=n.os.get(e),o=r?"readwrite":"readwrite-primary";try{r||await n.persistence.runTransaction("Release target",o,s=>n.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!La(s))throw s;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}n.os=n.os.remove(e),n._s.delete(i.target)}function P_(t,e,r){const n=ne(t);let i=re.min(),o=ae();return n.persistence.runTransaction("Execute query","readwrite",s=>function(c,u,f){const p=ne(c),m=p._s.get(f);return m!==void 0?V.resolve(p.os.get(m)):p.Ur.getTargetData(u,f)}(n,s,Tr(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(s,l.targetId).next(c=>{o=c})}).next(()=>n.ss.getDocumentsMatchingQuery(s,e,r?i:re.min(),r?o:ae())).next(l=>(f2(n,rN(e),l),{documents:l,Ts:o})))}function f2(t,e,r){let n=t.us.get(e)||re.min();r.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),t.us.set(e,n)}class N_{constructor(){this.activeTargetIds=lN()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class p2{constructor(){this.so=new N_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,r,n){}addLocalQueryTarget(e,r=!0){return r&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,r,n){this.oo[e]=r}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new N_,Promise.resolve()}handleUserChange(e,r,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class m2{_o(e){}shutdown(){}}/**
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
 */class O_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let kl=null;function Xd(){return kl===null?kl=function(){return 268435456+Math.round(2147483648*Math.random())}():kl++,"0x"+kl.toString(16)}/**
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
 */const g2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class v2{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const ut="WebChannelConnection";class y2 extends class{constructor(r){this.databaseInfo=r,this.databaseId=r.databaseId;const n=r.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+r.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(r,n,i,o,s){const l=Xd(),c=this.xo(r,n.toUriEncodedString());G("RestConnection",`Sending RPC '${r}' ${l}:`,c,i);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,o,s),this.No(r,c,u,i).then(f=>(G("RestConnection",`Received RPC '${r}' ${l}: `,f),f),f=>{throw Io("RestConnection",`RPC '${r}' ${l} failed with error: `,f,"url: ",c,"request:",i),f})}Lo(r,n,i,o,s,l){return this.Mo(r,n,i,o,s)}Oo(r,n,i){r["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fo}(),r["Content-Type"]="text/plain",this.databaseInfo.appId&&(r["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,s)=>r[s]=o),i&&i.headers.forEach((o,s)=>r[s]=o)}xo(r,n){const i=g2[r];return`${this.Do}/v1/${n}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,r,n,i){const o=Xd();return new Promise((s,l)=>{const c=new zE;c.setWithCredentials(!0),c.listenOnce(jE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case nc.NO_ERROR:const f=c.getResponseJson();G(ut,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),s(f);break;case nc.TIMEOUT:G(ut,`RPC '${e}' ${o} timed out`),l(new K(L.DEADLINE_EXCEEDED,"Request time out"));break;case nc.HTTP_ERROR:const p=c.getStatus();if(G(ut,`RPC '${e}' ${o} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const T=m==null?void 0:m.error;if(T&&T.status&&T.message){const S=function(N){const b=N.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(b)>=0?b:L.UNKNOWN}(T.status);l(new K(S,T.message))}else l(new K(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new K(L.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{G(ut,`RPC '${e}' ${o} completed.`)}});const u=JSON.stringify(i);G(ut,`RPC '${e}' ${o} sending request:`,i),c.send(r,"POST",u,n,15)})}Bo(e,r,n){const i=Xd(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=HE(),l=qE(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,r,n),c.encodeInitMessageHeaders=!0;const f=o.join("");G(ut,`Creating RPC '${e}' stream ${i}: ${f}`,c);const p=s.createWebChannel(f,c);let m=!1,T=!1;const S=new v2({Io:N=>{T?G(ut,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(m||(G(ut,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),G(ut,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},To:()=>p.close()}),P=(N,b,y)=>{N.listen(b,x=>{try{y(x)}catch(D){setTimeout(()=>{throw D},0)}})};return P(p,Es.EventType.OPEN,()=>{T||(G(ut,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),P(p,Es.EventType.CLOSE,()=>{T||(T=!0,G(ut,`RPC '${e}' stream ${i} transport closed`),S.So())}),P(p,Es.EventType.ERROR,N=>{T||(T=!0,Io(ut,`RPC '${e}' stream ${i} transport errored:`,N),S.So(new K(L.UNAVAILABLE,"The operation could not be completed")))}),P(p,Es.EventType.MESSAGE,N=>{var b;if(!T){const y=N.data[0];me(!!y);const x=y,D=x.error||((b=x[0])===null||b===void 0?void 0:b.error);if(D){G(ut,`RPC '${e}' stream ${i} received error:`,D);const F=D.status;let z=function(w){const E=Me[w];if(E!==void 0)return gI(E)}(F),_=D.message;z===void 0&&(z=L.INTERNAL,_="Unknown error status: "+F+" with message "+D.message),T=!0,S.So(new K(z,_)),p.close()}else G(ut,`RPC '${e}' stream ${i} received:`,y),S.bo(y)}}),P(l,BE.STAT_EVENT,N=>{N.stat===Ef.PROXY?G(ut,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Ef.NOPROXY&&G(ut,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function Jd(){return typeof document<"u"?document:null}/**
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
 */function Cu(t){return new CN(t,!0)}/**
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
 */class CI{constructor(e,r,n=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=r,this.ko=n,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const r=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,r-n);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${r} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class kI{constructor(e,r,n,i,o,s,l,c){this.ui=e,this.Ho=n,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new CI(e,r)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,r){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():r&&r.code===L.RESOURCE_EXHAUSTED?(en(r.toString()),en("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):r&&r.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(r)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),r=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Yo===r&&this.P_(n,i)},n=>{e(()=>{const i=new K(L.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(i)})})}P_(e,r){const n=this.h_(this.Yo);this.stream=this.T_(e,r),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{n(()=>this.I_(i))}),this.stream.onMessage(i=>{n(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return r=>{this.ui.enqueueAndForget(()=>this.Yo===e?r():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _2 extends kI{constructor(e,r,n,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",r,n,i,s),this.serializer=o}T_(e,r){return this.connection.Bo("Listen",e,r)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const r=PN(this.serializer,e),n=function(o){if(!("targetChange"in o))return re.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?re.min():s.readTime?xr(s.readTime):re.min()}(e);return this.listener.d_(r,n)}A_(e){const r={};r.database=Nf(this.serializer),r.addTarget=function(o,s){let l;const c=s.target;if(l=Af(c)?{documents:DN(o,c)}:{query:LN(o,c)._t},l.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){l.resumeToken=_I(o,s.resumeToken);const u=kf(o,s.expectedCount);u!==null&&(l.expectedCount=u)}else if(s.snapshotVersion.compareTo(re.min())>0){l.readTime=Wc(o,s.snapshotVersion.toTimestamp());const u=kf(o,s.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const n=MN(this.serializer,e);n&&(r.labels=n),this.a_(r)}R_(e){const r={};r.database=Nf(this.serializer),r.removeTarget=e,this.a_(r)}}class w2 extends kI{constructor(e,r,n,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",r,n,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,r){return this.connection.Bo("Write",e,r)}E_(e){return me(!!e.streamToken),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const r=ON(e.writeResults,e.commitTime),n=xr(e.commitTime);return this.listener.g_(n,r)}p_(){const e={};e.database=Nf(this.serializer),this.a_(e)}m_(e){const r={streamToken:this.lastStreamToken,writes:e.map(n=>NN(this.serializer,n))};this.a_(r)}}/**
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
 */class b2 extends class{}{constructor(e,r,n,i){super(),this.authCredentials=e,this.appCheckCredentials=r,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new K(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,r,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,Rf(r,n),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(L.UNKNOWN,o.toString())})}Lo(e,r,n,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,l])=>this.connection.Lo(e,Rf(r,n),i,s,l,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(L.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class E2{constructor(e,r){this.asyncQueue=e,this.onlineStateHandler=r,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const r=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(en(r),this.D_=!1):G("OnlineStateTracker",r)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class I2{constructor(e,r,n,i,o){this.localStore=e,this.datastore=r,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{n.enqueueAndForget(async()=>{Di(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=ne(c);u.L_.add(4),await $a(u),u.q_.set("Unknown"),u.L_.delete(4),await ku(u)}(this))})}),this.q_=new E2(n,i)}}async function ku(t){if(Di(t))for(const e of t.B_)await e(!0)}async function $a(t){for(const e of t.B_)await e(!1)}function RI(t,e){const r=ne(t);r.N_.has(e.targetId)||(r.N_.set(e.targetId,e),Fm(r)?$m(r):jo(r).r_()&&Mm(r,e))}function Vm(t,e){const r=ne(t),n=jo(r);r.N_.delete(e),n.r_()&&PI(r,e),r.N_.size===0&&(n.r_()?n.o_():Di(r)&&r.q_.set("Unknown"))}function Mm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const r=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(r)}jo(t).A_(e)}function PI(t,e){t.Q_.xe(e),jo(t).R_(e)}function $m(t){t.Q_=new TN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),jo(t).start(),t.q_.v_()}function Fm(t){return Di(t)&&!jo(t).n_()&&t.N_.size>0}function Di(t){return ne(t).L_.size===0}function NI(t){t.Q_=void 0}async function T2(t){t.q_.set("Online")}async function x2(t){t.N_.forEach((e,r)=>{Mm(t,e)})}async function A2(t,e){NI(t),Fm(t)?(t.q_.M_(e),$m(t)):t.q_.set("Unknown")}async function S2(t,e,r){if(t.q_.set("Online"),e instanceof yI&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const l of o.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,s),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(n){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Kc(t,n)}else if(e instanceof sc?t.Q_.Ke(e):e instanceof vI?t.Q_.He(e):t.Q_.We(e),!r.isEqual(re.min()))try{const n=await SI(t.localStore);r.compareTo(n)>=0&&await function(o,s){const l=o.Q_.rt(s);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=o.N_.get(u);f&&o.N_.set(u,f.withResumeToken(c.resumeToken,s))}}),l.targetMismatches.forEach((c,u)=>{const f=o.N_.get(c);if(!f)return;o.N_.set(c,f.withResumeToken(rt.EMPTY_BYTE_STRING,f.snapshotVersion)),PI(o,c);const p=new En(f.target,c,u,f.sequenceNumber);Mm(o,p)}),o.remoteSyncer.applyRemoteEvent(l)}(t,r)}catch(n){G("RemoteStore","Failed to raise snapshot:",n),await Kc(t,n)}}async function Kc(t,e,r){if(!La(e))throw e;t.L_.add(1),await $a(t),t.q_.set("Offline"),r||(r=()=>SI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await r(),t.L_.delete(1),await ku(t)})}function OI(t,e){return e().catch(r=>Kc(t,r,e))}async function Ru(t){const e=ne(t),r=$n(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;C2(e);)try{const i=await d2(e.localStore,n);if(i===null){e.O_.length===0&&r.o_();break}n=i.batchId,k2(e,i)}catch(i){await Kc(e,i)}DI(e)&&LI(e)}function C2(t){return Di(t)&&t.O_.length<10}function k2(t,e){t.O_.push(e);const r=$n(t);r.r_()&&r.V_&&r.m_(e.mutations)}function DI(t){return Di(t)&&!$n(t).n_()&&t.O_.length>0}function LI(t){$n(t).start()}async function R2(t){$n(t).p_()}async function P2(t){const e=$n(t);for(const r of t.O_)e.m_(r.mutations)}async function N2(t,e,r){const n=t.O_.shift(),i=Rm.from(n,e,r);await OI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ru(t)}async function O2(t,e){e&&$n(t).V_&&await async function(n,i){if(function(s){return bN(s)&&s!==L.ABORTED}(i.code)){const o=n.O_.shift();$n(n).s_(),await OI(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Ru(n)}}(t,e),DI(t)&&LI(t)}async function D_(t,e){const r=ne(t);r.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const n=Di(r);r.L_.add(3),await $a(r),n&&r.q_.set("Unknown"),await r.remoteSyncer.handleCredentialChange(e),r.L_.delete(3),await ku(r)}async function D2(t,e){const r=ne(t);e?(r.L_.delete(2),await ku(r)):e||(r.L_.add(2),await $a(r),r.q_.set("Unknown"))}function jo(t){return t.K_||(t.K_=function(r,n,i){const o=ne(r);return o.w_(),new _2(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:T2.bind(null,t),Ro:x2.bind(null,t),mo:A2.bind(null,t),d_:S2.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Fm(t)?$m(t):t.q_.set("Unknown")):(await t.K_.stop(),NI(t))})),t.K_}function $n(t){return t.U_||(t.U_=function(r,n,i){const o=ne(r);return o.w_(),new w2(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:R2.bind(null,t),mo:O2.bind(null,t),f_:P2.bind(null,t),g_:N2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ru(t)):(await t.U_.stop(),t.O_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Um{constructor(e,r,n,i,o){this.asyncQueue=e,this.timerId=r,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new pi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,r,n,i,o){const s=Date.now()+n,l=new Um(e,r,s,i,o);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zm(t,e){if(en("AsyncQueue",`${e}: ${t}`),La(t))return new K(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class mo{constructor(e){this.comparator=e?(r,n)=>e(r,n)||X.comparator(r.key,n.key):(r,n)=>X.comparator(r.key,n.key),this.keyedMap=Is(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new mo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const r=this.keyedMap.get(e);return r?this.sortedSet.indexOf(r):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((r,n)=>(e(r),!1))}add(e){const r=this.delete(e.key);return r.copy(r.keyedMap.insert(e.key,e),r.sortedSet.insert(e,null))}delete(e){const r=this.get(e);return r?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(r)):this}isEqual(e){if(!(e instanceof mo)||this.size!==e.size)return!1;const r=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;r.hasNext();){const i=r.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(r=>{e.push(r.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,r){const n=new mo;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=r,n}}/**
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
 */class L_{constructor(){this.W_=new Ce(X.comparator)}track(e){const r=e.doc.key,n=this.W_.get(r);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(r,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(r,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(r,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(r,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(r):e.type===1&&n.type===2?this.W_=this.W_.insert(r,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(r,{type:2,doc:e.doc}):te():this.W_=this.W_.insert(r,e)}G_(){const e=[];return this.W_.inorderTraversal((r,n)=>{e.push(n)}),e}}class Co{constructor(e,r,n,i,o,s,l,c,u){this.query=e,this.docs=r,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,r,n,i,o){const s=[];return r.forEach(l=>{s.push({type:0,doc:l})}),new Co(e,r,mo.emptySet(r),s,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Iu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const r=this.docChanges,n=e.docChanges;if(r.length!==n.length)return!1;for(let i=0;i<r.length;i++)if(r[i].type!==n[i].type||!r[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class L2{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class V2{constructor(){this.queries=V_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(r,n){const i=ne(r),o=i.queries;i.queries=V_(),o.forEach((s,l)=>{for(const c of l.j_)c.onError(n)})})(this,new K(L.ABORTED,"Firestore shutting down"))}}function V_(){return new zo(t=>iI(t),Iu)}async function M2(t,e){const r=ne(t);let n=3;const i=e.query;let o=r.queries.get(i);o?!o.H_()&&e.J_()&&(n=2):(o=new L2,n=e.J_()?0:1);try{switch(n){case 0:o.z_=await r.onListen(i,!0);break;case 1:o.z_=await r.onListen(i,!1);break;case 2:await r.onFirstRemoteStoreListen(i)}}catch(s){const l=zm(s,`Initialization of query '${Bi(e.query)}' failed`);return void e.onError(l)}r.queries.set(i,o),o.j_.push(e),e.Z_(r.onlineState),o.z_&&e.X_(o.z_)&&jm(r)}async function $2(t,e){const r=ne(t),n=e.query;let i=3;const o=r.queries.get(n);if(o){const s=o.j_.indexOf(e);s>=0&&(o.j_.splice(s,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return r.queries.delete(n),r.onUnlisten(n,!0);case 1:return r.queries.delete(n),r.onUnlisten(n,!1);case 2:return r.onLastRemoteStoreUnlisten(n);default:return}}function F2(t,e){const r=ne(t);let n=!1;for(const i of e){const o=i.query,s=r.queries.get(o);if(s){for(const l of s.j_)l.X_(i)&&(n=!0);s.z_=i}}n&&jm(r)}function U2(t,e,r){const n=ne(t),i=n.queries.get(e);if(i)for(const o of i.j_)o.onError(r);n.queries.delete(e)}function jm(t){t.Y_.forEach(e=>{e.next()})}var Df,M_;(M_=Df||(Df={})).ea="default",M_.Cache="cache";class z2{constructor(e,r,n){this.query=e,this.ta=r,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new Co(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let r=!1;return this.na?this.ia(e)&&(this.ta.next(e),r=!0):this.sa(e,this.onlineState)&&(this.oa(e),r=!0),this.ra=e,r}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let r=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),r=!0),r}sa(e,r){if(!e.fromCache||!this.J_())return!0;const n=r!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||r==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const r=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!r)&&this.options.includeMetadataChanges===!0}oa(e){e=Co.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Df.Cache}}/**
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
 */class VI{constructor(e){this.key=e}}class MI{constructor(e){this.key=e}}class j2{constructor(e,r){this.query=e,this.Ta=r,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ae(),this.mutatedKeys=ae(),this.Aa=oI(e),this.Ra=new mo(this.Aa)}get Va(){return this.Ta}ma(e,r){const n=r?r.fa:new L_,i=r?r.Ra:this.Ra;let o=r?r.mutatedKeys:this.mutatedKeys,s=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),T=Tu(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),P=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let N=!1;m&&T?m.data.isEqual(T.data)?S!==P&&(n.track({type:3,doc:T}),N=!0):this.ga(m,T)||(n.track({type:2,doc:T}),N=!0,(c&&this.Aa(T,c)>0||u&&this.Aa(T,u)<0)&&(l=!0)):!m&&T?(n.track({type:0,doc:T}),N=!0):m&&!T&&(n.track({type:1,doc:m}),N=!0,(c||u)&&(l=!0)),N&&(T?(s=s.add(T),o=P?o.add(f):o.delete(f)):(s=s.delete(f),o=o.delete(f)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const f=this.query.limitType==="F"?s.last():s.first();s=s.delete(f.key),o=o.delete(f.key),n.track({type:1,doc:f})}return{Ra:s,fa:n,ns:l,mutatedKeys:o}}ga(e,r){return e.hasLocalMutations&&r.hasCommittedMutations&&!r.hasLocalMutations}applyChanges(e,r,n,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((f,p)=>function(T,S){const P=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return P(T)-P(S)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(n),i=i!=null&&i;const l=r&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,u=c!==this.Ea;return this.Ea=c,s.length!==0||u?{snapshot:new Co(this.query,e.Ra,o,s,e.mutatedKeys,c===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new L_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(r=>this.Ta=this.Ta.add(r)),e.modifiedDocuments.forEach(r=>{}),e.removedDocuments.forEach(r=>this.Ta=this.Ta.delete(r)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ae(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const r=[];return e.forEach(n=>{this.da.has(n)||r.push(new MI(n))}),this.da.forEach(n=>{e.has(n)||r.push(new VI(n))}),r}ba(e){this.Ta=e.Ts,this.da=ae();const r=this.ma(e.documents);return this.applyChanges(r,!0)}Da(){return Co.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class B2{constructor(e,r,n){this.query=e,this.targetId=r,this.view=n}}class q2{constructor(e){this.key=e,this.va=!1}}class H2{constructor(e,r,n,i,o,s){this.localStore=e,this.remoteStore=r,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new zo(l=>iI(l),Iu),this.Ma=new Map,this.xa=new Set,this.Oa=new Ce(X.comparator),this.Na=new Map,this.La=new Om,this.Ba={},this.ka=new Map,this.qa=So.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function W2(t,e,r=!0){const n=BI(t);let i;const o=n.Fa.get(e);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await $I(n,e,r,!0),i}async function K2(t,e){const r=BI(t);await $I(r,e,!0,!1)}async function $I(t,e,r,n){const i=await h2(t.localStore,Tr(e)),o=i.targetId,s=t.sharedClientState.addLocalQueryTarget(o,r);let l;return n&&(l=await G2(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&r&&RI(t.remoteStore,i),l}async function G2(t,e,r,n,i){t.Ka=(p,m,T)=>async function(P,N,b,y){let x=N.view.ma(b);x.ns&&(x=await P_(P.localStore,N.query,!1).then(({documents:_})=>N.view.ma(_,x)));const D=y&&y.targetChanges.get(N.targetId),F=y&&y.targetMismatches.get(N.targetId)!=null,z=N.view.applyChanges(x,P.isPrimaryClient,D,F);return F_(P,N.targetId,z.wa),z.snapshot}(t,p,m,T);const o=await P_(t.localStore,e,!0),s=new j2(e,o.Ts),l=s.ma(o.documents),c=Ma.createSynthesizedTargetChangeForCurrentChange(r,n&&t.onlineState!=="Offline",i),u=s.applyChanges(l,t.isPrimaryClient,c);F_(t,r,u.wa);const f=new B2(e,r,s);return t.Fa.set(e,f),t.Ma.has(r)?t.Ma.get(r).push(e):t.Ma.set(r,[e]),u.snapshot}async function Q2(t,e,r){const n=ne(t),i=n.Fa.get(e),o=n.Ma.get(i.targetId);if(o.length>1)return n.Ma.set(i.targetId,o.filter(s=>!Iu(s,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Of(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),r&&Vm(n.remoteStore,i.targetId),Lf(n,i.targetId)}).catch(Da)):(Lf(n,i.targetId),await Of(n.localStore,i.targetId,!0))}async function Y2(t,e){const r=ne(t),n=r.Fa.get(e),i=r.Ma.get(n.targetId);r.isPrimaryClient&&i.length===1&&(r.sharedClientState.removeLocalQueryTarget(n.targetId),Vm(r.remoteStore,n.targetId))}async function X2(t,e,r){const n=iO(t);try{const i=await function(s,l){const c=ne(s),u=Be.now(),f=l.reduce((T,S)=>T.add(S.key),ae());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",T=>{let S=tn(),P=ae();return c.cs.getEntries(T,f).next(N=>{S=N,S.forEach((b,y)=>{y.isValidDocument()||(P=P.add(b))})}).next(()=>c.localDocuments.getOverlayedDocuments(T,S)).next(N=>{p=N;const b=[];for(const y of l){const x=gN(y,p.get(y.key).overlayedDocument);x!=null&&b.push(new Hn(y.key,x,YE(x.value.mapValue),Kt.exists(!0)))}return c.mutationQueue.addMutationBatch(T,u,b,l)}).next(N=>{m=N;const b=N.applyToLocalDocumentSet(p,P);return c.documentOverlayCache.saveOverlays(T,N.batchId,b)})}).then(()=>({batchId:m.batchId,changes:aI(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(s,l,c){let u=s.Ba[s.currentUser.toKey()];u||(u=new Ce(he)),u=u.insert(l,c),s.Ba[s.currentUser.toKey()]=u}(n,i.batchId,r),await Fa(n,i.changes),await Ru(n.remoteStore)}catch(i){const o=zm(i,"Failed to persist write");r.reject(o)}}async function FI(t,e){const r=ne(t);try{const n=await c2(r.localStore,e);e.targetChanges.forEach((i,o)=>{const s=r.Na.get(o);s&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.va=!0:i.modifiedDocuments.size>0?me(s.va):i.removedDocuments.size>0&&(me(s.va),s.va=!1))}),await Fa(r,n,e)}catch(n){await Da(n)}}function $_(t,e,r){const n=ne(t);if(n.isPrimaryClient&&r===0||!n.isPrimaryClient&&r===1){const i=[];n.Fa.forEach((o,s)=>{const l=s.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(s,l){const c=ne(s);c.onlineState=l;let u=!1;c.queries.forEach((f,p)=>{for(const m of p.j_)m.Z_(l)&&(u=!0)}),u&&jm(c)}(n.eventManager,e),i.length&&n.Ca.d_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function J2(t,e,r){const n=ne(t);n.sharedClientState.updateQueryState(e,"rejected",r);const i=n.Na.get(e),o=i&&i.key;if(o){let s=new Ce(X.comparator);s=s.insert(o,ft.newNoDocument(o,re.min()));const l=ae().add(o),c=new Su(re.min(),new Map,new Ce(he),s,l);await FI(n,c),n.Oa=n.Oa.remove(o),n.Na.delete(e),Bm(n)}else await Of(n.localStore,e,!1).then(()=>Lf(n,e,r)).catch(Da)}async function Z2(t,e){const r=ne(t),n=e.batch.batchId;try{const i=await l2(r.localStore,e);zI(r,n,null),UI(r,n),r.sharedClientState.updateMutationState(n,"acknowledged"),await Fa(r,i)}catch(i){await Da(i)}}async function eO(t,e,r){const n=ne(t);try{const i=await function(s,l){const c=ne(s);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(me(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(n.localStore,e);zI(n,e,r),UI(n,e),n.sharedClientState.updateMutationState(e,"rejected",r),await Fa(n,i)}catch(i){await Da(i)}}function UI(t,e){(t.ka.get(e)||[]).forEach(r=>{r.resolve()}),t.ka.delete(e)}function zI(t,e,r){const n=ne(t);let i=n.Ba[n.currentUser.toKey()];if(i){const o=i.get(e);o&&(r?o.reject(r):o.resolve(),i=i.remove(e)),n.Ba[n.currentUser.toKey()]=i}}function Lf(t,e,r=null){t.sharedClientState.removeLocalQueryTarget(e);for(const n of t.Ma.get(e))t.Fa.delete(n),r&&t.Ca.$a(n,r);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(n=>{t.La.containsKey(n)||jI(t,n)})}function jI(t,e){t.xa.delete(e.path.canonicalString());const r=t.Oa.get(e);r!==null&&(Vm(t.remoteStore,r),t.Oa=t.Oa.remove(e),t.Na.delete(r),Bm(t))}function F_(t,e,r){for(const n of r)n instanceof VI?(t.La.addReference(n.key,e),tO(t,n)):n instanceof MI?(G("SyncEngine","Document no longer in limbo: "+n.key),t.La.removeReference(n.key,e),t.La.containsKey(n.key)||jI(t,n.key)):te()}function tO(t,e){const r=e.key,n=r.path.canonicalString();t.Oa.get(r)||t.xa.has(n)||(G("SyncEngine","New document in limbo: "+r),t.xa.add(n),Bm(t))}function Bm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const r=new X(be.fromString(e)),n=t.qa.next();t.Na.set(n,new q2(r)),t.Oa=t.Oa.insert(r,n),RI(t.remoteStore,new En(Tr(Sm(r.path)),n,"TargetPurposeLimboResolution",bm.oe))}}async function Fa(t,e,r){const n=ne(t),i=[],o=[],s=[];n.Fa.isEmpty()||(n.Fa.forEach((l,c)=>{s.push(n.Ka(c,e,r).then(u=>{var f;if((u||r)&&n.isPrimaryClient){const p=u?!u.fromCache:(f=r==null?void 0:r.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){i.push(u);const p=Lm.Wi(c.targetId,u);o.push(p)}}))}),await Promise.all(s),n.Ca.d_(i),await async function(c,u){const f=ne(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(u,m=>V.forEach(m.$i,T=>f.persistence.referenceDelegate.addReference(p,m.targetId,T)).next(()=>V.forEach(m.Ui,T=>f.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))}catch(p){if(!La(p))throw p;G("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const T=f.os.get(m),S=T.snapshotVersion,P=T.withLastLimboFreeSnapshotVersion(S);f.os=f.os.insert(m,P)}}}(n.localStore,o))}async function rO(t,e){const r=ne(t);if(!r.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const n=await AI(r.localStore,e);r.currentUser=e,function(o,s){o.ka.forEach(l=>{l.forEach(c=>{c.reject(new K(L.CANCELLED,s))})}),o.ka.clear()}(r,"'waitForPendingWrites' promise is rejected due to a user change."),r.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Fa(r,n.hs)}}function nO(t,e){const r=ne(t),n=r.Na.get(e);if(n&&n.va)return ae().add(n.key);{let i=ae();const o=r.Ma.get(e);if(!o)return i;for(const s of o){const l=r.Fa.get(s);i=i.unionWith(l.view.Va)}return i}}function BI(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=FI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=J2.bind(null,e),e.Ca.d_=F2.bind(null,e.eventManager),e.Ca.$a=U2.bind(null,e.eventManager),e}function iO(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Z2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eO.bind(null,e),e}class Gc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Cu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,r){return null}Ha(e,r){return null}za(e){return a2(this.persistence,new o2,e.initialUser,this.serializer)}Ga(e){return new r2(Dm.Zr,this.serializer)}Wa(e){return new p2}async terminate(){var e,r;(e=this.gcScheduler)===null||e===void 0||e.stop(),(r=this.indexBackfillerScheduler)===null||r===void 0||r.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gc.provider={build:()=>new Gc};class Vf{async initialize(e,r){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(r),this.remoteStore=this.createRemoteStore(r),this.eventManager=this.createEventManager(r),this.syncEngine=this.createSyncEngine(r,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>$_(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=rO.bind(null,this.syncEngine),await D2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new V2}()}createDatastore(e){const r=Cu(e.databaseInfo.databaseId),n=function(o){return new y2(o)}(e.databaseInfo);return function(o,s,l,c){return new b2(o,s,l,c)}(e.authCredentials,e.appCheckCredentials,n,r)}createRemoteStore(e){return function(n,i,o,s,l){return new I2(n,i,o,s,l)}(this.localStore,this.datastore,e.asyncQueue,r=>$_(this.syncEngine,r,0),function(){return O_.D()?new O_:new m2}())}createSyncEngine(e,r){return function(i,o,s,l,c,u,f){const p=new H2(i,o,s,l,c,u);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,r)}async terminate(){var e,r;await async function(i){const o=ne(i);G("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await $a(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(r=this.eventManager)===null||r===void 0||r.terminate()}}Vf.provider={build:()=>new Vf};/**
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
 */class oO{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):en("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,r){setTimeout(()=>{this.muted||e(r)},0)}}/**
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
 */class sO{constructor(e,r,n,i,o){this.authCredentials=e,this.appCheckCredentials=r,this.asyncQueue=n,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=KE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async s=>{G("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(n,s=>(G("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){const n=zm(r,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Zd(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const r=t.configuration;await e.initialize(r);let n=r.initialUser;t.setCredentialChangeListener(async i=>{n.isEqual(i)||(await AI(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function U_(t,e){t.asyncQueue.verifyOperationInProgress();const r=await aO(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(r,t.configuration),t.setCredentialChangeListener(n=>D_(e.remoteStore,n)),t.setAppCheckTokenChangeListener((n,i)=>D_(e.remoteStore,i)),t._onlineComponents=e}async function aO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zd(t,t._uninitializedComponentsProvider._offline)}catch(e){const r=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(r))throw r;Io("Error using user provided cache. Falling back to memory cache: "+r),await Zd(t,new Gc)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await Zd(t,new Gc);return t._offlineComponents}async function qI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await U_(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await U_(t,new Vf))),t._onlineComponents}function lO(t){return qI(t).then(e=>e.syncEngine)}async function z_(t){const e=await qI(t),r=e.eventManager;return r.onListen=W2.bind(null,e.syncEngine),r.onUnlisten=Q2.bind(null,e.syncEngine),r.onFirstRemoteStoreListen=K2.bind(null,e.syncEngine),r.onLastRemoteStoreUnlisten=Y2.bind(null,e.syncEngine),r}/**
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
 */function HI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const j_=new Map;/**
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
 */function WI(t,e,r){if(!r)throw new K(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function cO(t,e,r,n){if(e===!0&&n===!0)throw new K(L.INVALID_ARGUMENT,`${t} and ${r} cannot be used together.`)}function B_(t){if(!X.isDocumentKey(t))throw new K(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function q_(t){if(X.isDocumentKey(t))throw new K(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function Ar(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=Pu(t);throw new K(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${r}`)}}return t}/**
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
 */class H_{constructor(e){var r,n;if(e.host===void 0){if(e.ssl!==void 0)throw new K(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(r=e.ssl)===null||r===void 0||r;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=HI((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new K(L.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new K(L.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new K(L.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nu{constructor(e,r,n,i){this._authCredentials=e,this._appCheckCredentials=r,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new H_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new H_(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new TP;switch(n.type){case"firstParty":return new CP(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new K(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(r){const n=j_.get(r);n&&(G("ComponentProvider","Removing Datastore"),j_.delete(r),n.terminate())}(this),Promise.resolve()}}function uO(t,e,r,n={}){var i;const o=(t=Ar(t,Nu))._getSettings(),s=`${e}:${r}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Io("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),n.mockUserToken){let l,c;if(typeof n.mockUserToken=="string")l=n.mockUserToken,c=dt.MOCK_USER;else{l=jC(n.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=n.mockUserToken.sub||n.mockUserToken.user_id;if(!u)throw new K(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new dt(u)}t._authCredentials=new xP(new WE(l,c))}}/**
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
 */class Li{constructor(e,r,n){this.converter=r,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Li(this.firestore,e,this._query)}}class Et{constructor(e,r,n){this.converter=r,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class Nn extends Li{constructor(e,r,n){super(e,r,Sm(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new X(e))}withConverter(e){return new Nn(this.firestore,e,this._path)}}function W_(t,e,...r){if(t=Pe(t),WI("collection","path",e),t instanceof Nu){const n=be.fromString(e,...r);return q_(n),new Nn(t,null,n)}{if(!(t instanceof Et||t instanceof Nn))throw new K(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(be.fromString(e,...r));return q_(n),new Nn(t.firestore,null,n)}}function vr(t,e,...r){if(t=Pe(t),arguments.length===1&&(e=KE.newId()),WI("doc","path",e),t instanceof Nu){const n=be.fromString(e,...r);return B_(n),new Et(t,null,new X(n))}{if(!(t instanceof Et||t instanceof Nn))throw new K(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(be.fromString(e,...r));return B_(n),new Et(t.firestore,t instanceof Nn?t.converter:null,new X(n))}}/**
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
 */class K_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new CI(this,"async_queue_retry"),this.Vu=()=>{const n=Jd();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const r=Jd();r&&typeof r.addEventListener=="function"&&r.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const r=Jd();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const r=new pi;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(r.resolve,r.reject),r.promise)).then(()=>r.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!La(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const r=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const i=function(s){let l=s.message||"";return s.stack&&(l=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),l}(n);throw en("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.du=!1,n))));return this.mu=r,r}enqueueAfterDelay(e,r,n){this.fu(),this.Ru.indexOf(e)>-1&&(r=0);const i=Um.createAndSchedule(this,e,r,n,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&te()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const r of this.Tu)if(r.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((r,n)=>r.targetTimeMs-n.targetTimeMs);for(const r of this.Tu)if(r.skipDelay(),e!=="all"&&r.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const r=this.Tu.indexOf(e);this.Tu.splice(r,1)}}function G_(t){return function(r,n){if(typeof r!="object"||r===null)return!1;const i=r;for(const o of n)if(o in i&&typeof i[o]=="function")return!0;return!1}(t,["next","error","complete"])}class Ai extends Nu{constructor(e,r,n,i){super(e,r,n,i),this.type="firestore",this._queue=new K_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new K_(e),this._firestoreClient=void 0,await e}}}function dO(t,e){const r=typeof t=="object"?t:lm(),n=typeof t=="string"?t:"(default)",i=Lo(r,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=UC("firestore");o&&uO(i,...o)}return i}function KI(t){if(t._terminated)throw new K(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||hO(t),t._firestoreClient}function hO(t){var e,r,n;const i=t._freezeSettings(),o=function(l,c,u,f){return new zP(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,HI(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((r=i.localCache)===null||r===void 0)&&r._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new sO(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class ko{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ko(rt.fromBase64String(e))}catch(r){throw new K(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(e){return new ko(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ou{constructor(...e){for(let r=0;r<e.length;++r)if(e[r].length===0)throw new K(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Du{constructor(e){this._methodName=e}}/**
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
 */class qm{constructor(e,r){if(!isFinite(e)||e<-90||e>90)throw new K(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(r)||r<-180||r>180)throw new K(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=e,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Hm{constructor(e){this._values=(e||[]).map(r=>r)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const fO=/^__.*__$/;class pO{constructor(e,r,n){this.data=e,this.fieldMask=r,this.fieldTransforms=n}toMutation(e,r){return this.fieldMask!==null?new Hn(e,this.data,this.fieldMask,r,this.fieldTransforms):new Va(e,this.data,r,this.fieldTransforms)}}class GI{constructor(e,r,n){this.data=e,this.fieldMask=r,this.fieldTransforms=n}toMutation(e,r){return new Hn(e,this.data,this.fieldMask,r,this.fieldTransforms)}}function QI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class Wm{constructor(e,r,n,i,o,s){this.settings=e,this.databaseId=r,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Wm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var r;const n=(r=this.path)===null||r===void 0?void 0:r.child(e),i=this.Fu({path:n,xu:!1});return i.Ou(e),i}Nu(e){var r;const n=(r=this.path)===null||r===void 0?void 0:r.child(e),i=this.Fu({path:n,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Qc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(r=>e.isPrefixOf(r))!==void 0||this.fieldTransforms.find(r=>e.isPrefixOf(r.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(QI(this.Cu)&&fO.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class mO{constructor(e,r,n){this.databaseId=e,this.ignoreUndefinedProperties=r,this.serializer=n||Cu(e)}Qu(e,r,n,i=!1){return new Wm({Cu:e,methodName:r,qu:n,path:Je.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lu(t){const e=t._freezeSettings(),r=Cu(t._databaseId);return new mO(t._databaseId,!!e.ignoreUndefinedProperties,r)}function YI(t,e,r,n,i,o={}){const s=t.Qu(o.merge||o.mergeFields?2:0,e,r,i);Gm("Data must be an object, but it was:",s,n);const l=XI(n,s);let c,u;if(o.merge)c=new Vt(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const f=[];for(const p of o.mergeFields){const m=Mf(e,p,r);if(!s.contains(m))throw new K(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);ZI(f,m)||f.push(m)}c=new Vt(f),u=s.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=s.fieldTransforms;return new pO(new Ct(l),c,u)}class Vu extends Du{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vu}}class Km extends Du{_toFieldTransform(e){return new hN(e.path,new ga)}isEqual(e){return e instanceof Km}}function gO(t,e,r,n){const i=t.Qu(1,e,r);Gm("Data must be an object, but it was:",i,n);const o=[],s=Ct.empty();Oi(n,(c,u)=>{const f=Qm(e,c,r);u=Pe(u);const p=i.Nu(f);if(u instanceof Vu)o.push(f);else{const m=Ua(u,p);m!=null&&(o.push(f),s.set(f,m))}});const l=new Vt(o);return new GI(s,l,i.fieldTransforms)}function vO(t,e,r,n,i,o){const s=t.Qu(1,e,r),l=[Mf(e,n,r)],c=[i];if(o.length%2!=0)throw new K(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<o.length;m+=2)l.push(Mf(e,o[m])),c.push(o[m+1]);const u=[],f=Ct.empty();for(let m=l.length-1;m>=0;--m)if(!ZI(u,l[m])){const T=l[m];let S=c[m];S=Pe(S);const P=s.Nu(T);if(S instanceof Vu)u.push(T);else{const N=Ua(S,P);N!=null&&(u.push(T),f.set(T,N))}}const p=new Vt(u);return new GI(f,p,s.fieldTransforms)}function yO(t,e,r,n=!1){return Ua(r,t.Qu(n?4:3,e))}function Ua(t,e){if(JI(t=Pe(t)))return Gm("Unsupported field value:",e,t),XI(t,e);if(t instanceof Du)return function(n,i){if(!QI(i.Cu))throw i.Bu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,i){const o=[];let s=0;for(const l of n){let c=Ua(l,i.Lu(s));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),s++}return{arrayValue:{values:o}}}(t,e)}return function(n,i){if((n=Pe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return cN(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=Be.fromDate(n);return{timestampValue:Wc(i.serializer,o)}}if(n instanceof Be){const o=new Be(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Wc(i.serializer,o)}}if(n instanceof qm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ko)return{bytesValue:_I(i.serializer,n._byteString)};if(n instanceof Et){const o=i.databaseId,s=n.firestore._databaseId;if(!s.isEqual(o))throw i.Bu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Nm(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Hm)return function(s,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Cm(l.serializer,c)})}}}}}}(n,i);throw i.Bu(`Unsupported field value: ${Pu(n)}`)}(t,e)}function XI(t,e){const r={};return GE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Oi(t,(n,i)=>{const o=Ua(i,e.Mu(n));o!=null&&(r[n]=o)}),{mapValue:{fields:r}}}function JI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof qm||t instanceof ko||t instanceof Et||t instanceof Du||t instanceof Hm)}function Gm(t,e,r){if(!JI(r)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(r)){const n=Pu(r);throw n==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+n)}}function Mf(t,e,r){if((e=Pe(e))instanceof Ou)return e._internalPath;if(typeof e=="string")return Qm(t,e);throw Qc("Field path arguments must be of type string or ",t,!1,void 0,r)}const _O=new RegExp("[~\\*/\\[\\]]");function Qm(t,e,r){if(e.search(_O)>=0)throw Qc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,r);try{return new Ou(...e.split("."))._internalPath}catch{throw Qc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,r)}}function Qc(t,e,r,n,i){const o=n&&!n.isEmpty(),s=i!==void 0;let l=`Function ${e}() called with invalid data`;r&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=` in field ${n}`),s&&(c+=` in document ${i}`),c+=")"),new K(L.INVALID_ARGUMENT,l+t+c)}function ZI(t,e){return t.some(r=>r.isEqual(e))}/**
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
 */class eT{constructor(e,r,n,i,o){this._firestore=e,this._userDataWriter=r,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const r=this._document.data.field(Mu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r)}}}class wO extends eT{data(){return super.data()}}function Mu(t,e){return typeof e=="string"?Qm(t,e):e instanceof Ou?e._internalPath:e._delegate._internalPath}/**
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
 */function bO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ym{}class tT extends Ym{}function EO(t,e,...r){let n=[];e instanceof Ym&&n.push(e),n=n.concat(r),function(o){const s=o.filter(c=>c instanceof Xm).length,l=o.filter(c=>c instanceof $u).length;if(s>1||s>0&&l>0)throw new K(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)t=i._apply(t);return t}class $u extends tT{constructor(e,r,n){super(),this._field=e,this._op=r,this._value=n,this.type="where"}static _create(e,r,n){return new $u(e,r,n)}_apply(e){const r=this._parse(e);return rT(e._query,r),new Li(e.firestore,e.converter,Sf(e._query,r))}_parse(e){const r=Lu(e.firestore);return function(o,s,l,c,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new K(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Y_(p,f);const T=[];for(const S of p)T.push(Q_(c,o,S));m={arrayValue:{values:T}}}else m=Q_(c,o,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Y_(p,f),m=yO(l,s,p,f==="in"||f==="not-in");return Fe.create(u,f,m)}(e._query,"where",r,e.firestore._databaseId,this._field,this._op,this._value)}}function IO(t,e,r){const n=e,i=Mu("where",t);return $u._create(i,n,r)}class Xm extends Ym{constructor(e,r){super(),this.type=e,this._queryConstraints=r}static _create(e,r){return new Xm(e,r)}_parse(e){const r=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return r.length===1?r[0]:pr.create(r,this._getOperator())}_apply(e){const r=this._parse(e);return r.getFilters().length===0?e:(function(i,o){let s=i;const l=o.getFlattenedFilters();for(const c of l)rT(s,c),s=Sf(s,c)}(e._query,r),new Li(e.firestore,e.converter,Sf(e._query,r)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Jm extends tT{constructor(e,r){super(),this._field=e,this._direction=r,this.type="orderBy"}static _create(e,r){return new Jm(e,r)}_apply(e){const r=function(i,o,s){if(i.startAt!==null)throw new K(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new K(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ma(o,s)}(e._query,this._field,this._direction);return new Li(e.firestore,e.converter,function(i,o){const s=i.explicitOrderBy.concat([o]);return new Uo(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function TO(t,e="asc"){const r=e,n=Mu("orderBy",t);return Jm._create(n,r)}function Q_(t,e,r){if(typeof(r=Pe(r))=="string"){if(r==="")throw new K(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nI(e)&&r.indexOf("/")!==-1)throw new K(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);const n=e.path.child(be.fromString(r));if(!X.isDocumentKey(n))throw new K(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return p_(t,new X(n))}if(r instanceof Et)return p_(t,r._key);throw new K(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pu(r)}.`)}function Y_(t,e){if(!Array.isArray(t)||t.length===0)throw new K(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function rT(t,e){const r=function(i,o){for(const s of i)for(const l of s.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(r!==null)throw r===e.op?new K(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${r.toString()}' filters.`)}class xO{convertValue(e,r="none"){switch(xi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,r);case 5:return e.stringValue;case 6:return this.convertBytes(Ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,r);case 11:return this.convertObject(e.mapValue,r);case 10:return this.convertVectorValue(e.mapValue);default:throw te()}}convertObject(e,r){return this.convertObjectMap(e.fields,r)}convertObjectMap(e,r="none"){const n={};return Oi(e,(i,o)=>{n[i]=this.convertValue(o,r)}),n}convertVectorValue(e){var r,n,i;const o=(i=(n=(r=e.fields)===null||r===void 0?void 0:r.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(s=>De(s.doubleValue));return new Hm(o)}convertGeoPoint(e){return new qm(De(e.latitude),De(e.longitude))}convertArray(e,r){return(e.values||[]).map(n=>this.convertValue(n,r))}convertServerTimestamp(e,r){switch(r){case"previous":const n=Im(e);return n==null?null:this.convertValue(n,r);case"estimate":return this.convertTimestamp(ha(e));default:return null}}convertTimestamp(e){const r=Mn(e);return new Be(r.seconds,r.nanos)}convertDocumentKey(e,r){const n=be.fromString(e);me(xI(n));const i=new fa(n.get(1),n.get(3)),o=new X(n.popFirst(5));return i.isEqual(r)||en(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}/**
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
 */function nT(t,e,r){let n;return n=t?r&&(r.merge||r.mergeFields)?t.toFirestore(e,r):t.toFirestore(e):e,n}/**
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
 */class xs{constructor(e,r){this.hasPendingWrites=e,this.fromCache=r}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class iT extends eT{constructor(e,r,n,i,o,s){super(e,r,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const r=new ac(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(r,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,r={}){if(this._document){const n=this._document.data.field(Mu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,r.serverTimestamps)}}}class ac extends iT{data(e={}){return super.data(e)}}class AO{constructor(e,r,n,i){this._firestore=e,this._userDataWriter=r,this._snapshot=i,this.metadata=new xs(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(r=>e.push(r)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,r){this._snapshot.docs.forEach(n=>{e.call(r,new ac(this._firestore,this._userDataWriter,n.key,n,new xs(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const r=!!e.includeMetadataChanges;if(r&&this._snapshot.excludesMetadataChanges)throw new K(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===r||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(l=>{const c=new ac(i._firestore,i._userDataWriter,l.doc.key,l.doc,new xs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const c=new ac(i._firestore,i._userDataWriter,l.doc.key,l.doc,new xs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,f=-1;return l.type!==0&&(u=s.indexOf(l.doc.key),s=s.delete(l.doc.key)),l.type!==1&&(s=s.add(l.doc),f=s.indexOf(l.doc.key)),{type:SO(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,r),this._cachedChangesIncludeMetadataChanges=r),this._cachedChanges}}function SO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}class oT extends xO{constructor(e){super(),this.firestore=e}convertBytes(e){return new ko(e)}convertReference(e){const r=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,r)}}function Rl(t,e,r){t=Ar(t,Et);const n=Ar(t.firestore,Ai),i=nT(t.converter,e,r);return Fu(n,[YI(Lu(n),"setDoc",t._key,i,t.converter!==null,r).toMutation(t._key,Kt.none())])}function eh(t,e,r,...n){t=Ar(t,Et);const i=Ar(t.firestore,Ai),o=Lu(i);let s;return s=typeof(e=Pe(e))=="string"||e instanceof Ou?vO(o,"updateDoc",t._key,e,r,n):gO(o,"updateDoc",t._key,e),Fu(i,[s.toMutation(t._key,Kt.exists(!0))])}function CO(t){return Fu(Ar(t.firestore,Ai),[new km(t._key,Kt.none())])}function kO(t,e){const r=Ar(t.firestore,Ai),n=vr(t),i=nT(t.converter,e);return Fu(r,[YI(Lu(t.firestore),"addDoc",n._key,i,t.converter!==null,{}).toMutation(n._key,Kt.exists(!1))]).then(()=>n)}function th(t,...e){var r,n,i;t=Pe(t);let o={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||G_(e[s])||(o=e[s],s++);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(G_(e[s])){const p=e[s];e[s]=(r=p.next)===null||r===void 0?void 0:r.bind(p),e[s+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),e[s+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let c,u,f;if(t instanceof Et)u=Ar(t.firestore,Ai),f=Sm(t._key.path),c={next:p=>{e[s]&&e[s](RO(u,t,p))},error:e[s+1],complete:e[s+2]};else{const p=Ar(t,Li);u=Ar(p.firestore,Ai),f=p._query;const m=new oT(u);c={next:T=>{e[s]&&e[s](new AO(u,m,p,T))},error:e[s+1],complete:e[s+2]},bO(t._query)}return function(m,T,S,P){const N=new oO(P),b=new z2(T,N,S);return m.asyncQueue.enqueueAndForget(async()=>M2(await z_(m),b)),()=>{N.Za(),m.asyncQueue.enqueueAndForget(async()=>$2(await z_(m),b))}}(KI(u),f,l,c)}function Fu(t,e){return function(n,i){const o=new pi;return n.asyncQueue.enqueueAndForget(async()=>X2(await lO(n),i,o)),o.promise}(KI(t),e)}function RO(t,e,r){const n=r.docs.get(e._key),i=new oT(t);return new iT(t,i,e._key,n,new xs(r.hasPendingWrites,r.fromCache),e.converter)}function Jn(){return new Km("serverTimestamp")}(function(e,r=!0){(function(i){Fo=i})(Vo),Sr(new fr("firestore",(n,{instanceIdentifier:i,options:o})=>{const s=n.getProvider("app").getImmediate(),l=new Ai(new AP(n.getProvider("auth-internal")),new RP(n.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new K(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fa(u.options.projectId,f)}(s,i),s);return o=Object.assign({useFetchStreams:r},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Wt(c_,"4.7.3",e),Wt(c_,"4.7.3","esm2017")})();var PO="firebase",NO="10.14.1";/**
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
 */Wt(PO,NO,"app");const sT="@firebase/installations",Zm="0.6.9";/**
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
 */const aT=1e4,lT=`w:${Zm}`,cT="FIS_v2",OO="https://firebaseinstallations.googleapis.com/v1",DO=60*60*1e3,LO="installations",VO="Installations";/**
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
 */const MO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Si=new Ni(LO,VO,MO);function uT(t){return t instanceof kr&&t.code.includes("request-failed")}/**
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
 */function dT({projectId:t}){return`${OO}/projects/${t}/installations`}function hT(t){return{token:t.token,requestStatus:2,expiresIn:FO(t.expiresIn),creationTime:Date.now()}}async function fT(t,e){const n=(await e.json()).error;return Si.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function pT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function $O(t,{refreshToken:e}){const r=pT(t);return r.append("Authorization",UO(e)),r}async function mT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function FO(t){return Number(t.replace("s","000"))}function UO(t){return`${cT} ${t}`}/**
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
 */async function zO({appConfig:t,heartbeatServiceProvider:e},{fid:r}){const n=dT(t),i=pT(t),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:r,authVersion:cT,appId:t.appId,sdkVersion:lT},l={method:"POST",headers:i,body:JSON.stringify(s)},c=await mT(()=>fetch(n,l));if(c.ok){const u=await c.json();return{fid:u.fid||r,registrationStatus:2,refreshToken:u.refreshToken,authToken:hT(u.authToken)}}else throw await fT("Create Installation",c)}/**
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
 */function gT(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function jO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const BO=/^[cdef][\w-]{21}$/,$f="";function qO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const r=HO(t);return BO.test(r)?r:$f}catch{return $f}}function HO(t){return jO(t).substr(0,22)}/**
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
 */function Uu(t){return`${t.appName}!${t.appId}`}/**
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
 */const vT=new Map;function yT(t,e){const r=Uu(t);_T(r,e),WO(r,e)}function _T(t,e){const r=vT.get(t);if(r)for(const n of r)n(e)}function WO(t,e){const r=KO();r&&r.postMessage({key:t,fid:e}),GO()}let ci=null;function KO(){return!ci&&"BroadcastChannel"in self&&(ci=new BroadcastChannel("[Firebase] FID Change"),ci.onmessage=t=>{_T(t.data.key,t.data.fid)}),ci}function GO(){vT.size===0&&ci&&(ci.close(),ci=null)}/**
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
 */const QO="firebase-installations-database",YO=1,Ci="firebase-installations-store";let rh=null;function eg(){return rh||(rh=yu(QO,YO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ci)}}})),rh}async function Yc(t,e){const r=Uu(t),i=(await eg()).transaction(Ci,"readwrite"),o=i.objectStore(Ci),s=await o.get(r);return await o.put(e,r),await i.done,(!s||s.fid!==e.fid)&&yT(t,e.fid),e}async function wT(t){const e=Uu(t),n=(await eg()).transaction(Ci,"readwrite");await n.objectStore(Ci).delete(e),await n.done}async function zu(t,e){const r=Uu(t),i=(await eg()).transaction(Ci,"readwrite"),o=i.objectStore(Ci),s=await o.get(r),l=e(s);return l===void 0?await o.delete(r):await o.put(l,r),await i.done,l&&(!s||s.fid!==l.fid)&&yT(t,l.fid),l}/**
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
 */async function tg(t){let e;const r=await zu(t.appConfig,n=>{const i=XO(n),o=JO(t,i);return e=o.registrationPromise,o.installationEntry});return r.fid===$f?{installationEntry:await e}:{installationEntry:r,registrationPromise:e}}function XO(t){const e=t||{fid:qO(),registrationStatus:0};return bT(e)}function JO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Si.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const r={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=ZO(t,r);return{installationEntry:r,registrationPromise:n}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:eD(t)}:{installationEntry:e}}async function ZO(t,e){try{const r=await zO(t,e);return Yc(t.appConfig,r)}catch(r){throw uT(r)&&r.customData.serverCode===409?await wT(t.appConfig):await Yc(t.appConfig,{fid:e.fid,registrationStatus:0}),r}}async function eD(t){let e=await X_(t.appConfig);for(;e.registrationStatus===1;)await gT(100),e=await X_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:r,registrationPromise:n}=await tg(t);return n||r}return e}function X_(t){return zu(t,e=>{if(!e)throw Si.create("installation-not-found");return bT(e)})}function bT(t){return tD(t)?{fid:t.fid,registrationStatus:0}:t}function tD(t){return t.registrationStatus===1&&t.registrationTime+aT<Date.now()}/**
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
 */async function rD({appConfig:t,heartbeatServiceProvider:e},r){const n=nD(t,r),i=$O(t,r),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:lT,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(s)},c=await mT(()=>fetch(n,l));if(c.ok){const u=await c.json();return hT(u)}else throw await fT("Generate Auth Token",c)}function nD(t,{fid:e}){return`${dT(t)}/${e}/authTokens:generate`}/**
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
 */async function rg(t,e=!1){let r;const n=await zu(t.appConfig,o=>{if(!ET(o))throw Si.create("not-registered");const s=o.authToken;if(!e&&sD(s))return o;if(s.requestStatus===1)return r=iD(t,e),o;{if(!navigator.onLine)throw Si.create("app-offline");const l=lD(o);return r=oD(t,l),l}});return r?await r:n.authToken}async function iD(t,e){let r=await J_(t.appConfig);for(;r.authToken.requestStatus===1;)await gT(100),r=await J_(t.appConfig);const n=r.authToken;return n.requestStatus===0?rg(t,e):n}function J_(t){return zu(t,e=>{if(!ET(e))throw Si.create("not-registered");const r=e.authToken;return cD(r)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function oD(t,e){try{const r=await rD(t,e),n=Object.assign(Object.assign({},e),{authToken:r});return await Yc(t.appConfig,n),r}catch(r){if(uT(r)&&(r.customData.serverCode===401||r.customData.serverCode===404))await wT(t.appConfig);else{const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Yc(t.appConfig,n)}throw r}}function ET(t){return t!==void 0&&t.registrationStatus===2}function sD(t){return t.requestStatus===2&&!aD(t)}function aD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+DO}function lD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function cD(t){return t.requestStatus===1&&t.requestTime+aT<Date.now()}/**
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
 */async function uD(t){const e=t,{installationEntry:r,registrationPromise:n}=await tg(e);return n?n.catch(console.error):rg(e).catch(console.error),r.fid}/**
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
 */async function dD(t,e=!1){const r=t;return await hD(r),(await rg(r,e)).token}async function hD(t){const{registrationPromise:e}=await tg(t);e&&await e}/**
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
 */function fD(t){if(!t||!t.options)throw nh("App Configuration");if(!t.name)throw nh("App Name");const e=["projectId","apiKey","appId"];for(const r of e)if(!t.options[r])throw nh(r);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function nh(t){return Si.create("missing-app-config-values",{valueName:t})}/**
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
 */const IT="installations",pD="installations-internal",mD=t=>{const e=t.getProvider("app").getImmediate(),r=fD(e),n=Lo(e,"heartbeat");return{app:e,appConfig:r,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},gD=t=>{const e=t.getProvider("app").getImmediate(),r=Lo(e,IT).getImmediate();return{getId:()=>uD(r),getToken:i=>dD(r,i)}};function vD(){Sr(new fr(IT,mD,"PUBLIC")),Sr(new fr(pD,gD,"PRIVATE"))}vD();Wt(sT,Zm);Wt(sT,Zm,"esm2017");/**
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
 */const yD="/firebase-messaging-sw.js",_D="/firebase-cloud-messaging-push-scope",TT="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",wD="https://fcmregistrations.googleapis.com/v1",xT="google.c.a.c_id",bD="google.c.a.c_l",ED="google.c.a.ts",ID="google.c.a.e";var Z_;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Z_||(Z_={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var _a;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(_a||(_a={}));/**
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
 */function Vr(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function TD(t){const e="=".repeat((4-t.length%4)%4),r=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(r),i=new Uint8Array(n.length);for(let o=0;o<n.length;++o)i[o]=n.charCodeAt(o);return i}/**
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
 */const ih="fcm_token_details_db",xD=5,e0="fcm_token_object_Store";async function AD(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(ih))return null;let e=null;return(await yu(ih,xD,{upgrade:async(n,i,o,s)=>{var l;if(i<2||!n.objectStoreNames.contains(e0))return;const c=s.objectStore(e0),u=await c.index("fcmSenderId").get(t);if(await c.clear(),!!u){if(i===2){const f=u;if(!f.auth||!f.p256dh||!f.endpoint)return;e={token:f.fcmToken,createTime:(l=f.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:f.auth,p256dh:f.p256dh,endpoint:f.endpoint,swScope:f.swScope,vapidKey:typeof f.vapidKey=="string"?f.vapidKey:Vr(f.vapidKey)}}}else if(i===3){const f=u;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:Vr(f.auth),p256dh:Vr(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:Vr(f.vapidKey)}}}else if(i===4){const f=u;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:Vr(f.auth),p256dh:Vr(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:Vr(f.vapidKey)}}}}}})).close(),await Hd(ih),await Hd("fcm_vapid_details_db"),await Hd("undefined"),SD(e)?e:null}function SD(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const CD="firebase-messaging-database",kD=1,wa="firebase-messaging-store";let oh=null;function AT(){return oh||(oh=yu(CD,kD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wa)}}})),oh}async function RD(t){const e=ST(t),n=await(await AT()).transaction(wa).objectStore(wa).get(e);if(n)return n;{const i=await AD(t.appConfig.senderId);if(i)return await ng(t,i),i}}async function ng(t,e){const r=ST(t),i=(await AT()).transaction(wa,"readwrite");return await i.objectStore(wa).put(e,r),await i.done,e}function ST({appConfig:t}){return t.appId}/**
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
 */const PD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},pt=new Ni("messaging","Messaging",PD);/**
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
 */async function ND(t,e){const r=await og(t),n=CT(e),i={method:"POST",headers:r,body:JSON.stringify(n)};let o;try{o=await(await fetch(ig(t.appConfig),i)).json()}catch(s){throw pt.create("token-subscribe-failed",{errorInfo:s==null?void 0:s.toString()})}if(o.error){const s=o.error.message;throw pt.create("token-subscribe-failed",{errorInfo:s})}if(!o.token)throw pt.create("token-subscribe-no-token");return o.token}async function OD(t,e){const r=await og(t),n=CT(e.subscriptionOptions),i={method:"PATCH",headers:r,body:JSON.stringify(n)};let o;try{o=await(await fetch(`${ig(t.appConfig)}/${e.token}`,i)).json()}catch(s){throw pt.create("token-update-failed",{errorInfo:s==null?void 0:s.toString()})}if(o.error){const s=o.error.message;throw pt.create("token-update-failed",{errorInfo:s})}if(!o.token)throw pt.create("token-update-no-token");return o.token}async function DD(t,e){const n={method:"DELETE",headers:await og(t)};try{const o=await(await fetch(`${ig(t.appConfig)}/${e}`,n)).json();if(o.error){const s=o.error.message;throw pt.create("token-unsubscribe-failed",{errorInfo:s})}}catch(i){throw pt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function ig({projectId:t}){return`${wD}/projects/${t}/registrations`}async function og({appConfig:t,installations:e}){const r=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${r}`})}function CT({p256dh:t,auth:e,endpoint:r,vapidKey:n}){const i={web:{endpoint:r,auth:e,p256dh:t}};return n!==TT&&(i.web.applicationPubKey=n),i}/**
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
 */const LD=7*24*60*60*1e3;async function VD(t){const e=await $D(t.swRegistration,t.vapidKey),r={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Vr(e.getKey("auth")),p256dh:Vr(e.getKey("p256dh"))},n=await RD(t.firebaseDependencies);if(n){if(FD(n.subscriptionOptions,r))return Date.now()>=n.createTime+LD?MD(t,{token:n.token,createTime:Date.now(),subscriptionOptions:r}):n.token;try{await DD(t.firebaseDependencies,n.token)}catch(i){console.warn(i)}return t0(t.firebaseDependencies,r)}else return t0(t.firebaseDependencies,r)}async function MD(t,e){try{const r=await OD(t.firebaseDependencies,e),n=Object.assign(Object.assign({},e),{token:r,createTime:Date.now()});return await ng(t.firebaseDependencies,n),r}catch(r){throw r}}async function t0(t,e){const n={token:await ND(t,e),createTime:Date.now(),subscriptionOptions:e};return await ng(t,n),n.token}async function $D(t,e){const r=await t.pushManager.getSubscription();return r||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:TD(e)})}function FD(t,e){const r=e.vapidKey===t.vapidKey,n=e.endpoint===t.endpoint,i=e.auth===t.auth,o=e.p256dh===t.p256dh;return r&&n&&i&&o}/**
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
 */function r0(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return UD(e,t),zD(e,t),jD(e,t),e}function UD(t,e){if(!e.notification)return;t.notification={};const r=e.notification.title;r&&(t.notification.title=r);const n=e.notification.body;n&&(t.notification.body=n);const i=e.notification.image;i&&(t.notification.image=i);const o=e.notification.icon;o&&(t.notification.icon=o)}function zD(t,e){e.data&&(t.data=e.data)}function jD(t,e){var r,n,i,o,s;if(!e.fcmOptions&&!(!((r=e.notification)===null||r===void 0)&&r.click_action))return;t.fcmOptions={};const l=(i=(n=e.fcmOptions)===null||n===void 0?void 0:n.link)!==null&&i!==void 0?i:(o=e.notification)===null||o===void 0?void 0:o.click_action;l&&(t.fcmOptions.link=l);const c=(s=e.fcmOptions)===null||s===void 0?void 0:s.analytics_label;c&&(t.fcmOptions.analyticsLabel=c)}/**
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
 */function BD(t){return typeof t=="object"&&!!t&&xT in t}/**
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
 */function qD(t){if(!t||!t.options)throw sh("App Configuration Object");if(!t.name)throw sh("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:r}=t;for(const n of e)if(!r[n])throw sh(n);return{appName:t.name,projectId:r.projectId,apiKey:r.apiKey,appId:r.appId,senderId:r.messagingSenderId}}function sh(t){return pt.create("missing-app-config-values",{valueName:t})}/**
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
 */class HD{constructor(e,r,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=qD(e);this.firebaseDependencies={app:e,appConfig:i,installations:r,analyticsProvider:n}}_delete(){return Promise.resolve()}}/**
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
 */async function WD(t){try{t.swRegistration=await navigator.serviceWorker.register(yD,{scope:_D}),t.swRegistration.update().catch(()=>{})}catch(e){throw pt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function KD(t,e){if(!e&&!t.swRegistration&&await WD(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw pt.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function GD(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=TT)}/**
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
 */async function kT(t,e){if(!navigator)throw pt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw pt.create("permission-blocked");return await GD(t,e==null?void 0:e.vapidKey),await KD(t,e==null?void 0:e.serviceWorkerRegistration),VD(t)}/**
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
 */async function QD(t,e,r){const n=YD(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(n,{message_id:r[xT],message_name:r[bD],message_time:r[ED],message_device_time:Math.floor(Date.now()/1e3)})}function YD(t){switch(t){case _a.NOTIFICATION_CLICKED:return"notification_open";case _a.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function XD(t,e){const r=e.data;if(!r.isFirebaseMessaging)return;t.onMessageHandler&&r.messageType===_a.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(r0(r)):t.onMessageHandler.next(r0(r)));const n=r.data;BD(n)&&n[ID]==="1"&&await QD(t,r.messageType,n)}const n0="@firebase/messaging",i0="0.12.12";/**
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
 */const JD=t=>{const e=new HD(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",r=>XD(e,r)),e},ZD=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:n=>kT(e,n)}};function eL(){Sr(new fr("messaging",JD,"PUBLIC")),Sr(new fr("messaging-internal",ZD,"PRIVATE")),Wt(n0,i0),Wt(n0,i0,"esm2017")}/**
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
 */async function tL(){try{await tE()}catch{return!1}return typeof window<"u"&&eE()&&YC()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function rL(t,e){if(!navigator)throw pt.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function nL(t=lm()){return tL().then(e=>{if(!e)throw pt.create("unsupported-browser")},e=>{throw pt.create("indexed-db-unsupported")}),Lo(Pe(t),"messaging").getImmediate()}async function iL(t,e){return t=Pe(t),kT(t,e)}function oL(t,e){return t=Pe(t),rL(t,e)}eL();const sL={apiKey:"AIzaSyCfkeRu4DVuSBBBa9bc0rrhtu-gCixFqIo",authDomain:"barbacker-6c683.firebaseapp.com",projectId:"barbacker-6c683",storageBucket:"barbacker-6c683.firebasestorage.app",messagingSenderId:"869145643734",appId:"1:869145643734:web:d902468d6942df6bc81777"},sg=iE(sL),ir=dO(sg),fs=EP(sg),RT=nL(sg),aL=new $r;new Vs("apple.com");const lL=async()=>{try{if(await Notification.requestPermission()==="granted")return await iL(RT,{vapidKey:"G-H8717DGSJ8"})}catch(t){console.error("Notification permission denied",t)}return null},cL=()=>new Promise(t=>{oL(RT,e=>{t(e)})});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lc=globalThis,ag=lc.ShadowRoot&&(lc.ShadyCSS===void 0||lc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,lg=Symbol(),o0=new WeakMap;let PT=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==lg)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(ag&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=o0.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&o0.set(r,e))}return e}toString(){return this.cssText}};const uL=t=>new PT(typeof t=="string"?t:t+"",void 0,lg),ge=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new PT(r,t,lg)},dL=(t,e)=>{if(ag)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),i=lc.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)}},s0=ag?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return uL(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:hL,defineProperty:fL,getOwnPropertyDescriptor:pL,getOwnPropertyNames:mL,getOwnPropertySymbols:gL,getPrototypeOf:vL}=Object,On=globalThis,a0=On.trustedTypes,yL=a0?a0.emptyScript:"",ah=On.reactiveElementPolyfillSupport,zs=(t,e)=>t,Xc={toAttribute(t,e){switch(e){case Boolean:t=t?yL:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},cg=(t,e)=>!hL(t,e),l0={attribute:!0,type:String,converter:Xc,reflect:!1,useDefault:!1,hasChanged:cg};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),On.litPropertyMetadata??(On.litPropertyMetadata=new WeakMap);let Wi=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=l0){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,r);i!==void 0&&fL(this.prototype,e,i)}}static getPropertyDescriptor(e,r,n){const{get:i,set:o}=pL(this.prototype,e)??{get(){return this[r]},set(s){this[r]=s}};return{get:i,set(s){const l=i==null?void 0:i.call(this);o==null||o.call(this,s),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??l0}static _$Ei(){if(this.hasOwnProperty(zs("elementProperties")))return;const e=vL(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(zs("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(zs("properties"))){const r=this.properties,n=[...mL(r),...gL(r)];for(const i of n)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)r.unshift(s0(i))}else e!==void 0&&r.push(s0(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dL(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$ET(e,r){var o;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const s=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:Xc).toAttribute(r,n.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,r){var o,s;const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const l=n.getPropertyOptions(i),c=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:Xc;this._$Em=i;const u=c.fromAttribute(r,l.type);this[i]=u??((s=this._$Ej)==null?void 0:s.get(i))??u,this._$Em=null}}requestUpdate(e,r,n,i=!1,o){var s;if(e!==void 0){const l=this.constructor;if(i===!1&&(o=this[e]),n??(n=l.getPropertyOptions(e)),!((n.hasChanged??cg)(o,r)||n.useDefault&&n.reflect&&o===((s=this._$Ej)==null?void 0:s.get(e))&&!this.hasAttribute(l._$Eu(e,n))))return;this.C(e,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,s??r??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(r=void 0),this._$AL.set(e,r)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i){const{wrapped:l}=s,c=this[o];l!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,s,c)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(r)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(e){}firstUpdated(e){}};Wi.elementStyles=[],Wi.shadowRootOptions={mode:"open"},Wi[zs("elementProperties")]=new Map,Wi[zs("finalized")]=new Map,ah==null||ah({ReactiveElement:Wi}),(On.reactiveElementVersions??(On.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _L={attribute:!0,type:String,converter:Xc,reflect:!1,hasChanged:cg},wL=(t=_L,e,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),n==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(r.name,t),n==="accessor"){const{name:s}=r;return{set(l){const c=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,c,t,!0,l)},init(l){return l!==void 0&&this.C(s,void 0,t,l),l}}}if(n==="setter"){const{name:s}=r;return function(l){const c=this[s];e.call(this,l),this.requestUpdate(s,c,t,!0,l)}}throw Error("Unsupported decorator location: "+n)};function $(t){return(e,r)=>typeof r=="object"?wL(t,e,r):((n,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,n),s?Object.getOwnPropertyDescriptor(i,o):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function At(t){return $({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ug=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ve(t,e){return(r,n,i)=>{const o=s=>{var l;return((l=s.renderRoot)==null?void 0:l.querySelector(t))??null};return ug(r,n,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let bL;function EL(t){return(e,r)=>ug(e,r,{get(){return(this.renderRoot??bL??(bL=document.createDocumentFragment())).querySelectorAll(t)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Bo(t){return(e,r)=>{const{slot:n,selector:i}=t??{},o="slot"+(n?`[name=${n}]`:":not([name])");return ug(e,r,{get(){var c;const s=(c=this.renderRoot)==null?void 0:c.querySelector(o),l=(s==null?void 0:s.assignedElements(t))??[];return i===void 0?l:l.filter(u=>u.matches(i))}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const js=globalThis,c0=t=>t,Jc=js.trustedTypes,u0=Jc?Jc.createPolicy("lit-html",{createHTML:t=>t}):void 0,NT="$lit$",_n=`lit$${Math.random().toFixed(9).slice(2)}$`,OT="?"+_n,IL=`<${OT}>`,ki=document,ba=()=>ki.createComment(""),Ea=t=>t===null||typeof t!="object"&&typeof t!="function",dg=Array.isArray,TL=t=>dg(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",lh=`[ 	
\f\r]`,ps=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,d0=/-->/g,h0=/>/g,Zn=RegExp(`>|${lh}(?:([^\\s"'>=/]+)(${lh}*=${lh}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),f0=/'/g,p0=/"/g,DT=/^(?:script|style|textarea|title)$/i,xL=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),Y=xL(1),qt=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),m0=new WeakMap,ui=ki.createTreeWalker(ki,129);function LT(t,e){if(!dg(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return u0!==void 0?u0.createHTML(e):e}const AL=(t,e)=>{const r=t.length-1,n=[];let i,o=e===2?"<svg>":e===3?"<math>":"",s=ps;for(let l=0;l<r;l++){const c=t[l];let u,f,p=-1,m=0;for(;m<c.length&&(s.lastIndex=m,f=s.exec(c),f!==null);)m=s.lastIndex,s===ps?f[1]==="!--"?s=d0:f[1]!==void 0?s=h0:f[2]!==void 0?(DT.test(f[2])&&(i=RegExp("</"+f[2],"g")),s=Zn):f[3]!==void 0&&(s=Zn):s===Zn?f[0]===">"?(s=i??ps,p=-1):f[1]===void 0?p=-2:(p=s.lastIndex-f[2].length,u=f[1],s=f[3]===void 0?Zn:f[3]==='"'?p0:f0):s===p0||s===f0?s=Zn:s===d0||s===h0?s=ps:(s=Zn,i=void 0);const T=s===Zn&&t[l+1].startsWith("/>")?" ":"";o+=s===ps?c+IL:p>=0?(n.push(u),c.slice(0,p)+NT+c.slice(p)+_n+T):c+_n+(p===-2?l:T)}return[LT(t,o+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class Ia{constructor({strings:e,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const l=e.length-1,c=this.parts,[u,f]=AL(e,r);if(this.el=Ia.createElement(u,n),ui.currentNode=this.el.content,r===2||r===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=ui.nextNode())!==null&&c.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const p of i.getAttributeNames())if(p.endsWith(NT)){const m=f[s++],T=i.getAttribute(p).split(_n),S=/([.?@])?(.*)/.exec(m);c.push({type:1,index:o,name:S[2],strings:T,ctor:S[1]==="."?CL:S[1]==="?"?kL:S[1]==="@"?RL:ju}),i.removeAttribute(p)}else p.startsWith(_n)&&(c.push({type:6,index:o}),i.removeAttribute(p));if(DT.test(i.tagName)){const p=i.textContent.split(_n),m=p.length-1;if(m>0){i.textContent=Jc?Jc.emptyScript:"";for(let T=0;T<m;T++)i.append(p[T],ba()),ui.nextNode(),c.push({type:2,index:++o});i.append(p[m],ba())}}}else if(i.nodeType===8)if(i.data===OT)c.push({type:2,index:o});else{let p=-1;for(;(p=i.data.indexOf(_n,p+1))!==-1;)c.push({type:7,index:o}),p+=_n.length-1}o++}}static createElement(e,r){const n=ki.createElement("template");return n.innerHTML=e,n}}function Ro(t,e,r=t,n){var s,l;if(e===qt)return e;let i=n!==void 0?(s=r._$Co)==null?void 0:s[n]:r._$Cl;const o=Ea(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(t),i._$AT(t,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=i:r._$Cl=i),i!==void 0&&(e=Ro(t,i._$AS(t,e.values),i,n)),e}class SL{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,i=((e==null?void 0:e.creationScope)??ki).importNode(r,!0);ui.currentNode=i;let o=ui.nextNode(),s=0,l=0,c=n[0];for(;c!==void 0;){if(s===c.index){let u;c.type===2?u=new za(o,o.nextSibling,this,e):c.type===1?u=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(u=new PL(o,this,e)),this._$AV.push(u),c=n[++l]}s!==(c==null?void 0:c.index)&&(o=ui.nextNode(),s++)}return ui.currentNode=ki,i}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class za{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,n,i){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ro(this,e,r),Ea(e)?e===B||e==null||e===""?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==qt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):TL(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==B&&Ea(this._$AH)?this._$AA.nextSibling.data=e:this.T(ki.createTextNode(e)),this._$AH=e}$(e){var o;const{values:r,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Ia.createElement(LT(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(r);else{const s=new SL(i,this),l=s.u(this.options);s.p(r),this.T(l),this._$AH=s}}_$AC(e){let r=m0.get(e.strings);return r===void 0&&m0.set(e.strings,r=new Ia(e)),r}k(e){dg(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of e)i===r.length?r.push(n=new za(this.O(ba()),this.O(ba()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);e!==this._$AB;){const i=c0(e).nextSibling;c0(e).remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class ju{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,i,o){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=B}_$AI(e,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)e=Ro(this,e,r,0),s=!Ea(e)||e!==this._$AH&&e!==qt,s&&(this._$AH=e);else{const l=e;let c,u;for(e=o[0],c=0;c<o.length-1;c++)u=Ro(this,l[n+c],r,c),u===qt&&(u=this._$AH[c]),s||(s=!Ea(u)||u!==this._$AH[c]),u===B?e=B:e!==B&&(e+=(u??"")+o[c+1]),this._$AH[c]=u}s&&!i&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class CL extends ju{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}}class kL extends ju{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==B)}}class RL extends ju{constructor(e,r,n,i,o){super(e,r,n,i,o),this.type=5}_$AI(e,r=this){if((e=Ro(this,e,r,0)??B)===qt)return;const n=this._$AH,i=e===B&&n!==B||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==B&&(n===B||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class PL{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ro(this,e)}}const ch=js.litHtmlPolyfillSupport;ch==null||ch(Ia,za),(js.litHtmlVersions??(js.litHtmlVersions=[])).push("3.3.2");const VT=(t,e,r)=>{const n=(r==null?void 0:r.renderBefore)??e;let i=n._$litPart$;if(i===void 0){const o=(r==null?void 0:r.renderBefore)??null;n._$litPart$=i=new za(e.insertBefore(ba(),o),o,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mi=globalThis;let Te=class extends Wi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=VT(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return qt}};var A0;Te._$litElement$=!0,Te.finalized=!0,(A0=mi.litElementHydrateSupport)==null||A0.call(mi,{LitElement:Te});const uh=mi.litElementPolyfillSupport;uh==null||uh({LitElement:Te});(mi.litElementVersions??(mi.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class NL extends Te{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return Y`<span class="shadow"></span>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const OL=ge`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ff=class extends NL{};Ff.styles=[OL];Ff=R([Ue("md-elevation")],Ff);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const MT=Symbol("attachableController");let cc;cc=new MutationObserver(t=>{var e;for(const r of t)(e=r.target[MT])==null||e.hostConnected()});class $T{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}set control(e){e?this.attach(e):this.detach()}constructor(e,r){this.host=e,this.onControlChange=r,this.currentControl=null,e.addController(this),e[MT]=this,cc==null||cc.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const DL=["focusin","focusout","pointerdown"];class hg extends Te{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new $T(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(e){var r;if(!e[g0]){switch(e.type){default:return;case"focusin":this.visible=((r=this.control)==null?void 0:r.matches(":focus-visible"))??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[g0]=!0}}onControlChange(e,r){for(const n of DL)e==null||e.removeEventListener(n,this),r==null||r.addEventListener(n,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}R([$({type:Boolean,reflect:!0})],hg.prototype,"visible",void 0);R([$({type:Boolean,reflect:!0})],hg.prototype,"inward",void 0);const g0=Symbol("handledByFocusRing");/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const LL=ge`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Uf=class extends hg{};Uf.styles=[LL];Uf=R([Ue("md-focus-ring")],Uf);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fn={ATTRIBUTE:1,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},fg=t=>(...e)=>({_$litDirective$:t,values:e});let pg=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mr=fg(class extends pg{constructor(t){var e;if(super(t),t.type!==fn.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((n=this.nt)!=null&&n.has(o))&&this.st.add(o);return this.render(e)}const r=t.element.classList;for(const o of this.st)o in e||(r.remove(o),this.st.delete(o));for(const o in e){const s=!!e[o];s===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(s?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return qt}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Po={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)"};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const VL=450,v0=225,ML=.2,$L=10,FL=75,UL=.35,zL="::after",jL="forwards";var _t;(function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(_t||(_t={}));const BL=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],qL=150,dh=window.matchMedia("(forced-colors: active)");class ja extends Te{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=_t.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new $T(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const e={hovered:this.hovered,pressed:this.pressed};return Y`<div class="surface ${mr(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==_t.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===_t.HOLDING){this.state=_t.WAITING_FOR_CLICK;return}if(this.state===_t.TOUCH_DELAY){this.state=_t.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=_t.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=_t.TOUCH_DELAY,await new Promise(r=>{setTimeout(r,qL)}),this.state===_t.TOUCH_DELAY&&(this.state=_t.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===_t.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===_t.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:r}=this.getBoundingClientRect(),n=Math.max(e,r),i=Math.max(UL*n,FL),o=Math.floor(n*ML),l=Math.sqrt(r**2+e**2)+$L;this.initialSize=o,this.rippleScale=`${(l+i)/o}`,this.rippleSize=`${o}px`}getNormalizedPointerEventCoords(e){const{scrollX:r,scrollY:n}=window,{left:i,top:o}=this.getBoundingClientRect(),s=r+i,l=n+o,{pageX:c,pageY:u}=e;return{x:c-s,y:u-l}}getTranslationCoordinates(e){const{height:r,width:n}=this.getBoundingClientRect(),i={x:(n-this.initialSize)/2,y:(r-this.initialSize)/2};let o;return e instanceof PointerEvent?o=this.getNormalizedPointerEventCoords(e):o={x:n/2,y:r/2},o={x:o.x-this.initialSize/2,y:o.y-this.initialSize/2},{startPoint:o,endPoint:i}}startPressAnimation(e){var s;if(!this.mdRoot)return;this.pressed=!0,(s=this.growAnimation)==null||s.cancel(),this.determineRippleSize();const{startPoint:r,endPoint:n}=this.getTranslationCoordinates(e),i=`${r.x}px, ${r.y}px`,o=`${n.x}px, ${n.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${i}) scale(1)`,`translate(${o}) scale(${this.rippleScale})`]},{pseudoElement:zL,duration:VL,easing:Po.STANDARD,fill:jL})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=_t.INACTIVE;const e=this.growAnimation;let r=1/0;if(typeof(e==null?void 0:e.currentTime)=="number"?r=e.currentTime:e!=null&&e.currentTime&&(r=e.currentTime.to("ms").value),r>=v0){this.pressed=!1;return}await new Promise(n=>{setTimeout(n,v0-r)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);const r=e.buttons===1;return this.isTouch(e)||r}inBounds({x:e,y:r}){const{top:n,left:i,bottom:o,right:s}=this.getBoundingClientRect();return e>=i&&e<=s&&r>=n&&r<=o}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){if(!(dh!=null&&dh.matches))switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break}}onControlChange(e,r){for(const n of BL)e==null||e.removeEventListener(n,this),r==null||r.addEventListener(n,this)}}R([$({type:Boolean,reflect:!0})],ja.prototype,"disabled",void 0);R([At()],ja.prototype,"hovered",void 0);R([At()],ja.prototype,"pressed",void 0);R([Ve(".surface")],ja.prototype,"mdRoot",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const HL=ge`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let zf=class extends ja{};zf.styles=[HL];zf=R([Ue("md-ripple")],zf);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const FT=["role","ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];FT.map(UT);function UT(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Vi(t){for(const e of FT)t.createProperty(e,{attribute:UT(e),reflect:!0});t.addInitializer(e=>{const r={hostConnected(){e.setAttribute("role","presentation")}};e.addController(r)})}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Xe=Symbol("internals"),hh=Symbol("privateInternals");function Bu(t){class e extends t{get[Xe](){return this[hh]||(this[hh]=this.attachInternals()),this[hh]}}return e}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function zT(t){t.addInitializer(e=>{const r=e;r.addEventListener("click",async n=>{const{type:i,[Xe]:o}=r,{form:s}=o;if(!(!s||i==="button")&&(await new Promise(l=>{setTimeout(l)}),!n.defaultPrevented)){if(i==="reset"){s.reset();return}s.addEventListener("submit",l=>{Object.defineProperty(l,"submitter",{configurable:!0,enumerable:!0,get:()=>r})},{capture:!0,once:!0}),o.setFormValue(r.value),s.requestSubmit()}})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function WL(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function jT(t){return t.currentTarget!==t.target||t.composedPath()[0]!==t.target||t.target.disabled?!1:!KL(t)}function KL(t){const e=jf;return e&&(t.preventDefault(),t.stopImmediatePropagation()),GL(),e}let jf=!1;async function GL(){jf=!0,await null,jf=!1}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const QL=Bu(Te);class nt extends QL{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Xe].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.handleActivationClick=e=>{!jT(e)||!this.buttonElement||(this.focus(),WL(this.buttonElement))},this.addEventListener("click",this.handleActivationClick)}focus(){var e;(e=this.buttonElement)==null||e.focus()}blur(){var e;(e=this.buttonElement)==null||e.blur()}render(){var i;const e=this.disabled&&!this.href,r=this.href?this.renderLink():this.renderButton(),n=this.href?"link":"button";return Y`
      ${(i=this.renderElevationOrOutline)==null?void 0:i.call(this)}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${n}></md-focus-ring>
      <md-ripple
        part="ripple"
        for=${n}
        ?disabled="${e}"></md-ripple>
      ${r}
    `}renderButton(){const{ariaLabel:e,ariaHasPopup:r,ariaExpanded:n}=this;return Y`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-label="${e||B}"
      aria-haspopup="${r||B}"
      aria-expanded="${n||B}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:e,ariaHasPopup:r,ariaExpanded:n}=this;return Y`<a
      id="link"
      class="button"
      aria-label="${e||B}"
      aria-haspopup="${r||B}"
      aria-expanded="${n||B}"
      href=${this.href}
      target=${this.target||B}
      >${this.renderContent()}
    </a>`}renderContent(){const e=Y`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return Y`
      <span class="touch"></span>
      ${this.trailingIcon?B:e}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?e:B}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}Vi(nt),zT(nt);nt.formAssociated=!0;nt.shadowRootOptions={mode:"open",delegatesFocus:!0};R([$({type:Boolean,reflect:!0})],nt.prototype,"disabled",void 0);R([$()],nt.prototype,"href",void 0);R([$()],nt.prototype,"target",void 0);R([$({type:Boolean,attribute:"trailing-icon",reflect:!0})],nt.prototype,"trailingIcon",void 0);R([$({type:Boolean,attribute:"has-icon",reflect:!0})],nt.prototype,"hasIcon",void 0);R([$()],nt.prototype,"type",void 0);R([$({reflect:!0})],nt.prototype,"value",void 0);R([Ve(".button")],nt.prototype,"buttonElement",void 0);R([Bo({slot:"icon",flatten:!0})],nt.prototype,"assignedIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class YL extends nt{renderElevationOrOutline(){return Y`<md-elevation part="elevation"></md-elevation>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const XL=ge`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_container-shape-start-start: var(--md-filled-button-container-shape-start-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-button-container-shape-start-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-button-container-shape-end-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-button-container-shape-end-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px)}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const BT=ge`md-elevation{transition-duration:280ms}:host([disabled]) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host([disabled]) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const qu=ge`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host([disabled]) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host([disabled]) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host([disabled]){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([disabled]) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Bf=class extends YL{};Bf.styles=[qu,BT,XL];Bf=R([Ue("md-filled-button")],Bf);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class JL extends nt{renderElevationOrOutline(){return Y`<md-elevation part="elevation"></md-elevation>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ZL=ge`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-filled-tonal-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-tonal-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-tonal-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-tonal-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_container-shape-start-start: var(--md-filled-tonal-button-container-shape-start-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-tonal-button-container-shape-start-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-tonal-button-container-shape-end-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-tonal-button-container-shape-end-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let qf=class extends JL{};qf.styles=[qu,BT,ZL];qf=R([Ue("md-filled-tonal-button")],qf);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class eV extends nt{renderElevationOrOutline(){return Y`<div class="outline"></div>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const tV=ge`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-outlined-button-container-shape-start-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-outlined-button-container-shape-start-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-outlined-button-container-shape-end-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-outlined-button-container-shape-end-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}.outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}:host(:active) .outline{border-color:var(--_pressed-outline-color)}:host([disabled]) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){:host([disabled]) .background{border-color:GrayText}:host([disabled]) .outline{opacity:1}}.outline,md-ripple{border-width:var(--_outline-width)}md-ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Hf=class extends eV{};Hf.styles=[qu,tV];Hf=R([Ue("md-outlined-button")],Hf);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class rV extends nt{}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const nV=ge`:host{--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-text-button-container-shape-start-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-text-button-container-shape-start-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-text-button-container-shape-end-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-text-button-container-shape-end-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Wf=class extends rV{};Wf.styles=[qu,nV];Wf=R([Ue("md-text-button")],Wf);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ne extends Te{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.noAsterisk=!1,this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){const e=this.count??-1,r=this.max??-1;return e<0||r<=0?"":`${e} / ${r}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(e){e.has("disabled")&&e.get("disabled")!==void 0&&(this.disableTransitions=!0),this.disabled&&this.focused&&(e.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:e.get("focused"),wasPopulated:e.get("populated")}),super.update(e)}render(){var o,s,l;const e=this.renderLabel(!0),r=this.renderLabel(!1),n=(o=this.renderOutline)==null?void 0:o.call(this,e),i={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return Y`
      <div class="field ${mr(i)}">
        <div class="container-overflow">
          ${(s=this.renderBackground)==null?void 0:s.call(this)} ${(l=this.renderIndicator)==null?void 0:l.call(this)} ${n}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${r} ${n?B:e}
              </div>
              <div class="content">
                <slot></slot>
              </div>
            </div>
            <div class="end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>
        ${this.renderSupportingText()}
      </div>
    `}updated(e){(e.has("supportingText")||e.has("errorText")||e.has("count")||e.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame(()=>{this.refreshErrorAlert=!1}),this.disableTransitions&&requestAnimationFrame(()=>{this.disableTransitions=!1})}renderSupportingText(){const{supportingOrErrorText:e,counterText:r}=this;if(!e&&!r)return B;const n=Y`<span>${e}</span>`,i=r?Y`<span class="counter">${r}</span>`:B,s=this.error&&this.errorText&&!this.refreshErrorAlert?"alert":B;return Y`
      <div class="supporting-text" role=${s}>${n}${i}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(const e of this.slottedAriaDescribedBy)VT(Y`${this.supportingOrErrorText} ${this.counterText}`,e),e.setAttribute("hidden","")}renderLabel(e){if(!this.label)return B;let r;e?r=this.focused||this.populated||this.isAnimating:r=!this.focused&&!this.populated&&!this.isAnimating;const n={hidden:!r,floating:e,resting:!e},i=`${this.label}${this.required&&!this.noAsterisk?"*":""}`;return Y`
      <span class="label ${mr(n)}" aria-hidden=${!r}
        >${i}</span
      >
    `}animateLabelIfNeeded({wasFocused:e,wasPopulated:r}){var o,s,l;if(!this.label)return;e??(e=this.focused),r??(r=this.populated);const n=e||r,i=this.focused||this.populated;n!==i&&(this.isAnimating=!0,(o=this.labelAnimation)==null||o.cancel(),this.labelAnimation=(s=this.floatingLabelEl)==null?void 0:s.animate(this.getLabelKeyframes(),{duration:150,easing:Po.STANDARD}),(l=this.labelAnimation)==null||l.addEventListener("finish",()=>{this.isAnimating=!1}))}getLabelKeyframes(){const{floatingLabelEl:e,restingLabelEl:r}=this;if(!e||!r)return[];const{x:n,y:i,height:o}=e.getBoundingClientRect(),{x:s,y:l,height:c}=r.getBoundingClientRect(),u=e.scrollWidth,f=r.scrollWidth,p=f/u,m=s-n,T=l-i+Math.round((c-o*p)/2),S=`translateX(${m}px) translateY(${T}px) scale(${p})`,P="translateX(0) translateY(0) scale(1)",N=r.clientWidth,y=f>N?`${N/p}px`:"";return this.focused||this.populated?[{transform:S,width:y},{transform:P,width:y}]:[{transform:P,width:y},{transform:S,width:y}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}}R([$({type:Boolean})],Ne.prototype,"disabled",void 0);R([$({type:Boolean})],Ne.prototype,"error",void 0);R([$({type:Boolean})],Ne.prototype,"focused",void 0);R([$()],Ne.prototype,"label",void 0);R([$({type:Boolean,attribute:"no-asterisk"})],Ne.prototype,"noAsterisk",void 0);R([$({type:Boolean})],Ne.prototype,"populated",void 0);R([$({type:Boolean})],Ne.prototype,"required",void 0);R([$({type:Boolean})],Ne.prototype,"resizable",void 0);R([$({attribute:"supporting-text"})],Ne.prototype,"supportingText",void 0);R([$({attribute:"error-text"})],Ne.prototype,"errorText",void 0);R([$({type:Number})],Ne.prototype,"count",void 0);R([$({type:Number})],Ne.prototype,"max",void 0);R([$({type:Boolean,attribute:"has-start"})],Ne.prototype,"hasStart",void 0);R([$({type:Boolean,attribute:"has-end"})],Ne.prototype,"hasEnd",void 0);R([Bo({slot:"aria-describedby"})],Ne.prototype,"slottedAriaDescribedBy",void 0);R([At()],Ne.prototype,"isAnimating",void 0);R([At()],Ne.prototype,"refreshErrorAlert",void 0);R([At()],Ne.prototype,"disableTransitions",void 0);R([Ve(".label.floating")],Ne.prototype,"floatingLabelEl",void 0);R([Ve(".label.resting")],Ne.prototype,"restingLabelEl",void 0);R([Ve(".container")],Ne.prototype,"containerEl",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class iV extends Ne{renderBackground(){return Y`
      <div class="background"></div>
      <div class="state-layer"></div>
    `}renderIndicator(){return Y`<div class="active-indicator"></div>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const oV=ge`@layer styles{:host{--_active-indicator-color: var(--md-filled-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-field-active-indicator-height, 1px);--_bottom-space: var(--md-filled-field-bottom-space, 16px);--_container-color: var(--md-filled-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_content-color: var(--md-filled-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-filled-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-filled-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-filled-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-weight: var(--md-filled-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-active-indicator-color: var(--md-filled-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-field-disabled-container-opacity, 0.04);--_disabled-content-color: var(--md-filled-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-filled-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-filled-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-filled-field-disabled-leading-content-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-filled-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-filled-field-disabled-trailing-content-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-content-color: var(--md-filled-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-active-indicator-color: var(--md-filled-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-content-color: var(--md-filled-field-error-focus-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-label-text-color: var(--md-filled-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-filled-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-filled-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-content-color: var(--md-filled-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-filled-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-filled-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-filled-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-filled-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-filled-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-field-focus-active-indicator-height, 3px);--_focus-content-color: var(--md-filled-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-filled-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-filled-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-field-hover-active-indicator-height, 1px);--_hover-content-color: var(--md-filled-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-content-color: var(--md-filled-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-filled-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-filled-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-filled-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-filled-field-leading-space, 16px);--_supporting-text-color: var(--md-filled-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-filled-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-filled-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-filled-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-filled-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-filled-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-filled-field-top-space, 16px);--_trailing-content-color: var(--md-filled-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-filled-field-trailing-space, 16px);--_with-label-bottom-space: var(--md-filled-field-with-label-bottom-space, 8px);--_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px);--_container-shape-start-start: var(--md-filled-field-container-shape-start-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-field-container-shape-start-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-field-container-shape-end-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-field-container-shape-end-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)))}.background,.state-layer{border-radius:inherit;inset:0;pointer-events:none;position:absolute}.background{background:var(--_container-color)}.state-layer{visibility:hidden}.field:not(.disabled):hover .state-layer{visibility:visible}.label.floating{position:absolute;top:var(--_with-label-top-space)}.field:not(.with-start) .label-wrapper{margin-inline-start:var(--_leading-space)}.field:not(.with-end) .label-wrapper{margin-inline-end:var(--_trailing-space)}.active-indicator{inset:auto 0 0 0;pointer-events:none;position:absolute;width:100%;z-index:1}.active-indicator::before,.active-indicator::after{border-bottom:var(--_active-indicator-height) solid var(--_active-indicator-color);inset:auto 0 0 0;content:"";position:absolute;width:100%}.active-indicator::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .active-indicator::after{opacity:1}.field:not(.with-start) .content ::slotted(*){padding-inline-start:var(--_leading-space)}.field:not(.with-end) .content ::slotted(*){padding-inline-end:var(--_trailing-space)}.field:not(.no-label) .content ::slotted(:not(textarea)){padding-bottom:var(--_with-label-bottom-space);padding-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}.field:not(.no-label) .content ::slotted(textarea){margin-bottom:var(--_with-label-bottom-space);margin-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}:hover .active-indicator::before{border-bottom-color:var(--_hover-active-indicator-color);border-bottom-width:var(--_hover-active-indicator-height)}.active-indicator::after{border-bottom-color:var(--_focus-active-indicator-color);border-bottom-width:var(--_focus-active-indicator-height)}:hover .state-layer{background:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.disabled .active-indicator::before{border-bottom-color:var(--_disabled-active-indicator-color);border-bottom-width:var(--_disabled-active-indicator-height);opacity:var(--_disabled-active-indicator-opacity)}.disabled .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.error .active-indicator::before{border-bottom-color:var(--_error-active-indicator-color)}.error:hover .active-indicator::before{border-bottom-color:var(--_error-hover-active-indicator-color)}.error:hover .state-layer{background:var(--_error-hover-state-layer-color);opacity:var(--_error-hover-state-layer-opacity)}.error .active-indicator::after{border-bottom-color:var(--_error-focus-active-indicator-color)}.resizable .container{bottom:var(--_focus-active-indicator-height);clip-path:inset(var(--_focus-active-indicator-height) 0 0 0)}.resizable .container>*{top:var(--_focus-active-indicator-height)}}@layer hcm{@media(forced-colors: active){.disabled .active-indicator::before{border-color:GrayText;opacity:1}}}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const sV=ge`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Kf=class extends iV{};Kf.styles=[sV,oV];Kf=R([Ue("md-filled-field")],Kf);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qT=Symbol.for(""),aV=t=>{if((t==null?void 0:t.r)===qT)return t==null?void 0:t._$litStatic$},gi=(t,...e)=>({_$litStatic$:e.reduce((r,n,i)=>r+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+t[i+1],t[0]),r:qT}),y0=new Map,lV=t=>(e,...r)=>{const n=r.length;let i,o;const s=[],l=[];let c,u=0,f=!1;for(;u<n;){for(c=e[u];u<n&&(o=r[u],(i=aV(o))!==void 0);)c+=i+e[++u],f=!0;u!==n&&l.push(o),s.push(c),u++}if(u===n&&s.push(e[n]),f){const p=s.join("$$lit$$");(e=y0.get(p))===void 0&&(s.raw=s,y0.set(p,e=s)),r=l}return t(e,...r)},mg=lV(Y);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const cV=ge`:host{--_active-indicator-color: var(--md-filled-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-text-field-active-indicator-height, 1px);--_caret-color: var(--md-filled-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-color: var(--md-filled-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-active-indicator-color: var(--md-filled-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-text-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-text-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-text-field-disabled-container-opacity, 0.04);--_disabled-input-text-color: var(--md-filled-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-filled-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-filled-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filled-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-filled-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filled-text-field-disabled-trailing-icon-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-active-indicator-color: var(--md-filled-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-caret-color: var(--md-filled-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-filled-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-filled-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-filled-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-filled-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-input-text-color: var(--md-filled-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-filled-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-text-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-filled-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-filled-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-filled-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-filled-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-filled-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-text-field-focus-active-indicator-height, 3px);--_focus-input-text-color: var(--md-filled-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-filled-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-filled-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-text-field-hover-active-indicator-height, 1px);--_hover-input-text-color: var(--md-filled-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-icon-color: var(--md-filled-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-text-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filled-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-filled-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-filled-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-filled-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-filled-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-filled-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-filled-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-filled-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-filled-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-filled-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-filled-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);--_supporting-text-color: var(--md-filled-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-filled-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-filled-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-filled-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-filled-text-field-container-shape-start-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-text-field-container-shape-start-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-text-field-container-shape-end-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-text-field-container-shape-end-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_leading-space: var(--md-filled-text-field-leading-space, 16px);--_trailing-space: var(--md-filled-text-field-trailing-space, 16px);--_top-space: var(--md-filled-text-field-top-space, 16px);--_bottom-space: var(--md-filled-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-filled-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-filled-text-field-input-text-suffix-leading-space, 2px);--_with-label-top-space: var(--md-filled-text-field-with-label-top-space, 8px);--_with-label-bottom-space: var(--md-filled-text-field-with-label-bottom-space, 8px);--_focus-caret-color: var(--md-filled-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--md-filled-field-active-indicator-color: var(--_active-indicator-color);--md-filled-field-active-indicator-height: var(--_active-indicator-height);--md-filled-field-bottom-space: var(--_bottom-space);--md-filled-field-container-color: var(--_container-color);--md-filled-field-container-shape-end-end: var(--_container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_container-shape-start-start);--md-filled-field-content-color: var(--_input-text-color);--md-filled-field-content-font: var(--_input-text-font);--md-filled-field-content-line-height: var(--_input-text-line-height);--md-filled-field-content-size: var(--_input-text-size);--md-filled-field-content-weight: var(--_input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_error-active-indicator-color);--md-filled-field-error-content-color: var(--_error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_error-label-text-color);--md-filled-field-error-leading-content-color: var(--_error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_label-text-color);--md-filled-field-label-text-font: var(--_label-text-font);--md-filled-field-label-text-line-height: var(--_label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_label-text-populated-size);--md-filled-field-label-text-size: var(--_label-text-size);--md-filled-field-label-text-weight: var(--_label-text-weight);--md-filled-field-leading-content-color: var(--_leading-icon-color);--md-filled-field-leading-space: var(--_leading-space);--md-filled-field-supporting-text-color: var(--_supporting-text-color);--md-filled-field-supporting-text-font: var(--_supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_supporting-text-size);--md-filled-field-supporting-text-weight: var(--_supporting-text-weight);--md-filled-field-top-space: var(--_top-space);--md-filled-field-trailing-content-color: var(--_trailing-icon-color);--md-filled-field-trailing-space: var(--_trailing-space);--md-filled-field-with-label-bottom-space: var(--_with-label-bottom-space);--md-filled-field-with-label-top-space: var(--_with-label-top-space)}
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const uV=t=>t.strings===void 0,dV={},hV=(t,e=dV)=>t._$AH=e;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _0=fg(class extends pg{constructor(t){if(super(t),t.type!==fn.PROPERTY&&t.type!==fn.ATTRIBUTE&&t.type!==fn.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!uV(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===qt||e===B)return e;const r=t.element,n=t.name;if(t.type===fn.PROPERTY){if(e===r[n])return qt}else if(t.type===fn.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(n))return qt}else if(t.type===fn.ATTRIBUTE&&r.getAttribute(n)===e+"")return qt;return hV(t),e}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const HT="important",fV=" !"+HT,w0=fg(class extends pg{constructor(t){var e;if(super(t),t.type!==fn.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,r)=>{const n=t[r];return n==null?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:r}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?r.removeProperty(n):r[n]=null);for(const n in e){const i=e[n];if(i!=null){this.ft.add(n);const o=typeof i=="string"&&i.endsWith(fV);n.includes("-")||o?r.setProperty(n,o?i.slice(0,-11):i,o?HT:""):r[n]=i}}return qt}});/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const pV={fromAttribute(t){return t??""},toAttribute(t){return t||null}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function gg(t,e){e.bubbles&&(!t.shadowRoot||e.composed)&&e.stopPropagation();const r=Reflect.construct(e.constructor,[e.type,e]),n=t.dispatchEvent(r);return n||e.preventDefault(),n}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Zc=Symbol("createValidator"),eu=Symbol("getValidityAnchor"),fh=Symbol("privateValidator"),Or=Symbol("privateSyncValidity"),Pl=Symbol("privateCustomValidationMessage");function WT(t){var e;class r extends t{constructor(){super(...arguments),this[e]=""}get validity(){return this[Or](),this[Xe].validity}get validationMessage(){return this[Or](),this[Xe].validationMessage}get willValidate(){return this[Or](),this[Xe].willValidate}checkValidity(){return this[Or](),this[Xe].checkValidity()}reportValidity(){return this[Or](),this[Xe].reportValidity()}setCustomValidity(i){this[Pl]=i,this[Or]()}requestUpdate(i,o,s){super.requestUpdate(i,o,s),this[Or]()}firstUpdated(i){super.firstUpdated(i),this[Or]()}[(e=Pl,Or)](){this[fh]||(this[fh]=this[Zc]());const{validity:i,validationMessage:o}=this[fh].getValidity(),s=!!this[Pl],l=this[Pl]||o;this[Xe].setValidity({...i,customError:s},l,this[eu]()??void 0)}[Zc](){throw new Error("Implement [createValidator]")}[eu](){throw new Error("Implement [getValidityAnchor]")}}return r}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Bs=Symbol("getFormValue"),Gf=Symbol("getFormState");function KT(t){class e extends t{get form(){return this[Xe].form}get labels(){return this[Xe].labels}get name(){return this.getAttribute("name")??""}set name(n){this.setAttribute("name",n)}get disabled(){return this.hasAttribute("disabled")}set disabled(n){this.toggleAttribute("disabled",n)}attributeChangedCallback(n,i,o){if(n==="name"||n==="disabled"){const s=n==="disabled"?i!==null:i;this.requestUpdate(n,s);return}super.attributeChangedCallback(n,i,o)}requestUpdate(n,i,o){super.requestUpdate(n,i,o),this[Xe].setFormValue(this[Bs](),this[Gf]())}[Bs](){throw new Error("Implement [getFormValue]")}[Gf](){return this[Bs]()}formDisabledCallback(n){this.disabled=n}}return e.formAssociated=!0,R([$({noAccessor:!0})],e.prototype,"name",null),R([$({type:Boolean,noAccessor:!0})],e.prototype,"disabled",null),e}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Qf=Symbol("onReportValidity"),Nl=Symbol("privateCleanupFormListeners"),Ol=Symbol("privateDoNotReportInvalid"),Dl=Symbol("privateIsSelfReportingValidity"),Ll=Symbol("privateCallOnReportValidity");function mV(t){var e,r,n;class i extends t{constructor(...s){super(...s),this[e]=new AbortController,this[r]=!1,this[n]=!1,this.addEventListener("invalid",l=>{this[Ol]||!l.isTrusted||this.addEventListener("invalid",()=>{this[Ll](l)},{once:!0})},{capture:!0})}checkValidity(){this[Ol]=!0;const s=super.checkValidity();return this[Ol]=!1,s}reportValidity(){this[Dl]=!0;const s=super.reportValidity();return s&&this[Ll](null),this[Dl]=!1,s}[(e=Nl,r=Ol,n=Dl,Ll)](s){const l=s==null?void 0:s.defaultPrevented;l||(this[Qf](s),!(!l&&(s==null?void 0:s.defaultPrevented)))||(this[Dl]||yV(this[Xe].form,this))&&this.focus()}[Qf](s){throw new Error("Implement [onReportValidity]")}formAssociatedCallback(s){super.formAssociatedCallback&&super.formAssociatedCallback(s),this[Nl].abort(),s&&(this[Nl]=new AbortController,gV(this,s,()=>{this[Ll](null)},this[Nl].signal))}}return i}function gV(t,e,r,n){const i=vV(e);let o=!1,s,l=!1;i.addEventListener("before",()=>{l=!0,s=new AbortController,o=!1,t.addEventListener("invalid",()=>{o=!0},{signal:s.signal})},{signal:n}),i.addEventListener("after",()=>{l=!1,s==null||s.abort(),!o&&r()},{signal:n}),e.addEventListener("submit",()=>{l||r()},{signal:n})}const ph=new WeakMap;function vV(t){if(!ph.has(t)){const e=new EventTarget;ph.set(t,e);for(const r of["reportValidity","requestSubmit"]){const n=t[r];t[r]=function(){e.dispatchEvent(new Event("before"));const i=Reflect.apply(n,this,arguments);return e.dispatchEvent(new Event("after")),i}}}return ph.get(t)}function yV(t,e){if(!t)return!0;let r;for(const n of t.elements)if(n.matches(":invalid")){r=n;break}return r===e}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class GT{constructor(e){this.getCurrentState=e,this.currentValidity={validity:{},validationMessage:""}}getValidity(){const e=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,e)))return this.currentValidity;const{validity:n,validationMessage:i}=this.computeValidity(e);return this.prevState=this.copy(e),this.currentValidity={validationMessage:i,validity:{badInput:n.badInput,customError:n.customError,patternMismatch:n.patternMismatch,rangeOverflow:n.rangeOverflow,rangeUnderflow:n.rangeUnderflow,stepMismatch:n.stepMismatch,tooLong:n.tooLong,tooShort:n.tooShort,typeMismatch:n.typeMismatch,valueMissing:n.valueMissing}},this.currentValidity}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class _V extends GT{computeValidity({state:e,renderedControl:r}){let n=r;ms(e)&&!n?(n=this.inputControl||document.createElement("input"),this.inputControl=n):n||(n=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=n);const i=ms(e)?n:null;if(i&&(i.type=e.type),n.value!==e.value&&(n.value=e.value),n.required=e.required,i){const o=e;o.pattern?i.pattern=o.pattern:i.removeAttribute("pattern"),o.min?i.min=o.min:i.removeAttribute("min"),o.max?i.max=o.max:i.removeAttribute("max"),o.step?i.step=o.step:i.removeAttribute("step")}return(e.minLength??-1)>-1?n.setAttribute("minlength",String(e.minLength)):n.removeAttribute("minlength"),(e.maxLength??-1)>-1?n.setAttribute("maxlength",String(e.maxLength)):n.removeAttribute("maxlength"),{validity:n.validity,validationMessage:n.validationMessage}}equals({state:e},{state:r}){const n=e.type===r.type&&e.value===r.value&&e.required===r.required&&e.minLength===r.minLength&&e.maxLength===r.maxLength;return!ms(e)||!ms(r)?n:n&&e.pattern===r.pattern&&e.min===r.min&&e.max===r.max&&e.step===r.step}copy({state:e}){return{state:ms(e)?this.copyInput(e):this.copyTextArea(e),renderedControl:null}}copyInput(e){const{type:r,pattern:n,min:i,max:o,step:s}=e;return{...this.copySharedState(e),type:r,pattern:n,min:i,max:o,step:s}}copyTextArea(e){return{...this.copySharedState(e),type:e.type}}copySharedState({value:e,required:r,minLength:n,maxLength:i}){return{value:e,required:r,minLength:n,maxLength:i}}}function ms(t){return t.type!=="textarea"}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const wV=mV(WT(KT(Bu(Te))));class oe extends wV{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(e){this.getInputOrTextarea().selectionDirection=e}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(e){this.getInputOrTextarea().selectionEnd=e}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(e){this.getInputOrTextarea().selectionStart=e}get valueAsNumber(){const e=this.getInput();return e?e.valueAsNumber:NaN}set valueAsNumber(e){const r=this.getInput();r&&(r.valueAsNumber=e,this.value=r.value)}get valueAsDate(){const e=this.getInput();return e?e.valueAsDate:null}set valueAsDate(e){const r=this.getInput();r&&(r.valueAsDate=e,this.value=r.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...e){this.getInputOrTextarea().setRangeText(...e),this.value=this.getInputOrTextarea().value}setSelectionRange(e,r,n){this.getInputOrTextarea().setSelectionRange(e,r,n)}stepDown(e){const r=this.getInput();r&&(r.stepDown(e),this.value=r.value)}stepUp(e){const r=this.getInput();r&&(r.stepUp(e),this.value=r.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(e,r,n){e==="value"&&this.dirty||super.attributeChangedCallback(e,r,n)}render(){const e={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:this.type==="textarea","no-spinner":this.noSpinner};return Y`
      <span class="text-field ${mr(e)}">
        ${this.renderField()}
      </span>
    `}updated(e){const r=this.getInputOrTextarea().value;this.value!==r&&(this.value=r)}renderField(){return mg`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      ?no-asterisk=${this.noAsterisk}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${this.type==="textarea"}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
    </${this.fieldTag}>`}renderLeadingIcon(){return Y`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return Y`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){const e={direction:this.textDirection},r=this.ariaLabel||this.label||B,n=this.autocomplete,i=(this.maxLength??-1)>-1,o=(this.minLength??-1)>-1;if(this.type==="textarea")return Y`
        <textarea
          class="input"
          style=${w0(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${r}
          autocomplete=${n||B}
          name=${this.name||B}
          ?disabled=${this.disabled}
          maxlength=${i?this.maxLength:B}
          minlength=${o?this.minLength:B}
          placeholder=${this.placeholder||B}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${_0(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;const s=this.renderPrefix(),l=this.renderSuffix(),c=this.inputMode;return Y`
      <div class="input-wrapper">
        ${s}
        <input
          class="input"
          style=${w0(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${r}
          autocomplete=${n||B}
          name=${this.name||B}
          ?disabled=${this.disabled}
          inputmode=${c||B}
          max=${this.max||B}
          maxlength=${i?this.maxLength:B}
          min=${this.min||B}
          minlength=${o?this.minLength:B}
          pattern=${this.pattern||B}
          placeholder=${this.placeholder||B}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||B}
          type=${this.type}
          .value=${_0(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${l}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(e,r){return e?Y`<span class="${mr({suffix:r,prefix:!r})}">${e}</span>`:B}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){var e;this.focused=((e=this.inputOrTextarea)==null?void 0:e.matches(":focus"))??!1}handleInput(e){this.dirty=!0,this.value=e.target.value}redispatchEvent(e){gg(this,e)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return this.type==="textarea"?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[Bs](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}focus(){this.getInputOrTextarea().focus()}[Zc](){return new _V(()=>({state:this,renderedControl:this.inputOrTextarea}))}[eu](){return this.inputOrTextarea}[Qf](e){var n;e==null||e.preventDefault();const r=this.getErrorText();this.nativeError=!!e,this.nativeErrorText=this.validationMessage,r===this.getErrorText()&&((n=this.field)==null||n.reannounceError())}}Vi(oe);oe.shadowRootOptions={...Te.shadowRootOptions,delegatesFocus:!0};R([$({type:Boolean,reflect:!0})],oe.prototype,"error",void 0);R([$({attribute:"error-text"})],oe.prototype,"errorText",void 0);R([$()],oe.prototype,"label",void 0);R([$({type:Boolean,attribute:"no-asterisk"})],oe.prototype,"noAsterisk",void 0);R([$({type:Boolean,reflect:!0})],oe.prototype,"required",void 0);R([$()],oe.prototype,"value",void 0);R([$({attribute:"prefix-text"})],oe.prototype,"prefixText",void 0);R([$({attribute:"suffix-text"})],oe.prototype,"suffixText",void 0);R([$({type:Boolean,attribute:"has-leading-icon"})],oe.prototype,"hasLeadingIcon",void 0);R([$({type:Boolean,attribute:"has-trailing-icon"})],oe.prototype,"hasTrailingIcon",void 0);R([$({attribute:"supporting-text"})],oe.prototype,"supportingText",void 0);R([$({attribute:"text-direction"})],oe.prototype,"textDirection",void 0);R([$({type:Number})],oe.prototype,"rows",void 0);R([$({type:Number})],oe.prototype,"cols",void 0);R([$({reflect:!0})],oe.prototype,"inputMode",void 0);R([$()],oe.prototype,"max",void 0);R([$({type:Number})],oe.prototype,"maxLength",void 0);R([$()],oe.prototype,"min",void 0);R([$({type:Number})],oe.prototype,"minLength",void 0);R([$({type:Boolean,attribute:"no-spinner"})],oe.prototype,"noSpinner",void 0);R([$()],oe.prototype,"pattern",void 0);R([$({reflect:!0,converter:pV})],oe.prototype,"placeholder",void 0);R([$({type:Boolean,reflect:!0})],oe.prototype,"readOnly",void 0);R([$({type:Boolean,reflect:!0})],oe.prototype,"multiple",void 0);R([$()],oe.prototype,"step",void 0);R([$({reflect:!0})],oe.prototype,"type",void 0);R([$({reflect:!0})],oe.prototype,"autocomplete",void 0);R([At()],oe.prototype,"dirty",void 0);R([At()],oe.prototype,"focused",void 0);R([At()],oe.prototype,"nativeError",void 0);R([At()],oe.prototype,"nativeErrorText",void 0);R([Ve(".input")],oe.prototype,"inputOrTextarea",void 0);R([Ve(".field")],oe.prototype,"field",void 0);R([Bo({slot:"leading-icon"})],oe.prototype,"leadingIcons",void 0);R([Bo({slot:"trailing-icon"})],oe.prototype,"trailingIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class bV extends oe{constructor(){super(...arguments),this.fieldTag=gi`md-filled-field`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const EV=ge`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Yf=class extends bV{constructor(){super(...arguments),this.fieldTag=gi`md-filled-field`}};Yf.styles=[EV,cV];Yf=R([Ue("md-filled-text-field")],Yf);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class IV extends Te{render(){return Y`<slot></slot>`}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const TV=ge`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Xf=class extends IV{};Xf.styles=[TV];Xf=R([Ue("md-icon")],Xf);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function QT(t,e=nn){const r=XT(t,e);return r&&(r.tabIndex=0,r.focus()),r}function YT(t,e=nn){const r=xV(t,e);return r&&(r.tabIndex=0,r.focus()),r}function mh(t,e=nn){for(let r=0;r<t.length;r++){const n=t[r];if(n.tabIndex===0&&e(n))return{item:n,index:r}}return null}function XT(t,e=nn){for(const r of t)if(e(r))return r;return null}function xV(t,e=nn){for(let r=t.length-1;r>=0;r--){const n=t[r];if(e(n))return n}return null}function AV(t,e,r=nn,n=!0){for(let i=1;i<t.length;i++){const o=(i+e)%t.length;if(o<e&&!n)return null;const s=t[o];if(r(s))return s}return t[e]?t[e]:null}function SV(t,e,r=nn,n=!0){for(let i=1;i<t.length;i++){const o=(e-i+t.length)%t.length;if(o>e&&!n)return null;const s=t[o];if(r(s))return s}return t[e]?t[e]:null}function b0(t,e,r=nn,n=!0){if(e){const i=AV(t,e.index,r,n);return i&&(i.tabIndex=0,i.focus()),i}else return QT(t,r)}function E0(t,e,r=nn,n=!0){if(e){const i=SV(t,e.index,r,n);return i&&(i.tabIndex=0,i.focus()),i}else return YT(t,r)}function CV(){return new Event("request-activation",{bubbles:!0,composed:!0})}function nn(t){return!t.disabled}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Dr={ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",Home:"Home",End:"End"};class kV{constructor(e){this.handleKeydown=f=>{const p=f.key;if(f.defaultPrevented||!this.isNavigableKey(p))return;const m=this.items;if(!m.length)return;const T=mh(m,this.isActivatable);f.preventDefault();const S=this.isRtl(),P=S?Dr.ArrowRight:Dr.ArrowLeft,N=S?Dr.ArrowLeft:Dr.ArrowRight;let b=null;switch(p){case Dr.ArrowDown:case N:b=b0(m,T,this.isActivatable,this.wrapNavigation());break;case Dr.ArrowUp:case P:b=E0(m,T,this.isActivatable,this.wrapNavigation());break;case Dr.Home:b=QT(m,this.isActivatable);break;case Dr.End:b=YT(m,this.isActivatable);break}b&&T&&T.item!==b&&(T.item.tabIndex=-1)},this.onDeactivateItems=()=>{const f=this.items;for(const p of f)this.deactivateItem(p)},this.onRequestActivation=f=>{this.onDeactivateItems();const p=f.target;this.activateItem(p),p.focus()},this.onSlotchange=()=>{const f=this.items;let p=!1;for(const T of f){if(!T.disabled&&T.tabIndex>-1&&!p){p=!0,T.tabIndex=0;continue}T.tabIndex=-1}if(p)return;const m=XT(f,this.isActivatable);m&&(m.tabIndex=0)};const{isItem:r,getPossibleItems:n,isRtl:i,deactivateItem:o,activateItem:s,isNavigableKey:l,isActivatable:c,wrapNavigation:u}=e;this.isItem=r,this.getPossibleItems=n,this.isRtl=i,this.deactivateItem=o,this.activateItem=s,this.isNavigableKey=l,this.isActivatable=c,this.wrapNavigation=u??(()=>!0)}get items(){const e=this.getPossibleItems(),r=[];for(const n of e){if(this.isItem(n)){r.push(n);continue}const o=n.item;o&&this.isItem(o)&&r.push(o)}return r}activateNextItem(){const e=this.items,r=mh(e,this.isActivatable);return r&&(r.item.tabIndex=-1),b0(e,r,this.isActivatable,this.wrapNavigation())}activatePreviousItem(){const e=this.items,r=mh(e,this.isActivatable);return r&&(r.item.tabIndex=-1),E0(e,r,this.isActivatable,this.wrapNavigation())}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const RV=new Set(Object.values(Dr));class JT extends Te{get items(){return this.listController.items}constructor(){super(),this.listController=new kV({isItem:e=>e.hasAttribute("md-list-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>getComputedStyle(this).direction==="rtl",deactivateItem:e=>{e.tabIndex=-1},activateItem:e=>{e.tabIndex=0},isNavigableKey:e=>RV.has(e),isActivatable:e=>!e.disabled&&e.type!=="text"}),this.internals=this.attachInternals(),this.internals.role="list",this.addEventListener("keydown",this.listController.handleKeydown)}render(){return Y`
      <slot
        @deactivate-items=${this.listController.onDeactivateItems}
        @request-activation=${this.listController.onRequestActivation}
        @slotchange=${this.listController.onSlotchange}>
      </slot>
    `}activateNextItem(){return this.listController.activateNextItem()}activatePreviousItem(){return this.listController.activatePreviousItem()}}R([Bo({flatten:!0})],JT.prototype,"slotItems",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const PV=ge`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Jf=class extends JT{};Jf.styles=[PV];Jf=R([Ue("md-list")],Jf);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class vg extends Te{constructor(){super(...arguments),this.multiline=!1}render(){return Y`
      <slot name="container"></slot>
      <slot class="non-text" name="start"></slot>
      <div class="text">
        <slot name="overline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          class="default-slot"
          @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="headline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          name="supporting-text"
          @slotchange=${this.handleTextSlotChange}></slot>
      </div>
      <slot class="non-text" name="trailing-supporting-text"></slot>
      <slot class="non-text" name="end"></slot>
    `}handleTextSlotChange(){let e=!1,r=0;for(const n of this.textSlots)if(NV(n)&&(r+=1),r>1){e=!0;break}this.multiline=e}}R([$({type:Boolean,reflect:!0})],vg.prototype,"multiline",void 0);R([EL(".text slot")],vg.prototype,"textSlots",void 0);function NV(t){var e;for(const r of t.assignedNodes({flatten:!0})){const n=r.nodeType===Node.ELEMENT_NODE,i=r.nodeType===Node.TEXT_NODE&&((e=r.textContent)==null?void 0:e.match(/\S/));if(n||i)return!0}return!1}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const OV=ge`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Zf=class extends vg{};Zf.styles=[OV];Zf=R([Ue("md-item")],Zf);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class on extends Te{constructor(){super(...arguments),this.disabled=!1,this.type="text",this.isListItem=!0,this.href="",this.target=""}get isDisabled(){return this.disabled&&this.type!=="link"}willUpdate(e){this.href&&(this.type="link"),super.willUpdate(e)}render(){return this.renderListItem(Y`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){const r=this.type==="link";let n;switch(this.type){case"link":n=gi`a`;break;case"button":n=gi`button`;break;default:case"text":n=gi`li`;break}const i=this.type!=="text",o=r&&this.target?this.target:B;return mg`
      <${n}
        id="item"
        tabindex="${this.isDisabled||!i?-1:0}"
        ?disabled=${this.isDisabled}
        role="listitem"
        aria-selected=${this.ariaSelected||B}
        aria-checked=${this.ariaChecked||B}
        aria-expanded=${this.ariaExpanded||B}
        aria-haspopup=${this.ariaHasPopup||B}
        class="list-item ${mr(this.getRenderClasses())}"
        href=${this.href||B}
        target=${o}
        @focus=${this.onFocus}
      >${e}</${n}>
    `}renderRipple(){return this.type==="text"?B:Y` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.isDisabled}></md-ripple>`}renderFocusRing(){return this.type==="text"?B:Y` <md-focus-ring
      @visibility-changed=${this.onFocusRingVisibilityChanged}
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}onFocusRingVisibilityChanged(e){}getRenderClasses(){return{disabled:this.isDisabled}}renderBody(){return Y`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}onFocus(){this.tabIndex===-1&&this.dispatchEvent(CV())}focus(){var e;(e=this.listItemRoot)==null||e.focus()}}Vi(on);on.shadowRootOptions={...Te.shadowRootOptions,delegatesFocus:!0};R([$({type:Boolean,reflect:!0})],on.prototype,"disabled",void 0);R([$({reflect:!0})],on.prototype,"type",void 0);R([$({type:Boolean,attribute:"md-list-item",reflect:!0})],on.prototype,"isListItem",void 0);R([$()],on.prototype,"href",void 0);R([$()],on.prototype,"target",void 0);R([Ve(".list-item")],on.prototype,"listItemRoot",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const DV=ge`:host{display:flex;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-list-item-pressed-state-layer-opacity, 0.12)}:host(:is([type=button]:not([disabled]),[type=link])){cursor:pointer}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;cursor:inherit;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, 0.3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-list-item-one-line-container-height, 56px);padding-top:var(--md-list-item-top-space, 12px);padding-bottom:var(--md-list-item-bottom-space, 12px);padding-inline-start:var(--md-list-item-leading-space, 16px);padding-inline-end:var(--md-list-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}@media(forced-colors: active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ep=class extends on{};ep.styles=[DV];ep=R([Ue("md-list-item")],ep);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class qo extends Te{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){const{ariaLabel:e}=this;return Y`
      <div
        class="progress ${mr(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${e||B}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?B:this.value}
        >${this.renderIndicator()}</div
      >
    `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}}Vi(qo);R([$({type:Number})],qo.prototype,"value",void 0);R([$({type:Number})],qo.prototype,"max",void 0);R([$({type:Boolean})],qo.prototype,"indeterminate",void 0);R([$({type:Boolean,attribute:"four-color"})],qo.prototype,"fourColor",void 0);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class LV extends qo{renderIndicator(){return this.indeterminate?this.renderIndeterminateContainer():this.renderDeterminateContainer()}renderDeterminateContainer(){const e=(1-this.value/this.max)*100;return Y`
      <svg viewBox="0 0 4800 4800">
        <circle class="track" pathLength="100"></circle>
        <circle
          class="active-track"
          pathLength="100"
          stroke-dashoffset=${e}></circle>
      </svg>
    `}renderIndeterminateContainer(){return Y` <div class="spinner">
      <div class="left">
        <div class="circle"></div>
      </div>
      <div class="right">
        <div class="circle"></div>
      </div>
    </div>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const VV=ge`:host{--_active-indicator-color: var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width: var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color: var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size: var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;width:var(--_size);height:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.progress,.spinner,.left,.right,.circle,svg,.track,.active-track{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1568.2352941176ms}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) rgba(0,0,0,0) rgba(0,0,0,0);animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-666.5ms,0ms}@media(forced-colors: active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let tp=class extends LV{};tp.styles=[VV];tp=R([Ue("md-circular-progress")],tp);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Wn extends Te{constructor(){super(...arguments),this.disabled=!1,this.alwaysFocusable=!1,this.label="",this.hasIcon=!1}get rippleDisabled(){return this.disabled}focus(e){this.disabled&&!this.alwaysFocusable||super.focus(e)}render(){return Y`
      <div class="container ${mr(this.getContainerClasses())}">
        ${this.renderContainerContent()}
      </div>
    `}updated(e){e.has("disabled")&&e.get("disabled")!==void 0&&this.dispatchEvent(new Event("update-focus",{bubbles:!0}))}getContainerClasses(){return{disabled:this.disabled,"has-icon":this.hasIcon}}renderContainerContent(){return Y`
      ${this.renderOutline()}
      <md-focus-ring part="focus-ring" for=${this.primaryId}></md-focus-ring>
      <md-ripple
        for=${this.primaryId}
        ?disabled=${this.rippleDisabled}></md-ripple>
      ${this.renderPrimaryAction(this.renderPrimaryContent())}
    `}renderOutline(){return Y`<span class="outline"></span>`}renderLeadingIcon(){return Y`<slot name="icon" @slotchange=${this.handleIconChange}></slot>`}renderPrimaryContent(){return Y`
      <span class="leading icon" aria-hidden="true">
        ${this.renderLeadingIcon()}
      </span>
      <span class="label">${this.label}</span>
      <span class="touch"></span>
    `}handleIconChange(e){const r=e.target;this.hasIcon=r.assignedElements({flatten:!0}).length>0}}Vi(Wn);Wn.shadowRootOptions={...Te.shadowRootOptions,delegatesFocus:!0};R([$({type:Boolean,reflect:!0})],Wn.prototype,"disabled",void 0);R([$({type:Boolean,attribute:"always-focusable"})],Wn.prototype,"alwaysFocusable",void 0);R([$()],Wn.prototype,"label",void 0);R([$({type:Boolean,reflect:!0,attribute:"has-icon"})],Wn.prototype,"hasIcon",void 0);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ZT extends Te{get chips(){return this.childElements.filter(e=>e instanceof Wn)}constructor(){super(),this.internals=this.attachInternals(),this.addEventListener("focusin",this.updateTabIndices.bind(this)),this.addEventListener("update-focus",this.updateTabIndices.bind(this)),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.internals.role="toolbar"}render(){return Y`<slot @slotchange=${this.updateTabIndices}></slot>`}handleKeyDown(e){const r=e.key==="ArrowLeft",n=e.key==="ArrowRight",i=e.key==="Home",o=e.key==="End";if(!r&&!n&&!i&&!o)return;const{chips:s}=this;if(s.length<2)return;if(e.preventDefault(),i||o){const m=i?0:s.length-1;s[m].focus({trailing:o}),this.updateTabIndices();return}const c=getComputedStyle(this).direction==="rtl"?r:n,u=s.find(m=>m.matches(":focus-within"));if(!u){(c?s[0]:s[s.length-1]).focus({trailing:!c}),this.updateTabIndices();return}const f=s.indexOf(u);let p=c?f+1:f-1;for(;p!==f;){p>=s.length?p=0:p<0&&(p=s.length-1);const m=s[p];if(m.disabled&&!m.alwaysFocusable){c?p++:p--;continue}m.focus({trailing:!c}),this.updateTabIndices();break}}updateTabIndices(){const{chips:e}=this;let r;for(const n of e){const i=n.alwaysFocusable||!n.disabled;if(n.matches(":focus-within")&&i){r=n;continue}i&&!r&&(r=n),n.tabIndex=-1}r&&(r.tabIndex=0)}}R([Bo()],ZT.prototype,"childElements",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const MV=ge`:host{display:flex;flex-wrap:wrap;gap:8px}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let rp=class extends ZT{};rp.styles=[MV];rp=R([Ue("md-chip-set")],rp);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const $V=ge`.elevated{--md-elevation-level: var(--_elevated-container-elevation);--md-elevation-shadow-color: var(--_elevated-container-shadow-color)}.elevated::before{background:var(--_elevated-container-color)}.elevated:hover{--md-elevation-level: var(--_elevated-hover-container-elevation)}.elevated:focus-within{--md-elevation-level: var(--_elevated-focus-container-elevation)}.elevated:active{--md-elevation-level: var(--_elevated-pressed-container-elevation)}.elevated.disabled{--md-elevation-level: var(--_elevated-disabled-container-elevation)}.elevated.disabled::before{background:var(--_elevated-disabled-container-color);opacity:var(--_elevated-disabled-container-opacity)}@media(forced-colors: active){.elevated md-elevation{border:1px solid CanvasText}.elevated.disabled md-elevation{border-color:GrayText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Vl="aria-label-remove";class FV extends Wn{get ariaLabelRemove(){if(this.hasAttribute(Vl))return this.getAttribute(Vl);const{ariaLabel:e}=this;return`Remove ${e||this.label}`}set ariaLabelRemove(e){const r=this.ariaLabelRemove;e!==r&&(e===null?this.removeAttribute(Vl):this.setAttribute(Vl,e),this.requestUpdate())}constructor(){super(),this.handleTrailingActionFocus=this.handleTrailingActionFocus.bind(this),this.addEventListener("keydown",this.handleKeyDown.bind(this))}focus(e){if((this.alwaysFocusable||!this.disabled)&&(e!=null&&e.trailing)&&this.trailingAction){this.trailingAction.focus(e);return}super.focus(e)}renderContainerContent(){return Y`
      ${super.renderContainerContent()}
      ${this.renderTrailingAction(this.handleTrailingActionFocus)}
    `}handleKeyDown(e){var u,f;const r=e.key==="ArrowLeft",n=e.key==="ArrowRight";if(!r&&!n||!this.primaryAction||!this.trailingAction)return;const o=getComputedStyle(this).direction==="rtl"?r:n,s=(u=this.primaryAction)==null?void 0:u.matches(":focus-within"),l=(f=this.trailingAction)==null?void 0:f.matches(":focus-within");if(o&&l||!o&&s)return;e.preventDefault(),e.stopPropagation(),(o?this.trailingAction:this.primaryAction).focus()}handleTrailingActionFocus(){const{primaryAction:e,trailingAction:r}=this;!e||!r||(e.tabIndex=-1,r.addEventListener("focusout",()=>{e.tabIndex=0},{once:!0}))}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function UV({ariaLabel:t,disabled:e,focusListener:r,tabbable:n=!1}){return Y`
    <button
      class="trailing action"
      aria-label=${t}
      tabindex=${n?B:-1}
      @click=${zV}
      @focus=${r}>
      <md-focus-ring part="trailing-focus-ring"></md-focus-ring>
      <md-ripple ?disabled=${e}></md-ripple>
      <span class="trailing icon" aria-hidden="true">
        <slot name="remove-trailing-icon">
          <svg viewBox="0 96 960 960">
            <path
              d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
          </svg>
        </slot>
      </span>
      <span class="touch"></span>
    </button>
  `}function zV(t){this.disabled||(t.stopPropagation(),!this.dispatchEvent(new Event("remove",{cancelable:!0})))||this.remove()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Mi extends FV{constructor(){super(...arguments),this.elevated=!1,this.removable=!1,this.selected=!1,this.hasSelectedIcon=!1}get primaryId(){return"button"}getContainerClasses(){return{...super.getContainerClasses(),elevated:this.elevated,selected:this.selected,"has-trailing":this.removable,"has-icon":this.hasIcon||this.selected}}renderPrimaryAction(e){const{ariaLabel:r}=this;return Y`
      <button
        class="primary action"
        id="button"
        aria-label=${r||B}
        aria-pressed=${this.selected}
        ?disabled=${this.disabled&&!this.alwaysFocusable}
        @click=${this.handleClick}
        >${e}</button
      >
    `}renderLeadingIcon(){return this.selected?Y`
      <slot name="selected-icon">
        <svg class="checkmark" viewBox="0 0 18 18" aria-hidden="true">
          <path
            d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z" />
        </svg>
      </slot>
    `:super.renderLeadingIcon()}renderTrailingAction(e){return this.removable?UV({focusListener:e,ariaLabel:this.ariaLabelRemove,disabled:this.disabled}):B}renderOutline(){return this.elevated?Y`<md-elevation part="elevation"></md-elevation>`:super.renderOutline()}handleClick(e){if(this.disabled)return;const r=this.selected;if(this.selected=!this.selected,!gg(this,e)){this.selected=r;return}}}R([$({type:Boolean})],Mi.prototype,"elevated",void 0);R([$({type:Boolean})],Mi.prototype,"removable",void 0);R([$({type:Boolean,reflect:!0})],Mi.prototype,"selected",void 0);R([$({type:Boolean,reflect:!0,attribute:"has-selected-icon"})],Mi.prototype,"hasSelectedIcon",void 0);R([Ve(".primary.action")],Mi.prototype,"primaryAction",void 0);R([Ve(".trailing.action")],Mi.prototype,"trailingAction",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const jV=ge`:host{--_container-height: var(--md-filter-chip-container-height, 32px);--_disabled-label-text-color: var(--md-filter-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filter-chip-disabled-label-text-opacity, 0.38);--_elevated-container-elevation: var(--md-filter-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-filter-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-filter-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-filter-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-filter-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-filter-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-filter-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-filter-chip-elevated-pressed-container-elevation, 1);--_elevated-selected-container-color: var(--md-filter-chip-elevated-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_label-text-font: var(--md-filter-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filter-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filter-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filter-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_selected-focus-label-text-color: var(--md-filter-chip-selected-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-label-text-color: var(--md-filter-chip-selected-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-color: var(--md-filter-chip-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-opacity: var(--md-filter-chip-selected-hover-state-layer-opacity, 0.08);--_selected-label-text-color: var(--md-filter-chip-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-label-text-color: var(--md-filter-chip-selected-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-color: var(--md-filter-chip-selected-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_selected-pressed-state-layer-opacity: var(--md-filter-chip-selected-pressed-state-layer-opacity, 0.12);--_elevated-container-color: var(--md-filter-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_disabled-outline-color: var(--md-filter-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-filter-chip-disabled-outline-opacity, 0.12);--_disabled-selected-container-color: var(--md-filter-chip-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-filter-chip-disabled-selected-container-opacity, 0.12);--_focus-outline-color: var(--md-filter-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-filter-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-filter-chip-outline-width, 1px);--_selected-container-color: var(--md-filter-chip-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_selected-outline-width: var(--md-filter-chip-selected-outline-width, 0px);--_focus-label-text-color: var(--md-filter-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-filter-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filter-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-filter-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filter-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-label-text-color: var(--md-filter-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-filter-chip-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filter-chip-pressed-state-layer-opacity, 0.12);--_icon-size: var(--md-filter-chip-icon-size, 18px);--_disabled-leading-icon-color: var(--md-filter-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filter-chip-disabled-leading-icon-opacity, 0.38);--_selected-focus-leading-icon-color: var(--md-filter-chip-selected-focus-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-leading-icon-color: var(--md-filter-chip-selected-hover-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-leading-icon-color: var(--md-filter-chip-selected-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-leading-icon-color: var(--md-filter-chip-selected-pressed-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-leading-icon-color: var(--md-filter-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-filter-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-filter-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-filter-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_disabled-trailing-icon-color: var(--md-filter-chip-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filter-chip-disabled-trailing-icon-opacity, 0.38);--_selected-focus-trailing-icon-color: var(--md-filter-chip-selected-focus-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-trailing-icon-color: var(--md-filter-chip-selected-hover-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-trailing-icon-color: var(--md-filter-chip-selected-pressed-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-trailing-icon-color: var(--md-filter-chip-selected-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-trailing-icon-color: var(--md-filter-chip-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filter-chip-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-trailing-icon-color: var(--md-filter-chip-pressed-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-color: var(--md-filter-chip-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var(--md-filter-chip-container-shape-start-start, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end: var(--md-filter-chip-container-shape-start-end, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end: var(--md-filter-chip-container-shape-end-end, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start: var(--md-filter-chip-container-shape-end-start, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space: var(--md-filter-chip-leading-space, 16px);--_trailing-space: var(--md-filter-chip-trailing-space, 16px);--_icon-label-space: var(--md-filter-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-filter-chip-with-leading-icon-leading-space, 8px);--_with-trailing-icon-trailing-space: var(--md-filter-chip-with-trailing-icon-trailing-space, 8px)}.selected.elevated::before{background:var(--_elevated-selected-container-color)}.checkmark{height:var(--_icon-size);width:var(--_icon-size)}.disabled .checkmark{opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){.disabled .checkmark{opacity:1}}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const BV=ge`.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}:where(.selected)::before{background:var(--_selected-container-color)}:where(.selected) .outline{border-width:var(--_selected-outline-width)}:where(.selected.disabled)::before{background:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}:where(.selected) .label{color:var(--_selected-label-text-color)}:where(.selected:hover) .label{color:var(--_selected-hover-label-text-color)}:where(.selected:focus) .label{color:var(--_selected-focus-label-text-color)}:where(.selected:active) .label{color:var(--_selected-pressed-label-text-color)}:where(.selected) .leading.icon{color:var(--_selected-leading-icon-color)}:where(.selected:hover) .leading.icon{color:var(--_selected-hover-leading-icon-color)}:where(.selected:focus) .leading.icon{color:var(--_selected-focus-leading-icon-color)}:where(.selected:active) .leading.icon{color:var(--_selected-pressed-leading-icon-color)}@media(forced-colors: active){:where(.selected:not(.elevated))::before{border:1px solid CanvasText}:where(.selected) .outline{border-width:1px}}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const qV=ge`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);display:inline-flex;height:var(--_container-height);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host([disabled]){pointer-events:none}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}.container{border-radius:inherit;box-sizing:border-box;display:flex;height:100%;position:relative;width:100%}.container::before{border-radius:inherit;content:"";inset:0;pointer-events:none;position:absolute}.container:not(.disabled){cursor:pointer}.container.disabled{pointer-events:none}.cell{display:flex}.action{align-items:baseline;appearance:none;background:none;border:none;border-radius:inherit;display:flex;outline:none;padding:0;position:relative;text-decoration:none}.primary.action{padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space)}.has-icon .primary.action{padding-inline-start:var(--_with-leading-icon-leading-space)}.touch{height:48px;inset:50% 0 0;position:absolute;transform:translateY(-50%);width:100%}:host([touch-target=none]) .touch{display:none}.outline{border:var(--_outline-width) solid var(--_outline-color);border-radius:inherit;inset:0;pointer-events:none;position:absolute}:where(:focus) .outline{border-color:var(--_focus-outline-color)}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}md-ripple{border-radius:inherit}.label,.icon,.touch{z-index:1}.label{align-items:center;color:var(--_label-text-color);display:flex;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);height:100%;text-overflow:ellipsis;user-select:none;white-space:nowrap}:where(:hover) .label{color:var(--_hover-label-text-color)}:where(:focus) .label{color:var(--_focus-label-text-color)}:where(:active) .label{color:var(--_pressed-label-text-color)}:where(.disabled) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.icon{align-self:center;display:flex;fill:currentColor;position:relative}.icon ::slotted(:first-child){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size)}.leading.icon{color:var(--_leading-icon-color)}.leading.icon ::slotted(*),.leading.icon svg{margin-inline-end:var(--_icon-label-space)}:where(:hover) .leading.icon{color:var(--_hover-leading-icon-color)}:where(:focus) .leading.icon{color:var(--_focus-leading-icon-color)}:where(:active) .leading.icon{color:var(--_pressed-leading-icon-color)}:where(.disabled) .leading.icon{color:var(--_disabled-leading-icon-color);opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){:where(.disabled) :is(.label,.outline,.leading.icon){color:GrayText;opacity:1}}a,button{text-transform:inherit}a,button:not(:disabled){cursor:inherit}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const HV=ge`.trailing.action{align-items:center;justify-content:center;padding-inline-start:var(--_icon-label-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.trailing.action :is(md-ripple,md-focus-ring){border-radius:50%;height:calc(1.3333333333*var(--_icon-size));width:calc(1.3333333333*var(--_icon-size))}.trailing.action md-focus-ring{inset:unset}.has-trailing .primary.action{padding-inline-end:0}.trailing.icon{color:var(--_trailing-icon-color);height:var(--_icon-size);width:var(--_icon-size)}:where(:hover) .trailing.icon{color:var(--_hover-trailing-icon-color)}:where(:focus) .trailing.icon{color:var(--_focus-trailing-icon-color)}:where(:active) .trailing.icon{color:var(--_pressed-trailing-icon-color)}:where(.disabled) .trailing.icon{color:var(--_disabled-trailing-icon-color);opacity:var(--_disabled-trailing-icon-opacity)}:where(.selected) .trailing.icon{color:var(--_selected-trailing-icon-color)}:where(.selected:hover) .trailing.icon{color:var(--_selected-hover-trailing-icon-color)}:where(.selected:focus) .trailing.icon{color:var(--_selected-focus-trailing-icon-color)}:where(.selected:active) .trailing.icon{color:var(--_selected-pressed-trailing-icon-color)}@media(forced-colors: active){.trailing.icon{color:ButtonText}:where(.disabled) .trailing.icon{color:GrayText;opacity:1}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let np=class extends Mi{};np.styles=[qV,$V,HV,BV,jV];np=R([Ue("md-filter-chip")],np);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ml=Symbol("isFocusable"),gh=Symbol("privateIsFocusable"),$l=Symbol("externalTabIndex"),Fl=Symbol("isUpdatingTabIndex"),Ul=Symbol("updateTabIndex");function WV(t){var e,r,n;class i extends t{constructor(){super(...arguments),this[e]=!0,this[r]=null,this[n]=!1}get[Ml](){return this[gh]}set[Ml](s){this[Ml]!==s&&(this[gh]=s,this[Ul]())}connectedCallback(){super.connectedCallback(),this[Ul]()}attributeChangedCallback(s,l,c){if(s!=="tabindex"){super.attributeChangedCallback(s,l,c);return}if(this.requestUpdate("tabIndex",Number(l??-1)),!this[Fl]){if(!this.hasAttribute("tabindex")){this[$l]=null,this[Ul]();return}this[$l]=this.tabIndex}}[(e=gh,r=$l,n=Fl,Ul)](){const s=this[Ml]?0:-1,l=this[$l]??s;this[Fl]=!0,this.tabIndex=l,this[Fl]=!1}}return R([$({noAccessor:!0})],i.prototype,"tabIndex",void 0),i}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class KV extends GT{computeValidity(e){this.radioElement||(this.radioElement=document.createElement("input"),this.radioElement.type="radio",this.radioElement.name="group");let r=!1,n=!1;for(const{checked:i,required:o}of e)o&&(r=!0),i&&(n=!0);return this.radioElement.checked=n,this.radioElement.required=r,{validity:{valueMissing:r&&!n},validationMessage:this.radioElement.validationMessage}}equals(e,r){if(e.length!==r.length)return!1;for(let n=0;n<e.length;n++){const i=e[n],o=r[n];if(i.checked!==o.checked||i.required!==o.required)return!1}return!0}copy(e){return e.map(({checked:r,required:n})=>({checked:r,required:n}))}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class GV{get controls(){const e=this.host.getAttribute("name");return!e||!this.root||!this.host.isConnected?[this.host]:Array.from(this.root.querySelectorAll(`[name="${e}"]`))}constructor(e){this.host=e,this.focused=!1,this.root=null,this.handleFocusIn=()=>{this.focused=!0,this.updateTabIndices()},this.handleFocusOut=()=>{this.focused=!1,this.updateTabIndices()},this.handleKeyDown=r=>{const n=r.key==="ArrowDown",i=r.key==="ArrowUp",o=r.key==="ArrowLeft",s=r.key==="ArrowRight";if(!o&&!s&&!n&&!i)return;const l=this.controls;if(!l.length)return;r.preventDefault();const u=getComputedStyle(this.host).direction==="rtl"?o||n:s||n,f=l.indexOf(this.host);let p=u?f+1:f-1;for(;p!==f;){p>=l.length?p=0:p<0&&(p=l.length-1);const m=l[p];if(m.hasAttribute("disabled")){u?p++:p--;continue}for(const T of l)T!==m&&(T.checked=!1,T.tabIndex=-1,T.blur());m.checked=!0,m.tabIndex=0,m.focus(),m.dispatchEvent(new Event("change",{bubbles:!0}));break}}}hostConnected(){this.root=this.host.getRootNode(),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("focusin",this.handleFocusIn),this.host.addEventListener("focusout",this.handleFocusOut),this.host.checked&&this.uncheckSiblings(),this.updateTabIndices()}hostDisconnected(){this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("focusin",this.handleFocusIn),this.host.removeEventListener("focusout",this.handleFocusOut),this.updateTabIndices(),this.root=null}handleCheckedChange(){this.host.checked&&(this.uncheckSiblings(),this.updateTabIndices())}uncheckSiblings(){for(const e of this.controls)e!==this.host&&(e.checked=!1)}updateTabIndices(){const e=this.controls,r=e.find(n=>n.checked);if(r||this.focused){const n=r||this.host;n.tabIndex=0;for(const i of e)i!==n&&(i.tabIndex=-1);return}for(const n of e)n.tabIndex=0}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var I0;const vh=Symbol("checked");let QV=0;const YV=WT(KT(Bu(WV(Te))));class Ba extends YV{get checked(){return this[vh]}set checked(e){const r=this.checked;r!==e&&(this[vh]=e,this.requestUpdate("checked",r),this.selectionController.handleCheckedChange())}constructor(){super(),this.maskId=`cutout${++QV}`,this[I0]=!1,this.required=!1,this.value="on",this.selectionController=new GV(this),this.addController(this.selectionController),this[Xe].role="radio",this.addEventListener("click",this.handleClick.bind(this)),this.addEventListener("keydown",this.handleKeydown.bind(this))}render(){const e={checked:this.checked};return Y`
      <div class="container ${mr(e)}" aria-hidden="true">
        <md-ripple
          part="ripple"
          .control=${this}
          ?disabled=${this.disabled}></md-ripple>
        <md-focus-ring part="focus-ring" .control=${this}></md-focus-ring>
        <svg class="icon" viewBox="0 0 20 20">
          <mask id="${this.maskId}">
            <rect width="100%" height="100%" fill="white" />
            <circle cx="10" cy="10" r="8" fill="black" />
          </mask>
          <circle
            class="outer circle"
            cx="10"
            cy="10"
            r="10"
            mask="url(#${this.maskId})" />
          <circle class="inner circle" cx="10" cy="10" r="5" />
        </svg>

        <input
          id="input"
          type="radio"
          tabindex="-1"
          .checked=${this.checked}
          .value=${this.value}
          ?disabled=${this.disabled} />
      </div>
    `}updated(){this[Xe].ariaChecked=String(this.checked)}async handleClick(e){this.disabled||(await 0,!e.defaultPrevented&&(jT(e)&&this.focus(),this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))))}async handleKeydown(e){await 0,!(e.key!==" "||e.defaultPrevented)&&this.click()}[(I0=vh,Bs)](){return this.checked?this.value:null}[Gf](){return String(this.checked)}formResetCallback(){this.checked=this.hasAttribute("checked")}formStateRestoreCallback(e){this.checked=e==="true"}[Zc](){return new KV(()=>this.selectionController?this.selectionController.controls:[this])}[eu](){return this.container}}R([$({type:Boolean})],Ba.prototype,"checked",null);R([$({type:Boolean})],Ba.prototype,"required",void 0);R([$()],Ba.prototype,"value",void 0);R([Ve(".container")],Ba.prototype,"container",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const XV=ge`@layer{:host{display:inline-flex;height:var(--md-radio-icon-size, 20px);outline:none;position:relative;vertical-align:top;width:var(--md-radio-icon-size, 20px);-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;--md-ripple-hover-color: var(--md-radio-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-radio-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-radio-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-opacity: var(--md-radio-pressed-state-layer-opacity, 0.12)}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-radio-icon-size, 20px))/2)}.container{display:flex;height:100%;place-content:center;place-items:center;width:100%}md-focus-ring{height:44px;inset:unset;width:44px}.checked{--md-ripple-hover-color: var(--md-radio-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-radio-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-radio-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-radio-selected-pressed-state-layer-opacity, 0.12)}input{appearance:none;height:48px;margin:0;position:absolute;width:48px;cursor:inherit}:host([touch-target=none]) input{width:100%;height:100%}md-ripple{border-radius:50%;height:var(--md-radio-state-layer-size, 40px);inset:unset;width:var(--md-radio-state-layer-size, 40px)}.icon{fill:var(--md-radio-icon-color, var(--md-sys-color-on-surface-variant, #49454f));inset:0;position:absolute}.outer.circle{transition:fill 50ms linear}.inner.circle{opacity:0;transform-origin:center;transition:opacity 50ms linear}.checked .icon{fill:var(--md-radio-selected-icon-color, var(--md-sys-color-primary, #6750a4))}.checked .inner.circle{animation:inner-circle-grow 300ms cubic-bezier(0.05, 0.7, 0.1, 1);opacity:1}@keyframes inner-circle-grow{from{transform:scale(0)}to{transform:scale(1)}}:host([disabled]) .circle{animation-duration:0s;transition-duration:0s}:host(:hover) .icon{fill:var(--md-radio-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host(:focus-within) .icon{fill:var(--md-radio-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host(:active) .icon{fill:var(--md-radio-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host([disabled]) .icon{fill:var(--md-radio-disabled-unselected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-radio-disabled-unselected-icon-opacity, 0.38)}:host(:hover) .checked .icon{fill:var(--md-radio-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4))}:host(:focus-within) .checked .icon{fill:var(--md-radio-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4))}:host(:active) .checked .icon{fill:var(--md-radio-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4))}:host([disabled]) .checked .icon{fill:var(--md-radio-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-radio-disabled-selected-icon-opacity, 0.38)}}@layer hcm{@media(forced-colors: active){.icon{fill:CanvasText}:host([disabled]) .icon{fill:GrayText;opacity:1}}}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ip=class extends Ba{};ip.styles=[XV];ip=R([Ue("md-radio")],ip);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Hu extends Te{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}R([$({type:Boolean,reflect:!0})],Hu.prototype,"inset",void 0);R([$({type:Boolean,reflect:!0,attribute:"inset-start"})],Hu.prototype,"insetStart",void 0);R([$({type:Boolean,reflect:!0,attribute:"inset-end"})],Hu.prototype,"insetEnd",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const JV=ge`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let op=class extends Hu{};op.styles=[JV];op=R([Ue("md-divider")],op);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ZV={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:Po.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:Po.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},e4={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:Po.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:Po.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Oe extends Te{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.quick=!1,this.returnValue="",this.noFocusTrap=!1,this.getOpenAnimation=()=>ZV,this.getCloseAnimation=()=>e4,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.escapePressedWithoutCancel=!1,this.treewalker=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT),this.addEventListener("submit",this.handleSubmit)}async show(){var n;this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;const e=this.dialog;if(e.open||!this.isOpening){this.isOpening=!1;return}if(!this.dispatchEvent(new Event("open",{cancelable:!0}))){this.open=!1,this.isOpening=!1;return}e.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),(n=this.querySelector("[autofocus]"))==null||n.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1}async close(e=this.returnValue){if(this.isOpening=!1,!this.isConnected){this.open=!1;return}await this.updateComplete;const r=this.dialog;if(!r.open||this.isOpening){this.open=!1;return}const n=this.returnValue;if(this.returnValue=e,!this.dispatchEvent(new Event("close",{cancelable:!0}))){this.returnValue=n;return}await this.animateDialog(this.getCloseAnimation()),r.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){const e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),r={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},n=this.open&&!this.noFocusTrap,i=Y`
      <div
        class="focus-trap"
        tabindex="0"
        aria-hidden="true"
        @focus=${this.handleFocusTrapFocus}></div>
    `,{ariaLabel:o}=this;return Y`
      <div class="scrim"></div>
      <dialog
        class=${mr(r)}
        aria-label=${o||B}
        aria-labelledby=${this.hasHeadline?"headline":B}
        role=${this.type==="alert"?"alertdialog":B}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        @close=${this.handleClose}
        @keydown=${this.handleKeydown}
        .returnValue=${this.returnValue||B}>
        ${n?i:B}
        <div class="container" @click=${this.handleContentClick}>
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||B}>
              <slot
                name="headline"
                @slotchange=${this.handleHeadlineChange}></slot>
            </h2>
            <md-divider></md-divider>
          </div>
          <div class="scroller">
            <div class="content">
              <div class="top anchor"></div>
              <slot name="content"></slot>
              <div class="bottom anchor"></div>
            </div>
          </div>
          <div class="actions">
            <md-divider></md-divider>
            <slot name="actions" @slotchange=${this.handleActionsChange}></slot>
          </div>
        </div>
        ${n?i:B}
      </dialog>
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(e=>{for(const r of e)this.handleAnchorIntersection(r)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent){this.nextClickIsFromContent=!1;return}this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){const r=e.target,{submitter:n}=e;r.method!=="dialog"||!n||this.close(n.getAttribute("value")??this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;this.escapePressedWithoutCancel=!1;const r=!gg(this,e);e.preventDefault(),!r&&this.close()}handleClose(){var e;this.escapePressedWithoutCancel&&(this.escapePressedWithoutCancel=!1,(e=this.dialog)==null||e.dispatchEvent(new Event("cancel",{cancelable:!0})))}handleKeydown(e){e.key==="Escape"&&(this.escapePressedWithoutCancel=!0,setTimeout(()=>{this.escapePressedWithoutCancel=!1}))}async animateDialog(e){var N;if((N=this.cancelAnimations)==null||N.abort(),this.cancelAnimations=new AbortController,this.quick)return;const{dialog:r,scrim:n,container:i,headline:o,content:s,actions:l}=this;if(!r||!n||!i||!o||!s||!l)return;const{container:c,dialog:u,scrim:f,headline:p,content:m,actions:T}=e,S=[[r,u??[]],[n,f??[]],[i,c??[]],[o,p??[]],[s,m??[]],[l,T??[]]],P=[];for(const[b,y]of S)for(const x of y){const D=b.animate(...x);this.cancelAnimations.signal.addEventListener("abort",()=>{D.cancel()}),P.push(D)}await Promise.all(P.map(b=>b.finished.catch(()=>{})))}handleHeadlineChange(e){const r=e.target;this.hasHeadline=r.assignedElements().length>0}handleActionsChange(e){const r=e.target;this.hasActions=r.assignedElements().length>0}handleIconChange(e){const r=e.target;this.hasIcon=r.assignedElements().length>0}handleAnchorIntersection(e){const{target:r,isIntersecting:n}=e;r===this.topAnchor&&(this.isAtScrollTop=n),r===this.bottomAnchor&&(this.isAtScrollBottom=n)}getIsConnectedPromise(){return new Promise(e=>{this.isConnectedPromiseResolve=e})}handleFocusTrapFocus(e){var p;const[r,n]=this.getFirstAndLastFocusableChildren();if(!r||!n){(p=this.dialog)==null||p.focus();return}const i=e.target===this.firstFocusTrap,o=!i,s=e.relatedTarget===r,l=e.relatedTarget===n,c=!s&&!l;if(o&&l||i&&c){r.focus();return}if(i&&s||o&&c){n.focus();return}}getFirstAndLastFocusableChildren(){let e=null,r=null;for(this.treewalker.currentNode=this.treewalker.root;this.treewalker.nextNode();){const n=this.treewalker.currentNode;t4(n)&&(e||(e=n),r=n)}return[e,r]}}Vi(Oe);R([$({type:Boolean})],Oe.prototype,"open",null);R([$({type:Boolean})],Oe.prototype,"quick",void 0);R([$({attribute:!1})],Oe.prototype,"returnValue",void 0);R([$()],Oe.prototype,"type",void 0);R([$({type:Boolean,attribute:"no-focus-trap"})],Oe.prototype,"noFocusTrap",void 0);R([Ve("dialog")],Oe.prototype,"dialog",void 0);R([Ve(".scrim")],Oe.prototype,"scrim",void 0);R([Ve(".container")],Oe.prototype,"container",void 0);R([Ve(".headline")],Oe.prototype,"headline",void 0);R([Ve(".content")],Oe.prototype,"content",void 0);R([Ve(".actions")],Oe.prototype,"actions",void 0);R([At()],Oe.prototype,"isAtScrollTop",void 0);R([At()],Oe.prototype,"isAtScrollBottom",void 0);R([Ve(".scroller")],Oe.prototype,"scroller",void 0);R([Ve(".top.anchor")],Oe.prototype,"topAnchor",void 0);R([Ve(".bottom.anchor")],Oe.prototype,"bottomAnchor",void 0);R([Ve(".focus-trap")],Oe.prototype,"firstFocusTrap",void 0);R([At()],Oe.prototype,"hasHeadline",void 0);R([At()],Oe.prototype,"hasActions",void 0);R([At()],Oe.prototype,"hasIcon",void 0);function t4(t){var o;const e=":is(button,input,select,textarea,object,:is(a,area)[href],[tabindex],[contenteditable=true])",r=":not(:disabled,[disabled])";return t.matches(e+r+':not([tabindex^="-"])')?!0:!t.localName.includes("-")||!t.matches(r)?!1:((o=t.shadowRoot)==null?void 0:o.delegatesFocus)??!1}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const r4=ge`:host{border-start-start-radius:var(--md-dialog-container-shape-start-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-start-end-radius:var(--md-dialog-container-shape-start-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-end-radius:var(--md-dialog-container-shape-end-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-start-radius:var(--md-dialog-container-shape-end-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size, 24px);width:var(--md-dialog-icon-size, 24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));flex:1;font-weight:var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let sp=class extends Oe{};sp.styles=[r4];sp=R([Ue("md-dialog")],sp);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function T0(t,e=!0){return e&&getComputedStyle(t).getPropertyValue("direction").trim()==="rtl"}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const n4=Bu(Te);class It extends n4{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=T0(this,this.flipIconInRtl)}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Xe].form}get labels(){return this[Xe].labels}willUpdate(){this.href&&(this.disabled=!1)}render(){const e=this.href?gi`div`:gi`button`,{ariaLabel:r,ariaHasPopup:n,ariaExpanded:i}=this,o=r&&this.ariaLabelSelected,s=this.toggle?this.selected:B;let l=B;return this.href||(l=o&&this.selected?this.ariaLabelSelected:r),mg`<${e}
        class="icon-button ${mr(this.getRenderClasses())}"
        id="button"
        aria-label="${l||B}"
        aria-haspopup="${!this.href&&n||B}"
        aria-expanded="${!this.href&&i||B}"
        aria-pressed="${s}"
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?B:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():B}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${e}>`}renderLink(){const{ariaLabel:e}=this;return Y`
      <a
        class="link"
        id="link"
        href="${this.href}"
        target="${this.target||B}"
        aria-label="${e||B}"></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return Y`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return Y`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`}renderTouchTarget(){return Y`<span class="touch"></span>`}renderFocusRing(){return Y`<md-focus-ring
      part="focus-ring"
      for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){return Y`<md-ripple
      for=${this.href?"link":B}
      ?disabled="${!this.href&&this.disabled}"></md-ripple>`}connectedCallback(){this.flipIcon=T0(this,this.flipIconInRtl),super.connectedCallback()}async handleClick(e){await 0,!(!this.toggle||this.disabled||e.defaultPrevented)&&(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}Vi(It),zT(It);It.formAssociated=!0;It.shadowRootOptions={mode:"open",delegatesFocus:!0};R([$({type:Boolean,reflect:!0})],It.prototype,"disabled",void 0);R([$({type:Boolean,attribute:"flip-icon-in-rtl"})],It.prototype,"flipIconInRtl",void 0);R([$()],It.prototype,"href",void 0);R([$()],It.prototype,"target",void 0);R([$({attribute:"aria-label-selected"})],It.prototype,"ariaLabelSelected",void 0);R([$({type:Boolean})],It.prototype,"toggle",void 0);R([$({type:Boolean,reflect:!0})],It.prototype,"selected",void 0);R([$()],It.prototype,"type",void 0);R([$({reflect:!0})],It.prototype,"value",void 0);R([At()],It.prototype,"flipIcon",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const i4=ge`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host([disabled]){--_disabled-icon-opacity: 1}}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const o4=ge`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ap=class extends It{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};ap.styles=[i4,o4];ap=R([Ue("md-icon-button")],ap);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),l4=(t,e)=>{const r=Q.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:l="",children:c,...u},f)=>Q.createElement("svg",{ref:f,...s4,width:i,height:i,stroke:n,strokeWidth:s?Number(o)*24/Number(i):o,className:["lucide",`lucide-${a4(t)}`,l].join(" "),...u},[...e.map(([p,m])=>Q.createElement(p,m)),...Array.isArray(c)?c:[c]]));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=l4("PowerOff",[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15",key:"dxknvb"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68",key:"1x7qb5"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]),u4=["Bartender","Barback","Server","Manager","Security","Runner"],x0=[{id:"ice",label:"ICE",icon:"ac_unit"},{id:"glass",label:"GLASSWARE",icon:"wine_bar",children:[{id:"rocks",label:"ROCKS"},{id:"collins",label:"COLLINS"},{id:"pint",label:"PINT"},{id:"coupe",label:"COUPE"},{id:"shot",label:"SHOT GLASS"},{id:"wine",label:"WINE GLASS"}]},{id:"fruit",label:"FRUIT / GARNISH",icon:"restaurant",children:[{id:"lime",label:"LIMES"},{id:"lemon",label:"LEMONS"},{id:"orange",label:"ORANGES"},{id:"cherry",label:"CHERRIES"},{id:"olive",label:"OLIVES"},{id:"mint",label:"MINT"}]},{id:"restock",label:"RESTOCK WELL",icon:"liquor",children:[{id:"vodka",label:"VODKA"},{id:"gin",label:"GIN"},{id:"tequila",label:"TEQUILA"},{id:"rum",label:"RUM"},{id:"whiskey",label:"WHISKEY"},{id:"cordial",label:"MIXERS"},{id:"beer",label:"BEER"}]},{id:"keg",label:"KEG KICKED",icon:"keg"},{id:"trash",label:"TRASH / SPILL",icon:"delete"},{id:"security",label:"SECURITY",icon:"security"},{id:"manager",label:"MANAGER",icon:"manage_accounts"}],d4=({onJoin:t})=>{const[e,r]=Q.useState("search"),[n,i]=Q.useState(""),o=s=>{s.preventDefault(),t({name:n,status:"temporary"})};return U.jsxs("div",{className:"space-y-4",children:[U.jsxs("md-chip-set",{children:[U.jsx("md-filter-chip",{label:"Search",selected:e==="search",onClick:()=>r("search")}),U.jsx("md-filter-chip",{label:"Create Temp",selected:e==="create",onClick:()=>r("create")})]}),e==="search"?U.jsx("md-filled-text-field",{label:"Search OpenStreetMap",value:n,onInput:s=>i(s.target.value),type:"search"}):U.jsxs("form",{onSubmit:o,children:[U.jsx("md-filled-text-field",{label:"Bar Name",value:n,onInput:s=>i(s.target.value)}),U.jsx("md-filled-button",{type:"submit",children:"Create Bar"})]})]})},h4=({onSelect:t})=>{const[e,r]=Q.useState(""),[n,i]=Q.useState("");return U.jsxs("div",{className:"w-full max-w-sm space-y-6 animate-in fade-in slide-in-from-bottom-4",children:[U.jsxs("div",{className:"text-center space-y-2",children:[U.jsx("h2",{className:"text-2xl font-bold text-white",children:"Identification"}),U.jsx("p",{className:"text-gray-500",children:"Name and Rank, soldier."})]}),U.jsx("md-filled-text-field",{label:"Display Name (e.g. 'Angry Steve')",value:n,onInput:o=>i(o.target.value),required:!0}),U.jsx("div",{className:"bg-[#1E1E1E] rounded-xl overflow-hidden border border-gray-800 max-h-60 overflow-y-auto",children:u4.map(o=>U.jsxs("div",{onClick:()=>r(o),className:`p-4 flex items-center justify-between cursor-pointer border-b border-gray-800 last:border-0 hover:bg-white/5 ${e===o?"bg-white/10":""}`,children:[U.jsxs("div",{className:"flex items-center gap-3",children:[U.jsx("md-icon",{children:o==="Bartender"?"local_bar":"person"}),U.jsx("span",{className:"font-medium text-lg",children:o})]}),U.jsx("md-radio",{checked:e===o,"touch-target":"wrapper"})]},o))}),U.jsx("md-filled-button",{disabled:!e||!n||void 0,onClick:()=>t(e,n),children:"Clock In"})]})};function f4(){const[t,e]=Q.useState(null),[r,n]=Q.useState(null),[i,o]=Q.useState(!1),[s,l]=NC(),c=s.get("bar")||localStorage.getItem("barId"),[u,f]=Q.useState(c),[p,m]=Q.useState(""),[T,S]=Q.useState(null),[P,N]=Q.useState(""),[b,y]=Q.useState([]),[x,D]=Q.useState(x0),[F,z]=Q.useState(null),[_,v]=Q.useState([]),w=Q.useRef(null),[E,A]=Q.useState(!1);Q.useEffect(()=>{const q=uR(fs,ee=>{e(ee),ee&&lL().then(fe=>fe&&z(fe))});return cL().then(()=>{navigator.vibrate&&navigator.vibrate([500,200,500]),new Audio("/alert.mp3").play().catch(()=>{})}),()=>q()},[]),Q.useEffect(()=>{if(!t||!u)return;l({bar:u}),localStorage.setItem("barId",u);const q=vr(ir,`bars/${u}/users`,t.uid),ee=vr(ir,`bars/${u}/tokens`,t.uid);(async()=>{F&&(await Rl(ee,{token:F,updated:Jn()}),await eh(q,{status:"active",lastSeen:Jn()}).catch(()=>{}))})();const Jt=th(q,Ke=>{if(Ke.exists()){const tr=Ke.data();S(tr.role),N(tr.displayName||"Unknown")}else S(null)}),Zt=th(vr(ir,"bars",u),Ke=>{if(Ke.exists()){const tr=Ke.data();m(tr.name),tr.buttons&&D([...x0,...tr.buttons])}}),er=th(EO(W_(ir,"requests"),IO("barId","==",u),TO("timestamp","desc")),Ke=>y(Ke.docs.map(tr=>({id:tr.id,...tr.data()}))));return()=>{Jt(),Zt(),er()}},[t,u,F,l]),Q.useEffect(()=>(w.current&&clearTimeout(w.current),_.length>0&&(w.current=setTimeout(()=>{const q=_.map(ee=>ee.label).join(": ");it(`${q} (Ask Me)`),v([])},6e4)),()=>{w.current&&clearTimeout(w.current)}),[_]);const C=async(q,ee)=>{!t||!u||(await Rl(vr(ir,`bars/${u}/users`,t.uid),{role:q,displayName:ee,email:t.email,status:"active",joinedAt:Jn(),lastSeen:Jn()},{merge:!0}),F&&await Rl(vr(ir,`bars/${u}/tokens`,t.uid),{token:F,updated:Jn()}))},I=async()=>{!t||!u||(await CO(vr(ir,`bars/${u}/tokens`,t.uid)),await eh(vr(ir,`bars/${u}/users`,t.uid),{status:"off_clock"}),f(null),localStorage.removeItem("barId"),A(!1))},it=async q=>{!t||!u||(navigator.vibrate&&navigator.vibrate(100),await kO(W_(ir,"requests"),{barId:u,label:q,requesterId:t.uid,requesterName:P,requesterRole:T,status:"pending",timestamp:Jn(),lastNotification:Jn()}))},Rr=async q=>{await eh(vr(ir,"requests",q),{status:"claimed",claimedBy:t==null?void 0:t.uid,claimerName:P})},Kn=async q=>{q.preventDefault();const ee=new FormData(q.target);try{i?await sR(fs,ee.get("email"),ee.get("password")):await aR(fs,ee.get("email"),ee.get("password"))}catch(fe){n(fe.message)}},Xt=async()=>{try{await PR(fs,aL)}catch(q){n(q.message)}};if(!t)return U.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center p-6 space-y-8 bg-black",children:[U.jsx("h1",{className:"text-4xl font-bold tracking-widest text-white",children:"BARBACKER"}),r&&U.jsx("div",{className:"text-red-400 p-2 border border-red-800 rounded",children:r}),U.jsxs("form",{onSubmit:Kn,className:"w-full max-w-sm space-y-4",children:[U.jsx("md-filled-text-field",{label:"Email",name:"email",type:"email",required:!0}),U.jsx("md-filled-text-field",{label:"Password",name:"password",type:"password",required:!0}),U.jsx("md-filled-button",{type:"submit",children:i?"Create Account":"Clock In"})]}),U.jsxs("div",{className:"flex gap-4 items-center",children:[U.jsx("md-text-button",{onClick:()=>o(!i),children:i?"Login":"Register"}),U.jsxs("md-outlined-button",{onClick:Xt,children:[U.jsx("md-icon",{slot:"icon",children:"mail"}),"Google"]})]})]});if(!u)return U.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-black",children:[U.jsxs("div",{className:"text-center",children:[U.jsx("h2",{className:"text-2xl font-bold text-white mb-1",children:"Select Bar"}),U.jsxs("p",{className:"text-gray-500 text-sm",children:["You are ",t.email]})]}),U.jsx("md-text-button",{onClick:()=>dR(fs),children:"Sign Out"}),U.jsx(d4,{onJoin:async q=>{q.id&&(q.status==="temporary"&&await Rl(vr(ir,"bars",q.id),{name:q.name,address:q.address||"",status:"temporary",buttons:[]},{merge:!0}),f(q.id))}})]});if(!T)return U.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-black",children:[U.jsx("md-icon-button",{onClick:()=>{f(null),localStorage.removeItem("barId")},children:U.jsx("md-icon",{children:"arrow_back"})}),U.jsx(h4,{onSelect:C})]});const H=b.filter(q=>q.status==="pending"),Z=b.filter(q=>q.status!=="pending").slice(0,20),ie=_.length>0?_[_.length-1].children||[]:x;return U.jsxs("div",{className:"min-h-screen pb-24 bg-black relative overflow-hidden",children:[U.jsxs("md-dialog",{open:E,onClose:()=>A(!1),children:[U.jsx("div",{slot:"headline",children:"Abandon Ship?"}),U.jsx("div",{slot:"content",children:"Going off clock stops all notifications. The bar will be unprotected. Are you sure?"}),U.jsxs("div",{slot:"actions",children:[U.jsx("md-text-button",{onClick:()=>A(!1),children:"Stay"}),U.jsx("md-filled-button",{onClick:I,class:"btn-alert",children:"Leave"})]})]}),U.jsxs("div",{className:"flex justify-between items-center p-4 bg-[#121212] sticky top-0 z-10 border-b border-[#333]",children:[U.jsxs("div",{className:"flex flex-col",children:[U.jsx("span",{className:"font-bold text-lg text-white tracking-wide",children:p}),U.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-400",children:[U.jsx("span",{className:"text-white font-bold",children:P}),U.jsx("span",{className:"bg-gray-800 px-1 rounded",children:T})]})]}),U.jsx("div",{className:"flex gap-2",children:U.jsx("md-icon-button",{onClick:()=>A(!0),title:"Go Off Clock",children:U.jsx(c4,{className:"text-gray-500 hover:text-red-500"})})})]}),_.length>0&&U.jsxs("div",{className:"fixed inset-0 bg-black/95 z-50 flex flex-col p-6 animate-in fade-in duration-300",children:[U.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[U.jsx("md-icon-button",{onClick:()=>v([]),children:U.jsx("md-icon",{children:"close"})}),U.jsx("span",{className:"text-xl font-medium text-gray-200",children:_.map(q=>q.label).join(" > ")})]}),U.jsx("div",{className:"grid grid-cols-2 gap-4",children:ie.map(q=>U.jsx("md-filled-tonal-button",{onClick:()=>{q.children?v([..._,q]):(it([..._,q].map(ee=>ee.label).join(": ")),v([]))},style:{height:"100px",fontSize:"18px"},children:q.label},q.id))})]}),U.jsx("div",{className:"grid grid-cols-2 gap-3 p-4",children:x.map(q=>{const ee=H.some(fe=>fe.label.startsWith(q.label));return U.jsx("md-filled-tonal-button",{onClick:()=>{q.children?v([..._,q]):it(q.label)},class:ee?"btn-alert":"",style:{height:"120px"},children:U.jsxs("div",{className:"flex flex-col items-center gap-2",children:[U.jsx("md-icon",{style:{fontSize:32},children:q.icon||"circle"}),U.jsx("span",{className:"text-lg font-bold leading-none",children:q.label}),ee&&U.jsx("span",{className:"text-xs opacity-80",children:"PENDING"})]})},q.id)})}),U.jsx("div",{className:"px-4 mt-4",children:H.map(q=>U.jsxs("div",{onClick:()=>Rr(q.id),className:"mb-2 p-4 bg-[#2C1A1A] border-l-4 border-red-500 rounded-r-lg flex justify-between items-center cursor-pointer active:bg-red-900/40 transition-colors",children:[U.jsxs("div",{className:"flex flex-col",children:[U.jsx("span",{className:"font-medium text-red-100",children:q.label}),U.jsxs("span",{className:"text-xs text-red-400",children:[q.requesterName," (",q.requesterRole,")"]})]}),U.jsx("md-filled-button",{class:"btn-alert",style:{height:"32px"},children:"CLAIM"})]},q.id))}),U.jsxs("div",{className:"px-4 mt-8 pb-10",children:[U.jsx("div",{className:"text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest",children:"Shift Log"}),U.jsx("md-list",{className:"bg-transparent",children:Z.map(q=>U.jsxs("md-list-item",{children:[U.jsx("div",{slot:"headline",className:"text-gray-400",children:q.label}),U.jsxs("div",{slot:"supporting-text",className:"text-xs text-gray-600",children:["Asked by ",q.requesterName," • Claimed by ",q.claimerName||"Someone"]}),U.jsx("md-icon",{slot:"start",className:"text-green-800",children:"check_circle"})]},q.id))})]})]})}Fb(document.getElementById("root")).render(U.jsx(Q.StrictMode,{children:U.jsx(PC,{children:U.jsx(f4,{})})}));
