import WebView from "react-native-webview"
import RootStackParamList from './RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

/** React Navigation からもらってくる値 */
type FullWebViewScreen = NativeStackScreenProps<RootStackParamList, 'FullWebViewScreen'>;

/** 全画面で開くWebView */
const FullWebViewScreen: React.FC<FullWebViewScreen> = ({ route }) => {
    return (
        <WebView
            style={{ flex: 1 }}
            source={{ uri: route.params.url }}
        />
    )
}

export default FullWebViewScreen