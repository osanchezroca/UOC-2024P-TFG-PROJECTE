'use client'
import StatusWrapper from "@src/components/StatusWrapper"
import { useGetDashboardReportsQuery } from "@src/libraries/endpoints/report"
import BarItemReport from "./BarItemReport"

type ReportListProps = {
    onClickReport: (id: string) => void
    selectedReport: string
}
export default function ReportList({ onClickReport, selectedReport }: ReportListProps) {
    const reportsQuery = useGetDashboardReportsQuery()
    const data = reportsQuery.data
    return <StatusWrapper query={reportsQuery}>
        {data && data.length ? data.map((item: any) =>
            <BarItemReport key={item.id} isSelected={selectedReport === item.id} item={item} onClick={() => onClickReport(item.id)} />
        ) : (
            <p>No events</p>
        )}
    </StatusWrapper>
}