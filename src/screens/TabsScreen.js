import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import themeContext from '../context/themeContext';

const TabsScreen = () => {
    const theme = useContext(themeContext)
    return (
        <View>
            <Text>TabsScreen</Text>
        </View>
    )

}

const styles = StyleSheet.create({})

export default TabsScreen