import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//screen const

const homeName = "Home";
const detailsName = "Details";
const settingName = "Settings";

const Tab = createBottomTabNavigator();
export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-out";
            } else if (rn === detailsName) {
              iconName = focused ? "List" : "List-out";
            } else if (rn === settingName) {
              iconName = focused ? "settings" : "settings-out";
            }
            return <Text>-----</Text>;
          },
        })}
      >
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={detailsName} component={Home} />
        <Tab.Screen name={settingName} component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
