import {createSlice} from "@reduxjs/toolkit";
import {userList} from "../../utils/constants/userList";

const initialState = {
  usersList: [],
  currentUser: {},
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsersList(state) {
      state.usersList = userList;
    },

    addUser(state, action) {
      const {name, email, password, birthday} = action.payload;

      state.usersList.push({
        id: state.usersList.length + 1,
        name: name,
        email: email,
        avatar: '',
        password: password,
        birthday: birthday,
        subscription: '',
        platforms: [],
        gamesIdList: [],
        friendsIdList: [],
        level: 1,
      })
    },

    updateUserSubscription(state, action) {
      state.usersList.find(user => user.id === state.currentUser.id)
        .subscription = action.payload;

      state.currentUser.subscription = action.payload;
    },

    updateUserPlatforms(state, action) {
      state.usersList.find(user => user.id === state.currentUser.id)
        .platforms = action.payload;

      state.currentUser.platforms = action.payload;
    },

    updateUserGames(state, action) {
      state.usersList.find(user => user.id === state.currentUser.id)
        .gamesIdList = action.payload;

      state.currentUser.gamesIdList = action.payload;
    },

    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },

    clearCurrentUser(state) {
      state.currentUser = {};
    },

  },
});

export const {
  getUsersList,
  addUser,
  updateUserSubscription,
  updateUserPlatforms,
  updateUserGames,
  setCurrentUser,
  clearCurrentUser
} = usersSlice.actions;
export default usersSlice.reducer;