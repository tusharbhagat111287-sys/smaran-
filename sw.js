
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // ડેટા હંમેશા સીધો સર્વર પરથી જ આવે તે માટે આને ખાલી રાખ્યું છે.
});
