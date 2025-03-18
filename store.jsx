import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./src/FoodVilla/utils/cartSlice";
import youtubeReducer from "./src/Youtube/utils/youtubeSlice"

const store = configureStore({
  reducer: {
    cart: cartReducer,
    youtube: youtubeReducer
   },
});

export default store;
