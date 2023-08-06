import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../config';

// Define a service using a base URL and expected endpoints
export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (body) => ({
        url: '/user/order',
        method: 'POST',
        body,
      }),
      transformResponse: (response) => response,
      transformErrorResponse: (response: any) => response.data.error
    })
  }),
});

export const { useCreateOrderMutation } = orderApi;
