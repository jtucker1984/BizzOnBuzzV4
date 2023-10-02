import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const DispOrdBtn = () => {
  return (
   
    <View style={styles.disOrdBtn}>
    <Pressable>
      <Text>Disputed Order </Text>
    </Pressable>
    </View>
  )
}

export default DispOrdBtn

const styles = StyleSheet.create({
    disOrdBtn:{
        backgroundColor:'#80EC77',
        height:60,
        width:'15%',
        alignItems:'center',
        justifyContent:'center',
        borderBottomRightRadius:10,
        borderTopRightRadius:10,
        left:'3%'
      }
})