if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>n(e,t),d={module:{uri:t},exports:o,require:c};i[t]=Promise.all(s.map((e=>d[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-c1760cce"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.475101ae.js",revision:null},{url:"assets/index.8a32d888.css",revision:null},{url:"index.html",revision:"c31d1622f2adb3bafcda6fdabfd1628c"},{url:"icon.png",revision:"5a69678214e7d9b1302d1a65d18aa516"},{url:"icon-maskable.png",revision:"93dabbacb48dc51bbf7b607102ae381f"},{url:"manifest.webmanifest",revision:"4b815631c1a98975c40707ccb7362e33"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
