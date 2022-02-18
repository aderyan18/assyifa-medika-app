import React from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLOR } from "../../styles/color";
import { Divider, Button, Appbar, Avatar } from "react-native-paper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function obat() {
  return (
    <SafeAreaView>
      {/* header */}
      <Appbar.Header
        statusBarHeight={5}
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
      </Appbar.Header>
      {/* /header */}
      <View
        style={{
          backgroundColor: COLOR.SECONDARY,
          width: wp(100),
          height: hp(100),
          padding: wp(5),
        }}
      >
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: hp(3),
              color: COLOR.TEXT,
            }}
          >
            Assyifa Medika
          </Text>
          <View
            style={{
              height: hp(10),
              width: wp(90),
              backgroundColor: COLOR.PRIMARY,
              justifyContent: "center",
              padding: hp(1),
              borderRadius: wp(5),
            }}
          >
            <Text style={{ color: "#FFF" }}>
              Jl. Perintis Kemerdekaan, Tamalanrea, Kec. Tamalanrea, Kota
              Makassar, Sulawesi Selatan 90245, Indonesia
            </Text>
          </View>
          <View
            style={{
              width: wp(90),
              height: hp(57),
              backgroundColor: "#FFF",
              marginTop: hp(3),
              borderRadius: wp(5),
            }}
          >
            <Text
              style={{
                marginLeft: wp(3),
                marginTop: hp(2),
                fontWeight: "bold",
                fontSize: hp(3),
                marginBottom: hp(1),
                color: COLOR.TEXT,
              }}
            >
              Lokasi
            </Text>
            <TouchableOpacity
              // onPress={Linking.openURL(
              //   "https://www.google.co.id/maps/place/Apotek+Assyifa+Medika/@-5.1358023,119.4943984,17z/data=!3m1!4b1!4m5!3m4!1s0x2dbefcb2523d1479:0xdffb25d5538e12fd!8m2!3d-5.1358872!4d119.4965157"
              // )}
              onPress={() =>
                Linking.openURL(
                  "https://www.google.co.id/maps/place/Apotek+Assyifa+Medika/@-5.1358023,119.4943984,17z/data=!3m1!4b1!4m5!3m4!1s0x2dbefcb2523d1479:0xdffb25d5538e12fd!8m2!3d-5.1358872!4d119.4965157"
                )
              }
              style={{
                backgroundColor: COLOR.SECONDARY,
                width: wp(30),
                height: hp(5),
                justifyContent: "center",
                alignItems: "center",
                borderRadius: wp(3),
                marginLeft: wp(5),
              }}
            >
              <Text>Lihat Lokasi</Text>
            </TouchableOpacity>
            <Image
              source={require("../../assets/tes.png")}
              style={{
                position: "relative",
                width: wp(80),
                height: hp(40),
                alignSelf: "center",
                marginTop: hp(2),
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
