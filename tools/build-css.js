// ゲームで使っている Tailwind のクラスだけを書き出して、index.html の <style id="tailwind-css"> に入れ直す
// 新しいクラス（色・大きさなど）を使ったら、このスクリプトを1回実行する
//   npm i -D tailwindcss@3
//   node tools/build-css.js
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const html = path.join(root, 'index.html');
fs.writeFileSync(path.join(__dirname, 'in.css'), '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n');
execSync(`npx --yes tailwindcss@3 -c "${path.join(__dirname, 'tailwind.config.js')}" -i "${path.join(__dirname, 'in.css')}" -o "${path.join(__dirname, 'out.css')}" --minify`, { stdio: 'inherit' });
const css = fs.readFileSync(path.join(__dirname, 'out.css'), 'utf8').trim();
let src = fs.readFileSync(html, 'utf8');
src = src.replace(/<style id="tailwind-css">[\s\S]*?<\/style>/, () => `<style id="tailwind-css">${css}</style>`);
fs.writeFileSync(html, src);
fs.unlinkSync(path.join(__dirname, 'in.css')); fs.unlinkSync(path.join(__dirname, 'out.css'));
console.log('tailwind-css を更新しました');
