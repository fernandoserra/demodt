import React from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native';

import PropTypes from "prop-types"

export default DefaultComponent = (props) => {


    console.log(Platform.OS)

    const { firstName ="valor por defecto", lastName} = props

    return (
        <View>
            <Text>Datos: {firstName} {lastName} </Text>
        </View>
    )
}

//otra
DefaultComponent.defaultProps = {
    firstName:"valor por defecto",
    lastName: "otro valor por defecto"
}


DefaultComponent.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string
}