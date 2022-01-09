import React, { useContext,useState } from 'react';
import { View, StyleSheet, Text,Alert } from 'react-native';
import { Input, Button } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Spacer from '../components/Spacer';

const BdScreem = () => {
    
    const [name, setName] = useState('');
    
    const addBD = async () =>{
        var dateNow = Date.now();
        console.log(` Valor a almacenar: ${name}  id: ${dateNow}` )
        await AsyncStorage.setItem(dateNow.toString(), `${name}`);
        Alert.alert("Se almaceno la información", '')
    };

    return (
        <View>
            <Input value={name} onChangeText={setName}  placeholder="Agregar Tarea" />
            <Spacer>
                <Button title="Añadir" onPress={addBD} />
            </Spacer>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default BdScreem;
