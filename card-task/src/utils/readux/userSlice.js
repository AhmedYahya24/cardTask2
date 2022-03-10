import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "user",
  initialState: {
    cardData: [
      {
        title: "",
        description: "",
      },
    ],
    loading: null,
    error: false,
  },
  reducers: {
    startUser: (state) => {
      state.loading = true;
    },
    successUser: (state, action) => {
      state.userData = action.payload;
      state.loading = null;
    },
    errorUser: (state) => {
      state.loading = null;
      state.error = true;
    },
  },
});

export const { startUser, successUser, errorUser } = cardSlice.actions;
export default cardSlice.reducer;
