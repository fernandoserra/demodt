import React from 'react';
import { Input, Button } from "react-native-elements";
import { View, StyleSheet, Text } from 'react-native';

import Spacer from '../components/Spacer';

const BdScreem = () => {
    return (
        <View>
            <Input placeholder="Agregar Tarea" />
            <Spacer>
                <Button title="Añadir" />
            </Spacer>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default BdScreem;
