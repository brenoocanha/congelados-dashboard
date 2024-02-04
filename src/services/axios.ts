import axios, { AxiosInstance } from "axios";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : "/api";

export const createAPIInstance = (): AxiosInstance => {
  return axios.create({
    baseURL,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Content-Type": "application/json",
    },
  });
};

export const getAPICongelados = (): AxiosInstance => {
  return createAPIInstance();
};

