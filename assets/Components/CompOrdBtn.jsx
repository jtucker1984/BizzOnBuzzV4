import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CompOrdBtn = () => {
  return (
    <View style={styles.comOrdBtn}>
    <Pressable>
      <Text>Completed Orders </Text>
    </Pressable>
    </View>
  )
}

export default CompOrdBtn

const styles = StyleSheet.create({
    comOrdBtn:{
        backgroundColor:'#80EC77',
        height:60,
        width:'15%',
        alignItems:'center',
        justifyContent:'center',
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        right:'3%'
    
      },
})