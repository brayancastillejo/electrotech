import axios from "axios";
import { productDTO } from "../interfaces/productDTO";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const getProducts = async () => {
  const response = await instance.get("/products");
  return response.data;
};

export const createProduct = async (product: productDTO) => {
  const response = await instance.post("/products", product, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};
