import React, { useContext } from 'react';
import { View, StyleSheet, Text } from "react-native";
import Logo from '../images/react-native-logo.svg'
import Svg, { Path, Defs, LinearGradient, Stop, Ellipse } from 'react-native-svg';

const ScreenSVG = ({ navigation }) => {

    function SvgPicture() {
        return (
            <Svg width={175} height={155} xmlns="http://www.w3.org/2000/svg">
                <Ellipse stroke="#000" ry={73.5} rx={85} cy={77.5} cx={87} fill="#49a3a3" />
            </Svg>
        )
    }
    return (
        <View>
            <Text>ScreenSVG</Text>
            <View>
                {/*<Logo width={120} height={40} />*/}
                <SvgPicture />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({

});

export default ScreenSVG;