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
import { Dropdown } from "react-native-element-dropdown";
// import { CandlestickChart } from "react-native-wagmi-charts";
import { Orderbook } from "@lightfin/react-native";
const baseTickSize = 0.01; // Binance BTCBUSD ticksize
const tickSizes = [
  baseTickSize,
  baseTickSize * 5,
  baseTickSize * 10,
  baseTickSize * 50,
  baseTickSize * 100,
];
export default function ChartsBox(props) {
  const [active, setActive] = useState("Charts");
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const { bids, asks } = useBinanceOrderbook("BTCBUSD");
  const [tickSize, setTickSize] = useState(baseTickSize);

  const data1 = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "10", value: "10" },
  ];

  const data3 = [
    {
      timestamp: 1625945400000,
      value: 33575.25,
    },
    {
      timestamp: 1625946300000,
      value: 33545.25,
    },
    {
      timestamp: 1625947200000,
      value: 33510.25,
    },
    {
      timestamp: 1625948100000,
      value: 33215.25,
    },
  ];

  const data = [
    {
      name: "Time",
      id: 1,
    },
    {
      name: "1H",
      id: 2,
    },
    {
      name: "2H",
      id: 3,
    },
    {
      name: "4H",
      id: 4,
    },
    {
      name: "1D",
      id: 5,
    },
    {
      name: "1W",
      id: 6,
    },
    {
      name: "1M",
      id: 7,
    },
  ];
  const [selected, setSelected] = useState("frame1");
  return (
    <View
      style={{
        width: RW(100),
        height: RH(70),
        backgroundColor:
          props.mode == "light" ? Colors.appWhite : Colors.appBlack,
        marginTop: RH(2),
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
            borderRadius: RR(8),
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:
              (active == "Charts") & (props.mode == "light")
                ? Colors.appWhite
                : (active == "Charts") & (props.mode == "light")
                ? Colors.buttonGrey
                : null,
          }}
          onPress={() => setActive("Charts")}
        >
          <Text
            style={{
              color:
                props.mode == "light" ? Colors.appTextBlack : Colors.appWhite,
            }}
          >
            Charts
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: RH(6),
            paddingHorizontal: RW(5),
            borderRadius: RR(8),
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:
              (active == "Orderbook") & (props.mode == "light")
                ? Colors.appWhite
                : (active == "Orderbook") & (props.mode == "light")
                ? Colors.buttonGrey
                : null,
          }}
          onPress={() => setActive("Orderbook")}
        >
          <Text
            style={{
              color:
                props.mode == "light" ? Colors.appTextBlack : Colors.appWhite,
            }}
          >
            Orderbook
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: RH(6),
            paddingHorizontal: RW(5),
            borderRadius: RR(8),
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:
              (active == "Recent") & (props.mode == "light")
                ? Colors.appWhite
                : (active == "Recent") & (props.mode == "light")
                ? Colors.buttonGrey
                : null,
          }}
          onPress={() => setActive("Recent")}
        >
          <Text
            style={{
              color:
                props.mode == "light" ? Colors.appTextBlack : Colors.appWhite,
            }}
          >
            Recent trades
          </Text>
        </TouchableOpacity>
      </View>
      {active == "Charts" ? (
        <View>
          <View
            style={{
              width: RW(100),
              height: RH(5),

              marginTop: RH(2),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <FlatList
              data={data}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index, separators }) => (
                <TouchableOpacity
                  style={{
                    paddingHorizontal: RW(5),
                    backgroundColor:
                      (item.id == 5) & (props.mode == "dark")
                        ? Colors.buttonActiveGrey
                        : (item.id == 5) & (props.mode == "light")
                        ? Colors.appActiveGrey
                        : null,
                    height: RH(3),
                    borderRadius: RR(10),
                  }}
                >
                  <Text style={{ color: Colors.appTextGrey2 }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <View
            style={{
              width: RW(100),
              height: RH(10),

              marginTop: RH(2),
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 0.3,
              borderColor: Colors.appTextGrey2,
              paddingLeft: RW(5),
            }}
          >
            <TouchableOpacity
              style={{
                paddingHorizontal: RW(3),
                backgroundColor:
                  props.mode == "light"
                    ? Colors.appActiveGrey
                    : Colors.buttonActiveGrey,
                height: RH(4),
                borderRadius: RR(10),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: Colors.appTextGrey2 }}>Trading view</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                paddingHorizontal: RW(3),

                height: RH(3),
                borderRadius: RR(10),
                marginLeft: RW(2),
              }}
            >
              <Text style={{ color: Colors.appTextGrey2 }}>Depth</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                paddingHorizontal: RW(3),

                height: RH(3),
                borderRadius: RR(10),
                marginLeft: RW(2),
              }}
            >
              <Image
                source={AppIcons.expand}
                style={{ height: RH(3), width: RW(7) }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: RH(30),
              width: RW(90),
              borderWidth: 1,
              marginLeft: RW(5),
              marginTop: RH(5),
            }}
          >
            {/* <CandlestickChart.Provider data={data3}>
              <CandlestickChart>
                <CandlestickChart.Candles />
                <CandlestickChart.Crosshair />
              </CandlestickChart>
            </CandlestickChart.Provider> */}
          </View>
        </View>
      ) : (
        <View>
          <View
            style={{
              width: RW(100),
              height: RH(7),

              marginTop: RH(2),
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: RW(40),
                height: RH(7),

                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: RW(5),
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor:
                    (selected == "frame1") & (props.mode == "light")
                      ? Colors.appActiveGrey
                      : (selected == "frame1") & (props.mode == "dark")
                      ? Colors.frameActiveColor
                      : null,
                  paddingHorizontal: 7,
                  paddingVertical: 7,
                  borderRadius: 5,
                }}
                onPress={() => setSelected("frame1")}
              >
                <Image
                  source={AppIcons.frame1}
                  style={{ height: RH(3), width: RW(5) }}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor:
                    (selected == "frame2") & (props.mode == "light")
                      ? Colors.appActiveGrey
                      : (selected == "frame2") & (props.mode == "dark")
                      ? Colors.frameActiveColor
                      : null,
                  paddingHorizontal: 7,
                  paddingVertical: 7,
                  borderRadius: 5,
                }}
                onPress={() => setSelected("frame2")}
              >
                <Image
                  source={AppIcons.frame2}
                  style={{ height: RH(3), width: RW(5) }}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor:
                    (selected == "frame3") & (props.mode == "light")
                      ? Colors.appActiveGrey
                      : (selected == "frame3") & (props.mode == "dark")
                      ? Colors.frameActiveColor
                      : null,
                  paddingHorizontal: 7,
                  paddingVertical: 7,
                  borderRadius: 5,
                }}
                onPress={() => setSelected("frame3")}
              >
                <Image
                  source={AppIcons.frame3}
                  style={{ height: RH(3), width: RW(5) }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: RW(20),
                height: RH(6),
                marginRight: RW(5),
              }}
            >
              <Dropdown
                style={[
                  {
                    margin: 0,
                    height: RH(5.5),
                    backgroundColor:
                      props.mode == "light"
                        ? Colors.appActiveGrey
                        : Colors.buttonGrey,
                    borderRadius: 5,
                    paddingHorizontal: 10,
                    marginTop: 4,
                  },
                  isFocus && { borderColor: "blue" },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                data={data1}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "10" : "10"}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </View>
          <View>
            <Orderbook
              bids={bids}
              asks={asks}
              aggregation={{
                baseTickSize,
                tickSizes,
                tickSize,
                onTickSizeChange: setTickSize,
              }}
              sizeLabel="Size (BTC)"
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    margin: 0,
    height: RH(5.5),
    backgroundColor: Colors.buttonGrey,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 4,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#507184",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "#507184",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: "#507184",
  },
});
