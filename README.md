# ZOMBIE SURVIVAL 100

カバン(グリッド)管理型のゾンビサバイバル・ローグライト。HTML1ファイルで動くブラウザゲーム。

- 遊ぶ: https://zombie-survival-game-goethe.github.io/zombie-survival/ （スマホのブラウザでもOK）
- 本体: `index.html`（`zombie_survival.html` は以前のURLから転送するだけ）

## 修正案・バグ報告の送り方（友人向け）

1. ゲームのタイトル画面（またはゲームオーバー画面）の「💡 修正案・バグ報告を送る」を押す
   - または https://github.com/zombie-survival-game-Goethe/zombie-survival/issues/new/choose を開く
2. 「💡 修正案・アイデア」か「🐛 バグ報告」を選んで書き込む（GitHubアカウントが必要）

送られた内容は [Issues](https://github.com/zombie-survival-game-Goethe/zombie-survival/issues) に一覧で並びます。

## PCでの更新の取り込み

```
cd /d E:\smobie_survival
git pull
```

## 見た目（Tailwind CSS）を変えたとき
ゲームは外のサーバーから Tailwind を読み込まず、使っているクラスだけを `index.html` の `<style id="tailwind-css">` に入れています。
新しいクラス（色・大きさなど）を使ったら、次のコマンドで入れ直してください。

```
node tools/build-css.js
```

## ホーム画面に追加・オフライン
`manifest.webmanifest` と `sw.js` で、スマホのホーム画面に追加してアプリのように遊べます。一度開けば電波がなくても遊べます。

## アクセス解析（GoatCounter）
`index.html` の `ANALYTICS_COUNT_URL` に GoatCounter の URL（例：`https://（コード）.goatcounter.com/count`）を入れると、
github.io で遊ばれた時だけ、タイトル表示・ゲーム開始・ステージ突破・ボス到達・ゲームオーバー（ステージと原因）・クリアを数えます。
クッキーは使わず、個人は特定しません。空のあいだは何も送りません。

## 言語（日本語 / English / 中文）

- タイトル画面の右上と、ゲーム中の上のバーにある言語メニューで切り替えられる。選んだ言語はブラウザに保存される。
- はじめて開いた時は、ブラウザの言語に合わせる（日本語・中国語以外は英語）。
- ゲーム中に切り替えると、そこまでを保存して読み込み直し、そのまま続きから遊べる。
- ゲームの中の文章は日本語で書き、画面に出す直前に訳している。訳は `i18n/translations.txt`（1行に「日本語 ¦ English ¦ 中文」）。
- 文章を足したり変えたりしたら、`translations.txt` にも同じ日本語で1行足して、次を実行する：

```
python3 tools/build-i18n.py
```

`{}` は数字や名前が入る場所。英語・中国語で順番を入れかえたい時は `{0}` `{1}` と番号をつける。

## ライセンス・クレジット

- コード・画像・文章はすべて MIT ライセンス（`LICENSE`）。著作権の表示を残せば自由に使える。
- 画像は ChatGPT の画像生成で作り、ゲーム用に調整した。OpenAI の利用規約では、作った画像の権利は使った人に渡され、商用利用もでき、クレジット表記の義務はない。ただし AI で作ったものを人の手描きだと言ってはいけないので、ゲーム内のクレジットに書いてある。
- ゲーム内のタイトル画面の「📜 クレジット・ライセンス」から確認できる。

## 投げ銭（OFUSE）

`index.html` の `SUPPORT_URL` に OFUSE のページURLを入れると、タイトル画面・ゲームオーバー/クリア後・エンディングに「☕ 開発者を支援する（投げ銭）」ボタンが出る。空のあいだはボタンを出さない。
