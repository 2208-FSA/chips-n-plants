import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = []

export const fetchProductsAsync = createAsyncThunk("allProducts", async () => {
  try {
    const { data } = await axios.get(`/api/products`)
    return data
  } catch (err) {
    console.log(err)
  }
})

export const addProductAsync = createAsyncThunk(
  "products/addProducts",
  async (payload) => {
    try {
      const { data } = await axios.post(`/api/products`, payload)
      return data
    } catch (err) {
      console.log(err)
    }
  }
)

export const deleteProductAsync = createAsyncThunk(
  "products/deleteProduct",
  async (productId) => {
    try {
      const { data } = await axios.delete(`/api/products/${productId}`)
      return data
    } catch (err) {
      console.log(err)
    }
  }
)

export const updateProductAsync = createAsyncThunk(
  "products/updateProduct",
  async ({ title, imageUrl, price, description }) => {
    try {
      const { data } = await axios.put(`/api/products/${productId}`, {
        title,
        imageUrl,
        price,
        description,
      })
      return data
    } catch (err) {
      console.log(err)
    }
  }
)

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
      return action.payload
    })
    builder.addCase(addProductAsync.fulfilled, (state, action) => {
      state.push(action.payload)
    })
    builder.addCase(updateProductAsync.fulfilled, (state, action) => {
      return action.payload
    })
  },
})

export const selectProducts = (state) => {
  return state.products
}

export default productsSlice.reducer
