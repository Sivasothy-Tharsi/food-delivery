import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SIZES, COLORS, FONTS } from '../constants';

const OfferDetail = ({ recipeItem }) => {

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <View style={styles.recipeCardDetail}>
                    <Text style={styles.itemName}>
                        {recipeItem.itemName}
                    </Text>
                </View>
                <Text style={styles.description}>
                    {recipeItem.description}
                </Text>
                <Text>
                    {recipeItem.discount}
                </Text>
            </View>
            <Image source={recipeItem.image} style={styles.image} />
        </View>
    )
}

const TrendingOffer = ({ containerStyle, recipeItem, onPress }) => {

    let backgroundColor;

    switch (recipeItem.id % 3) {
        case 0:
            backgroundColor = COLORS.box3;
            break;
        case 1:
            backgroundColor = COLORS.box1;       
            break;
        case 2:
            backgroundColor = COLORS.box2;
            break;
        default:
            backgroundColor = COLORS.lightLime;
            break;
    }

    return (
        <TouchableOpacity
            style={[styles.containerbtn, containerStyle, {backgroundColor}]}
            // onPress={onPress}
        >

            <OfferDetail recipeItem={recipeItem} />
        </TouchableOpacity>
    )
}

export default TrendingOffer;

const styles = StyleSheet.create({
    containerbtn: {
        height: 125,
        width: 250,
        marginTop: SIZES.radius,
        marginRight: 20,
        borderRadius: SIZES.radius,
        justifyContent: 'center',
        elevation:1,
        shadowColor: '#145236'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        justifyContent: 'center'
    },
    textContainer: {
        flexDirection: 'column',
        flex: 1,
        paddingRight: SIZES.base,
        paddingHorizontal: 10
    },
    recipeCardDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemName: {
        width: '70%',
        ...FONTS.h3,
        fontSize: 18,
        color: COLORS.boxColor
    },
    description: {
        color: COLORS.black,
        ...FONTS.body4
    },
    discount: {
        color: COLORS.lightGray,
        ...FONTS.h3
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 20,
        resizeMode: 'cover'
    }
});
