import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampersApi = async (options = {}) => {
  const params = {
    limit: 4,
    page: 1,
    ...options,
  };

  const { data } = await axios.get("/campers", { params });
  return data;
};

export const fetchCamper = async (id) => {
  try {
    const { data } = await axios.get(`/campers/${id}`);
    return data;
  } catch (error) {
    toast(error.response?.data || error.message, { icon: "❌" });
  }
};
