'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "6581c7cbbf169c1598a613bdc8db362c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "6becc716d9c3cd5d2889f56ce522f18a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "848f8cbc4df6d0e9694fecf927f87f73",
".git/logs/refs/heads/main": "cbc3d3ab1ea6865b6eeb72b6470ab582",
".git/logs/refs/remotes/origin/main": "586178fdf82dcf6fa9e996ee4e221047",
".git/objects/1a/e259c313bcc2a8ebb4f456aa38fd3311aec1f4": "e84ce3f1add317d9c55573c897a1a729",
".git/objects/1b/ac43dd9366612f5169292da850202a1a3637c2": "8bf4030af6b16462d8044ba648c008eb",
".git/objects/30/36b73ad55c829277f46007712ac6146ee72f5c": "b58afcdd0082067b32b3ab105e7624de",
".git/objects/42/cf9312e2cb39e5a90d45426b0a8e7895899101": "2af6f5bd2e4232c78e09cde2d5a1c447",
".git/objects/4f/d1060c32123256b66bd7b45e418a02b679eb80": "029e6ceb18de4deb2810d02797991321",
".git/objects/55/456295b3f19915380fa8d5c4c99db2b034bbc9": "08214898a93bbc3eefc8f47fb838b857",
".git/objects/55/dfc4a492b73fbf988f476f4e3f18490ed4c3b6": "67b023f24b7961b2649904d4d8cae5dc",
".git/objects/62/5a5d26a4cd3a188b03f62c61d2a52cf02da28f": "96c05e72e41f85a32b156856f59b9db8",
".git/objects/63/ae91781b27ac492da799ae4010e2a6bd0c1183": "5fb3a33e244995a80bc868ba08d2ca4b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/bbd4ee90207119f20046d80225d2c9fcd76bf9": "748be8bfd40f6d55d2539fab9c37404a",
".git/objects/7a/99ff2e62adf1aeb084f28153fb149f7dea6e24": "85d1ddd56b7fc581b06db5faa62c2b2b",
".git/objects/7e/8cd33dc4a6521ab7d40c83c2350ffe2edebf63": "89b5b2c0d4fa8ba67d3a19fdb614f487",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/8b/3246521114b71e1b7d4d75b31d8ff6b41d4dfe": "d3878c04a5a1e4b2aa9d8d8ed51c611a",
".git/objects/93/42fc5eb834c719366e9acf778f6b75f673b737": "d07b72bfceea0fdcbe87a7e4939c9f8b",
".git/objects/97/a8016c89e5a1017a3318cee579a9b6bddfc32c": "821cb28e23b082231bd19e0000e25ca5",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/30d0a150cc6f29950de71f1a30aa2dab77ec3c": "c8c0c1594f00aa9b3905f0d11168add6",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a9/42368e85120b629259ac846c2d5d898723df6d": "c8b8c1dbb7b3925bdff6798454df2731",
".git/objects/b0/b91412fb98da49d9d4b9e44c1885c2cf7cf217": "6f0c41e2646d43f79a382a3bfae0e970",
".git/objects/bd/4f1bc59833445a6c8e9f0801c1b454d67dd56b": "bc60a24a057eb632a1c7a2aaa34c64dc",
".git/objects/bd/85a2dae1465fba058260af333df7c454e3b994": "6b342bd3704c63272a01077d3014d846",
".git/objects/c4/2ab57d682f245ec3b7f6a3286a68961b87cc02": "b8ff1057e73543dc172d01218567e5a0",
".git/objects/c7/16927bc6f7d89b31b9bc1e301d3f6504a9e9f1": "1f41c4ef16aa3cd444553367f6a7e322",
".git/objects/ca/854c98e07ffa85e3f7021bf5114a91cbafa9a2": "f84cb1c4123480c23aca6f7e84ccd6da",
".git/objects/d7/61032ae7dd7d9f0a49eaf3d1363398a9e2e612": "30d0366a3f1d185460c7bae38aedd012",
".git/objects/dd/0f6cb97ab1d9bcf0a2d0d206761674eb5d2834": "8c017796740b99c3a6f765b479a9a713",
".git/objects/dd/69fd19a7d31d6e18754cfc687183c48d7fa673": "5a354eea3fb606baf71309e3bd04b6b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/1a8da6382b68ea76363979bbcaf38a6036f035": "1ac74b1dda7ca79a0557395298d87eee",
".git/objects/ea/2b0c21e2f68feb72c5eb01d8962e3f1ea1cedf": "718cdacc6c0aeed433ed60dd53429f0e",
".git/objects/f1/f3172ad5b7d7076342fc0980361a8fb6c37b1f": "3d034bee7171b9fbb55ac2f3c8b64a72",
".git/refs/heads/main": "60df58942475b39b198b8196a39056a1",
".git/refs/remotes/origin/main": "60df58942475b39b198b8196a39056a1",
"assets/AssetManifest.json": "41f726f3e48bbe27f5793ea7a54f9d60",
"assets/assets/10.jpg": "3461108c6f32c66854b007923d786b38",
"assets/assets/11.jpg": "0032f2105025deb3e74038a3167cac92",
"assets/assets/12.jpg": "d383673d1150d046b5ae27c7844e6ccb",
"assets/assets/21.jpg": "3003ea9b1f4e354b02e47e15771b1c85",
"assets/assets/22.jpg": "4d286ccc1fcee8d0706a04a0df860003",
"assets/assets/23.jpg": "b90fd8c1f873cacb904606ae7d98f2c0",
"assets/assets/24.jpg": "7ac7d4dcc9f1073cfe214ae5a1780499",
"assets/assets/27.jpg": "b8a96dbe68ea2196db64de47d5a49dc6",
"assets/assets/99.JPG": "d7fdadd545cf6f27dcecdc8b1bfa12c0",
"assets/assets/eva.jpg": "28e2b32858b2462c66308efb9feb7690",
"assets/assets/loading.png": "50bd105708bd3d4cfe6777d258f0ee8e",
"assets/FontManifest.json": "c445569510abb210ec351fa816c0c30e",
"assets/fonts/HerrVonMuellerhoff-Regular.ttf": "ae6beb7b916b3370181e8d065e74db37",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "5f5b936091987399f63231d36b7c5995",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0f96549f0c7564ef439b94d953262587",
"/": "0f96549f0c7564ef439b94d953262587",
"main.dart.js": "e082872948da474cb57119647edde3df",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
