/* empty css              */import{p as f,b as i,d as r,v,z as y,g as _,A as b,o as c}from"./vue.esm-bundler-SquHxTEj.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";const M={beforeMount(e,t){e.clickOutsideEvent=n=>{e===n.target||e.contains(n.target)||t.value(n)},document.body.addEventListener("click",e.clickOutsideEvent)},unmounted(e){document.body.removeEventListener("click",e.clickOutsideEvent)}},l={name:"DropdownMenu",directives:{clickOutside:M},setup(){const e=f(!1),t=()=>{e.value=!e.value},n=()=>{e.value=!1};return console.log("isOpen",e.value),{isOpen:e,toggleMenu:t,closeMenu:n}}},k={class:"relative inline-block text-left"},x={key:0,class:"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"};function D(e,t,n,s,O,E){const g=b("click-outside");return c(),i("div",k,[r("button",{onClick:t[0]||(t[0]=v((...m)=>s.toggleMenu&&s.toggleMenu(...m),["stop"])),class:"inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}," Toggle Menu "),s.isOpen?y((c(),i("div",x,t[1]||(t[1]=[r("div",{class:"py-1"},[r("p",{class:"block px-4 py-2 text-sm text-gray-700"},"Dropdown Menu Content")],-1)]))),[[g,s.closeMenu]]):_("",!0)])}const p=w(l,[["render",D],["__scopeId","data-v-91d2683d"]]);l.__docgenInfo={displayName:"DropdownMenu",exportName:"default",description:"",tags:{},sourceFiles:["/Users/future/Desktop/projects/storybook-vue3/src/components/DropdownMenu.vue"]};const C={title:"Advanced/DropdownMenu",component:p},h=e=>({components:{DropdownMenu:p},setup(){return{args:e}},template:`
    <div style="height: 100vh; display: flex; justify-content: center; align-items: center;">
      <DropdownMenu v-bind="args" />
    </div>
  `}),o=h.bind({});o.args={};var a,d,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    DropdownMenu
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="height: 100vh; display: flex; justify-content: center; align-items: center;">
      <DropdownMenu v-bind="args" />
    </div>
  \`
})`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const A=["Default"];export{o as Default,A as __namedExportsOrder,C as default};
