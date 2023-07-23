import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../config';

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: '/users/login',
        method: 'POST',
        body,
      }),
      transformResponse: (response) => response,
      transformErrorResponse: (response: any) => response.data.error
    }),
    register: builder.mutation({
      query: (body) => ({
        url: '/users/register',
        method: 'POST',
        body,
      }),
      transformResponse: (response) => response,
      transformErrorResponse: (response: any) => response.data.error
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
