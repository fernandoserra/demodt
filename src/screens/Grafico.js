import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Text } from "react-native";
import themeContext from "../context/themeContext";

import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";


import { useSelector, useDispatch } from 'react-redux';
import { getJsonplaceholder } from '../redux/actions';


//https://formidable.com/open-source/victory/docs/victory-pie

const Grafico = ({ navigation }) => {
    const theme = useContext(themeContext)

    const data = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 }
    ];


    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            dispatch(getJsonplaceholder());
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <VictoryChart width={350} theme={VictoryTheme.material}>
                <VictoryBar data={data} x="quarter" y="earnings" />
            </VictoryChart>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5fcff"
    }
});

export default Grafico;