import React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";

import { MainStackNavigator } from "./src/navigations/StackNavigator";
import BottomTabNavigator from "./src/navigations/TabNavigator";
import DrawerNavigator from "./src/navigations/DrawerNavigator";
import { LoginStackNavigator } from "./src/navigations/StackNavigator";
 const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <LoginStackNavigator/>
    </NavigationContainer>
  );
  //
  ////<MainStackNavigator />
}
export default App;