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
  TouchableOpacityBase,
} from "react-native";
import { COLOR } from "../../styles/color";

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.fontA}>WELCOME</Text>
        <Text style={styles.fontB}>BACK</Text>

        <View style={styles.about}>
          <Text style={{ padding: 10, fontWeight: "bold" }}>
            halo ade ryan alqadri
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.PRIMARY,
    alignItems: "flex-start",
  },
  view: {
    width: "100%",
    height: 50,
    backgroundColor: "#c0c0c0",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  fontA: {
    position: "absolute",
    width: 166,
    height: 102,
    left: 40,
    top: 60,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 34,
    lineHeight: 51,
    color: "#000000",
  },
  fontB: {
    position: "absolute",
    width: 166,
    height: 248,
    left: 44,
    top: 95,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 34,
    lineHeight: 51,
    color: "#0083FF",
  },
  about: {
    position: "absolute",
    width: 330,
    height: 103,
    left: 44,
    top: 245,
    backgroundColor: COLOR.SECONDARY,
    borderRadius: 30,
  },
});

export default home;
