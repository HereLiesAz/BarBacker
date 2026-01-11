function Px(t,e){for(var r=0;r<e.length;r++){const n=e[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(n,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function Nx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var kw={exports:{}},tu={},Rw={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xa=Symbol.for("react.element"),Ox=Symbol.for("react.portal"),Dx=Symbol.for("react.fragment"),Lx=Symbol.for("react.strict_mode"),Vx=Symbol.for("react.profiler"),Mx=Symbol.for("react.provider"),$x=Symbol.for("react.context"),Fx=Symbol.for("react.forward_ref"),Ux=Symbol.for("react.suspense"),zx=Symbol.for("react.memo"),jx=Symbol.for("react.lazy"),yv=Symbol.iterator;function Bx(t){return t===null||typeof t!="object"?null:(t=yv&&t[yv]||t["@@iterator"],typeof t=="function"?t:null)}var Pw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nw=Object.assign,Ow={};function Oo(t,e,r){this.props=t,this.context=e,this.refs=Ow,this.updater=r||Pw}Oo.prototype.isReactComponent={};Oo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Oo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dw(){}Dw.prototype=Oo.prototype;function cp(t,e,r){this.props=t,this.context=e,this.refs=Ow,this.updater=r||Pw}var up=cp.prototype=new Dw;up.constructor=cp;Nw(up,Oo.prototype);up.isPureReactComponent=!0;var _v=Array.isArray,Lw=Object.prototype.hasOwnProperty,dp={current:null},Vw={key:!0,ref:!0,__self:!0,__source:!0};function Mw(t,e,r){var n,i={},o=null,s=null;if(e!=null)for(n in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Lw.call(e,n)&&!Vw.hasOwnProperty(n)&&(i[n]=e[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(n in l=t.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:xa,type:t,key:o,ref:s,props:i,_owner:dp.current}}function qx(t,e){return{$$typeof:xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hp(t){return typeof t=="object"&&t!==null&&t.$$typeof===xa}function Hx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var wv=/\/+/g;function gd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Hx(""+t.key):e.toString(36)}function zl(t,e,r,n,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case xa:case Ox:s=!0}}if(s)return s=t,i=i(s),t=n===""?"."+gd(s,0):n,_v(i)?(r="",t!=null&&(r=t.replace(wv,"$&/")+"/"),zl(i,e,r,"",function(u){return u})):i!=null&&(hp(i)&&(i=qx(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(wv,"$&/")+"/")+t)),e.push(i)),1;if(s=0,n=n===""?".":n+":",_v(t))for(var l=0;l<t.length;l++){o=t[l];var c=n+gd(o,l);s+=zl(o,e,r,c,i)}else if(c=Bx(t),typeof c=="function")for(t=c.call(t),l=0;!(o=t.next()).done;)o=o.value,c=n+gd(o,l++),s+=zl(o,e,r,c,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function ll(t,e,r){if(t==null)return t;var n=[],i=0;return zl(t,n,"","",function(o){return e.call(r,o,i++)}),n}function Wx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Tt={current:null},jl={transition:null},Kx={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:jl,ReactCurrentOwner:dp};function $w(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:ll,forEach:function(t,e,r){ll(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return ll(t,function(){e++}),e},toArray:function(t){return ll(t,function(e){return e})||[]},only:function(t){if(!hp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=Oo;oe.Fragment=Dx;oe.Profiler=Vx;oe.PureComponent=cp;oe.StrictMode=Lx;oe.Suspense=Ux;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kx;oe.act=$w;oe.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=Nw({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=dp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)Lw.call(e,c)&&!Vw.hasOwnProperty(c)&&(n[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:xa,type:t.type,key:i,ref:o,props:n,_owner:s}};oe.createContext=function(t){return t={$$typeof:$x,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Mx,_context:t},t.Consumer=t};oe.createElement=Mw;oe.createFactory=function(t){var e=Mw.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:Fx,render:t}};oe.isValidElement=hp;oe.lazy=function(t){return{$$typeof:jx,_payload:{_status:-1,_result:t},_init:Wx}};oe.memo=function(t,e){return{$$typeof:zx,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=jl.transition;jl.transition={};try{t()}finally{jl.transition=e}};oe.unstable_act=$w;oe.useCallback=function(t,e){return Tt.current.useCallback(t,e)};oe.useContext=function(t){return Tt.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return Tt.current.useDeferredValue(t)};oe.useEffect=function(t,e){return Tt.current.useEffect(t,e)};oe.useId=function(){return Tt.current.useId()};oe.useImperativeHandle=function(t,e,r){return Tt.current.useImperativeHandle(t,e,r)};oe.useInsertionEffect=function(t,e){return Tt.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return Tt.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return Tt.current.useMemo(t,e)};oe.useReducer=function(t,e,r){return Tt.current.useReducer(t,e,r)};oe.useRef=function(t){return Tt.current.useRef(t)};oe.useState=function(t){return Tt.current.useState(t)};oe.useSyncExternalStore=function(t,e,r){return Tt.current.useSyncExternalStore(t,e,r)};oe.useTransition=function(){return Tt.current.useTransition()};oe.version="18.3.1";Rw.exports=oe;var Q=Rw.exports;const Gx=Nx(Q),Qx=Px({__proto__:null,default:Gx},[Q]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yx=Q,Xx=Symbol.for("react.element"),Jx=Symbol.for("react.fragment"),Zx=Object.prototype.hasOwnProperty,eA=Yx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tA={key:!0,ref:!0,__self:!0,__source:!0};function Fw(t,e,r){var n,i={},o=null,s=null;r!==void 0&&(o=""+r),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(n in e)Zx.call(e,n)&&!tA.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:Xx,type:t,key:o,ref:s,props:i,_owner:eA.current}}tu.Fragment=Jx;tu.jsx=Fw;tu.jsxs=Fw;kw.exports=tu;var F=kw.exports,Uw={exports:{}},zt={},zw={exports:{}},jw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,Z){var te=H.length;H.push(Z);e:for(;0<te;){var _e=te-1>>>1,he=H[_e];if(0<i(he,Z))H[_e]=Z,H[te]=he,te=_e;else break e}}function r(H){return H.length===0?null:H[0]}function n(H){if(H.length===0)return null;var Z=H[0],te=H.pop();if(te!==Z){H[0]=te;e:for(var _e=0,he=H.length,q=he>>>1;_e<q;){var ge=2*(_e+1)-1,Ae=H[ge],er=ge+1,tr=H[er];if(0>i(Ae,te))er<he&&0>i(tr,Ae)?(H[_e]=tr,H[er]=te,_e=er):(H[_e]=Ae,H[ge]=te,_e=ge);else if(er<he&&0>i(tr,te))H[_e]=tr,H[er]=te,_e=er;else break e}}return Z}function i(H,Z){var te=H.sortIndex-Z.sortIndex;return te!==0?te:H.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],f=1,p=null,m=3,T=!1,S=!1,P=!1,N=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(H){for(var Z=r(u);Z!==null;){if(Z.callback===null)n(u);else if(Z.startTime<=H)n(u),Z.sortIndex=Z.expirationTime,e(c,Z);else break;Z=r(u)}}function D(H){if(P=!1,x(H),!S)if(r(c)!==null)S=!0,Pr(U);else{var Z=r(u);Z!==null&&Zt(D,Z.startTime-H)}}function U(H,Z){S=!1,P&&(P=!1,b(v),v=-1),T=!0;var te=m;try{for(x(Z),p=r(c);p!==null&&(!(p.expirationTime>Z)||H&&!A());){var _e=p.callback;if(typeof _e=="function"){p.callback=null,m=p.priorityLevel;var he=_e(p.expirationTime<=Z);Z=t.unstable_now(),typeof he=="function"?p.callback=he:p===r(c)&&n(c),x(Z)}else n(c);p=r(c)}if(p!==null)var q=!0;else{var ge=r(u);ge!==null&&Zt(D,ge.startTime-Z),q=!1}return q}finally{p=null,m=te,T=!1}}var z=!1,w=null,v=-1,_=5,E=-1;function A(){return!(t.unstable_now()-E<_)}function C(){if(w!==null){var H=t.unstable_now();E=H;var Z=!0;try{Z=w(!0,H)}finally{Z?I():(z=!1,w=null)}}else z=!1}var I;if(typeof y=="function")I=function(){y(C)};else if(typeof MessageChannel<"u"){var St=new MessageChannel,Rr=St.port2;St.port1.onmessage=C,I=function(){Rr.postMessage(null)}}else I=function(){N(C,0)};function Pr(H){w=H,z||(z=!0,I())}function Zt(H,Z){v=N(function(){H(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){S||T||(S=!0,Pr(U))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(H){switch(m){case 1:case 2:case 3:var Z=3;break;default:Z=m}var te=m;m=Z;try{return H()}finally{m=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,Z){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var te=m;m=H;try{return Z()}finally{m=te}},t.unstable_scheduleCallback=function(H,Z,te){var _e=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?_e+te:_e):te=_e,H){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=te+he,H={id:f++,callback:Z,priorityLevel:H,startTime:te,expirationTime:he,sortIndex:-1},te>_e?(H.sortIndex=te,e(u,H),r(c)===null&&H===r(u)&&(P?(b(v),v=-1):P=!0,Zt(D,te-_e))):(H.sortIndex=he,e(c,H),S||T||(S=!0,Pr(U))),H},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(H){var Z=m;return function(){var te=m;m=Z;try{return H.apply(this,arguments)}finally{m=te}}}})(jw);zw.exports=jw;var rA=zw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nA=Q,Ut=rA;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bw=new Set,Hs={};function Pi(t,e){vo(t,e),vo(t+"Capture",e)}function vo(t,e){for(Hs[t]=e,t=0;t<e.length;t++)Bw.add(e[t])}var Qr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_h=Object.prototype.hasOwnProperty,iA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bv={},Ev={};function oA(t){return _h.call(Ev,t)?!0:_h.call(bv,t)?!1:iA.test(t)?Ev[t]=!0:(bv[t]=!0,!1)}function sA(t,e,r,n){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function aA(t,e,r,n){if(e===null||typeof e>"u"||sA(t,e,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xt(t,e,r,n,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rt[t]=new xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rt[e]=new xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rt[t]=new xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rt[t]=new xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rt[t]=new xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rt[t]=new xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rt[t]=new xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rt[t]=new xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rt[t]=new xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var fp=/[\-:]([a-z])/g;function pp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(fp,pp);rt[e]=new xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(fp,pp);rt[e]=new xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(fp,pp);rt[e]=new xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rt[t]=new xt(t,1,!1,t.toLowerCase(),null,!1,!1)});rt.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rt[t]=new xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function mp(t,e,r,n){var i=rt.hasOwnProperty(e)?rt[e]:null;(i!==null?i.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(aA(e,r,i,n)&&(r=null),n||i===null?oA(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type===3?!1:"":r:(e=i.attributeName,n=i.attributeNamespace,r===null?t.removeAttribute(e):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?t.setAttributeNS(n,e,r):t.setAttribute(e,r))))}var on=nA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cl=Symbol.for("react.element"),Gi=Symbol.for("react.portal"),Qi=Symbol.for("react.fragment"),gp=Symbol.for("react.strict_mode"),wh=Symbol.for("react.profiler"),qw=Symbol.for("react.provider"),Hw=Symbol.for("react.context"),vp=Symbol.for("react.forward_ref"),bh=Symbol.for("react.suspense"),Eh=Symbol.for("react.suspense_list"),yp=Symbol.for("react.memo"),fn=Symbol.for("react.lazy"),Ww=Symbol.for("react.offscreen"),Iv=Symbol.iterator;function os(t){return t===null||typeof t!="object"?null:(t=Iv&&t[Iv]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,vd;function vs(t){if(vd===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);vd=e&&e[1]||""}return`
`+vd+t}var yd=!1;function _d(t,e){if(!t||yd)return"";yd=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var n=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){n=u}t.call(e.prototype)}else{try{throw Error()}catch(u){n=u}t()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=n.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=s&&0<=l);break}}}finally{yd=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?vs(t):""}function lA(t){switch(t.tag){case 5:return vs(t.type);case 16:return vs("Lazy");case 13:return vs("Suspense");case 19:return vs("SuspenseList");case 0:case 2:case 15:return t=_d(t.type,!1),t;case 11:return t=_d(t.type.render,!1),t;case 1:return t=_d(t.type,!0),t;default:return""}}function Ih(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qi:return"Fragment";case Gi:return"Portal";case wh:return"Profiler";case gp:return"StrictMode";case bh:return"Suspense";case Eh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hw:return(t.displayName||"Context")+".Consumer";case qw:return(t._context.displayName||"Context")+".Provider";case vp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yp:return e=t.displayName||null,e!==null?e:Ih(t.type)||"Memo";case fn:e=t._payload,t=t._init;try{return Ih(t(e))}catch{}}return null}function cA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ih(e);case 8:return e===gp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uA(t){var e=Kw(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ul(t){t._valueTracker||(t._valueTracker=uA(t))}function Gw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),n="";return t&&(n=Kw(t)?t.checked?"true":"false":t.value),t=n,t!==r?(e.setValue(t),!0):!1}function uc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Th(t,e){var r=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Tv(t,e){var r=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;r=Vn(e.value!=null?e.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qw(t,e){e=e.checked,e!=null&&mp(t,"checked",e,!1)}function xh(t,e){Qw(t,e);var r=Vn(e.value),n=e.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ah(t,e.type,r):e.hasOwnProperty("defaultValue")&&Ah(t,e.type,Vn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xv(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function Ah(t,e,r){(e!=="number"||uc(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var ys=Array.isArray;function so(t,e,r,n){if(t=t.options,e){e={};for(var i=0;i<r.length;i++)e["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=e.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&n&&(t[r].defaultSelected=!0)}else{for(r=""+Vn(r),e=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Sh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Av(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(M(92));if(ys(r)){if(1<r.length)throw Error(M(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:Vn(r)}}function Yw(t,e){var r=Vn(e.value),n=Vn(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function Sv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Xw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ch(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Xw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var dl,Jw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,n,i){MSApp.execUnsafeLocalFunction(function(){return t(e,r,n,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(dl=dl||document.createElement("div"),dl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=dl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ws(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Ss={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dA=["Webkit","ms","Moz","O"];Object.keys(Ss).forEach(function(t){dA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ss[e]=Ss[t]})});function Zw(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Ss.hasOwnProperty(t)&&Ss[t]?(""+e).trim():e+"px"}function e0(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Zw(r,e[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,i):t[r]=i}}var hA=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kh(t,e){if(e){if(hA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function Rh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ph=null;function _p(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nh=null,ao=null,lo=null;function Cv(t){if(t=Ca(t)){if(typeof Nh!="function")throw Error(M(280));var e=t.stateNode;e&&(e=su(e),Nh(t.stateNode,t.type,e))}}function t0(t){ao?lo?lo.push(t):lo=[t]:ao=t}function r0(){if(ao){var t=ao,e=lo;if(lo=ao=null,Cv(t),e)for(t=0;t<e.length;t++)Cv(e[t])}}function n0(t,e){return t(e)}function i0(){}var wd=!1;function o0(t,e,r){if(wd)return t(e,r);wd=!0;try{return n0(t,e,r)}finally{wd=!1,(ao!==null||lo!==null)&&(i0(),r0())}}function Ks(t,e){var r=t.stateNode;if(r===null)return null;var n=su(r);if(n===null)return null;r=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(M(231,e,typeof r));return r}var Oh=!1;if(Qr)try{var ss={};Object.defineProperty(ss,"passive",{get:function(){Oh=!0}}),window.addEventListener("test",ss,ss),window.removeEventListener("test",ss,ss)}catch{Oh=!1}function fA(t,e,r,n,i,o,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(r,u)}catch(f){this.onError(f)}}var Cs=!1,dc=null,hc=!1,Dh=null,pA={onError:function(t){Cs=!0,dc=t}};function mA(t,e,r,n,i,o,s,l,c){Cs=!1,dc=null,fA.apply(pA,arguments)}function gA(t,e,r,n,i,o,s,l,c){if(mA.apply(this,arguments),Cs){if(Cs){var u=dc;Cs=!1,dc=null}else throw Error(M(198));hc||(hc=!0,Dh=u)}}function Ni(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function s0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function kv(t){if(Ni(t)!==t)throw Error(M(188))}function vA(t){var e=t.alternate;if(!e){if(e=Ni(t),e===null)throw Error(M(188));return e!==t?null:t}for(var r=t,n=e;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return kv(i),t;if(o===n)return kv(i),e;o=o.sibling}throw Error(M(188))}if(r.return!==n.return)r=i,n=o;else{for(var s=!1,l=i.child;l;){if(l===r){s=!0,r=i,n=o;break}if(l===n){s=!0,n=i,r=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===r){s=!0,r=o,n=i;break}if(l===n){s=!0,n=o,r=i;break}l=l.sibling}if(!s)throw Error(M(189))}}if(r.alternate!==n)throw Error(M(190))}if(r.tag!==3)throw Error(M(188));return r.stateNode.current===r?t:e}function a0(t){return t=vA(t),t!==null?l0(t):null}function l0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=l0(t);if(e!==null)return e;t=t.sibling}return null}var c0=Ut.unstable_scheduleCallback,Rv=Ut.unstable_cancelCallback,yA=Ut.unstable_shouldYield,_A=Ut.unstable_requestPaint,Me=Ut.unstable_now,wA=Ut.unstable_getCurrentPriorityLevel,wp=Ut.unstable_ImmediatePriority,u0=Ut.unstable_UserBlockingPriority,fc=Ut.unstable_NormalPriority,bA=Ut.unstable_LowPriority,d0=Ut.unstable_IdlePriority,ru=null,wr=null;function EA(t){if(wr&&typeof wr.onCommitFiberRoot=="function")try{wr.onCommitFiberRoot(ru,t,void 0,(t.current.flags&128)===128)}catch{}}var cr=Math.clz32?Math.clz32:xA,IA=Math.log,TA=Math.LN2;function xA(t){return t>>>=0,t===0?32:31-(IA(t)/TA|0)|0}var hl=64,fl=4194304;function _s(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pc(t,e){var r=t.pendingLanes;if(r===0)return 0;var n=0,i=t.suspendedLanes,o=t.pingedLanes,s=r&268435455;if(s!==0){var l=s&~i;l!==0?n=_s(l):(o&=s,o!==0&&(n=_s(o)))}else s=r&~i,s!==0?n=_s(s):o!==0&&(n=_s(o));if(n===0)return 0;if(e!==0&&e!==n&&!(e&i)&&(i=n&-n,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(n&4&&(n|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)r=31-cr(e),i=1<<r,n|=t[r],e&=~i;return n}function AA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function SA(t,e){for(var r=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-cr(o),l=1<<s,c=i[s];c===-1?(!(l&r)||l&n)&&(i[s]=AA(l,e)):c<=e&&(t.expiredLanes|=l),o&=~l}}function Lh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function h0(){var t=hl;return hl<<=1,!(hl&4194240)&&(hl=64),t}function bd(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Aa(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-cr(e),t[e]=r}function CA(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<r;){var i=31-cr(r),o=1<<i;e[i]=0,n[i]=-1,t[i]=-1,r&=~o}}function bp(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var n=31-cr(r),i=1<<n;i&e|t[n]&e&&(t[n]|=e),r&=~i}}var fe=0;function f0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var p0,Ep,m0,g0,v0,Vh=!1,pl=[],xn=null,An=null,Sn=null,Gs=new Map,Qs=new Map,gn=[],kA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pv(t,e){switch(t){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":Gs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qs.delete(e.pointerId)}}function as(t,e,r,n,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Ca(e),e!==null&&Ep(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function RA(t,e,r,n,i){switch(e){case"focusin":return xn=as(xn,t,e,r,n,i),!0;case"dragenter":return An=as(An,t,e,r,n,i),!0;case"mouseover":return Sn=as(Sn,t,e,r,n,i),!0;case"pointerover":var o=i.pointerId;return Gs.set(o,as(Gs.get(o)||null,t,e,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,Qs.set(o,as(Qs.get(o)||null,t,e,r,n,i)),!0}return!1}function y0(t){var e=ii(t.target);if(e!==null){var r=Ni(e);if(r!==null){if(e=r.tag,e===13){if(e=s0(r),e!==null){t.blockedOn=e,v0(t.priority,function(){m0(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Mh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.constructor(r.type,r);Ph=n,r.target.dispatchEvent(n),Ph=null}else return e=Ca(r),e!==null&&Ep(e),t.blockedOn=r,!1;e.shift()}return!0}function Nv(t,e,r){Bl(t)&&r.delete(e)}function PA(){Vh=!1,xn!==null&&Bl(xn)&&(xn=null),An!==null&&Bl(An)&&(An=null),Sn!==null&&Bl(Sn)&&(Sn=null),Gs.forEach(Nv),Qs.forEach(Nv)}function ls(t,e){t.blockedOn===e&&(t.blockedOn=null,Vh||(Vh=!0,Ut.unstable_scheduleCallback(Ut.unstable_NormalPriority,PA)))}function Ys(t){function e(i){return ls(i,t)}if(0<pl.length){ls(pl[0],t);for(var r=1;r<pl.length;r++){var n=pl[r];n.blockedOn===t&&(n.blockedOn=null)}}for(xn!==null&&ls(xn,t),An!==null&&ls(An,t),Sn!==null&&ls(Sn,t),Gs.forEach(e),Qs.forEach(e),r=0;r<gn.length;r++)n=gn[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<gn.length&&(r=gn[0],r.blockedOn===null);)y0(r),r.blockedOn===null&&gn.shift()}var co=on.ReactCurrentBatchConfig,mc=!0;function NA(t,e,r,n){var i=fe,o=co.transition;co.transition=null;try{fe=1,Ip(t,e,r,n)}finally{fe=i,co.transition=o}}function OA(t,e,r,n){var i=fe,o=co.transition;co.transition=null;try{fe=4,Ip(t,e,r,n)}finally{fe=i,co.transition=o}}function Ip(t,e,r,n){if(mc){var i=Mh(t,e,r,n);if(i===null)Pd(t,e,n,gc,r),Pv(t,n);else if(RA(i,t,e,r,n))n.stopPropagation();else if(Pv(t,n),e&4&&-1<kA.indexOf(t)){for(;i!==null;){var o=Ca(i);if(o!==null&&p0(o),o=Mh(t,e,r,n),o===null&&Pd(t,e,n,gc,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else Pd(t,e,n,null,r)}}var gc=null;function Mh(t,e,r,n){if(gc=null,t=_p(n),t=ii(t),t!==null)if(e=Ni(t),e===null)t=null;else if(r=e.tag,r===13){if(t=s0(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return gc=t,null}function _0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wA()){case wp:return 1;case u0:return 4;case fc:case bA:return 16;case d0:return 536870912;default:return 16}default:return 16}}var En=null,Tp=null,ql=null;function w0(){if(ql)return ql;var t,e=Tp,r=e.length,n,i="value"in En?En.value:En.textContent,o=i.length;for(t=0;t<r&&e[t]===i[t];t++);var s=r-t;for(n=1;n<=s&&e[r-n]===i[o-n];n++);return ql=i.slice(t,1<n?1-n:void 0)}function Hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ml(){return!0}function Ov(){return!1}function jt(t){function e(r,n,i,o,s){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(r=t[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ml:Ov,this.isPropagationStopped=Ov,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),e}var Do={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xp=jt(Do),Sa=ke({},Do,{view:0,detail:0}),DA=jt(Sa),Ed,Id,cs,nu=ke({},Sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ap,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==cs&&(cs&&t.type==="mousemove"?(Ed=t.screenX-cs.screenX,Id=t.screenY-cs.screenY):Id=Ed=0,cs=t),Ed)},movementY:function(t){return"movementY"in t?t.movementY:Id}}),Dv=jt(nu),LA=ke({},nu,{dataTransfer:0}),VA=jt(LA),MA=ke({},Sa,{relatedTarget:0}),Td=jt(MA),$A=ke({},Do,{animationName:0,elapsedTime:0,pseudoElement:0}),FA=jt($A),UA=ke({},Do,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zA=jt(UA),jA=ke({},Do,{data:0}),Lv=jt(jA),BA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},HA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function WA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=HA[t])?!!e[t]:!1}function Ap(){return WA}var KA=ke({},Sa,{key:function(t){if(t.key){var e=BA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ap,charCode:function(t){return t.type==="keypress"?Hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),GA=jt(KA),QA=ke({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vv=jt(QA),YA=ke({},Sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ap}),XA=jt(YA),JA=ke({},Do,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZA=jt(JA),eS=ke({},nu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tS=jt(eS),rS=[9,13,27,32],Sp=Qr&&"CompositionEvent"in window,ks=null;Qr&&"documentMode"in document&&(ks=document.documentMode);var nS=Qr&&"TextEvent"in window&&!ks,b0=Qr&&(!Sp||ks&&8<ks&&11>=ks),Mv=" ",$v=!1;function E0(t,e){switch(t){case"keyup":return rS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yi=!1;function iS(t,e){switch(t){case"compositionend":return I0(e);case"keypress":return e.which!==32?null:($v=!0,Mv);case"textInput":return t=e.data,t===Mv&&$v?null:t;default:return null}}function oS(t,e){if(Yi)return t==="compositionend"||!Sp&&E0(t,e)?(t=w0(),ql=Tp=En=null,Yi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return b0&&e.locale!=="ko"?null:e.data;default:return null}}var sS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sS[t.type]:e==="textarea"}function T0(t,e,r,n){t0(n),e=vc(e,"onChange"),0<e.length&&(r=new xp("onChange","change",null,r,n),t.push({event:r,listeners:e}))}var Rs=null,Xs=null;function aS(t){L0(t,0)}function iu(t){var e=Zi(t);if(Gw(e))return t}function lS(t,e){if(t==="change")return e}var x0=!1;if(Qr){var xd;if(Qr){var Ad="oninput"in document;if(!Ad){var Uv=document.createElement("div");Uv.setAttribute("oninput","return;"),Ad=typeof Uv.oninput=="function"}xd=Ad}else xd=!1;x0=xd&&(!document.documentMode||9<document.documentMode)}function zv(){Rs&&(Rs.detachEvent("onpropertychange",A0),Xs=Rs=null)}function A0(t){if(t.propertyName==="value"&&iu(Xs)){var e=[];T0(e,Xs,t,_p(t)),o0(aS,e)}}function cS(t,e,r){t==="focusin"?(zv(),Rs=e,Xs=r,Rs.attachEvent("onpropertychange",A0)):t==="focusout"&&zv()}function uS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return iu(Xs)}function dS(t,e){if(t==="click")return iu(e)}function hS(t,e){if(t==="input"||t==="change")return iu(e)}function fS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hr=typeof Object.is=="function"?Object.is:fS;function Js(t,e){if(hr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!_h.call(e,i)||!hr(t[i],e[i]))return!1}return!0}function jv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bv(t,e){var r=jv(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=e&&n>=e)return{node:r,offset:e-t};t=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=jv(r)}}function S0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?S0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function C0(){for(var t=window,e=uc();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=uc(t.document)}return e}function Cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function pS(t){var e=C0(),r=t.focusedElem,n=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&S0(r.ownerDocument.documentElement,r)){if(n!==null&&Cp(r)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!t.extend&&o>n&&(i=n,n=o,o=i),i=Bv(r,o);var s=Bv(r,n);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>n?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mS=Qr&&"documentMode"in document&&11>=document.documentMode,Xi=null,$h=null,Ps=null,Fh=!1;function qv(t,e,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Fh||Xi==null||Xi!==uc(n)||(n=Xi,"selectionStart"in n&&Cp(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ps&&Js(Ps,n)||(Ps=n,n=vc($h,"onSelect"),0<n.length&&(e=new xp("onSelect","select",null,e,r),t.push({event:e,listeners:n}),e.target=Xi)))}function gl(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Ji={animationend:gl("Animation","AnimationEnd"),animationiteration:gl("Animation","AnimationIteration"),animationstart:gl("Animation","AnimationStart"),transitionend:gl("Transition","TransitionEnd")},Sd={},k0={};Qr&&(k0=document.createElement("div").style,"AnimationEvent"in window||(delete Ji.animationend.animation,delete Ji.animationiteration.animation,delete Ji.animationstart.animation),"TransitionEvent"in window||delete Ji.transitionend.transition);function ou(t){if(Sd[t])return Sd[t];if(!Ji[t])return t;var e=Ji[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in k0)return Sd[t]=e[r];return t}var R0=ou("animationend"),P0=ou("animationiteration"),N0=ou("animationstart"),O0=ou("transitionend"),D0=new Map,Hv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(t,e){D0.set(t,e),Pi(e,[t])}for(var Cd=0;Cd<Hv.length;Cd++){var kd=Hv[Cd],gS=kd.toLowerCase(),vS=kd[0].toUpperCase()+kd.slice(1);zn(gS,"on"+vS)}zn(R0,"onAnimationEnd");zn(P0,"onAnimationIteration");zn(N0,"onAnimationStart");zn("dblclick","onDoubleClick");zn("focusin","onFocus");zn("focusout","onBlur");zn(O0,"onTransitionEnd");vo("onMouseEnter",["mouseout","mouseover"]);vo("onMouseLeave",["mouseout","mouseover"]);vo("onPointerEnter",["pointerout","pointerover"]);vo("onPointerLeave",["pointerout","pointerover"]);Pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ws));function Wv(t,e,r){var n=t.type||"unknown-event";t.currentTarget=r,gA(n,e,void 0,t),t.currentTarget=null}function L0(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],i=n.event;n=n.listeners;e:{var o=void 0;if(e)for(var s=n.length-1;0<=s;s--){var l=n[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Wv(i,l,u),o=c}else for(s=0;s<n.length;s++){if(l=n[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Wv(i,l,u),o=c}}}if(hc)throw t=Dh,hc=!1,Dh=null,t}function be(t,e){var r=e[qh];r===void 0&&(r=e[qh]=new Set);var n=t+"__bubble";r.has(n)||(V0(e,t,2,!1),r.add(n))}function Rd(t,e,r){var n=0;e&&(n|=4),V0(r,t,n,e)}var vl="_reactListening"+Math.random().toString(36).slice(2);function Zs(t){if(!t[vl]){t[vl]=!0,Bw.forEach(function(r){r!=="selectionchange"&&(yS.has(r)||Rd(r,!1,t),Rd(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[vl]||(e[vl]=!0,Rd("selectionchange",!1,e))}}function V0(t,e,r,n){switch(_0(e)){case 1:var i=NA;break;case 4:i=OA;break;default:i=Ip}r=i.bind(null,e,r,t),i=void 0,!Oh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,r,{capture:!0,passive:i}):t.addEventListener(e,r,!0):i!==void 0?t.addEventListener(e,r,{passive:i}):t.addEventListener(e,r,!1)}function Pd(t,e,r,n,i){var o=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=n.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=ii(l),s===null)return;if(c=s.tag,c===5||c===6){n=o=s;continue e}l=l.parentNode}}n=n.return}o0(function(){var u=o,f=_p(r),p=[];e:{var m=D0.get(t);if(m!==void 0){var T=xp,S=t;switch(t){case"keypress":if(Hl(r)===0)break e;case"keydown":case"keyup":T=GA;break;case"focusin":S="focus",T=Td;break;case"focusout":S="blur",T=Td;break;case"beforeblur":case"afterblur":T=Td;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Dv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=VA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=XA;break;case R0:case P0:case N0:T=FA;break;case O0:T=ZA;break;case"scroll":T=DA;break;case"wheel":T=tS;break;case"copy":case"cut":case"paste":T=zA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Vv}var P=(e&4)!==0,N=!P&&t==="scroll",b=P?m!==null?m+"Capture":null:m;P=[];for(var y=u,x;y!==null;){x=y;var D=x.stateNode;if(x.tag===5&&D!==null&&(x=D,b!==null&&(D=Ks(y,b),D!=null&&P.push(ea(y,D,x)))),N)break;y=y.return}0<P.length&&(m=new T(m,S,null,r,f),p.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",m&&r!==Ph&&(S=r.relatedTarget||r.fromElement)&&(ii(S)||S[Yr]))break e;if((T||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,T?(S=r.relatedTarget||r.toElement,T=u,S=S?ii(S):null,S!==null&&(N=Ni(S),S!==N||S.tag!==5&&S.tag!==6)&&(S=null)):(T=null,S=u),T!==S)){if(P=Dv,D="onMouseLeave",b="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(P=Vv,D="onPointerLeave",b="onPointerEnter",y="pointer"),N=T==null?m:Zi(T),x=S==null?m:Zi(S),m=new P(D,y+"leave",T,r,f),m.target=N,m.relatedTarget=x,D=null,ii(f)===u&&(P=new P(b,y+"enter",S,r,f),P.target=x,P.relatedTarget=N,D=P),N=D,T&&S)t:{for(P=T,b=S,y=0,x=P;x;x=Bi(x))y++;for(x=0,D=b;D;D=Bi(D))x++;for(;0<y-x;)P=Bi(P),y--;for(;0<x-y;)b=Bi(b),x--;for(;y--;){if(P===b||b!==null&&P===b.alternate)break t;P=Bi(P),b=Bi(b)}P=null}else P=null;T!==null&&Kv(p,m,T,P,!1),S!==null&&N!==null&&Kv(p,N,S,P,!0)}}e:{if(m=u?Zi(u):window,T=m.nodeName&&m.nodeName.toLowerCase(),T==="select"||T==="input"&&m.type==="file")var U=lS;else if(Fv(m))if(x0)U=hS;else{U=uS;var z=cS}else(T=m.nodeName)&&T.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(U=dS);if(U&&(U=U(t,u))){T0(p,U,r,f);break e}z&&z(t,m,u),t==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&Ah(m,"number",m.value)}switch(z=u?Zi(u):window,t){case"focusin":(Fv(z)||z.contentEditable==="true")&&(Xi=z,$h=u,Ps=null);break;case"focusout":Ps=$h=Xi=null;break;case"mousedown":Fh=!0;break;case"contextmenu":case"mouseup":case"dragend":Fh=!1,qv(p,r,f);break;case"selectionchange":if(mS)break;case"keydown":case"keyup":qv(p,r,f)}var w;if(Sp)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Yi?E0(t,r)&&(v="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(v="onCompositionStart");v&&(b0&&r.locale!=="ko"&&(Yi||v!=="onCompositionStart"?v==="onCompositionEnd"&&Yi&&(w=w0()):(En=f,Tp="value"in En?En.value:En.textContent,Yi=!0)),z=vc(u,v),0<z.length&&(v=new Lv(v,t,null,r,f),p.push({event:v,listeners:z}),w?v.data=w:(w=I0(r),w!==null&&(v.data=w)))),(w=nS?iS(t,r):oS(t,r))&&(u=vc(u,"onBeforeInput"),0<u.length&&(f=new Lv("onBeforeInput","beforeinput",null,r,f),p.push({event:f,listeners:u}),f.data=w))}L0(p,e)})}function ea(t,e,r){return{instance:t,listener:e,currentTarget:r}}function vc(t,e){for(var r=e+"Capture",n=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ks(t,r),o!=null&&n.unshift(ea(t,o,i)),o=Ks(t,e),o!=null&&n.push(ea(t,o,i))),t=t.return}return n}function Bi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kv(t,e,r,n,i){for(var o=e._reactName,s=[];r!==null&&r!==n;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&u!==null&&(l=u,i?(c=Ks(r,o),c!=null&&s.unshift(ea(r,c,l))):i||(c=Ks(r,o),c!=null&&s.push(ea(r,c,l)))),r=r.return}s.length!==0&&t.push({event:e,listeners:s})}var _S=/\r\n?/g,wS=/\u0000|\uFFFD/g;function Gv(t){return(typeof t=="string"?t:""+t).replace(_S,`
`).replace(wS,"")}function yl(t,e,r){if(e=Gv(e),Gv(t)!==e&&r)throw Error(M(425))}function yc(){}var Uh=null,zh=null;function jh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bh=typeof setTimeout=="function"?setTimeout:void 0,bS=typeof clearTimeout=="function"?clearTimeout:void 0,Qv=typeof Promise=="function"?Promise:void 0,ES=typeof queueMicrotask=="function"?queueMicrotask:typeof Qv<"u"?function(t){return Qv.resolve(null).then(t).catch(IS)}:Bh;function IS(t){setTimeout(function(){throw t})}function Nd(t,e){var r=e,n=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){t.removeChild(i),Ys(e);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Ys(e)}function Cn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var Lo=Math.random().toString(36).slice(2),_r="__reactFiber$"+Lo,ta="__reactProps$"+Lo,Yr="__reactContainer$"+Lo,qh="__reactEvents$"+Lo,TS="__reactListeners$"+Lo,xS="__reactHandles$"+Lo;function ii(t){var e=t[_r];if(e)return e;for(var r=t.parentNode;r;){if(e=r[Yr]||r[_r]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=Yv(t);t!==null;){if(r=t[_r])return r;t=Yv(t)}return e}t=r,r=t.parentNode}return null}function Ca(t){return t=t[_r]||t[Yr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function su(t){return t[ta]||null}var Hh=[],eo=-1;function jn(t){return{current:t}}function Ie(t){0>eo||(t.current=Hh[eo],Hh[eo]=null,eo--)}function ye(t,e){eo++,Hh[eo]=t.current,t.current=e}var Mn={},mt=jn(Mn),Nt=jn(!1),yi=Mn;function yo(t,e){var r=t.type.contextTypes;if(!r)return Mn;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=e[o];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ot(t){return t=t.childContextTypes,t!=null}function _c(){Ie(Nt),Ie(mt)}function Xv(t,e,r){if(mt.current!==Mn)throw Error(M(168));ye(mt,e),ye(Nt,r)}function M0(t,e,r){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in e))throw Error(M(108,cA(t)||"Unknown",i));return ke({},r,n)}function wc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mn,yi=mt.current,ye(mt,t),ye(Nt,Nt.current),!0}function Jv(t,e,r){var n=t.stateNode;if(!n)throw Error(M(169));r?(t=M0(t,e,yi),n.__reactInternalMemoizedMergedChildContext=t,Ie(Nt),Ie(mt),ye(mt,t)):Ie(Nt),ye(Nt,r)}var Fr=null,au=!1,Od=!1;function $0(t){Fr===null?Fr=[t]:Fr.push(t)}function AS(t){au=!0,$0(t)}function Bn(){if(!Od&&Fr!==null){Od=!0;var t=0,e=fe;try{var r=Fr;for(fe=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}Fr=null,au=!1}catch(i){throw Fr!==null&&(Fr=Fr.slice(t+1)),c0(wp,Bn),i}finally{fe=e,Od=!1}}return null}var to=[],ro=0,bc=null,Ec=0,Bt=[],qt=0,_i=null,zr=1,jr="";function ti(t,e){to[ro++]=Ec,to[ro++]=bc,bc=t,Ec=e}function F0(t,e,r){Bt[qt++]=zr,Bt[qt++]=jr,Bt[qt++]=_i,_i=t;var n=zr;t=jr;var i=32-cr(n)-1;n&=~(1<<i),r+=1;var o=32-cr(e)+i;if(30<o){var s=i-i%5;o=(n&(1<<s)-1).toString(32),n>>=s,i-=s,zr=1<<32-cr(e)+i|r<<i|n,jr=o+t}else zr=1<<o|r<<i|n,jr=t}function kp(t){t.return!==null&&(ti(t,1),F0(t,1,0))}function Rp(t){for(;t===bc;)bc=to[--ro],to[ro]=null,Ec=to[--ro],to[ro]=null;for(;t===_i;)_i=Bt[--qt],Bt[qt]=null,jr=Bt[--qt],Bt[qt]=null,zr=Bt[--qt],Bt[qt]=null}var Ft=null,Mt=null,Te=!1,ar=null;function U0(t,e){var r=Ht(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function Zv(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ft=t,Mt=Cn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ft=t,Mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=_i!==null?{id:zr,overflow:jr}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Ht(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,Ft=t,Mt=null,!0):!1;default:return!1}}function Wh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kh(t){if(Te){var e=Mt;if(e){var r=e;if(!Zv(t,e)){if(Wh(t))throw Error(M(418));e=Cn(r.nextSibling);var n=Ft;e&&Zv(t,e)?U0(n,r):(t.flags=t.flags&-4097|2,Te=!1,Ft=t)}}else{if(Wh(t))throw Error(M(418));t.flags=t.flags&-4097|2,Te=!1,Ft=t}}}function ey(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ft=t}function _l(t){if(t!==Ft)return!1;if(!Te)return ey(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jh(t.type,t.memoizedProps)),e&&(e=Mt)){if(Wh(t))throw z0(),Error(M(418));for(;e;)U0(t,e),e=Cn(e.nextSibling)}if(ey(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){Mt=Cn(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}Mt=null}}else Mt=Ft?Cn(t.stateNode.nextSibling):null;return!0}function z0(){for(var t=Mt;t;)t=Cn(t.nextSibling)}function _o(){Mt=Ft=null,Te=!1}function Pp(t){ar===null?ar=[t]:ar.push(t)}var SS=on.ReactCurrentBatchConfig;function us(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(M(309));var n=r.stateNode}if(!n)throw Error(M(147,t));var i=n,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(M(284));if(!r._owner)throw Error(M(290,t))}return t}function wl(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ty(t){var e=t._init;return e(t._payload)}function j0(t){function e(b,y){if(t){var x=b.deletions;x===null?(b.deletions=[y],b.flags|=16):x.push(y)}}function r(b,y){if(!t)return null;for(;y!==null;)e(b,y),y=y.sibling;return null}function n(b,y){for(b=new Map;y!==null;)y.key!==null?b.set(y.key,y):b.set(y.index,y),y=y.sibling;return b}function i(b,y){return b=Nn(b,y),b.index=0,b.sibling=null,b}function o(b,y,x){return b.index=x,t?(x=b.alternate,x!==null?(x=x.index,x<y?(b.flags|=2,y):x):(b.flags|=2,y)):(b.flags|=1048576,y)}function s(b){return t&&b.alternate===null&&(b.flags|=2),b}function l(b,y,x,D){return y===null||y.tag!==6?(y=Ud(x,b.mode,D),y.return=b,y):(y=i(y,x),y.return=b,y)}function c(b,y,x,D){var U=x.type;return U===Qi?f(b,y,x.props.children,D,x.key):y!==null&&(y.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===fn&&ty(U)===y.type)?(D=i(y,x.props),D.ref=us(b,y,x),D.return=b,D):(D=Jl(x.type,x.key,x.props,null,b.mode,D),D.ref=us(b,y,x),D.return=b,D)}function u(b,y,x,D){return y===null||y.tag!==4||y.stateNode.containerInfo!==x.containerInfo||y.stateNode.implementation!==x.implementation?(y=zd(x,b.mode,D),y.return=b,y):(y=i(y,x.children||[]),y.return=b,y)}function f(b,y,x,D,U){return y===null||y.tag!==7?(y=fi(x,b.mode,D,U),y.return=b,y):(y=i(y,x),y.return=b,y)}function p(b,y,x){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Ud(""+y,b.mode,x),y.return=b,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case cl:return x=Jl(y.type,y.key,y.props,null,b.mode,x),x.ref=us(b,null,y),x.return=b,x;case Gi:return y=zd(y,b.mode,x),y.return=b,y;case fn:var D=y._init;return p(b,D(y._payload),x)}if(ys(y)||os(y))return y=fi(y,b.mode,x,null),y.return=b,y;wl(b,y)}return null}function m(b,y,x,D){var U=y!==null?y.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return U!==null?null:l(b,y,""+x,D);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case cl:return x.key===U?c(b,y,x,D):null;case Gi:return x.key===U?u(b,y,x,D):null;case fn:return U=x._init,m(b,y,U(x._payload),D)}if(ys(x)||os(x))return U!==null?null:f(b,y,x,D,null);wl(b,x)}return null}function T(b,y,x,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return b=b.get(x)||null,l(y,b,""+D,U);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case cl:return b=b.get(D.key===null?x:D.key)||null,c(y,b,D,U);case Gi:return b=b.get(D.key===null?x:D.key)||null,u(y,b,D,U);case fn:var z=D._init;return T(b,y,x,z(D._payload),U)}if(ys(D)||os(D))return b=b.get(x)||null,f(y,b,D,U,null);wl(y,D)}return null}function S(b,y,x,D){for(var U=null,z=null,w=y,v=y=0,_=null;w!==null&&v<x.length;v++){w.index>v?(_=w,w=null):_=w.sibling;var E=m(b,w,x[v],D);if(E===null){w===null&&(w=_);break}t&&w&&E.alternate===null&&e(b,w),y=o(E,y,v),z===null?U=E:z.sibling=E,z=E,w=_}if(v===x.length)return r(b,w),Te&&ti(b,v),U;if(w===null){for(;v<x.length;v++)w=p(b,x[v],D),w!==null&&(y=o(w,y,v),z===null?U=w:z.sibling=w,z=w);return Te&&ti(b,v),U}for(w=n(b,w);v<x.length;v++)_=T(w,b,v,x[v],D),_!==null&&(t&&_.alternate!==null&&w.delete(_.key===null?v:_.key),y=o(_,y,v),z===null?U=_:z.sibling=_,z=_);return t&&w.forEach(function(A){return e(b,A)}),Te&&ti(b,v),U}function P(b,y,x,D){var U=os(x);if(typeof U!="function")throw Error(M(150));if(x=U.call(x),x==null)throw Error(M(151));for(var z=U=null,w=y,v=y=0,_=null,E=x.next();w!==null&&!E.done;v++,E=x.next()){w.index>v?(_=w,w=null):_=w.sibling;var A=m(b,w,E.value,D);if(A===null){w===null&&(w=_);break}t&&w&&A.alternate===null&&e(b,w),y=o(A,y,v),z===null?U=A:z.sibling=A,z=A,w=_}if(E.done)return r(b,w),Te&&ti(b,v),U;if(w===null){for(;!E.done;v++,E=x.next())E=p(b,E.value,D),E!==null&&(y=o(E,y,v),z===null?U=E:z.sibling=E,z=E);return Te&&ti(b,v),U}for(w=n(b,w);!E.done;v++,E=x.next())E=T(w,b,v,E.value,D),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?v:E.key),y=o(E,y,v),z===null?U=E:z.sibling=E,z=E);return t&&w.forEach(function(C){return e(b,C)}),Te&&ti(b,v),U}function N(b,y,x,D){if(typeof x=="object"&&x!==null&&x.type===Qi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case cl:e:{for(var U=x.key,z=y;z!==null;){if(z.key===U){if(U=x.type,U===Qi){if(z.tag===7){r(b,z.sibling),y=i(z,x.props.children),y.return=b,b=y;break e}}else if(z.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===fn&&ty(U)===z.type){r(b,z.sibling),y=i(z,x.props),y.ref=us(b,z,x),y.return=b,b=y;break e}r(b,z);break}else e(b,z);z=z.sibling}x.type===Qi?(y=fi(x.props.children,b.mode,D,x.key),y.return=b,b=y):(D=Jl(x.type,x.key,x.props,null,b.mode,D),D.ref=us(b,y,x),D.return=b,b=D)}return s(b);case Gi:e:{for(z=x.key;y!==null;){if(y.key===z)if(y.tag===4&&y.stateNode.containerInfo===x.containerInfo&&y.stateNode.implementation===x.implementation){r(b,y.sibling),y=i(y,x.children||[]),y.return=b,b=y;break e}else{r(b,y);break}else e(b,y);y=y.sibling}y=zd(x,b.mode,D),y.return=b,b=y}return s(b);case fn:return z=x._init,N(b,y,z(x._payload),D)}if(ys(x))return S(b,y,x,D);if(os(x))return P(b,y,x,D);wl(b,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,y!==null&&y.tag===6?(r(b,y.sibling),y=i(y,x),y.return=b,b=y):(r(b,y),y=Ud(x,b.mode,D),y.return=b,b=y),s(b)):r(b,y)}return N}var wo=j0(!0),B0=j0(!1),Ic=jn(null),Tc=null,no=null,Np=null;function Op(){Np=no=Tc=null}function Dp(t){var e=Ic.current;Ie(Ic),t._currentValue=e}function Gh(t,e,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===r)break;t=t.return}}function uo(t,e){Tc=t,Np=no=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pt=!0),t.firstContext=null)}function Yt(t){var e=t._currentValue;if(Np!==t)if(t={context:t,memoizedValue:e,next:null},no===null){if(Tc===null)throw Error(M(308));no=t,Tc.dependencies={lanes:0,firstContext:t}}else no=no.next=t;return e}var oi=null;function Lp(t){oi===null?oi=[t]:oi.push(t)}function q0(t,e,r,n){var i=e.interleaved;return i===null?(r.next=r,Lp(e)):(r.next=i.next,i.next=r),e.interleaved=r,Xr(t,n)}function Xr(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var pn=!1;function Vp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function H0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kn(t,e,r){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,ce&2){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,Xr(t,r)}return i=n.interleaved,i===null?(e.next=e,Lp(n)):(e.next=i.next,i.next=e),n.interleaved=e,Xr(t,r)}function Wl(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,bp(t,r)}}function ry(t,e){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=s:o=o.next=s,r=r.next}while(r!==null);o===null?i=o=e:o=o.next=e}else i=o=e;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function xc(t,e,r,n){var i=t.updateQueue;pn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==s&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(o!==null){var p=i.baseState;s=0,f=u=c=null,l=o;do{var m=l.lane,T=l.eventTime;if((n&m)===m){f!==null&&(f=f.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=t,P=l;switch(m=e,T=r,P.tag){case 1:if(S=P.payload,typeof S=="function"){p=S.call(T,p,m);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=P.payload,m=typeof S=="function"?S.call(T,p,m):S,m==null)break e;p=ke({},p,m);break e;case 2:pn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else T={eventTime:T,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=T,c=p):f=f.next=T,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);bi|=s,t.lanes=s,t.memoizedState=p}}function ny(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(M(191,i));i.call(n)}}}var ka={},br=jn(ka),ra=jn(ka),na=jn(ka);function si(t){if(t===ka)throw Error(M(174));return t}function Mp(t,e){switch(ye(na,e),ye(ra,t),ye(br,ka),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ch(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ch(e,t)}Ie(br),ye(br,e)}function bo(){Ie(br),Ie(ra),Ie(na)}function W0(t){si(na.current);var e=si(br.current),r=Ch(e,t.type);e!==r&&(ye(ra,t),ye(br,r))}function $p(t){ra.current===t&&(Ie(br),Ie(ra))}var Se=jn(0);function Ac(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Dd=[];function Fp(){for(var t=0;t<Dd.length;t++)Dd[t]._workInProgressVersionPrimary=null;Dd.length=0}var Kl=on.ReactCurrentDispatcher,Ld=on.ReactCurrentBatchConfig,wi=0,Ce=null,Be=null,Ke=null,Sc=!1,Ns=!1,ia=0,CS=0;function lt(){throw Error(M(321))}function Up(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!hr(t[r],e[r]))return!1;return!0}function zp(t,e,r,n,i,o){if(wi=o,Ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Kl.current=t===null||t.memoizedState===null?NS:OS,t=r(n,i),Ns){o=0;do{if(Ns=!1,ia=0,25<=o)throw Error(M(301));o+=1,Ke=Be=null,e.updateQueue=null,Kl.current=DS,t=r(n,i)}while(Ns)}if(Kl.current=Cc,e=Be!==null&&Be.next!==null,wi=0,Ke=Be=Ce=null,Sc=!1,e)throw Error(M(300));return t}function jp(){var t=ia!==0;return ia=0,t}function yr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Ce.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function Xt(){if(Be===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=Ke===null?Ce.memoizedState:Ke.next;if(e!==null)Ke=e,Be=t;else{if(t===null)throw Error(M(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ke===null?Ce.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function oa(t,e){return typeof e=="function"?e(t):e}function Vd(t){var e=Xt(),r=e.queue;if(r===null)throw Error(M(311));r.lastRenderedReducer=t;var n=Be,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var l=s=null,c=null,u=o;do{var f=u.lane;if((wi&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:t(n,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,s=n):c=c.next=p,Ce.lanes|=f,bi|=f}u=u.next}while(u!==null&&u!==o);c===null?s=n:c.next=l,hr(n,e.memoizedState)||(Pt=!0),e.memoizedState=n,e.baseState=s,e.baseQueue=c,r.lastRenderedState=n}if(t=r.interleaved,t!==null){i=t;do o=i.lane,Ce.lanes|=o,bi|=o,i=i.next;while(i!==t)}else i===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Md(t){var e=Xt(),r=e.queue;if(r===null)throw Error(M(311));r.lastRenderedReducer=t;var n=r.dispatch,i=r.pending,o=e.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);hr(o,e.memoizedState)||(Pt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),r.lastRenderedState=o}return[o,n]}function K0(){}function G0(t,e){var r=Ce,n=Xt(),i=e(),o=!hr(n.memoizedState,i);if(o&&(n.memoizedState=i,Pt=!0),n=n.queue,Bp(X0.bind(null,r,n,t),[t]),n.getSnapshot!==e||o||Ke!==null&&Ke.memoizedState.tag&1){if(r.flags|=2048,sa(9,Y0.bind(null,r,n,i,e),void 0,null),Ge===null)throw Error(M(349));wi&30||Q0(r,e,i)}return i}function Q0(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function Y0(t,e,r,n){e.value=r,e.getSnapshot=n,J0(e)&&Z0(t)}function X0(t,e,r){return r(function(){J0(e)&&Z0(t)})}function J0(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!hr(t,r)}catch{return!0}}function Z0(t){var e=Xr(t,1);e!==null&&ur(e,t,1,-1)}function iy(t){var e=yr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:t},e.queue=t,t=t.dispatch=PS.bind(null,Ce,t),[e.memoizedState,t]}function sa(t,e,r,n){return t={tag:t,create:e,destroy:r,deps:n,next:null},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,e.lastEffect=t)),t}function eb(){return Xt().memoizedState}function Gl(t,e,r,n){var i=yr();Ce.flags|=t,i.memoizedState=sa(1|e,r,void 0,n===void 0?null:n)}function lu(t,e,r,n){var i=Xt();n=n===void 0?null:n;var o=void 0;if(Be!==null){var s=Be.memoizedState;if(o=s.destroy,n!==null&&Up(n,s.deps)){i.memoizedState=sa(e,r,o,n);return}}Ce.flags|=t,i.memoizedState=sa(1|e,r,o,n)}function oy(t,e){return Gl(8390656,8,t,e)}function Bp(t,e){return lu(2048,8,t,e)}function tb(t,e){return lu(4,2,t,e)}function rb(t,e){return lu(4,4,t,e)}function nb(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ib(t,e,r){return r=r!=null?r.concat([t]):null,lu(4,4,nb.bind(null,e,t),r)}function qp(){}function ob(t,e){var r=Xt();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&Up(e,n[1])?n[0]:(r.memoizedState=[t,e],t)}function sb(t,e){var r=Xt();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&Up(e,n[1])?n[0]:(t=t(),r.memoizedState=[t,e],t)}function ab(t,e,r){return wi&21?(hr(r,e)||(r=h0(),Ce.lanes|=r,bi|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pt=!0),t.memoizedState=r)}function kS(t,e){var r=fe;fe=r!==0&&4>r?r:4,t(!0);var n=Ld.transition;Ld.transition={};try{t(!1),e()}finally{fe=r,Ld.transition=n}}function lb(){return Xt().memoizedState}function RS(t,e,r){var n=Pn(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},cb(t))ub(e,r);else if(r=q0(t,e,r,n),r!==null){var i=bt();ur(r,t,n,i),db(r,e,n)}}function PS(t,e,r){var n=Pn(t),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(cb(t))ub(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,r);if(i.hasEagerState=!0,i.eagerState=l,hr(l,s)){var c=e.interleaved;c===null?(i.next=i,Lp(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}r=q0(t,e,i,n),r!==null&&(i=bt(),ur(r,t,n,i),db(r,e,n))}}function cb(t){var e=t.alternate;return t===Ce||e!==null&&e===Ce}function ub(t,e){Ns=Sc=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function db(t,e,r){if(r&4194240){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,bp(t,r)}}var Cc={readContext:Yt,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},NS={readContext:Yt,useCallback:function(t,e){return yr().memoizedState=[t,e===void 0?null:e],t},useContext:Yt,useEffect:oy,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,Gl(4194308,4,nb.bind(null,e,t),r)},useLayoutEffect:function(t,e){return Gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gl(4,2,t,e)},useMemo:function(t,e){var r=yr();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var n=yr();return e=r!==void 0?r(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=RS.bind(null,Ce,t),[n.memoizedState,t]},useRef:function(t){var e=yr();return t={current:t},e.memoizedState=t},useState:iy,useDebugValue:qp,useDeferredValue:function(t){return yr().memoizedState=t},useTransition:function(){var t=iy(!1),e=t[0];return t=kS.bind(null,t[1]),yr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var n=Ce,i=yr();if(Te){if(r===void 0)throw Error(M(407));r=r()}else{if(r=e(),Ge===null)throw Error(M(349));wi&30||Q0(n,e,r)}i.memoizedState=r;var o={value:r,getSnapshot:e};return i.queue=o,oy(X0.bind(null,n,o,t),[t]),n.flags|=2048,sa(9,Y0.bind(null,n,o,r,e),void 0,null),r},useId:function(){var t=yr(),e=Ge.identifierPrefix;if(Te){var r=jr,n=zr;r=(n&~(1<<32-cr(n)-1)).toString(32)+r,e=":"+e+"R"+r,r=ia++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=CS++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},OS={readContext:Yt,useCallback:ob,useContext:Yt,useEffect:Bp,useImperativeHandle:ib,useInsertionEffect:tb,useLayoutEffect:rb,useMemo:sb,useReducer:Vd,useRef:eb,useState:function(){return Vd(oa)},useDebugValue:qp,useDeferredValue:function(t){var e=Xt();return ab(e,Be.memoizedState,t)},useTransition:function(){var t=Vd(oa)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:K0,useSyncExternalStore:G0,useId:lb,unstable_isNewReconciler:!1},DS={readContext:Yt,useCallback:ob,useContext:Yt,useEffect:Bp,useImperativeHandle:ib,useInsertionEffect:tb,useLayoutEffect:rb,useMemo:sb,useReducer:Md,useRef:eb,useState:function(){return Md(oa)},useDebugValue:qp,useDeferredValue:function(t){var e=Xt();return Be===null?e.memoizedState=t:ab(e,Be.memoizedState,t)},useTransition:function(){var t=Md(oa)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:K0,useSyncExternalStore:G0,useId:lb,unstable_isNewReconciler:!1};function or(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Qh(t,e,r,n){e=t.memoizedState,r=r(n,e),r=r==null?e:ke({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var cu={isMounted:function(t){return(t=t._reactInternals)?Ni(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var n=bt(),i=Pn(t),o=Wr(n,i);o.payload=e,r!=null&&(o.callback=r),e=kn(t,o,i),e!==null&&(ur(e,t,i,n),Wl(e,t,i))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var n=bt(),i=Pn(t),o=Wr(n,i);o.tag=1,o.payload=e,r!=null&&(o.callback=r),e=kn(t,o,i),e!==null&&(ur(e,t,i,n),Wl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=bt(),n=Pn(t),i=Wr(r,n);i.tag=2,e!=null&&(i.callback=e),e=kn(t,i,n),e!==null&&(ur(e,t,n,r),Wl(e,t,n))}};function sy(t,e,r,n,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,o,s):e.prototype&&e.prototype.isPureReactComponent?!Js(r,n)||!Js(i,o):!0}function hb(t,e,r){var n=!1,i=Mn,o=e.contextType;return typeof o=="object"&&o!==null?o=Yt(o):(i=Ot(e)?yi:mt.current,n=e.contextTypes,o=(n=n!=null)?yo(t,i):Mn),e=new e(r,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cu,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function ay(t,e,r,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,n),e.state!==t&&cu.enqueueReplaceState(e,e.state,null)}function Yh(t,e,r,n){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs={},Vp(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Yt(o):(o=Ot(e)?yi:mt.current,i.context=yo(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Qh(t,e,o,r),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&cu.enqueueReplaceState(i,i.state,null),xc(t,r,i,n),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Eo(t,e){try{var r="",n=e;do r+=lA(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function $d(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Xh(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var LS=typeof WeakMap=="function"?WeakMap:Map;function fb(t,e,r){r=Wr(-1,r),r.tag=3,r.payload={element:null};var n=e.value;return r.callback=function(){Rc||(Rc=!0,lf=n),Xh(t,e)},r}function pb(t,e,r){r=Wr(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=e.value;r.payload=function(){return n(i)},r.callback=function(){Xh(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Xh(t,e),typeof n!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),r}function ly(t,e,r){var n=t.pingCache;if(n===null){n=t.pingCache=new LS;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(r)||(i.add(r),t=QS.bind(null,t,e,r),e.then(t,t))}function cy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function uy(t,e,r,n,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Wr(-1,1),e.tag=2,kn(r,e,1))),r.lanes|=1),t)}var VS=on.ReactCurrentOwner,Pt=!1;function wt(t,e,r,n){e.child=t===null?B0(e,null,r,n):wo(e,t.child,r,n)}function dy(t,e,r,n,i){r=r.render;var o=e.ref;return uo(e,i),n=zp(t,e,r,n,o,i),r=jp(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jr(t,e,i)):(Te&&r&&kp(e),e.flags|=1,wt(t,e,n,i),e.child)}function hy(t,e,r,n,i){if(t===null){var o=r.type;return typeof o=="function"&&!Jp(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=o,mb(t,e,o,n,i)):(t=Jl(r.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(r=r.compare,r=r!==null?r:Js,r(s,n)&&t.ref===e.ref)return Jr(t,e,i)}return e.flags|=1,t=Nn(o,n),t.ref=e.ref,t.return=e,e.child=t}function mb(t,e,r,n,i){if(t!==null){var o=t.memoizedProps;if(Js(o,n)&&t.ref===e.ref)if(Pt=!1,e.pendingProps=n=o,(t.lanes&i)!==0)t.flags&131072&&(Pt=!0);else return e.lanes=t.lanes,Jr(t,e,i)}return Jh(t,e,r,n,i)}function gb(t,e,r){var n=e.pendingProps,i=n.children,o=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(oo,Vt),Vt|=r;else{if(!(r&1073741824))return t=o!==null?o.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(oo,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,ye(oo,Vt),Vt|=n}else o!==null?(n=o.baseLanes|r,e.memoizedState=null):n=r,ye(oo,Vt),Vt|=n;return wt(t,e,i,r),e.child}function vb(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Jh(t,e,r,n,i){var o=Ot(r)?yi:mt.current;return o=yo(e,o),uo(e,i),r=zp(t,e,r,n,o,i),n=jp(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jr(t,e,i)):(Te&&n&&kp(e),e.flags|=1,wt(t,e,r,i),e.child)}function fy(t,e,r,n,i){if(Ot(r)){var o=!0;wc(e)}else o=!1;if(uo(e,i),e.stateNode===null)Ql(t,e),hb(e,r,n),Yh(e,r,n,i),n=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var c=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=Yt(u):(u=Ot(r)?yi:mt.current,u=yo(e,u));var f=r.getDerivedStateFromProps,p=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==n||c!==u)&&ay(e,s,n,u),pn=!1;var m=e.memoizedState;s.state=m,xc(e,n,s,i),c=e.memoizedState,l!==n||m!==c||Nt.current||pn?(typeof f=="function"&&(Qh(e,r,f,n),c=e.memoizedState),(l=pn||sy(e,r,l,n,m,c,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=c),s.props=n,s.state=c,s.context=u,n=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{s=e.stateNode,H0(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:or(e.type,l),s.props=u,p=e.pendingProps,m=s.context,c=r.contextType,typeof c=="object"&&c!==null?c=Yt(c):(c=Ot(r)?yi:mt.current,c=yo(e,c));var T=r.getDerivedStateFromProps;(f=typeof T=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||m!==c)&&ay(e,s,n,c),pn=!1,m=e.memoizedState,s.state=m,xc(e,n,s,i);var S=e.memoizedState;l!==p||m!==S||Nt.current||pn?(typeof T=="function"&&(Qh(e,r,T,n),S=e.memoizedState),(u=pn||sy(e,r,u,n,m,S,c)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,S,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,S,c)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=S),s.props=n,s.state=S,s.context=c,n=u):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),n=!1)}return Zh(t,e,r,n,o,i)}function Zh(t,e,r,n,i,o){vb(t,e);var s=(e.flags&128)!==0;if(!n&&!s)return i&&Jv(e,r,!1),Jr(t,e,o);n=e.stateNode,VS.current=e;var l=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&s?(e.child=wo(e,t.child,null,o),e.child=wo(e,null,l,o)):wt(t,e,l,o),e.memoizedState=n.state,i&&Jv(e,r,!0),e.child}function yb(t){var e=t.stateNode;e.pendingContext?Xv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xv(t,e.context,!1),Mp(t,e.containerInfo)}function py(t,e,r,n,i){return _o(),Pp(i),e.flags|=256,wt(t,e,r,n),e.child}var ef={dehydrated:null,treeContext:null,retryLane:0};function tf(t){return{baseLanes:t,cachePool:null,transitions:null}}function _b(t,e,r){var n=e.pendingProps,i=Se.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Se,i&1),t===null)return Kh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=n.children,t=n.fallback,o?(n=e.mode,o=e.child,s={mode:"hidden",children:s},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=hu(s,n,0,null),t=fi(t,n,r,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=tf(r),e.memoizedState=ef,t):Hp(e,s));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return MS(t,e,s,n,l,i,r);if(o){o=n.fallback,s=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:n.children};return!(s&1)&&e.child!==i?(n=e.child,n.childLanes=0,n.pendingProps=c,e.deletions=null):(n=Nn(i,c),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Nn(l,o):(o=fi(o,s,r,null),o.flags|=2),o.return=e,n.return=e,n.sibling=o,e.child=n,n=o,o=e.child,s=t.child.memoizedState,s=s===null?tf(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~r,e.memoizedState=ef,n}return o=t.child,t=o.sibling,n=Nn(o,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n}function Hp(t,e){return e=hu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bl(t,e,r,n){return n!==null&&Pp(n),wo(e,t.child,null,r),t=Hp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function MS(t,e,r,n,i,o,s){if(r)return e.flags&256?(e.flags&=-257,n=$d(Error(M(422))),bl(t,e,s,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=n.fallback,i=e.mode,n=hu({mode:"visible",children:n.children},i,0,null),o=fi(o,i,s,null),o.flags|=2,n.return=e,o.return=e,n.sibling=o,e.child=n,e.mode&1&&wo(e,t.child,null,s),e.child.memoizedState=tf(s),e.memoizedState=ef,o);if(!(e.mode&1))return bl(t,e,s,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(M(419)),n=$d(o,n,void 0),bl(t,e,s,n)}if(l=(s&t.childLanes)!==0,Pt||l){if(n=Ge,n!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Xr(t,i),ur(n,t,i,-1))}return Xp(),n=$d(Error(M(421))),bl(t,e,s,n)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=YS.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Mt=Cn(i.nextSibling),Ft=e,Te=!0,ar=null,t!==null&&(Bt[qt++]=zr,Bt[qt++]=jr,Bt[qt++]=_i,zr=t.id,jr=t.overflow,_i=e),e=Hp(e,n.children),e.flags|=4096,e)}function my(t,e,r){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Gh(t.return,e,r)}function Fd(t,e,r,n,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function wb(t,e,r){var n=e.pendingProps,i=n.revealOrder,o=n.tail;if(wt(t,e,n.children,r),n=Se.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&my(t,r,e);else if(t.tag===19)my(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(ye(Se,n),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(r=e.child,i=null;r!==null;)t=r.alternate,t!==null&&Ac(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=e.child,e.child=null):(i=r.sibling,r.sibling=null),Fd(e,!1,i,r,o);break;case"backwards":for(r=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ac(t)===null){e.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}Fd(e,!0,r,null,o);break;case"together":Fd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ql(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Jr(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),bi|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,r=Nn(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=Nn(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function $S(t,e,r){switch(e.tag){case 3:yb(e),_o();break;case 5:W0(e);break;case 1:Ot(e.type)&&wc(e);break;case 4:Mp(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,i=e.memoizedProps.value;ye(Ic,n._currentValue),n._currentValue=i;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(ye(Se,Se.current&1),e.flags|=128,null):r&e.child.childLanes?_b(t,e,r):(ye(Se,Se.current&1),t=Jr(t,e,r),t!==null?t.sibling:null);ye(Se,Se.current&1);break;case 19:if(n=(r&e.childLanes)!==0,t.flags&128){if(n)return wb(t,e,r);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Se,Se.current),n)break;return null;case 22:case 23:return e.lanes=0,gb(t,e,r)}return Jr(t,e,r)}var bb,rf,Eb,Ib;bb=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};rf=function(){};Eb=function(t,e,r,n){var i=t.memoizedProps;if(i!==n){t=e.stateNode,si(br.current);var o=null;switch(r){case"input":i=Th(t,i),n=Th(t,n),o=[];break;case"select":i=ke({},i,{value:void 0}),n=ke({},n,{value:void 0}),o=[];break;case"textarea":i=Sh(t,i),n=Sh(t,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=yc)}kh(r,n);var s;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Hs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var c=n[u];if(l=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(r||(r={}),r[s]=c[s])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Hs.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&be("scroll",t),o||l===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Ib=function(t,e,r,n){r!==n&&(e.flags|=4)};function ds(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,n=0;if(e)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=r,e}function FS(t,e,r){var n=e.pendingProps;switch(Rp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(e),null;case 1:return Ot(e.type)&&_c(),ct(e),null;case 3:return n=e.stateNode,bo(),Ie(Nt),Ie(mt),Fp(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(_l(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ar!==null&&(df(ar),ar=null))),rf(t,e),ct(e),null;case 5:$p(e);var i=si(na.current);if(r=e.type,t!==null&&e.stateNode!=null)Eb(t,e,r,n,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(M(166));return ct(e),null}if(t=si(br.current),_l(e)){n=e.stateNode,r=e.type;var o=e.memoizedProps;switch(n[_r]=e,n[ta]=o,t=(e.mode&1)!==0,r){case"dialog":be("cancel",n),be("close",n);break;case"iframe":case"object":case"embed":be("load",n);break;case"video":case"audio":for(i=0;i<ws.length;i++)be(ws[i],n);break;case"source":be("error",n);break;case"img":case"image":case"link":be("error",n),be("load",n);break;case"details":be("toggle",n);break;case"input":Tv(n,o),be("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},be("invalid",n);break;case"textarea":Av(n,o),be("invalid",n)}kh(r,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&yl(n.textContent,l,t),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&yl(n.textContent,l,t),i=["children",""+l]):Hs.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&be("scroll",n)}switch(r){case"input":ul(n),xv(n,o,!0);break;case"textarea":ul(n),Sv(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=yc)}n=i,e.updateQueue=n,n!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xw(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=s.createElement(r,{is:n.is}):(t=s.createElement(r),r==="select"&&(s=t,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):t=s.createElementNS(t,r),t[_r]=e,t[ta]=n,bb(t,e,!1,!1),e.stateNode=t;e:{switch(s=Rh(r,n),r){case"dialog":be("cancel",t),be("close",t),i=n;break;case"iframe":case"object":case"embed":be("load",t),i=n;break;case"video":case"audio":for(i=0;i<ws.length;i++)be(ws[i],t);i=n;break;case"source":be("error",t),i=n;break;case"img":case"image":case"link":be("error",t),be("load",t),i=n;break;case"details":be("toggle",t),i=n;break;case"input":Tv(t,n),i=Th(t,n),be("invalid",t);break;case"option":i=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},i=ke({},n,{value:void 0}),be("invalid",t);break;case"textarea":Av(t,n),i=Sh(t,n),be("invalid",t);break;default:i=n}kh(r,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?e0(t,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Jw(t,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Ws(t,c):typeof c=="number"&&Ws(t,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Hs.hasOwnProperty(o)?c!=null&&o==="onScroll"&&be("scroll",t):c!=null&&mp(t,o,c,s))}switch(r){case"input":ul(t),xv(t,n,!1);break;case"textarea":ul(t),Sv(t);break;case"option":n.value!=null&&t.setAttribute("value",""+Vn(n.value));break;case"select":t.multiple=!!n.multiple,o=n.value,o!=null?so(t,!!n.multiple,o,!1):n.defaultValue!=null&&so(t,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=yc)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ct(e),null;case 6:if(t&&e.stateNode!=null)Ib(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(M(166));if(r=si(na.current),si(br.current),_l(e)){if(n=e.stateNode,r=e.memoizedProps,n[_r]=e,(o=n.nodeValue!==r)&&(t=Ft,t!==null))switch(t.tag){case 3:yl(n.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yl(n.nodeValue,r,(t.mode&1)!==0)}o&&(e.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[_r]=e,e.stateNode=n}return ct(e),null;case 13:if(Ie(Se),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&Mt!==null&&e.mode&1&&!(e.flags&128))z0(),_o(),e.flags|=98560,o=!1;else if(o=_l(e),n!==null&&n.dehydrated!==null){if(t===null){if(!o)throw Error(M(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(M(317));o[_r]=e}else _o(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ct(e),o=!1}else ar!==null&&(df(ar),ar=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||Se.current&1?qe===0&&(qe=3):Xp())),e.updateQueue!==null&&(e.flags|=4),ct(e),null);case 4:return bo(),rf(t,e),t===null&&Zs(e.stateNode.containerInfo),ct(e),null;case 10:return Dp(e.type._context),ct(e),null;case 17:return Ot(e.type)&&_c(),ct(e),null;case 19:if(Ie(Se),o=e.memoizedState,o===null)return ct(e),null;if(n=(e.flags&128)!==0,s=o.rendering,s===null)if(n)ds(o,!1);else{if(qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Ac(t),s!==null){for(e.flags|=128,ds(o,!1),n=s.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=r,r=e.child;r!==null;)o=r,t=n,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return ye(Se,Se.current&1|2),e.child}t=t.sibling}o.tail!==null&&Me()>Io&&(e.flags|=128,n=!0,ds(o,!1),e.lanes=4194304)}else{if(!n)if(t=Ac(s),t!==null){if(e.flags|=128,n=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),ds(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Te)return ct(e),null}else 2*Me()-o.renderingStartTime>Io&&r!==1073741824&&(e.flags|=128,n=!0,ds(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(r=o.last,r!==null?r.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Me(),e.sibling=null,r=Se.current,ye(Se,n?r&1|2:r&1),e):(ct(e),null);case 22:case 23:return Yp(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?Vt&1073741824&&(ct(e),e.subtreeFlags&6&&(e.flags|=8192)):ct(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function US(t,e){switch(Rp(e),e.tag){case 1:return Ot(e.type)&&_c(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return bo(),Ie(Nt),Ie(mt),Fp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $p(e),null;case 13:if(Ie(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));_o()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(Se),null;case 4:return bo(),null;case 10:return Dp(e.type._context),null;case 22:case 23:return Yp(),null;case 24:return null;default:return null}}var El=!1,ht=!1,zS=typeof WeakSet=="function"?WeakSet:Set,W=null;function io(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Ne(t,e,n)}else r.current=null}function nf(t,e,r){try{r()}catch(n){Ne(t,e,n)}}var gy=!1;function jS(t,e){if(Uh=mc,t=C0(),Cp(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var s=0,l=-1,c=-1,u=0,f=0,p=t,m=null;t:for(;;){for(var T;p!==r||i!==0&&p.nodeType!==3||(l=s+i),p!==o||n!==0&&p.nodeType!==3||(c=s+n),p.nodeType===3&&(s+=p.nodeValue.length),(T=p.firstChild)!==null;)m=p,p=T;for(;;){if(p===t)break t;if(m===r&&++u===i&&(l=s),m===o&&++f===n&&(c=s),(T=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=T}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(zh={focusedElem:t,selectionRange:r},mc=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var P=S.memoizedProps,N=S.memoizedState,b=e.stateNode,y=b.getSnapshotBeforeUpdate(e.elementType===e.type?P:or(e.type,P),N);b.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(D){Ne(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return S=gy,gy=!1,S}function Os(t,e,r){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&nf(e,r,o)}i=i.next}while(i!==n)}}function uu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==e)}}function of(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Tb(t){var e=t.alternate;e!==null&&(t.alternate=null,Tb(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_r],delete e[ta],delete e[qh],delete e[TS],delete e[xS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function xb(t){return t.tag===5||t.tag===3||t.tag===4}function vy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xb(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sf(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=yc));else if(n!==4&&(t=t.child,t!==null))for(sf(t,e,r),t=t.sibling;t!==null;)sf(t,e,r),t=t.sibling}function af(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(af(t,e,r),t=t.sibling;t!==null;)af(t,e,r),t=t.sibling}var Ye=null,sr=!1;function dn(t,e,r){for(r=r.child;r!==null;)Ab(t,e,r),r=r.sibling}function Ab(t,e,r){if(wr&&typeof wr.onCommitFiberUnmount=="function")try{wr.onCommitFiberUnmount(ru,r)}catch{}switch(r.tag){case 5:ht||io(r,e);case 6:var n=Ye,i=sr;Ye=null,dn(t,e,r),Ye=n,sr=i,Ye!==null&&(sr?(t=Ye,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Ye.removeChild(r.stateNode));break;case 18:Ye!==null&&(sr?(t=Ye,r=r.stateNode,t.nodeType===8?Nd(t.parentNode,r):t.nodeType===1&&Nd(t,r),Ys(t)):Nd(Ye,r.stateNode));break;case 4:n=Ye,i=sr,Ye=r.stateNode.containerInfo,sr=!0,dn(t,e,r),Ye=n,sr=i;break;case 0:case 11:case 14:case 15:if(!ht&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&nf(r,e,s),i=i.next}while(i!==n)}dn(t,e,r);break;case 1:if(!ht&&(io(r,e),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){Ne(r,e,l)}dn(t,e,r);break;case 21:dn(t,e,r);break;case 22:r.mode&1?(ht=(n=ht)||r.memoizedState!==null,dn(t,e,r),ht=n):dn(t,e,r);break;default:dn(t,e,r)}}function yy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new zS),e.forEach(function(n){var i=XS.bind(null,t,n);r.has(n)||(r.add(n),n.then(i,i))})}}function nr(t,e){var r=e.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:Ye=l.stateNode,sr=!1;break e;case 3:Ye=l.stateNode.containerInfo,sr=!0;break e;case 4:Ye=l.stateNode.containerInfo,sr=!0;break e}l=l.return}if(Ye===null)throw Error(M(160));Ab(o,s,i),Ye=null,sr=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sb(e,t),e=e.sibling}function Sb(t,e){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(nr(e,t),gr(t),n&4){try{Os(3,t,t.return),uu(3,t)}catch(P){Ne(t,t.return,P)}try{Os(5,t,t.return)}catch(P){Ne(t,t.return,P)}}break;case 1:nr(e,t),gr(t),n&512&&r!==null&&io(r,r.return);break;case 5:if(nr(e,t),gr(t),n&512&&r!==null&&io(r,r.return),t.flags&32){var i=t.stateNode;try{Ws(i,"")}catch(P){Ne(t,t.return,P)}}if(n&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=r!==null?r.memoizedProps:o,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Qw(i,o),Rh(l,s);var u=Rh(l,o);for(s=0;s<c.length;s+=2){var f=c[s],p=c[s+1];f==="style"?e0(i,p):f==="dangerouslySetInnerHTML"?Jw(i,p):f==="children"?Ws(i,p):mp(i,f,p,u)}switch(l){case"input":xh(i,o);break;case"textarea":Yw(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var T=o.value;T!=null?so(i,!!o.multiple,T,!1):m!==!!o.multiple&&(o.defaultValue!=null?so(i,!!o.multiple,o.defaultValue,!0):so(i,!!o.multiple,o.multiple?[]:"",!1))}i[ta]=o}catch(P){Ne(t,t.return,P)}}break;case 6:if(nr(e,t),gr(t),n&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(P){Ne(t,t.return,P)}}break;case 3:if(nr(e,t),gr(t),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Ys(e.containerInfo)}catch(P){Ne(t,t.return,P)}break;case 4:nr(e,t),gr(t);break;case 13:nr(e,t),gr(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Gp=Me())),n&4&&yy(t);break;case 22:if(f=r!==null&&r.memoizedState!==null,t.mode&1?(ht=(u=ht)||f,nr(e,t),ht=u):nr(e,t),gr(t),n&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(p=W=f;W!==null;){switch(m=W,T=m.child,m.tag){case 0:case 11:case 14:case 15:Os(4,m,m.return);break;case 1:io(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){n=m,r=m.return;try{e=n,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(P){Ne(n,r,P)}}break;case 5:io(m,m.return);break;case 22:if(m.memoizedState!==null){wy(p);continue}}T!==null?(T.return=m,W=T):wy(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Zw("display",s))}catch(P){Ne(t,t.return,P)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(P){Ne(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:nr(e,t),gr(t),n&4&&yy(t);break;case 21:break;default:nr(e,t),gr(t)}}function gr(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(xb(r)){var n=r;break e}r=r.return}throw Error(M(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Ws(i,""),n.flags&=-33);var o=vy(t);af(t,o,i);break;case 3:case 4:var s=n.stateNode.containerInfo,l=vy(t);sf(t,l,s);break;default:throw Error(M(161))}}catch(c){Ne(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function BS(t,e,r){W=t,Cb(t)}function Cb(t,e,r){for(var n=(t.mode&1)!==0;W!==null;){var i=W,o=i.child;if(i.tag===22&&n){var s=i.memoizedState!==null||El;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||ht;l=El;var u=ht;if(El=s,(ht=c)&&!u)for(W=i;W!==null;)s=W,c=s.child,s.tag===22&&s.memoizedState!==null?by(i):c!==null?(c.return=s,W=c):by(i);for(;o!==null;)W=o,Cb(o),o=o.sibling;W=i,El=l,ht=u}_y(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,W=o):_y(t)}}function _y(t){for(;W!==null;){var e=W;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ht||uu(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!ht)if(r===null)n.componentDidMount();else{var i=e.elementType===e.type?r.memoizedProps:or(e.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&ny(e,o,n);break;case 3:var s=e.updateQueue;if(s!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}ny(e,s,r)}break;case 5:var l=e.stateNode;if(r===null&&e.flags&4){r=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Ys(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}ht||e.flags&512&&of(e)}catch(m){Ne(e,e.return,m)}}if(e===t){W=null;break}if(r=e.sibling,r!==null){r.return=e.return,W=r;break}W=e.return}}function wy(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var r=e.sibling;if(r!==null){r.return=e.return,W=r;break}W=e.return}}function by(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{uu(4,e)}catch(c){Ne(e,r,c)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var i=e.return;try{n.componentDidMount()}catch(c){Ne(e,i,c)}}var o=e.return;try{of(e)}catch(c){Ne(e,o,c)}break;case 5:var s=e.return;try{of(e)}catch(c){Ne(e,s,c)}}}catch(c){Ne(e,e.return,c)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var qS=Math.ceil,kc=on.ReactCurrentDispatcher,Wp=on.ReactCurrentOwner,Kt=on.ReactCurrentBatchConfig,ce=0,Ge=null,Ue=null,et=0,Vt=0,oo=jn(0),qe=0,aa=null,bi=0,du=0,Kp=0,Ds=null,kt=null,Gp=0,Io=1/0,Mr=null,Rc=!1,lf=null,Rn=null,Il=!1,In=null,Pc=0,Ls=0,cf=null,Yl=-1,Xl=0;function bt(){return ce&6?Me():Yl!==-1?Yl:Yl=Me()}function Pn(t){return t.mode&1?ce&2&&et!==0?et&-et:SS.transition!==null?(Xl===0&&(Xl=h0()),Xl):(t=fe,t!==0||(t=window.event,t=t===void 0?16:_0(t.type)),t):1}function ur(t,e,r,n){if(50<Ls)throw Ls=0,cf=null,Error(M(185));Aa(t,r,n),(!(ce&2)||t!==Ge)&&(t===Ge&&(!(ce&2)&&(du|=r),qe===4&&vn(t,et)),Dt(t,n),r===1&&ce===0&&!(e.mode&1)&&(Io=Me()+500,au&&Bn()))}function Dt(t,e){var r=t.callbackNode;SA(t,e);var n=pc(t,t===Ge?et:0);if(n===0)r!==null&&Rv(r),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(r!=null&&Rv(r),e===1)t.tag===0?AS(Ey.bind(null,t)):$0(Ey.bind(null,t)),ES(function(){!(ce&6)&&Bn()}),r=null;else{switch(f0(n)){case 1:r=wp;break;case 4:r=u0;break;case 16:r=fc;break;case 536870912:r=d0;break;default:r=fc}r=Vb(r,kb.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function kb(t,e){if(Yl=-1,Xl=0,ce&6)throw Error(M(327));var r=t.callbackNode;if(ho()&&t.callbackNode!==r)return null;var n=pc(t,t===Ge?et:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=Nc(t,n);else{e=n;var i=ce;ce|=2;var o=Pb();(Ge!==t||et!==e)&&(Mr=null,Io=Me()+500,hi(t,e));do try{KS();break}catch(l){Rb(t,l)}while(!0);Op(),kc.current=o,ce=i,Ue!==null?e=0:(Ge=null,et=0,e=qe)}if(e!==0){if(e===2&&(i=Lh(t),i!==0&&(n=i,e=uf(t,i))),e===1)throw r=aa,hi(t,0),vn(t,n),Dt(t,Me()),r;if(e===6)vn(t,n);else{if(i=t.current.alternate,!(n&30)&&!HS(i)&&(e=Nc(t,n),e===2&&(o=Lh(t),o!==0&&(n=o,e=uf(t,o))),e===1))throw r=aa,hi(t,0),vn(t,n),Dt(t,Me()),r;switch(t.finishedWork=i,t.finishedLanes=n,e){case 0:case 1:throw Error(M(345));case 2:ri(t,kt,Mr);break;case 3:if(vn(t,n),(n&130023424)===n&&(e=Gp+500-Me(),10<e)){if(pc(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){bt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Bh(ri.bind(null,t,kt,Mr),e);break}ri(t,kt,Mr);break;case 4:if(vn(t,n),(n&4194240)===n)break;for(e=t.eventTimes,i=-1;0<n;){var s=31-cr(n);o=1<<s,s=e[s],s>i&&(i=s),n&=~o}if(n=i,n=Me()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*qS(n/1960))-n,10<n){t.timeoutHandle=Bh(ri.bind(null,t,kt,Mr),n);break}ri(t,kt,Mr);break;case 5:ri(t,kt,Mr);break;default:throw Error(M(329))}}}return Dt(t,Me()),t.callbackNode===r?kb.bind(null,t):null}function uf(t,e){var r=Ds;return t.current.memoizedState.isDehydrated&&(hi(t,e).flags|=256),t=Nc(t,e),t!==2&&(e=kt,kt=r,e!==null&&df(e)),t}function df(t){kt===null?kt=t:kt.push.apply(kt,t)}function HS(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!hr(o(),i))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vn(t,e){for(e&=~Kp,e&=~du,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-cr(e),n=1<<r;t[r]=-1,e&=~n}}function Ey(t){if(ce&6)throw Error(M(327));ho();var e=pc(t,0);if(!(e&1))return Dt(t,Me()),null;var r=Nc(t,e);if(t.tag!==0&&r===2){var n=Lh(t);n!==0&&(e=n,r=uf(t,n))}if(r===1)throw r=aa,hi(t,0),vn(t,e),Dt(t,Me()),r;if(r===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ri(t,kt,Mr),Dt(t,Me()),null}function Qp(t,e){var r=ce;ce|=1;try{return t(e)}finally{ce=r,ce===0&&(Io=Me()+500,au&&Bn())}}function Ei(t){In!==null&&In.tag===0&&!(ce&6)&&ho();var e=ce;ce|=1;var r=Kt.transition,n=fe;try{if(Kt.transition=null,fe=1,t)return t()}finally{fe=n,Kt.transition=r,ce=e,!(ce&6)&&Bn()}}function Yp(){Vt=oo.current,Ie(oo)}function hi(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,bS(r)),Ue!==null)for(r=Ue.return;r!==null;){var n=r;switch(Rp(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&_c();break;case 3:bo(),Ie(Nt),Ie(mt),Fp();break;case 5:$p(n);break;case 4:bo();break;case 13:Ie(Se);break;case 19:Ie(Se);break;case 10:Dp(n.type._context);break;case 22:case 23:Yp()}r=r.return}if(Ge=t,Ue=t=Nn(t.current,null),et=Vt=e,qe=0,aa=null,Kp=du=bi=0,kt=Ds=null,oi!==null){for(e=0;e<oi.length;e++)if(r=oi[e],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var s=o.next;o.next=i,n.next=s}r.pending=n}oi=null}return t}function Rb(t,e){do{var r=Ue;try{if(Op(),Kl.current=Cc,Sc){for(var n=Ce.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Sc=!1}if(wi=0,Ke=Be=Ce=null,Ns=!1,ia=0,Wp.current=null,r===null||r.return===null){qe=1,aa=e,Ue=null;break}e:{var o=t,s=r.return,l=r,c=e;if(e=et,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var T=cy(s);if(T!==null){T.flags&=-257,uy(T,s,l,o,e),T.mode&1&&ly(o,u,e),e=T,c=u;var S=e.updateQueue;if(S===null){var P=new Set;P.add(c),e.updateQueue=P}else S.add(c);break e}else{if(!(e&1)){ly(o,u,e),Xp();break e}c=Error(M(426))}}else if(Te&&l.mode&1){var N=cy(s);if(N!==null){!(N.flags&65536)&&(N.flags|=256),uy(N,s,l,o,e),Pp(Eo(c,l));break e}}o=c=Eo(c,l),qe!==4&&(qe=2),Ds===null?Ds=[o]:Ds.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var b=fb(o,c,e);ry(o,b);break e;case 1:l=c;var y=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Rn===null||!Rn.has(x)))){o.flags|=65536,e&=-e,o.lanes|=e;var D=pb(o,l,e);ry(o,D);break e}}o=o.return}while(o!==null)}Ob(r)}catch(U){e=U,Ue===r&&r!==null&&(Ue=r=r.return);continue}break}while(!0)}function Pb(){var t=kc.current;return kc.current=Cc,t===null?Cc:t}function Xp(){(qe===0||qe===3||qe===2)&&(qe=4),Ge===null||!(bi&268435455)&&!(du&268435455)||vn(Ge,et)}function Nc(t,e){var r=ce;ce|=2;var n=Pb();(Ge!==t||et!==e)&&(Mr=null,hi(t,e));do try{WS();break}catch(i){Rb(t,i)}while(!0);if(Op(),ce=r,kc.current=n,Ue!==null)throw Error(M(261));return Ge=null,et=0,qe}function WS(){for(;Ue!==null;)Nb(Ue)}function KS(){for(;Ue!==null&&!yA();)Nb(Ue)}function Nb(t){var e=Lb(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?Ob(t):Ue=e,Wp.current=null}function Ob(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=US(r,e),r!==null){r.flags&=32767,Ue=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qe=6,Ue=null;return}}else if(r=FS(r,e,Vt),r!==null){Ue=r;return}if(e=e.sibling,e!==null){Ue=e;return}Ue=e=t}while(e!==null);qe===0&&(qe=5)}function ri(t,e,r){var n=fe,i=Kt.transition;try{Kt.transition=null,fe=1,GS(t,e,r,n)}finally{Kt.transition=i,fe=n}return null}function GS(t,e,r,n){do ho();while(In!==null);if(ce&6)throw Error(M(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var o=r.lanes|r.childLanes;if(CA(t,o),t===Ge&&(Ue=Ge=null,et=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Il||(Il=!0,Vb(fc,function(){return ho(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Kt.transition,Kt.transition=null;var s=fe;fe=1;var l=ce;ce|=4,Wp.current=null,jS(t,r),Sb(r,t),pS(zh),mc=!!Uh,zh=Uh=null,t.current=r,BS(r),_A(),ce=l,fe=s,Kt.transition=o}else t.current=r;if(Il&&(Il=!1,In=t,Pc=i),o=t.pendingLanes,o===0&&(Rn=null),EA(r.stateNode),Dt(t,Me()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)i=e[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Rc)throw Rc=!1,t=lf,lf=null,t;return Pc&1&&t.tag!==0&&ho(),o=t.pendingLanes,o&1?t===cf?Ls++:(Ls=0,cf=t):Ls=0,Bn(),null}function ho(){if(In!==null){var t=f0(Pc),e=Kt.transition,r=fe;try{if(Kt.transition=null,fe=16>t?16:t,In===null)var n=!1;else{if(t=In,In=null,Pc=0,ce&6)throw Error(M(331));var i=ce;for(ce|=4,W=t.current;W!==null;){var o=W,s=o.child;if(W.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(W=u;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:Os(8,f,o)}var p=f.child;if(p!==null)p.return=f,W=p;else for(;W!==null;){f=W;var m=f.sibling,T=f.return;if(Tb(f),f===u){W=null;break}if(m!==null){m.return=T,W=m;break}W=T}}}var S=o.alternate;if(S!==null){var P=S.child;if(P!==null){S.child=null;do{var N=P.sibling;P.sibling=null,P=N}while(P!==null)}}W=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,W=s;else e:for(;W!==null;){if(o=W,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Os(9,o,o.return)}var b=o.sibling;if(b!==null){b.return=o.return,W=b;break e}W=o.return}}var y=t.current;for(W=y;W!==null;){s=W;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,W=x;else e:for(s=y;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:uu(9,l)}}catch(U){Ne(l,l.return,U)}if(l===s){W=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,W=D;break e}W=l.return}}if(ce=i,Bn(),wr&&typeof wr.onPostCommitFiberRoot=="function")try{wr.onPostCommitFiberRoot(ru,t)}catch{}n=!0}return n}finally{fe=r,Kt.transition=e}}return!1}function Iy(t,e,r){e=Eo(r,e),e=fb(t,e,1),t=kn(t,e,1),e=bt(),t!==null&&(Aa(t,1,e),Dt(t,e))}function Ne(t,e,r){if(t.tag===3)Iy(t,t,r);else for(;e!==null;){if(e.tag===3){Iy(e,t,r);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Rn===null||!Rn.has(n))){t=Eo(r,t),t=pb(e,t,1),e=kn(e,t,1),t=bt(),e!==null&&(Aa(e,1,t),Dt(e,t));break}}e=e.return}}function QS(t,e,r){var n=t.pingCache;n!==null&&n.delete(e),e=bt(),t.pingedLanes|=t.suspendedLanes&r,Ge===t&&(et&r)===r&&(qe===4||qe===3&&(et&130023424)===et&&500>Me()-Gp?hi(t,0):Kp|=r),Dt(t,e)}function Db(t,e){e===0&&(t.mode&1?(e=fl,fl<<=1,!(fl&130023424)&&(fl=4194304)):e=1);var r=bt();t=Xr(t,e),t!==null&&(Aa(t,e,r),Dt(t,r))}function YS(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Db(t,r)}function XS(t,e){var r=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(M(314))}n!==null&&n.delete(e),Db(t,r)}var Lb;Lb=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)Pt=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return Pt=!1,$S(t,e,r);Pt=!!(t.flags&131072)}else Pt=!1,Te&&e.flags&1048576&&F0(e,Ec,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;Ql(t,e),t=e.pendingProps;var i=yo(e,mt.current);uo(e,r),i=zp(null,e,n,t,i,r);var o=jp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ot(n)?(o=!0,wc(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vp(e),i.updater=cu,e.stateNode=i,i._reactInternals=e,Yh(e,n,t,r),e=Zh(null,e,n,!0,o,r)):(e.tag=0,Te&&o&&kp(e),wt(null,e,i,r),e=e.child),e;case 16:n=e.elementType;e:{switch(Ql(t,e),t=e.pendingProps,i=n._init,n=i(n._payload),e.type=n,i=e.tag=ZS(n),t=or(n,t),i){case 0:e=Jh(null,e,n,t,r);break e;case 1:e=fy(null,e,n,t,r);break e;case 11:e=dy(null,e,n,t,r);break e;case 14:e=hy(null,e,n,or(n.type,t),r);break e}throw Error(M(306,n,""))}return e;case 0:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:or(n,i),Jh(t,e,n,i,r);case 1:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:or(n,i),fy(t,e,n,i,r);case 3:e:{if(yb(e),t===null)throw Error(M(387));n=e.pendingProps,o=e.memoizedState,i=o.element,H0(t,e),xc(e,n,null,r);var s=e.memoizedState;if(n=s.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Eo(Error(M(423)),e),e=py(t,e,n,r,i);break e}else if(n!==i){i=Eo(Error(M(424)),e),e=py(t,e,n,r,i);break e}else for(Mt=Cn(e.stateNode.containerInfo.firstChild),Ft=e,Te=!0,ar=null,r=B0(e,null,n,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(_o(),n===i){e=Jr(t,e,r);break e}wt(t,e,n,r)}e=e.child}return e;case 5:return W0(e),t===null&&Kh(e),n=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,jh(n,i)?s=null:o!==null&&jh(n,o)&&(e.flags|=32),vb(t,e),wt(t,e,s,r),e.child;case 6:return t===null&&Kh(e),null;case 13:return _b(t,e,r);case 4:return Mp(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=wo(e,null,n,r):wt(t,e,n,r),e.child;case 11:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:or(n,i),dy(t,e,n,i,r);case 7:return wt(t,e,e.pendingProps,r),e.child;case 8:return wt(t,e,e.pendingProps.children,r),e.child;case 12:return wt(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(n=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,ye(Ic,n._currentValue),n._currentValue=s,o!==null)if(hr(o.value,s)){if(o.children===i.children&&!Nt.current){e=Jr(t,e,r);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(o.tag===1){c=Wr(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),Gh(o.return,r,e),l.lanes|=r;break}c=c.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(M(341));s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),Gh(s,r,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}wt(t,e,i.children,r),e=e.child}return e;case 9:return i=e.type,n=e.pendingProps.children,uo(e,r),i=Yt(i),n=n(i),e.flags|=1,wt(t,e,n,r),e.child;case 14:return n=e.type,i=or(n,e.pendingProps),i=or(n.type,i),hy(t,e,n,i,r);case 15:return mb(t,e,e.type,e.pendingProps,r);case 17:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:or(n,i),Ql(t,e),e.tag=1,Ot(n)?(t=!0,wc(e)):t=!1,uo(e,r),hb(e,n,i),Yh(e,n,i,r),Zh(null,e,n,!0,t,r);case 19:return wb(t,e,r);case 22:return gb(t,e,r)}throw Error(M(156,e.tag))};function Vb(t,e){return c0(t,e)}function JS(t,e,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,e,r,n){return new JS(t,e,r,n)}function Jp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ZS(t){if(typeof t=="function")return Jp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vp)return 11;if(t===yp)return 14}return 2}function Nn(t,e){var r=t.alternate;return r===null?(r=Ht(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Jl(t,e,r,n,i,o){var s=2;if(n=t,typeof t=="function")Jp(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Qi:return fi(r.children,i,o,e);case gp:s=8,i|=8;break;case wh:return t=Ht(12,r,e,i|2),t.elementType=wh,t.lanes=o,t;case bh:return t=Ht(13,r,e,i),t.elementType=bh,t.lanes=o,t;case Eh:return t=Ht(19,r,e,i),t.elementType=Eh,t.lanes=o,t;case Ww:return hu(r,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qw:s=10;break e;case Hw:s=9;break e;case vp:s=11;break e;case yp:s=14;break e;case fn:s=16,n=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=Ht(s,r,e,i),e.elementType=t,e.type=n,e.lanes=o,e}function fi(t,e,r,n){return t=Ht(7,t,n,e),t.lanes=r,t}function hu(t,e,r,n){return t=Ht(22,t,n,e),t.elementType=Ww,t.lanes=r,t.stateNode={isHidden:!1},t}function Ud(t,e,r){return t=Ht(6,t,null,e),t.lanes=r,t}function zd(t,e,r){return e=Ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function eC(t,e,r,n,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bd(0),this.expirationTimes=bd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bd(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zp(t,e,r,n,i,o,s,l,c){return t=new eC(t,e,r,l,c),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Ht(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vp(o),t}function tC(t,e,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gi,key:n==null?null:""+n,children:t,containerInfo:e,implementation:r}}function Mb(t){if(!t)return Mn;t=t._reactInternals;e:{if(Ni(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ot(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var r=t.type;if(Ot(r))return M0(t,r,e)}return e}function $b(t,e,r,n,i,o,s,l,c){return t=Zp(r,n,!0,t,i,o,s,l,c),t.context=Mb(null),r=t.current,n=bt(),i=Pn(r),o=Wr(n,i),o.callback=e??null,kn(r,o,i),t.current.lanes=i,Aa(t,i,n),Dt(t,n),t}function fu(t,e,r,n){var i=e.current,o=bt(),s=Pn(i);return r=Mb(r),e.context===null?e.context=r:e.pendingContext=r,e=Wr(o,s),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=kn(i,e,s),t!==null&&(ur(t,i,s,o),Wl(t,i,s)),s}function Oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ty(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function em(t,e){Ty(t,e),(t=t.alternate)&&Ty(t,e)}function rC(){return null}var Fb=typeof reportError=="function"?reportError:function(t){console.error(t)};function tm(t){this._internalRoot=t}pu.prototype.render=tm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));fu(t,e,null,null)};pu.prototype.unmount=tm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ei(function(){fu(null,t,null,null)}),e[Yr]=null}};function pu(t){this._internalRoot=t}pu.prototype.unstable_scheduleHydration=function(t){if(t){var e=g0();t={blockedOn:null,target:t,priority:e};for(var r=0;r<gn.length&&e!==0&&e<gn[r].priority;r++);gn.splice(r,0,t),r===0&&y0(t)}};function rm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xy(){}function nC(t,e,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var u=Oc(s);o.call(u)}}var s=$b(e,n,t,0,null,!1,!1,"",xy);return t._reactRootContainer=s,t[Yr]=s.current,Zs(t.nodeType===8?t.parentNode:t),Ei(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var u=Oc(c);l.call(u)}}var c=Zp(t,0,!1,null,null,!1,!1,"",xy);return t._reactRootContainer=c,t[Yr]=c.current,Zs(t.nodeType===8?t.parentNode:t),Ei(function(){fu(e,c,r,n)}),c}function gu(t,e,r,n,i){var o=r._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=Oc(s);l.call(c)}}fu(e,s,t,i)}else s=nC(r,e,t,i,n);return Oc(s)}p0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=_s(e.pendingLanes);r!==0&&(bp(e,r|1),Dt(e,Me()),!(ce&6)&&(Io=Me()+500,Bn()))}break;case 13:Ei(function(){var n=Xr(t,1);if(n!==null){var i=bt();ur(n,t,1,i)}}),em(t,1)}};Ep=function(t){if(t.tag===13){var e=Xr(t,134217728);if(e!==null){var r=bt();ur(e,t,134217728,r)}em(t,134217728)}};m0=function(t){if(t.tag===13){var e=Pn(t),r=Xr(t,e);if(r!==null){var n=bt();ur(r,t,e,n)}em(t,e)}};g0=function(){return fe};v0=function(t,e){var r=fe;try{return fe=t,e()}finally{fe=r}};Nh=function(t,e,r){switch(e){case"input":if(xh(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var n=r[e];if(n!==t&&n.form===t.form){var i=su(n);if(!i)throw Error(M(90));Gw(n),xh(n,i)}}}break;case"textarea":Yw(t,r);break;case"select":e=r.value,e!=null&&so(t,!!r.multiple,e,!1)}};n0=Qp;i0=Ei;var iC={usingClientEntryPoint:!1,Events:[Ca,Zi,su,t0,r0,Qp]},hs={findFiberByHostInstance:ii,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oC={bundleType:hs.bundleType,version:hs.version,rendererPackageName:hs.rendererPackageName,rendererConfig:hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=a0(t),t===null?null:t.stateNode},findFiberByHostInstance:hs.findFiberByHostInstance||rC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{ru=Tl.inject(oC),wr=Tl}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iC;zt.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rm(e))throw Error(M(200));return tC(t,e,null,r)};zt.createRoot=function(t,e){if(!rm(t))throw Error(M(299));var r=!1,n="",i=Fb;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Zp(t,1,!1,null,null,r,!1,n,i),t[Yr]=e.current,Zs(t.nodeType===8?t.parentNode:t),new tm(e)};zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=a0(e),t=t===null?null:t.stateNode,t};zt.flushSync=function(t){return Ei(t)};zt.hydrate=function(t,e,r){if(!mu(e))throw Error(M(200));return gu(null,t,e,!0,r)};zt.hydrateRoot=function(t,e,r){if(!rm(t))throw Error(M(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",s=Fb;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),e=$b(e,null,t,1,r??null,i,!1,o,s),t[Yr]=e.current,Zs(t),n)for(t=0;t<n.length;t++)r=n[t],i=r._getVersion,i=i(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,i]:e.mutableSourceEagerHydrationData.push(r,i);return new pu(e)};zt.render=function(t,e,r){if(!mu(e))throw Error(M(200));return gu(null,t,e,!1,r)};zt.unmountComponentAtNode=function(t){if(!mu(t))throw Error(M(40));return t._reactRootContainer?(Ei(function(){gu(null,null,t,!1,function(){t._reactRootContainer=null,t[Yr]=null})}),!0):!1};zt.unstable_batchedUpdates=Qp;zt.unstable_renderSubtreeIntoContainer=function(t,e,r,n){if(!mu(r))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return gu(t,e,r,!1,n)};zt.version="18.3.1-next-f1338f8080-20240426";function Ub(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ub)}catch(t){console.error(t)}}Ub(),Uw.exports=zt;var sC=Uw.exports,zb,Ay=sC;zb=Ay.createRoot,Ay.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function la(){return la=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},la.apply(this,arguments)}var ai;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ai||(ai={}));const Sy="popstate";function aC(t){t===void 0&&(t={});function e(i,o){let{pathname:s="/",search:l="",hash:c=""}=Ra(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),hf("",{pathname:s,search:l,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(i,o){let s=i.document.querySelector("base"),l="";if(s&&s.getAttribute("href")){let c=i.location.href,u=c.indexOf("#");l=u===-1?c:c.slice(0,u)}return l+"#"+(typeof o=="string"?o:Bb(o))}function n(i,o){jb(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return cC(e,r,n,t)}function Er(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function jb(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function lC(){return Math.random().toString(36).substr(2,8)}function Cy(t,e){return{usr:t.state,key:t.key,idx:e}}function hf(t,e,r,n){return r===void 0&&(r=null),la({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ra(e):e,{state:r,key:e&&e.key||n||lC()})}function Bb(t){let{pathname:e="/",search:r="",hash:n=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Ra(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function cC(t,e,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:o=!1}=n,s=i.history,l=ai.Pop,c=null,u=f();u==null&&(u=0,s.replaceState(la({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function p(){l=ai.Pop;let N=f(),b=N==null?null:N-u;u=N,c&&c({action:l,location:P.location,delta:b})}function m(N,b){l=ai.Push;let y=hf(P.location,N,b);r&&r(y,N),u=f()+1;let x=Cy(y,u),D=P.createHref(y);try{s.pushState(x,"",D)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(D)}o&&c&&c({action:l,location:P.location,delta:1})}function T(N,b){l=ai.Replace;let y=hf(P.location,N,b);r&&r(y,N),u=f();let x=Cy(y,u),D=P.createHref(y);s.replaceState(x,"",D),o&&c&&c({action:l,location:P.location,delta:0})}function S(N){let b=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof N=="string"?N:Bb(N);return y=y.replace(/ $/,"%20"),Er(b,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,b)}let P={get action(){return l},get location(){return t(i,s)},listen(N){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Sy,p),c=N,()=>{i.removeEventListener(Sy,p),c=null}},createHref(N){return e(i,N)},createURL:S,encodeLocation(N){let b=S(N);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:m,replace:T,go(N){return s.go(N)}};return P}var ky;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ky||(ky={}));function uC(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,n=t.charAt(r);return n&&n!=="/"?null:t.slice(r)||"/"}const dC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hC=t=>dC.test(t);function fC(t,e){e===void 0&&(e="/");let{pathname:r,search:n="",hash:i=""}=typeof t=="string"?Ra(t):t,o;if(r)if(hC(r))o=r;else{if(r.includes("//")){let s=r;r=r.replace(/\/\/+/g,"/"),jb(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+r))}r.startsWith("/")?o=Ry(r.substring(1),"/"):o=Ry(r,e)}else o=e;return{pathname:o,search:yC(n),hash:_C(i)}}function Ry(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function jd(t,e,r,n){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pC(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function mC(t,e){let r=pC(t);return e?r.map((n,i)=>i===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function gC(t,e,r,n){n===void 0&&(n=!1);let i;typeof t=="string"?i=Ra(t):(i=la({},t),Er(!i.pathname||!i.pathname.includes("?"),jd("?","pathname","search",i)),Er(!i.pathname||!i.pathname.includes("#"),jd("#","pathname","hash",i)),Er(!i.search||!i.search.includes("#"),jd("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=r;else{let p=e.length-1;if(!n&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let c=fC(i,l),u=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const vC=t=>t.join("/").replace(/\/\/+/g,"/"),yC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_C=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,qb=["post","put","patch","delete"];new Set(qb);const wC=["get",...qb];new Set(wC);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dc(){return Dc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Dc.apply(this,arguments)}const Hb=Q.createContext(null),nm=Q.createContext(null),im=Q.createContext(null),om=Q.createContext({outlet:null,matches:[],isDataRoute:!1});function sm(){return Q.useContext(im)!=null}function Wb(){return sm()||Er(!1),Q.useContext(im).location}function Kb(t){Q.useContext(nm).static||Q.useLayoutEffect(t)}function bC(){let{isDataRoute:t}=Q.useContext(om);return t?AC():EC()}function EC(){sm()||Er(!1);let t=Q.useContext(Hb),{basename:e,future:r,navigator:n}=Q.useContext(nm),{matches:i}=Q.useContext(om),{pathname:o}=Wb(),s=JSON.stringify(mC(i,r.v7_relativeSplatPath)),l=Q.useRef(!1);return Kb(()=>{l.current=!0}),Q.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){n.go(u);return}let p=gC(u,JSON.parse(s),o,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:vC([e,p.pathname])),(f.replace?n.replace:n.push)(p,f.state,f)},[e,n,s,o,t])}var Gb=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Gb||{}),Qb=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Qb||{});function IC(t){let e=Q.useContext(Hb);return e||Er(!1),e}function TC(t){let e=Q.useContext(om);return e||Er(!1),e}function xC(t){let e=TC(),r=e.matches[e.matches.length-1];return r.route.id||Er(!1),r.route.id}function AC(){let{router:t}=IC(Gb.UseNavigateStable),e=xC(Qb.UseNavigateStable),r=Q.useRef(!1);return Kb(()=>{r.current=!0}),Q.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Dc({fromRouteId:e},o)))},[t,e])}function SC(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function CC(t){let{basename:e="/",children:r=null,location:n,navigationType:i=ai.Pop,navigator:o,static:s=!1,future:l}=t;sm()&&Er(!1);let c=e.replace(/^\/*/,"/"),u=Q.useMemo(()=>({basename:c,navigator:o,static:s,future:Dc({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof n=="string"&&(n=Ra(n));let{pathname:f="/",search:p="",hash:m="",state:T=null,key:S="default"}=n,P=Q.useMemo(()=>{let N=uC(f,c);return N==null?null:{location:{pathname:N,search:p,hash:m,state:T,key:S},navigationType:i}},[c,f,p,m,T,S,i]);return P==null?null:Q.createElement(nm.Provider,{value:u},Q.createElement(im.Provider,{children:r,value:P}))}new Promise(()=>{});/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ff(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,r)=>{let n=t[r];return e.concat(Array.isArray(n)?n.map(i=>[r,i]):[[r,n]])},[]))}function kC(t,e){let r=ff(t);return e&&e.forEach((n,i)=>{r.has(i)||e.getAll(i).forEach(o=>{r.append(i,o)})}),r}const RC="6";try{window.__reactRouterVersion=RC}catch{}const PC="startTransition",Py=Qx[PC];function NC(t){let{basename:e,children:r,future:n,window:i}=t,o=Q.useRef();o.current==null&&(o.current=aC({window:i,v5Compat:!0}));let s=o.current,[l,c]=Q.useState({action:s.action,location:s.location}),{v7_startTransition:u}=n||{},f=Q.useCallback(p=>{u&&Py?Py(()=>c(p)):c(p)},[c,u]);return Q.useLayoutEffect(()=>s.listen(f),[s,f]),Q.useEffect(()=>SC(n),[n]),Q.createElement(CC,{basename:e,children:r,location:l.location,navigationType:l.action,navigator:s,future:n})}var Ny;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ny||(Ny={}));var Oy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Oy||(Oy={}));function OC(t){let e=Q.useRef(ff(t)),r=Q.useRef(!1),n=Wb(),i=Q.useMemo(()=>kC(n.search,r.current?null:e.current),[n.search]),o=bC(),s=Q.useCallback((l,c)=>{const u=ff(typeof l=="function"?l(i):l);r.current=!0,o("?"+u,c)},[o,i]);return[i,s]}var Dy={};/**
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
 */const Yb=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},DC=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[r++];e[n++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[r++],s=t[r++],l=t[r++],c=((i&7)<<18|(o&63)<<12|(s&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const o=t[r++],s=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},Xb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,l=s?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,f=o>>2,p=(o&3)<<4|l>>4;let m=(l&15)<<2|u>>6,T=u&63;c||(T=64,s||(m=64)),n.push(r[f],r[p],r[m],r[T])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):DC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const o=r[t.charAt(i++)],l=i<t.length?r[t.charAt(i)]:0;++i;const u=i<t.length?r[t.charAt(i)]:64;++i;const p=i<t.length?r[t.charAt(i)]:64;if(++i,o==null||l==null||u==null||p==null)throw new LC;const m=o<<2|l>>4;if(n.push(m),u!==64){const T=l<<4&240|u>>2;if(n.push(T),p!==64){const S=u<<6&192|p;n.push(S)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class LC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const VC=function(t){const e=Yb(t);return Xb.encodeByteArray(e,!0)},Lc=function(t){return VC(t).replace(/\./g,"")},Jb=function(t){try{return Xb.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function MC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $C=()=>MC().__FIREBASE_DEFAULTS__,FC=()=>{if(typeof process>"u"||typeof Dy>"u")return;const t=Dy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},UC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Jb(t[1]);return e&&JSON.parse(e)},vu=()=>{try{return $C()||FC()||UC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zb=t=>{var e,r;return(r=(e=vu())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},zC=t=>{const e=Zb(t);if(!e)return;const r=e.lastIndexOf(":");if(r<=0||r+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(r+1),10);return e[0]==="["?[e.substring(1,r-1),n]:[e.substring(0,r),n]},eE=()=>{var t;return(t=vu())===null||t===void 0?void 0:t.config},tE=t=>{var e;return(e=vu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class jC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,n))}}}/**
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
 */function BC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},n=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Lc(JSON.stringify(r)),Lc(JSON.stringify(s)),""].join(".")}/**
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
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function HC(){var t;const e=(t=vu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function KC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function GC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QC(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function YC(){return!HC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rE(){try{return typeof indexedDB=="object"}catch{return!1}}function nE(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(r){e(r)}})}function XC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const JC="FirebaseError";class kr extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=JC,Object.setPrototypeOf(this,kr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oi.prototype.create)}}class Oi{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?ZC(o,n):"Error",l=`${this.serviceName}: ${s} (${i}).`;return new kr(i,l,n)}}function ZC(t,e){return t.replace(e1,(r,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const e1=/\{\$([^}]+)}/g;function t1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vc(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const i of r){if(!n.includes(i))return!1;const o=t[i],s=e[i];if(Ly(o)&&Ly(s)){if(!Vc(o,s))return!1}else if(o!==s)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function Ly(t){return t!==null&&typeof t=="object"}/**
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
 */function Pa(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,o]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Es(t){const e=t.indexOf("?");if(!e)return"";const r=t.indexOf("#",e);return t.substring(e,r>0?r:void 0)}function r1(t,e){const r=new n1(t,e);return r.subscribe.bind(r)}class n1{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,n){let i;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");i1(e,["next","error","complete"])?i=e:i={next:e,error:r,complete:n},i.next===void 0&&(i.next=Bd),i.error===void 0&&(i.error=Bd),i.complete===void 0&&(i.complete=Bd);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function i1(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function Bd(){}/**
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
 */function Oe(t){return t&&t._delegate?t._delegate:t}class fr{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ni="[DEFAULT]";/**
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
 */class o1{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const n=new jC;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(a1(e))try{this.getOrInitializeService({instanceIdentifier:ni})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);try{const o=this.getOrInitializeService({instanceIdentifier:i});n.resolve(o)}catch{}}}}clearInstance(e=ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ni){return this.instances.has(e)}getOptions(e=ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[o,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);n===l&&s.resolve(i)}return i}onInit(e,r){var n;const i=this.normalizeInstanceIdentifier(r),o=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,r){const n=this.onInitCallbacks.get(r);if(n)for(const i of n)try{i(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:s1(e),options:r}),this.instances.set(e,n),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=ni){return this.component?this.component.multipleInstances?e:ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function s1(t){return t===ni?void 0:t}function a1(t){return t.instantiationMode==="EAGER"}/**
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
 */class l1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new o1(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const c1={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},u1=ae.INFO,d1={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},h1=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=d1[e];if(i)console[i](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class am{constructor(e){this.name=e,this._logLevel=u1,this._logHandler=h1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?c1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const f1=(t,e)=>e.some(r=>t instanceof r);let Vy,My;function p1(){return Vy||(Vy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m1(){return My||(My=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iE=new WeakMap,pf=new WeakMap,oE=new WeakMap,qd=new WeakMap,lm=new WeakMap;function g1(t){const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{r(Kr(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(r=>{r instanceof IDBCursor&&iE.set(r,t)}).catch(()=>{}),lm.set(e,t),e}function v1(t){if(pf.has(t))return;const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{r(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});pf.set(t,e)}let mf={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return pf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||oE.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Kr(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function y1(t){mf=t(mf)}function _1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(Hd(this),e,...r);return oE.set(n,e.sort?e.sort():[e]),Kr(n)}:m1().includes(t)?function(...e){return t.apply(Hd(this),e),Kr(iE.get(this))}:function(...e){return Kr(t.apply(Hd(this),e))}}function w1(t){return typeof t=="function"?_1(t):(t instanceof IDBTransaction&&v1(t),f1(t,p1())?new Proxy(t,mf):t)}function Kr(t){if(t instanceof IDBRequest)return g1(t);if(qd.has(t))return qd.get(t);const e=w1(t);return e!==t&&(qd.set(t,e),lm.set(e,t)),e}const Hd=t=>lm.get(t);function yu(t,e,{blocked:r,upgrade:n,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),l=Kr(s);return n&&s.addEventListener("upgradeneeded",c=>{n(Kr(s.result),c.oldVersion,c.newVersion,Kr(s.transaction),c)}),r&&s.addEventListener("blocked",c=>r(c.oldVersion,c.newVersion,c)),l.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}function Wd(t,{blocked:e}={}){const r=indexedDB.deleteDatabase(t);return e&&r.addEventListener("blocked",n=>e(n.oldVersion,n)),Kr(r).then(()=>{})}const b1=["get","getKey","getAll","getAllKeys","count"],E1=["put","add","delete","clear"],Kd=new Map;function $y(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kd.get(e))return Kd.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,i=E1.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||b1.includes(r)))return;const o=async function(s,...l){const c=this.transaction(s,i?"readwrite":"readonly");let u=c.store;return n&&(u=u.index(l.shift())),(await Promise.all([u[r](...l),i&&c.done]))[0]};return Kd.set(e,o),o}y1(t=>({...t,get:(e,r,n)=>$y(e,r)||t.get(e,r,n),has:(e,r)=>!!$y(e,r)||t.has(e,r)}));/**
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
 */class I1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(T1(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function T1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gf="@firebase/app",Fy="0.10.13";/**
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
 */const Zr=new am("@firebase/app"),x1="@firebase/app-compat",A1="@firebase/analytics-compat",S1="@firebase/analytics",C1="@firebase/app-check-compat",k1="@firebase/app-check",R1="@firebase/auth",P1="@firebase/auth-compat",N1="@firebase/database",O1="@firebase/data-connect",D1="@firebase/database-compat",L1="@firebase/functions",V1="@firebase/functions-compat",M1="@firebase/installations",$1="@firebase/installations-compat",F1="@firebase/messaging",U1="@firebase/messaging-compat",z1="@firebase/performance",j1="@firebase/performance-compat",B1="@firebase/remote-config",q1="@firebase/remote-config-compat",H1="@firebase/storage",W1="@firebase/storage-compat",K1="@firebase/firestore",G1="@firebase/vertexai-preview",Q1="@firebase/firestore-compat",Y1="firebase",X1="10.14.1";/**
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
 */const vf="[DEFAULT]",J1={[gf]:"fire-core",[x1]:"fire-core-compat",[S1]:"fire-analytics",[A1]:"fire-analytics-compat",[k1]:"fire-app-check",[C1]:"fire-app-check-compat",[R1]:"fire-auth",[P1]:"fire-auth-compat",[N1]:"fire-rtdb",[O1]:"fire-data-connect",[D1]:"fire-rtdb-compat",[L1]:"fire-fn",[V1]:"fire-fn-compat",[M1]:"fire-iid",[$1]:"fire-iid-compat",[F1]:"fire-fcm",[U1]:"fire-fcm-compat",[z1]:"fire-perf",[j1]:"fire-perf-compat",[B1]:"fire-rc",[q1]:"fire-rc-compat",[H1]:"fire-gcs",[W1]:"fire-gcs-compat",[K1]:"fire-fst",[Q1]:"fire-fst-compat",[G1]:"fire-vertex","fire-js":"fire-js",[Y1]:"fire-js-all"};/**
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
 */const Mc=new Map,Z1=new Map,yf=new Map;function Uy(t,e){try{t.container.addComponent(e)}catch(r){Zr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function Sr(t){const e=t.name;if(yf.has(e))return Zr.debug(`There were multiple attempts to register component ${e}.`),!1;yf.set(e,t);for(const r of Mc.values())Uy(r,t);for(const r of Z1.values())Uy(r,t);return!0}function Vo(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}function lr(t){return t.settings!==void 0}/**
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
 */const ek={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},On=new Oi("app","Firebase",ek);/**
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
 */class tk{constructor(e,r,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw On.create("app-deleted",{appName:this._name})}}/**
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
 */const Mo=X1;function sE(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const n=Object.assign({name:vf,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw On.create("bad-app-name",{appName:String(i)});if(r||(r=eE()),!r)throw On.create("no-options");const o=Mc.get(i);if(o){if(Vc(r,o.options)&&Vc(n,o.config))return o;throw On.create("duplicate-app",{appName:i})}const s=new l1(i);for(const c of yf.values())s.addComponent(c);const l=new tk(r,n,s);return Mc.set(i,l),l}function cm(t=vf){const e=Mc.get(t);if(!e&&t===vf&&eE())return sE();if(!e)throw On.create("no-app",{appName:t});return e}function Gt(t,e,r){var n;let i=(n=J1[t])!==null&&n!==void 0?n:t;r&&(i+=`-${r}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&l.push("and"),s&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zr.warn(l.join(" "));return}Sr(new fr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const rk="firebase-heartbeat-database",nk=1,ca="firebase-heartbeat-store";let Gd=null;function aE(){return Gd||(Gd=yu(rk,nk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ca)}catch(r){console.warn(r)}}}}).catch(t=>{throw On.create("idb-open",{originalErrorMessage:t.message})})),Gd}async function ik(t){try{const r=(await aE()).transaction(ca),n=await r.objectStore(ca).get(lE(t));return await r.done,n}catch(e){if(e instanceof kr)Zr.warn(e.message);else{const r=On.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zr.warn(r.message)}}}async function zy(t,e){try{const n=(await aE()).transaction(ca,"readwrite");await n.objectStore(ca).put(e,lE(t)),await n.done}catch(r){if(r instanceof kr)Zr.warn(r.message);else{const n=On.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});Zr.warn(n.message)}}}function lE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ok=1024,sk=30*24*60*60*1e3;class ak{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new ck(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,r;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=jy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const l=new Date(s.date).valueOf();return Date.now()-l<=sk}),this._storage.overwrite(this._heartbeatsCache))}catch(n){Zr.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=jy(),{heartbeatsToSend:n,unsentEntries:i}=lk(this._heartbeatsCache.heartbeats),o=Lc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=r,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(r){return Zr.warn(r),""}}}function jy(){return new Date().toISOString().substring(0,10)}function lk(t,e=ok){const r=[];let n=t.slice();for(const i of t){const o=r.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),By(r)>e){o.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),By(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class ck{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rE()?nE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await ik(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return zy(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return zy(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function By(t){return Lc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function uk(t){Sr(new fr("platform-logger",e=>new I1(e),"PRIVATE")),Sr(new fr("heartbeat",e=>new ak(e),"PRIVATE")),Gt(gf,Fy,t),Gt(gf,Fy,"esm2017"),Gt("fire-js","")}uk("");function um(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}function R(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o}function cE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dk=cE,uE=new Oi("auth","Firebase",cE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=new am("@firebase/auth");function hk(t,...e){$c.logLevel<=ae.WARN&&$c.warn(`Auth (${Mo}): ${t}`,...e)}function Zl(t,...e){$c.logLevel<=ae.ERROR&&$c.error(`Auth (${Mo}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,...e){throw hm(t,...e)}function dr(t,...e){return hm(t,...e)}function dm(t,e,r){const n=Object.assign(Object.assign({},dk()),{[e]:r});return new Oi("auth","Firebase",n).create(e,{appName:t.name})}function Gr(t){return dm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fk(t,e,r){const n=r;if(!(e instanceof n))throw n.name!==e.constructor.name&&Jt(t,"argument-error"),dm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function hm(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return uE.create(t,...e)}function J(t,e,...r){if(!t)throw hm(e,...r)}function Br(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zl(e),new Error(e)}function en(t,e){t||Br(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pk(){return qy()==="http:"||qy()==="https:"}function qy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pk()||KC()||"connection"in navigator)?navigator.onLine:!0}function gk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,r){this.shortDelay=e,this.longDelay=r,en(r>e,"Short delay should be less than long delay!"),this.isMobile=qC()||GC()}get(){return mk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(t,e){en(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=new Na(3e4,6e4);function qn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hn(t,e,r,n,i={}){return hE(t,i,async()=>{let o={},s={};n&&(e==="GET"?s=n:o={body:JSON.stringify(n)});const l=Pa(Object.assign({key:t.config.apiKey},s)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},o);return WC()||(u.referrerPolicy="no-referrer"),dE.fetch()(fE(t,t.config.apiHost,r,l),u)})}async function hE(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},vk),e);try{const i=new wk(t),o=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw xl(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const l=o.ok?s.errorMessage:s.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw xl(t,"credential-already-in-use",s);if(c==="EMAIL_EXISTS")throw xl(t,"email-already-in-use",s);if(c==="USER_DISABLED")throw xl(t,"user-disabled",s);const f=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw dm(t,f,u);Jt(t,f)}}catch(i){if(i instanceof kr)throw i;Jt(t,"network-request-failed",{message:String(i)})}}async function Oa(t,e,r,n,i={}){const o=await Hn(t,e,r,n,i);return"mfaPendingCredential"in o&&Jt(t,"multi-factor-auth-required",{_serverResponse:o}),o}function fE(t,e,r,n){const i=`${e}${r}?${n}`;return t.config.emulator?fm(t.config,i):`${t.config.apiScheme}://${i}`}function _k(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(dr(this.auth,"network-request-failed")),yk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xl(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=dr(t,e,n);return i.customData._tokenResponse=r,i}function Hy(t){return t!==void 0&&t.enterprise!==void 0}class bk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===e)return _k(r.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Ek(t,e){return Hn(t,"GET","/v2/recaptchaConfig",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ik(t,e){return Hn(t,"POST","/v1/accounts:delete",e)}async function pE(t,e){return Hn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Tk(t,e=!1){const r=Oe(t),n=await r.getIdToken(e),i=pm(n);J(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:n,authTime:Vs(Qd(i.auth_time)),issuedAtTime:Vs(Qd(i.iat)),expirationTime:Vs(Qd(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Qd(t){return Number(t)*1e3}function pm(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return Zl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Jb(r);return i?JSON.parse(i):(Zl("Failed to decode base64 JWT payload"),null)}catch(i){return Zl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Wy(t){const e=pm(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ua(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof kr&&xk(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function xk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vs(this.lastLoginAt),this.creationTime=Vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fc(t){var e;const r=t.auth,n=await t.getIdToken(),i=await ua(t,pE(r,{idToken:n}));J(i==null?void 0:i.users.length,r,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?mE(o.providerUserInfo):[],l=Ck(t.providerData,s),c=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new wf(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function Sk(t){const e=Oe(t);await Fc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ck(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function mE(t){return t.map(e=>{var{providerId:r}=e,n=um(e,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kk(t,e){const r=await hE(t,{},async()=>{const n=Pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=fE(t,i,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",dE.fetch()(s,{method:"POST",headers:l,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function Rk(t,e){return Hn(t,"POST","/v2/accounts:revokeToken",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}updateFromIdToken(e){J(e.length!==0,"internal-error");const r=Wy(e);this.updateTokensAndExpiration(e,null,r)}async getToken(e,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:i,expiresIn:o}=await kk(e,r);this.updateTokensAndExpiration(n,i,Number(o))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:i,expirationTime:o}=r,s=new fo;return n&&(J(typeof n=="string","internal-error",{appName:e}),s.refreshToken=n),i&&(J(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(J(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fo,this.toJSON())}_performRefresh(){return Br("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qr{constructor(e){var{uid:r,auth:n,stsTokenManager:i}=e,o=um(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ak(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new wf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const r=await ua(this,this.stsTokenManager.getToken(this.auth,e));return J(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return Tk(this,e)}reload(){return Sk(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new qr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await Fc(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(lr(this.auth.app))return Promise.reject(Gr(this.auth));const e=await this.getIdToken();return await ua(this,Ik(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var n,i,o,s,l,c,u,f;const p=(n=r.displayName)!==null&&n!==void 0?n:void 0,m=(i=r.email)!==null&&i!==void 0?i:void 0,T=(o=r.phoneNumber)!==null&&o!==void 0?o:void 0,S=(s=r.photoURL)!==null&&s!==void 0?s:void 0,P=(l=r.tenantId)!==null&&l!==void 0?l:void 0,N=(c=r._redirectEventId)!==null&&c!==void 0?c:void 0,b=(u=r.createdAt)!==null&&u!==void 0?u:void 0,y=(f=r.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:x,emailVerified:D,isAnonymous:U,providerData:z,stsTokenManager:w}=r;J(x&&w,e,"internal-error");const v=fo.fromJSON(this.name,w);J(typeof x=="string",e,"internal-error"),hn(p,e.name),hn(m,e.name),J(typeof D=="boolean",e,"internal-error"),J(typeof U=="boolean",e,"internal-error"),hn(T,e.name),hn(S,e.name),hn(P,e.name),hn(N,e.name),hn(b,e.name),hn(y,e.name);const _=new qr({uid:x,auth:e,email:m,emailVerified:D,displayName:p,isAnonymous:U,photoURL:S,phoneNumber:T,tenantId:P,stsTokenManager:v,createdAt:b,lastLoginAt:y});return z&&Array.isArray(z)&&(_.providerData=z.map(E=>Object.assign({},E))),N&&(_._redirectEventId=N),_}static async _fromIdTokenResponse(e,r,n=!1){const i=new fo;i.updateFromServerResponse(r);const o=new qr({uid:r.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Fc(o),o}static async _fromGetAccountInfoResponse(e,r,n){const i=r.users[0];J(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?mE(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new fo;l.updateFromIdToken(n);const c=new qr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new wf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=new Map;function Hr(t){en(t instanceof Function,"Expected a class definition");let e=Ky.get(t);return e?(en(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ky.set(t,e),e)}/**
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
 */class gE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}gE.type="NONE";const Gy=gE;/**
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
 */function ec(t,e,r){return`firebase:${t}:${e}:${r}`}class po{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:i,name:o}=this.auth;this.fullUserKey=ec(this.userKey,i.apiKey,o),this.fullPersistenceKey=ec("persistence",i.apiKey,o),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new po(Hr(Gy),e,n);const i=(await Promise.all(r.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Hr(Gy);const s=ec(n,e.config.apiKey,e.name);let l=null;for(const u of r)try{const f=await u._get(s);if(f){const p=qr._fromJSON(e,f);u!==o&&(l=p),o=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new po(o,e,n):(o=c[0],l&&await o._set(s,l.toJSON()),await Promise.all(r.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new po(o,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(EE(e))return"Blackberry";if(IE(e))return"Webos";if(yE(e))return"Safari";if((e.includes("chrome/")||_E(e))&&!e.includes("edge/"))return"Chrome";if(bE(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function vE(t=gt()){return/firefox\//i.test(t)}function yE(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _E(t=gt()){return/crios\//i.test(t)}function wE(t=gt()){return/iemobile/i.test(t)}function bE(t=gt()){return/android/i.test(t)}function EE(t=gt()){return/blackberry/i.test(t)}function IE(t=gt()){return/webos/i.test(t)}function mm(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Pk(t=gt()){var e;return mm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Nk(){return QC()&&document.documentMode===10}function TE(t=gt()){return mm(t)||bE(t)||IE(t)||EE(t)||/windows phone/i.test(t)||wE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(t,e=[]){let r;switch(t){case"Browser":r=Qy(gt());break;case"Worker":r=`${Qy(gt())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${Mo}/${n}`}/**
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
 */class Ok{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const n=o=>new Promise((s,l)=>{try{const c=e(o);s(c)}catch(c){l(c)}});n.onAbort=r,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const n of this.queue)await n(e),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function Dk(t,e={}){return Hn(t,"GET","/v2/passwordPolicy",qn(t,e))}/**
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
 */const Lk=6;class Vk{constructor(e){var r,n,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=s.minPasswordLength)!==null&&r!==void 0?r:Lk,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,n,i,o,s,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(r=c.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(n=c.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsUppercaseLetter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(s=c.containsNumericCharacter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,r){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(r.meetsMinPasswordLength=e.length>=n),i&&(r.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(r,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,r,n,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e,r,n,i){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yy(this),this.idTokenSubscription=new Yy(this),this.beforeStateQueue=new Ok(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=Hr(r)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await po.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const r=await pE(this,{idToken:e}),n=await qr._fromGetAccountInfoResponse(this,r,e);await this.directlySetCurrentUser(n)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(lr(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!s||s===l)&&(c!=null&&c.user)&&(i=c.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await Fc(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(lr(this.app))return Promise.reject(Gr(this));const r=e?Oe(e):null;return r&&J(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return lr(this.app)?Promise.reject(Gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return lr(this.app)?Promise.reject(Gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Dk(this),r=new Vk(e);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Oi("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},r)}})}async revokeAccessToken(e){if(this.currentUser){const r=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:r};this.tenantId!=null&&(n.tenantId=this.tenantId),await Rk(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&Hr(e)||this._popupRedirectResolver;J(r,this,"argument-error"),this.redirectPersistenceManager=await po.create(this,[Hr(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,i){if(this._deleted)return()=>{};const o=typeof r=="function"?r:r.next.bind(r);let s=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{s||o(this.currentUser)}),typeof r=="function"){const c=e.addObserver(r,n,i);return()=>{s=!0,c()}}else{const c=e.addObserver(r);return()=>{s=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(r["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(r["X-Firebase-AppCheck"]=i),r}async _getAppCheckToken(){var e;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r!=null&&r.error&&hk(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function Wn(t){return Oe(t)}class Yy{constructor(e){this.auth=e,this.observer=null,this.addObserver=r1(r=>this.observer=r)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _u={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $k(t){_u=t}function AE(t){return _u.loadJS(t)}function Fk(){return _u.recaptchaEnterpriseScript}function Uk(){return _u.gapiScript}function zk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const jk="recaptcha-enterprise",Bk="NO_RECAPTCHA";class qk{constructor(e){this.type=jk,this.auth=Wn(e)}async verify(e="verify",r=!1){async function n(o){if(!r){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,l)=>{Ek(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new bk(c);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(c=>{l(c)})})}function i(o,s,l){const c=window.grecaptcha;Hy(c)?c.enterprise.ready(()=>{c.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(Bk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{n(this.auth).then(l=>{if(!r&&Hy(window.grecaptcha))i(l,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Fk();c.length!==0&&(c+=l),AE(c).then(()=>{i(l,o,s)}).catch(u=>{s(u)})}}).catch(l=>{s(l)})})}}async function Xy(t,e,r,n=!1){const i=new qk(t);let o;try{o=await i.verify(r)}catch{o=await i.verify(r,!0)}const s=Object.assign({},e);return n?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function bf(t,e,r,n){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Xy(t,e,r,r==="getOobCode");return n(t,o)}else return n(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Xy(t,e,r,r==="getOobCode");return n(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hk(t,e){const r=Vo(t,"auth");if(r.isInitialized()){const i=r.getImmediate(),o=r.getOptions();if(Vc(o,e??{}))return i;Jt(i,"already-initialized")}return r.initialize({options:e})}function Wk(t,e){const r=(e==null?void 0:e.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Hr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Kk(t,e,r){const n=Wn(t);J(n._canInitEmulator,n,"emulator-config-failed"),J(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,o=SE(e),{host:s,port:l}=Gk(e),c=l===null?"":`:${l}`;n.config.emulator={url:`${o}//${s}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),Qk()}function SE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Gk(t){const e=SE(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const o=i[1];return{host:o,port:Jy(n.substr(o.length+1))}}else{const[o,s]=n.split(":");return{host:o,port:Jy(s)}}}function Jy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Qk(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return Br("not implemented")}_getIdTokenResponse(e){return Br("not implemented")}_linkToIdToken(e,r){return Br("not implemented")}_getReauthenticationResolver(e){return Br("not implemented")}}async function Yk(t,e){return Hn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xk(t,e){return Oa(t,"POST","/v1/accounts:signInWithPassword",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(t,e){return Oa(t,"POST","/v1/accounts:signInWithEmailLink",qn(t,e))}async function Zk(t,e){return Oa(t,"POST","/v1/accounts:signInWithEmailLink",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da extends gm{constructor(e,r,n,i=null){super("password",n),this._email=e,this._password=r,this._tenantId=i}static _fromEmailAndPassword(e,r){return new da(e,r,"password")}static _fromEmailAndCode(e,r,n=null){return new da(e,r,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bf(e,r,"signInWithPassword",Xk);case"emailLink":return Jk(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,r){switch(this.signInMethod){case"password":const n={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bf(e,n,"signUpPassword",Yk);case"emailLink":return Zk(e,{idToken:r,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(t,e){return Oa(t,"POST","/v1/accounts:signInWithIdp",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR="http://localhost";class tn extends gm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new tn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):Jt("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=r,o=um(r,["providerId","signInMethod"]);if(!n||!i)return null;const s=new tn(n,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const r=this.buildRequest();return mo(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,mo(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,mo(e,r)}buildRequest(){const e={requestUri:eR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=Pa(r)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rR(t){const e=bs(Es(t)).link,r=e?bs(Es(e)).deep_link_id:null,n=bs(Es(t)).deep_link_id;return(n?bs(Es(n)).link:null)||n||r||e||t}class vm{constructor(e){var r,n,i,o,s,l;const c=bs(Es(e)),u=(r=c.apiKey)!==null&&r!==void 0?r:null,f=(n=c.oobCode)!==null&&n!==void 0?n:null,p=tR((i=c.mode)!==null&&i!==void 0?i:null);J(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(o=c.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=c.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const r=rR(e);try{return new vm(r)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this.providerId=$o.PROVIDER_ID}static credential(e,r){return da._fromEmailAndPassword(e,r)}static credentialWithLink(e,r){const n=vm.parseLink(r);return J(n,"argument-error"),da._fromEmailAndCode(e,n.code,n.tenantId)}}$o.PROVIDER_ID="password";$o.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$o.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fo extends ym{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ms extends Fo{static credentialFromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;return J("providerId"in r&&"signInMethod"in r,"argument-error"),tn._fromParams(r)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return J(e.idToken||e.accessToken,"argument-error"),tn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ms.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ms.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:o,nonce:s,providerId:l}=e;if(!n&&!i&&!r&&!o||!l)return null;try{return new Ms(l)._credential({idToken:r,accessToken:n,nonce:s,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Fo{constructor(){super("facebook.com")}static credential(e){return tn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends Fo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return tn._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n}=e;if(!r&&!n)return null;try{return Ur.credential(r,n)}catch{return null}}}Ur.GOOGLE_SIGN_IN_METHOD="google.com";Ur.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Fo{constructor(){super("github.com")}static credential(e){return tn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.GITHUB_SIGN_IN_METHOD="github.com";_n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Fo{constructor(){super("twitter.com")}static credential(e,r){return tn._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=e;if(!r||!n)return null;try{return wn.credential(r,n)}catch{return null}}}wn.TWITTER_SIGN_IN_METHOD="twitter.com";wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nR(t,e){return Oa(t,"POST","/v1/accounts:signUp",qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,i=!1){const o=await qr._fromIdTokenResponse(e,n,i),s=Zy(n);return new Ii({user:o,providerId:s,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const i=Zy(n);return new Ii({user:e,providerId:i,_tokenResponse:n,operationType:r})}}function Zy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends kr{constructor(e,r,n,i){var o;super(r.code,r.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Uc.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,r,n,i){return new Uc(e,r,n,i)}}function CE(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Uc._fromErrorAndOperation(t,o,e,n):o})}async function iR(t,e,r=!1){const n=await ua(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return Ii._forOperation(t,"link",n)}/**
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
 */async function oR(t,e,r=!1){const{auth:n}=t;if(lr(n.app))return Promise.reject(Gr(n));const i="reauthenticate";try{const o=await ua(t,CE(n,i,e,t),r);J(o.idToken,n,"internal-error");const s=pm(o.idToken);J(s,n,"internal-error");const{sub:l}=s;return J(t.uid===l,n,"user-mismatch"),Ii._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Jt(n,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kE(t,e,r=!1){if(lr(t.app))return Promise.reject(Gr(t));const n="signIn",i=await CE(t,n,e),o=await Ii._fromIdTokenResponse(t,n,i);return r||await t._updateCurrentUser(o.user),o}async function sR(t,e){return kE(Wn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RE(t){const e=Wn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function aR(t,e,r){if(lr(t.app))return Promise.reject(Gr(t));const n=Wn(t),s=await bf(n,{returnSecureToken:!0,email:e,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nR).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&RE(t),c}),l=await Ii._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(l.user),l}function lR(t,e,r){return lr(t.app)?Promise.reject(Gr(t)):sR(Oe(t),$o.credential(e,r)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&RE(t),n})}function cR(t,e,r,n){return Oe(t).onIdTokenChanged(e,r,n)}function uR(t,e,r){return Oe(t).beforeAuthStateChanged(e,r)}function dR(t,e,r,n){return Oe(t).onAuthStateChanged(e,r,n)}function hR(t){return Oe(t).signOut()}const zc="__sak";/**
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
 */class PE{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(zc,"1"),this.storage.removeItem(zc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=1e3,pR=10;class NE extends PE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=TE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&e(r,i,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((s,l,c)=>{this.notifyListeners(s,c)});return}const n=e.key;r?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(n);!r&&this.localCache[n]===s||this.notifyListeners(n,s)},o=this.storage.getItem(n);Nk()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,pR):i()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},fR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}NE.type="LOCAL";const mR=NE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE extends PE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}OE.type="SESSION";const DE=OE;/**
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
 */function gR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class wu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(i=>i.isListeningto(e));if(r)return r;const n=new wu(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:i,data:o}=r.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const l=Array.from(s).map(async u=>u(r.origin,o)),c=await gR(l);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(t="",e=10){let r="";for(let n=0;n<e;n++)r+=Math.floor(Math.random()*10);return t+r}/**
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
 */class vR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((l,c)=>{const u=_m("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(m.data.response);break;default:clearTimeout(f),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:r},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(){return window}function yR(t){Ir().location.href=t}/**
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
 */function LE(){return typeof Ir().WorkerGlobalScope<"u"&&typeof Ir().importScripts=="function"}async function _R(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bR(){return LE()?self:null}/**
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
 */const VE="firebaseLocalStorageDb",ER=1,jc="firebaseLocalStorage",ME="fbase_key";class Da{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function bu(t,e){return t.transaction([jc],e?"readwrite":"readonly").objectStore(jc)}function IR(){const t=indexedDB.deleteDatabase(VE);return new Da(t).toPromise()}function Ef(){const t=indexedDB.open(VE,ER);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(jc,{keyPath:ME})}catch(i){r(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(jc)?e(n):(n.close(),await IR(),e(await Ef()))})})}async function e_(t,e,r){const n=bu(t,!0).put({[ME]:e,value:r});return new Da(n).toPromise()}async function TR(t,e){const r=bu(t,!1).get(e),n=await new Da(r).toPromise();return n===void 0?null:n.value}function t_(t,e){const r=bu(t,!0).delete(e);return new Da(r).toPromise()}const xR=800,AR=3;class $E{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ef(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>AR)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return LE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wu._getInstance(bR()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await _R(),!this.activeServiceWorker)return;this.sender=new vR(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((r=n[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ef();return await e_(e,zc,"1"),await t_(e,zc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>e_(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>TR(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>t_(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=bu(i,!1).getAll();return new Da(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$E.type="LOCAL";const SR=$E;new Na(3e4,6e4);/**
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
 */function FE(t,e){return e?Hr(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wm extends gm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mo(e,this._buildIdpRequest())}_linkToIdToken(e,r){return mo(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return mo(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function CR(t){return kE(t.auth,new wm(t),t.bypassAuthState)}function kR(t){const{auth:e,user:r}=t;return J(r,e,"internal-error"),oR(r,new wm(t),t.bypassAuthState)}async function RR(t){const{auth:e,user:r}=t;return J(r,e,"internal-error"),iR(r,new wm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,r,n,i,o=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:i,tenantId:o,error:s,type:l}=e;if(s){this.reject(s);return}const c={auth:this.auth,requestUri:r,sessionId:n,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CR;case"linkViaPopup":case"linkViaRedirect":return RR;case"reauthViaPopup":case"reauthViaRedirect":return kR;default:Jt(this.auth,"internal-error")}}resolve(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=new Na(2e3,1e4);async function NR(t,e,r){if(lr(t.app))return Promise.reject(dr(t,"operation-not-supported-in-this-environment"));const n=Wn(t);fk(t,e,ym);const i=FE(n,r);return new li(n,"signInViaPopup",e,i).executeNotNull()}class li extends UE{constructor(e,r,n,i,o){super(e,r,i,o),this.provider=n,this.authWindow=null,this.pollId=null,li.currentPopupAction&&li.currentPopupAction.cancel(),li.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){en(this.filter.length===1,"Popup operations only handle one event");const e=_m();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(dr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,li.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PR.get())};e()}}li.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR="pendingRedirect",tc=new Map;class DR extends UE{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let e=tc.get(this.auth._key());if(!e){try{const n=await LR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}tc.set(this.auth._key(),e)}return this.bypassAuthState||tc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LR(t,e){const r=$R(e),n=MR(t);if(!await n._isAvailable())return!1;const i=await n._get(r)==="true";return await n._remove(r),i}function VR(t,e){tc.set(t._key(),e)}function MR(t){return Hr(t._redirectPersistence)}function $R(t){return ec(OR,t.config.apiKey,t.name)}async function FR(t,e,r=!1){if(lr(t.app))return Promise.reject(Gr(t));const n=Wn(t),i=FE(n,e),s=await new DR(n,i,r).execute();return s&&!r&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=10*60*1e3;class zR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jR(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var n;if(e.error&&!zE(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(dr(this.auth,i))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UR&&this.cachedEventUids.clear(),this.cachedEventUids.has(r_(e))}saveEventToCache(e){this.cachedEventUids.add(r_(e)),this.lastProcessedEventTime=Date.now()}}function r_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BR(t,e={}){return Hn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HR=/^https?/;async function WR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await BR(t);for(const r of e)try{if(KR(r))return}catch{}Jt(t,"unauthorized-domain")}function KR(t){const e=_f(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&s.hostname===n}if(!HR.test(r))return!1;if(qR.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const GR=new Na(3e4,6e4);function n_(){const t=Ir().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function QR(t){return new Promise((e,r)=>{var n,i,o;function s(){n_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{n_(),r(dr(t,"network-request-failed"))},timeout:GR.get()})}if(!((i=(n=Ir().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Ir().gapi)===null||o===void 0)&&o.load)s();else{const l=zk("iframefcb");return Ir()[l]=()=>{gapi.load?s():r(dr(t,"network-request-failed"))},AE(`${Uk()}?onload=${l}`).catch(c=>r(c))}}).catch(e=>{throw rc=null,e})}let rc=null;function YR(t){return rc=rc||QR(t),rc}/**
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
 */const XR=new Na(5e3,15e3),JR="__/auth/iframe",ZR="emulator/auth/iframe",eP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rP(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?fm(e,ZR):`https://${t.config.authDomain}/${JR}`,n={apiKey:e.apiKey,appName:t.name,v:Mo},i=tP.get(t.config.apiHost);i&&(n.eid=i);const o=t._getFrameworks();return o.length&&(n.fw=o.join(",")),`${r}?${Pa(n).slice(1)}`}async function nP(t){const e=await YR(t),r=Ir().gapi;return J(r,t,"internal-error"),e.open({where:document.body,url:rP(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eP,dontclear:!0},n=>new Promise(async(i,o)=>{await n.restyle({setHideOnLeave:!1});const s=dr(t,"network-request-failed"),l=Ir().setTimeout(()=>{o(s)},XR.get());function c(){Ir().clearTimeout(l),i(n)}n.ping(c).then(c,()=>{o(s)})}))}/**
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
 */const iP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oP=500,sP=600,aP="_blank",lP="http://localhost";class i_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cP(t,e,r,n=oP,i=sP){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const c=Object.assign(Object.assign({},iP),{width:n.toString(),height:i.toString(),top:o,left:s}),u=gt().toLowerCase();r&&(l=_E(u)?aP:r),vE(u)&&(e=e||lP,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[T,S])=>`${m}${T}=${S},`,"");if(Pk(u)&&l!=="_self")return uP(e||"",l),new i_(null);const p=window.open(e||"",l,f);J(p,t,"popup-blocked");try{p.focus()}catch{}return new i_(p)}function uP(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const dP="__/auth/handler",hP="emulator/auth/handler",fP=encodeURIComponent("fac");async function o_(t,e,r,n,i,o){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:Mo,eventId:i};if(e instanceof ym){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",t1(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))s[f]=p}if(e instanceof Fo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(s.scopes=f.join(","))}t.tenantId&&(s.tid=t.tenantId);const l=s;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${fP}=${encodeURIComponent(c)}`:"";return`${pP(t)}?${Pa(l).slice(1)}${u}`}function pP({config:t}){return t.emulator?fm(t,hP):`https://${t.authDomain}/${dP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="webStorageSupport";class mP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=DE,this._completeRedirectFn=FR,this._overrideRedirectResult=VR}async _openPopup(e,r,n,i){var o;en((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await o_(e,r,n,_f(),i);return cP(e,s,_m())}async _openRedirect(e,r,n,i){await this._originValidation(e);const o=await o_(e,r,n,_f(),i);return yR(o),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:i,promise:o}=this.eventManagers[r];return i?Promise.resolve(i):(en(o,"If manager is not set, promise should be"),o)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(e){const r=await nP(e),n=new zR(e);return r.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(Yd,{type:Yd},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Yd];s!==void 0&&r(!!s),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=WR(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return TE()||yE()||mm()}}const gP=mP;var s_="@firebase/auth",a_="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _P(t){Sr(new fr("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:l}=n.options;J(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:s,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xE(t)},u=new Mk(n,i,o,c);return Wk(u,r),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),Sr(new fr("auth-internal",e=>{const r=Wn(e.getProvider("auth").getImmediate());return(n=>new vP(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(s_,a_,yP(t)),Gt(s_,a_,"esm2017")}/**
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
 */const wP=5*60,bP=tE("authIdTokenMaxAge")||wP;let l_=null;const EP=t=>async e=>{const r=e&&await e.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>bP)return;const i=r==null?void 0:r.token;l_!==i&&(l_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function IP(t=cm()){const e=Vo(t,"auth");if(e.isInitialized())return e.getImmediate();const r=Hk(t,{popupRedirectResolver:gP,persistence:[SR,mR,DE]}),n=tE("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(n,location.origin);if(location.origin===o.origin){const s=EP(o.toString());uR(r,s,()=>s(r.currentUser)),cR(r,l=>s(l))}}const i=Zb("auth");return i&&Kk(r,`http://${i}`),r}function TP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}$k({loadJS(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const o=dr("internal-error");o.customData=i,r(o)},n.type="text/javascript",n.charset="UTF-8",TP().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_P("Browser");var c_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pi,jE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function _(){}_.prototype=v.prototype,w.D=v.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(E,A,C){for(var I=Array(arguments.length-2),St=2;St<arguments.length;St++)I[St-2]=arguments[St];return v.prototype[A].apply(E,I)}}function r(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,r),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,v,_){_||(_=0);var E=Array(16);if(typeof v=="string")for(var A=0;16>A;++A)E[A]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(A=0;16>A;++A)E[A]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=w.g[0],_=w.g[1],A=w.g[2];var C=w.g[3],I=v+(C^_&(A^C))+E[0]+3614090360&4294967295;v=_+(I<<7&4294967295|I>>>25),I=C+(A^v&(_^A))+E[1]+3905402710&4294967295,C=v+(I<<12&4294967295|I>>>20),I=A+(_^C&(v^_))+E[2]+606105819&4294967295,A=C+(I<<17&4294967295|I>>>15),I=_+(v^A&(C^v))+E[3]+3250441966&4294967295,_=A+(I<<22&4294967295|I>>>10),I=v+(C^_&(A^C))+E[4]+4118548399&4294967295,v=_+(I<<7&4294967295|I>>>25),I=C+(A^v&(_^A))+E[5]+1200080426&4294967295,C=v+(I<<12&4294967295|I>>>20),I=A+(_^C&(v^_))+E[6]+2821735955&4294967295,A=C+(I<<17&4294967295|I>>>15),I=_+(v^A&(C^v))+E[7]+4249261313&4294967295,_=A+(I<<22&4294967295|I>>>10),I=v+(C^_&(A^C))+E[8]+1770035416&4294967295,v=_+(I<<7&4294967295|I>>>25),I=C+(A^v&(_^A))+E[9]+2336552879&4294967295,C=v+(I<<12&4294967295|I>>>20),I=A+(_^C&(v^_))+E[10]+4294925233&4294967295,A=C+(I<<17&4294967295|I>>>15),I=_+(v^A&(C^v))+E[11]+2304563134&4294967295,_=A+(I<<22&4294967295|I>>>10),I=v+(C^_&(A^C))+E[12]+1804603682&4294967295,v=_+(I<<7&4294967295|I>>>25),I=C+(A^v&(_^A))+E[13]+4254626195&4294967295,C=v+(I<<12&4294967295|I>>>20),I=A+(_^C&(v^_))+E[14]+2792965006&4294967295,A=C+(I<<17&4294967295|I>>>15),I=_+(v^A&(C^v))+E[15]+1236535329&4294967295,_=A+(I<<22&4294967295|I>>>10),I=v+(A^C&(_^A))+E[1]+4129170786&4294967295,v=_+(I<<5&4294967295|I>>>27),I=C+(_^A&(v^_))+E[6]+3225465664&4294967295,C=v+(I<<9&4294967295|I>>>23),I=A+(v^_&(C^v))+E[11]+643717713&4294967295,A=C+(I<<14&4294967295|I>>>18),I=_+(C^v&(A^C))+E[0]+3921069994&4294967295,_=A+(I<<20&4294967295|I>>>12),I=v+(A^C&(_^A))+E[5]+3593408605&4294967295,v=_+(I<<5&4294967295|I>>>27),I=C+(_^A&(v^_))+E[10]+38016083&4294967295,C=v+(I<<9&4294967295|I>>>23),I=A+(v^_&(C^v))+E[15]+3634488961&4294967295,A=C+(I<<14&4294967295|I>>>18),I=_+(C^v&(A^C))+E[4]+3889429448&4294967295,_=A+(I<<20&4294967295|I>>>12),I=v+(A^C&(_^A))+E[9]+568446438&4294967295,v=_+(I<<5&4294967295|I>>>27),I=C+(_^A&(v^_))+E[14]+3275163606&4294967295,C=v+(I<<9&4294967295|I>>>23),I=A+(v^_&(C^v))+E[3]+4107603335&4294967295,A=C+(I<<14&4294967295|I>>>18),I=_+(C^v&(A^C))+E[8]+1163531501&4294967295,_=A+(I<<20&4294967295|I>>>12),I=v+(A^C&(_^A))+E[13]+2850285829&4294967295,v=_+(I<<5&4294967295|I>>>27),I=C+(_^A&(v^_))+E[2]+4243563512&4294967295,C=v+(I<<9&4294967295|I>>>23),I=A+(v^_&(C^v))+E[7]+1735328473&4294967295,A=C+(I<<14&4294967295|I>>>18),I=_+(C^v&(A^C))+E[12]+2368359562&4294967295,_=A+(I<<20&4294967295|I>>>12),I=v+(_^A^C)+E[5]+4294588738&4294967295,v=_+(I<<4&4294967295|I>>>28),I=C+(v^_^A)+E[8]+2272392833&4294967295,C=v+(I<<11&4294967295|I>>>21),I=A+(C^v^_)+E[11]+1839030562&4294967295,A=C+(I<<16&4294967295|I>>>16),I=_+(A^C^v)+E[14]+4259657740&4294967295,_=A+(I<<23&4294967295|I>>>9),I=v+(_^A^C)+E[1]+2763975236&4294967295,v=_+(I<<4&4294967295|I>>>28),I=C+(v^_^A)+E[4]+1272893353&4294967295,C=v+(I<<11&4294967295|I>>>21),I=A+(C^v^_)+E[7]+4139469664&4294967295,A=C+(I<<16&4294967295|I>>>16),I=_+(A^C^v)+E[10]+3200236656&4294967295,_=A+(I<<23&4294967295|I>>>9),I=v+(_^A^C)+E[13]+681279174&4294967295,v=_+(I<<4&4294967295|I>>>28),I=C+(v^_^A)+E[0]+3936430074&4294967295,C=v+(I<<11&4294967295|I>>>21),I=A+(C^v^_)+E[3]+3572445317&4294967295,A=C+(I<<16&4294967295|I>>>16),I=_+(A^C^v)+E[6]+76029189&4294967295,_=A+(I<<23&4294967295|I>>>9),I=v+(_^A^C)+E[9]+3654602809&4294967295,v=_+(I<<4&4294967295|I>>>28),I=C+(v^_^A)+E[12]+3873151461&4294967295,C=v+(I<<11&4294967295|I>>>21),I=A+(C^v^_)+E[15]+530742520&4294967295,A=C+(I<<16&4294967295|I>>>16),I=_+(A^C^v)+E[2]+3299628645&4294967295,_=A+(I<<23&4294967295|I>>>9),I=v+(A^(_|~C))+E[0]+4096336452&4294967295,v=_+(I<<6&4294967295|I>>>26),I=C+(_^(v|~A))+E[7]+1126891415&4294967295,C=v+(I<<10&4294967295|I>>>22),I=A+(v^(C|~_))+E[14]+2878612391&4294967295,A=C+(I<<15&4294967295|I>>>17),I=_+(C^(A|~v))+E[5]+4237533241&4294967295,_=A+(I<<21&4294967295|I>>>11),I=v+(A^(_|~C))+E[12]+1700485571&4294967295,v=_+(I<<6&4294967295|I>>>26),I=C+(_^(v|~A))+E[3]+2399980690&4294967295,C=v+(I<<10&4294967295|I>>>22),I=A+(v^(C|~_))+E[10]+4293915773&4294967295,A=C+(I<<15&4294967295|I>>>17),I=_+(C^(A|~v))+E[1]+2240044497&4294967295,_=A+(I<<21&4294967295|I>>>11),I=v+(A^(_|~C))+E[8]+1873313359&4294967295,v=_+(I<<6&4294967295|I>>>26),I=C+(_^(v|~A))+E[15]+4264355552&4294967295,C=v+(I<<10&4294967295|I>>>22),I=A+(v^(C|~_))+E[6]+2734768916&4294967295,A=C+(I<<15&4294967295|I>>>17),I=_+(C^(A|~v))+E[13]+1309151649&4294967295,_=A+(I<<21&4294967295|I>>>11),I=v+(A^(_|~C))+E[4]+4149444226&4294967295,v=_+(I<<6&4294967295|I>>>26),I=C+(_^(v|~A))+E[11]+3174756917&4294967295,C=v+(I<<10&4294967295|I>>>22),I=A+(v^(C|~_))+E[2]+718787259&4294967295,A=C+(I<<15&4294967295|I>>>17),I=_+(C^(A|~v))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+C&4294967295}n.prototype.u=function(w,v){v===void 0&&(v=w.length);for(var _=v-this.blockSize,E=this.B,A=this.h,C=0;C<v;){if(A==0)for(;C<=_;)i(this,w,C),C+=this.blockSize;if(typeof w=="string"){for(;C<v;)if(E[A++]=w.charCodeAt(C++),A==this.blockSize){i(this,E),A=0;break}}else for(;C<v;)if(E[A++]=w[C++],A==this.blockSize){i(this,E),A=0;break}}this.h=A,this.o+=v},n.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;var _=8*this.o;for(v=w.length-8;v<w.length;++v)w[v]=_&255,_/=256;for(this.u(w),w=Array(16),v=_=0;4>v;++v)for(var E=0;32>E;E+=8)w[_++]=this.g[v]>>>E&255;return w};function o(w,v){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=v(w)}function s(w,v){this.h=v;for(var _=[],E=!0,A=w.length-1;0<=A;A--){var C=w[A]|0;E&&C==v||(_[A]=C,E=!1)}this.g=_}var l={};function c(w){return-128<=w&&128>w?o(w,function(v){return new s([v|0],0>v?-1:0)}):new s([w|0],0>w?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return N(u(-w));for(var v=[],_=1,E=0;w>=_;E++)v[E]=w/_|0,_*=4294967296;return new s(v,0)}function f(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return N(f(w.substring(1),v));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(v,8)),E=p,A=0;A<w.length;A+=8){var C=Math.min(8,w.length-A),I=parseInt(w.substring(A,A+C),v);8>C?(C=u(Math.pow(v,C)),E=E.j(C).add(u(I))):(E=E.j(_),E=E.add(u(I)))}return E}var p=c(0),m=c(1),T=c(16777216);t=s.prototype,t.m=function(){if(P(this))return-N(this).m();for(var w=0,v=1,_=0;_<this.g.length;_++){var E=this.i(_);w+=(0<=E?E:4294967296+E)*v,v*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(P(this))return"-"+N(this).toString(w);for(var v=u(Math.pow(w,6)),_=this,E="";;){var A=D(_,v).g;_=b(_,A.j(v));var C=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=A,S(_))return C+E;for(;6>C.length;)C="0"+C;E=C+E}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(var v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function P(w){return w.h==-1}t.l=function(w){return w=b(this,w),P(w)?-1:S(w)?0:1};function N(w){for(var v=w.g.length,_=[],E=0;E<v;E++)_[E]=~w.g[E];return new s(_,~w.h).add(m)}t.abs=function(){return P(this)?N(this):this},t.add=function(w){for(var v=Math.max(this.g.length,w.g.length),_=[],E=0,A=0;A<=v;A++){var C=E+(this.i(A)&65535)+(w.i(A)&65535),I=(C>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);E=I>>>16,C&=65535,I&=65535,_[A]=I<<16|C}return new s(_,_[_.length-1]&-2147483648?-1:0)};function b(w,v){return w.add(N(v))}t.j=function(w){if(S(this)||S(w))return p;if(P(this))return P(w)?N(this).j(N(w)):N(N(this).j(w));if(P(w))return N(this.j(N(w)));if(0>this.l(T)&&0>w.l(T))return u(this.m()*w.m());for(var v=this.g.length+w.g.length,_=[],E=0;E<2*v;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var A=0;A<w.g.length;A++){var C=this.i(E)>>>16,I=this.i(E)&65535,St=w.i(A)>>>16,Rr=w.i(A)&65535;_[2*E+2*A]+=I*Rr,y(_,2*E+2*A),_[2*E+2*A+1]+=C*Rr,y(_,2*E+2*A+1),_[2*E+2*A+1]+=I*St,y(_,2*E+2*A+1),_[2*E+2*A+2]+=C*St,y(_,2*E+2*A+2)}for(E=0;E<v;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=v;E<2*v;E++)_[E]=0;return new s(_,0)};function y(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function x(w,v){this.g=w,this.h=v}function D(w,v){if(S(v))throw Error("division by zero");if(S(w))return new x(p,p);if(P(w))return v=D(N(w),v),new x(N(v.g),N(v.h));if(P(v))return v=D(w,N(v)),new x(N(v.g),v.h);if(30<w.g.length){if(P(w)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var _=m,E=v;0>=E.l(w);)_=U(_),E=U(E);var A=z(_,1),C=z(E,1);for(E=z(E,2),_=z(_,2);!S(E);){var I=C.add(E);0>=I.l(w)&&(A=A.add(_),C=I),E=z(E,1),_=z(_,1)}return v=b(w,A.j(v)),new x(A,v)}for(A=p;0<=w.l(v);){for(_=Math.max(1,Math.floor(w.m()/v.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),C=u(_),I=C.j(v);P(I)||0<I.l(w);)_-=E,C=u(_),I=C.j(v);S(C)&&(C=m),A=A.add(C),w=b(w,I)}return new x(A,w)}t.A=function(w){return D(this,w).h},t.and=function(w){for(var v=Math.max(this.g.length,w.g.length),_=[],E=0;E<v;E++)_[E]=this.i(E)&w.i(E);return new s(_,this.h&w.h)},t.or=function(w){for(var v=Math.max(this.g.length,w.g.length),_=[],E=0;E<v;E++)_[E]=this.i(E)|w.i(E);return new s(_,this.h|w.h)},t.xor=function(w){for(var v=Math.max(this.g.length,w.g.length),_=[],E=0;E<v;E++)_[E]=this.i(E)^w.i(E);return new s(_,this.h^w.h)};function U(w){for(var v=w.g.length+1,_=[],E=0;E<v;E++)_[E]=w.i(E)<<1|w.i(E-1)>>>31;return new s(_,w.h)}function z(w,v){var _=v>>5;v%=32;for(var E=w.g.length-_,A=[],C=0;C<E;C++)A[C]=0<v?w.i(C+_)>>>v|w.i(C+_+1)<<32-v:w.i(C+_);return new s(A,w.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,jE=n,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=u,s.fromString=f,pi=s}).apply(typeof c_<"u"?c_:typeof self<"u"?self:typeof window<"u"?window:{});var Al=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var BE,Is,qE,nc,If,HE,WE,KE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,h){return a==Array.prototype||a==Object.prototype||(a[d]=h.value),a};function r(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Al=="object"&&Al];for(var d=0;d<a.length;++d){var h=a[d];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=r(this);function i(a,d){if(d)e:{var h=n;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in h))break e;h=h[k]}a=a[a.length-1],g=h[a],d=d(g),d!=g&&d!=null&&e(h,a,{configurable:!0,writable:!0,value:d})}}function o(a,d){a instanceof String&&(a+="");var h=0,g=!1,k={next:function(){if(!g&&h<a.length){var O=h++;return{value:d(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(a){return a||function(){return o(this,function(d,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},l=this||self;function c(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function f(a,d,h){return a.call.apply(a.bind,arguments)}function p(a,d,h){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),a.apply(d,k)}}return function(){return a.apply(d,arguments)}}function m(a,d,h){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function T(a,d){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function S(a,d){function h(){}h.prototype=d.prototype,a.aa=d.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(g,k,O){for(var j=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)j[ve-2]=arguments[ve];return d.prototype[k].apply(g,j)}}function P(a){const d=a.length;if(0<d){const h=Array(d);for(let g=0;g<d;g++)h[g]=a[g];return h}return[]}function N(a,d){for(let h=1;h<arguments.length;h++){const g=arguments[h];if(c(g)){const k=a.length||0,O=g.length||0;a.length=k+O;for(let j=0;j<O;j++)a[k+j]=g[j]}else a.push(g)}}class b{constructor(d,h){this.i=d,this.j=h,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function y(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var U=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function z(a,d,h){for(const g in a)d.call(h,a[g],g,a)}function w(a,d){for(const h in a)d.call(void 0,a[h],h,a)}function v(a){const d={};for(const h in a)d[h]=a[h];return d}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,d){let h,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(h in g)a[h]=g[h];for(let O=0;O<_.length;O++)h=_[O],Object.prototype.hasOwnProperty.call(g,h)&&(a[h]=g[h])}}function A(a){var d=1;a=a.split(":");const h=[];for(;0<d&&a.length;)h.push(a.shift()),d--;return a.length&&h.push(a.join(":")),h}function C(a){l.setTimeout(()=>{throw a},0)}function I(){var a=Z;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class St{constructor(){this.h=this.g=null}add(d,h){const g=Rr.get();g.set(d,h),this.h?this.h.next=g:this.g=g,this.h=g}}var Rr=new b(()=>new Pr,a=>a.reset());class Pr{constructor(){this.next=this.g=this.h=null}set(d,h){this.h=d,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Zt,H=!1,Z=new St,te=()=>{const a=l.Promise.resolve(void 0);Zt=()=>{a.then(_e)}};var _e=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(h){C(h)}var d=Rr;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}H=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function q(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}q.prototype.h=function(){this.defaultPrevented=!0};var ge=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};l.addEventListener("test",h,d),l.removeEventListener("test",h,d)}catch{}return a}();function Ae(a,d){if(q.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(U){e:{try{D(d.nodeName);var k=!0;break e}catch{}k=!1}k||(d=null)}}else h=="mouseover"?d=a.fromElement:h=="mouseout"&&(d=a.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:er[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ae.aa.h.call(this)}}S(Ae,q);var er={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var tr="closure_listenable_"+(1e6*Math.random()|0),Wu=0;function Nr(a,d,h,g,k){this.listener=a,this.proxy=null,this.src=d,this.type=h,this.capture=!!g,this.ha=k,this.key=++Wu,this.da=this.fa=!1}function Ct(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ha(a){this.src=a,this.g={},this.h=0}Ha.prototype.add=function(a,d,h,g,k){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var j=Gu(a,d,g,k);return-1<j?(d=a[j],h||(d.fa=!1)):(d=new Nr(d,this.src,O,!!g,k),d.fa=h,a.push(d)),d};function Ku(a,d){var h=d.type;if(h in a.g){var g=a.g[h],k=Array.prototype.indexOf.call(g,d,void 0),O;(O=0<=k)&&Array.prototype.splice.call(g,k,1),O&&(Ct(d),a.g[h].length==0&&(delete a.g[h],a.h--))}}function Gu(a,d,h,g){for(var k=0;k<a.length;++k){var O=a[k];if(!O.da&&O.listener==d&&O.capture==!!h&&O.ha==g)return k}return-1}var Qu="closure_lm_"+(1e6*Math.random()|0),Yu={};function _g(a,d,h,g,k){if(Array.isArray(d)){for(var O=0;O<d.length;O++)_g(a,d[O],h,g,k);return null}return h=Eg(h),a&&a[tr]?a.K(d,h,u(g)?!!g.capture:!1,k):rx(a,d,h,!1,g,k)}function rx(a,d,h,g,k,O){if(!d)throw Error("Invalid event type");var j=u(k)?!!k.capture:!!k,ve=Ju(a);if(ve||(a[Qu]=ve=new Ha(a)),h=ve.add(d,h,g,j,O),h.proxy)return h;if(g=nx(),h.proxy=g,g.src=a,g.listener=h,a.addEventListener)ge||(k=j),k===void 0&&(k=!1),a.addEventListener(d.toString(),g,k);else if(a.attachEvent)a.attachEvent(bg(d.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function nx(){function a(h){return d.call(a.src,a.listener,h)}const d=ix;return a}function wg(a,d,h,g,k){if(Array.isArray(d))for(var O=0;O<d.length;O++)wg(a,d[O],h,g,k);else g=u(g)?!!g.capture:!!g,h=Eg(h),a&&a[tr]?(a=a.i,d=String(d).toString(),d in a.g&&(O=a.g[d],h=Gu(O,h,g,k),-1<h&&(Ct(O[h]),Array.prototype.splice.call(O,h,1),O.length==0&&(delete a.g[d],a.h--)))):a&&(a=Ju(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Gu(d,h,g,k)),(h=-1<a?d[a]:null)&&Xu(h))}function Xu(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[tr])Ku(d.i,a);else{var h=a.type,g=a.proxy;d.removeEventListener?d.removeEventListener(h,g,a.capture):d.detachEvent?d.detachEvent(bg(h),g):d.addListener&&d.removeListener&&d.removeListener(g),(h=Ju(d))?(Ku(h,a),h.h==0&&(h.src=null,d[Qu]=null)):Ct(a)}}}function bg(a){return a in Yu?Yu[a]:Yu[a]="on"+a}function ix(a,d){if(a.da)a=!0;else{d=new Ae(d,this);var h=a.listener,g=a.ha||a.src;a.fa&&Xu(a),a=h.call(g,d)}return a}function Ju(a){return a=a[Qu],a instanceof Ha?a:null}var Zu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Eg(a){return typeof a=="function"?a:(a[Zu]||(a[Zu]=function(d){return a.handleEvent(d)}),a[Zu])}function ot(){he.call(this),this.i=new Ha(this),this.M=this,this.F=null}S(ot,he),ot.prototype[tr]=!0,ot.prototype.removeEventListener=function(a,d,h,g){wg(this,a,d,h,g)};function vt(a,d){var h,g=a.F;if(g)for(h=[];g;g=g.F)h.push(g);if(a=a.M,g=d.type||d,typeof d=="string")d=new q(d,a);else if(d instanceof q)d.target=d.target||a;else{var k=d;d=new q(g,a),E(d,k)}if(k=!0,h)for(var O=h.length-1;0<=O;O--){var j=d.g=h[O];k=Wa(j,g,!0,d)&&k}if(j=d.g=a,k=Wa(j,g,!0,d)&&k,k=Wa(j,g,!1,d)&&k,h)for(O=0;O<h.length;O++)j=d.g=h[O],k=Wa(j,g,!1,d)&&k}ot.prototype.N=function(){if(ot.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var h=a.g[d],g=0;g<h.length;g++)Ct(h[g]);delete a.g[d],a.h--}}this.F=null},ot.prototype.K=function(a,d,h,g){return this.i.add(String(a),d,!1,h,g)},ot.prototype.L=function(a,d,h,g){return this.i.add(String(a),d,!0,h,g)};function Wa(a,d,h,g){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var k=!0,O=0;O<d.length;++O){var j=d[O];if(j&&!j.da&&j.capture==h){var ve=j.listener,Qe=j.ha||j.src;j.fa&&Ku(a.i,j),k=ve.call(Qe,g)!==!1&&k}}return k&&!g.defaultPrevented}function Ig(a,d,h){if(typeof a=="function")h&&(a=m(a,h));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function Tg(a){a.g=Ig(()=>{a.g=null,a.i&&(a.i=!1,Tg(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class ox extends he{constructor(d,h){super(),this.m=d,this.l=h,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Tg(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wo(a){he.call(this),this.h=a,this.g={}}S(Wo,he);var xg=[];function Ag(a){z(a.g,function(d,h){this.g.hasOwnProperty(h)&&Xu(d)},a),a.g={}}Wo.prototype.N=function(){Wo.aa.N.call(this),Ag(this)},Wo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ed=l.JSON.stringify,sx=l.JSON.parse,ax=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function td(){}td.prototype.h=null;function Sg(a){return a.h||(a.h=a.i())}function Cg(){}var Ko={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function rd(){q.call(this,"d")}S(rd,q);function nd(){q.call(this,"c")}S(nd,q);var Qn={},kg=null;function Ka(){return kg=kg||new ot}Qn.La="serverreachability";function Rg(a){q.call(this,Qn.La,a)}S(Rg,q);function Go(a){const d=Ka();vt(d,new Rg(d))}Qn.STAT_EVENT="statevent";function Pg(a,d){q.call(this,Qn.STAT_EVENT,a),this.stat=d}S(Pg,q);function yt(a){const d=Ka();vt(d,new Pg(d,a))}Qn.Ma="timingevent";function Ng(a,d){q.call(this,Qn.Ma,a),this.size=d}S(Ng,q);function Qo(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function Yo(){this.g=!0}Yo.prototype.xa=function(){this.g=!1};function lx(a,d,h,g,k,O){a.info(function(){if(a.g)if(O)for(var j="",ve=O.split("&"),Qe=0;Qe<ve.length;Qe++){var ue=ve[Qe].split("=");if(1<ue.length){var st=ue[0];ue=ue[1];var at=st.split("_");j=2<=at.length&&at[1]=="type"?j+(st+"="+ue+"&"):j+(st+"=redacted&")}}else j=null;else j=O;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+d+`
`+h+`
`+j})}function cx(a,d,h,g,k,O,j){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+d+`
`+h+`
`+O+" "+j})}function Fi(a,d,h,g){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+dx(a,h)+(g?" "+g:"")})}function ux(a,d){a.info(function(){return"TIMEOUT: "+d})}Yo.prototype.info=function(){};function dx(a,d){if(!a.g)return d;if(!d)return null;try{var h=JSON.parse(d);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var g=h[a];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var O=k[0];if(O!="noop"&&O!="stop"&&O!="close")for(var j=1;j<k.length;j++)k[j]=""}}}}return ed(h)}catch{return d}}var Ga={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Og={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},id;function Qa(){}S(Qa,td),Qa.prototype.g=function(){return new XMLHttpRequest},Qa.prototype.i=function(){return{}},id=new Qa;function ln(a,d,h,g){this.j=a,this.i=d,this.l=h,this.R=g||1,this.U=new Wo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Dg}function Dg(){this.i=null,this.g="",this.h=!1}var Lg={},od={};function sd(a,d,h){a.L=1,a.v=Za(Or(d)),a.m=h,a.P=!0,Vg(a,null)}function Vg(a,d){a.F=Date.now(),Ya(a),a.A=Or(a.v);var h=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Yg(h.i,"t",g),a.C=0,h=a.j.J,a.h=new Dg,a.g=pv(a.j,h?d:null,!a.m),0<a.O&&(a.M=new ox(m(a.Y,a,a.g),a.O)),d=a.U,h=a.g,g=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(xg[0]=k.toString()),k=xg);for(var O=0;O<k.length;O++){var j=_g(h,k[O],g||d.handleEvent,!1,d.h||d);if(!j)break;d.g[j.key]=j}d=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Go(),lx(a.i,a.u,a.A,a.l,a.R,a.m)}ln.prototype.ca=function(a){a=a.target;const d=this.M;d&&Dr(a)==3?d.j():this.Y(a)},ln.prototype.Y=function(a){try{if(a==this.g)e:{const at=Dr(this.g);var d=this.g.Ba();const ji=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||nv(this.g)))){this.J||at!=4||d==7||(d==8||0>=ji?Go(3):Go(2)),ad(this);var h=this.g.Z();this.X=h;t:if(Mg(this)){var g=nv(this.g);a="";var k=g.length,O=Dr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yn(this),Xo(this);var j="";break t}this.h.i=new l.TextDecoder}for(d=0;d<k;d++)this.h.h=!0,a+=this.h.i.decode(g[d],{stream:!(O&&d==k-1)});g.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=h==200,cx(this.i,this.u,this.A,this.l,this.R,at,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,Qe=this.g;if((ve=Qe.g?Qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(ve)){var ue=ve;break t}}ue=null}if(h=ue)Fi(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ld(this,h);else{this.o=!1,this.s=3,yt(12),Yn(this),Xo(this);break e}}if(this.P){h=!0;let rr;for(;!this.J&&this.C<j.length;)if(rr=hx(this,j),rr==od){at==4&&(this.s=4,yt(14),h=!1),Fi(this.i,this.l,null,"[Incomplete Response]");break}else if(rr==Lg){this.s=4,yt(15),Fi(this.i,this.l,j,"[Invalid Chunk]"),h=!1;break}else Fi(this.i,this.l,rr,null),ld(this,rr);if(Mg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||j.length!=0||this.h.h||(this.s=1,yt(16),h=!1),this.o=this.o&&h,!h)Fi(this.i,this.l,j,"[Invalid Chunked Response]"),Yn(this),Xo(this);else if(0<j.length&&!this.W){this.W=!0;var st=this.j;st.g==this&&st.ba&&!st.M&&(st.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),pd(st),st.M=!0,yt(11))}}else Fi(this.i,this.l,j,null),ld(this,j);at==4&&Yn(this),this.o&&!this.J&&(at==4?uv(this.j,this):(this.o=!1,Ya(this)))}else kx(this.g),h==400&&0<j.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),Yn(this),Xo(this)}}}catch{}finally{}};function Mg(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function hx(a,d){var h=a.C,g=d.indexOf(`
`,h);return g==-1?od:(h=Number(d.substring(h,g)),isNaN(h)?Lg:(g+=1,g+h>d.length?od:(d=d.slice(g,g+h),a.C=g+h,d)))}ln.prototype.cancel=function(){this.J=!0,Yn(this)};function Ya(a){a.S=Date.now()+a.I,$g(a,a.I)}function $g(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Qo(m(a.ba,a),d)}function ad(a){a.B&&(l.clearTimeout(a.B),a.B=null)}ln.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ux(this.i,this.A),this.L!=2&&(Go(),yt(17)),Yn(this),this.s=2,Xo(this)):$g(this,this.S-a)};function Xo(a){a.j.G==0||a.J||uv(a.j,a)}function Yn(a){ad(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Ag(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function ld(a,d){try{var h=a.j;if(h.G!=0&&(h.g==a||cd(h.h,a))){if(!a.K&&cd(h.h,a)&&h.G==3){try{var g=h.Da.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)ol(h),nl(h);else break e;fd(h),yt(18)}}else h.za=k[1],0<h.za-h.T&&37500>k[2]&&h.F&&h.v==0&&!h.C&&(h.C=Qo(m(h.Za,h),6e3));if(1>=zg(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Jn(h,11)}else if((a.K||h.g==a)&&ol(h),!y(d))for(k=h.Da.g.parse(d),d=0;d<k.length;d++){let ue=k[d];if(h.T=ue[0],ue=ue[1],h.G==2)if(ue[0]=="c"){h.K=ue[1],h.ia=ue[2];const st=ue[3];st!=null&&(h.la=st,h.j.info("VER="+h.la));const at=ue[4];at!=null&&(h.Aa=at,h.j.info("SVER="+h.Aa));const ji=ue[5];ji!=null&&typeof ji=="number"&&0<ji&&(g=1.5*ji,h.L=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const rr=a.g;if(rr){const al=rr.g?rr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(al){var O=g.h;O.g||al.indexOf("spdy")==-1&&al.indexOf("quic")==-1&&al.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(ud(O,O.h),O.h=null))}if(g.D){const md=rr.g?rr.g.getResponseHeader("X-HTTP-Session-Id"):null;md&&(g.ya=md,we(g.I,g.D,md))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),g=h;var j=a;if(g.qa=fv(g,g.J?g.ia:null,g.W),j.K){jg(g.h,j);var ve=j,Qe=g.L;Qe&&(ve.I=Qe),ve.B&&(ad(ve),Ya(ve)),g.g=j}else lv(g);0<h.i.length&&il(h)}else ue[0]!="stop"&&ue[0]!="close"||Jn(h,7);else h.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Jn(h,7):hd(h):ue[0]!="noop"&&h.l&&h.l.ta(ue),h.v=0)}}Go(4)}catch{}}var fx=class{constructor(a,d){this.g=a,this.map=d}};function Fg(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ug(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function zg(a){return a.h?1:a.g?a.g.size:0}function cd(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function ud(a,d){a.g?a.g.add(d):a.h=d}function jg(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Fg.prototype.cancel=function(){if(this.i=Bg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Bg(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const h of a.g.values())d=d.concat(h.D);return d}return P(a.i)}function px(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var d=[],h=a.length,g=0;g<h;g++)d.push(a[g]);return d}d=[],h=0;for(g in a)d[h++]=a[g];return d}function mx(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var d=[];a=a.length;for(var h=0;h<a;h++)d.push(h);return d}d=[],h=0;for(const g in a)d[h++]=g;return d}}}function qg(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var h=mx(a),g=px(a),k=g.length,O=0;O<k;O++)d.call(void 0,g[O],h&&h[O],a)}var Hg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gx(a,d){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var g=a[h].indexOf("="),k=null;if(0<=g){var O=a[h].substring(0,g);k=a[h].substring(g+1)}else O=a[h];d(O,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Xn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Xn){this.h=a.h,Xa(this,a.j),this.o=a.o,this.g=a.g,Ja(this,a.s),this.l=a.l;var d=a.i,h=new es;h.i=d.i,d.g&&(h.g=new Map(d.g),h.h=d.h),Wg(this,h),this.m=a.m}else a&&(d=String(a).match(Hg))?(this.h=!1,Xa(this,d[1]||"",!0),this.o=Jo(d[2]||""),this.g=Jo(d[3]||"",!0),Ja(this,d[4]),this.l=Jo(d[5]||"",!0),Wg(this,d[6]||"",!0),this.m=Jo(d[7]||"")):(this.h=!1,this.i=new es(null,this.h))}Xn.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Zo(d,Kg,!0),":");var h=this.g;return(h||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Zo(d,Kg,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(Zo(h,h.charAt(0)=="/"?_x:yx,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",Zo(h,bx)),a.join("")};function Or(a){return new Xn(a)}function Xa(a,d,h){a.j=h?Jo(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Ja(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Wg(a,d,h){d instanceof es?(a.i=d,Ex(a.i,a.h)):(h||(d=Zo(d,wx)),a.i=new es(d,a.h))}function we(a,d,h){a.i.set(d,h)}function Za(a){return we(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Jo(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Zo(a,d,h){return typeof a=="string"?(a=encodeURI(a).replace(d,vx),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function vx(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Kg=/[#\/\?@]/g,yx=/[#\?:]/g,_x=/[#\?]/g,wx=/[#\?@]/g,bx=/#/g;function es(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function cn(a){a.g||(a.g=new Map,a.h=0,a.i&&gx(a.i,function(d,h){a.add(decodeURIComponent(d.replace(/\+/g," ")),h)}))}t=es.prototype,t.add=function(a,d){cn(this),this.i=null,a=Ui(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(d),this.h+=1,this};function Gg(a,d){cn(a),d=Ui(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Qg(a,d){return cn(a),d=Ui(a,d),a.g.has(d)}t.forEach=function(a,d){cn(this),this.g.forEach(function(h,g){h.forEach(function(k){a.call(d,k,g,this)},this)},this)},t.na=function(){cn(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),h=[];for(let g=0;g<d.length;g++){const k=a[g];for(let O=0;O<k.length;O++)h.push(d[g])}return h},t.V=function(a){cn(this);let d=[];if(typeof a=="string")Qg(this,a)&&(d=d.concat(this.g.get(Ui(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)d=d.concat(a[h])}return d},t.set=function(a,d){return cn(this),this.i=null,a=Ui(this,a),Qg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Yg(a,d,h){Gg(a,d),0<h.length&&(a.i=null,a.g.set(Ui(a,d),P(h)),a.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var h=0;h<d.length;h++){var g=d[h];const O=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var k=O;j[g]!==""&&(k+="="+encodeURIComponent(String(j[g]))),a.push(k)}}return this.i=a.join("&")};function Ui(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function Ex(a,d){d&&!a.j&&(cn(a),a.i=null,a.g.forEach(function(h,g){var k=g.toLowerCase();g!=k&&(Gg(this,g),Yg(this,k,h))},a)),a.j=d}function Ix(a,d){const h=new Yo;if(l.Image){const g=new Image;g.onload=T(un,h,"TestLoadImage: loaded",!0,d,g),g.onerror=T(un,h,"TestLoadImage: error",!1,d,g),g.onabort=T(un,h,"TestLoadImage: abort",!1,d,g),g.ontimeout=T(un,h,"TestLoadImage: timeout",!1,d,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else d(!1)}function Tx(a,d){const h=new Yo,g=new AbortController,k=setTimeout(()=>{g.abort(),un(h,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(k),O.ok?un(h,"TestPingServer: ok",!0,d):un(h,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(k),un(h,"TestPingServer: error",!1,d)})}function un(a,d,h,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(h)}catch{}}function xx(){this.g=new ax}function Ax(a,d,h){const g=h||"";try{qg(a,function(k,O){let j=k;u(k)&&(j=ed(k)),d.push(g+O+"="+encodeURIComponent(j))})}catch(k){throw d.push(g+"type="+encodeURIComponent("_badmap")),k}}function el(a){this.l=a.Ub||null,this.j=a.eb||!1}S(el,td),el.prototype.g=function(){return new tl(this.l,this.j)},el.prototype.i=function(a){return function(){return a}}({});function tl(a,d){ot.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(tl,ot),t=tl.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,rs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ts(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,rs(this)),this.g&&(this.readyState=3,rs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?ts(this):rs(this),this.readyState==3&&Xg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ts(this))},t.Qa=function(a){this.g&&(this.response=a,ts(this))},t.ga=function(){this.g&&ts(this)};function ts(a){a.readyState=4,a.l=null,a.j=null,a.v=null,rs(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var h=d.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=d.next();return a.join(`\r
`)};function rs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(tl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Jg(a){let d="";return z(a,function(h,g){d+=g,d+=":",d+=h,d+=`\r
`}),d}function dd(a,d,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=Jg(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):we(a,d,h))}function Pe(a){ot.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Pe,ot);var Sx=/^https?$/i,Cx=["POST","PUT"];t=Pe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():id.g(),this.v=this.o?Sg(this.o):Sg(id),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(O){Zg(this,O);return}if(a=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)h.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())h.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(O=>O.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Cx,d,void 0))||g||k||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,j]of h)this.g.setRequestHeader(O,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{rv(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Zg(this,O)}};function Zg(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,ev(a),rl(a)}function ev(a){a.A||(a.A=!0,vt(a,"complete"),vt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,vt(this,"complete"),vt(this,"abort"),rl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rl(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?tv(this):this.bb())},t.bb=function(){tv(this)};function tv(a){if(a.h&&typeof s<"u"&&(!a.v[1]||Dr(a)!=4||a.Z()!=2)){if(a.u&&Dr(a)==4)Ig(a.Ea,0,a);else if(vt(a,"readystatechange"),Dr(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var h;if(!(h=d)){var g;if(g=j===0){var k=String(a.D).match(Hg)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),g=!Sx.test(k?k.toLowerCase():"")}h=g}if(h)vt(a,"complete"),vt(a,"success");else{a.m=6;try{var O=2<Dr(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",ev(a)}}finally{rl(a)}}}}function rl(a,d){if(a.g){rv(a);const h=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||vt(a,"ready");try{h.onreadystatechange=g}catch{}}}function rv(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Dr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Dr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),sx(d)}};function nv(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function kx(a){const d={};a=(a.g&&2<=Dr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var h=A(a[g]);const k=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const O=d[k]||[];d[k]=O,O.push(h)}w(d,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ns(a,d,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||d}function iv(a){this.Aa=0,this.i=[],this.j=new Yo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ns("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ns("baseRetryDelayMs",5e3,a),this.cb=ns("retryDelaySeedMs",1e4,a),this.Wa=ns("forwardChannelMaxRetries",2,a),this.wa=ns("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Fg(a&&a.concurrentRequestLimit),this.Da=new xx,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=iv.prototype,t.la=8,t.G=1,t.connect=function(a,d,h,g){yt(0),this.W=a,this.H=d||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.I=fv(this,null,this.W),il(this)};function hd(a){if(ov(a),a.G==3){var d=a.U++,h=Or(a.I);if(we(h,"SID",a.K),we(h,"RID",d),we(h,"TYPE","terminate"),is(a,h),d=new ln(a,a.j,d),d.L=2,d.v=Za(Or(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=d.v,h=!0),h||(d.g=pv(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ya(d)}hv(a)}function nl(a){a.g&&(pd(a),a.g.cancel(),a.g=null)}function ov(a){nl(a),a.u&&(l.clearTimeout(a.u),a.u=null),ol(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function il(a){if(!Ug(a.h)&&!a.s){a.s=!0;var d=a.Ga;Zt||te(),H||(Zt(),H=!0),Z.add(d,a),a.B=0}}function Rx(a,d){return zg(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Qo(m(a.Ga,a,d),dv(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new ln(this,this.j,a);let O=this.o;if(this.S&&(O?(O=v(O),E(O,this.S)):O=this.S),this.m!==null||this.O||(k.H=O,O=null),this.P)e:{for(var d=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=h;break e}if(d===4096||h===this.i.length-1){d=h+1;break e}}d=1e3}else d=1e3;d=av(this,k,d),h=Or(this.I),we(h,"RID",a),we(h,"CVER",22),this.D&&we(h,"X-HTTP-Session-Id",this.D),is(this,h),O&&(this.O?d="headers="+encodeURIComponent(String(Jg(O)))+"&"+d:this.m&&dd(h,this.m,O)),ud(this.h,k),this.Ua&&we(h,"TYPE","init"),this.P?(we(h,"$req",d),we(h,"SID","null"),k.T=!0,sd(k,h,null)):sd(k,h,d),this.G=2}}else this.G==3&&(a?sv(this,a):this.i.length==0||Ug(this.h)||sv(this))};function sv(a,d){var h;d?h=d.l:h=a.U++;const g=Or(a.I);we(g,"SID",a.K),we(g,"RID",h),we(g,"AID",a.T),is(a,g),a.m&&a.o&&dd(g,a.m,a.o),h=new ln(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),d&&(a.i=d.D.concat(a.i)),d=av(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ud(a.h,h),sd(h,g,d)}function is(a,d){a.H&&z(a.H,function(h,g){we(d,g,h)}),a.l&&qg({},function(h,g){we(d,g,h)})}function av(a,d,h){h=Math.min(a.i.length,h);var g=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let O=-1;for(;;){const j=["count="+h];O==-1?0<h?(O=k[0].g,j.push("ofs="+O)):O=0:j.push("ofs="+O);let ve=!0;for(let Qe=0;Qe<h;Qe++){let ue=k[Qe].g;const st=k[Qe].map;if(ue-=O,0>ue)O=Math.max(0,k[Qe].g-100),ve=!1;else try{Ax(st,j,"req"+ue+"_")}catch{g&&g(st)}}if(ve){g=j.join("&");break e}}}return a=a.i.splice(0,h),d.D=a,g}function lv(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Zt||te(),H||(Zt(),H=!0),Z.add(d,a),a.v=0}}function fd(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Qo(m(a.Fa,a),dv(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,cv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Qo(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),nl(this),cv(this))};function pd(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function cv(a){a.g=new ln(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Or(a.qa);we(d,"RID","rpc"),we(d,"SID",a.K),we(d,"AID",a.T),we(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&we(d,"TO",a.ja),we(d,"TYPE","xmlhttp"),is(a,d),a.m&&a.o&&dd(d,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=Za(Or(d)),h.m=null,h.P=!0,Vg(h,a)}t.Za=function(){this.C!=null&&(this.C=null,nl(this),fd(this),yt(19))};function ol(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function uv(a,d){var h=null;if(a.g==d){ol(a),pd(a),a.g=null;var g=2}else if(cd(a.h,d))h=d.D,jg(a.h,d),g=1;else return;if(a.G!=0){if(d.o)if(g==1){h=d.m?d.m.length:0,d=Date.now()-d.F;var k=a.B;g=Ka(),vt(g,new Ng(g,h)),il(a)}else lv(a);else if(k=d.s,k==3||k==0&&0<d.X||!(g==1&&Rx(a,d)||g==2&&fd(a)))switch(h&&0<h.length&&(d=a.h,d.i=d.i.concat(h)),k){case 1:Jn(a,5);break;case 4:Jn(a,10);break;case 3:Jn(a,6);break;default:Jn(a,2)}}}function dv(a,d){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*d}function Jn(a,d){if(a.j.info("Error code "+d),d==2){var h=m(a.fb,a),g=a.Xa;const k=!g;g=new Xn(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Xa(g,"https"),Za(g),k?Ix(g.toString(),h):Tx(g.toString(),h)}else yt(2);a.G=0,a.l&&a.l.sa(d),hv(a),ov(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function hv(a){if(a.G=0,a.ka=[],a.l){const d=Bg(a.h);(d.length!=0||a.i.length!=0)&&(N(a.ka,d),N(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function fv(a,d,h){var g=h instanceof Xn?Or(h):new Xn(h);if(g.g!="")d&&(g.g=d+"."+g.g),Ja(g,g.s);else{var k=l.location;g=k.protocol,d=d?d+"."+k.hostname:k.hostname,k=+k.port;var O=new Xn(null);g&&Xa(O,g),d&&(O.g=d),k&&Ja(O,k),h&&(O.l=h),g=O}return h=a.D,d=a.ya,h&&d&&we(g,h,d),we(g,"VER",a.la),is(a,g),g}function pv(a,d,h){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Pe(new el({eb:h})):new Pe(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function mv(){}t=mv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function sl(){}sl.prototype.g=function(a,d){return new Lt(a,d)};function Lt(a,d){ot.call(this),this.g=new iv(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!y(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!y(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new zi(this)}S(Lt,ot),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){hd(this.g)},Lt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=ed(a),a=h);d.i.push(new fx(d.Ya++,a)),d.G==3&&il(d)},Lt.prototype.N=function(){this.g.l=null,delete this.j,hd(this.g),delete this.g,Lt.aa.N.call(this)};function gv(a){rd.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const h in d){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}S(gv,rd);function vv(){nd.call(this),this.status=1}S(vv,nd);function zi(a){this.g=a}S(zi,mv),zi.prototype.ua=function(){vt(this.g,"a")},zi.prototype.ta=function(a){vt(this.g,new gv(a))},zi.prototype.sa=function(a){vt(this.g,new vv)},zi.prototype.ra=function(){vt(this.g,"b")},sl.prototype.createWebChannel=sl.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,KE=function(){return new sl},WE=function(){return Ka()},HE=Qn,If={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ga.NO_ERROR=0,Ga.TIMEOUT=8,Ga.HTTP_ERROR=6,nc=Ga,Og.COMPLETE="complete",qE=Og,Cg.EventType=Ko,Ko.OPEN="a",Ko.CLOSE="b",Ko.ERROR="c",Ko.MESSAGE="d",ot.prototype.listen=ot.prototype.K,Is=Cg,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,BE=Pe}).apply(typeof Al<"u"?Al:typeof self<"u"?self:typeof window<"u"?window:{});const u_="@firebase/firestore";/**
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
 */let Uo="10.14.0";/**
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
 */const Ti=new am("@firebase/firestore");function fs(){return Ti.logLevel}function G(t,...e){if(Ti.logLevel<=ae.DEBUG){const r=e.map(bm);Ti.debug(`Firestore (${Uo}): ${t}`,...r)}}function rn(t,...e){if(Ti.logLevel<=ae.ERROR){const r=e.map(bm);Ti.error(`Firestore (${Uo}): ${t}`,...r)}}function To(t,...e){if(Ti.logLevel<=ae.WARN){const r=e.map(bm);Ti.warn(`Firestore (${Uo}): ${t}`,...r)}}function bm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Uo}) INTERNAL ASSERTION FAILED: `+t;throw rn(e),new Error(e)}function pe(t,e){t||ee()}function ne(t,e){return t}/**
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
 */class mi{constructor(){this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}}/**
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
 */class GE{constructor(e,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,r){e.enqueueRetryable(()=>r(dt.UNAUTHENTICATED))}shutdown(){}}class AP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,r){this.changeListener=r,e.enqueueRetryable(()=>r(this.token.user))}shutdown(){this.changeListener=null}}class SP{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,r){pe(this.o===void 0);let n=this.i;const i=c=>this.i!==n?(n=this.i,r(c)):Promise.resolve();let o=new mi;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new mi,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const c=o;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new mi)}},0),s()}getToken(){const e=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then(n=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(pe(typeof n.accessToken=="string"),new GE(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string"),new dt(e)}}class CP{constructor(e,r,n){this.l=e,this.h=r,this.P=n,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class kP{constructor(e,r,n){this.l=e,this.h=r,this.P=n}getToken(){return Promise.resolve(new CP(this.l,this.h,this.P))}start(e,r){e.enqueueRetryable(()=>r(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class RP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,r){pe(this.o===void 0);const n=o=>{o.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,G("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?r(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>n(o))};const i=o=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(r=>r?(pe(typeof r.token=="string"),this.R=r.token,new RP(r.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),r=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(r);else for(let n=0;n<t;n++)r[n]=Math.floor(256*Math.random());return r}/**
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
 */class QE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=NP(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<r&&(n+=e.charAt(i[o]%e.length))}return n}}function de(t,e){return t<e?-1:t>e?1:0}function xo(t,e,r){return t.length===e.length&&t.every((n,i)=>r(n,e[i]))}/**
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
 */class He{constructor(e,r){if(this.seconds=e,this.nanoseconds=r,r<0)throw new K(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new K(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(e<-62135596800)throw new K(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const r=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*r));return new He(r,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new He(0,0))}static max(){return new re(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ha{constructor(e,r,n){r===void 0?r=0:r>e.length&&ee(),n===void 0?n=e.length-r:n>e.length-r&&ee(),this.segments=e,this.offset=r,this.len=n}get length(){return this.len}isEqual(e){return ha.comparator(this,e)===0}child(e){const r=this.segments.slice(this.offset,this.limit());return e instanceof ha?e.forEach(n=>{r.push(n)}):r.push(e),this.construct(r)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}forEach(e){for(let r=this.offset,n=this.limit();r<n;r++)e(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,r){const n=Math.min(e.length,r.length);for(let i=0;i<n;i++){const o=e.get(i),s=r.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<r.length?-1:e.length>r.length?1:0}}class Ee extends ha{construct(e,r,n){return new Ee(e,r,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const r=[];for(const n of e){if(n.indexOf("//")>=0)throw new K(L.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);r.push(...n.split("/").filter(i=>i.length>0))}return new Ee(r)}static emptyPath(){return new Ee([])}}const OP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends ha{construct(e,r,n){return new Ze(e,r,n)}static isValidIdentifier(e){return OP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const r=[];let n="",i=0;const o=()=>{if(n.length===0)throw new K(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(n),n=""};let s=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new K(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,i+=2}else l==="`"?(s=!s,i++):l!=="."||s?(n+=l,i++):(o(),i++)}if(o(),s)throw new K(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(r)}static emptyPath(){return new Ze([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ee.fromString(e))}static fromName(e){return new X(Ee.fromString(e).popFirst(5))}static empty(){return new X(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,r){return Ee.comparator(e.path,r.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ee(e.slice()))}}function DP(t,e){const r=t.toTimestamp().seconds,n=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(n===1e9?new He(r+1,0):new He(r,n));return new $n(i,X.empty(),e)}function LP(t){return new $n(t.readTime,t.key,-1)}class $n{constructor(e,r,n){this.readTime=e,this.documentKey=r,this.largestBatchId=n}static min(){return new $n(re.min(),X.empty(),-1)}static max(){return new $n(re.max(),X.empty(),-1)}}function VP(t,e){let r=t.readTime.compareTo(e.readTime);return r!==0?r:(r=X.comparator(t.documentKey,e.documentKey),r!==0?r:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $P{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function La(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==MP)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(r=>{this.isDone=!0,this.result=r,this.nextCallback&&this.nextCallback(r)},r=>{this.isDone=!0,this.error=r,this.catchCallback&&this.catchCallback(r)})}catch(e){return this.next(void 0,e)}next(e,r){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(r,this.error):this.wrapSuccess(e,this.result):new V((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(r,o).next(n,i)}})}toPromise(){return new Promise((e,r)=>{this.next(e,r)})}wrapUserFunction(e){try{const r=e();return r instanceof V?r:V.resolve(r)}catch(r){return V.reject(r)}}wrapSuccess(e,r){return e?this.wrapUserFunction(()=>e(r)):V.resolve(r)}wrapFailure(e,r){return e?this.wrapUserFunction(()=>e(r)):V.reject(r)}static resolve(e){return new V((r,n)=>{r(e)})}static reject(e){return new V((r,n)=>{n(e)})}static waitFor(e){return new V((r,n)=>{let i=0,o=0,s=!1;e.forEach(l=>{++i,l.next(()=>{++o,s&&o===i&&r()},c=>n(c))}),s=!0,o===i&&r()})}static or(e){let r=V.resolve(!1);for(const n of e)r=r.next(i=>i?V.resolve(i):n());return r}static forEach(e,r){const n=[];return e.forEach((i,o)=>{n.push(r.call(this,i,o))}),this.waitFor(n)}static mapArray(e,r){return new V((n,i)=>{const o=e.length,s=new Array(o);let l=0;for(let c=0;c<o;c++){const u=c;r(e[u]).next(f=>{s[u]=f,++l,l===o&&n(s)},f=>i(f))}})}static doWhile(e,r){return new V((n,i)=>{const o=()=>{e()===!0?r().next(()=>{o()},i):n()};o()})}}function FP(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}function Va(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Em{constructor(e,r){this.previousValue=e,r&&(r.sequenceNumberHandler=n=>this.ie(n),this.se=n=>r.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Em.oe=-1;function Eu(t){return t==null}function Bc(t){return t===0&&1/t==-1/0}function UP(t){return typeof t=="number"&&Number.isInteger(t)&&!Bc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function d_(t){let e=0;for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&e++;return e}function Di(t,e){for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&e(r,t[r])}function YE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Re{constructor(e,r){this.comparator=e,this.root=r||Xe.EMPTY}insert(e,r){return new Re(this.comparator,this.root.insert(e,r,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let r=this.root;for(;!r.isEmpty();){const n=this.comparator(e,r.key);if(n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}indexOf(e){let r=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return r+n.left.size;i<0?n=n.left:(r+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((r,n)=>(e(r,n),!1))}toString(){const e=[];return this.inorderTraversal((r,n)=>(e.push(`${r}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sl(this.root,e,this.comparator,!0)}}class Sl{constructor(e,r,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=r?n(e.key,r):1,r&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const r={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return r}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,r,n,i,o){this.key=e,this.value=r,this.color=n??Xe.RED,this.left=i??Xe.EMPTY,this.right=o??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,r,n,i,o){return new Xe(e??this.key,r??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,r,n){let i=this;const o=n(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,r,n),null):o===0?i.copy(null,r,null,null,null):i.copy(null,null,null,null,i.right.insert(e,r,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,r){let n,i=this;if(r(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,r),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),r(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,r))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),r=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,r)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,r,n,i,o){return this}insert(e,r,n){return new Xe(e,r)}remove(e,r){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((r,n)=>(e(r),!1))}forEachInRange(e,r){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;r(i.key)}}forEachWhile(e,r){let n;for(n=r!==void 0?this.data.getIteratorFrom(r):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const r=this.data.getIteratorFrom(e);return r.hasNext()?r.getNext().key:null}getIterator(){return new h_(this.data.getIterator())}getIteratorFrom(e){return new h_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let r=this;return r.size<e.size&&(r=e,e=this),e.forEach(n=>{r=r.add(n)}),r}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const r=this.data.getIterator(),n=e.data.getIterator();for(;r.hasNext();){const i=r.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(r=>{e.push(r)}),e}toString(){const e=[];return this.forEach(r=>e.push(r)),"SortedSet("+e.toString()+")"}copy(e){const r=new tt(this.comparator);return r.data=e,r}}class h_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new $t([])}unionWith(e){let r=new tt(Ze.comparator);for(const n of this.fields)r=r.add(n);for(const n of e)r=r.add(n);return new $t(r.toArray())}covers(e){for(const r of this.fields)if(r.isPrefixOf(e))return!0;return!1}isEqual(e){return xo(this.fields,e.fields,(r,n)=>r.isEqual(n))}}/**
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
 */class XE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const r=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new XE("Invalid base64 string: "+o):o}}(e);return new nt(r)}static fromUint8Array(e){const r=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new nt(r)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(r){return btoa(r)}(this.binaryString)}toUint8Array(){return function(r){const n=new Uint8Array(r.length);for(let i=0;i<r.length;i++)n[i]=r.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const zP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fn(t){if(pe(!!t),typeof t=="string"){let e=0;const r=zP.exec(t);if(pe(!!r),r[1]){let i=r[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(t);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xi(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(t){var e,r;return((r=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||r===void 0?void 0:r.stringValue)==="server_timestamp"}function Tm(t){const e=t.mapValue.fields.__previous_value__;return Im(e)?Tm(e):e}function fa(t){const e=Fn(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class jP{constructor(e,r,n,i,o,s,l,c,u){this.databaseId=e,this.appId=r,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class pa{constructor(e,r){this.projectId=e,this.database=r||"(default)"}static empty(){return new pa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl={mapValue:{}};function Ai(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Im(t)?4:qP(t)?9007199254740991:BP(t)?10:11:ee()}function Cr(t,e){if(t===e)return!0;const r=Ai(t);if(r!==Ai(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fa(t).isEqual(fa(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=Fn(i.timestampValue),l=Fn(o.timestampValue);return s.seconds===l.seconds&&s.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return xi(i.bytesValue).isEqual(xi(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Ve(i.geoPointValue.latitude)===Ve(o.geoPointValue.latitude)&&Ve(i.geoPointValue.longitude)===Ve(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Ve(i.integerValue)===Ve(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Ve(i.doubleValue),l=Ve(o.doubleValue);return s===l?Bc(s)===Bc(l):isNaN(s)&&isNaN(l)}return!1}(t,e);case 9:return xo(t.arrayValue.values||[],e.arrayValue.values||[],Cr);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},l=o.mapValue.fields||{};if(d_(s)!==d_(l))return!1;for(const c in s)if(s.hasOwnProperty(c)&&(l[c]===void 0||!Cr(s[c],l[c])))return!1;return!0}(t,e);default:return ee()}}function ma(t,e){return(t.values||[]).find(r=>Cr(r,e))!==void 0}function Ao(t,e){if(t===e)return 0;const r=Ai(t),n=Ai(e);if(r!==n)return de(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(o,s){const l=Ve(o.integerValue||o.doubleValue),c=Ve(s.integerValue||s.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return f_(t.timestampValue,e.timestampValue);case 4:return f_(fa(t),fa(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(o,s){const l=xi(o),c=xi(s);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const l=o.split("/"),c=s.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=de(l[u],c[u]);if(f!==0)return f}return de(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const l=de(Ve(o.latitude),Ve(s.latitude));return l!==0?l:de(Ve(o.longitude),Ve(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return p_(t.arrayValue,e.arrayValue);case 10:return function(o,s){var l,c,u,f;const p=o.fields||{},m=s.fields||{},T=(l=p.value)===null||l===void 0?void 0:l.arrayValue,S=(c=m.value)===null||c===void 0?void 0:c.arrayValue,P=de(((u=T==null?void 0:T.values)===null||u===void 0?void 0:u.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:p_(T,S)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===Cl.mapValue&&s===Cl.mapValue)return 0;if(o===Cl.mapValue)return 1;if(s===Cl.mapValue)return-1;const l=o.fields||{},c=Object.keys(l),u=s.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=de(c[p],f[p]);if(m!==0)return m;const T=Ao(l[c[p]],u[f[p]]);if(T!==0)return T}return de(c.length,f.length)}(t.mapValue,e.mapValue);default:throw ee()}}function f_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const r=Fn(t),n=Fn(e),i=de(r.seconds,n.seconds);return i!==0?i:de(r.nanos,n.nanos)}function p_(t,e){const r=t.values||[],n=e.values||[];for(let i=0;i<r.length&&i<n.length;++i){const o=Ao(r[i],n[i]);if(o)return o}return de(r.length,n.length)}function So(t){return Tf(t)}function Tf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const n=Fn(r);return`time(${n.seconds},${n.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(r){return xi(r).toBase64()}(t.bytesValue):"referenceValue"in t?function(r){return X.fromName(r).toString()}(t.referenceValue):"geoPointValue"in t?function(r){return`geo(${r.latitude},${r.longitude})`}(t.geoPointValue):"arrayValue"in t?function(r){let n="[",i=!0;for(const o of r.values||[])i?i=!1:n+=",",n+=Tf(o);return n+"]"}(t.arrayValue):"mapValue"in t?function(r){const n=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const s of n)o?o=!1:i+=",",i+=`${s}:${Tf(r.fields[s])}`;return i+"}"}(t.mapValue):ee()}function m_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function xf(t){return!!t&&"integerValue"in t}function xm(t){return!!t&&"arrayValue"in t}function g_(t){return!!t&&"nullValue"in t}function v_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ic(t){return!!t&&"mapValue"in t}function BP(t){var e,r;return((r=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||r===void 0?void 0:r.stringValue)==="__vector__"}function $s(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Di(t.mapValue.fields,(r,n)=>e.mapValue.fields[r]=$s(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let r=0;r<(t.arrayValue.values||[]).length;++r)e.arrayValue.values[r]=$s(t.arrayValue.values[r]);return e}return Object.assign({},t)}function qP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let r=this.value;for(let n=0;n<e.length-1;++n)if(r=(r.mapValue.fields||{})[e.get(n)],!ic(r))return null;return r=(r.mapValue.fields||{})[e.lastSegment()],r||null}}set(e,r){this.getFieldsMap(e.popLast())[e.lastSegment()]=$s(r)}setAll(e){let r=Ze.emptyPath(),n={},i=[];e.forEach((s,l)=>{if(!r.isImmediateParentOf(l)){const c=this.getFieldsMap(r);this.applyChanges(c,n,i),n={},i=[],r=l.popLast()}s?n[l.lastSegment()]=$s(s):i.push(l.lastSegment())});const o=this.getFieldsMap(r);this.applyChanges(o,n,i)}delete(e){const r=this.field(e.popLast());ic(r)&&r.mapValue.fields&&delete r.mapValue.fields[e.lastSegment()]}isEqual(e){return Cr(this.value,e.value)}getFieldsMap(e){let r=this.value;r.mapValue.fields||(r.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=r.mapValue.fields[e.get(n)];ic(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},r.mapValue.fields[e.get(n)]=i),r=i}return r.mapValue.fields}applyChanges(e,r,n){Di(r,(i,o)=>e[i]=o);for(const i of n)delete e[i]}clone(){return new Rt($s(this.value))}}function JE(t){const e=[];return Di(t.fields,(r,n)=>{const i=new Ze([r]);if(ic(n)){const o=JE(n.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new $t(e)}/**
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
 */class ft{constructor(e,r,n,i,o,s,l){this.key=e,this.documentType=r,this.version=n,this.readTime=i,this.createTime=o,this.data=s,this.documentState=l}static newInvalidDocument(e){return new ft(e,0,re.min(),re.min(),re.min(),Rt.empty(),0)}static newFoundDocument(e,r,n,i){return new ft(e,1,r,re.min(),n,i,0)}static newNoDocument(e,r){return new ft(e,2,r,re.min(),re.min(),Rt.empty(),0)}static newUnknownDocument(e,r){return new ft(e,3,r,re.min(),re.min(),Rt.empty(),2)}convertToFoundDocument(e,r){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=r,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qc{constructor(e,r){this.position=e,this.inclusive=r}}function y_(t,e,r){let n=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?n=X.comparator(X.fromName(s.referenceValue),r.key):n=Ao(s,r.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function __(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let r=0;r<t.position.length;r++)if(!Cr(t.position[r],e.position[r]))return!1;return!0}/**
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
 */class ga{constructor(e,r="asc"){this.field=e,this.dir=r}}function HP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ZE{}class ze extends ZE{constructor(e,r,n){super(),this.field=e,this.op=r,this.value=n}static create(e,r,n){return e.isKeyField()?r==="in"||r==="not-in"?this.createKeyFieldInFilter(e,r,n):new KP(e,r,n):r==="array-contains"?new YP(e,n):r==="in"?new XP(e,n):r==="not-in"?new JP(e,n):r==="array-contains-any"?new ZP(e,n):new ze(e,r,n)}static createKeyFieldInFilter(e,r,n){return r==="in"?new GP(e,n):new QP(e,n)}matches(e){const r=e.data.field(this.field);return this.op==="!="?r!==null&&this.matchesComparison(Ao(r,this.value)):r!==null&&Ai(this.value)===Ai(r)&&this.matchesComparison(Ao(r,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pr extends ZE{constructor(e,r){super(),this.filters=e,this.op=r,this.ae=null}static create(e,r){return new pr(e,r)}matches(e){return eI(this)?this.filters.find(r=>!r.matches(e))===void 0:this.filters.find(r=>r.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,r)=>e.concat(r.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function eI(t){return t.op==="and"}function tI(t){return WP(t)&&eI(t)}function WP(t){for(const e of t.filters)if(e instanceof pr)return!1;return!0}function Af(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+So(t.value);if(tI(t))return t.filters.map(e=>Af(e)).join(",");{const e=t.filters.map(r=>Af(r)).join(",");return`${t.op}(${e})`}}function rI(t,e){return t instanceof ze?function(n,i){return i instanceof ze&&n.op===i.op&&n.field.isEqual(i.field)&&Cr(n.value,i.value)}(t,e):t instanceof pr?function(n,i){return i instanceof pr&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,s,l)=>o&&rI(s,i.filters[l]),!0):!1}(t,e):void ee()}function nI(t){return t instanceof ze?function(r){return`${r.field.canonicalString()} ${r.op} ${So(r.value)}`}(t):t instanceof pr?function(r){return r.op.toString()+" {"+r.getFilters().map(nI).join(" ,")+"}"}(t):"Filter"}class KP extends ze{constructor(e,r,n){super(e,r,n),this.key=X.fromName(n.referenceValue)}matches(e){const r=X.comparator(e.key,this.key);return this.matchesComparison(r)}}class GP extends ze{constructor(e,r){super(e,"in",r),this.keys=iI("in",r)}matches(e){return this.keys.some(r=>r.isEqual(e.key))}}class QP extends ze{constructor(e,r){super(e,"not-in",r),this.keys=iI("not-in",r)}matches(e){return!this.keys.some(r=>r.isEqual(e.key))}}function iI(t,e){var r;return(((r=e.arrayValue)===null||r===void 0?void 0:r.values)||[]).map(n=>X.fromName(n.referenceValue))}class YP extends ze{constructor(e,r){super(e,"array-contains",r)}matches(e){const r=e.data.field(this.field);return xm(r)&&ma(r.arrayValue,this.value)}}class XP extends ze{constructor(e,r){super(e,"in",r)}matches(e){const r=e.data.field(this.field);return r!==null&&ma(this.value.arrayValue,r)}}class JP extends ze{constructor(e,r){super(e,"not-in",r)}matches(e){if(ma(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const r=e.data.field(this.field);return r!==null&&!ma(this.value.arrayValue,r)}}class ZP extends ze{constructor(e,r){super(e,"array-contains-any",r)}matches(e){const r=e.data.field(this.field);return!(!xm(r)||!r.arrayValue.values)&&r.arrayValue.values.some(n=>ma(this.value.arrayValue,n))}}/**
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
 */class eN{constructor(e,r=null,n=[],i=[],o=null,s=null,l=null){this.path=e,this.collectionGroup=r,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=s,this.endAt=l,this.ue=null}}function w_(t,e=null,r=[],n=[],i=null,o=null,s=null){return new eN(t,e,r,n,i,o,s)}function Am(t){const e=ne(t);if(e.ue===null){let r=e.path.canonicalString();e.collectionGroup!==null&&(r+="|cg:"+e.collectionGroup),r+="|f:",r+=e.filters.map(n=>Af(n)).join(","),r+="|ob:",r+=e.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),Eu(e.limit)||(r+="|l:",r+=e.limit),e.startAt&&(r+="|lb:",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(n=>So(n)).join(",")),e.endAt&&(r+="|ub:",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(n=>So(n)).join(",")),e.ue=r}return e.ue}function Sm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!HP(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(!rI(t.filters[r],e.filters[r]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!__(t.startAt,e.startAt)&&__(t.endAt,e.endAt)}function Sf(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class zo{constructor(e,r=null,n=[],i=[],o=null,s="F",l=null,c=null){this.path=e,this.collectionGroup=r,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=s,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function tN(t,e,r,n,i,o,s,l){return new zo(t,e,r,n,i,o,s,l)}function Cm(t){return new zo(t)}function b_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function oI(t){return t.collectionGroup!==null}function Fs(t){const e=ne(t);if(e.ce===null){e.ce=[];const r=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),r.add(o.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let l=new tt(Ze.comparator);return s.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(o=>{r.has(o.canonicalString())||o.isKeyField()||e.ce.push(new ga(o,n))}),r.has(Ze.keyField().canonicalString())||e.ce.push(new ga(Ze.keyField(),n))}return e.ce}function Tr(t){const e=ne(t);return e.le||(e.le=rN(e,Fs(t))),e.le}function rN(t,e){if(t.limitType==="F")return w_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new ga(i.field,o)});const r=t.endAt?new qc(t.endAt.position,t.endAt.inclusive):null,n=t.startAt?new qc(t.startAt.position,t.startAt.inclusive):null;return w_(t.path,t.collectionGroup,e,t.filters,t.limit,r,n)}}function Cf(t,e){const r=t.filters.concat([e]);return new zo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),r,t.limit,t.limitType,t.startAt,t.endAt)}function kf(t,e,r){return new zo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,r,t.startAt,t.endAt)}function Iu(t,e){return Sm(Tr(t),Tr(e))&&t.limitType===e.limitType}function sI(t){return`${Am(Tr(t))}|lt:${t.limitType}`}function qi(t){return`Query(target=${function(r){let n=r.path.canonicalString();return r.collectionGroup!==null&&(n+=" collectionGroup="+r.collectionGroup),r.filters.length>0&&(n+=`, filters: [${r.filters.map(i=>nI(i)).join(", ")}]`),Eu(r.limit)||(n+=", limit: "+r.limit),r.orderBy.length>0&&(n+=`, orderBy: [${r.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),r.startAt&&(n+=", startAt: ",n+=r.startAt.inclusive?"b:":"a:",n+=r.startAt.position.map(i=>So(i)).join(",")),r.endAt&&(n+=", endAt: ",n+=r.endAt.inclusive?"a:":"b:",n+=r.endAt.position.map(i=>So(i)).join(",")),`Target(${n})`}(Tr(t))}; limitType=${t.limitType})`}function Tu(t,e){return e.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):X.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(t,e)&&function(n,i){for(const o of Fs(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,l,c){const u=y_(s,l,c);return s.inclusive?u<=0:u<0}(n.startAt,Fs(n),i)||n.endAt&&!function(s,l,c){const u=y_(s,l,c);return s.inclusive?u>=0:u>0}(n.endAt,Fs(n),i))}(t,e)}function nN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function aI(t){return(e,r)=>{let n=!1;for(const i of Fs(t)){const o=iN(i,e,r);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function iN(t,e,r){const n=t.field.isKeyField()?X.comparator(e.key,r.key):function(o,s,l){const c=s.data.field(o),u=l.data.field(o);return c!==null&&u!==null?Ao(c,u):ee()}(t.field,e,r);switch(t.dir){case"asc":return n;case"desc":return-1*n;default:return ee()}}/**
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
 */class jo{constructor(e,r){this.mapKeyFn=e,this.equalsFn=r,this.inner={},this.innerSize=0}get(e){const r=this.mapKeyFn(e),n=this.inner[r];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,r){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,r]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,r]);i.push([e,r]),this.innerSize++}delete(e){const r=this.mapKeyFn(e),n=this.inner[r];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[r]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Di(this.inner,(r,n)=>{for(const[i,o]of n)e(i,o)})}isEmpty(){return YE(this.inner)}size(){return this.innerSize}}/**
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
 */const oN=new Re(X.comparator);function nn(){return oN}const lI=new Re(X.comparator);function Ts(...t){let e=lI;for(const r of t)e=e.insert(r.key,r);return e}function cI(t){let e=lI;return t.forEach((r,n)=>e=e.insert(r,n.overlayedDocument)),e}function ci(){return Us()}function uI(){return Us()}function Us(){return new jo(t=>t.toString(),(t,e)=>t.isEqual(e))}const sN=new Re(X.comparator),aN=new tt(X.comparator);function se(...t){let e=aN;for(const r of t)e=e.add(r);return e}const lN=new tt(de);function cN(){return lN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bc(e)?"-0":e}}function dI(t){return{integerValue:""+t}}function uN(t,e){return UP(e)?dI(e):km(t,e)}/**
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
 */class xu{constructor(){this._=void 0}}function dN(t,e,r){return t instanceof va?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Im(o)&&(o=Tm(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(r,e):t instanceof ya?fI(t,e):t instanceof _a?pI(t,e):function(i,o){const s=hI(i,o),l=E_(s)+E_(i.Pe);return xf(s)&&xf(i.Pe)?dI(l):km(i.serializer,l)}(t,e)}function hN(t,e,r){return t instanceof ya?fI(t,e):t instanceof _a?pI(t,e):r}function hI(t,e){return t instanceof Hc?function(n){return xf(n)||function(o){return!!o&&"doubleValue"in o}(n)}(e)?e:{integerValue:0}:null}class va extends xu{}class ya extends xu{constructor(e){super(),this.elements=e}}function fI(t,e){const r=mI(e);for(const n of t.elements)r.some(i=>Cr(i,n))||r.push(n);return{arrayValue:{values:r}}}class _a extends xu{constructor(e){super(),this.elements=e}}function pI(t,e){let r=mI(e);for(const n of t.elements)r=r.filter(i=>!Cr(i,n));return{arrayValue:{values:r}}}class Hc extends xu{constructor(e,r){super(),this.serializer=e,this.Pe=r}}function E_(t){return Ve(t.integerValue||t.doubleValue)}function mI(t){return xm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class fN{constructor(e,r){this.field=e,this.transform=r}}function pN(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof ya&&i instanceof ya||n instanceof _a&&i instanceof _a?xo(n.elements,i.elements,Cr):n instanceof Hc&&i instanceof Hc?Cr(n.Pe,i.Pe):n instanceof va&&i instanceof va}(t.transform,e.transform)}class mN{constructor(e,r){this.version=e,this.transformResults=r}}class Qt{constructor(e,r){this.updateTime=e,this.exists=r}static none(){return new Qt}static exists(e){return new Qt(void 0,e)}static updateTime(e){return new Qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Au{}function gI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Rm(t.key,Qt.none()):new Ma(t.key,t.data,Qt.none());{const r=t.data,n=Rt.empty();let i=new tt(Ze.comparator);for(let o of e.fields)if(!i.has(o)){let s=r.field(o);s===null&&o.length>1&&(o=o.popLast(),s=r.field(o)),s===null?n.delete(o):n.set(o,s),i=i.add(o)}return new Kn(t.key,n,new $t(i.toArray()),Qt.none())}}function gN(t,e,r){t instanceof Ma?function(i,o,s){const l=i.value.clone(),c=T_(i.fieldTransforms,o,s.transformResults);l.setAll(c),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,r):t instanceof Kn?function(i,o,s){if(!oc(i.precondition,o))return void o.convertToUnknownDocument(s.version);const l=T_(i.fieldTransforms,o,s.transformResults),c=o.data;c.setAll(vI(i)),c.setAll(l),o.convertToFoundDocument(s.version,c).setHasCommittedMutations()}(t,e,r):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,r)}function zs(t,e,r,n){return t instanceof Ma?function(o,s,l,c){if(!oc(o.precondition,s))return l;const u=o.value.clone(),f=x_(o.fieldTransforms,c,s);return u.setAll(f),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,r,n):t instanceof Kn?function(o,s,l,c){if(!oc(o.precondition,s))return l;const u=x_(o.fieldTransforms,c,s),f=s.data;return f.setAll(vI(o)),f.setAll(u),s.convertToFoundDocument(s.version,f).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(p=>p.field))}(t,e,r,n):function(o,s,l){return oc(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):l}(t,e,r)}function vN(t,e){let r=null;for(const n of t.fieldTransforms){const i=e.data.field(n.field),o=hI(n.transform,i||null);o!=null&&(r===null&&(r=Rt.empty()),r.set(n.field,o))}return r||null}function I_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&xo(n,i,(o,s)=>pN(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ma extends Au{constructor(e,r,n,i=[]){super(),this.key=e,this.value=r,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Kn extends Au{constructor(e,r,n,i,o=[]){super(),this.key=e,this.data=r,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function vI(t){const e=new Map;return t.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){const n=t.data.field(r);e.set(r,n)}}),e}function T_(t,e,r){const n=new Map;pe(t.length===r.length);for(let i=0;i<r.length;i++){const o=t[i],s=o.transform,l=e.data.field(o.field);n.set(o.field,hN(s,l,r[i]))}return n}function x_(t,e,r){const n=new Map;for(const i of t){const o=i.transform,s=r.data.field(i.field);n.set(i.field,dN(o,s,e))}return n}class Rm extends Au{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yN extends Au{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class _N{constructor(e,r,n,i){this.batchId=e,this.localWriteTime=r,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,r){const n=r.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&gN(o,e,n[i])}}applyToLocalView(e,r){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(r=zs(n,e,r,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(r=zs(n,e,r,this.localWriteTime));return r}applyToLocalDocumentSet(e,r){const n=uI();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let l=this.applyToLocalView(s,o.mutatedFields);l=r.has(i.key)?null:l;const c=gI(s,l);c!==null&&n.set(i.key,c),s.isValidDocument()||s.convertToNoDocument(re.min())}),n}keys(){return this.mutations.reduce((e,r)=>e.add(r.key),se())}isEqual(e){return this.batchId===e.batchId&&xo(this.mutations,e.mutations,(r,n)=>I_(r,n))&&xo(this.baseMutations,e.baseMutations,(r,n)=>I_(r,n))}}class Pm{constructor(e,r,n,i){this.batch=e,this.commitVersion=r,this.mutationResults=n,this.docVersions=i}static from(e,r,n){pe(e.mutations.length===n.length);let i=function(){return sN}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,n[s].version);return new Pm(e,r,n,i)}}/**
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
 */class wN{constructor(e,r){this.largestBatchId=e,this.mutation=r}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class bN{constructor(e,r){this.count=e,this.unchangedNames=r}}/**
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
 */var Fe,le;function EN(t){switch(t){default:return ee();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function yI(t){if(t===void 0)return rn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Fe.OK:return L.OK;case Fe.CANCELLED:return L.CANCELLED;case Fe.UNKNOWN:return L.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return L.INTERNAL;case Fe.UNAVAILABLE:return L.UNAVAILABLE;case Fe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Fe.NOT_FOUND:return L.NOT_FOUND;case Fe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Fe.ABORTED:return L.ABORTED;case Fe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Fe.DATA_LOSS:return L.DATA_LOSS;default:return ee()}}(le=Fe||(Fe={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function IN(){return new TextEncoder}/**
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
 */const TN=new pi([4294967295,4294967295],0);function A_(t){const e=IN().encode(t),r=new jE;return r.update(e),new Uint8Array(r.digest())}function S_(t){const e=new DataView(t.buffer),r=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new pi([r,n],0),new pi([i,o],0)]}class Nm{constructor(e,r,n){if(this.bitmap=e,this.padding=r,this.hashCount=n,r<0||r>=8)throw new xs(`Invalid padding: ${r}`);if(n<0)throw new xs(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new xs(`Invalid hash count: ${n}`);if(e.length===0&&r!==0)throw new xs(`Invalid padding when bitmap length is 0: ${r}`);this.Ie=8*e.length-r,this.Te=pi.fromNumber(this.Ie)}Ee(e,r,n){let i=e.add(r.multiply(pi.fromNumber(n)));return i.compare(TN)===1&&(i=new pi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const r=A_(e),[n,i]=S_(r);for(let o=0;o<this.hashCount;o++){const s=this.Ee(n,i,o);if(!this.de(s))return!1}return!0}static create(e,r,n){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new Nm(o,i,r);return n.forEach(l=>s.insert(l)),s}insert(e){if(this.Ie===0)return;const r=A_(e),[n,i]=S_(r);for(let o=0;o<this.hashCount;o++){const s=this.Ee(n,i,o);this.Ae(s)}}Ae(e){const r=Math.floor(e/8),n=e%8;this.bitmap[r]|=1<<n}}class xs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Su{constructor(e,r,n,i,o){this.snapshotVersion=e,this.targetChanges=r,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,r,n){const i=new Map;return i.set(e,$a.createSynthesizedTargetChangeForCurrentChange(e,r,n)),new Su(re.min(),i,new Re(de),nn(),se())}}class $a{constructor(e,r,n,i,o){this.resumeToken=e,this.current=r,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,r,n){return new $a(n,r,se(),se(),se())}}/**
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
 */class sc{constructor(e,r,n,i){this.Re=e,this.removedTargetIds=r,this.key=n,this.Ve=i}}class _I{constructor(e,r){this.targetId=e,this.me=r}}class wI{constructor(e,r,n=nt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=r,this.resumeToken=n,this.cause=i}}class C_{constructor(){this.fe=0,this.ge=R_(),this.pe=nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=se(),r=se(),n=se();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:r=r.add(i);break;case 1:n=n.add(i);break;default:ee()}}),new $a(this.pe,this.ye,e,r,n)}Ce(){this.we=!1,this.ge=R_()}Fe(e,r){this.we=!0,this.ge=this.ge.insert(e,r)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,pe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class xN{constructor(e){this.Le=e,this.Be=new Map,this.ke=nn(),this.qe=k_(),this.Qe=new Re(de)}Ke(e){for(const r of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(r,e.Ve):this.Ue(r,e.key,e.Ve);for(const r of e.removedTargetIds)this.Ue(r,e.key,e.Ve)}We(e){this.forEachTarget(e,r=>{const n=this.Ge(r);switch(e.state){case 0:this.ze(r)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(r);break;case 3:this.ze(r)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(r)&&(this.je(r),n.De(e.resumeToken));break;default:ee()}})}forEachTarget(e,r){e.targetIds.length>0?e.targetIds.forEach(r):this.Be.forEach((n,i)=>{this.ze(i)&&r(i)})}He(e){const r=e.targetId,n=e.me.count,i=this.Je(r);if(i){const o=i.target;if(Sf(o))if(n===0){const s=new X(o.path);this.Ue(r,s,ft.newNoDocument(s,re.min()))}else pe(n===1);else{const s=this.Ye(r);if(s!==n){const l=this.Ze(e),c=l?this.Xe(l,e,s):1;if(c!==0){this.je(r);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(r,u)}}}}}Ze(e){const r=e.me.unchangedNames;if(!r||!r.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=r;let s,l;try{s=xi(n).toUint8Array()}catch(c){if(c instanceof XE)return To("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Nm(s,i,o)}catch(c){return To(c instanceof xs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,r,n){return r.me.count===n-this.nt(e,r.targetId)?0:2}nt(e,r){const n=this.Le.getRemoteKeysForTarget(r);let i=0;return n.forEach(o=>{const s=this.Le.tt(),l=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.Ue(r,o,null),i++)}),i}rt(e){const r=new Map;this.Be.forEach((o,s)=>{const l=this.Je(s);if(l){if(o.current&&Sf(l.target)){const c=new X(l.target.path);this.ke.get(c)!==null||this.it(s,c)||this.Ue(s,c,ft.newNoDocument(c,e))}o.be&&(r.set(s,o.ve()),o.Ce())}});let n=se();this.qe.forEach((o,s)=>{let l=!0;s.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new Su(e,r,this.Qe,this.ke,n);return this.ke=nn(),this.qe=k_(),this.Qe=new Re(de),i}$e(e,r){if(!this.ze(e))return;const n=this.it(e,r.key)?2:0;this.Ge(e).Fe(r.key,n),this.ke=this.ke.insert(r.key,r),this.qe=this.qe.insert(r.key,this.st(r.key).add(e))}Ue(e,r,n){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,r)?i.Fe(r,1):i.Me(r),this.qe=this.qe.insert(r,this.st(r).delete(e)),n&&(this.ke=this.ke.insert(r,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const r=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let r=this.Be.get(e);return r||(r=new C_,this.Be.set(e,r)),r}st(e){let r=this.qe.get(e);return r||(r=new tt(de),this.qe=this.qe.insert(e,r)),r}ze(e){const r=this.Je(e)!==null;return r||G("WatchChangeAggregator","Detected inactive target",e),r}Je(e){const r=this.Be.get(e);return r&&r.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new C_),this.Le.getRemoteKeysForTarget(e).forEach(r=>{this.Ue(e,r,null)})}it(e,r){return this.Le.getRemoteKeysForTarget(e).has(r)}}function k_(){return new Re(X.comparator)}function R_(){return new Re(X.comparator)}const AN={asc:"ASCENDING",desc:"DESCENDING"},SN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},CN={and:"AND",or:"OR"};class kN{constructor(e,r){this.databaseId=e,this.useProto3Json=r}}function Rf(t,e){return t.useProto3Json||Eu(e)?e:{value:e}}function Wc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function RN(t,e){return Wc(t,e.toTimestamp())}function xr(t){return pe(!!t),re.fromTimestamp(function(r){const n=Fn(r);return new He(n.seconds,n.nanos)}(t))}function Om(t,e){return Pf(t,e).canonicalString()}function Pf(t,e){const r=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?r:r.child(e)}function EI(t){const e=Ee.fromString(t);return pe(SI(e)),e}function Nf(t,e){return Om(t.databaseId,e.path)}function Xd(t,e){const r=EI(e);if(r.get(1)!==t.databaseId.projectId)throw new K(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+t.databaseId.projectId);if(r.get(3)!==t.databaseId.database)throw new K(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+t.databaseId.database);return new X(TI(r))}function II(t,e){return Om(t.databaseId,e)}function PN(t){const e=EI(t);return e.length===4?Ee.emptyPath():TI(e)}function Of(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function TI(t){return pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function P_(t,e,r){return{name:Nf(t,e),fields:r.value.mapValue.fields}}function NN(t,e){let r;if("targetChange"in e){e.targetChange;const n=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(u,f){return u.useProto3Json?(pe(f===void 0||typeof f=="string"),nt.fromBase64String(f||"")):(pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),nt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,l=s&&function(u){const f=u.code===void 0?L.UNKNOWN:yI(u.code);return new K(f,u.message||"")}(s);r=new wI(n,i,o,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=Xd(t,n.document.name),o=xr(n.document.updateTime),s=n.document.createTime?xr(n.document.createTime):re.min(),l=new Rt({mapValue:{fields:n.document.fields}}),c=ft.newFoundDocument(i,o,s,l),u=n.targetIds||[],f=n.removedTargetIds||[];r=new sc(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=Xd(t,n.document),o=n.readTime?xr(n.readTime):re.min(),s=ft.newNoDocument(i,o),l=n.removedTargetIds||[];r=new sc([],l,s.key,s)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=Xd(t,n.document),o=n.removedTargetIds||[];r=new sc([],o,i,null)}else{if(!("filter"in e))return ee();{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,s=new bN(i,o),l=n.targetId;r=new _I(l,s)}}return r}function ON(t,e){let r;if(e instanceof Ma)r={update:P_(t,e.key,e.value)};else if(e instanceof Rm)r={delete:Nf(t,e.key)};else if(e instanceof Kn)r={update:P_(t,e.key,e.data),updateMask:jN(e.fieldMask)};else{if(!(e instanceof yN))return ee();r={verify:Nf(t,e.key)}}return e.fieldTransforms.length>0&&(r.updateTransforms=e.fieldTransforms.map(n=>function(o,s){const l=s.transform;if(l instanceof va)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ya)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof _a)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Hc)return{fieldPath:s.field.canonicalString(),increment:l.Pe};throw ee()}(0,n))),e.precondition.isNone||(r.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:RN(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:ee()}(t,e.precondition)),r}function DN(t,e){return t&&t.length>0?(pe(e!==void 0),t.map(r=>function(i,o){let s=i.updateTime?xr(i.updateTime):xr(o);return s.isEqual(re.min())&&(s=xr(o)),new mN(s,i.transformResults||[])}(r,e))):[]}function LN(t,e){return{documents:[II(t,e.path)]}}function VN(t,e){const r={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,r.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),r.structuredQuery.from=[{collectionId:n.lastSegment()}]),r.parent=II(t,i);const o=function(u){if(u.length!==0)return AI(pr.create(u,"and"))}(e.filters);o&&(r.structuredQuery.where=o);const s=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:Hi(m.field),direction:FN(m.dir)}}(f))}(e.orderBy);s&&(r.structuredQuery.orderBy=s);const l=Rf(t,e.limit);return l!==null&&(r.structuredQuery.limit=l),e.startAt&&(r.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(r.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:r,parent:i}}function MN(t){let e=PN(t.parent);const r=t.structuredQuery,n=r.from?r.from.length:0;let i=null;if(n>0){pe(n===1);const f=r.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let o=[];r.where&&(o=function(p){const m=xI(p);return m instanceof pr&&tI(m)?m.getFilters():[m]}(r.where));let s=[];r.orderBy&&(s=function(p){return p.map(m=>function(S){return new ga(Wi(S.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(r.orderBy));let l=null;r.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Eu(m)?null:m}(r.limit));let c=null;r.startAt&&(c=function(p){const m=!!p.before,T=p.values||[];return new qc(T,m)}(r.startAt));let u=null;return r.endAt&&(u=function(p){const m=!p.before,T=p.values||[];return new qc(T,m)}(r.endAt)),tN(e,i,s,o,l,"F",c,u)}function $N(t,e){const r=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return r==null?null:{"goog-listen-tags":r}}function xI(t){return t.unaryFilter!==void 0?function(r){switch(r.unaryFilter.op){case"IS_NAN":const n=Wi(r.unaryFilter.field);return ze.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Wi(r.unaryFilter.field);return ze.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Wi(r.unaryFilter.field);return ze.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Wi(r.unaryFilter.field);return ze.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(r){return ze.create(Wi(r.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(r.fieldFilter.op),r.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(r){return pr.create(r.compositeFilter.filters.map(n=>xI(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee()}}(r.compositeFilter.op))}(t):ee()}function FN(t){return AN[t]}function UN(t){return SN[t]}function zN(t){return CN[t]}function Hi(t){return{fieldPath:t.canonicalString()}}function Wi(t){return Ze.fromServerFormat(t.fieldPath)}function AI(t){return t instanceof ze?function(r){if(r.op==="=="){if(v_(r.value))return{unaryFilter:{field:Hi(r.field),op:"IS_NAN"}};if(g_(r.value))return{unaryFilter:{field:Hi(r.field),op:"IS_NULL"}}}else if(r.op==="!="){if(v_(r.value))return{unaryFilter:{field:Hi(r.field),op:"IS_NOT_NAN"}};if(g_(r.value))return{unaryFilter:{field:Hi(r.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hi(r.field),op:UN(r.op),value:r.value}}}(t):t instanceof pr?function(r){const n=r.getFilters().map(i=>AI(i));return n.length===1?n[0]:{compositeFilter:{op:zN(r.op),filters:n}}}(t):ee()}function jN(t){const e=[];return t.fields.forEach(r=>e.push(r.canonicalString())),{fieldPaths:e}}function SI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Tn{constructor(e,r,n,i,o=re.min(),s=re.min(),l=nt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=r,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Tn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,r){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,r,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class BN{constructor(e){this.ct=e}}function qN(t){const e=MN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kf(e,e.limit,"L"):e}/**
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
 */class HN{constructor(){this.un=new WN}addToCollectionParentIndex(e,r){return this.un.add(r),V.resolve()}getCollectionParents(e,r){return V.resolve(this.un.getEntries(r))}addFieldIndex(e,r){return V.resolve()}deleteFieldIndex(e,r){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,r){return V.resolve()}getDocumentsMatchingTarget(e,r){return V.resolve(null)}getIndexType(e,r){return V.resolve(0)}getFieldIndexes(e,r){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,r){return V.resolve($n.min())}getMinOffsetFromCollectionGroup(e,r){return V.resolve($n.min())}updateCollectionGroup(e,r,n){return V.resolve()}updateIndexEntries(e,r){return V.resolve()}}class WN{constructor(){this.index={}}add(e){const r=e.lastSegment(),n=e.popLast(),i=this.index[r]||new tt(Ee.comparator),o=!i.has(n);return this.index[r]=i.add(n),o}has(e){const r=e.lastSegment(),n=e.popLast(),i=this.index[r];return i&&i.has(n)}getEntries(e){return(this.index[e]||new tt(Ee.comparator)).toArray()}}/**
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
 */class Co{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Co(0)}static kn(){return new Co(-1)}}/**
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
 */class KN{constructor(){this.changes=new jo(e=>e.toString(),(e,r)=>e.isEqual(r)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,r){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(r))}getEntry(e,r){this.assertNotApplied();const n=this.changes.get(r);return n!==void 0?V.resolve(n):this.getFromCache(e,r)}getEntries(e,r){return this.getAllFromCache(e,r)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class GN{constructor(e,r){this.overlayedDocument=e,this.mutatedFields=r}}/**
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
 */class QN{constructor(e,r,n,i){this.remoteDocumentCache=e,this.mutationQueue=r,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,r){let n=null;return this.documentOverlayCache.getOverlay(e,r).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,r))).next(i=>(n!==null&&zs(n.mutation,i,$t.empty(),He.now()),i))}getDocuments(e,r){return this.remoteDocumentCache.getEntries(e,r).next(n=>this.getLocalViewOfDocuments(e,n,se()).next(()=>n))}getLocalViewOfDocuments(e,r,n=se()){const i=ci();return this.populateOverlays(e,i,r).next(()=>this.computeViews(e,r,i,n).next(o=>{let s=Ts();return o.forEach((l,c)=>{s=s.insert(l,c.overlayedDocument)}),s}))}getOverlayedDocuments(e,r){const n=ci();return this.populateOverlays(e,n,r).next(()=>this.computeViews(e,r,n,se()))}populateOverlays(e,r,n){const i=[];return n.forEach(o=>{r.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,l)=>{r.set(s,l)})})}computeViews(e,r,n,i){let o=nn();const s=Us(),l=function(){return Us()}();return r.forEach((c,u)=>{const f=n.get(u.key);i.has(u.key)&&(f===void 0||f.mutation instanceof Kn)?o=o.insert(u.key,u):f!==void 0?(s.set(u.key,f.mutation.getFieldMask()),zs(f.mutation,u,f.mutation.getFieldMask(),He.now())):s.set(u.key,$t.empty())}),this.recalculateAndSaveOverlays(e,o).next(c=>(c.forEach((u,f)=>s.set(u,f)),r.forEach((u,f)=>{var p;return l.set(u,new GN(f,(p=s.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,r){const n=Us();let i=new Re((s,l)=>s-l),o=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,r).next(s=>{for(const l of s)l.keys().forEach(c=>{const u=r.get(c);if(u===null)return;let f=n.get(c)||$t.empty();f=l.applyToLocalView(u,f),n.set(c,f);const p=(i.get(l.batchId)||se()).add(c);i=i.insert(l.batchId,p)})}).next(()=>{const s=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=uI();f.forEach(m=>{if(!o.has(m)){const T=gI(r.get(m),n.get(m));T!==null&&p.set(m,T),o=o.add(m)}}),s.push(this.documentOverlayCache.saveOverlays(e,u,p))}return V.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,r){return this.remoteDocumentCache.getEntries(e,r).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,r,n,i){return function(s){return X.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(r)?this.getDocumentsMatchingDocumentQuery(e,r.path):oI(r)?this.getDocumentsMatchingCollectionGroupQuery(e,r,n,i):this.getDocumentsMatchingCollectionQuery(e,r,n,i)}getNextDocuments(e,r,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,r,n,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,r,n.largestBatchId,i-o.size):V.resolve(ci());let l=-1,c=o;return s.next(u=>V.forEach(u,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),o.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,u,o)).next(()=>this.computeViews(e,c,u,se())).next(f=>({batchId:l,changes:cI(f)})))})}getDocumentsMatchingDocumentQuery(e,r){return this.getDocument(e,new X(r)).next(n=>{let i=Ts();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,r,n,i){const o=r.collectionGroup;let s=Ts();return this.indexManager.getCollectionParents(e,o).next(l=>V.forEach(l,c=>{const u=function(p,m){return new zo(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(r,c.child(o));return this.getDocumentsMatchingCollectionQuery(e,u,n,i).next(f=>{f.forEach((p,m)=>{s=s.insert(p,m)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,r,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,r.path,n.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,r,n,o,i))).next(s=>{o.forEach((c,u)=>{const f=u.getKey();s.get(f)===null&&(s=s.insert(f,ft.newInvalidDocument(f)))});let l=Ts();return s.forEach((c,u)=>{const f=o.get(c);f!==void 0&&zs(f.mutation,u,$t.empty(),He.now()),Tu(r,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,r){return V.resolve(this.hr.get(r))}saveBundleMetadata(e,r){return this.hr.set(r.id,function(i){return{id:i.id,version:i.version,createTime:xr(i.createTime)}}(r)),V.resolve()}getNamedQuery(e,r){return V.resolve(this.Pr.get(r))}saveNamedQuery(e,r){return this.Pr.set(r.name,function(i){return{name:i.name,query:qN(i.bundledQuery),readTime:xr(i.readTime)}}(r)),V.resolve()}}/**
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
 */class XN{constructor(){this.overlays=new Re(X.comparator),this.Ir=new Map}getOverlay(e,r){return V.resolve(this.overlays.get(r))}getOverlays(e,r){const n=ci();return V.forEach(r,i=>this.getOverlay(e,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(e,r,n){return n.forEach((i,o)=>{this.ht(e,r,o)}),V.resolve()}removeOverlaysForBatchId(e,r,n){const i=this.Ir.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(n)),V.resolve()}getOverlaysForCollection(e,r,n){const i=ci(),o=r.length+1,s=new X(r.child("")),l=this.overlays.getIteratorFrom(s);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!r.isPrefixOf(u.path))break;u.path.length===o&&c.largestBatchId>n&&i.set(c.getKey(),c)}return V.resolve(i)}getOverlaysForCollectionGroup(e,r,n,i){let o=new Re((u,f)=>u-f);const s=this.overlays.getIterator();for(;s.hasNext();){const u=s.getNext().value;if(u.getKey().getCollectionGroup()===r&&u.largestBatchId>n){let f=o.get(u.largestBatchId);f===null&&(f=ci(),o=o.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=ci(),c=o.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=i)););return V.resolve(l)}ht(e,r,n){const i=this.overlays.get(n.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(n.key,new wN(r,n));let o=this.Ir.get(r);o===void 0&&(o=se(),this.Ir.set(r,o)),this.Ir.set(r,o.add(n.key))}}/**
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
 */class JN{constructor(){this.sessionToken=nt.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,r){return this.sessionToken=r,V.resolve()}}/**
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
 */class Dm{constructor(){this.Tr=new tt(We.Er),this.dr=new tt(We.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,r){const n=new We(e,r);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,r){e.forEach(n=>this.addReference(n,r))}removeReference(e,r){this.Vr(new We(e,r))}mr(e,r){e.forEach(n=>this.removeReference(n,r))}gr(e){const r=new X(new Ee([])),n=new We(r,e),i=new We(r,e+1),o=[];return this.dr.forEachInRange([n,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const r=new X(new Ee([])),n=new We(r,e),i=new We(r,e+1);let o=se();return this.dr.forEachInRange([n,i],s=>{o=o.add(s.key)}),o}containsKey(e){const r=new We(e,0),n=this.Tr.firstAfterOrEqual(r);return n!==null&&e.isEqual(n.key)}}class We{constructor(e,r){this.key=e,this.wr=r}static Er(e,r){return X.comparator(e.key,r.key)||de(e.wr,r.wr)}static Ar(e,r){return de(e.wr,r.wr)||X.comparator(e.key,r.key)}}/**
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
 */class ZN{constructor(e,r){this.indexManager=e,this.referenceDelegate=r,this.mutationQueue=[],this.Sr=1,this.br=new tt(We.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,r,n,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new _N(o,r,n,i);this.mutationQueue.push(s);for(const l of i)this.br=this.br.add(new We(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(s)}lookupMutationBatch(e,r){return V.resolve(this.Dr(r))}getNextMutationBatchAfterBatchId(e,r){const n=r+1,i=this.vr(n),o=i<0?0:i;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,r){const n=new We(r,0),i=new We(r,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([n,i],s=>{const l=this.Dr(s.wr);o.push(l)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,r){let n=new tt(de);return r.forEach(i=>{const o=new We(i,0),s=new We(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],l=>{n=n.add(l.wr)})}),V.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,r){const n=r.path,i=n.length+1;let o=n;X.isDocumentKey(o)||(o=o.child(""));const s=new We(new X(o),0);let l=new tt(de);return this.br.forEachWhile(c=>{const u=c.key.path;return!!n.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.wr)),!0)},s),V.resolve(this.Cr(l))}Cr(e){const r=[];return e.forEach(n=>{const i=this.Dr(n);i!==null&&r.push(i)}),r}removeMutationBatch(e,r){pe(this.Fr(r.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return V.forEach(r.mutations,i=>{const o=new We(i.key,r.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,r){const n=new We(r,0),i=this.br.firstAfterOrEqual(n);return V.resolve(r.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,r){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const r=this.vr(e);return r<0||r>=this.mutationQueue.length?null:this.mutationQueue[r]}}/**
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
 */class e2{constructor(e){this.Mr=e,this.docs=function(){return new Re(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,r){const n=r.key,i=this.docs.get(n),o=i?i.size:0,s=this.Mr(r);return this.docs=this.docs.insert(n,{document:r.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const r=this.docs.get(e);r&&(this.docs=this.docs.remove(e),this.size-=r.size)}getEntry(e,r){const n=this.docs.get(r);return V.resolve(n?n.document.mutableCopy():ft.newInvalidDocument(r))}getEntries(e,r){let n=nn();return r.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():ft.newInvalidDocument(i))}),V.resolve(n)}getDocumentsMatchingQuery(e,r,n,i){let o=nn();const s=r.path,l=new X(s.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!s.isPrefixOf(u.path))break;u.path.length>s.length+1||VP(LP(f),n)<=0||(i.has(f.key)||Tu(r,f))&&(o=o.insert(f.key,f.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(e,r,n,i){ee()}Or(e,r){return V.forEach(this.docs,n=>r(n))}newChangeBuffer(e){return new t2(this)}getSize(e){return V.resolve(this.size)}}class t2 extends KN{constructor(e){super(),this.cr=e}applyChanges(e){const r=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?r.push(this.cr.addEntry(e,i)):this.cr.removeEntry(n)}),V.waitFor(r)}getFromCache(e,r){return this.cr.getEntry(e,r)}getAllFromCache(e,r){return this.cr.getEntries(e,r)}}/**
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
 */class r2{constructor(e){this.persistence=e,this.Nr=new jo(r=>Am(r),Sm),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Dm,this.targetCount=0,this.kr=Co.Bn()}forEachTarget(e,r){return this.Nr.forEach((n,i)=>r(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,r,n){return n&&(this.lastRemoteSnapshotVersion=n),r>this.Lr&&(this.Lr=r),V.resolve()}Kn(e){this.Nr.set(e.target,e);const r=e.targetId;r>this.highestTargetId&&(this.kr=new Co(r),this.highestTargetId=r),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,r){return this.Kn(r),this.targetCount+=1,V.resolve()}updateTargetData(e,r){return this.Kn(r),V.resolve()}removeTargetData(e,r){return this.Nr.delete(r.target),this.Br.gr(r.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,r,n){let i=0;const o=[];return this.Nr.forEach((s,l)=>{l.sequenceNumber<=r&&n.get(l.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(o).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,r){const n=this.Nr.get(r)||null;return V.resolve(n)}addMatchingKeys(e,r,n){return this.Br.Rr(r,n),V.resolve()}removeMatchingKeys(e,r,n){this.Br.mr(r,n);const i=this.persistence.referenceDelegate,o=[];return i&&r.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),V.waitFor(o)}removeMatchingKeysForTargetId(e,r){return this.Br.gr(r),V.resolve()}getMatchingKeysForTargetId(e,r){const n=this.Br.yr(r);return V.resolve(n)}containsKey(e,r){return V.resolve(this.Br.containsKey(r))}}/**
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
 */class n2{constructor(e,r){this.qr={},this.overlays={},this.Qr=new Em(0),this.Kr=!1,this.Kr=!0,this.$r=new JN,this.referenceDelegate=e(this),this.Ur=new r2(this),this.indexManager=new HN,this.remoteDocumentCache=function(i){return new e2(i)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new BN(r),this.Gr=new YN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let r=this.overlays[e.toKey()];return r||(r=new XN,this.overlays[e.toKey()]=r),r}getMutationQueue(e,r){let n=this.qr[e.toKey()];return n||(n=new ZN(r,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,r,n){G("MemoryPersistence","Starting transaction:",e);const i=new i2(this.Qr.next());return this.referenceDelegate.zr(),n(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,r){return V.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,r)))}}class i2 extends $P{constructor(e){super(),this.currentSequenceNumber=e}}class Lm{constructor(e){this.persistence=e,this.Jr=new Dm,this.Yr=null}static Zr(e){return new Lm(e)}get Xr(){if(this.Yr)return this.Yr;throw ee()}addReference(e,r,n){return this.Jr.addReference(n,r),this.Xr.delete(n.toString()),V.resolve()}removeReference(e,r,n){return this.Jr.removeReference(n,r),this.Xr.add(n.toString()),V.resolve()}markPotentiallyOrphaned(e,r){return this.Xr.add(r.toString()),V.resolve()}removeTarget(e,r){this.Jr.gr(r.targetId).forEach(i=>this.Xr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,r.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>n.removeTargetData(e,r))}zr(){this.Yr=new Set}jr(e){const r=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,n=>{const i=X.fromPath(n);return this.ei(e,i).next(o=>{o||r.removeEntry(i,re.min())})}).next(()=>(this.Yr=null,r.apply(e)))}updateLimboDocument(e,r){return this.ei(e,r).next(n=>{n?this.Xr.delete(r.toString()):this.Xr.add(r.toString())})}Wr(e){return 0}ei(e,r){return V.or([()=>V.resolve(this.Jr.containsKey(r)),()=>this.persistence.getTargetCache().containsKey(e,r),()=>this.persistence.Hr(e,r)])}}/**
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
 */class Vm{constructor(e,r,n,i){this.targetId=e,this.fromCache=r,this.$i=n,this.Ui=i}static Wi(e,r){let n=se(),i=se();for(const o of r.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Vm(e,r.fromCache,n,i)}}/**
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
 */class o2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class s2{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return YC()?8:FP(gt())>0?6:4}()}initialize(e,r){this.Ji=e,this.indexManager=r,this.Gi=!0}getDocumentsMatchingQuery(e,r,n,i){const o={result:null};return this.Yi(e,r).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,r,i,n).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new o2;return this.Xi(e,r,s).next(l=>{if(o.result=l,this.zi)return this.es(e,r,s,l.size)})}).next(()=>o.result)}es(e,r,n,i){return n.documentReadCount<this.ji?(fs()<=ae.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",qi(r),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(fs()<=ae.DEBUG&&G("QueryEngine","Query:",qi(r),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(fs()<=ae.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",qi(r),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tr(r))):V.resolve())}Yi(e,r){if(b_(r))return V.resolve(null);let n=Tr(r);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(r.limit!==null&&i===1&&(r=kf(r,null,"F"),n=Tr(r)),this.indexManager.getDocumentsMatchingTarget(e,n).next(o=>{const s=se(...o);return this.Ji.getDocuments(e,s).next(l=>this.indexManager.getMinOffset(e,n).next(c=>{const u=this.ts(r,l);return this.ns(r,u,s,c.readTime)?this.Yi(e,kf(r,null,"F")):this.rs(e,u,r,c)}))})))}Zi(e,r,n,i){return b_(r)||i.isEqual(re.min())?V.resolve(null):this.Ji.getDocuments(e,n).next(o=>{const s=this.ts(r,o);return this.ns(r,s,n,i)?V.resolve(null):(fs()<=ae.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qi(r)),this.rs(e,s,r,DP(i,-1)).next(l=>l))})}ts(e,r){let n=new tt(aI(e));return r.forEach((i,o)=>{Tu(e,o)&&(n=n.add(o))}),n}ns(e,r,n,i){if(e.limit===null)return!1;if(n.size!==r.size)return!0;const o=e.limitType==="F"?r.last():r.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,r,n){return fs()<=ae.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",qi(r)),this.Ji.getDocumentsMatchingQuery(e,r,$n.min(),n)}rs(e,r,n,i){return this.Ji.getDocumentsMatchingQuery(e,n,i).next(o=>(r.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,r,n,i){this.persistence=e,this.ss=r,this.serializer=i,this.os=new Re(de),this._s=new jo(o=>Am(o),Sm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QN(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",r=>e.collect(r,this.os))}}function l2(t,e,r,n){return new a2(t,e,r,n)}async function CI(t,e){const r=ne(t);return await r.persistence.runTransaction("Handle user change","readonly",n=>{let i;return r.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,r.ls(e),r.mutationQueue.getAllMutationBatches(n))).next(o=>{const s=[],l=[];let c=se();for(const u of i){s.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of o){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return r.localDocuments.getDocuments(n,c).next(u=>({hs:u,removedBatchIds:s,addedBatchIds:l}))})})}function c2(t,e){const r=ne(t);return r.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),o=r.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const p=u.batch,m=p.keys();let T=V.resolve();return m.forEach(S=>{T=T.next(()=>f.getEntry(c,S)).next(P=>{const N=u.docVersions.get(S);pe(N!==null),P.version.compareTo(N)<0&&(p.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),f.addEntry(P)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(r,n,e,o).next(()=>o.apply(n)).next(()=>r.mutationQueue.performConsistencyCheck(n)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let c=se();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>r.localDocuments.getDocuments(n,i))})}function kI(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",r=>e.Ur.getLastRemoteSnapshotVersion(r))}function u2(t,e){const r=ne(t),n=e.snapshotVersion;let i=r.os;return r.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=r.cs.newChangeBuffer({trackRemovals:!0});i=r.os;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(r.Ur.removeMatchingKeys(o,f.removedDocuments,p).next(()=>r.Ur.addMatchingKeys(o,f.addedDocuments,p)));let T=m.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(nt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,n)),i=i.insert(p,T),function(P,N,b){return P.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(m,T,f)&&l.push(r.Ur.updateTargetData(o,T))});let c=nn(),u=se();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(r.persistence.referenceDelegate.updateLimboDocument(o,f))}),l.push(d2(o,s,e.documentUpdates).next(f=>{c=f.Ps,u=f.Is})),!n.isEqual(re.min())){const f=r.Ur.getLastRemoteSnapshotVersion(o).next(p=>r.Ur.setTargetsMetadata(o,o.currentSequenceNumber,n));l.push(f)}return V.waitFor(l).next(()=>s.apply(o)).next(()=>r.localDocuments.getLocalViewOfDocuments(o,c,u)).next(()=>c)}).then(o=>(r.os=i,o))}function d2(t,e,r){let n=se(),i=se();return r.forEach(o=>n=n.add(o)),e.getEntries(t,n).next(o=>{let s=nn();return r.forEach((l,c)=>{const u=o.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(re.min())?(e.removeEntry(l,c.readTime),s=s.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),s=s.insert(l,c)):G("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ps:s,Is:i}})}function h2(t,e){const r=ne(t);return r.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),r.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function f2(t,e){const r=ne(t);return r.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return r.Ur.getTargetData(n,e).next(o=>o?(i=o,V.resolve(i)):r.Ur.allocateTargetId(n).next(s=>(i=new Tn(e,s,"TargetPurposeListen",n.currentSequenceNumber),r.Ur.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=r.os.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(r.os=r.os.insert(n.targetId,n),r._s.set(e,n.targetId)),n})}async function Df(t,e,r){const n=ne(t),i=n.os.get(e),o=r?"readwrite":"readwrite-primary";try{r||await n.persistence.runTransaction("Release target",o,s=>n.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!Va(s))throw s;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}n.os=n.os.remove(e),n._s.delete(i.target)}function N_(t,e,r){const n=ne(t);let i=re.min(),o=se();return n.persistence.runTransaction("Execute query","readwrite",s=>function(c,u,f){const p=ne(c),m=p._s.get(f);return m!==void 0?V.resolve(p.os.get(m)):p.Ur.getTargetData(u,f)}(n,s,Tr(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(s,l.targetId).next(c=>{o=c})}).next(()=>n.ss.getDocumentsMatchingQuery(s,e,r?i:re.min(),r?o:se())).next(l=>(p2(n,nN(e),l),{documents:l,Ts:o})))}function p2(t,e,r){let n=t.us.get(e)||re.min();r.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),t.us.set(e,n)}class O_{constructor(){this.activeTargetIds=cN()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class m2{constructor(){this.so=new O_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,r,n){}addLocalQueryTarget(e,r=!0){return r&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,r,n){this.oo[e]=r}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new O_,Promise.resolve()}handleUserChange(e,r,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class g2{_o(e){}shutdown(){}}/**
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
 */class D_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let kl=null;function Jd(){return kl===null?kl=function(){return 268435456+Math.round(2147483648*Math.random())}():kl++,"0x"+kl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class y2{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const ut="WebChannelConnection";class _2 extends class{constructor(r){this.databaseInfo=r,this.databaseId=r.databaseId;const n=r.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+r.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(r,n,i,o,s){const l=Jd(),c=this.xo(r,n.toUriEncodedString());G("RestConnection",`Sending RPC '${r}' ${l}:`,c,i);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,o,s),this.No(r,c,u,i).then(f=>(G("RestConnection",`Received RPC '${r}' ${l}: `,f),f),f=>{throw To("RestConnection",`RPC '${r}' ${l} failed with error: `,f,"url: ",c,"request:",i),f})}Lo(r,n,i,o,s,l){return this.Mo(r,n,i,o,s)}Oo(r,n,i){r["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Uo}(),r["Content-Type"]="text/plain",this.databaseInfo.appId&&(r["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,s)=>r[s]=o),i&&i.headers.forEach((o,s)=>r[s]=o)}xo(r,n){const i=v2[r];return`${this.Do}/v1/${n}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,r,n,i){const o=Jd();return new Promise((s,l)=>{const c=new BE;c.setWithCredentials(!0),c.listenOnce(qE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case nc.NO_ERROR:const f=c.getResponseJson();G(ut,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),s(f);break;case nc.TIMEOUT:G(ut,`RPC '${e}' ${o} timed out`),l(new K(L.DEADLINE_EXCEEDED,"Request time out"));break;case nc.HTTP_ERROR:const p=c.getStatus();if(G(ut,`RPC '${e}' ${o} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const T=m==null?void 0:m.error;if(T&&T.status&&T.message){const S=function(N){const b=N.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(b)>=0?b:L.UNKNOWN}(T.status);l(new K(S,T.message))}else l(new K(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new K(L.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{G(ut,`RPC '${e}' ${o} completed.`)}});const u=JSON.stringify(i);G(ut,`RPC '${e}' ${o} sending request:`,i),c.send(r,"POST",u,n,15)})}Bo(e,r,n){const i=Jd(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=KE(),l=WE(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,r,n),c.encodeInitMessageHeaders=!0;const f=o.join("");G(ut,`Creating RPC '${e}' stream ${i}: ${f}`,c);const p=s.createWebChannel(f,c);let m=!1,T=!1;const S=new y2({Io:N=>{T?G(ut,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(m||(G(ut,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),G(ut,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},To:()=>p.close()}),P=(N,b,y)=>{N.listen(b,x=>{try{y(x)}catch(D){setTimeout(()=>{throw D},0)}})};return P(p,Is.EventType.OPEN,()=>{T||(G(ut,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),P(p,Is.EventType.CLOSE,()=>{T||(T=!0,G(ut,`RPC '${e}' stream ${i} transport closed`),S.So())}),P(p,Is.EventType.ERROR,N=>{T||(T=!0,To(ut,`RPC '${e}' stream ${i} transport errored:`,N),S.So(new K(L.UNAVAILABLE,"The operation could not be completed")))}),P(p,Is.EventType.MESSAGE,N=>{var b;if(!T){const y=N.data[0];pe(!!y);const x=y,D=x.error||((b=x[0])===null||b===void 0?void 0:b.error);if(D){G(ut,`RPC '${e}' stream ${i} received error:`,D);const U=D.status;let z=function(_){const E=Fe[_];if(E!==void 0)return yI(E)}(U),w=D.message;z===void 0&&(z=L.INTERNAL,w="Unknown error status: "+U+" with message "+D.message),T=!0,S.So(new K(z,w)),p.close()}else G(ut,`RPC '${e}' stream ${i} received:`,y),S.bo(y)}}),P(l,HE.STAT_EVENT,N=>{N.stat===If.PROXY?G(ut,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===If.NOPROXY&&G(ut,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function Zd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(t){return new kN(t,!0)}/**
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
 */class RI{constructor(e,r,n=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=r,this.ko=n,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const r=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,r-n);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${r} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class PI{constructor(e,r,n,i,o,s,l,c){this.ui=e,this.Ho=n,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new RI(e,r)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,r){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():r&&r.code===L.RESOURCE_EXHAUSTED?(rn(r.toString()),rn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):r&&r.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(r)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),r=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Yo===r&&this.P_(n,i)},n=>{e(()=>{const i=new K(L.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(i)})})}P_(e,r){const n=this.h_(this.Yo);this.stream=this.T_(e,r),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{n(()=>this.I_(i))}),this.stream.onMessage(i=>{n(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return r=>{this.ui.enqueueAndForget(()=>this.Yo===e?r():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class w2 extends PI{constructor(e,r,n,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",r,n,i,s),this.serializer=o}T_(e,r){return this.connection.Bo("Listen",e,r)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const r=NN(this.serializer,e),n=function(o){if(!("targetChange"in o))return re.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?re.min():s.readTime?xr(s.readTime):re.min()}(e);return this.listener.d_(r,n)}A_(e){const r={};r.database=Of(this.serializer),r.addTarget=function(o,s){let l;const c=s.target;if(l=Sf(c)?{documents:LN(o,c)}:{query:VN(o,c)._t},l.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){l.resumeToken=bI(o,s.resumeToken);const u=Rf(o,s.expectedCount);u!==null&&(l.expectedCount=u)}else if(s.snapshotVersion.compareTo(re.min())>0){l.readTime=Wc(o,s.snapshotVersion.toTimestamp());const u=Rf(o,s.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const n=$N(this.serializer,e);n&&(r.labels=n),this.a_(r)}R_(e){const r={};r.database=Of(this.serializer),r.removeTarget=e,this.a_(r)}}class b2 extends PI{constructor(e,r,n,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",r,n,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,r){return this.connection.Bo("Write",e,r)}E_(e){return pe(!!e.streamToken),this.lastStreamToken=e.streamToken,pe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const r=DN(e.writeResults,e.commitTime),n=xr(e.commitTime);return this.listener.g_(n,r)}p_(){const e={};e.database=Of(this.serializer),this.a_(e)}m_(e){const r={streamToken:this.lastStreamToken,writes:e.map(n=>ON(this.serializer,n))};this.a_(r)}}/**
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
 */class E2 extends class{}{constructor(e,r,n,i){super(),this.authCredentials=e,this.appCheckCredentials=r,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new K(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,r,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,Pf(r,n),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(L.UNKNOWN,o.toString())})}Lo(e,r,n,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,l])=>this.connection.Lo(e,Pf(r,n),i,s,l,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(L.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class I2{constructor(e,r){this.asyncQueue=e,this.onlineStateHandler=r,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const r=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(rn(r),this.D_=!1):G("OnlineStateTracker",r)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class T2{constructor(e,r,n,i,o){this.localStore=e,this.datastore=r,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{n.enqueueAndForget(async()=>{Li(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=ne(c);u.L_.add(4),await Fa(u),u.q_.set("Unknown"),u.L_.delete(4),await ku(u)}(this))})}),this.q_=new I2(n,i)}}async function ku(t){if(Li(t))for(const e of t.B_)await e(!0)}async function Fa(t){for(const e of t.B_)await e(!1)}function NI(t,e){const r=ne(t);r.N_.has(e.targetId)||(r.N_.set(e.targetId,e),Um(r)?Fm(r):Bo(r).r_()&&$m(r,e))}function Mm(t,e){const r=ne(t),n=Bo(r);r.N_.delete(e),n.r_()&&OI(r,e),r.N_.size===0&&(n.r_()?n.o_():Li(r)&&r.q_.set("Unknown"))}function $m(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const r=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(r)}Bo(t).A_(e)}function OI(t,e){t.Q_.xe(e),Bo(t).R_(e)}function Fm(t){t.Q_=new xN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Bo(t).start(),t.q_.v_()}function Um(t){return Li(t)&&!Bo(t).n_()&&t.N_.size>0}function Li(t){return ne(t).L_.size===0}function DI(t){t.Q_=void 0}async function x2(t){t.q_.set("Online")}async function A2(t){t.N_.forEach((e,r)=>{$m(t,e)})}async function S2(t,e){DI(t),Um(t)?(t.q_.M_(e),Fm(t)):t.q_.set("Unknown")}async function C2(t,e,r){if(t.q_.set("Online"),e instanceof wI&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const l of o.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,s),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(n){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Kc(t,n)}else if(e instanceof sc?t.Q_.Ke(e):e instanceof _I?t.Q_.He(e):t.Q_.We(e),!r.isEqual(re.min()))try{const n=await kI(t.localStore);r.compareTo(n)>=0&&await function(o,s){const l=o.Q_.rt(s);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=o.N_.get(u);f&&o.N_.set(u,f.withResumeToken(c.resumeToken,s))}}),l.targetMismatches.forEach((c,u)=>{const f=o.N_.get(c);if(!f)return;o.N_.set(c,f.withResumeToken(nt.EMPTY_BYTE_STRING,f.snapshotVersion)),OI(o,c);const p=new Tn(f.target,c,u,f.sequenceNumber);$m(o,p)}),o.remoteSyncer.applyRemoteEvent(l)}(t,r)}catch(n){G("RemoteStore","Failed to raise snapshot:",n),await Kc(t,n)}}async function Kc(t,e,r){if(!Va(e))throw e;t.L_.add(1),await Fa(t),t.q_.set("Offline"),r||(r=()=>kI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await r(),t.L_.delete(1),await ku(t)})}function LI(t,e){return e().catch(r=>Kc(t,r,e))}async function Ru(t){const e=ne(t),r=Un(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;k2(e);)try{const i=await h2(e.localStore,n);if(i===null){e.O_.length===0&&r.o_();break}n=i.batchId,R2(e,i)}catch(i){await Kc(e,i)}VI(e)&&MI(e)}function k2(t){return Li(t)&&t.O_.length<10}function R2(t,e){t.O_.push(e);const r=Un(t);r.r_()&&r.V_&&r.m_(e.mutations)}function VI(t){return Li(t)&&!Un(t).n_()&&t.O_.length>0}function MI(t){Un(t).start()}async function P2(t){Un(t).p_()}async function N2(t){const e=Un(t);for(const r of t.O_)e.m_(r.mutations)}async function O2(t,e,r){const n=t.O_.shift(),i=Pm.from(n,e,r);await LI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ru(t)}async function D2(t,e){e&&Un(t).V_&&await async function(n,i){if(function(s){return EN(s)&&s!==L.ABORTED}(i.code)){const o=n.O_.shift();Un(n).s_(),await LI(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Ru(n)}}(t,e),VI(t)&&MI(t)}async function L_(t,e){const r=ne(t);r.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const n=Li(r);r.L_.add(3),await Fa(r),n&&r.q_.set("Unknown"),await r.remoteSyncer.handleCredentialChange(e),r.L_.delete(3),await ku(r)}async function L2(t,e){const r=ne(t);e?(r.L_.delete(2),await ku(r)):e||(r.L_.add(2),await Fa(r),r.q_.set("Unknown"))}function Bo(t){return t.K_||(t.K_=function(r,n,i){const o=ne(r);return o.w_(),new w2(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:x2.bind(null,t),Ro:A2.bind(null,t),mo:S2.bind(null,t),d_:C2.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Um(t)?Fm(t):t.q_.set("Unknown")):(await t.K_.stop(),DI(t))})),t.K_}function Un(t){return t.U_||(t.U_=function(r,n,i){const o=ne(r);return o.w_(),new b2(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:P2.bind(null,t),mo:D2.bind(null,t),f_:N2.bind(null,t),g_:O2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ru(t)):(await t.U_.stop(),t.O_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class zm{constructor(e,r,n,i,o){this.asyncQueue=e,this.timerId=r,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new mi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,r,n,i,o){const s=Date.now()+n,l=new zm(e,r,s,i,o);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jm(t,e){if(rn("AsyncQueue",`${e}: ${t}`),Va(t))return new K(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class go{constructor(e){this.comparator=e?(r,n)=>e(r,n)||X.comparator(r.key,n.key):(r,n)=>X.comparator(r.key,n.key),this.keyedMap=Ts(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new go(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const r=this.keyedMap.get(e);return r?this.sortedSet.indexOf(r):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((r,n)=>(e(r),!1))}add(e){const r=this.delete(e.key);return r.copy(r.keyedMap.insert(e.key,e),r.sortedSet.insert(e,null))}delete(e){const r=this.get(e);return r?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(r)):this}isEqual(e){if(!(e instanceof go)||this.size!==e.size)return!1;const r=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;r.hasNext();){const i=r.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(r=>{e.push(r.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,r){const n=new go;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=r,n}}/**
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
 */class V_{constructor(){this.W_=new Re(X.comparator)}track(e){const r=e.doc.key,n=this.W_.get(r);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(r,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(r,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(r,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(r,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(r):e.type===1&&n.type===2?this.W_=this.W_.insert(r,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(r,{type:2,doc:e.doc}):ee():this.W_=this.W_.insert(r,e)}G_(){const e=[];return this.W_.inorderTraversal((r,n)=>{e.push(n)}),e}}class ko{constructor(e,r,n,i,o,s,l,c,u){this.query=e,this.docs=r,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,r,n,i,o){const s=[];return r.forEach(l=>{s.push({type:0,doc:l})}),new ko(e,r,go.emptySet(r),s,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Iu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const r=this.docChanges,n=e.docChanges;if(r.length!==n.length)return!1;for(let i=0;i<r.length;i++)if(r[i].type!==n[i].type||!r[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class V2{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class M2{constructor(){this.queries=M_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(r,n){const i=ne(r),o=i.queries;i.queries=M_(),o.forEach((s,l)=>{for(const c of l.j_)c.onError(n)})})(this,new K(L.ABORTED,"Firestore shutting down"))}}function M_(){return new jo(t=>sI(t),Iu)}async function $2(t,e){const r=ne(t);let n=3;const i=e.query;let o=r.queries.get(i);o?!o.H_()&&e.J_()&&(n=2):(o=new V2,n=e.J_()?0:1);try{switch(n){case 0:o.z_=await r.onListen(i,!0);break;case 1:o.z_=await r.onListen(i,!1);break;case 2:await r.onFirstRemoteStoreListen(i)}}catch(s){const l=jm(s,`Initialization of query '${qi(e.query)}' failed`);return void e.onError(l)}r.queries.set(i,o),o.j_.push(e),e.Z_(r.onlineState),o.z_&&e.X_(o.z_)&&Bm(r)}async function F2(t,e){const r=ne(t),n=e.query;let i=3;const o=r.queries.get(n);if(o){const s=o.j_.indexOf(e);s>=0&&(o.j_.splice(s,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return r.queries.delete(n),r.onUnlisten(n,!0);case 1:return r.queries.delete(n),r.onUnlisten(n,!1);case 2:return r.onLastRemoteStoreUnlisten(n);default:return}}function U2(t,e){const r=ne(t);let n=!1;for(const i of e){const o=i.query,s=r.queries.get(o);if(s){for(const l of s.j_)l.X_(i)&&(n=!0);s.z_=i}}n&&Bm(r)}function z2(t,e,r){const n=ne(t),i=n.queries.get(e);if(i)for(const o of i.j_)o.onError(r);n.queries.delete(e)}function Bm(t){t.Y_.forEach(e=>{e.next()})}var Lf,$_;($_=Lf||(Lf={})).ea="default",$_.Cache="cache";class j2{constructor(e,r,n){this.query=e,this.ta=r,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new ko(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let r=!1;return this.na?this.ia(e)&&(this.ta.next(e),r=!0):this.sa(e,this.onlineState)&&(this.oa(e),r=!0),this.ra=e,r}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let r=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),r=!0),r}sa(e,r){if(!e.fromCache||!this.J_())return!0;const n=r!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||r==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const r=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!r)&&this.options.includeMetadataChanges===!0}oa(e){e=ko.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Lf.Cache}}/**
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
 */class $I{constructor(e){this.key=e}}class FI{constructor(e){this.key=e}}class B2{constructor(e,r){this.query=e,this.Ta=r,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=se(),this.mutatedKeys=se(),this.Aa=aI(e),this.Ra=new go(this.Aa)}get Va(){return this.Ta}ma(e,r){const n=r?r.fa:new V_,i=r?r.Ra:this.Ra;let o=r?r.mutatedKeys:this.mutatedKeys,s=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),T=Tu(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),P=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let N=!1;m&&T?m.data.isEqual(T.data)?S!==P&&(n.track({type:3,doc:T}),N=!0):this.ga(m,T)||(n.track({type:2,doc:T}),N=!0,(c&&this.Aa(T,c)>0||u&&this.Aa(T,u)<0)&&(l=!0)):!m&&T?(n.track({type:0,doc:T}),N=!0):m&&!T&&(n.track({type:1,doc:m}),N=!0,(c||u)&&(l=!0)),N&&(T?(s=s.add(T),o=P?o.add(f):o.delete(f)):(s=s.delete(f),o=o.delete(f)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const f=this.query.limitType==="F"?s.last():s.first();s=s.delete(f.key),o=o.delete(f.key),n.track({type:1,doc:f})}return{Ra:s,fa:n,ns:l,mutatedKeys:o}}ga(e,r){return e.hasLocalMutations&&r.hasCommittedMutations&&!r.hasLocalMutations}applyChanges(e,r,n,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((f,p)=>function(T,S){const P=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return P(T)-P(S)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(n),i=i!=null&&i;const l=r&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,u=c!==this.Ea;return this.Ea=c,s.length!==0||u?{snapshot:new ko(this.query,e.Ra,o,s,e.mutatedKeys,c===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new V_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(r=>this.Ta=this.Ta.add(r)),e.modifiedDocuments.forEach(r=>{}),e.removedDocuments.forEach(r=>this.Ta=this.Ta.delete(r)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=se(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const r=[];return e.forEach(n=>{this.da.has(n)||r.push(new FI(n))}),this.da.forEach(n=>{e.has(n)||r.push(new $I(n))}),r}ba(e){this.Ta=e.Ts,this.da=se();const r=this.ma(e.documents);return this.applyChanges(r,!0)}Da(){return ko.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class q2{constructor(e,r,n){this.query=e,this.targetId=r,this.view=n}}class H2{constructor(e){this.key=e,this.va=!1}}class W2{constructor(e,r,n,i,o,s){this.localStore=e,this.remoteStore=r,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new jo(l=>sI(l),Iu),this.Ma=new Map,this.xa=new Set,this.Oa=new Re(X.comparator),this.Na=new Map,this.La=new Dm,this.Ba={},this.ka=new Map,this.qa=Co.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function K2(t,e,r=!0){const n=HI(t);let i;const o=n.Fa.get(e);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await UI(n,e,r,!0),i}async function G2(t,e){const r=HI(t);await UI(r,e,!0,!1)}async function UI(t,e,r,n){const i=await f2(t.localStore,Tr(e)),o=i.targetId,s=t.sharedClientState.addLocalQueryTarget(o,r);let l;return n&&(l=await Q2(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&r&&NI(t.remoteStore,i),l}async function Q2(t,e,r,n,i){t.Ka=(p,m,T)=>async function(P,N,b,y){let x=N.view.ma(b);x.ns&&(x=await N_(P.localStore,N.query,!1).then(({documents:w})=>N.view.ma(w,x)));const D=y&&y.targetChanges.get(N.targetId),U=y&&y.targetMismatches.get(N.targetId)!=null,z=N.view.applyChanges(x,P.isPrimaryClient,D,U);return U_(P,N.targetId,z.wa),z.snapshot}(t,p,m,T);const o=await N_(t.localStore,e,!0),s=new B2(e,o.Ts),l=s.ma(o.documents),c=$a.createSynthesizedTargetChangeForCurrentChange(r,n&&t.onlineState!=="Offline",i),u=s.applyChanges(l,t.isPrimaryClient,c);U_(t,r,u.wa);const f=new q2(e,r,s);return t.Fa.set(e,f),t.Ma.has(r)?t.Ma.get(r).push(e):t.Ma.set(r,[e]),u.snapshot}async function Y2(t,e,r){const n=ne(t),i=n.Fa.get(e),o=n.Ma.get(i.targetId);if(o.length>1)return n.Ma.set(i.targetId,o.filter(s=>!Iu(s,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Df(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),r&&Mm(n.remoteStore,i.targetId),Vf(n,i.targetId)}).catch(La)):(Vf(n,i.targetId),await Df(n.localStore,i.targetId,!0))}async function X2(t,e){const r=ne(t),n=r.Fa.get(e),i=r.Ma.get(n.targetId);r.isPrimaryClient&&i.length===1&&(r.sharedClientState.removeLocalQueryTarget(n.targetId),Mm(r.remoteStore,n.targetId))}async function J2(t,e,r){const n=oO(t);try{const i=await function(s,l){const c=ne(s),u=He.now(),f=l.reduce((T,S)=>T.add(S.key),se());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",T=>{let S=nn(),P=se();return c.cs.getEntries(T,f).next(N=>{S=N,S.forEach((b,y)=>{y.isValidDocument()||(P=P.add(b))})}).next(()=>c.localDocuments.getOverlayedDocuments(T,S)).next(N=>{p=N;const b=[];for(const y of l){const x=vN(y,p.get(y.key).overlayedDocument);x!=null&&b.push(new Kn(y.key,x,JE(x.value.mapValue),Qt.exists(!0)))}return c.mutationQueue.addMutationBatch(T,u,b,l)}).next(N=>{m=N;const b=N.applyToLocalDocumentSet(p,P);return c.documentOverlayCache.saveOverlays(T,N.batchId,b)})}).then(()=>({batchId:m.batchId,changes:cI(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(s,l,c){let u=s.Ba[s.currentUser.toKey()];u||(u=new Re(de)),u=u.insert(l,c),s.Ba[s.currentUser.toKey()]=u}(n,i.batchId,r),await Ua(n,i.changes),await Ru(n.remoteStore)}catch(i){const o=jm(i,"Failed to persist write");r.reject(o)}}async function zI(t,e){const r=ne(t);try{const n=await u2(r.localStore,e);e.targetChanges.forEach((i,o)=>{const s=r.Na.get(o);s&&(pe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.va=!0:i.modifiedDocuments.size>0?pe(s.va):i.removedDocuments.size>0&&(pe(s.va),s.va=!1))}),await Ua(r,n,e)}catch(n){await La(n)}}function F_(t,e,r){const n=ne(t);if(n.isPrimaryClient&&r===0||!n.isPrimaryClient&&r===1){const i=[];n.Fa.forEach((o,s)=>{const l=s.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(s,l){const c=ne(s);c.onlineState=l;let u=!1;c.queries.forEach((f,p)=>{for(const m of p.j_)m.Z_(l)&&(u=!0)}),u&&Bm(c)}(n.eventManager,e),i.length&&n.Ca.d_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Z2(t,e,r){const n=ne(t);n.sharedClientState.updateQueryState(e,"rejected",r);const i=n.Na.get(e),o=i&&i.key;if(o){let s=new Re(X.comparator);s=s.insert(o,ft.newNoDocument(o,re.min()));const l=se().add(o),c=new Su(re.min(),new Map,new Re(de),s,l);await zI(n,c),n.Oa=n.Oa.remove(o),n.Na.delete(e),qm(n)}else await Df(n.localStore,e,!1).then(()=>Vf(n,e,r)).catch(La)}async function eO(t,e){const r=ne(t),n=e.batch.batchId;try{const i=await c2(r.localStore,e);BI(r,n,null),jI(r,n),r.sharedClientState.updateMutationState(n,"acknowledged"),await Ua(r,i)}catch(i){await La(i)}}async function tO(t,e,r){const n=ne(t);try{const i=await function(s,l){const c=ne(s);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(pe(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(n.localStore,e);BI(n,e,r),jI(n,e),n.sharedClientState.updateMutationState(e,"rejected",r),await Ua(n,i)}catch(i){await La(i)}}function jI(t,e){(t.ka.get(e)||[]).forEach(r=>{r.resolve()}),t.ka.delete(e)}function BI(t,e,r){const n=ne(t);let i=n.Ba[n.currentUser.toKey()];if(i){const o=i.get(e);o&&(r?o.reject(r):o.resolve(),i=i.remove(e)),n.Ba[n.currentUser.toKey()]=i}}function Vf(t,e,r=null){t.sharedClientState.removeLocalQueryTarget(e);for(const n of t.Ma.get(e))t.Fa.delete(n),r&&t.Ca.$a(n,r);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(n=>{t.La.containsKey(n)||qI(t,n)})}function qI(t,e){t.xa.delete(e.path.canonicalString());const r=t.Oa.get(e);r!==null&&(Mm(t.remoteStore,r),t.Oa=t.Oa.remove(e),t.Na.delete(r),qm(t))}function U_(t,e,r){for(const n of r)n instanceof $I?(t.La.addReference(n.key,e),rO(t,n)):n instanceof FI?(G("SyncEngine","Document no longer in limbo: "+n.key),t.La.removeReference(n.key,e),t.La.containsKey(n.key)||qI(t,n.key)):ee()}function rO(t,e){const r=e.key,n=r.path.canonicalString();t.Oa.get(r)||t.xa.has(n)||(G("SyncEngine","New document in limbo: "+r),t.xa.add(n),qm(t))}function qm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const r=new X(Ee.fromString(e)),n=t.qa.next();t.Na.set(n,new H2(r)),t.Oa=t.Oa.insert(r,n),NI(t.remoteStore,new Tn(Tr(Cm(r.path)),n,"TargetPurposeLimboResolution",Em.oe))}}async function Ua(t,e,r){const n=ne(t),i=[],o=[],s=[];n.Fa.isEmpty()||(n.Fa.forEach((l,c)=>{s.push(n.Ka(c,e,r).then(u=>{var f;if((u||r)&&n.isPrimaryClient){const p=u?!u.fromCache:(f=r==null?void 0:r.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){i.push(u);const p=Vm.Wi(c.targetId,u);o.push(p)}}))}),await Promise.all(s),n.Ca.d_(i),await async function(c,u){const f=ne(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(u,m=>V.forEach(m.$i,T=>f.persistence.referenceDelegate.addReference(p,m.targetId,T)).next(()=>V.forEach(m.Ui,T=>f.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))}catch(p){if(!Va(p))throw p;G("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const T=f.os.get(m),S=T.snapshotVersion,P=T.withLastLimboFreeSnapshotVersion(S);f.os=f.os.insert(m,P)}}}(n.localStore,o))}async function nO(t,e){const r=ne(t);if(!r.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const n=await CI(r.localStore,e);r.currentUser=e,function(o,s){o.ka.forEach(l=>{l.forEach(c=>{c.reject(new K(L.CANCELLED,s))})}),o.ka.clear()}(r,"'waitForPendingWrites' promise is rejected due to a user change."),r.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Ua(r,n.hs)}}function iO(t,e){const r=ne(t),n=r.Na.get(e);if(n&&n.va)return se().add(n.key);{let i=se();const o=r.Ma.get(e);if(!o)return i;for(const s of o){const l=r.Fa.get(s);i=i.unionWith(l.view.Va)}return i}}function HI(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=zI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Z2.bind(null,e),e.Ca.d_=U2.bind(null,e.eventManager),e.Ca.$a=z2.bind(null,e.eventManager),e}function oO(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tO.bind(null,e),e}class Gc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Cu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,r){return null}Ha(e,r){return null}za(e){return l2(this.persistence,new s2,e.initialUser,this.serializer)}Ga(e){return new n2(Lm.Zr,this.serializer)}Wa(e){return new m2}async terminate(){var e,r;(e=this.gcScheduler)===null||e===void 0||e.stop(),(r=this.indexBackfillerScheduler)===null||r===void 0||r.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gc.provider={build:()=>new Gc};class Mf{async initialize(e,r){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(r),this.remoteStore=this.createRemoteStore(r),this.eventManager=this.createEventManager(r),this.syncEngine=this.createSyncEngine(r,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>F_(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=nO.bind(null,this.syncEngine),await L2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new M2}()}createDatastore(e){const r=Cu(e.databaseInfo.databaseId),n=function(o){return new _2(o)}(e.databaseInfo);return function(o,s,l,c){return new E2(o,s,l,c)}(e.authCredentials,e.appCheckCredentials,n,r)}createRemoteStore(e){return function(n,i,o,s,l){return new T2(n,i,o,s,l)}(this.localStore,this.datastore,e.asyncQueue,r=>F_(this.syncEngine,r,0),function(){return D_.D()?new D_:new g2}())}createSyncEngine(e,r){return function(i,o,s,l,c,u,f){const p=new W2(i,o,s,l,c,u);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,r)}async terminate(){var e,r;await async function(i){const o=ne(i);G("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Fa(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(r=this.eventManager)===null||r===void 0||r.terminate()}}Mf.provider={build:()=>new Mf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sO{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):rn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,r){setTimeout(()=>{this.muted||e(r)},0)}}/**
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
 */class aO{constructor(e,r,n,i,o){this.authCredentials=e,this.appCheckCredentials=r,this.asyncQueue=n,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=QE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async s=>{G("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(n,s=>(G("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){const n=jm(r,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function eh(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const r=t.configuration;await e.initialize(r);let n=r.initialUser;t.setCredentialChangeListener(async i=>{n.isEqual(i)||(await CI(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function z_(t,e){t.asyncQueue.verifyOperationInProgress();const r=await lO(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(r,t.configuration),t.setCredentialChangeListener(n=>L_(e.remoteStore,n)),t.setAppCheckTokenChangeListener((n,i)=>L_(e.remoteStore,i)),t._onlineComponents=e}async function lO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await eh(t,t._uninitializedComponentsProvider._offline)}catch(e){const r=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(r))throw r;To("Error using user provided cache. Falling back to memory cache: "+r),await eh(t,new Gc)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await eh(t,new Gc);return t._offlineComponents}async function WI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await z_(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await z_(t,new Mf))),t._onlineComponents}function cO(t){return WI(t).then(e=>e.syncEngine)}async function j_(t){const e=await WI(t),r=e.eventManager;return r.onListen=K2.bind(null,e.syncEngine),r.onUnlisten=Y2.bind(null,e.syncEngine),r.onFirstRemoteStoreListen=G2.bind(null,e.syncEngine),r.onLastRemoteStoreUnlisten=X2.bind(null,e.syncEngine),r}/**
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
 */function KI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=new Map;/**
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
 */function GI(t,e,r){if(!r)throw new K(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uO(t,e,r,n){if(e===!0&&n===!0)throw new K(L.INVALID_ARGUMENT,`${t} and ${r} cannot be used together.`)}function q_(t){if(!X.isDocumentKey(t))throw new K(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function H_(t){if(X.isDocumentKey(t))throw new K(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Ar(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=Pu(t);throw new K(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${r}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){var r,n;if(e.host===void 0){if(e.ssl!==void 0)throw new K(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(r=e.ssl)===null||r===void 0||r;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=KI((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new K(L.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new K(L.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new K(L.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nu{constructor(e,r,n,i){this._authCredentials=e,this._appCheckCredentials=r,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new W_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new W_(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new xP;switch(n.type){case"firstParty":return new kP(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new K(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(r){const n=B_.get(r);n&&(G("ComponentProvider","Removing Datastore"),B_.delete(r),n.terminate())}(this),Promise.resolve()}}function dO(t,e,r,n={}){var i;const o=(t=Ar(t,Nu))._getSettings(),s=`${e}:${r}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&To("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),n.mockUserToken){let l,c;if(typeof n.mockUserToken=="string")l=n.mockUserToken,c=dt.MOCK_USER;else{l=BC(n.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=n.mockUserToken.sub||n.mockUserToken.user_id;if(!u)throw new K(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new dt(u)}t._authCredentials=new AP(new GE(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,r,n){this.converter=r,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Vi(this.firestore,e,this._query)}}class Et{constructor(e,r,n){this.converter=r,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class Dn extends Vi{constructor(e,r,n){super(e,r,Cm(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new X(e))}withConverter(e){return new Dn(this.firestore,e,this._path)}}function K_(t,e,...r){if(t=Oe(t),GI("collection","path",e),t instanceof Nu){const n=Ee.fromString(e,...r);return H_(n),new Dn(t,null,n)}{if(!(t instanceof Et||t instanceof Dn))throw new K(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(Ee.fromString(e,...r));return H_(n),new Dn(t.firestore,null,n)}}function vr(t,e,...r){if(t=Oe(t),arguments.length===1&&(e=QE.newId()),GI("doc","path",e),t instanceof Nu){const n=Ee.fromString(e,...r);return q_(n),new Et(t,null,new X(n))}{if(!(t instanceof Et||t instanceof Dn))throw new K(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(Ee.fromString(e,...r));return q_(n),new Et(t.firestore,t instanceof Dn?t.converter:null,new X(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new RI(this,"async_queue_retry"),this.Vu=()=>{const n=Zd();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const r=Zd();r&&typeof r.addEventListener=="function"&&r.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const r=Zd();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const r=new mi;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(r.resolve,r.reject),r.promise)).then(()=>r.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Va(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const r=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const i=function(s){let l=s.message||"";return s.stack&&(l=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),l}(n);throw rn("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.du=!1,n))));return this.mu=r,r}enqueueAfterDelay(e,r,n){this.fu(),this.Ru.indexOf(e)>-1&&(r=0);const i=zm.createAndSchedule(this,e,r,n,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&ee()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const r of this.Tu)if(r.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((r,n)=>r.targetTimeMs-n.targetTimeMs);for(const r of this.Tu)if(r.skipDelay(),e!=="all"&&r.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const r=this.Tu.indexOf(e);this.Tu.splice(r,1)}}function Q_(t){return function(r,n){if(typeof r!="object"||r===null)return!1;const i=r;for(const o of n)if(o in i&&typeof i[o]=="function")return!0;return!1}(t,["next","error","complete"])}class Si extends Nu{constructor(e,r,n,i){super(e,r,n,i),this.type="firestore",this._queue=new G_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new G_(e),this._firestoreClient=void 0,await e}}}function hO(t,e){const r=typeof t=="object"?t:cm(),n=typeof t=="string"?t:"(default)",i=Vo(r,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=zC("firestore");o&&dO(i,...o)}return i}function QI(t){if(t._terminated)throw new K(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||fO(t),t._firestoreClient}function fO(t){var e,r,n;const i=t._freezeSettings(),o=function(l,c,u,f){return new jP(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,KI(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((r=i.localCache)===null||r===void 0)&&r._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new aO(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ro(nt.fromBase64String(e))}catch(r){throw new K(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(e){return new Ro(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(...e){for(let r=0;r<e.length;++r)if(e[r].length===0)throw new K(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Hm{constructor(e,r){if(!isFinite(e)||e<-90||e>90)throw new K(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(r)||r<-180||r>180)throw new K(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=e,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
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
 */class Wm{constructor(e){this._values=(e||[]).map(r=>r)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const pO=/^__.*__$/;class mO{constructor(e,r,n){this.data=e,this.fieldMask=r,this.fieldTransforms=n}toMutation(e,r){return this.fieldMask!==null?new Kn(e,this.data,this.fieldMask,r,this.fieldTransforms):new Ma(e,this.data,r,this.fieldTransforms)}}class YI{constructor(e,r,n){this.data=e,this.fieldMask=r,this.fieldTransforms=n}toMutation(e,r){return new Kn(e,this.data,this.fieldMask,r,this.fieldTransforms)}}function XI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class Km{constructor(e,r,n,i,o,s){this.settings=e,this.databaseId=r,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Km(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var r;const n=(r=this.path)===null||r===void 0?void 0:r.child(e),i=this.Fu({path:n,xu:!1});return i.Ou(e),i}Nu(e){var r;const n=(r=this.path)===null||r===void 0?void 0:r.child(e),i=this.Fu({path:n,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Qc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(r=>e.isPrefixOf(r))!==void 0||this.fieldTransforms.find(r=>e.isPrefixOf(r.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(XI(this.Cu)&&pO.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class gO{constructor(e,r,n){this.databaseId=e,this.ignoreUndefinedProperties=r,this.serializer=n||Cu(e)}Qu(e,r,n,i=!1){return new Km({Cu:e,methodName:r,qu:n,path:Ze.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lu(t){const e=t._freezeSettings(),r=Cu(t._databaseId);return new gO(t._databaseId,!!e.ignoreUndefinedProperties,r)}function JI(t,e,r,n,i,o={}){const s=t.Qu(o.merge||o.mergeFields?2:0,e,r,i);Qm("Data must be an object, but it was:",s,n);const l=ZI(n,s);let c,u;if(o.merge)c=new $t(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const f=[];for(const p of o.mergeFields){const m=$f(e,p,r);if(!s.contains(m))throw new K(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);tT(f,m)||f.push(m)}c=new $t(f),u=s.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=s.fieldTransforms;return new mO(new Rt(l),c,u)}class Vu extends Du{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vu}}class Gm extends Du{_toFieldTransform(e){return new fN(e.path,new va)}isEqual(e){return e instanceof Gm}}function vO(t,e,r,n){const i=t.Qu(1,e,r);Qm("Data must be an object, but it was:",i,n);const o=[],s=Rt.empty();Di(n,(c,u)=>{const f=Ym(e,c,r);u=Oe(u);const p=i.Nu(f);if(u instanceof Vu)o.push(f);else{const m=za(u,p);m!=null&&(o.push(f),s.set(f,m))}});const l=new $t(o);return new YI(s,l,i.fieldTransforms)}function yO(t,e,r,n,i,o){const s=t.Qu(1,e,r),l=[$f(e,n,r)],c=[i];if(o.length%2!=0)throw new K(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<o.length;m+=2)l.push($f(e,o[m])),c.push(o[m+1]);const u=[],f=Rt.empty();for(let m=l.length-1;m>=0;--m)if(!tT(u,l[m])){const T=l[m];let S=c[m];S=Oe(S);const P=s.Nu(T);if(S instanceof Vu)u.push(T);else{const N=za(S,P);N!=null&&(u.push(T),f.set(T,N))}}const p=new $t(u);return new YI(f,p,s.fieldTransforms)}function _O(t,e,r,n=!1){return za(r,t.Qu(n?4:3,e))}function za(t,e){if(eT(t=Oe(t)))return Qm("Unsupported field value:",e,t),ZI(t,e);if(t instanceof Du)return function(n,i){if(!XI(i.Cu))throw i.Bu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,i){const o=[];let s=0;for(const l of n){let c=za(l,i.Lu(s));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),s++}return{arrayValue:{values:o}}}(t,e)}return function(n,i){if((n=Oe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return uN(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=He.fromDate(n);return{timestampValue:Wc(i.serializer,o)}}if(n instanceof He){const o=new He(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Wc(i.serializer,o)}}if(n instanceof Hm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ro)return{bytesValue:bI(i.serializer,n._byteString)};if(n instanceof Et){const o=i.databaseId,s=n.firestore._databaseId;if(!s.isEqual(o))throw i.Bu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Om(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Wm)return function(s,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return km(l.serializer,c)})}}}}}}(n,i);throw i.Bu(`Unsupported field value: ${Pu(n)}`)}(t,e)}function ZI(t,e){const r={};return YE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Di(t,(n,i)=>{const o=za(i,e.Mu(n));o!=null&&(r[n]=o)}),{mapValue:{fields:r}}}function eT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof Hm||t instanceof Ro||t instanceof Et||t instanceof Du||t instanceof Wm)}function Qm(t,e,r){if(!eT(r)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(r)){const n=Pu(r);throw n==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+n)}}function $f(t,e,r){if((e=Oe(e))instanceof Ou)return e._internalPath;if(typeof e=="string")return Ym(t,e);throw Qc("Field path arguments must be of type string or ",t,!1,void 0,r)}const wO=new RegExp("[~\\*/\\[\\]]");function Ym(t,e,r){if(e.search(wO)>=0)throw Qc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,r);try{return new Ou(...e.split("."))._internalPath}catch{throw Qc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,r)}}function Qc(t,e,r,n,i){const o=n&&!n.isEmpty(),s=i!==void 0;let l=`Function ${e}() called with invalid data`;r&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=` in field ${n}`),s&&(c+=` in document ${i}`),c+=")"),new K(L.INVALID_ARGUMENT,l+t+c)}function tT(t,e){return t.some(r=>r.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,r,n,i,o){this._firestore=e,this._userDataWriter=r,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const r=this._document.data.field(Mu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r)}}}class bO extends rT{data(){return super.data()}}function Mu(t,e){return typeof e=="string"?Ym(t,e):e instanceof Ou?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xm{}class nT extends Xm{}function IO(t,e,...r){let n=[];e instanceof Xm&&n.push(e),n=n.concat(r),function(o){const s=o.filter(c=>c instanceof Jm).length,l=o.filter(c=>c instanceof $u).length;if(s>1||s>0&&l>0)throw new K(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)t=i._apply(t);return t}class $u extends nT{constructor(e,r,n){super(),this._field=e,this._op=r,this._value=n,this.type="where"}static _create(e,r,n){return new $u(e,r,n)}_apply(e){const r=this._parse(e);return iT(e._query,r),new Vi(e.firestore,e.converter,Cf(e._query,r))}_parse(e){const r=Lu(e.firestore);return function(o,s,l,c,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new K(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){X_(p,f);const T=[];for(const S of p)T.push(Y_(c,o,S));m={arrayValue:{values:T}}}else m=Y_(c,o,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||X_(p,f),m=_O(l,s,p,f==="in"||f==="not-in");return ze.create(u,f,m)}(e._query,"where",r,e.firestore._databaseId,this._field,this._op,this._value)}}function TO(t,e,r){const n=e,i=Mu("where",t);return $u._create(i,n,r)}class Jm extends Xm{constructor(e,r){super(),this.type=e,this._queryConstraints=r}static _create(e,r){return new Jm(e,r)}_parse(e){const r=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return r.length===1?r[0]:pr.create(r,this._getOperator())}_apply(e){const r=this._parse(e);return r.getFilters().length===0?e:(function(i,o){let s=i;const l=o.getFlattenedFilters();for(const c of l)iT(s,c),s=Cf(s,c)}(e._query,r),new Vi(e.firestore,e.converter,Cf(e._query,r)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Zm extends nT{constructor(e,r){super(),this._field=e,this._direction=r,this.type="orderBy"}static _create(e,r){return new Zm(e,r)}_apply(e){const r=function(i,o,s){if(i.startAt!==null)throw new K(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new K(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ga(o,s)}(e._query,this._field,this._direction);return new Vi(e.firestore,e.converter,function(i,o){const s=i.explicitOrderBy.concat([o]);return new zo(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function xO(t,e="asc"){const r=e,n=Mu("orderBy",t);return Zm._create(n,r)}function Y_(t,e,r){if(typeof(r=Oe(r))=="string"){if(r==="")throw new K(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!oI(e)&&r.indexOf("/")!==-1)throw new K(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);const n=e.path.child(Ee.fromString(r));if(!X.isDocumentKey(n))throw new K(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return m_(t,new X(n))}if(r instanceof Et)return m_(t,r._key);throw new K(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pu(r)}.`)}function X_(t,e){if(!Array.isArray(t)||t.length===0)throw new K(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function iT(t,e){const r=function(i,o){for(const s of i)for(const l of s.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(r!==null)throw r===e.op?new K(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${r.toString()}' filters.`)}class AO{convertValue(e,r="none"){switch(Ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,r);case 5:return e.stringValue;case 6:return this.convertBytes(xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,r);case 11:return this.convertObject(e.mapValue,r);case 10:return this.convertVectorValue(e.mapValue);default:throw ee()}}convertObject(e,r){return this.convertObjectMap(e.fields,r)}convertObjectMap(e,r="none"){const n={};return Di(e,(i,o)=>{n[i]=this.convertValue(o,r)}),n}convertVectorValue(e){var r,n,i;const o=(i=(n=(r=e.fields)===null||r===void 0?void 0:r.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(s=>Ve(s.doubleValue));return new Wm(o)}convertGeoPoint(e){return new Hm(Ve(e.latitude),Ve(e.longitude))}convertArray(e,r){return(e.values||[]).map(n=>this.convertValue(n,r))}convertServerTimestamp(e,r){switch(r){case"previous":const n=Tm(e);return n==null?null:this.convertValue(n,r);case"estimate":return this.convertTimestamp(fa(e));default:return null}}convertTimestamp(e){const r=Fn(e);return new He(r.seconds,r.nanos)}convertDocumentKey(e,r){const n=Ee.fromString(e);pe(SI(n));const i=new pa(n.get(1),n.get(3)),o=new X(n.popFirst(5));return i.isEqual(r)||rn(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(t,e,r){let n;return n=t?r&&(r.merge||r.mergeFields)?t.toFirestore(e,r):t.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,r){this.hasPendingWrites=e,this.fromCache=r}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sT extends rT{constructor(e,r,n,i,o,s){super(e,r,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const r=new ac(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(r,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,r={}){if(this._document){const n=this._document.data.field(Mu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,r.serverTimestamps)}}}class ac extends sT{data(e={}){return super.data(e)}}class SO{constructor(e,r,n,i){this._firestore=e,this._userDataWriter=r,this._snapshot=i,this.metadata=new As(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(r=>e.push(r)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,r){this._snapshot.docs.forEach(n=>{e.call(r,new ac(this._firestore,this._userDataWriter,n.key,n,new As(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const r=!!e.includeMetadataChanges;if(r&&this._snapshot.excludesMetadataChanges)throw new K(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===r||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(l=>{const c=new ac(i._firestore,i._userDataWriter,l.doc.key,l.doc,new As(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const c=new ac(i._firestore,i._userDataWriter,l.doc.key,l.doc,new As(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,f=-1;return l.type!==0&&(u=s.indexOf(l.doc.key),s=s.delete(l.doc.key)),l.type!==1&&(s=s.add(l.doc),f=s.indexOf(l.doc.key)),{type:CO(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,r),this._cachedChangesIncludeMetadataChanges=r),this._cachedChanges}}function CO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}class aT extends AO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ro(e)}convertReference(e){const r=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,r)}}function Rl(t,e,r){t=Ar(t,Et);const n=Ar(t.firestore,Si),i=oT(t.converter,e,r);return Fu(n,[JI(Lu(n),"setDoc",t._key,i,t.converter!==null,r).toMutation(t._key,Qt.none())])}function th(t,e,r,...n){t=Ar(t,Et);const i=Ar(t.firestore,Si),o=Lu(i);let s;return s=typeof(e=Oe(e))=="string"||e instanceof Ou?yO(o,"updateDoc",t._key,e,r,n):vO(o,"updateDoc",t._key,e),Fu(i,[s.toMutation(t._key,Qt.exists(!0))])}function kO(t){return Fu(Ar(t.firestore,Si),[new Rm(t._key,Qt.none())])}function RO(t,e){const r=Ar(t.firestore,Si),n=vr(t),i=oT(t.converter,e);return Fu(r,[JI(Lu(t.firestore),"addDoc",n._key,i,t.converter!==null,{}).toMutation(n._key,Qt.exists(!1))]).then(()=>n)}function rh(t,...e){var r,n,i;t=Oe(t);let o={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||Q_(e[s])||(o=e[s],s++);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Q_(e[s])){const p=e[s];e[s]=(r=p.next)===null||r===void 0?void 0:r.bind(p),e[s+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),e[s+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let c,u,f;if(t instanceof Et)u=Ar(t.firestore,Si),f=Cm(t._key.path),c={next:p=>{e[s]&&e[s](PO(u,t,p))},error:e[s+1],complete:e[s+2]};else{const p=Ar(t,Vi);u=Ar(p.firestore,Si),f=p._query;const m=new aT(u);c={next:T=>{e[s]&&e[s](new SO(u,m,p,T))},error:e[s+1],complete:e[s+2]},EO(t._query)}return function(m,T,S,P){const N=new sO(P),b=new j2(T,N,S);return m.asyncQueue.enqueueAndForget(async()=>$2(await j_(m),b)),()=>{N.Za(),m.asyncQueue.enqueueAndForget(async()=>F2(await j_(m),b))}}(QI(u),f,l,c)}function Fu(t,e){return function(n,i){const o=new mi;return n.asyncQueue.enqueueAndForget(async()=>J2(await cO(n),i,o)),o.promise}(QI(t),e)}function PO(t,e,r){const n=r.docs.get(e._key),i=new aT(t);return new sT(t,i,e._key,n,new As(r.hasPendingWrites,r.fromCache),e.converter)}function Zn(){return new Gm("serverTimestamp")}(function(e,r=!0){(function(i){Uo=i})(Mo),Sr(new fr("firestore",(n,{instanceIdentifier:i,options:o})=>{const s=n.getProvider("app").getImmediate(),l=new Si(new SP(n.getProvider("auth-internal")),new PP(n.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new K(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pa(u.options.projectId,f)}(s,i),s);return o=Object.assign({useFetchStreams:r},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Gt(u_,"4.7.3",e),Gt(u_,"4.7.3","esm2017")})();var NO="firebase",OO="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(NO,OO,"app");const lT="@firebase/installations",eg="0.6.9";/**
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
 */const cT=1e4,uT=`w:${eg}`,dT="FIS_v2",DO="https://firebaseinstallations.googleapis.com/v1",LO=60*60*1e3,VO="installations",MO="Installations";/**
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
 */const $O={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ci=new Oi(VO,MO,$O);function hT(t){return t instanceof kr&&t.code.includes("request-failed")}/**
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
 */function fT({projectId:t}){return`${DO}/projects/${t}/installations`}function pT(t){return{token:t.token,requestStatus:2,expiresIn:UO(t.expiresIn),creationTime:Date.now()}}async function mT(t,e){const n=(await e.json()).error;return Ci.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function gT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function FO(t,{refreshToken:e}){const r=gT(t);return r.append("Authorization",zO(e)),r}async function vT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function UO(t){return Number(t.replace("s","000"))}function zO(t){return`${dT} ${t}`}/**
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
 */async function jO({appConfig:t,heartbeatServiceProvider:e},{fid:r}){const n=fT(t),i=gT(t),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:r,authVersion:dT,appId:t.appId,sdkVersion:uT},l={method:"POST",headers:i,body:JSON.stringify(s)},c=await vT(()=>fetch(n,l));if(c.ok){const u=await c.json();return{fid:u.fid||r,registrationStatus:2,refreshToken:u.refreshToken,authToken:pT(u.authToken)}}else throw await mT("Create Installation",c)}/**
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
 */function yT(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function BO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const qO=/^[cdef][\w-]{21}$/,Ff="";function HO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const r=WO(t);return qO.test(r)?r:Ff}catch{return Ff}}function WO(t){return BO(t).substr(0,22)}/**
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
 */const _T=new Map;function wT(t,e){const r=Uu(t);bT(r,e),KO(r,e)}function bT(t,e){const r=_T.get(t);if(r)for(const n of r)n(e)}function KO(t,e){const r=GO();r&&r.postMessage({key:t,fid:e}),QO()}let ui=null;function GO(){return!ui&&"BroadcastChannel"in self&&(ui=new BroadcastChannel("[Firebase] FID Change"),ui.onmessage=t=>{bT(t.data.key,t.data.fid)}),ui}function QO(){_T.size===0&&ui&&(ui.close(),ui=null)}/**
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
 */const YO="firebase-installations-database",XO=1,ki="firebase-installations-store";let nh=null;function tg(){return nh||(nh=yu(YO,XO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ki)}}})),nh}async function Yc(t,e){const r=Uu(t),i=(await tg()).transaction(ki,"readwrite"),o=i.objectStore(ki),s=await o.get(r);return await o.put(e,r),await i.done,(!s||s.fid!==e.fid)&&wT(t,e.fid),e}async function ET(t){const e=Uu(t),n=(await tg()).transaction(ki,"readwrite");await n.objectStore(ki).delete(e),await n.done}async function zu(t,e){const r=Uu(t),i=(await tg()).transaction(ki,"readwrite"),o=i.objectStore(ki),s=await o.get(r),l=e(s);return l===void 0?await o.delete(r):await o.put(l,r),await i.done,l&&(!s||s.fid!==l.fid)&&wT(t,l.fid),l}/**
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
 */async function rg(t){let e;const r=await zu(t.appConfig,n=>{const i=JO(n),o=ZO(t,i);return e=o.registrationPromise,o.installationEntry});return r.fid===Ff?{installationEntry:await e}:{installationEntry:r,registrationPromise:e}}function JO(t){const e=t||{fid:HO(),registrationStatus:0};return IT(e)}function ZO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ci.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const r={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=eD(t,r);return{installationEntry:r,registrationPromise:n}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:tD(t)}:{installationEntry:e}}async function eD(t,e){try{const r=await jO(t,e);return Yc(t.appConfig,r)}catch(r){throw hT(r)&&r.customData.serverCode===409?await ET(t.appConfig):await Yc(t.appConfig,{fid:e.fid,registrationStatus:0}),r}}async function tD(t){let e=await J_(t.appConfig);for(;e.registrationStatus===1;)await yT(100),e=await J_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:r,registrationPromise:n}=await rg(t);return n||r}return e}function J_(t){return zu(t,e=>{if(!e)throw Ci.create("installation-not-found");return IT(e)})}function IT(t){return rD(t)?{fid:t.fid,registrationStatus:0}:t}function rD(t){return t.registrationStatus===1&&t.registrationTime+cT<Date.now()}/**
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
 */async function nD({appConfig:t,heartbeatServiceProvider:e},r){const n=iD(t,r),i=FO(t,r),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:uT,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(s)},c=await vT(()=>fetch(n,l));if(c.ok){const u=await c.json();return pT(u)}else throw await mT("Generate Auth Token",c)}function iD(t,{fid:e}){return`${fT(t)}/${e}/authTokens:generate`}/**
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
 */async function ng(t,e=!1){let r;const n=await zu(t.appConfig,o=>{if(!TT(o))throw Ci.create("not-registered");const s=o.authToken;if(!e&&aD(s))return o;if(s.requestStatus===1)return r=oD(t,e),o;{if(!navigator.onLine)throw Ci.create("app-offline");const l=cD(o);return r=sD(t,l),l}});return r?await r:n.authToken}async function oD(t,e){let r=await Z_(t.appConfig);for(;r.authToken.requestStatus===1;)await yT(100),r=await Z_(t.appConfig);const n=r.authToken;return n.requestStatus===0?ng(t,e):n}function Z_(t){return zu(t,e=>{if(!TT(e))throw Ci.create("not-registered");const r=e.authToken;return uD(r)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function sD(t,e){try{const r=await nD(t,e),n=Object.assign(Object.assign({},e),{authToken:r});return await Yc(t.appConfig,n),r}catch(r){if(hT(r)&&(r.customData.serverCode===401||r.customData.serverCode===404))await ET(t.appConfig);else{const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Yc(t.appConfig,n)}throw r}}function TT(t){return t!==void 0&&t.registrationStatus===2}function aD(t){return t.requestStatus===2&&!lD(t)}function lD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+LO}function cD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function uD(t){return t.requestStatus===1&&t.requestTime+cT<Date.now()}/**
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
 */async function dD(t){const e=t,{installationEntry:r,registrationPromise:n}=await rg(e);return n?n.catch(console.error):ng(e).catch(console.error),r.fid}/**
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
 */async function hD(t,e=!1){const r=t;return await fD(r),(await ng(r,e)).token}async function fD(t){const{registrationPromise:e}=await rg(t);e&&await e}/**
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
 */function pD(t){if(!t||!t.options)throw ih("App Configuration");if(!t.name)throw ih("App Name");const e=["projectId","apiKey","appId"];for(const r of e)if(!t.options[r])throw ih(r);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ih(t){return Ci.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="installations",mD="installations-internal",gD=t=>{const e=t.getProvider("app").getImmediate(),r=pD(e),n=Vo(e,"heartbeat");return{app:e,appConfig:r,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},vD=t=>{const e=t.getProvider("app").getImmediate(),r=Vo(e,xT).getImmediate();return{getId:()=>dD(r),getToken:i=>hD(r,i)}};function yD(){Sr(new fr(xT,gD,"PUBLIC")),Sr(new fr(mD,vD,"PRIVATE"))}yD();Gt(lT,eg);Gt(lT,eg,"esm2017");/**
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
 */const _D="/firebase-messaging-sw.js",wD="/firebase-cloud-messaging-push-scope",AT="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",bD="https://fcmregistrations.googleapis.com/v1",ST="google.c.a.c_id",ED="google.c.a.c_l",ID="google.c.a.ts",TD="google.c.a.e";var ew;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(ew||(ew={}));/**
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
 */var wa;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(wa||(wa={}));/**
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
 */function $r(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function xD(t){const e="=".repeat((4-t.length%4)%4),r=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(r),i=new Uint8Array(n.length);for(let o=0;o<n.length;++o)i[o]=n.charCodeAt(o);return i}/**
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
 */const oh="fcm_token_details_db",AD=5,tw="fcm_token_object_Store";async function SD(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(oh))return null;let e=null;return(await yu(oh,AD,{upgrade:async(n,i,o,s)=>{var l;if(i<2||!n.objectStoreNames.contains(tw))return;const c=s.objectStore(tw),u=await c.index("fcmSenderId").get(t);if(await c.clear(),!!u){if(i===2){const f=u;if(!f.auth||!f.p256dh||!f.endpoint)return;e={token:f.fcmToken,createTime:(l=f.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:f.auth,p256dh:f.p256dh,endpoint:f.endpoint,swScope:f.swScope,vapidKey:typeof f.vapidKey=="string"?f.vapidKey:$r(f.vapidKey)}}}else if(i===3){const f=u;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:$r(f.auth),p256dh:$r(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:$r(f.vapidKey)}}}else if(i===4){const f=u;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:$r(f.auth),p256dh:$r(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:$r(f.vapidKey)}}}}}})).close(),await Wd(oh),await Wd("fcm_vapid_details_db"),await Wd("undefined"),CD(e)?e:null}function CD(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const kD="firebase-messaging-database",RD=1,ba="firebase-messaging-store";let sh=null;function CT(){return sh||(sh=yu(kD,RD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ba)}}})),sh}async function PD(t){const e=kT(t),n=await(await CT()).transaction(ba).objectStore(ba).get(e);if(n)return n;{const i=await SD(t.appConfig.senderId);if(i)return await ig(t,i),i}}async function ig(t,e){const r=kT(t),i=(await CT()).transaction(ba,"readwrite");return await i.objectStore(ba).put(e,r),await i.done,e}function kT({appConfig:t}){return t.appId}/**
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
 */const ND={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},pt=new Oi("messaging","Messaging",ND);/**
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
 */async function OD(t,e){const r=await sg(t),n=RT(e),i={method:"POST",headers:r,body:JSON.stringify(n)};let o;try{o=await(await fetch(og(t.appConfig),i)).json()}catch(s){throw pt.create("token-subscribe-failed",{errorInfo:s==null?void 0:s.toString()})}if(o.error){const s=o.error.message;throw pt.create("token-subscribe-failed",{errorInfo:s})}if(!o.token)throw pt.create("token-subscribe-no-token");return o.token}async function DD(t,e){const r=await sg(t),n=RT(e.subscriptionOptions),i={method:"PATCH",headers:r,body:JSON.stringify(n)};let o;try{o=await(await fetch(`${og(t.appConfig)}/${e.token}`,i)).json()}catch(s){throw pt.create("token-update-failed",{errorInfo:s==null?void 0:s.toString()})}if(o.error){const s=o.error.message;throw pt.create("token-update-failed",{errorInfo:s})}if(!o.token)throw pt.create("token-update-no-token");return o.token}async function LD(t,e){const n={method:"DELETE",headers:await sg(t)};try{const o=await(await fetch(`${og(t.appConfig)}/${e}`,n)).json();if(o.error){const s=o.error.message;throw pt.create("token-unsubscribe-failed",{errorInfo:s})}}catch(i){throw pt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function og({projectId:t}){return`${bD}/projects/${t}/registrations`}async function sg({appConfig:t,installations:e}){const r=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${r}`})}function RT({p256dh:t,auth:e,endpoint:r,vapidKey:n}){const i={web:{endpoint:r,auth:e,p256dh:t}};return n!==AT&&(i.web.applicationPubKey=n),i}/**
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
 */const VD=7*24*60*60*1e3;async function MD(t){const e=await FD(t.swRegistration,t.vapidKey),r={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:$r(e.getKey("auth")),p256dh:$r(e.getKey("p256dh"))},n=await PD(t.firebaseDependencies);if(n){if(UD(n.subscriptionOptions,r))return Date.now()>=n.createTime+VD?$D(t,{token:n.token,createTime:Date.now(),subscriptionOptions:r}):n.token;try{await LD(t.firebaseDependencies,n.token)}catch(i){console.warn(i)}return rw(t.firebaseDependencies,r)}else return rw(t.firebaseDependencies,r)}async function $D(t,e){try{const r=await DD(t.firebaseDependencies,e),n=Object.assign(Object.assign({},e),{token:r,createTime:Date.now()});return await ig(t.firebaseDependencies,n),r}catch(r){throw r}}async function rw(t,e){const n={token:await OD(t,e),createTime:Date.now(),subscriptionOptions:e};return await ig(t,n),n.token}async function FD(t,e){const r=await t.pushManager.getSubscription();return r||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:xD(e)})}function UD(t,e){const r=e.vapidKey===t.vapidKey,n=e.endpoint===t.endpoint,i=e.auth===t.auth,o=e.p256dh===t.p256dh;return r&&n&&i&&o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return zD(e,t),jD(e,t),BD(e,t),e}function zD(t,e){if(!e.notification)return;t.notification={};const r=e.notification.title;r&&(t.notification.title=r);const n=e.notification.body;n&&(t.notification.body=n);const i=e.notification.image;i&&(t.notification.image=i);const o=e.notification.icon;o&&(t.notification.icon=o)}function jD(t,e){e.data&&(t.data=e.data)}function BD(t,e){var r,n,i,o,s;if(!e.fcmOptions&&!(!((r=e.notification)===null||r===void 0)&&r.click_action))return;t.fcmOptions={};const l=(i=(n=e.fcmOptions)===null||n===void 0?void 0:n.link)!==null&&i!==void 0?i:(o=e.notification)===null||o===void 0?void 0:o.click_action;l&&(t.fcmOptions.link=l);const c=(s=e.fcmOptions)===null||s===void 0?void 0:s.analytics_label;c&&(t.fcmOptions.analyticsLabel=c)}/**
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
 */function qD(t){return typeof t=="object"&&!!t&&ST in t}/**
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
 */function HD(t){if(!t||!t.options)throw ah("App Configuration Object");if(!t.name)throw ah("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:r}=t;for(const n of e)if(!r[n])throw ah(n);return{appName:t.name,projectId:r.projectId,apiKey:r.apiKey,appId:r.appId,senderId:r.messagingSenderId}}function ah(t){return pt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e,r,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=HD(e);this.firebaseDependencies={app:e,appConfig:i,installations:r,analyticsProvider:n}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KD(t){try{t.swRegistration=await navigator.serviceWorker.register(_D,{scope:wD}),t.swRegistration.update().catch(()=>{})}catch(e){throw pt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GD(t,e){if(!e&&!t.swRegistration&&await KD(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw pt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QD(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=AT)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PT(t,e){if(!navigator)throw pt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw pt.create("permission-blocked");return await QD(t,e==null?void 0:e.vapidKey),await GD(t,e==null?void 0:e.serviceWorkerRegistration),MD(t)}/**
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
 */async function YD(t,e,r){const n=XD(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(n,{message_id:r[ST],message_name:r[ED],message_time:r[ID],message_device_time:Math.floor(Date.now()/1e3)})}function XD(t){switch(t){case wa.NOTIFICATION_CLICKED:return"notification_open";case wa.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function JD(t,e){const r=e.data;if(!r.isFirebaseMessaging)return;t.onMessageHandler&&r.messageType===wa.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(nw(r)):t.onMessageHandler.next(nw(r)));const n=r.data;qD(n)&&n[TD]==="1"&&await YD(t,r.messageType,n)}const iw="@firebase/messaging",ow="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD=t=>{const e=new WD(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",r=>JD(e,r)),e},eL=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:n=>PT(e,n)}};function tL(){Sr(new fr("messaging",ZD,"PUBLIC")),Sr(new fr("messaging-internal",eL,"PRIVATE")),Gt(iw,ow),Gt(iw,ow,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rL(){try{await nE()}catch{return!1}return typeof window<"u"&&rE()&&XC()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nL(t,e){if(!navigator)throw pt.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function iL(t=cm()){return rL().then(e=>{if(!e)throw pt.create("unsupported-browser")},e=>{throw pt.create("indexed-db-unsupported")}),Vo(Oe(t),"messaging").getImmediate()}async function oL(t,e){return t=Oe(t),PT(t,e)}function sL(t,e){return t=Oe(t),nL(t,e)}tL();const aL={apiKey:"AIzaSyCfkeRu4DVuSBBBa9bc0rrhtu-gCixFqIo",authDomain:"barbacker-6c683.firebaseapp.com",projectId:"barbacker-6c683",storageBucket:"barbacker-6c683.firebasestorage.app",messagingSenderId:"869145643734",appId:"1:869145643734:web:d902468d6942df6bc81777"},ag=sE(aL),ir=hO(ag),ps=IP(ag),NT=iL(ag),lL=new Ur;new Ms("apple.com");const sw=async()=>{try{if(await Notification.requestPermission()==="granted")return await oL(NT,{vapidKey:"G-H8717DGSJ8"})}catch(t){console.error("Notification permission denied",t)}return null},cL=()=>new Promise(t=>{sL(NT,e=>{t(e)})});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const je=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lc=globalThis,lg=lc.ShadowRoot&&(lc.ShadyCSS===void 0||lc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,cg=Symbol(),aw=new WeakMap;let OT=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==cg)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(lg&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=aw.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&aw.set(r,e))}return e}toString(){return this.cssText}};const uL=t=>new OT(typeof t=="string"?t:t+"",void 0,cg),me=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new OT(r,t,cg)},dL=(t,e)=>{if(lg)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),i=lc.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)}},lw=lg?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return uL(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:hL,defineProperty:fL,getOwnPropertyDescriptor:pL,getOwnPropertyNames:mL,getOwnPropertySymbols:gL,getPrototypeOf:vL}=Object,Ln=globalThis,cw=Ln.trustedTypes,yL=cw?cw.emptyScript:"",lh=Ln.reactiveElementPolyfillSupport,js=(t,e)=>t,Xc={toAttribute(t,e){switch(e){case Boolean:t=t?yL:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},ug=(t,e)=>!hL(t,e),uw={attribute:!0,type:String,converter:Xc,reflect:!1,useDefault:!1,hasChanged:ug};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ln.litPropertyMetadata??(Ln.litPropertyMetadata=new WeakMap);let Ki=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=uw){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,r);i!==void 0&&fL(this.prototype,e,i)}}static getPropertyDescriptor(e,r,n){const{get:i,set:o}=pL(this.prototype,e)??{get(){return this[r]},set(s){this[r]=s}};return{get:i,set(s){const l=i==null?void 0:i.call(this);o==null||o.call(this,s),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??uw}static _$Ei(){if(this.hasOwnProperty(js("elementProperties")))return;const e=vL(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(js("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(js("properties"))){const r=this.properties,n=[...mL(r),...gL(r)];for(const i of n)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)r.unshift(lw(i))}else e!==void 0&&r.push(lw(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dL(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$ET(e,r){var o;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const s=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:Xc).toAttribute(r,n.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,r){var o,s;const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const l=n.getPropertyOptions(i),c=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:Xc;this._$Em=i;const u=c.fromAttribute(r,l.type);this[i]=u??((s=this._$Ej)==null?void 0:s.get(i))??u,this._$Em=null}}requestUpdate(e,r,n,i=!1,o){var s;if(e!==void 0){const l=this.constructor;if(i===!1&&(o=this[e]),n??(n=l.getPropertyOptions(e)),!((n.hasChanged??ug)(o,r)||n.useDefault&&n.reflect&&o===((s=this._$Ej)==null?void 0:s.get(e))&&!this.hasAttribute(l._$Eu(e,n))))return;this.C(e,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,s??r??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(r=void 0),this._$AL.set(e,r)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i){const{wrapped:l}=s,c=this[o];l!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,s,c)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(r)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(e){}firstUpdated(e){}};Ki.elementStyles=[],Ki.shadowRootOptions={mode:"open"},Ki[js("elementProperties")]=new Map,Ki[js("finalized")]=new Map,lh==null||lh({ReactiveElement:Ki}),(Ln.reactiveElementVersions??(Ln.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _L={attribute:!0,type:String,converter:Xc,reflect:!1,hasChanged:ug},wL=(t=_L,e,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),n==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(r.name,t),n==="accessor"){const{name:s}=r;return{set(l){const c=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,c,t,!0,l)},init(l){return l!==void 0&&this.C(s,void 0,t,l),l}}}if(n==="setter"){const{name:s}=r;return function(l){const c=this[s];e.call(this,l),this.requestUpdate(s,c,t,!0,l)}}throw Error("Unsupported decorator location: "+n)};function $(t){return(e,r)=>typeof r=="object"?wL(t,e,r):((n,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,n),s?Object.getOwnPropertyDescriptor(i,o):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function At(t){return $({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dg=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $e(t,e){return(r,n,i)=>{const o=s=>{var l;return((l=s.renderRoot)==null?void 0:l.querySelector(t))??null};return dg(r,n,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let bL;function EL(t){return(e,r)=>dg(e,r,{get(){return(this.renderRoot??bL??(bL=document.createDocumentFragment())).querySelectorAll(t)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qo(t){return(e,r)=>{const{slot:n,selector:i}=t??{},o="slot"+(n?`[name=${n}]`:":not([name])");return dg(e,r,{get(){var c;const s=(c=this.renderRoot)==null?void 0:c.querySelector(o),l=(s==null?void 0:s.assignedElements(t))??[];return i===void 0?l:l.filter(u=>u.matches(i))}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bs=globalThis,dw=t=>t,Jc=Bs.trustedTypes,hw=Jc?Jc.createPolicy("lit-html",{createHTML:t=>t}):void 0,DT="$lit$",bn=`lit$${Math.random().toFixed(9).slice(2)}$`,LT="?"+bn,IL=`<${LT}>`,Ri=document,Ea=()=>Ri.createComment(""),Ia=t=>t===null||typeof t!="object"&&typeof t!="function",hg=Array.isArray,TL=t=>hg(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",ch=`[ 	
\f\r]`,ms=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fw=/-->/g,pw=/>/g,ei=RegExp(`>|${ch}(?:([^\\s"'>=/]+)(${ch}*=${ch}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mw=/'/g,gw=/"/g,VT=/^(?:script|style|textarea|title)$/i,xL=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),Y=xL(1),Wt=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),vw=new WeakMap,di=Ri.createTreeWalker(Ri,129);function MT(t,e){if(!hg(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return hw!==void 0?hw.createHTML(e):e}const AL=(t,e)=>{const r=t.length-1,n=[];let i,o=e===2?"<svg>":e===3?"<math>":"",s=ms;for(let l=0;l<r;l++){const c=t[l];let u,f,p=-1,m=0;for(;m<c.length&&(s.lastIndex=m,f=s.exec(c),f!==null);)m=s.lastIndex,s===ms?f[1]==="!--"?s=fw:f[1]!==void 0?s=pw:f[2]!==void 0?(VT.test(f[2])&&(i=RegExp("</"+f[2],"g")),s=ei):f[3]!==void 0&&(s=ei):s===ei?f[0]===">"?(s=i??ms,p=-1):f[1]===void 0?p=-2:(p=s.lastIndex-f[2].length,u=f[1],s=f[3]===void 0?ei:f[3]==='"'?gw:mw):s===gw||s===mw?s=ei:s===fw||s===pw?s=ms:(s=ei,i=void 0);const T=s===ei&&t[l+1].startsWith("/>")?" ":"";o+=s===ms?c+IL:p>=0?(n.push(u),c.slice(0,p)+DT+c.slice(p)+bn+T):c+bn+(p===-2?l:T)}return[MT(t,o+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class Ta{constructor({strings:e,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const l=e.length-1,c=this.parts,[u,f]=AL(e,r);if(this.el=Ta.createElement(u,n),di.currentNode=this.el.content,r===2||r===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=di.nextNode())!==null&&c.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const p of i.getAttributeNames())if(p.endsWith(DT)){const m=f[s++],T=i.getAttribute(p).split(bn),S=/([.?@])?(.*)/.exec(m);c.push({type:1,index:o,name:S[2],strings:T,ctor:S[1]==="."?CL:S[1]==="?"?kL:S[1]==="@"?RL:ju}),i.removeAttribute(p)}else p.startsWith(bn)&&(c.push({type:6,index:o}),i.removeAttribute(p));if(VT.test(i.tagName)){const p=i.textContent.split(bn),m=p.length-1;if(m>0){i.textContent=Jc?Jc.emptyScript:"";for(let T=0;T<m;T++)i.append(p[T],Ea()),di.nextNode(),c.push({type:2,index:++o});i.append(p[m],Ea())}}}else if(i.nodeType===8)if(i.data===LT)c.push({type:2,index:o});else{let p=-1;for(;(p=i.data.indexOf(bn,p+1))!==-1;)c.push({type:7,index:o}),p+=bn.length-1}o++}}static createElement(e,r){const n=Ri.createElement("template");return n.innerHTML=e,n}}function Po(t,e,r=t,n){var s,l;if(e===Wt)return e;let i=n!==void 0?(s=r._$Co)==null?void 0:s[n]:r._$Cl;const o=Ia(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(t),i._$AT(t,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=i:r._$Cl=i),i!==void 0&&(e=Po(t,i._$AS(t,e.values),i,n)),e}class SL{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,i=((e==null?void 0:e.creationScope)??Ri).importNode(r,!0);di.currentNode=i;let o=di.nextNode(),s=0,l=0,c=n[0];for(;c!==void 0;){if(s===c.index){let u;c.type===2?u=new ja(o,o.nextSibling,this,e):c.type===1?u=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(u=new PL(o,this,e)),this._$AV.push(u),c=n[++l]}s!==(c==null?void 0:c.index)&&(o=di.nextNode(),s++)}return di.currentNode=Ri,i}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class ja{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,n,i){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Po(this,e,r),Ia(e)?e===B||e==null||e===""?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==Wt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):TL(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==B&&Ia(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ri.createTextNode(e)),this._$AH=e}$(e){var o;const{values:r,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Ta.createElement(MT(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(r);else{const s=new SL(i,this),l=s.u(this.options);s.p(r),this.T(l),this._$AH=s}}_$AC(e){let r=vw.get(e.strings);return r===void 0&&vw.set(e.strings,r=new Ta(e)),r}k(e){hg(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of e)i===r.length?r.push(n=new ja(this.O(Ea()),this.O(Ea()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);e!==this._$AB;){const i=dw(e).nextSibling;dw(e).remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class ju{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,i,o){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=B}_$AI(e,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)e=Po(this,e,r,0),s=!Ia(e)||e!==this._$AH&&e!==Wt,s&&(this._$AH=e);else{const l=e;let c,u;for(e=o[0],c=0;c<o.length-1;c++)u=Po(this,l[n+c],r,c),u===Wt&&(u=this._$AH[c]),s||(s=!Ia(u)||u!==this._$AH[c]),u===B?e=B:e!==B&&(e+=(u??"")+o[c+1]),this._$AH[c]=u}s&&!i&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class CL extends ju{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}}class kL extends ju{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==B)}}class RL extends ju{constructor(e,r,n,i,o){super(e,r,n,i,o),this.type=5}_$AI(e,r=this){if((e=Po(this,e,r,0)??B)===Wt)return;const n=this._$AH,i=e===B&&n!==B||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==B&&(n===B||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class PL{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Po(this,e)}}const uh=Bs.litHtmlPolyfillSupport;uh==null||uh(Ta,ja),(Bs.litHtmlVersions??(Bs.litHtmlVersions=[])).push("3.3.2");const $T=(t,e,r)=>{const n=(r==null?void 0:r.renderBefore)??e;let i=n._$litPart$;if(i===void 0){const o=(r==null?void 0:r.renderBefore)??null;n._$litPart$=i=new ja(e.insertBefore(Ea(),o),o,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gi=globalThis;let xe=class extends Ki{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=$T(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Wt}};var Cw;xe._$litElement$=!0,xe.finalized=!0,(Cw=gi.litElementHydrateSupport)==null||Cw.call(gi,{LitElement:xe});const dh=gi.litElementPolyfillSupport;dh==null||dh({LitElement:xe});(gi.litElementVersions??(gi.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class NL extends xe{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return Y`<span class="shadow"></span>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const OL=me`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Uf=class extends NL{};Uf.styles=[OL];Uf=R([je("md-elevation")],Uf);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const FT=Symbol("attachableController");let cc;cc=new MutationObserver(t=>{var e;for(const r of t)(e=r.target[FT])==null||e.hostConnected()});class UT{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}set control(e){e?this.attach(e):this.detach()}constructor(e,r){this.host=e,this.onControlChange=r,this.currentControl=null,e.addController(this),e[FT]=this,cc==null||cc.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const DL=["focusin","focusout","pointerdown"];class fg extends xe{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new UT(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(e){var r;if(!e[yw]){switch(e.type){default:return;case"focusin":this.visible=((r=this.control)==null?void 0:r.matches(":focus-visible"))??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[yw]=!0}}onControlChange(e,r){for(const n of DL)e==null||e.removeEventListener(n,this),r==null||r.addEventListener(n,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}R([$({type:Boolean,reflect:!0})],fg.prototype,"visible",void 0);R([$({type:Boolean,reflect:!0})],fg.prototype,"inward",void 0);const yw=Symbol("handledByFocusRing");/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const LL=me`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let zf=class extends fg{};zf.styles=[LL];zf=R([je("md-focus-ring")],zf);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mn={ATTRIBUTE:1,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},pg=t=>(...e)=>({_$litDirective$:t,values:e});let mg=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mr=pg(class extends mg{constructor(t){var e;if(super(t),t.type!==mn.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((n=this.nt)!=null&&n.has(o))&&this.st.add(o);return this.render(e)}const r=t.element.classList;for(const o of this.st)o in e||(r.remove(o),this.st.delete(o));for(const o in e){const s=!!e[o];s===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(s?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return Wt}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const No={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)"};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const VL=450,_w=225,ML=.2,$L=10,FL=75,UL=.35,zL="::after",jL="forwards";var _t;(function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(_t||(_t={}));const BL=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],qL=150,hh=window.matchMedia("(forced-colors: active)");class Ba extends xe{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=_t.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new UT(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const e={hovered:this.hovered,pressed:this.pressed};return Y`<div class="surface ${mr(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==_t.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===_t.HOLDING){this.state=_t.WAITING_FOR_CLICK;return}if(this.state===_t.TOUCH_DELAY){this.state=_t.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=_t.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=_t.TOUCH_DELAY,await new Promise(r=>{setTimeout(r,qL)}),this.state===_t.TOUCH_DELAY&&(this.state=_t.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===_t.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===_t.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:r}=this.getBoundingClientRect(),n=Math.max(e,r),i=Math.max(UL*n,FL),o=Math.floor(n*ML),l=Math.sqrt(r**2+e**2)+$L;this.initialSize=o,this.rippleScale=`${(l+i)/o}`,this.rippleSize=`${o}px`}getNormalizedPointerEventCoords(e){const{scrollX:r,scrollY:n}=window,{left:i,top:o}=this.getBoundingClientRect(),s=r+i,l=n+o,{pageX:c,pageY:u}=e;return{x:c-s,y:u-l}}getTranslationCoordinates(e){const{height:r,width:n}=this.getBoundingClientRect(),i={x:(n-this.initialSize)/2,y:(r-this.initialSize)/2};let o;return e instanceof PointerEvent?o=this.getNormalizedPointerEventCoords(e):o={x:n/2,y:r/2},o={x:o.x-this.initialSize/2,y:o.y-this.initialSize/2},{startPoint:o,endPoint:i}}startPressAnimation(e){var s;if(!this.mdRoot)return;this.pressed=!0,(s=this.growAnimation)==null||s.cancel(),this.determineRippleSize();const{startPoint:r,endPoint:n}=this.getTranslationCoordinates(e),i=`${r.x}px, ${r.y}px`,o=`${n.x}px, ${n.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${i}) scale(1)`,`translate(${o}) scale(${this.rippleScale})`]},{pseudoElement:zL,duration:VL,easing:No.STANDARD,fill:jL})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=_t.INACTIVE;const e=this.growAnimation;let r=1/0;if(typeof(e==null?void 0:e.currentTime)=="number"?r=e.currentTime:e!=null&&e.currentTime&&(r=e.currentTime.to("ms").value),r>=_w){this.pressed=!1;return}await new Promise(n=>{setTimeout(n,_w-r)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);const r=e.buttons===1;return this.isTouch(e)||r}inBounds({x:e,y:r}){const{top:n,left:i,bottom:o,right:s}=this.getBoundingClientRect();return e>=i&&e<=s&&r>=n&&r<=o}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){if(!(hh!=null&&hh.matches))switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break}}onControlChange(e,r){for(const n of BL)e==null||e.removeEventListener(n,this),r==null||r.addEventListener(n,this)}}R([$({type:Boolean,reflect:!0})],Ba.prototype,"disabled",void 0);R([At()],Ba.prototype,"hovered",void 0);R([At()],Ba.prototype,"pressed",void 0);R([$e(".surface")],Ba.prototype,"mdRoot",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const HL=me`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let jf=class extends Ba{};jf.styles=[HL];jf=R([je("md-ripple")],jf);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const zT=["role","ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];zT.map(jT);function jT(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Mi(t){for(const e of zT)t.createProperty(e,{attribute:jT(e),reflect:!0});t.addInitializer(e=>{const r={hostConnected(){e.setAttribute("role","presentation")}};e.addController(r)})}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Je=Symbol("internals"),fh=Symbol("privateInternals");function Bu(t){class e extends t{get[Je](){return this[fh]||(this[fh]=this.attachInternals()),this[fh]}}return e}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function BT(t){t.addInitializer(e=>{const r=e;r.addEventListener("click",async n=>{const{type:i,[Je]:o}=r,{form:s}=o;if(!(!s||i==="button")&&(await new Promise(l=>{setTimeout(l)}),!n.defaultPrevented)){if(i==="reset"){s.reset();return}s.addEventListener("submit",l=>{Object.defineProperty(l,"submitter",{configurable:!0,enumerable:!0,get:()=>r})},{capture:!0,once:!0}),o.setFormValue(r.value),s.requestSubmit()}})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function WL(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function qT(t){return t.currentTarget!==t.target||t.composedPath()[0]!==t.target||t.target.disabled?!1:!KL(t)}function KL(t){const e=Bf;return e&&(t.preventDefault(),t.stopImmediatePropagation()),GL(),e}let Bf=!1;async function GL(){Bf=!0,await null,Bf=!1}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const QL=Bu(xe);class it extends QL{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Je].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.handleActivationClick=e=>{!qT(e)||!this.buttonElement||(this.focus(),WL(this.buttonElement))},this.addEventListener("click",this.handleActivationClick)}focus(){var e;(e=this.buttonElement)==null||e.focus()}blur(){var e;(e=this.buttonElement)==null||e.blur()}render(){var i;const e=this.disabled&&!this.href,r=this.href?this.renderLink():this.renderButton(),n=this.href?"link":"button";return Y`
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
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}Mi(it),BT(it);it.formAssociated=!0;it.shadowRootOptions={mode:"open",delegatesFocus:!0};R([$({type:Boolean,reflect:!0})],it.prototype,"disabled",void 0);R([$()],it.prototype,"href",void 0);R([$()],it.prototype,"target",void 0);R([$({type:Boolean,attribute:"trailing-icon",reflect:!0})],it.prototype,"trailingIcon",void 0);R([$({type:Boolean,attribute:"has-icon",reflect:!0})],it.prototype,"hasIcon",void 0);R([$()],it.prototype,"type",void 0);R([$({reflect:!0})],it.prototype,"value",void 0);R([$e(".button")],it.prototype,"buttonElement",void 0);R([qo({slot:"icon",flatten:!0})],it.prototype,"assignedIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class YL extends it{renderElevationOrOutline(){return Y`<md-elevation part="elevation"></md-elevation>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const XL=me`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_container-shape-start-start: var(--md-filled-button-container-shape-start-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-button-container-shape-start-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-button-container-shape-end-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-button-container-shape-end-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px)}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const HT=me`md-elevation{transition-duration:280ms}:host([disabled]) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host([disabled]) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const qu=me`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host([disabled]) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host([disabled]) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host([disabled]){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([disabled]) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let qf=class extends YL{};qf.styles=[qu,HT,XL];qf=R([je("md-filled-button")],qf);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class JL extends it{renderElevationOrOutline(){return Y`<md-elevation part="elevation"></md-elevation>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ZL=me`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-filled-tonal-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-tonal-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-tonal-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-tonal-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_container-shape-start-start: var(--md-filled-tonal-button-container-shape-start-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-tonal-button-container-shape-start-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-tonal-button-container-shape-end-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-tonal-button-container-shape-end-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Hf=class extends JL{};Hf.styles=[qu,HT,ZL];Hf=R([je("md-filled-tonal-button")],Hf);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class eV extends it{renderElevationOrOutline(){return Y`<div class="outline"></div>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const tV=me`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-outlined-button-container-shape-start-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-outlined-button-container-shape-start-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-outlined-button-container-shape-end-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-outlined-button-container-shape-end-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}.outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}:host(:active) .outline{border-color:var(--_pressed-outline-color)}:host([disabled]) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){:host([disabled]) .background{border-color:GrayText}:host([disabled]) .outline{opacity:1}}.outline,md-ripple{border-width:var(--_outline-width)}md-ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Wf=class extends eV{};Wf.styles=[qu,tV];Wf=R([je("md-outlined-button")],Wf);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class rV extends it{}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const nV=me`:host{--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-text-button-container-shape-start-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-text-button-container-shape-start-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-text-button-container-shape-end-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-text-button-container-shape-end-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Kf=class extends rV{};Kf.styles=[qu,nV];Kf=R([je("md-text-button")],Kf);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class De extends xe{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.noAsterisk=!1,this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){const e=this.count??-1,r=this.max??-1;return e<0||r<=0?"":`${e} / ${r}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(e){e.has("disabled")&&e.get("disabled")!==void 0&&(this.disableTransitions=!0),this.disabled&&this.focused&&(e.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:e.get("focused"),wasPopulated:e.get("populated")}),super.update(e)}render(){var o,s,l;const e=this.renderLabel(!0),r=this.renderLabel(!1),n=(o=this.renderOutline)==null?void 0:o.call(this,e),i={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return Y`
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
    `}updateSlottedAriaDescribedBy(){for(const e of this.slottedAriaDescribedBy)$T(Y`${this.supportingOrErrorText} ${this.counterText}`,e),e.setAttribute("hidden","")}renderLabel(e){if(!this.label)return B;let r;e?r=this.focused||this.populated||this.isAnimating:r=!this.focused&&!this.populated&&!this.isAnimating;const n={hidden:!r,floating:e,resting:!e},i=`${this.label}${this.required&&!this.noAsterisk?"*":""}`;return Y`
      <span class="label ${mr(n)}" aria-hidden=${!r}
        >${i}</span
      >
    `}animateLabelIfNeeded({wasFocused:e,wasPopulated:r}){var o,s,l;if(!this.label)return;e??(e=this.focused),r??(r=this.populated);const n=e||r,i=this.focused||this.populated;n!==i&&(this.isAnimating=!0,(o=this.labelAnimation)==null||o.cancel(),this.labelAnimation=(s=this.floatingLabelEl)==null?void 0:s.animate(this.getLabelKeyframes(),{duration:150,easing:No.STANDARD}),(l=this.labelAnimation)==null||l.addEventListener("finish",()=>{this.isAnimating=!1}))}getLabelKeyframes(){const{floatingLabelEl:e,restingLabelEl:r}=this;if(!e||!r)return[];const{x:n,y:i,height:o}=e.getBoundingClientRect(),{x:s,y:l,height:c}=r.getBoundingClientRect(),u=e.scrollWidth,f=r.scrollWidth,p=f/u,m=s-n,T=l-i+Math.round((c-o*p)/2),S=`translateX(${m}px) translateY(${T}px) scale(${p})`,P="translateX(0) translateY(0) scale(1)",N=r.clientWidth,y=f>N?`${N/p}px`:"";return this.focused||this.populated?[{transform:S,width:y},{transform:P,width:y}]:[{transform:P,width:y},{transform:S,width:y}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}}R([$({type:Boolean})],De.prototype,"disabled",void 0);R([$({type:Boolean})],De.prototype,"error",void 0);R([$({type:Boolean})],De.prototype,"focused",void 0);R([$()],De.prototype,"label",void 0);R([$({type:Boolean,attribute:"no-asterisk"})],De.prototype,"noAsterisk",void 0);R([$({type:Boolean})],De.prototype,"populated",void 0);R([$({type:Boolean})],De.prototype,"required",void 0);R([$({type:Boolean})],De.prototype,"resizable",void 0);R([$({attribute:"supporting-text"})],De.prototype,"supportingText",void 0);R([$({attribute:"error-text"})],De.prototype,"errorText",void 0);R([$({type:Number})],De.prototype,"count",void 0);R([$({type:Number})],De.prototype,"max",void 0);R([$({type:Boolean,attribute:"has-start"})],De.prototype,"hasStart",void 0);R([$({type:Boolean,attribute:"has-end"})],De.prototype,"hasEnd",void 0);R([qo({slot:"aria-describedby"})],De.prototype,"slottedAriaDescribedBy",void 0);R([At()],De.prototype,"isAnimating",void 0);R([At()],De.prototype,"refreshErrorAlert",void 0);R([At()],De.prototype,"disableTransitions",void 0);R([$e(".label.floating")],De.prototype,"floatingLabelEl",void 0);R([$e(".label.resting")],De.prototype,"restingLabelEl",void 0);R([$e(".container")],De.prototype,"containerEl",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class iV extends De{renderBackground(){return Y`
      <div class="background"></div>
      <div class="state-layer"></div>
    `}renderIndicator(){return Y`<div class="active-indicator"></div>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const oV=me`@layer styles{:host{--_active-indicator-color: var(--md-filled-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-field-active-indicator-height, 1px);--_bottom-space: var(--md-filled-field-bottom-space, 16px);--_container-color: var(--md-filled-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_content-color: var(--md-filled-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-filled-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-filled-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-filled-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-weight: var(--md-filled-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-active-indicator-color: var(--md-filled-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-field-disabled-container-opacity, 0.04);--_disabled-content-color: var(--md-filled-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-filled-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-filled-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-filled-field-disabled-leading-content-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-filled-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-filled-field-disabled-trailing-content-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-content-color: var(--md-filled-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-active-indicator-color: var(--md-filled-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-content-color: var(--md-filled-field-error-focus-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-label-text-color: var(--md-filled-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-filled-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-filled-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-content-color: var(--md-filled-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-filled-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-filled-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-filled-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-filled-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-filled-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-field-focus-active-indicator-height, 3px);--_focus-content-color: var(--md-filled-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-filled-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-filled-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-field-hover-active-indicator-height, 1px);--_hover-content-color: var(--md-filled-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-content-color: var(--md-filled-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-filled-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-filled-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-filled-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-filled-field-leading-space, 16px);--_supporting-text-color: var(--md-filled-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-filled-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-filled-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-filled-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-filled-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-filled-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-filled-field-top-space, 16px);--_trailing-content-color: var(--md-filled-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-filled-field-trailing-space, 16px);--_with-label-bottom-space: var(--md-filled-field-with-label-bottom-space, 8px);--_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px);--_container-shape-start-start: var(--md-filled-field-container-shape-start-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-field-container-shape-start-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-field-container-shape-end-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-field-container-shape-end-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)))}.background,.state-layer{border-radius:inherit;inset:0;pointer-events:none;position:absolute}.background{background:var(--_container-color)}.state-layer{visibility:hidden}.field:not(.disabled):hover .state-layer{visibility:visible}.label.floating{position:absolute;top:var(--_with-label-top-space)}.field:not(.with-start) .label-wrapper{margin-inline-start:var(--_leading-space)}.field:not(.with-end) .label-wrapper{margin-inline-end:var(--_trailing-space)}.active-indicator{inset:auto 0 0 0;pointer-events:none;position:absolute;width:100%;z-index:1}.active-indicator::before,.active-indicator::after{border-bottom:var(--_active-indicator-height) solid var(--_active-indicator-color);inset:auto 0 0 0;content:"";position:absolute;width:100%}.active-indicator::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .active-indicator::after{opacity:1}.field:not(.with-start) .content ::slotted(*){padding-inline-start:var(--_leading-space)}.field:not(.with-end) .content ::slotted(*){padding-inline-end:var(--_trailing-space)}.field:not(.no-label) .content ::slotted(:not(textarea)){padding-bottom:var(--_with-label-bottom-space);padding-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}.field:not(.no-label) .content ::slotted(textarea){margin-bottom:var(--_with-label-bottom-space);margin-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}:hover .active-indicator::before{border-bottom-color:var(--_hover-active-indicator-color);border-bottom-width:var(--_hover-active-indicator-height)}.active-indicator::after{border-bottom-color:var(--_focus-active-indicator-color);border-bottom-width:var(--_focus-active-indicator-height)}:hover .state-layer{background:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.disabled .active-indicator::before{border-bottom-color:var(--_disabled-active-indicator-color);border-bottom-width:var(--_disabled-active-indicator-height);opacity:var(--_disabled-active-indicator-opacity)}.disabled .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.error .active-indicator::before{border-bottom-color:var(--_error-active-indicator-color)}.error:hover .active-indicator::before{border-bottom-color:var(--_error-hover-active-indicator-color)}.error:hover .state-layer{background:var(--_error-hover-state-layer-color);opacity:var(--_error-hover-state-layer-opacity)}.error .active-indicator::after{border-bottom-color:var(--_error-focus-active-indicator-color)}.resizable .container{bottom:var(--_focus-active-indicator-height);clip-path:inset(var(--_focus-active-indicator-height) 0 0 0)}.resizable .container>*{top:var(--_focus-active-indicator-height)}}@layer hcm{@media(forced-colors: active){.disabled .active-indicator::before{border-color:GrayText;opacity:1}}}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const sV=me`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Gf=class extends iV{};Gf.styles=[sV,oV];Gf=R([je("md-filled-field")],Gf);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const WT=Symbol.for(""),aV=t=>{if((t==null?void 0:t.r)===WT)return t==null?void 0:t._$litStatic$},vi=(t,...e)=>({_$litStatic$:e.reduce((r,n,i)=>r+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+t[i+1],t[0]),r:WT}),ww=new Map,lV=t=>(e,...r)=>{const n=r.length;let i,o;const s=[],l=[];let c,u=0,f=!1;for(;u<n;){for(c=e[u];u<n&&(o=r[u],(i=aV(o))!==void 0);)c+=i+e[++u],f=!0;u!==n&&l.push(o),s.push(c),u++}if(u===n&&s.push(e[n]),f){const p=s.join("$$lit$$");(e=ww.get(p))===void 0&&(s.raw=s,ww.set(p,e=s)),r=l}return t(e,...r)},gg=lV(Y);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const cV=me`:host{--_active-indicator-color: var(--md-filled-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-text-field-active-indicator-height, 1px);--_caret-color: var(--md-filled-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-color: var(--md-filled-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-active-indicator-color: var(--md-filled-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-text-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-text-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-text-field-disabled-container-opacity, 0.04);--_disabled-input-text-color: var(--md-filled-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-filled-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-filled-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filled-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-filled-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filled-text-field-disabled-trailing-icon-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-active-indicator-color: var(--md-filled-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-caret-color: var(--md-filled-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-filled-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-filled-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-filled-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-filled-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-input-text-color: var(--md-filled-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-filled-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-text-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-filled-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-filled-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-filled-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-filled-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-filled-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-text-field-focus-active-indicator-height, 3px);--_focus-input-text-color: var(--md-filled-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-filled-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-filled-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-text-field-hover-active-indicator-height, 1px);--_hover-input-text-color: var(--md-filled-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-icon-color: var(--md-filled-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-text-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filled-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-filled-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-filled-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-filled-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-filled-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-filled-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-filled-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-filled-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-filled-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-filled-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-filled-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);--_supporting-text-color: var(--md-filled-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-filled-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-filled-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-filled-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-filled-text-field-container-shape-start-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-text-field-container-shape-start-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-text-field-container-shape-end-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-text-field-container-shape-end-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_leading-space: var(--md-filled-text-field-leading-space, 16px);--_trailing-space: var(--md-filled-text-field-trailing-space, 16px);--_top-space: var(--md-filled-text-field-top-space, 16px);--_bottom-space: var(--md-filled-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-filled-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-filled-text-field-input-text-suffix-leading-space, 2px);--_with-label-top-space: var(--md-filled-text-field-with-label-top-space, 8px);--_with-label-bottom-space: var(--md-filled-text-field-with-label-bottom-space, 8px);--_focus-caret-color: var(--md-filled-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--md-filled-field-active-indicator-color: var(--_active-indicator-color);--md-filled-field-active-indicator-height: var(--_active-indicator-height);--md-filled-field-bottom-space: var(--_bottom-space);--md-filled-field-container-color: var(--_container-color);--md-filled-field-container-shape-end-end: var(--_container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_container-shape-start-start);--md-filled-field-content-color: var(--_input-text-color);--md-filled-field-content-font: var(--_input-text-font);--md-filled-field-content-line-height: var(--_input-text-line-height);--md-filled-field-content-size: var(--_input-text-size);--md-filled-field-content-weight: var(--_input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_error-active-indicator-color);--md-filled-field-error-content-color: var(--_error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_error-label-text-color);--md-filled-field-error-leading-content-color: var(--_error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_label-text-color);--md-filled-field-label-text-font: var(--_label-text-font);--md-filled-field-label-text-line-height: var(--_label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_label-text-populated-size);--md-filled-field-label-text-size: var(--_label-text-size);--md-filled-field-label-text-weight: var(--_label-text-weight);--md-filled-field-leading-content-color: var(--_leading-icon-color);--md-filled-field-leading-space: var(--_leading-space);--md-filled-field-supporting-text-color: var(--_supporting-text-color);--md-filled-field-supporting-text-font: var(--_supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_supporting-text-size);--md-filled-field-supporting-text-weight: var(--_supporting-text-weight);--md-filled-field-top-space: var(--_top-space);--md-filled-field-trailing-content-color: var(--_trailing-icon-color);--md-filled-field-trailing-space: var(--_trailing-space);--md-filled-field-with-label-bottom-space: var(--_with-label-bottom-space);--md-filled-field-with-label-top-space: var(--_with-label-top-space)}
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const uV=t=>t.strings===void 0,dV={},hV=(t,e=dV)=>t._$AH=e;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bw=pg(class extends mg{constructor(t){if(super(t),t.type!==mn.PROPERTY&&t.type!==mn.ATTRIBUTE&&t.type!==mn.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!uV(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Wt||e===B)return e;const r=t.element,n=t.name;if(t.type===mn.PROPERTY){if(e===r[n])return Wt}else if(t.type===mn.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(n))return Wt}else if(t.type===mn.ATTRIBUTE&&r.getAttribute(n)===e+"")return Wt;return hV(t),e}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const KT="important",fV=" !"+KT,Ew=pg(class extends mg{constructor(t){var e;if(super(t),t.type!==mn.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,r)=>{const n=t[r];return n==null?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:r}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?r.removeProperty(n):r[n]=null);for(const n in e){const i=e[n];if(i!=null){this.ft.add(n);const o=typeof i=="string"&&i.endsWith(fV);n.includes("-")||o?r.setProperty(n,o?i.slice(0,-11):i,o?KT:""):r[n]=i}}return Wt}});/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const pV={fromAttribute(t){return t??""},toAttribute(t){return t||null}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function vg(t,e){e.bubbles&&(!t.shadowRoot||e.composed)&&e.stopPropagation();const r=Reflect.construct(e.constructor,[e.type,e]),n=t.dispatchEvent(r);return n||e.preventDefault(),n}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Zc=Symbol("createValidator"),eu=Symbol("getValidityAnchor"),ph=Symbol("privateValidator"),Lr=Symbol("privateSyncValidity"),Pl=Symbol("privateCustomValidationMessage");function GT(t){var e;class r extends t{constructor(){super(...arguments),this[e]=""}get validity(){return this[Lr](),this[Je].validity}get validationMessage(){return this[Lr](),this[Je].validationMessage}get willValidate(){return this[Lr](),this[Je].willValidate}checkValidity(){return this[Lr](),this[Je].checkValidity()}reportValidity(){return this[Lr](),this[Je].reportValidity()}setCustomValidity(i){this[Pl]=i,this[Lr]()}requestUpdate(i,o,s){super.requestUpdate(i,o,s),this[Lr]()}firstUpdated(i){super.firstUpdated(i),this[Lr]()}[(e=Pl,Lr)](){this[ph]||(this[ph]=this[Zc]());const{validity:i,validationMessage:o}=this[ph].getValidity(),s=!!this[Pl],l=this[Pl]||o;this[Je].setValidity({...i,customError:s},l,this[eu]()??void 0)}[Zc](){throw new Error("Implement [createValidator]")}[eu](){throw new Error("Implement [getValidityAnchor]")}}return r}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const qs=Symbol("getFormValue"),Qf=Symbol("getFormState");function QT(t){class e extends t{get form(){return this[Je].form}get labels(){return this[Je].labels}get name(){return this.getAttribute("name")??""}set name(n){this.setAttribute("name",n)}get disabled(){return this.hasAttribute("disabled")}set disabled(n){this.toggleAttribute("disabled",n)}attributeChangedCallback(n,i,o){if(n==="name"||n==="disabled"){const s=n==="disabled"?i!==null:i;this.requestUpdate(n,s);return}super.attributeChangedCallback(n,i,o)}requestUpdate(n,i,o){super.requestUpdate(n,i,o),this[Je].setFormValue(this[qs](),this[Qf]())}[qs](){throw new Error("Implement [getFormValue]")}[Qf](){return this[qs]()}formDisabledCallback(n){this.disabled=n}}return e.formAssociated=!0,R([$({noAccessor:!0})],e.prototype,"name",null),R([$({type:Boolean,noAccessor:!0})],e.prototype,"disabled",null),e}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Yf=Symbol("onReportValidity"),Nl=Symbol("privateCleanupFormListeners"),Ol=Symbol("privateDoNotReportInvalid"),Dl=Symbol("privateIsSelfReportingValidity"),Ll=Symbol("privateCallOnReportValidity");function mV(t){var e,r,n;class i extends t{constructor(...s){super(...s),this[e]=new AbortController,this[r]=!1,this[n]=!1,this.addEventListener("invalid",l=>{this[Ol]||!l.isTrusted||this.addEventListener("invalid",()=>{this[Ll](l)},{once:!0})},{capture:!0})}checkValidity(){this[Ol]=!0;const s=super.checkValidity();return this[Ol]=!1,s}reportValidity(){this[Dl]=!0;const s=super.reportValidity();return s&&this[Ll](null),this[Dl]=!1,s}[(e=Nl,r=Ol,n=Dl,Ll)](s){const l=s==null?void 0:s.defaultPrevented;l||(this[Yf](s),!(!l&&(s==null?void 0:s.defaultPrevented)))||(this[Dl]||yV(this[Je].form,this))&&this.focus()}[Yf](s){throw new Error("Implement [onReportValidity]")}formAssociatedCallback(s){super.formAssociatedCallback&&super.formAssociatedCallback(s),this[Nl].abort(),s&&(this[Nl]=new AbortController,gV(this,s,()=>{this[Ll](null)},this[Nl].signal))}}return i}function gV(t,e,r,n){const i=vV(e);let o=!1,s,l=!1;i.addEventListener("before",()=>{l=!0,s=new AbortController,o=!1,t.addEventListener("invalid",()=>{o=!0},{signal:s.signal})},{signal:n}),i.addEventListener("after",()=>{l=!1,s==null||s.abort(),!o&&r()},{signal:n}),e.addEventListener("submit",()=>{l||r()},{signal:n})}const mh=new WeakMap;function vV(t){if(!mh.has(t)){const e=new EventTarget;mh.set(t,e);for(const r of["reportValidity","requestSubmit"]){const n=t[r];t[r]=function(){e.dispatchEvent(new Event("before"));const i=Reflect.apply(n,this,arguments);return e.dispatchEvent(new Event("after")),i}}}return mh.get(t)}function yV(t,e){if(!t)return!0;let r;for(const n of t.elements)if(n.matches(":invalid")){r=n;break}return r===e}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class YT{constructor(e){this.getCurrentState=e,this.currentValidity={validity:{},validationMessage:""}}getValidity(){const e=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,e)))return this.currentValidity;const{validity:n,validationMessage:i}=this.computeValidity(e);return this.prevState=this.copy(e),this.currentValidity={validationMessage:i,validity:{badInput:n.badInput,customError:n.customError,patternMismatch:n.patternMismatch,rangeOverflow:n.rangeOverflow,rangeUnderflow:n.rangeUnderflow,stepMismatch:n.stepMismatch,tooLong:n.tooLong,tooShort:n.tooShort,typeMismatch:n.typeMismatch,valueMissing:n.valueMissing}},this.currentValidity}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class _V extends YT{computeValidity({state:e,renderedControl:r}){let n=r;gs(e)&&!n?(n=this.inputControl||document.createElement("input"),this.inputControl=n):n||(n=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=n);const i=gs(e)?n:null;if(i&&(i.type=e.type),n.value!==e.value&&(n.value=e.value),n.required=e.required,i){const o=e;o.pattern?i.pattern=o.pattern:i.removeAttribute("pattern"),o.min?i.min=o.min:i.removeAttribute("min"),o.max?i.max=o.max:i.removeAttribute("max"),o.step?i.step=o.step:i.removeAttribute("step")}return(e.minLength??-1)>-1?n.setAttribute("minlength",String(e.minLength)):n.removeAttribute("minlength"),(e.maxLength??-1)>-1?n.setAttribute("maxlength",String(e.maxLength)):n.removeAttribute("maxlength"),{validity:n.validity,validationMessage:n.validationMessage}}equals({state:e},{state:r}){const n=e.type===r.type&&e.value===r.value&&e.required===r.required&&e.minLength===r.minLength&&e.maxLength===r.maxLength;return!gs(e)||!gs(r)?n:n&&e.pattern===r.pattern&&e.min===r.min&&e.max===r.max&&e.step===r.step}copy({state:e}){return{state:gs(e)?this.copyInput(e):this.copyTextArea(e),renderedControl:null}}copyInput(e){const{type:r,pattern:n,min:i,max:o,step:s}=e;return{...this.copySharedState(e),type:r,pattern:n,min:i,max:o,step:s}}copyTextArea(e){return{...this.copySharedState(e),type:e.type}}copySharedState({value:e,required:r,minLength:n,maxLength:i}){return{value:e,required:r,minLength:n,maxLength:i}}}function gs(t){return t.type!=="textarea"}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const wV=mV(GT(QT(Bu(xe))));class ie extends wV{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(e){this.getInputOrTextarea().selectionDirection=e}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(e){this.getInputOrTextarea().selectionEnd=e}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(e){this.getInputOrTextarea().selectionStart=e}get valueAsNumber(){const e=this.getInput();return e?e.valueAsNumber:NaN}set valueAsNumber(e){const r=this.getInput();r&&(r.valueAsNumber=e,this.value=r.value)}get valueAsDate(){const e=this.getInput();return e?e.valueAsDate:null}set valueAsDate(e){const r=this.getInput();r&&(r.valueAsDate=e,this.value=r.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...e){this.getInputOrTextarea().setRangeText(...e),this.value=this.getInputOrTextarea().value}setSelectionRange(e,r,n){this.getInputOrTextarea().setSelectionRange(e,r,n)}stepDown(e){const r=this.getInput();r&&(r.stepDown(e),this.value=r.value)}stepUp(e){const r=this.getInput();r&&(r.stepUp(e),this.value=r.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(e,r,n){e==="value"&&this.dirty||super.attributeChangedCallback(e,r,n)}render(){const e={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:this.type==="textarea","no-spinner":this.noSpinner};return Y`
      <span class="text-field ${mr(e)}">
        ${this.renderField()}
      </span>
    `}updated(e){const r=this.getInputOrTextarea().value;this.value!==r&&(this.value=r)}renderField(){return gg`<${this.fieldTag}
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
          style=${Ew(e)}
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
          .value=${bw(this.value)}
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
          style=${Ew(e)}
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
          .value=${bw(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${l}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(e,r){return e?Y`<span class="${mr({suffix:r,prefix:!r})}">${e}</span>`:B}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){var e;this.focused=((e=this.inputOrTextarea)==null?void 0:e.matches(":focus"))??!1}handleInput(e){this.dirty=!0,this.value=e.target.value}redispatchEvent(e){vg(this,e)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return this.type==="textarea"?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[qs](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}focus(){this.getInputOrTextarea().focus()}[Zc](){return new _V(()=>({state:this,renderedControl:this.inputOrTextarea}))}[eu](){return this.inputOrTextarea}[Yf](e){var n;e==null||e.preventDefault();const r=this.getErrorText();this.nativeError=!!e,this.nativeErrorText=this.validationMessage,r===this.getErrorText()&&((n=this.field)==null||n.reannounceError())}}Mi(ie);ie.shadowRootOptions={...xe.shadowRootOptions,delegatesFocus:!0};R([$({type:Boolean,reflect:!0})],ie.prototype,"error",void 0);R([$({attribute:"error-text"})],ie.prototype,"errorText",void 0);R([$()],ie.prototype,"label",void 0);R([$({type:Boolean,attribute:"no-asterisk"})],ie.prototype,"noAsterisk",void 0);R([$({type:Boolean,reflect:!0})],ie.prototype,"required",void 0);R([$()],ie.prototype,"value",void 0);R([$({attribute:"prefix-text"})],ie.prototype,"prefixText",void 0);R([$({attribute:"suffix-text"})],ie.prototype,"suffixText",void 0);R([$({type:Boolean,attribute:"has-leading-icon"})],ie.prototype,"hasLeadingIcon",void 0);R([$({type:Boolean,attribute:"has-trailing-icon"})],ie.prototype,"hasTrailingIcon",void 0);R([$({attribute:"supporting-text"})],ie.prototype,"supportingText",void 0);R([$({attribute:"text-direction"})],ie.prototype,"textDirection",void 0);R([$({type:Number})],ie.prototype,"rows",void 0);R([$({type:Number})],ie.prototype,"cols",void 0);R([$({reflect:!0})],ie.prototype,"inputMode",void 0);R([$()],ie.prototype,"max",void 0);R([$({type:Number})],ie.prototype,"maxLength",void 0);R([$()],ie.prototype,"min",void 0);R([$({type:Number})],ie.prototype,"minLength",void 0);R([$({type:Boolean,attribute:"no-spinner"})],ie.prototype,"noSpinner",void 0);R([$()],ie.prototype,"pattern",void 0);R([$({reflect:!0,converter:pV})],ie.prototype,"placeholder",void 0);R([$({type:Boolean,reflect:!0})],ie.prototype,"readOnly",void 0);R([$({type:Boolean,reflect:!0})],ie.prototype,"multiple",void 0);R([$()],ie.prototype,"step",void 0);R([$({reflect:!0})],ie.prototype,"type",void 0);R([$({reflect:!0})],ie.prototype,"autocomplete",void 0);R([At()],ie.prototype,"dirty",void 0);R([At()],ie.prototype,"focused",void 0);R([At()],ie.prototype,"nativeError",void 0);R([At()],ie.prototype,"nativeErrorText",void 0);R([$e(".input")],ie.prototype,"inputOrTextarea",void 0);R([$e(".field")],ie.prototype,"field",void 0);R([qo({slot:"leading-icon"})],ie.prototype,"leadingIcons",void 0);R([qo({slot:"trailing-icon"})],ie.prototype,"trailingIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class bV extends ie{constructor(){super(...arguments),this.fieldTag=vi`md-filled-field`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const EV=me`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Xf=class extends bV{constructor(){super(...arguments),this.fieldTag=vi`md-filled-field`}};Xf.styles=[EV,cV];Xf=R([je("md-filled-text-field")],Xf);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class IV extends xe{render(){return Y`<slot></slot>`}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const TV=me`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Jf=class extends IV{};Jf.styles=[TV];Jf=R([je("md-icon")],Jf);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function XT(t,e=sn){const r=ZT(t,e);return r&&(r.tabIndex=0,r.focus()),r}function JT(t,e=sn){const r=xV(t,e);return r&&(r.tabIndex=0,r.focus()),r}function gh(t,e=sn){for(let r=0;r<t.length;r++){const n=t[r];if(n.tabIndex===0&&e(n))return{item:n,index:r}}return null}function ZT(t,e=sn){for(const r of t)if(e(r))return r;return null}function xV(t,e=sn){for(let r=t.length-1;r>=0;r--){const n=t[r];if(e(n))return n}return null}function AV(t,e,r=sn,n=!0){for(let i=1;i<t.length;i++){const o=(i+e)%t.length;if(o<e&&!n)return null;const s=t[o];if(r(s))return s}return t[e]?t[e]:null}function SV(t,e,r=sn,n=!0){for(let i=1;i<t.length;i++){const o=(e-i+t.length)%t.length;if(o>e&&!n)return null;const s=t[o];if(r(s))return s}return t[e]?t[e]:null}function Iw(t,e,r=sn,n=!0){if(e){const i=AV(t,e.index,r,n);return i&&(i.tabIndex=0,i.focus()),i}else return XT(t,r)}function Tw(t,e,r=sn,n=!0){if(e){const i=SV(t,e.index,r,n);return i&&(i.tabIndex=0,i.focus()),i}else return JT(t,r)}function CV(){return new Event("request-activation",{bubbles:!0,composed:!0})}function sn(t){return!t.disabled}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Vr={ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",Home:"Home",End:"End"};class kV{constructor(e){this.handleKeydown=f=>{const p=f.key;if(f.defaultPrevented||!this.isNavigableKey(p))return;const m=this.items;if(!m.length)return;const T=gh(m,this.isActivatable);f.preventDefault();const S=this.isRtl(),P=S?Vr.ArrowRight:Vr.ArrowLeft,N=S?Vr.ArrowLeft:Vr.ArrowRight;let b=null;switch(p){case Vr.ArrowDown:case N:b=Iw(m,T,this.isActivatable,this.wrapNavigation());break;case Vr.ArrowUp:case P:b=Tw(m,T,this.isActivatable,this.wrapNavigation());break;case Vr.Home:b=XT(m,this.isActivatable);break;case Vr.End:b=JT(m,this.isActivatable);break}b&&T&&T.item!==b&&(T.item.tabIndex=-1)},this.onDeactivateItems=()=>{const f=this.items;for(const p of f)this.deactivateItem(p)},this.onRequestActivation=f=>{this.onDeactivateItems();const p=f.target;this.activateItem(p),p.focus()},this.onSlotchange=()=>{const f=this.items;let p=!1;for(const T of f){if(!T.disabled&&T.tabIndex>-1&&!p){p=!0,T.tabIndex=0;continue}T.tabIndex=-1}if(p)return;const m=ZT(f,this.isActivatable);m&&(m.tabIndex=0)};const{isItem:r,getPossibleItems:n,isRtl:i,deactivateItem:o,activateItem:s,isNavigableKey:l,isActivatable:c,wrapNavigation:u}=e;this.isItem=r,this.getPossibleItems=n,this.isRtl=i,this.deactivateItem=o,this.activateItem=s,this.isNavigableKey=l,this.isActivatable=c,this.wrapNavigation=u??(()=>!0)}get items(){const e=this.getPossibleItems(),r=[];for(const n of e){if(this.isItem(n)){r.push(n);continue}const o=n.item;o&&this.isItem(o)&&r.push(o)}return r}activateNextItem(){const e=this.items,r=gh(e,this.isActivatable);return r&&(r.item.tabIndex=-1),Iw(e,r,this.isActivatable,this.wrapNavigation())}activatePreviousItem(){const e=this.items,r=gh(e,this.isActivatable);return r&&(r.item.tabIndex=-1),Tw(e,r,this.isActivatable,this.wrapNavigation())}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const RV=new Set(Object.values(Vr));class ex extends xe{get items(){return this.listController.items}constructor(){super(),this.listController=new kV({isItem:e=>e.hasAttribute("md-list-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>getComputedStyle(this).direction==="rtl",deactivateItem:e=>{e.tabIndex=-1},activateItem:e=>{e.tabIndex=0},isNavigableKey:e=>RV.has(e),isActivatable:e=>!e.disabled&&e.type!=="text"}),this.internals=this.attachInternals(),this.internals.role="list",this.addEventListener("keydown",this.listController.handleKeydown)}render(){return Y`
      <slot
        @deactivate-items=${this.listController.onDeactivateItems}
        @request-activation=${this.listController.onRequestActivation}
        @slotchange=${this.listController.onSlotchange}>
      </slot>
    `}activateNextItem(){return this.listController.activateNextItem()}activatePreviousItem(){return this.listController.activatePreviousItem()}}R([qo({flatten:!0})],ex.prototype,"slotItems",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const PV=me`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Zf=class extends ex{};Zf.styles=[PV];Zf=R([je("md-list")],Zf);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class yg extends xe{constructor(){super(...arguments),this.multiline=!1}render(){return Y`
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
    `}handleTextSlotChange(){let e=!1,r=0;for(const n of this.textSlots)if(NV(n)&&(r+=1),r>1){e=!0;break}this.multiline=e}}R([$({type:Boolean,reflect:!0})],yg.prototype,"multiline",void 0);R([EL(".text slot")],yg.prototype,"textSlots",void 0);function NV(t){var e;for(const r of t.assignedNodes({flatten:!0})){const n=r.nodeType===Node.ELEMENT_NODE,i=r.nodeType===Node.TEXT_NODE&&((e=r.textContent)==null?void 0:e.match(/\S/));if(n||i)return!0}return!1}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const OV=me`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ep=class extends yg{};ep.styles=[OV];ep=R([je("md-item")],ep);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class an extends xe{constructor(){super(...arguments),this.disabled=!1,this.type="text",this.isListItem=!0,this.href="",this.target=""}get isDisabled(){return this.disabled&&this.type!=="link"}willUpdate(e){this.href&&(this.type="link"),super.willUpdate(e)}render(){return this.renderListItem(Y`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){const r=this.type==="link";let n;switch(this.type){case"link":n=vi`a`;break;case"button":n=vi`button`;break;default:case"text":n=vi`li`;break}const i=this.type!=="text",o=r&&this.target?this.target:B;return gg`
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
    `}onFocus(){this.tabIndex===-1&&this.dispatchEvent(CV())}focus(){var e;(e=this.listItemRoot)==null||e.focus()}}Mi(an);an.shadowRootOptions={...xe.shadowRootOptions,delegatesFocus:!0};R([$({type:Boolean,reflect:!0})],an.prototype,"disabled",void 0);R([$({reflect:!0})],an.prototype,"type",void 0);R([$({type:Boolean,attribute:"md-list-item",reflect:!0})],an.prototype,"isListItem",void 0);R([$()],an.prototype,"href",void 0);R([$()],an.prototype,"target",void 0);R([$e(".list-item")],an.prototype,"listItemRoot",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const DV=me`:host{display:flex;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-list-item-pressed-state-layer-opacity, 0.12)}:host(:is([type=button]:not([disabled]),[type=link])){cursor:pointer}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;cursor:inherit;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, 0.3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-list-item-one-line-container-height, 56px);padding-top:var(--md-list-item-top-space, 12px);padding-bottom:var(--md-list-item-bottom-space, 12px);padding-inline-start:var(--md-list-item-leading-space, 16px);padding-inline-end:var(--md-list-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}@media(forced-colors: active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let tp=class extends an{};tp.styles=[DV];tp=R([je("md-list-item")],tp);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ho extends xe{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){const{ariaLabel:e}=this;return Y`
      <div
        class="progress ${mr(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${e||B}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?B:this.value}
        >${this.renderIndicator()}</div
      >
    `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}}Mi(Ho);R([$({type:Number})],Ho.prototype,"value",void 0);R([$({type:Number})],Ho.prototype,"max",void 0);R([$({type:Boolean})],Ho.prototype,"indeterminate",void 0);R([$({type:Boolean,attribute:"four-color"})],Ho.prototype,"fourColor",void 0);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class LV extends Ho{renderIndicator(){return this.indeterminate?this.renderIndeterminateContainer():this.renderDeterminateContainer()}renderDeterminateContainer(){const e=(1-this.value/this.max)*100;return Y`
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
 */const VV=me`:host{--_active-indicator-color: var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width: var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color: var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size: var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;width:var(--_size);height:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.progress,.spinner,.left,.right,.circle,svg,.track,.active-track{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1568.2352941176ms}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) rgba(0,0,0,0) rgba(0,0,0,0);animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-666.5ms,0ms}@media(forced-colors: active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let rp=class extends LV{};rp.styles=[VV];rp=R([je("md-circular-progress")],rp);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Gn extends xe{constructor(){super(...arguments),this.disabled=!1,this.alwaysFocusable=!1,this.label="",this.hasIcon=!1}get rippleDisabled(){return this.disabled}focus(e){this.disabled&&!this.alwaysFocusable||super.focus(e)}render(){return Y`
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
    `}handleIconChange(e){const r=e.target;this.hasIcon=r.assignedElements({flatten:!0}).length>0}}Mi(Gn);Gn.shadowRootOptions={...xe.shadowRootOptions,delegatesFocus:!0};R([$({type:Boolean,reflect:!0})],Gn.prototype,"disabled",void 0);R([$({type:Boolean,attribute:"always-focusable"})],Gn.prototype,"alwaysFocusable",void 0);R([$()],Gn.prototype,"label",void 0);R([$({type:Boolean,reflect:!0,attribute:"has-icon"})],Gn.prototype,"hasIcon",void 0);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class tx extends xe{get chips(){return this.childElements.filter(e=>e instanceof Gn)}constructor(){super(),this.internals=this.attachInternals(),this.addEventListener("focusin",this.updateTabIndices.bind(this)),this.addEventListener("update-focus",this.updateTabIndices.bind(this)),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.internals.role="toolbar"}render(){return Y`<slot @slotchange=${this.updateTabIndices}></slot>`}handleKeyDown(e){const r=e.key==="ArrowLeft",n=e.key==="ArrowRight",i=e.key==="Home",o=e.key==="End";if(!r&&!n&&!i&&!o)return;const{chips:s}=this;if(s.length<2)return;if(e.preventDefault(),i||o){const m=i?0:s.length-1;s[m].focus({trailing:o}),this.updateTabIndices();return}const c=getComputedStyle(this).direction==="rtl"?r:n,u=s.find(m=>m.matches(":focus-within"));if(!u){(c?s[0]:s[s.length-1]).focus({trailing:!c}),this.updateTabIndices();return}const f=s.indexOf(u);let p=c?f+1:f-1;for(;p!==f;){p>=s.length?p=0:p<0&&(p=s.length-1);const m=s[p];if(m.disabled&&!m.alwaysFocusable){c?p++:p--;continue}m.focus({trailing:!c}),this.updateTabIndices();break}}updateTabIndices(){const{chips:e}=this;let r;for(const n of e){const i=n.alwaysFocusable||!n.disabled;if(n.matches(":focus-within")&&i){r=n;continue}i&&!r&&(r=n),n.tabIndex=-1}r&&(r.tabIndex=0)}}R([qo()],tx.prototype,"childElements",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const MV=me`:host{display:flex;flex-wrap:wrap;gap:8px}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let np=class extends tx{};np.styles=[MV];np=R([je("md-chip-set")],np);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const $V=me`.elevated{--md-elevation-level: var(--_elevated-container-elevation);--md-elevation-shadow-color: var(--_elevated-container-shadow-color)}.elevated::before{background:var(--_elevated-container-color)}.elevated:hover{--md-elevation-level: var(--_elevated-hover-container-elevation)}.elevated:focus-within{--md-elevation-level: var(--_elevated-focus-container-elevation)}.elevated:active{--md-elevation-level: var(--_elevated-pressed-container-elevation)}.elevated.disabled{--md-elevation-level: var(--_elevated-disabled-container-elevation)}.elevated.disabled::before{background:var(--_elevated-disabled-container-color);opacity:var(--_elevated-disabled-container-opacity)}@media(forced-colors: active){.elevated md-elevation{border:1px solid CanvasText}.elevated.disabled md-elevation{border-color:GrayText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Vl="aria-label-remove";class FV extends Gn{get ariaLabelRemove(){if(this.hasAttribute(Vl))return this.getAttribute(Vl);const{ariaLabel:e}=this;return`Remove ${e||this.label}`}set ariaLabelRemove(e){const r=this.ariaLabelRemove;e!==r&&(e===null?this.removeAttribute(Vl):this.setAttribute(Vl,e),this.requestUpdate())}constructor(){super(),this.handleTrailingActionFocus=this.handleTrailingActionFocus.bind(this),this.addEventListener("keydown",this.handleKeyDown.bind(this))}focus(e){if((this.alwaysFocusable||!this.disabled)&&(e!=null&&e.trailing)&&this.trailingAction){this.trailingAction.focus(e);return}super.focus(e)}renderContainerContent(){return Y`
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
 */class $i extends FV{constructor(){super(...arguments),this.elevated=!1,this.removable=!1,this.selected=!1,this.hasSelectedIcon=!1}get primaryId(){return"button"}getContainerClasses(){return{...super.getContainerClasses(),elevated:this.elevated,selected:this.selected,"has-trailing":this.removable,"has-icon":this.hasIcon||this.selected}}renderPrimaryAction(e){const{ariaLabel:r}=this;return Y`
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
    `:super.renderLeadingIcon()}renderTrailingAction(e){return this.removable?UV({focusListener:e,ariaLabel:this.ariaLabelRemove,disabled:this.disabled}):B}renderOutline(){return this.elevated?Y`<md-elevation part="elevation"></md-elevation>`:super.renderOutline()}handleClick(e){if(this.disabled)return;const r=this.selected;if(this.selected=!this.selected,!vg(this,e)){this.selected=r;return}}}R([$({type:Boolean})],$i.prototype,"elevated",void 0);R([$({type:Boolean})],$i.prototype,"removable",void 0);R([$({type:Boolean,reflect:!0})],$i.prototype,"selected",void 0);R([$({type:Boolean,reflect:!0,attribute:"has-selected-icon"})],$i.prototype,"hasSelectedIcon",void 0);R([$e(".primary.action")],$i.prototype,"primaryAction",void 0);R([$e(".trailing.action")],$i.prototype,"trailingAction",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const jV=me`:host{--_container-height: var(--md-filter-chip-container-height, 32px);--_disabled-label-text-color: var(--md-filter-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filter-chip-disabled-label-text-opacity, 0.38);--_elevated-container-elevation: var(--md-filter-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-filter-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-filter-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-filter-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-filter-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-filter-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-filter-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-filter-chip-elevated-pressed-container-elevation, 1);--_elevated-selected-container-color: var(--md-filter-chip-elevated-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_label-text-font: var(--md-filter-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filter-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filter-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filter-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_selected-focus-label-text-color: var(--md-filter-chip-selected-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-label-text-color: var(--md-filter-chip-selected-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-color: var(--md-filter-chip-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-opacity: var(--md-filter-chip-selected-hover-state-layer-opacity, 0.08);--_selected-label-text-color: var(--md-filter-chip-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-label-text-color: var(--md-filter-chip-selected-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-color: var(--md-filter-chip-selected-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_selected-pressed-state-layer-opacity: var(--md-filter-chip-selected-pressed-state-layer-opacity, 0.12);--_elevated-container-color: var(--md-filter-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_disabled-outline-color: var(--md-filter-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-filter-chip-disabled-outline-opacity, 0.12);--_disabled-selected-container-color: var(--md-filter-chip-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-filter-chip-disabled-selected-container-opacity, 0.12);--_focus-outline-color: var(--md-filter-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-filter-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-filter-chip-outline-width, 1px);--_selected-container-color: var(--md-filter-chip-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_selected-outline-width: var(--md-filter-chip-selected-outline-width, 0px);--_focus-label-text-color: var(--md-filter-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-filter-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filter-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-filter-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filter-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-label-text-color: var(--md-filter-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-filter-chip-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filter-chip-pressed-state-layer-opacity, 0.12);--_icon-size: var(--md-filter-chip-icon-size, 18px);--_disabled-leading-icon-color: var(--md-filter-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filter-chip-disabled-leading-icon-opacity, 0.38);--_selected-focus-leading-icon-color: var(--md-filter-chip-selected-focus-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-leading-icon-color: var(--md-filter-chip-selected-hover-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-leading-icon-color: var(--md-filter-chip-selected-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-leading-icon-color: var(--md-filter-chip-selected-pressed-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-leading-icon-color: var(--md-filter-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-filter-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-filter-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-filter-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_disabled-trailing-icon-color: var(--md-filter-chip-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filter-chip-disabled-trailing-icon-opacity, 0.38);--_selected-focus-trailing-icon-color: var(--md-filter-chip-selected-focus-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-trailing-icon-color: var(--md-filter-chip-selected-hover-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-trailing-icon-color: var(--md-filter-chip-selected-pressed-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-trailing-icon-color: var(--md-filter-chip-selected-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-trailing-icon-color: var(--md-filter-chip-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filter-chip-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-trailing-icon-color: var(--md-filter-chip-pressed-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-color: var(--md-filter-chip-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var(--md-filter-chip-container-shape-start-start, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end: var(--md-filter-chip-container-shape-start-end, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end: var(--md-filter-chip-container-shape-end-end, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start: var(--md-filter-chip-container-shape-end-start, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space: var(--md-filter-chip-leading-space, 16px);--_trailing-space: var(--md-filter-chip-trailing-space, 16px);--_icon-label-space: var(--md-filter-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-filter-chip-with-leading-icon-leading-space, 8px);--_with-trailing-icon-trailing-space: var(--md-filter-chip-with-trailing-icon-trailing-space, 8px)}.selected.elevated::before{background:var(--_elevated-selected-container-color)}.checkmark{height:var(--_icon-size);width:var(--_icon-size)}.disabled .checkmark{opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){.disabled .checkmark{opacity:1}}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const BV=me`.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}:where(.selected)::before{background:var(--_selected-container-color)}:where(.selected) .outline{border-width:var(--_selected-outline-width)}:where(.selected.disabled)::before{background:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}:where(.selected) .label{color:var(--_selected-label-text-color)}:where(.selected:hover) .label{color:var(--_selected-hover-label-text-color)}:where(.selected:focus) .label{color:var(--_selected-focus-label-text-color)}:where(.selected:active) .label{color:var(--_selected-pressed-label-text-color)}:where(.selected) .leading.icon{color:var(--_selected-leading-icon-color)}:where(.selected:hover) .leading.icon{color:var(--_selected-hover-leading-icon-color)}:where(.selected:focus) .leading.icon{color:var(--_selected-focus-leading-icon-color)}:where(.selected:active) .leading.icon{color:var(--_selected-pressed-leading-icon-color)}@media(forced-colors: active){:where(.selected:not(.elevated))::before{border:1px solid CanvasText}:where(.selected) .outline{border-width:1px}}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const qV=me`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);display:inline-flex;height:var(--_container-height);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host([disabled]){pointer-events:none}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}.container{border-radius:inherit;box-sizing:border-box;display:flex;height:100%;position:relative;width:100%}.container::before{border-radius:inherit;content:"";inset:0;pointer-events:none;position:absolute}.container:not(.disabled){cursor:pointer}.container.disabled{pointer-events:none}.cell{display:flex}.action{align-items:baseline;appearance:none;background:none;border:none;border-radius:inherit;display:flex;outline:none;padding:0;position:relative;text-decoration:none}.primary.action{padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space)}.has-icon .primary.action{padding-inline-start:var(--_with-leading-icon-leading-space)}.touch{height:48px;inset:50% 0 0;position:absolute;transform:translateY(-50%);width:100%}:host([touch-target=none]) .touch{display:none}.outline{border:var(--_outline-width) solid var(--_outline-color);border-radius:inherit;inset:0;pointer-events:none;position:absolute}:where(:focus) .outline{border-color:var(--_focus-outline-color)}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}md-ripple{border-radius:inherit}.label,.icon,.touch{z-index:1}.label{align-items:center;color:var(--_label-text-color);display:flex;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);height:100%;text-overflow:ellipsis;user-select:none;white-space:nowrap}:where(:hover) .label{color:var(--_hover-label-text-color)}:where(:focus) .label{color:var(--_focus-label-text-color)}:where(:active) .label{color:var(--_pressed-label-text-color)}:where(.disabled) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.icon{align-self:center;display:flex;fill:currentColor;position:relative}.icon ::slotted(:first-child){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size)}.leading.icon{color:var(--_leading-icon-color)}.leading.icon ::slotted(*),.leading.icon svg{margin-inline-end:var(--_icon-label-space)}:where(:hover) .leading.icon{color:var(--_hover-leading-icon-color)}:where(:focus) .leading.icon{color:var(--_focus-leading-icon-color)}:where(:active) .leading.icon{color:var(--_pressed-leading-icon-color)}:where(.disabled) .leading.icon{color:var(--_disabled-leading-icon-color);opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){:where(.disabled) :is(.label,.outline,.leading.icon){color:GrayText;opacity:1}}a,button{text-transform:inherit}a,button:not(:disabled){cursor:inherit}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const HV=me`.trailing.action{align-items:center;justify-content:center;padding-inline-start:var(--_icon-label-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.trailing.action :is(md-ripple,md-focus-ring){border-radius:50%;height:calc(1.3333333333*var(--_icon-size));width:calc(1.3333333333*var(--_icon-size))}.trailing.action md-focus-ring{inset:unset}.has-trailing .primary.action{padding-inline-end:0}.trailing.icon{color:var(--_trailing-icon-color);height:var(--_icon-size);width:var(--_icon-size)}:where(:hover) .trailing.icon{color:var(--_hover-trailing-icon-color)}:where(:focus) .trailing.icon{color:var(--_focus-trailing-icon-color)}:where(:active) .trailing.icon{color:var(--_pressed-trailing-icon-color)}:where(.disabled) .trailing.icon{color:var(--_disabled-trailing-icon-color);opacity:var(--_disabled-trailing-icon-opacity)}:where(.selected) .trailing.icon{color:var(--_selected-trailing-icon-color)}:where(.selected:hover) .trailing.icon{color:var(--_selected-hover-trailing-icon-color)}:where(.selected:focus) .trailing.icon{color:var(--_selected-focus-trailing-icon-color)}:where(.selected:active) .trailing.icon{color:var(--_selected-pressed-trailing-icon-color)}@media(forced-colors: active){.trailing.icon{color:ButtonText}:where(.disabled) .trailing.icon{color:GrayText;opacity:1}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ip=class extends $i{};ip.styles=[qV,$V,HV,BV,jV];ip=R([je("md-filter-chip")],ip);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ml=Symbol("isFocusable"),vh=Symbol("privateIsFocusable"),$l=Symbol("externalTabIndex"),Fl=Symbol("isUpdatingTabIndex"),Ul=Symbol("updateTabIndex");function WV(t){var e,r,n;class i extends t{constructor(){super(...arguments),this[e]=!0,this[r]=null,this[n]=!1}get[Ml](){return this[vh]}set[Ml](s){this[Ml]!==s&&(this[vh]=s,this[Ul]())}connectedCallback(){super.connectedCallback(),this[Ul]()}attributeChangedCallback(s,l,c){if(s!=="tabindex"){super.attributeChangedCallback(s,l,c);return}if(this.requestUpdate("tabIndex",Number(l??-1)),!this[Fl]){if(!this.hasAttribute("tabindex")){this[$l]=null,this[Ul]();return}this[$l]=this.tabIndex}}[(e=vh,r=$l,n=Fl,Ul)](){const s=this[Ml]?0:-1,l=this[$l]??s;this[Fl]=!0,this.tabIndex=l,this[Fl]=!1}}return R([$({noAccessor:!0})],i.prototype,"tabIndex",void 0),i}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class KV extends YT{computeValidity(e){this.radioElement||(this.radioElement=document.createElement("input"),this.radioElement.type="radio",this.radioElement.name="group");let r=!1,n=!1;for(const{checked:i,required:o}of e)o&&(r=!0),i&&(n=!0);return this.radioElement.checked=n,this.radioElement.required=r,{validity:{valueMissing:r&&!n},validationMessage:this.radioElement.validationMessage}}equals(e,r){if(e.length!==r.length)return!1;for(let n=0;n<e.length;n++){const i=e[n],o=r[n];if(i.checked!==o.checked||i.required!==o.required)return!1}return!0}copy(e){return e.map(({checked:r,required:n})=>({checked:r,required:n}))}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class GV{get controls(){const e=this.host.getAttribute("name");return!e||!this.root||!this.host.isConnected?[this.host]:Array.from(this.root.querySelectorAll(`[name="${e}"]`))}constructor(e){this.host=e,this.focused=!1,this.root=null,this.handleFocusIn=()=>{this.focused=!0,this.updateTabIndices()},this.handleFocusOut=()=>{this.focused=!1,this.updateTabIndices()},this.handleKeyDown=r=>{const n=r.key==="ArrowDown",i=r.key==="ArrowUp",o=r.key==="ArrowLeft",s=r.key==="ArrowRight";if(!o&&!s&&!n&&!i)return;const l=this.controls;if(!l.length)return;r.preventDefault();const u=getComputedStyle(this.host).direction==="rtl"?o||n:s||n,f=l.indexOf(this.host);let p=u?f+1:f-1;for(;p!==f;){p>=l.length?p=0:p<0&&(p=l.length-1);const m=l[p];if(m.hasAttribute("disabled")){u?p++:p--;continue}for(const T of l)T!==m&&(T.checked=!1,T.tabIndex=-1,T.blur());m.checked=!0,m.tabIndex=0,m.focus(),m.dispatchEvent(new Event("change",{bubbles:!0}));break}}}hostConnected(){this.root=this.host.getRootNode(),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("focusin",this.handleFocusIn),this.host.addEventListener("focusout",this.handleFocusOut),this.host.checked&&this.uncheckSiblings(),this.updateTabIndices()}hostDisconnected(){this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("focusin",this.handleFocusIn),this.host.removeEventListener("focusout",this.handleFocusOut),this.updateTabIndices(),this.root=null}handleCheckedChange(){this.host.checked&&(this.uncheckSiblings(),this.updateTabIndices())}uncheckSiblings(){for(const e of this.controls)e!==this.host&&(e.checked=!1)}updateTabIndices(){const e=this.controls,r=e.find(n=>n.checked);if(r||this.focused){const n=r||this.host;n.tabIndex=0;for(const i of e)i!==n&&(i.tabIndex=-1);return}for(const n of e)n.tabIndex=0}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var xw;const yh=Symbol("checked");let QV=0;const YV=GT(QT(Bu(WV(xe))));class qa extends YV{get checked(){return this[yh]}set checked(e){const r=this.checked;r!==e&&(this[yh]=e,this.requestUpdate("checked",r),this.selectionController.handleCheckedChange())}constructor(){super(),this.maskId=`cutout${++QV}`,this[xw]=!1,this.required=!1,this.value="on",this.selectionController=new GV(this),this.addController(this.selectionController),this[Je].role="radio",this.addEventListener("click",this.handleClick.bind(this)),this.addEventListener("keydown",this.handleKeydown.bind(this))}render(){const e={checked:this.checked};return Y`
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
    `}updated(){this[Je].ariaChecked=String(this.checked)}async handleClick(e){this.disabled||(await 0,!e.defaultPrevented&&(qT(e)&&this.focus(),this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))))}async handleKeydown(e){await 0,!(e.key!==" "||e.defaultPrevented)&&this.click()}[(xw=yh,qs)](){return this.checked?this.value:null}[Qf](){return String(this.checked)}formResetCallback(){this.checked=this.hasAttribute("checked")}formStateRestoreCallback(e){this.checked=e==="true"}[Zc](){return new KV(()=>this.selectionController?this.selectionController.controls:[this])}[eu](){return this.container}}R([$({type:Boolean})],qa.prototype,"checked",null);R([$({type:Boolean})],qa.prototype,"required",void 0);R([$()],qa.prototype,"value",void 0);R([$e(".container")],qa.prototype,"container",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const XV=me`@layer{:host{display:inline-flex;height:var(--md-radio-icon-size, 20px);outline:none;position:relative;vertical-align:top;width:var(--md-radio-icon-size, 20px);-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;--md-ripple-hover-color: var(--md-radio-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-radio-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-radio-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-opacity: var(--md-radio-pressed-state-layer-opacity, 0.12)}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-radio-icon-size, 20px))/2)}.container{display:flex;height:100%;place-content:center;place-items:center;width:100%}md-focus-ring{height:44px;inset:unset;width:44px}.checked{--md-ripple-hover-color: var(--md-radio-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-radio-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-radio-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-radio-selected-pressed-state-layer-opacity, 0.12)}input{appearance:none;height:48px;margin:0;position:absolute;width:48px;cursor:inherit}:host([touch-target=none]) input{width:100%;height:100%}md-ripple{border-radius:50%;height:var(--md-radio-state-layer-size, 40px);inset:unset;width:var(--md-radio-state-layer-size, 40px)}.icon{fill:var(--md-radio-icon-color, var(--md-sys-color-on-surface-variant, #49454f));inset:0;position:absolute}.outer.circle{transition:fill 50ms linear}.inner.circle{opacity:0;transform-origin:center;transition:opacity 50ms linear}.checked .icon{fill:var(--md-radio-selected-icon-color, var(--md-sys-color-primary, #6750a4))}.checked .inner.circle{animation:inner-circle-grow 300ms cubic-bezier(0.05, 0.7, 0.1, 1);opacity:1}@keyframes inner-circle-grow{from{transform:scale(0)}to{transform:scale(1)}}:host([disabled]) .circle{animation-duration:0s;transition-duration:0s}:host(:hover) .icon{fill:var(--md-radio-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host(:focus-within) .icon{fill:var(--md-radio-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host(:active) .icon{fill:var(--md-radio-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host([disabled]) .icon{fill:var(--md-radio-disabled-unselected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-radio-disabled-unselected-icon-opacity, 0.38)}:host(:hover) .checked .icon{fill:var(--md-radio-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4))}:host(:focus-within) .checked .icon{fill:var(--md-radio-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4))}:host(:active) .checked .icon{fill:var(--md-radio-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4))}:host([disabled]) .checked .icon{fill:var(--md-radio-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-radio-disabled-selected-icon-opacity, 0.38)}}@layer hcm{@media(forced-colors: active){.icon{fill:CanvasText}:host([disabled]) .icon{fill:GrayText;opacity:1}}}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let op=class extends qa{};op.styles=[XV];op=R([je("md-radio")],op);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Hu extends xe{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}R([$({type:Boolean,reflect:!0})],Hu.prototype,"inset",void 0);R([$({type:Boolean,reflect:!0,attribute:"inset-start"})],Hu.prototype,"insetStart",void 0);R([$({type:Boolean,reflect:!0,attribute:"inset-end"})],Hu.prototype,"insetEnd",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const JV=me`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let sp=class extends Hu{};sp.styles=[JV];sp=R([je("md-divider")],sp);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ZV={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:No.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:No.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},e4={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:No.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:No.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Le extends xe{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.quick=!1,this.returnValue="",this.noFocusTrap=!1,this.getOpenAnimation=()=>ZV,this.getCloseAnimation=()=>e4,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.escapePressedWithoutCancel=!1,this.treewalker=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT),this.addEventListener("submit",this.handleSubmit)}async show(){var n;this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;const e=this.dialog;if(e.open||!this.isOpening){this.isOpening=!1;return}if(!this.dispatchEvent(new Event("open",{cancelable:!0}))){this.open=!1,this.isOpening=!1;return}e.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),(n=this.querySelector("[autofocus]"))==null||n.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1}async close(e=this.returnValue){if(this.isOpening=!1,!this.isConnected){this.open=!1;return}await this.updateComplete;const r=this.dialog;if(!r.open||this.isOpening){this.open=!1;return}const n=this.returnValue;if(this.returnValue=e,!this.dispatchEvent(new Event("close",{cancelable:!0}))){this.returnValue=n;return}await this.animateDialog(this.getCloseAnimation()),r.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){const e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),r={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},n=this.open&&!this.noFocusTrap,i=Y`
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
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(e=>{for(const r of e)this.handleAnchorIntersection(r)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent){this.nextClickIsFromContent=!1;return}this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){const r=e.target,{submitter:n}=e;r.method!=="dialog"||!n||this.close(n.getAttribute("value")??this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;this.escapePressedWithoutCancel=!1;const r=!vg(this,e);e.preventDefault(),!r&&this.close()}handleClose(){var e;this.escapePressedWithoutCancel&&(this.escapePressedWithoutCancel=!1,(e=this.dialog)==null||e.dispatchEvent(new Event("cancel",{cancelable:!0})))}handleKeydown(e){e.key==="Escape"&&(this.escapePressedWithoutCancel=!0,setTimeout(()=>{this.escapePressedWithoutCancel=!1}))}async animateDialog(e){var N;if((N=this.cancelAnimations)==null||N.abort(),this.cancelAnimations=new AbortController,this.quick)return;const{dialog:r,scrim:n,container:i,headline:o,content:s,actions:l}=this;if(!r||!n||!i||!o||!s||!l)return;const{container:c,dialog:u,scrim:f,headline:p,content:m,actions:T}=e,S=[[r,u??[]],[n,f??[]],[i,c??[]],[o,p??[]],[s,m??[]],[l,T??[]]],P=[];for(const[b,y]of S)for(const x of y){const D=b.animate(...x);this.cancelAnimations.signal.addEventListener("abort",()=>{D.cancel()}),P.push(D)}await Promise.all(P.map(b=>b.finished.catch(()=>{})))}handleHeadlineChange(e){const r=e.target;this.hasHeadline=r.assignedElements().length>0}handleActionsChange(e){const r=e.target;this.hasActions=r.assignedElements().length>0}handleIconChange(e){const r=e.target;this.hasIcon=r.assignedElements().length>0}handleAnchorIntersection(e){const{target:r,isIntersecting:n}=e;r===this.topAnchor&&(this.isAtScrollTop=n),r===this.bottomAnchor&&(this.isAtScrollBottom=n)}getIsConnectedPromise(){return new Promise(e=>{this.isConnectedPromiseResolve=e})}handleFocusTrapFocus(e){var p;const[r,n]=this.getFirstAndLastFocusableChildren();if(!r||!n){(p=this.dialog)==null||p.focus();return}const i=e.target===this.firstFocusTrap,o=!i,s=e.relatedTarget===r,l=e.relatedTarget===n,c=!s&&!l;if(o&&l||i&&c){r.focus();return}if(i&&s||o&&c){n.focus();return}}getFirstAndLastFocusableChildren(){let e=null,r=null;for(this.treewalker.currentNode=this.treewalker.root;this.treewalker.nextNode();){const n=this.treewalker.currentNode;t4(n)&&(e||(e=n),r=n)}return[e,r]}}Mi(Le);R([$({type:Boolean})],Le.prototype,"open",null);R([$({type:Boolean})],Le.prototype,"quick",void 0);R([$({attribute:!1})],Le.prototype,"returnValue",void 0);R([$()],Le.prototype,"type",void 0);R([$({type:Boolean,attribute:"no-focus-trap"})],Le.prototype,"noFocusTrap",void 0);R([$e("dialog")],Le.prototype,"dialog",void 0);R([$e(".scrim")],Le.prototype,"scrim",void 0);R([$e(".container")],Le.prototype,"container",void 0);R([$e(".headline")],Le.prototype,"headline",void 0);R([$e(".content")],Le.prototype,"content",void 0);R([$e(".actions")],Le.prototype,"actions",void 0);R([At()],Le.prototype,"isAtScrollTop",void 0);R([At()],Le.prototype,"isAtScrollBottom",void 0);R([$e(".scroller")],Le.prototype,"scroller",void 0);R([$e(".top.anchor")],Le.prototype,"topAnchor",void 0);R([$e(".bottom.anchor")],Le.prototype,"bottomAnchor",void 0);R([$e(".focus-trap")],Le.prototype,"firstFocusTrap",void 0);R([At()],Le.prototype,"hasHeadline",void 0);R([At()],Le.prototype,"hasActions",void 0);R([At()],Le.prototype,"hasIcon",void 0);function t4(t){var o;const e=":is(button,input,select,textarea,object,:is(a,area)[href],[tabindex],[contenteditable=true])",r=":not(:disabled,[disabled])";return t.matches(e+r+':not([tabindex^="-"])')?!0:!t.localName.includes("-")||!t.matches(r)?!1:((o=t.shadowRoot)==null?void 0:o.delegatesFocus)??!1}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const r4=me`:host{border-start-start-radius:var(--md-dialog-container-shape-start-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-start-end-radius:var(--md-dialog-container-shape-start-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-end-radius:var(--md-dialog-container-shape-end-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-start-radius:var(--md-dialog-container-shape-end-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size, 24px);width:var(--md-dialog-icon-size, 24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));flex:1;font-weight:var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ap=class extends Le{};ap.styles=[r4];ap=R([je("md-dialog")],ap);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Aw(t,e=!0){return e&&getComputedStyle(t).getPropertyValue("direction").trim()==="rtl"}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const n4=Bu(xe);class It extends n4{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=Aw(this,this.flipIconInRtl)}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Je].form}get labels(){return this[Je].labels}willUpdate(){this.href&&(this.disabled=!1)}render(){const e=this.href?vi`div`:vi`button`,{ariaLabel:r,ariaHasPopup:n,ariaExpanded:i}=this,o=r&&this.ariaLabelSelected,s=this.toggle?this.selected:B;let l=B;return this.href||(l=o&&this.selected?this.ariaLabelSelected:r),gg`<${e}
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
      ?disabled="${!this.href&&this.disabled}"></md-ripple>`}connectedCallback(){this.flipIcon=Aw(this,this.flipIconInRtl),super.connectedCallback()}async handleClick(e){await 0,!(!this.toggle||this.disabled||e.defaultPrevented)&&(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}Mi(It),BT(It);It.formAssociated=!0;It.shadowRootOptions={mode:"open",delegatesFocus:!0};R([$({type:Boolean,reflect:!0})],It.prototype,"disabled",void 0);R([$({type:Boolean,attribute:"flip-icon-in-rtl"})],It.prototype,"flipIconInRtl",void 0);R([$()],It.prototype,"href",void 0);R([$()],It.prototype,"target",void 0);R([$({attribute:"aria-label-selected"})],It.prototype,"ariaLabelSelected",void 0);R([$({type:Boolean})],It.prototype,"toggle",void 0);R([$({type:Boolean,reflect:!0})],It.prototype,"selected",void 0);R([$()],It.prototype,"type",void 0);R([$({reflect:!0})],It.prototype,"value",void 0);R([At()],It.prototype,"flipIcon",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const i4=me`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host([disabled]){--_disabled-icon-opacity: 1}}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const o4=me`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let lp=class extends It{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};lp.styles=[i4,o4];lp=R([je("md-icon-button")],lp);/**
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
 */const c4=l4("PowerOff",[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15",key:"dxknvb"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68",key:"1x7qb5"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]),u4=["Bartender","Barback","Server","Manager","Security","Runner"],Sw=[{id:"ice",label:"ICE",icon:"ac_unit"},{id:"glass",label:"GLASSWARE",icon:"wine_bar",children:[{id:"rocks",label:"ROCKS"},{id:"collins",label:"COLLINS"},{id:"pint",label:"PINT"},{id:"coupe",label:"COUPE"},{id:"shot",label:"SHOT GLASS"},{id:"wine",label:"WINE GLASS"}]},{id:"fruit",label:"FRUIT / GARNISH",icon:"restaurant",children:[{id:"lime",label:"LIMES"},{id:"lemon",label:"LEMONS"},{id:"orange",label:"ORANGES"},{id:"cherry",label:"CHERRIES"},{id:"olive",label:"OLIVES"},{id:"mint",label:"MINT"}]},{id:"restock",label:"RESTOCK WELL",icon:"liquor",children:[{id:"vodka",label:"VODKA"},{id:"gin",label:"GIN"},{id:"tequila",label:"TEQUILA"},{id:"rum",label:"RUM"},{id:"whiskey",label:"WHISKEY"},{id:"cordial",label:"MIXERS"},{id:"beer",label:"BEER"}]},{id:"keg",label:"KEG KICKED",icon:"keg"},{id:"trash",label:"TRASH / SPILL",icon:"delete"},{id:"security",label:"SECURITY",icon:"security"},{id:"manager",label:"MANAGER",icon:"manage_accounts"}],d4=[{id:"search",label:"Search"},{id:"create",label:"Create Temp"}],h4=({onJoin:t})=>{const[e,r]=Q.useState("search"),[n,i]=Q.useState(""),o=s=>{s.preventDefault(),t({name:n,status:"temporary"})};return F.jsxs("div",{className:"space-y-4",children:[e==="search"?F.jsx("md-filled-text-field",{label:"Search OpenStreetMap",value:n,onInput:s=>i(s.target.value),type:"search"}):F.jsxs("form",{onSubmit:o,children:[F.jsx("md-filled-text-field",{label:"Bar Name",value:n,onInput:s=>i(s.target.value)}),F.jsx("md-filled-button",{type:"submit",children:"Create Bar"})]}),F.jsx("div",{className:"flex justify-center gap-4",children:d4.map(s=>{const l=e===s.id,c=l?"md-filled-button":"md-outlined-button";return F.jsx(c,{onClick:()=>!l&&r(s.id),children:s.label},s.id)})})]})},f4=({onSelect:t})=>{const[e,r]=Q.useState(""),[n,i]=Q.useState("");return F.jsxs("div",{className:"w-full max-w-sm space-y-6 animate-in fade-in slide-in-from-bottom-4",children:[F.jsxs("div",{className:"text-center space-y-2",children:[F.jsx("h2",{className:"text-2xl font-bold text-white",children:"Identification"}),F.jsx("p",{className:"text-gray-500",children:"Name and Rank, soldier."})]}),F.jsx("md-filled-text-field",{label:"Display Name (e.g. 'Angry Steve')",value:n,onInput:o=>i(o.target.value),required:!0}),F.jsx("div",{className:"bg-[#1E1E1E] rounded-xl overflow-hidden border border-gray-800 max-h-60 overflow-y-auto",children:u4.map(o=>F.jsxs("div",{onClick:()=>r(o),className:`p-4 flex items-center justify-between cursor-pointer border-b border-gray-800 last:border-0 hover:bg-white/5 ${e===o?"bg-white/10":""}`,children:[F.jsxs("div",{className:"flex items-center gap-3",children:[F.jsx("md-icon",{children:o==="Bartender"?"local_bar":"person"}),F.jsx("span",{className:"font-medium text-lg",children:o})]}),F.jsx("md-radio",{checked:e===o,"touch-target":"wrapper"})]},o))}),F.jsx("md-filled-button",{disabled:!e||!n||void 0,onClick:()=>t(e,n),children:"Clock In"})]})};function p4(){const[t,e]=Q.useState(null),[r,n]=Q.useState(null),[i,o]=Q.useState(!1),[s,l]=OC(),c=s.get("bar")||localStorage.getItem("barId"),[u,f]=Q.useState(c),[p,m]=Q.useState(""),[T,S]=Q.useState(null),[P,N]=Q.useState(""),[b,y]=Q.useState([]),[x,D]=Q.useState(Sw),[U,z]=Q.useState(null),[w,v]=Q.useState(null),[_,E]=Q.useState([]),A=Q.useRef(null),[C,I]=Q.useState(!1);Q.useEffect(()=>{const q=async()=>{if(Notification.permission==="granted"){v(!0);const Ae=await sw();Ae&&z(Ae)}else if(Notification.permission==="denied")v(!1);else{const Ae=await sw();Ae?(v(!0),z(Ae)):v(!1)}},ge=dR(ps,Ae=>{e(Ae),Ae&&q()});return cL().then(()=>{navigator.vibrate&&navigator.vibrate([500,200,500]),new Audio("/alert.mp3").play().catch(()=>{})}),()=>ge()},[]),Q.useEffect(()=>{if(!t||!u)return;l({bar:u}),localStorage.setItem("barId",u);const q=vr(ir,`bars/${u}/users`,t.uid),ge=vr(ir,`bars/${u}/tokens`,t.uid);(async()=>{U&&(await Rl(ge,{token:U,updated:Zn()}),await th(q,{status:"active",lastSeen:Zn()}).catch(()=>{}))})();const er=rh(q,Nr=>{if(Nr.exists()){const Ct=Nr.data();S(Ct.role),N(Ct.displayName||"Unknown")}else S(null)}),tr=rh(vr(ir,"bars",u),Nr=>{if(Nr.exists()){const Ct=Nr.data();m(Ct.name),Ct.buttons&&D([...Sw,...Ct.buttons])}}),Wu=rh(IO(K_(ir,"requests"),TO("barId","==",u),xO("timestamp","desc")),Nr=>y(Nr.docs.map(Ct=>({id:Ct.id,...Ct.data()}))));return()=>{er(),tr(),Wu()}},[t,u,U,l]),Q.useEffect(()=>(A.current&&clearTimeout(A.current),_.length>0&&(A.current=setTimeout(()=>{const q=_.map(ge=>ge.label).join(": ");Pr(`${q} (Ask Me)`),E([])},6e4)),()=>{A.current&&clearTimeout(A.current)}),[_]);const St=async(q,ge)=>{!t||!u||(await Rl(vr(ir,`bars/${u}/users`,t.uid),{role:q,displayName:ge,email:t.email,status:"active",joinedAt:Zn(),lastSeen:Zn()},{merge:!0}),U&&await Rl(vr(ir,`bars/${u}/tokens`,t.uid),{token:U,updated:Zn()}))},Rr=async()=>{!t||!u||(await kO(vr(ir,`bars/${u}/tokens`,t.uid)),await th(vr(ir,`bars/${u}/users`,t.uid),{status:"off_clock"}),f(null),localStorage.removeItem("barId"),I(!1))},Pr=async q=>{!t||!u||(navigator.vibrate&&navigator.vibrate(100),await RO(K_(ir,"requests"),{barId:u,label:q,requesterId:t.uid,requesterName:P,requesterRole:T,status:"pending",timestamp:Zn(),lastNotification:Zn()}))},Zt=async q=>{await th(vr(ir,"requests",q),{status:"claimed",claimedBy:t==null?void 0:t.uid,claimerName:P})},H=async q=>{q.preventDefault();const ge=new FormData(q.target);try{i?await aR(ps,ge.get("email"),ge.get("password")):await lR(ps,ge.get("email"),ge.get("password"))}catch(Ae){n(Ae.message)}},Z=async()=>{try{await NR(ps,lL)}catch(q){n(q.message)}};if(!t)return F.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center p-6 space-y-8 bg-black",children:[F.jsx("h1",{className:"text-4xl font-bold tracking-widest text-white",children:"BARBACKER"}),r&&F.jsx("div",{className:"text-red-400 p-2 border border-red-800 rounded",children:r}),F.jsxs("form",{onSubmit:H,className:"w-full max-w-sm space-y-4",children:[F.jsx("md-filled-text-field",{label:"Email",name:"email",type:"email",required:!0}),F.jsx("md-filled-text-field",{label:"Password",name:"password",type:"password",required:!0}),F.jsx("md-filled-button",{type:"submit",children:i?"Create Account":"Clock In"})]}),F.jsxs("div",{className:"flex gap-4 items-center",children:[F.jsx("md-text-button",{onClick:()=>o(!i),children:i?"Login":"Register"}),F.jsxs("md-outlined-button",{onClick:Z,children:[F.jsx("md-icon",{slot:"icon",children:"mail"}),"Google"]})]})]});if(w===!1)return F.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-black text-center",children:[F.jsx("md-icon",{style:{fontSize:64,color:"#ef4444"},children:"notifications_off"}),F.jsx("h2",{className:"text-2xl font-bold text-white",children:"Permission Required"}),F.jsx("p",{className:"text-gray-400 max-w-xs",children:"Notification permissions are necessary for the app to run. Please enable them in your browser settings and reload."}),F.jsx("md-filled-button",{onClick:()=>window.location.reload(),children:"Reload"})]});if(!u)return F.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-black",children:[F.jsxs("div",{className:"text-center",children:[F.jsx("h2",{className:"text-2xl font-bold text-white mb-1",children:"Select Bar"}),F.jsxs("p",{className:"text-gray-500 text-sm",children:["You are ",t.email]})]}),F.jsx("md-text-button",{onClick:()=>hR(ps),children:"Sign Out"}),F.jsx(h4,{onJoin:async q=>{q.id&&(q.status==="temporary"&&await Rl(vr(ir,"bars",q.id),{name:q.name,address:q.address||"",status:"temporary",buttons:[]},{merge:!0}),f(q.id))}})]});if(!T)return F.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-black",children:[F.jsx("md-icon-button",{onClick:()=>{f(null),localStorage.removeItem("barId")},children:F.jsx("md-icon",{children:"arrow_back"})}),F.jsx(f4,{onSelect:St})]});const te=b.filter(q=>q.status==="pending"),_e=b.filter(q=>q.status!=="pending").slice(0,20),he=_.length>0?_[_.length-1].children||[]:x;return F.jsxs("div",{className:"min-h-screen pb-24 bg-black relative overflow-hidden",children:[F.jsxs("md-dialog",{open:C,onClose:()=>I(!1),children:[F.jsx("div",{slot:"headline",children:"Abandon Ship?"}),F.jsx("div",{slot:"content",children:"Going off clock stops all notifications. The bar will be unprotected. Are you sure?"}),F.jsxs("div",{slot:"actions",children:[F.jsx("md-text-button",{onClick:()=>I(!1),children:"Stay"}),F.jsx("md-filled-button",{onClick:Rr,class:"btn-alert",children:"Leave"})]})]}),F.jsxs("div",{className:"flex justify-between items-center p-4 bg-[#121212] sticky top-0 z-10 border-b border-[#333]",children:[F.jsxs("div",{className:"flex flex-col",children:[F.jsx("span",{className:"font-bold text-lg text-white tracking-wide",children:p}),F.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-400",children:[F.jsx("span",{className:"text-white font-bold",children:P}),F.jsx("span",{className:"bg-gray-800 px-1 rounded",children:T})]})]}),F.jsx("div",{className:"flex gap-2",children:F.jsx("md-icon-button",{onClick:()=>I(!0),title:"Go Off Clock",children:F.jsx(c4,{className:"text-gray-500 hover:text-red-500"})})})]}),_.length>0&&F.jsxs("div",{className:"fixed inset-0 bg-black/95 z-50 flex flex-col p-6 animate-in fade-in duration-300",children:[F.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[F.jsx("md-icon-button",{onClick:()=>E([]),children:F.jsx("md-icon",{children:"close"})}),F.jsx("span",{className:"text-xl font-medium text-gray-200",children:_.map(q=>q.label).join(" > ")})]}),F.jsx("div",{className:"grid grid-cols-2 gap-4",children:he.map(q=>F.jsx("md-filled-tonal-button",{onClick:()=>{q.children?E([..._,q]):(Pr([..._,q].map(ge=>ge.label).join(": ")),E([]))},style:{height:"100px",fontSize:"18px"},children:q.label},q.id))})]}),F.jsx("div",{className:"grid grid-cols-2 gap-3 p-4",children:x.map(q=>{const ge=te.some(Ae=>Ae.label.startsWith(q.label));return F.jsx("md-filled-tonal-button",{onClick:()=>{q.children?E([..._,q]):Pr(q.label)},class:ge?"btn-alert":"",style:{height:"120px"},children:F.jsxs("div",{className:"flex flex-col items-center gap-2",children:[F.jsx("md-icon",{style:{fontSize:32},children:q.icon||"circle"}),F.jsx("span",{className:"text-lg font-bold leading-none",children:q.label}),ge&&F.jsx("span",{className:"text-xs opacity-80",children:"PENDING"})]})},q.id)})}),F.jsx("div",{className:"px-4 mt-4",children:te.map(q=>F.jsxs("div",{onClick:()=>Zt(q.id),className:"mb-2 p-4 bg-[#2C1A1A] border-l-4 border-red-500 rounded-r-lg flex justify-between items-center cursor-pointer active:bg-red-900/40 transition-colors",children:[F.jsxs("div",{className:"flex flex-col",children:[F.jsx("span",{className:"font-medium text-red-100",children:q.label}),F.jsxs("span",{className:"text-xs text-red-400",children:[q.requesterName," (",q.requesterRole,")"]})]}),F.jsx("md-filled-button",{class:"btn-alert",style:{height:"32px"},children:"CLAIM"})]},q.id))}),F.jsxs("div",{className:"px-4 mt-8 pb-10",children:[F.jsx("div",{className:"text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest",children:"Shift Log"}),F.jsx("md-list",{className:"bg-transparent",children:_e.map(q=>F.jsxs("md-list-item",{children:[F.jsx("div",{slot:"headline",className:"text-gray-400",children:q.label}),F.jsxs("div",{slot:"supporting-text",className:"text-xs text-gray-600",children:["Asked by ",q.requesterName," • Claimed by ",q.claimerName||"Someone"]}),F.jsx("md-icon",{slot:"start",className:"text-green-800",children:"check_circle"})]},q.id))})]})]})}zb(document.getElementById("root")).render(F.jsx(Q.StrictMode,{children:F.jsx(NC,{children:F.jsx(p4,{})})}));
