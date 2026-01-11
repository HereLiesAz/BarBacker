function VT(t,e){for(var r=0;r<e.length;r++){const n=e[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(n,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function MT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Vw={exports:{}},lu={},Mw={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Da=Symbol.for("react.element"),$T=Symbol.for("react.portal"),FT=Symbol.for("react.fragment"),UT=Symbol.for("react.strict_mode"),zT=Symbol.for("react.profiler"),jT=Symbol.for("react.provider"),BT=Symbol.for("react.context"),qT=Symbol.for("react.forward_ref"),HT=Symbol.for("react.suspense"),WT=Symbol.for("react.memo"),KT=Symbol.for("react.lazy"),Tv=Symbol.iterator;function GT(t){return t===null||typeof t!="object"?null:(t=Tv&&t[Tv]||t["@@iterator"],typeof t=="function"?t:null)}var $w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fw=Object.assign,Uw={};function Fo(t,e,r){this.props=t,this.context=e,this.refs=Uw,this.updater=r||$w}Fo.prototype.isReactComponent={};Fo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zw(){}zw.prototype=Fo.prototype;function fp(t,e,r){this.props=t,this.context=e,this.refs=Uw,this.updater=r||$w}var pp=fp.prototype=new zw;pp.constructor=fp;Fw(pp,Fo.prototype);pp.isPureReactComponent=!0;var Av=Array.isArray,jw=Object.prototype.hasOwnProperty,mp={current:null},Bw={key:!0,ref:!0,__self:!0,__source:!0};function qw(t,e,r){var n,i={},o=null,s=null;if(e!=null)for(n in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)jw.call(e,n)&&!Bw.hasOwnProperty(n)&&(i[n]=e[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(n in l=t.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:Da,type:t,key:o,ref:s,props:i,_owner:mp.current}}function QT(t,e){return{$$typeof:Da,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Da}function YT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Sv=/\/+/g;function _d(t,e){return typeof t=="object"&&t!==null&&t.key!=null?YT(""+t.key):e.toString(36)}function Ql(t,e,r,n,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Da:case $T:s=!0}}if(s)return s=t,i=i(s),t=n===""?"."+_d(s,0):n,Av(i)?(r="",t!=null&&(r=t.replace(Sv,"$&/")+"/"),Ql(i,e,r,"",function(u){return u})):i!=null&&(gp(i)&&(i=QT(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Sv,"$&/")+"/")+t)),e.push(i)),1;if(s=0,n=n===""?".":n+":",Av(t))for(var l=0;l<t.length;l++){o=t[l];var c=n+_d(o,l);s+=Ql(o,e,r,c,i)}else if(c=GT(t),typeof c=="function")for(t=c.call(t),l=0;!(o=t.next()).done;)o=o.value,c=n+_d(o,l++),s+=Ql(o,e,r,c,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function vl(t,e,r){if(t==null)return t;var n=[],i=0;return Ql(t,n,"","",function(o){return e.call(r,o,i++)}),n}function XT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Tt={current:null},Yl={transition:null},JT={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:Yl,ReactCurrentOwner:mp};function Hw(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:vl,forEach:function(t,e,r){vl(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return vl(t,function(){e++}),e},toArray:function(t){return vl(t,function(e){return e})||[]},only:function(t){if(!gp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=Fo;oe.Fragment=FT;oe.Profiler=zT;oe.PureComponent=fp;oe.StrictMode=UT;oe.Suspense=HT;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JT;oe.act=Hw;oe.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=Fw({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=mp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)jw.call(e,c)&&!Bw.hasOwnProperty(c)&&(n[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:Da,type:t.type,key:i,ref:o,props:n,_owner:s}};oe.createContext=function(t){return t={$$typeof:BT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jT,_context:t},t.Consumer=t};oe.createElement=qw;oe.createFactory=function(t){var e=qw.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:qT,render:t}};oe.isValidElement=gp;oe.lazy=function(t){return{$$typeof:KT,_payload:{_status:-1,_result:t},_init:XT}};oe.memo=function(t,e){return{$$typeof:WT,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=Yl.transition;Yl.transition={};try{t()}finally{Yl.transition=e}};oe.unstable_act=Hw;oe.useCallback=function(t,e){return Tt.current.useCallback(t,e)};oe.useContext=function(t){return Tt.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return Tt.current.useDeferredValue(t)};oe.useEffect=function(t,e){return Tt.current.useEffect(t,e)};oe.useId=function(){return Tt.current.useId()};oe.useImperativeHandle=function(t,e,r){return Tt.current.useImperativeHandle(t,e,r)};oe.useInsertionEffect=function(t,e){return Tt.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return Tt.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return Tt.current.useMemo(t,e)};oe.useReducer=function(t,e,r){return Tt.current.useReducer(t,e,r)};oe.useRef=function(t){return Tt.current.useRef(t)};oe.useState=function(t){return Tt.current.useState(t)};oe.useSyncExternalStore=function(t,e,r){return Tt.current.useSyncExternalStore(t,e,r)};oe.useTransition=function(){return Tt.current.useTransition()};oe.version="18.3.1";Mw.exports=oe;var W=Mw.exports;const ZT=MT(W),eA=VT({__proto__:null,default:ZT},[W]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tA=W,rA=Symbol.for("react.element"),nA=Symbol.for("react.fragment"),iA=Object.prototype.hasOwnProperty,oA=tA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sA={key:!0,ref:!0,__self:!0,__source:!0};function Ww(t,e,r){var n,i={},o=null,s=null;r!==void 0&&(o=""+r),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(n in e)iA.call(e,n)&&!sA.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:rA,type:t,key:o,ref:s,props:i,_owner:oA.current}}lu.Fragment=nA;lu.jsx=Ww;lu.jsxs=Ww;Vw.exports=lu;var L=Vw.exports,Kw={exports:{}},jt={},Gw={exports:{}},Qw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,Z){var ne=H.length;H.push(Z);e:for(;0<ne;){var _e=ne-1>>>1,pe=H[_e];if(0<i(pe,Z))H[_e]=Z,H[ne]=pe,ne=_e;else break e}}function r(H){return H.length===0?null:H[0]}function n(H){if(H.length===0)return null;var Z=H[0],ne=H.pop();if(ne!==Z){H[0]=ne;e:for(var _e=0,pe=H.length,Ae=pe>>>1;_e<Ae;){var qt=2*(_e+1)-1,nr=H[qt],ir=qt+1,q=H[ir];if(0>i(nr,ne))ir<pe&&0>i(q,nr)?(H[_e]=q,H[ir]=ne,_e=ir):(H[_e]=nr,H[qt]=ne,_e=qt);else if(ir<pe&&0>i(q,ne))H[_e]=q,H[ir]=ne,_e=ir;else break e}}return Z}function i(H,Z){var ne=H.sortIndex-Z.sortIndex;return ne!==0?ne:H.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],h=1,p=null,m=3,b=!1,S=!1,P=!1,N=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(H){for(var Z=r(u);Z!==null;){if(Z.callback===null)n(u);else if(Z.startTime<=H)n(u),Z.sortIndex=Z.expirationTime,e(c,Z);else break;Z=r(u)}}function D(H){if(P=!1,T(H),!S)if(r(c)!==null)S=!0,Jn(U);else{var Z=r(u);Z!==null&&rr(D,Z.startTime-H)}}function U(H,Z){S=!1,P&&(P=!1,E(v),v=-1),b=!0;var ne=m;try{for(T(Z),p=r(c);p!==null&&(!(p.expirationTime>Z)||H&&!A());){var _e=p.callback;if(typeof _e=="function"){p.callback=null,m=p.priorityLevel;var pe=_e(p.expirationTime<=Z);Z=t.unstable_now(),typeof pe=="function"?p.callback=pe:p===r(c)&&n(c),T(Z)}else n(c);p=r(c)}if(p!==null)var Ae=!0;else{var qt=r(u);qt!==null&&rr(D,qt.startTime-Z),Ae=!1}return Ae}finally{p=null,m=ne,b=!1}}var z=!1,w=null,v=-1,_=5,x=-1;function A(){return!(t.unstable_now()-x<_)}function k(){if(w!==null){var H=t.unstable_now();x=H;var Z=!0;try{Z=w(!0,H)}finally{Z?I():(z=!1,w=null)}}else z=!1}var I;if(typeof y=="function")I=function(){y(k)};else if(typeof MessageChannel<"u"){var kt=new MessageChannel,wr=kt.port2;kt.port1.onmessage=k,I=function(){wr.postMessage(null)}}else I=function(){N(k,0)};function Jn(H){w=H,z||(z=!0,I())}function rr(H,Z){v=N(function(){H(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){S||b||(S=!0,Jn(U))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(H){switch(m){case 1:case 2:case 3:var Z=3;break;default:Z=m}var ne=m;m=Z;try{return H()}finally{m=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,Z){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ne=m;m=H;try{return Z()}finally{m=ne}},t.unstable_scheduleCallback=function(H,Z,ne){var _e=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?_e+ne:_e):ne=_e,H){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=ne+pe,H={id:h++,callback:Z,priorityLevel:H,startTime:ne,expirationTime:pe,sortIndex:-1},ne>_e?(H.sortIndex=ne,e(u,H),r(c)===null&&H===r(u)&&(P?(E(v),v=-1):P=!0,rr(D,ne-_e))):(H.sortIndex=pe,e(c,H),S||b||(S=!0,Jn(U))),H},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(H){var Z=m;return function(){var ne=m;m=Z;try{return H.apply(this,arguments)}finally{m=ne}}}})(Qw);Gw.exports=Qw;var aA=Gw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lA=W,Ut=aA;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yw=new Set,Js={};function Li(t,e){xo(t,e),xo(t+"Capture",e)}function xo(t,e){for(Js[t]=e,t=0;t<e.length;t++)Yw.add(e[t])}var Yr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eh=Object.prototype.hasOwnProperty,cA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kv={},Cv={};function uA(t){return Eh.call(Cv,t)?!0:Eh.call(kv,t)?!1:cA.test(t)?Cv[t]=!0:(kv[t]=!0,!1)}function dA(t,e,r,n){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hA(t,e,r,n){if(e===null||typeof e>"u"||dA(t,e,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function At(t,e,r,n,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new At(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new At(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new At(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new At(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new At(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new At(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new At(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new At(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new At(t,5,!1,t.toLowerCase(),null,!1,!1)});var vp=/[\-:]([a-z])/g;function yp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vp,yp);nt[e]=new At(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vp,yp);nt[e]=new At(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vp,yp);nt[e]=new At(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new At(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new At("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new At(t,1,!1,t.toLowerCase(),null,!0,!0)});function _p(t,e,r,n){var i=nt.hasOwnProperty(e)?nt[e]:null;(i!==null?i.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hA(e,r,i,n)&&(r=null),n||i===null?uA(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type===3?!1:"":r:(e=i.attributeName,n=i.attributeNamespace,r===null?t.removeAttribute(e):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?t.setAttributeNS(n,e,r):t.setAttribute(e,r))))}var sn=lA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yl=Symbol.for("react.element"),Zi=Symbol.for("react.portal"),eo=Symbol.for("react.fragment"),wp=Symbol.for("react.strict_mode"),xh=Symbol.for("react.profiler"),Xw=Symbol.for("react.provider"),Jw=Symbol.for("react.context"),bp=Symbol.for("react.forward_ref"),Ih=Symbol.for("react.suspense"),Th=Symbol.for("react.suspense_list"),Ep=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),Zw=Symbol.for("react.offscreen"),Rv=Symbol.iterator;function hs(t){return t===null||typeof t!="object"?null:(t=Rv&&t[Rv]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,wd;function Ts(t){if(wd===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);wd=e&&e[1]||""}return`
`+wd+t}var bd=!1;function Ed(t,e){if(!t||bd)return"";bd=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var n=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){n=u}t.call(e.prototype)}else{try{throw Error()}catch(u){n=u}t()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=n.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=s&&0<=l);break}}}finally{bd=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Ts(t):""}function fA(t){switch(t.tag){case 5:return Ts(t.type);case 16:return Ts("Lazy");case 13:return Ts("Suspense");case 19:return Ts("SuspenseList");case 0:case 2:case 15:return t=Ed(t.type,!1),t;case 11:return t=Ed(t.type.render,!1),t;case 1:return t=Ed(t.type,!0),t;default:return""}}function Ah(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case eo:return"Fragment";case Zi:return"Portal";case xh:return"Profiler";case wp:return"StrictMode";case Ih:return"Suspense";case Th:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Jw:return(t.displayName||"Context")+".Consumer";case Xw:return(t._context.displayName||"Context")+".Provider";case bp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ep:return e=t.displayName||null,e!==null?e:Ah(t.type)||"Memo";case mn:e=t._payload,t=t._init;try{return Ah(t(e))}catch{}}return null}function pA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ah(e);case 8:return e===wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $n(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function e0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mA(t){var e=e0(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _l(t){t._valueTracker||(t._valueTracker=mA(t))}function t0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),n="";return t&&(n=e0(t)?t.checked?"true":"false":t.value),t=n,t!==r?(e.setValue(t),!0):!1}function yc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sh(t,e){var r=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Pv(t,e){var r=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;r=$n(e.value!=null?e.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function r0(t,e){e=e.checked,e!=null&&_p(t,"checked",e,!1)}function kh(t,e){r0(t,e);var r=$n(e.value),n=e.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ch(t,e.type,r):e.hasOwnProperty("defaultValue")&&Ch(t,e.type,$n(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Nv(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function Ch(t,e,r){(e!=="number"||yc(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var As=Array.isArray;function ho(t,e,r,n){if(t=t.options,e){e={};for(var i=0;i<r.length;i++)e["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=e.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&n&&(t[r].defaultSelected=!0)}else{for(r=""+$n(r),e=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Rh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ov(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(F(92));if(As(r)){if(1<r.length)throw Error(F(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:$n(r)}}function n0(t,e){var r=$n(e.value),n=$n(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function Dv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function i0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ph(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?i0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wl,o0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,n,i){MSApp.execUnsafeLocalFunction(function(){return t(e,r,n,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wl=wl||document.createElement("div"),wl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zs(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gA=["Webkit","ms","Moz","O"];Object.keys(Ls).forEach(function(t){gA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ls[e]=Ls[t]})});function s0(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Ls.hasOwnProperty(t)&&Ls[t]?(""+e).trim():e+"px"}function a0(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=s0(r,e[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,i):t[r]=i}}var vA=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nh(t,e){if(e){if(vA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Oh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dh=null;function xp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lh=null,fo=null,po=null;function Lv(t){if(t=Ma(t)){if(typeof Lh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=fu(e),Lh(t.stateNode,t.type,e))}}function l0(t){fo?po?po.push(t):po=[t]:fo=t}function c0(){if(fo){var t=fo,e=po;if(po=fo=null,Lv(t),e)for(t=0;t<e.length;t++)Lv(e[t])}}function u0(t,e){return t(e)}function d0(){}var xd=!1;function h0(t,e,r){if(xd)return t(e,r);xd=!0;try{return u0(t,e,r)}finally{xd=!1,(fo!==null||po!==null)&&(d0(),c0())}}function ea(t,e){var r=t.stateNode;if(r===null)return null;var n=fu(r);if(n===null)return null;r=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(F(231,e,typeof r));return r}var Vh=!1;if(Yr)try{var fs={};Object.defineProperty(fs,"passive",{get:function(){Vh=!0}}),window.addEventListener("test",fs,fs),window.removeEventListener("test",fs,fs)}catch{Vh=!1}function yA(t,e,r,n,i,o,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(r,u)}catch(h){this.onError(h)}}var Vs=!1,_c=null,wc=!1,Mh=null,_A={onError:function(t){Vs=!0,_c=t}};function wA(t,e,r,n,i,o,s,l,c){Vs=!1,_c=null,yA.apply(_A,arguments)}function bA(t,e,r,n,i,o,s,l,c){if(wA.apply(this,arguments),Vs){if(Vs){var u=_c;Vs=!1,_c=null}else throw Error(F(198));wc||(wc=!0,Mh=u)}}function Vi(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function f0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vv(t){if(Vi(t)!==t)throw Error(F(188))}function EA(t){var e=t.alternate;if(!e){if(e=Vi(t),e===null)throw Error(F(188));return e!==t?null:t}for(var r=t,n=e;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return Vv(i),t;if(o===n)return Vv(i),e;o=o.sibling}throw Error(F(188))}if(r.return!==n.return)r=i,n=o;else{for(var s=!1,l=i.child;l;){if(l===r){s=!0,r=i,n=o;break}if(l===n){s=!0,n=i,r=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===r){s=!0,r=o,n=i;break}if(l===n){s=!0,n=o,r=i;break}l=l.sibling}if(!s)throw Error(F(189))}}if(r.alternate!==n)throw Error(F(190))}if(r.tag!==3)throw Error(F(188));return r.stateNode.current===r?t:e}function p0(t){return t=EA(t),t!==null?m0(t):null}function m0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=m0(t);if(e!==null)return e;t=t.sibling}return null}var g0=Ut.unstable_scheduleCallback,Mv=Ut.unstable_cancelCallback,xA=Ut.unstable_shouldYield,IA=Ut.unstable_requestPaint,$e=Ut.unstable_now,TA=Ut.unstable_getCurrentPriorityLevel,Ip=Ut.unstable_ImmediatePriority,v0=Ut.unstable_UserBlockingPriority,bc=Ut.unstable_NormalPriority,AA=Ut.unstable_LowPriority,y0=Ut.unstable_IdlePriority,cu=null,Ir=null;function SA(t){if(Ir&&typeof Ir.onCommitFiberRoot=="function")try{Ir.onCommitFiberRoot(cu,t,void 0,(t.current.flags&128)===128)}catch{}}var pr=Math.clz32?Math.clz32:RA,kA=Math.log,CA=Math.LN2;function RA(t){return t>>>=0,t===0?32:31-(kA(t)/CA|0)|0}var bl=64,El=4194304;function Ss(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ec(t,e){var r=t.pendingLanes;if(r===0)return 0;var n=0,i=t.suspendedLanes,o=t.pingedLanes,s=r&268435455;if(s!==0){var l=s&~i;l!==0?n=Ss(l):(o&=s,o!==0&&(n=Ss(o)))}else s=r&~i,s!==0?n=Ss(s):o!==0&&(n=Ss(o));if(n===0)return 0;if(e!==0&&e!==n&&!(e&i)&&(i=n&-n,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(n&4&&(n|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)r=31-pr(e),i=1<<r,n|=t[r],e&=~i;return n}function PA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function NA(t,e){for(var r=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-pr(o),l=1<<s,c=i[s];c===-1?(!(l&r)||l&n)&&(i[s]=PA(l,e)):c<=e&&(t.expiredLanes|=l),o&=~l}}function $h(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _0(){var t=bl;return bl<<=1,!(bl&4194240)&&(bl=64),t}function Id(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function La(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pr(e),t[e]=r}function OA(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<r;){var i=31-pr(r),o=1<<i;e[i]=0,n[i]=-1,t[i]=-1,r&=~o}}function Tp(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var n=31-pr(r),i=1<<n;i&e|t[n]&e&&(t[n]|=e),r&=~i}}var me=0;function w0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var b0,Ap,E0,x0,I0,Fh=!1,xl=[],Sn=null,kn=null,Cn=null,ta=new Map,ra=new Map,yn=[],DA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $v(t,e){switch(t){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(e.pointerId)}}function ps(t,e,r,n,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Ma(e),e!==null&&Ap(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function LA(t,e,r,n,i){switch(e){case"focusin":return Sn=ps(Sn,t,e,r,n,i),!0;case"dragenter":return kn=ps(kn,t,e,r,n,i),!0;case"mouseover":return Cn=ps(Cn,t,e,r,n,i),!0;case"pointerover":var o=i.pointerId;return ta.set(o,ps(ta.get(o)||null,t,e,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,ra.set(o,ps(ra.get(o)||null,t,e,r,n,i)),!0}return!1}function T0(t){var e=li(t.target);if(e!==null){var r=Vi(e);if(r!==null){if(e=r.tag,e===13){if(e=f0(r),e!==null){t.blockedOn=e,I0(t.priority,function(){E0(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Uh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.constructor(r.type,r);Dh=n,r.target.dispatchEvent(n),Dh=null}else return e=Ma(r),e!==null&&Ap(e),t.blockedOn=r,!1;e.shift()}return!0}function Fv(t,e,r){Xl(t)&&r.delete(e)}function VA(){Fh=!1,Sn!==null&&Xl(Sn)&&(Sn=null),kn!==null&&Xl(kn)&&(kn=null),Cn!==null&&Xl(Cn)&&(Cn=null),ta.forEach(Fv),ra.forEach(Fv)}function ms(t,e){t.blockedOn===e&&(t.blockedOn=null,Fh||(Fh=!0,Ut.unstable_scheduleCallback(Ut.unstable_NormalPriority,VA)))}function na(t){function e(i){return ms(i,t)}if(0<xl.length){ms(xl[0],t);for(var r=1;r<xl.length;r++){var n=xl[r];n.blockedOn===t&&(n.blockedOn=null)}}for(Sn!==null&&ms(Sn,t),kn!==null&&ms(kn,t),Cn!==null&&ms(Cn,t),ta.forEach(e),ra.forEach(e),r=0;r<yn.length;r++)n=yn[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<yn.length&&(r=yn[0],r.blockedOn===null);)T0(r),r.blockedOn===null&&yn.shift()}var mo=sn.ReactCurrentBatchConfig,xc=!0;function MA(t,e,r,n){var i=me,o=mo.transition;mo.transition=null;try{me=1,Sp(t,e,r,n)}finally{me=i,mo.transition=o}}function $A(t,e,r,n){var i=me,o=mo.transition;mo.transition=null;try{me=4,Sp(t,e,r,n)}finally{me=i,mo.transition=o}}function Sp(t,e,r,n){if(xc){var i=Uh(t,e,r,n);if(i===null)Dd(t,e,n,Ic,r),$v(t,n);else if(LA(i,t,e,r,n))n.stopPropagation();else if($v(t,n),e&4&&-1<DA.indexOf(t)){for(;i!==null;){var o=Ma(i);if(o!==null&&b0(o),o=Uh(t,e,r,n),o===null&&Dd(t,e,n,Ic,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else Dd(t,e,n,null,r)}}var Ic=null;function Uh(t,e,r,n){if(Ic=null,t=xp(n),t=li(t),t!==null)if(e=Vi(t),e===null)t=null;else if(r=e.tag,r===13){if(t=f0(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ic=t,null}function A0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TA()){case Ip:return 1;case v0:return 4;case bc:case AA:return 16;case y0:return 536870912;default:return 16}default:return 16}}var In=null,kp=null,Jl=null;function S0(){if(Jl)return Jl;var t,e=kp,r=e.length,n,i="value"in In?In.value:In.textContent,o=i.length;for(t=0;t<r&&e[t]===i[t];t++);var s=r-t;for(n=1;n<=s&&e[r-n]===i[o-n];n++);return Jl=i.slice(t,1<n?1-n:void 0)}function Zl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Il(){return!0}function Uv(){return!1}function Bt(t){function e(r,n,i,o,s){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(r=t[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Il:Uv,this.isPropagationStopped=Uv,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Il)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Il)},persist:function(){},isPersistent:Il}),e}var Uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cp=Bt(Uo),Va=Ce({},Uo,{view:0,detail:0}),FA=Bt(Va),Td,Ad,gs,uu=Ce({},Va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==gs&&(gs&&t.type==="mousemove"?(Td=t.screenX-gs.screenX,Ad=t.screenY-gs.screenY):Ad=Td=0,gs=t),Td)},movementY:function(t){return"movementY"in t?t.movementY:Ad}}),zv=Bt(uu),UA=Ce({},uu,{dataTransfer:0}),zA=Bt(UA),jA=Ce({},Va,{relatedTarget:0}),Sd=Bt(jA),BA=Ce({},Uo,{animationName:0,elapsedTime:0,pseudoElement:0}),qA=Bt(BA),HA=Ce({},Uo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),WA=Bt(HA),KA=Ce({},Uo,{data:0}),jv=Bt(KA),GA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=YA[t])?!!e[t]:!1}function Rp(){return XA}var JA=Ce({},Va,{key:function(t){if(t.key){var e=GA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?QA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rp,charCode:function(t){return t.type==="keypress"?Zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ZA=Bt(JA),eS=Ce({},uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bv=Bt(eS),tS=Ce({},Va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rp}),rS=Bt(tS),nS=Ce({},Uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),iS=Bt(nS),oS=Ce({},uu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sS=Bt(oS),aS=[9,13,27,32],Pp=Yr&&"CompositionEvent"in window,Ms=null;Yr&&"documentMode"in document&&(Ms=document.documentMode);var lS=Yr&&"TextEvent"in window&&!Ms,k0=Yr&&(!Pp||Ms&&8<Ms&&11>=Ms),qv=" ",Hv=!1;function C0(t,e){switch(t){case"keyup":return aS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function R0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var to=!1;function cS(t,e){switch(t){case"compositionend":return R0(e);case"keypress":return e.which!==32?null:(Hv=!0,qv);case"textInput":return t=e.data,t===qv&&Hv?null:t;default:return null}}function uS(t,e){if(to)return t==="compositionend"||!Pp&&C0(t,e)?(t=S0(),Jl=kp=In=null,to=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return k0&&e.locale!=="ko"?null:e.data;default:return null}}var dS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dS[t.type]:e==="textarea"}function P0(t,e,r,n){l0(n),e=Tc(e,"onChange"),0<e.length&&(r=new Cp("onChange","change",null,r,n),t.push({event:r,listeners:e}))}var $s=null,ia=null;function hS(t){j0(t,0)}function du(t){var e=io(t);if(t0(e))return t}function fS(t,e){if(t==="change")return e}var N0=!1;if(Yr){var kd;if(Yr){var Cd="oninput"in document;if(!Cd){var Kv=document.createElement("div");Kv.setAttribute("oninput","return;"),Cd=typeof Kv.oninput=="function"}kd=Cd}else kd=!1;N0=kd&&(!document.documentMode||9<document.documentMode)}function Gv(){$s&&($s.detachEvent("onpropertychange",O0),ia=$s=null)}function O0(t){if(t.propertyName==="value"&&du(ia)){var e=[];P0(e,ia,t,xp(t)),h0(hS,e)}}function pS(t,e,r){t==="focusin"?(Gv(),$s=e,ia=r,$s.attachEvent("onpropertychange",O0)):t==="focusout"&&Gv()}function mS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return du(ia)}function gS(t,e){if(t==="click")return du(e)}function vS(t,e){if(t==="input"||t==="change")return du(e)}function yS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vr=typeof Object.is=="function"?Object.is:yS;function oa(t,e){if(vr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Eh.call(e,i)||!vr(t[i],e[i]))return!1}return!0}function Qv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yv(t,e){var r=Qv(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=e&&n>=e)return{node:r,offset:e-t};t=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Qv(r)}}function D0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?D0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function L0(){for(var t=window,e=yc();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=yc(t.document)}return e}function Np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _S(t){var e=L0(),r=t.focusedElem,n=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&D0(r.ownerDocument.documentElement,r)){if(n!==null&&Np(r)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!t.extend&&o>n&&(i=n,n=o,o=i),i=Yv(r,o);var s=Yv(r,n);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>n?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wS=Yr&&"documentMode"in document&&11>=document.documentMode,ro=null,zh=null,Fs=null,jh=!1;function Xv(t,e,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;jh||ro==null||ro!==yc(n)||(n=ro,"selectionStart"in n&&Np(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Fs&&oa(Fs,n)||(Fs=n,n=Tc(zh,"onSelect"),0<n.length&&(e=new Cp("onSelect","select",null,e,r),t.push({event:e,listeners:n}),e.target=ro)))}function Tl(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var no={animationend:Tl("Animation","AnimationEnd"),animationiteration:Tl("Animation","AnimationIteration"),animationstart:Tl("Animation","AnimationStart"),transitionend:Tl("Transition","TransitionEnd")},Rd={},V0={};Yr&&(V0=document.createElement("div").style,"AnimationEvent"in window||(delete no.animationend.animation,delete no.animationiteration.animation,delete no.animationstart.animation),"TransitionEvent"in window||delete no.transitionend.transition);function hu(t){if(Rd[t])return Rd[t];if(!no[t])return t;var e=no[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in V0)return Rd[t]=e[r];return t}var M0=hu("animationend"),$0=hu("animationiteration"),F0=hu("animationstart"),U0=hu("transitionend"),z0=new Map,Jv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(t,e){z0.set(t,e),Li(e,[t])}for(var Pd=0;Pd<Jv.length;Pd++){var Nd=Jv[Pd],bS=Nd.toLowerCase(),ES=Nd[0].toUpperCase()+Nd.slice(1);Bn(bS,"on"+ES)}Bn(M0,"onAnimationEnd");Bn($0,"onAnimationIteration");Bn(F0,"onAnimationStart");Bn("dblclick","onDoubleClick");Bn("focusin","onFocus");Bn("focusout","onBlur");Bn(U0,"onTransitionEnd");xo("onMouseEnter",["mouseout","mouseover"]);xo("onMouseLeave",["mouseout","mouseover"]);xo("onPointerEnter",["pointerout","pointerover"]);xo("onPointerLeave",["pointerout","pointerover"]);Li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Li("onBeforeInput",["compositionend","keypress","textInput","paste"]);Li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ks));function Zv(t,e,r){var n=t.type||"unknown-event";t.currentTarget=r,bA(n,e,void 0,t),t.currentTarget=null}function j0(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],i=n.event;n=n.listeners;e:{var o=void 0;if(e)for(var s=n.length-1;0<=s;s--){var l=n[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Zv(i,l,u),o=c}else for(s=0;s<n.length;s++){if(l=n[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Zv(i,l,u),o=c}}}if(wc)throw t=Mh,wc=!1,Mh=null,t}function be(t,e){var r=e[Kh];r===void 0&&(r=e[Kh]=new Set);var n=t+"__bubble";r.has(n)||(B0(e,t,2,!1),r.add(n))}function Od(t,e,r){var n=0;e&&(n|=4),B0(r,t,n,e)}var Al="_reactListening"+Math.random().toString(36).slice(2);function sa(t){if(!t[Al]){t[Al]=!0,Yw.forEach(function(r){r!=="selectionchange"&&(xS.has(r)||Od(r,!1,t),Od(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Al]||(e[Al]=!0,Od("selectionchange",!1,e))}}function B0(t,e,r,n){switch(A0(e)){case 1:var i=MA;break;case 4:i=$A;break;default:i=Sp}r=i.bind(null,e,r,t),i=void 0,!Vh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,r,{capture:!0,passive:i}):t.addEventListener(e,r,!0):i!==void 0?t.addEventListener(e,r,{passive:i}):t.addEventListener(e,r,!1)}function Dd(t,e,r,n,i){var o=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=n.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=li(l),s===null)return;if(c=s.tag,c===5||c===6){n=o=s;continue e}l=l.parentNode}}n=n.return}h0(function(){var u=o,h=xp(r),p=[];e:{var m=z0.get(t);if(m!==void 0){var b=Cp,S=t;switch(t){case"keypress":if(Zl(r)===0)break e;case"keydown":case"keyup":b=ZA;break;case"focusin":S="focus",b=Sd;break;case"focusout":S="blur",b=Sd;break;case"beforeblur":case"afterblur":b=Sd;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=zv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=zA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=rS;break;case M0:case $0:case F0:b=qA;break;case U0:b=iS;break;case"scroll":b=FA;break;case"wheel":b=sS;break;case"copy":case"cut":case"paste":b=WA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Bv}var P=(e&4)!==0,N=!P&&t==="scroll",E=P?m!==null?m+"Capture":null:m;P=[];for(var y=u,T;y!==null;){T=y;var D=T.stateNode;if(T.tag===5&&D!==null&&(T=D,E!==null&&(D=ea(y,E),D!=null&&P.push(aa(y,D,T)))),N)break;y=y.return}0<P.length&&(m=new b(m,S,null,r,h),p.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",m&&r!==Dh&&(S=r.relatedTarget||r.fromElement)&&(li(S)||S[Xr]))break e;if((b||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,b?(S=r.relatedTarget||r.toElement,b=u,S=S?li(S):null,S!==null&&(N=Vi(S),S!==N||S.tag!==5&&S.tag!==6)&&(S=null)):(b=null,S=u),b!==S)){if(P=zv,D="onMouseLeave",E="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(P=Bv,D="onPointerLeave",E="onPointerEnter",y="pointer"),N=b==null?m:io(b),T=S==null?m:io(S),m=new P(D,y+"leave",b,r,h),m.target=N,m.relatedTarget=T,D=null,li(h)===u&&(P=new P(E,y+"enter",S,r,h),P.target=T,P.relatedTarget=N,D=P),N=D,b&&S)t:{for(P=b,E=S,y=0,T=P;T;T=Gi(T))y++;for(T=0,D=E;D;D=Gi(D))T++;for(;0<y-T;)P=Gi(P),y--;for(;0<T-y;)E=Gi(E),T--;for(;y--;){if(P===E||E!==null&&P===E.alternate)break t;P=Gi(P),E=Gi(E)}P=null}else P=null;b!==null&&ey(p,m,b,P,!1),S!==null&&N!==null&&ey(p,N,S,P,!0)}}e:{if(m=u?io(u):window,b=m.nodeName&&m.nodeName.toLowerCase(),b==="select"||b==="input"&&m.type==="file")var U=fS;else if(Wv(m))if(N0)U=vS;else{U=mS;var z=pS}else(b=m.nodeName)&&b.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(U=gS);if(U&&(U=U(t,u))){P0(p,U,r,h);break e}z&&z(t,m,u),t==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&Ch(m,"number",m.value)}switch(z=u?io(u):window,t){case"focusin":(Wv(z)||z.contentEditable==="true")&&(ro=z,zh=u,Fs=null);break;case"focusout":Fs=zh=ro=null;break;case"mousedown":jh=!0;break;case"contextmenu":case"mouseup":case"dragend":jh=!1,Xv(p,r,h);break;case"selectionchange":if(wS)break;case"keydown":case"keyup":Xv(p,r,h)}var w;if(Pp)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else to?C0(t,r)&&(v="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(v="onCompositionStart");v&&(k0&&r.locale!=="ko"&&(to||v!=="onCompositionStart"?v==="onCompositionEnd"&&to&&(w=S0()):(In=h,kp="value"in In?In.value:In.textContent,to=!0)),z=Tc(u,v),0<z.length&&(v=new jv(v,t,null,r,h),p.push({event:v,listeners:z}),w?v.data=w:(w=R0(r),w!==null&&(v.data=w)))),(w=lS?cS(t,r):uS(t,r))&&(u=Tc(u,"onBeforeInput"),0<u.length&&(h=new jv("onBeforeInput","beforeinput",null,r,h),p.push({event:h,listeners:u}),h.data=w))}j0(p,e)})}function aa(t,e,r){return{instance:t,listener:e,currentTarget:r}}function Tc(t,e){for(var r=e+"Capture",n=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ea(t,r),o!=null&&n.unshift(aa(t,o,i)),o=ea(t,e),o!=null&&n.push(aa(t,o,i))),t=t.return}return n}function Gi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ey(t,e,r,n,i){for(var o=e._reactName,s=[];r!==null&&r!==n;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&u!==null&&(l=u,i?(c=ea(r,o),c!=null&&s.unshift(aa(r,c,l))):i||(c=ea(r,o),c!=null&&s.push(aa(r,c,l)))),r=r.return}s.length!==0&&t.push({event:e,listeners:s})}var IS=/\r\n?/g,TS=/\u0000|\uFFFD/g;function ty(t){return(typeof t=="string"?t:""+t).replace(IS,`
`).replace(TS,"")}function Sl(t,e,r){if(e=ty(e),ty(t)!==e&&r)throw Error(F(425))}function Ac(){}var Bh=null,qh=null;function Hh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wh=typeof setTimeout=="function"?setTimeout:void 0,AS=typeof clearTimeout=="function"?clearTimeout:void 0,ry=typeof Promise=="function"?Promise:void 0,SS=typeof queueMicrotask=="function"?queueMicrotask:typeof ry<"u"?function(t){return ry.resolve(null).then(t).catch(kS)}:Wh;function kS(t){setTimeout(function(){throw t})}function Ld(t,e){var r=e,n=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){t.removeChild(i),na(e);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);na(e)}function Rn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ny(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var zo=Math.random().toString(36).slice(2),xr="__reactFiber$"+zo,la="__reactProps$"+zo,Xr="__reactContainer$"+zo,Kh="__reactEvents$"+zo,CS="__reactListeners$"+zo,RS="__reactHandles$"+zo;function li(t){var e=t[xr];if(e)return e;for(var r=t.parentNode;r;){if(e=r[Xr]||r[xr]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=ny(t);t!==null;){if(r=t[xr])return r;t=ny(t)}return e}t=r,r=t.parentNode}return null}function Ma(t){return t=t[xr]||t[Xr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function io(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function fu(t){return t[la]||null}var Gh=[],oo=-1;function qn(t){return{current:t}}function xe(t){0>oo||(t.current=Gh[oo],Gh[oo]=null,oo--)}function ye(t,e){oo++,Gh[oo]=t.current,t.current=e}var Fn={},gt=qn(Fn),Nt=qn(!1),Ei=Fn;function Io(t,e){var r=t.type.contextTypes;if(!r)return Fn;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=e[o];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ot(t){return t=t.childContextTypes,t!=null}function Sc(){xe(Nt),xe(gt)}function iy(t,e,r){if(gt.current!==Fn)throw Error(F(168));ye(gt,e),ye(Nt,r)}function q0(t,e,r){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in e))throw Error(F(108,pA(t)||"Unknown",i));return Ce({},r,n)}function kc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fn,Ei=gt.current,ye(gt,t),ye(Nt,Nt.current),!0}function oy(t,e,r){var n=t.stateNode;if(!n)throw Error(F(169));r?(t=q0(t,e,Ei),n.__reactInternalMemoizedMergedChildContext=t,xe(Nt),xe(gt),ye(gt,t)):xe(Nt),ye(Nt,r)}var Ur=null,pu=!1,Vd=!1;function H0(t){Ur===null?Ur=[t]:Ur.push(t)}function PS(t){pu=!0,H0(t)}function Hn(){if(!Vd&&Ur!==null){Vd=!0;var t=0,e=me;try{var r=Ur;for(me=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}Ur=null,pu=!1}catch(i){throw Ur!==null&&(Ur=Ur.slice(t+1)),g0(Ip,Hn),i}finally{me=e,Vd=!1}}return null}var so=[],ao=0,Cc=null,Rc=0,Wt=[],Kt=0,xi=null,jr=1,Br="";function oi(t,e){so[ao++]=Rc,so[ao++]=Cc,Cc=t,Rc=e}function W0(t,e,r){Wt[Kt++]=jr,Wt[Kt++]=Br,Wt[Kt++]=xi,xi=t;var n=jr;t=Br;var i=32-pr(n)-1;n&=~(1<<i),r+=1;var o=32-pr(e)+i;if(30<o){var s=i-i%5;o=(n&(1<<s)-1).toString(32),n>>=s,i-=s,jr=1<<32-pr(e)+i|r<<i|n,Br=o+t}else jr=1<<o|r<<i|n,Br=t}function Op(t){t.return!==null&&(oi(t,1),W0(t,1,0))}function Dp(t){for(;t===Cc;)Cc=so[--ao],so[ao]=null,Rc=so[--ao],so[ao]=null;for(;t===xi;)xi=Wt[--Kt],Wt[Kt]=null,Br=Wt[--Kt],Wt[Kt]=null,jr=Wt[--Kt],Wt[Kt]=null}var Ft=null,Mt=null,Te=!1,hr=null;function K0(t,e){var r=Gt(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function sy(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ft=t,Mt=Rn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ft=t,Mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=xi!==null?{id:jr,overflow:Br}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Gt(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,Ft=t,Mt=null,!0):!1;default:return!1}}function Qh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yh(t){if(Te){var e=Mt;if(e){var r=e;if(!sy(t,e)){if(Qh(t))throw Error(F(418));e=Rn(r.nextSibling);var n=Ft;e&&sy(t,e)?K0(n,r):(t.flags=t.flags&-4097|2,Te=!1,Ft=t)}}else{if(Qh(t))throw Error(F(418));t.flags=t.flags&-4097|2,Te=!1,Ft=t}}}function ay(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ft=t}function kl(t){if(t!==Ft)return!1;if(!Te)return ay(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hh(t.type,t.memoizedProps)),e&&(e=Mt)){if(Qh(t))throw G0(),Error(F(418));for(;e;)K0(t,e),e=Rn(e.nextSibling)}if(ay(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){Mt=Rn(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}Mt=null}}else Mt=Ft?Rn(t.stateNode.nextSibling):null;return!0}function G0(){for(var t=Mt;t;)t=Rn(t.nextSibling)}function To(){Mt=Ft=null,Te=!1}function Lp(t){hr===null?hr=[t]:hr.push(t)}var NS=sn.ReactCurrentBatchConfig;function vs(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(F(309));var n=r.stateNode}if(!n)throw Error(F(147,t));var i=n,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(F(284));if(!r._owner)throw Error(F(290,t))}return t}function Cl(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ly(t){var e=t._init;return e(t._payload)}function Q0(t){function e(E,y){if(t){var T=E.deletions;T===null?(E.deletions=[y],E.flags|=16):T.push(y)}}function r(E,y){if(!t)return null;for(;y!==null;)e(E,y),y=y.sibling;return null}function n(E,y){for(E=new Map;y!==null;)y.key!==null?E.set(y.key,y):E.set(y.index,y),y=y.sibling;return E}function i(E,y){return E=Dn(E,y),E.index=0,E.sibling=null,E}function o(E,y,T){return E.index=T,t?(T=E.alternate,T!==null?(T=T.index,T<y?(E.flags|=2,y):T):(E.flags|=2,y)):(E.flags|=1048576,y)}function s(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,y,T,D){return y===null||y.tag!==6?(y=Bd(T,E.mode,D),y.return=E,y):(y=i(y,T),y.return=E,y)}function c(E,y,T,D){var U=T.type;return U===eo?h(E,y,T.props.children,D,T.key):y!==null&&(y.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===mn&&ly(U)===y.type)?(D=i(y,T.props),D.ref=vs(E,y,T),D.return=E,D):(D=sc(T.type,T.key,T.props,null,E.mode,D),D.ref=vs(E,y,T),D.return=E,D)}function u(E,y,T,D){return y===null||y.tag!==4||y.stateNode.containerInfo!==T.containerInfo||y.stateNode.implementation!==T.implementation?(y=qd(T,E.mode,D),y.return=E,y):(y=i(y,T.children||[]),y.return=E,y)}function h(E,y,T,D,U){return y===null||y.tag!==7?(y=vi(T,E.mode,D,U),y.return=E,y):(y=i(y,T),y.return=E,y)}function p(E,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Bd(""+y,E.mode,T),y.return=E,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case yl:return T=sc(y.type,y.key,y.props,null,E.mode,T),T.ref=vs(E,null,y),T.return=E,T;case Zi:return y=qd(y,E.mode,T),y.return=E,y;case mn:var D=y._init;return p(E,D(y._payload),T)}if(As(y)||hs(y))return y=vi(y,E.mode,T,null),y.return=E,y;Cl(E,y)}return null}function m(E,y,T,D){var U=y!==null?y.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return U!==null?null:l(E,y,""+T,D);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case yl:return T.key===U?c(E,y,T,D):null;case Zi:return T.key===U?u(E,y,T,D):null;case mn:return U=T._init,m(E,y,U(T._payload),D)}if(As(T)||hs(T))return U!==null?null:h(E,y,T,D,null);Cl(E,T)}return null}function b(E,y,T,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return E=E.get(T)||null,l(y,E,""+D,U);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case yl:return E=E.get(D.key===null?T:D.key)||null,c(y,E,D,U);case Zi:return E=E.get(D.key===null?T:D.key)||null,u(y,E,D,U);case mn:var z=D._init;return b(E,y,T,z(D._payload),U)}if(As(D)||hs(D))return E=E.get(T)||null,h(y,E,D,U,null);Cl(y,D)}return null}function S(E,y,T,D){for(var U=null,z=null,w=y,v=y=0,_=null;w!==null&&v<T.length;v++){w.index>v?(_=w,w=null):_=w.sibling;var x=m(E,w,T[v],D);if(x===null){w===null&&(w=_);break}t&&w&&x.alternate===null&&e(E,w),y=o(x,y,v),z===null?U=x:z.sibling=x,z=x,w=_}if(v===T.length)return r(E,w),Te&&oi(E,v),U;if(w===null){for(;v<T.length;v++)w=p(E,T[v],D),w!==null&&(y=o(w,y,v),z===null?U=w:z.sibling=w,z=w);return Te&&oi(E,v),U}for(w=n(E,w);v<T.length;v++)_=b(w,E,v,T[v],D),_!==null&&(t&&_.alternate!==null&&w.delete(_.key===null?v:_.key),y=o(_,y,v),z===null?U=_:z.sibling=_,z=_);return t&&w.forEach(function(A){return e(E,A)}),Te&&oi(E,v),U}function P(E,y,T,D){var U=hs(T);if(typeof U!="function")throw Error(F(150));if(T=U.call(T),T==null)throw Error(F(151));for(var z=U=null,w=y,v=y=0,_=null,x=T.next();w!==null&&!x.done;v++,x=T.next()){w.index>v?(_=w,w=null):_=w.sibling;var A=m(E,w,x.value,D);if(A===null){w===null&&(w=_);break}t&&w&&A.alternate===null&&e(E,w),y=o(A,y,v),z===null?U=A:z.sibling=A,z=A,w=_}if(x.done)return r(E,w),Te&&oi(E,v),U;if(w===null){for(;!x.done;v++,x=T.next())x=p(E,x.value,D),x!==null&&(y=o(x,y,v),z===null?U=x:z.sibling=x,z=x);return Te&&oi(E,v),U}for(w=n(E,w);!x.done;v++,x=T.next())x=b(w,E,v,x.value,D),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?v:x.key),y=o(x,y,v),z===null?U=x:z.sibling=x,z=x);return t&&w.forEach(function(k){return e(E,k)}),Te&&oi(E,v),U}function N(E,y,T,D){if(typeof T=="object"&&T!==null&&T.type===eo&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case yl:e:{for(var U=T.key,z=y;z!==null;){if(z.key===U){if(U=T.type,U===eo){if(z.tag===7){r(E,z.sibling),y=i(z,T.props.children),y.return=E,E=y;break e}}else if(z.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===mn&&ly(U)===z.type){r(E,z.sibling),y=i(z,T.props),y.ref=vs(E,z,T),y.return=E,E=y;break e}r(E,z);break}else e(E,z);z=z.sibling}T.type===eo?(y=vi(T.props.children,E.mode,D,T.key),y.return=E,E=y):(D=sc(T.type,T.key,T.props,null,E.mode,D),D.ref=vs(E,y,T),D.return=E,E=D)}return s(E);case Zi:e:{for(z=T.key;y!==null;){if(y.key===z)if(y.tag===4&&y.stateNode.containerInfo===T.containerInfo&&y.stateNode.implementation===T.implementation){r(E,y.sibling),y=i(y,T.children||[]),y.return=E,E=y;break e}else{r(E,y);break}else e(E,y);y=y.sibling}y=qd(T,E.mode,D),y.return=E,E=y}return s(E);case mn:return z=T._init,N(E,y,z(T._payload),D)}if(As(T))return S(E,y,T,D);if(hs(T))return P(E,y,T,D);Cl(E,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,y!==null&&y.tag===6?(r(E,y.sibling),y=i(y,T),y.return=E,E=y):(r(E,y),y=Bd(T,E.mode,D),y.return=E,E=y),s(E)):r(E,y)}return N}var Ao=Q0(!0),Y0=Q0(!1),Pc=qn(null),Nc=null,lo=null,Vp=null;function Mp(){Vp=lo=Nc=null}function $p(t){var e=Pc.current;xe(Pc),t._currentValue=e}function Xh(t,e,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===r)break;t=t.return}}function go(t,e){Nc=t,Vp=lo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pt=!0),t.firstContext=null)}function Zt(t){var e=t._currentValue;if(Vp!==t)if(t={context:t,memoizedValue:e,next:null},lo===null){if(Nc===null)throw Error(F(308));lo=t,Nc.dependencies={lanes:0,firstContext:t}}else lo=lo.next=t;return e}var ci=null;function Fp(t){ci===null?ci=[t]:ci.push(t)}function X0(t,e,r,n){var i=e.interleaved;return i===null?(r.next=r,Fp(e)):(r.next=i.next,i.next=r),e.interleaved=r,Jr(t,n)}function Jr(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var gn=!1;function Up(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function J0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Kr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pn(t,e,r){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,ce&2){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,Jr(t,r)}return i=n.interleaved,i===null?(e.next=e,Fp(n)):(e.next=i.next,i.next=e),n.interleaved=e,Jr(t,r)}function ec(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,Tp(t,r)}}function cy(t,e){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=s:o=o.next=s,r=r.next}while(r!==null);o===null?i=o=e:o=o.next=e}else i=o=e;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Oc(t,e,r,n){var i=t.updateQueue;gn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==s&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=c))}if(o!==null){var p=i.baseState;s=0,h=u=c=null,l=o;do{var m=l.lane,b=l.eventTime;if((n&m)===m){h!==null&&(h=h.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=t,P=l;switch(m=e,b=r,P.tag){case 1:if(S=P.payload,typeof S=="function"){p=S.call(b,p,m);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=P.payload,m=typeof S=="function"?S.call(b,p,m):S,m==null)break e;p=Ce({},p,m);break e;case 2:gn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else b={eventTime:b,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=b,c=p):h=h.next=b,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Ti|=s,t.lanes=s,t.memoizedState=p}}function uy(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(F(191,i));i.call(n)}}}var $a={},Tr=qn($a),ca=qn($a),ua=qn($a);function ui(t){if(t===$a)throw Error(F(174));return t}function zp(t,e){switch(ye(ua,e),ye(ca,t),ye(Tr,$a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ph(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ph(e,t)}xe(Tr),ye(Tr,e)}function So(){xe(Tr),xe(ca),xe(ua)}function Z0(t){ui(ua.current);var e=ui(Tr.current),r=Ph(e,t.type);e!==r&&(ye(ca,t),ye(Tr,r))}function jp(t){ca.current===t&&(xe(Tr),xe(ca))}var Se=qn(0);function Dc(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Md=[];function Bp(){for(var t=0;t<Md.length;t++)Md[t]._workInProgressVersionPrimary=null;Md.length=0}var tc=sn.ReactCurrentDispatcher,$d=sn.ReactCurrentBatchConfig,Ii=0,ke=null,Be=null,Ke=null,Lc=!1,Us=!1,da=0,OS=0;function ct(){throw Error(F(321))}function qp(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!vr(t[r],e[r]))return!1;return!0}function Hp(t,e,r,n,i,o){if(Ii=o,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tc.current=t===null||t.memoizedState===null?MS:$S,t=r(n,i),Us){o=0;do{if(Us=!1,da=0,25<=o)throw Error(F(301));o+=1,Ke=Be=null,e.updateQueue=null,tc.current=FS,t=r(n,i)}while(Us)}if(tc.current=Vc,e=Be!==null&&Be.next!==null,Ii=0,Ke=Be=ke=null,Lc=!1,e)throw Error(F(300));return t}function Wp(){var t=da!==0;return da=0,t}function Er(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?ke.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function er(){if(Be===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=Ke===null?ke.memoizedState:Ke.next;if(e!==null)Ke=e,Be=t;else{if(t===null)throw Error(F(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ke===null?ke.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function ha(t,e){return typeof e=="function"?e(t):e}function Fd(t){var e=er(),r=e.queue;if(r===null)throw Error(F(311));r.lastRenderedReducer=t;var n=Be,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var l=s=null,c=null,u=o;do{var h=u.lane;if((Ii&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:t(n,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,s=n):c=c.next=p,ke.lanes|=h,Ti|=h}u=u.next}while(u!==null&&u!==o);c===null?s=n:c.next=l,vr(n,e.memoizedState)||(Pt=!0),e.memoizedState=n,e.baseState=s,e.baseQueue=c,r.lastRenderedState=n}if(t=r.interleaved,t!==null){i=t;do o=i.lane,ke.lanes|=o,Ti|=o,i=i.next;while(i!==t)}else i===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Ud(t){var e=er(),r=e.queue;if(r===null)throw Error(F(311));r.lastRenderedReducer=t;var n=r.dispatch,i=r.pending,o=e.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);vr(o,e.memoizedState)||(Pt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),r.lastRenderedState=o}return[o,n]}function eb(){}function tb(t,e){var r=ke,n=er(),i=e(),o=!vr(n.memoizedState,i);if(o&&(n.memoizedState=i,Pt=!0),n=n.queue,Kp(ib.bind(null,r,n,t),[t]),n.getSnapshot!==e||o||Ke!==null&&Ke.memoizedState.tag&1){if(r.flags|=2048,fa(9,nb.bind(null,r,n,i,e),void 0,null),Ge===null)throw Error(F(349));Ii&30||rb(r,e,i)}return i}function rb(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function nb(t,e,r,n){e.value=r,e.getSnapshot=n,ob(e)&&sb(t)}function ib(t,e,r){return r(function(){ob(e)&&sb(t)})}function ob(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!vr(t,r)}catch{return!0}}function sb(t){var e=Jr(t,1);e!==null&&mr(e,t,1,-1)}function dy(t){var e=Er();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},e.queue=t,t=t.dispatch=VS.bind(null,ke,t),[e.memoizedState,t]}function fa(t,e,r,n){return t={tag:t,create:e,destroy:r,deps:n,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,e.lastEffect=t)),t}function ab(){return er().memoizedState}function rc(t,e,r,n){var i=Er();ke.flags|=t,i.memoizedState=fa(1|e,r,void 0,n===void 0?null:n)}function mu(t,e,r,n){var i=er();n=n===void 0?null:n;var o=void 0;if(Be!==null){var s=Be.memoizedState;if(o=s.destroy,n!==null&&qp(n,s.deps)){i.memoizedState=fa(e,r,o,n);return}}ke.flags|=t,i.memoizedState=fa(1|e,r,o,n)}function hy(t,e){return rc(8390656,8,t,e)}function Kp(t,e){return mu(2048,8,t,e)}function lb(t,e){return mu(4,2,t,e)}function cb(t,e){return mu(4,4,t,e)}function ub(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function db(t,e,r){return r=r!=null?r.concat([t]):null,mu(4,4,ub.bind(null,e,t),r)}function Gp(){}function hb(t,e){var r=er();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&qp(e,n[1])?n[0]:(r.memoizedState=[t,e],t)}function fb(t,e){var r=er();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&qp(e,n[1])?n[0]:(t=t(),r.memoizedState=[t,e],t)}function pb(t,e,r){return Ii&21?(vr(r,e)||(r=_0(),ke.lanes|=r,Ti|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pt=!0),t.memoizedState=r)}function DS(t,e){var r=me;me=r!==0&&4>r?r:4,t(!0);var n=$d.transition;$d.transition={};try{t(!1),e()}finally{me=r,$d.transition=n}}function mb(){return er().memoizedState}function LS(t,e,r){var n=On(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},gb(t))vb(e,r);else if(r=X0(t,e,r,n),r!==null){var i=Et();mr(r,t,n,i),yb(r,e,n)}}function VS(t,e,r){var n=On(t),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(gb(t))vb(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,r);if(i.hasEagerState=!0,i.eagerState=l,vr(l,s)){var c=e.interleaved;c===null?(i.next=i,Fp(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}r=X0(t,e,i,n),r!==null&&(i=Et(),mr(r,t,n,i),yb(r,e,n))}}function gb(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function vb(t,e){Us=Lc=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function yb(t,e,r){if(r&4194240){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,Tp(t,r)}}var Vc={readContext:Zt,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},MS={readContext:Zt,useCallback:function(t,e){return Er().memoizedState=[t,e===void 0?null:e],t},useContext:Zt,useEffect:hy,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,rc(4194308,4,ub.bind(null,e,t),r)},useLayoutEffect:function(t,e){return rc(4194308,4,t,e)},useInsertionEffect:function(t,e){return rc(4,2,t,e)},useMemo:function(t,e){var r=Er();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var n=Er();return e=r!==void 0?r(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=LS.bind(null,ke,t),[n.memoizedState,t]},useRef:function(t){var e=Er();return t={current:t},e.memoizedState=t},useState:dy,useDebugValue:Gp,useDeferredValue:function(t){return Er().memoizedState=t},useTransition:function(){var t=dy(!1),e=t[0];return t=DS.bind(null,t[1]),Er().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var n=ke,i=Er();if(Te){if(r===void 0)throw Error(F(407));r=r()}else{if(r=e(),Ge===null)throw Error(F(349));Ii&30||rb(n,e,r)}i.memoizedState=r;var o={value:r,getSnapshot:e};return i.queue=o,hy(ib.bind(null,n,o,t),[t]),n.flags|=2048,fa(9,nb.bind(null,n,o,r,e),void 0,null),r},useId:function(){var t=Er(),e=Ge.identifierPrefix;if(Te){var r=Br,n=jr;r=(n&~(1<<32-pr(n)-1)).toString(32)+r,e=":"+e+"R"+r,r=da++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=OS++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$S={readContext:Zt,useCallback:hb,useContext:Zt,useEffect:Kp,useImperativeHandle:db,useInsertionEffect:lb,useLayoutEffect:cb,useMemo:fb,useReducer:Fd,useRef:ab,useState:function(){return Fd(ha)},useDebugValue:Gp,useDeferredValue:function(t){var e=er();return pb(e,Be.memoizedState,t)},useTransition:function(){var t=Fd(ha)[0],e=er().memoizedState;return[t,e]},useMutableSource:eb,useSyncExternalStore:tb,useId:mb,unstable_isNewReconciler:!1},FS={readContext:Zt,useCallback:hb,useContext:Zt,useEffect:Kp,useImperativeHandle:db,useInsertionEffect:lb,useLayoutEffect:cb,useMemo:fb,useReducer:Ud,useRef:ab,useState:function(){return Ud(ha)},useDebugValue:Gp,useDeferredValue:function(t){var e=er();return Be===null?e.memoizedState=t:pb(e,Be.memoizedState,t)},useTransition:function(){var t=Ud(ha)[0],e=er().memoizedState;return[t,e]},useMutableSource:eb,useSyncExternalStore:tb,useId:mb,unstable_isNewReconciler:!1};function ur(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Jh(t,e,r,n){e=t.memoizedState,r=r(n,e),r=r==null?e:Ce({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var gu={isMounted:function(t){return(t=t._reactInternals)?Vi(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var n=Et(),i=On(t),o=Kr(n,i);o.payload=e,r!=null&&(o.callback=r),e=Pn(t,o,i),e!==null&&(mr(e,t,i,n),ec(e,t,i))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var n=Et(),i=On(t),o=Kr(n,i);o.tag=1,o.payload=e,r!=null&&(o.callback=r),e=Pn(t,o,i),e!==null&&(mr(e,t,i,n),ec(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=Et(),n=On(t),i=Kr(r,n);i.tag=2,e!=null&&(i.callback=e),e=Pn(t,i,n),e!==null&&(mr(e,t,n,r),ec(e,t,n))}};function fy(t,e,r,n,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,o,s):e.prototype&&e.prototype.isPureReactComponent?!oa(r,n)||!oa(i,o):!0}function _b(t,e,r){var n=!1,i=Fn,o=e.contextType;return typeof o=="object"&&o!==null?o=Zt(o):(i=Ot(e)?Ei:gt.current,n=e.contextTypes,o=(n=n!=null)?Io(t,i):Fn),e=new e(r,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gu,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function py(t,e,r,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,n),e.state!==t&&gu.enqueueReplaceState(e,e.state,null)}function Zh(t,e,r,n){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs={},Up(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Zt(o):(o=Ot(e)?Ei:gt.current,i.context=Io(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Jh(t,e,o,r),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&gu.enqueueReplaceState(i,i.state,null),Oc(t,r,i,n),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ko(t,e){try{var r="",n=e;do r+=fA(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function zd(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function ef(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var US=typeof WeakMap=="function"?WeakMap:Map;function wb(t,e,r){r=Kr(-1,r),r.tag=3,r.payload={element:null};var n=e.value;return r.callback=function(){$c||($c=!0,df=n),ef(t,e)},r}function bb(t,e,r){r=Kr(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=e.value;r.payload=function(){return n(i)},r.callback=function(){ef(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){ef(t,e),typeof n!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),r}function my(t,e,r){var n=t.pingCache;if(n===null){n=t.pingCache=new US;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(r)||(i.add(r),t=ek.bind(null,t,e,r),e.then(t,t))}function gy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vy(t,e,r,n,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Kr(-1,1),e.tag=2,Pn(r,e,1))),r.lanes|=1),t)}var zS=sn.ReactCurrentOwner,Pt=!1;function bt(t,e,r,n){e.child=t===null?Y0(e,null,r,n):Ao(e,t.child,r,n)}function yy(t,e,r,n,i){r=r.render;var o=e.ref;return go(e,i),n=Hp(t,e,r,n,o,i),r=Wp(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zr(t,e,i)):(Te&&r&&Op(e),e.flags|=1,bt(t,e,n,i),e.child)}function _y(t,e,r,n,i){if(t===null){var o=r.type;return typeof o=="function"&&!rm(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=o,Eb(t,e,o,n,i)):(t=sc(r.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(r=r.compare,r=r!==null?r:oa,r(s,n)&&t.ref===e.ref)return Zr(t,e,i)}return e.flags|=1,t=Dn(o,n),t.ref=e.ref,t.return=e,e.child=t}function Eb(t,e,r,n,i){if(t!==null){var o=t.memoizedProps;if(oa(o,n)&&t.ref===e.ref)if(Pt=!1,e.pendingProps=n=o,(t.lanes&i)!==0)t.flags&131072&&(Pt=!0);else return e.lanes=t.lanes,Zr(t,e,i)}return tf(t,e,r,n,i)}function xb(t,e,r){var n=e.pendingProps,i=n.children,o=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(uo,Vt),Vt|=r;else{if(!(r&1073741824))return t=o!==null?o.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(uo,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,ye(uo,Vt),Vt|=n}else o!==null?(n=o.baseLanes|r,e.memoizedState=null):n=r,ye(uo,Vt),Vt|=n;return bt(t,e,i,r),e.child}function Ib(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function tf(t,e,r,n,i){var o=Ot(r)?Ei:gt.current;return o=Io(e,o),go(e,i),r=Hp(t,e,r,n,o,i),n=Wp(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zr(t,e,i)):(Te&&n&&Op(e),e.flags|=1,bt(t,e,r,i),e.child)}function wy(t,e,r,n,i){if(Ot(r)){var o=!0;kc(e)}else o=!1;if(go(e,i),e.stateNode===null)nc(t,e),_b(e,r,n),Zh(e,r,n,i),n=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var c=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=Zt(u):(u=Ot(r)?Ei:gt.current,u=Io(e,u));var h=r.getDerivedStateFromProps,p=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==n||c!==u)&&py(e,s,n,u),gn=!1;var m=e.memoizedState;s.state=m,Oc(e,n,s,i),c=e.memoizedState,l!==n||m!==c||Nt.current||gn?(typeof h=="function"&&(Jh(e,r,h,n),c=e.memoizedState),(l=gn||fy(e,r,l,n,m,c,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=c),s.props=n,s.state=c,s.context=u,n=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{s=e.stateNode,J0(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:ur(e.type,l),s.props=u,p=e.pendingProps,m=s.context,c=r.contextType,typeof c=="object"&&c!==null?c=Zt(c):(c=Ot(r)?Ei:gt.current,c=Io(e,c));var b=r.getDerivedStateFromProps;(h=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||m!==c)&&py(e,s,n,c),gn=!1,m=e.memoizedState,s.state=m,Oc(e,n,s,i);var S=e.memoizedState;l!==p||m!==S||Nt.current||gn?(typeof b=="function"&&(Jh(e,r,b,n),S=e.memoizedState),(u=gn||fy(e,r,u,n,m,S,c)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,S,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,S,c)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=S),s.props=n,s.state=S,s.context=c,n=u):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),n=!1)}return rf(t,e,r,n,o,i)}function rf(t,e,r,n,i,o){Ib(t,e);var s=(e.flags&128)!==0;if(!n&&!s)return i&&oy(e,r,!1),Zr(t,e,o);n=e.stateNode,zS.current=e;var l=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&s?(e.child=Ao(e,t.child,null,o),e.child=Ao(e,null,l,o)):bt(t,e,l,o),e.memoizedState=n.state,i&&oy(e,r,!0),e.child}function Tb(t){var e=t.stateNode;e.pendingContext?iy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&iy(t,e.context,!1),zp(t,e.containerInfo)}function by(t,e,r,n,i){return To(),Lp(i),e.flags|=256,bt(t,e,r,n),e.child}var nf={dehydrated:null,treeContext:null,retryLane:0};function of(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ab(t,e,r){var n=e.pendingProps,i=Se.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Se,i&1),t===null)return Yh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=n.children,t=n.fallback,o?(n=e.mode,o=e.child,s={mode:"hidden",children:s},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=_u(s,n,0,null),t=vi(t,n,r,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=of(r),e.memoizedState=nf,t):Qp(e,s));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return jS(t,e,s,n,l,i,r);if(o){o=n.fallback,s=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:n.children};return!(s&1)&&e.child!==i?(n=e.child,n.childLanes=0,n.pendingProps=c,e.deletions=null):(n=Dn(i,c),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Dn(l,o):(o=vi(o,s,r,null),o.flags|=2),o.return=e,n.return=e,n.sibling=o,e.child=n,n=o,o=e.child,s=t.child.memoizedState,s=s===null?of(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~r,e.memoizedState=nf,n}return o=t.child,t=o.sibling,n=Dn(o,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n}function Qp(t,e){return e=_u({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Rl(t,e,r,n){return n!==null&&Lp(n),Ao(e,t.child,null,r),t=Qp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jS(t,e,r,n,i,o,s){if(r)return e.flags&256?(e.flags&=-257,n=zd(Error(F(422))),Rl(t,e,s,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=n.fallback,i=e.mode,n=_u({mode:"visible",children:n.children},i,0,null),o=vi(o,i,s,null),o.flags|=2,n.return=e,o.return=e,n.sibling=o,e.child=n,e.mode&1&&Ao(e,t.child,null,s),e.child.memoizedState=of(s),e.memoizedState=nf,o);if(!(e.mode&1))return Rl(t,e,s,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(F(419)),n=zd(o,n,void 0),Rl(t,e,s,n)}if(l=(s&t.childLanes)!==0,Pt||l){if(n=Ge,n!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Jr(t,i),mr(n,t,i,-1))}return tm(),n=zd(Error(F(421))),Rl(t,e,s,n)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=tk.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Mt=Rn(i.nextSibling),Ft=e,Te=!0,hr=null,t!==null&&(Wt[Kt++]=jr,Wt[Kt++]=Br,Wt[Kt++]=xi,jr=t.id,Br=t.overflow,xi=e),e=Qp(e,n.children),e.flags|=4096,e)}function Ey(t,e,r){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Xh(t.return,e,r)}function jd(t,e,r,n,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function Sb(t,e,r){var n=e.pendingProps,i=n.revealOrder,o=n.tail;if(bt(t,e,n.children,r),n=Se.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ey(t,r,e);else if(t.tag===19)Ey(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(ye(Se,n),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(r=e.child,i=null;r!==null;)t=r.alternate,t!==null&&Dc(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=e.child,e.child=null):(i=r.sibling,r.sibling=null),jd(e,!1,i,r,o);break;case"backwards":for(r=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Dc(t)===null){e.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}jd(e,!0,r,null,o);break;case"together":jd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zr(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),Ti|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,r=Dn(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=Dn(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function BS(t,e,r){switch(e.tag){case 3:Tb(e),To();break;case 5:Z0(e);break;case 1:Ot(e.type)&&kc(e);break;case 4:zp(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,i=e.memoizedProps.value;ye(Pc,n._currentValue),n._currentValue=i;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(ye(Se,Se.current&1),e.flags|=128,null):r&e.child.childLanes?Ab(t,e,r):(ye(Se,Se.current&1),t=Zr(t,e,r),t!==null?t.sibling:null);ye(Se,Se.current&1);break;case 19:if(n=(r&e.childLanes)!==0,t.flags&128){if(n)return Sb(t,e,r);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Se,Se.current),n)break;return null;case 22:case 23:return e.lanes=0,xb(t,e,r)}return Zr(t,e,r)}var kb,sf,Cb,Rb;kb=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};sf=function(){};Cb=function(t,e,r,n){var i=t.memoizedProps;if(i!==n){t=e.stateNode,ui(Tr.current);var o=null;switch(r){case"input":i=Sh(t,i),n=Sh(t,n),o=[];break;case"select":i=Ce({},i,{value:void 0}),n=Ce({},n,{value:void 0}),o=[];break;case"textarea":i=Rh(t,i),n=Rh(t,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=Ac)}Nh(r,n);var s;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Js.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var c=n[u];if(l=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(r||(r={}),r[s]=c[s])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Js.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&be("scroll",t),o||l===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Rb=function(t,e,r,n){r!==n&&(e.flags|=4)};function ys(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,n=0;if(e)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=r,e}function qS(t,e,r){var n=e.pendingProps;switch(Dp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(e),null;case 1:return Ot(e.type)&&Sc(),ut(e),null;case 3:return n=e.stateNode,So(),xe(Nt),xe(gt),Bp(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(kl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hr!==null&&(pf(hr),hr=null))),sf(t,e),ut(e),null;case 5:jp(e);var i=ui(ua.current);if(r=e.type,t!==null&&e.stateNode!=null)Cb(t,e,r,n,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(F(166));return ut(e),null}if(t=ui(Tr.current),kl(e)){n=e.stateNode,r=e.type;var o=e.memoizedProps;switch(n[xr]=e,n[la]=o,t=(e.mode&1)!==0,r){case"dialog":be("cancel",n),be("close",n);break;case"iframe":case"object":case"embed":be("load",n);break;case"video":case"audio":for(i=0;i<ks.length;i++)be(ks[i],n);break;case"source":be("error",n);break;case"img":case"image":case"link":be("error",n),be("load",n);break;case"details":be("toggle",n);break;case"input":Pv(n,o),be("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},be("invalid",n);break;case"textarea":Ov(n,o),be("invalid",n)}Nh(r,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&Sl(n.textContent,l,t),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Sl(n.textContent,l,t),i=["children",""+l]):Js.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&be("scroll",n)}switch(r){case"input":_l(n),Nv(n,o,!0);break;case"textarea":_l(n),Dv(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=Ac)}n=i,e.updateQueue=n,n!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=i0(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=s.createElement(r,{is:n.is}):(t=s.createElement(r),r==="select"&&(s=t,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):t=s.createElementNS(t,r),t[xr]=e,t[la]=n,kb(t,e,!1,!1),e.stateNode=t;e:{switch(s=Oh(r,n),r){case"dialog":be("cancel",t),be("close",t),i=n;break;case"iframe":case"object":case"embed":be("load",t),i=n;break;case"video":case"audio":for(i=0;i<ks.length;i++)be(ks[i],t);i=n;break;case"source":be("error",t),i=n;break;case"img":case"image":case"link":be("error",t),be("load",t),i=n;break;case"details":be("toggle",t),i=n;break;case"input":Pv(t,n),i=Sh(t,n),be("invalid",t);break;case"option":i=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},i=Ce({},n,{value:void 0}),be("invalid",t);break;case"textarea":Ov(t,n),i=Rh(t,n),be("invalid",t);break;default:i=n}Nh(r,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?a0(t,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&o0(t,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Zs(t,c):typeof c=="number"&&Zs(t,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Js.hasOwnProperty(o)?c!=null&&o==="onScroll"&&be("scroll",t):c!=null&&_p(t,o,c,s))}switch(r){case"input":_l(t),Nv(t,n,!1);break;case"textarea":_l(t),Dv(t);break;case"option":n.value!=null&&t.setAttribute("value",""+$n(n.value));break;case"select":t.multiple=!!n.multiple,o=n.value,o!=null?ho(t,!!n.multiple,o,!1):n.defaultValue!=null&&ho(t,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ac)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ut(e),null;case 6:if(t&&e.stateNode!=null)Rb(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(F(166));if(r=ui(ua.current),ui(Tr.current),kl(e)){if(n=e.stateNode,r=e.memoizedProps,n[xr]=e,(o=n.nodeValue!==r)&&(t=Ft,t!==null))switch(t.tag){case 3:Sl(n.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sl(n.nodeValue,r,(t.mode&1)!==0)}o&&(e.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[xr]=e,e.stateNode=n}return ut(e),null;case 13:if(xe(Se),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&Mt!==null&&e.mode&1&&!(e.flags&128))G0(),To(),e.flags|=98560,o=!1;else if(o=kl(e),n!==null&&n.dehydrated!==null){if(t===null){if(!o)throw Error(F(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(F(317));o[xr]=e}else To(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ut(e),o=!1}else hr!==null&&(pf(hr),hr=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||Se.current&1?qe===0&&(qe=3):tm())),e.updateQueue!==null&&(e.flags|=4),ut(e),null);case 4:return So(),sf(t,e),t===null&&sa(e.stateNode.containerInfo),ut(e),null;case 10:return $p(e.type._context),ut(e),null;case 17:return Ot(e.type)&&Sc(),ut(e),null;case 19:if(xe(Se),o=e.memoizedState,o===null)return ut(e),null;if(n=(e.flags&128)!==0,s=o.rendering,s===null)if(n)ys(o,!1);else{if(qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Dc(t),s!==null){for(e.flags|=128,ys(o,!1),n=s.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=r,r=e.child;r!==null;)o=r,t=n,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return ye(Se,Se.current&1|2),e.child}t=t.sibling}o.tail!==null&&$e()>Co&&(e.flags|=128,n=!0,ys(o,!1),e.lanes=4194304)}else{if(!n)if(t=Dc(s),t!==null){if(e.flags|=128,n=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),ys(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Te)return ut(e),null}else 2*$e()-o.renderingStartTime>Co&&r!==1073741824&&(e.flags|=128,n=!0,ys(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(r=o.last,r!==null?r.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=$e(),e.sibling=null,r=Se.current,ye(Se,n?r&1|2:r&1),e):(ut(e),null);case 22:case 23:return em(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?Vt&1073741824&&(ut(e),e.subtreeFlags&6&&(e.flags|=8192)):ut(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function HS(t,e){switch(Dp(e),e.tag){case 1:return Ot(e.type)&&Sc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return So(),xe(Nt),xe(gt),Bp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return jp(e),null;case 13:if(xe(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));To()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(Se),null;case 4:return So(),null;case 10:return $p(e.type._context),null;case 22:case 23:return em(),null;case 24:return null;default:return null}}var Pl=!1,ft=!1,WS=typeof WeakSet=="function"?WeakSet:Set,K=null;function co(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Ne(t,e,n)}else r.current=null}function af(t,e,r){try{r()}catch(n){Ne(t,e,n)}}var xy=!1;function KS(t,e){if(Bh=xc,t=L0(),Np(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var s=0,l=-1,c=-1,u=0,h=0,p=t,m=null;t:for(;;){for(var b;p!==r||i!==0&&p.nodeType!==3||(l=s+i),p!==o||n!==0&&p.nodeType!==3||(c=s+n),p.nodeType===3&&(s+=p.nodeValue.length),(b=p.firstChild)!==null;)m=p,p=b;for(;;){if(p===t)break t;if(m===r&&++u===i&&(l=s),m===o&&++h===n&&(c=s),(b=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=b}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(qh={focusedElem:t,selectionRange:r},xc=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var P=S.memoizedProps,N=S.memoizedState,E=e.stateNode,y=E.getSnapshotBeforeUpdate(e.elementType===e.type?P:ur(e.type,P),N);E.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(D){Ne(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return S=xy,xy=!1,S}function zs(t,e,r){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&af(e,r,o)}i=i.next}while(i!==n)}}function vu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==e)}}function lf(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Pb(t){var e=t.alternate;e!==null&&(t.alternate=null,Pb(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xr],delete e[la],delete e[Kh],delete e[CS],delete e[RS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Nb(t){return t.tag===5||t.tag===3||t.tag===4}function Iy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Nb(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cf(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=Ac));else if(n!==4&&(t=t.child,t!==null))for(cf(t,e,r),t=t.sibling;t!==null;)cf(t,e,r),t=t.sibling}function uf(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(uf(t,e,r),t=t.sibling;t!==null;)uf(t,e,r),t=t.sibling}var Xe=null,dr=!1;function fn(t,e,r){for(r=r.child;r!==null;)Ob(t,e,r),r=r.sibling}function Ob(t,e,r){if(Ir&&typeof Ir.onCommitFiberUnmount=="function")try{Ir.onCommitFiberUnmount(cu,r)}catch{}switch(r.tag){case 5:ft||co(r,e);case 6:var n=Xe,i=dr;Xe=null,fn(t,e,r),Xe=n,dr=i,Xe!==null&&(dr?(t=Xe,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Xe.removeChild(r.stateNode));break;case 18:Xe!==null&&(dr?(t=Xe,r=r.stateNode,t.nodeType===8?Ld(t.parentNode,r):t.nodeType===1&&Ld(t,r),na(t)):Ld(Xe,r.stateNode));break;case 4:n=Xe,i=dr,Xe=r.stateNode.containerInfo,dr=!0,fn(t,e,r),Xe=n,dr=i;break;case 0:case 11:case 14:case 15:if(!ft&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&af(r,e,s),i=i.next}while(i!==n)}fn(t,e,r);break;case 1:if(!ft&&(co(r,e),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){Ne(r,e,l)}fn(t,e,r);break;case 21:fn(t,e,r);break;case 22:r.mode&1?(ft=(n=ft)||r.memoizedState!==null,fn(t,e,r),ft=n):fn(t,e,r);break;default:fn(t,e,r)}}function Ty(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new WS),e.forEach(function(n){var i=rk.bind(null,t,n);r.has(n)||(r.add(n),n.then(i,i))})}}function lr(t,e){var r=e.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:Xe=l.stateNode,dr=!1;break e;case 3:Xe=l.stateNode.containerInfo,dr=!0;break e;case 4:Xe=l.stateNode.containerInfo,dr=!0;break e}l=l.return}if(Xe===null)throw Error(F(160));Ob(o,s,i),Xe=null,dr=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Db(e,t),e=e.sibling}function Db(t,e){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(lr(e,t),br(t),n&4){try{zs(3,t,t.return),vu(3,t)}catch(P){Ne(t,t.return,P)}try{zs(5,t,t.return)}catch(P){Ne(t,t.return,P)}}break;case 1:lr(e,t),br(t),n&512&&r!==null&&co(r,r.return);break;case 5:if(lr(e,t),br(t),n&512&&r!==null&&co(r,r.return),t.flags&32){var i=t.stateNode;try{Zs(i,"")}catch(P){Ne(t,t.return,P)}}if(n&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=r!==null?r.memoizedProps:o,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&r0(i,o),Oh(l,s);var u=Oh(l,o);for(s=0;s<c.length;s+=2){var h=c[s],p=c[s+1];h==="style"?a0(i,p):h==="dangerouslySetInnerHTML"?o0(i,p):h==="children"?Zs(i,p):_p(i,h,p,u)}switch(l){case"input":kh(i,o);break;case"textarea":n0(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var b=o.value;b!=null?ho(i,!!o.multiple,b,!1):m!==!!o.multiple&&(o.defaultValue!=null?ho(i,!!o.multiple,o.defaultValue,!0):ho(i,!!o.multiple,o.multiple?[]:"",!1))}i[la]=o}catch(P){Ne(t,t.return,P)}}break;case 6:if(lr(e,t),br(t),n&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(P){Ne(t,t.return,P)}}break;case 3:if(lr(e,t),br(t),n&4&&r!==null&&r.memoizedState.isDehydrated)try{na(e.containerInfo)}catch(P){Ne(t,t.return,P)}break;case 4:lr(e,t),br(t);break;case 13:lr(e,t),br(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Jp=$e())),n&4&&Ty(t);break;case 22:if(h=r!==null&&r.memoizedState!==null,t.mode&1?(ft=(u=ft)||h,lr(e,t),ft=u):lr(e,t),br(t),n&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(K=t,h=t.child;h!==null;){for(p=K=h;K!==null;){switch(m=K,b=m.child,m.tag){case 0:case 11:case 14:case 15:zs(4,m,m.return);break;case 1:co(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){n=m,r=m.return;try{e=n,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(P){Ne(n,r,P)}}break;case 5:co(m,m.return);break;case 22:if(m.memoizedState!==null){Sy(p);continue}}b!==null?(b.return=m,K=b):Sy(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=s0("display",s))}catch(P){Ne(t,t.return,P)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(P){Ne(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:lr(e,t),br(t),n&4&&Ty(t);break;case 21:break;default:lr(e,t),br(t)}}function br(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(Nb(r)){var n=r;break e}r=r.return}throw Error(F(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Zs(i,""),n.flags&=-33);var o=Iy(t);uf(t,o,i);break;case 3:case 4:var s=n.stateNode.containerInfo,l=Iy(t);cf(t,l,s);break;default:throw Error(F(161))}}catch(c){Ne(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function GS(t,e,r){K=t,Lb(t)}function Lb(t,e,r){for(var n=(t.mode&1)!==0;K!==null;){var i=K,o=i.child;if(i.tag===22&&n){var s=i.memoizedState!==null||Pl;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||ft;l=Pl;var u=ft;if(Pl=s,(ft=c)&&!u)for(K=i;K!==null;)s=K,c=s.child,s.tag===22&&s.memoizedState!==null?ky(i):c!==null?(c.return=s,K=c):ky(i);for(;o!==null;)K=o,Lb(o),o=o.sibling;K=i,Pl=l,ft=u}Ay(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,K=o):Ay(t)}}function Ay(t){for(;K!==null;){var e=K;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ft||vu(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!ft)if(r===null)n.componentDidMount();else{var i=e.elementType===e.type?r.memoizedProps:ur(e.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&uy(e,o,n);break;case 3:var s=e.updateQueue;if(s!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}uy(e,s,r)}break;case 5:var l=e.stateNode;if(r===null&&e.flags&4){r=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&na(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ft||e.flags&512&&lf(e)}catch(m){Ne(e,e.return,m)}}if(e===t){K=null;break}if(r=e.sibling,r!==null){r.return=e.return,K=r;break}K=e.return}}function Sy(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var r=e.sibling;if(r!==null){r.return=e.return,K=r;break}K=e.return}}function ky(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{vu(4,e)}catch(c){Ne(e,r,c)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var i=e.return;try{n.componentDidMount()}catch(c){Ne(e,i,c)}}var o=e.return;try{lf(e)}catch(c){Ne(e,o,c)}break;case 5:var s=e.return;try{lf(e)}catch(c){Ne(e,s,c)}}}catch(c){Ne(e,e.return,c)}if(e===t){K=null;break}var l=e.sibling;if(l!==null){l.return=e.return,K=l;break}K=e.return}}var QS=Math.ceil,Mc=sn.ReactCurrentDispatcher,Yp=sn.ReactCurrentOwner,Yt=sn.ReactCurrentBatchConfig,ce=0,Ge=null,ze=null,tt=0,Vt=0,uo=qn(0),qe=0,pa=null,Ti=0,yu=0,Xp=0,js=null,Ct=null,Jp=0,Co=1/0,$r=null,$c=!1,df=null,Nn=null,Nl=!1,Tn=null,Fc=0,Bs=0,hf=null,ic=-1,oc=0;function Et(){return ce&6?$e():ic!==-1?ic:ic=$e()}function On(t){return t.mode&1?ce&2&&tt!==0?tt&-tt:NS.transition!==null?(oc===0&&(oc=_0()),oc):(t=me,t!==0||(t=window.event,t=t===void 0?16:A0(t.type)),t):1}function mr(t,e,r,n){if(50<Bs)throw Bs=0,hf=null,Error(F(185));La(t,r,n),(!(ce&2)||t!==Ge)&&(t===Ge&&(!(ce&2)&&(yu|=r),qe===4&&_n(t,tt)),Dt(t,n),r===1&&ce===0&&!(e.mode&1)&&(Co=$e()+500,pu&&Hn()))}function Dt(t,e){var r=t.callbackNode;NA(t,e);var n=Ec(t,t===Ge?tt:0);if(n===0)r!==null&&Mv(r),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(r!=null&&Mv(r),e===1)t.tag===0?PS(Cy.bind(null,t)):H0(Cy.bind(null,t)),SS(function(){!(ce&6)&&Hn()}),r=null;else{switch(w0(n)){case 1:r=Ip;break;case 4:r=v0;break;case 16:r=bc;break;case 536870912:r=y0;break;default:r=bc}r=Bb(r,Vb.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Vb(t,e){if(ic=-1,oc=0,ce&6)throw Error(F(327));var r=t.callbackNode;if(vo()&&t.callbackNode!==r)return null;var n=Ec(t,t===Ge?tt:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=Uc(t,n);else{e=n;var i=ce;ce|=2;var o=$b();(Ge!==t||tt!==e)&&($r=null,Co=$e()+500,gi(t,e));do try{JS();break}catch(l){Mb(t,l)}while(!0);Mp(),Mc.current=o,ce=i,ze!==null?e=0:(Ge=null,tt=0,e=qe)}if(e!==0){if(e===2&&(i=$h(t),i!==0&&(n=i,e=ff(t,i))),e===1)throw r=pa,gi(t,0),_n(t,n),Dt(t,$e()),r;if(e===6)_n(t,n);else{if(i=t.current.alternate,!(n&30)&&!YS(i)&&(e=Uc(t,n),e===2&&(o=$h(t),o!==0&&(n=o,e=ff(t,o))),e===1))throw r=pa,gi(t,0),_n(t,n),Dt(t,$e()),r;switch(t.finishedWork=i,t.finishedLanes=n,e){case 0:case 1:throw Error(F(345));case 2:si(t,Ct,$r);break;case 3:if(_n(t,n),(n&130023424)===n&&(e=Jp+500-$e(),10<e)){if(Ec(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Wh(si.bind(null,t,Ct,$r),e);break}si(t,Ct,$r);break;case 4:if(_n(t,n),(n&4194240)===n)break;for(e=t.eventTimes,i=-1;0<n;){var s=31-pr(n);o=1<<s,s=e[s],s>i&&(i=s),n&=~o}if(n=i,n=$e()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*QS(n/1960))-n,10<n){t.timeoutHandle=Wh(si.bind(null,t,Ct,$r),n);break}si(t,Ct,$r);break;case 5:si(t,Ct,$r);break;default:throw Error(F(329))}}}return Dt(t,$e()),t.callbackNode===r?Vb.bind(null,t):null}function ff(t,e){var r=js;return t.current.memoizedState.isDehydrated&&(gi(t,e).flags|=256),t=Uc(t,e),t!==2&&(e=Ct,Ct=r,e!==null&&pf(e)),t}function pf(t){Ct===null?Ct=t:Ct.push.apply(Ct,t)}function YS(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!vr(o(),i))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _n(t,e){for(e&=~Xp,e&=~yu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-pr(e),n=1<<r;t[r]=-1,e&=~n}}function Cy(t){if(ce&6)throw Error(F(327));vo();var e=Ec(t,0);if(!(e&1))return Dt(t,$e()),null;var r=Uc(t,e);if(t.tag!==0&&r===2){var n=$h(t);n!==0&&(e=n,r=ff(t,n))}if(r===1)throw r=pa,gi(t,0),_n(t,e),Dt(t,$e()),r;if(r===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,si(t,Ct,$r),Dt(t,$e()),null}function Zp(t,e){var r=ce;ce|=1;try{return t(e)}finally{ce=r,ce===0&&(Co=$e()+500,pu&&Hn())}}function Ai(t){Tn!==null&&Tn.tag===0&&!(ce&6)&&vo();var e=ce;ce|=1;var r=Yt.transition,n=me;try{if(Yt.transition=null,me=1,t)return t()}finally{me=n,Yt.transition=r,ce=e,!(ce&6)&&Hn()}}function em(){Vt=uo.current,xe(uo)}function gi(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,AS(r)),ze!==null)for(r=ze.return;r!==null;){var n=r;switch(Dp(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Sc();break;case 3:So(),xe(Nt),xe(gt),Bp();break;case 5:jp(n);break;case 4:So();break;case 13:xe(Se);break;case 19:xe(Se);break;case 10:$p(n.type._context);break;case 22:case 23:em()}r=r.return}if(Ge=t,ze=t=Dn(t.current,null),tt=Vt=e,qe=0,pa=null,Xp=yu=Ti=0,Ct=js=null,ci!==null){for(e=0;e<ci.length;e++)if(r=ci[e],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var s=o.next;o.next=i,n.next=s}r.pending=n}ci=null}return t}function Mb(t,e){do{var r=ze;try{if(Mp(),tc.current=Vc,Lc){for(var n=ke.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Lc=!1}if(Ii=0,Ke=Be=ke=null,Us=!1,da=0,Yp.current=null,r===null||r.return===null){qe=1,pa=e,ze=null;break}e:{var o=t,s=r.return,l=r,c=e;if(e=tt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=l,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var b=gy(s);if(b!==null){b.flags&=-257,vy(b,s,l,o,e),b.mode&1&&my(o,u,e),e=b,c=u;var S=e.updateQueue;if(S===null){var P=new Set;P.add(c),e.updateQueue=P}else S.add(c);break e}else{if(!(e&1)){my(o,u,e),tm();break e}c=Error(F(426))}}else if(Te&&l.mode&1){var N=gy(s);if(N!==null){!(N.flags&65536)&&(N.flags|=256),vy(N,s,l,o,e),Lp(ko(c,l));break e}}o=c=ko(c,l),qe!==4&&(qe=2),js===null?js=[o]:js.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var E=wb(o,c,e);cy(o,E);break e;case 1:l=c;var y=o.type,T=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Nn===null||!Nn.has(T)))){o.flags|=65536,e&=-e,o.lanes|=e;var D=bb(o,l,e);cy(o,D);break e}}o=o.return}while(o!==null)}Ub(r)}catch(U){e=U,ze===r&&r!==null&&(ze=r=r.return);continue}break}while(!0)}function $b(){var t=Mc.current;return Mc.current=Vc,t===null?Vc:t}function tm(){(qe===0||qe===3||qe===2)&&(qe=4),Ge===null||!(Ti&268435455)&&!(yu&268435455)||_n(Ge,tt)}function Uc(t,e){var r=ce;ce|=2;var n=$b();(Ge!==t||tt!==e)&&($r=null,gi(t,e));do try{XS();break}catch(i){Mb(t,i)}while(!0);if(Mp(),ce=r,Mc.current=n,ze!==null)throw Error(F(261));return Ge=null,tt=0,qe}function XS(){for(;ze!==null;)Fb(ze)}function JS(){for(;ze!==null&&!xA();)Fb(ze)}function Fb(t){var e=jb(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?Ub(t):ze=e,Yp.current=null}function Ub(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=HS(r,e),r!==null){r.flags&=32767,ze=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qe=6,ze=null;return}}else if(r=qS(r,e,Vt),r!==null){ze=r;return}if(e=e.sibling,e!==null){ze=e;return}ze=e=t}while(e!==null);qe===0&&(qe=5)}function si(t,e,r){var n=me,i=Yt.transition;try{Yt.transition=null,me=1,ZS(t,e,r,n)}finally{Yt.transition=i,me=n}return null}function ZS(t,e,r,n){do vo();while(Tn!==null);if(ce&6)throw Error(F(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var o=r.lanes|r.childLanes;if(OA(t,o),t===Ge&&(ze=Ge=null,tt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Nl||(Nl=!0,Bb(bc,function(){return vo(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Yt.transition,Yt.transition=null;var s=me;me=1;var l=ce;ce|=4,Yp.current=null,KS(t,r),Db(r,t),_S(qh),xc=!!Bh,qh=Bh=null,t.current=r,GS(r),IA(),ce=l,me=s,Yt.transition=o}else t.current=r;if(Nl&&(Nl=!1,Tn=t,Fc=i),o=t.pendingLanes,o===0&&(Nn=null),SA(r.stateNode),Dt(t,$e()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)i=e[r],n(i.value,{componentStack:i.stack,digest:i.digest});if($c)throw $c=!1,t=df,df=null,t;return Fc&1&&t.tag!==0&&vo(),o=t.pendingLanes,o&1?t===hf?Bs++:(Bs=0,hf=t):Bs=0,Hn(),null}function vo(){if(Tn!==null){var t=w0(Fc),e=Yt.transition,r=me;try{if(Yt.transition=null,me=16>t?16:t,Tn===null)var n=!1;else{if(t=Tn,Tn=null,Fc=0,ce&6)throw Error(F(331));var i=ce;for(ce|=4,K=t.current;K!==null;){var o=K,s=o.child;if(K.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(K=u;K!==null;){var h=K;switch(h.tag){case 0:case 11:case 15:zs(8,h,o)}var p=h.child;if(p!==null)p.return=h,K=p;else for(;K!==null;){h=K;var m=h.sibling,b=h.return;if(Pb(h),h===u){K=null;break}if(m!==null){m.return=b,K=m;break}K=b}}}var S=o.alternate;if(S!==null){var P=S.child;if(P!==null){S.child=null;do{var N=P.sibling;P.sibling=null,P=N}while(P!==null)}}K=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,K=s;else e:for(;K!==null;){if(o=K,o.flags&2048)switch(o.tag){case 0:case 11:case 15:zs(9,o,o.return)}var E=o.sibling;if(E!==null){E.return=o.return,K=E;break e}K=o.return}}var y=t.current;for(K=y;K!==null;){s=K;var T=s.child;if(s.subtreeFlags&2064&&T!==null)T.return=s,K=T;else e:for(s=y;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:vu(9,l)}}catch(U){Ne(l,l.return,U)}if(l===s){K=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,K=D;break e}K=l.return}}if(ce=i,Hn(),Ir&&typeof Ir.onPostCommitFiberRoot=="function")try{Ir.onPostCommitFiberRoot(cu,t)}catch{}n=!0}return n}finally{me=r,Yt.transition=e}}return!1}function Ry(t,e,r){e=ko(r,e),e=wb(t,e,1),t=Pn(t,e,1),e=Et(),t!==null&&(La(t,1,e),Dt(t,e))}function Ne(t,e,r){if(t.tag===3)Ry(t,t,r);else for(;e!==null;){if(e.tag===3){Ry(e,t,r);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Nn===null||!Nn.has(n))){t=ko(r,t),t=bb(e,t,1),e=Pn(e,t,1),t=Et(),e!==null&&(La(e,1,t),Dt(e,t));break}}e=e.return}}function ek(t,e,r){var n=t.pingCache;n!==null&&n.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&r,Ge===t&&(tt&r)===r&&(qe===4||qe===3&&(tt&130023424)===tt&&500>$e()-Jp?gi(t,0):Xp|=r),Dt(t,e)}function zb(t,e){e===0&&(t.mode&1?(e=El,El<<=1,!(El&130023424)&&(El=4194304)):e=1);var r=Et();t=Jr(t,e),t!==null&&(La(t,e,r),Dt(t,r))}function tk(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),zb(t,r)}function rk(t,e){var r=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(F(314))}n!==null&&n.delete(e),zb(t,r)}var jb;jb=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)Pt=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return Pt=!1,BS(t,e,r);Pt=!!(t.flags&131072)}else Pt=!1,Te&&e.flags&1048576&&W0(e,Rc,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;nc(t,e),t=e.pendingProps;var i=Io(e,gt.current);go(e,r),i=Hp(null,e,n,t,i,r);var o=Wp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ot(n)?(o=!0,kc(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Up(e),i.updater=gu,e.stateNode=i,i._reactInternals=e,Zh(e,n,t,r),e=rf(null,e,n,!0,o,r)):(e.tag=0,Te&&o&&Op(e),bt(null,e,i,r),e=e.child),e;case 16:n=e.elementType;e:{switch(nc(t,e),t=e.pendingProps,i=n._init,n=i(n._payload),e.type=n,i=e.tag=ik(n),t=ur(n,t),i){case 0:e=tf(null,e,n,t,r);break e;case 1:e=wy(null,e,n,t,r);break e;case 11:e=yy(null,e,n,t,r);break e;case 14:e=_y(null,e,n,ur(n.type,t),r);break e}throw Error(F(306,n,""))}return e;case 0:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:ur(n,i),tf(t,e,n,i,r);case 1:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:ur(n,i),wy(t,e,n,i,r);case 3:e:{if(Tb(e),t===null)throw Error(F(387));n=e.pendingProps,o=e.memoizedState,i=o.element,J0(t,e),Oc(e,n,null,r);var s=e.memoizedState;if(n=s.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=ko(Error(F(423)),e),e=by(t,e,n,r,i);break e}else if(n!==i){i=ko(Error(F(424)),e),e=by(t,e,n,r,i);break e}else for(Mt=Rn(e.stateNode.containerInfo.firstChild),Ft=e,Te=!0,hr=null,r=Y0(e,null,n,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(To(),n===i){e=Zr(t,e,r);break e}bt(t,e,n,r)}e=e.child}return e;case 5:return Z0(e),t===null&&Yh(e),n=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Hh(n,i)?s=null:o!==null&&Hh(n,o)&&(e.flags|=32),Ib(t,e),bt(t,e,s,r),e.child;case 6:return t===null&&Yh(e),null;case 13:return Ab(t,e,r);case 4:return zp(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Ao(e,null,n,r):bt(t,e,n,r),e.child;case 11:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:ur(n,i),yy(t,e,n,i,r);case 7:return bt(t,e,e.pendingProps,r),e.child;case 8:return bt(t,e,e.pendingProps.children,r),e.child;case 12:return bt(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(n=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,ye(Pc,n._currentValue),n._currentValue=s,o!==null)if(vr(o.value,s)){if(o.children===i.children&&!Nt.current){e=Zr(t,e,r);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(o.tag===1){c=Kr(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),Xh(o.return,r,e),l.lanes|=r;break}c=c.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(F(341));s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),Xh(s,r,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}bt(t,e,i.children,r),e=e.child}return e;case 9:return i=e.type,n=e.pendingProps.children,go(e,r),i=Zt(i),n=n(i),e.flags|=1,bt(t,e,n,r),e.child;case 14:return n=e.type,i=ur(n,e.pendingProps),i=ur(n.type,i),_y(t,e,n,i,r);case 15:return Eb(t,e,e.type,e.pendingProps,r);case 17:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:ur(n,i),nc(t,e),e.tag=1,Ot(n)?(t=!0,kc(e)):t=!1,go(e,r),_b(e,n,i),Zh(e,n,i,r),rf(null,e,n,!0,t,r);case 19:return Sb(t,e,r);case 22:return xb(t,e,r)}throw Error(F(156,e.tag))};function Bb(t,e){return g0(t,e)}function nk(t,e,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(t,e,r,n){return new nk(t,e,r,n)}function rm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ik(t){if(typeof t=="function")return rm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bp)return 11;if(t===Ep)return 14}return 2}function Dn(t,e){var r=t.alternate;return r===null?(r=Gt(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function sc(t,e,r,n,i,o){var s=2;if(n=t,typeof t=="function")rm(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case eo:return vi(r.children,i,o,e);case wp:s=8,i|=8;break;case xh:return t=Gt(12,r,e,i|2),t.elementType=xh,t.lanes=o,t;case Ih:return t=Gt(13,r,e,i),t.elementType=Ih,t.lanes=o,t;case Th:return t=Gt(19,r,e,i),t.elementType=Th,t.lanes=o,t;case Zw:return _u(r,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xw:s=10;break e;case Jw:s=9;break e;case bp:s=11;break e;case Ep:s=14;break e;case mn:s=16,n=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Gt(s,r,e,i),e.elementType=t,e.type=n,e.lanes=o,e}function vi(t,e,r,n){return t=Gt(7,t,n,e),t.lanes=r,t}function _u(t,e,r,n){return t=Gt(22,t,n,e),t.elementType=Zw,t.lanes=r,t.stateNode={isHidden:!1},t}function Bd(t,e,r){return t=Gt(6,t,null,e),t.lanes=r,t}function qd(t,e,r){return e=Gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ok(t,e,r,n,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Id(0),this.expirationTimes=Id(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Id(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nm(t,e,r,n,i,o,s,l,c){return t=new ok(t,e,r,l,c),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Gt(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Up(o),t}function sk(t,e,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zi,key:n==null?null:""+n,children:t,containerInfo:e,implementation:r}}function qb(t){if(!t)return Fn;t=t._reactInternals;e:{if(Vi(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ot(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var r=t.type;if(Ot(r))return q0(t,r,e)}return e}function Hb(t,e,r,n,i,o,s,l,c){return t=nm(r,n,!0,t,i,o,s,l,c),t.context=qb(null),r=t.current,n=Et(),i=On(r),o=Kr(n,i),o.callback=e??null,Pn(r,o,i),t.current.lanes=i,La(t,i,n),Dt(t,n),t}function wu(t,e,r,n){var i=e.current,o=Et(),s=On(i);return r=qb(r),e.context===null?e.context=r:e.pendingContext=r,e=Kr(o,s),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=Pn(i,e,s),t!==null&&(mr(t,i,s,o),ec(t,i,s)),s}function zc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Py(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function im(t,e){Py(t,e),(t=t.alternate)&&Py(t,e)}function ak(){return null}var Wb=typeof reportError=="function"?reportError:function(t){console.error(t)};function om(t){this._internalRoot=t}bu.prototype.render=om.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));wu(t,e,null,null)};bu.prototype.unmount=om.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ai(function(){wu(null,t,null,null)}),e[Xr]=null}};function bu(t){this._internalRoot=t}bu.prototype.unstable_scheduleHydration=function(t){if(t){var e=x0();t={blockedOn:null,target:t,priority:e};for(var r=0;r<yn.length&&e!==0&&e<yn[r].priority;r++);yn.splice(r,0,t),r===0&&T0(t)}};function sm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Eu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ny(){}function lk(t,e,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var u=zc(s);o.call(u)}}var s=Hb(e,n,t,0,null,!1,!1,"",Ny);return t._reactRootContainer=s,t[Xr]=s.current,sa(t.nodeType===8?t.parentNode:t),Ai(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var u=zc(c);l.call(u)}}var c=nm(t,0,!1,null,null,!1,!1,"",Ny);return t._reactRootContainer=c,t[Xr]=c.current,sa(t.nodeType===8?t.parentNode:t),Ai(function(){wu(e,c,r,n)}),c}function xu(t,e,r,n,i){var o=r._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=zc(s);l.call(c)}}wu(e,s,t,i)}else s=lk(r,e,t,i,n);return zc(s)}b0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Ss(e.pendingLanes);r!==0&&(Tp(e,r|1),Dt(e,$e()),!(ce&6)&&(Co=$e()+500,Hn()))}break;case 13:Ai(function(){var n=Jr(t,1);if(n!==null){var i=Et();mr(n,t,1,i)}}),im(t,1)}};Ap=function(t){if(t.tag===13){var e=Jr(t,134217728);if(e!==null){var r=Et();mr(e,t,134217728,r)}im(t,134217728)}};E0=function(t){if(t.tag===13){var e=On(t),r=Jr(t,e);if(r!==null){var n=Et();mr(r,t,e,n)}im(t,e)}};x0=function(){return me};I0=function(t,e){var r=me;try{return me=t,e()}finally{me=r}};Lh=function(t,e,r){switch(e){case"input":if(kh(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var n=r[e];if(n!==t&&n.form===t.form){var i=fu(n);if(!i)throw Error(F(90));t0(n),kh(n,i)}}}break;case"textarea":n0(t,r);break;case"select":e=r.value,e!=null&&ho(t,!!r.multiple,e,!1)}};u0=Zp;d0=Ai;var ck={usingClientEntryPoint:!1,Events:[Ma,io,fu,l0,c0,Zp]},_s={findFiberByHostInstance:li,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uk={bundleType:_s.bundleType,version:_s.version,rendererPackageName:_s.rendererPackageName,rendererConfig:_s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=p0(t),t===null?null:t.stateNode},findFiberByHostInstance:_s.findFiberByHostInstance||ak,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{cu=Ol.inject(uk),Ir=Ol}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ck;jt.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sm(e))throw Error(F(200));return sk(t,e,null,r)};jt.createRoot=function(t,e){if(!sm(t))throw Error(F(299));var r=!1,n="",i=Wb;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=nm(t,1,!1,null,null,r,!1,n,i),t[Xr]=e.current,sa(t.nodeType===8?t.parentNode:t),new om(e)};jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=p0(e),t=t===null?null:t.stateNode,t};jt.flushSync=function(t){return Ai(t)};jt.hydrate=function(t,e,r){if(!Eu(e))throw Error(F(200));return xu(null,t,e,!0,r)};jt.hydrateRoot=function(t,e,r){if(!sm(t))throw Error(F(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",s=Wb;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),e=Hb(e,null,t,1,r??null,i,!1,o,s),t[Xr]=e.current,sa(t),n)for(t=0;t<n.length;t++)r=n[t],i=r._getVersion,i=i(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,i]:e.mutableSourceEagerHydrationData.push(r,i);return new bu(e)};jt.render=function(t,e,r){if(!Eu(e))throw Error(F(200));return xu(null,t,e,!1,r)};jt.unmountComponentAtNode=function(t){if(!Eu(t))throw Error(F(40));return t._reactRootContainer?(Ai(function(){xu(null,null,t,!1,function(){t._reactRootContainer=null,t[Xr]=null})}),!0):!1};jt.unstable_batchedUpdates=Zp;jt.unstable_renderSubtreeIntoContainer=function(t,e,r,n){if(!Eu(r))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return xu(t,e,r,!1,n)};jt.version="18.3.1-next-f1338f8080-20240426";function Kb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kb)}catch(t){console.error(t)}}Kb(),Kw.exports=jt;var dk=Kw.exports,Gb,Oy=dk;Gb=Oy.createRoot,Oy.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ma(){return ma=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},ma.apply(this,arguments)}var di;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(di||(di={}));const Dy="popstate";function hk(t){t===void 0&&(t={});function e(i,o){let{pathname:s="/",search:l="",hash:c=""}=Fa(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),mf("",{pathname:s,search:l,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(i,o){let s=i.document.querySelector("base"),l="";if(s&&s.getAttribute("href")){let c=i.location.href,u=c.indexOf("#");l=u===-1?c:c.slice(0,u)}return l+"#"+(typeof o=="string"?o:Yb(o))}function n(i,o){Qb(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return pk(e,r,n,t)}function Ar(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Qb(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function fk(){return Math.random().toString(36).substr(2,8)}function Ly(t,e){return{usr:t.state,key:t.key,idx:e}}function mf(t,e,r,n){return r===void 0&&(r=null),ma({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Fa(e):e,{state:r,key:e&&e.key||n||fk()})}function Yb(t){let{pathname:e="/",search:r="",hash:n=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Fa(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function pk(t,e,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:o=!1}=n,s=i.history,l=di.Pop,c=null,u=h();u==null&&(u=0,s.replaceState(ma({},s.state,{idx:u}),""));function h(){return(s.state||{idx:null}).idx}function p(){l=di.Pop;let N=h(),E=N==null?null:N-u;u=N,c&&c({action:l,location:P.location,delta:E})}function m(N,E){l=di.Push;let y=mf(P.location,N,E);r&&r(y,N),u=h()+1;let T=Ly(y,u),D=P.createHref(y);try{s.pushState(T,"",D)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(D)}o&&c&&c({action:l,location:P.location,delta:1})}function b(N,E){l=di.Replace;let y=mf(P.location,N,E);r&&r(y,N),u=h();let T=Ly(y,u),D=P.createHref(y);s.replaceState(T,"",D),o&&c&&c({action:l,location:P.location,delta:0})}function S(N){let E=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof N=="string"?N:Yb(N);return y=y.replace(/ $/,"%20"),Ar(E,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,E)}let P={get action(){return l},get location(){return t(i,s)},listen(N){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Dy,p),c=N,()=>{i.removeEventListener(Dy,p),c=null}},createHref(N){return e(i,N)},createURL:S,encodeLocation(N){let E=S(N);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:m,replace:b,go(N){return s.go(N)}};return P}var Vy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Vy||(Vy={}));function mk(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,n=t.charAt(r);return n&&n!=="/"?null:t.slice(r)||"/"}const gk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vk=t=>gk.test(t);function yk(t,e){e===void 0&&(e="/");let{pathname:r,search:n="",hash:i=""}=typeof t=="string"?Fa(t):t,o;if(r)if(vk(r))o=r;else{if(r.includes("//")){let s=r;r=r.replace(/\/\/+/g,"/"),Qb(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+r))}r.startsWith("/")?o=My(r.substring(1),"/"):o=My(r,e)}else o=e;return{pathname:o,search:xk(n),hash:Ik(i)}}function My(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Hd(t,e,r,n){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _k(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function wk(t,e){let r=_k(t);return e?r.map((n,i)=>i===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function bk(t,e,r,n){n===void 0&&(n=!1);let i;typeof t=="string"?i=Fa(t):(i=ma({},t),Ar(!i.pathname||!i.pathname.includes("?"),Hd("?","pathname","search",i)),Ar(!i.pathname||!i.pathname.includes("#"),Hd("#","pathname","hash",i)),Ar(!i.search||!i.search.includes("#"),Hd("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=r;else{let p=e.length-1;if(!n&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let c=yk(i,l),u=s&&s!=="/"&&s.endsWith("/"),h=(o||s===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||h)&&(c.pathname+="/"),c}const Ek=t=>t.join("/").replace(/\/\/+/g,"/"),xk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ik=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,Xb=["post","put","patch","delete"];new Set(Xb);const Tk=["get",...Xb];new Set(Tk);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jc(){return jc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},jc.apply(this,arguments)}const Jb=W.createContext(null),am=W.createContext(null),lm=W.createContext(null),cm=W.createContext({outlet:null,matches:[],isDataRoute:!1});function um(){return W.useContext(lm)!=null}function Zb(){return um()||Ar(!1),W.useContext(lm).location}function eE(t){W.useContext(am).static||W.useLayoutEffect(t)}function Ak(){let{isDataRoute:t}=W.useContext(cm);return t?Pk():Sk()}function Sk(){um()||Ar(!1);let t=W.useContext(Jb),{basename:e,future:r,navigator:n}=W.useContext(am),{matches:i}=W.useContext(cm),{pathname:o}=Zb(),s=JSON.stringify(wk(i,r.v7_relativeSplatPath)),l=W.useRef(!1);return eE(()=>{l.current=!0}),W.useCallback(function(u,h){if(h===void 0&&(h={}),!l.current)return;if(typeof u=="number"){n.go(u);return}let p=bk(u,JSON.parse(s),o,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Ek([e,p.pathname])),(h.replace?n.replace:n.push)(p,h.state,h)},[e,n,s,o,t])}var tE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(tE||{}),rE=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(rE||{});function kk(t){let e=W.useContext(Jb);return e||Ar(!1),e}function Ck(t){let e=W.useContext(cm);return e||Ar(!1),e}function Rk(t){let e=Ck(),r=e.matches[e.matches.length-1];return r.route.id||Ar(!1),r.route.id}function Pk(){let{router:t}=kk(tE.UseNavigateStable),e=Rk(rE.UseNavigateStable),r=W.useRef(!1);return eE(()=>{r.current=!0}),W.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,jc({fromRouteId:e},o)))},[t,e])}function Nk(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Ok(t){let{basename:e="/",children:r=null,location:n,navigationType:i=di.Pop,navigator:o,static:s=!1,future:l}=t;um()&&Ar(!1);let c=e.replace(/^\/*/,"/"),u=W.useMemo(()=>({basename:c,navigator:o,static:s,future:jc({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof n=="string"&&(n=Fa(n));let{pathname:h="/",search:p="",hash:m="",state:b=null,key:S="default"}=n,P=W.useMemo(()=>{let N=mk(h,c);return N==null?null:{location:{pathname:N,search:p,hash:m,state:b,key:S},navigationType:i}},[c,h,p,m,b,S,i]);return P==null?null:W.createElement(am.Provider,{value:u},W.createElement(lm.Provider,{children:r,value:P}))}new Promise(()=>{});/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gf(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,r)=>{let n=t[r];return e.concat(Array.isArray(n)?n.map(i=>[r,i]):[[r,n]])},[]))}function Dk(t,e){let r=gf(t);return e&&e.forEach((n,i)=>{r.has(i)||e.getAll(i).forEach(o=>{r.append(i,o)})}),r}const Lk="6";try{window.__reactRouterVersion=Lk}catch{}const Vk="startTransition",$y=eA[Vk];function Mk(t){let{basename:e,children:r,future:n,window:i}=t,o=W.useRef();o.current==null&&(o.current=hk({window:i,v5Compat:!0}));let s=o.current,[l,c]=W.useState({action:s.action,location:s.location}),{v7_startTransition:u}=n||{},h=W.useCallback(p=>{u&&$y?$y(()=>c(p)):c(p)},[c,u]);return W.useLayoutEffect(()=>s.listen(h),[s,h]),W.useEffect(()=>Nk(n),[n]),W.createElement(Ok,{basename:e,children:r,location:l.location,navigationType:l.action,navigator:s,future:n})}var Fy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Fy||(Fy={}));var Uy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Uy||(Uy={}));function $k(t){let e=W.useRef(gf(t)),r=W.useRef(!1),n=Zb(),i=W.useMemo(()=>Dk(n.search,r.current?null:e.current),[n.search]),o=Ak(),s=W.useCallback((l,c)=>{const u=gf(typeof l=="function"?l(i):l);r.current=!0,o("?"+u,c)},[o,i]);return[i,s]}var zy={};/**
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
 */const nE=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},Fk=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[r++];e[n++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[r++],s=t[r++],l=t[r++],c=((i&7)<<18|(o&63)<<12|(s&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const o=t[r++],s=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},iE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,l=s?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,h=o>>2,p=(o&3)<<4|l>>4;let m=(l&15)<<2|u>>6,b=u&63;c||(b=64,s||(m=64)),n.push(r[h],r[p],r[m],r[b])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const o=r[t.charAt(i++)],l=i<t.length?r[t.charAt(i)]:0;++i;const u=i<t.length?r[t.charAt(i)]:64;++i;const p=i<t.length?r[t.charAt(i)]:64;if(++i,o==null||l==null||u==null||p==null)throw new Uk;const m=o<<2|l>>4;if(n.push(m),u!==64){const b=l<<4&240|u>>2;if(n.push(b),p!==64){const S=u<<6&192|p;n.push(S)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Uk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zk=function(t){const e=nE(t);return iE.encodeByteArray(e,!0)},Bc=function(t){return zk(t).replace(/\./g,"")},oE=function(t){try{return iE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Bk=()=>jk().__FIREBASE_DEFAULTS__,qk=()=>{if(typeof process>"u"||typeof zy>"u")return;const t=zy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Hk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&oE(t[1]);return e&&JSON.parse(e)},Iu=()=>{try{return Bk()||qk()||Hk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sE=t=>{var e,r;return(r=(e=Iu())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},Wk=t=>{const e=sE(t);if(!e)return;const r=e.lastIndexOf(":");if(r<=0||r+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(r+1),10);return e[0]==="["?[e.substring(1,r-1),n]:[e.substring(0,r),n]},aE=()=>{var t;return(t=Iu())===null||t===void 0?void 0:t.config},lE=t=>{var e;return(e=Iu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Kk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,n))}}}/**
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
 */function Gk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},n=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Bc(JSON.stringify(r)),Bc(JSON.stringify(s)),""].join(".")}/**
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
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function Yk(){var t;const e=(t=Iu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function e1(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function t1(){return!Yk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cE(){try{return typeof indexedDB=="object"}catch{return!1}}function uE(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(r){e(r)}})}function r1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const n1="FirebaseError";class Or extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=n1,Object.setPrototypeOf(this,Or.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mi.prototype.create)}}class Mi{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?i1(o,n):"Error",l=`${this.serviceName}: ${s} (${i}).`;return new Or(i,l,n)}}function i1(t,e){return t.replace(o1,(r,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const o1=/\{\$([^}]+)}/g;function s1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qc(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const i of r){if(!n.includes(i))return!1;const o=t[i],s=e[i];if(jy(o)&&jy(s)){if(!qc(o,s))return!1}else if(o!==s)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function jy(t){return t!==null&&typeof t=="object"}/**
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
 */function Ua(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Cs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,o]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Rs(t){const e=t.indexOf("?");if(!e)return"";const r=t.indexOf("#",e);return t.substring(e,r>0?r:void 0)}function a1(t,e){const r=new l1(t,e);return r.subscribe.bind(r)}class l1{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,n){let i;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");c1(e,["next","error","complete"])?i=e:i={next:e,error:r,complete:n},i.next===void 0&&(i.next=Wd),i.error===void 0&&(i.error=Wd),i.complete===void 0&&(i.complete=Wd);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function c1(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function Wd(){}/**
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
 */function Oe(t){return t&&t._delegate?t._delegate:t}class yr{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ai="[DEFAULT]";/**
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
 */class u1{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const n=new Kk;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(h1(e))try{this.getOrInitializeService({instanceIdentifier:ai})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);try{const o=this.getOrInitializeService({instanceIdentifier:i});n.resolve(o)}catch{}}}}clearInstance(e=ai){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ai){return this.instances.has(e)}getOptions(e=ai){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[o,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);n===l&&s.resolve(i)}return i}onInit(e,r){var n;const i=this.normalizeInstanceIdentifier(r),o=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,r){const n=this.onInitCallbacks.get(r);if(n)for(const i of n)try{i(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:d1(e),options:r}),this.instances.set(e,n),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=ai){return this.component?this.component.multipleInstances?e:ai:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function d1(t){return t===ai?void 0:t}function h1(t){return t.instantiationMode==="EAGER"}/**
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
 */class f1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new u1(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const p1={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},m1=ae.INFO,g1={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},v1=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=g1[e];if(i)console[i](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dm{constructor(e){this.name=e,this._logLevel=m1,this._logHandler=v1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?p1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const y1=(t,e)=>e.some(r=>t instanceof r);let By,qy;function _1(){return By||(By=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function w1(){return qy||(qy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dE=new WeakMap,vf=new WeakMap,hE=new WeakMap,Kd=new WeakMap,hm=new WeakMap;function b1(t){const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{r(Gr(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(r=>{r instanceof IDBCursor&&dE.set(r,t)}).catch(()=>{}),hm.set(e,t),e}function E1(t){if(vf.has(t))return;const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{r(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});vf.set(t,e)}let yf={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return vf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hE.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Gr(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function x1(t){yf=t(yf)}function I1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(Gd(this),e,...r);return hE.set(n,e.sort?e.sort():[e]),Gr(n)}:w1().includes(t)?function(...e){return t.apply(Gd(this),e),Gr(dE.get(this))}:function(...e){return Gr(t.apply(Gd(this),e))}}function T1(t){return typeof t=="function"?I1(t):(t instanceof IDBTransaction&&E1(t),y1(t,_1())?new Proxy(t,yf):t)}function Gr(t){if(t instanceof IDBRequest)return b1(t);if(Kd.has(t))return Kd.get(t);const e=T1(t);return e!==t&&(Kd.set(t,e),hm.set(e,t)),e}const Gd=t=>hm.get(t);function Tu(t,e,{blocked:r,upgrade:n,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),l=Gr(s);return n&&s.addEventListener("upgradeneeded",c=>{n(Gr(s.result),c.oldVersion,c.newVersion,Gr(s.transaction),c)}),r&&s.addEventListener("blocked",c=>r(c.oldVersion,c.newVersion,c)),l.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}function Qd(t,{blocked:e}={}){const r=indexedDB.deleteDatabase(t);return e&&r.addEventListener("blocked",n=>e(n.oldVersion,n)),Gr(r).then(()=>{})}const A1=["get","getKey","getAll","getAllKeys","count"],S1=["put","add","delete","clear"],Yd=new Map;function Hy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yd.get(e))return Yd.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,i=S1.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||A1.includes(r)))return;const o=async function(s,...l){const c=this.transaction(s,i?"readwrite":"readonly");let u=c.store;return n&&(u=u.index(l.shift())),(await Promise.all([u[r](...l),i&&c.done]))[0]};return Yd.set(e,o),o}x1(t=>({...t,get:(e,r,n)=>Hy(e,r)||t.get(e,r,n),has:(e,r)=>!!Hy(e,r)||t.has(e,r)}));/**
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
 */class k1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(C1(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function C1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _f="@firebase/app",Wy="0.10.13";/**
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
 */const en=new dm("@firebase/app"),R1="@firebase/app-compat",P1="@firebase/analytics-compat",N1="@firebase/analytics",O1="@firebase/app-check-compat",D1="@firebase/app-check",L1="@firebase/auth",V1="@firebase/auth-compat",M1="@firebase/database",$1="@firebase/data-connect",F1="@firebase/database-compat",U1="@firebase/functions",z1="@firebase/functions-compat",j1="@firebase/installations",B1="@firebase/installations-compat",q1="@firebase/messaging",H1="@firebase/messaging-compat",W1="@firebase/performance",K1="@firebase/performance-compat",G1="@firebase/remote-config",Q1="@firebase/remote-config-compat",Y1="@firebase/storage",X1="@firebase/storage-compat",J1="@firebase/firestore",Z1="@firebase/vertexai-preview",eC="@firebase/firestore-compat",tC="firebase",rC="10.14.1";/**
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
 */const wf="[DEFAULT]",nC={[_f]:"fire-core",[R1]:"fire-core-compat",[N1]:"fire-analytics",[P1]:"fire-analytics-compat",[D1]:"fire-app-check",[O1]:"fire-app-check-compat",[L1]:"fire-auth",[V1]:"fire-auth-compat",[M1]:"fire-rtdb",[$1]:"fire-data-connect",[F1]:"fire-rtdb-compat",[U1]:"fire-fn",[z1]:"fire-fn-compat",[j1]:"fire-iid",[B1]:"fire-iid-compat",[q1]:"fire-fcm",[H1]:"fire-fcm-compat",[W1]:"fire-perf",[K1]:"fire-perf-compat",[G1]:"fire-rc",[Q1]:"fire-rc-compat",[Y1]:"fire-gcs",[X1]:"fire-gcs-compat",[J1]:"fire-fst",[eC]:"fire-fst-compat",[Z1]:"fire-vertex","fire-js":"fire-js",[tC]:"fire-js-all"};/**
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
 */const Hc=new Map,iC=new Map,bf=new Map;function Ky(t,e){try{t.container.addComponent(e)}catch(r){en.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function Pr(t){const e=t.name;if(bf.has(e))return en.debug(`There were multiple attempts to register component ${e}.`),!1;bf.set(e,t);for(const r of Hc.values())Ky(r,t);for(const r of iC.values())Ky(r,t);return!0}function jo(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}function fr(t){return t.settings!==void 0}/**
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
 */const oC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ln=new Mi("app","Firebase",oC);/**
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
 */class sC{constructor(e,r,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
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
 */const Bo=rC;function fE(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const n=Object.assign({name:wf,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Ln.create("bad-app-name",{appName:String(i)});if(r||(r=aE()),!r)throw Ln.create("no-options");const o=Hc.get(i);if(o){if(qc(r,o.options)&&qc(n,o.config))return o;throw Ln.create("duplicate-app",{appName:i})}const s=new f1(i);for(const c of bf.values())s.addComponent(c);const l=new sC(r,n,s);return Hc.set(i,l),l}function fm(t=wf){const e=Hc.get(t);if(!e&&t===wf&&aE())return fE();if(!e)throw Ln.create("no-app",{appName:t});return e}function Xt(t,e,r){var n;let i=(n=nC[t])!==null&&n!==void 0?n:t;r&&(i+=`-${r}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&l.push("and"),s&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),en.warn(l.join(" "));return}Pr(new yr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const aC="firebase-heartbeat-database",lC=1,ga="firebase-heartbeat-store";let Xd=null;function pE(){return Xd||(Xd=Tu(aC,lC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ga)}catch(r){console.warn(r)}}}}).catch(t=>{throw Ln.create("idb-open",{originalErrorMessage:t.message})})),Xd}async function cC(t){try{const r=(await pE()).transaction(ga),n=await r.objectStore(ga).get(mE(t));return await r.done,n}catch(e){if(e instanceof Or)en.warn(e.message);else{const r=Ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});en.warn(r.message)}}}async function Gy(t,e){try{const n=(await pE()).transaction(ga,"readwrite");await n.objectStore(ga).put(e,mE(t)),await n.done}catch(r){if(r instanceof Or)en.warn(r.message);else{const n=Ln.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});en.warn(n.message)}}}function mE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const uC=1024,dC=30*24*60*60*1e3;class hC{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new pC(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,r;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Qy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const l=new Date(s.date).valueOf();return Date.now()-l<=dC}),this._storage.overwrite(this._heartbeatsCache))}catch(n){en.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=Qy(),{heartbeatsToSend:n,unsentEntries:i}=fC(this._heartbeatsCache.heartbeats),o=Bc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=r,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(r){return en.warn(r),""}}}function Qy(){return new Date().toISOString().substring(0,10)}function fC(t,e=uC){const r=[];let n=t.slice();for(const i of t){const o=r.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Yy(r)>e){o.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),Yy(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class pC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cE()?uE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await cC(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gy(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gy(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Yy(t){return Bc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function mC(t){Pr(new yr("platform-logger",e=>new k1(e),"PRIVATE")),Pr(new yr("heartbeat",e=>new hC(e),"PRIVATE")),Xt(_f,Wy,t),Xt(_f,Wy,"esm2017"),Xt("fire-js","")}mC("");function pm(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}function R(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o}function gE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gC=gE,vE=new Mi("auth","Firebase",gE());/**
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
 */const Wc=new dm("@firebase/auth");function vC(t,...e){Wc.logLevel<=ae.WARN&&Wc.warn(`Auth (${Bo}): ${t}`,...e)}function ac(t,...e){Wc.logLevel<=ae.ERROR&&Wc.error(`Auth (${Bo}): ${t}`,...e)}/**
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
 */function tr(t,...e){throw gm(t,...e)}function gr(t,...e){return gm(t,...e)}function mm(t,e,r){const n=Object.assign(Object.assign({},gC()),{[e]:r});return new Mi("auth","Firebase",n).create(e,{appName:t.name})}function Qr(t){return mm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yC(t,e,r){const n=r;if(!(e instanceof n))throw n.name!==e.constructor.name&&tr(t,"argument-error"),mm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gm(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return vE.create(t,...e)}function J(t,e,...r){if(!t)throw gm(e,...r)}function qr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ac(e),new Error(e)}function tn(t,e){t||qr(e)}/**
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
 */function Ef(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _C(){return Xy()==="http:"||Xy()==="https:"}function Xy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function wC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_C()||Jk()||"connection"in navigator)?navigator.onLine:!0}function bC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class za{constructor(e,r){this.shortDelay=e,this.longDelay=r,tn(r>e,"Short delay should be less than long delay!"),this.isMobile=Qk()||Zk()}get(){return wC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vm(t,e){tn(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
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
 */class yE{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const EC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xC=new za(3e4,6e4);function Wn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Kn(t,e,r,n,i={}){return _E(t,i,async()=>{let o={},s={};n&&(e==="GET"?s=n:o={body:JSON.stringify(n)});const l=Ua(Object.assign({key:t.config.apiKey},s)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},o);return Xk()||(u.referrerPolicy="no-referrer"),yE.fetch()(wE(t,t.config.apiHost,r,l),u)})}async function _E(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},EC),e);try{const i=new TC(t),o=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Dl(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const l=o.ok?s.errorMessage:s.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dl(t,"credential-already-in-use",s);if(c==="EMAIL_EXISTS")throw Dl(t,"email-already-in-use",s);if(c==="USER_DISABLED")throw Dl(t,"user-disabled",s);const h=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw mm(t,h,u);tr(t,h)}}catch(i){if(i instanceof Or)throw i;tr(t,"network-request-failed",{message:String(i)})}}async function ja(t,e,r,n,i={}){const o=await Kn(t,e,r,n,i);return"mfaPendingCredential"in o&&tr(t,"multi-factor-auth-required",{_serverResponse:o}),o}function wE(t,e,r,n){const i=`${e}${r}?${n}`;return t.config.emulator?vm(t.config,i):`${t.config.apiScheme}://${i}`}function IC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class TC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(gr(this.auth,"network-request-failed")),xC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Dl(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=gr(t,e,n);return i.customData._tokenResponse=r,i}function Jy(t){return t!==void 0&&t.enterprise!==void 0}class AC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===e)return IC(r.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function SC(t,e){return Kn(t,"GET","/v2/recaptchaConfig",Wn(t,e))}/**
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
 */async function kC(t,e){return Kn(t,"POST","/v1/accounts:delete",e)}async function bE(t,e){return Kn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CC(t,e=!1){const r=Oe(t),n=await r.getIdToken(e),i=ym(n);J(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:n,authTime:qs(Jd(i.auth_time)),issuedAtTime:qs(Jd(i.iat)),expirationTime:qs(Jd(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Jd(t){return Number(t)*1e3}function ym(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return ac("JWT malformed, contained fewer than 3 sections"),null;try{const i=oE(r);return i?JSON.parse(i):(ac("Failed to decode base64 JWT payload"),null)}catch(i){return ac("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Zy(t){const e=ym(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function va(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof Or&&RC(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function RC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class PC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xf{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=qs(this.lastLoginAt),this.creationTime=qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Kc(t){var e;const r=t.auth,n=await t.getIdToken(),i=await va(t,bE(r,{idToken:n}));J(i==null?void 0:i.users.length,r,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?EE(o.providerUserInfo):[],l=OC(t.providerData,s),c=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(l!=null&&l.length),h=c?u:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new xf(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function NC(t){const e=Oe(t);await Kc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function OC(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function EE(t){return t.map(e=>{var{providerId:r}=e,n=pm(e,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function DC(t,e){const r=await _E(t,{},async()=>{const n=Ua({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=wE(t,i,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",yE.fetch()(s,{method:"POST",headers:l,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function LC(t,e){return Kn(t,"POST","/v2/accounts:revokeToken",Wn(t,e))}/**
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
 */class yo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}updateFromIdToken(e){J(e.length!==0,"internal-error");const r=Zy(e);this.updateTokensAndExpiration(e,null,r)}async getToken(e,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:i,expiresIn:o}=await DC(e,r);this.updateTokensAndExpiration(n,i,Number(o))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:i,expirationTime:o}=r,s=new yo;return n&&(J(typeof n=="string","internal-error",{appName:e}),s.refreshToken=n),i&&(J(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(J(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yo,this.toJSON())}_performRefresh(){return qr("not implemented")}}/**
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
 */function pn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Hr{constructor(e){var{uid:r,auth:n,stsTokenManager:i}=e,o=pm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new xf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const r=await va(this,this.stsTokenManager.getToken(this.auth,e));return J(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return CC(this,e)}reload(){return NC(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new Hr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await Kc(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fr(this.auth.app))return Promise.reject(Qr(this.auth));const e=await this.getIdToken();return await va(this,kC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var n,i,o,s,l,c,u,h;const p=(n=r.displayName)!==null&&n!==void 0?n:void 0,m=(i=r.email)!==null&&i!==void 0?i:void 0,b=(o=r.phoneNumber)!==null&&o!==void 0?o:void 0,S=(s=r.photoURL)!==null&&s!==void 0?s:void 0,P=(l=r.tenantId)!==null&&l!==void 0?l:void 0,N=(c=r._redirectEventId)!==null&&c!==void 0?c:void 0,E=(u=r.createdAt)!==null&&u!==void 0?u:void 0,y=(h=r.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:T,emailVerified:D,isAnonymous:U,providerData:z,stsTokenManager:w}=r;J(T&&w,e,"internal-error");const v=yo.fromJSON(this.name,w);J(typeof T=="string",e,"internal-error"),pn(p,e.name),pn(m,e.name),J(typeof D=="boolean",e,"internal-error"),J(typeof U=="boolean",e,"internal-error"),pn(b,e.name),pn(S,e.name),pn(P,e.name),pn(N,e.name),pn(E,e.name),pn(y,e.name);const _=new Hr({uid:T,auth:e,email:m,emailVerified:D,displayName:p,isAnonymous:U,photoURL:S,phoneNumber:b,tenantId:P,stsTokenManager:v,createdAt:E,lastLoginAt:y});return z&&Array.isArray(z)&&(_.providerData=z.map(x=>Object.assign({},x))),N&&(_._redirectEventId=N),_}static async _fromIdTokenResponse(e,r,n=!1){const i=new yo;i.updateFromServerResponse(r);const o=new Hr({uid:r.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Kc(o),o}static async _fromGetAccountInfoResponse(e,r,n){const i=r.users[0];J(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?EE(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new yo;l.updateFromIdToken(n);const c=new Hr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new xf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(c,u),c}}/**
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
 */const e_=new Map;function Wr(t){tn(t instanceof Function,"Expected a class definition");let e=e_.get(t);return e?(tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,e_.set(t,e),e)}/**
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
 */class xE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}xE.type="NONE";const t_=xE;/**
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
 */function lc(t,e,r){return`firebase:${t}:${e}:${r}`}class _o{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:i,name:o}=this.auth;this.fullUserKey=lc(this.userKey,i.apiKey,o),this.fullPersistenceKey=lc("persistence",i.apiKey,o),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Hr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new _o(Wr(t_),e,n);const i=(await Promise.all(r.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Wr(t_);const s=lc(n,e.config.apiKey,e.name);let l=null;for(const u of r)try{const h=await u._get(s);if(h){const p=Hr._fromJSON(e,h);u!==o&&(l=p),o=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new _o(o,e,n):(o=c[0],l&&await o._set(s,l.toJSON()),await Promise.all(r.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new _o(o,e,n))}}/**
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
 */function r_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(SE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(IE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(CE(e))return"Blackberry";if(RE(e))return"Webos";if(TE(e))return"Safari";if((e.includes("chrome/")||AE(e))&&!e.includes("edge/"))return"Chrome";if(kE(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function IE(t=vt()){return/firefox\//i.test(t)}function TE(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function AE(t=vt()){return/crios\//i.test(t)}function SE(t=vt()){return/iemobile/i.test(t)}function kE(t=vt()){return/android/i.test(t)}function CE(t=vt()){return/blackberry/i.test(t)}function RE(t=vt()){return/webos/i.test(t)}function _m(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function VC(t=vt()){var e;return _m(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function MC(){return e1()&&document.documentMode===10}function PE(t=vt()){return _m(t)||kE(t)||RE(t)||CE(t)||/windows phone/i.test(t)||SE(t)}/**
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
 */function NE(t,e=[]){let r;switch(t){case"Browser":r=r_(vt());break;case"Worker":r=`${r_(vt())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${Bo}/${n}`}/**
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
 */class $C{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const n=o=>new Promise((s,l)=>{try{const c=e(o);s(c)}catch(c){l(c)}});n.onAbort=r,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const n of this.queue)await n(e),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function FC(t,e={}){return Kn(t,"GET","/v2/passwordPolicy",Wn(t,e))}/**
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
 */const UC=6;class zC{constructor(e){var r,n,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=s.minPasswordLength)!==null&&r!==void 0?r:UC,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,n,i,o,s,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(r=c.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(n=c.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsUppercaseLetter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(s=c.containsNumericCharacter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,r){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(r.meetsMinPasswordLength=e.length>=n),i&&(r.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(r,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,r,n,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class jC{constructor(e,r,n,i){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new n_(this),this.idTokenSubscription=new n_(this),this.beforeStateQueue=new $C(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=Wr(r)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await _o.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const r=await bE(this,{idToken:e}),n=await Hr._fromGetAccountInfoResponse(this,r,e);await this.directlySetCurrentUser(n)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(fr(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!s||s===l)&&(c!=null&&c.user)&&(i=c.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await Kc(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fr(this.app))return Promise.reject(Qr(this));const r=e?Oe(e):null;return r&&J(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fr(this.app)?Promise.reject(Qr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fr(this.app)?Promise.reject(Qr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await FC(this),r=new zC(e);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mi("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},r)}})}async revokeAccessToken(e){if(this.currentUser){const r=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:r};this.tenantId!=null&&(n.tenantId=this.tenantId),await LC(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&Wr(e)||this._popupRedirectResolver;J(r,this,"argument-error"),this.redirectPersistenceManager=await _o.create(this,[Wr(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,i){if(this._deleted)return()=>{};const o=typeof r=="function"?r:r.next.bind(r);let s=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{s||o(this.currentUser)}),typeof r=="function"){const c=e.addObserver(r,n,i);return()=>{s=!0,c()}}else{const c=e.addObserver(r);return()=>{s=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=NE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(r["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(r["X-Firebase-AppCheck"]=i),r}async _getAppCheckToken(){var e;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r!=null&&r.error&&vC(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function Gn(t){return Oe(t)}class n_{constructor(e){this.auth=e,this.observer=null,this.addObserver=a1(r=>this.observer=r)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Au={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BC(t){Au=t}function OE(t){return Au.loadJS(t)}function qC(){return Au.recaptchaEnterpriseScript}function HC(){return Au.gapiScript}function WC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const KC="recaptcha-enterprise",GC="NO_RECAPTCHA";class QC{constructor(e){this.type=KC,this.auth=Gn(e)}async verify(e="verify",r=!1){async function n(o){if(!r){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,l)=>{SC(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new AC(c);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(c=>{l(c)})})}function i(o,s,l){const c=window.grecaptcha;Jy(c)?c.enterprise.ready(()=>{c.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(GC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{n(this.auth).then(l=>{if(!r&&Jy(window.grecaptcha))i(l,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let c=qC();c.length!==0&&(c+=l),OE(c).then(()=>{i(l,o,s)}).catch(u=>{s(u)})}}).catch(l=>{s(l)})})}}async function i_(t,e,r,n=!1){const i=new QC(t);let o;try{o=await i.verify(r)}catch{o=await i.verify(r,!0)}const s=Object.assign({},e);return n?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function If(t,e,r,n){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await i_(t,e,r,r==="getOobCode");return n(t,o)}else return n(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await i_(t,e,r,r==="getOobCode");return n(t,s)}else return Promise.reject(o)})}/**
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
 */function YC(t,e){const r=jo(t,"auth");if(r.isInitialized()){const i=r.getImmediate(),o=r.getOptions();if(qc(o,e??{}))return i;tr(i,"already-initialized")}return r.initialize({options:e})}function XC(t,e){const r=(e==null?void 0:e.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Wr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function JC(t,e,r){const n=Gn(t);J(n._canInitEmulator,n,"emulator-config-failed"),J(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,o=DE(e),{host:s,port:l}=ZC(e),c=l===null?"":`:${l}`;n.config.emulator={url:`${o}//${s}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),eR()}function DE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ZC(t){const e=DE(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const o=i[1];return{host:o,port:o_(n.substr(o.length+1))}}else{const[o,s]=n.split(":");return{host:o,port:o_(s)}}}function o_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eR(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class wm{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return qr("not implemented")}_getIdTokenResponse(e){return qr("not implemented")}_linkToIdToken(e,r){return qr("not implemented")}_getReauthenticationResolver(e){return qr("not implemented")}}async function tR(t,e){return Kn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function rR(t,e){return ja(t,"POST","/v1/accounts:signInWithPassword",Wn(t,e))}/**
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
 */async function nR(t,e){return ja(t,"POST","/v1/accounts:signInWithEmailLink",Wn(t,e))}async function iR(t,e){return ja(t,"POST","/v1/accounts:signInWithEmailLink",Wn(t,e))}/**
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
 */class ya extends wm{constructor(e,r,n,i=null){super("password",n),this._email=e,this._password=r,this._tenantId=i}static _fromEmailAndPassword(e,r){return new ya(e,r,"password")}static _fromEmailAndCode(e,r,n=null){return new ya(e,r,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return If(e,r,"signInWithPassword",rR);case"emailLink":return nR(e,{email:this._email,oobCode:this._password});default:tr(e,"internal-error")}}async _linkToIdToken(e,r){switch(this.signInMethod){case"password":const n={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return If(e,n,"signUpPassword",tR);case"emailLink":return iR(e,{idToken:r,email:this._email,oobCode:this._password});default:tr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function wo(t,e){return ja(t,"POST","/v1/accounts:signInWithIdp",Wn(t,e))}/**
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
 */const oR="http://localhost";class rn extends wm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):tr("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=r,o=pm(r,["providerId","signInMethod"]);if(!n||!i)return null;const s=new rn(n,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const r=this.buildRequest();return wo(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,wo(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,wo(e,r)}buildRequest(){const e={requestUri:oR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=Ua(r)}return e}}/**
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
 */function sR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aR(t){const e=Cs(Rs(t)).link,r=e?Cs(Rs(e)).deep_link_id:null,n=Cs(Rs(t)).deep_link_id;return(n?Cs(Rs(n)).link:null)||n||r||e||t}class bm{constructor(e){var r,n,i,o,s,l;const c=Cs(Rs(e)),u=(r=c.apiKey)!==null&&r!==void 0?r:null,h=(n=c.oobCode)!==null&&n!==void 0?n:null,p=sR((i=c.mode)!==null&&i!==void 0?i:null);J(u&&h&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=h,this.continueUrl=(o=c.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=c.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const r=aR(e);try{return new bm(r)}catch{return null}}}/**
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
 */class qo{constructor(){this.providerId=qo.PROVIDER_ID}static credential(e,r){return ya._fromEmailAndPassword(e,r)}static credentialWithLink(e,r){const n=bm.parseLink(r);return J(n,"argument-error"),ya._fromEmailAndCode(e,n.code,n.tenantId)}}qo.PROVIDER_ID="password";qo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Em{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ho extends Em{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Hs extends Ho{static credentialFromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;return J("providerId"in r&&"signInMethod"in r,"argument-error"),rn._fromParams(r)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return J(e.idToken||e.accessToken,"argument-error"),rn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Hs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Hs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:o,nonce:s,providerId:l}=e;if(!n&&!i&&!r&&!o||!l)return null;try{return new Hs(l)._credential({idToken:r,accessToken:n,nonce:s,pendingToken:o})}catch{return null}}}/**
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
 */class wn extends Ho{constructor(){super("facebook.com")}static credential(e){return rn._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
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
 */class zr extends Ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return rn._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n}=e;if(!r&&!n)return null;try{return zr.credential(r,n)}catch{return null}}}zr.GOOGLE_SIGN_IN_METHOD="google.com";zr.PROVIDER_ID="google.com";/**
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
 */class bn extends Ho{constructor(){super("github.com")}static credential(e){return rn._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
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
 */class En extends Ho{constructor(){super("twitter.com")}static credential(e,r){return rn._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=e;if(!r||!n)return null;try{return En.credential(r,n)}catch{return null}}}En.TWITTER_SIGN_IN_METHOD="twitter.com";En.PROVIDER_ID="twitter.com";/**
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
 */async function lR(t,e){return ja(t,"POST","/v1/accounts:signUp",Wn(t,e))}/**
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
 */class Si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,i=!1){const o=await Hr._fromIdTokenResponse(e,n,i),s=s_(n);return new Si({user:o,providerId:s,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const i=s_(n);return new Si({user:e,providerId:i,_tokenResponse:n,operationType:r})}}function s_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Gc extends Or{constructor(e,r,n,i){var o;super(r.code,r.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Gc.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,r,n,i){return new Gc(e,r,n,i)}}function LE(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Gc._fromErrorAndOperation(t,o,e,n):o})}async function cR(t,e,r=!1){const n=await va(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return Si._forOperation(t,"link",n)}/**
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
 */async function uR(t,e,r=!1){const{auth:n}=t;if(fr(n.app))return Promise.reject(Qr(n));const i="reauthenticate";try{const o=await va(t,LE(n,i,e,t),r);J(o.idToken,n,"internal-error");const s=ym(o.idToken);J(s,n,"internal-error");const{sub:l}=s;return J(t.uid===l,n,"user-mismatch"),Si._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&tr(n,"user-mismatch"),o}}/**
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
 */async function VE(t,e,r=!1){if(fr(t.app))return Promise.reject(Qr(t));const n="signIn",i=await LE(t,n,e),o=await Si._fromIdTokenResponse(t,n,i);return r||await t._updateCurrentUser(o.user),o}async function dR(t,e){return VE(Gn(t),e)}/**
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
 */async function ME(t){const e=Gn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function hR(t,e,r){if(fr(t.app))return Promise.reject(Qr(t));const n=Gn(t),s=await If(n,{returnSecureToken:!0,email:e,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lR).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&ME(t),c}),l=await Si._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(l.user),l}function fR(t,e,r){return fr(t.app)?Promise.reject(Qr(t)):dR(Oe(t),qo.credential(e,r)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&ME(t),n})}function pR(t,e,r,n){return Oe(t).onIdTokenChanged(e,r,n)}function mR(t,e,r){return Oe(t).beforeAuthStateChanged(e,r)}function gR(t,e,r,n){return Oe(t).onAuthStateChanged(e,r,n)}function vR(t){return Oe(t).signOut()}const Qc="__sak";/**
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
 */class $E{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Qc,"1"),this.storage.removeItem(Qc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const yR=1e3,_R=10;class FE extends $E{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=PE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&e(r,i,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((s,l,c)=>{this.notifyListeners(s,c)});return}const n=e.key;r?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(n);!r&&this.localCache[n]===s||this.notifyListeners(n,s)},o=this.storage.getItem(n);MC()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_R):i()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},yR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}FE.type="LOCAL";const wR=FE;/**
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
 */class UE extends $E{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}UE.type="SESSION";const zE=UE;/**
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
 */function bR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class Su{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(i=>i.isListeningto(e));if(r)return r;const n=new Su(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:i,data:o}=r.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const l=Array.from(s).map(async u=>u(r.origin,o)),c=await bR(l);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Su.receivers=[];/**
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
 */function xm(t="",e=10){let r="";for(let n=0;n<e;n++)r+=Math.floor(Math.random()*10);return t+r}/**
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
 */class ER{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((l,c)=>{const u=xm("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(m.data.response);break;default:clearTimeout(h),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:r},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Sr(){return window}function xR(t){Sr().location.href=t}/**
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
 */function jE(){return typeof Sr().WorkerGlobalScope<"u"&&typeof Sr().importScripts=="function"}async function IR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function AR(){return jE()?self:null}/**
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
 */const BE="firebaseLocalStorageDb",SR=1,Yc="firebaseLocalStorage",qE="fbase_key";class Ba{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function ku(t,e){return t.transaction([Yc],e?"readwrite":"readonly").objectStore(Yc)}function kR(){const t=indexedDB.deleteDatabase(BE);return new Ba(t).toPromise()}function Tf(){const t=indexedDB.open(BE,SR);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(Yc,{keyPath:qE})}catch(i){r(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Yc)?e(n):(n.close(),await kR(),e(await Tf()))})})}async function a_(t,e,r){const n=ku(t,!0).put({[qE]:e,value:r});return new Ba(n).toPromise()}async function CR(t,e){const r=ku(t,!1).get(e),n=await new Ba(r).toPromise();return n===void 0?null:n.value}function l_(t,e){const r=ku(t,!0).delete(e);return new Ba(r).toPromise()}const RR=800,PR=3;class HE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tf(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>PR)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Su._getInstance(AR()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await IR(),!this.activeServiceWorker)return;this.sender=new ER(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((r=n[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tf();return await a_(e,Qc,"1"),await l_(e,Qc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>a_(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>CR(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>l_(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=ku(i,!1).getAll();return new Ba(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}HE.type="LOCAL";const NR=HE;new za(3e4,6e4);/**
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
 */function WE(t,e){return e?Wr(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Im extends wm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wo(e,this._buildIdpRequest())}_linkToIdToken(e,r){return wo(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return wo(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function OR(t){return VE(t.auth,new Im(t),t.bypassAuthState)}function DR(t){const{auth:e,user:r}=t;return J(r,e,"internal-error"),uR(r,new Im(t),t.bypassAuthState)}async function LR(t){const{auth:e,user:r}=t;return J(r,e,"internal-error"),cR(r,new Im(t),t.bypassAuthState)}/**
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
 */class KE{constructor(e,r,n,i,o=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:i,tenantId:o,error:s,type:l}=e;if(s){this.reject(s);return}const c={auth:this.auth,requestUri:r,sessionId:n,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OR;case"linkViaPopup":case"linkViaRedirect":return LR;case"reauthViaPopup":case"reauthViaRedirect":return DR;default:tr(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const VR=new za(2e3,1e4);async function MR(t,e,r){if(fr(t.app))return Promise.reject(gr(t,"operation-not-supported-in-this-environment"));const n=Gn(t);yC(t,e,Em);const i=WE(n,r);return new hi(n,"signInViaPopup",e,i).executeNotNull()}class hi extends KE{constructor(e,r,n,i,o){super(e,r,i,o),this.provider=n,this.authWindow=null,this.pollId=null,hi.currentPopupAction&&hi.currentPopupAction.cancel(),hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=xm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(gr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VR.get())};e()}}hi.currentPopupAction=null;/**
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
 */const $R="pendingRedirect",cc=new Map;class FR extends KE{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let e=cc.get(this.auth._key());if(!e){try{const n=await UR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}cc.set(this.auth._key(),e)}return this.bypassAuthState||cc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UR(t,e){const r=BR(e),n=jR(t);if(!await n._isAvailable())return!1;const i=await n._get(r)==="true";return await n._remove(r),i}function zR(t,e){cc.set(t._key(),e)}function jR(t){return Wr(t._redirectPersistence)}function BR(t){return lc($R,t.config.apiKey,t.name)}async function qR(t,e,r=!1){if(fr(t.app))return Promise.reject(Qr(t));const n=Gn(t),i=WE(n,e),s=await new FR(n,i,r).execute();return s&&!r&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,e)),s}/**
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
 */const HR=10*60*1e3;class WR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KR(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var n;if(e.error&&!GE(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(gr(this.auth,i))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HR&&this.cachedEventUids.clear(),this.cachedEventUids.has(c_(e))}saveEventToCache(e){this.cachedEventUids.add(c_(e)),this.lastProcessedEventTime=Date.now()}}function c_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function GE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return GE(t);default:return!1}}/**
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
 */async function GR(t,e={}){return Kn(t,"GET","/v1/projects",e)}/**
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
 */const QR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YR=/^https?/;async function XR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GR(t);for(const r of e)try{if(JR(r))return}catch{}tr(t,"unauthorized-domain")}function JR(t){const e=Ef(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&s.hostname===n}if(!YR.test(r))return!1;if(QR.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const ZR=new za(3e4,6e4);function u_(){const t=Sr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function eP(t){return new Promise((e,r)=>{var n,i,o;function s(){u_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{u_(),r(gr(t,"network-request-failed"))},timeout:ZR.get()})}if(!((i=(n=Sr().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Sr().gapi)===null||o===void 0)&&o.load)s();else{const l=WC("iframefcb");return Sr()[l]=()=>{gapi.load?s():r(gr(t,"network-request-failed"))},OE(`${HC()}?onload=${l}`).catch(c=>r(c))}}).catch(e=>{throw uc=null,e})}let uc=null;function tP(t){return uc=uc||eP(t),uc}/**
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
 */const rP=new za(5e3,15e3),nP="__/auth/iframe",iP="emulator/auth/iframe",oP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aP(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?vm(e,iP):`https://${t.config.authDomain}/${nP}`,n={apiKey:e.apiKey,appName:t.name,v:Bo},i=sP.get(t.config.apiHost);i&&(n.eid=i);const o=t._getFrameworks();return o.length&&(n.fw=o.join(",")),`${r}?${Ua(n).slice(1)}`}async function lP(t){const e=await tP(t),r=Sr().gapi;return J(r,t,"internal-error"),e.open({where:document.body,url:aP(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oP,dontclear:!0},n=>new Promise(async(i,o)=>{await n.restyle({setHideOnLeave:!1});const s=gr(t,"network-request-failed"),l=Sr().setTimeout(()=>{o(s)},rP.get());function c(){Sr().clearTimeout(l),i(n)}n.ping(c).then(c,()=>{o(s)})}))}/**
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
 */const cP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uP=500,dP=600,hP="_blank",fP="http://localhost";class d_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pP(t,e,r,n=uP,i=dP){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const c=Object.assign(Object.assign({},cP),{width:n.toString(),height:i.toString(),top:o,left:s}),u=vt().toLowerCase();r&&(l=AE(u)?hP:r),IE(u)&&(e=e||fP,c.scrollbars="yes");const h=Object.entries(c).reduce((m,[b,S])=>`${m}${b}=${S},`,"");if(VC(u)&&l!=="_self")return mP(e||"",l),new d_(null);const p=window.open(e||"",l,h);J(p,t,"popup-blocked");try{p.focus()}catch{}return new d_(p)}function mP(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const gP="__/auth/handler",vP="emulator/auth/handler",yP=encodeURIComponent("fac");async function h_(t,e,r,n,i,o){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:Bo,eventId:i};if(e instanceof Em){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",s1(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))s[h]=p}if(e instanceof Ho){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(s.scopes=h.join(","))}t.tenantId&&(s.tid=t.tenantId);const l=s;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await t._getAppCheckToken(),u=c?`#${yP}=${encodeURIComponent(c)}`:"";return`${_P(t)}?${Ua(l).slice(1)}${u}`}function _P({config:t}){return t.emulator?vm(t,vP):`https://${t.authDomain}/${gP}`}/**
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
 */const Zd="webStorageSupport";class wP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zE,this._completeRedirectFn=qR,this._overrideRedirectResult=zR}async _openPopup(e,r,n,i){var o;tn((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await h_(e,r,n,Ef(),i);return pP(e,s,xm())}async _openRedirect(e,r,n,i){await this._originValidation(e);const o=await h_(e,r,n,Ef(),i);return xR(o),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:i,promise:o}=this.eventManagers[r];return i?Promise.resolve(i):(tn(o,"If manager is not set, promise should be"),o)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(e){const r=await lP(e),n=new WR(e);return r.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(Zd,{type:Zd},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Zd];s!==void 0&&r(!!s),tr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=XR(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return PE()||TE()||_m()}}const bP=wP;var f_="@firebase/auth",p_="1.7.9";/**
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
 */class EP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function xP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IP(t){Pr(new yr("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:l}=n.options;J(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:s,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:NE(t)},u=new jC(n,i,o,c);return XC(u,r),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),Pr(new yr("auth-internal",e=>{const r=Gn(e.getProvider("auth").getImmediate());return(n=>new EP(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(f_,p_,xP(t)),Xt(f_,p_,"esm2017")}/**
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
 */const TP=5*60,AP=lE("authIdTokenMaxAge")||TP;let m_=null;const SP=t=>async e=>{const r=e&&await e.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>AP)return;const i=r==null?void 0:r.token;m_!==i&&(m_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function kP(t=fm()){const e=jo(t,"auth");if(e.isInitialized())return e.getImmediate();const r=YC(t,{popupRedirectResolver:bP,persistence:[NR,wR,zE]}),n=lE("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(n,location.origin);if(location.origin===o.origin){const s=SP(o.toString());mR(r,s,()=>s(r.currentUser)),pR(r,l=>s(l))}}const i=sE("auth");return i&&JC(r,`http://${i}`),r}function CP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}BC({loadJS(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const o=gr("internal-error");o.customData=i,r(o)},n.type="text/javascript",n.charset="UTF-8",CP().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IP("Browser");var g_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yi,QE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function _(){}_.prototype=v.prototype,w.D=v.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(x,A,k){for(var I=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)I[kt-2]=arguments[kt];return v.prototype[A].apply(x,I)}}function r(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,r),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,v,_){_||(_=0);var x=Array(16);if(typeof v=="string")for(var A=0;16>A;++A)x[A]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(A=0;16>A;++A)x[A]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=w.g[0],_=w.g[1],A=w.g[2];var k=w.g[3],I=v+(k^_&(A^k))+x[0]+3614090360&4294967295;v=_+(I<<7&4294967295|I>>>25),I=k+(A^v&(_^A))+x[1]+3905402710&4294967295,k=v+(I<<12&4294967295|I>>>20),I=A+(_^k&(v^_))+x[2]+606105819&4294967295,A=k+(I<<17&4294967295|I>>>15),I=_+(v^A&(k^v))+x[3]+3250441966&4294967295,_=A+(I<<22&4294967295|I>>>10),I=v+(k^_&(A^k))+x[4]+4118548399&4294967295,v=_+(I<<7&4294967295|I>>>25),I=k+(A^v&(_^A))+x[5]+1200080426&4294967295,k=v+(I<<12&4294967295|I>>>20),I=A+(_^k&(v^_))+x[6]+2821735955&4294967295,A=k+(I<<17&4294967295|I>>>15),I=_+(v^A&(k^v))+x[7]+4249261313&4294967295,_=A+(I<<22&4294967295|I>>>10),I=v+(k^_&(A^k))+x[8]+1770035416&4294967295,v=_+(I<<7&4294967295|I>>>25),I=k+(A^v&(_^A))+x[9]+2336552879&4294967295,k=v+(I<<12&4294967295|I>>>20),I=A+(_^k&(v^_))+x[10]+4294925233&4294967295,A=k+(I<<17&4294967295|I>>>15),I=_+(v^A&(k^v))+x[11]+2304563134&4294967295,_=A+(I<<22&4294967295|I>>>10),I=v+(k^_&(A^k))+x[12]+1804603682&4294967295,v=_+(I<<7&4294967295|I>>>25),I=k+(A^v&(_^A))+x[13]+4254626195&4294967295,k=v+(I<<12&4294967295|I>>>20),I=A+(_^k&(v^_))+x[14]+2792965006&4294967295,A=k+(I<<17&4294967295|I>>>15),I=_+(v^A&(k^v))+x[15]+1236535329&4294967295,_=A+(I<<22&4294967295|I>>>10),I=v+(A^k&(_^A))+x[1]+4129170786&4294967295,v=_+(I<<5&4294967295|I>>>27),I=k+(_^A&(v^_))+x[6]+3225465664&4294967295,k=v+(I<<9&4294967295|I>>>23),I=A+(v^_&(k^v))+x[11]+643717713&4294967295,A=k+(I<<14&4294967295|I>>>18),I=_+(k^v&(A^k))+x[0]+3921069994&4294967295,_=A+(I<<20&4294967295|I>>>12),I=v+(A^k&(_^A))+x[5]+3593408605&4294967295,v=_+(I<<5&4294967295|I>>>27),I=k+(_^A&(v^_))+x[10]+38016083&4294967295,k=v+(I<<9&4294967295|I>>>23),I=A+(v^_&(k^v))+x[15]+3634488961&4294967295,A=k+(I<<14&4294967295|I>>>18),I=_+(k^v&(A^k))+x[4]+3889429448&4294967295,_=A+(I<<20&4294967295|I>>>12),I=v+(A^k&(_^A))+x[9]+568446438&4294967295,v=_+(I<<5&4294967295|I>>>27),I=k+(_^A&(v^_))+x[14]+3275163606&4294967295,k=v+(I<<9&4294967295|I>>>23),I=A+(v^_&(k^v))+x[3]+4107603335&4294967295,A=k+(I<<14&4294967295|I>>>18),I=_+(k^v&(A^k))+x[8]+1163531501&4294967295,_=A+(I<<20&4294967295|I>>>12),I=v+(A^k&(_^A))+x[13]+2850285829&4294967295,v=_+(I<<5&4294967295|I>>>27),I=k+(_^A&(v^_))+x[2]+4243563512&4294967295,k=v+(I<<9&4294967295|I>>>23),I=A+(v^_&(k^v))+x[7]+1735328473&4294967295,A=k+(I<<14&4294967295|I>>>18),I=_+(k^v&(A^k))+x[12]+2368359562&4294967295,_=A+(I<<20&4294967295|I>>>12),I=v+(_^A^k)+x[5]+4294588738&4294967295,v=_+(I<<4&4294967295|I>>>28),I=k+(v^_^A)+x[8]+2272392833&4294967295,k=v+(I<<11&4294967295|I>>>21),I=A+(k^v^_)+x[11]+1839030562&4294967295,A=k+(I<<16&4294967295|I>>>16),I=_+(A^k^v)+x[14]+4259657740&4294967295,_=A+(I<<23&4294967295|I>>>9),I=v+(_^A^k)+x[1]+2763975236&4294967295,v=_+(I<<4&4294967295|I>>>28),I=k+(v^_^A)+x[4]+1272893353&4294967295,k=v+(I<<11&4294967295|I>>>21),I=A+(k^v^_)+x[7]+4139469664&4294967295,A=k+(I<<16&4294967295|I>>>16),I=_+(A^k^v)+x[10]+3200236656&4294967295,_=A+(I<<23&4294967295|I>>>9),I=v+(_^A^k)+x[13]+681279174&4294967295,v=_+(I<<4&4294967295|I>>>28),I=k+(v^_^A)+x[0]+3936430074&4294967295,k=v+(I<<11&4294967295|I>>>21),I=A+(k^v^_)+x[3]+3572445317&4294967295,A=k+(I<<16&4294967295|I>>>16),I=_+(A^k^v)+x[6]+76029189&4294967295,_=A+(I<<23&4294967295|I>>>9),I=v+(_^A^k)+x[9]+3654602809&4294967295,v=_+(I<<4&4294967295|I>>>28),I=k+(v^_^A)+x[12]+3873151461&4294967295,k=v+(I<<11&4294967295|I>>>21),I=A+(k^v^_)+x[15]+530742520&4294967295,A=k+(I<<16&4294967295|I>>>16),I=_+(A^k^v)+x[2]+3299628645&4294967295,_=A+(I<<23&4294967295|I>>>9),I=v+(A^(_|~k))+x[0]+4096336452&4294967295,v=_+(I<<6&4294967295|I>>>26),I=k+(_^(v|~A))+x[7]+1126891415&4294967295,k=v+(I<<10&4294967295|I>>>22),I=A+(v^(k|~_))+x[14]+2878612391&4294967295,A=k+(I<<15&4294967295|I>>>17),I=_+(k^(A|~v))+x[5]+4237533241&4294967295,_=A+(I<<21&4294967295|I>>>11),I=v+(A^(_|~k))+x[12]+1700485571&4294967295,v=_+(I<<6&4294967295|I>>>26),I=k+(_^(v|~A))+x[3]+2399980690&4294967295,k=v+(I<<10&4294967295|I>>>22),I=A+(v^(k|~_))+x[10]+4293915773&4294967295,A=k+(I<<15&4294967295|I>>>17),I=_+(k^(A|~v))+x[1]+2240044497&4294967295,_=A+(I<<21&4294967295|I>>>11),I=v+(A^(_|~k))+x[8]+1873313359&4294967295,v=_+(I<<6&4294967295|I>>>26),I=k+(_^(v|~A))+x[15]+4264355552&4294967295,k=v+(I<<10&4294967295|I>>>22),I=A+(v^(k|~_))+x[6]+2734768916&4294967295,A=k+(I<<15&4294967295|I>>>17),I=_+(k^(A|~v))+x[13]+1309151649&4294967295,_=A+(I<<21&4294967295|I>>>11),I=v+(A^(_|~k))+x[4]+4149444226&4294967295,v=_+(I<<6&4294967295|I>>>26),I=k+(_^(v|~A))+x[11]+3174756917&4294967295,k=v+(I<<10&4294967295|I>>>22),I=A+(v^(k|~_))+x[2]+718787259&4294967295,A=k+(I<<15&4294967295|I>>>17),I=_+(k^(A|~v))+x[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+k&4294967295}n.prototype.u=function(w,v){v===void 0&&(v=w.length);for(var _=v-this.blockSize,x=this.B,A=this.h,k=0;k<v;){if(A==0)for(;k<=_;)i(this,w,k),k+=this.blockSize;if(typeof w=="string"){for(;k<v;)if(x[A++]=w.charCodeAt(k++),A==this.blockSize){i(this,x),A=0;break}}else for(;k<v;)if(x[A++]=w[k++],A==this.blockSize){i(this,x),A=0;break}}this.h=A,this.o+=v},n.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;var _=8*this.o;for(v=w.length-8;v<w.length;++v)w[v]=_&255,_/=256;for(this.u(w),w=Array(16),v=_=0;4>v;++v)for(var x=0;32>x;x+=8)w[_++]=this.g[v]>>>x&255;return w};function o(w,v){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=v(w)}function s(w,v){this.h=v;for(var _=[],x=!0,A=w.length-1;0<=A;A--){var k=w[A]|0;x&&k==v||(_[A]=k,x=!1)}this.g=_}var l={};function c(w){return-128<=w&&128>w?o(w,function(v){return new s([v|0],0>v?-1:0)}):new s([w|0],0>w?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return N(u(-w));for(var v=[],_=1,x=0;w>=_;x++)v[x]=w/_|0,_*=4294967296;return new s(v,0)}function h(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return N(h(w.substring(1),v));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(v,8)),x=p,A=0;A<w.length;A+=8){var k=Math.min(8,w.length-A),I=parseInt(w.substring(A,A+k),v);8>k?(k=u(Math.pow(v,k)),x=x.j(k).add(u(I))):(x=x.j(_),x=x.add(u(I)))}return x}var p=c(0),m=c(1),b=c(16777216);t=s.prototype,t.m=function(){if(P(this))return-N(this).m();for(var w=0,v=1,_=0;_<this.g.length;_++){var x=this.i(_);w+=(0<=x?x:4294967296+x)*v,v*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(P(this))return"-"+N(this).toString(w);for(var v=u(Math.pow(w,6)),_=this,x="";;){var A=D(_,v).g;_=E(_,A.j(v));var k=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=A,S(_))return k+x;for(;6>k.length;)k="0"+k;x=k+x}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(var v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function P(w){return w.h==-1}t.l=function(w){return w=E(this,w),P(w)?-1:S(w)?0:1};function N(w){for(var v=w.g.length,_=[],x=0;x<v;x++)_[x]=~w.g[x];return new s(_,~w.h).add(m)}t.abs=function(){return P(this)?N(this):this},t.add=function(w){for(var v=Math.max(this.g.length,w.g.length),_=[],x=0,A=0;A<=v;A++){var k=x+(this.i(A)&65535)+(w.i(A)&65535),I=(k>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);x=I>>>16,k&=65535,I&=65535,_[A]=I<<16|k}return new s(_,_[_.length-1]&-2147483648?-1:0)};function E(w,v){return w.add(N(v))}t.j=function(w){if(S(this)||S(w))return p;if(P(this))return P(w)?N(this).j(N(w)):N(N(this).j(w));if(P(w))return N(this.j(N(w)));if(0>this.l(b)&&0>w.l(b))return u(this.m()*w.m());for(var v=this.g.length+w.g.length,_=[],x=0;x<2*v;x++)_[x]=0;for(x=0;x<this.g.length;x++)for(var A=0;A<w.g.length;A++){var k=this.i(x)>>>16,I=this.i(x)&65535,kt=w.i(A)>>>16,wr=w.i(A)&65535;_[2*x+2*A]+=I*wr,y(_,2*x+2*A),_[2*x+2*A+1]+=k*wr,y(_,2*x+2*A+1),_[2*x+2*A+1]+=I*kt,y(_,2*x+2*A+1),_[2*x+2*A+2]+=k*kt,y(_,2*x+2*A+2)}for(x=0;x<v;x++)_[x]=_[2*x+1]<<16|_[2*x];for(x=v;x<2*v;x++)_[x]=0;return new s(_,0)};function y(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function T(w,v){this.g=w,this.h=v}function D(w,v){if(S(v))throw Error("division by zero");if(S(w))return new T(p,p);if(P(w))return v=D(N(w),v),new T(N(v.g),N(v.h));if(P(v))return v=D(w,N(v)),new T(N(v.g),v.h);if(30<w.g.length){if(P(w)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var _=m,x=v;0>=x.l(w);)_=U(_),x=U(x);var A=z(_,1),k=z(x,1);for(x=z(x,2),_=z(_,2);!S(x);){var I=k.add(x);0>=I.l(w)&&(A=A.add(_),k=I),x=z(x,1),_=z(_,1)}return v=E(w,A.j(v)),new T(A,v)}for(A=p;0<=w.l(v);){for(_=Math.max(1,Math.floor(w.m()/v.m())),x=Math.ceil(Math.log(_)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),k=u(_),I=k.j(v);P(I)||0<I.l(w);)_-=x,k=u(_),I=k.j(v);S(k)&&(k=m),A=A.add(k),w=E(w,I)}return new T(A,w)}t.A=function(w){return D(this,w).h},t.and=function(w){for(var v=Math.max(this.g.length,w.g.length),_=[],x=0;x<v;x++)_[x]=this.i(x)&w.i(x);return new s(_,this.h&w.h)},t.or=function(w){for(var v=Math.max(this.g.length,w.g.length),_=[],x=0;x<v;x++)_[x]=this.i(x)|w.i(x);return new s(_,this.h|w.h)},t.xor=function(w){for(var v=Math.max(this.g.length,w.g.length),_=[],x=0;x<v;x++)_[x]=this.i(x)^w.i(x);return new s(_,this.h^w.h)};function U(w){for(var v=w.g.length+1,_=[],x=0;x<v;x++)_[x]=w.i(x)<<1|w.i(x-1)>>>31;return new s(_,w.h)}function z(w,v){var _=v>>5;v%=32;for(var x=w.g.length-_,A=[],k=0;k<x;k++)A[k]=0<v?w.i(k+_)>>>v|w.i(k+_+1)<<32-v:w.i(k+_);return new s(A,w.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,QE=n,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=u,s.fromString=h,yi=s}).apply(typeof g_<"u"?g_:typeof self<"u"?self:typeof window<"u"?window:{});var Ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var YE,Ps,XE,dc,Af,JE,ZE,ex;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,f){return a==Array.prototype||a==Object.prototype||(a[d]=f.value),a};function r(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ll=="object"&&Ll];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=r(this);function i(a,d){if(d)e:{var f=n;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in f))break e;f=f[C]}a=a[a.length-1],g=f[a],d=d(g),d!=g&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}function o(a,d){a instanceof String&&(a+="");var f=0,g=!1,C={next:function(){if(!g&&f<a.length){var O=f++;return{value:d(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(a){return a||function(){return o(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},l=this||self;function c(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,f){return a.call.apply(a.bind,arguments)}function p(a,d,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(d,C)}}return function(){return a.apply(d,arguments)}}function m(a,d,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,m.apply(null,arguments)}function b(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function S(a,d){function f(){}f.prototype=d.prototype,a.aa=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,C,O){for(var j=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)j[ve-2]=arguments[ve];return d.prototype[C].apply(g,j)}}function P(a){const d=a.length;if(0<d){const f=Array(d);for(let g=0;g<d;g++)f[g]=a[g];return f}return[]}function N(a,d){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const C=a.length||0,O=g.length||0;a.length=C+O;for(let j=0;j<O;j++)a[C+j]=g[j]}else a.push(g)}}class E{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function y(a){return/^[\s\xa0]*$/.test(a)}function T(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var U=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function z(a,d,f){for(const g in a)d.call(f,a[g],g,a)}function w(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function v(a){const d={};for(const f in a)d[f]=a[f];return d}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(a,d){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)a[f]=g[f];for(let O=0;O<_.length;O++)f=_[O],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function A(a){var d=1;a=a.split(":");const f=[];for(;0<d&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function k(a){l.setTimeout(()=>{throw a},0)}function I(){var a=Z;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class kt{constructor(){this.h=this.g=null}add(d,f){const g=wr.get();g.set(d,f),this.h?this.h.next=g:this.g=g,this.h=g}}var wr=new E(()=>new Jn,a=>a.reset());class Jn{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let rr,H=!1,Z=new kt,ne=()=>{const a=l.Promise.resolve(void 0);rr=()=>{a.then(_e)}};var _e=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(f){k(f)}var d=wr;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}H=!1};function pe(){this.s=this.s,this.C=this.C}pe.prototype.s=!1,pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ae(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var qt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,d),l.removeEventListener("test",f,d)}catch{}return a}();function nr(a,d){if(Ae.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(U){e:{try{D(d.nodeName);var C=!0;break e}catch{}C=!1}C||(d=null)}}else f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ir[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&nr.aa.h.call(this)}}S(nr,Ae);var ir={2:"touch",3:"pen",4:"mouse"};nr.prototype.h=function(){nr.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var q="closure_listenable_"+(1e6*Math.random()|0),he=0;function or(a,d,f,g,C){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!g,this.ha=C,this.key=++he,this.da=this.fa=!1}function ji(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Bi(a){this.src=a,this.g={},this.h=0}Bi.prototype.add=function(a,d,f,g,C){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var j=sr(a,d,g,C);return-1<j?(d=a[j],f||(d.fa=!1)):(d=new or(d,this.src,O,!!g,C),d.fa=f,a.push(d)),d};function Jo(a,d){var f=d.type;if(f in a.g){var g=a.g[f],C=Array.prototype.indexOf.call(g,d,void 0),O;(O=0<=C)&&Array.prototype.splice.call(g,C,1),O&&(ji(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function sr(a,d,f,g){for(var C=0;C<a.length;++C){var O=a[C];if(!O.da&&O.listener==d&&O.capture==!!f&&O.ha==g)return C}return-1}var Qe="closure_lm_"+(1e6*Math.random()|0),Zu={};function Ag(a,d,f,g,C){if(Array.isArray(d)){for(var O=0;O<d.length;O++)Ag(a,d[O],f,g,C);return null}return f=Cg(f),a&&a[q]?a.K(d,f,u(g)?!!g.capture:!1,C):aT(a,d,f,!1,g,C)}function aT(a,d,f,g,C,O){if(!d)throw Error("Invalid event type");var j=u(C)?!!C.capture:!!C,ve=td(a);if(ve||(a[Qe]=ve=new Bi(a)),f=ve.add(d,f,g,j,O),f.proxy)return f;if(g=lT(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)qt||(C=j),C===void 0&&(C=!1),a.addEventListener(d.toString(),g,C);else if(a.attachEvent)a.attachEvent(kg(d.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function lT(){function a(f){return d.call(a.src,a.listener,f)}const d=cT;return a}function Sg(a,d,f,g,C){if(Array.isArray(d))for(var O=0;O<d.length;O++)Sg(a,d[O],f,g,C);else g=u(g)?!!g.capture:!!g,f=Cg(f),a&&a[q]?(a=a.i,d=String(d).toString(),d in a.g&&(O=a.g[d],f=sr(O,f,g,C),-1<f&&(ji(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[d],a.h--)))):a&&(a=td(a))&&(d=a.g[d.toString()],a=-1,d&&(a=sr(d,f,g,C)),(f=-1<a?d[a]:null)&&ed(f))}function ed(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[q])Jo(d.i,a);else{var f=a.type,g=a.proxy;d.removeEventListener?d.removeEventListener(f,g,a.capture):d.detachEvent?d.detachEvent(kg(f),g):d.addListener&&d.removeListener&&d.removeListener(g),(f=td(d))?(Jo(f,a),f.h==0&&(f.src=null,d[Qe]=null)):ji(a)}}}function kg(a){return a in Zu?Zu[a]:Zu[a]="on"+a}function cT(a,d){if(a.da)a=!0;else{d=new nr(d,this);var f=a.listener,g=a.ha||a.src;a.fa&&ed(a),a=f.call(g,d)}return a}function td(a){return a=a[Qe],a instanceof Bi?a:null}var rd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cg(a){return typeof a=="function"?a:(a[rd]||(a[rd]=function(d){return a.handleEvent(d)}),a[rd])}function st(){pe.call(this),this.i=new Bi(this),this.M=this,this.F=null}S(st,pe),st.prototype[q]=!0,st.prototype.removeEventListener=function(a,d,f,g){Sg(this,a,d,f,g)};function yt(a,d){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=d.type||d,typeof d=="string")d=new Ae(d,a);else if(d instanceof Ae)d.target=d.target||a;else{var C=d;d=new Ae(g,a),x(d,C)}if(C=!0,f)for(var O=f.length-1;0<=O;O--){var j=d.g=f[O];C=tl(j,g,!0,d)&&C}if(j=d.g=a,C=tl(j,g,!0,d)&&C,C=tl(j,g,!1,d)&&C,f)for(O=0;O<f.length;O++)j=d.g=f[O],C=tl(j,g,!1,d)&&C}st.prototype.N=function(){if(st.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var f=a.g[d],g=0;g<f.length;g++)ji(f[g]);delete a.g[d],a.h--}}this.F=null},st.prototype.K=function(a,d,f,g){return this.i.add(String(a),d,!1,f,g)},st.prototype.L=function(a,d,f,g){return this.i.add(String(a),d,!0,f,g)};function tl(a,d,f,g){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var C=!0,O=0;O<d.length;++O){var j=d[O];if(j&&!j.da&&j.capture==f){var ve=j.listener,Ye=j.ha||j.src;j.fa&&Jo(a.i,j),C=ve.call(Ye,g)!==!1&&C}}return C&&!g.defaultPrevented}function Rg(a,d,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function Pg(a){a.g=Rg(()=>{a.g=null,a.i&&(a.i=!1,Pg(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class uT extends pe{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Pg(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zo(a){pe.call(this),this.h=a,this.g={}}S(Zo,pe);var Ng=[];function Og(a){z(a.g,function(d,f){this.g.hasOwnProperty(f)&&ed(d)},a),a.g={}}Zo.prototype.N=function(){Zo.aa.N.call(this),Og(this)},Zo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nd=l.JSON.stringify,dT=l.JSON.parse,hT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function id(){}id.prototype.h=null;function Dg(a){return a.h||(a.h=a.i())}function Lg(){}var es={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function od(){Ae.call(this,"d")}S(od,Ae);function sd(){Ae.call(this,"c")}S(sd,Ae);var Zn={},Vg=null;function rl(){return Vg=Vg||new st}Zn.La="serverreachability";function Mg(a){Ae.call(this,Zn.La,a)}S(Mg,Ae);function ts(a){const d=rl();yt(d,new Mg(d))}Zn.STAT_EVENT="statevent";function $g(a,d){Ae.call(this,Zn.STAT_EVENT,a),this.stat=d}S($g,Ae);function _t(a){const d=rl();yt(d,new $g(d,a))}Zn.Ma="timingevent";function Fg(a,d){Ae.call(this,Zn.Ma,a),this.size=d}S(Fg,Ae);function rs(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function ns(){this.g=!0}ns.prototype.xa=function(){this.g=!1};function fT(a,d,f,g,C,O){a.info(function(){if(a.g)if(O)for(var j="",ve=O.split("&"),Ye=0;Ye<ve.length;Ye++){var ue=ve[Ye].split("=");if(1<ue.length){var at=ue[0];ue=ue[1];var lt=at.split("_");j=2<=lt.length&&lt[1]=="type"?j+(at+"="+ue+"&"):j+(at+"=redacted&")}}else j=null;else j=O;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+d+`
`+f+`
`+j})}function pT(a,d,f,g,C,O,j){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+d+`
`+f+`
`+O+" "+j})}function qi(a,d,f,g){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+gT(a,f)+(g?" "+g:"")})}function mT(a,d){a.info(function(){return"TIMEOUT: "+d})}ns.prototype.info=function(){};function gT(a,d){if(!a.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var O=C[0];if(O!="noop"&&O!="stop"&&O!="close")for(var j=1;j<C.length;j++)C[j]=""}}}}return nd(f)}catch{return d}}var nl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ug={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ad;function il(){}S(il,id),il.prototype.g=function(){return new XMLHttpRequest},il.prototype.i=function(){return{}},ad=new il;function un(a,d,f,g){this.j=a,this.i=d,this.l=f,this.R=g||1,this.U=new Zo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zg}function zg(){this.i=null,this.g="",this.h=!1}var jg={},ld={};function cd(a,d,f){a.L=1,a.v=ll(Dr(d)),a.m=f,a.P=!0,Bg(a,null)}function Bg(a,d){a.F=Date.now(),ol(a),a.A=Dr(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),nv(f.i,"t",g),a.C=0,f=a.j.J,a.h=new zg,a.g=bv(a.j,f?d:null,!a.m),0<a.O&&(a.M=new uT(m(a.Y,a,a.g),a.O)),d=a.U,f=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Ng[0]=C.toString()),C=Ng);for(var O=0;O<C.length;O++){var j=Ag(f,C[O],g||d.handleEvent,!1,d.h||d);if(!j)break;d.g[j.key]=j}d=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),ts(),fT(a.i,a.u,a.A,a.l,a.R,a.m)}un.prototype.ca=function(a){a=a.target;const d=this.M;d&&Lr(a)==3?d.j():this.Y(a)},un.prototype.Y=function(a){try{if(a==this.g)e:{const lt=Lr(this.g);var d=this.g.Ba();const Ki=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||uv(this.g)))){this.J||lt!=4||d==7||(d==8||0>=Ki?ts(3):ts(2)),ud(this);var f=this.g.Z();this.X=f;t:if(qg(this)){var g=uv(this.g);a="";var C=g.length,O=Lr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ei(this),is(this);var j="";break t}this.h.i=new l.TextDecoder}for(d=0;d<C;d++)this.h.h=!0,a+=this.h.i.decode(g[d],{stream:!(O&&d==C-1)});g.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=f==200,pT(this.i,this.u,this.A,this.l,this.R,lt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,Ye=this.g;if((ve=Ye.g?Ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(ve)){var ue=ve;break t}}ue=null}if(f=ue)qi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dd(this,f);else{this.o=!1,this.s=3,_t(12),ei(this),is(this);break e}}if(this.P){f=!0;let ar;for(;!this.J&&this.C<j.length;)if(ar=vT(this,j),ar==ld){lt==4&&(this.s=4,_t(14),f=!1),qi(this.i,this.l,null,"[Incomplete Response]");break}else if(ar==jg){this.s=4,_t(15),qi(this.i,this.l,j,"[Invalid Chunk]"),f=!1;break}else qi(this.i,this.l,ar,null),dd(this,ar);if(qg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||j.length!=0||this.h.h||(this.s=1,_t(16),f=!1),this.o=this.o&&f,!f)qi(this.i,this.l,j,"[Invalid Chunked Response]"),ei(this),is(this);else if(0<j.length&&!this.W){this.W=!0;var at=this.j;at.g==this&&at.ba&&!at.M&&(at.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),vd(at),at.M=!0,_t(11))}}else qi(this.i,this.l,j,null),dd(this,j);lt==4&&ei(this),this.o&&!this.J&&(lt==4?vv(this.j,this):(this.o=!1,ol(this)))}else DT(this.g),f==400&&0<j.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),ei(this),is(this)}}}catch{}finally{}};function qg(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function vT(a,d){var f=a.C,g=d.indexOf(`
`,f);return g==-1?ld:(f=Number(d.substring(f,g)),isNaN(f)?jg:(g+=1,g+f>d.length?ld:(d=d.slice(g,g+f),a.C=g+f,d)))}un.prototype.cancel=function(){this.J=!0,ei(this)};function ol(a){a.S=Date.now()+a.I,Hg(a,a.I)}function Hg(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=rs(m(a.ba,a),d)}function ud(a){a.B&&(l.clearTimeout(a.B),a.B=null)}un.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(mT(this.i,this.A),this.L!=2&&(ts(),_t(17)),ei(this),this.s=2,is(this)):Hg(this,this.S-a)};function is(a){a.j.G==0||a.J||vv(a.j,a)}function ei(a){ud(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Og(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function dd(a,d){try{var f=a.j;if(f.G!=0&&(f.g==a||hd(f.h,a))){if(!a.K&&hd(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)pl(f),hl(f);else break e;gd(f),_t(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=rs(m(f.Za,f),6e3));if(1>=Gg(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else ri(f,11)}else if((a.K||f.g==a)&&pl(f),!y(d))for(C=f.Da.g.parse(d),d=0;d<C.length;d++){let ue=C[d];if(f.T=ue[0],ue=ue[1],f.G==2)if(ue[0]=="c"){f.K=ue[1],f.ia=ue[2];const at=ue[3];at!=null&&(f.la=at,f.j.info("VER="+f.la));const lt=ue[4];lt!=null&&(f.Aa=lt,f.j.info("SVER="+f.Aa));const Ki=ue[5];Ki!=null&&typeof Ki=="number"&&0<Ki&&(g=1.5*Ki,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const ar=a.g;if(ar){const gl=ar.g?ar.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gl){var O=g.h;O.g||gl.indexOf("spdy")==-1&&gl.indexOf("quic")==-1&&gl.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(fd(O,O.h),O.h=null))}if(g.D){const yd=ar.g?ar.g.getResponseHeader("X-HTTP-Session-Id"):null;yd&&(g.ya=yd,we(g.I,g.D,yd))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var j=a;if(g.qa=wv(g,g.J?g.ia:null,g.W),j.K){Qg(g.h,j);var ve=j,Ye=g.L;Ye&&(ve.I=Ye),ve.B&&(ud(ve),ol(ve)),g.g=j}else mv(g);0<f.i.length&&fl(f)}else ue[0]!="stop"&&ue[0]!="close"||ri(f,7);else f.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?ri(f,7):md(f):ue[0]!="noop"&&f.l&&f.l.ta(ue),f.v=0)}}ts(4)}catch{}}var yT=class{constructor(a,d){this.g=a,this.map=d}};function Wg(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Kg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Gg(a){return a.h?1:a.g?a.g.size:0}function hd(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function fd(a,d){a.g?a.g.add(d):a.h=d}function Qg(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Wg.prototype.cancel=function(){if(this.i=Yg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Yg(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.D);return d}return P(a.i)}function _T(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var d=[],f=a.length,g=0;g<f;g++)d.push(a[g]);return d}d=[],f=0;for(g in a)d[f++]=a[g];return d}function wT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var d=[];a=a.length;for(var f=0;f<a;f++)d.push(f);return d}d=[],f=0;for(const g in a)d[f++]=g;return d}}}function Xg(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var f=wT(a),g=_T(a),C=g.length,O=0;O<C;O++)d.call(void 0,g[O],f&&f[O],a)}var Jg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bT(a,d){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),C=null;if(0<=g){var O=a[f].substring(0,g);C=a[f].substring(g+1)}else O=a[f];d(O,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function ti(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ti){this.h=a.h,sl(this,a.j),this.o=a.o,this.g=a.g,al(this,a.s),this.l=a.l;var d=a.i,f=new as;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),Zg(this,f),this.m=a.m}else a&&(d=String(a).match(Jg))?(this.h=!1,sl(this,d[1]||"",!0),this.o=os(d[2]||""),this.g=os(d[3]||"",!0),al(this,d[4]),this.l=os(d[5]||"",!0),Zg(this,d[6]||"",!0),this.m=os(d[7]||"")):(this.h=!1,this.i=new as(null,this.h))}ti.prototype.toString=function(){var a=[],d=this.j;d&&a.push(ss(d,ev,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(ss(d,ev,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ss(f,f.charAt(0)=="/"?IT:xT,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ss(f,AT)),a.join("")};function Dr(a){return new ti(a)}function sl(a,d,f){a.j=f?os(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function al(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Zg(a,d,f){d instanceof as?(a.i=d,ST(a.i,a.h)):(f||(d=ss(d,TT)),a.i=new as(d,a.h))}function we(a,d,f){a.i.set(d,f)}function ll(a){return we(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function os(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ss(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,ET),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ET(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ev=/[#\/\?@]/g,xT=/[#\?:]/g,IT=/[#\?]/g,TT=/[#\?@]/g,AT=/#/g;function as(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function dn(a){a.g||(a.g=new Map,a.h=0,a.i&&bT(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}t=as.prototype,t.add=function(a,d){dn(this),this.i=null,a=Hi(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function tv(a,d){dn(a),d=Hi(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function rv(a,d){return dn(a),d=Hi(a,d),a.g.has(d)}t.forEach=function(a,d){dn(this),this.g.forEach(function(f,g){f.forEach(function(C){a.call(d,C,g,this)},this)},this)},t.na=function(){dn(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let g=0;g<d.length;g++){const C=a[g];for(let O=0;O<C.length;O++)f.push(d[g])}return f},t.V=function(a){dn(this);let d=[];if(typeof a=="string")rv(this,a)&&(d=d.concat(this.g.get(Hi(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)d=d.concat(a[f])}return d},t.set=function(a,d){return dn(this),this.i=null,a=Hi(this,a),rv(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function nv(a,d,f){tv(a,d),0<f.length&&(a.i=null,a.g.set(Hi(a,d),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var g=d[f];const O=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var C=O;j[g]!==""&&(C+="="+encodeURIComponent(String(j[g]))),a.push(C)}}return this.i=a.join("&")};function Hi(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function ST(a,d){d&&!a.j&&(dn(a),a.i=null,a.g.forEach(function(f,g){var C=g.toLowerCase();g!=C&&(tv(this,g),nv(this,C,f))},a)),a.j=d}function kT(a,d){const f=new ns;if(l.Image){const g=new Image;g.onload=b(hn,f,"TestLoadImage: loaded",!0,d,g),g.onerror=b(hn,f,"TestLoadImage: error",!1,d,g),g.onabort=b(hn,f,"TestLoadImage: abort",!1,d,g),g.ontimeout=b(hn,f,"TestLoadImage: timeout",!1,d,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else d(!1)}function CT(a,d){const f=new ns,g=new AbortController,C=setTimeout(()=>{g.abort(),hn(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(C),O.ok?hn(f,"TestPingServer: ok",!0,d):hn(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(C),hn(f,"TestPingServer: error",!1,d)})}function hn(a,d,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function RT(){this.g=new hT}function PT(a,d,f){const g=f||"";try{Xg(a,function(C,O){let j=C;u(C)&&(j=nd(C)),d.push(g+O+"="+encodeURIComponent(j))})}catch(C){throw d.push(g+"type="+encodeURIComponent("_badmap")),C}}function cl(a){this.l=a.Ub||null,this.j=a.eb||!1}S(cl,id),cl.prototype.g=function(){return new ul(this.l,this.j)},cl.prototype.i=function(a){return function(){return a}}({});function ul(a,d){st.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(ul,st),t=ul.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,cs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ls(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,cs(this)),this.g&&(this.readyState=3,cs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;iv(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function iv(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?ls(this):cs(this),this.readyState==3&&iv(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ls(this))},t.Qa=function(a){this.g&&(this.response=a,ls(this))},t.ga=function(){this.g&&ls(this)};function ls(a){a.readyState=4,a.l=null,a.j=null,a.v=null,cs(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function cs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ul.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ov(a){let d="";return z(a,function(f,g){d+=g,d+=":",d+=f,d+=`\r
`}),d}function pd(a,d,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=ov(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):we(a,d,f))}function Pe(a){st.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Pe,st);var NT=/^https?$/i,OT=["POST","PUT"];t=Pe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ad.g(),this.v=this.o?Dg(this.o):Dg(ad),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(O){sv(this,O);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())f.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(OT,d,void 0))||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,j]of f)this.g.setRequestHeader(O,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cv(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){sv(this,O)}};function sv(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,av(a),dl(a)}function av(a){a.A||(a.A=!0,yt(a,"complete"),yt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,yt(this,"complete"),yt(this,"abort"),dl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dl(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?lv(this):this.bb())},t.bb=function(){lv(this)};function lv(a){if(a.h&&typeof s<"u"&&(!a.v[1]||Lr(a)!=4||a.Z()!=2)){if(a.u&&Lr(a)==4)Rg(a.Ea,0,a);else if(yt(a,"readystatechange"),Lr(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var g;if(g=j===0){var C=String(a.D).match(Jg)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),g=!NT.test(C?C.toLowerCase():"")}f=g}if(f)yt(a,"complete"),yt(a,"success");else{a.m=6;try{var O=2<Lr(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",av(a)}}finally{dl(a)}}}}function dl(a,d){if(a.g){cv(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||yt(a,"ready");try{f.onreadystatechange=g}catch{}}}function cv(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Lr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Lr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),dT(d)}};function uv(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function DT(a){const d={};a=(a.g&&2<=Lr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var f=A(a[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=d[C]||[];d[C]=O,O.push(f)}w(d,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function us(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function dv(a){this.Aa=0,this.i=[],this.j=new ns,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=us("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=us("baseRetryDelayMs",5e3,a),this.cb=us("retryDelaySeedMs",1e4,a),this.Wa=us("forwardChannelMaxRetries",2,a),this.wa=us("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Wg(a&&a.concurrentRequestLimit),this.Da=new RT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=dv.prototype,t.la=8,t.G=1,t.connect=function(a,d,f,g){_t(0),this.W=a,this.H=d||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=wv(this,null,this.W),fl(this)};function md(a){if(hv(a),a.G==3){var d=a.U++,f=Dr(a.I);if(we(f,"SID",a.K),we(f,"RID",d),we(f,"TYPE","terminate"),ds(a,f),d=new un(a,a.j,d),d.L=2,d.v=ll(Dr(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=d.v,f=!0),f||(d.g=bv(d.j,null),d.g.ea(d.v)),d.F=Date.now(),ol(d)}_v(a)}function hl(a){a.g&&(vd(a),a.g.cancel(),a.g=null)}function hv(a){hl(a),a.u&&(l.clearTimeout(a.u),a.u=null),pl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function fl(a){if(!Kg(a.h)&&!a.s){a.s=!0;var d=a.Ga;rr||ne(),H||(rr(),H=!0),Z.add(d,a),a.B=0}}function LT(a,d){return Gg(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=rs(m(a.Ga,a,d),yv(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new un(this,this.j,a);let O=this.o;if(this.S&&(O?(O=v(O),x(O,this.S)):O=this.S),this.m!==null||this.O||(C.H=O,O=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=pv(this,C,d),f=Dr(this.I),we(f,"RID",a),we(f,"CVER",22),this.D&&we(f,"X-HTTP-Session-Id",this.D),ds(this,f),O&&(this.O?d="headers="+encodeURIComponent(String(ov(O)))+"&"+d:this.m&&pd(f,this.m,O)),fd(this.h,C),this.Ua&&we(f,"TYPE","init"),this.P?(we(f,"$req",d),we(f,"SID","null"),C.T=!0,cd(C,f,null)):cd(C,f,d),this.G=2}}else this.G==3&&(a?fv(this,a):this.i.length==0||Kg(this.h)||fv(this))};function fv(a,d){var f;d?f=d.l:f=a.U++;const g=Dr(a.I);we(g,"SID",a.K),we(g,"RID",f),we(g,"AID",a.T),ds(a,g),a.m&&a.o&&pd(g,a.m,a.o),f=new un(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),d&&(a.i=d.D.concat(a.i)),d=pv(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),fd(a.h,f),cd(f,g,d)}function ds(a,d){a.H&&z(a.H,function(f,g){we(d,g,f)}),a.l&&Xg({},function(f,g){we(d,g,f)})}function pv(a,d,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var C=a.i;let O=-1;for(;;){const j=["count="+f];O==-1?0<f?(O=C[0].g,j.push("ofs="+O)):O=0:j.push("ofs="+O);let ve=!0;for(let Ye=0;Ye<f;Ye++){let ue=C[Ye].g;const at=C[Ye].map;if(ue-=O,0>ue)O=Math.max(0,C[Ye].g-100),ve=!1;else try{PT(at,j,"req"+ue+"_")}catch{g&&g(at)}}if(ve){g=j.join("&");break e}}}return a=a.i.splice(0,f),d.D=a,g}function mv(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;rr||ne(),H||(rr(),H=!0),Z.add(d,a),a.v=0}}function gd(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=rs(m(a.Fa,a),yv(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,gv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=rs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),hl(this),gv(this))};function vd(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function gv(a){a.g=new un(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Dr(a.qa);we(d,"RID","rpc"),we(d,"SID",a.K),we(d,"AID",a.T),we(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&we(d,"TO",a.ja),we(d,"TYPE","xmlhttp"),ds(a,d),a.m&&a.o&&pd(d,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ll(Dr(d)),f.m=null,f.P=!0,Bg(f,a)}t.Za=function(){this.C!=null&&(this.C=null,hl(this),gd(this),_t(19))};function pl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function vv(a,d){var f=null;if(a.g==d){pl(a),vd(a),a.g=null;var g=2}else if(hd(a.h,d))f=d.D,Qg(a.h,d),g=1;else return;if(a.G!=0){if(d.o)if(g==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var C=a.B;g=rl(),yt(g,new Fg(g,f)),fl(a)}else mv(a);else if(C=d.s,C==3||C==0&&0<d.X||!(g==1&&LT(a,d)||g==2&&gd(a)))switch(f&&0<f.length&&(d=a.h,d.i=d.i.concat(f)),C){case 1:ri(a,5);break;case 4:ri(a,10);break;case 3:ri(a,6);break;default:ri(a,2)}}}function yv(a,d){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*d}function ri(a,d){if(a.j.info("Error code "+d),d==2){var f=m(a.fb,a),g=a.Xa;const C=!g;g=new ti(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||sl(g,"https"),ll(g),C?kT(g.toString(),f):CT(g.toString(),f)}else _t(2);a.G=0,a.l&&a.l.sa(d),_v(a),hv(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function _v(a){if(a.G=0,a.ka=[],a.l){const d=Yg(a.h);(d.length!=0||a.i.length!=0)&&(N(a.ka,d),N(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function wv(a,d,f){var g=f instanceof ti?Dr(f):new ti(f);if(g.g!="")d&&(g.g=d+"."+g.g),al(g,g.s);else{var C=l.location;g=C.protocol,d=d?d+"."+C.hostname:C.hostname,C=+C.port;var O=new ti(null);g&&sl(O,g),d&&(O.g=d),C&&al(O,C),f&&(O.l=f),g=O}return f=a.D,d=a.ya,f&&d&&we(g,f,d),we(g,"VER",a.la),ds(a,g),g}function bv(a,d,f){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Pe(new cl({eb:f})):new Pe(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ev(){}t=Ev.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ml(){}ml.prototype.g=function(a,d){return new Lt(a,d)};function Lt(a,d){st.call(this),this.g=new dv(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!y(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!y(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Wi(this)}S(Lt,st),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){md(this.g)},Lt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=nd(a),a=f);d.i.push(new yT(d.Ya++,a)),d.G==3&&fl(d)},Lt.prototype.N=function(){this.g.l=null,delete this.j,md(this.g),delete this.g,Lt.aa.N.call(this)};function xv(a){od.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}S(xv,od);function Iv(){sd.call(this),this.status=1}S(Iv,sd);function Wi(a){this.g=a}S(Wi,Ev),Wi.prototype.ua=function(){yt(this.g,"a")},Wi.prototype.ta=function(a){yt(this.g,new xv(a))},Wi.prototype.sa=function(a){yt(this.g,new Iv)},Wi.prototype.ra=function(){yt(this.g,"b")},ml.prototype.createWebChannel=ml.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,ex=function(){return new ml},ZE=function(){return rl()},JE=Zn,Af={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},nl.NO_ERROR=0,nl.TIMEOUT=8,nl.HTTP_ERROR=6,dc=nl,Ug.COMPLETE="complete",XE=Ug,Lg.EventType=es,es.OPEN="a",es.CLOSE="b",es.ERROR="c",es.MESSAGE="d",st.prototype.listen=st.prototype.K,Ps=Lg,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,YE=Pe}).apply(typeof Ll<"u"?Ll:typeof self<"u"?self:typeof window<"u"?window:{});const v_="@firebase/firestore";/**
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
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
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
 */let Wo="10.14.0";/**
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
 */const ki=new dm("@firebase/firestore");function ws(){return ki.logLevel}function Y(t,...e){if(ki.logLevel<=ae.DEBUG){const r=e.map(Tm);ki.debug(`Firestore (${Wo}): ${t}`,...r)}}function nn(t,...e){if(ki.logLevel<=ae.ERROR){const r=e.map(Tm);ki.error(`Firestore (${Wo}): ${t}`,...r)}}function Ro(t,...e){if(ki.logLevel<=ae.WARN){const r=e.map(Tm);ki.warn(`Firestore (${Wo}): ${t}`,...r)}}function Tm(t){if(typeof t=="string")return t;try{/**
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Wo}) INTERNAL ASSERTION FAILED: `+t;throw nn(e),new Error(e)}function ge(t,e){t||ee()}function re(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Or{constructor(e,r){super(e,r),this.code=e,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _i{constructor(){this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}}/**
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
 */class tx{constructor(e,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class RP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,r){e.enqueueRetryable(()=>r(ht.UNAUTHENTICATED))}shutdown(){}}class PP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,r){this.changeListener=r,e.enqueueRetryable(()=>r(this.token.user))}shutdown(){this.changeListener=null}}class NP{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,r){ge(this.o===void 0);let n=this.i;const i=c=>this.i!==n?(n=this.i,r(c)):Promise.resolve();let o=new _i;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new _i,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const c=o;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new _i)}},0),s()}getToken(){const e=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then(n=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(ge(typeof n.accessToken=="string"),new tx(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new ht(e)}}class OP{constructor(e,r,n){this.l=e,this.h=r,this.P=n,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class DP{constructor(e,r,n){this.l=e,this.h=r,this.P=n}getToken(){return Promise.resolve(new OP(this.l,this.h,this.P))}start(e,r){e.enqueueRetryable(()=>r(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class LP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,r){ge(this.o===void 0);const n=o=>{o.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,Y("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?r(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>n(o))};const i=o=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(r=>r?(ge(typeof r.token=="string"),this.R=r.token,new LP(r.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function MP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),r=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(r);else for(let n=0;n<t;n++)r[n]=Math.floor(256*Math.random());return r}/**
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
 */class rx{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=MP(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<r&&(n+=e.charAt(i[o]%e.length))}return n}}function de(t,e){return t<e?-1:t>e?1:0}function Po(t,e,r){return t.length===e.length&&t.every((n,i)=>r(n,e[i]))}/**
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
 */class He{constructor(e,r){if(this.seconds=e,this.nanoseconds=r,r<0)throw new G(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new G(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(e<-62135596800)throw new G(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const r=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*r));return new He(r,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new He(0,0))}static max(){return new te(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class _a{constructor(e,r,n){r===void 0?r=0:r>e.length&&ee(),n===void 0?n=e.length-r:n>e.length-r&&ee(),this.segments=e,this.offset=r,this.len=n}get length(){return this.len}isEqual(e){return _a.comparator(this,e)===0}child(e){const r=this.segments.slice(this.offset,this.limit());return e instanceof _a?e.forEach(n=>{r.push(n)}):r.push(e),this.construct(r)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}forEach(e){for(let r=this.offset,n=this.limit();r<n;r++)e(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,r){const n=Math.min(e.length,r.length);for(let i=0;i<n;i++){const o=e.get(i),s=r.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<r.length?-1:e.length>r.length?1:0}}class Ee extends _a{construct(e,r,n){return new Ee(e,r,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const r=[];for(const n of e){if(n.indexOf("//")>=0)throw new G(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);r.push(...n.split("/").filter(i=>i.length>0))}return new Ee(r)}static emptyPath(){return new Ee([])}}const $P=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends _a{construct(e,r,n){return new et(e,r,n)}static isValidIdentifier(e){return $P.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const r=[];let n="",i=0;const o=()=>{if(n.length===0)throw new G(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(n),n=""};let s=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new G(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new G(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,i+=2}else l==="`"?(s=!s,i++):l!=="."||s?(n+=l,i++):(o(),i++)}if(o(),s)throw new G(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(r)}static emptyPath(){return new et([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ee.fromString(e))}static fromName(e){return new X(Ee.fromString(e).popFirst(5))}static empty(){return new X(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,r){return Ee.comparator(e.path,r.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ee(e.slice()))}}function FP(t,e){const r=t.toTimestamp().seconds,n=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(n===1e9?new He(r+1,0):new He(r,n));return new Un(i,X.empty(),e)}function UP(t){return new Un(t.readTime,t.key,-1)}class Un{constructor(e,r,n){this.readTime=e,this.documentKey=r,this.largestBatchId=n}static min(){return new Un(te.min(),X.empty(),-1)}static max(){return new Un(te.max(),X.empty(),-1)}}function zP(t,e){let r=t.readTime.compareTo(e.readTime);return r!==0?r:(r=X.comparator(t.documentKey,e.documentKey),r!==0?r:de(t.largestBatchId,e.largestBatchId))}/**
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
 */const jP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class BP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function qa(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==jP)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(r=>{this.isDone=!0,this.result=r,this.nextCallback&&this.nextCallback(r)},r=>{this.isDone=!0,this.error=r,this.catchCallback&&this.catchCallback(r)})}catch(e){return this.next(void 0,e)}next(e,r){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(r,this.error):this.wrapSuccess(e,this.result):new M((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(r,o).next(n,i)}})}toPromise(){return new Promise((e,r)=>{this.next(e,r)})}wrapUserFunction(e){try{const r=e();return r instanceof M?r:M.resolve(r)}catch(r){return M.reject(r)}}wrapSuccess(e,r){return e?this.wrapUserFunction(()=>e(r)):M.resolve(r)}wrapFailure(e,r){return e?this.wrapUserFunction(()=>e(r)):M.reject(r)}static resolve(e){return new M((r,n)=>{r(e)})}static reject(e){return new M((r,n)=>{n(e)})}static waitFor(e){return new M((r,n)=>{let i=0,o=0,s=!1;e.forEach(l=>{++i,l.next(()=>{++o,s&&o===i&&r()},c=>n(c))}),s=!0,o===i&&r()})}static or(e){let r=M.resolve(!1);for(const n of e)r=r.next(i=>i?M.resolve(i):n());return r}static forEach(e,r){const n=[];return e.forEach((i,o)=>{n.push(r.call(this,i,o))}),this.waitFor(n)}static mapArray(e,r){return new M((n,i)=>{const o=e.length,s=new Array(o);let l=0;for(let c=0;c<o;c++){const u=c;r(e[u]).next(h=>{s[u]=h,++l,l===o&&n(s)},h=>i(h))}})}static doWhile(e,r){return new M((n,i)=>{const o=()=>{e()===!0?r().next(()=>{o()},i):n()};o()})}}function qP(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}function Ha(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Am{constructor(e,r){this.previousValue=e,r&&(r.sequenceNumberHandler=n=>this.ie(n),this.se=n=>r.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Am.oe=-1;function Cu(t){return t==null}function Xc(t){return t===0&&1/t==-1/0}function HP(t){return typeof t=="number"&&Number.isInteger(t)&&!Xc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function y_(t){let e=0;for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&e++;return e}function $i(t,e){for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&e(r,t[r])}function nx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Re{constructor(e,r){this.comparator=e,this.root=r||Je.EMPTY}insert(e,r){return new Re(this.comparator,this.root.insert(e,r,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let r=this.root;for(;!r.isEmpty();){const n=this.comparator(e,r.key);if(n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}indexOf(e){let r=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return r+n.left.size;i<0?n=n.left:(r+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((r,n)=>(e(r,n),!1))}toString(){const e=[];return this.inorderTraversal((r,n)=>(e.push(`${r}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vl(this.root,e,this.comparator,!0)}}class Vl{constructor(e,r,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=r?n(e.key,r):1,r&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const r={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return r}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,r,n,i,o){this.key=e,this.value=r,this.color=n??Je.RED,this.left=i??Je.EMPTY,this.right=o??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,r,n,i,o){return new Je(e??this.key,r??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,r,n){let i=this;const o=n(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,r,n),null):o===0?i.copy(null,r,null,null,null):i.copy(null,null,null,null,i.right.insert(e,r,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,r){let n,i=this;if(r(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,r),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),r(e,i.key)===0){if(i.right.isEmpty())return Je.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,r))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),r=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,r)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,r,n,i,o){return this}insert(e,r,n){return new Je(e,r)}remove(e,r){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rt{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((r,n)=>(e(r),!1))}forEachInRange(e,r){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;r(i.key)}}forEachWhile(e,r){let n;for(n=r!==void 0?this.data.getIteratorFrom(r):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const r=this.data.getIteratorFrom(e);return r.hasNext()?r.getNext().key:null}getIterator(){return new __(this.data.getIterator())}getIteratorFrom(e){return new __(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let r=this;return r.size<e.size&&(r=e,e=this),e.forEach(n=>{r=r.add(n)}),r}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const r=this.data.getIterator(),n=e.data.getIterator();for(;r.hasNext();){const i=r.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(r=>{e.push(r)}),e}toString(){const e=[];return this.forEach(r=>e.push(r)),"SortedSet("+e.toString()+")"}copy(e){const r=new rt(this.comparator);return r.data=e,r}}class __{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class $t{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new $t([])}unionWith(e){let r=new rt(et.comparator);for(const n of this.fields)r=r.add(n);for(const n of e)r=r.add(n);return new $t(r.toArray())}covers(e){for(const r of this.fields)if(r.isPrefixOf(e))return!0;return!1}isEqual(e){return Po(this.fields,e.fields,(r,n)=>r.isEqual(n))}}/**
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
 */class ix extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const r=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ix("Invalid base64 string: "+o):o}}(e);return new it(r)}static fromUint8Array(e){const r=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new it(r)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(r){return btoa(r)}(this.binaryString)}toUint8Array(){return function(r){const n=new Uint8Array(r.length);for(let i=0;i<r.length;i++)n[i]=r.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const WP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zn(t){if(ge(!!t),typeof t=="string"){let e=0;const r=WP.exec(t);if(ge(!!r),r[1]){let i=r[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(t);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ci(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
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
 */function Sm(t){var e,r;return((r=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||r===void 0?void 0:r.stringValue)==="server_timestamp"}function km(t){const e=t.mapValue.fields.__previous_value__;return Sm(e)?km(e):e}function wa(t){const e=zn(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class KP{constructor(e,r,n,i,o,s,l,c,u){this.databaseId=e,this.appId=r,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class ba{constructor(e,r){this.projectId=e,this.database=r||"(default)"}static empty(){return new ba("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ba&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ml={mapValue:{}};function Ri(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sm(t)?4:QP(t)?9007199254740991:GP(t)?10:11:ee()}function Nr(t,e){if(t===e)return!0;const r=Ri(t);if(r!==Ri(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wa(t).isEqual(wa(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=zn(i.timestampValue),l=zn(o.timestampValue);return s.seconds===l.seconds&&s.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return Ci(i.bytesValue).isEqual(Ci(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Me(i.geoPointValue.latitude)===Me(o.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Me(i.integerValue)===Me(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Me(i.doubleValue),l=Me(o.doubleValue);return s===l?Xc(s)===Xc(l):isNaN(s)&&isNaN(l)}return!1}(t,e);case 9:return Po(t.arrayValue.values||[],e.arrayValue.values||[],Nr);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},l=o.mapValue.fields||{};if(y_(s)!==y_(l))return!1;for(const c in s)if(s.hasOwnProperty(c)&&(l[c]===void 0||!Nr(s[c],l[c])))return!1;return!0}(t,e);default:return ee()}}function Ea(t,e){return(t.values||[]).find(r=>Nr(r,e))!==void 0}function No(t,e){if(t===e)return 0;const r=Ri(t),n=Ri(e);if(r!==n)return de(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(o,s){const l=Me(o.integerValue||o.doubleValue),c=Me(s.integerValue||s.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return w_(t.timestampValue,e.timestampValue);case 4:return w_(wa(t),wa(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(o,s){const l=Ci(o),c=Ci(s);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const l=o.split("/"),c=s.split("/");for(let u=0;u<l.length&&u<c.length;u++){const h=de(l[u],c[u]);if(h!==0)return h}return de(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const l=de(Me(o.latitude),Me(s.latitude));return l!==0?l:de(Me(o.longitude),Me(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return b_(t.arrayValue,e.arrayValue);case 10:return function(o,s){var l,c,u,h;const p=o.fields||{},m=s.fields||{},b=(l=p.value)===null||l===void 0?void 0:l.arrayValue,S=(c=m.value)===null||c===void 0?void 0:c.arrayValue,P=de(((u=b==null?void 0:b.values)===null||u===void 0?void 0:u.length)||0,((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0);return P!==0?P:b_(b,S)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===Ml.mapValue&&s===Ml.mapValue)return 0;if(o===Ml.mapValue)return 1;if(s===Ml.mapValue)return-1;const l=o.fields||{},c=Object.keys(l),u=s.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let p=0;p<c.length&&p<h.length;++p){const m=de(c[p],h[p]);if(m!==0)return m;const b=No(l[c[p]],u[h[p]]);if(b!==0)return b}return de(c.length,h.length)}(t.mapValue,e.mapValue);default:throw ee()}}function w_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const r=zn(t),n=zn(e),i=de(r.seconds,n.seconds);return i!==0?i:de(r.nanos,n.nanos)}function b_(t,e){const r=t.values||[],n=e.values||[];for(let i=0;i<r.length&&i<n.length;++i){const o=No(r[i],n[i]);if(o)return o}return de(r.length,n.length)}function Oo(t){return Sf(t)}function Sf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const n=zn(r);return`time(${n.seconds},${n.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(r){return Ci(r).toBase64()}(t.bytesValue):"referenceValue"in t?function(r){return X.fromName(r).toString()}(t.referenceValue):"geoPointValue"in t?function(r){return`geo(${r.latitude},${r.longitude})`}(t.geoPointValue):"arrayValue"in t?function(r){let n="[",i=!0;for(const o of r.values||[])i?i=!1:n+=",",n+=Sf(o);return n+"]"}(t.arrayValue):"mapValue"in t?function(r){const n=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const s of n)o?o=!1:i+=",",i+=`${s}:${Sf(r.fields[s])}`;return i+"}"}(t.mapValue):ee()}function E_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function kf(t){return!!t&&"integerValue"in t}function Cm(t){return!!t&&"arrayValue"in t}function x_(t){return!!t&&"nullValue"in t}function I_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hc(t){return!!t&&"mapValue"in t}function GP(t){var e,r;return((r=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||r===void 0?void 0:r.stringValue)==="__vector__"}function Ws(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $i(t.mapValue.fields,(r,n)=>e.mapValue.fields[r]=Ws(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let r=0;r<(t.arrayValue.values||[]).length;++r)e.arrayValue.values[r]=Ws(t.arrayValue.values[r]);return e}return Object.assign({},t)}function QP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let r=this.value;for(let n=0;n<e.length-1;++n)if(r=(r.mapValue.fields||{})[e.get(n)],!hc(r))return null;return r=(r.mapValue.fields||{})[e.lastSegment()],r||null}}set(e,r){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ws(r)}setAll(e){let r=et.emptyPath(),n={},i=[];e.forEach((s,l)=>{if(!r.isImmediateParentOf(l)){const c=this.getFieldsMap(r);this.applyChanges(c,n,i),n={},i=[],r=l.popLast()}s?n[l.lastSegment()]=Ws(s):i.push(l.lastSegment())});const o=this.getFieldsMap(r);this.applyChanges(o,n,i)}delete(e){const r=this.field(e.popLast());hc(r)&&r.mapValue.fields&&delete r.mapValue.fields[e.lastSegment()]}isEqual(e){return Nr(this.value,e.value)}getFieldsMap(e){let r=this.value;r.mapValue.fields||(r.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=r.mapValue.fields[e.get(n)];hc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},r.mapValue.fields[e.get(n)]=i),r=i}return r.mapValue.fields}applyChanges(e,r,n){$i(r,(i,o)=>e[i]=o);for(const i of n)delete e[i]}clone(){return new Rt(Ws(this.value))}}function ox(t){const e=[];return $i(t.fields,(r,n)=>{const i=new et([r]);if(hc(n)){const o=ox(n.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new $t(e)}/**
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
 */class pt{constructor(e,r,n,i,o,s,l){this.key=e,this.documentType=r,this.version=n,this.readTime=i,this.createTime=o,this.data=s,this.documentState=l}static newInvalidDocument(e){return new pt(e,0,te.min(),te.min(),te.min(),Rt.empty(),0)}static newFoundDocument(e,r,n,i){return new pt(e,1,r,te.min(),n,i,0)}static newNoDocument(e,r){return new pt(e,2,r,te.min(),te.min(),Rt.empty(),0)}static newUnknownDocument(e,r){return new pt(e,3,r,te.min(),te.min(),Rt.empty(),2)}convertToFoundDocument(e,r){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=r,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Jc{constructor(e,r){this.position=e,this.inclusive=r}}function T_(t,e,r){let n=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?n=X.comparator(X.fromName(s.referenceValue),r.key):n=No(s,r.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function A_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let r=0;r<t.position.length;r++)if(!Nr(t.position[r],e.position[r]))return!1;return!0}/**
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
 */class xa{constructor(e,r="asc"){this.field=e,this.dir=r}}function YP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class sx{}class je extends sx{constructor(e,r,n){super(),this.field=e,this.op=r,this.value=n}static create(e,r,n){return e.isKeyField()?r==="in"||r==="not-in"?this.createKeyFieldInFilter(e,r,n):new JP(e,r,n):r==="array-contains"?new tN(e,n):r==="in"?new rN(e,n):r==="not-in"?new nN(e,n):r==="array-contains-any"?new iN(e,n):new je(e,r,n)}static createKeyFieldInFilter(e,r,n){return r==="in"?new ZP(e,n):new eN(e,n)}matches(e){const r=e.data.field(this.field);return this.op==="!="?r!==null&&this.matchesComparison(No(r,this.value)):r!==null&&Ri(this.value)===Ri(r)&&this.matchesComparison(No(r,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _r extends sx{constructor(e,r){super(),this.filters=e,this.op=r,this.ae=null}static create(e,r){return new _r(e,r)}matches(e){return ax(this)?this.filters.find(r=>!r.matches(e))===void 0:this.filters.find(r=>r.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,r)=>e.concat(r.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ax(t){return t.op==="and"}function lx(t){return XP(t)&&ax(t)}function XP(t){for(const e of t.filters)if(e instanceof _r)return!1;return!0}function Cf(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+Oo(t.value);if(lx(t))return t.filters.map(e=>Cf(e)).join(",");{const e=t.filters.map(r=>Cf(r)).join(",");return`${t.op}(${e})`}}function cx(t,e){return t instanceof je?function(n,i){return i instanceof je&&n.op===i.op&&n.field.isEqual(i.field)&&Nr(n.value,i.value)}(t,e):t instanceof _r?function(n,i){return i instanceof _r&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,s,l)=>o&&cx(s,i.filters[l]),!0):!1}(t,e):void ee()}function ux(t){return t instanceof je?function(r){return`${r.field.canonicalString()} ${r.op} ${Oo(r.value)}`}(t):t instanceof _r?function(r){return r.op.toString()+" {"+r.getFilters().map(ux).join(" ,")+"}"}(t):"Filter"}class JP extends je{constructor(e,r,n){super(e,r,n),this.key=X.fromName(n.referenceValue)}matches(e){const r=X.comparator(e.key,this.key);return this.matchesComparison(r)}}class ZP extends je{constructor(e,r){super(e,"in",r),this.keys=dx("in",r)}matches(e){return this.keys.some(r=>r.isEqual(e.key))}}class eN extends je{constructor(e,r){super(e,"not-in",r),this.keys=dx("not-in",r)}matches(e){return!this.keys.some(r=>r.isEqual(e.key))}}function dx(t,e){var r;return(((r=e.arrayValue)===null||r===void 0?void 0:r.values)||[]).map(n=>X.fromName(n.referenceValue))}class tN extends je{constructor(e,r){super(e,"array-contains",r)}matches(e){const r=e.data.field(this.field);return Cm(r)&&Ea(r.arrayValue,this.value)}}class rN extends je{constructor(e,r){super(e,"in",r)}matches(e){const r=e.data.field(this.field);return r!==null&&Ea(this.value.arrayValue,r)}}class nN extends je{constructor(e,r){super(e,"not-in",r)}matches(e){if(Ea(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const r=e.data.field(this.field);return r!==null&&!Ea(this.value.arrayValue,r)}}class iN extends je{constructor(e,r){super(e,"array-contains-any",r)}matches(e){const r=e.data.field(this.field);return!(!Cm(r)||!r.arrayValue.values)&&r.arrayValue.values.some(n=>Ea(this.value.arrayValue,n))}}/**
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
 */class oN{constructor(e,r=null,n=[],i=[],o=null,s=null,l=null){this.path=e,this.collectionGroup=r,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=s,this.endAt=l,this.ue=null}}function S_(t,e=null,r=[],n=[],i=null,o=null,s=null){return new oN(t,e,r,n,i,o,s)}function Rm(t){const e=re(t);if(e.ue===null){let r=e.path.canonicalString();e.collectionGroup!==null&&(r+="|cg:"+e.collectionGroup),r+="|f:",r+=e.filters.map(n=>Cf(n)).join(","),r+="|ob:",r+=e.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),Cu(e.limit)||(r+="|l:",r+=e.limit),e.startAt&&(r+="|lb:",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(n=>Oo(n)).join(",")),e.endAt&&(r+="|ub:",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(n=>Oo(n)).join(",")),e.ue=r}return e.ue}function Pm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!YP(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(!cx(t.filters[r],e.filters[r]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!A_(t.startAt,e.startAt)&&A_(t.endAt,e.endAt)}function Rf(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ko{constructor(e,r=null,n=[],i=[],o=null,s="F",l=null,c=null){this.path=e,this.collectionGroup=r,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=s,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function sN(t,e,r,n,i,o,s,l){return new Ko(t,e,r,n,i,o,s,l)}function Nm(t){return new Ko(t)}function k_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function hx(t){return t.collectionGroup!==null}function Ks(t){const e=re(t);if(e.ce===null){e.ce=[];const r=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),r.add(o.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let l=new rt(et.comparator);return s.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(o=>{r.has(o.canonicalString())||o.isKeyField()||e.ce.push(new xa(o,n))}),r.has(et.keyField().canonicalString())||e.ce.push(new xa(et.keyField(),n))}return e.ce}function kr(t){const e=re(t);return e.le||(e.le=aN(e,Ks(t))),e.le}function aN(t,e){if(t.limitType==="F")return S_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new xa(i.field,o)});const r=t.endAt?new Jc(t.endAt.position,t.endAt.inclusive):null,n=t.startAt?new Jc(t.startAt.position,t.startAt.inclusive):null;return S_(t.path,t.collectionGroup,e,t.filters,t.limit,r,n)}}function Pf(t,e){const r=t.filters.concat([e]);return new Ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),r,t.limit,t.limitType,t.startAt,t.endAt)}function Nf(t,e,r){return new Ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,r,t.startAt,t.endAt)}function Ru(t,e){return Pm(kr(t),kr(e))&&t.limitType===e.limitType}function fx(t){return`${Rm(kr(t))}|lt:${t.limitType}`}function Qi(t){return`Query(target=${function(r){let n=r.path.canonicalString();return r.collectionGroup!==null&&(n+=" collectionGroup="+r.collectionGroup),r.filters.length>0&&(n+=`, filters: [${r.filters.map(i=>ux(i)).join(", ")}]`),Cu(r.limit)||(n+=", limit: "+r.limit),r.orderBy.length>0&&(n+=`, orderBy: [${r.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),r.startAt&&(n+=", startAt: ",n+=r.startAt.inclusive?"b:":"a:",n+=r.startAt.position.map(i=>Oo(i)).join(",")),r.endAt&&(n+=", endAt: ",n+=r.endAt.inclusive?"a:":"b:",n+=r.endAt.position.map(i=>Oo(i)).join(",")),`Target(${n})`}(kr(t))}; limitType=${t.limitType})`}function Pu(t,e){return e.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):X.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(t,e)&&function(n,i){for(const o of Ks(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,l,c){const u=T_(s,l,c);return s.inclusive?u<=0:u<0}(n.startAt,Ks(n),i)||n.endAt&&!function(s,l,c){const u=T_(s,l,c);return s.inclusive?u>=0:u>0}(n.endAt,Ks(n),i))}(t,e)}function lN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function px(t){return(e,r)=>{let n=!1;for(const i of Ks(t)){const o=cN(i,e,r);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function cN(t,e,r){const n=t.field.isKeyField()?X.comparator(e.key,r.key):function(o,s,l){const c=s.data.field(o),u=l.data.field(o);return c!==null&&u!==null?No(c,u):ee()}(t.field,e,r);switch(t.dir){case"asc":return n;case"desc":return-1*n;default:return ee()}}/**
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
 */class Go{constructor(e,r){this.mapKeyFn=e,this.equalsFn=r,this.inner={},this.innerSize=0}get(e){const r=this.mapKeyFn(e),n=this.inner[r];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,r){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,r]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,r]);i.push([e,r]),this.innerSize++}delete(e){const r=this.mapKeyFn(e),n=this.inner[r];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[r]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$i(this.inner,(r,n)=>{for(const[i,o]of n)e(i,o)})}isEmpty(){return nx(this.inner)}size(){return this.innerSize}}/**
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
 */const uN=new Re(X.comparator);function on(){return uN}const mx=new Re(X.comparator);function Ns(...t){let e=mx;for(const r of t)e=e.insert(r.key,r);return e}function gx(t){let e=mx;return t.forEach((r,n)=>e=e.insert(r,n.overlayedDocument)),e}function fi(){return Gs()}function vx(){return Gs()}function Gs(){return new Go(t=>t.toString(),(t,e)=>t.isEqual(e))}const dN=new Re(X.comparator),hN=new rt(X.comparator);function se(...t){let e=hN;for(const r of t)e=e.add(r);return e}const fN=new rt(de);function pN(){return fN}/**
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
 */function Om(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xc(e)?"-0":e}}function yx(t){return{integerValue:""+t}}function mN(t,e){return HP(e)?yx(e):Om(t,e)}/**
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
 */class Nu{constructor(){this._=void 0}}function gN(t,e,r){return t instanceof Ia?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Sm(o)&&(o=km(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(r,e):t instanceof Ta?wx(t,e):t instanceof Aa?bx(t,e):function(i,o){const s=_x(i,o),l=C_(s)+C_(i.Pe);return kf(s)&&kf(i.Pe)?yx(l):Om(i.serializer,l)}(t,e)}function vN(t,e,r){return t instanceof Ta?wx(t,e):t instanceof Aa?bx(t,e):r}function _x(t,e){return t instanceof Zc?function(n){return kf(n)||function(o){return!!o&&"doubleValue"in o}(n)}(e)?e:{integerValue:0}:null}class Ia extends Nu{}class Ta extends Nu{constructor(e){super(),this.elements=e}}function wx(t,e){const r=Ex(e);for(const n of t.elements)r.some(i=>Nr(i,n))||r.push(n);return{arrayValue:{values:r}}}class Aa extends Nu{constructor(e){super(),this.elements=e}}function bx(t,e){let r=Ex(e);for(const n of t.elements)r=r.filter(i=>!Nr(i,n));return{arrayValue:{values:r}}}class Zc extends Nu{constructor(e,r){super(),this.serializer=e,this.Pe=r}}function C_(t){return Me(t.integerValue||t.doubleValue)}function Ex(t){return Cm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class yN{constructor(e,r){this.field=e,this.transform=r}}function _N(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Ta&&i instanceof Ta||n instanceof Aa&&i instanceof Aa?Po(n.elements,i.elements,Nr):n instanceof Zc&&i instanceof Zc?Nr(n.Pe,i.Pe):n instanceof Ia&&i instanceof Ia}(t.transform,e.transform)}class wN{constructor(e,r){this.version=e,this.transformResults=r}}class Jt{constructor(e,r){this.updateTime=e,this.exists=r}static none(){return new Jt}static exists(e){return new Jt(void 0,e)}static updateTime(e){return new Jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ou{}function xx(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Dm(t.key,Jt.none()):new Wa(t.key,t.data,Jt.none());{const r=t.data,n=Rt.empty();let i=new rt(et.comparator);for(let o of e.fields)if(!i.has(o)){let s=r.field(o);s===null&&o.length>1&&(o=o.popLast(),s=r.field(o)),s===null?n.delete(o):n.set(o,s),i=i.add(o)}return new Qn(t.key,n,new $t(i.toArray()),Jt.none())}}function bN(t,e,r){t instanceof Wa?function(i,o,s){const l=i.value.clone(),c=P_(i.fieldTransforms,o,s.transformResults);l.setAll(c),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,r):t instanceof Qn?function(i,o,s){if(!fc(i.precondition,o))return void o.convertToUnknownDocument(s.version);const l=P_(i.fieldTransforms,o,s.transformResults),c=o.data;c.setAll(Ix(i)),c.setAll(l),o.convertToFoundDocument(s.version,c).setHasCommittedMutations()}(t,e,r):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,r)}function Qs(t,e,r,n){return t instanceof Wa?function(o,s,l,c){if(!fc(o.precondition,s))return l;const u=o.value.clone(),h=N_(o.fieldTransforms,c,s);return u.setAll(h),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,r,n):t instanceof Qn?function(o,s,l,c){if(!fc(o.precondition,s))return l;const u=N_(o.fieldTransforms,c,s),h=s.data;return h.setAll(Ix(o)),h.setAll(u),s.convertToFoundDocument(s.version,h).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(p=>p.field))}(t,e,r,n):function(o,s,l){return fc(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):l}(t,e,r)}function EN(t,e){let r=null;for(const n of t.fieldTransforms){const i=e.data.field(n.field),o=_x(n.transform,i||null);o!=null&&(r===null&&(r=Rt.empty()),r.set(n.field,o))}return r||null}function R_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Po(n,i,(o,s)=>_N(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wa extends Ou{constructor(e,r,n,i=[]){super(),this.key=e,this.value=r,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Qn extends Ou{constructor(e,r,n,i,o=[]){super(),this.key=e,this.data=r,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ix(t){const e=new Map;return t.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){const n=t.data.field(r);e.set(r,n)}}),e}function P_(t,e,r){const n=new Map;ge(t.length===r.length);for(let i=0;i<r.length;i++){const o=t[i],s=o.transform,l=e.data.field(o.field);n.set(o.field,vN(s,l,r[i]))}return n}function N_(t,e,r){const n=new Map;for(const i of t){const o=i.transform,s=r.data.field(i.field);n.set(i.field,gN(o,s,e))}return n}class Dm extends Ou{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xN extends Ou{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class IN{constructor(e,r,n,i){this.batchId=e,this.localWriteTime=r,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,r){const n=r.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&bN(o,e,n[i])}}applyToLocalView(e,r){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(r=Qs(n,e,r,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(r=Qs(n,e,r,this.localWriteTime));return r}applyToLocalDocumentSet(e,r){const n=vx();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let l=this.applyToLocalView(s,o.mutatedFields);l=r.has(i.key)?null:l;const c=xx(s,l);c!==null&&n.set(i.key,c),s.isValidDocument()||s.convertToNoDocument(te.min())}),n}keys(){return this.mutations.reduce((e,r)=>e.add(r.key),se())}isEqual(e){return this.batchId===e.batchId&&Po(this.mutations,e.mutations,(r,n)=>R_(r,n))&&Po(this.baseMutations,e.baseMutations,(r,n)=>R_(r,n))}}class Lm{constructor(e,r,n,i){this.batch=e,this.commitVersion=r,this.mutationResults=n,this.docVersions=i}static from(e,r,n){ge(e.mutations.length===n.length);let i=function(){return dN}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,n[s].version);return new Lm(e,r,n,i)}}/**
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
 */class TN{constructor(e,r){this.largestBatchId=e,this.mutation=r}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class AN{constructor(e,r){this.count=e,this.unchangedNames=r}}/**
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
 */var Ue,le;function SN(t){switch(t){default:return ee();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function Tx(t){if(t===void 0)return nn("GRPC error has no .code"),V.UNKNOWN;switch(t){case Ue.OK:return V.OK;case Ue.CANCELLED:return V.CANCELLED;case Ue.UNKNOWN:return V.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return V.INTERNAL;case Ue.UNAVAILABLE:return V.UNAVAILABLE;case Ue.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ue.NOT_FOUND:return V.NOT_FOUND;case Ue.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ue.ABORTED:return V.ABORTED;case Ue.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ue.DATA_LOSS:return V.DATA_LOSS;default:return ee()}}(le=Ue||(Ue={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function kN(){return new TextEncoder}/**
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
 */const CN=new yi([4294967295,4294967295],0);function O_(t){const e=kN().encode(t),r=new QE;return r.update(e),new Uint8Array(r.digest())}function D_(t){const e=new DataView(t.buffer),r=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new yi([r,n],0),new yi([i,o],0)]}class Vm{constructor(e,r,n){if(this.bitmap=e,this.padding=r,this.hashCount=n,r<0||r>=8)throw new Os(`Invalid padding: ${r}`);if(n<0)throw new Os(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Os(`Invalid hash count: ${n}`);if(e.length===0&&r!==0)throw new Os(`Invalid padding when bitmap length is 0: ${r}`);this.Ie=8*e.length-r,this.Te=yi.fromNumber(this.Ie)}Ee(e,r,n){let i=e.add(r.multiply(yi.fromNumber(n)));return i.compare(CN)===1&&(i=new yi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const r=O_(e),[n,i]=D_(r);for(let o=0;o<this.hashCount;o++){const s=this.Ee(n,i,o);if(!this.de(s))return!1}return!0}static create(e,r,n){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new Vm(o,i,r);return n.forEach(l=>s.insert(l)),s}insert(e){if(this.Ie===0)return;const r=O_(e),[n,i]=D_(r);for(let o=0;o<this.hashCount;o++){const s=this.Ee(n,i,o);this.Ae(s)}}Ae(e){const r=Math.floor(e/8),n=e%8;this.bitmap[r]|=1<<n}}class Os extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Du{constructor(e,r,n,i,o){this.snapshotVersion=e,this.targetChanges=r,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,r,n){const i=new Map;return i.set(e,Ka.createSynthesizedTargetChangeForCurrentChange(e,r,n)),new Du(te.min(),i,new Re(de),on(),se())}}class Ka{constructor(e,r,n,i,o){this.resumeToken=e,this.current=r,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,r,n){return new Ka(n,r,se(),se(),se())}}/**
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
 */class pc{constructor(e,r,n,i){this.Re=e,this.removedTargetIds=r,this.key=n,this.Ve=i}}class Ax{constructor(e,r){this.targetId=e,this.me=r}}class Sx{constructor(e,r,n=it.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=r,this.resumeToken=n,this.cause=i}}class L_{constructor(){this.fe=0,this.ge=M_(),this.pe=it.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=se(),r=se(),n=se();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:r=r.add(i);break;case 1:n=n.add(i);break;default:ee()}}),new Ka(this.pe,this.ye,e,r,n)}Ce(){this.we=!1,this.ge=M_()}Fe(e,r){this.we=!0,this.ge=this.ge.insert(e,r)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ge(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class RN{constructor(e){this.Le=e,this.Be=new Map,this.ke=on(),this.qe=V_(),this.Qe=new Re(de)}Ke(e){for(const r of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(r,e.Ve):this.Ue(r,e.key,e.Ve);for(const r of e.removedTargetIds)this.Ue(r,e.key,e.Ve)}We(e){this.forEachTarget(e,r=>{const n=this.Ge(r);switch(e.state){case 0:this.ze(r)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(r);break;case 3:this.ze(r)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(r)&&(this.je(r),n.De(e.resumeToken));break;default:ee()}})}forEachTarget(e,r){e.targetIds.length>0?e.targetIds.forEach(r):this.Be.forEach((n,i)=>{this.ze(i)&&r(i)})}He(e){const r=e.targetId,n=e.me.count,i=this.Je(r);if(i){const o=i.target;if(Rf(o))if(n===0){const s=new X(o.path);this.Ue(r,s,pt.newNoDocument(s,te.min()))}else ge(n===1);else{const s=this.Ye(r);if(s!==n){const l=this.Ze(e),c=l?this.Xe(l,e,s):1;if(c!==0){this.je(r);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(r,u)}}}}}Ze(e){const r=e.me.unchangedNames;if(!r||!r.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=r;let s,l;try{s=Ci(n).toUint8Array()}catch(c){if(c instanceof ix)return Ro("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Vm(s,i,o)}catch(c){return Ro(c instanceof Os?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,r,n){return r.me.count===n-this.nt(e,r.targetId)?0:2}nt(e,r){const n=this.Le.getRemoteKeysForTarget(r);let i=0;return n.forEach(o=>{const s=this.Le.tt(),l=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.Ue(r,o,null),i++)}),i}rt(e){const r=new Map;this.Be.forEach((o,s)=>{const l=this.Je(s);if(l){if(o.current&&Rf(l.target)){const c=new X(l.target.path);this.ke.get(c)!==null||this.it(s,c)||this.Ue(s,c,pt.newNoDocument(c,e))}o.be&&(r.set(s,o.ve()),o.Ce())}});let n=se();this.qe.forEach((o,s)=>{let l=!0;s.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new Du(e,r,this.Qe,this.ke,n);return this.ke=on(),this.qe=V_(),this.Qe=new Re(de),i}$e(e,r){if(!this.ze(e))return;const n=this.it(e,r.key)?2:0;this.Ge(e).Fe(r.key,n),this.ke=this.ke.insert(r.key,r),this.qe=this.qe.insert(r.key,this.st(r.key).add(e))}Ue(e,r,n){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,r)?i.Fe(r,1):i.Me(r),this.qe=this.qe.insert(r,this.st(r).delete(e)),n&&(this.ke=this.ke.insert(r,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const r=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let r=this.Be.get(e);return r||(r=new L_,this.Be.set(e,r)),r}st(e){let r=this.qe.get(e);return r||(r=new rt(de),this.qe=this.qe.insert(e,r)),r}ze(e){const r=this.Je(e)!==null;return r||Y("WatchChangeAggregator","Detected inactive target",e),r}Je(e){const r=this.Be.get(e);return r&&r.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new L_),this.Le.getRemoteKeysForTarget(e).forEach(r=>{this.Ue(e,r,null)})}it(e,r){return this.Le.getRemoteKeysForTarget(e).has(r)}}function V_(){return new Re(X.comparator)}function M_(){return new Re(X.comparator)}const PN={asc:"ASCENDING",desc:"DESCENDING"},NN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ON={and:"AND",or:"OR"};class DN{constructor(e,r){this.databaseId=e,this.useProto3Json=r}}function Of(t,e){return t.useProto3Json||Cu(e)?e:{value:e}}function eu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kx(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function LN(t,e){return eu(t,e.toTimestamp())}function Cr(t){return ge(!!t),te.fromTimestamp(function(r){const n=zn(r);return new He(n.seconds,n.nanos)}(t))}function Mm(t,e){return Df(t,e).canonicalString()}function Df(t,e){const r=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?r:r.child(e)}function Cx(t){const e=Ee.fromString(t);return ge(Dx(e)),e}function Lf(t,e){return Mm(t.databaseId,e.path)}function eh(t,e){const r=Cx(e);if(r.get(1)!==t.databaseId.projectId)throw new G(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+t.databaseId.projectId);if(r.get(3)!==t.databaseId.database)throw new G(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+t.databaseId.database);return new X(Px(r))}function Rx(t,e){return Mm(t.databaseId,e)}function VN(t){const e=Cx(t);return e.length===4?Ee.emptyPath():Px(e)}function Vf(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Px(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function $_(t,e,r){return{name:Lf(t,e),fields:r.value.mapValue.fields}}function MN(t,e){let r;if("targetChange"in e){e.targetChange;const n=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(u,h){return u.useProto3Json?(ge(h===void 0||typeof h=="string"),it.fromBase64String(h||"")):(ge(h===void 0||h instanceof Buffer||h instanceof Uint8Array),it.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,l=s&&function(u){const h=u.code===void 0?V.UNKNOWN:Tx(u.code);return new G(h,u.message||"")}(s);r=new Sx(n,i,o,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=eh(t,n.document.name),o=Cr(n.document.updateTime),s=n.document.createTime?Cr(n.document.createTime):te.min(),l=new Rt({mapValue:{fields:n.document.fields}}),c=pt.newFoundDocument(i,o,s,l),u=n.targetIds||[],h=n.removedTargetIds||[];r=new pc(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=eh(t,n.document),o=n.readTime?Cr(n.readTime):te.min(),s=pt.newNoDocument(i,o),l=n.removedTargetIds||[];r=new pc([],l,s.key,s)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=eh(t,n.document),o=n.removedTargetIds||[];r=new pc([],o,i,null)}else{if(!("filter"in e))return ee();{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,s=new AN(i,o),l=n.targetId;r=new Ax(l,s)}}return r}function $N(t,e){let r;if(e instanceof Wa)r={update:$_(t,e.key,e.value)};else if(e instanceof Dm)r={delete:Lf(t,e.key)};else if(e instanceof Qn)r={update:$_(t,e.key,e.data),updateMask:KN(e.fieldMask)};else{if(!(e instanceof xN))return ee();r={verify:Lf(t,e.key)}}return e.fieldTransforms.length>0&&(r.updateTransforms=e.fieldTransforms.map(n=>function(o,s){const l=s.transform;if(l instanceof Ia)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ta)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Aa)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Zc)return{fieldPath:s.field.canonicalString(),increment:l.Pe};throw ee()}(0,n))),e.precondition.isNone||(r.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:LN(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:ee()}(t,e.precondition)),r}function FN(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(r=>function(i,o){let s=i.updateTime?Cr(i.updateTime):Cr(o);return s.isEqual(te.min())&&(s=Cr(o)),new wN(s,i.transformResults||[])}(r,e))):[]}function UN(t,e){return{documents:[Rx(t,e.path)]}}function zN(t,e){const r={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,r.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),r.structuredQuery.from=[{collectionId:n.lastSegment()}]),r.parent=Rx(t,i);const o=function(u){if(u.length!==0)return Ox(_r.create(u,"and"))}(e.filters);o&&(r.structuredQuery.where=o);const s=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:Yi(m.field),direction:qN(m.dir)}}(h))}(e.orderBy);s&&(r.structuredQuery.orderBy=s);const l=Of(t,e.limit);return l!==null&&(r.structuredQuery.limit=l),e.startAt&&(r.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(r.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:r,parent:i}}function jN(t){let e=VN(t.parent);const r=t.structuredQuery,n=r.from?r.from.length:0;let i=null;if(n>0){ge(n===1);const h=r.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let o=[];r.where&&(o=function(p){const m=Nx(p);return m instanceof _r&&lx(m)?m.getFilters():[m]}(r.where));let s=[];r.orderBy&&(s=function(p){return p.map(m=>function(S){return new xa(Xi(S.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(r.orderBy));let l=null;r.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Cu(m)?null:m}(r.limit));let c=null;r.startAt&&(c=function(p){const m=!!p.before,b=p.values||[];return new Jc(b,m)}(r.startAt));let u=null;return r.endAt&&(u=function(p){const m=!p.before,b=p.values||[];return new Jc(b,m)}(r.endAt)),sN(e,i,s,o,l,"F",c,u)}function BN(t,e){const r=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return r==null?null:{"goog-listen-tags":r}}function Nx(t){return t.unaryFilter!==void 0?function(r){switch(r.unaryFilter.op){case"IS_NAN":const n=Xi(r.unaryFilter.field);return je.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Xi(r.unaryFilter.field);return je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Xi(r.unaryFilter.field);return je.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Xi(r.unaryFilter.field);return je.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(r){return je.create(Xi(r.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(r.fieldFilter.op),r.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(r){return _r.create(r.compositeFilter.filters.map(n=>Nx(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee()}}(r.compositeFilter.op))}(t):ee()}function qN(t){return PN[t]}function HN(t){return NN[t]}function WN(t){return ON[t]}function Yi(t){return{fieldPath:t.canonicalString()}}function Xi(t){return et.fromServerFormat(t.fieldPath)}function Ox(t){return t instanceof je?function(r){if(r.op==="=="){if(I_(r.value))return{unaryFilter:{field:Yi(r.field),op:"IS_NAN"}};if(x_(r.value))return{unaryFilter:{field:Yi(r.field),op:"IS_NULL"}}}else if(r.op==="!="){if(I_(r.value))return{unaryFilter:{field:Yi(r.field),op:"IS_NOT_NAN"}};if(x_(r.value))return{unaryFilter:{field:Yi(r.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yi(r.field),op:HN(r.op),value:r.value}}}(t):t instanceof _r?function(r){const n=r.getFilters().map(i=>Ox(i));return n.length===1?n[0]:{compositeFilter:{op:WN(r.op),filters:n}}}(t):ee()}function KN(t){const e=[];return t.fields.forEach(r=>e.push(r.canonicalString())),{fieldPaths:e}}function Dx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class An{constructor(e,r,n,i,o=te.min(),s=te.min(),l=it.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=r,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new An(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,r){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,r,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class GN{constructor(e){this.ct=e}}function QN(t){const e=jN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nf(e,e.limit,"L"):e}/**
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
 */class YN{constructor(){this.un=new XN}addToCollectionParentIndex(e,r){return this.un.add(r),M.resolve()}getCollectionParents(e,r){return M.resolve(this.un.getEntries(r))}addFieldIndex(e,r){return M.resolve()}deleteFieldIndex(e,r){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,r){return M.resolve()}getDocumentsMatchingTarget(e,r){return M.resolve(null)}getIndexType(e,r){return M.resolve(0)}getFieldIndexes(e,r){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,r){return M.resolve(Un.min())}getMinOffsetFromCollectionGroup(e,r){return M.resolve(Un.min())}updateCollectionGroup(e,r,n){return M.resolve()}updateIndexEntries(e,r){return M.resolve()}}class XN{constructor(){this.index={}}add(e){const r=e.lastSegment(),n=e.popLast(),i=this.index[r]||new rt(Ee.comparator),o=!i.has(n);return this.index[r]=i.add(n),o}has(e){const r=e.lastSegment(),n=e.popLast(),i=this.index[r];return i&&i.has(n)}getEntries(e){return(this.index[e]||new rt(Ee.comparator)).toArray()}}/**
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
 */class Do{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Do(0)}static kn(){return new Do(-1)}}/**
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
 */class JN{constructor(){this.changes=new Go(e=>e.toString(),(e,r)=>e.isEqual(r)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,r){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(r))}getEntry(e,r){this.assertNotApplied();const n=this.changes.get(r);return n!==void 0?M.resolve(n):this.getFromCache(e,r)}getEntries(e,r){return this.getAllFromCache(e,r)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ZN{constructor(e,r){this.overlayedDocument=e,this.mutatedFields=r}}/**
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
 */class e2{constructor(e,r,n,i){this.remoteDocumentCache=e,this.mutationQueue=r,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,r){let n=null;return this.documentOverlayCache.getOverlay(e,r).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,r))).next(i=>(n!==null&&Qs(n.mutation,i,$t.empty(),He.now()),i))}getDocuments(e,r){return this.remoteDocumentCache.getEntries(e,r).next(n=>this.getLocalViewOfDocuments(e,n,se()).next(()=>n))}getLocalViewOfDocuments(e,r,n=se()){const i=fi();return this.populateOverlays(e,i,r).next(()=>this.computeViews(e,r,i,n).next(o=>{let s=Ns();return o.forEach((l,c)=>{s=s.insert(l,c.overlayedDocument)}),s}))}getOverlayedDocuments(e,r){const n=fi();return this.populateOverlays(e,n,r).next(()=>this.computeViews(e,r,n,se()))}populateOverlays(e,r,n){const i=[];return n.forEach(o=>{r.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,l)=>{r.set(s,l)})})}computeViews(e,r,n,i){let o=on();const s=Gs(),l=function(){return Gs()}();return r.forEach((c,u)=>{const h=n.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof Qn)?o=o.insert(u.key,u):h!==void 0?(s.set(u.key,h.mutation.getFieldMask()),Qs(h.mutation,u,h.mutation.getFieldMask(),He.now())):s.set(u.key,$t.empty())}),this.recalculateAndSaveOverlays(e,o).next(c=>(c.forEach((u,h)=>s.set(u,h)),r.forEach((u,h)=>{var p;return l.set(u,new ZN(h,(p=s.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,r){const n=Gs();let i=new Re((s,l)=>s-l),o=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,r).next(s=>{for(const l of s)l.keys().forEach(c=>{const u=r.get(c);if(u===null)return;let h=n.get(c)||$t.empty();h=l.applyToLocalView(u,h),n.set(c,h);const p=(i.get(l.batchId)||se()).add(c);i=i.insert(l.batchId,p)})}).next(()=>{const s=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,h=c.value,p=vx();h.forEach(m=>{if(!o.has(m)){const b=xx(r.get(m),n.get(m));b!==null&&p.set(m,b),o=o.add(m)}}),s.push(this.documentOverlayCache.saveOverlays(e,u,p))}return M.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,r){return this.remoteDocumentCache.getEntries(e,r).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,r,n,i){return function(s){return X.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(r)?this.getDocumentsMatchingDocumentQuery(e,r.path):hx(r)?this.getDocumentsMatchingCollectionGroupQuery(e,r,n,i):this.getDocumentsMatchingCollectionQuery(e,r,n,i)}getNextDocuments(e,r,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,r,n,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,r,n.largestBatchId,i-o.size):M.resolve(fi());let l=-1,c=o;return s.next(u=>M.forEach(u,(h,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),o.get(h)?M.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{c=c.insert(h,m)}))).next(()=>this.populateOverlays(e,u,o)).next(()=>this.computeViews(e,c,u,se())).next(h=>({batchId:l,changes:gx(h)})))})}getDocumentsMatchingDocumentQuery(e,r){return this.getDocument(e,new X(r)).next(n=>{let i=Ns();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,r,n,i){const o=r.collectionGroup;let s=Ns();return this.indexManager.getCollectionParents(e,o).next(l=>M.forEach(l,c=>{const u=function(p,m){return new Ko(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(r,c.child(o));return this.getDocumentsMatchingCollectionQuery(e,u,n,i).next(h=>{h.forEach((p,m)=>{s=s.insert(p,m)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,r,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,r.path,n.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,r,n,o,i))).next(s=>{o.forEach((c,u)=>{const h=u.getKey();s.get(h)===null&&(s=s.insert(h,pt.newInvalidDocument(h)))});let l=Ns();return s.forEach((c,u)=>{const h=o.get(c);h!==void 0&&Qs(h.mutation,u,$t.empty(),He.now()),Pu(r,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class t2{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,r){return M.resolve(this.hr.get(r))}saveBundleMetadata(e,r){return this.hr.set(r.id,function(i){return{id:i.id,version:i.version,createTime:Cr(i.createTime)}}(r)),M.resolve()}getNamedQuery(e,r){return M.resolve(this.Pr.get(r))}saveNamedQuery(e,r){return this.Pr.set(r.name,function(i){return{name:i.name,query:QN(i.bundledQuery),readTime:Cr(i.readTime)}}(r)),M.resolve()}}/**
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
 */class r2{constructor(){this.overlays=new Re(X.comparator),this.Ir=new Map}getOverlay(e,r){return M.resolve(this.overlays.get(r))}getOverlays(e,r){const n=fi();return M.forEach(r,i=>this.getOverlay(e,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(e,r,n){return n.forEach((i,o)=>{this.ht(e,r,o)}),M.resolve()}removeOverlaysForBatchId(e,r,n){const i=this.Ir.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(n)),M.resolve()}getOverlaysForCollection(e,r,n){const i=fi(),o=r.length+1,s=new X(r.child("")),l=this.overlays.getIteratorFrom(s);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!r.isPrefixOf(u.path))break;u.path.length===o&&c.largestBatchId>n&&i.set(c.getKey(),c)}return M.resolve(i)}getOverlaysForCollectionGroup(e,r,n,i){let o=new Re((u,h)=>u-h);const s=this.overlays.getIterator();for(;s.hasNext();){const u=s.getNext().value;if(u.getKey().getCollectionGroup()===r&&u.largestBatchId>n){let h=o.get(u.largestBatchId);h===null&&(h=fi(),o=o.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const l=fi(),c=o.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>l.set(u,h)),!(l.size()>=i)););return M.resolve(l)}ht(e,r,n){const i=this.overlays.get(n.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(n.key,new TN(r,n));let o=this.Ir.get(r);o===void 0&&(o=se(),this.Ir.set(r,o)),this.Ir.set(r,o.add(n.key))}}/**
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
 */class n2{constructor(){this.sessionToken=it.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,r){return this.sessionToken=r,M.resolve()}}/**
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
 */class $m{constructor(){this.Tr=new rt(We.Er),this.dr=new rt(We.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,r){const n=new We(e,r);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,r){e.forEach(n=>this.addReference(n,r))}removeReference(e,r){this.Vr(new We(e,r))}mr(e,r){e.forEach(n=>this.removeReference(n,r))}gr(e){const r=new X(new Ee([])),n=new We(r,e),i=new We(r,e+1),o=[];return this.dr.forEachInRange([n,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const r=new X(new Ee([])),n=new We(r,e),i=new We(r,e+1);let o=se();return this.dr.forEachInRange([n,i],s=>{o=o.add(s.key)}),o}containsKey(e){const r=new We(e,0),n=this.Tr.firstAfterOrEqual(r);return n!==null&&e.isEqual(n.key)}}class We{constructor(e,r){this.key=e,this.wr=r}static Er(e,r){return X.comparator(e.key,r.key)||de(e.wr,r.wr)}static Ar(e,r){return de(e.wr,r.wr)||X.comparator(e.key,r.key)}}/**
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
 */class i2{constructor(e,r){this.indexManager=e,this.referenceDelegate=r,this.mutationQueue=[],this.Sr=1,this.br=new rt(We.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,r,n,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new IN(o,r,n,i);this.mutationQueue.push(s);for(const l of i)this.br=this.br.add(new We(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(s)}lookupMutationBatch(e,r){return M.resolve(this.Dr(r))}getNextMutationBatchAfterBatchId(e,r){const n=r+1,i=this.vr(n),o=i<0?0:i;return M.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,r){const n=new We(r,0),i=new We(r,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([n,i],s=>{const l=this.Dr(s.wr);o.push(l)}),M.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,r){let n=new rt(de);return r.forEach(i=>{const o=new We(i,0),s=new We(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],l=>{n=n.add(l.wr)})}),M.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,r){const n=r.path,i=n.length+1;let o=n;X.isDocumentKey(o)||(o=o.child(""));const s=new We(new X(o),0);let l=new rt(de);return this.br.forEachWhile(c=>{const u=c.key.path;return!!n.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.wr)),!0)},s),M.resolve(this.Cr(l))}Cr(e){const r=[];return e.forEach(n=>{const i=this.Dr(n);i!==null&&r.push(i)}),r}removeMutationBatch(e,r){ge(this.Fr(r.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return M.forEach(r.mutations,i=>{const o=new We(i.key,r.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,r){const n=new We(r,0),i=this.br.firstAfterOrEqual(n);return M.resolve(r.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,r){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const r=this.vr(e);return r<0||r>=this.mutationQueue.length?null:this.mutationQueue[r]}}/**
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
 */class o2{constructor(e){this.Mr=e,this.docs=function(){return new Re(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,r){const n=r.key,i=this.docs.get(n),o=i?i.size:0,s=this.Mr(r);return this.docs=this.docs.insert(n,{document:r.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const r=this.docs.get(e);r&&(this.docs=this.docs.remove(e),this.size-=r.size)}getEntry(e,r){const n=this.docs.get(r);return M.resolve(n?n.document.mutableCopy():pt.newInvalidDocument(r))}getEntries(e,r){let n=on();return r.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():pt.newInvalidDocument(i))}),M.resolve(n)}getDocumentsMatchingQuery(e,r,n,i){let o=on();const s=r.path,l=new X(s.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!s.isPrefixOf(u.path))break;u.path.length>s.length+1||zP(UP(h),n)<=0||(i.has(h.key)||Pu(r,h))&&(o=o.insert(h.key,h.mutableCopy()))}return M.resolve(o)}getAllFromCollectionGroup(e,r,n,i){ee()}Or(e,r){return M.forEach(this.docs,n=>r(n))}newChangeBuffer(e){return new s2(this)}getSize(e){return M.resolve(this.size)}}class s2 extends JN{constructor(e){super(),this.cr=e}applyChanges(e){const r=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?r.push(this.cr.addEntry(e,i)):this.cr.removeEntry(n)}),M.waitFor(r)}getFromCache(e,r){return this.cr.getEntry(e,r)}getAllFromCache(e,r){return this.cr.getEntries(e,r)}}/**
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
 */class a2{constructor(e){this.persistence=e,this.Nr=new Go(r=>Rm(r),Pm),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new $m,this.targetCount=0,this.kr=Do.Bn()}forEachTarget(e,r){return this.Nr.forEach((n,i)=>r(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,r,n){return n&&(this.lastRemoteSnapshotVersion=n),r>this.Lr&&(this.Lr=r),M.resolve()}Kn(e){this.Nr.set(e.target,e);const r=e.targetId;r>this.highestTargetId&&(this.kr=new Do(r),this.highestTargetId=r),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,r){return this.Kn(r),this.targetCount+=1,M.resolve()}updateTargetData(e,r){return this.Kn(r),M.resolve()}removeTargetData(e,r){return this.Nr.delete(r.target),this.Br.gr(r.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,r,n){let i=0;const o=[];return this.Nr.forEach((s,l)=>{l.sequenceNumber<=r&&n.get(l.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(o).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,r){const n=this.Nr.get(r)||null;return M.resolve(n)}addMatchingKeys(e,r,n){return this.Br.Rr(r,n),M.resolve()}removeMatchingKeys(e,r,n){this.Br.mr(r,n);const i=this.persistence.referenceDelegate,o=[];return i&&r.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),M.waitFor(o)}removeMatchingKeysForTargetId(e,r){return this.Br.gr(r),M.resolve()}getMatchingKeysForTargetId(e,r){const n=this.Br.yr(r);return M.resolve(n)}containsKey(e,r){return M.resolve(this.Br.containsKey(r))}}/**
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
 */class l2{constructor(e,r){this.qr={},this.overlays={},this.Qr=new Am(0),this.Kr=!1,this.Kr=!0,this.$r=new n2,this.referenceDelegate=e(this),this.Ur=new a2(this),this.indexManager=new YN,this.remoteDocumentCache=function(i){return new o2(i)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new GN(r),this.Gr=new t2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let r=this.overlays[e.toKey()];return r||(r=new r2,this.overlays[e.toKey()]=r),r}getMutationQueue(e,r){let n=this.qr[e.toKey()];return n||(n=new i2(r,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,r,n){Y("MemoryPersistence","Starting transaction:",e);const i=new c2(this.Qr.next());return this.referenceDelegate.zr(),n(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,r){return M.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,r)))}}class c2 extends BP{constructor(e){super(),this.currentSequenceNumber=e}}class Fm{constructor(e){this.persistence=e,this.Jr=new $m,this.Yr=null}static Zr(e){return new Fm(e)}get Xr(){if(this.Yr)return this.Yr;throw ee()}addReference(e,r,n){return this.Jr.addReference(n,r),this.Xr.delete(n.toString()),M.resolve()}removeReference(e,r,n){return this.Jr.removeReference(n,r),this.Xr.add(n.toString()),M.resolve()}markPotentiallyOrphaned(e,r){return this.Xr.add(r.toString()),M.resolve()}removeTarget(e,r){this.Jr.gr(r.targetId).forEach(i=>this.Xr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,r.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>n.removeTargetData(e,r))}zr(){this.Yr=new Set}jr(e){const r=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,n=>{const i=X.fromPath(n);return this.ei(e,i).next(o=>{o||r.removeEntry(i,te.min())})}).next(()=>(this.Yr=null,r.apply(e)))}updateLimboDocument(e,r){return this.ei(e,r).next(n=>{n?this.Xr.delete(r.toString()):this.Xr.add(r.toString())})}Wr(e){return 0}ei(e,r){return M.or([()=>M.resolve(this.Jr.containsKey(r)),()=>this.persistence.getTargetCache().containsKey(e,r),()=>this.persistence.Hr(e,r)])}}/**
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
 */class Um{constructor(e,r,n,i){this.targetId=e,this.fromCache=r,this.$i=n,this.Ui=i}static Wi(e,r){let n=se(),i=se();for(const o of r.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Um(e,r.fromCache,n,i)}}/**
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
 */class u2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class d2{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return t1()?8:qP(vt())>0?6:4}()}initialize(e,r){this.Ji=e,this.indexManager=r,this.Gi=!0}getDocumentsMatchingQuery(e,r,n,i){const o={result:null};return this.Yi(e,r).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,r,i,n).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new u2;return this.Xi(e,r,s).next(l=>{if(o.result=l,this.zi)return this.es(e,r,s,l.size)})}).next(()=>o.result)}es(e,r,n,i){return n.documentReadCount<this.ji?(ws()<=ae.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",Qi(r),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(ws()<=ae.DEBUG&&Y("QueryEngine","Query:",Qi(r),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(ws()<=ae.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",Qi(r),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kr(r))):M.resolve())}Yi(e,r){if(k_(r))return M.resolve(null);let n=kr(r);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(r.limit!==null&&i===1&&(r=Nf(r,null,"F"),n=kr(r)),this.indexManager.getDocumentsMatchingTarget(e,n).next(o=>{const s=se(...o);return this.Ji.getDocuments(e,s).next(l=>this.indexManager.getMinOffset(e,n).next(c=>{const u=this.ts(r,l);return this.ns(r,u,s,c.readTime)?this.Yi(e,Nf(r,null,"F")):this.rs(e,u,r,c)}))})))}Zi(e,r,n,i){return k_(r)||i.isEqual(te.min())?M.resolve(null):this.Ji.getDocuments(e,n).next(o=>{const s=this.ts(r,o);return this.ns(r,s,n,i)?M.resolve(null):(ws()<=ae.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Qi(r)),this.rs(e,s,r,FP(i,-1)).next(l=>l))})}ts(e,r){let n=new rt(px(e));return r.forEach((i,o)=>{Pu(e,o)&&(n=n.add(o))}),n}ns(e,r,n,i){if(e.limit===null)return!1;if(n.size!==r.size)return!0;const o=e.limitType==="F"?r.last():r.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,r,n){return ws()<=ae.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Qi(r)),this.Ji.getDocumentsMatchingQuery(e,r,Un.min(),n)}rs(e,r,n,i){return this.Ji.getDocumentsMatchingQuery(e,n,i).next(o=>(r.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
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
 */class h2{constructor(e,r,n,i){this.persistence=e,this.ss=r,this.serializer=i,this.os=new Re(de),this._s=new Go(o=>Rm(o),Pm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new e2(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",r=>e.collect(r,this.os))}}function f2(t,e,r,n){return new h2(t,e,r,n)}async function Lx(t,e){const r=re(t);return await r.persistence.runTransaction("Handle user change","readonly",n=>{let i;return r.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,r.ls(e),r.mutationQueue.getAllMutationBatches(n))).next(o=>{const s=[],l=[];let c=se();for(const u of i){s.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of o){l.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return r.localDocuments.getDocuments(n,c).next(u=>({hs:u,removedBatchIds:s,addedBatchIds:l}))})})}function p2(t,e){const r=re(t);return r.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),o=r.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,h){const p=u.batch,m=p.keys();let b=M.resolve();return m.forEach(S=>{b=b.next(()=>h.getEntry(c,S)).next(P=>{const N=u.docVersions.get(S);ge(N!==null),P.version.compareTo(N)<0&&(p.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),h.addEntry(P)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(r,n,e,o).next(()=>o.apply(n)).next(()=>r.mutationQueue.performConsistencyCheck(n)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let c=se();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>r.localDocuments.getDocuments(n,i))})}function Vx(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",r=>e.Ur.getLastRemoteSnapshotVersion(r))}function m2(t,e){const r=re(t),n=e.snapshotVersion;let i=r.os;return r.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=r.cs.newChangeBuffer({trackRemovals:!0});i=r.os;const l=[];e.targetChanges.forEach((h,p)=>{const m=i.get(p);if(!m)return;l.push(r.Ur.removeMatchingKeys(o,h.removedDocuments,p).next(()=>r.Ur.addMatchingKeys(o,h.addedDocuments,p)));let b=m.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(it.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):h.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(h.resumeToken,n)),i=i.insert(p,b),function(P,N,E){return P.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,b,h)&&l.push(r.Ur.updateTargetData(o,b))});let c=on(),u=se();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(r.persistence.referenceDelegate.updateLimboDocument(o,h))}),l.push(g2(o,s,e.documentUpdates).next(h=>{c=h.Ps,u=h.Is})),!n.isEqual(te.min())){const h=r.Ur.getLastRemoteSnapshotVersion(o).next(p=>r.Ur.setTargetsMetadata(o,o.currentSequenceNumber,n));l.push(h)}return M.waitFor(l).next(()=>s.apply(o)).next(()=>r.localDocuments.getLocalViewOfDocuments(o,c,u)).next(()=>c)}).then(o=>(r.os=i,o))}function g2(t,e,r){let n=se(),i=se();return r.forEach(o=>n=n.add(o)),e.getEntries(t,n).next(o=>{let s=on();return r.forEach((l,c)=>{const u=o.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(te.min())?(e.removeEntry(l,c.readTime),s=s.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),s=s.insert(l,c)):Y("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ps:s,Is:i}})}function v2(t,e){const r=re(t);return r.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),r.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function y2(t,e){const r=re(t);return r.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return r.Ur.getTargetData(n,e).next(o=>o?(i=o,M.resolve(i)):r.Ur.allocateTargetId(n).next(s=>(i=new An(e,s,"TargetPurposeListen",n.currentSequenceNumber),r.Ur.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=r.os.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(r.os=r.os.insert(n.targetId,n),r._s.set(e,n.targetId)),n})}async function Mf(t,e,r){const n=re(t),i=n.os.get(e),o=r?"readwrite":"readwrite-primary";try{r||await n.persistence.runTransaction("Release target",o,s=>n.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!Ha(s))throw s;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}n.os=n.os.remove(e),n._s.delete(i.target)}function F_(t,e,r){const n=re(t);let i=te.min(),o=se();return n.persistence.runTransaction("Execute query","readwrite",s=>function(c,u,h){const p=re(c),m=p._s.get(h);return m!==void 0?M.resolve(p.os.get(m)):p.Ur.getTargetData(u,h)}(n,s,kr(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(s,l.targetId).next(c=>{o=c})}).next(()=>n.ss.getDocumentsMatchingQuery(s,e,r?i:te.min(),r?o:se())).next(l=>(_2(n,lN(e),l),{documents:l,Ts:o})))}function _2(t,e,r){let n=t.us.get(e)||te.min();r.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),t.us.set(e,n)}class U_{constructor(){this.activeTargetIds=pN()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class w2{constructor(){this.so=new U_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,r,n){}addLocalQueryTarget(e,r=!0){return r&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,r,n){this.oo[e]=r}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new U_,Promise.resolve()}handleUserChange(e,r,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class b2{_o(e){}shutdown(){}}/**
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
 */class z_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $l=null;function th(){return $l===null?$l=function(){return 268435456+Math.round(2147483648*Math.random())}():$l++,"0x"+$l.toString(16)}/**
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
 */const E2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class x2{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const dt="WebChannelConnection";class I2 extends class{constructor(r){this.databaseInfo=r,this.databaseId=r.databaseId;const n=r.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+r.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(r,n,i,o,s){const l=th(),c=this.xo(r,n.toUriEncodedString());Y("RestConnection",`Sending RPC '${r}' ${l}:`,c,i);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,o,s),this.No(r,c,u,i).then(h=>(Y("RestConnection",`Received RPC '${r}' ${l}: `,h),h),h=>{throw Ro("RestConnection",`RPC '${r}' ${l} failed with error: `,h,"url: ",c,"request:",i),h})}Lo(r,n,i,o,s,l){return this.Mo(r,n,i,o,s)}Oo(r,n,i){r["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wo}(),r["Content-Type"]="text/plain",this.databaseInfo.appId&&(r["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,s)=>r[s]=o),i&&i.headers.forEach((o,s)=>r[s]=o)}xo(r,n){const i=E2[r];return`${this.Do}/v1/${n}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,r,n,i){const o=th();return new Promise((s,l)=>{const c=new YE;c.setWithCredentials(!0),c.listenOnce(XE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case dc.NO_ERROR:const h=c.getResponseJson();Y(dt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(h)),s(h);break;case dc.TIMEOUT:Y(dt,`RPC '${e}' ${o} timed out`),l(new G(V.DEADLINE_EXCEEDED,"Request time out"));break;case dc.HTTP_ERROR:const p=c.getStatus();if(Y(dt,`RPC '${e}' ${o} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const b=m==null?void 0:m.error;if(b&&b.status&&b.message){const S=function(N){const E=N.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(E)>=0?E:V.UNKNOWN}(b.status);l(new G(S,b.message))}else l(new G(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new G(V.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{Y(dt,`RPC '${e}' ${o} completed.`)}});const u=JSON.stringify(i);Y(dt,`RPC '${e}' ${o} sending request:`,i),c.send(r,"POST",u,n,15)})}Bo(e,r,n){const i=th(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=ex(),l=ZE(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,r,n),c.encodeInitMessageHeaders=!0;const h=o.join("");Y(dt,`Creating RPC '${e}' stream ${i}: ${h}`,c);const p=s.createWebChannel(h,c);let m=!1,b=!1;const S=new x2({Io:N=>{b?Y(dt,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(m||(Y(dt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),Y(dt,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},To:()=>p.close()}),P=(N,E,y)=>{N.listen(E,T=>{try{y(T)}catch(D){setTimeout(()=>{throw D},0)}})};return P(p,Ps.EventType.OPEN,()=>{b||(Y(dt,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),P(p,Ps.EventType.CLOSE,()=>{b||(b=!0,Y(dt,`RPC '${e}' stream ${i} transport closed`),S.So())}),P(p,Ps.EventType.ERROR,N=>{b||(b=!0,Ro(dt,`RPC '${e}' stream ${i} transport errored:`,N),S.So(new G(V.UNAVAILABLE,"The operation could not be completed")))}),P(p,Ps.EventType.MESSAGE,N=>{var E;if(!b){const y=N.data[0];ge(!!y);const T=y,D=T.error||((E=T[0])===null||E===void 0?void 0:E.error);if(D){Y(dt,`RPC '${e}' stream ${i} received error:`,D);const U=D.status;let z=function(_){const x=Ue[_];if(x!==void 0)return Tx(x)}(U),w=D.message;z===void 0&&(z=V.INTERNAL,w="Unknown error status: "+U+" with message "+D.message),b=!0,S.So(new G(z,w)),p.close()}else Y(dt,`RPC '${e}' stream ${i} received:`,y),S.bo(y)}}),P(l,JE.STAT_EVENT,N=>{N.stat===Af.PROXY?Y(dt,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Af.NOPROXY&&Y(dt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function rh(){return typeof document<"u"?document:null}/**
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
 */function Lu(t){return new DN(t,!0)}/**
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
 */class Mx{constructor(e,r,n=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=r,this.ko=n,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const r=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,r-n);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${r} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class $x{constructor(e,r,n,i,o,s,l,c){this.ui=e,this.Ho=n,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Mx(e,r)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,r){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():r&&r.code===V.RESOURCE_EXHAUSTED?(nn(r.toString()),nn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):r&&r.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(r)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),r=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Yo===r&&this.P_(n,i)},n=>{e(()=>{const i=new G(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(i)})})}P_(e,r){const n=this.h_(this.Yo);this.stream=this.T_(e,r),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{n(()=>this.I_(i))}),this.stream.onMessage(i=>{n(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return r=>{this.ui.enqueueAndForget(()=>this.Yo===e?r():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class T2 extends $x{constructor(e,r,n,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",r,n,i,s),this.serializer=o}T_(e,r){return this.connection.Bo("Listen",e,r)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const r=MN(this.serializer,e),n=function(o){if(!("targetChange"in o))return te.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?te.min():s.readTime?Cr(s.readTime):te.min()}(e);return this.listener.d_(r,n)}A_(e){const r={};r.database=Vf(this.serializer),r.addTarget=function(o,s){let l;const c=s.target;if(l=Rf(c)?{documents:UN(o,c)}:{query:zN(o,c)._t},l.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){l.resumeToken=kx(o,s.resumeToken);const u=Of(o,s.expectedCount);u!==null&&(l.expectedCount=u)}else if(s.snapshotVersion.compareTo(te.min())>0){l.readTime=eu(o,s.snapshotVersion.toTimestamp());const u=Of(o,s.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const n=BN(this.serializer,e);n&&(r.labels=n),this.a_(r)}R_(e){const r={};r.database=Vf(this.serializer),r.removeTarget=e,this.a_(r)}}class A2 extends $x{constructor(e,r,n,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",r,n,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,r){return this.connection.Bo("Write",e,r)}E_(e){return ge(!!e.streamToken),this.lastStreamToken=e.streamToken,ge(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const r=FN(e.writeResults,e.commitTime),n=Cr(e.commitTime);return this.listener.g_(n,r)}p_(){const e={};e.database=Vf(this.serializer),this.a_(e)}m_(e){const r={streamToken:this.lastStreamToken,writes:e.map(n=>$N(this.serializer,n))};this.a_(r)}}/**
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
 */class S2 extends class{}{constructor(e,r,n,i){super(),this.authCredentials=e,this.appCheckCredentials=r,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new G(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,r,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,Df(r,n),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(V.UNKNOWN,o.toString())})}Lo(e,r,n,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,l])=>this.connection.Lo(e,Df(r,n),i,s,l,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(V.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class k2{constructor(e,r){this.asyncQueue=e,this.onlineStateHandler=r,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const r=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(nn(r),this.D_=!1):Y("OnlineStateTracker",r)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class C2{constructor(e,r,n,i,o){this.localStore=e,this.datastore=r,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{n.enqueueAndForget(async()=>{Fi(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=re(c);u.L_.add(4),await Ga(u),u.q_.set("Unknown"),u.L_.delete(4),await Vu(u)}(this))})}),this.q_=new k2(n,i)}}async function Vu(t){if(Fi(t))for(const e of t.B_)await e(!0)}async function Ga(t){for(const e of t.B_)await e(!1)}function Fx(t,e){const r=re(t);r.N_.has(e.targetId)||(r.N_.set(e.targetId,e),qm(r)?Bm(r):Qo(r).r_()&&jm(r,e))}function zm(t,e){const r=re(t),n=Qo(r);r.N_.delete(e),n.r_()&&Ux(r,e),r.N_.size===0&&(n.r_()?n.o_():Fi(r)&&r.q_.set("Unknown"))}function jm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const r=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(r)}Qo(t).A_(e)}function Ux(t,e){t.Q_.xe(e),Qo(t).R_(e)}function Bm(t){t.Q_=new RN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Qo(t).start(),t.q_.v_()}function qm(t){return Fi(t)&&!Qo(t).n_()&&t.N_.size>0}function Fi(t){return re(t).L_.size===0}function zx(t){t.Q_=void 0}async function R2(t){t.q_.set("Online")}async function P2(t){t.N_.forEach((e,r)=>{jm(t,e)})}async function N2(t,e){zx(t),qm(t)?(t.q_.M_(e),Bm(t)):t.q_.set("Unknown")}async function O2(t,e,r){if(t.q_.set("Online"),e instanceof Sx&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const l of o.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,s),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(n){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await tu(t,n)}else if(e instanceof pc?t.Q_.Ke(e):e instanceof Ax?t.Q_.He(e):t.Q_.We(e),!r.isEqual(te.min()))try{const n=await Vx(t.localStore);r.compareTo(n)>=0&&await function(o,s){const l=o.Q_.rt(s);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=o.N_.get(u);h&&o.N_.set(u,h.withResumeToken(c.resumeToken,s))}}),l.targetMismatches.forEach((c,u)=>{const h=o.N_.get(c);if(!h)return;o.N_.set(c,h.withResumeToken(it.EMPTY_BYTE_STRING,h.snapshotVersion)),Ux(o,c);const p=new An(h.target,c,u,h.sequenceNumber);jm(o,p)}),o.remoteSyncer.applyRemoteEvent(l)}(t,r)}catch(n){Y("RemoteStore","Failed to raise snapshot:",n),await tu(t,n)}}async function tu(t,e,r){if(!Ha(e))throw e;t.L_.add(1),await Ga(t),t.q_.set("Offline"),r||(r=()=>Vx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await r(),t.L_.delete(1),await Vu(t)})}function jx(t,e){return e().catch(r=>tu(t,r,e))}async function Mu(t){const e=re(t),r=jn(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;D2(e);)try{const i=await v2(e.localStore,n);if(i===null){e.O_.length===0&&r.o_();break}n=i.batchId,L2(e,i)}catch(i){await tu(e,i)}Bx(e)&&qx(e)}function D2(t){return Fi(t)&&t.O_.length<10}function L2(t,e){t.O_.push(e);const r=jn(t);r.r_()&&r.V_&&r.m_(e.mutations)}function Bx(t){return Fi(t)&&!jn(t).n_()&&t.O_.length>0}function qx(t){jn(t).start()}async function V2(t){jn(t).p_()}async function M2(t){const e=jn(t);for(const r of t.O_)e.m_(r.mutations)}async function $2(t,e,r){const n=t.O_.shift(),i=Lm.from(n,e,r);await jx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Mu(t)}async function F2(t,e){e&&jn(t).V_&&await async function(n,i){if(function(s){return SN(s)&&s!==V.ABORTED}(i.code)){const o=n.O_.shift();jn(n).s_(),await jx(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Mu(n)}}(t,e),Bx(t)&&qx(t)}async function j_(t,e){const r=re(t);r.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const n=Fi(r);r.L_.add(3),await Ga(r),n&&r.q_.set("Unknown"),await r.remoteSyncer.handleCredentialChange(e),r.L_.delete(3),await Vu(r)}async function U2(t,e){const r=re(t);e?(r.L_.delete(2),await Vu(r)):e||(r.L_.add(2),await Ga(r),r.q_.set("Unknown"))}function Qo(t){return t.K_||(t.K_=function(r,n,i){const o=re(r);return o.w_(),new T2(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:R2.bind(null,t),Ro:P2.bind(null,t),mo:N2.bind(null,t),d_:O2.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),qm(t)?Bm(t):t.q_.set("Unknown")):(await t.K_.stop(),zx(t))})),t.K_}function jn(t){return t.U_||(t.U_=function(r,n,i){const o=re(r);return o.w_(),new A2(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:V2.bind(null,t),mo:F2.bind(null,t),f_:M2.bind(null,t),g_:$2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Mu(t)):(await t.U_.stop(),t.O_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Hm{constructor(e,r,n,i,o){this.asyncQueue=e,this.timerId=r,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new _i,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,r,n,i,o){const s=Date.now()+n,l=new Hm(e,r,s,i,o);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wm(t,e){if(nn("AsyncQueue",`${e}: ${t}`),Ha(t))return new G(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class bo{constructor(e){this.comparator=e?(r,n)=>e(r,n)||X.comparator(r.key,n.key):(r,n)=>X.comparator(r.key,n.key),this.keyedMap=Ns(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new bo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const r=this.keyedMap.get(e);return r?this.sortedSet.indexOf(r):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((r,n)=>(e(r),!1))}add(e){const r=this.delete(e.key);return r.copy(r.keyedMap.insert(e.key,e),r.sortedSet.insert(e,null))}delete(e){const r=this.get(e);return r?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(r)):this}isEqual(e){if(!(e instanceof bo)||this.size!==e.size)return!1;const r=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;r.hasNext();){const i=r.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(r=>{e.push(r.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,r){const n=new bo;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=r,n}}/**
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
 */class B_{constructor(){this.W_=new Re(X.comparator)}track(e){const r=e.doc.key,n=this.W_.get(r);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(r,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(r,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(r,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(r,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(r):e.type===1&&n.type===2?this.W_=this.W_.insert(r,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(r,{type:2,doc:e.doc}):ee():this.W_=this.W_.insert(r,e)}G_(){const e=[];return this.W_.inorderTraversal((r,n)=>{e.push(n)}),e}}class Lo{constructor(e,r,n,i,o,s,l,c,u){this.query=e,this.docs=r,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,r,n,i,o){const s=[];return r.forEach(l=>{s.push({type:0,doc:l})}),new Lo(e,r,bo.emptySet(r),s,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ru(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const r=this.docChanges,n=e.docChanges;if(r.length!==n.length)return!1;for(let i=0;i<r.length;i++)if(r[i].type!==n[i].type||!r[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class z2{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class j2{constructor(){this.queries=q_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(r,n){const i=re(r),o=i.queries;i.queries=q_(),o.forEach((s,l)=>{for(const c of l.j_)c.onError(n)})})(this,new G(V.ABORTED,"Firestore shutting down"))}}function q_(){return new Go(t=>fx(t),Ru)}async function B2(t,e){const r=re(t);let n=3;const i=e.query;let o=r.queries.get(i);o?!o.H_()&&e.J_()&&(n=2):(o=new z2,n=e.J_()?0:1);try{switch(n){case 0:o.z_=await r.onListen(i,!0);break;case 1:o.z_=await r.onListen(i,!1);break;case 2:await r.onFirstRemoteStoreListen(i)}}catch(s){const l=Wm(s,`Initialization of query '${Qi(e.query)}' failed`);return void e.onError(l)}r.queries.set(i,o),o.j_.push(e),e.Z_(r.onlineState),o.z_&&e.X_(o.z_)&&Km(r)}async function q2(t,e){const r=re(t),n=e.query;let i=3;const o=r.queries.get(n);if(o){const s=o.j_.indexOf(e);s>=0&&(o.j_.splice(s,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return r.queries.delete(n),r.onUnlisten(n,!0);case 1:return r.queries.delete(n),r.onUnlisten(n,!1);case 2:return r.onLastRemoteStoreUnlisten(n);default:return}}function H2(t,e){const r=re(t);let n=!1;for(const i of e){const o=i.query,s=r.queries.get(o);if(s){for(const l of s.j_)l.X_(i)&&(n=!0);s.z_=i}}n&&Km(r)}function W2(t,e,r){const n=re(t),i=n.queries.get(e);if(i)for(const o of i.j_)o.onError(r);n.queries.delete(e)}function Km(t){t.Y_.forEach(e=>{e.next()})}var $f,H_;(H_=$f||($f={})).ea="default",H_.Cache="cache";class K2{constructor(e,r,n){this.query=e,this.ta=r,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new Lo(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let r=!1;return this.na?this.ia(e)&&(this.ta.next(e),r=!0):this.sa(e,this.onlineState)&&(this.oa(e),r=!0),this.ra=e,r}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let r=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),r=!0),r}sa(e,r){if(!e.fromCache||!this.J_())return!0;const n=r!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||r==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const r=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!r)&&this.options.includeMetadataChanges===!0}oa(e){e=Lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==$f.Cache}}/**
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
 */class Hx{constructor(e){this.key=e}}class Wx{constructor(e){this.key=e}}class G2{constructor(e,r){this.query=e,this.Ta=r,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=se(),this.mutatedKeys=se(),this.Aa=px(e),this.Ra=new bo(this.Aa)}get Va(){return this.Ta}ma(e,r){const n=r?r.fa:new B_,i=r?r.Ra:this.Ra;let o=r?r.mutatedKeys:this.mutatedKeys,s=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,p)=>{const m=i.get(h),b=Pu(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),P=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let N=!1;m&&b?m.data.isEqual(b.data)?S!==P&&(n.track({type:3,doc:b}),N=!0):this.ga(m,b)||(n.track({type:2,doc:b}),N=!0,(c&&this.Aa(b,c)>0||u&&this.Aa(b,u)<0)&&(l=!0)):!m&&b?(n.track({type:0,doc:b}),N=!0):m&&!b&&(n.track({type:1,doc:m}),N=!0,(c||u)&&(l=!0)),N&&(b?(s=s.add(b),o=P?o.add(h):o.delete(h)):(s=s.delete(h),o=o.delete(h)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const h=this.query.limitType==="F"?s.last():s.first();s=s.delete(h.key),o=o.delete(h.key),n.track({type:1,doc:h})}return{Ra:s,fa:n,ns:l,mutatedKeys:o}}ga(e,r){return e.hasLocalMutations&&r.hasCommittedMutations&&!r.hasLocalMutations}applyChanges(e,r,n,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((h,p)=>function(b,S){const P=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return P(b)-P(S)}(h.type,p.type)||this.Aa(h.doc,p.doc)),this.pa(n),i=i!=null&&i;const l=r&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,u=c!==this.Ea;return this.Ea=c,s.length!==0||u?{snapshot:new Lo(this.query,e.Ra,o,s,e.mutatedKeys,c===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new B_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(r=>this.Ta=this.Ta.add(r)),e.modifiedDocuments.forEach(r=>{}),e.removedDocuments.forEach(r=>this.Ta=this.Ta.delete(r)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=se(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const r=[];return e.forEach(n=>{this.da.has(n)||r.push(new Wx(n))}),this.da.forEach(n=>{e.has(n)||r.push(new Hx(n))}),r}ba(e){this.Ta=e.Ts,this.da=se();const r=this.ma(e.documents);return this.applyChanges(r,!0)}Da(){return Lo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Q2{constructor(e,r,n){this.query=e,this.targetId=r,this.view=n}}class Y2{constructor(e){this.key=e,this.va=!1}}class X2{constructor(e,r,n,i,o,s){this.localStore=e,this.remoteStore=r,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new Go(l=>fx(l),Ru),this.Ma=new Map,this.xa=new Set,this.Oa=new Re(X.comparator),this.Na=new Map,this.La=new $m,this.Ba={},this.ka=new Map,this.qa=Do.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function J2(t,e,r=!0){const n=Jx(t);let i;const o=n.Fa.get(e);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await Kx(n,e,r,!0),i}async function Z2(t,e){const r=Jx(t);await Kx(r,e,!0,!1)}async function Kx(t,e,r,n){const i=await y2(t.localStore,kr(e)),o=i.targetId,s=t.sharedClientState.addLocalQueryTarget(o,r);let l;return n&&(l=await eO(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&r&&Fx(t.remoteStore,i),l}async function eO(t,e,r,n,i){t.Ka=(p,m,b)=>async function(P,N,E,y){let T=N.view.ma(E);T.ns&&(T=await F_(P.localStore,N.query,!1).then(({documents:w})=>N.view.ma(w,T)));const D=y&&y.targetChanges.get(N.targetId),U=y&&y.targetMismatches.get(N.targetId)!=null,z=N.view.applyChanges(T,P.isPrimaryClient,D,U);return K_(P,N.targetId,z.wa),z.snapshot}(t,p,m,b);const o=await F_(t.localStore,e,!0),s=new G2(e,o.Ts),l=s.ma(o.documents),c=Ka.createSynthesizedTargetChangeForCurrentChange(r,n&&t.onlineState!=="Offline",i),u=s.applyChanges(l,t.isPrimaryClient,c);K_(t,r,u.wa);const h=new Q2(e,r,s);return t.Fa.set(e,h),t.Ma.has(r)?t.Ma.get(r).push(e):t.Ma.set(r,[e]),u.snapshot}async function tO(t,e,r){const n=re(t),i=n.Fa.get(e),o=n.Ma.get(i.targetId);if(o.length>1)return n.Ma.set(i.targetId,o.filter(s=>!Ru(s,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Mf(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),r&&zm(n.remoteStore,i.targetId),Ff(n,i.targetId)}).catch(qa)):(Ff(n,i.targetId),await Mf(n.localStore,i.targetId,!0))}async function rO(t,e){const r=re(t),n=r.Fa.get(e),i=r.Ma.get(n.targetId);r.isPrimaryClient&&i.length===1&&(r.sharedClientState.removeLocalQueryTarget(n.targetId),zm(r.remoteStore,n.targetId))}async function nO(t,e,r){const n=uO(t);try{const i=await function(s,l){const c=re(s),u=He.now(),h=l.reduce((b,S)=>b.add(S.key),se());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",b=>{let S=on(),P=se();return c.cs.getEntries(b,h).next(N=>{S=N,S.forEach((E,y)=>{y.isValidDocument()||(P=P.add(E))})}).next(()=>c.localDocuments.getOverlayedDocuments(b,S)).next(N=>{p=N;const E=[];for(const y of l){const T=EN(y,p.get(y.key).overlayedDocument);T!=null&&E.push(new Qn(y.key,T,ox(T.value.mapValue),Jt.exists(!0)))}return c.mutationQueue.addMutationBatch(b,u,E,l)}).next(N=>{m=N;const E=N.applyToLocalDocumentSet(p,P);return c.documentOverlayCache.saveOverlays(b,N.batchId,E)})}).then(()=>({batchId:m.batchId,changes:gx(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(s,l,c){let u=s.Ba[s.currentUser.toKey()];u||(u=new Re(de)),u=u.insert(l,c),s.Ba[s.currentUser.toKey()]=u}(n,i.batchId,r),await Qa(n,i.changes),await Mu(n.remoteStore)}catch(i){const o=Wm(i,"Failed to persist write");r.reject(o)}}async function Gx(t,e){const r=re(t);try{const n=await m2(r.localStore,e);e.targetChanges.forEach((i,o)=>{const s=r.Na.get(o);s&&(ge(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.va=!0:i.modifiedDocuments.size>0?ge(s.va):i.removedDocuments.size>0&&(ge(s.va),s.va=!1))}),await Qa(r,n,e)}catch(n){await qa(n)}}function W_(t,e,r){const n=re(t);if(n.isPrimaryClient&&r===0||!n.isPrimaryClient&&r===1){const i=[];n.Fa.forEach((o,s)=>{const l=s.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(s,l){const c=re(s);c.onlineState=l;let u=!1;c.queries.forEach((h,p)=>{for(const m of p.j_)m.Z_(l)&&(u=!0)}),u&&Km(c)}(n.eventManager,e),i.length&&n.Ca.d_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function iO(t,e,r){const n=re(t);n.sharedClientState.updateQueryState(e,"rejected",r);const i=n.Na.get(e),o=i&&i.key;if(o){let s=new Re(X.comparator);s=s.insert(o,pt.newNoDocument(o,te.min()));const l=se().add(o),c=new Du(te.min(),new Map,new Re(de),s,l);await Gx(n,c),n.Oa=n.Oa.remove(o),n.Na.delete(e),Gm(n)}else await Mf(n.localStore,e,!1).then(()=>Ff(n,e,r)).catch(qa)}async function oO(t,e){const r=re(t),n=e.batch.batchId;try{const i=await p2(r.localStore,e);Yx(r,n,null),Qx(r,n),r.sharedClientState.updateMutationState(n,"acknowledged"),await Qa(r,i)}catch(i){await qa(i)}}async function sO(t,e,r){const n=re(t);try{const i=await function(s,l){const c=re(s);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(ge(p!==null),h=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(n.localStore,e);Yx(n,e,r),Qx(n,e),n.sharedClientState.updateMutationState(e,"rejected",r),await Qa(n,i)}catch(i){await qa(i)}}function Qx(t,e){(t.ka.get(e)||[]).forEach(r=>{r.resolve()}),t.ka.delete(e)}function Yx(t,e,r){const n=re(t);let i=n.Ba[n.currentUser.toKey()];if(i){const o=i.get(e);o&&(r?o.reject(r):o.resolve(),i=i.remove(e)),n.Ba[n.currentUser.toKey()]=i}}function Ff(t,e,r=null){t.sharedClientState.removeLocalQueryTarget(e);for(const n of t.Ma.get(e))t.Fa.delete(n),r&&t.Ca.$a(n,r);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(n=>{t.La.containsKey(n)||Xx(t,n)})}function Xx(t,e){t.xa.delete(e.path.canonicalString());const r=t.Oa.get(e);r!==null&&(zm(t.remoteStore,r),t.Oa=t.Oa.remove(e),t.Na.delete(r),Gm(t))}function K_(t,e,r){for(const n of r)n instanceof Hx?(t.La.addReference(n.key,e),aO(t,n)):n instanceof Wx?(Y("SyncEngine","Document no longer in limbo: "+n.key),t.La.removeReference(n.key,e),t.La.containsKey(n.key)||Xx(t,n.key)):ee()}function aO(t,e){const r=e.key,n=r.path.canonicalString();t.Oa.get(r)||t.xa.has(n)||(Y("SyncEngine","New document in limbo: "+r),t.xa.add(n),Gm(t))}function Gm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const r=new X(Ee.fromString(e)),n=t.qa.next();t.Na.set(n,new Y2(r)),t.Oa=t.Oa.insert(r,n),Fx(t.remoteStore,new An(kr(Nm(r.path)),n,"TargetPurposeLimboResolution",Am.oe))}}async function Qa(t,e,r){const n=re(t),i=[],o=[],s=[];n.Fa.isEmpty()||(n.Fa.forEach((l,c)=>{s.push(n.Ka(c,e,r).then(u=>{var h;if((u||r)&&n.isPrimaryClient){const p=u?!u.fromCache:(h=r==null?void 0:r.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;n.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){i.push(u);const p=Um.Wi(c.targetId,u);o.push(p)}}))}),await Promise.all(s),n.Ca.d_(i),await async function(c,u){const h=re(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(u,m=>M.forEach(m.$i,b=>h.persistence.referenceDelegate.addReference(p,m.targetId,b)).next(()=>M.forEach(m.Ui,b=>h.persistence.referenceDelegate.removeReference(p,m.targetId,b)))))}catch(p){if(!Ha(p))throw p;Y("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const b=h.os.get(m),S=b.snapshotVersion,P=b.withLastLimboFreeSnapshotVersion(S);h.os=h.os.insert(m,P)}}}(n.localStore,o))}async function lO(t,e){const r=re(t);if(!r.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const n=await Lx(r.localStore,e);r.currentUser=e,function(o,s){o.ka.forEach(l=>{l.forEach(c=>{c.reject(new G(V.CANCELLED,s))})}),o.ka.clear()}(r,"'waitForPendingWrites' promise is rejected due to a user change."),r.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Qa(r,n.hs)}}function cO(t,e){const r=re(t),n=r.Na.get(e);if(n&&n.va)return se().add(n.key);{let i=se();const o=r.Ma.get(e);if(!o)return i;for(const s of o){const l=r.Fa.get(s);i=i.unionWith(l.view.Va)}return i}}function Jx(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iO.bind(null,e),e.Ca.d_=H2.bind(null,e.eventManager),e.Ca.$a=W2.bind(null,e.eventManager),e}function uO(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sO.bind(null,e),e}class ru{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Lu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,r){return null}Ha(e,r){return null}za(e){return f2(this.persistence,new d2,e.initialUser,this.serializer)}Ga(e){return new l2(Fm.Zr,this.serializer)}Wa(e){return new w2}async terminate(){var e,r;(e=this.gcScheduler)===null||e===void 0||e.stop(),(r=this.indexBackfillerScheduler)===null||r===void 0||r.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ru.provider={build:()=>new ru};class Uf{async initialize(e,r){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(r),this.remoteStore=this.createRemoteStore(r),this.eventManager=this.createEventManager(r),this.syncEngine=this.createSyncEngine(r,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>W_(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=lO.bind(null,this.syncEngine),await U2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new j2}()}createDatastore(e){const r=Lu(e.databaseInfo.databaseId),n=function(o){return new I2(o)}(e.databaseInfo);return function(o,s,l,c){return new S2(o,s,l,c)}(e.authCredentials,e.appCheckCredentials,n,r)}createRemoteStore(e){return function(n,i,o,s,l){return new C2(n,i,o,s,l)}(this.localStore,this.datastore,e.asyncQueue,r=>W_(this.syncEngine,r,0),function(){return z_.D()?new z_:new b2}())}createSyncEngine(e,r){return function(i,o,s,l,c,u,h){const p=new X2(i,o,s,l,c,u);return h&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,r)}async terminate(){var e,r;await async function(i){const o=re(i);Y("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Ga(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(r=this.eventManager)===null||r===void 0||r.terminate()}}Uf.provider={build:()=>new Uf};/**
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
 */class dO{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):nn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,r){setTimeout(()=>{this.muted||e(r)},0)}}/**
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
 */class hO{constructor(e,r,n,i,o){this.authCredentials=e,this.appCheckCredentials=r,this.asyncQueue=n,this.databaseInfo=i,this.user=ht.UNAUTHENTICATED,this.clientId=rx.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async s=>{Y("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(n,s=>(Y("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _i;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){const n=Wm(r,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function nh(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const r=t.configuration;await e.initialize(r);let n=r.initialUser;t.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Lx(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function G_(t,e){t.asyncQueue.verifyOperationInProgress();const r=await fO(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(r,t.configuration),t.setCredentialChangeListener(n=>j_(e.remoteStore,n)),t.setAppCheckTokenChangeListener((n,i)=>j_(e.remoteStore,i)),t._onlineComponents=e}async function fO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await nh(t,t._uninitializedComponentsProvider._offline)}catch(e){const r=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(r))throw r;Ro("Error using user provided cache. Falling back to memory cache: "+r),await nh(t,new ru)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await nh(t,new ru);return t._offlineComponents}async function Zx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await G_(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await G_(t,new Uf))),t._onlineComponents}function pO(t){return Zx(t).then(e=>e.syncEngine)}async function Q_(t){const e=await Zx(t),r=e.eventManager;return r.onListen=J2.bind(null,e.syncEngine),r.onUnlisten=tO.bind(null,e.syncEngine),r.onFirstRemoteStoreListen=Z2.bind(null,e.syncEngine),r.onLastRemoteStoreUnlisten=rO.bind(null,e.syncEngine),r}/**
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
 */function eI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Y_=new Map;/**
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
 */function tI(t,e,r){if(!r)throw new G(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mO(t,e,r,n){if(e===!0&&n===!0)throw new G(V.INVALID_ARGUMENT,`${t} and ${r} cannot be used together.`)}function X_(t){if(!X.isDocumentKey(t))throw new G(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function J_(t){if(X.isDocumentKey(t))throw new G(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $u(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Rr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=$u(t);throw new G(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${r}`)}}return t}/**
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
 */class Z_{constructor(e){var r,n;if(e.host===void 0){if(e.ssl!==void 0)throw new G(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(r=e.ssl)===null||r===void 0||r;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eI((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fu{constructor(e,r,n,i){this._authCredentials=e,this._appCheckCredentials=r,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Z_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Z_(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new RP;switch(n.type){case"firstParty":return new DP(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new G(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(r){const n=Y_.get(r);n&&(Y("ComponentProvider","Removing Datastore"),Y_.delete(r),n.terminate())}(this),Promise.resolve()}}function gO(t,e,r,n={}){var i;const o=(t=Rr(t,Fu))._getSettings(),s=`${e}:${r}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Ro("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),n.mockUserToken){let l,c;if(typeof n.mockUserToken=="string")l=n.mockUserToken,c=ht.MOCK_USER;else{l=Gk(n.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=n.mockUserToken.sub||n.mockUserToken.user_id;if(!u)throw new G(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ht(u)}t._authCredentials=new PP(new tx(l,c))}}/**
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
 */class Ui{constructor(e,r,n){this.converter=r,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ui(this.firestore,e,this._query)}}class xt{constructor(e,r,n){this.converter=r,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xt(this.firestore,e,this._key)}}class Vn extends Ui{constructor(e,r,n){super(e,r,Nm(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xt(this.firestore,null,new X(e))}withConverter(e){return new Vn(this.firestore,e,this._path)}}function ew(t,e,...r){if(t=Oe(t),tI("collection","path",e),t instanceof Fu){const n=Ee.fromString(e,...r);return J_(n),new Vn(t,null,n)}{if(!(t instanceof xt||t instanceof Vn))throw new G(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(Ee.fromString(e,...r));return J_(n),new Vn(t.firestore,null,n)}}function cr(t,e,...r){if(t=Oe(t),arguments.length===1&&(e=rx.newId()),tI("doc","path",e),t instanceof Fu){const n=Ee.fromString(e,...r);return X_(n),new xt(t,null,new X(n))}{if(!(t instanceof xt||t instanceof Vn))throw new G(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(Ee.fromString(e,...r));return X_(n),new xt(t.firestore,t instanceof Vn?t.converter:null,new X(n))}}/**
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
 */class tw{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Mx(this,"async_queue_retry"),this.Vu=()=>{const n=rh();n&&Y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const r=rh();r&&typeof r.addEventListener=="function"&&r.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const r=rh();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const r=new _i;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(r.resolve,r.reject),r.promise)).then(()=>r.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ha(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const r=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const i=function(s){let l=s.message||"";return s.stack&&(l=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),l}(n);throw nn("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.du=!1,n))));return this.mu=r,r}enqueueAfterDelay(e,r,n){this.fu(),this.Ru.indexOf(e)>-1&&(r=0);const i=Hm.createAndSchedule(this,e,r,n,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&ee()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const r of this.Tu)if(r.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((r,n)=>r.targetTimeMs-n.targetTimeMs);for(const r of this.Tu)if(r.skipDelay(),e!=="all"&&r.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const r=this.Tu.indexOf(e);this.Tu.splice(r,1)}}function rw(t){return function(r,n){if(typeof r!="object"||r===null)return!1;const i=r;for(const o of n)if(o in i&&typeof i[o]=="function")return!0;return!1}(t,["next","error","complete"])}class Pi extends Fu{constructor(e,r,n,i){super(e,r,n,i),this.type="firestore",this._queue=new tw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new tw(e),this._firestoreClient=void 0,await e}}}function vO(t,e){const r=typeof t=="object"?t:fm(),n=typeof t=="string"?t:"(default)",i=jo(r,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=Wk("firestore");o&&gO(i,...o)}return i}function rI(t){if(t._terminated)throw new G(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||yO(t),t._firestoreClient}function yO(t){var e,r,n;const i=t._freezeSettings(),o=function(l,c,u,h){return new KP(l,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,eI(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((r=i.localCache)===null||r===void 0)&&r._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new hO(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Vo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vo(it.fromBase64String(e))}catch(r){throw new G(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(e){return new Vo(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Uu{constructor(...e){for(let r=0;r<e.length;++r)if(e[r].length===0)throw new G(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class zu{constructor(e){this._methodName=e}}/**
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
 */class Qm{constructor(e,r){if(!isFinite(e)||e<-90||e>90)throw new G(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(r)||r<-180||r>180)throw new G(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=e,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
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
 */class Ym{constructor(e){this._values=(e||[]).map(r=>r)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const _O=/^__.*__$/;class wO{constructor(e,r,n){this.data=e,this.fieldMask=r,this.fieldTransforms=n}toMutation(e,r){return this.fieldMask!==null?new Qn(e,this.data,this.fieldMask,r,this.fieldTransforms):new Wa(e,this.data,r,this.fieldTransforms)}}class nI{constructor(e,r,n){this.data=e,this.fieldMask=r,this.fieldTransforms=n}toMutation(e,r){return new Qn(e,this.data,this.fieldMask,r,this.fieldTransforms)}}function iI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class Xm{constructor(e,r,n,i,o,s){this.settings=e,this.databaseId=r,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Xm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var r;const n=(r=this.path)===null||r===void 0?void 0:r.child(e),i=this.Fu({path:n,xu:!1});return i.Ou(e),i}Nu(e){var r;const n=(r=this.path)===null||r===void 0?void 0:r.child(e),i=this.Fu({path:n,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return nu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(r=>e.isPrefixOf(r))!==void 0||this.fieldTransforms.find(r=>e.isPrefixOf(r.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(iI(this.Cu)&&_O.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class bO{constructor(e,r,n){this.databaseId=e,this.ignoreUndefinedProperties=r,this.serializer=n||Lu(e)}Qu(e,r,n,i=!1){return new Xm({Cu:e,methodName:r,qu:n,path:et.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ju(t){const e=t._freezeSettings(),r=Lu(t._databaseId);return new bO(t._databaseId,!!e.ignoreUndefinedProperties,r)}function oI(t,e,r,n,i,o={}){const s=t.Qu(o.merge||o.mergeFields?2:0,e,r,i);Zm("Data must be an object, but it was:",s,n);const l=sI(n,s);let c,u;if(o.merge)c=new $t(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const h=[];for(const p of o.mergeFields){const m=zf(e,p,r);if(!s.contains(m))throw new G(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);lI(h,m)||h.push(m)}c=new $t(h),u=s.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=s.fieldTransforms;return new wO(new Rt(l),c,u)}class Bu extends zu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bu}}class Jm extends zu{_toFieldTransform(e){return new yN(e.path,new Ia)}isEqual(e){return e instanceof Jm}}function EO(t,e,r,n){const i=t.Qu(1,e,r);Zm("Data must be an object, but it was:",i,n);const o=[],s=Rt.empty();$i(n,(c,u)=>{const h=eg(e,c,r);u=Oe(u);const p=i.Nu(h);if(u instanceof Bu)o.push(h);else{const m=Ya(u,p);m!=null&&(o.push(h),s.set(h,m))}});const l=new $t(o);return new nI(s,l,i.fieldTransforms)}function xO(t,e,r,n,i,o){const s=t.Qu(1,e,r),l=[zf(e,n,r)],c=[i];if(o.length%2!=0)throw new G(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<o.length;m+=2)l.push(zf(e,o[m])),c.push(o[m+1]);const u=[],h=Rt.empty();for(let m=l.length-1;m>=0;--m)if(!lI(u,l[m])){const b=l[m];let S=c[m];S=Oe(S);const P=s.Nu(b);if(S instanceof Bu)u.push(b);else{const N=Ya(S,P);N!=null&&(u.push(b),h.set(b,N))}}const p=new $t(u);return new nI(h,p,s.fieldTransforms)}function IO(t,e,r,n=!1){return Ya(r,t.Qu(n?4:3,e))}function Ya(t,e){if(aI(t=Oe(t)))return Zm("Unsupported field value:",e,t),sI(t,e);if(t instanceof zu)return function(n,i){if(!iI(i.Cu))throw i.Bu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,i){const o=[];let s=0;for(const l of n){let c=Ya(l,i.Lu(s));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),s++}return{arrayValue:{values:o}}}(t,e)}return function(n,i){if((n=Oe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return mN(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=He.fromDate(n);return{timestampValue:eu(i.serializer,o)}}if(n instanceof He){const o=new He(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:eu(i.serializer,o)}}if(n instanceof Qm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Vo)return{bytesValue:kx(i.serializer,n._byteString)};if(n instanceof xt){const o=i.databaseId,s=n.firestore._databaseId;if(!s.isEqual(o))throw i.Bu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Mm(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Ym)return function(s,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Om(l.serializer,c)})}}}}}}(n,i);throw i.Bu(`Unsupported field value: ${$u(n)}`)}(t,e)}function sI(t,e){const r={};return nx(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$i(t,(n,i)=>{const o=Ya(i,e.Mu(n));o!=null&&(r[n]=o)}),{mapValue:{fields:r}}}function aI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof Qm||t instanceof Vo||t instanceof xt||t instanceof zu||t instanceof Ym)}function Zm(t,e,r){if(!aI(r)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(r)){const n=$u(r);throw n==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+n)}}function zf(t,e,r){if((e=Oe(e))instanceof Uu)return e._internalPath;if(typeof e=="string")return eg(t,e);throw nu("Field path arguments must be of type string or ",t,!1,void 0,r)}const TO=new RegExp("[~\\*/\\[\\]]");function eg(t,e,r){if(e.search(TO)>=0)throw nu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,r);try{return new Uu(...e.split("."))._internalPath}catch{throw nu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,r)}}function nu(t,e,r,n,i){const o=n&&!n.isEmpty(),s=i!==void 0;let l=`Function ${e}() called with invalid data`;r&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=` in field ${n}`),s&&(c+=` in document ${i}`),c+=")"),new G(V.INVALID_ARGUMENT,l+t+c)}function lI(t,e){return t.some(r=>r.isEqual(e))}/**
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
 */class cI{constructor(e,r,n,i,o){this._firestore=e,this._userDataWriter=r,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const r=this._document.data.field(qu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r)}}}class AO extends cI{data(){return super.data()}}function qu(t,e){return typeof e=="string"?eg(t,e):e instanceof Uu?e._internalPath:e._delegate._internalPath}/**
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
 */function SO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tg{}class uI extends tg{}function kO(t,e,...r){let n=[];e instanceof tg&&n.push(e),n=n.concat(r),function(o){const s=o.filter(c=>c instanceof rg).length,l=o.filter(c=>c instanceof Hu).length;if(s>1||s>0&&l>0)throw new G(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)t=i._apply(t);return t}class Hu extends uI{constructor(e,r,n){super(),this._field=e,this._op=r,this._value=n,this.type="where"}static _create(e,r,n){return new Hu(e,r,n)}_apply(e){const r=this._parse(e);return dI(e._query,r),new Ui(e.firestore,e.converter,Pf(e._query,r))}_parse(e){const r=ju(e.firestore);return function(o,s,l,c,u,h,p){let m;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new G(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){iw(p,h);const b=[];for(const S of p)b.push(nw(c,o,S));m={arrayValue:{values:b}}}else m=nw(c,o,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||iw(p,h),m=IO(l,s,p,h==="in"||h==="not-in");return je.create(u,h,m)}(e._query,"where",r,e.firestore._databaseId,this._field,this._op,this._value)}}function CO(t,e,r){const n=e,i=qu("where",t);return Hu._create(i,n,r)}class rg extends tg{constructor(e,r){super(),this.type=e,this._queryConstraints=r}static _create(e,r){return new rg(e,r)}_parse(e){const r=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return r.length===1?r[0]:_r.create(r,this._getOperator())}_apply(e){const r=this._parse(e);return r.getFilters().length===0?e:(function(i,o){let s=i;const l=o.getFlattenedFilters();for(const c of l)dI(s,c),s=Pf(s,c)}(e._query,r),new Ui(e.firestore,e.converter,Pf(e._query,r)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ng extends uI{constructor(e,r){super(),this._field=e,this._direction=r,this.type="orderBy"}static _create(e,r){return new ng(e,r)}_apply(e){const r=function(i,o,s){if(i.startAt!==null)throw new G(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new G(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new xa(o,s)}(e._query,this._field,this._direction);return new Ui(e.firestore,e.converter,function(i,o){const s=i.explicitOrderBy.concat([o]);return new Ko(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function RO(t,e="asc"){const r=e,n=qu("orderBy",t);return ng._create(n,r)}function nw(t,e,r){if(typeof(r=Oe(r))=="string"){if(r==="")throw new G(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hx(e)&&r.indexOf("/")!==-1)throw new G(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);const n=e.path.child(Ee.fromString(r));if(!X.isDocumentKey(n))throw new G(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return E_(t,new X(n))}if(r instanceof xt)return E_(t,r._key);throw new G(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$u(r)}.`)}function iw(t,e){if(!Array.isArray(t)||t.length===0)throw new G(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function dI(t,e){const r=function(i,o){for(const s of i)for(const l of s.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(r!==null)throw r===e.op?new G(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${r.toString()}' filters.`)}class PO{convertValue(e,r="none"){switch(Ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,r);case 5:return e.stringValue;case 6:return this.convertBytes(Ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,r);case 11:return this.convertObject(e.mapValue,r);case 10:return this.convertVectorValue(e.mapValue);default:throw ee()}}convertObject(e,r){return this.convertObjectMap(e.fields,r)}convertObjectMap(e,r="none"){const n={};return $i(e,(i,o)=>{n[i]=this.convertValue(o,r)}),n}convertVectorValue(e){var r,n,i;const o=(i=(n=(r=e.fields)===null||r===void 0?void 0:r.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(s=>Me(s.doubleValue));return new Ym(o)}convertGeoPoint(e){return new Qm(Me(e.latitude),Me(e.longitude))}convertArray(e,r){return(e.values||[]).map(n=>this.convertValue(n,r))}convertServerTimestamp(e,r){switch(r){case"previous":const n=km(e);return n==null?null:this.convertValue(n,r);case"estimate":return this.convertTimestamp(wa(e));default:return null}}convertTimestamp(e){const r=zn(e);return new He(r.seconds,r.nanos)}convertDocumentKey(e,r){const n=Ee.fromString(e);ge(Dx(n));const i=new ba(n.get(1),n.get(3)),o=new X(n.popFirst(5));return i.isEqual(r)||nn(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}/**
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
 */function hI(t,e,r){let n;return n=t?r&&(r.merge||r.mergeFields)?t.toFirestore(e,r):t.toFirestore(e):e,n}/**
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
 */class Ds{constructor(e,r){this.hasPendingWrites=e,this.fromCache=r}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fI extends cI{constructor(e,r,n,i,o,s){super(e,r,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const r=new mc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(r,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,r={}){if(this._document){const n=this._document.data.field(qu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,r.serverTimestamps)}}}class mc extends fI{data(e={}){return super.data(e)}}class NO{constructor(e,r,n,i){this._firestore=e,this._userDataWriter=r,this._snapshot=i,this.metadata=new Ds(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(r=>e.push(r)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,r){this._snapshot.docs.forEach(n=>{e.call(r,new mc(this._firestore,this._userDataWriter,n.key,n,new Ds(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const r=!!e.includeMetadataChanges;if(r&&this._snapshot.excludesMetadataChanges)throw new G(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===r||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(l=>{const c=new mc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ds(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const c=new mc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ds(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return l.type!==0&&(u=s.indexOf(l.doc.key),s=s.delete(l.doc.key)),l.type!==1&&(s=s.add(l.doc),h=s.indexOf(l.doc.key)),{type:OO(l.type),doc:c,oldIndex:u,newIndex:h}})}}(this,r),this._cachedChangesIncludeMetadataChanges=r),this._cachedChanges}}function OO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}class pI extends PO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vo(e)}convertReference(e){const r=this.convertDocumentKey(e,this.firestore._databaseId);return new xt(this.firestore,null,r)}}function bs(t,e,r){t=Rr(t,xt);const n=Rr(t.firestore,Pi),i=hI(t.converter,e,r);return Wu(n,[oI(ju(n),"setDoc",t._key,i,t.converter!==null,r).toMutation(t._key,Jt.none())])}function ih(t,e,r,...n){t=Rr(t,xt);const i=Rr(t.firestore,Pi),o=ju(i);let s;return s=typeof(e=Oe(e))=="string"||e instanceof Uu?xO(o,"updateDoc",t._key,e,r,n):EO(o,"updateDoc",t._key,e),Wu(i,[s.toMutation(t._key,Jt.exists(!0))])}function DO(t){return Wu(Rr(t.firestore,Pi),[new Dm(t._key,Jt.none())])}function LO(t,e){const r=Rr(t.firestore,Pi),n=cr(t),i=hI(t.converter,e);return Wu(r,[oI(ju(t.firestore),"addDoc",n._key,i,t.converter!==null,{}).toMutation(n._key,Jt.exists(!1))]).then(()=>n)}function oh(t,...e){var r,n,i;t=Oe(t);let o={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||rw(e[s])||(o=e[s],s++);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(rw(e[s])){const p=e[s];e[s]=(r=p.next)===null||r===void 0?void 0:r.bind(p),e[s+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),e[s+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let c,u,h;if(t instanceof xt)u=Rr(t.firestore,Pi),h=Nm(t._key.path),c={next:p=>{e[s]&&e[s](VO(u,t,p))},error:e[s+1],complete:e[s+2]};else{const p=Rr(t,Ui);u=Rr(p.firestore,Pi),h=p._query;const m=new pI(u);c={next:b=>{e[s]&&e[s](new NO(u,m,p,b))},error:e[s+1],complete:e[s+2]},SO(t._query)}return function(m,b,S,P){const N=new dO(P),E=new K2(b,N,S);return m.asyncQueue.enqueueAndForget(async()=>B2(await Q_(m),E)),()=>{N.Za(),m.asyncQueue.enqueueAndForget(async()=>q2(await Q_(m),E))}}(rI(u),h,l,c)}function Wu(t,e){return function(n,i){const o=new _i;return n.asyncQueue.enqueueAndForget(async()=>nO(await pO(n),i,o)),o.promise}(rI(t),e)}function VO(t,e,r){const n=r.docs.get(e._key),i=new pI(t);return new fI(t,i,e._key,n,new Ds(r.hasPendingWrites,r.fromCache),e.converter)}function ni(){return new Jm("serverTimestamp")}(function(e,r=!0){(function(i){Wo=i})(Bo),Pr(new yr("firestore",(n,{instanceIdentifier:i,options:o})=>{const s=n.getProvider("app").getImmediate(),l=new Pi(new NP(n.getProvider("auth-internal")),new VP(n.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new G(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ba(u.options.projectId,h)}(s,i),s);return o=Object.assign({useFetchStreams:r},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Xt(v_,"4.7.3",e),Xt(v_,"4.7.3","esm2017")})();var MO="firebase",$O="10.14.1";/**
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
 */Xt(MO,$O,"app");const mI="@firebase/installations",ig="0.6.9";/**
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
 */const gI=1e4,vI=`w:${ig}`,yI="FIS_v2",FO="https://firebaseinstallations.googleapis.com/v1",UO=60*60*1e3,zO="installations",jO="Installations";/**
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
 */const BO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ni=new Mi(zO,jO,BO);function _I(t){return t instanceof Or&&t.code.includes("request-failed")}/**
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
 */function wI({projectId:t}){return`${FO}/projects/${t}/installations`}function bI(t){return{token:t.token,requestStatus:2,expiresIn:HO(t.expiresIn),creationTime:Date.now()}}async function EI(t,e){const n=(await e.json()).error;return Ni.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function xI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function qO(t,{refreshToken:e}){const r=xI(t);return r.append("Authorization",WO(e)),r}async function II(t){const e=await t();return e.status>=500&&e.status<600?t():e}function HO(t){return Number(t.replace("s","000"))}function WO(t){return`${yI} ${t}`}/**
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
 */async function KO({appConfig:t,heartbeatServiceProvider:e},{fid:r}){const n=wI(t),i=xI(t),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:r,authVersion:yI,appId:t.appId,sdkVersion:vI},l={method:"POST",headers:i,body:JSON.stringify(s)},c=await II(()=>fetch(n,l));if(c.ok){const u=await c.json();return{fid:u.fid||r,registrationStatus:2,refreshToken:u.refreshToken,authToken:bI(u.authToken)}}else throw await EI("Create Installation",c)}/**
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
 */function TI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function GO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const QO=/^[cdef][\w-]{21}$/,jf="";function YO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const r=XO(t);return QO.test(r)?r:jf}catch{return jf}}function XO(t){return GO(t).substr(0,22)}/**
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
 */function Ku(t){return`${t.appName}!${t.appId}`}/**
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
 */const AI=new Map;function SI(t,e){const r=Ku(t);kI(r,e),JO(r,e)}function kI(t,e){const r=AI.get(t);if(r)for(const n of r)n(e)}function JO(t,e){const r=ZO();r&&r.postMessage({key:t,fid:e}),eD()}let pi=null;function ZO(){return!pi&&"BroadcastChannel"in self&&(pi=new BroadcastChannel("[Firebase] FID Change"),pi.onmessage=t=>{kI(t.data.key,t.data.fid)}),pi}function eD(){AI.size===0&&pi&&(pi.close(),pi=null)}/**
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
 */const tD="firebase-installations-database",rD=1,Oi="firebase-installations-store";let sh=null;function og(){return sh||(sh=Tu(tD,rD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Oi)}}})),sh}async function iu(t,e){const r=Ku(t),i=(await og()).transaction(Oi,"readwrite"),o=i.objectStore(Oi),s=await o.get(r);return await o.put(e,r),await i.done,(!s||s.fid!==e.fid)&&SI(t,e.fid),e}async function CI(t){const e=Ku(t),n=(await og()).transaction(Oi,"readwrite");await n.objectStore(Oi).delete(e),await n.done}async function Gu(t,e){const r=Ku(t),i=(await og()).transaction(Oi,"readwrite"),o=i.objectStore(Oi),s=await o.get(r),l=e(s);return l===void 0?await o.delete(r):await o.put(l,r),await i.done,l&&(!s||s.fid!==l.fid)&&SI(t,l.fid),l}/**
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
 */async function sg(t){let e;const r=await Gu(t.appConfig,n=>{const i=nD(n),o=iD(t,i);return e=o.registrationPromise,o.installationEntry});return r.fid===jf?{installationEntry:await e}:{installationEntry:r,registrationPromise:e}}function nD(t){const e=t||{fid:YO(),registrationStatus:0};return RI(e)}function iD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ni.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const r={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=oD(t,r);return{installationEntry:r,registrationPromise:n}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:sD(t)}:{installationEntry:e}}async function oD(t,e){try{const r=await KO(t,e);return iu(t.appConfig,r)}catch(r){throw _I(r)&&r.customData.serverCode===409?await CI(t.appConfig):await iu(t.appConfig,{fid:e.fid,registrationStatus:0}),r}}async function sD(t){let e=await ow(t.appConfig);for(;e.registrationStatus===1;)await TI(100),e=await ow(t.appConfig);if(e.registrationStatus===0){const{installationEntry:r,registrationPromise:n}=await sg(t);return n||r}return e}function ow(t){return Gu(t,e=>{if(!e)throw Ni.create("installation-not-found");return RI(e)})}function RI(t){return aD(t)?{fid:t.fid,registrationStatus:0}:t}function aD(t){return t.registrationStatus===1&&t.registrationTime+gI<Date.now()}/**
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
 */async function lD({appConfig:t,heartbeatServiceProvider:e},r){const n=cD(t,r),i=qO(t,r),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:vI,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(s)},c=await II(()=>fetch(n,l));if(c.ok){const u=await c.json();return bI(u)}else throw await EI("Generate Auth Token",c)}function cD(t,{fid:e}){return`${wI(t)}/${e}/authTokens:generate`}/**
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
 */async function ag(t,e=!1){let r;const n=await Gu(t.appConfig,o=>{if(!PI(o))throw Ni.create("not-registered");const s=o.authToken;if(!e&&hD(s))return o;if(s.requestStatus===1)return r=uD(t,e),o;{if(!navigator.onLine)throw Ni.create("app-offline");const l=pD(o);return r=dD(t,l),l}});return r?await r:n.authToken}async function uD(t,e){let r=await sw(t.appConfig);for(;r.authToken.requestStatus===1;)await TI(100),r=await sw(t.appConfig);const n=r.authToken;return n.requestStatus===0?ag(t,e):n}function sw(t){return Gu(t,e=>{if(!PI(e))throw Ni.create("not-registered");const r=e.authToken;return mD(r)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function dD(t,e){try{const r=await lD(t,e),n=Object.assign(Object.assign({},e),{authToken:r});return await iu(t.appConfig,n),r}catch(r){if(_I(r)&&(r.customData.serverCode===401||r.customData.serverCode===404))await CI(t.appConfig);else{const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await iu(t.appConfig,n)}throw r}}function PI(t){return t!==void 0&&t.registrationStatus===2}function hD(t){return t.requestStatus===2&&!fD(t)}function fD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+UO}function pD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function mD(t){return t.requestStatus===1&&t.requestTime+gI<Date.now()}/**
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
 */async function gD(t){const e=t,{installationEntry:r,registrationPromise:n}=await sg(e);return n?n.catch(console.error):ag(e).catch(console.error),r.fid}/**
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
 */async function vD(t,e=!1){const r=t;return await yD(r),(await ag(r,e)).token}async function yD(t){const{registrationPromise:e}=await sg(t);e&&await e}/**
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
 */function _D(t){if(!t||!t.options)throw ah("App Configuration");if(!t.name)throw ah("App Name");const e=["projectId","apiKey","appId"];for(const r of e)if(!t.options[r])throw ah(r);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ah(t){return Ni.create("missing-app-config-values",{valueName:t})}/**
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
 */const NI="installations",wD="installations-internal",bD=t=>{const e=t.getProvider("app").getImmediate(),r=_D(e),n=jo(e,"heartbeat");return{app:e,appConfig:r,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},ED=t=>{const e=t.getProvider("app").getImmediate(),r=jo(e,NI).getImmediate();return{getId:()=>gD(r),getToken:i=>vD(r,i)}};function xD(){Pr(new yr(NI,bD,"PUBLIC")),Pr(new yr(wD,ED,"PRIVATE"))}xD();Xt(mI,ig);Xt(mI,ig,"esm2017");/**
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
 */const ID="/firebase-messaging-sw.js",TD="/firebase-cloud-messaging-push-scope",OI="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",AD="https://fcmregistrations.googleapis.com/v1",DI="google.c.a.c_id",SD="google.c.a.c_l",kD="google.c.a.ts",CD="google.c.a.e";var aw;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(aw||(aw={}));/**
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
 */var Sa;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Sa||(Sa={}));/**
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
 */function Fr(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function RD(t){const e="=".repeat((4-t.length%4)%4),r=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(r),i=new Uint8Array(n.length);for(let o=0;o<n.length;++o)i[o]=n.charCodeAt(o);return i}/**
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
 */const lh="fcm_token_details_db",PD=5,lw="fcm_token_object_Store";async function ND(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(lh))return null;let e=null;return(await Tu(lh,PD,{upgrade:async(n,i,o,s)=>{var l;if(i<2||!n.objectStoreNames.contains(lw))return;const c=s.objectStore(lw),u=await c.index("fcmSenderId").get(t);if(await c.clear(),!!u){if(i===2){const h=u;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(l=h.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:Fr(h.vapidKey)}}}else if(i===3){const h=u;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:Fr(h.auth),p256dh:Fr(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:Fr(h.vapidKey)}}}else if(i===4){const h=u;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:Fr(h.auth),p256dh:Fr(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:Fr(h.vapidKey)}}}}}})).close(),await Qd(lh),await Qd("fcm_vapid_details_db"),await Qd("undefined"),OD(e)?e:null}function OD(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const DD="firebase-messaging-database",LD=1,ka="firebase-messaging-store";let ch=null;function LI(){return ch||(ch=Tu(DD,LD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ka)}}})),ch}async function VD(t){const e=VI(t),n=await(await LI()).transaction(ka).objectStore(ka).get(e);if(n)return n;{const i=await ND(t.appConfig.senderId);if(i)return await lg(t,i),i}}async function lg(t,e){const r=VI(t),i=(await LI()).transaction(ka,"readwrite");return await i.objectStore(ka).put(e,r),await i.done,e}function VI({appConfig:t}){return t.appId}/**
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
 */const MD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},mt=new Mi("messaging","Messaging",MD);/**
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
 */async function $D(t,e){const r=await ug(t),n=MI(e),i={method:"POST",headers:r,body:JSON.stringify(n)};let o;try{o=await(await fetch(cg(t.appConfig),i)).json()}catch(s){throw mt.create("token-subscribe-failed",{errorInfo:s==null?void 0:s.toString()})}if(o.error){const s=o.error.message;throw mt.create("token-subscribe-failed",{errorInfo:s})}if(!o.token)throw mt.create("token-subscribe-no-token");return o.token}async function FD(t,e){const r=await ug(t),n=MI(e.subscriptionOptions),i={method:"PATCH",headers:r,body:JSON.stringify(n)};let o;try{o=await(await fetch(`${cg(t.appConfig)}/${e.token}`,i)).json()}catch(s){throw mt.create("token-update-failed",{errorInfo:s==null?void 0:s.toString()})}if(o.error){const s=o.error.message;throw mt.create("token-update-failed",{errorInfo:s})}if(!o.token)throw mt.create("token-update-no-token");return o.token}async function UD(t,e){const n={method:"DELETE",headers:await ug(t)};try{const o=await(await fetch(`${cg(t.appConfig)}/${e}`,n)).json();if(o.error){const s=o.error.message;throw mt.create("token-unsubscribe-failed",{errorInfo:s})}}catch(i){throw mt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function cg({projectId:t}){return`${AD}/projects/${t}/registrations`}async function ug({appConfig:t,installations:e}){const r=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${r}`})}function MI({p256dh:t,auth:e,endpoint:r,vapidKey:n}){const i={web:{endpoint:r,auth:e,p256dh:t}};return n!==OI&&(i.web.applicationPubKey=n),i}/**
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
 */const zD=7*24*60*60*1e3;async function jD(t){const e=await qD(t.swRegistration,t.vapidKey),r={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Fr(e.getKey("auth")),p256dh:Fr(e.getKey("p256dh"))},n=await VD(t.firebaseDependencies);if(n){if(HD(n.subscriptionOptions,r))return Date.now()>=n.createTime+zD?BD(t,{token:n.token,createTime:Date.now(),subscriptionOptions:r}):n.token;try{await UD(t.firebaseDependencies,n.token)}catch(i){console.warn(i)}return cw(t.firebaseDependencies,r)}else return cw(t.firebaseDependencies,r)}async function BD(t,e){try{const r=await FD(t.firebaseDependencies,e),n=Object.assign(Object.assign({},e),{token:r,createTime:Date.now()});return await lg(t.firebaseDependencies,n),r}catch(r){throw r}}async function cw(t,e){const n={token:await $D(t,e),createTime:Date.now(),subscriptionOptions:e};return await lg(t,n),n.token}async function qD(t,e){const r=await t.pushManager.getSubscription();return r||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:RD(e)})}function HD(t,e){const r=e.vapidKey===t.vapidKey,n=e.endpoint===t.endpoint,i=e.auth===t.auth,o=e.p256dh===t.p256dh;return r&&n&&i&&o}/**
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
 */function uw(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return WD(e,t),KD(e,t),GD(e,t),e}function WD(t,e){if(!e.notification)return;t.notification={};const r=e.notification.title;r&&(t.notification.title=r);const n=e.notification.body;n&&(t.notification.body=n);const i=e.notification.image;i&&(t.notification.image=i);const o=e.notification.icon;o&&(t.notification.icon=o)}function KD(t,e){e.data&&(t.data=e.data)}function GD(t,e){var r,n,i,o,s;if(!e.fcmOptions&&!(!((r=e.notification)===null||r===void 0)&&r.click_action))return;t.fcmOptions={};const l=(i=(n=e.fcmOptions)===null||n===void 0?void 0:n.link)!==null&&i!==void 0?i:(o=e.notification)===null||o===void 0?void 0:o.click_action;l&&(t.fcmOptions.link=l);const c=(s=e.fcmOptions)===null||s===void 0?void 0:s.analytics_label;c&&(t.fcmOptions.analyticsLabel=c)}/**
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
 */function QD(t){return typeof t=="object"&&!!t&&DI in t}/**
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
 */function YD(t){if(!t||!t.options)throw uh("App Configuration Object");if(!t.name)throw uh("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:r}=t;for(const n of e)if(!r[n])throw uh(n);return{appName:t.name,projectId:r.projectId,apiKey:r.apiKey,appId:r.appId,senderId:r.messagingSenderId}}function uh(t){return mt.create("missing-app-config-values",{valueName:t})}/**
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
 */class XD{constructor(e,r,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=YD(e);this.firebaseDependencies={app:e,appConfig:i,installations:r,analyticsProvider:n}}_delete(){return Promise.resolve()}}/**
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
 */async function JD(t){try{t.swRegistration=await navigator.serviceWorker.register(ID,{scope:TD}),t.swRegistration.update().catch(()=>{})}catch(e){throw mt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function ZD(t,e){if(!e&&!t.swRegistration&&await JD(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw mt.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function eL(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=OI)}/**
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
 */async function $I(t,e){if(!navigator)throw mt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw mt.create("permission-blocked");return await eL(t,e==null?void 0:e.vapidKey),await ZD(t,e==null?void 0:e.serviceWorkerRegistration),jD(t)}/**
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
 */async function tL(t,e,r){const n=rL(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(n,{message_id:r[DI],message_name:r[SD],message_time:r[kD],message_device_time:Math.floor(Date.now()/1e3)})}function rL(t){switch(t){case Sa.NOTIFICATION_CLICKED:return"notification_open";case Sa.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function nL(t,e){const r=e.data;if(!r.isFirebaseMessaging)return;t.onMessageHandler&&r.messageType===Sa.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(uw(r)):t.onMessageHandler.next(uw(r)));const n=r.data;QD(n)&&n[CD]==="1"&&await tL(t,r.messageType,n)}const dw="@firebase/messaging",hw="0.12.12";/**
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
 */const iL=t=>{const e=new XD(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",r=>nL(e,r)),e},oL=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:n=>$I(e,n)}};function sL(){Pr(new yr("messaging",iL,"PUBLIC")),Pr(new yr("messaging-internal",oL,"PRIVATE")),Xt(dw,hw),Xt(dw,hw,"esm2017")}/**
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
 */async function aL(){try{await uE()}catch{return!1}return typeof window<"u"&&cE()&&r1()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function lL(t,e){if(!navigator)throw mt.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function cL(t=fm()){return aL().then(e=>{if(!e)throw mt.create("unsupported-browser")},e=>{throw mt.create("indexed-db-unsupported")}),jo(Oe(t),"messaging").getImmediate()}async function uL(t,e){return t=Oe(t),$I(t,e)}function dL(t,e){return t=Oe(t),lL(t,e)}sL();const hL={apiKey:"AIzaSyCfkeRu4DVuSBBBa9bc0rrhtu-gCixFqIo",authDomain:"barbacker-6c683.firebaseapp.com",projectId:"barbacker-6c683",storageBucket:"barbacker-6c683.firebasestorage.app",messagingSenderId:"869145643734",appId:"1:869145643734:web:d902468d6942df6bc81777"},dg=fE(hL),Ht=vO(dg),Es=kP(dg),FI=cL(dg),fL=new zr;new Hs("apple.com");const pL=async()=>{try{if(await Notification.requestPermission()==="granted")return await uL(FI,{vapidKey:"G-H8717DGSJ8"})}catch(t){console.error("Notification permission denied",t)}return null},mL=()=>new Promise(t=>{dL(FI,e=>{t(e)})});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gc=globalThis,hg=gc.ShadowRoot&&(gc.ShadyCSS===void 0||gc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fg=Symbol(),fw=new WeakMap;let UI=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==fg)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(hg&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=fw.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&fw.set(r,e))}return e}toString(){return this.cssText}};const gL=t=>new UI(typeof t=="string"?t:t+"",void 0,fg),fe=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new UI(r,t,fg)},vL=(t,e)=>{if(hg)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),i=gc.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)}},pw=hg?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return gL(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:yL,defineProperty:_L,getOwnPropertyDescriptor:wL,getOwnPropertyNames:bL,getOwnPropertySymbols:EL,getPrototypeOf:xL}=Object,Mn=globalThis,mw=Mn.trustedTypes,IL=mw?mw.emptyScript:"",dh=Mn.reactiveElementPolyfillSupport,Ys=(t,e)=>t,ou={toAttribute(t,e){switch(e){case Boolean:t=t?IL:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},pg=(t,e)=>!yL(t,e),gw={attribute:!0,type:String,converter:ou,reflect:!1,useDefault:!1,hasChanged:pg};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Mn.litPropertyMetadata??(Mn.litPropertyMetadata=new WeakMap);let Ji=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=gw){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,r);i!==void 0&&_L(this.prototype,e,i)}}static getPropertyDescriptor(e,r,n){const{get:i,set:o}=wL(this.prototype,e)??{get(){return this[r]},set(s){this[r]=s}};return{get:i,set(s){const l=i==null?void 0:i.call(this);o==null||o.call(this,s),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??gw}static _$Ei(){if(this.hasOwnProperty(Ys("elementProperties")))return;const e=xL(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ys("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ys("properties"))){const r=this.properties,n=[...bL(r),...EL(r)];for(const i of n)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)r.unshift(pw(i))}else e!==void 0&&r.push(pw(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vL(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$ET(e,r){var o;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const s=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:ou).toAttribute(r,n.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,r){var o,s;const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const l=n.getPropertyOptions(i),c=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:ou;this._$Em=i;const u=c.fromAttribute(r,l.type);this[i]=u??((s=this._$Ej)==null?void 0:s.get(i))??u,this._$Em=null}}requestUpdate(e,r,n,i=!1,o){var s;if(e!==void 0){const l=this.constructor;if(i===!1&&(o=this[e]),n??(n=l.getPropertyOptions(e)),!((n.hasChanged??pg)(o,r)||n.useDefault&&n.reflect&&o===((s=this._$Ej)==null?void 0:s.get(e))&&!this.hasAttribute(l._$Eu(e,n))))return;this.C(e,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,s??r??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(r=void 0),this._$AL.set(e,r)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i){const{wrapped:l}=s,c=this[o];l!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,s,c)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(r)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(e){}firstUpdated(e){}};Ji.elementStyles=[],Ji.shadowRootOptions={mode:"open"},Ji[Ys("elementProperties")]=new Map,Ji[Ys("finalized")]=new Map,dh==null||dh({ReactiveElement:Ji}),(Mn.reactiveElementVersions??(Mn.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const TL={attribute:!0,type:String,converter:ou,reflect:!1,hasChanged:pg},AL=(t=TL,e,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),n==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(r.name,t),n==="accessor"){const{name:s}=r;return{set(l){const c=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,c,t,!0,l)},init(l){return l!==void 0&&this.C(s,void 0,t,l),l}}}if(n==="setter"){const{name:s}=r;return function(l){const c=this[s];e.call(this,l),this.requestUpdate(s,c,t,!0,l)}}throw Error("Unsupported decorator location: "+n)};function $(t){return(e,r)=>typeof r=="object"?AL(t,e,r):((n,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,n),s?Object.getOwnPropertyDescriptor(i,o):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function St(t){return $({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mg=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function De(t,e){return(r,n,i)=>{const o=s=>{var l;return((l=s.renderRoot)==null?void 0:l.querySelector(t))??null};return mg(r,n,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let SL;function kL(t){return(e,r)=>mg(e,r,{get(){return(this.renderRoot??SL??(SL=document.createDocumentFragment())).querySelectorAll(t)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Yo(t){return(e,r)=>{const{slot:n,selector:i}=t??{},o="slot"+(n?`[name=${n}]`:":not([name])");return mg(e,r,{get(){var c;const s=(c=this.renderRoot)==null?void 0:c.querySelector(o),l=(s==null?void 0:s.assignedElements(t))??[];return i===void 0?l:l.filter(u=>u.matches(i))}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xs=globalThis,vw=t=>t,su=Xs.trustedTypes,yw=su?su.createPolicy("lit-html",{createHTML:t=>t}):void 0,zI="$lit$",xn=`lit$${Math.random().toFixed(9).slice(2)}$`,jI="?"+xn,CL=`<${jI}>`,Di=document,Ca=()=>Di.createComment(""),Ra=t=>t===null||typeof t!="object"&&typeof t!="function",gg=Array.isArray,RL=t=>gg(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",hh=`[ 	
\f\r]`,xs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_w=/-->/g,ww=/>/g,ii=RegExp(`>|${hh}(?:([^\\s"'>=/]+)(${hh}*=${hh}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bw=/'/g,Ew=/"/g,BI=/^(?:script|style|textarea|title)$/i,PL=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),Q=PL(1),Qt=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),xw=new WeakMap,mi=Di.createTreeWalker(Di,129);function qI(t,e){if(!gg(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return yw!==void 0?yw.createHTML(e):e}const NL=(t,e)=>{const r=t.length-1,n=[];let i,o=e===2?"<svg>":e===3?"<math>":"",s=xs;for(let l=0;l<r;l++){const c=t[l];let u,h,p=-1,m=0;for(;m<c.length&&(s.lastIndex=m,h=s.exec(c),h!==null);)m=s.lastIndex,s===xs?h[1]==="!--"?s=_w:h[1]!==void 0?s=ww:h[2]!==void 0?(BI.test(h[2])&&(i=RegExp("</"+h[2],"g")),s=ii):h[3]!==void 0&&(s=ii):s===ii?h[0]===">"?(s=i??xs,p=-1):h[1]===void 0?p=-2:(p=s.lastIndex-h[2].length,u=h[1],s=h[3]===void 0?ii:h[3]==='"'?Ew:bw):s===Ew||s===bw?s=ii:s===_w||s===ww?s=xs:(s=ii,i=void 0);const b=s===ii&&t[l+1].startsWith("/>")?" ":"";o+=s===xs?c+CL:p>=0?(n.push(u),c.slice(0,p)+zI+c.slice(p)+xn+b):c+xn+(p===-2?l:b)}return[qI(t,o+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class Pa{constructor({strings:e,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const l=e.length-1,c=this.parts,[u,h]=NL(e,r);if(this.el=Pa.createElement(u,n),mi.currentNode=this.el.content,r===2||r===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=mi.nextNode())!==null&&c.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const p of i.getAttributeNames())if(p.endsWith(zI)){const m=h[s++],b=i.getAttribute(p).split(xn),S=/([.?@])?(.*)/.exec(m);c.push({type:1,index:o,name:S[2],strings:b,ctor:S[1]==="."?DL:S[1]==="?"?LL:S[1]==="@"?VL:Qu}),i.removeAttribute(p)}else p.startsWith(xn)&&(c.push({type:6,index:o}),i.removeAttribute(p));if(BI.test(i.tagName)){const p=i.textContent.split(xn),m=p.length-1;if(m>0){i.textContent=su?su.emptyScript:"";for(let b=0;b<m;b++)i.append(p[b],Ca()),mi.nextNode(),c.push({type:2,index:++o});i.append(p[m],Ca())}}}else if(i.nodeType===8)if(i.data===jI)c.push({type:2,index:o});else{let p=-1;for(;(p=i.data.indexOf(xn,p+1))!==-1;)c.push({type:7,index:o}),p+=xn.length-1}o++}}static createElement(e,r){const n=Di.createElement("template");return n.innerHTML=e,n}}function Mo(t,e,r=t,n){var s,l;if(e===Qt)return e;let i=n!==void 0?(s=r._$Co)==null?void 0:s[n]:r._$Cl;const o=Ra(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(t),i._$AT(t,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=i:r._$Cl=i),i!==void 0&&(e=Mo(t,i._$AS(t,e.values),i,n)),e}class OL{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,i=((e==null?void 0:e.creationScope)??Di).importNode(r,!0);mi.currentNode=i;let o=mi.nextNode(),s=0,l=0,c=n[0];for(;c!==void 0;){if(s===c.index){let u;c.type===2?u=new Xa(o,o.nextSibling,this,e):c.type===1?u=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(u=new ML(o,this,e)),this._$AV.push(u),c=n[++l]}s!==(c==null?void 0:c.index)&&(o=mi.nextNode(),s++)}return mi.currentNode=Di,i}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class Xa{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,n,i){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Mo(this,e,r),Ra(e)?e===B||e==null||e===""?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==Qt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):RL(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==B&&Ra(this._$AH)?this._$AA.nextSibling.data=e:this.T(Di.createTextNode(e)),this._$AH=e}$(e){var o;const{values:r,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Pa.createElement(qI(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(r);else{const s=new OL(i,this),l=s.u(this.options);s.p(r),this.T(l),this._$AH=s}}_$AC(e){let r=xw.get(e.strings);return r===void 0&&xw.set(e.strings,r=new Pa(e)),r}k(e){gg(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of e)i===r.length?r.push(n=new Xa(this.O(Ca()),this.O(Ca()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);e!==this._$AB;){const i=vw(e).nextSibling;vw(e).remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class Qu{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,i,o){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=B}_$AI(e,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)e=Mo(this,e,r,0),s=!Ra(e)||e!==this._$AH&&e!==Qt,s&&(this._$AH=e);else{const l=e;let c,u;for(e=o[0],c=0;c<o.length-1;c++)u=Mo(this,l[n+c],r,c),u===Qt&&(u=this._$AH[c]),s||(s=!Ra(u)||u!==this._$AH[c]),u===B?e=B:e!==B&&(e+=(u??"")+o[c+1]),this._$AH[c]=u}s&&!i&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class DL extends Qu{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}}class LL extends Qu{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==B)}}class VL extends Qu{constructor(e,r,n,i,o){super(e,r,n,i,o),this.type=5}_$AI(e,r=this){if((e=Mo(this,e,r,0)??B)===Qt)return;const n=this._$AH,i=e===B&&n!==B||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==B&&(n===B||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class ML{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Mo(this,e)}}const fh=Xs.litHtmlPolyfillSupport;fh==null||fh(Pa,Xa),(Xs.litHtmlVersions??(Xs.litHtmlVersions=[])).push("3.3.2");const HI=(t,e,r)=>{const n=(r==null?void 0:r.renderBefore)??e;let i=n._$litPart$;if(i===void 0){const o=(r==null?void 0:r.renderBefore)??null;n._$litPart$=i=new Xa(e.insertBefore(Ca(),o),o,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wi=globalThis;let Ie=class extends Ji{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=HI(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Qt}};var Lw;Ie._$litElement$=!0,Ie.finalized=!0,(Lw=wi.litElementHydrateSupport)==null||Lw.call(wi,{LitElement:Ie});const ph=wi.litElementPolyfillSupport;ph==null||ph({LitElement:Ie});(wi.litElementVersions??(wi.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class $L extends Ie{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return Q`<span class="shadow"></span>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const FL=fe`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Bf=class extends $L{};Bf.styles=[FL];Bf=R([Fe("md-elevation")],Bf);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const WI=Symbol("attachableController");let vc;vc=new MutationObserver(t=>{var e;for(const r of t)(e=r.target[WI])==null||e.hostConnected()});class KI{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}set control(e){e?this.attach(e):this.detach()}constructor(e,r){this.host=e,this.onControlChange=r,this.currentControl=null,e.addController(this),e[WI]=this,vc==null||vc.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const UL=["focusin","focusout","pointerdown"];class vg extends Ie{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new KI(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(e){var r;if(!e[Iw]){switch(e.type){default:return;case"focusin":this.visible=((r=this.control)==null?void 0:r.matches(":focus-visible"))??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[Iw]=!0}}onControlChange(e,r){for(const n of UL)e==null||e.removeEventListener(n,this),r==null||r.addEventListener(n,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}R([$({type:Boolean,reflect:!0})],vg.prototype,"visible",void 0);R([$({type:Boolean,reflect:!0})],vg.prototype,"inward",void 0);const Iw=Symbol("handledByFocusRing");/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const zL=fe`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let qf=class extends vg{};qf.styles=[zL];qf=R([Fe("md-focus-ring")],qf);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vn={ATTRIBUTE:1,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},yg=t=>(...e)=>({_$litDirective$:t,values:e});let _g=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt=yg(class extends _g{constructor(t){var e;if(super(t),t.type!==vn.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((n=this.nt)!=null&&n.has(o))&&this.st.add(o);return this.render(e)}const r=t.element.classList;for(const o of this.st)o in e||(r.remove(o),this.st.delete(o));for(const o in e){const s=!!e[o];s===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(s?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return Qt}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const $o={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)"};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const jL=450,Tw=225,BL=.2,qL=10,HL=75,WL=.35,KL="::after",GL="forwards";var wt;(function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(wt||(wt={}));const QL=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],YL=150,mh=window.matchMedia("(forced-colors: active)");class Ja extends Ie{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=wt.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new KI(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const e={hovered:this.hovered,pressed:this.pressed};return Q`<div class="surface ${zt(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==wt.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===wt.HOLDING){this.state=wt.WAITING_FOR_CLICK;return}if(this.state===wt.TOUCH_DELAY){this.state=wt.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=wt.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=wt.TOUCH_DELAY,await new Promise(r=>{setTimeout(r,YL)}),this.state===wt.TOUCH_DELAY&&(this.state=wt.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===wt.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===wt.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:r}=this.getBoundingClientRect(),n=Math.max(e,r),i=Math.max(WL*n,HL),o=Math.floor(n*BL),l=Math.sqrt(r**2+e**2)+qL;this.initialSize=o,this.rippleScale=`${(l+i)/o}`,this.rippleSize=`${o}px`}getNormalizedPointerEventCoords(e){const{scrollX:r,scrollY:n}=window,{left:i,top:o}=this.getBoundingClientRect(),s=r+i,l=n+o,{pageX:c,pageY:u}=e;return{x:c-s,y:u-l}}getTranslationCoordinates(e){const{height:r,width:n}=this.getBoundingClientRect(),i={x:(n-this.initialSize)/2,y:(r-this.initialSize)/2};let o;return e instanceof PointerEvent?o=this.getNormalizedPointerEventCoords(e):o={x:n/2,y:r/2},o={x:o.x-this.initialSize/2,y:o.y-this.initialSize/2},{startPoint:o,endPoint:i}}startPressAnimation(e){var s;if(!this.mdRoot)return;this.pressed=!0,(s=this.growAnimation)==null||s.cancel(),this.determineRippleSize();const{startPoint:r,endPoint:n}=this.getTranslationCoordinates(e),i=`${r.x}px, ${r.y}px`,o=`${n.x}px, ${n.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${i}) scale(1)`,`translate(${o}) scale(${this.rippleScale})`]},{pseudoElement:KL,duration:jL,easing:$o.STANDARD,fill:GL})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=wt.INACTIVE;const e=this.growAnimation;let r=1/0;if(typeof(e==null?void 0:e.currentTime)=="number"?r=e.currentTime:e!=null&&e.currentTime&&(r=e.currentTime.to("ms").value),r>=Tw){this.pressed=!1;return}await new Promise(n=>{setTimeout(n,Tw-r)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);const r=e.buttons===1;return this.isTouch(e)||r}inBounds({x:e,y:r}){const{top:n,left:i,bottom:o,right:s}=this.getBoundingClientRect();return e>=i&&e<=s&&r>=n&&r<=o}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){if(!(mh!=null&&mh.matches))switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break}}onControlChange(e,r){for(const n of QL)e==null||e.removeEventListener(n,this),r==null||r.addEventListener(n,this)}}R([$({type:Boolean,reflect:!0})],Ja.prototype,"disabled",void 0);R([St()],Ja.prototype,"hovered",void 0);R([St()],Ja.prototype,"pressed",void 0);R([De(".surface")],Ja.prototype,"mdRoot",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const XL=fe`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Hf=class extends Ja{};Hf.styles=[XL];Hf=R([Fe("md-ripple")],Hf);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const GI=["role","ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];GI.map(QI);function QI(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Yn(t){for(const e of GI)t.createProperty(e,{attribute:QI(e),reflect:!0});t.addInitializer(e=>{const r={hostConnected(){e.setAttribute("role","presentation")}};e.addController(r)})}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ze=Symbol("internals"),gh=Symbol("privateInternals");function Za(t){class e extends t{get[Ze](){return this[gh]||(this[gh]=this.attachInternals()),this[gh]}}return e}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function YI(t){t.addInitializer(e=>{const r=e;r.addEventListener("click",async n=>{const{type:i,[Ze]:o}=r,{form:s}=o;if(!(!s||i==="button")&&(await new Promise(l=>{setTimeout(l)}),!n.defaultPrevented)){if(i==="reset"){s.reset();return}s.addEventListener("submit",l=>{Object.defineProperty(l,"submitter",{configurable:!0,enumerable:!0,get:()=>r})},{capture:!0,once:!0}),o.setFormValue(r.value),s.requestSubmit()}})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function XI(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function wg(t){return t.currentTarget!==t.target||t.composedPath()[0]!==t.target||t.target.disabled?!1:!JL(t)}function JL(t){const e=Wf;return e&&(t.preventDefault(),t.stopImmediatePropagation()),ZL(),e}let Wf=!1;async function ZL(){Wf=!0,await null,Wf=!1}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const e4=Za(Ie);class ot extends e4{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Ze].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.handleActivationClick=e=>{!wg(e)||!this.buttonElement||(this.focus(),XI(this.buttonElement))},this.addEventListener("click",this.handleActivationClick)}focus(){var e;(e=this.buttonElement)==null||e.focus()}blur(){var e;(e=this.buttonElement)==null||e.blur()}render(){var i;const e=this.disabled&&!this.href,r=this.href?this.renderLink():this.renderButton(),n=this.href?"link":"button";return Q`
      ${(i=this.renderElevationOrOutline)==null?void 0:i.call(this)}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${n}></md-focus-ring>
      <md-ripple
        part="ripple"
        for=${n}
        ?disabled="${e}"></md-ripple>
      ${r}
    `}renderButton(){const{ariaLabel:e,ariaHasPopup:r,ariaExpanded:n}=this;return Q`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-label="${e||B}"
      aria-haspopup="${r||B}"
      aria-expanded="${n||B}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:e,ariaHasPopup:r,ariaExpanded:n}=this;return Q`<a
      id="link"
      class="button"
      aria-label="${e||B}"
      aria-haspopup="${r||B}"
      aria-expanded="${n||B}"
      href=${this.href}
      target=${this.target||B}
      >${this.renderContent()}
    </a>`}renderContent(){const e=Q`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return Q`
      <span class="touch"></span>
      ${this.trailingIcon?B:e}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?e:B}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}Yn(ot),YI(ot);ot.formAssociated=!0;ot.shadowRootOptions={mode:"open",delegatesFocus:!0};R([$({type:Boolean,reflect:!0})],ot.prototype,"disabled",void 0);R([$()],ot.prototype,"href",void 0);R([$()],ot.prototype,"target",void 0);R([$({type:Boolean,attribute:"trailing-icon",reflect:!0})],ot.prototype,"trailingIcon",void 0);R([$({type:Boolean,attribute:"has-icon",reflect:!0})],ot.prototype,"hasIcon",void 0);R([$()],ot.prototype,"type",void 0);R([$({reflect:!0})],ot.prototype,"value",void 0);R([De(".button")],ot.prototype,"buttonElement",void 0);R([Yo({slot:"icon",flatten:!0})],ot.prototype,"assignedIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class t4 extends ot{renderElevationOrOutline(){return Q`<md-elevation part="elevation"></md-elevation>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const r4=fe`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_container-shape-start-start: var(--md-filled-button-container-shape-start-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-button-container-shape-start-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-button-container-shape-end-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-button-container-shape-end-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px)}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const JI=fe`md-elevation{transition-duration:280ms}:host([disabled]) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host([disabled]) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Yu=fe`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host([disabled]) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host([disabled]) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host([disabled]){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([disabled]) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Kf=class extends t4{};Kf.styles=[Yu,JI,r4];Kf=R([Fe("md-filled-button")],Kf);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class n4 extends ot{renderElevationOrOutline(){return Q`<md-elevation part="elevation"></md-elevation>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const i4=fe`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-filled-tonal-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-tonal-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-tonal-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-tonal-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_container-shape-start-start: var(--md-filled-tonal-button-container-shape-start-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-tonal-button-container-shape-start-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-tonal-button-container-shape-end-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-tonal-button-container-shape-end-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Gf=class extends n4{};Gf.styles=[Yu,JI,i4];Gf=R([Fe("md-filled-tonal-button")],Gf);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class o4 extends ot{renderElevationOrOutline(){return Q`<div class="outline"></div>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const s4=fe`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-outlined-button-container-shape-start-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-outlined-button-container-shape-start-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-outlined-button-container-shape-end-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-outlined-button-container-shape-end-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}.outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}:host(:active) .outline{border-color:var(--_pressed-outline-color)}:host([disabled]) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){:host([disabled]) .background{border-color:GrayText}:host([disabled]) .outline{opacity:1}}.outline,md-ripple{border-width:var(--_outline-width)}md-ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Qf=class extends o4{};Qf.styles=[Yu,s4];Qf=R([Fe("md-outlined-button")],Qf);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class a4 extends ot{}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const l4=fe`:host{--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-text-button-container-shape-start-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-text-button-container-shape-start-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-text-button-container-shape-end-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-text-button-container-shape-end-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Yf=class extends a4{};Yf.styles=[Yu,l4];Yf=R([Fe("md-text-button")],Yf);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Le extends Ie{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.noAsterisk=!1,this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){const e=this.count??-1,r=this.max??-1;return e<0||r<=0?"":`${e} / ${r}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(e){e.has("disabled")&&e.get("disabled")!==void 0&&(this.disableTransitions=!0),this.disabled&&this.focused&&(e.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:e.get("focused"),wasPopulated:e.get("populated")}),super.update(e)}render(){var o,s,l;const e=this.renderLabel(!0),r=this.renderLabel(!1),n=(o=this.renderOutline)==null?void 0:o.call(this,e),i={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return Q`
      <div class="field ${zt(i)}">
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
    `}updated(e){(e.has("supportingText")||e.has("errorText")||e.has("count")||e.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame(()=>{this.refreshErrorAlert=!1}),this.disableTransitions&&requestAnimationFrame(()=>{this.disableTransitions=!1})}renderSupportingText(){const{supportingOrErrorText:e,counterText:r}=this;if(!e&&!r)return B;const n=Q`<span>${e}</span>`,i=r?Q`<span class="counter">${r}</span>`:B,s=this.error&&this.errorText&&!this.refreshErrorAlert?"alert":B;return Q`
      <div class="supporting-text" role=${s}>${n}${i}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(const e of this.slottedAriaDescribedBy)HI(Q`${this.supportingOrErrorText} ${this.counterText}`,e),e.setAttribute("hidden","")}renderLabel(e){if(!this.label)return B;let r;e?r=this.focused||this.populated||this.isAnimating:r=!this.focused&&!this.populated&&!this.isAnimating;const n={hidden:!r,floating:e,resting:!e},i=`${this.label}${this.required&&!this.noAsterisk?"*":""}`;return Q`
      <span class="label ${zt(n)}" aria-hidden=${!r}
        >${i}</span
      >
    `}animateLabelIfNeeded({wasFocused:e,wasPopulated:r}){var o,s,l;if(!this.label)return;e??(e=this.focused),r??(r=this.populated);const n=e||r,i=this.focused||this.populated;n!==i&&(this.isAnimating=!0,(o=this.labelAnimation)==null||o.cancel(),this.labelAnimation=(s=this.floatingLabelEl)==null?void 0:s.animate(this.getLabelKeyframes(),{duration:150,easing:$o.STANDARD}),(l=this.labelAnimation)==null||l.addEventListener("finish",()=>{this.isAnimating=!1}))}getLabelKeyframes(){const{floatingLabelEl:e,restingLabelEl:r}=this;if(!e||!r)return[];const{x:n,y:i,height:o}=e.getBoundingClientRect(),{x:s,y:l,height:c}=r.getBoundingClientRect(),u=e.scrollWidth,h=r.scrollWidth,p=h/u,m=s-n,b=l-i+Math.round((c-o*p)/2),S=`translateX(${m}px) translateY(${b}px) scale(${p})`,P="translateX(0) translateY(0) scale(1)",N=r.clientWidth,y=h>N?`${N/p}px`:"";return this.focused||this.populated?[{transform:S,width:y},{transform:P,width:y}]:[{transform:P,width:y},{transform:S,width:y}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}}R([$({type:Boolean})],Le.prototype,"disabled",void 0);R([$({type:Boolean})],Le.prototype,"error",void 0);R([$({type:Boolean})],Le.prototype,"focused",void 0);R([$()],Le.prototype,"label",void 0);R([$({type:Boolean,attribute:"no-asterisk"})],Le.prototype,"noAsterisk",void 0);R([$({type:Boolean})],Le.prototype,"populated",void 0);R([$({type:Boolean})],Le.prototype,"required",void 0);R([$({type:Boolean})],Le.prototype,"resizable",void 0);R([$({attribute:"supporting-text"})],Le.prototype,"supportingText",void 0);R([$({attribute:"error-text"})],Le.prototype,"errorText",void 0);R([$({type:Number})],Le.prototype,"count",void 0);R([$({type:Number})],Le.prototype,"max",void 0);R([$({type:Boolean,attribute:"has-start"})],Le.prototype,"hasStart",void 0);R([$({type:Boolean,attribute:"has-end"})],Le.prototype,"hasEnd",void 0);R([Yo({slot:"aria-describedby"})],Le.prototype,"slottedAriaDescribedBy",void 0);R([St()],Le.prototype,"isAnimating",void 0);R([St()],Le.prototype,"refreshErrorAlert",void 0);R([St()],Le.prototype,"disableTransitions",void 0);R([De(".label.floating")],Le.prototype,"floatingLabelEl",void 0);R([De(".label.resting")],Le.prototype,"restingLabelEl",void 0);R([De(".container")],Le.prototype,"containerEl",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class c4 extends Le{renderBackground(){return Q`
      <div class="background"></div>
      <div class="state-layer"></div>
    `}renderIndicator(){return Q`<div class="active-indicator"></div>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const u4=fe`@layer styles{:host{--_active-indicator-color: var(--md-filled-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-field-active-indicator-height, 1px);--_bottom-space: var(--md-filled-field-bottom-space, 16px);--_container-color: var(--md-filled-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_content-color: var(--md-filled-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-filled-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-filled-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-filled-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-weight: var(--md-filled-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-active-indicator-color: var(--md-filled-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-field-disabled-container-opacity, 0.04);--_disabled-content-color: var(--md-filled-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-filled-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-filled-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-filled-field-disabled-leading-content-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-filled-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-filled-field-disabled-trailing-content-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-content-color: var(--md-filled-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-active-indicator-color: var(--md-filled-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-content-color: var(--md-filled-field-error-focus-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-label-text-color: var(--md-filled-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-filled-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-filled-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-content-color: var(--md-filled-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-filled-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-filled-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-filled-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-filled-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-filled-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-field-focus-active-indicator-height, 3px);--_focus-content-color: var(--md-filled-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-filled-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-filled-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-field-hover-active-indicator-height, 1px);--_hover-content-color: var(--md-filled-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-content-color: var(--md-filled-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-filled-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-filled-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-filled-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-filled-field-leading-space, 16px);--_supporting-text-color: var(--md-filled-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-filled-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-filled-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-filled-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-filled-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-filled-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-filled-field-top-space, 16px);--_trailing-content-color: var(--md-filled-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-filled-field-trailing-space, 16px);--_with-label-bottom-space: var(--md-filled-field-with-label-bottom-space, 8px);--_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px);--_container-shape-start-start: var(--md-filled-field-container-shape-start-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-field-container-shape-start-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-field-container-shape-end-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-field-container-shape-end-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)))}.background,.state-layer{border-radius:inherit;inset:0;pointer-events:none;position:absolute}.background{background:var(--_container-color)}.state-layer{visibility:hidden}.field:not(.disabled):hover .state-layer{visibility:visible}.label.floating{position:absolute;top:var(--_with-label-top-space)}.field:not(.with-start) .label-wrapper{margin-inline-start:var(--_leading-space)}.field:not(.with-end) .label-wrapper{margin-inline-end:var(--_trailing-space)}.active-indicator{inset:auto 0 0 0;pointer-events:none;position:absolute;width:100%;z-index:1}.active-indicator::before,.active-indicator::after{border-bottom:var(--_active-indicator-height) solid var(--_active-indicator-color);inset:auto 0 0 0;content:"";position:absolute;width:100%}.active-indicator::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .active-indicator::after{opacity:1}.field:not(.with-start) .content ::slotted(*){padding-inline-start:var(--_leading-space)}.field:not(.with-end) .content ::slotted(*){padding-inline-end:var(--_trailing-space)}.field:not(.no-label) .content ::slotted(:not(textarea)){padding-bottom:var(--_with-label-bottom-space);padding-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}.field:not(.no-label) .content ::slotted(textarea){margin-bottom:var(--_with-label-bottom-space);margin-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}:hover .active-indicator::before{border-bottom-color:var(--_hover-active-indicator-color);border-bottom-width:var(--_hover-active-indicator-height)}.active-indicator::after{border-bottom-color:var(--_focus-active-indicator-color);border-bottom-width:var(--_focus-active-indicator-height)}:hover .state-layer{background:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.disabled .active-indicator::before{border-bottom-color:var(--_disabled-active-indicator-color);border-bottom-width:var(--_disabled-active-indicator-height);opacity:var(--_disabled-active-indicator-opacity)}.disabled .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.error .active-indicator::before{border-bottom-color:var(--_error-active-indicator-color)}.error:hover .active-indicator::before{border-bottom-color:var(--_error-hover-active-indicator-color)}.error:hover .state-layer{background:var(--_error-hover-state-layer-color);opacity:var(--_error-hover-state-layer-opacity)}.error .active-indicator::after{border-bottom-color:var(--_error-focus-active-indicator-color)}.resizable .container{bottom:var(--_focus-active-indicator-height);clip-path:inset(var(--_focus-active-indicator-height) 0 0 0)}.resizable .container>*{top:var(--_focus-active-indicator-height)}}@layer hcm{@media(forced-colors: active){.disabled .active-indicator::before{border-color:GrayText;opacity:1}}}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const d4=fe`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Xf=class extends c4{};Xf.styles=[d4,u4];Xf=R([Fe("md-filled-field")],Xf);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ZI=Symbol.for(""),h4=t=>{if((t==null?void 0:t.r)===ZI)return t==null?void 0:t._$litStatic$},bi=(t,...e)=>({_$litStatic$:e.reduce((r,n,i)=>r+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+t[i+1],t[0]),r:ZI}),Aw=new Map,f4=t=>(e,...r)=>{const n=r.length;let i,o;const s=[],l=[];let c,u=0,h=!1;for(;u<n;){for(c=e[u];u<n&&(o=r[u],(i=h4(o))!==void 0);)c+=i+e[++u],h=!0;u!==n&&l.push(o),s.push(c),u++}if(u===n&&s.push(e[n]),h){const p=s.join("$$lit$$");(e=Aw.get(p))===void 0&&(s.raw=s,Aw.set(p,e=s)),r=l}return t(e,...r)},bg=f4(Q);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const p4=fe`:host{--_active-indicator-color: var(--md-filled-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-text-field-active-indicator-height, 1px);--_caret-color: var(--md-filled-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-color: var(--md-filled-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-active-indicator-color: var(--md-filled-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-text-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-text-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-text-field-disabled-container-opacity, 0.04);--_disabled-input-text-color: var(--md-filled-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-filled-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-filled-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filled-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-filled-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filled-text-field-disabled-trailing-icon-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-active-indicator-color: var(--md-filled-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-caret-color: var(--md-filled-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-filled-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-filled-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-filled-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-filled-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-input-text-color: var(--md-filled-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-filled-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-text-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-filled-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-filled-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-filled-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-filled-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-filled-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-text-field-focus-active-indicator-height, 3px);--_focus-input-text-color: var(--md-filled-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-filled-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-filled-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-text-field-hover-active-indicator-height, 1px);--_hover-input-text-color: var(--md-filled-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-icon-color: var(--md-filled-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-text-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filled-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-filled-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-filled-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-filled-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-filled-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-filled-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-filled-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-filled-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-filled-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-filled-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-filled-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);--_supporting-text-color: var(--md-filled-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-filled-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-filled-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-filled-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-filled-text-field-container-shape-start-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-text-field-container-shape-start-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-text-field-container-shape-end-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-text-field-container-shape-end-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_leading-space: var(--md-filled-text-field-leading-space, 16px);--_trailing-space: var(--md-filled-text-field-trailing-space, 16px);--_top-space: var(--md-filled-text-field-top-space, 16px);--_bottom-space: var(--md-filled-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-filled-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-filled-text-field-input-text-suffix-leading-space, 2px);--_with-label-top-space: var(--md-filled-text-field-with-label-top-space, 8px);--_with-label-bottom-space: var(--md-filled-text-field-with-label-bottom-space, 8px);--_focus-caret-color: var(--md-filled-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--md-filled-field-active-indicator-color: var(--_active-indicator-color);--md-filled-field-active-indicator-height: var(--_active-indicator-height);--md-filled-field-bottom-space: var(--_bottom-space);--md-filled-field-container-color: var(--_container-color);--md-filled-field-container-shape-end-end: var(--_container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_container-shape-start-start);--md-filled-field-content-color: var(--_input-text-color);--md-filled-field-content-font: var(--_input-text-font);--md-filled-field-content-line-height: var(--_input-text-line-height);--md-filled-field-content-size: var(--_input-text-size);--md-filled-field-content-weight: var(--_input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_error-active-indicator-color);--md-filled-field-error-content-color: var(--_error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_error-label-text-color);--md-filled-field-error-leading-content-color: var(--_error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_label-text-color);--md-filled-field-label-text-font: var(--_label-text-font);--md-filled-field-label-text-line-height: var(--_label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_label-text-populated-size);--md-filled-field-label-text-size: var(--_label-text-size);--md-filled-field-label-text-weight: var(--_label-text-weight);--md-filled-field-leading-content-color: var(--_leading-icon-color);--md-filled-field-leading-space: var(--_leading-space);--md-filled-field-supporting-text-color: var(--_supporting-text-color);--md-filled-field-supporting-text-font: var(--_supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_supporting-text-size);--md-filled-field-supporting-text-weight: var(--_supporting-text-weight);--md-filled-field-top-space: var(--_top-space);--md-filled-field-trailing-content-color: var(--_trailing-icon-color);--md-filled-field-trailing-space: var(--_trailing-space);--md-filled-field-with-label-bottom-space: var(--_with-label-bottom-space);--md-filled-field-with-label-top-space: var(--_with-label-top-space)}
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m4=t=>t.strings===void 0,g4={},v4=(t,e=g4)=>t._$AH=e;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sw=yg(class extends _g{constructor(t){if(super(t),t.type!==vn.PROPERTY&&t.type!==vn.ATTRIBUTE&&t.type!==vn.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!m4(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Qt||e===B)return e;const r=t.element,n=t.name;if(t.type===vn.PROPERTY){if(e===r[n])return Qt}else if(t.type===vn.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(n))return Qt}else if(t.type===vn.ATTRIBUTE&&r.getAttribute(n)===e+"")return Qt;return v4(t),e}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const eT="important",y4=" !"+eT,kw=yg(class extends _g{constructor(t){var e;if(super(t),t.type!==vn.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,r)=>{const n=t[r];return n==null?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:r}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?r.removeProperty(n):r[n]=null);for(const n in e){const i=e[n];if(i!=null){this.ft.add(n);const o=typeof i=="string"&&i.endsWith(y4);n.includes("-")||o?r.setProperty(n,o?i.slice(0,-11):i,o?eT:""):r[n]=i}}return Qt}});/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const _4={fromAttribute(t){return t??""},toAttribute(t){return t||null}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Xu(t,e){e.bubbles&&(!t.shadowRoot||e.composed)&&e.stopPropagation();const r=Reflect.construct(e.constructor,[e.type,e]),n=t.dispatchEvent(r);return n||e.preventDefault(),n}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Na=Symbol("createValidator"),Oa=Symbol("getValidityAnchor"),vh=Symbol("privateValidator"),Vr=Symbol("privateSyncValidity"),Fl=Symbol("privateCustomValidationMessage");function Eg(t){var e;class r extends t{constructor(){super(...arguments),this[e]=""}get validity(){return this[Vr](),this[Ze].validity}get validationMessage(){return this[Vr](),this[Ze].validationMessage}get willValidate(){return this[Vr](),this[Ze].willValidate}checkValidity(){return this[Vr](),this[Ze].checkValidity()}reportValidity(){return this[Vr](),this[Ze].reportValidity()}setCustomValidity(i){this[Fl]=i,this[Vr]()}requestUpdate(i,o,s){super.requestUpdate(i,o,s),this[Vr]()}firstUpdated(i){super.firstUpdated(i),this[Vr]()}[(e=Fl,Vr)](){this[vh]||(this[vh]=this[Na]());const{validity:i,validationMessage:o}=this[vh].getValidity(),s=!!this[Fl],l=this[Fl]||o;this[Ze].setValidity({...i,customError:s},l,this[Oa]()??void 0)}[Na](){throw new Error("Implement [createValidator]")}[Oa](){throw new Error("Implement [getValidityAnchor]")}}return r}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Eo=Symbol("getFormValue"),au=Symbol("getFormState");function xg(t){class e extends t{get form(){return this[Ze].form}get labels(){return this[Ze].labels}get name(){return this.getAttribute("name")??""}set name(n){this.setAttribute("name",n)}get disabled(){return this.hasAttribute("disabled")}set disabled(n){this.toggleAttribute("disabled",n)}attributeChangedCallback(n,i,o){if(n==="name"||n==="disabled"){const s=n==="disabled"?i!==null:i;this.requestUpdate(n,s);return}super.attributeChangedCallback(n,i,o)}requestUpdate(n,i,o){super.requestUpdate(n,i,o),this[Ze].setFormValue(this[Eo](),this[au]())}[Eo](){throw new Error("Implement [getFormValue]")}[au](){return this[Eo]()}formDisabledCallback(n){this.disabled=n}}return e.formAssociated=!0,R([$({noAccessor:!0})],e.prototype,"name",null),R([$({type:Boolean,noAccessor:!0})],e.prototype,"disabled",null),e}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Jf=Symbol("onReportValidity"),Ul=Symbol("privateCleanupFormListeners"),zl=Symbol("privateDoNotReportInvalid"),jl=Symbol("privateIsSelfReportingValidity"),Bl=Symbol("privateCallOnReportValidity");function w4(t){var e,r,n;class i extends t{constructor(...s){super(...s),this[e]=new AbortController,this[r]=!1,this[n]=!1,this.addEventListener("invalid",l=>{this[zl]||!l.isTrusted||this.addEventListener("invalid",()=>{this[Bl](l)},{once:!0})},{capture:!0})}checkValidity(){this[zl]=!0;const s=super.checkValidity();return this[zl]=!1,s}reportValidity(){this[jl]=!0;const s=super.reportValidity();return s&&this[Bl](null),this[jl]=!1,s}[(e=Ul,r=zl,n=jl,Bl)](s){const l=s==null?void 0:s.defaultPrevented;l||(this[Jf](s),!(!l&&(s==null?void 0:s.defaultPrevented)))||(this[jl]||x4(this[Ze].form,this))&&this.focus()}[Jf](s){throw new Error("Implement [onReportValidity]")}formAssociatedCallback(s){super.formAssociatedCallback&&super.formAssociatedCallback(s),this[Ul].abort(),s&&(this[Ul]=new AbortController,b4(this,s,()=>{this[Bl](null)},this[Ul].signal))}}return i}function b4(t,e,r,n){const i=E4(e);let o=!1,s,l=!1;i.addEventListener("before",()=>{l=!0,s=new AbortController,o=!1,t.addEventListener("invalid",()=>{o=!0},{signal:s.signal})},{signal:n}),i.addEventListener("after",()=>{l=!1,s==null||s.abort(),!o&&r()},{signal:n}),e.addEventListener("submit",()=>{l||r()},{signal:n})}const yh=new WeakMap;function E4(t){if(!yh.has(t)){const e=new EventTarget;yh.set(t,e);for(const r of["reportValidity","requestSubmit"]){const n=t[r];t[r]=function(){e.dispatchEvent(new Event("before"));const i=Reflect.apply(n,this,arguments);return e.dispatchEvent(new Event("after")),i}}}return yh.get(t)}function x4(t,e){if(!t)return!0;let r;for(const n of t.elements)if(n.matches(":invalid")){r=n;break}return r===e}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ig{constructor(e){this.getCurrentState=e,this.currentValidity={validity:{},validationMessage:""}}getValidity(){const e=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,e)))return this.currentValidity;const{validity:n,validationMessage:i}=this.computeValidity(e);return this.prevState=this.copy(e),this.currentValidity={validationMessage:i,validity:{badInput:n.badInput,customError:n.customError,patternMismatch:n.patternMismatch,rangeOverflow:n.rangeOverflow,rangeUnderflow:n.rangeUnderflow,stepMismatch:n.stepMismatch,tooLong:n.tooLong,tooShort:n.tooShort,typeMismatch:n.typeMismatch,valueMissing:n.valueMissing}},this.currentValidity}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class I4 extends Ig{computeValidity({state:e,renderedControl:r}){let n=r;Is(e)&&!n?(n=this.inputControl||document.createElement("input"),this.inputControl=n):n||(n=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=n);const i=Is(e)?n:null;if(i&&(i.type=e.type),n.value!==e.value&&(n.value=e.value),n.required=e.required,i){const o=e;o.pattern?i.pattern=o.pattern:i.removeAttribute("pattern"),o.min?i.min=o.min:i.removeAttribute("min"),o.max?i.max=o.max:i.removeAttribute("max"),o.step?i.step=o.step:i.removeAttribute("step")}return(e.minLength??-1)>-1?n.setAttribute("minlength",String(e.minLength)):n.removeAttribute("minlength"),(e.maxLength??-1)>-1?n.setAttribute("maxlength",String(e.maxLength)):n.removeAttribute("maxlength"),{validity:n.validity,validationMessage:n.validationMessage}}equals({state:e},{state:r}){const n=e.type===r.type&&e.value===r.value&&e.required===r.required&&e.minLength===r.minLength&&e.maxLength===r.maxLength;return!Is(e)||!Is(r)?n:n&&e.pattern===r.pattern&&e.min===r.min&&e.max===r.max&&e.step===r.step}copy({state:e}){return{state:Is(e)?this.copyInput(e):this.copyTextArea(e),renderedControl:null}}copyInput(e){const{type:r,pattern:n,min:i,max:o,step:s}=e;return{...this.copySharedState(e),type:r,pattern:n,min:i,max:o,step:s}}copyTextArea(e){return{...this.copySharedState(e),type:e.type}}copySharedState({value:e,required:r,minLength:n,maxLength:i}){return{value:e,required:r,minLength:n,maxLength:i}}}function Is(t){return t.type!=="textarea"}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const T4=w4(Eg(xg(Za(Ie))));class ie extends T4{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(e){this.getInputOrTextarea().selectionDirection=e}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(e){this.getInputOrTextarea().selectionEnd=e}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(e){this.getInputOrTextarea().selectionStart=e}get valueAsNumber(){const e=this.getInput();return e?e.valueAsNumber:NaN}set valueAsNumber(e){const r=this.getInput();r&&(r.valueAsNumber=e,this.value=r.value)}get valueAsDate(){const e=this.getInput();return e?e.valueAsDate:null}set valueAsDate(e){const r=this.getInput();r&&(r.valueAsDate=e,this.value=r.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...e){this.getInputOrTextarea().setRangeText(...e),this.value=this.getInputOrTextarea().value}setSelectionRange(e,r,n){this.getInputOrTextarea().setSelectionRange(e,r,n)}stepDown(e){const r=this.getInput();r&&(r.stepDown(e),this.value=r.value)}stepUp(e){const r=this.getInput();r&&(r.stepUp(e),this.value=r.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(e,r,n){e==="value"&&this.dirty||super.attributeChangedCallback(e,r,n)}render(){const e={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:this.type==="textarea","no-spinner":this.noSpinner};return Q`
      <span class="text-field ${zt(e)}">
        ${this.renderField()}
      </span>
    `}updated(e){const r=this.getInputOrTextarea().value;this.value!==r&&(this.value=r)}renderField(){return bg`<${this.fieldTag}
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
    </${this.fieldTag}>`}renderLeadingIcon(){return Q`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return Q`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){const e={direction:this.textDirection},r=this.ariaLabel||this.label||B,n=this.autocomplete,i=(this.maxLength??-1)>-1,o=(this.minLength??-1)>-1;if(this.type==="textarea")return Q`
        <textarea
          class="input"
          style=${kw(e)}
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
          .value=${Sw(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;const s=this.renderPrefix(),l=this.renderSuffix(),c=this.inputMode;return Q`
      <div class="input-wrapper">
        ${s}
        <input
          class="input"
          style=${kw(e)}
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
          .value=${Sw(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${l}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(e,r){return e?Q`<span class="${zt({suffix:r,prefix:!r})}">${e}</span>`:B}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){var e;this.focused=((e=this.inputOrTextarea)==null?void 0:e.matches(":focus"))??!1}handleInput(e){this.dirty=!0,this.value=e.target.value}redispatchEvent(e){Xu(this,e)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return this.type==="textarea"?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[Eo](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}focus(){this.getInputOrTextarea().focus()}[Na](){return new I4(()=>({state:this,renderedControl:this.inputOrTextarea}))}[Oa](){return this.inputOrTextarea}[Jf](e){var n;e==null||e.preventDefault();const r=this.getErrorText();this.nativeError=!!e,this.nativeErrorText=this.validationMessage,r===this.getErrorText()&&((n=this.field)==null||n.reannounceError())}}Yn(ie);ie.shadowRootOptions={...Ie.shadowRootOptions,delegatesFocus:!0};R([$({type:Boolean,reflect:!0})],ie.prototype,"error",void 0);R([$({attribute:"error-text"})],ie.prototype,"errorText",void 0);R([$()],ie.prototype,"label",void 0);R([$({type:Boolean,attribute:"no-asterisk"})],ie.prototype,"noAsterisk",void 0);R([$({type:Boolean,reflect:!0})],ie.prototype,"required",void 0);R([$()],ie.prototype,"value",void 0);R([$({attribute:"prefix-text"})],ie.prototype,"prefixText",void 0);R([$({attribute:"suffix-text"})],ie.prototype,"suffixText",void 0);R([$({type:Boolean,attribute:"has-leading-icon"})],ie.prototype,"hasLeadingIcon",void 0);R([$({type:Boolean,attribute:"has-trailing-icon"})],ie.prototype,"hasTrailingIcon",void 0);R([$({attribute:"supporting-text"})],ie.prototype,"supportingText",void 0);R([$({attribute:"text-direction"})],ie.prototype,"textDirection",void 0);R([$({type:Number})],ie.prototype,"rows",void 0);R([$({type:Number})],ie.prototype,"cols",void 0);R([$({reflect:!0})],ie.prototype,"inputMode",void 0);R([$()],ie.prototype,"max",void 0);R([$({type:Number})],ie.prototype,"maxLength",void 0);R([$()],ie.prototype,"min",void 0);R([$({type:Number})],ie.prototype,"minLength",void 0);R([$({type:Boolean,attribute:"no-spinner"})],ie.prototype,"noSpinner",void 0);R([$()],ie.prototype,"pattern",void 0);R([$({reflect:!0,converter:_4})],ie.prototype,"placeholder",void 0);R([$({type:Boolean,reflect:!0})],ie.prototype,"readOnly",void 0);R([$({type:Boolean,reflect:!0})],ie.prototype,"multiple",void 0);R([$()],ie.prototype,"step",void 0);R([$({reflect:!0})],ie.prototype,"type",void 0);R([$({reflect:!0})],ie.prototype,"autocomplete",void 0);R([St()],ie.prototype,"dirty",void 0);R([St()],ie.prototype,"focused",void 0);R([St()],ie.prototype,"nativeError",void 0);R([St()],ie.prototype,"nativeErrorText",void 0);R([De(".input")],ie.prototype,"inputOrTextarea",void 0);R([De(".field")],ie.prototype,"field",void 0);R([Yo({slot:"leading-icon"})],ie.prototype,"leadingIcons",void 0);R([Yo({slot:"trailing-icon"})],ie.prototype,"trailingIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class A4 extends ie{constructor(){super(...arguments),this.fieldTag=bi`md-filled-field`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const S4=fe`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Zf=class extends A4{constructor(){super(...arguments),this.fieldTag=bi`md-filled-field`}};Zf.styles=[S4,p4];Zf=R([Fe("md-filled-text-field")],Zf);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class k4 extends Ie{render(){return Q`<slot></slot>`}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const C4=fe`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ep=class extends k4{};ep.styles=[C4];ep=R([Fe("md-icon")],ep);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function tT(t,e=an){const r=nT(t,e);return r&&(r.tabIndex=0,r.focus()),r}function rT(t,e=an){const r=R4(t,e);return r&&(r.tabIndex=0,r.focus()),r}function _h(t,e=an){for(let r=0;r<t.length;r++){const n=t[r];if(n.tabIndex===0&&e(n))return{item:n,index:r}}return null}function nT(t,e=an){for(const r of t)if(e(r))return r;return null}function R4(t,e=an){for(let r=t.length-1;r>=0;r--){const n=t[r];if(e(n))return n}return null}function P4(t,e,r=an,n=!0){for(let i=1;i<t.length;i++){const o=(i+e)%t.length;if(o<e&&!n)return null;const s=t[o];if(r(s))return s}return t[e]?t[e]:null}function N4(t,e,r=an,n=!0){for(let i=1;i<t.length;i++){const o=(e-i+t.length)%t.length;if(o>e&&!n)return null;const s=t[o];if(r(s))return s}return t[e]?t[e]:null}function Cw(t,e,r=an,n=!0){if(e){const i=P4(t,e.index,r,n);return i&&(i.tabIndex=0,i.focus()),i}else return tT(t,r)}function Rw(t,e,r=an,n=!0){if(e){const i=N4(t,e.index,r,n);return i&&(i.tabIndex=0,i.focus()),i}else return rT(t,r)}function O4(){return new Event("request-activation",{bubbles:!0,composed:!0})}function an(t){return!t.disabled}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Mr={ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",Home:"Home",End:"End"};class D4{constructor(e){this.handleKeydown=h=>{const p=h.key;if(h.defaultPrevented||!this.isNavigableKey(p))return;const m=this.items;if(!m.length)return;const b=_h(m,this.isActivatable);h.preventDefault();const S=this.isRtl(),P=S?Mr.ArrowRight:Mr.ArrowLeft,N=S?Mr.ArrowLeft:Mr.ArrowRight;let E=null;switch(p){case Mr.ArrowDown:case N:E=Cw(m,b,this.isActivatable,this.wrapNavigation());break;case Mr.ArrowUp:case P:E=Rw(m,b,this.isActivatable,this.wrapNavigation());break;case Mr.Home:E=tT(m,this.isActivatable);break;case Mr.End:E=rT(m,this.isActivatable);break}E&&b&&b.item!==E&&(b.item.tabIndex=-1)},this.onDeactivateItems=()=>{const h=this.items;for(const p of h)this.deactivateItem(p)},this.onRequestActivation=h=>{this.onDeactivateItems();const p=h.target;this.activateItem(p),p.focus()},this.onSlotchange=()=>{const h=this.items;let p=!1;for(const b of h){if(!b.disabled&&b.tabIndex>-1&&!p){p=!0,b.tabIndex=0;continue}b.tabIndex=-1}if(p)return;const m=nT(h,this.isActivatable);m&&(m.tabIndex=0)};const{isItem:r,getPossibleItems:n,isRtl:i,deactivateItem:o,activateItem:s,isNavigableKey:l,isActivatable:c,wrapNavigation:u}=e;this.isItem=r,this.getPossibleItems=n,this.isRtl=i,this.deactivateItem=o,this.activateItem=s,this.isNavigableKey=l,this.isActivatable=c,this.wrapNavigation=u??(()=>!0)}get items(){const e=this.getPossibleItems(),r=[];for(const n of e){if(this.isItem(n)){r.push(n);continue}const o=n.item;o&&this.isItem(o)&&r.push(o)}return r}activateNextItem(){const e=this.items,r=_h(e,this.isActivatable);return r&&(r.item.tabIndex=-1),Cw(e,r,this.isActivatable,this.wrapNavigation())}activatePreviousItem(){const e=this.items,r=_h(e,this.isActivatable);return r&&(r.item.tabIndex=-1),Rw(e,r,this.isActivatable,this.wrapNavigation())}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const L4=new Set(Object.values(Mr));class iT extends Ie{get items(){return this.listController.items}constructor(){super(),this.listController=new D4({isItem:e=>e.hasAttribute("md-list-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>getComputedStyle(this).direction==="rtl",deactivateItem:e=>{e.tabIndex=-1},activateItem:e=>{e.tabIndex=0},isNavigableKey:e=>L4.has(e),isActivatable:e=>!e.disabled&&e.type!=="text"}),this.internals=this.attachInternals(),this.internals.role="list",this.addEventListener("keydown",this.listController.handleKeydown)}render(){return Q`
      <slot
        @deactivate-items=${this.listController.onDeactivateItems}
        @request-activation=${this.listController.onRequestActivation}
        @slotchange=${this.listController.onSlotchange}>
      </slot>
    `}activateNextItem(){return this.listController.activateNextItem()}activatePreviousItem(){return this.listController.activatePreviousItem()}}R([Yo({flatten:!0})],iT.prototype,"slotItems",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const V4=fe`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let tp=class extends iT{};tp.styles=[V4];tp=R([Fe("md-list")],tp);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Tg extends Ie{constructor(){super(...arguments),this.multiline=!1}render(){return Q`
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
    `}handleTextSlotChange(){let e=!1,r=0;for(const n of this.textSlots)if(M4(n)&&(r+=1),r>1){e=!0;break}this.multiline=e}}R([$({type:Boolean,reflect:!0})],Tg.prototype,"multiline",void 0);R([kL(".text slot")],Tg.prototype,"textSlots",void 0);function M4(t){var e;for(const r of t.assignedNodes({flatten:!0})){const n=r.nodeType===Node.ELEMENT_NODE,i=r.nodeType===Node.TEXT_NODE&&((e=r.textContent)==null?void 0:e.match(/\S/));if(n||i)return!0}return!1}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const $4=fe`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let rp=class extends Tg{};rp.styles=[$4];rp=R([Fe("md-item")],rp);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ln extends Ie{constructor(){super(...arguments),this.disabled=!1,this.type="text",this.isListItem=!0,this.href="",this.target=""}get isDisabled(){return this.disabled&&this.type!=="link"}willUpdate(e){this.href&&(this.type="link"),super.willUpdate(e)}render(){return this.renderListItem(Q`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){const r=this.type==="link";let n;switch(this.type){case"link":n=bi`a`;break;case"button":n=bi`button`;break;default:case"text":n=bi`li`;break}const i=this.type!=="text",o=r&&this.target?this.target:B;return bg`
      <${n}
        id="item"
        tabindex="${this.isDisabled||!i?-1:0}"
        ?disabled=${this.isDisabled}
        role="listitem"
        aria-selected=${this.ariaSelected||B}
        aria-checked=${this.ariaChecked||B}
        aria-expanded=${this.ariaExpanded||B}
        aria-haspopup=${this.ariaHasPopup||B}
        class="list-item ${zt(this.getRenderClasses())}"
        href=${this.href||B}
        target=${o}
        @focus=${this.onFocus}
      >${e}</${n}>
    `}renderRipple(){return this.type==="text"?B:Q` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.isDisabled}></md-ripple>`}renderFocusRing(){return this.type==="text"?B:Q` <md-focus-ring
      @visibility-changed=${this.onFocusRingVisibilityChanged}
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}onFocusRingVisibilityChanged(e){}getRenderClasses(){return{disabled:this.isDisabled}}renderBody(){return Q`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}onFocus(){this.tabIndex===-1&&this.dispatchEvent(O4())}focus(){var e;(e=this.listItemRoot)==null||e.focus()}}Yn(ln);ln.shadowRootOptions={...Ie.shadowRootOptions,delegatesFocus:!0};R([$({type:Boolean,reflect:!0})],ln.prototype,"disabled",void 0);R([$({reflect:!0})],ln.prototype,"type",void 0);R([$({type:Boolean,attribute:"md-list-item",reflect:!0})],ln.prototype,"isListItem",void 0);R([$()],ln.prototype,"href",void 0);R([$()],ln.prototype,"target",void 0);R([De(".list-item")],ln.prototype,"listItemRoot",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const F4=fe`:host{display:flex;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-list-item-pressed-state-layer-opacity, 0.12)}:host(:is([type=button]:not([disabled]),[type=link])){cursor:pointer}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;cursor:inherit;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, 0.3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-list-item-one-line-container-height, 56px);padding-top:var(--md-list-item-top-space, 12px);padding-bottom:var(--md-list-item-bottom-space, 12px);padding-inline-start:var(--md-list-item-leading-space, 16px);padding-inline-end:var(--md-list-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}@media(forced-colors: active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let np=class extends ln{};np.styles=[F4];np=R([Fe("md-list-item")],np);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Xo extends Ie{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){const{ariaLabel:e}=this;return Q`
      <div
        class="progress ${zt(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${e||B}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?B:this.value}
        >${this.renderIndicator()}</div
      >
    `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}}Yn(Xo);R([$({type:Number})],Xo.prototype,"value",void 0);R([$({type:Number})],Xo.prototype,"max",void 0);R([$({type:Boolean})],Xo.prototype,"indeterminate",void 0);R([$({type:Boolean,attribute:"four-color"})],Xo.prototype,"fourColor",void 0);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class U4 extends Xo{renderIndicator(){return this.indeterminate?this.renderIndeterminateContainer():this.renderDeterminateContainer()}renderDeterminateContainer(){const e=(1-this.value/this.max)*100;return Q`
      <svg viewBox="0 0 4800 4800">
        <circle class="track" pathLength="100"></circle>
        <circle
          class="active-track"
          pathLength="100"
          stroke-dashoffset=${e}></circle>
      </svg>
    `}renderIndeterminateContainer(){return Q` <div class="spinner">
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
 */const z4=fe`:host{--_active-indicator-color: var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width: var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color: var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size: var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;width:var(--_size);height:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.progress,.spinner,.left,.right,.circle,svg,.track,.active-track{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1568.2352941176ms}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) rgba(0,0,0,0) rgba(0,0,0,0);animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-666.5ms,0ms}@media(forced-colors: active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ip=class extends U4{};ip.styles=[z4];ip=R([Fe("md-circular-progress")],ip);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Xn extends Ie{constructor(){super(...arguments),this.disabled=!1,this.alwaysFocusable=!1,this.label="",this.hasIcon=!1}get rippleDisabled(){return this.disabled}focus(e){this.disabled&&!this.alwaysFocusable||super.focus(e)}render(){return Q`
      <div class="container ${zt(this.getContainerClasses())}">
        ${this.renderContainerContent()}
      </div>
    `}updated(e){e.has("disabled")&&e.get("disabled")!==void 0&&this.dispatchEvent(new Event("update-focus",{bubbles:!0}))}getContainerClasses(){return{disabled:this.disabled,"has-icon":this.hasIcon}}renderContainerContent(){return Q`
      ${this.renderOutline()}
      <md-focus-ring part="focus-ring" for=${this.primaryId}></md-focus-ring>
      <md-ripple
        for=${this.primaryId}
        ?disabled=${this.rippleDisabled}></md-ripple>
      ${this.renderPrimaryAction(this.renderPrimaryContent())}
    `}renderOutline(){return Q`<span class="outline"></span>`}renderLeadingIcon(){return Q`<slot name="icon" @slotchange=${this.handleIconChange}></slot>`}renderPrimaryContent(){return Q`
      <span class="leading icon" aria-hidden="true">
        ${this.renderLeadingIcon()}
      </span>
      <span class="label">${this.label}</span>
      <span class="touch"></span>
    `}handleIconChange(e){const r=e.target;this.hasIcon=r.assignedElements({flatten:!0}).length>0}}Yn(Xn);Xn.shadowRootOptions={...Ie.shadowRootOptions,delegatesFocus:!0};R([$({type:Boolean,reflect:!0})],Xn.prototype,"disabled",void 0);R([$({type:Boolean,attribute:"always-focusable"})],Xn.prototype,"alwaysFocusable",void 0);R([$()],Xn.prototype,"label",void 0);R([$({type:Boolean,reflect:!0,attribute:"has-icon"})],Xn.prototype,"hasIcon",void 0);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class oT extends Ie{get chips(){return this.childElements.filter(e=>e instanceof Xn)}constructor(){super(),this.internals=this.attachInternals(),this.addEventListener("focusin",this.updateTabIndices.bind(this)),this.addEventListener("update-focus",this.updateTabIndices.bind(this)),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.internals.role="toolbar"}render(){return Q`<slot @slotchange=${this.updateTabIndices}></slot>`}handleKeyDown(e){const r=e.key==="ArrowLeft",n=e.key==="ArrowRight",i=e.key==="Home",o=e.key==="End";if(!r&&!n&&!i&&!o)return;const{chips:s}=this;if(s.length<2)return;if(e.preventDefault(),i||o){const m=i?0:s.length-1;s[m].focus({trailing:o}),this.updateTabIndices();return}const c=getComputedStyle(this).direction==="rtl"?r:n,u=s.find(m=>m.matches(":focus-within"));if(!u){(c?s[0]:s[s.length-1]).focus({trailing:!c}),this.updateTabIndices();return}const h=s.indexOf(u);let p=c?h+1:h-1;for(;p!==h;){p>=s.length?p=0:p<0&&(p=s.length-1);const m=s[p];if(m.disabled&&!m.alwaysFocusable){c?p++:p--;continue}m.focus({trailing:!c}),this.updateTabIndices();break}}updateTabIndices(){const{chips:e}=this;let r;for(const n of e){const i=n.alwaysFocusable||!n.disabled;if(n.matches(":focus-within")&&i){r=n;continue}i&&!r&&(r=n),n.tabIndex=-1}r&&(r.tabIndex=0)}}R([Yo()],oT.prototype,"childElements",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const j4=fe`:host{display:flex;flex-wrap:wrap;gap:8px}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let op=class extends oT{};op.styles=[j4];op=R([Fe("md-chip-set")],op);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const B4=fe`.elevated{--md-elevation-level: var(--_elevated-container-elevation);--md-elevation-shadow-color: var(--_elevated-container-shadow-color)}.elevated::before{background:var(--_elevated-container-color)}.elevated:hover{--md-elevation-level: var(--_elevated-hover-container-elevation)}.elevated:focus-within{--md-elevation-level: var(--_elevated-focus-container-elevation)}.elevated:active{--md-elevation-level: var(--_elevated-pressed-container-elevation)}.elevated.disabled{--md-elevation-level: var(--_elevated-disabled-container-elevation)}.elevated.disabled::before{background:var(--_elevated-disabled-container-color);opacity:var(--_elevated-disabled-container-opacity)}@media(forced-colors: active){.elevated md-elevation{border:1px solid CanvasText}.elevated.disabled md-elevation{border-color:GrayText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ql="aria-label-remove";class q4 extends Xn{get ariaLabelRemove(){if(this.hasAttribute(ql))return this.getAttribute(ql);const{ariaLabel:e}=this;return`Remove ${e||this.label}`}set ariaLabelRemove(e){const r=this.ariaLabelRemove;e!==r&&(e===null?this.removeAttribute(ql):this.setAttribute(ql,e),this.requestUpdate())}constructor(){super(),this.handleTrailingActionFocus=this.handleTrailingActionFocus.bind(this),this.addEventListener("keydown",this.handleKeyDown.bind(this))}focus(e){if((this.alwaysFocusable||!this.disabled)&&(e!=null&&e.trailing)&&this.trailingAction){this.trailingAction.focus(e);return}super.focus(e)}renderContainerContent(){return Q`
      ${super.renderContainerContent()}
      ${this.renderTrailingAction(this.handleTrailingActionFocus)}
    `}handleKeyDown(e){var u,h;const r=e.key==="ArrowLeft",n=e.key==="ArrowRight";if(!r&&!n||!this.primaryAction||!this.trailingAction)return;const o=getComputedStyle(this).direction==="rtl"?r:n,s=(u=this.primaryAction)==null?void 0:u.matches(":focus-within"),l=(h=this.trailingAction)==null?void 0:h.matches(":focus-within");if(o&&l||!o&&s)return;e.preventDefault(),e.stopPropagation(),(o?this.trailingAction:this.primaryAction).focus()}handleTrailingActionFocus(){const{primaryAction:e,trailingAction:r}=this;!e||!r||(e.tabIndex=-1,r.addEventListener("focusout",()=>{e.tabIndex=0},{once:!0}))}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function H4({ariaLabel:t,disabled:e,focusListener:r,tabbable:n=!1}){return Q`
    <button
      class="trailing action"
      aria-label=${t}
      tabindex=${n?B:-1}
      @click=${W4}
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
  `}function W4(t){this.disabled||(t.stopPropagation(),!this.dispatchEvent(new Event("remove",{cancelable:!0})))||this.remove()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class zi extends q4{constructor(){super(...arguments),this.elevated=!1,this.removable=!1,this.selected=!1,this.hasSelectedIcon=!1}get primaryId(){return"button"}getContainerClasses(){return{...super.getContainerClasses(),elevated:this.elevated,selected:this.selected,"has-trailing":this.removable,"has-icon":this.hasIcon||this.selected}}renderPrimaryAction(e){const{ariaLabel:r}=this;return Q`
      <button
        class="primary action"
        id="button"
        aria-label=${r||B}
        aria-pressed=${this.selected}
        ?disabled=${this.disabled&&!this.alwaysFocusable}
        @click=${this.handleClick}
        >${e}</button
      >
    `}renderLeadingIcon(){return this.selected?Q`
      <slot name="selected-icon">
        <svg class="checkmark" viewBox="0 0 18 18" aria-hidden="true">
          <path
            d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z" />
        </svg>
      </slot>
    `:super.renderLeadingIcon()}renderTrailingAction(e){return this.removable?H4({focusListener:e,ariaLabel:this.ariaLabelRemove,disabled:this.disabled}):B}renderOutline(){return this.elevated?Q`<md-elevation part="elevation"></md-elevation>`:super.renderOutline()}handleClick(e){if(this.disabled)return;const r=this.selected;if(this.selected=!this.selected,!Xu(this,e)){this.selected=r;return}}}R([$({type:Boolean})],zi.prototype,"elevated",void 0);R([$({type:Boolean})],zi.prototype,"removable",void 0);R([$({type:Boolean,reflect:!0})],zi.prototype,"selected",void 0);R([$({type:Boolean,reflect:!0,attribute:"has-selected-icon"})],zi.prototype,"hasSelectedIcon",void 0);R([De(".primary.action")],zi.prototype,"primaryAction",void 0);R([De(".trailing.action")],zi.prototype,"trailingAction",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const K4=fe`:host{--_container-height: var(--md-filter-chip-container-height, 32px);--_disabled-label-text-color: var(--md-filter-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filter-chip-disabled-label-text-opacity, 0.38);--_elevated-container-elevation: var(--md-filter-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-filter-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-filter-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-filter-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-filter-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-filter-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-filter-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-filter-chip-elevated-pressed-container-elevation, 1);--_elevated-selected-container-color: var(--md-filter-chip-elevated-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_label-text-font: var(--md-filter-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filter-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filter-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filter-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_selected-focus-label-text-color: var(--md-filter-chip-selected-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-label-text-color: var(--md-filter-chip-selected-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-color: var(--md-filter-chip-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-opacity: var(--md-filter-chip-selected-hover-state-layer-opacity, 0.08);--_selected-label-text-color: var(--md-filter-chip-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-label-text-color: var(--md-filter-chip-selected-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-color: var(--md-filter-chip-selected-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_selected-pressed-state-layer-opacity: var(--md-filter-chip-selected-pressed-state-layer-opacity, 0.12);--_elevated-container-color: var(--md-filter-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_disabled-outline-color: var(--md-filter-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-filter-chip-disabled-outline-opacity, 0.12);--_disabled-selected-container-color: var(--md-filter-chip-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-filter-chip-disabled-selected-container-opacity, 0.12);--_focus-outline-color: var(--md-filter-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-filter-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-filter-chip-outline-width, 1px);--_selected-container-color: var(--md-filter-chip-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_selected-outline-width: var(--md-filter-chip-selected-outline-width, 0px);--_focus-label-text-color: var(--md-filter-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-filter-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filter-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-filter-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filter-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-label-text-color: var(--md-filter-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-filter-chip-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filter-chip-pressed-state-layer-opacity, 0.12);--_icon-size: var(--md-filter-chip-icon-size, 18px);--_disabled-leading-icon-color: var(--md-filter-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filter-chip-disabled-leading-icon-opacity, 0.38);--_selected-focus-leading-icon-color: var(--md-filter-chip-selected-focus-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-leading-icon-color: var(--md-filter-chip-selected-hover-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-leading-icon-color: var(--md-filter-chip-selected-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-leading-icon-color: var(--md-filter-chip-selected-pressed-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-leading-icon-color: var(--md-filter-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-filter-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-filter-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-filter-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_disabled-trailing-icon-color: var(--md-filter-chip-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filter-chip-disabled-trailing-icon-opacity, 0.38);--_selected-focus-trailing-icon-color: var(--md-filter-chip-selected-focus-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-trailing-icon-color: var(--md-filter-chip-selected-hover-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-trailing-icon-color: var(--md-filter-chip-selected-pressed-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-trailing-icon-color: var(--md-filter-chip-selected-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-trailing-icon-color: var(--md-filter-chip-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filter-chip-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-trailing-icon-color: var(--md-filter-chip-pressed-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-color: var(--md-filter-chip-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var(--md-filter-chip-container-shape-start-start, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end: var(--md-filter-chip-container-shape-start-end, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end: var(--md-filter-chip-container-shape-end-end, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start: var(--md-filter-chip-container-shape-end-start, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space: var(--md-filter-chip-leading-space, 16px);--_trailing-space: var(--md-filter-chip-trailing-space, 16px);--_icon-label-space: var(--md-filter-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-filter-chip-with-leading-icon-leading-space, 8px);--_with-trailing-icon-trailing-space: var(--md-filter-chip-with-trailing-icon-trailing-space, 8px)}.selected.elevated::before{background:var(--_elevated-selected-container-color)}.checkmark{height:var(--_icon-size);width:var(--_icon-size)}.disabled .checkmark{opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){.disabled .checkmark{opacity:1}}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const G4=fe`.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}:where(.selected)::before{background:var(--_selected-container-color)}:where(.selected) .outline{border-width:var(--_selected-outline-width)}:where(.selected.disabled)::before{background:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}:where(.selected) .label{color:var(--_selected-label-text-color)}:where(.selected:hover) .label{color:var(--_selected-hover-label-text-color)}:where(.selected:focus) .label{color:var(--_selected-focus-label-text-color)}:where(.selected:active) .label{color:var(--_selected-pressed-label-text-color)}:where(.selected) .leading.icon{color:var(--_selected-leading-icon-color)}:where(.selected:hover) .leading.icon{color:var(--_selected-hover-leading-icon-color)}:where(.selected:focus) .leading.icon{color:var(--_selected-focus-leading-icon-color)}:where(.selected:active) .leading.icon{color:var(--_selected-pressed-leading-icon-color)}@media(forced-colors: active){:where(.selected:not(.elevated))::before{border:1px solid CanvasText}:where(.selected) .outline{border-width:1px}}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Q4=fe`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);display:inline-flex;height:var(--_container-height);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host([disabled]){pointer-events:none}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}.container{border-radius:inherit;box-sizing:border-box;display:flex;height:100%;position:relative;width:100%}.container::before{border-radius:inherit;content:"";inset:0;pointer-events:none;position:absolute}.container:not(.disabled){cursor:pointer}.container.disabled{pointer-events:none}.cell{display:flex}.action{align-items:baseline;appearance:none;background:none;border:none;border-radius:inherit;display:flex;outline:none;padding:0;position:relative;text-decoration:none}.primary.action{padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space)}.has-icon .primary.action{padding-inline-start:var(--_with-leading-icon-leading-space)}.touch{height:48px;inset:50% 0 0;position:absolute;transform:translateY(-50%);width:100%}:host([touch-target=none]) .touch{display:none}.outline{border:var(--_outline-width) solid var(--_outline-color);border-radius:inherit;inset:0;pointer-events:none;position:absolute}:where(:focus) .outline{border-color:var(--_focus-outline-color)}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}md-ripple{border-radius:inherit}.label,.icon,.touch{z-index:1}.label{align-items:center;color:var(--_label-text-color);display:flex;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);height:100%;text-overflow:ellipsis;user-select:none;white-space:nowrap}:where(:hover) .label{color:var(--_hover-label-text-color)}:where(:focus) .label{color:var(--_focus-label-text-color)}:where(:active) .label{color:var(--_pressed-label-text-color)}:where(.disabled) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.icon{align-self:center;display:flex;fill:currentColor;position:relative}.icon ::slotted(:first-child){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size)}.leading.icon{color:var(--_leading-icon-color)}.leading.icon ::slotted(*),.leading.icon svg{margin-inline-end:var(--_icon-label-space)}:where(:hover) .leading.icon{color:var(--_hover-leading-icon-color)}:where(:focus) .leading.icon{color:var(--_focus-leading-icon-color)}:where(:active) .leading.icon{color:var(--_pressed-leading-icon-color)}:where(.disabled) .leading.icon{color:var(--_disabled-leading-icon-color);opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){:where(.disabled) :is(.label,.outline,.leading.icon){color:GrayText;opacity:1}}a,button{text-transform:inherit}a,button:not(:disabled){cursor:inherit}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Y4=fe`.trailing.action{align-items:center;justify-content:center;padding-inline-start:var(--_icon-label-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.trailing.action :is(md-ripple,md-focus-ring){border-radius:50%;height:calc(1.3333333333*var(--_icon-size));width:calc(1.3333333333*var(--_icon-size))}.trailing.action md-focus-ring{inset:unset}.has-trailing .primary.action{padding-inline-end:0}.trailing.icon{color:var(--_trailing-icon-color);height:var(--_icon-size);width:var(--_icon-size)}:where(:hover) .trailing.icon{color:var(--_hover-trailing-icon-color)}:where(:focus) .trailing.icon{color:var(--_focus-trailing-icon-color)}:where(:active) .trailing.icon{color:var(--_pressed-trailing-icon-color)}:where(.disabled) .trailing.icon{color:var(--_disabled-trailing-icon-color);opacity:var(--_disabled-trailing-icon-opacity)}:where(.selected) .trailing.icon{color:var(--_selected-trailing-icon-color)}:where(.selected:hover) .trailing.icon{color:var(--_selected-hover-trailing-icon-color)}:where(.selected:focus) .trailing.icon{color:var(--_selected-focus-trailing-icon-color)}:where(.selected:active) .trailing.icon{color:var(--_selected-pressed-trailing-icon-color)}@media(forced-colors: active){.trailing.icon{color:ButtonText}:where(.disabled) .trailing.icon{color:GrayText;opacity:1}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let sp=class extends zi{};sp.styles=[Q4,B4,Y4,G4,K4];sp=R([Fe("md-filter-chip")],sp);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Hl=Symbol("isFocusable"),wh=Symbol("privateIsFocusable"),Wl=Symbol("externalTabIndex"),Kl=Symbol("isUpdatingTabIndex"),Gl=Symbol("updateTabIndex");function X4(t){var e,r,n;class i extends t{constructor(){super(...arguments),this[e]=!0,this[r]=null,this[n]=!1}get[Hl](){return this[wh]}set[Hl](s){this[Hl]!==s&&(this[wh]=s,this[Gl]())}connectedCallback(){super.connectedCallback(),this[Gl]()}attributeChangedCallback(s,l,c){if(s!=="tabindex"){super.attributeChangedCallback(s,l,c);return}if(this.requestUpdate("tabIndex",Number(l??-1)),!this[Kl]){if(!this.hasAttribute("tabindex")){this[Wl]=null,this[Gl]();return}this[Wl]=this.tabIndex}}[(e=wh,r=Wl,n=Kl,Gl)](){const s=this[Hl]?0:-1,l=this[Wl]??s;this[Kl]=!0,this.tabIndex=l,this[Kl]=!1}}return R([$({noAccessor:!0})],i.prototype,"tabIndex",void 0),i}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class J4 extends Ig{computeValidity(e){this.radioElement||(this.radioElement=document.createElement("input"),this.radioElement.type="radio",this.radioElement.name="group");let r=!1,n=!1;for(const{checked:i,required:o}of e)o&&(r=!0),i&&(n=!0);return this.radioElement.checked=n,this.radioElement.required=r,{validity:{valueMissing:r&&!n},validationMessage:this.radioElement.validationMessage}}equals(e,r){if(e.length!==r.length)return!1;for(let n=0;n<e.length;n++){const i=e[n],o=r[n];if(i.checked!==o.checked||i.required!==o.required)return!1}return!0}copy(e){return e.map(({checked:r,required:n})=>({checked:r,required:n}))}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Z4{get controls(){const e=this.host.getAttribute("name");return!e||!this.root||!this.host.isConnected?[this.host]:Array.from(this.root.querySelectorAll(`[name="${e}"]`))}constructor(e){this.host=e,this.focused=!1,this.root=null,this.handleFocusIn=()=>{this.focused=!0,this.updateTabIndices()},this.handleFocusOut=()=>{this.focused=!1,this.updateTabIndices()},this.handleKeyDown=r=>{const n=r.key==="ArrowDown",i=r.key==="ArrowUp",o=r.key==="ArrowLeft",s=r.key==="ArrowRight";if(!o&&!s&&!n&&!i)return;const l=this.controls;if(!l.length)return;r.preventDefault();const u=getComputedStyle(this.host).direction==="rtl"?o||n:s||n,h=l.indexOf(this.host);let p=u?h+1:h-1;for(;p!==h;){p>=l.length?p=0:p<0&&(p=l.length-1);const m=l[p];if(m.hasAttribute("disabled")){u?p++:p--;continue}for(const b of l)b!==m&&(b.checked=!1,b.tabIndex=-1,b.blur());m.checked=!0,m.tabIndex=0,m.focus(),m.dispatchEvent(new Event("change",{bubbles:!0}));break}}}hostConnected(){this.root=this.host.getRootNode(),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("focusin",this.handleFocusIn),this.host.addEventListener("focusout",this.handleFocusOut),this.host.checked&&this.uncheckSiblings(),this.updateTabIndices()}hostDisconnected(){this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("focusin",this.handleFocusIn),this.host.removeEventListener("focusout",this.handleFocusOut),this.updateTabIndices(),this.root=null}handleCheckedChange(){this.host.checked&&(this.uncheckSiblings(),this.updateTabIndices())}uncheckSiblings(){for(const e of this.controls)e!==this.host&&(e.checked=!1)}updateTabIndices(){const e=this.controls,r=e.find(n=>n.checked);if(r||this.focused){const n=r||this.host;n.tabIndex=0;for(const i of e)i!==n&&(i.tabIndex=-1);return}for(const n of e)n.tabIndex=0}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Pw;const bh=Symbol("checked");let eV=0;const tV=Eg(xg(Za(X4(Ie))));class el extends tV{get checked(){return this[bh]}set checked(e){const r=this.checked;r!==e&&(this[bh]=e,this.requestUpdate("checked",r),this.selectionController.handleCheckedChange())}constructor(){super(),this.maskId=`cutout${++eV}`,this[Pw]=!1,this.required=!1,this.value="on",this.selectionController=new Z4(this),this.addController(this.selectionController),this[Ze].role="radio",this.addEventListener("click",this.handleClick.bind(this)),this.addEventListener("keydown",this.handleKeydown.bind(this))}render(){const e={checked:this.checked};return Q`
      <div class="container ${zt(e)}" aria-hidden="true">
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
    `}updated(){this[Ze].ariaChecked=String(this.checked)}async handleClick(e){this.disabled||(await 0,!e.defaultPrevented&&(wg(e)&&this.focus(),this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))))}async handleKeydown(e){await 0,!(e.key!==" "||e.defaultPrevented)&&this.click()}[(Pw=bh,Eo)](){return this.checked?this.value:null}[au](){return String(this.checked)}formResetCallback(){this.checked=this.hasAttribute("checked")}formStateRestoreCallback(e){this.checked=e==="true"}[Na](){return new J4(()=>this.selectionController?this.selectionController.controls:[this])}[Oa](){return this.container}}R([$({type:Boolean})],el.prototype,"checked",null);R([$({type:Boolean})],el.prototype,"required",void 0);R([$()],el.prototype,"value",void 0);R([De(".container")],el.prototype,"container",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const rV=fe`@layer{:host{display:inline-flex;height:var(--md-radio-icon-size, 20px);outline:none;position:relative;vertical-align:top;width:var(--md-radio-icon-size, 20px);-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;--md-ripple-hover-color: var(--md-radio-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-radio-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-radio-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-opacity: var(--md-radio-pressed-state-layer-opacity, 0.12)}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-radio-icon-size, 20px))/2)}.container{display:flex;height:100%;place-content:center;place-items:center;width:100%}md-focus-ring{height:44px;inset:unset;width:44px}.checked{--md-ripple-hover-color: var(--md-radio-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-radio-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-radio-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-radio-selected-pressed-state-layer-opacity, 0.12)}input{appearance:none;height:48px;margin:0;position:absolute;width:48px;cursor:inherit}:host([touch-target=none]) input{width:100%;height:100%}md-ripple{border-radius:50%;height:var(--md-radio-state-layer-size, 40px);inset:unset;width:var(--md-radio-state-layer-size, 40px)}.icon{fill:var(--md-radio-icon-color, var(--md-sys-color-on-surface-variant, #49454f));inset:0;position:absolute}.outer.circle{transition:fill 50ms linear}.inner.circle{opacity:0;transform-origin:center;transition:opacity 50ms linear}.checked .icon{fill:var(--md-radio-selected-icon-color, var(--md-sys-color-primary, #6750a4))}.checked .inner.circle{animation:inner-circle-grow 300ms cubic-bezier(0.05, 0.7, 0.1, 1);opacity:1}@keyframes inner-circle-grow{from{transform:scale(0)}to{transform:scale(1)}}:host([disabled]) .circle{animation-duration:0s;transition-duration:0s}:host(:hover) .icon{fill:var(--md-radio-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host(:focus-within) .icon{fill:var(--md-radio-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host(:active) .icon{fill:var(--md-radio-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host([disabled]) .icon{fill:var(--md-radio-disabled-unselected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-radio-disabled-unselected-icon-opacity, 0.38)}:host(:hover) .checked .icon{fill:var(--md-radio-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4))}:host(:focus-within) .checked .icon{fill:var(--md-radio-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4))}:host(:active) .checked .icon{fill:var(--md-radio-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4))}:host([disabled]) .checked .icon{fill:var(--md-radio-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-radio-disabled-selected-icon-opacity, 0.38)}}@layer hcm{@media(forced-colors: active){.icon{fill:CanvasText}:host([disabled]) .icon{fill:GrayText;opacity:1}}}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ap=class extends el{};ap.styles=[rV];ap=R([Fe("md-radio")],ap);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ju extends Ie{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}R([$({type:Boolean,reflect:!0})],Ju.prototype,"inset",void 0);R([$({type:Boolean,reflect:!0,attribute:"inset-start"})],Ju.prototype,"insetStart",void 0);R([$({type:Boolean,reflect:!0,attribute:"inset-end"})],Ju.prototype,"insetEnd",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const nV=fe`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let lp=class extends Ju{};lp.styles=[nV];lp=R([Fe("md-divider")],lp);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const iV={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:$o.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:$o.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},oV={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:$o.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:$o.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ve extends Ie{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.quick=!1,this.returnValue="",this.noFocusTrap=!1,this.getOpenAnimation=()=>iV,this.getCloseAnimation=()=>oV,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.escapePressedWithoutCancel=!1,this.treewalker=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT),this.addEventListener("submit",this.handleSubmit)}async show(){var n;this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;const e=this.dialog;if(e.open||!this.isOpening){this.isOpening=!1;return}if(!this.dispatchEvent(new Event("open",{cancelable:!0}))){this.open=!1,this.isOpening=!1;return}e.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),(n=this.querySelector("[autofocus]"))==null||n.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1}async close(e=this.returnValue){if(this.isOpening=!1,!this.isConnected){this.open=!1;return}await this.updateComplete;const r=this.dialog;if(!r.open||this.isOpening){this.open=!1;return}const n=this.returnValue;if(this.returnValue=e,!this.dispatchEvent(new Event("close",{cancelable:!0}))){this.returnValue=n;return}await this.animateDialog(this.getCloseAnimation()),r.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){const e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),r={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},n=this.open&&!this.noFocusTrap,i=Q`
      <div
        class="focus-trap"
        tabindex="0"
        aria-hidden="true"
        @focus=${this.handleFocusTrapFocus}></div>
    `,{ariaLabel:o}=this;return Q`
      <div class="scrim"></div>
      <dialog
        class=${zt(r)}
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
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(e=>{for(const r of e)this.handleAnchorIntersection(r)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent){this.nextClickIsFromContent=!1;return}this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){const r=e.target,{submitter:n}=e;r.method!=="dialog"||!n||this.close(n.getAttribute("value")??this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;this.escapePressedWithoutCancel=!1;const r=!Xu(this,e);e.preventDefault(),!r&&this.close()}handleClose(){var e;this.escapePressedWithoutCancel&&(this.escapePressedWithoutCancel=!1,(e=this.dialog)==null||e.dispatchEvent(new Event("cancel",{cancelable:!0})))}handleKeydown(e){e.key==="Escape"&&(this.escapePressedWithoutCancel=!0,setTimeout(()=>{this.escapePressedWithoutCancel=!1}))}async animateDialog(e){var N;if((N=this.cancelAnimations)==null||N.abort(),this.cancelAnimations=new AbortController,this.quick)return;const{dialog:r,scrim:n,container:i,headline:o,content:s,actions:l}=this;if(!r||!n||!i||!o||!s||!l)return;const{container:c,dialog:u,scrim:h,headline:p,content:m,actions:b}=e,S=[[r,u??[]],[n,h??[]],[i,c??[]],[o,p??[]],[s,m??[]],[l,b??[]]],P=[];for(const[E,y]of S)for(const T of y){const D=E.animate(...T);this.cancelAnimations.signal.addEventListener("abort",()=>{D.cancel()}),P.push(D)}await Promise.all(P.map(E=>E.finished.catch(()=>{})))}handleHeadlineChange(e){const r=e.target;this.hasHeadline=r.assignedElements().length>0}handleActionsChange(e){const r=e.target;this.hasActions=r.assignedElements().length>0}handleIconChange(e){const r=e.target;this.hasIcon=r.assignedElements().length>0}handleAnchorIntersection(e){const{target:r,isIntersecting:n}=e;r===this.topAnchor&&(this.isAtScrollTop=n),r===this.bottomAnchor&&(this.isAtScrollBottom=n)}getIsConnectedPromise(){return new Promise(e=>{this.isConnectedPromiseResolve=e})}handleFocusTrapFocus(e){var p;const[r,n]=this.getFirstAndLastFocusableChildren();if(!r||!n){(p=this.dialog)==null||p.focus();return}const i=e.target===this.firstFocusTrap,o=!i,s=e.relatedTarget===r,l=e.relatedTarget===n,c=!s&&!l;if(o&&l||i&&c){r.focus();return}if(i&&s||o&&c){n.focus();return}}getFirstAndLastFocusableChildren(){let e=null,r=null;for(this.treewalker.currentNode=this.treewalker.root;this.treewalker.nextNode();){const n=this.treewalker.currentNode;sV(n)&&(e||(e=n),r=n)}return[e,r]}}Yn(Ve);R([$({type:Boolean})],Ve.prototype,"open",null);R([$({type:Boolean})],Ve.prototype,"quick",void 0);R([$({attribute:!1})],Ve.prototype,"returnValue",void 0);R([$()],Ve.prototype,"type",void 0);R([$({type:Boolean,attribute:"no-focus-trap"})],Ve.prototype,"noFocusTrap",void 0);R([De("dialog")],Ve.prototype,"dialog",void 0);R([De(".scrim")],Ve.prototype,"scrim",void 0);R([De(".container")],Ve.prototype,"container",void 0);R([De(".headline")],Ve.prototype,"headline",void 0);R([De(".content")],Ve.prototype,"content",void 0);R([De(".actions")],Ve.prototype,"actions",void 0);R([St()],Ve.prototype,"isAtScrollTop",void 0);R([St()],Ve.prototype,"isAtScrollBottom",void 0);R([De(".scroller")],Ve.prototype,"scroller",void 0);R([De(".top.anchor")],Ve.prototype,"topAnchor",void 0);R([De(".bottom.anchor")],Ve.prototype,"bottomAnchor",void 0);R([De(".focus-trap")],Ve.prototype,"firstFocusTrap",void 0);R([St()],Ve.prototype,"hasHeadline",void 0);R([St()],Ve.prototype,"hasActions",void 0);R([St()],Ve.prototype,"hasIcon",void 0);function sV(t){var o;const e=":is(button,input,select,textarea,object,:is(a,area)[href],[tabindex],[contenteditable=true])",r=":not(:disabled,[disabled])";return t.matches(e+r+':not([tabindex^="-"])')?!0:!t.localName.includes("-")||!t.matches(r)?!1:((o=t.shadowRoot)==null?void 0:o.delegatesFocus)??!1}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const aV=fe`:host{border-start-start-radius:var(--md-dialog-container-shape-start-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-start-end-radius:var(--md-dialog-container-shape-start-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-end-radius:var(--md-dialog-container-shape-end-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-start-radius:var(--md-dialog-container-shape-end-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size, 24px);width:var(--md-dialog-icon-size, 24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));flex:1;font-weight:var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let cp=class extends Ve{};cp.styles=[aV];cp=R([Fe("md-dialog")],cp);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Nw(t,e=!0){return e&&getComputedStyle(t).getPropertyValue("direction").trim()==="rtl"}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const lV=Za(Ie);class It extends lV{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=Nw(this,this.flipIconInRtl)}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Ze].form}get labels(){return this[Ze].labels}willUpdate(){this.href&&(this.disabled=!1)}render(){const e=this.href?bi`div`:bi`button`,{ariaLabel:r,ariaHasPopup:n,ariaExpanded:i}=this,o=r&&this.ariaLabelSelected,s=this.toggle?this.selected:B;let l=B;return this.href||(l=o&&this.selected?this.ariaLabelSelected:r),bg`<${e}
        class="icon-button ${zt(this.getRenderClasses())}"
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
  </${e}>`}renderLink(){const{ariaLabel:e}=this;return Q`
      <a
        class="link"
        id="link"
        href="${this.href}"
        target="${this.target||B}"
        aria-label="${e||B}"></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return Q`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return Q`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`}renderTouchTarget(){return Q`<span class="touch"></span>`}renderFocusRing(){return Q`<md-focus-ring
      part="focus-ring"
      for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){return Q`<md-ripple
      for=${this.href?"link":B}
      ?disabled="${!this.href&&this.disabled}"></md-ripple>`}connectedCallback(){this.flipIcon=Nw(this,this.flipIconInRtl),super.connectedCallback()}async handleClick(e){await 0,!(!this.toggle||this.disabled||e.defaultPrevented)&&(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}Yn(It),YI(It);It.formAssociated=!0;It.shadowRootOptions={mode:"open",delegatesFocus:!0};R([$({type:Boolean,reflect:!0})],It.prototype,"disabled",void 0);R([$({type:Boolean,attribute:"flip-icon-in-rtl"})],It.prototype,"flipIconInRtl",void 0);R([$()],It.prototype,"href",void 0);R([$()],It.prototype,"target",void 0);R([$({attribute:"aria-label-selected"})],It.prototype,"ariaLabelSelected",void 0);R([$({type:Boolean})],It.prototype,"toggle",void 0);R([$({type:Boolean,reflect:!0})],It.prototype,"selected",void 0);R([$()],It.prototype,"type",void 0);R([$({reflect:!0})],It.prototype,"value",void 0);R([St()],It.prototype,"flipIcon",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const cV=fe`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host([disabled]){--_disabled-icon-opacity: 1}}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const uV=fe`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let up=class extends It{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};up.styles=[cV,uV];up=R([Fe("md-icon-button")],up);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hV=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),fV=(t,e)=>{const r=W.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:l="",children:c,...u},h)=>W.createElement("svg",{ref:h,...dV,width:i,height:i,stroke:n,strokeWidth:s?Number(o)*24/Number(i):o,className:["lucide",`lucide-${hV(t)}`,l].join(" "),...u},[...e.map(([p,m])=>W.createElement(p,m)),...Array.isArray(c)?c:[c]]));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pV=fV("PowerOff",[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15",key:"dxknvb"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68",key:"1x7qb5"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]),mV=["Owner","Bartender","Barback","Server","Manager","Security","Runner"],Ow=[{id:"ice",label:"ICE",icon:"ac_unit"},{id:"glass",label:"GLASSWARE",icon:"wine_bar",children:[{id:"rocks",label:"ROCKS"},{id:"collins",label:"COLLINS"},{id:"pint",label:"PINT"},{id:"coupe",label:"COUPE"},{id:"shot",label:"SHOT GLASS"},{id:"wine",label:"WINE GLASS"}]},{id:"fruit",label:"FRUIT / GARNISH",icon:"restaurant",children:[{id:"lime",label:"LIMES"},{id:"lemon",label:"LEMONS"},{id:"orange",label:"ORANGES"},{id:"cherry",label:"CHERRIES"},{id:"olive",label:"OLIVES"},{id:"mint",label:"MINT"}]},{id:"restock",label:"RESTOCK WELL",icon:"liquor",children:[{id:"vodka",label:"VODKA"},{id:"gin",label:"GIN"},{id:"tequila",label:"TEQUILA"},{id:"rum",label:"RUM"},{id:"whiskey",label:"WHISKEY"},{id:"cordial",label:"MIXERS"},{id:"beer",label:"BEER"}]},{id:"keg",label:"KEG KICKED",icon:"keg"},{id:"trash",label:"TRASH / SPILL",icon:"delete"},{id:"security",label:"SECURITY",icon:"security"},{id:"manager",label:"MANAGER",icon:"manage_accounts"}],dp={Owner:["manager","security","keg","trash","ice","glass","fruit","restock"],Manager:["manager","security","keg","trash","restock"],Bartender:["ice","glass","fruit","restock","keg","trash"],Barback:["ice","glass","fruit","restock","keg","trash"],Server:[],Runner:["ice","glass","restock"],Security:["security","fight","manager"]},gV=[{id:"search",label:"Search"},{id:"create",label:"Create Temp"}],vV=({onJoin:t})=>{const[e,r]=W.useState("search"),[n,i]=W.useState(""),[o,s]=W.useState("bar"),[l,c]=W.useState([]),[u,h]=W.useState(!1);W.useEffect(()=>{if(e==="search"&&n.length>2){const m=setTimeout(async()=>{h(!0);try{const S=await(await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(n+" bar")}`)).json();c(S)}catch(b){console.error(b)}finally{h(!1)}},500);return()=>clearTimeout(m)}else c([])},[n,e]);const p=m=>{m.preventDefault(),t({name:n,status:"temporary",type:o})};return L.jsxs("div",{className:"space-y-4",children:[e==="search"?L.jsxs("div",{className:"space-y-2",children:[L.jsx("div",{className:"relative",children:L.jsx("md-filled-text-field",{label:"Search OpenStreetMap",value:n,onInput:m=>i(m.target.value),type:"search",className:"w-full",children:u&&L.jsx("md-circular-progress",{slot:"trailing-icon",indeterminate:!0,style:{width:"24px",height:"24px"}})})}),u&&L.jsx("div",{className:"flex justify-center p-4",children:L.jsx("md-circular-progress",{indeterminate:!0})}),u&&L.jsx("div",{className:"flex justify-center p-4",children:L.jsx("md-circular-progress",{indeterminate:!0})}),u&&L.jsx("div",{className:"flex justify-center p-4",children:L.jsx("md-circular-progress",{indeterminate:!0})}),l.length>0&&L.jsx("md-list",{className:"bg-[#1E1E1E] rounded-xl overflow-hidden border border-gray-800 max-h-60 overflow-y-auto",children:l.map(m=>L.jsxs("md-list-item",{type:"button",onClick:()=>t({id:String(m.osm_id),name:m.name||m.display_name.split(",")[0],address:m.display_name,status:"verified",osmId:String(m.osm_id)}),children:[L.jsx("div",{slot:"headline",className:"text-white",children:m.name||m.display_name.split(",")[0]}),L.jsx("div",{slot:"supporting-text",className:"text-gray-400 text-xs truncate",children:m.display_name}),L.jsx("md-icon",{slot:"start",children:"location_on"})]},m.place_id))})]}):L.jsxs("form",{onSubmit:p,className:"space-y-4",children:[L.jsx("md-filled-text-field",{label:"Bar Name",value:n,onInput:m=>i(m.target.value)}),L.jsxs("div",{className:"flex gap-6 justify-center",children:[L.jsxs("div",{className:"flex items-center gap-2 cursor-pointer",onClick:()=>s("bar"),children:[L.jsx("md-radio",{name:"barType",value:"bar",checked:o==="bar","touch-target":"wrapper"}),L.jsx("span",{className:"text-white",children:"Bar"})]}),L.jsxs("div",{className:"flex items-center gap-2 cursor-pointer",onClick:()=>s("restaurant"),children:[L.jsx("md-radio",{name:"barType",value:"restaurant",checked:o==="restaurant","touch-target":"wrapper"}),L.jsx("span",{className:"text-white",children:"Restaurant"})]})]}),L.jsx("div",{className:"flex justify-center",children:L.jsx("md-filled-button",{type:"submit",children:"Create Bar"})})]}),L.jsx("div",{className:"flex justify-center gap-4 pt-2",children:gV.map(m=>{const b=e===m.id,S=b?"md-filled-button":"md-outlined-button";return L.jsx(S,{onClick:()=>!b&&r(m.id),children:m.label},m.id)})})]})},yV=({onSelect:t})=>{const[e,r]=W.useState(""),[n,i]=W.useState("");return L.jsxs("div",{className:"w-full max-w-sm space-y-6 animate-in fade-in slide-in-from-bottom-4",children:[L.jsxs("div",{className:"text-center space-y-2",children:[L.jsx("h2",{className:"text-2xl font-bold text-white",children:"Identification"}),L.jsx("p",{className:"text-gray-500",children:"Name and Rank, soldier."})]}),L.jsx("md-filled-text-field",{label:"Display Name (e.g. 'Angry Steve')",value:n,onInput:o=>i(o.target.value),required:!0}),L.jsx("div",{className:"bg-[#1E1E1E] rounded-xl overflow-hidden border border-gray-800 max-h-60 overflow-y-auto",children:mV.map(o=>L.jsxs("div",{onClick:()=>r(o),className:`p-4 flex items-center justify-between cursor-pointer border-b border-gray-800 last:border-0 hover:bg-white/5 ${e===o?"bg-white/10":""}`,children:[L.jsxs("div",{className:"flex items-center gap-3",children:[L.jsx("md-icon",{children:o==="Bartender"?"local_bar":"person"}),L.jsx("span",{className:"font-medium text-lg",children:o})]}),L.jsx("md-radio",{checked:e===o,"touch-target":"wrapper"})]},o))}),L.jsx("md-filled-button",{disabled:!e||!n||void 0,onClick:()=>t(e,n),children:"Clock In"})]})};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const sT=Symbol("dispatchHooks");function _V(t,e){const r=t[sT];if(!r)throw new Error(`'${t.type}' event needs setupDispatchHooks().`);r.addEventListener("after",e)}const Dw=new WeakMap;function wV(t,...e){let r=Dw.get(t);r||(r=new Set,Dw.set(t,r));for(const n of e){if(r.has(n))continue;let i=!1;t.addEventListener(n,o=>{if(i)return;o.stopImmediatePropagation();const s=Reflect.construct(o.constructor,[o.type,o]),l=new EventTarget;s[sT]=l,i=!0;const c=t.dispatchEvent(s);i=!1,c||o.preventDefault(),l.dispatchEvent(new Event("after"))},{capture:!0}),r.add(n)}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class bV extends Ig{computeValidity(e){return this.checkboxControl||(this.checkboxControl=document.createElement("input"),this.checkboxControl.type="checkbox"),this.checkboxControl.checked=e.checked,this.checkboxControl.required=e.required,{validity:this.checkboxControl.validity,validationMessage:this.checkboxControl.validationMessage}}equals(e,r){return e.checked===r.checked&&e.required===r.required}copy({checked:e,required:r}){return{checked:e,required:r}}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const EV=Eg(xg(Za(Ie)));class cn extends EV{constructor(){super(),this.selected=!1,this.icons=!1,this.showOnlySelectedIcon=!1,this.required=!1,this.value="on",this.addEventListener("click",e=>{!wg(e)||!this.input||(this.focus(),XI(this.input))}),wV(this,"keydown"),this.addEventListener("keydown",e=>{_V(e,()=>{e.defaultPrevented||e.key!=="Enter"||this.disabled||!this.input||this.input.click()})})}render(){return Q`
      <div class="switch ${zt(this.getRenderClasses())}">
        <input
          id="switch"
          class="touch"
          type="checkbox"
          role="switch"
          aria-label=${this.ariaLabel||B}
          ?checked=${this.selected}
          ?disabled=${this.disabled}
          ?required=${this.required}
          @input=${this.handleInput}
          @change=${this.handleChange} />

        <md-focus-ring part="focus-ring" for="switch"></md-focus-ring>
        <span class="track"> ${this.renderHandle()} </span>
      </div>
    `}getRenderClasses(){return{selected:this.selected,unselected:!this.selected,disabled:this.disabled}}renderHandle(){const e={"with-icon":this.showOnlySelectedIcon?this.selected:this.icons};return Q`
      ${this.renderTouchTarget()}
      <span class="handle-container">
        <md-ripple for="switch" ?disabled="${this.disabled}"></md-ripple>
        <span class="handle ${zt(e)}">
          ${this.shouldShowIcons()?this.renderIcons():Q``}
        </span>
      </span>
    `}renderIcons(){return Q`
      <div class="icons">
        ${this.renderOnIcon()}
        ${this.showOnlySelectedIcon?Q``:this.renderOffIcon()}
      </div>
    `}renderOnIcon(){return Q`
      <slot class="icon icon--on" name="on-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z" />
        </svg>
      </slot>
    `}renderOffIcon(){return Q`
      <slot class="icon icon--off" name="off-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z" />
        </svg>
      </slot>
    `}renderTouchTarget(){return Q`<span class="touch"></span>`}shouldShowIcons(){return this.icons||this.showOnlySelectedIcon}handleInput(e){const r=e.target;this.selected=r.checked}handleChange(e){Xu(this,e)}[Eo](){return this.selected?this.value:null}[au](){return String(this.selected)}formResetCallback(){this.selected=this.hasAttribute("selected")}formStateRestoreCallback(e){this.selected=e==="true"}[Na](){return new bV(()=>({checked:this.selected,required:this.required}))}[Oa](){return this.input}}Yn(cn);cn.shadowRootOptions={mode:"open",delegatesFocus:!0};R([$({type:Boolean})],cn.prototype,"selected",void 0);R([$({type:Boolean})],cn.prototype,"icons",void 0);R([$({type:Boolean,attribute:"show-only-selected-icon"})],cn.prototype,"showOnlySelectedIcon",void 0);R([$({type:Boolean})],cn.prototype,"required",void 0);R([$()],cn.prototype,"value",void 0);R([De("input")],cn.prototype,"input",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const xV=fe`@layer styles, hcm;@layer styles{:host{display:inline-flex;outline:none;vertical-align:top;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-switch-track-height, 32px))/2) 0px}md-focus-ring{--md-focus-ring-shape-start-start: var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-start-end: var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-end: var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-start: var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}.switch{align-items:center;display:inline-flex;flex-shrink:0;position:relative;width:var(--md-switch-track-width, 52px);height:var(--md-switch-track-height, 32px);border-start-start-radius:var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}input{appearance:none;height:48px;outline:none;margin:0;position:absolute;width:100%;z-index:1;cursor:inherit}:host([touch-target=none]) input{display:none}}@layer styles{.track{position:absolute;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;display:flex;justify-content:center;align-items:center}.track::before{content:"";display:flex;position:absolute;height:100%;width:100%;border-radius:inherit;box-sizing:border-box;transition-property:opacity,background-color;transition-timing-function:linear;transition-duration:67ms}.disabled .track{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.disabled .track::before,.disabled .track::after{transition:none;opacity:var(--md-switch-disabled-track-opacity, 0.12)}.disabled .track::before{background-clip:content-box}.selected .track::before{background-color:var(--md-switch-selected-track-color, var(--md-sys-color-primary, #6750a4))}.selected:hover .track::before{background-color:var(--md-switch-selected-hover-track-color, var(--md-sys-color-primary, #6750a4))}.selected:focus-within .track::before{background-color:var(--md-switch-selected-focus-track-color, var(--md-sys-color-primary, #6750a4))}.selected:active .track::before{background-color:var(--md-switch-selected-pressed-track-color, var(--md-sys-color-primary, #6750a4))}.selected.disabled .track{background-clip:border-box}.selected.disabled .track::before{background-color:var(--md-switch-disabled-selected-track-color, var(--md-sys-color-on-surface, #1d1b20))}.unselected .track::before{background-color:var(--md-switch-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-track-outline-color, var(--md-sys-color-outline, #79747e));border-style:solid;border-width:var(--md-switch-track-outline-width, 2px)}.unselected:hover .track::before{background-color:var(--md-switch-hover-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-hover-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:focus-visible .track::before{background-color:var(--md-switch-focus-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-focus-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:active .track::before{background-color:var(--md-switch-pressed-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-pressed-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected.disabled .track::before{background-color:var(--md-switch-disabled-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-disabled-track-outline-color, var(--md-sys-color-on-surface, #1d1b20))}}@layer hcm{@media(forced-colors: active){.selected .track::before{background:ButtonText;border-color:ButtonText}.disabled .track::before{border-color:GrayText;opacity:1}.disabled.selected .track::before{background:GrayText}}}@layer styles{.handle-container{display:flex;place-content:center;place-items:center;position:relative;transition:margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)}.selected .handle-container{margin-inline-start:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.unselected .handle-container{margin-inline-end:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.disabled .handle-container{transition:none}.handle{border-start-start-radius:var(--md-switch-handle-shape-start-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-handle-shape-start-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-handle-shape-end-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-handle-shape-end-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));height:var(--md-switch-handle-height, 16px);width:var(--md-switch-handle-width, 16px);transform-origin:center;transition-property:height,width;transition-duration:250ms,250ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1),cubic-bezier(0.2, 0, 0, 1);z-index:0}.handle::before{content:"";display:flex;inset:0;position:absolute;border-radius:inherit;box-sizing:border-box;transition:background-color 67ms linear}.disabled .handle,.disabled .handle::before{transition:none}.selected .handle{height:var(--md-switch-selected-handle-height, 24px);width:var(--md-switch-selected-handle-width, 24px)}.handle.with-icon{height:var(--md-switch-with-icon-handle-height, 24px);width:var(--md-switch-with-icon-handle-width, 24px)}.selected:not(.disabled):active .handle,.unselected:not(.disabled):active .handle{height:var(--md-switch-pressed-handle-height, 28px);width:var(--md-switch-pressed-handle-width, 28px);transition-timing-function:linear;transition-duration:100ms}.selected .handle::before{background-color:var(--md-switch-selected-handle-color, var(--md-sys-color-on-primary, #fff))}.selected:hover .handle::before{background-color:var(--md-switch-selected-hover-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:focus-within .handle::before{background-color:var(--md-switch-selected-focus-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:active .handle::before{background-color:var(--md-switch-selected-pressed-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected.disabled .handle::before{background-color:var(--md-switch-disabled-selected-handle-color, var(--md-sys-color-surface, #fef7ff));opacity:var(--md-switch-disabled-selected-handle-opacity, 1)}.unselected .handle::before{background-color:var(--md-switch-handle-color, var(--md-sys-color-outline, #79747e))}.unselected:hover .handle::before{background-color:var(--md-switch-hover-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:focus-within .handle::before{background-color:var(--md-switch-focus-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:active .handle::before{background-color:var(--md-switch-pressed-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected.disabled .handle::before{background-color:var(--md-switch-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-handle-opacity, 0.38)}md-ripple{border-radius:var(--md-switch-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));height:var(--md-switch-state-layer-size, 40px);inset:unset;width:var(--md-switch-state-layer-size, 40px)}.selected md-ripple{--md-ripple-hover-color: var(--md-switch-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-color: var(--md-switch-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-switch-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-selected-pressed-state-layer-opacity, 0.12)}.unselected md-ripple{--md-ripple-hover-color: var(--md-switch-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-color: var(--md-switch-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-switch-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-pressed-state-layer-opacity, 0.12)}}@layer hcm{@media(forced-colors: active){.unselected .handle::before{background:ButtonText}.disabled .handle::before{opacity:1}.disabled.unselected .handle::before{background:GrayText}}}@layer styles{.icons{position:relative;height:100%;width:100%}.icon{position:absolute;inset:0;margin:auto;display:flex;align-items:center;justify-content:center;fill:currentColor;transition:fill 67ms linear,opacity 33ms linear,transform 167ms cubic-bezier(0.2, 0, 0, 1);opacity:0}.disabled .icon{transition:none}.selected .icon--on,.unselected .icon--off{opacity:1}.unselected .handle:not(.with-icon) .icon--on{transform:rotate(-45deg)}.icon--off{width:var(--md-switch-icon-size, 16px);height:var(--md-switch-icon-size, 16px);color:var(--md-switch-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:hover .icon--off{color:var(--md-switch-hover-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:focus-within .icon--off{color:var(--md-switch-focus-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:active .icon--off{color:var(--md-switch-pressed-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected.disabled .icon--off{color:var(--md-switch-disabled-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));opacity:var(--md-switch-disabled-icon-opacity, 0.38)}.icon--on{width:var(--md-switch-selected-icon-size, 16px);height:var(--md-switch-selected-icon-size, 16px);color:var(--md-switch-selected-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:hover .icon--on{color:var(--md-switch-selected-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:focus-within .icon--on{color:var(--md-switch-selected-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:active .icon--on{color:var(--md-switch-selected-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected.disabled .icon--on{color:var(--md-switch-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-selected-icon-opacity, 0.38)}}@layer hcm{@media(forced-colors: active){.icon--off{fill:Canvas}.icon--on{fill:ButtonText}.disabled.unselected .icon--off,.disabled.selected .icon--on{opacity:1}.disabled .icon--on{fill:GrayText}}}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let hp=class extends cn{};hp.styles=[xV];hp=R([Fe("md-switch")],hp);const IV=({open:t,onClose:e,onSave:r,userRole:n,currentPreferences:i,allButtons:o})=>{const[s,l]=W.useState([]);W.useEffect(()=>{t&&l(i)},[t,i]);const c=(p,m)=>{l(m?b=>[...b,p]:b=>b.filter(S=>S!==p))},u=()=>{const p=dp[n]||[];l(p)},h=()=>{r(s),e()};return L.jsxs("md-dialog",{open:t?!0:void 0,onClose:e,children:[L.jsx("div",{slot:"headline",children:"Notification Settings"}),L.jsxs("div",{slot:"content",className:"flex flex-col gap-4 min-w-[300px]",children:[L.jsxs("div",{className:"text-sm text-gray-400",children:["Enable or disable notifications for your role (",n,")."]}),L.jsx("md-list",{className:"bg-transparent max-h-[60vh] overflow-y-auto",children:o.map(p=>{const m=s.includes(p.id);return L.jsxs("md-list-item",{children:[L.jsx("div",{slot:"headline",children:p.label}),L.jsx("md-icon",{slot:"start",children:p.icon||"notifications"}),L.jsx("md-switch",{slot:"end",selected:m,onClick:()=>c(p.id,!m)})]},p.id)})})]}),L.jsxs("div",{slot:"actions",children:[L.jsx("md-text-button",{onClick:u,children:"Reset to Default"}),L.jsx("div",{className:"flex-1"}),L.jsx("md-text-button",{onClick:e,children:"Cancel"}),L.jsx("md-filled-button",{onClick:h,children:"Save"})]})]})};function TV(){const[t,e]=W.useState(null),[r,n]=W.useState(null),[i,o]=W.useState(!1),[s,l]=$k(),c=s.get("bar")||localStorage.getItem("barId"),[u,h]=W.useState(c),[p,m]=W.useState(""),[b,S]=W.useState(null),[P,N]=W.useState(""),[E,y]=W.useState([]),[T,D]=W.useState([]),[U,z]=W.useState(Ow),[w,v]=W.useState(null),[_,x]=W.useState([]),A=W.useRef(null),[k,I]=W.useState(!1),[kt,wr]=W.useState(!1);W.useEffect(()=>{const q=gR(Es,he=>{e(he),he&&pL().then(or=>or&&v(or))});return mL().then(()=>{navigator.vibrate&&navigator.vibrate([500,200,500]),new Audio("/alert.mp3").play().catch(()=>{})}),()=>q()},[]),W.useEffect(()=>{if(!t||!u)return;l({bar:u}),localStorage.setItem("barId",u);const q=cr(Ht,`bars/${u}/users`,t.uid),he=cr(Ht,`bars/${u}/tokens`,t.uid);(async()=>{w&&(await bs(he,{token:w,updated:ni()}),await ih(q,{status:"active",lastSeen:ni()}).catch(()=>{}))})();const ji=oh(q,sr=>{if(sr.exists()){const Qe=sr.data();S(Qe.role),N(Qe.displayName||"Unknown"),Qe.notificationPreferences?y(Qe.notificationPreferences):Qe.role&&y(dp[Qe.role]||[])}else S(null)}),Bi=oh(cr(Ht,"bars",u),sr=>{if(sr.exists()){const Qe=sr.data();m(Qe.name),Qe.buttons&&z([...Ow,...Qe.buttons])}}),Jo=oh(kO(ew(Ht,"requests"),CO("barId","==",u),RO("timestamp","desc")),sr=>D(sr.docs.map(Qe=>({id:Qe.id,...Qe.data()}))));return()=>{ji(),Bi(),Jo()}},[t,u,w,l]),W.useEffect(()=>(A.current&&clearTimeout(A.current),_.length>0&&(A.current=setTimeout(()=>{const q=_.map(he=>he.label).join(": ");H(`${q} (Ask Me)`),x([])},6e4)),()=>{A.current&&clearTimeout(A.current)}),[_]);const Jn=async(q,he)=>{!t||!u||(await bs(cr(Ht,`bars/${u}/users`,t.uid),{role:q,displayName:he,email:t.email,status:"active",joinedAt:ni(),lastSeen:ni(),notificationPreferences:dp[q]||[]},{merge:!0}),w&&await bs(cr(Ht,`bars/${u}/tokens`,t.uid),{token:w,updated:ni()}))},rr=async()=>{!t||!u||(await DO(cr(Ht,`bars/${u}/tokens`,t.uid)),await ih(cr(Ht,`bars/${u}/users`,t.uid),{status:"off_clock"}),h(null),localStorage.removeItem("barId"),I(!1))},H=async q=>{!t||!u||(navigator.vibrate&&navigator.vibrate(100),await LO(ew(Ht,"requests"),{barId:u,label:q,requesterId:t.uid,requesterName:P,requesterRole:b,status:"pending",timestamp:ni(),lastNotification:ni()}))},Z=async q=>{await ih(cr(Ht,"requests",q),{status:"claimed",claimedBy:t==null?void 0:t.uid,claimerName:P})},ne=async q=>{!t||!u||(y(q),await bs(cr(Ht,`bars/${u}/users`,t.uid),{notificationPreferences:q},{merge:!0}))},_e=async q=>{q.preventDefault();const he=new FormData(q.target);try{i?await hR(Es,he.get("email"),he.get("password")):await fR(Es,he.get("email"),he.get("password"))}catch(or){n(or.message)}},pe=async()=>{try{await MR(Es,fL)}catch(q){n(q.message)}};if(!t)return L.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center p-6 space-y-8 bg-black",children:[L.jsx("h1",{className:"text-4xl font-bold tracking-widest text-white",children:"BARBACKER"}),r&&L.jsx("div",{className:"text-red-400 p-2 border border-red-800 rounded",children:r}),L.jsxs("form",{onSubmit:_e,className:"w-full max-w-sm space-y-4",children:[L.jsx("md-filled-text-field",{label:"Email",name:"email",type:"email",required:!0}),L.jsx("md-filled-text-field",{label:"Password",name:"password",type:"password",required:!0}),L.jsx("md-filled-button",{type:"submit",children:i?"Create Account":"Clock In"})]}),L.jsxs("div",{className:"flex gap-4 items-center",children:[L.jsx("md-text-button",{onClick:()=>o(!i),children:i?"Login":"Register"}),L.jsxs("md-outlined-button",{onClick:pe,children:[L.jsx("md-icon",{slot:"icon",children:"mail"}),"Google"]})]})]});if(!u)return L.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-black",children:[L.jsxs("div",{className:"text-center",children:[L.jsx("h2",{className:"text-2xl font-bold text-white mb-1",children:"Select Bar"}),L.jsxs("p",{className:"text-gray-500 text-sm",children:["You are ",t.email]})]}),L.jsx("md-text-button",{onClick:()=>vR(Es),children:"Sign Out"}),L.jsx(vV,{onJoin:async q=>{q.id&&(q.status==="temporary"&&await bs(cr(Ht,"bars",q.id),{name:q.name,address:q.address||"",status:"temporary",type:q.type||"bar",buttons:[]},{merge:!0}),h(q.id))}})]});if(!b)return L.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-black",children:[L.jsx("md-icon-button",{onClick:()=>{h(null),localStorage.removeItem("barId")},children:L.jsx("md-icon",{children:"arrow_back"})}),L.jsx(yV,{onSelect:Jn})]});const Ae=q=>{for(const he of U){if(q===he.label||q.startsWith(he.label))return he.id;if(he.children){for(const or of he.children)if(q===or.label)return he.id}}},qt=T.filter(q=>{if(q.status!=="pending")return!1;const he=Ae(q.label);return he?E.includes(he):!0}),nr=T.filter(q=>q.status!=="pending").slice(0,20),ir=_.length>0?_[_.length-1].children||[]:U;return L.jsxs("div",{className:"min-h-screen pb-24 bg-black relative overflow-hidden",children:[L.jsx(IV,{open:kt,onClose:()=>wr(!1),onSave:ne,userRole:b||"",currentPreferences:E,allButtons:U}),L.jsxs("md-dialog",{open:k,onClose:()=>I(!1),children:[L.jsx("div",{slot:"headline",children:"Abandon Ship?"}),L.jsx("div",{slot:"content",children:"Going off clock stops all notifications. The bar will be unprotected. Are you sure?"}),L.jsxs("div",{slot:"actions",children:[L.jsx("md-text-button",{onClick:()=>I(!1),children:"Stay"}),L.jsx("md-filled-button",{onClick:rr,class:"btn-alert",children:"Leave"})]})]}),L.jsxs("div",{className:"flex justify-between items-center p-4 bg-[#121212] sticky top-0 z-10 border-b border-[#333]",children:[L.jsxs("div",{className:"flex flex-col",children:[L.jsx("span",{className:"font-bold text-lg text-white tracking-wide",children:p}),L.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-400",children:[L.jsx("span",{className:"text-white font-bold",children:P}),L.jsx("span",{className:"bg-gray-800 px-1 rounded",children:b})]})]}),L.jsxs("div",{className:"flex gap-2",children:[L.jsx("md-icon-button",{onClick:()=>wr(!0),title:"Notification Settings",children:L.jsx("md-icon",{className:"text-gray-400",children:"settings"})}),L.jsx("md-icon-button",{onClick:()=>I(!0),title:"Go Off Clock",children:L.jsx(pV,{className:"text-gray-500 hover:text-red-500"})})]})]}),_.length>0&&L.jsxs("div",{className:"fixed inset-0 bg-black/95 z-50 flex flex-col p-6 animate-in fade-in duration-300",children:[L.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[L.jsx("md-icon-button",{onClick:()=>x([]),children:L.jsx("md-icon",{children:"close"})}),L.jsx("span",{className:"text-xl font-medium text-gray-200",children:_.map(q=>q.label).join(" > ")})]}),L.jsx("div",{className:"grid grid-cols-2 gap-4",children:ir.map(q=>L.jsx("md-filled-tonal-button",{onClick:()=>{q.children?x([..._,q]):(H([..._,q].map(he=>he.label).join(": ")),x([]))},style:{height:"100px",fontSize:"18px"},children:q.label},q.id))})]}),L.jsx("div",{className:"grid grid-cols-2 gap-3 p-4",children:U.map(q=>{const he=qt.some(or=>or.label.startsWith(q.label));return L.jsx("md-filled-tonal-button",{onClick:()=>{q.children?x([..._,q]):H(q.label)},class:he?"btn-alert":"",style:{height:"120px"},children:L.jsxs("div",{className:"flex flex-col items-center gap-2",children:[L.jsx("md-icon",{style:{fontSize:32},children:q.icon||"circle"}),L.jsx("span",{className:"text-lg font-bold leading-none",children:q.label}),he&&L.jsx("span",{className:"text-xs opacity-80",children:"PENDING"})]})},q.id)})}),L.jsx("div",{className:"px-4 mt-4",children:qt.map(q=>L.jsxs("div",{onClick:()=>Z(q.id),className:"mb-2 p-4 bg-[#2C1A1A] border-l-4 border-red-500 rounded-r-lg flex justify-between items-center cursor-pointer active:bg-red-900/40 transition-colors",children:[L.jsxs("div",{className:"flex flex-col",children:[L.jsx("span",{className:"font-medium text-red-100",children:q.label}),L.jsxs("span",{className:"text-xs text-red-400",children:[q.requesterName," (",q.requesterRole,")"]})]}),L.jsx("md-filled-button",{class:"btn-alert",style:{height:"32px"},children:"CLAIM"})]},q.id))}),L.jsxs("div",{className:"px-4 mt-8 pb-10",children:[L.jsx("div",{className:"text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest",children:"Shift Log"}),L.jsx("md-list",{className:"bg-transparent",children:nr.map(q=>L.jsxs("md-list-item",{children:[L.jsx("div",{slot:"headline",className:"text-gray-400",children:q.label}),L.jsxs("div",{slot:"supporting-text",className:"text-xs text-gray-600",children:["Asked by ",q.requesterName," • Claimed by ",q.claimerName||"Someone"]}),L.jsx("md-icon",{slot:"start",className:"text-green-800",children:"check_circle"})]},q.id))})]})]})}Gb(document.getElementById("root")).render(L.jsx(W.StrictMode,{children:L.jsx(Mk,{children:L.jsx(TV,{})})}));
