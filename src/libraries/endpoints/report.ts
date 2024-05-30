import { ReportLogType, ReportType } from '../prisma-types'
import { publicAPI } from '../public-api'

const extendedAPI = publicAPI.injectEndpoints({
  endpoints: (builder) => ({
    getReports: builder.query<ReportType[], void>({
      providesTags: ['Report'],
      query: () => `report`,
    }),
    getReport: builder.query<ReportType, string>({
      providesTags: ['Report'],
      query: (reportId) => `report/${reportId}`,
    }),
    getStatus: builder.query<any, void>({
      providesTags: ['SiteStatus'],
      query: () => `status`,
    }),
    getReportLog: builder.query<ReportLogType[], string>({
      providesTags: ['ReportLog'],
      query: (reportId) => `report/${reportId}/log`,
    }),
    createReport: builder.mutation<any, any>({
      invalidatesTags: ['Report'],
      query: (body) => ({
        url: `report`,
        method: 'POST',
        body,
      }),
    }),
    createReportLog: builder.mutation<any, any>({
      invalidatesTags: ['ReportLog'],
      query: (body) => ({
        url: `report/${body.report_id}/log`,
        method: 'POST',
        body,
      }),
    }),
    updateReport: builder.mutation<any, any>({
      invalidatesTags: ['Report'],
      query: (body) => ({
        url: `report/${body.report_id}`,
        method: 'PUT',
        body,
      }),
    }),
  }),
})

export const {
  useGetReportsQuery,
  useGetReportQuery,
  useGetStatusQuery,
  useGetReportLogQuery,
  useCreateReportMutation,
  useCreateReportLogMutation,
  useUpdateReportMutation
} = extendedAPI