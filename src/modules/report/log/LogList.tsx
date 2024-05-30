'use client'

import Heading from "@src/components/Heading";
import StatusWrapper from "@src/components/StatusWrapper";
import { useGetReportLogQuery } from "@src/libraries/endpoints/report";
import LogItem from "./LogItem";
import ReportLogForm from "./ReportLogForm";

type Props = {
    report_id: any
}
export default function LogList({ report_id }: Props) {
    const logQuery = useGetReportLogQuery(report_id, { pollingInterval: 10000 });
    const log = logQuery.data;
    return <div className='flex flex-col bg-slate-100 rounded-md shadow-md h-full'>
        <Heading>Missatges administratius</Heading>
        <StatusWrapper query={logQuery}>
            <div className="flex flex-col grow gap-1">
                {log?.map((log: any) => <LogItem key={log.id} log={log} />
                )}
            </div>
        </StatusWrapper>
        <p>Afegir missatge</p>
        <ReportLogForm report_id={report_id} />
    </div>
}