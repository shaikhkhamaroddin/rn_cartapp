import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable
} from 'react-native';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addtocart } from '../redux/cartreducer';
import FlatlistComponent from '../components/FlatlistComponent';

function ProductsScreen(props) {
  let [data, setData] = useState(null);
  const cart = useSelector((state) => state.cart.cart.length)
  const cartdata = useSelector((state) => state.cart.cart)

  console.log('cart',cart)
  console.log('cartdata',cartdata)

  const dispatch = useDispatch()
  const addToCart = (item) => {
    dispatch(addtocart(item))
  }

  const goToCart = () => {
    const {navigation} = props;
    navigation.navigate('Cart');
   };

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then(res => {
      console.log('data', res)
      setData(res.data);
    })
  }, [])
  
  const renderFlatlist = () => {
    return data != null &&
      <View>
        <Text style={styles.heading}>List of items</Text>
        <Pressable style={styles.cartbutton} onPress={goToCart}>
          <Text style={styles.buttontext}>Go to cart</Text>
        </Pressable>
        <Text style={styles.title_text}>Items in cart : {cart}</Text>

        <FlatlistComponent
          data={data.products}
          buttonText={"Add to cart"}
          keyExtractor={item => item.id}
          onPress={addToCart}
          passIndex={false}
        />
      </View>

  }

  return <SafeAreaView>
    {renderFlatlist()}
  </SafeAreaView>
}

const styles = StyleSheet.create({
  labletext: {
    fontSize: 15
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 15

  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 20,
    textAlign: 'center'
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderColor: '#949494',
    borderWidth: 1,
    padding: 5,
    height: 60
  },
  button: {
    backgroundColor: '#24A0ED',
    padding: 5,
    borderRadius: 4,
    height: 30
  },
  cartbutton: {
    backgroundColor: '#5CB85C',
    paddingHorizontal: 5,
    alignSelf:'center',
    width:'60%',
    borderRadius: 4,
    height: 25,
    marginBottom:20
  },
  buttontext: {
    color: '#FFFFFF',
    fontWeight: '700',
    textAlign:'center'
  }
})
export default ProductsScreen;