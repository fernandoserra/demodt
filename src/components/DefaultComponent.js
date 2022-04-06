import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

import PropTypes from "prop-types"

export default DefaultComponent = (props) => {

    const { firstName ="valor por defecto", lastName} = props

    return (
        <View>
            <Text>Datos: {firstName} {lastName} </Text>
        </View>
    )
}

//otra
DefaultComponent.defaultProps ={
    firstName:"valor por defecto",
    lastName: "otro valor por defecto"
}