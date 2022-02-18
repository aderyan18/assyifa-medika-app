import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Image, Linking, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { COLOR } from "../../styles/color";
import { useNavigation } from "@react-navigation/core";

export default function Pharmacist() {
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
          <Icon name="arrow-back" size={hp(4)} color={"black"} />
        </TouchableOpacity>
        <Text
          style={{
            marginTop: hp(5),
            marginLeft: wp(19),
            fontWeight: "bold",
            fontSize: hp(2.5),
          }}
        >
          Jam Operasional
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
        }}
      >
        {/* content jam buka start */}
        <View
          style={{
            backgroundColor: "#FFF",
            width: wp(90),
            height: hp(20),
            alignSelf: "center",
            marginTop: hp(5),
            borderRadius: wp(5),
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: hp(3),
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            (Jam Buka)
          </Text>
          <View
            style={{
              backgroundColor: COLOR.PRIMARY,
              width: wp(80),
              height: hp(15),
              alignSelf: "center",
              borderRadius: wp(4),
            }}
          >
            <Text style={{ textAlign: "center", fontSize: hp(3) }}>
              Senin - Minggu
            </Text>
            <Text
              style={{
                textAlign: "center",
                marginTop: hp(2),
                fontSize: hp(3.5),
              }}
            >
              Pukul 07.00 WITA
            </Text>
          </View>
        </View>
        {/* content jam buka end */}
        <View
          style={{
            backgroundColor: "#FFF",
            width: wp(90),
            height: hp(20),
            alignSelf: "center",
            marginTop: hp(5),
            borderRadius: wp(5),
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: hp(3),
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            (Jam Tutup)
          </Text>
          <View
            style={{
              backgroundColor: COLOR.PRIMARY,
              width: wp(80),
              height: hp(15),
              alignSelf: "center",
              borderRadius: wp(4),
            }}
          >
            <Text style={{ textAlign: "center", fontSize: hp(3) }}>
              Senin - Minggu
            </Text>
            <Text
              style={{
                textAlign: "center",
                marginTop: hp(2),
                fontSize: hp(3.5),
              }}
            >
              Pukul 00.00 WITA
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
