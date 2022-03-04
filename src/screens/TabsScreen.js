import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, SafeAreaView, Image, FlatList } from "react-native";
import themeContext from '../context/themeContext';


const lisTab = [
    {
        status: 'All'
    },
    {
        status: 'Purple'
    },
    {
        status: 'Green'
    }
]


const data = [
    {
        name: 'pepe',
        status: 'Purple'
    },
    {
        name: 'pepe 2',
        status: 'Green'
    },
    {
        name: 'pepe 3',
        status: 'Purple'
    },
    {
        name: 'pepe 4',
        status: 'Green'
    }
]

const TabsScreen = () => {
    const theme = useContext(themeContext)

    const [status, setStatus] = useState('All')
    const [dataList, setDataList] = useState(data)

    const setStatusFilter = status => {

        if (status !== 'All') {
            setDataList([...data.filter(e => e.status === status)])
        } else {
            setDataList(data)
        }
        setStatus(status)
    }


    const renderItem = ({ item, index }) => {
        return (
            <View key={index} style={styles.itemContainer}>

                <View style={styles.itemLogo}>
                    <Image
                        style={styles.itemImge}
                        source={{ uri: 'https://cdn.pixabay.com/photo/2022/02/27/19/46/tourist-attraction-7037967_1280.jpg' }} />
                </View>

                <View style={styles.itemBody}>
                    <Text style={styles.itemName}>{item.name}</Text>
                </View>
                <View style={[styles.itemStatus, { backgroundColor: item.status === 'Purple' ? '#e5848e' : '#69c080' }]}>
                    <Text style={styles.itemName}>{item.status}</Text>
                </View>

            </View>

        )
    }
    const seperator = () => {
        return <View style={{ height: 1, backgroundColor: '#003366' }} />
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.lisTab}>
                {
                    lisTab.map(e => (
                        <TouchableOpacity
                            style={[styles.btnTab, status === e.status && styles.btnTabActive]}
                            onPress={() => setStatusFilter(e.status)}
                        >
                            <Text style={styles.textTab, status === e.status && styles.textTabActive}>{e.status}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <FlatList
                data={dataList}
                keyExtractor={(e, i) => i.toString()}
                renderItem={renderItem}
                ItemSeparatorComponent={seperator}
            />
        </SafeAreaView>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },

    ///
    lisTab: {

        flexDirection: 'row',
        alignSelf: 'center',
    },
    btnTab: {
        width: Dimensions.get('window').width / 3.5,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#EBEBEB',
        padding: 10,
        justifyContent: 'center'
    },
    textTab: {
        fontSize: 16
    },
    btnTabActive: {
        backgroundColor: '#003366'
    },
    textTabActive: {
        color: '#FFFFFF'
    },
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 15
    },
    itemLogo: {
        padding: 10
    },
    itemImge: {
        width: 50,
        height: 50
    },
    itemBody: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 16
    },
    itemStatus: {
        backgroundColor: 'green',
        paddingHorizontal: 6,
        justifyContent: 'center',
        right: 12
    }

});

export default TabsScreen