/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "36f65220a27a5bdfce820203d31bd26c"
  },
  {
    "url": "assets/css/0.styles.02564e19.css",
    "revision": "07c48e79565a7f1d37e51d3e30d54141"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.371996f6.js",
    "revision": "2122612e7296dd53f71aeceb5d4202d7"
  },
  {
    "url": "assets/js/11.05bd7198.js",
    "revision": "51d92735924ccab0b86337f6bb80d618"
  },
  {
    "url": "assets/js/12.1b8cbf4b.js",
    "revision": "15ed96ebe39dbb46c64d142c532172cd"
  },
  {
    "url": "assets/js/13.322896f8.js",
    "revision": "d12d50c3ad8d725457c6e2db4bf0c820"
  },
  {
    "url": "assets/js/14.5abe4efe.js",
    "revision": "9d482018d8d2144ac763758280b29e8e"
  },
  {
    "url": "assets/js/15.8ac662df.js",
    "revision": "1b77e65b681dfdd615be500e0fbb6aa3"
  },
  {
    "url": "assets/js/16.4d518677.js",
    "revision": "877f8b8c6dfc1107d7e10a2f281f59fb"
  },
  {
    "url": "assets/js/17.8f7ab0d9.js",
    "revision": "f717fba0f4dff3987881719113b84c58"
  },
  {
    "url": "assets/js/18.ff01691f.js",
    "revision": "82e43056559f34333c0a88752823b19e"
  },
  {
    "url": "assets/js/19.0662807d.js",
    "revision": "76b621faed4d987508f37d168ee35828"
  },
  {
    "url": "assets/js/2.b6db59fa.js",
    "revision": "1561b85fdaf3baa3b7f7ade740475952"
  },
  {
    "url": "assets/js/3.eb0f4041.js",
    "revision": "2763647bd9a40c3b78f837c3a13210a3"
  },
  {
    "url": "assets/js/4.5bb104c0.js",
    "revision": "494b59a124f4e46f981e743c9fd32a7a"
  },
  {
    "url": "assets/js/5.438cdca2.js",
    "revision": "f3535afb8715308d56521ebbf8d144cf"
  },
  {
    "url": "assets/js/6.ccce108c.js",
    "revision": "beda1ac23f32ece59c42ec9f50ece1c7"
  },
  {
    "url": "assets/js/7.6411e59a.js",
    "revision": "8cb0d99d743102dce1bb8803b9003c08"
  },
  {
    "url": "assets/js/8.0b30af6f.js",
    "revision": "1563d3c92f46321b76e0dda711b71a2c"
  },
  {
    "url": "assets/js/9.ec9705c1.js",
    "revision": "84d18ce2042b19a6f793e14b86ab806f"
  },
  {
    "url": "assets/js/app.03c30e67.js",
    "revision": "3755d9ec54cea56eb11c02f58d8fcdb1"
  },
  {
    "url": "bar/index.html",
    "revision": "56e1cb7043d4835716f52eda2733654d"
  },
  {
    "url": "bar/markdown.html",
    "revision": "ff3061b2bb1c6abedf72bce65a5faae7"
  },
  {
    "url": "bar/one.html",
    "revision": "75520d46cbce85614ba104af6fa07c5a"
  },
  {
    "url": "bar/two.html",
    "revision": "da896f1109b2778d89cdec48b2127b95"
  },
  {
    "url": "font/index.css",
    "revision": "b055c8890be25e8d98f3534e6eed0679"
  },
  {
    "url": "font/inter/index.css",
    "revision": "e7059bb456ffad29b072c9fe413181ac"
  },
  {
    "url": "font/inter/Inter-Light-slnt=0.eot",
    "revision": "91368ebd30cf7a374dd1297fc323c790"
  },
  {
    "url": "font/inter/Inter-Light-slnt=0.svg",
    "revision": "4e023f70700115dd500505721422b58d"
  },
  {
    "url": "font/inter/Inter-Light-slnt=0.ttf",
    "revision": "6ffbefc66468b90d7af1cbe1e9f13430"
  },
  {
    "url": "font/inter/Inter-Light-slnt=0.woff",
    "revision": "7dcf5a2828450b026d0fec12398a2ca2"
  },
  {
    "url": "font/inter/Inter-Light-slnt=0.woff2",
    "revision": "1e4accdfbe85cf82f1d86efe5960e28e"
  },
  {
    "url": "font/inter/Inter-Medium-slnt=0.eot",
    "revision": "d8bc91abfe68a248e567a85ff0959e82"
  },
  {
    "url": "font/inter/Inter-Medium-slnt=0.svg",
    "revision": "6ad5d6340ccf5e8a8d927a0183f11314"
  },
  {
    "url": "font/inter/Inter-Medium-slnt=0.ttf",
    "revision": "5ff1f2a9a78730d7d0c309320ff3c9c7"
  },
  {
    "url": "font/inter/Inter-Medium-slnt=0.woff",
    "revision": "bf8098eda3c8b59eb9834d1ad3ad6c41"
  },
  {
    "url": "font/inter/Inter-Medium-slnt=0.woff2",
    "revision": "e1ba9f2608b22648b25432cc52c5decb"
  },
  {
    "url": "font/inter/Inter-Regular-slnt=0.eot",
    "revision": "27b0f1e40a2568a8a175da31fc7f47f0"
  },
  {
    "url": "font/inter/Inter-Regular-slnt=0.svg",
    "revision": "aee33e856b3814ab8043e263bdd7c3a5"
  },
  {
    "url": "font/inter/Inter-Regular-slnt=0.ttf",
    "revision": "515cae74eee4925d56e6ac70c25fc0f6"
  },
  {
    "url": "font/inter/Inter-Regular-slnt=0.woff",
    "revision": "01d8020d672e0c32be2f195a6833ccbc"
  },
  {
    "url": "font/inter/Inter-Regular-slnt=0.woff2",
    "revision": "eabbe260940d3d7af4e8f4503b9ef85b"
  },
  {
    "url": "font/inter/Inter-SemiBold-slnt=0.eot",
    "revision": "7bebf40fa6e648df422ee558d0dff78d"
  },
  {
    "url": "font/inter/Inter-SemiBold-slnt=0.svg",
    "revision": "86335e454cb4d30504bd4209464af484"
  },
  {
    "url": "font/inter/Inter-SemiBold-slnt=0.ttf",
    "revision": "ec60b23f3405050f546f4765a9e90fec"
  },
  {
    "url": "font/inter/Inter-SemiBold-slnt=0.woff",
    "revision": "b7de63e4ecf88fa82e86a80fb545444d"
  },
  {
    "url": "font/inter/Inter-SemiBold-slnt=0.woff2",
    "revision": "19c69cb31f58613eba929733bb0e77d2"
  },
  {
    "url": "font/open-sans/index.css",
    "revision": "f9a7aea9a84c0e4fb6089d4374d4787a"
  },
  {
    "url": "font/open-sans/OpenSans-Regular.eot",
    "revision": "07d1a425ccbad19329db2f72d12c4233"
  },
  {
    "url": "font/open-sans/OpenSans-Regular.svg",
    "revision": "5e57a056c8cd9ea934fd0e1c8e8ff4be"
  },
  {
    "url": "font/open-sans/OpenSans-Regular.ttf",
    "revision": "3ed9575dcc488c3e3a5bd66620bdf5a4"
  },
  {
    "url": "font/open-sans/OpenSans-Regular.woff",
    "revision": "9a9345ca19905f91829e747a09fea84a"
  },
  {
    "url": "font/open-sans/OpenSans-Regular.woff2",
    "revision": "9666411f6532dc9c31920ea6059b9728"
  },
  {
    "url": "font/open-sans/OpenSans-SemiBold.eot",
    "revision": "9b5d357fe4cf2efd4897da122ceb6d6b"
  },
  {
    "url": "font/open-sans/OpenSans-SemiBold.svg",
    "revision": "fa93f5904d2d30d425e1b5582baa0e55"
  },
  {
    "url": "font/open-sans/OpenSans-SemiBold.ttf",
    "revision": "ba5cde21eeea0d57ab7efefc99596cce"
  },
  {
    "url": "font/open-sans/OpenSans-SemiBold.woff",
    "revision": "fc742e723908d3ceb33e1de1ad0caa17"
  },
  {
    "url": "font/open-sans/OpenSans-SemiBold.woff2",
    "revision": "43c05971907b0ab140fcaf97487204db"
  },
  {
    "url": "foo/api/index.html",
    "revision": "1a2a9314843342a456b83e7c2691fb59"
  },
  {
    "url": "foo/api/one.html",
    "revision": "6e61471ab6899ef8544bfe9189807569"
  },
  {
    "url": "foo/api/two.html",
    "revision": "c0965b1b33e4dc74befb72d1c2b508df"
  },
  {
    "url": "foo/more/index.html",
    "revision": "83991f2245df1286d8f1cb5dfc5c9958"
  },
  {
    "url": "foo/more/one.html",
    "revision": "985615379db175f75e9c99026b279520"
  },
  {
    "url": "foo/more/two.html",
    "revision": "7b86ab9da5dde8b52725cfd77be0a425"
  },
  {
    "url": "icon/svg.js",
    "revision": "019c6ca93405a75804cee84a2ad309be"
  },
  {
    "url": "images/icons/android-icon-144x144.png",
    "revision": "e67b8d54852c2fbf40be2a8eb0590f5b"
  },
  {
    "url": "images/icons/android-icon-192x192.png",
    "revision": "5d10eaab941eb596ee59ffc53652d035"
  },
  {
    "url": "images/icons/android-icon-36x36.png",
    "revision": "bb757d234def1a6b53d793dbf4879578"
  },
  {
    "url": "images/icons/android-icon-48x48.png",
    "revision": "0d33c4fc51e2bb020bf8dd7cd05db875"
  },
  {
    "url": "images/icons/android-icon-72x72.png",
    "revision": "702c4fafca31d670f9bd8b2d185ced39"
  },
  {
    "url": "images/icons/android-icon-96x96.png",
    "revision": "0ebff702851985ea6ba891cf6e6e7ddd"
  },
  {
    "url": "images/icons/apple-icon-114x114.png",
    "revision": "f4fd30f3a26b932843b8c5cef9f2186e"
  },
  {
    "url": "images/icons/apple-icon-120x120.png",
    "revision": "b6a574d63d52ef9c89189b67bcac5cbd"
  },
  {
    "url": "images/icons/apple-icon-144x144.png",
    "revision": "e67b8d54852c2fbf40be2a8eb0590f5b"
  },
  {
    "url": "images/icons/apple-icon-152x152.png",
    "revision": "f53787bf41febf2b044931a305ccaf2a"
  },
  {
    "url": "images/icons/apple-icon-180x180.png",
    "revision": "9f6b1e3b92b2c5bd5b7d79501bb6e612"
  },
  {
    "url": "images/icons/apple-icon-57x57.png",
    "revision": "83f622ba0994866abc56ace068b6551c"
  },
  {
    "url": "images/icons/apple-icon-60x60.png",
    "revision": "643f761bc39f86c70f17cd1fed3b8e08"
  },
  {
    "url": "images/icons/apple-icon-72x72.png",
    "revision": "702c4fafca31d670f9bd8b2d185ced39"
  },
  {
    "url": "images/icons/apple-icon-76x76.png",
    "revision": "94d9af047b86d99657b5efb88a0d1c7b"
  },
  {
    "url": "images/icons/apple-icon-precomposed.png",
    "revision": "707758f591323153a4f1cb3a8d9641fa"
  },
  {
    "url": "images/icons/apple-icon.png",
    "revision": "707758f591323153a4f1cb3a8d9641fa"
  },
  {
    "url": "images/icons/bacancy_technology.png",
    "revision": "5810bb8253b1e35ba437373ff83f82d3"
  },
  {
    "url": "images/icons/bulb.svg",
    "revision": "e3fbc07fc8a4fd64bf3585de3c5868c4"
  },
  {
    "url": "images/icons/danger.svg",
    "revision": "7224901b2f84983efa258490e5a1c03a"
  },
  {
    "url": "images/icons/favicon-16x16.png",
    "revision": "a5a9da66870189b0539223c38c8a7749"
  },
  {
    "url": "images/icons/favicon-32x32.png",
    "revision": "3d60db0d77303b2414ddd50cf2472bf7"
  },
  {
    "url": "images/icons/favicon-96x96.png",
    "revision": "0ebff702851985ea6ba891cf6e6e7ddd"
  },
  {
    "url": "images/icons/info.svg",
    "revision": "39d1a12b97555d796d4dcda9bf403429"
  },
  {
    "url": "images/icons/ms-icon-144x144.png",
    "revision": "e67b8d54852c2fbf40be2a8eb0590f5b"
  },
  {
    "url": "images/icons/ms-icon-150x150.png",
    "revision": "e8cdf492981122a2548bc247c7b4067d"
  },
  {
    "url": "images/icons/ms-icon-310x310.png",
    "revision": "1721f8303ec2349002b5980a01f27cef"
  },
  {
    "url": "images/icons/ms-icon-70x70.png",
    "revision": "a110cf0132b00b23a8605ca72a8874ba"
  },
  {
    "url": "images/icons/stop.svg",
    "revision": "7d577a225ddf7f95f96032b3eefb48b6"
  },
  {
    "url": "index.html",
    "revision": "03397e14b49edef80cc87aa8139b5835"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
