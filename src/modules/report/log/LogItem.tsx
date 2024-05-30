'use client'

import { ReportLogType } from "@src/libraries/prisma-types";

type Props = {
    log: ReportLogType
}
export default function LogItem({ log }: Props) {
    return <div className="bg-slate-50 border px-3 py-1">
        <p className='text-xs text-right'>{new Date(log.created_at).toLocaleString()}</p>
        <p className='text-sm text-justify'>{log.message}</p>
    </div>
}