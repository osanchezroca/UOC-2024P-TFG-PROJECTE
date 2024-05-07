import { getClientFromHeader } from '@src/modules/client/client-services';
import { getPublicReport } from "@src/modules/report/report-services";
import { getTenantFromPathname } from "@src/modules/site-tenant/tenant-detect";
type Params = {
    params: {
        report_id: string
    }
}
export async function GET(request: Request, { params: { report_id } }: Params) {
    try {
        const tenant = await getTenantFromPathname(request)
        const client = await getClientFromHeader(request, tenant.id)
        const report = await getPublicReport(tenant.id, client.id, report_id)
        if (!report) throw new Error('Report not found')
        return Response.json(report)
    } catch (e: any) {
        return new Response(`${e.message}`, {
            status: 500,
        })
    }
}