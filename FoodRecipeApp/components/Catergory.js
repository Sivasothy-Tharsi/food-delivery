import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'




const Catergory = ({ containerStyle, catecoryItem, onPress }) => {
    
    return (
        <TouchableOpacity
            style={[styles.containerbtn, containerStyle]}
        onPress={onPress}
        >
            <View style={styles.iconContainer}>
                <Image
                    style={styles.imgIcon}
                    source={catecoryItem.icon} />
                <Text>{catecoryItem.name}</Text>
            </View>


        </TouchableOpacity>

    )
}

export default Catergory

const styles = StyleSheet.create({
    containerbtn: {
        height: 'auto',
        width: 'auto',
        marginTop: SIZES.radius,
        marginRight: 20,
        borderRadius: 50,
        justifyContent: 'center',
        

       
    },
    imgIcon: {
        height: 30,
        width: 30,
        borderRadius: 30,
        marginRight: 10
    },
    iconContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
        height: 40,
        backgroundColor: '#D9D9D9',
        opacity: 0.8,
        borderRadius: 10,
        paddingHorizontal: SIZES.base
    }
})