'use client'
import Button from "@src/components/Button";
import StatusWrapper from "@src/components/StatusWrapper";
import { GeoContext } from "@src/contexts/GeoContext";
import { TenantContext } from '@src/contexts/TenantContext';
import { useGetReportsQuery } from "@src/libraries/endpoints/report";
import { useContext } from 'react';

export default function BottomMenu() {
    const tenant = useContext(TenantContext);
    const geoContext = useContext(GeoContext);

    const reportsQuery = useGetReportsQuery()
    const reports = reportsQuery.data

    return <div className="flex flex-col justify-center space-y-2 bg-slate-500 p-2">
        <Button disabled={geoContext.errorMessage} className="bg-orange-600 hover:bg-orange-700" href={`/${tenant.code}/reports/make`}>Reportar</Button>
        <Button className="bg-orange-600 hover:bg-orange-700" href={`/${tenant.code}/reports`}>
            <StatusWrapper query={reportsQuery}>
                <div className="flex gap-2">
                    <div className="bg-orange-400 rounded px-2">{reports?.length || 0}</div>
                    <p>Esdeveniments reportats</p>
                </div>
            </StatusWrapper>
        </Button >
    </div >
}