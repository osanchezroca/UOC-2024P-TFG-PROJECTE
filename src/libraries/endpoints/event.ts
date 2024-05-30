import { publicAPI } from '../public-api';

const extendedAPI = publicAPI.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query<any, void>({
      providesTags: ['Event'],
      query: () => `event`,
    }),
    createEvent: builder.mutation<any, any>({
      query: (body) => ({
        url: `event`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Event'],
    }),
    deleteEvent: builder.mutation<any, any>({
      query: (body) => ({
        url: `event/${body.id}`,
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Event'],
    }),
  }),
})

export const {
  useGetEventsQuery,
  useCreateEventMutation,
  useDeleteEventMutation,
} = extendedAPI