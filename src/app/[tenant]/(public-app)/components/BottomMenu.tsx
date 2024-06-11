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

    return <div className="flex flex-col justify-center space-y-3 bg-gray-50 p-3 border shadow-lg rounded-t-xl -mt-1" style={{ zIndex: 1000 }}>
        <Button color="orange" disabled={geoContext.errorMessage || !geoContext.latitude || !geoContext.longitude} href={`/${tenant.code}/reports/make`}>Reportar</Button>
        <Button color="orange" href={`/${tenant.code}/reports`}>
            <StatusWrapper query={reportsQuery}>
                <div className="flex gap-2 justify-center">
                    <div className="bg-orange-400 rounded px-2">{reports?.length || 0}</div>
                    <p>Esdeveniments reportats</p>
                </div>
            </StatusWrapper>
        </Button >
    </div >
}