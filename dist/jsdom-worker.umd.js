!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("fs"),require("node-fetch")):"function"==typeof define&&define.amd?define(["fs","node-fetch"],t):t((e=e||self).fs,e.nodeFetch)}(this,function(e,t){e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;var n="default"in t?t.default:t;function o(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).slice().map(function(e){e(n)}),(e["*"]||[]).slice().map(function(e){e(t,n)})}}}var s=function(e,t,n){return function(e,t){t=e.exports=function(){for(var e,n="",o=0;o<32;o++)e=16*t.random()|0,o>4&&o<21&&!(o%4)&&(n+="-"),n+=(12===o?4:16===o?3&e|8:e).toString(16);return n};var n=/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;t.isUUID=function(e){return n.test(e)},t.random=function(){return Math.random()}}(n={path:void 0,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}();if(global.URL||(global.URL={}),global.URL.$$objects||(global.URL.$$objects=new Map,global.URL.createObjectURL=e=>{let t=s();return global.URL.$$objects[t]=e,"blob:http://localhost/"+t}),!global.fetch||!global.fetch.jsdomWorker){let o=global.fetch||n;global.fetch=function(n,s){return n instanceof URL&&(n=n.href),n.match(/^file:/)?new Promise((o,s)=>{o(new(global.Response||t.Response)(e.readFileSync(n.slice(7)),{status:200,statusText:"OK"}))}):n.match(/^blob:/)?new Promise((e,o)=>{let s=new FileReader;s.onload=()=>{const n=global.Response||t.Response;e(new n(s.result,{status:200,statusText:"OK"}))},s.onerror=()=>{o(s.error)};let r=n.match(/[^/]+$/)[0];s.readAsText(global.URL.$$objects[r])}):o.call(this,n,s)},global.fetch.jsdomWorker=!0}function r(e){this.type=e}global.document||(global.document={}),r.prototype.initEvent=Object,global.document.createEvent||(global.document.createEvent=function(e){return new(global[e]||r)(e)}),global.Worker=function(e){let t,n=[],s=o(),r=o(),l={onmessage:null,dispatchEvent:s.emit,addEventListener:s.on,removeEventListener:s.off,postMessage(e){r.emit("message",{data:e})},fetch:global.fetch,importScripts(){}};s.on("message",e=>{let n=l.onmessage||t("onmessage");n&&n.call(l,e)}),this.addEventListener=r.on,this.removeEventListener=r.off,this.dispatchEvent=r.emit,r.on("message",e=>{this.onmessage&&this.onmessage(e)}),this.postMessage=e=>{null!=n?n.push(e):s.emit("message",{data:e})},this.terminate=()=>{throw Error("Not Supported")},global.fetch(e).then(e=>e.text()).then(e=>{let o="var self=this,global=self";for(let e in l)o+=`,${e}=self.${e}`;t=Function(o+";\n"+e+'\nreturn function(n){return n=="onmessage"?onmessage:null;}').call(l);let s=n;n=null,s.forEach(this.postMessage)}).catch(e=>{r.emit("error",e),console.error(e)})}});
//# sourceMappingURL=jsdom-worker.umd.js.map