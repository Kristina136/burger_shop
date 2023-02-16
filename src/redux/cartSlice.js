import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'cart',
  initialState:{
    cartItems: []
  },
  reducers: {
   addItemToCart:(state, action)=>{
    const timerId = new Date().getTime()
    state.cartItems.push({dishId:action.payload.dish.id,
                        id: timerId,
                        quantity: action.payload.quantity,
                        totalPrice: action.payload.quantity*action.payload.dish.price});
    
   },
   removeItemFromCart:(state, action)=>{state.cartItems=state.cartItems.filter(cartitem=>cartitem.id !== action.payload.cartItemId)}
  
  }
  })

export const { addItemToCart , removeItemFromCart } = slice.actions;
export const getCartItems=state=>state.cart.cartItems;
export default slice.reducer;
export const getTotalPrice=state=>{return state.cart.cartItems.reduce((total, cartItems)=>{return cartItems.totalPrice+total}, 0)}