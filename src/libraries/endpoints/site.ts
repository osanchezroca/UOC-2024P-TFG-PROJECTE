import { publicAPI } from '../public-api';

const extendedAPI = publicAPI.injectEndpoints({
  endpoints: (builder) => ({
    getTenant: builder.query<any, void>({
      providesTags: ['Tenant'],
      query: () => `tenant`,
    }),
  }),
})

export const { useGetTenantQuery } = extendedAPI