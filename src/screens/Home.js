import React, { useContext } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

import { NavigationAction, StackActions } from "@react-navigation/routers";
import { CommonActions } from '@react-navigation/native';

import themeContext from "../context/themeContext";
//import styl from "../styles/styles";

import { stylesPerson } from "../styles/styles";



const Home = ({ navigation }) => {

    const theme = useContext(themeContext)

    console.log("==========")
    console.log(theme)
    console.log(theme.color)
    console.log("==========")

    return (
        <View style={[styles.center, {backgroundColor:theme.background}]}>
        <Text style={stylesPerson(theme).largeButtonText}>This is the home screen</Text>
        <Button 
            title="Go to About Screen" 
            onPress={() => navigation.navigate("About")}
            />
        </View>
    );
};


Home.navigationOptions={
    title:'Tracks',
    headerLeft: null, 
}



const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Home;