import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLOR } from "../../../styles/color";
import {
  Divider,
  Button,
  Appbar,
  Avatar,
  Searchbar,
  IconButton,
} from "react-native-paper";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-vector-icons/FontAwesome";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function DaftarObat() {
  const obat = [];
  for (let a = 1; a < 2; a++) {
    obat[a] = a + 1;
  }

  return (
    <View
      style={{
        backgroundColor: COLOR.SECONDARY,
        width: wp(100),
        height: hp(100),
        top: hp(3),
      }}
    >
      <View
        style={{
          width: wp(90),
          height: hp(5),
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: wp(5), fontWeight: "bold" }}>Daftar Obat</Text>
      </View>
      <View
        style={{
          width: wp(90),
          height: hp(70),
          backgroundColor: COLOR.SECONDARY,
          alignSelf: "center",
        }}
      >
        <ScrollView>
          {obat.map((item, index) => {
            return (
              <View
                style={{
                  justifyContent: "space-between",
                }}
                key={index}
              >
                <View
                  style={{
                    width: wp(100),
                    height: hp(20),
                    backgroundColor: "#ADB3BC",
                    padding: wp(5),
                    flexDirection: "row",
                    // marginBottom: hp(10),
                    // alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../../../assets/antalgin.jpg")}
                    style={{
                      height: hp(15),
                      width: wp(30),
                    }}
                  />
                  <View
                    style={{
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      width: wp(50),
                      height: hp(15),
                      backgroundColor: "red",
                      padding: wp(3),
                    }}
                  >
                    <Text style={{ fontSize: wp(5) }}>Antalgin</Text>
                    <View
                      style={{
                        backgroundColor: "blue",
                        width: wp(45),
                        height: hp(8),
                        alignSelf: "flex-end",
                        flexDirection: "row",
                        paddingTop: wp(3),
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          backgroundColor: "green",
                          width: wp(10),
                          height: hp(5),
                          borderRadius: hp(10),
                        }}
                      ></TouchableOpacity>
                      <View
                        style={{
                          backgroundColor: "white",
                          width: wp(10),
                          height: hp(5),
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text style={{ fontSize: hp(3) }}>1</Text>
                      </View>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "aqua",
                          width: wp(10),
                          height: hp(5),
                          borderRadius: hp(10),
                        }}
                      ></TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
