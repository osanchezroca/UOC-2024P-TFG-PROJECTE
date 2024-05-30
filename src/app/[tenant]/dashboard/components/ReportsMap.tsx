'use client'
import DynamicMap from '@src/components/DynamicMap';
import { TenantContext } from "@src/contexts/TenantContext";
import { useGetDashboardReportsQuery } from '@src/libraries/endpoints/report';
import dynamic from 'next/dynamic';
import { useContext } from "react";

export default function ReportsMap({ selectedReport, onCLickReport }) {
    const tenant = useContext(TenantContext)

    const ReportsMapPointers = dynamic(() => import('./ReportsMapPointers'), { ssr: false })

    const latitude = tenant.initialLatitude
    const longitude = tenant.initialLongitude
    const zoom = tenant.initialZoom

    const reportsQuery = useGetDashboardReportsQuery()
    const data = reportsQuery.data

    return (<DynamicMap position={[latitude, longitude]} zoom={zoom}>
        <ReportsMapPointers pointers={data} selectedReport={selectedReport} onCLickReport={onCLickReport} />
    </DynamicMap>
    );
}
