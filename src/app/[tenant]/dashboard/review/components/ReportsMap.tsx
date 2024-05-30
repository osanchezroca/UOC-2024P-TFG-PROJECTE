'use client'
import DynamicMap from '@src/components/DynamicMap';
import StatusWrapper from '@src/components/StatusWrapper';
import { TenantContext } from "@src/contexts/TenantContext";
import { useGetDashboardReportsQuery } from '@src/libraries/endpoints/report';
import dynamic from 'next/dynamic';
import { usePathname, useRouter } from 'next/navigation';
import { useContext } from "react";

export default function ReportsMap() {
    const router = useRouter()
    const tenant = useContext(TenantContext)

    const ReportsMapPointers = dynamic(() => import('./ReportsMapPointers'), { ssr: false })

    const pathname = usePathname()
    const report_id = pathname.split('/').pop() || null

    const reportsQuery = useGetDashboardReportsQuery()
    const data = reportsQuery.data

    const latitude = tenant.initialLatitude
    const longitude = tenant.initialLongitude
    const zoom = tenant.initialZoom

    const handleClickReport = (id: string) => {
        //If the report is already selected, go to the report page
        if (report_id === id) {
            router.push(`/${tenant.code}/dashboard/review`)
        } else {
            router.push(`/${tenant.code}/dashboard/review/${id}`)
        }
    }

    return (
        !latitude || !longitude || !zoom ? (
            <p>Position data not found</p>
        ) : (
            <StatusWrapper query={reportsQuery}>
                <DynamicMap position={[latitude, longitude]} zoom={zoom}>
                    <ReportsMapPointers pointers={data} selectedReport={report_id} onCLickReport={handleClickReport} />
                </DynamicMap>
            </StatusWrapper>
        )
    )
}
