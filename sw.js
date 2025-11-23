const CACHE_NAME = 'lista-compras-v1';

// Instalar o Service Worker e salvar o básico em cache
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Ativar o Service Worker
self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

// Interceptar requisições (necessário para PWA)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
