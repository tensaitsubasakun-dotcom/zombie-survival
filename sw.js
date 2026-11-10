// ZOMBIE SURVIVAL 100 のサービスワーカー
// ・いつもはネットから最新版を読み込み、読み込めた分を保存しておく（更新がすぐ反映される）
// ・電波がない時は、保存しておいた版で遊べる
const CACHE = 'zombie-survival-v14';
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'favicon-32.png', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    fetch(req).then((res) => {
      // 同じサイトのファイルと、ゲームの文字のフォントは保存しておく
      if (res.ok && (new URL(req.url).origin === location.origin || /fonts\.(googleapis|gstatic)\.com/.test(req.url))) {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
      }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match('index.html')))
  );
});
