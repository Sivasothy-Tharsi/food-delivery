import React from 'react';
import { 
    Dimensions, 
    Image, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View } 
    from 'react-native';
    
import { COLORS } from '../constants';
import {Rating} from 'react-native-stock-star-rating';

const windowWidth = Dimensions.get('window').width;
const imageSize = (windowWidth-60)/3.5;

const Food = ({ recipeItem, onPress }) => {
    
    return (
        <TouchableOpacity style={styles.containerBtn} onPress={onPress}>
            <View style={styles.outerContainer}>
                    <Image style={styles.innerContainer} source={recipeItem.image}/>               
            </View>
            <Text style={{color:COLORS.black, alignSelf: 'center'}}>
                {recipeItem.name}
            </Text>
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
        marginTop: 15,
        backgroundColor: COLORS.white,
        elevation: 1,
        borderRadius: 10,
   },
   outerContainer: {
    width: windowWidth/3.5, 
    height:windowWidth/3.5, 
    backgroundColor: COLORS.white,
    elevation:1,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 10
},
innerContainer: {
    width: imageSize,   
    height: imageSize,   
    backgroundColor: COLORS.black,
    
},
detail: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
},
rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5
}

});

