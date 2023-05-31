import{o as Ce,t as ye}from"../chunks/index.636fa71f.js";import{S as Ge,a as Je,I as q,g as De,f as qe,b as we,c as le,s as V,i as _e,d as Q,e as J,P as Fe,h as We}from"../chunks/singletons.5188c9f5.js";function Xe(t,o){return t==="/"||o==="ignore"?t:o==="never"?t.endsWith("/")?t.slice(0,-1):t:o==="always"&&!t.endsWith("/")?t+"/":t}function Ze(t){return t.split("%25").map(decodeURI).join("%25")}function Qe(t){for(const o in t)t[o]=decodeURIComponent(t[o]);return t}const et=["href","pathname","search","searchParams","toString","toJSON"];function tt(t,o){const u=new URL(t);for(const i of et)Object.defineProperty(u,i,{get(){return o(),t[i]},enumerable:!0,configurable:!0});return nt(u),u}function nt(t){Object.defineProperty(t,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const at="/__data.json";function rt(t){return t.replace(/\/$/,"")+at}function Ke(t){try{return JSON.parse(sessionStorage[t])}catch{}}function Me(t,o){const u=JSON.stringify(o);try{sessionStorage[t]=u}catch{}}function ot(...t){let o=5381;for(const u of t)if(typeof u=="string"){let i=u.length;for(;i;)o=o*33^u.charCodeAt(--i)}else if(ArrayBuffer.isView(u)){const i=new Uint8Array(u.buffer,u.byteOffset,u.byteLength);let d=i.length;for(;d;)o=o*33^i[--d]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}const fe=window.fetch;window.fetch=(t,o)=>((t instanceof Request?t.method:(o==null?void 0:o.method)||"GET")!=="GET"&&te.delete(Se(t)),fe(t,o));const te=new Map;function it(t,o){const u=Se(t,o),i=document.querySelector(u);if(i!=null&&i.textContent){const{body:d,...f}=JSON.parse(i.textContent),S=i.getAttribute("data-ttl");return S&&te.set(u,{body:d,init:f,ttl:1e3*Number(S)}),Promise.resolve(new Response(d,f))}return fe(t,o)}function st(t,o,u){if(te.size>0){const i=Se(t,u),d=te.get(i);if(d){if(performance.now()<d.ttl&&["default","force-cache","only-if-cached",void 0].includes(u==null?void 0:u.cache))return new Response(d.body,d.init);te.delete(i)}}return fe(o,u)}function Se(t,o){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(o!=null&&o.headers||o!=null&&o.body){const d=[];o.headers&&d.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&d.push(o.body),i+=`[data-hash="${ot(...d)}"]`}return i}const ct=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function lt(t){const o=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${ut(t).map(i=>{const d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(d)return o.push({name:d[1],matcher:d[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(f)return o.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const S=i.split(/\[(.+?)\](?!\])/);return"/"+S.map((b,w)=>{if(w%2){if(b.startsWith("x+"))return be(String.fromCharCode(parseInt(b.slice(2),16)));if(b.startsWith("u+"))return be(String.fromCharCode(...b.slice(2).split("-").map(P=>parseInt(P,16))));const p=ct.exec(b);if(!p)throw new Error(`Invalid param: ${b}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,C,T,k,N]=p;return o.push({name:k,matcher:N,optional:!!C,rest:!!T,chained:T?w===1&&S[0]==="":!1}),T?"(.*?)":C?"([^/]*)?":"([^/]+?)"}return be(b)}).join("")}).join("")}/?$`),params:o}}function ft(t){return!/^\([^)]+\)$/.test(t)}function ut(t){return t.slice(1).split("/").filter(ft)}function dt(t,o,u){const i={},d=t.slice(1);let f=0;for(let S=0;S<o.length;S+=1){const l=o[S],b=d[S-f];if(l.chained&&l.rest&&f){i[l.name]=d.slice(S-f,S+1).filter(w=>w).join("/"),f=0;continue}if(b===void 0){l.rest&&(i[l.name]="");continue}if(!l.matcher||u[l.matcher](b)){i[l.name]=b;const w=o[S+1],p=d[S+1];w&&!w.rest&&w.optional&&p&&(f=0);continue}if(l.optional&&l.chained){f++;continue}return}if(!f)return i}function be(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function pt({nodes:t,server_loads:o,dictionary:u,matchers:i}){const d=new Set(o);return Object.entries(u).map(([l,[b,w,p]])=>{const{pattern:C,params:T}=lt(l),k={id:l,exec:N=>{const P=C.exec(N);if(P)return dt(P,T,i)},errors:[1,...p||[]].map(N=>t[N]),layouts:[0,...w||[]].map(S),leaf:f(b)};return k.errors.length=k.layouts.length=Math.max(k.errors.length,k.layouts.length),k});function f(l){const b=l<0;return b&&(l=~l),[b,t[l]]}function S(l){return l===void 0?l:[d.has(l),t[l]]}}let ee=class{constructor(o,u){this.status=o,typeof u=="string"?this.body={message:u}:u?this.body=u:this.body={message:`Error: ${o}`}}toString(){return JSON.stringify(this.body)}},Ve=class{constructor(o,u){this.status=o,this.location=u}};async function ht(t){var o;for(const u in t)if(typeof((o=t[u])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(t).map(async([i,d])=>[i,await d])));return t}const gt=-1,mt=-2,yt=-3,wt=-4,_t=-5,bt=-6;function vt(t,o){if(typeof t=="number")return d(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const u=t,i=Array(u.length);function d(f,S=!1){if(f===gt)return;if(f===yt)return NaN;if(f===wt)return 1/0;if(f===_t)return-1/0;if(f===bt)return-0;if(S)throw new Error("Invalid input");if(f in i)return i[f];const l=u[f];if(!l||typeof l!="object")i[f]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const b=l[0],w=o==null?void 0:o[b];if(w)return i[f]=w(d(l[1]));switch(b){case"Date":i[f]=new Date(l[1]);break;case"Set":const p=new Set;i[f]=p;for(let k=1;k<l.length;k+=1)p.add(d(l[k]));break;case"Map":const C=new Map;i[f]=C;for(let k=1;k<l.length;k+=2)C.set(d(l[k]),d(l[k+1]));break;case"RegExp":i[f]=new RegExp(l[1],l[2]);break;case"Object":i[f]=Object(l[1]);break;case"BigInt":i[f]=BigInt(l[1]);break;case"null":const T=Object.create(null);i[f]=T;for(let k=1;k<l.length;k+=2)T[l[k]]=d(l[k+1]);break;default:throw new Error(`Unknown type ${b}`)}}else{const b=new Array(l.length);i[f]=b;for(let w=0;w<l.length;w+=1){const p=l[w];p!==mt&&(b[w]=d(p))}}else{const b={};i[f]=b;for(const w in l){const p=l[w];b[w]=d(p)}}return i[f]}return d(0)}const ze=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ze];const Et=new Set([...ze,"actions"]);[...Et];function St(t){return t.filter(o=>o!=null)}const kt="x-sveltekit-invalidated",K=Ke(Ge)??{},Z=Ke(Je)??{};function ve(t){K[t]=Q()}function Rt(t,o){var xe;const u=pt(t),i=t.nodes[0],d=t.nodes[1];i(),d();const f=document.documentElement,S=[],l=[];let b=null;const w={before_navigate:[],after_navigate:[]};let p={branch:[],error:null,url:null},C=!1,T=!1,k=!0,N=!1,P=!1,z=!1,H=!1,F,$=(xe=history.state)==null?void 0:xe[q];$||($=Date.now(),history.replaceState({...history.state,[q]:$},"",location.href));const ue=K[$];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let M,ne,ae;async function ke(){ae=ae||Promise.resolve(),await ae,ae=null;const e=new URL(location.href),n=W(e,!0);b=null;const r=ne={},a=n&&await he(n);if(r===ne&&a){if(a.type==="redirect")return re(new URL(a.location,e).href,{},[e.pathname],r);a.props.page!==void 0&&(M=a.props.page),F.$set(a.props)}}function Re(e){l.some(n=>n==null?void 0:n.snapshot)&&(Z[e]=l.map(n=>{var r;return(r=n==null?void 0:n.snapshot)==null?void 0:r.capture()}))}function Ae(e){var n;(n=Z[e])==null||n.forEach((r,a)=>{var s,c;(c=(s=l[a])==null?void 0:s.snapshot)==null||c.restore(r)})}function Le(){ve($),Me(Ge,K),Re($),Me(Je,Z)}async function re(e,{noScroll:n=!1,replaceState:r=!1,keepFocus:a=!1,state:s={},invalidateAll:c=!1},g,m){return typeof e=="string"&&(e=new URL(e,De(document))),ce({url:e,scroll:n?Q():null,keepfocus:a,redirect_chain:g,details:{state:s,replaceState:r},nav_token:m,accepted:()=>{c&&(H=!0)},blocked:()=>{},type:"goto"})}async function Ie(e){return b={id:e.id,promise:he(e).then(n=>(n.type==="loaded"&&n.state.error&&(b=null),n))},b.promise}async function oe(...e){const r=u.filter(a=>e.some(s=>a.exec(s))).map(a=>Promise.all([...a.layouts,a.leaf].map(s=>s==null?void 0:s[1]())));await Promise.all(r)}function Oe(e){var a;p=e.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),M=e.props.page,F=new t.root({target:o,props:{...e.props,stores:V,components:l},hydrate:!0}),Ae($);const r={from:null,to:{params:p.params,route:{id:((a=p.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};w.after_navigate.forEach(s=>s(r)),T=!0}async function Y({url:e,params:n,branch:r,status:a,error:s,route:c,form:g}){let m="never";for(const _ of r)(_==null?void 0:_.slash)!==void 0&&(m=_.slash);e.pathname=Xe(e.pathname,m),e.search=e.search;const v={type:"loaded",state:{url:e,params:n,branch:r,error:s,route:c},props:{constructors:St(r).map(_=>_.node.component)}};g!==void 0&&(v.props.form=g);let y={},R=!M,L=0;for(let _=0;_<Math.max(r.length,p.branch.length);_+=1){const h=r[_],U=p.branch[_];(h==null?void 0:h.data)!==(U==null?void 0:U.data)&&(R=!0),h&&(y={...y,...h.data},R&&(v.props[`data_${L}`]=y),L+=1)}return(!p.url||e.href!==p.url.href||p.error!==s||g!==void 0&&g!==M.form||R)&&(v.props.page={error:s,params:n,route:{id:(c==null?void 0:c.id)??null},status:a,url:new URL(e),form:g??null,data:R?y:M.data}),v}async function de({loader:e,parent:n,url:r,params:a,route:s,server_data_node:c}){var y,R,L;let g=null;const m={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await e();if((y=v.universal)!=null&&y.load){let O=function(...h){for(const U of h){const{href:x}=new URL(U,r);m.dependencies.add(x)}};const _={route:{get id(){return m.route=!0,s.id}},params:new Proxy(a,{get:(h,U)=>(m.params.add(U),h[U])}),data:(c==null?void 0:c.data)??null,url:tt(r,()=>{m.url=!0}),async fetch(h,U){let x;h instanceof Request?(x=h.url,U={body:h.method==="GET"||h.method==="HEAD"?void 0:await h.blob(),cache:h.cache,credentials:h.credentials,headers:h.headers,integrity:h.integrity,keepalive:h.keepalive,method:h.method,mode:h.mode,redirect:h.redirect,referrer:h.referrer,referrerPolicy:h.referrerPolicy,signal:h.signal,...U}):x=h;const D=new URL(x,r);return O(D.href),D.origin===r.origin&&(x=D.href.slice(r.origin.length)),T?st(x,D.href,U):it(x,U)},setHeaders:()=>{},depends:O,parent(){return m.parent=!0,n()}};g=await v.universal.load.call(null,_)??null,g=g?await ht(g):null}return{node:v,loader:e,server:c,universal:(R=v.universal)!=null&&R.load?{type:"data",data:g,uses:m}:null,data:g??(c==null?void 0:c.data)??null,slash:((L=v.universal)==null?void 0:L.trailingSlash)??(c==null?void 0:c.slash)}}function Pe(e,n,r,a,s){if(H)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&r)return!0;for(const c of a.params)if(s[c]!==p.params[c])return!0;for(const c of a.dependencies)if(S.some(g=>g(new URL(c))))return!0;return!1}function pe(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}async function he({id:e,invalidating:n,url:r,params:a,route:s}){if((b==null?void 0:b.id)===e)return b.promise;const{errors:c,layouts:g,leaf:m}=s,v=[...g,m];c.forEach(E=>E==null?void 0:E().catch(()=>{})),v.forEach(E=>E==null?void 0:E[1]().catch(()=>{}));let y=null;const R=p.url?e!==p.url.pathname+p.url.search:!1,L=p.route?s.id!==p.route.id:!1;let O=!1;const _=v.map((E,I)=>{var G;const A=p.branch[I],j=!!(E!=null&&E[0])&&((A==null?void 0:A.loader)!==E[1]||Pe(O,L,R,(G=A.server)==null?void 0:G.uses,a));return j&&(O=!0),j});if(_.some(Boolean)){try{y=await He(r,_)}catch(E){return ie({status:E instanceof ee?E.status:500,error:await X(E,{url:r,params:a,route:{id:s.id}}),url:r,route:s})}if(y.type==="redirect")return y}const h=y==null?void 0:y.nodes;let U=!1;const x=v.map(async(E,I)=>{var ge;if(!E)return;const A=p.branch[I],j=h==null?void 0:h[I];if((!j||j.type==="skip")&&E[1]===(A==null?void 0:A.loader)&&!Pe(U,L,R,(ge=A.universal)==null?void 0:ge.uses,a))return A;if(U=!0,(j==null?void 0:j.type)==="error")throw j;return de({loader:E[1],url:r,params:a,route:s,parent:async()=>{var je;const $e={};for(let me=0;me<I;me+=1)Object.assign($e,(je=await x[me])==null?void 0:je.data);return $e},server_data_node:pe(j===void 0&&E[0]?{type:"skip"}:j??null,E[0]?A==null?void 0:A.server:void 0)})});for(const E of x)E.catch(()=>{});const D=[];for(let E=0;E<v.length;E+=1)if(v[E])try{D.push(await x[E])}catch(I){if(I instanceof Ve)return{type:"redirect",location:I.location};let A=500,j;if(h!=null&&h.includes(I))A=I.status??A,j=I.error;else if(I instanceof ee)A=I.status,j=I.body;else{if(await V.updated.check())return await B(r);j=await X(I,{params:a,url:r,route:{id:s.id}})}const G=await Ue(E,D,c);return G?await Y({url:r,params:a,branch:D.slice(0,G.idx).concat(G.node),status:A,error:j,route:s}):await Ne(r,{id:s.id},j,A)}else D.push(void 0);return await Y({url:r,params:a,branch:D,status:200,error:null,route:s,form:n?void 0:null})}async function Ue(e,n,r){for(;e--;)if(r[e]){let a=e;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await r[e](),loader:r[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:n,url:r,route:a}){const s={};let c=null;if(t.server_loads[0]===0)try{const y=await He(r,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;c=y.nodes[0]??null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||C)&&await B(r)}const m=await de({loader:i,url:r,params:s,route:a,parent:()=>Promise.resolve({}),server_data_node:pe(c)}),v={node:await d(),loader:d,universal:null,server:null,data:null};return await Y({url:r,params:s,branch:[m,v],status:e,error:n,route:null})}function W(e,n){if(_e(e,J))return;const r=se(e);for(const a of u){const s=a.exec(r);if(s)return{id:e.pathname+e.search,invalidating:n,route:a,params:Qe(s),url:e}}}function se(e){return Ze(e.pathname.slice(J.length)||"/")}function Te({url:e,type:n,intent:r,delta:a}){var m,v;let s=!1;const c={from:{params:p.params,route:{id:((m=p.route)==null?void 0:m.id)??null},url:p.url},to:{params:(r==null?void 0:r.params)??null,route:{id:((v=r==null?void 0:r.route)==null?void 0:v.id)??null},url:e},willUnload:!r,type:n};a!==void 0&&(c.delta=a);const g={...c,cancel:()=>{s=!0}};return P||w.before_navigate.forEach(y=>y(g)),s?null:c}async function ce({url:e,scroll:n,keepfocus:r,redirect_chain:a,details:s,type:c,delta:g,nav_token:m={},accepted:v,blocked:y}){var x,D,E;const R=W(e,!1),L=Te({url:e,type:c,delta:g,intent:R});if(!L){y();return}const O=$;v(),P=!0,T&&V.navigating.set(L),ne=m;let _=R&&await he(R);if(!_){if(_e(e,J))return await B(e);_=await Ne(e,{id:null},await X(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(R==null?void 0:R.url)||e,ne!==m)return!1;if(_.type==="redirect")if(a.length>10||a.includes(e.pathname))_=await ie({status:500,error:await X(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(_.location,e).href,{},[...a,e.pathname],m),!1;else((x=_.props.page)==null?void 0:x.status)>=400&&await V.updated.check()&&await B(e);if(S.length=0,H=!1,N=!0,ve(O),Re(O),(D=_.props.page)!=null&&D.url&&_.props.page.url.pathname!==e.pathname&&(e.pathname=(E=_.props.page)==null?void 0:E.url.pathname),s){const I=s.replaceState?0:1;if(s.state[q]=$+=I,history[s.replaceState?"replaceState":"pushState"](s.state,"",e),!s.replaceState){let A=$+1;for(;Z[A]||K[A];)delete Z[A],delete K[A],A+=1}}b=null,T?(p=_.state,_.props.page&&(_.props.page.url=e),F.$set(_.props)):Oe(_);const{activeElement:h}=document;if(await ye(),k){const I=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));n?scrollTo(n.x,n.y):I?I.scrollIntoView():scrollTo(0,0)}const U=document.activeElement!==h&&document.activeElement!==document.body;!r&&!U&&Ee(),k=!0,_.props.page&&(M=_.props.page),P=!1,c==="popstate"&&Ae($),w.after_navigate.forEach(I=>I(L)),V.navigating.set(null),N=!1}async function Ne(e,n,r,a){return e.origin===location.origin&&e.pathname===location.pathname&&!C?await ie({status:a,error:r,url:e,route:n}):await B(e)}function B(e){return location.href=e.href,new Promise(()=>{})}function Ye(){let e;f.addEventListener("mousemove",c=>{const g=c.target;clearTimeout(e),e=setTimeout(()=>{a(g,2)},20)});function n(c){a(c.composedPath()[0],1)}f.addEventListener("mousedown",n),f.addEventListener("touchstart",n,{passive:!0});const r=new IntersectionObserver(c=>{for(const g of c)g.isIntersecting&&(oe(se(new URL(g.target.href))),r.unobserve(g.target))},{threshold:0});function a(c,g){const m=qe(c,f);if(!m)return;const{url:v,external:y,download:R}=we(m,J);if(y||R)return;const L=le(m);if(!L.reload)if(g<=L.preload_data){const O=W(v,!1);O&&Ie(O)}else g<=L.preload_code&&oe(se(v))}function s(){r.disconnect();for(const c of f.querySelectorAll("a")){const{url:g,external:m,download:v}=we(c,J);if(m||v)continue;const y=le(c);y.reload||(y.preload_code===Fe.viewport&&r.observe(c),y.preload_code===Fe.eager&&oe(se(g)))}}w.after_navigate.push(s),s()}function X(e,n){return e instanceof ee?e.body:t.hooks.handleError({error:e,event:n})??{message:n.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{Ce(()=>(w.after_navigate.push(e),()=>{const n=w.after_navigate.indexOf(e);w.after_navigate.splice(n,1)}))},before_navigate:e=>{Ce(()=>(w.before_navigate.push(e),()=>{const n=w.before_navigate.indexOf(e);w.before_navigate.splice(n,1)}))},disable_scroll_handling:()=>{(N||!T)&&(k=!1)},goto:(e,n={})=>re(e,n,[]),invalidate:e=>{if(typeof e=="function")S.push(e);else{const{href:n}=new URL(e,location.href);S.push(r=>r.href===n)}return ke()},invalidate_all:()=>(H=!0,ke()),preload_data:async e=>{const n=new URL(e,De(document)),r=W(n,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${n}`);await Ie(r)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const n=new URL(location.href),{branch:r,route:a}=p;if(!a)return;const s=await Ue(p.branch.length,r,a.errors);if(s){const c=await Y({url:n,params:p.params,branch:r.slice(0,s.idx).concat(s.node),status:e.status??500,error:e.error,route:a});p=c.state,F.$set(c.props),ye().then(Ee)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},[]):(F.$set({form:null,page:{...M,form:e.data,status:e.status}}),await ye(),F.$set({form:e.data}),e.type==="success"&&Ee())},_start_router:()=>{var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{var a;let r=!1;if(Le(),!P){const s={from:{params:p.params,route:{id:((a=p.route)==null?void 0:a.id)??null},url:p.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};w.before_navigate.forEach(c=>c(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Le()}),(e=navigator.connection)!=null&&e.saveData||Ye(),f.addEventListener("click",n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=qe(n.composedPath()[0],f);if(!r)return;const{url:a,external:s,target:c,download:g}=we(r,J);if(!a)return;if(c==="_parent"||c==="_top"){if(window.parent!==window)return}else if(c&&c!=="_self")return;const m=le(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||g)return;if(s||m.reload){Te({url:a,type:"link"})?P=!0:n.preventDefault();return}const[y,R]=a.href.split("#");if(R!==void 0&&y===location.href.split("#")[0]){if(z=!0,ve($),p.url=a,V.page.set({...M,url:a}),V.page.notify(),!m.replace_state)return;z=!1,n.preventDefault()}ce({url:a,scroll:m.noscroll?Q():null,keepfocus:m.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:m.replace_state??a.href===location.href},accepted:()=>n.preventDefault(),blocked:()=>n.preventDefault(),type:"link"})}),f.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const c=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(_e(c,J))return;const g=n.target,{keep_focus:m,noscroll:v,reload:y,replace_state:R}=le(g);if(y)return;n.preventDefault(),n.stopPropagation();const L=new FormData(g),O=a==null?void 0:a.getAttribute("name");O&&L.append(O,(a==null?void 0:a.getAttribute("value"))??""),c.search=new URLSearchParams(L).toString(),ce({url:c,scroll:v?Q():null,keepfocus:m??!1,redirect_chain:[],details:{state:{},replaceState:R??c.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[q]){if(n.state[q]===$)return;const a=K[n.state[q]];if(p.url.href.split("#")[0]===location.href.split("#")[0]){K[$]=Q(),$=n.state[q],scrollTo(a.x,a.y);return}const s=n.state[q]-$;await ce({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{$=n.state[q]},blocked:()=>{history.go(-s)},type:"popstate",delta:s})}}),addEventListener("hashchange",()=>{z&&(z=!1,history.replaceState({...history.state,[q]:++$},"",location.href))});for(const n of document.querySelectorAll("link"))n.rel==="icon"&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&V.navigating.set(null)})},_hydrate:async({status:e=200,error:n,node_ids:r,params:a,route:s,data:c,form:g})=>{C=!0;const m=new URL(location.href);({params:a={},route:s={id:null}}=W(m,!1)||{});let v;try{const y=r.map(async(O,_)=>{const h=c[_];return h!=null&&h.uses&&(h.uses=Be(h.uses)),de({loader:t.nodes[O],url:m,params:a,route:s,parent:async()=>{const U={};for(let x=0;x<_;x+=1)Object.assign(U,(await y[x]).data);return U},server_data_node:pe(h)})}),R=await Promise.all(y),L=u.find(({id:O})=>O===s.id);if(L){const O=L.layouts;for(let _=0;_<O.length;_++)O[_]||R.splice(_,0,void 0)}v=await Y({url:m,params:a,branch:R,status:e,error:n,form:g,route:L??null})}catch(y){if(y instanceof Ve){await B(new URL(y.location,location.href));return}v=await ie({status:y instanceof ee?y.status:500,error:await X(y,{url:m,params:a,route:s}),url:m,route:s})}Oe(v)}}}async function He(t,o){const u=new URL(t);u.pathname=rt(t.pathname),u.searchParams.append(kt,o.map(d=>d?"1":"0").join(""));const i=await fe(u.href);if(!i.ok)throw new ee(i.status,await i.json());return new Promise(async d=>{var p;const f=new Map,S=i.body.getReader(),l=new TextDecoder;function b(C){return vt(C,{Promise:T=>new Promise((k,N)=>{f.set(T,{fulfil:k,reject:N})})})}let w="";for(;;){const{done:C,value:T}=await S.read();if(C&&!w)break;for(w+=!T&&w?`
`:l.decode(T);;){const k=w.indexOf(`
`);if(k===-1)break;const N=JSON.parse(w.slice(0,k));if(w=w.slice(k+1),N.type==="redirect")return d(N);if(N.type==="data")(p=N.nodes)==null||p.forEach(P=>{(P==null?void 0:P.type)==="data"&&(P.uses=Be(P.uses),P.data=b(P.data))}),d(N);else if(N.type==="chunk"){const{id:P,data:z,error:H}=N,F=f.get(P);f.delete(P),H?F.reject(b(H)):F.fulfil(b(z))}}}})}function Be(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url)}}function Ee(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const o=document.body,u=o.getAttribute("tabindex");o.tabIndex=-1,o.focus({preventScroll:!0,focusVisible:!1}),u!==null?o.setAttribute("tabindex",u):o.removeAttribute("tabindex");const i=getSelection();if(i&&i.type!=="None"){const d=[];for(let f=0;f<i.rangeCount;f+=1)d.push(i.getRangeAt(f));setTimeout(()=>{if(i.rangeCount===d.length){for(let f=0;f<i.rangeCount;f+=1){const S=d[f],l=i.getRangeAt(f);if(S.commonAncestorContainer!==l.commonAncestorContainer||S.startContainer!==l.startContainer||S.endContainer!==l.endContainer||S.startOffset!==l.startOffset||S.endOffset!==l.endOffset)return}i.removeAllRanges()}})}}}async function Pt(t,o,u){const i=Rt(t,o);We({client:i}),u?await i._hydrate(u):i.goto(location.href,{replaceState:!0}),i._start_router()}export{Pt as start};
