import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const SettingsBtn = () => {
  return (
    <View style={styles.settingsButton}>
    <Pressable>
      <Text>Settings</Text>
    </Pressable>
  </View>
  )
}

export default SettingsBtn

const styles = StyleSheet.create({
    settingsButton:{
        backgroundColor:'#80EC77',
        top:'.6%',
        height:'10%',
        width:'15%',
        alignItems:'center',
        justifyContent:'center',
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10
      },
})