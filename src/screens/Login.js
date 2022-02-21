import { StackActions } from "@react-navigation/routers";
import React, { Component, useState, useContext, useEffect } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { CommonActions } from "@react-navigation/native";

import PushNotification from "react-native-push-notification";

useEffect(() => {
  createChannels();
}, []);

const Login = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>Login</Text>
      <Button
        title="Home"
        onPress={() => redirect(navigation)}
      />

      <Button
        title="Redirect 2"
        onPress={() =>{
          navigation.navigate("Drawer",{screen:"Grafico"})
        }}
      />
    </View>
  );
};

const redirect = (navigation) => {
  console.log("Ejectando redirect")
  navigation.navigate("Drawer")

  //Funcionando
  /*navigation.dispatch(
      CommonActions.reset({
         index: 0,
         routes: [{ name: "Drawer" }],
     })
 );*/

  navigation.reset({
    routes: [{ name: "Drawer" }]
  });
}


const createChannels = () => {
  PushNotification.createChannel(
    {
      channelId: "test-channel",
      channelName: "Test Channel"
    }
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Login;