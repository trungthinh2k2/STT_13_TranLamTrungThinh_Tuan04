import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Screen2_a, Screen2_b, Screen2_c, ScreenTiki_Ok, ScreenTong2So} from "./screens";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
            screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Screen2_a" component={Screen2_a} />
        <Stack.Screen name="Screen2_b" component={Screen2_b} />
        <Stack.Screen name="Screen2_c" component={Screen2_c} />
        <Stack.Screen name="ScreenTiki_Ok" component={ScreenTiki_Ok} />
        <Stack.Screen name="ScreenTong2So" component={ScreenTong2So} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;