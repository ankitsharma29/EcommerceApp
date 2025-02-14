import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash';
import HomeScreen from '../screens/Homescreen/Home';
const Stack = createNativeStackNavigator();
const stackScreenOptions = {
  headerShown: false,
  gestureDirection: 'horizontal',
  headerMode: 'screen',
  headerTintColor: 'black',
  headerStyle: { backgroundColor: 'white' },
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

const NavigationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={stackScreenOptions}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;
