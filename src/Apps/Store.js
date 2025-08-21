import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './Reducers/UserSlice';
import cartSlice from './Reducers/cartSlice';

export const store = configureStore({
  reducer: {
    user: UserSlice,
    cart: cartSlice, // add cart slice
  },
});
