import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLOR } from "../../../styles/color";
import { Divider, Button, Appbar, Avatar, Searchbar } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "react-native-vector-icons/FontAwesome";

export default function DaftarObat() {
  const obat = [];
  for (let a = 1; a < 4; a++) {
    obat[a] = a + 1;
  }

  return (
    <View
      style={{
        backgroundColor: COLOR.SECONDARY,
        width: "100%",
        height: "80%",
        top: 15,
      }}
    >
      <View
        style={{
          width: "90%",
          height: 30,
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Daftar Obat</Text>
      </View>
      <View
        style={{
          width: "90%",
          height: 350,
          backgroundColor: "aqua",
          alignSelf: "center",
        }}
      >
        <ScrollView>
          {obat.map(() => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    width: 150,
                    height: 160,
                    backgroundColor: "red",
                    marginBottom: 10,
                  }}
                >
                  <Image
                    source={require("../../../assets/antalgin.jpg")}
                    style={{
                      height: 120,
                      width: 150,
                    }}
                  />
                  <View>
                    <Text>Detail</Text>
                    {/* <Icon name="lock" size={10} color={"#686868"} /> */}
                  </View>
                </View>
                <View
                  style={{
                    width: 150,
                    height: 160,
                    backgroundColor: "red",
                    marginBottom: 10,
                  }}
                ></View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
