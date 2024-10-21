import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    shoppingCartIds: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log("state" + state);
      const id = action.payload;
      console.log("Action" + id);
      if (!state.shoppingCartIds.includes(id)) {
        state.shoppingCartIds.push(id);
        console.log("product added : ", id);
      } else {
        console.log("product already present in cart ");
      }
      console.log("updated state : " + state.shoppingCartIds);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
