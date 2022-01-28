import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import themeContext from "../context/themeContext";

import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";


//https://formidable.com/open-source/victory/docs/victory-pie

const Grafico = () => {
    const theme = useContext(themeContext)

    const data = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 }
    ];


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