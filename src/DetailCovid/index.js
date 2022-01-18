import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Ionicons";
import { COLOR } from "../styles/color";
import { useNavigation } from "@react-navigation/core";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default function DetailCovid() {
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
              uri: "https://image.freepik.com/free-vector/cartoon-coronavirus-vaccine-background_23-2148855898.jpg",
            }}
          />
        </View>
        <View style={{ alignItems: "center", marginTop: hp(3) }}>
          <Text style={{ fontWeight: "bold" }}>
            Cara Daftar Vaksin dan cari Lokasi terdekat
          </Text>
          <View style={{ padding: wp(3) }}>
            <Text>Berikut 3 Cara daftar vaksin Covid-19</Text>
            <Text style={{ fontWeight: "bold" }}>
              1. Pendaftaran vaksin Covid-19 di aplikasi PeduliLindungi.
            </Text>
            <Text>
              Pertama, unduh aplikasi Pedulilindungi Buat akun dengan
              mendaftarkan data lengkap diri.
            </Text>
            <Text>
              Pilih menu "Pendaftaran Vaksin", lalu akan masuk ke validasi data
              lengkap, dan klik "periksa".
            </Text>
            <Text>
              Setelah data cocok, masukkan nomor ponsel dan alamat domisili,
              klik "Selanjutnya".
            </Text>
            <Text style={{ fontWeight: "bold" }}>
              2. Daftarkan vaksin Covid-19 di laman PeduliLindungi.id
            </Text>
            <Text style={{ fontWeight: "bold" }}>
              3. Pendaftaran vaksin Covid-19 di vaksin.loket.com
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
