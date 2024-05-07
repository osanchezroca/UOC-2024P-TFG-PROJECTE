'use client'
import LocalPositionMap from "@src/components/LocalPositionMap";
import ReportCreate from '@src/modules/report/ReportCreate';

export default function HomePage() {
    return (
        <div className="flex max-md:flex-col relative overflow-auto h-full">
            <div className="grow flex flex-col min-h-20">
                <LocalPositionMap />
            </div>
            <div className="relative overflow-auto">
                <ReportCreate />
            </div>
        </div>
    );
}