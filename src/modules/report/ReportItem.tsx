'use client'

import { CSSProperties } from "react"

type Props = {
    item: any
    size?: 'sm' | 'md'
}
export default function ReportItem({ item, size = 'sm' }: Props) {
    const statusStyle: CSSProperties = {
        backgroundColor: `${item.report_status?.color}`,
    }
    const statusTextStyle: CSSProperties = {
        mixBlendMode: 'multiply'
    }
    return <div className='bg-slate-100 hover:bg-slate-500 rounded-md shadow-md border-4'>
        {size === 'sm' ?
            <div className="flex justify-between" style={statusStyle}>
                <p className="text-2xl text-center">{item.site_events?.icon}</p>
                <div className="flex flex-col" style={statusTextStyle}>
                    <p>{item.site_events?.name}</p>
                    <p>{new Date(item.created_at).toLocaleString()}</p>
                </div>
            </div>
            : <div className="grid grid-cols-5">
                <div className="flex flex-col justify-center items-center p-3" style={statusStyle}>
                    <p className="text-2xl">{item.site_events?.icon}</p>
                    <p style={statusTextStyle}>{item.site_events?.name}</p>
                </div>
                <div className="col-span-4 flex flex-col justify-center items-center p-3">
                    <p>{new Date(item.created_at).toLocaleString()}</p>
                    <p>Estat: {item.report_status.name}</p>
                </div>
            </div>
        }
    </div>
}