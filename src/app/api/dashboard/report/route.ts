import { getTenantFromPathname } from "@src/modules/site-tenant/tenant-detect"
import { getReports } from "@src/modules/report/report-services"

export async function GET(request: Request) {
    try {
        const tenant = await getTenantFromPathname(request)
        const reports = await getReports(tenant.id)
        return Response.json(reports)
    } catch (e: any) {
        return new Response(`${e.message}`, {
            status: 500,
        })
    }
}