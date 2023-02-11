import { StyleSheet, Text, Button, Image as Img, View } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from "expo-image-picker"

const Image = () => {
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
            aspect: [4, 3]
        })

        console.log(result)

        if (!result.canceled) {
            setImage(result.uri)
        }
    }
    return (
        <View style={ styles.container }>
            <Text style={styles.text}>Image</Text>
            <Button 
                title="Pick Image"
                onPress={pickImage}
            />

            {
                image && <Img source={{uri:image}} style={styles.image} />
            }
        </View>
    )
}

export default Image

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor:"#000",
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 24,
        fontWeight: 'bold',
        color:"#fff",
        marginBottom: 50,
    }
    ,image:{
        width:250,
        height:250,
        marginTop: 30,
    }
})
