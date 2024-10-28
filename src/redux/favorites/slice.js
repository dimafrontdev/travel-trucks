import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter((id) => id !== payload);
    },
  },
});
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
