import { publicAPI } from '../public-api'

const extendedAPI = publicAPI.injectEndpoints({
  endpoints: (builder) => ({
    getPublicReports: builder.query<any, void>({
      query: () => `public/report`,
    }),
    getPublicReport: builder.query<any, string>({
      query: (reportId) => `public/report/${reportId}`,
    }),
    getDashboardReports: builder.query<any, void>({
      query: () => `dashboard/report`,
    }),
  }),
})

export const {
  useGetDashboardReportsQuery,
  useGetPublicReportsQuery,
  useGetPublicReportQuery
} = extendedAPI