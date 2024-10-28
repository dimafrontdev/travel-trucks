import { fetchCampersApi } from "api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const fetchCampers = createAsyncThunk(
  "catalog/get",
  async (options = {}, { getState }) => {
    const filters = getState().filters;
    try {
      return await fetchCampersApi({
        ...filters,
        ...filters.equipment,
        ...options,
      });
    } catch (error) {
      toast(error.response?.data || error.message, { icon: "❌" });
    }
  },
);
