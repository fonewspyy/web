'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d53c7ec49476a38a095a3ccdf518cf1c",
"assets/AssetManifest.bin.json": "d33682e58c017c279ac41cf8ae45c472",
"assets/AssetManifest.json": "2d9657eceea270ccfbb0a8300bee379f",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/dotenv": "1db2f1b01ed4579e9264778e43f74840",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Sarabun-Bold.ttf": "6173018c235bfd6b90a727faf1201a15",
"assets/assets/fonts/Sarabun-ExtraBold.ttf": "c6db3de516099e8c64e2abc55a376a97",
"assets/assets/fonts/Sarabun-ExtraLight.ttf": "8a88fa7396ca36bb2a7b2ee194ba4b10",
"assets/assets/fonts/Sarabun-Light.ttf": "5860e622485a9f0a9b1919c49a8fa89a",
"assets/assets/fonts/Sarabun-Medium.ttf": "c0ee849b8f11b1c69b555c67bd70b690",
"assets/assets/fonts/Sarabun-Regular.ttf": "56c5f9d4ecfb8c7ccf8a105e0c8de9f7",
"assets/assets/fonts/Sarabun-SemiBold.ttf": "9cae766fdfdb7bfb3fa930d3562b96ba",
"assets/assets/fonts/Sarabun-Thin.ttf": "f8a5fc5658430abcdfbb583baf522d65",
"assets/assets/images/alogo.png": "be6c6e47e0dfc4d2bf80e303ed2add9e",
"assets/assets/images/bg1.png": "4b3d174230b1147021150054597a8b9a",
"assets/assets/images/bg22.png": "518f83cb56632c81b56a09f147c9c1a3",
"assets/assets/images/bg23.png": "09c6dd4920a6beddb080520b750b0224",
"assets/assets/images/bg24.png": "0b9c725cde2bc856db7ebbefc8cc6c79",
"assets/assets/images/bg25.png": "38344cff7e2202758c40215adad47270",
"assets/assets/images/bg26.png": "ec14a96921f65bb6af05d04187e6f4b0",
"assets/assets/images/bg27.png": "23e97b3dd0ee22888d959e636233332e",
"assets/assets/images/bggb.png": "b755f1dc8bfc3e6c69a65d7fb0f270de",
"assets/assets/images/calendar.png": "1fda222c85c94021cfbd1875fd44c75a",
"assets/assets/images/car.png": "a0ffbe3e5b0db9e2c90df086409b6b92",
"assets/assets/images/car2.png": "94ad81f9e5c5b028f5c5ec18abd2c2c4",
"assets/assets/images/condo2.png": "48cb644fee8bd177a28785df3568db15",
"assets/assets/images/excel-removebg-preview.png": "e23c42c9ccb59dfcd30ffeb563695e1d",
"assets/assets/images/family.png": "db7de5fb07ec6003deb29823ff533683",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/home.png": "76379deac35df233afe7248d7b47264a",
"assets/assets/images/home2.png": "f63d4690a506869c2fc526e3482fed83",
"assets/assets/images/huse.png": "49afbb6942e6acad1480b53949ca1af4",
"assets/assets/images/laogo.png": "1fc0254ef8b628b3a71bcd4817193ed0",
"assets/assets/images/logo.png": "1361809de4ea0b2a44cfcb95553fcf3c",
"assets/assets/images/map.png": "88f43c89cd2c8dc357bd5c6aadc790a0",
"assets/assets/images/motor.png": "61a67b7ac2679704ac2b1dd9b82ccbae",
"assets/assets/images/o_1h6anqtbm1s3d1hff1es5g3d1dt7.jpg": "42cf601552145a1cdca9d96ff6a44ee5",
"assets/assets/images/project2.png": "a7edab198e88a059d531c028e27a991f",
"assets/assets/images/road.png": "ce4292a0ee1122cd923a089a673833ae",
"assets/assets/images/toyo.png": "a082576bc241997589daf5a8b5f1973f",
"assets/assets/images/user1.png": "c4ffa20a7037a3145e9fbebc9700f6b0",
"assets/assets/images/user3.png": "1bd5542ad3edf66044ba1b75ff3fb909",
"assets/assets/images/_2567-11-25__09.55.29.png": "5c63a5bdcc1124446b15a0a802af4c81",
"assets/assets/images/_2568-05-15__09.24.24.png": "f378b3aac73d40987602d42a2beeeff1",
"assets/assets/jsons/AlertSS.json": "2f641d5bf1e1b35a6c6afa555c08faa3",
"assets/assets/jsons/cardadd.json": "a7cc3fc9cafb324db410473d23a74a78",
"assets/assets/jsons/doading.json": "d68894d32dbdaffcf2c6dde07445b949",
"assets/assets/jsons/erorr.json": "37a1e2f7deecc582569db3e1b9c6ee14",
"assets/assets/jsons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/jsons/issue.json": "bfd1375b44183cd6e96cd41a448655ff",
"assets/assets/jsons/notfound.json": "956a6bece75899f6edece05ace2d7584",
"assets/assets/jsons/success.json": "97ab56377b5e4379d077bb6bfdbde874",
"assets/assets/jsons/warning.json": "3f17916be4ab2dd39dcc900820ee6b2b",
"assets/assets/lottie_animations/doading.json": "d68894d32dbdaffcf2c6dde07445b949",
"assets/assets/lottie_animations/erorr.json": "37a1e2f7deecc582569db3e1b9c6ee14",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/lottie_animations/issue.json": "bfd1375b44183cd6e96cd41a448655ff",
"assets/assets/lottie_animations/notfound.json": "956a6bece75899f6edece05ace2d7584",
"assets/assets/lottie_animations/success.json": "97ab56377b5e4379d077bb6bfdbde874",
"assets/assets/lottie_animations/warning.json": "3f17916be4ab2dd39dcc900820ee6b2b",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/sounds/Arpmcamrea.wav": "b3eccfe6c9666f434b313533362d7250",
"assets/assets/sounds/carexit.wav": "70c5c465b31043c6aa83dedd0dac192d",
"assets/assets/sounds/exsit.wav": "bc045d2953777717e7f48d8e63063164",
"assets/assets/sounds/indoor.wav": "063bd4ab0d53d1a6e0200b4677586864",
"assets/assets/sounds/invill.wav": "e6d78afe007c172c1166f7b89a7ca34a",
"assets/assets/sounds/notfonudnot10sec.wav": "25b2338fda274824c60c3021e1701fd0",
"assets/assets/sounds/notfound.wav": "59f8dbaf6de5c0d9af27bf8c8b42e6c1",
"assets/assets/sounds/notification.mp3": "f3bdbdd1fd9ae0fad8fe3e6ac0b130a6",
"assets/assets/sounds/outdoor.wav": "16a92b4e0e2d599279c60656ebb1e198",
"assets/assets/sounds/welcome.wav": "7737c70d3e6afec0fc0684e3315d7e39",
"assets/assets/sounds/yeb_card.mp3": "d195b339e5d57e572b019181d14398df",
"assets/assets/sounds/yeb_out_card.mp3": "f110c237727feab1855c38b8977e123b",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "613bb349a51141f217d79f479de29f43",
"assets/fonts/MaterialIcons-Regular.otf": "edefb82fe102902fa7ce25f1a93f795e",
"assets/NOTICES": "e4b9292c487892d464111c47d32fe18b",
"assets/packages/ehp_api/lib/fonts/fa-brands-400.ttf": "e1f173b7b4435b7c34b5259366aa227b",
"assets/packages/ehp_api/lib/fonts/fa-light-300.ttf": "06759867220e65ff2f085fa5f8f6a929",
"assets/packages/ehp_api/lib/fonts/fa-regular-400.ttf": "a88b25d6e1d1c301cb1fd6802ce02d9e",
"assets/packages/ehp_api/lib/fonts/fa-solid-900.ttf": "a7f7827e0c39473cfea4a4d67bd8cb65",
"assets/packages/ehp_api/lib/fonts/fa-thin-100.ttf": "eedf47e45505ceb0798e86e80856a246",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/flutter_osm_plugin/assets/default_pin.png": "7679c39b09843c8bbea9add45fb6dd87",
"assets/packages/flutter_osm_plugin/assets/dynamic-styles.yaml": "0ee8b2f249be023fb6cb4e55d5961959",
"assets/packages/flutter_osm_web/src/asset/map.html": "1d48021f2a0455466f86649b4e828a69",
"assets/packages/flutter_osm_web/src/asset/map.js": "9ca74acd5f94ced7366fa719168d7b51",
"assets/packages/flutter_osm_web/src/asset/osm_interop.js": "8ac7e3bf937ae11469e21265b15709eb",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1d258a6acda5705c5cfe0c02f9c90a53",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "110bd3a24cc8731976d2991db50d8997",
"assets/packages/routing_client_dart/src/assets/ar.json": "45e29bd513d54467b03fe5c10c85cc14",
"assets/packages/routing_client_dart/src/assets/de.json": "75f261f48361c6ad0f987d669dc279be",
"assets/packages/routing_client_dart/src/assets/en.json": "006f10a887beeb7207fc58db61426a4e",
"assets/packages/routing_client_dart/src/assets/es.json": "006019fa2630f52d73040764ad461fab",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "c5758ea10a25b870cf774dd7aaf400f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d9775b0f4b4d00ec51c3b1c825bdd194",
"/": "d9775b0f4b4d00ec51c3b1c825bdd194",
"logo.png": "1fc0254ef8b628b3a71bcd4817193ed0",
"main.dart.js": "c8218ab036eb138613d3e4c2a8d01987",
"version.json": "a65b61bfe9c1d0992515868623b9973a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
