import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

const OrderBtn = () => {
  return (
    <View style={styles.ordButton}>
    <Pressable>
       <Text>Orders</Text>
    </Pressable>
  </View>
  )
}

export default OrderBtn

const styles = StyleSheet.create({
    ordButton:{
        backgroundColor:'#80EC77',
        height:'10%',
        width:'15%',
        alignItems:'center',
        justifyContent:'center',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    
      },
})