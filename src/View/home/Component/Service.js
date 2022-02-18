import { View, Text, Image } from "react-native";
import React from "react";
import { COLOR } from "../../../styles/color";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/core";

export default function Service() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: hp(1.5),
      }}
    >
      <TouchableOpacity
        style={{
          width: wp(28),
          height: hp(15),
          backgroundColor: COLOR.PRIMARY,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: wp(5),
          marginRight: wp(4),
        }}
        onPress={() => navigation.navigate("Consultation")}
      >
        <Image
          style={{ width: wp(20), height: hp(10) }}
          source={require("../../Assets/Icon/consulting.png")}
        />
        <Text style={{ color: "#fff" }}>Consultation</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: wp(28),
          height: hp(15),
          backgroundColor: COLOR.PRIMARY,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: wp(5),
          marginRight: wp(4),
        }}
        onPress={() => navigation.navigate("Pharmacist")}
      >
        <Image
          style={{ width: wp(20), height: hp(10) }}
          source={require("../../Assets/Icon/open.png")}
        />
        <Text style={{ color: "#fff" }}>Pharmacist</Text>
      </TouchableOpacity>
    </View>
  );
}
