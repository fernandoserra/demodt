import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Video from 'react-native-video';

const Video2Screen = () => {
    return (
        <View>

            <Text>Video.</Text>
            <View style={styles.videoContainer}>
                <Video
                    source={{ uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1' }}
                    style={{ width: 300, height: 300 }}
                    controls={true}
                    ref={(ref) => {
                        this.player = ref
                    }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    videoContainer: {
        flex: 1,
        backgroundColor: 'black',
    },
    video: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
})

export default Video2Screen