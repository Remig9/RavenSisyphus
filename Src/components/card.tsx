import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Colors, RF, RH, RW } from "../../Src/helper/constants";
import { AppIcons } from "../../Src/helper/appIcon";

export default function Card(props) {
  return (
    <View
      style={{
        width: RW(100),
        height: RH(15),
        backgroundColor:
          props.mode == "light" ? Colors.appWhite : Colors.appBlack,

        marginTop: RH(0.5),
      }}
    >
      <View
        style={{
          width: RW(100),
          height: RH(7),

          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: RW(60),
            height: RH(7),

            flexDirection: "row",
            paddingLeft: RW(5),
            paddingTop: RH(2),
          }}
        >
          <View>
            <Image
              source={AppIcons.group}
              style={{ height: RH(4), width: RW(12) }}
              resizeMode="contain"
            />
          </View>

          <TouchableOpacity style={{ marginLeft: RW(3) }}>
            <Text
              style={{
                fontSize: RF(20),
                color:
                  props.mode == "light" ? Colors.appBlack : Colors.appWhite,
                fontWeight: "bold",
              }}
            >
              BTC/USDT
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginLeft: RW(2) }}>
            <Image
              source={AppIcons.down}
              style={{ height: RH(3), width: RW(6) }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: RW(40),
            height: RH(7),

            flexDirection: "row",
            paddingTop: RH(2),
          }}
        >
          <Text
            style={{
              fontSize: RF(25),
              color: Colors.appTextGreen,
              fontWeight: "bold",
            }}
          >
            $20,634
          </Text>
        </View>
      </View>
      <View
        style={{
          height: RH(8),
          width: RW(100),
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: RW(32),
            height: RH(8),
            borderRightWidth: 0.2,
            borderColor: Colors.appLineColor,
            paddingLeft: RW(5),
            paddingTop: RH(1),
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={AppIcons.clock}
              style={{ height: RH(3), width: RW(6) }}
              resizeMode="contain"
            />

            <View style={{ marginLeft: RW(0.5), marginTop: RH(0.2) }}>
              <Text style={{ fontSize: RF(11), color: Colors.appTextGrey2 }}>
                24h change{" "}
              </Text>
            </View>
          </View>

          <View style={{ width: RW(32), marginTop: RH(0.4) }}>
            <Text
              style={{
                fontSize: RF(12),
                color: Colors.appTextGreen,
                fontWeight: "bold",
              }}
            >
              520.80 +1.25%
            </Text>
          </View>
        </View>

        <View
          style={{
            width: RW(32),
            height: RH(8),
            borderRightWidth: 0.2,
            borderColor: Colors.appLineColor,
            paddingLeft: RW(5),
            paddingTop: RH(1),
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={AppIcons.arrowUp}
              style={{ height: RH(3), width: RW(3) }}
              resizeMode="contain"
            />

            <View style={{ marginLeft: RW(0.5), marginTop: RH(0.2) }}>
              <Text style={{ fontSize: RF(11), color: Colors.appTextGrey2 }}>
                24h high
              </Text>
            </View>
          </View>

          <View style={{ width: RW(32), marginTop: RH(0.4) }}>
            <Text
              style={{
                fontSize: RF(12),
                color:
                  props.mode == "light" ? Colors.appBlack : Colors.appWhite,
                fontWeight: "bold",
              }}
            >
              520.80 +1.25%
            </Text>
          </View>
        </View>

        <View
          style={{
            width: RW(32),
            height: RH(8),
            borderColor: Colors.appLineColor,
            paddingLeft: RW(5),
            paddingTop: RH(1),
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={AppIcons.arrowDown}
              style={{ height: RH(3), width: RW(3) }}
              resizeMode="contain"
            />

            <View style={{ marginLeft: RW(0.5), marginTop: RH(0.2) }}>
              <Text style={{ fontSize: RF(11), color: Colors.appTextGrey2 }}>
                24h low
              </Text>
            </View>
          </View>

          <View style={{ width: RW(32), marginTop: RH(0.4) }}>
            <Text
              style={{
                fontSize: RF(12),
                color:
                  props.mode == "light" ? Colors.appBlack : Colors.appWhite,
                fontWeight: "bold",
              }}
            >
              520.80 +1.25%
            </Text>
          </View>
        </View>
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
