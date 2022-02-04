import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { getCities } from '../redux/actions';

const ReduxScreen2 = ({ navigation }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            dispatch(getJsonplaceholder());
        });
    }, [navigation]);


    return (
        <View>
            <Text>Redux 2</Text>
        </View>
    );
    
}

const styles = StyleSheet.create({

});

export default ReduxScreen2;