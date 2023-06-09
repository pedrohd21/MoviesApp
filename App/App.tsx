import { StatusBar, } from 'react-native';
import { MyTabs } from './src/routes/MyTabs.routes';
import { Loading } from './src/components/Loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import {useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_300Light, Roboto_100Thin } from '@expo-google-fonts/roboto';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [fontsLoaded]= useFonts({Roboto_400Regular, Roboto_700Bold, Roboto_300Light, Roboto_100Thin});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
      {fontsLoaded ? 
      <NavigationContainer>
        <MyTabs/>
      </NavigationContainer> 
      : <Loading/>}
    </ThemeProvider>  
  );
}
