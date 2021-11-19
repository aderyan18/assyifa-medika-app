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

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <SafeAreaView>
          <View style={styles.viewimage}>
            <Text
              style={{ fontSize: hp(3), fontWeight: "bold", color: "#37B9C5" }}
            >
              SIGN IN
            </Text>
            <Image
              style={{ width: wp(40), height: hp(20) }}
              resizeMode={"stretch"}
              source={require("../../View/Assets/Icon/Login.png")}
            ></Image>
          </View>
          <View style={styles.viewButton}>
            <TextInput style={styles.textInput} placeholder="Username" />
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3091f",
    alignItems: "flex-start",
  },
  viewimage: {
    height: hp(40),
    width: wp(100),
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  viewButton: {
    width: wp(100),
    height: hp(70),
    backgroundColor: "#fff",
    alignItems: "center",
    alignSelf: "center",
  },
  textInput: {
    width: wp(75),
    height: hp(7),
    borderWidth: 1,
    marginTop: hp(3),
    borderRadius: wp(3),
    paddingHorizontal: wp(3),
  },
  buttonLogin: {
    backgroundColor: "#37B9C5",
    height: hp(5),
    width: wp(75),
    marginTop: hp(5),
    borderRadius: wp(3),
    elevation: wp(3),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonForgot: {
    backgroundColor: "#fff",
    width: wp(50),
    height: hp(10),
    alignItems: "center",
    marginTop: hp(5),
  },
  buttonSign: {
    width: wp(100),
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default login;
