
# 開発環境構築

```
npm i
npx expo start
```

QRコードがターミナルに表示されるので、`Expo Go`アプリで読み取って起動する。

# わたしようメモ
プロジェクトのIDなどが私のアカウントと紐付いているため、多分他の人は直さないと動きません、、、

## Expo Go と EAS Update を使い実機でかつPCなしで利用する
`EAS Update`を予め叩いておくことで、あとはQRコードをExpo Goで読み取るだけでいつでもアプリの共有ができるはずです。  

https://blog.expo.dev/eas-update-is-now-generally-available-6532d25e750

iOSの場合、QRコードを読み取る機能がないため、アカウントを予めiOS端末にも設定しておく必要がある。

```
# eas コマンドを使うためにインストール
npm install -g eas-cli

# Expo アカウントでログイン
eas login

# アカウントの確認もできます
eas whoami

# EAS Update する。出力される URL に QRコード が表示されるので、Expo Go で読み取ります。
eas update
```

# expo メモ
## ホットリロードされなくなった
`npx expo start`のあと`r`をおしてリロードするとなおったりします。

## Unsupported SDK version: our app builders don't have support ...
`app.json`で`policy`を`appVersion`から`sdkVersion`にする

```diff
{
  "expo": {
    "runtimeVersion": {
-      "policy": "appVersion"
+      "policy": "sdkVersion"
   }  
}
```
