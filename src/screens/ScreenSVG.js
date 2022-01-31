import React, { useContext } from 'react';
import { View, StyleSheet, Text } from "react-native";
import Logo from '../images/react-native-logo.svg'

const ScreenSVG = ({ navigation }) => {
    return (
        <View>
            <Text>ScreenSVG</Text>
            <View>
            <Logo width={120} height={40} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({

});

export default ScreenSVG;