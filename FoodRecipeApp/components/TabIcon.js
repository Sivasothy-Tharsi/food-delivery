import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const TabIcon = ({focused, icon}) => {
  return (
    <View style={styles.container}>
      <Image
      source={icon}
      resizeMode='contain'
      style={[styles.img, {tintColor: focused? COLORS.black: COLORS.black}]}
      />
      {
        focused && (
            // <View style={styles.focusedLine}/>
            <View style={styles.focusedCircle}/>
        )
      }
    </View>
  )
}

export default TabIcon

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
    },
    img: {
        width: 60,
        height: 60,
    },
    focusedLine: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 5,
        backgroundColor: COLORS.darkGreen,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    focusedCircle: {
      width: 40,
      height: 40,
      borderRadius: 30,
      backgroundColor: COLORS.darkLime,
      position: 'absolute',
      opacity: 0.5
    }
})