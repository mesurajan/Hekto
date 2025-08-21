import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0, 
  items: [], 
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find(item => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      state.count += 1;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload.id;
      const existing = state.items.find(item => item.id === productId);
      if (existing) {
        state.count -= existing.quantity;
        state.items = state.items.filter(item => item.id !== productId);
      }
      if (state.count < 0) state.count = 0;
    },
    clearCart: (state) => {
      state.count = 0;
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
