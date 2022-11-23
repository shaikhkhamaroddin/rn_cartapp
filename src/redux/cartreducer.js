import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtocart: (state,action) => {
      console.log('action',action)
      console.log('state',state.cart)
      let cartArray = state.cart;
      console.log('cartArray',cartArray)

      cartArray.push(action.payload)
      console.log('cartArray push',cartArray)
        state.cart = cartArray;
    },
    removefromcart: (state,action) => {
      const index = action.payload;
      state.cart.splice(index, 1); // remove element
    },
    clearcart: (state, action) => {
      state.cart =[]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addtocart, removefromcart, clearcart } = cartSlice.actions

export default cartSlice.reducer