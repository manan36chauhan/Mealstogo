import React from "react";
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info-component";
export const RestaurantScreen = () => (
  <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
    <View style={styles.container}>
      {/* <Text>Search</Text> */}
      <Searchbar placeholder="Search" />
    </View>
    <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});
