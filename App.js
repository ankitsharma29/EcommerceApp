import "./global.css";
import { React, useEffect } from "react";
import SplashScreenA from "react-native-splash-screen";
import { Provider } from "react-redux";
import SafeAreaComponent from "./src/screens/SafeAreaComponent";
import store from "./src/store/store";
import { Text, View } from "react-native";
const App = () => {
  useEffect(() => {
    SplashScreenA.hide();
  }, []);

  return (
    <Provider store={store}>
      <View className="bg-red-800">
        <Text className="text-blue-200 text-center font-semibold">Hello, World!</Text>
      </View>
      {/* <SafeAreaComponent edges={["top", "right", "left"]} /> */}
    </Provider>
  );
};

export default App;
