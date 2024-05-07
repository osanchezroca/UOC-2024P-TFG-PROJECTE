'use client'

import DynamicMap from '@src/components/DynamicMap';
import StatusWrapper from "@src/components/StatusWrapper";
import { TenantContext } from '@src/contexts/TenantContext';
import { useGetPublicReportQuery } from "@src/libraries/endpoints/report";
import ReportAttachments from '@src/modules/report/ReportAttachments';
import ReportItem from '@src/modules/report/ReportItem';
import { useContext } from 'react';
import { Marker } from 'react-leaflet';

type Props = {
    params: {
        report_id: string;
    }
}

export default function ReportPage({ params: { report_id } }: Props) {
    const tenant = useContext(TenantContext);
    const reportQuery = useGetPublicReportQuery(report_id);
    const report = reportQuery.data;
    console.log(report)
    return (
        <StatusWrapper query={reportQuery}>
            {report ? <>
                <ReportItem item={report} size='md' />
                <div className='min-h-40 grow'>
                    <DynamicMap position={[report.latitude, report.longitude]} zoom={18} scrollWheelZoom={false} zoomControl={false} dragging={false}>
                        <Marker position={[report.latitude, report.longitude]} />
                    </DynamicMap>
                </div>
                <ReportAttachments item={report} />
            </> : null}
        </StatusWrapper>
    );
}