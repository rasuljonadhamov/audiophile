import productSlice from "./productSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    product: productSlice,
  },
});

export default store;
