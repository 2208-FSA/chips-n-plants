import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchSingleUser = createAsyncThunk("singleUser", async (id) => {
  try {
    const { data } = await axios.get(`/api/users/${id}`);
  
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const putUser = createAsyncThunk(
  "putUser", async ({userId, firstName, lastName, email, username}) => {
    
    try {
      const { data } = await axios.put(`/api/users/${userId}`,{
        firstName,
        lastName,
        email,
        username,
       });
      return data;
    } catch (error) {
      console.log(error);
    }
  });

const singleUserSlice = createSlice({
  name: "singleUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleUser.fulfilled, (state, action) => {
      
      return action.payload;
    });
    builder.addCase(putUser.fulfilled, (state, action)=>{

      return action.payload;
    })
  },
});

export const selectSingleUser = (state) => {
  return state.singleUser;
};

export default singleUserSlice.reducer;