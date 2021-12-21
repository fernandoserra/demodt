import React, { useContext } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import themeContext from "../context/themeContext";
import { Button, Overlay } from 'react-native-elements';

const DemoHeader = () => {

	const theme = useContext(themeContext)

	return (
		<View>
			 <View style={{
                height: 150,
                backgroundColor: '#003366',
                borderBottomLeftRadius: 30,
                borderBottomEndRadius: 30
            }}>
                 <TouchableOpacity
                    style={{ paddingLeft: 10, paddingTop: 50 }}
                    onPress={() => {
                        console.log("Ejecutando")
                        return (
                            <Overlay isVisible>
                                <View style={{width:400, height:400}}>
                                    <Text style={styles.titleModel}>En estos momentos estamos trabajando para cargar el contenido</Text>
                                </View>
                            </Overlay>
                        );
                    }}
                 >
                     <Text>Overlay</Text>

                 </TouchableOpacity>
                <Image
                    style={styles.image}
                    source={{ uri: "https://cdn.pixabay.com/photo/2020/01/01/18/11/train-4734116_1280.jpg" }}
                />

            </View>
		</View>
	);

    /*
    
     <TouchableOpacity
                    style={{ paddingLeft: 10, paddingTop: 50 }}
                    onPress={() => {
                        console.log("Ejecutando Overlay xyz")
                        return (
                            <Overlay isVisible>
                                <View style={{width:400, height:400}}>
                                    <Text style={styles.titleModel}>En estos momentos estamos trabajando para cargar el contenido</Text>
                                </View>
                            </Overlay>
                        );

                    }}>
                    <Text> Información </Text>
                </TouchableOpacity>

    */
};

const styles = StyleSheet.create({
    image: {
        width: 110,
        height: 150,
        margin: 1,
        position: 'absolute',
        marginTop: 50,
        alignSelf: 'center'
    },
    titleModel: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    modal: {
        margin: 10
    }
});

export default DemoHeader;