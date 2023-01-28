/** 画面遷移先一覧と画面に渡す値の定義 */
type RootStackParamList = {
    /** URL入力画面 */
    UrlScreen: undefined,
    /** 全画面 WebView */
    FullWebViewScreen: { url: string },
}

export default RootStackParamList