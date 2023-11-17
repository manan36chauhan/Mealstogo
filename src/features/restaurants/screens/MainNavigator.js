import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import App from "./App";
import SecondScreen from "./SecondScreen";
const stackNavigator = createNativeStackNavigator();

export default MainNavigator = () => {
  return (
    <NavigationContainer>
      <stackNavigator.Navigator>
        <stackNavigator.Screen name="first" component={App} />
        <stackNavigator.Screen name="Second" component={SecondScreen} />
      </stackNavigator.Navigator>
    </NavigationContainer>
  );
};
