import axios from "axios";
import { apiCongelados } from "@/services/api";

// const baseURL =
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:3000/api"
//     : "/api";

// const api = axios.create({
//   baseURL,
// });

export const getProducts = async () => {
  try {
    const res = await apiCongelados.get("/congelados");
    return res.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
