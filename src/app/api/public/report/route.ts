import { getPublicReports } from '@src/modules/report/report-services';
import { getTenantFromPathname } from "@src/modules/site-tenant/tenant-detect";

export async function GET(request: Request) {
    try {
        const tenant = await getTenantFromPathname(request)
        const reports = await getPublicReports(tenant.id, tenant.client_id)
        return Response.json(reports)
    } catch (e: any) {
        return new Response(`${e.message}`, {
            status: 500,
        })
    }
}