'use client'
import StatusWrapper from "@src/components/StatusWrapper"
import { useGetDashboardReportsQuery } from "@src/libraries/endpoints/report"
import { useState } from "react"
import BarItemReport from "./BarItemReport"

type ReportListProps = {
    onClickReport: (id: string) => void
    selectedReport: string
}
export default function ReportList({ onClickReport, selectedReport }: ReportListProps) {
    const reportsQuery = useGetDashboardReportsQuery()
    const data = reportsQuery.data

    const [showArchived, setShowArchived] = useState<boolean>(false)
    const handleCheckArchived = (event) => {
        const checked = event.target.checked
        setShowArchived(checked)
    }

    const filteredReports = data?.filter((item: any) => showArchived ? true : !item.archived_at)

    return <StatusWrapper query={reportsQuery}>
        {filteredReports?.length ? filteredReports.map((item: any) =>
            <BarItemReport key={item.id} isSelected={selectedReport === item.id} item={item} onClick={() => onClickReport(item.id)} />
        ) : (
            <p>No events</p>
        )}
        <div className="grow flex flex-col justify-end">
            <label>
                <div className="flex justify-center space-x-2 cursor-pointer">
                    <input name="archived" type='checkbox' onChange={handleCheckArchived} checked={showArchived} />
                    <p>Show archived</p>
                </div>
            </label>
        </div>
    </StatusWrapper>
}