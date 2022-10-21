import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import supportSlice from "./slices/supportSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    support: supportSlice,
  },
});