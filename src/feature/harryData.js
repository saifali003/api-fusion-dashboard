import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchHarry = createAsyncThunk(
  "harry/fetchHarry",
  async () => {
    const response = await axios.get(
      "https://hp-api.onrender.com/api/characters"
    );
    return response.data.slice(0, 24).map((char, index) => ({
        id: index + 1,
        title: char.name?.slice(0, 20),
        description: char.house || "Slytherin",
        image: char.image || "https://plus.unsplash.com/premium_photo-1661667065157-2dd7a80142f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fHww" 
      }));
  }
);

const harrySlice = createSlice({
  name: "harry",
  initialState: {
    harry: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHarry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHarry.fulfilled, (state, action) => {
        state.loading = false;
        state.harry = action.payload;
      })
      .addCase(fetchHarry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default harrySlice.reducer;