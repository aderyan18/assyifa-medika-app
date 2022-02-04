import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLOR } from "../../styles/color";
import { Divider, Button, Appbar, Avatar, Searchbar } from "react-native-paper";
import DaftarObat from "./component/DaftarObat";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function obat() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const _goBack = () => console.log("Went back");

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

  return (
    <SafeAreaView>
      {/* header */}
      <Appbar.Header
        statusBarHeight={2}
        style={{ backgroundColor: COLOR.PRIMARY }}
      >
        <TouchableOpacity>
          <Image
            source={require("../../assets/icon.png")}
            style={{
              width: wp(28),
              height: hp(5),
              borderRadius: hp(5),
              marginLeft: wp(5),
            }}
          />
        </TouchableOpacity>
        {/* <View style={{ alignSelf: "center" }}>
          <Text>Medicine</Text>
        </View> */}
      </Appbar.Header>
      {/* /header */}
      {/* SearchBar */}
      <View
        style={{
          width: wp(100),
          height: hp(5),
          alignSelf: "center",
          alignItems: "center",
          backgroundColor: COLOR.SECONDARY,
        }}
      >
        <Text
          style={{
            fontSize: wp(5),
            fontWeight: "bold",
            color: COLOR.TEXT,
            marginTop: hp(1),
          }}
        >
          Daftar Obat
        </Text>
      </View>
      <View
        style={{
          backgroundColor: COLOR.SECONDARY,
          width: wp(100),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{
              Color: COLOR.SECONDARY,
              width: wp(70),
              alignSelf: "center",
              top: hp(1),
              borderWidth: 1,
              borderColor: COLOR.PRIMARY,
            }}
          />
          <TouchableOpacity
            style={{
              width: wp(20),
              height: hp(7),
              backgroundColor: COLOR.PRIMARY,
              marginTop: hp(2),
              borderRadius: wp(3),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: wp(6),
                height: hp(3),
              }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/149/149852.png",
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <DaftarObat />
        </View>
      </View>
    </SafeAreaView>
  );
}
