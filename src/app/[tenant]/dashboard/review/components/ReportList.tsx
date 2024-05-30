'use client'
import StatusWrapper from "@src/components/StatusWrapper";
import { TenantContext } from '@src/contexts/TenantContext';
import { useGetReportsQuery } from "@src/libraries/endpoints/report";
import { usePathname, useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import BarItemReport from "../[report_id]/components/BarItemReport";

export default function ReportList() {
    const router = useRouter()
    const tenant = useContext(TenantContext)

    const pathname = usePathname()
    const report_id = pathname.split('/').pop() || null

    const reportsQuery = useGetReportsQuery()
    const data = reportsQuery.data

    const [showArchived, setShowArchived] = useState<boolean>(false)
    const handleCheckArchived = (event) => {
        const checked = event.target.checked
        setShowArchived(checked)
    }
    const handleClickReport = (id: string) => {
        //If the report is already selected, go to the report page
        if (report_id === id) {
            router.push(`/${tenant.code}/dashboard/review`)
        } else {
            router.push(`/${tenant.code}/dashboard/review/${id}`)
        }
    }

    const filteredReports = data?.filter((item: any) => showArchived ? true : !item.archived_at)

    return <StatusWrapper query={reportsQuery}>
        {filteredReports?.length ? filteredReports.map((item: any) =>
            <BarItemReport key={item.id} isSelected={report_id === item.id} item={item} onClick={() => handleClickReport(item.id)} />
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