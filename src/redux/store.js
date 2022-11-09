import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/usersSlice";
import postsSlice from "./slices/postsSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    posts: postsSlice,
  },
});