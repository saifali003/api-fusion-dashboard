import {configureStore} from "@reduxjs/toolkit";
import productsDataReducer from "../feature/productsData";
import harryDataReducer from "../feature/harryData";
import usersDataReducer from "../feature/usersData";
import favoriteReducer from "../feature/favoriteSlice";
import searchReducer from "../feature/searchSlice";
export const store = configureStore({
    reducer:{
      products : productsDataReducer,
      harry : harryDataReducer,
      users : usersDataReducer,
      favorite : favoriteReducer,
      search : searchReducer
    }
})