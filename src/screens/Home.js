import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

import { NavigationAction, StackActions } from "@react-navigation/routers";


import { CommonActions } from '@react-navigation/native';


const Home = ({ navigation }) => {


return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      <Button 
        title="Go to About Screen" 
        onPress={() => navigation.navigate("About")}
        />
    </View>
  );
};


Home.navigationOptions={
    title:'Tracks',
    headerLeft: null, 
}



const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Home;