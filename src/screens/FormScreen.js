import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'

import * as Yup from 'yup'

const FormScreen = () => {

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleSendForm = async () => {
    console.log("Ejecutando handleSendForm")

    try {
      const shema = Yup.object().shape({
        lastName: Yup.string().required('El Apellido es obligatorio'),
        name: Yup.string().required('El nombre es obligatorio')
      })

      await shema.validate({ lastName, name })
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert(error.message)
      }
    }

  }



  return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
      <TextInput
        placeholder='Name'
        value={name}
        onChangeText={setName}
        style={{ borderColor: 'black', borderWidth: 1, width: 250, padding: 5, marginBottom:10 }} />

      <TextInput
        placeholder='Last Namme'
        value={lastName}
        onChangeText={setLastName}
        style={{ borderColor: 'black', borderWidth: 1, width: 250, padding: 5,marginBottom:10 }} />

      <Button title="Enviar" onPress={handleSendForm} />
    </View>
  )
}

export default FormScreen

const styles = StyleSheet.create({})