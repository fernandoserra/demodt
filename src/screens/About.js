import React, {useContext} from "react";
import { View, StyleSheet, Text } from "react-native";
import themeContext from "../context/themeContext";
const About = () => {

    const theme = useContext(themeContext)

    return (
        <View style={[styles.center, {backgroundColor:theme.background}]}>
            <Text style={{ fontFamily:'Roboto-Bold'}}>This is the about screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default About;