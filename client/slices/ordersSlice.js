import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchOrdersAsync = createAsyncThunk("orders", async () => {
  try {
    const { data } = await axios.get(`/api/orders`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const addOrdersAsync = createAsyncThunk(
  'addOrders', async (payload) => {
    try {
      const { data } = await axios.post(`/api/orders`, payload);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateOrdersAsync = createAsyncThunk(
  'orders/updateOrder',
  async ({
    orderId,
    productId,
    userId,
    billingAddress,
    shippingAddress,
    productQuantity,
    status,
    total }) => {
    try {
      const { data } = await axios.put(`/api/orders/${orderId}`, {
        productId,
        userId,
        billingAddress,
        shippingAddress,
        productQuantity,
        status,
        total
      })
      return data;
    } catch (err) {
      console.log(err)
    }
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrdersAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addOrdersAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(updateOrdersAsync.fulfilled, (state, action) => {
      const index = state.findIndex((order) => order.id === action.payload.id);
      state[index] = action.payload;
    });
  },
});

export const selectOrders = (state) => {
  return state.orders;
};

export default ordersSlice.reducer;
