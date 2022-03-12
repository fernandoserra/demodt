import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import themeContext from '../context/themeContext';


const TabsViewScreen = () => {
    const theme = useContext(themeContext)
    return (
        <View>
            <Text>TabsViewScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default TabsViewScreen
