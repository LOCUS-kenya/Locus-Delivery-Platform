const CACHE_NAME = 'locus-app-v1';

const APP_SHELL = [
  '/',
  '/style.css',
  '/locuslogo.png'
];

self.addEventListener(
  'install',
  function (event) {

    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function (cache) {
          return cache.addAll(APP_SHELL);
        })
    );

    self.skipWaiting();

  }
);

self.addEventListener(
  'activate',
  function (event) {

    event.waitUntil(
      caches.keys()
        .then(function (cacheNames) {

          return Promise.all(
            cacheNames
              .filter(function (name) {
                return name !== CACHE_NAME;
              })
              .map(function (name) {
                return caches.delete(name);
              })
          );

        })
    );

    self.clients.claim();

  }
);

self.addEventListener(
  'fetch',
  function (event) {

    if (event.request.method !== 'GET') {
      return;
    }

    const requestUrl = new URL(
      event.request.url
    );

    if (requestUrl.origin !== self.location.origin) {
      return;
    }

    event.respondWith(
      fetch(event.request)
        .catch(function () {
          return caches.match(event.request)
            .then(function (cachedResponse) {

              if (cachedResponse) {
                return cachedResponse;
              }

              return new Response(
                '',
                {
                  status: 503,
                  statusText: 'Offline'
                }
              );

            });
        })
    );

  }
);