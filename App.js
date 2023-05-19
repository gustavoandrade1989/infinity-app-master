import React from 'react';
import { StatusBar } from 'react-native';
import { MyTabs } from './src/routes/MyTabs';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/';
// import TabNav from './src/routes/indexBar';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar backgroundColor="#F5F5F5" barStyle="dark-content" />
    </NavigationContainer>
  );
}


