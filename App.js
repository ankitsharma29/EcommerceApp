import { React, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, TouchableOpacity } from 'react-native';
import SplashScreenA from 'react-native-splash-screen'
import NavigationStack from './src/stack/NavigationStack';

const App = () => {
  useEffect(() => {
    SplashScreenA.hide();
  }, [])


  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}
        translucent={false}
      />
      <NavigationStack />
    </NavigationContainer>
  );
};

export default App;
