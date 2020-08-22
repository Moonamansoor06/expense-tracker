const CACHE_NAME = "version-1";
const urlsToCache = [ '/static/js/bundle.js',
'/static/js/main.chunk.js',
'static/js/0.chunk.js',
'index.html',
'/components/AddTransactions.js',
'/components/Balance.js',
'/components/Header.js',
'/components/IncomeExpense.js',
'/components/Transaction.js',
'/components/TransactionList.js',
'/context/AppReducer.js',
'/context/GlobalState.js',
'/App.js',
'/index.js'

];
const self=this;

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');

                return cache.addAll(urlsToCache);
            })
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request) 
                    .catch(() => caches.match('Offline Content not Available'))
            })
    )
});

// Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
            
    )
});
