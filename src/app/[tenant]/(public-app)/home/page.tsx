'use client'
import LocalPositionMap from "@src/components/LocalPositionMap";
import Link from "next/link";

export default function HomePage() {
    return (
        <>
            <div className="grow flex flex-col">
                <div className="grow flex justify-stretch">
                    <LocalPositionMap />
                </div>
            </div>
            <div className="flex flex-col justify-center space-y-2 bg-slate-500 p-2">
                <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={'/reports/make'}>Make a report</Link>
                <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={'/reports'}>Log</Link>
            </div>
        </>
    );
}