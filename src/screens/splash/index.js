import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {StatusBar} from 'react-native';
import Colors from '../../resource/theme/color';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  });
  return (
    <LinearGradient
      locations={[0, 0.5]}
      colors={['#ffffff', '#ffffff']}
      style={styles.linearGradient}>
      <StatusBar backgroundColor={Colors.black} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/splash.png')}
          style={{width: '50%', height: '30%'}}
          resizeMode="contain"
        />
      </View>
    </LinearGradient>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
