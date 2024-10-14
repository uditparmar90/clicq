import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./ShoppingCart/cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
