import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SIZES, COLORS, FONTS } from '../constants';
import {Rating} from 'react-native-stock-star-rating';

const windowWidth = Dimensions.get('window').width;
const imageSize = (windowWidth-60)/3.5;

const Food = ({ recipeItem, onPress }) => {
    
    return (
        <TouchableOpacity style={styles.containerBtn} onPress={onPress}>
            <View style={styles.outerContainer}>
                    <Image style={styles.innerContainer} source={recipeItem.image}/>               
            </View>
            <Text style={{color:COLORS.black, alignSelf: 'center'}}>{recipeItem.name}</Text>
            <View style={styles.detail}>
                <Text>{recipeItem.price.small} (S)</Text> 
            </View>
            <View style={styles.rating}>
                <Text>{recipeItem.rating}</Text>
                <Rating maxStars={5} stars={recipeItem.rating} size={10}/>
            </View>
        </TouchableOpacity>
    );
};

export default Food;

const styles = StyleSheet.create({
   containerBtn: {
        // flex: 1,
        // width: windowWidth/3,
        marginTop: 15,
        backgroundColor: COLORS.white,
        elevation: 1,
        borderRadius: 10,
        // marginHorizontal: 10
        
   },
   outerContainer: {
    width: windowWidth/3.5, //100
    height:windowWidth/3.5,  //100
    backgroundColor: COLORS.white,
    elevation:1,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 10
},
innerContainer: {
    width: imageSize,   //80
    height: imageSize,   //80
    backgroundColor: COLORS.black,
    
},
detail: {
    flexDirection: 'row',
    // position: 'relative',
    justifyContent: 'space-evenly'
},
rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5
}

});










        // <TouchableOpacity
        //       style={styles.containerBtn}>
        //           <Image style={{height: 80, width:110, padding: 10}} source={recipeItem.image}/>
        //           <Text>{recipeItem.name}</Text>
        //     </TouchableOpacity>


// <TouchableOpacity
        //     style={[styles.containerbtn, containerStyle]}
        //     onPress={onPress}
        // >
        //     <View style={styles.imageContainer}>
        //         <Image
        //             style={styles.image}
        //             source={recipeItem.image}
        //             resizeMode="cover"
        //         />
        //     </View>
        //     <Text>{recipeItem.name}</Text>
        //     <Text>{recipeItem.category}</Text>
        // </TouchableOpacity>

        // containerbtn: {
        //     marginTop: SIZES.radius,
        //     marginRight: 20,
        //     borderRadius: 50,
        //     justifyContent: 'center',
        //     alignItems: 'center', 
        // },
        // imageContainer: {
        //     width: 100, 
        //     height: 100, 
        //     borderRadius: 10, 
        //     overflow: 'hidden',
        // },
        // image: {
        //     flex: 1, 
        //     width: '100%', 
        //     height: '100%', 
        // },



    //     display: 'flex',
    // // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row',
    // backgroundColor: '#6b7280',
    // flex: 1,
    // height: 240,
    // width: 300,
    // borderRadius: 20,
    // marginTop: 15,
    // flexDirection: 'column'