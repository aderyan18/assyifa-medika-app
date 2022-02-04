import React, { useState, useEffect } from "react";
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

export default function DaftarObat(search) {
  const [obat, setObat] = useState(null);
  const getObat = async () => {
    await fetch(`https://apotik.warungta.my.id/api/obat`, {
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        console.log("resss", resp.data);
        setObat(resp.data);
        // var meta = JSON.stringify(resp.meta);
        // meta = JSON.parse(meta);
      });
  };
  useEffect(() => {
    getObat();
  }, []);

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
          {obat?.map((index) => {
            return (
              <View
                style={{
                  justifyContent: "space-between",
                }}
                key={index.id}
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
                    source={{
                      uri: `https://apotik.warungta.my.id/gambar/obat/${index.gambar}`,
                    }}
                    style={{
                      height: hp(20),
                      width: wp(35),
                      borderTopLeftRadius: wp(5),
                      borderBottomLeftRadius: wp(5),
                    }}
                  />
                  <View
                    style={{
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      width: wp(55),
                      height: hp(20),
                      backgroundColor: COLOR.PRIMARY,
                      padding: wp(5),
                      borderTopRightRadius: wp(5),
                      borderBottomRightRadius: wp(5),
                    }}
                  >
                    {/* header content start */}
                    <View
                      style={{
                        width: wp(40),
                        height: hp(4.5),
                        backgroundColor: "#c0c0c0",
                        alignItems: "center",
                        borderRadius: wp(3),
                      }}
                    >
                      <Text style={{ fontSize: hp(2.5), color: "#FFF" }}>
                        Assyifa Medika
                      </Text>
                    </View>
                    {/* header content end */}
                    <Text
                      style={{
                        fontSize: hp(2.5),
                        color: "#FFF",
                        marginTop: hp(1),
                      }}
                    >
                      {index.nama}
                    </Text>
                    {/* SATUAN START */}
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ fontSize: hp(2.5), color: "#FFF" }}>
                        {index.stok}
                      </Text>
                      <Text
                        style={{
                          fontSize: hp(2.5),
                          marginLeft: wp(2),
                          color: "#FFF",
                        }}
                      >
                        {index.satuan}
                      </Text>
                    </View>
                    {/* SATUAN END */}

                    {/* HARGA START */}
                    <View style={{ flexDirection: "row", marginTop: hp(2) }}>
                      <Text
                        style={{
                          fontWeight: "bold",
                          marginRight: wp(1),
                          color: "#FFF",
                        }}
                      >
                        Harga
                      </Text>
                      <Text style={{ color: "#FFF" }}>
                        Rp. {index.harga.toLocaleString()}
                      </Text>
                    </View>
                    {/* HARGA END */}
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
