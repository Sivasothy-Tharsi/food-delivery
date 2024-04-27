import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, FONTS } from '../constants'

const CustomButton = ({
    buttonTxt,
    buttonContainerStyle,
    colors,
    onPress
}) => {

    if (colors.length > 0) {
        return (
            <TouchableOpacity onPress={onPress}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={colors}
                    style={[
                        styles.buttonContainer, buttonContainerStyle
                    ]}
                >
                    <Text style={styles.buttonTxt}>
                        {buttonTxt}
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
    return (
        <TouchableOpacity onPress={onPress} style={{ ...buttonContainerStyle }}>
             <Text style={styles.buttonTxt}>
                    {buttonTxt}
                </Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonTxt: {
        textAlign: 'center',
        color: COLORS.white,
        ...FONTS.h3,
    },
    buttonContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        
       
    },
})