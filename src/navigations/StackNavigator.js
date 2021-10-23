import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";
import DrawerNavigator from "./DrawerNavigator";

import Login from "../screens/Login";
import Home  from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";

const Stack = createStackNavigator();

/*const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}*/

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
    headerShown:true,
    headerLeft: () => (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />)

};

const LoginStackNavigator = () => {
    return (
      <Stack.Navigator  
        screenOptions={{
          headerShown:false
          }}  >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Drawer" options={{ headerShown:false }}  component={DrawerNavigator} />
      </Stack.Navigator>
    );
}

const MainStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    );
}

const ContactStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    );
}
  

export { LoginStackNavigator,MainStackNavigator,ContactStackNavigator };