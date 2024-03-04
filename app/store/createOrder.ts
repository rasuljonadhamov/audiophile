import { createSlice } from "@reduxjs/toolkit";

// Define the type for the order data
interface CreateOrderPayload {
  order: Order; // Replace with your Order interface path
}

const orderSlice = createSlice({
  name: "order",
  initialState: {
    loading: false,
    error: null,
    createdOrder: null,
  },
  reducers: {
    createOrderRequest(state) {
      state.loading = true;
      state.error = null;
      state.createdOrder = null;
    },
    createOrderSuccess(state, action: { payload }) {
      state.loading = false;
      state.error = null;
      state.createdOrder = action.payload;
    },
    createOrderFailure(state, action: { payload: Error }) {
      state.loading = false;
      state.error = action.payload;
      state.createdOrder = null;
    },
  },
});

export const { createOrderRequest, createOrderSuccess, createOrderFailure } =
  orderSlice.actions;
export default orderSlice.reducer;
