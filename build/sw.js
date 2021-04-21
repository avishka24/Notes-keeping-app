importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js');

// This will work!
workbox.routing.registerRoute(
  ({request}) => request.destination === 'image',
  new workbox.strategies.CacheFirst()
);

// With the Network-Falling-Back-To-Cache strategy, your service worker will first try to retrieve the resource from your server. Then when it can’t do that — because for example, you’re offline — retrieve it from the cache (if it exists there).
self.addEventListener('fetch', function(event) {
  event.respondWith(async function() {
     try{
       var res = await fetch(event.request);
       var cache = await caches.open('cache');
       cache.put(event.request.url, res.clone());
       return res;
     }
     catch(error){
       return caches.match(event.request);
      }
    }());
});

// With the Stale-While-Revalidate strategy, your service worker first looks into the cache while also issuing the request to the server. If the resource exists in the cache, it will send it back to the client right away — resulting in a seemingly instantaneous load. When (and if) the server responds to the request successfully, it will save the updated response in the cache. The main drawback of this approach is that resources that you’ll serve will always be one version behind.
self.addEventListener('fetch', function(event){
  event.respondWith(async function () {
     var cache = await caches.open('cache');
     var cachedResponsePromise = await cache.match(event.request);
     var networkResponsePromise = fetch(event.request);
     event.waitUntil(async function () {
        var networkResponse = await networkResponsePromise;
        await cache.put(event.request, networkResponse.clone());
     }());
     return cachedResponsePromise || networkResponsePromise;
   }());
});

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('cache').then(function(cache) {
      return cache.addAll([
        "./",
        "./index.html",
        "./static/css/",
        "./static/js/",
        "./Icons/"
       ]);
    })
   );
});