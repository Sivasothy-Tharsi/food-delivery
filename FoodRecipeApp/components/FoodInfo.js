import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, SIZES, icons } from '../constants'
import CustomButton from './CustomButton';
import { Rating } from 'react-native-stock-star-rating'

const FoodInfo = ({ selectedItem }) => {
    const [size, setSize] = useState("Small");
    const [quantity, setQuantity] = useState(1);

    const handleSizeChange = (selectedSize) => {
        setSize(selectedSize);
    }

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <View style={styles.container}>
            <View style={styles.detailContainer}>
                <Text style={styles.name}>The Melt's {selectedItem?.name}</Text>
                <View>
                    <Text style={styles.price}>{selectedItem?.price[size.toLowerCase()]}</Text>
                    <Text>for {size}</Text>
                </View>
            </View>

            <Text style={styles.description}>{selectedItem?.detailDescription}</Text>

            <View style={styles.reviewContainer}>
                <View>
                    <Rating maxStars={5} stars={selectedItem?.rating} size={20} />
                    <Text>{selectedItem?.rating} | 5</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={icons.delivery} />
                    <Text>45 min</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={icons.location} />
                    <Text>Galle</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={icons.time} />
                    <View>
                        <Text>{selectedItem?.cookingTime}</Text>
                        <Text style={styles.txt}>cooking</Text>
                    </View>

                </View>
            </View>

            <View style={styles.ChangerContainer}>
                <View style={styles.sizeChangerContainer}>
                    <Text>Size: {size}</Text>
                    <View style={styles.sizeViewer}>
                        {selectedItem?.sizes.map((item, index) => (
                            <Text
                                key={item}
                                style={{ color: size === item ? COLORS.darkLime : COLORS.gray, fontSize: 16 }}
                                onPress={() => handleSizeChange(item)}
                            >
                                {item[0]}
                                <View style={styles.gap} />
                            </Text>
                        ))}
                    </View>
                </View>

                <View style={{ flexDirection: 'column' }}>
                    <Text>Quantity</Text>
                    <View style={styles.QbtnContainer}>
                        <TouchableOpacity onPress={decrementQuantity}>
                            <View style={styles.Qbtn}>
                                <Text style={[{ color: COLORS.black }]}> - </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ width: 5 }} />
                        <Text>{quantity}</Text>
                        <View style={{ width: 5 }} />
                        <TouchableOpacity onPress={incrementQuantity}>
                            <View style={styles.Qbtn}>
                                <Text style={[{ color: COLORS.black },]}> + </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <CustomButton
                    buttonTxt='Add to cart'
                    colors={[COLORS.btn, COLORS.transparentGray]}
                    buttonContainerStyle={styles.buttonContainerStyle}
                    onPress={() => console.log("add to cart")}
                />
            </View>
        </View>
    )
}

export default FoodInfo


const styles = StyleSheet.create({
    buttonContainerStyle: {
        paddingVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    container: {
        flexDirection: 'column',
        paddingHorizontal: SIZES.radius,
        marginTop: 10,
        marginBottom: 15
    },
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        color: COLORS.black,
        alignSelf: 'flex-start',
        ...FONTS.h2
    },
    price: {
        color: COLORS.black,
        alignSelf: 'flex-end'
    },
    description: {
        color: COLORS.black,
        textAlign: 'justify'
    },
    ChangerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    sizeChangerContainer: {
        flexDirection: 'column'
    },
    sizeViewer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10
    },
    gap: {
        width: 10
    },
    QbtnContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10,
        alignItems: 'center'
    },
    Qbtn: {
        width: 25,
        height: 25,
        backgroundColor: COLORS.lightGray3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    reviewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
    , icon: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    txt: {
        fontSize:10
    }
})