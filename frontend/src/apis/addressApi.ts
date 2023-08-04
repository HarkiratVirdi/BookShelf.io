import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../config';

// Define a service using a base URL and expected endpoints
export const addressApi = createApi({
  reducerPath: 'addressApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    postAddress: builder.mutation({
      query: (body) => ({
        url: '/user/address',
        method: 'POST',
        body,
      }),
      transformResponse: (response) => response,
      transformErrorResponse: (response: any) => response.data.error
    }),
    updateAddress: builder.mutation({
      query: (body) => ({
        url: '/user/address',
        method: 'PUT',
        body,
      }),
      transformResponse: (response) => response,
      transformErrorResponse: (response: any) => response.data.error
    }),
    getAddress: builder.query({
      query: () => '/user/address',
      transformResponse: (response) => response,
      transformErrorResponse: (response: any) => response.data.error
    }),
    deleteAddress: builder.mutation({
      query: (body) => ({
        url: '/user/address',
        method: 'DELETE',
        body,
      }),
      transformResponse: (response) => response,
      transformErrorResponse: (response: any) => response.data.error
    }),
  }),
});

export const { usePostAddressMutation, useUpdateAddressMutation, useGetAddressQuery, useDeleteAddressMutation } = addressApi;
