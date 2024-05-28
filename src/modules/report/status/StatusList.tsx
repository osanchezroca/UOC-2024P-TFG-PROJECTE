'use client'
import StatusWrapper from '@src/components/StatusWrapper';
import { useGetStatusQuery } from '@src/libraries/endpoints/report';

export default function StatusList() {
    const statusQuery = useGetStatusQuery()
    const status = statusQuery.data
    return <div className="flex flex-col gap-1">
        <p>Llegenda de colors</p>
        <StatusWrapper query={statusQuery} >
            {status && status.length ? status.map((item) =>
                <div key={item.id} className="flex align-baseline gap-2">
                    <div className="w-5 h-5 border-solid border-black border" style={{ background: `${item.color}` }}></div>
                    <p>{item.name}</p>
                </div>
            ) : (
                <p>No status</p>
            )}
        </StatusWrapper>
    </div>
}