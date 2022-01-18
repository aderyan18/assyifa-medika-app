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
          <Icon name="person-circle-outline" size={hp(5)} color={"#fff"} />
        </TouchableOpacity>
        <Text
          style={{ fontSize: hp(2.5), fontWeight: "bold", marginTop: hp(2) }}
        >
          Hello,
        </Text>
        <Text style={{ fontSize: hp(3), fontWeight: "bold" }}>
          Welcome Back !
        </Text>
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
                  marginTop: hp(5),
                  borderRadius: wp(5),
                  justifyContent: "space-between",
                  flexDirection: "row",
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
                  source={require("../../assets/information.png")}
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
            <TouchableOpacity
              onPress={() => navigation.navigate("DetailCovid")}
            >
              <View
                style={{
                  width: wp(80),
                  height: hp(20),
                  backgroundColor: "#fff",
                  alignSelf: "center",
                  marginTop: hp(5),
                  borderRadius: wp(5),
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Image
                  source={require("../../assets/virus.png")}
                  style={{
                    width: wp(35),
                    height: hp(15),
                    alignSelf: "center",
                  }}
                />
                <View
                  style={{
                    flexDirection: "column",
                    paddingTop: hp(3),
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
                  <Text style={{ fontSize: hp(2) }}>About Covid-19</Text>
                  <Text style={{ fontSize: hp(2), fontWeight: "bold" }}>
                    Please check this
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* slide 3 */}
            <TouchableOpacity>
              <View
                style={{
                  width: wp(80),
                  height: hp(20),
                  backgroundColor: "#fff",
                  alignSelf: "center",
                  marginTop: hp(5),
                  borderRadius: wp(5),
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Image
                  source={require("../../assets/hands.png")}
                  style={{
                    width: wp(35),
                    height: hp(15),
                    alignSelf: "center",
                  }}
                />
                <View
                  style={{
                    flexDirection: "column",
                    paddingTop: hp(3),
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
                  <Text style={{ fontSize: hp(2) }}>
                    washing hands properly
                  </Text>
                  <Text style={{ fontSize: hp(2), fontWeight: "bold" }}>
                    Please check this
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Swiper>
        </View>
      </View>
    </SafeAreaView>
  );
}
