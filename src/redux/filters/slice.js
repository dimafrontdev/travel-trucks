import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  form: "",
  equipment: {},
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, { payload }) => {
      state.form = payload.form ?? state.form;
      state.location = payload.location ?? state.location;
      state.equipment = payload.equipment ?? state.equipment;
    },
    resetFilters: () => initialState,
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
