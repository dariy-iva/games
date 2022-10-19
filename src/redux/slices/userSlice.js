import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
  email: '',
  password: '',
  birthday: '',
  subscription: '',
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.birthday = action.payload.birthday;
    },
    setUserEmail(state, action) {
      state.email = action.payload.email;
    },
    setUserSubscription(state, action) {
      state.user.subscription = action.payload.subscription;
    },
    clearUserData(state) {
      state.user.name = '';
      state.user.email = '';
      state.user.password = '';
      state.user.birthday = '';
      state.user.subscription = '';
    },
  },
});

export const { registerUser, setUserEmail, setUserSubscription, clearUserData } = userSlice.actions;
export default userSlice.reducer;