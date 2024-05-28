import { ReportType } from '../prisma-types'
import { publicAPI } from '../public-api'

const extendedAPI = publicAPI.injectEndpoints({
  endpoints: (builder) => ({
    getPublicReports: builder.query<ReportType[], void>({
      providesTags: ['Report'],
      query: () => `public/report`,
    }),
    getPublicReport: builder.query<ReportType, string>({
      providesTags: ['Report'],
      query: (reportId) => `public/report/${reportId}`,
    }),
    getDashboardReports: builder.query<ReportType[], void>({
      providesTags: ['Report'],
      query: () => `dashboard/report`,
    }),
    getDashboardReport: builder.query<ReportType, string>({
      providesTags: ['Report'],
      query: (reportId) => `dashboard/report/${reportId}`,
    }),
    getStatus: builder.query<any, void>({
      providesTags: ['SiteStatus'],
      query: () => `dashboard/status`,
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
  useGetDashboardReportQuery,
  useGetPublicReportsQuery,
  useGetPublicReportQuery,
  useGetStatusQuery,
  useCreateReportMutation
} = extendedAPI