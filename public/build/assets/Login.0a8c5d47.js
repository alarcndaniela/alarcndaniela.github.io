import{u as b,o as n,e as d,b as s,h as t,w as m,F as w,H as g,t as h,f as c,a,c as k,g as u,L as x,n as y,m as V}from"./app.9da37cb0.js";import{J as v}from"./AuthenticationCard.192eea77.js";import{_ as $}from"./AuthenticationCardLogo.928d1953.js";import{_ as B}from"./Button.5a3125b1.js";import{_ as f}from"./Input.9d0dc713.js";import{_ as F}from"./Checkbox.40f59647.js";import{_ as p}from"./Label.ff87cd6d.js";import{_ as L}from"./ValidationErrors.9a79186b.js";import"./plugin-vue_export-helper.f63bf49c.js";const C={key:0,class:"mb-4 font-medium text-sm text-green-600"},N=["onSubmit"],S={class:"mt-4"},q={class:"block mt-4"},P={class:"flex items-center"},R=a("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),U={class:"flex items-center justify-end mt-4"},G={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=b({email:"",password:"",remember:!1}),_=()=>{e.transform(i=>({...i,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(i,o)=>(n(),d(w,null,[s(t(g),{title:"Log in"}),s(v,null,{logo:m(()=>[s($)]),default:m(()=>[s(L,{class:"mb-4"}),l.status?(n(),d("div",C,h(l.status),1)):c("",!0),a("form",{onSubmit:V(_,["prevent"])},[a("div",null,[s(p,{for:"email",value:"Email"}),s(f,{id:"email",modelValue:t(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>t(e).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"])]),a("div",S,[s(p,{for:"password",value:"Password"}),s(f,{id:"password",modelValue:t(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>t(e).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"])]),a("div",q,[a("label",P,[s(F,{checked:t(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>t(e).remember=r),name:"remember"},null,8,["checked"]),R])]),a("div",U,[l.canResetPassword?(n(),k(t(x),{key:0,href:i.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:m(()=>[u(" Forgot your password? ")]),_:1},8,["href"])):c("",!0),s(B,{class:y(["ml-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:m(()=>[u(" Log in ")]),_:1},8,["class","disabled"])])],40,N)]),_:1})],64))}};export{G as default};
