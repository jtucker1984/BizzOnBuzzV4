import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View  style={styles.logo}>
     <Image source={require('../Images/logo.png')}/>
     </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    logo:{
        justifyContent:'flex-start',
        top:'10%',
        left:'5%'
       },
})