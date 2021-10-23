import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
        headerShown:false
    }}>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
};

/*screenOptions={{
    headerStyle:{
        backgroundColor:Colors.darkPrimary,
        shadowColor:Colors.darkPrimary
    },
    headerTintColor:Colors.white,
    headerShown:false
}}
>*/

export default BottomTabNavigator;