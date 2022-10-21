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
      const {name, email, password, birthday} = action.payload;

      state.name = name;
      state.email = email;
      state.password = password;
      state.birthday = birthday;
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