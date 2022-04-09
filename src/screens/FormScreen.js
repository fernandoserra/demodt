import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'

//document -> https://www.npmjs.com/package/yup
import * as Yup from 'yup'

import DatePicker from 'react-native-date-picker'

const FormScreen = () => {

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')


  //const [date, setDate] = useState(new Date())
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const handleSendForm = async () => {
    console.log("Ejecutando handleSendForm")

    try {
      const shema = Yup.object().shape({
        email: Yup.string().email('Email con formato no valido').required('Email es obligatorio'),
        lastName: Yup.string().required('El Apellido es obligatorio'),
        name: Yup.string().required('El nombre es obligatorio')
      })

      await shema.validate({ email, lastName, name })
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
        style={styles.containerInput} />

      <TextInput
        placeholder='Last Namme'
        value={lastName}
        onChangeText={setLastName}
        style={styles.containerInput} />


      <TextInput
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        style={styles.containerInput} />

      <DatePicker date={date} onDateChange={setDate} />

      <>
        <Button title="Open" onPress={() => setOpen(true)} />
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false)
            setDate(date)
          }}
          onCancel={() => {
            setOpen(false)
          }}
        />
      </>

      <Button title="Enviar" onPress={handleSendForm} />
    </View>
  )
}

export default FormScreen

const styles = StyleSheet.create({
  containerInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: 250,
    padding: 5,
    marginBottom: 10
  }
})