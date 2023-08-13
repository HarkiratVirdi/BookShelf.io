import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../config';
import { IBook } from '../interfaces/Book.interface';
import { getCookie } from '../utils';

// Define a service using a base URL and expected endpoints
export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getBookById: builder.query<{status: string, book: IBook}, string>({
      query: (id: string) => `/products/book/${id}`,
    }),
    getBookByCategory: builder.query<any, string>({
      query: (category: string) => `/products/books/${category}`,
    }),
    getBooks: builder.query<{status: string, books: IBook[]}, void>({
        query: () => '/products/books',
    }),
    deleteBook: builder.mutation({
      query: (id: string) => `/products/book/${id}`
    }),
    createBook: builder.mutation({
      query: (body) => ({
        url: '/products/book',
        method: 'POST', 
        body,
        headers: {Authorization: `Bearer ${getCookie('userInfo')?.token}`},
      }) 
    })
  }),
});

export const { useGetBooksQuery, useGetBookByCategoryQuery, useGetBookByIdQuery, useDeleteBookMutation, useCreateBookMutation } = bookApi;
