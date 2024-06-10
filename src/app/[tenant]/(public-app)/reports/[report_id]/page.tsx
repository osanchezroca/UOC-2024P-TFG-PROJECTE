'use client'

import DynamicMap from '@src/components/DynamicMap';
import StatusWrapper from "@src/components/StatusWrapper";
import { TenantContext } from '@src/contexts/TenantContext';
import { useGetReportQuery } from "@src/libraries/endpoints/report";
import ReportAttachments from '@src/modules/report/ReportAttachments';
import ReportItem from '@src/modules/report/ReportItem';
import { useContext } from 'react';

type Props = {
    params: {
        report_id: string;
    }
}

export default function ReportPage({ params: { report_id } }: Props) {
    const tenant = useContext(TenantContext);
    const reportQuery = useGetReportQuery(report_id);
    const report = reportQuery.data;

    return (
        <StatusWrapper query={reportQuery}>
            {report ? <div className='p-3 flex flex-col gap-3 h-full'>
                <ReportItem item={report} />
                <div className='min-h-40 grow rounded-xl overflow-auto shadow-md'>
                    <DynamicMap position={[report.latitude, report.longitude]} zoom={18} scrollWheelZoom={false} zoomControl={false} dragging={false}>
                        {({ Marker }) => <Marker position={[report.latitude, report.longitude]} />}
                    </DynamicMap>
                </div>
                <ReportAttachments report_id={report.id} />
            </div> : null}
        </StatusWrapper>
    );
}