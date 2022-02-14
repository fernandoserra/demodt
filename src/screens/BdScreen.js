import React, { useEffect, useContext, useState } from 'react';
import { View, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';
import { FlatList, Swipeable } from 'react-native-gesture-handler';
import { Input, Button, Card } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Shimmer from '../utils/Shimmer';

import Spacer from '../components/Spacer';

const BdScreem = ({ navigation }) => {

    const [name, setName] = useState('');
    const [itemsShow, setItemsShow] = useState([]);
    const [visible, setVisible] = useState(false);

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

    const remove = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
            getAllKeys()
            return true;
        } catch (err) {
            return false;
        }
    }

    const rightSwipe = (progress, dragX, item, deleteItem) => {
        console.log("Ejecutando rightSwipe")
        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });
        return (
            <TouchableOpacity activeOpacity={0.6} onPress={deleteItem}>
                <View style={styles.deleteBox}>
                    {/*<FontAwesome
                        name="trash-o"
                        color="rgba(110, 110, 110, .9)"
                        size={24}

                    onPress={() => {
                        //deleteButtonPressed()
                        console.log('ejecutandoooo: ')
                    }}
                    />*/}
                </View>
            </TouchableOpacity>
        );
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

        setTimeout(() => {
          setVisible(true)
        }, 5000)
    }, [navigation]);

    return (

        <View>
            {console.log("Ejecutando return")}
            <View>
                <Input value={name} onChangeText={setName} placeholder="Agregar Tarea" />
                <Spacer>
                    <Button title="Añadir" onPress={addBD} />
                </Spacer>
            </View>

            <View style={{flexDirection: 'row',margin: 16 , backgroundColor:'red'}} >
                <Shimmer autoRun={true}  style={{backgroundColor:'#fff'}}  visible={visible}>
                    <Text style={{backgroundColor:'white'}}>HOLAAA</Text>
                </Shimmer>
            </View>

            <View>
                <FlatList
                    style={{ marginBottom: 300 }}
                    data={itemsShow}
                    renderItem={({ item, index }) => {
                        return (
                            <Card containerStyle={{ padding: 10 }} >
                                <Swipeable
                                    key={item}
                                    renderRightActions={rightSwipe}
                                    onSwipeableRightOpen={() => {
                                        console.log("open delete")
                                        remove(item[0])
                                    }}>
                                    <View >
                                        <Shimmer autoRun={true} visible={true}>
                                            <Text>{item[1]}</Text>
                                        </Shimmer>
                                    </View>
                                </Swipeable>
                            </Card>
                        )
                    }
                    }
                />
            </View>
        </View >

    );
};

const styles = StyleSheet.create({
    deleteBox: {
        //backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 55,
    },
});

export default BdScreem;
