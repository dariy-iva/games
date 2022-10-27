import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/usersSlice";
import supportSlice from "./slices/supportSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    support: supportSlice,
  },
});