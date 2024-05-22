import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import { Colors, RF, RH, RR, RW } from "../../Src/helper/constants";
import { AppIcons } from "../../Src/helper/appIcon";

export default function Button() {
  const [active, setActive] = useState("Open");

  return (
    <TouchableOpacity
      style={{
        height: RH(4),
        width: RW(45),
        backgroundColor: Colors.appButtonGreen,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RR(5),
      }}
    >
      <Text style={{ color: Colors.appWhite }}>Buy</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
