import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

const Animations = (() => {


    const data = [
        { id: 1, name: "Pedro", phone: "+11-111111111" },
        { id: 2, name: "Carmen", phone: "+22-222222222" },
        { id: 3, name: "Juan", phone: "+33-333333333" },
        { id: 4, name: "Luisa", phone: "+44-4444444" },
        { id: 5, name: "Jose", phone: "+55-55555555" },
        { id: 6, name: "Maria", phone: "+66-66666666" },
        { id: 7, name: "Marcos", phone: "+77-7777777" },
        { id: 8, name: "Josefa", phone: "+88-88888888" },
        { id: 9, name: "Pepe", phone: "+99-99999999" },
        { id: 10, name: "Carla", phone: "+10-10101010" },
        { id: 11, name: "Pancho", phone: "+12-1212121212" },
        { id: 12, name: "Carmen", phone: "+22-222222222" },
        { id: 13, name: "Juan", phone: "+33-333333333" },
        { id: 14, name: "Luisa", phone: "+44-4444444" },
        { id: 15, name: "Jose", phone: "+55-55555555" },
        { id: 16, name: "Maria", phone: "+66-66666666" },
        { id: 17, name: "Marcos", phone: "+77-7777777" },
        { id: 18, name: "Josefa", phone: "+88-88888888" },
        { id: 19, name: "Pepe", phone: "+99-99999999" },
        { id: 20, name: "Carla", phone: "+10-10101010" },
        { id: 21, name: "Pancho", phone: "+12-1212121212" },
        { id: 22, name: "Carmen", phone: "+22-222222222" },
        { id: 23, name: "Juan", phone: "+33-333333333" },
        { id: 24, name: "Luisa", phone: "+44-4444444" },
        { id: 25, name: "Jose", phone: "+55-55555555" },
        { id: 26, name: "Maria", phone: "+66-66666666" },
        { id: 27, name: "Marcos", phone: "+77-7777777" },
        { id: 28, name: "Josefa", phone: "+88-88888888" },
        { id: 29, name: "Pepe", phone: "+99-99999999" },
        { id: 30, name: "Carla", phone: "+10-10101010" },
        { id: 31, name: "Pancho", phone: "+12-1212121212" }
    ]

    renderItem=({item,index})=>{
        //let {itemStyle,itemText} =styles; 
        return(
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        );
      };

    return (

        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={this.renderItem}
            />
        </View>

    );

});


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item:{
        backgroundColor:'#ddd',
        borderRadius:5,
        margin:8,
        padding:8,
        borderColor:'#525558',
        borderWidth:0.2
    },
    itemText:{
        fontSize:16
    }
});

export default Animations;