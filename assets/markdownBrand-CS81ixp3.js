const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/error-DeRkl5Z2.js","assets/index-D4PUjdd4.js","assets/index-TCIaF8cn.css","assets/RenderTopNavBar-CJuzk9-4.js","assets/index-BGFQHV-c.js"])))=>i.map(i=>d[i]);
import{g as C,r as g,j as m,u as F,a as H,b as q,_ as K,V as D}from"./index-D4PUjdd4.js";import{g as N,c as v,a as J,R as Q,b as X}from"./RenderTopNavBar-CJuzk9-4.js";import{r as I,a as O,b as U,M as G,c as M,d as V}from"./Mdtoui-Bwh6I7pz.js";import"./index-DrEKPqe2.js";const W={fetch_fail:{EN:"Didn't fetch text correctly.",ES_LA:"No se obtuvo el texto correctamente.",PT_BR:"Não buscou o texto corretamente.",DE:"Text nicht korrekt abgerufen."},download:{EN:"Download",ES_LA:"Descargar",PT_BR:"Baixar",DE:"Herunterladen"},explore:{EN:"Explore",ES_LA:"Explorar",PT_BR:"Explorar",DE:"Erkunden"},error:{EN:"An error occurred fetching package contents.",ES_LA:"Ocurrió un error al obtener el contenido del paquete.",PT_BR:"Ocorreu um erro ao buscar o conteúdo do pacote.",DE:"Beim Abrufen des Paketinhalts ist ein Fehler aufgetreten."}};var T={VITE_APP_VERSION:"4.4.1+1720644913",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};async function Y(e,t,r){const c=`${C.api}/repos/${e}/${t}/git/trees/${r}?recursive=1`;try{const s=await(await fetch(c,{method:"GET",headers:{Accept:"application/vnd.github.v3+json",Authorization:T!=null&&T.GITHUB_TOKEN?`token ${T.GITHUB_TOKEN}`:""}})).json();return{...s,tree:s.tree.sort(Z)}}catch(n){n instanceof Error?console.error(`Error: ${n.message}`):console.error(`An unexpected error occurred: ${n}`)}}function Z(e,t){const r=o=>{const l=o.toLocaleUpperCase(),u=c.findIndex(a=>l.startsWith(a.toLocaleUpperCase()));return u!==-1?u:c.length},c=["Amazon Web Services","Instructure"],n=r(e.path),s=r(t.path);return n!==s?s-n:e.path.localeCompare(t.path)}function ee(e,t,r,c,n){var p;const o=N(W,n),l=e.tree.filter(i=>i.type==="tree"),u=e.tree.filter(i=>i.type==="blob").filter(i=>i.path!==".gitignore");let a=`<details>
    <summary>🕵️ ${o.explore}</summary>\r
\r
`;for(const[i,d]of l.entries()){a+=`| ${d.path} |\r
| ---------------- |`;for(const f of u)d!=null&&d.path&&((p=f==null?void 0:f.path)!=null&&p.startsWith(d.path))&&(a+=`\r
| [${f.path.replace(`${d.path}/`,"")}](${encodeURI(`${C.raw}/${t}/${r}/${c}/${f.path}`)}) |`);i<l.length-1&&(a+=`\r
\r
`)}return a+="</details>",a}async function te(e,t,r){const c=r,n=C.owner,s=C.repo,o=[...t.classList].filter(l=>~l.indexOf(e)).toString();if(o){const l=await Y(n,s,o);if(l)return ee(l,n,s,o,c)}return null}const re=e=>{const t=v.c(9),{brand:r,branch:c,l:n}=e,[s,o]=g.useState(null);let l,u;t[0]!==r||t[1]!==c||t[2]!==n?(l=()=>{te(r.toLowerCase().replace(" ","-"),c,n).then(d=>o(d)).catch(d=>console.error(d))},u=[r,c,n],t[0]=r,t[1]=c,t[2]=n,t[3]=l,t[4]=u):(l=t[3],u=t[4]),g.useEffect(l,u);let a;t[5]===Symbol.for("react.memo_cache_sentinel")?(a=[I,O],t[5]=a):a=t[5];let p;t[6]===Symbol.for("react.memo_cache_sentinel")?(p=[U],t[6]=p):p=t[6];let i;return t[7]!==s?(i=m.jsx(G,{remarkPlugins:a,rehypePlugins:p,allowedElements:M,components:V,children:s}),t[7]=s,t[8]=i):i=t[8],i};function oe(){const e=v.c(39),{readme:t,brand:r}=F(),c=H().language;let n,s,o;e[0]!==c?(o=J(c),s=N(W,o),n=o.toUpperCase(),e[0]=c,e[1]=n,e[2]=s,e[3]=o):(n=e[1],s=e[2],o=e[3]);const l=`.markdown .lang { display: none; } .markdown .lang.${n} { display: inherit; }`,u=t,[a,p]=g.useState("Loading..."),[i,d]=g.useState(!1);let f;e[4]===Symbol.for("react.memo_cache_sentinel")?(f=[],e[4]=f):f=e[4];const[$,z]=g.useState(f);let R;e[5]!==r||e[6]!==u||e[7]!==s.fetch_fail?(R=()=>{document.title=`${r} Compliance Packages`,fetch(u).then(h=>h.ok?h.text():Promise.reject(s.fetch_fail)).then(h=>{p(h)}).catch(h=>console.error(h))},e[5]=r,e[6]=u,e[7]=s.fetch_fail,e[8]=R):R=e[8],g.useEffect(R);let k,w;e[9]!==a?(k=()=>{a&&(z(Array.from(document.querySelectorAll(".contents"))),d(!0))},w=[a],e[9]=a,e[10]=k,e[11]=w):(k=e[10],w=e[11]),g.useEffect(k,w);let E;e[12]!==i||e[13]!==$||e[14]!==r||e[15]!==o?(E=i&&($==null?void 0:$.map(h=>q.createPortal(m.jsx(re,{brand:r,branch:h,l:o}),h))),e[12]=i,e[13]=$,e[14]=r,e[15]=o,e[16]=E):E=e[16];let x;e[17]!==r||e[18]!==o?(x=m.jsx(Q,{brand:r,language:o}),e[17]=r,e[18]=o,e[19]=x):x=e[19];let _;e[20]!==l?(_=m.jsx("style",{children:l}),e[20]=l,e[21]=_):_=e[21];const L=`${r.toLowerCase().replace(" ","-")} markdown`;let j;e[22]===Symbol.for("react.memo_cache_sentinel")?(j=[I,O],e[22]=j):j=e[22];let A;e[23]===Symbol.for("react.memo_cache_sentinel")?(A=[U],e[23]=A):A=e[23];let y;e[24]!==a?(y=m.jsx(G,{remarkPlugins:j,rehypePlugins:A,allowedElements:M,components:V,children:a}),e[24]=a,e[25]=y):y=e[25];let b;e[26]!==L||e[27]!==y?(b=m.jsx(D,{as:"div",className:L,children:y}),e[26]=L,e[27]=y,e[28]=b):b=e[28];let S;e[29]!==_||e[30]!==b?(S=m.jsxs(D,{id:"main",as:"div",padding:"medium medium xx-large",minWidth:"20rem",maxWidth:"59.25rem",margin:"0 auto",children:[_,b]}),e[29]=_,e[30]=b,e[31]=S):S=e[31];let P;e[32]!==o?(P=m.jsx(X,{language:o}),e[32]=o,e[33]=P):P=e[33];let B;return e[34]!==E||e[35]!==x||e[36]!==S||e[37]!==P?(B=m.jsxs(m.Fragment,{children:[E,x,S,P]}),e[34]=E,e[35]=x,e[36]=S,e[37]=P,e[38]=B):B=e[38],B}oe.displayName="Route.MarkdownBrand";function ne(){const e=g.lazy(()=>K(()=>import("./error-DeRkl5Z2.js"),__vite__mapDeps([0,1,2,3,4])).then(t=>({default:t.Component})));return m.jsx(g.Suspense,{fallback:m.jsx("h1",{children:"Error."}),children:m.jsx(e,{})})}ne.displayName="Error.MarkdownBrand";export{oe as Component,ne as ErrorBoundary};
