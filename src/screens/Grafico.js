import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import themeContext from "../context/themeContext";

const Grafico = () => {
	const theme = useContext(themeContext)
	return (
		<View>
			<View style={styles.container_other}>
                <Text>Grafico</Text>
			</View>
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
	container_other: {
		flex: 1,
		marginTop: 10,
		marginHorizontal: 16,
		marginBottom: 100,
		borderRadius: 30,
		padding: 10,
		backgroundColor: 'white',
	}
});

export default Grafico;