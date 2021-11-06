import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { Divider, Text, Button, Appbar, Avatar } from "react-native-paper";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { COLOR } from "../../styles/color";
import { SafeAreaView } from "react-native-safe-area-context";

class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView>
        {/* header */}
        <Appbar.Header
          statusBarHeight={5}
          style={{ backgroundColor: COLOR.PRIMARY, alignContent: "center" }}
        >
          <Appbar.Content title="PROFILE" subtitle="Pharmacy App" />
        </Appbar.Header>
        {/* /header */}
        {/* avatar */}
        <View style={styles.iconProfile}>
          <Avatar.Icon
            size={80}
            icon="account"
            style={{ backgroundColor: COLOR.SECONDARY }}
          />
        </View>
        {/* avatar */}
        <View style={styles.myState}>
          <Text style={styles.tag}>Nama</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.text}>Ade Ryan Alqadri</Text>
            <TouchableOpacity>
              <Text style={styles.ubah}>Ubah</Text>
            </TouchableOpacity>
          </View>
          <Divider />
          <Text style={styles.tag}>Username</Text>
          <Text style={styles.text}>Ryannnnnn</Text>
          <Divider />
          <Text style={styles.tag}>Alamat</Text>
          <Text style={styles.text}>jalan kemana mana </Text>
          <Divider />
          <Text style={styles.tag}>Jenis Kelamin</Text>
          <Text style={styles.text}>Laki-Laki</Text>
          <Divider />
          <Text style={styles.tag}>Telepon</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.text}>088888888888</Text>
          </View>
          <Divider />
        </View>
        <Button
          icon="logout"
          mode="outlined"
          onPress={() => console.log("Pressed")}
          style={{ alignSelf: "center" }}
          color="#37B9C5"
        >
          LogOut
        </Button>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    top: 50,
  },
  header: {
    alignSelf: "center",
    width: "100%",
    height: 40,
    flexDirection: "row",
    padding: 10,
    elevation: 5,
    backgroundColor: "#37B9C5",
  },
  iconProfile: {
    width: "25%",
    height: 90,
    alignSelf: "center",
    justifyContent: "center",
  },
  myState: {
    padding: 10,
    width: "100%",
    height: 410,
    flexDirection: "column",
  },
  tag: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 15,
  },
  text: {
    marginTop: 6,
    fontSize: 18,
  },
  ubah: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default profile;
