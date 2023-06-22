import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/welcome';
import SignUp from './screens/signup';
import Login from './screens/login';
import Home from './screens/home';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack = createNativeStackNavigator();
  console.log('app is executed');
  return (
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="welcome" options={{ headerShown: false }} component={Welcome} />
      <Stack.Screen name="signup" options={{ headerShown: false }} component={SignUp} />
      <Stack.Screen name="login" options={{ headerShown: false }} component={Login} />
      <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}

