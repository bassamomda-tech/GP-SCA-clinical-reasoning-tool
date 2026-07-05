/* Reasoning GP — service worker (offline support)
   Strategy:
   - Precache a small core shell on install.
   - Navigations: network-first, fall back to cache, then to offline.html.
   - Same-origin assets (css/js/img/json): stale-while-revalidate, so any page
     or data file you open while online becomes available offline afterwards.
   - Google Fonts: cache-first (long-lived).
   Bump CACHE_VERSION to force clients to refresh cached files.
*/
const CACHE_VERSION = 'v10';
const SHELL_CACHE   = 'rgp-shell-' + CACHE_VERSION;
const RUNTIME_CACHE = 'rgp-runtime-' + CACHE_VERSION;
const FONT_CACHE    = 'rgp-fonts-' + CACHE_VERSION;

// Paths are relative to the service worker location (site root).
const SHELL_ASSETS = [
  'index.html',
  'offline.html',
  'manifest.json',
  'assets/site.css',
  'assets/site.js',
  'assets/icons/icon-192.png',
  'assets/icons/icon-512.png',
  'assets/icons/icon-maskable-512.png',
  'assets/icons/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      // Cache best-effort: a single 404 must not abort the whole install.
      .then((cache) => Promise.allSettled(
        SHELL_ASSETS.map((url) => cache.add(new Request(url, { cache: 'reload' })))
      ))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  const keep = [SHELL_CACHE, RUNTIME_CACHE, FONT_CACHE];
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names.filter((n) => !keep.includes(n)).map((n) => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

// Let a page trigger an immediate activation after an update.
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});

function isFontRequest(url) {
  return url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Google Fonts — cache-first (stylesheet + font files).
  if (isFontRequest(url)) {
    event.respondWith(
      caches.open(FONT_CACHE).then((cache) =>
        cache.match(req).then((hit) =>
          hit || fetch(req).then((res) => {
            if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
            return res;
          }).catch(() => hit)
        )
      )
    );
    return;
  }

  // Only handle same-origin from here on.
  if (url.origin !== self.location.origin) return;

  // Page navigations — network-first, fall back to cache, then offline page.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(RUNTIME_CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() =>
          caches.match(req).then((hit) =>
            hit || caches.match('offline.html') || caches.match('index.html')
          )
        )
    );
    return;
  }

  // Other same-origin assets — stale-while-revalidate.
  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(RUNTIME_CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
