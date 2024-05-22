import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors, RF, RH, RR, RW } from "./Src/helper/constants";
import { AppIcons } from "./Src/helper/appIcon";
import Header from "./Src/components/header";
import Card from "./Src/components/card";
import ChartsBox from "./Src/components/chartsBox";
import LastBox from "./Src/components/lastBox";
import SwipeUpDownModal from "react-native-swipe-modal-up-down";

export default function App() {
  const [animateModal, setAnimateModal] = useState(true);
  const [menuModal, setMenuModal] = useState(false);
  const [walletModal, setWalletModal] = useState(false);
  const [action, setAction] = useState("Buy");
  const [type, setType] = useState("Limit");
  const [mode, setMode] = useState("dark");

  const modeFunction = () => {
    if (mode == "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
    setMenuModal(false);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: mode == "dark" ? "#262932" : Colors.appWhite,
      }}
    >
      <Header onPress={() => setMenuModal(true)} mode={mode} />
      <ScrollView>
        <Card mode={mode} />
        <ChartsBox mode={mode} />

        <LastBox mode={mode} />
      </ScrollView>
      <SwipeUpDownModal
        modalVisible={menuModal}
        PressToanimate={animateModal}
        ContentModal={
          <View
            style={{
              height: RH(33),
              width: RW(50),
              marginLeft: RW(48),
              backgroundColor:
                mode == "dark" ? Colors.appBlack : Colors.appWhite,
              marginTop: RH(0.9),
              borderRadius: 8,
              alignItems: "center",
              borderWidth: 1,
              borderColor: Colors.borderColor,
            }}
          >
            <TouchableOpacity
              style={{
                height: RH(6),
                width: RW(50),

                justifyContent: "center",
                paddingLeft: RW(4),
                marginTop: RH(1),
              }}
            >
              <Text
                style={{
                  color: mode == "dark" ? Colors.appWhite : Colors.appBlack,
                  fontWeight: 500,
                }}
              >
                Exchange
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: RH(6),
                width: RW(50),

                justifyContent: "center",
                paddingLeft: RW(4),
              }}
              onPress={() => {
                setMenuModal(false), setWalletModal(true);
              }}
            >
              <Text
                style={{
                  color: mode == "dark" ? Colors.appWhite : Colors.appBlack,
                  fontWeight: 500,
                }}
              >
                Wallets
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: RH(6),
                width: RW(50),

                justifyContent: "center",
                paddingLeft: RW(4),
              }}
            >
              <Text
                style={{
                  color: mode == "dark" ? Colors.appWhite : Colors.appBlack,
                  fontWeight: 500,
                }}
              >
                Roqqu Hub
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: RH(6),
                width: RW(50),

                justifyContent: "center",
                paddingLeft: RW(4),
              }}
              onPress={() => modeFunction()}
            >
              <Text
                style={{
                  color: mode == "dark" ? Colors.appWhite : Colors.appBlack,
                  fontWeight: 500,
                }}
              >
                Mode
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: RH(6),
                width: RW(50),

                justifyContent: "center",
                paddingLeft: RW(4),
              }}
              onPress={() => setMenuModal(false)}
            >
              <Text
                style={{
                  color: mode == "dark" ? Colors.appWhite : Colors.appBlack,
                  fontWeight: 500,
                }}
              >
                Log out
              </Text>
            </TouchableOpacity>
          </View>
        }
        ContentModalStyle={styles.Modal}
        onClose={() => {
          setMenuModal(false);
          setAnimateModal(false);
        }}
      />

      <SwipeUpDownModal
        modalVisible={walletModal}
        PressToanimate={animateModal}
        ContentModal={
          <View
            style={{
              height: RH(105),
              width: RW(100),
              backgroundColor:
                mode == "dark" ? Colors.buttonGrey : Colors.appWhite,
              marginTop: RH(0),
              borderRadius: RR(20),
              alignItems: "center",
            }}
          >
            <ScrollView>
              <View
                style={{
                  width: RW(90),
                  height: RH(6),
                  backgroundColor:
                    mode == "dark" ? Colors.appBlack : Colors.appWhite,
                  marginTop: RH(2),
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: RW(0),
                  borderRadius: RR(10),
                }}
              >
                <TouchableOpacity
                  style={{
                    width: RW(45),
                    height: RH(5),
                    backgroundColor:
                      action == "Buy" ? Colors.modalDarkBg : null,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: RR(10),
                    borderWidth: action == "Buy" ? 1 : 0,
                    borderColor: Colors.appButtonGreen,
                  }}
                  onPress={() => setAction("Buy")}
                >
                  <Text style={{ color: Colors.appWhite }}>Buy</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    width: RW(45),
                    height: RH(5),
                    backgroundColor:
                      action == "Sell" ? Colors.modalDarkBg : null,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: RR(10),
                    borderWidth: action == "Sell" ? 1 : 0,
                    borderColor: Colors.appButtonGreen,
                  }}
                  onPress={() => setAction("Sell")}
                >
                  <Text style={{ color: Colors.appWhite }}>Sell</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: RW(90),
                  height: RH(6),
                  marginTop: RH(2),
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: RW(0),
                  borderRadius: RR(10),
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: RW(25),
                    height: RH(5),
                    backgroundColor:
                      type == "Limit" ? Colors.frameActiveColor : null,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: RR(10),
                  }}
                  onPress={() => setType("Limit")}
                >
                  <Text style={{ color: Colors.appWhite }}>Limit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    width: RW(25),
                    height: RH(5),
                    backgroundColor:
                      type == "Market" ? Colors.frameActiveColor : null,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: RR(10),
                  }}
                  onPress={() => setType("Market")}
                >
                  <Text style={{ color: Colors.appWhite }}>Market</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    width: RW(25),
                    height: RH(5),
                    backgroundColor:
                      type == "Stop-Limit" ? Colors.frameActiveColor : null,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: RR(10),
                  }}
                  onPress={() => setType("Stop-Limit")}
                >
                  <Text style={{ color: Colors.appWhite }}>Stop-Limit</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  height: RH(20),
                  width: RW(90),
                }}
              >
                <View
                  style={{
                    height: RH(7),
                    width: RW(90),
                    marginTop: RH(0.5),
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderWidth: 1,
                    borderColor: "#373B3F",
                    borderRadius: RR(5),
                    paddingHorizontal: RW(2),
                  }}
                >
                  <View>
                    <Text style={{ color: Colors.appTextGrey2 }}>
                      Limit price
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: Colors.appTextGrey2 }}>0.00 USD</Text>
                  </View>
                </View>

                <View
                  style={{
                    height: RH(7),
                    width: RW(90),
                    marginTop: RH(1.5),
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderWidth: 1,
                    borderColor: "#373B3F",
                    borderRadius: RR(5),
                    paddingHorizontal: RW(2),
                  }}
                >
                  <View>
                    <Text style={{ color: Colors.appTextGrey2 }}>Amount</Text>
                  </View>
                  <View>
                    <Text style={{ color: Colors.appTextGrey2 }}>0.00 USD</Text>
                  </View>
                </View>

                <View
                  style={{
                    height: RH(7),
                    width: RW(90),
                    marginTop: RH(1.5),
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderWidth: 1,
                    borderColor: "#373B3F",
                    borderRadius: RR(5),
                    paddingHorizontal: RW(2),
                  }}
                >
                  <View>
                    <Text style={{ color: Colors.appTextGrey2 }}>Type</Text>
                  </View>
                  <View>
                    <Text style={{ color: Colors.appTextGrey2 }}>
                      Good till cancelled
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  height: RH(5),
                  width: RW(90),

                  marginTop: RH(5.5),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={{ color: Colors.appTextGrey2 }}>Post Only</Text>
                </View>
                <View></View>
              </View>
              <View
                style={{
                  height: RH(5),
                  width: RW(90),

                  marginTop: RH(0.5),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={{ color: Colors.appTextGrey2 }}>Total</Text>
                </View>
                <View>
                  <Text style={{ color: Colors.appTextGrey2 }}>0.00</Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  width: RW(90),

                  height: RH(6),
                  backgroundColor: "#483BEB",
                  borderRadius: RR(7),
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: RH(1),
                }}
              >
                <Text style={{ color: Colors.appWhite }}>Buy BTC</Text>
              </TouchableOpacity>
              <View
                style={{
                  height: RH(0.4),
                  width: RW(90),
                  backgroundColor: "#394047",
                  marginTop: RH(3),
                }}
              />
              <View
                style={{
                  height: RH(5),
                  width: RW(90),

                  marginTop: RH(2),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{ color: Colors.appTextGrey2, fontWeight: "bold" }}
                  >
                    Total account value
                  </Text>
                  <View style={{ marginTop: RH(0.5) }}>
                    <Text
                      style={{
                        color:
                          mode == "dark" ? Colors.appWhite : Colors.appBlack,
                        fontSize: RF(15),
                        fontWeight: "bold",
                      }}
                    >
                      0.00
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{ color: Colors.appTextGrey2, fontWeight: "bold" }}
                  >
                    NGN
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: RH(5),
                  width: RW(90),

                  marginTop: RH(4),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{ color: Colors.appTextGrey2, fontWeight: "bold" }}
                  >
                    Open Orders
                  </Text>
                  <View style={{ marginTop: RH(0.5) }}>
                    <Text
                      style={{
                        color:
                          mode == "dark" ? Colors.appWhite : Colors.appBlack,
                        fontSize: RF(15),
                        fontWeight: "bold",
                      }}
                    >
                      0.00
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{ color: Colors.appTextGrey2, fontWeight: "bold" }}
                  >
                    Available
                  </Text>
                  <View style={{ marginTop: RH(0.5) }}>
                    <Text
                      style={{
                        color:
                          mode == "dark" ? Colors.appWhite : Colors.appBlack,
                        fontSize: RF(15),
                        fontWeight: "bold",
                      }}
                    >
                      0.00
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  width: RW(30),

                  height: RH(6),
                  backgroundColor: "#2764FF",
                  borderRadius: RR(7),
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: RH(3),
                }}
              >
                <Text style={{ color: Colors.appWhite, fontWeight: "bold" }}>
                  Deposit
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        }
        ContentModalStyle={styles.Modal}
        onClose={() => {
          setWalletModal(false);
          setAnimateModal(false);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262932",
  },
  Modal: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
