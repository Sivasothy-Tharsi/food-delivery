import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SIZES } from '../constants'




const Category = ({ containerStyle, catecoryItem, onPress }) => {

    return (
        
        <View>
            {catecoryItem.id === "all" ? (
                <TouchableOpacity
                    style={[styles.containerbtn, containerStyle]}
                    onPress={onPress}
                >
                    <View style={[styles.iconContainer,{paddingHorizontal:20}]}>
                        <Text>{catecoryItem.name}</Text>
                    </View>
                </TouchableOpacity> )
            :(
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
                </TouchableOpacity>)
            }
        </View>
        
    )
}

export default Category

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
        opacity: 0.8,
        borderRadius: 10,
        paddingHorizontal: SIZES.base
    }
})