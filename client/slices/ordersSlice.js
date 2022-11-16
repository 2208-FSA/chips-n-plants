import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  allOrders: [],
  orderProducts: [],
}

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

// this thunk grabs an order and its products
export const fetchOrderAndProductsAsync = createAsyncThunk(
  "orderAndProducts",
  async (payload) => {
    try {
      const { orderId } = payload
      const { data } = await axios.get(`/api/orders/${orderId}`)
      return data.products
    } catch (err) {
      console.log(err)
    }
  }
)

// "/:orderId/add_product"
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
      // console.log("DATA", data)

      // return in the thunk gets sent to the extra reducer builder as... action.payload?
      return data
    } catch (err) {
      console.log(err)
    }
  }
)

export const removeProductFromOrderAsync = createAsyncThunk(
  "removeProductFromOrder",
  async (payload) => {
    try {
      console.log("============= in the thunk")
      console.log(payload)

      const { data } = await axios.put(
        `/api/orders/${payload.orderId}/remove_product`,
        payload
      )
      // console.log("data return", data)
      return "return of remove product thunk"
    } catch (error) {
      console.log(error)
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
      state.allOrders = action.payload
      // return action.payload
    })
    builder.addCase(addOrdersAsync.fulfilled, (state, action) => {
      state.allOrders.push(action.payload)
    })

    // recieves the return from the thunk as, action.payload?
    builder.addCase(fetchOrderAndProductsAsync.fulfilled, (state, action) => {
      // return action.payload
      state.orderProducts = action.payload
    })

    builder.addCase(addProductToOrderAsync.fulfilled, (state, action) => {
      // console.log("======IM IN THE addProductToOrderAsync BUILDER=======")
      // console.log(JSON.parse(JSON.stringify(state)))
      // ! not sure if we need to update the state when product is added to an order?
      // ! just make sure we re-fetch an updated single order when product is added
    })
  },
})

export const selectOrders = (state) => {
  return state.orders
}

export default ordersSlice.reducer
