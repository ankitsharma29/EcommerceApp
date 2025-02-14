import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== itemId);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
