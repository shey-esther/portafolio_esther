"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/portafolio_esther/index.html","f74a7b91537b7ca38b2f052bc52b7cb7"],["/portafolio_esther/static/css/main.ff62908c.css","7e1292fc7c1f743386c38436734f5cd7"],["/portafolio_esther/static/js/main.03f5695f.js","54eeaf1125dd55fcfa09207f63e5143b"],["/portafolio_esther/static/media/boot.5a560d66.png","5a560d66276d915ada69753a5fd72bfb"],["/portafolio_esther/static/media/borde.b1ef0220.png","b1ef022032d6e7e105fbe2d639009809"],["/portafolio_esther/static/media/cafe.70ea2f94.jpg","70ea2f94033797caae8031e98f4f6625"],["/portafolio_esther/static/media/compu.9f3bdd20.jpg","9f3bdd20e9d89a861c137216f77cf545"],["/portafolio_esther/static/media/css3.2abefa4b.png","2abefa4bd53928d7ca19e27aead2438e"],["/portafolio_esther/static/media/esther.75c296d5.JPG","75c296d53d5a99cc8f4f25c96e2d07c9"],["/portafolio_esther/static/media/html.7e97847e.png","7e97847eb4d12e36193efe4b6f61a7b0"],["/portafolio_esther/static/media/jq.c28697e2.jpg","c28697e2f83006f22564e62907a7c54b"],["/portafolio_esther/static/media/js.9983a75c.png","9983a75c5abc9eb02fa00491ac733ff9"],["/portafolio_esther/static/media/laberinto.fd3af041.jpg","fd3af04102b4f1220e53c64b635d1d39"],["/portafolio_esther/static/media/logo.b64922c9.png","b64922c97ee9ef5b6a558438860adb09"],["/portafolio_esther/static/media/logo.ee7cd8ed.svg","ee7cd8ed2dcec943251eb2763684fc6f"],["/portafolio_esther/static/media/naranja.01dcb9f6.jpg","01dcb9f6784e9102aa64ecd9614bd4b8"],["/portafolio_esther/static/media/pandita.df9d53e0.png","df9d53e08039ffaeeb0756811d85d1e9"],["/portafolio_esther/static/media/postre.d2dff7a1.jpg","d2dff7a107947832a5b67b6018c3c65f"],["/portafolio_esther/static/media/react.8023c66a.png","8023c66af86730730b4bccdb355947c4"],["/portafolio_esther/static/media/sas.199d7c1f.png","199d7c1fcc194702f394fae20b871814"],["/portafolio_esther/static/media/suelto.1c1d5349.png","1c1d5349189d17e4143812344b4d0ff0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/portafolio_esther/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});