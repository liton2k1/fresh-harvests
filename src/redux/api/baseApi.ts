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
    login: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "/users/register",
        method: "POST",
        body,
      }),
    }),
  })
});

export const { useGetProductsQuery, useGetCategoriesQuery, useGetProductByIdQuery, useLoginMutation, useRegisterMutation } = baseApi;
