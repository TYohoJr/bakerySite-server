"use strict";var precacheConfig=[["/index.html","c34a8fe21dac54c578a22c587156f409"],["/static/css/main.114aac25.css","95ab8d04ab8ba173e86f0d576630bd89"],["/static/js/main.94062c91.js","1800163fa940d1fee26cf2b0b20a9363"],["/static/media/baby.2def96ad.jpg","2def96add1319ff6ed31b9fffd987594"],["/static/media/bulldog.0ce0fa85.jpg","0ce0fa852a1e1198b3b393678ad32968"],["/static/media/chocolate-frosting.e4b82159.jpg","e4b821595dc624b2a8b0399062da4903"],["/static/media/cupcakes1.cc84914b.jpg","cc84914b236a6a5e5e43f77dfd05cd53"],["/static/media/flowers.e911d9ae.jpg","e911d9ae4b572b59ceb2699cc5d6c7a0"],["/static/media/graduation-golf.6a562f17.jpg","6a562f1796898ae45b54ea7b063ca0c7"],["/static/media/instagram.76008bb9.jpg","76008bb9685d410d47fe1fa01dc54f15"],["/static/media/jedi.03dac352.jpg","03dac35242e27b55cb83555bb71feca0"],["/static/media/jesus.9a2b22fc.jpg","9a2b22fc424eb0a2e6a417f9ce30875f"],["/static/media/laura-yoho.9516ec6b.jpg","9516ec6bee4a6a535f0b40700c2a6918"],["/static/media/lego.d4011dff.jpg","d4011dff6131624bf2aed3d3d2acf980"],["/static/media/overflow-chocolate.7149e291.jpg","7149e291ee5764fa0e00521a1ad85142"],["/static/media/pink-pig.fa861641.jpg","fa8616418694f4b720196ca3f71d38fb"],["/static/media/pokemon.f1267596.jpg","f1267596a952de8b7f03245995972d70"],["/static/media/servings-guide.1fef2dc1.jpg","1fef2dc1d5e5917c9bbb801e231d39cc"],["/static/media/superhero.8bb9235e.jpg","8bb9235e3d9cd1c3de5c844c4848b37b"],["/static/media/treasure-chest.074290a7.jpg","074290a76b03727a9b763d3755a7e5a2"],["/static/media/wedding1.c48f64f8.jpg","c48f64f8b608b1dbd6abab2f7b4d3029"],["/static/media/wedding2.4370f925.jpg","4370f92534777307a95f26b55d4fdceb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});