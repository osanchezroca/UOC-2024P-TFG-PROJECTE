import { ReportLogType, ReportType } from '../prisma-types'
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
    getReportLog: builder.query<ReportLogType[], string>({
      providesTags: ['ReportLog'],
      query: (reportId) => `dashboard/report/${reportId}/log`,
    }),
    createReport: builder.mutation<any, any>({
      invalidatesTags: ['Report'],
      query: (body) => ({
        url: `public/report`,
        method: 'POST',
        body,
      }),
    }),
    createReportLog: builder.mutation<any, any>({
      invalidatesTags: ['ReportLog'],
      query: (body) => ({
        url: `dashboard/report/${body.report_id}/log`,
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
  useGetReportLogQuery,
  useCreateReportMutation,
  useCreateReportLogMutation
} = extendedAPI