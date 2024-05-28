'use client'

import StatusWrapper from "@src/components/StatusWrapper";
import { useGetPublicReportsQuery } from "@src/libraries/endpoints/report";
import ReportItem from "@src/modules/report/ReportItem";
import Link from "next/link";
import { TenantContext } from '@src/contexts/TenantContext';
import { useContext } from 'react';

export default function ReportsPage() {
    const tenant = useContext(TenantContext);
    const reportsQuery = useGetPublicReportsQuery();
    const reports = reportsQuery.data;
    return (
        <StatusWrapper query={reportsQuery}>
            <div className="flex flex-col gap-2 p-2">
                {reports && reports.length ? reports.map((item: any) => (
                    <Link href={`/${tenant.code}/reports/${item.id}`} key={item.id}>
                        <ReportItem item={item} />
                    </Link>
                )) : <p>Encara no hi ha cap esdeveniment informat</p>}
            </div>
        </StatusWrapper>
    );
}