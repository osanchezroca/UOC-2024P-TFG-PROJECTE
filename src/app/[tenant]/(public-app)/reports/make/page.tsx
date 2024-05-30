'use client'
import { ErrorGeolocation } from "@src/components/ErrorGeolocation";
import LocalPositionMap from "@src/components/LocalPositionMap";
import { GeoContext } from "@src/contexts/GeoContext";
import ReportCreate from '@src/modules/report/ReportCreate';
import { useContext } from "react";

export default function HomePage() {
    const { latitude, longitude, errorMessage } = useContext(GeoContext);

    if (errorMessage) return <ErrorGeolocation error={errorMessage} />

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