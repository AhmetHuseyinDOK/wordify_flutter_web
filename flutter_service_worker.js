'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9099c73c2befbfd96ad318eb7e48ce7a",
"index.html": "3463d91714b6c5773ada09ccdb51489e",
"/": "3463d91714b6c5773ada09ccdb51489e",
"CNAME": "155ccdb899271b25740a3b1ea60a2087",
"main.dart.js": "3fbc27ff9cb5f1f79ec99780b112a894",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "21bdd9995fbd25d786b3fbf3c03ba6ed",
".git/config": "2faebf27b83fb8b664f04806365aa1ea",
".git/objects/6f/9064e0a3ca931e5fa5c67e0f35557649865566": "85d39d4e49b27735deba0bdca8064bc8",
".git/objects/04/64f2408be37e22e5f9e2a81c733779841a1c7f": "777f96d159fe75b85f75823fcad0374a",
".git/objects/b4/f021e5315875dfcafa6d3867e09d53626f9a5c": "f74a0ea17b7133b7348276addef2efdf",
".git/objects/e2/f3377f64b51280a8b79f540fc73fbb2c1d5189": "df464eedeb71eb9957a98610c66968c8",
".git/objects/c9/8c2a504f054a57c90170f9611a961d56c5c1ca": "9bc91bceffe1b832915bddb21e4f338e",
".git/objects/c9/134ddde110dfa9271d7386c49bf2feb0ac6edc": "28feaef0300fff5715047e2c514fb7e1",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/2f/670aaafcaba6add5554401f5c75368da6f89d3": "9f4fa3f16874cb99546c99e35d3ee650",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/23cb4669b2711dbe7bfd0546febf033c528463": "21c70f97f0d5f27631808cb3cc1c343d",
".git/objects/36/1b4f2225499828f45ecc64fd06daf2a4019609": "8725f6cd047d6d2f85ca1d9c0de15c4f",
".git/objects/09/425a146239e983fa9602f68123174df232c720": "f52c00d64af944ef526bf2205342e53a",
".git/objects/31/2a0195723f0bb1b573ac96174f1b3188a580b2": "2fbe41335efa32e983e407a2bc58fb19",
".git/objects/91/d3daac0243583615dcbaa62c45f284e79fdc31": "1c7685300b7f0f39142319055b5315cf",
".git/objects/65/3b01769ff72318ee3a245d3df58c335f08f8b8": "673afce0877cec99c755b592970eda52",
".git/objects/6c/930d4c61ff6188dfb53629193f7f9fc95a5919": "2e002ecc297edd19f55f8ff70c187aea",
".git/objects/52/710d68e9535f5f4a0a80cfc23b40bf648e2e73": "3fe2cd13eb2ebaab5864519d8aef6196",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/d4/7cafc43bd93a48039f5850ad3cc4df815fb149": "ce815678ffa9e803a858b401d819823e",
".git/objects/a0/e4064a2bd6f4b68544f7b2b2c7efd8e7792b38": "7b9e84642ed7cab298e6948290d3fb94",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/e1/24579a5758bd6c76172a168a7b5a54925d341b": "a5200629f5e888c514686e5e240eda7c",
".git/objects/f7/ac709244309b8c2d7b6b51afc52282b48184dc": "5c4fe1712f0fad46866639efc7154c37",
".git/objects/79/fd5718cb9a0c0702e75ce4441cfb6f04016b75": "05b0764c9a70aaf89c8cfdef823a55de",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/47/cfc786ad7b6d8ddccad4b7aec1d579652ec506": "5c9f40c2f5e98c62f531d80dd02b3eb3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "658012bd7d29f8dd66474c76558714d6",
".git/logs/refs/heads/master": "658012bd7d29f8dd66474c76558714d6",
".git/logs/refs/remotes/origin/master": "c582b1f756fd16f9b32b4e88ea682e36",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "3b11f18ba92a146273f23f5c812ae6f2",
".git/refs/remotes/origin/master": "3b11f18ba92a146273f23f5c812ae6f2",
".git/index": "2aceefbd8f759a739b9a222df2eba66e",
".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
"assets/AssetManifest.json": "0075558e6b05e8e59208982ce64da4e5",
"assets/NOTICES": "8637e9079d6b0a5bc828674eec246027",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "c1242726c7eac4eb5e843d826f78fb1b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/logo.png": "9d1a20c50ab2ba23778f1edeeafaf9d7",
"assets/assets/add_word.png": "e4f965d3043e4e5737304001020381df",
"assets/assets/quiz.png": "13c6ddf3c1222457c2913ef72744dd6e"
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
