import { StyleSheet, Text, Button, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Video as Vid } from "expo-av"
import * as SreenOrientation from "expo-screen-orientation"

const Video = () => {

    const video = useRef(null);
    const [status, setStatus] = useState({});
    const [OrientationisLandScape, setOrientation] = useState(true);

    async function changeScreenOrientation() {
        if (OrientationisLandScape == true) {
            SreenOrientation.lockAsync(SreenOrientation.OrientationLock.LANDSCAPE)
        }
        else if (OrientationisLandScape == false) {
            SreenOrientation.lockAsync(SreenOrientation.OrientationLock.PORTRAIT)
        }
    }

    const toggleOrientation = () =>{
        setOrientation(!OrientationisLandScape);
        changeScreenOrientation()
    }

    return (
        <View style={styles.container}>
            <Vid 
            ref={video}
            style={styles.video}
            source={{
                uri:"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
            }}
            useNativeControls
            resizeMode='contain'
            isLooping
            onPlaybackStatusUpdate={status=>setStatus(()=> status)}
            />
            <View style={styles.btn}>
                <Button 
                    title={status.isPlaying ? 'pause' : 'play'}
                    onPress = {
                        ()=> status.isPlaying ? video.current.pauseAsync():video.current.playAsync()
                    }
                />
                <Button 
                title="Change Orientation"
                onPress={toggleOrientation}
                />
            </View>
        </View>
    )
}

export default Video

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
    },
    video:{
        alignSelf: 'center',
        width:500,
        height:200
    },
    btn:{
        justifyContent:"center",
        alignItems: 'center',
        margin: 10,
    }
})
