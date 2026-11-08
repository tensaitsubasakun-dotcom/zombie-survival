# ZOMBIE SURVIVAL

カバン(グリッド)管理型のゾンビサバイバル・ローグライト。HTML1ファイルで動くブラウザゲーム。

- 遊ぶ: https://tensaitsubasakun-dotcom.github.io/zombie-survival/ （スマホのブラウザでもOK）
- 本体: `zombie_survival.html`（`index.html` は本体へ転送するだけ）

## 修正案・バグ報告の送り方（友人向け）

1. ゲームのタイトル画面（またはゲームオーバー画面）の「💡 修正案・バグ報告を送る」を押す
   - または https://github.com/tensaitsubasakun-dotcom/zombie-survival/issues/new/choose を開く
2. 「💡 修正案・アイデア」か「🐛 バグ報告」を選んで書き込む（GitHubアカウントが必要）

送られた内容は [Issues](https://github.com/tensaitsubasakun-dotcom/zombie-survival/issues) に一覧で並びます。

## PCでの更新の取り込み

```
cd /d E:\smobie_survival
git pull
```

## 見た目（Tailwind CSS）を変えたとき
ゲームは外のサーバーから Tailwind を読み込まず、使っているクラスだけを `zombie_survival.html` の `<style id="tailwind-css">` に入れています。
新しいクラス（色・大きさなど）を使ったら、次のコマンドで入れ直してください。

```
node tools/build-css.js
```

## ホーム画面に追加・オフライン
`manifest.webmanifest` と `sw.js` で、スマホのホーム画面に追加してアプリのように遊べます。一度開けば電波がなくても遊べます。
