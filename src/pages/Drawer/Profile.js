import { StyleSheet, Button, View } from 'react-native'
import React from 'react'

const Profile = ({ navigation }) => {
    return (
        <View>
            <Button title="Home" onPress={()=> navigation.navigate('Home')}/>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})
