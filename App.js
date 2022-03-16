import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CarsList from './components/CarsList';
import CustomOrder from './components/CustomOrder'
import ExistingInventory from './components/ExistingInventory';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={CarsList}
        />
        <Stack.Screen name="Customize" component={CustomOrder} />
        <Stack.Screen name="Inventory" component={ExistingInventory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;