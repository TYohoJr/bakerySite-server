"use strict";var precacheConfig=[["/index.html","afd8c6c97100961d06a4120d016f4768"],["/static/css/main.e32dd944.css","c9dfbb6b5734471979fc5206e9512b54"],["/static/js/main.23ac4e71.js","41dc694603936b68bd5a48cb246830bb"],["/static/media/1.9618d244.jpg","9618d244b95b51672c8b59748b9f4617"],["/static/media/10.ddb57343.jpg","ddb57343a2c16c5e0ee82658aed8075d"],["/static/media/11.f99d39c3.jpg","f99d39c362738d741a29d89bf30347f5"],["/static/media/12.35ec3c52.jpg","35ec3c526c81b38dd411ab5e12cf7d7e"],["/static/media/13.b2269e76.jpg","b2269e767a679d37d3e13d7d5a6e534f"],["/static/media/16.99dce2c3.jpg","99dce2c313972665b81cb6adfe6ba25f"],["/static/media/17.3af98bd2.jpg","3af98bd24ae307e43e24398e2c03b3df"],["/static/media/18.7f4a60ac.jpg","7f4a60ac2beb13c5ed8ab3bd77b84fe2"],["/static/media/19.a398173b.jpg","a398173b857f8227f9dba71b53796031"],["/static/media/2.c4746f1d.jpg","c4746f1df6b50c1c4f5eec9c67a77986"],["/static/media/21.10acd5ec.jpg","10acd5ec2f8117b386866b62a86e998f"],["/static/media/4.576dffb1.jpg","576dffb109b81a8c17edc01ee4c63257"],["/static/media/5.6b0d366f.jpg","6b0d366f24cbbcedeb1d914f697be09a"],["/static/media/6.20b1a7a3.jpg","20b1a7a39265bf7416ececd4495610e9"],["/static/media/7.1f78f273.jpg","1f78f273fdf8459a034544ee08924a0a"],["/static/media/9.7a9526e3.jpg","7a9526e3ade1c31dddfae32dab80205c"],["/static/media/baby.2def96ad.jpg","2def96add1319ff6ed31b9fffd987594"],["/static/media/bulldog.0ce0fa85.jpg","0ce0fa852a1e1198b3b393678ad32968"],["/static/media/chocolate-frosting.e4b82159.jpg","e4b821595dc624b2a8b0399062da4903"],["/static/media/flowers.e911d9ae.jpg","e911d9ae4b572b59ceb2699cc5d6c7a0"],["/static/media/graduation-golf.6a562f17.jpg","6a562f1796898ae45b54ea7b063ca0c7"],["/static/media/instagram.76008bb9.jpg","76008bb9685d410d47fe1fa01dc54f15"],["/static/media/jedi.03dac352.jpg","03dac35242e27b55cb83555bb71feca0"],["/static/media/jesus.9a2b22fc.jpg","9a2b22fc424eb0a2e6a417f9ce30875f"],["/static/media/laura-yoho.9516ec6b.jpg","9516ec6bee4a6a535f0b40700c2a6918"],["/static/media/lego.d4011dff.jpg","d4011dff6131624bf2aed3d3d2acf980"],["/static/media/overflow-chocolate.7149e291.jpg","7149e291ee5764fa0e00521a1ad85142"],["/static/media/pink-pig.fa861641.jpg","fa8616418694f4b720196ca3f71d38fb"],["/static/media/pokemon.f1267596.jpg","f1267596a952de8b7f03245995972d70"],["/static/media/servings-guide.1fef2dc1.jpg","1fef2dc1d5e5917c9bbb801e231d39cc"],["/static/media/superhero.8bb9235e.jpg","8bb9235e3d9cd1c3de5c844c4848b37b"],["/static/media/treasure-chest.074290a7.jpg","074290a76b03727a9b763d3755a7e5a2"],["/static/media/wedding1.c48f64f8.jpg","c48f64f8b608b1dbd6abab2f7b4d3029"],["/static/media/wedding2.4370f925.jpg","4370f92534777307a95f26b55d4fdceb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});