'use client'

import { CSSProperties } from "react"

type Props = {
    item: any
    onClick?: () => void
    isSelected?: boolean
}
export default function ReportItem({ item, onClick, isSelected = false }: Props) {
    const statusStyle: CSSProperties = {
        backgroundColor: `${item.report_status?.color}`,
    }
    const statusTextStyle: CSSProperties = {
        mixBlendMode: 'multiply'
    }
    return <div className='bg-slate-100 rounded-md shadow-md border-2 cursor-pointer' style={statusStyle} onClick={onClick}>
        <div className={`flex justify-evenly rounded-md hover:bg-slate-500 hover:bg-opacity-70 bg-opacity-50${isSelected ? ` bg-slate-500` : ``}`} >
            <p className="text-2xl text-center">{item.site_events?.icon}</p>
            <div className="flex flex-col" style={statusTextStyle}>
                <p>{item.site_events?.name}</p>
                <p>{new Date(item.created_at).toLocaleString()}</p>
            </div>
        </div>
    </div>
}