import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Audio } from 'expo-av'

const AudioRecord = () => {
    const [recording,setRecording] = useState();

    async function startRecording() {
        try {
            console.log("requseting Permission")
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS:true,
                playsInSilentModeIOS:true
            })

            const recording = new Audio.Recording();
            await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
            await recording.startAsync();
            setRecording(recording);
        } catch (error) {
            
        }
    }

    async function stopRecording(){
        setRecording(undefined);
        await recording.s
    }
  return (
    <View>
      <Text>AudioRecord</Text>
    </View>
  )
}

export default AudioRecord

const styles = StyleSheet.create({})
