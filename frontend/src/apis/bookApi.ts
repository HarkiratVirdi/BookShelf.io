import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../config';

// Define a service using a base URL and expected endpoints
export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getBookById: builder.query({
      query: (id) => `/products/books/${id}`,
    }),
    getBookByCategory: builder.query({
      query: (category) => `/products/books/${category}`,
    }),
    getBooks: builder.query({
        query: () => `/products/books`,
    }),
  }),
});

export const { useGetBooksQuery, useGetBookByCategoryQuery, useGetBookByIdQuery } = bookApi;
