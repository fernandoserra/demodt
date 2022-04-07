import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Modal } from 'react-native'
import ModalPicker from './ModalPicker'

const ModalPickerScreen = () => {
    const [chooseData, setChooseData] = useState('Select item...')
    const [isModalVisible, setIsModalVisible] = useState(false)

    const OPTIONS = ['red', 'blue', 'yellow', 'green', 'orange', 'white', 'purple']
    const changeModalVisibility = (bool) =>{
        setIsModalVisible(bool)
    }

    const setData = (option) =>{
        setChooseData(option)
    }
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity 
                onPress={()=> changeModalVisibility(true)}
                style={styles.touchableOpacity}>
                <Text style={styles.text}>{chooseData}</Text>
            </TouchableOpacity>
            <Modal
                transparent={true}
                animationType='fade'
                visible={isModalVisible}
                nRequestClose={()=> changeModalVisibility(false)}
            >
                <ModalPicker 
                    changeModalVisibility={changeModalVisibility} 
                    setData={setData}
                    OPTIONS={OPTIONS}
                />
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003366',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    text: {
        marginVertical: 20,
        fontSize: 25
    },
    touchableOpacity: {
        backgroundColor: 'orange',
        alignSelf: 'stretch',
        paddingHorizontal: 20
    }
})

export default ModalPickerScreen