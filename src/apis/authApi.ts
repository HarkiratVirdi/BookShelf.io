import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from '../config'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    login: builder.query({
      query: (name) => `user/login`,
    }),
    register: builder.query({
        query: (name) => 'user/register'
    })
  }),
})

export const {
    useLoginQuery, 
    useRegisterQuery
} = authApi;