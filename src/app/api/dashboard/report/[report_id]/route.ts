import { getReport, updateReport } from "@src/modules/report/report-services";
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
        const report = await getReport(tenant.id, report_id)
        if (!report) throw new Error('Report not found')
        return Response.json(report)
    } catch (e: any) {
        return new Response(`${e.message}`, {
            status: 500,
        })
    }
}

export async function PUT(request: Request, { params: { report_id } }: Params) {
    try {
        const tenant = await getTenantFromPathname(request)
        if (!tenant.isAdmin) throw new Error('Unauthorized')
        const report = await getReport(tenant.id, report_id)
        if (!report) throw new Error('Report not found')
        //Allow modify status and soft delete (archive) report
        const data = await request.json()
        console.log(data, typeof data.status_id !== 'undefined')
        const updatedReport = await updateReport(tenant.id, report_id, {
            status_id: typeof data.status_id !== 'undefined' ? data.status_id : report.status_id,
            archived_at: typeof data.archived_at !== 'undefined' ? data.archived_at : report.archived_at
        })

        return Response.json(updatedReport)
    } catch (e: any) {
        return new Response(`${e.message}`, {
            status: 500,
        })
    }
}