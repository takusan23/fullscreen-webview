
# 開発環境構築

```
npm i
npx expo start
```

QRコードがターミナルに表示されるので、`Expo Go`アプリで読み取って起動する。

# Expo Go と EAS Update を使い実機でかつPCなしで利用する
`eas update`予め叩いておくことで、あとはQRコードをExpo Goで読み取るだけでいつでもアプリの共有ができるはずです。  

https://blog.expo.dev/eas-update-is-now-generally-available-6532d25e750

iOSの場合、QRコードを読み取る機能がないため、アカウントを予めiOS端末にも設定しておく必要がある。

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
