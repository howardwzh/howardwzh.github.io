/* empty css              */import{j as p,o as n,u as v,T as b,b as f,d as o,t as d,v as y,g as M,p as x}from"./vue.esm-bundler-SquHxTEj.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";const u={name:"ModalDialog",props:{title:{type:String,default:"Modal Title"},message:{type:String,default:"This is a modal message."},visible:{type:Boolean,default:!1}},emits:["update:visible"],setup(l,{emit:e}){return{close:()=>{e("update:visible",!1)}}}},h={class:"text-xl font-semibold mb-4"},D={class:"text-gray-700 mb-4"};function T(l,e,t,a,w,C){return n(),p(b,{name:"modal-fade"},{default:v(()=>[t.visible?(n(),f("div",{key:0,class:"fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75",onClick:e[2]||(e[2]=(...i)=>a.close&&a.close(...i))},[o("div",{class:"bg-white rounded-lg shadow-lg p-6 max-w-lg w-full",onClick:e[1]||(e[1]=y(()=>{},["stop"]))},[o("h2",h,d(t.title),1),o("p",D,d(t.message),1),o("button",{onClick:e[0]||(e[0]=(...i)=>a.close&&a.close(...i)),class:"bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"},"Close")])])):M("",!0)]),_:1})}const m=_(u,[["render",T],["__scopeId","data-v-8f7ee922"]]);u.__docgenInfo={displayName:"ModalDialog",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"'Modal Title'"}},{name:"message",type:{name:"string"},defaultValue:{func:!1,value:"'This is a modal message.'"}},{name:"visible",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:visible"}],sourceFiles:["/Users/future/Desktop/projects/storybook-vue3/src/components/ModalDialog.vue"]};const N={title:"Advanced/ModalDialog",component:m,argTypes:{title:{control:"text"},message:{control:"text"},visible:{control:"boolean"}}},k=l=>({components:{ModalDialog:m},setup(){const e=x(l.visible);return{args:l,visible:e,toggleModal:()=>{e.value=!e.value}}},template:`
    <div style="height: 100vh; display: flex; justify-content: center; align-items: center;">
      <button @click="toggleModal">Toggle Modal</button>
      <ModalDialog v-bind="args" :visible="visible" @update:visible="visible = $event" />
    </div>
  `}),s=k.bind({});s.args={title:"Default Modal Title",message:"This is the default modal message.",visible:!1};var r,c,g;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    ModalDialog
  },
  setup() {
    const visible = ref(args.visible);
    const toggleModal = () => {
      visible.value = !visible.value;
    };
    return {
      args,
      visible,
      toggleModal
    };
  },
  template: \`
    <div style="height: 100vh; display: flex; justify-content: center; align-items: center;">
      <button @click="toggleModal">Toggle Modal</button>
      <ModalDialog v-bind="args" :visible="visible" @update:visible="visible = $event" />
    </div>
  \`
})`,...(g=(c=s.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const S=["Default"];export{s as Default,S as __namedExportsOrder,N as default};
