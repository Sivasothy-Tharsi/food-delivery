import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SIZES, COLORS, FONTS } from '../constants';
import {Rating} from 'react-native-stock-star-rating';

const ReviewDetail = ({ reviewItem }) => {

    console.log(reviewItem)
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Rating maxStars={5} stars={reviewItem.rating} size={20}/>
                <View style={styles.reviewCardDetail}>
                    <Text style={styles.itemName}>
                        {reviewItem.userName}
                    </Text>
                    <Text>
                    {reviewItem.date}
                </Text>
                </View>
                <Text style={styles.description}>
                    {reviewItem.comment}
                </Text>
                
            </View>
        </View>
    )
}

const Review = ({ containerStyle, reviewItem }) => {

    let backgroundColor;

    switch (reviewItem.id % 3) {
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
        <View
            style={[styles.containerbox, containerStyle, {backgroundColor}]}>

            <ReviewDetail reviewItem={reviewItem} />
        </View>
    )
}

export default Review;

const styles = StyleSheet.create({
    containerbox: {
        height: 'auto',
        width: 250,
        marginTop: SIZES.radius,
        marginRight: 10,
        borderRadius: SIZES.radius,
        justifyContent: 'center',
        elevation:1,
        shadowColor: '#145236'
    },
    container: {
        flex:1,
        flexDirection: 'row',
        // alignItems: 'center',
        padding: 5,
        justifyContent: 'center'
    },
    textContainer: {
        flexDirection: 'column',
        flex: 1,
        paddingRight: SIZES.base,
        paddingHorizontal: 10
    },
    reviewCardDetail: {
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
        textAlign: 'justify',
        ...FONTS.body5
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
