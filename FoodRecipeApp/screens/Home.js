import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONTS, SIZES, dummyData, icons, images } from '../constants'
import { TrendingOffer } from '../components'
import Catergory from '../components/Catergory'
import Food from '../components/Food'
import { useNavigation } from '@react-navigation/native'

const { height } = Dimensions.get("window")

const Home = () => {

  const navigation = useNavigation();

  const categoriesWithAll = [{
    id: 'all',
    name: 'All',
    icon: null, 
  }, ...dummyData.categories];

  
  const [products, setProducts] = useState(dummyData.products);

  const [category, setCategory] = useState('All');

  useEffect(() => {
    filterProductsByCategory(category); // Call filterProductsByCategory when category changes
  }, [category]); 

  const filterProductsByCategory = (category) => {
    if (category === 'All') {
      setProducts(dummyData.products); // Show all products if category is 'All'
    } else {
      const filteredProducts = dummyData.products.filter(product => product.category === category);
      setProducts(filteredProducts); // Filter products based on category
    }
  };
  function renderHeaderBox() {
    return (
      <View style={styles.headerBox}>
        <View style={styles.headerTop}>
          <View style={styles.meltTxtCover}>
            <Text style={styles.meltTxt}>Melt</Text>
          </View>
          <TouchableOpacity>
            <Image source={images.UserProfile9} style={styles.img} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.weltxt}>Order Your</Text>
          <View style={styles.txtCover}>
            <Text style={styles.weltxt}>Favorite & Delicious Food</Text>
            <Image source={icons.face} style={styles.iconStyle} />
          </View>
        </View>
      </View>
    );
  }

  function renderSearchBar() {
    return (
      <View style={styles.renderSearchBar}>
        <TextInput
          style={styles.renderSearchBarTxt}
          placeholder='Search Recipe'
          placeholderTextColor={COLORS.gray}
        />
        <Image
          source={icons.search}
          style={styles.renderSearchBarImg}
        />
      </View>
    )
  }

  function renderTrendingSection() {
    return(
      <View style={styles.renderTrendingSection}> 
          <Text style={styles.trendingSectionTxt}>
            Today offers
          </Text>
          <FlatList data={dummyData.offers}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item, index}) => {
            return(
              <TrendingOffer 
              key={index}
              recipeItem={item}
              containerStyle={{marginLeft: index===0? SIZES.padding: 0}}
              onPress={()=> navigation.navigate("Offer", {recipe: item})}
              />
            )
          }}
          />
      </View>
    )
  }

  


  function renderCategory() {
    return(
      <View style={styles.renderTrendingSection}> 
          <Text style={styles.trendingSectionTxt}>
            Categories
          </Text>
          <FlatList data={categoriesWithAll}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item, index}) => {
            return(
              <Catergory 
              key={index}
              catecoryItem={item}
              containerStyle={{marginLeft: index===0? SIZES.padding: 0}}
              onPress={()=>setCategory(item.name)}
              />
          
             
            )
          }}
          />
      </View>
    
    )
  }

 

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        numColumns={3}
        columnWrapperStyle={{gap:10, justifyContent: 'center'}}
        keyExtractor={(item) => item.id.toString()}
        keyboardDismissMode='on-drag'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100
        }}
        ListHeaderComponent={
          <View>
            {renderHeaderBox()}
            <View style={{ marginBottom: 20 }} /> 
            {renderSearchBar()}
            {renderTrendingSection()}
            {renderCategory()}
          </View>
        }

        renderItem={({item, index}) => {
          return(
            <Food 
              key={index}
              recipeItem={item}
              containerStyle={{marginLeft: 10}}
              onPress={()=> navigation.navigate("Recipe", {recipe:item})}
              />
            
          )
        }}

      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: COLORS.black
  },
  headerContent: {
    flex: 1,
    alignSelf: 'flex-end',
    marginHorizontal: SIZES.radius,
    marginVertical: SIZES.radius
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: SIZES.radius
  },
  headerBox: {
    flex: 1,
    backgroundColor: COLORS.darkLime,
    width: '100%',
    height: height / 4,
    borderBottomRightRadius: height / 8,
    flexDirection: 'column',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  headerContent: {
    paddingHorizontal: 20,
    marginTop: 20,
    flex: 1,
  },
  weltxt: {
    ...FONTS.h2,
    color: COLORS.white,
    marginBottom: 5,
  },
  iconStyle: {
    marginLeft: 5,
  },
  meltTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.white
  },
  txtCover: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -10
  },
  meltTxtCover: {
    width: 64,
    height: 23,
    backgroundColor: '#BEA0A0',
    borderRadius: 10,
    alignItems: 'center'
  },

  renderSearchBar: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    marginHorizontal: SIZES.padding,
    paddingHorizontal: SIZES.radius,
    borderRadius: 10,
    backgroundColor: COLORS.lightGray3

  },
  renderSearchBarImg: {
    width: 20,
    height: 20,
    tintColor: COLORS.gray
  },
  renderSearchBarTxt: {
    marginLeft: SIZES.radius,
    ...FONTS.body3,
    flex: 1
  },
  renderTrendingSection: {
    marginTop: SIZES.padding,
  },
  trendingSectionTxt: {
    marginHorizontal: SIZES.padding,
    color: COLORS.black,
    ...FONTS.h2
  },

})




















  // function renderCategory() {
  //   return(
  //     <View style={styles.renderTrendingSection}> 
  //         <Text style={styles.trendingSectionTxt}>
  //           Categories
  //         </Text>
  //         <FlatList data={categoriesWithAll}
  //         horizontal
  //         showsHorizontalScrollIndicator={false}
  //         keyExtractor={(item) => item.id.toString()}
  //         renderItem={({item, index}) => {
  //           return(
  //             <Catergory 
  //             key={index}
  //             catecoryItem={item}
  //             containerStyle={{marginLeft: index===0? SIZES.padding: 0}}
  //             onPress={()=> navigation.navigate("Category", {recipe: item})}
  //             />
          
             
  //           )
  //         }}
  //         />
  //     </View>
    
  //   )
  // }


   // function renderCategory() {
  //   return(
  //     <View style={styles.renderTrendingSection}> 
  //         <Text style={styles.trendingSectionTxt}>
  //           Categories
  //         </Text>
  //         <FlatList data={dummyData.categories}
  //         horizontal
  //         showsHorizontalScrollIndicator={false}
  //         keyExtractor={(item) => item.id.toString()}
  //         renderItem={({item, index}) => {
  //           return(
  //             <Catergory 
  //             key={index}
  //             catecoryItem={item}
  //             containerStyle={{marginLeft: index===0? SIZES.padding: 0}}
  //             onPress={()=>setCategory(item.name)}
  //             />
          
             
  //           )
  //         }}
  //         />
  //     </View>
    
  //   )
  // }