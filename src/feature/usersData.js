import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
export const fetchUsers = createAsyncThunk("users/fetchUsers",async()=>{
   const response = await axios.get("https://randomuser.me/api/?results=20");
   return response.data.results.map((user,index)=>({
      id: user.login.uuid,
      title: `${user.name.first} ${user.name.last}`,
      description: user.email,
      image: user.picture.large || "https://via.placeholder.com/150"
   }));
})
const usersSlice = createSlice({
    name : "users",
    initialState : {
        users : [],
        loading : false,
        error : null
    },
    reducers : {},
    extraReducers : (builder)=>{
        builder
        .addCase(fetchUsers.pending,(state,action)=>{
            state.loading = true;
            state.error = null
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})
export default usersSlice.reducer;