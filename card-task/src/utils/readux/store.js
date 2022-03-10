import { configureStore } from "@reduxjs/toolkit";
import cardSlic from "./userSlice";

const store = configureStore({
  reducer: {
    card: cardSlic,
  },
});

export default store;
