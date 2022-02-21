import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";
import { Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { getJsonplaceholder } from '../redux/actions';

const ReduxScreen2 = ({ navigation }) => {

    const { placeholder } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            dispatch(getJsonplaceholder());
        });
    }, [navigation]);


    return (
        <View>
            <Text>{JSON.stringify(placeholder)}</Text>

            <View>
                <Button title={"Salir"}  onPress={() => {
                     navigation.navigate("Contact")
                }}/>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({

});

export default ReduxScreen2;