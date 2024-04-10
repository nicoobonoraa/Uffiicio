import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from "react-native";
import Main from "./screens/Main/Main";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const Stack = createNativeStackNavigator()

const App = () => {
  return(
    <Provider store={store}>
      <NavigationContainer >
        <Main></Main>
      </NavigationContainer>
    </Provider>
  )
}

export default App;