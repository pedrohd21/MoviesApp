import { Home } from '../screens/Home';
import { Favorite } from '../screens/Favorite';
import { Search } from '../screens/Search';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#080808',
    borderTopWidth: 0.2,
    borderTopColor: '#FF9800',
  },
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export function MyTabs() {
  
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarActiveTintColor: '#FF9800',
        tabBarInactiveTintColor: '#B26C00',
        
    }}
    >
      <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarIcon: ({ color }) => (
            <Icon  name="home" size={16} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Search" component={Search} 
        options={{
          tabBarIcon: ({ color }) => (
            <Icon  name="search" size={16} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Favorite" component={Favorite} 
        options={{
          tabBarIcon: ({ color }) => (
            <Icon  name="bookmark" size={16} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


