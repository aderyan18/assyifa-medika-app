import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Image, Linking, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import Icon from "react-native-vector-icons/Ionicons";
import { COLOR } from "../../styles/color";
import { useNavigation } from "@react-navigation/core";

export default function Consultation() {
  const navigation = useNavigation();

  return (
    <View style={{ width: wp(100), height: hp(100) }}>
      <View
        style={{
          backgroundColor: COLOR.PRIMARY,
          width: wp(100),
          height: hp(20),
          padding: wp(5),
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginTop: hp(5) }}
        >
          <Icon name="arrow-back" size={hp(4)} color={COLOR.TEXT} />
        </TouchableOpacity>
        <Text
          style={{
            marginTop: hp(5),
            marginLeft: wp(15),
            fontWeight: "bold",
            fontSize: hp(2.5),
            color: COLOR.TEXT,
          }}
        >
          Layanan Konsultasi
        </Text>
      </View>
      <View
        style={{
          backgroundColor: COLOR.SECONDARY,
          width: wp(100),
          height: hp(90),
          borderTopRightRadius: wp(10),
          borderTopLeftRadius: wp(10),
          bottom: hp(5),
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: COLOR.PRIMARY,
            width: wp(80),
            height: hp(8),
            marginTop: hp(5),
            alignItems: "center",
            justifyContent: "center",
            borderRadius: wp(3),
          }}
        >
          <Text style={{ fontWeight: "bold" }}>
            Mengapa Obat Harus di Konsultasikan ?
          </Text>
        </View>
        <View
          style={{
            backgroundColor: COLOR.PRIMARY,
            width: wp(80),
            height: hp(7),
            marginTop: hp(2),
            alignItems: "flex-start",
            justifyContent: "center",
            borderRadius: wp(3),
          }}
        >
          <Text> 1. Obat memiliki berbagai macam dosis</Text>
        </View>
        <View
          style={{
            backgroundColor: COLOR.PRIMARY,
            width: wp(80),
            height: hp(7),
            marginTop: hp(2),
            alignItems: "flex-start",
            justifyContent: "center",
            borderRadius: wp(3),
          }}
        >
          <Text> 2. Obat memiliki efek samping</Text>
        </View>
        <View
          style={{
            backgroundColor: COLOR.PRIMARY,
            width: wp(80),
            height: hp(7),
            marginTop: hp(2),
            alignItems: "flex-start",
            justifyContent: "center",
            borderRadius: wp(3),
          }}
        >
          <Text> 3. Obat memiliki berbagai macam interaksi</Text>
        </View>
        <View
          style={{
            backgroundColor: COLOR.PRIMARY,
            width: wp(80),
            height: hp(7),
            marginTop: hp(2),
            alignItems: "flex-start",
            justifyContent: "center",
            borderRadius: wp(3),
          }}
        >
          <Text> 4. Obat memiliki cara pakai yang berbeda</Text>
        </View>
        <View
          style={{
            backgroundColor: COLOR.PRIMARY,
            width: wp(80),
            height: hp(7),
            marginTop: hp(2),
            alignItems: "flex-start",
            justifyContent: "center",
            borderRadius: wp(3),
          }}
        >
          <Text> 5. Obat bisa diganti dengan yang lebih murah</Text>
        </View>
      </View>
    </View>
  );
}
