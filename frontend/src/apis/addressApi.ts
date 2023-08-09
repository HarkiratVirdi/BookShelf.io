import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../config';
import { getCookie } from '../utils';

// Define a service using a base URL and expected endpoints
export const addressApi = createApi({
  reducerPath: 'addressApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: baseURL, 
    headers: {Authorization: `Bearer ${getCookie('userInfo')?.token}`},
  }),
  endpoints: (builder) => ({
    postAddress: builder.mutation({
      query: (body) => ({
        url: 'users/user/address',
        method: 'POST',
        body,
      }),
      transformResponse: (response) => response,
      transformErrorResponse: (response: any) => response.data.error
    }),
    updateAddress: builder.mutation({
      query: (body) => ({
        url: 'users/user/address',
        method: 'PUT',
        body,
      }),
      transformResponse: (response) => response,
      transformErrorResponse: (response: any) => response.data.error
    }),
    getAddress: builder.query<any, void>({
      query: () => 'users/user/address',
      transformResponse: (response) => response,
      transformErrorResponse: (response: any) => response.data.error
    }),
    deleteAddress: builder.mutation({
      query: (body) => ({
        url: 'users/user/address',
        method: 'DELETE',
        body,
      }),
      transformResponse: (response) => response,
      transformErrorResponse: (response: any) => response.data.error
    }),
  }),
});

export const { usePostAddressMutation, useUpdateAddressMutation, useGetAddressQuery, useDeleteAddressMutation } = addressApi;
