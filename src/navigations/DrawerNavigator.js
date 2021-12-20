import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { ContactStackNavigator } from "./StackNavigator";
import { AnimationStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
        initialRouteName="Home"
        screenOptions={{ 
            headerShown:false
        }}>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Contact" component={ContactStackNavigator} />
            <Drawer.Screen name="Animation" component={AnimationStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;