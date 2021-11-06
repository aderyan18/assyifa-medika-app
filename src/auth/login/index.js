import React, {Component} from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet ,View ,Text ,TextInput ,TouchableOpacity ,ScrollView, Image } from "react-native";

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render () {
        return (
    <View style={styles.container}>
      <View
        style={styles.viewimage}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#37B9C5" }}>
          SIGN IN
        </Text>
        <Image
          style={{ width: "50%", height: "50%", marginTop: 20 }}
          resizeMode={"stretch"}
          source={require('../../assets/icon/Frame505.png')}
        ></Image>
      </View>
      <View
        style={styles.viewButton}
      >
        <TextInput
          style={styles.textInput}
          placeholder="Username"
        />
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

        <TouchableOpacity
          style={styles.buttonForgot}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "black" }}>
            FORGOT PASSWORD ?
          </Text>
        </TouchableOpacity>

        <View
          style={styles.buttonSign}
        >
          <Text style={{ color: "#cfcfcf" }}> Don't Have An Account?</Text>
          <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('register')} >
            <Text style={{ color: "#cfcfcf", marginBottom: 10, fontWeight:"bold" }}> Register Now ! </Text>
          </TouchableOpacity>
        </View>
      </View>
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
        height: "40%",
        width: "100%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    viewButton: {
        height: 550,
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
    buttonForgot:{
        backgroundColor: "#fff",
        width: "50%",
        height: 20,
        alignItems: "center",
        marginTop: 10,
    },
    buttonSign: {
        width: "100%",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",
    },

  });

export default login;