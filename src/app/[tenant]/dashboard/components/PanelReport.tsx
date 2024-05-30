'use client'

import Button from '@src/components/Button';
import StatusWrapper from '@src/components/StatusWrapper';
import SelectStatus from '@src/components/inputs/SelectStatus';
import { useGetDashboardReportQuery } from '@src/libraries/endpoints/report';
import ReportAttachments from '@src/modules/report/ReportAttachments';
import ReportLog from '../../../../modules/report/log/LogList';
import ReportInfo from './PanelInfo';

type Props = {
    report_id: string
}
export default function PanelReport({ report_id }: Props) {

    const reportQuery = useGetDashboardReportQuery(report_id);
    const report = reportQuery.data;

    const handleOnChangeStatus = (value: any) => {
        console.log(value)
    }

    return <div className='bg-slate-100 rounded-md shadow-md border-2 h-full' >
        <StatusWrapper query={reportQuery}>
            {report &&
                <div className='grid grid-cols-3 gap-2 w-full h-full'>
                    <div className='flex flex-col'>
                        <ReportInfo item={report} />
                        <SelectStatus onChange={handleOnChangeStatus} selected={report.status_id} />
                        <Button> Arxivar</Button>
                    </div>
                    <div className='flex flex-col overflow-y-auto'>
                        <ReportAttachments report_id={report.id} />
                    </div>
                    <ReportLog report_id={report.id} />
                </div>
            }
        </StatusWrapper >
    </div >
}