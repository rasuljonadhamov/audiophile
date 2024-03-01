import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    addedProducts: [],
    allProducts: [],
  },

  reducers: {
    addToCart: (state, { payload }) => {
      state.addedProducts = payload;
    },
  },
});

export const { addToCart } = productSlice.actions;
export default productSlice.reducer;
