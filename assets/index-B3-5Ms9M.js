(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function hE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var xv={exports:{}},Cl={},Av={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ds=Symbol.for("react.element"),dE=Symbol.for("react.portal"),mE=Symbol.for("react.fragment"),pE=Symbol.for("react.strict_mode"),gE=Symbol.for("react.profiler"),vE=Symbol.for("react.provider"),yE=Symbol.for("react.context"),_E=Symbol.for("react.forward_ref"),wE=Symbol.for("react.suspense"),EE=Symbol.for("react.memo"),SE=Symbol.for("react.lazy"),Dm=Symbol.iterator;function TE(t){return t===null||typeof t!="object"?null:(t=Dm&&t[Dm]||t["@@iterator"],typeof t=="function"?t:null)}var Cv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kv=Object.assign,Pv={};function Fi(t,e,n){this.props=t,this.context=e,this.refs=Pv,this.updater=n||Cv}Fi.prototype.isReactComponent={};Fi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function bv(){}bv.prototype=Fi.prototype;function Jf(t,e,n){this.props=t,this.context=e,this.refs=Pv,this.updater=n||Cv}var Zf=Jf.prototype=new bv;Zf.constructor=Jf;kv(Zf,Fi.prototype);Zf.isPureReactComponent=!0;var Lm=Array.isArray,Rv=Object.prototype.hasOwnProperty,eh={current:null},Nv={key:!0,ref:!0,__self:!0,__source:!0};function Dv(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Rv.call(e,r)&&!Nv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ds,type:t,key:o,ref:s,props:i,_owner:eh.current}}function IE(t,e){return{$$typeof:ds,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function th(t){return typeof t=="object"&&t!==null&&t.$$typeof===ds}function xE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vm=/\/+/g;function Nu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xE(""+t.key):e.toString(36)}function _a(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ds:case dE:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Nu(s,0):r,Lm(i)?(n="",t!=null&&(n=t.replace(Vm,"$&/")+"/"),_a(i,e,n,"",function(c){return c})):i!=null&&(th(i)&&(i=IE(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Vm,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Lm(t))for(var l=0;l<t.length;l++){o=t[l];var u=r+Nu(o,l);s+=_a(o,e,n,u,i)}else if(u=TE(t),typeof u=="function")for(t=u.call(t),l=0;!(o=t.next()).done;)o=o.value,u=r+Nu(o,l++),s+=_a(o,e,n,u,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function qs(t,e,n){if(t==null)return t;var r=[],i=0;return _a(t,r,"","",function(o){return e.call(n,o,i++)}),r}function AE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},wa={transition:null},CE={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:wa,ReactCurrentOwner:eh};function Lv(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:qs,forEach:function(t,e,n){qs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qs(t,function(){e++}),e},toArray:function(t){return qs(t,function(e){return e})||[]},only:function(t){if(!th(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=Fi;te.Fragment=mE;te.Profiler=gE;te.PureComponent=Jf;te.StrictMode=pE;te.Suspense=wE;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CE;te.act=Lv;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=kv({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=eh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Rv.call(e,u)&&!Nv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ds,type:t.type,key:i,ref:o,props:r,_owner:s}};te.createContext=function(t){return t={$$typeof:yE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vE,_context:t},t.Consumer=t};te.createElement=Dv;te.createFactory=function(t){var e=Dv.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:_E,render:t}};te.isValidElement=th;te.lazy=function(t){return{$$typeof:SE,_payload:{_status:-1,_result:t},_init:AE}};te.memo=function(t,e){return{$$typeof:EE,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=wa.transition;wa.transition={};try{t()}finally{wa.transition=e}};te.unstable_act=Lv;te.useCallback=function(t,e){return ut.current.useCallback(t,e)};te.useContext=function(t){return ut.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};te.useEffect=function(t,e){return ut.current.useEffect(t,e)};te.useId=function(){return ut.current.useId()};te.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return ut.current.useMemo(t,e)};te.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};te.useRef=function(t){return ut.current.useRef(t)};te.useState=function(t){return ut.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return ut.current.useTransition()};te.version="18.3.1";Av.exports=te;var L=Av.exports;const nh=hE(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kE=L,PE=Symbol.for("react.element"),bE=Symbol.for("react.fragment"),RE=Object.prototype.hasOwnProperty,NE=kE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DE={key:!0,ref:!0,__self:!0,__source:!0};function Vv(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)RE.call(e,r)&&!DE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:PE,type:t,key:o,ref:s,props:i,_owner:NE.current}}Cl.Fragment=bE;Cl.jsx=Vv;Cl.jsxs=Vv;xv.exports=Cl;var O=xv.exports,Ov={exports:{}},It={},Fv={exports:{}},Mv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Y){var ee=B.length;B.push(Y);e:for(;0<ee;){var _e=ee-1>>>1,ce=B[_e];if(0<i(ce,Y))B[_e]=Y,B[ee]=ce,ee=_e;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Y=B[0],ee=B.pop();if(ee!==Y){B[0]=ee;e:for(var _e=0,ce=B.length,Ce=ce>>>1;_e<Ce;){var an=2*(_e+1)-1,ln=B[an],un=an+1,cn=B[un];if(0>i(ln,ee))un<ce&&0>i(cn,ln)?(B[_e]=cn,B[un]=ee,_e=un):(B[_e]=ln,B[an]=ee,_e=an);else if(un<ce&&0>i(cn,ee))B[_e]=cn,B[un]=ee,_e=un;else break e}}return Y}function i(B,Y){var ee=B.sortIndex-Y.sortIndex;return ee!==0?ee:B.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var u=[],c=[],d=1,m=null,p=3,w=!1,C=!1,k=!1,R=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(B){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=B)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function N(B){if(k=!1,T(B),!C)if(n(u)!==null)C=!0,J(F);else{var Y=n(c);Y!==null&&Wt(N,Y.startTime-B)}}function F(B,Y){C=!1,k&&(k=!1,_(v),v=-1),w=!0;var ee=p;try{for(T(Y),m=n(u);m!==null&&(!(m.expirationTime>Y)||B&&!A());){var _e=m.callback;if(typeof _e=="function"){m.callback=null,p=m.priorityLevel;var ce=_e(m.expirationTime<=Y);Y=t.unstable_now(),typeof ce=="function"?m.callback=ce:m===n(u)&&r(u),T(Y)}else r(u);m=n(u)}if(m!==null)var Ce=!0;else{var an=n(c);an!==null&&Wt(N,an.startTime-Y),Ce=!1}return Ce}finally{m=null,p=ee,w=!1}}var j=!1,S=null,v=-1,E=5,I=-1;function A(){return!(t.unstable_now()-I<E)}function P(){if(S!==null){var B=t.unstable_now();I=B;var Y=!0;try{Y=S(!0,B)}finally{Y?x():(j=!1,S=null)}}else j=!1}var x;if(typeof y=="function")x=function(){y(P)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,Ht=ft.port2;ft.port1.onmessage=P,x=function(){Ht.postMessage(null)}}else x=function(){R(P,0)};function J(B){S=B,j||(j=!0,x())}function Wt(B,Y){v=R(function(){B(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){C||w||(C=!0,J(F))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(p){case 1:case 2:case 3:var Y=3;break;default:Y=p}var ee=p;p=Y;try{return B()}finally{p=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=p;p=B;try{return Y()}finally{p=ee}},t.unstable_scheduleCallback=function(B,Y,ee){var _e=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?_e+ee:_e):ee=_e,B){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=ee+ce,B={id:d++,callback:Y,priorityLevel:B,startTime:ee,expirationTime:ce,sortIndex:-1},ee>_e?(B.sortIndex=ee,e(c,B),n(u)===null&&B===n(c)&&(k?(_(v),v=-1):k=!0,Wt(N,ee-_e))):(B.sortIndex=ce,e(u,B),C||w||(C=!0,J(F))),B},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(B){var Y=p;return function(){var ee=p;p=Y;try{return B.apply(this,arguments)}finally{p=ee}}}})(Mv);Fv.exports=Mv;var LE=Fv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VE=L,Tt=LE;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zv=new Set,$o={};function Mr(t,e){Ei(t,e),Ei(t+"Capture",e)}function Ei(t,e){for($o[t]=e,t=0;t<e.length;t++)zv.add(e[t])}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wc=Object.prototype.hasOwnProperty,OE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Om={},Fm={};function FE(t){return wc.call(Fm,t)?!0:wc.call(Om,t)?!1:OE.test(t)?Fm[t]=!0:(Om[t]=!0,!1)}function ME(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zE(t,e,n,r){if(e===null||typeof e>"u"||ME(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ct(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){We[t]=new ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];We[e]=new ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){We[t]=new ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){We[t]=new ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){We[t]=new ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){We[t]=new ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){We[t]=new ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){We[t]=new ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){We[t]=new ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var rh=/[\-:]([a-z])/g;function ih(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(rh,ih);We[e]=new ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(rh,ih);We[e]=new ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(rh,ih);We[e]=new ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){We[t]=new ct(t,1,!1,t.toLowerCase(),null,!1,!1)});We.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){We[t]=new ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function oh(t,e,n,r){var i=We.hasOwnProperty(e)?We[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zE(e,n,i,r)&&(n=null),r||i===null?FE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Cn=VE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ks=Symbol.for("react.element"),Jr=Symbol.for("react.portal"),Zr=Symbol.for("react.fragment"),sh=Symbol.for("react.strict_mode"),Ec=Symbol.for("react.profiler"),jv=Symbol.for("react.provider"),$v=Symbol.for("react.context"),ah=Symbol.for("react.forward_ref"),Sc=Symbol.for("react.suspense"),Tc=Symbol.for("react.suspense_list"),lh=Symbol.for("react.memo"),Ln=Symbol.for("react.lazy"),Uv=Symbol.for("react.offscreen"),Mm=Symbol.iterator;function so(t){return t===null||typeof t!="object"?null:(t=Mm&&t[Mm]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,Du;function go(t){if(Du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Du=e&&e[1]||""}return`
`+Du+t}var Lu=!1;function Vu(t,e){if(!t||Lu)return"";Lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var u=`
`+i[s].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=s&&0<=l);break}}}finally{Lu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?go(t):""}function jE(t){switch(t.tag){case 5:return go(t.type);case 16:return go("Lazy");case 13:return go("Suspense");case 19:return go("SuspenseList");case 0:case 2:case 15:return t=Vu(t.type,!1),t;case 11:return t=Vu(t.type.render,!1),t;case 1:return t=Vu(t.type,!0),t;default:return""}}function Ic(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zr:return"Fragment";case Jr:return"Portal";case Ec:return"Profiler";case sh:return"StrictMode";case Sc:return"Suspense";case Tc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $v:return(t.displayName||"Context")+".Consumer";case jv:return(t._context.displayName||"Context")+".Provider";case ah:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lh:return e=t.displayName||null,e!==null?e:Ic(t.type)||"Memo";case Ln:e=t._payload,t=t._init;try{return Ic(t(e))}catch{}}return null}function $E(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ic(e);case 8:return e===sh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function UE(t){var e=Bv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Gs(t){t._valueTracker||(t._valueTracker=UE(t))}function Hv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Bv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ua(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xc(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=er(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Wv(t,e){e=e.checked,e!=null&&oh(t,"checked",e,!1)}function Ac(t,e){Wv(t,e);var n=er(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cc(t,e.type,er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cc(t,e,n){(e!=="number"||Ua(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var vo=Array.isArray;function fi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+er(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function kc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $m(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(vo(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:er(n)}}function qv(t,e){var n=er(e.value),r=er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Um(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Kv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Kv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qs,Gv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qs=Qs||document.createElement("div"),Qs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Uo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},BE=["Webkit","ms","Moz","O"];Object.keys(xo).forEach(function(t){BE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),xo[e]=xo[t]})});function Qv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||xo.hasOwnProperty(t)&&xo[t]?(""+e).trim():e+"px"}function Yv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var HE=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bc(t,e){if(e){if(HE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function Rc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nc=null;function uh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dc=null,hi=null,di=null;function Bm(t){if(t=gs(t)){if(typeof Dc!="function")throw Error(M(280));var e=t.stateNode;e&&(e=Nl(e),Dc(t.stateNode,t.type,e))}}function Xv(t){hi?di?di.push(t):di=[t]:hi=t}function Jv(){if(hi){var t=hi,e=di;if(di=hi=null,Bm(t),e)for(t=0;t<e.length;t++)Bm(e[t])}}function Zv(t,e){return t(e)}function ey(){}var Ou=!1;function ty(t,e,n){if(Ou)return t(e,n);Ou=!0;try{return Zv(t,e,n)}finally{Ou=!1,(hi!==null||di!==null)&&(ey(),Jv())}}function Bo(t,e){var n=t.stateNode;if(n===null)return null;var r=Nl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var Lc=!1;if(_n)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){Lc=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{Lc=!1}function WE(t,e,n,r,i,o,s,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ao=!1,Ba=null,Ha=!1,Vc=null,qE={onError:function(t){Ao=!0,Ba=t}};function KE(t,e,n,r,i,o,s,l,u){Ao=!1,Ba=null,WE.apply(qE,arguments)}function GE(t,e,n,r,i,o,s,l,u){if(KE.apply(this,arguments),Ao){if(Ao){var c=Ba;Ao=!1,Ba=null}else throw Error(M(198));Ha||(Ha=!0,Vc=c)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ny(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hm(t){if(zr(t)!==t)throw Error(M(188))}function QE(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Hm(i),t;if(o===r)return Hm(i),e;o=o.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function ry(t){return t=QE(t),t!==null?iy(t):null}function iy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=iy(t);if(e!==null)return e;t=t.sibling}return null}var oy=Tt.unstable_scheduleCallback,Wm=Tt.unstable_cancelCallback,YE=Tt.unstable_shouldYield,XE=Tt.unstable_requestPaint,Pe=Tt.unstable_now,JE=Tt.unstable_getCurrentPriorityLevel,ch=Tt.unstable_ImmediatePriority,sy=Tt.unstable_UserBlockingPriority,Wa=Tt.unstable_NormalPriority,ZE=Tt.unstable_LowPriority,ay=Tt.unstable_IdlePriority,kl=null,Xt=null;function eS(t){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(kl,t,void 0,(t.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:rS,tS=Math.log,nS=Math.LN2;function rS(t){return t>>>=0,t===0?32:31-(tS(t)/nS|0)|0}var Ys=64,Xs=4194304;function yo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=yo(l):(o&=s,o!==0&&(r=yo(o)))}else s=n&~i,s!==0?r=yo(s):o!==0&&(r=yo(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-jt(e),i=1<<n,r|=t[n],e&=~i;return r}function iS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-jt(o),l=1<<s,u=i[s];u===-1?(!(l&n)||l&r)&&(i[s]=iS(l,e)):u<=e&&(t.expiredLanes|=l),o&=~l}}function Oc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ly(){var t=Ys;return Ys<<=1,!(Ys&4194240)&&(Ys=64),t}function Fu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ms(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jt(e),t[e]=n}function sS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-jt(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function fh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function uy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var cy,hh,fy,hy,dy,Fc=!1,Js=[],Un=null,Bn=null,Hn=null,Ho=new Map,Wo=new Map,On=[],aS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qm(t,e){switch(t){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":Hn=null;break;case"pointerover":case"pointerout":Ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(e.pointerId)}}function lo(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=gs(e),e!==null&&hh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function lS(t,e,n,r,i){switch(e){case"focusin":return Un=lo(Un,t,e,n,r,i),!0;case"dragenter":return Bn=lo(Bn,t,e,n,r,i),!0;case"mouseover":return Hn=lo(Hn,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ho.set(o,lo(Ho.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Wo.set(o,lo(Wo.get(o)||null,t,e,n,r,i)),!0}return!1}function my(t){var e=Er(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=ny(n),e!==null){t.blockedOn=e,dy(t.priority,function(){fy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ea(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Nc=r,n.target.dispatchEvent(r),Nc=null}else return e=gs(n),e!==null&&hh(e),t.blockedOn=n,!1;e.shift()}return!0}function Km(t,e,n){Ea(t)&&n.delete(e)}function uS(){Fc=!1,Un!==null&&Ea(Un)&&(Un=null),Bn!==null&&Ea(Bn)&&(Bn=null),Hn!==null&&Ea(Hn)&&(Hn=null),Ho.forEach(Km),Wo.forEach(Km)}function uo(t,e){t.blockedOn===e&&(t.blockedOn=null,Fc||(Fc=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,uS)))}function qo(t){function e(i){return uo(i,t)}if(0<Js.length){uo(Js[0],t);for(var n=1;n<Js.length;n++){var r=Js[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Un!==null&&uo(Un,t),Bn!==null&&uo(Bn,t),Hn!==null&&uo(Hn,t),Ho.forEach(e),Wo.forEach(e),n=0;n<On.length;n++)r=On[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<On.length&&(n=On[0],n.blockedOn===null);)my(n),n.blockedOn===null&&On.shift()}var mi=Cn.ReactCurrentBatchConfig,Ka=!0;function cS(t,e,n,r){var i=ue,o=mi.transition;mi.transition=null;try{ue=1,dh(t,e,n,r)}finally{ue=i,mi.transition=o}}function fS(t,e,n,r){var i=ue,o=mi.transition;mi.transition=null;try{ue=4,dh(t,e,n,r)}finally{ue=i,mi.transition=o}}function dh(t,e,n,r){if(Ka){var i=Mc(t,e,n,r);if(i===null)Ku(t,e,r,Ga,n),qm(t,r);else if(lS(i,t,e,n,r))r.stopPropagation();else if(qm(t,r),e&4&&-1<aS.indexOf(t)){for(;i!==null;){var o=gs(i);if(o!==null&&cy(o),o=Mc(t,e,n,r),o===null&&Ku(t,e,r,Ga,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ku(t,e,r,null,n)}}var Ga=null;function Mc(t,e,n,r){if(Ga=null,t=uh(r),t=Er(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ny(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ga=t,null}function py(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(JE()){case ch:return 1;case sy:return 4;case Wa:case ZE:return 16;case ay:return 536870912;default:return 16}default:return 16}}var Mn=null,mh=null,Sa=null;function gy(){if(Sa)return Sa;var t,e=mh,n=e.length,r,i="value"in Mn?Mn.value:Mn.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Sa=i.slice(t,1<r?1-r:void 0)}function Ta(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zs(){return!0}function Gm(){return!1}function xt(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Zs:Gm,this.isPropagationStopped=Gm,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zs)},persist:function(){},isPersistent:Zs}),e}var Mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ph=xt(Mi),ps=Ie({},Mi,{view:0,detail:0}),hS=xt(ps),Mu,zu,co,Pl=Ie({},ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==co&&(co&&t.type==="mousemove"?(Mu=t.screenX-co.screenX,zu=t.screenY-co.screenY):zu=Mu=0,co=t),Mu)},movementY:function(t){return"movementY"in t?t.movementY:zu}}),Qm=xt(Pl),dS=Ie({},Pl,{dataTransfer:0}),mS=xt(dS),pS=Ie({},ps,{relatedTarget:0}),ju=xt(pS),gS=Ie({},Mi,{animationName:0,elapsedTime:0,pseudoElement:0}),vS=xt(gS),yS=Ie({},Mi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_S=xt(yS),wS=Ie({},Mi,{data:0}),Ym=xt(wS),ES={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function IS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=TS[t])?!!e[t]:!1}function gh(){return IS}var xS=Ie({},ps,{key:function(t){if(t.key){var e=ES[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ta(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?SS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gh,charCode:function(t){return t.type==="keypress"?Ta(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ta(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),AS=xt(xS),CS=Ie({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xm=xt(CS),kS=Ie({},ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gh}),PS=xt(kS),bS=Ie({},Mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),RS=xt(bS),NS=Ie({},Pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),DS=xt(NS),LS=[9,13,27,32],vh=_n&&"CompositionEvent"in window,Co=null;_n&&"documentMode"in document&&(Co=document.documentMode);var VS=_n&&"TextEvent"in window&&!Co,vy=_n&&(!vh||Co&&8<Co&&11>=Co),Jm=" ",Zm=!1;function yy(t,e){switch(t){case"keyup":return LS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _y(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ei=!1;function OS(t,e){switch(t){case"compositionend":return _y(e);case"keypress":return e.which!==32?null:(Zm=!0,Jm);case"textInput":return t=e.data,t===Jm&&Zm?null:t;default:return null}}function FS(t,e){if(ei)return t==="compositionend"||!vh&&yy(t,e)?(t=gy(),Sa=mh=Mn=null,ei=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vy&&e.locale!=="ko"?null:e.data;default:return null}}var MS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!MS[t.type]:e==="textarea"}function wy(t,e,n,r){Xv(r),e=Qa(e,"onChange"),0<e.length&&(n=new ph("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ko=null,Ko=null;function zS(t){Ry(t,0)}function bl(t){var e=ri(t);if(Hv(e))return t}function jS(t,e){if(t==="change")return e}var Ey=!1;if(_n){var $u;if(_n){var Uu="oninput"in document;if(!Uu){var tp=document.createElement("div");tp.setAttribute("oninput","return;"),Uu=typeof tp.oninput=="function"}$u=Uu}else $u=!1;Ey=$u&&(!document.documentMode||9<document.documentMode)}function np(){ko&&(ko.detachEvent("onpropertychange",Sy),Ko=ko=null)}function Sy(t){if(t.propertyName==="value"&&bl(Ko)){var e=[];wy(e,Ko,t,uh(t)),ty(zS,e)}}function $S(t,e,n){t==="focusin"?(np(),ko=e,Ko=n,ko.attachEvent("onpropertychange",Sy)):t==="focusout"&&np()}function US(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bl(Ko)}function BS(t,e){if(t==="click")return bl(e)}function HS(t,e){if(t==="input"||t==="change")return bl(e)}function WS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ut=typeof Object.is=="function"?Object.is:WS;function Go(t,e){if(Ut(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wc.call(e,i)||!Ut(t[i],e[i]))return!1}return!0}function rp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ip(t,e){var n=rp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rp(n)}}function Ty(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ty(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Iy(){for(var t=window,e=Ua();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ua(t.document)}return e}function yh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qS(t){var e=Iy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ty(n.ownerDocument.documentElement,n)){if(r!==null&&yh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=ip(n,o);var s=ip(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var KS=_n&&"documentMode"in document&&11>=document.documentMode,ti=null,zc=null,Po=null,jc=!1;function op(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jc||ti==null||ti!==Ua(r)||(r=ti,"selectionStart"in r&&yh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Po&&Go(Po,r)||(Po=r,r=Qa(zc,"onSelect"),0<r.length&&(e=new ph("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ti)))}function ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ni={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},Bu={},xy={};_n&&(xy=document.createElement("div").style,"AnimationEvent"in window||(delete ni.animationend.animation,delete ni.animationiteration.animation,delete ni.animationstart.animation),"TransitionEvent"in window||delete ni.transitionend.transition);function Rl(t){if(Bu[t])return Bu[t];if(!ni[t])return t;var e=ni[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in xy)return Bu[t]=e[n];return t}var Ay=Rl("animationend"),Cy=Rl("animationiteration"),ky=Rl("animationstart"),Py=Rl("transitionend"),by=new Map,sp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(t,e){by.set(t,e),Mr(e,[t])}for(var Hu=0;Hu<sp.length;Hu++){var Wu=sp[Hu],GS=Wu.toLowerCase(),QS=Wu[0].toUpperCase()+Wu.slice(1);fr(GS,"on"+QS)}fr(Ay,"onAnimationEnd");fr(Cy,"onAnimationIteration");fr(ky,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(Py,"onTransitionEnd");Ei("onMouseEnter",["mouseout","mouseover"]);Ei("onMouseLeave",["mouseout","mouseover"]);Ei("onPointerEnter",["pointerout","pointerover"]);Ei("onPointerLeave",["pointerout","pointerover"]);Mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YS=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function ap(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,GE(r,e,void 0,t),t.currentTarget=null}function Ry(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var l=r[s],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;ap(i,l,c),o=u}else for(s=0;s<r.length;s++){if(l=r[s],u=l.instance,c=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;ap(i,l,c),o=u}}}if(Ha)throw t=Vc,Ha=!1,Vc=null,t}function me(t,e){var n=e[Wc];n===void 0&&(n=e[Wc]=new Set);var r=t+"__bubble";n.has(r)||(Ny(e,t,2,!1),n.add(r))}function qu(t,e,n){var r=0;e&&(r|=4),Ny(n,t,r,e)}var ta="_reactListening"+Math.random().toString(36).slice(2);function Qo(t){if(!t[ta]){t[ta]=!0,zv.forEach(function(n){n!=="selectionchange"&&(YS.has(n)||qu(n,!1,t),qu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ta]||(e[ta]=!0,qu("selectionchange",!1,e))}}function Ny(t,e,n,r){switch(py(e)){case 1:var i=cS;break;case 4:i=fS;break;default:i=dh}n=i.bind(null,e,n,t),i=void 0,!Lc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ku(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Er(l),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}l=l.parentNode}}r=r.return}ty(function(){var c=o,d=uh(n),m=[];e:{var p=by.get(t);if(p!==void 0){var w=ph,C=t;switch(t){case"keypress":if(Ta(n)===0)break e;case"keydown":case"keyup":w=AS;break;case"focusin":C="focus",w=ju;break;case"focusout":C="blur",w=ju;break;case"beforeblur":case"afterblur":w=ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=mS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=PS;break;case Ay:case Cy:case ky:w=vS;break;case Py:w=RS;break;case"scroll":w=hS;break;case"wheel":w=DS;break;case"copy":case"cut":case"paste":w=_S;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Xm}var k=(e&4)!==0,R=!k&&t==="scroll",_=k?p!==null?p+"Capture":null:p;k=[];for(var y=c,T;y!==null;){T=y;var N=T.stateNode;if(T.tag===5&&N!==null&&(T=N,_!==null&&(N=Bo(y,_),N!=null&&k.push(Yo(y,N,T)))),R)break;y=y.return}0<k.length&&(p=new w(p,C,null,n,d),m.push({event:p,listeners:k}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",p&&n!==Nc&&(C=n.relatedTarget||n.fromElement)&&(Er(C)||C[wn]))break e;if((w||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,w?(C=n.relatedTarget||n.toElement,w=c,C=C?Er(C):null,C!==null&&(R=zr(C),C!==R||C.tag!==5&&C.tag!==6)&&(C=null)):(w=null,C=c),w!==C)){if(k=Qm,N="onMouseLeave",_="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(k=Xm,N="onPointerLeave",_="onPointerEnter",y="pointer"),R=w==null?p:ri(w),T=C==null?p:ri(C),p=new k(N,y+"leave",w,n,d),p.target=R,p.relatedTarget=T,N=null,Er(d)===c&&(k=new k(_,y+"enter",C,n,d),k.target=T,k.relatedTarget=R,N=k),R=N,w&&C)t:{for(k=w,_=C,y=0,T=k;T;T=qr(T))y++;for(T=0,N=_;N;N=qr(N))T++;for(;0<y-T;)k=qr(k),y--;for(;0<T-y;)_=qr(_),T--;for(;y--;){if(k===_||_!==null&&k===_.alternate)break t;k=qr(k),_=qr(_)}k=null}else k=null;w!==null&&lp(m,p,w,k,!1),C!==null&&R!==null&&lp(m,R,C,k,!0)}}e:{if(p=c?ri(c):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var F=jS;else if(ep(p))if(Ey)F=HS;else{F=US;var j=$S}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(F=BS);if(F&&(F=F(t,c))){wy(m,F,n,d);break e}j&&j(t,p,c),t==="focusout"&&(j=p._wrapperState)&&j.controlled&&p.type==="number"&&Cc(p,"number",p.value)}switch(j=c?ri(c):window,t){case"focusin":(ep(j)||j.contentEditable==="true")&&(ti=j,zc=c,Po=null);break;case"focusout":Po=zc=ti=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,op(m,n,d);break;case"selectionchange":if(KS)break;case"keydown":case"keyup":op(m,n,d)}var S;if(vh)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else ei?yy(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(vy&&n.locale!=="ko"&&(ei||v!=="onCompositionStart"?v==="onCompositionEnd"&&ei&&(S=gy()):(Mn=d,mh="value"in Mn?Mn.value:Mn.textContent,ei=!0)),j=Qa(c,v),0<j.length&&(v=new Ym(v,t,null,n,d),m.push({event:v,listeners:j}),S?v.data=S:(S=_y(n),S!==null&&(v.data=S)))),(S=VS?OS(t,n):FS(t,n))&&(c=Qa(c,"onBeforeInput"),0<c.length&&(d=new Ym("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:c}),d.data=S))}Ry(m,e)})}function Yo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Qa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Bo(t,n),o!=null&&r.unshift(Yo(t,o,i)),o=Bo(t,e),o!=null&&r.push(Yo(t,o,i))),t=t.return}return r}function qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lp(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Bo(n,o),u!=null&&s.unshift(Yo(n,u,l))):i||(u=Bo(n,o),u!=null&&s.push(Yo(n,u,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var XS=/\r\n?/g,JS=/\u0000|\uFFFD/g;function up(t){return(typeof t=="string"?t:""+t).replace(XS,`
`).replace(JS,"")}function na(t,e,n){if(e=up(e),up(t)!==e&&n)throw Error(M(425))}function Ya(){}var $c=null,Uc=null;function Bc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hc=typeof setTimeout=="function"?setTimeout:void 0,ZS=typeof clearTimeout=="function"?clearTimeout:void 0,cp=typeof Promise=="function"?Promise:void 0,e2=typeof queueMicrotask=="function"?queueMicrotask:typeof cp<"u"?function(t){return cp.resolve(null).then(t).catch(t2)}:Hc;function t2(t){setTimeout(function(){throw t})}function Gu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),qo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qo(e)}function Wn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zi=Math.random().toString(36).slice(2),Gt="__reactFiber$"+zi,Xo="__reactProps$"+zi,wn="__reactContainer$"+zi,Wc="__reactEvents$"+zi,n2="__reactListeners$"+zi,r2="__reactHandles$"+zi;function Er(t){var e=t[Gt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wn]||n[Gt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fp(t);t!==null;){if(n=t[Gt])return n;t=fp(t)}return e}t=n,n=t.parentNode}return null}function gs(t){return t=t[Gt]||t[wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ri(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function Nl(t){return t[Xo]||null}var qc=[],ii=-1;function hr(t){return{current:t}}function pe(t){0>ii||(t.current=qc[ii],qc[ii]=null,ii--)}function he(t,e){ii++,qc[ii]=t.current,t.current=e}var tr={},rt=hr(tr),pt=hr(!1),br=tr;function Si(t,e){var n=t.type.contextTypes;if(!n)return tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gt(t){return t=t.childContextTypes,t!=null}function Xa(){pe(pt),pe(rt)}function hp(t,e,n){if(rt.current!==tr)throw Error(M(168));he(rt,e),he(pt,n)}function Dy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,$E(t)||"Unknown",i));return Ie({},n,r)}function Ja(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,br=rt.current,he(rt,t),he(pt,pt.current),!0}function dp(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=Dy(t,e,br),r.__reactInternalMemoizedMergedChildContext=t,pe(pt),pe(rt),he(rt,t)):pe(pt),he(pt,n)}var mn=null,Dl=!1,Qu=!1;function Ly(t){mn===null?mn=[t]:mn.push(t)}function i2(t){Dl=!0,Ly(t)}function dr(){if(!Qu&&mn!==null){Qu=!0;var t=0,e=ue;try{var n=mn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mn=null,Dl=!1}catch(i){throw mn!==null&&(mn=mn.slice(t+1)),oy(ch,dr),i}finally{ue=e,Qu=!1}}return null}var oi=[],si=0,Za=null,el=0,Ct=[],kt=0,Rr=null,pn=1,gn="";function yr(t,e){oi[si++]=el,oi[si++]=Za,Za=t,el=e}function Vy(t,e,n){Ct[kt++]=pn,Ct[kt++]=gn,Ct[kt++]=Rr,Rr=t;var r=pn;t=gn;var i=32-jt(r)-1;r&=~(1<<i),n+=1;var o=32-jt(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,pn=1<<32-jt(e)+i|n<<i|r,gn=o+t}else pn=1<<o|n<<i|r,gn=t}function _h(t){t.return!==null&&(yr(t,1),Vy(t,1,0))}function wh(t){for(;t===Za;)Za=oi[--si],oi[si]=null,el=oi[--si],oi[si]=null;for(;t===Rr;)Rr=Ct[--kt],Ct[kt]=null,gn=Ct[--kt],Ct[kt]=null,pn=Ct[--kt],Ct[kt]=null}var St=null,Et=null,ve=!1,Mt=null;function Oy(t,e){var n=Pt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,St=t,Et=Wn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,St=t,Et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Rr!==null?{id:pn,overflow:gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,St=t,Et=null,!0):!1;default:return!1}}function Kc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gc(t){if(ve){var e=Et;if(e){var n=e;if(!mp(t,e)){if(Kc(t))throw Error(M(418));e=Wn(n.nextSibling);var r=St;e&&mp(t,e)?Oy(r,n):(t.flags=t.flags&-4097|2,ve=!1,St=t)}}else{if(Kc(t))throw Error(M(418));t.flags=t.flags&-4097|2,ve=!1,St=t}}}function pp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;St=t}function ra(t){if(t!==St)return!1;if(!ve)return pp(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bc(t.type,t.memoizedProps)),e&&(e=Et)){if(Kc(t))throw Fy(),Error(M(418));for(;e;)Oy(t,e),e=Wn(e.nextSibling)}if(pp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Et=Wn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Et=null}}else Et=St?Wn(t.stateNode.nextSibling):null;return!0}function Fy(){for(var t=Et;t;)t=Wn(t.nextSibling)}function Ti(){Et=St=null,ve=!1}function Eh(t){Mt===null?Mt=[t]:Mt.push(t)}var o2=Cn.ReactCurrentBatchConfig;function fo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function ia(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gp(t){var e=t._init;return e(t._payload)}function My(t){function e(_,y){if(t){var T=_.deletions;T===null?(_.deletions=[y],_.flags|=16):T.push(y)}}function n(_,y){if(!t)return null;for(;y!==null;)e(_,y),y=y.sibling;return null}function r(_,y){for(_=new Map;y!==null;)y.key!==null?_.set(y.key,y):_.set(y.index,y),y=y.sibling;return _}function i(_,y){return _=Qn(_,y),_.index=0,_.sibling=null,_}function o(_,y,T){return _.index=T,t?(T=_.alternate,T!==null?(T=T.index,T<y?(_.flags|=2,y):T):(_.flags|=2,y)):(_.flags|=1048576,y)}function s(_){return t&&_.alternate===null&&(_.flags|=2),_}function l(_,y,T,N){return y===null||y.tag!==6?(y=nc(T,_.mode,N),y.return=_,y):(y=i(y,T),y.return=_,y)}function u(_,y,T,N){var F=T.type;return F===Zr?d(_,y,T.props.children,N,T.key):y!==null&&(y.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ln&&gp(F)===y.type)?(N=i(y,T.props),N.ref=fo(_,y,T),N.return=_,N):(N=ba(T.type,T.key,T.props,null,_.mode,N),N.ref=fo(_,y,T),N.return=_,N)}function c(_,y,T,N){return y===null||y.tag!==4||y.stateNode.containerInfo!==T.containerInfo||y.stateNode.implementation!==T.implementation?(y=rc(T,_.mode,N),y.return=_,y):(y=i(y,T.children||[]),y.return=_,y)}function d(_,y,T,N,F){return y===null||y.tag!==7?(y=Cr(T,_.mode,N,F),y.return=_,y):(y=i(y,T),y.return=_,y)}function m(_,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return y=nc(""+y,_.mode,T),y.return=_,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ks:return T=ba(y.type,y.key,y.props,null,_.mode,T),T.ref=fo(_,null,y),T.return=_,T;case Jr:return y=rc(y,_.mode,T),y.return=_,y;case Ln:var N=y._init;return m(_,N(y._payload),T)}if(vo(y)||so(y))return y=Cr(y,_.mode,T,null),y.return=_,y;ia(_,y)}return null}function p(_,y,T,N){var F=y!==null?y.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return F!==null?null:l(_,y,""+T,N);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ks:return T.key===F?u(_,y,T,N):null;case Jr:return T.key===F?c(_,y,T,N):null;case Ln:return F=T._init,p(_,y,F(T._payload),N)}if(vo(T)||so(T))return F!==null?null:d(_,y,T,N,null);ia(_,T)}return null}function w(_,y,T,N,F){if(typeof N=="string"&&N!==""||typeof N=="number")return _=_.get(T)||null,l(y,_,""+N,F);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ks:return _=_.get(N.key===null?T:N.key)||null,u(y,_,N,F);case Jr:return _=_.get(N.key===null?T:N.key)||null,c(y,_,N,F);case Ln:var j=N._init;return w(_,y,T,j(N._payload),F)}if(vo(N)||so(N))return _=_.get(T)||null,d(y,_,N,F,null);ia(y,N)}return null}function C(_,y,T,N){for(var F=null,j=null,S=y,v=y=0,E=null;S!==null&&v<T.length;v++){S.index>v?(E=S,S=null):E=S.sibling;var I=p(_,S,T[v],N);if(I===null){S===null&&(S=E);break}t&&S&&I.alternate===null&&e(_,S),y=o(I,y,v),j===null?F=I:j.sibling=I,j=I,S=E}if(v===T.length)return n(_,S),ve&&yr(_,v),F;if(S===null){for(;v<T.length;v++)S=m(_,T[v],N),S!==null&&(y=o(S,y,v),j===null?F=S:j.sibling=S,j=S);return ve&&yr(_,v),F}for(S=r(_,S);v<T.length;v++)E=w(S,_,v,T[v],N),E!==null&&(t&&E.alternate!==null&&S.delete(E.key===null?v:E.key),y=o(E,y,v),j===null?F=E:j.sibling=E,j=E);return t&&S.forEach(function(A){return e(_,A)}),ve&&yr(_,v),F}function k(_,y,T,N){var F=so(T);if(typeof F!="function")throw Error(M(150));if(T=F.call(T),T==null)throw Error(M(151));for(var j=F=null,S=y,v=y=0,E=null,I=T.next();S!==null&&!I.done;v++,I=T.next()){S.index>v?(E=S,S=null):E=S.sibling;var A=p(_,S,I.value,N);if(A===null){S===null&&(S=E);break}t&&S&&A.alternate===null&&e(_,S),y=o(A,y,v),j===null?F=A:j.sibling=A,j=A,S=E}if(I.done)return n(_,S),ve&&yr(_,v),F;if(S===null){for(;!I.done;v++,I=T.next())I=m(_,I.value,N),I!==null&&(y=o(I,y,v),j===null?F=I:j.sibling=I,j=I);return ve&&yr(_,v),F}for(S=r(_,S);!I.done;v++,I=T.next())I=w(S,_,v,I.value,N),I!==null&&(t&&I.alternate!==null&&S.delete(I.key===null?v:I.key),y=o(I,y,v),j===null?F=I:j.sibling=I,j=I);return t&&S.forEach(function(P){return e(_,P)}),ve&&yr(_,v),F}function R(_,y,T,N){if(typeof T=="object"&&T!==null&&T.type===Zr&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Ks:e:{for(var F=T.key,j=y;j!==null;){if(j.key===F){if(F=T.type,F===Zr){if(j.tag===7){n(_,j.sibling),y=i(j,T.props.children),y.return=_,_=y;break e}}else if(j.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ln&&gp(F)===j.type){n(_,j.sibling),y=i(j,T.props),y.ref=fo(_,j,T),y.return=_,_=y;break e}n(_,j);break}else e(_,j);j=j.sibling}T.type===Zr?(y=Cr(T.props.children,_.mode,N,T.key),y.return=_,_=y):(N=ba(T.type,T.key,T.props,null,_.mode,N),N.ref=fo(_,y,T),N.return=_,_=N)}return s(_);case Jr:e:{for(j=T.key;y!==null;){if(y.key===j)if(y.tag===4&&y.stateNode.containerInfo===T.containerInfo&&y.stateNode.implementation===T.implementation){n(_,y.sibling),y=i(y,T.children||[]),y.return=_,_=y;break e}else{n(_,y);break}else e(_,y);y=y.sibling}y=rc(T,_.mode,N),y.return=_,_=y}return s(_);case Ln:return j=T._init,R(_,y,j(T._payload),N)}if(vo(T))return C(_,y,T,N);if(so(T))return k(_,y,T,N);ia(_,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,y!==null&&y.tag===6?(n(_,y.sibling),y=i(y,T),y.return=_,_=y):(n(_,y),y=nc(T,_.mode,N),y.return=_,_=y),s(_)):n(_,y)}return R}var Ii=My(!0),zy=My(!1),tl=hr(null),nl=null,ai=null,Sh=null;function Th(){Sh=ai=nl=null}function Ih(t){var e=tl.current;pe(tl),t._currentValue=e}function Qc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function pi(t,e){nl=t,Sh=ai=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mt=!0),t.firstContext=null)}function Rt(t){var e=t._currentValue;if(Sh!==t)if(t={context:t,memoizedValue:e,next:null},ai===null){if(nl===null)throw Error(M(308));ai=t,nl.dependencies={lanes:0,firstContext:t}}else ai=ai.next=t;return e}var Sr=null;function xh(t){Sr===null?Sr=[t]:Sr.push(t)}function jy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,xh(e)):(n.next=i.next,i.next=n),e.interleaved=n,En(t,r)}function En(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vn=!1;function Ah(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $y(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,En(t,n)}return i=r.interleaved,i===null?(e.next=e,xh(r)):(e.next=i.next,i.next=e),r.interleaved=e,En(t,n)}function Ia(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,fh(t,n)}}function vp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function rl(t,e,n,r){var i=t.updateQueue;Vn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;s=0,d=c=u=null,l=o;do{var p=l.lane,w=l.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,k=l;switch(p=e,w=n,k.tag){case 1:if(C=k.payload,typeof C=="function"){m=C.call(w,m,p);break e}m=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=k.payload,p=typeof C=="function"?C.call(w,m,p):C,p==null)break e;m=Ie({},m,p);break e;case 2:Vn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else w={eventTime:w,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=w,u=m):d=d.next=w,s|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Dr|=s,t.lanes=s,t.memoizedState=m}}function yp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var vs={},Jt=hr(vs),Jo=hr(vs),Zo=hr(vs);function Tr(t){if(t===vs)throw Error(M(174));return t}function Ch(t,e){switch(he(Zo,e),he(Jo,t),he(Jt,vs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pc(e,t)}pe(Jt),he(Jt,e)}function xi(){pe(Jt),pe(Jo),pe(Zo)}function Uy(t){Tr(Zo.current);var e=Tr(Jt.current),n=Pc(e,t.type);e!==n&&(he(Jo,t),he(Jt,n))}function kh(t){Jo.current===t&&(pe(Jt),pe(Jo))}var we=hr(0);function il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yu=[];function Ph(){for(var t=0;t<Yu.length;t++)Yu[t]._workInProgressVersionPrimary=null;Yu.length=0}var xa=Cn.ReactCurrentDispatcher,Xu=Cn.ReactCurrentBatchConfig,Nr=0,Ee=null,De=null,ze=null,ol=!1,bo=!1,es=0,s2=0;function Xe(){throw Error(M(321))}function bh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ut(t[n],e[n]))return!1;return!0}function Rh(t,e,n,r,i,o){if(Nr=o,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xa.current=t===null||t.memoizedState===null?c2:f2,t=n(r,i),bo){o=0;do{if(bo=!1,es=0,25<=o)throw Error(M(301));o+=1,ze=De=null,e.updateQueue=null,xa.current=h2,t=n(r,i)}while(bo)}if(xa.current=sl,e=De!==null&&De.next!==null,Nr=0,ze=De=Ee=null,ol=!1,e)throw Error(M(300));return t}function Nh(){var t=es!==0;return es=0,t}function Kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?Ee.memoizedState=ze=t:ze=ze.next=t,ze}function Nt(){if(De===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=ze===null?Ee.memoizedState:ze.next;if(e!==null)ze=e,De=t;else{if(t===null)throw Error(M(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},ze===null?Ee.memoizedState=ze=t:ze=ze.next=t}return ze}function ts(t,e){return typeof e=="function"?e(t):e}function Ju(t){var e=Nt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,u=null,c=o;do{var d=c.lane;if((Nr&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,s=r):u=u.next=m,Ee.lanes|=d,Dr|=d}c=c.next}while(c!==null&&c!==o);u===null?s=r:u.next=l,Ut(r,e.memoizedState)||(mt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Ee.lanes|=o,Dr|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zu(t){var e=Nt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Ut(o,e.memoizedState)||(mt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function By(){}function Hy(t,e){var n=Ee,r=Nt(),i=e(),o=!Ut(r.memoizedState,i);if(o&&(r.memoizedState=i,mt=!0),r=r.queue,Dh(Ky.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,ns(9,qy.bind(null,n,r,i,e),void 0,null),je===null)throw Error(M(349));Nr&30||Wy(n,e,i)}return i}function Wy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function qy(t,e,n,r){e.value=n,e.getSnapshot=r,Gy(e)&&Qy(t)}function Ky(t,e,n){return n(function(){Gy(e)&&Qy(t)})}function Gy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ut(t,n)}catch{return!0}}function Qy(t){var e=En(t,1);e!==null&&$t(e,t,1,-1)}function _p(t){var e=Kt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:t},e.queue=t,t=t.dispatch=u2.bind(null,Ee,t),[e.memoizedState,t]}function ns(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Yy(){return Nt().memoizedState}function Aa(t,e,n,r){var i=Kt();Ee.flags|=t,i.memoizedState=ns(1|e,n,void 0,r===void 0?null:r)}function Ll(t,e,n,r){var i=Nt();r=r===void 0?null:r;var o=void 0;if(De!==null){var s=De.memoizedState;if(o=s.destroy,r!==null&&bh(r,s.deps)){i.memoizedState=ns(e,n,o,r);return}}Ee.flags|=t,i.memoizedState=ns(1|e,n,o,r)}function wp(t,e){return Aa(8390656,8,t,e)}function Dh(t,e){return Ll(2048,8,t,e)}function Xy(t,e){return Ll(4,2,t,e)}function Jy(t,e){return Ll(4,4,t,e)}function Zy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function e0(t,e,n){return n=n!=null?n.concat([t]):null,Ll(4,4,Zy.bind(null,e,t),n)}function Lh(){}function t0(t,e){var n=Nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function n0(t,e){var n=Nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function r0(t,e,n){return Nr&21?(Ut(n,e)||(n=ly(),Ee.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mt=!0),t.memoizedState=n)}function a2(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=Xu.transition;Xu.transition={};try{t(!1),e()}finally{ue=n,Xu.transition=r}}function i0(){return Nt().memoizedState}function l2(t,e,n){var r=Gn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},o0(t))s0(e,n);else if(n=jy(t,e,n,r),n!==null){var i=lt();$t(n,t,r,i),a0(n,e,r)}}function u2(t,e,n){var r=Gn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(o0(t))s0(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Ut(l,s)){var u=e.interleaved;u===null?(i.next=i,xh(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=jy(t,e,i,r),n!==null&&(i=lt(),$t(n,t,r,i),a0(n,e,r))}}function o0(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function s0(t,e){bo=ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function a0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,fh(t,n)}}var sl={readContext:Rt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},c2={readContext:Rt,useCallback:function(t,e){return Kt().memoizedState=[t,e===void 0?null:e],t},useContext:Rt,useEffect:wp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Aa(4194308,4,Zy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Aa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Aa(4,2,t,e)},useMemo:function(t,e){var n=Kt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Kt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=l2.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=Kt();return t={current:t},e.memoizedState=t},useState:_p,useDebugValue:Lh,useDeferredValue:function(t){return Kt().memoizedState=t},useTransition:function(){var t=_p(!1),e=t[0];return t=a2.bind(null,t[1]),Kt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=Kt();if(ve){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),je===null)throw Error(M(349));Nr&30||Wy(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,wp(Ky.bind(null,r,o,t),[t]),r.flags|=2048,ns(9,qy.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Kt(),e=je.identifierPrefix;if(ve){var n=gn,r=pn;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=es++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=s2++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},f2={readContext:Rt,useCallback:t0,useContext:Rt,useEffect:Dh,useImperativeHandle:e0,useInsertionEffect:Xy,useLayoutEffect:Jy,useMemo:n0,useReducer:Ju,useRef:Yy,useState:function(){return Ju(ts)},useDebugValue:Lh,useDeferredValue:function(t){var e=Nt();return r0(e,De.memoizedState,t)},useTransition:function(){var t=Ju(ts)[0],e=Nt().memoizedState;return[t,e]},useMutableSource:By,useSyncExternalStore:Hy,useId:i0,unstable_isNewReconciler:!1},h2={readContext:Rt,useCallback:t0,useContext:Rt,useEffect:Dh,useImperativeHandle:e0,useInsertionEffect:Xy,useLayoutEffect:Jy,useMemo:n0,useReducer:Zu,useRef:Yy,useState:function(){return Zu(ts)},useDebugValue:Lh,useDeferredValue:function(t){var e=Nt();return De===null?e.memoizedState=t:r0(e,De.memoizedState,t)},useTransition:function(){var t=Zu(ts)[0],e=Nt().memoizedState;return[t,e]},useMutableSource:By,useSyncExternalStore:Hy,useId:i0,unstable_isNewReconciler:!1};function Ot(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vl={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=Gn(t),o=vn(r,i);o.payload=e,n!=null&&(o.callback=n),e=qn(t,o,i),e!==null&&($t(e,t,i,r),Ia(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=Gn(t),o=vn(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=qn(t,o,i),e!==null&&($t(e,t,i,r),Ia(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=Gn(t),i=vn(n,r);i.tag=2,e!=null&&(i.callback=e),e=qn(t,i,r),e!==null&&($t(e,t,r,n),Ia(e,t,r))}};function Ep(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Go(n,r)||!Go(i,o):!0}function l0(t,e,n){var r=!1,i=tr,o=e.contextType;return typeof o=="object"&&o!==null?o=Rt(o):(i=gt(e)?br:rt.current,r=e.contextTypes,o=(r=r!=null)?Si(t,i):tr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Sp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Vl.enqueueReplaceState(e,e.state,null)}function Xc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ah(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Rt(o):(o=gt(e)?br:rt.current,i.context=Si(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Yc(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Vl.enqueueReplaceState(i,i.state,null),rl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ai(t,e){try{var n="",r=e;do n+=jE(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Jc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var d2=typeof WeakMap=="function"?WeakMap:Map;function u0(t,e,n){n=vn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ll||(ll=!0,uf=r),Jc(t,e)},n}function c0(t,e,n){n=vn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Jc(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Jc(t,e),typeof r!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Tp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new d2;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=C2.bind(null,t,e,n),e.then(t,t))}function Ip(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vn(-1,1),e.tag=2,qn(n,e,1))),n.lanes|=1),t)}var m2=Cn.ReactCurrentOwner,mt=!1;function st(t,e,n,r){e.child=t===null?zy(e,null,n,r):Ii(e,t.child,n,r)}function Ap(t,e,n,r,i){n=n.render;var o=e.ref;return pi(e,i),r=Rh(t,e,n,r,o,i),n=Nh(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sn(t,e,i)):(ve&&n&&_h(e),e.flags|=1,st(t,e,r,i),e.child)}function Cp(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Uh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,f0(t,e,o,r,i)):(t=ba(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Go,n(s,r)&&t.ref===e.ref)return Sn(t,e,i)}return e.flags|=1,t=Qn(o,r),t.ref=e.ref,t.return=e,e.child=t}function f0(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Go(o,r)&&t.ref===e.ref)if(mt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(mt=!0);else return e.lanes=t.lanes,Sn(t,e,i)}return Zc(t,e,n,r,i)}function h0(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(ui,wt),wt|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(ui,wt),wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,he(ui,wt),wt|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,he(ui,wt),wt|=r;return st(t,e,i,n),e.child}function d0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zc(t,e,n,r,i){var o=gt(n)?br:rt.current;return o=Si(e,o),pi(e,i),n=Rh(t,e,n,r,o,i),r=Nh(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sn(t,e,i)):(ve&&r&&_h(e),e.flags|=1,st(t,e,n,i),e.child)}function kp(t,e,n,r,i){if(gt(n)){var o=!0;Ja(e)}else o=!1;if(pi(e,i),e.stateNode===null)Ca(t,e),l0(e,n,r),Xc(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Rt(c):(c=gt(n)?br:rt.current,c=Si(e,c));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Sp(e,s,r,c),Vn=!1;var p=e.memoizedState;s.state=p,rl(e,r,s,i),u=e.memoizedState,l!==r||p!==u||pt.current||Vn?(typeof d=="function"&&(Yc(e,n,d,r),u=e.memoizedState),(l=Vn||Ep(e,n,l,r,p,u,c))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),s.props=r,s.state=u,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,$y(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Ot(e.type,l),s.props=c,m=e.pendingProps,p=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=Rt(u):(u=gt(n)?br:rt.current,u=Si(e,u));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==m||p!==u)&&Sp(e,s,r,u),Vn=!1,p=e.memoizedState,s.state=p,rl(e,r,s,i);var C=e.memoizedState;l!==m||p!==C||pt.current||Vn?(typeof w=="function"&&(Yc(e,n,w,r),C=e.memoizedState),(c=Vn||Ep(e,n,c,r,p,C,u)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,C,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,C,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),s.props=r,s.state=C,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return ef(t,e,n,r,o,i)}function ef(t,e,n,r,i,o){d0(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&dp(e,n,!1),Sn(t,e,o);r=e.stateNode,m2.current=e;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Ii(e,t.child,null,o),e.child=Ii(e,null,l,o)):st(t,e,l,o),e.memoizedState=r.state,i&&dp(e,n,!0),e.child}function m0(t){var e=t.stateNode;e.pendingContext?hp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hp(t,e.context,!1),Ch(t,e.containerInfo)}function Pp(t,e,n,r,i){return Ti(),Eh(i),e.flags|=256,st(t,e,n,r),e.child}var tf={dehydrated:null,treeContext:null,retryLane:0};function nf(t){return{baseLanes:t,cachePool:null,transitions:null}}function p0(t,e,n){var r=e.pendingProps,i=we.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),he(we,i&1),t===null)return Gc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ml(s,r,0,null),t=Cr(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=nf(n),e.memoizedState=tf,t):Vh(e,s));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return p2(t,e,s,r,l,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Qn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Qn(l,o):(o=Cr(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?nf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=tf,r}return o=t.child,t=o.sibling,r=Qn(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Vh(t,e){return e=Ml({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function oa(t,e,n,r){return r!==null&&Eh(r),Ii(e,t.child,null,n),t=Vh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function p2(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=ec(Error(M(422))),oa(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Ml({mode:"visible",children:r.children},i,0,null),o=Cr(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Ii(e,t.child,null,s),e.child.memoizedState=nf(s),e.memoizedState=tf,o);if(!(e.mode&1))return oa(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(M(419)),r=ec(o,r,void 0),oa(t,e,s,r)}if(l=(s&t.childLanes)!==0,mt||l){if(r=je,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,En(t,i),$t(r,t,i,-1))}return $h(),r=ec(Error(M(421))),oa(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=k2.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Et=Wn(i.nextSibling),St=e,ve=!0,Mt=null,t!==null&&(Ct[kt++]=pn,Ct[kt++]=gn,Ct[kt++]=Rr,pn=t.id,gn=t.overflow,Rr=e),e=Vh(e,r.children),e.flags|=4096,e)}function bp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qc(t.return,e,n)}function tc(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function g0(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(st(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bp(t,n,e);else if(t.tag===19)bp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&il(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),tc(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&il(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}tc(e,!0,n,null,o);break;case"together":tc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ca(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Sn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=Qn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function g2(t,e,n){switch(e.tag){case 3:m0(e),Ti();break;case 5:Uy(e);break;case 1:gt(e.type)&&Ja(e);break;case 4:Ch(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;he(tl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?p0(t,e,n):(he(we,we.current&1),t=Sn(t,e,n),t!==null?t.sibling:null);he(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return g0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,h0(t,e,n)}return Sn(t,e,n)}var v0,rf,y0,_0;v0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rf=function(){};y0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Tr(Jt.current);var o=null;switch(n){case"input":i=xc(t,i),r=xc(t,r),o=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),o=[];break;case"textarea":i=kc(t,i),r=kc(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ya)}bc(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($o.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&l[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($o.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&me("scroll",t),o||l===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};_0=function(t,e,n,r){n!==r&&(e.flags|=4)};function ho(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function v2(t,e,n){var r=e.pendingProps;switch(wh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return gt(e.type)&&Xa(),Je(e),null;case 3:return r=e.stateNode,xi(),pe(pt),pe(rt),Ph(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ra(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mt!==null&&(hf(Mt),Mt=null))),rf(t,e),Je(e),null;case 5:kh(e);var i=Tr(Zo.current);if(n=e.type,t!==null&&e.stateNode!=null)y0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return Je(e),null}if(t=Tr(Jt.current),ra(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Gt]=e,r[Xo]=o,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<_o.length;i++)me(_o[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":zm(r,o),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},me("invalid",r);break;case"textarea":$m(r,o),me("invalid",r)}bc(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&na(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&na(r.textContent,l,t),i=["children",""+l]):$o.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&me("scroll",r)}switch(n){case"input":Gs(r),jm(r,o,!0);break;case"textarea":Gs(r),Um(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ya)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Kv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Gt]=e,t[Xo]=r,v0(t,e,!1,!1),e.stateNode=t;e:{switch(s=Rc(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<_o.length;i++)me(_o[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":zm(t,r),i=xc(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),me("invalid",t);break;case"textarea":$m(t,r),i=kc(t,r),me("invalid",t);break;default:i=r}bc(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?Yv(t,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Gv(t,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Uo(t,u):typeof u=="number"&&Uo(t,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&($o.hasOwnProperty(o)?u!=null&&o==="onScroll"&&me("scroll",t):u!=null&&oh(t,o,u,s))}switch(n){case"input":Gs(t),jm(t,r,!1);break;case"textarea":Gs(t),Um(t);break;case"option":r.value!=null&&t.setAttribute("value",""+er(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?fi(t,!!r.multiple,o,!1):r.defaultValue!=null&&fi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ya)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)_0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=Tr(Zo.current),Tr(Jt.current),ra(e)){if(r=e.stateNode,n=e.memoizedProps,r[Gt]=e,(o=r.nodeValue!==n)&&(t=St,t!==null))switch(t.tag){case 3:na(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&na(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gt]=e,e.stateNode=r}return Je(e),null;case 13:if(pe(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&Et!==null&&e.mode&1&&!(e.flags&128))Fy(),Ti(),e.flags|=98560,o=!1;else if(o=ra(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(M(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(M(317));o[Gt]=e}else Ti(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),o=!1}else Mt!==null&&(hf(Mt),Mt=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Ve===0&&(Ve=3):$h())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return xi(),rf(t,e),t===null&&Qo(e.stateNode.containerInfo),Je(e),null;case 10:return Ih(e.type._context),Je(e),null;case 17:return gt(e.type)&&Xa(),Je(e),null;case 19:if(pe(we),o=e.memoizedState,o===null)return Je(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)ho(o,!1);else{if(Ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=il(t),s!==null){for(e.flags|=128,ho(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(we,we.current&1|2),e.child}t=t.sibling}o.tail!==null&&Pe()>Ci&&(e.flags|=128,r=!0,ho(o,!1),e.lanes=4194304)}else{if(!r)if(t=il(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ho(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ve)return Je(e),null}else 2*Pe()-o.renderingStartTime>Ci&&n!==1073741824&&(e.flags|=128,r=!0,ho(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Pe(),e.sibling=null,n=we.current,he(we,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return jh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?wt&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function y2(t,e){switch(wh(e),e.tag){case 1:return gt(e.type)&&Xa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xi(),pe(pt),pe(rt),Ph(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kh(e),null;case 13:if(pe(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));Ti()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(we),null;case 4:return xi(),null;case 10:return Ih(e.type._context),null;case 22:case 23:return jh(),null;case 24:return null;default:return null}}var sa=!1,tt=!1,_2=typeof WeakSet=="function"?WeakSet:Set,W=null;function li(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function of(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var Rp=!1;function w2(t,e){if($c=Ka,t=Iy(),yh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,u=-1,c=0,d=0,m=t,p=null;t:for(;;){for(var w;m!==n||i!==0&&m.nodeType!==3||(l=s+i),m!==o||r!==0&&m.nodeType!==3||(u=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(w=m.firstChild)!==null;)p=m,m=w;for(;;){if(m===t)break t;if(p===n&&++c===i&&(l=s),p===o&&++d===r&&(u=s),(w=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uc={focusedElem:t,selectionRange:n},Ka=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var k=C.memoizedProps,R=C.memoizedState,_=e.stateNode,y=_.getSnapshotBeforeUpdate(e.elementType===e.type?k:Ot(e.type,k),R);_.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(N){Ae(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return C=Rp,Rp=!1,C}function Ro(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&of(e,n,o)}i=i.next}while(i!==r)}}function Ol(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function sf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function w0(t){var e=t.alternate;e!==null&&(t.alternate=null,w0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Gt],delete e[Xo],delete e[Wc],delete e[n2],delete e[r2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function E0(t){return t.tag===5||t.tag===3||t.tag===4}function Np(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||E0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function af(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ya));else if(r!==4&&(t=t.child,t!==null))for(af(t,e,n),t=t.sibling;t!==null;)af(t,e,n),t=t.sibling}function lf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(lf(t,e,n),t=t.sibling;t!==null;)lf(t,e,n),t=t.sibling}var Ue=null,Ft=!1;function Nn(t,e,n){for(n=n.child;n!==null;)S0(t,e,n),n=n.sibling}function S0(t,e,n){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:tt||li(n,e);case 6:var r=Ue,i=Ft;Ue=null,Nn(t,e,n),Ue=r,Ft=i,Ue!==null&&(Ft?(t=Ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Ft?(t=Ue,n=n.stateNode,t.nodeType===8?Gu(t.parentNode,n):t.nodeType===1&&Gu(t,n),qo(t)):Gu(Ue,n.stateNode));break;case 4:r=Ue,i=Ft,Ue=n.stateNode.containerInfo,Ft=!0,Nn(t,e,n),Ue=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&of(n,e,s),i=i.next}while(i!==r)}Nn(t,e,n);break;case 1:if(!tt&&(li(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,e,l)}Nn(t,e,n);break;case 21:Nn(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Nn(t,e,n),tt=r):Nn(t,e,n);break;default:Nn(t,e,n)}}function Dp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _2),e.forEach(function(r){var i=P2.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:Ue=l.stateNode,Ft=!1;break e;case 3:Ue=l.stateNode.containerInfo,Ft=!0;break e;case 4:Ue=l.stateNode.containerInfo,Ft=!0;break e}l=l.return}if(Ue===null)throw Error(M(160));S0(o,s,i),Ue=null,Ft=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ae(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)T0(e,t),e=e.sibling}function T0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Lt(e,t),qt(t),r&4){try{Ro(3,t,t.return),Ol(3,t)}catch(k){Ae(t,t.return,k)}try{Ro(5,t,t.return)}catch(k){Ae(t,t.return,k)}}break;case 1:Lt(e,t),qt(t),r&512&&n!==null&&li(n,n.return);break;case 5:if(Lt(e,t),qt(t),r&512&&n!==null&&li(n,n.return),t.flags&32){var i=t.stateNode;try{Uo(i,"")}catch(k){Ae(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Wv(i,o),Rc(l,s);var c=Rc(l,o);for(s=0;s<u.length;s+=2){var d=u[s],m=u[s+1];d==="style"?Yv(i,m):d==="dangerouslySetInnerHTML"?Gv(i,m):d==="children"?Uo(i,m):oh(i,d,m,c)}switch(l){case"input":Ac(i,o);break;case"textarea":qv(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?fi(i,!!o.multiple,w,!1):p!==!!o.multiple&&(o.defaultValue!=null?fi(i,!!o.multiple,o.defaultValue,!0):fi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Xo]=o}catch(k){Ae(t,t.return,k)}}break;case 6:if(Lt(e,t),qt(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(k){Ae(t,t.return,k)}}break;case 3:if(Lt(e,t),qt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qo(e.containerInfo)}catch(k){Ae(t,t.return,k)}break;case 4:Lt(e,t),qt(t);break;case 13:Lt(e,t),qt(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Mh=Pe())),r&4&&Dp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(c=tt)||d,Lt(e,t),tt=c):Lt(e,t),qt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(W=t,d=t.child;d!==null;){for(m=W=d;W!==null;){switch(p=W,w=p.child,p.tag){case 0:case 11:case 14:case 15:Ro(4,p,p.return);break;case 1:li(p,p.return);var C=p.stateNode;if(typeof C.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(k){Ae(r,n,k)}}break;case 5:li(p,p.return);break;case 22:if(p.memoizedState!==null){Vp(m);continue}}w!==null?(w.return=p,W=w):Vp(m)}d=d.sibling}e:for(d=null,m=t;;){if(m.tag===5){if(d===null){d=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=m.stateNode,u=m.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Qv("display",s))}catch(k){Ae(t,t.return,k)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(k){Ae(t,t.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Lt(e,t),qt(t),r&4&&Dp(t);break;case 21:break;default:Lt(e,t),qt(t)}}function qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(E0(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Uo(i,""),r.flags&=-33);var o=Np(t);lf(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Np(t);af(t,l,s);break;default:throw Error(M(161))}}catch(u){Ae(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function E2(t,e,n){W=t,I0(t)}function I0(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||sa;if(!s){var l=i.alternate,u=l!==null&&l.memoizedState!==null||tt;l=sa;var c=tt;if(sa=s,(tt=u)&&!c)for(W=i;W!==null;)s=W,u=s.child,s.tag===22&&s.memoizedState!==null?Op(i):u!==null?(u.return=s,W=u):Op(i);for(;o!==null;)W=o,I0(o),o=o.sibling;W=i,sa=l,tt=c}Lp(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,W=o):Lp(t)}}function Lp(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||Ol(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ot(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&yp(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yp(e,s,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&qo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}tt||e.flags&512&&sf(e)}catch(p){Ae(e,e.return,p)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Vp(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Op(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ol(4,e)}catch(u){Ae(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ae(e,i,u)}}var o=e.return;try{sf(e)}catch(u){Ae(e,o,u)}break;case 5:var s=e.return;try{sf(e)}catch(u){Ae(e,s,u)}}}catch(u){Ae(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var S2=Math.ceil,al=Cn.ReactCurrentDispatcher,Oh=Cn.ReactCurrentOwner,bt=Cn.ReactCurrentBatchConfig,ae=0,je=null,Ne=null,He=0,wt=0,ui=hr(0),Ve=0,rs=null,Dr=0,Fl=0,Fh=0,No=null,dt=null,Mh=0,Ci=1/0,dn=null,ll=!1,uf=null,Kn=null,aa=!1,zn=null,ul=0,Do=0,cf=null,ka=-1,Pa=0;function lt(){return ae&6?Pe():ka!==-1?ka:ka=Pe()}function Gn(t){return t.mode&1?ae&2&&He!==0?He&-He:o2.transition!==null?(Pa===0&&(Pa=ly()),Pa):(t=ue,t!==0||(t=window.event,t=t===void 0?16:py(t.type)),t):1}function $t(t,e,n,r){if(50<Do)throw Do=0,cf=null,Error(M(185));ms(t,n,r),(!(ae&2)||t!==je)&&(t===je&&(!(ae&2)&&(Fl|=n),Ve===4&&Fn(t,He)),vt(t,r),n===1&&ae===0&&!(e.mode&1)&&(Ci=Pe()+500,Dl&&dr()))}function vt(t,e){var n=t.callbackNode;oS(t,e);var r=qa(t,t===je?He:0);if(r===0)n!==null&&Wm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Wm(n),e===1)t.tag===0?i2(Fp.bind(null,t)):Ly(Fp.bind(null,t)),e2(function(){!(ae&6)&&dr()}),n=null;else{switch(uy(r)){case 1:n=ch;break;case 4:n=sy;break;case 16:n=Wa;break;case 536870912:n=ay;break;default:n=Wa}n=N0(n,x0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function x0(t,e){if(ka=-1,Pa=0,ae&6)throw Error(M(327));var n=t.callbackNode;if(gi()&&t.callbackNode!==n)return null;var r=qa(t,t===je?He:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=cl(t,r);else{e=r;var i=ae;ae|=2;var o=C0();(je!==t||He!==e)&&(dn=null,Ci=Pe()+500,Ar(t,e));do try{x2();break}catch(l){A0(t,l)}while(!0);Th(),al.current=o,ae=i,Ne!==null?e=0:(je=null,He=0,e=Ve)}if(e!==0){if(e===2&&(i=Oc(t),i!==0&&(r=i,e=ff(t,i))),e===1)throw n=rs,Ar(t,0),Fn(t,r),vt(t,Pe()),n;if(e===6)Fn(t,r);else{if(i=t.current.alternate,!(r&30)&&!T2(i)&&(e=cl(t,r),e===2&&(o=Oc(t),o!==0&&(r=o,e=ff(t,o))),e===1))throw n=rs,Ar(t,0),Fn(t,r),vt(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:_r(t,dt,dn);break;case 3:if(Fn(t,r),(r&130023424)===r&&(e=Mh+500-Pe(),10<e)){if(qa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Hc(_r.bind(null,t,dt,dn),e);break}_r(t,dt,dn);break;case 4:if(Fn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-jt(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*S2(r/1960))-r,10<r){t.timeoutHandle=Hc(_r.bind(null,t,dt,dn),r);break}_r(t,dt,dn);break;case 5:_r(t,dt,dn);break;default:throw Error(M(329))}}}return vt(t,Pe()),t.callbackNode===n?x0.bind(null,t):null}function ff(t,e){var n=No;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=cl(t,e),t!==2&&(e=dt,dt=n,e!==null&&hf(e)),t}function hf(t){dt===null?dt=t:dt.push.apply(dt,t)}function T2(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ut(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fn(t,e){for(e&=~Fh,e&=~Fl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jt(e),r=1<<n;t[n]=-1,e&=~r}}function Fp(t){if(ae&6)throw Error(M(327));gi();var e=qa(t,0);if(!(e&1))return vt(t,Pe()),null;var n=cl(t,e);if(t.tag!==0&&n===2){var r=Oc(t);r!==0&&(e=r,n=ff(t,r))}if(n===1)throw n=rs,Ar(t,0),Fn(t,e),vt(t,Pe()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,dt,dn),vt(t,Pe()),null}function zh(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(Ci=Pe()+500,Dl&&dr())}}function Lr(t){zn!==null&&zn.tag===0&&!(ae&6)&&gi();var e=ae;ae|=1;var n=bt.transition,r=ue;try{if(bt.transition=null,ue=1,t)return t()}finally{ue=r,bt.transition=n,ae=e,!(ae&6)&&dr()}}function jh(){wt=ui.current,pe(ui)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ZS(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(wh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xa();break;case 3:xi(),pe(pt),pe(rt),Ph();break;case 5:kh(r);break;case 4:xi();break;case 13:pe(we);break;case 19:pe(we);break;case 10:Ih(r.type._context);break;case 22:case 23:jh()}n=n.return}if(je=t,Ne=t=Qn(t.current,null),He=wt=e,Ve=0,rs=null,Fh=Fl=Dr=0,dt=No=null,Sr!==null){for(e=0;e<Sr.length;e++)if(n=Sr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Sr=null}return t}function A0(t,e){do{var n=Ne;try{if(Th(),xa.current=sl,ol){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ol=!1}if(Nr=0,ze=De=Ee=null,bo=!1,es=0,Oh.current=null,n===null||n.return===null){Ve=1,rs=e,Ne=null;break}e:{var o=t,s=n.return,l=n,u=e;if(e=He,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=Ip(s);if(w!==null){w.flags&=-257,xp(w,s,l,o,e),w.mode&1&&Tp(o,c,e),e=w,u=c;var C=e.updateQueue;if(C===null){var k=new Set;k.add(u),e.updateQueue=k}else C.add(u);break e}else{if(!(e&1)){Tp(o,c,e),$h();break e}u=Error(M(426))}}else if(ve&&l.mode&1){var R=Ip(s);if(R!==null){!(R.flags&65536)&&(R.flags|=256),xp(R,s,l,o,e),Eh(Ai(u,l));break e}}o=u=Ai(u,l),Ve!==4&&(Ve=2),No===null?No=[o]:No.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var _=u0(o,u,e);vp(o,_);break e;case 1:l=u;var y=o.type,T=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Kn===null||!Kn.has(T)))){o.flags|=65536,e&=-e,o.lanes|=e;var N=c0(o,l,e);vp(o,N);break e}}o=o.return}while(o!==null)}P0(n)}catch(F){e=F,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function C0(){var t=al.current;return al.current=sl,t===null?sl:t}function $h(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),je===null||!(Dr&268435455)&&!(Fl&268435455)||Fn(je,He)}function cl(t,e){var n=ae;ae|=2;var r=C0();(je!==t||He!==e)&&(dn=null,Ar(t,e));do try{I2();break}catch(i){A0(t,i)}while(!0);if(Th(),ae=n,al.current=r,Ne!==null)throw Error(M(261));return je=null,He=0,Ve}function I2(){for(;Ne!==null;)k0(Ne)}function x2(){for(;Ne!==null&&!YE();)k0(Ne)}function k0(t){var e=R0(t.alternate,t,wt);t.memoizedProps=t.pendingProps,e===null?P0(t):Ne=e,Oh.current=null}function P0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=y2(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ve=6,Ne=null;return}}else if(n=v2(n,e,wt),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);Ve===0&&(Ve=5)}function _r(t,e,n){var r=ue,i=bt.transition;try{bt.transition=null,ue=1,A2(t,e,n,r)}finally{bt.transition=i,ue=r}return null}function A2(t,e,n,r){do gi();while(zn!==null);if(ae&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(sS(t,o),t===je&&(Ne=je=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||aa||(aa=!0,N0(Wa,function(){return gi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=bt.transition,bt.transition=null;var s=ue;ue=1;var l=ae;ae|=4,Oh.current=null,w2(t,n),T0(n,t),qS(Uc),Ka=!!$c,Uc=$c=null,t.current=n,E2(n),XE(),ae=l,ue=s,bt.transition=o}else t.current=n;if(aa&&(aa=!1,zn=t,ul=i),o=t.pendingLanes,o===0&&(Kn=null),eS(n.stateNode),vt(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ll)throw ll=!1,t=uf,uf=null,t;return ul&1&&t.tag!==0&&gi(),o=t.pendingLanes,o&1?t===cf?Do++:(Do=0,cf=t):Do=0,dr(),null}function gi(){if(zn!==null){var t=uy(ul),e=bt.transition,n=ue;try{if(bt.transition=null,ue=16>t?16:t,zn===null)var r=!1;else{if(t=zn,zn=null,ul=0,ae&6)throw Error(M(331));var i=ae;for(ae|=4,W=t.current;W!==null;){var o=W,s=o.child;if(W.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:Ro(8,d,o)}var m=d.child;if(m!==null)m.return=d,W=m;else for(;W!==null;){d=W;var p=d.sibling,w=d.return;if(w0(d),d===c){W=null;break}if(p!==null){p.return=w,W=p;break}W=w}}}var C=o.alternate;if(C!==null){var k=C.child;if(k!==null){C.child=null;do{var R=k.sibling;k.sibling=null,k=R}while(k!==null)}}W=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,W=s;else e:for(;W!==null;){if(o=W,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ro(9,o,o.return)}var _=o.sibling;if(_!==null){_.return=o.return,W=_;break e}W=o.return}}var y=t.current;for(W=y;W!==null;){s=W;var T=s.child;if(s.subtreeFlags&2064&&T!==null)T.return=s,W=T;else e:for(s=y;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ol(9,l)}}catch(F){Ae(l,l.return,F)}if(l===s){W=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,W=N;break e}W=l.return}}if(ae=i,dr(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(kl,t)}catch{}r=!0}return r}finally{ue=n,bt.transition=e}}return!1}function Mp(t,e,n){e=Ai(n,e),e=u0(t,e,1),t=qn(t,e,1),e=lt(),t!==null&&(ms(t,1,e),vt(t,e))}function Ae(t,e,n){if(t.tag===3)Mp(t,t,n);else for(;e!==null;){if(e.tag===3){Mp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kn===null||!Kn.has(r))){t=Ai(n,t),t=c0(e,t,1),e=qn(e,t,1),t=lt(),e!==null&&(ms(e,1,t),vt(e,t));break}}e=e.return}}function C2(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,je===t&&(He&n)===n&&(Ve===4||Ve===3&&(He&130023424)===He&&500>Pe()-Mh?Ar(t,0):Fh|=n),vt(t,e)}function b0(t,e){e===0&&(t.mode&1?(e=Xs,Xs<<=1,!(Xs&130023424)&&(Xs=4194304)):e=1);var n=lt();t=En(t,e),t!==null&&(ms(t,e,n),vt(t,n))}function k2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),b0(t,n)}function P2(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),b0(t,n)}var R0;R0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pt.current)mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mt=!1,g2(t,e,n);mt=!!(t.flags&131072)}else mt=!1,ve&&e.flags&1048576&&Vy(e,el,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ca(t,e),t=e.pendingProps;var i=Si(e,rt.current);pi(e,n),i=Rh(null,e,r,t,i,n);var o=Nh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gt(r)?(o=!0,Ja(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ah(e),i.updater=Vl,e.stateNode=i,i._reactInternals=e,Xc(e,r,t,n),e=ef(null,e,r,!0,o,n)):(e.tag=0,ve&&o&&_h(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ca(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=R2(r),t=Ot(r,t),i){case 0:e=Zc(null,e,r,t,n);break e;case 1:e=kp(null,e,r,t,n);break e;case 11:e=Ap(null,e,r,t,n);break e;case 14:e=Cp(null,e,r,Ot(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ot(r,i),Zc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ot(r,i),kp(t,e,r,i,n);case 3:e:{if(m0(e),t===null)throw Error(M(387));r=e.pendingProps,o=e.memoizedState,i=o.element,$y(t,e),rl(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Ai(Error(M(423)),e),e=Pp(t,e,r,n,i);break e}else if(r!==i){i=Ai(Error(M(424)),e),e=Pp(t,e,r,n,i);break e}else for(Et=Wn(e.stateNode.containerInfo.firstChild),St=e,ve=!0,Mt=null,n=zy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ti(),r===i){e=Sn(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return Uy(e),t===null&&Gc(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Bc(r,i)?s=null:o!==null&&Bc(r,o)&&(e.flags|=32),d0(t,e),st(t,e,s,n),e.child;case 6:return t===null&&Gc(e),null;case 13:return p0(t,e,n);case 4:return Ch(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ii(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ot(r,i),Ap(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,he(tl,r._currentValue),r._currentValue=s,o!==null)if(Ut(o.value,s)){if(o.children===i.children&&!pt.current){e=Sn(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=vn(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Qc(o.return,n,e),l.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(M(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Qc(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,pi(e,n),i=Rt(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=Ot(r,e.pendingProps),i=Ot(r.type,i),Cp(t,e,r,i,n);case 15:return f0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ot(r,i),Ca(t,e),e.tag=1,gt(r)?(t=!0,Ja(e)):t=!1,pi(e,n),l0(e,r,i),Xc(e,r,i,n),ef(null,e,r,!0,t,n);case 19:return g0(t,e,n);case 22:return h0(t,e,n)}throw Error(M(156,e.tag))};function N0(t,e){return oy(t,e)}function b2(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,e,n,r){return new b2(t,e,n,r)}function Uh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function R2(t){if(typeof t=="function")return Uh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ah)return 11;if(t===lh)return 14}return 2}function Qn(t,e){var n=t.alternate;return n===null?(n=Pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ba(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Uh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Zr:return Cr(n.children,i,o,e);case sh:s=8,i|=8;break;case Ec:return t=Pt(12,n,e,i|2),t.elementType=Ec,t.lanes=o,t;case Sc:return t=Pt(13,n,e,i),t.elementType=Sc,t.lanes=o,t;case Tc:return t=Pt(19,n,e,i),t.elementType=Tc,t.lanes=o,t;case Uv:return Ml(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case jv:s=10;break e;case $v:s=9;break e;case ah:s=11;break e;case lh:s=14;break e;case Ln:s=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=Pt(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Cr(t,e,n,r){return t=Pt(7,t,r,e),t.lanes=n,t}function Ml(t,e,n,r){return t=Pt(22,t,r,e),t.elementType=Uv,t.lanes=n,t.stateNode={isHidden:!1},t}function nc(t,e,n){return t=Pt(6,t,null,e),t.lanes=n,t}function rc(t,e,n){return e=Pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function N2(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fu(0),this.expirationTimes=Fu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bh(t,e,n,r,i,o,s,l,u){return t=new N2(t,e,n,l,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Pt(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ah(o),t}function D2(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function D0(t){if(!t)return tr;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(gt(n))return Dy(t,n,e)}return e}function L0(t,e,n,r,i,o,s,l,u){return t=Bh(n,r,!0,t,i,o,s,l,u),t.context=D0(null),n=t.current,r=lt(),i=Gn(n),o=vn(r,i),o.callback=e??null,qn(n,o,i),t.current.lanes=i,ms(t,i,r),vt(t,r),t}function zl(t,e,n,r){var i=e.current,o=lt(),s=Gn(i);return n=D0(n),e.context===null?e.context=n:e.pendingContext=n,e=vn(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=qn(i,e,s),t!==null&&($t(t,i,s,o),Ia(t,i,s)),s}function fl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hh(t,e){zp(t,e),(t=t.alternate)&&zp(t,e)}function L2(){return null}var V0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wh(t){this._internalRoot=t}jl.prototype.render=Wh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));zl(t,e,null,null)};jl.prototype.unmount=Wh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Lr(function(){zl(null,t,null,null)}),e[wn]=null}};function jl(t){this._internalRoot=t}jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=hy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<On.length&&e!==0&&e<On[n].priority;n++);On.splice(n,0,t),n===0&&my(t)}};function qh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jp(){}function V2(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=fl(s);o.call(c)}}var s=L0(e,r,t,0,null,!1,!1,"",jp);return t._reactRootContainer=s,t[wn]=s.current,Qo(t.nodeType===8?t.parentNode:t),Lr(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=fl(u);l.call(c)}}var u=Bh(t,0,!1,null,null,!1,!1,"",jp);return t._reactRootContainer=u,t[wn]=u.current,Qo(t.nodeType===8?t.parentNode:t),Lr(function(){zl(e,u,n,r)}),u}function Ul(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var u=fl(s);l.call(u)}}zl(e,s,t,i)}else s=V2(n,e,t,i,r);return fl(s)}cy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=yo(e.pendingLanes);n!==0&&(fh(e,n|1),vt(e,Pe()),!(ae&6)&&(Ci=Pe()+500,dr()))}break;case 13:Lr(function(){var r=En(t,1);if(r!==null){var i=lt();$t(r,t,1,i)}}),Hh(t,1)}};hh=function(t){if(t.tag===13){var e=En(t,134217728);if(e!==null){var n=lt();$t(e,t,134217728,n)}Hh(t,134217728)}};fy=function(t){if(t.tag===13){var e=Gn(t),n=En(t,e);if(n!==null){var r=lt();$t(n,t,e,r)}Hh(t,e)}};hy=function(){return ue};dy=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};Dc=function(t,e,n){switch(e){case"input":if(Ac(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Nl(r);if(!i)throw Error(M(90));Hv(r),Ac(r,i)}}}break;case"textarea":qv(t,n);break;case"select":e=n.value,e!=null&&fi(t,!!n.multiple,e,!1)}};Zv=zh;ey=Lr;var O2={usingClientEntryPoint:!1,Events:[gs,ri,Nl,Xv,Jv,zh]},mo={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},F2={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ry(t),t===null?null:t.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||L2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var la=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!la.isDisabled&&la.supportsFiber)try{kl=la.inject(F2),Xt=la}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O2;It.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qh(e))throw Error(M(200));return D2(t,e,null,n)};It.createRoot=function(t,e){if(!qh(t))throw Error(M(299));var n=!1,r="",i=V0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Bh(t,1,!1,null,null,n,!1,r,i),t[wn]=e.current,Qo(t.nodeType===8?t.parentNode:t),new Wh(e)};It.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=ry(e),t=t===null?null:t.stateNode,t};It.flushSync=function(t){return Lr(t)};It.hydrate=function(t,e,n){if(!$l(e))throw Error(M(200));return Ul(null,t,e,!0,n)};It.hydrateRoot=function(t,e,n){if(!qh(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=V0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=L0(e,null,t,1,n??null,i,!1,o,s),t[wn]=e.current,Qo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new jl(e)};It.render=function(t,e,n){if(!$l(e))throw Error(M(200));return Ul(null,t,e,!1,n)};It.unmountComponentAtNode=function(t){if(!$l(t))throw Error(M(40));return t._reactRootContainer?(Lr(function(){Ul(null,null,t,!1,function(){t._reactRootContainer=null,t[wn]=null})}),!0):!1};It.unstable_batchedUpdates=zh;It.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!$l(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return Ul(t,e,n,!1,r)};It.version="18.3.1-next-f1338f8080-20240426";function O0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O0)}catch(t){console.error(t)}}O0(),Ov.exports=It;var M2=Ov.exports,F0,$p=M2;F0=$p.createRoot,$p.hydrateRoot;var Kh={};Object.defineProperty(Kh,"__esModule",{value:!0});Kh.parse=W2;Kh.serialize=q2;const z2=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,j2=/^[\u0021-\u003A\u003C-\u007E]*$/,$2=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,U2=/^[\u0020-\u003A\u003D-\u007E]*$/,B2=Object.prototype.toString,H2=(()=>{const t=function(){};return t.prototype=Object.create(null),t})();function W2(t,e){const n=new H2,r=t.length;if(r<2)return n;const i=(e==null?void 0:e.decode)||K2;let o=0;do{const s=t.indexOf("=",o);if(s===-1)break;const l=t.indexOf(";",o),u=l===-1?r:l;if(s>u){o=t.lastIndexOf(";",s-1)+1;continue}const c=Up(t,o,s),d=Bp(t,s,c),m=t.slice(c,d);if(n[m]===void 0){let p=Up(t,s+1,u),w=Bp(t,u,p);const C=i(t.slice(p,w));n[m]=C}o=u+1}while(o<r);return n}function Up(t,e,n){do{const r=t.charCodeAt(e);if(r!==32&&r!==9)return e}while(++e<n);return n}function Bp(t,e,n){for(;e>n;){const r=t.charCodeAt(--e);if(r!==32&&r!==9)return e+1}return n}function q2(t,e,n){const r=(n==null?void 0:n.encode)||encodeURIComponent;if(!z2.test(t))throw new TypeError(`argument name is invalid: ${t}`);const i=r(e);if(!j2.test(i))throw new TypeError(`argument val is invalid: ${e}`);let o=t+"="+i;if(!n)return o;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);o+="; Max-Age="+n.maxAge}if(n.domain){if(!$2.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);o+="; Domain="+n.domain}if(n.path){if(!U2.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);o+="; Path="+n.path}if(n.expires){if(!G2(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);o+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(o+="; HttpOnly"),n.secure&&(o+="; Secure"),n.partitioned&&(o+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":o+="; Priority=Low";break;case"medium":o+="; Priority=Medium";break;case"high":o+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"none":o+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return o}function K2(t){if(t.indexOf("%")===-1)return t;try{return decodeURIComponent(t)}catch{return t}}function G2(t){return B2.call(t)==="[object Date]"}/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Hp="popstate";function Q2(t={}){function e(r,i){let{pathname:o,search:s,hash:l}=r.location;return df("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:is(i)}return X2(e,n,null,t)}function Se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function tn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Y2(){return Math.random().toString(36).substring(2,10)}function Wp(t,e){return{usr:t.state,key:t.key,idx:e}}function df(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?ji(e):e,state:n,key:e&&e.key||r||Y2()}}function is({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function ji(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function X2(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l="POP",u=null,c=d();c==null&&(c=0,s.replaceState({...s.state,idx:c},""));function d(){return(s.state||{idx:null}).idx}function m(){l="POP";let R=d(),_=R==null?null:R-c;c=R,u&&u({action:l,location:k.location,delta:_})}function p(R,_){l="PUSH";let y=df(k.location,R,_);c=d()+1;let T=Wp(y,c),N=k.createHref(y);try{s.pushState(T,"",N)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(N)}o&&u&&u({action:l,location:k.location,delta:1})}function w(R,_){l="REPLACE";let y=df(k.location,R,_);c=d();let T=Wp(y,c),N=k.createHref(y);s.replaceState(T,"",N),o&&u&&u({action:l,location:k.location,delta:0})}function C(R){let _=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof R=="string"?R:is(R);return y=y.replace(/ $/,"%20"),Se(_,`No window.location.(origin|href) available to create URL for href: ${y}`),new URL(y,_)}let k={get action(){return l},get location(){return t(i,s)},listen(R){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Hp,m),u=R,()=>{i.removeEventListener(Hp,m),u=null}},createHref(R){return e(i,R)},createURL:C,encodeLocation(R){let _=C(R);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:p,replace:w,go(R){return s.go(R)}};return k}function M0(t,e,n="/"){return J2(t,e,n,!1)}function J2(t,e,n,r){let i=typeof e=="string"?ji(e):e,o=nr(i.pathname||"/",n);if(o==null)return null;let s=z0(t);Z2(s);let l=null;for(let u=0;l==null&&u<s.length;++u){let c=cT(o);l=lT(s[u],c,r)}return l}function z0(t,e=[],n=[],r=""){let i=(o,s,l)=>{let u={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};u.relativePath.startsWith("/")&&(Se(u.relativePath.startsWith(r),`Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(r.length));let c=yn([r,u.relativePath]),d=n.concat(u);o.children&&o.children.length>0&&(Se(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),z0(o.children,e,d,c)),!(o.path==null&&!o.index)&&e.push({path:c,score:sT(c,o.index),routesMeta:d})};return t.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let u of j0(o.path))i(o,s,u)}),e}function j0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=j0(r.join("/")),l=[];return l.push(...s.map(u=>u===""?o:[o,u].join("/"))),i&&l.push(...s),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function Z2(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:aT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var eT=/^:[\w-]+$/,tT=3,nT=2,rT=1,iT=10,oT=-2,qp=t=>t==="*";function sT(t,e){let n=t.split("/"),r=n.length;return n.some(qp)&&(r+=oT),e&&(r+=nT),n.filter(i=>!qp(i)).reduce((i,o)=>i+(eT.test(o)?tT:o===""?rT:iT),r)}function aT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function lT(t,e,n=!1){let{routesMeta:r}=t,i={},o="/",s=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=o==="/"?e:e.slice(o.length)||"/",m=hl({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),p=u.route;if(!m&&c&&n&&!r[r.length-1].route.index&&(m=hl({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!m)return null;Object.assign(i,m.params),s.push({params:i,pathname:yn([o,m.pathname]),pathnameBase:mT(yn([o,m.pathnameBase])),route:p}),m.pathnameBase!=="/"&&(o=yn([o,m.pathnameBase]))}return s}function hl(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=uT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,{paramName:d,isOptional:m},p)=>{if(d==="*"){let C=l[p]||"";s=o.slice(0,o.length-C.length).replace(/(.)\/+$/,"$1")}const w=l[p];return m&&!w?c[d]=void 0:c[d]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:t}}function uT(t,e=!1,n=!0){tn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function cT(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return tn(!1,`The URL path "${t}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function nr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function fT(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ji(t):t;return{pathname:n?n.startsWith("/")?n:hT(n,e):e,search:pT(r),hash:gT(i)}}function hT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ic(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $0(t){let e=dT(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function U0(t,e,n,r=!1){let i;typeof t=="string"?i=ji(t):(i={...t},Se(!i.pathname||!i.pathname.includes("?"),ic("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),ic("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),ic("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let m=e.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),m-=1;i.pathname=p.join("/")}l=m>=0?e[m]:"/"}let u=fT(i,l),c=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}var yn=t=>t.join("/").replace(/\/\/+/g,"/"),mT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),pT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,gT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function vT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var B0=["POST","PUT","PATCH","DELETE"];new Set(B0);var yT=["GET",...B0];new Set(yT);var $i=L.createContext(null);$i.displayName="DataRouter";var Bl=L.createContext(null);Bl.displayName="DataRouterState";var H0=L.createContext({isTransitioning:!1});H0.displayName="ViewTransition";var _T=L.createContext(new Map);_T.displayName="Fetchers";var wT=L.createContext(null);wT.displayName="Await";var on=L.createContext(null);on.displayName="Navigation";var ys=L.createContext(null);ys.displayName="Location";var sn=L.createContext({outlet:null,matches:[],isDataRoute:!1});sn.displayName="Route";var Gh=L.createContext(null);Gh.displayName="RouteError";function ET(t,{relative:e}={}){Se(_s(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=L.useContext(on),{hash:i,pathname:o,search:s}=ws(t,{relative:e}),l=o;return n!=="/"&&(l=o==="/"?n:yn([n,o])),r.createHref({pathname:l,search:s,hash:i})}function _s(){return L.useContext(ys)!=null}function jr(){return Se(_s(),"useLocation() may be used only in the context of a <Router> component."),L.useContext(ys).location}var W0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function q0(t){L.useContext(on).static||L.useLayoutEffect(t)}function K0(){let{isDataRoute:t}=L.useContext(sn);return t?VT():ST()}function ST(){Se(_s(),"useNavigate() may be used only in the context of a <Router> component.");let t=L.useContext($i),{basename:e,navigator:n}=L.useContext(on),{matches:r}=L.useContext(sn),{pathname:i}=jr(),o=JSON.stringify($0(r)),s=L.useRef(!1);return q0(()=>{s.current=!0}),L.useCallback((u,c={})=>{if(tn(s.current,W0),!s.current)return;if(typeof u=="number"){n.go(u);return}let d=U0(u,JSON.parse(o),i,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:yn([e,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[e,n,o,i,t])}L.createContext(null);function TT(){let{matches:t}=L.useContext(sn),e=t[t.length-1];return e?e.params:{}}function ws(t,{relative:e}={}){let{matches:n}=L.useContext(sn),{pathname:r}=jr(),i=JSON.stringify($0(n));return L.useMemo(()=>U0(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function IT(t,e){return G0(t,e)}function G0(t,e,n,r){var _;Se(_s(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=L.useContext(on),{matches:o}=L.useContext(sn),s=o[o.length-1],l=s?s.params:{},u=s?s.pathname:"/",c=s?s.pathnameBase:"/",d=s&&s.route;{let y=d&&d.path||"";Q0(u,!d||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let m=jr(),p;if(e){let y=typeof e=="string"?ji(e):e;Se(c==="/"||((_=y.pathname)==null?void 0:_.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${y.pathname}" was given in the \`location\` prop.`),p=y}else p=m;let w=p.pathname||"/",C=w;if(c!=="/"){let y=c.replace(/^\//,"").split("/");C="/"+w.replace(/^\//,"").split("/").slice(y.length).join("/")}let k=M0(t,{pathname:C});tn(d||k!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),tn(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=PT(k&&k.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:yn([c,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?c:yn([c,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),o,n,r);return e&&R?L.createElement(ys.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},R):R}function xT(){let t=LT(),e=vT(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},s=null;return console.error("Error handled by React Router default ErrorBoundary:",t),s=L.createElement(L.Fragment,null,L.createElement("p",null,"💿 Hey developer 👋"),L.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",L.createElement("code",{style:o},"ErrorBoundary")," or"," ",L.createElement("code",{style:o},"errorElement")," prop on your route.")),L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:i},n):null,s)}var AT=L.createElement(xT,null),CT=class extends L.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?L.createElement(sn.Provider,{value:this.props.routeContext},L.createElement(Gh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function kT({routeContext:t,match:e,children:n}){let r=L.useContext($i);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),L.createElement(sn.Provider,{value:t},n)}function PT(t,e=[],n=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,o=n==null?void 0:n.errors;if(o!=null){let u=i.findIndex(c=>c.route.id&&(o==null?void 0:o[c.route.id])!==void 0);Se(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,u+1))}let s=!1,l=-1;if(n)for(let u=0;u<i.length;u++){let c=i[u];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(l=u),c.route.id){let{loaderData:d,errors:m}=n,p=c.route.loader&&!d.hasOwnProperty(c.route.id)&&(!m||m[c.route.id]===void 0);if(c.route.lazy||p){s=!0,l>=0?i=i.slice(0,l+1):i=[i[0]];break}}}return i.reduceRight((u,c,d)=>{let m,p=!1,w=null,C=null;n&&(m=o&&c.route.id?o[c.route.id]:void 0,w=c.route.errorElement||AT,s&&(l<0&&d===0?(Q0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,C=null):l===d&&(p=!0,C=c.route.hydrateFallbackElement||null)));let k=e.concat(i.slice(0,d+1)),R=()=>{let _;return m?_=w:p?_=C:c.route.Component?_=L.createElement(c.route.Component,null):c.route.element?_=c.route.element:_=u,L.createElement(kT,{match:c,routeContext:{outlet:u,matches:k,isDataRoute:n!=null},children:_})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?L.createElement(CT,{location:n.location,revalidation:n.revalidation,component:w,error:m,children:R(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):R()},null)}function Qh(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bT(t){let e=L.useContext($i);return Se(e,Qh(t)),e}function RT(t){let e=L.useContext(Bl);return Se(e,Qh(t)),e}function NT(t){let e=L.useContext(sn);return Se(e,Qh(t)),e}function Yh(t){let e=NT(t),n=e.matches[e.matches.length-1];return Se(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function DT(){return Yh("useRouteId")}function LT(){var r;let t=L.useContext(Gh),e=RT("useRouteError"),n=Yh("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function VT(){let{router:t}=bT("useNavigate"),e=Yh("useNavigate"),n=L.useRef(!1);return q0(()=>{n.current=!0}),L.useCallback(async(i,o={})=>{tn(n.current,W0),n.current&&(typeof i=="number"?t.navigate(i):await t.navigate(i,{fromRouteId:e,...o}))},[t,e])}var Kp={};function Q0(t,e,n){!e&&!Kp[t]&&(Kp[t]=!0,tn(!1,n))}L.memo(OT);function OT({routes:t,future:e,state:n}){return G0(t,void 0,n,e)}function Ra(t){Se(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function FT({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:o=!1}){Se(!_s(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=t.replace(/^\/*/,"/"),l=L.useMemo(()=>({basename:s,navigator:i,static:o,future:{}}),[s,i,o]);typeof n=="string"&&(n=ji(n));let{pathname:u="/",search:c="",hash:d="",state:m=null,key:p="default"}=n,w=L.useMemo(()=>{let C=nr(u,s);return C==null?null:{location:{pathname:C,search:c,hash:d,state:m,key:p},navigationType:r}},[s,u,c,d,m,p,r]);return tn(w!=null,`<Router basename="${s}"> is not able to match the URL "${u}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:L.createElement(on.Provider,{value:l},L.createElement(ys.Provider,{children:e,value:w}))}function MT({children:t,location:e}){return IT(mf(t),e)}function mf(t,e=[]){let n=[];return L.Children.forEach(t,(r,i)=>{if(!L.isValidElement(r))return;let o=[...e,i];if(r.type===L.Fragment){n.push.apply(n,mf(r.props.children,o));return}Se(r.type===Ra,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Se(!r.props.index||!r.props.children,"An index route cannot have child routes.");let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=mf(r.props.children,o)),n.push(s)}),n}var Na="get",Da="application/x-www-form-urlencoded";function Hl(t){return t!=null&&typeof t.tagName=="string"}function zT(t){return Hl(t)&&t.tagName.toLowerCase()==="button"}function jT(t){return Hl(t)&&t.tagName.toLowerCase()==="form"}function $T(t){return Hl(t)&&t.tagName.toLowerCase()==="input"}function UT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function BT(t,e){return t.button===0&&(!e||e==="_self")&&!UT(t)}var ua=null;function HT(){if(ua===null)try{new FormData(document.createElement("form"),0),ua=!1}catch{ua=!0}return ua}var WT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function oc(t){return t!=null&&!WT.has(t)?(tn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Da}"`),null):t}function qT(t,e){let n,r,i,o,s;if(jT(t)){let l=t.getAttribute("action");r=l?nr(l,e):null,n=t.getAttribute("method")||Na,i=oc(t.getAttribute("enctype"))||Da,o=new FormData(t)}else if(zT(t)||$T(t)&&(t.type==="submit"||t.type==="image")){let l=t.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=t.getAttribute("formaction")||l.getAttribute("action");if(r=u?nr(u,e):null,n=t.getAttribute("formmethod")||l.getAttribute("method")||Na,i=oc(t.getAttribute("formenctype"))||oc(l.getAttribute("enctype"))||Da,o=new FormData(l,t),!HT()){let{name:c,type:d,value:m}=t;if(d==="image"){let p=c?`${c}.`:"";o.append(`${p}x`,"0"),o.append(`${p}y`,"0")}else c&&o.append(c,m)}}else{if(Hl(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Na,r=null,i=Da,s=t}return o&&i==="text/plain"&&(s=o,o=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:o,body:s}}function Xh(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function KT(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function GT(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function QT(t,e,n){let r=await Promise.all(t.map(async i=>{let o=e.routes[i.route.id];if(o){let s=await KT(o,n);return s.links?s.links():[]}return[]}));return ZT(r.flat(1).filter(GT).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Gp(t,e,n,r,i,o){let s=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,l=(u,c)=>{var d;return n[c].pathname!==u.pathname||((d=n[c].route.path)==null?void 0:d.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return o==="assets"?e.filter((u,c)=>s(u,c)||l(u,c)):o==="data"?e.filter((u,c)=>{var m;let d=r.routes[u.route.id];if(!d||!d.hasLoader)return!1;if(s(u,c)||l(u,c))return!0;if(u.route.shouldRevalidate){let p=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((m=n[0])==null?void 0:m.params)||{},nextUrl:new URL(t,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function YT(t,e){return XT(t.map(n=>{let r=e.routes[n.route.id];if(!r)return[];let i=[r.module];return r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function XT(t){return[...new Set(t)]}function JT(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function ZT(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let o=JSON.stringify(JT(i));return n.has(o)||(n.add(o),r.push({key:o,link:i})),r},[])}function eI(t){let e=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function tI(){let t=L.useContext($i);return Xh(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function nI(){let t=L.useContext(Bl);return Xh(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Jh=L.createContext(void 0);Jh.displayName="FrameworkContext";function Y0(){let t=L.useContext(Jh);return Xh(t,"You must render this element inside a <HydratedRouter> element"),t}function rI(t,e){let n=L.useContext(Jh),[r,i]=L.useState(!1),[o,s]=L.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:m}=e,p=L.useRef(null);L.useEffect(()=>{if(t==="render"&&s(!0),t==="viewport"){let k=_=>{_.forEach(y=>{s(y.isIntersecting)})},R=new IntersectionObserver(k,{threshold:.5});return p.current&&R.observe(p.current),()=>{R.disconnect()}}},[t]),L.useEffect(()=>{if(r){let k=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(k)}}},[r]);let w=()=>{i(!0)},C=()=>{i(!1),s(!1)};return n?t!=="intent"?[o,p,{}]:[o,p,{onFocus:po(l,w),onBlur:po(u,C),onMouseEnter:po(c,w),onMouseLeave:po(d,C),onTouchStart:po(m,w)}]:[!1,p,{}]}function po(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function iI({page:t,...e}){let{router:n}=tI(),r=L.useMemo(()=>M0(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?L.createElement(sI,{page:t,matches:r,...e}):null}function oI(t){let{manifest:e,routeModules:n}=Y0(),[r,i]=L.useState([]);return L.useEffect(()=>{let o=!1;return QT(t,e,n).then(s=>{o||i(s)}),()=>{o=!0}},[t,e,n]),r}function sI({page:t,matches:e,...n}){let r=jr(),{manifest:i,routeModules:o}=Y0(),{loaderData:s,matches:l}=nI(),u=L.useMemo(()=>Gp(t,e,l,i,r,"data"),[t,e,l,i,r]),c=L.useMemo(()=>Gp(t,e,l,i,r,"assets"),[t,e,l,i,r]),d=L.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let w=new Set,C=!1;if(e.forEach(R=>{var y;let _=i.routes[R.route.id];!_||!_.hasLoader||(!u.some(T=>T.route.id===R.route.id)&&R.route.id in s&&((y=o[R.route.id])!=null&&y.shouldRevalidate)||_.hasClientLoader?C=!0:w.add(R.route.id))}),w.size===0)return[];let k=eI(t);return C&&w.size>0&&k.searchParams.set("_routes",e.filter(R=>w.has(R.route.id)).map(R=>R.route.id).join(",")),[k.pathname+k.search]},[s,r,i,u,e,t,o]),m=L.useMemo(()=>YT(c,i),[c,i]),p=oI(c);return L.createElement(L.Fragment,null,d.map(w=>L.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...n})),m.map(w=>L.createElement("link",{key:w,rel:"modulepreload",href:w,...n})),p.map(({key:w,link:C})=>L.createElement("link",{key:w,...C})))}function aI(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var X0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{X0&&(window.__reactRouterVersion="7.1.1")}catch{}function lI({basename:t,children:e,window:n}){let r=L.useRef();r.current==null&&(r.current=Q2({window:n,v5Compat:!0}));let i=r.current,[o,s]=L.useState({action:i.action,location:i.location}),l=L.useCallback(u=>{L.startTransition(()=>s(u))},[s]);return L.useLayoutEffect(()=>i.listen(l),[i,l]),L.createElement(FT,{basename:t,children:e,location:o.location,navigationType:o.action,navigator:i})}var J0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ki=L.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:o,replace:s,state:l,target:u,to:c,preventScrollReset:d,viewTransition:m,...p},w){let{basename:C}=L.useContext(on),k=typeof c=="string"&&J0.test(c),R,_=!1;if(typeof c=="string"&&k&&(R=c,X0))try{let E=new URL(window.location.href),I=c.startsWith("//")?new URL(E.protocol+c):new URL(c),A=nr(I.pathname,C);I.origin===E.origin&&A!=null?c=A+I.search+I.hash:_=!0}catch{tn(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let y=ET(c,{relative:i}),[T,N,F]=rI(r,p),j=fI(c,{replace:s,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:m});function S(E){e&&e(E),E.defaultPrevented||j(E)}let v=L.createElement("a",{...p,...F,href:R||y,onClick:_||o?e:S,ref:aI(w,N),target:u,"data-discover":!k&&n==="render"?"true":void 0});return T&&!k?L.createElement(L.Fragment,null,v,L.createElement(iI,{page:y})):v});ki.displayName="Link";var pf=L.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:o,to:s,viewTransition:l,children:u,...c},d){let m=ws(s,{relative:c.relative}),p=jr(),w=L.useContext(Bl),{navigator:C,basename:k}=L.useContext(on),R=w!=null&&gI(m)&&l===!0,_=C.encodeLocation?C.encodeLocation(m).pathname:m.pathname,y=p.pathname,T=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;n||(y=y.toLowerCase(),T=T?T.toLowerCase():null,_=_.toLowerCase()),T&&k&&(T=nr(T,k)||T);const N=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let F=y===_||!i&&y.startsWith(_)&&y.charAt(N)==="/",j=T!=null&&(T===_||!i&&T.startsWith(_)&&T.charAt(_.length)==="/"),S={isActive:F,isPending:j,isTransitioning:R},v=F?e:void 0,E;typeof r=="function"?E=r(S):E=[r,F?"active":null,j?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let I=typeof o=="function"?o(S):o;return L.createElement(ki,{...c,"aria-current":v,className:E,ref:d,style:I,to:s,viewTransition:l},typeof u=="function"?u(S):u)});pf.displayName="NavLink";var uI=L.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:o,method:s=Na,action:l,onSubmit:u,relative:c,preventScrollReset:d,viewTransition:m,...p},w)=>{let C=mI(),k=pI(l,{relative:c}),R=s.toLowerCase()==="get"?"get":"post",_=typeof l=="string"&&J0.test(l),y=T=>{if(u&&u(T),T.defaultPrevented)return;T.preventDefault();let N=T.nativeEvent.submitter,F=(N==null?void 0:N.getAttribute("formmethod"))||s;C(N||T.currentTarget,{fetcherKey:e,method:F,navigate:n,replace:i,state:o,relative:c,preventScrollReset:d,viewTransition:m})};return L.createElement("form",{ref:w,method:R,action:k,onSubmit:r?u:y,...p,"data-discover":!_&&t==="render"?"true":void 0})});uI.displayName="Form";function cI(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Z0(t){let e=L.useContext($i);return Se(e,cI(t)),e}function fI(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:o,viewTransition:s}={}){let l=K0(),u=jr(),c=ws(t,{relative:o});return L.useCallback(d=>{if(BT(d,e)){d.preventDefault();let m=n!==void 0?n:is(u)===is(c);l(t,{replace:m,state:r,preventScrollReset:i,relative:o,viewTransition:s})}},[u,l,c,n,r,e,t,i,o,s])}var hI=0,dI=()=>`__${String(++hI)}__`;function mI(){let{router:t}=Z0("useSubmit"),{basename:e}=L.useContext(on),n=DT();return L.useCallback(async(r,i={})=>{let{action:o,method:s,encType:l,formData:u,body:c}=qT(r,e);if(i.navigate===!1){let d=i.fetcherKey||dI();await t.fetch(d,n,i.action||o,{preventScrollReset:i.preventScrollReset,formData:u,body:c,formMethod:i.method||s,formEncType:i.encType||l,flushSync:i.flushSync})}else await t.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:u,body:c,formMethod:i.method||s,formEncType:i.encType||l,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[t,e,n])}function pI(t,{relative:e}={}){let{basename:n}=L.useContext(on),r=L.useContext(sn);Se(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),o={...ws(t||".",{relative:e})},s=jr();if(t==null){o.search=s.search;let l=new URLSearchParams(o.search),u=l.getAll("index");if(u.some(d=>d==="")){l.delete("index"),u.filter(m=>m).forEach(m=>l.append("index",m));let d=l.toString();o.search=d?`?${d}`:""}}return(!t||t===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:yn([n,o.pathname])),is(o)}function gI(t,e={}){let n=L.useContext(H0);Se(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Z0("useViewTransitionState"),i=ws(t,{relative:e.relative});if(!n.isTransitioning)return!1;let o=nr(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=nr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return hl(i.pathname,s)!=null||hl(i.pathname,o)!=null}new TextEncoder;const vI=()=>{const[t,e]=L.useState(!1);L.useEffect(()=>{const r=()=>{e(window.scrollY>10)};return window.addEventListener("scroll",r),r(),()=>window.removeEventListener("scroll",r)},[]);const n=r=>{if(r.startsWith("#")){const i=document.querySelector(r);i&&i.scrollIntoView({behavior:"smooth"})}};return O.jsx("header",{className:`nav-enter fixed left-0 top-0 z-50 w-full border-b px-8 backdrop-blur-xl transition-all duration-300 ${t?"border-white/20 bg-bg-light py-4 shadow-lg":"border-transparent py-6"}`,children:O.jsxs("div",{className:"mx-auto flex max-w-300 items-center justify-between",children:[O.jsxs("div",{className:"text-2xl font-bold text-text-dark",children:["<AK",O.jsx("span",{className:"text-primary",children:"/"}),">"]}),O.jsx("nav",{"aria-label":"Main navigation",children:O.jsxs("ul",{className:"flex list-none items-center gap-8",children:[O.jsx("li",{children:O.jsx(pf,{to:"/",end:!0,className:"font-mono text-sm text-text-dark transition-colors hover:text-primary",children:"Home"})}),O.jsx("li",{children:O.jsx(pf,{to:"/projects/",className:"font-mono text-sm text-text-dark transition-colors hover:text-primary",children:"Projects"})}),O.jsx("li",{children:O.jsx("a",{href:"#contact",className:"font-mono text-sm text-text-dark transition-colors hover:text-primary",onClick:r=>{r.preventDefault(),n("#contact")},children:"Contact"})}),O.jsx("li",{children:O.jsx("a",{href:"https://drive.google.com/file/d/1TwogLvijhMK0z0uR4B1rsdYMLWVitkO4/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:"mt-8 rounded border border-primary px-4 py-2 font-mono text-sm text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",children:"resume"})})]})})]})})},yI=()=>{const[t,e]=L.useState(0);L.useEffect(()=>{const r=()=>{e(window.scrollY)};return window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]);const n=Math.min(t/window.innerHeight,.5);return O.jsxs("div",{className:"sticky top-0 inset-0 z-0 h-[90vh] w-screen overflow-hidden",children:[O.jsx("div",{className:"absolute inset-0 bg-[url('assets/synthwave.png')] bg-cover bg-no-repeat bg-position-[0%_40%] opacity-50 will-change-transform",style:{transform:`translateY(${t*.08}px)`}}),O.jsxs("div",{"data-reveal":!0,className:"absolute text-text-dark inset-0 flex perspective-normal items-center justify-center",children:[O.jsx("div",{className:"absolute p-25 bg-white rounded-full blur-xl w-[60%] will-change-transform",style:{transform:`translateY(${t*.15}px) scale(${1-n*.2})`,opacity:1-n*.8}}),O.jsx("h1",{className:"text-6xl font-['Sekuya'] w-[60%] text-center transform-3d rotate-x-25 will-change-transform",style:{transform:`translateY(${-t*.08}px) rotateX(25deg)`,opacity:1-n*1},children:"I Turn ideas to experiences"})]})]})},Zh=()=>O.jsxs("div",{id:"contact",className:"mt-15 mx-auto max-w-150 px-8 py-[0.8rem] text-center text-text-dark",children:[O.jsx("h2",{className:"justify-center font-mono mb-12 text-xl underline",children:"Initiate Connection"}),O.jsx("p",{className:"mb-12 text-[1.1rem]",children:"Currently focusing my efforts on deep-dive backend roles within the Java and Spring Boot ecosystems. My inbox is always open for technical discussions, architectural debates, or career opportunities."}),O.jsx("a",{href:"mailto:avnk.24598@gmail.com",className:"mt-8 rounded border border-primary px-4 py-2 font-mono text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",children:"Send a mail!"}),O.jsx("div",{className:"mt-15 text-center",children:O.jsxs("div",{className:"mb-4 flex justify-center gap-6",children:[O.jsx("a",{className:"text-text-dark transition-colors duration-200 hover:text-primary",href:"https://www.github.com/avnk-342",target:"_blank",rel:"noreferrer",title:"View github profile",children:O.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"contact-logos",viewBox:"0 0 16 16",children:O.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"})})}),O.jsx("a",{className:"text-text-dark transition-colors duration-200 hover:text-primary",href:"https://www.linkedin.com/in/anmol-koundal",target:"_blank",rel:"noreferrer",title:"View Linkedin Profile",children:O.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"contact-logos",viewBox:"0 0 16 16",children:O.jsx("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"})})})]})})]});var Qp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_I=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],l=t[n++],u=((i&7)<<18|(o&63)<<12|(s&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},t1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,l=s?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=o>>2,m=(o&3)<<4|l>>4;let p=(l&15)<<2|c>>6,w=c&63;u||(w=64,s||(p=64)),r.push(n[d],n[m],n[p],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(e1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_I(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||l==null||c==null||m==null)throw new wI;const p=o<<2|l>>4;if(r.push(p),c!==64){const w=l<<4&240|c>>2;if(r.push(w),m!==64){const C=c<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const EI=function(t){const e=e1(t);return t1.encodeByteArray(e,!0)},dl=function(t){return EI(t).replace(/\./g,"")},SI=function(t){try{return t1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function TI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const II=()=>TI().__FIREBASE_DEFAULTS__,xI=()=>{if(typeof process>"u"||typeof Qp>"u")return;const t=Qp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&SI(t[1]);return e&&JSON.parse(e)},ed=()=>{try{return II()||xI()||AI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},CI=t=>{var e,n;return(n=(e=ed())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},kI=t=>{const e=CI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},n1=()=>{var t;return(t=ed())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function bI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[dl(JSON.stringify(n)),dl(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function NI(){var t;const e=(t=ed())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DI(){return!NI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function LI(){try{return typeof indexedDB=="object"}catch{return!1}}function VI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI="FirebaseError";class Ui extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=OI,Object.setPrototypeOf(this,Ui.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,r1.prototype.create)}}class r1{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?FI(o,r):"Error",l=`${this.serviceName}: ${s} (${i}).`;return new Ui(i,l,r)}}function FI(t,e){return t.replace(MI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const MI=/\{\$([^}]+)}/g;function gf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(Yp(o)&&Yp(s)){if(!gf(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Yp(t){return t!==null&&typeof t=="object"}/**
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
 */function i1(t){return t&&t._delegate?t._delegate:t}class os{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new PI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($I(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jI(t){return t===wr?void 0:t}function $I(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const BI={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},HI=re.INFO,WI={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},qI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=WI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let o1=class{constructor(e){this.name=e,this._logLevel=HI,this._logHandler=qI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}};const KI=(t,e)=>e.some(n=>t instanceof n);let Xp,Jp;function GI(){return Xp||(Xp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QI(){return Jp||(Jp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const s1=new WeakMap,vf=new WeakMap,a1=new WeakMap,sc=new WeakMap,td=new WeakMap;function YI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Yn(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&s1.set(n,t)}).catch(()=>{}),td.set(e,t),e}function XI(t){if(vf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});vf.set(t,e)}let yf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||a1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function JI(t){yf=t(yf)}function ZI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ac(this),e,...n);return a1.set(r,e.sort?e.sort():[e]),Yn(r)}:QI().includes(t)?function(...e){return t.apply(ac(this),e),Yn(s1.get(this))}:function(...e){return Yn(t.apply(ac(this),e))}}function ex(t){return typeof t=="function"?ZI(t):(t instanceof IDBTransaction&&XI(t),KI(t,GI())?new Proxy(t,yf):t)}function Yn(t){if(t instanceof IDBRequest)return YI(t);if(sc.has(t))return sc.get(t);const e=ex(t);return e!==t&&(sc.set(t,e),td.set(e,t)),e}const ac=t=>td.get(t);function tx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),l=Yn(s);return r&&s.addEventListener("upgradeneeded",u=>{r(Yn(s.result),u.oldVersion,u.newVersion,Yn(s.transaction),u)}),n&&s.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const nx=["get","getKey","getAll","getAllKeys","count"],rx=["put","add","delete","clear"],lc=new Map;function Zp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lc.get(e))return lc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=rx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||nx.includes(n)))return;const o=async function(s,...l){const u=this.transaction(s,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return lc.set(e,o),o}JI(t=>({...t,get:(e,n,r)=>Zp(e,n)||t.get(e,n,r),has:(e,n)=>!!Zp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ox(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ox(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _f="@firebase/app",eg="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new o1("@firebase/app"),sx="@firebase/app-compat",ax="@firebase/analytics-compat",lx="@firebase/analytics",ux="@firebase/app-check-compat",cx="@firebase/app-check",fx="@firebase/auth",hx="@firebase/auth-compat",dx="@firebase/database",mx="@firebase/data-connect",px="@firebase/database-compat",gx="@firebase/functions",vx="@firebase/functions-compat",yx="@firebase/installations",_x="@firebase/installations-compat",wx="@firebase/messaging",Ex="@firebase/messaging-compat",Sx="@firebase/performance",Tx="@firebase/performance-compat",Ix="@firebase/remote-config",xx="@firebase/remote-config-compat",Ax="@firebase/storage",Cx="@firebase/storage-compat",kx="@firebase/firestore",Px="@firebase/vertexai",bx="@firebase/firestore-compat",Rx="firebase",Nx="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="[DEFAULT]",Dx={[_f]:"fire-core",[sx]:"fire-core-compat",[lx]:"fire-analytics",[ax]:"fire-analytics-compat",[cx]:"fire-app-check",[ux]:"fire-app-check-compat",[fx]:"fire-auth",[hx]:"fire-auth-compat",[dx]:"fire-rtdb",[mx]:"fire-data-connect",[px]:"fire-rtdb-compat",[gx]:"fire-fn",[vx]:"fire-fn-compat",[yx]:"fire-iid",[_x]:"fire-iid-compat",[wx]:"fire-fcm",[Ex]:"fire-fcm-compat",[Sx]:"fire-perf",[Tx]:"fire-perf-compat",[Ix]:"fire-rc",[xx]:"fire-rc-compat",[Ax]:"fire-gcs",[Cx]:"fire-gcs-compat",[kx]:"fire-fst",[bx]:"fire-fst-compat",[Px]:"fire-vertex","fire-js":"fire-js",[Rx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=new Map,Lx=new Map,Ef=new Map;function tg(t,e){try{t.container.addComponent(e)}catch(n){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pl(t){const e=t.name;if(Ef.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;Ef.set(e,t);for(const n of ml.values())tg(n,t);for(const n of Lx.values())tg(n,t);return!0}function Vx(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xn=new r1("app","Firebase",Ox);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new os("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx=Nx;function l1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Xn.create("bad-app-name",{appName:String(i)});if(n||(n=n1()),!n)throw Xn.create("no-options");const o=ml.get(i);if(o){if(gf(n,o.options)&&gf(r,o.config))return o;throw Xn.create("duplicate-app",{appName:i})}const s=new UI(i);for(const u of Ef.values())s.addComponent(u);const l=new Fx(n,r,s);return ml.set(i,l),l}function zx(t=wf){const e=ml.get(t);if(!e&&t===wf&&n1())return l1();if(!e)throw Xn.create("no-app",{appName:t});return e}function vi(t,e,n){var r;let i=(r=Dx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&l.push("and"),s&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(l.join(" "));return}pl(new os(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const jx="firebase-heartbeat-database",$x=1,ss="firebase-heartbeat-store";let uc=null;function u1(){return uc||(uc=tx(jx,$x,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ss)}catch(n){console.warn(n)}}}}).catch(t=>{throw Xn.create("idb-open",{originalErrorMessage:t.message})})),uc}async function Ux(t){try{const n=(await u1()).transaction(ss),r=await n.objectStore(ss).get(c1(t));return await n.done,r}catch(e){if(e instanceof Ui)Tn.warn(e.message);else{const n=Xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(n.message)}}}async function ng(t,e){try{const r=(await u1()).transaction(ss,"readwrite");await r.objectStore(ss).put(e,c1(t)),await r.done}catch(n){if(n instanceof Ui)Tn.warn(n.message);else{const r=Xn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tn.warn(r.message)}}}function c1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Bx=1024,Hx=30*24*60*60*1e3;class Wx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=rg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const l=new Date(s.date).valueOf();return Date.now()-l<=Hx}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Tn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rg(),{heartbeatsToSend:r,unsentEntries:i}=qx(this._heartbeatsCache.heartbeats),o=dl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Tn.warn(n),""}}}function rg(){return new Date().toISOString().substring(0,10)}function qx(t,e=Bx){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),ig(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ig(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Kx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LI()?VI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ux(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ig(t){return dl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(t){pl(new os("platform-logger",e=>new ix(e),"PRIVATE")),pl(new os("heartbeat",e=>new Wx(e),"PRIVATE")),vi(_f,eg,t),vi(_f,eg,"esm2017"),vi("fire-js","")}Gx("");var og=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kr,f1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,v){function E(){}E.prototype=v.prototype,S.D=v.prototype,S.prototype=new E,S.prototype.constructor=S,S.C=function(I,A,P){for(var x=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)x[ft-2]=arguments[ft];return v.prototype[A].apply(I,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,v,E){E||(E=0);var I=Array(16);if(typeof v=="string")for(var A=0;16>A;++A)I[A]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(A=0;16>A;++A)I[A]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=S.g[0],E=S.g[1],A=S.g[2];var P=S.g[3],x=v+(P^E&(A^P))+I[0]+3614090360&4294967295;v=E+(x<<7&4294967295|x>>>25),x=P+(A^v&(E^A))+I[1]+3905402710&4294967295,P=v+(x<<12&4294967295|x>>>20),x=A+(E^P&(v^E))+I[2]+606105819&4294967295,A=P+(x<<17&4294967295|x>>>15),x=E+(v^A&(P^v))+I[3]+3250441966&4294967295,E=A+(x<<22&4294967295|x>>>10),x=v+(P^E&(A^P))+I[4]+4118548399&4294967295,v=E+(x<<7&4294967295|x>>>25),x=P+(A^v&(E^A))+I[5]+1200080426&4294967295,P=v+(x<<12&4294967295|x>>>20),x=A+(E^P&(v^E))+I[6]+2821735955&4294967295,A=P+(x<<17&4294967295|x>>>15),x=E+(v^A&(P^v))+I[7]+4249261313&4294967295,E=A+(x<<22&4294967295|x>>>10),x=v+(P^E&(A^P))+I[8]+1770035416&4294967295,v=E+(x<<7&4294967295|x>>>25),x=P+(A^v&(E^A))+I[9]+2336552879&4294967295,P=v+(x<<12&4294967295|x>>>20),x=A+(E^P&(v^E))+I[10]+4294925233&4294967295,A=P+(x<<17&4294967295|x>>>15),x=E+(v^A&(P^v))+I[11]+2304563134&4294967295,E=A+(x<<22&4294967295|x>>>10),x=v+(P^E&(A^P))+I[12]+1804603682&4294967295,v=E+(x<<7&4294967295|x>>>25),x=P+(A^v&(E^A))+I[13]+4254626195&4294967295,P=v+(x<<12&4294967295|x>>>20),x=A+(E^P&(v^E))+I[14]+2792965006&4294967295,A=P+(x<<17&4294967295|x>>>15),x=E+(v^A&(P^v))+I[15]+1236535329&4294967295,E=A+(x<<22&4294967295|x>>>10),x=v+(A^P&(E^A))+I[1]+4129170786&4294967295,v=E+(x<<5&4294967295|x>>>27),x=P+(E^A&(v^E))+I[6]+3225465664&4294967295,P=v+(x<<9&4294967295|x>>>23),x=A+(v^E&(P^v))+I[11]+643717713&4294967295,A=P+(x<<14&4294967295|x>>>18),x=E+(P^v&(A^P))+I[0]+3921069994&4294967295,E=A+(x<<20&4294967295|x>>>12),x=v+(A^P&(E^A))+I[5]+3593408605&4294967295,v=E+(x<<5&4294967295|x>>>27),x=P+(E^A&(v^E))+I[10]+38016083&4294967295,P=v+(x<<9&4294967295|x>>>23),x=A+(v^E&(P^v))+I[15]+3634488961&4294967295,A=P+(x<<14&4294967295|x>>>18),x=E+(P^v&(A^P))+I[4]+3889429448&4294967295,E=A+(x<<20&4294967295|x>>>12),x=v+(A^P&(E^A))+I[9]+568446438&4294967295,v=E+(x<<5&4294967295|x>>>27),x=P+(E^A&(v^E))+I[14]+3275163606&4294967295,P=v+(x<<9&4294967295|x>>>23),x=A+(v^E&(P^v))+I[3]+4107603335&4294967295,A=P+(x<<14&4294967295|x>>>18),x=E+(P^v&(A^P))+I[8]+1163531501&4294967295,E=A+(x<<20&4294967295|x>>>12),x=v+(A^P&(E^A))+I[13]+2850285829&4294967295,v=E+(x<<5&4294967295|x>>>27),x=P+(E^A&(v^E))+I[2]+4243563512&4294967295,P=v+(x<<9&4294967295|x>>>23),x=A+(v^E&(P^v))+I[7]+1735328473&4294967295,A=P+(x<<14&4294967295|x>>>18),x=E+(P^v&(A^P))+I[12]+2368359562&4294967295,E=A+(x<<20&4294967295|x>>>12),x=v+(E^A^P)+I[5]+4294588738&4294967295,v=E+(x<<4&4294967295|x>>>28),x=P+(v^E^A)+I[8]+2272392833&4294967295,P=v+(x<<11&4294967295|x>>>21),x=A+(P^v^E)+I[11]+1839030562&4294967295,A=P+(x<<16&4294967295|x>>>16),x=E+(A^P^v)+I[14]+4259657740&4294967295,E=A+(x<<23&4294967295|x>>>9),x=v+(E^A^P)+I[1]+2763975236&4294967295,v=E+(x<<4&4294967295|x>>>28),x=P+(v^E^A)+I[4]+1272893353&4294967295,P=v+(x<<11&4294967295|x>>>21),x=A+(P^v^E)+I[7]+4139469664&4294967295,A=P+(x<<16&4294967295|x>>>16),x=E+(A^P^v)+I[10]+3200236656&4294967295,E=A+(x<<23&4294967295|x>>>9),x=v+(E^A^P)+I[13]+681279174&4294967295,v=E+(x<<4&4294967295|x>>>28),x=P+(v^E^A)+I[0]+3936430074&4294967295,P=v+(x<<11&4294967295|x>>>21),x=A+(P^v^E)+I[3]+3572445317&4294967295,A=P+(x<<16&4294967295|x>>>16),x=E+(A^P^v)+I[6]+76029189&4294967295,E=A+(x<<23&4294967295|x>>>9),x=v+(E^A^P)+I[9]+3654602809&4294967295,v=E+(x<<4&4294967295|x>>>28),x=P+(v^E^A)+I[12]+3873151461&4294967295,P=v+(x<<11&4294967295|x>>>21),x=A+(P^v^E)+I[15]+530742520&4294967295,A=P+(x<<16&4294967295|x>>>16),x=E+(A^P^v)+I[2]+3299628645&4294967295,E=A+(x<<23&4294967295|x>>>9),x=v+(A^(E|~P))+I[0]+4096336452&4294967295,v=E+(x<<6&4294967295|x>>>26),x=P+(E^(v|~A))+I[7]+1126891415&4294967295,P=v+(x<<10&4294967295|x>>>22),x=A+(v^(P|~E))+I[14]+2878612391&4294967295,A=P+(x<<15&4294967295|x>>>17),x=E+(P^(A|~v))+I[5]+4237533241&4294967295,E=A+(x<<21&4294967295|x>>>11),x=v+(A^(E|~P))+I[12]+1700485571&4294967295,v=E+(x<<6&4294967295|x>>>26),x=P+(E^(v|~A))+I[3]+2399980690&4294967295,P=v+(x<<10&4294967295|x>>>22),x=A+(v^(P|~E))+I[10]+4293915773&4294967295,A=P+(x<<15&4294967295|x>>>17),x=E+(P^(A|~v))+I[1]+2240044497&4294967295,E=A+(x<<21&4294967295|x>>>11),x=v+(A^(E|~P))+I[8]+1873313359&4294967295,v=E+(x<<6&4294967295|x>>>26),x=P+(E^(v|~A))+I[15]+4264355552&4294967295,P=v+(x<<10&4294967295|x>>>22),x=A+(v^(P|~E))+I[6]+2734768916&4294967295,A=P+(x<<15&4294967295|x>>>17),x=E+(P^(A|~v))+I[13]+1309151649&4294967295,E=A+(x<<21&4294967295|x>>>11),x=v+(A^(E|~P))+I[4]+4149444226&4294967295,v=E+(x<<6&4294967295|x>>>26),x=P+(E^(v|~A))+I[11]+3174756917&4294967295,P=v+(x<<10&4294967295|x>>>22),x=A+(v^(P|~E))+I[2]+718787259&4294967295,A=P+(x<<15&4294967295|x>>>17),x=E+(P^(A|~v))+I[9]+3951481745&4294967295,S.g[0]=S.g[0]+v&4294967295,S.g[1]=S.g[1]+(A+(x<<21&4294967295|x>>>11))&4294967295,S.g[2]=S.g[2]+A&4294967295,S.g[3]=S.g[3]+P&4294967295}r.prototype.u=function(S,v){v===void 0&&(v=S.length);for(var E=v-this.blockSize,I=this.B,A=this.h,P=0;P<v;){if(A==0)for(;P<=E;)i(this,S,P),P+=this.blockSize;if(typeof S=="string"){for(;P<v;)if(I[A++]=S.charCodeAt(P++),A==this.blockSize){i(this,I),A=0;break}}else for(;P<v;)if(I[A++]=S[P++],A==this.blockSize){i(this,I),A=0;break}}this.h=A,this.o+=v},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var v=1;v<S.length-8;++v)S[v]=0;var E=8*this.o;for(v=S.length-8;v<S.length;++v)S[v]=E&255,E/=256;for(this.u(S),S=Array(16),v=E=0;4>v;++v)for(var I=0;32>I;I+=8)S[E++]=this.g[v]>>>I&255;return S};function o(S,v){var E=l;return Object.prototype.hasOwnProperty.call(E,S)?E[S]:E[S]=v(S)}function s(S,v){this.h=v;for(var E=[],I=!0,A=S.length-1;0<=A;A--){var P=S[A]|0;I&&P==v||(E[A]=P,I=!1)}this.g=E}var l={};function u(S){return-128<=S&&128>S?o(S,function(v){return new s([v|0],0>v?-1:0)}):new s([S|0],0>S?-1:0)}function c(S){if(isNaN(S)||!isFinite(S))return m;if(0>S)return R(c(-S));for(var v=[],E=1,I=0;S>=E;I++)v[I]=S/E|0,E*=4294967296;return new s(v,0)}function d(S,v){if(S.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S.charAt(0)=="-")return R(d(S.substring(1),v));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(v,8)),I=m,A=0;A<S.length;A+=8){var P=Math.min(8,S.length-A),x=parseInt(S.substring(A,A+P),v);8>P?(P=c(Math.pow(v,P)),I=I.j(P).add(c(x))):(I=I.j(E),I=I.add(c(x)))}return I}var m=u(0),p=u(1),w=u(16777216);t=s.prototype,t.m=function(){if(k(this))return-R(this).m();for(var S=0,v=1,E=0;E<this.g.length;E++){var I=this.i(E);S+=(0<=I?I:4294967296+I)*v,v*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(C(this))return"0";if(k(this))return"-"+R(this).toString(S);for(var v=c(Math.pow(S,6)),E=this,I="";;){var A=N(E,v).g;E=_(E,A.j(v));var P=((0<E.g.length?E.g[0]:E.h)>>>0).toString(S);if(E=A,C(E))return P+I;for(;6>P.length;)P="0"+P;I=P+I}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function C(S){if(S.h!=0)return!1;for(var v=0;v<S.g.length;v++)if(S.g[v]!=0)return!1;return!0}function k(S){return S.h==-1}t.l=function(S){return S=_(this,S),k(S)?-1:C(S)?0:1};function R(S){for(var v=S.g.length,E=[],I=0;I<v;I++)E[I]=~S.g[I];return new s(E,~S.h).add(p)}t.abs=function(){return k(this)?R(this):this},t.add=function(S){for(var v=Math.max(this.g.length,S.g.length),E=[],I=0,A=0;A<=v;A++){var P=I+(this.i(A)&65535)+(S.i(A)&65535),x=(P>>>16)+(this.i(A)>>>16)+(S.i(A)>>>16);I=x>>>16,P&=65535,x&=65535,E[A]=x<<16|P}return new s(E,E[E.length-1]&-2147483648?-1:0)};function _(S,v){return S.add(R(v))}t.j=function(S){if(C(this)||C(S))return m;if(k(this))return k(S)?R(this).j(R(S)):R(R(this).j(S));if(k(S))return R(this.j(R(S)));if(0>this.l(w)&&0>S.l(w))return c(this.m()*S.m());for(var v=this.g.length+S.g.length,E=[],I=0;I<2*v;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<S.g.length;A++){var P=this.i(I)>>>16,x=this.i(I)&65535,ft=S.i(A)>>>16,Ht=S.i(A)&65535;E[2*I+2*A]+=x*Ht,y(E,2*I+2*A),E[2*I+2*A+1]+=P*Ht,y(E,2*I+2*A+1),E[2*I+2*A+1]+=x*ft,y(E,2*I+2*A+1),E[2*I+2*A+2]+=P*ft,y(E,2*I+2*A+2)}for(I=0;I<v;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=v;I<2*v;I++)E[I]=0;return new s(E,0)};function y(S,v){for(;(S[v]&65535)!=S[v];)S[v+1]+=S[v]>>>16,S[v]&=65535,v++}function T(S,v){this.g=S,this.h=v}function N(S,v){if(C(v))throw Error("division by zero");if(C(S))return new T(m,m);if(k(S))return v=N(R(S),v),new T(R(v.g),R(v.h));if(k(v))return v=N(S,R(v)),new T(R(v.g),v.h);if(30<S.g.length){if(k(S)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var E=p,I=v;0>=I.l(S);)E=F(E),I=F(I);var A=j(E,1),P=j(I,1);for(I=j(I,2),E=j(E,2);!C(I);){var x=P.add(I);0>=x.l(S)&&(A=A.add(E),P=x),I=j(I,1),E=j(E,1)}return v=_(S,A.j(v)),new T(A,v)}for(A=m;0<=S.l(v);){for(E=Math.max(1,Math.floor(S.m()/v.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),P=c(E),x=P.j(v);k(x)||0<x.l(S);)E-=I,P=c(E),x=P.j(v);C(P)&&(P=p),A=A.add(P),S=_(S,x)}return new T(A,S)}t.A=function(S){return N(this,S).h},t.and=function(S){for(var v=Math.max(this.g.length,S.g.length),E=[],I=0;I<v;I++)E[I]=this.i(I)&S.i(I);return new s(E,this.h&S.h)},t.or=function(S){for(var v=Math.max(this.g.length,S.g.length),E=[],I=0;I<v;I++)E[I]=this.i(I)|S.i(I);return new s(E,this.h|S.h)},t.xor=function(S){for(var v=Math.max(this.g.length,S.g.length),E=[],I=0;I<v;I++)E[I]=this.i(I)^S.i(I);return new s(E,this.h^S.h)};function F(S){for(var v=S.g.length+1,E=[],I=0;I<v;I++)E[I]=S.i(I)<<1|S.i(I-1)>>>31;return new s(E,S.h)}function j(S,v){var E=v>>5;v%=32;for(var I=S.g.length-E,A=[],P=0;P<I;P++)A[P]=0<v?S.i(P+E)>>>v|S.i(P+E+1)<<32-v:S.i(P+E);return new s(A,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,f1=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=c,s.fromString=d,kr=s}).apply(typeof og<"u"?og:typeof self<"u"?self:typeof window<"u"?window:{});var ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var h1,wo,d1,La,Sf,m1,p1,g1;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,h){return a==Array.prototype||a==Object.prototype||(a[f]=h.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ca=="object"&&ca];for(var f=0;f<a.length;++f){var h=a[f];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(a,f){if(f)e:{var h=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var b=a[g];if(!(b in h))break e;h=h[b]}a=a[a.length-1],g=h[a],f=f(g),f!=g&&f!=null&&e(h,a,{configurable:!0,writable:!0,value:f})}}function o(a,f){a instanceof String&&(a+="");var h=0,g=!1,b={next:function(){if(!g&&h<a.length){var D=h++;return{value:f(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(a){return a||function(){return o(this,function(f,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},l=this||self;function u(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function c(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function d(a,f,h){return a.call.apply(a.bind,arguments)}function m(a,f,h){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,g),a.apply(f,b)}}return function(){return a.apply(f,arguments)}}function p(a,f,h){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:m,p.apply(null,arguments)}function w(a,f){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,f){function h(){}h.prototype=f.prototype,a.aa=f.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(g,b,D){for(var $=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)$[fe-2]=arguments[fe];return f.prototype[b].apply(g,$)}}function k(a){const f=a.length;if(0<f){const h=Array(f);for(let g=0;g<f;g++)h[g]=a[g];return h}return[]}function R(a,f){for(let h=1;h<arguments.length;h++){const g=arguments[h];if(u(g)){const b=a.length||0,D=g.length||0;a.length=b+D;for(let $=0;$<D;$++)a[b+$]=g[$]}else a.push(g)}}class _{constructor(f,h){this.i=f,this.j=h,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function y(a){return/^[\s\xa0]*$/.test(a)}function T(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function N(a){return N[" "](a),a}N[" "]=function(){};var F=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function j(a,f,h){for(const g in a)f.call(h,a[g],g,a)}function S(a,f){for(const h in a)f.call(void 0,a[h],h,a)}function v(a){const f={};for(const h in a)f[h]=a[h];return f}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,f){let h,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(h in g)a[h]=g[h];for(let D=0;D<E.length;D++)h=E[D],Object.prototype.hasOwnProperty.call(g,h)&&(a[h]=g[h])}}function A(a){var f=1;a=a.split(":");const h=[];for(;0<f&&a.length;)h.push(a.shift()),f--;return a.length&&h.push(a.join(":")),h}function P(a){l.setTimeout(()=>{throw a},0)}function x(){var a=Y;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class ft{constructor(){this.h=this.g=null}add(f,h){const g=Ht.get();g.set(f,h),this.h?this.h.next=g:this.g=g,this.h=g}}var Ht=new _(()=>new J,a=>a.reset());class J{constructor(){this.next=this.g=this.h=null}set(f,h){this.h=f,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Wt,B=!1,Y=new ft,ee=()=>{const a=l.Promise.resolve(void 0);Wt=()=>{a.then(_e)}};var _e=()=>{for(var a;a=x();){try{a.h.call(a.g)}catch(h){P(h)}var f=Ht;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}B=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ce(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var an=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};l.addEventListener("test",h,f),l.removeEventListener("test",h,f)}catch{}return a}();function ln(a,f){if(Ce.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(F){e:{try{N(f.nodeName);var b=!0;break e}catch{}b=!1}b||(f=null)}}else h=="mouseover"?f=a.fromElement:h=="mouseout"&&(f=a.toElement);this.relatedTarget=f,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:un[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ln.aa.h.call(this)}}C(ln,Ce);var un={2:"touch",3:"pen",4:"mouse"};ln.prototype.h=function(){ln.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var cn="closure_listenable_"+(1e6*Math.random()|0),Vw=0;function Ow(a,f,h,g,b){this.listener=a,this.proxy=null,this.src=f,this.type=h,this.capture=!!g,this.ha=b,this.key=++Vw,this.da=this.fa=!1}function ks(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ps(a){this.src=a,this.g={},this.h=0}Ps.prototype.add=function(a,f,h,g,b){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var $=cu(a,f,g,b);return-1<$?(f=a[$],h||(f.fa=!1)):(f=new Ow(f,this.src,D,!!g,b),f.fa=h,a.push(f)),f};function uu(a,f){var h=f.type;if(h in a.g){var g=a.g[h],b=Array.prototype.indexOf.call(g,f,void 0),D;(D=0<=b)&&Array.prototype.splice.call(g,b,1),D&&(ks(f),a.g[h].length==0&&(delete a.g[h],a.h--))}}function cu(a,f,h,g){for(var b=0;b<a.length;++b){var D=a[b];if(!D.da&&D.listener==f&&D.capture==!!h&&D.ha==g)return b}return-1}var fu="closure_lm_"+(1e6*Math.random()|0),hu={};function Ld(a,f,h,g,b){if(Array.isArray(f)){for(var D=0;D<f.length;D++)Ld(a,f[D],h,g,b);return null}return h=Fd(h),a&&a[cn]?a.K(f,h,c(g)?!!g.capture:!!g,b):Fw(a,f,h,!1,g,b)}function Fw(a,f,h,g,b,D){if(!f)throw Error("Invalid event type");var $=c(b)?!!b.capture:!!b,fe=mu(a);if(fe||(a[fu]=fe=new Ps(a)),h=fe.add(f,h,g,$,D),h.proxy)return h;if(g=Mw(),h.proxy=g,g.src=a,g.listener=h,a.addEventListener)an||(b=$),b===void 0&&(b=!1),a.addEventListener(f.toString(),g,b);else if(a.attachEvent)a.attachEvent(Od(f.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Mw(){function a(h){return f.call(a.src,a.listener,h)}const f=zw;return a}function Vd(a,f,h,g,b){if(Array.isArray(f))for(var D=0;D<f.length;D++)Vd(a,f[D],h,g,b);else g=c(g)?!!g.capture:!!g,h=Fd(h),a&&a[cn]?(a=a.i,f=String(f).toString(),f in a.g&&(D=a.g[f],h=cu(D,h,g,b),-1<h&&(ks(D[h]),Array.prototype.splice.call(D,h,1),D.length==0&&(delete a.g[f],a.h--)))):a&&(a=mu(a))&&(f=a.g[f.toString()],a=-1,f&&(a=cu(f,h,g,b)),(h=-1<a?f[a]:null)&&du(h))}function du(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[cn])uu(f.i,a);else{var h=a.type,g=a.proxy;f.removeEventListener?f.removeEventListener(h,g,a.capture):f.detachEvent?f.detachEvent(Od(h),g):f.addListener&&f.removeListener&&f.removeListener(g),(h=mu(f))?(uu(h,a),h.h==0&&(h.src=null,f[fu]=null)):ks(a)}}}function Od(a){return a in hu?hu[a]:hu[a]="on"+a}function zw(a,f){if(a.da)a=!0;else{f=new ln(f,this);var h=a.listener,g=a.ha||a.src;a.fa&&du(a),a=h.call(g,f)}return a}function mu(a){return a=a[fu],a instanceof Ps?a:null}var pu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fd(a){return typeof a=="function"?a:(a[pu]||(a[pu]=function(f){return a.handleEvent(f)}),a[pu])}function Ge(){ce.call(this),this.i=new Ps(this),this.M=this,this.F=null}C(Ge,ce),Ge.prototype[cn]=!0,Ge.prototype.removeEventListener=function(a,f,h,g){Vd(this,a,f,h,g)};function it(a,f){var h,g=a.F;if(g)for(h=[];g;g=g.F)h.push(g);if(a=a.M,g=f.type||f,typeof f=="string")f=new Ce(f,a);else if(f instanceof Ce)f.target=f.target||a;else{var b=f;f=new Ce(g,a),I(f,b)}if(b=!0,h)for(var D=h.length-1;0<=D;D--){var $=f.g=h[D];b=bs($,g,!0,f)&&b}if($=f.g=a,b=bs($,g,!0,f)&&b,b=bs($,g,!1,f)&&b,h)for(D=0;D<h.length;D++)$=f.g=h[D],b=bs($,g,!1,f)&&b}Ge.prototype.N=function(){if(Ge.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var h=a.g[f],g=0;g<h.length;g++)ks(h[g]);delete a.g[f],a.h--}}this.F=null},Ge.prototype.K=function(a,f,h,g){return this.i.add(String(a),f,!1,h,g)},Ge.prototype.L=function(a,f,h,g){return this.i.add(String(a),f,!0,h,g)};function bs(a,f,h,g){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var b=!0,D=0;D<f.length;++D){var $=f[D];if($&&!$.da&&$.capture==h){var fe=$.listener,$e=$.ha||$.src;$.fa&&uu(a.i,$),b=fe.call($e,g)!==!1&&b}}return b&&!g.defaultPrevented}function Md(a,f,h){if(typeof a=="function")h&&(a=p(a,h));else if(a&&typeof a.handleEvent=="function")a=p(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:l.setTimeout(a,f||0)}function zd(a){a.g=Md(()=>{a.g=null,a.i&&(a.i=!1,zd(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class jw extends ce{constructor(f,h){super(),this.m=f,this.l=h,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:zd(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ki(a){ce.call(this),this.h=a,this.g={}}C(Ki,ce);var jd=[];function $d(a){j(a.g,function(f,h){this.g.hasOwnProperty(h)&&du(f)},a),a.g={}}Ki.prototype.N=function(){Ki.aa.N.call(this),$d(this)},Ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gu=l.JSON.stringify,$w=l.JSON.parse,Uw=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function vu(){}vu.prototype.h=null;function Ud(a){return a.h||(a.h=a.i())}function Bd(){}var Gi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function yu(){Ce.call(this,"d")}C(yu,Ce);function _u(){Ce.call(this,"c")}C(_u,Ce);var mr={},Hd=null;function Rs(){return Hd=Hd||new Ge}mr.La="serverreachability";function Wd(a){Ce.call(this,mr.La,a)}C(Wd,Ce);function Qi(a){const f=Rs();it(f,new Wd(f))}mr.STAT_EVENT="statevent";function qd(a,f){Ce.call(this,mr.STAT_EVENT,a),this.stat=f}C(qd,Ce);function ot(a){const f=Rs();it(f,new qd(f,a))}mr.Ma="timingevent";function Kd(a,f){Ce.call(this,mr.Ma,a),this.size=f}C(Kd,Ce);function Yi(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},f)}function Xi(){this.g=!0}Xi.prototype.xa=function(){this.g=!1};function Bw(a,f,h,g,b,D){a.info(function(){if(a.g)if(D)for(var $="",fe=D.split("&"),$e=0;$e<fe.length;$e++){var le=fe[$e].split("=");if(1<le.length){var Qe=le[0];le=le[1];var Ye=Qe.split("_");$=2<=Ye.length&&Ye[1]=="type"?$+(Qe+"="+le+"&"):$+(Qe+"=redacted&")}}else $=null;else $=D;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+f+`
`+h+`
`+$})}function Hw(a,f,h,g,b,D,$){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+f+`
`+h+`
`+D+" "+$})}function Ur(a,f,h,g){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+qw(a,h)+(g?" "+g:"")})}function Ww(a,f){a.info(function(){return"TIMEOUT: "+f})}Xi.prototype.info=function(){};function qw(a,f){if(!a.g)return f;if(!f)return null;try{var h=JSON.parse(f);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var g=h[a];if(!(2>g.length)){var b=g[1];if(Array.isArray(b)&&!(1>b.length)){var D=b[0];if(D!="noop"&&D!="stop"&&D!="close")for(var $=1;$<b.length;$++)b[$]=""}}}}return gu(h)}catch{return f}}var Ns={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wu;function Ds(){}C(Ds,vu),Ds.prototype.g=function(){return new XMLHttpRequest},Ds.prototype.i=function(){return{}},wu=new Ds;function Pn(a,f,h,g){this.j=a,this.i=f,this.l=h,this.R=g||1,this.U=new Ki(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qd}function Qd(){this.i=null,this.g="",this.h=!1}var Yd={},Eu={};function Su(a,f,h){a.L=1,a.v=Fs(fn(f)),a.m=h,a.P=!0,Xd(a,null)}function Xd(a,f){a.F=Date.now(),Ls(a),a.A=fn(a.v);var h=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),fm(h.i,"t",g),a.C=0,h=a.j.J,a.h=new Qd,a.g=Pm(a.j,h?f:null,!a.m),0<a.O&&(a.M=new jw(p(a.Y,a,a.g),a.O)),f=a.U,h=a.g,g=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(jd[0]=b.toString()),b=jd);for(var D=0;D<b.length;D++){var $=Ld(h,b[D],g||f.handleEvent,!1,f.h||f);if(!$)break;f.g[$.key]=$}f=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),Qi(),Bw(a.i,a.u,a.A,a.l,a.R,a.m)}Pn.prototype.ca=function(a){a=a.target;const f=this.M;f&&hn(a)==3?f.j():this.Y(a)},Pn.prototype.Y=function(a){try{if(a==this.g)e:{const Ye=hn(this.g);var f=this.g.Ba();const Wr=this.g.Z();if(!(3>Ye)&&(Ye!=3||this.g&&(this.h.h||this.g.oa()||ym(this.g)))){this.J||Ye!=4||f==7||(f==8||0>=Wr?Qi(3):Qi(2)),Tu(this);var h=this.g.Z();this.X=h;t:if(Jd(this)){var g=ym(this.g);a="";var b=g.length,D=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pr(this),Ji(this);var $="";break t}this.h.i=new l.TextDecoder}for(f=0;f<b;f++)this.h.h=!0,a+=this.h.i.decode(g[f],{stream:!(D&&f==b-1)});g.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=h==200,Hw(this.i,this.u,this.A,this.l,this.R,Ye,h),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,$e=this.g;if((fe=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(fe)){var le=fe;break t}}le=null}if(h=le)Ur(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Iu(this,h);else{this.o=!1,this.s=3,ot(12),pr(this),Ji(this);break e}}if(this.P){h=!0;let Dt;for(;!this.J&&this.C<$.length;)if(Dt=Kw(this,$),Dt==Eu){Ye==4&&(this.s=4,ot(14),h=!1),Ur(this.i,this.l,null,"[Incomplete Response]");break}else if(Dt==Yd){this.s=4,ot(15),Ur(this.i,this.l,$,"[Invalid Chunk]"),h=!1;break}else Ur(this.i,this.l,Dt,null),Iu(this,Dt);if(Jd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ye!=4||$.length!=0||this.h.h||(this.s=1,ot(16),h=!1),this.o=this.o&&h,!h)Ur(this.i,this.l,$,"[Invalid Chunked Response]"),pr(this),Ji(this);else if(0<$.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),bu(Qe),Qe.M=!0,ot(11))}}else Ur(this.i,this.l,$,null),Iu(this,$);Ye==4&&pr(this),this.o&&!this.J&&(Ye==4?xm(this.j,this):(this.o=!1,Ls(this)))}else cE(this.g),h==400&&0<$.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),pr(this),Ji(this)}}}catch{}finally{}};function Jd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Kw(a,f){var h=a.C,g=f.indexOf(`
`,h);return g==-1?Eu:(h=Number(f.substring(h,g)),isNaN(h)?Yd:(g+=1,g+h>f.length?Eu:(f=f.slice(g,g+h),a.C=g+h,f)))}Pn.prototype.cancel=function(){this.J=!0,pr(this)};function Ls(a){a.S=Date.now()+a.I,Zd(a,a.I)}function Zd(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Yi(p(a.ba,a),f)}function Tu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Pn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Ww(this.i,this.A),this.L!=2&&(Qi(),ot(17)),pr(this),this.s=2,Ji(this)):Zd(this,this.S-a)};function Ji(a){a.j.G==0||a.J||xm(a.j,a)}function pr(a){Tu(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,$d(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function Iu(a,f){try{var h=a.j;if(h.G!=0&&(h.g==a||xu(h.h,a))){if(!a.K&&xu(h.h,a)&&h.G==3){try{var g=h.Da.g.parse(f)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)Bs(h),$s(h);else break e;Pu(h),ot(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=Yi(p(h.Za,h),6e3));if(1>=nm(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else vr(h,11)}else if((a.K||h.g==a)&&Bs(h),!y(f))for(b=h.Da.g.parse(f),f=0;f<b.length;f++){let le=b[f];if(h.T=le[0],le=le[1],h.G==2)if(le[0]=="c"){h.K=le[1],h.ia=le[2];const Qe=le[3];Qe!=null&&(h.la=Qe,h.j.info("VER="+h.la));const Ye=le[4];Ye!=null&&(h.Aa=Ye,h.j.info("SVER="+h.Aa));const Wr=le[5];Wr!=null&&typeof Wr=="number"&&0<Wr&&(g=1.5*Wr,h.L=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const Dt=a.g;if(Dt){const Ws=Dt.g?Dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ws){var D=g.h;D.g||Ws.indexOf("spdy")==-1&&Ws.indexOf("quic")==-1&&Ws.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Au(D,D.h),D.h=null))}if(g.D){const Ru=Dt.g?Dt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ru&&(g.ya=Ru,de(g.I,g.D,Ru))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),g=h;var $=a;if(g.qa=km(g,g.J?g.ia:null,g.W),$.K){rm(g.h,$);var fe=$,$e=g.L;$e&&(fe.I=$e),fe.B&&(Tu(fe),Ls(fe)),g.g=$}else Tm(g);0<h.i.length&&Us(h)}else le[0]!="stop"&&le[0]!="close"||vr(h,7);else h.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?vr(h,7):ku(h):le[0]!="noop"&&h.l&&h.l.ta(le),h.v=0)}}Qi(4)}catch{}}var Gw=class{constructor(a,f){this.g=a,this.map=f}};function em(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function tm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function nm(a){return a.h?1:a.g?a.g.size:0}function xu(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Au(a,f){a.g?a.g.add(f):a.h=f}function rm(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}em.prototype.cancel=function(){if(this.i=im(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function im(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const h of a.g.values())f=f.concat(h.D);return f}return k(a.i)}function Qw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var f=[],h=a.length,g=0;g<h;g++)f.push(a[g]);return f}f=[],h=0;for(g in a)f[h++]=a[g];return f}function Yw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var f=[];a=a.length;for(var h=0;h<a;h++)f.push(h);return f}f=[],h=0;for(const g in a)f[h++]=g;return f}}}function om(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var h=Yw(a),g=Qw(a),b=g.length,D=0;D<b;D++)f.call(void 0,g[D],h&&h[D],a)}var sm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xw(a,f){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var g=a[h].indexOf("="),b=null;if(0<=g){var D=a[h].substring(0,g);b=a[h].substring(g+1)}else D=a[h];f(D,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function gr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof gr){this.h=a.h,Vs(this,a.j),this.o=a.o,this.g=a.g,Os(this,a.s),this.l=a.l;var f=a.i,h=new to;h.i=f.i,f.g&&(h.g=new Map(f.g),h.h=f.h),am(this,h),this.m=a.m}else a&&(f=String(a).match(sm))?(this.h=!1,Vs(this,f[1]||"",!0),this.o=Zi(f[2]||""),this.g=Zi(f[3]||"",!0),Os(this,f[4]),this.l=Zi(f[5]||"",!0),am(this,f[6]||"",!0),this.m=Zi(f[7]||"")):(this.h=!1,this.i=new to(null,this.h))}gr.prototype.toString=function(){var a=[],f=this.j;f&&a.push(eo(f,lm,!0),":");var h=this.g;return(h||f=="file")&&(a.push("//"),(f=this.o)&&a.push(eo(f,lm,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(eo(h,h.charAt(0)=="/"?eE:Zw,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",eo(h,nE)),a.join("")};function fn(a){return new gr(a)}function Vs(a,f,h){a.j=h?Zi(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function Os(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function am(a,f,h){f instanceof to?(a.i=f,rE(a.i,a.h)):(h||(f=eo(f,tE)),a.i=new to(f,a.h))}function de(a,f,h){a.i.set(f,h)}function Fs(a){return de(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Zi(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function eo(a,f,h){return typeof a=="string"?(a=encodeURI(a).replace(f,Jw),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Jw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var lm=/[#\/\?@]/g,Zw=/[#\?:]/g,eE=/[#\?]/g,tE=/[#\?@]/g,nE=/#/g;function to(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function bn(a){a.g||(a.g=new Map,a.h=0,a.i&&Xw(a.i,function(f,h){a.add(decodeURIComponent(f.replace(/\+/g," ")),h)}))}t=to.prototype,t.add=function(a,f){bn(this),this.i=null,a=Br(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(f),this.h+=1,this};function um(a,f){bn(a),f=Br(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function cm(a,f){return bn(a),f=Br(a,f),a.g.has(f)}t.forEach=function(a,f){bn(this),this.g.forEach(function(h,g){h.forEach(function(b){a.call(f,b,g,this)},this)},this)},t.na=function(){bn(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),h=[];for(let g=0;g<f.length;g++){const b=a[g];for(let D=0;D<b.length;D++)h.push(f[g])}return h},t.V=function(a){bn(this);let f=[];if(typeof a=="string")cm(this,a)&&(f=f.concat(this.g.get(Br(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)f=f.concat(a[h])}return f},t.set=function(a,f){return bn(this),this.i=null,a=Br(this,a),cm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function fm(a,f,h){um(a,f),0<h.length&&(a.i=null,a.g.set(Br(a,f),k(h)),a.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var h=0;h<f.length;h++){var g=f[h];const D=encodeURIComponent(String(g)),$=this.V(g);for(g=0;g<$.length;g++){var b=D;$[g]!==""&&(b+="="+encodeURIComponent(String($[g]))),a.push(b)}}return this.i=a.join("&")};function Br(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function rE(a,f){f&&!a.j&&(bn(a),a.i=null,a.g.forEach(function(h,g){var b=g.toLowerCase();g!=b&&(um(this,g),fm(this,b,h))},a)),a.j=f}function iE(a,f){const h=new Xi;if(l.Image){const g=new Image;g.onload=w(Rn,h,"TestLoadImage: loaded",!0,f,g),g.onerror=w(Rn,h,"TestLoadImage: error",!1,f,g),g.onabort=w(Rn,h,"TestLoadImage: abort",!1,f,g),g.ontimeout=w(Rn,h,"TestLoadImage: timeout",!1,f,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else f(!1)}function oE(a,f){const h=new Xi,g=new AbortController,b=setTimeout(()=>{g.abort(),Rn(h,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(b),D.ok?Rn(h,"TestPingServer: ok",!0,f):Rn(h,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(b),Rn(h,"TestPingServer: error",!1,f)})}function Rn(a,f,h,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(h)}catch{}}function sE(){this.g=new Uw}function aE(a,f,h){const g=h||"";try{om(a,function(b,D){let $=b;c(b)&&($=gu(b)),f.push(g+D+"="+encodeURIComponent($))})}catch(b){throw f.push(g+"type="+encodeURIComponent("_badmap")),b}}function Ms(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Ms,vu),Ms.prototype.g=function(){return new zs(this.l,this.j)},Ms.prototype.i=function(a){return function(){return a}}({});function zs(a,f){Ge.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(zs,Ge),t=zs.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,ro(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||l).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,no(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ro(this)),this.g&&(this.readyState=3,ro(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function hm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?no(this):ro(this),this.readyState==3&&hm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,no(this))},t.Qa=function(a){this.g&&(this.response=a,no(this))},t.ga=function(){this.g&&no(this)};function no(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ro(a)}t.setRequestHeader=function(a,f){this.u.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var h=f.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=f.next();return a.join(`\r
`)};function ro(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(zs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function dm(a){let f="";return j(a,function(h,g){f+=g,f+=":",f+=h,f+=`\r
`}),f}function Cu(a,f,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=dm(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):de(a,f,h))}function xe(a){Ge.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(xe,Ge);var lE=/^https?$/i,uE=["POST","PUT"];t=xe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,f,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wu.g(),this.v=this.o?Ud(this.o):Ud(wu),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(D){mm(this,D);return}if(a=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)h.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())h.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(D=>D.toLowerCase()=="content-type"),b=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(uE,f,void 0))||g||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,$]of h)this.g.setRequestHeader(D,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vm(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){mm(this,D)}};function mm(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,pm(a),js(a)}function pm(a){a.A||(a.A=!0,it(a,"complete"),it(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,it(this,"complete"),it(this,"abort"),js(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),js(this,!0)),xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?gm(this):this.bb())},t.bb=function(){gm(this)};function gm(a){if(a.h&&typeof s<"u"&&(!a.v[1]||hn(a)!=4||a.Z()!=2)){if(a.u&&hn(a)==4)Md(a.Ea,0,a);else if(it(a,"readystatechange"),hn(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var h;if(!(h=f)){var g;if(g=$===0){var b=String(a.D).match(sm)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),g=!lE.test(b?b.toLowerCase():"")}h=g}if(h)it(a,"complete"),it(a,"success");else{a.m=6;try{var D=2<hn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",pm(a)}}finally{js(a)}}}}function js(a,f){if(a.g){vm(a);const h=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||it(a,"ready");try{h.onreadystatechange=g}catch{}}}function vm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function hn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),$w(f)}};function ym(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function cE(a){const f={};a=(a.g&&2<=hn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var h=A(a[g]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const D=f[b]||[];f[b]=D,D.push(h)}S(f,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function io(a,f,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||f}function _m(a){this.Aa=0,this.i=[],this.j=new Xi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=io("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=io("baseRetryDelayMs",5e3,a),this.cb=io("retryDelaySeedMs",1e4,a),this.Wa=io("forwardChannelMaxRetries",2,a),this.wa=io("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new em(a&&a.concurrentRequestLimit),this.Da=new sE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=_m.prototype,t.la=8,t.G=1,t.connect=function(a,f,h,g){ot(0),this.W=a,this.H=f||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.I=km(this,null,this.W),Us(this)};function ku(a){if(wm(a),a.G==3){var f=a.U++,h=fn(a.I);if(de(h,"SID",a.K),de(h,"RID",f),de(h,"TYPE","terminate"),oo(a,h),f=new Pn(a,a.j,f),f.L=2,f.v=Fs(fn(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(f.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=f.v,h=!0),h||(f.g=Pm(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Ls(f)}Cm(a)}function $s(a){a.g&&(bu(a),a.g.cancel(),a.g=null)}function wm(a){$s(a),a.u&&(l.clearTimeout(a.u),a.u=null),Bs(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Us(a){if(!tm(a.h)&&!a.s){a.s=!0;var f=a.Ga;Wt||ee(),B||(Wt(),B=!0),Y.add(f,a),a.B=0}}function fE(a,f){return nm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Yi(p(a.Ga,a,f),Am(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new Pn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=v(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(b.H=D,D=null),this.P)e:{for(var f=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(f+=g,4096<f){f=h;break e}if(f===4096||h===this.i.length-1){f=h+1;break e}}f=1e3}else f=1e3;f=Sm(this,b,f),h=fn(this.I),de(h,"RID",a),de(h,"CVER",22),this.D&&de(h,"X-HTTP-Session-Id",this.D),oo(this,h),D&&(this.O?f="headers="+encodeURIComponent(String(dm(D)))+"&"+f:this.m&&Cu(h,this.m,D)),Au(this.h,b),this.Ua&&de(h,"TYPE","init"),this.P?(de(h,"$req",f),de(h,"SID","null"),b.T=!0,Su(b,h,null)):Su(b,h,f),this.G=2}}else this.G==3&&(a?Em(this,a):this.i.length==0||tm(this.h)||Em(this))};function Em(a,f){var h;f?h=f.l:h=a.U++;const g=fn(a.I);de(g,"SID",a.K),de(g,"RID",h),de(g,"AID",a.T),oo(a,g),a.m&&a.o&&Cu(g,a.m,a.o),h=new Pn(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),f&&(a.i=f.D.concat(a.i)),f=Sm(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Au(a.h,h),Su(h,g,f)}function oo(a,f){a.H&&j(a.H,function(h,g){de(f,g,h)}),a.l&&om({},function(h,g){de(f,g,h)})}function Sm(a,f,h){h=Math.min(a.i.length,h);var g=a.l?p(a.l.Na,a.l,a):null;e:{var b=a.i;let D=-1;for(;;){const $=["count="+h];D==-1?0<h?(D=b[0].g,$.push("ofs="+D)):D=0:$.push("ofs="+D);let fe=!0;for(let $e=0;$e<h;$e++){let le=b[$e].g;const Qe=b[$e].map;if(le-=D,0>le)D=Math.max(0,b[$e].g-100),fe=!1;else try{aE(Qe,$,"req"+le+"_")}catch{g&&g(Qe)}}if(fe){g=$.join("&");break e}}}return a=a.i.splice(0,h),f.D=a,g}function Tm(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;Wt||ee(),B||(Wt(),B=!0),Y.add(f,a),a.v=0}}function Pu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Yi(p(a.Fa,a),Am(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Im(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Yi(p(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),$s(this),Im(this))};function bu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Im(a){a.g=new Pn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=fn(a.qa);de(f,"RID","rpc"),de(f,"SID",a.K),de(f,"AID",a.T),de(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&de(f,"TO",a.ja),de(f,"TYPE","xmlhttp"),oo(a,f),a.m&&a.o&&Cu(f,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=Fs(fn(f)),h.m=null,h.P=!0,Xd(h,a)}t.Za=function(){this.C!=null&&(this.C=null,$s(this),Pu(this),ot(19))};function Bs(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function xm(a,f){var h=null;if(a.g==f){Bs(a),bu(a),a.g=null;var g=2}else if(xu(a.h,f))h=f.D,rm(a.h,f),g=1;else return;if(a.G!=0){if(f.o)if(g==1){h=f.m?f.m.length:0,f=Date.now()-f.F;var b=a.B;g=Rs(),it(g,new Kd(g,h)),Us(a)}else Tm(a);else if(b=f.s,b==3||b==0&&0<f.X||!(g==1&&fE(a,f)||g==2&&Pu(a)))switch(h&&0<h.length&&(f=a.h,f.i=f.i.concat(h)),b){case 1:vr(a,5);break;case 4:vr(a,10);break;case 3:vr(a,6);break;default:vr(a,2)}}}function Am(a,f){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*f}function vr(a,f){if(a.j.info("Error code "+f),f==2){var h=p(a.fb,a),g=a.Xa;const b=!g;g=new gr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Vs(g,"https"),Fs(g),b?iE(g.toString(),h):oE(g.toString(),h)}else ot(2);a.G=0,a.l&&a.l.sa(f),Cm(a),wm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Cm(a){if(a.G=0,a.ka=[],a.l){const f=im(a.h);(f.length!=0||a.i.length!=0)&&(R(a.ka,f),R(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function km(a,f,h){var g=h instanceof gr?fn(h):new gr(h);if(g.g!="")f&&(g.g=f+"."+g.g),Os(g,g.s);else{var b=l.location;g=b.protocol,f=f?f+"."+b.hostname:b.hostname,b=+b.port;var D=new gr(null);g&&Vs(D,g),f&&(D.g=f),b&&Os(D,b),h&&(D.l=h),g=D}return h=a.D,f=a.ya,h&&f&&de(g,h,f),de(g,"VER",a.la),oo(a,g),g}function Pm(a,f,h){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new xe(new Ms({eb:h})):new xe(a.pa),f.Ha(a.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function bm(){}t=bm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Hs(){}Hs.prototype.g=function(a,f){return new _t(a,f)};function _t(a,f){Ge.call(this),this.g=new _m(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!y(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!y(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new Hr(this)}C(_t,Ge),_t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){ku(this.g)},_t.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=gu(a),a=h);f.i.push(new Gw(f.Ya++,a)),f.G==3&&Us(f)},_t.prototype.N=function(){this.g.l=null,delete this.j,ku(this.g),delete this.g,_t.aa.N.call(this)};function Rm(a){yu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const h in f){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}C(Rm,yu);function Nm(){_u.call(this),this.status=1}C(Nm,_u);function Hr(a){this.g=a}C(Hr,bm),Hr.prototype.ua=function(){it(this.g,"a")},Hr.prototype.ta=function(a){it(this.g,new Rm(a))},Hr.prototype.sa=function(a){it(this.g,new Nm)},Hr.prototype.ra=function(){it(this.g,"b")},Hs.prototype.createWebChannel=Hs.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,g1=function(){return new Hs},p1=function(){return Rs()},m1=mr,Sf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ns.NO_ERROR=0,Ns.TIMEOUT=8,Ns.HTTP_ERROR=6,La=Ns,Gd.COMPLETE="complete",d1=Gd,Bd.EventType=Gi,Gi.OPEN="a",Gi.CLOSE="b",Gi.ERROR="c",Gi.MESSAGE="d",Ge.prototype.listen=Ge.prototype.K,wo=Bd,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,h1=xe}).apply(typeof ca<"u"?ca:typeof self<"u"?self:typeof window<"u"?window:{});const sg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new o1("@firebase/firestore");function Gr(){return Vr.logLevel}function H(t,...e){if(Vr.logLevel<=re.DEBUG){const n=e.map(nd);Vr.debug(`Firestore (${Bi}): ${t}`,...n)}}function In(t,...e){if(Vr.logLevel<=re.ERROR){const n=e.map(nd);Vr.error(`Firestore (${Bi}): ${t}`,...n)}}function Pi(t,...e){if(Vr.logLevel<=re.WARN){const n=e.map(nd);Vr.warn(`Firestore (${Bi}): ${t}`,...n)}}function nd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${Bi}) INTERNAL ASSERTION FAILED: `+t;throw In(e),new Error(e)}function Te(t,e){t||Z()}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Ui{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Qx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class Yx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Xx{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Te(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let o=new Jn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Jn,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Jn)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new v1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new et(e)}}class Jx{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Zx{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Jx(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class eA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Te(this.o===void 0);const r=o=>{o.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,H("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.R=n.token,new eA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=nA(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function bi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{static now(){return yt.fromMillis(Date.now())}static fromDate(e){return yt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new yt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new yt(0,0))}static max(){return new X(new yt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return as.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof as?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ye extends as{construct(e,n,r){return new ye(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const rA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends as{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return rA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new q(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(s=!s,i++):l!=="."||s?(r+=l,i++):(o(),i++)}if(o(),s)throw new q(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(ye.fromString(e))}static fromName(e){return new Q(ye.fromString(e).popFirst(5))}static empty(){return new Q(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new ye(e.slice()))}}function iA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new yt(n+1,0):new yt(n,r));return new rr(i,Q.empty(),e)}function oA(t){return new rr(t.readTime,t.key,-1)}class rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new rr(X.min(),Q.empty(),-1)}static max(){return new rr(X.max(),Q.empty(),-1)}}function sA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wl(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==aA)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,o=0,s=!1;e.forEach(l=>{++i,l.next(()=>{++o,s&&o===i&&n()},u=>r(u))}),s=!0,o===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const o=e.length,s=new Array(o);let l=0;for(let u=0;u<o;u++){const c=u;n(e[c]).next(d=>{s[c]=d,++l,l===o&&r(s)},d=>i(d))}})}static doWhile(e,n){return new V((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function uA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Hi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ql{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ql.oe=-1;function Kl(t){return t==null}function Tf(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ag(e)),e=fA(t.get(n),e);return ag(e)}function fA(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const o=t.charAt(i);switch(o){case"\0":n+="";break;case"":n+="";break;default:n+=o}}return n}function ag(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fa(this.root,e,this.comparator,!1)}getReverseIterator(){return new fa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fa(this.root,e,this.comparator,!0)}}class fa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??Be.RED,this.left=i??Be.EMPTY,this.right=o??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new Be(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,o){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ug(this.data.getIterator())}getIteratorFrom(e){return new ug(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Oe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Oe(this.comparator);return n.data=e,n}}class ug{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new jn([])}unionWith(e){let n=new Oe(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new jn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class _1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new _1("Invalid base64 string: "+o):o}}(e);return new qe(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const dA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ir(t){if(Te(!!t),typeof t=="string"){let e=0;const n=dA.exec(t);if(Te(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function or(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Gl(t){const e=t.mapValue.fields.__previous_value__;return rd(e)?Gl(e):e}function ls(t){const e=ir(t.mapValue.fields.__local_write_time__.timestampValue);return new yt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,n,r,i,o,s,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class us{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new us("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof us&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rd(t)?4:gA(t)?9007199254740991:pA(t)?10:11:Z()}function nn(t,e){if(t===e)return!0;const n=sr(t);if(n!==sr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ls(t).isEqual(ls(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=ir(i.timestampValue),l=ir(o.timestampValue);return s.seconds===l.seconds&&s.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return or(i.bytesValue).isEqual(or(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return ke(i.geoPointValue.latitude)===ke(o.geoPointValue.latitude)&&ke(i.geoPointValue.longitude)===ke(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ke(i.integerValue)===ke(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=ke(i.doubleValue),l=ke(o.doubleValue);return s===l?Tf(s)===Tf(l):isNaN(s)&&isNaN(l)}return!1}(t,e);case 9:return bi(t.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},l=o.mapValue.fields||{};if(lg(s)!==lg(l))return!1;for(const u in s)if(s.hasOwnProperty(u)&&(l[u]===void 0||!nn(s[u],l[u])))return!1;return!0}(t,e);default:return Z()}}function cs(t,e){return(t.values||[]).find(n=>nn(n,e))!==void 0}function Ri(t,e){if(t===e)return 0;const n=sr(t),r=sr(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(o,s){const l=ke(o.integerValue||o.doubleValue),u=ke(s.integerValue||s.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return cg(t.timestampValue,e.timestampValue);case 4:return cg(ls(t),ls(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(o,s){const l=or(o),u=or(s);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const l=o.split("/"),u=s.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ie(l[c],u[c]);if(d!==0)return d}return ie(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const l=ie(ke(o.latitude),ke(s.latitude));return l!==0?l:ie(ke(o.longitude),ke(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return fg(t.arrayValue,e.arrayValue);case 10:return function(o,s){var l,u,c,d;const m=o.fields||{},p=s.fields||{},w=(l=m.value)===null||l===void 0?void 0:l.arrayValue,C=(u=p.value)===null||u===void 0?void 0:u.arrayValue,k=ie(((c=w==null?void 0:w.values)===null||c===void 0?void 0:c.length)||0,((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:fg(w,C)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===ha.mapValue&&s===ha.mapValue)return 0;if(o===ha.mapValue)return 1;if(s===ha.mapValue)return-1;const l=o.fields||{},u=Object.keys(l),c=s.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let m=0;m<u.length&&m<d.length;++m){const p=ie(u[m],d[m]);if(p!==0)return p;const w=Ri(l[u[m]],c[d[m]]);if(w!==0)return w}return ie(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Z()}}function cg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=ir(t),r=ir(e),i=ie(n.seconds,r.seconds);return i!==0?i:ie(n.nanos,r.nanos)}function fg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=Ri(n[i],r[i]);if(o)return o}return ie(n.length,r.length)}function Ni(t){return If(t)}function If(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return or(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=If(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${If(n.fields[s])}`;return i+"}"}(t.mapValue):Z()}function Va(t){switch(sr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Gl(t);return e?16+Va(e):16;case 5:return 2*t.stringValue.length;case 6:return or(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+Va(o),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Es(r.fields,(o,s)=>{i+=o.length+Va(s)}),i}(t.mapValue);default:throw Z()}}function xf(t){return!!t&&"integerValue"in t}function id(t){return!!t&&"arrayValue"in t}function hg(t){return!!t&&"nullValue"in t}function dg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function cc(t){return!!t&&"mapValue"in t}function pA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Lo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Lo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Lo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function gA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.value=e}static empty(){return new Qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!cc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Lo(n)}setAll(e){let n=at.emptyPath(),r={},i=[];e.forEach((s,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}s?r[l.lastSegment()]=Lo(s):i.push(l.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());cc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];cc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Es(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Qt(Lo(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r,i,o,s,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=l}static newInvalidDocument(e){return new nt(e,0,X.min(),X.min(),X.min(),Qt.empty(),0)}static newFoundDocument(e,n,r,i){return new nt(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new nt(e,2,n,X.min(),X.min(),Qt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,X.min(),X.min(),Qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gl{constructor(e,n){this.position=e,this.inclusive=n}}function mg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=Q.comparator(Q.fromName(s.referenceValue),n.key):r=Ri(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function pg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class vl{constructor(e,n="asc"){this.field=e,this.dir=n}}function vA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class w1{}class Le extends w1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new _A(e,n,r):n==="array-contains"?new SA(e,r):n==="in"?new TA(e,r):n==="not-in"?new IA(e,r):n==="array-contains-any"?new xA(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new wA(e,r):new EA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ri(n,this.value)):n!==null&&sr(this.value)===sr(n)&&this.matchesComparison(Ri(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rn extends w1{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new rn(e,n)}matches(e){return E1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function E1(t){return t.op==="and"}function S1(t){return yA(t)&&E1(t)}function yA(t){for(const e of t.filters)if(e instanceof rn)return!1;return!0}function Af(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+Ni(t.value);if(S1(t))return t.filters.map(e=>Af(e)).join(",");{const e=t.filters.map(n=>Af(n)).join(",");return`${t.op}(${e})`}}function T1(t,e){return t instanceof Le?function(r,i){return i instanceof Le&&r.op===i.op&&r.field.isEqual(i.field)&&nn(r.value,i.value)}(t,e):t instanceof rn?function(r,i){return i instanceof rn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,l)=>o&&T1(s,i.filters[l]),!0):!1}(t,e):void Z()}function I1(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${Ni(n.value)}`}(t):t instanceof rn?function(n){return n.op.toString()+" {"+n.getFilters().map(I1).join(" ,")+"}"}(t):"Filter"}class _A extends Le{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class wA extends Le{constructor(e,n){super(e,"in",n),this.keys=x1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class EA extends Le{constructor(e,n){super(e,"not-in",n),this.keys=x1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function x1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class SA extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return id(n)&&cs(n.arrayValue,this.value)}}class TA extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&cs(this.value.arrayValue,n)}}class IA extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(cs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!cs(this.value.arrayValue,n)}}class xA extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!id(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>cs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,n=null,r=[],i=[],o=null,s=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=l,this.ue=null}}function gg(t,e=null,n=[],r=[],i=null,o=null,s=null){return new AA(t,e,n,r,i,o,s)}function od(t){const e=oe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Af(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Kl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ni(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ni(r)).join(",")),e.ue=n}return e.ue}function sd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!vA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!T1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pg(t.startAt,e.startAt)&&pg(t.endAt,e.endAt)}function Cf(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n=null,r=[],i=[],o=null,s="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function CA(t,e,n,r,i,o,s,l){return new Ql(t,e,n,r,i,o,s,l)}function ad(t){return new Ql(t)}function vg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kA(t){return t.collectionGroup!==null}function Vo(t){const e=oe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let l=new Oe(at.comparator);return s.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new vl(o,r))}),n.has(at.keyField().canonicalString())||e.ce.push(new vl(at.keyField(),r))}return e.ce}function Zt(t){const e=oe(t);return e.le||(e.le=PA(e,Vo(t))),e.le}function PA(t,e){if(t.limitType==="F")return gg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new vl(i.field,o)});const n=t.endAt?new gl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new gl(t.startAt.position,t.startAt.inclusive):null;return gg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function kf(t,e,n){return new Ql(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yl(t,e){return sd(Zt(t),Zt(e))&&t.limitType===e.limitType}function A1(t){return`${od(Zt(t))}|lt:${t.limitType}`}function Qr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>I1(i)).join(", ")}]`),Kl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ni(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ni(i)).join(",")),`Target(${r})`}(Zt(t))}; limitType=${t.limitType})`}function Xl(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):Q.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of Vo(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,l,u){const c=mg(s,l,u);return s.inclusive?c<=0:c<0}(r.startAt,Vo(r),i)||r.endAt&&!function(s,l,u){const c=mg(s,l,u);return s.inclusive?c>=0:c>0}(r.endAt,Vo(r),i))}(t,e)}function bA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function C1(t){return(e,n)=>{let r=!1;for(const i of Vo(t)){const o=RA(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function RA(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(o,s,l){const u=s.data.field(o),c=l.data.field(o);return u!==null&&c!==null?Ri(u,c):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Es(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return hA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=new be(Q.comparator);function ar(){return NA}const k1=new be(Q.comparator);function Eo(...t){let e=k1;for(const n of t)e=e.insert(n.key,n);return e}function DA(t){let e=k1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ir(){return Oo()}function P1(){return Oo()}function Oo(){return new $r(t=>t.toString(),(t,e)=>t.isEqual(e))}const LA=new Oe(Q.comparator);function se(...t){let e=LA;for(const n of t)e=e.add(n);return e}const VA=new Oe(ie);function OA(){return VA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tf(e)?"-0":e}}function MA(t){return{integerValue:""+t}}/**
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
 */class Jl{constructor(){this._=void 0}}function zA(t,e,n){return t instanceof Pf?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&rd(o)&&(o=Gl(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof yl?b1(t,e):t instanceof _l?R1(t,e):function(i,o){const s=$A(i,o),l=yg(s)+yg(i.Pe);return xf(s)&&xf(i.Pe)?MA(l):FA(i.serializer,l)}(t,e)}function jA(t,e,n){return t instanceof yl?b1(t,e):t instanceof _l?R1(t,e):n}function $A(t,e){return t instanceof bf?function(r){return xf(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Pf extends Jl{}class yl extends Jl{constructor(e){super(),this.elements=e}}function b1(t,e){const n=N1(e);for(const r of t.elements)n.some(i=>nn(i,r))||n.push(r);return{arrayValue:{values:n}}}class _l extends Jl{constructor(e){super(),this.elements=e}}function R1(t,e){let n=N1(e);for(const r of t.elements)n=n.filter(i=>!nn(i,r));return{arrayValue:{values:n}}}class bf extends Jl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function yg(t){return ke(t.integerValue||t.doubleValue)}function N1(t){return id(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function UA(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof yl&&i instanceof yl||r instanceof _l&&i instanceof _l?bi(r.elements,i.elements,nn):r instanceof bf&&i instanceof bf?nn(r.Pe,i.Pe):r instanceof Pf&&i instanceof Pf}(t.transform,e.transform)}class Pr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pr}static exists(e){return new Pr(void 0,e)}static updateTime(e){return new Pr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Oa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ld{}function D1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new HA(t.key,Pr.none()):new ud(t.key,t.data,Pr.none());{const n=t.data,r=Qt.empty();let i=new Oe(at.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Zl(t.key,r,new jn(i.toArray()),Pr.none())}}function BA(t,e,n){t instanceof ud?function(i,o,s){const l=i.value.clone(),u=wg(i.fieldTransforms,o,s.transformResults);l.setAll(u),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Zl?function(i,o,s){if(!Oa(i.precondition,o))return void o.convertToUnknownDocument(s.version);const l=wg(i.fieldTransforms,o,s.transformResults),u=o.data;u.setAll(L1(i)),u.setAll(l),o.convertToFoundDocument(s.version,u).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Fo(t,e,n,r){return t instanceof ud?function(o,s,l,u){if(!Oa(o.precondition,s))return l;const c=o.value.clone(),d=Eg(o.fieldTransforms,u,s);return c.setAll(d),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Zl?function(o,s,l,u){if(!Oa(o.precondition,s))return l;const c=Eg(o.fieldTransforms,u,s),d=s.data;return d.setAll(L1(o)),d.setAll(c),s.convertToFoundDocument(s.version,d).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(o,s,l){return Oa(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):l}(t,e,n)}function _g(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&bi(r,i,(o,s)=>UA(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ud extends ld{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Zl extends ld{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function L1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function wg(t,e,n){const r=new Map;Te(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,l=e.data.field(o.field);r.set(o.field,jA(s,l,n[i]))}return r}function Eg(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,zA(o,s,e))}return r}class HA extends ld{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&BA(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Fo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Fo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=P1();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let l=this.applyToLocalView(s,o.mutatedFields);l=n.has(i.key)?null:l;const u=D1(s,l);u!==null&&r.set(i.key,u),s.isValidDocument()||s.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&bi(this.mutations,e.mutations,(n,r)=>_g(n,r))&&bi(this.baseMutations,e.baseMutations,(n,r)=>_g(n,r))}}/**
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
 */class qA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class KA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,ne;function V1(t){if(t===void 0)return In("GRPC error has no .code"),U.UNKNOWN;switch(t){case Re.OK:return U.OK;case Re.CANCELLED:return U.CANCELLED;case Re.UNKNOWN:return U.UNKNOWN;case Re.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Re.INTERNAL:return U.INTERNAL;case Re.UNAVAILABLE:return U.UNAVAILABLE;case Re.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Re.NOT_FOUND:return U.NOT_FOUND;case Re.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Re.ABORTED:return U.ABORTED;case Re.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Re.DATA_LOSS:return U.DATA_LOSS;default:return Z()}}(ne=Re||(Re={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function GA(){return new TextEncoder}/**
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
 */const QA=new kr([4294967295,4294967295],0);function Sg(t){const e=GA().encode(t),n=new f1;return n.update(e),new Uint8Array(n.digest())}function Tg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new kr([n,r],0),new kr([i,o],0)]}class cd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new So(`Invalid padding: ${n}`);if(r<0)throw new So(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new So(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new So(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=kr.fromNumber(this.Te)}Ee(e,n,r){let i=e.add(n.multiply(kr.fromNumber(r)));return i.compare(QA)===1&&(i=new kr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Sg(e),[r,i]=Tg(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);if(!this.de(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new cd(o,i,n);return r.forEach(l=>s.insert(l)),s}insert(e){if(this.Te===0)return;const n=Sg(e),[r,i]=Tg(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);this.Ae(s)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class So extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ss.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new eu(X.min(),i,new be(ie),ar(),se())}}class Ss{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ss(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class O1{constructor(e,n){this.targetId=e,this.me=n}}class F1{constructor(e,n,r=qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ig{constructor(){this.fe=0,this.ge=xg(),this.pe=qe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=se(),n=se(),r=se();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new Ss(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=xg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Te(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class YA{constructor(e){this.Le=e,this.Be=new Map,this.ke=ar(),this.qe=da(),this.Qe=da(),this.Ke=new be(ie)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.me.count,i=this.Ye(n);if(i){const o=i.target;if(Cf(o))if(r===0){const s=new Q(o.path);this.We(n,s,nt.newNoDocument(s,X.min()))}else Te(r===1);else{const s=this.Ze(n);if(s!==r){const l=this.Xe(e),u=l?this.et(l,e,s):1;if(u!==0){this.He(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,l;try{s=or(r).toUint8Array()}catch(u){if(u instanceof _1)return Pi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new cd(s,i,o)}catch(u){return Pi(u instanceof So?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Te===0?null:l}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.nt(),l=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.We(n,o,null),i++)}),i}it(e){const n=new Map;this.Be.forEach((o,s)=>{const l=this.Ye(s);if(l){if(o.current&&Cf(l.target)){const u=new Q(l.target.path);this.st(u).has(s)||this.ot(s,u)||this.We(s,u,nt.newNoDocument(u,e))}o.be&&(n.set(s,o.ve()),o.Ce())}});let r=se();this.Qe.forEach((o,s)=>{let l=!0;s.forEachWhile(u=>{const c=this.Ye(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new eu(e,n,this.Ke,this.ke,r);return this.ke=ar(),this.qe=da(),this.Qe=da(),this.Ke=new be(ie),i}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.ot(e,n)?i.Fe(n,1):i.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new Ig,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new Oe(ie),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Oe(ie),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Ig),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function da(){return new be(Q.comparator)}function xg(){return new be(Q.comparator)}const XA={asc:"ASCENDING",desc:"DESCENDING"},JA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ZA={and:"AND",or:"OR"};class eC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rf(t,e){return t.useProto3Json||Kl(e)?e:{value:e}}function tC(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function nC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yi(t){return Te(!!t),X.fromTimestamp(function(n){const r=ir(n);return new yt(r.seconds,r.nanos)}(t))}function rC(t,e){return Nf(t,e).canonicalString()}function Nf(t,e){const n=function(i){return new ye(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function M1(t){const e=ye.fromString(t);return Te(B1(e)),e}function fc(t,e){const n=M1(e);if(n.get(1)!==t.databaseId.projectId)throw new q(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(j1(n))}function z1(t,e){return rC(t.databaseId,e)}function iC(t){const e=M1(t);return e.length===4?ye.emptyPath():j1(e)}function Ag(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function j1(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function oC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(c,d){return c.useProto3Json?(Te(d===void 0||typeof d=="string"),qe.fromBase64String(d||"")):(Te(d===void 0||d instanceof Buffer||d instanceof Uint8Array),qe.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,l=s&&function(c){const d=c.code===void 0?U.UNKNOWN:V1(c.code);return new q(d,c.message||"")}(s);n=new F1(r,i,o,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=fc(t,r.document.name),o=yi(r.document.updateTime),s=r.document.createTime?yi(r.document.createTime):X.min(),l=new Qt({mapValue:{fields:r.document.fields}}),u=nt.newFoundDocument(i,o,s,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Fa(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=fc(t,r.document),o=r.readTime?yi(r.readTime):X.min(),s=nt.newNoDocument(i,o),l=r.removedTargetIds||[];n=new Fa([],l,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=fc(t,r.document),o=r.removedTargetIds||[];n=new Fa([],o,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new KA(i,o),l=r.targetId;n=new O1(l,s)}}return n}function sC(t,e){return{documents:[z1(t,e.path)]}}function aC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=z1(t,i);const o=function(c){if(c.length!==0)return U1(rn.create(c,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(c){if(c.length!==0)return c.map(d=>function(p){return{field:Yr(p.field),direction:cC(p.dir)}}(d))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const l=Rf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ct:n,parent:i}}function lC(t){let e=iC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Te(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let o=[];n.where&&(o=function(m){const p=$1(m);return p instanceof rn&&S1(p)?p.getFilters():[p]}(n.where));let s=[];n.orderBy&&(s=function(m){return m.map(p=>function(C){return new vl(Xr(C.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(p))}(n.orderBy));let l=null;n.limit&&(l=function(m){let p;return p=typeof m=="object"?m.value:m,Kl(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(m){const p=!!m.before,w=m.values||[];return new gl(w,p)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const p=!m.before,w=m.values||[];return new gl(w,p)}(n.endAt)),CA(e,i,s,o,l,"F",u,c)}function uC(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function $1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xr(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Xr(n.unaryFilter.field);return Le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Xr(n.unaryFilter.field);return Le.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Xr(n.unaryFilter.field);return Le.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return Le.create(Xr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rn.create(n.compositeFilter.filters.map(r=>$1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function cC(t){return XA[t]}function fC(t){return JA[t]}function hC(t){return ZA[t]}function Yr(t){return{fieldPath:t.canonicalString()}}function Xr(t){return at.fromServerFormat(t.fieldPath)}function U1(t){return t instanceof Le?function(n){if(n.op==="=="){if(dg(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NAN"}};if(hg(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(dg(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NOT_NAN"}};if(hg(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yr(n.field),op:fC(n.op),value:n.value}}}(t):t instanceof rn?function(n){const r=n.getFilters().map(i=>U1(i));return r.length===1?r[0]:{compositeFilter:{op:hC(n.op),filters:r}}}(t):Z()}function B1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,r,i,o=X.min(),s=X.min(),l=qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e){this.ht=e}}function mC(t){const e=lC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(){this.ln=new gC}addToCollectionParentIndex(e,n){return this.ln.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(rr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(rr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class gC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Oe(ye.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Oe(ye.comparator)).toArray()}}/**
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
 */const Cg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(41943040,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Di(0)}static Qn(){return new Di(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg([t,e],[n,r]){const i=ie(t,n);return i===0?ie(e,r):i}class vC{constructor(e){this.Gn=e,this.buffer=new Oe(kg),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();kg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class yC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){H("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Hi(n)?H("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Wl(n)}await this.Yn(3e5)})}}class _C{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(ql.oe);const r=new vC(n);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Cg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Cg):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,i,o,s,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,s=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(o=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),Gr()<=re.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-d}ms
	Determined least recently used ${i} in `+(l-s)+`ms
	Removed ${o} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:m})))}}function wC(t,e){return new _C(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(){this.changes=new $r(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class SC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Fo(r.mutation,i,jn.empty(),yt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=Ir();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=Eo();return o.forEach((l,u)=>{s=s.insert(l,u.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=Ir();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,l)=>{n.set(s,l)})})}computeViews(e,n,r,i){let o=ar();const s=Oo(),l=function(){return Oo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Zl)?o=o.insert(c.key,c):d!==void 0?(s.set(c.key,d.mutation.getFieldMask()),Fo(d.mutation,c,d.mutation.getFieldMask(),yt.now())):s.set(c.key,jn.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((c,d)=>s.set(c,d)),n.forEach((c,d)=>{var m;return l.set(c,new SC(d,(m=s.get(c))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Oo();let i=new be((s,l)=>s-l),o=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const l of s)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||jn.empty();d=l.applyToLocalView(c,d),r.set(u,d);const m=(i.get(l.batchId)||se()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const s=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,m=P1();d.forEach(p=>{if(!o.has(p)){const w=D1(n.get(p),r.get(p));w!==null&&m.set(p,w),o=o.add(p)}}),s.push(this.documentOverlayCache.saveOverlays(e,c,m))}return V.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return Q.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):V.resolve(Ir());let l=-1,u=o;return s.next(c=>V.forEach(c,(d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),o.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{u=u.insert(d,p)}))).next(()=>this.populateOverlays(e,c,o)).next(()=>this.computeViews(e,u,c,se())).next(d=>({batchId:l,changes:DA(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=Eo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=Eo();return this.indexManager.getCollectionParents(e,o).next(l=>V.forEach(l,u=>{const c=function(m,p){return new Ql(p,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((m,p)=>{s=s.insert(m,p)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((u,c)=>{const d=c.getKey();s.get(d)===null&&(s=s.insert(d,nt.newInvalidDocument(d)))});let l=Eo();return s.forEach((u,c)=>{const d=o.get(u);d!==void 0&&Fo(d.mutation,c,jn.empty(),yt.now()),Xl(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return V.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:yi(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(i){return{name:i.name,query:mC(i.bundledQuery),readTime:yi(i.readTime)}}(n)),V.resolve()}}/**
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
 */class xC{constructor(){this.overlays=new be(Q.comparator),this.Er=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ir();return V.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.Tt(e,n,o)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Er.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Er.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=Ir(),o=n.length+1,s=new Q(n.child("")),l=this.overlays.getIteratorFrom(s);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new be((c,d)=>c-d);const s=this.overlays.getIterator();for(;s.hasNext();){const c=s.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=o.get(c.largestBatchId);d===null&&(d=Ir(),o=o.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Ir(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return V.resolve(l)}Tt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new qA(n,r));let o=this.Er.get(n);o===void 0&&(o=se(),this.Er.set(n,o)),this.Er.set(n,o.add(r.key))}}/**
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
 */class AC{constructor(){this.sessionToken=qe.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(){this.dr=new Oe(Me.Ar),this.Rr=new Oe(Me.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new Me(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new Me(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new Q(new ye([])),r=new Me(n,e),i=new Me(n,e+1),o=[];return this.Rr.forEachInRange([r,i],s=>{this.gr(s),o.push(s.key)}),o}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new Q(new ye([])),r=new Me(n,e),i=new Me(n,e+1);let o=se();return this.Rr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new Me(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return Q.comparator(e.key,n.key)||ie(e.br,n.br)}static Vr(e,n){return ie(e.br,n.br)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new Oe(Me.Ar)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new WA(o,n,r,i);this.mutationQueue.push(s);for(const l of i)this.vr=this.vr.add(new Me(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(s)}lookupMutationBatch(e,n){return V.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Fr(r),o=i<0?0:i;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),i=new Me(n,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([r,i],s=>{const l=this.Cr(s.br);o.push(l)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Oe(ie);return n.forEach(i=>{const o=new Me(i,0),s=new Me(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,s],l=>{r=r.add(l.br)})}),V.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;Q.isDocumentKey(o)||(o=o.child(""));const s=new Me(new Q(o),0);let l=new Oe(ie);return this.vr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.br)),!0)},s),V.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const i=this.Cr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Te(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return V.forEach(n.mutations,i=>{const o=new Me(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new Me(n,0),i=this.vr.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.Nr=e,this.docs=function(){return new be(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=ar();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():nt.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=ar();const s=n.path,l=new Q(s.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!s.isPrefixOf(c.path))break;c.path.length>s.length+1||sA(oA(d),r)<=0||(i.has(d.key)||Xl(n,d))&&(o=o.insert(d.key,d.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(e,n,r,i){Z()}Lr(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new PC(this)}getSize(e){return V.resolve(this.size)}}class PC extends EC{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e){this.persistence=e,this.Br=new $r(n=>od(n),sd),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.kr=0,this.qr=new fd,this.targetCount=0,this.Qr=Di.qn()}forEachTarget(e,n){return this.Br.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),V.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Di(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Un(n),V.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Br.forEach((s,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(s),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(o).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),V.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,n){this.Kr={},this.overlays={},this.$r=new ql(0),this.Ur=!1,this.Ur=!0,this.Wr=new AC,this.referenceDelegate=e(this),this.Gr=new bC(this),this.indexManager=new pC,this.remoteDocumentCache=function(i){return new kC(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new dC(n),this.jr=new IC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new CC(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new RC(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(o=>this.referenceDelegate.Jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Yr(e,n){return V.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class RC extends lA{constructor(e){super(),this.currentSequenceNumber=e}}class hd{constructor(e){this.persistence=e,this.Zr=new fd,this.Xr=null}static ei(e){return new hd(e)}get ti(){if(this.Xr)return this.Xr;throw Z()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),V.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.ti.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.ti,r=>{const i=Q.fromPath(r);return this.ni(e,i).next(o=>{o||n.removeEntry(i,X.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return V.or([()=>V.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class wl{constructor(e,n){this.persistence=e,this.ri=new $r(r=>cA(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=wC(this,n)}static ei(e,n){return new wl(e,n)}Hr(){}Jr(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return V.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(o=>o?V.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.Lr(e,s=>this.ir(e,s,n).next(l=>{l||(r++,o.removeEntry(s,X.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),V.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Va(e.data.value)),n}ir(e,n,r){return V.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ri.get(n);return V.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=i}static zi(e,n){let r=se(),i=se();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new dd(e,n.fromCache,r,i)}}/**
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
 */class NC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return DI()?8:uA(RI())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.Xi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.es(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new NC;return this.ts(e,n,s).next(l=>{if(o.result=l,this.Hi)return this.ns(e,n,s,l.size)})}).next(()=>o.result)}ns(e,n,r,i){return r.documentReadCount<this.Ji?(Gr()<=re.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Qr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),V.resolve()):(Gr()<=re.DEBUG&&H("QueryEngine","Query:",Qr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(Gr()<=re.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Qr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zt(n))):V.resolve())}Xi(e,n){if(vg(n))return V.resolve(null);let r=Zt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=kf(n,null,"F"),r=Zt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=se(...o);return this.Zi.getDocuments(e,s).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.rs(n,l);return this.ss(n,c,s,u.readTime)?this.Xi(e,kf(n,null,"F")):this.os(e,c,n,u)}))})))}es(e,n,r,i){return vg(n)||i.isEqual(X.min())?V.resolve(null):this.Zi.getDocuments(e,r).next(o=>{const s=this.rs(n,o);return this.ss(n,s,r,i)?V.resolve(null):(Gr()<=re.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Qr(n)),this.os(e,s,n,iA(i,-1)).next(l=>l))})}rs(e,n){let r=new Oe(C1(e));return n.forEach((i,o)=>{Xl(e,o)&&(r=r.add(o))}),r}ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ts(e,n,r){return Gr()<=re.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Qr(n)),this.Zi.getDocumentsMatchingQuery(e,n,rr.min(),r)}os(e,n,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n,r,i){this.persistence=e,this._s=n,this.serializer=i,this.us=new be(ie),this.cs=new $r(o=>od(o),sd),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TC(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function VC(t,e,n,r){return new LC(t,e,n,r)}async function W1(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],l=[];let u=se();for(const c of i){s.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of o){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ts:c,removedBatchIds:s,addedBatchIds:l}))})})}function q1(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function OC(t,e){const n=oe(t),r=e.snapshotVersion;let i=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.hs.newChangeBuffer({trackRemovals:!0});i=n.us;const l=[];e.targetChanges.forEach((d,m)=>{const p=i.get(m);if(!p)return;l.push(n.Gr.removeMatchingKeys(o,d.removedDocuments,m).next(()=>n.Gr.addMatchingKeys(o,d.addedDocuments,m)));let w=p.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(m)!==null?w=w.withResumeToken(qe.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(m,w),function(k,R,_){return k.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(p,w,d)&&l.push(n.Gr.updateTargetData(o,w))});let u=ar(),c=se();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(o,d))}),l.push(FC(o,s,e.documentUpdates).next(d=>{u=d.Is,c=d.Es})),!r.isEqual(X.min())){const d=n.Gr.getLastRemoteSnapshotVersion(o).next(m=>n.Gr.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(d)}return V.waitFor(l).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,u,c)).next(()=>u)}).then(o=>(n.us=i,o))}function FC(t,e,n){let r=se(),i=se();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=ar();return n.forEach((l,u)=>{const c=o.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),s=s.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),s=s.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Is:s,Es:i}})}function MC(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Gr.getTargetData(r,e).next(o=>o?(i=o,V.resolve(i)):n.Gr.allocateTargetId(r).next(s=>(i=new $n(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function Df(t,e,n){const r=oe(t),i=r.us.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!Hi(s))throw s;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function Pg(t,e,n){const r=oe(t);let i=X.min(),o=se();return r.persistence.runTransaction("Execute query","readwrite",s=>function(u,c,d){const m=oe(u),p=m.cs.get(d);return p!==void 0?V.resolve(m.us.get(p)):m.Gr.getTargetData(c,d)}(r,s,Zt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(s,l.targetId).next(u=>{o=u})}).next(()=>r._s.getDocumentsMatchingQuery(s,e,n?i:X.min(),n?o:se())).next(l=>(zC(r,bA(e),l),{documents:l,ds:o})))}function zC(t,e,n){let r=t.ls.get(e)||X.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.ls.set(e,r)}class bg{constructor(){this.activeTargetIds=OA()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jC{constructor(){this._o=new bg,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new bg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ma=null;function hc(){return ma===null?ma=function(){return 268435456+Math.round(2147483648*Math.random())}():ma++,"0x"+ma.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection";class HC extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${i}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Oo(n,r,i,o,s){const l=hc(),u=this.No(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(c,o,s),this.Bo(n,u,c,i).then(d=>(H("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Pi("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}ko(n,r,i,o,s,l){return this.Oo(n,r,i,o,s)}Lo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}No(n,r){const i=UC[n];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,i){const o=hc();return new Promise((s,l)=>{const u=new h1;u.setWithCredentials(!0),u.listenOnce(d1.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case La.NO_ERROR:const d=u.getResponseJson();H(Ze,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),s(d);break;case La.TIMEOUT:H(Ze,`RPC '${e}' ${o} timed out`),l(new q(U.DEADLINE_EXCEEDED,"Request time out"));break;case La.HTTP_ERROR:const m=u.getStatus();if(H(Ze,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const w=p==null?void 0:p.error;if(w&&w.status&&w.message){const C=function(R){const _=R.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(_)>=0?_:U.UNKNOWN}(w.status);l(new q(C,w.message))}else l(new q(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(U.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{H(Ze,`RPC '${e}' ${o} completed.`)}});const c=JSON.stringify(i);H(Ze,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",c,r,15)})}qo(e,n,r){const i=hc(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=g1(),l=p1(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Lo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=o.join("");H(Ze,`Creating RPC '${e}' stream ${i}: ${d}`,u);const m=s.createWebChannel(d,u);let p=!1,w=!1;const C=new BC({Eo:R=>{w?H(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(p||(H(Ze,`Opening RPC '${e}' stream ${i} transport.`),m.open(),p=!0),H(Ze,`RPC '${e}' stream ${i} sending:`,R),m.send(R))},Ao:()=>m.close()}),k=(R,_,y)=>{R.listen(_,T=>{try{y(T)}catch(N){setTimeout(()=>{throw N},0)}})};return k(m,wo.EventType.OPEN,()=>{w||(H(Ze,`RPC '${e}' stream ${i} transport opened.`),C.So())}),k(m,wo.EventType.CLOSE,()=>{w||(w=!0,H(Ze,`RPC '${e}' stream ${i} transport closed`),C.Do())}),k(m,wo.EventType.ERROR,R=>{w||(w=!0,Pi(Ze,`RPC '${e}' stream ${i} transport errored:`,R),C.Do(new q(U.UNAVAILABLE,"The operation could not be completed")))}),k(m,wo.EventType.MESSAGE,R=>{var _;if(!w){const y=R.data[0];Te(!!y);const T=y,N=(T==null?void 0:T.error)||((_=T[0])===null||_===void 0?void 0:_.error);if(N){H(Ze,`RPC '${e}' stream ${i} received error:`,N);const F=N.status;let j=function(E){const I=Re[E];if(I!==void 0)return V1(I)}(F),S=N.message;j===void 0&&(j=U.INTERNAL,S="Unknown error status: "+F+" with message "+N.message),w=!0,C.Do(new q(j,S)),m.close()}else H(Ze,`RPC '${e}' stream ${i} received:`,y),C.vo(y)}}),k(l,m1.STAT_EVENT,R=>{R.stat===Sf.PROXY?H(Ze,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===Sf.NOPROXY&&H(Ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.bo()},0),C}}function dc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(t){return new eC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e,n,r=1e3,i=1.5,o=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=i,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n,r,i,o,s,l,u){this.li=e,this.Yo=r,this.Zo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new G1(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(In(n.toString()),In("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===n&&this.I_(r,i)},r=>{e(()=>{const i=new q(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qC extends WC{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=oC(this.serializer,e),r=function(o){if(!("targetChange"in o))return X.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?X.min():s.readTime?yi(s.readTime):X.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=Ag(this.serializer),n.addTarget=function(o,s){let l;const u=s.target;if(l=Cf(u)?{documents:sC(o,u)}:{query:aC(o,u).ct},l.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){l.resumeToken=nC(o,s.resumeToken);const c=Rf(o,s.expectedCount);c!==null&&(l.expectedCount=c)}else if(s.snapshotVersion.compareTo(X.min())>0){l.readTime=tC(o,s.snapshotVersion.toTimestamp());const c=Rf(o,s.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=uC(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=Ag(this.serializer),n.removeTarget=e,this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new q(U.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Oo(e,Nf(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(U.UNKNOWN,o.toString())})}ko(e,n,r,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,l])=>this.connection.ko(e,Nf(n,r),i,s,l,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(U.UNKNOWN,s.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class GC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(In(n),this.C_=!1):H("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(s=>{r.enqueueAndForget(async()=>{Is(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=oe(u);c.k_.add(4),await Ts(c),c.K_.set("Unknown"),c.k_.delete(4),await tu(c)}(this))})}),this.K_=new GC(r,i)}}async function tu(t){if(Is(t))for(const e of t.q_)await e(!0)}async function Ts(t){for(const e of t.q_)await e(!1)}function Q1(t,e){const n=oe(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),vd(n)?gd(n):Wi(n).s_()&&pd(n,e))}function md(t,e){const n=oe(t),r=Wi(n);n.B_.delete(e),r.s_()&&Y1(n,e),n.B_.size===0&&(r.s_()?r.a_():Is(n)&&n.K_.set("Unknown"))}function pd(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Wi(t).V_(e)}function Y1(t,e){t.U_.xe(e),Wi(t).m_(e)}function gd(t){t.U_=new YA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Wi(t).start(),t.K_.F_()}function vd(t){return Is(t)&&!Wi(t).i_()&&t.B_.size>0}function Is(t){return oe(t).k_.size===0}function X1(t){t.U_=void 0}async function YC(t){t.K_.set("Online")}async function XC(t){t.B_.forEach((e,n)=>{pd(t,e)})}async function JC(t,e){X1(t),vd(t)?(t.K_.O_(e),gd(t)):t.K_.set("Unknown")}async function ZC(t,e,n){if(t.K_.set("Online"),e instanceof F1&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const l of o.targetIds)i.B_.has(l)&&(await i.remoteSyncer.rejectListen(l,s),i.B_.delete(l),i.U_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ng(t,r)}else if(e instanceof Fa?t.U_.$e(e):e instanceof O1?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(X.min()))try{const r=await q1(t.localStore);n.compareTo(r)>=0&&await function(o,s){const l=o.U_.it(s);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=o.B_.get(c);d&&o.B_.set(c,d.withResumeToken(u.resumeToken,s))}}),l.targetMismatches.forEach((u,c)=>{const d=o.B_.get(u);if(!d)return;o.B_.set(u,d.withResumeToken(qe.EMPTY_BYTE_STRING,d.snapshotVersion)),Y1(o,u);const m=new $n(d.target,u,c,d.sequenceNumber);pd(o,m)}),o.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Ng(t,r)}}async function Ng(t,e,n){if(!Hi(e))throw e;t.k_.add(1),await Ts(t),t.K_.set("Offline"),n||(n=()=>q1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await tu(t)})}async function Dg(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Is(n);n.k_.add(3),await Ts(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await tu(n)}async function ek(t,e){const n=oe(t);e?(n.k_.delete(2),await tu(n)):e||(n.k_.add(2),await Ts(n),n.K_.set("Unknown"))}function Wi(t){return t.W_||(t.W_=function(n,r,i){const o=oe(n);return o.b_(),new qC(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Ro:YC.bind(null,t),mo:XC.bind(null,t),po:JC.bind(null,t),R_:ZC.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),vd(t)?gd(t):t.K_.set("Unknown")):(await t.W_.stop(),X1(t))})),t.W_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,l=new yd(e,n,s,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function J1(t,e){if(In("AsyncQueue",`${e}: ${t}`),Hi(t))return new q(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{static emptySet(e){return new _i(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Eo(),this.sortedSet=new be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _i)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new _i;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(){this.z_=new be(Q.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):Z():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Li{constructor(e,n,r,i,o,s,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(l=>{s.push({type:0,doc:l})}),new Li(e,n,_i.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class nk{constructor(){this.queries=Vg(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const i=oe(n),o=i.queries;i.queries=Vg(),o.forEach((s,l)=>{for(const u of l.J_)u.onError(r)})})(this,new q(U.ABORTED,"Firestore shutting down"))}}function Vg(){return new $r(t=>A1(t),Yl)}async function Z1(t,e){const n=oe(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.Y_()&&e.Z_()&&(r=2):(o=new tk,r=e.Z_()?0:1);try{switch(r){case 0:o.H_=await n.onListen(i,!0);break;case 1:o.H_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(s){const l=J1(s,`Initialization of query '${Qr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,o),o.J_.push(e),e.ea(n.onlineState),o.H_&&e.ta(o.H_)&&_d(n)}async function e_(t,e){const n=oe(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const s=o.J_.indexOf(e);s>=0&&(o.J_.splice(s,1),o.J_.length===0?i=e.Z_()?0:1:!o.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function rk(t,e){const n=oe(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const l of s.J_)l.ta(i)&&(r=!0);s.H_=i}}r&&_d(n)}function ik(t,e,n){const r=oe(t),i=r.queries.get(e);if(i)for(const o of i.J_)o.onError(n);r.queries.delete(e)}function _d(t){t.X_.forEach(e=>{e.next()})}var Lf,Og;(Og=Lf||(Lf={})).na="default",Og.Cache="cache";class t_{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Li(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Li.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Lf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e){this.key=e}}class r_{constructor(e){this.key=e}}class ok{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=se(),this.mutatedKeys=se(),this.Va=C1(e),this.ma=new _i(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new Lg,i=n?n.ma:this.ma;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,m)=>{const p=i.get(d),w=Xl(this.query,m)?m:null,C=!!p&&this.mutatedKeys.has(p.key),k=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let R=!1;p&&w?p.data.isEqual(w.data)?C!==k&&(r.track({type:3,doc:w}),R=!0):this.ya(p,w)||(r.track({type:2,doc:w}),R=!0,(u&&this.Va(w,u)>0||c&&this.Va(w,c)<0)&&(l=!0)):!p&&w?(r.track({type:0,doc:w}),R=!0):p&&!w&&(r.track({type:1,doc:p}),R=!0,(u||c)&&(l=!0)),R&&(w?(s=s.add(w),o=k?o.add(d):o.delete(d)):(s=s.delete(d),o=o.delete(d)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const d=this.query.limitType==="F"?s.last():s.first();s=s.delete(d.key),o=o.delete(d.key),r.track({type:1,doc:d})}return{ma:s,pa:r,ss:l,mutatedKeys:o}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const s=e.pa.j_();s.sort((d,m)=>function(w,C){const k=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return k(w)-k(C)}(d.type,m.type)||this.Va(d.doc,m.doc)),this.wa(r),i=i!=null&&i;const l=n&&!i?this.Sa():[],u=this.Ra.size===0&&this.current&&!i?1:0,c=u!==this.Aa;return this.Aa=u,s.length!==0||c?{snapshot:new Li(this.query,e.ma,o,s,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Lg,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=se(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new r_(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new n_(r))}),n}va(e){this.da=e.ds,this.Ra=se();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Li.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class sk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class ak{constructor(e){this.key=e,this.Fa=!1}}class lk{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ma={},this.xa=new $r(l=>A1(l),Yl),this.Oa=new Map,this.Na=new Set,this.La=new be(Q.comparator),this.Ba=new Map,this.ka=new fd,this.qa={},this.Qa=new Map,this.Ka=Di.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function uk(t,e,n=!0){const r=l_(t);let i;const o=r.xa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Ca()):i=await i_(r,e,n,!0),i}async function ck(t,e){const n=l_(t);await i_(n,e,!0,!1)}async function i_(t,e,n,r){const i=await MC(t.localStore,Zt(e)),o=i.targetId,s=t.sharedClientState.addLocalQueryTarget(o,n);let l;return r&&(l=await fk(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&n&&Q1(t.remoteStore,i),l}async function fk(t,e,n,r,i){t.Ua=(m,p,w)=>async function(k,R,_,y){let T=R.view.ga(_);T.ss&&(T=await Pg(k.localStore,R.query,!1).then(({documents:S})=>R.view.ga(S,T)));const N=y&&y.targetChanges.get(R.targetId),F=y&&y.targetMismatches.get(R.targetId)!=null,j=R.view.applyChanges(T,k.isPrimaryClient,N,F);return Mg(k,R.targetId,j.ba),j.snapshot}(t,m,p,w);const o=await Pg(t.localStore,e,!0),s=new ok(e,o.ds),l=s.ga(o.documents),u=Ss.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=s.applyChanges(l,t.isPrimaryClient,u);Mg(t,n,c.ba);const d=new sk(e,n,s);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),c.snapshot}async function hk(t,e,n){const r=oe(t),i=r.xa.get(e),o=r.Oa.get(i.targetId);if(o.length>1)return r.Oa.set(i.targetId,o.filter(s=>!Yl(s,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Df(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&md(r.remoteStore,i.targetId),Vf(r,i.targetId)}).catch(Wl)):(Vf(r,i.targetId),await Df(r.localStore,i.targetId,!0))}async function dk(t,e){const n=oe(t),r=n.xa.get(e),i=n.Oa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),md(n.remoteStore,r.targetId))}async function o_(t,e){const n=oe(t);try{const r=await OC(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Ba.get(o);s&&(Te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.Fa=!0:i.modifiedDocuments.size>0?Te(s.Fa):i.removedDocuments.size>0&&(Te(s.Fa),s.Fa=!1))}),await a_(n,r,e)}catch(r){await Wl(r)}}function Fg(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.xa.forEach((o,s)=>{const l=s.view.ea(e);l.snapshot&&i.push(l.snapshot)}),function(s,l){const u=oe(s);u.onlineState=l;let c=!1;u.queries.forEach((d,m)=>{for(const p of m.J_)p.ea(l)&&(c=!0)}),c&&_d(u)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mk(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ba.get(e),o=i&&i.key;if(o){let s=new be(Q.comparator);s=s.insert(o,nt.newNoDocument(o,X.min()));const l=se().add(o),u=new eu(X.min(),new Map,new be(ie),s,l);await o_(r,u),r.La=r.La.remove(o),r.Ba.delete(e),wd(r)}else await Df(r.localStore,e,!1).then(()=>Vf(r,e,n)).catch(Wl)}function Vf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||s_(t,r)})}function s_(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(md(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),wd(t))}function Mg(t,e,n){for(const r of n)r instanceof n_?(t.ka.addReference(r.key,e),pk(t,r)):r instanceof r_?(H("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||s_(t,r.key)):Z()}function pk(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(H("SyncEngine","New document in limbo: "+n),t.Na.add(r),wd(t))}function wd(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new Q(ye.fromString(e)),r=t.Ka.next();t.Ba.set(r,new ak(n)),t.La=t.La.insert(n,r),Q1(t.remoteStore,new $n(Zt(ad(n.path)),r,"TargetPurposeLimboResolution",ql.oe))}}async function a_(t,e,n){const r=oe(t),i=[],o=[],s=[];r.xa.isEmpty()||(r.xa.forEach((l,u)=>{s.push(r.Ua(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=dd.zi(u.targetId,c);o.push(m)}}))}),await Promise.all(s),r.Ma.R_(i),await async function(u,c){const d=oe(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(c,p=>V.forEach(p.Wi,w=>d.persistence.referenceDelegate.addReference(m,p.targetId,w)).next(()=>V.forEach(p.Gi,w=>d.persistence.referenceDelegate.removeReference(m,p.targetId,w)))))}catch(m){if(!Hi(m))throw m;H("LocalStore","Failed to update sequence numbers: "+m)}for(const m of c){const p=m.targetId;if(!m.fromCache){const w=d.us.get(p),C=w.snapshotVersion,k=w.withLastLimboFreeSnapshotVersion(C);d.us=d.us.insert(p,k)}}}(r.localStore,o))}async function gk(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await W1(n.localStore,e);n.currentUser=e,function(o,s){o.Qa.forEach(l=>{l.forEach(u=>{u.reject(new q(U.CANCELLED,s))})}),o.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await a_(n,r.Ts)}}function vk(t,e){const n=oe(t),r=n.Ba.get(e);if(r&&r.Fa)return se().add(r.key);{let i=se();const o=n.Oa.get(e);if(!o)return i;for(const s of o){const l=n.xa.get(s);i=i.unionWith(l.view.fa)}return i}}function l_(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=o_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mk.bind(null,e),e.Ma.R_=rk.bind(null,e.eventManager),e.Ma.Wa=ik.bind(null,e.eventManager),e}class El{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=K1(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return VC(this.persistence,new DC,e.initialUser,this.serializer)}ja(e){return new H1(hd.ei,this.serializer)}za(e){return new jC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}El.provider={build:()=>new El};class yk extends El{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Te(this.persistence.referenceDelegate instanceof wl);const r=this.persistence.referenceDelegate.garbageCollector;return new yC(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new H1(r=>wl.ei(r,n),this.serializer)}}class Of{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gk.bind(null,this.syncEngine),await ek(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nk}()}createDatastore(e){const n=K1(e.databaseInfo.databaseId),r=function(o){return new HC(o)}(e.databaseInfo);return function(o,s,l,u){return new KC(o,s,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,l){return new QC(r,i,o,s,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Fg(this.syncEngine,n,0),function(){return Rg.p()?new Rg:new $C}())}createSyncEngine(e,n){return function(i,o,s,l,u,c,d){const m=new lk(i,o,s,l,u,c);return d&&(m.$a=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const o=oe(i);H("RemoteStore","RemoteStore shutting down."),o.k_.add(5),await Ts(o),o.Q_.shutdown(),o.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Of.provider={build:()=>new Of};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class u_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):In("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,n,r,i,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=y1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=J1(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function mc(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await W1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function zg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wk(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Dg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Dg(e.remoteStore,i)),t._onlineComponents=e}async function wk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await mc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===U.FAILED_PRECONDITION||i.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Pi("Error using user provided cache. Falling back to memory cache: "+n),await mc(t,new El)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await mc(t,new yk(void 0));return t._offlineComponents}async function Ek(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await zg(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await zg(t,new Of))),t._onlineComponents}async function c_(t){const e=await Ek(t),n=e.eventManager;return n.onListen=uk.bind(null,e.syncEngine),n.onUnlisten=hk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=ck.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=dk.bind(null,e.syncEngine),n}function Sk(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,l,u,c){const d=new u_({next:p=>{d.eu(),s.enqueueAndForget(()=>e_(o,m));const w=p.docs.has(l);!w&&p.fromCache?c.reject(new q(U.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&p.fromCache&&u&&u.source==="server"?c.reject(new q(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),m=new t_(ad(l.path),d,{includeMetadataChanges:!0,ua:!0});return Z1(o,m)}(await c_(t),t.asyncQueue,e,n,r)),r.promise}function Tk(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,l,u,c){const d=new u_({next:p=>{d.eu(),s.enqueueAndForget(()=>e_(o,m)),p.fromCache&&u.source==="server"?c.reject(new q(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),m=new t_(l,d,{includeMetadataChanges:!0,ua:!0});return Z1(o,m)}(await c_(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function f_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(t,e,n){if(!n)throw new q(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ik(t,e,n,r){if(e===!0&&r===!0)throw new q(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $g(t){if(!Q.isDocumentKey(t))throw new q(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ug(t){if(Q.isDocumentKey(t))throw new q(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function xk(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function fs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xk(t);throw new q(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ik("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=f_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Qx;switch(r.type){case"firstParty":return new Zx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=jg.get(n);r&&(H("ComponentProvider","Removing Datastore"),jg.delete(n),r.terminate())}(this),Promise.resolve()}}function Ak(t,e,n,r={}){var i;const o=(t=fs(t,nu))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Pi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=et.MOCK_USER;else{l=bI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new et(c)}t._authCredentials=new Yx(new v1(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ru(this.firestore,e,this._query)}}class en{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new en(this.firestore,e,this._key)}}class Zn extends ru{constructor(e,n,r){super(e,n,ad(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new en(this.firestore,null,new Q(e))}withConverter(e){return new Zn(this.firestore,e,this._path)}}function d_(t,e,...n){if(t=i1(t),h_("collection","path",e),t instanceof nu){const r=ye.fromString(e,...n);return Ug(r),new Zn(t,null,r)}{if(!(t instanceof en||t instanceof Zn))throw new q(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return Ug(r),new Zn(t.firestore,null,r)}}function m_(t,e,...n){if(t=i1(t),arguments.length===1&&(e=y1.newId()),h_("doc","path",e),t instanceof nu){const r=ye.fromString(e,...n);return $g(r),new en(t,null,new Q(r))}{if(!(t instanceof en||t instanceof Zn))throw new q(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return $g(r),new en(t.firestore,t instanceof Zn?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new G1(this,"async_queue_retry"),this.fu=()=>{const r=dc();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=dc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=dc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Jn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Hi(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(s){let l=s.message||"";return s.stack&&(l=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),l}(r);throw In("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const i=yd.createAndSchedule(this,e,n,r,o=>this.Su(o));return this.du.push(i),i}pu(){this.Au&&Z()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class Ed extends nu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Hg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hg(e),this._firestoreClient=void 0,await e}}}function Ck(t,e){const n=typeof t=="object"?t:zx(),r=typeof t=="string"?t:"(default)",i=Vx(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=kI("firestore");o&&Ak(i,...o)}return i}function p_(t){if(t._terminated)throw new q(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||kk(t),t._firestoreClient}function kk(t){var e,n,r;const i=t._freezeSettings(),o=function(l,u,c,d){return new mA(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,f_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new _k(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sl(qe.fromBase64String(e))}catch(n){throw new q(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Sl(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
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
 */class bk{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}const Rk=new RegExp("[~\\*/\\[\\]]");function Nk(t,e,n){if(e.search(Rk)>=0)throw Wg(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new g_(...e.split("."))._internalPath}catch{throw Wg(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function Wg(t,e,n,r,i){let o=`Function ${e}() called with invalid data`;o+=". ";let s="";return new q(U.INVALID_ARGUMENT,o+t+s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new en(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Dk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(y_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Dk extends v_{data(){return super.data()}}function y_(t,e){return typeof e=="string"?Nk(t,e):e instanceof g_?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vk{convertValue(e,n="none"){switch(sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Es(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertVectorValue(e){var n,r,i;const o=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(s=>ke(s.doubleValue));return new bk(o)}convertGeoPoint(e){return new Pk(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ls(e));default:return null}}convertTimestamp(e){const n=ir(e);return new yt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ye.fromString(e);Te(B1(r));const i=new us(r.get(1),r.get(3)),o=new Q(r.popFirst(5));return i.isEqual(n)||In(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class __ extends v_{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ma(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(y_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ma extends __{data(e={}){return super.data(e)}}class Ok{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new To(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ma(this._firestore,this._userDataWriter,r.key,r,new To(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(l=>{const u=new Ma(i._firestore,i._userDataWriter,l.doc.key,l.doc,new To(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const u=new Ma(i._firestore,i._userDataWriter,l.doc.key,l.doc,new To(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=s.indexOf(l.doc.key),s=s.delete(l.doc.key)),l.type!==1&&(s=s.add(l.doc),d=s.indexOf(l.doc.key)),{type:Fk(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Fk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t){t=fs(t,en);const e=fs(t.firestore,Ed);return Sk(p_(e),t._key).then(n=>Mk(e,t,n))}class E_ extends Vk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sl(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new en(this.firestore,null,n)}}function S_(t){t=fs(t,ru);const e=fs(t.firestore,Ed),n=p_(e),r=new E_(e);return Lk(t._query),Tk(n,t._query).then(i=>new Ok(e,r,t,i))}function Mk(t,e,n){const r=n.docs.get(e._key),i=new E_(t);return new __(t,i,e._key,r,new To(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Bi=i})(Mx),pl(new os("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),l=new Ed(new Xx(r.getProvider("auth-internal")),new tA(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new us(c.options.projectId,d)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),vi(sg,"4.7.5",e),vi(sg,"4.7.5","esm2017")})();var zk="firebase",jk="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vi(zk,jk,"app");const $k={apiKey:"AIzaSyDxwBDqOKQXd7RH-HbfnHsStHo81cEKt9I",authDomain:"portfolio-web-b44c7.firebaseapp.com",projectId:"portfolio-web-b44c7",storageBucket:"portfolio-web-b44c7.firebasestorage.app",messagingSenderId:"589085836836",appId:"1:589085836836:web:c3dd80e84548d0e0e2fab1"},Uk=l1($k),Tl=Ck(Uk),Bk=()=>{const[t,e]=L.useState([]);return L.useEffect(()=>{(async()=>{try{const r=d_(Tl,"project_info"),o=(await S_(r)).docs.map(s=>({...s.data(),id:s.id}));o.sort((s,l)=>s.id.localeCompare(l.id,void 0,{numeric:!0})),e(o)}catch(r){console.error(r)}})()},[]),O.jsxs("div",{id:"projects",className:"mt-25",children:[O.jsx("h2",{"data-reveal":!0,className:"font-mono text-xl underline",children:"Engineering Projects"}),O.jsx("div",{className:"flex flex-col gap-8 mt-10",children:t.slice(0,3).map((n,r)=>{const i=Array.isArray(n.tech_stack)?n.tech_stack:typeof n.tech_stack=="string"?n.tech_stack.split(",").map(o=>o.trim()).filter(Boolean):[];return O.jsx("div",{"data-reveal":!0,style:{"--reveal-delay":`${r*100}ms`},className:`project-feature relative flex items-center rounded-lg bg-light-cards p-6 ${r%2!==0?"flex-row-reverse":""} fade-in`,children:O.jsxs("div",{className:"project-content",children:[O.jsx("p",{className:"mb-2 font-mono text-[0.9rem] text-primary",children:n.type||"Featured Project"}),O.jsx("h3",{className:"mb-3 text-[1.8rem]",children:O.jsx(ki,{to:`/project/${n.id}`,className:"text-inherit no-underline transition-colors hover:text-primary focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",children:n.name})}),O.jsx("div",{className:"mb-6 rounded bg-bg-light p-3",children:O.jsx("p",{className:"text-justify",children:n.description})}),i.length>0&&O.jsx("ul",{className:"mb-1 flex list-none gap-6 font-mono text-[0.85rem]",children:i.map((o,s)=>O.jsx("li",{children:o},`${n.name}-${o}-${s}`))})]})},n.id||`${n.name}-${r}`)})}),O.jsx("div",{className:"flex justify-end",children:t.length>3&&O.jsx(ki,{to:"/projects/",className:"mt-8 rounded border border-primary px-4 py-2 font-mono text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",children:"More"})})]})};/*!
 * Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */function Ff(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Hk(t){if(Array.isArray(t))return t}function Wk(t){if(Array.isArray(t))return Ff(t)}function qk(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Kk(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,T_(r.key),r)}}function Gk(t,e,n){return e&&Kk(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function za(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Sd(t))||e){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(u){throw u},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,s=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var u=n.next();return s=u.done,u},e:function(u){l=!0,o=u},f:function(){try{s||n.return==null||n.return()}finally{if(l)throw o}}}}function G(t,e,n){return(e=T_(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Qk(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Yk(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,o,s,l=[],u=!0,c=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(l.push(r.value),l.length!==e);u=!0);}catch(d){c=!0,i=d}finally{try{if(!u&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw i}}return l}}function Xk(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?qg(Object(n),!0).forEach(function(r){G(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function iu(t,e){return Hk(t)||Yk(t,e)||Sd(t,e)||Xk()}function Bt(t){return Wk(t)||Qk(t)||Sd(t)||Jk()}function Zk(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function T_(t){var e=Zk(t,"string");return typeof e=="symbol"?e:e+""}function Il(t){"@babel/helpers - typeof";return Il=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Il(t)}function Sd(t,e){if(t){if(typeof t=="string")return Ff(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ff(t,e):void 0}}var Kg=function(){},Td={},I_={},x_=null,A_={mark:Kg,measure:Kg};try{typeof window<"u"&&(Td=window),typeof document<"u"&&(I_=document),typeof MutationObserver<"u"&&(x_=MutationObserver),typeof performance<"u"&&(A_=performance)}catch{}var eP=Td.navigator||{},Gg=eP.userAgent,Qg=Gg===void 0?"":Gg,lr=Td,ge=I_,Yg=x_,pa=A_;lr.document;var kn=!!ge.documentElement&&!!ge.head&&typeof ge.addEventListener=="function"&&typeof ge.createElement=="function",C_=~Qg.indexOf("MSIE")||~Qg.indexOf("Trident/"),ga,tP=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,nP=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,k_={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},rP={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},P_=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],Ke="classic",xs="duotone",b_="sharp",R_="sharp-duotone",N_="chisel",D_="etch",L_="graphite",V_="jelly",O_="jelly-duo",F_="jelly-fill",M_="mosaic",z_="notdog",j_="notdog-duo",$_="pixel",U_="slab",B_="slab-duo",H_="slab-press",W_="slab-press-duo",q_="thumbprint",K_="utility",G_="utility-duo",Q_="utility-fill",Y_="vellum",X_="whiteboard",iP="Classic",oP="Duotone",sP="Sharp",aP="Sharp Duotone",lP="Chisel",uP="Etch",cP="Graphite",fP="Jelly",hP="Jelly Duo",dP="Jelly Fill",mP="Mosaic",pP="Notdog",gP="Notdog Duo",vP="Pixel",yP="Slab",_P="Slab Duo",wP="Slab Press",EP="Slab Press Duo",SP="Thumbprint",TP="Utility",IP="Utility Duo",xP="Utility Fill",AP="Vellum",CP="Whiteboard",J_=[Ke,xs,b_,R_,N_,D_,L_,V_,O_,F_,M_,z_,j_,$_,U_,B_,H_,W_,q_,K_,G_,Q_,Y_,X_];ga={},G(G(G(G(G(G(G(G(G(G(ga,Ke,iP),xs,oP),b_,sP),R_,aP),N_,lP),D_,uP),L_,cP),V_,fP),O_,hP),F_,dP),G(G(G(G(G(G(G(G(G(G(ga,M_,mP),z_,pP),j_,gP),$_,vP),U_,yP),B_,_P),H_,wP),W_,EP),q_,SP),K_,TP),G(G(G(G(ga,G_,IP),Q_,xP),Y_,AP),X_,CP);var kP={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},PP={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},bP=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),RP={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},Z_=["fak","fa-kit","fakd","fa-kit-duotone"],Xg={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},NP=["kit"],DP="kit",LP="kit-duotone",VP="Kit",OP="Kit Duotone";G(G({},DP,VP),LP,OP);var FP={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},MP={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},zP={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Jg={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},va,ya={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},jP=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],$P="classic",UP="duotone",BP="sharp",HP="sharp-duotone",WP="chisel",qP="etch",KP="graphite",GP="jelly",QP="jelly-duo",YP="jelly-fill",XP="mosaic",JP="notdog",ZP="notdog-duo",eb="pixel",tb="slab",nb="slab-duo",rb="slab-press",ib="slab-press-duo",ob="thumbprint",sb="utility",ab="utility-duo",lb="utility-fill",ub="vellum",cb="whiteboard",fb="Classic",hb="Duotone",db="Sharp",mb="Sharp Duotone",pb="Chisel",gb="Etch",vb="Graphite",yb="Jelly",_b="Jelly Duo",wb="Jelly Fill",Eb="Mosaic",Sb="Notdog",Tb="Notdog Duo",Ib="Pixel",xb="Slab",Ab="Slab Duo",Cb="Slab Press",kb="Slab Press Duo",Pb="Thumbprint",bb="Utility",Rb="Utility Duo",Nb="Utility Fill",Db="Vellum",Lb="Whiteboard";va={},G(G(G(G(G(G(G(G(G(G(va,$P,fb),UP,hb),BP,db),HP,mb),WP,pb),qP,gb),KP,vb),GP,yb),QP,_b),YP,wb),G(G(G(G(G(G(G(G(G(G(va,XP,Eb),JP,Sb),ZP,Tb),eb,Ib),tb,xb),nb,Ab),rb,Cb),ib,kb),ob,Pb),sb,bb),G(G(G(G(va,ab,Rb),lb,Nb),ub,Db),cb,Lb);var Vb="kit",Ob="kit-duotone",Fb="Kit",Mb="Kit Duotone";G(G({},Vb,Fb),Ob,Mb);var zb={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},jb={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Mf={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},$b=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],ew=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(jP,$b),Ub=["solid","regular","light","thin","duotone","brands","semibold"],tw=[1,2,3,4,5,6,7,8,9,10],Bb=tw.concat([11,12,13,14,15,16,17,18,19,20]),Hb=["aw","fw","pull-left","pull-right"],Wb=[].concat(Bt(Object.keys(jb)),Ub,Hb,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",ya.GROUP,ya.SWAP_OPACITY,ya.PRIMARY,ya.SECONDARY]).concat(tw.map(function(t){return"".concat(t,"x")})).concat(Bb.map(function(t){return"w-".concat(t)})),qb={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},xn="___FONT_AWESOME___",zf=16,nw="fa",rw="svg-inline--fa",Or="data-fa-i2svg",jf="data-fa-pseudo-element",Kb="data-fa-pseudo-element-pending",Id="data-prefix",xd="data-icon",Zg="fontawesome-i2svg",Gb="async",Qb=["HTML","HEAD","STYLE","SCRIPT"],iw=["::before","::after",":before",":after"],ow=function(){try{return!0}catch{return!1}}();function As(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Ke]}})}var sw=z({},k_);sw[Ke]=z(z(z(z({},{"fa-duotone":"duotone"}),k_[Ke]),Xg.kit),Xg["kit-duotone"]);var Yb=As(sw),$f=z({},RP);$f[Ke]=z(z(z(z({},{duotone:"fad"}),$f[Ke]),Jg.kit),Jg["kit-duotone"]);var ev=As($f),Uf=z({},Mf);Uf[Ke]=z(z({},Uf[Ke]),zP.kit);var Ad=As(Uf),Bf=z({},zb);Bf[Ke]=z(z({},Bf[Ke]),FP.kit);As(Bf);var Xb=tP,aw="fa-layers-text",Jb=nP,Zb=z({},kP);As(Zb);var eR=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],pc=rP,tR=[].concat(Bt(NP),Bt(Wb)),Mo=lr.FontAwesomeConfig||{};function nR(t){var e=ge.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function rR(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ge&&typeof ge.querySelector=="function"){var iR=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];iR.forEach(function(t){var e=iu(t,2),n=e[0],r=e[1],i=rR(nR(n));i!=null&&(Mo[r]=i)})}var lw={styleDefault:"solid",familyDefault:Ke,cssPrefix:nw,replacementClass:rw,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Mo.familyPrefix&&(Mo.cssPrefix=Mo.familyPrefix);var Vi=z(z({},lw),Mo);Vi.autoReplaceSvg||(Vi.observeMutations=!1);var K={};Object.keys(lw).forEach(function(t){Object.defineProperty(K,t,{enumerable:!0,set:function(n){Vi[t]=n,zo.forEach(function(r){return r(K)})},get:function(){return Vi[t]}})});Object.defineProperty(K,"familyPrefix",{enumerable:!0,set:function(e){Vi.cssPrefix=e,zo.forEach(function(n){return n(K)})},get:function(){return Vi.cssPrefix}});lr.FontAwesomeConfig=K;var zo=[];function oR(t){return zo.push(t),function(){zo.splice(zo.indexOf(t),1)}}var Dn=zf,Yt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function sR(t){if(!(!t||!kn)){var e=ge.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ge.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return ge.head.insertBefore(e,r),t}}var aR="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tv(){for(var t=12,e="";t-- >0;)e+=aR[Math.random()*62|0];return e}function qi(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Cd(t){return t.classList?qi(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function uw(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function lR(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(uw(t[n]),'" ')},"").trim()}function ou(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function kd(t){return t.size!==Yt.size||t.x!==Yt.x||t.y!==Yt.y||t.rotate!==Yt.rotate||t.flipX||t.flipY}function uR(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(o," ").concat(s," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function cR(t){var e=t.transform,n=t.width,r=n===void 0?zf:n,i=t.height,o=i===void 0?zf:i,s=t.startCentered,l=s===void 0?!1:s,u="";return l&&C_?u+="translate(".concat(e.x/Dn-r/2,"em, ").concat(e.y/Dn-o/2,"em) "):l?u+="translate(calc(-50% + ".concat(e.x/Dn,"em), calc(-50% + ").concat(e.y/Dn,"em)) "):u+="translate(".concat(e.x/Dn,"em, ").concat(e.y/Dn,"em) "),u+="scale(".concat(e.size/Dn*(e.flipX?-1:1),", ").concat(e.size/Dn*(e.flipY?-1:1),") "),u+="rotate(".concat(e.rotate,"deg) "),u}var fR=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function cw(){var t=nw,e=rw,n=K.cssPrefix,r=K.replacementClass,i=fR;if(n!==t||r!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var nv=!1;function gc(){K.autoAddCss&&!nv&&(sR(cw()),nv=!0)}var hR={mixout:function(){return{dom:{css:cw,insertCss:gc}}},hooks:function(){return{beforeDOMElementCreation:function(){gc()},beforeI2svg:function(){gc()}}}},An=lr||{};An[xn]||(An[xn]={});An[xn].styles||(An[xn].styles={});An[xn].hooks||(An[xn].hooks={});An[xn].shims||(An[xn].shims=[]);var zt=An[xn],fw=[],hw=function(){ge.removeEventListener("DOMContentLoaded",hw),xl=1,fw.map(function(e){return e()})},xl=!1;kn&&(xl=(ge.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ge.readyState),xl||ge.addEventListener("DOMContentLoaded",hw));function dR(t){kn&&(xl?setTimeout(t,0):fw.push(t))}function Cs(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,o=i===void 0?[]:i;return typeof t=="string"?uw(t):"<".concat(e," ").concat(lR(r),">").concat(o.map(Cs).join(""),"</").concat(e,">")}function rv(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var vc=function(e,n,r,i){var o=Object.keys(e),s=o.length,l=n,u,c,d;for(r===void 0?(u=1,d=e[o[0]]):(u=0,d=r);u<s;u++)c=o[u],d=l(d,e[c],c,e);return d};function dw(t){return Bt(t).length!==1?null:t.codePointAt(0).toString(16)}function iv(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Hf(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=iv(e);typeof zt.hooks.addPack=="function"&&!i?zt.hooks.addPack(t,iv(e)):zt.styles[t]=z(z({},zt.styles[t]||{}),o),t==="fas"&&Hf("fa",e)}var hs=zt.styles,mR=zt.shims,mw=Object.keys(Ad),pR=mw.reduce(function(t,e){return t[e]=Object.keys(Ad[e]),t},{}),Pd=null,pw={},gw={},vw={},yw={},_w={};function gR(t){return~tR.indexOf(t)}function vR(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!gR(i)?i:null}var ww=function(){var e=function(o){return vc(hs,function(s,l,u){return s[u]=vc(l,o,{}),s},{})};pw=e(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var l=o[2].filter(function(u){return typeof u=="number"});l.forEach(function(u){i[u.toString(16)]=s})}return i}),gw=e(function(i,o,s){if(i[s]=s,o[2]){var l=o[2].filter(function(u){return typeof u=="string"});l.forEach(function(u){i[u]=s})}return i}),_w=e(function(i,o,s){var l=o[2];return i[s]=s,l.forEach(function(u){i[u]=s}),i});var n="far"in hs||K.autoFetchSvg,r=vc(mR,function(i,o){var s=o[0],l=o[1],u=o[2];return l==="far"&&!n&&(l="fas"),typeof s=="string"&&(i.names[s]={prefix:l,iconName:u}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:l,iconName:u}),i},{names:{},unicodes:{}});vw=r.names,yw=r.unicodes,Pd=su(K.styleDefault,{family:K.familyDefault})};oR(function(t){Pd=su(t.styleDefault,{family:K.familyDefault})});ww();function bd(t,e){return(pw[t]||{})[e]}function yR(t,e){return(gw[t]||{})[e]}function xr(t,e){return(_w[t]||{})[e]}function Ew(t){return vw[t]||{prefix:null,iconName:null}}function _R(t){var e=yw[t],n=bd("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ur(){return Pd}var Sw=function(){return{prefix:null,iconName:null,rest:[]}};function wR(t){var e=Ke,n=mw.reduce(function(r,i){return r[i]="".concat(K.cssPrefix,"-").concat(i),r},{});return J_.forEach(function(r){(t.includes(n[r])||t.some(function(i){return pR[r].includes(i)}))&&(e=r)}),e}function su(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Ke:n,i=Yb[r][t];if(r===xs&&!t)return"fad";var o=ev[r][t]||ev[r][i],s=t in zt.styles?t:null,l=o||s||null;return l}function ER(t){var e=[],n=null;return t.forEach(function(r){var i=vR(K.cssPrefix,r);i?n=i:r&&e.push(r)}),{iconName:n,rest:e}}function ov(t){return t.sort().filter(function(e,n,r){return r.indexOf(e)===n})}var sv=ew.concat(Z_);function au(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,i=null,o=ov(t.filter(function(w){return sv.includes(w)})),s=ov(t.filter(function(w){return!sv.includes(w)})),l=o.filter(function(w){return i=w,!P_.includes(w)}),u=iu(l,1),c=u[0],d=c===void 0?null:c,m=wR(o),p=z(z({},ER(s)),{},{prefix:su(d,{family:m})});return z(z(z({},p),xR({values:t,family:m,styles:hs,config:K,canonical:p,givenPrefix:i})),SR(r,i,p))}function SR(t,e,n){var r=n.prefix,i=n.iconName;if(t||!r||!i)return{prefix:r,iconName:i};var o=e==="fa"?Ew(i):{},s=xr(r,i);return i=o.iconName||s||i,r=o.prefix||r,r==="far"&&!hs.far&&hs.fas&&!K.autoFetchSvg&&(r="fas"),{prefix:r,iconName:i}}var TR=J_.filter(function(t){return t!==Ke||t!==xs}),IR=Object.keys(Mf).filter(function(t){return t!==Ke}).map(function(t){return Object.keys(Mf[t])}).flat();function xR(t){var e=t.values,n=t.family,r=t.canonical,i=t.givenPrefix,o=i===void 0?"":i,s=t.styles,l=s===void 0?{}:s,u=t.config,c=u===void 0?{}:u,d=n===xs,m=e.includes("fa-duotone")||e.includes("fad"),p=c.familyDefault==="duotone",w=r.prefix==="fad"||r.prefix==="fa-duotone";if(!d&&(m||p||w)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&TR.includes(n)){var C=Object.keys(l).find(function(R){return IR.includes(R)});if(C||c.autoFetchSvg){var k=bP.get(n).defaultShortPrefixId;r.prefix=k,r.iconName=xr(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||o==="fa")&&(r.prefix=ur()||"fas"),r}var AR=function(){function t(){qk(this,t),this.definitions={}}return Gk(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(l){n.definitions[l]=z(z({},n.definitions[l]||{}),s[l]),Hf(l,s[l]);var u=Ad[Ke][l];u&&Hf(u,s[l]),ww()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],l=s.prefix,u=s.iconName,c=s.icon,d=c[2];n[l]||(n[l]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[l][m]=c)}),n[l][u]=c}),n}}])}(),av=[],ci={},wi={},CR=Object.keys(wi);function kR(t,e){var n=e.mixoutsTo;return av=t,ci={},Object.keys(wi).forEach(function(r){CR.indexOf(r)===-1&&delete wi[r]}),av.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),Il(i[s])==="object"&&Object.keys(i[s]).forEach(function(l){n[s]||(n[s]={}),n[s][l]=i[s][l]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){ci[s]||(ci[s]=[]),ci[s].push(o[s])})}r.provides&&r.provides(wi)}),n}function Wf(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=ci[t]||[];return o.forEach(function(s){e=s.apply(null,[e].concat(r))}),e}function Fr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=ci[t]||[];i.forEach(function(o){o.apply(null,n)})}function cr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return wi[t]?wi[t].apply(null,e):void 0}function qf(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||ur();if(e)return e=xr(n,e)||e,rv(Tw.definitions,n,e)||rv(zt.styles,n,e)}var Tw=new AR,PR=function(){K.autoReplaceSvg=!1,K.observeMutations=!1,Fr("noAuto")},bR={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return kn?(Fr("beforeI2svg",e),cr("pseudoElements2svg",e),cr("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;K.autoReplaceSvg===!1&&(K.autoReplaceSvg=!0),K.observeMutations=!0,dR(function(){NR({autoReplaceSvgRoot:n}),Fr("watch",e)})}},RR={icon:function(e){if(e===null)return null;if(Il(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:xr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=su(e[0]);return{prefix:r,iconName:xr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(K.cssPrefix,"-"))>-1||e.match(Xb))){var i=au(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||ur(),iconName:xr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var o=ur();return{prefix:o,iconName:xr(o,e)||e}}}},At={noAuto:PR,config:K,dom:bR,parse:RR,library:Tw,findIconDefinition:qf,toHtml:Cs},NR=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ge:n;(Object.keys(zt.styles).length>0||K.autoFetchSvg)&&kn&&K.autoReplaceSvg&&At.dom.i2svg({node:r})};function lu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Cs(r)})}}),Object.defineProperty(t,"node",{get:function(){if(kn){var r=ge.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function DR(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,o=t.styles,s=t.transform;if(kd(s)&&n.found&&!r.found){var l=n.width,u=n.height,c={x:l/u/2,y:.5};i.style=ou(z(z({},o),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function LR(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,o=t.symbol,s=o===!0?"".concat(e,"-").concat(K.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},i),{},{id:s}),children:r}]}]}function VR(t){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(n){return n in t})}function Rd(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,o=t.iconName,s=t.transform,l=t.symbol,u=t.maskId,c=t.extra,d=t.watchable,m=d===void 0?!1:d,p=r.found?r:n,w=p.width,C=p.height,k=[K.replacementClass,o?"".concat(K.cssPrefix,"-").concat(o):""].filter(function(F){return c.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(c.classes).join(" "),R={children:[],attributes:z(z({},c.attributes),{},{"data-prefix":i,"data-icon":o,class:k,role:c.attributes.role||"img",viewBox:"0 0 ".concat(w," ").concat(C)})};!VR(c.attributes)&&!c.attributes["aria-hidden"]&&(R.attributes["aria-hidden"]="true"),m&&(R.attributes[Or]="");var _=z(z({},R),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:s,symbol:l,styles:z({},c.styles)}),y=r.found&&n.found?cr("generateAbstractMask",_)||{children:[],attributes:{}}:cr("generateAbstractIcon",_)||{children:[],attributes:{}},T=y.children,N=y.attributes;return _.children=T,_.attributes=N,l?LR(_):DR(_)}function lv(t){var e=t.content,n=t.width,r=t.height,i=t.transform,o=t.extra,s=t.watchable,l=s===void 0?!1:s,u=z(z({},o.attributes),{},{class:o.classes.join(" ")});l&&(u[Or]="");var c=z({},o.styles);kd(i)&&(c.transform=cR({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=ou(c);d.length>0&&(u.style=d);var m=[];return m.push({tag:"span",attributes:u,children:[e]}),m}function OR(t){var e=t.content,n=t.extra,r=z(z({},n.attributes),{},{class:n.classes.join(" ")}),i=ou(n.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),o}var yc=zt.styles;function Kf(t){var e=t[0],n=t[1],r=t.slice(4),i=iu(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(K.cssPrefix,"-").concat(pc.GROUP)},children:[{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(pc.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(pc.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:s}}var FR={found:!1,width:512,height:512};function MR(t,e){!ow&&!K.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Gf(t,e){var n=e;return e==="fa"&&K.styleDefault!==null&&(e=ur()),new Promise(function(r,i){if(n==="fa"){var o=Ew(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&yc[e]&&yc[e][t]){var s=yc[e][t];return r(Kf(s))}MR(t,e),r(z(z({},FR),{},{icon:K.showMissingIcons&&t?cr("missingIconAbstract")||{}:{}}))})}var uv=function(){},Qf=K.measurePerformance&&pa&&pa.mark&&pa.measure?pa:{mark:uv,measure:uv},Io='FA "7.3.1"',zR=function(e){return Qf.mark("".concat(Io," ").concat(e," begins")),function(){return Iw(e)}},Iw=function(e){Qf.mark("".concat(Io," ").concat(e," ends")),Qf.measure("".concat(Io," ").concat(e),"".concat(Io," ").concat(e," begins"),"".concat(Io," ").concat(e," ends"))},Nd={begin:zR,end:Iw},ja=function(){};function cv(t){var e=t.getAttribute?t.getAttribute(Or):null;return typeof e=="string"}function jR(t){var e=t.getAttribute?t.getAttribute(Id):null,n=t.getAttribute?t.getAttribute(xd):null;return e&&n}function $R(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(K.replacementClass)}function UR(){if(K.autoReplaceSvg===!0)return $a.replace;var t=$a[K.autoReplaceSvg];return t||$a.replace}function BR(t){return ge.createElementNS("http://www.w3.org/2000/svg",t)}function HR(t){return ge.createElement(t)}function xw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?BR:HR:n;if(typeof t=="string")return ge.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])});var o=t.children||[];return o.forEach(function(s){i.appendChild(xw(s,{ceFn:r}))}),i}function WR(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var $a={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(xw(i),n)}),n.getAttribute(Or)===null&&K.keepOriginalSource){var r=ge.createComment(WR(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Cd(n).indexOf(K.replacementClass))return $a.replace(e);var i=new RegExp("".concat(K.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(l,u){return u===K.replacementClass||u.match(i)?l.toSvg.push(u):l.toNode.push(u),l},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(l){return Cs(l)}).join(`
`);n.setAttribute(Or,""),n.innerHTML=s}};function fv(t){t()}function Aw(t,e){var n=typeof e=="function"?e:ja;if(t.length===0)n();else{var r=fv;K.mutateApproach===Gb&&(r=lr.requestAnimationFrame||fv),r(function(){var i=UR(),o=Nd.begin("mutate");t.map(i),o(),n()})}}var Dd=!1;function Cw(){Dd=!0}function Yf(){Dd=!1}var Al=null;function hv(t){if(Yg&&K.observeMutations){var e=t.treeCallback,n=e===void 0?ja:e,r=t.nodeCallback,i=r===void 0?ja:r,o=t.pseudoElementsCallback,s=o===void 0?ja:o,l=t.observeMutationsRoot,u=l===void 0?ge:l;Al=new Yg(function(c){if(!Dd){var d=ur();qi(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!cv(m.addedNodes[0])&&(K.searchPseudoElements&&s(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&K.searchPseudoElements&&s([m.target],!0),m.type==="attributes"&&cv(m.target)&&~eR.indexOf(m.attributeName))if(m.attributeName==="class"&&jR(m.target)){var p=au(Cd(m.target)),w=p.prefix,C=p.iconName;m.target.setAttribute(Id,w||d),C&&m.target.setAttribute(xd,C)}else $R(m.target)&&i(m.target)})}}),kn&&Al.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function qR(){Al&&Al.disconnect()}function KR(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],l=o.slice(1);return s&&l.length>0&&(r[s]=l.join(":").trim()),r},{})),n}function GR(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=au(Cd(t));return i.prefix||(i.prefix=ur()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=yR(i.prefix,t.innerText)||bd(i.prefix,dw(t.innerText))),!i.iconName&&K.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function QR(t){var e=qi(t.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{});return e}function YR(){return{iconName:null,prefix:null,transform:Yt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function dv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=GR(t),r=n.iconName,i=n.prefix,o=n.rest,s=QR(t),l=Wf("parseNodeAttributes",{},t),u=e.styleParser?KR(t):[];return z({iconName:r,prefix:i,transform:Yt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:u,attributes:s}},l)}var XR=zt.styles;function kw(t){var e=K.autoReplaceSvg==="nest"?dv(t,{styleParser:!1}):dv(t);return~e.extra.classes.indexOf(aw)?cr("generateLayersText",t,e):cr("generateSvgReplacementMutation",t,e)}function JR(){return[].concat(Bt(Z_),Bt(ew))}function mv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!kn)return Promise.resolve();var n=ge.documentElement.classList,r=function(m){return n.add("".concat(Zg,"-").concat(m))},i=function(m){return n.remove("".concat(Zg,"-").concat(m))},o=K.autoFetchSvg?JR():P_.concat(Object.keys(XR));o.includes("fa")||o.push("fa");var s=[".".concat(aw,":not([").concat(Or,"])")].concat(o.map(function(d){return".".concat(d,":not([").concat(Or,"])")})).join(", ");if(s.length===0)return Promise.resolve();var l=[];try{l=qi(t.querySelectorAll(s))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var u=Nd.begin("onTree"),c=l.reduce(function(d,m){try{var p=kw(m);p&&d.push(p)}catch(w){ow||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(p){Aw(p,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),d()})}).catch(function(p){u(),m(p)})})}function ZR(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;kw(t).then(function(n){n&&Aw([n],e)})}function e4(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:qf(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:qf(i||{})),t(r,z(z({},n),{},{mask:i}))}}var t4=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Yt:r,o=n.symbol,s=o===void 0?!1:o,l=n.mask,u=l===void 0?null:l,c=n.maskId,d=c===void 0?null:c,m=n.classes,p=m===void 0?[]:m,w=n.attributes,C=w===void 0?{}:w,k=n.styles,R=k===void 0?{}:k;if(e){var _=e.prefix,y=e.iconName,T=e.icon;return lu(z({type:"icon"},e),function(){return Fr("beforeDOMElementCreation",{iconDefinition:e,params:n}),Rd({icons:{main:Kf(T),mask:u?Kf(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:y,transform:z(z({},Yt),i),symbol:s,maskId:d,extra:{attributes:C,styles:R,classes:p}})})}},n4={mixout:function(){return{icon:e4(t4)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=mv,n.nodeCallback=ZR,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ge:r,o=n.callback,s=o===void 0?function(){}:o;return mv(i,s)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.prefix,s=r.transform,l=r.symbol,u=r.mask,c=r.maskId,d=r.extra;return new Promise(function(m,p){Promise.all([Gf(i,o),u.iconName?Gf(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var C=iu(w,2),k=C[0],R=C[1];m([n,Rd({icons:{main:k,mask:R},prefix:o,iconName:i,transform:s,symbol:l,maskId:c,extra:d,watchable:!0})])}).catch(p)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,l=n.styles,u=ou(l);u.length>0&&(i.style=u);var c;return kd(s)&&(c=cr("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(c||o.icon),{children:r,attributes:i}}}},r4={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return lu({type:"layer"},function(){Fr("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(l){Array.isArray(l)?l.map(function(u){s=s.concat(u.abstract)}):s=s.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(K.cssPrefix,"-layers")].concat(Bt(o)).join(" ")},children:s}]})}}}},i4={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,l=s===void 0?[]:s,u=r.attributes,c=u===void 0?{}:u,d=r.styles,m=d===void 0?{}:d;return lu({type:"counter",content:n},function(){return Fr("beforeDOMElementCreation",{content:n,params:r}),OR({content:n.toString(),title:o,extra:{attributes:c,styles:m,classes:["".concat(K.cssPrefix,"-layers-counter")].concat(Bt(l))}})})}}}},o4={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?Yt:i,s=r.classes,l=s===void 0?[]:s,u=r.attributes,c=u===void 0?{}:u,d=r.styles,m=d===void 0?{}:d;return lu({type:"text",content:n},function(){return Fr("beforeDOMElementCreation",{content:n,params:r}),lv({content:n,transform:z(z({},Yt),o),extra:{attributes:c,styles:m,classes:["".concat(K.cssPrefix,"-layers-text")].concat(Bt(l))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.transform,o=r.extra,s=null,l=null;if(C_){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return Promise.resolve([n,lv({content:n.innerHTML,width:s,height:l,transform:i,extra:o,watchable:!0})])}}},Pw=new RegExp('"',"ug"),pv=[1105920,1112319],gv=z(z(z(z({},{FontAwesome:{normal:"fas",400:"fas"}}),PP),qb),MP),Xf=Object.keys(gv).reduce(function(t,e){return t[e.toLowerCase()]=gv[e],t},{}),s4=Object.keys(Xf).reduce(function(t,e){var n=Xf[e];return t[e]=n[900]||Bt(Object.entries(n))[0][1],t},{});function a4(t){var e=t.replace(Pw,"");return dw(Bt(e)[0]||"")}function l4(t){var e=t.getPropertyValue("font-feature-settings").includes("ss01"),n=t.getPropertyValue("content"),r=n.replace(Pw,""),i=r.codePointAt(0),o=i>=pv[0]&&i<=pv[1],s=r.length===2?r[0]===r[1]:!1;return o||s||e}function u4(t,e){var n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(Xf[n]||{})[i]||s4[n]}function vv(t,e){var n="".concat(Kb).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var o=qi(t.children),s=o.filter(function(j){return j.getAttribute(jf)===e})[0],l=lr.getComputedStyle(t,e),u=l.getPropertyValue("font-family"),c=u.match(Jb),d=l.getPropertyValue("font-weight"),m=l.getPropertyValue("content");if(s&&!c)return t.removeChild(s),r();if(c&&m!=="none"&&m!==""){var p=l.getPropertyValue("content"),w=u4(u,d),C=a4(p),k=c[0].startsWith("FontAwesome"),R=l4(l),_=bd(w,C),y=_;if(k){var T=_R(C);T.iconName&&T.prefix&&(_=T.iconName,w=T.prefix)}if(_&&!R&&(!s||s.getAttribute(Id)!==w||s.getAttribute(xd)!==y)){t.setAttribute(n,y),s&&t.removeChild(s);var N=YR(),F=N.extra;F.attributes[jf]=e,Gf(_,w).then(function(j){var S=Rd(z(z({},N),{},{icons:{main:j,mask:Sw()},prefix:w,iconName:y,extra:F,watchable:!0})),v=ge.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(v,t.firstChild):t.appendChild(v),v.outerHTML=S.map(function(E){return Cs(E)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function c4(t){return Promise.all([vv(t,"::before"),vv(t,"::after")])}function f4(t){return t.parentNode!==document.head&&!~Qb.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(jf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var h4=function(e){return!!e&&iw.some(function(n){return e.includes(n)})},d4=function(e){if(!e)return[];var n=new Set,r=e.split(/,(?![^()]*\))/).map(function(u){return u.trim()});r=r.flatMap(function(u){return u.includes("(")?u:u.split(",").map(function(c){return c.trim()})});var i=za(r),o;try{for(i.s();!(o=i.n()).done;){var s=o.value;if(h4(s)){var l=iw.reduce(function(u,c){return u.replace(c,"")},s);l!==""&&l!=="*"&&n.add(l)}}}catch(u){i.e(u)}finally{i.f()}return n};function yv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(kn){var n;if(e)n=t;else if(K.searchPseudoElementsFullScan)n=t.querySelectorAll("*");else{var r=new Set,i=za(document.styleSheets),o;try{for(i.s();!(o=i.n()).done;){var s=o.value;try{var l=za(s.cssRules),u;try{for(l.s();!(u=l.n()).done;){var c=u.value,d=d4(c.selectorText),m=za(d),p;try{for(m.s();!(p=m.n()).done;){var w=p.value;r.add(w)}}catch(k){m.e(k)}finally{m.f()}}}catch(k){l.e(k)}finally{l.f()}}catch(k){K.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(s.href," (").concat(k.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(k){i.e(k)}finally{i.f()}if(!r.size)return;var C=Array.from(r).join(", ");try{n=t.querySelectorAll(C)}catch{}}return new Promise(function(k,R){var _=qi(n).filter(f4).map(c4),y=Nd.begin("searchPseudoElements");Cw(),Promise.all(_).then(function(){y(),Yf(),k()}).catch(function(){y(),Yf(),R()})})}}var m4={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=yv,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ge:r;K.searchPseudoElements&&yv(i)}}},_v=!1,p4={mixout:function(){return{dom:{unwatch:function(){Cw(),_v=!0}}}},hooks:function(){return{bootstrap:function(){hv(Wf("mutationObserverCallbacks",{}))},noAuto:function(){qR()},watch:function(n){var r=n.observeMutationsRoot;_v?Yf():hv(Wf("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},wv=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],l=o.slice(1).join("-");if(s&&l==="h")return r.flipX=!0,r;if(s&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(s){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},g4={mixout:function(){return{parse:{transform:function(n){return wv(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=wv(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,l={transform:"translate(".concat(o/2," 256)")},u="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),d="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(u," ").concat(c," ").concat(d)},p={transform:"translate(".concat(s/2*-1," -256)")},w={outer:l,inner:m,path:p};return{tag:"g",attributes:z({},w.outer),children:[{tag:"g",attributes:z({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:z(z({},r.icon.attributes),w.path)}]}]}}}},_c={x:0,y:0,width:"100%",height:"100%"};function Ev(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function v4(t){return t.tag==="g"?t.children:[t]}var y4={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?au(i.split(" ").map(function(s){return s.trim()})):Sw();return o.prefix||(o.prefix=ur()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,l=n.maskId,u=n.transform,c=o.width,d=o.icon,m=s.width,p=s.icon,w=uR({transform:u,containerWidth:m,iconWidth:c}),C={tag:"rect",attributes:z(z({},_c),{},{fill:"white"})},k=d.children?{children:d.children.map(Ev)}:{},R={tag:"g",attributes:z({},w.inner),children:[Ev(z({tag:d.tag,attributes:z(z({},d.attributes),w.path)},k))]},_={tag:"g",attributes:z({},w.outer),children:[R]},y="mask-".concat(l||tv()),T="clip-".concat(l||tv()),N={tag:"mask",attributes:z(z({},_c),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,_]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:v4(p)},N]};return r.push(F,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(y,")")},_c)}),{children:r,attributes:i}}}},_4={provides:function(e){var n=!1;lr.matchMedia&&(n=lr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:z(z({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=z(z({},o),{},{attributeName:"opacity"}),l={tag:"circle",attributes:z(z({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:z(z({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:z(z({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:z(z({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:z(z({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:z(z({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:z(z({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},w4={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},E4=[hR,n4,r4,i4,o4,m4,p4,g4,y4,_4,w4];kR(E4,{mixoutsTo:At});At.noAuto;var Oi=At.config;At.library;At.dom;var bw=At.parse;At.findIconDefinition;At.toHtml;var S4=At.icon;At.layer;At.text;At.counter;function T4(t){return t=t-0,t===t}function Rw(t){return T4(t)?t:(t=t.replace(/[_-]+(.)?/g,(e,n)=>n?n.toUpperCase():""),t.charAt(0).toLowerCase()+t.slice(1))}var I4=(t,e)=>nh.createElement("stop",{key:`${e}-${t.offset}`,offset:t.offset,stopColor:t.color,...t.opacity!==void 0&&{stopOpacity:t.opacity}});function x4(t){return t.charAt(0).toUpperCase()+t.slice(1)}var Kr=new Map,A4=1e3;function C4(t){if(Kr.has(t))return Kr.get(t);const e={};let n=0;const r=t.length;for(;n<r;){const i=t.indexOf(";",n),o=i===-1?r:i,s=t.slice(n,o).trim();if(s){const l=s.indexOf(":");if(l>0){const u=s.slice(0,l).trim(),c=s.slice(l+1).trim();if(u&&c){const d=Rw(u);e[d.startsWith("webkit")?x4(d):d]=c}}}n=o+1}if(Kr.size===A4){const i=Kr.keys().next().value;i&&Kr.delete(i)}return Kr.set(t,e),e}function Nw(t,e,n={}){if(typeof e=="string")return e;const r=(e.children||[]).map(m=>{let p=m;return("fill"in n||n.gradientFill)&&m.tag==="path"&&"fill"in m.attributes&&(p={...m,attributes:{...m.attributes,fill:void 0}}),Nw(t,p)}),i=e.attributes||{},o={};for(const[m,p]of Object.entries(i))switch(!0){case m==="class":{o.className=p;break}case m==="style":{o.style=C4(String(p));break}case m.startsWith("aria-"):case m.startsWith("data-"):{o[m.toLowerCase()]=p;break}default:o[Rw(m)]=p}const{style:s,role:l,"aria-label":u,gradientFill:c,...d}=n;if(s&&(o.style=o.style?{...o.style,...s}:s),l&&(o.role=l),u&&(o["aria-label"]=u,o["aria-hidden"]="false"),c){o.fill=`url(#${c.id})`;const{type:m,stops:p=[],...w}=c;r.unshift(t(m==="linear"?"linearGradient":"radialGradient",{...w,id:c.id},p.map(I4)))}return t(e.tag,{...o,...d},...r)}var k4=Nw.bind(null,nh.createElement),Sv=(t,e)=>{const n=L.useId();return t||(e?n:void 0)},P4=class{constructor(t="react-fontawesome"){this.enabled=!1;let e=!1;try{e=typeof process<"u"&&!1}catch{}this.scope=t,this.enabled=e}log(...t){this.enabled&&console.log(`[${this.scope}]`,...t)}warn(...t){this.enabled&&console.warn(`[${this.scope}]`,...t)}error(...t){this.enabled&&console.error(`[${this.scope}]`,...t)}},b4="searchPseudoElementsFullScan"in Oi&&typeof Oi.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",R4=Number.parseInt(b4)>=7,N4=()=>R4,jo="fa",Fe={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse",flip360:"fa-flip-360",buzz:"fa-buzz",float:"fa-float",jello:"fa-jello",spinSnap:"fa-spin-snap",spinSnap4:"fa-spin-snap-4",spinSnap8:"fa-spin-snap-8",swing:"fa-swing",wag:"fa-wag"},D4={left:"fa-pull-left",right:"fa-pull-right"},L4={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},V4={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},Vt={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto",canvasSquare:"fa-canvas-square",canvasRoomy:"fa-canvas-roomy"};function O4(t){const e=Oi.cssPrefix||Oi.familyPrefix||jo;return e===jo?t:t.replace(new RegExp(String.raw`(?<=^|\s)${jo}-`,"g"),`${e}-`)}function F4(t){const{beat:e,fade:n,beatFade:r,bounce:i,shake:o,spin:s,spinPulse:l,spinReverse:u,pulse:c,fixedWidth:d,inverse:m,border:p,flip:w,size:C,rotation:k,pull:R,swapOpacity:_,rotateBy:y,widthAuto:T,canvasSquare:N,canvasRoomy:F,flip360:j,buzz:S,float:v,jello:E,spinSnap:I,spinSnap4:A,spinSnap8:P,swing:x,wag:ft,className:Ht}=t,J=[];return Ht&&J.push(...Ht.split(" ")),e&&J.push(Fe.beat),n&&J.push(Fe.fade),r&&J.push(Fe.beatFade),i&&J.push(Fe.bounce),o&&J.push(Fe.shake),s&&J.push(Fe.spin),u&&J.push(Fe.spinReverse),l&&J.push(Fe.spinPulse),c&&J.push(Fe.pulse),d&&J.push(Vt.fixedWidth),m&&J.push(Vt.inverse),p&&J.push(Vt.border),w===!0&&J.push(Vt.flip),(w==="horizontal"||w==="both")&&J.push(Vt.flipHorizontal),(w==="vertical"||w==="both")&&J.push(Vt.flipVertical),C!=null&&J.push(V4[C]),k!=null&&k!==0&&J.push(L4[k]),R!=null&&J.push(D4[R]),_&&J.push(Vt.swapOpacity),N4()?(y&&J.push(Vt.rotateBy),T&&J.push(Vt.widthAuto),N&&J.push(Vt.canvasSquare),F&&J.push(Vt.canvasRoomy),j&&J.push(Fe.flip360),S&&J.push(Fe.buzz),v&&J.push(Fe.float),E&&J.push(Fe.jello),I&&J.push(Fe.spinSnap),A&&J.push(Fe.spinSnap4),P&&J.push(Fe.spinSnap8),x&&J.push(Fe.swing),ft&&J.push(Fe.wag),(Oi.cssPrefix||Oi.familyPrefix||jo)===jo?J:J.map(O4)):J}var M4=t=>typeof t=="object"&&"icon"in t&&!!t.icon;function Tv(t){if(t)return M4(t)?t:bw.icon(t)}function z4(t){return Object.keys(t)}var Iv=new P4("FontAwesomeIcon"),Dw={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},j4=new Set(Object.keys(Dw)),Lw=nh.forwardRef((t,e)=>{const n={...Dw,...t},{icon:r,mask:i,symbol:o,title:s,titleId:l,maskId:u,transform:c}=n,d=Sv(u,!!i),m=Sv(l,!!s),p=Tv(r);if(!p)return Iv.error("Icon lookup is undefined",r),null;const w=F4(n),C=typeof c=="string"?bw.transform(c):c,k=Tv(i),R=S4(p,{...w.length>0&&{classes:w},...C&&{transform:C},...k&&{mask:k},symbol:o,title:s,titleId:m,maskId:d});if(!R)return Iv.error("Could not find icon",p),null;const{abstract:_}=R,y={ref:e};for(const T of z4(n))j4.has(T)||(y[T]=n[T]);return k4(_[0],y)});Lw.displayName="FontAwesomeIcon";/*!
 * Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */var $4={prefix:"fas",iconName:"database",icon:[448,512,[],"f1c0","M448 205.8c-14.8 9.8-31.8 17.7-49.5 24-47 16.8-108.7 26.2-174.5 26.2S96.4 246.5 49.5 229.8c-17.6-6.3-34.7-14.2-49.5-24L0 288c0 44.2 100.3 80 224 80s224-35.8 224-80l0-82.2zm0-77.8l0-48C448 35.8 347.7 0 224 0S0 35.8 0 80l0 48c0 44.2 100.3 80 224 80s224-35.8 224-80zM398.5 389.8C351.6 406.5 289.9 416 224 416S96.4 406.5 49.5 389.8c-17.6-6.3-34.7-14.2-49.5-24L0 432c0 44.2 100.3 80 224 80s224-35.8 224-80l0-66.2c-14.8 9.8-31.8 17.7-49.5 24z"]},U4={prefix:"fas",iconName:"network-wired",icon:[576,512,[],"f6ff","M248 88l80 0 0 48-80 0 0-48zm-8-56c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l16 0 0 32-224 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 0 32-16 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-16 0 0-32 192 0 0 32-16 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-16 0 0-32 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-224 0 0-32 16 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-96 0zM448 376l8 0 0 48-80 0 0-48 72 0zm-256 0l8 0 0 48-80 0 0-48 72 0z"]},B4={prefix:"fas",iconName:"server",icon:[448,512,[],"f233","M64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32zm216 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 288zm216 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]};const H4=()=>{const t=[{id:1,heading:"Core Backend",description:"Designing scalable, decoupled microservices and monolithic architectures with a focus on maintainability.",sub1:"Java",sub2:"Spring Boot",sub3:"Python",logo:B4},{id:2,heading:"Data Engineering",description:"Building automated extraction, normalization, and classification pipelines for complex datasets.",sub1:"Pandas",sub2:"ETL",sub3:"SQL",logo:$4},{id:3,heading:"Infrastructure & Algorithms",description:"Deploying self-hosted solutions and writing optimized, algorithmically sound code for intensive computations.",sub1:"DSA",sub2:"Linux",sub3:"QEA",logo:U4}];return O.jsxs("div",{className:"",children:[O.jsx("h2",{"data-reveal":!0,className:"font-mono text-xl underline",children:"Technical Arsenal"}),O.jsx("div",{className:"flex mt-10 gap-15 pl-6 pr-6",children:t.map((e,n)=>O.jsxs("div",{"data-reveal":!0,style:{"--reveal-delay":`${n*90}ms`},className:"skill-card bg-light-cards rounded-2xl p-6",children:[O.jsx(Lw,{icon:e.logo,className:"text-4xl"}),O.jsx("h3",{className:"text-xl",children:e.heading}),O.jsx("p",{className:"bg-bg-light p-2 mt-2",children:e.description}),O.jsxs("div",{className:"flex text-text-dark gap-4",children:[O.jsx("span",{children:e.sub1}),O.jsx("span",{children:e.sub2}),O.jsx("span",{children:e.sub3})]})]},n))})]})},W4=()=>O.jsxs(O.Fragment,{children:[O.jsx(yI,{}),O.jsxs("div",{className:"relative z-20 rounded-t-[50px] bg-bg-light/50 backdrop-blur-3xl shadow-[0_-20px_40px_rgba(0,0,0,0.2)] border-t border-white/20 p-6 md:p-12 pointer-events-auto text-text-dark",children:[O.jsx(H4,{}),O.jsx(Bk,{}),O.jsx(Zh,{})]})]}),q4=()=>{const t=K0(),{id:e}=TT(),[n,r]=L.useState([]),[i,o]=L.useState(!1),s=l=>{const{width:u,height:c}=l.target;o(u>c)};return L.useEffect(()=>{(async()=>{try{const u=m_(Tl,"individual_project_info",e),c=await w_(u);c.exists()?r(c.data()):console.log("No such document!")}catch(u){console.log(u)}})()},[]),O.jsxs("div",{className:"flex min-h-screen flex-col items-center pt-24 text-text-dark",children:[O.jsx(ki,{onClick:()=>t(-1),className:"fixed left-0 top-24 p-5 text-[1.3em] no-underline",children:"< Back"}),O.jsxs("div",{className:"flex flex-col justify-center items-center",children:[O.jsxs("div",{className:i?"flex w-[80%] flex-col gap-12":"flex w-[80%] flex-row-reverse items-center gap-[10%]",children:[O.jsx("div",{className:"flex items-center justify-center",children:O.jsx("img",{src:n.image1,alt:"",onLoad:s})}),O.jsxs("div",{children:[O.jsx("h3",{className:"w-full text-[2em] font-bold font-mono",children:n.name}),O.jsx("p",{className:"w-full text-[1.13em]",children:n.oneintro})]})]}),O.jsx("hr",{className:"w-[80%]"}),O.jsxs("div",{className:"flex w-[80%] flex-col items-center justify-center",children:[O.jsx("h4",{className:"w-full text-[1.5em]",children:"Problem Solved"}),O.jsx("p",{className:"text-[1.25em]",children:n.desc})]}),O.jsx("hr",{className:"w-[80%]"}),O.jsx("div",{children:O.jsx("div",{className:"flex flex-wrap gap-2.5 text-white",children:n.tech_stack&&n.tech_stack.split(",").map((l,u)=>O.jsx("span",{className:"rounded-[5px] bg-light-cards px-2.5 py-1.25 text-[1.5625em] text-text-dark",children:l.trim()},u))})})]}),O.jsx(Zh,{})]})},K4=()=>{const[t,e]=L.useState([]);return L.useEffect(()=>{(async()=>{try{const r=d_(Tl,"project_info"),i=await S_(r),o=await Promise.all(i.docs.map(async s=>{const l=s.data(),u=m_(Tl,"individual_project_info",s.id),c=await w_(u),d=c.exists()?c.data():{};return{...l,id:s.id,image:l.image||l.image1||d.image1||d.image}}));o.sort((s,l)=>s.id.localeCompare(l.id,void 0,{numeric:!0})),e(o)}catch(r){console.error(r)}})()},[]),O.jsxs("main",{className:"min-h-screen px-5 pb-16 pt-32 text-text-dark sm:px-8",children:[O.jsxs("section",{className:"mx-auto w-full max-w-5xl",children:[O.jsx("div",{className:"mb-7 border-b border-light-shadow/30 pb-4",children:O.jsx("h1",{"data-reveal":!0,className:"text-3xl font-semibold",children:"Projects"})}),O.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[t.map((n,r)=>{const i=n.image||n.image1||n.thumbnail||n.cover_image,o=n.oneintro||n.description||n.desc;return O.jsxs(ki,{to:`/project/${n.id}`,"data-reveal":!0,style:{"--reveal-delay":`${r*80}ms`},className:"group flex flex-col overflow-hidden rounded-xl border border-light-shadow/15 bg-light-cards shadow-sm transition-[transform,box-shadow] duration-200 hover:scale-[1.02] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:flex-row",children:[O.jsx("div",{className:"aspect-video w-full shrink-0 overflow-hidden bg-secondary-light-bg sm:aspect-auto sm:h-36 sm:w-36 lg:h-44 lg:w-44",children:i?O.jsx("img",{src:i,alt:`${n.name||"Project"} preview`,className:"h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",loading:"lazy"}):O.jsx("div",{className:"flex h-full min-h-36 items-center justify-center font-mono text-sm text-text-dark/60",children:"Project preview"})}),O.jsxs("div",{className:"flex min-w-0 flex-col justify-center p-4",children:[O.jsx("h2",{className:"mb-2 text-xl font-semibold text-text-dark transition-colors group-hover:text-primary",children:n.name||"Untitled project"}),O.jsx("p",{className:"line-clamp-3 text-sm leading-6 text-text-dark/75",children:o||"Project details coming soon."})]})]},n.id||`${n.name}-${r}`)}),t.length===0&&O.jsx("p",{className:"py-8 text-center text-text-dark/70 md:col-span-2",children:"No projects to show yet."})]})]}),O.jsx(Zh,{})]})},G4=()=>(L.useEffect(()=>{const t=document.body,e="[data-reveal], .fade-in";if(typeof IntersectionObserver>"u"){t.querySelectorAll(e).forEach(o=>{o.classList.add("is-visible")});return}const n=new IntersectionObserver(o=>{o.forEach(s=>{s.isIntersecting&&(s.target.classList.add("is-visible"),n.unobserve(s.target))})},{threshold:.12,rootMargin:"0px 0px -32px 0px"}),r=o=>{var s,l;(s=o.matches)!=null&&s.call(o,e)&&n.observe(o),(l=o.querySelectorAll)==null||l.call(o,e).forEach(u=>{n.observe(u)})};r(t);const i=new MutationObserver(o=>{o.forEach(s=>{s.addedNodes.forEach(l=>{l instanceof Element&&r(l)})})});return i.observe(t,{childList:!0,subtree:!0}),()=>{n.disconnect(),i.disconnect()}},[]),O.jsxs(lI,{basename:"/portfolio/",children:[O.jsx(vI,{}),O.jsx("main",{children:O.jsxs(MT,{children:[O.jsx(Ra,{path:"/",element:O.jsx(W4,{})}),O.jsx(Ra,{path:"/project/:id",element:O.jsx(q4,{})}),O.jsx(Ra,{path:"/projects/",element:O.jsx(K4,{})})]})})]}));F0(document.getElementById("root")).render(O.jsx(L.StrictMode,{children:O.jsx(G4,{})}));
