import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DATA from './data'
import { FlashList } from "@shopify/flash-list"
import { TouchableOpacity } from 'react-native-gesture-handler'


const List = () => {
  return (
    <View style={{ flex: 1}}>
      <FlashList
        data={DATA}
        renderItem={({ item }) => {
          <TouchableOpacity style={{ marginTop: 10, }}>
            <Text>{item.id}</Text>
          </TouchableOpacity>

        }}
      />
    </View>
  )
}

export default List

const styles = StyleSheet.create({})
