import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  name: '',
  email: '',
  password: '',
  birthday: '',
  subscription: '',
  paymentMethod: '',
  cardNumber: '',
  cardName: '',
  cardDate: '',
  cardCode: '',
  platforms: [],
  gamesIdList: [],
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

    setUserSubscription(state, action) {
      state.subscription = action.payload;
    },

    setUserPaymentMethod(state, action) {
      state.paymentMethod = action.payload;
    },

    setUserCardData(state, action) {
      const {cardNumber, cardName, cardDate, cardCode} = action;

      state.cardNumber = cardNumber;
      state.cardName = cardName;
      state.cardDate = cardDate;
      state.cardCode = cardCode;
    },

    setUserPlatforms(state, action) {
      state.platforms = action.payload;
    },

    setUserGames(state, action) {
      state.gamesIdList = action.payload;
    },

    clearUserData(state) {
      state.name = '';
      state.email = '';
      state.password = '';
      state.birthday = '';
      state.subscription = '';
      state.paymentMethod = '';
      state.cardNumber = '';
      state.cardName = '';
      state.cardDate = '';
      state.cardCode = '';
    },

  },
});

export const {
  registerUser,
  setUserSubscription,
  setUserPaymentMethod,
  setUserCardData,
  setUserPlatforms,
  setUserGames,
  clearUserData
} = userSlice.actions;
export default userSlice.reducer;