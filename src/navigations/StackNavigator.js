import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";
import DrawerNavigator from "./DrawerNavigator";

import Login from "../screens/Login";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Animations from "../screens/Animations";
import DemoHeader from "../screens/DemoHeader";
import VideoScreen from "../screens/VideoScreen";
import BdScreem from "../screens/BdScreen";
import TrackPlayer from "../screens/TrackPlayerScreen";
import Grafico from "../screens/Grafico";
import ScreenSVG from "../screens/ScreenSVG";
import ReduxScreen1 from "../screens/ReduxSreen1";
import ReduxScreen2 from "../screens/ReduxSreen2";
import MenuTabsScreen from "../screens/MenuTabsScreen";
import TabsScreen from "../screens/TabsScreen";

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
    //backgroundColor: "#9AC4F8",
  },
  headerTintColor: "blue",
  headerBackTitle: "Back",
  headerShown: true,
  headerLeft: () => (
    <Button
      onPress={() => alert('This is a button!')}
      title="Info"
      color="blue"
    />)

};

const screenOptionStyle2 = {
  headerStyle: {
    //backgroundColor: "#9AC4F8",
  },
  headerTintColor: "blue",
  headerBackTitle: "Back",
  headerShown: false
};

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}  >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Drawer" options={{ headerShown: false }} component={DrawerNavigator} />
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

const AnimationStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Animations" component={Animations} />
    </Stack.Navigator>
  );
}

const DemoHeaderStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle2}>
      <Stack.Screen name="DemoHeader" component={DemoHeader} />
    </Stack.Navigator>
  );
}

const VideoStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="VideoScreen" component={VideoScreen} />
    </Stack.Navigator>
  );
}

const BdStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="BdScreem" component={BdScreem} />
    </Stack.Navigator>
  );
}

const TrackPlayerNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="TrackScreem" component={TrackPlayer} />
    </Stack.Navigator>
  );
}

const GraficoNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="GraficoScreem" component={Grafico} />
    </Stack.Navigator>
  );
}

const SVGNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="SVGScreem" component={ScreenSVG} />
    </Stack.Navigator>
  );
}

const Redux1Navigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="ReduxScreen1" component={ReduxScreen1} />
    </Stack.Navigator>
  );
}
const Redux2Navigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="ReduxScreen2" component={ReduxScreen2} />
    </Stack.Navigator>
  );
}

const MenuTabNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="MenuTabsScreen" component={MenuTabsScreen} />
    </Stack.Navigator>
  );
}

const TabsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Tabs" component={TabsScreen} />
    </Stack.Navigator>
  );
}

export {
  LoginStackNavigator,
  MainStackNavigator,
  ContactStackNavigator,
  AnimationStackNavigator,
  DemoHeaderStackNavigator,
  VideoStackNavigator,
  BdStackNavigator,
  TrackPlayerNavigator,
  GraficoNavigator,
  SVGNavigator,
  Redux1Navigator,
  Redux2Navigator,
  MenuTabNavigator,
  TabsNavigator
};