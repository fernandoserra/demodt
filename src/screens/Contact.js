import React, {useContext} from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import themeContext from "../context/themeContext";

const dataList =[{key:'1'},{key:'2'},{key:'3'},{key:'4'},{key:'5'}]
const numColumns=2
const Contact = ({ navigation }) => {

    const theme = useContext(themeContext)
    
    renderItem=({item,index})=>{
      let {itemStyle,itemText} =styles; 
      return(
        <View style={itemStyle}>
          <Text style={itemText}>{item.key}</Text>
        </View>
      );
    };

    return (
      <View style={styles.container}>
        <FlatList
          data={dataList}
          renderItem={this.renderItem}
          numColumns={numColumns}
          />
      </View>
    );

};

/*
    <View style={[styles.center]}>
            <Text>This is the contact screen...</Text>
            
            <View style={styles.container}>
              <FlatList
                data={dataList}
                renderItem={this.renderItem}
                />
            </View>

        </View>

*/

//, {backgroundColor:theme.background}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  container:{
    flex: 1
  },
  itemStyle:{
    backgroundColor:'#3232ff',
    alignItems:'center',
    justifyContent:'center',
    height:100,
    flex:1,
    margin:1
  },
  itemText:{
    fontSize:50,
    color:'#fff'
  }
});

export default Contact;