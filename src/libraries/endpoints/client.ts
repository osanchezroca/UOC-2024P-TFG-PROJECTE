import { publicAPI } from '../public-api'

const extendedAPI = publicAPI.injectEndpoints({
  endpoints: (builder) => ({
    authClient: builder.mutation<any, string | null>({
      invalidatesTags: ['Client'],
      query: (externalId) => ({
        url: `auth`,
        method: 'POST',
        body: { externalId },
      }),
      transformResponse: (response: { data: any }, meta, arg) => response.data,
    }),
  }),
})

export const { useAuthClientMutation } = extendedAPI