import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  View,
} from 'react-native';
import Colors from '../resource/theme/color';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  title?: string;
  onPress?: any;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  isDark?: boolean;
  isLoading?: boolean;
  ColorCodes?: any;
}

const CustomButton: React.FC<Props> = ({
  title,
  onPress,
  style,
  textStyle,
  disabled,
  isDark = true,
  isLoading,
  ColorCodes = [],
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={isLoading || disabled}>
      <LinearGradient
        start={{x: 1, y: 1}}
        end={{x: 0, y: 0}}
        colors={
          ColorCodes?.length > 0
            ? ColorCodes
            : isDark
            ? [Colors.black(), Colors.black()]
            : [Colors.red(), Colors.red()]
        }
        style={[styles.button, style]}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Text style={[styles.buttonText, textStyle]}>{title}</Text>
          {isLoading && (
            <ActivityIndicator color={'white'} style={{marginHorizontal: 10}} />
          )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 55,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.white(),
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Lato-Bold',
  },
});

export default CustomButton;
