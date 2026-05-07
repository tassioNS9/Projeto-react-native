import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import HomeScreen from '../screens/Home';
import Edit from '../screens/Edit';
enableScreens();

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={HomeScreen} />
          <Stack.Screen name="Edit" component={Edit} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Navigation;
