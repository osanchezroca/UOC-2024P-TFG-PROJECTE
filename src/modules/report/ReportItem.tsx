'use client'

import { CSSProperties } from "react"

type Props = {
    item: any
    onClick?: () => void
}
export default function ReportItem({ item, onClick }: Props) {
    const statusStyle: CSSProperties = {
        backgroundColor: `${item.report_status?.color}`,
        mixBlendMode: 'multiply'
    }

    return <div className='bg-white hover:bg-gray-100 rounded-xl shadow-md' onClick={onClick}>
        <div className="grid grid-cols-6">
            <div className="col-span-2 flex flex-col justify-center items-center p-3">
                <p className="text-2xl">{item.site_events?.icon}</p>
                <p>{item.site_events?.name}</p>
            </div>
            <div className="col-span-4 flex flex-col justify-center items-center p-3">
                <p>{new Date(item.created_at).toLocaleString()}</p>
                <p>Estat: <span className="p-1 rounded" style={statusStyle}>{item.report_status.name}</span></p>
            </div>
        </div>
    </div>
}