import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    addedProducts: [],
    // allProducts: [],
  },

  reducers: {
    addToCart: (state, { payload }) => {
      const existingProduct = state.addedProducts.find(
        (item) => item.id == payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += payload.quantity;
      } else {
        state.addedProducts.push(payload);
      }
    },
    removeFromCart: (state, { payload }) => {
      state.addedProducts = state.addedProducts.filter(
        (item) => item.id !== payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = productSlice.actions;
export default productSlice.reducer;
