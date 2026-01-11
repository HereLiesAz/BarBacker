function FT(t,e){for(var r=0;r<e.length;r++){const n=e[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(n,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function UT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var zw={exports:{}},xu={},Bw={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qa=Symbol.for("react.element"),jT=Symbol.for("react.portal"),zT=Symbol.for("react.fragment"),BT=Symbol.for("react.strict_mode"),qT=Symbol.for("react.profiler"),HT=Symbol.for("react.provider"),WT=Symbol.for("react.context"),KT=Symbol.for("react.forward_ref"),GT=Symbol.for("react.suspense"),QT=Symbol.for("react.memo"),YT=Symbol.for("react.lazy"),Pv=Symbol.iterator;function XT(t){return t===null||typeof t!="object"?null:(t=Pv&&t[Pv]||t["@@iterator"],typeof t=="function"?t:null)}var qw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hw=Object.assign,Ww={};function Ko(t,e,r){this.props=t,this.context=e,this.refs=Ww,this.updater=r||qw}Ko.prototype.isReactComponent={};Ko.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ko.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Kw(){}Kw.prototype=Ko.prototype;function Ap(t,e,r){this.props=t,this.context=e,this.refs=Ww,this.updater=r||qw}var Sp=Ap.prototype=new Kw;Sp.constructor=Ap;Hw(Sp,Ko.prototype);Sp.isPureReactComponent=!0;var Nv=Array.isArray,Gw=Object.prototype.hasOwnProperty,kp={current:null},Qw={key:!0,ref:!0,__self:!0,__source:!0};function Yw(t,e,r){var n,i={},o=null,s=null;if(e!=null)for(n in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Gw.call(e,n)&&!Qw.hasOwnProperty(n)&&(i[n]=e[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(n in l=t.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:qa,type:t,key:o,ref:s,props:i,_owner:kp.current}}function JT(t,e){return{$$typeof:qa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Cp(t){return typeof t=="object"&&t!==null&&t.$$typeof===qa}function ZT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Ov=/\/+/g;function Nd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ZT(""+t.key):e.toString(36)}function dc(t,e,r,n,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case qa:case jT:s=!0}}if(s)return s=t,i=i(s),t=n===""?"."+Nd(s,0):n,Nv(i)?(r="",t!=null&&(r=t.replace(Ov,"$&/")+"/"),dc(i,e,r,"",function(u){return u})):i!=null&&(Cp(i)&&(i=JT(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Ov,"$&/")+"/")+t)),e.push(i)),1;if(s=0,n=n===""?".":n+":",Nv(t))for(var l=0;l<t.length;l++){o=t[l];var c=n+Nd(o,l);s+=dc(o,e,r,c,i)}else if(c=XT(t),typeof c=="function")for(t=c.call(t),l=0;!(o=t.next()).done;)o=o.value,c=n+Nd(o,l++),s+=dc(o,e,r,c,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Ol(t,e,r){if(t==null)return t;var n=[],i=0;return dc(t,n,"","",function(o){return e.call(r,o,i++)}),n}function eA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Rt={current:null},hc={transition:null},tA={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:hc,ReactCurrentOwner:kp};function Xw(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:Ol,forEach:function(t,e,r){Ol(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Ol(t,function(){e++}),e},toArray:function(t){return Ol(t,function(e){return e})||[]},only:function(t){if(!Cp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=Ko;ae.Fragment=zT;ae.Profiler=qT;ae.PureComponent=Ap;ae.StrictMode=BT;ae.Suspense=GT;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tA;ae.act=Xw;ae.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=Hw({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=kp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)Gw.call(e,c)&&!Qw.hasOwnProperty(c)&&(n[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:qa,type:t.type,key:i,ref:o,props:n,_owner:s}};ae.createContext=function(t){return t={$$typeof:WT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:HT,_context:t},t.Consumer=t};ae.createElement=Yw;ae.createFactory=function(t){var e=Yw.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:KT,render:t}};ae.isValidElement=Cp;ae.lazy=function(t){return{$$typeof:YT,_payload:{_status:-1,_result:t},_init:eA}};ae.memo=function(t,e){return{$$typeof:QT,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=hc.transition;hc.transition={};try{t()}finally{hc.transition=e}};ae.unstable_act=Xw;ae.useCallback=function(t,e){return Rt.current.useCallback(t,e)};ae.useContext=function(t){return Rt.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return Rt.current.useDeferredValue(t)};ae.useEffect=function(t,e){return Rt.current.useEffect(t,e)};ae.useId=function(){return Rt.current.useId()};ae.useImperativeHandle=function(t,e,r){return Rt.current.useImperativeHandle(t,e,r)};ae.useInsertionEffect=function(t,e){return Rt.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return Rt.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return Rt.current.useMemo(t,e)};ae.useReducer=function(t,e,r){return Rt.current.useReducer(t,e,r)};ae.useRef=function(t){return Rt.current.useRef(t)};ae.useState=function(t){return Rt.current.useState(t)};ae.useSyncExternalStore=function(t,e,r){return Rt.current.useSyncExternalStore(t,e,r)};ae.useTransition=function(){return Rt.current.useTransition()};ae.version="18.3.1";Bw.exports=ae;var W=Bw.exports;const rA=UT(W),nA=FT({__proto__:null,default:rA},[W]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iA=W,oA=Symbol.for("react.element"),sA=Symbol.for("react.fragment"),aA=Object.prototype.hasOwnProperty,lA=iA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cA={key:!0,ref:!0,__self:!0,__source:!0};function Jw(t,e,r){var n,i={},o=null,s=null;r!==void 0&&(o=""+r),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(n in e)aA.call(e,n)&&!cA.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:oA,type:t,key:o,ref:s,props:i,_owner:lA.current}}xu.Fragment=sA;xu.jsx=Jw;xu.jsxs=Jw;zw.exports=xu;var S=zw.exports,Zw={exports:{}},Qt={},e0={exports:{}},t0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,J){var Z=H.length;H.push(J);e:for(;0<Z;){var me=Z-1>>>1,ge=H[me];if(0<i(ge,J))H[me]=J,H[Z]=ge,Z=me;else break e}}function r(H){return H.length===0?null:H[0]}function n(H){if(H.length===0)return null;var J=H[0],Z=H.pop();if(Z!==J){H[0]=Z;e:for(var me=0,ge=H.length,be=ge>>>1;me<be;){var cr=2*(me+1)-1,Xt=H[cr],ur=cr+1,Jt=H[ur];if(0>i(Xt,Z))ur<ge&&0>i(Jt,Xt)?(H[me]=Jt,H[ur]=Z,me=ur):(H[me]=Xt,H[cr]=Z,me=cr);else if(ur<ge&&0>i(Jt,Z))H[me]=Jt,H[ur]=Z,me=ur;else break e}}return J}function i(H,J){var Z=H.sortIndex-J.sortIndex;return Z!==0?Z:H.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],h=1,p=null,m=3,b=!1,k=!1,N=!1,D=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(H){for(var J=r(u);J!==null;){if(J.callback===null)n(u);else if(J.startTime<=H)n(u),J.sortIndex=J.expirationTime,e(c,J);else break;J=r(u)}}function V(H){if(N=!1,T(H),!k)if(r(c)!==null)k=!0,Ye(j);else{var J=r(u);J!==null&&Ot(V,J.startTime-H)}}function j(H,J){k=!1,N&&(N=!1,E(v),v=-1),b=!0;var Z=m;try{for(T(J),p=r(c);p!==null&&(!(p.expirationTime>J)||H&&!A());){var me=p.callback;if(typeof me=="function"){p.callback=null,m=p.priorityLevel;var ge=me(p.expirationTime<=J);J=t.unstable_now(),typeof ge=="function"?p.callback=ge:p===r(c)&&n(c),T(J)}else n(c);p=r(c)}if(p!==null)var be=!0;else{var cr=r(u);cr!==null&&Ot(V,cr.startTime-J),be=!1}return be}finally{p=null,m=Z,b=!1}}var z=!1,w=null,v=-1,_=5,x=-1;function A(){return!(t.unstable_now()-x<_)}function C(){if(w!==null){var H=t.unstable_now();x=H;var J=!0;try{J=w(!0,H)}finally{J?I():(z=!1,w=null)}}else z=!1}var I;if(typeof y=="function")I=function(){y(C)};else if(typeof MessageChannel<"u"){var Et=new MessageChannel,we=Et.port2;Et.port1.onmessage=C,I=function(){we.postMessage(null)}}else I=function(){D(C,0)};function Ye(H){w=H,z||(z=!0,I())}function Ot(H,J){v=D(function(){H(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){k||b||(k=!0,Ye(j))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(H){switch(m){case 1:case 2:case 3:var J=3;break;default:J=m}var Z=m;m=J;try{return H()}finally{m=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,J){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Z=m;m=H;try{return J()}finally{m=Z}},t.unstable_scheduleCallback=function(H,J,Z){var me=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?me+Z:me):Z=me,H){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=Z+ge,H={id:h++,callback:J,priorityLevel:H,startTime:Z,expirationTime:ge,sortIndex:-1},Z>me?(H.sortIndex=Z,e(u,H),r(c)===null&&H===r(u)&&(N?(E(v),v=-1):N=!0,Ot(V,Z-me))):(H.sortIndex=ge,e(c,H),k||b||(k=!0,Ye(j))),H},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(H){var J=m;return function(){var Z=m;m=J;try{return H.apply(this,arguments)}finally{m=Z}}}})(t0);e0.exports=t0;var uA=e0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dA=W,Kt=uA;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r0=new Set,la={};function $i(t,e){Ro(t,e),Ro(t+"Capture",e)}function Ro(t,e){for(la[t]=e,t=0;t<e.length;t++)r0.add(e[t])}var Jr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lh=Object.prototype.hasOwnProperty,hA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dv={},Lv={};function fA(t){return Lh.call(Lv,t)?!0:Lh.call(Dv,t)?!1:hA.test(t)?Lv[t]=!0:(Dv[t]=!0,!1)}function pA(t,e,r,n){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function mA(t,e,r,n){if(e===null||typeof e>"u"||pA(t,e,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pt(t,e,r,n,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var at={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){at[t]=new Pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];at[e]=new Pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){at[t]=new Pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){at[t]=new Pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){at[t]=new Pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){at[t]=new Pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){at[t]=new Pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){at[t]=new Pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){at[t]=new Pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Rp=/[\-:]([a-z])/g;function Pp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Rp,Pp);at[e]=new Pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Rp,Pp);at[e]=new Pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Rp,Pp);at[e]=new Pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){at[t]=new Pt(t,1,!1,t.toLowerCase(),null,!1,!1)});at.xlinkHref=new Pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){at[t]=new Pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Np(t,e,r,n){var i=at.hasOwnProperty(e)?at[e]:null;(i!==null?i.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(mA(e,r,i,n)&&(r=null),n||i===null?fA(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type===3?!1:"":r:(e=i.attributeName,n=i.attributeNamespace,r===null?t.removeAttribute(e):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?t.setAttributeNS(n,e,r):t.setAttribute(e,r))))}var ln=dA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Dl=Symbol.for("react.element"),so=Symbol.for("react.portal"),ao=Symbol.for("react.fragment"),Op=Symbol.for("react.strict_mode"),Vh=Symbol.for("react.profiler"),n0=Symbol.for("react.provider"),i0=Symbol.for("react.context"),Dp=Symbol.for("react.forward_ref"),Mh=Symbol.for("react.suspense"),$h=Symbol.for("react.suspense_list"),Lp=Symbol.for("react.memo"),yn=Symbol.for("react.lazy"),o0=Symbol.for("react.offscreen"),Vv=Symbol.iterator;function xs(t){return t===null||typeof t!="object"?null:(t=Vv&&t[Vv]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,Od;function Ls(t){if(Od===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Od=e&&e[1]||""}return`
`+Od+t}var Dd=!1;function Ld(t,e){if(!t||Dd)return"";Dd=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var n=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){n=u}t.call(e.prototype)}else{try{throw Error()}catch(u){n=u}t()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=n.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=s&&0<=l);break}}}finally{Dd=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Ls(t):""}function gA(t){switch(t.tag){case 5:return Ls(t.type);case 16:return Ls("Lazy");case 13:return Ls("Suspense");case 19:return Ls("SuspenseList");case 0:case 2:case 15:return t=Ld(t.type,!1),t;case 11:return t=Ld(t.type.render,!1),t;case 1:return t=Ld(t.type,!0),t;default:return""}}function Fh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ao:return"Fragment";case so:return"Portal";case Vh:return"Profiler";case Op:return"StrictMode";case Mh:return"Suspense";case $h:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case i0:return(t.displayName||"Context")+".Consumer";case n0:return(t._context.displayName||"Context")+".Provider";case Dp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lp:return e=t.displayName||null,e!==null?e:Fh(t.type)||"Memo";case yn:e=t._payload,t=t._init;try{return Fh(t(e))}catch{}}return null}function vA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fh(e);case 8:return e===Op?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function jn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function s0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yA(t){var e=s0(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ll(t){t._valueTracker||(t._valueTracker=yA(t))}function a0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),n="";return t&&(n=s0(t)?t.checked?"true":"false":t.value),t=n,t!==r?(e.setValue(t),!0):!1}function Dc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Uh(t,e){var r=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Mv(t,e){var r=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;r=jn(e.value!=null?e.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function l0(t,e){e=e.checked,e!=null&&Np(t,"checked",e,!1)}function jh(t,e){l0(t,e);var r=jn(e.value),n=e.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zh(t,e.type,r):e.hasOwnProperty("defaultValue")&&zh(t,e.type,jn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $v(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function zh(t,e,r){(e!=="number"||Dc(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Vs=Array.isArray;function _o(t,e,r,n){if(t=t.options,e){e={};for(var i=0;i<r.length;i++)e["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=e.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&n&&(t[r].defaultSelected=!0)}else{for(r=""+jn(r),e=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Bh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fv(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(U(92));if(Vs(r)){if(1<r.length)throw Error(U(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:jn(r)}}function c0(t,e){var r=jn(e.value),n=jn(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function Uv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function u0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?u0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vl,d0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,n,i){MSApp.execUnsafeLocalFunction(function(){return t(e,r,n,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vl=Vl||document.createElement("div"),Vl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ca(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Hs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_A=["Webkit","ms","Moz","O"];Object.keys(Hs).forEach(function(t){_A.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Hs[e]=Hs[t]})});function h0(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Hs.hasOwnProperty(t)&&Hs[t]?(""+e).trim():e+"px"}function f0(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=h0(r,e[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,i):t[r]=i}}var wA=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hh(t,e){if(e){if(wA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Wh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kh=null;function Vp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gh=null,wo=null,bo=null;function jv(t){if(t=Ka(t)){if(typeof Gh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=ku(e),Gh(t.stateNode,t.type,e))}}function p0(t){wo?bo?bo.push(t):bo=[t]:wo=t}function m0(){if(wo){var t=wo,e=bo;if(bo=wo=null,jv(t),e)for(t=0;t<e.length;t++)jv(e[t])}}function g0(t,e){return t(e)}function v0(){}var Vd=!1;function y0(t,e,r){if(Vd)return t(e,r);Vd=!0;try{return g0(t,e,r)}finally{Vd=!1,(wo!==null||bo!==null)&&(v0(),m0())}}function ua(t,e){var r=t.stateNode;if(r===null)return null;var n=ku(r);if(n===null)return null;r=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(U(231,e,typeof r));return r}var Qh=!1;if(Jr)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){Qh=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{Qh=!1}function bA(t,e,r,n,i,o,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(r,u)}catch(h){this.onError(h)}}var Ws=!1,Lc=null,Vc=!1,Yh=null,EA={onError:function(t){Ws=!0,Lc=t}};function xA(t,e,r,n,i,o,s,l,c){Ws=!1,Lc=null,bA.apply(EA,arguments)}function IA(t,e,r,n,i,o,s,l,c){if(xA.apply(this,arguments),Ws){if(Ws){var u=Lc;Ws=!1,Lc=null}else throw Error(U(198));Vc||(Vc=!0,Yh=u)}}function Fi(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function _0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zv(t){if(Fi(t)!==t)throw Error(U(188))}function TA(t){var e=t.alternate;if(!e){if(e=Fi(t),e===null)throw Error(U(188));return e!==t?null:t}for(var r=t,n=e;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return zv(i),t;if(o===n)return zv(i),e;o=o.sibling}throw Error(U(188))}if(r.return!==n.return)r=i,n=o;else{for(var s=!1,l=i.child;l;){if(l===r){s=!0,r=i,n=o;break}if(l===n){s=!0,n=i,r=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===r){s=!0,r=o,n=i;break}if(l===n){s=!0,n=o,r=i;break}l=l.sibling}if(!s)throw Error(U(189))}}if(r.alternate!==n)throw Error(U(190))}if(r.tag!==3)throw Error(U(188));return r.stateNode.current===r?t:e}function w0(t){return t=TA(t),t!==null?b0(t):null}function b0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=b0(t);if(e!==null)return e;t=t.sibling}return null}var E0=Kt.unstable_scheduleCallback,Bv=Kt.unstable_cancelCallback,AA=Kt.unstable_shouldYield,SA=Kt.unstable_requestPaint,ze=Kt.unstable_now,kA=Kt.unstable_getCurrentPriorityLevel,Mp=Kt.unstable_ImmediatePriority,x0=Kt.unstable_UserBlockingPriority,Mc=Kt.unstable_NormalPriority,CA=Kt.unstable_LowPriority,I0=Kt.unstable_IdlePriority,Iu=null,Ar=null;function RA(t){if(Ar&&typeof Ar.onCommitFiberRoot=="function")try{Ar.onCommitFiberRoot(Iu,t,void 0,(t.current.flags&128)===128)}catch{}}var vr=Math.clz32?Math.clz32:OA,PA=Math.log,NA=Math.LN2;function OA(t){return t>>>=0,t===0?32:31-(PA(t)/NA|0)|0}var Ml=64,$l=4194304;function Ms(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $c(t,e){var r=t.pendingLanes;if(r===0)return 0;var n=0,i=t.suspendedLanes,o=t.pingedLanes,s=r&268435455;if(s!==0){var l=s&~i;l!==0?n=Ms(l):(o&=s,o!==0&&(n=Ms(o)))}else s=r&~i,s!==0?n=Ms(s):o!==0&&(n=Ms(o));if(n===0)return 0;if(e!==0&&e!==n&&!(e&i)&&(i=n&-n,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(n&4&&(n|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)r=31-vr(e),i=1<<r,n|=t[r],e&=~i;return n}function DA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function LA(t,e){for(var r=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-vr(o),l=1<<s,c=i[s];c===-1?(!(l&r)||l&n)&&(i[s]=DA(l,e)):c<=e&&(t.expiredLanes|=l),o&=~l}}function Xh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function T0(){var t=Ml;return Ml<<=1,!(Ml&4194240)&&(Ml=64),t}function Md(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Ha(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vr(e),t[e]=r}function VA(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<r;){var i=31-vr(r),o=1<<i;e[i]=0,n[i]=-1,t[i]=-1,r&=~o}}function $p(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var n=31-vr(r),i=1<<n;i&e|t[n]&e&&(t[n]|=e),r&=~i}}var ve=0;function A0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var S0,Fp,k0,C0,R0,Jh=!1,Fl=[],Rn=null,Pn=null,Nn=null,da=new Map,ha=new Map,bn=[],MA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qv(t,e){switch(t){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(e.pointerId)}}function Ts(t,e,r,n,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Ka(e),e!==null&&Fp(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function $A(t,e,r,n,i){switch(e){case"focusin":return Rn=Ts(Rn,t,e,r,n,i),!0;case"dragenter":return Pn=Ts(Pn,t,e,r,n,i),!0;case"mouseover":return Nn=Ts(Nn,t,e,r,n,i),!0;case"pointerover":var o=i.pointerId;return da.set(o,Ts(da.get(o)||null,t,e,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,ha.set(o,Ts(ha.get(o)||null,t,e,r,n,i)),!0}return!1}function P0(t){var e=di(t.target);if(e!==null){var r=Fi(e);if(r!==null){if(e=r.tag,e===13){if(e=_0(r),e!==null){t.blockedOn=e,R0(t.priority,function(){k0(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Zh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.constructor(r.type,r);Kh=n,r.target.dispatchEvent(n),Kh=null}else return e=Ka(r),e!==null&&Fp(e),t.blockedOn=r,!1;e.shift()}return!0}function Hv(t,e,r){fc(t)&&r.delete(e)}function FA(){Jh=!1,Rn!==null&&fc(Rn)&&(Rn=null),Pn!==null&&fc(Pn)&&(Pn=null),Nn!==null&&fc(Nn)&&(Nn=null),da.forEach(Hv),ha.forEach(Hv)}function As(t,e){t.blockedOn===e&&(t.blockedOn=null,Jh||(Jh=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,FA)))}function fa(t){function e(i){return As(i,t)}if(0<Fl.length){As(Fl[0],t);for(var r=1;r<Fl.length;r++){var n=Fl[r];n.blockedOn===t&&(n.blockedOn=null)}}for(Rn!==null&&As(Rn,t),Pn!==null&&As(Pn,t),Nn!==null&&As(Nn,t),da.forEach(e),ha.forEach(e),r=0;r<bn.length;r++)n=bn[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<bn.length&&(r=bn[0],r.blockedOn===null);)P0(r),r.blockedOn===null&&bn.shift()}var Eo=ln.ReactCurrentBatchConfig,Fc=!0;function UA(t,e,r,n){var i=ve,o=Eo.transition;Eo.transition=null;try{ve=1,Up(t,e,r,n)}finally{ve=i,Eo.transition=o}}function jA(t,e,r,n){var i=ve,o=Eo.transition;Eo.transition=null;try{ve=4,Up(t,e,r,n)}finally{ve=i,Eo.transition=o}}function Up(t,e,r,n){if(Fc){var i=Zh(t,e,r,n);if(i===null)Kd(t,e,n,Uc,r),qv(t,n);else if($A(i,t,e,r,n))n.stopPropagation();else if(qv(t,n),e&4&&-1<MA.indexOf(t)){for(;i!==null;){var o=Ka(i);if(o!==null&&S0(o),o=Zh(t,e,r,n),o===null&&Kd(t,e,n,Uc,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else Kd(t,e,n,null,r)}}var Uc=null;function Zh(t,e,r,n){if(Uc=null,t=Vp(n),t=di(t),t!==null)if(e=Fi(t),e===null)t=null;else if(r=e.tag,r===13){if(t=_0(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Uc=t,null}function N0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kA()){case Mp:return 1;case x0:return 4;case Mc:case CA:return 16;case I0:return 536870912;default:return 16}default:return 16}}var Sn=null,jp=null,pc=null;function O0(){if(pc)return pc;var t,e=jp,r=e.length,n,i="value"in Sn?Sn.value:Sn.textContent,o=i.length;for(t=0;t<r&&e[t]===i[t];t++);var s=r-t;for(n=1;n<=s&&e[r-n]===i[o-n];n++);return pc=i.slice(t,1<n?1-n:void 0)}function mc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ul(){return!0}function Wv(){return!1}function Yt(t){function e(r,n,i,o,s){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(r=t[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ul:Wv,this.isPropagationStopped=Wv,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),e}var Go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zp=Yt(Go),Wa=Ne({},Go,{view:0,detail:0}),zA=Yt(Wa),$d,Fd,Ss,Tu=Ne({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ss&&(Ss&&t.type==="mousemove"?($d=t.screenX-Ss.screenX,Fd=t.screenY-Ss.screenY):Fd=$d=0,Ss=t),$d)},movementY:function(t){return"movementY"in t?t.movementY:Fd}}),Kv=Yt(Tu),BA=Ne({},Tu,{dataTransfer:0}),qA=Yt(BA),HA=Ne({},Wa,{relatedTarget:0}),Ud=Yt(HA),WA=Ne({},Go,{animationName:0,elapsedTime:0,pseudoElement:0}),KA=Yt(WA),GA=Ne({},Go,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),QA=Yt(GA),YA=Ne({},Go,{data:0}),Gv=Yt(YA),XA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},JA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ZA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ZA[t])?!!e[t]:!1}function Bp(){return eS}var tS=Ne({},Wa,{key:function(t){if(t.key){var e=XA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=mc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?JA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bp,charCode:function(t){return t.type==="keypress"?mc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?mc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rS=Yt(tS),nS=Ne({},Tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qv=Yt(nS),iS=Ne({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bp}),oS=Yt(iS),sS=Ne({},Go,{propertyName:0,elapsedTime:0,pseudoElement:0}),aS=Yt(sS),lS=Ne({},Tu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cS=Yt(lS),uS=[9,13,27,32],qp=Jr&&"CompositionEvent"in window,Ks=null;Jr&&"documentMode"in document&&(Ks=document.documentMode);var dS=Jr&&"TextEvent"in window&&!Ks,D0=Jr&&(!qp||Ks&&8<Ks&&11>=Ks),Yv=" ",Xv=!1;function L0(t,e){switch(t){case"keyup":return uS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function V0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var lo=!1;function hS(t,e){switch(t){case"compositionend":return V0(e);case"keypress":return e.which!==32?null:(Xv=!0,Yv);case"textInput":return t=e.data,t===Yv&&Xv?null:t;default:return null}}function fS(t,e){if(lo)return t==="compositionend"||!qp&&L0(t,e)?(t=O0(),pc=jp=Sn=null,lo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return D0&&e.locale!=="ko"?null:e.data;default:return null}}var pS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!pS[t.type]:e==="textarea"}function M0(t,e,r,n){p0(n),e=jc(e,"onChange"),0<e.length&&(r=new zp("onChange","change",null,r,n),t.push({event:r,listeners:e}))}var Gs=null,pa=null;function mS(t){G0(t,0)}function Au(t){var e=ho(t);if(a0(e))return t}function gS(t,e){if(t==="change")return e}var $0=!1;if(Jr){var jd;if(Jr){var zd="oninput"in document;if(!zd){var Zv=document.createElement("div");Zv.setAttribute("oninput","return;"),zd=typeof Zv.oninput=="function"}jd=zd}else jd=!1;$0=jd&&(!document.documentMode||9<document.documentMode)}function ey(){Gs&&(Gs.detachEvent("onpropertychange",F0),pa=Gs=null)}function F0(t){if(t.propertyName==="value"&&Au(pa)){var e=[];M0(e,pa,t,Vp(t)),y0(mS,e)}}function vS(t,e,r){t==="focusin"?(ey(),Gs=e,pa=r,Gs.attachEvent("onpropertychange",F0)):t==="focusout"&&ey()}function yS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Au(pa)}function _S(t,e){if(t==="click")return Au(e)}function wS(t,e){if(t==="input"||t==="change")return Au(e)}function bS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wr=typeof Object.is=="function"?Object.is:bS;function ma(t,e){if(wr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Lh.call(e,i)||!wr(t[i],e[i]))return!1}return!0}function ty(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ry(t,e){var r=ty(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=e&&n>=e)return{node:r,offset:e-t};t=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ty(r)}}function U0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?U0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function j0(){for(var t=window,e=Dc();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Dc(t.document)}return e}function Hp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ES(t){var e=j0(),r=t.focusedElem,n=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&U0(r.ownerDocument.documentElement,r)){if(n!==null&&Hp(r)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!t.extend&&o>n&&(i=n,n=o,o=i),i=ry(r,o);var s=ry(r,n);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>n?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xS=Jr&&"documentMode"in document&&11>=document.documentMode,co=null,ef=null,Qs=null,tf=!1;function ny(t,e,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;tf||co==null||co!==Dc(n)||(n=co,"selectionStart"in n&&Hp(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Qs&&ma(Qs,n)||(Qs=n,n=jc(ef,"onSelect"),0<n.length&&(e=new zp("onSelect","select",null,e,r),t.push({event:e,listeners:n}),e.target=co)))}function jl(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var uo={animationend:jl("Animation","AnimationEnd"),animationiteration:jl("Animation","AnimationIteration"),animationstart:jl("Animation","AnimationStart"),transitionend:jl("Transition","TransitionEnd")},Bd={},z0={};Jr&&(z0=document.createElement("div").style,"AnimationEvent"in window||(delete uo.animationend.animation,delete uo.animationiteration.animation,delete uo.animationstart.animation),"TransitionEvent"in window||delete uo.transitionend.transition);function Su(t){if(Bd[t])return Bd[t];if(!uo[t])return t;var e=uo[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in z0)return Bd[t]=e[r];return t}var B0=Su("animationend"),q0=Su("animationiteration"),H0=Su("animationstart"),W0=Su("transitionend"),K0=new Map,iy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wn(t,e){K0.set(t,e),$i(e,[t])}for(var qd=0;qd<iy.length;qd++){var Hd=iy[qd],IS=Hd.toLowerCase(),TS=Hd[0].toUpperCase()+Hd.slice(1);Wn(IS,"on"+TS)}Wn(B0,"onAnimationEnd");Wn(q0,"onAnimationIteration");Wn(H0,"onAnimationStart");Wn("dblclick","onDoubleClick");Wn("focusin","onFocus");Wn("focusout","onBlur");Wn(W0,"onTransitionEnd");Ro("onMouseEnter",["mouseout","mouseover"]);Ro("onMouseLeave",["mouseout","mouseover"]);Ro("onPointerEnter",["pointerout","pointerover"]);Ro("onPointerLeave",["pointerout","pointerover"]);$i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$i("onBeforeInput",["compositionend","keypress","textInput","paste"]);$i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AS=new Set("cancel close invalid load scroll toggle".split(" ").concat($s));function oy(t,e,r){var n=t.type||"unknown-event";t.currentTarget=r,IA(n,e,void 0,t),t.currentTarget=null}function G0(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],i=n.event;n=n.listeners;e:{var o=void 0;if(e)for(var s=n.length-1;0<=s;s--){var l=n[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;oy(i,l,u),o=c}else for(s=0;s<n.length;s++){if(l=n[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;oy(i,l,u),o=c}}}if(Vc)throw t=Yh,Vc=!1,Yh=null,t}function Te(t,e){var r=e[af];r===void 0&&(r=e[af]=new Set);var n=t+"__bubble";r.has(n)||(Q0(e,t,2,!1),r.add(n))}function Wd(t,e,r){var n=0;e&&(n|=4),Q0(r,t,n,e)}var zl="_reactListening"+Math.random().toString(36).slice(2);function ga(t){if(!t[zl]){t[zl]=!0,r0.forEach(function(r){r!=="selectionchange"&&(AS.has(r)||Wd(r,!1,t),Wd(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zl]||(e[zl]=!0,Wd("selectionchange",!1,e))}}function Q0(t,e,r,n){switch(N0(e)){case 1:var i=UA;break;case 4:i=jA;break;default:i=Up}r=i.bind(null,e,r,t),i=void 0,!Qh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,r,{capture:!0,passive:i}):t.addEventListener(e,r,!0):i!==void 0?t.addEventListener(e,r,{passive:i}):t.addEventListener(e,r,!1)}function Kd(t,e,r,n,i){var o=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=n.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=di(l),s===null)return;if(c=s.tag,c===5||c===6){n=o=s;continue e}l=l.parentNode}}n=n.return}y0(function(){var u=o,h=Vp(r),p=[];e:{var m=K0.get(t);if(m!==void 0){var b=zp,k=t;switch(t){case"keypress":if(mc(r)===0)break e;case"keydown":case"keyup":b=rS;break;case"focusin":k="focus",b=Ud;break;case"focusout":k="blur",b=Ud;break;case"beforeblur":case"afterblur":b=Ud;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Kv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=qA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=oS;break;case B0:case q0:case H0:b=KA;break;case W0:b=aS;break;case"scroll":b=zA;break;case"wheel":b=cS;break;case"copy":case"cut":case"paste":b=QA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Qv}var N=(e&4)!==0,D=!N&&t==="scroll",E=N?m!==null?m+"Capture":null:m;N=[];for(var y=u,T;y!==null;){T=y;var V=T.stateNode;if(T.tag===5&&V!==null&&(T=V,E!==null&&(V=ua(y,E),V!=null&&N.push(va(y,V,T)))),D)break;y=y.return}0<N.length&&(m=new b(m,k,null,r,h),p.push({event:m,listeners:N}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",m&&r!==Kh&&(k=r.relatedTarget||r.fromElement)&&(di(k)||k[Zr]))break e;if((b||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,b?(k=r.relatedTarget||r.toElement,b=u,k=k?di(k):null,k!==null&&(D=Fi(k),k!==D||k.tag!==5&&k.tag!==6)&&(k=null)):(b=null,k=u),b!==k)){if(N=Kv,V="onMouseLeave",E="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(N=Qv,V="onPointerLeave",E="onPointerEnter",y="pointer"),D=b==null?m:ho(b),T=k==null?m:ho(k),m=new N(V,y+"leave",b,r,h),m.target=D,m.relatedTarget=T,V=null,di(h)===u&&(N=new N(E,y+"enter",k,r,h),N.target=T,N.relatedTarget=D,V=N),D=V,b&&k)t:{for(N=b,E=k,y=0,T=N;T;T=Zi(T))y++;for(T=0,V=E;V;V=Zi(V))T++;for(;0<y-T;)N=Zi(N),y--;for(;0<T-y;)E=Zi(E),T--;for(;y--;){if(N===E||E!==null&&N===E.alternate)break t;N=Zi(N),E=Zi(E)}N=null}else N=null;b!==null&&sy(p,m,b,N,!1),k!==null&&D!==null&&sy(p,D,k,N,!0)}}e:{if(m=u?ho(u):window,b=m.nodeName&&m.nodeName.toLowerCase(),b==="select"||b==="input"&&m.type==="file")var j=gS;else if(Jv(m))if($0)j=wS;else{j=yS;var z=vS}else(b=m.nodeName)&&b.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=_S);if(j&&(j=j(t,u))){M0(p,j,r,h);break e}z&&z(t,m,u),t==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&zh(m,"number",m.value)}switch(z=u?ho(u):window,t){case"focusin":(Jv(z)||z.contentEditable==="true")&&(co=z,ef=u,Qs=null);break;case"focusout":Qs=ef=co=null;break;case"mousedown":tf=!0;break;case"contextmenu":case"mouseup":case"dragend":tf=!1,ny(p,r,h);break;case"selectionchange":if(xS)break;case"keydown":case"keyup":ny(p,r,h)}var w;if(qp)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else lo?L0(t,r)&&(v="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(v="onCompositionStart");v&&(D0&&r.locale!=="ko"&&(lo||v!=="onCompositionStart"?v==="onCompositionEnd"&&lo&&(w=O0()):(Sn=h,jp="value"in Sn?Sn.value:Sn.textContent,lo=!0)),z=jc(u,v),0<z.length&&(v=new Gv(v,t,null,r,h),p.push({event:v,listeners:z}),w?v.data=w:(w=V0(r),w!==null&&(v.data=w)))),(w=dS?hS(t,r):fS(t,r))&&(u=jc(u,"onBeforeInput"),0<u.length&&(h=new Gv("onBeforeInput","beforeinput",null,r,h),p.push({event:h,listeners:u}),h.data=w))}G0(p,e)})}function va(t,e,r){return{instance:t,listener:e,currentTarget:r}}function jc(t,e){for(var r=e+"Capture",n=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ua(t,r),o!=null&&n.unshift(va(t,o,i)),o=ua(t,e),o!=null&&n.push(va(t,o,i))),t=t.return}return n}function Zi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sy(t,e,r,n,i){for(var o=e._reactName,s=[];r!==null&&r!==n;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&u!==null&&(l=u,i?(c=ua(r,o),c!=null&&s.unshift(va(r,c,l))):i||(c=ua(r,o),c!=null&&s.push(va(r,c,l)))),r=r.return}s.length!==0&&t.push({event:e,listeners:s})}var SS=/\r\n?/g,kS=/\u0000|\uFFFD/g;function ay(t){return(typeof t=="string"?t:""+t).replace(SS,`
`).replace(kS,"")}function Bl(t,e,r){if(e=ay(e),ay(t)!==e&&r)throw Error(U(425))}function zc(){}var rf=null,nf=null;function of(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sf=typeof setTimeout=="function"?setTimeout:void 0,CS=typeof clearTimeout=="function"?clearTimeout:void 0,ly=typeof Promise=="function"?Promise:void 0,RS=typeof queueMicrotask=="function"?queueMicrotask:typeof ly<"u"?function(t){return ly.resolve(null).then(t).catch(PS)}:sf;function PS(t){setTimeout(function(){throw t})}function Gd(t,e){var r=e,n=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){t.removeChild(i),fa(e);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);fa(e)}function On(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var Qo=Math.random().toString(36).slice(2),Tr="__reactFiber$"+Qo,ya="__reactProps$"+Qo,Zr="__reactContainer$"+Qo,af="__reactEvents$"+Qo,NS="__reactListeners$"+Qo,OS="__reactHandles$"+Qo;function di(t){var e=t[Tr];if(e)return e;for(var r=t.parentNode;r;){if(e=r[Zr]||r[Tr]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=cy(t);t!==null;){if(r=t[Tr])return r;t=cy(t)}return e}t=r,r=t.parentNode}return null}function Ka(t){return t=t[Tr]||t[Zr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ho(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function ku(t){return t[ya]||null}var lf=[],fo=-1;function Kn(t){return{current:t}}function Se(t){0>fo||(t.current=lf[fo],lf[fo]=null,fo--)}function Ee(t,e){fo++,lf[fo]=t.current,t.current=e}var zn={},wt=Kn(zn),Mt=Kn(!1),Ti=zn;function Po(t,e){var r=t.type.contextTypes;if(!r)return zn;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=e[o];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $t(t){return t=t.childContextTypes,t!=null}function Bc(){Se(Mt),Se(wt)}function uy(t,e,r){if(wt.current!==zn)throw Error(U(168));Ee(wt,e),Ee(Mt,r)}function Y0(t,e,r){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in e))throw Error(U(108,vA(t)||"Unknown",i));return Ne({},r,n)}function qc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zn,Ti=wt.current,Ee(wt,t),Ee(Mt,Mt.current),!0}function dy(t,e,r){var n=t.stateNode;if(!n)throw Error(U(169));r?(t=Y0(t,e,Ti),n.__reactInternalMemoizedMergedChildContext=t,Se(Mt),Se(wt),Ee(wt,t)):Se(Mt),Ee(Mt,r)}var zr=null,Cu=!1,Qd=!1;function X0(t){zr===null?zr=[t]:zr.push(t)}function DS(t){Cu=!0,X0(t)}function Gn(){if(!Qd&&zr!==null){Qd=!0;var t=0,e=ve;try{var r=zr;for(ve=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}zr=null,Cu=!1}catch(i){throw zr!==null&&(zr=zr.slice(t+1)),E0(Mp,Gn),i}finally{ve=e,Qd=!1}}return null}var po=[],mo=0,Hc=null,Wc=0,Zt=[],er=0,Ai=null,qr=1,Hr="";function li(t,e){po[mo++]=Wc,po[mo++]=Hc,Hc=t,Wc=e}function J0(t,e,r){Zt[er++]=qr,Zt[er++]=Hr,Zt[er++]=Ai,Ai=t;var n=qr;t=Hr;var i=32-vr(n)-1;n&=~(1<<i),r+=1;var o=32-vr(e)+i;if(30<o){var s=i-i%5;o=(n&(1<<s)-1).toString(32),n>>=s,i-=s,qr=1<<32-vr(e)+i|r<<i|n,Hr=o+t}else qr=1<<o|r<<i|n,Hr=t}function Wp(t){t.return!==null&&(li(t,1),J0(t,1,0))}function Kp(t){for(;t===Hc;)Hc=po[--mo],po[mo]=null,Wc=po[--mo],po[mo]=null;for(;t===Ai;)Ai=Zt[--er],Zt[er]=null,Hr=Zt[--er],Zt[er]=null,qr=Zt[--er],Zt[er]=null}var Wt=null,qt=null,Ce=!1,mr=null;function Z0(t,e){var r=tr(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function hy(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,qt=On(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=Ai!==null?{id:qr,overflow:Hr}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=tr(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,Wt=t,qt=null,!0):!1;default:return!1}}function cf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uf(t){if(Ce){var e=qt;if(e){var r=e;if(!hy(t,e)){if(cf(t))throw Error(U(418));e=On(r.nextSibling);var n=Wt;e&&hy(t,e)?Z0(n,r):(t.flags=t.flags&-4097|2,Ce=!1,Wt=t)}}else{if(cf(t))throw Error(U(418));t.flags=t.flags&-4097|2,Ce=!1,Wt=t}}}function fy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function ql(t){if(t!==Wt)return!1;if(!Ce)return fy(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!of(t.type,t.memoizedProps)),e&&(e=qt)){if(cf(t))throw eb(),Error(U(418));for(;e;)Z0(t,e),e=On(e.nextSibling)}if(fy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){qt=On(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}qt=null}}else qt=Wt?On(t.stateNode.nextSibling):null;return!0}function eb(){for(var t=qt;t;)t=On(t.nextSibling)}function No(){qt=Wt=null,Ce=!1}function Gp(t){mr===null?mr=[t]:mr.push(t)}var LS=ln.ReactCurrentBatchConfig;function ks(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(U(309));var n=r.stateNode}if(!n)throw Error(U(147,t));var i=n,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(U(284));if(!r._owner)throw Error(U(290,t))}return t}function Hl(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function py(t){var e=t._init;return e(t._payload)}function tb(t){function e(E,y){if(t){var T=E.deletions;T===null?(E.deletions=[y],E.flags|=16):T.push(y)}}function r(E,y){if(!t)return null;for(;y!==null;)e(E,y),y=y.sibling;return null}function n(E,y){for(E=new Map;y!==null;)y.key!==null?E.set(y.key,y):E.set(y.index,y),y=y.sibling;return E}function i(E,y){return E=Mn(E,y),E.index=0,E.sibling=null,E}function o(E,y,T){return E.index=T,t?(T=E.alternate,T!==null?(T=T.index,T<y?(E.flags|=2,y):T):(E.flags|=2,y)):(E.flags|=1048576,y)}function s(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,y,T,V){return y===null||y.tag!==6?(y=rh(T,E.mode,V),y.return=E,y):(y=i(y,T),y.return=E,y)}function c(E,y,T,V){var j=T.type;return j===ao?h(E,y,T.props.children,V,T.key):y!==null&&(y.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===yn&&py(j)===y.type)?(V=i(y,T.props),V.ref=ks(E,y,T),V.return=E,V):(V=Ec(T.type,T.key,T.props,null,E.mode,V),V.ref=ks(E,y,T),V.return=E,V)}function u(E,y,T,V){return y===null||y.tag!==4||y.stateNode.containerInfo!==T.containerInfo||y.stateNode.implementation!==T.implementation?(y=nh(T,E.mode,V),y.return=E,y):(y=i(y,T.children||[]),y.return=E,y)}function h(E,y,T,V,j){return y===null||y.tag!==7?(y=wi(T,E.mode,V,j),y.return=E,y):(y=i(y,T),y.return=E,y)}function p(E,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return y=rh(""+y,E.mode,T),y.return=E,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Dl:return T=Ec(y.type,y.key,y.props,null,E.mode,T),T.ref=ks(E,null,y),T.return=E,T;case so:return y=nh(y,E.mode,T),y.return=E,y;case yn:var V=y._init;return p(E,V(y._payload),T)}if(Vs(y)||xs(y))return y=wi(y,E.mode,T,null),y.return=E,y;Hl(E,y)}return null}function m(E,y,T,V){var j=y!==null?y.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return j!==null?null:l(E,y,""+T,V);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Dl:return T.key===j?c(E,y,T,V):null;case so:return T.key===j?u(E,y,T,V):null;case yn:return j=T._init,m(E,y,j(T._payload),V)}if(Vs(T)||xs(T))return j!==null?null:h(E,y,T,V,null);Hl(E,T)}return null}function b(E,y,T,V,j){if(typeof V=="string"&&V!==""||typeof V=="number")return E=E.get(T)||null,l(y,E,""+V,j);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Dl:return E=E.get(V.key===null?T:V.key)||null,c(y,E,V,j);case so:return E=E.get(V.key===null?T:V.key)||null,u(y,E,V,j);case yn:var z=V._init;return b(E,y,T,z(V._payload),j)}if(Vs(V)||xs(V))return E=E.get(T)||null,h(y,E,V,j,null);Hl(y,V)}return null}function k(E,y,T,V){for(var j=null,z=null,w=y,v=y=0,_=null;w!==null&&v<T.length;v++){w.index>v?(_=w,w=null):_=w.sibling;var x=m(E,w,T[v],V);if(x===null){w===null&&(w=_);break}t&&w&&x.alternate===null&&e(E,w),y=o(x,y,v),z===null?j=x:z.sibling=x,z=x,w=_}if(v===T.length)return r(E,w),Ce&&li(E,v),j;if(w===null){for(;v<T.length;v++)w=p(E,T[v],V),w!==null&&(y=o(w,y,v),z===null?j=w:z.sibling=w,z=w);return Ce&&li(E,v),j}for(w=n(E,w);v<T.length;v++)_=b(w,E,v,T[v],V),_!==null&&(t&&_.alternate!==null&&w.delete(_.key===null?v:_.key),y=o(_,y,v),z===null?j=_:z.sibling=_,z=_);return t&&w.forEach(function(A){return e(E,A)}),Ce&&li(E,v),j}function N(E,y,T,V){var j=xs(T);if(typeof j!="function")throw Error(U(150));if(T=j.call(T),T==null)throw Error(U(151));for(var z=j=null,w=y,v=y=0,_=null,x=T.next();w!==null&&!x.done;v++,x=T.next()){w.index>v?(_=w,w=null):_=w.sibling;var A=m(E,w,x.value,V);if(A===null){w===null&&(w=_);break}t&&w&&A.alternate===null&&e(E,w),y=o(A,y,v),z===null?j=A:z.sibling=A,z=A,w=_}if(x.done)return r(E,w),Ce&&li(E,v),j;if(w===null){for(;!x.done;v++,x=T.next())x=p(E,x.value,V),x!==null&&(y=o(x,y,v),z===null?j=x:z.sibling=x,z=x);return Ce&&li(E,v),j}for(w=n(E,w);!x.done;v++,x=T.next())x=b(w,E,v,x.value,V),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?v:x.key),y=o(x,y,v),z===null?j=x:z.sibling=x,z=x);return t&&w.forEach(function(C){return e(E,C)}),Ce&&li(E,v),j}function D(E,y,T,V){if(typeof T=="object"&&T!==null&&T.type===ao&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Dl:e:{for(var j=T.key,z=y;z!==null;){if(z.key===j){if(j=T.type,j===ao){if(z.tag===7){r(E,z.sibling),y=i(z,T.props.children),y.return=E,E=y;break e}}else if(z.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===yn&&py(j)===z.type){r(E,z.sibling),y=i(z,T.props),y.ref=ks(E,z,T),y.return=E,E=y;break e}r(E,z);break}else e(E,z);z=z.sibling}T.type===ao?(y=wi(T.props.children,E.mode,V,T.key),y.return=E,E=y):(V=Ec(T.type,T.key,T.props,null,E.mode,V),V.ref=ks(E,y,T),V.return=E,E=V)}return s(E);case so:e:{for(z=T.key;y!==null;){if(y.key===z)if(y.tag===4&&y.stateNode.containerInfo===T.containerInfo&&y.stateNode.implementation===T.implementation){r(E,y.sibling),y=i(y,T.children||[]),y.return=E,E=y;break e}else{r(E,y);break}else e(E,y);y=y.sibling}y=nh(T,E.mode,V),y.return=E,E=y}return s(E);case yn:return z=T._init,D(E,y,z(T._payload),V)}if(Vs(T))return k(E,y,T,V);if(xs(T))return N(E,y,T,V);Hl(E,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,y!==null&&y.tag===6?(r(E,y.sibling),y=i(y,T),y.return=E,E=y):(r(E,y),y=rh(T,E.mode,V),y.return=E,E=y),s(E)):r(E,y)}return D}var Oo=tb(!0),rb=tb(!1),Kc=Kn(null),Gc=null,go=null,Qp=null;function Yp(){Qp=go=Gc=null}function Xp(t){var e=Kc.current;Se(Kc),t._currentValue=e}function df(t,e,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===r)break;t=t.return}}function xo(t,e){Gc=t,Qp=go=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Vt=!0),t.firstContext=null)}function sr(t){var e=t._currentValue;if(Qp!==t)if(t={context:t,memoizedValue:e,next:null},go===null){if(Gc===null)throw Error(U(308));go=t,Gc.dependencies={lanes:0,firstContext:t}}else go=go.next=t;return e}var hi=null;function Jp(t){hi===null?hi=[t]:hi.push(t)}function nb(t,e,r,n){var i=e.interleaved;return i===null?(r.next=r,Jp(e)):(r.next=i.next,i.next=r),e.interleaved=r,en(t,n)}function en(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var _n=!1;function Zp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ib(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Dn(t,e,r){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,de&2){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,en(t,r)}return i=n.interleaved,i===null?(e.next=e,Jp(n)):(e.next=i.next,i.next=e),n.interleaved=e,en(t,r)}function gc(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,$p(t,r)}}function my(t,e){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=s:o=o.next=s,r=r.next}while(r!==null);o===null?i=o=e:o=o.next=e}else i=o=e;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Qc(t,e,r,n){var i=t.updateQueue;_n=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==s&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=c))}if(o!==null){var p=i.baseState;s=0,h=u=c=null,l=o;do{var m=l.lane,b=l.eventTime;if((n&m)===m){h!==null&&(h=h.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,N=l;switch(m=e,b=r,N.tag){case 1:if(k=N.payload,typeof k=="function"){p=k.call(b,p,m);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=N.payload,m=typeof k=="function"?k.call(b,p,m):k,m==null)break e;p=Ne({},p,m);break e;case 2:_n=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else b={eventTime:b,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=b,c=p):h=h.next=b,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);ki|=s,t.lanes=s,t.memoizedState=p}}function gy(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(U(191,i));i.call(n)}}}var Ga={},Sr=Kn(Ga),_a=Kn(Ga),wa=Kn(Ga);function fi(t){if(t===Ga)throw Error(U(174));return t}function em(t,e){switch(Ee(wa,e),Ee(_a,t),Ee(Sr,Ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qh(e,t)}Se(Sr),Ee(Sr,e)}function Do(){Se(Sr),Se(_a),Se(wa)}function ob(t){fi(wa.current);var e=fi(Sr.current),r=qh(e,t.type);e!==r&&(Ee(_a,t),Ee(Sr,r))}function tm(t){_a.current===t&&(Se(Sr),Se(_a))}var Re=Kn(0);function Yc(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yd=[];function rm(){for(var t=0;t<Yd.length;t++)Yd[t]._workInProgressVersionPrimary=null;Yd.length=0}var vc=ln.ReactCurrentDispatcher,Xd=ln.ReactCurrentBatchConfig,Si=0,Pe=null,Ke=null,Je=null,Xc=!1,Ys=!1,ba=0,VS=0;function ht(){throw Error(U(321))}function nm(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!wr(t[r],e[r]))return!1;return!0}function im(t,e,r,n,i,o){if(Si=o,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vc.current=t===null||t.memoizedState===null?US:jS,t=r(n,i),Ys){o=0;do{if(Ys=!1,ba=0,25<=o)throw Error(U(301));o+=1,Je=Ke=null,e.updateQueue=null,vc.current=zS,t=r(n,i)}while(Ys)}if(vc.current=Jc,e=Ke!==null&&Ke.next!==null,Si=0,Je=Ke=Pe=null,Xc=!1,e)throw Error(U(300));return t}function om(){var t=ba!==0;return ba=0,t}function Ir(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Pe.memoizedState=Je=t:Je=Je.next=t,Je}function ar(){if(Ke===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var e=Je===null?Pe.memoizedState:Je.next;if(e!==null)Je=e,Ke=t;else{if(t===null)throw Error(U(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Je===null?Pe.memoizedState=Je=t:Je=Je.next=t}return Je}function Ea(t,e){return typeof e=="function"?e(t):e}function Jd(t){var e=ar(),r=e.queue;if(r===null)throw Error(U(311));r.lastRenderedReducer=t;var n=Ke,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var l=s=null,c=null,u=o;do{var h=u.lane;if((Si&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:t(n,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,s=n):c=c.next=p,Pe.lanes|=h,ki|=h}u=u.next}while(u!==null&&u!==o);c===null?s=n:c.next=l,wr(n,e.memoizedState)||(Vt=!0),e.memoizedState=n,e.baseState=s,e.baseQueue=c,r.lastRenderedState=n}if(t=r.interleaved,t!==null){i=t;do o=i.lane,Pe.lanes|=o,ki|=o,i=i.next;while(i!==t)}else i===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Zd(t){var e=ar(),r=e.queue;if(r===null)throw Error(U(311));r.lastRenderedReducer=t;var n=r.dispatch,i=r.pending,o=e.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);wr(o,e.memoizedState)||(Vt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),r.lastRenderedState=o}return[o,n]}function sb(){}function ab(t,e){var r=Pe,n=ar(),i=e(),o=!wr(n.memoizedState,i);if(o&&(n.memoizedState=i,Vt=!0),n=n.queue,sm(ub.bind(null,r,n,t),[t]),n.getSnapshot!==e||o||Je!==null&&Je.memoizedState.tag&1){if(r.flags|=2048,xa(9,cb.bind(null,r,n,i,e),void 0,null),Ze===null)throw Error(U(349));Si&30||lb(r,e,i)}return i}function lb(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function cb(t,e,r,n){e.value=r,e.getSnapshot=n,db(e)&&hb(t)}function ub(t,e,r){return r(function(){db(e)&&hb(t)})}function db(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!wr(t,r)}catch{return!0}}function hb(t){var e=en(t,1);e!==null&&yr(e,t,1,-1)}function vy(t){var e=Ir();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},e.queue=t,t=t.dispatch=FS.bind(null,Pe,t),[e.memoizedState,t]}function xa(t,e,r,n){return t={tag:t,create:e,destroy:r,deps:n,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,e.lastEffect=t)),t}function fb(){return ar().memoizedState}function yc(t,e,r,n){var i=Ir();Pe.flags|=t,i.memoizedState=xa(1|e,r,void 0,n===void 0?null:n)}function Ru(t,e,r,n){var i=ar();n=n===void 0?null:n;var o=void 0;if(Ke!==null){var s=Ke.memoizedState;if(o=s.destroy,n!==null&&nm(n,s.deps)){i.memoizedState=xa(e,r,o,n);return}}Pe.flags|=t,i.memoizedState=xa(1|e,r,o,n)}function yy(t,e){return yc(8390656,8,t,e)}function sm(t,e){return Ru(2048,8,t,e)}function pb(t,e){return Ru(4,2,t,e)}function mb(t,e){return Ru(4,4,t,e)}function gb(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function vb(t,e,r){return r=r!=null?r.concat([t]):null,Ru(4,4,gb.bind(null,e,t),r)}function am(){}function yb(t,e){var r=ar();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&nm(e,n[1])?n[0]:(r.memoizedState=[t,e],t)}function _b(t,e){var r=ar();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&nm(e,n[1])?n[0]:(t=t(),r.memoizedState=[t,e],t)}function wb(t,e,r){return Si&21?(wr(r,e)||(r=T0(),Pe.lanes|=r,ki|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Vt=!0),t.memoizedState=r)}function MS(t,e){var r=ve;ve=r!==0&&4>r?r:4,t(!0);var n=Xd.transition;Xd.transition={};try{t(!1),e()}finally{ve=r,Xd.transition=n}}function bb(){return ar().memoizedState}function $S(t,e,r){var n=Vn(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Eb(t))xb(e,r);else if(r=nb(t,e,r,n),r!==null){var i=St();yr(r,t,n,i),Ib(r,e,n)}}function FS(t,e,r){var n=Vn(t),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Eb(t))xb(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,r);if(i.hasEagerState=!0,i.eagerState=l,wr(l,s)){var c=e.interleaved;c===null?(i.next=i,Jp(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}r=nb(t,e,i,n),r!==null&&(i=St(),yr(r,t,n,i),Ib(r,e,n))}}function Eb(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function xb(t,e){Ys=Xc=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function Ib(t,e,r){if(r&4194240){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,$p(t,r)}}var Jc={readContext:sr,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useInsertionEffect:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useMutableSource:ht,useSyncExternalStore:ht,useId:ht,unstable_isNewReconciler:!1},US={readContext:sr,useCallback:function(t,e){return Ir().memoizedState=[t,e===void 0?null:e],t},useContext:sr,useEffect:yy,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,yc(4194308,4,gb.bind(null,e,t),r)},useLayoutEffect:function(t,e){return yc(4194308,4,t,e)},useInsertionEffect:function(t,e){return yc(4,2,t,e)},useMemo:function(t,e){var r=Ir();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var n=Ir();return e=r!==void 0?r(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=$S.bind(null,Pe,t),[n.memoizedState,t]},useRef:function(t){var e=Ir();return t={current:t},e.memoizedState=t},useState:vy,useDebugValue:am,useDeferredValue:function(t){return Ir().memoizedState=t},useTransition:function(){var t=vy(!1),e=t[0];return t=MS.bind(null,t[1]),Ir().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var n=Pe,i=Ir();if(Ce){if(r===void 0)throw Error(U(407));r=r()}else{if(r=e(),Ze===null)throw Error(U(349));Si&30||lb(n,e,r)}i.memoizedState=r;var o={value:r,getSnapshot:e};return i.queue=o,yy(ub.bind(null,n,o,t),[t]),n.flags|=2048,xa(9,cb.bind(null,n,o,r,e),void 0,null),r},useId:function(){var t=Ir(),e=Ze.identifierPrefix;if(Ce){var r=Hr,n=qr;r=(n&~(1<<32-vr(n)-1)).toString(32)+r,e=":"+e+"R"+r,r=ba++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=VS++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jS={readContext:sr,useCallback:yb,useContext:sr,useEffect:sm,useImperativeHandle:vb,useInsertionEffect:pb,useLayoutEffect:mb,useMemo:_b,useReducer:Jd,useRef:fb,useState:function(){return Jd(Ea)},useDebugValue:am,useDeferredValue:function(t){var e=ar();return wb(e,Ke.memoizedState,t)},useTransition:function(){var t=Jd(Ea)[0],e=ar().memoizedState;return[t,e]},useMutableSource:sb,useSyncExternalStore:ab,useId:bb,unstable_isNewReconciler:!1},zS={readContext:sr,useCallback:yb,useContext:sr,useEffect:sm,useImperativeHandle:vb,useInsertionEffect:pb,useLayoutEffect:mb,useMemo:_b,useReducer:Zd,useRef:fb,useState:function(){return Zd(Ea)},useDebugValue:am,useDeferredValue:function(t){var e=ar();return Ke===null?e.memoizedState=t:wb(e,Ke.memoizedState,t)},useTransition:function(){var t=Zd(Ea)[0],e=ar().memoizedState;return[t,e]},useMutableSource:sb,useSyncExternalStore:ab,useId:bb,unstable_isNewReconciler:!1};function fr(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function hf(t,e,r,n){e=t.memoizedState,r=r(n,e),r=r==null?e:Ne({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Pu={isMounted:function(t){return(t=t._reactInternals)?Fi(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var n=St(),i=Vn(t),o=Qr(n,i);o.payload=e,r!=null&&(o.callback=r),e=Dn(t,o,i),e!==null&&(yr(e,t,i,n),gc(e,t,i))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var n=St(),i=Vn(t),o=Qr(n,i);o.tag=1,o.payload=e,r!=null&&(o.callback=r),e=Dn(t,o,i),e!==null&&(yr(e,t,i,n),gc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=St(),n=Vn(t),i=Qr(r,n);i.tag=2,e!=null&&(i.callback=e),e=Dn(t,i,n),e!==null&&(yr(e,t,n,r),gc(e,t,n))}};function _y(t,e,r,n,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,o,s):e.prototype&&e.prototype.isPureReactComponent?!ma(r,n)||!ma(i,o):!0}function Tb(t,e,r){var n=!1,i=zn,o=e.contextType;return typeof o=="object"&&o!==null?o=sr(o):(i=$t(e)?Ti:wt.current,n=e.contextTypes,o=(n=n!=null)?Po(t,i):zn),e=new e(r,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pu,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function wy(t,e,r,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,n),e.state!==t&&Pu.enqueueReplaceState(e,e.state,null)}function ff(t,e,r,n){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs={},Zp(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=sr(o):(o=$t(e)?Ti:wt.current,i.context=Po(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(hf(t,e,o,r),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Pu.enqueueReplaceState(i,i.state,null),Qc(t,r,i,n),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Lo(t,e){try{var r="",n=e;do r+=gA(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function eh(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function pf(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var BS=typeof WeakMap=="function"?WeakMap:Map;function Ab(t,e,r){r=Qr(-1,r),r.tag=3,r.payload={element:null};var n=e.value;return r.callback=function(){eu||(eu=!0,If=n),pf(t,e)},r}function Sb(t,e,r){r=Qr(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=e.value;r.payload=function(){return n(i)},r.callback=function(){pf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){pf(t,e),typeof n!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),r}function by(t,e,r){var n=t.pingCache;if(n===null){n=t.pingCache=new BS;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(r)||(i.add(r),t=nk.bind(null,t,e,r),e.then(t,t))}function Ey(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xy(t,e,r,n,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Qr(-1,1),e.tag=2,Dn(r,e,1))),r.lanes|=1),t)}var qS=ln.ReactCurrentOwner,Vt=!1;function At(t,e,r,n){e.child=t===null?rb(e,null,r,n):Oo(e,t.child,r,n)}function Iy(t,e,r,n,i){r=r.render;var o=e.ref;return xo(e,i),n=im(t,e,r,n,o,i),r=om(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tn(t,e,i)):(Ce&&r&&Wp(e),e.flags|=1,At(t,e,n,i),e.child)}function Ty(t,e,r,n,i){if(t===null){var o=r.type;return typeof o=="function"&&!mm(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=o,kb(t,e,o,n,i)):(t=Ec(r.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(r=r.compare,r=r!==null?r:ma,r(s,n)&&t.ref===e.ref)return tn(t,e,i)}return e.flags|=1,t=Mn(o,n),t.ref=e.ref,t.return=e,e.child=t}function kb(t,e,r,n,i){if(t!==null){var o=t.memoizedProps;if(ma(o,n)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=n=o,(t.lanes&i)!==0)t.flags&131072&&(Vt=!0);else return e.lanes=t.lanes,tn(t,e,i)}return mf(t,e,r,n,i)}function Cb(t,e,r){var n=e.pendingProps,i=n.children,o=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(yo,Bt),Bt|=r;else{if(!(r&1073741824))return t=o!==null?o.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(yo,Bt),Bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,Ee(yo,Bt),Bt|=n}else o!==null?(n=o.baseLanes|r,e.memoizedState=null):n=r,Ee(yo,Bt),Bt|=n;return At(t,e,i,r),e.child}function Rb(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function mf(t,e,r,n,i){var o=$t(r)?Ti:wt.current;return o=Po(e,o),xo(e,i),r=im(t,e,r,n,o,i),n=om(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tn(t,e,i)):(Ce&&n&&Wp(e),e.flags|=1,At(t,e,r,i),e.child)}function Ay(t,e,r,n,i){if($t(r)){var o=!0;qc(e)}else o=!1;if(xo(e,i),e.stateNode===null)_c(t,e),Tb(e,r,n),ff(e,r,n,i),n=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var c=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=sr(u):(u=$t(r)?Ti:wt.current,u=Po(e,u));var h=r.getDerivedStateFromProps,p=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==n||c!==u)&&wy(e,s,n,u),_n=!1;var m=e.memoizedState;s.state=m,Qc(e,n,s,i),c=e.memoizedState,l!==n||m!==c||Mt.current||_n?(typeof h=="function"&&(hf(e,r,h,n),c=e.memoizedState),(l=_n||_y(e,r,l,n,m,c,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=c),s.props=n,s.state=c,s.context=u,n=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{s=e.stateNode,ib(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:fr(e.type,l),s.props=u,p=e.pendingProps,m=s.context,c=r.contextType,typeof c=="object"&&c!==null?c=sr(c):(c=$t(r)?Ti:wt.current,c=Po(e,c));var b=r.getDerivedStateFromProps;(h=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||m!==c)&&wy(e,s,n,c),_n=!1,m=e.memoizedState,s.state=m,Qc(e,n,s,i);var k=e.memoizedState;l!==p||m!==k||Mt.current||_n?(typeof b=="function"&&(hf(e,r,b,n),k=e.memoizedState),(u=_n||_y(e,r,u,n,m,k,c)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,k,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,k,c)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=k),s.props=n,s.state=k,s.context=c,n=u):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),n=!1)}return gf(t,e,r,n,o,i)}function gf(t,e,r,n,i,o){Rb(t,e);var s=(e.flags&128)!==0;if(!n&&!s)return i&&dy(e,r,!1),tn(t,e,o);n=e.stateNode,qS.current=e;var l=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&s?(e.child=Oo(e,t.child,null,o),e.child=Oo(e,null,l,o)):At(t,e,l,o),e.memoizedState=n.state,i&&dy(e,r,!0),e.child}function Pb(t){var e=t.stateNode;e.pendingContext?uy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&uy(t,e.context,!1),em(t,e.containerInfo)}function Sy(t,e,r,n,i){return No(),Gp(i),e.flags|=256,At(t,e,r,n),e.child}var vf={dehydrated:null,treeContext:null,retryLane:0};function yf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Nb(t,e,r){var n=e.pendingProps,i=Re.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ee(Re,i&1),t===null)return uf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=n.children,t=n.fallback,o?(n=e.mode,o=e.child,s={mode:"hidden",children:s},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Du(s,n,0,null),t=wi(t,n,r,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=yf(r),e.memoizedState=vf,t):lm(e,s));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return HS(t,e,s,n,l,i,r);if(o){o=n.fallback,s=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:n.children};return!(s&1)&&e.child!==i?(n=e.child,n.childLanes=0,n.pendingProps=c,e.deletions=null):(n=Mn(i,c),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Mn(l,o):(o=wi(o,s,r,null),o.flags|=2),o.return=e,n.return=e,n.sibling=o,e.child=n,n=o,o=e.child,s=t.child.memoizedState,s=s===null?yf(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~r,e.memoizedState=vf,n}return o=t.child,t=o.sibling,n=Mn(o,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n}function lm(t,e){return e=Du({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wl(t,e,r,n){return n!==null&&Gp(n),Oo(e,t.child,null,r),t=lm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function HS(t,e,r,n,i,o,s){if(r)return e.flags&256?(e.flags&=-257,n=eh(Error(U(422))),Wl(t,e,s,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=n.fallback,i=e.mode,n=Du({mode:"visible",children:n.children},i,0,null),o=wi(o,i,s,null),o.flags|=2,n.return=e,o.return=e,n.sibling=o,e.child=n,e.mode&1&&Oo(e,t.child,null,s),e.child.memoizedState=yf(s),e.memoizedState=vf,o);if(!(e.mode&1))return Wl(t,e,s,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(U(419)),n=eh(o,n,void 0),Wl(t,e,s,n)}if(l=(s&t.childLanes)!==0,Vt||l){if(n=Ze,n!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,en(t,i),yr(n,t,i,-1))}return pm(),n=eh(Error(U(421))),Wl(t,e,s,n)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ik.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,qt=On(i.nextSibling),Wt=e,Ce=!0,mr=null,t!==null&&(Zt[er++]=qr,Zt[er++]=Hr,Zt[er++]=Ai,qr=t.id,Hr=t.overflow,Ai=e),e=lm(e,n.children),e.flags|=4096,e)}function ky(t,e,r){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),df(t.return,e,r)}function th(t,e,r,n,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function Ob(t,e,r){var n=e.pendingProps,i=n.revealOrder,o=n.tail;if(At(t,e,n.children,r),n=Re.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ky(t,r,e);else if(t.tag===19)ky(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(Ee(Re,n),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(r=e.child,i=null;r!==null;)t=r.alternate,t!==null&&Yc(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=e.child,e.child=null):(i=r.sibling,r.sibling=null),th(e,!1,i,r,o);break;case"backwards":for(r=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Yc(t)===null){e.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}th(e,!0,r,null,o);break;case"together":th(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _c(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tn(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),ki|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,r=Mn(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=Mn(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function WS(t,e,r){switch(e.tag){case 3:Pb(e),No();break;case 5:ob(e);break;case 1:$t(e.type)&&qc(e);break;case 4:em(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,i=e.memoizedProps.value;Ee(Kc,n._currentValue),n._currentValue=i;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(Ee(Re,Re.current&1),e.flags|=128,null):r&e.child.childLanes?Nb(t,e,r):(Ee(Re,Re.current&1),t=tn(t,e,r),t!==null?t.sibling:null);Ee(Re,Re.current&1);break;case 19:if(n=(r&e.childLanes)!==0,t.flags&128){if(n)return Ob(t,e,r);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(Re,Re.current),n)break;return null;case 22:case 23:return e.lanes=0,Cb(t,e,r)}return tn(t,e,r)}var Db,_f,Lb,Vb;Db=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};_f=function(){};Lb=function(t,e,r,n){var i=t.memoizedProps;if(i!==n){t=e.stateNode,fi(Sr.current);var o=null;switch(r){case"input":i=Uh(t,i),n=Uh(t,n),o=[];break;case"select":i=Ne({},i,{value:void 0}),n=Ne({},n,{value:void 0}),o=[];break;case"textarea":i=Bh(t,i),n=Bh(t,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=zc)}Hh(r,n);var s;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(la.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var c=n[u];if(l=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(r||(r={}),r[s]=c[s])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(la.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Te("scroll",t),o||l===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Vb=function(t,e,r,n){r!==n&&(e.flags|=4)};function Cs(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,n=0;if(e)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=r,e}function KS(t,e,r){var n=e.pendingProps;switch(Kp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return $t(e.type)&&Bc(),ft(e),null;case 3:return n=e.stateNode,Do(),Se(Mt),Se(wt),rm(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(ql(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mr!==null&&(Sf(mr),mr=null))),_f(t,e),ft(e),null;case 5:tm(e);var i=fi(wa.current);if(r=e.type,t!==null&&e.stateNode!=null)Lb(t,e,r,n,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(U(166));return ft(e),null}if(t=fi(Sr.current),ql(e)){n=e.stateNode,r=e.type;var o=e.memoizedProps;switch(n[Tr]=e,n[ya]=o,t=(e.mode&1)!==0,r){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(i=0;i<$s.length;i++)Te($s[i],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":Mv(n,o),Te("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},Te("invalid",n);break;case"textarea":Fv(n,o),Te("invalid",n)}Hh(r,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&Bl(n.textContent,l,t),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Bl(n.textContent,l,t),i=["children",""+l]):la.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Te("scroll",n)}switch(r){case"input":Ll(n),$v(n,o,!0);break;case"textarea":Ll(n),Uv(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=zc)}n=i,e.updateQueue=n,n!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=u0(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=s.createElement(r,{is:n.is}):(t=s.createElement(r),r==="select"&&(s=t,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):t=s.createElementNS(t,r),t[Tr]=e,t[ya]=n,Db(t,e,!1,!1),e.stateNode=t;e:{switch(s=Wh(r,n),r){case"dialog":Te("cancel",t),Te("close",t),i=n;break;case"iframe":case"object":case"embed":Te("load",t),i=n;break;case"video":case"audio":for(i=0;i<$s.length;i++)Te($s[i],t);i=n;break;case"source":Te("error",t),i=n;break;case"img":case"image":case"link":Te("error",t),Te("load",t),i=n;break;case"details":Te("toggle",t),i=n;break;case"input":Mv(t,n),i=Uh(t,n),Te("invalid",t);break;case"option":i=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},i=Ne({},n,{value:void 0}),Te("invalid",t);break;case"textarea":Fv(t,n),i=Bh(t,n),Te("invalid",t);break;default:i=n}Hh(r,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?f0(t,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&d0(t,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&ca(t,c):typeof c=="number"&&ca(t,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(la.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Te("scroll",t):c!=null&&Np(t,o,c,s))}switch(r){case"input":Ll(t),$v(t,n,!1);break;case"textarea":Ll(t),Uv(t);break;case"option":n.value!=null&&t.setAttribute("value",""+jn(n.value));break;case"select":t.multiple=!!n.multiple,o=n.value,o!=null?_o(t,!!n.multiple,o,!1):n.defaultValue!=null&&_o(t,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=zc)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ft(e),null;case 6:if(t&&e.stateNode!=null)Vb(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(U(166));if(r=fi(wa.current),fi(Sr.current),ql(e)){if(n=e.stateNode,r=e.memoizedProps,n[Tr]=e,(o=n.nodeValue!==r)&&(t=Wt,t!==null))switch(t.tag){case 3:Bl(n.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bl(n.nodeValue,r,(t.mode&1)!==0)}o&&(e.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Tr]=e,e.stateNode=n}return ft(e),null;case 13:if(Se(Re),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&qt!==null&&e.mode&1&&!(e.flags&128))eb(),No(),e.flags|=98560,o=!1;else if(o=ql(e),n!==null&&n.dehydrated!==null){if(t===null){if(!o)throw Error(U(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(U(317));o[Tr]=e}else No(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ft(e),o=!1}else mr!==null&&(Sf(mr),mr=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?Ge===0&&(Ge=3):pm())),e.updateQueue!==null&&(e.flags|=4),ft(e),null);case 4:return Do(),_f(t,e),t===null&&ga(e.stateNode.containerInfo),ft(e),null;case 10:return Xp(e.type._context),ft(e),null;case 17:return $t(e.type)&&Bc(),ft(e),null;case 19:if(Se(Re),o=e.memoizedState,o===null)return ft(e),null;if(n=(e.flags&128)!==0,s=o.rendering,s===null)if(n)Cs(o,!1);else{if(Ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Yc(t),s!==null){for(e.flags|=128,Cs(o,!1),n=s.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=r,r=e.child;r!==null;)o=r,t=n,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return Ee(Re,Re.current&1|2),e.child}t=t.sibling}o.tail!==null&&ze()>Vo&&(e.flags|=128,n=!0,Cs(o,!1),e.lanes=4194304)}else{if(!n)if(t=Yc(s),t!==null){if(e.flags|=128,n=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Cs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ce)return ft(e),null}else 2*ze()-o.renderingStartTime>Vo&&r!==1073741824&&(e.flags|=128,n=!0,Cs(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(r=o.last,r!==null?r.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ze(),e.sibling=null,r=Re.current,Ee(Re,n?r&1|2:r&1),e):(ft(e),null);case 22:case 23:return fm(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?Bt&1073741824&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function GS(t,e){switch(Kp(e),e.tag){case 1:return $t(e.type)&&Bc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Do(),Se(Mt),Se(wt),rm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return tm(e),null;case 13:if(Se(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));No()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(Re),null;case 4:return Do(),null;case 10:return Xp(e.type._context),null;case 22:case 23:return fm(),null;case 24:return null;default:return null}}var Kl=!1,vt=!1,QS=typeof WeakSet=="function"?WeakSet:Set,G=null;function vo(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Ve(t,e,n)}else r.current=null}function wf(t,e,r){try{r()}catch(n){Ve(t,e,n)}}var Cy=!1;function YS(t,e){if(rf=Fc,t=j0(),Hp(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var s=0,l=-1,c=-1,u=0,h=0,p=t,m=null;t:for(;;){for(var b;p!==r||i!==0&&p.nodeType!==3||(l=s+i),p!==o||n!==0&&p.nodeType!==3||(c=s+n),p.nodeType===3&&(s+=p.nodeValue.length),(b=p.firstChild)!==null;)m=p,p=b;for(;;){if(p===t)break t;if(m===r&&++u===i&&(l=s),m===o&&++h===n&&(c=s),(b=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=b}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(nf={focusedElem:t,selectionRange:r},Fc=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var N=k.memoizedProps,D=k.memoizedState,E=e.stateNode,y=E.getSnapshotBeforeUpdate(e.elementType===e.type?N:fr(e.type,N),D);E.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(V){Ve(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return k=Cy,Cy=!1,k}function Xs(t,e,r){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&wf(e,r,o)}i=i.next}while(i!==n)}}function Nu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==e)}}function bf(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Mb(t){var e=t.alternate;e!==null&&(t.alternate=null,Mb(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tr],delete e[ya],delete e[af],delete e[NS],delete e[OS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $b(t){return t.tag===5||t.tag===3||t.tag===4}function Ry(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$b(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ef(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=zc));else if(n!==4&&(t=t.child,t!==null))for(Ef(t,e,r),t=t.sibling;t!==null;)Ef(t,e,r),t=t.sibling}function xf(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(xf(t,e,r),t=t.sibling;t!==null;)xf(t,e,r),t=t.sibling}var tt=null,pr=!1;function gn(t,e,r){for(r=r.child;r!==null;)Fb(t,e,r),r=r.sibling}function Fb(t,e,r){if(Ar&&typeof Ar.onCommitFiberUnmount=="function")try{Ar.onCommitFiberUnmount(Iu,r)}catch{}switch(r.tag){case 5:vt||vo(r,e);case 6:var n=tt,i=pr;tt=null,gn(t,e,r),tt=n,pr=i,tt!==null&&(pr?(t=tt,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):tt.removeChild(r.stateNode));break;case 18:tt!==null&&(pr?(t=tt,r=r.stateNode,t.nodeType===8?Gd(t.parentNode,r):t.nodeType===1&&Gd(t,r),fa(t)):Gd(tt,r.stateNode));break;case 4:n=tt,i=pr,tt=r.stateNode.containerInfo,pr=!0,gn(t,e,r),tt=n,pr=i;break;case 0:case 11:case 14:case 15:if(!vt&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&wf(r,e,s),i=i.next}while(i!==n)}gn(t,e,r);break;case 1:if(!vt&&(vo(r,e),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){Ve(r,e,l)}gn(t,e,r);break;case 21:gn(t,e,r);break;case 22:r.mode&1?(vt=(n=vt)||r.memoizedState!==null,gn(t,e,r),vt=n):gn(t,e,r);break;default:gn(t,e,r)}}function Py(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new QS),e.forEach(function(n){var i=ok.bind(null,t,n);r.has(n)||(r.add(n),n.then(i,i))})}}function hr(t,e){var r=e.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:tt=l.stateNode,pr=!1;break e;case 3:tt=l.stateNode.containerInfo,pr=!0;break e;case 4:tt=l.stateNode.containerInfo,pr=!0;break e}l=l.return}if(tt===null)throw Error(U(160));Fb(o,s,i),tt=null,pr=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ub(e,t),e=e.sibling}function Ub(t,e){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(hr(e,t),xr(t),n&4){try{Xs(3,t,t.return),Nu(3,t)}catch(N){Ve(t,t.return,N)}try{Xs(5,t,t.return)}catch(N){Ve(t,t.return,N)}}break;case 1:hr(e,t),xr(t),n&512&&r!==null&&vo(r,r.return);break;case 5:if(hr(e,t),xr(t),n&512&&r!==null&&vo(r,r.return),t.flags&32){var i=t.stateNode;try{ca(i,"")}catch(N){Ve(t,t.return,N)}}if(n&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=r!==null?r.memoizedProps:o,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&l0(i,o),Wh(l,s);var u=Wh(l,o);for(s=0;s<c.length;s+=2){var h=c[s],p=c[s+1];h==="style"?f0(i,p):h==="dangerouslySetInnerHTML"?d0(i,p):h==="children"?ca(i,p):Np(i,h,p,u)}switch(l){case"input":jh(i,o);break;case"textarea":c0(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var b=o.value;b!=null?_o(i,!!o.multiple,b,!1):m!==!!o.multiple&&(o.defaultValue!=null?_o(i,!!o.multiple,o.defaultValue,!0):_o(i,!!o.multiple,o.multiple?[]:"",!1))}i[ya]=o}catch(N){Ve(t,t.return,N)}}break;case 6:if(hr(e,t),xr(t),n&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(N){Ve(t,t.return,N)}}break;case 3:if(hr(e,t),xr(t),n&4&&r!==null&&r.memoizedState.isDehydrated)try{fa(e.containerInfo)}catch(N){Ve(t,t.return,N)}break;case 4:hr(e,t),xr(t);break;case 13:hr(e,t),xr(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(dm=ze())),n&4&&Py(t);break;case 22:if(h=r!==null&&r.memoizedState!==null,t.mode&1?(vt=(u=vt)||h,hr(e,t),vt=u):hr(e,t),xr(t),n&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(G=t,h=t.child;h!==null;){for(p=G=h;G!==null;){switch(m=G,b=m.child,m.tag){case 0:case 11:case 14:case 15:Xs(4,m,m.return);break;case 1:vo(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){n=m,r=m.return;try{e=n,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(N){Ve(n,r,N)}}break;case 5:vo(m,m.return);break;case 22:if(m.memoizedState!==null){Oy(p);continue}}b!==null?(b.return=m,G=b):Oy(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=h0("display",s))}catch(N){Ve(t,t.return,N)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(N){Ve(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:hr(e,t),xr(t),n&4&&Py(t);break;case 21:break;default:hr(e,t),xr(t)}}function xr(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if($b(r)){var n=r;break e}r=r.return}throw Error(U(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(ca(i,""),n.flags&=-33);var o=Ry(t);xf(t,o,i);break;case 3:case 4:var s=n.stateNode.containerInfo,l=Ry(t);Ef(t,l,s);break;default:throw Error(U(161))}}catch(c){Ve(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function XS(t,e,r){G=t,jb(t)}function jb(t,e,r){for(var n=(t.mode&1)!==0;G!==null;){var i=G,o=i.child;if(i.tag===22&&n){var s=i.memoizedState!==null||Kl;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||vt;l=Kl;var u=vt;if(Kl=s,(vt=c)&&!u)for(G=i;G!==null;)s=G,c=s.child,s.tag===22&&s.memoizedState!==null?Dy(i):c!==null?(c.return=s,G=c):Dy(i);for(;o!==null;)G=o,jb(o),o=o.sibling;G=i,Kl=l,vt=u}Ny(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,G=o):Ny(t)}}function Ny(t){for(;G!==null;){var e=G;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vt||Nu(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!vt)if(r===null)n.componentDidMount();else{var i=e.elementType===e.type?r.memoizedProps:fr(e.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&gy(e,o,n);break;case 3:var s=e.updateQueue;if(s!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}gy(e,s,r)}break;case 5:var l=e.stateNode;if(r===null&&e.flags&4){r=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&fa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}vt||e.flags&512&&bf(e)}catch(m){Ve(e,e.return,m)}}if(e===t){G=null;break}if(r=e.sibling,r!==null){r.return=e.return,G=r;break}G=e.return}}function Oy(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var r=e.sibling;if(r!==null){r.return=e.return,G=r;break}G=e.return}}function Dy(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{Nu(4,e)}catch(c){Ve(e,r,c)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var i=e.return;try{n.componentDidMount()}catch(c){Ve(e,i,c)}}var o=e.return;try{bf(e)}catch(c){Ve(e,o,c)}break;case 5:var s=e.return;try{bf(e)}catch(c){Ve(e,s,c)}}}catch(c){Ve(e,e.return,c)}if(e===t){G=null;break}var l=e.sibling;if(l!==null){l.return=e.return,G=l;break}G=e.return}}var JS=Math.ceil,Zc=ln.ReactCurrentDispatcher,cm=ln.ReactCurrentOwner,nr=ln.ReactCurrentBatchConfig,de=0,Ze=null,He=null,ot=0,Bt=0,yo=Kn(0),Ge=0,Ia=null,ki=0,Ou=0,um=0,Js=null,Dt=null,dm=0,Vo=1/0,Ur=null,eu=!1,If=null,Ln=null,Gl=!1,kn=null,tu=0,Zs=0,Tf=null,wc=-1,bc=0;function St(){return de&6?ze():wc!==-1?wc:wc=ze()}function Vn(t){return t.mode&1?de&2&&ot!==0?ot&-ot:LS.transition!==null?(bc===0&&(bc=T0()),bc):(t=ve,t!==0||(t=window.event,t=t===void 0?16:N0(t.type)),t):1}function yr(t,e,r,n){if(50<Zs)throw Zs=0,Tf=null,Error(U(185));Ha(t,r,n),(!(de&2)||t!==Ze)&&(t===Ze&&(!(de&2)&&(Ou|=r),Ge===4&&En(t,ot)),Ft(t,n),r===1&&de===0&&!(e.mode&1)&&(Vo=ze()+500,Cu&&Gn()))}function Ft(t,e){var r=t.callbackNode;LA(t,e);var n=$c(t,t===Ze?ot:0);if(n===0)r!==null&&Bv(r),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(r!=null&&Bv(r),e===1)t.tag===0?DS(Ly.bind(null,t)):X0(Ly.bind(null,t)),RS(function(){!(de&6)&&Gn()}),r=null;else{switch(A0(n)){case 1:r=Mp;break;case 4:r=x0;break;case 16:r=Mc;break;case 536870912:r=I0;break;default:r=Mc}r=Qb(r,zb.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function zb(t,e){if(wc=-1,bc=0,de&6)throw Error(U(327));var r=t.callbackNode;if(Io()&&t.callbackNode!==r)return null;var n=$c(t,t===Ze?ot:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=ru(t,n);else{e=n;var i=de;de|=2;var o=qb();(Ze!==t||ot!==e)&&(Ur=null,Vo=ze()+500,_i(t,e));do try{tk();break}catch(l){Bb(t,l)}while(!0);Yp(),Zc.current=o,de=i,He!==null?e=0:(Ze=null,ot=0,e=Ge)}if(e!==0){if(e===2&&(i=Xh(t),i!==0&&(n=i,e=Af(t,i))),e===1)throw r=Ia,_i(t,0),En(t,n),Ft(t,ze()),r;if(e===6)En(t,n);else{if(i=t.current.alternate,!(n&30)&&!ZS(i)&&(e=ru(t,n),e===2&&(o=Xh(t),o!==0&&(n=o,e=Af(t,o))),e===1))throw r=Ia,_i(t,0),En(t,n),Ft(t,ze()),r;switch(t.finishedWork=i,t.finishedLanes=n,e){case 0:case 1:throw Error(U(345));case 2:ci(t,Dt,Ur);break;case 3:if(En(t,n),(n&130023424)===n&&(e=dm+500-ze(),10<e)){if($c(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){St(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=sf(ci.bind(null,t,Dt,Ur),e);break}ci(t,Dt,Ur);break;case 4:if(En(t,n),(n&4194240)===n)break;for(e=t.eventTimes,i=-1;0<n;){var s=31-vr(n);o=1<<s,s=e[s],s>i&&(i=s),n&=~o}if(n=i,n=ze()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*JS(n/1960))-n,10<n){t.timeoutHandle=sf(ci.bind(null,t,Dt,Ur),n);break}ci(t,Dt,Ur);break;case 5:ci(t,Dt,Ur);break;default:throw Error(U(329))}}}return Ft(t,ze()),t.callbackNode===r?zb.bind(null,t):null}function Af(t,e){var r=Js;return t.current.memoizedState.isDehydrated&&(_i(t,e).flags|=256),t=ru(t,e),t!==2&&(e=Dt,Dt=r,e!==null&&Sf(e)),t}function Sf(t){Dt===null?Dt=t:Dt.push.apply(Dt,t)}function ZS(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!wr(o(),i))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function En(t,e){for(e&=~um,e&=~Ou,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-vr(e),n=1<<r;t[r]=-1,e&=~n}}function Ly(t){if(de&6)throw Error(U(327));Io();var e=$c(t,0);if(!(e&1))return Ft(t,ze()),null;var r=ru(t,e);if(t.tag!==0&&r===2){var n=Xh(t);n!==0&&(e=n,r=Af(t,n))}if(r===1)throw r=Ia,_i(t,0),En(t,e),Ft(t,ze()),r;if(r===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ci(t,Dt,Ur),Ft(t,ze()),null}function hm(t,e){var r=de;de|=1;try{return t(e)}finally{de=r,de===0&&(Vo=ze()+500,Cu&&Gn())}}function Ci(t){kn!==null&&kn.tag===0&&!(de&6)&&Io();var e=de;de|=1;var r=nr.transition,n=ve;try{if(nr.transition=null,ve=1,t)return t()}finally{ve=n,nr.transition=r,de=e,!(de&6)&&Gn()}}function fm(){Bt=yo.current,Se(yo)}function _i(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,CS(r)),He!==null)for(r=He.return;r!==null;){var n=r;switch(Kp(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Bc();break;case 3:Do(),Se(Mt),Se(wt),rm();break;case 5:tm(n);break;case 4:Do();break;case 13:Se(Re);break;case 19:Se(Re);break;case 10:Xp(n.type._context);break;case 22:case 23:fm()}r=r.return}if(Ze=t,He=t=Mn(t.current,null),ot=Bt=e,Ge=0,Ia=null,um=Ou=ki=0,Dt=Js=null,hi!==null){for(e=0;e<hi.length;e++)if(r=hi[e],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var s=o.next;o.next=i,n.next=s}r.pending=n}hi=null}return t}function Bb(t,e){do{var r=He;try{if(Yp(),vc.current=Jc,Xc){for(var n=Pe.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Xc=!1}if(Si=0,Je=Ke=Pe=null,Ys=!1,ba=0,cm.current=null,r===null||r.return===null){Ge=1,Ia=e,He=null;break}e:{var o=t,s=r.return,l=r,c=e;if(e=ot,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=l,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var b=Ey(s);if(b!==null){b.flags&=-257,xy(b,s,l,o,e),b.mode&1&&by(o,u,e),e=b,c=u;var k=e.updateQueue;if(k===null){var N=new Set;N.add(c),e.updateQueue=N}else k.add(c);break e}else{if(!(e&1)){by(o,u,e),pm();break e}c=Error(U(426))}}else if(Ce&&l.mode&1){var D=Ey(s);if(D!==null){!(D.flags&65536)&&(D.flags|=256),xy(D,s,l,o,e),Gp(Lo(c,l));break e}}o=c=Lo(c,l),Ge!==4&&(Ge=2),Js===null?Js=[o]:Js.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var E=Ab(o,c,e);my(o,E);break e;case 1:l=c;var y=o.type,T=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Ln===null||!Ln.has(T)))){o.flags|=65536,e&=-e,o.lanes|=e;var V=Sb(o,l,e);my(o,V);break e}}o=o.return}while(o!==null)}Wb(r)}catch(j){e=j,He===r&&r!==null&&(He=r=r.return);continue}break}while(!0)}function qb(){var t=Zc.current;return Zc.current=Jc,t===null?Jc:t}function pm(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Ze===null||!(ki&268435455)&&!(Ou&268435455)||En(Ze,ot)}function ru(t,e){var r=de;de|=2;var n=qb();(Ze!==t||ot!==e)&&(Ur=null,_i(t,e));do try{ek();break}catch(i){Bb(t,i)}while(!0);if(Yp(),de=r,Zc.current=n,He!==null)throw Error(U(261));return Ze=null,ot=0,Ge}function ek(){for(;He!==null;)Hb(He)}function tk(){for(;He!==null&&!AA();)Hb(He)}function Hb(t){var e=Gb(t.alternate,t,Bt);t.memoizedProps=t.pendingProps,e===null?Wb(t):He=e,cm.current=null}function Wb(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=GS(r,e),r!==null){r.flags&=32767,He=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,He=null;return}}else if(r=KS(r,e,Bt),r!==null){He=r;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Ge===0&&(Ge=5)}function ci(t,e,r){var n=ve,i=nr.transition;try{nr.transition=null,ve=1,rk(t,e,r,n)}finally{nr.transition=i,ve=n}return null}function rk(t,e,r,n){do Io();while(kn!==null);if(de&6)throw Error(U(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var o=r.lanes|r.childLanes;if(VA(t,o),t===Ze&&(He=Ze=null,ot=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Gl||(Gl=!0,Qb(Mc,function(){return Io(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=nr.transition,nr.transition=null;var s=ve;ve=1;var l=de;de|=4,cm.current=null,YS(t,r),Ub(r,t),ES(nf),Fc=!!rf,nf=rf=null,t.current=r,XS(r),SA(),de=l,ve=s,nr.transition=o}else t.current=r;if(Gl&&(Gl=!1,kn=t,tu=i),o=t.pendingLanes,o===0&&(Ln=null),RA(r.stateNode),Ft(t,ze()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)i=e[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(eu)throw eu=!1,t=If,If=null,t;return tu&1&&t.tag!==0&&Io(),o=t.pendingLanes,o&1?t===Tf?Zs++:(Zs=0,Tf=t):Zs=0,Gn(),null}function Io(){if(kn!==null){var t=A0(tu),e=nr.transition,r=ve;try{if(nr.transition=null,ve=16>t?16:t,kn===null)var n=!1;else{if(t=kn,kn=null,tu=0,de&6)throw Error(U(331));var i=de;for(de|=4,G=t.current;G!==null;){var o=G,s=o.child;if(G.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(G=u;G!==null;){var h=G;switch(h.tag){case 0:case 11:case 15:Xs(8,h,o)}var p=h.child;if(p!==null)p.return=h,G=p;else for(;G!==null;){h=G;var m=h.sibling,b=h.return;if(Mb(h),h===u){G=null;break}if(m!==null){m.return=b,G=m;break}G=b}}}var k=o.alternate;if(k!==null){var N=k.child;if(N!==null){k.child=null;do{var D=N.sibling;N.sibling=null,N=D}while(N!==null)}}G=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,G=s;else e:for(;G!==null;){if(o=G,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Xs(9,o,o.return)}var E=o.sibling;if(E!==null){E.return=o.return,G=E;break e}G=o.return}}var y=t.current;for(G=y;G!==null;){s=G;var T=s.child;if(s.subtreeFlags&2064&&T!==null)T.return=s,G=T;else e:for(s=y;G!==null;){if(l=G,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Nu(9,l)}}catch(j){Ve(l,l.return,j)}if(l===s){G=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,G=V;break e}G=l.return}}if(de=i,Gn(),Ar&&typeof Ar.onPostCommitFiberRoot=="function")try{Ar.onPostCommitFiberRoot(Iu,t)}catch{}n=!0}return n}finally{ve=r,nr.transition=e}}return!1}function Vy(t,e,r){e=Lo(r,e),e=Ab(t,e,1),t=Dn(t,e,1),e=St(),t!==null&&(Ha(t,1,e),Ft(t,e))}function Ve(t,e,r){if(t.tag===3)Vy(t,t,r);else for(;e!==null;){if(e.tag===3){Vy(e,t,r);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ln===null||!Ln.has(n))){t=Lo(r,t),t=Sb(e,t,1),e=Dn(e,t,1),t=St(),e!==null&&(Ha(e,1,t),Ft(e,t));break}}e=e.return}}function nk(t,e,r){var n=t.pingCache;n!==null&&n.delete(e),e=St(),t.pingedLanes|=t.suspendedLanes&r,Ze===t&&(ot&r)===r&&(Ge===4||Ge===3&&(ot&130023424)===ot&&500>ze()-dm?_i(t,0):um|=r),Ft(t,e)}function Kb(t,e){e===0&&(t.mode&1?(e=$l,$l<<=1,!($l&130023424)&&($l=4194304)):e=1);var r=St();t=en(t,e),t!==null&&(Ha(t,e,r),Ft(t,r))}function ik(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Kb(t,r)}function ok(t,e){var r=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(U(314))}n!==null&&n.delete(e),Kb(t,r)}var Gb;Gb=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mt.current)Vt=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return Vt=!1,WS(t,e,r);Vt=!!(t.flags&131072)}else Vt=!1,Ce&&e.flags&1048576&&J0(e,Wc,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;_c(t,e),t=e.pendingProps;var i=Po(e,wt.current);xo(e,r),i=im(null,e,n,t,i,r);var o=om();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$t(n)?(o=!0,qc(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zp(e),i.updater=Pu,e.stateNode=i,i._reactInternals=e,ff(e,n,t,r),e=gf(null,e,n,!0,o,r)):(e.tag=0,Ce&&o&&Wp(e),At(null,e,i,r),e=e.child),e;case 16:n=e.elementType;e:{switch(_c(t,e),t=e.pendingProps,i=n._init,n=i(n._payload),e.type=n,i=e.tag=ak(n),t=fr(n,t),i){case 0:e=mf(null,e,n,t,r);break e;case 1:e=Ay(null,e,n,t,r);break e;case 11:e=Iy(null,e,n,t,r);break e;case 14:e=Ty(null,e,n,fr(n.type,t),r);break e}throw Error(U(306,n,""))}return e;case 0:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:fr(n,i),mf(t,e,n,i,r);case 1:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:fr(n,i),Ay(t,e,n,i,r);case 3:e:{if(Pb(e),t===null)throw Error(U(387));n=e.pendingProps,o=e.memoizedState,i=o.element,ib(t,e),Qc(e,n,null,r);var s=e.memoizedState;if(n=s.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Lo(Error(U(423)),e),e=Sy(t,e,n,r,i);break e}else if(n!==i){i=Lo(Error(U(424)),e),e=Sy(t,e,n,r,i);break e}else for(qt=On(e.stateNode.containerInfo.firstChild),Wt=e,Ce=!0,mr=null,r=rb(e,null,n,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(No(),n===i){e=tn(t,e,r);break e}At(t,e,n,r)}e=e.child}return e;case 5:return ob(e),t===null&&uf(e),n=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,of(n,i)?s=null:o!==null&&of(n,o)&&(e.flags|=32),Rb(t,e),At(t,e,s,r),e.child;case 6:return t===null&&uf(e),null;case 13:return Nb(t,e,r);case 4:return em(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Oo(e,null,n,r):At(t,e,n,r),e.child;case 11:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:fr(n,i),Iy(t,e,n,i,r);case 7:return At(t,e,e.pendingProps,r),e.child;case 8:return At(t,e,e.pendingProps.children,r),e.child;case 12:return At(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(n=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Ee(Kc,n._currentValue),n._currentValue=s,o!==null)if(wr(o.value,s)){if(o.children===i.children&&!Mt.current){e=tn(t,e,r);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(o.tag===1){c=Qr(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),df(o.return,r,e),l.lanes|=r;break}c=c.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(U(341));s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),df(s,r,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}At(t,e,i.children,r),e=e.child}return e;case 9:return i=e.type,n=e.pendingProps.children,xo(e,r),i=sr(i),n=n(i),e.flags|=1,At(t,e,n,r),e.child;case 14:return n=e.type,i=fr(n,e.pendingProps),i=fr(n.type,i),Ty(t,e,n,i,r);case 15:return kb(t,e,e.type,e.pendingProps,r);case 17:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:fr(n,i),_c(t,e),e.tag=1,$t(n)?(t=!0,qc(e)):t=!1,xo(e,r),Tb(e,n,i),ff(e,n,i,r),gf(null,e,n,!0,t,r);case 19:return Ob(t,e,r);case 22:return Cb(t,e,r)}throw Error(U(156,e.tag))};function Qb(t,e){return E0(t,e)}function sk(t,e,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tr(t,e,r,n){return new sk(t,e,r,n)}function mm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ak(t){if(typeof t=="function")return mm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Dp)return 11;if(t===Lp)return 14}return 2}function Mn(t,e){var r=t.alternate;return r===null?(r=tr(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Ec(t,e,r,n,i,o){var s=2;if(n=t,typeof t=="function")mm(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case ao:return wi(r.children,i,o,e);case Op:s=8,i|=8;break;case Vh:return t=tr(12,r,e,i|2),t.elementType=Vh,t.lanes=o,t;case Mh:return t=tr(13,r,e,i),t.elementType=Mh,t.lanes=o,t;case $h:return t=tr(19,r,e,i),t.elementType=$h,t.lanes=o,t;case o0:return Du(r,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case n0:s=10;break e;case i0:s=9;break e;case Dp:s=11;break e;case Lp:s=14;break e;case yn:s=16,n=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=tr(s,r,e,i),e.elementType=t,e.type=n,e.lanes=o,e}function wi(t,e,r,n){return t=tr(7,t,n,e),t.lanes=r,t}function Du(t,e,r,n){return t=tr(22,t,n,e),t.elementType=o0,t.lanes=r,t.stateNode={isHidden:!1},t}function rh(t,e,r){return t=tr(6,t,null,e),t.lanes=r,t}function nh(t,e,r){return e=tr(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function lk(t,e,r,n,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Md(0),this.expirationTimes=Md(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Md(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gm(t,e,r,n,i,o,s,l,c){return t=new lk(t,e,r,l,c),e===1?(e=1,o===!0&&(e|=8)):e=0,o=tr(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zp(o),t}function ck(t,e,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:so,key:n==null?null:""+n,children:t,containerInfo:e,implementation:r}}function Yb(t){if(!t)return zn;t=t._reactInternals;e:{if(Fi(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var r=t.type;if($t(r))return Y0(t,r,e)}return e}function Xb(t,e,r,n,i,o,s,l,c){return t=gm(r,n,!0,t,i,o,s,l,c),t.context=Yb(null),r=t.current,n=St(),i=Vn(r),o=Qr(n,i),o.callback=e??null,Dn(r,o,i),t.current.lanes=i,Ha(t,i,n),Ft(t,n),t}function Lu(t,e,r,n){var i=e.current,o=St(),s=Vn(i);return r=Yb(r),e.context===null?e.context=r:e.pendingContext=r,e=Qr(o,s),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=Dn(i,e,s),t!==null&&(yr(t,i,s,o),gc(t,i,s)),s}function nu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function My(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function vm(t,e){My(t,e),(t=t.alternate)&&My(t,e)}function uk(){return null}var Jb=typeof reportError=="function"?reportError:function(t){console.error(t)};function ym(t){this._internalRoot=t}Vu.prototype.render=ym.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Lu(t,e,null,null)};Vu.prototype.unmount=ym.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ci(function(){Lu(null,t,null,null)}),e[Zr]=null}};function Vu(t){this._internalRoot=t}Vu.prototype.unstable_scheduleHydration=function(t){if(t){var e=C0();t={blockedOn:null,target:t,priority:e};for(var r=0;r<bn.length&&e!==0&&e<bn[r].priority;r++);bn.splice(r,0,t),r===0&&P0(t)}};function _m(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $y(){}function dk(t,e,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var u=nu(s);o.call(u)}}var s=Xb(e,n,t,0,null,!1,!1,"",$y);return t._reactRootContainer=s,t[Zr]=s.current,ga(t.nodeType===8?t.parentNode:t),Ci(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var u=nu(c);l.call(u)}}var c=gm(t,0,!1,null,null,!1,!1,"",$y);return t._reactRootContainer=c,t[Zr]=c.current,ga(t.nodeType===8?t.parentNode:t),Ci(function(){Lu(e,c,r,n)}),c}function $u(t,e,r,n,i){var o=r._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=nu(s);l.call(c)}}Lu(e,s,t,i)}else s=dk(r,e,t,i,n);return nu(s)}S0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Ms(e.pendingLanes);r!==0&&($p(e,r|1),Ft(e,ze()),!(de&6)&&(Vo=ze()+500,Gn()))}break;case 13:Ci(function(){var n=en(t,1);if(n!==null){var i=St();yr(n,t,1,i)}}),vm(t,1)}};Fp=function(t){if(t.tag===13){var e=en(t,134217728);if(e!==null){var r=St();yr(e,t,134217728,r)}vm(t,134217728)}};k0=function(t){if(t.tag===13){var e=Vn(t),r=en(t,e);if(r!==null){var n=St();yr(r,t,e,n)}vm(t,e)}};C0=function(){return ve};R0=function(t,e){var r=ve;try{return ve=t,e()}finally{ve=r}};Gh=function(t,e,r){switch(e){case"input":if(jh(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var n=r[e];if(n!==t&&n.form===t.form){var i=ku(n);if(!i)throw Error(U(90));a0(n),jh(n,i)}}}break;case"textarea":c0(t,r);break;case"select":e=r.value,e!=null&&_o(t,!!r.multiple,e,!1)}};g0=hm;v0=Ci;var hk={usingClientEntryPoint:!1,Events:[Ka,ho,ku,p0,m0,hm]},Rs={findFiberByHostInstance:di,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fk={bundleType:Rs.bundleType,version:Rs.version,rendererPackageName:Rs.rendererPackageName,rendererConfig:Rs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=w0(t),t===null?null:t.stateNode},findFiberByHostInstance:Rs.findFiberByHostInstance||uk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Iu=Ql.inject(fk),Ar=Ql}catch{}}Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hk;Qt.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_m(e))throw Error(U(200));return ck(t,e,null,r)};Qt.createRoot=function(t,e){if(!_m(t))throw Error(U(299));var r=!1,n="",i=Jb;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=gm(t,1,!1,null,null,r,!1,n,i),t[Zr]=e.current,ga(t.nodeType===8?t.parentNode:t),new ym(e)};Qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=w0(e),t=t===null?null:t.stateNode,t};Qt.flushSync=function(t){return Ci(t)};Qt.hydrate=function(t,e,r){if(!Mu(e))throw Error(U(200));return $u(null,t,e,!0,r)};Qt.hydrateRoot=function(t,e,r){if(!_m(t))throw Error(U(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",s=Jb;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),e=Xb(e,null,t,1,r??null,i,!1,o,s),t[Zr]=e.current,ga(t),n)for(t=0;t<n.length;t++)r=n[t],i=r._getVersion,i=i(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,i]:e.mutableSourceEagerHydrationData.push(r,i);return new Vu(e)};Qt.render=function(t,e,r){if(!Mu(e))throw Error(U(200));return $u(null,t,e,!1,r)};Qt.unmountComponentAtNode=function(t){if(!Mu(t))throw Error(U(40));return t._reactRootContainer?(Ci(function(){$u(null,null,t,!1,function(){t._reactRootContainer=null,t[Zr]=null})}),!0):!1};Qt.unstable_batchedUpdates=hm;Qt.unstable_renderSubtreeIntoContainer=function(t,e,r,n){if(!Mu(r))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return $u(t,e,r,!1,n)};Qt.version="18.3.1-next-f1338f8080-20240426";function Zb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zb)}catch(t){console.error(t)}}Zb(),Zw.exports=Qt;var pk=Zw.exports,eE,Fy=pk;eE=Fy.createRoot,Fy.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ta(){return Ta=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Ta.apply(this,arguments)}var pi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(pi||(pi={}));const Uy="popstate";function mk(t){t===void 0&&(t={});function e(i,o){let{pathname:s="/",search:l="",hash:c=""}=Qa(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),kf("",{pathname:s,search:l,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(i,o){let s=i.document.querySelector("base"),l="";if(s&&s.getAttribute("href")){let c=i.location.href,u=c.indexOf("#");l=u===-1?c:c.slice(0,u)}return l+"#"+(typeof o=="string"?o:rE(o))}function n(i,o){tE(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return vk(e,r,n,t)}function kr(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function tE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gk(){return Math.random().toString(36).substr(2,8)}function jy(t,e){return{usr:t.state,key:t.key,idx:e}}function kf(t,e,r,n){return r===void 0&&(r=null),Ta({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Qa(e):e,{state:r,key:e&&e.key||n||gk()})}function rE(t){let{pathname:e="/",search:r="",hash:n=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Qa(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function vk(t,e,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:o=!1}=n,s=i.history,l=pi.Pop,c=null,u=h();u==null&&(u=0,s.replaceState(Ta({},s.state,{idx:u}),""));function h(){return(s.state||{idx:null}).idx}function p(){l=pi.Pop;let D=h(),E=D==null?null:D-u;u=D,c&&c({action:l,location:N.location,delta:E})}function m(D,E){l=pi.Push;let y=kf(N.location,D,E);r&&r(y,D),u=h()+1;let T=jy(y,u),V=N.createHref(y);try{s.pushState(T,"",V)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(V)}o&&c&&c({action:l,location:N.location,delta:1})}function b(D,E){l=pi.Replace;let y=kf(N.location,D,E);r&&r(y,D),u=h();let T=jy(y,u),V=N.createHref(y);s.replaceState(T,"",V),o&&c&&c({action:l,location:N.location,delta:0})}function k(D){let E=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof D=="string"?D:rE(D);return y=y.replace(/ $/,"%20"),kr(E,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,E)}let N={get action(){return l},get location(){return t(i,s)},listen(D){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Uy,p),c=D,()=>{i.removeEventListener(Uy,p),c=null}},createHref(D){return e(i,D)},createURL:k,encodeLocation(D){let E=k(D);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:m,replace:b,go(D){return s.go(D)}};return N}var zy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(zy||(zy={}));function yk(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,n=t.charAt(r);return n&&n!=="/"?null:t.slice(r)||"/"}const _k=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wk=t=>_k.test(t);function bk(t,e){e===void 0&&(e="/");let{pathname:r,search:n="",hash:i=""}=typeof t=="string"?Qa(t):t,o;if(r)if(wk(r))o=r;else{if(r.includes("//")){let s=r;r=r.replace(/\/\/+/g,"/"),tE(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+r))}r.startsWith("/")?o=By(r.substring(1),"/"):o=By(r,e)}else o=e;return{pathname:o,search:Ak(n),hash:Sk(i)}}function By(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function ih(t,e,r,n){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ek(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function xk(t,e){let r=Ek(t);return e?r.map((n,i)=>i===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Ik(t,e,r,n){n===void 0&&(n=!1);let i;typeof t=="string"?i=Qa(t):(i=Ta({},t),kr(!i.pathname||!i.pathname.includes("?"),ih("?","pathname","search",i)),kr(!i.pathname||!i.pathname.includes("#"),ih("#","pathname","hash",i)),kr(!i.search||!i.search.includes("#"),ih("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=r;else{let p=e.length-1;if(!n&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let c=bk(i,l),u=s&&s!=="/"&&s.endsWith("/"),h=(o||s===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||h)&&(c.pathname+="/"),c}const Tk=t=>t.join("/").replace(/\/\/+/g,"/"),Ak=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Sk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,nE=["post","put","patch","delete"];new Set(nE);const kk=["get",...nE];new Set(kk);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function iu(){return iu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},iu.apply(this,arguments)}const iE=W.createContext(null),wm=W.createContext(null),bm=W.createContext(null),Em=W.createContext({outlet:null,matches:[],isDataRoute:!1});function xm(){return W.useContext(bm)!=null}function oE(){return xm()||kr(!1),W.useContext(bm).location}function sE(t){W.useContext(wm).static||W.useLayoutEffect(t)}function Ck(){let{isDataRoute:t}=W.useContext(Em);return t?Dk():Rk()}function Rk(){xm()||kr(!1);let t=W.useContext(iE),{basename:e,future:r,navigator:n}=W.useContext(wm),{matches:i}=W.useContext(Em),{pathname:o}=oE(),s=JSON.stringify(xk(i,r.v7_relativeSplatPath)),l=W.useRef(!1);return sE(()=>{l.current=!0}),W.useCallback(function(u,h){if(h===void 0&&(h={}),!l.current)return;if(typeof u=="number"){n.go(u);return}let p=Ik(u,JSON.parse(s),o,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Tk([e,p.pathname])),(h.replace?n.replace:n.push)(p,h.state,h)},[e,n,s,o,t])}var aE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(aE||{}),lE=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(lE||{});function Pk(t){let e=W.useContext(iE);return e||kr(!1),e}function Nk(t){let e=W.useContext(Em);return e||kr(!1),e}function Ok(t){let e=Nk(),r=e.matches[e.matches.length-1];return r.route.id||kr(!1),r.route.id}function Dk(){let{router:t}=Pk(aE.UseNavigateStable),e=Ok(lE.UseNavigateStable),r=W.useRef(!1);return sE(()=>{r.current=!0}),W.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,iu({fromRouteId:e},o)))},[t,e])}function Lk(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Vk(t){let{basename:e="/",children:r=null,location:n,navigationType:i=pi.Pop,navigator:o,static:s=!1,future:l}=t;xm()&&kr(!1);let c=e.replace(/^\/*/,"/"),u=W.useMemo(()=>({basename:c,navigator:o,static:s,future:iu({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof n=="string"&&(n=Qa(n));let{pathname:h="/",search:p="",hash:m="",state:b=null,key:k="default"}=n,N=W.useMemo(()=>{let D=yk(h,c);return D==null?null:{location:{pathname:D,search:p,hash:m,state:b,key:k},navigationType:i}},[c,h,p,m,b,k,i]);return N==null?null:W.createElement(wm.Provider,{value:u},W.createElement(bm.Provider,{children:r,value:N}))}new Promise(()=>{});/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cf(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,r)=>{let n=t[r];return e.concat(Array.isArray(n)?n.map(i=>[r,i]):[[r,n]])},[]))}function Mk(t,e){let r=Cf(t);return e&&e.forEach((n,i)=>{r.has(i)||e.getAll(i).forEach(o=>{r.append(i,o)})}),r}const $k="6";try{window.__reactRouterVersion=$k}catch{}const Fk="startTransition",qy=nA[Fk];function Uk(t){let{basename:e,children:r,future:n,window:i}=t,o=W.useRef();o.current==null&&(o.current=mk({window:i,v5Compat:!0}));let s=o.current,[l,c]=W.useState({action:s.action,location:s.location}),{v7_startTransition:u}=n||{},h=W.useCallback(p=>{u&&qy?qy(()=>c(p)):c(p)},[c,u]);return W.useLayoutEffect(()=>s.listen(h),[s,h]),W.useEffect(()=>Lk(n),[n]),W.createElement(Vk,{basename:e,children:r,location:l.location,navigationType:l.action,navigator:s,future:n})}var Hy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Hy||(Hy={}));var Wy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Wy||(Wy={}));function jk(t){let e=W.useRef(Cf(t)),r=W.useRef(!1),n=oE(),i=W.useMemo(()=>Mk(n.search,r.current?null:e.current),[n.search]),o=Ck(),s=W.useCallback((l,c)=>{const u=Cf(typeof l=="function"?l(i):l);r.current=!0,o("?"+u,c)},[o,i]);return[i,s]}var Ky={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},zk=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[r++];e[n++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[r++],s=t[r++],l=t[r++],c=((i&7)<<18|(o&63)<<12|(s&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const o=t[r++],s=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},uE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,l=s?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,h=o>>2,p=(o&3)<<4|l>>4;let m=(l&15)<<2|u>>6,b=u&63;c||(b=64,s||(m=64)),n.push(r[h],r[p],r[m],r[b])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const o=r[t.charAt(i++)],l=i<t.length?r[t.charAt(i)]:0;++i;const u=i<t.length?r[t.charAt(i)]:64;++i;const p=i<t.length?r[t.charAt(i)]:64;if(++i,o==null||l==null||u==null||p==null)throw new Bk;const m=o<<2|l>>4;if(n.push(m),u!==64){const b=l<<4&240|u>>2;if(n.push(b),p!==64){const k=u<<6&192|p;n.push(k)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Bk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qk=function(t){const e=cE(t);return uE.encodeByteArray(e,!0)},ou=function(t){return qk(t).replace(/\./g,"")},dE=function(t){try{return uE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Hk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Wk=()=>Hk().__FIREBASE_DEFAULTS__,Kk=()=>{if(typeof process>"u"||typeof Ky>"u")return;const t=Ky.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Gk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dE(t[1]);return e&&JSON.parse(e)},Fu=()=>{try{return Wk()||Kk()||Gk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hE=t=>{var e,r;return(r=(e=Fu())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},Qk=t=>{const e=hE(t);if(!e)return;const r=e.lastIndexOf(":");if(r<=0||r+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(r+1),10);return e[0]==="["?[e.substring(1,r-1),n]:[e.substring(0,r),n]},fE=()=>{var t;return(t=Fu())===null||t===void 0?void 0:t.config},pE=t=>{var e;return(e=Fu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,n))}}}/**
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
 */function Xk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},n=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ou(JSON.stringify(r)),ou(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function Zk(){var t;const e=(t=Fu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nC(){const t=bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iC(){return!Zk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mE(){try{return typeof indexedDB=="object"}catch{return!1}}function gE(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(r){e(r)}})}function oC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC="FirebaseError";class Lr extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=sC,Object.setPrototypeOf(this,Lr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ui.prototype.create)}}class Ui{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?aC(o,n):"Error",l=`${this.serviceName}: ${s} (${i}).`;return new Lr(i,l,n)}}function aC(t,e){return t.replace(lC,(r,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const lC=/\{\$([^}]+)}/g;function cC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Aa(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const i of r){if(!n.includes(i))return!1;const o=t[i],s=e[i];if(Gy(o)&&Gy(s)){if(!Aa(o,s))return!1}else if(o!==s)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function Gy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Fs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,o]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Us(t){const e=t.indexOf("?");if(!e)return"";const r=t.indexOf("#",e);return t.substring(e,r>0?r:void 0)}function uC(t,e){const r=new dC(t,e);return r.subscribe.bind(r)}class dC{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,n){let i;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");hC(e,["next","error","complete"])?i=e:i={next:e,error:r,complete:n},i.next===void 0&&(i.next=oh),i.error===void 0&&(i.error=oh),i.complete===void 0&&(i.complete=oh);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hC(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function oh(){}/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}class br{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ui="[DEFAULT]";/**
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
 */class fC{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const n=new Yk;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mC(e))try{this.getOrInitializeService({instanceIdentifier:ui})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);try{const o=this.getOrInitializeService({instanceIdentifier:i});n.resolve(o)}catch{}}}}clearInstance(e=ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ui){return this.instances.has(e)}getOptions(e=ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[o,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);n===l&&s.resolve(i)}return i}onInit(e,r){var n;const i=this.normalizeInstanceIdentifier(r),o=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,r){const n=this.onInitCallbacks.get(r);if(n)for(const i of n)try{i(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:pC(e),options:r}),this.instances.set(e,n),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=ui){return this.component?this.component.multipleInstances?e:ui:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pC(t){return t===ui?void 0:t}function mC(t){return t.instantiationMode==="EAGER"}/**
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
 */class gC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new fC(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const vC={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},yC=ce.INFO,_C={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},wC=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=_C[e];if(i)console[i](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Im{constructor(e){this.name=e,this._logLevel=yC,this._logHandler=wC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const bC=(t,e)=>e.some(r=>t instanceof r);let Qy,Yy;function EC(){return Qy||(Qy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xC(){return Yy||(Yy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vE=new WeakMap,Rf=new WeakMap,yE=new WeakMap,sh=new WeakMap,Tm=new WeakMap;function IC(t){const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{r(Yr(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(r=>{r instanceof IDBCursor&&vE.set(r,t)}).catch(()=>{}),Tm.set(e,t),e}function TC(t){if(Rf.has(t))return;const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{r(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Rf.set(t,e)}let Pf={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return Rf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yE.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Yr(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function AC(t){Pf=t(Pf)}function SC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(ah(this),e,...r);return yE.set(n,e.sort?e.sort():[e]),Yr(n)}:xC().includes(t)?function(...e){return t.apply(ah(this),e),Yr(vE.get(this))}:function(...e){return Yr(t.apply(ah(this),e))}}function kC(t){return typeof t=="function"?SC(t):(t instanceof IDBTransaction&&TC(t),bC(t,EC())?new Proxy(t,Pf):t)}function Yr(t){if(t instanceof IDBRequest)return IC(t);if(sh.has(t))return sh.get(t);const e=kC(t);return e!==t&&(sh.set(t,e),Tm.set(e,t)),e}const ah=t=>Tm.get(t);function Uu(t,e,{blocked:r,upgrade:n,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),l=Yr(s);return n&&s.addEventListener("upgradeneeded",c=>{n(Yr(s.result),c.oldVersion,c.newVersion,Yr(s.transaction),c)}),r&&s.addEventListener("blocked",c=>r(c.oldVersion,c.newVersion,c)),l.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}function lh(t,{blocked:e}={}){const r=indexedDB.deleteDatabase(t);return e&&r.addEventListener("blocked",n=>e(n.oldVersion,n)),Yr(r).then(()=>{})}const CC=["get","getKey","getAll","getAllKeys","count"],RC=["put","add","delete","clear"],ch=new Map;function Xy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ch.get(e))return ch.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,i=RC.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||CC.includes(r)))return;const o=async function(s,...l){const c=this.transaction(s,i?"readwrite":"readonly");let u=c.store;return n&&(u=u.index(l.shift())),(await Promise.all([u[r](...l),i&&c.done]))[0]};return ch.set(e,o),o}AC(t=>({...t,get:(e,r,n)=>Xy(e,r)||t.get(e,r,n),has:(e,r)=>!!Xy(e,r)||t.has(e,r)}));/**
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
 */class PC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(NC(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function NC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nf="@firebase/app",Jy="0.10.13";/**
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
 */const rn=new Im("@firebase/app"),OC="@firebase/app-compat",DC="@firebase/analytics-compat",LC="@firebase/analytics",VC="@firebase/app-check-compat",MC="@firebase/app-check",$C="@firebase/auth",FC="@firebase/auth-compat",UC="@firebase/database",jC="@firebase/data-connect",zC="@firebase/database-compat",BC="@firebase/functions",qC="@firebase/functions-compat",HC="@firebase/installations",WC="@firebase/installations-compat",KC="@firebase/messaging",GC="@firebase/messaging-compat",QC="@firebase/performance",YC="@firebase/performance-compat",XC="@firebase/remote-config",JC="@firebase/remote-config-compat",ZC="@firebase/storage",e1="@firebase/storage-compat",t1="@firebase/firestore",r1="@firebase/vertexai-preview",n1="@firebase/firestore-compat",i1="firebase",o1="10.14.1";/**
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
 */const Of="[DEFAULT]",s1={[Nf]:"fire-core",[OC]:"fire-core-compat",[LC]:"fire-analytics",[DC]:"fire-analytics-compat",[MC]:"fire-app-check",[VC]:"fire-app-check-compat",[$C]:"fire-auth",[FC]:"fire-auth-compat",[UC]:"fire-rtdb",[jC]:"fire-data-connect",[zC]:"fire-rtdb-compat",[BC]:"fire-fn",[qC]:"fire-fn-compat",[HC]:"fire-iid",[WC]:"fire-iid-compat",[KC]:"fire-fcm",[GC]:"fire-fcm-compat",[QC]:"fire-perf",[YC]:"fire-perf-compat",[XC]:"fire-rc",[JC]:"fire-rc-compat",[ZC]:"fire-gcs",[e1]:"fire-gcs-compat",[t1]:"fire-fst",[n1]:"fire-fst-compat",[r1]:"fire-vertex","fire-js":"fire-js",[i1]:"fire-js-all"};/**
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
 */const su=new Map,a1=new Map,Df=new Map;function Zy(t,e){try{t.container.addComponent(e)}catch(r){rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function Or(t){const e=t.name;if(Df.has(e))return rn.debug(`There were multiple attempts to register component ${e}.`),!1;Df.set(e,t);for(const r of su.values())Zy(r,t);for(const r of a1.values())Zy(r,t);return!0}function Yo(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}function gr(t){return t.settings!==void 0}/**
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
 */const l1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$n=new Ui("app","Firebase",l1);/**
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
 */class c1{constructor(e,r,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
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
 */const Xo=o1;function _E(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Of,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw $n.create("bad-app-name",{appName:String(i)});if(r||(r=fE()),!r)throw $n.create("no-options");const o=su.get(i);if(o){if(Aa(r,o.options)&&Aa(n,o.config))return o;throw $n.create("duplicate-app",{appName:i})}const s=new gC(i);for(const c of Df.values())s.addComponent(c);const l=new c1(r,n,s);return su.set(i,l),l}function Am(t=Of){const e=su.get(t);if(!e&&t===Of&&fE())return _E();if(!e)throw $n.create("no-app",{appName:t});return e}function ir(t,e,r){var n;let i=(n=s1[t])!==null&&n!==void 0?n:t;r&&(i+=`-${r}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&l.push("and"),s&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rn.warn(l.join(" "));return}Or(new br(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const u1="firebase-heartbeat-database",d1=1,Sa="firebase-heartbeat-store";let uh=null;function wE(){return uh||(uh=Uu(u1,d1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Sa)}catch(r){console.warn(r)}}}}).catch(t=>{throw $n.create("idb-open",{originalErrorMessage:t.message})})),uh}async function h1(t){try{const r=(await wE()).transaction(Sa),n=await r.objectStore(Sa).get(bE(t));return await r.done,n}catch(e){if(e instanceof Lr)rn.warn(e.message);else{const r=$n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rn.warn(r.message)}}}async function e_(t,e){try{const n=(await wE()).transaction(Sa,"readwrite");await n.objectStore(Sa).put(e,bE(t)),await n.done}catch(r){if(r instanceof Lr)rn.warn(r.message);else{const n=$n.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});rn.warn(n.message)}}}function bE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const f1=1024,p1=30*24*60*60*1e3;class m1{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new v1(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,r;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=t_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const l=new Date(s.date).valueOf();return Date.now()-l<=p1}),this._storage.overwrite(this._heartbeatsCache))}catch(n){rn.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=t_(),{heartbeatsToSend:n,unsentEntries:i}=g1(this._heartbeatsCache.heartbeats),o=ou(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=r,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(r){return rn.warn(r),""}}}function t_(){return new Date().toISOString().substring(0,10)}function g1(t,e=f1){const r=[];let n=t.slice();for(const i of t){const o=r.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),r_(r)>e){o.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),r_(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class v1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mE()?gE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await h1(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return e_(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return e_(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function r_(t){return ou(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function y1(t){Or(new br("platform-logger",e=>new PC(e),"PRIVATE")),Or(new br("heartbeat",e=>new m1(e),"PRIVATE")),ir(Nf,Jy,t),ir(Nf,Jy,"esm2017"),ir("fire-js","")}y1("");function Sm(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}function P(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o}function EE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _1=EE,xE=new Ui("auth","Firebase",EE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=new Im("@firebase/auth");function w1(t,...e){au.logLevel<=ce.WARN&&au.warn(`Auth (${Xo}): ${t}`,...e)}function xc(t,...e){au.logLevel<=ce.ERROR&&au.error(`Auth (${Xo}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t,...e){throw Cm(t,...e)}function _r(t,...e){return Cm(t,...e)}function km(t,e,r){const n=Object.assign(Object.assign({},_1()),{[e]:r});return new Ui("auth","Firebase",n).create(e,{appName:t.name})}function Xr(t){return km(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function b1(t,e,r){const n=r;if(!(e instanceof n))throw n.name!==e.constructor.name&&lr(t,"argument-error"),km(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cm(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return xE.create(t,...e)}function te(t,e,...r){if(!t)throw Cm(e,...r)}function Wr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xc(e),new Error(e)}function nn(t,e){t||Wr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function E1(){return n_()==="http:"||n_()==="https:"}function n_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(E1()||tC()||"connection"in navigator)?navigator.onLine:!0}function I1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,r){this.shortDelay=e,this.longDelay=r,nn(r>e,"Short delay should be less than long delay!"),this.isMobile=Jk()||rC()}get(){return x1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(t,e){nn(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=new Xa(3e4,6e4);function Qn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Yn(t,e,r,n,i={}){return TE(t,i,async()=>{let o={},s={};n&&(e==="GET"?s=n:o={body:JSON.stringify(n)});const l=Ya(Object.assign({key:t.config.apiKey},s)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},o);return eC()||(u.referrerPolicy="no-referrer"),IE.fetch()(AE(t,t.config.apiHost,r,l),u)})}async function TE(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},T1),e);try{const i=new k1(t),o=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Yl(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const l=o.ok?s.errorMessage:s.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yl(t,"credential-already-in-use",s);if(c==="EMAIL_EXISTS")throw Yl(t,"email-already-in-use",s);if(c==="USER_DISABLED")throw Yl(t,"user-disabled",s);const h=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw km(t,h,u);lr(t,h)}}catch(i){if(i instanceof Lr)throw i;lr(t,"network-request-failed",{message:String(i)})}}async function Ja(t,e,r,n,i={}){const o=await Yn(t,e,r,n,i);return"mfaPendingCredential"in o&&lr(t,"multi-factor-auth-required",{_serverResponse:o}),o}function AE(t,e,r,n){const i=`${e}${r}?${n}`;return t.config.emulator?Rm(t.config,i):`${t.config.apiScheme}://${i}`}function S1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class k1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(_r(this.auth,"network-request-failed")),A1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yl(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=_r(t,e,n);return i.customData._tokenResponse=r,i}function i_(t){return t!==void 0&&t.enterprise!==void 0}class C1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===e)return S1(r.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function R1(t,e){return Yn(t,"GET","/v2/recaptchaConfig",Qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P1(t,e){return Yn(t,"POST","/v1/accounts:delete",e)}async function SE(t,e){return Yn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function N1(t,e=!1){const r=Me(t),n=await r.getIdToken(e),i=Pm(n);te(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:n,authTime:ea(dh(i.auth_time)),issuedAtTime:ea(dh(i.iat)),expirationTime:ea(dh(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function dh(t){return Number(t)*1e3}function Pm(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return xc("JWT malformed, contained fewer than 3 sections"),null;try{const i=dE(r);return i?JSON.parse(i):(xc("Failed to decode base64 JWT payload"),null)}catch(i){return xc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function o_(t){const e=Pm(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ka(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof Lr&&O1(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function O1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=ea(this.lastLoginAt),this.creationTime=ea(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function lu(t){var e;const r=t.auth,n=await t.getIdToken(),i=await ka(t,SE(r,{idToken:n}));te(i==null?void 0:i.users.length,r,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?kE(o.providerUserInfo):[],l=V1(t.providerData,s),c=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(l!=null&&l.length),h=c?u:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Vf(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function L1(t){const e=Me(t);await lu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function V1(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function kE(t){return t.map(e=>{var{providerId:r}=e,n=Sm(e,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M1(t,e){const r=await TE(t,{},async()=>{const n=Ya({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=AE(t,i,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",IE.fetch()(s,{method:"POST",headers:l,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function $1(t,e){return Yn(t,"POST","/v2/accounts:revokeToken",Qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):o_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}updateFromIdToken(e){te(e.length!==0,"internal-error");const r=o_(e);this.updateTokensAndExpiration(e,null,r)}async getToken(e,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:i,expiresIn:o}=await M1(e,r);this.updateTokensAndExpiration(n,i,Number(o))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:i,expirationTime:o}=r,s=new To;return n&&(te(typeof n=="string","internal-error",{appName:e}),s.refreshToken=n),i&&(te(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(te(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new To,this.toJSON())}_performRefresh(){return Wr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kr{constructor(e){var{uid:r,auth:n,stsTokenManager:i}=e,o=Sm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new D1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Vf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const r=await ka(this,this.stsTokenManager.getToken(this.auth,e));return te(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return N1(this,e)}reload(){return L1(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new Kr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await lu(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gr(this.auth.app))return Promise.reject(Xr(this.auth));const e=await this.getIdToken();return await ka(this,P1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var n,i,o,s,l,c,u,h;const p=(n=r.displayName)!==null&&n!==void 0?n:void 0,m=(i=r.email)!==null&&i!==void 0?i:void 0,b=(o=r.phoneNumber)!==null&&o!==void 0?o:void 0,k=(s=r.photoURL)!==null&&s!==void 0?s:void 0,N=(l=r.tenantId)!==null&&l!==void 0?l:void 0,D=(c=r._redirectEventId)!==null&&c!==void 0?c:void 0,E=(u=r.createdAt)!==null&&u!==void 0?u:void 0,y=(h=r.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:T,emailVerified:V,isAnonymous:j,providerData:z,stsTokenManager:w}=r;te(T&&w,e,"internal-error");const v=To.fromJSON(this.name,w);te(typeof T=="string",e,"internal-error"),vn(p,e.name),vn(m,e.name),te(typeof V=="boolean",e,"internal-error"),te(typeof j=="boolean",e,"internal-error"),vn(b,e.name),vn(k,e.name),vn(N,e.name),vn(D,e.name),vn(E,e.name),vn(y,e.name);const _=new Kr({uid:T,auth:e,email:m,emailVerified:V,displayName:p,isAnonymous:j,photoURL:k,phoneNumber:b,tenantId:N,stsTokenManager:v,createdAt:E,lastLoginAt:y});return z&&Array.isArray(z)&&(_.providerData=z.map(x=>Object.assign({},x))),D&&(_._redirectEventId=D),_}static async _fromIdTokenResponse(e,r,n=!1){const i=new To;i.updateFromServerResponse(r);const o=new Kr({uid:r.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await lu(o),o}static async _fromGetAccountInfoResponse(e,r,n){const i=r.users[0];te(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?kE(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new To;l.updateFromIdToken(n);const c=new Kr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Vf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=new Map;function Gr(t){nn(t instanceof Function,"Expected a class definition");let e=s_.get(t);return e?(nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,s_.set(t,e),e)}/**
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
 */class CE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}CE.type="NONE";const a_=CE;/**
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
 */function Ic(t,e,r){return`firebase:${t}:${e}:${r}`}class Ao{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:i,name:o}=this.auth;this.fullUserKey=Ic(this.userKey,i.apiKey,o),this.fullPersistenceKey=Ic("persistence",i.apiKey,o),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new Ao(Gr(a_),e,n);const i=(await Promise.all(r.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Gr(a_);const s=Ic(n,e.config.apiKey,e.name);let l=null;for(const u of r)try{const h=await u._get(s);if(h){const p=Kr._fromJSON(e,h);u!==o&&(l=p),o=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new Ao(o,e,n):(o=c[0],l&&await o._set(s,l.toJSON()),await Promise.all(r.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Ao(o,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(OE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(RE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(LE(e))return"Blackberry";if(VE(e))return"Webos";if(PE(e))return"Safari";if((e.includes("chrome/")||NE(e))&&!e.includes("edge/"))return"Chrome";if(DE(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function RE(t=bt()){return/firefox\//i.test(t)}function PE(t=bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function NE(t=bt()){return/crios\//i.test(t)}function OE(t=bt()){return/iemobile/i.test(t)}function DE(t=bt()){return/android/i.test(t)}function LE(t=bt()){return/blackberry/i.test(t)}function VE(t=bt()){return/webos/i.test(t)}function Nm(t=bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function F1(t=bt()){var e;return Nm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function U1(){return nC()&&document.documentMode===10}function ME(t=bt()){return Nm(t)||DE(t)||VE(t)||LE(t)||/windows phone/i.test(t)||OE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(t,e=[]){let r;switch(t){case"Browser":r=l_(bt());break;case"Worker":r=`${l_(bt())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${Xo}/${n}`}/**
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
 */class j1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const n=o=>new Promise((s,l)=>{try{const c=e(o);s(c)}catch(c){l(c)}});n.onAbort=r,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const n of this.queue)await n(e),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function z1(t,e={}){return Yn(t,"GET","/v2/passwordPolicy",Qn(t,e))}/**
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
 */const B1=6;class q1{constructor(e){var r,n,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=s.minPasswordLength)!==null&&r!==void 0?r:B1,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,n,i,o,s,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(r=c.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(n=c.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsUppercaseLetter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(s=c.containsNumericCharacter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,r){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(r.meetsMinPasswordLength=e.length>=n),i&&(r.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(r,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,r,n,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,r,n,i){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new c_(this),this.idTokenSubscription=new c_(this),this.beforeStateQueue=new j1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=Gr(r)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Ao.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const r=await SE(this,{idToken:e}),n=await Kr._fromGetAccountInfoResponse(this,r,e);await this.directlySetCurrentUser(n)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(gr(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!s||s===l)&&(c!=null&&c.user)&&(i=c.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await lu(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=I1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gr(this.app))return Promise.reject(Xr(this));const r=e?Me(e):null;return r&&te(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gr(this.app)?Promise.reject(Xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gr(this.app)?Promise.reject(Xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await z1(this),r=new q1(e);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ui("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},r)}})}async revokeAccessToken(e){if(this.currentUser){const r=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:r};this.tenantId!=null&&(n.tenantId=this.tenantId),await $1(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&Gr(e)||this._popupRedirectResolver;te(r,this,"argument-error"),this.redirectPersistenceManager=await Ao.create(this,[Gr(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,i){if(this._deleted)return()=>{};const o=typeof r=="function"?r:r.next.bind(r);let s=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(l,this,"internal-error"),l.then(()=>{s||o(this.currentUser)}),typeof r=="function"){const c=e.addObserver(r,n,i);return()=>{s=!0,c()}}else{const c=e.addObserver(r);return()=>{s=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$E(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(r["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(r["X-Firebase-AppCheck"]=i),r}async _getAppCheckToken(){var e;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r!=null&&r.error&&w1(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function Xn(t){return Me(t)}class c_{constructor(e){this.auth=e,this.observer=null,this.addObserver=uC(r=>this.observer=r)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ju={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function W1(t){ju=t}function FE(t){return ju.loadJS(t)}function K1(){return ju.recaptchaEnterpriseScript}function G1(){return ju.gapiScript}function Q1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Y1="recaptcha-enterprise",X1="NO_RECAPTCHA";class J1{constructor(e){this.type=Y1,this.auth=Xn(e)}async verify(e="verify",r=!1){async function n(o){if(!r){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,l)=>{R1(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new C1(c);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(c=>{l(c)})})}function i(o,s,l){const c=window.grecaptcha;i_(c)?c.enterprise.ready(()=>{c.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(X1)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{n(this.auth).then(l=>{if(!r&&i_(window.grecaptcha))i(l,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let c=K1();c.length!==0&&(c+=l),FE(c).then(()=>{i(l,o,s)}).catch(u=>{s(u)})}}).catch(l=>{s(l)})})}}async function u_(t,e,r,n=!1){const i=new J1(t);let o;try{o=await i.verify(r)}catch{o=await i.verify(r,!0)}const s=Object.assign({},e);return n?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Mf(t,e,r,n){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await u_(t,e,r,r==="getOobCode");return n(t,o)}else return n(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await u_(t,e,r,r==="getOobCode");return n(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(t,e){const r=Yo(t,"auth");if(r.isInitialized()){const i=r.getImmediate(),o=r.getOptions();if(Aa(o,e??{}))return i;lr(i,"already-initialized")}return r.initialize({options:e})}function eR(t,e){const r=(e==null?void 0:e.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Gr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function tR(t,e,r){const n=Xn(t);te(n._canInitEmulator,n,"emulator-config-failed"),te(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,o=UE(e),{host:s,port:l}=rR(e),c=l===null?"":`:${l}`;n.config.emulator={url:`${o}//${s}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),nR()}function UE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rR(t){const e=UE(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const o=i[1];return{host:o,port:d_(n.substr(o.length+1))}}else{const[o,s]=n.split(":");return{host:o,port:d_(s)}}}function d_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nR(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return Wr("not implemented")}_getIdTokenResponse(e){return Wr("not implemented")}_linkToIdToken(e,r){return Wr("not implemented")}_getReauthenticationResolver(e){return Wr("not implemented")}}async function iR(t,e){return Yn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oR(t,e){return Ja(t,"POST","/v1/accounts:signInWithPassword",Qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR(t,e){return Ja(t,"POST","/v1/accounts:signInWithEmailLink",Qn(t,e))}async function aR(t,e){return Ja(t,"POST","/v1/accounts:signInWithEmailLink",Qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca extends Om{constructor(e,r,n,i=null){super("password",n),this._email=e,this._password=r,this._tenantId=i}static _fromEmailAndPassword(e,r){return new Ca(e,r,"password")}static _fromEmailAndCode(e,r,n=null){return new Ca(e,r,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mf(e,r,"signInWithPassword",oR);case"emailLink":return sR(e,{email:this._email,oobCode:this._password});default:lr(e,"internal-error")}}async _linkToIdToken(e,r){switch(this.signInMethod){case"password":const n={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mf(e,n,"signUpPassword",iR);case"emailLink":return aR(e,{idToken:r,email:this._email,oobCode:this._password});default:lr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(t,e){return Ja(t,"POST","/v1/accounts:signInWithIdp",Qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR="http://localhost";class on extends Om{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new on(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):lr("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=r,o=Sm(r,["providerId","signInMethod"]);if(!n||!i)return null;const s=new on(n,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const r=this.buildRequest();return So(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,So(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,So(e,r)}buildRequest(){const e={requestUri:lR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=Ya(r)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uR(t){const e=Fs(Us(t)).link,r=e?Fs(Us(e)).deep_link_id:null,n=Fs(Us(t)).deep_link_id;return(n?Fs(Us(n)).link:null)||n||r||e||t}class Dm{constructor(e){var r,n,i,o,s,l;const c=Fs(Us(e)),u=(r=c.apiKey)!==null&&r!==void 0?r:null,h=(n=c.oobCode)!==null&&n!==void 0?n:null,p=cR((i=c.mode)!==null&&i!==void 0?i:null);te(u&&h&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=h,this.continueUrl=(o=c.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=c.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const r=uR(e);try{return new Dm(r)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(){this.providerId=Jo.PROVIDER_ID}static credential(e,r){return Ca._fromEmailAndPassword(e,r)}static credentialWithLink(e,r){const n=Dm.parseLink(r);return te(n,"argument-error"),Ca._fromEmailAndCode(e,n.code,n.tenantId)}}Jo.PROVIDER_ID="password";Jo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Jo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zo extends Lm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ta extends Zo{static credentialFromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;return te("providerId"in r&&"signInMethod"in r,"argument-error"),on._fromParams(r)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return te(e.idToken||e.accessToken,"argument-error"),on._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ta.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ta.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:o,nonce:s,providerId:l}=e;if(!n&&!i&&!r&&!o||!l)return null;try{return new ta(l)._credential({idToken:r,accessToken:n,nonce:s,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Zo{constructor(){super("facebook.com")}static credential(e){return on._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends Zo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return on._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n}=e;if(!r&&!n)return null;try{return Br.credential(r,n)}catch{return null}}}Br.GOOGLE_SIGN_IN_METHOD="google.com";Br.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Zo{constructor(){super("github.com")}static credential(e){return on._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Zo{constructor(){super("twitter.com")}static credential(e,r){return on._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=e;if(!r||!n)return null;try{return Tn.credential(r,n)}catch{return null}}}Tn.TWITTER_SIGN_IN_METHOD="twitter.com";Tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(t,e){return Ja(t,"POST","/v1/accounts:signUp",Qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,i=!1){const o=await Kr._fromIdTokenResponse(e,n,i),s=h_(n);return new Ri({user:o,providerId:s,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const i=h_(n);return new Ri({user:e,providerId:i,_tokenResponse:n,operationType:r})}}function h_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu extends Lr{constructor(e,r,n,i){var o;super(r.code,r.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,cu.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,r,n,i){return new cu(e,r,n,i)}}function jE(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?cu._fromErrorAndOperation(t,o,e,n):o})}async function hR(t,e,r=!1){const n=await ka(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return Ri._forOperation(t,"link",n)}/**
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
 */async function fR(t,e,r=!1){const{auth:n}=t;if(gr(n.app))return Promise.reject(Xr(n));const i="reauthenticate";try{const o=await ka(t,jE(n,i,e,t),r);te(o.idToken,n,"internal-error");const s=Pm(o.idToken);te(s,n,"internal-error");const{sub:l}=s;return te(t.uid===l,n,"user-mismatch"),Ri._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&lr(n,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zE(t,e,r=!1){if(gr(t.app))return Promise.reject(Xr(t));const n="signIn",i=await jE(t,n,e),o=await Ri._fromIdTokenResponse(t,n,i);return r||await t._updateCurrentUser(o.user),o}async function pR(t,e){return zE(Xn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BE(t){const e=Xn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function mR(t,e,r){if(gr(t.app))return Promise.reject(Xr(t));const n=Xn(t),s=await Mf(n,{returnSecureToken:!0,email:e,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",dR).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&BE(t),c}),l=await Ri._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(l.user),l}function gR(t,e,r){return gr(t.app)?Promise.reject(Xr(t)):pR(Me(t),Jo.credential(e,r)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&BE(t),n})}function vR(t,e,r,n){return Me(t).onIdTokenChanged(e,r,n)}function yR(t,e,r){return Me(t).beforeAuthStateChanged(e,r)}function _R(t,e,r,n){return Me(t).onAuthStateChanged(e,r,n)}function wR(t){return Me(t).signOut()}const uu="__sak";/**
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
 */class qE{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(uu,"1"),this.storage.removeItem(uu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR=1e3,ER=10;class HE extends qE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ME(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&e(r,i,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((s,l,c)=>{this.notifyListeners(s,c)});return}const n=e.key;r?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(n);!r&&this.localCache[n]===s||this.notifyListeners(n,s)},o=this.storage.getItem(n);U1()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ER):i()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},bR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}HE.type="LOCAL";const xR=HE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE extends qE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}WE.type="SESSION";const KE=WE;/**
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
 */function IR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class zu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(i=>i.isListeningto(e));if(r)return r;const n=new zu(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:i,data:o}=r.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const l=Array.from(s).map(async u=>u(r.origin,o)),c=await IR(l);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t="",e=10){let r="";for(let n=0;n<e;n++)r+=Math.floor(Math.random()*10);return t+r}/**
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
 */class TR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((l,c)=>{const u=Vm("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(m.data.response);break;default:clearTimeout(h),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:r},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(){return window}function AR(t){Cr().location.href=t}/**
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
 */function GE(){return typeof Cr().WorkerGlobalScope<"u"&&typeof Cr().importScripts=="function"}async function SR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function CR(){return GE()?self:null}/**
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
 */const QE="firebaseLocalStorageDb",RR=1,du="firebaseLocalStorage",YE="fbase_key";class Za{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Bu(t,e){return t.transaction([du],e?"readwrite":"readonly").objectStore(du)}function PR(){const t=indexedDB.deleteDatabase(QE);return new Za(t).toPromise()}function $f(){const t=indexedDB.open(QE,RR);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(du,{keyPath:YE})}catch(i){r(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(du)?e(n):(n.close(),await PR(),e(await $f()))})})}async function f_(t,e,r){const n=Bu(t,!0).put({[YE]:e,value:r});return new Za(n).toPromise()}async function NR(t,e){const r=Bu(t,!1).get(e),n=await new Za(r).toPromise();return n===void 0?null:n.value}function p_(t,e){const r=Bu(t,!0).delete(e);return new Za(r).toPromise()}const OR=800,DR=3;class XE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $f(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>DR)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return GE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zu._getInstance(CR()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await SR(),!this.activeServiceWorker)return;this.sender=new TR(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((r=n[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $f();return await f_(e,uu,"1"),await p_(e,uu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>f_(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>NR(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>p_(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Bu(i,!1).getAll();return new Za(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}XE.type="LOCAL";const LR=XE;new Xa(3e4,6e4);/**
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
 */function JE(t,e){return e?Gr(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Mm extends Om{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return So(e,this._buildIdpRequest())}_linkToIdToken(e,r){return So(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return So(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function VR(t){return zE(t.auth,new Mm(t),t.bypassAuthState)}function MR(t){const{auth:e,user:r}=t;return te(r,e,"internal-error"),fR(r,new Mm(t),t.bypassAuthState)}async function $R(t){const{auth:e,user:r}=t;return te(r,e,"internal-error"),hR(r,new Mm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,r,n,i,o=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:i,tenantId:o,error:s,type:l}=e;if(s){this.reject(s);return}const c={auth:this.auth,requestUri:r,sessionId:n,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VR;case"linkViaPopup":case"linkViaRedirect":return $R;case"reauthViaPopup":case"reauthViaRedirect":return MR;default:lr(this.auth,"internal-error")}}resolve(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=new Xa(2e3,1e4);async function UR(t,e,r){if(gr(t.app))return Promise.reject(_r(t,"operation-not-supported-in-this-environment"));const n=Xn(t);b1(t,e,Lm);const i=JE(n,r);return new mi(n,"signInViaPopup",e,i).executeNotNull()}class mi extends ZE{constructor(e,r,n,i,o){super(e,r,i,o),this.provider=n,this.authWindow=null,this.pollId=null,mi.currentPopupAction&&mi.currentPopupAction.cancel(),mi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){nn(this.filter.length===1,"Popup operations only handle one event");const e=Vm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(_r(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_r(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_r(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FR.get())};e()}}mi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR="pendingRedirect",Tc=new Map;class zR extends ZE{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let e=Tc.get(this.auth._key());if(!e){try{const n=await BR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}Tc.set(this.auth._key(),e)}return this.bypassAuthState||Tc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BR(t,e){const r=WR(e),n=HR(t);if(!await n._isAvailable())return!1;const i=await n._get(r)==="true";return await n._remove(r),i}function qR(t,e){Tc.set(t._key(),e)}function HR(t){return Gr(t._redirectPersistence)}function WR(t){return Ic(jR,t.config.apiKey,t.name)}async function KR(t,e,r=!1){if(gr(t.app))return Promise.reject(Xr(t));const n=Xn(t),i=JE(n,e),s=await new zR(n,i,r).execute();return s&&!r&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR=10*60*1e3;class QR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YR(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var n;if(e.error&&!ex(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(_r(this.auth,i))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GR&&this.cachedEventUids.clear(),this.cachedEventUids.has(m_(e))}saveEventToCache(e){this.cachedEventUids.add(m_(e)),this.lastProcessedEventTime=Date.now()}}function m_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ex({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ex(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XR(t,e={}){return Yn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZR=/^https?/;async function eP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await XR(t);for(const r of e)try{if(tP(r))return}catch{}lr(t,"unauthorized-domain")}function tP(t){const e=Lf(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&s.hostname===n}if(!ZR.test(r))return!1;if(JR.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const rP=new Xa(3e4,6e4);function g_(){const t=Cr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function nP(t){return new Promise((e,r)=>{var n,i,o;function s(){g_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{g_(),r(_r(t,"network-request-failed"))},timeout:rP.get()})}if(!((i=(n=Cr().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Cr().gapi)===null||o===void 0)&&o.load)s();else{const l=Q1("iframefcb");return Cr()[l]=()=>{gapi.load?s():r(_r(t,"network-request-failed"))},FE(`${G1()}?onload=${l}`).catch(c=>r(c))}}).catch(e=>{throw Ac=null,e})}let Ac=null;function iP(t){return Ac=Ac||nP(t),Ac}/**
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
 */const oP=new Xa(5e3,15e3),sP="__/auth/iframe",aP="emulator/auth/iframe",lP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uP(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?Rm(e,aP):`https://${t.config.authDomain}/${sP}`,n={apiKey:e.apiKey,appName:t.name,v:Xo},i=cP.get(t.config.apiHost);i&&(n.eid=i);const o=t._getFrameworks();return o.length&&(n.fw=o.join(",")),`${r}?${Ya(n).slice(1)}`}async function dP(t){const e=await iP(t),r=Cr().gapi;return te(r,t,"internal-error"),e.open({where:document.body,url:uP(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lP,dontclear:!0},n=>new Promise(async(i,o)=>{await n.restyle({setHideOnLeave:!1});const s=_r(t,"network-request-failed"),l=Cr().setTimeout(()=>{o(s)},oP.get());function c(){Cr().clearTimeout(l),i(n)}n.ping(c).then(c,()=>{o(s)})}))}/**
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
 */const hP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fP=500,pP=600,mP="_blank",gP="http://localhost";class v_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vP(t,e,r,n=fP,i=pP){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const c=Object.assign(Object.assign({},hP),{width:n.toString(),height:i.toString(),top:o,left:s}),u=bt().toLowerCase();r&&(l=NE(u)?mP:r),RE(u)&&(e=e||gP,c.scrollbars="yes");const h=Object.entries(c).reduce((m,[b,k])=>`${m}${b}=${k},`,"");if(F1(u)&&l!=="_self")return yP(e||"",l),new v_(null);const p=window.open(e||"",l,h);te(p,t,"popup-blocked");try{p.focus()}catch{}return new v_(p)}function yP(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const _P="__/auth/handler",wP="emulator/auth/handler",bP=encodeURIComponent("fac");async function y_(t,e,r,n,i,o){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:Xo,eventId:i};if(e instanceof Lm){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",cC(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))s[h]=p}if(e instanceof Zo){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(s.scopes=h.join(","))}t.tenantId&&(s.tid=t.tenantId);const l=s;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await t._getAppCheckToken(),u=c?`#${bP}=${encodeURIComponent(c)}`:"";return`${EP(t)}?${Ya(l).slice(1)}${u}`}function EP({config:t}){return t.emulator?Rm(t,wP):`https://${t.authDomain}/${_P}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh="webStorageSupport";class xP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=KE,this._completeRedirectFn=KR,this._overrideRedirectResult=qR}async _openPopup(e,r,n,i){var o;nn((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await y_(e,r,n,Lf(),i);return vP(e,s,Vm())}async _openRedirect(e,r,n,i){await this._originValidation(e);const o=await y_(e,r,n,Lf(),i);return AR(o),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:i,promise:o}=this.eventManagers[r];return i?Promise.resolve(i):(nn(o,"If manager is not set, promise should be"),o)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(e){const r=await dP(e),n=new QR(e);return r.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(hh,{type:hh},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[hh];s!==void 0&&r(!!s),lr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=eP(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return ME()||PE()||Nm()}}const IP=xP;var __="@firebase/auth",w_="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function SP(t){Or(new br("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:l}=n.options;te(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:s,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$E(t)},u=new H1(n,i,o,c);return eR(u,r),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),Or(new br("auth-internal",e=>{const r=Xn(e.getProvider("auth").getImmediate());return(n=>new TP(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),ir(__,w_,AP(t)),ir(__,w_,"esm2017")}/**
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
 */const kP=5*60,CP=pE("authIdTokenMaxAge")||kP;let b_=null;const RP=t=>async e=>{const r=e&&await e.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>CP)return;const i=r==null?void 0:r.token;b_!==i&&(b_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function PP(t=Am()){const e=Yo(t,"auth");if(e.isInitialized())return e.getImmediate();const r=Z1(t,{popupRedirectResolver:IP,persistence:[LR,xR,KE]}),n=pE("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(n,location.origin);if(location.origin===o.origin){const s=RP(o.toString());yR(r,s,()=>s(r.currentUser)),vR(r,l=>s(l))}}const i=hE("auth");return i&&tR(r,`http://${i}`),r}function NP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}W1({loadJS(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const o=_r("internal-error");o.customData=i,r(o)},n.type="text/javascript",n.charset="UTF-8",NP().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});SP("Browser");var E_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bi,tx;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function _(){}_.prototype=v.prototype,w.D=v.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(x,A,C){for(var I=Array(arguments.length-2),Et=2;Et<arguments.length;Et++)I[Et-2]=arguments[Et];return v.prototype[A].apply(x,I)}}function r(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,r),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,v,_){_||(_=0);var x=Array(16);if(typeof v=="string")for(var A=0;16>A;++A)x[A]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(A=0;16>A;++A)x[A]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=w.g[0],_=w.g[1],A=w.g[2];var C=w.g[3],I=v+(C^_&(A^C))+x[0]+3614090360&4294967295;v=_+(I<<7&4294967295|I>>>25),I=C+(A^v&(_^A))+x[1]+3905402710&4294967295,C=v+(I<<12&4294967295|I>>>20),I=A+(_^C&(v^_))+x[2]+606105819&4294967295,A=C+(I<<17&4294967295|I>>>15),I=_+(v^A&(C^v))+x[3]+3250441966&4294967295,_=A+(I<<22&4294967295|I>>>10),I=v+(C^_&(A^C))+x[4]+4118548399&4294967295,v=_+(I<<7&4294967295|I>>>25),I=C+(A^v&(_^A))+x[5]+1200080426&4294967295,C=v+(I<<12&4294967295|I>>>20),I=A+(_^C&(v^_))+x[6]+2821735955&4294967295,A=C+(I<<17&4294967295|I>>>15),I=_+(v^A&(C^v))+x[7]+4249261313&4294967295,_=A+(I<<22&4294967295|I>>>10),I=v+(C^_&(A^C))+x[8]+1770035416&4294967295,v=_+(I<<7&4294967295|I>>>25),I=C+(A^v&(_^A))+x[9]+2336552879&4294967295,C=v+(I<<12&4294967295|I>>>20),I=A+(_^C&(v^_))+x[10]+4294925233&4294967295,A=C+(I<<17&4294967295|I>>>15),I=_+(v^A&(C^v))+x[11]+2304563134&4294967295,_=A+(I<<22&4294967295|I>>>10),I=v+(C^_&(A^C))+x[12]+1804603682&4294967295,v=_+(I<<7&4294967295|I>>>25),I=C+(A^v&(_^A))+x[13]+4254626195&4294967295,C=v+(I<<12&4294967295|I>>>20),I=A+(_^C&(v^_))+x[14]+2792965006&4294967295,A=C+(I<<17&4294967295|I>>>15),I=_+(v^A&(C^v))+x[15]+1236535329&4294967295,_=A+(I<<22&4294967295|I>>>10),I=v+(A^C&(_^A))+x[1]+4129170786&4294967295,v=_+(I<<5&4294967295|I>>>27),I=C+(_^A&(v^_))+x[6]+3225465664&4294967295,C=v+(I<<9&4294967295|I>>>23),I=A+(v^_&(C^v))+x[11]+643717713&4294967295,A=C+(I<<14&4294967295|I>>>18),I=_+(C^v&(A^C))+x[0]+3921069994&4294967295,_=A+(I<<20&4294967295|I>>>12),I=v+(A^C&(_^A))+x[5]+3593408605&4294967295,v=_+(I<<5&4294967295|I>>>27),I=C+(_^A&(v^_))+x[10]+38016083&4294967295,C=v+(I<<9&4294967295|I>>>23),I=A+(v^_&(C^v))+x[15]+3634488961&4294967295,A=C+(I<<14&4294967295|I>>>18),I=_+(C^v&(A^C))+x[4]+3889429448&4294967295,_=A+(I<<20&4294967295|I>>>12),I=v+(A^C&(_^A))+x[9]+568446438&4294967295,v=_+(I<<5&4294967295|I>>>27),I=C+(_^A&(v^_))+x[14]+3275163606&4294967295,C=v+(I<<9&4294967295|I>>>23),I=A+(v^_&(C^v))+x[3]+4107603335&4294967295,A=C+(I<<14&4294967295|I>>>18),I=_+(C^v&(A^C))+x[8]+1163531501&4294967295,_=A+(I<<20&4294967295|I>>>12),I=v+(A^C&(_^A))+x[13]+2850285829&4294967295,v=_+(I<<5&4294967295|I>>>27),I=C+(_^A&(v^_))+x[2]+4243563512&4294967295,C=v+(I<<9&4294967295|I>>>23),I=A+(v^_&(C^v))+x[7]+1735328473&4294967295,A=C+(I<<14&4294967295|I>>>18),I=_+(C^v&(A^C))+x[12]+2368359562&4294967295,_=A+(I<<20&4294967295|I>>>12),I=v+(_^A^C)+x[5]+4294588738&4294967295,v=_+(I<<4&4294967295|I>>>28),I=C+(v^_^A)+x[8]+2272392833&4294967295,C=v+(I<<11&4294967295|I>>>21),I=A+(C^v^_)+x[11]+1839030562&4294967295,A=C+(I<<16&4294967295|I>>>16),I=_+(A^C^v)+x[14]+4259657740&4294967295,_=A+(I<<23&4294967295|I>>>9),I=v+(_^A^C)+x[1]+2763975236&4294967295,v=_+(I<<4&4294967295|I>>>28),I=C+(v^_^A)+x[4]+1272893353&4294967295,C=v+(I<<11&4294967295|I>>>21),I=A+(C^v^_)+x[7]+4139469664&4294967295,A=C+(I<<16&4294967295|I>>>16),I=_+(A^C^v)+x[10]+3200236656&4294967295,_=A+(I<<23&4294967295|I>>>9),I=v+(_^A^C)+x[13]+681279174&4294967295,v=_+(I<<4&4294967295|I>>>28),I=C+(v^_^A)+x[0]+3936430074&4294967295,C=v+(I<<11&4294967295|I>>>21),I=A+(C^v^_)+x[3]+3572445317&4294967295,A=C+(I<<16&4294967295|I>>>16),I=_+(A^C^v)+x[6]+76029189&4294967295,_=A+(I<<23&4294967295|I>>>9),I=v+(_^A^C)+x[9]+3654602809&4294967295,v=_+(I<<4&4294967295|I>>>28),I=C+(v^_^A)+x[12]+3873151461&4294967295,C=v+(I<<11&4294967295|I>>>21),I=A+(C^v^_)+x[15]+530742520&4294967295,A=C+(I<<16&4294967295|I>>>16),I=_+(A^C^v)+x[2]+3299628645&4294967295,_=A+(I<<23&4294967295|I>>>9),I=v+(A^(_|~C))+x[0]+4096336452&4294967295,v=_+(I<<6&4294967295|I>>>26),I=C+(_^(v|~A))+x[7]+1126891415&4294967295,C=v+(I<<10&4294967295|I>>>22),I=A+(v^(C|~_))+x[14]+2878612391&4294967295,A=C+(I<<15&4294967295|I>>>17),I=_+(C^(A|~v))+x[5]+4237533241&4294967295,_=A+(I<<21&4294967295|I>>>11),I=v+(A^(_|~C))+x[12]+1700485571&4294967295,v=_+(I<<6&4294967295|I>>>26),I=C+(_^(v|~A))+x[3]+2399980690&4294967295,C=v+(I<<10&4294967295|I>>>22),I=A+(v^(C|~_))+x[10]+4293915773&4294967295,A=C+(I<<15&4294967295|I>>>17),I=_+(C^(A|~v))+x[1]+2240044497&4294967295,_=A+(I<<21&4294967295|I>>>11),I=v+(A^(_|~C))+x[8]+1873313359&4294967295,v=_+(I<<6&4294967295|I>>>26),I=C+(_^(v|~A))+x[15]+4264355552&4294967295,C=v+(I<<10&4294967295|I>>>22),I=A+(v^(C|~_))+x[6]+2734768916&4294967295,A=C+(I<<15&4294967295|I>>>17),I=_+(C^(A|~v))+x[13]+1309151649&4294967295,_=A+(I<<21&4294967295|I>>>11),I=v+(A^(_|~C))+x[4]+4149444226&4294967295,v=_+(I<<6&4294967295|I>>>26),I=C+(_^(v|~A))+x[11]+3174756917&4294967295,C=v+(I<<10&4294967295|I>>>22),I=A+(v^(C|~_))+x[2]+718787259&4294967295,A=C+(I<<15&4294967295|I>>>17),I=_+(C^(A|~v))+x[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+C&4294967295}n.prototype.u=function(w,v){v===void 0&&(v=w.length);for(var _=v-this.blockSize,x=this.B,A=this.h,C=0;C<v;){if(A==0)for(;C<=_;)i(this,w,C),C+=this.blockSize;if(typeof w=="string"){for(;C<v;)if(x[A++]=w.charCodeAt(C++),A==this.blockSize){i(this,x),A=0;break}}else for(;C<v;)if(x[A++]=w[C++],A==this.blockSize){i(this,x),A=0;break}}this.h=A,this.o+=v},n.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;var _=8*this.o;for(v=w.length-8;v<w.length;++v)w[v]=_&255,_/=256;for(this.u(w),w=Array(16),v=_=0;4>v;++v)for(var x=0;32>x;x+=8)w[_++]=this.g[v]>>>x&255;return w};function o(w,v){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=v(w)}function s(w,v){this.h=v;for(var _=[],x=!0,A=w.length-1;0<=A;A--){var C=w[A]|0;x&&C==v||(_[A]=C,x=!1)}this.g=_}var l={};function c(w){return-128<=w&&128>w?o(w,function(v){return new s([v|0],0>v?-1:0)}):new s([w|0],0>w?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return D(u(-w));for(var v=[],_=1,x=0;w>=_;x++)v[x]=w/_|0,_*=4294967296;return new s(v,0)}function h(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return D(h(w.substring(1),v));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(v,8)),x=p,A=0;A<w.length;A+=8){var C=Math.min(8,w.length-A),I=parseInt(w.substring(A,A+C),v);8>C?(C=u(Math.pow(v,C)),x=x.j(C).add(u(I))):(x=x.j(_),x=x.add(u(I)))}return x}var p=c(0),m=c(1),b=c(16777216);t=s.prototype,t.m=function(){if(N(this))return-D(this).m();for(var w=0,v=1,_=0;_<this.g.length;_++){var x=this.i(_);w+=(0<=x?x:4294967296+x)*v,v*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(N(this))return"-"+D(this).toString(w);for(var v=u(Math.pow(w,6)),_=this,x="";;){var A=V(_,v).g;_=E(_,A.j(v));var C=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=A,k(_))return C+x;for(;6>C.length;)C="0"+C;x=C+x}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(var v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function N(w){return w.h==-1}t.l=function(w){return w=E(this,w),N(w)?-1:k(w)?0:1};function D(w){for(var v=w.g.length,_=[],x=0;x<v;x++)_[x]=~w.g[x];return new s(_,~w.h).add(m)}t.abs=function(){return N(this)?D(this):this},t.add=function(w){for(var v=Math.max(this.g.length,w.g.length),_=[],x=0,A=0;A<=v;A++){var C=x+(this.i(A)&65535)+(w.i(A)&65535),I=(C>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);x=I>>>16,C&=65535,I&=65535,_[A]=I<<16|C}return new s(_,_[_.length-1]&-2147483648?-1:0)};function E(w,v){return w.add(D(v))}t.j=function(w){if(k(this)||k(w))return p;if(N(this))return N(w)?D(this).j(D(w)):D(D(this).j(w));if(N(w))return D(this.j(D(w)));if(0>this.l(b)&&0>w.l(b))return u(this.m()*w.m());for(var v=this.g.length+w.g.length,_=[],x=0;x<2*v;x++)_[x]=0;for(x=0;x<this.g.length;x++)for(var A=0;A<w.g.length;A++){var C=this.i(x)>>>16,I=this.i(x)&65535,Et=w.i(A)>>>16,we=w.i(A)&65535;_[2*x+2*A]+=I*we,y(_,2*x+2*A),_[2*x+2*A+1]+=C*we,y(_,2*x+2*A+1),_[2*x+2*A+1]+=I*Et,y(_,2*x+2*A+1),_[2*x+2*A+2]+=C*Et,y(_,2*x+2*A+2)}for(x=0;x<v;x++)_[x]=_[2*x+1]<<16|_[2*x];for(x=v;x<2*v;x++)_[x]=0;return new s(_,0)};function y(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function T(w,v){this.g=w,this.h=v}function V(w,v){if(k(v))throw Error("division by zero");if(k(w))return new T(p,p);if(N(w))return v=V(D(w),v),new T(D(v.g),D(v.h));if(N(v))return v=V(w,D(v)),new T(D(v.g),v.h);if(30<w.g.length){if(N(w)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var _=m,x=v;0>=x.l(w);)_=j(_),x=j(x);var A=z(_,1),C=z(x,1);for(x=z(x,2),_=z(_,2);!k(x);){var I=C.add(x);0>=I.l(w)&&(A=A.add(_),C=I),x=z(x,1),_=z(_,1)}return v=E(w,A.j(v)),new T(A,v)}for(A=p;0<=w.l(v);){for(_=Math.max(1,Math.floor(w.m()/v.m())),x=Math.ceil(Math.log(_)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),C=u(_),I=C.j(v);N(I)||0<I.l(w);)_-=x,C=u(_),I=C.j(v);k(C)&&(C=m),A=A.add(C),w=E(w,I)}return new T(A,w)}t.A=function(w){return V(this,w).h},t.and=function(w){for(var v=Math.max(this.g.length,w.g.length),_=[],x=0;x<v;x++)_[x]=this.i(x)&w.i(x);return new s(_,this.h&w.h)},t.or=function(w){for(var v=Math.max(this.g.length,w.g.length),_=[],x=0;x<v;x++)_[x]=this.i(x)|w.i(x);return new s(_,this.h|w.h)},t.xor=function(w){for(var v=Math.max(this.g.length,w.g.length),_=[],x=0;x<v;x++)_[x]=this.i(x)^w.i(x);return new s(_,this.h^w.h)};function j(w){for(var v=w.g.length+1,_=[],x=0;x<v;x++)_[x]=w.i(x)<<1|w.i(x-1)>>>31;return new s(_,w.h)}function z(w,v){var _=v>>5;v%=32;for(var x=w.g.length-_,A=[],C=0;C<x;C++)A[C]=0<v?w.i(C+_)>>>v|w.i(C+_+1)<<32-v:w.i(C+_);return new s(A,w.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,tx=n,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=u,s.fromString=h,bi=s}).apply(typeof E_<"u"?E_:typeof self<"u"?self:typeof window<"u"?window:{});var Xl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rx,js,nx,Sc,Ff,ix,ox,sx;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,f){return a==Array.prototype||a==Object.prototype||(a[d]=f.value),a};function r(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xl=="object"&&Xl];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=r(this);function i(a,d){if(d)e:{var f=n;a=a.split(".");for(var g=0;g<a.length-1;g++){var R=a[g];if(!(R in f))break e;f=f[R]}a=a[a.length-1],g=f[a],d=d(g),d!=g&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}function o(a,d){a instanceof String&&(a+="");var f=0,g=!1,R={next:function(){if(!g&&f<a.length){var L=f++;return{value:d(L,a[L]),done:!1}}return g=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(a){return a||function(){return o(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},l=this||self;function c(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,f){return a.call.apply(a.bind,arguments)}function p(a,d,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,g),a.apply(d,R)}}return function(){return a.apply(d,arguments)}}function m(a,d,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,m.apply(null,arguments)}function b(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function k(a,d){function f(){}f.prototype=d.prototype,a.aa=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,R,L){for(var B=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)B[_e-2]=arguments[_e];return d.prototype[R].apply(g,B)}}function N(a){const d=a.length;if(0<d){const f=Array(d);for(let g=0;g<d;g++)f[g]=a[g];return f}return[]}function D(a,d){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const R=a.length||0,L=g.length||0;a.length=R+L;for(let B=0;B<L;B++)a[R+B]=g[B]}else a.push(g)}}class E{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function y(a){return/^[\s\xa0]*$/.test(a)}function T(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var j=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function z(a,d,f){for(const g in a)d.call(f,a[g],g,a)}function w(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function v(a){const d={};for(const f in a)d[f]=a[f];return d}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(a,d){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)a[f]=g[f];for(let L=0;L<_.length;L++)f=_[L],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function A(a){var d=1;a=a.split(":");const f=[];for(;0<d&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function C(a){l.setTimeout(()=>{throw a},0)}function I(){var a=J;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Et{constructor(){this.h=this.g=null}add(d,f){const g=we.get();g.set(d,f),this.h?this.h.next=g:this.g=g,this.h=g}}var we=new E(()=>new Ye,a=>a.reset());class Ye{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ot,H=!1,J=new Et,Z=()=>{const a=l.Promise.resolve(void 0);Ot=()=>{a.then(me)}};var me=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(f){C(f)}var d=we;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}H=!1};function ge(){this.s=this.s,this.C=this.C}ge.prototype.s=!1,ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var cr=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,d),l.removeEventListener("test",f,d)}catch{}return a}();function Xt(a,d){if(be.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(j){e:{try{V(d.nodeName);var R=!0;break e}catch{}R=!1}R||(d=null)}}else f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ur[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Xt.aa.h.call(this)}}k(Xt,be);var ur={2:"touch",3:"pen",4:"mouse"};Xt.prototype.h=function(){Xt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Jt="closure_listenable_"+(1e6*Math.random()|0),dl=0;function hl(a,d,f,g,R){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!g,this.ha=R,this.key=++dl,this.da=this.fa=!1}function Hi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Wi(a){this.src=a,this.g={},this.h=0}Wi.prototype.add=function(a,d,f,g,R){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var B=Gi(a,d,g,R);return-1<B?(d=a[B],f||(d.fa=!1)):(d=new hl(d,this.src,L,!!g,R),d.fa=f,a.push(d)),d};function Ki(a,d){var f=d.type;if(f in a.g){var g=a.g[f],R=Array.prototype.indexOf.call(g,d,void 0),L;(L=0<=R)&&Array.prototype.splice.call(g,R,1),L&&(Hi(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Gi(a,d,f,g){for(var R=0;R<a.length;++R){var L=a[R];if(!L.da&&L.listener==d&&L.capture==!!f&&L.ha==g)return R}return-1}var as="closure_lm_"+(1e6*Math.random()|0),ls={};function hn(a,d,f,g,R){if(Array.isArray(d)){for(var L=0;L<d.length;L++)hn(a,d[L],f,g,R);return null}return f=vl(f),a&&a[Jt]?a.K(d,f,u(g)?!!g.capture:!1,R):pd(a,d,f,!1,g,R)}function pd(a,d,f,g,R,L){if(!d)throw Error("Invalid event type");var B=u(R)?!!R.capture:!!R,_e=us(a);if(_e||(a[as]=_e=new Wi(a)),f=_e.add(d,f,g,B,L),f.proxy)return f;if(g=md(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)cr||(R=B),R===void 0&&(R=!1),a.addEventListener(d.toString(),g,R);else if(a.attachEvent)a.attachEvent(pl(d.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function md(){function a(f){return d.call(a.src,a.listener,f)}const d=ml;return a}function fl(a,d,f,g,R){if(Array.isArray(d))for(var L=0;L<d.length;L++)fl(a,d[L],f,g,R);else g=u(g)?!!g.capture:!!g,f=vl(f),a&&a[Jt]?(a=a.i,d=String(d).toString(),d in a.g&&(L=a.g[d],f=Gi(L,f,g,R),-1<f&&(Hi(L[f]),Array.prototype.splice.call(L,f,1),L.length==0&&(delete a.g[d],a.h--)))):a&&(a=us(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Gi(d,f,g,R)),(f=-1<a?d[a]:null)&&cs(f))}function cs(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[Jt])Ki(d.i,a);else{var f=a.type,g=a.proxy;d.removeEventListener?d.removeEventListener(f,g,a.capture):d.detachEvent?d.detachEvent(pl(f),g):d.addListener&&d.removeListener&&d.removeListener(g),(f=us(d))?(Ki(f,a),f.h==0&&(f.src=null,d[as]=null)):Hi(a)}}}function pl(a){return a in ls?ls[a]:ls[a]="on"+a}function ml(a,d){if(a.da)a=!0;else{d=new Xt(d,this);var f=a.listener,g=a.ha||a.src;a.fa&&cs(a),a=f.call(g,d)}return a}function us(a){return a=a[as],a instanceof Wi?a:null}var gl="__closure_events_fn_"+(1e9*Math.random()>>>0);function vl(a){return typeof a=="function"?a:(a[gl]||(a[gl]=function(d){return a.handleEvent(d)}),a[gl])}function O(){ge.call(this),this.i=new Wi(this),this.M=this,this.F=null}k(O,ge),O.prototype[Jt]=!0,O.prototype.removeEventListener=function(a,d,f,g){fl(this,a,d,f,g)};function K(a,d){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=d.type||d,typeof d=="string")d=new be(d,a);else if(d instanceof be)d.target=d.target||a;else{var R=d;d=new be(g,a),x(d,R)}if(R=!0,f)for(var L=f.length-1;0<=L;L--){var B=d.g=f[L];R=oe(B,g,!0,d)&&R}if(B=d.g=a,R=oe(B,g,!0,d)&&R,R=oe(B,g,!1,d)&&R,f)for(L=0;L<f.length;L++)B=d.g=f[L],R=oe(B,g,!1,d)&&R}O.prototype.N=function(){if(O.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var f=a.g[d],g=0;g<f.length;g++)Hi(f[g]);delete a.g[d],a.h--}}this.F=null},O.prototype.K=function(a,d,f,g){return this.i.add(String(a),d,!1,f,g)},O.prototype.L=function(a,d,f,g){return this.i.add(String(a),d,!0,f,g)};function oe(a,d,f,g){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var R=!0,L=0;L<d.length;++L){var B=d[L];if(B&&!B.da&&B.capture==f){var _e=B.listener,et=B.ha||B.src;B.fa&&Ki(a.i,B),R=_e.call(et,g)!==!1&&R}}return R&&!g.defaultPrevented}function Ut(a,d,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function xe(a){a.g=Ut(()=>{a.g=null,a.i&&(a.i=!1,xe(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class ti extends ge{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:xe(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jt(a){ge.call(this),this.h=a,this.g={}}k(jt,ge);var De=[];function Fg(a){z(a.g,function(d,f){this.g.hasOwnProperty(f)&&cs(d)},a),a.g={}}jt.prototype.N=function(){jt.aa.N.call(this),Fg(this)},jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gd=l.JSON.stringify,pT=l.JSON.parse,mT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function vd(){}vd.prototype.h=null;function Ug(a){return a.h||(a.h=a.i())}function jg(){}var ds={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function yd(){be.call(this,"d")}k(yd,be);function _d(){be.call(this,"c")}k(_d,be);var ri={},zg=null;function yl(){return zg=zg||new O}ri.La="serverreachability";function Bg(a){be.call(this,ri.La,a)}k(Bg,be);function hs(a){const d=yl();K(d,new Bg(d))}ri.STAT_EVENT="statevent";function qg(a,d){be.call(this,ri.STAT_EVENT,a),this.stat=d}k(qg,be);function xt(a){const d=yl();K(d,new qg(d,a))}ri.Ma="timingevent";function Hg(a,d){be.call(this,ri.Ma,a),this.size=d}k(Hg,be);function fs(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function ps(){this.g=!0}ps.prototype.xa=function(){this.g=!1};function gT(a,d,f,g,R,L){a.info(function(){if(a.g)if(L)for(var B="",_e=L.split("&"),et=0;et<_e.length;et++){var he=_e[et].split("=");if(1<he.length){var ut=he[0];he=he[1];var dt=ut.split("_");B=2<=dt.length&&dt[1]=="type"?B+(ut+"="+he+"&"):B+(ut+"=redacted&")}}else B=null;else B=L;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+d+`
`+f+`
`+B})}function vT(a,d,f,g,R,L,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+d+`
`+f+`
`+L+" "+B})}function Qi(a,d,f,g){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+_T(a,f)+(g?" "+g:"")})}function yT(a,d){a.info(function(){return"TIMEOUT: "+d})}ps.prototype.info=function(){};function _T(a,d){if(!a.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var R=g[1];if(Array.isArray(R)&&!(1>R.length)){var L=R[0];if(L!="noop"&&L!="stop"&&L!="close")for(var B=1;B<R.length;B++)R[B]=""}}}}return gd(f)}catch{return d}}var _l={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wd;function wl(){}k(wl,vd),wl.prototype.g=function(){return new XMLHttpRequest},wl.prototype.i=function(){return{}},wd=new wl;function fn(a,d,f,g){this.j=a,this.i=d,this.l=f,this.R=g||1,this.U=new jt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Kg}function Kg(){this.i=null,this.g="",this.h=!1}var Gg={},bd={};function Ed(a,d,f){a.L=1,a.v=Il(Vr(d)),a.m=f,a.P=!0,Qg(a,null)}function Qg(a,d){a.F=Date.now(),bl(a),a.A=Vr(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),cv(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Kg,a.g=Sv(a.j,f?d:null,!a.m),0<a.O&&(a.M=new ti(m(a.Y,a,a.g),a.O)),d=a.U,f=a.g,g=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(De[0]=R.toString()),R=De);for(var L=0;L<R.length;L++){var B=hn(f,R[L],g||d.handleEvent,!1,d.h||d);if(!B)break;d.g[B.key]=B}d=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),hs(),gT(a.i,a.u,a.A,a.l,a.R,a.m)}fn.prototype.ca=function(a){a=a.target;const d=this.M;d&&Mr(a)==3?d.j():this.Y(a)},fn.prototype.Y=function(a){try{if(a==this.g)e:{const dt=Mr(this.g);var d=this.g.Ba();const Ji=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||gv(this.g)))){this.J||dt!=4||d==7||(d==8||0>=Ji?hs(3):hs(2)),xd(this);var f=this.g.Z();this.X=f;t:if(Yg(this)){var g=gv(this.g);a="";var R=g.length,L=Mr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ni(this),ms(this);var B="";break t}this.h.i=new l.TextDecoder}for(d=0;d<R;d++)this.h.h=!0,a+=this.h.i.decode(g[d],{stream:!(L&&d==R-1)});g.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,vT(this.i,this.u,this.A,this.l,this.R,dt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var _e,et=this.g;if((_e=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(_e)){var he=_e;break t}}he=null}if(f=he)Qi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Id(this,f);else{this.o=!1,this.s=3,xt(12),ni(this),ms(this);break e}}if(this.P){f=!0;let dr;for(;!this.J&&this.C<B.length;)if(dr=wT(this,B),dr==bd){dt==4&&(this.s=4,xt(14),f=!1),Qi(this.i,this.l,null,"[Incomplete Response]");break}else if(dr==Gg){this.s=4,xt(15),Qi(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else Qi(this.i,this.l,dr,null),Id(this,dr);if(Yg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||B.length!=0||this.h.h||(this.s=1,xt(16),f=!1),this.o=this.o&&f,!f)Qi(this.i,this.l,B,"[Invalid Chunked Response]"),ni(this),ms(this);else if(0<B.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Rd(ut),ut.M=!0,xt(11))}}else Qi(this.i,this.l,B,null),Id(this,B);dt==4&&ni(this),this.o&&!this.J&&(dt==4?xv(this.j,this):(this.o=!1,bl(this)))}else MT(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,xt(12)):(this.s=0,xt(13)),ni(this),ms(this)}}}catch{}finally{}};function Yg(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function wT(a,d){var f=a.C,g=d.indexOf(`
`,f);return g==-1?bd:(f=Number(d.substring(f,g)),isNaN(f)?Gg:(g+=1,g+f>d.length?bd:(d=d.slice(g,g+f),a.C=g+f,d)))}fn.prototype.cancel=function(){this.J=!0,ni(this)};function bl(a){a.S=Date.now()+a.I,Xg(a,a.I)}function Xg(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=fs(m(a.ba,a),d)}function xd(a){a.B&&(l.clearTimeout(a.B),a.B=null)}fn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(yT(this.i,this.A),this.L!=2&&(hs(),xt(17)),ni(this),this.s=2,ms(this)):Xg(this,this.S-a)};function ms(a){a.j.G==0||a.J||xv(a.j,a)}function ni(a){xd(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Fg(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function Id(a,d){try{var f=a.j;if(f.G!=0&&(f.g==a||Td(f.h,a))){if(!a.K&&Td(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Rl(f),kl(f);else break e;Cd(f),xt(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=fs(m(f.Za,f),6e3));if(1>=ev(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else oi(f,11)}else if((a.K||f.g==a)&&Rl(f),!y(d))for(R=f.Da.g.parse(d),d=0;d<R.length;d++){let he=R[d];if(f.T=he[0],he=he[1],f.G==2)if(he[0]=="c"){f.K=he[1],f.ia=he[2];const ut=he[3];ut!=null&&(f.la=ut,f.j.info("VER="+f.la));const dt=he[4];dt!=null&&(f.Aa=dt,f.j.info("SVER="+f.Aa));const Ji=he[5];Ji!=null&&typeof Ji=="number"&&0<Ji&&(g=1.5*Ji,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const dr=a.g;if(dr){const Nl=dr.g?dr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Nl){var L=g.h;L.g||Nl.indexOf("spdy")==-1&&Nl.indexOf("quic")==-1&&Nl.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Ad(L,L.h),L.h=null))}if(g.D){const Pd=dr.g?dr.g.getResponseHeader("X-HTTP-Session-Id"):null;Pd&&(g.ya=Pd,Ie(g.I,g.D,Pd))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var B=a;if(g.qa=Av(g,g.J?g.ia:null,g.W),B.K){tv(g.h,B);var _e=B,et=g.L;et&&(_e.I=et),_e.B&&(xd(_e),bl(_e)),g.g=B}else bv(g);0<f.i.length&&Cl(f)}else he[0]!="stop"&&he[0]!="close"||oi(f,7);else f.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?oi(f,7):kd(f):he[0]!="noop"&&f.l&&f.l.ta(he),f.v=0)}}hs(4)}catch{}}var bT=class{constructor(a,d){this.g=a,this.map=d}};function Jg(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ev(a){return a.h?1:a.g?a.g.size:0}function Td(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Ad(a,d){a.g?a.g.add(d):a.h=d}function tv(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Jg.prototype.cancel=function(){if(this.i=rv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function rv(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.D);return d}return N(a.i)}function ET(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var d=[],f=a.length,g=0;g<f;g++)d.push(a[g]);return d}d=[],f=0;for(g in a)d[f++]=a[g];return d}function xT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var d=[];a=a.length;for(var f=0;f<a;f++)d.push(f);return d}d=[],f=0;for(const g in a)d[f++]=g;return d}}}function nv(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var f=xT(a),g=ET(a),R=g.length,L=0;L<R;L++)d.call(void 0,g[L],f&&f[L],a)}var iv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function IT(a,d){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),R=null;if(0<=g){var L=a[f].substring(0,g);R=a[f].substring(g+1)}else L=a[f];d(L,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function ii(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ii){this.h=a.h,El(this,a.j),this.o=a.o,this.g=a.g,xl(this,a.s),this.l=a.l;var d=a.i,f=new ys;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),ov(this,f),this.m=a.m}else a&&(d=String(a).match(iv))?(this.h=!1,El(this,d[1]||"",!0),this.o=gs(d[2]||""),this.g=gs(d[3]||"",!0),xl(this,d[4]),this.l=gs(d[5]||"",!0),ov(this,d[6]||"",!0),this.m=gs(d[7]||"")):(this.h=!1,this.i=new ys(null,this.h))}ii.prototype.toString=function(){var a=[],d=this.j;d&&a.push(vs(d,sv,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(vs(d,sv,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(vs(f,f.charAt(0)=="/"?ST:AT,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",vs(f,CT)),a.join("")};function Vr(a){return new ii(a)}function El(a,d,f){a.j=f?gs(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function xl(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function ov(a,d,f){d instanceof ys?(a.i=d,RT(a.i,a.h)):(f||(d=vs(d,kT)),a.i=new ys(d,a.h))}function Ie(a,d,f){a.i.set(d,f)}function Il(a){return Ie(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function gs(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function vs(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,TT),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function TT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var sv=/[#\/\?@]/g,AT=/[#\?:]/g,ST=/[#\?]/g,kT=/[#\?@]/g,CT=/#/g;function ys(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function pn(a){a.g||(a.g=new Map,a.h=0,a.i&&IT(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}t=ys.prototype,t.add=function(a,d){pn(this),this.i=null,a=Yi(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function av(a,d){pn(a),d=Yi(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function lv(a,d){return pn(a),d=Yi(a,d),a.g.has(d)}t.forEach=function(a,d){pn(this),this.g.forEach(function(f,g){f.forEach(function(R){a.call(d,R,g,this)},this)},this)},t.na=function(){pn(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let g=0;g<d.length;g++){const R=a[g];for(let L=0;L<R.length;L++)f.push(d[g])}return f},t.V=function(a){pn(this);let d=[];if(typeof a=="string")lv(this,a)&&(d=d.concat(this.g.get(Yi(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)d=d.concat(a[f])}return d},t.set=function(a,d){return pn(this),this.i=null,a=Yi(this,a),lv(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function cv(a,d,f){av(a,d),0<f.length&&(a.i=null,a.g.set(Yi(a,d),N(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var g=d[f];const L=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var R=L;B[g]!==""&&(R+="="+encodeURIComponent(String(B[g]))),a.push(R)}}return this.i=a.join("&")};function Yi(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function RT(a,d){d&&!a.j&&(pn(a),a.i=null,a.g.forEach(function(f,g){var R=g.toLowerCase();g!=R&&(av(this,g),cv(this,R,f))},a)),a.j=d}function PT(a,d){const f=new ps;if(l.Image){const g=new Image;g.onload=b(mn,f,"TestLoadImage: loaded",!0,d,g),g.onerror=b(mn,f,"TestLoadImage: error",!1,d,g),g.onabort=b(mn,f,"TestLoadImage: abort",!1,d,g),g.ontimeout=b(mn,f,"TestLoadImage: timeout",!1,d,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else d(!1)}function NT(a,d){const f=new ps,g=new AbortController,R=setTimeout(()=>{g.abort(),mn(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:g.signal}).then(L=>{clearTimeout(R),L.ok?mn(f,"TestPingServer: ok",!0,d):mn(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(R),mn(f,"TestPingServer: error",!1,d)})}function mn(a,d,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function OT(){this.g=new mT}function DT(a,d,f){const g=f||"";try{nv(a,function(R,L){let B=R;u(R)&&(B=gd(R)),d.push(g+L+"="+encodeURIComponent(B))})}catch(R){throw d.push(g+"type="+encodeURIComponent("_badmap")),R}}function Tl(a){this.l=a.Ub||null,this.j=a.eb||!1}k(Tl,vd),Tl.prototype.g=function(){return new Al(this.l,this.j)},Tl.prototype.i=function(a){return function(){return a}}({});function Al(a,d){O.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Al,O),t=Al.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,ws(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_s(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ws(this)),this.g&&(this.readyState=3,ws(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;uv(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function uv(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?_s(this):ws(this),this.readyState==3&&uv(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,_s(this))},t.Qa=function(a){this.g&&(this.response=a,_s(this))},t.ga=function(){this.g&&_s(this)};function _s(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ws(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function ws(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Al.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function dv(a){let d="";return z(a,function(f,g){d+=g,d+=":",d+=f,d+=`\r
`}),d}function Sd(a,d,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=dv(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ie(a,d,f))}function Le(a){O.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Le,O);var LT=/^https?$/i,VT=["POST","PUT"];t=Le.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wd.g(),this.v=this.o?Ug(this.o):Ug(wd),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(L){hv(this,L);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const L of g.keys())f.set(L,g.get(L));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(VT,d,void 0))||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,B]of f)this.g.setRequestHeader(L,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{mv(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){hv(this,L)}};function hv(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,fv(a),Sl(a)}function fv(a){a.A||(a.A=!0,K(a,"complete"),K(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,K(this,"complete"),K(this,"abort"),Sl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Sl(this,!0)),Le.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?pv(this):this.bb())},t.bb=function(){pv(this)};function pv(a){if(a.h&&typeof s<"u"&&(!a.v[1]||Mr(a)!=4||a.Z()!=2)){if(a.u&&Mr(a)==4)Ut(a.Ea,0,a);else if(K(a,"readystatechange"),Mr(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var g;if(g=B===0){var R=String(a.D).match(iv)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),g=!LT.test(R?R.toLowerCase():"")}f=g}if(f)K(a,"complete"),K(a,"success");else{a.m=6;try{var L=2<Mr(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",fv(a)}}finally{Sl(a)}}}}function Sl(a,d){if(a.g){mv(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||K(a,"ready");try{f.onreadystatechange=g}catch{}}}function mv(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Mr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Mr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),pT(d)}};function gv(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function MT(a){const d={};a=(a.g&&2<=Mr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var f=A(a[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=d[R]||[];d[R]=L,L.push(f)}w(d,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bs(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function vv(a){this.Aa=0,this.i=[],this.j=new ps,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bs("baseRetryDelayMs",5e3,a),this.cb=bs("retryDelaySeedMs",1e4,a),this.Wa=bs("forwardChannelMaxRetries",2,a),this.wa=bs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Jg(a&&a.concurrentRequestLimit),this.Da=new OT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=vv.prototype,t.la=8,t.G=1,t.connect=function(a,d,f,g){xt(0),this.W=a,this.H=d||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Av(this,null,this.W),Cl(this)};function kd(a){if(yv(a),a.G==3){var d=a.U++,f=Vr(a.I);if(Ie(f,"SID",a.K),Ie(f,"RID",d),Ie(f,"TYPE","terminate"),Es(a,f),d=new fn(a,a.j,d),d.L=2,d.v=Il(Vr(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=d.v,f=!0),f||(d.g=Sv(d.j,null),d.g.ea(d.v)),d.F=Date.now(),bl(d)}Tv(a)}function kl(a){a.g&&(Rd(a),a.g.cancel(),a.g=null)}function yv(a){kl(a),a.u&&(l.clearTimeout(a.u),a.u=null),Rl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Cl(a){if(!Zg(a.h)&&!a.s){a.s=!0;var d=a.Ga;Ot||Z(),H||(Ot(),H=!0),J.add(d,a),a.B=0}}function $T(a,d){return ev(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=fs(m(a.Ga,a,d),Iv(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new fn(this,this.j,a);let L=this.o;if(this.S&&(L?(L=v(L),x(L,this.S)):L=this.S),this.m!==null||this.O||(R.H=L,L=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=wv(this,R,d),f=Vr(this.I),Ie(f,"RID",a),Ie(f,"CVER",22),this.D&&Ie(f,"X-HTTP-Session-Id",this.D),Es(this,f),L&&(this.O?d="headers="+encodeURIComponent(String(dv(L)))+"&"+d:this.m&&Sd(f,this.m,L)),Ad(this.h,R),this.Ua&&Ie(f,"TYPE","init"),this.P?(Ie(f,"$req",d),Ie(f,"SID","null"),R.T=!0,Ed(R,f,null)):Ed(R,f,d),this.G=2}}else this.G==3&&(a?_v(this,a):this.i.length==0||Zg(this.h)||_v(this))};function _v(a,d){var f;d?f=d.l:f=a.U++;const g=Vr(a.I);Ie(g,"SID",a.K),Ie(g,"RID",f),Ie(g,"AID",a.T),Es(a,g),a.m&&a.o&&Sd(g,a.m,a.o),f=new fn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),d&&(a.i=d.D.concat(a.i)),d=wv(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ad(a.h,f),Ed(f,g,d)}function Es(a,d){a.H&&z(a.H,function(f,g){Ie(d,g,f)}),a.l&&nv({},function(f,g){Ie(d,g,f)})}function wv(a,d,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var R=a.i;let L=-1;for(;;){const B=["count="+f];L==-1?0<f?(L=R[0].g,B.push("ofs="+L)):L=0:B.push("ofs="+L);let _e=!0;for(let et=0;et<f;et++){let he=R[et].g;const ut=R[et].map;if(he-=L,0>he)L=Math.max(0,R[et].g-100),_e=!1;else try{DT(ut,B,"req"+he+"_")}catch{g&&g(ut)}}if(_e){g=B.join("&");break e}}}return a=a.i.splice(0,f),d.D=a,g}function bv(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Ot||Z(),H||(Ot(),H=!0),J.add(d,a),a.v=0}}function Cd(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=fs(m(a.Fa,a),Iv(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ev(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=fs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xt(10),kl(this),Ev(this))};function Rd(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ev(a){a.g=new fn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Vr(a.qa);Ie(d,"RID","rpc"),Ie(d,"SID",a.K),Ie(d,"AID",a.T),Ie(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ie(d,"TO",a.ja),Ie(d,"TYPE","xmlhttp"),Es(a,d),a.m&&a.o&&Sd(d,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Il(Vr(d)),f.m=null,f.P=!0,Qg(f,a)}t.Za=function(){this.C!=null&&(this.C=null,kl(this),Cd(this),xt(19))};function Rl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function xv(a,d){var f=null;if(a.g==d){Rl(a),Rd(a),a.g=null;var g=2}else if(Td(a.h,d))f=d.D,tv(a.h,d),g=1;else return;if(a.G!=0){if(d.o)if(g==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var R=a.B;g=yl(),K(g,new Hg(g,f)),Cl(a)}else bv(a);else if(R=d.s,R==3||R==0&&0<d.X||!(g==1&&$T(a,d)||g==2&&Cd(a)))switch(f&&0<f.length&&(d=a.h,d.i=d.i.concat(f)),R){case 1:oi(a,5);break;case 4:oi(a,10);break;case 3:oi(a,6);break;default:oi(a,2)}}}function Iv(a,d){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*d}function oi(a,d){if(a.j.info("Error code "+d),d==2){var f=m(a.fb,a),g=a.Xa;const R=!g;g=new ii(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||El(g,"https"),Il(g),R?PT(g.toString(),f):NT(g.toString(),f)}else xt(2);a.G=0,a.l&&a.l.sa(d),Tv(a),yv(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),xt(2)):(this.j.info("Failed to ping google.com"),xt(1))};function Tv(a){if(a.G=0,a.ka=[],a.l){const d=rv(a.h);(d.length!=0||a.i.length!=0)&&(D(a.ka,d),D(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Av(a,d,f){var g=f instanceof ii?Vr(f):new ii(f);if(g.g!="")d&&(g.g=d+"."+g.g),xl(g,g.s);else{var R=l.location;g=R.protocol,d=d?d+"."+R.hostname:R.hostname,R=+R.port;var L=new ii(null);g&&El(L,g),d&&(L.g=d),R&&xl(L,R),f&&(L.l=f),g=L}return f=a.D,d=a.ya,f&&d&&Ie(g,f,d),Ie(g,"VER",a.la),Es(a,g),g}function Sv(a,d,f){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Le(new Tl({eb:f})):new Le(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function kv(){}t=kv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Pl(){}Pl.prototype.g=function(a,d){return new zt(a,d)};function zt(a,d){O.call(this),this.g=new vv(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!y(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!y(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Xi(this)}k(zt,O),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){kd(this.g)},zt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=gd(a),a=f);d.i.push(new bT(d.Ya++,a)),d.G==3&&Cl(d)},zt.prototype.N=function(){this.g.l=null,delete this.j,kd(this.g),delete this.g,zt.aa.N.call(this)};function Cv(a){yd.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}k(Cv,yd);function Rv(){_d.call(this),this.status=1}k(Rv,_d);function Xi(a){this.g=a}k(Xi,kv),Xi.prototype.ua=function(){K(this.g,"a")},Xi.prototype.ta=function(a){K(this.g,new Cv(a))},Xi.prototype.sa=function(a){K(this.g,new Rv)},Xi.prototype.ra=function(){K(this.g,"b")},Pl.prototype.createWebChannel=Pl.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,sx=function(){return new Pl},ox=function(){return yl()},ix=ri,Ff={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_l.NO_ERROR=0,_l.TIMEOUT=8,_l.HTTP_ERROR=6,Sc=_l,Wg.COMPLETE="complete",nx=Wg,jg.EventType=ds,ds.OPEN="a",ds.CLOSE="b",ds.ERROR="c",ds.MESSAGE="d",O.prototype.listen=O.prototype.K,js=jg,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha,rx=Le}).apply(typeof Xl<"u"?Xl:typeof self<"u"?self:typeof window<"u"?window:{});const x_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let es="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new Im("@firebase/firestore");function Ps(){return Pi.logLevel}function X(t,...e){if(Pi.logLevel<=ce.DEBUG){const r=e.map($m);Pi.debug(`Firestore (${es}): ${t}`,...r)}}function sn(t,...e){if(Pi.logLevel<=ce.ERROR){const r=e.map($m);Pi.error(`Firestore (${es}): ${t}`,...r)}}function Mo(t,...e){if(Pi.logLevel<=ce.WARN){const r=e.map($m);Pi.warn(`Firestore (${es}): ${t}`,...r)}}function $m(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function re(t="Unexpected state"){const e=`FIRESTORE (${es}) INTERNAL ASSERTION FAILED: `+t;throw sn(e),new Error(e)}function ye(t,e){t||re()}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends Lr{constructor(e,r){super(e,r),this.code=e,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class OP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,r){e.enqueueRetryable(()=>r(gt.UNAUTHENTICATED))}shutdown(){}}class DP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,r){this.changeListener=r,e.enqueueRetryable(()=>r(this.token.user))}shutdown(){this.changeListener=null}}class LP{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,r){ye(this.o===void 0);let n=this.i;const i=c=>this.i!==n?(n=this.i,r(c)):Promise.resolve();let o=new Ei;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ei,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const c=o;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ei)}},0),s()}getToken(){const e=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then(n=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(ye(typeof n.accessToken=="string"),new ax(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new gt(e)}}class VP{constructor(e,r,n){this.l=e,this.h=r,this.P=n,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class MP{constructor(e,r,n){this.l=e,this.h=r,this.P=n}getToken(){return Promise.resolve(new VP(this.l,this.h,this.P))}start(e,r){e.enqueueRetryable(()=>r(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $P{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,r){ye(this.o===void 0);const n=o=>{o.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,X("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?r(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>n(o))};const i=o=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(r=>r?(ye(typeof r.token=="string"),this.R=r.token,new $P(r.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),r=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(r);else for(let n=0;n<t;n++)r[n]=Math.floor(256*Math.random());return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=UP(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<r&&(n+=e.charAt(i[o]%e.length))}return n}}function fe(t,e){return t<e?-1:t>e?1:0}function $o(t,e,r){return t.length===e.length&&t.every((n,i)=>r(n,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,r){if(this.seconds=e,this.nanoseconds=r,r<0)throw new Q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new Q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(e<-62135596800)throw new Q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const r=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*r));return new Qe(r,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Qe(0,0))}static max(){return new ne(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,r,n){r===void 0?r=0:r>e.length&&re(),n===void 0?n=e.length-r:n>e.length-r&&re(),this.segments=e,this.offset=r,this.len=n}get length(){return this.len}isEqual(e){return Ra.comparator(this,e)===0}child(e){const r=this.segments.slice(this.offset,this.limit());return e instanceof Ra?e.forEach(n=>{r.push(n)}):r.push(e),this.construct(r)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}forEach(e){for(let r=this.offset,n=this.limit();r<n;r++)e(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,r){const n=Math.min(e.length,r.length);for(let i=0;i<n;i++){const o=e.get(i),s=r.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<r.length?-1:e.length>r.length?1:0}}class Ae extends Ra{construct(e,r,n){return new Ae(e,r,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const r=[];for(const n of e){if(n.indexOf("//")>=0)throw new Q(M.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);r.push(...n.split("/").filter(i=>i.length>0))}return new Ae(r)}static emptyPath(){return new Ae([])}}const jP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Ra{construct(e,r,n){return new it(e,r,n)}static isValidIdentifier(e){return jP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const r=[];let n="",i=0;const o=()=>{if(n.length===0)throw new Q(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(n),n=""};let s=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new Q(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Q(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,i+=2}else l==="`"?(s=!s,i++):l!=="."||s?(n+=l,i++):(o(),i++)}if(o(),s)throw new Q(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(r)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Ae.fromString(e))}static fromName(e){return new ee(Ae.fromString(e).popFirst(5))}static empty(){return new ee(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,r){return Ae.comparator(e.path,r.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Ae(e.slice()))}}function zP(t,e){const r=t.toTimestamp().seconds,n=t.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(n===1e9?new Qe(r+1,0):new Qe(r,n));return new Bn(i,ee.empty(),e)}function BP(t){return new Bn(t.readTime,t.key,-1)}class Bn{constructor(e,r,n){this.readTime=e,this.documentKey=r,this.largestBatchId=n}static min(){return new Bn(ne.min(),ee.empty(),-1)}static max(){return new Bn(ne.max(),ee.empty(),-1)}}function qP(t,e){let r=t.readTime.compareTo(e.readTime);return r!==0?r:(r=ee.comparator(t.documentKey,e.documentKey),r!==0?r:fe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function el(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==HP)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(r=>{this.isDone=!0,this.result=r,this.nextCallback&&this.nextCallback(r)},r=>{this.isDone=!0,this.error=r,this.catchCallback&&this.catchCallback(r)})}catch(e){return this.next(void 0,e)}next(e,r){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(r,this.error):this.wrapSuccess(e,this.result):new $((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(r,o).next(n,i)}})}toPromise(){return new Promise((e,r)=>{this.next(e,r)})}wrapUserFunction(e){try{const r=e();return r instanceof $?r:$.resolve(r)}catch(r){return $.reject(r)}}wrapSuccess(e,r){return e?this.wrapUserFunction(()=>e(r)):$.resolve(r)}wrapFailure(e,r){return e?this.wrapUserFunction(()=>e(r)):$.reject(r)}static resolve(e){return new $((r,n)=>{r(e)})}static reject(e){return new $((r,n)=>{n(e)})}static waitFor(e){return new $((r,n)=>{let i=0,o=0,s=!1;e.forEach(l=>{++i,l.next(()=>{++o,s&&o===i&&r()},c=>n(c))}),s=!0,o===i&&r()})}static or(e){let r=$.resolve(!1);for(const n of e)r=r.next(i=>i?$.resolve(i):n());return r}static forEach(e,r){const n=[];return e.forEach((i,o)=>{n.push(r.call(this,i,o))}),this.waitFor(n)}static mapArray(e,r){return new $((n,i)=>{const o=e.length,s=new Array(o);let l=0;for(let c=0;c<o;c++){const u=c;r(e[u]).next(h=>{s[u]=h,++l,l===o&&n(s)},h=>i(h))}})}static doWhile(e,r){return new $((n,i)=>{const o=()=>{e()===!0?r().next(()=>{o()},i):n()};o()})}}function KP(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}function tl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Fm{constructor(e,r){this.previousValue=e,r&&(r.sequenceNumberHandler=n=>this.ie(n),this.se=n=>r.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Fm.oe=-1;function qu(t){return t==null}function hu(t){return t===0&&1/t==-1/0}function GP(t){return typeof t=="number"&&Number.isInteger(t)&&!hu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t){let e=0;for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&e++;return e}function ji(t,e){for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&e(r,t[r])}function cx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,r){this.comparator=e,this.root=r||rt.EMPTY}insert(e,r){return new Oe(this.comparator,this.root.insert(e,r,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let r=this.root;for(;!r.isEmpty();){const n=this.comparator(e,r.key);if(n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}indexOf(e){let r=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return r+n.left.size;i<0?n=n.left:(r+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((r,n)=>(e(r,n),!1))}toString(){const e=[];return this.inorderTraversal((r,n)=>(e.push(`${r}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jl(this.root,e,this.comparator,!0)}}class Jl{constructor(e,r,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=r?n(e.key,r):1,r&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const r={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return r}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,r,n,i,o){this.key=e,this.value=r,this.color=n??rt.RED,this.left=i??rt.EMPTY,this.right=o??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,r,n,i,o){return new rt(e??this.key,r??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,r,n){let i=this;const o=n(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,r,n),null):o===0?i.copy(null,r,null,null,null):i.copy(null,null,null,null,i.right.insert(e,r,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,r){let n,i=this;if(r(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,r),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),r(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,r))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),r=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,r)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,r,n,i,o){return this}insert(e,r,n){return new rt(e,r)}remove(e,r){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((r,n)=>(e(r),!1))}forEachInRange(e,r){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;r(i.key)}}forEachWhile(e,r){let n;for(n=r!==void 0?this.data.getIteratorFrom(r):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const r=this.data.getIteratorFrom(e);return r.hasNext()?r.getNext().key:null}getIterator(){return new T_(this.data.getIterator())}getIteratorFrom(e){return new T_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let r=this;return r.size<e.size&&(r=e,e=this),e.forEach(n=>{r=r.add(n)}),r}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const r=this.data.getIterator(),n=e.data.getIterator();for(;r.hasNext();){const i=r.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(r=>{e.push(r)}),e}toString(){const e=[];return this.forEach(r=>e.push(r)),"SortedSet("+e.toString()+")"}copy(e){const r=new st(this.comparator);return r.data=e,r}}class T_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Ht([])}unionWith(e){let r=new st(it.comparator);for(const n of this.fields)r=r.add(n);for(const n of e)r=r.add(n);return new Ht(r.toArray())}covers(e){for(const r of this.fields)if(r.isPrefixOf(e))return!0;return!1}isEqual(e){return $o(this.fields,e.fields,(r,n)=>r.isEqual(n))}}/**
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
 */class ux extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const r=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ux("Invalid base64 string: "+o):o}}(e);return new lt(r)}static fromUint8Array(e){const r=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new lt(r)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(r){return btoa(r)}(this.binaryString)}toUint8Array(){return function(r){const n=new Uint8Array(r.length);for(let i=0;i<r.length;i++)n[i]=r.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const QP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qn(t){if(ye(!!t),typeof t=="string"){let e=0;const r=QP.exec(t);if(ye(!!r),r[1]){let i=r[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(t);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ni(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t){var e,r;return((r=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||r===void 0?void 0:r.stringValue)==="server_timestamp"}function jm(t){const e=t.mapValue.fields.__previous_value__;return Um(e)?jm(e):e}function Pa(t){const e=qn(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e,r,n,i,o,s,l,c,u){this.databaseId=e,this.appId=r,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class Na{constructor(e,r){this.projectId=e,this.database=r||"(default)"}static empty(){return new Na("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Na&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl={mapValue:{}};function Oi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Um(t)?4:JP(t)?9007199254740991:XP(t)?10:11:re()}function Dr(t,e){if(t===e)return!0;const r=Oi(t);if(r!==Oi(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Pa(t).isEqual(Pa(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=qn(i.timestampValue),l=qn(o.timestampValue);return s.seconds===l.seconds&&s.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return Ni(i.bytesValue).isEqual(Ni(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return je(i.geoPointValue.latitude)===je(o.geoPointValue.latitude)&&je(i.geoPointValue.longitude)===je(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return je(i.integerValue)===je(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=je(i.doubleValue),l=je(o.doubleValue);return s===l?hu(s)===hu(l):isNaN(s)&&isNaN(l)}return!1}(t,e);case 9:return $o(t.arrayValue.values||[],e.arrayValue.values||[],Dr);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},l=o.mapValue.fields||{};if(I_(s)!==I_(l))return!1;for(const c in s)if(s.hasOwnProperty(c)&&(l[c]===void 0||!Dr(s[c],l[c])))return!1;return!0}(t,e);default:return re()}}function Oa(t,e){return(t.values||[]).find(r=>Dr(r,e))!==void 0}function Fo(t,e){if(t===e)return 0;const r=Oi(t),n=Oi(e);if(r!==n)return fe(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(o,s){const l=je(o.integerValue||o.doubleValue),c=je(s.integerValue||s.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return A_(t.timestampValue,e.timestampValue);case 4:return A_(Pa(t),Pa(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(o,s){const l=Ni(o),c=Ni(s);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const l=o.split("/"),c=s.split("/");for(let u=0;u<l.length&&u<c.length;u++){const h=fe(l[u],c[u]);if(h!==0)return h}return fe(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const l=fe(je(o.latitude),je(s.latitude));return l!==0?l:fe(je(o.longitude),je(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return S_(t.arrayValue,e.arrayValue);case 10:return function(o,s){var l,c,u,h;const p=o.fields||{},m=s.fields||{},b=(l=p.value)===null||l===void 0?void 0:l.arrayValue,k=(c=m.value)===null||c===void 0?void 0:c.arrayValue,N=fe(((u=b==null?void 0:b.values)===null||u===void 0?void 0:u.length)||0,((h=k==null?void 0:k.values)===null||h===void 0?void 0:h.length)||0);return N!==0?N:S_(b,k)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===Zl.mapValue&&s===Zl.mapValue)return 0;if(o===Zl.mapValue)return 1;if(s===Zl.mapValue)return-1;const l=o.fields||{},c=Object.keys(l),u=s.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let p=0;p<c.length&&p<h.length;++p){const m=fe(c[p],h[p]);if(m!==0)return m;const b=Fo(l[c[p]],u[h[p]]);if(b!==0)return b}return fe(c.length,h.length)}(t.mapValue,e.mapValue);default:throw re()}}function A_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const r=qn(t),n=qn(e),i=fe(r.seconds,n.seconds);return i!==0?i:fe(r.nanos,n.nanos)}function S_(t,e){const r=t.values||[],n=e.values||[];for(let i=0;i<r.length&&i<n.length;++i){const o=Fo(r[i],n[i]);if(o)return o}return fe(r.length,n.length)}function Uo(t){return Uf(t)}function Uf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const n=qn(r);return`time(${n.seconds},${n.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(r){return Ni(r).toBase64()}(t.bytesValue):"referenceValue"in t?function(r){return ee.fromName(r).toString()}(t.referenceValue):"geoPointValue"in t?function(r){return`geo(${r.latitude},${r.longitude})`}(t.geoPointValue):"arrayValue"in t?function(r){let n="[",i=!0;for(const o of r.values||[])i?i=!1:n+=",",n+=Uf(o);return n+"]"}(t.arrayValue):"mapValue"in t?function(r){const n=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const s of n)o?o=!1:i+=",",i+=`${s}:${Uf(r.fields[s])}`;return i+"}"}(t.mapValue):re()}function k_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function jf(t){return!!t&&"integerValue"in t}function zm(t){return!!t&&"arrayValue"in t}function C_(t){return!!t&&"nullValue"in t}function R_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function kc(t){return!!t&&"mapValue"in t}function XP(t){var e,r;return((r=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||r===void 0?void 0:r.stringValue)==="__vector__"}function ra(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ji(t.mapValue.fields,(r,n)=>e.mapValue.fields[r]=ra(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let r=0;r<(t.arrayValue.values||[]).length;++r)e.arrayValue.values[r]=ra(t.arrayValue.values[r]);return e}return Object.assign({},t)}function JP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let r=this.value;for(let n=0;n<e.length-1;++n)if(r=(r.mapValue.fields||{})[e.get(n)],!kc(r))return null;return r=(r.mapValue.fields||{})[e.lastSegment()],r||null}}set(e,r){this.getFieldsMap(e.popLast())[e.lastSegment()]=ra(r)}setAll(e){let r=it.emptyPath(),n={},i=[];e.forEach((s,l)=>{if(!r.isImmediateParentOf(l)){const c=this.getFieldsMap(r);this.applyChanges(c,n,i),n={},i=[],r=l.popLast()}s?n[l.lastSegment()]=ra(s):i.push(l.lastSegment())});const o=this.getFieldsMap(r);this.applyChanges(o,n,i)}delete(e){const r=this.field(e.popLast());kc(r)&&r.mapValue.fields&&delete r.mapValue.fields[e.lastSegment()]}isEqual(e){return Dr(this.value,e.value)}getFieldsMap(e){let r=this.value;r.mapValue.fields||(r.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=r.mapValue.fields[e.get(n)];kc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},r.mapValue.fields[e.get(n)]=i),r=i}return r.mapValue.fields}applyChanges(e,r,n){ji(r,(i,o)=>e[i]=o);for(const i of n)delete e[i]}clone(){return new Lt(ra(this.value))}}function dx(t){const e=[];return ji(t.fields,(r,n)=>{const i=new it([r]);if(kc(n)){const o=dx(n.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new Ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,r,n,i,o,s,l){this.key=e,this.documentType=r,this.version=n,this.readTime=i,this.createTime=o,this.data=s,this.documentState=l}static newInvalidDocument(e){return new yt(e,0,ne.min(),ne.min(),ne.min(),Lt.empty(),0)}static newFoundDocument(e,r,n,i){return new yt(e,1,r,ne.min(),n,i,0)}static newNoDocument(e,r){return new yt(e,2,r,ne.min(),ne.min(),Lt.empty(),0)}static newUnknownDocument(e,r){return new yt(e,3,r,ne.min(),ne.min(),Lt.empty(),2)}convertToFoundDocument(e,r){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=r,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fu{constructor(e,r){this.position=e,this.inclusive=r}}function P_(t,e,r){let n=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?n=ee.comparator(ee.fromName(s.referenceValue),r.key):n=Fo(s,r.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function N_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let r=0;r<t.position.length;r++)if(!Dr(t.position[r],e.position[r]))return!1;return!0}/**
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
 */class Da{constructor(e,r="asc"){this.field=e,this.dir=r}}function ZP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class hx{}class We extends hx{constructor(e,r,n){super(),this.field=e,this.op=r,this.value=n}static create(e,r,n){return e.isKeyField()?r==="in"||r==="not-in"?this.createKeyFieldInFilter(e,r,n):new tN(e,r,n):r==="array-contains"?new iN(e,n):r==="in"?new oN(e,n):r==="not-in"?new sN(e,n):r==="array-contains-any"?new aN(e,n):new We(e,r,n)}static createKeyFieldInFilter(e,r,n){return r==="in"?new rN(e,n):new nN(e,n)}matches(e){const r=e.data.field(this.field);return this.op==="!="?r!==null&&this.matchesComparison(Fo(r,this.value)):r!==null&&Oi(this.value)===Oi(r)&&this.matchesComparison(Fo(r,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Er extends hx{constructor(e,r){super(),this.filters=e,this.op=r,this.ae=null}static create(e,r){return new Er(e,r)}matches(e){return fx(this)?this.filters.find(r=>!r.matches(e))===void 0:this.filters.find(r=>r.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,r)=>e.concat(r.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function fx(t){return t.op==="and"}function px(t){return eN(t)&&fx(t)}function eN(t){for(const e of t.filters)if(e instanceof Er)return!1;return!0}function zf(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+Uo(t.value);if(px(t))return t.filters.map(e=>zf(e)).join(",");{const e=t.filters.map(r=>zf(r)).join(",");return`${t.op}(${e})`}}function mx(t,e){return t instanceof We?function(n,i){return i instanceof We&&n.op===i.op&&n.field.isEqual(i.field)&&Dr(n.value,i.value)}(t,e):t instanceof Er?function(n,i){return i instanceof Er&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,s,l)=>o&&mx(s,i.filters[l]),!0):!1}(t,e):void re()}function gx(t){return t instanceof We?function(r){return`${r.field.canonicalString()} ${r.op} ${Uo(r.value)}`}(t):t instanceof Er?function(r){return r.op.toString()+" {"+r.getFilters().map(gx).join(" ,")+"}"}(t):"Filter"}class tN extends We{constructor(e,r,n){super(e,r,n),this.key=ee.fromName(n.referenceValue)}matches(e){const r=ee.comparator(e.key,this.key);return this.matchesComparison(r)}}class rN extends We{constructor(e,r){super(e,"in",r),this.keys=vx("in",r)}matches(e){return this.keys.some(r=>r.isEqual(e.key))}}class nN extends We{constructor(e,r){super(e,"not-in",r),this.keys=vx("not-in",r)}matches(e){return!this.keys.some(r=>r.isEqual(e.key))}}function vx(t,e){var r;return(((r=e.arrayValue)===null||r===void 0?void 0:r.values)||[]).map(n=>ee.fromName(n.referenceValue))}class iN extends We{constructor(e,r){super(e,"array-contains",r)}matches(e){const r=e.data.field(this.field);return zm(r)&&Oa(r.arrayValue,this.value)}}class oN extends We{constructor(e,r){super(e,"in",r)}matches(e){const r=e.data.field(this.field);return r!==null&&Oa(this.value.arrayValue,r)}}class sN extends We{constructor(e,r){super(e,"not-in",r)}matches(e){if(Oa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const r=e.data.field(this.field);return r!==null&&!Oa(this.value.arrayValue,r)}}class aN extends We{constructor(e,r){super(e,"array-contains-any",r)}matches(e){const r=e.data.field(this.field);return!(!zm(r)||!r.arrayValue.values)&&r.arrayValue.values.some(n=>Oa(this.value.arrayValue,n))}}/**
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
 */class lN{constructor(e,r=null,n=[],i=[],o=null,s=null,l=null){this.path=e,this.collectionGroup=r,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=s,this.endAt=l,this.ue=null}}function O_(t,e=null,r=[],n=[],i=null,o=null,s=null){return new lN(t,e,r,n,i,o,s)}function Bm(t){const e=ie(t);if(e.ue===null){let r=e.path.canonicalString();e.collectionGroup!==null&&(r+="|cg:"+e.collectionGroup),r+="|f:",r+=e.filters.map(n=>zf(n)).join(","),r+="|ob:",r+=e.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),qu(e.limit)||(r+="|l:",r+=e.limit),e.startAt&&(r+="|lb:",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(n=>Uo(n)).join(",")),e.endAt&&(r+="|ub:",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(n=>Uo(n)).join(",")),e.ue=r}return e.ue}function qm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!ZP(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(!mx(t.filters[r],e.filters[r]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!N_(t.startAt,e.startAt)&&N_(t.endAt,e.endAt)}function Bf(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,r=null,n=[],i=[],o=null,s="F",l=null,c=null){this.path=e,this.collectionGroup=r,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=s,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function cN(t,e,r,n,i,o,s,l){return new ts(t,e,r,n,i,o,s,l)}function Hm(t){return new ts(t)}function D_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function yx(t){return t.collectionGroup!==null}function na(t){const e=ie(t);if(e.ce===null){e.ce=[];const r=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),r.add(o.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let l=new st(it.comparator);return s.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(o=>{r.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Da(o,n))}),r.has(it.keyField().canonicalString())||e.ce.push(new Da(it.keyField(),n))}return e.ce}function Rr(t){const e=ie(t);return e.le||(e.le=uN(e,na(t))),e.le}function uN(t,e){if(t.limitType==="F")return O_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Da(i.field,o)});const r=t.endAt?new fu(t.endAt.position,t.endAt.inclusive):null,n=t.startAt?new fu(t.startAt.position,t.startAt.inclusive):null;return O_(t.path,t.collectionGroup,e,t.filters,t.limit,r,n)}}function qf(t,e){const r=t.filters.concat([e]);return new ts(t.path,t.collectionGroup,t.explicitOrderBy.slice(),r,t.limit,t.limitType,t.startAt,t.endAt)}function Hf(t,e,r){return new ts(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,r,t.startAt,t.endAt)}function Hu(t,e){return qm(Rr(t),Rr(e))&&t.limitType===e.limitType}function _x(t){return`${Bm(Rr(t))}|lt:${t.limitType}`}function ro(t){return`Query(target=${function(r){let n=r.path.canonicalString();return r.collectionGroup!==null&&(n+=" collectionGroup="+r.collectionGroup),r.filters.length>0&&(n+=`, filters: [${r.filters.map(i=>gx(i)).join(", ")}]`),qu(r.limit)||(n+=", limit: "+r.limit),r.orderBy.length>0&&(n+=`, orderBy: [${r.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),r.startAt&&(n+=", startAt: ",n+=r.startAt.inclusive?"b:":"a:",n+=r.startAt.position.map(i=>Uo(i)).join(",")),r.endAt&&(n+=", endAt: ",n+=r.endAt.inclusive?"a:":"b:",n+=r.endAt.position.map(i=>Uo(i)).join(",")),`Target(${n})`}(Rr(t))}; limitType=${t.limitType})`}function Wu(t,e){return e.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):ee.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(t,e)&&function(n,i){for(const o of na(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,l,c){const u=P_(s,l,c);return s.inclusive?u<=0:u<0}(n.startAt,na(n),i)||n.endAt&&!function(s,l,c){const u=P_(s,l,c);return s.inclusive?u>=0:u>0}(n.endAt,na(n),i))}(t,e)}function dN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function wx(t){return(e,r)=>{let n=!1;for(const i of na(t)){const o=hN(i,e,r);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function hN(t,e,r){const n=t.field.isKeyField()?ee.comparator(e.key,r.key):function(o,s,l){const c=s.data.field(o),u=l.data.field(o);return c!==null&&u!==null?Fo(c,u):re()}(t.field,e,r);switch(t.dir){case"asc":return n;case"desc":return-1*n;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,r){this.mapKeyFn=e,this.equalsFn=r,this.inner={},this.innerSize=0}get(e){const r=this.mapKeyFn(e),n=this.inner[r];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,r){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,r]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,r]);i.push([e,r]),this.innerSize++}delete(e){const r=this.mapKeyFn(e),n=this.inner[r];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[r]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ji(this.inner,(r,n)=>{for(const[i,o]of n)e(i,o)})}isEmpty(){return cx(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN=new Oe(ee.comparator);function an(){return fN}const bx=new Oe(ee.comparator);function zs(...t){let e=bx;for(const r of t)e=e.insert(r.key,r);return e}function Ex(t){let e=bx;return t.forEach((r,n)=>e=e.insert(r,n.overlayedDocument)),e}function gi(){return ia()}function xx(){return ia()}function ia(){return new rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const pN=new Oe(ee.comparator),mN=new st(ee.comparator);function le(...t){let e=mN;for(const r of t)e=e.add(r);return e}const gN=new st(fe);function vN(){return gN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hu(e)?"-0":e}}function Ix(t){return{integerValue:""+t}}function yN(t,e){return GP(e)?Ix(e):Wm(t,e)}/**
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
 */class Ku{constructor(){this._=void 0}}function _N(t,e,r){return t instanceof La?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Um(o)&&(o=jm(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(r,e):t instanceof jo?Ax(t,e):t instanceof Va?Sx(t,e):function(i,o){const s=Tx(i,o),l=L_(s)+L_(i.Pe);return jf(s)&&jf(i.Pe)?Ix(l):Wm(i.serializer,l)}(t,e)}function wN(t,e,r){return t instanceof jo?Ax(t,e):t instanceof Va?Sx(t,e):r}function Tx(t,e){return t instanceof pu?function(n){return jf(n)||function(o){return!!o&&"doubleValue"in o}(n)}(e)?e:{integerValue:0}:null}class La extends Ku{}class jo extends Ku{constructor(e){super(),this.elements=e}}function Ax(t,e){const r=kx(e);for(const n of t.elements)r.some(i=>Dr(i,n))||r.push(n);return{arrayValue:{values:r}}}class Va extends Ku{constructor(e){super(),this.elements=e}}function Sx(t,e){let r=kx(e);for(const n of t.elements)r=r.filter(i=>!Dr(i,n));return{arrayValue:{values:r}}}class pu extends Ku{constructor(e,r){super(),this.serializer=e,this.Pe=r}}function L_(t){return je(t.integerValue||t.doubleValue)}function kx(t){return zm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e,r){this.field=e,this.transform=r}}function bN(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof jo&&i instanceof jo||n instanceof Va&&i instanceof Va?$o(n.elements,i.elements,Dr):n instanceof pu&&i instanceof pu?Dr(n.Pe,i.Pe):n instanceof La&&i instanceof La}(t.transform,e.transform)}class EN{constructor(e,r){this.version=e,this.transformResults=r}}class or{constructor(e,r){this.updateTime=e,this.exists=r}static none(){return new or}static exists(e){return new or(void 0,e)}static updateTime(e){return new or(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gu{}function Rx(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Km(t.key,or.none()):new rl(t.key,t.data,or.none());{const r=t.data,n=Lt.empty();let i=new st(it.comparator);for(let o of e.fields)if(!i.has(o)){let s=r.field(o);s===null&&o.length>1&&(o=o.popLast(),s=r.field(o)),s===null?n.delete(o):n.set(o,s),i=i.add(o)}return new Jn(t.key,n,new Ht(i.toArray()),or.none())}}function xN(t,e,r){t instanceof rl?function(i,o,s){const l=i.value.clone(),c=M_(i.fieldTransforms,o,s.transformResults);l.setAll(c),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,r):t instanceof Jn?function(i,o,s){if(!Cc(i.precondition,o))return void o.convertToUnknownDocument(s.version);const l=M_(i.fieldTransforms,o,s.transformResults),c=o.data;c.setAll(Px(i)),c.setAll(l),o.convertToFoundDocument(s.version,c).setHasCommittedMutations()}(t,e,r):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,r)}function oa(t,e,r,n){return t instanceof rl?function(o,s,l,c){if(!Cc(o.precondition,s))return l;const u=o.value.clone(),h=$_(o.fieldTransforms,c,s);return u.setAll(h),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,r,n):t instanceof Jn?function(o,s,l,c){if(!Cc(o.precondition,s))return l;const u=$_(o.fieldTransforms,c,s),h=s.data;return h.setAll(Px(o)),h.setAll(u),s.convertToFoundDocument(s.version,h).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(p=>p.field))}(t,e,r,n):function(o,s,l){return Cc(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):l}(t,e,r)}function IN(t,e){let r=null;for(const n of t.fieldTransforms){const i=e.data.field(n.field),o=Tx(n.transform,i||null);o!=null&&(r===null&&(r=Lt.empty()),r.set(n.field,o))}return r||null}function V_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&$o(n,i,(o,s)=>bN(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class rl extends Gu{constructor(e,r,n,i=[]){super(),this.key=e,this.value=r,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Jn extends Gu{constructor(e,r,n,i,o=[]){super(),this.key=e,this.data=r,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Px(t){const e=new Map;return t.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){const n=t.data.field(r);e.set(r,n)}}),e}function M_(t,e,r){const n=new Map;ye(t.length===r.length);for(let i=0;i<r.length;i++){const o=t[i],s=o.transform,l=e.data.field(o.field);n.set(o.field,wN(s,l,r[i]))}return n}function $_(t,e,r){const n=new Map;for(const i of t){const o=i.transform,s=r.data.field(i.field);n.set(i.field,_N(o,s,e))}return n}class Km extends Gu{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TN extends Gu{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e,r,n,i){this.batchId=e,this.localWriteTime=r,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,r){const n=r.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&xN(o,e,n[i])}}applyToLocalView(e,r){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(r=oa(n,e,r,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(r=oa(n,e,r,this.localWriteTime));return r}applyToLocalDocumentSet(e,r){const n=xx();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let l=this.applyToLocalView(s,o.mutatedFields);l=r.has(i.key)?null:l;const c=Rx(s,l);c!==null&&n.set(i.key,c),s.isValidDocument()||s.convertToNoDocument(ne.min())}),n}keys(){return this.mutations.reduce((e,r)=>e.add(r.key),le())}isEqual(e){return this.batchId===e.batchId&&$o(this.mutations,e.mutations,(r,n)=>V_(r,n))&&$o(this.baseMutations,e.baseMutations,(r,n)=>V_(r,n))}}class Gm{constructor(e,r,n,i){this.batch=e,this.commitVersion=r,this.mutationResults=n,this.docVersions=i}static from(e,r,n){ye(e.mutations.length===n.length);let i=function(){return pN}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,n[s].version);return new Gm(e,r,n,i)}}/**
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
 */class SN{constructor(e,r){this.largestBatchId=e,this.mutation=r}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class kN{constructor(e,r){this.count=e,this.unchangedNames=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe,ue;function CN(t){switch(t){default:return re();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Nx(t){if(t===void 0)return sn("GRPC error has no .code"),M.UNKNOWN;switch(t){case qe.OK:return M.OK;case qe.CANCELLED:return M.CANCELLED;case qe.UNKNOWN:return M.UNKNOWN;case qe.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case qe.INTERNAL:return M.INTERNAL;case qe.UNAVAILABLE:return M.UNAVAILABLE;case qe.UNAUTHENTICATED:return M.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case qe.NOT_FOUND:return M.NOT_FOUND;case qe.ALREADY_EXISTS:return M.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return M.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case qe.ABORTED:return M.ABORTED;case qe.OUT_OF_RANGE:return M.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return M.UNIMPLEMENTED;case qe.DATA_LOSS:return M.DATA_LOSS;default:return re()}}(ue=qe||(qe={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function RN(){return new TextEncoder}/**
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
 */const PN=new bi([4294967295,4294967295],0);function F_(t){const e=RN().encode(t),r=new tx;return r.update(e),new Uint8Array(r.digest())}function U_(t){const e=new DataView(t.buffer),r=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new bi([r,n],0),new bi([i,o],0)]}class Qm{constructor(e,r,n){if(this.bitmap=e,this.padding=r,this.hashCount=n,r<0||r>=8)throw new Bs(`Invalid padding: ${r}`);if(n<0)throw new Bs(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Bs(`Invalid hash count: ${n}`);if(e.length===0&&r!==0)throw new Bs(`Invalid padding when bitmap length is 0: ${r}`);this.Ie=8*e.length-r,this.Te=bi.fromNumber(this.Ie)}Ee(e,r,n){let i=e.add(r.multiply(bi.fromNumber(n)));return i.compare(PN)===1&&(i=new bi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const r=F_(e),[n,i]=U_(r);for(let o=0;o<this.hashCount;o++){const s=this.Ee(n,i,o);if(!this.de(s))return!1}return!0}static create(e,r,n){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new Qm(o,i,r);return n.forEach(l=>s.insert(l)),s}insert(e){if(this.Ie===0)return;const r=F_(e),[n,i]=U_(r);for(let o=0;o<this.hashCount;o++){const s=this.Ee(n,i,o);this.Ae(s)}}Ae(e){const r=Math.floor(e/8),n=e%8;this.bitmap[r]|=1<<n}}class Bs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,r,n,i,o){this.snapshotVersion=e,this.targetChanges=r,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,r,n){const i=new Map;return i.set(e,nl.createSynthesizedTargetChangeForCurrentChange(e,r,n)),new Qu(ne.min(),i,new Oe(fe),an(),le())}}class nl{constructor(e,r,n,i,o){this.resumeToken=e,this.current=r,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,r,n){return new nl(n,r,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,r,n,i){this.Re=e,this.removedTargetIds=r,this.key=n,this.Ve=i}}class Ox{constructor(e,r){this.targetId=e,this.me=r}}class Dx{constructor(e,r,n=lt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=r,this.resumeToken=n,this.cause=i}}class j_{constructor(){this.fe=0,this.ge=B_(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=le(),r=le(),n=le();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:r=r.add(i);break;case 1:n=n.add(i);break;default:re()}}),new nl(this.pe,this.ye,e,r,n)}Ce(){this.we=!1,this.ge=B_()}Fe(e,r){this.we=!0,this.ge=this.ge.insert(e,r)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ye(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class NN{constructor(e){this.Le=e,this.Be=new Map,this.ke=an(),this.qe=z_(),this.Qe=new Oe(fe)}Ke(e){for(const r of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(r,e.Ve):this.Ue(r,e.key,e.Ve);for(const r of e.removedTargetIds)this.Ue(r,e.key,e.Ve)}We(e){this.forEachTarget(e,r=>{const n=this.Ge(r);switch(e.state){case 0:this.ze(r)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(r);break;case 3:this.ze(r)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(r)&&(this.je(r),n.De(e.resumeToken));break;default:re()}})}forEachTarget(e,r){e.targetIds.length>0?e.targetIds.forEach(r):this.Be.forEach((n,i)=>{this.ze(i)&&r(i)})}He(e){const r=e.targetId,n=e.me.count,i=this.Je(r);if(i){const o=i.target;if(Bf(o))if(n===0){const s=new ee(o.path);this.Ue(r,s,yt.newNoDocument(s,ne.min()))}else ye(n===1);else{const s=this.Ye(r);if(s!==n){const l=this.Ze(e),c=l?this.Xe(l,e,s):1;if(c!==0){this.je(r);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(r,u)}}}}}Ze(e){const r=e.me.unchangedNames;if(!r||!r.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=r;let s,l;try{s=Ni(n).toUint8Array()}catch(c){if(c instanceof ux)return Mo("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Qm(s,i,o)}catch(c){return Mo(c instanceof Bs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,r,n){return r.me.count===n-this.nt(e,r.targetId)?0:2}nt(e,r){const n=this.Le.getRemoteKeysForTarget(r);let i=0;return n.forEach(o=>{const s=this.Le.tt(),l=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.Ue(r,o,null),i++)}),i}rt(e){const r=new Map;this.Be.forEach((o,s)=>{const l=this.Je(s);if(l){if(o.current&&Bf(l.target)){const c=new ee(l.target.path);this.ke.get(c)!==null||this.it(s,c)||this.Ue(s,c,yt.newNoDocument(c,e))}o.be&&(r.set(s,o.ve()),o.Ce())}});let n=le();this.qe.forEach((o,s)=>{let l=!0;s.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new Qu(e,r,this.Qe,this.ke,n);return this.ke=an(),this.qe=z_(),this.Qe=new Oe(fe),i}$e(e,r){if(!this.ze(e))return;const n=this.it(e,r.key)?2:0;this.Ge(e).Fe(r.key,n),this.ke=this.ke.insert(r.key,r),this.qe=this.qe.insert(r.key,this.st(r.key).add(e))}Ue(e,r,n){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,r)?i.Fe(r,1):i.Me(r),this.qe=this.qe.insert(r,this.st(r).delete(e)),n&&(this.ke=this.ke.insert(r,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const r=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let r=this.Be.get(e);return r||(r=new j_,this.Be.set(e,r)),r}st(e){let r=this.qe.get(e);return r||(r=new st(fe),this.qe=this.qe.insert(e,r)),r}ze(e){const r=this.Je(e)!==null;return r||X("WatchChangeAggregator","Detected inactive target",e),r}Je(e){const r=this.Be.get(e);return r&&r.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new j_),this.Le.getRemoteKeysForTarget(e).forEach(r=>{this.Ue(e,r,null)})}it(e,r){return this.Le.getRemoteKeysForTarget(e).has(r)}}function z_(){return new Oe(ee.comparator)}function B_(){return new Oe(ee.comparator)}const ON={asc:"ASCENDING",desc:"DESCENDING"},DN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LN={and:"AND",or:"OR"};class VN{constructor(e,r){this.databaseId=e,this.useProto3Json=r}}function Wf(t,e){return t.useProto3Json||qu(e)?e:{value:e}}function mu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Lx(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function MN(t,e){return mu(t,e.toTimestamp())}function Pr(t){return ye(!!t),ne.fromTimestamp(function(r){const n=qn(r);return new Qe(n.seconds,n.nanos)}(t))}function Ym(t,e){return Kf(t,e).canonicalString()}function Kf(t,e){const r=function(i){return new Ae(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?r:r.child(e)}function Vx(t){const e=Ae.fromString(t);return ye(jx(e)),e}function Gf(t,e){return Ym(t.databaseId,e.path)}function fh(t,e){const r=Vx(e);if(r.get(1)!==t.databaseId.projectId)throw new Q(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+t.databaseId.projectId);if(r.get(3)!==t.databaseId.database)throw new Q(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+t.databaseId.database);return new ee($x(r))}function Mx(t,e){return Ym(t.databaseId,e)}function $N(t){const e=Vx(t);return e.length===4?Ae.emptyPath():$x(e)}function Qf(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $x(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function q_(t,e,r){return{name:Gf(t,e),fields:r.value.mapValue.fields}}function FN(t,e){let r;if("targetChange"in e){e.targetChange;const n=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(u,h){return u.useProto3Json?(ye(h===void 0||typeof h=="string"),lt.fromBase64String(h||"")):(ye(h===void 0||h instanceof Buffer||h instanceof Uint8Array),lt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,l=s&&function(u){const h=u.code===void 0?M.UNKNOWN:Nx(u.code);return new Q(h,u.message||"")}(s);r=new Dx(n,i,o,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=fh(t,n.document.name),o=Pr(n.document.updateTime),s=n.document.createTime?Pr(n.document.createTime):ne.min(),l=new Lt({mapValue:{fields:n.document.fields}}),c=yt.newFoundDocument(i,o,s,l),u=n.targetIds||[],h=n.removedTargetIds||[];r=new Rc(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=fh(t,n.document),o=n.readTime?Pr(n.readTime):ne.min(),s=yt.newNoDocument(i,o),l=n.removedTargetIds||[];r=new Rc([],l,s.key,s)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=fh(t,n.document),o=n.removedTargetIds||[];r=new Rc([],o,i,null)}else{if(!("filter"in e))return re();{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,s=new kN(i,o),l=n.targetId;r=new Ox(l,s)}}return r}function UN(t,e){let r;if(e instanceof rl)r={update:q_(t,e.key,e.value)};else if(e instanceof Km)r={delete:Gf(t,e.key)};else if(e instanceof Jn)r={update:q_(t,e.key,e.data),updateMask:QN(e.fieldMask)};else{if(!(e instanceof TN))return re();r={verify:Gf(t,e.key)}}return e.fieldTransforms.length>0&&(r.updateTransforms=e.fieldTransforms.map(n=>function(o,s){const l=s.transform;if(l instanceof La)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof jo)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Va)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof pu)return{fieldPath:s.field.canonicalString(),increment:l.Pe};throw re()}(0,n))),e.precondition.isNone||(r.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:MN(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:re()}(t,e.precondition)),r}function jN(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(r=>function(i,o){let s=i.updateTime?Pr(i.updateTime):Pr(o);return s.isEqual(ne.min())&&(s=Pr(o)),new EN(s,i.transformResults||[])}(r,e))):[]}function zN(t,e){return{documents:[Mx(t,e.path)]}}function BN(t,e){const r={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,r.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),r.structuredQuery.from=[{collectionId:n.lastSegment()}]),r.parent=Mx(t,i);const o=function(u){if(u.length!==0)return Ux(Er.create(u,"and"))}(e.filters);o&&(r.structuredQuery.where=o);const s=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:no(m.field),direction:WN(m.dir)}}(h))}(e.orderBy);s&&(r.structuredQuery.orderBy=s);const l=Wf(t,e.limit);return l!==null&&(r.structuredQuery.limit=l),e.startAt&&(r.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(r.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:r,parent:i}}function qN(t){let e=$N(t.parent);const r=t.structuredQuery,n=r.from?r.from.length:0;let i=null;if(n>0){ye(n===1);const h=r.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let o=[];r.where&&(o=function(p){const m=Fx(p);return m instanceof Er&&px(m)?m.getFilters():[m]}(r.where));let s=[];r.orderBy&&(s=function(p){return p.map(m=>function(k){return new Da(io(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(r.orderBy));let l=null;r.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,qu(m)?null:m}(r.limit));let c=null;r.startAt&&(c=function(p){const m=!!p.before,b=p.values||[];return new fu(b,m)}(r.startAt));let u=null;return r.endAt&&(u=function(p){const m=!p.before,b=p.values||[];return new fu(b,m)}(r.endAt)),cN(e,i,s,o,l,"F",c,u)}function HN(t,e){const r=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return r==null?null:{"goog-listen-tags":r}}function Fx(t){return t.unaryFilter!==void 0?function(r){switch(r.unaryFilter.op){case"IS_NAN":const n=io(r.unaryFilter.field);return We.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=io(r.unaryFilter.field);return We.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=io(r.unaryFilter.field);return We.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=io(r.unaryFilter.field);return We.create(s,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(r){return We.create(io(r.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(r.fieldFilter.op),r.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(r){return Er.create(r.compositeFilter.filters.map(n=>Fx(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return re()}}(r.compositeFilter.op))}(t):re()}function WN(t){return ON[t]}function KN(t){return DN[t]}function GN(t){return LN[t]}function no(t){return{fieldPath:t.canonicalString()}}function io(t){return it.fromServerFormat(t.fieldPath)}function Ux(t){return t instanceof We?function(r){if(r.op==="=="){if(R_(r.value))return{unaryFilter:{field:no(r.field),op:"IS_NAN"}};if(C_(r.value))return{unaryFilter:{field:no(r.field),op:"IS_NULL"}}}else if(r.op==="!="){if(R_(r.value))return{unaryFilter:{field:no(r.field),op:"IS_NOT_NAN"}};if(C_(r.value))return{unaryFilter:{field:no(r.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:no(r.field),op:KN(r.op),value:r.value}}}(t):t instanceof Er?function(r){const n=r.getFilters().map(i=>Ux(i));return n.length===1?n[0]:{compositeFilter:{op:GN(r.op),filters:n}}}(t):re()}function QN(t){const e=[];return t.fields.forEach(r=>e.push(r.canonicalString())),{fieldPaths:e}}function jx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,r,n,i,o=ne.min(),s=ne.min(),l=lt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=r,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Cn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,r){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,r,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e){this.ct=e}}function XN(t){const e=qN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hf(e,e.limit,"L"):e}/**
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
 */class JN{constructor(){this.un=new ZN}addToCollectionParentIndex(e,r){return this.un.add(r),$.resolve()}getCollectionParents(e,r){return $.resolve(this.un.getEntries(r))}addFieldIndex(e,r){return $.resolve()}deleteFieldIndex(e,r){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,r){return $.resolve()}getDocumentsMatchingTarget(e,r){return $.resolve(null)}getIndexType(e,r){return $.resolve(0)}getFieldIndexes(e,r){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,r){return $.resolve(Bn.min())}getMinOffsetFromCollectionGroup(e,r){return $.resolve(Bn.min())}updateCollectionGroup(e,r,n){return $.resolve()}updateIndexEntries(e,r){return $.resolve()}}class ZN{constructor(){this.index={}}add(e){const r=e.lastSegment(),n=e.popLast(),i=this.index[r]||new st(Ae.comparator),o=!i.has(n);return this.index[r]=i.add(n),o}has(e){const r=e.lastSegment(),n=e.popLast(),i=this.index[r];return i&&i.has(n)}getEntries(e){return(this.index[e]||new st(Ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new zo(0)}static kn(){return new zo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(){this.changes=new rs(e=>e.toString(),(e,r)=>e.isEqual(r)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,r){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(r))}getEntry(e,r){this.assertNotApplied();const n=this.changes.get(r);return n!==void 0?$.resolve(n):this.getFromCache(e,r)}getEntries(e,r){return this.getAllFromCache(e,r)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class t2{constructor(e,r){this.overlayedDocument=e,this.mutatedFields=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e,r,n,i){this.remoteDocumentCache=e,this.mutationQueue=r,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,r){let n=null;return this.documentOverlayCache.getOverlay(e,r).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,r))).next(i=>(n!==null&&oa(n.mutation,i,Ht.empty(),Qe.now()),i))}getDocuments(e,r){return this.remoteDocumentCache.getEntries(e,r).next(n=>this.getLocalViewOfDocuments(e,n,le()).next(()=>n))}getLocalViewOfDocuments(e,r,n=le()){const i=gi();return this.populateOverlays(e,i,r).next(()=>this.computeViews(e,r,i,n).next(o=>{let s=zs();return o.forEach((l,c)=>{s=s.insert(l,c.overlayedDocument)}),s}))}getOverlayedDocuments(e,r){const n=gi();return this.populateOverlays(e,n,r).next(()=>this.computeViews(e,r,n,le()))}populateOverlays(e,r,n){const i=[];return n.forEach(o=>{r.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,l)=>{r.set(s,l)})})}computeViews(e,r,n,i){let o=an();const s=ia(),l=function(){return ia()}();return r.forEach((c,u)=>{const h=n.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof Jn)?o=o.insert(u.key,u):h!==void 0?(s.set(u.key,h.mutation.getFieldMask()),oa(h.mutation,u,h.mutation.getFieldMask(),Qe.now())):s.set(u.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,o).next(c=>(c.forEach((u,h)=>s.set(u,h)),r.forEach((u,h)=>{var p;return l.set(u,new t2(h,(p=s.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,r){const n=ia();let i=new Oe((s,l)=>s-l),o=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,r).next(s=>{for(const l of s)l.keys().forEach(c=>{const u=r.get(c);if(u===null)return;let h=n.get(c)||Ht.empty();h=l.applyToLocalView(u,h),n.set(c,h);const p=(i.get(l.batchId)||le()).add(c);i=i.insert(l.batchId,p)})}).next(()=>{const s=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,h=c.value,p=xx();h.forEach(m=>{if(!o.has(m)){const b=Rx(r.get(m),n.get(m));b!==null&&p.set(m,b),o=o.add(m)}}),s.push(this.documentOverlayCache.saveOverlays(e,u,p))}return $.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,r){return this.remoteDocumentCache.getEntries(e,r).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,r,n,i){return function(s){return ee.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(r)?this.getDocumentsMatchingDocumentQuery(e,r.path):yx(r)?this.getDocumentsMatchingCollectionGroupQuery(e,r,n,i):this.getDocumentsMatchingCollectionQuery(e,r,n,i)}getNextDocuments(e,r,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,r,n,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,r,n.largestBatchId,i-o.size):$.resolve(gi());let l=-1,c=o;return s.next(u=>$.forEach(u,(h,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),o.get(h)?$.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{c=c.insert(h,m)}))).next(()=>this.populateOverlays(e,u,o)).next(()=>this.computeViews(e,c,u,le())).next(h=>({batchId:l,changes:Ex(h)})))})}getDocumentsMatchingDocumentQuery(e,r){return this.getDocument(e,new ee(r)).next(n=>{let i=zs();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,r,n,i){const o=r.collectionGroup;let s=zs();return this.indexManager.getCollectionParents(e,o).next(l=>$.forEach(l,c=>{const u=function(p,m){return new ts(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(r,c.child(o));return this.getDocumentsMatchingCollectionQuery(e,u,n,i).next(h=>{h.forEach((p,m)=>{s=s.insert(p,m)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,r,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,r.path,n.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,r,n,o,i))).next(s=>{o.forEach((c,u)=>{const h=u.getKey();s.get(h)===null&&(s=s.insert(h,yt.newInvalidDocument(h)))});let l=zs();return s.forEach((c,u)=>{const h=o.get(c);h!==void 0&&oa(h.mutation,u,Ht.empty(),Qe.now()),Wu(r,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,r){return $.resolve(this.hr.get(r))}saveBundleMetadata(e,r){return this.hr.set(r.id,function(i){return{id:i.id,version:i.version,createTime:Pr(i.createTime)}}(r)),$.resolve()}getNamedQuery(e,r){return $.resolve(this.Pr.get(r))}saveNamedQuery(e,r){return this.Pr.set(r.name,function(i){return{name:i.name,query:XN(i.bundledQuery),readTime:Pr(i.readTime)}}(r)),$.resolve()}}/**
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
 */class i2{constructor(){this.overlays=new Oe(ee.comparator),this.Ir=new Map}getOverlay(e,r){return $.resolve(this.overlays.get(r))}getOverlays(e,r){const n=gi();return $.forEach(r,i=>this.getOverlay(e,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(e,r,n){return n.forEach((i,o)=>{this.ht(e,r,o)}),$.resolve()}removeOverlaysForBatchId(e,r,n){const i=this.Ir.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(n)),$.resolve()}getOverlaysForCollection(e,r,n){const i=gi(),o=r.length+1,s=new ee(r.child("")),l=this.overlays.getIteratorFrom(s);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!r.isPrefixOf(u.path))break;u.path.length===o&&c.largestBatchId>n&&i.set(c.getKey(),c)}return $.resolve(i)}getOverlaysForCollectionGroup(e,r,n,i){let o=new Oe((u,h)=>u-h);const s=this.overlays.getIterator();for(;s.hasNext();){const u=s.getNext().value;if(u.getKey().getCollectionGroup()===r&&u.largestBatchId>n){let h=o.get(u.largestBatchId);h===null&&(h=gi(),o=o.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const l=gi(),c=o.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>l.set(u,h)),!(l.size()>=i)););return $.resolve(l)}ht(e,r,n){const i=this.overlays.get(n.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(n.key,new SN(r,n));let o=this.Ir.get(r);o===void 0&&(o=le(),this.Ir.set(r,o)),this.Ir.set(r,o.add(n.key))}}/**
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
 */class o2{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,r){return this.sessionToken=r,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){this.Tr=new st(Xe.Er),this.dr=new st(Xe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,r){const n=new Xe(e,r);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,r){e.forEach(n=>this.addReference(n,r))}removeReference(e,r){this.Vr(new Xe(e,r))}mr(e,r){e.forEach(n=>this.removeReference(n,r))}gr(e){const r=new ee(new Ae([])),n=new Xe(r,e),i=new Xe(r,e+1),o=[];return this.dr.forEachInRange([n,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const r=new ee(new Ae([])),n=new Xe(r,e),i=new Xe(r,e+1);let o=le();return this.dr.forEachInRange([n,i],s=>{o=o.add(s.key)}),o}containsKey(e){const r=new Xe(e,0),n=this.Tr.firstAfterOrEqual(r);return n!==null&&e.isEqual(n.key)}}class Xe{constructor(e,r){this.key=e,this.wr=r}static Er(e,r){return ee.comparator(e.key,r.key)||fe(e.wr,r.wr)}static Ar(e,r){return fe(e.wr,r.wr)||ee.comparator(e.key,r.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,r){this.indexManager=e,this.referenceDelegate=r,this.mutationQueue=[],this.Sr=1,this.br=new st(Xe.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,r,n,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new AN(o,r,n,i);this.mutationQueue.push(s);for(const l of i)this.br=this.br.add(new Xe(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(s)}lookupMutationBatch(e,r){return $.resolve(this.Dr(r))}getNextMutationBatchAfterBatchId(e,r){const n=r+1,i=this.vr(n),o=i<0?0:i;return $.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,r){const n=new Xe(r,0),i=new Xe(r,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([n,i],s=>{const l=this.Dr(s.wr);o.push(l)}),$.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,r){let n=new st(fe);return r.forEach(i=>{const o=new Xe(i,0),s=new Xe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],l=>{n=n.add(l.wr)})}),$.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,r){const n=r.path,i=n.length+1;let o=n;ee.isDocumentKey(o)||(o=o.child(""));const s=new Xe(new ee(o),0);let l=new st(fe);return this.br.forEachWhile(c=>{const u=c.key.path;return!!n.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.wr)),!0)},s),$.resolve(this.Cr(l))}Cr(e){const r=[];return e.forEach(n=>{const i=this.Dr(n);i!==null&&r.push(i)}),r}removeMutationBatch(e,r){ye(this.Fr(r.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return $.forEach(r.mutations,i=>{const o=new Xe(i.key,r.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,r){const n=new Xe(r,0),i=this.br.firstAfterOrEqual(n);return $.resolve(r.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,r){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const r=this.vr(e);return r<0||r>=this.mutationQueue.length?null:this.mutationQueue[r]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this.Mr=e,this.docs=function(){return new Oe(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,r){const n=r.key,i=this.docs.get(n),o=i?i.size:0,s=this.Mr(r);return this.docs=this.docs.insert(n,{document:r.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const r=this.docs.get(e);r&&(this.docs=this.docs.remove(e),this.size-=r.size)}getEntry(e,r){const n=this.docs.get(r);return $.resolve(n?n.document.mutableCopy():yt.newInvalidDocument(r))}getEntries(e,r){let n=an();return r.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():yt.newInvalidDocument(i))}),$.resolve(n)}getDocumentsMatchingQuery(e,r,n,i){let o=an();const s=r.path,l=new ee(s.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!s.isPrefixOf(u.path))break;u.path.length>s.length+1||qP(BP(h),n)<=0||(i.has(h.key)||Wu(r,h))&&(o=o.insert(h.key,h.mutableCopy()))}return $.resolve(o)}getAllFromCollectionGroup(e,r,n,i){re()}Or(e,r){return $.forEach(this.docs,n=>r(n))}newChangeBuffer(e){return new l2(this)}getSize(e){return $.resolve(this.size)}}class l2 extends e2{constructor(e){super(),this.cr=e}applyChanges(e){const r=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?r.push(this.cr.addEntry(e,i)):this.cr.removeEntry(n)}),$.waitFor(r)}getFromCache(e,r){return this.cr.getEntry(e,r)}getAllFromCache(e,r){return this.cr.getEntries(e,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(e){this.persistence=e,this.Nr=new rs(r=>Bm(r),qm),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Xm,this.targetCount=0,this.kr=zo.Bn()}forEachTarget(e,r){return this.Nr.forEach((n,i)=>r(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,r,n){return n&&(this.lastRemoteSnapshotVersion=n),r>this.Lr&&(this.Lr=r),$.resolve()}Kn(e){this.Nr.set(e.target,e);const r=e.targetId;r>this.highestTargetId&&(this.kr=new zo(r),this.highestTargetId=r),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,r){return this.Kn(r),this.targetCount+=1,$.resolve()}updateTargetData(e,r){return this.Kn(r),$.resolve()}removeTargetData(e,r){return this.Nr.delete(r.target),this.Br.gr(r.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,r,n){let i=0;const o=[];return this.Nr.forEach((s,l)=>{l.sequenceNumber<=r&&n.get(l.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),$.waitFor(o).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,r){const n=this.Nr.get(r)||null;return $.resolve(n)}addMatchingKeys(e,r,n){return this.Br.Rr(r,n),$.resolve()}removeMatchingKeys(e,r,n){this.Br.mr(r,n);const i=this.persistence.referenceDelegate,o=[];return i&&r.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),$.waitFor(o)}removeMatchingKeysForTargetId(e,r){return this.Br.gr(r),$.resolve()}getMatchingKeysForTargetId(e,r){const n=this.Br.yr(r);return $.resolve(n)}containsKey(e,r){return $.resolve(this.Br.containsKey(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e,r){this.qr={},this.overlays={},this.Qr=new Fm(0),this.Kr=!1,this.Kr=!0,this.$r=new o2,this.referenceDelegate=e(this),this.Ur=new c2(this),this.indexManager=new JN,this.remoteDocumentCache=function(i){return new a2(i)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new YN(r),this.Gr=new n2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let r=this.overlays[e.toKey()];return r||(r=new i2,this.overlays[e.toKey()]=r),r}getMutationQueue(e,r){let n=this.qr[e.toKey()];return n||(n=new s2(r,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,r,n){X("MemoryPersistence","Starting transaction:",e);const i=new d2(this.Qr.next());return this.referenceDelegate.zr(),n(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,r){return $.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,r)))}}class d2 extends WP{constructor(e){super(),this.currentSequenceNumber=e}}class Jm{constructor(e){this.persistence=e,this.Jr=new Xm,this.Yr=null}static Zr(e){return new Jm(e)}get Xr(){if(this.Yr)return this.Yr;throw re()}addReference(e,r,n){return this.Jr.addReference(n,r),this.Xr.delete(n.toString()),$.resolve()}removeReference(e,r,n){return this.Jr.removeReference(n,r),this.Xr.add(n.toString()),$.resolve()}markPotentiallyOrphaned(e,r){return this.Xr.add(r.toString()),$.resolve()}removeTarget(e,r){this.Jr.gr(r.targetId).forEach(i=>this.Xr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,r.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>n.removeTargetData(e,r))}zr(){this.Yr=new Set}jr(e){const r=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,n=>{const i=ee.fromPath(n);return this.ei(e,i).next(o=>{o||r.removeEntry(i,ne.min())})}).next(()=>(this.Yr=null,r.apply(e)))}updateLimboDocument(e,r){return this.ei(e,r).next(n=>{n?this.Xr.delete(r.toString()):this.Xr.add(r.toString())})}Wr(e){return 0}ei(e,r){return $.or([()=>$.resolve(this.Jr.containsKey(r)),()=>this.persistence.getTargetCache().containsKey(e,r),()=>this.persistence.Hr(e,r)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,r,n,i){this.targetId=e,this.fromCache=r,this.$i=n,this.Ui=i}static Wi(e,r){let n=le(),i=le();for(const o of r.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Zm(e,r.fromCache,n,i)}}/**
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
 */class h2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class f2{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return iC()?8:KP(bt())>0?6:4}()}initialize(e,r){this.Ji=e,this.indexManager=r,this.Gi=!0}getDocumentsMatchingQuery(e,r,n,i){const o={result:null};return this.Yi(e,r).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,r,i,n).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new h2;return this.Xi(e,r,s).next(l=>{if(o.result=l,this.zi)return this.es(e,r,s,l.size)})}).next(()=>o.result)}es(e,r,n,i){return n.documentReadCount<this.ji?(Ps()<=ce.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",ro(r),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(Ps()<=ce.DEBUG&&X("QueryEngine","Query:",ro(r),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(Ps()<=ce.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",ro(r),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rr(r))):$.resolve())}Yi(e,r){if(D_(r))return $.resolve(null);let n=Rr(r);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(r.limit!==null&&i===1&&(r=Hf(r,null,"F"),n=Rr(r)),this.indexManager.getDocumentsMatchingTarget(e,n).next(o=>{const s=le(...o);return this.Ji.getDocuments(e,s).next(l=>this.indexManager.getMinOffset(e,n).next(c=>{const u=this.ts(r,l);return this.ns(r,u,s,c.readTime)?this.Yi(e,Hf(r,null,"F")):this.rs(e,u,r,c)}))})))}Zi(e,r,n,i){return D_(r)||i.isEqual(ne.min())?$.resolve(null):this.Ji.getDocuments(e,n).next(o=>{const s=this.ts(r,o);return this.ns(r,s,n,i)?$.resolve(null):(Ps()<=ce.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ro(r)),this.rs(e,s,r,zP(i,-1)).next(l=>l))})}ts(e,r){let n=new st(wx(e));return r.forEach((i,o)=>{Wu(e,o)&&(n=n.add(o))}),n}ns(e,r,n,i){if(e.limit===null)return!1;if(n.size!==r.size)return!0;const o=e.limitType==="F"?r.last():r.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,r,n){return Ps()<=ce.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",ro(r)),this.Ji.getDocumentsMatchingQuery(e,r,Bn.min(),n)}rs(e,r,n,i){return this.Ji.getDocumentsMatchingQuery(e,n,i).next(o=>(r.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e,r,n,i){this.persistence=e,this.ss=r,this.serializer=i,this.os=new Oe(fe),this._s=new rs(o=>Bm(o),qm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new r2(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",r=>e.collect(r,this.os))}}function m2(t,e,r,n){return new p2(t,e,r,n)}async function zx(t,e){const r=ie(t);return await r.persistence.runTransaction("Handle user change","readonly",n=>{let i;return r.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,r.ls(e),r.mutationQueue.getAllMutationBatches(n))).next(o=>{const s=[],l=[];let c=le();for(const u of i){s.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of o){l.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return r.localDocuments.getDocuments(n,c).next(u=>({hs:u,removedBatchIds:s,addedBatchIds:l}))})})}function g2(t,e){const r=ie(t);return r.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),o=r.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,h){const p=u.batch,m=p.keys();let b=$.resolve();return m.forEach(k=>{b=b.next(()=>h.getEntry(c,k)).next(N=>{const D=u.docVersions.get(k);ye(D!==null),N.version.compareTo(D)<0&&(p.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),h.addEntry(N)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(r,n,e,o).next(()=>o.apply(n)).next(()=>r.mutationQueue.performConsistencyCheck(n)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let c=le();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>r.localDocuments.getDocuments(n,i))})}function Bx(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",r=>e.Ur.getLastRemoteSnapshotVersion(r))}function v2(t,e){const r=ie(t),n=e.snapshotVersion;let i=r.os;return r.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=r.cs.newChangeBuffer({trackRemovals:!0});i=r.os;const l=[];e.targetChanges.forEach((h,p)=>{const m=i.get(p);if(!m)return;l.push(r.Ur.removeMatchingKeys(o,h.removedDocuments,p).next(()=>r.Ur.addMatchingKeys(o,h.addedDocuments,p)));let b=m.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(lt.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):h.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(h.resumeToken,n)),i=i.insert(p,b),function(N,D,E){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,b,h)&&l.push(r.Ur.updateTargetData(o,b))});let c=an(),u=le();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(r.persistence.referenceDelegate.updateLimboDocument(o,h))}),l.push(y2(o,s,e.documentUpdates).next(h=>{c=h.Ps,u=h.Is})),!n.isEqual(ne.min())){const h=r.Ur.getLastRemoteSnapshotVersion(o).next(p=>r.Ur.setTargetsMetadata(o,o.currentSequenceNumber,n));l.push(h)}return $.waitFor(l).next(()=>s.apply(o)).next(()=>r.localDocuments.getLocalViewOfDocuments(o,c,u)).next(()=>c)}).then(o=>(r.os=i,o))}function y2(t,e,r){let n=le(),i=le();return r.forEach(o=>n=n.add(o)),e.getEntries(t,n).next(o=>{let s=an();return r.forEach((l,c)=>{const u=o.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(ne.min())?(e.removeEntry(l,c.readTime),s=s.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),s=s.insert(l,c)):X("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ps:s,Is:i}})}function _2(t,e){const r=ie(t);return r.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),r.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function w2(t,e){const r=ie(t);return r.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return r.Ur.getTargetData(n,e).next(o=>o?(i=o,$.resolve(i)):r.Ur.allocateTargetId(n).next(s=>(i=new Cn(e,s,"TargetPurposeListen",n.currentSequenceNumber),r.Ur.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=r.os.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(r.os=r.os.insert(n.targetId,n),r._s.set(e,n.targetId)),n})}async function Yf(t,e,r){const n=ie(t),i=n.os.get(e),o=r?"readwrite":"readwrite-primary";try{r||await n.persistence.runTransaction("Release target",o,s=>n.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!tl(s))throw s;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}n.os=n.os.remove(e),n._s.delete(i.target)}function H_(t,e,r){const n=ie(t);let i=ne.min(),o=le();return n.persistence.runTransaction("Execute query","readwrite",s=>function(c,u,h){const p=ie(c),m=p._s.get(h);return m!==void 0?$.resolve(p.os.get(m)):p.Ur.getTargetData(u,h)}(n,s,Rr(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(s,l.targetId).next(c=>{o=c})}).next(()=>n.ss.getDocumentsMatchingQuery(s,e,r?i:ne.min(),r?o:le())).next(l=>(b2(n,dN(e),l),{documents:l,Ts:o})))}function b2(t,e,r){let n=t.us.get(e)||ne.min();r.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),t.us.set(e,n)}class W_{constructor(){this.activeTargetIds=vN()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class E2{constructor(){this.so=new W_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,r,n){}addLocalQueryTarget(e,r=!0){return r&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,r,n){this.oo[e]=r}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new W_,Promise.resolve()}handleUserChange(e,r,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class x2{_o(e){}shutdown(){}}/**
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
 */class K_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ec=null;function ph(){return ec===null?ec=function(){return 268435456+Math.round(2147483648*Math.random())}():ec++,"0x"+ec.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class A2 extends class{constructor(r){this.databaseInfo=r,this.databaseId=r.databaseId;const n=r.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+r.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(r,n,i,o,s){const l=ph(),c=this.xo(r,n.toUriEncodedString());X("RestConnection",`Sending RPC '${r}' ${l}:`,c,i);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,o,s),this.No(r,c,u,i).then(h=>(X("RestConnection",`Received RPC '${r}' ${l}: `,h),h),h=>{throw Mo("RestConnection",`RPC '${r}' ${l} failed with error: `,h,"url: ",c,"request:",i),h})}Lo(r,n,i,o,s,l){return this.Mo(r,n,i,o,s)}Oo(r,n,i){r["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+es}(),r["Content-Type"]="text/plain",this.databaseInfo.appId&&(r["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,s)=>r[s]=o),i&&i.headers.forEach((o,s)=>r[s]=o)}xo(r,n){const i=I2[r];return`${this.Do}/v1/${n}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,r,n,i){const o=ph();return new Promise((s,l)=>{const c=new rx;c.setWithCredentials(!0),c.listenOnce(nx.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Sc.NO_ERROR:const h=c.getResponseJson();X(pt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(h)),s(h);break;case Sc.TIMEOUT:X(pt,`RPC '${e}' ${o} timed out`),l(new Q(M.DEADLINE_EXCEEDED,"Request time out"));break;case Sc.HTTP_ERROR:const p=c.getStatus();if(X(pt,`RPC '${e}' ${o} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const b=m==null?void 0:m.error;if(b&&b.status&&b.message){const k=function(D){const E=D.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(E)>=0?E:M.UNKNOWN}(b.status);l(new Q(k,b.message))}else l(new Q(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Q(M.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{X(pt,`RPC '${e}' ${o} completed.`)}});const u=JSON.stringify(i);X(pt,`RPC '${e}' ${o} sending request:`,i),c.send(r,"POST",u,n,15)})}Bo(e,r,n){const i=ph(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=sx(),l=ox(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,r,n),c.encodeInitMessageHeaders=!0;const h=o.join("");X(pt,`Creating RPC '${e}' stream ${i}: ${h}`,c);const p=s.createWebChannel(h,c);let m=!1,b=!1;const k=new T2({Io:D=>{b?X(pt,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(m||(X(pt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),X(pt,`RPC '${e}' stream ${i} sending:`,D),p.send(D))},To:()=>p.close()}),N=(D,E,y)=>{D.listen(E,T=>{try{y(T)}catch(V){setTimeout(()=>{throw V},0)}})};return N(p,js.EventType.OPEN,()=>{b||(X(pt,`RPC '${e}' stream ${i} transport opened.`),k.yo())}),N(p,js.EventType.CLOSE,()=>{b||(b=!0,X(pt,`RPC '${e}' stream ${i} transport closed`),k.So())}),N(p,js.EventType.ERROR,D=>{b||(b=!0,Mo(pt,`RPC '${e}' stream ${i} transport errored:`,D),k.So(new Q(M.UNAVAILABLE,"The operation could not be completed")))}),N(p,js.EventType.MESSAGE,D=>{var E;if(!b){const y=D.data[0];ye(!!y);const T=y,V=T.error||((E=T[0])===null||E===void 0?void 0:E.error);if(V){X(pt,`RPC '${e}' stream ${i} received error:`,V);const j=V.status;let z=function(_){const x=qe[_];if(x!==void 0)return Nx(x)}(j),w=V.message;z===void 0&&(z=M.INTERNAL,w="Unknown error status: "+j+" with message "+V.message),b=!0,k.So(new Q(z,w)),p.close()}else X(pt,`RPC '${e}' stream ${i} received:`,y),k.bo(y)}}),N(l,ix.STAT_EVENT,D=>{D.stat===Ff.PROXY?X(pt,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Ff.NOPROXY&&X(pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function mh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t){return new VN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e,r,n=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=r,this.ko=n,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const r=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,r-n);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${r} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e,r,n,i,o,s,l,c){this.ui=e,this.Ho=n,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new qx(e,r)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,r){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():r&&r.code===M.RESOURCE_EXHAUSTED?(sn(r.toString()),sn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):r&&r.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(r)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),r=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Yo===r&&this.P_(n,i)},n=>{e(()=>{const i=new Q(M.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(i)})})}P_(e,r){const n=this.h_(this.Yo);this.stream=this.T_(e,r),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{n(()=>this.I_(i))}),this.stream.onMessage(i=>{n(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return r=>{this.ui.enqueueAndForget(()=>this.Yo===e?r():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class S2 extends Hx{constructor(e,r,n,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",r,n,i,s),this.serializer=o}T_(e,r){return this.connection.Bo("Listen",e,r)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const r=FN(this.serializer,e),n=function(o){if(!("targetChange"in o))return ne.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?ne.min():s.readTime?Pr(s.readTime):ne.min()}(e);return this.listener.d_(r,n)}A_(e){const r={};r.database=Qf(this.serializer),r.addTarget=function(o,s){let l;const c=s.target;if(l=Bf(c)?{documents:zN(o,c)}:{query:BN(o,c)._t},l.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){l.resumeToken=Lx(o,s.resumeToken);const u=Wf(o,s.expectedCount);u!==null&&(l.expectedCount=u)}else if(s.snapshotVersion.compareTo(ne.min())>0){l.readTime=mu(o,s.snapshotVersion.toTimestamp());const u=Wf(o,s.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const n=HN(this.serializer,e);n&&(r.labels=n),this.a_(r)}R_(e){const r={};r.database=Qf(this.serializer),r.removeTarget=e,this.a_(r)}}class k2 extends Hx{constructor(e,r,n,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",r,n,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,r){return this.connection.Bo("Write",e,r)}E_(e){return ye(!!e.streamToken),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const r=jN(e.writeResults,e.commitTime),n=Pr(e.commitTime);return this.listener.g_(n,r)}p_(){const e={};e.database=Qf(this.serializer),this.a_(e)}m_(e){const r={streamToken:this.lastStreamToken,writes:e.map(n=>UN(this.serializer,n))};this.a_(r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2 extends class{}{constructor(e,r,n,i){super(),this.authCredentials=e,this.appCheckCredentials=r,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new Q(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,r,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,Kf(r,n),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(M.UNKNOWN,o.toString())})}Lo(e,r,n,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,l])=>this.connection.Lo(e,Kf(r,n),i,s,l,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Q(M.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class R2{constructor(e,r){this.asyncQueue=e,this.onlineStateHandler=r,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const r=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(sn(r),this.D_=!1):X("OnlineStateTracker",r)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e,r,n,i,o){this.localStore=e,this.datastore=r,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{n.enqueueAndForget(async()=>{zi(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=ie(c);u.L_.add(4),await il(u),u.q_.set("Unknown"),u.L_.delete(4),await Xu(u)}(this))})}),this.q_=new R2(n,i)}}async function Xu(t){if(zi(t))for(const e of t.B_)await e(!0)}async function il(t){for(const e of t.B_)await e(!1)}function Wx(t,e){const r=ie(t);r.N_.has(e.targetId)||(r.N_.set(e.targetId,e),ng(r)?rg(r):ns(r).r_()&&tg(r,e))}function eg(t,e){const r=ie(t),n=ns(r);r.N_.delete(e),n.r_()&&Kx(r,e),r.N_.size===0&&(n.r_()?n.o_():zi(r)&&r.q_.set("Unknown"))}function tg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const r=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(r)}ns(t).A_(e)}function Kx(t,e){t.Q_.xe(e),ns(t).R_(e)}function rg(t){t.Q_=new NN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ns(t).start(),t.q_.v_()}function ng(t){return zi(t)&&!ns(t).n_()&&t.N_.size>0}function zi(t){return ie(t).L_.size===0}function Gx(t){t.Q_=void 0}async function N2(t){t.q_.set("Online")}async function O2(t){t.N_.forEach((e,r)=>{tg(t,e)})}async function D2(t,e){Gx(t),ng(t)?(t.q_.M_(e),rg(t)):t.q_.set("Unknown")}async function L2(t,e,r){if(t.q_.set("Online"),e instanceof Dx&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const l of o.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,s),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(n){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await gu(t,n)}else if(e instanceof Rc?t.Q_.Ke(e):e instanceof Ox?t.Q_.He(e):t.Q_.We(e),!r.isEqual(ne.min()))try{const n=await Bx(t.localStore);r.compareTo(n)>=0&&await function(o,s){const l=o.Q_.rt(s);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=o.N_.get(u);h&&o.N_.set(u,h.withResumeToken(c.resumeToken,s))}}),l.targetMismatches.forEach((c,u)=>{const h=o.N_.get(c);if(!h)return;o.N_.set(c,h.withResumeToken(lt.EMPTY_BYTE_STRING,h.snapshotVersion)),Kx(o,c);const p=new Cn(h.target,c,u,h.sequenceNumber);tg(o,p)}),o.remoteSyncer.applyRemoteEvent(l)}(t,r)}catch(n){X("RemoteStore","Failed to raise snapshot:",n),await gu(t,n)}}async function gu(t,e,r){if(!tl(e))throw e;t.L_.add(1),await il(t),t.q_.set("Offline"),r||(r=()=>Bx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await r(),t.L_.delete(1),await Xu(t)})}function Qx(t,e){return e().catch(r=>gu(t,r,e))}async function Ju(t){const e=ie(t),r=Hn(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;V2(e);)try{const i=await _2(e.localStore,n);if(i===null){e.O_.length===0&&r.o_();break}n=i.batchId,M2(e,i)}catch(i){await gu(e,i)}Yx(e)&&Xx(e)}function V2(t){return zi(t)&&t.O_.length<10}function M2(t,e){t.O_.push(e);const r=Hn(t);r.r_()&&r.V_&&r.m_(e.mutations)}function Yx(t){return zi(t)&&!Hn(t).n_()&&t.O_.length>0}function Xx(t){Hn(t).start()}async function $2(t){Hn(t).p_()}async function F2(t){const e=Hn(t);for(const r of t.O_)e.m_(r.mutations)}async function U2(t,e,r){const n=t.O_.shift(),i=Gm.from(n,e,r);await Qx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ju(t)}async function j2(t,e){e&&Hn(t).V_&&await async function(n,i){if(function(s){return CN(s)&&s!==M.ABORTED}(i.code)){const o=n.O_.shift();Hn(n).s_(),await Qx(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Ju(n)}}(t,e),Yx(t)&&Xx(t)}async function G_(t,e){const r=ie(t);r.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const n=zi(r);r.L_.add(3),await il(r),n&&r.q_.set("Unknown"),await r.remoteSyncer.handleCredentialChange(e),r.L_.delete(3),await Xu(r)}async function z2(t,e){const r=ie(t);e?(r.L_.delete(2),await Xu(r)):e||(r.L_.add(2),await il(r),r.q_.set("Unknown"))}function ns(t){return t.K_||(t.K_=function(r,n,i){const o=ie(r);return o.w_(),new S2(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:N2.bind(null,t),Ro:O2.bind(null,t),mo:D2.bind(null,t),d_:L2.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ng(t)?rg(t):t.q_.set("Unknown")):(await t.K_.stop(),Gx(t))})),t.K_}function Hn(t){return t.U_||(t.U_=function(r,n,i){const o=ie(r);return o.w_(),new k2(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:$2.bind(null,t),mo:j2.bind(null,t),f_:F2.bind(null,t),g_:U2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ju(t)):(await t.U_.stop(),t.O_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,r,n,i,o){this.asyncQueue=e,this.timerId=r,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new Ei,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,r,n,i,o){const s=Date.now()+n,l=new ig(e,r,s,i,o);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function og(t,e){if(sn("AsyncQueue",`${e}: ${t}`),tl(t))return new Q(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.comparator=e?(r,n)=>e(r,n)||ee.comparator(r.key,n.key):(r,n)=>ee.comparator(r.key,n.key),this.keyedMap=zs(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new ko(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const r=this.keyedMap.get(e);return r?this.sortedSet.indexOf(r):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((r,n)=>(e(r),!1))}add(e){const r=this.delete(e.key);return r.copy(r.keyedMap.insert(e.key,e),r.sortedSet.insert(e,null))}delete(e){const r=this.get(e);return r?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(r)):this}isEqual(e){if(!(e instanceof ko)||this.size!==e.size)return!1;const r=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;r.hasNext();){const i=r.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(r=>{e.push(r.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,r){const n=new ko;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=r,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(){this.W_=new Oe(ee.comparator)}track(e){const r=e.doc.key,n=this.W_.get(r);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(r,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(r,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(r,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(r,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(r):e.type===1&&n.type===2?this.W_=this.W_.insert(r,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(r,{type:2,doc:e.doc}):re():this.W_=this.W_.insert(r,e)}G_(){const e=[];return this.W_.inorderTraversal((r,n)=>{e.push(n)}),e}}class Bo{constructor(e,r,n,i,o,s,l,c,u){this.query=e,this.docs=r,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,r,n,i,o){const s=[];return r.forEach(l=>{s.push({type:0,doc:l})}),new Bo(e,r,ko.emptySet(r),s,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const r=this.docChanges,n=e.docChanges;if(r.length!==n.length)return!1;for(let i=0;i<r.length;i++)if(r[i].type!==n[i].type||!r[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class q2{constructor(){this.queries=Y_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(r,n){const i=ie(r),o=i.queries;i.queries=Y_(),o.forEach((s,l)=>{for(const c of l.j_)c.onError(n)})})(this,new Q(M.ABORTED,"Firestore shutting down"))}}function Y_(){return new rs(t=>_x(t),Hu)}async function H2(t,e){const r=ie(t);let n=3;const i=e.query;let o=r.queries.get(i);o?!o.H_()&&e.J_()&&(n=2):(o=new B2,n=e.J_()?0:1);try{switch(n){case 0:o.z_=await r.onListen(i,!0);break;case 1:o.z_=await r.onListen(i,!1);break;case 2:await r.onFirstRemoteStoreListen(i)}}catch(s){const l=og(s,`Initialization of query '${ro(e.query)}' failed`);return void e.onError(l)}r.queries.set(i,o),o.j_.push(e),e.Z_(r.onlineState),o.z_&&e.X_(o.z_)&&sg(r)}async function W2(t,e){const r=ie(t),n=e.query;let i=3;const o=r.queries.get(n);if(o){const s=o.j_.indexOf(e);s>=0&&(o.j_.splice(s,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return r.queries.delete(n),r.onUnlisten(n,!0);case 1:return r.queries.delete(n),r.onUnlisten(n,!1);case 2:return r.onLastRemoteStoreUnlisten(n);default:return}}function K2(t,e){const r=ie(t);let n=!1;for(const i of e){const o=i.query,s=r.queries.get(o);if(s){for(const l of s.j_)l.X_(i)&&(n=!0);s.z_=i}}n&&sg(r)}function G2(t,e,r){const n=ie(t),i=n.queries.get(e);if(i)for(const o of i.j_)o.onError(r);n.queries.delete(e)}function sg(t){t.Y_.forEach(e=>{e.next()})}var Xf,X_;(X_=Xf||(Xf={})).ea="default",X_.Cache="cache";class Q2{constructor(e,r,n){this.query=e,this.ta=r,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new Bo(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let r=!1;return this.na?this.ia(e)&&(this.ta.next(e),r=!0):this.sa(e,this.onlineState)&&(this.oa(e),r=!0),this.ra=e,r}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let r=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),r=!0),r}sa(e,r){if(!e.fromCache||!this.J_())return!0;const n=r!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||r==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const r=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!r)&&this.options.includeMetadataChanges===!0}oa(e){e=Bo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Xf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e){this.key=e}}class Zx{constructor(e){this.key=e}}class Y2{constructor(e,r){this.query=e,this.Ta=r,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=le(),this.mutatedKeys=le(),this.Aa=wx(e),this.Ra=new ko(this.Aa)}get Va(){return this.Ta}ma(e,r){const n=r?r.fa:new Q_,i=r?r.Ra:this.Ra;let o=r?r.mutatedKeys:this.mutatedKeys,s=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,p)=>{const m=i.get(h),b=Wu(this.query,p)?p:null,k=!!m&&this.mutatedKeys.has(m.key),N=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let D=!1;m&&b?m.data.isEqual(b.data)?k!==N&&(n.track({type:3,doc:b}),D=!0):this.ga(m,b)||(n.track({type:2,doc:b}),D=!0,(c&&this.Aa(b,c)>0||u&&this.Aa(b,u)<0)&&(l=!0)):!m&&b?(n.track({type:0,doc:b}),D=!0):m&&!b&&(n.track({type:1,doc:m}),D=!0,(c||u)&&(l=!0)),D&&(b?(s=s.add(b),o=N?o.add(h):o.delete(h)):(s=s.delete(h),o=o.delete(h)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const h=this.query.limitType==="F"?s.last():s.first();s=s.delete(h.key),o=o.delete(h.key),n.track({type:1,doc:h})}return{Ra:s,fa:n,ns:l,mutatedKeys:o}}ga(e,r){return e.hasLocalMutations&&r.hasCommittedMutations&&!r.hasLocalMutations}applyChanges(e,r,n,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((h,p)=>function(b,k){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return N(b)-N(k)}(h.type,p.type)||this.Aa(h.doc,p.doc)),this.pa(n),i=i!=null&&i;const l=r&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,u=c!==this.Ea;return this.Ea=c,s.length!==0||u?{snapshot:new Bo(this.query,e.Ra,o,s,e.mutatedKeys,c===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Q_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(r=>this.Ta=this.Ta.add(r)),e.modifiedDocuments.forEach(r=>{}),e.removedDocuments.forEach(r=>this.Ta=this.Ta.delete(r)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=le(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const r=[];return e.forEach(n=>{this.da.has(n)||r.push(new Zx(n))}),this.da.forEach(n=>{e.has(n)||r.push(new Jx(n))}),r}ba(e){this.Ta=e.Ts,this.da=le();const r=this.ma(e.documents);return this.applyChanges(r,!0)}Da(){return Bo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class X2{constructor(e,r,n){this.query=e,this.targetId=r,this.view=n}}class J2{constructor(e){this.key=e,this.va=!1}}class Z2{constructor(e,r,n,i,o,s){this.localStore=e,this.remoteStore=r,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new rs(l=>_x(l),Hu),this.Ma=new Map,this.xa=new Set,this.Oa=new Oe(ee.comparator),this.Na=new Map,this.La=new Xm,this.Ba={},this.ka=new Map,this.qa=zo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function eO(t,e,r=!0){const n=oI(t);let i;const o=n.Fa.get(e);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await eI(n,e,r,!0),i}async function tO(t,e){const r=oI(t);await eI(r,e,!0,!1)}async function eI(t,e,r,n){const i=await w2(t.localStore,Rr(e)),o=i.targetId,s=t.sharedClientState.addLocalQueryTarget(o,r);let l;return n&&(l=await rO(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&r&&Wx(t.remoteStore,i),l}async function rO(t,e,r,n,i){t.Ka=(p,m,b)=>async function(N,D,E,y){let T=D.view.ma(E);T.ns&&(T=await H_(N.localStore,D.query,!1).then(({documents:w})=>D.view.ma(w,T)));const V=y&&y.targetChanges.get(D.targetId),j=y&&y.targetMismatches.get(D.targetId)!=null,z=D.view.applyChanges(T,N.isPrimaryClient,V,j);return Z_(N,D.targetId,z.wa),z.snapshot}(t,p,m,b);const o=await H_(t.localStore,e,!0),s=new Y2(e,o.Ts),l=s.ma(o.documents),c=nl.createSynthesizedTargetChangeForCurrentChange(r,n&&t.onlineState!=="Offline",i),u=s.applyChanges(l,t.isPrimaryClient,c);Z_(t,r,u.wa);const h=new X2(e,r,s);return t.Fa.set(e,h),t.Ma.has(r)?t.Ma.get(r).push(e):t.Ma.set(r,[e]),u.snapshot}async function nO(t,e,r){const n=ie(t),i=n.Fa.get(e),o=n.Ma.get(i.targetId);if(o.length>1)return n.Ma.set(i.targetId,o.filter(s=>!Hu(s,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Yf(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),r&&eg(n.remoteStore,i.targetId),Jf(n,i.targetId)}).catch(el)):(Jf(n,i.targetId),await Yf(n.localStore,i.targetId,!0))}async function iO(t,e){const r=ie(t),n=r.Fa.get(e),i=r.Ma.get(n.targetId);r.isPrimaryClient&&i.length===1&&(r.sharedClientState.removeLocalQueryTarget(n.targetId),eg(r.remoteStore,n.targetId))}async function oO(t,e,r){const n=hO(t);try{const i=await function(s,l){const c=ie(s),u=Qe.now(),h=l.reduce((b,k)=>b.add(k.key),le());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",b=>{let k=an(),N=le();return c.cs.getEntries(b,h).next(D=>{k=D,k.forEach((E,y)=>{y.isValidDocument()||(N=N.add(E))})}).next(()=>c.localDocuments.getOverlayedDocuments(b,k)).next(D=>{p=D;const E=[];for(const y of l){const T=IN(y,p.get(y.key).overlayedDocument);T!=null&&E.push(new Jn(y.key,T,dx(T.value.mapValue),or.exists(!0)))}return c.mutationQueue.addMutationBatch(b,u,E,l)}).next(D=>{m=D;const E=D.applyToLocalDocumentSet(p,N);return c.documentOverlayCache.saveOverlays(b,D.batchId,E)})}).then(()=>({batchId:m.batchId,changes:Ex(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(s,l,c){let u=s.Ba[s.currentUser.toKey()];u||(u=new Oe(fe)),u=u.insert(l,c),s.Ba[s.currentUser.toKey()]=u}(n,i.batchId,r),await ol(n,i.changes),await Ju(n.remoteStore)}catch(i){const o=og(i,"Failed to persist write");r.reject(o)}}async function tI(t,e){const r=ie(t);try{const n=await v2(r.localStore,e);e.targetChanges.forEach((i,o)=>{const s=r.Na.get(o);s&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.va=!0:i.modifiedDocuments.size>0?ye(s.va):i.removedDocuments.size>0&&(ye(s.va),s.va=!1))}),await ol(r,n,e)}catch(n){await el(n)}}function J_(t,e,r){const n=ie(t);if(n.isPrimaryClient&&r===0||!n.isPrimaryClient&&r===1){const i=[];n.Fa.forEach((o,s)=>{const l=s.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(s,l){const c=ie(s);c.onlineState=l;let u=!1;c.queries.forEach((h,p)=>{for(const m of p.j_)m.Z_(l)&&(u=!0)}),u&&sg(c)}(n.eventManager,e),i.length&&n.Ca.d_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function sO(t,e,r){const n=ie(t);n.sharedClientState.updateQueryState(e,"rejected",r);const i=n.Na.get(e),o=i&&i.key;if(o){let s=new Oe(ee.comparator);s=s.insert(o,yt.newNoDocument(o,ne.min()));const l=le().add(o),c=new Qu(ne.min(),new Map,new Oe(fe),s,l);await tI(n,c),n.Oa=n.Oa.remove(o),n.Na.delete(e),ag(n)}else await Yf(n.localStore,e,!1).then(()=>Jf(n,e,r)).catch(el)}async function aO(t,e){const r=ie(t),n=e.batch.batchId;try{const i=await g2(r.localStore,e);nI(r,n,null),rI(r,n),r.sharedClientState.updateMutationState(n,"acknowledged"),await ol(r,i)}catch(i){await el(i)}}async function lO(t,e,r){const n=ie(t);try{const i=await function(s,l){const c=ie(s);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(ye(p!==null),h=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(n.localStore,e);nI(n,e,r),rI(n,e),n.sharedClientState.updateMutationState(e,"rejected",r),await ol(n,i)}catch(i){await el(i)}}function rI(t,e){(t.ka.get(e)||[]).forEach(r=>{r.resolve()}),t.ka.delete(e)}function nI(t,e,r){const n=ie(t);let i=n.Ba[n.currentUser.toKey()];if(i){const o=i.get(e);o&&(r?o.reject(r):o.resolve(),i=i.remove(e)),n.Ba[n.currentUser.toKey()]=i}}function Jf(t,e,r=null){t.sharedClientState.removeLocalQueryTarget(e);for(const n of t.Ma.get(e))t.Fa.delete(n),r&&t.Ca.$a(n,r);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(n=>{t.La.containsKey(n)||iI(t,n)})}function iI(t,e){t.xa.delete(e.path.canonicalString());const r=t.Oa.get(e);r!==null&&(eg(t.remoteStore,r),t.Oa=t.Oa.remove(e),t.Na.delete(r),ag(t))}function Z_(t,e,r){for(const n of r)n instanceof Jx?(t.La.addReference(n.key,e),cO(t,n)):n instanceof Zx?(X("SyncEngine","Document no longer in limbo: "+n.key),t.La.removeReference(n.key,e),t.La.containsKey(n.key)||iI(t,n.key)):re()}function cO(t,e){const r=e.key,n=r.path.canonicalString();t.Oa.get(r)||t.xa.has(n)||(X("SyncEngine","New document in limbo: "+r),t.xa.add(n),ag(t))}function ag(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const r=new ee(Ae.fromString(e)),n=t.qa.next();t.Na.set(n,new J2(r)),t.Oa=t.Oa.insert(r,n),Wx(t.remoteStore,new Cn(Rr(Hm(r.path)),n,"TargetPurposeLimboResolution",Fm.oe))}}async function ol(t,e,r){const n=ie(t),i=[],o=[],s=[];n.Fa.isEmpty()||(n.Fa.forEach((l,c)=>{s.push(n.Ka(c,e,r).then(u=>{var h;if((u||r)&&n.isPrimaryClient){const p=u?!u.fromCache:(h=r==null?void 0:r.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;n.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){i.push(u);const p=Zm.Wi(c.targetId,u);o.push(p)}}))}),await Promise.all(s),n.Ca.d_(i),await async function(c,u){const h=ie(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>$.forEach(u,m=>$.forEach(m.$i,b=>h.persistence.referenceDelegate.addReference(p,m.targetId,b)).next(()=>$.forEach(m.Ui,b=>h.persistence.referenceDelegate.removeReference(p,m.targetId,b)))))}catch(p){if(!tl(p))throw p;X("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const b=h.os.get(m),k=b.snapshotVersion,N=b.withLastLimboFreeSnapshotVersion(k);h.os=h.os.insert(m,N)}}}(n.localStore,o))}async function uO(t,e){const r=ie(t);if(!r.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const n=await zx(r.localStore,e);r.currentUser=e,function(o,s){o.ka.forEach(l=>{l.forEach(c=>{c.reject(new Q(M.CANCELLED,s))})}),o.ka.clear()}(r,"'waitForPendingWrites' promise is rejected due to a user change."),r.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await ol(r,n.hs)}}function dO(t,e){const r=ie(t),n=r.Na.get(e);if(n&&n.va)return le().add(n.key);{let i=le();const o=r.Ma.get(e);if(!o)return i;for(const s of o){const l=r.Fa.get(s);i=i.unionWith(l.view.Va)}return i}}function oI(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sO.bind(null,e),e.Ca.d_=K2.bind(null,e.eventManager),e.Ca.$a=G2.bind(null,e.eventManager),e}function hO(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=aO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lO.bind(null,e),e}class vu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Yu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,r){return null}Ha(e,r){return null}za(e){return m2(this.persistence,new f2,e.initialUser,this.serializer)}Ga(e){return new u2(Jm.Zr,this.serializer)}Wa(e){return new E2}async terminate(){var e,r;(e=this.gcScheduler)===null||e===void 0||e.stop(),(r=this.indexBackfillerScheduler)===null||r===void 0||r.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vu.provider={build:()=>new vu};class Zf{async initialize(e,r){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(r),this.remoteStore=this.createRemoteStore(r),this.eventManager=this.createEventManager(r),this.syncEngine=this.createSyncEngine(r,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>J_(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=uO.bind(null,this.syncEngine),await z2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new q2}()}createDatastore(e){const r=Yu(e.databaseInfo.databaseId),n=function(o){return new A2(o)}(e.databaseInfo);return function(o,s,l,c){return new C2(o,s,l,c)}(e.authCredentials,e.appCheckCredentials,n,r)}createRemoteStore(e){return function(n,i,o,s,l){return new P2(n,i,o,s,l)}(this.localStore,this.datastore,e.asyncQueue,r=>J_(this.syncEngine,r,0),function(){return K_.D()?new K_:new x2}())}createSyncEngine(e,r){return function(i,o,s,l,c,u,h){const p=new Z2(i,o,s,l,c,u);return h&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,r)}async terminate(){var e,r;await async function(i){const o=ie(i);X("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await il(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(r=this.eventManager)===null||r===void 0||r.terminate()}}Zf.provider={build:()=>new Zf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fO{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):sn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,r){setTimeout(()=>{this.muted||e(r)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e,r,n,i,o){this.authCredentials=e,this.appCheckCredentials=r,this.asyncQueue=n,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=lx.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async s=>{X("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(n,s=>(X("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ei;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){const n=og(r,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function gh(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const r=t.configuration;await e.initialize(r);let n=r.initialUser;t.setCredentialChangeListener(async i=>{n.isEqual(i)||(await zx(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ew(t,e){t.asyncQueue.verifyOperationInProgress();const r=await mO(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(r,t.configuration),t.setCredentialChangeListener(n=>G_(e.remoteStore,n)),t.setAppCheckTokenChangeListener((n,i)=>G_(e.remoteStore,i)),t._onlineComponents=e}async function mO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await gh(t,t._uninitializedComponentsProvider._offline)}catch(e){const r=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(r))throw r;Mo("Error using user provided cache. Falling back to memory cache: "+r),await gh(t,new vu)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await gh(t,new vu);return t._offlineComponents}async function sI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await ew(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await ew(t,new Zf))),t._onlineComponents}function gO(t){return sI(t).then(e=>e.syncEngine)}async function tw(t){const e=await sI(t),r=e.eventManager;return r.onListen=eO.bind(null,e.syncEngine),r.onUnlisten=nO.bind(null,e.syncEngine),r.onFirstRemoteStoreListen=tO.bind(null,e.syncEngine),r.onLastRemoteStoreUnlisten=iO.bind(null,e.syncEngine),r}/**
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
 */function aI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(t,e,r){if(!r)throw new Q(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vO(t,e,r,n){if(e===!0&&n===!0)throw new Q(M.INVALID_ARGUMENT,`${t} and ${r} cannot be used together.`)}function nw(t){if(!ee.isDocumentKey(t))throw new Q(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function iw(t){if(ee.isDocumentKey(t))throw new Q(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function Nr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=Zu(t);throw new Q(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${r}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e){var r,n;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(r=e.ssl)===null||r===void 0||r;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=aI((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ed{constructor(e,r,n,i){this._authCredentials=e,this._appCheckCredentials=r,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ow({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ow(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new OP;switch(n.type){case"firstParty":return new MP(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Q(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(r){const n=rw.get(r);n&&(X("ComponentProvider","Removing Datastore"),rw.delete(r),n.terminate())}(this),Promise.resolve()}}function yO(t,e,r,n={}){var i;const o=(t=Nr(t,ed))._getSettings(),s=`${e}:${r}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Mo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),n.mockUserToken){let l,c;if(typeof n.mockUserToken=="string")l=n.mockUserToken,c=gt.MOCK_USER;else{l=Xk(n.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=n.mockUserToken.sub||n.mockUserToken.user_id;if(!u)throw new Q(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new gt(u)}t._authCredentials=new DP(new ax(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,r,n){this.converter=r,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Bi(this.firestore,e,this._query)}}class kt{constructor(e,r,n){this.converter=r,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kt(this.firestore,e,this._key)}}class Fn extends Bi{constructor(e,r,n){super(e,r,Hm(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kt(this.firestore,null,new ee(e))}withConverter(e){return new Fn(this.firestore,e,this._path)}}function sw(t,e,...r){if(t=Me(t),lI("collection","path",e),t instanceof ed){const n=Ae.fromString(e,...r);return iw(n),new Fn(t,null,n)}{if(!(t instanceof kt||t instanceof Fn))throw new Q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(Ae.fromString(e,...r));return iw(n),new Fn(t.firestore,null,n)}}function It(t,e,...r){if(t=Me(t),arguments.length===1&&(e=lx.newId()),lI("doc","path",e),t instanceof ed){const n=Ae.fromString(e,...r);return nw(n),new kt(t,null,new ee(n))}{if(!(t instanceof kt||t instanceof Fn))throw new Q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(Ae.fromString(e,...r));return nw(n),new kt(t.firestore,t instanceof Fn?t.converter:null,new ee(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new qx(this,"async_queue_retry"),this.Vu=()=>{const n=mh();n&&X("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const r=mh();r&&typeof r.addEventListener=="function"&&r.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const r=mh();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const r=new Ei;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(r.resolve,r.reject),r.promise)).then(()=>r.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!tl(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const r=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const i=function(s){let l=s.message||"";return s.stack&&(l=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),l}(n);throw sn("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.du=!1,n))));return this.mu=r,r}enqueueAfterDelay(e,r,n){this.fu(),this.Ru.indexOf(e)>-1&&(r=0);const i=ig.createAndSchedule(this,e,r,n,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&re()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const r of this.Tu)if(r.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((r,n)=>r.targetTimeMs-n.targetTimeMs);for(const r of this.Tu)if(r.skipDelay(),e!=="all"&&r.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const r=this.Tu.indexOf(e);this.Tu.splice(r,1)}}function lw(t){return function(r,n){if(typeof r!="object"||r===null)return!1;const i=r;for(const o of n)if(o in i&&typeof i[o]=="function")return!0;return!1}(t,["next","error","complete"])}class Di extends ed{constructor(e,r,n,i){super(e,r,n,i),this.type="firestore",this._queue=new aw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new aw(e),this._firestoreClient=void 0,await e}}}function _O(t,e){const r=typeof t=="object"?t:Am(),n=typeof t=="string"?t:"(default)",i=Yo(r,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=Qk("firestore");o&&yO(i,...o)}return i}function cI(t){if(t._terminated)throw new Q(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||wO(t),t._firestoreClient}function wO(t){var e,r,n;const i=t._freezeSettings(),o=function(l,c,u,h){return new YP(l,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,aI(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((r=i.localCache)===null||r===void 0)&&r._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new pO(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qo(lt.fromBase64String(e))}catch(r){throw new Q(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(e){return new qo(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(...e){for(let r=0;r<e.length;++r)if(e[r].length===0)throw new Q(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,r){if(!isFinite(e)||e<-90||e>90)throw new Q(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(r)||r<-180||r>180)throw new Q(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=e,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
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
 */class cg{constructor(e){this._values=(e||[]).map(r=>r)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO=/^__.*__$/;class EO{constructor(e,r,n){this.data=e,this.fieldMask=r,this.fieldTransforms=n}toMutation(e,r){return this.fieldMask!==null?new Jn(e,this.data,this.fieldMask,r,this.fieldTransforms):new rl(e,this.data,r,this.fieldTransforms)}}class uI{constructor(e,r,n){this.data=e,this.fieldMask=r,this.fieldTransforms=n}toMutation(e,r){return new Jn(e,this.data,this.fieldMask,r,this.fieldTransforms)}}function dI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class rd{constructor(e,r,n,i,o,s){this.settings=e,this.databaseId=r,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new rd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var r;const n=(r=this.path)===null||r===void 0?void 0:r.child(e),i=this.Fu({path:n,xu:!1});return i.Ou(e),i}Nu(e){var r;const n=(r=this.path)===null||r===void 0?void 0:r.child(e),i=this.Fu({path:n,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return yu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(r=>e.isPrefixOf(r))!==void 0||this.fieldTransforms.find(r=>e.isPrefixOf(r.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(dI(this.Cu)&&bO.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class xO{constructor(e,r,n){this.databaseId=e,this.ignoreUndefinedProperties=r,this.serializer=n||Yu(e)}Qu(e,r,n,i=!1){return new rd({Cu:e,methodName:r,qu:n,path:it.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nd(t){const e=t._freezeSettings(),r=Yu(t._databaseId);return new xO(t._databaseId,!!e.ignoreUndefinedProperties,r)}function hI(t,e,r,n,i,o={}){const s=t.Qu(o.merge||o.mergeFields?2:0,e,r,i);hg("Data must be an object, but it was:",s,n);const l=fI(n,s);let c,u;if(o.merge)c=new Ht(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const h=[];for(const p of o.mergeFields){const m=ep(e,p,r);if(!s.contains(m))throw new Q(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);mI(h,m)||h.push(m)}c=new Ht(h),u=s.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=s.fieldTransforms;return new EO(new Lt(l),c,u)}class id extends sl{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof id}}function IO(t,e,r){return new rd({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:r},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ug extends sl{_toFieldTransform(e){return new Cx(e.path,new La)}isEqual(e){return e instanceof ug}}class dg extends sl{constructor(e,r){super(e),this.Ku=r}_toFieldTransform(e){const r=IO(this,e,!0),n=this.Ku.map(o=>is(o,r)),i=new jo(n);return new Cx(e.path,i)}isEqual(e){return e instanceof dg&&Aa(this.Ku,e.Ku)}}function TO(t,e,r,n){const i=t.Qu(1,e,r);hg("Data must be an object, but it was:",i,n);const o=[],s=Lt.empty();ji(n,(c,u)=>{const h=fg(e,c,r);u=Me(u);const p=i.Nu(h);if(u instanceof id)o.push(h);else{const m=is(u,p);m!=null&&(o.push(h),s.set(h,m))}});const l=new Ht(o);return new uI(s,l,i.fieldTransforms)}function AO(t,e,r,n,i,o){const s=t.Qu(1,e,r),l=[ep(e,n,r)],c=[i];if(o.length%2!=0)throw new Q(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<o.length;m+=2)l.push(ep(e,o[m])),c.push(o[m+1]);const u=[],h=Lt.empty();for(let m=l.length-1;m>=0;--m)if(!mI(u,l[m])){const b=l[m];let k=c[m];k=Me(k);const N=s.Nu(b);if(k instanceof id)u.push(b);else{const D=is(k,N);D!=null&&(u.push(b),h.set(b,D))}}const p=new Ht(u);return new uI(h,p,s.fieldTransforms)}function SO(t,e,r,n=!1){return is(r,t.Qu(n?4:3,e))}function is(t,e){if(pI(t=Me(t)))return hg("Unsupported field value:",e,t),fI(t,e);if(t instanceof sl)return function(n,i){if(!dI(i.Cu))throw i.Bu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,i){const o=[];let s=0;for(const l of n){let c=is(l,i.Lu(s));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),s++}return{arrayValue:{values:o}}}(t,e)}return function(n,i){if((n=Me(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return yN(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=Qe.fromDate(n);return{timestampValue:mu(i.serializer,o)}}if(n instanceof Qe){const o=new Qe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:mu(i.serializer,o)}}if(n instanceof lg)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof qo)return{bytesValue:Lx(i.serializer,n._byteString)};if(n instanceof kt){const o=i.databaseId,s=n.firestore._databaseId;if(!s.isEqual(o))throw i.Bu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ym(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof cg)return function(s,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Wm(l.serializer,c)})}}}}}}(n,i);throw i.Bu(`Unsupported field value: ${Zu(n)}`)}(t,e)}function fI(t,e){const r={};return cx(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ji(t,(n,i)=>{const o=is(i,e.Mu(n));o!=null&&(r[n]=o)}),{mapValue:{fields:r}}}function pI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof lg||t instanceof qo||t instanceof kt||t instanceof sl||t instanceof cg)}function hg(t,e,r){if(!pI(r)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(r)){const n=Zu(r);throw n==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+n)}}function ep(t,e,r){if((e=Me(e))instanceof td)return e._internalPath;if(typeof e=="string")return fg(t,e);throw yu("Field path arguments must be of type string or ",t,!1,void 0,r)}const kO=new RegExp("[~\\*/\\[\\]]");function fg(t,e,r){if(e.search(kO)>=0)throw yu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,r);try{return new td(...e.split("."))._internalPath}catch{throw yu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,r)}}function yu(t,e,r,n,i){const o=n&&!n.isEmpty(),s=i!==void 0;let l=`Function ${e}() called with invalid data`;r&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=` in field ${n}`),s&&(c+=` in document ${i}`),c+=")"),new Q(M.INVALID_ARGUMENT,l+t+c)}function mI(t,e){return t.some(r=>r.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,r,n,i,o){this._firestore=e,this._userDataWriter=r,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const r=this._document.data.field(od("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r)}}}class CO extends gI{data(){return super.data()}}function od(t,e){return typeof e=="string"?fg(t,e):e instanceof td?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pg{}class vI extends pg{}function PO(t,e,...r){let n=[];e instanceof pg&&n.push(e),n=n.concat(r),function(o){const s=o.filter(c=>c instanceof mg).length,l=o.filter(c=>c instanceof sd).length;if(s>1||s>0&&l>0)throw new Q(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)t=i._apply(t);return t}class sd extends vI{constructor(e,r,n){super(),this._field=e,this._op=r,this._value=n,this.type="where"}static _create(e,r,n){return new sd(e,r,n)}_apply(e){const r=this._parse(e);return yI(e._query,r),new Bi(e.firestore,e.converter,qf(e._query,r))}_parse(e){const r=nd(e.firestore);return function(o,s,l,c,u,h,p){let m;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new Q(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){uw(p,h);const b=[];for(const k of p)b.push(cw(c,o,k));m={arrayValue:{values:b}}}else m=cw(c,o,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||uw(p,h),m=SO(l,s,p,h==="in"||h==="not-in");return We.create(u,h,m)}(e._query,"where",r,e.firestore._databaseId,this._field,this._op,this._value)}}function NO(t,e,r){const n=e,i=od("where",t);return sd._create(i,n,r)}class mg extends pg{constructor(e,r){super(),this.type=e,this._queryConstraints=r}static _create(e,r){return new mg(e,r)}_parse(e){const r=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return r.length===1?r[0]:Er.create(r,this._getOperator())}_apply(e){const r=this._parse(e);return r.getFilters().length===0?e:(function(i,o){let s=i;const l=o.getFlattenedFilters();for(const c of l)yI(s,c),s=qf(s,c)}(e._query,r),new Bi(e.firestore,e.converter,qf(e._query,r)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class gg extends vI{constructor(e,r){super(),this._field=e,this._direction=r,this.type="orderBy"}static _create(e,r){return new gg(e,r)}_apply(e){const r=function(i,o,s){if(i.startAt!==null)throw new Q(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Q(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Da(o,s)}(e._query,this._field,this._direction);return new Bi(e.firestore,e.converter,function(i,o){const s=i.explicitOrderBy.concat([o]);return new ts(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function OO(t,e="asc"){const r=e,n=od("orderBy",t);return gg._create(n,r)}function cw(t,e,r){if(typeof(r=Me(r))=="string"){if(r==="")throw new Q(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yx(e)&&r.indexOf("/")!==-1)throw new Q(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);const n=e.path.child(Ae.fromString(r));if(!ee.isDocumentKey(n))throw new Q(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return k_(t,new ee(n))}if(r instanceof kt)return k_(t,r._key);throw new Q(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zu(r)}.`)}function uw(t,e){if(!Array.isArray(t)||t.length===0)throw new Q(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function yI(t,e){const r=function(i,o){for(const s of i)for(const l of s.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(r!==null)throw r===e.op?new Q(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${r.toString()}' filters.`)}class DO{convertValue(e,r="none"){switch(Oi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,r);case 5:return e.stringValue;case 6:return this.convertBytes(Ni(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,r);case 11:return this.convertObject(e.mapValue,r);case 10:return this.convertVectorValue(e.mapValue);default:throw re()}}convertObject(e,r){return this.convertObjectMap(e.fields,r)}convertObjectMap(e,r="none"){const n={};return ji(e,(i,o)=>{n[i]=this.convertValue(o,r)}),n}convertVectorValue(e){var r,n,i;const o=(i=(n=(r=e.fields)===null||r===void 0?void 0:r.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(s=>je(s.doubleValue));return new cg(o)}convertGeoPoint(e){return new lg(je(e.latitude),je(e.longitude))}convertArray(e,r){return(e.values||[]).map(n=>this.convertValue(n,r))}convertServerTimestamp(e,r){switch(r){case"previous":const n=jm(e);return n==null?null:this.convertValue(n,r);case"estimate":return this.convertTimestamp(Pa(e));default:return null}}convertTimestamp(e){const r=qn(e);return new Qe(r.seconds,r.nanos)}convertDocumentKey(e,r){const n=Ae.fromString(e);ye(jx(n));const i=new Na(n.get(1),n.get(3)),o=new ee(n.popFirst(5));return i.isEqual(r)||sn(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(t,e,r){let n;return n=t?r&&(r.merge||r.mergeFields)?t.toFirestore(e,r):t.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,r){this.hasPendingWrites=e,this.fromCache=r}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wI extends gI{constructor(e,r,n,i,o,s){super(e,r,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const r=new Pc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(r,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,r={}){if(this._document){const n=this._document.data.field(od("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,r.serverTimestamps)}}}class Pc extends wI{data(e={}){return super.data(e)}}class LO{constructor(e,r,n,i){this._firestore=e,this._userDataWriter=r,this._snapshot=i,this.metadata=new qs(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(r=>e.push(r)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,r){this._snapshot.docs.forEach(n=>{e.call(r,new Pc(this._firestore,this._userDataWriter,n.key,n,new qs(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const r=!!e.includeMetadataChanges;if(r&&this._snapshot.excludesMetadataChanges)throw new Q(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===r||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(l=>{const c=new Pc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new qs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const c=new Pc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new qs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return l.type!==0&&(u=s.indexOf(l.doc.key),s=s.delete(l.doc.key)),l.type!==1&&(s=s.add(l.doc),h=s.indexOf(l.doc.key)),{type:VO(l.type),doc:c,oldIndex:u,newIndex:h}})}}(this,r),this._cachedChangesIncludeMetadataChanges=r),this._cachedChanges}}function VO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}class bI extends DO{constructor(e){super(),this.firestore=e}convertBytes(e){return new qo(e)}convertReference(e){const r=this.convertDocumentKey(e,this.firestore._databaseId);return new kt(this.firestore,null,r)}}function eo(t,e,r){t=Nr(t,kt);const n=Nr(t.firestore,Di),i=_I(t.converter,e,r);return ad(n,[hI(nd(n),"setDoc",t._key,i,t.converter!==null,r).toMutation(t._key,or.none())])}function to(t,e,r,...n){t=Nr(t,kt);const i=Nr(t.firestore,Di),o=nd(i);let s;return s=typeof(e=Me(e))=="string"||e instanceof td?AO(o,"updateDoc",t._key,e,r,n):TO(o,"updateDoc",t._key,e),ad(i,[s.toMutation(t._key,or.exists(!0))])}function MO(t){return ad(Nr(t.firestore,Di),[new Km(t._key,or.none())])}function $O(t,e){const r=Nr(t.firestore,Di),n=It(t),i=_I(t.converter,e);return ad(r,[hI(nd(t.firestore),"addDoc",n._key,i,t.converter!==null,{}).toMutation(n._key,or.exists(!1))]).then(()=>n)}function vh(t,...e){var r,n,i;t=Me(t);let o={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||lw(e[s])||(o=e[s],s++);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(lw(e[s])){const p=e[s];e[s]=(r=p.next)===null||r===void 0?void 0:r.bind(p),e[s+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),e[s+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let c,u,h;if(t instanceof kt)u=Nr(t.firestore,Di),h=Hm(t._key.path),c={next:p=>{e[s]&&e[s](FO(u,t,p))},error:e[s+1],complete:e[s+2]};else{const p=Nr(t,Bi);u=Nr(p.firestore,Di),h=p._query;const m=new bI(u);c={next:b=>{e[s]&&e[s](new LO(u,m,p,b))},error:e[s+1],complete:e[s+2]},RO(t._query)}return function(m,b,k,N){const D=new fO(N),E=new Q2(b,D,k);return m.asyncQueue.enqueueAndForget(async()=>H2(await tw(m),E)),()=>{D.Za(),m.asyncQueue.enqueueAndForget(async()=>W2(await tw(m),E))}}(cI(u),h,l,c)}function ad(t,e){return function(n,i){const o=new Ei;return n.asyncQueue.enqueueAndForget(async()=>oO(await gO(n),i,o)),o.promise}(cI(t),e)}function FO(t,e,r){const n=r.docs.get(e._key),i=new bI(t);return new wI(t,i,e._key,n,new qs(r.hasPendingWrites,r.fromCache),e.converter)}function si(){return new ug("serverTimestamp")}function yh(...t){return new dg("arrayUnion",t)}(function(e,r=!0){(function(i){es=i})(Xo),Or(new br("firestore",(n,{instanceIdentifier:i,options:o})=>{const s=n.getProvider("app").getImmediate(),l=new Di(new LP(n.getProvider("auth-internal")),new FP(n.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Q(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Na(u.options.projectId,h)}(s,i),s);return o=Object.assign({useFetchStreams:r},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),ir(x_,"4.7.3",e),ir(x_,"4.7.3","esm2017")})();var UO="firebase",jO="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ir(UO,jO,"app");const EI="@firebase/installations",vg="0.6.9";/**
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
 */const xI=1e4,II=`w:${vg}`,TI="FIS_v2",zO="https://firebaseinstallations.googleapis.com/v1",BO=60*60*1e3,qO="installations",HO="Installations";/**
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
 */const WO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Li=new Ui(qO,HO,WO);function AI(t){return t instanceof Lr&&t.code.includes("request-failed")}/**
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
 */function SI({projectId:t}){return`${zO}/projects/${t}/installations`}function kI(t){return{token:t.token,requestStatus:2,expiresIn:GO(t.expiresIn),creationTime:Date.now()}}async function CI(t,e){const n=(await e.json()).error;return Li.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function RI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function KO(t,{refreshToken:e}){const r=RI(t);return r.append("Authorization",QO(e)),r}async function PI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function GO(t){return Number(t.replace("s","000"))}function QO(t){return`${TI} ${t}`}/**
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
 */async function YO({appConfig:t,heartbeatServiceProvider:e},{fid:r}){const n=SI(t),i=RI(t),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:r,authVersion:TI,appId:t.appId,sdkVersion:II},l={method:"POST",headers:i,body:JSON.stringify(s)},c=await PI(()=>fetch(n,l));if(c.ok){const u=await c.json();return{fid:u.fid||r,registrationStatus:2,refreshToken:u.refreshToken,authToken:kI(u.authToken)}}else throw await CI("Create Installation",c)}/**
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
 */function NI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function XO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const JO=/^[cdef][\w-]{21}$/,tp="";function ZO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const r=eD(t);return JO.test(r)?r:tp}catch{return tp}}function eD(t){return XO(t).substr(0,22)}/**
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
 */function ld(t){return`${t.appName}!${t.appId}`}/**
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
 */const OI=new Map;function DI(t,e){const r=ld(t);LI(r,e),tD(r,e)}function LI(t,e){const r=OI.get(t);if(r)for(const n of r)n(e)}function tD(t,e){const r=rD();r&&r.postMessage({key:t,fid:e}),nD()}let vi=null;function rD(){return!vi&&"BroadcastChannel"in self&&(vi=new BroadcastChannel("[Firebase] FID Change"),vi.onmessage=t=>{LI(t.data.key,t.data.fid)}),vi}function nD(){OI.size===0&&vi&&(vi.close(),vi=null)}/**
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
 */const iD="firebase-installations-database",oD=1,Vi="firebase-installations-store";let _h=null;function yg(){return _h||(_h=Uu(iD,oD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vi)}}})),_h}async function _u(t,e){const r=ld(t),i=(await yg()).transaction(Vi,"readwrite"),o=i.objectStore(Vi),s=await o.get(r);return await o.put(e,r),await i.done,(!s||s.fid!==e.fid)&&DI(t,e.fid),e}async function VI(t){const e=ld(t),n=(await yg()).transaction(Vi,"readwrite");await n.objectStore(Vi).delete(e),await n.done}async function cd(t,e){const r=ld(t),i=(await yg()).transaction(Vi,"readwrite"),o=i.objectStore(Vi),s=await o.get(r),l=e(s);return l===void 0?await o.delete(r):await o.put(l,r),await i.done,l&&(!s||s.fid!==l.fid)&&DI(t,l.fid),l}/**
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
 */async function _g(t){let e;const r=await cd(t.appConfig,n=>{const i=sD(n),o=aD(t,i);return e=o.registrationPromise,o.installationEntry});return r.fid===tp?{installationEntry:await e}:{installationEntry:r,registrationPromise:e}}function sD(t){const e=t||{fid:ZO(),registrationStatus:0};return MI(e)}function aD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Li.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const r={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=lD(t,r);return{installationEntry:r,registrationPromise:n}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:cD(t)}:{installationEntry:e}}async function lD(t,e){try{const r=await YO(t,e);return _u(t.appConfig,r)}catch(r){throw AI(r)&&r.customData.serverCode===409?await VI(t.appConfig):await _u(t.appConfig,{fid:e.fid,registrationStatus:0}),r}}async function cD(t){let e=await dw(t.appConfig);for(;e.registrationStatus===1;)await NI(100),e=await dw(t.appConfig);if(e.registrationStatus===0){const{installationEntry:r,registrationPromise:n}=await _g(t);return n||r}return e}function dw(t){return cd(t,e=>{if(!e)throw Li.create("installation-not-found");return MI(e)})}function MI(t){return uD(t)?{fid:t.fid,registrationStatus:0}:t}function uD(t){return t.registrationStatus===1&&t.registrationTime+xI<Date.now()}/**
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
 */async function dD({appConfig:t,heartbeatServiceProvider:e},r){const n=hD(t,r),i=KO(t,r),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:II,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(s)},c=await PI(()=>fetch(n,l));if(c.ok){const u=await c.json();return kI(u)}else throw await CI("Generate Auth Token",c)}function hD(t,{fid:e}){return`${SI(t)}/${e}/authTokens:generate`}/**
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
 */async function wg(t,e=!1){let r;const n=await cd(t.appConfig,o=>{if(!$I(o))throw Li.create("not-registered");const s=o.authToken;if(!e&&mD(s))return o;if(s.requestStatus===1)return r=fD(t,e),o;{if(!navigator.onLine)throw Li.create("app-offline");const l=vD(o);return r=pD(t,l),l}});return r?await r:n.authToken}async function fD(t,e){let r=await hw(t.appConfig);for(;r.authToken.requestStatus===1;)await NI(100),r=await hw(t.appConfig);const n=r.authToken;return n.requestStatus===0?wg(t,e):n}function hw(t){return cd(t,e=>{if(!$I(e))throw Li.create("not-registered");const r=e.authToken;return yD(r)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function pD(t,e){try{const r=await dD(t,e),n=Object.assign(Object.assign({},e),{authToken:r});return await _u(t.appConfig,n),r}catch(r){if(AI(r)&&(r.customData.serverCode===401||r.customData.serverCode===404))await VI(t.appConfig);else{const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await _u(t.appConfig,n)}throw r}}function $I(t){return t!==void 0&&t.registrationStatus===2}function mD(t){return t.requestStatus===2&&!gD(t)}function gD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+BO}function vD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function yD(t){return t.requestStatus===1&&t.requestTime+xI<Date.now()}/**
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
 */async function _D(t){const e=t,{installationEntry:r,registrationPromise:n}=await _g(e);return n?n.catch(console.error):wg(e).catch(console.error),r.fid}/**
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
 */async function wD(t,e=!1){const r=t;return await bD(r),(await wg(r,e)).token}async function bD(t){const{registrationPromise:e}=await _g(t);e&&await e}/**
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
 */function ED(t){if(!t||!t.options)throw wh("App Configuration");if(!t.name)throw wh("App Name");const e=["projectId","apiKey","appId"];for(const r of e)if(!t.options[r])throw wh(r);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function wh(t){return Li.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI="installations",xD="installations-internal",ID=t=>{const e=t.getProvider("app").getImmediate(),r=ED(e),n=Yo(e,"heartbeat");return{app:e,appConfig:r,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},TD=t=>{const e=t.getProvider("app").getImmediate(),r=Yo(e,FI).getImmediate();return{getId:()=>_D(r),getToken:i=>wD(r,i)}};function AD(){Or(new br(FI,ID,"PUBLIC")),Or(new br(xD,TD,"PRIVATE"))}AD();ir(EI,vg);ir(EI,vg,"esm2017");/**
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
 */const SD="/firebase-messaging-sw.js",kD="/firebase-cloud-messaging-push-scope",UI="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",CD="https://fcmregistrations.googleapis.com/v1",jI="google.c.a.c_id",RD="google.c.a.c_l",PD="google.c.a.ts",ND="google.c.a.e";var fw;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(fw||(fw={}));/**
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
 */var Ma;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Ma||(Ma={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function OD(t){const e="=".repeat((4-t.length%4)%4),r=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(r),i=new Uint8Array(n.length);for(let o=0;o<n.length;++o)i[o]=n.charCodeAt(o);return i}/**
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
 */const bh="fcm_token_details_db",DD=5,pw="fcm_token_object_Store";async function LD(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(bh))return null;let e=null;return(await Uu(bh,DD,{upgrade:async(n,i,o,s)=>{var l;if(i<2||!n.objectStoreNames.contains(pw))return;const c=s.objectStore(pw),u=await c.index("fcmSenderId").get(t);if(await c.clear(),!!u){if(i===2){const h=u;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(l=h.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:jr(h.vapidKey)}}}else if(i===3){const h=u;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:jr(h.auth),p256dh:jr(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:jr(h.vapidKey)}}}else if(i===4){const h=u;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:jr(h.auth),p256dh:jr(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:jr(h.vapidKey)}}}}}})).close(),await lh(bh),await lh("fcm_vapid_details_db"),await lh("undefined"),VD(e)?e:null}function VD(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const MD="firebase-messaging-database",$D=1,$a="firebase-messaging-store";let Eh=null;function zI(){return Eh||(Eh=Uu(MD,$D,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($a)}}})),Eh}async function FD(t){const e=BI(t),n=await(await zI()).transaction($a).objectStore($a).get(e);if(n)return n;{const i=await LD(t.appConfig.senderId);if(i)return await bg(t,i),i}}async function bg(t,e){const r=BI(t),i=(await zI()).transaction($a,"readwrite");return await i.objectStore($a).put(e,r),await i.done,e}function BI({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},_t=new Ui("messaging","Messaging",UD);/**
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
 */async function jD(t,e){const r=await xg(t),n=qI(e),i={method:"POST",headers:r,body:JSON.stringify(n)};let o;try{o=await(await fetch(Eg(t.appConfig),i)).json()}catch(s){throw _t.create("token-subscribe-failed",{errorInfo:s==null?void 0:s.toString()})}if(o.error){const s=o.error.message;throw _t.create("token-subscribe-failed",{errorInfo:s})}if(!o.token)throw _t.create("token-subscribe-no-token");return o.token}async function zD(t,e){const r=await xg(t),n=qI(e.subscriptionOptions),i={method:"PATCH",headers:r,body:JSON.stringify(n)};let o;try{o=await(await fetch(`${Eg(t.appConfig)}/${e.token}`,i)).json()}catch(s){throw _t.create("token-update-failed",{errorInfo:s==null?void 0:s.toString()})}if(o.error){const s=o.error.message;throw _t.create("token-update-failed",{errorInfo:s})}if(!o.token)throw _t.create("token-update-no-token");return o.token}async function BD(t,e){const n={method:"DELETE",headers:await xg(t)};try{const o=await(await fetch(`${Eg(t.appConfig)}/${e}`,n)).json();if(o.error){const s=o.error.message;throw _t.create("token-unsubscribe-failed",{errorInfo:s})}}catch(i){throw _t.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Eg({projectId:t}){return`${CD}/projects/${t}/registrations`}async function xg({appConfig:t,installations:e}){const r=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${r}`})}function qI({p256dh:t,auth:e,endpoint:r,vapidKey:n}){const i={web:{endpoint:r,auth:e,p256dh:t}};return n!==UI&&(i.web.applicationPubKey=n),i}/**
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
 */const qD=7*24*60*60*1e3;async function HD(t){const e=await KD(t.swRegistration,t.vapidKey),r={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:jr(e.getKey("auth")),p256dh:jr(e.getKey("p256dh"))},n=await FD(t.firebaseDependencies);if(n){if(GD(n.subscriptionOptions,r))return Date.now()>=n.createTime+qD?WD(t,{token:n.token,createTime:Date.now(),subscriptionOptions:r}):n.token;try{await BD(t.firebaseDependencies,n.token)}catch(i){console.warn(i)}return mw(t.firebaseDependencies,r)}else return mw(t.firebaseDependencies,r)}async function WD(t,e){try{const r=await zD(t.firebaseDependencies,e),n=Object.assign(Object.assign({},e),{token:r,createTime:Date.now()});return await bg(t.firebaseDependencies,n),r}catch(r){throw r}}async function mw(t,e){const n={token:await jD(t,e),createTime:Date.now(),subscriptionOptions:e};return await bg(t,n),n.token}async function KD(t,e){const r=await t.pushManager.getSubscription();return r||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:OD(e)})}function GD(t,e){const r=e.vapidKey===t.vapidKey,n=e.endpoint===t.endpoint,i=e.auth===t.auth,o=e.p256dh===t.p256dh;return r&&n&&i&&o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return QD(e,t),YD(e,t),XD(e,t),e}function QD(t,e){if(!e.notification)return;t.notification={};const r=e.notification.title;r&&(t.notification.title=r);const n=e.notification.body;n&&(t.notification.body=n);const i=e.notification.image;i&&(t.notification.image=i);const o=e.notification.icon;o&&(t.notification.icon=o)}function YD(t,e){e.data&&(t.data=e.data)}function XD(t,e){var r,n,i,o,s;if(!e.fcmOptions&&!(!((r=e.notification)===null||r===void 0)&&r.click_action))return;t.fcmOptions={};const l=(i=(n=e.fcmOptions)===null||n===void 0?void 0:n.link)!==null&&i!==void 0?i:(o=e.notification)===null||o===void 0?void 0:o.click_action;l&&(t.fcmOptions.link=l);const c=(s=e.fcmOptions)===null||s===void 0?void 0:s.analytics_label;c&&(t.fcmOptions.analyticsLabel=c)}/**
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
 */function JD(t){return typeof t=="object"&&!!t&&jI in t}/**
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
 */function ZD(t){if(!t||!t.options)throw xh("App Configuration Object");if(!t.name)throw xh("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:r}=t;for(const n of e)if(!r[n])throw xh(n);return{appName:t.name,projectId:r.projectId,apiKey:r.apiKey,appId:r.appId,senderId:r.messagingSenderId}}function xh(t){return _t.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e,r,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=ZD(e);this.firebaseDependencies={app:e,appConfig:i,installations:r,analyticsProvider:n}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tL(t){try{t.swRegistration=await navigator.serviceWorker.register(SD,{scope:kD}),t.swRegistration.update().catch(()=>{})}catch(e){throw _t.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rL(t,e){if(!e&&!t.swRegistration&&await tL(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw _t.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nL(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=UI)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HI(t,e){if(!navigator)throw _t.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw _t.create("permission-blocked");return await nL(t,e==null?void 0:e.vapidKey),await rL(t,e==null?void 0:e.serviceWorkerRegistration),HD(t)}/**
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
 */async function iL(t,e,r){const n=oL(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(n,{message_id:r[jI],message_name:r[RD],message_time:r[PD],message_device_time:Math.floor(Date.now()/1e3)})}function oL(t){switch(t){case Ma.NOTIFICATION_CLICKED:return"notification_open";case Ma.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sL(t,e){const r=e.data;if(!r.isFirebaseMessaging)return;t.onMessageHandler&&r.messageType===Ma.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(gw(r)):t.onMessageHandler.next(gw(r)));const n=r.data;JD(n)&&n[ND]==="1"&&await iL(t,r.messageType,n)}const vw="@firebase/messaging",yw="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL=t=>{const e=new eL(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",r=>sL(e,r)),e},lL=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:n=>HI(e,n)}};function cL(){Or(new br("messaging",aL,"PUBLIC")),Or(new br("messaging-internal",lL,"PRIVATE")),ir(vw,yw),ir(vw,yw,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uL(){try{await gE()}catch{return!1}return typeof window<"u"&&mE()&&oC()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dL(t,e){if(!navigator)throw _t.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hL(t=Am()){return uL().then(e=>{if(!e)throw _t.create("unsupported-browser")},e=>{throw _t.create("indexed-db-unsupported")}),Yo(Me(t),"messaging").getImmediate()}async function fL(t,e){return t=Me(t),HI(t,e)}function pL(t,e){return t=Me(t),dL(t,e)}cL();const mL={apiKey:"AIzaSyCfkeRu4DVuSBBBa9bc0rrhtu-gCixFqIo",authDomain:"barbacker-6c683.firebaseapp.com",projectId:"barbacker-6c683",storageBucket:"barbacker-6c683.firebasestorage.app",messagingSenderId:"869145643734",appId:"1:869145643734:web:d902468d6942df6bc81777"},Ig=_E(mL),mt=_O(Ig),Ns=PP(Ig),WI=hL(Ig),gL=new Br;new ta("apple.com");const vL=async()=>{try{if(await Notification.requestPermission()==="granted")return await fL(WI,{vapidKey:"G-H8717DGSJ8"})}catch(t){console.error("Notification permission denied",t)}return null},yL=()=>new Promise(t=>{pL(WI,e=>{t(e)})});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nc=globalThis,Tg=Nc.ShadowRoot&&(Nc.ShadyCSS===void 0||Nc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ag=Symbol(),_w=new WeakMap;let KI=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==Ag)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Tg&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=_w.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&_w.set(r,e))}return e}toString(){return this.cssText}};const _L=t=>new KI(typeof t=="string"?t:t+"",void 0,Ag),pe=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new KI(r,t,Ag)},wL=(t,e)=>{if(Tg)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),i=Nc.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)}},ww=Tg?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return _L(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:bL,defineProperty:EL,getOwnPropertyDescriptor:xL,getOwnPropertyNames:IL,getOwnPropertySymbols:TL,getPrototypeOf:AL}=Object,Un=globalThis,bw=Un.trustedTypes,SL=bw?bw.emptyScript:"",Ih=Un.reactiveElementPolyfillSupport,sa=(t,e)=>t,wu={toAttribute(t,e){switch(e){case Boolean:t=t?SL:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Sg=(t,e)=>!bL(t,e),Ew={attribute:!0,type:String,converter:wu,reflect:!1,useDefault:!1,hasChanged:Sg};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Un.litPropertyMetadata??(Un.litPropertyMetadata=new WeakMap);let oo=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Ew){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,r);i!==void 0&&EL(this.prototype,e,i)}}static getPropertyDescriptor(e,r,n){const{get:i,set:o}=xL(this.prototype,e)??{get(){return this[r]},set(s){this[r]=s}};return{get:i,set(s){const l=i==null?void 0:i.call(this);o==null||o.call(this,s),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ew}static _$Ei(){if(this.hasOwnProperty(sa("elementProperties")))return;const e=AL(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(sa("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(sa("properties"))){const r=this.properties,n=[...IL(r),...TL(r)];for(const i of n)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)r.unshift(ww(i))}else e!==void 0&&r.push(ww(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wL(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$ET(e,r){var o;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const s=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:wu).toAttribute(r,n.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,r){var o,s;const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const l=n.getPropertyOptions(i),c=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:wu;this._$Em=i;const u=c.fromAttribute(r,l.type);this[i]=u??((s=this._$Ej)==null?void 0:s.get(i))??u,this._$Em=null}}requestUpdate(e,r,n,i=!1,o){var s;if(e!==void 0){const l=this.constructor;if(i===!1&&(o=this[e]),n??(n=l.getPropertyOptions(e)),!((n.hasChanged??Sg)(o,r)||n.useDefault&&n.reflect&&o===((s=this._$Ej)==null?void 0:s.get(e))&&!this.hasAttribute(l._$Eu(e,n))))return;this.C(e,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,s??r??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(r=void 0),this._$AL.set(e,r)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i){const{wrapped:l}=s,c=this[o];l!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,s,c)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(r)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(e){}firstUpdated(e){}};oo.elementStyles=[],oo.shadowRootOptions={mode:"open"},oo[sa("elementProperties")]=new Map,oo[sa("finalized")]=new Map,Ih==null||Ih({ReactiveElement:oo}),(Un.reactiveElementVersions??(Un.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kL={attribute:!0,type:String,converter:wu,reflect:!1,hasChanged:Sg},CL=(t=kL,e,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),n==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(r.name,t),n==="accessor"){const{name:s}=r;return{set(l){const c=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,c,t,!0,l)},init(l){return l!==void 0&&this.C(s,void 0,t,l),l}}}if(n==="setter"){const{name:s}=r;return function(l){const c=this[s];e.call(this,l),this.requestUpdate(s,c,t,!0,l)}}throw Error("Unsupported decorator location: "+n)};function F(t){return(e,r)=>typeof r=="object"?CL(t,e,r):((n,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,n),s?Object.getOwnPropertyDescriptor(i,o):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Nt(t){return F({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kg=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $e(t,e){return(r,n,i)=>{const o=s=>{var l;return((l=s.renderRoot)==null?void 0:l.querySelector(t))??null};return kg(r,n,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let RL;function PL(t){return(e,r)=>kg(e,r,{get(){return(this.renderRoot??RL??(RL=document.createDocumentFragment())).querySelectorAll(t)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function os(t){return(e,r)=>{const{slot:n,selector:i}=t??{},o="slot"+(n?`[name=${n}]`:":not([name])");return kg(e,r,{get(){var c;const s=(c=this.renderRoot)==null?void 0:c.querySelector(o),l=(s==null?void 0:s.assignedElements(t))??[];return i===void 0?l:l.filter(u=>u.matches(i))}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const aa=globalThis,xw=t=>t,bu=aa.trustedTypes,Iw=bu?bu.createPolicy("lit-html",{createHTML:t=>t}):void 0,GI="$lit$",An=`lit$${Math.random().toFixed(9).slice(2)}$`,QI="?"+An,NL=`<${QI}>`,Mi=document,Fa=()=>Mi.createComment(""),Ua=t=>t===null||typeof t!="object"&&typeof t!="function",Cg=Array.isArray,OL=t=>Cg(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Th=`[ 	
\f\r]`,Os=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tw=/-->/g,Aw=/>/g,ai=RegExp(`>|${Th}(?:([^\\s"'>=/]+)(${Th}*=${Th}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Sw=/'/g,kw=/"/g,YI=/^(?:script|style|textarea|title)$/i,DL=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),Y=DL(1),rr=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),Cw=new WeakMap,yi=Mi.createTreeWalker(Mi,129);function XI(t,e){if(!Cg(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Iw!==void 0?Iw.createHTML(e):e}const LL=(t,e)=>{const r=t.length-1,n=[];let i,o=e===2?"<svg>":e===3?"<math>":"",s=Os;for(let l=0;l<r;l++){const c=t[l];let u,h,p=-1,m=0;for(;m<c.length&&(s.lastIndex=m,h=s.exec(c),h!==null);)m=s.lastIndex,s===Os?h[1]==="!--"?s=Tw:h[1]!==void 0?s=Aw:h[2]!==void 0?(YI.test(h[2])&&(i=RegExp("</"+h[2],"g")),s=ai):h[3]!==void 0&&(s=ai):s===ai?h[0]===">"?(s=i??Os,p=-1):h[1]===void 0?p=-2:(p=s.lastIndex-h[2].length,u=h[1],s=h[3]===void 0?ai:h[3]==='"'?kw:Sw):s===kw||s===Sw?s=ai:s===Tw||s===Aw?s=Os:(s=ai,i=void 0);const b=s===ai&&t[l+1].startsWith("/>")?" ":"";o+=s===Os?c+NL:p>=0?(n.push(u),c.slice(0,p)+GI+c.slice(p)+An+b):c+An+(p===-2?l:b)}return[XI(t,o+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class ja{constructor({strings:e,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const l=e.length-1,c=this.parts,[u,h]=LL(e,r);if(this.el=ja.createElement(u,n),yi.currentNode=this.el.content,r===2||r===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=yi.nextNode())!==null&&c.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const p of i.getAttributeNames())if(p.endsWith(GI)){const m=h[s++],b=i.getAttribute(p).split(An),k=/([.?@])?(.*)/.exec(m);c.push({type:1,index:o,name:k[2],strings:b,ctor:k[1]==="."?ML:k[1]==="?"?$L:k[1]==="@"?FL:ud}),i.removeAttribute(p)}else p.startsWith(An)&&(c.push({type:6,index:o}),i.removeAttribute(p));if(YI.test(i.tagName)){const p=i.textContent.split(An),m=p.length-1;if(m>0){i.textContent=bu?bu.emptyScript:"";for(let b=0;b<m;b++)i.append(p[b],Fa()),yi.nextNode(),c.push({type:2,index:++o});i.append(p[m],Fa())}}}else if(i.nodeType===8)if(i.data===QI)c.push({type:2,index:o});else{let p=-1;for(;(p=i.data.indexOf(An,p+1))!==-1;)c.push({type:7,index:o}),p+=An.length-1}o++}}static createElement(e,r){const n=Mi.createElement("template");return n.innerHTML=e,n}}function Ho(t,e,r=t,n){var s,l;if(e===rr)return e;let i=n!==void 0?(s=r._$Co)==null?void 0:s[n]:r._$Cl;const o=Ua(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(t),i._$AT(t,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=i:r._$Cl=i),i!==void 0&&(e=Ho(t,i._$AS(t,e.values),i,n)),e}class VL{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,i=((e==null?void 0:e.creationScope)??Mi).importNode(r,!0);yi.currentNode=i;let o=yi.nextNode(),s=0,l=0,c=n[0];for(;c!==void 0;){if(s===c.index){let u;c.type===2?u=new al(o,o.nextSibling,this,e):c.type===1?u=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(u=new UL(o,this,e)),this._$AV.push(u),c=n[++l]}s!==(c==null?void 0:c.index)&&(o=yi.nextNode(),s++)}return yi.currentNode=Mi,i}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class al{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,n,i){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ho(this,e,r),Ua(e)?e===q||e==null||e===""?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==rr&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):OL(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==q&&Ua(this._$AH)?this._$AA.nextSibling.data=e:this.T(Mi.createTextNode(e)),this._$AH=e}$(e){var o;const{values:r,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ja.createElement(XI(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(r);else{const s=new VL(i,this),l=s.u(this.options);s.p(r),this.T(l),this._$AH=s}}_$AC(e){let r=Cw.get(e.strings);return r===void 0&&Cw.set(e.strings,r=new ja(e)),r}k(e){Cg(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of e)i===r.length?r.push(n=new al(this.O(Fa()),this.O(Fa()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);e!==this._$AB;){const i=xw(e).nextSibling;xw(e).remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class ud{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,i,o){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=q}_$AI(e,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)e=Ho(this,e,r,0),s=!Ua(e)||e!==this._$AH&&e!==rr,s&&(this._$AH=e);else{const l=e;let c,u;for(e=o[0],c=0;c<o.length-1;c++)u=Ho(this,l[n+c],r,c),u===rr&&(u=this._$AH[c]),s||(s=!Ua(u)||u!==this._$AH[c]),u===q?e=q:e!==q&&(e+=(u??"")+o[c+1]),this._$AH[c]=u}s&&!i&&this.j(e)}j(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ML extends ud{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===q?void 0:e}}class $L extends ud{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==q)}}class FL extends ud{constructor(e,r,n,i,o){super(e,r,n,i,o),this.type=5}_$AI(e,r=this){if((e=Ho(this,e,r,0)??q)===rr)return;const n=this._$AH,i=e===q&&n!==q||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==q&&(n===q||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class UL{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ho(this,e)}}const Ah=aa.litHtmlPolyfillSupport;Ah==null||Ah(ja,al),(aa.litHtmlVersions??(aa.litHtmlVersions=[])).push("3.3.2");const JI=(t,e,r)=>{const n=(r==null?void 0:r.renderBefore)??e;let i=n._$litPart$;if(i===void 0){const o=(r==null?void 0:r.renderBefore)??null;n._$litPart$=i=new al(e.insertBefore(Fa(),o),o,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xi=globalThis;let ke=class extends oo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=JI(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return rr}};var jw;ke._$litElement$=!0,ke.finalized=!0,(jw=xi.litElementHydrateSupport)==null||jw.call(xi,{LitElement:ke});const Sh=xi.litElementPolyfillSupport;Sh==null||Sh({LitElement:ke});(xi.litElementVersions??(xi.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class jL extends ke{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return Y`<span class="shadow"></span>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const zL=pe`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let rp=class extends jL{};rp.styles=[zL];rp=P([Be("md-elevation")],rp);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ZI=Symbol("attachableController");let Oc;Oc=new MutationObserver(t=>{var e;for(const r of t)(e=r.target[ZI])==null||e.hostConnected()});class eT{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}set control(e){e?this.attach(e):this.detach()}constructor(e,r){this.host=e,this.onControlChange=r,this.currentControl=null,e.addController(this),e[ZI]=this,Oc==null||Oc.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const BL=["focusin","focusout","pointerdown"];class Rg extends ke{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new eT(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(e){var r;if(!e[Rw]){switch(e.type){default:return;case"focusin":this.visible=((r=this.control)==null?void 0:r.matches(":focus-visible"))??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[Rw]=!0}}onControlChange(e,r){for(const n of BL)e==null||e.removeEventListener(n,this),r==null||r.addEventListener(n,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}P([F({type:Boolean,reflect:!0})],Rg.prototype,"visible",void 0);P([F({type:Boolean,reflect:!0})],Rg.prototype,"inward",void 0);const Rw=Symbol("handledByFocusRing");/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const qL=pe`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let np=class extends Rg{};np.styles=[qL];np=P([Be("md-focus-ring")],np);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wn={ATTRIBUTE:1,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Pg=t=>(...e)=>({_$litDirective$:t,values:e});let Ng=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt=Pg(class extends Ng{constructor(t){var e;if(super(t),t.type!==wn.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((n=this.nt)!=null&&n.has(o))&&this.st.add(o);return this.render(e)}const r=t.element.classList;for(const o of this.st)o in e||(r.remove(o),this.st.delete(o));for(const o in e){const s=!!e[o];s===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(s?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return rr}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Wo={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)"};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const HL=450,Pw=225,WL=.2,KL=10,GL=75,QL=.35,YL="::after",XL="forwards";var Tt;(function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(Tt||(Tt={}));const JL=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],ZL=150,kh=window.matchMedia("(forced-colors: active)");class ll extends ke{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=Tt.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new eT(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const e={hovered:this.hovered,pressed:this.pressed};return Y`<div class="surface ${Gt(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==Tt.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===Tt.HOLDING){this.state=Tt.WAITING_FOR_CLICK;return}if(this.state===Tt.TOUCH_DELAY){this.state=Tt.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=Tt.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=Tt.TOUCH_DELAY,await new Promise(r=>{setTimeout(r,ZL)}),this.state===Tt.TOUCH_DELAY&&(this.state=Tt.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===Tt.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===Tt.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:r}=this.getBoundingClientRect(),n=Math.max(e,r),i=Math.max(QL*n,GL),o=Math.floor(n*WL),l=Math.sqrt(r**2+e**2)+KL;this.initialSize=o,this.rippleScale=`${(l+i)/o}`,this.rippleSize=`${o}px`}getNormalizedPointerEventCoords(e){const{scrollX:r,scrollY:n}=window,{left:i,top:o}=this.getBoundingClientRect(),s=r+i,l=n+o,{pageX:c,pageY:u}=e;return{x:c-s,y:u-l}}getTranslationCoordinates(e){const{height:r,width:n}=this.getBoundingClientRect(),i={x:(n-this.initialSize)/2,y:(r-this.initialSize)/2};let o;return e instanceof PointerEvent?o=this.getNormalizedPointerEventCoords(e):o={x:n/2,y:r/2},o={x:o.x-this.initialSize/2,y:o.y-this.initialSize/2},{startPoint:o,endPoint:i}}startPressAnimation(e){var s;if(!this.mdRoot)return;this.pressed=!0,(s=this.growAnimation)==null||s.cancel(),this.determineRippleSize();const{startPoint:r,endPoint:n}=this.getTranslationCoordinates(e),i=`${r.x}px, ${r.y}px`,o=`${n.x}px, ${n.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${i}) scale(1)`,`translate(${o}) scale(${this.rippleScale})`]},{pseudoElement:YL,duration:HL,easing:Wo.STANDARD,fill:XL})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=Tt.INACTIVE;const e=this.growAnimation;let r=1/0;if(typeof(e==null?void 0:e.currentTime)=="number"?r=e.currentTime:e!=null&&e.currentTime&&(r=e.currentTime.to("ms").value),r>=Pw){this.pressed=!1;return}await new Promise(n=>{setTimeout(n,Pw-r)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);const r=e.buttons===1;return this.isTouch(e)||r}inBounds({x:e,y:r}){const{top:n,left:i,bottom:o,right:s}=this.getBoundingClientRect();return e>=i&&e<=s&&r>=n&&r<=o}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){if(!(kh!=null&&kh.matches))switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break}}onControlChange(e,r){for(const n of JL)e==null||e.removeEventListener(n,this),r==null||r.addEventListener(n,this)}}P([F({type:Boolean,reflect:!0})],ll.prototype,"disabled",void 0);P([Nt()],ll.prototype,"hovered",void 0);P([Nt()],ll.prototype,"pressed",void 0);P([$e(".surface")],ll.prototype,"mdRoot",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const e4=pe`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ip=class extends ll{};ip.styles=[e4];ip=P([Be("md-ripple")],ip);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const tT=["role","ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];tT.map(rT);function rT(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Zn(t){for(const e of tT)t.createProperty(e,{attribute:rT(e),reflect:!0});t.addInitializer(e=>{const r={hostConnected(){e.setAttribute("role","presentation")}};e.addController(r)})}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const nt=Symbol("internals"),Ch=Symbol("privateInternals");function cl(t){class e extends t{get[nt](){return this[Ch]||(this[Ch]=this.attachInternals()),this[Ch]}}return e}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function nT(t){t.addInitializer(e=>{const r=e;r.addEventListener("click",async n=>{const{type:i,[nt]:o}=r,{form:s}=o;if(!(!s||i==="button")&&(await new Promise(l=>{setTimeout(l)}),!n.defaultPrevented)){if(i==="reset"){s.reset();return}s.addEventListener("submit",l=>{Object.defineProperty(l,"submitter",{configurable:!0,enumerable:!0,get:()=>r})},{capture:!0,once:!0}),o.setFormValue(r.value),s.requestSubmit()}})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function iT(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function Og(t){return t.currentTarget!==t.target||t.composedPath()[0]!==t.target||t.target.disabled?!1:!t4(t)}function t4(t){const e=op;return e&&(t.preventDefault(),t.stopImmediatePropagation()),r4(),e}let op=!1;async function r4(){op=!0,await null,op=!1}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const n4=cl(ke);class ct extends n4{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[nt].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.handleActivationClick=e=>{!Og(e)||!this.buttonElement||(this.focus(),iT(this.buttonElement))},this.addEventListener("click",this.handleActivationClick)}focus(){var e;(e=this.buttonElement)==null||e.focus()}blur(){var e;(e=this.buttonElement)==null||e.blur()}render(){var i;const e=this.disabled&&!this.href,r=this.href?this.renderLink():this.renderButton(),n=this.href?"link":"button";return Y`
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
      aria-label="${e||q}"
      aria-haspopup="${r||q}"
      aria-expanded="${n||q}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:e,ariaHasPopup:r,ariaExpanded:n}=this;return Y`<a
      id="link"
      class="button"
      aria-label="${e||q}"
      aria-haspopup="${r||q}"
      aria-expanded="${n||q}"
      href=${this.href}
      target=${this.target||q}
      >${this.renderContent()}
    </a>`}renderContent(){const e=Y`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return Y`
      <span class="touch"></span>
      ${this.trailingIcon?q:e}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?e:q}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}Zn(ct),nT(ct);ct.formAssociated=!0;ct.shadowRootOptions={mode:"open",delegatesFocus:!0};P([F({type:Boolean,reflect:!0})],ct.prototype,"disabled",void 0);P([F()],ct.prototype,"href",void 0);P([F()],ct.prototype,"target",void 0);P([F({type:Boolean,attribute:"trailing-icon",reflect:!0})],ct.prototype,"trailingIcon",void 0);P([F({type:Boolean,attribute:"has-icon",reflect:!0})],ct.prototype,"hasIcon",void 0);P([F()],ct.prototype,"type",void 0);P([F({reflect:!0})],ct.prototype,"value",void 0);P([$e(".button")],ct.prototype,"buttonElement",void 0);P([os({slot:"icon",flatten:!0})],ct.prototype,"assignedIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class i4 extends ct{renderElevationOrOutline(){return Y`<md-elevation part="elevation"></md-elevation>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const o4=pe`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_container-shape-start-start: var(--md-filled-button-container-shape-start-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-button-container-shape-start-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-button-container-shape-end-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-button-container-shape-end-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px)}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const oT=pe`md-elevation{transition-duration:280ms}:host([disabled]) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host([disabled]) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const dd=pe`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host([disabled]) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host([disabled]) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host([disabled]){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([disabled]) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let sp=class extends i4{};sp.styles=[dd,oT,o4];sp=P([Be("md-filled-button")],sp);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class s4 extends ct{renderElevationOrOutline(){return Y`<md-elevation part="elevation"></md-elevation>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const a4=pe`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-filled-tonal-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-tonal-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-tonal-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-tonal-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_container-shape-start-start: var(--md-filled-tonal-button-container-shape-start-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-tonal-button-container-shape-start-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-tonal-button-container-shape-end-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-tonal-button-container-shape-end-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ap=class extends s4{};ap.styles=[dd,oT,a4];ap=P([Be("md-filled-tonal-button")],ap);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class l4 extends ct{renderElevationOrOutline(){return Y`<div class="outline"></div>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const c4=pe`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-outlined-button-container-shape-start-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-outlined-button-container-shape-start-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-outlined-button-container-shape-end-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-outlined-button-container-shape-end-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}.outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}:host(:active) .outline{border-color:var(--_pressed-outline-color)}:host([disabled]) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){:host([disabled]) .background{border-color:GrayText}:host([disabled]) .outline{opacity:1}}.outline,md-ripple{border-width:var(--_outline-width)}md-ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let lp=class extends l4{};lp.styles=[dd,c4];lp=P([Be("md-outlined-button")],lp);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class u4 extends ct{}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const d4=pe`:host{--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-text-button-container-shape-start-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-text-button-container-shape-start-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-text-button-container-shape-end-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-text-button-container-shape-end-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let cp=class extends u4{};cp.styles=[dd,d4];cp=P([Be("md-text-button")],cp);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Fe extends ke{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.noAsterisk=!1,this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){const e=this.count??-1,r=this.max??-1;return e<0||r<=0?"":`${e} / ${r}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(e){e.has("disabled")&&e.get("disabled")!==void 0&&(this.disableTransitions=!0),this.disabled&&this.focused&&(e.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:e.get("focused"),wasPopulated:e.get("populated")}),super.update(e)}render(){var o,s,l;const e=this.renderLabel(!0),r=this.renderLabel(!1),n=(o=this.renderOutline)==null?void 0:o.call(this,e),i={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return Y`
      <div class="field ${Gt(i)}">
        <div class="container-overflow">
          ${(s=this.renderBackground)==null?void 0:s.call(this)} ${(l=this.renderIndicator)==null?void 0:l.call(this)} ${n}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${r} ${n?q:e}
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
    `}updated(e){(e.has("supportingText")||e.has("errorText")||e.has("count")||e.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame(()=>{this.refreshErrorAlert=!1}),this.disableTransitions&&requestAnimationFrame(()=>{this.disableTransitions=!1})}renderSupportingText(){const{supportingOrErrorText:e,counterText:r}=this;if(!e&&!r)return q;const n=Y`<span>${e}</span>`,i=r?Y`<span class="counter">${r}</span>`:q,s=this.error&&this.errorText&&!this.refreshErrorAlert?"alert":q;return Y`
      <div class="supporting-text" role=${s}>${n}${i}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(const e of this.slottedAriaDescribedBy)JI(Y`${this.supportingOrErrorText} ${this.counterText}`,e),e.setAttribute("hidden","")}renderLabel(e){if(!this.label)return q;let r;e?r=this.focused||this.populated||this.isAnimating:r=!this.focused&&!this.populated&&!this.isAnimating;const n={hidden:!r,floating:e,resting:!e},i=`${this.label}${this.required&&!this.noAsterisk?"*":""}`;return Y`
      <span class="label ${Gt(n)}" aria-hidden=${!r}
        >${i}</span
      >
    `}animateLabelIfNeeded({wasFocused:e,wasPopulated:r}){var o,s,l;if(!this.label)return;e??(e=this.focused),r??(r=this.populated);const n=e||r,i=this.focused||this.populated;n!==i&&(this.isAnimating=!0,(o=this.labelAnimation)==null||o.cancel(),this.labelAnimation=(s=this.floatingLabelEl)==null?void 0:s.animate(this.getLabelKeyframes(),{duration:150,easing:Wo.STANDARD}),(l=this.labelAnimation)==null||l.addEventListener("finish",()=>{this.isAnimating=!1}))}getLabelKeyframes(){const{floatingLabelEl:e,restingLabelEl:r}=this;if(!e||!r)return[];const{x:n,y:i,height:o}=e.getBoundingClientRect(),{x:s,y:l,height:c}=r.getBoundingClientRect(),u=e.scrollWidth,h=r.scrollWidth,p=h/u,m=s-n,b=l-i+Math.round((c-o*p)/2),k=`translateX(${m}px) translateY(${b}px) scale(${p})`,N="translateX(0) translateY(0) scale(1)",D=r.clientWidth,y=h>D?`${D/p}px`:"";return this.focused||this.populated?[{transform:k,width:y},{transform:N,width:y}]:[{transform:N,width:y},{transform:k,width:y}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}}P([F({type:Boolean})],Fe.prototype,"disabled",void 0);P([F({type:Boolean})],Fe.prototype,"error",void 0);P([F({type:Boolean})],Fe.prototype,"focused",void 0);P([F()],Fe.prototype,"label",void 0);P([F({type:Boolean,attribute:"no-asterisk"})],Fe.prototype,"noAsterisk",void 0);P([F({type:Boolean})],Fe.prototype,"populated",void 0);P([F({type:Boolean})],Fe.prototype,"required",void 0);P([F({type:Boolean})],Fe.prototype,"resizable",void 0);P([F({attribute:"supporting-text"})],Fe.prototype,"supportingText",void 0);P([F({attribute:"error-text"})],Fe.prototype,"errorText",void 0);P([F({type:Number})],Fe.prototype,"count",void 0);P([F({type:Number})],Fe.prototype,"max",void 0);P([F({type:Boolean,attribute:"has-start"})],Fe.prototype,"hasStart",void 0);P([F({type:Boolean,attribute:"has-end"})],Fe.prototype,"hasEnd",void 0);P([os({slot:"aria-describedby"})],Fe.prototype,"slottedAriaDescribedBy",void 0);P([Nt()],Fe.prototype,"isAnimating",void 0);P([Nt()],Fe.prototype,"refreshErrorAlert",void 0);P([Nt()],Fe.prototype,"disableTransitions",void 0);P([$e(".label.floating")],Fe.prototype,"floatingLabelEl",void 0);P([$e(".label.resting")],Fe.prototype,"restingLabelEl",void 0);P([$e(".container")],Fe.prototype,"containerEl",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class h4 extends Fe{renderBackground(){return Y`
      <div class="background"></div>
      <div class="state-layer"></div>
    `}renderIndicator(){return Y`<div class="active-indicator"></div>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const f4=pe`@layer styles{:host{--_active-indicator-color: var(--md-filled-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-field-active-indicator-height, 1px);--_bottom-space: var(--md-filled-field-bottom-space, 16px);--_container-color: var(--md-filled-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_content-color: var(--md-filled-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-filled-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-filled-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-filled-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-weight: var(--md-filled-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-active-indicator-color: var(--md-filled-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-field-disabled-container-opacity, 0.04);--_disabled-content-color: var(--md-filled-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-filled-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-filled-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-filled-field-disabled-leading-content-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-filled-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-filled-field-disabled-trailing-content-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-content-color: var(--md-filled-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-active-indicator-color: var(--md-filled-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-content-color: var(--md-filled-field-error-focus-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-label-text-color: var(--md-filled-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-filled-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-filled-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-content-color: var(--md-filled-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-filled-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-filled-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-filled-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-filled-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-filled-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-field-focus-active-indicator-height, 3px);--_focus-content-color: var(--md-filled-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-filled-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-filled-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-field-hover-active-indicator-height, 1px);--_hover-content-color: var(--md-filled-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-content-color: var(--md-filled-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-filled-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-filled-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-filled-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-filled-field-leading-space, 16px);--_supporting-text-color: var(--md-filled-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-filled-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-filled-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-filled-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-filled-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-filled-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-filled-field-top-space, 16px);--_trailing-content-color: var(--md-filled-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-filled-field-trailing-space, 16px);--_with-label-bottom-space: var(--md-filled-field-with-label-bottom-space, 8px);--_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px);--_container-shape-start-start: var(--md-filled-field-container-shape-start-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-field-container-shape-start-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-field-container-shape-end-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-field-container-shape-end-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)))}.background,.state-layer{border-radius:inherit;inset:0;pointer-events:none;position:absolute}.background{background:var(--_container-color)}.state-layer{visibility:hidden}.field:not(.disabled):hover .state-layer{visibility:visible}.label.floating{position:absolute;top:var(--_with-label-top-space)}.field:not(.with-start) .label-wrapper{margin-inline-start:var(--_leading-space)}.field:not(.with-end) .label-wrapper{margin-inline-end:var(--_trailing-space)}.active-indicator{inset:auto 0 0 0;pointer-events:none;position:absolute;width:100%;z-index:1}.active-indicator::before,.active-indicator::after{border-bottom:var(--_active-indicator-height) solid var(--_active-indicator-color);inset:auto 0 0 0;content:"";position:absolute;width:100%}.active-indicator::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .active-indicator::after{opacity:1}.field:not(.with-start) .content ::slotted(*){padding-inline-start:var(--_leading-space)}.field:not(.with-end) .content ::slotted(*){padding-inline-end:var(--_trailing-space)}.field:not(.no-label) .content ::slotted(:not(textarea)){padding-bottom:var(--_with-label-bottom-space);padding-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}.field:not(.no-label) .content ::slotted(textarea){margin-bottom:var(--_with-label-bottom-space);margin-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}:hover .active-indicator::before{border-bottom-color:var(--_hover-active-indicator-color);border-bottom-width:var(--_hover-active-indicator-height)}.active-indicator::after{border-bottom-color:var(--_focus-active-indicator-color);border-bottom-width:var(--_focus-active-indicator-height)}:hover .state-layer{background:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.disabled .active-indicator::before{border-bottom-color:var(--_disabled-active-indicator-color);border-bottom-width:var(--_disabled-active-indicator-height);opacity:var(--_disabled-active-indicator-opacity)}.disabled .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.error .active-indicator::before{border-bottom-color:var(--_error-active-indicator-color)}.error:hover .active-indicator::before{border-bottom-color:var(--_error-hover-active-indicator-color)}.error:hover .state-layer{background:var(--_error-hover-state-layer-color);opacity:var(--_error-hover-state-layer-opacity)}.error .active-indicator::after{border-bottom-color:var(--_error-focus-active-indicator-color)}.resizable .container{bottom:var(--_focus-active-indicator-height);clip-path:inset(var(--_focus-active-indicator-height) 0 0 0)}.resizable .container>*{top:var(--_focus-active-indicator-height)}}@layer hcm{@media(forced-colors: active){.disabled .active-indicator::before{border-color:GrayText;opacity:1}}}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const p4=pe`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let up=class extends h4{};up.styles=[p4,f4];up=P([Be("md-filled-field")],up);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sT=Symbol.for(""),m4=t=>{if((t==null?void 0:t.r)===sT)return t==null?void 0:t._$litStatic$},Ii=(t,...e)=>({_$litStatic$:e.reduce((r,n,i)=>r+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+t[i+1],t[0]),r:sT}),Nw=new Map,g4=t=>(e,...r)=>{const n=r.length;let i,o;const s=[],l=[];let c,u=0,h=!1;for(;u<n;){for(c=e[u];u<n&&(o=r[u],(i=m4(o))!==void 0);)c+=i+e[++u],h=!0;u!==n&&l.push(o),s.push(c),u++}if(u===n&&s.push(e[n]),h){const p=s.join("$$lit$$");(e=Nw.get(p))===void 0&&(s.raw=s,Nw.set(p,e=s)),r=l}return t(e,...r)},Dg=g4(Y);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const v4=pe`:host{--_active-indicator-color: var(--md-filled-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-text-field-active-indicator-height, 1px);--_caret-color: var(--md-filled-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-color: var(--md-filled-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-active-indicator-color: var(--md-filled-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-text-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-text-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-text-field-disabled-container-opacity, 0.04);--_disabled-input-text-color: var(--md-filled-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-filled-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-filled-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filled-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-filled-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filled-text-field-disabled-trailing-icon-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-active-indicator-color: var(--md-filled-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-caret-color: var(--md-filled-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-filled-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-filled-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-filled-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-filled-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-input-text-color: var(--md-filled-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-filled-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-text-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-filled-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-filled-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-filled-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-filled-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-filled-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-text-field-focus-active-indicator-height, 3px);--_focus-input-text-color: var(--md-filled-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-filled-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-filled-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-text-field-hover-active-indicator-height, 1px);--_hover-input-text-color: var(--md-filled-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-icon-color: var(--md-filled-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-text-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filled-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-filled-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-filled-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-filled-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-filled-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-filled-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-filled-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-filled-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-filled-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-filled-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-filled-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);--_supporting-text-color: var(--md-filled-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-filled-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-filled-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-filled-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-filled-text-field-container-shape-start-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-text-field-container-shape-start-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-text-field-container-shape-end-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-text-field-container-shape-end-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_leading-space: var(--md-filled-text-field-leading-space, 16px);--_trailing-space: var(--md-filled-text-field-trailing-space, 16px);--_top-space: var(--md-filled-text-field-top-space, 16px);--_bottom-space: var(--md-filled-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-filled-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-filled-text-field-input-text-suffix-leading-space, 2px);--_with-label-top-space: var(--md-filled-text-field-with-label-top-space, 8px);--_with-label-bottom-space: var(--md-filled-text-field-with-label-bottom-space, 8px);--_focus-caret-color: var(--md-filled-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--md-filled-field-active-indicator-color: var(--_active-indicator-color);--md-filled-field-active-indicator-height: var(--_active-indicator-height);--md-filled-field-bottom-space: var(--_bottom-space);--md-filled-field-container-color: var(--_container-color);--md-filled-field-container-shape-end-end: var(--_container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_container-shape-start-start);--md-filled-field-content-color: var(--_input-text-color);--md-filled-field-content-font: var(--_input-text-font);--md-filled-field-content-line-height: var(--_input-text-line-height);--md-filled-field-content-size: var(--_input-text-size);--md-filled-field-content-weight: var(--_input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_error-active-indicator-color);--md-filled-field-error-content-color: var(--_error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_error-label-text-color);--md-filled-field-error-leading-content-color: var(--_error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_label-text-color);--md-filled-field-label-text-font: var(--_label-text-font);--md-filled-field-label-text-line-height: var(--_label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_label-text-populated-size);--md-filled-field-label-text-size: var(--_label-text-size);--md-filled-field-label-text-weight: var(--_label-text-weight);--md-filled-field-leading-content-color: var(--_leading-icon-color);--md-filled-field-leading-space: var(--_leading-space);--md-filled-field-supporting-text-color: var(--_supporting-text-color);--md-filled-field-supporting-text-font: var(--_supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_supporting-text-size);--md-filled-field-supporting-text-weight: var(--_supporting-text-weight);--md-filled-field-top-space: var(--_top-space);--md-filled-field-trailing-content-color: var(--_trailing-icon-color);--md-filled-field-trailing-space: var(--_trailing-space);--md-filled-field-with-label-bottom-space: var(--_with-label-bottom-space);--md-filled-field-with-label-top-space: var(--_with-label-top-space)}
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y4=t=>t.strings===void 0,_4={},w4=(t,e=_4)=>t._$AH=e;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ow=Pg(class extends Ng{constructor(t){if(super(t),t.type!==wn.PROPERTY&&t.type!==wn.ATTRIBUTE&&t.type!==wn.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!y4(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===rr||e===q)return e;const r=t.element,n=t.name;if(t.type===wn.PROPERTY){if(e===r[n])return rr}else if(t.type===wn.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(n))return rr}else if(t.type===wn.ATTRIBUTE&&r.getAttribute(n)===e+"")return rr;return w4(t),e}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const aT="important",b4=" !"+aT,Dw=Pg(class extends Ng{constructor(t){var e;if(super(t),t.type!==wn.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,r)=>{const n=t[r];return n==null?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:r}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?r.removeProperty(n):r[n]=null);for(const n in e){const i=e[n];if(i!=null){this.ft.add(n);const o=typeof i=="string"&&i.endsWith(b4);n.includes("-")||o?r.setProperty(n,o?i.slice(0,-11):i,o?aT:""):r[n]=i}}return rr}});/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const E4={fromAttribute(t){return t??""},toAttribute(t){return t||null}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function hd(t,e){e.bubbles&&(!t.shadowRoot||e.composed)&&e.stopPropagation();const r=Reflect.construct(e.constructor,[e.type,e]),n=t.dispatchEvent(r);return n||e.preventDefault(),n}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const za=Symbol("createValidator"),Ba=Symbol("getValidityAnchor"),Rh=Symbol("privateValidator"),$r=Symbol("privateSyncValidity"),tc=Symbol("privateCustomValidationMessage");function Lg(t){var e;class r extends t{constructor(){super(...arguments),this[e]=""}get validity(){return this[$r](),this[nt].validity}get validationMessage(){return this[$r](),this[nt].validationMessage}get willValidate(){return this[$r](),this[nt].willValidate}checkValidity(){return this[$r](),this[nt].checkValidity()}reportValidity(){return this[$r](),this[nt].reportValidity()}setCustomValidity(i){this[tc]=i,this[$r]()}requestUpdate(i,o,s){super.requestUpdate(i,o,s),this[$r]()}firstUpdated(i){super.firstUpdated(i),this[$r]()}[(e=tc,$r)](){this[Rh]||(this[Rh]=this[za]());const{validity:i,validationMessage:o}=this[Rh].getValidity(),s=!!this[tc],l=this[tc]||o;this[nt].setValidity({...i,customError:s},l,this[Ba]()??void 0)}[za](){throw new Error("Implement [createValidator]")}[Ba](){throw new Error("Implement [getValidityAnchor]")}}return r}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Co=Symbol("getFormValue"),Eu=Symbol("getFormState");function Vg(t){class e extends t{get form(){return this[nt].form}get labels(){return this[nt].labels}get name(){return this.getAttribute("name")??""}set name(n){this.setAttribute("name",n)}get disabled(){return this.hasAttribute("disabled")}set disabled(n){this.toggleAttribute("disabled",n)}attributeChangedCallback(n,i,o){if(n==="name"||n==="disabled"){const s=n==="disabled"?i!==null:i;this.requestUpdate(n,s);return}super.attributeChangedCallback(n,i,o)}requestUpdate(n,i,o){super.requestUpdate(n,i,o),this[nt].setFormValue(this[Co](),this[Eu]())}[Co](){throw new Error("Implement [getFormValue]")}[Eu](){return this[Co]()}formDisabledCallback(n){this.disabled=n}}return e.formAssociated=!0,P([F({noAccessor:!0})],e.prototype,"name",null),P([F({type:Boolean,noAccessor:!0})],e.prototype,"disabled",null),e}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const dp=Symbol("onReportValidity"),rc=Symbol("privateCleanupFormListeners"),nc=Symbol("privateDoNotReportInvalid"),ic=Symbol("privateIsSelfReportingValidity"),oc=Symbol("privateCallOnReportValidity");function x4(t){var e,r,n;class i extends t{constructor(...s){super(...s),this[e]=new AbortController,this[r]=!1,this[n]=!1,this.addEventListener("invalid",l=>{this[nc]||!l.isTrusted||this.addEventListener("invalid",()=>{this[oc](l)},{once:!0})},{capture:!0})}checkValidity(){this[nc]=!0;const s=super.checkValidity();return this[nc]=!1,s}reportValidity(){this[ic]=!0;const s=super.reportValidity();return s&&this[oc](null),this[ic]=!1,s}[(e=rc,r=nc,n=ic,oc)](s){const l=s==null?void 0:s.defaultPrevented;l||(this[dp](s),!(!l&&(s==null?void 0:s.defaultPrevented)))||(this[ic]||A4(this[nt].form,this))&&this.focus()}[dp](s){throw new Error("Implement [onReportValidity]")}formAssociatedCallback(s){super.formAssociatedCallback&&super.formAssociatedCallback(s),this[rc].abort(),s&&(this[rc]=new AbortController,I4(this,s,()=>{this[oc](null)},this[rc].signal))}}return i}function I4(t,e,r,n){const i=T4(e);let o=!1,s,l=!1;i.addEventListener("before",()=>{l=!0,s=new AbortController,o=!1,t.addEventListener("invalid",()=>{o=!0},{signal:s.signal})},{signal:n}),i.addEventListener("after",()=>{l=!1,s==null||s.abort(),!o&&r()},{signal:n}),e.addEventListener("submit",()=>{l||r()},{signal:n})}const Ph=new WeakMap;function T4(t){if(!Ph.has(t)){const e=new EventTarget;Ph.set(t,e);for(const r of["reportValidity","requestSubmit"]){const n=t[r];t[r]=function(){e.dispatchEvent(new Event("before"));const i=Reflect.apply(n,this,arguments);return e.dispatchEvent(new Event("after")),i}}}return Ph.get(t)}function A4(t,e){if(!t)return!0;let r;for(const n of t.elements)if(n.matches(":invalid")){r=n;break}return r===e}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Mg{constructor(e){this.getCurrentState=e,this.currentValidity={validity:{},validationMessage:""}}getValidity(){const e=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,e)))return this.currentValidity;const{validity:n,validationMessage:i}=this.computeValidity(e);return this.prevState=this.copy(e),this.currentValidity={validationMessage:i,validity:{badInput:n.badInput,customError:n.customError,patternMismatch:n.patternMismatch,rangeOverflow:n.rangeOverflow,rangeUnderflow:n.rangeUnderflow,stepMismatch:n.stepMismatch,tooLong:n.tooLong,tooShort:n.tooShort,typeMismatch:n.typeMismatch,valueMissing:n.valueMissing}},this.currentValidity}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class S4 extends Mg{computeValidity({state:e,renderedControl:r}){let n=r;Ds(e)&&!n?(n=this.inputControl||document.createElement("input"),this.inputControl=n):n||(n=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=n);const i=Ds(e)?n:null;if(i&&(i.type=e.type),n.value!==e.value&&(n.value=e.value),n.required=e.required,i){const o=e;o.pattern?i.pattern=o.pattern:i.removeAttribute("pattern"),o.min?i.min=o.min:i.removeAttribute("min"),o.max?i.max=o.max:i.removeAttribute("max"),o.step?i.step=o.step:i.removeAttribute("step")}return(e.minLength??-1)>-1?n.setAttribute("minlength",String(e.minLength)):n.removeAttribute("minlength"),(e.maxLength??-1)>-1?n.setAttribute("maxlength",String(e.maxLength)):n.removeAttribute("maxlength"),{validity:n.validity,validationMessage:n.validationMessage}}equals({state:e},{state:r}){const n=e.type===r.type&&e.value===r.value&&e.required===r.required&&e.minLength===r.minLength&&e.maxLength===r.maxLength;return!Ds(e)||!Ds(r)?n:n&&e.pattern===r.pattern&&e.min===r.min&&e.max===r.max&&e.step===r.step}copy({state:e}){return{state:Ds(e)?this.copyInput(e):this.copyTextArea(e),renderedControl:null}}copyInput(e){const{type:r,pattern:n,min:i,max:o,step:s}=e;return{...this.copySharedState(e),type:r,pattern:n,min:i,max:o,step:s}}copyTextArea(e){return{...this.copySharedState(e),type:e.type}}copySharedState({value:e,required:r,minLength:n,maxLength:i}){return{value:e,required:r,minLength:n,maxLength:i}}}function Ds(t){return t.type!=="textarea"}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const k4=x4(Lg(Vg(cl(ke))));class se extends k4{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(e){this.getInputOrTextarea().selectionDirection=e}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(e){this.getInputOrTextarea().selectionEnd=e}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(e){this.getInputOrTextarea().selectionStart=e}get valueAsNumber(){const e=this.getInput();return e?e.valueAsNumber:NaN}set valueAsNumber(e){const r=this.getInput();r&&(r.valueAsNumber=e,this.value=r.value)}get valueAsDate(){const e=this.getInput();return e?e.valueAsDate:null}set valueAsDate(e){const r=this.getInput();r&&(r.valueAsDate=e,this.value=r.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...e){this.getInputOrTextarea().setRangeText(...e),this.value=this.getInputOrTextarea().value}setSelectionRange(e,r,n){this.getInputOrTextarea().setSelectionRange(e,r,n)}stepDown(e){const r=this.getInput();r&&(r.stepDown(e),this.value=r.value)}stepUp(e){const r=this.getInput();r&&(r.stepUp(e),this.value=r.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(e,r,n){e==="value"&&this.dirty||super.attributeChangedCallback(e,r,n)}render(){const e={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:this.type==="textarea","no-spinner":this.noSpinner};return Y`
      <span class="text-field ${Gt(e)}">
        ${this.renderField()}
      </span>
    `}updated(e){const r=this.getInputOrTextarea().value;this.value!==r&&(this.value=r)}renderField(){return Dg`<${this.fieldTag}
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
    `}renderInputOrTextarea(){const e={direction:this.textDirection},r=this.ariaLabel||this.label||q,n=this.autocomplete,i=(this.maxLength??-1)>-1,o=(this.minLength??-1)>-1;if(this.type==="textarea")return Y`
        <textarea
          class="input"
          style=${Dw(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${r}
          autocomplete=${n||q}
          name=${this.name||q}
          ?disabled=${this.disabled}
          maxlength=${i?this.maxLength:q}
          minlength=${o?this.minLength:q}
          placeholder=${this.placeholder||q}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${Ow(this.value)}
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
          style=${Dw(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${r}
          autocomplete=${n||q}
          name=${this.name||q}
          ?disabled=${this.disabled}
          inputmode=${c||q}
          max=${this.max||q}
          maxlength=${i?this.maxLength:q}
          min=${this.min||q}
          minlength=${o?this.minLength:q}
          pattern=${this.pattern||q}
          placeholder=${this.placeholder||q}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||q}
          type=${this.type}
          .value=${Ow(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${l}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(e,r){return e?Y`<span class="${Gt({suffix:r,prefix:!r})}">${e}</span>`:q}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){var e;this.focused=((e=this.inputOrTextarea)==null?void 0:e.matches(":focus"))??!1}handleInput(e){this.dirty=!0,this.value=e.target.value}redispatchEvent(e){hd(this,e)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return this.type==="textarea"?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[Co](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}focus(){this.getInputOrTextarea().focus()}[za](){return new S4(()=>({state:this,renderedControl:this.inputOrTextarea}))}[Ba](){return this.inputOrTextarea}[dp](e){var n;e==null||e.preventDefault();const r=this.getErrorText();this.nativeError=!!e,this.nativeErrorText=this.validationMessage,r===this.getErrorText()&&((n=this.field)==null||n.reannounceError())}}Zn(se);se.shadowRootOptions={...ke.shadowRootOptions,delegatesFocus:!0};P([F({type:Boolean,reflect:!0})],se.prototype,"error",void 0);P([F({attribute:"error-text"})],se.prototype,"errorText",void 0);P([F()],se.prototype,"label",void 0);P([F({type:Boolean,attribute:"no-asterisk"})],se.prototype,"noAsterisk",void 0);P([F({type:Boolean,reflect:!0})],se.prototype,"required",void 0);P([F()],se.prototype,"value",void 0);P([F({attribute:"prefix-text"})],se.prototype,"prefixText",void 0);P([F({attribute:"suffix-text"})],se.prototype,"suffixText",void 0);P([F({type:Boolean,attribute:"has-leading-icon"})],se.prototype,"hasLeadingIcon",void 0);P([F({type:Boolean,attribute:"has-trailing-icon"})],se.prototype,"hasTrailingIcon",void 0);P([F({attribute:"supporting-text"})],se.prototype,"supportingText",void 0);P([F({attribute:"text-direction"})],se.prototype,"textDirection",void 0);P([F({type:Number})],se.prototype,"rows",void 0);P([F({type:Number})],se.prototype,"cols",void 0);P([F({reflect:!0})],se.prototype,"inputMode",void 0);P([F()],se.prototype,"max",void 0);P([F({type:Number})],se.prototype,"maxLength",void 0);P([F()],se.prototype,"min",void 0);P([F({type:Number})],se.prototype,"minLength",void 0);P([F({type:Boolean,attribute:"no-spinner"})],se.prototype,"noSpinner",void 0);P([F()],se.prototype,"pattern",void 0);P([F({reflect:!0,converter:E4})],se.prototype,"placeholder",void 0);P([F({type:Boolean,reflect:!0})],se.prototype,"readOnly",void 0);P([F({type:Boolean,reflect:!0})],se.prototype,"multiple",void 0);P([F()],se.prototype,"step",void 0);P([F({reflect:!0})],se.prototype,"type",void 0);P([F({reflect:!0})],se.prototype,"autocomplete",void 0);P([Nt()],se.prototype,"dirty",void 0);P([Nt()],se.prototype,"focused",void 0);P([Nt()],se.prototype,"nativeError",void 0);P([Nt()],se.prototype,"nativeErrorText",void 0);P([$e(".input")],se.prototype,"inputOrTextarea",void 0);P([$e(".field")],se.prototype,"field",void 0);P([os({slot:"leading-icon"})],se.prototype,"leadingIcons",void 0);P([os({slot:"trailing-icon"})],se.prototype,"trailingIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class C4 extends se{constructor(){super(...arguments),this.fieldTag=Ii`md-filled-field`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const R4=pe`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let hp=class extends C4{constructor(){super(...arguments),this.fieldTag=Ii`md-filled-field`}};hp.styles=[R4,v4];hp=P([Be("md-filled-text-field")],hp);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class P4 extends ke{render(){return Y`<slot></slot>`}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const N4=pe`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let fp=class extends P4{};fp.styles=[N4];fp=P([Be("md-icon")],fp);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function lT(t,e=cn){const r=uT(t,e);return r&&(r.tabIndex=0,r.focus()),r}function cT(t,e=cn){const r=O4(t,e);return r&&(r.tabIndex=0,r.focus()),r}function Nh(t,e=cn){for(let r=0;r<t.length;r++){const n=t[r];if(n.tabIndex===0&&e(n))return{item:n,index:r}}return null}function uT(t,e=cn){for(const r of t)if(e(r))return r;return null}function O4(t,e=cn){for(let r=t.length-1;r>=0;r--){const n=t[r];if(e(n))return n}return null}function D4(t,e,r=cn,n=!0){for(let i=1;i<t.length;i++){const o=(i+e)%t.length;if(o<e&&!n)return null;const s=t[o];if(r(s))return s}return t[e]?t[e]:null}function L4(t,e,r=cn,n=!0){for(let i=1;i<t.length;i++){const o=(e-i+t.length)%t.length;if(o>e&&!n)return null;const s=t[o];if(r(s))return s}return t[e]?t[e]:null}function Lw(t,e,r=cn,n=!0){if(e){const i=D4(t,e.index,r,n);return i&&(i.tabIndex=0,i.focus()),i}else return lT(t,r)}function Vw(t,e,r=cn,n=!0){if(e){const i=L4(t,e.index,r,n);return i&&(i.tabIndex=0,i.focus()),i}else return cT(t,r)}function V4(){return new Event("request-activation",{bubbles:!0,composed:!0})}function cn(t){return!t.disabled}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Fr={ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",Home:"Home",End:"End"};class M4{constructor(e){this.handleKeydown=h=>{const p=h.key;if(h.defaultPrevented||!this.isNavigableKey(p))return;const m=this.items;if(!m.length)return;const b=Nh(m,this.isActivatable);h.preventDefault();const k=this.isRtl(),N=k?Fr.ArrowRight:Fr.ArrowLeft,D=k?Fr.ArrowLeft:Fr.ArrowRight;let E=null;switch(p){case Fr.ArrowDown:case D:E=Lw(m,b,this.isActivatable,this.wrapNavigation());break;case Fr.ArrowUp:case N:E=Vw(m,b,this.isActivatable,this.wrapNavigation());break;case Fr.Home:E=lT(m,this.isActivatable);break;case Fr.End:E=cT(m,this.isActivatable);break}E&&b&&b.item!==E&&(b.item.tabIndex=-1)},this.onDeactivateItems=()=>{const h=this.items;for(const p of h)this.deactivateItem(p)},this.onRequestActivation=h=>{this.onDeactivateItems();const p=h.target;this.activateItem(p),p.focus()},this.onSlotchange=()=>{const h=this.items;let p=!1;for(const b of h){if(!b.disabled&&b.tabIndex>-1&&!p){p=!0,b.tabIndex=0;continue}b.tabIndex=-1}if(p)return;const m=uT(h,this.isActivatable);m&&(m.tabIndex=0)};const{isItem:r,getPossibleItems:n,isRtl:i,deactivateItem:o,activateItem:s,isNavigableKey:l,isActivatable:c,wrapNavigation:u}=e;this.isItem=r,this.getPossibleItems=n,this.isRtl=i,this.deactivateItem=o,this.activateItem=s,this.isNavigableKey=l,this.isActivatable=c,this.wrapNavigation=u??(()=>!0)}get items(){const e=this.getPossibleItems(),r=[];for(const n of e){if(this.isItem(n)){r.push(n);continue}const o=n.item;o&&this.isItem(o)&&r.push(o)}return r}activateNextItem(){const e=this.items,r=Nh(e,this.isActivatable);return r&&(r.item.tabIndex=-1),Lw(e,r,this.isActivatable,this.wrapNavigation())}activatePreviousItem(){const e=this.items,r=Nh(e,this.isActivatable);return r&&(r.item.tabIndex=-1),Vw(e,r,this.isActivatable,this.wrapNavigation())}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const $4=new Set(Object.values(Fr));class dT extends ke{get items(){return this.listController.items}constructor(){super(),this.listController=new M4({isItem:e=>e.hasAttribute("md-list-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>getComputedStyle(this).direction==="rtl",deactivateItem:e=>{e.tabIndex=-1},activateItem:e=>{e.tabIndex=0},isNavigableKey:e=>$4.has(e),isActivatable:e=>!e.disabled&&e.type!=="text"}),this.internals=this.attachInternals(),this.internals.role="list",this.addEventListener("keydown",this.listController.handleKeydown)}render(){return Y`
      <slot
        @deactivate-items=${this.listController.onDeactivateItems}
        @request-activation=${this.listController.onRequestActivation}
        @slotchange=${this.listController.onSlotchange}>
      </slot>
    `}activateNextItem(){return this.listController.activateNextItem()}activatePreviousItem(){return this.listController.activatePreviousItem()}}P([os({flatten:!0})],dT.prototype,"slotItems",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const F4=pe`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let pp=class extends dT{};pp.styles=[F4];pp=P([Be("md-list")],pp);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class $g extends ke{constructor(){super(...arguments),this.multiline=!1}render(){return Y`
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
    `}handleTextSlotChange(){let e=!1,r=0;for(const n of this.textSlots)if(U4(n)&&(r+=1),r>1){e=!0;break}this.multiline=e}}P([F({type:Boolean,reflect:!0})],$g.prototype,"multiline",void 0);P([PL(".text slot")],$g.prototype,"textSlots",void 0);function U4(t){var e;for(const r of t.assignedNodes({flatten:!0})){const n=r.nodeType===Node.ELEMENT_NODE,i=r.nodeType===Node.TEXT_NODE&&((e=r.textContent)==null?void 0:e.match(/\S/));if(n||i)return!0}return!1}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const j4=pe`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let mp=class extends $g{};mp.styles=[j4];mp=P([Be("md-item")],mp);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class un extends ke{constructor(){super(...arguments),this.disabled=!1,this.type="text",this.isListItem=!0,this.href="",this.target=""}get isDisabled(){return this.disabled&&this.type!=="link"}willUpdate(e){this.href&&(this.type="link"),super.willUpdate(e)}render(){return this.renderListItem(Y`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){const r=this.type==="link";let n;switch(this.type){case"link":n=Ii`a`;break;case"button":n=Ii`button`;break;default:case"text":n=Ii`li`;break}const i=this.type!=="text",o=r&&this.target?this.target:q;return Dg`
      <${n}
        id="item"
        tabindex="${this.isDisabled||!i?-1:0}"
        ?disabled=${this.isDisabled}
        role="listitem"
        aria-selected=${this.ariaSelected||q}
        aria-checked=${this.ariaChecked||q}
        aria-expanded=${this.ariaExpanded||q}
        aria-haspopup=${this.ariaHasPopup||q}
        class="list-item ${Gt(this.getRenderClasses())}"
        href=${this.href||q}
        target=${o}
        @focus=${this.onFocus}
      >${e}</${n}>
    `}renderRipple(){return this.type==="text"?q:Y` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.isDisabled}></md-ripple>`}renderFocusRing(){return this.type==="text"?q:Y` <md-focus-ring
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
    `}onFocus(){this.tabIndex===-1&&this.dispatchEvent(V4())}focus(){var e;(e=this.listItemRoot)==null||e.focus()}}Zn(un);un.shadowRootOptions={...ke.shadowRootOptions,delegatesFocus:!0};P([F({type:Boolean,reflect:!0})],un.prototype,"disabled",void 0);P([F({reflect:!0})],un.prototype,"type",void 0);P([F({type:Boolean,attribute:"md-list-item",reflect:!0})],un.prototype,"isListItem",void 0);P([F()],un.prototype,"href",void 0);P([F()],un.prototype,"target",void 0);P([$e(".list-item")],un.prototype,"listItemRoot",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const z4=pe`:host{display:flex;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-list-item-pressed-state-layer-opacity, 0.12)}:host(:is([type=button]:not([disabled]),[type=link])){cursor:pointer}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;cursor:inherit;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, 0.3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-list-item-one-line-container-height, 56px);padding-top:var(--md-list-item-top-space, 12px);padding-bottom:var(--md-list-item-bottom-space, 12px);padding-inline-start:var(--md-list-item-leading-space, 16px);padding-inline-end:var(--md-list-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}@media(forced-colors: active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let gp=class extends un{};gp.styles=[z4];gp=P([Be("md-list-item")],gp);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ss extends ke{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){const{ariaLabel:e}=this;return Y`
      <div
        class="progress ${Gt(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${e||q}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?q:this.value}
        >${this.renderIndicator()}</div
      >
    `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}}Zn(ss);P([F({type:Number})],ss.prototype,"value",void 0);P([F({type:Number})],ss.prototype,"max",void 0);P([F({type:Boolean})],ss.prototype,"indeterminate",void 0);P([F({type:Boolean,attribute:"four-color"})],ss.prototype,"fourColor",void 0);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class B4 extends ss{renderIndicator(){return this.indeterminate?this.renderIndeterminateContainer():this.renderDeterminateContainer()}renderDeterminateContainer(){const e=(1-this.value/this.max)*100;return Y`
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
 */const q4=pe`:host{--_active-indicator-color: var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width: var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color: var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size: var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;width:var(--_size);height:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.progress,.spinner,.left,.right,.circle,svg,.track,.active-track{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1568.2352941176ms}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) rgba(0,0,0,0) rgba(0,0,0,0);animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-666.5ms,0ms}@media(forced-colors: active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let vp=class extends B4{};vp.styles=[q4];vp=P([Be("md-circular-progress")],vp);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ei extends ke{constructor(){super(...arguments),this.disabled=!1,this.alwaysFocusable=!1,this.label="",this.hasIcon=!1}get rippleDisabled(){return this.disabled}focus(e){this.disabled&&!this.alwaysFocusable||super.focus(e)}render(){return Y`
      <div class="container ${Gt(this.getContainerClasses())}">
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
    `}handleIconChange(e){const r=e.target;this.hasIcon=r.assignedElements({flatten:!0}).length>0}}Zn(ei);ei.shadowRootOptions={...ke.shadowRootOptions,delegatesFocus:!0};P([F({type:Boolean,reflect:!0})],ei.prototype,"disabled",void 0);P([F({type:Boolean,attribute:"always-focusable"})],ei.prototype,"alwaysFocusable",void 0);P([F()],ei.prototype,"label",void 0);P([F({type:Boolean,reflect:!0,attribute:"has-icon"})],ei.prototype,"hasIcon",void 0);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class hT extends ke{get chips(){return this.childElements.filter(e=>e instanceof ei)}constructor(){super(),this.internals=this.attachInternals(),this.addEventListener("focusin",this.updateTabIndices.bind(this)),this.addEventListener("update-focus",this.updateTabIndices.bind(this)),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.internals.role="toolbar"}render(){return Y`<slot @slotchange=${this.updateTabIndices}></slot>`}handleKeyDown(e){const r=e.key==="ArrowLeft",n=e.key==="ArrowRight",i=e.key==="Home",o=e.key==="End";if(!r&&!n&&!i&&!o)return;const{chips:s}=this;if(s.length<2)return;if(e.preventDefault(),i||o){const m=i?0:s.length-1;s[m].focus({trailing:o}),this.updateTabIndices();return}const c=getComputedStyle(this).direction==="rtl"?r:n,u=s.find(m=>m.matches(":focus-within"));if(!u){(c?s[0]:s[s.length-1]).focus({trailing:!c}),this.updateTabIndices();return}const h=s.indexOf(u);let p=c?h+1:h-1;for(;p!==h;){p>=s.length?p=0:p<0&&(p=s.length-1);const m=s[p];if(m.disabled&&!m.alwaysFocusable){c?p++:p--;continue}m.focus({trailing:!c}),this.updateTabIndices();break}}updateTabIndices(){const{chips:e}=this;let r;for(const n of e){const i=n.alwaysFocusable||!n.disabled;if(n.matches(":focus-within")&&i){r=n;continue}i&&!r&&(r=n),n.tabIndex=-1}r&&(r.tabIndex=0)}}P([os()],hT.prototype,"childElements",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const H4=pe`:host{display:flex;flex-wrap:wrap;gap:8px}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let yp=class extends hT{};yp.styles=[H4];yp=P([Be("md-chip-set")],yp);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const W4=pe`.elevated{--md-elevation-level: var(--_elevated-container-elevation);--md-elevation-shadow-color: var(--_elevated-container-shadow-color)}.elevated::before{background:var(--_elevated-container-color)}.elevated:hover{--md-elevation-level: var(--_elevated-hover-container-elevation)}.elevated:focus-within{--md-elevation-level: var(--_elevated-focus-container-elevation)}.elevated:active{--md-elevation-level: var(--_elevated-pressed-container-elevation)}.elevated.disabled{--md-elevation-level: var(--_elevated-disabled-container-elevation)}.elevated.disabled::before{background:var(--_elevated-disabled-container-color);opacity:var(--_elevated-disabled-container-opacity)}@media(forced-colors: active){.elevated md-elevation{border:1px solid CanvasText}.elevated.disabled md-elevation{border-color:GrayText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const sc="aria-label-remove";class K4 extends ei{get ariaLabelRemove(){if(this.hasAttribute(sc))return this.getAttribute(sc);const{ariaLabel:e}=this;return`Remove ${e||this.label}`}set ariaLabelRemove(e){const r=this.ariaLabelRemove;e!==r&&(e===null?this.removeAttribute(sc):this.setAttribute(sc,e),this.requestUpdate())}constructor(){super(),this.handleTrailingActionFocus=this.handleTrailingActionFocus.bind(this),this.addEventListener("keydown",this.handleKeyDown.bind(this))}focus(e){if((this.alwaysFocusable||!this.disabled)&&(e!=null&&e.trailing)&&this.trailingAction){this.trailingAction.focus(e);return}super.focus(e)}renderContainerContent(){return Y`
      ${super.renderContainerContent()}
      ${this.renderTrailingAction(this.handleTrailingActionFocus)}
    `}handleKeyDown(e){var u,h;const r=e.key==="ArrowLeft",n=e.key==="ArrowRight";if(!r&&!n||!this.primaryAction||!this.trailingAction)return;const o=getComputedStyle(this).direction==="rtl"?r:n,s=(u=this.primaryAction)==null?void 0:u.matches(":focus-within"),l=(h=this.trailingAction)==null?void 0:h.matches(":focus-within");if(o&&l||!o&&s)return;e.preventDefault(),e.stopPropagation(),(o?this.trailingAction:this.primaryAction).focus()}handleTrailingActionFocus(){const{primaryAction:e,trailingAction:r}=this;!e||!r||(e.tabIndex=-1,r.addEventListener("focusout",()=>{e.tabIndex=0},{once:!0}))}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function G4({ariaLabel:t,disabled:e,focusListener:r,tabbable:n=!1}){return Y`
    <button
      class="trailing action"
      aria-label=${t}
      tabindex=${n?q:-1}
      @click=${Q4}
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
  `}function Q4(t){this.disabled||(t.stopPropagation(),!this.dispatchEvent(new Event("remove",{cancelable:!0})))||this.remove()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class qi extends K4{constructor(){super(...arguments),this.elevated=!1,this.removable=!1,this.selected=!1,this.hasSelectedIcon=!1}get primaryId(){return"button"}getContainerClasses(){return{...super.getContainerClasses(),elevated:this.elevated,selected:this.selected,"has-trailing":this.removable,"has-icon":this.hasIcon||this.selected}}renderPrimaryAction(e){const{ariaLabel:r}=this;return Y`
      <button
        class="primary action"
        id="button"
        aria-label=${r||q}
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
    `:super.renderLeadingIcon()}renderTrailingAction(e){return this.removable?G4({focusListener:e,ariaLabel:this.ariaLabelRemove,disabled:this.disabled}):q}renderOutline(){return this.elevated?Y`<md-elevation part="elevation"></md-elevation>`:super.renderOutline()}handleClick(e){if(this.disabled)return;const r=this.selected;if(this.selected=!this.selected,!hd(this,e)){this.selected=r;return}}}P([F({type:Boolean})],qi.prototype,"elevated",void 0);P([F({type:Boolean})],qi.prototype,"removable",void 0);P([F({type:Boolean,reflect:!0})],qi.prototype,"selected",void 0);P([F({type:Boolean,reflect:!0,attribute:"has-selected-icon"})],qi.prototype,"hasSelectedIcon",void 0);P([$e(".primary.action")],qi.prototype,"primaryAction",void 0);P([$e(".trailing.action")],qi.prototype,"trailingAction",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Y4=pe`:host{--_container-height: var(--md-filter-chip-container-height, 32px);--_disabled-label-text-color: var(--md-filter-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filter-chip-disabled-label-text-opacity, 0.38);--_elevated-container-elevation: var(--md-filter-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-filter-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-filter-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-filter-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-filter-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-filter-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-filter-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-filter-chip-elevated-pressed-container-elevation, 1);--_elevated-selected-container-color: var(--md-filter-chip-elevated-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_label-text-font: var(--md-filter-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filter-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filter-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filter-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_selected-focus-label-text-color: var(--md-filter-chip-selected-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-label-text-color: var(--md-filter-chip-selected-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-color: var(--md-filter-chip-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-opacity: var(--md-filter-chip-selected-hover-state-layer-opacity, 0.08);--_selected-label-text-color: var(--md-filter-chip-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-label-text-color: var(--md-filter-chip-selected-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-color: var(--md-filter-chip-selected-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_selected-pressed-state-layer-opacity: var(--md-filter-chip-selected-pressed-state-layer-opacity, 0.12);--_elevated-container-color: var(--md-filter-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_disabled-outline-color: var(--md-filter-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-filter-chip-disabled-outline-opacity, 0.12);--_disabled-selected-container-color: var(--md-filter-chip-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-filter-chip-disabled-selected-container-opacity, 0.12);--_focus-outline-color: var(--md-filter-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-filter-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-filter-chip-outline-width, 1px);--_selected-container-color: var(--md-filter-chip-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_selected-outline-width: var(--md-filter-chip-selected-outline-width, 0px);--_focus-label-text-color: var(--md-filter-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-filter-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filter-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-filter-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filter-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-label-text-color: var(--md-filter-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-filter-chip-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filter-chip-pressed-state-layer-opacity, 0.12);--_icon-size: var(--md-filter-chip-icon-size, 18px);--_disabled-leading-icon-color: var(--md-filter-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filter-chip-disabled-leading-icon-opacity, 0.38);--_selected-focus-leading-icon-color: var(--md-filter-chip-selected-focus-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-leading-icon-color: var(--md-filter-chip-selected-hover-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-leading-icon-color: var(--md-filter-chip-selected-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-leading-icon-color: var(--md-filter-chip-selected-pressed-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-leading-icon-color: var(--md-filter-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-filter-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-filter-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-filter-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_disabled-trailing-icon-color: var(--md-filter-chip-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filter-chip-disabled-trailing-icon-opacity, 0.38);--_selected-focus-trailing-icon-color: var(--md-filter-chip-selected-focus-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-trailing-icon-color: var(--md-filter-chip-selected-hover-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-trailing-icon-color: var(--md-filter-chip-selected-pressed-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-trailing-icon-color: var(--md-filter-chip-selected-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-trailing-icon-color: var(--md-filter-chip-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filter-chip-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-trailing-icon-color: var(--md-filter-chip-pressed-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-color: var(--md-filter-chip-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var(--md-filter-chip-container-shape-start-start, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end: var(--md-filter-chip-container-shape-start-end, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end: var(--md-filter-chip-container-shape-end-end, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start: var(--md-filter-chip-container-shape-end-start, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space: var(--md-filter-chip-leading-space, 16px);--_trailing-space: var(--md-filter-chip-trailing-space, 16px);--_icon-label-space: var(--md-filter-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-filter-chip-with-leading-icon-leading-space, 8px);--_with-trailing-icon-trailing-space: var(--md-filter-chip-with-trailing-icon-trailing-space, 8px)}.selected.elevated::before{background:var(--_elevated-selected-container-color)}.checkmark{height:var(--_icon-size);width:var(--_icon-size)}.disabled .checkmark{opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){.disabled .checkmark{opacity:1}}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const X4=pe`.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}:where(.selected)::before{background:var(--_selected-container-color)}:where(.selected) .outline{border-width:var(--_selected-outline-width)}:where(.selected.disabled)::before{background:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}:where(.selected) .label{color:var(--_selected-label-text-color)}:where(.selected:hover) .label{color:var(--_selected-hover-label-text-color)}:where(.selected:focus) .label{color:var(--_selected-focus-label-text-color)}:where(.selected:active) .label{color:var(--_selected-pressed-label-text-color)}:where(.selected) .leading.icon{color:var(--_selected-leading-icon-color)}:where(.selected:hover) .leading.icon{color:var(--_selected-hover-leading-icon-color)}:where(.selected:focus) .leading.icon{color:var(--_selected-focus-leading-icon-color)}:where(.selected:active) .leading.icon{color:var(--_selected-pressed-leading-icon-color)}@media(forced-colors: active){:where(.selected:not(.elevated))::before{border:1px solid CanvasText}:where(.selected) .outline{border-width:1px}}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const J4=pe`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);display:inline-flex;height:var(--_container-height);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host([disabled]){pointer-events:none}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}.container{border-radius:inherit;box-sizing:border-box;display:flex;height:100%;position:relative;width:100%}.container::before{border-radius:inherit;content:"";inset:0;pointer-events:none;position:absolute}.container:not(.disabled){cursor:pointer}.container.disabled{pointer-events:none}.cell{display:flex}.action{align-items:baseline;appearance:none;background:none;border:none;border-radius:inherit;display:flex;outline:none;padding:0;position:relative;text-decoration:none}.primary.action{padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space)}.has-icon .primary.action{padding-inline-start:var(--_with-leading-icon-leading-space)}.touch{height:48px;inset:50% 0 0;position:absolute;transform:translateY(-50%);width:100%}:host([touch-target=none]) .touch{display:none}.outline{border:var(--_outline-width) solid var(--_outline-color);border-radius:inherit;inset:0;pointer-events:none;position:absolute}:where(:focus) .outline{border-color:var(--_focus-outline-color)}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}md-ripple{border-radius:inherit}.label,.icon,.touch{z-index:1}.label{align-items:center;color:var(--_label-text-color);display:flex;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);height:100%;text-overflow:ellipsis;user-select:none;white-space:nowrap}:where(:hover) .label{color:var(--_hover-label-text-color)}:where(:focus) .label{color:var(--_focus-label-text-color)}:where(:active) .label{color:var(--_pressed-label-text-color)}:where(.disabled) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.icon{align-self:center;display:flex;fill:currentColor;position:relative}.icon ::slotted(:first-child){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size)}.leading.icon{color:var(--_leading-icon-color)}.leading.icon ::slotted(*),.leading.icon svg{margin-inline-end:var(--_icon-label-space)}:where(:hover) .leading.icon{color:var(--_hover-leading-icon-color)}:where(:focus) .leading.icon{color:var(--_focus-leading-icon-color)}:where(:active) .leading.icon{color:var(--_pressed-leading-icon-color)}:where(.disabled) .leading.icon{color:var(--_disabled-leading-icon-color);opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){:where(.disabled) :is(.label,.outline,.leading.icon){color:GrayText;opacity:1}}a,button{text-transform:inherit}a,button:not(:disabled){cursor:inherit}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Z4=pe`.trailing.action{align-items:center;justify-content:center;padding-inline-start:var(--_icon-label-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.trailing.action :is(md-ripple,md-focus-ring){border-radius:50%;height:calc(1.3333333333*var(--_icon-size));width:calc(1.3333333333*var(--_icon-size))}.trailing.action md-focus-ring{inset:unset}.has-trailing .primary.action{padding-inline-end:0}.trailing.icon{color:var(--_trailing-icon-color);height:var(--_icon-size);width:var(--_icon-size)}:where(:hover) .trailing.icon{color:var(--_hover-trailing-icon-color)}:where(:focus) .trailing.icon{color:var(--_focus-trailing-icon-color)}:where(:active) .trailing.icon{color:var(--_pressed-trailing-icon-color)}:where(.disabled) .trailing.icon{color:var(--_disabled-trailing-icon-color);opacity:var(--_disabled-trailing-icon-opacity)}:where(.selected) .trailing.icon{color:var(--_selected-trailing-icon-color)}:where(.selected:hover) .trailing.icon{color:var(--_selected-hover-trailing-icon-color)}:where(.selected:focus) .trailing.icon{color:var(--_selected-focus-trailing-icon-color)}:where(.selected:active) .trailing.icon{color:var(--_selected-pressed-trailing-icon-color)}@media(forced-colors: active){.trailing.icon{color:ButtonText}:where(.disabled) .trailing.icon{color:GrayText;opacity:1}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let _p=class extends qi{};_p.styles=[J4,W4,Z4,X4,Y4];_p=P([Be("md-filter-chip")],_p);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ac=Symbol("isFocusable"),Oh=Symbol("privateIsFocusable"),lc=Symbol("externalTabIndex"),cc=Symbol("isUpdatingTabIndex"),uc=Symbol("updateTabIndex");function eV(t){var e,r,n;class i extends t{constructor(){super(...arguments),this[e]=!0,this[r]=null,this[n]=!1}get[ac](){return this[Oh]}set[ac](s){this[ac]!==s&&(this[Oh]=s,this[uc]())}connectedCallback(){super.connectedCallback(),this[uc]()}attributeChangedCallback(s,l,c){if(s!=="tabindex"){super.attributeChangedCallback(s,l,c);return}if(this.requestUpdate("tabIndex",Number(l??-1)),!this[cc]){if(!this.hasAttribute("tabindex")){this[lc]=null,this[uc]();return}this[lc]=this.tabIndex}}[(e=Oh,r=lc,n=cc,uc)](){const s=this[ac]?0:-1,l=this[lc]??s;this[cc]=!0,this.tabIndex=l,this[cc]=!1}}return P([F({noAccessor:!0})],i.prototype,"tabIndex",void 0),i}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class tV extends Mg{computeValidity(e){this.radioElement||(this.radioElement=document.createElement("input"),this.radioElement.type="radio",this.radioElement.name="group");let r=!1,n=!1;for(const{checked:i,required:o}of e)o&&(r=!0),i&&(n=!0);return this.radioElement.checked=n,this.radioElement.required=r,{validity:{valueMissing:r&&!n},validationMessage:this.radioElement.validationMessage}}equals(e,r){if(e.length!==r.length)return!1;for(let n=0;n<e.length;n++){const i=e[n],o=r[n];if(i.checked!==o.checked||i.required!==o.required)return!1}return!0}copy(e){return e.map(({checked:r,required:n})=>({checked:r,required:n}))}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class rV{get controls(){const e=this.host.getAttribute("name");return!e||!this.root||!this.host.isConnected?[this.host]:Array.from(this.root.querySelectorAll(`[name="${e}"]`))}constructor(e){this.host=e,this.focused=!1,this.root=null,this.handleFocusIn=()=>{this.focused=!0,this.updateTabIndices()},this.handleFocusOut=()=>{this.focused=!1,this.updateTabIndices()},this.handleKeyDown=r=>{const n=r.key==="ArrowDown",i=r.key==="ArrowUp",o=r.key==="ArrowLeft",s=r.key==="ArrowRight";if(!o&&!s&&!n&&!i)return;const l=this.controls;if(!l.length)return;r.preventDefault();const u=getComputedStyle(this.host).direction==="rtl"?o||n:s||n,h=l.indexOf(this.host);let p=u?h+1:h-1;for(;p!==h;){p>=l.length?p=0:p<0&&(p=l.length-1);const m=l[p];if(m.hasAttribute("disabled")){u?p++:p--;continue}for(const b of l)b!==m&&(b.checked=!1,b.tabIndex=-1,b.blur());m.checked=!0,m.tabIndex=0,m.focus(),m.dispatchEvent(new Event("change",{bubbles:!0}));break}}}hostConnected(){this.root=this.host.getRootNode(),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("focusin",this.handleFocusIn),this.host.addEventListener("focusout",this.handleFocusOut),this.host.checked&&this.uncheckSiblings(),this.updateTabIndices()}hostDisconnected(){this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("focusin",this.handleFocusIn),this.host.removeEventListener("focusout",this.handleFocusOut),this.updateTabIndices(),this.root=null}handleCheckedChange(){this.host.checked&&(this.uncheckSiblings(),this.updateTabIndices())}uncheckSiblings(){for(const e of this.controls)e!==this.host&&(e.checked=!1)}updateTabIndices(){const e=this.controls,r=e.find(n=>n.checked);if(r||this.focused){const n=r||this.host;n.tabIndex=0;for(const i of e)i!==n&&(i.tabIndex=-1);return}for(const n of e)n.tabIndex=0}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Mw;const Dh=Symbol("checked");let nV=0;const iV=Lg(Vg(cl(eV(ke))));class ul extends iV{get checked(){return this[Dh]}set checked(e){const r=this.checked;r!==e&&(this[Dh]=e,this.requestUpdate("checked",r),this.selectionController.handleCheckedChange())}constructor(){super(),this.maskId=`cutout${++nV}`,this[Mw]=!1,this.required=!1,this.value="on",this.selectionController=new rV(this),this.addController(this.selectionController),this[nt].role="radio",this.addEventListener("click",this.handleClick.bind(this)),this.addEventListener("keydown",this.handleKeydown.bind(this))}render(){const e={checked:this.checked};return Y`
      <div class="container ${Gt(e)}" aria-hidden="true">
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
    `}updated(){this[nt].ariaChecked=String(this.checked)}async handleClick(e){this.disabled||(await 0,!e.defaultPrevented&&(Og(e)&&this.focus(),this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))))}async handleKeydown(e){await 0,!(e.key!==" "||e.defaultPrevented)&&this.click()}[(Mw=Dh,Co)](){return this.checked?this.value:null}[Eu](){return String(this.checked)}formResetCallback(){this.checked=this.hasAttribute("checked")}formStateRestoreCallback(e){this.checked=e==="true"}[za](){return new tV(()=>this.selectionController?this.selectionController.controls:[this])}[Ba](){return this.container}}P([F({type:Boolean})],ul.prototype,"checked",null);P([F({type:Boolean})],ul.prototype,"required",void 0);P([F()],ul.prototype,"value",void 0);P([$e(".container")],ul.prototype,"container",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const oV=pe`@layer{:host{display:inline-flex;height:var(--md-radio-icon-size, 20px);outline:none;position:relative;vertical-align:top;width:var(--md-radio-icon-size, 20px);-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;--md-ripple-hover-color: var(--md-radio-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-radio-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-radio-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-opacity: var(--md-radio-pressed-state-layer-opacity, 0.12)}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-radio-icon-size, 20px))/2)}.container{display:flex;height:100%;place-content:center;place-items:center;width:100%}md-focus-ring{height:44px;inset:unset;width:44px}.checked{--md-ripple-hover-color: var(--md-radio-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-radio-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-radio-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-radio-selected-pressed-state-layer-opacity, 0.12)}input{appearance:none;height:48px;margin:0;position:absolute;width:48px;cursor:inherit}:host([touch-target=none]) input{width:100%;height:100%}md-ripple{border-radius:50%;height:var(--md-radio-state-layer-size, 40px);inset:unset;width:var(--md-radio-state-layer-size, 40px)}.icon{fill:var(--md-radio-icon-color, var(--md-sys-color-on-surface-variant, #49454f));inset:0;position:absolute}.outer.circle{transition:fill 50ms linear}.inner.circle{opacity:0;transform-origin:center;transition:opacity 50ms linear}.checked .icon{fill:var(--md-radio-selected-icon-color, var(--md-sys-color-primary, #6750a4))}.checked .inner.circle{animation:inner-circle-grow 300ms cubic-bezier(0.05, 0.7, 0.1, 1);opacity:1}@keyframes inner-circle-grow{from{transform:scale(0)}to{transform:scale(1)}}:host([disabled]) .circle{animation-duration:0s;transition-duration:0s}:host(:hover) .icon{fill:var(--md-radio-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host(:focus-within) .icon{fill:var(--md-radio-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host(:active) .icon{fill:var(--md-radio-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host([disabled]) .icon{fill:var(--md-radio-disabled-unselected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-radio-disabled-unselected-icon-opacity, 0.38)}:host(:hover) .checked .icon{fill:var(--md-radio-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4))}:host(:focus-within) .checked .icon{fill:var(--md-radio-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4))}:host(:active) .checked .icon{fill:var(--md-radio-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4))}:host([disabled]) .checked .icon{fill:var(--md-radio-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-radio-disabled-selected-icon-opacity, 0.38)}}@layer hcm{@media(forced-colors: active){.icon{fill:CanvasText}:host([disabled]) .icon{fill:GrayText;opacity:1}}}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let wp=class extends ul{};wp.styles=[oV];wp=P([Be("md-radio")],wp);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class fd extends ke{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}P([F({type:Boolean,reflect:!0})],fd.prototype,"inset",void 0);P([F({type:Boolean,reflect:!0,attribute:"inset-start"})],fd.prototype,"insetStart",void 0);P([F({type:Boolean,reflect:!0,attribute:"inset-end"})],fd.prototype,"insetEnd",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const sV=pe`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let bp=class extends fd{};bp.styles=[sV];bp=P([Be("md-divider")],bp);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const aV={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:Wo.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:Wo.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},lV={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:Wo.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:Wo.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ue extends ke{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.quick=!1,this.returnValue="",this.noFocusTrap=!1,this.getOpenAnimation=()=>aV,this.getCloseAnimation=()=>lV,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.escapePressedWithoutCancel=!1,this.treewalker=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT),this.addEventListener("submit",this.handleSubmit)}async show(){var n;this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;const e=this.dialog;if(e.open||!this.isOpening){this.isOpening=!1;return}if(!this.dispatchEvent(new Event("open",{cancelable:!0}))){this.open=!1,this.isOpening=!1;return}e.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),(n=this.querySelector("[autofocus]"))==null||n.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1}async close(e=this.returnValue){if(this.isOpening=!1,!this.isConnected){this.open=!1;return}await this.updateComplete;const r=this.dialog;if(!r.open||this.isOpening){this.open=!1;return}const n=this.returnValue;if(this.returnValue=e,!this.dispatchEvent(new Event("close",{cancelable:!0}))){this.returnValue=n;return}await this.animateDialog(this.getCloseAnimation()),r.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){const e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),r={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},n=this.open&&!this.noFocusTrap,i=Y`
      <div
        class="focus-trap"
        tabindex="0"
        aria-hidden="true"
        @focus=${this.handleFocusTrapFocus}></div>
    `,{ariaLabel:o}=this;return Y`
      <div class="scrim"></div>
      <dialog
        class=${Gt(r)}
        aria-label=${o||q}
        aria-labelledby=${this.hasHeadline?"headline":q}
        role=${this.type==="alert"?"alertdialog":q}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        @close=${this.handleClose}
        @keydown=${this.handleKeydown}
        .returnValue=${this.returnValue||q}>
        ${n?i:q}
        <div class="container" @click=${this.handleContentClick}>
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||q}>
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
        ${n?i:q}
      </dialog>
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(e=>{for(const r of e)this.handleAnchorIntersection(r)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent){this.nextClickIsFromContent=!1;return}this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){const r=e.target,{submitter:n}=e;r.method!=="dialog"||!n||this.close(n.getAttribute("value")??this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;this.escapePressedWithoutCancel=!1;const r=!hd(this,e);e.preventDefault(),!r&&this.close()}handleClose(){var e;this.escapePressedWithoutCancel&&(this.escapePressedWithoutCancel=!1,(e=this.dialog)==null||e.dispatchEvent(new Event("cancel",{cancelable:!0})))}handleKeydown(e){e.key==="Escape"&&(this.escapePressedWithoutCancel=!0,setTimeout(()=>{this.escapePressedWithoutCancel=!1}))}async animateDialog(e){var D;if((D=this.cancelAnimations)==null||D.abort(),this.cancelAnimations=new AbortController,this.quick)return;const{dialog:r,scrim:n,container:i,headline:o,content:s,actions:l}=this;if(!r||!n||!i||!o||!s||!l)return;const{container:c,dialog:u,scrim:h,headline:p,content:m,actions:b}=e,k=[[r,u??[]],[n,h??[]],[i,c??[]],[o,p??[]],[s,m??[]],[l,b??[]]],N=[];for(const[E,y]of k)for(const T of y){const V=E.animate(...T);this.cancelAnimations.signal.addEventListener("abort",()=>{V.cancel()}),N.push(V)}await Promise.all(N.map(E=>E.finished.catch(()=>{})))}handleHeadlineChange(e){const r=e.target;this.hasHeadline=r.assignedElements().length>0}handleActionsChange(e){const r=e.target;this.hasActions=r.assignedElements().length>0}handleIconChange(e){const r=e.target;this.hasIcon=r.assignedElements().length>0}handleAnchorIntersection(e){const{target:r,isIntersecting:n}=e;r===this.topAnchor&&(this.isAtScrollTop=n),r===this.bottomAnchor&&(this.isAtScrollBottom=n)}getIsConnectedPromise(){return new Promise(e=>{this.isConnectedPromiseResolve=e})}handleFocusTrapFocus(e){var p;const[r,n]=this.getFirstAndLastFocusableChildren();if(!r||!n){(p=this.dialog)==null||p.focus();return}const i=e.target===this.firstFocusTrap,o=!i,s=e.relatedTarget===r,l=e.relatedTarget===n,c=!s&&!l;if(o&&l||i&&c){r.focus();return}if(i&&s||o&&c){n.focus();return}}getFirstAndLastFocusableChildren(){let e=null,r=null;for(this.treewalker.currentNode=this.treewalker.root;this.treewalker.nextNode();){const n=this.treewalker.currentNode;cV(n)&&(e||(e=n),r=n)}return[e,r]}}Zn(Ue);P([F({type:Boolean})],Ue.prototype,"open",null);P([F({type:Boolean})],Ue.prototype,"quick",void 0);P([F({attribute:!1})],Ue.prototype,"returnValue",void 0);P([F()],Ue.prototype,"type",void 0);P([F({type:Boolean,attribute:"no-focus-trap"})],Ue.prototype,"noFocusTrap",void 0);P([$e("dialog")],Ue.prototype,"dialog",void 0);P([$e(".scrim")],Ue.prototype,"scrim",void 0);P([$e(".container")],Ue.prototype,"container",void 0);P([$e(".headline")],Ue.prototype,"headline",void 0);P([$e(".content")],Ue.prototype,"content",void 0);P([$e(".actions")],Ue.prototype,"actions",void 0);P([Nt()],Ue.prototype,"isAtScrollTop",void 0);P([Nt()],Ue.prototype,"isAtScrollBottom",void 0);P([$e(".scroller")],Ue.prototype,"scroller",void 0);P([$e(".top.anchor")],Ue.prototype,"topAnchor",void 0);P([$e(".bottom.anchor")],Ue.prototype,"bottomAnchor",void 0);P([$e(".focus-trap")],Ue.prototype,"firstFocusTrap",void 0);P([Nt()],Ue.prototype,"hasHeadline",void 0);P([Nt()],Ue.prototype,"hasActions",void 0);P([Nt()],Ue.prototype,"hasIcon",void 0);function cV(t){var o;const e=":is(button,input,select,textarea,object,:is(a,area)[href],[tabindex],[contenteditable=true])",r=":not(:disabled,[disabled])";return t.matches(e+r+':not([tabindex^="-"])')?!0:!t.localName.includes("-")||!t.matches(r)?!1:((o=t.shadowRoot)==null?void 0:o.delegatesFocus)??!1}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const uV=pe`:host{border-start-start-radius:var(--md-dialog-container-shape-start-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-start-end-radius:var(--md-dialog-container-shape-start-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-end-radius:var(--md-dialog-container-shape-end-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-start-radius:var(--md-dialog-container-shape-end-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size, 24px);width:var(--md-dialog-icon-size, 24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));flex:1;font-weight:var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ep=class extends Ue{};Ep.styles=[uV];Ep=P([Be("md-dialog")],Ep);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function $w(t,e=!0){return e&&getComputedStyle(t).getPropertyValue("direction").trim()==="rtl"}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const dV=cl(ke);class Ct extends dV{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=$w(this,this.flipIconInRtl)}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[nt].form}get labels(){return this[nt].labels}willUpdate(){this.href&&(this.disabled=!1)}render(){const e=this.href?Ii`div`:Ii`button`,{ariaLabel:r,ariaHasPopup:n,ariaExpanded:i}=this,o=r&&this.ariaLabelSelected,s=this.toggle?this.selected:q;let l=q;return this.href||(l=o&&this.selected?this.ariaLabelSelected:r),Dg`<${e}
        class="icon-button ${Gt(this.getRenderClasses())}"
        id="button"
        aria-label="${l||q}"
        aria-haspopup="${!this.href&&n||q}"
        aria-expanded="${!this.href&&i||q}"
        aria-pressed="${s}"
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?q:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():q}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${e}>`}renderLink(){const{ariaLabel:e}=this;return Y`
      <a
        class="link"
        id="link"
        href="${this.href}"
        target="${this.target||q}"
        aria-label="${e||q}"></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return Y`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return Y`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`}renderTouchTarget(){return Y`<span class="touch"></span>`}renderFocusRing(){return Y`<md-focus-ring
      part="focus-ring"
      for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){return Y`<md-ripple
      for=${this.href?"link":q}
      ?disabled="${!this.href&&this.disabled}"></md-ripple>`}connectedCallback(){this.flipIcon=$w(this,this.flipIconInRtl),super.connectedCallback()}async handleClick(e){await 0,!(!this.toggle||this.disabled||e.defaultPrevented)&&(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}Zn(Ct),nT(Ct);Ct.formAssociated=!0;Ct.shadowRootOptions={mode:"open",delegatesFocus:!0};P([F({type:Boolean,reflect:!0})],Ct.prototype,"disabled",void 0);P([F({type:Boolean,attribute:"flip-icon-in-rtl"})],Ct.prototype,"flipIconInRtl",void 0);P([F()],Ct.prototype,"href",void 0);P([F()],Ct.prototype,"target",void 0);P([F({attribute:"aria-label-selected"})],Ct.prototype,"ariaLabelSelected",void 0);P([F({type:Boolean})],Ct.prototype,"toggle",void 0);P([F({type:Boolean,reflect:!0})],Ct.prototype,"selected",void 0);P([F()],Ct.prototype,"type",void 0);P([F({reflect:!0})],Ct.prototype,"value",void 0);P([Nt()],Ct.prototype,"flipIcon",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const hV=pe`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host([disabled]){--_disabled-icon-opacity: 1}}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const fV=pe`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let xp=class extends Ct{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};xp.styles=[hV,fV];xp=P([Be("md-icon-button")],xp);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mV=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),gV=(t,e)=>{const r=W.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:l="",children:c,...u},h)=>W.createElement("svg",{ref:h,...pV,width:i,height:i,stroke:n,strokeWidth:s?Number(o)*24/Number(i):o,className:["lucide",`lucide-${mV(t)}`,l].join(" "),...u},[...e.map(([p,m])=>W.createElement(p,m)),...Array.isArray(c)?c:[c]]));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vV=gV("PowerOff",[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15",key:"dxknvb"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68",key:"1x7qb5"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]),yV=["Owner","Bartender","Barback","Server","Manager","Security","Runner"],Fw=[{id:"ice",label:"ICE",icon:"ac_unit"},{id:"glass",label:"GLASSWARE",icon:"wine_bar",children:[{id:"rocks",label:"ROCKS"},{id:"collins",label:"COLLINS"},{id:"pint",label:"PINT"},{id:"coupe",label:"COUPE"},{id:"shot",label:"SHOT GLASS"},{id:"wine",label:"WINE GLASS"}]},{id:"fruit",label:"FRUIT / GARNISH",icon:"restaurant",children:[{id:"lime",label:"LIMES"},{id:"lemon",label:"LEMONS"},{id:"orange",label:"ORANGES"},{id:"cherry",label:"CHERRIES"},{id:"olive",label:"OLIVES"},{id:"mint",label:"MINT"}]},{id:"restock_beer",label:"RESTOCK BEER",icon:"sports_bar"},{id:"restock",label:"RESTOCK WELL",icon:"liquor",children:[{id:"vodka",label:"VODKA"},{id:"gin",label:"GIN"},{id:"tequila",label:"TEQUILA"},{id:"rum",label:"RUM"},{id:"whiskey",label:"WHISKEY"},{id:"cordial",label:"MIXERS"},{id:"beer",label:"BEER"}]},{id:"keg",label:"KEG KICKED",icon:"keg"},{id:"trash",label:"TRASH / SPILL",icon:"delete"},{id:"security",label:"SECURITY",icon:"security"},{id:"manager",label:"MANAGER",icon:"manage_accounts"}],Ip={Owner:["manager","security","keg","trash","ice","glass","fruit","restock"],Manager:["manager","security","keg","trash","restock"],Bartender:["ice","glass","fruit","restock","keg","trash"],Barback:["ice","glass","fruit","restock","keg","trash"],Server:[],Runner:["ice","glass","restock"],Security:["security","fight","manager"]},_V=[{id:"search",label:"Search"},{id:"create",label:"Create Temp"}],wV=({onJoin:t})=>{const[e,r]=W.useState("search"),[n,i]=W.useState(""),[o,s]=W.useState("bar"),[l,c]=W.useState([]),[u,h]=W.useState(!1);W.useEffect(()=>{if(e==="search"&&n.length>2){const m=setTimeout(async()=>{h(!0);try{const k=await(await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(n+" bar")}`)).json();c(k)}catch(b){console.error(b)}finally{h(!1)}},500);return()=>clearTimeout(m)}else c([])},[n,e]);const p=m=>{m.preventDefault(),t({name:n,status:"temporary",type:o})};return S.jsxs("div",{className:"space-y-4",children:[e==="search"?S.jsxs("div",{className:"space-y-2",children:[S.jsx("div",{className:"relative",children:S.jsx("md-filled-text-field",{label:"Search OpenStreetMap",value:n,onInput:m=>i(m.target.value),type:"search",className:"w-full",children:u&&S.jsx("md-circular-progress",{slot:"trailing-icon",indeterminate:!0,style:{width:"24px",height:"24px"}})})}),u&&S.jsx("div",{className:"flex justify-center p-4",children:S.jsx("md-circular-progress",{indeterminate:!0})}),u&&S.jsx("div",{className:"flex justify-center p-4",children:S.jsx("md-circular-progress",{indeterminate:!0})}),u&&S.jsx("div",{className:"flex justify-center p-4",children:S.jsx("md-circular-progress",{indeterminate:!0})}),l.length>0&&S.jsx("md-list",{className:"bg-[#1E1E1E] rounded-xl overflow-hidden border border-gray-800 max-h-60 overflow-y-auto",children:l.map(m=>S.jsxs("md-list-item",{type:"button",onClick:()=>t({id:String(m.osm_id),name:m.name||m.display_name.split(",")[0],address:m.display_name,status:"verified",osmId:String(m.osm_id)}),children:[S.jsx("div",{slot:"headline",className:"text-white",children:m.name||m.display_name.split(",")[0]}),S.jsx("div",{slot:"supporting-text",className:"text-gray-400 text-xs truncate",children:m.display_name}),S.jsx("md-icon",{slot:"start",children:"location_on"})]},m.place_id))})]}):S.jsxs("form",{onSubmit:p,className:"space-y-4",children:[S.jsx("md-filled-text-field",{label:"Bar Name",value:n,onInput:m=>i(m.target.value)}),S.jsxs("div",{className:"flex gap-6 justify-center",children:[S.jsxs("div",{className:"flex items-center gap-2 cursor-pointer",onClick:()=>s("bar"),children:[S.jsx("md-radio",{name:"barType",value:"bar",checked:o==="bar","touch-target":"wrapper"}),S.jsx("span",{className:"text-white",children:"Bar"})]}),S.jsxs("div",{className:"flex items-center gap-2 cursor-pointer",onClick:()=>s("restaurant"),children:[S.jsx("md-radio",{name:"barType",value:"restaurant",checked:o==="restaurant","touch-target":"wrapper"}),S.jsx("span",{className:"text-white",children:"Restaurant"})]})]}),S.jsx("div",{className:"flex justify-center",children:S.jsx("md-filled-button",{type:"submit",children:"Create Bar"})})]}),S.jsx("div",{className:"flex justify-center gap-4 pt-2",children:_V.map(m=>{const b=e===m.id,k=b?"md-filled-button":"md-outlined-button";return S.jsx(k,{onClick:()=>!b&&r(m.id),children:m.label},m.id)})})]})},bV=({onSelect:t})=>{const[e,r]=W.useState(""),[n,i]=W.useState("");return S.jsxs("div",{className:"w-full max-w-sm space-y-6 animate-in fade-in slide-in-from-bottom-4",children:[S.jsxs("div",{className:"text-center space-y-2",children:[S.jsx("h2",{className:"text-2xl font-bold text-white",children:"Identification"}),S.jsx("p",{className:"text-gray-500",children:"Name and Rank, soldier."})]}),S.jsx("md-filled-text-field",{label:"Display Name (e.g. 'Angry Steve')",value:n,onInput:o=>i(o.target.value),required:!0}),S.jsx("div",{className:"bg-[#1E1E1E] rounded-xl overflow-hidden border border-gray-800 max-h-60 overflow-y-auto",children:yV.map(o=>S.jsxs("div",{onClick:()=>r(o),className:`p-4 flex items-center justify-between cursor-pointer border-b border-gray-800 last:border-0 hover:bg-white/5 ${e===o?"bg-white/10":""}`,children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("md-icon",{children:o==="Bartender"?"local_bar":"person"}),S.jsx("span",{className:"font-medium text-lg",children:o})]}),S.jsx("md-radio",{checked:e===o,"touch-target":"wrapper"})]},o))}),S.jsx("md-filled-button",{disabled:!e||!n||void 0,onClick:()=>t(e,n),children:"Clock In"})]})};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const fT=Symbol("dispatchHooks");function EV(t,e){const r=t[fT];if(!r)throw new Error(`'${t.type}' event needs setupDispatchHooks().`);r.addEventListener("after",e)}const Uw=new WeakMap;function xV(t,...e){let r=Uw.get(t);r||(r=new Set,Uw.set(t,r));for(const n of e){if(r.has(n))continue;let i=!1;t.addEventListener(n,o=>{if(i)return;o.stopImmediatePropagation();const s=Reflect.construct(o.constructor,[o.type,o]),l=new EventTarget;s[fT]=l,i=!0;const c=t.dispatchEvent(s);i=!1,c||o.preventDefault(),l.dispatchEvent(new Event("after"))},{capture:!0}),r.add(n)}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class IV extends Mg{computeValidity(e){return this.checkboxControl||(this.checkboxControl=document.createElement("input"),this.checkboxControl.type="checkbox"),this.checkboxControl.checked=e.checked,this.checkboxControl.required=e.required,{validity:this.checkboxControl.validity,validationMessage:this.checkboxControl.validationMessage}}equals(e,r){return e.checked===r.checked&&e.required===r.required}copy({checked:e,required:r}){return{checked:e,required:r}}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const TV=Lg(Vg(cl(ke)));class dn extends TV{constructor(){super(),this.selected=!1,this.icons=!1,this.showOnlySelectedIcon=!1,this.required=!1,this.value="on",this.addEventListener("click",e=>{!Og(e)||!this.input||(this.focus(),iT(this.input))}),xV(this,"keydown"),this.addEventListener("keydown",e=>{EV(e,()=>{e.defaultPrevented||e.key!=="Enter"||this.disabled||!this.input||this.input.click()})})}render(){return Y`
      <div class="switch ${Gt(this.getRenderClasses())}">
        <input
          id="switch"
          class="touch"
          type="checkbox"
          role="switch"
          aria-label=${this.ariaLabel||q}
          ?checked=${this.selected}
          ?disabled=${this.disabled}
          ?required=${this.required}
          @input=${this.handleInput}
          @change=${this.handleChange} />

        <md-focus-ring part="focus-ring" for="switch"></md-focus-ring>
        <span class="track"> ${this.renderHandle()} </span>
      </div>
    `}getRenderClasses(){return{selected:this.selected,unselected:!this.selected,disabled:this.disabled}}renderHandle(){const e={"with-icon":this.showOnlySelectedIcon?this.selected:this.icons};return Y`
      ${this.renderTouchTarget()}
      <span class="handle-container">
        <md-ripple for="switch" ?disabled="${this.disabled}"></md-ripple>
        <span class="handle ${Gt(e)}">
          ${this.shouldShowIcons()?this.renderIcons():Y``}
        </span>
      </span>
    `}renderIcons(){return Y`
      <div class="icons">
        ${this.renderOnIcon()}
        ${this.showOnlySelectedIcon?Y``:this.renderOffIcon()}
      </div>
    `}renderOnIcon(){return Y`
      <slot class="icon icon--on" name="on-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z" />
        </svg>
      </slot>
    `}renderOffIcon(){return Y`
      <slot class="icon icon--off" name="off-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z" />
        </svg>
      </slot>
    `}renderTouchTarget(){return Y`<span class="touch"></span>`}shouldShowIcons(){return this.icons||this.showOnlySelectedIcon}handleInput(e){const r=e.target;this.selected=r.checked}handleChange(e){hd(this,e)}[Co](){return this.selected?this.value:null}[Eu](){return String(this.selected)}formResetCallback(){this.selected=this.hasAttribute("selected")}formStateRestoreCallback(e){this.selected=e==="true"}[za](){return new IV(()=>({checked:this.selected,required:this.required}))}[Ba](){return this.input}}Zn(dn);dn.shadowRootOptions={mode:"open",delegatesFocus:!0};P([F({type:Boolean})],dn.prototype,"selected",void 0);P([F({type:Boolean})],dn.prototype,"icons",void 0);P([F({type:Boolean,attribute:"show-only-selected-icon"})],dn.prototype,"showOnlySelectedIcon",void 0);P([F({type:Boolean})],dn.prototype,"required",void 0);P([F()],dn.prototype,"value",void 0);P([$e("input")],dn.prototype,"input",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const AV=pe`@layer styles, hcm;@layer styles{:host{display:inline-flex;outline:none;vertical-align:top;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-switch-track-height, 32px))/2) 0px}md-focus-ring{--md-focus-ring-shape-start-start: var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-start-end: var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-end: var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-start: var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}.switch{align-items:center;display:inline-flex;flex-shrink:0;position:relative;width:var(--md-switch-track-width, 52px);height:var(--md-switch-track-height, 32px);border-start-start-radius:var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}input{appearance:none;height:48px;outline:none;margin:0;position:absolute;width:100%;z-index:1;cursor:inherit}:host([touch-target=none]) input{display:none}}@layer styles{.track{position:absolute;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;display:flex;justify-content:center;align-items:center}.track::before{content:"";display:flex;position:absolute;height:100%;width:100%;border-radius:inherit;box-sizing:border-box;transition-property:opacity,background-color;transition-timing-function:linear;transition-duration:67ms}.disabled .track{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.disabled .track::before,.disabled .track::after{transition:none;opacity:var(--md-switch-disabled-track-opacity, 0.12)}.disabled .track::before{background-clip:content-box}.selected .track::before{background-color:var(--md-switch-selected-track-color, var(--md-sys-color-primary, #6750a4))}.selected:hover .track::before{background-color:var(--md-switch-selected-hover-track-color, var(--md-sys-color-primary, #6750a4))}.selected:focus-within .track::before{background-color:var(--md-switch-selected-focus-track-color, var(--md-sys-color-primary, #6750a4))}.selected:active .track::before{background-color:var(--md-switch-selected-pressed-track-color, var(--md-sys-color-primary, #6750a4))}.selected.disabled .track{background-clip:border-box}.selected.disabled .track::before{background-color:var(--md-switch-disabled-selected-track-color, var(--md-sys-color-on-surface, #1d1b20))}.unselected .track::before{background-color:var(--md-switch-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-track-outline-color, var(--md-sys-color-outline, #79747e));border-style:solid;border-width:var(--md-switch-track-outline-width, 2px)}.unselected:hover .track::before{background-color:var(--md-switch-hover-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-hover-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:focus-visible .track::before{background-color:var(--md-switch-focus-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-focus-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:active .track::before{background-color:var(--md-switch-pressed-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-pressed-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected.disabled .track::before{background-color:var(--md-switch-disabled-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-disabled-track-outline-color, var(--md-sys-color-on-surface, #1d1b20))}}@layer hcm{@media(forced-colors: active){.selected .track::before{background:ButtonText;border-color:ButtonText}.disabled .track::before{border-color:GrayText;opacity:1}.disabled.selected .track::before{background:GrayText}}}@layer styles{.handle-container{display:flex;place-content:center;place-items:center;position:relative;transition:margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)}.selected .handle-container{margin-inline-start:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.unselected .handle-container{margin-inline-end:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.disabled .handle-container{transition:none}.handle{border-start-start-radius:var(--md-switch-handle-shape-start-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-handle-shape-start-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-handle-shape-end-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-handle-shape-end-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));height:var(--md-switch-handle-height, 16px);width:var(--md-switch-handle-width, 16px);transform-origin:center;transition-property:height,width;transition-duration:250ms,250ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1),cubic-bezier(0.2, 0, 0, 1);z-index:0}.handle::before{content:"";display:flex;inset:0;position:absolute;border-radius:inherit;box-sizing:border-box;transition:background-color 67ms linear}.disabled .handle,.disabled .handle::before{transition:none}.selected .handle{height:var(--md-switch-selected-handle-height, 24px);width:var(--md-switch-selected-handle-width, 24px)}.handle.with-icon{height:var(--md-switch-with-icon-handle-height, 24px);width:var(--md-switch-with-icon-handle-width, 24px)}.selected:not(.disabled):active .handle,.unselected:not(.disabled):active .handle{height:var(--md-switch-pressed-handle-height, 28px);width:var(--md-switch-pressed-handle-width, 28px);transition-timing-function:linear;transition-duration:100ms}.selected .handle::before{background-color:var(--md-switch-selected-handle-color, var(--md-sys-color-on-primary, #fff))}.selected:hover .handle::before{background-color:var(--md-switch-selected-hover-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:focus-within .handle::before{background-color:var(--md-switch-selected-focus-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:active .handle::before{background-color:var(--md-switch-selected-pressed-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected.disabled .handle::before{background-color:var(--md-switch-disabled-selected-handle-color, var(--md-sys-color-surface, #fef7ff));opacity:var(--md-switch-disabled-selected-handle-opacity, 1)}.unselected .handle::before{background-color:var(--md-switch-handle-color, var(--md-sys-color-outline, #79747e))}.unselected:hover .handle::before{background-color:var(--md-switch-hover-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:focus-within .handle::before{background-color:var(--md-switch-focus-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:active .handle::before{background-color:var(--md-switch-pressed-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected.disabled .handle::before{background-color:var(--md-switch-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-handle-opacity, 0.38)}md-ripple{border-radius:var(--md-switch-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));height:var(--md-switch-state-layer-size, 40px);inset:unset;width:var(--md-switch-state-layer-size, 40px)}.selected md-ripple{--md-ripple-hover-color: var(--md-switch-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-color: var(--md-switch-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-switch-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-selected-pressed-state-layer-opacity, 0.12)}.unselected md-ripple{--md-ripple-hover-color: var(--md-switch-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-color: var(--md-switch-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-switch-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-pressed-state-layer-opacity, 0.12)}}@layer hcm{@media(forced-colors: active){.unselected .handle::before{background:ButtonText}.disabled .handle::before{opacity:1}.disabled.unselected .handle::before{background:GrayText}}}@layer styles{.icons{position:relative;height:100%;width:100%}.icon{position:absolute;inset:0;margin:auto;display:flex;align-items:center;justify-content:center;fill:currentColor;transition:fill 67ms linear,opacity 33ms linear,transform 167ms cubic-bezier(0.2, 0, 0, 1);opacity:0}.disabled .icon{transition:none}.selected .icon--on,.unselected .icon--off{opacity:1}.unselected .handle:not(.with-icon) .icon--on{transform:rotate(-45deg)}.icon--off{width:var(--md-switch-icon-size, 16px);height:var(--md-switch-icon-size, 16px);color:var(--md-switch-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:hover .icon--off{color:var(--md-switch-hover-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:focus-within .icon--off{color:var(--md-switch-focus-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:active .icon--off{color:var(--md-switch-pressed-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected.disabled .icon--off{color:var(--md-switch-disabled-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));opacity:var(--md-switch-disabled-icon-opacity, 0.38)}.icon--on{width:var(--md-switch-selected-icon-size, 16px);height:var(--md-switch-selected-icon-size, 16px);color:var(--md-switch-selected-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:hover .icon--on{color:var(--md-switch-selected-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:focus-within .icon--on{color:var(--md-switch-selected-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:active .icon--on{color:var(--md-switch-selected-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected.disabled .icon--on{color:var(--md-switch-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-selected-icon-opacity, 0.38)}}@layer hcm{@media(forced-colors: active){.icon--off{fill:Canvas}.icon--on{fill:ButtonText}.disabled.unselected .icon--off,.disabled.selected .icon--on{opacity:1}.disabled .icon--on{fill:GrayText}}}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Tp=class extends dn{};Tp.styles=[AV];Tp=P([Be("md-switch")],Tp);const SV=({open:t,onClose:e,onSave:r,userRole:n,currentPreferences:i,allButtons:o})=>{const[s,l]=W.useState([]);W.useEffect(()=>{t&&l(i)},[t,i]);const c=(p,m)=>{l(m?b=>[...b,p]:b=>b.filter(k=>k!==p))},u=()=>{const p=Ip[n]||[];l(p)},h=()=>{r(s),e()};return S.jsxs("md-dialog",{open:t?!0:void 0,onClose:e,children:[S.jsx("div",{slot:"headline",children:"Notification Settings"}),S.jsxs("div",{slot:"content",className:"flex flex-col gap-4 min-w-[300px]",children:[S.jsxs("div",{className:"text-sm text-gray-400",children:["Enable or disable notifications for your role (",n,")."]}),S.jsx("md-list",{className:"bg-transparent max-h-[60vh] overflow-y-auto",children:o.map(p=>{const m=s.includes(p.id);return S.jsxs("md-list-item",{children:[S.jsx("div",{slot:"headline",children:p.label}),S.jsx("md-icon",{slot:"start",children:p.icon||"notifications"}),S.jsx("md-switch",{slot:"end",selected:m,onClick:()=>c(p.id,!m)})]},p.id)})})]}),S.jsxs("div",{slot:"actions",children:[S.jsx("md-text-button",{onClick:u,children:"Reset to Default"}),S.jsx("div",{className:"flex-1"}),S.jsx("md-text-button",{onClick:e,children:"Cancel"}),S.jsx("md-filled-button",{onClick:h,children:"Save"})]})]})},kV=({open:t,onClose:e,barName:r,allButtons:n,hiddenButtonIds:i,onHideButton:o})=>{const[s,l]=W.useState(null),c=n.filter(p=>!i.includes(p.id)),u=p=>{l(p)},h=()=>{s&&(o(s),l(null))};return S.jsxs(S.Fragment,{children:[S.jsxs("md-dialog",{open:t,onClose:e,style:{maxHeight:"80vh"},children:[S.jsxs("div",{slot:"headline",children:["Manage ",r]}),S.jsxs("div",{slot:"content",className:"flex flex-col gap-4 min-w-[300px]",children:[S.jsx("div",{className:"text-sm text-gray-400",children:"Manage active pager buttons. Hiding a button removes it from the main dashboard but keeps it in the database."}),S.jsx("div",{className:"border border-gray-800 rounded overflow-hidden",children:S.jsxs("md-list",{children:[c.map(p=>S.jsxs("md-list-item",{children:[S.jsx("div",{slot:"headline",children:p.label}),S.jsx("md-icon",{slot:"start",children:p.icon||"circle"}),S.jsx("md-icon-button",{slot:"end",onClick:()=>u(p.id),children:S.jsx("md-icon",{children:"close"})})]},p.id)),c.length===0&&S.jsx("div",{className:"p-4 text-center text-gray-500",children:"No active buttons."})]})})]}),S.jsx("div",{slot:"actions",children:S.jsx("md-text-button",{onClick:e,children:"Close"})})]}),S.jsxs("md-dialog",{open:!!s,onClose:()=>l(null),children:[S.jsx("div",{slot:"headline",children:"Remove Button?"}),S.jsx("div",{slot:"content",children:"Are you sure you want to remove this button from the dashboard?"}),S.jsxs("div",{slot:"actions",children:[S.jsx("md-text-button",{onClick:()=>l(null),children:"Cancel"}),S.jsx("md-filled-button",{onClick:h,class:"btn-alert",children:"Remove"})]})]})]})};function CV(){const[t,e]=W.useState(null),[r,n]=W.useState(null),[i,o]=W.useState(!1),[s,l]=jk(),c=s.get("bar")||localStorage.getItem("barId"),[u,h]=W.useState(c),[p,m]=W.useState(""),[b,k]=W.useState(null),[N,D]=W.useState(""),[E,y]=W.useState([]),[T,V]=W.useState([]),[j,z]=W.useState(Fw),[w,v]=W.useState(null),[_,x]=W.useState({}),[A,C]=W.useState([]),[I,Et]=W.useState([]),[we,Ye]=W.useState({type:"brand",open:!1,searchTerm:""}),[Ot,H]=W.useState({open:!1,currentQty:1,context:""}),[J,Z]=W.useState([]),me=W.useRef(null),[ge,be]=W.useState(!1),[cr,Xt]=W.useState(!1),[ur,Jt]=W.useState(!1);W.useEffect(()=>{const O=_R(Ns,K=>{e(K),K&&vL().then(oe=>oe&&v(oe))});return yL().then(()=>{navigator.vibrate&&navigator.vibrate([500,200,500]),new Audio("/alert.mp3").play().catch(()=>{})}),()=>O()},[]),W.useEffect(()=>{if(!t||!u)return;l({bar:u}),localStorage.setItem("barId",u);const O=It(mt,`bars/${u}/users`,t.uid),K=It(mt,`bars/${u}/tokens`,t.uid);(async()=>{w&&(await eo(K,{token:w,updated:si()}),await to(O,{status:"active",lastSeen:si()}).catch(()=>{}))})();const Ut=vh(O,jt=>{if(jt.exists()){const De=jt.data();k(De.role),D(De.displayName||"Unknown"),De.notificationPreferences?y(De.notificationPreferences):De.role&&y(Ip[De.role]||[])}else k(null)}),xe=vh(It(mt,"bars",u),jt=>{if(jt.exists()){const De=jt.data();m(De.name),De.buttons&&z([...Fw,...De.buttons]),De.beerInventory&&x(De.beerInventory),De.wells&&C(De.wells),De.hiddenButtonIds&&Et(De.hiddenButtonIds)}}),ti=vh(PO(sw(mt,"requests"),NO("barId","==",u),OO("timestamp","desc")),jt=>V(jt.docs.map(De=>({id:De.id,...De.data()}))));return()=>{Ut(),xe(),ti()}},[t,u,w,l]),W.useEffect(()=>(me.current&&clearTimeout(me.current),J.length>0&&(me.current=setTimeout(()=>{const O=J.map(K=>K.label).join(": ");hn(`${O} (Ask Me)`),Z([])},6e4)),()=>{me.current&&clearTimeout(me.current)}),[J]);const dl=async O=>{if(!t||!u)return;if(_[O]){Ye(Ut=>({...Ut,open:!1,searchTerm:""}));const oe={id:`brand_${O}`,label:O,children:[]};Z(Ut=>[...Ut,oe]);return}await eo(It(mt,"bars",u),{beerInventory:{[O]:[]}},{merge:!0}),x(oe=>({...oe,[O]:[]})),Ye(oe=>({...oe,open:!1,searchTerm:""}));const K={id:`brand_${O}`,label:O,children:[]};Z(oe=>[...oe,K])},hl=async O=>{if(!t||!u||!we.parentContext)return;const K=we.parentContext;if((_[K]||[]).includes(O)){Ye(ti=>({...ti,open:!1,searchTerm:""}));const xe={id:`type_${K}_${O}`,label:O,children:[]};Z(ti=>[...ti,xe]);return}await to(It(mt,"bars",u),{[`beerInventory.${K}`]:yh(O)}),x(xe=>({...xe,[K]:[...xe[K]||[],O]})),Ye(xe=>({...xe,open:!1,searchTerm:""}));const Ut={id:`type_${K}_${O}`,label:O,children:[]};Z(xe=>[...xe,Ut])},Hi=async O=>{if(!(!t||!u)){if(A.includes(O)){Ye(K=>({...K,open:!1,searchTerm:""})),hn(`ICE: ${O}`),Z([]);return}await to(It(mt,"bars",u),{wells:yh(O)}),C(K=>[...K,O]),Ye(K=>({...K,open:!1,searchTerm:""})),hn(`ICE: ${O}`),Z([])}},Wi=async O=>{!t||!u||(await to(It(mt,"bars",u),{hiddenButtonIds:yh(O)}),Et(K=>[...K,O]))},Ki=O=>{if(O.id==="ice")return[...A.map(oe=>({id:`well_${oe}`,label:oe})),{id:"add_well",label:"+ ADD WELL",isCustom:!0}];if(O.id==="restock_beer")return[...Object.keys(_).map(oe=>({id:`brand_${oe}`,label:oe,children:[]})),{id:"add_brand",label:"+ ADD BRAND",action:"add_brand",isCustom:!0}];if(O.id.startsWith("brand_")){const K=O.label;return[...(_[K]||[]).map(xe=>({id:`type_${K}_${xe}`,label:xe,children:[]})),{id:"add_type",label:"+ ADD TYPE",action:"add_type",isCustom:!0}]}return O.id.startsWith("type_")?[{id:"qty_6",label:"6"},{id:"qty_12",label:"12"},{id:"qty_24",label:"24"},{id:"qty_other",label:"Other",action:"custom_qty"}]:O.children||[]},Gi=O=>{if(O.id==="add_well"){const oe=`Well #${A.length+1}`;Ye({type:"well",open:!0,searchTerm:oe});return}if(O.action==="add_brand"){Ye({type:"brand",open:!0,searchTerm:""});return}if(O.action==="add_type"){const oe=J[J.length-1];Ye({type:"type",open:!0,parentContext:oe.label,searchTerm:""});return}if(O.action==="custom_qty"){H({open:!0,currentQty:1,context:J.map(oe=>oe.label).join(": ")});return}const K=Ki(O);K&&K.length>0?Z([...J,O]):(hn([...J,O].map(oe=>oe.label).join(": ")),Z([]))},as=async(O,K)=>{!t||!u||(await eo(It(mt,`bars/${u}/users`,t.uid),{role:O,displayName:K,email:t.email,status:"active",joinedAt:si(),lastSeen:si(),notificationPreferences:Ip[O]||[]},{merge:!0}),w&&await eo(It(mt,`bars/${u}/tokens`,t.uid),{token:w,updated:si()}))},ls=async()=>{!t||!u||(await MO(It(mt,`bars/${u}/tokens`,t.uid)),await to(It(mt,`bars/${u}/users`,t.uid),{status:"off_clock"}),h(null),localStorage.removeItem("barId"),be(!1))},hn=async O=>{!t||!u||(navigator.vibrate&&navigator.vibrate(100),await $O(sw(mt,"requests"),{barId:u,label:O,requesterId:t.uid,requesterName:N,requesterRole:b,status:"pending",timestamp:si(),lastNotification:si()}))},pd=async O=>{await to(It(mt,"requests",O),{status:"claimed",claimedBy:t==null?void 0:t.uid,claimerName:N})},md=async O=>{!t||!u||(y(O),await eo(It(mt,`bars/${u}/users`,t.uid),{notificationPreferences:O},{merge:!0}))},fl=async O=>{O.preventDefault();const K=new FormData(O.target);try{i?await mR(Ns,K.get("email"),K.get("password")):await gR(Ns,K.get("email"),K.get("password"))}catch(oe){n(oe.message)}},cs=async()=>{try{await UR(Ns,gL)}catch(O){n(O.message)}};if(!t)return S.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center p-6 space-y-8 bg-black",children:[S.jsx("h1",{className:"text-4xl font-bold tracking-widest text-white",children:"BARBACKER"}),r&&S.jsx("div",{className:"text-red-400 p-2 border border-red-800 rounded",children:r}),S.jsxs("form",{onSubmit:fl,className:"w-full max-w-sm space-y-4",children:[S.jsx("md-filled-text-field",{label:"Email",name:"email",type:"email",required:!0}),S.jsx("md-filled-text-field",{label:"Password",name:"password",type:"password",required:!0}),S.jsx("md-filled-button",{type:"submit",children:i?"Create Account":"Clock In"})]}),S.jsxs("div",{className:"flex gap-4 items-center",children:[S.jsx("md-text-button",{onClick:()=>o(!i),children:i?"Login":"Register"}),S.jsxs("md-outlined-button",{onClick:cs,children:[S.jsx("md-icon",{slot:"icon",children:"mail"}),"Google"]})]})]});if(!u)return S.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-black",children:[S.jsxs("div",{className:"text-center",children:[S.jsx("h2",{className:"text-2xl font-bold text-white mb-1",children:"Select Bar"}),S.jsxs("p",{className:"text-gray-500 text-sm",children:["You are ",t.email]})]}),S.jsx("md-text-button",{onClick:()=>wR(Ns),children:"Sign Out"}),S.jsx(wV,{onJoin:async O=>{O.id&&(O.status==="temporary"&&await eo(It(mt,"bars",O.id),{name:O.name,address:O.address||"",status:"temporary",type:O.type||"bar",buttons:[]},{merge:!0}),h(O.id))}})]});if(!b)return S.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-black",children:[S.jsx("md-icon-button",{onClick:()=>{h(null),localStorage.removeItem("barId")},children:S.jsx("md-icon",{children:"arrow_back"})}),S.jsx(bV,{onSelect:as})]});const pl=O=>{for(const K of j){if(O===K.label||O.startsWith(K.label))return K.id;if(K.children){for(const oe of K.children)if(O===oe.label)return K.id}}},ml=T.filter(O=>{if(O.status!=="pending")return!1;const K=pl(O.label);return K?E.includes(K):!0}),us=T.filter(O=>O.status!=="pending").slice(0,20),vl=(J.length>0?Ki(J[J.length-1]):j).filter(O=>!I.includes(O.id));return S.jsxs("div",{className:"min-h-screen pb-24 bg-black relative overflow-hidden",children:[S.jsx(kV,{open:ur,onClose:()=>Jt(!1),barName:p,allButtons:j,hiddenButtonIds:I,onHideButton:Wi}),S.jsx(SV,{open:cr,onClose:()=>Xt(!1),onSave:md,userRole:b||"",currentPreferences:E,allButtons:j}),S.jsxs("md-dialog",{open:we.open,onClose:()=>Ye(O=>({...O,open:!1})),children:[S.jsxs("div",{slot:"headline",children:[we.type==="brand"&&"Select or Add Brand",we.type==="type"&&"Select or Add Type",we.type==="well"&&"Add Well"]}),S.jsxs("div",{slot:"content",className:"flex flex-col gap-4 min-w-[300px] h-[300px]",children:[S.jsx("md-filled-text-field",{label:we.type==="well"?"Well Name":"Search...",value:we.searchTerm,onInput:O=>Ye(K=>({...K,searchTerm:O.target.value})),style:{width:"100%"}}),we.type!=="well"?S.jsx("div",{className:"flex-1 overflow-y-auto border border-gray-800 rounded p-2",children:S.jsx("md-list",{children:(()=>{const O=we.searchTerm.toLowerCase();let K=[];we.type==="brand"?K=Object.keys(_):K=Array.from(new Set(Object.values(_).flat()));const oe=K.filter(xe=>xe.toLowerCase().includes(O)),Ut=oe.some(xe=>xe.toLowerCase()===O);return S.jsxs(S.Fragment,{children:[oe.map(xe=>S.jsxs("md-list-item",{type:"button",onClick:()=>we.type==="brand"?dl(xe):hl(xe),children:[S.jsx("div",{slot:"headline",children:xe}),S.jsx("md-icon",{slot:"end",children:"arrow_forward"})]},xe)),we.searchTerm&&!Ut&&S.jsxs("md-list-item",{type:"button",onClick:()=>we.type==="brand"?dl(we.searchTerm):hl(we.searchTerm),children:[S.jsxs("div",{slot:"headline",className:"text-blue-400",children:['Create "',we.searchTerm,'"']}),S.jsx("md-icon",{slot:"end",className:"text-blue-400",children:"add_circle"})]})]})})()})}):S.jsx("div",{className:"flex justify-center p-4",children:S.jsx("md-filled-button",{onClick:()=>Hi(we.searchTerm),children:"Save & Request"})})]}),S.jsx("div",{slot:"actions",children:S.jsx("md-text-button",{onClick:()=>Ye(O=>({...O,open:!1})),children:"Cancel"})})]}),S.jsxs("md-dialog",{open:Ot.open,onClose:()=>H(O=>({...O,open:!1})),children:[S.jsx("div",{slot:"headline",children:"Select Quantity"}),S.jsxs("div",{slot:"content",className:"flex items-center justify-center gap-6 py-6",children:[S.jsx("md-filled-tonal-button",{onClick:()=>H(O=>({...O,currentQty:Math.max(1,O.currentQty-1)})),children:S.jsx("md-icon",{children:"remove"})}),S.jsx("span",{className:"text-4xl font-bold text-white",children:Ot.currentQty}),S.jsx("md-filled-tonal-button",{onClick:()=>H(O=>({...O,currentQty:O.currentQty+1})),children:S.jsx("md-icon",{children:"add"})})]}),S.jsxs("div",{slot:"actions",children:[S.jsx("md-text-button",{onClick:()=>H(O=>({...O,open:!1})),children:"Cancel"}),S.jsx("md-filled-button",{onClick:()=>{hn(`${Ot.context}: ${Ot.currentQty}`),H(O=>({...O,open:!1})),Z([])},children:"Send"})]})]}),S.jsxs("md-dialog",{open:ge,onClose:()=>be(!1),children:[S.jsx("div",{slot:"headline",children:"Abandon Ship?"}),S.jsx("div",{slot:"content",children:"Going off clock stops all notifications. The bar will be unprotected. Are you sure?"}),S.jsxs("div",{slot:"actions",children:[S.jsx("md-text-button",{onClick:()=>be(!1),children:"Stay"}),S.jsx("md-filled-button",{onClick:ls,class:"btn-alert",children:"Leave"})]})]}),S.jsxs("div",{className:"flex justify-between items-center p-4 bg-[#121212] sticky top-0 z-10 border-b border-[#333]",children:[S.jsxs("div",{className:"flex flex-col",children:[S.jsx("md-text-button",{onClick:()=>Jt(!0),style:{marginLeft:"-12px"},children:S.jsx("span",{className:"font-bold text-lg text-white tracking-wide",children:p})}),S.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-400 mt-1",children:[S.jsx("span",{className:"text-white font-bold",children:N}),S.jsx("span",{className:"bg-gray-800 px-1 rounded",children:b})]})]}),S.jsxs("div",{className:"flex gap-2",children:[S.jsx("md-icon-button",{onClick:()=>Xt(!0),title:"Notification Settings",children:S.jsx("md-icon",{className:"text-gray-400",children:"settings"})}),S.jsx("md-icon-button",{onClick:()=>be(!0),title:"Go Off Clock",children:S.jsx(vV,{className:"text-gray-500 hover:text-red-500"})})]})]}),J.length>0&&S.jsxs("div",{className:"fixed inset-0 bg-black/95 z-50 flex flex-col p-6 animate-in fade-in duration-300",children:[S.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[S.jsx("md-icon-button",{onClick:()=>Z([]),children:S.jsx("md-icon",{children:"close"})}),S.jsx("span",{className:"text-xl font-medium text-gray-200",children:J.map(O=>O.label).join(" > ")})]}),S.jsx("div",{className:"grid grid-cols-2 gap-4 mb-auto",children:vl.map(O=>S.jsx("md-filled-tonal-button",{onClick:()=>Gi(O),style:{height:"100px",fontSize:"18px"},children:O.label},O.id))}),S.jsx("div",{className:"mt-8",children:S.jsx("md-filled-button",{class:"w-full bg-gray-800 text-gray-300",onClick:()=>Z([]),children:"Cancel"})})]}),S.jsx("div",{className:"grid grid-cols-2 gap-3 p-4",children:j.map(O=>{const K=ml.some(oe=>oe.label.startsWith(O.label));return S.jsx("md-filled-tonal-button",{onClick:()=>Gi(O),class:K?"btn-alert":"",style:{height:"120px"},children:S.jsxs("div",{className:"flex flex-col items-center gap-2",children:[S.jsx("md-icon",{style:{fontSize:32},children:O.icon||"circle"}),S.jsx("span",{className:"text-lg font-bold leading-none",children:O.label}),K&&S.jsx("span",{className:"text-xs opacity-80",children:"PENDING"})]})},O.id)})}),S.jsx("div",{className:"px-4 mt-4",children:ml.map(O=>S.jsxs("div",{onClick:()=>pd(O.id),className:"mb-2 p-4 bg-[#2C1A1A] border-l-4 border-red-500 rounded-r-lg flex justify-between items-center cursor-pointer active:bg-red-900/40 transition-colors",children:[S.jsxs("div",{className:"flex flex-col",children:[S.jsx("span",{className:"font-medium text-red-100",children:O.label}),S.jsxs("span",{className:"text-xs text-red-400",children:[O.requesterName," (",O.requesterRole,")"]})]}),S.jsx("md-filled-button",{class:"btn-alert",style:{height:"32px"},children:"CLAIM"})]},O.id))}),S.jsxs("div",{className:"px-4 mt-8 pb-10",children:[S.jsx("div",{className:"text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest",children:"Shift Log"}),S.jsx("md-list",{className:"bg-transparent",children:us.map(O=>S.jsxs("md-list-item",{children:[S.jsx("div",{slot:"headline",className:"text-gray-400",children:O.label}),S.jsxs("div",{slot:"supporting-text",className:"text-xs text-gray-600",children:["Asked by ",O.requesterName," • Claimed by ",O.claimerName||"Someone"]}),S.jsx("md-icon",{slot:"start",className:"text-green-800",children:"check_circle"})]},O.id))})]})]})}eE(document.getElementById("root")).render(S.jsx(W.StrictMode,{children:S.jsx(Uk,{children:S.jsx(CV,{})})}));
