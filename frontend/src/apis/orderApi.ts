import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../config';
import { getCookie } from '../utils';

// Define a service using a base URL and expected endpoints
export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL, 
    headers: {Authorization: `Bearer ${getCookie('userInfo').token}`}}),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (body) => ({
        url: 'users/user/order',
        method: 'POST',
        body,
      }),
      transformResponse: (response) => response,
      transformErrorResponse: (response: any) => response.data.error
    })
  }),
});

export const { useCreateOrderMutation } = orderApi;
