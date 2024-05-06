import { getStatus } from "@src/modules/report/status/report-status-services"

export default async function StatusList() {
    const status = await getStatus()
    return <div className="flex flex-col gap-1">
        <p>Llegenda de colors</p>
        {status && status.length ? status.map((item) =>
            <div key={item.id} className="flex align-baseline gap-2">
                <div className="w-5 h-5 border-solid border-black border" style={{ background: `${item.color}` }}></div>
                <p>{item.name}</p>
            </div>
        ) : (
            <p>No status</p>
        )}
    </div>
}