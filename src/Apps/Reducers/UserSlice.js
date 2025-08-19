import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    userName: "Surajan Shrestha",
    role: "Buyer",
    email: "Surajan@gmail.com",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; 
    },
    clearUser: (state) => {
      state.user = null; 
    },
  },
});

export const { setUser, clearUser } = userSlice.actions; 
export default userSlice.reducer;
