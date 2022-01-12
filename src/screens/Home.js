import React, { useContext } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { NavigationAction, StackActions } from "@react-navigation/routers";
import { CommonActions } from '@react-navigation/native';
import themeContext from "../context/themeContext";
//import styl from "../styles/styles";
import { stylesPerson } from "../styles/styles";
import PushNotification from "react-native-push-notification";
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import strings from "../styles/strings";

const Home = ({ navigation }) => {

    const theme = useContext(themeContext)
    console.log("==========")
    console.log(theme)
    console.log(theme.color)
    console.log("==========")

    return (
        <View style={[styles.center, {backgroundColor:theme.background}]}>
        <Text style={stylesPerson(theme).largeButtonText}>This is the home screen...</Text>
        <Button 
            title="Go to About Screen" 
            onPress={() => navigation.navigate("About")}
            />

          <Button 
            title={strings.NOTICATION}
            onPress={() => handleNotification()}
            />
        </View>
    );
};

const handleNotification = () =>{
  console.log("Ejecutando handleNotification")

  PushNotificationIOS.presentLocalNotification({
      alertTitle:'titulo de ejemplo',
      alertBody:'Mensaje de ejemplo'
  })

  //Funcionando
 /* PushNotification.localNotification({
    channelId: "test-channel",
    title:"You click on ",
    message: "Esta es la prueba de un mensaje",
    bigText:"Demo de bigText...",
    color:'blue'
  });*/

  //Funcionando
 /* PushNotification.localNotificationSchedule({
    channelId: "test-channel",
    title:"Alarma ",
    message: "Esta es la prueba de un mensaje de la alarma",
    date: new Date(Date.now() +  20*1000) ,
    allowWhileIdle:true,
  });
  */

}

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