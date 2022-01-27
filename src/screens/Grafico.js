import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import themeContext from "../context/themeContext";



const Grafico = () => {
    const theme = useContext(themeContext)

   

    return (
        <View style={styles.container}>
           <Text> Grafico</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
    },
});

export default Grafico;