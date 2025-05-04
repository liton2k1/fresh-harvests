// src/services/baseApi.js or baseApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products", 
    }),
  }),
});

export const { useGetProductsQuery } = baseApi;
