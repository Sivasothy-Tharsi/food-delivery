import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS } from '../constants'
import { Rating } from "react-native-stock-star-rating"

const RelatedFood = ({ containerStyle, relatedItem, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.container, containerStyle]}
            onPress={onPress}
        >
            <Image
                source={relatedItem.image}
                resizeMode='cover'
                style={styles.img}
            />

            <View style={styles.containerView}>
                <Text style={{ flex: 1, ...FONTS.h2 }}>
                    {relatedItem.name}
                </Text>
                <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Text style={{ ...FONTS.body4 }}>
                        Price:
                    </Text>
                    <Text style={{ ...FONTS.body4 }}>
                        S {relatedItem.price.small} | M {relatedItem.price.medium} | L {relatedItem.price.large}
                    </Text>
                </View>

                <View style={styles.rating}>
                    <Text style={{
                        color: COLORS.gray,
                        ...FONTS.body4
                    }}>
                        {relatedItem.rating} | 5
                    </Text>
                    <Rating stars={relatedItem.rating} maxStars={5} size={25} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RelatedFood

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray2,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: SIZES.radius
    },
    containerView: {
        width: '65%',
        paddingHorizontal: 20,

    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})