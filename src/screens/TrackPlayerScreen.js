import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text,TouchableOpacity } from "react-native";
import TrackPlayer , { State } from "react-native-track-player";
import themeContext from "../context/themeContext";


const tracks = [
    {
        id:"1",
        url:require("../../tracks/tracks_country.mp3"),
        title:'pista 1',
        artist:'1111'
    },
    {
      id:"2",
      url:require("../../tracks/tracks_country.mp3"),
      title:'pista 2',
      artist:'222'
  }
]

  TrackPlayer.updateOptions({
    stopWithApp: false,
    capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
    compactCapabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
    ],
  });

  

const TrackPlayerScreen = () => {

    const setUpTrackPlayer = async () => {
      console.log("EJECUTANDO setUpTrackPlayer")
        try {
          await TrackPlayer.setupPlayer();
          await TrackPlayer.add(tracks);
          console.log('Tracks added');
        } catch (e) {
          console.log("Error proporcionado")
          console.log(e);
        }
      };
    
      useEffect(() => {
        setUpTrackPlayer();
    
        return () => TrackPlayer.destroy();
      }, []);

    return(
        <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => TrackPlayer.pause()}>
            <Text style={styles.text}>Pause</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => {
            console.log("ejecutando")
            TrackPlayer.play()
          }}>
            <Text style={styles.text}>Play</Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => TrackPlayer.skipToPrevious()}>
            <Text style={styles.text}>Prev</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => TrackPlayer.skipToNext()}>
            <Text style={styles.text}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      btn: {
        backgroundColor: '#003366',
        padding: 15,
        borderRadius: 10,
        margin: 10,
        width: 160,
      },
      text: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
      },
      row: {
        flexDirection: 'row',
        marginBottom: 20,
      },
});

export default TrackPlayerScreen;