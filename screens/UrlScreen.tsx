import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import RootStackParamList from './RootStackParamList';

/** React Navigation からもらってくる値 */
type UrlScreenProps = NativeStackScreenProps<RootStackParamList, 'UrlScreen'>;

/** URL 入力画面 */
const UrlScreen: React.FC<UrlScreenProps> = ({ navigation }) => {
    const [inputUrl, setInputUrl] = useState('')

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text>URLを入力して開始</Text>
            <TextInput
                style={{
                    margin: 10,
                    padding: 5,
                    borderWidth: 1,
                    width: '50%'
                }}
                value={inputUrl}
                onChangeText={(text) => setInputUrl(text)}
            />
            <Button
                title='Webページを全画面で開く'
                onPress={() => {
                    // パラメーター付きで画面遷移
                    navigation.navigate('FullWebViewScreen', { url: inputUrl })
                }}
            />
            <StatusBar hidden />
        </View>
    )
}

export default UrlScreen