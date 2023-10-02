import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CurentOrdBtn = () => {
  return (
    <View style={styles.curOrdBtn}>
    <Pressable>
      <Text>Current Orders </Text>
    </Pressable>
    </View>
  )
}

export default CurentOrdBtn

const styles = StyleSheet.create({
    curOrdBtn:{
    
        backgroundColor:'#80EC77',
        height:60,
        width:'15%',
        alignItems:'center',
        justifyContent:'center',
       
        
      },
})