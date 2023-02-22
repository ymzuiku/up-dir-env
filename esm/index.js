import{config as t}from"dotenv";import*as s from"node:fs";import{resolve as r}from"node:path";var n=process.cwd(),c=()=>{let o=["./.env","../.env","../../.env","../../../.env","../../../../.env","../../../../../.env"].find(e=>{if(s.existsSync(r(n,e)))return e});if(!o)throw Error("No found .env in "+n);t({path:r(n,o)})};export{c as config};
//# sourceMappingURL=index.js.map
