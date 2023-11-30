import { StatusBar, } from 'react-native';
import Routes from './src/routes';

import { Loading } from './src/components/Loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_300Light, Roboto_100Thin } from '@expo-google-fonts/roboto';
import React from 'react';



export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold, Roboto_300Light, Roboto_100Thin });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ?
        <Routes />
        : <Loading />}
    </ThemeProvider>
  );
}
