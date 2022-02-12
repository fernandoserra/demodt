import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import themeContext from "../context/themeContext";
import MapView, { Polyline } from "react-native-maps";
import config from "../../config";
const About = () => {

	const theme = useContext(themeContext)

	return (
		<View>
			<View>
				<Text>{config.BASE_URL}</Text>
			</View>
			<View style={styles.container_other}>
				<MapView
					initialRegion={{
						longitude: -70.64971943121438,
						//latitude:37.33233141 + increment * tenMetersWithDegress
						latitude: -33.44903690630758,
						latitudeDelta: 0.04,
						longitudeDelta: 0.05,
					}}
					style={styles.map}
				>
				</MapView>
			</View>


		</View>
		/*
			<View style={[styles.center, {backgroundColor:theme.background}]}>
				<Text style={{ fontFamily:'Roboto-Bold'}}>This is the about screen</Text>
			</View>
		*/
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
	},
	map: {
		height: 300
	}
});

export default About;