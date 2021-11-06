import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLOR } from "../../styles/color";
import { Divider, Button, Appbar, Avatar, Searchbar } from "react-native-paper";
import DaftarObat from "./component/DaftarObat";

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
        statusBarHeight={5}
        style={{ backgroundColor: COLOR.PRIMARY }}
      >
        <Appbar.Content title="PRODUK" subtitle="Pharmacy App" />
      </Appbar.Header>
      {/* /header */}
      {/* SearchBar */}
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{
          Color: COLOR.SECONDARY,
          width: "90%",
          alignSelf: "center",
          top: 10,
          borderWidth: 1,
          borderColor: COLOR.PRIMARY,
        }}
      />
      <View>
        <DaftarObat />
      </View>
    </SafeAreaView>
  );
}
