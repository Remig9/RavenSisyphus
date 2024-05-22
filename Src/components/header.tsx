import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Colors, RH, RW } from "../../Src/helper/constants";
import { AppIcons } from "../../Src/helper/appIcon";

export default function Header(props) {
  return (
    <View
      style={{
        width: RW(100),
        height: RH(10),
        backgroundColor:
          props.mode == "dark" ? Colors.appBlack : Colors.appWhite,
        flexDirection: "row",
        marginTop: RH(5),
      }}
    >
      <View
        style={{
          width: RW(60),
          height: RH(10),
          justifyContent: "center",
          paddingLeft: RW(5),
          paddingTop: RH(3),
        }}
      >
        {props.mode == "dark" ? (
          <Image
            source={AppIcons.appLogo}
            style={{ height: RH(5), width: RW(35) }}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={AppIcons.appLogo2}
            style={{ height: RH(5), width: RW(35) }}
            resizeMode="contain"
          />
        )}
      </View>

      <View
        style={{
          width: RW(40),
          height: RH(10),
          paddingTop: RH(3),
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: RW(1),
          paddingRight: RW(3),
        }}
      >
        <TouchableOpacity>
          <Image
            source={AppIcons.user}
            style={{ height: RH(7), width: RW(10) }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={AppIcons.globe}
            style={{ height: RH(7), width: RW(8), marginTop: RH(0) }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={props.onPress}>
          <Image
            source={AppIcons.tools}
            style={{ height: RH(7), width: RW(10) }}
            resizeMode="contain"
          />
        </TouchableOpacity>
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
