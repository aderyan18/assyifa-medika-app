import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import home from "../View/home/index";
import profile from "../View/profile/index";
import aboutUs from "../View/aboutUs/index";
import obat from "../View/obat/index";
import splashScreen from "../View/splash/splashScreen";
import login from "../auth/login/index";
import register from "../auth/register/index";
import DetailWashHand from "../View/DetailWashHand";
import DetailCovid from "../View/DetailCovid";
import Consultation from "../View/Consultation";
import Pharmacist from "../View/Pharmacist";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      activeColor="#36A5B2"
      shifting={false}
      initialRouteName="Home"
      headerShown={false}
      barStyle={{ backgroundColor: "#ffffff" }}
    >
      <Tab.Screen
        name="Home"
        component={home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={24} color={focused ? "#37B9C5" : "gray"} />
          ),
        }}
      />
      <Tab.Screen
        name="Medicine"
        component={obat}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="medkit"
              size={24}
              color={focused ? "#37B9C5" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="About Us"
        component={aboutUs}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="bookmark"
              size={24}
              color={focused ? "#37B9C5" : "gray"}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="User"
        component={profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="person-sharp"
              size={24}
              color={focused ? "#37B9C5" : "gray"}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

const NavigationRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="splashScreen" component={splashScreen} />
        <Stack.Screen name="home" component={BottomTab} />
        <Stack.Screen name="profile" component={profile} />
        <Stack.Screen name="register" component={register} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="DetailCovid" component={DetailCovid} />
        <Stack.Screen name="DetailWashHand" component={DetailWashHand} />
        <Stack.Screen name="Consultation" component={Consultation} />
        <Stack.Screen name="Pharmacist" component={Pharmacist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRoutes;
