import { StyleSheet, Text, View, Pressable} from 'react-native'
import React from 'react'

const PromoBtn = () => {
  return (
    <View style={styles.promotionsButton}>
    <Pressable>
      <Text>Promotions</Text>
    </Pressable>
  </View>
  )
}

export default PromoBtn

const styles = StyleSheet.create({
    promotionsButton:{
        backgroundColor:'#80EC77',
        top:'.4%',
        height:'10%',
        width:'15%',
        alignItems:'center',
        justifyContent:'center'
      },
})