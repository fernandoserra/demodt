/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import PushNotification from "react-native-push-notification";


import TrackPlayer from "react-native-track-player";


PushNotification.configure({
    onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
    
        // process the notification
    
        // (required) Called when a remote is received or opened, or local notification is opened
        notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    requestPermissions: Platform.OS === 'ios'
})

AppRegistry.registerComponent(appName, () => App);

TrackPlayer.registerPlaybackService(()=> require('./service.js'));
