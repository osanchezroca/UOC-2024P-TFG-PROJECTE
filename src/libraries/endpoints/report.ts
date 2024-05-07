import { createReport } from '@src/modules/report/report-services'
import { publicAPI } from '../public-api'

const extendedAPI = publicAPI.injectEndpoints({
  endpoints: (builder) => ({
    getPublicReports: builder.query<any, void>({
      providesTags: ['Report'],
      query: () => `public/report`,
    }),
    getPublicReport: builder.query<any, string>({
      providesTags: ['Report'],
      query: (reportId) => `public/report/${reportId}`,
    }),
    getDashboardReports: builder.query<any, void>({
      providesTags: ['Report'],
      query: () => `dashboard/report`,
    }),
    createReport: builder.mutation<any, any>({
      invalidatesTags: ['Report'],
      query: (body) => ({
        url: `public/report`,
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useGetDashboardReportsQuery,
  useGetPublicReportsQuery,
  useGetPublicReportQuery,
  useCreateReportMutation
} = extendedAPI