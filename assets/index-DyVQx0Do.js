function FI(t,e){for(var r=0;r<e.length;r++){const n=e[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(n,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function UI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var jw={exports:{}},_u={},zw={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var za=Symbol.for("react.element"),jI=Symbol.for("react.portal"),zI=Symbol.for("react.fragment"),BI=Symbol.for("react.strict_mode"),qI=Symbol.for("react.profiler"),HI=Symbol.for("react.provider"),WI=Symbol.for("react.context"),KI=Symbol.for("react.forward_ref"),GI=Symbol.for("react.suspense"),QI=Symbol.for("react.memo"),YI=Symbol.for("react.lazy"),Cv=Symbol.iterator;function XI(t){return t===null||typeof t!="object"?null:(t=Cv&&t[Cv]||t["@@iterator"],typeof t=="function"?t:null)}var Bw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qw=Object.assign,Hw={};function Bo(t,e,r){this.props=t,this.context=e,this.refs=Hw,this.updater=r||Bw}Bo.prototype.isReactComponent={};Bo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Bo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ww(){}Ww.prototype=Bo.prototype;function bp(t,e,r){this.props=t,this.context=e,this.refs=Hw,this.updater=r||Bw}var Ep=bp.prototype=new Ww;Ep.constructor=bp;qw(Ep,Bo.prototype);Ep.isPureReactComponent=!0;var Rv=Array.isArray,Kw=Object.prototype.hasOwnProperty,xp={current:null},Gw={key:!0,ref:!0,__self:!0,__source:!0};function Qw(t,e,r){var n,i={},o=null,s=null;if(e!=null)for(n in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Kw.call(e,n)&&!Gw.hasOwnProperty(n)&&(i[n]=e[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(n in l=t.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:za,type:t,key:o,ref:s,props:i,_owner:xp.current}}function JI(t,e){return{$$typeof:za,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Tp(t){return typeof t=="object"&&t!==null&&t.$$typeof===za}function ZI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Pv=/\/+/g;function kd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ZI(""+t.key):e.toString(36)}function ac(t,e,r,n,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case za:case jI:s=!0}}if(s)return s=t,i=i(s),t=n===""?"."+kd(s,0):n,Rv(i)?(r="",t!=null&&(r=t.replace(Pv,"$&/")+"/"),ac(i,e,r,"",function(u){return u})):i!=null&&(Tp(i)&&(i=JI(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Pv,"$&/")+"/")+t)),e.push(i)),1;if(s=0,n=n===""?".":n+":",Rv(t))for(var l=0;l<t.length;l++){o=t[l];var c=n+kd(o,l);s+=ac(o,e,r,c,i)}else if(c=XI(t),typeof c=="function")for(t=c.call(t),l=0;!(o=t.next()).done;)o=o.value,c=n+kd(o,l++),s+=ac(o,e,r,c,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Cl(t,e,r){if(t==null)return t;var n=[],i=0;return ac(t,n,"","",function(o){return e.call(r,o,i++)}),n}function eA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ct={current:null},lc={transition:null},tA={ReactCurrentDispatcher:Ct,ReactCurrentBatchConfig:lc,ReactCurrentOwner:xp};function Yw(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:Cl,forEach:function(t,e,r){Cl(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Cl(t,function(){e++}),e},toArray:function(t){return Cl(t,function(e){return e})||[]},only:function(t){if(!Tp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=Bo;ae.Fragment=zI;ae.Profiler=qI;ae.PureComponent=bp;ae.StrictMode=BI;ae.Suspense=GI;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tA;ae.act=Yw;ae.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=qw({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=xp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)Kw.call(e,c)&&!Gw.hasOwnProperty(c)&&(n[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:za,type:t.type,key:i,ref:o,props:n,_owner:s}};ae.createContext=function(t){return t={$$typeof:WI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:HI,_context:t},t.Consumer=t};ae.createElement=Qw;ae.createFactory=function(t){var e=Qw.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:KI,render:t}};ae.isValidElement=Tp;ae.lazy=function(t){return{$$typeof:YI,_payload:{_status:-1,_result:t},_init:eA}};ae.memo=function(t,e){return{$$typeof:QI,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=lc.transition;lc.transition={};try{t()}finally{lc.transition=e}};ae.unstable_act=Yw;ae.useCallback=function(t,e){return Ct.current.useCallback(t,e)};ae.useContext=function(t){return Ct.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return Ct.current.useDeferredValue(t)};ae.useEffect=function(t,e){return Ct.current.useEffect(t,e)};ae.useId=function(){return Ct.current.useId()};ae.useImperativeHandle=function(t,e,r){return Ct.current.useImperativeHandle(t,e,r)};ae.useInsertionEffect=function(t,e){return Ct.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return Ct.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return Ct.current.useMemo(t,e)};ae.useReducer=function(t,e,r){return Ct.current.useReducer(t,e,r)};ae.useRef=function(t){return Ct.current.useRef(t)};ae.useState=function(t){return Ct.current.useState(t)};ae.useSyncExternalStore=function(t,e,r){return Ct.current.useSyncExternalStore(t,e,r)};ae.useTransition=function(){return Ct.current.useTransition()};ae.version="18.3.1";zw.exports=ae;var W=zw.exports;const rA=UI(W),nA=FI({__proto__:null,default:rA},[W]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iA=W,oA=Symbol.for("react.element"),sA=Symbol.for("react.fragment"),aA=Object.prototype.hasOwnProperty,lA=iA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cA={key:!0,ref:!0,__self:!0,__source:!0};function Xw(t,e,r){var n,i={},o=null,s=null;r!==void 0&&(o=""+r),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(n in e)aA.call(e,n)&&!cA.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:oA,type:t,key:o,ref:s,props:i,_owner:lA.current}}_u.Fragment=sA;_u.jsx=Xw;_u.jsxs=Xw;jw.exports=_u;var P=jw.exports,Jw={exports:{}},Kt={},Zw={exports:{}},e0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Z){var ie=z.length;z.push(Z);e:for(;0<ie;){var _e=ie-1>>>1,ge=z[_e];if(0<i(ge,Z))z[_e]=Z,z[ie]=ge,ie=_e;else break e}}function r(z){return z.length===0?null:z[0]}function n(z){if(z.length===0)return null;var Z=z[0],ie=z.pop();if(ie!==Z){z[0]=ie;e:for(var _e=0,ge=z.length,Ce=ge>>>1;_e<Ce;){var Xt=2*(_e+1)-1,Jt=z[Xt],ur=Xt+1,Zt=z[ur];if(0>i(Jt,ie))ur<ge&&0>i(Zt,Jt)?(z[_e]=Zt,z[ur]=ie,_e=ur):(z[_e]=Jt,z[Xt]=ie,_e=Xt);else if(ur<ge&&0>i(Zt,ie))z[_e]=Zt,z[ur]=ie,_e=ur;else break e}}return Z}function i(z,Z){var ie=z.sortIndex-Z.sortIndex;return ie!==0?ie:z.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],h=1,p=null,m=3,E=!1,S=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(z){for(var Z=r(u);Z!==null;){if(Z.callback===null)n(u);else if(Z.startTime<=z)n(u),Z.sortIndex=Z.expirationTime,e(c,Z);else break;Z=r(u)}}function L(z){if(N=!1,I(z),!S)if(r(c)!==null)S=!0,Yt(j);else{var Z=r(u);Z!==null&&Ne(L,Z.startTime-z)}}function j(z,Z){S=!1,N&&(N=!1,x(v),v=-1),E=!0;var ie=m;try{for(I(Z),p=r(c);p!==null&&(!(p.expirationTime>Z)||z&&!A());){var _e=p.callback;if(typeof _e=="function"){p.callback=null,m=p.priorityLevel;var ge=_e(p.expirationTime<=Z);Z=t.unstable_now(),typeof ge=="function"?p.callback=ge:p===r(c)&&n(c),I(Z)}else n(c);p=r(c)}if(p!==null)var Ce=!0;else{var Xt=r(u);Xt!==null&&Ne(L,Xt.startTime-Z),Ce=!1}return Ce}finally{p=null,m=ie,E=!1}}var B=!1,b=null,v=-1,_=5,T=-1;function A(){return!(t.unstable_now()-T<_)}function k(){if(b!==null){var z=t.unstable_now();T=z;var Z=!0;try{Z=b(!0,z)}finally{Z?w():(B=!1,b=null)}}else B=!1}var w;if(typeof y=="function")w=function(){y(k)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,Qt=xe.port2;xe.port1.onmessage=k,w=function(){Qt.postMessage(null)}}else w=function(){O(k,0)};function Yt(z){b=z,B||(B=!0,w())}function Ne(z,Z){v=O(function(){z(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){S||E||(S=!0,Yt(j))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var Z=3;break;default:Z=m}var ie=m;m=Z;try{return z()}finally{m=ie}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ie=m;m=z;try{return Z()}finally{m=ie}},t.unstable_scheduleCallback=function(z,Z,ie){var _e=t.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?_e+ie:_e):ie=_e,z){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=ie+ge,z={id:h++,callback:Z,priorityLevel:z,startTime:ie,expirationTime:ge,sortIndex:-1},ie>_e?(z.sortIndex=ie,e(u,z),r(c)===null&&z===r(u)&&(N?(x(v),v=-1):N=!0,Ne(L,ie-_e))):(z.sortIndex=ge,e(c,z),S||E||(S=!0,Yt(j))),z},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(z){var Z=m;return function(){var ie=m;m=Z;try{return z.apply(this,arguments)}finally{m=ie}}}})(e0);Zw.exports=e0;var uA=Zw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dA=W,Ht=uA;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var t0=new Set,sa={};function $i(t,e){Ao(t,e),Ao(t+"Capture",e)}function Ao(t,e){for(sa[t]=e,t=0;t<e.length;t++)t0.add(e[t])}var Zr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rh=Object.prototype.hasOwnProperty,hA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nv={},Ov={};function fA(t){return Rh.call(Ov,t)?!0:Rh.call(Nv,t)?!1:hA.test(t)?Ov[t]=!0:(Nv[t]=!0,!1)}function pA(t,e,r,n){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function mA(t,e,r,n){if(e===null||typeof e>"u"||pA(t,e,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Rt(t,e,r,n,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){lt[t]=new Rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];lt[e]=new Rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){lt[t]=new Rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){lt[t]=new Rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){lt[t]=new Rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){lt[t]=new Rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){lt[t]=new Rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){lt[t]=new Rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){lt[t]=new Rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ip=/[\-:]([a-z])/g;function Ap(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ip,Ap);lt[e]=new Rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ip,Ap);lt[e]=new Rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ip,Ap);lt[e]=new Rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){lt[t]=new Rt(t,1,!1,t.toLowerCase(),null,!1,!1)});lt.xlinkHref=new Rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){lt[t]=new Rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sp(t,e,r,n){var i=lt.hasOwnProperty(e)?lt[e]:null;(i!==null?i.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(mA(e,r,i,n)&&(r=null),n||i===null?fA(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type===3?!1:"":r:(e=i.attributeName,n=i.attributeNamespace,r===null?t.removeAttribute(e):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?t.setAttributeNS(n,e,r):t.setAttribute(e,r))))}var cn=dA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rl=Symbol.for("react.element"),ro=Symbol.for("react.portal"),no=Symbol.for("react.fragment"),kp=Symbol.for("react.strict_mode"),Ph=Symbol.for("react.profiler"),r0=Symbol.for("react.provider"),n0=Symbol.for("react.context"),Cp=Symbol.for("react.forward_ref"),Nh=Symbol.for("react.suspense"),Oh=Symbol.for("react.suspense_list"),Rp=Symbol.for("react.memo"),_n=Symbol.for("react.lazy"),i0=Symbol.for("react.offscreen"),Dv=Symbol.iterator;function ws(t){return t===null||typeof t!="object"?null:(t=Dv&&t[Dv]||t["@@iterator"],typeof t=="function"?t:null)}var Le=Object.assign,Cd;function Os(t){if(Cd===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Cd=e&&e[1]||""}return`
`+Cd+t}var Rd=!1;function Pd(t,e){if(!t||Rd)return"";Rd=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var n=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){n=u}t.call(e.prototype)}else{try{throw Error()}catch(u){n=u}t()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=n.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=s&&0<=l);break}}}finally{Rd=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Os(t):""}function gA(t){switch(t.tag){case 5:return Os(t.type);case 16:return Os("Lazy");case 13:return Os("Suspense");case 19:return Os("SuspenseList");case 0:case 2:case 15:return t=Pd(t.type,!1),t;case 11:return t=Pd(t.type.render,!1),t;case 1:return t=Pd(t.type,!0),t;default:return""}}function Dh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case no:return"Fragment";case ro:return"Portal";case Ph:return"Profiler";case kp:return"StrictMode";case Nh:return"Suspense";case Oh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case n0:return(t.displayName||"Context")+".Consumer";case r0:return(t._context.displayName||"Context")+".Provider";case Cp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rp:return e=t.displayName||null,e!==null?e:Dh(t.type)||"Memo";case _n:e=t._payload,t=t._init;try{return Dh(t(e))}catch{}}return null}function vA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dh(e);case 8:return e===kp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function o0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yA(t){var e=o0(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pl(t){t._valueTracker||(t._valueTracker=yA(t))}function s0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),n="";return t&&(n=o0(t)?t.checked?"true":"false":t.value),t=n,t!==r?(e.setValue(t),!0):!1}function Rc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lh(t,e){var r=e.checked;return Le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Lv(t,e){var r=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;r=zn(e.value!=null?e.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function a0(t,e){e=e.checked,e!=null&&Sp(t,"checked",e,!1)}function Vh(t,e){a0(t,e);var r=zn(e.value),n=e.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mh(t,e.type,r):e.hasOwnProperty("defaultValue")&&Mh(t,e.type,zn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vv(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function Mh(t,e,r){(e!=="number"||Rc(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Ds=Array.isArray;function mo(t,e,r,n){if(t=t.options,e){e={};for(var i=0;i<r.length;i++)e["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=e.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&n&&(t[r].defaultSelected=!0)}else{for(r=""+zn(r),e=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function $h(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Mv(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(U(92));if(Ds(r)){if(1<r.length)throw Error(U(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:zn(r)}}function l0(t,e){var r=zn(e.value),n=zn(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function $v(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function c0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?c0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Nl,u0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,n,i){MSApp.execUnsafeLocalFunction(function(){return t(e,r,n,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Nl=Nl||document.createElement("div"),Nl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Nl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function aa(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_A=["Webkit","ms","Moz","O"];Object.keys(Bs).forEach(function(t){_A.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Bs[e]=Bs[t]})});function d0(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Bs.hasOwnProperty(t)&&Bs[t]?(""+e).trim():e+"px"}function h0(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=d0(r,e[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,i):t[r]=i}}var wA=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uh(t,e){if(e){if(wA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function jh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zh=null;function Pp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bh=null,go=null,vo=null;function Fv(t){if(t=Ha(t)){if(typeof Bh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Tu(e),Bh(t.stateNode,t.type,e))}}function f0(t){go?vo?vo.push(t):vo=[t]:go=t}function p0(){if(go){var t=go,e=vo;if(vo=go=null,Fv(t),e)for(t=0;t<e.length;t++)Fv(e[t])}}function m0(t,e){return t(e)}function g0(){}var Nd=!1;function v0(t,e,r){if(Nd)return t(e,r);Nd=!0;try{return m0(t,e,r)}finally{Nd=!1,(go!==null||vo!==null)&&(g0(),p0())}}function la(t,e){var r=t.stateNode;if(r===null)return null;var n=Tu(r);if(n===null)return null;r=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(U(231,e,typeof r));return r}var qh=!1;if(Zr)try{var bs={};Object.defineProperty(bs,"passive",{get:function(){qh=!0}}),window.addEventListener("test",bs,bs),window.removeEventListener("test",bs,bs)}catch{qh=!1}function bA(t,e,r,n,i,o,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(r,u)}catch(h){this.onError(h)}}var qs=!1,Pc=null,Nc=!1,Hh=null,EA={onError:function(t){qs=!0,Pc=t}};function xA(t,e,r,n,i,o,s,l,c){qs=!1,Pc=null,bA.apply(EA,arguments)}function TA(t,e,r,n,i,o,s,l,c){if(xA.apply(this,arguments),qs){if(qs){var u=Pc;qs=!1,Pc=null}else throw Error(U(198));Nc||(Nc=!0,Hh=u)}}function Fi(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function y0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Uv(t){if(Fi(t)!==t)throw Error(U(188))}function IA(t){var e=t.alternate;if(!e){if(e=Fi(t),e===null)throw Error(U(188));return e!==t?null:t}for(var r=t,n=e;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return Uv(i),t;if(o===n)return Uv(i),e;o=o.sibling}throw Error(U(188))}if(r.return!==n.return)r=i,n=o;else{for(var s=!1,l=i.child;l;){if(l===r){s=!0,r=i,n=o;break}if(l===n){s=!0,n=i,r=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===r){s=!0,r=o,n=i;break}if(l===n){s=!0,n=o,r=i;break}l=l.sibling}if(!s)throw Error(U(189))}}if(r.alternate!==n)throw Error(U(190))}if(r.tag!==3)throw Error(U(188));return r.stateNode.current===r?t:e}function _0(t){return t=IA(t),t!==null?w0(t):null}function w0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=w0(t);if(e!==null)return e;t=t.sibling}return null}var b0=Ht.unstable_scheduleCallback,jv=Ht.unstable_cancelCallback,AA=Ht.unstable_shouldYield,SA=Ht.unstable_requestPaint,qe=Ht.unstable_now,kA=Ht.unstable_getCurrentPriorityLevel,Np=Ht.unstable_ImmediatePriority,E0=Ht.unstable_UserBlockingPriority,Oc=Ht.unstable_NormalPriority,CA=Ht.unstable_LowPriority,x0=Ht.unstable_IdlePriority,wu=null,Sr=null;function RA(t){if(Sr&&typeof Sr.onCommitFiberRoot=="function")try{Sr.onCommitFiberRoot(wu,t,void 0,(t.current.flags&128)===128)}catch{}}var vr=Math.clz32?Math.clz32:OA,PA=Math.log,NA=Math.LN2;function OA(t){return t>>>=0,t===0?32:31-(PA(t)/NA|0)|0}var Ol=64,Dl=4194304;function Ls(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Dc(t,e){var r=t.pendingLanes;if(r===0)return 0;var n=0,i=t.suspendedLanes,o=t.pingedLanes,s=r&268435455;if(s!==0){var l=s&~i;l!==0?n=Ls(l):(o&=s,o!==0&&(n=Ls(o)))}else s=r&~i,s!==0?n=Ls(s):o!==0&&(n=Ls(o));if(n===0)return 0;if(e!==0&&e!==n&&!(e&i)&&(i=n&-n,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(n&4&&(n|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)r=31-vr(e),i=1<<r,n|=t[r],e&=~i;return n}function DA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function LA(t,e){for(var r=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-vr(o),l=1<<s,c=i[s];c===-1?(!(l&r)||l&n)&&(i[s]=DA(l,e)):c<=e&&(t.expiredLanes|=l),o&=~l}}function Wh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function T0(){var t=Ol;return Ol<<=1,!(Ol&4194240)&&(Ol=64),t}function Od(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Ba(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vr(e),t[e]=r}function VA(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<r;){var i=31-vr(r),o=1<<i;e[i]=0,n[i]=-1,t[i]=-1,r&=~o}}function Op(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var n=31-vr(r),i=1<<n;i&e|t[n]&e&&(t[n]|=e),r&=~i}}var ve=0;function I0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var A0,Dp,S0,k0,C0,Kh=!1,Ll=[],Pn=null,Nn=null,On=null,ca=new Map,ua=new Map,En=[],MA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zv(t,e){switch(t){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(e.pointerId)}}function Es(t,e,r,n,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Ha(e),e!==null&&Dp(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function $A(t,e,r,n,i){switch(e){case"focusin":return Pn=Es(Pn,t,e,r,n,i),!0;case"dragenter":return Nn=Es(Nn,t,e,r,n,i),!0;case"mouseover":return On=Es(On,t,e,r,n,i),!0;case"pointerover":var o=i.pointerId;return ca.set(o,Es(ca.get(o)||null,t,e,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,ua.set(o,Es(ua.get(o)||null,t,e,r,n,i)),!0}return!1}function R0(t){var e=di(t.target);if(e!==null){var r=Fi(e);if(r!==null){if(e=r.tag,e===13){if(e=y0(r),e!==null){t.blockedOn=e,C0(t.priority,function(){S0(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Gh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.constructor(r.type,r);zh=n,r.target.dispatchEvent(n),zh=null}else return e=Ha(r),e!==null&&Dp(e),t.blockedOn=r,!1;e.shift()}return!0}function Bv(t,e,r){cc(t)&&r.delete(e)}function FA(){Kh=!1,Pn!==null&&cc(Pn)&&(Pn=null),Nn!==null&&cc(Nn)&&(Nn=null),On!==null&&cc(On)&&(On=null),ca.forEach(Bv),ua.forEach(Bv)}function xs(t,e){t.blockedOn===e&&(t.blockedOn=null,Kh||(Kh=!0,Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority,FA)))}function da(t){function e(i){return xs(i,t)}if(0<Ll.length){xs(Ll[0],t);for(var r=1;r<Ll.length;r++){var n=Ll[r];n.blockedOn===t&&(n.blockedOn=null)}}for(Pn!==null&&xs(Pn,t),Nn!==null&&xs(Nn,t),On!==null&&xs(On,t),ca.forEach(e),ua.forEach(e),r=0;r<En.length;r++)n=En[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<En.length&&(r=En[0],r.blockedOn===null);)R0(r),r.blockedOn===null&&En.shift()}var yo=cn.ReactCurrentBatchConfig,Lc=!0;function UA(t,e,r,n){var i=ve,o=yo.transition;yo.transition=null;try{ve=1,Lp(t,e,r,n)}finally{ve=i,yo.transition=o}}function jA(t,e,r,n){var i=ve,o=yo.transition;yo.transition=null;try{ve=4,Lp(t,e,r,n)}finally{ve=i,yo.transition=o}}function Lp(t,e,r,n){if(Lc){var i=Gh(t,e,r,n);if(i===null)Bd(t,e,n,Vc,r),zv(t,n);else if($A(i,t,e,r,n))n.stopPropagation();else if(zv(t,n),e&4&&-1<MA.indexOf(t)){for(;i!==null;){var o=Ha(i);if(o!==null&&A0(o),o=Gh(t,e,r,n),o===null&&Bd(t,e,n,Vc,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else Bd(t,e,n,null,r)}}var Vc=null;function Gh(t,e,r,n){if(Vc=null,t=Pp(n),t=di(t),t!==null)if(e=Fi(t),e===null)t=null;else if(r=e.tag,r===13){if(t=y0(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Vc=t,null}function P0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kA()){case Np:return 1;case E0:return 4;case Oc:case CA:return 16;case x0:return 536870912;default:return 16}default:return 16}}var kn=null,Vp=null,uc=null;function N0(){if(uc)return uc;var t,e=Vp,r=e.length,n,i="value"in kn?kn.value:kn.textContent,o=i.length;for(t=0;t<r&&e[t]===i[t];t++);var s=r-t;for(n=1;n<=s&&e[r-n]===i[o-n];n++);return uc=i.slice(t,1<n?1-n:void 0)}function dc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Vl(){return!0}function qv(){return!1}function Gt(t){function e(r,n,i,o,s){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(r=t[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Vl:qv,this.isPropagationStopped=qv,this}return Le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),e}var qo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mp=Gt(qo),qa=Le({},qo,{view:0,detail:0}),zA=Gt(qa),Dd,Ld,Ts,bu=Le({},qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$p,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ts&&(Ts&&t.type==="mousemove"?(Dd=t.screenX-Ts.screenX,Ld=t.screenY-Ts.screenY):Ld=Dd=0,Ts=t),Dd)},movementY:function(t){return"movementY"in t?t.movementY:Ld}}),Hv=Gt(bu),BA=Le({},bu,{dataTransfer:0}),qA=Gt(BA),HA=Le({},qa,{relatedTarget:0}),Vd=Gt(HA),WA=Le({},qo,{animationName:0,elapsedTime:0,pseudoElement:0}),KA=Gt(WA),GA=Le({},qo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),QA=Gt(GA),YA=Le({},qo,{data:0}),Wv=Gt(YA),XA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},JA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ZA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ZA[t])?!!e[t]:!1}function $p(){return eS}var tS=Le({},qa,{key:function(t){if(t.key){var e=XA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?JA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$p,charCode:function(t){return t.type==="keypress"?dc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rS=Gt(tS),nS=Le({},bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kv=Gt(nS),iS=Le({},qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$p}),oS=Gt(iS),sS=Le({},qo,{propertyName:0,elapsedTime:0,pseudoElement:0}),aS=Gt(sS),lS=Le({},bu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cS=Gt(lS),uS=[9,13,27,32],Fp=Zr&&"CompositionEvent"in window,Hs=null;Zr&&"documentMode"in document&&(Hs=document.documentMode);var dS=Zr&&"TextEvent"in window&&!Hs,O0=Zr&&(!Fp||Hs&&8<Hs&&11>=Hs),Gv=" ",Qv=!1;function D0(t,e){switch(t){case"keyup":return uS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function L0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var io=!1;function hS(t,e){switch(t){case"compositionend":return L0(e);case"keypress":return e.which!==32?null:(Qv=!0,Gv);case"textInput":return t=e.data,t===Gv&&Qv?null:t;default:return null}}function fS(t,e){if(io)return t==="compositionend"||!Fp&&D0(t,e)?(t=N0(),uc=Vp=kn=null,io=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return O0&&e.locale!=="ko"?null:e.data;default:return null}}var pS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!pS[t.type]:e==="textarea"}function V0(t,e,r,n){f0(n),e=Mc(e,"onChange"),0<e.length&&(r=new Mp("onChange","change",null,r,n),t.push({event:r,listeners:e}))}var Ws=null,ha=null;function mS(t){K0(t,0)}function Eu(t){var e=ao(t);if(s0(e))return t}function gS(t,e){if(t==="change")return e}var M0=!1;if(Zr){var Md;if(Zr){var $d="oninput"in document;if(!$d){var Xv=document.createElement("div");Xv.setAttribute("oninput","return;"),$d=typeof Xv.oninput=="function"}Md=$d}else Md=!1;M0=Md&&(!document.documentMode||9<document.documentMode)}function Jv(){Ws&&(Ws.detachEvent("onpropertychange",$0),ha=Ws=null)}function $0(t){if(t.propertyName==="value"&&Eu(ha)){var e=[];V0(e,ha,t,Pp(t)),v0(mS,e)}}function vS(t,e,r){t==="focusin"?(Jv(),Ws=e,ha=r,Ws.attachEvent("onpropertychange",$0)):t==="focusout"&&Jv()}function yS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Eu(ha)}function _S(t,e){if(t==="click")return Eu(e)}function wS(t,e){if(t==="input"||t==="change")return Eu(e)}function bS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wr=typeof Object.is=="function"?Object.is:bS;function fa(t,e){if(wr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Rh.call(e,i)||!wr(t[i],e[i]))return!1}return!0}function Zv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ey(t,e){var r=Zv(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=e&&n>=e)return{node:r,offset:e-t};t=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Zv(r)}}function F0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?F0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function U0(){for(var t=window,e=Rc();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Rc(t.document)}return e}function Up(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ES(t){var e=U0(),r=t.focusedElem,n=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&F0(r.ownerDocument.documentElement,r)){if(n!==null&&Up(r)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!t.extend&&o>n&&(i=n,n=o,o=i),i=ey(r,o);var s=ey(r,n);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>n?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xS=Zr&&"documentMode"in document&&11>=document.documentMode,oo=null,Qh=null,Ks=null,Yh=!1;function ty(t,e,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Yh||oo==null||oo!==Rc(n)||(n=oo,"selectionStart"in n&&Up(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ks&&fa(Ks,n)||(Ks=n,n=Mc(Qh,"onSelect"),0<n.length&&(e=new Mp("onSelect","select",null,e,r),t.push({event:e,listeners:n}),e.target=oo)))}function Ml(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var so={animationend:Ml("Animation","AnimationEnd"),animationiteration:Ml("Animation","AnimationIteration"),animationstart:Ml("Animation","AnimationStart"),transitionend:Ml("Transition","TransitionEnd")},Fd={},j0={};Zr&&(j0=document.createElement("div").style,"AnimationEvent"in window||(delete so.animationend.animation,delete so.animationiteration.animation,delete so.animationstart.animation),"TransitionEvent"in window||delete so.transitionend.transition);function xu(t){if(Fd[t])return Fd[t];if(!so[t])return t;var e=so[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in j0)return Fd[t]=e[r];return t}var z0=xu("animationend"),B0=xu("animationiteration"),q0=xu("animationstart"),H0=xu("transitionend"),W0=new Map,ry="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(t,e){W0.set(t,e),$i(e,[t])}for(var Ud=0;Ud<ry.length;Ud++){var jd=ry[Ud],TS=jd.toLowerCase(),IS=jd[0].toUpperCase()+jd.slice(1);Kn(TS,"on"+IS)}Kn(z0,"onAnimationEnd");Kn(B0,"onAnimationIteration");Kn(q0,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(H0,"onTransitionEnd");Ao("onMouseEnter",["mouseout","mouseover"]);Ao("onMouseLeave",["mouseout","mouseover"]);Ao("onPointerEnter",["pointerout","pointerover"]);Ao("onPointerLeave",["pointerout","pointerover"]);$i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$i("onBeforeInput",["compositionend","keypress","textInput","paste"]);$i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vs));function ny(t,e,r){var n=t.type||"unknown-event";t.currentTarget=r,TA(n,e,void 0,t),t.currentTarget=null}function K0(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],i=n.event;n=n.listeners;e:{var o=void 0;if(e)for(var s=n.length-1;0<=s;s--){var l=n[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;ny(i,l,u),o=c}else for(s=0;s<n.length;s++){if(l=n[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;ny(i,l,u),o=c}}}if(Nc)throw t=Hh,Nc=!1,Hh=null,t}function Ie(t,e){var r=e[tf];r===void 0&&(r=e[tf]=new Set);var n=t+"__bubble";r.has(n)||(G0(e,t,2,!1),r.add(n))}function zd(t,e,r){var n=0;e&&(n|=4),G0(r,t,n,e)}var $l="_reactListening"+Math.random().toString(36).slice(2);function pa(t){if(!t[$l]){t[$l]=!0,t0.forEach(function(r){r!=="selectionchange"&&(AS.has(r)||zd(r,!1,t),zd(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$l]||(e[$l]=!0,zd("selectionchange",!1,e))}}function G0(t,e,r,n){switch(P0(e)){case 1:var i=UA;break;case 4:i=jA;break;default:i=Lp}r=i.bind(null,e,r,t),i=void 0,!qh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,r,{capture:!0,passive:i}):t.addEventListener(e,r,!0):i!==void 0?t.addEventListener(e,r,{passive:i}):t.addEventListener(e,r,!1)}function Bd(t,e,r,n,i){var o=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=n.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=di(l),s===null)return;if(c=s.tag,c===5||c===6){n=o=s;continue e}l=l.parentNode}}n=n.return}v0(function(){var u=o,h=Pp(r),p=[];e:{var m=W0.get(t);if(m!==void 0){var E=Mp,S=t;switch(t){case"keypress":if(dc(r)===0)break e;case"keydown":case"keyup":E=rS;break;case"focusin":S="focus",E=Vd;break;case"focusout":S="blur",E=Vd;break;case"beforeblur":case"afterblur":E=Vd;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Hv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=qA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=oS;break;case z0:case B0:case q0:E=KA;break;case H0:E=aS;break;case"scroll":E=zA;break;case"wheel":E=cS;break;case"copy":case"cut":case"paste":E=QA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Kv}var N=(e&4)!==0,O=!N&&t==="scroll",x=N?m!==null?m+"Capture":null:m;N=[];for(var y=u,I;y!==null;){I=y;var L=I.stateNode;if(I.tag===5&&L!==null&&(I=L,x!==null&&(L=la(y,x),L!=null&&N.push(ma(y,L,I)))),O)break;y=y.return}0<N.length&&(m=new E(m,S,null,r,h),p.push({event:m,listeners:N}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",m&&r!==zh&&(S=r.relatedTarget||r.fromElement)&&(di(S)||S[en]))break e;if((E||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,E?(S=r.relatedTarget||r.toElement,E=u,S=S?di(S):null,S!==null&&(O=Fi(S),S!==O||S.tag!==5&&S.tag!==6)&&(S=null)):(E=null,S=u),E!==S)){if(N=Hv,L="onMouseLeave",x="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(N=Kv,L="onPointerLeave",x="onPointerEnter",y="pointer"),O=E==null?m:ao(E),I=S==null?m:ao(S),m=new N(L,y+"leave",E,r,h),m.target=O,m.relatedTarget=I,L=null,di(h)===u&&(N=new N(x,y+"enter",S,r,h),N.target=I,N.relatedTarget=O,L=N),O=L,E&&S)t:{for(N=E,x=S,y=0,I=N;I;I=Yi(I))y++;for(I=0,L=x;L;L=Yi(L))I++;for(;0<y-I;)N=Yi(N),y--;for(;0<I-y;)x=Yi(x),I--;for(;y--;){if(N===x||x!==null&&N===x.alternate)break t;N=Yi(N),x=Yi(x)}N=null}else N=null;E!==null&&iy(p,m,E,N,!1),S!==null&&O!==null&&iy(p,O,S,N,!0)}}e:{if(m=u?ao(u):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var j=gS;else if(Yv(m))if(M0)j=wS;else{j=yS;var B=vS}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=_S);if(j&&(j=j(t,u))){V0(p,j,r,h);break e}B&&B(t,m,u),t==="focusout"&&(B=m._wrapperState)&&B.controlled&&m.type==="number"&&Mh(m,"number",m.value)}switch(B=u?ao(u):window,t){case"focusin":(Yv(B)||B.contentEditable==="true")&&(oo=B,Qh=u,Ks=null);break;case"focusout":Ks=Qh=oo=null;break;case"mousedown":Yh=!0;break;case"contextmenu":case"mouseup":case"dragend":Yh=!1,ty(p,r,h);break;case"selectionchange":if(xS)break;case"keydown":case"keyup":ty(p,r,h)}var b;if(Fp)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else io?D0(t,r)&&(v="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(v="onCompositionStart");v&&(O0&&r.locale!=="ko"&&(io||v!=="onCompositionStart"?v==="onCompositionEnd"&&io&&(b=N0()):(kn=h,Vp="value"in kn?kn.value:kn.textContent,io=!0)),B=Mc(u,v),0<B.length&&(v=new Wv(v,t,null,r,h),p.push({event:v,listeners:B}),b?v.data=b:(b=L0(r),b!==null&&(v.data=b)))),(b=dS?hS(t,r):fS(t,r))&&(u=Mc(u,"onBeforeInput"),0<u.length&&(h=new Wv("onBeforeInput","beforeinput",null,r,h),p.push({event:h,listeners:u}),h.data=b))}K0(p,e)})}function ma(t,e,r){return{instance:t,listener:e,currentTarget:r}}function Mc(t,e){for(var r=e+"Capture",n=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=la(t,r),o!=null&&n.unshift(ma(t,o,i)),o=la(t,e),o!=null&&n.push(ma(t,o,i))),t=t.return}return n}function Yi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function iy(t,e,r,n,i){for(var o=e._reactName,s=[];r!==null&&r!==n;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&u!==null&&(l=u,i?(c=la(r,o),c!=null&&s.unshift(ma(r,c,l))):i||(c=la(r,o),c!=null&&s.push(ma(r,c,l)))),r=r.return}s.length!==0&&t.push({event:e,listeners:s})}var SS=/\r\n?/g,kS=/\u0000|\uFFFD/g;function oy(t){return(typeof t=="string"?t:""+t).replace(SS,`
`).replace(kS,"")}function Fl(t,e,r){if(e=oy(e),oy(t)!==e&&r)throw Error(U(425))}function $c(){}var Xh=null,Jh=null;function Zh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ef=typeof setTimeout=="function"?setTimeout:void 0,CS=typeof clearTimeout=="function"?clearTimeout:void 0,sy=typeof Promise=="function"?Promise:void 0,RS=typeof queueMicrotask=="function"?queueMicrotask:typeof sy<"u"?function(t){return sy.resolve(null).then(t).catch(PS)}:ef;function PS(t){setTimeout(function(){throw t})}function qd(t,e){var r=e,n=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){t.removeChild(i),da(e);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);da(e)}function Dn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ay(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var Ho=Math.random().toString(36).slice(2),Ar="__reactFiber$"+Ho,ga="__reactProps$"+Ho,en="__reactContainer$"+Ho,tf="__reactEvents$"+Ho,NS="__reactListeners$"+Ho,OS="__reactHandles$"+Ho;function di(t){var e=t[Ar];if(e)return e;for(var r=t.parentNode;r;){if(e=r[en]||r[Ar]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=ay(t);t!==null;){if(r=t[Ar])return r;t=ay(t)}return e}t=r,r=t.parentNode}return null}function Ha(t){return t=t[Ar]||t[en],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ao(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Tu(t){return t[ga]||null}var rf=[],lo=-1;function Gn(t){return{current:t}}function Se(t){0>lo||(t.current=rf[lo],rf[lo]=null,lo--)}function Ee(t,e){lo++,rf[lo]=t.current,t.current=e}var Bn={},wt=Gn(Bn),Mt=Gn(!1),Ii=Bn;function So(t,e){var r=t.type.contextTypes;if(!r)return Bn;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=e[o];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $t(t){return t=t.childContextTypes,t!=null}function Fc(){Se(Mt),Se(wt)}function ly(t,e,r){if(wt.current!==Bn)throw Error(U(168));Ee(wt,e),Ee(Mt,r)}function Q0(t,e,r){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in e))throw Error(U(108,vA(t)||"Unknown",i));return Le({},r,n)}function Uc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Bn,Ii=wt.current,Ee(wt,t),Ee(Mt,Mt.current),!0}function cy(t,e,r){var n=t.stateNode;if(!n)throw Error(U(169));r?(t=Q0(t,e,Ii),n.__reactInternalMemoizedMergedChildContext=t,Se(Mt),Se(wt),Ee(wt,t)):Se(Mt),Ee(Mt,r)}var Br=null,Iu=!1,Hd=!1;function Y0(t){Br===null?Br=[t]:Br.push(t)}function DS(t){Iu=!0,Y0(t)}function Qn(){if(!Hd&&Br!==null){Hd=!0;var t=0,e=ve;try{var r=Br;for(ve=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}Br=null,Iu=!1}catch(i){throw Br!==null&&(Br=Br.slice(t+1)),b0(Np,Qn),i}finally{ve=e,Hd=!1}}return null}var co=[],uo=0,jc=null,zc=0,er=[],tr=0,Ai=null,Hr=1,Wr="";function li(t,e){co[uo++]=zc,co[uo++]=jc,jc=t,zc=e}function X0(t,e,r){er[tr++]=Hr,er[tr++]=Wr,er[tr++]=Ai,Ai=t;var n=Hr;t=Wr;var i=32-vr(n)-1;n&=~(1<<i),r+=1;var o=32-vr(e)+i;if(30<o){var s=i-i%5;o=(n&(1<<s)-1).toString(32),n>>=s,i-=s,Hr=1<<32-vr(e)+i|r<<i|n,Wr=o+t}else Hr=1<<o|r<<i|n,Wr=t}function jp(t){t.return!==null&&(li(t,1),X0(t,1,0))}function zp(t){for(;t===jc;)jc=co[--uo],co[uo]=null,zc=co[--uo],co[uo]=null;for(;t===Ai;)Ai=er[--tr],er[tr]=null,Wr=er[--tr],er[tr]=null,Hr=er[--tr],er[tr]=null}var qt=null,zt=null,Pe=!1,mr=null;function J0(t,e){var r=rr(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function uy(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,qt=t,zt=Dn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,qt=t,zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=Ai!==null?{id:Hr,overflow:Wr}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=rr(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,qt=t,zt=null,!0):!1;default:return!1}}function nf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function of(t){if(Pe){var e=zt;if(e){var r=e;if(!uy(t,e)){if(nf(t))throw Error(U(418));e=Dn(r.nextSibling);var n=qt;e&&uy(t,e)?J0(n,r):(t.flags=t.flags&-4097|2,Pe=!1,qt=t)}}else{if(nf(t))throw Error(U(418));t.flags=t.flags&-4097|2,Pe=!1,qt=t}}}function dy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;qt=t}function Ul(t){if(t!==qt)return!1;if(!Pe)return dy(t),Pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zh(t.type,t.memoizedProps)),e&&(e=zt)){if(nf(t))throw Z0(),Error(U(418));for(;e;)J0(t,e),e=Dn(e.nextSibling)}if(dy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){zt=Dn(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}zt=null}}else zt=qt?Dn(t.stateNode.nextSibling):null;return!0}function Z0(){for(var t=zt;t;)t=Dn(t.nextSibling)}function ko(){zt=qt=null,Pe=!1}function Bp(t){mr===null?mr=[t]:mr.push(t)}var LS=cn.ReactCurrentBatchConfig;function Is(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(U(309));var n=r.stateNode}if(!n)throw Error(U(147,t));var i=n,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(U(284));if(!r._owner)throw Error(U(290,t))}return t}function jl(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hy(t){var e=t._init;return e(t._payload)}function eb(t){function e(x,y){if(t){var I=x.deletions;I===null?(x.deletions=[y],x.flags|=16):I.push(y)}}function r(x,y){if(!t)return null;for(;y!==null;)e(x,y),y=y.sibling;return null}function n(x,y){for(x=new Map;y!==null;)y.key!==null?x.set(y.key,y):x.set(y.index,y),y=y.sibling;return x}function i(x,y){return x=$n(x,y),x.index=0,x.sibling=null,x}function o(x,y,I){return x.index=I,t?(I=x.alternate,I!==null?(I=I.index,I<y?(x.flags|=2,y):I):(x.flags|=2,y)):(x.flags|=1048576,y)}function s(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,y,I,L){return y===null||y.tag!==6?(y=Jd(I,x.mode,L),y.return=x,y):(y=i(y,I),y.return=x,y)}function c(x,y,I,L){var j=I.type;return j===no?h(x,y,I.props.children,L,I.key):y!==null&&(y.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===_n&&hy(j)===y.type)?(L=i(y,I.props),L.ref=Is(x,y,I),L.return=x,L):(L=yc(I.type,I.key,I.props,null,x.mode,L),L.ref=Is(x,y,I),L.return=x,L)}function u(x,y,I,L){return y===null||y.tag!==4||y.stateNode.containerInfo!==I.containerInfo||y.stateNode.implementation!==I.implementation?(y=Zd(I,x.mode,L),y.return=x,y):(y=i(y,I.children||[]),y.return=x,y)}function h(x,y,I,L,j){return y===null||y.tag!==7?(y=wi(I,x.mode,L,j),y.return=x,y):(y=i(y,I),y.return=x,y)}function p(x,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Jd(""+y,x.mode,I),y.return=x,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Rl:return I=yc(y.type,y.key,y.props,null,x.mode,I),I.ref=Is(x,null,y),I.return=x,I;case ro:return y=Zd(y,x.mode,I),y.return=x,y;case _n:var L=y._init;return p(x,L(y._payload),I)}if(Ds(y)||ws(y))return y=wi(y,x.mode,I,null),y.return=x,y;jl(x,y)}return null}function m(x,y,I,L){var j=y!==null?y.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return j!==null?null:l(x,y,""+I,L);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Rl:return I.key===j?c(x,y,I,L):null;case ro:return I.key===j?u(x,y,I,L):null;case _n:return j=I._init,m(x,y,j(I._payload),L)}if(Ds(I)||ws(I))return j!==null?null:h(x,y,I,L,null);jl(x,I)}return null}function E(x,y,I,L,j){if(typeof L=="string"&&L!==""||typeof L=="number")return x=x.get(I)||null,l(y,x,""+L,j);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Rl:return x=x.get(L.key===null?I:L.key)||null,c(y,x,L,j);case ro:return x=x.get(L.key===null?I:L.key)||null,u(y,x,L,j);case _n:var B=L._init;return E(x,y,I,B(L._payload),j)}if(Ds(L)||ws(L))return x=x.get(I)||null,h(y,x,L,j,null);jl(y,L)}return null}function S(x,y,I,L){for(var j=null,B=null,b=y,v=y=0,_=null;b!==null&&v<I.length;v++){b.index>v?(_=b,b=null):_=b.sibling;var T=m(x,b,I[v],L);if(T===null){b===null&&(b=_);break}t&&b&&T.alternate===null&&e(x,b),y=o(T,y,v),B===null?j=T:B.sibling=T,B=T,b=_}if(v===I.length)return r(x,b),Pe&&li(x,v),j;if(b===null){for(;v<I.length;v++)b=p(x,I[v],L),b!==null&&(y=o(b,y,v),B===null?j=b:B.sibling=b,B=b);return Pe&&li(x,v),j}for(b=n(x,b);v<I.length;v++)_=E(b,x,v,I[v],L),_!==null&&(t&&_.alternate!==null&&b.delete(_.key===null?v:_.key),y=o(_,y,v),B===null?j=_:B.sibling=_,B=_);return t&&b.forEach(function(A){return e(x,A)}),Pe&&li(x,v),j}function N(x,y,I,L){var j=ws(I);if(typeof j!="function")throw Error(U(150));if(I=j.call(I),I==null)throw Error(U(151));for(var B=j=null,b=y,v=y=0,_=null,T=I.next();b!==null&&!T.done;v++,T=I.next()){b.index>v?(_=b,b=null):_=b.sibling;var A=m(x,b,T.value,L);if(A===null){b===null&&(b=_);break}t&&b&&A.alternate===null&&e(x,b),y=o(A,y,v),B===null?j=A:B.sibling=A,B=A,b=_}if(T.done)return r(x,b),Pe&&li(x,v),j;if(b===null){for(;!T.done;v++,T=I.next())T=p(x,T.value,L),T!==null&&(y=o(T,y,v),B===null?j=T:B.sibling=T,B=T);return Pe&&li(x,v),j}for(b=n(x,b);!T.done;v++,T=I.next())T=E(b,x,v,T.value,L),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?v:T.key),y=o(T,y,v),B===null?j=T:B.sibling=T,B=T);return t&&b.forEach(function(k){return e(x,k)}),Pe&&li(x,v),j}function O(x,y,I,L){if(typeof I=="object"&&I!==null&&I.type===no&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Rl:e:{for(var j=I.key,B=y;B!==null;){if(B.key===j){if(j=I.type,j===no){if(B.tag===7){r(x,B.sibling),y=i(B,I.props.children),y.return=x,x=y;break e}}else if(B.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===_n&&hy(j)===B.type){r(x,B.sibling),y=i(B,I.props),y.ref=Is(x,B,I),y.return=x,x=y;break e}r(x,B);break}else e(x,B);B=B.sibling}I.type===no?(y=wi(I.props.children,x.mode,L,I.key),y.return=x,x=y):(L=yc(I.type,I.key,I.props,null,x.mode,L),L.ref=Is(x,y,I),L.return=x,x=L)}return s(x);case ro:e:{for(B=I.key;y!==null;){if(y.key===B)if(y.tag===4&&y.stateNode.containerInfo===I.containerInfo&&y.stateNode.implementation===I.implementation){r(x,y.sibling),y=i(y,I.children||[]),y.return=x,x=y;break e}else{r(x,y);break}else e(x,y);y=y.sibling}y=Zd(I,x.mode,L),y.return=x,x=y}return s(x);case _n:return B=I._init,O(x,y,B(I._payload),L)}if(Ds(I))return S(x,y,I,L);if(ws(I))return N(x,y,I,L);jl(x,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,y!==null&&y.tag===6?(r(x,y.sibling),y=i(y,I),y.return=x,x=y):(r(x,y),y=Jd(I,x.mode,L),y.return=x,x=y),s(x)):r(x,y)}return O}var Co=eb(!0),tb=eb(!1),Bc=Gn(null),qc=null,ho=null,qp=null;function Hp(){qp=ho=qc=null}function Wp(t){var e=Bc.current;Se(Bc),t._currentValue=e}function sf(t,e,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===r)break;t=t.return}}function _o(t,e){qc=t,qp=ho=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Vt=!0),t.firstContext=null)}function ar(t){var e=t._currentValue;if(qp!==t)if(t={context:t,memoizedValue:e,next:null},ho===null){if(qc===null)throw Error(U(308));ho=t,qc.dependencies={lanes:0,firstContext:t}}else ho=ho.next=t;return e}var hi=null;function Kp(t){hi===null?hi=[t]:hi.push(t)}function rb(t,e,r,n){var i=e.interleaved;return i===null?(r.next=r,Kp(e)):(r.next=i.next,i.next=r),e.interleaved=r,tn(t,n)}function tn(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var wn=!1;function Gp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nb(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ln(t,e,r){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,he&2){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,tn(t,r)}return i=n.interleaved,i===null?(e.next=e,Kp(n)):(e.next=i.next,i.next=e),n.interleaved=e,tn(t,r)}function hc(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,Op(t,r)}}function fy(t,e){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=s:o=o.next=s,r=r.next}while(r!==null);o===null?i=o=e:o=o.next=e}else i=o=e;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Hc(t,e,r,n){var i=t.updateQueue;wn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==s&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=c))}if(o!==null){var p=i.baseState;s=0,h=u=c=null,l=o;do{var m=l.lane,E=l.eventTime;if((n&m)===m){h!==null&&(h=h.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=t,N=l;switch(m=e,E=r,N.tag){case 1:if(S=N.payload,typeof S=="function"){p=S.call(E,p,m);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=N.payload,m=typeof S=="function"?S.call(E,p,m):S,m==null)break e;p=Le({},p,m);break e;case 2:wn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else E={eventTime:E,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=E,c=p):h=h.next=E,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);ki|=s,t.lanes=s,t.memoizedState=p}}function py(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(U(191,i));i.call(n)}}}var Wa={},kr=Gn(Wa),va=Gn(Wa),ya=Gn(Wa);function fi(t){if(t===Wa)throw Error(U(174));return t}function Qp(t,e){switch(Ee(ya,e),Ee(va,t),Ee(kr,Wa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fh(e,t)}Se(kr),Ee(kr,e)}function Ro(){Se(kr),Se(va),Se(ya)}function ib(t){fi(ya.current);var e=fi(kr.current),r=Fh(e,t.type);e!==r&&(Ee(va,t),Ee(kr,r))}function Yp(t){va.current===t&&(Se(kr),Se(va))}var Oe=Gn(0);function Wc(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wd=[];function Xp(){for(var t=0;t<Wd.length;t++)Wd[t]._workInProgressVersionPrimary=null;Wd.length=0}var fc=cn.ReactCurrentDispatcher,Kd=cn.ReactCurrentBatchConfig,Si=0,De=null,Qe=null,Ze=null,Kc=!1,Gs=!1,_a=0,VS=0;function ft(){throw Error(U(321))}function Jp(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!wr(t[r],e[r]))return!1;return!0}function Zp(t,e,r,n,i,o){if(Si=o,De=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fc.current=t===null||t.memoizedState===null?US:jS,t=r(n,i),Gs){o=0;do{if(Gs=!1,_a=0,25<=o)throw Error(U(301));o+=1,Ze=Qe=null,e.updateQueue=null,fc.current=zS,t=r(n,i)}while(Gs)}if(fc.current=Gc,e=Qe!==null&&Qe.next!==null,Si=0,Ze=Qe=De=null,Kc=!1,e)throw Error(U(300));return t}function em(){var t=_a!==0;return _a=0,t}function Ir(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?De.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function lr(){if(Qe===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var e=Ze===null?De.memoizedState:Ze.next;if(e!==null)Ze=e,Qe=t;else{if(t===null)throw Error(U(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Ze===null?De.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function wa(t,e){return typeof e=="function"?e(t):e}function Gd(t){var e=lr(),r=e.queue;if(r===null)throw Error(U(311));r.lastRenderedReducer=t;var n=Qe,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var l=s=null,c=null,u=o;do{var h=u.lane;if((Si&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:t(n,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,s=n):c=c.next=p,De.lanes|=h,ki|=h}u=u.next}while(u!==null&&u!==o);c===null?s=n:c.next=l,wr(n,e.memoizedState)||(Vt=!0),e.memoizedState=n,e.baseState=s,e.baseQueue=c,r.lastRenderedState=n}if(t=r.interleaved,t!==null){i=t;do o=i.lane,De.lanes|=o,ki|=o,i=i.next;while(i!==t)}else i===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Qd(t){var e=lr(),r=e.queue;if(r===null)throw Error(U(311));r.lastRenderedReducer=t;var n=r.dispatch,i=r.pending,o=e.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);wr(o,e.memoizedState)||(Vt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),r.lastRenderedState=o}return[o,n]}function ob(){}function sb(t,e){var r=De,n=lr(),i=e(),o=!wr(n.memoizedState,i);if(o&&(n.memoizedState=i,Vt=!0),n=n.queue,tm(cb.bind(null,r,n,t),[t]),n.getSnapshot!==e||o||Ze!==null&&Ze.memoizedState.tag&1){if(r.flags|=2048,ba(9,lb.bind(null,r,n,i,e),void 0,null),et===null)throw Error(U(349));Si&30||ab(r,e,i)}return i}function ab(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function lb(t,e,r,n){e.value=r,e.getSnapshot=n,ub(e)&&db(t)}function cb(t,e,r){return r(function(){ub(e)&&db(t)})}function ub(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!wr(t,r)}catch{return!0}}function db(t){var e=tn(t,1);e!==null&&yr(e,t,1,-1)}function my(t){var e=Ir();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:t},e.queue=t,t=t.dispatch=FS.bind(null,De,t),[e.memoizedState,t]}function ba(t,e,r,n){return t={tag:t,create:e,destroy:r,deps:n,next:null},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,e.lastEffect=t)),t}function hb(){return lr().memoizedState}function pc(t,e,r,n){var i=Ir();De.flags|=t,i.memoizedState=ba(1|e,r,void 0,n===void 0?null:n)}function Au(t,e,r,n){var i=lr();n=n===void 0?null:n;var o=void 0;if(Qe!==null){var s=Qe.memoizedState;if(o=s.destroy,n!==null&&Jp(n,s.deps)){i.memoizedState=ba(e,r,o,n);return}}De.flags|=t,i.memoizedState=ba(1|e,r,o,n)}function gy(t,e){return pc(8390656,8,t,e)}function tm(t,e){return Au(2048,8,t,e)}function fb(t,e){return Au(4,2,t,e)}function pb(t,e){return Au(4,4,t,e)}function mb(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gb(t,e,r){return r=r!=null?r.concat([t]):null,Au(4,4,mb.bind(null,e,t),r)}function rm(){}function vb(t,e){var r=lr();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&Jp(e,n[1])?n[0]:(r.memoizedState=[t,e],t)}function yb(t,e){var r=lr();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&Jp(e,n[1])?n[0]:(t=t(),r.memoizedState=[t,e],t)}function _b(t,e,r){return Si&21?(wr(r,e)||(r=T0(),De.lanes|=r,ki|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Vt=!0),t.memoizedState=r)}function MS(t,e){var r=ve;ve=r!==0&&4>r?r:4,t(!0);var n=Kd.transition;Kd.transition={};try{t(!1),e()}finally{ve=r,Kd.transition=n}}function wb(){return lr().memoizedState}function $S(t,e,r){var n=Mn(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},bb(t))Eb(e,r);else if(r=rb(t,e,r,n),r!==null){var i=At();yr(r,t,n,i),xb(r,e,n)}}function FS(t,e,r){var n=Mn(t),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(bb(t))Eb(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,r);if(i.hasEagerState=!0,i.eagerState=l,wr(l,s)){var c=e.interleaved;c===null?(i.next=i,Kp(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}r=rb(t,e,i,n),r!==null&&(i=At(),yr(r,t,n,i),xb(r,e,n))}}function bb(t){var e=t.alternate;return t===De||e!==null&&e===De}function Eb(t,e){Gs=Kc=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function xb(t,e,r){if(r&4194240){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,Op(t,r)}}var Gc={readContext:ar,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},US={readContext:ar,useCallback:function(t,e){return Ir().memoizedState=[t,e===void 0?null:e],t},useContext:ar,useEffect:gy,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,pc(4194308,4,mb.bind(null,e,t),r)},useLayoutEffect:function(t,e){return pc(4194308,4,t,e)},useInsertionEffect:function(t,e){return pc(4,2,t,e)},useMemo:function(t,e){var r=Ir();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var n=Ir();return e=r!==void 0?r(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=$S.bind(null,De,t),[n.memoizedState,t]},useRef:function(t){var e=Ir();return t={current:t},e.memoizedState=t},useState:my,useDebugValue:rm,useDeferredValue:function(t){return Ir().memoizedState=t},useTransition:function(){var t=my(!1),e=t[0];return t=MS.bind(null,t[1]),Ir().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var n=De,i=Ir();if(Pe){if(r===void 0)throw Error(U(407));r=r()}else{if(r=e(),et===null)throw Error(U(349));Si&30||ab(n,e,r)}i.memoizedState=r;var o={value:r,getSnapshot:e};return i.queue=o,gy(cb.bind(null,n,o,t),[t]),n.flags|=2048,ba(9,lb.bind(null,n,o,r,e),void 0,null),r},useId:function(){var t=Ir(),e=et.identifierPrefix;if(Pe){var r=Wr,n=Hr;r=(n&~(1<<32-vr(n)-1)).toString(32)+r,e=":"+e+"R"+r,r=_a++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=VS++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jS={readContext:ar,useCallback:vb,useContext:ar,useEffect:tm,useImperativeHandle:gb,useInsertionEffect:fb,useLayoutEffect:pb,useMemo:yb,useReducer:Gd,useRef:hb,useState:function(){return Gd(wa)},useDebugValue:rm,useDeferredValue:function(t){var e=lr();return _b(e,Qe.memoizedState,t)},useTransition:function(){var t=Gd(wa)[0],e=lr().memoizedState;return[t,e]},useMutableSource:ob,useSyncExternalStore:sb,useId:wb,unstable_isNewReconciler:!1},zS={readContext:ar,useCallback:vb,useContext:ar,useEffect:tm,useImperativeHandle:gb,useInsertionEffect:fb,useLayoutEffect:pb,useMemo:yb,useReducer:Qd,useRef:hb,useState:function(){return Qd(wa)},useDebugValue:rm,useDeferredValue:function(t){var e=lr();return Qe===null?e.memoizedState=t:_b(e,Qe.memoizedState,t)},useTransition:function(){var t=Qd(wa)[0],e=lr().memoizedState;return[t,e]},useMutableSource:ob,useSyncExternalStore:sb,useId:wb,unstable_isNewReconciler:!1};function fr(t,e){if(t&&t.defaultProps){e=Le({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function af(t,e,r,n){e=t.memoizedState,r=r(n,e),r=r==null?e:Le({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Su={isMounted:function(t){return(t=t._reactInternals)?Fi(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var n=At(),i=Mn(t),o=Yr(n,i);o.payload=e,r!=null&&(o.callback=r),e=Ln(t,o,i),e!==null&&(yr(e,t,i,n),hc(e,t,i))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var n=At(),i=Mn(t),o=Yr(n,i);o.tag=1,o.payload=e,r!=null&&(o.callback=r),e=Ln(t,o,i),e!==null&&(yr(e,t,i,n),hc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=At(),n=Mn(t),i=Yr(r,n);i.tag=2,e!=null&&(i.callback=e),e=Ln(t,i,n),e!==null&&(yr(e,t,n,r),hc(e,t,n))}};function vy(t,e,r,n,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,o,s):e.prototype&&e.prototype.isPureReactComponent?!fa(r,n)||!fa(i,o):!0}function Tb(t,e,r){var n=!1,i=Bn,o=e.contextType;return typeof o=="object"&&o!==null?o=ar(o):(i=$t(e)?Ii:wt.current,n=e.contextTypes,o=(n=n!=null)?So(t,i):Bn),e=new e(r,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Su,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function yy(t,e,r,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,n),e.state!==t&&Su.enqueueReplaceState(e,e.state,null)}function lf(t,e,r,n){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs={},Gp(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=ar(o):(o=$t(e)?Ii:wt.current,i.context=So(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(af(t,e,o,r),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Su.enqueueReplaceState(i,i.state,null),Hc(t,r,i,n),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Po(t,e){try{var r="",n=e;do r+=gA(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Yd(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function cf(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var BS=typeof WeakMap=="function"?WeakMap:Map;function Ib(t,e,r){r=Yr(-1,r),r.tag=3,r.payload={element:null};var n=e.value;return r.callback=function(){Yc||(Yc=!0,_f=n),cf(t,e)},r}function Ab(t,e,r){r=Yr(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=e.value;r.payload=function(){return n(i)},r.callback=function(){cf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){cf(t,e),typeof n!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),r}function _y(t,e,r){var n=t.pingCache;if(n===null){n=t.pingCache=new BS;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(r)||(i.add(r),t=nk.bind(null,t,e,r),e.then(t,t))}function wy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function by(t,e,r,n,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Yr(-1,1),e.tag=2,Ln(r,e,1))),r.lanes|=1),t)}var qS=cn.ReactCurrentOwner,Vt=!1;function It(t,e,r,n){e.child=t===null?tb(e,null,r,n):Co(e,t.child,r,n)}function Ey(t,e,r,n,i){r=r.render;var o=e.ref;return _o(e,i),n=Zp(t,e,r,n,o,i),r=em(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rn(t,e,i)):(Pe&&r&&jp(e),e.flags|=1,It(t,e,n,i),e.child)}function xy(t,e,r,n,i){if(t===null){var o=r.type;return typeof o=="function"&&!um(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=o,Sb(t,e,o,n,i)):(t=yc(r.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(r=r.compare,r=r!==null?r:fa,r(s,n)&&t.ref===e.ref)return rn(t,e,i)}return e.flags|=1,t=$n(o,n),t.ref=e.ref,t.return=e,e.child=t}function Sb(t,e,r,n,i){if(t!==null){var o=t.memoizedProps;if(fa(o,n)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=n=o,(t.lanes&i)!==0)t.flags&131072&&(Vt=!0);else return e.lanes=t.lanes,rn(t,e,i)}return uf(t,e,r,n,i)}function kb(t,e,r){var n=e.pendingProps,i=n.children,o=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(po,jt),jt|=r;else{if(!(r&1073741824))return t=o!==null?o.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(po,jt),jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,Ee(po,jt),jt|=n}else o!==null?(n=o.baseLanes|r,e.memoizedState=null):n=r,Ee(po,jt),jt|=n;return It(t,e,i,r),e.child}function Cb(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function uf(t,e,r,n,i){var o=$t(r)?Ii:wt.current;return o=So(e,o),_o(e,i),r=Zp(t,e,r,n,o,i),n=em(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rn(t,e,i)):(Pe&&n&&jp(e),e.flags|=1,It(t,e,r,i),e.child)}function Ty(t,e,r,n,i){if($t(r)){var o=!0;Uc(e)}else o=!1;if(_o(e,i),e.stateNode===null)mc(t,e),Tb(e,r,n),lf(e,r,n,i),n=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var c=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=ar(u):(u=$t(r)?Ii:wt.current,u=So(e,u));var h=r.getDerivedStateFromProps,p=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==n||c!==u)&&yy(e,s,n,u),wn=!1;var m=e.memoizedState;s.state=m,Hc(e,n,s,i),c=e.memoizedState,l!==n||m!==c||Mt.current||wn?(typeof h=="function"&&(af(e,r,h,n),c=e.memoizedState),(l=wn||vy(e,r,l,n,m,c,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=c),s.props=n,s.state=c,s.context=u,n=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{s=e.stateNode,nb(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:fr(e.type,l),s.props=u,p=e.pendingProps,m=s.context,c=r.contextType,typeof c=="object"&&c!==null?c=ar(c):(c=$t(r)?Ii:wt.current,c=So(e,c));var E=r.getDerivedStateFromProps;(h=typeof E=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||m!==c)&&yy(e,s,n,c),wn=!1,m=e.memoizedState,s.state=m,Hc(e,n,s,i);var S=e.memoizedState;l!==p||m!==S||Mt.current||wn?(typeof E=="function"&&(af(e,r,E,n),S=e.memoizedState),(u=wn||vy(e,r,u,n,m,S,c)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,S,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,S,c)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=S),s.props=n,s.state=S,s.context=c,n=u):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),n=!1)}return df(t,e,r,n,o,i)}function df(t,e,r,n,i,o){Cb(t,e);var s=(e.flags&128)!==0;if(!n&&!s)return i&&cy(e,r,!1),rn(t,e,o);n=e.stateNode,qS.current=e;var l=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&s?(e.child=Co(e,t.child,null,o),e.child=Co(e,null,l,o)):It(t,e,l,o),e.memoizedState=n.state,i&&cy(e,r,!0),e.child}function Rb(t){var e=t.stateNode;e.pendingContext?ly(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ly(t,e.context,!1),Qp(t,e.containerInfo)}function Iy(t,e,r,n,i){return ko(),Bp(i),e.flags|=256,It(t,e,r,n),e.child}var hf={dehydrated:null,treeContext:null,retryLane:0};function ff(t){return{baseLanes:t,cachePool:null,transitions:null}}function Pb(t,e,r){var n=e.pendingProps,i=Oe.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ee(Oe,i&1),t===null)return of(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=n.children,t=n.fallback,o?(n=e.mode,o=e.child,s={mode:"hidden",children:s},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ru(s,n,0,null),t=wi(t,n,r,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=ff(r),e.memoizedState=hf,t):nm(e,s));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return HS(t,e,s,n,l,i,r);if(o){o=n.fallback,s=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:n.children};return!(s&1)&&e.child!==i?(n=e.child,n.childLanes=0,n.pendingProps=c,e.deletions=null):(n=$n(i,c),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=$n(l,o):(o=wi(o,s,r,null),o.flags|=2),o.return=e,n.return=e,n.sibling=o,e.child=n,n=o,o=e.child,s=t.child.memoizedState,s=s===null?ff(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~r,e.memoizedState=hf,n}return o=t.child,t=o.sibling,n=$n(o,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n}function nm(t,e){return e=Ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function zl(t,e,r,n){return n!==null&&Bp(n),Co(e,t.child,null,r),t=nm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function HS(t,e,r,n,i,o,s){if(r)return e.flags&256?(e.flags&=-257,n=Yd(Error(U(422))),zl(t,e,s,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=n.fallback,i=e.mode,n=Ru({mode:"visible",children:n.children},i,0,null),o=wi(o,i,s,null),o.flags|=2,n.return=e,o.return=e,n.sibling=o,e.child=n,e.mode&1&&Co(e,t.child,null,s),e.child.memoizedState=ff(s),e.memoizedState=hf,o);if(!(e.mode&1))return zl(t,e,s,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(U(419)),n=Yd(o,n,void 0),zl(t,e,s,n)}if(l=(s&t.childLanes)!==0,Vt||l){if(n=et,n!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,tn(t,i),yr(n,t,i,-1))}return cm(),n=Yd(Error(U(421))),zl(t,e,s,n)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ik.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,zt=Dn(i.nextSibling),qt=e,Pe=!0,mr=null,t!==null&&(er[tr++]=Hr,er[tr++]=Wr,er[tr++]=Ai,Hr=t.id,Wr=t.overflow,Ai=e),e=nm(e,n.children),e.flags|=4096,e)}function Ay(t,e,r){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),sf(t.return,e,r)}function Xd(t,e,r,n,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function Nb(t,e,r){var n=e.pendingProps,i=n.revealOrder,o=n.tail;if(It(t,e,n.children,r),n=Oe.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ay(t,r,e);else if(t.tag===19)Ay(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(Ee(Oe,n),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(r=e.child,i=null;r!==null;)t=r.alternate,t!==null&&Wc(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=e.child,e.child=null):(i=r.sibling,r.sibling=null),Xd(e,!1,i,r,o);break;case"backwards":for(r=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Wc(t)===null){e.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}Xd(e,!0,r,null,o);break;case"together":Xd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function mc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rn(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),ki|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,r=$n(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=$n(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function WS(t,e,r){switch(e.tag){case 3:Rb(e),ko();break;case 5:ib(e);break;case 1:$t(e.type)&&Uc(e);break;case 4:Qp(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,i=e.memoizedProps.value;Ee(Bc,n._currentValue),n._currentValue=i;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(Ee(Oe,Oe.current&1),e.flags|=128,null):r&e.child.childLanes?Pb(t,e,r):(Ee(Oe,Oe.current&1),t=rn(t,e,r),t!==null?t.sibling:null);Ee(Oe,Oe.current&1);break;case 19:if(n=(r&e.childLanes)!==0,t.flags&128){if(n)return Nb(t,e,r);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(Oe,Oe.current),n)break;return null;case 22:case 23:return e.lanes=0,kb(t,e,r)}return rn(t,e,r)}var Ob,pf,Db,Lb;Ob=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};pf=function(){};Db=function(t,e,r,n){var i=t.memoizedProps;if(i!==n){t=e.stateNode,fi(kr.current);var o=null;switch(r){case"input":i=Lh(t,i),n=Lh(t,n),o=[];break;case"select":i=Le({},i,{value:void 0}),n=Le({},n,{value:void 0}),o=[];break;case"textarea":i=$h(t,i),n=$h(t,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=$c)}Uh(r,n);var s;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(sa.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var c=n[u];if(l=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(r||(r={}),r[s]=c[s])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(sa.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ie("scroll",t),o||l===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Lb=function(t,e,r,n){r!==n&&(e.flags|=4)};function As(t,e){if(!Pe)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,n=0;if(e)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=r,e}function KS(t,e,r){var n=e.pendingProps;switch(zp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(e),null;case 1:return $t(e.type)&&Fc(),pt(e),null;case 3:return n=e.stateNode,Ro(),Se(Mt),Se(wt),Xp(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Ul(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mr!==null&&(Ef(mr),mr=null))),pf(t,e),pt(e),null;case 5:Yp(e);var i=fi(ya.current);if(r=e.type,t!==null&&e.stateNode!=null)Db(t,e,r,n,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(U(166));return pt(e),null}if(t=fi(kr.current),Ul(e)){n=e.stateNode,r=e.type;var o=e.memoizedProps;switch(n[Ar]=e,n[ga]=o,t=(e.mode&1)!==0,r){case"dialog":Ie("cancel",n),Ie("close",n);break;case"iframe":case"object":case"embed":Ie("load",n);break;case"video":case"audio":for(i=0;i<Vs.length;i++)Ie(Vs[i],n);break;case"source":Ie("error",n);break;case"img":case"image":case"link":Ie("error",n),Ie("load",n);break;case"details":Ie("toggle",n);break;case"input":Lv(n,o),Ie("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},Ie("invalid",n);break;case"textarea":Mv(n,o),Ie("invalid",n)}Uh(r,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&Fl(n.textContent,l,t),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Fl(n.textContent,l,t),i=["children",""+l]):sa.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Ie("scroll",n)}switch(r){case"input":Pl(n),Vv(n,o,!0);break;case"textarea":Pl(n),$v(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=$c)}n=i,e.updateQueue=n,n!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=c0(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=s.createElement(r,{is:n.is}):(t=s.createElement(r),r==="select"&&(s=t,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):t=s.createElementNS(t,r),t[Ar]=e,t[ga]=n,Ob(t,e,!1,!1),e.stateNode=t;e:{switch(s=jh(r,n),r){case"dialog":Ie("cancel",t),Ie("close",t),i=n;break;case"iframe":case"object":case"embed":Ie("load",t),i=n;break;case"video":case"audio":for(i=0;i<Vs.length;i++)Ie(Vs[i],t);i=n;break;case"source":Ie("error",t),i=n;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=n;break;case"details":Ie("toggle",t),i=n;break;case"input":Lv(t,n),i=Lh(t,n),Ie("invalid",t);break;case"option":i=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},i=Le({},n,{value:void 0}),Ie("invalid",t);break;case"textarea":Mv(t,n),i=$h(t,n),Ie("invalid",t);break;default:i=n}Uh(r,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?h0(t,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&u0(t,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&aa(t,c):typeof c=="number"&&aa(t,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(sa.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Ie("scroll",t):c!=null&&Sp(t,o,c,s))}switch(r){case"input":Pl(t),Vv(t,n,!1);break;case"textarea":Pl(t),$v(t);break;case"option":n.value!=null&&t.setAttribute("value",""+zn(n.value));break;case"select":t.multiple=!!n.multiple,o=n.value,o!=null?mo(t,!!n.multiple,o,!1):n.defaultValue!=null&&mo(t,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=$c)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pt(e),null;case 6:if(t&&e.stateNode!=null)Lb(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(U(166));if(r=fi(ya.current),fi(kr.current),Ul(e)){if(n=e.stateNode,r=e.memoizedProps,n[Ar]=e,(o=n.nodeValue!==r)&&(t=qt,t!==null))switch(t.tag){case 3:Fl(n.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fl(n.nodeValue,r,(t.mode&1)!==0)}o&&(e.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Ar]=e,e.stateNode=n}return pt(e),null;case 13:if(Se(Oe),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pe&&zt!==null&&e.mode&1&&!(e.flags&128))Z0(),ko(),e.flags|=98560,o=!1;else if(o=Ul(e),n!==null&&n.dehydrated!==null){if(t===null){if(!o)throw Error(U(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(U(317));o[Ar]=e}else ko(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pt(e),o=!1}else mr!==null&&(Ef(mr),mr=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||Oe.current&1?Ye===0&&(Ye=3):cm())),e.updateQueue!==null&&(e.flags|=4),pt(e),null);case 4:return Ro(),pf(t,e),t===null&&pa(e.stateNode.containerInfo),pt(e),null;case 10:return Wp(e.type._context),pt(e),null;case 17:return $t(e.type)&&Fc(),pt(e),null;case 19:if(Se(Oe),o=e.memoizedState,o===null)return pt(e),null;if(n=(e.flags&128)!==0,s=o.rendering,s===null)if(n)As(o,!1);else{if(Ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Wc(t),s!==null){for(e.flags|=128,As(o,!1),n=s.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=r,r=e.child;r!==null;)o=r,t=n,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return Ee(Oe,Oe.current&1|2),e.child}t=t.sibling}o.tail!==null&&qe()>No&&(e.flags|=128,n=!0,As(o,!1),e.lanes=4194304)}else{if(!n)if(t=Wc(s),t!==null){if(e.flags|=128,n=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),As(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Pe)return pt(e),null}else 2*qe()-o.renderingStartTime>No&&r!==1073741824&&(e.flags|=128,n=!0,As(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(r=o.last,r!==null?r.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=qe(),e.sibling=null,r=Oe.current,Ee(Oe,n?r&1|2:r&1),e):(pt(e),null);case 22:case 23:return lm(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?jt&1073741824&&(pt(e),e.subtreeFlags&6&&(e.flags|=8192)):pt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function GS(t,e){switch(zp(e),e.tag){case 1:return $t(e.type)&&Fc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ro(),Se(Mt),Se(wt),Xp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Yp(e),null;case 13:if(Se(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));ko()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(Oe),null;case 4:return Ro(),null;case 10:return Wp(e.type._context),null;case 22:case 23:return lm(),null;case 24:return null;default:return null}}var Bl=!1,vt=!1,QS=typeof WeakSet=="function"?WeakSet:Set,K=null;function fo(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){$e(t,e,n)}else r.current=null}function mf(t,e,r){try{r()}catch(n){$e(t,e,n)}}var Sy=!1;function YS(t,e){if(Xh=Lc,t=U0(),Up(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var s=0,l=-1,c=-1,u=0,h=0,p=t,m=null;t:for(;;){for(var E;p!==r||i!==0&&p.nodeType!==3||(l=s+i),p!==o||n!==0&&p.nodeType!==3||(c=s+n),p.nodeType===3&&(s+=p.nodeValue.length),(E=p.firstChild)!==null;)m=p,p=E;for(;;){if(p===t)break t;if(m===r&&++u===i&&(l=s),m===o&&++h===n&&(c=s),(E=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=E}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Jh={focusedElem:t,selectionRange:r},Lc=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var N=S.memoizedProps,O=S.memoizedState,x=e.stateNode,y=x.getSnapshotBeforeUpdate(e.elementType===e.type?N:fr(e.type,N),O);x.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(L){$e(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return S=Sy,Sy=!1,S}function Qs(t,e,r){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&mf(e,r,o)}i=i.next}while(i!==n)}}function ku(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==e)}}function gf(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Vb(t){var e=t.alternate;e!==null&&(t.alternate=null,Vb(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ar],delete e[ga],delete e[tf],delete e[NS],delete e[OS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Mb(t){return t.tag===5||t.tag===3||t.tag===4}function ky(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mb(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vf(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=$c));else if(n!==4&&(t=t.child,t!==null))for(vf(t,e,r),t=t.sibling;t!==null;)vf(t,e,r),t=t.sibling}function yf(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(yf(t,e,r),t=t.sibling;t!==null;)yf(t,e,r),t=t.sibling}var rt=null,pr=!1;function vn(t,e,r){for(r=r.child;r!==null;)$b(t,e,r),r=r.sibling}function $b(t,e,r){if(Sr&&typeof Sr.onCommitFiberUnmount=="function")try{Sr.onCommitFiberUnmount(wu,r)}catch{}switch(r.tag){case 5:vt||fo(r,e);case 6:var n=rt,i=pr;rt=null,vn(t,e,r),rt=n,pr=i,rt!==null&&(pr?(t=rt,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):rt.removeChild(r.stateNode));break;case 18:rt!==null&&(pr?(t=rt,r=r.stateNode,t.nodeType===8?qd(t.parentNode,r):t.nodeType===1&&qd(t,r),da(t)):qd(rt,r.stateNode));break;case 4:n=rt,i=pr,rt=r.stateNode.containerInfo,pr=!0,vn(t,e,r),rt=n,pr=i;break;case 0:case 11:case 14:case 15:if(!vt&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&mf(r,e,s),i=i.next}while(i!==n)}vn(t,e,r);break;case 1:if(!vt&&(fo(r,e),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){$e(r,e,l)}vn(t,e,r);break;case 21:vn(t,e,r);break;case 22:r.mode&1?(vt=(n=vt)||r.memoizedState!==null,vn(t,e,r),vt=n):vn(t,e,r);break;default:vn(t,e,r)}}function Cy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new QS),e.forEach(function(n){var i=ok.bind(null,t,n);r.has(n)||(r.add(n),n.then(i,i))})}}function hr(t,e){var r=e.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:rt=l.stateNode,pr=!1;break e;case 3:rt=l.stateNode.containerInfo,pr=!0;break e;case 4:rt=l.stateNode.containerInfo,pr=!0;break e}l=l.return}if(rt===null)throw Error(U(160));$b(o,s,i),rt=null,pr=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){$e(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Fb(e,t),e=e.sibling}function Fb(t,e){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(hr(e,t),Tr(t),n&4){try{Qs(3,t,t.return),ku(3,t)}catch(N){$e(t,t.return,N)}try{Qs(5,t,t.return)}catch(N){$e(t,t.return,N)}}break;case 1:hr(e,t),Tr(t),n&512&&r!==null&&fo(r,r.return);break;case 5:if(hr(e,t),Tr(t),n&512&&r!==null&&fo(r,r.return),t.flags&32){var i=t.stateNode;try{aa(i,"")}catch(N){$e(t,t.return,N)}}if(n&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=r!==null?r.memoizedProps:o,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&a0(i,o),jh(l,s);var u=jh(l,o);for(s=0;s<c.length;s+=2){var h=c[s],p=c[s+1];h==="style"?h0(i,p):h==="dangerouslySetInnerHTML"?u0(i,p):h==="children"?aa(i,p):Sp(i,h,p,u)}switch(l){case"input":Vh(i,o);break;case"textarea":l0(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var E=o.value;E!=null?mo(i,!!o.multiple,E,!1):m!==!!o.multiple&&(o.defaultValue!=null?mo(i,!!o.multiple,o.defaultValue,!0):mo(i,!!o.multiple,o.multiple?[]:"",!1))}i[ga]=o}catch(N){$e(t,t.return,N)}}break;case 6:if(hr(e,t),Tr(t),n&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(N){$e(t,t.return,N)}}break;case 3:if(hr(e,t),Tr(t),n&4&&r!==null&&r.memoizedState.isDehydrated)try{da(e.containerInfo)}catch(N){$e(t,t.return,N)}break;case 4:hr(e,t),Tr(t);break;case 13:hr(e,t),Tr(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(sm=qe())),n&4&&Cy(t);break;case 22:if(h=r!==null&&r.memoizedState!==null,t.mode&1?(vt=(u=vt)||h,hr(e,t),vt=u):hr(e,t),Tr(t),n&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(K=t,h=t.child;h!==null;){for(p=K=h;K!==null;){switch(m=K,E=m.child,m.tag){case 0:case 11:case 14:case 15:Qs(4,m,m.return);break;case 1:fo(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){n=m,r=m.return;try{e=n,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(N){$e(n,r,N)}}break;case 5:fo(m,m.return);break;case 22:if(m.memoizedState!==null){Py(p);continue}}E!==null?(E.return=m,K=E):Py(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=d0("display",s))}catch(N){$e(t,t.return,N)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(N){$e(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:hr(e,t),Tr(t),n&4&&Cy(t);break;case 21:break;default:hr(e,t),Tr(t)}}function Tr(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(Mb(r)){var n=r;break e}r=r.return}throw Error(U(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(aa(i,""),n.flags&=-33);var o=ky(t);yf(t,o,i);break;case 3:case 4:var s=n.stateNode.containerInfo,l=ky(t);vf(t,l,s);break;default:throw Error(U(161))}}catch(c){$e(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function XS(t,e,r){K=t,Ub(t)}function Ub(t,e,r){for(var n=(t.mode&1)!==0;K!==null;){var i=K,o=i.child;if(i.tag===22&&n){var s=i.memoizedState!==null||Bl;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||vt;l=Bl;var u=vt;if(Bl=s,(vt=c)&&!u)for(K=i;K!==null;)s=K,c=s.child,s.tag===22&&s.memoizedState!==null?Ny(i):c!==null?(c.return=s,K=c):Ny(i);for(;o!==null;)K=o,Ub(o),o=o.sibling;K=i,Bl=l,vt=u}Ry(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,K=o):Ry(t)}}function Ry(t){for(;K!==null;){var e=K;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vt||ku(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!vt)if(r===null)n.componentDidMount();else{var i=e.elementType===e.type?r.memoizedProps:fr(e.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&py(e,o,n);break;case 3:var s=e.updateQueue;if(s!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}py(e,s,r)}break;case 5:var l=e.stateNode;if(r===null&&e.flags&4){r=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&da(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}vt||e.flags&512&&gf(e)}catch(m){$e(e,e.return,m)}}if(e===t){K=null;break}if(r=e.sibling,r!==null){r.return=e.return,K=r;break}K=e.return}}function Py(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var r=e.sibling;if(r!==null){r.return=e.return,K=r;break}K=e.return}}function Ny(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{ku(4,e)}catch(c){$e(e,r,c)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var i=e.return;try{n.componentDidMount()}catch(c){$e(e,i,c)}}var o=e.return;try{gf(e)}catch(c){$e(e,o,c)}break;case 5:var s=e.return;try{gf(e)}catch(c){$e(e,s,c)}}}catch(c){$e(e,e.return,c)}if(e===t){K=null;break}var l=e.sibling;if(l!==null){l.return=e.return,K=l;break}K=e.return}}var JS=Math.ceil,Qc=cn.ReactCurrentDispatcher,im=cn.ReactCurrentOwner,ir=cn.ReactCurrentBatchConfig,he=0,et=null,Ke=null,st=0,jt=0,po=Gn(0),Ye=0,Ea=null,ki=0,Cu=0,om=0,Ys=null,Dt=null,sm=0,No=1/0,jr=null,Yc=!1,_f=null,Vn=null,ql=!1,Cn=null,Xc=0,Xs=0,wf=null,gc=-1,vc=0;function At(){return he&6?qe():gc!==-1?gc:gc=qe()}function Mn(t){return t.mode&1?he&2&&st!==0?st&-st:LS.transition!==null?(vc===0&&(vc=T0()),vc):(t=ve,t!==0||(t=window.event,t=t===void 0?16:P0(t.type)),t):1}function yr(t,e,r,n){if(50<Xs)throw Xs=0,wf=null,Error(U(185));Ba(t,r,n),(!(he&2)||t!==et)&&(t===et&&(!(he&2)&&(Cu|=r),Ye===4&&xn(t,st)),Ft(t,n),r===1&&he===0&&!(e.mode&1)&&(No=qe()+500,Iu&&Qn()))}function Ft(t,e){var r=t.callbackNode;LA(t,e);var n=Dc(t,t===et?st:0);if(n===0)r!==null&&jv(r),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(r!=null&&jv(r),e===1)t.tag===0?DS(Oy.bind(null,t)):Y0(Oy.bind(null,t)),RS(function(){!(he&6)&&Qn()}),r=null;else{switch(I0(n)){case 1:r=Np;break;case 4:r=E0;break;case 16:r=Oc;break;case 536870912:r=x0;break;default:r=Oc}r=Gb(r,jb.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function jb(t,e){if(gc=-1,vc=0,he&6)throw Error(U(327));var r=t.callbackNode;if(wo()&&t.callbackNode!==r)return null;var n=Dc(t,t===et?st:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=Jc(t,n);else{e=n;var i=he;he|=2;var o=Bb();(et!==t||st!==e)&&(jr=null,No=qe()+500,_i(t,e));do try{tk();break}catch(l){zb(t,l)}while(!0);Hp(),Qc.current=o,he=i,Ke!==null?e=0:(et=null,st=0,e=Ye)}if(e!==0){if(e===2&&(i=Wh(t),i!==0&&(n=i,e=bf(t,i))),e===1)throw r=Ea,_i(t,0),xn(t,n),Ft(t,qe()),r;if(e===6)xn(t,n);else{if(i=t.current.alternate,!(n&30)&&!ZS(i)&&(e=Jc(t,n),e===2&&(o=Wh(t),o!==0&&(n=o,e=bf(t,o))),e===1))throw r=Ea,_i(t,0),xn(t,n),Ft(t,qe()),r;switch(t.finishedWork=i,t.finishedLanes=n,e){case 0:case 1:throw Error(U(345));case 2:ci(t,Dt,jr);break;case 3:if(xn(t,n),(n&130023424)===n&&(e=sm+500-qe(),10<e)){if(Dc(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){At(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ef(ci.bind(null,t,Dt,jr),e);break}ci(t,Dt,jr);break;case 4:if(xn(t,n),(n&4194240)===n)break;for(e=t.eventTimes,i=-1;0<n;){var s=31-vr(n);o=1<<s,s=e[s],s>i&&(i=s),n&=~o}if(n=i,n=qe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*JS(n/1960))-n,10<n){t.timeoutHandle=ef(ci.bind(null,t,Dt,jr),n);break}ci(t,Dt,jr);break;case 5:ci(t,Dt,jr);break;default:throw Error(U(329))}}}return Ft(t,qe()),t.callbackNode===r?jb.bind(null,t):null}function bf(t,e){var r=Ys;return t.current.memoizedState.isDehydrated&&(_i(t,e).flags|=256),t=Jc(t,e),t!==2&&(e=Dt,Dt=r,e!==null&&Ef(e)),t}function Ef(t){Dt===null?Dt=t:Dt.push.apply(Dt,t)}function ZS(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!wr(o(),i))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xn(t,e){for(e&=~om,e&=~Cu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-vr(e),n=1<<r;t[r]=-1,e&=~n}}function Oy(t){if(he&6)throw Error(U(327));wo();var e=Dc(t,0);if(!(e&1))return Ft(t,qe()),null;var r=Jc(t,e);if(t.tag!==0&&r===2){var n=Wh(t);n!==0&&(e=n,r=bf(t,n))}if(r===1)throw r=Ea,_i(t,0),xn(t,e),Ft(t,qe()),r;if(r===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ci(t,Dt,jr),Ft(t,qe()),null}function am(t,e){var r=he;he|=1;try{return t(e)}finally{he=r,he===0&&(No=qe()+500,Iu&&Qn())}}function Ci(t){Cn!==null&&Cn.tag===0&&!(he&6)&&wo();var e=he;he|=1;var r=ir.transition,n=ve;try{if(ir.transition=null,ve=1,t)return t()}finally{ve=n,ir.transition=r,he=e,!(he&6)&&Qn()}}function lm(){jt=po.current,Se(po)}function _i(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,CS(r)),Ke!==null)for(r=Ke.return;r!==null;){var n=r;switch(zp(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Fc();break;case 3:Ro(),Se(Mt),Se(wt),Xp();break;case 5:Yp(n);break;case 4:Ro();break;case 13:Se(Oe);break;case 19:Se(Oe);break;case 10:Wp(n.type._context);break;case 22:case 23:lm()}r=r.return}if(et=t,Ke=t=$n(t.current,null),st=jt=e,Ye=0,Ea=null,om=Cu=ki=0,Dt=Ys=null,hi!==null){for(e=0;e<hi.length;e++)if(r=hi[e],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var s=o.next;o.next=i,n.next=s}r.pending=n}hi=null}return t}function zb(t,e){do{var r=Ke;try{if(Hp(),fc.current=Gc,Kc){for(var n=De.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Kc=!1}if(Si=0,Ze=Qe=De=null,Gs=!1,_a=0,im.current=null,r===null||r.return===null){Ye=1,Ea=e,Ke=null;break}e:{var o=t,s=r.return,l=r,c=e;if(e=st,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=l,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var E=wy(s);if(E!==null){E.flags&=-257,by(E,s,l,o,e),E.mode&1&&_y(o,u,e),e=E,c=u;var S=e.updateQueue;if(S===null){var N=new Set;N.add(c),e.updateQueue=N}else S.add(c);break e}else{if(!(e&1)){_y(o,u,e),cm();break e}c=Error(U(426))}}else if(Pe&&l.mode&1){var O=wy(s);if(O!==null){!(O.flags&65536)&&(O.flags|=256),by(O,s,l,o,e),Bp(Po(c,l));break e}}o=c=Po(c,l),Ye!==4&&(Ye=2),Ys===null?Ys=[o]:Ys.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var x=Ib(o,c,e);fy(o,x);break e;case 1:l=c;var y=o.type,I=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Vn===null||!Vn.has(I)))){o.flags|=65536,e&=-e,o.lanes|=e;var L=Ab(o,l,e);fy(o,L);break e}}o=o.return}while(o!==null)}Hb(r)}catch(j){e=j,Ke===r&&r!==null&&(Ke=r=r.return);continue}break}while(!0)}function Bb(){var t=Qc.current;return Qc.current=Gc,t===null?Gc:t}function cm(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),et===null||!(ki&268435455)&&!(Cu&268435455)||xn(et,st)}function Jc(t,e){var r=he;he|=2;var n=Bb();(et!==t||st!==e)&&(jr=null,_i(t,e));do try{ek();break}catch(i){zb(t,i)}while(!0);if(Hp(),he=r,Qc.current=n,Ke!==null)throw Error(U(261));return et=null,st=0,Ye}function ek(){for(;Ke!==null;)qb(Ke)}function tk(){for(;Ke!==null&&!AA();)qb(Ke)}function qb(t){var e=Kb(t.alternate,t,jt);t.memoizedProps=t.pendingProps,e===null?Hb(t):Ke=e,im.current=null}function Hb(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=GS(r,e),r!==null){r.flags&=32767,Ke=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,Ke=null;return}}else if(r=KS(r,e,jt),r!==null){Ke=r;return}if(e=e.sibling,e!==null){Ke=e;return}Ke=e=t}while(e!==null);Ye===0&&(Ye=5)}function ci(t,e,r){var n=ve,i=ir.transition;try{ir.transition=null,ve=1,rk(t,e,r,n)}finally{ir.transition=i,ve=n}return null}function rk(t,e,r,n){do wo();while(Cn!==null);if(he&6)throw Error(U(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var o=r.lanes|r.childLanes;if(VA(t,o),t===et&&(Ke=et=null,st=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ql||(ql=!0,Gb(Oc,function(){return wo(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=ir.transition,ir.transition=null;var s=ve;ve=1;var l=he;he|=4,im.current=null,YS(t,r),Fb(r,t),ES(Jh),Lc=!!Xh,Jh=Xh=null,t.current=r,XS(r),SA(),he=l,ve=s,ir.transition=o}else t.current=r;if(ql&&(ql=!1,Cn=t,Xc=i),o=t.pendingLanes,o===0&&(Vn=null),RA(r.stateNode),Ft(t,qe()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)i=e[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Yc)throw Yc=!1,t=_f,_f=null,t;return Xc&1&&t.tag!==0&&wo(),o=t.pendingLanes,o&1?t===wf?Xs++:(Xs=0,wf=t):Xs=0,Qn(),null}function wo(){if(Cn!==null){var t=I0(Xc),e=ir.transition,r=ve;try{if(ir.transition=null,ve=16>t?16:t,Cn===null)var n=!1;else{if(t=Cn,Cn=null,Xc=0,he&6)throw Error(U(331));var i=he;for(he|=4,K=t.current;K!==null;){var o=K,s=o.child;if(K.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(K=u;K!==null;){var h=K;switch(h.tag){case 0:case 11:case 15:Qs(8,h,o)}var p=h.child;if(p!==null)p.return=h,K=p;else for(;K!==null;){h=K;var m=h.sibling,E=h.return;if(Vb(h),h===u){K=null;break}if(m!==null){m.return=E,K=m;break}K=E}}}var S=o.alternate;if(S!==null){var N=S.child;if(N!==null){S.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}K=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,K=s;else e:for(;K!==null;){if(o=K,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Qs(9,o,o.return)}var x=o.sibling;if(x!==null){x.return=o.return,K=x;break e}K=o.return}}var y=t.current;for(K=y;K!==null;){s=K;var I=s.child;if(s.subtreeFlags&2064&&I!==null)I.return=s,K=I;else e:for(s=y;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ku(9,l)}}catch(j){$e(l,l.return,j)}if(l===s){K=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,K=L;break e}K=l.return}}if(he=i,Qn(),Sr&&typeof Sr.onPostCommitFiberRoot=="function")try{Sr.onPostCommitFiberRoot(wu,t)}catch{}n=!0}return n}finally{ve=r,ir.transition=e}}return!1}function Dy(t,e,r){e=Po(r,e),e=Ib(t,e,1),t=Ln(t,e,1),e=At(),t!==null&&(Ba(t,1,e),Ft(t,e))}function $e(t,e,r){if(t.tag===3)Dy(t,t,r);else for(;e!==null;){if(e.tag===3){Dy(e,t,r);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Vn===null||!Vn.has(n))){t=Po(r,t),t=Ab(e,t,1),e=Ln(e,t,1),t=At(),e!==null&&(Ba(e,1,t),Ft(e,t));break}}e=e.return}}function nk(t,e,r){var n=t.pingCache;n!==null&&n.delete(e),e=At(),t.pingedLanes|=t.suspendedLanes&r,et===t&&(st&r)===r&&(Ye===4||Ye===3&&(st&130023424)===st&&500>qe()-sm?_i(t,0):om|=r),Ft(t,e)}function Wb(t,e){e===0&&(t.mode&1?(e=Dl,Dl<<=1,!(Dl&130023424)&&(Dl=4194304)):e=1);var r=At();t=tn(t,e),t!==null&&(Ba(t,e,r),Ft(t,r))}function ik(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Wb(t,r)}function ok(t,e){var r=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(U(314))}n!==null&&n.delete(e),Wb(t,r)}var Kb;Kb=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mt.current)Vt=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return Vt=!1,WS(t,e,r);Vt=!!(t.flags&131072)}else Vt=!1,Pe&&e.flags&1048576&&X0(e,zc,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;mc(t,e),t=e.pendingProps;var i=So(e,wt.current);_o(e,r),i=Zp(null,e,n,t,i,r);var o=em();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$t(n)?(o=!0,Uc(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gp(e),i.updater=Su,e.stateNode=i,i._reactInternals=e,lf(e,n,t,r),e=df(null,e,n,!0,o,r)):(e.tag=0,Pe&&o&&jp(e),It(null,e,i,r),e=e.child),e;case 16:n=e.elementType;e:{switch(mc(t,e),t=e.pendingProps,i=n._init,n=i(n._payload),e.type=n,i=e.tag=ak(n),t=fr(n,t),i){case 0:e=uf(null,e,n,t,r);break e;case 1:e=Ty(null,e,n,t,r);break e;case 11:e=Ey(null,e,n,t,r);break e;case 14:e=xy(null,e,n,fr(n.type,t),r);break e}throw Error(U(306,n,""))}return e;case 0:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:fr(n,i),uf(t,e,n,i,r);case 1:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:fr(n,i),Ty(t,e,n,i,r);case 3:e:{if(Rb(e),t===null)throw Error(U(387));n=e.pendingProps,o=e.memoizedState,i=o.element,nb(t,e),Hc(e,n,null,r);var s=e.memoizedState;if(n=s.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Po(Error(U(423)),e),e=Iy(t,e,n,r,i);break e}else if(n!==i){i=Po(Error(U(424)),e),e=Iy(t,e,n,r,i);break e}else for(zt=Dn(e.stateNode.containerInfo.firstChild),qt=e,Pe=!0,mr=null,r=tb(e,null,n,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ko(),n===i){e=rn(t,e,r);break e}It(t,e,n,r)}e=e.child}return e;case 5:return ib(e),t===null&&of(e),n=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Zh(n,i)?s=null:o!==null&&Zh(n,o)&&(e.flags|=32),Cb(t,e),It(t,e,s,r),e.child;case 6:return t===null&&of(e),null;case 13:return Pb(t,e,r);case 4:return Qp(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Co(e,null,n,r):It(t,e,n,r),e.child;case 11:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:fr(n,i),Ey(t,e,n,i,r);case 7:return It(t,e,e.pendingProps,r),e.child;case 8:return It(t,e,e.pendingProps.children,r),e.child;case 12:return It(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(n=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Ee(Bc,n._currentValue),n._currentValue=s,o!==null)if(wr(o.value,s)){if(o.children===i.children&&!Mt.current){e=rn(t,e,r);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(o.tag===1){c=Yr(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),sf(o.return,r,e),l.lanes|=r;break}c=c.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(U(341));s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),sf(s,r,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}It(t,e,i.children,r),e=e.child}return e;case 9:return i=e.type,n=e.pendingProps.children,_o(e,r),i=ar(i),n=n(i),e.flags|=1,It(t,e,n,r),e.child;case 14:return n=e.type,i=fr(n,e.pendingProps),i=fr(n.type,i),xy(t,e,n,i,r);case 15:return Sb(t,e,e.type,e.pendingProps,r);case 17:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:fr(n,i),mc(t,e),e.tag=1,$t(n)?(t=!0,Uc(e)):t=!1,_o(e,r),Tb(e,n,i),lf(e,n,i,r),df(null,e,n,!0,t,r);case 19:return Nb(t,e,r);case 22:return kb(t,e,r)}throw Error(U(156,e.tag))};function Gb(t,e){return b0(t,e)}function sk(t,e,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rr(t,e,r,n){return new sk(t,e,r,n)}function um(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ak(t){if(typeof t=="function")return um(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Cp)return 11;if(t===Rp)return 14}return 2}function $n(t,e){var r=t.alternate;return r===null?(r=rr(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function yc(t,e,r,n,i,o){var s=2;if(n=t,typeof t=="function")um(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case no:return wi(r.children,i,o,e);case kp:s=8,i|=8;break;case Ph:return t=rr(12,r,e,i|2),t.elementType=Ph,t.lanes=o,t;case Nh:return t=rr(13,r,e,i),t.elementType=Nh,t.lanes=o,t;case Oh:return t=rr(19,r,e,i),t.elementType=Oh,t.lanes=o,t;case i0:return Ru(r,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case r0:s=10;break e;case n0:s=9;break e;case Cp:s=11;break e;case Rp:s=14;break e;case _n:s=16,n=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=rr(s,r,e,i),e.elementType=t,e.type=n,e.lanes=o,e}function wi(t,e,r,n){return t=rr(7,t,n,e),t.lanes=r,t}function Ru(t,e,r,n){return t=rr(22,t,n,e),t.elementType=i0,t.lanes=r,t.stateNode={isHidden:!1},t}function Jd(t,e,r){return t=rr(6,t,null,e),t.lanes=r,t}function Zd(t,e,r){return e=rr(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function lk(t,e,r,n,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Od(0),this.expirationTimes=Od(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Od(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function dm(t,e,r,n,i,o,s,l,c){return t=new lk(t,e,r,l,c),e===1?(e=1,o===!0&&(e|=8)):e=0,o=rr(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gp(o),t}function ck(t,e,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ro,key:n==null?null:""+n,children:t,containerInfo:e,implementation:r}}function Qb(t){if(!t)return Bn;t=t._reactInternals;e:{if(Fi(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var r=t.type;if($t(r))return Q0(t,r,e)}return e}function Yb(t,e,r,n,i,o,s,l,c){return t=dm(r,n,!0,t,i,o,s,l,c),t.context=Qb(null),r=t.current,n=At(),i=Mn(r),o=Yr(n,i),o.callback=e??null,Ln(r,o,i),t.current.lanes=i,Ba(t,i,n),Ft(t,n),t}function Pu(t,e,r,n){var i=e.current,o=At(),s=Mn(i);return r=Qb(r),e.context===null?e.context=r:e.pendingContext=r,e=Yr(o,s),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=Ln(i,e,s),t!==null&&(yr(t,i,s,o),hc(t,i,s)),s}function Zc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ly(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function hm(t,e){Ly(t,e),(t=t.alternate)&&Ly(t,e)}function uk(){return null}var Xb=typeof reportError=="function"?reportError:function(t){console.error(t)};function fm(t){this._internalRoot=t}Nu.prototype.render=fm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Pu(t,e,null,null)};Nu.prototype.unmount=fm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ci(function(){Pu(null,t,null,null)}),e[en]=null}};function Nu(t){this._internalRoot=t}Nu.prototype.unstable_scheduleHydration=function(t){if(t){var e=k0();t={blockedOn:null,target:t,priority:e};for(var r=0;r<En.length&&e!==0&&e<En[r].priority;r++);En.splice(r,0,t),r===0&&R0(t)}};function pm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vy(){}function dk(t,e,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var u=Zc(s);o.call(u)}}var s=Yb(e,n,t,0,null,!1,!1,"",Vy);return t._reactRootContainer=s,t[en]=s.current,pa(t.nodeType===8?t.parentNode:t),Ci(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var u=Zc(c);l.call(u)}}var c=dm(t,0,!1,null,null,!1,!1,"",Vy);return t._reactRootContainer=c,t[en]=c.current,pa(t.nodeType===8?t.parentNode:t),Ci(function(){Pu(e,c,r,n)}),c}function Du(t,e,r,n,i){var o=r._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=Zc(s);l.call(c)}}Pu(e,s,t,i)}else s=dk(r,e,t,i,n);return Zc(s)}A0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Ls(e.pendingLanes);r!==0&&(Op(e,r|1),Ft(e,qe()),!(he&6)&&(No=qe()+500,Qn()))}break;case 13:Ci(function(){var n=tn(t,1);if(n!==null){var i=At();yr(n,t,1,i)}}),hm(t,1)}};Dp=function(t){if(t.tag===13){var e=tn(t,134217728);if(e!==null){var r=At();yr(e,t,134217728,r)}hm(t,134217728)}};S0=function(t){if(t.tag===13){var e=Mn(t),r=tn(t,e);if(r!==null){var n=At();yr(r,t,e,n)}hm(t,e)}};k0=function(){return ve};C0=function(t,e){var r=ve;try{return ve=t,e()}finally{ve=r}};Bh=function(t,e,r){switch(e){case"input":if(Vh(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var n=r[e];if(n!==t&&n.form===t.form){var i=Tu(n);if(!i)throw Error(U(90));s0(n),Vh(n,i)}}}break;case"textarea":l0(t,r);break;case"select":e=r.value,e!=null&&mo(t,!!r.multiple,e,!1)}};m0=am;g0=Ci;var hk={usingClientEntryPoint:!1,Events:[Ha,ao,Tu,f0,p0,am]},Ss={findFiberByHostInstance:di,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fk={bundleType:Ss.bundleType,version:Ss.version,rendererPackageName:Ss.rendererPackageName,rendererConfig:Ss.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ss.findFiberByHostInstance||uk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{wu=Hl.inject(fk),Sr=Hl}catch{}}Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hk;Kt.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pm(e))throw Error(U(200));return ck(t,e,null,r)};Kt.createRoot=function(t,e){if(!pm(t))throw Error(U(299));var r=!1,n="",i=Xb;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=dm(t,1,!1,null,null,r,!1,n,i),t[en]=e.current,pa(t.nodeType===8?t.parentNode:t),new fm(e)};Kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=_0(e),t=t===null?null:t.stateNode,t};Kt.flushSync=function(t){return Ci(t)};Kt.hydrate=function(t,e,r){if(!Ou(e))throw Error(U(200));return Du(null,t,e,!0,r)};Kt.hydrateRoot=function(t,e,r){if(!pm(t))throw Error(U(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",s=Xb;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),e=Yb(e,null,t,1,r??null,i,!1,o,s),t[en]=e.current,pa(t),n)for(t=0;t<n.length;t++)r=n[t],i=r._getVersion,i=i(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,i]:e.mutableSourceEagerHydrationData.push(r,i);return new Nu(e)};Kt.render=function(t,e,r){if(!Ou(e))throw Error(U(200));return Du(null,t,e,!1,r)};Kt.unmountComponentAtNode=function(t){if(!Ou(t))throw Error(U(40));return t._reactRootContainer?(Ci(function(){Du(null,null,t,!1,function(){t._reactRootContainer=null,t[en]=null})}),!0):!1};Kt.unstable_batchedUpdates=am;Kt.unstable_renderSubtreeIntoContainer=function(t,e,r,n){if(!Ou(r))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Du(t,e,r,!1,n)};Kt.version="18.3.1-next-f1338f8080-20240426";function Jb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jb)}catch(t){console.error(t)}}Jb(),Jw.exports=Kt;var pk=Jw.exports,Zb,My=pk;Zb=My.createRoot,My.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xa(){return xa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},xa.apply(this,arguments)}var pi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(pi||(pi={}));const $y="popstate";function mk(t){t===void 0&&(t={});function e(i,o){let{pathname:s="/",search:l="",hash:c=""}=Ka(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),xf("",{pathname:s,search:l,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(i,o){let s=i.document.querySelector("base"),l="";if(s&&s.getAttribute("href")){let c=i.location.href,u=c.indexOf("#");l=u===-1?c:c.slice(0,u)}return l+"#"+(typeof o=="string"?o:tE(o))}function n(i,o){eE(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return vk(e,r,n,t)}function Cr(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function eE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gk(){return Math.random().toString(36).substr(2,8)}function Fy(t,e){return{usr:t.state,key:t.key,idx:e}}function xf(t,e,r,n){return r===void 0&&(r=null),xa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ka(e):e,{state:r,key:e&&e.key||n||gk()})}function tE(t){let{pathname:e="/",search:r="",hash:n=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Ka(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function vk(t,e,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:o=!1}=n,s=i.history,l=pi.Pop,c=null,u=h();u==null&&(u=0,s.replaceState(xa({},s.state,{idx:u}),""));function h(){return(s.state||{idx:null}).idx}function p(){l=pi.Pop;let O=h(),x=O==null?null:O-u;u=O,c&&c({action:l,location:N.location,delta:x})}function m(O,x){l=pi.Push;let y=xf(N.location,O,x);r&&r(y,O),u=h()+1;let I=Fy(y,u),L=N.createHref(y);try{s.pushState(I,"",L)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(L)}o&&c&&c({action:l,location:N.location,delta:1})}function E(O,x){l=pi.Replace;let y=xf(N.location,O,x);r&&r(y,O),u=h();let I=Fy(y,u),L=N.createHref(y);s.replaceState(I,"",L),o&&c&&c({action:l,location:N.location,delta:0})}function S(O){let x=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof O=="string"?O:tE(O);return y=y.replace(/ $/,"%20"),Cr(x,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,x)}let N={get action(){return l},get location(){return t(i,s)},listen(O){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener($y,p),c=O,()=>{i.removeEventListener($y,p),c=null}},createHref(O){return e(i,O)},createURL:S,encodeLocation(O){let x=S(O);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:m,replace:E,go(O){return s.go(O)}};return N}var Uy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Uy||(Uy={}));function yk(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,n=t.charAt(r);return n&&n!=="/"?null:t.slice(r)||"/"}const _k=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wk=t=>_k.test(t);function bk(t,e){e===void 0&&(e="/");let{pathname:r,search:n="",hash:i=""}=typeof t=="string"?Ka(t):t,o;if(r)if(wk(r))o=r;else{if(r.includes("//")){let s=r;r=r.replace(/\/\/+/g,"/"),eE(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+r))}r.startsWith("/")?o=jy(r.substring(1),"/"):o=jy(r,e)}else o=e;return{pathname:o,search:Ak(n),hash:Sk(i)}}function jy(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function eh(t,e,r,n){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ek(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function xk(t,e){let r=Ek(t);return e?r.map((n,i)=>i===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Tk(t,e,r,n){n===void 0&&(n=!1);let i;typeof t=="string"?i=Ka(t):(i=xa({},t),Cr(!i.pathname||!i.pathname.includes("?"),eh("?","pathname","search",i)),Cr(!i.pathname||!i.pathname.includes("#"),eh("#","pathname","hash",i)),Cr(!i.search||!i.search.includes("#"),eh("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=r;else{let p=e.length-1;if(!n&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let c=bk(i,l),u=s&&s!=="/"&&s.endsWith("/"),h=(o||s===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||h)&&(c.pathname+="/"),c}const Ik=t=>t.join("/").replace(/\/\/+/g,"/"),Ak=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Sk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,rE=["post","put","patch","delete"];new Set(rE);const kk=["get",...rE];new Set(kk);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eu(){return eu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},eu.apply(this,arguments)}const nE=W.createContext(null),mm=W.createContext(null),gm=W.createContext(null),vm=W.createContext({outlet:null,matches:[],isDataRoute:!1});function ym(){return W.useContext(gm)!=null}function iE(){return ym()||Cr(!1),W.useContext(gm).location}function oE(t){W.useContext(mm).static||W.useLayoutEffect(t)}function Ck(){let{isDataRoute:t}=W.useContext(vm);return t?Dk():Rk()}function Rk(){ym()||Cr(!1);let t=W.useContext(nE),{basename:e,future:r,navigator:n}=W.useContext(mm),{matches:i}=W.useContext(vm),{pathname:o}=iE(),s=JSON.stringify(xk(i,r.v7_relativeSplatPath)),l=W.useRef(!1);return oE(()=>{l.current=!0}),W.useCallback(function(u,h){if(h===void 0&&(h={}),!l.current)return;if(typeof u=="number"){n.go(u);return}let p=Tk(u,JSON.parse(s),o,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Ik([e,p.pathname])),(h.replace?n.replace:n.push)(p,h.state,h)},[e,n,s,o,t])}var sE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(sE||{}),aE=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(aE||{});function Pk(t){let e=W.useContext(nE);return e||Cr(!1),e}function Nk(t){let e=W.useContext(vm);return e||Cr(!1),e}function Ok(t){let e=Nk(),r=e.matches[e.matches.length-1];return r.route.id||Cr(!1),r.route.id}function Dk(){let{router:t}=Pk(sE.UseNavigateStable),e=Ok(aE.UseNavigateStable),r=W.useRef(!1);return oE(()=>{r.current=!0}),W.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,eu({fromRouteId:e},o)))},[t,e])}function Lk(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Vk(t){let{basename:e="/",children:r=null,location:n,navigationType:i=pi.Pop,navigator:o,static:s=!1,future:l}=t;ym()&&Cr(!1);let c=e.replace(/^\/*/,"/"),u=W.useMemo(()=>({basename:c,navigator:o,static:s,future:eu({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof n=="string"&&(n=Ka(n));let{pathname:h="/",search:p="",hash:m="",state:E=null,key:S="default"}=n,N=W.useMemo(()=>{let O=yk(h,c);return O==null?null:{location:{pathname:O,search:p,hash:m,state:E,key:S},navigationType:i}},[c,h,p,m,E,S,i]);return N==null?null:W.createElement(mm.Provider,{value:u},W.createElement(gm.Provider,{children:r,value:N}))}new Promise(()=>{});/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tf(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,r)=>{let n=t[r];return e.concat(Array.isArray(n)?n.map(i=>[r,i]):[[r,n]])},[]))}function Mk(t,e){let r=Tf(t);return e&&e.forEach((n,i)=>{r.has(i)||e.getAll(i).forEach(o=>{r.append(i,o)})}),r}const $k="6";try{window.__reactRouterVersion=$k}catch{}const Fk="startTransition",zy=nA[Fk];function Uk(t){let{basename:e,children:r,future:n,window:i}=t,o=W.useRef();o.current==null&&(o.current=mk({window:i,v5Compat:!0}));let s=o.current,[l,c]=W.useState({action:s.action,location:s.location}),{v7_startTransition:u}=n||{},h=W.useCallback(p=>{u&&zy?zy(()=>c(p)):c(p)},[c,u]);return W.useLayoutEffect(()=>s.listen(h),[s,h]),W.useEffect(()=>Lk(n),[n]),W.createElement(Vk,{basename:e,children:r,location:l.location,navigationType:l.action,navigator:s,future:n})}var By;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(By||(By={}));var qy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(qy||(qy={}));function jk(t){let e=W.useRef(Tf(t)),r=W.useRef(!1),n=iE(),i=W.useMemo(()=>Mk(n.search,r.current?null:e.current),[n.search]),o=Ck(),s=W.useCallback((l,c)=>{const u=Tf(typeof l=="function"?l(i):l);r.current=!0,o("?"+u,c)},[o,i]);return[i,s]}var Hy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},zk=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[r++];e[n++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[r++],s=t[r++],l=t[r++],c=((i&7)<<18|(o&63)<<12|(s&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const o=t[r++],s=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},cE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,l=s?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,h=o>>2,p=(o&3)<<4|l>>4;let m=(l&15)<<2|u>>6,E=u&63;c||(E=64,s||(m=64)),n.push(r[h],r[p],r[m],r[E])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const o=r[t.charAt(i++)],l=i<t.length?r[t.charAt(i)]:0;++i;const u=i<t.length?r[t.charAt(i)]:64;++i;const p=i<t.length?r[t.charAt(i)]:64;if(++i,o==null||l==null||u==null||p==null)throw new Bk;const m=o<<2|l>>4;if(n.push(m),u!==64){const E=l<<4&240|u>>2;if(n.push(E),p!==64){const S=u<<6&192|p;n.push(S)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Bk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qk=function(t){const e=lE(t);return cE.encodeByteArray(e,!0)},tu=function(t){return qk(t).replace(/\./g,"")},uE=function(t){try{return cE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const Wk=()=>Hk().__FIREBASE_DEFAULTS__,Kk=()=>{if(typeof process>"u"||typeof Hy>"u")return;const t=Hy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Gk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&uE(t[1]);return e&&JSON.parse(e)},Lu=()=>{try{return Wk()||Kk()||Gk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dE=t=>{var e,r;return(r=(e=Lu())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},Qk=t=>{const e=dE(t);if(!e)return;const r=e.lastIndexOf(":");if(r<=0||r+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(r+1),10);return e[0]==="["?[e.substring(1,r-1),n]:[e.substring(0,r),n]},hE=()=>{var t;return(t=Lu())===null||t===void 0?void 0:t.config},fE=t=>{var e;return(e=Lu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Xk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},n=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[tu(JSON.stringify(r)),tu(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function Zk(){var t;const e=(t=Lu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nC(){const t=bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iC(){return!Zk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pE(){try{return typeof indexedDB=="object"}catch{return!1}}function mE(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(r){e(r)}})}function oC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC="FirebaseError";class Vr extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=sC,Object.setPrototypeOf(this,Vr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ui.prototype.create)}}class Ui{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?aC(o,n):"Error",l=`${this.serviceName}: ${s} (${i}).`;return new Vr(i,l,n)}}function aC(t,e){return t.replace(lC,(r,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const lC=/\{\$([^}]+)}/g;function cC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ta(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const i of r){if(!n.includes(i))return!1;const o=t[i],s=e[i];if(Wy(o)&&Wy(s)){if(!Ta(o,s))return!1}else if(o!==s)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function Wy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Ms(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,o]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function $s(t){const e=t.indexOf("?");if(!e)return"";const r=t.indexOf("#",e);return t.substring(e,r>0?r:void 0)}function uC(t,e){const r=new dC(t,e);return r.subscribe.bind(r)}class dC{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,n){let i;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");hC(e,["next","error","complete"])?i=e:i={next:e,error:r,complete:n},i.next===void 0&&(i.next=th),i.error===void 0&&(i.error=th),i.complete===void 0&&(i.complete=th);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hC(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function th(){}/**
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
 */function Fe(t){return t&&t._delegate?t._delegate:t}class br{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const vC={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},yC=ce.INFO,_C={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},wC=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=_C[e];if(i)console[i](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _m{constructor(e){this.name=e,this._logLevel=yC,this._logHandler=wC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const bC=(t,e)=>e.some(r=>t instanceof r);let Ky,Gy;function EC(){return Ky||(Ky=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xC(){return Gy||(Gy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gE=new WeakMap,If=new WeakMap,vE=new WeakMap,rh=new WeakMap,wm=new WeakMap;function TC(t){const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{r(Xr(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(r=>{r instanceof IDBCursor&&gE.set(r,t)}).catch(()=>{}),wm.set(e,t),e}function IC(t){if(If.has(t))return;const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{r(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});If.set(t,e)}let Af={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return If.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vE.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Xr(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function AC(t){Af=t(Af)}function SC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(nh(this),e,...r);return vE.set(n,e.sort?e.sort():[e]),Xr(n)}:xC().includes(t)?function(...e){return t.apply(nh(this),e),Xr(gE.get(this))}:function(...e){return Xr(t.apply(nh(this),e))}}function kC(t){return typeof t=="function"?SC(t):(t instanceof IDBTransaction&&IC(t),bC(t,EC())?new Proxy(t,Af):t)}function Xr(t){if(t instanceof IDBRequest)return TC(t);if(rh.has(t))return rh.get(t);const e=kC(t);return e!==t&&(rh.set(t,e),wm.set(e,t)),e}const nh=t=>wm.get(t);function Vu(t,e,{blocked:r,upgrade:n,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),l=Xr(s);return n&&s.addEventListener("upgradeneeded",c=>{n(Xr(s.result),c.oldVersion,c.newVersion,Xr(s.transaction),c)}),r&&s.addEventListener("blocked",c=>r(c.oldVersion,c.newVersion,c)),l.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}function ih(t,{blocked:e}={}){const r=indexedDB.deleteDatabase(t);return e&&r.addEventListener("blocked",n=>e(n.oldVersion,n)),Xr(r).then(()=>{})}const CC=["get","getKey","getAll","getAllKeys","count"],RC=["put","add","delete","clear"],oh=new Map;function Qy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oh.get(e))return oh.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,i=RC.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||CC.includes(r)))return;const o=async function(s,...l){const c=this.transaction(s,i?"readwrite":"readonly");let u=c.store;return n&&(u=u.index(l.shift())),(await Promise.all([u[r](...l),i&&c.done]))[0]};return oh.set(e,o),o}AC(t=>({...t,get:(e,r,n)=>Qy(e,r)||t.get(e,r,n),has:(e,r)=>!!Qy(e,r)||t.has(e,r)}));/**
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
 */class PC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(NC(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function NC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sf="@firebase/app",Yy="0.10.13";/**
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
 */const nn=new _m("@firebase/app"),OC="@firebase/app-compat",DC="@firebase/analytics-compat",LC="@firebase/analytics",VC="@firebase/app-check-compat",MC="@firebase/app-check",$C="@firebase/auth",FC="@firebase/auth-compat",UC="@firebase/database",jC="@firebase/data-connect",zC="@firebase/database-compat",BC="@firebase/functions",qC="@firebase/functions-compat",HC="@firebase/installations",WC="@firebase/installations-compat",KC="@firebase/messaging",GC="@firebase/messaging-compat",QC="@firebase/performance",YC="@firebase/performance-compat",XC="@firebase/remote-config",JC="@firebase/remote-config-compat",ZC="@firebase/storage",e1="@firebase/storage-compat",t1="@firebase/firestore",r1="@firebase/vertexai-preview",n1="@firebase/firestore-compat",i1="firebase",o1="10.14.1";/**
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
 */const kf="[DEFAULT]",s1={[Sf]:"fire-core",[OC]:"fire-core-compat",[LC]:"fire-analytics",[DC]:"fire-analytics-compat",[MC]:"fire-app-check",[VC]:"fire-app-check-compat",[$C]:"fire-auth",[FC]:"fire-auth-compat",[UC]:"fire-rtdb",[jC]:"fire-data-connect",[zC]:"fire-rtdb-compat",[BC]:"fire-fn",[qC]:"fire-fn-compat",[HC]:"fire-iid",[WC]:"fire-iid-compat",[KC]:"fire-fcm",[GC]:"fire-fcm-compat",[QC]:"fire-perf",[YC]:"fire-perf-compat",[XC]:"fire-rc",[JC]:"fire-rc-compat",[ZC]:"fire-gcs",[e1]:"fire-gcs-compat",[t1]:"fire-fst",[n1]:"fire-fst-compat",[r1]:"fire-vertex","fire-js":"fire-js",[i1]:"fire-js-all"};/**
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
 */const ru=new Map,a1=new Map,Cf=new Map;function Xy(t,e){try{t.container.addComponent(e)}catch(r){nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function Dr(t){const e=t.name;if(Cf.has(e))return nn.debug(`There were multiple attempts to register component ${e}.`),!1;Cf.set(e,t);for(const r of ru.values())Xy(r,t);for(const r of a1.values())Xy(r,t);return!0}function Wo(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}function gr(t){return t.settings!==void 0}/**
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
 */const l1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fn=new Ui("app","Firebase",l1);/**
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
 */class c1{constructor(e,r,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ko=o1;function yE(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const n=Object.assign({name:kf,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Fn.create("bad-app-name",{appName:String(i)});if(r||(r=hE()),!r)throw Fn.create("no-options");const o=ru.get(i);if(o){if(Ta(r,o.options)&&Ta(n,o.config))return o;throw Fn.create("duplicate-app",{appName:i})}const s=new gC(i);for(const c of Cf.values())s.addComponent(c);const l=new c1(r,n,s);return ru.set(i,l),l}function bm(t=kf){const e=ru.get(t);if(!e&&t===kf&&hE())return yE();if(!e)throw Fn.create("no-app",{appName:t});return e}function or(t,e,r){var n;let i=(n=s1[t])!==null&&n!==void 0?n:t;r&&(i+=`-${r}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&l.push("and"),s&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nn.warn(l.join(" "));return}Dr(new br(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const u1="firebase-heartbeat-database",d1=1,Ia="firebase-heartbeat-store";let sh=null;function _E(){return sh||(sh=Vu(u1,d1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ia)}catch(r){console.warn(r)}}}}).catch(t=>{throw Fn.create("idb-open",{originalErrorMessage:t.message})})),sh}async function h1(t){try{const r=(await _E()).transaction(Ia),n=await r.objectStore(Ia).get(wE(t));return await r.done,n}catch(e){if(e instanceof Vr)nn.warn(e.message);else{const r=Fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nn.warn(r.message)}}}async function Jy(t,e){try{const n=(await _E()).transaction(Ia,"readwrite");await n.objectStore(Ia).put(e,wE(t)),await n.done}catch(r){if(r instanceof Vr)nn.warn(r.message);else{const n=Fn.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});nn.warn(n.message)}}}function wE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const f1=1024,p1=30*24*60*60*1e3;class m1{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new v1(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,r;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Zy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const l=new Date(s.date).valueOf();return Date.now()-l<=p1}),this._storage.overwrite(this._heartbeatsCache))}catch(n){nn.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=Zy(),{heartbeatsToSend:n,unsentEntries:i}=g1(this._heartbeatsCache.heartbeats),o=tu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=r,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(r){return nn.warn(r),""}}}function Zy(){return new Date().toISOString().substring(0,10)}function g1(t,e=f1){const r=[];let n=t.slice();for(const i of t){const o=r.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),e_(r)>e){o.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),e_(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class v1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pE()?mE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await h1(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jy(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jy(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function e_(t){return tu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function y1(t){Dr(new br("platform-logger",e=>new PC(e),"PRIVATE")),Dr(new br("heartbeat",e=>new m1(e),"PRIVATE")),or(Sf,Yy,t),or(Sf,Yy,"esm2017"),or("fire-js","")}y1("");function Em(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}function R(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o}function bE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _1=bE,EE=new Ui("auth","Firebase",bE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=new _m("@firebase/auth");function w1(t,...e){nu.logLevel<=ce.WARN&&nu.warn(`Auth (${Ko}): ${t}`,...e)}function _c(t,...e){nu.logLevel<=ce.ERROR&&nu.error(`Auth (${Ko}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t,...e){throw Tm(t,...e)}function _r(t,...e){return Tm(t,...e)}function xm(t,e,r){const n=Object.assign(Object.assign({},_1()),{[e]:r});return new Ui("auth","Firebase",n).create(e,{appName:t.name})}function Jr(t){return xm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function b1(t,e,r){const n=r;if(!(e instanceof n))throw n.name!==e.constructor.name&&cr(t,"argument-error"),xm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tm(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return EE.create(t,...e)}function ee(t,e,...r){if(!t)throw Tm(e,...r)}function Kr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _c(e),new Error(e)}function on(t,e){t||Kr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function E1(){return t_()==="http:"||t_()==="https:"}function t_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(E1()||tC()||"connection"in navigator)?navigator.onLine:!0}function T1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,r){this.shortDelay=e,this.longDelay=r,on(r>e,"Short delay should be less than long delay!"),this.isMobile=Jk()||rC()}get(){return x1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(t,e){on(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=new Qa(3e4,6e4);function Yn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xn(t,e,r,n,i={}){return TE(t,i,async()=>{let o={},s={};n&&(e==="GET"?s=n:o={body:JSON.stringify(n)});const l=Ga(Object.assign({key:t.config.apiKey},s)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},o);return eC()||(u.referrerPolicy="no-referrer"),xE.fetch()(IE(t,t.config.apiHost,r,l),u)})}async function TE(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},I1),e);try{const i=new k1(t),o=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Wl(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const l=o.ok?s.errorMessage:s.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wl(t,"credential-already-in-use",s);if(c==="EMAIL_EXISTS")throw Wl(t,"email-already-in-use",s);if(c==="USER_DISABLED")throw Wl(t,"user-disabled",s);const h=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xm(t,h,u);cr(t,h)}}catch(i){if(i instanceof Vr)throw i;cr(t,"network-request-failed",{message:String(i)})}}async function Ya(t,e,r,n,i={}){const o=await Xn(t,e,r,n,i);return"mfaPendingCredential"in o&&cr(t,"multi-factor-auth-required",{_serverResponse:o}),o}function IE(t,e,r,n){const i=`${e}${r}?${n}`;return t.config.emulator?Im(t.config,i):`${t.config.apiScheme}://${i}`}function S1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class k1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(_r(this.auth,"network-request-failed")),A1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wl(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=_r(t,e,n);return i.customData._tokenResponse=r,i}function r_(t){return t!==void 0&&t.enterprise!==void 0}class C1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===e)return S1(r.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function R1(t,e){return Xn(t,"GET","/v2/recaptchaConfig",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P1(t,e){return Xn(t,"POST","/v1/accounts:delete",e)}async function AE(t,e){return Xn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function N1(t,e=!1){const r=Fe(t),n=await r.getIdToken(e),i=Am(n);ee(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:n,authTime:Js(ah(i.auth_time)),issuedAtTime:Js(ah(i.iat)),expirationTime:Js(ah(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ah(t){return Number(t)*1e3}function Am(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return _c("JWT malformed, contained fewer than 3 sections"),null;try{const i=uE(r);return i?JSON.parse(i):(_c("Failed to decode base64 JWT payload"),null)}catch(i){return _c("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function n_(t){const e=Am(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof Vr&&O1(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function O1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Pf{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function iu(t){var e;const r=t.auth,n=await t.getIdToken(),i=await Aa(t,AE(r,{idToken:n}));ee(i==null?void 0:i.users.length,r,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?SE(o.providerUserInfo):[],l=V1(t.providerData,s),c=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(l!=null&&l.length),h=c?u:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Pf(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function L1(t){const e=Fe(t);await iu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function V1(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function SE(t){return t.map(e=>{var{providerId:r}=e,n=Em(e,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M1(t,e){const r=await TE(t,{},async()=>{const n=Ga({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=IE(t,i,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",xE.fetch()(s,{method:"POST",headers:l,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function $1(t,e){return Xn(t,"POST","/v2/accounts:revokeToken",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):n_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const r=n_(e);this.updateTokensAndExpiration(e,null,r)}async getToken(e,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:i,expiresIn:o}=await M1(e,r);this.updateTokensAndExpiration(n,i,Number(o))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:i,expirationTime:o}=r,s=new bo;return n&&(ee(typeof n=="string","internal-error",{appName:e}),s.refreshToken=n),i&&(ee(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(ee(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bo,this.toJSON())}_performRefresh(){return Kr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gr{constructor(e){var{uid:r,auth:n,stsTokenManager:i}=e,o=Em(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new D1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Pf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const r=await Aa(this,this.stsTokenManager.getToken(this.auth,e));return ee(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return N1(this,e)}reload(){return L1(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new Gr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await iu(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gr(this.auth.app))return Promise.reject(Jr(this.auth));const e=await this.getIdToken();return await Aa(this,P1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var n,i,o,s,l,c,u,h;const p=(n=r.displayName)!==null&&n!==void 0?n:void 0,m=(i=r.email)!==null&&i!==void 0?i:void 0,E=(o=r.phoneNumber)!==null&&o!==void 0?o:void 0,S=(s=r.photoURL)!==null&&s!==void 0?s:void 0,N=(l=r.tenantId)!==null&&l!==void 0?l:void 0,O=(c=r._redirectEventId)!==null&&c!==void 0?c:void 0,x=(u=r.createdAt)!==null&&u!==void 0?u:void 0,y=(h=r.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:I,emailVerified:L,isAnonymous:j,providerData:B,stsTokenManager:b}=r;ee(I&&b,e,"internal-error");const v=bo.fromJSON(this.name,b);ee(typeof I=="string",e,"internal-error"),yn(p,e.name),yn(m,e.name),ee(typeof L=="boolean",e,"internal-error"),ee(typeof j=="boolean",e,"internal-error"),yn(E,e.name),yn(S,e.name),yn(N,e.name),yn(O,e.name),yn(x,e.name),yn(y,e.name);const _=new Gr({uid:I,auth:e,email:m,emailVerified:L,displayName:p,isAnonymous:j,photoURL:S,phoneNumber:E,tenantId:N,stsTokenManager:v,createdAt:x,lastLoginAt:y});return B&&Array.isArray(B)&&(_.providerData=B.map(T=>Object.assign({},T))),O&&(_._redirectEventId=O),_}static async _fromIdTokenResponse(e,r,n=!1){const i=new bo;i.updateFromServerResponse(r);const o=new Gr({uid:r.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await iu(o),o}static async _fromGetAccountInfoResponse(e,r,n){const i=r.users[0];ee(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?SE(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new bo;l.updateFromIdToken(n);const c=new Gr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Pf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=new Map;function Qr(t){on(t instanceof Function,"Expected a class definition");let e=i_.get(t);return e?(on(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,i_.set(t,e),e)}/**
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
 */class kE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}kE.type="NONE";const o_=kE;/**
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
 */function wc(t,e,r){return`firebase:${t}:${e}:${r}`}class Eo{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:i,name:o}=this.auth;this.fullUserKey=wc(this.userKey,i.apiKey,o),this.fullPersistenceKey=wc("persistence",i.apiKey,o),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new Eo(Qr(o_),e,n);const i=(await Promise.all(r.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Qr(o_);const s=wc(n,e.config.apiKey,e.name);let l=null;for(const u of r)try{const h=await u._get(s);if(h){const p=Gr._fromJSON(e,h);u!==o&&(l=p),o=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new Eo(o,e,n):(o=c[0],l&&await o._set(s,l.toJSON()),await Promise.all(r.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Eo(o,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(NE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(CE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(DE(e))return"Blackberry";if(LE(e))return"Webos";if(RE(e))return"Safari";if((e.includes("chrome/")||PE(e))&&!e.includes("edge/"))return"Chrome";if(OE(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function CE(t=bt()){return/firefox\//i.test(t)}function RE(t=bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function PE(t=bt()){return/crios\//i.test(t)}function NE(t=bt()){return/iemobile/i.test(t)}function OE(t=bt()){return/android/i.test(t)}function DE(t=bt()){return/blackberry/i.test(t)}function LE(t=bt()){return/webos/i.test(t)}function Sm(t=bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function F1(t=bt()){var e;return Sm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function U1(){return nC()&&document.documentMode===10}function VE(t=bt()){return Sm(t)||OE(t)||LE(t)||DE(t)||/windows phone/i.test(t)||NE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(t,e=[]){let r;switch(t){case"Browser":r=s_(bt());break;case"Worker":r=`${s_(bt())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${Ko}/${n}`}/**
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
 */async function z1(t,e={}){return Xn(t,"GET","/v2/passwordPolicy",Yn(t,e))}/**
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
 */class H1{constructor(e,r,n,i){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new a_(this),this.idTokenSubscription=new a_(this),this.beforeStateQueue=new j1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=EE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=Qr(r)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Eo.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const r=await AE(this,{idToken:e}),n=await Gr._fromGetAccountInfoResponse(this,r,e);await this.directlySetCurrentUser(n)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(gr(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!s||s===l)&&(c!=null&&c.user)&&(i=c.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await iu(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=T1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gr(this.app))return Promise.reject(Jr(this));const r=e?Fe(e):null;return r&&ee(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gr(this.app)?Promise.reject(Jr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gr(this.app)?Promise.reject(Jr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await z1(this),r=new q1(e);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ui("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},r)}})}async revokeAccessToken(e){if(this.currentUser){const r=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:r};this.tenantId!=null&&(n.tenantId=this.tenantId),await $1(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&Qr(e)||this._popupRedirectResolver;ee(r,this,"argument-error"),this.redirectPersistenceManager=await Eo.create(this,[Qr(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,i){if(this._deleted)return()=>{};const o=typeof r=="function"?r:r.next.bind(r);let s=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(l,this,"internal-error"),l.then(()=>{s||o(this.currentUser)}),typeof r=="function"){const c=e.addObserver(r,n,i);return()=>{s=!0,c()}}else{const c=e.addObserver(r);return()=>{s=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ME(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(r["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(r["X-Firebase-AppCheck"]=i),r}async _getAppCheckToken(){var e;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r!=null&&r.error&&w1(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function Jn(t){return Fe(t)}class a_{constructor(e){this.auth=e,this.observer=null,this.addObserver=uC(r=>this.observer=r)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function W1(t){Mu=t}function $E(t){return Mu.loadJS(t)}function K1(){return Mu.recaptchaEnterpriseScript}function G1(){return Mu.gapiScript}function Q1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Y1="recaptcha-enterprise",X1="NO_RECAPTCHA";class J1{constructor(e){this.type=Y1,this.auth=Jn(e)}async verify(e="verify",r=!1){async function n(o){if(!r){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,l)=>{R1(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new C1(c);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(c=>{l(c)})})}function i(o,s,l){const c=window.grecaptcha;r_(c)?c.enterprise.ready(()=>{c.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(X1)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{n(this.auth).then(l=>{if(!r&&r_(window.grecaptcha))i(l,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let c=K1();c.length!==0&&(c+=l),$E(c).then(()=>{i(l,o,s)}).catch(u=>{s(u)})}}).catch(l=>{s(l)})})}}async function l_(t,e,r,n=!1){const i=new J1(t);let o;try{o=await i.verify(r)}catch{o=await i.verify(r,!0)}const s=Object.assign({},e);return n?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Nf(t,e,r,n){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await l_(t,e,r,r==="getOobCode");return n(t,o)}else return n(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await l_(t,e,r,r==="getOobCode");return n(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(t,e){const r=Wo(t,"auth");if(r.isInitialized()){const i=r.getImmediate(),o=r.getOptions();if(Ta(o,e??{}))return i;cr(i,"already-initialized")}return r.initialize({options:e})}function eR(t,e){const r=(e==null?void 0:e.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Qr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function tR(t,e,r){const n=Jn(t);ee(n._canInitEmulator,n,"emulator-config-failed"),ee(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,o=FE(e),{host:s,port:l}=rR(e),c=l===null?"":`:${l}`;n.config.emulator={url:`${o}//${s}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),nR()}function FE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rR(t){const e=FE(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const o=i[1];return{host:o,port:c_(n.substr(o.length+1))}}else{const[o,s]=n.split(":");return{host:o,port:c_(s)}}}function c_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nR(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return Kr("not implemented")}_getIdTokenResponse(e){return Kr("not implemented")}_linkToIdToken(e,r){return Kr("not implemented")}_getReauthenticationResolver(e){return Kr("not implemented")}}async function iR(t,e){return Xn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oR(t,e){return Ya(t,"POST","/v1/accounts:signInWithPassword",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR(t,e){return Ya(t,"POST","/v1/accounts:signInWithEmailLink",Yn(t,e))}async function aR(t,e){return Ya(t,"POST","/v1/accounts:signInWithEmailLink",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa extends km{constructor(e,r,n,i=null){super("password",n),this._email=e,this._password=r,this._tenantId=i}static _fromEmailAndPassword(e,r){return new Sa(e,r,"password")}static _fromEmailAndCode(e,r,n=null){return new Sa(e,r,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nf(e,r,"signInWithPassword",oR);case"emailLink":return sR(e,{email:this._email,oobCode:this._password});default:cr(e,"internal-error")}}async _linkToIdToken(e,r){switch(this.signInMethod){case"password":const n={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nf(e,n,"signUpPassword",iR);case"emailLink":return aR(e,{idToken:r,email:this._email,oobCode:this._password});default:cr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(t,e){return Ya(t,"POST","/v1/accounts:signInWithIdp",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR="http://localhost";class sn extends km{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new sn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):cr("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=r,o=Em(r,["providerId","signInMethod"]);if(!n||!i)return null;const s=new sn(n,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const r=this.buildRequest();return xo(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,xo(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,xo(e,r)}buildRequest(){const e={requestUri:lR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=Ga(r)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uR(t){const e=Ms($s(t)).link,r=e?Ms($s(e)).deep_link_id:null,n=Ms($s(t)).deep_link_id;return(n?Ms($s(n)).link:null)||n||r||e||t}class Cm{constructor(e){var r,n,i,o,s,l;const c=Ms($s(e)),u=(r=c.apiKey)!==null&&r!==void 0?r:null,h=(n=c.oobCode)!==null&&n!==void 0?n:null,p=cR((i=c.mode)!==null&&i!==void 0?i:null);ee(u&&h&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=h,this.continueUrl=(o=c.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=c.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const r=uR(e);try{return new Cm(r)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.providerId=Go.PROVIDER_ID}static credential(e,r){return Sa._fromEmailAndPassword(e,r)}static credentialWithLink(e,r){const n=Cm.parseLink(r);return ee(n,"argument-error"),Sa._fromEmailAndCode(e,n.code,n.tenantId)}}Go.PROVIDER_ID="password";Go.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Go.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qo extends Rm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Zs extends Qo{static credentialFromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;return ee("providerId"in r&&"signInMethod"in r,"argument-error"),sn._fromParams(r)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return ee(e.idToken||e.accessToken,"argument-error"),sn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Zs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Zs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:o,nonce:s,providerId:l}=e;if(!n&&!i&&!r&&!o||!l)return null;try{return new Zs(l)._credential({idToken:r,accessToken:n,nonce:s,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Qo{constructor(){super("facebook.com")}static credential(e){return sn._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends Qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return sn._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n}=e;if(!r&&!n)return null;try{return qr.credential(r,n)}catch{return null}}}qr.GOOGLE_SIGN_IN_METHOD="google.com";qr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Qo{constructor(){super("github.com")}static credential(e){return sn._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Qo{constructor(){super("twitter.com")}static credential(e,r){return sn._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=e;if(!r||!n)return null;try{return An.credential(r,n)}catch{return null}}}An.TWITTER_SIGN_IN_METHOD="twitter.com";An.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(t,e){return Ya(t,"POST","/v1/accounts:signUp",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,i=!1){const o=await Gr._fromIdTokenResponse(e,n,i),s=u_(n);return new Ri({user:o,providerId:s,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const i=u_(n);return new Ri({user:e,providerId:i,_tokenResponse:n,operationType:r})}}function u_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou extends Vr{constructor(e,r,n,i){var o;super(r.code,r.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,ou.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,r,n,i){return new ou(e,r,n,i)}}function UE(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ou._fromErrorAndOperation(t,o,e,n):o})}async function hR(t,e,r=!1){const n=await Aa(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return Ri._forOperation(t,"link",n)}/**
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
 */async function fR(t,e,r=!1){const{auth:n}=t;if(gr(n.app))return Promise.reject(Jr(n));const i="reauthenticate";try{const o=await Aa(t,UE(n,i,e,t),r);ee(o.idToken,n,"internal-error");const s=Am(o.idToken);ee(s,n,"internal-error");const{sub:l}=s;return ee(t.uid===l,n,"user-mismatch"),Ri._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&cr(n,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jE(t,e,r=!1){if(gr(t.app))return Promise.reject(Jr(t));const n="signIn",i=await UE(t,n,e),o=await Ri._fromIdTokenResponse(t,n,i);return r||await t._updateCurrentUser(o.user),o}async function pR(t,e){return jE(Jn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zE(t){const e=Jn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function mR(t,e,r){if(gr(t.app))return Promise.reject(Jr(t));const n=Jn(t),s=await Nf(n,{returnSecureToken:!0,email:e,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",dR).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&zE(t),c}),l=await Ri._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(l.user),l}function gR(t,e,r){return gr(t.app)?Promise.reject(Jr(t)):pR(Fe(t),Go.credential(e,r)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&zE(t),n})}function vR(t,e,r,n){return Fe(t).onIdTokenChanged(e,r,n)}function yR(t,e,r){return Fe(t).beforeAuthStateChanged(e,r)}function _R(t,e,r,n){return Fe(t).onAuthStateChanged(e,r,n)}function wR(t){return Fe(t).signOut()}const su="__sak";/**
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
 */class BE{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(su,"1"),this.storage.removeItem(su),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR=1e3,ER=10;class qE extends BE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=VE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&e(r,i,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((s,l,c)=>{this.notifyListeners(s,c)});return}const n=e.key;r?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(n);!r&&this.localCache[n]===s||this.notifyListeners(n,s)},o=this.storage.getItem(n);U1()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ER):i()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},bR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}qE.type="LOCAL";const xR=qE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE extends BE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}HE.type="SESSION";const WE=HE;/**
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
 */function TR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class $u{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(i=>i.isListeningto(e));if(r)return r;const n=new $u(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:i,data:o}=r.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const l=Array.from(s).map(async u=>u(r.origin,o)),c=await TR(l);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$u.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(t="",e=10){let r="";for(let n=0;n<e;n++)r+=Math.floor(Math.random()*10);return t+r}/**
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
 */class IR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((l,c)=>{const u=Pm("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(m.data.response);break;default:clearTimeout(h),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:r},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(){return window}function AR(t){Rr().location.href=t}/**
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
 */function KE(){return typeof Rr().WorkerGlobalScope<"u"&&typeof Rr().importScripts=="function"}async function SR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function CR(){return KE()?self:null}/**
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
 */const GE="firebaseLocalStorageDb",RR=1,au="firebaseLocalStorage",QE="fbase_key";class Xa{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Fu(t,e){return t.transaction([au],e?"readwrite":"readonly").objectStore(au)}function PR(){const t=indexedDB.deleteDatabase(GE);return new Xa(t).toPromise()}function Of(){const t=indexedDB.open(GE,RR);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(au,{keyPath:QE})}catch(i){r(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(au)?e(n):(n.close(),await PR(),e(await Of()))})})}async function d_(t,e,r){const n=Fu(t,!0).put({[QE]:e,value:r});return new Xa(n).toPromise()}async function NR(t,e){const r=Fu(t,!1).get(e),n=await new Xa(r).toPromise();return n===void 0?null:n.value}function h_(t,e){const r=Fu(t,!0).delete(e);return new Xa(r).toPromise()}const OR=800,DR=3;class YE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Of(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>DR)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return KE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$u._getInstance(CR()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await SR(),!this.activeServiceWorker)return;this.sender=new IR(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((r=n[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Of();return await d_(e,su,"1"),await h_(e,su),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>d_(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>NR(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>h_(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Fu(i,!1).getAll();return new Xa(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}YE.type="LOCAL";const LR=YE;new Qa(3e4,6e4);/**
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
 */function XE(t,e){return e?Qr(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Nm extends km{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xo(e,this._buildIdpRequest())}_linkToIdToken(e,r){return xo(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return xo(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function VR(t){return jE(t.auth,new Nm(t),t.bypassAuthState)}function MR(t){const{auth:e,user:r}=t;return ee(r,e,"internal-error"),fR(r,new Nm(t),t.bypassAuthState)}async function $R(t){const{auth:e,user:r}=t;return ee(r,e,"internal-error"),hR(r,new Nm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,r,n,i,o=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:i,tenantId:o,error:s,type:l}=e;if(s){this.reject(s);return}const c={auth:this.auth,requestUri:r,sessionId:n,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VR;case"linkViaPopup":case"linkViaRedirect":return $R;case"reauthViaPopup":case"reauthViaRedirect":return MR;default:cr(this.auth,"internal-error")}}resolve(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=new Qa(2e3,1e4);async function UR(t,e,r){if(gr(t.app))return Promise.reject(_r(t,"operation-not-supported-in-this-environment"));const n=Jn(t);b1(t,e,Rm);const i=XE(n,r);return new mi(n,"signInViaPopup",e,i).executeNotNull()}class mi extends JE{constructor(e,r,n,i,o){super(e,r,i,o),this.provider=n,this.authWindow=null,this.pollId=null,mi.currentPopupAction&&mi.currentPopupAction.cancel(),mi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const e=Pm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(_r(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_r(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_r(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FR.get())};e()}}mi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR="pendingRedirect",bc=new Map;class zR extends JE{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let e=bc.get(this.auth._key());if(!e){try{const n=await BR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}bc.set(this.auth._key(),e)}return this.bypassAuthState||bc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BR(t,e){const r=WR(e),n=HR(t);if(!await n._isAvailable())return!1;const i=await n._get(r)==="true";return await n._remove(r),i}function qR(t,e){bc.set(t._key(),e)}function HR(t){return Qr(t._redirectPersistence)}function WR(t){return wc(jR,t.config.apiKey,t.name)}async function KR(t,e,r=!1){if(gr(t.app))return Promise.reject(Jr(t));const n=Jn(t),i=XE(n,e),s=await new zR(n,i,r).execute();return s&&!r&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR=10*60*1e3;class QR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YR(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var n;if(e.error&&!ZE(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(_r(this.auth,i))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GR&&this.cachedEventUids.clear(),this.cachedEventUids.has(f_(e))}saveEventToCache(e){this.cachedEventUids.add(f_(e)),this.lastProcessedEventTime=Date.now()}}function f_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ZE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ZE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XR(t,e={}){return Xn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZR=/^https?/;async function eP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await XR(t);for(const r of e)try{if(tP(r))return}catch{}cr(t,"unauthorized-domain")}function tP(t){const e=Rf(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&s.hostname===n}if(!ZR.test(r))return!1;if(JR.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const rP=new Qa(3e4,6e4);function p_(){const t=Rr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function nP(t){return new Promise((e,r)=>{var n,i,o;function s(){p_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{p_(),r(_r(t,"network-request-failed"))},timeout:rP.get()})}if(!((i=(n=Rr().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Rr().gapi)===null||o===void 0)&&o.load)s();else{const l=Q1("iframefcb");return Rr()[l]=()=>{gapi.load?s():r(_r(t,"network-request-failed"))},$E(`${G1()}?onload=${l}`).catch(c=>r(c))}}).catch(e=>{throw Ec=null,e})}let Ec=null;function iP(t){return Ec=Ec||nP(t),Ec}/**
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
 */const oP=new Qa(5e3,15e3),sP="__/auth/iframe",aP="emulator/auth/iframe",lP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uP(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?Im(e,aP):`https://${t.config.authDomain}/${sP}`,n={apiKey:e.apiKey,appName:t.name,v:Ko},i=cP.get(t.config.apiHost);i&&(n.eid=i);const o=t._getFrameworks();return o.length&&(n.fw=o.join(",")),`${r}?${Ga(n).slice(1)}`}async function dP(t){const e=await iP(t),r=Rr().gapi;return ee(r,t,"internal-error"),e.open({where:document.body,url:uP(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lP,dontclear:!0},n=>new Promise(async(i,o)=>{await n.restyle({setHideOnLeave:!1});const s=_r(t,"network-request-failed"),l=Rr().setTimeout(()=>{o(s)},oP.get());function c(){Rr().clearTimeout(l),i(n)}n.ping(c).then(c,()=>{o(s)})}))}/**
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
 */const hP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fP=500,pP=600,mP="_blank",gP="http://localhost";class m_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vP(t,e,r,n=fP,i=pP){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString();let l="";const c=Object.assign(Object.assign({},hP),{width:n.toString(),height:i.toString(),top:o,left:s}),u=bt().toLowerCase();r&&(l=PE(u)?mP:r),CE(u)&&(e=e||gP,c.scrollbars="yes");const h=Object.entries(c).reduce((m,[E,S])=>`${m}${E}=${S},`,"");if(F1(u)&&l!=="_self")return yP(e||"",l),new m_(null);const p=window.open(e||"",l,h);ee(p,t,"popup-blocked");try{p.focus()}catch{}return new m_(p)}function yP(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const _P="__/auth/handler",wP="emulator/auth/handler",bP=encodeURIComponent("fac");async function g_(t,e,r,n,i,o){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:Ko,eventId:i};if(e instanceof Rm){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",cC(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))s[h]=p}if(e instanceof Qo){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(s.scopes=h.join(","))}t.tenantId&&(s.tid=t.tenantId);const l=s;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await t._getAppCheckToken(),u=c?`#${bP}=${encodeURIComponent(c)}`:"";return`${EP(t)}?${Ga(l).slice(1)}${u}`}function EP({config:t}){return t.emulator?Im(t,wP):`https://${t.authDomain}/${_P}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="webStorageSupport";class xP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=WE,this._completeRedirectFn=KR,this._overrideRedirectResult=qR}async _openPopup(e,r,n,i){var o;on((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await g_(e,r,n,Rf(),i);return vP(e,s,Pm())}async _openRedirect(e,r,n,i){await this._originValidation(e);const o=await g_(e,r,n,Rf(),i);return AR(o),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:i,promise:o}=this.eventManagers[r];return i?Promise.resolve(i):(on(o,"If manager is not set, promise should be"),o)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(e){const r=await dP(e),n=new QR(e);return r.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(lh,{type:lh},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[lh];s!==void 0&&r(!!s),cr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=eP(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return VE()||RE()||Sm()}}const TP=xP;var v_="@firebase/auth",y_="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function SP(t){Dr(new br("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:l}=n.options;ee(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:s,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ME(t)},u=new H1(n,i,o,c);return eR(u,r),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),Dr(new br("auth-internal",e=>{const r=Jn(e.getProvider("auth").getImmediate());return(n=>new IP(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),or(v_,y_,AP(t)),or(v_,y_,"esm2017")}/**
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
 */const kP=5*60,CP=fE("authIdTokenMaxAge")||kP;let __=null;const RP=t=>async e=>{const r=e&&await e.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>CP)return;const i=r==null?void 0:r.token;__!==i&&(__=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function PP(t=bm()){const e=Wo(t,"auth");if(e.isInitialized())return e.getImmediate();const r=Z1(t,{popupRedirectResolver:TP,persistence:[LR,xR,WE]}),n=fE("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(n,location.origin);if(location.origin===o.origin){const s=RP(o.toString());yR(r,s,()=>s(r.currentUser)),vR(r,l=>s(l))}}const i=dE("auth");return i&&tR(r,`http://${i}`),r}function NP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}W1({loadJS(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const o=_r("internal-error");o.customData=i,r(o)},n.type="text/javascript",n.charset="UTF-8",NP().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});SP("Browser");var w_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bi,ex;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function _(){}_.prototype=v.prototype,b.D=v.prototype,b.prototype=new _,b.prototype.constructor=b,b.C=function(T,A,k){for(var w=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)w[xe-2]=arguments[xe];return v.prototype[A].apply(T,w)}}function r(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,r),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,v,_){_||(_=0);var T=Array(16);if(typeof v=="string")for(var A=0;16>A;++A)T[A]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(A=0;16>A;++A)T[A]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=b.g[0],_=b.g[1],A=b.g[2];var k=b.g[3],w=v+(k^_&(A^k))+T[0]+3614090360&4294967295;v=_+(w<<7&4294967295|w>>>25),w=k+(A^v&(_^A))+T[1]+3905402710&4294967295,k=v+(w<<12&4294967295|w>>>20),w=A+(_^k&(v^_))+T[2]+606105819&4294967295,A=k+(w<<17&4294967295|w>>>15),w=_+(v^A&(k^v))+T[3]+3250441966&4294967295,_=A+(w<<22&4294967295|w>>>10),w=v+(k^_&(A^k))+T[4]+4118548399&4294967295,v=_+(w<<7&4294967295|w>>>25),w=k+(A^v&(_^A))+T[5]+1200080426&4294967295,k=v+(w<<12&4294967295|w>>>20),w=A+(_^k&(v^_))+T[6]+2821735955&4294967295,A=k+(w<<17&4294967295|w>>>15),w=_+(v^A&(k^v))+T[7]+4249261313&4294967295,_=A+(w<<22&4294967295|w>>>10),w=v+(k^_&(A^k))+T[8]+1770035416&4294967295,v=_+(w<<7&4294967295|w>>>25),w=k+(A^v&(_^A))+T[9]+2336552879&4294967295,k=v+(w<<12&4294967295|w>>>20),w=A+(_^k&(v^_))+T[10]+4294925233&4294967295,A=k+(w<<17&4294967295|w>>>15),w=_+(v^A&(k^v))+T[11]+2304563134&4294967295,_=A+(w<<22&4294967295|w>>>10),w=v+(k^_&(A^k))+T[12]+1804603682&4294967295,v=_+(w<<7&4294967295|w>>>25),w=k+(A^v&(_^A))+T[13]+4254626195&4294967295,k=v+(w<<12&4294967295|w>>>20),w=A+(_^k&(v^_))+T[14]+2792965006&4294967295,A=k+(w<<17&4294967295|w>>>15),w=_+(v^A&(k^v))+T[15]+1236535329&4294967295,_=A+(w<<22&4294967295|w>>>10),w=v+(A^k&(_^A))+T[1]+4129170786&4294967295,v=_+(w<<5&4294967295|w>>>27),w=k+(_^A&(v^_))+T[6]+3225465664&4294967295,k=v+(w<<9&4294967295|w>>>23),w=A+(v^_&(k^v))+T[11]+643717713&4294967295,A=k+(w<<14&4294967295|w>>>18),w=_+(k^v&(A^k))+T[0]+3921069994&4294967295,_=A+(w<<20&4294967295|w>>>12),w=v+(A^k&(_^A))+T[5]+3593408605&4294967295,v=_+(w<<5&4294967295|w>>>27),w=k+(_^A&(v^_))+T[10]+38016083&4294967295,k=v+(w<<9&4294967295|w>>>23),w=A+(v^_&(k^v))+T[15]+3634488961&4294967295,A=k+(w<<14&4294967295|w>>>18),w=_+(k^v&(A^k))+T[4]+3889429448&4294967295,_=A+(w<<20&4294967295|w>>>12),w=v+(A^k&(_^A))+T[9]+568446438&4294967295,v=_+(w<<5&4294967295|w>>>27),w=k+(_^A&(v^_))+T[14]+3275163606&4294967295,k=v+(w<<9&4294967295|w>>>23),w=A+(v^_&(k^v))+T[3]+4107603335&4294967295,A=k+(w<<14&4294967295|w>>>18),w=_+(k^v&(A^k))+T[8]+1163531501&4294967295,_=A+(w<<20&4294967295|w>>>12),w=v+(A^k&(_^A))+T[13]+2850285829&4294967295,v=_+(w<<5&4294967295|w>>>27),w=k+(_^A&(v^_))+T[2]+4243563512&4294967295,k=v+(w<<9&4294967295|w>>>23),w=A+(v^_&(k^v))+T[7]+1735328473&4294967295,A=k+(w<<14&4294967295|w>>>18),w=_+(k^v&(A^k))+T[12]+2368359562&4294967295,_=A+(w<<20&4294967295|w>>>12),w=v+(_^A^k)+T[5]+4294588738&4294967295,v=_+(w<<4&4294967295|w>>>28),w=k+(v^_^A)+T[8]+2272392833&4294967295,k=v+(w<<11&4294967295|w>>>21),w=A+(k^v^_)+T[11]+1839030562&4294967295,A=k+(w<<16&4294967295|w>>>16),w=_+(A^k^v)+T[14]+4259657740&4294967295,_=A+(w<<23&4294967295|w>>>9),w=v+(_^A^k)+T[1]+2763975236&4294967295,v=_+(w<<4&4294967295|w>>>28),w=k+(v^_^A)+T[4]+1272893353&4294967295,k=v+(w<<11&4294967295|w>>>21),w=A+(k^v^_)+T[7]+4139469664&4294967295,A=k+(w<<16&4294967295|w>>>16),w=_+(A^k^v)+T[10]+3200236656&4294967295,_=A+(w<<23&4294967295|w>>>9),w=v+(_^A^k)+T[13]+681279174&4294967295,v=_+(w<<4&4294967295|w>>>28),w=k+(v^_^A)+T[0]+3936430074&4294967295,k=v+(w<<11&4294967295|w>>>21),w=A+(k^v^_)+T[3]+3572445317&4294967295,A=k+(w<<16&4294967295|w>>>16),w=_+(A^k^v)+T[6]+76029189&4294967295,_=A+(w<<23&4294967295|w>>>9),w=v+(_^A^k)+T[9]+3654602809&4294967295,v=_+(w<<4&4294967295|w>>>28),w=k+(v^_^A)+T[12]+3873151461&4294967295,k=v+(w<<11&4294967295|w>>>21),w=A+(k^v^_)+T[15]+530742520&4294967295,A=k+(w<<16&4294967295|w>>>16),w=_+(A^k^v)+T[2]+3299628645&4294967295,_=A+(w<<23&4294967295|w>>>9),w=v+(A^(_|~k))+T[0]+4096336452&4294967295,v=_+(w<<6&4294967295|w>>>26),w=k+(_^(v|~A))+T[7]+1126891415&4294967295,k=v+(w<<10&4294967295|w>>>22),w=A+(v^(k|~_))+T[14]+2878612391&4294967295,A=k+(w<<15&4294967295|w>>>17),w=_+(k^(A|~v))+T[5]+4237533241&4294967295,_=A+(w<<21&4294967295|w>>>11),w=v+(A^(_|~k))+T[12]+1700485571&4294967295,v=_+(w<<6&4294967295|w>>>26),w=k+(_^(v|~A))+T[3]+2399980690&4294967295,k=v+(w<<10&4294967295|w>>>22),w=A+(v^(k|~_))+T[10]+4293915773&4294967295,A=k+(w<<15&4294967295|w>>>17),w=_+(k^(A|~v))+T[1]+2240044497&4294967295,_=A+(w<<21&4294967295|w>>>11),w=v+(A^(_|~k))+T[8]+1873313359&4294967295,v=_+(w<<6&4294967295|w>>>26),w=k+(_^(v|~A))+T[15]+4264355552&4294967295,k=v+(w<<10&4294967295|w>>>22),w=A+(v^(k|~_))+T[6]+2734768916&4294967295,A=k+(w<<15&4294967295|w>>>17),w=_+(k^(A|~v))+T[13]+1309151649&4294967295,_=A+(w<<21&4294967295|w>>>11),w=v+(A^(_|~k))+T[4]+4149444226&4294967295,v=_+(w<<6&4294967295|w>>>26),w=k+(_^(v|~A))+T[11]+3174756917&4294967295,k=v+(w<<10&4294967295|w>>>22),w=A+(v^(k|~_))+T[2]+718787259&4294967295,A=k+(w<<15&4294967295|w>>>17),w=_+(k^(A|~v))+T[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(A+(w<<21&4294967295|w>>>11))&4294967295,b.g[2]=b.g[2]+A&4294967295,b.g[3]=b.g[3]+k&4294967295}n.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var _=v-this.blockSize,T=this.B,A=this.h,k=0;k<v;){if(A==0)for(;k<=_;)i(this,b,k),k+=this.blockSize;if(typeof b=="string"){for(;k<v;)if(T[A++]=b.charCodeAt(k++),A==this.blockSize){i(this,T),A=0;break}}else for(;k<v;)if(T[A++]=b[k++],A==this.blockSize){i(this,T),A=0;break}}this.h=A,this.o+=v},n.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var _=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=_&255,_/=256;for(this.u(b),b=Array(16),v=_=0;4>v;++v)for(var T=0;32>T;T+=8)b[_++]=this.g[v]>>>T&255;return b};function o(b,v){var _=l;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=v(b)}function s(b,v){this.h=v;for(var _=[],T=!0,A=b.length-1;0<=A;A--){var k=b[A]|0;T&&k==v||(_[A]=k,T=!1)}this.g=_}var l={};function c(b){return-128<=b&&128>b?o(b,function(v){return new s([v|0],0>v?-1:0)}):new s([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return O(u(-b));for(var v=[],_=1,T=0;b>=_;T++)v[T]=b/_|0,_*=4294967296;return new s(v,0)}function h(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return O(h(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(v,8)),T=p,A=0;A<b.length;A+=8){var k=Math.min(8,b.length-A),w=parseInt(b.substring(A,A+k),v);8>k?(k=u(Math.pow(v,k)),T=T.j(k).add(u(w))):(T=T.j(_),T=T.add(u(w)))}return T}var p=c(0),m=c(1),E=c(16777216);t=s.prototype,t.m=function(){if(N(this))return-O(this).m();for(var b=0,v=1,_=0;_<this.g.length;_++){var T=this.i(_);b+=(0<=T?T:4294967296+T)*v,v*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(S(this))return"0";if(N(this))return"-"+O(this).toString(b);for(var v=u(Math.pow(b,6)),_=this,T="";;){var A=L(_,v).g;_=x(_,A.j(v));var k=((0<_.g.length?_.g[0]:_.h)>>>0).toString(b);if(_=A,S(_))return k+T;for(;6>k.length;)k="0"+k;T=k+T}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function S(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function N(b){return b.h==-1}t.l=function(b){return b=x(this,b),N(b)?-1:S(b)?0:1};function O(b){for(var v=b.g.length,_=[],T=0;T<v;T++)_[T]=~b.g[T];return new s(_,~b.h).add(m)}t.abs=function(){return N(this)?O(this):this},t.add=function(b){for(var v=Math.max(this.g.length,b.g.length),_=[],T=0,A=0;A<=v;A++){var k=T+(this.i(A)&65535)+(b.i(A)&65535),w=(k>>>16)+(this.i(A)>>>16)+(b.i(A)>>>16);T=w>>>16,k&=65535,w&=65535,_[A]=w<<16|k}return new s(_,_[_.length-1]&-2147483648?-1:0)};function x(b,v){return b.add(O(v))}t.j=function(b){if(S(this)||S(b))return p;if(N(this))return N(b)?O(this).j(O(b)):O(O(this).j(b));if(N(b))return O(this.j(O(b)));if(0>this.l(E)&&0>b.l(E))return u(this.m()*b.m());for(var v=this.g.length+b.g.length,_=[],T=0;T<2*v;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<b.g.length;A++){var k=this.i(T)>>>16,w=this.i(T)&65535,xe=b.i(A)>>>16,Qt=b.i(A)&65535;_[2*T+2*A]+=w*Qt,y(_,2*T+2*A),_[2*T+2*A+1]+=k*Qt,y(_,2*T+2*A+1),_[2*T+2*A+1]+=w*xe,y(_,2*T+2*A+1),_[2*T+2*A+2]+=k*xe,y(_,2*T+2*A+2)}for(T=0;T<v;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=v;T<2*v;T++)_[T]=0;return new s(_,0)};function y(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function I(b,v){this.g=b,this.h=v}function L(b,v){if(S(v))throw Error("division by zero");if(S(b))return new I(p,p);if(N(b))return v=L(O(b),v),new I(O(v.g),O(v.h));if(N(v))return v=L(b,O(v)),new I(O(v.g),v.h);if(30<b.g.length){if(N(b)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var _=m,T=v;0>=T.l(b);)_=j(_),T=j(T);var A=B(_,1),k=B(T,1);for(T=B(T,2),_=B(_,2);!S(T);){var w=k.add(T);0>=w.l(b)&&(A=A.add(_),k=w),T=B(T,1),_=B(_,1)}return v=x(b,A.j(v)),new I(A,v)}for(A=p;0<=b.l(v);){for(_=Math.max(1,Math.floor(b.m()/v.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),k=u(_),w=k.j(v);N(w)||0<w.l(b);)_-=T,k=u(_),w=k.j(v);S(k)&&(k=m),A=A.add(k),b=x(b,w)}return new I(A,b)}t.A=function(b){return L(this,b).h},t.and=function(b){for(var v=Math.max(this.g.length,b.g.length),_=[],T=0;T<v;T++)_[T]=this.i(T)&b.i(T);return new s(_,this.h&b.h)},t.or=function(b){for(var v=Math.max(this.g.length,b.g.length),_=[],T=0;T<v;T++)_[T]=this.i(T)|b.i(T);return new s(_,this.h|b.h)},t.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),_=[],T=0;T<v;T++)_[T]=this.i(T)^b.i(T);return new s(_,this.h^b.h)};function j(b){for(var v=b.g.length+1,_=[],T=0;T<v;T++)_[T]=b.i(T)<<1|b.i(T-1)>>>31;return new s(_,b.h)}function B(b,v){var _=v>>5;v%=32;for(var T=b.g.length-_,A=[],k=0;k<T;k++)A[k]=0<v?b.i(k+_)>>>v|b.i(k+_+1)<<32-v:b.i(k+_);return new s(A,b.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,ex=n,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=u,s.fromString=h,bi=s}).apply(typeof w_<"u"?w_:typeof self<"u"?self:typeof window<"u"?window:{});var Kl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tx,Fs,rx,xc,Df,nx,ix,ox;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,f){return a==Array.prototype||a==Object.prototype||(a[d]=f.value),a};function r(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Kl=="object"&&Kl];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=r(this);function i(a,d){if(d)e:{var f=n;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in f))break e;f=f[C]}a=a[a.length-1],g=f[a],d=d(g),d!=g&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}function o(a,d){a instanceof String&&(a+="");var f=0,g=!1,C={next:function(){if(!g&&f<a.length){var D=f++;return{value:d(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(a){return a||function(){return o(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},l=this||self;function c(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,f){return a.call.apply(a.bind,arguments)}function p(a,d,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(d,C)}}return function(){return a.apply(d,arguments)}}function m(a,d,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,m.apply(null,arguments)}function E(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function S(a,d){function f(){}f.prototype=d.prototype,a.aa=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,C,D){for(var q=Array(arguments.length-2),we=2;we<arguments.length;we++)q[we-2]=arguments[we];return d.prototype[C].apply(g,q)}}function N(a){const d=a.length;if(0<d){const f=Array(d);for(let g=0;g<d;g++)f[g]=a[g];return f}return[]}function O(a,d){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const C=a.length||0,D=g.length||0;a.length=C+D;for(let q=0;q<D;q++)a[C+q]=g[q]}else a.push(g)}}class x{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function y(a){return/^[\s\xa0]*$/.test(a)}function I(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function L(a){return L[" "](a),a}L[" "]=function(){};var j=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function B(a,d,f){for(const g in a)d.call(f,a[g],g,a)}function b(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function v(a){const d={};for(const f in a)d[f]=a[f];return d}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,d){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)a[f]=g[f];for(let D=0;D<_.length;D++)f=_[D],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function A(a){var d=1;a=a.split(":");const f=[];for(;0<d&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function k(a){l.setTimeout(()=>{throw a},0)}function w(){var a=Z;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class xe{constructor(){this.h=this.g=null}add(d,f){const g=Qt.get();g.set(d,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Qt=new x(()=>new Yt,a=>a.reset());class Yt{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ne,z=!1,Z=new xe,ie=()=>{const a=l.Promise.resolve(void 0);Ne=()=>{a.then(_e)}};var _e=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(f){k(f)}var d=Qt;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}z=!1};function ge(){this.s=this.s,this.C=this.C}ge.prototype.s=!1,ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ce(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var Xt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,d),l.removeEventListener("test",f,d)}catch{}return a}();function Jt(a,d){if(Ce.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(j){e:{try{L(d.nodeName);var C=!0;break e}catch{}C=!1}C||(d=null)}}else f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ur[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Jt.aa.h.call(this)}}S(Jt,Ce);var ur={2:"touch",3:"pen",4:"mouse"};Jt.prototype.h=function(){Jt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Zt="closure_listenable_"+(1e6*Math.random()|0),cl=0;function ud(a,d,f,g,C){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!g,this.ha=C,this.key=++cl,this.da=this.fa=!1}function Hi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function xr(a){this.src=a,this.g={},this.h=0}xr.prototype.add=function(a,d,f,g,C){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var q=is(a,d,g,C);return-1<q?(d=a[q],f||(d.fa=!1)):(d=new ud(d,this.src,D,!!g,C),d.fa=f,a.push(d)),d};function ns(a,d){var f=d.type;if(f in a.g){var g=a.g[f],C=Array.prototype.indexOf.call(g,d,void 0),D;(D=0<=C)&&Array.prototype.splice.call(g,C,1),D&&(Hi(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function is(a,d,f,g){for(var C=0;C<a.length;++C){var D=a[C];if(!D.da&&D.listener==d&&D.capture==!!f&&D.ha==g)return C}return-1}var os="closure_lm_"+(1e6*Math.random()|0),ss={};function ul(a,d,f,g,C){if(Array.isArray(d)){for(var D=0;D<d.length;D++)ul(a,d[D],f,g,C);return null}return f=fn(f),a&&a[Zt]?a.K(d,f,u(g)?!!g.capture:!1,C):dl(a,d,f,!1,g,C)}function dl(a,d,f,g,C,D){if(!d)throw Error("Invalid event type");var q=u(C)?!!C.capture:!!C,we=Nt(a);if(we||(a[os]=we=new xr(a)),f=we.add(d,f,g,q,D),f.proxy)return f;if(g=dd(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Xt||(C=q),C===void 0&&(C=!1),a.addEventListener(d.toString(),g,C);else if(a.attachEvent)a.attachEvent(X(d.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function dd(){function a(f){return d.call(a.src,a.listener,f)}const d=oe;return a}function hl(a,d,f,g,C){if(Array.isArray(d))for(var D=0;D<d.length;D++)hl(a,d[D],f,g,C);else g=u(g)?!!g.capture:!!g,f=fn(f),a&&a[Zt]?(a=a.i,d=String(d).toString(),d in a.g&&(D=a.g[d],f=is(D,f,g,C),-1<f&&(Hi(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[d],a.h--)))):a&&(a=Nt(a))&&(d=a.g[d.toString()],a=-1,d&&(a=is(d,f,g,C)),(f=-1<a?d[a]:null)&&V(f))}function V(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[Zt])ns(d.i,a);else{var f=a.type,g=a.proxy;d.removeEventListener?d.removeEventListener(f,g,a.capture):d.detachEvent?d.detachEvent(X(f),g):d.addListener&&d.removeListener&&d.removeListener(g),(f=Nt(d))?(ns(f,a),f.h==0&&(f.src=null,d[os]=null)):Hi(a)}}}function X(a){return a in ss?ss[a]:ss[a]="on"+a}function oe(a,d){if(a.da)a=!0;else{d=new Jt(d,this);var f=a.listener,g=a.ha||a.src;a.fa&&V(a),a=f.call(g,d)}return a}function Nt(a){return a=a[os],a instanceof xr?a:null}var be="__closure_events_fn_"+(1e9*Math.random()>>>0);function fn(a){return typeof a=="function"?a:(a[be]||(a[be]=function(d){return a.handleEvent(d)}),a[be])}function Re(){ge.call(this),this.i=new xr(this),this.M=this,this.F=null}S(Re,ge),Re.prototype[Zt]=!0,Re.prototype.removeEventListener=function(a,d,f,g){hl(this,a,d,f,g)};function de(a,d){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=d.type||d,typeof d=="string")d=new Ce(d,a);else if(d instanceof Ce)d.target=d.target||a;else{var C=d;d=new Ce(g,a),T(d,C)}if(C=!0,f)for(var D=f.length-1;0<=D;D--){var q=d.g=f[D];C=fl(q,g,!0,d)&&C}if(q=d.g=a,C=fl(q,g,!0,d)&&C,C=fl(q,g,!1,d)&&C,f)for(D=0;D<f.length;D++)q=d.g=f[D],C=fl(q,g,!1,d)&&C}Re.prototype.N=function(){if(Re.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var f=a.g[d],g=0;g<f.length;g++)Hi(f[g]);delete a.g[d],a.h--}}this.F=null},Re.prototype.K=function(a,d,f,g){return this.i.add(String(a),d,!1,f,g)},Re.prototype.L=function(a,d,f,g){return this.i.add(String(a),d,!0,f,g)};function fl(a,d,f,g){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var C=!0,D=0;D<d.length;++D){var q=d[D];if(q&&!q.da&&q.capture==f){var we=q.listener,tt=q.ha||q.src;q.fa&&ns(a.i,q),C=we.call(tt,g)!==!1&&C}}return C&&!g.defaultPrevented}function Dg(a,d,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function Lg(a){a.g=Dg(()=>{a.g=null,a.i&&(a.i=!1,Lg(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class fI extends ge{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Lg(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function as(a){ge.call(this),this.h=a,this.g={}}S(as,ge);var Vg=[];function Mg(a){B(a.g,function(d,f){this.g.hasOwnProperty(f)&&V(d)},a),a.g={}}as.prototype.N=function(){as.aa.N.call(this),Mg(this)},as.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hd=l.JSON.stringify,pI=l.JSON.parse,mI=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function fd(){}fd.prototype.h=null;function $g(a){return a.h||(a.h=a.i())}function Fg(){}var ls={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pd(){Ce.call(this,"d")}S(pd,Ce);function md(){Ce.call(this,"c")}S(md,Ce);var ri={},Ug=null;function pl(){return Ug=Ug||new Re}ri.La="serverreachability";function jg(a){Ce.call(this,ri.La,a)}S(jg,Ce);function cs(a){const d=pl();de(d,new jg(d))}ri.STAT_EVENT="statevent";function zg(a,d){Ce.call(this,ri.STAT_EVENT,a),this.stat=d}S(zg,Ce);function Et(a){const d=pl();de(d,new zg(d,a))}ri.Ma="timingevent";function Bg(a,d){Ce.call(this,ri.Ma,a),this.size=d}S(Bg,Ce);function us(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function ds(){this.g=!0}ds.prototype.xa=function(){this.g=!1};function gI(a,d,f,g,C,D){a.info(function(){if(a.g)if(D)for(var q="",we=D.split("&"),tt=0;tt<we.length;tt++){var fe=we[tt].split("=");if(1<fe.length){var dt=fe[0];fe=fe[1];var ht=dt.split("_");q=2<=ht.length&&ht[1]=="type"?q+(dt+"="+fe+"&"):q+(dt+"=redacted&")}}else q=null;else q=D;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+d+`
`+f+`
`+q})}function vI(a,d,f,g,C,D,q){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+d+`
`+f+`
`+D+" "+q})}function Wi(a,d,f,g){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+_I(a,f)+(g?" "+g:"")})}function yI(a,d){a.info(function(){return"TIMEOUT: "+d})}ds.prototype.info=function(){};function _I(a,d){if(!a.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var D=C[0];if(D!="noop"&&D!="stop"&&D!="close")for(var q=1;q<C.length;q++)C[q]=""}}}}return hd(f)}catch{return d}}var ml={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gd;function gl(){}S(gl,fd),gl.prototype.g=function(){return new XMLHttpRequest},gl.prototype.i=function(){return{}},gd=new gl;function pn(a,d,f,g){this.j=a,this.i=d,this.l=f,this.R=g||1,this.U=new as(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hg}function Hg(){this.i=null,this.g="",this.h=!1}var Wg={},vd={};function yd(a,d,f){a.L=1,a.v=wl(Mr(d)),a.m=f,a.P=!0,Kg(a,null)}function Kg(a,d){a.F=Date.now(),vl(a),a.A=Mr(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),av(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Hg,a.g=Iv(a.j,f?d:null,!a.m),0<a.O&&(a.M=new fI(m(a.Y,a,a.g),a.O)),d=a.U,f=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Vg[0]=C.toString()),C=Vg);for(var D=0;D<C.length;D++){var q=ul(f,C[D],g||d.handleEvent,!1,d.h||d);if(!q)break;d.g[q.key]=q}d=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),cs(),gI(a.i,a.u,a.A,a.l,a.R,a.m)}pn.prototype.ca=function(a){a=a.target;const d=this.M;d&&$r(a)==3?d.j():this.Y(a)},pn.prototype.Y=function(a){try{if(a==this.g)e:{const ht=$r(this.g);var d=this.g.Ba();const Qi=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||pv(this.g)))){this.J||ht!=4||d==7||(d==8||0>=Qi?cs(3):cs(2)),_d(this);var f=this.g.Z();this.X=f;t:if(Gg(this)){var g=pv(this.g);a="";var C=g.length,D=$r(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ni(this),hs(this);var q="";break t}this.h.i=new l.TextDecoder}for(d=0;d<C;d++)this.h.h=!0,a+=this.h.i.decode(g[d],{stream:!(D&&d==C-1)});g.length=0,this.h.g+=a,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=f==200,vI(this.i,this.u,this.A,this.l,this.R,ht,f),this.o){if(this.T&&!this.K){t:{if(this.g){var we,tt=this.g;if((we=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(we)){var fe=we;break t}}fe=null}if(f=fe)Wi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wd(this,f);else{this.o=!1,this.s=3,Et(12),ni(this),hs(this);break e}}if(this.P){f=!0;let dr;for(;!this.J&&this.C<q.length;)if(dr=wI(this,q),dr==vd){ht==4&&(this.s=4,Et(14),f=!1),Wi(this.i,this.l,null,"[Incomplete Response]");break}else if(dr==Wg){this.s=4,Et(15),Wi(this.i,this.l,q,"[Invalid Chunk]"),f=!1;break}else Wi(this.i,this.l,dr,null),wd(this,dr);if(Gg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||q.length!=0||this.h.h||(this.s=1,Et(16),f=!1),this.o=this.o&&f,!f)Wi(this.i,this.l,q,"[Invalid Chunked Response]"),ni(this),hs(this);else if(0<q.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Ad(dt),dt.M=!0,Et(11))}}else Wi(this.i,this.l,q,null),wd(this,q);ht==4&&ni(this),this.o&&!this.J&&(ht==4?bv(this.j,this):(this.o=!1,vl(this)))}else MI(this.g),f==400&&0<q.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),ni(this),hs(this)}}}catch{}finally{}};function Gg(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function wI(a,d){var f=a.C,g=d.indexOf(`
`,f);return g==-1?vd:(f=Number(d.substring(f,g)),isNaN(f)?Wg:(g+=1,g+f>d.length?vd:(d=d.slice(g,g+f),a.C=g+f,d)))}pn.prototype.cancel=function(){this.J=!0,ni(this)};function vl(a){a.S=Date.now()+a.I,Qg(a,a.I)}function Qg(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=us(m(a.ba,a),d)}function _d(a){a.B&&(l.clearTimeout(a.B),a.B=null)}pn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(yI(this.i,this.A),this.L!=2&&(cs(),Et(17)),ni(this),this.s=2,hs(this)):Qg(this,this.S-a)};function hs(a){a.j.G==0||a.J||bv(a.j,a)}function ni(a){_d(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Mg(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function wd(a,d){try{var f=a.j;if(f.G!=0&&(f.g==a||bd(f.h,a))){if(!a.K&&bd(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Al(f),Tl(f);else break e;Id(f),Et(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=us(m(f.Za,f),6e3));if(1>=Jg(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else oi(f,11)}else if((a.K||f.g==a)&&Al(f),!y(d))for(C=f.Da.g.parse(d),d=0;d<C.length;d++){let fe=C[d];if(f.T=fe[0],fe=fe[1],f.G==2)if(fe[0]=="c"){f.K=fe[1],f.ia=fe[2];const dt=fe[3];dt!=null&&(f.la=dt,f.j.info("VER="+f.la));const ht=fe[4];ht!=null&&(f.Aa=ht,f.j.info("SVER="+f.Aa));const Qi=fe[5];Qi!=null&&typeof Qi=="number"&&0<Qi&&(g=1.5*Qi,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const dr=a.g;if(dr){const kl=dr.g?dr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(kl){var D=g.h;D.g||kl.indexOf("spdy")==-1&&kl.indexOf("quic")==-1&&kl.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Ed(D,D.h),D.h=null))}if(g.D){const Sd=dr.g?dr.g.getResponseHeader("X-HTTP-Session-Id"):null;Sd&&(g.ya=Sd,Te(g.I,g.D,Sd))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var q=a;if(g.qa=Tv(g,g.J?g.ia:null,g.W),q.K){Zg(g.h,q);var we=q,tt=g.L;tt&&(we.I=tt),we.B&&(_d(we),vl(we)),g.g=q}else _v(g);0<f.i.length&&Il(f)}else fe[0]!="stop"&&fe[0]!="close"||oi(f,7);else f.G==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?oi(f,7):Td(f):fe[0]!="noop"&&f.l&&f.l.ta(fe),f.v=0)}}cs(4)}catch{}}var bI=class{constructor(a,d){this.g=a,this.map=d}};function Yg(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Jg(a){return a.h?1:a.g?a.g.size:0}function bd(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Ed(a,d){a.g?a.g.add(d):a.h=d}function Zg(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Yg.prototype.cancel=function(){if(this.i=ev(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ev(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.D);return d}return N(a.i)}function EI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var d=[],f=a.length,g=0;g<f;g++)d.push(a[g]);return d}d=[],f=0;for(g in a)d[f++]=a[g];return d}function xI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var d=[];a=a.length;for(var f=0;f<a;f++)d.push(f);return d}d=[],f=0;for(const g in a)d[f++]=g;return d}}}function tv(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var f=xI(a),g=EI(a),C=g.length,D=0;D<C;D++)d.call(void 0,g[D],f&&f[D],a)}var rv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function TI(a,d){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),C=null;if(0<=g){var D=a[f].substring(0,g);C=a[f].substring(g+1)}else D=a[f];d(D,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function ii(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ii){this.h=a.h,yl(this,a.j),this.o=a.o,this.g=a.g,_l(this,a.s),this.l=a.l;var d=a.i,f=new ms;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),nv(this,f),this.m=a.m}else a&&(d=String(a).match(rv))?(this.h=!1,yl(this,d[1]||"",!0),this.o=fs(d[2]||""),this.g=fs(d[3]||"",!0),_l(this,d[4]),this.l=fs(d[5]||"",!0),nv(this,d[6]||"",!0),this.m=fs(d[7]||"")):(this.h=!1,this.i=new ms(null,this.h))}ii.prototype.toString=function(){var a=[],d=this.j;d&&a.push(ps(d,iv,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(ps(d,iv,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ps(f,f.charAt(0)=="/"?SI:AI,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ps(f,CI)),a.join("")};function Mr(a){return new ii(a)}function yl(a,d,f){a.j=f?fs(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function _l(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function nv(a,d,f){d instanceof ms?(a.i=d,RI(a.i,a.h)):(f||(d=ps(d,kI)),a.i=new ms(d,a.h))}function Te(a,d,f){a.i.set(d,f)}function wl(a){return Te(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function fs(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ps(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,II),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function II(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var iv=/[#\/\?@]/g,AI=/[#\?:]/g,SI=/[#\?]/g,kI=/[#\?@]/g,CI=/#/g;function ms(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function mn(a){a.g||(a.g=new Map,a.h=0,a.i&&TI(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}t=ms.prototype,t.add=function(a,d){mn(this),this.i=null,a=Ki(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function ov(a,d){mn(a),d=Ki(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function sv(a,d){return mn(a),d=Ki(a,d),a.g.has(d)}t.forEach=function(a,d){mn(this),this.g.forEach(function(f,g){f.forEach(function(C){a.call(d,C,g,this)},this)},this)},t.na=function(){mn(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let g=0;g<d.length;g++){const C=a[g];for(let D=0;D<C.length;D++)f.push(d[g])}return f},t.V=function(a){mn(this);let d=[];if(typeof a=="string")sv(this,a)&&(d=d.concat(this.g.get(Ki(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)d=d.concat(a[f])}return d},t.set=function(a,d){return mn(this),this.i=null,a=Ki(this,a),sv(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function av(a,d,f){ov(a,d),0<f.length&&(a.i=null,a.g.set(Ki(a,d),N(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var g=d[f];const D=encodeURIComponent(String(g)),q=this.V(g);for(g=0;g<q.length;g++){var C=D;q[g]!==""&&(C+="="+encodeURIComponent(String(q[g]))),a.push(C)}}return this.i=a.join("&")};function Ki(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function RI(a,d){d&&!a.j&&(mn(a),a.i=null,a.g.forEach(function(f,g){var C=g.toLowerCase();g!=C&&(ov(this,g),av(this,C,f))},a)),a.j=d}function PI(a,d){const f=new ds;if(l.Image){const g=new Image;g.onload=E(gn,f,"TestLoadImage: loaded",!0,d,g),g.onerror=E(gn,f,"TestLoadImage: error",!1,d,g),g.onabort=E(gn,f,"TestLoadImage: abort",!1,d,g),g.ontimeout=E(gn,f,"TestLoadImage: timeout",!1,d,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else d(!1)}function NI(a,d){const f=new ds,g=new AbortController,C=setTimeout(()=>{g.abort(),gn(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(C),D.ok?gn(f,"TestPingServer: ok",!0,d):gn(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(C),gn(f,"TestPingServer: error",!1,d)})}function gn(a,d,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function OI(){this.g=new mI}function DI(a,d,f){const g=f||"";try{tv(a,function(C,D){let q=C;u(C)&&(q=hd(C)),d.push(g+D+"="+encodeURIComponent(q))})}catch(C){throw d.push(g+"type="+encodeURIComponent("_badmap")),C}}function bl(a){this.l=a.Ub||null,this.j=a.eb||!1}S(bl,fd),bl.prototype.g=function(){return new El(this.l,this.j)},bl.prototype.i=function(a){return function(){return a}}({});function El(a,d){Re.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(El,Re),t=El.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,vs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,vs(this)),this.g&&(this.readyState=3,vs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;lv(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function lv(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?gs(this):vs(this),this.readyState==3&&lv(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,gs(this))},t.Qa=function(a){this.g&&(this.response=a,gs(this))},t.ga=function(){this.g&&gs(this)};function gs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,vs(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function vs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(El.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function cv(a){let d="";return B(a,function(f,g){d+=g,d+=":",d+=f,d+=`\r
`}),d}function xd(a,d,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=cv(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Te(a,d,f))}function Me(a){Re.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Me,Re);var LI=/^https?$/i,VI=["POST","PUT"];t=Me.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gd.g(),this.v=this.o?$g(this.o):$g(gd),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(D){uv(this,D);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())f.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(VI,d,void 0))||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,q]of f)this.g.setRequestHeader(D,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fv(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){uv(this,D)}};function uv(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,dv(a),xl(a)}function dv(a){a.A||(a.A=!0,de(a,"complete"),de(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,de(this,"complete"),de(this,"abort"),xl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xl(this,!0)),Me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?hv(this):this.bb())},t.bb=function(){hv(this)};function hv(a){if(a.h&&typeof s<"u"&&(!a.v[1]||$r(a)!=4||a.Z()!=2)){if(a.u&&$r(a)==4)Dg(a.Ea,0,a);else if(de(a,"readystatechange"),$r(a)==4){a.h=!1;try{const q=a.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var g;if(g=q===0){var C=String(a.D).match(rv)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),g=!LI.test(C?C.toLowerCase():"")}f=g}if(f)de(a,"complete"),de(a,"success");else{a.m=6;try{var D=2<$r(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",dv(a)}}finally{xl(a)}}}}function xl(a,d){if(a.g){fv(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||de(a,"ready");try{f.onreadystatechange=g}catch{}}}function fv(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function $r(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<$r(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),pI(d)}};function pv(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function MI(a){const d={};a=(a.g&&2<=$r(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var f=A(a[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=d[C]||[];d[C]=D,D.push(f)}b(d,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ys(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function mv(a){this.Aa=0,this.i=[],this.j=new ds,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ys("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ys("baseRetryDelayMs",5e3,a),this.cb=ys("retryDelaySeedMs",1e4,a),this.Wa=ys("forwardChannelMaxRetries",2,a),this.wa=ys("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Yg(a&&a.concurrentRequestLimit),this.Da=new OI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=mv.prototype,t.la=8,t.G=1,t.connect=function(a,d,f,g){Et(0),this.W=a,this.H=d||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Tv(this,null,this.W),Il(this)};function Td(a){if(gv(a),a.G==3){var d=a.U++,f=Mr(a.I);if(Te(f,"SID",a.K),Te(f,"RID",d),Te(f,"TYPE","terminate"),_s(a,f),d=new pn(a,a.j,d),d.L=2,d.v=wl(Mr(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=d.v,f=!0),f||(d.g=Iv(d.j,null),d.g.ea(d.v)),d.F=Date.now(),vl(d)}xv(a)}function Tl(a){a.g&&(Ad(a),a.g.cancel(),a.g=null)}function gv(a){Tl(a),a.u&&(l.clearTimeout(a.u),a.u=null),Al(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Il(a){if(!Xg(a.h)&&!a.s){a.s=!0;var d=a.Ga;Ne||ie(),z||(Ne(),z=!0),Z.add(d,a),a.B=0}}function $I(a,d){return Jg(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=us(m(a.Ga,a,d),Ev(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new pn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=v(D),T(D,this.S)):D=this.S),this.m!==null||this.O||(C.H=D,D=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=yv(this,C,d),f=Mr(this.I),Te(f,"RID",a),Te(f,"CVER",22),this.D&&Te(f,"X-HTTP-Session-Id",this.D),_s(this,f),D&&(this.O?d="headers="+encodeURIComponent(String(cv(D)))+"&"+d:this.m&&xd(f,this.m,D)),Ed(this.h,C),this.Ua&&Te(f,"TYPE","init"),this.P?(Te(f,"$req",d),Te(f,"SID","null"),C.T=!0,yd(C,f,null)):yd(C,f,d),this.G=2}}else this.G==3&&(a?vv(this,a):this.i.length==0||Xg(this.h)||vv(this))};function vv(a,d){var f;d?f=d.l:f=a.U++;const g=Mr(a.I);Te(g,"SID",a.K),Te(g,"RID",f),Te(g,"AID",a.T),_s(a,g),a.m&&a.o&&xd(g,a.m,a.o),f=new pn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),d&&(a.i=d.D.concat(a.i)),d=yv(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ed(a.h,f),yd(f,g,d)}function _s(a,d){a.H&&B(a.H,function(f,g){Te(d,g,f)}),a.l&&tv({},function(f,g){Te(d,g,f)})}function yv(a,d,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var C=a.i;let D=-1;for(;;){const q=["count="+f];D==-1?0<f?(D=C[0].g,q.push("ofs="+D)):D=0:q.push("ofs="+D);let we=!0;for(let tt=0;tt<f;tt++){let fe=C[tt].g;const dt=C[tt].map;if(fe-=D,0>fe)D=Math.max(0,C[tt].g-100),we=!1;else try{DI(dt,q,"req"+fe+"_")}catch{g&&g(dt)}}if(we){g=q.join("&");break e}}}return a=a.i.splice(0,f),d.D=a,g}function _v(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Ne||ie(),z||(Ne(),z=!0),Z.add(d,a),a.v=0}}function Id(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=us(m(a.Fa,a),Ev(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,wv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=us(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Tl(this),wv(this))};function Ad(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function wv(a){a.g=new pn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Mr(a.qa);Te(d,"RID","rpc"),Te(d,"SID",a.K),Te(d,"AID",a.T),Te(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Te(d,"TO",a.ja),Te(d,"TYPE","xmlhttp"),_s(a,d),a.m&&a.o&&xd(d,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=wl(Mr(d)),f.m=null,f.P=!0,Kg(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Tl(this),Id(this),Et(19))};function Al(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function bv(a,d){var f=null;if(a.g==d){Al(a),Ad(a),a.g=null;var g=2}else if(bd(a.h,d))f=d.D,Zg(a.h,d),g=1;else return;if(a.G!=0){if(d.o)if(g==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var C=a.B;g=pl(),de(g,new Bg(g,f)),Il(a)}else _v(a);else if(C=d.s,C==3||C==0&&0<d.X||!(g==1&&$I(a,d)||g==2&&Id(a)))switch(f&&0<f.length&&(d=a.h,d.i=d.i.concat(f)),C){case 1:oi(a,5);break;case 4:oi(a,10);break;case 3:oi(a,6);break;default:oi(a,2)}}}function Ev(a,d){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*d}function oi(a,d){if(a.j.info("Error code "+d),d==2){var f=m(a.fb,a),g=a.Xa;const C=!g;g=new ii(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||yl(g,"https"),wl(g),C?PI(g.toString(),f):NI(g.toString(),f)}else Et(2);a.G=0,a.l&&a.l.sa(d),xv(a),gv(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function xv(a){if(a.G=0,a.ka=[],a.l){const d=ev(a.h);(d.length!=0||a.i.length!=0)&&(O(a.ka,d),O(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Tv(a,d,f){var g=f instanceof ii?Mr(f):new ii(f);if(g.g!="")d&&(g.g=d+"."+g.g),_l(g,g.s);else{var C=l.location;g=C.protocol,d=d?d+"."+C.hostname:C.hostname,C=+C.port;var D=new ii(null);g&&yl(D,g),d&&(D.g=d),C&&_l(D,C),f&&(D.l=f),g=D}return f=a.D,d=a.ya,f&&d&&Te(g,f,d),Te(g,"VER",a.la),_s(a,g),g}function Iv(a,d,f){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Me(new bl({eb:f})):new Me(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Av(){}t=Av.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Sl(){}Sl.prototype.g=function(a,d){return new Ut(a,d)};function Ut(a,d){Re.call(this),this.g=new mv(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!y(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!y(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Gi(this)}S(Ut,Re),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){Td(this.g)},Ut.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=hd(a),a=f);d.i.push(new bI(d.Ya++,a)),d.G==3&&Il(d)},Ut.prototype.N=function(){this.g.l=null,delete this.j,Td(this.g),delete this.g,Ut.aa.N.call(this)};function Sv(a){pd.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}S(Sv,pd);function kv(){md.call(this),this.status=1}S(kv,md);function Gi(a){this.g=a}S(Gi,Av),Gi.prototype.ua=function(){de(this.g,"a")},Gi.prototype.ta=function(a){de(this.g,new Sv(a))},Gi.prototype.sa=function(a){de(this.g,new kv)},Gi.prototype.ra=function(){de(this.g,"b")},Sl.prototype.createWebChannel=Sl.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,ox=function(){return new Sl},ix=function(){return pl()},nx=ri,Df={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ml.NO_ERROR=0,ml.TIMEOUT=8,ml.HTTP_ERROR=6,xc=ml,qg.COMPLETE="complete",rx=qg,Fg.EventType=ls,ls.OPEN="a",ls.CLOSE="b",ls.ERROR="c",ls.MESSAGE="d",Re.prototype.listen=Re.prototype.K,Fs=Fg,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,tx=Me}).apply(typeof Kl<"u"?Kl:typeof self<"u"?self:typeof window<"u"?window:{});const b_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Yo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new _m("@firebase/firestore");function ks(){return Pi.logLevel}function Y(t,...e){if(Pi.logLevel<=ce.DEBUG){const r=e.map(Om);Pi.debug(`Firestore (${Yo}): ${t}`,...r)}}function an(t,...e){if(Pi.logLevel<=ce.ERROR){const r=e.map(Om);Pi.error(`Firestore (${Yo}): ${t}`,...r)}}function Oo(t,...e){if(Pi.logLevel<=ce.WARN){const r=e.map(Om);Pi.warn(`Firestore (${Yo}): ${t}`,...r)}}function Om(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function te(t="Unexpected state"){const e=`FIRESTORE (${Yo}) INTERNAL ASSERTION FAILED: `+t;throw an(e),new Error(e)}function ye(t,e){t||te()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Vr{constructor(e,r){super(e,r),this.code=e,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sx{constructor(e,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class OP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,r){e.enqueueRetryable(()=>r(gt.UNAUTHENTICATED))}shutdown(){}}class DP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,r){this.changeListener=r,e.enqueueRetryable(()=>r(this.token.user))}shutdown(){this.changeListener=null}}class LP{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,r){ye(this.o===void 0);let n=this.i;const i=c=>this.i!==n?(n=this.i,r(c)):Promise.resolve();let o=new Ei;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ei,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const c=o;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ei)}},0),s()}getToken(){const e=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then(n=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(ye(typeof n.accessToken=="string"),new sx(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new gt(e)}}class VP{constructor(e,r,n){this.l=e,this.h=r,this.P=n,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class MP{constructor(e,r,n){this.l=e,this.h=r,this.P=n}getToken(){return Promise.resolve(new VP(this.l,this.h,this.P))}start(e,r){e.enqueueRetryable(()=>r(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $P{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,r){ye(this.o===void 0);const n=o=>{o.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,Y("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?r(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>n(o))};const i=o=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(r=>r?(ye(typeof r.token=="string"),this.R=r.token,new $P(r.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ax{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=UP(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<r&&(n+=e.charAt(i[o]%e.length))}return n}}function pe(t,e){return t<e?-1:t>e?1:0}function Do(t,e,r){return t.length===e.length&&t.every((n,i)=>r(n,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,r){if(this.seconds=e,this.nanoseconds=r,r<0)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(e<-62135596800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const r=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*r));return new Xe(r,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new Xe(0,0))}static max(){return new re(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,r,n){r===void 0?r=0:r>e.length&&te(),n===void 0?n=e.length-r:n>e.length-r&&te(),this.segments=e,this.offset=r,this.len=n}get length(){return this.len}isEqual(e){return ka.comparator(this,e)===0}child(e){const r=this.segments.slice(this.offset,this.limit());return e instanceof ka?e.forEach(n=>{r.push(n)}):r.push(e),this.construct(r)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}forEach(e){for(let r=this.offset,n=this.limit();r<n;r++)e(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,r){const n=Math.min(e.length,r.length);for(let i=0;i<n;i++){const o=e.get(i),s=r.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<r.length?-1:e.length>r.length?1:0}}class Ae extends ka{construct(e,r,n){return new Ae(e,r,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const r=[];for(const n of e){if(n.indexOf("//")>=0)throw new G(M.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);r.push(...n.split("/").filter(i=>i.length>0))}return new Ae(r)}static emptyPath(){return new Ae([])}}const jP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends ka{construct(e,r,n){return new ot(e,r,n)}static isValidIdentifier(e){return jP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const r=[];let n="",i=0;const o=()=>{if(n.length===0)throw new G(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(n),n=""};let s=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new G(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new G(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,i+=2}else l==="`"?(s=!s,i++):l!=="."||s?(n+=l,i++):(o(),i++)}if(o(),s)throw new G(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(r)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Ae.fromString(e))}static fromName(e){return new J(Ae.fromString(e).popFirst(5))}static empty(){return new J(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,r){return Ae.comparator(e.path,r.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Ae(e.slice()))}}function zP(t,e){const r=t.toTimestamp().seconds,n=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(n===1e9?new Xe(r+1,0):new Xe(r,n));return new qn(i,J.empty(),e)}function BP(t){return new qn(t.readTime,t.key,-1)}class qn{constructor(e,r,n){this.readTime=e,this.documentKey=r,this.largestBatchId=n}static min(){return new qn(re.min(),J.empty(),-1)}static max(){return new qn(re.max(),J.empty(),-1)}}function qP(t,e){let r=t.readTime.compareTo(e.readTime);return r!==0?r:(r=J.comparator(t.documentKey,e.documentKey),r!==0?r:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Ja(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==HP)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(r=>{this.isDone=!0,this.result=r,this.nextCallback&&this.nextCallback(r)},r=>{this.isDone=!0,this.error=r,this.catchCallback&&this.catchCallback(r)})}catch(e){return this.next(void 0,e)}next(e,r){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(r,this.error):this.wrapSuccess(e,this.result):new $((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(r,o).next(n,i)}})}toPromise(){return new Promise((e,r)=>{this.next(e,r)})}wrapUserFunction(e){try{const r=e();return r instanceof $?r:$.resolve(r)}catch(r){return $.reject(r)}}wrapSuccess(e,r){return e?this.wrapUserFunction(()=>e(r)):$.resolve(r)}wrapFailure(e,r){return e?this.wrapUserFunction(()=>e(r)):$.reject(r)}static resolve(e){return new $((r,n)=>{r(e)})}static reject(e){return new $((r,n)=>{n(e)})}static waitFor(e){return new $((r,n)=>{let i=0,o=0,s=!1;e.forEach(l=>{++i,l.next(()=>{++o,s&&o===i&&r()},c=>n(c))}),s=!0,o===i&&r()})}static or(e){let r=$.resolve(!1);for(const n of e)r=r.next(i=>i?$.resolve(i):n());return r}static forEach(e,r){const n=[];return e.forEach((i,o)=>{n.push(r.call(this,i,o))}),this.waitFor(n)}static mapArray(e,r){return new $((n,i)=>{const o=e.length,s=new Array(o);let l=0;for(let c=0;c<o;c++){const u=c;r(e[u]).next(h=>{s[u]=h,++l,l===o&&n(s)},h=>i(h))}})}static doWhile(e,r){return new $((n,i)=>{const o=()=>{e()===!0?r().next(()=>{o()},i):n()};o()})}}function KP(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}function Za(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Dm{constructor(e,r){this.previousValue=e,r&&(r.sequenceNumberHandler=n=>this.ie(n),this.se=n=>r.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Dm.oe=-1;function Uu(t){return t==null}function lu(t){return t===0&&1/t==-1/0}function GP(t){return typeof t=="number"&&Number.isInteger(t)&&!lu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(t){let e=0;for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&e++;return e}function ji(t,e){for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&e(r,t[r])}function lx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,r){this.comparator=e,this.root=r||nt.EMPTY}insert(e,r){return new Ve(this.comparator,this.root.insert(e,r,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let r=this.root;for(;!r.isEmpty();){const n=this.comparator(e,r.key);if(n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}indexOf(e){let r=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return r+n.left.size;i<0?n=n.left:(r+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((r,n)=>(e(r,n),!1))}toString(){const e=[];return this.inorderTraversal((r,n)=>(e.push(`${r}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gl(this.root,e,this.comparator,!0)}}class Gl{constructor(e,r,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=r?n(e.key,r):1,r&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const r={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return r}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nt{constructor(e,r,n,i,o){this.key=e,this.value=r,this.color=n??nt.RED,this.left=i??nt.EMPTY,this.right=o??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,r,n,i,o){return new nt(e??this.key,r??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,r,n){let i=this;const o=n(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,r,n),null):o===0?i.copy(null,r,null,null,null):i.copy(null,null,null,null,i.right.insert(e,r,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,r){let n,i=this;if(r(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,r),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),r(e,i.key)===0){if(i.right.isEmpty())return nt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,r))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),r=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,r)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(e,r,n,i,o){return this}insert(e,r,n){return new nt(e,r)}remove(e,r){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((r,n)=>(e(r),!1))}forEachInRange(e,r){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;r(i.key)}}forEachWhile(e,r){let n;for(n=r!==void 0?this.data.getIteratorFrom(r):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const r=this.data.getIteratorFrom(e);return r.hasNext()?r.getNext().key:null}getIterator(){return new x_(this.data.getIterator())}getIteratorFrom(e){return new x_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let r=this;return r.size<e.size&&(r=e,e=this),e.forEach(n=>{r=r.add(n)}),r}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const r=this.data.getIterator(),n=e.data.getIterator();for(;r.hasNext();){const i=r.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(r=>{e.push(r)}),e}toString(){const e=[];return this.forEach(r=>e.push(r)),"SortedSet("+e.toString()+")"}copy(e){const r=new at(this.comparator);return r.data=e,r}}class x_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new Bt([])}unionWith(e){let r=new at(ot.comparator);for(const n of this.fields)r=r.add(n);for(const n of e)r=r.add(n);return new Bt(r.toArray())}covers(e){for(const r of this.fields)if(r.isPrefixOf(e))return!0;return!1}isEqual(e){return Do(this.fields,e.fields,(r,n)=>r.isEqual(n))}}/**
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
 */class cx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const r=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new cx("Invalid base64 string: "+o):o}}(e);return new ct(r)}static fromUint8Array(e){const r=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new ct(r)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(r){return btoa(r)}(this.binaryString)}toUint8Array(){return function(r){const n=new Uint8Array(r.length);for(let i=0;i<r.length;i++)n[i]=r.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const QP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hn(t){if(ye(!!t),typeof t=="string"){let e=0;const r=QP.exec(t);if(ye(!!r),r[1]){let i=r[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(t);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ni(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(t){var e,r;return((r=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||r===void 0?void 0:r.stringValue)==="server_timestamp"}function Vm(t){const e=t.mapValue.fields.__previous_value__;return Lm(e)?Vm(e):e}function Ca(t){const e=Hn(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e,r,n,i,o,s,l,c,u){this.databaseId=e,this.appId=r,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class Ra{constructor(e,r){this.projectId=e,this.database=r||"(default)"}static empty(){return new Ra("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ra&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql={mapValue:{}};function Oi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lm(t)?4:JP(t)?9007199254740991:XP(t)?10:11:te()}function Lr(t,e){if(t===e)return!0;const r=Oi(t);if(r!==Oi(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ca(t).isEqual(Ca(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=Hn(i.timestampValue),l=Hn(o.timestampValue);return s.seconds===l.seconds&&s.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return Ni(i.bytesValue).isEqual(Ni(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Be(i.geoPointValue.latitude)===Be(o.geoPointValue.latitude)&&Be(i.geoPointValue.longitude)===Be(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Be(i.integerValue)===Be(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Be(i.doubleValue),l=Be(o.doubleValue);return s===l?lu(s)===lu(l):isNaN(s)&&isNaN(l)}return!1}(t,e);case 9:return Do(t.arrayValue.values||[],e.arrayValue.values||[],Lr);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},l=o.mapValue.fields||{};if(E_(s)!==E_(l))return!1;for(const c in s)if(s.hasOwnProperty(c)&&(l[c]===void 0||!Lr(s[c],l[c])))return!1;return!0}(t,e);default:return te()}}function Pa(t,e){return(t.values||[]).find(r=>Lr(r,e))!==void 0}function Lo(t,e){if(t===e)return 0;const r=Oi(t),n=Oi(e);if(r!==n)return pe(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(o,s){const l=Be(o.integerValue||o.doubleValue),c=Be(s.integerValue||s.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return T_(t.timestampValue,e.timestampValue);case 4:return T_(Ca(t),Ca(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(o,s){const l=Ni(o),c=Ni(s);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const l=o.split("/"),c=s.split("/");for(let u=0;u<l.length&&u<c.length;u++){const h=pe(l[u],c[u]);if(h!==0)return h}return pe(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const l=pe(Be(o.latitude),Be(s.latitude));return l!==0?l:pe(Be(o.longitude),Be(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return I_(t.arrayValue,e.arrayValue);case 10:return function(o,s){var l,c,u,h;const p=o.fields||{},m=s.fields||{},E=(l=p.value)===null||l===void 0?void 0:l.arrayValue,S=(c=m.value)===null||c===void 0?void 0:c.arrayValue,N=pe(((u=E==null?void 0:E.values)===null||u===void 0?void 0:u.length)||0,((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0);return N!==0?N:I_(E,S)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===Ql.mapValue&&s===Ql.mapValue)return 0;if(o===Ql.mapValue)return 1;if(s===Ql.mapValue)return-1;const l=o.fields||{},c=Object.keys(l),u=s.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let p=0;p<c.length&&p<h.length;++p){const m=pe(c[p],h[p]);if(m!==0)return m;const E=Lo(l[c[p]],u[h[p]]);if(E!==0)return E}return pe(c.length,h.length)}(t.mapValue,e.mapValue);default:throw te()}}function T_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const r=Hn(t),n=Hn(e),i=pe(r.seconds,n.seconds);return i!==0?i:pe(r.nanos,n.nanos)}function I_(t,e){const r=t.values||[],n=e.values||[];for(let i=0;i<r.length&&i<n.length;++i){const o=Lo(r[i],n[i]);if(o)return o}return pe(r.length,n.length)}function Vo(t){return Lf(t)}function Lf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const n=Hn(r);return`time(${n.seconds},${n.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(r){return Ni(r).toBase64()}(t.bytesValue):"referenceValue"in t?function(r){return J.fromName(r).toString()}(t.referenceValue):"geoPointValue"in t?function(r){return`geo(${r.latitude},${r.longitude})`}(t.geoPointValue):"arrayValue"in t?function(r){let n="[",i=!0;for(const o of r.values||[])i?i=!1:n+=",",n+=Lf(o);return n+"]"}(t.arrayValue):"mapValue"in t?function(r){const n=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const s of n)o?o=!1:i+=",",i+=`${s}:${Lf(r.fields[s])}`;return i+"}"}(t.mapValue):te()}function A_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Vf(t){return!!t&&"integerValue"in t}function Mm(t){return!!t&&"arrayValue"in t}function S_(t){return!!t&&"nullValue"in t}function k_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Tc(t){return!!t&&"mapValue"in t}function XP(t){var e,r;return((r=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||r===void 0?void 0:r.stringValue)==="__vector__"}function ea(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ji(t.mapValue.fields,(r,n)=>e.mapValue.fields[r]=ea(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let r=0;r<(t.arrayValue.values||[]).length;++r)e.arrayValue.values[r]=ea(t.arrayValue.values[r]);return e}return Object.assign({},t)}function JP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let r=this.value;for(let n=0;n<e.length-1;++n)if(r=(r.mapValue.fields||{})[e.get(n)],!Tc(r))return null;return r=(r.mapValue.fields||{})[e.lastSegment()],r||null}}set(e,r){this.getFieldsMap(e.popLast())[e.lastSegment()]=ea(r)}setAll(e){let r=ot.emptyPath(),n={},i=[];e.forEach((s,l)=>{if(!r.isImmediateParentOf(l)){const c=this.getFieldsMap(r);this.applyChanges(c,n,i),n={},i=[],r=l.popLast()}s?n[l.lastSegment()]=ea(s):i.push(l.lastSegment())});const o=this.getFieldsMap(r);this.applyChanges(o,n,i)}delete(e){const r=this.field(e.popLast());Tc(r)&&r.mapValue.fields&&delete r.mapValue.fields[e.lastSegment()]}isEqual(e){return Lr(this.value,e.value)}getFieldsMap(e){let r=this.value;r.mapValue.fields||(r.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=r.mapValue.fields[e.get(n)];Tc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},r.mapValue.fields[e.get(n)]=i),r=i}return r.mapValue.fields}applyChanges(e,r,n){ji(r,(i,o)=>e[i]=o);for(const i of n)delete e[i]}clone(){return new Lt(ea(this.value))}}function ux(t){const e=[];return ji(t.fields,(r,n)=>{const i=new ot([r]);if(Tc(n)){const o=ux(n.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,r,n,i,o,s,l){this.key=e,this.documentType=r,this.version=n,this.readTime=i,this.createTime=o,this.data=s,this.documentState=l}static newInvalidDocument(e){return new yt(e,0,re.min(),re.min(),re.min(),Lt.empty(),0)}static newFoundDocument(e,r,n,i){return new yt(e,1,r,re.min(),n,i,0)}static newNoDocument(e,r){return new yt(e,2,r,re.min(),re.min(),Lt.empty(),0)}static newUnknownDocument(e,r){return new yt(e,3,r,re.min(),re.min(),Lt.empty(),2)}convertToFoundDocument(e,r){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=r,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class cu{constructor(e,r){this.position=e,this.inclusive=r}}function C_(t,e,r){let n=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?n=J.comparator(J.fromName(s.referenceValue),r.key):n=Lo(s,r.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function R_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let r=0;r<t.position.length;r++)if(!Lr(t.position[r],e.position[r]))return!1;return!0}/**
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
 */class Na{constructor(e,r="asc"){this.field=e,this.dir=r}}function ZP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class dx{}class Ge extends dx{constructor(e,r,n){super(),this.field=e,this.op=r,this.value=n}static create(e,r,n){return e.isKeyField()?r==="in"||r==="not-in"?this.createKeyFieldInFilter(e,r,n):new tN(e,r,n):r==="array-contains"?new iN(e,n):r==="in"?new oN(e,n):r==="not-in"?new sN(e,n):r==="array-contains-any"?new aN(e,n):new Ge(e,r,n)}static createKeyFieldInFilter(e,r,n){return r==="in"?new rN(e,n):new nN(e,n)}matches(e){const r=e.data.field(this.field);return this.op==="!="?r!==null&&this.matchesComparison(Lo(r,this.value)):r!==null&&Oi(this.value)===Oi(r)&&this.matchesComparison(Lo(r,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Er extends dx{constructor(e,r){super(),this.filters=e,this.op=r,this.ae=null}static create(e,r){return new Er(e,r)}matches(e){return hx(this)?this.filters.find(r=>!r.matches(e))===void 0:this.filters.find(r=>r.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,r)=>e.concat(r.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function hx(t){return t.op==="and"}function fx(t){return eN(t)&&hx(t)}function eN(t){for(const e of t.filters)if(e instanceof Er)return!1;return!0}function Mf(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+Vo(t.value);if(fx(t))return t.filters.map(e=>Mf(e)).join(",");{const e=t.filters.map(r=>Mf(r)).join(",");return`${t.op}(${e})`}}function px(t,e){return t instanceof Ge?function(n,i){return i instanceof Ge&&n.op===i.op&&n.field.isEqual(i.field)&&Lr(n.value,i.value)}(t,e):t instanceof Er?function(n,i){return i instanceof Er&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,s,l)=>o&&px(s,i.filters[l]),!0):!1}(t,e):void te()}function mx(t){return t instanceof Ge?function(r){return`${r.field.canonicalString()} ${r.op} ${Vo(r.value)}`}(t):t instanceof Er?function(r){return r.op.toString()+" {"+r.getFilters().map(mx).join(" ,")+"}"}(t):"Filter"}class tN extends Ge{constructor(e,r,n){super(e,r,n),this.key=J.fromName(n.referenceValue)}matches(e){const r=J.comparator(e.key,this.key);return this.matchesComparison(r)}}class rN extends Ge{constructor(e,r){super(e,"in",r),this.keys=gx("in",r)}matches(e){return this.keys.some(r=>r.isEqual(e.key))}}class nN extends Ge{constructor(e,r){super(e,"not-in",r),this.keys=gx("not-in",r)}matches(e){return!this.keys.some(r=>r.isEqual(e.key))}}function gx(t,e){var r;return(((r=e.arrayValue)===null||r===void 0?void 0:r.values)||[]).map(n=>J.fromName(n.referenceValue))}class iN extends Ge{constructor(e,r){super(e,"array-contains",r)}matches(e){const r=e.data.field(this.field);return Mm(r)&&Pa(r.arrayValue,this.value)}}class oN extends Ge{constructor(e,r){super(e,"in",r)}matches(e){const r=e.data.field(this.field);return r!==null&&Pa(this.value.arrayValue,r)}}class sN extends Ge{constructor(e,r){super(e,"not-in",r)}matches(e){if(Pa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const r=e.data.field(this.field);return r!==null&&!Pa(this.value.arrayValue,r)}}class aN extends Ge{constructor(e,r){super(e,"array-contains-any",r)}matches(e){const r=e.data.field(this.field);return!(!Mm(r)||!r.arrayValue.values)&&r.arrayValue.values.some(n=>Pa(this.value.arrayValue,n))}}/**
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
 */class lN{constructor(e,r=null,n=[],i=[],o=null,s=null,l=null){this.path=e,this.collectionGroup=r,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=s,this.endAt=l,this.ue=null}}function P_(t,e=null,r=[],n=[],i=null,o=null,s=null){return new lN(t,e,r,n,i,o,s)}function $m(t){const e=ne(t);if(e.ue===null){let r=e.path.canonicalString();e.collectionGroup!==null&&(r+="|cg:"+e.collectionGroup),r+="|f:",r+=e.filters.map(n=>Mf(n)).join(","),r+="|ob:",r+=e.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),Uu(e.limit)||(r+="|l:",r+=e.limit),e.startAt&&(r+="|lb:",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(n=>Vo(n)).join(",")),e.endAt&&(r+="|ub:",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(n=>Vo(n)).join(",")),e.ue=r}return e.ue}function Fm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!ZP(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(!px(t.filters[r],e.filters[r]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!R_(t.startAt,e.startAt)&&R_(t.endAt,e.endAt)}function $f(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,r=null,n=[],i=[],o=null,s="F",l=null,c=null){this.path=e,this.collectionGroup=r,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=s,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function cN(t,e,r,n,i,o,s,l){return new Xo(t,e,r,n,i,o,s,l)}function Um(t){return new Xo(t)}function N_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function vx(t){return t.collectionGroup!==null}function ta(t){const e=ne(t);if(e.ce===null){e.ce=[];const r=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),r.add(o.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let l=new at(ot.comparator);return s.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(o=>{r.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Na(o,n))}),r.has(ot.keyField().canonicalString())||e.ce.push(new Na(ot.keyField(),n))}return e.ce}function Pr(t){const e=ne(t);return e.le||(e.le=uN(e,ta(t))),e.le}function uN(t,e){if(t.limitType==="F")return P_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Na(i.field,o)});const r=t.endAt?new cu(t.endAt.position,t.endAt.inclusive):null,n=t.startAt?new cu(t.startAt.position,t.startAt.inclusive):null;return P_(t.path,t.collectionGroup,e,t.filters,t.limit,r,n)}}function Ff(t,e){const r=t.filters.concat([e]);return new Xo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),r,t.limit,t.limitType,t.startAt,t.endAt)}function Uf(t,e,r){return new Xo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,r,t.startAt,t.endAt)}function ju(t,e){return Fm(Pr(t),Pr(e))&&t.limitType===e.limitType}function yx(t){return`${$m(Pr(t))}|lt:${t.limitType}`}function Ji(t){return`Query(target=${function(r){let n=r.path.canonicalString();return r.collectionGroup!==null&&(n+=" collectionGroup="+r.collectionGroup),r.filters.length>0&&(n+=`, filters: [${r.filters.map(i=>mx(i)).join(", ")}]`),Uu(r.limit)||(n+=", limit: "+r.limit),r.orderBy.length>0&&(n+=`, orderBy: [${r.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),r.startAt&&(n+=", startAt: ",n+=r.startAt.inclusive?"b:":"a:",n+=r.startAt.position.map(i=>Vo(i)).join(",")),r.endAt&&(n+=", endAt: ",n+=r.endAt.inclusive?"a:":"b:",n+=r.endAt.position.map(i=>Vo(i)).join(",")),`Target(${n})`}(Pr(t))}; limitType=${t.limitType})`}function zu(t,e){return e.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):J.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(t,e)&&function(n,i){for(const o of ta(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,l,c){const u=C_(s,l,c);return s.inclusive?u<=0:u<0}(n.startAt,ta(n),i)||n.endAt&&!function(s,l,c){const u=C_(s,l,c);return s.inclusive?u>=0:u>0}(n.endAt,ta(n),i))}(t,e)}function dN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _x(t){return(e,r)=>{let n=!1;for(const i of ta(t)){const o=hN(i,e,r);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function hN(t,e,r){const n=t.field.isKeyField()?J.comparator(e.key,r.key):function(o,s,l){const c=s.data.field(o),u=l.data.field(o);return c!==null&&u!==null?Lo(c,u):te()}(t.field,e,r);switch(t.dir){case"asc":return n;case"desc":return-1*n;default:return te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,r){this.mapKeyFn=e,this.equalsFn=r,this.inner={},this.innerSize=0}get(e){const r=this.mapKeyFn(e),n=this.inner[r];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,r){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,r]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,r]);i.push([e,r]),this.innerSize++}delete(e){const r=this.mapKeyFn(e),n=this.inner[r];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[r]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ji(this.inner,(r,n)=>{for(const[i,o]of n)e(i,o)})}isEmpty(){return lx(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN=new Ve(J.comparator);function ln(){return fN}const wx=new Ve(J.comparator);function Us(...t){let e=wx;for(const r of t)e=e.insert(r.key,r);return e}function bx(t){let e=wx;return t.forEach((r,n)=>e=e.insert(r,n.overlayedDocument)),e}function gi(){return ra()}function Ex(){return ra()}function ra(){return new Jo(t=>t.toString(),(t,e)=>t.isEqual(e))}const pN=new Ve(J.comparator),mN=new at(J.comparator);function le(...t){let e=mN;for(const r of t)e=e.add(r);return e}const gN=new at(pe);function vN(){return gN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lu(e)?"-0":e}}function xx(t){return{integerValue:""+t}}function yN(t,e){return GP(e)?xx(e):jm(t,e)}/**
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
 */class Bu{constructor(){this._=void 0}}function _N(t,e,r){return t instanceof Oa?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Lm(o)&&(o=Vm(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(r,e):t instanceof Mo?Ix(t,e):t instanceof Da?Ax(t,e):function(i,o){const s=Tx(i,o),l=O_(s)+O_(i.Pe);return Vf(s)&&Vf(i.Pe)?xx(l):jm(i.serializer,l)}(t,e)}function wN(t,e,r){return t instanceof Mo?Ix(t,e):t instanceof Da?Ax(t,e):r}function Tx(t,e){return t instanceof uu?function(n){return Vf(n)||function(o){return!!o&&"doubleValue"in o}(n)}(e)?e:{integerValue:0}:null}class Oa extends Bu{}class Mo extends Bu{constructor(e){super(),this.elements=e}}function Ix(t,e){const r=Sx(e);for(const n of t.elements)r.some(i=>Lr(i,n))||r.push(n);return{arrayValue:{values:r}}}class Da extends Bu{constructor(e){super(),this.elements=e}}function Ax(t,e){let r=Sx(e);for(const n of t.elements)r=r.filter(i=>!Lr(i,n));return{arrayValue:{values:r}}}class uu extends Bu{constructor(e,r){super(),this.serializer=e,this.Pe=r}}function O_(t){return Be(t.integerValue||t.doubleValue)}function Sx(t){return Mm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e,r){this.field=e,this.transform=r}}function bN(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Mo&&i instanceof Mo||n instanceof Da&&i instanceof Da?Do(n.elements,i.elements,Lr):n instanceof uu&&i instanceof uu?Lr(n.Pe,i.Pe):n instanceof Oa&&i instanceof Oa}(t.transform,e.transform)}class EN{constructor(e,r){this.version=e,this.transformResults=r}}class sr{constructor(e,r){this.updateTime=e,this.exists=r}static none(){return new sr}static exists(e){return new sr(void 0,e)}static updateTime(e){return new sr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ic(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qu{}function Cx(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zm(t.key,sr.none()):new el(t.key,t.data,sr.none());{const r=t.data,n=Lt.empty();let i=new at(ot.comparator);for(let o of e.fields)if(!i.has(o)){let s=r.field(o);s===null&&o.length>1&&(o=o.popLast(),s=r.field(o)),s===null?n.delete(o):n.set(o,s),i=i.add(o)}return new Zn(t.key,n,new Bt(i.toArray()),sr.none())}}function xN(t,e,r){t instanceof el?function(i,o,s){const l=i.value.clone(),c=L_(i.fieldTransforms,o,s.transformResults);l.setAll(c),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,r):t instanceof Zn?function(i,o,s){if(!Ic(i.precondition,o))return void o.convertToUnknownDocument(s.version);const l=L_(i.fieldTransforms,o,s.transformResults),c=o.data;c.setAll(Rx(i)),c.setAll(l),o.convertToFoundDocument(s.version,c).setHasCommittedMutations()}(t,e,r):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,r)}function na(t,e,r,n){return t instanceof el?function(o,s,l,c){if(!Ic(o.precondition,s))return l;const u=o.value.clone(),h=V_(o.fieldTransforms,c,s);return u.setAll(h),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,r,n):t instanceof Zn?function(o,s,l,c){if(!Ic(o.precondition,s))return l;const u=V_(o.fieldTransforms,c,s),h=s.data;return h.setAll(Rx(o)),h.setAll(u),s.convertToFoundDocument(s.version,h).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(p=>p.field))}(t,e,r,n):function(o,s,l){return Ic(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):l}(t,e,r)}function TN(t,e){let r=null;for(const n of t.fieldTransforms){const i=e.data.field(n.field),o=Tx(n.transform,i||null);o!=null&&(r===null&&(r=Lt.empty()),r.set(n.field,o))}return r||null}function D_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Do(n,i,(o,s)=>bN(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class el extends qu{constructor(e,r,n,i=[]){super(),this.key=e,this.value=r,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Zn extends qu{constructor(e,r,n,i,o=[]){super(),this.key=e,this.data=r,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Rx(t){const e=new Map;return t.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){const n=t.data.field(r);e.set(r,n)}}),e}function L_(t,e,r){const n=new Map;ye(t.length===r.length);for(let i=0;i<r.length;i++){const o=t[i],s=o.transform,l=e.data.field(o.field);n.set(o.field,wN(s,l,r[i]))}return n}function V_(t,e,r){const n=new Map;for(const i of t){const o=i.transform,s=r.data.field(i.field);n.set(i.field,_N(o,s,e))}return n}class zm extends qu{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class IN extends qu{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e,r,n,i){this.batchId=e,this.localWriteTime=r,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,r){const n=r.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&xN(o,e,n[i])}}applyToLocalView(e,r){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(r=na(n,e,r,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(r=na(n,e,r,this.localWriteTime));return r}applyToLocalDocumentSet(e,r){const n=Ex();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let l=this.applyToLocalView(s,o.mutatedFields);l=r.has(i.key)?null:l;const c=Cx(s,l);c!==null&&n.set(i.key,c),s.isValidDocument()||s.convertToNoDocument(re.min())}),n}keys(){return this.mutations.reduce((e,r)=>e.add(r.key),le())}isEqual(e){return this.batchId===e.batchId&&Do(this.mutations,e.mutations,(r,n)=>D_(r,n))&&Do(this.baseMutations,e.baseMutations,(r,n)=>D_(r,n))}}class Bm{constructor(e,r,n,i){this.batch=e,this.commitVersion=r,this.mutationResults=n,this.docVersions=i}static from(e,r,n){ye(e.mutations.length===n.length);let i=function(){return pN}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,n[s].version);return new Bm(e,r,n,i)}}/**
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
 */var We,ue;function CN(t){switch(t){default:return te();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Px(t){if(t===void 0)return an("GRPC error has no .code"),M.UNKNOWN;switch(t){case We.OK:return M.OK;case We.CANCELLED:return M.CANCELLED;case We.UNKNOWN:return M.UNKNOWN;case We.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case We.INTERNAL:return M.INTERNAL;case We.UNAVAILABLE:return M.UNAVAILABLE;case We.UNAUTHENTICATED:return M.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case We.NOT_FOUND:return M.NOT_FOUND;case We.ALREADY_EXISTS:return M.ALREADY_EXISTS;case We.PERMISSION_DENIED:return M.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case We.ABORTED:return M.ABORTED;case We.OUT_OF_RANGE:return M.OUT_OF_RANGE;case We.UNIMPLEMENTED:return M.UNIMPLEMENTED;case We.DATA_LOSS:return M.DATA_LOSS;default:return te()}}(ue=We||(We={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const PN=new bi([4294967295,4294967295],0);function M_(t){const e=RN().encode(t),r=new ex;return r.update(e),new Uint8Array(r.digest())}function $_(t){const e=new DataView(t.buffer),r=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new bi([r,n],0),new bi([i,o],0)]}class qm{constructor(e,r,n){if(this.bitmap=e,this.padding=r,this.hashCount=n,r<0||r>=8)throw new js(`Invalid padding: ${r}`);if(n<0)throw new js(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new js(`Invalid hash count: ${n}`);if(e.length===0&&r!==0)throw new js(`Invalid padding when bitmap length is 0: ${r}`);this.Ie=8*e.length-r,this.Te=bi.fromNumber(this.Ie)}Ee(e,r,n){let i=e.add(r.multiply(bi.fromNumber(n)));return i.compare(PN)===1&&(i=new bi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const r=M_(e),[n,i]=$_(r);for(let o=0;o<this.hashCount;o++){const s=this.Ee(n,i,o);if(!this.de(s))return!1}return!0}static create(e,r,n){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new qm(o,i,r);return n.forEach(l=>s.insert(l)),s}insert(e){if(this.Ie===0)return;const r=M_(e),[n,i]=$_(r);for(let o=0;o<this.hashCount;o++){const s=this.Ee(n,i,o);this.Ae(s)}}Ae(e){const r=Math.floor(e/8),n=e%8;this.bitmap[r]|=1<<n}}class js extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,r,n,i,o){this.snapshotVersion=e,this.targetChanges=r,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,r,n){const i=new Map;return i.set(e,tl.createSynthesizedTargetChangeForCurrentChange(e,r,n)),new Hu(re.min(),i,new Ve(pe),ln(),le())}}class tl{constructor(e,r,n,i,o){this.resumeToken=e,this.current=r,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,r,n){return new tl(n,r,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,r,n,i){this.Re=e,this.removedTargetIds=r,this.key=n,this.Ve=i}}class Nx{constructor(e,r){this.targetId=e,this.me=r}}class Ox{constructor(e,r,n=ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=r,this.resumeToken=n,this.cause=i}}class F_{constructor(){this.fe=0,this.ge=j_(),this.pe=ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=le(),r=le(),n=le();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:r=r.add(i);break;case 1:n=n.add(i);break;default:te()}}),new tl(this.pe,this.ye,e,r,n)}Ce(){this.we=!1,this.ge=j_()}Fe(e,r){this.we=!0,this.ge=this.ge.insert(e,r)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ye(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class NN{constructor(e){this.Le=e,this.Be=new Map,this.ke=ln(),this.qe=U_(),this.Qe=new Ve(pe)}Ke(e){for(const r of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(r,e.Ve):this.Ue(r,e.key,e.Ve);for(const r of e.removedTargetIds)this.Ue(r,e.key,e.Ve)}We(e){this.forEachTarget(e,r=>{const n=this.Ge(r);switch(e.state){case 0:this.ze(r)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(r);break;case 3:this.ze(r)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(r)&&(this.je(r),n.De(e.resumeToken));break;default:te()}})}forEachTarget(e,r){e.targetIds.length>0?e.targetIds.forEach(r):this.Be.forEach((n,i)=>{this.ze(i)&&r(i)})}He(e){const r=e.targetId,n=e.me.count,i=this.Je(r);if(i){const o=i.target;if($f(o))if(n===0){const s=new J(o.path);this.Ue(r,s,yt.newNoDocument(s,re.min()))}else ye(n===1);else{const s=this.Ye(r);if(s!==n){const l=this.Ze(e),c=l?this.Xe(l,e,s):1;if(c!==0){this.je(r);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(r,u)}}}}}Ze(e){const r=e.me.unchangedNames;if(!r||!r.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=r;let s,l;try{s=Ni(n).toUint8Array()}catch(c){if(c instanceof cx)return Oo("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new qm(s,i,o)}catch(c){return Oo(c instanceof js?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,r,n){return r.me.count===n-this.nt(e,r.targetId)?0:2}nt(e,r){const n=this.Le.getRemoteKeysForTarget(r);let i=0;return n.forEach(o=>{const s=this.Le.tt(),l=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.Ue(r,o,null),i++)}),i}rt(e){const r=new Map;this.Be.forEach((o,s)=>{const l=this.Je(s);if(l){if(o.current&&$f(l.target)){const c=new J(l.target.path);this.ke.get(c)!==null||this.it(s,c)||this.Ue(s,c,yt.newNoDocument(c,e))}o.be&&(r.set(s,o.ve()),o.Ce())}});let n=le();this.qe.forEach((o,s)=>{let l=!0;s.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new Hu(e,r,this.Qe,this.ke,n);return this.ke=ln(),this.qe=U_(),this.Qe=new Ve(pe),i}$e(e,r){if(!this.ze(e))return;const n=this.it(e,r.key)?2:0;this.Ge(e).Fe(r.key,n),this.ke=this.ke.insert(r.key,r),this.qe=this.qe.insert(r.key,this.st(r.key).add(e))}Ue(e,r,n){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,r)?i.Fe(r,1):i.Me(r),this.qe=this.qe.insert(r,this.st(r).delete(e)),n&&(this.ke=this.ke.insert(r,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const r=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let r=this.Be.get(e);return r||(r=new F_,this.Be.set(e,r)),r}st(e){let r=this.qe.get(e);return r||(r=new at(pe),this.qe=this.qe.insert(e,r)),r}ze(e){const r=this.Je(e)!==null;return r||Y("WatchChangeAggregator","Detected inactive target",e),r}Je(e){const r=this.Be.get(e);return r&&r.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new F_),this.Le.getRemoteKeysForTarget(e).forEach(r=>{this.Ue(e,r,null)})}it(e,r){return this.Le.getRemoteKeysForTarget(e).has(r)}}function U_(){return new Ve(J.comparator)}function j_(){return new Ve(J.comparator)}const ON={asc:"ASCENDING",desc:"DESCENDING"},DN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LN={and:"AND",or:"OR"};class VN{constructor(e,r){this.databaseId=e,this.useProto3Json=r}}function jf(t,e){return t.useProto3Json||Uu(e)?e:{value:e}}function du(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Dx(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function MN(t,e){return du(t,e.toTimestamp())}function Nr(t){return ye(!!t),re.fromTimestamp(function(r){const n=Hn(r);return new Xe(n.seconds,n.nanos)}(t))}function Hm(t,e){return zf(t,e).canonicalString()}function zf(t,e){const r=function(i){return new Ae(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?r:r.child(e)}function Lx(t){const e=Ae.fromString(t);return ye(Ux(e)),e}function Bf(t,e){return Hm(t.databaseId,e.path)}function ch(t,e){const r=Lx(e);if(r.get(1)!==t.databaseId.projectId)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+t.databaseId.projectId);if(r.get(3)!==t.databaseId.database)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+t.databaseId.database);return new J(Mx(r))}function Vx(t,e){return Hm(t.databaseId,e)}function $N(t){const e=Lx(t);return e.length===4?Ae.emptyPath():Mx(e)}function qf(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Mx(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function z_(t,e,r){return{name:Bf(t,e),fields:r.value.mapValue.fields}}function FN(t,e){let r;if("targetChange"in e){e.targetChange;const n=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(u,h){return u.useProto3Json?(ye(h===void 0||typeof h=="string"),ct.fromBase64String(h||"")):(ye(h===void 0||h instanceof Buffer||h instanceof Uint8Array),ct.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,l=s&&function(u){const h=u.code===void 0?M.UNKNOWN:Px(u.code);return new G(h,u.message||"")}(s);r=new Ox(n,i,o,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=ch(t,n.document.name),o=Nr(n.document.updateTime),s=n.document.createTime?Nr(n.document.createTime):re.min(),l=new Lt({mapValue:{fields:n.document.fields}}),c=yt.newFoundDocument(i,o,s,l),u=n.targetIds||[],h=n.removedTargetIds||[];r=new Ac(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=ch(t,n.document),o=n.readTime?Nr(n.readTime):re.min(),s=yt.newNoDocument(i,o),l=n.removedTargetIds||[];r=new Ac([],l,s.key,s)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=ch(t,n.document),o=n.removedTargetIds||[];r=new Ac([],o,i,null)}else{if(!("filter"in e))return te();{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,s=new kN(i,o),l=n.targetId;r=new Nx(l,s)}}return r}function UN(t,e){let r;if(e instanceof el)r={update:z_(t,e.key,e.value)};else if(e instanceof zm)r={delete:Bf(t,e.key)};else if(e instanceof Zn)r={update:z_(t,e.key,e.data),updateMask:QN(e.fieldMask)};else{if(!(e instanceof IN))return te();r={verify:Bf(t,e.key)}}return e.fieldTransforms.length>0&&(r.updateTransforms=e.fieldTransforms.map(n=>function(o,s){const l=s.transform;if(l instanceof Oa)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Mo)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Da)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof uu)return{fieldPath:s.field.canonicalString(),increment:l.Pe};throw te()}(0,n))),e.precondition.isNone||(r.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:MN(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:te()}(t,e.precondition)),r}function jN(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(r=>function(i,o){let s=i.updateTime?Nr(i.updateTime):Nr(o);return s.isEqual(re.min())&&(s=Nr(o)),new EN(s,i.transformResults||[])}(r,e))):[]}function zN(t,e){return{documents:[Vx(t,e.path)]}}function BN(t,e){const r={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,r.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),r.structuredQuery.from=[{collectionId:n.lastSegment()}]),r.parent=Vx(t,i);const o=function(u){if(u.length!==0)return Fx(Er.create(u,"and"))}(e.filters);o&&(r.structuredQuery.where=o);const s=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:Zi(m.field),direction:WN(m.dir)}}(h))}(e.orderBy);s&&(r.structuredQuery.orderBy=s);const l=jf(t,e.limit);return l!==null&&(r.structuredQuery.limit=l),e.startAt&&(r.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(r.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:r,parent:i}}function qN(t){let e=$N(t.parent);const r=t.structuredQuery,n=r.from?r.from.length:0;let i=null;if(n>0){ye(n===1);const h=r.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let o=[];r.where&&(o=function(p){const m=$x(p);return m instanceof Er&&fx(m)?m.getFilters():[m]}(r.where));let s=[];r.orderBy&&(s=function(p){return p.map(m=>function(S){return new Na(eo(S.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(r.orderBy));let l=null;r.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Uu(m)?null:m}(r.limit));let c=null;r.startAt&&(c=function(p){const m=!!p.before,E=p.values||[];return new cu(E,m)}(r.startAt));let u=null;return r.endAt&&(u=function(p){const m=!p.before,E=p.values||[];return new cu(E,m)}(r.endAt)),cN(e,i,s,o,l,"F",c,u)}function HN(t,e){const r=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te()}}(e.purpose);return r==null?null:{"goog-listen-tags":r}}function $x(t){return t.unaryFilter!==void 0?function(r){switch(r.unaryFilter.op){case"IS_NAN":const n=eo(r.unaryFilter.field);return Ge.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=eo(r.unaryFilter.field);return Ge.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=eo(r.unaryFilter.field);return Ge.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=eo(r.unaryFilter.field);return Ge.create(s,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(t):t.fieldFilter!==void 0?function(r){return Ge.create(eo(r.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(r.fieldFilter.op),r.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(r){return Er.create(r.compositeFilter.filters.map(n=>$x(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return te()}}(r.compositeFilter.op))}(t):te()}function WN(t){return ON[t]}function KN(t){return DN[t]}function GN(t){return LN[t]}function Zi(t){return{fieldPath:t.canonicalString()}}function eo(t){return ot.fromServerFormat(t.fieldPath)}function Fx(t){return t instanceof Ge?function(r){if(r.op==="=="){if(k_(r.value))return{unaryFilter:{field:Zi(r.field),op:"IS_NAN"}};if(S_(r.value))return{unaryFilter:{field:Zi(r.field),op:"IS_NULL"}}}else if(r.op==="!="){if(k_(r.value))return{unaryFilter:{field:Zi(r.field),op:"IS_NOT_NAN"}};if(S_(r.value))return{unaryFilter:{field:Zi(r.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zi(r.field),op:KN(r.op),value:r.value}}}(t):t instanceof Er?function(r){const n=r.getFilters().map(i=>Fx(i));return n.length===1?n[0]:{compositeFilter:{op:GN(r.op),filters:n}}}(t):te()}function QN(t){const e=[];return t.fields.forEach(r=>e.push(r.canonicalString())),{fieldPaths:e}}function Ux(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,r,n,i,o=re.min(),s=re.min(),l=ct.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=r,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Rn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,r){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,r,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e){this.ct=e}}function XN(t){const e=qN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Uf(e,e.limit,"L"):e}/**
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
 */class JN{constructor(){this.un=new ZN}addToCollectionParentIndex(e,r){return this.un.add(r),$.resolve()}getCollectionParents(e,r){return $.resolve(this.un.getEntries(r))}addFieldIndex(e,r){return $.resolve()}deleteFieldIndex(e,r){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,r){return $.resolve()}getDocumentsMatchingTarget(e,r){return $.resolve(null)}getIndexType(e,r){return $.resolve(0)}getFieldIndexes(e,r){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,r){return $.resolve(qn.min())}getMinOffsetFromCollectionGroup(e,r){return $.resolve(qn.min())}updateCollectionGroup(e,r,n){return $.resolve()}updateIndexEntries(e,r){return $.resolve()}}class ZN{constructor(){this.index={}}add(e){const r=e.lastSegment(),n=e.popLast(),i=this.index[r]||new at(Ae.comparator),o=!i.has(n);return this.index[r]=i.add(n),o}has(e){const r=e.lastSegment(),n=e.popLast(),i=this.index[r];return i&&i.has(n)}getEntries(e){return(this.index[e]||new at(Ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new $o(0)}static kn(){return new $o(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(){this.changes=new Jo(e=>e.toString(),(e,r)=>e.isEqual(r)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,r){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(r))}getEntry(e,r){this.assertNotApplied();const n=this.changes.get(r);return n!==void 0?$.resolve(n):this.getFromCache(e,r)}getEntries(e,r){return this.getAllFromCache(e,r)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class r2{constructor(e,r,n,i){this.remoteDocumentCache=e,this.mutationQueue=r,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,r){let n=null;return this.documentOverlayCache.getOverlay(e,r).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,r))).next(i=>(n!==null&&na(n.mutation,i,Bt.empty(),Xe.now()),i))}getDocuments(e,r){return this.remoteDocumentCache.getEntries(e,r).next(n=>this.getLocalViewOfDocuments(e,n,le()).next(()=>n))}getLocalViewOfDocuments(e,r,n=le()){const i=gi();return this.populateOverlays(e,i,r).next(()=>this.computeViews(e,r,i,n).next(o=>{let s=Us();return o.forEach((l,c)=>{s=s.insert(l,c.overlayedDocument)}),s}))}getOverlayedDocuments(e,r){const n=gi();return this.populateOverlays(e,n,r).next(()=>this.computeViews(e,r,n,le()))}populateOverlays(e,r,n){const i=[];return n.forEach(o=>{r.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,l)=>{r.set(s,l)})})}computeViews(e,r,n,i){let o=ln();const s=ra(),l=function(){return ra()}();return r.forEach((c,u)=>{const h=n.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof Zn)?o=o.insert(u.key,u):h!==void 0?(s.set(u.key,h.mutation.getFieldMask()),na(h.mutation,u,h.mutation.getFieldMask(),Xe.now())):s.set(u.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,o).next(c=>(c.forEach((u,h)=>s.set(u,h)),r.forEach((u,h)=>{var p;return l.set(u,new t2(h,(p=s.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,r){const n=ra();let i=new Ve((s,l)=>s-l),o=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,r).next(s=>{for(const l of s)l.keys().forEach(c=>{const u=r.get(c);if(u===null)return;let h=n.get(c)||Bt.empty();h=l.applyToLocalView(u,h),n.set(c,h);const p=(i.get(l.batchId)||le()).add(c);i=i.insert(l.batchId,p)})}).next(()=>{const s=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,h=c.value,p=Ex();h.forEach(m=>{if(!o.has(m)){const E=Cx(r.get(m),n.get(m));E!==null&&p.set(m,E),o=o.add(m)}}),s.push(this.documentOverlayCache.saveOverlays(e,u,p))}return $.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,r){return this.remoteDocumentCache.getEntries(e,r).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,r,n,i){return function(s){return J.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(r)?this.getDocumentsMatchingDocumentQuery(e,r.path):vx(r)?this.getDocumentsMatchingCollectionGroupQuery(e,r,n,i):this.getDocumentsMatchingCollectionQuery(e,r,n,i)}getNextDocuments(e,r,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,r,n,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,r,n.largestBatchId,i-o.size):$.resolve(gi());let l=-1,c=o;return s.next(u=>$.forEach(u,(h,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),o.get(h)?$.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{c=c.insert(h,m)}))).next(()=>this.populateOverlays(e,u,o)).next(()=>this.computeViews(e,c,u,le())).next(h=>({batchId:l,changes:bx(h)})))})}getDocumentsMatchingDocumentQuery(e,r){return this.getDocument(e,new J(r)).next(n=>{let i=Us();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,r,n,i){const o=r.collectionGroup;let s=Us();return this.indexManager.getCollectionParents(e,o).next(l=>$.forEach(l,c=>{const u=function(p,m){return new Xo(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(r,c.child(o));return this.getDocumentsMatchingCollectionQuery(e,u,n,i).next(h=>{h.forEach((p,m)=>{s=s.insert(p,m)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,r,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,r.path,n.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,r,n,o,i))).next(s=>{o.forEach((c,u)=>{const h=u.getKey();s.get(h)===null&&(s=s.insert(h,yt.newInvalidDocument(h)))});let l=Us();return s.forEach((c,u)=>{const h=o.get(c);h!==void 0&&na(h.mutation,u,Bt.empty(),Xe.now()),zu(r,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,r){return $.resolve(this.hr.get(r))}saveBundleMetadata(e,r){return this.hr.set(r.id,function(i){return{id:i.id,version:i.version,createTime:Nr(i.createTime)}}(r)),$.resolve()}getNamedQuery(e,r){return $.resolve(this.Pr.get(r))}saveNamedQuery(e,r){return this.Pr.set(r.name,function(i){return{name:i.name,query:XN(i.bundledQuery),readTime:Nr(i.readTime)}}(r)),$.resolve()}}/**
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
 */class i2{constructor(){this.overlays=new Ve(J.comparator),this.Ir=new Map}getOverlay(e,r){return $.resolve(this.overlays.get(r))}getOverlays(e,r){const n=gi();return $.forEach(r,i=>this.getOverlay(e,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(e,r,n){return n.forEach((i,o)=>{this.ht(e,r,o)}),$.resolve()}removeOverlaysForBatchId(e,r,n){const i=this.Ir.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(n)),$.resolve()}getOverlaysForCollection(e,r,n){const i=gi(),o=r.length+1,s=new J(r.child("")),l=this.overlays.getIteratorFrom(s);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!r.isPrefixOf(u.path))break;u.path.length===o&&c.largestBatchId>n&&i.set(c.getKey(),c)}return $.resolve(i)}getOverlaysForCollectionGroup(e,r,n,i){let o=new Ve((u,h)=>u-h);const s=this.overlays.getIterator();for(;s.hasNext();){const u=s.getNext().value;if(u.getKey().getCollectionGroup()===r&&u.largestBatchId>n){let h=o.get(u.largestBatchId);h===null&&(h=gi(),o=o.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const l=gi(),c=o.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>l.set(u,h)),!(l.size()>=i)););return $.resolve(l)}ht(e,r,n){const i=this.overlays.get(n.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(n.key,new SN(r,n));let o=this.Ir.get(r);o===void 0&&(o=le(),this.Ir.set(r,o)),this.Ir.set(r,o.add(n.key))}}/**
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
 */class o2{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,r){return this.sessionToken=r,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(){this.Tr=new at(Je.Er),this.dr=new at(Je.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,r){const n=new Je(e,r);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,r){e.forEach(n=>this.addReference(n,r))}removeReference(e,r){this.Vr(new Je(e,r))}mr(e,r){e.forEach(n=>this.removeReference(n,r))}gr(e){const r=new J(new Ae([])),n=new Je(r,e),i=new Je(r,e+1),o=[];return this.dr.forEachInRange([n,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const r=new J(new Ae([])),n=new Je(r,e),i=new Je(r,e+1);let o=le();return this.dr.forEachInRange([n,i],s=>{o=o.add(s.key)}),o}containsKey(e){const r=new Je(e,0),n=this.Tr.firstAfterOrEqual(r);return n!==null&&e.isEqual(n.key)}}class Je{constructor(e,r){this.key=e,this.wr=r}static Er(e,r){return J.comparator(e.key,r.key)||pe(e.wr,r.wr)}static Ar(e,r){return pe(e.wr,r.wr)||J.comparator(e.key,r.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,r){this.indexManager=e,this.referenceDelegate=r,this.mutationQueue=[],this.Sr=1,this.br=new at(Je.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,r,n,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new AN(o,r,n,i);this.mutationQueue.push(s);for(const l of i)this.br=this.br.add(new Je(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(s)}lookupMutationBatch(e,r){return $.resolve(this.Dr(r))}getNextMutationBatchAfterBatchId(e,r){const n=r+1,i=this.vr(n),o=i<0?0:i;return $.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,r){const n=new Je(r,0),i=new Je(r,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([n,i],s=>{const l=this.Dr(s.wr);o.push(l)}),$.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,r){let n=new at(pe);return r.forEach(i=>{const o=new Je(i,0),s=new Je(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],l=>{n=n.add(l.wr)})}),$.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,r){const n=r.path,i=n.length+1;let o=n;J.isDocumentKey(o)||(o=o.child(""));const s=new Je(new J(o),0);let l=new at(pe);return this.br.forEachWhile(c=>{const u=c.key.path;return!!n.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.wr)),!0)},s),$.resolve(this.Cr(l))}Cr(e){const r=[];return e.forEach(n=>{const i=this.Dr(n);i!==null&&r.push(i)}),r}removeMutationBatch(e,r){ye(this.Fr(r.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return $.forEach(r.mutations,i=>{const o=new Je(i.key,r.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,r){const n=new Je(r,0),i=this.br.firstAfterOrEqual(n);return $.resolve(r.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,r){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const r=this.vr(e);return r<0||r>=this.mutationQueue.length?null:this.mutationQueue[r]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this.Mr=e,this.docs=function(){return new Ve(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,r){const n=r.key,i=this.docs.get(n),o=i?i.size:0,s=this.Mr(r);return this.docs=this.docs.insert(n,{document:r.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const r=this.docs.get(e);r&&(this.docs=this.docs.remove(e),this.size-=r.size)}getEntry(e,r){const n=this.docs.get(r);return $.resolve(n?n.document.mutableCopy():yt.newInvalidDocument(r))}getEntries(e,r){let n=ln();return r.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():yt.newInvalidDocument(i))}),$.resolve(n)}getDocumentsMatchingQuery(e,r,n,i){let o=ln();const s=r.path,l=new J(s.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!s.isPrefixOf(u.path))break;u.path.length>s.length+1||qP(BP(h),n)<=0||(i.has(h.key)||zu(r,h))&&(o=o.insert(h.key,h.mutableCopy()))}return $.resolve(o)}getAllFromCollectionGroup(e,r,n,i){te()}Or(e,r){return $.forEach(this.docs,n=>r(n))}newChangeBuffer(e){return new l2(this)}getSize(e){return $.resolve(this.size)}}class l2 extends e2{constructor(e){super(),this.cr=e}applyChanges(e){const r=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?r.push(this.cr.addEntry(e,i)):this.cr.removeEntry(n)}),$.waitFor(r)}getFromCache(e,r){return this.cr.getEntry(e,r)}getAllFromCache(e,r){return this.cr.getEntries(e,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(e){this.persistence=e,this.Nr=new Jo(r=>$m(r),Fm),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Wm,this.targetCount=0,this.kr=$o.Bn()}forEachTarget(e,r){return this.Nr.forEach((n,i)=>r(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,r,n){return n&&(this.lastRemoteSnapshotVersion=n),r>this.Lr&&(this.Lr=r),$.resolve()}Kn(e){this.Nr.set(e.target,e);const r=e.targetId;r>this.highestTargetId&&(this.kr=new $o(r),this.highestTargetId=r),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,r){return this.Kn(r),this.targetCount+=1,$.resolve()}updateTargetData(e,r){return this.Kn(r),$.resolve()}removeTargetData(e,r){return this.Nr.delete(r.target),this.Br.gr(r.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,r,n){let i=0;const o=[];return this.Nr.forEach((s,l)=>{l.sequenceNumber<=r&&n.get(l.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),$.waitFor(o).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,r){const n=this.Nr.get(r)||null;return $.resolve(n)}addMatchingKeys(e,r,n){return this.Br.Rr(r,n),$.resolve()}removeMatchingKeys(e,r,n){this.Br.mr(r,n);const i=this.persistence.referenceDelegate,o=[];return i&&r.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),$.waitFor(o)}removeMatchingKeysForTargetId(e,r){return this.Br.gr(r),$.resolve()}getMatchingKeysForTargetId(e,r){const n=this.Br.yr(r);return $.resolve(n)}containsKey(e,r){return $.resolve(this.Br.containsKey(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e,r){this.qr={},this.overlays={},this.Qr=new Dm(0),this.Kr=!1,this.Kr=!0,this.$r=new o2,this.referenceDelegate=e(this),this.Ur=new c2(this),this.indexManager=new JN,this.remoteDocumentCache=function(i){return new a2(i)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new YN(r),this.Gr=new n2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let r=this.overlays[e.toKey()];return r||(r=new i2,this.overlays[e.toKey()]=r),r}getMutationQueue(e,r){let n=this.qr[e.toKey()];return n||(n=new s2(r,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,r,n){Y("MemoryPersistence","Starting transaction:",e);const i=new d2(this.Qr.next());return this.referenceDelegate.zr(),n(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,r){return $.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,r)))}}class d2 extends WP{constructor(e){super(),this.currentSequenceNumber=e}}class Km{constructor(e){this.persistence=e,this.Jr=new Wm,this.Yr=null}static Zr(e){return new Km(e)}get Xr(){if(this.Yr)return this.Yr;throw te()}addReference(e,r,n){return this.Jr.addReference(n,r),this.Xr.delete(n.toString()),$.resolve()}removeReference(e,r,n){return this.Jr.removeReference(n,r),this.Xr.add(n.toString()),$.resolve()}markPotentiallyOrphaned(e,r){return this.Xr.add(r.toString()),$.resolve()}removeTarget(e,r){this.Jr.gr(r.targetId).forEach(i=>this.Xr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,r.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>n.removeTargetData(e,r))}zr(){this.Yr=new Set}jr(e){const r=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,n=>{const i=J.fromPath(n);return this.ei(e,i).next(o=>{o||r.removeEntry(i,re.min())})}).next(()=>(this.Yr=null,r.apply(e)))}updateLimboDocument(e,r){return this.ei(e,r).next(n=>{n?this.Xr.delete(r.toString()):this.Xr.add(r.toString())})}Wr(e){return 0}ei(e,r){return $.or([()=>$.resolve(this.Jr.containsKey(r)),()=>this.persistence.getTargetCache().containsKey(e,r),()=>this.persistence.Hr(e,r)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,r,n,i){this.targetId=e,this.fromCache=r,this.$i=n,this.Ui=i}static Wi(e,r){let n=le(),i=le();for(const o of r.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Gm(e,r.fromCache,n,i)}}/**
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
 */class f2{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return iC()?8:KP(bt())>0?6:4}()}initialize(e,r){this.Ji=e,this.indexManager=r,this.Gi=!0}getDocumentsMatchingQuery(e,r,n,i){const o={result:null};return this.Yi(e,r).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,r,i,n).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new h2;return this.Xi(e,r,s).next(l=>{if(o.result=l,this.zi)return this.es(e,r,s,l.size)})}).next(()=>o.result)}es(e,r,n,i){return n.documentReadCount<this.ji?(ks()<=ce.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",Ji(r),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(ks()<=ce.DEBUG&&Y("QueryEngine","Query:",Ji(r),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(ks()<=ce.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",Ji(r),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pr(r))):$.resolve())}Yi(e,r){if(N_(r))return $.resolve(null);let n=Pr(r);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(r.limit!==null&&i===1&&(r=Uf(r,null,"F"),n=Pr(r)),this.indexManager.getDocumentsMatchingTarget(e,n).next(o=>{const s=le(...o);return this.Ji.getDocuments(e,s).next(l=>this.indexManager.getMinOffset(e,n).next(c=>{const u=this.ts(r,l);return this.ns(r,u,s,c.readTime)?this.Yi(e,Uf(r,null,"F")):this.rs(e,u,r,c)}))})))}Zi(e,r,n,i){return N_(r)||i.isEqual(re.min())?$.resolve(null):this.Ji.getDocuments(e,n).next(o=>{const s=this.ts(r,o);return this.ns(r,s,n,i)?$.resolve(null):(ks()<=ce.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ji(r)),this.rs(e,s,r,zP(i,-1)).next(l=>l))})}ts(e,r){let n=new at(_x(e));return r.forEach((i,o)=>{zu(e,o)&&(n=n.add(o))}),n}ns(e,r,n,i){if(e.limit===null)return!1;if(n.size!==r.size)return!0;const o=e.limitType==="F"?r.last():r.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,r,n){return ks()<=ce.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Ji(r)),this.Ji.getDocumentsMatchingQuery(e,r,qn.min(),n)}rs(e,r,n,i){return this.Ji.getDocumentsMatchingQuery(e,n,i).next(o=>(r.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e,r,n,i){this.persistence=e,this.ss=r,this.serializer=i,this.os=new Ve(pe),this._s=new Jo(o=>$m(o),Fm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new r2(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",r=>e.collect(r,this.os))}}function m2(t,e,r,n){return new p2(t,e,r,n)}async function jx(t,e){const r=ne(t);return await r.persistence.runTransaction("Handle user change","readonly",n=>{let i;return r.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,r.ls(e),r.mutationQueue.getAllMutationBatches(n))).next(o=>{const s=[],l=[];let c=le();for(const u of i){s.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of o){l.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return r.localDocuments.getDocuments(n,c).next(u=>({hs:u,removedBatchIds:s,addedBatchIds:l}))})})}function g2(t,e){const r=ne(t);return r.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),o=r.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,h){const p=u.batch,m=p.keys();let E=$.resolve();return m.forEach(S=>{E=E.next(()=>h.getEntry(c,S)).next(N=>{const O=u.docVersions.get(S);ye(O!==null),N.version.compareTo(O)<0&&(p.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),h.addEntry(N)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(r,n,e,o).next(()=>o.apply(n)).next(()=>r.mutationQueue.performConsistencyCheck(n)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let c=le();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>r.localDocuments.getDocuments(n,i))})}function zx(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",r=>e.Ur.getLastRemoteSnapshotVersion(r))}function v2(t,e){const r=ne(t),n=e.snapshotVersion;let i=r.os;return r.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=r.cs.newChangeBuffer({trackRemovals:!0});i=r.os;const l=[];e.targetChanges.forEach((h,p)=>{const m=i.get(p);if(!m)return;l.push(r.Ur.removeMatchingKeys(o,h.removedDocuments,p).next(()=>r.Ur.addMatchingKeys(o,h.addedDocuments,p)));let E=m.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(ct.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):h.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(h.resumeToken,n)),i=i.insert(p,E),function(N,O,x){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(m,E,h)&&l.push(r.Ur.updateTargetData(o,E))});let c=ln(),u=le();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(r.persistence.referenceDelegate.updateLimboDocument(o,h))}),l.push(y2(o,s,e.documentUpdates).next(h=>{c=h.Ps,u=h.Is})),!n.isEqual(re.min())){const h=r.Ur.getLastRemoteSnapshotVersion(o).next(p=>r.Ur.setTargetsMetadata(o,o.currentSequenceNumber,n));l.push(h)}return $.waitFor(l).next(()=>s.apply(o)).next(()=>r.localDocuments.getLocalViewOfDocuments(o,c,u)).next(()=>c)}).then(o=>(r.os=i,o))}function y2(t,e,r){let n=le(),i=le();return r.forEach(o=>n=n.add(o)),e.getEntries(t,n).next(o=>{let s=ln();return r.forEach((l,c)=>{const u=o.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(re.min())?(e.removeEntry(l,c.readTime),s=s.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),s=s.insert(l,c)):Y("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ps:s,Is:i}})}function _2(t,e){const r=ne(t);return r.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),r.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function w2(t,e){const r=ne(t);return r.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return r.Ur.getTargetData(n,e).next(o=>o?(i=o,$.resolve(i)):r.Ur.allocateTargetId(n).next(s=>(i=new Rn(e,s,"TargetPurposeListen",n.currentSequenceNumber),r.Ur.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=r.os.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(r.os=r.os.insert(n.targetId,n),r._s.set(e,n.targetId)),n})}async function Hf(t,e,r){const n=ne(t),i=n.os.get(e),o=r?"readwrite":"readwrite-primary";try{r||await n.persistence.runTransaction("Release target",o,s=>n.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!Za(s))throw s;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}n.os=n.os.remove(e),n._s.delete(i.target)}function B_(t,e,r){const n=ne(t);let i=re.min(),o=le();return n.persistence.runTransaction("Execute query","readwrite",s=>function(c,u,h){const p=ne(c),m=p._s.get(h);return m!==void 0?$.resolve(p.os.get(m)):p.Ur.getTargetData(u,h)}(n,s,Pr(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(s,l.targetId).next(c=>{o=c})}).next(()=>n.ss.getDocumentsMatchingQuery(s,e,r?i:re.min(),r?o:le())).next(l=>(b2(n,dN(e),l),{documents:l,Ts:o})))}function b2(t,e,r){let n=t.us.get(e)||re.min();r.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),t.us.set(e,n)}class q_{constructor(){this.activeTargetIds=vN()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class E2{constructor(){this.so=new q_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,r,n){}addLocalQueryTarget(e,r=!0){return r&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,r,n){this.oo[e]=r}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new q_,Promise.resolve()}handleUserChange(e,r,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class H_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Yl=null;function uh(){return Yl===null?Yl=function(){return 268435456+Math.round(2147483648*Math.random())}():Yl++,"0x"+Yl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class A2 extends class{constructor(r){this.databaseInfo=r,this.databaseId=r.databaseId;const n=r.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+r.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(r,n,i,o,s){const l=uh(),c=this.xo(r,n.toUriEncodedString());Y("RestConnection",`Sending RPC '${r}' ${l}:`,c,i);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,o,s),this.No(r,c,u,i).then(h=>(Y("RestConnection",`Received RPC '${r}' ${l}: `,h),h),h=>{throw Oo("RestConnection",`RPC '${r}' ${l} failed with error: `,h,"url: ",c,"request:",i),h})}Lo(r,n,i,o,s,l){return this.Mo(r,n,i,o,s)}Oo(r,n,i){r["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Yo}(),r["Content-Type"]="text/plain",this.databaseInfo.appId&&(r["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,s)=>r[s]=o),i&&i.headers.forEach((o,s)=>r[s]=o)}xo(r,n){const i=T2[r];return`${this.Do}/v1/${n}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,r,n,i){const o=uh();return new Promise((s,l)=>{const c=new tx;c.setWithCredentials(!0),c.listenOnce(rx.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case xc.NO_ERROR:const h=c.getResponseJson();Y(mt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(h)),s(h);break;case xc.TIMEOUT:Y(mt,`RPC '${e}' ${o} timed out`),l(new G(M.DEADLINE_EXCEEDED,"Request time out"));break;case xc.HTTP_ERROR:const p=c.getStatus();if(Y(mt,`RPC '${e}' ${o} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const E=m==null?void 0:m.error;if(E&&E.status&&E.message){const S=function(O){const x=O.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(x)>=0?x:M.UNKNOWN}(E.status);l(new G(S,E.message))}else l(new G(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new G(M.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{Y(mt,`RPC '${e}' ${o} completed.`)}});const u=JSON.stringify(i);Y(mt,`RPC '${e}' ${o} sending request:`,i),c.send(r,"POST",u,n,15)})}Bo(e,r,n){const i=uh(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=ox(),l=ix(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,r,n),c.encodeInitMessageHeaders=!0;const h=o.join("");Y(mt,`Creating RPC '${e}' stream ${i}: ${h}`,c);const p=s.createWebChannel(h,c);let m=!1,E=!1;const S=new I2({Io:O=>{E?Y(mt,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(m||(Y(mt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),Y(mt,`RPC '${e}' stream ${i} sending:`,O),p.send(O))},To:()=>p.close()}),N=(O,x,y)=>{O.listen(x,I=>{try{y(I)}catch(L){setTimeout(()=>{throw L},0)}})};return N(p,Fs.EventType.OPEN,()=>{E||(Y(mt,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),N(p,Fs.EventType.CLOSE,()=>{E||(E=!0,Y(mt,`RPC '${e}' stream ${i} transport closed`),S.So())}),N(p,Fs.EventType.ERROR,O=>{E||(E=!0,Oo(mt,`RPC '${e}' stream ${i} transport errored:`,O),S.So(new G(M.UNAVAILABLE,"The operation could not be completed")))}),N(p,Fs.EventType.MESSAGE,O=>{var x;if(!E){const y=O.data[0];ye(!!y);const I=y,L=I.error||((x=I[0])===null||x===void 0?void 0:x.error);if(L){Y(mt,`RPC '${e}' stream ${i} received error:`,L);const j=L.status;let B=function(_){const T=We[_];if(T!==void 0)return Px(T)}(j),b=L.message;B===void 0&&(B=M.INTERNAL,b="Unknown error status: "+j+" with message "+L.message),E=!0,S.So(new G(B,b)),p.close()}else Y(mt,`RPC '${e}' stream ${i} received:`,y),S.bo(y)}}),N(l,nx.STAT_EVENT,O=>{O.stat===Df.PROXY?Y(mt,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===Df.NOPROXY&&Y(mt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function dh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t){return new VN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e,r,n=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=r,this.ko=n,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const r=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,r-n);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${r} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e,r,n,i,o,s,l,c){this.ui=e,this.Ho=n,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Bx(e,r)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,r){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():r&&r.code===M.RESOURCE_EXHAUSTED?(an(r.toString()),an("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):r&&r.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(r)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),r=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Yo===r&&this.P_(n,i)},n=>{e(()=>{const i=new G(M.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(i)})})}P_(e,r){const n=this.h_(this.Yo);this.stream=this.T_(e,r),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{n(()=>this.I_(i))}),this.stream.onMessage(i=>{n(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return r=>{this.ui.enqueueAndForget(()=>this.Yo===e?r():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class S2 extends qx{constructor(e,r,n,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",r,n,i,s),this.serializer=o}T_(e,r){return this.connection.Bo("Listen",e,r)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const r=FN(this.serializer,e),n=function(o){if(!("targetChange"in o))return re.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?re.min():s.readTime?Nr(s.readTime):re.min()}(e);return this.listener.d_(r,n)}A_(e){const r={};r.database=qf(this.serializer),r.addTarget=function(o,s){let l;const c=s.target;if(l=$f(c)?{documents:zN(o,c)}:{query:BN(o,c)._t},l.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){l.resumeToken=Dx(o,s.resumeToken);const u=jf(o,s.expectedCount);u!==null&&(l.expectedCount=u)}else if(s.snapshotVersion.compareTo(re.min())>0){l.readTime=du(o,s.snapshotVersion.toTimestamp());const u=jf(o,s.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const n=HN(this.serializer,e);n&&(r.labels=n),this.a_(r)}R_(e){const r={};r.database=qf(this.serializer),r.removeTarget=e,this.a_(r)}}class k2 extends qx{constructor(e,r,n,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",r,n,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,r){return this.connection.Bo("Write",e,r)}E_(e){return ye(!!e.streamToken),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const r=jN(e.writeResults,e.commitTime),n=Nr(e.commitTime);return this.listener.g_(n,r)}p_(){const e={};e.database=qf(this.serializer),this.a_(e)}m_(e){const r={streamToken:this.lastStreamToken,writes:e.map(n=>UN(this.serializer,n))};this.a_(r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2 extends class{}{constructor(e,r,n,i){super(),this.authCredentials=e,this.appCheckCredentials=r,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,r,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,zf(r,n),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(M.UNKNOWN,o.toString())})}Lo(e,r,n,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,l])=>this.connection.Lo(e,zf(r,n),i,s,l,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(M.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class R2{constructor(e,r){this.asyncQueue=e,this.onlineStateHandler=r,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const r=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(an(r),this.D_=!1):Y("OnlineStateTracker",r)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e,r,n,i,o){this.localStore=e,this.datastore=r,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{n.enqueueAndForget(async()=>{zi(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=ne(c);u.L_.add(4),await rl(u),u.q_.set("Unknown"),u.L_.delete(4),await Ku(u)}(this))})}),this.q_=new R2(n,i)}}async function Ku(t){if(zi(t))for(const e of t.B_)await e(!0)}async function rl(t){for(const e of t.B_)await e(!1)}function Hx(t,e){const r=ne(t);r.N_.has(e.targetId)||(r.N_.set(e.targetId,e),Jm(r)?Xm(r):Zo(r).r_()&&Ym(r,e))}function Qm(t,e){const r=ne(t),n=Zo(r);r.N_.delete(e),n.r_()&&Wx(r,e),r.N_.size===0&&(n.r_()?n.o_():zi(r)&&r.q_.set("Unknown"))}function Ym(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const r=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(r)}Zo(t).A_(e)}function Wx(t,e){t.Q_.xe(e),Zo(t).R_(e)}function Xm(t){t.Q_=new NN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Zo(t).start(),t.q_.v_()}function Jm(t){return zi(t)&&!Zo(t).n_()&&t.N_.size>0}function zi(t){return ne(t).L_.size===0}function Kx(t){t.Q_=void 0}async function N2(t){t.q_.set("Online")}async function O2(t){t.N_.forEach((e,r)=>{Ym(t,e)})}async function D2(t,e){Kx(t),Jm(t)?(t.q_.M_(e),Xm(t)):t.q_.set("Unknown")}async function L2(t,e,r){if(t.q_.set("Online"),e instanceof Ox&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const l of o.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,s),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(n){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await hu(t,n)}else if(e instanceof Ac?t.Q_.Ke(e):e instanceof Nx?t.Q_.He(e):t.Q_.We(e),!r.isEqual(re.min()))try{const n=await zx(t.localStore);r.compareTo(n)>=0&&await function(o,s){const l=o.Q_.rt(s);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=o.N_.get(u);h&&o.N_.set(u,h.withResumeToken(c.resumeToken,s))}}),l.targetMismatches.forEach((c,u)=>{const h=o.N_.get(c);if(!h)return;o.N_.set(c,h.withResumeToken(ct.EMPTY_BYTE_STRING,h.snapshotVersion)),Wx(o,c);const p=new Rn(h.target,c,u,h.sequenceNumber);Ym(o,p)}),o.remoteSyncer.applyRemoteEvent(l)}(t,r)}catch(n){Y("RemoteStore","Failed to raise snapshot:",n),await hu(t,n)}}async function hu(t,e,r){if(!Za(e))throw e;t.L_.add(1),await rl(t),t.q_.set("Offline"),r||(r=()=>zx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await r(),t.L_.delete(1),await Ku(t)})}function Gx(t,e){return e().catch(r=>hu(t,r,e))}async function Gu(t){const e=ne(t),r=Wn(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;V2(e);)try{const i=await _2(e.localStore,n);if(i===null){e.O_.length===0&&r.o_();break}n=i.batchId,M2(e,i)}catch(i){await hu(e,i)}Qx(e)&&Yx(e)}function V2(t){return zi(t)&&t.O_.length<10}function M2(t,e){t.O_.push(e);const r=Wn(t);r.r_()&&r.V_&&r.m_(e.mutations)}function Qx(t){return zi(t)&&!Wn(t).n_()&&t.O_.length>0}function Yx(t){Wn(t).start()}async function $2(t){Wn(t).p_()}async function F2(t){const e=Wn(t);for(const r of t.O_)e.m_(r.mutations)}async function U2(t,e,r){const n=t.O_.shift(),i=Bm.from(n,e,r);await Gx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Gu(t)}async function j2(t,e){e&&Wn(t).V_&&await async function(n,i){if(function(s){return CN(s)&&s!==M.ABORTED}(i.code)){const o=n.O_.shift();Wn(n).s_(),await Gx(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Gu(n)}}(t,e),Qx(t)&&Yx(t)}async function W_(t,e){const r=ne(t);r.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const n=zi(r);r.L_.add(3),await rl(r),n&&r.q_.set("Unknown"),await r.remoteSyncer.handleCredentialChange(e),r.L_.delete(3),await Ku(r)}async function z2(t,e){const r=ne(t);e?(r.L_.delete(2),await Ku(r)):e||(r.L_.add(2),await rl(r),r.q_.set("Unknown"))}function Zo(t){return t.K_||(t.K_=function(r,n,i){const o=ne(r);return o.w_(),new S2(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:N2.bind(null,t),Ro:O2.bind(null,t),mo:D2.bind(null,t),d_:L2.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Jm(t)?Xm(t):t.q_.set("Unknown")):(await t.K_.stop(),Kx(t))})),t.K_}function Wn(t){return t.U_||(t.U_=function(r,n,i){const o=ne(r);return o.w_(),new k2(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:$2.bind(null,t),mo:j2.bind(null,t),f_:F2.bind(null,t),g_:U2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Gu(t)):(await t.U_.stop(),t.O_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,r,n,i,o){this.asyncQueue=e,this.timerId=r,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new Ei,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,r,n,i,o){const s=Date.now()+n,l=new Zm(e,r,s,i,o);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function eg(t,e){if(an("AsyncQueue",`${e}: ${t}`),Za(t))return new G(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e){this.comparator=e?(r,n)=>e(r,n)||J.comparator(r.key,n.key):(r,n)=>J.comparator(r.key,n.key),this.keyedMap=Us(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new To(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const r=this.keyedMap.get(e);return r?this.sortedSet.indexOf(r):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((r,n)=>(e(r),!1))}add(e){const r=this.delete(e.key);return r.copy(r.keyedMap.insert(e.key,e),r.sortedSet.insert(e,null))}delete(e){const r=this.get(e);return r?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(r)):this}isEqual(e){if(!(e instanceof To)||this.size!==e.size)return!1;const r=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;r.hasNext();){const i=r.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(r=>{e.push(r.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,r){const n=new To;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=r,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(){this.W_=new Ve(J.comparator)}track(e){const r=e.doc.key,n=this.W_.get(r);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(r,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(r,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(r,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(r,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(r):e.type===1&&n.type===2?this.W_=this.W_.insert(r,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(r,{type:2,doc:e.doc}):te():this.W_=this.W_.insert(r,e)}G_(){const e=[];return this.W_.inorderTraversal((r,n)=>{e.push(n)}),e}}class Fo{constructor(e,r,n,i,o,s,l,c,u){this.query=e,this.docs=r,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,r,n,i,o){const s=[];return r.forEach(l=>{s.push({type:0,doc:l})}),new Fo(e,r,To.emptySet(r),s,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ju(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const r=this.docChanges,n=e.docChanges;if(r.length!==n.length)return!1;for(let i=0;i<r.length;i++)if(r[i].type!==n[i].type||!r[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class q2{constructor(){this.queries=G_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(r,n){const i=ne(r),o=i.queries;i.queries=G_(),o.forEach((s,l)=>{for(const c of l.j_)c.onError(n)})})(this,new G(M.ABORTED,"Firestore shutting down"))}}function G_(){return new Jo(t=>yx(t),ju)}async function H2(t,e){const r=ne(t);let n=3;const i=e.query;let o=r.queries.get(i);o?!o.H_()&&e.J_()&&(n=2):(o=new B2,n=e.J_()?0:1);try{switch(n){case 0:o.z_=await r.onListen(i,!0);break;case 1:o.z_=await r.onListen(i,!1);break;case 2:await r.onFirstRemoteStoreListen(i)}}catch(s){const l=eg(s,`Initialization of query '${Ji(e.query)}' failed`);return void e.onError(l)}r.queries.set(i,o),o.j_.push(e),e.Z_(r.onlineState),o.z_&&e.X_(o.z_)&&tg(r)}async function W2(t,e){const r=ne(t),n=e.query;let i=3;const o=r.queries.get(n);if(o){const s=o.j_.indexOf(e);s>=0&&(o.j_.splice(s,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return r.queries.delete(n),r.onUnlisten(n,!0);case 1:return r.queries.delete(n),r.onUnlisten(n,!1);case 2:return r.onLastRemoteStoreUnlisten(n);default:return}}function K2(t,e){const r=ne(t);let n=!1;for(const i of e){const o=i.query,s=r.queries.get(o);if(s){for(const l of s.j_)l.X_(i)&&(n=!0);s.z_=i}}n&&tg(r)}function G2(t,e,r){const n=ne(t),i=n.queries.get(e);if(i)for(const o of i.j_)o.onError(r);n.queries.delete(e)}function tg(t){t.Y_.forEach(e=>{e.next()})}var Wf,Q_;(Q_=Wf||(Wf={})).ea="default",Q_.Cache="cache";class Q2{constructor(e,r,n){this.query=e,this.ta=r,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new Fo(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let r=!1;return this.na?this.ia(e)&&(this.ta.next(e),r=!0):this.sa(e,this.onlineState)&&(this.oa(e),r=!0),this.ra=e,r}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let r=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),r=!0),r}sa(e,r){if(!e.fromCache||!this.J_())return!0;const n=r!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||r==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const r=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!r)&&this.options.includeMetadataChanges===!0}oa(e){e=Fo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Wf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e){this.key=e}}class Jx{constructor(e){this.key=e}}class Y2{constructor(e,r){this.query=e,this.Ta=r,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=le(),this.mutatedKeys=le(),this.Aa=_x(e),this.Ra=new To(this.Aa)}get Va(){return this.Ta}ma(e,r){const n=r?r.fa:new K_,i=r?r.Ra:this.Ra;let o=r?r.mutatedKeys:this.mutatedKeys,s=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,p)=>{const m=i.get(h),E=zu(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),N=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let O=!1;m&&E?m.data.isEqual(E.data)?S!==N&&(n.track({type:3,doc:E}),O=!0):this.ga(m,E)||(n.track({type:2,doc:E}),O=!0,(c&&this.Aa(E,c)>0||u&&this.Aa(E,u)<0)&&(l=!0)):!m&&E?(n.track({type:0,doc:E}),O=!0):m&&!E&&(n.track({type:1,doc:m}),O=!0,(c||u)&&(l=!0)),O&&(E?(s=s.add(E),o=N?o.add(h):o.delete(h)):(s=s.delete(h),o=o.delete(h)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const h=this.query.limitType==="F"?s.last():s.first();s=s.delete(h.key),o=o.delete(h.key),n.track({type:1,doc:h})}return{Ra:s,fa:n,ns:l,mutatedKeys:o}}ga(e,r){return e.hasLocalMutations&&r.hasCommittedMutations&&!r.hasLocalMutations}applyChanges(e,r,n,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((h,p)=>function(E,S){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return N(E)-N(S)}(h.type,p.type)||this.Aa(h.doc,p.doc)),this.pa(n),i=i!=null&&i;const l=r&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,u=c!==this.Ea;return this.Ea=c,s.length!==0||u?{snapshot:new Fo(this.query,e.Ra,o,s,e.mutatedKeys,c===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new K_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(r=>this.Ta=this.Ta.add(r)),e.modifiedDocuments.forEach(r=>{}),e.removedDocuments.forEach(r=>this.Ta=this.Ta.delete(r)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=le(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const r=[];return e.forEach(n=>{this.da.has(n)||r.push(new Jx(n))}),this.da.forEach(n=>{e.has(n)||r.push(new Xx(n))}),r}ba(e){this.Ta=e.Ts,this.da=le();const r=this.ma(e.documents);return this.applyChanges(r,!0)}Da(){return Fo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class X2{constructor(e,r,n){this.query=e,this.targetId=r,this.view=n}}class J2{constructor(e){this.key=e,this.va=!1}}class Z2{constructor(e,r,n,i,o,s){this.localStore=e,this.remoteStore=r,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new Jo(l=>yx(l),ju),this.Ma=new Map,this.xa=new Set,this.Oa=new Ve(J.comparator),this.Na=new Map,this.La=new Wm,this.Ba={},this.ka=new Map,this.qa=$o.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function eO(t,e,r=!0){const n=iT(t);let i;const o=n.Fa.get(e);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await Zx(n,e,r,!0),i}async function tO(t,e){const r=iT(t);await Zx(r,e,!0,!1)}async function Zx(t,e,r,n){const i=await w2(t.localStore,Pr(e)),o=i.targetId,s=t.sharedClientState.addLocalQueryTarget(o,r);let l;return n&&(l=await rO(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&r&&Hx(t.remoteStore,i),l}async function rO(t,e,r,n,i){t.Ka=(p,m,E)=>async function(N,O,x,y){let I=O.view.ma(x);I.ns&&(I=await B_(N.localStore,O.query,!1).then(({documents:b})=>O.view.ma(b,I)));const L=y&&y.targetChanges.get(O.targetId),j=y&&y.targetMismatches.get(O.targetId)!=null,B=O.view.applyChanges(I,N.isPrimaryClient,L,j);return X_(N,O.targetId,B.wa),B.snapshot}(t,p,m,E);const o=await B_(t.localStore,e,!0),s=new Y2(e,o.Ts),l=s.ma(o.documents),c=tl.createSynthesizedTargetChangeForCurrentChange(r,n&&t.onlineState!=="Offline",i),u=s.applyChanges(l,t.isPrimaryClient,c);X_(t,r,u.wa);const h=new X2(e,r,s);return t.Fa.set(e,h),t.Ma.has(r)?t.Ma.get(r).push(e):t.Ma.set(r,[e]),u.snapshot}async function nO(t,e,r){const n=ne(t),i=n.Fa.get(e),o=n.Ma.get(i.targetId);if(o.length>1)return n.Ma.set(i.targetId,o.filter(s=>!ju(s,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Hf(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),r&&Qm(n.remoteStore,i.targetId),Kf(n,i.targetId)}).catch(Ja)):(Kf(n,i.targetId),await Hf(n.localStore,i.targetId,!0))}async function iO(t,e){const r=ne(t),n=r.Fa.get(e),i=r.Ma.get(n.targetId);r.isPrimaryClient&&i.length===1&&(r.sharedClientState.removeLocalQueryTarget(n.targetId),Qm(r.remoteStore,n.targetId))}async function oO(t,e,r){const n=hO(t);try{const i=await function(s,l){const c=ne(s),u=Xe.now(),h=l.reduce((E,S)=>E.add(S.key),le());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",E=>{let S=ln(),N=le();return c.cs.getEntries(E,h).next(O=>{S=O,S.forEach((x,y)=>{y.isValidDocument()||(N=N.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(E,S)).next(O=>{p=O;const x=[];for(const y of l){const I=TN(y,p.get(y.key).overlayedDocument);I!=null&&x.push(new Zn(y.key,I,ux(I.value.mapValue),sr.exists(!0)))}return c.mutationQueue.addMutationBatch(E,u,x,l)}).next(O=>{m=O;const x=O.applyToLocalDocumentSet(p,N);return c.documentOverlayCache.saveOverlays(E,O.batchId,x)})}).then(()=>({batchId:m.batchId,changes:bx(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(s,l,c){let u=s.Ba[s.currentUser.toKey()];u||(u=new Ve(pe)),u=u.insert(l,c),s.Ba[s.currentUser.toKey()]=u}(n,i.batchId,r),await nl(n,i.changes),await Gu(n.remoteStore)}catch(i){const o=eg(i,"Failed to persist write");r.reject(o)}}async function eT(t,e){const r=ne(t);try{const n=await v2(r.localStore,e);e.targetChanges.forEach((i,o)=>{const s=r.Na.get(o);s&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.va=!0:i.modifiedDocuments.size>0?ye(s.va):i.removedDocuments.size>0&&(ye(s.va),s.va=!1))}),await nl(r,n,e)}catch(n){await Ja(n)}}function Y_(t,e,r){const n=ne(t);if(n.isPrimaryClient&&r===0||!n.isPrimaryClient&&r===1){const i=[];n.Fa.forEach((o,s)=>{const l=s.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(s,l){const c=ne(s);c.onlineState=l;let u=!1;c.queries.forEach((h,p)=>{for(const m of p.j_)m.Z_(l)&&(u=!0)}),u&&tg(c)}(n.eventManager,e),i.length&&n.Ca.d_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function sO(t,e,r){const n=ne(t);n.sharedClientState.updateQueryState(e,"rejected",r);const i=n.Na.get(e),o=i&&i.key;if(o){let s=new Ve(J.comparator);s=s.insert(o,yt.newNoDocument(o,re.min()));const l=le().add(o),c=new Hu(re.min(),new Map,new Ve(pe),s,l);await eT(n,c),n.Oa=n.Oa.remove(o),n.Na.delete(e),rg(n)}else await Hf(n.localStore,e,!1).then(()=>Kf(n,e,r)).catch(Ja)}async function aO(t,e){const r=ne(t),n=e.batch.batchId;try{const i=await g2(r.localStore,e);rT(r,n,null),tT(r,n),r.sharedClientState.updateMutationState(n,"acknowledged"),await nl(r,i)}catch(i){await Ja(i)}}async function lO(t,e,r){const n=ne(t);try{const i=await function(s,l){const c=ne(s);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(ye(p!==null),h=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(n.localStore,e);rT(n,e,r),tT(n,e),n.sharedClientState.updateMutationState(e,"rejected",r),await nl(n,i)}catch(i){await Ja(i)}}function tT(t,e){(t.ka.get(e)||[]).forEach(r=>{r.resolve()}),t.ka.delete(e)}function rT(t,e,r){const n=ne(t);let i=n.Ba[n.currentUser.toKey()];if(i){const o=i.get(e);o&&(r?o.reject(r):o.resolve(),i=i.remove(e)),n.Ba[n.currentUser.toKey()]=i}}function Kf(t,e,r=null){t.sharedClientState.removeLocalQueryTarget(e);for(const n of t.Ma.get(e))t.Fa.delete(n),r&&t.Ca.$a(n,r);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(n=>{t.La.containsKey(n)||nT(t,n)})}function nT(t,e){t.xa.delete(e.path.canonicalString());const r=t.Oa.get(e);r!==null&&(Qm(t.remoteStore,r),t.Oa=t.Oa.remove(e),t.Na.delete(r),rg(t))}function X_(t,e,r){for(const n of r)n instanceof Xx?(t.La.addReference(n.key,e),cO(t,n)):n instanceof Jx?(Y("SyncEngine","Document no longer in limbo: "+n.key),t.La.removeReference(n.key,e),t.La.containsKey(n.key)||nT(t,n.key)):te()}function cO(t,e){const r=e.key,n=r.path.canonicalString();t.Oa.get(r)||t.xa.has(n)||(Y("SyncEngine","New document in limbo: "+r),t.xa.add(n),rg(t))}function rg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const r=new J(Ae.fromString(e)),n=t.qa.next();t.Na.set(n,new J2(r)),t.Oa=t.Oa.insert(r,n),Hx(t.remoteStore,new Rn(Pr(Um(r.path)),n,"TargetPurposeLimboResolution",Dm.oe))}}async function nl(t,e,r){const n=ne(t),i=[],o=[],s=[];n.Fa.isEmpty()||(n.Fa.forEach((l,c)=>{s.push(n.Ka(c,e,r).then(u=>{var h;if((u||r)&&n.isPrimaryClient){const p=u?!u.fromCache:(h=r==null?void 0:r.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;n.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){i.push(u);const p=Gm.Wi(c.targetId,u);o.push(p)}}))}),await Promise.all(s),n.Ca.d_(i),await async function(c,u){const h=ne(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>$.forEach(u,m=>$.forEach(m.$i,E=>h.persistence.referenceDelegate.addReference(p,m.targetId,E)).next(()=>$.forEach(m.Ui,E=>h.persistence.referenceDelegate.removeReference(p,m.targetId,E)))))}catch(p){if(!Za(p))throw p;Y("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const E=h.os.get(m),S=E.snapshotVersion,N=E.withLastLimboFreeSnapshotVersion(S);h.os=h.os.insert(m,N)}}}(n.localStore,o))}async function uO(t,e){const r=ne(t);if(!r.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const n=await jx(r.localStore,e);r.currentUser=e,function(o,s){o.ka.forEach(l=>{l.forEach(c=>{c.reject(new G(M.CANCELLED,s))})}),o.ka.clear()}(r,"'waitForPendingWrites' promise is rejected due to a user change."),r.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await nl(r,n.hs)}}function dO(t,e){const r=ne(t),n=r.Na.get(e);if(n&&n.va)return le().add(n.key);{let i=le();const o=r.Ma.get(e);if(!o)return i;for(const s of o){const l=r.Fa.get(s);i=i.unionWith(l.view.Va)}return i}}function iT(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=eT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sO.bind(null,e),e.Ca.d_=K2.bind(null,e.eventManager),e.Ca.$a=G2.bind(null,e.eventManager),e}function hO(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=aO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lO.bind(null,e),e}class fu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,r){return null}Ha(e,r){return null}za(e){return m2(this.persistence,new f2,e.initialUser,this.serializer)}Ga(e){return new u2(Km.Zr,this.serializer)}Wa(e){return new E2}async terminate(){var e,r;(e=this.gcScheduler)===null||e===void 0||e.stop(),(r=this.indexBackfillerScheduler)===null||r===void 0||r.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fu.provider={build:()=>new fu};class Gf{async initialize(e,r){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(r),this.remoteStore=this.createRemoteStore(r),this.eventManager=this.createEventManager(r),this.syncEngine=this.createSyncEngine(r,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Y_(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=uO.bind(null,this.syncEngine),await z2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new q2}()}createDatastore(e){const r=Wu(e.databaseInfo.databaseId),n=function(o){return new A2(o)}(e.databaseInfo);return function(o,s,l,c){return new C2(o,s,l,c)}(e.authCredentials,e.appCheckCredentials,n,r)}createRemoteStore(e){return function(n,i,o,s,l){return new P2(n,i,o,s,l)}(this.localStore,this.datastore,e.asyncQueue,r=>Y_(this.syncEngine,r,0),function(){return H_.D()?new H_:new x2}())}createSyncEngine(e,r){return function(i,o,s,l,c,u,h){const p=new Z2(i,o,s,l,c,u);return h&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,r)}async terminate(){var e,r;await async function(i){const o=ne(i);Y("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await rl(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(r=this.eventManager)===null||r===void 0||r.terminate()}}Gf.provider={build:()=>new Gf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fO{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):an("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,r){setTimeout(()=>{this.muted||e(r)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e,r,n,i,o){this.authCredentials=e,this.appCheckCredentials=r,this.asyncQueue=n,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=ax.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async s=>{Y("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(n,s=>(Y("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ei;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){const n=eg(r,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function hh(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const r=t.configuration;await e.initialize(r);let n=r.initialUser;t.setCredentialChangeListener(async i=>{n.isEqual(i)||(await jx(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function J_(t,e){t.asyncQueue.verifyOperationInProgress();const r=await mO(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(r,t.configuration),t.setCredentialChangeListener(n=>W_(e.remoteStore,n)),t.setAppCheckTokenChangeListener((n,i)=>W_(e.remoteStore,i)),t._onlineComponents=e}async function mO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await hh(t,t._uninitializedComponentsProvider._offline)}catch(e){const r=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(r))throw r;Oo("Error using user provided cache. Falling back to memory cache: "+r),await hh(t,new fu)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await hh(t,new fu);return t._offlineComponents}async function oT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await J_(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await J_(t,new Gf))),t._onlineComponents}function gO(t){return oT(t).then(e=>e.syncEngine)}async function Z_(t){const e=await oT(t),r=e.eventManager;return r.onListen=eO.bind(null,e.syncEngine),r.onUnlisten=nO.bind(null,e.syncEngine),r.onFirstRemoteStoreListen=tO.bind(null,e.syncEngine),r.onLastRemoteStoreUnlisten=iO.bind(null,e.syncEngine),r}/**
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
 */function sT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(t,e,r){if(!r)throw new G(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vO(t,e,r,n){if(e===!0&&n===!0)throw new G(M.INVALID_ARGUMENT,`${t} and ${r} cannot be used together.`)}function tw(t){if(!J.isDocumentKey(t))throw new G(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rw(t){if(J.isDocumentKey(t))throw new G(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function Or(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=Qu(t);throw new G(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${r}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e){var r,n;if(e.host===void 0){if(e.ssl!==void 0)throw new G(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(r=e.ssl)===null||r===void 0||r;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sT((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yu{constructor(e,r,n,i){this._authCredentials=e,this._appCheckCredentials=r,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nw({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nw(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new OP;switch(n.type){case"firstParty":return new MP(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new G(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(r){const n=ew.get(r);n&&(Y("ComponentProvider","Removing Datastore"),ew.delete(r),n.terminate())}(this),Promise.resolve()}}function yO(t,e,r,n={}){var i;const o=(t=Or(t,Yu))._getSettings(),s=`${e}:${r}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Oo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),n.mockUserToken){let l,c;if(typeof n.mockUserToken=="string")l=n.mockUserToken,c=gt.MOCK_USER;else{l=Xk(n.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=n.mockUserToken.sub||n.mockUserToken.user_id;if(!u)throw new G(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new gt(u)}t._authCredentials=new DP(new sx(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,r,n){this.converter=r,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Bi(this.firestore,e,this._query)}}class St{constructor(e,r,n){this.converter=r,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class Un extends Bi{constructor(e,r,n){super(e,r,Um(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new J(e))}withConverter(e){return new Un(this.firestore,e,this._path)}}function iw(t,e,...r){if(t=Fe(t),aT("collection","path",e),t instanceof Yu){const n=Ae.fromString(e,...r);return rw(n),new Un(t,null,n)}{if(!(t instanceof St||t instanceof Un))throw new G(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(Ae.fromString(e,...r));return rw(n),new Un(t.firestore,null,n)}}function Ot(t,e,...r){if(t=Fe(t),arguments.length===1&&(e=ax.newId()),aT("doc","path",e),t instanceof Yu){const n=Ae.fromString(e,...r);return tw(n),new St(t,null,new J(n))}{if(!(t instanceof St||t instanceof Un))throw new G(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(Ae.fromString(e,...r));return tw(n),new St(t.firestore,t instanceof Un?t.converter:null,new J(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Bx(this,"async_queue_retry"),this.Vu=()=>{const n=dh();n&&Y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const r=dh();r&&typeof r.addEventListener=="function"&&r.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const r=dh();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const r=new Ei;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(r.resolve,r.reject),r.promise)).then(()=>r.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Za(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const r=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const i=function(s){let l=s.message||"";return s.stack&&(l=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),l}(n);throw an("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.du=!1,n))));return this.mu=r,r}enqueueAfterDelay(e,r,n){this.fu(),this.Ru.indexOf(e)>-1&&(r=0);const i=Zm.createAndSchedule(this,e,r,n,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&te()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const r of this.Tu)if(r.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((r,n)=>r.targetTimeMs-n.targetTimeMs);for(const r of this.Tu)if(r.skipDelay(),e!=="all"&&r.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const r=this.Tu.indexOf(e);this.Tu.splice(r,1)}}function sw(t){return function(r,n){if(typeof r!="object"||r===null)return!1;const i=r;for(const o of n)if(o in i&&typeof i[o]=="function")return!0;return!1}(t,["next","error","complete"])}class Di extends Yu{constructor(e,r,n,i){super(e,r,n,i),this.type="firestore",this._queue=new ow,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ow(e),this._firestoreClient=void 0,await e}}}function _O(t,e){const r=typeof t=="object"?t:bm(),n=typeof t=="string"?t:"(default)",i=Wo(r,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=Qk("firestore");o&&yO(i,...o)}return i}function lT(t){if(t._terminated)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||wO(t),t._firestoreClient}function wO(t){var e,r,n;const i=t._freezeSettings(),o=function(l,c,u,h){return new YP(l,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,sT(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((r=i.localCache)===null||r===void 0)&&r._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new pO(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Uo(ct.fromBase64String(e))}catch(r){throw new G(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(e){return new Uo(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(...e){for(let r=0;r<e.length;++r)if(e[r].length===0)throw new G(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,r){if(!isFinite(e)||e<-90||e>90)throw new G(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(r)||r<-180||r>180)throw new G(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=e,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
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
 */class ig{constructor(e){this._values=(e||[]).map(r=>r)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO=/^__.*__$/;class EO{constructor(e,r,n){this.data=e,this.fieldMask=r,this.fieldTransforms=n}toMutation(e,r){return this.fieldMask!==null?new Zn(e,this.data,this.fieldMask,r,this.fieldTransforms):new el(e,this.data,r,this.fieldTransforms)}}class cT{constructor(e,r,n){this.data=e,this.fieldMask=r,this.fieldTransforms=n}toMutation(e,r){return new Zn(e,this.data,this.fieldMask,r,this.fieldTransforms)}}function uT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class Ju{constructor(e,r,n,i,o,s){this.settings=e,this.databaseId=r,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Ju(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var r;const n=(r=this.path)===null||r===void 0?void 0:r.child(e),i=this.Fu({path:n,xu:!1});return i.Ou(e),i}Nu(e){var r;const n=(r=this.path)===null||r===void 0?void 0:r.child(e),i=this.Fu({path:n,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return pu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(r=>e.isPrefixOf(r))!==void 0||this.fieldTransforms.find(r=>e.isPrefixOf(r.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(uT(this.Cu)&&bO.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class xO{constructor(e,r,n){this.databaseId=e,this.ignoreUndefinedProperties=r,this.serializer=n||Wu(e)}Qu(e,r,n,i=!1){return new Ju({Cu:e,methodName:r,qu:n,path:ot.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zu(t){const e=t._freezeSettings(),r=Wu(t._databaseId);return new xO(t._databaseId,!!e.ignoreUndefinedProperties,r)}function dT(t,e,r,n,i,o={}){const s=t.Qu(o.merge||o.mergeFields?2:0,e,r,i);ag("Data must be an object, but it was:",s,n);const l=hT(n,s);let c,u;if(o.merge)c=new Bt(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const h=[];for(const p of o.mergeFields){const m=Qf(e,p,r);if(!s.contains(m))throw new G(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);pT(h,m)||h.push(m)}c=new Bt(h),u=s.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=s.fieldTransforms;return new EO(new Lt(l),c,u)}class ed extends il{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ed}}function TO(t,e,r){return new Ju({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:r},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class og extends il{_toFieldTransform(e){return new kx(e.path,new Oa)}isEqual(e){return e instanceof og}}class sg extends il{constructor(e,r){super(e),this.Ku=r}_toFieldTransform(e){const r=TO(this,e,!0),n=this.Ku.map(o=>es(o,r)),i=new Mo(n);return new kx(e.path,i)}isEqual(e){return e instanceof sg&&Ta(this.Ku,e.Ku)}}function IO(t,e,r,n){const i=t.Qu(1,e,r);ag("Data must be an object, but it was:",i,n);const o=[],s=Lt.empty();ji(n,(c,u)=>{const h=lg(e,c,r);u=Fe(u);const p=i.Nu(h);if(u instanceof ed)o.push(h);else{const m=es(u,p);m!=null&&(o.push(h),s.set(h,m))}});const l=new Bt(o);return new cT(s,l,i.fieldTransforms)}function AO(t,e,r,n,i,o){const s=t.Qu(1,e,r),l=[Qf(e,n,r)],c=[i];if(o.length%2!=0)throw new G(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<o.length;m+=2)l.push(Qf(e,o[m])),c.push(o[m+1]);const u=[],h=Lt.empty();for(let m=l.length-1;m>=0;--m)if(!pT(u,l[m])){const E=l[m];let S=c[m];S=Fe(S);const N=s.Nu(E);if(S instanceof ed)u.push(E);else{const O=es(S,N);O!=null&&(u.push(E),h.set(E,O))}}const p=new Bt(u);return new cT(h,p,s.fieldTransforms)}function SO(t,e,r,n=!1){return es(r,t.Qu(n?4:3,e))}function es(t,e){if(fT(t=Fe(t)))return ag("Unsupported field value:",e,t),hT(t,e);if(t instanceof il)return function(n,i){if(!uT(i.Cu))throw i.Bu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,i){const o=[];let s=0;for(const l of n){let c=es(l,i.Lu(s));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),s++}return{arrayValue:{values:o}}}(t,e)}return function(n,i){if((n=Fe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return yN(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=Xe.fromDate(n);return{timestampValue:du(i.serializer,o)}}if(n instanceof Xe){const o=new Xe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:du(i.serializer,o)}}if(n instanceof ng)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Uo)return{bytesValue:Dx(i.serializer,n._byteString)};if(n instanceof St){const o=i.databaseId,s=n.firestore._databaseId;if(!s.isEqual(o))throw i.Bu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Hm(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof ig)return function(s,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return jm(l.serializer,c)})}}}}}}(n,i);throw i.Bu(`Unsupported field value: ${Qu(n)}`)}(t,e)}function hT(t,e){const r={};return lx(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ji(t,(n,i)=>{const o=es(i,e.Mu(n));o!=null&&(r[n]=o)}),{mapValue:{fields:r}}}function fT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof ng||t instanceof Uo||t instanceof St||t instanceof il||t instanceof ig)}function ag(t,e,r){if(!fT(r)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(r)){const n=Qu(r);throw n==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+n)}}function Qf(t,e,r){if((e=Fe(e))instanceof Xu)return e._internalPath;if(typeof e=="string")return lg(t,e);throw pu("Field path arguments must be of type string or ",t,!1,void 0,r)}const kO=new RegExp("[~\\*/\\[\\]]");function lg(t,e,r){if(e.search(kO)>=0)throw pu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,r);try{return new Xu(...e.split("."))._internalPath}catch{throw pu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,r)}}function pu(t,e,r,n,i){const o=n&&!n.isEmpty(),s=i!==void 0;let l=`Function ${e}() called with invalid data`;r&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=` in field ${n}`),s&&(c+=` in document ${i}`),c+=")"),new G(M.INVALID_ARGUMENT,l+t+c)}function pT(t,e){return t.some(r=>r.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,r,n,i,o){this._firestore=e,this._userDataWriter=r,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const r=this._document.data.field(td("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r)}}}class CO extends mT{data(){return super.data()}}function td(t,e){return typeof e=="string"?lg(t,e):e instanceof Xu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cg{}class gT extends cg{}function PO(t,e,...r){let n=[];e instanceof cg&&n.push(e),n=n.concat(r),function(o){const s=o.filter(c=>c instanceof ug).length,l=o.filter(c=>c instanceof rd).length;if(s>1||s>0&&l>0)throw new G(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)t=i._apply(t);return t}class rd extends gT{constructor(e,r,n){super(),this._field=e,this._op=r,this._value=n,this.type="where"}static _create(e,r,n){return new rd(e,r,n)}_apply(e){const r=this._parse(e);return vT(e._query,r),new Bi(e.firestore,e.converter,Ff(e._query,r))}_parse(e){const r=Zu(e.firestore);return function(o,s,l,c,u,h,p){let m;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new G(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){lw(p,h);const E=[];for(const S of p)E.push(aw(c,o,S));m={arrayValue:{values:E}}}else m=aw(c,o,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||lw(p,h),m=SO(l,s,p,h==="in"||h==="not-in");return Ge.create(u,h,m)}(e._query,"where",r,e.firestore._databaseId,this._field,this._op,this._value)}}function NO(t,e,r){const n=e,i=td("where",t);return rd._create(i,n,r)}class ug extends cg{constructor(e,r){super(),this.type=e,this._queryConstraints=r}static _create(e,r){return new ug(e,r)}_parse(e){const r=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return r.length===1?r[0]:Er.create(r,this._getOperator())}_apply(e){const r=this._parse(e);return r.getFilters().length===0?e:(function(i,o){let s=i;const l=o.getFlattenedFilters();for(const c of l)vT(s,c),s=Ff(s,c)}(e._query,r),new Bi(e.firestore,e.converter,Ff(e._query,r)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class dg extends gT{constructor(e,r){super(),this._field=e,this._direction=r,this.type="orderBy"}static _create(e,r){return new dg(e,r)}_apply(e){const r=function(i,o,s){if(i.startAt!==null)throw new G(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new G(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Na(o,s)}(e._query,this._field,this._direction);return new Bi(e.firestore,e.converter,function(i,o){const s=i.explicitOrderBy.concat([o]);return new Xo(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function OO(t,e="asc"){const r=e,n=td("orderBy",t);return dg._create(n,r)}function aw(t,e,r){if(typeof(r=Fe(r))=="string"){if(r==="")throw new G(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vx(e)&&r.indexOf("/")!==-1)throw new G(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);const n=e.path.child(Ae.fromString(r));if(!J.isDocumentKey(n))throw new G(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return A_(t,new J(n))}if(r instanceof St)return A_(t,r._key);throw new G(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qu(r)}.`)}function lw(t,e){if(!Array.isArray(t)||t.length===0)throw new G(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function vT(t,e){const r=function(i,o){for(const s of i)for(const l of s.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(r!==null)throw r===e.op?new G(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${r.toString()}' filters.`)}class DO{convertValue(e,r="none"){switch(Oi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,r);case 5:return e.stringValue;case 6:return this.convertBytes(Ni(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,r);case 11:return this.convertObject(e.mapValue,r);case 10:return this.convertVectorValue(e.mapValue);default:throw te()}}convertObject(e,r){return this.convertObjectMap(e.fields,r)}convertObjectMap(e,r="none"){const n={};return ji(e,(i,o)=>{n[i]=this.convertValue(o,r)}),n}convertVectorValue(e){var r,n,i;const o=(i=(n=(r=e.fields)===null||r===void 0?void 0:r.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(s=>Be(s.doubleValue));return new ig(o)}convertGeoPoint(e){return new ng(Be(e.latitude),Be(e.longitude))}convertArray(e,r){return(e.values||[]).map(n=>this.convertValue(n,r))}convertServerTimestamp(e,r){switch(r){case"previous":const n=Vm(e);return n==null?null:this.convertValue(n,r);case"estimate":return this.convertTimestamp(Ca(e));default:return null}}convertTimestamp(e){const r=Hn(e);return new Xe(r.seconds,r.nanos)}convertDocumentKey(e,r){const n=Ae.fromString(e);ye(Ux(n));const i=new Ra(n.get(1),n.get(3)),o=new J(n.popFirst(5));return i.isEqual(r)||an(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(t,e,r){let n;return n=t?r&&(r.merge||r.mergeFields)?t.toFirestore(e,r):t.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,r){this.hasPendingWrites=e,this.fromCache=r}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _T extends mT{constructor(e,r,n,i,o,s){super(e,r,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const r=new Sc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(r,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,r={}){if(this._document){const n=this._document.data.field(td("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,r.serverTimestamps)}}}class Sc extends _T{data(e={}){return super.data(e)}}class LO{constructor(e,r,n,i){this._firestore=e,this._userDataWriter=r,this._snapshot=i,this.metadata=new zs(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(r=>e.push(r)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,r){this._snapshot.docs.forEach(n=>{e.call(r,new Sc(this._firestore,this._userDataWriter,n.key,n,new zs(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const r=!!e.includeMetadataChanges;if(r&&this._snapshot.excludesMetadataChanges)throw new G(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===r||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(l=>{const c=new Sc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new zs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const c=new Sc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new zs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return l.type!==0&&(u=s.indexOf(l.doc.key),s=s.delete(l.doc.key)),l.type!==1&&(s=s.add(l.doc),h=s.indexOf(l.doc.key)),{type:VO(l.type),doc:c,oldIndex:u,newIndex:h}})}}(this,r),this._cachedChangesIncludeMetadataChanges=r),this._cachedChanges}}function VO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}class wT extends DO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Uo(e)}convertReference(e){const r=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,r)}}function Xi(t,e,r){t=Or(t,St);const n=Or(t.firestore,Di),i=yT(t.converter,e,r);return nd(n,[dT(Zu(n),"setDoc",t._key,i,t.converter!==null,r).toMutation(t._key,sr.none())])}function Cs(t,e,r,...n){t=Or(t,St);const i=Or(t.firestore,Di),o=Zu(i);let s;return s=typeof(e=Fe(e))=="string"||e instanceof Xu?AO(o,"updateDoc",t._key,e,r,n):IO(o,"updateDoc",t._key,e),nd(i,[s.toMutation(t._key,sr.exists(!0))])}function MO(t){return nd(Or(t.firestore,Di),[new zm(t._key,sr.none())])}function $O(t,e){const r=Or(t.firestore,Di),n=Ot(t),i=yT(t.converter,e);return nd(r,[dT(Zu(t.firestore),"addDoc",n._key,i,t.converter!==null,{}).toMutation(n._key,sr.exists(!1))]).then(()=>n)}function fh(t,...e){var r,n,i;t=Fe(t);let o={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||sw(e[s])||(o=e[s],s++);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(sw(e[s])){const p=e[s];e[s]=(r=p.next)===null||r===void 0?void 0:r.bind(p),e[s+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),e[s+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let c,u,h;if(t instanceof St)u=Or(t.firestore,Di),h=Um(t._key.path),c={next:p=>{e[s]&&e[s](FO(u,t,p))},error:e[s+1],complete:e[s+2]};else{const p=Or(t,Bi);u=Or(p.firestore,Di),h=p._query;const m=new wT(u);c={next:E=>{e[s]&&e[s](new LO(u,m,p,E))},error:e[s+1],complete:e[s+2]},RO(t._query)}return function(m,E,S,N){const O=new fO(N),x=new Q2(E,O,S);return m.asyncQueue.enqueueAndForget(async()=>H2(await Z_(m),x)),()=>{O.Za(),m.asyncQueue.enqueueAndForget(async()=>W2(await Z_(m),x))}}(lT(u),h,l,c)}function nd(t,e){return function(n,i){const o=new Ei;return n.asyncQueue.enqueueAndForget(async()=>oO(await gO(n),i,o)),o.promise}(lT(t),e)}function FO(t,e,r){const n=r.docs.get(e._key),i=new wT(t);return new _T(t,i,e._key,n,new zs(r.hasPendingWrites,r.fromCache),e.converter)}function si(){return new og("serverTimestamp")}function cw(...t){return new sg("arrayUnion",t)}(function(e,r=!0){(function(i){Yo=i})(Ko),Dr(new br("firestore",(n,{instanceIdentifier:i,options:o})=>{const s=n.getProvider("app").getImmediate(),l=new Di(new LP(n.getProvider("auth-internal")),new FP(n.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new G(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ra(u.options.projectId,h)}(s,i),s);return o=Object.assign({useFetchStreams:r},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),or(b_,"4.7.3",e),or(b_,"4.7.3","esm2017")})();var UO="firebase",jO="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */or(UO,jO,"app");const bT="@firebase/installations",hg="0.6.9";/**
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
 */const ET=1e4,xT=`w:${hg}`,TT="FIS_v2",zO="https://firebaseinstallations.googleapis.com/v1",BO=60*60*1e3,qO="installations",HO="Installations";/**
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
 */const WO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Li=new Ui(qO,HO,WO);function IT(t){return t instanceof Vr&&t.code.includes("request-failed")}/**
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
 */function AT({projectId:t}){return`${zO}/projects/${t}/installations`}function ST(t){return{token:t.token,requestStatus:2,expiresIn:GO(t.expiresIn),creationTime:Date.now()}}async function kT(t,e){const n=(await e.json()).error;return Li.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function CT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function KO(t,{refreshToken:e}){const r=CT(t);return r.append("Authorization",QO(e)),r}async function RT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function GO(t){return Number(t.replace("s","000"))}function QO(t){return`${TT} ${t}`}/**
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
 */async function YO({appConfig:t,heartbeatServiceProvider:e},{fid:r}){const n=AT(t),i=CT(t),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:r,authVersion:TT,appId:t.appId,sdkVersion:xT},l={method:"POST",headers:i,body:JSON.stringify(s)},c=await RT(()=>fetch(n,l));if(c.ok){const u=await c.json();return{fid:u.fid||r,registrationStatus:2,refreshToken:u.refreshToken,authToken:ST(u.authToken)}}else throw await kT("Create Installation",c)}/**
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
 */function PT(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const JO=/^[cdef][\w-]{21}$/,Yf="";function ZO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const r=eD(t);return JO.test(r)?r:Yf}catch{return Yf}}function eD(t){return XO(t).substr(0,22)}/**
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
 */function id(t){return`${t.appName}!${t.appId}`}/**
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
 */const NT=new Map;function OT(t,e){const r=id(t);DT(r,e),tD(r,e)}function DT(t,e){const r=NT.get(t);if(r)for(const n of r)n(e)}function tD(t,e){const r=rD();r&&r.postMessage({key:t,fid:e}),nD()}let vi=null;function rD(){return!vi&&"BroadcastChannel"in self&&(vi=new BroadcastChannel("[Firebase] FID Change"),vi.onmessage=t=>{DT(t.data.key,t.data.fid)}),vi}function nD(){NT.size===0&&vi&&(vi.close(),vi=null)}/**
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
 */const iD="firebase-installations-database",oD=1,Vi="firebase-installations-store";let ph=null;function fg(){return ph||(ph=Vu(iD,oD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vi)}}})),ph}async function mu(t,e){const r=id(t),i=(await fg()).transaction(Vi,"readwrite"),o=i.objectStore(Vi),s=await o.get(r);return await o.put(e,r),await i.done,(!s||s.fid!==e.fid)&&OT(t,e.fid),e}async function LT(t){const e=id(t),n=(await fg()).transaction(Vi,"readwrite");await n.objectStore(Vi).delete(e),await n.done}async function od(t,e){const r=id(t),i=(await fg()).transaction(Vi,"readwrite"),o=i.objectStore(Vi),s=await o.get(r),l=e(s);return l===void 0?await o.delete(r):await o.put(l,r),await i.done,l&&(!s||s.fid!==l.fid)&&OT(t,l.fid),l}/**
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
 */async function pg(t){let e;const r=await od(t.appConfig,n=>{const i=sD(n),o=aD(t,i);return e=o.registrationPromise,o.installationEntry});return r.fid===Yf?{installationEntry:await e}:{installationEntry:r,registrationPromise:e}}function sD(t){const e=t||{fid:ZO(),registrationStatus:0};return VT(e)}function aD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Li.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const r={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=lD(t,r);return{installationEntry:r,registrationPromise:n}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:cD(t)}:{installationEntry:e}}async function lD(t,e){try{const r=await YO(t,e);return mu(t.appConfig,r)}catch(r){throw IT(r)&&r.customData.serverCode===409?await LT(t.appConfig):await mu(t.appConfig,{fid:e.fid,registrationStatus:0}),r}}async function cD(t){let e=await uw(t.appConfig);for(;e.registrationStatus===1;)await PT(100),e=await uw(t.appConfig);if(e.registrationStatus===0){const{installationEntry:r,registrationPromise:n}=await pg(t);return n||r}return e}function uw(t){return od(t,e=>{if(!e)throw Li.create("installation-not-found");return VT(e)})}function VT(t){return uD(t)?{fid:t.fid,registrationStatus:0}:t}function uD(t){return t.registrationStatus===1&&t.registrationTime+ET<Date.now()}/**
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
 */async function dD({appConfig:t,heartbeatServiceProvider:e},r){const n=hD(t,r),i=KO(t,r),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:xT,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(s)},c=await RT(()=>fetch(n,l));if(c.ok){const u=await c.json();return ST(u)}else throw await kT("Generate Auth Token",c)}function hD(t,{fid:e}){return`${AT(t)}/${e}/authTokens:generate`}/**
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
 */async function mg(t,e=!1){let r;const n=await od(t.appConfig,o=>{if(!MT(o))throw Li.create("not-registered");const s=o.authToken;if(!e&&mD(s))return o;if(s.requestStatus===1)return r=fD(t,e),o;{if(!navigator.onLine)throw Li.create("app-offline");const l=vD(o);return r=pD(t,l),l}});return r?await r:n.authToken}async function fD(t,e){let r=await dw(t.appConfig);for(;r.authToken.requestStatus===1;)await PT(100),r=await dw(t.appConfig);const n=r.authToken;return n.requestStatus===0?mg(t,e):n}function dw(t){return od(t,e=>{if(!MT(e))throw Li.create("not-registered");const r=e.authToken;return yD(r)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function pD(t,e){try{const r=await dD(t,e),n=Object.assign(Object.assign({},e),{authToken:r});return await mu(t.appConfig,n),r}catch(r){if(IT(r)&&(r.customData.serverCode===401||r.customData.serverCode===404))await LT(t.appConfig);else{const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await mu(t.appConfig,n)}throw r}}function MT(t){return t!==void 0&&t.registrationStatus===2}function mD(t){return t.requestStatus===2&&!gD(t)}function gD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+BO}function vD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function yD(t){return t.requestStatus===1&&t.requestTime+ET<Date.now()}/**
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
 */async function _D(t){const e=t,{installationEntry:r,registrationPromise:n}=await pg(e);return n?n.catch(console.error):mg(e).catch(console.error),r.fid}/**
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
 */async function wD(t,e=!1){const r=t;return await bD(r),(await mg(r,e)).token}async function bD(t){const{registrationPromise:e}=await pg(t);e&&await e}/**
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
 */function ED(t){if(!t||!t.options)throw mh("App Configuration");if(!t.name)throw mh("App Name");const e=["projectId","apiKey","appId"];for(const r of e)if(!t.options[r])throw mh(r);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function mh(t){return Li.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T="installations",xD="installations-internal",TD=t=>{const e=t.getProvider("app").getImmediate(),r=ED(e),n=Wo(e,"heartbeat");return{app:e,appConfig:r,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},ID=t=>{const e=t.getProvider("app").getImmediate(),r=Wo(e,$T).getImmediate();return{getId:()=>_D(r),getToken:i=>wD(r,i)}};function AD(){Dr(new br($T,TD,"PUBLIC")),Dr(new br(xD,ID,"PRIVATE"))}AD();or(bT,hg);or(bT,hg,"esm2017");/**
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
 */const SD="/firebase-messaging-sw.js",kD="/firebase-cloud-messaging-push-scope",FT="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",CD="https://fcmregistrations.googleapis.com/v1",UT="google.c.a.c_id",RD="google.c.a.c_l",PD="google.c.a.ts",ND="google.c.a.e";var hw;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(hw||(hw={}));/**
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
 */var La;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(La||(La={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function OD(t){const e="=".repeat((4-t.length%4)%4),r=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(r),i=new Uint8Array(n.length);for(let o=0;o<n.length;++o)i[o]=n.charCodeAt(o);return i}/**
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
 */const gh="fcm_token_details_db",DD=5,fw="fcm_token_object_Store";async function LD(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(gh))return null;let e=null;return(await Vu(gh,DD,{upgrade:async(n,i,o,s)=>{var l;if(i<2||!n.objectStoreNames.contains(fw))return;const c=s.objectStore(fw),u=await c.index("fcmSenderId").get(t);if(await c.clear(),!!u){if(i===2){const h=u;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(l=h.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:zr(h.vapidKey)}}}else if(i===3){const h=u;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:zr(h.auth),p256dh:zr(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:zr(h.vapidKey)}}}else if(i===4){const h=u;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:zr(h.auth),p256dh:zr(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:zr(h.vapidKey)}}}}}})).close(),await ih(gh),await ih("fcm_vapid_details_db"),await ih("undefined"),VD(e)?e:null}function VD(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const MD="firebase-messaging-database",$D=1,Va="firebase-messaging-store";let vh=null;function jT(){return vh||(vh=Vu(MD,$D,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Va)}}})),vh}async function FD(t){const e=zT(t),n=await(await jT()).transaction(Va).objectStore(Va).get(e);if(n)return n;{const i=await LD(t.appConfig.senderId);if(i)return await gg(t,i),i}}async function gg(t,e){const r=zT(t),i=(await jT()).transaction(Va,"readwrite");return await i.objectStore(Va).put(e,r),await i.done,e}function zT({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function jD(t,e){const r=await yg(t),n=BT(e),i={method:"POST",headers:r,body:JSON.stringify(n)};let o;try{o=await(await fetch(vg(t.appConfig),i)).json()}catch(s){throw _t.create("token-subscribe-failed",{errorInfo:s==null?void 0:s.toString()})}if(o.error){const s=o.error.message;throw _t.create("token-subscribe-failed",{errorInfo:s})}if(!o.token)throw _t.create("token-subscribe-no-token");return o.token}async function zD(t,e){const r=await yg(t),n=BT(e.subscriptionOptions),i={method:"PATCH",headers:r,body:JSON.stringify(n)};let o;try{o=await(await fetch(`${vg(t.appConfig)}/${e.token}`,i)).json()}catch(s){throw _t.create("token-update-failed",{errorInfo:s==null?void 0:s.toString()})}if(o.error){const s=o.error.message;throw _t.create("token-update-failed",{errorInfo:s})}if(!o.token)throw _t.create("token-update-no-token");return o.token}async function BD(t,e){const n={method:"DELETE",headers:await yg(t)};try{const o=await(await fetch(`${vg(t.appConfig)}/${e}`,n)).json();if(o.error){const s=o.error.message;throw _t.create("token-unsubscribe-failed",{errorInfo:s})}}catch(i){throw _t.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function vg({projectId:t}){return`${CD}/projects/${t}/registrations`}async function yg({appConfig:t,installations:e}){const r=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${r}`})}function BT({p256dh:t,auth:e,endpoint:r,vapidKey:n}){const i={web:{endpoint:r,auth:e,p256dh:t}};return n!==FT&&(i.web.applicationPubKey=n),i}/**
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
 */const qD=7*24*60*60*1e3;async function HD(t){const e=await KD(t.swRegistration,t.vapidKey),r={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:zr(e.getKey("auth")),p256dh:zr(e.getKey("p256dh"))},n=await FD(t.firebaseDependencies);if(n){if(GD(n.subscriptionOptions,r))return Date.now()>=n.createTime+qD?WD(t,{token:n.token,createTime:Date.now(),subscriptionOptions:r}):n.token;try{await BD(t.firebaseDependencies,n.token)}catch(i){console.warn(i)}return pw(t.firebaseDependencies,r)}else return pw(t.firebaseDependencies,r)}async function WD(t,e){try{const r=await zD(t.firebaseDependencies,e),n=Object.assign(Object.assign({},e),{token:r,createTime:Date.now()});return await gg(t.firebaseDependencies,n),r}catch(r){throw r}}async function pw(t,e){const n={token:await jD(t,e),createTime:Date.now(),subscriptionOptions:e};return await gg(t,n),n.token}async function KD(t,e){const r=await t.pushManager.getSubscription();return r||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:OD(e)})}function GD(t,e){const r=e.vapidKey===t.vapidKey,n=e.endpoint===t.endpoint,i=e.auth===t.auth,o=e.p256dh===t.p256dh;return r&&n&&i&&o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return QD(e,t),YD(e,t),XD(e,t),e}function QD(t,e){if(!e.notification)return;t.notification={};const r=e.notification.title;r&&(t.notification.title=r);const n=e.notification.body;n&&(t.notification.body=n);const i=e.notification.image;i&&(t.notification.image=i);const o=e.notification.icon;o&&(t.notification.icon=o)}function YD(t,e){e.data&&(t.data=e.data)}function XD(t,e){var r,n,i,o,s;if(!e.fcmOptions&&!(!((r=e.notification)===null||r===void 0)&&r.click_action))return;t.fcmOptions={};const l=(i=(n=e.fcmOptions)===null||n===void 0?void 0:n.link)!==null&&i!==void 0?i:(o=e.notification)===null||o===void 0?void 0:o.click_action;l&&(t.fcmOptions.link=l);const c=(s=e.fcmOptions)===null||s===void 0?void 0:s.analytics_label;c&&(t.fcmOptions.analyticsLabel=c)}/**
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
 */function JD(t){return typeof t=="object"&&!!t&&UT in t}/**
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
 */function ZD(t){if(!t||!t.options)throw yh("App Configuration Object");if(!t.name)throw yh("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:r}=t;for(const n of e)if(!r[n])throw yh(n);return{appName:t.name,projectId:r.projectId,apiKey:r.apiKey,appId:r.appId,senderId:r.messagingSenderId}}function yh(t){return _t.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function nL(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=FT)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qT(t,e){if(!navigator)throw _t.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw _t.create("permission-blocked");return await nL(t,e==null?void 0:e.vapidKey),await rL(t,e==null?void 0:e.serviceWorkerRegistration),HD(t)}/**
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
 */async function iL(t,e,r){const n=oL(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(n,{message_id:r[UT],message_name:r[RD],message_time:r[PD],message_device_time:Math.floor(Date.now()/1e3)})}function oL(t){switch(t){case La.NOTIFICATION_CLICKED:return"notification_open";case La.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sL(t,e){const r=e.data;if(!r.isFirebaseMessaging)return;t.onMessageHandler&&r.messageType===La.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(mw(r)):t.onMessageHandler.next(mw(r)));const n=r.data;JD(n)&&n[ND]==="1"&&await iL(t,r.messageType,n)}const gw="@firebase/messaging",vw="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL=t=>{const e=new eL(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",r=>sL(e,r)),e},lL=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:n=>qT(e,n)}};function cL(){Dr(new br("messaging",aL,"PUBLIC")),Dr(new br("messaging-internal",lL,"PRIVATE")),or(gw,vw),or(gw,vw,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uL(){try{await mE()}catch{return!1}return typeof window<"u"&&pE()&&oC()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function hL(t=bm()){return uL().then(e=>{if(!e)throw _t.create("unsupported-browser")},e=>{throw _t.create("indexed-db-unsupported")}),Wo(Fe(t),"messaging").getImmediate()}async function fL(t,e){return t=Fe(t),qT(t,e)}function pL(t,e){return t=Fe(t),dL(t,e)}cL();const mL={apiKey:"AIzaSyCfkeRu4DVuSBBBa9bc0rrhtu-gCixFqIo",authDomain:"barbacker-6c683.firebaseapp.com",projectId:"barbacker-6c683",storageBucket:"barbacker-6c683.firebasestorage.app",messagingSenderId:"869145643734",appId:"1:869145643734:web:d902468d6942df6bc81777"},_g=yE(mL),xt=_O(_g),Rs=PP(_g),HT=hL(_g),gL=new qr;new Zs("apple.com");const vL=async()=>{try{if(await Notification.requestPermission()==="granted")return await fL(HT,{vapidKey:"G-H8717DGSJ8"})}catch(t){console.error("Notification permission denied",t)}return null},yL=()=>new Promise(t=>{pL(HT,e=>{t(e)})});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kc=globalThis,wg=kc.ShadowRoot&&(kc.ShadyCSS===void 0||kc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bg=Symbol(),yw=new WeakMap;let WT=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==bg)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(wg&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=yw.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&yw.set(r,e))}return e}toString(){return this.cssText}};const _L=t=>new WT(typeof t=="string"?t:t+"",void 0,bg),me=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new WT(r,t,bg)},wL=(t,e)=>{if(wg)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),i=kc.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)}},_w=wg?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return _L(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:bL,defineProperty:EL,getOwnPropertyDescriptor:xL,getOwnPropertyNames:TL,getOwnPropertySymbols:IL,getPrototypeOf:AL}=Object,jn=globalThis,ww=jn.trustedTypes,SL=ww?ww.emptyScript:"",_h=jn.reactiveElementPolyfillSupport,ia=(t,e)=>t,gu={toAttribute(t,e){switch(e){case Boolean:t=t?SL:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Eg=(t,e)=>!bL(t,e),bw={attribute:!0,type:String,converter:gu,reflect:!1,useDefault:!1,hasChanged:Eg};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),jn.litPropertyMetadata??(jn.litPropertyMetadata=new WeakMap);let to=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=bw){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,r);i!==void 0&&EL(this.prototype,e,i)}}static getPropertyDescriptor(e,r,n){const{get:i,set:o}=xL(this.prototype,e)??{get(){return this[r]},set(s){this[r]=s}};return{get:i,set(s){const l=i==null?void 0:i.call(this);o==null||o.call(this,s),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??bw}static _$Ei(){if(this.hasOwnProperty(ia("elementProperties")))return;const e=AL(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ia("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ia("properties"))){const r=this.properties,n=[...TL(r),...IL(r)];for(const i of n)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)r.unshift(_w(i))}else e!==void 0&&r.push(_w(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wL(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$ET(e,r){var o;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const s=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:gu).toAttribute(r,n.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,r){var o,s;const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const l=n.getPropertyOptions(i),c=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:gu;this._$Em=i;const u=c.fromAttribute(r,l.type);this[i]=u??((s=this._$Ej)==null?void 0:s.get(i))??u,this._$Em=null}}requestUpdate(e,r,n,i=!1,o){var s;if(e!==void 0){const l=this.constructor;if(i===!1&&(o=this[e]),n??(n=l.getPropertyOptions(e)),!((n.hasChanged??Eg)(o,r)||n.useDefault&&n.reflect&&o===((s=this._$Ej)==null?void 0:s.get(e))&&!this.hasAttribute(l._$Eu(e,n))))return;this.C(e,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,s??r??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(r=void 0),this._$AL.set(e,r)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i){const{wrapped:l}=s,c=this[o];l!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,s,c)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(r)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(e){}firstUpdated(e){}};to.elementStyles=[],to.shadowRootOptions={mode:"open"},to[ia("elementProperties")]=new Map,to[ia("finalized")]=new Map,_h==null||_h({ReactiveElement:to}),(jn.reactiveElementVersions??(jn.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kL={attribute:!0,type:String,converter:gu,reflect:!1,hasChanged:Eg},CL=(t=kL,e,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),n==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(r.name,t),n==="accessor"){const{name:s}=r;return{set(l){const c=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,c,t,!0,l)},init(l){return l!==void 0&&this.C(s,void 0,t,l),l}}}if(n==="setter"){const{name:s}=r;return function(l){const c=this[s];e.call(this,l),this.requestUpdate(s,c,t,!0,l)}}throw Error("Unsupported decorator location: "+n)};function F(t){return(e,r)=>typeof r=="object"?CL(t,e,r):((n,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,n),s?Object.getOwnPropertyDescriptor(i,o):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Pt(t){return F({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xg=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ue(t,e){return(r,n,i)=>{const o=s=>{var l;return((l=s.renderRoot)==null?void 0:l.querySelector(t))??null};return xg(r,n,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let RL;function PL(t){return(e,r)=>xg(e,r,{get(){return(this.renderRoot??RL??(RL=document.createDocumentFragment())).querySelectorAll(t)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ts(t){return(e,r)=>{const{slot:n,selector:i}=t??{},o="slot"+(n?`[name=${n}]`:":not([name])");return xg(e,r,{get(){var c;const s=(c=this.renderRoot)==null?void 0:c.querySelector(o),l=(s==null?void 0:s.assignedElements(t))??[];return i===void 0?l:l.filter(u=>u.matches(i))}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oa=globalThis,Ew=t=>t,vu=oa.trustedTypes,xw=vu?vu.createPolicy("lit-html",{createHTML:t=>t}):void 0,KT="$lit$",Sn=`lit$${Math.random().toFixed(9).slice(2)}$`,GT="?"+Sn,NL=`<${GT}>`,Mi=document,Ma=()=>Mi.createComment(""),$a=t=>t===null||typeof t!="object"&&typeof t!="function",Tg=Array.isArray,OL=t=>Tg(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",wh=`[ 	
\f\r]`,Ps=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tw=/-->/g,Iw=/>/g,ai=RegExp(`>|${wh}(?:([^\\s"'>=/]+)(${wh}*=${wh}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Aw=/'/g,Sw=/"/g,QT=/^(?:script|style|textarea|title)$/i,DL=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),Q=DL(1),nr=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),kw=new WeakMap,yi=Mi.createTreeWalker(Mi,129);function YT(t,e){if(!Tg(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return xw!==void 0?xw.createHTML(e):e}const LL=(t,e)=>{const r=t.length-1,n=[];let i,o=e===2?"<svg>":e===3?"<math>":"",s=Ps;for(let l=0;l<r;l++){const c=t[l];let u,h,p=-1,m=0;for(;m<c.length&&(s.lastIndex=m,h=s.exec(c),h!==null);)m=s.lastIndex,s===Ps?h[1]==="!--"?s=Tw:h[1]!==void 0?s=Iw:h[2]!==void 0?(QT.test(h[2])&&(i=RegExp("</"+h[2],"g")),s=ai):h[3]!==void 0&&(s=ai):s===ai?h[0]===">"?(s=i??Ps,p=-1):h[1]===void 0?p=-2:(p=s.lastIndex-h[2].length,u=h[1],s=h[3]===void 0?ai:h[3]==='"'?Sw:Aw):s===Sw||s===Aw?s=ai:s===Tw||s===Iw?s=Ps:(s=ai,i=void 0);const E=s===ai&&t[l+1].startsWith("/>")?" ":"";o+=s===Ps?c+NL:p>=0?(n.push(u),c.slice(0,p)+KT+c.slice(p)+Sn+E):c+Sn+(p===-2?l:E)}return[YT(t,o+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class Fa{constructor({strings:e,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const l=e.length-1,c=this.parts,[u,h]=LL(e,r);if(this.el=Fa.createElement(u,n),yi.currentNode=this.el.content,r===2||r===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=yi.nextNode())!==null&&c.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const p of i.getAttributeNames())if(p.endsWith(KT)){const m=h[s++],E=i.getAttribute(p).split(Sn),S=/([.?@])?(.*)/.exec(m);c.push({type:1,index:o,name:S[2],strings:E,ctor:S[1]==="."?ML:S[1]==="?"?$L:S[1]==="@"?FL:sd}),i.removeAttribute(p)}else p.startsWith(Sn)&&(c.push({type:6,index:o}),i.removeAttribute(p));if(QT.test(i.tagName)){const p=i.textContent.split(Sn),m=p.length-1;if(m>0){i.textContent=vu?vu.emptyScript:"";for(let E=0;E<m;E++)i.append(p[E],Ma()),yi.nextNode(),c.push({type:2,index:++o});i.append(p[m],Ma())}}}else if(i.nodeType===8)if(i.data===GT)c.push({type:2,index:o});else{let p=-1;for(;(p=i.data.indexOf(Sn,p+1))!==-1;)c.push({type:7,index:o}),p+=Sn.length-1}o++}}static createElement(e,r){const n=Mi.createElement("template");return n.innerHTML=e,n}}function jo(t,e,r=t,n){var s,l;if(e===nr)return e;let i=n!==void 0?(s=r._$Co)==null?void 0:s[n]:r._$Cl;const o=$a(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(t),i._$AT(t,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=i:r._$Cl=i),i!==void 0&&(e=jo(t,i._$AS(t,e.values),i,n)),e}class VL{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,i=((e==null?void 0:e.creationScope)??Mi).importNode(r,!0);yi.currentNode=i;let o=yi.nextNode(),s=0,l=0,c=n[0];for(;c!==void 0;){if(s===c.index){let u;c.type===2?u=new ol(o,o.nextSibling,this,e):c.type===1?u=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(u=new UL(o,this,e)),this._$AV.push(u),c=n[++l]}s!==(c==null?void 0:c.index)&&(o=yi.nextNode(),s++)}return yi.currentNode=Mi,i}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class ol{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,n,i){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=jo(this,e,r),$a(e)?e===H||e==null||e===""?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==nr&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):OL(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==H&&$a(this._$AH)?this._$AA.nextSibling.data=e:this.T(Mi.createTextNode(e)),this._$AH=e}$(e){var o;const{values:r,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Fa.createElement(YT(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(r);else{const s=new VL(i,this),l=s.u(this.options);s.p(r),this.T(l),this._$AH=s}}_$AC(e){let r=kw.get(e.strings);return r===void 0&&kw.set(e.strings,r=new Fa(e)),r}k(e){Tg(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of e)i===r.length?r.push(n=new ol(this.O(Ma()),this.O(Ma()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);e!==this._$AB;){const i=Ew(e).nextSibling;Ew(e).remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class sd{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,i,o){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=H}_$AI(e,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)e=jo(this,e,r,0),s=!$a(e)||e!==this._$AH&&e!==nr,s&&(this._$AH=e);else{const l=e;let c,u;for(e=o[0],c=0;c<o.length-1;c++)u=jo(this,l[n+c],r,c),u===nr&&(u=this._$AH[c]),s||(s=!$a(u)||u!==this._$AH[c]),u===H?e=H:e!==H&&(e+=(u??"")+o[c+1]),this._$AH[c]=u}s&&!i&&this.j(e)}j(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ML extends sd{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===H?void 0:e}}class $L extends sd{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==H)}}class FL extends sd{constructor(e,r,n,i,o){super(e,r,n,i,o),this.type=5}_$AI(e,r=this){if((e=jo(this,e,r,0)??H)===nr)return;const n=this._$AH,i=e===H&&n!==H||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==H&&(n===H||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class UL{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){jo(this,e)}}const bh=oa.litHtmlPolyfillSupport;bh==null||bh(Fa,ol),(oa.litHtmlVersions??(oa.litHtmlVersions=[])).push("3.3.2");const XT=(t,e,r)=>{const n=(r==null?void 0:r.renderBefore)??e;let i=n._$litPart$;if(i===void 0){const o=(r==null?void 0:r.renderBefore)??null;n._$litPart$=i=new ol(e.insertBefore(Ma(),o),o,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xi=globalThis;let ke=class extends to{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=XT(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return nr}};var Uw;ke._$litElement$=!0,ke.finalized=!0,(Uw=xi.litElementHydrateSupport)==null||Uw.call(xi,{LitElement:ke});const Eh=xi.litElementPolyfillSupport;Eh==null||Eh({LitElement:ke});(xi.litElementVersions??(xi.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class jL extends ke{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return Q`<span class="shadow"></span>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const zL=me`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Xf=class extends jL{};Xf.styles=[zL];Xf=R([He("md-elevation")],Xf);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const JT=Symbol("attachableController");let Cc;Cc=new MutationObserver(t=>{var e;for(const r of t)(e=r.target[JT])==null||e.hostConnected()});class ZT{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}set control(e){e?this.attach(e):this.detach()}constructor(e,r){this.host=e,this.onControlChange=r,this.currentControl=null,e.addController(this),e[JT]=this,Cc==null||Cc.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const BL=["focusin","focusout","pointerdown"];class Ig extends ke{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new ZT(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(e){var r;if(!e[Cw]){switch(e.type){default:return;case"focusin":this.visible=((r=this.control)==null?void 0:r.matches(":focus-visible"))??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[Cw]=!0}}onControlChange(e,r){for(const n of BL)e==null||e.removeEventListener(n,this),r==null||r.addEventListener(n,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}R([F({type:Boolean,reflect:!0})],Ig.prototype,"visible",void 0);R([F({type:Boolean,reflect:!0})],Ig.prototype,"inward",void 0);const Cw=Symbol("handledByFocusRing");/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const qL=me`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Jf=class extends Ig{};Jf.styles=[qL];Jf=R([He("md-focus-ring")],Jf);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bn={ATTRIBUTE:1,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Ag=t=>(...e)=>({_$litDirective$:t,values:e});let Sg=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wt=Ag(class extends Sg{constructor(t){var e;if(super(t),t.type!==bn.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((n=this.nt)!=null&&n.has(o))&&this.st.add(o);return this.render(e)}const r=t.element.classList;for(const o of this.st)o in e||(r.remove(o),this.st.delete(o));for(const o in e){const s=!!e[o];s===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(s?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return nr}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const zo={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)"};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const HL=450,Rw=225,WL=.2,KL=10,GL=75,QL=.35,YL="::after",XL="forwards";var Tt;(function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(Tt||(Tt={}));const JL=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],ZL=150,xh=window.matchMedia("(forced-colors: active)");class sl extends ke{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=Tt.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new ZT(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const e={hovered:this.hovered,pressed:this.pressed};return Q`<div class="surface ${Wt(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==Tt.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===Tt.HOLDING){this.state=Tt.WAITING_FOR_CLICK;return}if(this.state===Tt.TOUCH_DELAY){this.state=Tt.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=Tt.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=Tt.TOUCH_DELAY,await new Promise(r=>{setTimeout(r,ZL)}),this.state===Tt.TOUCH_DELAY&&(this.state=Tt.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===Tt.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===Tt.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:r}=this.getBoundingClientRect(),n=Math.max(e,r),i=Math.max(QL*n,GL),o=Math.floor(n*WL),l=Math.sqrt(r**2+e**2)+KL;this.initialSize=o,this.rippleScale=`${(l+i)/o}`,this.rippleSize=`${o}px`}getNormalizedPointerEventCoords(e){const{scrollX:r,scrollY:n}=window,{left:i,top:o}=this.getBoundingClientRect(),s=r+i,l=n+o,{pageX:c,pageY:u}=e;return{x:c-s,y:u-l}}getTranslationCoordinates(e){const{height:r,width:n}=this.getBoundingClientRect(),i={x:(n-this.initialSize)/2,y:(r-this.initialSize)/2};let o;return e instanceof PointerEvent?o=this.getNormalizedPointerEventCoords(e):o={x:n/2,y:r/2},o={x:o.x-this.initialSize/2,y:o.y-this.initialSize/2},{startPoint:o,endPoint:i}}startPressAnimation(e){var s;if(!this.mdRoot)return;this.pressed=!0,(s=this.growAnimation)==null||s.cancel(),this.determineRippleSize();const{startPoint:r,endPoint:n}=this.getTranslationCoordinates(e),i=`${r.x}px, ${r.y}px`,o=`${n.x}px, ${n.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${i}) scale(1)`,`translate(${o}) scale(${this.rippleScale})`]},{pseudoElement:YL,duration:HL,easing:zo.STANDARD,fill:XL})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=Tt.INACTIVE;const e=this.growAnimation;let r=1/0;if(typeof(e==null?void 0:e.currentTime)=="number"?r=e.currentTime:e!=null&&e.currentTime&&(r=e.currentTime.to("ms").value),r>=Rw){this.pressed=!1;return}await new Promise(n=>{setTimeout(n,Rw-r)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);const r=e.buttons===1;return this.isTouch(e)||r}inBounds({x:e,y:r}){const{top:n,left:i,bottom:o,right:s}=this.getBoundingClientRect();return e>=i&&e<=s&&r>=n&&r<=o}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){if(!(xh!=null&&xh.matches))switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break}}onControlChange(e,r){for(const n of JL)e==null||e.removeEventListener(n,this),r==null||r.addEventListener(n,this)}}R([F({type:Boolean,reflect:!0})],sl.prototype,"disabled",void 0);R([Pt()],sl.prototype,"hovered",void 0);R([Pt()],sl.prototype,"pressed",void 0);R([Ue(".surface")],sl.prototype,"mdRoot",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const e4=me`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Zf=class extends sl{};Zf.styles=[e4];Zf=R([He("md-ripple")],Zf);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const eI=["role","ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];eI.map(tI);function tI(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ei(t){for(const e of eI)t.createProperty(e,{attribute:tI(e),reflect:!0});t.addInitializer(e=>{const r={hostConnected(){e.setAttribute("role","presentation")}};e.addController(r)})}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const it=Symbol("internals"),Th=Symbol("privateInternals");function al(t){class e extends t{get[it](){return this[Th]||(this[Th]=this.attachInternals()),this[Th]}}return e}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function rI(t){t.addInitializer(e=>{const r=e;r.addEventListener("click",async n=>{const{type:i,[it]:o}=r,{form:s}=o;if(!(!s||i==="button")&&(await new Promise(l=>{setTimeout(l)}),!n.defaultPrevented)){if(i==="reset"){s.reset();return}s.addEventListener("submit",l=>{Object.defineProperty(l,"submitter",{configurable:!0,enumerable:!0,get:()=>r})},{capture:!0,once:!0}),o.setFormValue(r.value),s.requestSubmit()}})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function nI(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function kg(t){return t.currentTarget!==t.target||t.composedPath()[0]!==t.target||t.target.disabled?!1:!t4(t)}function t4(t){const e=ep;return e&&(t.preventDefault(),t.stopImmediatePropagation()),r4(),e}let ep=!1;async function r4(){ep=!0,await null,ep=!1}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const n4=al(ke);class ut extends n4{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[it].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.handleActivationClick=e=>{!kg(e)||!this.buttonElement||(this.focus(),nI(this.buttonElement))},this.addEventListener("click",this.handleActivationClick)}focus(){var e;(e=this.buttonElement)==null||e.focus()}blur(){var e;(e=this.buttonElement)==null||e.blur()}render(){var i;const e=this.disabled&&!this.href,r=this.href?this.renderLink():this.renderButton(),n=this.href?"link":"button";return Q`
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
      aria-label="${e||H}"
      aria-haspopup="${r||H}"
      aria-expanded="${n||H}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:e,ariaHasPopup:r,ariaExpanded:n}=this;return Q`<a
      id="link"
      class="button"
      aria-label="${e||H}"
      aria-haspopup="${r||H}"
      aria-expanded="${n||H}"
      href=${this.href}
      target=${this.target||H}
      >${this.renderContent()}
    </a>`}renderContent(){const e=Q`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return Q`
      <span class="touch"></span>
      ${this.trailingIcon?H:e}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?e:H}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}ei(ut),rI(ut);ut.formAssociated=!0;ut.shadowRootOptions={mode:"open",delegatesFocus:!0};R([F({type:Boolean,reflect:!0})],ut.prototype,"disabled",void 0);R([F()],ut.prototype,"href",void 0);R([F()],ut.prototype,"target",void 0);R([F({type:Boolean,attribute:"trailing-icon",reflect:!0})],ut.prototype,"trailingIcon",void 0);R([F({type:Boolean,attribute:"has-icon",reflect:!0})],ut.prototype,"hasIcon",void 0);R([F()],ut.prototype,"type",void 0);R([F({reflect:!0})],ut.prototype,"value",void 0);R([Ue(".button")],ut.prototype,"buttonElement",void 0);R([ts({slot:"icon",flatten:!0})],ut.prototype,"assignedIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class i4 extends ut{renderElevationOrOutline(){return Q`<md-elevation part="elevation"></md-elevation>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const o4=me`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_container-shape-start-start: var(--md-filled-button-container-shape-start-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-button-container-shape-start-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-button-container-shape-end-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-button-container-shape-end-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px)}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const iI=me`md-elevation{transition-duration:280ms}:host([disabled]) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host([disabled]) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ad=me`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host([disabled]) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host([disabled]) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host([disabled]){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([disabled]) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let tp=class extends i4{};tp.styles=[ad,iI,o4];tp=R([He("md-filled-button")],tp);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class s4 extends ut{renderElevationOrOutline(){return Q`<md-elevation part="elevation"></md-elevation>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const a4=me`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-filled-tonal-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-tonal-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-tonal-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-tonal-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_container-shape-start-start: var(--md-filled-tonal-button-container-shape-start-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-tonal-button-container-shape-start-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-tonal-button-container-shape-end-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-tonal-button-container-shape-end-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let rp=class extends s4{};rp.styles=[ad,iI,a4];rp=R([He("md-filled-tonal-button")],rp);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class l4 extends ut{renderElevationOrOutline(){return Q`<div class="outline"></div>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const c4=me`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-outlined-button-container-shape-start-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-outlined-button-container-shape-start-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-outlined-button-container-shape-end-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-outlined-button-container-shape-end-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}.outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}:host(:active) .outline{border-color:var(--_pressed-outline-color)}:host([disabled]) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){:host([disabled]) .background{border-color:GrayText}:host([disabled]) .outline{opacity:1}}.outline,md-ripple{border-width:var(--_outline-width)}md-ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let np=class extends l4{};np.styles=[ad,c4];np=R([He("md-outlined-button")],np);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class u4 extends ut{}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const d4=me`:host{--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-text-button-container-shape-start-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-text-button-container-shape-start-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-text-button-container-shape-end-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-text-button-container-shape-end-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ip=class extends u4{};ip.styles=[ad,d4];ip=R([He("md-text-button")],ip);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class je extends ke{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.noAsterisk=!1,this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){const e=this.count??-1,r=this.max??-1;return e<0||r<=0?"":`${e} / ${r}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(e){e.has("disabled")&&e.get("disabled")!==void 0&&(this.disableTransitions=!0),this.disabled&&this.focused&&(e.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:e.get("focused"),wasPopulated:e.get("populated")}),super.update(e)}render(){var o,s,l;const e=this.renderLabel(!0),r=this.renderLabel(!1),n=(o=this.renderOutline)==null?void 0:o.call(this,e),i={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return Q`
      <div class="field ${Wt(i)}">
        <div class="container-overflow">
          ${(s=this.renderBackground)==null?void 0:s.call(this)} ${(l=this.renderIndicator)==null?void 0:l.call(this)} ${n}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${r} ${n?H:e}
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
    `}updated(e){(e.has("supportingText")||e.has("errorText")||e.has("count")||e.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame(()=>{this.refreshErrorAlert=!1}),this.disableTransitions&&requestAnimationFrame(()=>{this.disableTransitions=!1})}renderSupportingText(){const{supportingOrErrorText:e,counterText:r}=this;if(!e&&!r)return H;const n=Q`<span>${e}</span>`,i=r?Q`<span class="counter">${r}</span>`:H,s=this.error&&this.errorText&&!this.refreshErrorAlert?"alert":H;return Q`
      <div class="supporting-text" role=${s}>${n}${i}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(const e of this.slottedAriaDescribedBy)XT(Q`${this.supportingOrErrorText} ${this.counterText}`,e),e.setAttribute("hidden","")}renderLabel(e){if(!this.label)return H;let r;e?r=this.focused||this.populated||this.isAnimating:r=!this.focused&&!this.populated&&!this.isAnimating;const n={hidden:!r,floating:e,resting:!e},i=`${this.label}${this.required&&!this.noAsterisk?"*":""}`;return Q`
      <span class="label ${Wt(n)}" aria-hidden=${!r}
        >${i}</span
      >
    `}animateLabelIfNeeded({wasFocused:e,wasPopulated:r}){var o,s,l;if(!this.label)return;e??(e=this.focused),r??(r=this.populated);const n=e||r,i=this.focused||this.populated;n!==i&&(this.isAnimating=!0,(o=this.labelAnimation)==null||o.cancel(),this.labelAnimation=(s=this.floatingLabelEl)==null?void 0:s.animate(this.getLabelKeyframes(),{duration:150,easing:zo.STANDARD}),(l=this.labelAnimation)==null||l.addEventListener("finish",()=>{this.isAnimating=!1}))}getLabelKeyframes(){const{floatingLabelEl:e,restingLabelEl:r}=this;if(!e||!r)return[];const{x:n,y:i,height:o}=e.getBoundingClientRect(),{x:s,y:l,height:c}=r.getBoundingClientRect(),u=e.scrollWidth,h=r.scrollWidth,p=h/u,m=s-n,E=l-i+Math.round((c-o*p)/2),S=`translateX(${m}px) translateY(${E}px) scale(${p})`,N="translateX(0) translateY(0) scale(1)",O=r.clientWidth,y=h>O?`${O/p}px`:"";return this.focused||this.populated?[{transform:S,width:y},{transform:N,width:y}]:[{transform:N,width:y},{transform:S,width:y}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}}R([F({type:Boolean})],je.prototype,"disabled",void 0);R([F({type:Boolean})],je.prototype,"error",void 0);R([F({type:Boolean})],je.prototype,"focused",void 0);R([F()],je.prototype,"label",void 0);R([F({type:Boolean,attribute:"no-asterisk"})],je.prototype,"noAsterisk",void 0);R([F({type:Boolean})],je.prototype,"populated",void 0);R([F({type:Boolean})],je.prototype,"required",void 0);R([F({type:Boolean})],je.prototype,"resizable",void 0);R([F({attribute:"supporting-text"})],je.prototype,"supportingText",void 0);R([F({attribute:"error-text"})],je.prototype,"errorText",void 0);R([F({type:Number})],je.prototype,"count",void 0);R([F({type:Number})],je.prototype,"max",void 0);R([F({type:Boolean,attribute:"has-start"})],je.prototype,"hasStart",void 0);R([F({type:Boolean,attribute:"has-end"})],je.prototype,"hasEnd",void 0);R([ts({slot:"aria-describedby"})],je.prototype,"slottedAriaDescribedBy",void 0);R([Pt()],je.prototype,"isAnimating",void 0);R([Pt()],je.prototype,"refreshErrorAlert",void 0);R([Pt()],je.prototype,"disableTransitions",void 0);R([Ue(".label.floating")],je.prototype,"floatingLabelEl",void 0);R([Ue(".label.resting")],je.prototype,"restingLabelEl",void 0);R([Ue(".container")],je.prototype,"containerEl",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class h4 extends je{renderBackground(){return Q`
      <div class="background"></div>
      <div class="state-layer"></div>
    `}renderIndicator(){return Q`<div class="active-indicator"></div>`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const f4=me`@layer styles{:host{--_active-indicator-color: var(--md-filled-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-field-active-indicator-height, 1px);--_bottom-space: var(--md-filled-field-bottom-space, 16px);--_container-color: var(--md-filled-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_content-color: var(--md-filled-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-filled-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-filled-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-filled-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-weight: var(--md-filled-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-active-indicator-color: var(--md-filled-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-field-disabled-container-opacity, 0.04);--_disabled-content-color: var(--md-filled-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-filled-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-filled-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-filled-field-disabled-leading-content-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-filled-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-filled-field-disabled-trailing-content-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-content-color: var(--md-filled-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-active-indicator-color: var(--md-filled-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-content-color: var(--md-filled-field-error-focus-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-label-text-color: var(--md-filled-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-filled-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-filled-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-content-color: var(--md-filled-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-filled-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-filled-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-filled-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-filled-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-filled-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-field-focus-active-indicator-height, 3px);--_focus-content-color: var(--md-filled-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-filled-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-filled-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-field-hover-active-indicator-height, 1px);--_hover-content-color: var(--md-filled-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-content-color: var(--md-filled-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-filled-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-filled-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-filled-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-filled-field-leading-space, 16px);--_supporting-text-color: var(--md-filled-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-filled-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-filled-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-filled-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-filled-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-filled-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-filled-field-top-space, 16px);--_trailing-content-color: var(--md-filled-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-filled-field-trailing-space, 16px);--_with-label-bottom-space: var(--md-filled-field-with-label-bottom-space, 8px);--_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px);--_container-shape-start-start: var(--md-filled-field-container-shape-start-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-field-container-shape-start-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-field-container-shape-end-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-field-container-shape-end-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)))}.background,.state-layer{border-radius:inherit;inset:0;pointer-events:none;position:absolute}.background{background:var(--_container-color)}.state-layer{visibility:hidden}.field:not(.disabled):hover .state-layer{visibility:visible}.label.floating{position:absolute;top:var(--_with-label-top-space)}.field:not(.with-start) .label-wrapper{margin-inline-start:var(--_leading-space)}.field:not(.with-end) .label-wrapper{margin-inline-end:var(--_trailing-space)}.active-indicator{inset:auto 0 0 0;pointer-events:none;position:absolute;width:100%;z-index:1}.active-indicator::before,.active-indicator::after{border-bottom:var(--_active-indicator-height) solid var(--_active-indicator-color);inset:auto 0 0 0;content:"";position:absolute;width:100%}.active-indicator::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .active-indicator::after{opacity:1}.field:not(.with-start) .content ::slotted(*){padding-inline-start:var(--_leading-space)}.field:not(.with-end) .content ::slotted(*){padding-inline-end:var(--_trailing-space)}.field:not(.no-label) .content ::slotted(:not(textarea)){padding-bottom:var(--_with-label-bottom-space);padding-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}.field:not(.no-label) .content ::slotted(textarea){margin-bottom:var(--_with-label-bottom-space);margin-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}:hover .active-indicator::before{border-bottom-color:var(--_hover-active-indicator-color);border-bottom-width:var(--_hover-active-indicator-height)}.active-indicator::after{border-bottom-color:var(--_focus-active-indicator-color);border-bottom-width:var(--_focus-active-indicator-height)}:hover .state-layer{background:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.disabled .active-indicator::before{border-bottom-color:var(--_disabled-active-indicator-color);border-bottom-width:var(--_disabled-active-indicator-height);opacity:var(--_disabled-active-indicator-opacity)}.disabled .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.error .active-indicator::before{border-bottom-color:var(--_error-active-indicator-color)}.error:hover .active-indicator::before{border-bottom-color:var(--_error-hover-active-indicator-color)}.error:hover .state-layer{background:var(--_error-hover-state-layer-color);opacity:var(--_error-hover-state-layer-opacity)}.error .active-indicator::after{border-bottom-color:var(--_error-focus-active-indicator-color)}.resizable .container{bottom:var(--_focus-active-indicator-height);clip-path:inset(var(--_focus-active-indicator-height) 0 0 0)}.resizable .container>*{top:var(--_focus-active-indicator-height)}}@layer hcm{@media(forced-colors: active){.disabled .active-indicator::before{border-color:GrayText;opacity:1}}}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const p4=me`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let op=class extends h4{};op.styles=[p4,f4];op=R([He("md-filled-field")],op);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oI=Symbol.for(""),m4=t=>{if((t==null?void 0:t.r)===oI)return t==null?void 0:t._$litStatic$},Ti=(t,...e)=>({_$litStatic$:e.reduce((r,n,i)=>r+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+t[i+1],t[0]),r:oI}),Pw=new Map,g4=t=>(e,...r)=>{const n=r.length;let i,o;const s=[],l=[];let c,u=0,h=!1;for(;u<n;){for(c=e[u];u<n&&(o=r[u],(i=m4(o))!==void 0);)c+=i+e[++u],h=!0;u!==n&&l.push(o),s.push(c),u++}if(u===n&&s.push(e[n]),h){const p=s.join("$$lit$$");(e=Pw.get(p))===void 0&&(s.raw=s,Pw.set(p,e=s)),r=l}return t(e,...r)},Cg=g4(Q);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const v4=me`:host{--_active-indicator-color: var(--md-filled-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-text-field-active-indicator-height, 1px);--_caret-color: var(--md-filled-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-color: var(--md-filled-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-active-indicator-color: var(--md-filled-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-text-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-text-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-text-field-disabled-container-opacity, 0.04);--_disabled-input-text-color: var(--md-filled-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-filled-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-filled-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filled-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-filled-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filled-text-field-disabled-trailing-icon-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-active-indicator-color: var(--md-filled-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-caret-color: var(--md-filled-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-filled-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-filled-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-filled-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-filled-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-input-text-color: var(--md-filled-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-filled-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-text-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-filled-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-filled-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-filled-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-filled-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-filled-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-text-field-focus-active-indicator-height, 3px);--_focus-input-text-color: var(--md-filled-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-filled-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-filled-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-text-field-hover-active-indicator-height, 1px);--_hover-input-text-color: var(--md-filled-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-icon-color: var(--md-filled-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-text-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filled-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-filled-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-filled-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-filled-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-filled-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-filled-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-filled-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-filled-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-filled-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-filled-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-filled-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);--_supporting-text-color: var(--md-filled-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-filled-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-filled-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-filled-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-filled-text-field-container-shape-start-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-text-field-container-shape-start-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-text-field-container-shape-end-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-text-field-container-shape-end-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_leading-space: var(--md-filled-text-field-leading-space, 16px);--_trailing-space: var(--md-filled-text-field-trailing-space, 16px);--_top-space: var(--md-filled-text-field-top-space, 16px);--_bottom-space: var(--md-filled-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-filled-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-filled-text-field-input-text-suffix-leading-space, 2px);--_with-label-top-space: var(--md-filled-text-field-with-label-top-space, 8px);--_with-label-bottom-space: var(--md-filled-text-field-with-label-bottom-space, 8px);--_focus-caret-color: var(--md-filled-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--md-filled-field-active-indicator-color: var(--_active-indicator-color);--md-filled-field-active-indicator-height: var(--_active-indicator-height);--md-filled-field-bottom-space: var(--_bottom-space);--md-filled-field-container-color: var(--_container-color);--md-filled-field-container-shape-end-end: var(--_container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_container-shape-start-start);--md-filled-field-content-color: var(--_input-text-color);--md-filled-field-content-font: var(--_input-text-font);--md-filled-field-content-line-height: var(--_input-text-line-height);--md-filled-field-content-size: var(--_input-text-size);--md-filled-field-content-weight: var(--_input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_error-active-indicator-color);--md-filled-field-error-content-color: var(--_error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_error-label-text-color);--md-filled-field-error-leading-content-color: var(--_error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_label-text-color);--md-filled-field-label-text-font: var(--_label-text-font);--md-filled-field-label-text-line-height: var(--_label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_label-text-populated-size);--md-filled-field-label-text-size: var(--_label-text-size);--md-filled-field-label-text-weight: var(--_label-text-weight);--md-filled-field-leading-content-color: var(--_leading-icon-color);--md-filled-field-leading-space: var(--_leading-space);--md-filled-field-supporting-text-color: var(--_supporting-text-color);--md-filled-field-supporting-text-font: var(--_supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_supporting-text-size);--md-filled-field-supporting-text-weight: var(--_supporting-text-weight);--md-filled-field-top-space: var(--_top-space);--md-filled-field-trailing-content-color: var(--_trailing-icon-color);--md-filled-field-trailing-space: var(--_trailing-space);--md-filled-field-with-label-bottom-space: var(--_with-label-bottom-space);--md-filled-field-with-label-top-space: var(--_with-label-top-space)}
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y4=t=>t.strings===void 0,_4={},w4=(t,e=_4)=>t._$AH=e;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nw=Ag(class extends Sg{constructor(t){if(super(t),t.type!==bn.PROPERTY&&t.type!==bn.ATTRIBUTE&&t.type!==bn.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!y4(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===nr||e===H)return e;const r=t.element,n=t.name;if(t.type===bn.PROPERTY){if(e===r[n])return nr}else if(t.type===bn.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(n))return nr}else if(t.type===bn.ATTRIBUTE&&r.getAttribute(n)===e+"")return nr;return w4(t),e}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sI="important",b4=" !"+sI,Ow=Ag(class extends Sg{constructor(t){var e;if(super(t),t.type!==bn.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,r)=>{const n=t[r];return n==null?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:r}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?r.removeProperty(n):r[n]=null);for(const n in e){const i=e[n];if(i!=null){this.ft.add(n);const o=typeof i=="string"&&i.endsWith(b4);n.includes("-")||o?r.setProperty(n,o?i.slice(0,-11):i,o?sI:""):r[n]=i}}return nr}});/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const E4={fromAttribute(t){return t??""},toAttribute(t){return t||null}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ld(t,e){e.bubbles&&(!t.shadowRoot||e.composed)&&e.stopPropagation();const r=Reflect.construct(e.constructor,[e.type,e]),n=t.dispatchEvent(r);return n||e.preventDefault(),n}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ua=Symbol("createValidator"),ja=Symbol("getValidityAnchor"),Ih=Symbol("privateValidator"),Fr=Symbol("privateSyncValidity"),Xl=Symbol("privateCustomValidationMessage");function Rg(t){var e;class r extends t{constructor(){super(...arguments),this[e]=""}get validity(){return this[Fr](),this[it].validity}get validationMessage(){return this[Fr](),this[it].validationMessage}get willValidate(){return this[Fr](),this[it].willValidate}checkValidity(){return this[Fr](),this[it].checkValidity()}reportValidity(){return this[Fr](),this[it].reportValidity()}setCustomValidity(i){this[Xl]=i,this[Fr]()}requestUpdate(i,o,s){super.requestUpdate(i,o,s),this[Fr]()}firstUpdated(i){super.firstUpdated(i),this[Fr]()}[(e=Xl,Fr)](){this[Ih]||(this[Ih]=this[Ua]());const{validity:i,validationMessage:o}=this[Ih].getValidity(),s=!!this[Xl],l=this[Xl]||o;this[it].setValidity({...i,customError:s},l,this[ja]()??void 0)}[Ua](){throw new Error("Implement [createValidator]")}[ja](){throw new Error("Implement [getValidityAnchor]")}}return r}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Io=Symbol("getFormValue"),yu=Symbol("getFormState");function Pg(t){class e extends t{get form(){return this[it].form}get labels(){return this[it].labels}get name(){return this.getAttribute("name")??""}set name(n){this.setAttribute("name",n)}get disabled(){return this.hasAttribute("disabled")}set disabled(n){this.toggleAttribute("disabled",n)}attributeChangedCallback(n,i,o){if(n==="name"||n==="disabled"){const s=n==="disabled"?i!==null:i;this.requestUpdate(n,s);return}super.attributeChangedCallback(n,i,o)}requestUpdate(n,i,o){super.requestUpdate(n,i,o),this[it].setFormValue(this[Io](),this[yu]())}[Io](){throw new Error("Implement [getFormValue]")}[yu](){return this[Io]()}formDisabledCallback(n){this.disabled=n}}return e.formAssociated=!0,R([F({noAccessor:!0})],e.prototype,"name",null),R([F({type:Boolean,noAccessor:!0})],e.prototype,"disabled",null),e}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const sp=Symbol("onReportValidity"),Jl=Symbol("privateCleanupFormListeners"),Zl=Symbol("privateDoNotReportInvalid"),ec=Symbol("privateIsSelfReportingValidity"),tc=Symbol("privateCallOnReportValidity");function x4(t){var e,r,n;class i extends t{constructor(...s){super(...s),this[e]=new AbortController,this[r]=!1,this[n]=!1,this.addEventListener("invalid",l=>{this[Zl]||!l.isTrusted||this.addEventListener("invalid",()=>{this[tc](l)},{once:!0})},{capture:!0})}checkValidity(){this[Zl]=!0;const s=super.checkValidity();return this[Zl]=!1,s}reportValidity(){this[ec]=!0;const s=super.reportValidity();return s&&this[tc](null),this[ec]=!1,s}[(e=Jl,r=Zl,n=ec,tc)](s){const l=s==null?void 0:s.defaultPrevented;l||(this[sp](s),!(!l&&(s==null?void 0:s.defaultPrevented)))||(this[ec]||A4(this[it].form,this))&&this.focus()}[sp](s){throw new Error("Implement [onReportValidity]")}formAssociatedCallback(s){super.formAssociatedCallback&&super.formAssociatedCallback(s),this[Jl].abort(),s&&(this[Jl]=new AbortController,T4(this,s,()=>{this[tc](null)},this[Jl].signal))}}return i}function T4(t,e,r,n){const i=I4(e);let o=!1,s,l=!1;i.addEventListener("before",()=>{l=!0,s=new AbortController,o=!1,t.addEventListener("invalid",()=>{o=!0},{signal:s.signal})},{signal:n}),i.addEventListener("after",()=>{l=!1,s==null||s.abort(),!o&&r()},{signal:n}),e.addEventListener("submit",()=>{l||r()},{signal:n})}const Ah=new WeakMap;function I4(t){if(!Ah.has(t)){const e=new EventTarget;Ah.set(t,e);for(const r of["reportValidity","requestSubmit"]){const n=t[r];t[r]=function(){e.dispatchEvent(new Event("before"));const i=Reflect.apply(n,this,arguments);return e.dispatchEvent(new Event("after")),i}}}return Ah.get(t)}function A4(t,e){if(!t)return!0;let r;for(const n of t.elements)if(n.matches(":invalid")){r=n;break}return r===e}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ng{constructor(e){this.getCurrentState=e,this.currentValidity={validity:{},validationMessage:""}}getValidity(){const e=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,e)))return this.currentValidity;const{validity:n,validationMessage:i}=this.computeValidity(e);return this.prevState=this.copy(e),this.currentValidity={validationMessage:i,validity:{badInput:n.badInput,customError:n.customError,patternMismatch:n.patternMismatch,rangeOverflow:n.rangeOverflow,rangeUnderflow:n.rangeUnderflow,stepMismatch:n.stepMismatch,tooLong:n.tooLong,tooShort:n.tooShort,typeMismatch:n.typeMismatch,valueMissing:n.valueMissing}},this.currentValidity}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class S4 extends Ng{computeValidity({state:e,renderedControl:r}){let n=r;Ns(e)&&!n?(n=this.inputControl||document.createElement("input"),this.inputControl=n):n||(n=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=n);const i=Ns(e)?n:null;if(i&&(i.type=e.type),n.value!==e.value&&(n.value=e.value),n.required=e.required,i){const o=e;o.pattern?i.pattern=o.pattern:i.removeAttribute("pattern"),o.min?i.min=o.min:i.removeAttribute("min"),o.max?i.max=o.max:i.removeAttribute("max"),o.step?i.step=o.step:i.removeAttribute("step")}return(e.minLength??-1)>-1?n.setAttribute("minlength",String(e.minLength)):n.removeAttribute("minlength"),(e.maxLength??-1)>-1?n.setAttribute("maxlength",String(e.maxLength)):n.removeAttribute("maxlength"),{validity:n.validity,validationMessage:n.validationMessage}}equals({state:e},{state:r}){const n=e.type===r.type&&e.value===r.value&&e.required===r.required&&e.minLength===r.minLength&&e.maxLength===r.maxLength;return!Ns(e)||!Ns(r)?n:n&&e.pattern===r.pattern&&e.min===r.min&&e.max===r.max&&e.step===r.step}copy({state:e}){return{state:Ns(e)?this.copyInput(e):this.copyTextArea(e),renderedControl:null}}copyInput(e){const{type:r,pattern:n,min:i,max:o,step:s}=e;return{...this.copySharedState(e),type:r,pattern:n,min:i,max:o,step:s}}copyTextArea(e){return{...this.copySharedState(e),type:e.type}}copySharedState({value:e,required:r,minLength:n,maxLength:i}){return{value:e,required:r,minLength:n,maxLength:i}}}function Ns(t){return t.type!=="textarea"}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const k4=x4(Rg(Pg(al(ke))));class se extends k4{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(e){this.getInputOrTextarea().selectionDirection=e}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(e){this.getInputOrTextarea().selectionEnd=e}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(e){this.getInputOrTextarea().selectionStart=e}get valueAsNumber(){const e=this.getInput();return e?e.valueAsNumber:NaN}set valueAsNumber(e){const r=this.getInput();r&&(r.valueAsNumber=e,this.value=r.value)}get valueAsDate(){const e=this.getInput();return e?e.valueAsDate:null}set valueAsDate(e){const r=this.getInput();r&&(r.valueAsDate=e,this.value=r.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...e){this.getInputOrTextarea().setRangeText(...e),this.value=this.getInputOrTextarea().value}setSelectionRange(e,r,n){this.getInputOrTextarea().setSelectionRange(e,r,n)}stepDown(e){const r=this.getInput();r&&(r.stepDown(e),this.value=r.value)}stepUp(e){const r=this.getInput();r&&(r.stepUp(e),this.value=r.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(e,r,n){e==="value"&&this.dirty||super.attributeChangedCallback(e,r,n)}render(){const e={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:this.type==="textarea","no-spinner":this.noSpinner};return Q`
      <span class="text-field ${Wt(e)}">
        ${this.renderField()}
      </span>
    `}updated(e){const r=this.getInputOrTextarea().value;this.value!==r&&(this.value=r)}renderField(){return Cg`<${this.fieldTag}
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
    `}renderInputOrTextarea(){const e={direction:this.textDirection},r=this.ariaLabel||this.label||H,n=this.autocomplete,i=(this.maxLength??-1)>-1,o=(this.minLength??-1)>-1;if(this.type==="textarea")return Q`
        <textarea
          class="input"
          style=${Ow(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${r}
          autocomplete=${n||H}
          name=${this.name||H}
          ?disabled=${this.disabled}
          maxlength=${i?this.maxLength:H}
          minlength=${o?this.minLength:H}
          placeholder=${this.placeholder||H}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${Nw(this.value)}
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
          style=${Ow(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${r}
          autocomplete=${n||H}
          name=${this.name||H}
          ?disabled=${this.disabled}
          inputmode=${c||H}
          max=${this.max||H}
          maxlength=${i?this.maxLength:H}
          min=${this.min||H}
          minlength=${o?this.minLength:H}
          pattern=${this.pattern||H}
          placeholder=${this.placeholder||H}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||H}
          type=${this.type}
          .value=${Nw(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${l}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(e,r){return e?Q`<span class="${Wt({suffix:r,prefix:!r})}">${e}</span>`:H}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){var e;this.focused=((e=this.inputOrTextarea)==null?void 0:e.matches(":focus"))??!1}handleInput(e){this.dirty=!0,this.value=e.target.value}redispatchEvent(e){ld(this,e)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return this.type==="textarea"?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[Io](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}focus(){this.getInputOrTextarea().focus()}[Ua](){return new S4(()=>({state:this,renderedControl:this.inputOrTextarea}))}[ja](){return this.inputOrTextarea}[sp](e){var n;e==null||e.preventDefault();const r=this.getErrorText();this.nativeError=!!e,this.nativeErrorText=this.validationMessage,r===this.getErrorText()&&((n=this.field)==null||n.reannounceError())}}ei(se);se.shadowRootOptions={...ke.shadowRootOptions,delegatesFocus:!0};R([F({type:Boolean,reflect:!0})],se.prototype,"error",void 0);R([F({attribute:"error-text"})],se.prototype,"errorText",void 0);R([F()],se.prototype,"label",void 0);R([F({type:Boolean,attribute:"no-asterisk"})],se.prototype,"noAsterisk",void 0);R([F({type:Boolean,reflect:!0})],se.prototype,"required",void 0);R([F()],se.prototype,"value",void 0);R([F({attribute:"prefix-text"})],se.prototype,"prefixText",void 0);R([F({attribute:"suffix-text"})],se.prototype,"suffixText",void 0);R([F({type:Boolean,attribute:"has-leading-icon"})],se.prototype,"hasLeadingIcon",void 0);R([F({type:Boolean,attribute:"has-trailing-icon"})],se.prototype,"hasTrailingIcon",void 0);R([F({attribute:"supporting-text"})],se.prototype,"supportingText",void 0);R([F({attribute:"text-direction"})],se.prototype,"textDirection",void 0);R([F({type:Number})],se.prototype,"rows",void 0);R([F({type:Number})],se.prototype,"cols",void 0);R([F({reflect:!0})],se.prototype,"inputMode",void 0);R([F()],se.prototype,"max",void 0);R([F({type:Number})],se.prototype,"maxLength",void 0);R([F()],se.prototype,"min",void 0);R([F({type:Number})],se.prototype,"minLength",void 0);R([F({type:Boolean,attribute:"no-spinner"})],se.prototype,"noSpinner",void 0);R([F()],se.prototype,"pattern",void 0);R([F({reflect:!0,converter:E4})],se.prototype,"placeholder",void 0);R([F({type:Boolean,reflect:!0})],se.prototype,"readOnly",void 0);R([F({type:Boolean,reflect:!0})],se.prototype,"multiple",void 0);R([F()],se.prototype,"step",void 0);R([F({reflect:!0})],se.prototype,"type",void 0);R([F({reflect:!0})],se.prototype,"autocomplete",void 0);R([Pt()],se.prototype,"dirty",void 0);R([Pt()],se.prototype,"focused",void 0);R([Pt()],se.prototype,"nativeError",void 0);R([Pt()],se.prototype,"nativeErrorText",void 0);R([Ue(".input")],se.prototype,"inputOrTextarea",void 0);R([Ue(".field")],se.prototype,"field",void 0);R([ts({slot:"leading-icon"})],se.prototype,"leadingIcons",void 0);R([ts({slot:"trailing-icon"})],se.prototype,"trailingIcons",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class C4 extends se{constructor(){super(...arguments),this.fieldTag=Ti`md-filled-field`}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const R4=me`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ap=class extends C4{constructor(){super(...arguments),this.fieldTag=Ti`md-filled-field`}};ap.styles=[R4,v4];ap=R([He("md-filled-text-field")],ap);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class P4 extends ke{render(){return Q`<slot></slot>`}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const N4=me`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let lp=class extends P4{};lp.styles=[N4];lp=R([He("md-icon")],lp);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function aI(t,e=un){const r=cI(t,e);return r&&(r.tabIndex=0,r.focus()),r}function lI(t,e=un){const r=O4(t,e);return r&&(r.tabIndex=0,r.focus()),r}function Sh(t,e=un){for(let r=0;r<t.length;r++){const n=t[r];if(n.tabIndex===0&&e(n))return{item:n,index:r}}return null}function cI(t,e=un){for(const r of t)if(e(r))return r;return null}function O4(t,e=un){for(let r=t.length-1;r>=0;r--){const n=t[r];if(e(n))return n}return null}function D4(t,e,r=un,n=!0){for(let i=1;i<t.length;i++){const o=(i+e)%t.length;if(o<e&&!n)return null;const s=t[o];if(r(s))return s}return t[e]?t[e]:null}function L4(t,e,r=un,n=!0){for(let i=1;i<t.length;i++){const o=(e-i+t.length)%t.length;if(o>e&&!n)return null;const s=t[o];if(r(s))return s}return t[e]?t[e]:null}function Dw(t,e,r=un,n=!0){if(e){const i=D4(t,e.index,r,n);return i&&(i.tabIndex=0,i.focus()),i}else return aI(t,r)}function Lw(t,e,r=un,n=!0){if(e){const i=L4(t,e.index,r,n);return i&&(i.tabIndex=0,i.focus()),i}else return lI(t,r)}function V4(){return new Event("request-activation",{bubbles:!0,composed:!0})}function un(t){return!t.disabled}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ur={ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",Home:"Home",End:"End"};class M4{constructor(e){this.handleKeydown=h=>{const p=h.key;if(h.defaultPrevented||!this.isNavigableKey(p))return;const m=this.items;if(!m.length)return;const E=Sh(m,this.isActivatable);h.preventDefault();const S=this.isRtl(),N=S?Ur.ArrowRight:Ur.ArrowLeft,O=S?Ur.ArrowLeft:Ur.ArrowRight;let x=null;switch(p){case Ur.ArrowDown:case O:x=Dw(m,E,this.isActivatable,this.wrapNavigation());break;case Ur.ArrowUp:case N:x=Lw(m,E,this.isActivatable,this.wrapNavigation());break;case Ur.Home:x=aI(m,this.isActivatable);break;case Ur.End:x=lI(m,this.isActivatable);break}x&&E&&E.item!==x&&(E.item.tabIndex=-1)},this.onDeactivateItems=()=>{const h=this.items;for(const p of h)this.deactivateItem(p)},this.onRequestActivation=h=>{this.onDeactivateItems();const p=h.target;this.activateItem(p),p.focus()},this.onSlotchange=()=>{const h=this.items;let p=!1;for(const E of h){if(!E.disabled&&E.tabIndex>-1&&!p){p=!0,E.tabIndex=0;continue}E.tabIndex=-1}if(p)return;const m=cI(h,this.isActivatable);m&&(m.tabIndex=0)};const{isItem:r,getPossibleItems:n,isRtl:i,deactivateItem:o,activateItem:s,isNavigableKey:l,isActivatable:c,wrapNavigation:u}=e;this.isItem=r,this.getPossibleItems=n,this.isRtl=i,this.deactivateItem=o,this.activateItem=s,this.isNavigableKey=l,this.isActivatable=c,this.wrapNavigation=u??(()=>!0)}get items(){const e=this.getPossibleItems(),r=[];for(const n of e){if(this.isItem(n)){r.push(n);continue}const o=n.item;o&&this.isItem(o)&&r.push(o)}return r}activateNextItem(){const e=this.items,r=Sh(e,this.isActivatable);return r&&(r.item.tabIndex=-1),Dw(e,r,this.isActivatable,this.wrapNavigation())}activatePreviousItem(){const e=this.items,r=Sh(e,this.isActivatable);return r&&(r.item.tabIndex=-1),Lw(e,r,this.isActivatable,this.wrapNavigation())}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const $4=new Set(Object.values(Ur));class uI extends ke{get items(){return this.listController.items}constructor(){super(),this.listController=new M4({isItem:e=>e.hasAttribute("md-list-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>getComputedStyle(this).direction==="rtl",deactivateItem:e=>{e.tabIndex=-1},activateItem:e=>{e.tabIndex=0},isNavigableKey:e=>$4.has(e),isActivatable:e=>!e.disabled&&e.type!=="text"}),this.internals=this.attachInternals(),this.internals.role="list",this.addEventListener("keydown",this.listController.handleKeydown)}render(){return Q`
      <slot
        @deactivate-items=${this.listController.onDeactivateItems}
        @request-activation=${this.listController.onRequestActivation}
        @slotchange=${this.listController.onSlotchange}>
      </slot>
    `}activateNextItem(){return this.listController.activateNextItem()}activatePreviousItem(){return this.listController.activatePreviousItem()}}R([ts({flatten:!0})],uI.prototype,"slotItems",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const F4=me`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let cp=class extends uI{};cp.styles=[F4];cp=R([He("md-list")],cp);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Og extends ke{constructor(){super(...arguments),this.multiline=!1}render(){return Q`
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
    `}handleTextSlotChange(){let e=!1,r=0;for(const n of this.textSlots)if(U4(n)&&(r+=1),r>1){e=!0;break}this.multiline=e}}R([F({type:Boolean,reflect:!0})],Og.prototype,"multiline",void 0);R([PL(".text slot")],Og.prototype,"textSlots",void 0);function U4(t){var e;for(const r of t.assignedNodes({flatten:!0})){const n=r.nodeType===Node.ELEMENT_NODE,i=r.nodeType===Node.TEXT_NODE&&((e=r.textContent)==null?void 0:e.match(/\S/));if(n||i)return!0}return!1}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const j4=me`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let up=class extends Og{};up.styles=[j4];up=R([He("md-item")],up);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class dn extends ke{constructor(){super(...arguments),this.disabled=!1,this.type="text",this.isListItem=!0,this.href="",this.target=""}get isDisabled(){return this.disabled&&this.type!=="link"}willUpdate(e){this.href&&(this.type="link"),super.willUpdate(e)}render(){return this.renderListItem(Q`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){const r=this.type==="link";let n;switch(this.type){case"link":n=Ti`a`;break;case"button":n=Ti`button`;break;default:case"text":n=Ti`li`;break}const i=this.type!=="text",o=r&&this.target?this.target:H;return Cg`
      <${n}
        id="item"
        tabindex="${this.isDisabled||!i?-1:0}"
        ?disabled=${this.isDisabled}
        role="listitem"
        aria-selected=${this.ariaSelected||H}
        aria-checked=${this.ariaChecked||H}
        aria-expanded=${this.ariaExpanded||H}
        aria-haspopup=${this.ariaHasPopup||H}
        class="list-item ${Wt(this.getRenderClasses())}"
        href=${this.href||H}
        target=${o}
        @focus=${this.onFocus}
      >${e}</${n}>
    `}renderRipple(){return this.type==="text"?H:Q` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.isDisabled}></md-ripple>`}renderFocusRing(){return this.type==="text"?H:Q` <md-focus-ring
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
    `}onFocus(){this.tabIndex===-1&&this.dispatchEvent(V4())}focus(){var e;(e=this.listItemRoot)==null||e.focus()}}ei(dn);dn.shadowRootOptions={...ke.shadowRootOptions,delegatesFocus:!0};R([F({type:Boolean,reflect:!0})],dn.prototype,"disabled",void 0);R([F({reflect:!0})],dn.prototype,"type",void 0);R([F({type:Boolean,attribute:"md-list-item",reflect:!0})],dn.prototype,"isListItem",void 0);R([F()],dn.prototype,"href",void 0);R([F()],dn.prototype,"target",void 0);R([Ue(".list-item")],dn.prototype,"listItemRoot",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const z4=me`:host{display:flex;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-list-item-pressed-state-layer-opacity, 0.12)}:host(:is([type=button]:not([disabled]),[type=link])){cursor:pointer}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;cursor:inherit;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, 0.3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-list-item-one-line-container-height, 56px);padding-top:var(--md-list-item-top-space, 12px);padding-bottom:var(--md-list-item-bottom-space, 12px);padding-inline-start:var(--md-list-item-leading-space, 16px);padding-inline-end:var(--md-list-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}@media(forced-colors: active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let dp=class extends dn{};dp.styles=[z4];dp=R([He("md-list-item")],dp);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class rs extends ke{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){const{ariaLabel:e}=this;return Q`
      <div
        class="progress ${Wt(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${e||H}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?H:this.value}
        >${this.renderIndicator()}</div
      >
    `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}}ei(rs);R([F({type:Number})],rs.prototype,"value",void 0);R([F({type:Number})],rs.prototype,"max",void 0);R([F({type:Boolean})],rs.prototype,"indeterminate",void 0);R([F({type:Boolean,attribute:"four-color"})],rs.prototype,"fourColor",void 0);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class B4 extends rs{renderIndicator(){return this.indeterminate?this.renderIndeterminateContainer():this.renderDeterminateContainer()}renderDeterminateContainer(){const e=(1-this.value/this.max)*100;return Q`
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
 */const q4=me`:host{--_active-indicator-color: var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width: var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color: var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size: var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;width:var(--_size);height:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.progress,.spinner,.left,.right,.circle,svg,.track,.active-track{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1568.2352941176ms}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) rgba(0,0,0,0) rgba(0,0,0,0);animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-666.5ms,0ms}@media(forced-colors: active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let hp=class extends B4{};hp.styles=[q4];hp=R([He("md-circular-progress")],hp);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ti extends ke{constructor(){super(...arguments),this.disabled=!1,this.alwaysFocusable=!1,this.label="",this.hasIcon=!1}get rippleDisabled(){return this.disabled}focus(e){this.disabled&&!this.alwaysFocusable||super.focus(e)}render(){return Q`
      <div class="container ${Wt(this.getContainerClasses())}">
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
    `}handleIconChange(e){const r=e.target;this.hasIcon=r.assignedElements({flatten:!0}).length>0}}ei(ti);ti.shadowRootOptions={...ke.shadowRootOptions,delegatesFocus:!0};R([F({type:Boolean,reflect:!0})],ti.prototype,"disabled",void 0);R([F({type:Boolean,attribute:"always-focusable"})],ti.prototype,"alwaysFocusable",void 0);R([F()],ti.prototype,"label",void 0);R([F({type:Boolean,reflect:!0,attribute:"has-icon"})],ti.prototype,"hasIcon",void 0);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class dI extends ke{get chips(){return this.childElements.filter(e=>e instanceof ti)}constructor(){super(),this.internals=this.attachInternals(),this.addEventListener("focusin",this.updateTabIndices.bind(this)),this.addEventListener("update-focus",this.updateTabIndices.bind(this)),this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.internals.role="toolbar"}render(){return Q`<slot @slotchange=${this.updateTabIndices}></slot>`}handleKeyDown(e){const r=e.key==="ArrowLeft",n=e.key==="ArrowRight",i=e.key==="Home",o=e.key==="End";if(!r&&!n&&!i&&!o)return;const{chips:s}=this;if(s.length<2)return;if(e.preventDefault(),i||o){const m=i?0:s.length-1;s[m].focus({trailing:o}),this.updateTabIndices();return}const c=getComputedStyle(this).direction==="rtl"?r:n,u=s.find(m=>m.matches(":focus-within"));if(!u){(c?s[0]:s[s.length-1]).focus({trailing:!c}),this.updateTabIndices();return}const h=s.indexOf(u);let p=c?h+1:h-1;for(;p!==h;){p>=s.length?p=0:p<0&&(p=s.length-1);const m=s[p];if(m.disabled&&!m.alwaysFocusable){c?p++:p--;continue}m.focus({trailing:!c}),this.updateTabIndices();break}}updateTabIndices(){const{chips:e}=this;let r;for(const n of e){const i=n.alwaysFocusable||!n.disabled;if(n.matches(":focus-within")&&i){r=n;continue}i&&!r&&(r=n),n.tabIndex=-1}r&&(r.tabIndex=0)}}R([ts()],dI.prototype,"childElements",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const H4=me`:host{display:flex;flex-wrap:wrap;gap:8px}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let fp=class extends dI{};fp.styles=[H4];fp=R([He("md-chip-set")],fp);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const W4=me`.elevated{--md-elevation-level: var(--_elevated-container-elevation);--md-elevation-shadow-color: var(--_elevated-container-shadow-color)}.elevated::before{background:var(--_elevated-container-color)}.elevated:hover{--md-elevation-level: var(--_elevated-hover-container-elevation)}.elevated:focus-within{--md-elevation-level: var(--_elevated-focus-container-elevation)}.elevated:active{--md-elevation-level: var(--_elevated-pressed-container-elevation)}.elevated.disabled{--md-elevation-level: var(--_elevated-disabled-container-elevation)}.elevated.disabled::before{background:var(--_elevated-disabled-container-color);opacity:var(--_elevated-disabled-container-opacity)}@media(forced-colors: active){.elevated md-elevation{border:1px solid CanvasText}.elevated.disabled md-elevation{border-color:GrayText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const rc="aria-label-remove";class K4 extends ti{get ariaLabelRemove(){if(this.hasAttribute(rc))return this.getAttribute(rc);const{ariaLabel:e}=this;return`Remove ${e||this.label}`}set ariaLabelRemove(e){const r=this.ariaLabelRemove;e!==r&&(e===null?this.removeAttribute(rc):this.setAttribute(rc,e),this.requestUpdate())}constructor(){super(),this.handleTrailingActionFocus=this.handleTrailingActionFocus.bind(this),this.addEventListener("keydown",this.handleKeyDown.bind(this))}focus(e){if((this.alwaysFocusable||!this.disabled)&&(e!=null&&e.trailing)&&this.trailingAction){this.trailingAction.focus(e);return}super.focus(e)}renderContainerContent(){return Q`
      ${super.renderContainerContent()}
      ${this.renderTrailingAction(this.handleTrailingActionFocus)}
    `}handleKeyDown(e){var u,h;const r=e.key==="ArrowLeft",n=e.key==="ArrowRight";if(!r&&!n||!this.primaryAction||!this.trailingAction)return;const o=getComputedStyle(this).direction==="rtl"?r:n,s=(u=this.primaryAction)==null?void 0:u.matches(":focus-within"),l=(h=this.trailingAction)==null?void 0:h.matches(":focus-within");if(o&&l||!o&&s)return;e.preventDefault(),e.stopPropagation(),(o?this.trailingAction:this.primaryAction).focus()}handleTrailingActionFocus(){const{primaryAction:e,trailingAction:r}=this;!e||!r||(e.tabIndex=-1,r.addEventListener("focusout",()=>{e.tabIndex=0},{once:!0}))}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function G4({ariaLabel:t,disabled:e,focusListener:r,tabbable:n=!1}){return Q`
    <button
      class="trailing action"
      aria-label=${t}
      tabindex=${n?H:-1}
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
 */class qi extends K4{constructor(){super(...arguments),this.elevated=!1,this.removable=!1,this.selected=!1,this.hasSelectedIcon=!1}get primaryId(){return"button"}getContainerClasses(){return{...super.getContainerClasses(),elevated:this.elevated,selected:this.selected,"has-trailing":this.removable,"has-icon":this.hasIcon||this.selected}}renderPrimaryAction(e){const{ariaLabel:r}=this;return Q`
      <button
        class="primary action"
        id="button"
        aria-label=${r||H}
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
    `:super.renderLeadingIcon()}renderTrailingAction(e){return this.removable?G4({focusListener:e,ariaLabel:this.ariaLabelRemove,disabled:this.disabled}):H}renderOutline(){return this.elevated?Q`<md-elevation part="elevation"></md-elevation>`:super.renderOutline()}handleClick(e){if(this.disabled)return;const r=this.selected;if(this.selected=!this.selected,!ld(this,e)){this.selected=r;return}}}R([F({type:Boolean})],qi.prototype,"elevated",void 0);R([F({type:Boolean})],qi.prototype,"removable",void 0);R([F({type:Boolean,reflect:!0})],qi.prototype,"selected",void 0);R([F({type:Boolean,reflect:!0,attribute:"has-selected-icon"})],qi.prototype,"hasSelectedIcon",void 0);R([Ue(".primary.action")],qi.prototype,"primaryAction",void 0);R([Ue(".trailing.action")],qi.prototype,"trailingAction",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Y4=me`:host{--_container-height: var(--md-filter-chip-container-height, 32px);--_disabled-label-text-color: var(--md-filter-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filter-chip-disabled-label-text-opacity, 0.38);--_elevated-container-elevation: var(--md-filter-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-filter-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-filter-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-filter-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-filter-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-filter-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-filter-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-filter-chip-elevated-pressed-container-elevation, 1);--_elevated-selected-container-color: var(--md-filter-chip-elevated-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_label-text-font: var(--md-filter-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filter-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filter-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filter-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_selected-focus-label-text-color: var(--md-filter-chip-selected-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-label-text-color: var(--md-filter-chip-selected-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-color: var(--md-filter-chip-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-opacity: var(--md-filter-chip-selected-hover-state-layer-opacity, 0.08);--_selected-label-text-color: var(--md-filter-chip-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-label-text-color: var(--md-filter-chip-selected-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-color: var(--md-filter-chip-selected-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_selected-pressed-state-layer-opacity: var(--md-filter-chip-selected-pressed-state-layer-opacity, 0.12);--_elevated-container-color: var(--md-filter-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_disabled-outline-color: var(--md-filter-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-filter-chip-disabled-outline-opacity, 0.12);--_disabled-selected-container-color: var(--md-filter-chip-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-filter-chip-disabled-selected-container-opacity, 0.12);--_focus-outline-color: var(--md-filter-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-filter-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-filter-chip-outline-width, 1px);--_selected-container-color: var(--md-filter-chip-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_selected-outline-width: var(--md-filter-chip-selected-outline-width, 0px);--_focus-label-text-color: var(--md-filter-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-filter-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filter-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-filter-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filter-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-label-text-color: var(--md-filter-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-filter-chip-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filter-chip-pressed-state-layer-opacity, 0.12);--_icon-size: var(--md-filter-chip-icon-size, 18px);--_disabled-leading-icon-color: var(--md-filter-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filter-chip-disabled-leading-icon-opacity, 0.38);--_selected-focus-leading-icon-color: var(--md-filter-chip-selected-focus-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-leading-icon-color: var(--md-filter-chip-selected-hover-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-leading-icon-color: var(--md-filter-chip-selected-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-leading-icon-color: var(--md-filter-chip-selected-pressed-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-leading-icon-color: var(--md-filter-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-filter-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-filter-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-filter-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_disabled-trailing-icon-color: var(--md-filter-chip-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filter-chip-disabled-trailing-icon-opacity, 0.38);--_selected-focus-trailing-icon-color: var(--md-filter-chip-selected-focus-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-trailing-icon-color: var(--md-filter-chip-selected-hover-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-trailing-icon-color: var(--md-filter-chip-selected-pressed-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-trailing-icon-color: var(--md-filter-chip-selected-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-trailing-icon-color: var(--md-filter-chip-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filter-chip-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-trailing-icon-color: var(--md-filter-chip-pressed-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-color: var(--md-filter-chip-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var(--md-filter-chip-container-shape-start-start, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end: var(--md-filter-chip-container-shape-start-end, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end: var(--md-filter-chip-container-shape-end-end, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start: var(--md-filter-chip-container-shape-end-start, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space: var(--md-filter-chip-leading-space, 16px);--_trailing-space: var(--md-filter-chip-trailing-space, 16px);--_icon-label-space: var(--md-filter-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-filter-chip-with-leading-icon-leading-space, 8px);--_with-trailing-icon-trailing-space: var(--md-filter-chip-with-trailing-icon-trailing-space, 8px)}.selected.elevated::before{background:var(--_elevated-selected-container-color)}.checkmark{height:var(--_icon-size);width:var(--_icon-size)}.disabled .checkmark{opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){.disabled .checkmark{opacity:1}}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const X4=me`.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}:where(.selected)::before{background:var(--_selected-container-color)}:where(.selected) .outline{border-width:var(--_selected-outline-width)}:where(.selected.disabled)::before{background:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}:where(.selected) .label{color:var(--_selected-label-text-color)}:where(.selected:hover) .label{color:var(--_selected-hover-label-text-color)}:where(.selected:focus) .label{color:var(--_selected-focus-label-text-color)}:where(.selected:active) .label{color:var(--_selected-pressed-label-text-color)}:where(.selected) .leading.icon{color:var(--_selected-leading-icon-color)}:where(.selected:hover) .leading.icon{color:var(--_selected-hover-leading-icon-color)}:where(.selected:focus) .leading.icon{color:var(--_selected-focus-leading-icon-color)}:where(.selected:active) .leading.icon{color:var(--_selected-pressed-leading-icon-color)}@media(forced-colors: active){:where(.selected:not(.elevated))::before{border:1px solid CanvasText}:where(.selected) .outline{border-width:1px}}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const J4=me`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);display:inline-flex;height:var(--_container-height);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host([disabled]){pointer-events:none}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}.container{border-radius:inherit;box-sizing:border-box;display:flex;height:100%;position:relative;width:100%}.container::before{border-radius:inherit;content:"";inset:0;pointer-events:none;position:absolute}.container:not(.disabled){cursor:pointer}.container.disabled{pointer-events:none}.cell{display:flex}.action{align-items:baseline;appearance:none;background:none;border:none;border-radius:inherit;display:flex;outline:none;padding:0;position:relative;text-decoration:none}.primary.action{padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space)}.has-icon .primary.action{padding-inline-start:var(--_with-leading-icon-leading-space)}.touch{height:48px;inset:50% 0 0;position:absolute;transform:translateY(-50%);width:100%}:host([touch-target=none]) .touch{display:none}.outline{border:var(--_outline-width) solid var(--_outline-color);border-radius:inherit;inset:0;pointer-events:none;position:absolute}:where(:focus) .outline{border-color:var(--_focus-outline-color)}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}md-ripple{border-radius:inherit}.label,.icon,.touch{z-index:1}.label{align-items:center;color:var(--_label-text-color);display:flex;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);height:100%;text-overflow:ellipsis;user-select:none;white-space:nowrap}:where(:hover) .label{color:var(--_hover-label-text-color)}:where(:focus) .label{color:var(--_focus-label-text-color)}:where(:active) .label{color:var(--_pressed-label-text-color)}:where(.disabled) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.icon{align-self:center;display:flex;fill:currentColor;position:relative}.icon ::slotted(:first-child){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size)}.leading.icon{color:var(--_leading-icon-color)}.leading.icon ::slotted(*),.leading.icon svg{margin-inline-end:var(--_icon-label-space)}:where(:hover) .leading.icon{color:var(--_hover-leading-icon-color)}:where(:focus) .leading.icon{color:var(--_focus-leading-icon-color)}:where(:active) .leading.icon{color:var(--_pressed-leading-icon-color)}:where(.disabled) .leading.icon{color:var(--_disabled-leading-icon-color);opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){:where(.disabled) :is(.label,.outline,.leading.icon){color:GrayText;opacity:1}}a,button{text-transform:inherit}a,button:not(:disabled){cursor:inherit}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Z4=me`.trailing.action{align-items:center;justify-content:center;padding-inline-start:var(--_icon-label-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.trailing.action :is(md-ripple,md-focus-ring){border-radius:50%;height:calc(1.3333333333*var(--_icon-size));width:calc(1.3333333333*var(--_icon-size))}.trailing.action md-focus-ring{inset:unset}.has-trailing .primary.action{padding-inline-end:0}.trailing.icon{color:var(--_trailing-icon-color);height:var(--_icon-size);width:var(--_icon-size)}:where(:hover) .trailing.icon{color:var(--_hover-trailing-icon-color)}:where(:focus) .trailing.icon{color:var(--_focus-trailing-icon-color)}:where(:active) .trailing.icon{color:var(--_pressed-trailing-icon-color)}:where(.disabled) .trailing.icon{color:var(--_disabled-trailing-icon-color);opacity:var(--_disabled-trailing-icon-opacity)}:where(.selected) .trailing.icon{color:var(--_selected-trailing-icon-color)}:where(.selected:hover) .trailing.icon{color:var(--_selected-hover-trailing-icon-color)}:where(.selected:focus) .trailing.icon{color:var(--_selected-focus-trailing-icon-color)}:where(.selected:active) .trailing.icon{color:var(--_selected-pressed-trailing-icon-color)}@media(forced-colors: active){.trailing.icon{color:ButtonText}:where(.disabled) .trailing.icon{color:GrayText;opacity:1}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let pp=class extends qi{};pp.styles=[J4,W4,Z4,X4,Y4];pp=R([He("md-filter-chip")],pp);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const nc=Symbol("isFocusable"),kh=Symbol("privateIsFocusable"),ic=Symbol("externalTabIndex"),oc=Symbol("isUpdatingTabIndex"),sc=Symbol("updateTabIndex");function eV(t){var e,r,n;class i extends t{constructor(){super(...arguments),this[e]=!0,this[r]=null,this[n]=!1}get[nc](){return this[kh]}set[nc](s){this[nc]!==s&&(this[kh]=s,this[sc]())}connectedCallback(){super.connectedCallback(),this[sc]()}attributeChangedCallback(s,l,c){if(s!=="tabindex"){super.attributeChangedCallback(s,l,c);return}if(this.requestUpdate("tabIndex",Number(l??-1)),!this[oc]){if(!this.hasAttribute("tabindex")){this[ic]=null,this[sc]();return}this[ic]=this.tabIndex}}[(e=kh,r=ic,n=oc,sc)](){const s=this[nc]?0:-1,l=this[ic]??s;this[oc]=!0,this.tabIndex=l,this[oc]=!1}}return R([F({noAccessor:!0})],i.prototype,"tabIndex",void 0),i}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class tV extends Ng{computeValidity(e){this.radioElement||(this.radioElement=document.createElement("input"),this.radioElement.type="radio",this.radioElement.name="group");let r=!1,n=!1;for(const{checked:i,required:o}of e)o&&(r=!0),i&&(n=!0);return this.radioElement.checked=n,this.radioElement.required=r,{validity:{valueMissing:r&&!n},validationMessage:this.radioElement.validationMessage}}equals(e,r){if(e.length!==r.length)return!1;for(let n=0;n<e.length;n++){const i=e[n],o=r[n];if(i.checked!==o.checked||i.required!==o.required)return!1}return!0}copy(e){return e.map(({checked:r,required:n})=>({checked:r,required:n}))}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class rV{get controls(){const e=this.host.getAttribute("name");return!e||!this.root||!this.host.isConnected?[this.host]:Array.from(this.root.querySelectorAll(`[name="${e}"]`))}constructor(e){this.host=e,this.focused=!1,this.root=null,this.handleFocusIn=()=>{this.focused=!0,this.updateTabIndices()},this.handleFocusOut=()=>{this.focused=!1,this.updateTabIndices()},this.handleKeyDown=r=>{const n=r.key==="ArrowDown",i=r.key==="ArrowUp",o=r.key==="ArrowLeft",s=r.key==="ArrowRight";if(!o&&!s&&!n&&!i)return;const l=this.controls;if(!l.length)return;r.preventDefault();const u=getComputedStyle(this.host).direction==="rtl"?o||n:s||n,h=l.indexOf(this.host);let p=u?h+1:h-1;for(;p!==h;){p>=l.length?p=0:p<0&&(p=l.length-1);const m=l[p];if(m.hasAttribute("disabled")){u?p++:p--;continue}for(const E of l)E!==m&&(E.checked=!1,E.tabIndex=-1,E.blur());m.checked=!0,m.tabIndex=0,m.focus(),m.dispatchEvent(new Event("change",{bubbles:!0}));break}}}hostConnected(){this.root=this.host.getRootNode(),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("focusin",this.handleFocusIn),this.host.addEventListener("focusout",this.handleFocusOut),this.host.checked&&this.uncheckSiblings(),this.updateTabIndices()}hostDisconnected(){this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("focusin",this.handleFocusIn),this.host.removeEventListener("focusout",this.handleFocusOut),this.updateTabIndices(),this.root=null}handleCheckedChange(){this.host.checked&&(this.uncheckSiblings(),this.updateTabIndices())}uncheckSiblings(){for(const e of this.controls)e!==this.host&&(e.checked=!1)}updateTabIndices(){const e=this.controls,r=e.find(n=>n.checked);if(r||this.focused){const n=r||this.host;n.tabIndex=0;for(const i of e)i!==n&&(i.tabIndex=-1);return}for(const n of e)n.tabIndex=0}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Vw;const Ch=Symbol("checked");let nV=0;const iV=Rg(Pg(al(eV(ke))));class ll extends iV{get checked(){return this[Ch]}set checked(e){const r=this.checked;r!==e&&(this[Ch]=e,this.requestUpdate("checked",r),this.selectionController.handleCheckedChange())}constructor(){super(),this.maskId=`cutout${++nV}`,this[Vw]=!1,this.required=!1,this.value="on",this.selectionController=new rV(this),this.addController(this.selectionController),this[it].role="radio",this.addEventListener("click",this.handleClick.bind(this)),this.addEventListener("keydown",this.handleKeydown.bind(this))}render(){const e={checked:this.checked};return Q`
      <div class="container ${Wt(e)}" aria-hidden="true">
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
    `}updated(){this[it].ariaChecked=String(this.checked)}async handleClick(e){this.disabled||(await 0,!e.defaultPrevented&&(kg(e)&&this.focus(),this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))))}async handleKeydown(e){await 0,!(e.key!==" "||e.defaultPrevented)&&this.click()}[(Vw=Ch,Io)](){return this.checked?this.value:null}[yu](){return String(this.checked)}formResetCallback(){this.checked=this.hasAttribute("checked")}formStateRestoreCallback(e){this.checked=e==="true"}[Ua](){return new tV(()=>this.selectionController?this.selectionController.controls:[this])}[ja](){return this.container}}R([F({type:Boolean})],ll.prototype,"checked",null);R([F({type:Boolean})],ll.prototype,"required",void 0);R([F()],ll.prototype,"value",void 0);R([Ue(".container")],ll.prototype,"container",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const oV=me`@layer{:host{display:inline-flex;height:var(--md-radio-icon-size, 20px);outline:none;position:relative;vertical-align:top;width:var(--md-radio-icon-size, 20px);-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;--md-ripple-hover-color: var(--md-radio-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-radio-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-radio-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-opacity: var(--md-radio-pressed-state-layer-opacity, 0.12)}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-radio-icon-size, 20px))/2)}.container{display:flex;height:100%;place-content:center;place-items:center;width:100%}md-focus-ring{height:44px;inset:unset;width:44px}.checked{--md-ripple-hover-color: var(--md-radio-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-radio-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-radio-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-radio-selected-pressed-state-layer-opacity, 0.12)}input{appearance:none;height:48px;margin:0;position:absolute;width:48px;cursor:inherit}:host([touch-target=none]) input{width:100%;height:100%}md-ripple{border-radius:50%;height:var(--md-radio-state-layer-size, 40px);inset:unset;width:var(--md-radio-state-layer-size, 40px)}.icon{fill:var(--md-radio-icon-color, var(--md-sys-color-on-surface-variant, #49454f));inset:0;position:absolute}.outer.circle{transition:fill 50ms linear}.inner.circle{opacity:0;transform-origin:center;transition:opacity 50ms linear}.checked .icon{fill:var(--md-radio-selected-icon-color, var(--md-sys-color-primary, #6750a4))}.checked .inner.circle{animation:inner-circle-grow 300ms cubic-bezier(0.05, 0.7, 0.1, 1);opacity:1}@keyframes inner-circle-grow{from{transform:scale(0)}to{transform:scale(1)}}:host([disabled]) .circle{animation-duration:0s;transition-duration:0s}:host(:hover) .icon{fill:var(--md-radio-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host(:focus-within) .icon{fill:var(--md-radio-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host(:active) .icon{fill:var(--md-radio-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host([disabled]) .icon{fill:var(--md-radio-disabled-unselected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-radio-disabled-unselected-icon-opacity, 0.38)}:host(:hover) .checked .icon{fill:var(--md-radio-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4))}:host(:focus-within) .checked .icon{fill:var(--md-radio-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4))}:host(:active) .checked .icon{fill:var(--md-radio-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4))}:host([disabled]) .checked .icon{fill:var(--md-radio-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-radio-disabled-selected-icon-opacity, 0.38)}}@layer hcm{@media(forced-colors: active){.icon{fill:CanvasText}:host([disabled]) .icon{fill:GrayText;opacity:1}}}
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let mp=class extends ll{};mp.styles=[oV];mp=R([He("md-radio")],mp);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class cd extends ke{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}}R([F({type:Boolean,reflect:!0})],cd.prototype,"inset",void 0);R([F({type:Boolean,reflect:!0,attribute:"inset-start"})],cd.prototype,"insetStart",void 0);R([F({type:Boolean,reflect:!0,attribute:"inset-end"})],cd.prototype,"insetEnd",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const sV=me`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let gp=class extends cd{};gp.styles=[sV];gp=R([He("md-divider")],gp);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const aV={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:zo.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:zo.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},lV={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:zo.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:zo.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ze extends ke{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.quick=!1,this.returnValue="",this.noFocusTrap=!1,this.getOpenAnimation=()=>aV,this.getCloseAnimation=()=>lV,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.escapePressedWithoutCancel=!1,this.treewalker=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT),this.addEventListener("submit",this.handleSubmit)}async show(){var n;this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;const e=this.dialog;if(e.open||!this.isOpening){this.isOpening=!1;return}if(!this.dispatchEvent(new Event("open",{cancelable:!0}))){this.open=!1,this.isOpening=!1;return}e.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),(n=this.querySelector("[autofocus]"))==null||n.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1}async close(e=this.returnValue){if(this.isOpening=!1,!this.isConnected){this.open=!1;return}await this.updateComplete;const r=this.dialog;if(!r.open||this.isOpening){this.open=!1;return}const n=this.returnValue;if(this.returnValue=e,!this.dispatchEvent(new Event("close",{cancelable:!0}))){this.returnValue=n;return}await this.animateDialog(this.getCloseAnimation()),r.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){const e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),r={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},n=this.open&&!this.noFocusTrap,i=Q`
      <div
        class="focus-trap"
        tabindex="0"
        aria-hidden="true"
        @focus=${this.handleFocusTrapFocus}></div>
    `,{ariaLabel:o}=this;return Q`
      <div class="scrim"></div>
      <dialog
        class=${Wt(r)}
        aria-label=${o||H}
        aria-labelledby=${this.hasHeadline?"headline":H}
        role=${this.type==="alert"?"alertdialog":H}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        @close=${this.handleClose}
        @keydown=${this.handleKeydown}
        .returnValue=${this.returnValue||H}>
        ${n?i:H}
        <div class="container" @click=${this.handleContentClick}>
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||H}>
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
        ${n?i:H}
      </dialog>
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(e=>{for(const r of e)this.handleAnchorIntersection(r)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent){this.nextClickIsFromContent=!1;return}this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){const r=e.target,{submitter:n}=e;r.method!=="dialog"||!n||this.close(n.getAttribute("value")??this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;this.escapePressedWithoutCancel=!1;const r=!ld(this,e);e.preventDefault(),!r&&this.close()}handleClose(){var e;this.escapePressedWithoutCancel&&(this.escapePressedWithoutCancel=!1,(e=this.dialog)==null||e.dispatchEvent(new Event("cancel",{cancelable:!0})))}handleKeydown(e){e.key==="Escape"&&(this.escapePressedWithoutCancel=!0,setTimeout(()=>{this.escapePressedWithoutCancel=!1}))}async animateDialog(e){var O;if((O=this.cancelAnimations)==null||O.abort(),this.cancelAnimations=new AbortController,this.quick)return;const{dialog:r,scrim:n,container:i,headline:o,content:s,actions:l}=this;if(!r||!n||!i||!o||!s||!l)return;const{container:c,dialog:u,scrim:h,headline:p,content:m,actions:E}=e,S=[[r,u??[]],[n,h??[]],[i,c??[]],[o,p??[]],[s,m??[]],[l,E??[]]],N=[];for(const[x,y]of S)for(const I of y){const L=x.animate(...I);this.cancelAnimations.signal.addEventListener("abort",()=>{L.cancel()}),N.push(L)}await Promise.all(N.map(x=>x.finished.catch(()=>{})))}handleHeadlineChange(e){const r=e.target;this.hasHeadline=r.assignedElements().length>0}handleActionsChange(e){const r=e.target;this.hasActions=r.assignedElements().length>0}handleIconChange(e){const r=e.target;this.hasIcon=r.assignedElements().length>0}handleAnchorIntersection(e){const{target:r,isIntersecting:n}=e;r===this.topAnchor&&(this.isAtScrollTop=n),r===this.bottomAnchor&&(this.isAtScrollBottom=n)}getIsConnectedPromise(){return new Promise(e=>{this.isConnectedPromiseResolve=e})}handleFocusTrapFocus(e){var p;const[r,n]=this.getFirstAndLastFocusableChildren();if(!r||!n){(p=this.dialog)==null||p.focus();return}const i=e.target===this.firstFocusTrap,o=!i,s=e.relatedTarget===r,l=e.relatedTarget===n,c=!s&&!l;if(o&&l||i&&c){r.focus();return}if(i&&s||o&&c){n.focus();return}}getFirstAndLastFocusableChildren(){let e=null,r=null;for(this.treewalker.currentNode=this.treewalker.root;this.treewalker.nextNode();){const n=this.treewalker.currentNode;cV(n)&&(e||(e=n),r=n)}return[e,r]}}ei(ze);R([F({type:Boolean})],ze.prototype,"open",null);R([F({type:Boolean})],ze.prototype,"quick",void 0);R([F({attribute:!1})],ze.prototype,"returnValue",void 0);R([F()],ze.prototype,"type",void 0);R([F({type:Boolean,attribute:"no-focus-trap"})],ze.prototype,"noFocusTrap",void 0);R([Ue("dialog")],ze.prototype,"dialog",void 0);R([Ue(".scrim")],ze.prototype,"scrim",void 0);R([Ue(".container")],ze.prototype,"container",void 0);R([Ue(".headline")],ze.prototype,"headline",void 0);R([Ue(".content")],ze.prototype,"content",void 0);R([Ue(".actions")],ze.prototype,"actions",void 0);R([Pt()],ze.prototype,"isAtScrollTop",void 0);R([Pt()],ze.prototype,"isAtScrollBottom",void 0);R([Ue(".scroller")],ze.prototype,"scroller",void 0);R([Ue(".top.anchor")],ze.prototype,"topAnchor",void 0);R([Ue(".bottom.anchor")],ze.prototype,"bottomAnchor",void 0);R([Ue(".focus-trap")],ze.prototype,"firstFocusTrap",void 0);R([Pt()],ze.prototype,"hasHeadline",void 0);R([Pt()],ze.prototype,"hasActions",void 0);R([Pt()],ze.prototype,"hasIcon",void 0);function cV(t){var o;const e=":is(button,input,select,textarea,object,:is(a,area)[href],[tabindex],[contenteditable=true])",r=":not(:disabled,[disabled])";return t.matches(e+r+':not([tabindex^="-"])')?!0:!t.localName.includes("-")||!t.matches(r)?!1:((o=t.shadowRoot)==null?void 0:o.delegatesFocus)??!1}/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const uV=me`:host{border-start-start-radius:var(--md-dialog-container-shape-start-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-start-end-radius:var(--md-dialog-container-shape-start-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-end-radius:var(--md-dialog-container-shape-end-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-start-radius:var(--md-dialog-container-shape-end-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size, 24px);width:var(--md-dialog-icon-size, 24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));flex:1;font-weight:var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let vp=class extends ze{};vp.styles=[uV];vp=R([He("md-dialog")],vp);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Mw(t,e=!0){return e&&getComputedStyle(t).getPropertyValue("direction").trim()==="rtl"}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const dV=al(ke);class kt extends dV{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=Mw(this,this.flipIconInRtl)}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[it].form}get labels(){return this[it].labels}willUpdate(){this.href&&(this.disabled=!1)}render(){const e=this.href?Ti`div`:Ti`button`,{ariaLabel:r,ariaHasPopup:n,ariaExpanded:i}=this,o=r&&this.ariaLabelSelected,s=this.toggle?this.selected:H;let l=H;return this.href||(l=o&&this.selected?this.ariaLabelSelected:r),Cg`<${e}
        class="icon-button ${Wt(this.getRenderClasses())}"
        id="button"
        aria-label="${l||H}"
        aria-haspopup="${!this.href&&n||H}"
        aria-expanded="${!this.href&&i||H}"
        aria-pressed="${s}"
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?H:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():H}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${e}>`}renderLink(){const{ariaLabel:e}=this;return Q`
      <a
        class="link"
        id="link"
        href="${this.href}"
        target="${this.target||H}"
        aria-label="${e||H}"></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return Q`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return Q`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`}renderTouchTarget(){return Q`<span class="touch"></span>`}renderFocusRing(){return Q`<md-focus-ring
      part="focus-ring"
      for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){return Q`<md-ripple
      for=${this.href?"link":H}
      ?disabled="${!this.href&&this.disabled}"></md-ripple>`}connectedCallback(){this.flipIcon=Mw(this,this.flipIconInRtl),super.connectedCallback()}async handleClick(e){await 0,!(!this.toggle||this.disabled||e.defaultPrevented)&&(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}ei(kt),rI(kt);kt.formAssociated=!0;kt.shadowRootOptions={mode:"open",delegatesFocus:!0};R([F({type:Boolean,reflect:!0})],kt.prototype,"disabled",void 0);R([F({type:Boolean,attribute:"flip-icon-in-rtl"})],kt.prototype,"flipIconInRtl",void 0);R([F()],kt.prototype,"href",void 0);R([F()],kt.prototype,"target",void 0);R([F({attribute:"aria-label-selected"})],kt.prototype,"ariaLabelSelected",void 0);R([F({type:Boolean})],kt.prototype,"toggle",void 0);R([F({type:Boolean,reflect:!0})],kt.prototype,"selected",void 0);R([F()],kt.prototype,"type",void 0);R([F({reflect:!0})],kt.prototype,"value",void 0);R([Pt()],kt.prototype,"flipIcon",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const hV=me`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host([disabled]){--_disabled-icon-opacity: 1}}
`;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const fV=me`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let yp=class extends kt{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};yp.styles=[hV,fV];yp=R([He("md-icon-button")],yp);/**
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
 */const vV=gV("PowerOff",[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15",key:"dxknvb"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68",key:"1x7qb5"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]),yV=["Owner","Bartender","Barback","Server","Manager","Security","Runner"],$w=[{id:"ice",label:"ICE",icon:"ac_unit"},{id:"glass",label:"GLASSWARE",icon:"wine_bar",children:[{id:"rocks",label:"ROCKS"},{id:"collins",label:"COLLINS"},{id:"pint",label:"PINT"},{id:"coupe",label:"COUPE"},{id:"shot",label:"SHOT GLASS"},{id:"wine",label:"WINE GLASS"}]},{id:"fruit",label:"FRUIT / GARNISH",icon:"restaurant",children:[{id:"lime",label:"LIMES"},{id:"lemon",label:"LEMONS"},{id:"orange",label:"ORANGES"},{id:"cherry",label:"CHERRIES"},{id:"olive",label:"OLIVES"},{id:"mint",label:"MINT"}]},{id:"restock_beer",label:"RESTOCK BEER",icon:"sports_bar"},{id:"restock",label:"RESTOCK WELL",icon:"liquor",children:[{id:"vodka",label:"VODKA"},{id:"gin",label:"GIN"},{id:"tequila",label:"TEQUILA"},{id:"rum",label:"RUM"},{id:"whiskey",label:"WHISKEY"},{id:"cordial",label:"MIXERS"},{id:"beer",label:"BEER"}]},{id:"keg",label:"KEG KICKED",icon:"keg"},{id:"trash",label:"TRASH / SPILL",icon:"delete"},{id:"security",label:"SECURITY",icon:"security"},{id:"manager",label:"MANAGER",icon:"manage_accounts"}],_p={Owner:["manager","security","keg","trash","ice","glass","fruit","restock"],Manager:["manager","security","keg","trash","restock"],Bartender:["ice","glass","fruit","restock","keg","trash"],Barback:["ice","glass","fruit","restock","keg","trash"],Server:[],Runner:["ice","glass","restock"],Security:["security","fight","manager"]},_V=[{id:"search",label:"Search"},{id:"create",label:"Create Temp"}],wV=({onJoin:t})=>{const[e,r]=W.useState("search"),[n,i]=W.useState(""),[o,s]=W.useState("bar"),[l,c]=W.useState([]),[u,h]=W.useState(!1);W.useEffect(()=>{if(e==="search"&&n.length>2){const m=setTimeout(async()=>{h(!0);try{const S=await(await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(n+" bar")}`)).json();c(S)}catch(E){console.error(E)}finally{h(!1)}},500);return()=>clearTimeout(m)}else c([])},[n,e]);const p=m=>{m.preventDefault(),t({name:n,status:"temporary",type:o})};return P.jsxs("div",{className:"space-y-4",children:[e==="search"?P.jsxs("div",{className:"space-y-2",children:[P.jsx("div",{className:"relative",children:P.jsx("md-filled-text-field",{label:"Search OpenStreetMap",value:n,onInput:m=>i(m.target.value),type:"search",className:"w-full",children:u&&P.jsx("md-circular-progress",{slot:"trailing-icon",indeterminate:!0,style:{width:"24px",height:"24px"}})})}),u&&P.jsx("div",{className:"flex justify-center p-4",children:P.jsx("md-circular-progress",{indeterminate:!0})}),u&&P.jsx("div",{className:"flex justify-center p-4",children:P.jsx("md-circular-progress",{indeterminate:!0})}),u&&P.jsx("div",{className:"flex justify-center p-4",children:P.jsx("md-circular-progress",{indeterminate:!0})}),l.length>0&&P.jsx("md-list",{className:"bg-[#1E1E1E] rounded-xl overflow-hidden border border-gray-800 max-h-60 overflow-y-auto",children:l.map(m=>P.jsxs("md-list-item",{type:"button",onClick:()=>t({id:String(m.osm_id),name:m.name||m.display_name.split(",")[0],address:m.display_name,status:"verified",osmId:String(m.osm_id)}),children:[P.jsx("div",{slot:"headline",className:"text-white",children:m.name||m.display_name.split(",")[0]}),P.jsx("div",{slot:"supporting-text",className:"text-gray-400 text-xs truncate",children:m.display_name}),P.jsx("md-icon",{slot:"start",children:"location_on"})]},m.place_id))})]}):P.jsxs("form",{onSubmit:p,className:"space-y-4",children:[P.jsx("md-filled-text-field",{label:"Bar Name",value:n,onInput:m=>i(m.target.value)}),P.jsxs("div",{className:"flex gap-6 justify-center",children:[P.jsxs("div",{className:"flex items-center gap-2 cursor-pointer",onClick:()=>s("bar"),children:[P.jsx("md-radio",{name:"barType",value:"bar",checked:o==="bar","touch-target":"wrapper"}),P.jsx("span",{className:"text-white",children:"Bar"})]}),P.jsxs("div",{className:"flex items-center gap-2 cursor-pointer",onClick:()=>s("restaurant"),children:[P.jsx("md-radio",{name:"barType",value:"restaurant",checked:o==="restaurant","touch-target":"wrapper"}),P.jsx("span",{className:"text-white",children:"Restaurant"})]})]}),P.jsx("div",{className:"flex justify-center",children:P.jsx("md-filled-button",{type:"submit",children:"Create Bar"})})]}),P.jsx("div",{className:"flex justify-center gap-4 pt-2",children:_V.map(m=>{const E=e===m.id,S=E?"md-filled-button":"md-outlined-button";return P.jsx(S,{onClick:()=>!E&&r(m.id),children:m.label},m.id)})})]})},bV=({onSelect:t})=>{const[e,r]=W.useState(""),[n,i]=W.useState("");return P.jsxs("div",{className:"w-full max-w-sm space-y-6 animate-in fade-in slide-in-from-bottom-4",children:[P.jsxs("div",{className:"text-center space-y-2",children:[P.jsx("h2",{className:"text-2xl font-bold text-white",children:"Identification"}),P.jsx("p",{className:"text-gray-500",children:"Name and Rank, soldier."})]}),P.jsx("md-filled-text-field",{label:"Display Name (e.g. 'Angry Steve')",value:n,onInput:o=>i(o.target.value),required:!0}),P.jsx("div",{className:"bg-[#1E1E1E] rounded-xl overflow-hidden border border-gray-800 max-h-60 overflow-y-auto",children:yV.map(o=>P.jsxs("div",{onClick:()=>r(o),className:`p-4 flex items-center justify-between cursor-pointer border-b border-gray-800 last:border-0 hover:bg-white/5 ${e===o?"bg-white/10":""}`,children:[P.jsxs("div",{className:"flex items-center gap-3",children:[P.jsx("md-icon",{children:o==="Bartender"?"local_bar":"person"}),P.jsx("span",{className:"font-medium text-lg",children:o})]}),P.jsx("md-radio",{checked:e===o,"touch-target":"wrapper"})]},o))}),P.jsx("md-filled-button",{disabled:!e||!n||void 0,onClick:()=>t(e,n),children:"Clock In"})]})};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const hI=Symbol("dispatchHooks");function EV(t,e){const r=t[hI];if(!r)throw new Error(`'${t.type}' event needs setupDispatchHooks().`);r.addEventListener("after",e)}const Fw=new WeakMap;function xV(t,...e){let r=Fw.get(t);r||(r=new Set,Fw.set(t,r));for(const n of e){if(r.has(n))continue;let i=!1;t.addEventListener(n,o=>{if(i)return;o.stopImmediatePropagation();const s=Reflect.construct(o.constructor,[o.type,o]),l=new EventTarget;s[hI]=l,i=!0;const c=t.dispatchEvent(s);i=!1,c||o.preventDefault(),l.dispatchEvent(new Event("after"))},{capture:!0}),r.add(n)}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class TV extends Ng{computeValidity(e){return this.checkboxControl||(this.checkboxControl=document.createElement("input"),this.checkboxControl.type="checkbox"),this.checkboxControl.checked=e.checked,this.checkboxControl.required=e.required,{validity:this.checkboxControl.validity,validationMessage:this.checkboxControl.validationMessage}}equals(e,r){return e.checked===r.checked&&e.required===r.required}copy({checked:e,required:r}){return{checked:e,required:r}}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const IV=Rg(Pg(al(ke)));class hn extends IV{constructor(){super(),this.selected=!1,this.icons=!1,this.showOnlySelectedIcon=!1,this.required=!1,this.value="on",this.addEventListener("click",e=>{!kg(e)||!this.input||(this.focus(),nI(this.input))}),xV(this,"keydown"),this.addEventListener("keydown",e=>{EV(e,()=>{e.defaultPrevented||e.key!=="Enter"||this.disabled||!this.input||this.input.click()})})}render(){return Q`
      <div class="switch ${Wt(this.getRenderClasses())}">
        <input
          id="switch"
          class="touch"
          type="checkbox"
          role="switch"
          aria-label=${this.ariaLabel||H}
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
        <span class="handle ${Wt(e)}">
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
    `}renderTouchTarget(){return Q`<span class="touch"></span>`}shouldShowIcons(){return this.icons||this.showOnlySelectedIcon}handleInput(e){const r=e.target;this.selected=r.checked}handleChange(e){ld(this,e)}[Io](){return this.selected?this.value:null}[yu](){return String(this.selected)}formResetCallback(){this.selected=this.hasAttribute("selected")}formStateRestoreCallback(e){this.selected=e==="true"}[Ua](){return new TV(()=>({checked:this.selected,required:this.required}))}[ja](){return this.input}}ei(hn);hn.shadowRootOptions={mode:"open",delegatesFocus:!0};R([F({type:Boolean})],hn.prototype,"selected",void 0);R([F({type:Boolean})],hn.prototype,"icons",void 0);R([F({type:Boolean,attribute:"show-only-selected-icon"})],hn.prototype,"showOnlySelectedIcon",void 0);R([F({type:Boolean})],hn.prototype,"required",void 0);R([F()],hn.prototype,"value",void 0);R([Ue("input")],hn.prototype,"input",void 0);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const AV=me`@layer styles, hcm;@layer styles{:host{display:inline-flex;outline:none;vertical-align:top;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-switch-track-height, 32px))/2) 0px}md-focus-ring{--md-focus-ring-shape-start-start: var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-start-end: var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-end: var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-start: var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}.switch{align-items:center;display:inline-flex;flex-shrink:0;position:relative;width:var(--md-switch-track-width, 52px);height:var(--md-switch-track-height, 32px);border-start-start-radius:var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}input{appearance:none;height:48px;outline:none;margin:0;position:absolute;width:100%;z-index:1;cursor:inherit}:host([touch-target=none]) input{display:none}}@layer styles{.track{position:absolute;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;display:flex;justify-content:center;align-items:center}.track::before{content:"";display:flex;position:absolute;height:100%;width:100%;border-radius:inherit;box-sizing:border-box;transition-property:opacity,background-color;transition-timing-function:linear;transition-duration:67ms}.disabled .track{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.disabled .track::before,.disabled .track::after{transition:none;opacity:var(--md-switch-disabled-track-opacity, 0.12)}.disabled .track::before{background-clip:content-box}.selected .track::before{background-color:var(--md-switch-selected-track-color, var(--md-sys-color-primary, #6750a4))}.selected:hover .track::before{background-color:var(--md-switch-selected-hover-track-color, var(--md-sys-color-primary, #6750a4))}.selected:focus-within .track::before{background-color:var(--md-switch-selected-focus-track-color, var(--md-sys-color-primary, #6750a4))}.selected:active .track::before{background-color:var(--md-switch-selected-pressed-track-color, var(--md-sys-color-primary, #6750a4))}.selected.disabled .track{background-clip:border-box}.selected.disabled .track::before{background-color:var(--md-switch-disabled-selected-track-color, var(--md-sys-color-on-surface, #1d1b20))}.unselected .track::before{background-color:var(--md-switch-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-track-outline-color, var(--md-sys-color-outline, #79747e));border-style:solid;border-width:var(--md-switch-track-outline-width, 2px)}.unselected:hover .track::before{background-color:var(--md-switch-hover-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-hover-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:focus-visible .track::before{background-color:var(--md-switch-focus-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-focus-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:active .track::before{background-color:var(--md-switch-pressed-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-pressed-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected.disabled .track::before{background-color:var(--md-switch-disabled-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-disabled-track-outline-color, var(--md-sys-color-on-surface, #1d1b20))}}@layer hcm{@media(forced-colors: active){.selected .track::before{background:ButtonText;border-color:ButtonText}.disabled .track::before{border-color:GrayText;opacity:1}.disabled.selected .track::before{background:GrayText}}}@layer styles{.handle-container{display:flex;place-content:center;place-items:center;position:relative;transition:margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)}.selected .handle-container{margin-inline-start:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.unselected .handle-container{margin-inline-end:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.disabled .handle-container{transition:none}.handle{border-start-start-radius:var(--md-switch-handle-shape-start-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-handle-shape-start-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-handle-shape-end-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-handle-shape-end-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));height:var(--md-switch-handle-height, 16px);width:var(--md-switch-handle-width, 16px);transform-origin:center;transition-property:height,width;transition-duration:250ms,250ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1),cubic-bezier(0.2, 0, 0, 1);z-index:0}.handle::before{content:"";display:flex;inset:0;position:absolute;border-radius:inherit;box-sizing:border-box;transition:background-color 67ms linear}.disabled .handle,.disabled .handle::before{transition:none}.selected .handle{height:var(--md-switch-selected-handle-height, 24px);width:var(--md-switch-selected-handle-width, 24px)}.handle.with-icon{height:var(--md-switch-with-icon-handle-height, 24px);width:var(--md-switch-with-icon-handle-width, 24px)}.selected:not(.disabled):active .handle,.unselected:not(.disabled):active .handle{height:var(--md-switch-pressed-handle-height, 28px);width:var(--md-switch-pressed-handle-width, 28px);transition-timing-function:linear;transition-duration:100ms}.selected .handle::before{background-color:var(--md-switch-selected-handle-color, var(--md-sys-color-on-primary, #fff))}.selected:hover .handle::before{background-color:var(--md-switch-selected-hover-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:focus-within .handle::before{background-color:var(--md-switch-selected-focus-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:active .handle::before{background-color:var(--md-switch-selected-pressed-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected.disabled .handle::before{background-color:var(--md-switch-disabled-selected-handle-color, var(--md-sys-color-surface, #fef7ff));opacity:var(--md-switch-disabled-selected-handle-opacity, 1)}.unselected .handle::before{background-color:var(--md-switch-handle-color, var(--md-sys-color-outline, #79747e))}.unselected:hover .handle::before{background-color:var(--md-switch-hover-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:focus-within .handle::before{background-color:var(--md-switch-focus-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:active .handle::before{background-color:var(--md-switch-pressed-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected.disabled .handle::before{background-color:var(--md-switch-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-handle-opacity, 0.38)}md-ripple{border-radius:var(--md-switch-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));height:var(--md-switch-state-layer-size, 40px);inset:unset;width:var(--md-switch-state-layer-size, 40px)}.selected md-ripple{--md-ripple-hover-color: var(--md-switch-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-color: var(--md-switch-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-switch-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-selected-pressed-state-layer-opacity, 0.12)}.unselected md-ripple{--md-ripple-hover-color: var(--md-switch-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-color: var(--md-switch-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-switch-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-pressed-state-layer-opacity, 0.12)}}@layer hcm{@media(forced-colors: active){.unselected .handle::before{background:ButtonText}.disabled .handle::before{opacity:1}.disabled.unselected .handle::before{background:GrayText}}}@layer styles{.icons{position:relative;height:100%;width:100%}.icon{position:absolute;inset:0;margin:auto;display:flex;align-items:center;justify-content:center;fill:currentColor;transition:fill 67ms linear,opacity 33ms linear,transform 167ms cubic-bezier(0.2, 0, 0, 1);opacity:0}.disabled .icon{transition:none}.selected .icon--on,.unselected .icon--off{opacity:1}.unselected .handle:not(.with-icon) .icon--on{transform:rotate(-45deg)}.icon--off{width:var(--md-switch-icon-size, 16px);height:var(--md-switch-icon-size, 16px);color:var(--md-switch-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:hover .icon--off{color:var(--md-switch-hover-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:focus-within .icon--off{color:var(--md-switch-focus-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:active .icon--off{color:var(--md-switch-pressed-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected.disabled .icon--off{color:var(--md-switch-disabled-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));opacity:var(--md-switch-disabled-icon-opacity, 0.38)}.icon--on{width:var(--md-switch-selected-icon-size, 16px);height:var(--md-switch-selected-icon-size, 16px);color:var(--md-switch-selected-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:hover .icon--on{color:var(--md-switch-selected-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:focus-within .icon--on{color:var(--md-switch-selected-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:active .icon--on{color:var(--md-switch-selected-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected.disabled .icon--on{color:var(--md-switch-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-selected-icon-opacity, 0.38)}}@layer hcm{@media(forced-colors: active){.icon--off{fill:Canvas}.icon--on{fill:ButtonText}.disabled.unselected .icon--off,.disabled.selected .icon--on{opacity:1}.disabled .icon--on{fill:GrayText}}}
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let wp=class extends hn{};wp.styles=[AV];wp=R([He("md-switch")],wp);const SV=({open:t,onClose:e,onSave:r,userRole:n,currentPreferences:i,allButtons:o})=>{const[s,l]=W.useState([]);W.useEffect(()=>{t&&l(i)},[t,i]);const c=(p,m)=>{l(m?E=>[...E,p]:E=>E.filter(S=>S!==p))},u=()=>{const p=_p[n]||[];l(p)},h=()=>{r(s),e()};return P.jsxs("md-dialog",{open:t?!0:void 0,onClose:e,children:[P.jsx("div",{slot:"headline",children:"Notification Settings"}),P.jsxs("div",{slot:"content",className:"flex flex-col gap-4 min-w-[300px]",children:[P.jsxs("div",{className:"text-sm text-gray-400",children:["Enable or disable notifications for your role (",n,")."]}),P.jsx("md-list",{className:"bg-transparent max-h-[60vh] overflow-y-auto",children:o.map(p=>{const m=s.includes(p.id);return P.jsxs("md-list-item",{children:[P.jsx("div",{slot:"headline",children:p.label}),P.jsx("md-icon",{slot:"start",children:p.icon||"notifications"}),P.jsx("md-switch",{slot:"end",selected:m,onClick:()=>c(p.id,!m)})]},p.id)})})]}),P.jsxs("div",{slot:"actions",children:[P.jsx("md-text-button",{onClick:u,children:"Reset to Default"}),P.jsx("div",{className:"flex-1"}),P.jsx("md-text-button",{onClick:e,children:"Cancel"}),P.jsx("md-filled-button",{onClick:h,children:"Save"})]})]})};function kV(){const[t,e]=W.useState(null),[r,n]=W.useState(null),[i,o]=W.useState(!1),[s,l]=jk(),c=s.get("bar")||localStorage.getItem("barId"),[u,h]=W.useState(c),[p,m]=W.useState(""),[E,S]=W.useState(null),[N,O]=W.useState(""),[x,y]=W.useState([]),[I,L]=W.useState([]),[j,B]=W.useState($w),[b,v]=W.useState(null),[_,T]=W.useState({}),[A,k]=W.useState([]),[w,xe]=W.useState({type:"brand",open:!1,searchTerm:""}),[Qt,Yt]=W.useState({open:!1,currentQty:1,context:""}),[Ne,z]=W.useState([]),Z=W.useRef(null),[ie,_e]=W.useState(!1),[ge,Ce]=W.useState(!1);W.useEffect(()=>{const V=_R(Rs,X=>{e(X),X&&vL().then(oe=>oe&&v(oe))});return yL().then(()=>{navigator.vibrate&&navigator.vibrate([500,200,500]),new Audio("/alert.mp3").play().catch(()=>{})}),()=>V()},[]),W.useEffect(()=>{if(!t||!u)return;l({bar:u}),localStorage.setItem("barId",u);const V=Ot(xt,`bars/${u}/users`,t.uid),X=Ot(xt,`bars/${u}/tokens`,t.uid);(async()=>{b&&(await Xi(X,{token:b,updated:si()}),await Cs(V,{status:"active",lastSeen:si()}).catch(()=>{}))})();const Nt=fh(V,Re=>{if(Re.exists()){const de=Re.data();S(de.role),O(de.displayName||"Unknown"),de.notificationPreferences?y(de.notificationPreferences):de.role&&y(_p[de.role]||[])}else S(null)}),be=fh(Ot(xt,"bars",u),Re=>{if(Re.exists()){const de=Re.data();m(de.name),de.buttons&&B([...$w,...de.buttons]),de.beerInventory&&T(de.beerInventory),de.wells&&k(de.wells)}}),fn=fh(PO(iw(xt,"requests"),NO("barId","==",u),OO("timestamp","desc")),Re=>L(Re.docs.map(de=>({id:de.id,...de.data()}))));return()=>{Nt(),be(),fn()}},[t,u,b,l]),W.useEffect(()=>(Z.current&&clearTimeout(Z.current),Ne.length>0&&(Z.current=setTimeout(()=>{const V=Ne.map(X=>X.label).join(": ");xr(`${V} (Ask Me)`),z([])},6e4)),()=>{Z.current&&clearTimeout(Z.current)}),[Ne]);const Xt=async V=>{if(!t||!u)return;if(_[V]){xe(Nt=>({...Nt,open:!1,searchTerm:""}));const oe={id:`brand_${V}`,label:V,children:[]};z(Nt=>[...Nt,oe]);return}await Xi(Ot(xt,"bars",u),{beerInventory:{[V]:[]}},{merge:!0}),T(oe=>({...oe,[V]:[]})),xe(oe=>({...oe,open:!1,searchTerm:""}));const X={id:`brand_${V}`,label:V,children:[]};z(oe=>[...oe,X])},Jt=async V=>{if(!t||!u||!w.parentContext)return;const X=w.parentContext;if((_[X]||[]).includes(V)){xe(fn=>({...fn,open:!1,searchTerm:""}));const be={id:`type_${X}_${V}`,label:V,children:[]};z(fn=>[...fn,be]);return}await Cs(Ot(xt,"bars",u),{[`beerInventory.${X}`]:cw(V)}),T(be=>({...be,[X]:[...be[X]||[],V]})),xe(be=>({...be,open:!1,searchTerm:""}));const Nt={id:`type_${X}_${V}`,label:V,children:[]};z(be=>[...be,Nt])},ur=async V=>{if(!(!t||!u)){if(A.includes(V)){xe(X=>({...X,open:!1,searchTerm:""})),xr(`ICE: ${V}`),z([]);return}await Cs(Ot(xt,"bars",u),{wells:cw(V)}),k(X=>[...X,V]),xe(X=>({...X,open:!1,searchTerm:""})),xr(`ICE: ${V}`),z([])}},Zt=V=>{if(V.id==="ice")return[...A.map(oe=>({id:`well_${oe}`,label:oe})),{id:"add_well",label:"+ ADD WELL",action:"add_brand",isCustom:!0}];if(V.id==="restock_beer")return[...Object.keys(_).map(oe=>({id:`brand_${oe}`,label:oe,children:[]})),{id:"add_brand",label:"+ ADD BRAND",action:"add_brand",isCustom:!0}];if(V.id.startsWith("brand_")){const X=V.label;return[...(_[X]||[]).map(be=>({id:`type_${X}_${be}`,label:be,children:[]})),{id:"add_type",label:"+ ADD TYPE",action:"add_type",isCustom:!0}]}return V.id.startsWith("type_")?[{id:"qty_6",label:"6"},{id:"qty_12",label:"12"},{id:"qty_24",label:"24"},{id:"qty_other",label:"Other",action:"custom_qty"}]:V.children||[]},cl=V=>{if(V.id==="add_well"){const oe=`Well #${A.length+1}`;xe({type:"well",open:!0,searchTerm:oe});return}if(V.action==="add_brand"){xe({type:"brand",open:!0,searchTerm:""});return}if(V.action==="add_type"){const oe=Ne[Ne.length-1];xe({type:"type",open:!0,parentContext:oe.label,searchTerm:""});return}if(V.action==="custom_qty"){Yt({open:!0,currentQty:1,context:Ne.map(oe=>oe.label).join(": ")});return}const X=Zt(V);X&&X.length>0?z([...Ne,V]):(xr([...Ne,V].map(oe=>oe.label).join(": ")),z([]))},ud=async(V,X)=>{!t||!u||(await Xi(Ot(xt,`bars/${u}/users`,t.uid),{role:V,displayName:X,email:t.email,status:"active",joinedAt:si(),lastSeen:si(),notificationPreferences:_p[V]||[]},{merge:!0}),b&&await Xi(Ot(xt,`bars/${u}/tokens`,t.uid),{token:b,updated:si()}))},Hi=async()=>{!t||!u||(await MO(Ot(xt,`bars/${u}/tokens`,t.uid)),await Cs(Ot(xt,`bars/${u}/users`,t.uid),{status:"off_clock"}),h(null),localStorage.removeItem("barId"),_e(!1))},xr=async V=>{!t||!u||(navigator.vibrate&&navigator.vibrate(100),await $O(iw(xt,"requests"),{barId:u,label:V,requesterId:t.uid,requesterName:N,requesterRole:E,status:"pending",timestamp:si(),lastNotification:si()}))},ns=async V=>{await Cs(Ot(xt,"requests",V),{status:"claimed",claimedBy:t==null?void 0:t.uid,claimerName:N})},is=async V=>{!t||!u||(y(V),await Xi(Ot(xt,`bars/${u}/users`,t.uid),{notificationPreferences:V},{merge:!0}))},os=async V=>{V.preventDefault();const X=new FormData(V.target);try{i?await mR(Rs,X.get("email"),X.get("password")):await gR(Rs,X.get("email"),X.get("password"))}catch(oe){n(oe.message)}},ss=async()=>{try{await UR(Rs,gL)}catch(V){n(V.message)}};if(!t)return P.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center p-6 space-y-8 bg-black",children:[P.jsx("h1",{className:"text-4xl font-bold tracking-widest text-white",children:"BARBACKER"}),r&&P.jsx("div",{className:"text-red-400 p-2 border border-red-800 rounded",children:r}),P.jsxs("form",{onSubmit:os,className:"w-full max-w-sm space-y-4",children:[P.jsx("md-filled-text-field",{label:"Email",name:"email",type:"email",required:!0}),P.jsx("md-filled-text-field",{label:"Password",name:"password",type:"password",required:!0}),P.jsx("md-filled-button",{type:"submit",children:i?"Create Account":"Clock In"})]}),P.jsxs("div",{className:"flex gap-4 items-center",children:[P.jsx("md-text-button",{onClick:()=>o(!i),children:i?"Login":"Register"}),P.jsxs("md-outlined-button",{onClick:ss,children:[P.jsx("md-icon",{slot:"icon",children:"mail"}),"Google"]})]})]});if(!u)return P.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-black",children:[P.jsxs("div",{className:"text-center",children:[P.jsx("h2",{className:"text-2xl font-bold text-white mb-1",children:"Select Bar"}),P.jsxs("p",{className:"text-gray-500 text-sm",children:["You are ",t.email]})]}),P.jsx("md-text-button",{onClick:()=>wR(Rs),children:"Sign Out"}),P.jsx(wV,{onJoin:async V=>{V.id&&(V.status==="temporary"&&await Xi(Ot(xt,"bars",V.id),{name:V.name,address:V.address||"",status:"temporary",type:V.type||"bar",buttons:[]},{merge:!0}),h(V.id))}})]});if(!E)return P.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-black",children:[P.jsx("md-icon-button",{onClick:()=>{h(null),localStorage.removeItem("barId")},children:P.jsx("md-icon",{children:"arrow_back"})}),P.jsx(bV,{onSelect:ud})]});const ul=V=>{for(const X of j){if(V===X.label||V.startsWith(X.label))return X.id;if(X.children){for(const oe of X.children)if(V===oe.label)return X.id}}},dl=I.filter(V=>{if(V.status!=="pending")return!1;const X=ul(V.label);return X?x.includes(X):!0}),dd=I.filter(V=>V.status!=="pending").slice(0,20),hl=Ne.length>0?Zt(Ne[Ne.length-1]):j;return P.jsxs("div",{className:"min-h-screen pb-24 bg-black relative overflow-hidden",children:[P.jsx(SV,{open:ge,onClose:()=>Ce(!1),onSave:is,userRole:E||"",currentPreferences:x,allButtons:j}),P.jsxs("md-dialog",{open:w.open,onClose:()=>xe(V=>({...V,open:!1})),children:[P.jsxs("div",{slot:"headline",children:[w.type==="brand"&&"Select or Add Brand",w.type==="type"&&"Select or Add Type",w.type==="well"&&"Add Well"]}),P.jsxs("div",{slot:"content",className:"flex flex-col gap-4 min-w-[300px] h-[300px]",children:[P.jsx("md-filled-text-field",{label:w.type==="well"?"Well Name":"Search...",value:w.searchTerm,onInput:V=>xe(X=>({...X,searchTerm:V.target.value})),style:{width:"100%"}}),w.type!=="well"?P.jsx("div",{className:"flex-1 overflow-y-auto border border-gray-800 rounded p-2",children:P.jsx("md-list",{children:(()=>{const V=w.searchTerm.toLowerCase();let X=[];w.type==="brand"?X=Object.keys(_):X=Array.from(new Set(Object.values(_).flat()));const oe=X.filter(be=>be.toLowerCase().includes(V)),Nt=oe.some(be=>be.toLowerCase()===V);return P.jsxs(P.Fragment,{children:[oe.map(be=>P.jsxs("md-list-item",{type:"button",onClick:()=>w.type==="brand"?Xt(be):Jt(be),children:[P.jsx("div",{slot:"headline",children:be}),P.jsx("md-icon",{slot:"end",children:"arrow_forward"})]},be)),w.searchTerm&&!Nt&&P.jsxs("md-list-item",{type:"button",onClick:()=>w.type==="brand"?Xt(w.searchTerm):Jt(w.searchTerm),children:[P.jsxs("div",{slot:"headline",className:"text-blue-400",children:['Create "',w.searchTerm,'"']}),P.jsx("md-icon",{slot:"end",className:"text-blue-400",children:"add_circle"})]})]})})()})}):P.jsx("div",{className:"flex justify-center p-4",children:P.jsx("md-filled-button",{onClick:()=>ur(w.searchTerm),children:"Save & Request"})})]}),P.jsx("div",{slot:"actions",children:P.jsx("md-text-button",{onClick:()=>xe(V=>({...V,open:!1})),children:"Cancel"})})]}),P.jsxs("md-dialog",{open:Qt.open,onClose:()=>Yt(V=>({...V,open:!1})),children:[P.jsx("div",{slot:"headline",children:"Select Quantity"}),P.jsxs("div",{slot:"content",className:"flex items-center justify-center gap-6 py-6",children:[P.jsx("md-filled-tonal-button",{onClick:()=>Yt(V=>({...V,currentQty:Math.max(1,V.currentQty-1)})),children:P.jsx("md-icon",{children:"remove"})}),P.jsx("span",{className:"text-4xl font-bold text-white",children:Qt.currentQty}),P.jsx("md-filled-tonal-button",{onClick:()=>Yt(V=>({...V,currentQty:V.currentQty+1})),children:P.jsx("md-icon",{children:"add"})})]}),P.jsxs("div",{slot:"actions",children:[P.jsx("md-text-button",{onClick:()=>Yt(V=>({...V,open:!1})),children:"Cancel"}),P.jsx("md-filled-button",{onClick:()=>{xr(`${Qt.context}: ${Qt.currentQty}`),Yt(V=>({...V,open:!1})),z([])},children:"Send"})]})]}),P.jsxs("md-dialog",{open:ie,onClose:()=>_e(!1),children:[P.jsx("div",{slot:"headline",children:"Abandon Ship?"}),P.jsx("div",{slot:"content",children:"Going off clock stops all notifications. The bar will be unprotected. Are you sure?"}),P.jsxs("div",{slot:"actions",children:[P.jsx("md-text-button",{onClick:()=>_e(!1),children:"Stay"}),P.jsx("md-filled-button",{onClick:Hi,class:"btn-alert",children:"Leave"})]})]}),P.jsxs("div",{className:"flex justify-between items-center p-4 bg-[#121212] sticky top-0 z-10 border-b border-[#333]",children:[P.jsxs("div",{className:"flex flex-col",children:[P.jsx("span",{className:"font-bold text-lg text-white tracking-wide",children:p}),P.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-400",children:[P.jsx("span",{className:"text-white font-bold",children:N}),P.jsx("span",{className:"bg-gray-800 px-1 rounded",children:E})]})]}),P.jsxs("div",{className:"flex gap-2",children:[P.jsx("md-icon-button",{onClick:()=>Ce(!0),title:"Notification Settings",children:P.jsx("md-icon",{className:"text-gray-400",children:"settings"})}),P.jsx("md-icon-button",{onClick:()=>_e(!0),title:"Go Off Clock",children:P.jsx(vV,{className:"text-gray-500 hover:text-red-500"})})]})]}),Ne.length>0&&P.jsxs("div",{className:"fixed inset-0 bg-black/95 z-50 flex flex-col p-6 animate-in fade-in duration-300",children:[P.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[P.jsx("md-icon-button",{onClick:()=>z([]),children:P.jsx("md-icon",{children:"close"})}),P.jsx("span",{className:"text-xl font-medium text-gray-200",children:Ne.map(V=>V.label).join(" > ")})]}),P.jsx("div",{className:"grid grid-cols-2 gap-4 mb-auto",children:hl.map(V=>P.jsx("md-filled-tonal-button",{onClick:()=>cl(V),style:{height:"100px",fontSize:"18px"},children:V.label},V.id))}),P.jsx("div",{className:"mt-8",children:P.jsx("md-filled-button",{class:"w-full bg-gray-800 text-gray-300",onClick:()=>z([]),children:"Cancel"})})]}),P.jsx("div",{className:"grid grid-cols-2 gap-3 p-4",children:j.map(V=>{const X=dl.some(oe=>oe.label.startsWith(V.label));return P.jsx("md-filled-tonal-button",{onClick:()=>cl(V),class:X?"btn-alert":"",style:{height:"120px"},children:P.jsxs("div",{className:"flex flex-col items-center gap-2",children:[P.jsx("md-icon",{style:{fontSize:32},children:V.icon||"circle"}),P.jsx("span",{className:"text-lg font-bold leading-none",children:V.label}),X&&P.jsx("span",{className:"text-xs opacity-80",children:"PENDING"})]})},V.id)})}),P.jsx("div",{className:"px-4 mt-4",children:dl.map(V=>P.jsxs("div",{onClick:()=>ns(V.id),className:"mb-2 p-4 bg-[#2C1A1A] border-l-4 border-red-500 rounded-r-lg flex justify-between items-center cursor-pointer active:bg-red-900/40 transition-colors",children:[P.jsxs("div",{className:"flex flex-col",children:[P.jsx("span",{className:"font-medium text-red-100",children:V.label}),P.jsxs("span",{className:"text-xs text-red-400",children:[V.requesterName," (",V.requesterRole,")"]})]}),P.jsx("md-filled-button",{class:"btn-alert",style:{height:"32px"},children:"CLAIM"})]},V.id))}),P.jsxs("div",{className:"px-4 mt-8 pb-10",children:[P.jsx("div",{className:"text-xs font-bold text-gray-600 mb-2 uppercase tracking-widest",children:"Shift Log"}),P.jsx("md-list",{className:"bg-transparent",children:dd.map(V=>P.jsxs("md-list-item",{children:[P.jsx("div",{slot:"headline",className:"text-gray-400",children:V.label}),P.jsxs("div",{slot:"supporting-text",className:"text-xs text-gray-600",children:["Asked by ",V.requesterName," • Claimed by ",V.claimerName||"Someone"]}),P.jsx("md-icon",{slot:"start",className:"text-green-800",children:"check_circle"})]},V.id))})]})]})}Zb(document.getElementById("root")).render(P.jsx(W.StrictMode,{children:P.jsx(Uk,{children:P.jsx(kV,{})})}));
