import{a,b as r,c,d as i,e as f,f as l,g as n,h as d,i as u,j as h,k as M,l as m,m as g,n as y,o as p,p as C,q as x,r as N,s as w}from"./chunk-GNB7NUEZ.js";var v=(()=>{let t=class t{constructor(){this.title="maids-assessment"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c({type:t,selectors:[["app-root"]],decls:3,vars:0,consts:[["href","https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap","rel","stylesheet"]],template:function(e,T){e&1&&(f(0,"head"),n(1,"link",0),l(),n(2,"router-outlet"))},dependencies:[M]});let o=t;return o})();var j=[{path:"user",loadChildren:()=>import("./chunk-HASFMI75.js").then(o=>o.UserModule)},{path:"**",component:g}],F=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[m.forRoot(j),m]});let o=t;return o})();var I={searchText:"test"},S=C(I,p(x,(o,{searchContent:t})=>({searchText:t})),p(N,o=>a({},o)));var b=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t,bootstrap:[v]}),t.\u0275inj=r({providers:[d],imports:[h,F,w,y.forRoot({search:S})]});let o=t;return o})();u().bootstrapModule(b).catch(o=>console.error(o));
