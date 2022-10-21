import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  infoPopupIsOpen: false,
  statusInfoPopup: '',
  textInfoPopup: '',
};

export const supportSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    openInfoPopup(state, action) {
      const {status, text} = action.payload;

      state.infoPopupIsOpen = true;
      state.statusInfoPopup = status;
      state.textInfoPopup = text;
    },

    closeInfoPopup(state) {
      state.infoPopupIsOpen = false;
    },
  },
});

export const {openInfoPopup, closeInfoPopup} = supportSlice.actions;
export default supportSlice.reducer;