
const CACHE_NAME = 'smaran-v3';

self.addEventListener('install', (e) => {
  self.skipWaiting(); // નવી એપ તરત જ ઈન્સ્ટોલ કરશે
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) return caches.delete(key); // જૂનો કચરો ડીલીટ
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
