import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

class register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView>
        <View style={styles.viewimage}>
          <Text
            style={{
              fontSize: hp(3),
              fontWeight: "bold",
              color: "#37B9C5",
              // marginTop: 20,
            }}
          >
            REGISTER NOW
          </Text>
          <Image
            style={{ width: wp(40), height: hp(20) }}
            resizeMode={"stretch"}
            source={require("../../View/Assets/Icon/Register.png")}
          ></Image>
        </View>
        <View style={styles.viewButton}>
          <TextInput style={styles.textInput} placeholder="Nama Lengkap" />
          <TextInput style={styles.textInput} placeholder="Username" />
          <TextInput style={styles.textInput} placeholder="Nomor Telepon" />
          <TextInput style={styles.textInput} placeholder="E-mail" />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TouchableOpacity
            //   onPress={() => navigation.navigate("form_contoh")}
            style={styles.buttonLogin}
          >
            <Text style={{ color: "#fff" }}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonForgot}>
            <Text
              style={{ fontSize: hp(2), fontWeight: "bold", color: "black" }}
            >
              FORGOT PASSWORD ?
            </Text>
          </TouchableOpacity>

          <View style={styles.buttonSign}>
            <Text style={{ color: "#cfcfcf" }}> Don't Have An Account?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("register")}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  marginLeft: wp(2),
                }}
              >
                Register Now !
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  viewimage: {
    height: "33%",
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  viewButton: {
    height: 540,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    alignSelf: "center",
  },
  textInput: {
    width: "75%",
    height: 40,
    borderWidth: 1,
    marginTop: 30,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  buttonLogin: {
    backgroundColor: "#37B9C5",
    height: 40,
    width: "75%",
    marginTop: 20,
    borderRadius: 10,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSign: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonCancel: {
    color: "#CDBFE1",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 80,
  },
});

export default register;
