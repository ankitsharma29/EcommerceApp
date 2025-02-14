import * as React from "react";
import { StyleSheet } from "react-native";
import {
  SafeAreaProvider,
  initialWindowMetrics,
  SafeAreaView,
  Edge,
} from "react-native-safe-area-context";
import { useAppDispatch } from "../hooks/reduxHook";
import SplashScreen from "react-native-splash-screen";
import NavigationStack from "../stack/NavigationStack";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, TouchableOpacity } from "react-native";
interface SafeAreaComponentProps {
  edges: Edge[];
}

const SafeAreaComponent = (props: SafeAreaComponentProps) => {
  SplashScreen.hide();
  const { edges } = props;

  const dispatch = useAppDispatch();

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView edges={edges} style={styles.container}>
        <NavigationContainer>
          <StatusBar
            backgroundColor={"white"}
            barStyle={"dark-content"}
            translucent={false}
          />
          <NavigationStack />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SafeAreaComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
