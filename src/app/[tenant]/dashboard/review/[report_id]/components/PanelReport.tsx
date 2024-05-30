'use client'

import Button from '@src/components/Button';
import StatusWrapper from '@src/components/StatusWrapper';
import SelectStatus from '@src/components/inputs/SelectStatus';
import { useGetDashboardReportQuery, useUpdateReportMutation } from '@src/libraries/endpoints/report';
import ReportAttachments from '@src/modules/report/ReportAttachments';
import LogList from '@src/modules/report/log/LogList';
import PanelInfo from './PanelInfo';

type Props = {
    report_id: string
}
export default function PanelReport({ report_id }: Props) {

    const reportQuery = useGetDashboardReportQuery(report_id);
    const report = reportQuery.data;

    const [updateReport, updateReportQuery] = useUpdateReportMutation()

    const handleOnChangeStatus = async (value: any) => {
        await updateReport({
            report_id,
            status_id: value.value
        })
    }
    const handleOnArchive = async (value: any) => {
        await updateReport({
            report_id,
            archived_at: report.archived_at ? null : new Date().toISOString()
        })
    }

    return <div className='bg-slate-100 rounded-md shadow-md border-2 h-full' >
        <StatusWrapper query={reportQuery}>
            {report &&
                <div className='grid grid-cols-3 gap-2 w-full h-full'>
                    <div className='flex flex-col'>
                        <PanelInfo item={report} />
                        <SelectStatus onChange={handleOnChangeStatus} selected={report.status_id} />
                        <Button onClick={handleOnArchive} isActive={report.archived_at}> {report.archived_at ? 'Desarxivar' : 'Arxivar'}</Button>
                    </div>
                    <div className='flex flex-col overflow-y-auto'>
                        <ReportAttachments report_id={report.id} />
                    </div>
                    <LogList report_id={report.id} />
                </div>
            }
        </StatusWrapper >
    </div >
}