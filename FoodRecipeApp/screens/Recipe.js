import {
  StyleSheet, 
  Text, View, 
  Animated, Image, 
  TouchableOpacity, 
  FlatList, 
  KeyboardAvoidingView } 
from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { COLORS, FONTS, SIZES, dummyData, icons } from '../constants'
import { CustomButton, FoodInfo, RelatedFood, Review } from '../components';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet'

const HEADER_HEIGHT = 300;
const Recipe = ({ navigation, route }) => {

  const snapPoints = ['10%', '20%', '50%', '60%', '100%'];
  const bottomSheetRef = useRef(null);

  const [relatedFoods, setRelatedFoods] = useState([]);
  const [category, setCategory] = useState(null);
  const [selectedFood, setSelectedFood] = useState(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  


  useEffect(() => {
    let { recipe } = route.params;
    setSelectedFood(recipe)
    setCategory(selectedFood?.category)
    filterProductsByCategory(category);
  }, [category, selectedFood]);

  const filterProductsByCategory = (category) => {
    const filteredProducts = dummyData.products.filter(product => product.category === category);
    const filteredProductsExcludingSelected = filteredProducts.filter(product => product.id !== selectedFood?.id);
    setRelatedFoods(filteredProductsExcludingSelected);
  }

  

  function renderHeaderBar() {
    return (
      <View style={styles.containerBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.icon} source={icons.backArrow} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={() => console.log("like pressed")}>
            <Image style={styles.icon} source={icons.heart} />
          </TouchableOpacity>
          <View style={{ width: 5 }} />
          <TouchableOpacity onPress={() => console.log("forward pressed")}>
            <Image style={styles.icon} source={icons.forward} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  function renderReviews() {
    return (
      <View style={styles.renderReviewSection}>
        <Text style={styles.reviewSectionTxt}>
          Reviews({selectedFood?.reviews})
        </Text>
        <FlatList
          data={dummyData.reviews}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            return (
              <Review
                key={index}
                reviewItem={item}
                containerStyle={{ marginLeft: index === 0 ? SIZES.radius : 0 }}
              />
            )
          }}
        />
      </View>
    )
  }

  function renderHeaderImage() {
    return (
      <View style={styles.headerImageContainer}>
        <Image
          source={selectedFood?.image}
          resizeMode="contain"
          style={styles.headerImage}
        />
      </View>
    );
  }

  const onPressIcon = () => {
    bottomSheetRef.current?.snapToIndex(0);
  };

  const onPressHandle = () => {
    bottomSheetRef.current?.snapToIndex(3);
  };

  return (
    <GestureHandlerRootView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
      <View>
        {renderHeaderBar()}
        <FlatList
          data={relatedFoods}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ gap: 10, justifyContent: 'center' }}
          keyboardDismissMode='on-drag'
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View>
              {renderHeaderImage()}
              <FoodInfo selectedItem={selectedFood} />
              {renderReviews()}
              {relatedFoods.length > 0 ? <Text style={styles.moreToLoveText}>More to love</Text> : null}
            </View>
          }
          ListFooterComponent={
            <View style={{ marginBottom: 100 }}></View>
          }
          renderItem={({ item, index }) => {
            return (
              <RelatedFood
                key={index}
                relatedItem={item}
                containerStyle={{ margin: 10, elevation: 0.5 }}
                onPress={() => navigation.navigate("Recipe", { recipe: item })}
              />
            )
          }}
        />
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          backgroundComponent={({ style }) => (
            <View style={[styles.bottomSheetBackground, style]} />
          )}
          handleComponent={() => (
            <TouchableOpacity onPress={onPressHandle}>
              <Image source={icons.knife} style={styles.handleImage} />
            </TouchableOpacity>
          )}

        >
          <View style={styles.bottomSheetContent}>
            <TouchableOpacity onPress={onPressIcon}>
              <Image source={icons.close} style={styles.closeIcon} />
            </TouchableOpacity>
            <Image source={icons.cupon} style={styles.cuponImg} />
            <Text style={styles.cuponTxt}>
              “Hey there, congratulations!
              You’ve just received a discount coupon.
              To redeem your savings,
              simply scan the QR code on the coupon and enter the code that appears.
              Enjoy your discounted experience with us!”
            </Text>
            <TextInput style={styles.txtInput} 
            placeholder='Enter your cupon code'
            keyboardType='numeric'
            onChangeText={()=>bottomSheetRef.current?.snapToIndex(4)}
            />
            <CustomButton
              buttonTxt="Claim It"
              colors={[COLORS.btn, COLORS.transparentGray]}
              containerStyle={styles.buttonContainerStyle}
              onPress={() => console.log("claim button pressed")}
            />
          </View>
        </BottomSheet>
      </View>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  )
}

export default Recipe

const styles = StyleSheet.create({
  containerBar: {
    backgroundColor: COLORS.darkLime,
    height: HEADER_HEIGHT / 5,
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    width: 40,
    height: 40
  },
  renderReviewSection: {
    marginTop: 20,
  },
  reviewSectionTxt: {
    marginHorizontal: SIZES.radius,
    color: COLORS.black,
    ...FONTS.h2
  },
  headerImageContainer: {
    alignItems: "center",
    overflow: "hidden",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  headerImage: {
    height: HEADER_HEIGHT,
    width: "200%"
  },
  moreToLoveText: {
    paddingHorizontal: SIZES.radius,
    marginTop: 15,
    color: COLORS.black,
    ...FONTS.h2
  },
  bottomSheetContent: {
    backgroundColor: COLORS.darkgray,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
    alignItems: 'center',
  },
  bottomSheetHandle: {
    width: 40,
    height: 6,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 6,
  },
  handleImage: {
    width: 150,
    height: 150,
    position: 'absolute',
    alignSelf: 'center',
    bottom: -90,
    zIndex: 1,
  },
  bottomSheetBackground: {
    backgroundColor: COLORS.darkgray,
    flex: 1,
    borderRadius: 50
  },
  closeIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 120
  },
  cuponImg: {
    width: '100%',
    height: 120,
    marginTop: 40
  },
  cuponTxt: {
    color: COLORS.white,
    textAlign: 'justify',
    marginHorizontal: 10,
    marginTop: 10,
  },
  buttonContainerStyle: {
    paddingVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    width: 100,
    height: 100,
    marginTop: 20
  },
  txtInput: {
    width: 200,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: COLORS.lightGray,
    textAlign: 'center'
  }
});


