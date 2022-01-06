import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import themeContext from '../context/themeContext';
import {WebView} from "react-native-webview";

const VideoScreen = () => {
    const theme = useContext(themeContext)
    return (
        <WebView
            style={{ flex: 1 }}
            source={{
                uri: 'https://www.youtube.com/embed/DGQwd1_dpuc?rel=0&autoplay=0&showinfo=0&controls=0',
            }}
            javaScriptEnabled={true}
        />
    )
}

const styles = StyleSheet.create({})

export default VideoScreen
