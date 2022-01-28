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

  const [mobile, setMobile] = useState("");
  const [messasge, setMessage] = useState("");
  openWhatsApp = () => {
    let msg = this.state.message;
    let mobile = this.state.mobileNo;
    if (mobile) {
      if (msg) {
        let url =
          "whatsapp://send?text=" +
          this.state.message +
          "&phone=91" +
          this.state.mobile;
        Linking.openURL(url)
          .then((data) => {
            console.log("WhatsApp Opened successfully " + data);
          })
          .catch(() => {
            alert("Make sure WhatsApp installed on your device");
          });
      } else {
        alert("Please enter message to send");
      }
    } else {
      alert("Please enter mobile no");
    }
  };

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
            marginLeft: wp(15),
            fontWeight: "bold",
            fontSize: hp(2.5),
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
        }}
      >
        {/* TES */}
        <Text
          style={{ textAlign: "center", fontSize: 20, paddingVertical: 30 }}
        >
          Open WhatsApp chat box from React-native App
        </Text>

        <TextInput
          value={this.state.message}
          onChangeText={(message) => this.setState({ message })}
          placeholder={"Enter message"}
          multiline={true}
          style={{
            width: 255,
            height: 44,
            padding: 10,
            margin: 10,
            backgroundColor: "#FFF",
            borderColor: "#000",
            borderRadius: 0.5,
            borderWidth: 0.5,
          }}
        />

        <TextInput
          value={this.state.mobileNo}
          onChangeText={(mobileNo) => this.setState({ mobileNo })}
          placeholder={"Enter Mobile"}
          style={{
            width: 255,
            height: 44,
            padding: 10,
            margin: 10,
            backgroundColor: "#FFF",
            borderColor: "#000",
            borderRadius: 0.5,
            borderWidth: 0.5,
          }}
          keyboardType={"numeric"}
        />
        <View style={{ marginTop: 20 }}>
          <Button onPress={this.openWhatsApp} title="Open WhatsApp message" />
        </View>
        {/* TES */}
      </View>
    </View>
  );
}
