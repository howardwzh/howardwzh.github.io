import{j as e}from"./jsx-runtime-CxMZg_bN.js";import{r as o}from"./index-pcvojpNF.js";const k=({text:r,highlight:a})=>{if(!a.trim())return e.jsx("span",{children:r});const s=new RegExp(`(${a})`,"gi"),m=r.split(s);return e.jsx("span",{children:m.map((t,c)=>s.test(t)?e.jsx("mark",{children:t},c):e.jsx("span",{children:t},c))})},j=()=>{const[r,a]=o.useState([]),[s,m]=o.useState(""),t=o.useRef(null);o.useEffect(()=>{(async()=>{const g=await(await fetch("https://jsonplaceholder.typicode.com/users")).json();a(g)})()},[]);const c=o.useCallback(n=>{m(n.target.value)},[]),D=o.useMemo(()=>r.filter(n=>n.name.toLowerCase().includes(s.toLowerCase())),[r,s]);return o.useEffect(()=>{t.current&&t.current.focus()},[]),e.jsxs("div",{children:[e.jsx("h2",{children:"Advanced Hooks Demo"}),e.jsx("input",{ref:t,type:"text",value:s,onChange:c,placeholder:"Filter users..."}),e.jsx("ul",{children:D.map(n=>e.jsx("li",{children:e.jsx(k,{text:n.name,highlight:s})},n.id))})]})};j.__docgenInfo={description:"",methods:[],displayName:"AdvancedHooksDemo"};const C={title:"Components/AdvancedHooksDemo",component:j,parameters:{layout:"centered"}},d={},i={parameters:{mockData:[{url:"https://jsonplaceholder.typicode.com/users",method:"GET",status:200,response:[{id:1,name:"John Doe"},{id:2,name:"Jane Smith"},{id:3,name:"Bob Johnson"}]}]}};var l,p,u;d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(u=(p=d.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,f,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    mockData: [{
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'GET',
      status: 200,
      response: [{
        id: 1,
        name: 'John Doe'
      }, {
        id: 2,
        name: 'Jane Smith'
      }, {
        id: 3,
        name: 'Bob Johnson'
      }]
    }]
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const J=["Default","WithMockedData"];export{d as Default,i as WithMockedData,J as __namedExportsOrder,C as default};
