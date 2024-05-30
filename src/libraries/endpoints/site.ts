import { publicAPI } from '../public-api';

const extendedAPI = publicAPI.injectEndpoints({
  endpoints: (builder) => ({
    getTenant: builder.query<any, void>({
      providesTags: ['Tenant'],
      query: () => `tenant`,
    }),
    updateTenant: builder.mutation<any, any>({
      invalidatesTags: ['Tenant'],
      query: (body) => ({
        url: `tenant`,
        method: 'PUT',
        body,
      }),
    })
  }),
})

export const {
  useGetTenantQuery,
  useUpdateTenantMutation
} = extendedAPI