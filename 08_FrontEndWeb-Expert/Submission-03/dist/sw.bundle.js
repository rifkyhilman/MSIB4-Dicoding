/*! For license information please see sw.bundle.js.LICENSE.txt */
(()=>{var t={666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),s=new q(n||[]);return a(i,"_invoke",{value:C(t,r,s)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",p="suspendedYield",d="executing",y="completed",g={};function v(){}function w(){}function m(){}var _={};h(_,i,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(T([])));x&&x!==r&&n.call(x,i)&&(_=x);var L=m.prototype=v.prototype=Object.create(_);function R(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(a,o,i,s){var c=l(t[a],t,o);if("throw"!==c.type){var h=c.arg,u=h.value;return u&&"object"==typeof u&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(u).then((function(t){h.value=t,i(h)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var o;a(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,a){r(t,n,e,a)}))}return o=o?o.then(a,a):a()}})}function C(t,e,r){var n=f;return function(a,o){if(n===d)throw new Error("Generator is already running");if(n===y){if("throw"===a)throw o;return N()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=k(i,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?y:p,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=y,r.method="throw",r.arg=c.arg)}}}function k(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var o=l(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function U(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function q(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:N}}function N(){return{value:e,done:!0}}return w.prototype=m,a(L,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:w,configurable:!0}),w.displayName=h(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,h(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},R(E.prototype),h(E.prototype,s,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},R(L),h(L,c,"Generator"),h(L,i,(function(){return this})),h(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=T,q.prototype={constructor:q,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(U),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return s.type="throw",s.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),h=n.call(i,"finallyLoc");if(c&&h){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),U(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;U(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},913:()=>{"use strict";try{self["workbox:core:6.5.3"]&&_()}catch(t){}},977:()=>{"use strict";try{self["workbox:precaching:6.5.3"]&&_()}catch(t){}},80:()=>{"use strict";try{self["workbox:routing:6.5.3"]&&_()}catch(t){}},873:()=>{"use strict";try{self["workbox:strategies:6.5.3"]&&_()}catch(t){}}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}(()=>{"use strict";r(666),r(913);class t extends Error{constructor(t,e){super(((t,...e)=>{let r=t;return e.length>0&&(r+=` :: ${JSON.stringify(e)}`),r})(t,e)),this.name=t,this.details=e}}const e={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=t=>[e.prefix,t,e.suffix].filter((t=>t&&t.length>0)).join("-"),a=t=>t||n(e.precache);function o(t,e){const r=e();return t.waitUntil(r),r}function i(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:r,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!r){const t=new URL(n,location.href);return{cacheKey:t.href,url:t.href}}const a=new URL(n,location.href),o=new URL(n,location.href);return a.searchParams.set("__WB_REVISION__",r),{cacheKey:a.href,url:o.href}}r(977);class s{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:t,state:e})=>{e&&(e.originalRequest=t)},this.cachedResponseWillBeUsed=async({event:t,state:e,cachedResponse:r})=>{if("install"===t.type&&e&&e.originalRequest&&e.originalRequest instanceof Request){const t=e.originalRequest.url;r?this.notUpdatedURLs.push(t):this.updatedURLs.push(t)}return r}}}class c{constructor({precacheController:t}){this.cacheKeyWillBeUsed=async({request:t,params:e})=>{const r=(null==e?void 0:e.cacheKey)||this._precacheController.getCacheKeyForURL(t.url);return r?new Request(r,{headers:t.headers}):t},this._precacheController=t}}let h;function u(t,e){const r=new URL(t);for(const t of e)r.searchParams.delete(t);return r.href}class l{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}const f=new Set;function p(t){return"string"==typeof t?new Request(t):t}r(873);class d{constructor(t,e){this._cacheKeys={},Object.assign(this,e),this.event=e.event,this._strategy=t,this._handlerDeferred=new l,this._extendLifetimePromises=[],this._plugins=[...t.plugins],this._pluginStateMap=new Map;for(const t of this._plugins)this._pluginStateMap.set(t,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:r}=this;let n=p(e);if("navigate"===n.mode&&r instanceof FetchEvent&&r.preloadResponse){const t=await r.preloadResponse;if(t)return t}const a=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const t of this.iterateCallbacks("requestWillFetch"))n=await t({request:n.clone(),event:r})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const o=n.clone();try{let t;t=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const e of this.iterateCallbacks("fetchDidSucceed"))t=await e({event:r,request:o,response:t});return t}catch(t){throw a&&await this.runCallbacks("fetchDidFail",{error:t,event:r,originalRequest:a.clone(),request:o.clone()}),t}}async fetchAndCachePut(t){const e=await this.fetch(t),r=e.clone();return this.waitUntil(this.cachePut(t,r)),e}async cacheMatch(t){const e=p(t);let r;const{cacheName:n,matchOptions:a}=this._strategy,o=await this.getCacheKey(e,"read"),i=Object.assign(Object.assign({},a),{cacheName:n});r=await caches.match(o,i);for(const t of this.iterateCallbacks("cachedResponseWillBeUsed"))r=await t({cacheName:n,matchOptions:a,cachedResponse:r,request:o,event:this.event})||void 0;return r}async cachePut(e,r){const n=p(e);await(0,new Promise((t=>setTimeout(t,0))));const a=await this.getCacheKey(n,"write");if(!r)throw new t("cache-put-with-no-response",{url:(o=a.url,new URL(String(o),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var o;const i=await this._ensureResponseSafeToCache(r);if(!i)return!1;const{cacheName:s,matchOptions:c}=this._strategy,h=await self.caches.open(s),l=this.hasCallback("cacheDidUpdate"),d=l?await async function(t,e,r,n){const a=u(e.url,r);if(e.url===a)return t.match(e,n);const o=Object.assign(Object.assign({},n),{ignoreSearch:!0}),i=await t.keys(e,o);for(const e of i)if(a===u(e.url,r))return t.match(e,n)}(h,a.clone(),["__WB_REVISION__"],c):null;try{await h.put(a,l?i.clone():i)}catch(t){if(t instanceof Error)throw"QuotaExceededError"===t.name&&await async function(){for(const t of f)await t()}(),t}for(const t of this.iterateCallbacks("cacheDidUpdate"))await t({cacheName:s,oldResponse:d,newResponse:i.clone(),request:a,event:this.event});return!0}async getCacheKey(t,e){const r=`${t.url} | ${e}`;if(!this._cacheKeys[r]){let n=t;for(const t of this.iterateCallbacks("cacheKeyWillBeUsed"))n=p(await t({mode:e,request:n,event:this.event,params:this.params}));this._cacheKeys[r]=n}return this._cacheKeys[r]}hasCallback(t){for(const e of this._strategy.plugins)if(t in e)return!0;return!1}async runCallbacks(t,e){for(const r of this.iterateCallbacks(t))await r(e)}*iterateCallbacks(t){for(const e of this._strategy.plugins)if("function"==typeof e[t]){const r=this._pluginStateMap.get(e),n=n=>{const a=Object.assign(Object.assign({},n),{state:r});return e[t](a)};yield n}}waitUntil(t){return this._extendLifetimePromises.push(t),t}async doneWaiting(){let t;for(;t=this._extendLifetimePromises.shift();)await t}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(t){let e=t,r=!1;for(const t of this.iterateCallbacks("cacheWillUpdate"))if(e=await t({request:this.request,response:e,event:this.event})||void 0,r=!0,!e)break;return r||e&&200!==e.status&&(e=void 0),e}}class y{constructor(t={}){this.cacheName=t.cacheName||n(e.runtime),this.plugins=t.plugins||[],this.fetchOptions=t.fetchOptions,this.matchOptions=t.matchOptions}handle(t){const[e]=this.handleAll(t);return e}handleAll(t){t instanceof FetchEvent&&(t={event:t,request:t.request});const e=t.event,r="string"==typeof t.request?new Request(t.request):t.request,n="params"in t?t.params:void 0,a=new d(this,{event:e,request:r,params:n}),o=this._getResponse(a,r,e);return[o,this._awaitComplete(o,a,r,e)]}async _getResponse(e,r,n){let a;await e.runCallbacks("handlerWillStart",{event:n,request:r});try{if(a=await this._handle(r,e),!a||"error"===a.type)throw new t("no-response",{url:r.url})}catch(t){if(t instanceof Error)for(const o of e.iterateCallbacks("handlerDidError"))if(a=await o({error:t,event:n,request:r}),a)break;if(!a)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))a=await t({event:n,request:r,response:a});return a}async _awaitComplete(t,e,r,n){let a,o;try{a=await t}catch(o){}try{await e.runCallbacks("handlerDidRespond",{event:n,request:r,response:a}),await e.doneWaiting()}catch(t){t instanceof Error&&(o=t)}if(await e.runCallbacks("handlerDidComplete",{event:n,request:r,response:a,error:o}),e.destroy(),o)throw o}}class g extends y{constructor(t={}){t.cacheName=a(t.cacheName),super(t),this._fallbackToNetwork=!1!==t.fallbackToNetwork,this.plugins.push(g.copyRedirectedCacheableResponsesPlugin)}async _handle(t,e){return await e.cacheMatch(t)||(e.event&&"install"===e.event.type?await this._handleInstall(t,e):await this._handleFetch(t,e))}async _handleFetch(e,r){let n;const a=r.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{const t=a.integrity,o=e.integrity,i=!o||o===t;n=await r.fetch(new Request(e,{integrity:"no-cors"!==e.mode?o||t:void 0})),t&&i&&"no-cors"!==e.mode&&(this._useDefaultCacheabilityPluginIfNeeded(),await r.cachePut(e,n.clone()))}return n}async _handleInstall(e,r){this._useDefaultCacheabilityPluginIfNeeded();const n=await r.fetch(e);if(!await r.cachePut(e,n.clone()))throw new t("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let t=null,e=0;for(const[r,n]of this.plugins.entries())n!==g.copyRedirectedCacheableResponsesPlugin&&(n===g.defaultPrecacheCacheabilityPlugin&&(t=r),n.cacheWillUpdate&&e++);0===e?this.plugins.push(g.defaultPrecacheCacheabilityPlugin):e>1&&null!==t&&this.plugins.splice(t,1)}}g.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:t})=>!t||t.status>=400?null:t},g.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await async function(e,r){let n=null;if(e.url&&(n=new URL(e.url).origin),n!==self.location.origin)throw new t("cross-origin-copy-response",{origin:n});const a=e.clone(),o={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},i=r?r(o):o,s=function(){if(void 0===h){const t=new Response("");if("body"in t)try{new Response(t.body),h=!0}catch(t){h=!1}h=!1}return h}()?a.body:await a.blob();return new Response(s,i)}(e):e};class v{constructor({cacheName:t,plugins:e=[],fallbackToNetwork:r=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new g({cacheName:a(t),plugins:[...e,new c({precacheController:this})],fallbackToNetwork:r}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(t){this.addToCacheList(t),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const r=[];for(const n of e){"string"==typeof n?r.push(n):n&&void 0===n.revision&&r.push(n.url);const{cacheKey:e,url:a}=i(n),o="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,o),r.length>0){const t=`Workbox is precaching URLs without revision info: ${r.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(t)}}}install(t){return o(t,(async()=>{const e=new s;this.strategy.plugins.push(e);for(const[e,r]of this._urlsToCacheKeys){const n=this._cacheKeysToIntegrities.get(r),a=this._urlsToCacheModes.get(e),o=new Request(e,{integrity:n,cache:a,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:o,event:t}))}const{updatedURLs:r,notUpdatedURLs:n}=e;return{updatedURLs:r,notUpdatedURLs:n}}))}activate(t){return o(t,(async()=>{const t=await self.caches.open(this.strategy.cacheName),e=await t.keys(),r=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of e)r.has(a.url)||(await t.delete(a),n.push(a.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(t){const e=new URL(t,location.href);return this._urlsToCacheKeys.get(e.href)}getIntegrityForCacheKey(t){return this._cacheKeysToIntegrities.get(t)}async matchPrecache(t){const e=t instanceof Request?t.url:t,r=this.getCacheKeyForURL(e);if(r)return(await self.caches.open(this.strategy.cacheName)).match(r)}createHandlerBoundToURL(e){const r=this.getCacheKeyForURL(e);if(!r)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:r},t.params),this.strategy.handle(t))}}let w;const m=()=>(w||(w=new v),w);r(80);const _=t=>t&&"object"==typeof t?t:{handle:t};class b{constructor(t,e,r="GET"){this.handler=_(e),this.match=t,this.method=r}setCatchHandler(t){this.catchHandler=_(t)}}class x extends b{constructor(t,e,r){super((({url:e})=>{const r=t.exec(e.href);if(r&&(e.origin===location.origin||0===r.index))return r.slice(1)}),e,r)}}class L{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(t=>{const{request:e}=t,r=this.handleRequest({request:e,event:t});r&&t.respondWith(r)}))}addCacheListener(){self.addEventListener("message",(t=>{if(t.data&&"CACHE_URLS"===t.data.type){const{payload:e}=t.data,r=Promise.all(e.urlsToCache.map((e=>{"string"==typeof e&&(e=[e]);const r=new Request(...e);return this.handleRequest({request:r,event:t})})));t.waitUntil(r),t.ports&&t.ports[0]&&r.then((()=>t.ports[0].postMessage(!0)))}}))}handleRequest({request:t,event:e}){const r=new URL(t.url,location.href);if(!r.protocol.startsWith("http"))return;const n=r.origin===location.origin,{params:a,route:o}=this.findMatchingRoute({event:e,request:t,sameOrigin:n,url:r});let i=o&&o.handler;const s=t.method;if(!i&&this._defaultHandlerMap.has(s)&&(i=this._defaultHandlerMap.get(s)),!i)return;let c;try{c=i.handle({url:r,request:t,event:e,params:a})}catch(t){c=Promise.reject(t)}const h=o&&o.catchHandler;return c instanceof Promise&&(this._catchHandler||h)&&(c=c.catch((async n=>{if(h)try{return await h.handle({url:r,request:t,event:e,params:a})}catch(t){t instanceof Error&&(n=t)}if(this._catchHandler)return this._catchHandler.handle({url:r,request:t,event:e});throw n}))),c}findMatchingRoute({url:t,sameOrigin:e,request:r,event:n}){const a=this._routes.get(r.method)||[];for(const o of a){let a;const i=o.match({url:t,sameOrigin:e,request:r,event:n});if(i)return a=i,(Array.isArray(a)&&0===a.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(a=void 0),{route:o,params:a}}return{}}setDefaultHandler(t,e="GET"){this._defaultHandlerMap.set(e,_(t))}setCatchHandler(t){this._catchHandler=_(t)}registerRoute(t){this._routes.has(t.method)||this._routes.set(t.method,[]),this._routes.get(t.method).push(t)}unregisterRoute(e){if(!this._routes.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const r=this._routes.get(e.method).indexOf(e);if(!(r>-1))throw new t("unregister-route-route-not-registered");this._routes.get(e.method).splice(r,1)}}let R;class E extends b{constructor(t,e){super((({request:r})=>{const n=t.getURLsToCacheKeys();for(const a of function*(t,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:r="index.html",cleanURLs:n=!0,urlManipulation:a}={}){const o=new URL(t,location.href);o.hash="",yield o.href;const i=function(t,e=[]){for(const r of[...t.searchParams.keys()])e.some((t=>t.test(r)))&&t.searchParams.delete(r);return t}(o,e);if(yield i.href,r&&i.pathname.endsWith("/")){const t=new URL(i.href);t.pathname+=r,yield t.href}if(n){const t=new URL(i.href);t.pathname+=".html",yield t.href}if(a){const t=a({url:o});for(const e of t)yield e.href}}(r.url,e)){const e=n.get(a);if(e)return{cacheKey:e,integrity:t.getIntegrityForCacheKey(e)}}}),t.strategy)}}const C={BASE_URL:"https://restaurant-api.dicoding.dev",BASE_IMAGE_URL:"https://restaurant-api.dicoding.dev/images",CACHE_NAME:(new Date).toISOString(),DATABASE_NAME:"anfarisa-restaurant-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurants"};function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function O(){O=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function h(t,e,r,a){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),s=new E(a||[]);return n(i,"_invoke",{value:b(t,r,s)}),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var l={};function f(){}function p(){}function d(){}var y={};c(y,o,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(C([])));v&&v!==e&&r.call(v,o)&&(y=v);var w=d.prototype=f.prototype=Object.create(y);function m(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function a(n,o,i,s){var c=u(t[n],t,o);if("throw"!==c.type){var h=c.arg,l=h.value;return l&&"object"==k(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){a("next",t,i,s)}),(function(t){a("throw",t,i,s)})):e.resolve(l).then((function(t){h.value=t,i(h)}),(function(t){return a("throw",t,i,s)}))}s(c.arg)}var o;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){a(t,r,e,n)}))}return o=o?o.then(n,n):n()}})}function b(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return{value:void 0,done:!0}}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=x(i,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),l;var a=u(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,l;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function C(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:U}}function U(){return{value:void 0,done:!0}}return p.prototype=d,n(w,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=c(d,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},m(_.prototype),c(_.prototype,i,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new _(h(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},m(w),c(w,s,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=C,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;R(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}function U(t,e,r,n,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,a)}function q(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(t){U(o,n,a,i,s,"next",t)}function s(t){U(o,n,a,i,s,"throw",t)}i(void 0)}))}}const T={cachingAppShell:function(t){var e=this;return q(O().mark((function r(){return O().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e._openCache();case 2:r.sent.addAll(t);case 4:case"end":return r.stop()}}),r)})))()},deleteOldCache:function(){return q(O().mark((function t(){return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.keys();case 2:t.sent.filter((function(t){return t!==C.CACHE_NAME})).map((function(t){return caches.delete(t)}));case 4:case"end":return t.stop()}}),t)})))()},revalidateCache:function(t){var e=this;return q(O().mark((function r(){var n,a,o;return O().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e._openCache();case 2:return n=r.sent,r.next=5,n.match(t);case 5:if(!(a=r.sent)){r.next=8;break}return r.abrupt("return",a);case 8:return r.next=10,e._fetchRequest(t);case 10:return o=r.sent,r.next=13,n.put(t,o.clone());case 13:return r.abrupt("return",o);case 14:case"end":return r.stop()}}),r)})))()},_openCache:function(){return q(O().mark((function t(){return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",caches.open(C.CACHE_NAME));case 1:case"end":return t.stop()}}),t)})))()},_fetchRequest:function(t){var e=this;return q(O().mark((function r(){var n;return O().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch(t);case 2:if((n=r.sent)&&200===n.status){r.next=5;break}return r.abrupt("return",n);case 5:return r.next=7,e._addCache(t,n.clone());case 7:return r.abrupt("return",n);case 8:case"end":return r.stop()}}),r)})))()},_addCache:function(t,e){var r=this;return q(O().mark((function n(){var a;return O().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r._openCache();case 2:return a=n.sent,n.next=5,a.put(t,e);case 5:case"end":return n.stop()}}),n)})))()}};var N,P=["./","./icons/icon-48x48.png","./icons/icon-72x72.png","./icons/icon-96x96.png","./icons/icon-128x128.png","./icons/icon-192x192.png","./icons/icon-384x384.png","./icons/icon-512x512.png","./index.html","./favicon.png","./app.bundle.js","./app.webmanifest","./sw.bundle.js"];N=[{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'./sw.bundle.js.LICENSE.txt'},{'revision':'4a674f7c8e3062c6d8897e3d5e542ea6','url':'app.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'app.bundle.js.LICENSE.txt'},{'revision':'6627d373aec23cd0b2eef53a463266ee','url':'app.webmanifest'},{'revision':'6bc97aefd0c9d95f4dc7eb859e281f26','url':'assets/android-chrome-144x144.png'},{'revision':'0f060a4be43a6c2ec77866270b333372','url':'assets/android-chrome-192x192.png'},{'revision':'b5a51319080e4ccd4867965cc1cdfba7','url':'assets/android-chrome-256x256.png'},{'revision':'cbc528d99cd1e5fe09b118b9c934305d','url':'assets/android-chrome-36x36.png'},{'revision':'ef4e6f7cee16919edf52171d1bdde615','url':'assets/android-chrome-384x384.png'},{'revision':'f092e49c8d2a5728450e9e639c0623d9','url':'assets/android-chrome-48x48.png'},{'revision':'398c6ec981697da5875dd3c21ec79d21','url':'assets/android-chrome-512x512.png'},{'revision':'4a82cecdffa55d5a8a12bd669d54f778','url':'assets/android-chrome-72x72.png'},{'revision':'c2eeb76107199a2e75217751d7bdcffc','url':'assets/android-chrome-96x96.png'},{'revision':'fefb4b105347c55675356ff60edcd779','url':'assets/apple-touch-icon-1024x1024.png'},{'revision':'e9898647f4264953ce58ae95faa4298f','url':'assets/apple-touch-icon-114x114.png'},{'revision':'b0d857bc80177fd0da01f6e3b22d671b','url':'assets/apple-touch-icon-120x120.png'},{'revision':'6bc97aefd0c9d95f4dc7eb859e281f26','url':'assets/apple-touch-icon-144x144.png'},{'revision':'a79a210e7b523619028447c61026b111','url':'assets/apple-touch-icon-152x152.png'},{'revision':'0ea633ea42dd28060a4153916f538074','url':'assets/apple-touch-icon-167x167.png'},{'revision':'8df9fbe2e845164d3ab84e5def1454fc','url':'assets/apple-touch-icon-180x180.png'},{'revision':'8e26aff291860617a8e824a11cf1b9f7','url':'assets/apple-touch-icon-57x57.png'},{'revision':'60da34335b5a8b3feb496678256bfd53','url':'assets/apple-touch-icon-60x60.png'},{'revision':'4a82cecdffa55d5a8a12bd669d54f778','url':'assets/apple-touch-icon-72x72.png'},{'revision':'5b2c9db88c885dd769ddd1e5e74f666a','url':'assets/apple-touch-icon-76x76.png'},{'revision':'8df9fbe2e845164d3ab84e5def1454fc','url':'assets/apple-touch-icon-precomposed.png'},{'revision':'8df9fbe2e845164d3ab84e5def1454fc','url':'assets/apple-touch-icon.png'},{'revision':'707bca27d9168eda89e49d361ccea660','url':'assets/apple-touch-startup-image-1125x2436.png'},{'revision':'cc79ab7971a83cfeff252cb768f75864','url':'assets/apple-touch-startup-image-1136x640.png'},{'revision':'b396cf370e47b19b3797469bb5419fee','url':'assets/apple-touch-startup-image-1242x2208.png'},{'revision':'e5a085e6f4180d8ce1b9b0596234f942','url':'assets/apple-touch-startup-image-1242x2688.png'},{'revision':'6a00d2547b9664c7b45c2fdcacbfeb9d','url':'assets/apple-touch-startup-image-1334x750.png'},{'revision':'53cd9cb460b9287420cf13a379f19fb3','url':'assets/apple-touch-startup-image-1536x2048.png'},{'revision':'d25b4ac8e894d8cbb3bc5474006c0ea0','url':'assets/apple-touch-startup-image-1620x2160.png'},{'revision':'f95f58a390e3eda8f4a3e845f300d871','url':'assets/apple-touch-startup-image-1668x2224.png'},{'revision':'2bf5cdea7755aebdf33dbd9c599455c9','url':'assets/apple-touch-startup-image-1668x2388.png'},{'revision':'1f9670c3814027fd0759f8e5ae4b3c35','url':'assets/apple-touch-startup-image-1792x828.png'},{'revision':'63a64ad6a79c7d78e6fea5e0cb1c1715','url':'assets/apple-touch-startup-image-2048x1536.png'},{'revision':'3a40cc081df98e83b6f34572101b35c9','url':'assets/apple-touch-startup-image-2048x2732.png'},{'revision':'9e4bb343863619a560957e19a76f51f0','url':'assets/apple-touch-startup-image-2160x1620.png'},{'revision':'ae577ce62119ea3075b698105fbeaad1','url':'assets/apple-touch-startup-image-2208x1242.png'},{'revision':'d8a7cbcb59b3fcf5bb1b21b1ce4c3cf6','url':'assets/apple-touch-startup-image-2224x1668.png'},{'revision':'511297dd609c532c3e7bdc5f0e7cd133','url':'assets/apple-touch-startup-image-2388x1668.png'},{'revision':'e18306f7c12dc24926b9dd0dd5fea827','url':'assets/apple-touch-startup-image-2436x1125.png'},{'revision':'b15a99e85591e85962a0848bb124c5f4','url':'assets/apple-touch-startup-image-2688x1242.png'},{'revision':'b2f952237404f7f652f32e5a00b4cf13','url':'assets/apple-touch-startup-image-2732x2048.png'},{'revision':'fbdb7f377bdf5037d7995b302dceae0b','url':'assets/apple-touch-startup-image-640x1136.png'},{'revision':'bde9df5704269cd8152a624567a56c8b','url':'assets/apple-touch-startup-image-750x1334.png'},{'revision':'388e3150f923212976b12b4f5dfa6db5','url':'assets/apple-touch-startup-image-828x1792.png'},{'revision':'6b9febff1eb49f1662476afc3e8c6d77','url':'assets/browserconfig.xml'},{'revision':'1275637b0c6ef3f271f45983c217e9fc','url':'assets/coast-228x228.png'},{'revision':'cda6830e1b9ffb5cccd7c265a29d7a0b','url':'assets/favicon-16x16.png'},{'revision':'6e9f94c600f4f132f8b8805b3d4580d4','url':'assets/favicon-32x32.png'},{'revision':'f092e49c8d2a5728450e9e639c0623d9','url':'assets/favicon-48x48.png'},{'revision':'25a78f5af40ac74611f76fc5446b327e','url':'assets/favicon.ico'},{'revision':'9e70089c14d954bd805f2c472e24d7d1','url':'assets/firefox_app_128x128.png'},{'revision':'25562803621aee99567f3d8eac931430','url':'assets/firefox_app_512x512.png'},{'revision':'823c64797a40adcb871d45477efba14b','url':'assets/firefox_app_60x60.png'},{'revision':'635223db0318786aefe4380b860b016f','url':'assets/manifest.json'},{'revision':'5bdc372847d900e372d96b858ffeb71f','url':'assets/manifest.webapp'},{'revision':'6bc97aefd0c9d95f4dc7eb859e281f26','url':'assets/mstile-144x144.png'},{'revision':'7c0752f41c9650b8177ca2ae6d39ce84','url':'assets/mstile-150x150.png'},{'revision':'3450efd8671ae96fcaed89c983584d4e','url':'assets/mstile-310x150.png'},{'revision':'bf1a6426e2bdb32527b0769d35e14dfa','url':'assets/mstile-310x310.png'},{'revision':'4992e91f7e8be63ab45ba26b13d85e23','url':'assets/mstile-70x70.png'},{'revision':'020efbc990619b8a860dc77d194b9619','url':'assets/yandex-browser-50x50.png'},{'revision':'1fa786b96e710d40404b454e3f54141c','url':'assets/yandex-browser-manifest.json'},{'revision':'96e257de71d7e982afd742b2c763185a','url':'favicon.png'},{'revision':'29adf9e2d2229e3924d0b3d0d1a09eb6','url':'icons/icon-128x128.png'},{'revision':'de29221e6e848a8c02a974a8edf57e89','url':'icons/icon-144x144.png'},{'revision':'6aebd995a477d1f5cb44eb12b1a15c6f','url':'icons/icon-152x152.png'},{'revision':'6a3522af20304acac4c8f36cb10ee965','url':'icons/icon-192x192.png'},{'revision':'05c445f7ed0556ba015c84919f8b9987','url':'icons/icon-384x384.png'},{'revision':'53a055d6d678c892631d01c9b652203a','url':'icons/icon-48x48.png'},{'revision':'ded9a96fb3a2132cb75b3f7e3c63c7aa','url':'icons/icon-512x512.png'},{'revision':'7d89e59ac3209997f6e00d6a157369d5','url':'icons/icon-72x72.png'},{'revision':'9eea5e09771ded6f74ac2833637c01d2','url':'icons/icon-96x96.png'},{'revision':'68b5a53e03b33c60da0ff1d832f3f350','url':'index.html'}],m().precache(N),function(e){const r=m();!function(e,r,n){let a;if("string"==typeof e){const t=new URL(e,location.href);a=new b((({url:e})=>e.href===t.href),r,n)}else if(e instanceof RegExp)a=new x(e,r,n);else if("function"==typeof e)a=new b(e,r,n);else{if(!(e instanceof b))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}(R||(R=new L,R.addFetchListener(),R.addCacheListener()),R).registerRoute(a)}(new E(r,e))}(undefined),self.addEventListener("install",(function(t){t.waitUntil(T.cachingAppShell([].concat(P)))})),self.addEventListener("activate",(function(t){t.waitUntil(T.deleteOldCache())})),self.addEventListener("fetch",(function(t){t.respondWith(T.revalidateCache(t.request))}))})()})();
//# sourceMappingURL=sw.bundle.js.map