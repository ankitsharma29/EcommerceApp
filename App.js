import { React, useEffect } from "react";
import SplashScreenA from "react-native-splash-screen";
import { Provider } from "react-redux";
import SafeAreaComponent from "./src/screens/SafeAreaComponent";
import store from "./src/store/store";
const App = () => {
  useEffect(() => {
    SplashScreenA.hide();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaComponent edges={["top", "right", "left"]} />
    </Provider>
  );
};

export default App;
