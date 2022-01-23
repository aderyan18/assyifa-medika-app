import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Ionicons";
import { COLOR } from "../../styles/color";
import { useNavigation } from "@react-navigation/core";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default function DetailWashHand() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={hp(4)} color={"black"} />
          </TouchableOpacity>
          <Image
            style={{
              height: hp(30),
              width: wp(100),
              justifyContent: "center",
              alignSelf: "center",
            }}
            source={{
              uri: "https://image.freepik.com/free-vector/how-wash-your-hands_23-2148478464.jpg",
            }}
          />
        </View>
        <View style={{ alignItems: "center", marginTop: hp(3) }}>
          <Text
            style={{ fontWeight: "bold", textAlign: "center", fontSize: hp(3) }}
          >
            Tahapan Cara Mencuci Tangan dengan Benar Menurut WHO
          </Text>
          <View style={{ padding: wp(3) }}>
            <Text style={{ fontWeight: "bold", fontSize: hp(2.5) }}>
              Berikut 7 langkah tepat dalam mencuci tangan menurut WHO
            </Text>
            {/* No 1 */}
            <View
              style={{
                width: wp(90),
                height: hp(10),
                backgroundColor: COLOR.SECONDARY,
                paddingRight: wp(4),
                marginTop: hp(1.5),
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>1. </Text>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ fontWeight: "bold" }}>
                    Basahi tangan dengan air bersih, kemudian tuangkan Saniter
                    Hand Wash pada telapak tangan
                  </Text>
                </View>
              </View>
            </View>
            {/* No 2 */}
            <View
              style={{
                width: wp(90),
                height: hp(10),
                backgroundColor: COLOR.SECONDARY,
                paddingRight: wp(4),
                marginTop: hp(1.5),
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>2. </Text>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ fontWeight: "bold" }}>
                    Tangkupkan kedua telapak tangan, kemudian gosokkan Saniter
                    Hand Wash yang telah dituangkan secara merata
                  </Text>
                </View>
              </View>
            </View>
            {/* No 3 */}
            <View
              style={{
                width: wp(90),
                height: hp(10),
                backgroundColor: COLOR.SECONDARY,
                paddingRight: wp(4),
                marginTop: hp(1.5),
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>3. </Text>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ fontWeight: "bold" }}>
                    Saling gosokkan telapak tangan kiri dan kanan Anda dengan
                    jari yang saling terkait.
                  </Text>
                </View>
              </View>
            </View>
            {/* No 4 */}
            <View
              style={{
                width: wp(90),
                height: hp(10),
                backgroundColor: COLOR.SECONDARY,
                paddingRight: wp(4),
                marginTop: hp(1.5),
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>4. </Text>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ fontWeight: "bold" }}>
                    Letakkan punggung jari pada telapak satunya dengan jari yang
                    saling mengunci
                  </Text>
                </View>
              </View>
            </View>
            {/* No 5 */}
            <View
              style={{
                width: wp(90),
                height: hp(10),
                backgroundColor: COLOR.SECONDARY,
                paddingRight: wp(4),
                marginTop: hp(1.5),
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>5. </Text>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ fontWeight: "bold" }}>
                    Gosok ibu jari kiri secara memutar oleh tangan kanan dan
                    lakukan sebaliknya.
                  </Text>
                </View>
              </View>
            </View>
            {/* No 6 */}
            <View
              style={{
                width: wp(90),
                height: hp(10),
                backgroundColor: COLOR.SECONDARY,
                paddingRight: wp(4),
                marginTop: hp(1.5),
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>6. </Text>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ fontWeight: "bold" }}>
                    Kuncupkan jari-jari tangan kanan Anda, kemudian gosok
                    memutar di telapak tangan kiri dan lakukan sebaliknya
                  </Text>
                </View>
              </View>
            </View>
            {/* No 7 */}
            <View
              style={{
                width: wp(90),
                height: hp(10),
                backgroundColor: COLOR.SECONDARY,
                paddingRight: wp(4),
                marginTop: hp(1.5),
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>7. </Text>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ fontWeight: "bold" }}>
                    Bilas dan keringkan menggunakan tisu atau kain bersih
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ marginTop: hp(2.5) }} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
