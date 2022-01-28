import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
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
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function DaftarObat() {
  const obat = [];
  for (let a = 1; a < 7; a++) {
    obat[a] = a + 1;
  }

  const [jumlah, setJumlah] = useState(0);

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
                    // padding: wp(5),
                    flexDirection: "row",
                    marginBottom: hp(3),
                  }}
                >
                  <Image
                    source={require("../../Assets/Icon/antalgin.jpg")}
                    style={{
                      height: hp(20),
                      width: wp(35),
                    }}
                  />
                  <View
                    style={{
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      width: wp(55),
                      height: hp(20),
                      backgroundColor: "#D1D5DB",
                      padding: wp(5),
                    }}
                  >
                    <View>
                      <Text style={{ fontSize: hp(2.5), color: COLOR.TEXT }}>
                        Obat Antalgin
                      </Text>
                    </View>
                    <Text style={{ fontSize: hp(3), color: COLOR.TEXT }}>
                      Kimia Farma
                    </Text>
                    <View style={{ flexDirection: "row", marginTop: hp(5) }}>
                      <Text style={{ fontWeight: "bold", marginRight: wp(1) }}>
                        Tersedia
                      </Text>
                      <Text>Rp.12.000</Text>
                    </View>
                    {/* <View
                      style={{
                        backgroundColor: "#D1D5DB",
                        width: wp(55),
                        height: hp(8),
                        alignSelf: "flex-end",
                        flexDirection: "row",
                        paddingTop: wp(3),
                        justifyContent: "space-around",
                        marginTop: hp(3),
                        left: wp(1),
                      }}
                    >
                      <Text style={{ fontSize: wp(5) }}>50 pcs</Text>
                      <View
                        style={{
                          backgroundColor: "#F0F3F6",
                          width: wp(23),
                          height: hp(4),
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "row",
                          borderRadius: hp(10),
                          elevation: 5,
                        }}
                      >
                        <TouchableOpacity
                          onPress={() => {
                            if (jumlah > 0) {
                              setJumlah(jumlah - 1);
                            }
                          }}
                          style={{
                            backgroundColor: "#CBDFE1",
                            width: wp(10),
                            height: hp(5),
                            borderRadius: hp(10),
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Text style={{ fontWeight: "bold", fontSize: hp(4) }}>
                            -
                          </Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp(2.5), fontWeight: "bold" }}>
                          {jumlah}
                        </Text>
                        <TouchableOpacity
                          onPress={() => setJumlah(jumlah + 1)}
                          style={{
                            backgroundColor: "#37B9C5",
                            width: wp(10),
                            height: hp(5),
                            borderRadius: hp(10),
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Text style={{ fontWeight: "bold", fontSize: hp(4) }}>
                            +
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity>
                        <Icon
                          name="shopping-cart"
                          size={hp(4.5)}
                          color={"#000000"}
                        />
                      </TouchableOpacity>
                    </View> */}
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
