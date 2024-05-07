'use client'
import BottomMenu from '@src/app/[tenant]/(public-app)/components/BottomMenu';
import LocalPositionMap from "@src/components/LocalPositionMap";

export default function PublicPage() {
    return (
        <>
            <div className="grow flex flex-col">
                <div className="grow flex justify-stretch">
                    <LocalPositionMap />
                </div>
            </div>
            <BottomMenu />
        </>
    );
}