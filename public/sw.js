/* eslint-disable no-undef */
 /* eslint-disable no-restricted-globals */
 self.addEventListener('install', (event) => {
     console.log('Installing Service Worker ...');
 });
 self.addEventListener('activate', (event) => {
 })
console.log('ws file is public folder')

let cacheData = 'appV1';

this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                "/static/js/bundle.js",
                "/asset/hero4.png",
                "/asset/hero2.jpg",
                '/asset/hero3.png',
                "/asset/hero1.jpg",
                "/static/media/hero1.7f906cab75745f25e052.jpg",
                "/app.webmanifest",
                "/logo-tes.png",
                "icons/icon-72x72.png",
                "icons/icon-96x96.png",
                "icons/icon-128x128.png",
                "icons/icon-144x144.png",
                "icons/icon-152x152.png",
                "icons/icon-192x192.png",
                "icons/icon-384x384.png",
                "icons/icon-512x512.png",
                "./index.html",
                "/"

            ])
        })
    )
})

this.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((result) => {
            if(result){
               return result 
            }
        })
    )
    // event.respondWith((async () => {
    //     const cachedResponse = await caches.match(event.request);
    //     if (cachedResponse) {
    //       return cachedResponse;
    //     }
      
    //     const response = await fetch(event.request);
      
    //     if (!response || response.status !== 200 || response.type !== 'basic') {
    //       return response;
    //     }
      
    //     if (ENABLE_DYNAMIC_CACHING) {
    //       const responseToCache = response.clone();
    //       const cache = await caches.open(DYNAMIC_CACHE)
    //       await cache.put(event.request, responseToCache());
    //     }
      
    //     return response;
    //   })());


})

// self.addEventListerner('fetch', event => {
//   // Perform any synchronous checks to see whether you want to respond.
//   // E.g., check the value of event.request.url.
//   if (event.request.url.includes('something')) {
//     const promiseChain = doSomethingAsync()
//       .then(() => doSomethingAsyncThatReturnsAURL())
//       .then(someUrl => fetch(someUrl));
//       // Instead of fetch(), you could have called caches.match(),
//       // or anything else that returns a promise for a Response.

//     // Synchronously call event.respondWith(), passing in the
//     // async promise chain.
//     event.respondWith(promiseChain);
//   }
// });