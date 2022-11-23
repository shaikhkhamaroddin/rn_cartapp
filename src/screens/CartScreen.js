import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable
} from 'react-native';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { removefromcart } from '../redux/cartreducer';
import FlatlistComponent from '../components/FlatlistComponent';

function CartScreen(props){
  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()

  const goToProducts = () => {
    const {navigation} = props;
    navigation.navigate('Products');
   };

   const removeFromCart = (itemIndex) => {
    dispatch(removefromcart(itemIndex))
  }

  const renderFlatlist = () => {
    const total = cart.reduce((a,b)=>a + b.price,0)
    return cart != null &&
      <View>
        <Text style={styles.heading}>List of items</Text>
        <Pressable style={styles.cartbutton} onPress={goToProducts}>
          <Text style={styles.buttontext}>Go to Products</Text>
        </Pressable>
        <Text style={styles.title_text}>Total price : {total}</Text>

        <FlatlistComponent
          data={cart}
          buttonText={"Remove from cart"}
          keyExtractor={(item,index) =>  'key'+index}
          onPress={removeFromCart}
          passIndex={true}
        />
      </View>

  }
    return<SafeAreaView>
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

export default CartScreen;