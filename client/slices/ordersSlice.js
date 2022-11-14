import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = []

export const fetchOrdersAsync = createAsyncThunk("orders", async () => {
  try {
    const { data } = await axios.get(`/api/orders`)
    return data
  } catch (err) {
    console.log(err)
  }
})

export const addOrdersAsync = createAsyncThunk("addOrders", async (payload) => {
  try {
    const { data } = await axios.post(`/api/orders`, payload)
    return data
  } catch (err) {
    console.log(err)
  }
})

// "/:orderId/add_product"
// component will give (orderId, productId)
export const addProductToOrderAsync = createAsyncThunk(
  "addProductToOrder",
  async (payload) => {
    try {
      // payload in the axios post will be received as req.body
      // console.log("payload", payload)
      const { payloadOrderId, payloadProductId } = payload
      const payloadToSend = { productId: payloadProductId }
      const { data } = await axios.post(
        `/api/orders/${payloadOrderId}/add_product`,
        payloadToSend
      )
      console.log("DATA", data)

      // todo 1. we dont have a orders_products state. do we want one?
      // todo 2. if so, we need to make a new slice for it? We might want to move addProductToOrderAsync thunk to that instead
      // todo 3. and then change this return to send the updated productID added to let the state know
      // return in the thunk gets sent to the extra reducer builder as... action.payload?
      // return should not be data. data from an axiospost is just gonna be "OK"
      // return ....
      return data
    } catch (err) {
      console.log(err)
    }
  }
)

export const updateOrdersAsync = createAsyncThunk(
  "orders/updateOrder",
  async ({
    orderId,
    productId,
    userId,
    billingAddress,
    shippingAddress,
    productQuantity,
    status,
    total,
  }) => {
    try {
      const { data } = await axios.put(`/api/orders/${orderId}`, {
        productId,
        userId,
        billingAddress,
        shippingAddress,
        productQuantity,
        status,
        total,
      })
      return data
    } catch (err) {
      console.log(err)
    }
  }
)

// console.log(JSON.parse(JSON.stringify(state)))

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrdersAsync.fulfilled, (state, action) => {
      return action.payload
    })
    builder.addCase(addOrdersAsync.fulfilled, (state, action) => {
      state.push(action.payload)
    })
    builder.addCase(addProductToOrderAsync.fulfilled, (state, action) => {
      console.log("======IM IN THE addProductToOrderAsync BUILDER=======")
      console.log(JSON.parse(JSON.stringify(state)))
      // ! not sure if we need to update the state when product is added to an order?
      // ! just make sure we re-fetch an updated single order when product is added
    })
  },
})

export const selectOrders = (state) => {
  return state.orders
}

export default ordersSlice.reducer
