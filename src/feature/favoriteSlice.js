import { createSlice } from "@reduxjs/toolkit";
const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorite: (state, action) => {
      const item = action.payload;
      const newItem = {
        ...item,
        uniqueId: item.id || item.title || item.name + Date.now(),
        title: item.title || item.name,
        description: item.description || item.email || item.house,
        image: item.image || item.imageUrl,
      };
      const exist = state.favorites.find(
        (fav) => fav.uniqueId === newItem.uniqueId
      );

      if (!exist) {
        state.favorites.push(newItem);
      }
    },

    removeFromFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.uniqueId !== action.payload
      );
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;