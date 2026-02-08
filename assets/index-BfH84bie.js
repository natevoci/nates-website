import{u as tt,d as nt,b as ke,_ as q,R as t,g as ce,c as me,r as f,e as pe,f as ot,h as m,i as at,j as b,k as U,l as we,s as W,m as it,n as Ge,o as De,p as He,q as Se,L as rt,a as st}from"./index-C3XS5fNf.js";import{_ as lt,T as Ve,a as ht,b as dt,C as ut,c as O,P as d,Y as ct,I as Ce,d as mt,B as Ie,L as pt,N as wt}from"./Youtube-CnK7HhBu.js";import{a as gt,b as ft,c as yt,d as vt,e as bt,f as kt}from"./13 - Deep Creek - Your Kingdom-D8nM9kXj.js";var u={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ge=60103,fe=60106,J=60107,K=60108,X=60114,Q=60109,Z=60110,ee=60112,te=60113,Te=60120,ne=60115,oe=60116,Be=60121,Ye=60122,je=60117,Fe=60129,Oe=60131;if(typeof Symbol=="function"&&Symbol.for){var p=Symbol.for;ge=p("react.element"),fe=p("react.portal"),J=p("react.fragment"),K=p("react.strict_mode"),X=p("react.profiler"),Q=p("react.provider"),Z=p("react.context"),ee=p("react.forward_ref"),te=p("react.suspense"),Te=p("react.suspense_list"),ne=p("react.memo"),oe=p("react.lazy"),Be=p("react.block"),Ye=p("react.server.block"),je=p("react.fundamental"),Fe=p("react.debug_trace_mode"),Oe=p("react.legacy_hidden")}function k(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case ge:switch(e=e.type,e){case J:case X:case K:case te:case Te:return e;default:switch(e=e&&e.$$typeof,e){case Z:case ee:case oe:case ne:case Q:return e;default:return n}}case fe:return n}}}var It=Q,Ct=ge,Et=ee,St=J,Tt=oe,xt=ne,At=fe,Wt=X,Mt=K,Rt=te;u.ContextConsumer=Z;u.ContextProvider=It;u.Element=Ct;u.ForwardRef=Et;u.Fragment=St;u.Lazy=Tt;u.Memo=xt;u.Portal=At;u.Profiler=Wt;u.StrictMode=Mt;u.Suspense=Rt;u.isAsyncMode=function(){return!1};u.isConcurrentMode=function(){return!1};u.isContextConsumer=function(e){return k(e)===Z};u.isContextProvider=function(e){return k(e)===Q};u.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ge};u.isForwardRef=function(e){return k(e)===ee};u.isFragment=function(e){return k(e)===J};u.isLazy=function(e){return k(e)===oe};u.isMemo=function(e){return k(e)===ne};u.isPortal=function(e){return k(e)===fe};u.isProfiler=function(e){return k(e)===X};u.isStrictMode=function(e){return k(e)===K};u.isSuspense=function(e){return k(e)===te};u.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===J||e===X||e===Fe||e===K||e===te||e===Te||e===Oe||typeof e=="object"&&e!==null&&(e.$$typeof===oe||e.$$typeof===ne||e.$$typeof===Q||e.$$typeof===Z||e.$$typeof===ee||e.$$typeof===je||e.$$typeof===Be||e[0]===Ye)};u.typeOf=k;function Lt(){return tt(nt)}const Le={disabled:!1};var _="unmounted",D="exited",H="entering",j="entered",Ee="exiting",x=function(e){lt(n,e);function n(i,a){var o;o=e.call(this,i,a)||this;var r=a,l=r&&!r.isMounting?i.enter:i.appear,c;return o.appearStatus=null,i.in?l?(c=D,o.appearStatus=H):c=j:i.unmountOnExit||i.mountOnEnter?c=_:c=D,o.state={status:c},o.nextCallback=null,o}n.getDerivedStateFromProps=function(a,o){var r=a.in;return r&&o.status===_?{status:D}:null};var s=n.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(a){var o=null;if(a!==this.props){var r=this.state.status;this.props.in?r!==H&&r!==j&&(o=H):(r===H||r===j)&&(o=Ee)}this.updateStatus(!1,o)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var a=this.props.timeout,o,r,l;return o=r=l=a,a!=null&&typeof a!="number"&&(o=a.exit,r=a.enter,l=a.appear!==void 0?a.appear:r),{exit:o,enter:r,appear:l}},s.updateStatus=function(a,o){a===void 0&&(a=!1),o!==null?(this.cancelNextCallback(),o===H?this.performEnter(a):this.performExit()):this.props.unmountOnExit&&this.state.status===D&&this.setState({status:_})},s.performEnter=function(a){var o=this,r=this.props.enter,l=this.context?this.context.isMounting:a,c=this.props.nodeRef?[l]:[ke.findDOMNode(this),l],y=c[0],w=c[1],I=this.getTimeouts(),E=l?I.appear:I.enter;if(!a&&!r||Le.disabled){this.safeSetState({status:j},function(){o.props.onEntered(y)});return}this.props.onEnter(y,w),this.safeSetState({status:H},function(){o.props.onEntering(y,w),o.onTransitionEnd(E,function(){o.safeSetState({status:j},function(){o.props.onEntered(y,w)})})})},s.performExit=function(){var a=this,o=this.props.exit,r=this.getTimeouts(),l=this.props.nodeRef?void 0:ke.findDOMNode(this);if(!o||Le.disabled){this.safeSetState({status:D},function(){a.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:Ee},function(){a.props.onExiting(l),a.onTransitionEnd(r.exit,function(){a.safeSetState({status:D},function(){a.props.onExited(l)})})})},s.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(a,o){o=this.setNextCallback(o),this.setState(a,o)},s.setNextCallback=function(a){var o=this,r=!0;return this.nextCallback=function(l){r&&(r=!1,o.nextCallback=null,a(l))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},s.onTransitionEnd=function(a,o){this.setNextCallback(o);var r=this.props.nodeRef?this.props.nodeRef.current:ke.findDOMNode(this),l=a==null&&!this.props.addEndListener;if(!r||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[r,this.nextCallback],y=c[0],w=c[1];this.props.addEndListener(y,w)}a!=null&&setTimeout(this.nextCallback,a)},s.render=function(){var a=this.state.status;if(a===_)return null;var o=this.props,r=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var l=q(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return t.createElement(Ve.Provider,{value:null},typeof r=="function"?r(a,l):t.cloneElement(t.Children.only(r),l))},n}(t.Component);x.contextType=Ve;x.propTypes={};function Y(){}x.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Y,onEntering:Y,onEntered:Y,onExit:Y,onExiting:Y,onExited:Y};x.UNMOUNTED=_;x.EXITED=D;x.ENTERING=H;x.ENTERED=j;x.EXITING=Ee;function Ne(e,n){var s,i;const{timeout:a,easing:o,style:r={}}=e;return{duration:(s=r.transitionDuration)!=null?s:typeof a=="number"?a:a[n.mode]||0,easing:(i=r.transitionTimingFunction)!=null?i:typeof o=="object"?o[n.mode]:o,delay:r.transitionDelay}}function Nt(e){return ce("MuiCollapse",e)}me("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const Gt=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],Dt=e=>{const{orientation:n,classes:s}=e,i={root:["root",`${n}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${n}`],wrapperInner:["wrapperInner",`${n}`]};return we(i,Nt,s)},Ht=W("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:s}=e;return[n.root,n[s.orientation],s.state==="entered"&&n.entered,s.state==="exited"&&!s.in&&s.collapsedSize==="0px"&&n.hidden]}})(({theme:e,ownerState:n})=>m({height:0,overflow:"hidden",transition:e.transitions.create("height")},n.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},n.state==="entered"&&m({height:"auto",overflow:"visible"},n.orientation==="horizontal"&&{width:"auto"}),n.state==="exited"&&!n.in&&n.collapsedSize==="0px"&&{visibility:"hidden"})),Vt=W("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,n)=>n.wrapper})(({ownerState:e})=>m({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),Bt=W("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,n)=>n.wrapperInner})(({ownerState:e})=>m({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),$e=f.forwardRef(function(n,s){const i=pe({props:n,name:"MuiCollapse"}),{addEndListener:a,children:o,className:r,collapsedSize:l="0px",component:c,easing:y,in:w,onEnter:I,onEntered:E,onEntering:M,onExit:V,onExited:g,onExiting:C,orientation:A="vertical",style:R,timeout:S=ot.standard,TransitionComponent:ye=x}=i,ae=q(i,Gt),L=m({},i,{orientation:A,collapsedSize:l}),N=Dt(L),We=Lt(),Me=f.useRef(),G=f.useRef(null),ve=f.useRef(),ie=typeof l=="number"?`${l}px`:l,$=A==="horizontal",z=$?"width":"height";f.useEffect(()=>()=>{clearTimeout(Me.current)},[]);const re=f.useRef(null),Ue=at(s,re),B=h=>v=>{if(h){const T=re.current;v===void 0?h(T):h(T,v)}},be=()=>G.current?G.current[$?"clientWidth":"clientHeight"]:0,qe=B((h,v)=>{G.current&&$&&(G.current.style.position="absolute"),h.style[z]=ie,I&&I(h,v)}),Je=B((h,v)=>{const T=be();G.current&&$&&(G.current.style.position="");const{duration:P,easing:se}=Ne({style:R,timeout:S,easing:y},{mode:"enter"});if(S==="auto"){const Re=We.transitions.getAutoHeightDuration(T);h.style.transitionDuration=`${Re}ms`,ve.current=Re}else h.style.transitionDuration=typeof P=="string"?P:`${P}ms`;h.style[z]=`${T}px`,h.style.transitionTimingFunction=se,M&&M(h,v)}),Ke=B((h,v)=>{h.style[z]="auto",E&&E(h,v)}),Xe=B(h=>{h.style[z]=`${be()}px`,V&&V(h)}),Qe=B(g),Ze=B(h=>{const v=be(),{duration:T,easing:P}=Ne({style:R,timeout:S,easing:y},{mode:"exit"});if(S==="auto"){const se=We.transitions.getAutoHeightDuration(v);h.style.transitionDuration=`${se}ms`,ve.current=se}else h.style.transitionDuration=typeof T=="string"?T:`${T}ms`;h.style[z]=ie,h.style.transitionTimingFunction=P,C&&C(h)}),et=h=>{S==="auto"&&(Me.current=setTimeout(h,ve.current||0)),a&&a(re.current,h)};return b.jsx(ye,m({in:w,onEnter:qe,onEntered:Ke,onEntering:Je,onExit:Xe,onExited:Qe,onExiting:Ze,addEndListener:et,nodeRef:re,timeout:S==="auto"?null:S},ae,{children:(h,v)=>b.jsx(Ht,m({as:c,className:U(N.root,r,{entered:N.entered,exited:!w&&ie==="0px"&&N.hidden}[h]),style:m({[$?"minWidth":"minHeight"]:ie},R),ownerState:m({},L,{state:h}),ref:Ue},v,{children:b.jsx(Vt,{ownerState:m({},L,{state:h}),className:N.wrapper,ref:G,children:b.jsx(Bt,{ownerState:m({},L,{state:h}),className:N.wrapperInner,children:o})})}))}))});$e.muiSupportAuto=!0;const ze=f.createContext({});function Yt(e){return ce("MuiAccordion",e)}const le=me("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),jt=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],Ft=e=>{const{classes:n,square:s,expanded:i,disabled:a,disableGutters:o}=e;return we({root:["root",!s&&"rounded",i&&"expanded",a&&"disabled",!o&&"gutters"],region:["region"]},Yt,n)},Ot=W(ht,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:s}=e;return[{[`& .${le.region}`]:n.region},n.root,!s.square&&n.rounded,!s.disableGutters&&n.gutters]}})(({theme:e})=>{const n={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],n),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],n)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${le.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${le.disabled}`]:{backgroundColor:e.palette.action.disabledBackground}}},({theme:e,ownerState:n})=>m({},!n.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!n.disableGutters&&{[`&.${le.expanded}`]:{margin:"16px 0"}})),$t=f.forwardRef(function(n,s){const i=pe({props:n,name:"MuiAccordion"}),{children:a,className:o,defaultExpanded:r=!1,disabled:l=!1,disableGutters:c=!1,expanded:y,onChange:w,square:I=!1,TransitionComponent:E=$e,TransitionProps:M}=i,V=q(i,jt),[g,C]=it({controlled:y,default:r,name:"Accordion",state:"expanded"}),A=f.useCallback(N=>{C(!g),w&&w(N,!g)},[g,w,C]),[R,...S]=f.Children.toArray(a),ye=f.useMemo(()=>({expanded:g,disabled:l,disableGutters:c,toggle:A}),[g,l,c,A]),ae=m({},i,{square:I,disabled:l,disableGutters:c,expanded:g}),L=Ft(ae);return b.jsxs(Ot,m({className:U(L.root,o),ref:s,ownerState:ae,square:I},V,{children:[b.jsx(ze.Provider,{value:ye,children:R}),b.jsx(E,m({in:g,timeout:"auto"},M,{children:b.jsx("div",{"aria-labelledby":R.props.id,id:R.props["aria-controls"],role:"region",className:L.region,children:S})}))]}))});function zt(e){return ce("MuiAccordionDetails",e)}me("MuiAccordionDetails",["root"]);const Pt=["className"],_t=e=>{const{classes:n}=e;return we({root:["root"]},zt,n)},Ut=W("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,n)=>n.root})(({theme:e})=>({padding:e.spacing(1,2,2)})),he=f.forwardRef(function(n,s){const i=pe({props:n,name:"MuiAccordionDetails"}),{className:a}=i,o=q(i,Pt),r=i,l=_t(r);return b.jsx(Ut,m({className:U(l.root,a),ref:s,ownerState:r},o))});function qt(e){return ce("MuiAccordionSummary",e)}const F=me("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),Jt=["children","className","expandIcon","focusVisibleClassName","onClick"],Kt=e=>{const{classes:n,expanded:s,disabled:i,disableGutters:a}=e;return we({root:["root",s&&"expanded",i&&"disabled",!a&&"gutters"],focusVisible:["focusVisible"],content:["content",s&&"expanded",!a&&"contentGutters"],expandIconWrapper:["expandIconWrapper",s&&"expanded"]},qt,n)},Xt=W(dt,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,n)=>n.root})(({theme:e,ownerState:n})=>{const s={duration:e.transitions.duration.shortest};return m({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],s),[`&.${F.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`&.${F.disabled}`]:{opacity:e.palette.action.disabledOpacity},[`&:hover:not(.${F.disabled})`]:{cursor:"pointer"}},!n.disableGutters&&{[`&.${F.expanded}`]:{minHeight:64}})}),Qt=W("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,n)=>n.content})(({theme:e,ownerState:n})=>m({display:"flex",flexGrow:1,margin:"12px 0"},!n.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${F.expanded}`]:{margin:"20px 0"}})),Zt=W("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,n)=>n.expandIconWrapper})(({theme:e})=>({display:"flex",color:e.palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${F.expanded}`]:{transform:"rotate(180deg)"}})),en=f.forwardRef(function(n,s){const i=pe({props:n,name:"MuiAccordionSummary"}),{children:a,className:o,expandIcon:r,focusVisibleClassName:l,onClick:c}=i,y=q(i,Jt),{disabled:w=!1,disableGutters:I,expanded:E,toggle:M}=f.useContext(ze),V=A=>{M&&M(A),c&&c(A)},g=m({},i,{expanded:E,disabled:w,disableGutters:I}),C=Kt(g);return b.jsxs(Xt,m({focusRipple:!1,disableRipple:!0,disabled:w,component:"div","aria-expanded":E,className:U(C.root,o),focusVisibleClassName:U(C.focusVisible,l),onClick:V,ref:s,ownerState:g},y,{children:[b.jsx(Qt,{className:C.content,ownerState:g,children:a}),r&&b.jsx(Zt,{className:C.expandIconWrapper,ownerState:g,children:r})]}))});var xe={},tn=He;Object.defineProperty(xe,"__esModule",{value:!0});var Pe=xe.default=void 0,nn=tn(Ge()),on=De(),an=(0,nn.default)((0,on.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIosSharp");Pe=xe.default=an;var Ae={},rn=He;Object.defineProperty(Ae,"__esModule",{value:!0});var _e=Ae.default=void 0,sn=rn(Ge()),ln=De(),hn=(0,sn.default)((0,ln.jsx)("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download");_e=Ae.default=hn;const dn=Se.a`
  line-height: 40px;
  color: #1976d2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  & > svg {
    vertical-align: middle;
  }
`,de=Se(e=>t.createElement($t,{disableGutters:!0,elevation:0,square:!0,...e}))(()=>({border:"1px solid #0000001f","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"}})),ue=Se(e=>t.createElement(en,{expandIcon:t.createElement(Pe,{sx:{fontSize:"0.9rem"}}),...e}))(({theme:e})=>({flexDirection:"row-reverse","& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(90deg)"},"& .MuiAccordionSummary-content":{marginLeft:"16px"}})),un=({title:e,author:n,date:s,description:i,videos:a,downloads:o,lyrics:r})=>t.createElement(ut,{title:e,author:n?`Music and Lyrics: ${n}`:"",date:s?`Written: ${s}`:"",noPadding:!0},t.createElement("div",null,i?t.createElement(de,null,t.createElement(ue,null,"Description"),t.createElement(he,null,i)):null,a?t.createElement(de,null,t.createElement(ue,null,"Video"),t.createElement(he,null,a.map(l=>t.createElement(O,{key:l.youtube},t.createElement(d,null,l.description),t.createElement(ct,{src:`https://www.youtube.com/embed/${l.youtube}`}))))):null,o?t.createElement(de,null,t.createElement(ue,null,"Downloads"),t.createElement(he,null,o.map(l=>t.createElement(O,{key:l.url},t.createElement(d,null,t.createElement(dn,{href:l.url},t.createElement(_e,null),l.title)))))):null,r?t.createElement(de,null,t.createElement(ue,null,"Lyrics"),t.createElement(he,null,t.createElement(O,null,r.map((l,c)=>t.createElement(d,{key:c},t.createElement("i",null,l.name),t.createElement("br",null),t.createElement(Ce,null,t.createElement(mt,null,l.content))))))):null)),cn="/assets/Rain-YGXae_JK.pdf",mn="/assets/The%20Great%20I%20AM%20Is%20Here-Cj3XnriE.pdf",pn="/assets/The%20Great%20I%20AM%20Is%20Here%20(Acoustic)-C8PMYsc7.mp3",wn="/assets/We%20Have%20A%20Saviour-DN2cPu7Q.pdf",gn="/assets/We%20Have%20A%20Saviour_(live)-CLTohzeA.mp3",fn="/assets/Amazing-CU9Afw5t.pdf",yn="/assets/Amazing%20(in%20A)-DD2LQ4l5.pdf",vn="/assets/Amazing_(live)-C5KAf6dB.mp3",bn="/assets/Follow%20The%20Signs-VMNqvxia.pdf",kn="/assets/I'll%20Go-k85uqClH.pdf",In="/assets/Your%20Kingdom-BMuBGPqh.pdf",Cn="/assets/Living%20For%20Heaven-CWNeed6y.pdf",En="/assets/11%20-%20Deep%20Creek%20-%20Living%20For%20Heaven-CEhAuiGp.mp3",Sn="/assets/Not%20Alone-Qdk6mPg5.pdf",Tn="/assets/Not%20Alone_(live)-DIroImBj.mp3",xn="/assets/Step%20Out%20In%20Faith-B2wnuLWI.pdf",An="/assets/05%20-%20Deep%20Creek%20-%20Step%20Out%20In%20Faith-BX_AczXm.mp3",Wn="/assets/This%20Troubled%20Life-CX5z6jEz.pdf",Mn="/assets/Called-BHXVYvWM.pdf",Rn="/assets/06%20-%20Deep%20Creek%20-%20Called-sw_iDvnJ.mp3",Ln="/assets/Called_(live)-ClWPfjqY.mp3",Nn="/assets/Called_(live%20heavier)-DjqtJUFo.mp3",Gn="/assets/Creation-C_jn3i1e.pdf",Dn="/assets/03%20-%20Deep%20Creek%20-%20Creation-CLC4zYRu.mp3",Hn="/assets/Creation_(acoustic)-0QqXBpN8.mp3",Vn="/assets/A%20Better%20Way-DeSgbf1n.pdf",Bn="/assets/01%20-%20Deep%20Creek%20-%20A%20Better%20Way-CDSRR6Fh.mp3",Yn="/assets/A%20Better%20Way_(live)-CzKgNn_E.mp3",jn="/assets/Do%20What%20We%20Can-BwoXdgQC.pdf",Fn="/assets/Inside%20Of%20Me-w3a35BBu.pdf",On="/assets/04%20-%20Deep%20Creek%20-%20Inside%20Of%20Me-CqoaGL5r.mp3",$n="/assets/Shine%20Our%20Light-CVM0ulUV.pdf",zn="/assets/09%20-%20Deep%20Creek%20-%20Shine%20Our%20Light-BrTZnB3O.mp3",Pn="/assets/Filled%20With%20Your%20Love-B_1XMNnR.pdf",_n="/assets/In%20Honour%20Of%20You-CLKgV0gQ.pdf",Un="/assets/12%20-%20Deep%20Creek%20-%20In%20Honour%20Of%20You-BIP5hJ4H.mp3",qn="/assets/All%20You%20Want%20Me%20To%20Be-uPoW34QD.pdf",Jn="/assets/All%20You%20Want%20Me%20To%20Be-C_uSiEkF.mp3",Kn="/assets/As%20We%20Gather-28xGpP-9.pdf",Xn="/assets/As%20We%20Gather-rOVfFqyf.mp3",Qn="/assets/Know%20The%20Truth-Jkw2I2Ha.pdf",Zn="/assets/08%20-%20Deep%20Creek%20-%20Know%20The%20Truth-D3mP8ykL.mp3",eo="/assets/Our%20Guide%20And%20Our%20Flame-DQ5U2CIE.pdf",to="/assets/10%20-%20Deep%20Creek%20-%20Our%20Guide%20And%20Our%20Flame-CqhTsUTo.mp3",no="/assets/Through%20Your%20Eyes-BEtNIKLp.pdf",oo="/assets/02%20-%20Deep%20Creek%20-%20Through%20Your%20Eyes-CzBG3vW0.mp3",ao=[{title:"Rain",author:"Nathan Creek",date:"March 2015",description:t.createElement(O,null,t.createElement(d,null,"Rain was mostly written at the quiet day that was one of the lent events in 2015. That day we explored one of the bible readings where Jesus calmed the storm. This got me thinking about water, and the different symbolic meanings it can have."),t.createElement(d,null,"In verse 1, the first 4 lines use the idea of flowing water. Our thoughts and actions form a river which naturally wants to carry you along its well-worn course."),t.createElement(d,null,"The last 2 lines of the verse are my favourite part of the song."),t.createElement(Ie,null,'"Wash away the castles we make, Giving life, giving love".'),t.createElement(d,null,"This has several different meanings to me, and has developed a few more since I wrote it. I guess the main meaning relates to the parable of the rich fool (Luke 12:13-21). Storing up wealth is something our culture do quite well, both in terms of possessions, and in terms of social needs. We become members of communities where we feel safe and comfortable. Like we've built ourselves a social mansion, with everything we could ever want, to the point where we remove any need to leave the house. The problem is, Jesus calls us to connect with the outcast, and they're not in our social mansion. Sometimes we need to pull down our mansions so that we can build new relationships of life and love with those outside."),t.createElement(d,null,"I find that the older I get, the less and less I need to deal with change. When I was young, things changed often. Different subjects at school each term, students arriving and leaving each year, trying out different things, sports, music, hobbies. Life was constantly changing. Now days changes are much less frequent. I've been in the same job for 11 years, same church for as long, and although it's had some restructuring I have many of the same friends. All in all my life is pretty comfortable, which is great, but troubling at the same time. Someone once told me"),t.createElement(Ie,null,`"If you're a Christian, and you're comfortable, then you're not doing it right".`),t.createElement(d,null,"I don't entirely agree, but I take the point that much of what Jesus calls us to do is not comfortable. Visiting sick and imprisoned, helping the homeless, standing up against injustice."),t.createElement(d,null,'Speaking of injustice, that brings me to the latest meaning those last two lines of the verse have had for me. Substitute "castles" with "border protection policies". This meaning came to me when I was hearing about the things Lucas has been doing with the "Love Makes A Way" group and their non-violent direct actions. It has added a whole new dimension to the song for me.'),t.createElement(d,null,"Looking at the chorus."),t.createElement(Ie,null,'"After the rain falls down, I might swim or I might drown".'),t.createElement(d,null,"This reminds me of the story of Jesus walking on the water, where he calls out to Peter to walk out with him. Peter is willing to give it a go even though he doesn't have the faith he needs to achieve it. He starts to drown, but then Jesus reaches out and helps him. I think we can all have similar experiences when we try something new. We don't know if it's going to work or not, but we are willing to give it a go."),t.createElement(d,null,`Looking at the 2nd Verse, this verse talks about the life giving nature of rain. Growing up on a farm I was all too aware of the need for rain for plants to grow. A farmer's livelihood relies on the variations in the weather. You need times of rain, and you need times of Sun. But even though we know this, sometimes we still find rain inconvenient and make statements like "I hope it doesn't rain on the weekend". A fact of life is that sometimes things are going to annoy us, but if we can get through that then we might find that it allowed something new to grow.`)),videos:[{description:"Recording by MUC band during 2020 lockdown",youtube:"R11C-0soZnY"}],downloads:[{title:"Sheet Music",url:cn},{title:"Recording (live) by MUC band, 2015",url:gt}],lyrics:[{name:"Verse 1",content:`There’s a river flowing deep within our lives
Flowing with our own concerns
We might float along and never touch the shore
but we’re called to something more
Wash away the castles we make
Giving life giving love`},{name:"Chorus",content:`After the rain falls down
I might swim or I might drown
It washes away the pain
and in the end I stand on solid ground
So bring on the rain, bring on the rain
Bring on the rain, bring on the rain`},{name:"Verse 2",content:`Water purifies us, seeps into our pores
satisfies our hungry souls
Filling cracks beneath the faces that we show
Giving life so we can grow.
Wash away the castles we make
Giving life giving love`}]},{title:"The Great I AM Is Here",author:"Lenten Reflection Oasis participants",date:"March 2014",description:t.createElement(O,null,t.createElement(d,null,"As part of the Lenten Reflection Oasis held on the 22nd of March I ran a music and song writing space where people could come and explore their creative side. The aim of the activities on the day was to give us time to step out of the business of life for a few hours and give us a chance to reflect and explore."),t.createElement(d,null,"‘The Great I AM Is Here’ emerged out of a compilation of smaller sections of lyrics (typically 2 or 4 lines) contributed by many different people. The names in the sheet music are those people who indicated they would like their name included."),t.createElement(d,null,"A brief comment about the inspiration behind the lyrics:"),t.createElement(Ce,null,t.createElement(d,null,"Some time ago I came across ",t.createElement("a",{href:"https://www.youtube.com/watch?v=TiH9dbAsAp0"},"this video"),". It is a song that was created after Scott Adams (the creator of dilbert) asked the readers of his blog to each submit 2 lines of lyrics which are gibberish, but sound like they might almost make sense. I was taken with this idea. Not the gibberish part, but the idea of creating a song from random lyrics supplied by many different people. So I thought I'd try it out, and it worked quite well in the end."),t.createElement(d,null,"Here are the guidelines I supplied:",t.createElement(Ce,null,"1. Write no more than two lines.",t.createElement("br",null),"2. Your lines should be grammatically correct.",t.createElement("br",null),"3. It should sound like it might have deep meaning to someone else.",t.createElement("br",null),"4. Avoid clunky sounding words. Velvet is good. Cholesterol is bad.",t.createElement("br",null),"5. Specify whether your lines are a hook or just part of the regular lyrics.",t.createElement("br",null),"6. Draw inspiration from the things you have heard and seen today.",t.createElement("br",null),"Could be clever, could be obscure.")),t.createElement(d,null,"Inspiration was taken from the story telling time at the start of the day, as well as from the other thought provoking and reflective activities on the day. The words ‘I am here’ were repeated at the start of the day to help people immerse themselves fully in the day."),t.createElement(d,null,"There was also a story was about Abram (Abraham) and Sari (Sarah) and their journeys. As they travelled, they built alters to God in recognition that no matter where they went, God was there, ‘I AM is here’. The story time also spoke of how there are times when we step out into the unknown, or into the desert, and at times like this we can rely on God to be there to guide us."),t.createElement(d,null,"In the lyrics, the two similar phrases ‘I am here’ and ‘I AM is here’ came together to create a song which talks about God being present, but also that we are also present with God.")),t.createElement(d,null,"I have made this simple recording with just the vocal and an acoustic guitar. This is how it was shared with the group at the end of the day.")),downloads:[{title:"Sheet Music",url:mn},{title:"Recording",url:pn}],lyrics:[{name:"Verse 1",content:`Wandering through the desert is hard
Trying to find your way with just the stars in the sky
Dusty, dry I wait upon you
Yearning for the light to shine through`},{name:"Chorus",content:`The great I AM is here.
Everywhere, in everything
I AM here. Let us sing
The great I AM is here.
Everywhere, in everything
I AM here. Let us sing`},{name:"Verse 2",content:`I AM in the desert of old
In the city, each small place, then now and always
All this love and pain that we see
Does it make sense? Tell us how we should be?`},{name:"Verse 3",content:`Teach me, lead me, show me the way
Guide me through life’s desert. Never lead me astray.
Oh what a beautiful sight
The brilliant stars you placed for us, in the night`},{name:"Verse 4",content:`Walk along the labyrinth of life
The sorrow and the pain, often lead us to strife
But then I gaze into the depth of the night
Your healing power lifts us into the light`}]},{title:"We Have A Saviour",author:"Nathan Creek",date:"May 2011",videos:[{description:"Recording by MUC band during 2020 lockdown",youtube:"LlfE9Ybzr8o"}],downloads:[{title:"Sheet Music",url:wn},{title:"First recording by Nate, 2011",url:ft},{title:"Recording (live)",url:gn}],lyrics:[{name:"Verse 1",content:`We come before the father, broken and afraid.
Searching for the holy truth.
Time and again, we will call out your name.
What’s the point of this game that we all lose.
We could never enter in
while we have unforgiven sin`},{name:"Chorus",content:`You came to earth for us. A human sacrifice.
You died, our sins are now forgiven.
They laid your body in a grave.
You rose and left an empty cave.
Now we are saved. We have a saviour.
We have a saviour.`},{name:"Verse 2",content:`Engaging in the freedom, we are unrestrained,
searching for a way to serve.
See those in need, when they call out your name
Give the love and the justice they deserve.
Through your grace you set us free
to show the world what true love means.`}]},{title:"Amazing",author:"Nathan Creek",date:"July 2010",videos:[{description:"Recording by MUC band during 2020 lockdown",youtube:"LFz_25diKLI"}],downloads:[{title:"Sheet Music (in B)",url:fn},{title:"Sheet Music (in A)",url:yn},{title:"Recording by Nate, 2010",url:yt},{title:"Recording (live)",url:vn}],lyrics:[{name:"Verse 1",content:`Here we are, gathered here for you.
We give our lives to you
the one who set’s us free.
Here we are, gathered in your name.
So thankful that you came
and showed us how to be.

Imagine the joy on their faces
if we spread your love to all places.`},{name:"Chorus",content:`And we will praise your name and sing
and offer up ourselves to him.
To know our God, our Lord and King.

And we will praise your name and show
the love of Jesus wherever we go,
and we will do something amazing.`},{name:"Verse 2",content:`We will find, a lesson to be learned
Is love not in return
But offered from the heart.
And each day, our story can display
We’re living Jesus’ way
And then the magic starts

Imagine the joy on their faces
if we spread your love to all places.`},{name:"Bridge",content:`So amazing, we offer up ourselves.
So amazing, our Lord and King.
So amazing. The love of Jesus grows
so that we can do something amazing.`}]},{title:"Follow The Signs",author:"Nathan Creek",date:"June 2009",downloads:[{title:"Sheet Music",url:bn},{title:"Recording",url:vt}],lyrics:[{name:"Verse 1",content:`When we come into this life
we start along a journey,
Slowly gaining experience
to help us on the way.

As a child there is lots to see.
All the love and pain and mystery.
Could I find an answer to explain?`},{name:"Chorus",content:`Whereever I turn my head and open my eyes,
I see the wonder and the beauty of this world that you inspired.

I know you’re walking with me. I know you’re in my heart.
You’re always with me guiding me. 
If I just follow the signs.`},{name:"Verse 2",content:`Something new round every turn
with all the different choices.
Learning lessons from what I’ve done
and things that I have found.

If I’m travelling on a bumpy road,
or I’m carrying a heavy load,
if I lift my head and look around,`},{name:"Verse 3",content:`As I'm walking through this life
I will travel over
hills and valleys and cross the plains,
the wide and narrow ways.

Every now and then I will ascend
to a mountain top experience.
It’s easy to see why I’d want to stay,
but if I travel on, then on my way`}]},{title:"I'll Go",author:"Nathan Creek",date:"April 2009",videos:[{description:"Recording by MUC band during 2020 lockdown",youtube:"yU3cMmp-JnQ"}],downloads:[{title:"Sheet Music",url:kn},{title:"First recording by Nate, 2009",url:bt}],lyrics:[{name:"Verse 1",content:`Standing, searching for a reason.
Why it is that life can be unfair?
Can we choose our destination?
Do we live by accident or care?

If you wander through a maze with no directions
you might find the end, or finish at the start again.`},{name:"Chorus",content:`I'll go. Lead me a direction and I'll go.
I'll see. Give me all the strength that I will need.
I'll show. A willingness to learn, and I'll grow
as you teach me all the things I need to know.`},{name:"Verse 2",content:`Planning, dreaming of a future,
knowing there's a mix of light and shade.
Facing different situations
are we just as likely to complain?

I want to do my best to follow Jesus
and not drift along, and give in to the tide of fate.`}]},{title:"Your Kingdom",author:"Nathan Creek",date:"June 2008",videos:[{description:"Recording by MUC band during 2020 lockdown",youtube:"vtbm2UV0AdU"}],downloads:[{title:"Sheet Music",url:In},{title:"First recording by Nate, 2008",url:kt}],lyrics:[{name:"Verse 1",content:`Father God I really wanna say I
love the way You listen when I pray.
Take my sin and wash it all away and
set me free.

Help me see your will and how it's done to
know deep down, You're the only one.
trust in him so I am not alone he
lives in me`},{name:"Chorus",content:`Father take my hand and I will come.
Father give me strength to see your will be done.
If You can turn the water into wine.
Give your people light to shine.
We will see the glory of Your kingdom.`},{name:"Verse 2",content:`You can feed a billion in a day bring
dead to life, heal the sick and lame.
Let me feel the power of your name and
live with you.
Take the bits and pieces in my life so
You can turn the darkness into light.
Transform me and make it that I might be
born anew.`},{name:"Bridge",content:`If there's a better world for us to find,
where deaf can hear and You give sight to the blind.
If You can turn the water into wine,
then Your people will be fine.
Living in the glory of Your kingdom.`}]},{title:"Living For Heaven",author:"Nathan Creek",date:"2007",videos:[{description:"Recording by MUC band during 2020 lockdown",youtube:"t-P8-6JigpA"}],downloads:[{title:"Sheet Music",url:Cn},{title:"Recording by Deep Creek band, 2007",url:En}],lyrics:[{name:"Verse 1",content:`We've been living, for ourselves.
Trying to help ourselves along.
Rarely thinking, about the reasons
why this might be wrong.
There's a reason that we pray.
There's a reason that we open up for God to show the way.`},{name:"Chorus",content:`Spirit God, send your presence.
Show the way and we will follow where you lead.
We might be dying, to go to heaven,
but we're living, to bring it here instead.`},{name:"Verse 2",content:`We're not perfect, we do wrong
and it makes us feel ashamed.
We feel guilty, but we don't need to.
That's why Jesus came.
Jesus came to set us free.
Jesus came so we could live our lives and be all we can be.`}]},{title:"Not Alone",author:"Nathan Creek",date:"2007",downloads:[{title:"Sheet Music",url:Sn},{title:"Recording",url:Tn}],lyrics:[{name:"Verse 1",content:`There's a voice inside my head.
I'm not childish, I'm not crazy, I'm just a Christian.
And it tells me what to do.
It's not trying to take my life away, but
give new life to me and you, because`},{name:"Chorus",content:`God is working through his kingdom
So the glory of his power can be shown.
God will help us make decisions.
When we try to find our way we're not alone.
We've got the voice inside, we're not alone.`},{name:"Verse 2",content:`There are things that we should do.
All the things that we can see, that need to be cured.
How do we know where to start?
You just open up yourself to God, and let his love into your heart.`},{name:"Bridge",content:`So listen to that voice and let it's work begin.
To see what it can do the joy that it will bring.`}]},{title:"Step Out In Faith",author:"Nathan Creek",date:"2007",videos:[{description:"Recording by MUC band during 2020 lockdown",youtube:"F0dCjwNuXP0"}],downloads:[{title:"Sheet Music",url:xn},{title:"Recording by Deep Creek band, 2007",url:An}],lyrics:[{name:"Verse 1",content:`Hear them all, telling us all there's no
reason to hope, that our God is real.
Where's the proof, why do you base your whole
life on that man, from so long ago?

Hear them all, telling us that it's each
man for himself. You're number one.
What does that breed? Greed and mistrust
and pain for everyone.`},{name:"Pre Chorus",content:`We don't have the answers
but we know there's a better way.`},{name:"Chorus",content:`It's all about patience, all about kindness.
all about knowing what to do when you're called.
It's time to be ready, time to be faithful.
time to be the one who takes that step out in faith.`},{name:"Verse 2",content:`Hear the Lord, telling us all there's a
reason to hope, a reason to feel
loved in this world. We are a part of the
family of God, so don't feel alone.

Talk to God, Listen and learn of his
plan for the world. Then you will see
he has the power. All we can do
is call upon his name.`}]},{title:"This Troubled Life",author:"Nathan Creek",date:"2006",downloads:[{title:"Sheet Music",url:Wn}],lyrics:[{name:"Verse 1",content:`There's a boy in the street, with no shoes on his feet.
Rests his head on his knees. He so poor. Begging help me please.
He knows no other way. With no home, here he'll stay.
Just a will to survive. Hoping he'll make it through the night.`},{name:"Pre Chorus",content:`So many people crying out in need.
So many hurting. God we plead`},{name:"Chorus",content:`Save this troubled life. Take it as it is.
You can see the burdens it carries,
see all the heartache and tears.

Save this troubled life. May it know your love.
And I pray that someday love will find a way
to save this troubled life.`},{name:"Verse 2",content:`In among all the crowd. People rushing around.
Life's so busy each day. There's no time. Time to stop and pray.
All the things you can own. But you find you're alone.
What's the meaning? you cry. Searching for something deep inside.`},{name:"Bridge",content:`We know that life isn't easy.
We know that life isn't fair.
But we know that there is a future.
God help us to find our way there.`},{name:"Verse 3",content:`Here I am I am yours. Be my guide I implore.
As I pray on my knees, calling out Father help me please.
I know you will be there. Take me into your care.
Send your spirit to be by my side. Living here with me.`}]},{title:"Called",author:"Nathan Creek",date:"2006",videos:[{description:"Recording by MUC band during 2020 lockdown",youtube:"WmYFWLgP694"}],downloads:[{title:"Sheet Music",url:Mn},{title:"Recording by Deep Creek band, 2006",url:Rn},{title:"Recording (live)",url:Ln},{title:"Recording (live heavier)",url:Nn}],lyrics:[{name:"Verse 1",content:`There are many things we strive for,
many things we try to make our lives complete.
Searching for a true connection;
Try to save ourselves from failure and defeat.

In the everyday, there's no easy way.
Try to walk our own path and find the answer there.
But the answer is found, when we share love around.
So for Jesus sake may the actions we take, show that we care.`},{name:"Chorus",content:`It's not enough just to stand on the side lines.
Not enough to be a part of the crowd.
That's not the way our lives should be.

We are called to be a part of the action.
We are called to be a part of it now.
Called on to share some love.
Called on to share God's love. (This line in last chorus only)`},{name:"Verse 2",content:`Giving hope to those who need it;
who have fallen through the cracks and can't be seen.
We can help the poor and needy,
if we open up our hearts and plant the seed.

It's a difficult thing, pain and suffering.
It's not easy to find the answer to despair.
But the answer is found, when we share love around.
So for Jesus sake may the actions we take, show that we care.`}]},{title:"Creation",author:"Nathan Creek",date:"2006",videos:[{description:"Recording by MUC band during 2020 lockdown",youtube:"oGDS2BVjUg4"}],downloads:[{title:"Sheet Music",url:Gn},{title:"Recording by Deep Creek band, 2006",url:Dn},{title:"Recording (acoustic)",url:Hn}],lyrics:[{name:"Verse 1",content:`It's a mystery, it's something that we seek
as we learn about ourselves.
Where did we come from? What is our origin?
What's the answer? Who can tell?`},{name:"Pre Chorus",content:`We believe in a creator we call God.
He's the one that gave us everything we've got.`},{name:"Chorus",content:`You can find him if you look at all you see.
Take a moment to believe.
You can find him he's in every single thing.
We can know we live in his creation.`},{name:"Verse 2",content:`Find the blessings in the actions that we take.
Know they're greater than they seem.
It's a system where each creature has it's place.
Who would give this life to me?`},{name:"Bridge",content:`To see the wind in the trees.
To wander on a beach, feel the ocean breeze.
These are signs that we have.
Simply see them and know that`}]},{title:"A Better Way",author:"Nathan Creek",date:"2006",videos:[{description:"Recording by MUC band during 2020 lockdown",youtube:"9iyvyKgzmAs"}],downloads:[{title:"Sheet Music",url:Vn},{title:"Recording by Deep Creek band, 2006",url:Bn},{title:"Recording (live)",url:Yn}],lyrics:[{name:"Verse 1",content:`Learning what's important. How our faith's defined.
How to tell the truth from all the choice we find.
Learning to interpret all we see and hear.
Finding common ground even though we disagree.
Giving us the power to understand
we should not be fighting our fellow man`},{name:"Chorus",content:`Through our living spread the message wide.
In our example show that God is in our lives.
With our expressions of tolerance and grace
we will show the world there's a better way.`},{name:"Verse 2",content:`How to love our neighbour? Find the things they need.
It's not always easy, it's not always clear.
Love is not just giving. It's an attitude.
Tolerance, compassion, respect and gratitude.
Making sure we're patient and we're kind.
Making sure we're keeping an open mind.`},{name:"Bridge",content:`It's a way of justice, it's a way of peace
and if we keep on trying, it will never cease`}]},{title:"Do What We Can",author:"Nathan Creek",date:"2006",downloads:[{title:"Sheet Music",url:jn}],lyrics:[{name:"Verse 1",content:`So lucky living in this world.
So many chances to be good.
To choose our course of action,
whether right or wrong.
We still know we're living as you made us.`},{name:"Chorus",content:`In our hearts we believe, in a God who can give everything that we need.
By our faith we can see, that our lives are meant to be.
With the gift of each day, we will find time to listen and find time to pray,
and we'll dance, and we'll sing, and we'll do what we can to worship him.`},{name:"Verse 2",content:`So lucky living in this world.
To be an individual,
not measured by a standard,
special and unique.
Knowing that God loves us as he made us.`}]},{title:"Inside Of Me",author:"Nathan Creek",date:"2006",downloads:[{title:"Sheet Music",url:Fn},{title:"Recording",url:On}],lyrics:[{name:"Verse 1",content:`Living as a child of God. Living in his way.
An expression of his love in all I do and say.
Given freedom, given choice. Guided by his will.
Learning to discern what's right. Potential to fulfil.`},{name:"Pre Chorus",content:"I will give my life to you and know that I will be"},{name:"Chorus",content:`Living with God inside of me.
He gives me strength and helps me see
what I can be, what I can do with my life now that he's set me free.
As a disciple of the Lord I can see Jesus' love outpoured.
Leading by example, Living with God inside of me.`},{name:"Verse 2",content:`Giving him my everything. Offering the lot.
Facing all the challenges that come no matter what.
His advice will help me through, help me find the patch.
Giving me the chance to make the best with what I have.`},{name:"Verse 3",content:`Taking all I learn from him. Taking his design.
Using it to shape my life and join it to the vine.
Part of more than what we see. What does it require?
Just ask him into my life and he'll set me on fire.`}]},{title:"Shine Our Light",author:"Nathan Creek",date:"2006",downloads:[{title:"Sheet Music",url:$n},{title:"Recording",url:zn}],lyrics:[{name:"Verse 1",content:`When we wake up in the morning, and begin a brand new day.
It's a gift that we've been given, yet we still complain.
Stress and turmoil can be blinding. They can cloud the things we see.
Seeing nothing but the hardship, it's not for you and me.`},{name:"Chorus",content:`So we shine our light like the sun in the sky.
Shine it bright till there's no more night.
Living in your radiance, it can make a difference.
You are there to ease our minds.
Understanding that you, know us through and through and through.
There's no reason to be shy
as we shine our light, shine our light.`},{name:"Verse 2",content:`Tell us how you want to use us. Tell us where we are to go.
Use the talents that you gave us, and help new one's to grow.
Spread the good news of your kingdom. Show that love is in your plan.
See it when injustice happens, and fix it if we can.`},{name:"Bridge",content:`If we shine out brilliantly, shine it out for all to see.
We can show the world, there's a better way,
than a world that's dull and grey.`}]},{title:"Filled With Your Love",author:"Nathan Creek",date:"2006",downloads:[{title:"Sheet Music",url:Pn}],lyrics:[{name:"Verse 1",content:`This world's a jungle, this world's a maze.
So many options that can all seem the same.
No choice between them. Which way to go?
How do we follow you?
Is there a way we can know?`},{name:"Chorus",content:`As we walk along, and follow your light.
So bright it even lights the darkest night.
Discovering new, what couldn't be seen.
The space in between is filled with your love.`},{name:"Verse 2",content:`Glorious Father. Mighty and strong.
Walking beside us as we journey along.
You hold the lantern, lighting our course.
You call us to follow you.
giving our lives to your cause.`},{name:"Bridge",content:`We know you're the way,
to see light of day.
In all that we do help us listen and pray.`}]},{title:"In Honour Of You",author:"Nathan Creek",date:"2006",videos:[{description:"Recording by MUC band during 2020 lockdown",youtube:"a_pxFh5iK64"}],downloads:[{title:"Sheet Music",url:_n},{title:"Recording by Deep Creek band, 2006",url:Un}],lyrics:[{name:"Verse 1",content:`Cleanse me and wash clean my eyes.
Help me see your beauty. Help me see your light.
I know that you are with me,
know that you are near,
know that you can take away my fear.

Heal me and warm up my heart.
Help me feel your presence when my life gets hard.
To share my troubles with you,
let my burdens go.
You will keep me moving when I'm slow.`},{name:"Chorus",content:`Lord I love you and want to make you glad.
Through my faith, I believe that you have
made me who I am.
When the things you ask of me
I don't know how to do.
Give me strength to live my life
in honour of you.`},{name:"Verse 2",content:`Bless me with gifts of your love.
Help me use them wisely. Help me to become
a servant in your kingdom
living in your grace.
You are there to help me know my place.

Send me to go and proclaim.
Help me be your witness speaking in your name.
To show the world I love you,
you're showing me the way.
You are with me each and every day.`}]},{title:"All You Want Me To Be",author:"Nathan Creek",date:"2005",downloads:[{title:"Sheet Music",url:qn},{title:"Recording",url:Jn}],lyrics:[{name:"Verse 1",content:`I jump out of bed in the morning,
grab some breakfast and go about my day.
There's a song in my heart, but I'm only at the start,
Hoping that it's go'n to stay that way.

Yesterday I got into some trouble.
I got into a heated argument.
It was clear I was right, but I know I shouldn't fight.
Will I make the same mistake today?`},{name:"Chorus",content:`Oh lord, keep me your child,
and lead me through each day.
Teach me to see when I'm needed,
and to listen when I pray.
Oh lord, I don't deserve it,
but your grace gives me riches for free.
So I'll call on your name.
Help me be all you want me to be.`},{name:"Verse 2",content:`I jump in the car in the garage.
Off to work there's so much to be done.
I'm cruising down the road, up until the traffic slowed.
An accident, someone ran off the road.

I drove right on by and was thinking,
That I'm going to be late now, thanks a lot.
What's important to me? What if I had hit that tree?
Work can wait for me, I'm still alive.`},{name:"Verse 3",content:`Sometimes I take things for granted,
like the way good things happen everyday.
Like the offer of a gift, from a friend to give a lift,
when I'm feeling dull and kind of grey.

A gift that I often take for granted,
is that God is watching over me always.
If I'm down in the dumps, I can turn to him at once.
He will hear and listen as I pray.`}]},{title:"As We Gather",author:"Nathan Creek",date:"2005",downloads:[{title:"Sheet Music",url:Kn},{title:"Recording",url:Xn}],lyrics:[{name:"Verse 1",content:`As we gather in your presence oh Lord.
A community of life in your name.
In our gathering here, may your spirit be near.
As we gather in your presence oh Lord.`},{name:"Chorus",content:`We are gathered here with you.
Teach us, and heal us this day.
Fill our hearts with peace and love,
as we come near to you.`},{name:"Verse 2",content:`As we pray in your presence oh Lord.
Asking you how we can live in your name.
Speak your will to our ear. Take our doubt and our fear.
As we pray in your presence oh Lord.`},{name:"Verse 3",content:`As we worship in your presence oh Lord.
Showing you that we can live in your name.
May our actions reflect, that it's you we respect.
As we worship in your presence oh Lord.`},{name:"Verse 4",content:`As we praise you in your presence oh Lord.
Thanking you that we can live in your name.
You are wonderful and, we've been saved through your plan.
As we praise you in your presence oh Lord.`}]},{title:"Know The Truth",author:"Nathan Creek",date:"2005",videos:[{description:"Recording by MUC band during 2020 lockdown",youtube:"LHjpo8y53dI"}],downloads:[{title:"Sheet Music",url:Qn},{title:"Recording",url:Zn}],lyrics:[{name:"Verse 1",content:`There are many questions we can say,
to try to know you more, and try to know your ways.
How do we know the truth? How do we know,
what we believe is real? Not something that we made.

The signs of your existence can be easily ignored.
But there is so much more than what we see.`},{name:"Chorus",content:`Have faith in God above.
Even when he can't be seen.
Even when he can't be heard.
Just take a look around.
See what God has made for you,
and you'll see the proof.
Have faith in God and you will know the truth.`},{name:"Verse 2",content:`There are people hurting in this world,
just trying to get by, trying to make it work.
They do not know the truth and cannot see,
what we believe is real. Not something that we made.

The signs of your existence can be easily ignored.
But there is so much more that they can't see.`},{name:"Verse 3",content:`There are many questions we can say,
to try to know you more, and try to know your ways.
We'll come to know the truth and then we'll see,
what we believe is real. Not something that we made.

The signs of your existence will be seen and not ignored.
And in your name we'll live our lives for you.`}]},{title:"Our Guide and Our Flame",author:"Nathan Creek",date:"2005",downloads:[{title:"Sheet Music",url:eo},{title:"Recording",url:to}],lyrics:[{name:"Chorus",content:`You hold the world in your hands.
You can look at all the pieces,
and see how they fit your plan.
And we want to be a part of it.
All we have to do is use your spirit.
Send it down. Be our guide and be our flame.`},{name:"Verse 1",content:`Help us to be your people, so we can try to change the world.
Not by telling people what to do, by being part of it ourselves.
The world is what we make it. It's our choice in all we do,
but along the way, we'll think and pray, and be guided there by you.`},{name:"Verse 2",content:`How could we live without you, like so many people do?
With no spirit giving us a hand, and giving us a different view?
Nothing there but darkness. Even though there's lots to see.
and the meaning there, would not compare, we'd be living randomly.`},{name:"Bridge",content:`Without you we're driving blind.
With no purpose and no meaning, no direction in our lives.
We're all travelling on a journey, that we know will end some day.
But it's not the end where we need your help,
it's the steps along the way.`}]},{title:"Through Your Eyes",author:"Nathan Creek",date:"2005",downloads:[{title:"Sheet Music",url:no},{title:"Recording",url:oo}],lyrics:[{name:"Verse 1",content:`People don't know who you are
or understand your love.
Why is the world the way it is?
People are angry, people are jealous
People have things go wrong in their lives
Why don't they all turn to you?`},{name:"Chorus 1",content:`Help them when they're down, or they're in trouble.
Help them with the pain, and ease the struggle.
Give them all a sense of hope and meaning in their lives.
Show them that there's more to life than living.
Show them that there's more reward in giving.
Help them to see heaven through your eyes.`},{name:"Verse 2",content:`How can we hope to know you
when you know everything
That is why all that we must learn
is Care and compassion, love and forgiveness,
how to make your will done here on earth.
Then we can all turn to you.`},{name:"Chorus 2",content:`Help us when we're down, or we're in trouble.
Help us with the pain, and ease the struggle.
Give us all a sense of hope and meaning in our lives.
Show us that there's more to life than living.
Show us that there's more reward in giving.
Help us to see heaven through your eyes.`}]}],lo=()=>t.createElement(pt,{nav:t.createElement(wt,null)},t.createElement(O,null,t.createElement(d,null,"On this page you'll find the links to download the sheet music in PDF format for each of my songs, and songs I have been involved in writing, and the lyrics. Currently the only sheet music format I have available is lead sheet format (melody line with chords written above). I have been asked for piano scores, but unfortunately I'm a guitarist and I don't have the time or talent to create such a format. If anyone wants to create piano scores for this music that would be most appreciated."),t.createElement(d,null,"There are also some lyric videos, and mp3s with varing degrees of quality, of recorded versions of some of the songs. If you are interested in hearing a song that doesn't currently have a sample recording then email me and I'll see what I can do."),t.createElement(d,null,"If you need information on copyright see ",t.createElement(rt,{to:st.MUSIC.url},"this page"),"."),t.createElement(d,null,"Enjoy!!")),ao.map(e=>t.createElement(un,{key:e.title,title:e.title,author:e.author,date:e.date,description:e.description,videos:e.videos,downloads:e.downloads,lyrics:e.lyrics})));export{lo as default};
