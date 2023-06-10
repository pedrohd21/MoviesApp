import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Info } from '../screens/Info';
import { MyTabs } from './myTabs.routes';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
        
      }}
      >
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Info" component={Info} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}