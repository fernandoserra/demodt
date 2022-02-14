import React, { useContext, useState, useEffect } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { NavigationAction, StackActions } from "@react-navigation/routers";
import { CommonActions } from '@react-navigation/native';
import themeContext from "../context/themeContext";
//import styl from "../styles/styles";
import { stylesPerson } from "../styles/styles";
import PushNotification from "react-native-push-notification";
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import strings from "../values/strings";
import Shimmer from "../utils/Shimmer";

import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'


const Home = ({ navigation }) => {

  const theme = useContext(themeContext)
  console.log("==========")
  console.log(theme)
  console.log(theme.color)
  console.log("==========")

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {

      setTimeout(() => {
        setVisible(true)
      }, 3000)

    });

  }, [navigation]);

  return (
    <View style={[stylesPerson(theme).center, { backgroundColor: theme.background }]}>
      <Text style={stylesPerson(theme).largeButtonText}>This is the home screen...</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("About")}
      />

      <Button
        title={strings.NOTICATION}
        onPress={() => handleNotification()}
      />

      <Shimmer autoRun={true} style={{ backgroundColor: '#fff' }} visible={visible}>
        <Text style={{ backgroundColor: 'white' }}>HOLAAA</Text>
      </Shimmer>

      <Text>=====</Text>

      <ShimmerPlaceHolder
        LinearGradient={LinearGradient}
      />

    </View>


  );
};

const handleNotification = () => {
  console.log("Ejecutando handleNotification")

  PushNotificationIOS.presentLocalNotification({
    alertTitle: 'titulo de ejemplo',
    alertBody: 'Mensaje de ejemplo'
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

Home.navigationOptions = {
  title: 'Tracks',
  headerLeft: null,
}

const styles = StyleSheet.create({
});

export default Home;