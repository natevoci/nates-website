import{t as bt,_ as L,h as f,v as vt,w as xt,R as u,q as M,g as D,c as _,r as a,e as F,j as x,k as E,l as A,s as w,x as Z,y as ze,z as Ct,i as ce,A as Rt,B as ie,C as We,D as Et,E as Mt,a as It,L as Tt}from"./index-C3XS5fNf.js";var Ye={exports:{}},m={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I=typeof Symbol=="function"&&Symbol.for,Ie=I?Symbol.for("react.element"):60103,Te=I?Symbol.for("react.portal"):60106,ue=I?Symbol.for("react.fragment"):60107,pe=I?Symbol.for("react.strict_mode"):60108,de=I?Symbol.for("react.profiler"):60114,fe=I?Symbol.for("react.provider"):60109,me=I?Symbol.for("react.context"):60110,$e=I?Symbol.for("react.async_mode"):60111,he=I?Symbol.for("react.concurrent_mode"):60111,ge=I?Symbol.for("react.forward_ref"):60112,ye=I?Symbol.for("react.suspense"):60113,$t=I?Symbol.for("react.suspense_list"):60120,be=I?Symbol.for("react.memo"):60115,ve=I?Symbol.for("react.lazy"):60116,St=I?Symbol.for("react.block"):60121,Pt=I?Symbol.for("react.fundamental"):60117,Lt=I?Symbol.for("react.responder"):60118,wt=I?Symbol.for("react.scope"):60119;function S(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ie:switch(e=e.type,e){case $e:case he:case ue:case de:case pe:case ye:return e;default:switch(e=e&&e.$$typeof,e){case me:case ge:case ve:case be:case fe:return e;default:return t}}case Te:return t}}}function qe(e){return S(e)===he}m.AsyncMode=$e;m.ConcurrentMode=he;m.ContextConsumer=me;m.ContextProvider=fe;m.Element=Ie;m.ForwardRef=ge;m.Fragment=ue;m.Lazy=ve;m.Memo=be;m.Portal=Te;m.Profiler=de;m.StrictMode=pe;m.Suspense=ye;m.isAsyncMode=function(e){return qe(e)||S(e)===$e};m.isConcurrentMode=qe;m.isContextConsumer=function(e){return S(e)===me};m.isContextProvider=function(e){return S(e)===fe};m.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ie};m.isForwardRef=function(e){return S(e)===ge};m.isFragment=function(e){return S(e)===ue};m.isLazy=function(e){return S(e)===ve};m.isMemo=function(e){return S(e)===be};m.isPortal=function(e){return S(e)===Te};m.isProfiler=function(e){return S(e)===de};m.isStrictMode=function(e){return S(e)===pe};m.isSuspense=function(e){return S(e)===ye};m.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ue||e===he||e===de||e===pe||e===ye||e===$t||typeof e=="object"&&e!==null&&(e.$$typeof===ve||e.$$typeof===be||e.$$typeof===fe||e.$$typeof===me||e.$$typeof===ge||e.$$typeof===Pt||e.$$typeof===Lt||e.$$typeof===wt||e.$$typeof===St)};m.typeOf=S;Ye.exports=m;var Bt=Ye.exports,Ge=Bt,kt={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ke={};Ke[Ge.ForwardRef]=kt;Ke[Ge.Memo]=Nt;function Vt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return bt(t)}var Se=function(){var t=Vt.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};const _t=["sx"],Ft=e=>{const t={systemProps:{},otherProps:{}};return Object.keys(e).forEach(n=>{xt[n]?t.systemProps[n]=e[n]:t.otherProps[n]=e[n]}),t};function jt(e){const{sx:t}=e,n=L(e,_t),{systemProps:o,otherProps:s}=Ft(n);let r;return Array.isArray(t)?r=[o,...t]:typeof t=="function"?r=(...i)=>{const l=t(...i);return vt(l)?f({},o,l):o}:r=f({},o,t),f({},s,{sx:r})}const Ot=M.audio`
  margin: 0;
  width: 30em;
  height: 2em;
`,go=({srcList:e})=>u.createElement(Ot,{controls:!0,preload:"none"},e.map((t,n)=>u.createElement("source",{key:n,src:t,type:"audio/mpeg"}))),yo=M.blockquote`
  margin: 0;
`;function Ut(e){return D("MuiPaper",e)}_("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Dt=["className","component","elevation","square","variant"],Ve=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},At=e=>{const{square:t,elevation:n,variant:o,classes:s}=e,r={root:["root",o,!t&&"rounded",o==="elevation"&&`elevation${n}`]};return A(r,Ut,s)},zt=w("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>f({backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${e.palette.divider}`},t.variant==="elevation"&&f({boxShadow:e.shadows[t.elevation]},e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Z("#fff",Ve(t.elevation))}, ${Z("#fff",Ve(t.elevation))})`}))),Wt=a.forwardRef(function(t,n){const o=F({props:t,name:"MuiPaper"}),{className:s,component:r="div",elevation:i=1,square:l=!1,variant:c="elevation"}=o,d=L(o,Dt),h=f({},o,{component:r,elevation:i,square:l,variant:c}),v=At(h);return x.jsx(zt,f({as:r,ownerState:h,className:E(v.root,s),ref:n},d))});function Yt(e){return D("MuiCard",e)}_("MuiCard",["root"]);const qt=["className","raised"],Gt=e=>{const{classes:t}=e;return A({root:["root"]},Yt,t)},Kt=w(Wt,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),Xt=a.forwardRef(function(t,n){const o=F({props:t,name:"MuiCard"}),{className:s,raised:r=!1}=o,i=L(o,qt),l=f({},o,{raised:r}),c=Gt(l);return x.jsx(Kt,f({className:E(c.root,s),elevation:r?8:void 0,ref:n,ownerState:l},i))});function Ht(e){return D("MuiCardContent",e)}_("MuiCardContent",["root"]);const Jt=["className","component"],Qt=e=>{const{classes:t}=e;return A({root:["root"]},Ht,t)},Zt=w("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),en=a.forwardRef(function(t,n){const o=F({props:t,name:"MuiCardContent"}),{className:s,component:r="div"}=o,i=L(o,Jt),l=f({},o,{component:r}),c=Qt(l);return x.jsx(Zt,f({as:r,className:E(c.root,s),ownerState:l,ref:n},i))}),tn=M.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #727272;
  line-height: 150%;
`,nn=e=>a.createElement("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 511.997 511.997",style:{enableBackground:"new 0 0 511.997 511.997"},xmlSpace:"preserve",...e},a.createElement("g",null,a.createElement("g",null,a.createElement("g",null,a.createElement("path",{d:"M212.26,390.24l-60.331,60.331c-25.012,25.012-65.517,25.012-90.508,0.005c-24.996-24.996-24.996-65.505-0.005-90.496 l120.683-120.683c24.991-24.992,65.5-24.992,90.491,0c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17 c-41.654-41.654-109.177-41.654-150.831,0L31.247,329.909c-41.654,41.654-41.654,109.177,0,150.831 c41.649,41.676,109.177,41.676,150.853,0l60.331-60.331c8.331-8.331,8.331-21.839,0-30.17S220.591,381.909,212.26,390.24z"}),a.createElement("path",{d:"M480.751,31.24c-41.654-41.654-109.199-41.654-150.853,0l-72.384,72.384c-8.331,8.331-8.331,21.839,0,30.17 c8.331,8.331,21.839,8.331,30.17,0l72.384-72.384c24.991-24.992,65.521-24.992,90.513,0c24.991,24.991,24.991,65.5,0,90.491 L317.845,284.638c-24.992,24.992-65.5,24.992-90.491,0c-8.331-8.331-21.839-8.331-30.17,0s-8.331,21.839,0,30.17 c41.654,41.654,109.177,41.654,150.831,0l132.736-132.736C522.405,140.418,522.405,72.894,480.751,31.24z"})))),a.createElement("g",null),a.createElement("g",null),a.createElement("g",null),a.createElement("g",null),a.createElement("g",null),a.createElement("g",null),a.createElement("g",null),a.createElement("g",null),a.createElement("g",null),a.createElement("g",null),a.createElement("g",null),a.createElement("g",null),a.createElement("g",null),a.createElement("g",null),a.createElement("g",null)),on=M(Xt)`
  margin-bottom: 16px;
`,rn=M(en)`
  background-color: #485a7a;
  color: #e3e5ed;
`,sn=M.h1`
`,an=M.a`
  cursor: pointer;
  color: inherit;

  & svg.hashIcon {
    margin-left: 16px;
    visibility: hidden;
    width: 16px;
    color: #ffffff;
    fill: #ffffff;
  }

  &:hover {
    & svg.hashIcon {
      visibility: visible;
    }
  }
`,ln=M(({noPadding:e,...t})=>u.createElement("div",{...t}))`
  padding: ${e=>e.noPadding?"0":"16px"};
`,bo=({title:e,author:t,date:n,children:o,noPadding:s=!1})=>{const r=e.replace(/[^0-9a-z]/gi,"-").toLowerCase();ze(location.hash.slice(1));const i=Ct();return u.useLayoutEffect(()=>{const l=i.anchor;if(l===r){const c=document.getElementById(l);c&&c.scrollIntoView()}},[]),u.createElement(on,null,u.createElement(rn,null,u.createElement(an,{id:r,className:"hashLink",href:`${location.hash}/${r}`},u.createElement(sn,null,e,u.createElement(nn,{className:"hashIcon"}))),t?u.createElement("p",null,t):null,n?u.createElement("p",null,n):null),u.createElement(ln,{noPadding:s},u.createElement(tn,null,o)))},vo=M.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 16px;
`,cn=M.div`
  display: flex;
  flex-direction: row;
`,un=M.div`
  display: flex;
  flex-direction: column;
`,pn=M.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 0 16px;
  gap: 16px;
`,xo=({children:e,nav:t})=>u.createElement(cn,null,t?u.createElement(u.Fragment,null,u.createElement(un,null,t),u.createElement(pn,null,e)):e);function Ee(e,t){return Ee=Object.setPrototypeOf||function(o,s){return o.__proto__=s,o},Ee(e,t)}function dn(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ee(e,t)}const _e=u.createContext(null);function fn(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Pe(e,t){var n=function(r){return t&&a.isValidElement(r)?t(r):r},o=Object.create(null);return e&&a.Children.map(e,function(s){return s}).forEach(function(s){o[s.key]=n(s)}),o}function mn(e,t){e=e||{},t=t||{};function n(h){return h in t?t[h]:e[h]}var o=Object.create(null),s=[];for(var r in e)r in t?s.length&&(o[r]=s,s=[]):s.push(r);var i,l={};for(var c in t){if(o[c])for(i=0;i<o[c].length;i++){var d=o[c][i];l[o[c][i]]=n(d)}l[c]=n(c)}for(i=0;i<s.length;i++)l[s[i]]=n(s[i]);return l}function J(e,t,n){return n[t]!=null?n[t]:e.props[t]}function hn(e,t){return Pe(e.children,function(n){return a.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:J(n,"appear",e),enter:J(n,"enter",e),exit:J(n,"exit",e)})})}function gn(e,t,n){var o=Pe(e.children),s=mn(t,o);return Object.keys(s).forEach(function(r){var i=s[r];if(a.isValidElement(i)){var l=r in t,c=r in o,d=t[r],h=a.isValidElement(d)&&!d.props.in;c&&(!l||h)?s[r]=a.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:J(i,"exit",e),enter:J(i,"enter",e)}):!c&&l&&!h?s[r]=a.cloneElement(i,{in:!1}):c&&l&&a.isValidElement(d)&&(s[r]=a.cloneElement(i,{onExited:n.bind(null,i),in:d.props.in,exit:J(i,"exit",e),enter:J(i,"enter",e)}))}}),s}var yn=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},bn={component:"div",childFactory:function(t){return t}},Le=function(e){dn(t,e);function t(o,s){var r;r=e.call(this,o,s)||this;var i=r.handleExited.bind(fn(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(s,r){var i=r.children,l=r.handleExited,c=r.firstRender;return{children:c?hn(s,l):gn(s,i,l),firstRender:!1}},n.handleExited=function(s,r){var i=Pe(this.props.children);s.key in i||(s.props.onExited&&s.props.onExited(r),this.mounted&&this.setState(function(l){var c=f({},l.children);return delete c[s.key],{children:c}}))},n.render=function(){var s=this.props,r=s.component,i=s.childFactory,l=L(s,["component","childFactory"]),c=this.state.contextValue,d=yn(this.state.children).map(i);return delete l.appear,delete l.enter,delete l.exit,r===null?u.createElement(_e.Provider,{value:c},d):u.createElement(_e.Provider,{value:c},u.createElement(r,l,d))},t}(u.Component);Le.propTypes={};Le.defaultProps=bn;function vn(e){const{className:t,classes:n,pulsate:o=!1,rippleX:s,rippleY:r,rippleSize:i,in:l,onExited:c,timeout:d}=e,[h,v]=a.useState(!1),b=E(t,n.ripple,n.rippleVisible,o&&n.ripplePulsate),C={width:i,height:i,top:-(i/2)+r,left:-(i/2)+s},g=E(n.child,h&&n.childLeaving,o&&n.childPulsate);return!l&&!h&&v(!0),a.useEffect(()=>{if(!l&&c!=null){const y=setTimeout(c,d);return()=>{clearTimeout(y)}}},[c,l,d]),x.jsx("span",{className:b,style:C,children:x.jsx("span",{className:g})})}const P=_("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),xn=["center","classes","className"];let xe=e=>e,Fe,je,Oe,Ue;const Me=550,Cn=80,Rn=Se(Fe||(Fe=xe`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),En=Se(je||(je=xe`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Mn=Se(Oe||(Oe=xe`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),In=w("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Tn=w(vn,{name:"MuiTouchRipple",slot:"Ripple"})(Ue||(Ue=xe`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),P.rippleVisible,Rn,Me,({theme:e})=>e.transitions.easing.easeInOut,P.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,P.child,P.childLeaving,En,Me,({theme:e})=>e.transitions.easing.easeInOut,P.childPulsate,Mn,({theme:e})=>e.transitions.easing.easeInOut),$n=a.forwardRef(function(t,n){const o=F({props:t,name:"MuiTouchRipple"}),{center:s=!1,classes:r={},className:i}=o,l=L(o,xn),[c,d]=a.useState([]),h=a.useRef(0),v=a.useRef(null);a.useEffect(()=>{v.current&&(v.current(),v.current=null)},[c]);const b=a.useRef(!1),C=a.useRef(null),g=a.useRef(null),y=a.useRef(null);a.useEffect(()=>()=>{clearTimeout(C.current)},[]);const $=a.useCallback(R=>{const{pulsate:B,rippleX:k,rippleY:K,rippleSize:Q,cb:ee}=R;d(N=>[...N,x.jsx(Tn,{classes:{ripple:E(r.ripple,P.ripple),rippleVisible:E(r.rippleVisible,P.rippleVisible),ripplePulsate:E(r.ripplePulsate,P.ripplePulsate),child:E(r.child,P.child),childLeaving:E(r.childLeaving,P.childLeaving),childPulsate:E(r.childPulsate,P.childPulsate)},timeout:Me,pulsate:B,rippleX:k,rippleY:K,rippleSize:Q},h.current)]),h.current+=1,v.current=ee},[r]),T=a.useCallback((R={},B={},k)=>{const{pulsate:K=!1,center:Q=s||B.pulsate,fakeElement:ee=!1}=B;if(R.type==="mousedown"&&b.current){b.current=!1;return}R.type==="touchstart"&&(b.current=!0);const N=ee?null:y.current,Y=N?N.getBoundingClientRect():{width:0,height:0,left:0,top:0};let j,q,G;if(Q||R.clientX===0&&R.clientY===0||!R.clientX&&!R.touches)j=Math.round(Y.width/2),q=Math.round(Y.height/2);else{const{clientX:X,clientY:O}=R.touches?R.touches[0]:R;j=Math.round(X-Y.left),q=Math.round(O-Y.top)}if(Q)G=Math.sqrt((2*Y.width**2+Y.height**2)/3),G%2===0&&(G+=1);else{const X=Math.max(Math.abs((N?N.clientWidth:0)-j),j)*2+2,O=Math.max(Math.abs((N?N.clientHeight:0)-q),q)*2+2;G=Math.sqrt(X**2+O**2)}R.touches?g.current===null&&(g.current=()=>{$({pulsate:K,rippleX:j,rippleY:q,rippleSize:G,cb:k})},C.current=setTimeout(()=>{g.current&&(g.current(),g.current=null)},Cn)):$({pulsate:K,rippleX:j,rippleY:q,rippleSize:G,cb:k})},[s,$]),z=a.useCallback(()=>{T({},{pulsate:!0})},[T]),W=a.useCallback((R,B)=>{if(clearTimeout(C.current),R.type==="touchend"&&g.current){g.current(),g.current=null,C.current=setTimeout(()=>{W(R,B)});return}g.current=null,d(k=>k.length>0?k.slice(1):k),v.current=B},[]);return a.useImperativeHandle(n,()=>({pulsate:z,start:T,stop:W}),[z,T,W]),x.jsx(In,f({className:E(r.root,P.root,i),ref:y},l,{children:x.jsx(Le,{component:null,exit:!0,children:c})}))});function Sn(e){return D("MuiButtonBase",e)}const Pn=_("MuiButtonBase",["root","disabled","focusVisible"]),Ln=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],wn=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:o,classes:s}=e,i=A({root:["root",t&&"disabled",n&&"focusVisible"]},Sn,s);return n&&o&&(i.root+=` ${o}`),i},Bn=w("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Pn.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),kn=a.forwardRef(function(t,n){const o=F({props:t,name:"MuiButtonBase"}),{action:s,centerRipple:r=!1,children:i,className:l,component:c="button",disabled:d=!1,disableRipple:h=!1,disableTouchRipple:v=!1,focusRipple:b=!1,LinkComponent:C="a",onBlur:g,onClick:y,onContextMenu:$,onDragLeave:T,onFocus:z,onFocusVisible:W,onKeyDown:R,onKeyUp:B,onMouseDown:k,onMouseLeave:K,onMouseUp:Q,onTouchEnd:ee,onTouchMove:N,onTouchStart:Y,tabIndex:j=0,TouchRippleProps:q,touchRippleRef:G,type:X}=o,O=L(o,Ln),te=a.useRef(null),V=a.useRef(null),Xe=ce(V,G),{isFocusVisibleRef:we,onFocus:He,onBlur:Je,ref:Qe}=Rt(),[H,se]=a.useState(!1);d&&H&&se(!1),a.useImperativeHandle(s,()=>({focusVisible:()=>{se(!0),te.current.focus()}}),[]),a.useEffect(()=>{H&&b&&!h&&V.current.pulsate()},[h,b,H]);function U(p,ke,yt=v){return ie(Ne=>(ke&&ke(Ne),!yt&&V.current&&V.current[p](Ne),!0))}const Ze=U("start",k),et=U("stop",$),tt=U("stop",T),nt=U("stop",Q),ot=U("stop",p=>{H&&p.preventDefault(),K&&K(p)}),rt=U("start",Y),st=U("stop",ee),at=U("stop",N),it=U("stop",p=>{Je(p),we.current===!1&&se(!1),g&&g(p)},!1),lt=ie(p=>{te.current||(te.current=p.currentTarget),He(p),we.current===!0&&(se(!0),W&&W(p)),z&&z(p)}),Ce=()=>{const p=te.current;return c&&c!=="button"&&!(p.tagName==="A"&&p.href)},Re=a.useRef(!1),ct=ie(p=>{b&&!Re.current&&H&&V.current&&p.key===" "&&(Re.current=!0,V.current.stop(p,()=>{V.current.start(p)})),p.target===p.currentTarget&&Ce()&&p.key===" "&&p.preventDefault(),R&&R(p),p.target===p.currentTarget&&Ce()&&p.key==="Enter"&&!d&&(p.preventDefault(),y&&y(p))}),ut=ie(p=>{b&&p.key===" "&&V.current&&H&&!p.defaultPrevented&&(Re.current=!1,V.current.stop(p,()=>{V.current.pulsate(p)})),B&&B(p),y&&p.target===p.currentTarget&&Ce()&&p.key===" "&&!p.defaultPrevented&&y(p)});let ae=c;ae==="button"&&(O.href||O.to)&&(ae=C);const ne={};ae==="button"?(ne.type=X===void 0?"button":X,ne.disabled=d):(!O.href&&!O.to&&(ne.role="button"),d&&(ne["aria-disabled"]=d));const pt=ce(Qe,te),dt=ce(n,pt),[ft,mt]=a.useState(!1);a.useEffect(()=>{mt(!0)},[]);const ht=ft&&!h&&!d,Be=f({},o,{centerRipple:r,component:c,disabled:d,disableRipple:h,disableTouchRipple:v,focusRipple:b,tabIndex:j,focusVisible:H}),gt=wn(Be);return x.jsxs(Bn,f({as:ae,className:E(gt.root,l),ownerState:Be,onBlur:it,onClick:y,onContextMenu:et,onFocus:lt,onKeyDown:ct,onKeyUp:ut,onMouseDown:Ze,onMouseLeave:ot,onMouseUp:nt,onDragLeave:tt,onTouchEnd:st,onTouchMove:at,onTouchStart:rt,ref:dt,tabIndex:d?-1:j,type:X},ne,O,{children:[i,ht?x.jsx($n,f({ref:Xe,center:r},q)):null]}))});function Nn(e){return D("MuiTypography",e)}_("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Vn=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],_n=e=>{const{align:t,gutterBottom:n,noWrap:o,paragraph:s,variant:r,classes:i}=e,l={root:["root",r,e.align!=="inherit"&&`align${We(t)}`,n&&"gutterBottom",o&&"noWrap",s&&"paragraph"]};return A(l,Nn,i)},Fn=w("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],n.align!=="inherit"&&t[`align${We(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>f({margin:0},t.variant&&e.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),De={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},jn={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},On=e=>jn[e]||e,le=a.forwardRef(function(t,n){const o=F({props:t,name:"MuiTypography"}),s=On(o.color),r=jt(f({},o,{color:s})),{align:i="inherit",className:l,component:c,gutterBottom:d=!1,noWrap:h=!1,paragraph:v=!1,variant:b="body1",variantMapping:C=De}=r,g=L(r,Vn),y=f({},r,{align:i,color:s,className:l,component:c,gutterBottom:d,noWrap:h,paragraph:v,variant:b,variantMapping:C}),$=c||(v?"p":C[b]||De[b])||"span",T=_n(y);return x.jsx(Fn,f({as:$,ref:n,ownerState:y,className:E(T.root,l)},g))}),re=a.createContext({});function Un(e){return D("MuiList",e)}_("MuiList",["root","padding","dense","subheader"]);const Dn=["children","className","component","dense","disablePadding","subheader"],An=e=>{const{classes:t,disablePadding:n,dense:o,subheader:s}=e;return A({root:["root",!n&&"padding",o&&"dense",s&&"subheader"]},Un,t)},zn=w("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})(({ownerState:e})=>f({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),Wn=a.forwardRef(function(t,n){const o=F({props:t,name:"MuiList"}),{children:s,className:r,component:i="ul",dense:l=!1,disablePadding:c=!1,subheader:d}=o,h=L(o,Dn),v=a.useMemo(()=>({dense:l}),[l]),b=f({},o,{component:i,dense:l,disablePadding:c}),C=An(b);return x.jsx(re.Provider,{value:v,children:x.jsxs(zn,f({as:i,className:E(C.root,r),ref:n,ownerState:b},h,{children:[d,s]}))})});function Yn(e){return D("MuiListItemButton",e)}const oe=_("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),qn=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected"],Gn=(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.alignItems==="flex-start"&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters]},Kn=e=>{const{alignItems:t,classes:n,dense:o,disabled:s,disableGutters:r,divider:i,selected:l}=e,d=A({root:["root",o&&"dense",!r&&"gutters",i&&"divider",s&&"disabled",t==="flex-start"&&"alignItemsFlexStart",l&&"selected"]},Yn,n);return f({},n,d)},Xn=w(kn,{shouldForwardProp:e=>Mt(e)||e==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:Gn})(({theme:e,ownerState:t})=>f({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${oe.selected}`]:{backgroundColor:Z(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${oe.focusVisible}`]:{backgroundColor:Z(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${oe.selected}:hover`]:{backgroundColor:Z(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:Z(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${oe.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`&.${oe.disabled}`]:{opacity:e.palette.action.disabledOpacity}},t.divider&&{borderBottom:`1px solid ${e.palette.divider}`,backgroundClip:"padding-box"},t.alignItems==="flex-start"&&{alignItems:"flex-start"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.dense&&{paddingTop:4,paddingBottom:4})),Hn=a.forwardRef(function(t,n){const o=F({props:t,name:"MuiListItemButton"}),{alignItems:s="center",autoFocus:r=!1,component:i="div",children:l,dense:c=!1,disableGutters:d=!1,divider:h=!1,focusVisibleClassName:v,selected:b=!1}=o,C=L(o,qn),g=a.useContext(re),y={dense:c||g.dense||!1,alignItems:s,disableGutters:d},$=a.useRef(null);Et(()=>{r&&$.current&&$.current.focus()},[r]);const T=f({},o,{alignItems:s,dense:y.dense,disableGutters:d,divider:h,selected:b}),z=Kn(T),W=ce($,n);return x.jsx(re.Provider,{value:y,children:x.jsx(Xn,f({ref:W,component:i,focusVisibleClassName:E(z.focusVisible,v),ownerState:T},C,{classes:z,children:l}))})});function Jn(e){return D("MuiListItemIcon",e)}_("MuiListItemIcon",["root","alignItemsFlexStart"]);const Qn=["className"],Zn=e=>{const{alignItems:t,classes:n}=e;return A({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},Jn,n)},eo=w("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({theme:e,ownerState:t})=>f({minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},t.alignItems==="flex-start"&&{marginTop:8})),to=a.forwardRef(function(t,n){const o=F({props:t,name:"MuiListItemIcon"}),{className:s}=o,r=L(o,Qn),i=a.useContext(re),l=f({},o,{alignItems:i.alignItems}),c=Zn(l);return x.jsx(eo,f({className:E(c.root,s),ownerState:l,ref:n},r))});function no(e){return D("MuiListItemText",e)}const Ae=_("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),oo=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],ro=e=>{const{classes:t,inset:n,primary:o,secondary:s,dense:r}=e;return A({root:["root",n&&"inset",r&&"dense",o&&s&&"multiline"],primary:["primary"],secondary:["secondary"]},no,t)},so=w("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${Ae.primary}`]:t.primary},{[`& .${Ae.secondary}`]:t.secondary},t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})(({ownerState:e})=>f({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),ao=a.forwardRef(function(t,n){const o=F({props:t,name:"MuiListItemText"}),{children:s,className:r,disableTypography:i=!1,inset:l=!1,primary:c,primaryTypographyProps:d,secondary:h,secondaryTypographyProps:v}=o,b=L(o,oo),{dense:C}=a.useContext(re);let g=c??s,y=h;const $=f({},o,{disableTypography:i,inset:l,primary:!!g,secondary:!!y,dense:C}),T=ro($);return g!=null&&g.type!==le&&!i&&(g=x.jsx(le,f({variant:C?"body2":"body1",className:T.primary,component:"span",display:"block"},d,{children:g}))),y!=null&&y.type!==le&&!i&&(y=x.jsx(le,f({variant:"body2",className:T.secondary,color:"text.secondary",display:"block"},v,{children:y}))),x.jsxs(so,f({className:E(T.root,r),ownerState:$,ref:n},b,{children:[g,y]}))}),io=M.nav`
  min-width: 200px;
  padding: 8px 8px;
`,lo=M.li`
  width: 100%;
  &:not(:first-of-type) {
    margin-top: 8px;
  }
`,co=M(({$match:e,...t})=>u.createElement(Tt,{...t}))`
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${e=>e.$match?"#E5E6EA":"inherit"};
  color: #0e5ecd;
`,uo=e=>{const t=ze(e.to);return u.createElement(co,{$match:!!t,...e})},Co=()=>u.createElement(io,{"aria-label":"navigation menu"},u.createElement(Wn,null,Object.values(It).filter(({title:e})=>!!e).map(({url:e,Icon:t,title:n})=>u.createElement(lo,{key:e,disablePadding:!0},u.createElement(uo,{to:e},u.createElement(Hn,null,u.createElement(to,null,u.createElement(t,null)),u.createElement(ao,{primary:n}))))))),Ro=M.div`
  display: inline-block;
`,Eo=M.div`
  white-space: pre;
`,po=e=>{const[t,n]=u.useState(!1),o=u.useMemo(()=>new IntersectionObserver(([s])=>n(s.isIntersecting)));return u.useEffect(()=>{if(e.current)return o.observe(e.current),()=>{o.disconnect()}},[e.current]),t},fo=M.iframe`
    margin: 0.25em 0;
    width: 608px;
    height: 342px; /* 16:9 */
`,Mo=e=>{const t=u.useRef(),n=po(t);return u.createElement(u.Fragment,null,u.createElement("div",{ref:t}),n?u.createElement(fo,{frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",...e}):null)};export{go as A,yo as B,bo as C,vo as I,xo as L,Co as N,Ro as P,_e as T,Mo as Y,dn as _,Wt as a,kn as b,tn as c,Eo as d};
