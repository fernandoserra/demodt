import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { ContactStackNavigator } from "./StackNavigator";
import { AnimationStackNavigator } from "./StackNavigator";
import { DemoHeaderStackNavigator } from "./StackNavigator";
import { VideoStackNavigator } from "./StackNavigator";
import { TabsViewNavigator } from "./StackNavigator";
import { BdStackNavigator, TrackPlayerNavigator, GraficoNavigator, SVGNavigator, Redux1Navigator, Redux2Navigator,MenuTabNavigator,TabsNavigator, ModalPickerNavigator,FormNavigator, Video2StackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import strings from "../values/strings";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
        initialRouteName="Home"
		drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{ 
            headerShown:false
        }}>
            <Drawer.Screen name={strings.HOME} component={TabNavigator} />
            <Drawer.Screen name={strings.CONTACT} component={ContactStackNavigator} />
            <Drawer.Screen name={strings.ANIMATION} component={AnimationStackNavigator} />
            <Drawer.Screen name="DemoHeaderStackNavigator" component={DemoHeaderStackNavigator} />
            <Drawer.Screen name={strings.VIDEO} component={VideoStackNavigator} />
            <Drawer.Screen name="Video2" component={Video2StackNavigator} />
            <Drawer.Screen name={strings.BD} component={BdStackNavigator} />
            <Drawer.Screen name="TrackPlayer" component={TrackPlayerNavigator} />
            <Drawer.Screen name="Grafico" component={GraficoNavigator} />
            <Drawer.Screen name="SVG" component={SVGNavigator} />
            <Drawer.Screen name="Redux1" component={Redux1Navigator} />
            <Drawer.Screen name="Redux2" component={Redux2Navigator} />
            <Drawer.Screen name="Menu Tabs" component={MenuTabNavigator} />
            <Drawer.Screen name="Tabs" component={TabsNavigator} />
            <Drawer.Screen name="TabsView" component={TabsViewNavigator} />
            <Drawer.Screen name="ModalPicker" component={ModalPickerNavigator} />
            <Drawer.Screen name="Formulario" component={FormNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;