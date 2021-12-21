import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import themeContext from "../context/themeContext";

const VideoScreen = () => {

	const theme = useContext(themeContext)

	return (
		<View>
			<Text>Video</Text>
		</View>
	);
};

const styles = StyleSheet.create({

});

export default About;