import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SIZES, COLORS, FONTS } from '../constants';

const Food = ({ recipeItem, onPress }) => {
    
    return (
        <TouchableOpacity style={styles.containerBtn} onPress={onPress}>
            <View style={styles.outerContainer}>
                <View style={styles.innerContainer}>
                    <Image style={styles.innerContainer} source={recipeItem.image}/>
                </View>
            </View>
            <Text style={{color:COLORS.black, alignSelf: 'center'}}>{recipeItem.name}</Text>
            <View style={styles.detail}>
                <Text>{recipeItem.price}</Text>
                <Text>{recipeItem.rating}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Food;

const styles = StyleSheet.create({
   containerBtn: {
        // flex: 1,
        height: 150,
        marginTop: 15,
        backgroundColor: COLORS.white2,
        elevation: 1,
        borderRadius: 10
        
   },
   outerContainer: {
    width: 100,
    height: 100,
    backgroundColor: COLORS.white,
    elevation:1,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 10
},
innerContainer: {
    width: 80,
    height: 80,
    backgroundColor: COLORS.black,
    
},
detail: {
    flexDirection: 'row',
    // position: 'relative',
    justifyContent: 'space-evenly'
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