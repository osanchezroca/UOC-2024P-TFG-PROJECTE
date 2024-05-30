import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

/**
 * Public API
 */
export const publicAPI = createApi({
  reducerPath: 'publicAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
    prepareHeaders: (headers, { getState }) => {
      //add admin-key to header if exist
      const adminKey = localStorage.getItem('admin-key')
      if (adminKey) {
        headers.set('admin-key', adminKey)
      }
      //add clientId to header if exist
      const clientId = localStorage.getItem('clientId')
      if (clientId) {
        headers.set('client-id', clientId)
      }
      return headers
    },
    headers: {
      'Content-Type': 'application/json',
    }
  }),
  endpoints: (builder) => ({}),
  tagTypes: ['Report', 'Event', 'Client', 'Tenant', 'SiteStatus', 'ReportLog']
})
