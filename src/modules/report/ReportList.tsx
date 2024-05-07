'use client'
import StatusWrapper from "@src/components/StatusWrapper"
import { useGetDashboardReportsQuery } from "@src/libraries/endpoints/report"
import ReportItem from "./ReportItem"

export default function ReportList() {
    const reportsQuery = useGetDashboardReportsQuery()
    const data = reportsQuery.data
    return <StatusWrapper query={reportsQuery}>
        {data && data.length ? data.map((item: any) =>
            <ReportItem key={item.id} item={item} />
        ) : (
            <p>No events</p>
        )}
    </StatusWrapper>
}