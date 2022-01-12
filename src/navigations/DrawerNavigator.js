import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { ContactStackNavigator } from "./StackNavigator";
import { AnimationStackNavigator } from "./StackNavigator";
import { DemoHeaderStackNavigator } from "./StackNavigator";
import { VideoStackNavigator } from "./StackNavigator";
import { BdStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import string from "../styles/strings";
import strings from "../styles/strings";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
        initialRouteName="Home"
        screenOptions={{ 
            headerShown:false
        }}>
            <Drawer.Screen name={strings.HOME} component={TabNavigator} />
            <Drawer.Screen name={strings.CONTACT} component={ContactStackNavigator} />
            <Drawer.Screen name="Animation" component={AnimationStackNavigator} />
            <Drawer.Screen name="DemoHeaderStackNavigator" component={DemoHeaderStackNavigator} />
            <Drawer.Screen name="Video" component={VideoStackNavigator} />
            <Drawer.Screen name={strings.BD} component={BdStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;