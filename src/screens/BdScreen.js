import React from 'react';
import { Input, Button } from "react-native-elements";
import { View, StyleSheet, Text } from 'react-native';

const BdScreem = () => {
    return (
        <View>
            <Input  placeholder="Agregar Tarea"/>
            <Button title="Añadir"/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default BdScreem;
