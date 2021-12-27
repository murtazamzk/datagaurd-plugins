var D=Object.defineProperty,G=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var L=(e,n,r)=>n in e?D(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,x=(e,n)=>{for(var r in n||(n={}))$.call(n,r)&&L(e,r,n[r]);if(P)for(var r of P(n))Z.call(n,r)&&L(e,r,n[r]);return e},A=(e,n)=>G(e,B(n));import{s as c,R as t,r as l,L as j,C as I,u as N,N as z,B as F,a as U,b as T,W,c as K}from"./vendor.824f2d0b.js";const q=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const d of a)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function r(a){const d={};return a.integrity&&(d.integrity=a.integrity),a.referrerpolicy&&(d.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?d.credentials="include":a.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(a){if(a.ep)return;a.ep=!0;const d=r(a);fetch(a.href,d)}};q();const J=()=>{const e=c.svg`
        animation: rotate 2s linear infinite;
        margin: -25px 0 0 -25px;
        width: 50px;
        height: 50px;
        
        & .path {
        stroke: var(--navyBlue);
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
        }
        
        @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
        }
        @keyframes dash {
        0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
        }
        }
    `,n=c.div`
        display: flex;
        pointer-events: none;
        height: 100%;
        width: 100%;
        top: 0;
        position: fixed;
        z-index: 2;
        align-items: center;
        justify-content: center;
        transition: all 0.8s ease;
    `;return t.createElement(n,null,t.createElement(e,{viewBox:"0 0 50 50"},t.createElement("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"})))},Q="https://mocki.io/v1/",X={GET_DATA:Q+"727843c6-7b1d-41bf-8c9c-259325f52be9"},S={MARKETING:"/marketing",FINANCE:"/finance",PERSONNEL:"/personnel"},w={SET_NAV_DATA:"SET_NAV_DATA",SET_PLUGINS_DATA:"SET_PLUGINS_DATA"},Y=(e,n)=>{switch(n.type){case w.SET_NAV_DATA:return[...n.data];default:return e}},ee=(e,n)=>{switch(n.type){case w.SET_PLUGINS_DATA:return[...n.data];default:return e}},_={navItems:null,plugins:null},R=l.exports.createContext({state:_,dispatch:()=>null}),te=({navItems:e,plugins:n},r)=>({navItems:Y(e,r),plugins:ee(n,r)}),ne=({children:e})=>{const[n,r]=l.exports.useReducer(te,_);return t.createElement(R.Provider,{value:{state:n,dispatch:r}},e)},re=c.div`
  position: relative;
`,V=c.label`
  position: absolute;
  top: 0;
  left: 0;
  width: ${e=>e.size==="big"?"50px":"40px"};
  height: ${e=>e.size==="big"?"30px":"25px"};
  border-radius: 15px;
  background: var(--red);
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: ${e=>e.size==="big"?"22px":"18px"};
    height: ${e=>e.size==="big"?"22px":"18px"};
    margin: 4px;
    background: var(--white);
    transition: 0.2s;
  }
`,ae=c.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${V} {
    background: var(--green);
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: ${e=>e.size==="big"?"22px":"18px"};
      height: ${e=>e.size==="big"?"22px":"18px"};
      margin-left: ${e=>e.size==="big"?"22px":"18px"};
      transition: 0.2s;
    }
  }
`,M=({id:e,checked:n,onChange:r,size:i="small"})=>t.createElement("div",null,t.createElement(re,null,t.createElement(ae,{size:i,checked:n,onChange:a=>r(a.target.checked),id:e,type:"checkbox"}),t.createElement(V,{size:i,htmlFor:e})));function oe(e){return l.exports.createElement("svg",x({width:120,height:24,viewBox:"0 0 120 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),l.exports.createElement("path",{d:"M11.1164 18.8184C11.0847 18.882 11.0847 18.9774 11.0531 19.0409C10.578 20.3443 9.34286 21.2343 7.94935 21.2343C6.14413 21.2343 4.65561 19.7403 4.65561 17.9284V16.4343H1.90027V17.9284C1.90027 21.2661 4.62394 23.9999 7.94935 23.9999C10.5147 23.9999 12.795 22.3787 13.6501 19.9628C13.7767 19.5813 13.8718 19.1999 13.9351 18.8184H11.1164Z",fill:"#033349"}),l.exports.createElement("path",{d:"M8.26603 0H7.63261C3.42042 0 0 3.43311 0 7.66093V14.845H15.9303V7.66093C15.9303 3.43311 12.5099 0 8.26603 0Z",fill:"#033349"}),l.exports.createElement("path",{d:"M21.9794 0.508545H26.255C30.7839 0.508545 33.6659 3.46484 33.6659 7.69265C33.6659 11.9205 30.8789 14.845 26.2866 14.845H21.9478V0.508545H21.9794ZM26.1916 13.2556C29.6754 13.2556 31.8607 10.935 31.8607 7.69265C31.8607 4.41848 29.612 2.09795 26.255 2.09795H23.7213V13.2556H26.1916Z",fill:"#033349"}),l.exports.createElement("path",{d:"M35.0911 10.0131C35.0911 7.12043 37.0863 4.89526 39.8733 4.89526C41.3302 4.89526 42.597 5.59461 43.2937 6.77077L43.3254 6.73898V4.99063H44.9406V14.8131H43.3571V13.033H43.3254C42.6287 14.2092 41.4252 14.9403 39.81 14.9403C37.1813 14.9721 35.0911 13.0012 35.0911 10.0131ZM43.3888 10.0131C43.3888 7.97871 42.0269 6.38931 40.095 6.38931C38.2581 6.38931 36.7379 7.81977 36.7379 10.0131C36.7379 11.984 38.0998 13.478 40.095 13.478C41.9319 13.478 43.3888 12.1112 43.3888 10.0131Z",fill:"#033349"}),l.exports.createElement("path",{d:"M47.6959 11.9206V6.42129H46.4291V5.02262H47.6959V1.68487L49.3111 1.49414V5.02262H52.5415V6.42129H49.3111V11.6663C49.3111 12.8425 49.5645 13.4147 50.5146 13.4147C51.0847 13.4147 51.6864 13.1604 52.1931 12.9061L52.6048 14.3365C52.0664 14.6544 51.4014 14.9405 50.2296 14.9405C48.4877 14.9723 47.6959 13.9233 47.6959 11.9206Z",fill:"#033349"}),l.exports.createElement("path",{d:"M53.2383 10.0131C53.2383 7.12043 55.2335 4.89526 58.0205 4.89526C59.4774 4.89526 60.7442 5.59461 61.441 6.77077L61.4726 6.73898V4.99063H63.0878V14.8131H61.5043V13.033H61.4726C60.7759 14.2092 59.5724 14.9403 57.9572 14.9403C55.2969 14.9721 53.2383 13.0012 53.2383 10.0131ZM61.536 10.0131C61.536 7.97871 60.1742 6.38931 58.2422 6.38931C56.4053 6.38931 54.8852 7.81977 54.8852 10.0131C54.8852 11.984 56.247 13.478 58.2422 13.478C60.0475 13.478 61.536 12.1112 61.536 10.0131Z",fill:"#033349"}),l.exports.createElement("path",{d:"M80.1583 10.9353V4.99097H82.787V10.2678C82.787 12.0797 83.3254 12.6837 84.5605 12.6837C85.7007 12.6837 86.7458 11.6982 86.7458 9.82275V5.02276H89.4061V14.9088H86.7141V13.7009L86.6825 13.6691C85.9224 14.591 84.8772 15.036 83.8004 15.036C81.6468 15.036 80.1583 13.9552 80.1583 10.9353Z",fill:"#033349"}),l.exports.createElement("path",{d:"M90.9263 9.94967C90.9263 6.96159 92.9215 4.83179 95.5502 4.83179C96.6903 4.83179 97.7354 5.27682 98.4639 6.1351L98.4956 6.10331V4.95894H101.124V14.845H98.6222V13.7007L98.5906 13.6689C97.8938 14.5589 96.912 15.0358 95.6452 15.0358C92.9215 15.0358 90.9263 13.0013 90.9263 9.94967ZM98.6222 9.98145C98.6222 8.39205 97.5454 7.21589 96.1203 7.21589C94.6951 7.21589 93.6183 8.29668 93.6183 9.98145C93.6183 11.5709 94.6317 12.6834 96.1203 12.6834C97.4504 12.6516 98.6222 11.6026 98.6222 9.98145Z",fill:"#033349"}),l.exports.createElement("path",{d:"M103.215 4.99073H105.843V6.42119H105.875C106.635 5.40397 107.68 4.83179 108.82 4.83179H109.01V7.7245C108.725 7.69271 108.472 7.69271 108.314 7.69271C106.698 7.69271 105.812 8.77351 105.812 10.2675V14.845H103.183V4.99073H103.215Z",fill:"#033349"}),l.exports.createElement("path",{d:"M109.707 9.94977C109.707 6.96169 111.734 4.83189 114.363 4.83189C115.566 4.83189 116.611 5.27692 117.34 6.1352H117.371V1.49414H120V14.8769H117.498V13.669H117.435C116.738 14.559 115.724 15.0676 114.394 15.0676C111.702 15.0359 109.707 13.0014 109.707 9.94977ZM117.466 9.98155C117.466 8.39215 116.39 7.21599 114.901 7.21599C113.508 7.21599 112.399 8.29678 112.399 9.98155C112.399 11.571 113.444 12.6835 114.901 12.6835C116.358 12.6517 117.466 11.6027 117.466 9.98155Z",fill:"#033349"}),l.exports.createElement("path",{d:"M72.6841 7.05689V9.34563H75.3761V11.6026C74.4577 12.1748 73.5392 12.4291 72.4941 12.4291C69.8021 12.4291 68.1552 10.3629 68.1552 7.72444C68.1552 4.79994 69.9921 3.05159 72.3674 3.05159C73.9509 3.05159 75.1544 3.65557 76.0412 4.54564L78.0364 2.79729C76.5796 1.1761 74.3943 0.349609 72.3674 0.349609C67.9018 0.349609 65.2098 3.52842 65.2098 7.72444C65.2098 12.3337 68.3769 15.0039 72.4941 15.0039C74.6794 15.0039 76.8329 14.2728 78.1314 13.2238V7.05689H72.6841Z",fill:"#033349"}))}function le(e){return l.exports.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512"},e),l.exports.createElement("title",null,"Apps"),l.exports.createElement("path",{d:"M104 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zM256 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zM408 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zM256 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zM408 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 464a56 56 0 1156-56 56.06 56.06 0 01-56 56zM256 464a56 56 0 1156-56 56.06 56.06 0 01-56 56zM408 464a56 56 0 1156-56 56.06 56.06 0 01-56 56z"}))}function se(e){return l.exports.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512"},e),l.exports.createElement("title",null,"Color Filter"),l.exports.createElement("path",{d:"M253.72 202.53a4 4 0 004.56 0 151.88 151.88 0 01128.44-20.41 4 4 0 005.15-4C388.8 105.86 329 48 256 48s-132.8 57.86-135.87 130.15a4 4 0 005.15 4 151.88 151.88 0 01128.44 20.41zM405.31 212.56a152.53 152.53 0 01-83.08 108.23 4 4 0 00-2.28 3.69c0 1.17.05 2.34.05 3.52a151.58 151.58 0 01-47.15 109.94 4 4 0 00.64 6.31A135.24 135.24 0 00344 464c72.07 0 134.1-60.28 136-132.34a136.07 136.07 0 00-68.76-121.87 4 4 0 00-5.93 2.77z"}),l.exports.createElement("path",{d:"M390.57 203.67a4 4 0 00-2.69-4.4 135.84 135.84 0 00-114.4 12.49 4 4 0 00-.64 6.29 151.92 151.92 0 0144.47 81.4 4 4 0 005.94 2.72 136.29 136.29 0 0067.32-98.5zM192 328c0-1.18 0-2.35.05-3.52a4 4 0 00-2.28-3.69 152.53 152.53 0 01-83.08-108.23 4 4 0 00-5.88-2.77 136.07 136.07 0 00-68.76 121.87C34 403.72 96 464 168.05 464a135.24 135.24 0 0070.46-19.75 4 4 0 00.64-6.31A151.58 151.58 0 01192 328z"}),l.exports.createElement("path",{d:"M168 192a135.34 135.34 0 00-43.88 7.27 4 4 0 00-2.69 4.4 136.29 136.29 0 0067.32 98.5 4 4 0 005.94-2.72 151.92 151.92 0 0144.47-81.4 4 4 0 00-.64-6.29A135.18 135.18 0 00168 192zM256 336a151.44 151.44 0 01-42.72-6.12 4 4 0 00-5.15 4 135.69 135.69 0 0045.18 95.4 4 4 0 005.38 0 135.69 135.69 0 0045.18-95.4 4 4 0 00-5.15-4A151.44 151.44 0 01256 336zM302.57 308.33a135.94 135.94 0 00-43.87-81.58 4.06 4.06 0 00-5.4 0 135.94 135.94 0 00-43.87 81.58 4 4 0 002.69 4.4 136.06 136.06 0 0087.76 0 4 4 0 002.69-4.4z"}))}function ie(e){return l.exports.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512"},e),l.exports.createElement("title",null,"Checkbox"),l.exports.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:32,d:"M352 176L217.6 336 160 272"}),l.exports.createElement("rect",{x:64,y:64,width:384,height:384,rx:48,ry:48,fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:32}))}const ce=c(oe)`
    width: 100%;
    height: auto;
    margin-bottom: 30px;
    max-width: 180px;
    padding-left: 40px;
`,de=c.div`
    background: var(--grey);
    width: 30%;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    padding-bottom: 0 !important;
`,ue=c.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`,pe=c(j)`
    display: flex;
    align-items: center;
    padding: 12px 30px;
    position: relative;
    border-left: 5px solid transparent;
    transition: var(--transition);
    font-size: var(--fz-lg);
    &.active,&:hover {
        background-color: var(--white);
        border-left-color: var(--red);
    }
`,k=I`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`,H=c(le)`
    ${k}
`,ge=c(se)`
    ${k}
`,he=c(ie)`
    ${k}    
`,fe=c.div`
    margin-top: auto;
    padding: 0 30px 40px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--navyBlue);
    font-size: var(--fz-md);
    background: var(--green);
    background: linear-gradient(to bottom, transparent 35%, ${e=>e.status==="enabled"?"var(--green)":"var(--red)"} 200%);
`,me=()=>{const{state:e,dispatch:n}=l.exports.useContext(R),{pathname:r}=N(),i=e.navItems&&e.navItems.filter(o=>o.route===r);let a="disabled";const d=o=>o===r?"active":"",f=o=>{switch(o){case S.MARKETING:return t.createElement(H,null);case S.FINANCE:return t.createElement(ge,null);case S.PERSONNEL:return t.createElement(he,null);default:return t.createElement(H,null)}},E=()=>(i&&i.length&&(i[0].activePlugins.length===0?a="disabled":i[0].inActivePlugins.length===0&&(a="enabled")),t.createElement(fe,{status:a},t.createElement("span",null,"All plugins ",a),t.createElement(M,{id:"mainSwitch",checked:a==="enabled",onChange:()=>{s()},size:"big"}))),s=()=>{let o=e.navItems;o.forEach((p,g)=>{p.route===r&&(a==="enabled"?(o[g].inActivePlugins.push(...o[g].activePlugins),o[g].activePlugins=[]):(o[g].activePlugins.push(...o[g].inActivePlugins),o[g].inActivePlugins=[]))}),n({type:w.SET_NAV_DATA,data:o})};return t.createElement(de,{className:"box"},t.createElement(ce,null),t.createElement(ue,null,e.navItems&&e.navItems.map(o=>t.createElement(pe,{key:o.route,to:o.route,className:d(o.route)},f(o.route),t.createElement("span",null,o.title))),E()))},xe=({children:e})=>t.createElement("div",{className:"box w-100"},e),Ee=c.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`,ve=({children:e})=>t.createElement(Ee,null,t.createElement(me,null),t.createElement(xe,{children:e})),Ce=c.div`
  padding-left: 40px; 
`,be=c.h2`
  font-size: var(--fz-xxl);
  color: var(--navyBlue);
  font-weight: 400;
`,we=c.div`
  display: flex;
  flex-wrap: wrap;
`,ye=c.div`
  border: 2px solid var(--greyDark);
  padding: 15px 20px;
  border-radius: 10px;
  margin-right: 40px;
  margin-top: 40px;
  width: calc(33% - 40px);
  opacity: ${e=>e.disabled?"0.5":"1"};
  pointer-events: ${e=>e.disabled?"none":"all"}
`,Ae=c.div`
  display: flex;
  justify-content: space-between;
`,Se=c.h3`
  font-size: var(--fz-lg);
  color: var(--navyBlue);
  font-weight: 400;
`,Re=c.span`
  font-size: var(--fz-xxs);
  font-weight: bold;
  color: ${e=>e.active?"var(--green)":"var(--red)"};
  position: relative;
  top: -5px;
`,ke=c.p`
  color: var(--greyDark);
  margin: 0 50px 0 0;
  font-size: var(--fz-sm);
  line-height: 1.5;
`,Pe=()=>{const{state:e,dispatch:n}=l.exports.useContext(R),{pathname:r}=N(),i=e.navItems&&e.navItems.filter(s=>s.route===r),a=()=>{if(e==null?void 0:e.navItems)return i.length?i[0].title:t.createElement(z,{to:"/"})},d=(s,o)=>{let p=e.navItems;p.forEach((g,u)=>{if(g.route===r)if(o==="Allowed"){let h=p[u].activePlugins.indexOf(s.id);h!==-1&&p[u].activePlugins.splice(h,1),p[u].inActivePlugins.push(s.id)}else{let h=p[u].inActivePlugins.indexOf(s.id);h!==-1&&p[u].inActivePlugins.splice(h,1),p[u].activePlugins.push(s.id)}}),n({type:w.SET_NAV_DATA,data:p})},f=s=>{let o="Blocked";return i[0].activePlugins.includes(s.id)&&(o="Allowed"),t.createElement("div",null,t.createElement(M,{id:s.id,checked:o==="Allowed",onChange:()=>{d(s,o)}}),t.createElement(Re,{active:o==="Allowed"},o))},E=s=>i[0].disabledPlugins.includes(s.id);return t.createElement(Ce,null,t.createElement(be,null,a()," Plugins"),t.createElement(we,null,e.plugins&&e.plugins.length&&e.plugins.map(s=>t.createElement(ye,{disabled:E(s),key:s.id},t.createElement(Ae,null,t.createElement(Se,null,s.title),f(s)),t.createElement(ke,null,s.description)))))},Le=()=>t.createElement(F,null,t.createElement(U,null,t.createElement(T,{path:":page",element:t.createElement(ve,{children:t.createElement(Pe,null)})}),t.createElement(T,{path:"*",element:t.createElement(z,{to:S.MARKETING})}))),Ie=e=>[400,403,405,500].includes(e),y={TRIGGER_API_CALL:"TRIGGER_API_CALL",LOG_ERROR:"LOG_ERROR",LOG_SUCCESS_RESPONSE:"LOG_SUCCESS_RESPONSE"},Ne={url:"",method:"",data:"",response:null,success:!0,loading:!0,error:""},ze=(e,n)=>{switch(n.type){case y.LOG_ERROR:return A(x({},e),{loading:!1,response:{},success:!1,error:n.errMsg||"Something went wrong. Try again later."});case y.TRIGGER_API_CALL:return A(x({},e),{loading:!0,url:n.url,method:n.method,data:n.data,success:!1,error:!1,response:null});case y.LOG_SUCCESS_RESPONSE:return A(x({},e),{loading:!1,response:n.response,success:!0,error:""});default:return e}},Te=(e,n)=>({triggerAPICall:(r,i,a)=>{e({type:y.TRIGGER_API_CALL,url:r,method:i,data:a})},logSuccessResponse:r=>{e({type:y.LOG_SUCCESS_RESPONSE,response:r})},logError:r=>{e({type:y.LOG_ERROR,errMsg:r})}}),_e=()=>{const[e,n]=l.exports.useReducer(ze,Ne),r=Te(n),{url:i,method:a,data:d,response:f,loading:E,success:s,error:o}=e,p=u=>{u&&r.triggerAPICall(u,"GET")},g=(u,h)=>{u&&r.triggerAPICall(u,"POST",h)};return l.exports.useEffect(()=>{i&&a&&(async()=>{const h={"Content-Type":"application/json"},m=new Request(i,{method:a,headers:new Headers(h),cache:"default",body:a!=="GET"&&d?JSON.stringify(d):void 0});let v;try{v=await fetch(m)}catch(b){r.logError(b);return}try{const b=v.headers.get("content-type");if(b&&b.indexOf("application/json")!==-1){const C=await v.json();if(!C){r.logError();return}if(Ie(v.status)||C.success!==void 0&&C.success===!1||C.status!==void 0&&C.status===!1){r.logError(C.error);return}r.logSuccessResponse(C)}else{r.logError();return}}catch(b){r.logError(b);return}})()},[i,a,d]),{get:p,post:g,response:f,success:s,loading:E,error:o}},Ve=I`
  :root {
    // Font
    --font-main: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;

    // Font size
    --fz-xxs: 10px;
    --fz-xs: 12px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;

    // Colors
    --white: #fff;
    --black: #000;
    --grey: #e5e3e3;
    --greyDark: #ccc;
    --red: #c71f05;
    --navyBlue: #033349;
    --green: #57cd59;

    // Other
    --transition: all 0.25s ease-in-out;
  }
`,O=W`
  ${Ve};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: var(--black);
  }

  body::-webkit-scrollbar {
    width: 6px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--black);
    border-radius: 10px;
  }

  body {
    margin: 0 auto;
    font-family: var(--font-main);
    color: var(--black);
    max-width: var(--max-width);
  }

  ul, li, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--black);
    transition: var(--transition);

    :hover {
      color: var(--blue)
    }
  }

  .w-100 {
    width: 100%;
  }

  .box {
    padding: 40px 0;
    height: 100vh;
    overflow-y: auto;
  }

  .link {
    position: relative;

    :hover::after {
      width: 100%;
    }

    ::after {
      position: absolute;
      content: '';
      left: 0;
      bottom: 0;
      height: 2px;
      border-radius: 1px;
      width: 0px;
      background-color: var(--blue);
      transition: var(--transition);
    }
  }
`,Me=()=>{const{state:e,dispatch:n}=l.exports.useContext(R),{get:r,loading:i,response:a,success:d,error:f}=_e(),E=async()=>{await r(X.GET_DATA)};return l.exports.useEffect(()=>{var s,o;if(a)if(d){const p=(s=a==null?void 0:a.data)==null?void 0:s.tabdata,g=(o=a==null?void 0:a.data)==null?void 0:o.plugins;let u=[],h=[];p&&(Object.values(p).forEach(m=>{u.push({title:m.title,route:"/"+m.title.toLowerCase(),activePlugins:m.active,inActivePlugins:m.inactive,disabledPlugins:m.disabled})}),n({type:w.SET_NAV_DATA,data:u})),g&&(Object.keys(g).forEach(m=>{const v=g[m];h.push({id:m,title:v.title,description:v.description})}),n({type:w.SET_PLUGINS_DATA,data:h}))}else console.log(f)},[a]),l.exports.useEffect(()=>{E()},[]),i?t.createElement(t.Fragment,null,t.createElement(O,null),t.createElement(J,null)):t.createElement(t.Fragment,null,t.createElement(O,null),t.createElement(Le,null))};K.render(t.createElement(t.StrictMode,null,t.createElement(ne,null,t.createElement(Me,null))),document.getElementById("root"));
