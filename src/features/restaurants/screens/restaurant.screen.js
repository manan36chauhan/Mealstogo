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
      <Searchbar placeholder="Search" />
    </View>
    <View style={{ flex: 1, padding: 16, backgroundColor: "white" }}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});
