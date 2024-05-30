import { getClientFromHeader } from '@src/modules/client/client-services';
import { getReport, updateReport } from '@src/modules/report/report-services';
import { getTenantFromPathname } from "@src/modules/site-tenant/site-tenant-services";
type Params = {
    params: {
        report_id: string
    }
}
export async function GET(request: Request, { params: { report_id } }: Params) {
    try {
        const tenant = await getTenantFromPathname(request)
        let report
        if (!tenant.isAdmin) {
            const client = await getClientFromHeader(request, tenant.id)
            report = await getReport(tenant.id, report_id, client.id)
        } else {
            report = await getReport(tenant.id, report_id)
        }
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

        const data = await request.json()

        //Allow modify status and soft delete (archive) report
        const status_id = data.status_id || report.status_id

        //It's necessary to detect if archived_at is null because it's a valid value on database
        const archived_at = typeof data.archived_at !== 'undefined' ? data.archived_at : report.archived_at

        const updatedReport = await updateReport(tenant.id, report_id, { status_id, archived_at })

        return Response.json(updatedReport)
    } catch (e: any) {
        return new Response(`${e.message}`, {
            status: 500,
        })
    }
}