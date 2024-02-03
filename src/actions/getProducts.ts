import { headers } from "next/headers";

import axios from "axios";

export const getProducts = async () => {
  const res = await axios.get("http://localhost:3000/api/congelados", {
    method: "get",
  });
  return res.data;
}