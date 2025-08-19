import { configureStore } from '@reduxjs/toolkit';
import UserSlice from '../Apps/Reducers/UserSlice';

export const store = configureStore({
  reducer: {
    user: UserSlice,
  },
})