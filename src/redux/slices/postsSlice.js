import {createSlice} from "@reduxjs/toolkit";
import {postItemsList} from "../../utils/constants/postItemsList";

const initialState = {
  postItemsList: [],
  currentPost: {},
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPostItemsList(state) {
      state.postItemsList = postItemsList;
    },

    addPost(state, action) {
      const {authorId, selectedGameId, isPublic, text, file} = action.payload;

      state.postItemsList.push({
        id: state.postItemsList.length + 1,
        type: "post",
        authorId: authorId,
        text: text,
        selectedGameId: selectedGameId,
        isPublic: isPublic,
        time: Date.parse((new Date()).toString()),
        imgFile: file,
        likesUserId: [],
        kidsId: [],
      })
    },

    updatePostItems(state, action) {
      const payload = action.payload;
      state.postItemsList = state.postItemsList.map(item => item.id === payload.id ? payload : item);
    },

    setCurrentPost(state, action) {
      state.currentPost = action.payload;
    },

    clearCurrentUser(state) {
      state.currentPost = {};
    },

  },
});

export const {
  getPostItemsList,
  addPost,
  updatePostItems,
  setCurrentPost,
  clearCurrentUser,
} = postsSlice.actions;
export default postsSlice.reducer;