// src/services/baseApi.js or baseApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://code-commando.com/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    getCategories: builder.query({
      query: () => "/category",
    }),
    getProductById: builder.query({
      query: (id: string) => `/products/${id}`,
    }),
  })
});

export const { useGetProductsQuery, useGetCategoriesQuery, useGetProductByIdQuery } = baseApi;
