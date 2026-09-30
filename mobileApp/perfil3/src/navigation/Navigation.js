import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { colors } from '../styles/colors.js';
import Home from '../screens/Home.js';
import ApiInformation from '../screens/ApiInformation.js';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: colors.carbonBlack },
          headerTintColor: colors.platinum,
          headerTitleStyle: { fontWeight: 'bold' },
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ title: 'Pantalla 1' }} />
        <Stack.Screen name="ApiInformation" component={ApiInformation} options={{ title: 'Rick and Morty' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
