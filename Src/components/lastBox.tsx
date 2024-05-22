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
import Button from "./button";
import ButtonSell from "./buttonSell";

export default function LastBox(props) {
  const [active, setActive] = useState("Open");

  return (
    <View
      style={{
        width: RW(100),
        height: RH(50),
        backgroundColor:
          props.mode == "light" ? Colors.appWhite : Colors.appBlack,

        marginTop: RH(5),
        marginBottom: RH(1),
      }}
    >
      <View
        style={{
          height: RH(8),
          width: RW(95),
          marginLeft: RW(2.5),
          backgroundColor:
            props.mode == "light" ? Colors.lightBg : Colors.appTextBlack,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: RW(3),
          alignItems: "center",
          borderRadius: RR(10),
          marginTop: RH(2),
        }}
      >
        <TouchableOpacity
          style={{
            height: RH(6),
            paddingHorizontal: RW(5),
            borderRadius: RR(10),
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:
              (active == "Open") & (props.mode == "light")
                ? Colors.appWhite
                : (active == "Open") & (props.mode == "dark")
                ? Colors.buttonGrey
                : null,
          }}
          onPress={() => setActive("Open")}
        >
          <Text
            style={{
              color:
                props.mode == "light" ? Colors.appTextBlack : Colors.appWhite,
            }}
          >
            Open Orders
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: RH(6),
            paddingHorizontal: RW(5),
            borderRadius: RR(10),
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:
              (active == "Positions") & (props.mode == "light")
                ? Colors.appWhite
                : (active == "Positions") & (props.mode == "dark")
                ? Colors.buttonGrey
                : null,
          }}
          onPress={() => setActive("Positions")}
        >
          <Text
            style={{
              color:
                props.mode == "light" ? Colors.appTextBlack : Colors.appWhite,
            }}
          >
            Positions
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: RH(6),
            paddingHorizontal: RW(5),
            borderRadius: RR(10),
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:
              (active == "History") & (props.mode == "light")
                ? Colors.appWhite
                : (active == "History") & (props.mode == "dark")
                ? Colors.buttonGrey
                : null,
          }}
          onPress={() => setActive("History")}
        >
          <Text
            style={{
              color:
                props.mode == "light" ? Colors.appTextBlack : Colors.appWhite,
            }}
          >
            Order History
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: props.mode == "light" ? Colors.appBlack : Colors.appWhite,
            fontSize: RF(20),
            fontWeight: "bold",
          }}
        >
          No Open Orders
        </Text>
        <View
          style={{ width: RW(100), paddingHorizontal: RW(5), marginTop: RH(2) }}
        >
          <Text
            style={{
              color:
                props.mode == "light" ? Colors.appTextGrey : Colors.appWhite,
              fontSize: RF(12),
              textAlign: "center",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar
            nullam sit imperdiet pulvinar.
          </Text>
        </View>
      </View>
      <View
        style={{
          height: RH(7),
          width: RW(100),
          backgroundColor:
            props.mode == "light" ? Colors.appWhite : Colors.buttonGrey,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Button />
        <ButtonSell />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
