// Network-first service worker for the Dallas Trip planner.
//
// Every request tries the network first with cache:'no-store', which bypasses
// the browser's HTTP cache — so a refresh always picks up the latest GitHub
// Pages deploy. The last successful response is stored, and served only as a
// fallback when the user is offline.
//
// Bump CACHE_VERSION if you ever need to force-drop the offline fallback cache.
const CACHE_VERSION = 'dallas-trip-v1';

self.addEventListener('install', function (event) {
  // Activate this worker immediately instead of waiting for old tabs to close.
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.map(function (key) {
          if (key !== CACHE_VERSION) { return caches.delete(key); }
        }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') { return; }
  event.respondWith(
    fetch(event.request, { cache: 'no-store' })
      .then(function (response) {
        // Cache a copy of the fresh response for offline fallback.
        var copy = response.clone();
        caches.open(CACHE_VERSION).then(function (cache) {
          cache.put(event.request, copy).catch(function () {});
        });
        return response;
      })
      .catch(function () {
        // Offline: fall back to the last cached copy if we have one.
        return caches.match(event.request);
      })
  );
});
