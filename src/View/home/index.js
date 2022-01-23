import React from "react";
import { View, Text, Image } from "react-native";
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
import Information from "./Component/Information";
import Service from "./Component/Service";

export default function home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View
        style={{
          width: wp(100),
          height: hp(100),
          backgroundColor: COLOR.SECONDARY,
          padding: wp(5),
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("../../assets/icon.png")}
            style={{ width: wp(28), height: hp(5), borderRadius: hp(5) }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: hp(2.5),
            fontWeight: "bold",
            marginTop: hp(2),
            color: COLOR.TEXT,
          }}
        >
          Hello,
        </Text>
        <Text
          style={{ fontSize: hp(3), fontWeight: "bold", color: COLOR.TEXT }}
        >
          Welcome Back !
        </Text>
        <View>
          <View
            style={{
              alignSelf: "flex-start",
              marginTop: hp(3),
            }}
          >
            <Text
              style={{
                fontSize: hp(2),
                fontWeight: "bold",
                color: COLOR.TEXT,
                top: hp(1),
              }}
            >
              Our Information
            </Text>
          </View>
          <Information />
        </View>
        <View>
          <Text
            style={{ fontSize: hp(2), fontWeight: "bold", color: COLOR.TEXT }}
          >
            Our Service
          </Text>
          <Service />
        </View>
      </View>
    </SafeAreaView>
  );
}
