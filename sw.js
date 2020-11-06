var CACHE_NAME = 'izabelle-v1'
var urlsToCache = [
'css/izabellebraga.css',
'css/bootstrap.css',
'img/favicon.png ',
'js/bootstrap.js',
'js/jquery-3.5.1.min.js',
'libs/swweetalert2-master/src/sweetalert2.js',
] 

self.addEventListener('install', function(event) {
    event.waitUntil(
       caches.open(CACHE_NAME)
       .then(function(cache){
        console.log('Cache aberto...')
        return cache.addAll(urlsToCache)
       })
    )
})

self.addEventListener('fetch', function(event){
    event.respondewith(
        caches.match(event.request)
        .then(function(response){
            if(response){
            return response
            }
            return fetch(event.request)
        }
    
    )
    )

})