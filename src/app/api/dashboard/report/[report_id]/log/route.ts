import { createReportLog, getReportLogs } from "@src/modules/report/log/report-log-services";
import { getTenantFromPathname } from "@src/modules/site-tenant/site-tenant-services";
type Params = {
    params: {
        report_id: string
    }
}
export async function GET(request: Request, { params: { report_id } }: Params) {
    try {
        const tenant = await getTenantFromPathname(request)
        if (!tenant.isAdmin) throw new Error('Unauthorized')
        const logs = await getReportLogs(tenant.id, report_id)
        if (!logs) throw new Error('Report not found')
        return Response.json(logs)
    } catch (e: any) {
        return new Response(`${e.message}`, {
            status: 500,
        })
    }
}

export async function POST(request: Request, { params: { report_id } }: Params) {
    try {
        const tenant = await getTenantFromPathname(request)
        if (!tenant.isAdmin) throw new Error('Unauthorized')
        const { message } = await request.json()
        const log = await createReportLog(report_id, message)
        if (!log) throw new Error('Report coud not be created')
        return Response.json(log)
    } catch (e: any) {
        return new Response(`${e.message}`, {
            status: 500,
        })
    }
}