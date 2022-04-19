import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// fetch Burgers
export const fetchBurgers = createAsyncThunk(
    "burgers/fetchBurgers",
    async () => {
      const response = await axios.get(
        "http://localhost:5000/getBurger"
      );

      return response.data;
    }
);
  
// update Burger
export const updateBurger = createAsyncThunk(
    "burger/updateBurger",
    async (burgerId,data) => {
      const response = await axios.put(`http://localhost:5000/updateBurger/${burgerId}`, data)
console.log(response)
      return response.data;
    }
);
  
// delete a  Burger
export const deleteBurger = createAsyncThunk(
    "burger/deleteBurger",
    async (burgerId) => {
      const response = await axios.delete(
        `http://localhost:5000/deleteBurger/${burgerId}`
      )
console.log(response)
      return response.data;
    }
  );

const burgerSlice = createSlice({
    name: 'Burgers',
  initialState: {
    burgers: [],
    loading: 'idle'
    },
    reducers: {
            
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    // load all burgers
    builder.addCase(fetchBurgers.fulfilled, (state, action) => {
      // Add burger to the state array
      state.burgers = action.payload
      state.status = "success"
    })

    // Update a burger
    builder.addCase(updateBurger.fulfilled, (state, action) => {
      // Add burger to the state array
      // state.burgers = action.payload
      state.status = "success"
    })    
      
    // delete a burger
    builder.addCase(deleteBurger.fulfilled, (state, action) => {
      // Add burger to the state array
      // state.burgers = action.payload
      state.status = "success"
    })    
   
  },
  
    
})


// export const {createAPI} = burgerSlice.actions;
export default burgerSlice.reducer;