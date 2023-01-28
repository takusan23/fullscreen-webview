import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FullWebViewScreen from './screens/FullWebViewScreen';
import UrlScreen from './screens/UrlScreen';
import RootStackParamList from './screens/RootStackParamList';

// React Navigation で型を保証する
const Stack = createNativeStackNavigator<RootStackParamList>();

/** エントリーポイント */
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="UrlScreen" component={UrlScreen} />
        <Stack.Screen name="FullWebViewScreen" component={FullWebViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App