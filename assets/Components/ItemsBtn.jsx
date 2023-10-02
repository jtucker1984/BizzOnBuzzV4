import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

const ItemsBtn = () => {
  return (
    <View style={styles.itemButton}>
    <Pressable>
      <Text>Items</Text>
    </Pressable>
  </View>
  )
}

export default ItemsBtn

const styles = StyleSheet.create({
    itemButton:{
        backgroundColor:'#80EC77',
        top:'.2%',
        height:'10%',
        width:'15%',
        
        alignItems:'center',
        justifyContent:'center'
      },
})