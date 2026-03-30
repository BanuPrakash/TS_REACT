import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type Product  from '../../models/Product'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (build) => ({
    products: build.query<Product[], void>({
      query: () => "/products?limit=7",
    }),
    product: build.query<Product, string>({
        query: (id) => `/products/${id}`
    }),
    newProduct: build.mutation<string, Product>({
        query:(product) => ({
            url: '/products',
            body: product,
            method: 'POST'
        })
    })
  }),
});

export const {useProductsQuery, useProductQuery, useNewProductMutation} = productApi;