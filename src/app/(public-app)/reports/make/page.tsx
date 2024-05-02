'use client'
import { faFile, faFire, faTree } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocalPositionMap from "@src/components/LocalPositionMap";
import { GeoContext } from "@src/contexts/GeoContext";
import Link from "next/link";
import { useContext } from "react";

export default function HomePage() {
    const { latitude, longitude } = useContext(GeoContext);

    const currentDate = new Date();
    const currentLocalString = currentDate.toLocaleString()

    return (
        <>
            <div className="grow flex flex-col">
                <div className="grow flex justify-stretch">
                    <LocalPositionMap />
                </div>
            </div>
            <div className="flex flex-col justify-center space-y-2 bg-slate-200 p-2">
                <p>Latitude: {latitude || '...'} Longitude: {longitude || '...'}</p>
                <p className='uppercase font-mono'>Esdeveniment</p>
                <div className="grid grid-cols-4 gap-3">
                    <div className="flex flex-col items-center bg-slate-300 rounded-lg border-solid border-2 border-slate-400 py-3">
                        <FontAwesomeIcon icon={faTree} />
                        <p>Jardineria</p>
                    </div>
                    <div className="flex flex-col items-center bg-slate-300 rounded-lg border-solid border-2 border-slate-400 py-3">
                        <FontAwesomeIcon icon={faFire} />
                        <p>Foc</p>
                    </div>
                </div>
                <p className='uppercase font-mono'>Recursos</p>
                <div className="flex items-baseline space-x-3 bg-slate-300 rounded-lg border-dashed border-4 border-slate-400 p-3">
                    <FontAwesomeIcon icon={faFile} size="lg" />
                    <p>FILE FROP ZONE</p>
                </div>
                <div className='flex justify-center space-x-2'>
                    <p>Data de l'esdeveniment:</p>
                    <p className="font-serif">{currentLocalString}</p>
                </div>
                <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={'/reports'}>Report</Link>
            </div>
        </>
    );
}