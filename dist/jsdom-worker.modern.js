import e from"fs";import t,{Response as o}from"node-fetch";function n(e){return e=e||Object.create(null),{on:function(t,o){(e[t]||(e[t]=[])).push(o)},off:function(t,o){e[t]&&e[t].splice(e[t].indexOf(o)>>>0,1)},emit:function(t,o){(e[t]||[]).slice().map(function(e){e(o)}),(e["*"]||[]).slice().map(function(e){e(t,o)})}}}var r,s=(function(e,t){t=e.exports=function(){for(var e,o="",n=0;n<32;n++)e=16*t.random()|0,n>4&&n<21&&!(n%4)&&(o+="-"),o+=(12===n?4:16===n?3&e|8:e).toString(16);return o};var o=/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;t.isUUID=function(e){return o.test(e)},t.random=function(){return Math.random()}}(r={path:void 0,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},r.exports),r.exports);if(global.URL||(global.URL={}),global.URL.$$objects||(global.URL.$$objects=new Map,global.URL.createObjectURL=e=>{let t=s();return global.URL.$$objects[t]=e,"blob:http://localhost/"+t}),!global.fetch||!global.fetch.jsdomWorker){let n=global.fetch||t;global.fetch=function(t,r){return t instanceof URL&&(t=t.href),t.match(/^file:/)?new Promise((n,r)=>{n(new(global.Response||o)(e.readFileSync(t.slice(7)).toString(),{status:200,statusText:"OK"}))}):t.match(/^blob:/)?new Promise((e,n)=>{let r=new FileReader;r.onload=()=>{const t=global.Response||o;e(new t(r.result,{status:200,statusText:"OK"}))},r.onerror=()=>{n(r.error)};let s=t.match(/[^/]+$/)[0];r.readAsText(global.URL.$$objects[s])}):n.call(this,t,r)},global.fetch.jsdomWorker=!0}function l(e){this.type=e}global.document||(global.document={}),l.prototype.initEvent=Object,global.document.createEvent||(global.document.createEvent=function(e){return new(global[e]||l)(e)}),global.Worker=function(e){let t,o=[],r=n(),s=n(),l={onmessage:null,dispatchEvent:r.emit,addEventListener:r.on,removeEventListener:r.off,postMessage(e){s.emit("message",{data:e})},fetch:global.fetch,importScripts(){}};r.on("message",e=>{let o=l.onmessage||t("onmessage");o&&o.call(l,e)}),this.addEventListener=s.on,this.removeEventListener=s.off,this.dispatchEvent=s.emit,s.on("message",e=>{this.onmessage&&this.onmessage(e)}),this.postMessage=e=>{null!=o?o.push(e):r.emit("message",{data:e})},this.terminate=()=>{throw Error("Not Supported")},global.fetch(e).then(e=>e.text()).then(e=>{let n="var self=this,global=self";for(let e in l)n+=`,${e}=self.${e}`;t=Function(n+";\n"+e+'\nreturn function(n){return n=="onmessage"?onmessage:null;}').call(l);let r=o;o=null,r.forEach(this.postMessage)}).catch(e=>{s.emit("error",e),console.error(e)})};
//# sourceMappingURL=jsdom-worker.modern.js.map
