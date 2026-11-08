#!/usr/bin/env python3
"""i18n/translations.txt の訳を index.html の言語切り替えスクリプトに書き込む。

translations.txt は 1行に「日本語 ¦ English ¦ 中文」。
{} はゲームの中で数字や名前が入る場所。順番を入れかえたい時は {0} {1} のように番号をつける。
使い方: python3 tools/build-i18n.py
"""
import json, re, pathlib, sys

root = pathlib.Path(__file__).resolve().parent.parent
d = {}
for n, ln in enumerate((root / 'i18n/translations.txt').read_text(encoding='utf-8').split('\n'), 1):
    if not ln.strip() or ln.startswith('#'):
        continue
    p = ln.split(' ¦ ')
    if len(p) != 3:
        sys.exit(f'translations.txt {n}行目: 「 ¦ 」で3つに分かれていません: {ln}')
    ja, en, zh = p
    for v in (en, zh):
        if len(re.findall(r'\{\d*\}', v)) != ja.count('{}'):
            sys.exit(f'translations.txt {n}行目: {{}} の数が合いません: {ln}')
    d[ja] = {'en': en, 'zh': zh}

path = root / 'index.html'
raw = path.read_bytes().decode('utf-8')
blob = json.dumps(d, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/')
new, k = re.subn(r'/\*I18N_DICT\*/.*?/\*END_I18N_DICT\*/', lambda m: '/*I18N_DICT*/' + blob + '/*END_I18N_DICT*/', raw, flags=re.S)
if k != 1:
    sys.exit('index.html に /*I18N_DICT*/ が見つかりません')
path.write_bytes(new.encode('utf-8'))
print(f'{len(d)} 件の訳を書き込みました')
