import { publicAPI } from '../public-api'

const extendedAPI = publicAPI.injectEndpoints({
  endpoints: (builder) => ({
    getReports: builder.query<any, void>({
      query: () => `report`,
    }),
  }),
})

export const { useGetReportsQuery } = extendedAPI