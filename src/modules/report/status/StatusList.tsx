'use client'
import Heading from '@src/components/Heading';
import StatusWrapper from '@src/components/StatusWrapper';
import { useGetStatusQuery } from '@src/libraries/endpoints/report';

export default function StatusList() {
    const statusQuery = useGetStatusQuery()
    const status = statusQuery.data
    return <>
        <Heading>Llegenda de colors</Heading>
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
    </>
}