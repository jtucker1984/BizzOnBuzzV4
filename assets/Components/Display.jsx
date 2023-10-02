import { StyleSheet, View } from 'react-native'
import React from 'react'

const Display = () => {
  return (
    <View style={styles.display}>

    </View>  )
}

export default Display

const styles = StyleSheet.create({
    
    display:{
        flexDirection:'column',
        backgroundColor:'#FFFF',
        height:'75%',
        width:'70%',
        left:'25%',
        bottom:'34.5%',
        borderWidth:1,
        borderColor:'#80EC77'
    }
})