(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var o=c(1),n=c.n(o),r=c(8),a=c.n(r),i=(c(14),c(2)),s=(c(15),[{id:1,imageUrl:"https://cremecycles.com/images/glowne/12.jpg",name:"bicycle",count:3,size:{width:"200",height:"500"},weight:"10kg",comments:["CommentModel","CommentModel"]},{id:2,imageUrl:"https://content2.rozetka.com.ua/goods/images/big/169777272.jpg",name:"gloves",count:17,size:{width:"20",height:"20"},weight:"150g",comments:["CommentModel1","CommentModel2"]},{id:3,imageUrl:"https://www.fjallraven.com/4a5578/globalassets/catalogs/fjallraven/f2/f235/f23510/f325/7323450014711_ss18_srqz_kanken_21.jpg?width=680&height=680&mode=BoxPad&bgcolor=fff&quality=80",name:"backpack",count:10,size:{width:"40",height:"60"},weight:"250g",comments:["CommentModel3","CommentModel4"]},{id:4,imageUrl:"http://cdn.shopify.com/s/files/1/2631/0778/products/LifeStraw-Go_Dark-Teak_Studio-Single-Shot-Vertical_14_1_1024x1024.jpg?v=1615999380",name:"bottle",count:7,size:{width:"10",height:"20"},weight:"200g",comments:["CommentModel5","CommentModel6"]}]),u=(c(16),c(0)),d=function(e){var t=Object(o.useState)(!1),c=Object(i.a)(t,2),n=c[0],r=c[1];return Object(u.jsx)("div",{className:"product-card",children:Object(u.jsxs)("div",{className:"product-card__content",children:[Object(u.jsx)("div",{className:"product-card__img-container",children:Object(u.jsx)("img",{src:e.product.imageUrl,alt:"product img",className:"product-card__img"})}),Object(u.jsx)("p",{children:"Product: ".concat(e.product.name)}),n&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:"Count: ".concat(e.product.count)}),Object(u.jsx)("p",{children:"Size: ".concat(e.product.size.width,"x").concat(e.product.size.height)}),Object(u.jsx)("p",{children:"Weight: ".concat(e.product.weight)})]}),Object(u.jsx)("button",{type:"button",onClick:function(){r(!n)},children:"Details"}),Object(u.jsx)("button",{type:"button",onClick:function(){return e.removeProduct(e.product)},children:"Delete"})]})})},l=function(e){return Object(u.jsx)("ul",{children:e.productsFromServer.map((function(t){return Object(u.jsx)("li",{children:Object(u.jsx)(d,{product:t,removeProduct:e.removeProduct})},t.id)}))})},m=c(9),j=c(5),h=c(3),p=function(e){var t=Object(o.useState)(!1),c=Object(i.a)(t,2),n=c[0],r=c[1],a=Object(o.useState)({id:0,imageUrl:"",name:"",count:0,size:{width:"",height:""},weight:"",comments:[]}),s=Object(i.a)(a,2),d=s[0],l=s[1],p=function(t){l(Object(h.a)(Object(h.a)({},d),{},Object(j.a)({id:e.products.length+1},t.target.name,t.target.value)))},b=function(t){l(Object(h.a)(Object(h.a)({},d),{},{id:e.products.length+1,size:Object(h.a)(Object(h.a)({},d.size),{},Object(j.a)({},t.target.name,t.target.value))}))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{type:"button",onClick:function(){r(!n)},children:n?"Close":"Add product"}),n&&Object(u.jsxs)("form",{className:"shop__addForm",onSubmit:function(t){t.preventDefault(),e.setProducts([].concat(Object(m.a)(e.products),[d])),console.log(d)},children:["Product Name:",Object(u.jsx)("input",{name:"name",type:"text",placeholder:"",required:!0,autoComplete:"off",onChange:p}),"ImageUrl:",Object(u.jsx)("input",{name:"imageUrl",type:"text",placeholder:"",required:!0,autoComplete:"off",onChange:p}),"Count:",Object(u.jsx)("input",{name:"count",type:"text",placeholder:"",required:!0,autoComplete:"off",onChange:p}),"Width:",Object(u.jsx)("input",{name:"width",type:"text",placeholder:"",required:!0,autoComplete:"off",onChange:b}),"Height:",Object(u.jsx)("input",{name:"height",type:"text",placeholder:"",required:!0,autoComplete:"off",onChange:b}),"Weight:",Object(u.jsx)("input",{name:"weight",type:"text",placeholder:"",required:!0,autoComplete:"off",onChange:p}),n&&Object(u.jsx)("button",{type:"submit",children:"Add"})]})]})},b=function(){var e=Object(o.useState)(s),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(o.useState)(""),a=Object(i.a)(r,2),d=a[0],m=a[1];return Object(u.jsxs)("div",{className:"shop",children:[Object(u.jsx)("h1",{className:"shop__title",children:"Shop"}),Object(u.jsxs)("form",{children:["Sort:",Object(u.jsxs)("select",{value:d,onChange:function(e){m(e.target.value)},children:[Object(u.jsx)("option",{value:"sortAlphabetically",children:"Alphabetically"}),Object(u.jsx)("option",{value:"sortByCount",children:"By count"})]})]}),Object(u.jsx)("h2",{children:"List of products"}),Object(u.jsx)(p,{products:c,setProducts:n}),Object(u.jsx)(l,{productsFromServer:function(){switch(d){case"sortByCount":return c.sort((function(e,t){return t.count-e.count}));default:return c.sort((function(e,t){return e.name.localeCompare(t.name)}))}}(),removeProduct:function(e){confirm("You sure you want to remove this product?")&&n(c.filter((function(t){return t!==e})))}})]})};a.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6ab02fba.chunk.js.map