import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "src/redux";

const initialState = {
  loading: false,
  campers: [],
  page: 1,
  total: 0,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    resetCatalog: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCampers.rejected, (state) => {
        state.loading = false;
        state.campers = [];
      })
      .addCase(fetchCampers.fulfilled, (state, { payload, meta }) => {
        if (payload) {
          const { items, total } = payload;
          state.campers = state.campers.length
            ? [...state.campers, ...items]
            : items;
          state.total = total;
          state.loading = false;
          state.page = meta.arg?.page || 1;
        } else {
          state.loading = false;
          state.campers = [];
        }
      });
  },
});

export const { resetCatalog } = catalogSlice.actions;

export const catalogReducer = catalogSlice.reducer;
