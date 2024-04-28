import { 
  Dimensions, 
  FlatList, 
  Image, 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View 
} from 'react-native'
import { 
  COLORS, 
  FONTS, 
  SIZES, 
  dummyData, 
  icons, 
  images 
} from '../constants'

import React, { useEffect, useState } from 'react'
import { Category, TrendingOffer } from '../components'
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

  const [query, setQuery] = useState('');
 

  useEffect(() => {
    filterProductsByCategory(category); 
  }, [category]); 

  const filterProductsByCategory = (category) => {
    if (category === 'All') {
      setProducts(dummyData.products);
    } else {
      const filteredProducts = dummyData.products.filter(product => product.category === category);
      setProducts(filteredProducts); 
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

  function renderOfferSection() {
    return(
      <View style={styles.renderOfferSection}> 
          <Text style={styles.offerSectionTxt}>
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
      <View style={styles.renderOfferSection}> 
          <Text style={styles.offerSectionTxt}>
            Categories
          </Text>
          <FlatList data={categoriesWithAll}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item, index}) => {
            return(
              <Category 
              key={index}
              catecoryItem={item}
              containerStyle={{marginLeft: index===0? SIZES.padding: 0, 
                backgroundColor: item.name===category? "#BBF5D5": "#D9D9D9"}}
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
      {renderHeaderBox()}
 
      <FlatList
        data={products}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapperStyle}
        keyExtractor={(item) => item.id.toString()}
        keyboardDismissMode='on-drag'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100
        }}
        ListHeaderComponent={
          <View>
 
            <View style={{ marginBottom: 20 }} /> 
            {renderSearchBar()}
            {renderOfferSection()}
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
    // flex: 1,
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
  renderOfferSection: {
    marginTop: SIZES.padding,
  },
  offerSectionTxt: {
    marginHorizontal: SIZES.padding,
    color: COLORS.black,
    ...FONTS.h2
  },
  columnWrapperStyle: {
    gap:10, 
    justifyContent: 'flex-start', 
    width:'100%', 
    paddingHorizontal: 20
  }

})
