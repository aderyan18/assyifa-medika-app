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
import { COLOR } from "../../../styles/color";
import { useNavigation } from "@react-navigation/core";

export default function Information() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: wp(100),
        height: hp(28),
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Swiper
        showButtons={true}
        // loop={true}
        // autoplay={true}
        // autoplayTimeout={3}
      >
        {/* slide 1 */}
        <TouchableOpacity>
          <View
            style={{
              width: wp(80),
              height: hp(20),
              backgroundColor: COLOR.PRIMARY,
              alignSelf: "center",
              marginTop: hp(2),
              borderRadius: wp(5),
              justifyContent: "space-between",
              flexDirection: "row",
              right: wp(4),
            }}
          >
            <View
              style={{
                flexDirection: "column",
                paddingTop: hp(3),
                paddingLeft: hp(3),
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: hp(3),
                }}
              >
                Stay Home !
              </Text>
              <Text style={{ fontSize: hp(2), color: "#fff" }}>
                schedule your plans
              </Text>
              <Text style={{ fontSize: hp(2), color: "#fff" }}>
                and discuss to do
              </Text>
              <Text style={{ fontSize: hp(2), color: "#fff" }}>
                the vaccine stage with a doctor
              </Text>
            </View>
            <Image
              source={require("../../../assets/information.png")}
              style={{
                width: wp(22),
                height: hp(15),
                alignSelf: "flex-end",
                borderBottomLeftRadius: hp(5),
                borderBottomRightRadius: hp(5),
              }}
            />
          </View>
        </TouchableOpacity>

        {/* slide2 */}
        <View
          style={{
            width: wp(80),
            height: hp(20),
            backgroundColor: "#fff",
            alignSelf: "center",
            marginTop: hp(2),
            borderRadius: wp(5),
            justifyContent: "space-between",
            right: wp(4),
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../../../assets/virus.png")}
            style={{
              width: wp(35),
              height: hp(15),
              alignSelf: "center",
            }}
          />
          <View
            style={{
              flexDirection: "column",
              paddingTop: hp(2),
              paddingRight: hp(3),
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: hp(3),
              }}
            >
              Covid-19
            </Text>
            <Text style={{ fontSize: hp(2) }}>News & Information</Text>
            <Text style={{ fontSize: hp(2) }}>About Covid-19 Vaccine</Text>
            <TouchableOpacity
              style={{
                width: wp(35),
                height: hp(6),
                backgroundColor: COLOR.PRIMARY,
                marginTop: hp(2),
                borderRadius: hp(5),
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("DetailCovid")}
            >
              <Text style={{ fontSize: hp(2), fontWeight: "bold" }}>
                Learn More
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* slide 3 */}
        <View
          style={{
            width: wp(80),
            height: hp(20),
            backgroundColor: "#fff",
            alignSelf: "center",
            marginTop: hp(2),
            borderRadius: wp(5),
            justifyContent: "space-between",
            right: wp(4),
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../../../assets/hands.png")}
            style={{
              width: wp(35),
              height: hp(15),
              alignSelf: "center",
            }}
          />
          <View
            style={{
              flexDirection: "column",
              paddingTop: hp(2),
              paddingRight: hp(3),
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: hp(3),
              }}
            >
              Washing Hands
            </Text>
            <Text style={{ fontSize: hp(2) }}>Step in</Text>
            <Text style={{ fontSize: hp(2) }}>washing hands properly</Text>
            <TouchableOpacity
              style={{
                width: wp(35),
                height: hp(6),
                backgroundColor: COLOR.PRIMARY,
                marginTop: hp(2),
                borderRadius: hp(5),
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("DetailWashHand")}
            >
              <Text style={{ fontSize: hp(2), fontWeight: "bold" }}>
                Learn More
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Swiper>
    </View>
  );
}
