import { getReport } from "@src/modules/report/report-services";
import { getTenantFromPathname } from "@src/modules/site-tenant/site-tenant-services";
type Params = {
    params: {
        report_id: string
    }
}
export async function GET(request: Request, { params: { report_id } }: Params) {
    try {
        const tenant = await getTenantFromPathname(request)
        const report = await getReport(tenant.id, report_id)
        if (!report) throw new Error('Report not found')
        return Response.json(report)
    } catch (e: any) {
        return new Response(`${e.message}`, {
            status: 500,
        })
    }
}