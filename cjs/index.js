var m=Object.create;var s=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var g=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty;var u=(n,o)=>{for(var e in o)s(n,e,{get:o[e],enumerable:!0})},v=(n,o,e,i)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of d(o))!h.call(n,r)&&r!==e&&s(n,r,{get:()=>o[r],enumerable:!(i=a(o,r))||i.enumerable});return n};var w=(n,o,e)=>(e=n!=null?m(g(n)):{},v(o||!n||!n.__esModule?s(e,"default",{value:n,enumerable:!0}):e,n)),E=n=>v(s({},"__esModule",{value:!0}),n);var C={};u(C,{config:()=>x});module.exports=E(C);var c=require("dotenv"),p=w(require("node:fs")),f=require("node:path"),t=process.cwd(),x=()=>{if(process.env.VERCEL=="1")return;let o=["./.env","../.env","../../.env","../../../.env","../../../../.env","../../../../../.env"].find(e=>{if(p.existsSync((0,f.resolve)(t,e)))return e});if(!o)throw Error("No found .env in "+t);(0,c.config)({path:(0,f.resolve)(t,o)})};0&&(module.exports={config});
//# sourceMappingURL=index.js.map
