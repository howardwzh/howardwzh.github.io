/* empty css              */import{p as k,w as L,l as U,o as r,j as P,u as Y,T as J,b as c,d as s,v as G,F as x,y as D,t as h,z as H,B as Q,g as V,q as X,x as Z,k as ee,f as O,C as te,D as ne,n as I,h as ae}from"./vue.esm-bundler-SquHxTEj.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{v as oe}from"./v4-CQkTLCs1.js";const q={name:"EditModal",props:{modelValue:{type:Object,default:null},columns:{type:Array,required:!0}},emits:["update:modelValue","save"],setup(n,{emit:e}){const a=k({});L(()=>n.modelValue,o=>{o&&(a.value={...o})},{deep:!0});const t=U(()=>n.columns.filter(o=>!o.component));return{editingItemCopy:a,editableColumns:t,saveEdit:()=>{e("save",a.value),e("update:modelValue",null)},cancel:()=>{e("update:modelValue",null)}}}},se={key:0,class:"fixed inset-0 z-50 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},ie={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},de={class:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"},re={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},le={class:"sm:flex sm:items-start"},ce={class:"mt-3 text-center sm:mt-0 sm:text-left w-full"},ue={class:"mt-2"},me=["for"],pe={key:0,class:"mt-1 block w-full text-gray-500"},ge=["id","onUpdate:modelValue","type"],fe={class:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"};function ye(n,e,a,t,i,l){return r(),P(J,{name:"modal"},{default:Y(()=>[a.modelValue?(r(),c("div",se,[s("div",ie,[s("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true",onClick:e[0]||(e[0]=(...o)=>t.cancel&&t.cancel(...o))}),e[5]||(e[5]=s("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1)),s("div",de,[s("div",re,[s("div",le,[s("div",ce,[e[4]||(e[4]=s("h3",{class:"text-lg leading-6 font-medium text-gray-900",id:"modal-title"}," Edit Item ",-1)),s("div",ue,[s("form",{onSubmit:e[1]||(e[1]=G((...o)=>t.saveEdit&&t.saveEdit(...o),["prevent"]))},[(r(!0),c(x,null,D(a.columns,o=>(r(),c("div",{key:o.key,class:"mb-4"},[s("label",{for:o.key,class:"block text-sm font-medium text-gray-700"},h(o.label),9,me),o.key==="id"?(r(),c("span",pe,h(t.editingItemCopy[o.key]),1)):o.component?V("",!0):H((r(),c("input",{key:1,id:o.key,"onUpdate:modelValue":d=>t.editingItemCopy[o.key]=d,type:o.type||"text",class:"border mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"},null,8,ge)),[[Q,t.editingItemCopy[o.key]]])]))),128))],32)])])])]),s("div",fe,[s("button",{onClick:e[2]||(e[2]=(...o)=>t.saveEdit&&t.saveEdit(...o)),type:"button",class:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"}," Save "),s("button",{onClick:e[3]||(e[3]=(...o)=>t.cancel&&t.cancel(...o)),type:"button",class:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"}," Cancel ")])])])])):V("",!0)]),_:1})}const be=w(q,[["render",ye],["__scopeId","data-v-f3ff37dd"]]);q.__docgenInfo={displayName:"EditModal",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"columns",type:{name:"array"},required:!0}],events:[{name:"update:modelValue"},{name:"save"}],sourceFiles:["/Users/future/Desktop/projects/storybook-vue3/src/components/EditModal.vue"]};const F={name:"AdvancedDataTable",components:{EditModal:be},props:{data:{type:Array,required:!0},columns:{type:Array,required:!0}},emits:["edit","delete","status-change"],setup(n,{emit:e}){const a=k(""),t=k("asc"),i=k(null),l=u=>{a.value===u?t.value=t.value==="asc"?"desc":"asc":(a.value=u,t.value="asc")},o=U(()=>a.value?[...n.data].sort((p,g)=>{const v=p[a.value],f=g[a.value];return v<f?t.value==="asc"?-1:1:v>f?t.value==="asc"?1:-1:0}):n.data),d=u=>{i.value={...u}},y=u=>{const p=n.data.findIndex(g=>g.id===u.id);p!==-1&&e("edit",{index:p,item:u})},m=(u,p,g)=>{p==="status"&&e("status-change",{...u,[p]:g})};return X(()=>{console.log("AdvancedDataTable mounted")}),{sortKey:a,sortOrder:t,sortBy:l,sortedData:o,editingItem:i,editItem:d,saveEdit:y,updateItemValue:m}}},ve={class:"overflow-x-auto shadow-md sm:rounded-lg"},xe={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},_e={class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},he={class:"flex items-center"},ke=["onClick"],De={key:0,class:"text-blue-500"},Ee={key:1,class:"text-gray-400"},we={class:"px-6 py-4 text-right"},Ce=["onClick"],Ve=["onClick"];function Oe(n,e,a,t,i,l){const o=ee("EditModal");return r(),c("div",ve,[s("table",xe,[s("thead",_e,[s("tr",null,[(r(!0),c(x,null,D(a.columns,d=>(r(),c("th",{key:d.key,scope:"col",class:"px-6 py-3"},[s("div",he,[O(h(d.label)+" ",1),s("button",{onClick:y=>t.sortBy(d.key),class:"ml-2 focus:outline-none"},[t.sortKey===d.key?(r(),c("span",De,h(t.sortOrder==="asc"?"▲":"▼"),1)):(r(),c("span",Ee,"⇅"))],8,ke)])]))),128)),e[1]||(e[1]=s("th",{scope:"col",class:"px-6 py-3"},[s("span",{class:"sr-only"},"Actions")],-1))])]),s("tbody",null,[(r(!0),c(x,null,D(t.sortedData,(d,y)=>(r(),c("tr",{key:y,class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"},[(r(!0),c(x,null,D(a.columns,m=>(r(),c("td",{key:m.key,class:"px-6 py-4"},[m.component?(r(),P(te(m.component),{key:0,value:d[m.key],"onUpdate:value":u=>t.updateItemValue(d,m.key,u)},null,40,["value","onUpdate:value"])):(r(),c(x,{key:1},[O(h(d[m.key]),1)],64))]))),128)),s("td",we,[s("button",{onClick:m=>t.editItem(d),class:"font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"},"Edit",8,Ce),s("button",{onClick:m=>n.$emit("delete",d),class:"font-medium text-red-600 dark:text-red-500 hover:underline"},"Delete",8,Ve)])]))),128))])]),Z(o,{modelValue:t.editingItem,"onUpdate:modelValue":e[0]||(e[0]=d=>t.editingItem=d),columns:a.columns,onSave:t.saveEdit},null,8,["modelValue","columns","onSave"])])}const K=w(F,[["render",Oe]]);F.__docgenInfo={displayName:"AdvancedDataTable",exportName:"default",description:"",tags:{},props:[{name:"data",type:{name:"array"},required:!0},{name:"columns",type:{name:"array"},required:!0}],events:[{name:"delete"},{name:"edit"},{name:"status-change"}],sourceFiles:["/Users/future/Desktop/projects/storybook-vue3/src/components/AdvancedDataTable.vue"]};const W=ne({name:"Switch",props:{modelValue:{type:Boolean,required:!0}},emits:["update:modelValue"],setup(n,{emit:e}){return{toggle:()=>{e("update:modelValue",!n.modelValue)}}}});function Ie(n,e,a,t,i,l){return r(),c("div",{onClick:e[0]||(e[0]=(...o)=>n.toggle&&n.toggle(...o)),class:I(["relative w-12 h-7 rounded-full cursor-pointer transition-colors duration-200 ease-in-out",n.modelValue?"bg-green-500":"bg-gray-200"])},[e[1]||(e[1]=s("span",{class:"sr-only"},"Toggle switch",-1)),s("div",{class:I(["absolute left-0.5 top-0.5 w-6 h-6 rounded-full bg-white transition-transform duration-200 ease-in-out transform",n.modelValue?"translate-x-5":"translate-x-0"])},null,2)],2)}const S=w(W,[["render",Ie],["__scopeId","data-v-b2bd25cc"]]);W.__docgenInfo={displayName:"Switch",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!0}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/future/Desktop/projects/storybook-vue3/src/components/Switch.vue"]};const{addons:Se}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:Ae}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:A}=__STORYBOOK_MODULE_GLOBAL__;var Te="storybook/actions",je=`${Te}/action-event`,Re={depth:10,clearOnStoryChange:!0,limit:50},$=(n,e)=>{let a=Object.getPrototypeOf(n);return!a||e(a)?a:$(a,e)},Be=n=>!!(typeof n=="object"&&n&&$(n,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof n.persist=="function"),Ne=n=>{if(Be(n)){let e=Object.create(n.constructor.prototype,Object.getOwnPropertyDescriptors(n));e.persist();let a=Object.getOwnPropertyDescriptor(e,"view"),t=a==null?void 0:a.value;return typeof t=="object"&&(t==null?void 0:t.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...a,value:Object.create(t.constructor.prototype)}),e}return n},Me=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?oe():Date.now().toString(36)+Math.random().toString(36).substring(2);function E(n,e={}){let a={...Re,...e},t=function(...i){var p,g;if(e.implicit){let v=(p="__STORYBOOK_PREVIEW__"in A?A.__STORYBOOK_PREVIEW__:void 0)==null?void 0:p.storyRenders.find(f=>f.phase==="playing"||f.phase==="rendering");if(v){let f=!((g=window==null?void 0:window.FEATURES)!=null&&g.disallowImplicitActionsInRenderV8),C=new Ae({phase:v.phase,name:n,deprecated:f});if(f)console.warn(C);else throw C}}let l=Se.getChannel(),o=Me(),d=5,y=i.map(Ne),m=i.length>1?y:y[0],u={id:o,count:0,data:{name:n,args:m},options:{...a,maxDepth:d+(a.depth||3),allowFunction:a.allowFunction||!1}};l.emit(je,u)};return t.isAction=!0,t.implicit=e.implicit,t}const Ke={title:"Advanced/AdvancedDataTable",component:K,argTypes:{data:{control:"object"},columns:{control:"object"}}},z=n=>({components:{AdvancedDataTable:K},setup(){return{args:n,onEdit:({index:i,item:l})=>{E("edit")(i,l),n.data[i]={...l}},onDelete:i=>{E("delete")(i);const l=n.data.findIndex(o=>o.id===i.id);l!==-1&&n.data.splice(l,1)},onStatusChange:i=>{E("statusChange")(i);const l=n.data.findIndex(o=>o.id===i.id);l!==-1&&(n.data[l]={...i})}}},template:'<AdvancedDataTable v-bind="args" @edit="onEdit" @delete="onDelete" @status-change="onStatusChange" />'}),b=z.bind({});b.args={data:[{id:1,name:"John Doe",email:"john@example.com",age:30,status:!0},{id:2,name:"Jane Smith",email:"jane@example.com",age:25,status:!1},{id:3,name:"Bob Johnson",email:"bob@example.com",age:35,status:!0}],columns:[{key:"id",label:"ID"},{key:"name",label:"Name"},{key:"email",label:"Email"},{key:"age",label:"Age",type:"number"},{key:"status",label:"Status",component:{components:{Switch:S},props:["value"],emits:["update:value"],setup(n,{emit:e}){return()=>ae(S,{modelValue:n.value,"onUpdate:modelValue":a=>e("update:value",a)})}}}]};const _=z.bind({});_.args={...b.args,data:[...b.args.data,{id:4,name:"Alice Brown",email:"alice@example.com",age:28,status:!0},{id:5,name:"Charlie Davis",email:"charlie@example.com",age:32,status:!1}]};var T,j,R;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    AdvancedDataTable
  },
  setup() {
    const onEdit = ({
      index,
      item
    }) => {
      action('edit')(index, item);
      args.data[index] = {
        ...item
      };
    };
    const onDelete = item => {
      action('delete')(item);
      const index = args.data.findIndex(i => i.id === item.id);
      if (index !== -1) {
        args.data.splice(index, 1);
      }
    };
    const onStatusChange = item => {
      action('statusChange')(item);
      const index = args.data.findIndex(i => i.id === item.id);
      if (index !== -1) {
        args.data[index] = {
          ...item
        };
      }
    };
    return {
      args,
      onEdit,
      onDelete,
      onStatusChange
    };
  },
  template: '<AdvancedDataTable v-bind="args" @edit="onEdit" @delete="onDelete" @status-change="onStatusChange" />'
})`,...(R=(j=b.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var B,N,M;_.parameters={..._.parameters,docs:{...(B=_.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    AdvancedDataTable
  },
  setup() {
    const onEdit = ({
      index,
      item
    }) => {
      action('edit')(index, item);
      args.data[index] = {
        ...item
      };
    };
    const onDelete = item => {
      action('delete')(item);
      const index = args.data.findIndex(i => i.id === item.id);
      if (index !== -1) {
        args.data.splice(index, 1);
      }
    };
    const onStatusChange = item => {
      action('statusChange')(item);
      const index = args.data.findIndex(i => i.id === item.id);
      if (index !== -1) {
        args.data[index] = {
          ...item
        };
      }
    };
    return {
      args,
      onEdit,
      onDelete,
      onStatusChange
    };
  },
  template: '<AdvancedDataTable v-bind="args" @edit="onEdit" @delete="onDelete" @status-change="onStatusChange" />'
})`,...(M=(N=_.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};const We=["Default","WithCustomComponent"];export{b as Default,_ as WithCustomComponent,We as __namedExportsOrder,Ke as default};
