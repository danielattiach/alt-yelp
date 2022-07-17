const cacheName = 'alt-yelp-v1';

this.addEventListener('activate', event => {
    // remove unwanted caches
    event.waitUntil(
        caches.keys()
        .then(cacheNames => {
            const promises = []
            for (const cache of cacheNames) {
                if (cache !== cacheName) {
                    promises.push(caches.delete(cache));
                }
            }
            return Promise.all(promises);
        })
    );
});

this.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
        .then(response => {
            const resClone = response.clone();
            caches.open(cacheName)
            .then(cache => {
                cache.put(event.request, resClone);
            })
            return response;
        })
        .catch(err => caches.match(event.request).then(response => response))
    )
});
