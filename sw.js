const CACHE_NAME = 'adornecasa-v4';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  // Adicione outros assets necessários
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then(cached => cached || fetch(e.request))
  );
});
