import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CarsList from './components/CarsList';
import CustomOrder from './components/CustomOrder'
import ExistingInventory from './components/ExistingInventory';
import Payment from './components/Payment';
import Login from './components/Login';

const Stack = createNativeStackNavigator();
const otherOption = { headerShown: false }

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name="Home"
          options={otherOption}
          component={CarsList}
        />
        <Stack.Screen name="Customize" component={CustomOrder} />
        <Stack.Screen name="Inventory" component={ExistingInventory} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Login" options={otherOption} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;