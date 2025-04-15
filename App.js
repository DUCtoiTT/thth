import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Homescreen';
import ProductDetailScreen from './ProductDetailScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator
        screenOptions={{ headerShown: false }} // ✅ Ẩn header ở tất cả các màn hình
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;