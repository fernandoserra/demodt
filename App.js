import React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";

import { MainStackNavigator } from "./src/navigations/StackNavigator";
import BottomTabNavigator from "./src/navigations/TabNavigator";
import DrawerNavigator from "./src/navigations/DrawerNavigator";
import { LoginStackNavigator } from "./src/navigations/StackNavigator";

import theme from "./src/styles/theme.style";
import themeContext from "./src/context/themeContext";



const App = () => {
  return (
    <themeContext.Provider value={theme.ligth}>
      <NavigationContainer>
        <LoginStackNavigator/>
      </NavigationContainer>
    </themeContext.Provider>
  );
  // <NavigationContainer theme={DarkTheme}>
  ////<MainStackNavigator />
}
export default App;