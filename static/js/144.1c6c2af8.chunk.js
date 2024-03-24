"use strict";(self.webpackChunkwander_wheels=self.webpackChunkwander_wheels||[]).push([[144],{727:function(n,e,l){l.r(e),l.d(e,{default:function(){return A}});var r,a,o,t,i=l(2791),u=l(9434),c=l(8067),s=l(9439),d=l(1413),b=l(168),f=l(4894),h=f.ZP.div(r||(r=(0,b.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n  width: 100%;\n  margin: 0 auto 50px;\n"]))),p=f.ZP.div(a||(a=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 224px;\n"]))),v=f.ZP.label(o||(o=(0,b.Z)(["\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.28571;\n  margin-bottom: 8px;\n  color: ",";\n"])),(function(n){return n.theme.colors.filterLabelColor})),x=f.ZP.button(t||(t=(0,b.Z)(["\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.43;\n  border-radius: 12px;\n  padding: 14px 44px;\n  width: 136px;\n  margin: 0 0 0 18px;\n  height: 48px;\n  color: ",";\n  background-color: ",";\n  transition: background-color 300ms linear;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.buttonTextColor}),(function(n){return n.theme.colors.secondAccentColor}),(function(n){return n.theme.colors.accentColor})),g=l(7246),m=l(7519),k=l(2845),C=l(1087),Z=l(184),M=[{value:"",label:"All brands"},{value:"Buick",label:"Buick"},{value:"Volvo",label:"Volvo"},{value:"HUMMER",label:"HUMMER"},{value:"Subaru",label:"Subaru"},{value:"Mitsubishi",label:"Mitsubishi"},{value:"Nissan",label:"Nissan"},{value:"Lincoln",label:"Lincoln"},{value:"GMC",label:"GMC"},{value:"Hyundai",label:"Hyundai"},{value:"MINI",label:"MINI"},{value:"Bentley",label:"Bentley"},{value:"Mercedes",label:"Mercedes"},{value:"Aston Martin",label:"Aston Martin"},{value:"Pontiac",label:"Pontiac"},{value:"Lamborghini",label:"Lamborghini"},{value:"Audi",label:"Audi"},{value:"BMW",label:"BMW"},{value:"Chevrolet",label:"Chevrolet"},{value:"Chrysler",label:"Chrysler"},{value:"Kia",label:"Kia"},{value:"Land",label:"Land"}],w={control:function(n){return(0,d.Z)((0,d.Z)({},n),{},{backgroundColor:"#f7f7fb",borderRadius:"14px",padding:"6px"})},menu:function(n){return(0,d.Z)((0,d.Z)({},n),{},{backgroundColor:"#fff",borderRadius:"14px",paddingRight:"10px"})},menuList:function(n){return(0,d.Z)((0,d.Z)({},n),{},{"&::-webkit-scrollbar":{width:"8px",paddingRight:"8px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"#f3f3f3",borderRadius:"10px",margin:"14px 8px"},"&::-webkit-scrollbar-track":{backgroundColor:"transparent",borderRadius:"10px",margin:"14px 8px"}})},option:function(n,e){return(0,d.Z)((0,d.Z)({},n),{},{color:e.isFocused?"#121417":"rgba(18, 20, 23, 0.2)",backgroundColor:"transparent",fontWeight:500,fontSize:"16px",lineHeight:1.25})},indicatorSeparator:function(){return{display:"none"}},dropdownIndicator:function(n,e){return(0,d.Z)((0,d.Z)({},n),{},{transform:e.selectProps.menuIsOpen?"rotate(180deg)":null})},indicatorsContainer:function(n){return(0,d.Z)((0,d.Z)({},n),{},{cursor:"pointer"})}},j=function(){var n=(0,u.v9)(m.sr),e=(0,i.useState)(n),l=(0,s.Z)(e,2),r=l[0],a=l[1],o=(0,u.I0)(),t=(0,C.lr)(),c=(0,s.Z)(t,2),d=c[0],b=c[1];(0,i.useEffect)((function(){var n=d.get("make");n&&(a(M.find((function(e){return e.value===n}))),o((0,g.Wp)(n)))}),[d,o]);return(0,Z.jsxs)(h,{children:[(0,Z.jsxs)(p,{children:[(0,Z.jsx)(v,{children:"Car brand"}),(0,Z.jsx)(k.ZP,{placeholder:"Choose a brand",name:"carMakeFilter",id:"make_filter",styles:w,options:M,value:r,onChange:function(n){a(n)}})]}),(0,Z.jsx)(x,{onClick:function(){r?(b({make:r.value}),o((0,g.Wp)(r.value))):(b({make:""}),o((0,g.Wp)("")))},children:"Search"})]})},y=l(4382),L=l(3680),I=l(5581),P=(l(1138),l(4221)),R=function(n){return n.modal.isOpenModal},W=function(n){return n.modal.modalData},A=function(){var n=(0,u.I0)(),e=(0,u.v9)(m.Wz),l=(0,u.v9)(m.Q$),r=(0,u.v9)(R),a=(0,u.v9)(W),o=(0,u.v9)(m.sr);(0,i.useEffect)((function(){n((0,g.cf)())}),[n]);var t=function(e){n((0,I.h7)(e))},s=e.filter((function(n){return n.make.toLowerCase().includes(o.toLowerCase())}));return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(c.T3,{children:[(0,Z.jsx)(j,{}),(0,Z.jsx)(c.Ov,{children:s.map((function(n){return(0,Z.jsx)(y._,{openModal:t,car:n},n.id)}))}),s.length%12===0&&e.length&&e.length%12===0?(0,Z.jsx)(c.CF,{type:"button",onClick:function(){n((0,g.DL)(l+1))},children:"Load more"}):null,r&&(0,Z.jsx)(L.q,{modalData:a}),(0,Z.jsx)(P.mh,{})]})})}}}]);
//# sourceMappingURL=144.1c6c2af8.chunk.js.map