'use client'
import Button from "@src/components/Button";
import LocalPositionMap from "@src/components/LocalPositionMap";
import { TenantContext } from '@src/contexts/TenantContext';
import { useContext } from 'react';

export default function HomePage() {
    const tenant = useContext(TenantContext);
    return (
        <>
            <div className="grow flex flex-col">
                <div className="grow flex justify-stretch">
                    <LocalPositionMap />
                </div>
            </div>
            <div className="flex flex-col justify-center space-y-2 bg-slate-500 p-2">
                <Button className="bg-orange-600 hover:bg-orange-700" href={`/${tenant.code}/reports/make`}>Make a report</Button>
                <Button className="bg-orange-600 hover:bg-orange-700" href={`/${tenant.code}/reports`}>Log</Button >
            </div >
        </>
    );
}