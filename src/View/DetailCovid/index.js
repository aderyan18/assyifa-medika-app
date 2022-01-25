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
          <Text
            style={{ fontWeight: "bold", textAlign: "center", fontSize: hp(3) }}
          >
            Cara Daftar Vaksin untuk masyarakat di PeduliLindungi
          </Text>
          <View style={{ padding: wp(3) }}>
            <Text style={{ fontWeight: "bold", fontSize: hp(2.5) }}>
              Berikut 3 Cara daftar vaksin Covid-19
            </Text>
            {/* No 1 */}
            <View
              style={{
                width: wp(90),
                height: hp(38),
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
                    Pendaftaran vaksin Covid-19 di aplikasi PeduliLindungi.
                  </Text>
                  <Text>
                    - Pertama, unduh aplikasi Pedulilindungi Buat akun dengan
                    mendaftarkan data lengkap diri.
                  </Text>
                  <Text>
                    - Pilih menu "Pendaftaran Vaksin", lalu akan masuk ke
                    validasi data lengkap, dan klik "periksa".
                  </Text>
                  <Text>
                    - Setelah data cocok, masukkan nomor ponsel dan alamat
                    domisili, klik "Selanjutnya".
                  </Text>
                  <Text>
                    - Akan muncul halaman konfirmasi terkait data peserta vaksin
                    yang didaftarkan, Jika telah yakin klik "Selanjutnya" dan
                    klik "Ya, Lanjutkan".
                  </Text>
                  <Text>
                    - Kamu akan mendapatkan kode OTP ke nomor ponsel yang
                    dimasukkan dalam pendaftaran.Silakan masukkan kode tersebut
                    dan telah berhasil melakukan pendaftaran vaksin
                  </Text>
                </View>
              </View>
            </View>
            {/* No 2 */}
            <View
              style={{
                width: wp(90),
                height: hp(55),
                backgroundColor: COLOR.SECONDARY,
                paddingRight: wp(3),
                marginTop: hp(1.5),
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>2. </Text>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ fontWeight: "bold" }}>
                    Pendaftaran vaksin Covid-19 di laman PeduliLindungi.id
                  </Text>
                  <Text>
                    - Kunjungi laman pedulilindungi.id Pilih menu
                    “Login/Register”, di bagian pojok kanan atas dan pilih menu
                    “Buat Akun PeduliLindungi”.
                  </Text>
                  <Text>
                    - Segera melakukan registrasi akun dengan memasukkan nama
                    lengkap sesuai KTP dan alamat e-mail.
                  </Text>
                  <Text>
                    - Pilihlah “Syarat Penggunaan dan Kebijakan Privasi” Klik
                    “Daftar”. Kamu akan mendapatkan kode OTP melalui e-mail atau
                    SMS, masukkan kode tersebut dan pilih opsi “Verifikasi”.
                  </Text>
                  <Text>
                    - Akun akan segera terdaftar, lalu masuk ke dashboard atau
                    halaman utama akun PeduliLindungi.Lanjutkan dengan memilih
                    menu “Pendaftaran Vaksinasi”, kemudian isi data diri seperti
                    nama lengkap, NIK, tanggal lahir, jenis kelamin, nomor
                    ponsel, kota sesuai KTP, dan alamat.
                  </Text>
                  <Text>
                    - Tekan tombol “Selanjutnya”, dan lakukan konfirmasi
                    mengenai informasi penerima vaksin. Masukkan kode
                    verifikasi, dan telah berhasil melakukan pendaftaran vaksin
                    Covid-19.
                  </Text>
                </View>
              </View>
            </View>
            {/* No 3 */}
            <View
              style={{
                width: wp(90),
                height: hp(38),
                backgroundColor: COLOR.SECONDARY,
                paddingRight: wp(4.5),
                marginTop: hp(1.5),
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>3. </Text>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ fontWeight: "bold" }}>
                    Pendaftaran vaksin Covid-19 di vaksin.loket.com
                  </Text>
                  <Text>- Kunjungi website https://vaksin.loket.com.</Text>
                  <Text>
                    - Pilih lokasi yang ingin dipilih sebagai lokasi vaksinasi,
                    disarankan pilih yang terdekat dengan lokasi tempat tinggal.
                  </Text>
                  <Text>
                    - Silakan pilih juga tanggal kedatangan dan jam kedatangan
                    yang diinginkan.
                  </Text>
                  <Text>
                    - Untuk pendaftaran vaksin Covid, lakukan pengisian data
                    secara lengkap sesuai identitas diri.
                  </Text>
                  <Text>
                    - Jika sudah lengkap, maka proses pendaftaran pun selesai.
                  </Text>
                  <Text>
                    - Anda akan menerima formulir dan e-voucher pada email yang
                    sudah daftarkan sebelumnya.
                  </Text>
                </View>
              </View>
            </View>
            {/* <View
              style={{
                marginTop: hp(2),
                marginBottom: hp(2),
              }}
            >
              <Text style={{ fontWeight: "bold" }}>
                Sumber :
                https://newssetup.kontan.co.id/news/cara-daftar-vaksin-covid-19-dan-cari-lokasi-untuk-masyarakat-umum-di-pedulilindungi
              </Text>
            </View> */}
            <View style={{ marginTop: hp(2.5) }} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
