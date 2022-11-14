import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = []

export const fetchUsersAsync = createAsyncThunk("users", async () => {
  try {
    const { data } = await axios.get(`/api/users`)
    return data
  } catch (err) {
    console.log(err)
  }
})


export const addUsersAsync = createAsyncThunk("addUsers", async (payload) => {
  try {
    const { data } = await axios.post(`/api/users`, payload)
    return data
  } catch (err) {
    console.log(err)
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsersAsync.fulfilled, (state, action) => {
      return action.payload
    })
    builder.addCase(addUsersAsync.fulfilled, (state, action) => {

      state.push(action.payload)
    })

  },
})

export const selectUsers = (state) => {
  return state.users
}

export default usersSlice.reducer