import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant.screen";

const isAndroid = Platform === "android";
export default function App() {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
