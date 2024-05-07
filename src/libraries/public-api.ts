import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const publicAPI = createApi({
  reducerPath: 'publicAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
    prepareHeaders: (headers, { getState }) => {
      //add to header localstorage admin_key if exist
      const adminKey = localStorage.getItem('admin-key')
      if (adminKey) {
        headers.set('admin-key', adminKey)
      }
      return headers
    },
    headers: {
      'Content-Type': 'application/json',
    }
  }),
  endpoints: (builder) => ({}),

})
