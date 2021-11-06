import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLOR } from "../../styles/color";
import { Divider, Button, Appbar, Avatar, Searchbar } from "react-native-paper";

export default function obat() {
  return (
    <SafeAreaView>
      {/* header */}
      <Appbar.Header
        statusBarHeight={5}
        style={{ backgroundColor: COLOR.PRIMARY }}
      >
        <Appbar.Content title="TENTANG KAMI" subtitle="Pharmacy App" />
      </Appbar.Header>
      {/* /header */}
      <View
        style={{ backgroundColor: COLOR.SECONDARY, width: "100%", height: 180 }}
      ></View>
    </SafeAreaView>
  );
}
