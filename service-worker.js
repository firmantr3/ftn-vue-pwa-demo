importScripts("/ftn-vue-pwa-demo/precache-manifest.c7dfe3068a8842b60936301a256d70a7.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener("message", (e) => {
    if (e.data.action == 'skipWaiting') self.skipWaiting()
})

