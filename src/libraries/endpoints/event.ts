import { publicAPI } from '../public-api';

const extendedAPI = publicAPI.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query<any, void>({
      providesTags: ['Event'],
      query: () => `event`,
    }),
  }),
})

export const { useGetEventsQuery } = extendedAPI