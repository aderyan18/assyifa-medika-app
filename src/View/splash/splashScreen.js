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
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { StackActions } from "@react-navigation/native";

class splashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace("home"));
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: hp(4),
            fontWeight: "bold",
            textAlign: "center",
            fontStyle: "italic",
            bottom: hp(15),
          }}
        >
          Welcome
        </Text>
        <Image
          style={styles.tinyLogo}
          source={require("../../View/Assets/Icon/splash.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: wp(100),
    alignSelf: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    backgroundColor: "#fff",
    height: hp(30),
    width: wp(60),
    alignSelf: "center",
  },
});

export default splashScreen;
