import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLOR } from "../../styles/color";
import { Divider, Button, Appbar, Avatar, Searchbar } from "react-native-paper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";

export default function obat() {
  const [pencarian, setPencarian] = useState(null);
  const _goBack = () => console.log("Went back");

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

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

  const searchPress = () => {
    fetch(`https://apotik.warungta.my.id/api/cari`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cari: pencarian,
      }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        setObat(res.data);
      });
  };
  // const [cari, setCari] = useState(search);
  // console.log("cari", cari);

  const [jumlah, setJumlah] = useState(0);

  return (
    <SafeAreaView>
      {/* header */}
      <Appbar.Header
        statusBarHeight={2}
        style={{ backgroundColor: COLOR.PRIMARY }}
      >
        <TouchableOpacity>
          <Image
            source={require("../../assets/icon.png")}
            style={{
              width: wp(28),
              height: hp(5),
              borderRadius: hp(5),
              marginLeft: wp(5),
            }}
          />
        </TouchableOpacity>
        {/* <View style={{ alignSelf: "center" }}>
          <Text>Medicine</Text>
        </View> */}
      </Appbar.Header>
      {/* /header */}
      {/* SearchBar */}
      <View
        style={{
          width: wp(100),
          height: hp(5),
          alignSelf: "center",
          alignItems: "center",
          backgroundColor: COLOR.SECONDARY,
        }}
      >
        <Text
          style={{
            fontSize: wp(5),
            fontWeight: "bold",
            color: COLOR.TEXT,
            marginTop: hp(1),
          }}
        >
          Daftar Obat
        </Text>
      </View>
      <View
        style={{
          backgroundColor: COLOR.SECONDARY,
          width: wp(100),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Searchbar
            placeholder="Search"
            onChangeText={(text) => setPencarian(text)}
            value={pencarian}
            style={{
              Color: COLOR.SECONDARY,
              width: wp(70),
              alignSelf: "center",
              top: hp(1),
              borderWidth: 1,
              borderColor: COLOR.PRIMARY,
            }}
          />
          <TouchableOpacity
            style={{
              width: wp(20),
              height: hp(7),
              backgroundColor: COLOR.PRIMARY,
              marginTop: hp(2),
              borderRadius: wp(3),
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={searchPress}
          >
            <Image
              style={{
                width: wp(6),
                height: hp(3),
              }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/149/149852.png",
              }}
            />
          </TouchableOpacity>
        </View>
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
              {obat?.length == 0 ? (
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: hp(25),
                  }}
                >
                  <Image
                    style={{ width: wp(30), height: hp(15) }}
                    source={require("./component/Icon/drugs.png")}
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: hp(3),
                      // top: hp(1),
                    }}
                  >
                    obat belum tersedia
                  </Text>
                </View>
              ) : (
                <></>
              )}

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
                      <TouchableOpacity
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
                        <View
                          style={{ flexDirection: "row", marginTop: hp(2) }}
                        >
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
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
