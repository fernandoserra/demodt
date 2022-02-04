import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { getCities } from '../redux/actions';

const ReduxScreen1 = ({ navigation }) => {

    const { cities } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            dispatch(getCities());
        });
    }, [navigation]);

    return (
        <View>
            <Text>{JSON.stringify(cities)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default ReduxScreen1;