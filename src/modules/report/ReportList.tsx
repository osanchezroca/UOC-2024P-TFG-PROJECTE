'use client'
import { IconName } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import StatusWrapper from "@src/components/StatusWrapper"
import { useGetReportsQuery } from "@src/libraries/services/report"
import { getReports } from "@src/modules/report/report-services"

export default function ReportList() {
    const reportsQuery = useGetReportsQuery()
    const data = reportsQuery.data
    return <StatusWrapper query={reportsQuery}>
        {data && data.length ? data.map((item: any) =>
            <div key={item.id} className="" style={{ backgroundColor: `${item.report_status?.color}`, backdropFilter: 'greyscale(50%)' }}>
                <div className="flex justify-between">
                    <FontAwesomeIcon icon={`${item.site_events?.icon}` as IconName} />
                    <div className="flex flex-col">
                        <p>{item.site_events?.name}</p>
                        <p>{new Date(item.created_at).toLocaleString()}</p>

                    </div>
                </div>
            </div>
        ) : (
            <p>No events</p>
        )}
    </StatusWrapper>
}