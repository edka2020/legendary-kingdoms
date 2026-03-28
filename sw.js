const CACHE_NAME = 'lk-companion-v1';
const urlsToCache = [
  './index.html',
  './manifest.json',
  './1-el valle de los huesos.jpg',
  './2-corona y torre.jpg',
  './3-piratas de las islas fragmentadas.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) { return response; }
        return fetch(event.request);
      })
  );
});