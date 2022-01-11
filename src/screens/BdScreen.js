import React, { useEffect, useContext, useState } from 'react';
import { View, StyleSheet, Text, Alert, TouchableOpacity,FlatList } from 'react-native';
import { Input, Button, Card } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Spacer from '../components/Spacer';

const BdScreem = ({ navigation }) => {

    const [name, setName] = useState('');
    const [itemsShow, setItemsShow] = useState([]);

    const addBD = async () => {
        var dateNow = Date.now();
        console.log(` Valor a almacenar: ${name}  id: ${dateNow}`)
        await AsyncStorage.setItem(dateNow.toString(), `${name}`);
        Alert.alert("Se almaceno la información", '')
        getAllKeys()
    };

    const getAllKeys = async () => {
        try {
            const allKeys = await AsyncStorage.getAllKeys();
            const items = await AsyncStorage.multiGet(allKeys)
            setItemsShow(items)
            return allKeys
        } catch (err) {
            throw Error(err);
        }
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // do something
            console.log("Ejecutando useEffect()  Focus" + Date.now())
            getAllKeys()
        });

        const unsubscribe2 = navigation.addListener('blur', () => {
            // do something
            console.log("Ejecutando useEffect()  blur" + Date.now())
        });
    }, [navigation]);


    return (
        <View>

            <View>
                <Input value={name} onChangeText={setName} placeholder="Agregar Tarea" />
                <Spacer>
                    <Button title="Añadir" onPress={addBD} />
                </Spacer>
            </View>

            <View>
                <FlatList
                    style={{marginBottom:300}}
                    data={itemsShow}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity >
                                <Card containerStyle={{ padding: 10 }} >
                                    <View >
                                        <Text>{item[1]}</Text>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                        )
                    }
                    }
                />
            </View>
        </View>

    );
};

const styles = StyleSheet.create({

});

export default BdScreem;
