import React, {Component} from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet ,View ,Text ,TextInput ,TouchableOpacity ,ScrollView, Image } from "react-native";

class register extends Component {
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
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#37B9C5", marginTop:20 }}>
          REGISTER NOW
        </Text>
        <Image
          style={{ width: "40%", height: "40%", marginTop: 35 }}
          resizeMode={"stretch"}
          source={require('../../assets/icon/Frame504.png')}
        ></Image>
      </View>
      <View
        style={styles.viewButton}
      >
        <TextInput
          style={styles.textInput}
          placeholder="Name"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Username"
        />
        <TextInput
          style={styles.textInput}
          placeholder="E-mail"
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
          <Text style={{ color: "#fff" }}>CREATE ACCOUNT</Text>
        </TouchableOpacity>

        <View
          style={styles.buttonSign}
        >
        </View>

        <TouchableOpacity style={{ color: "#9e1fb8", }} 
        onPress={() => this.props.navigation.pop()}>
          <Text
            style={styles.buttonCancel}
          >
            Cancel
          </Text>
        </TouchableOpacity>
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
        height: "33%",
        width: "100%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
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