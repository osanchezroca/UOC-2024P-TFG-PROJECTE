import { getStatus } from "@src/modules/report/status/report-status-services"
import { getTenantFromPathname } from "@src/modules/site-tenant/site-tenant-services"

export async function GET(request: Request) {
    try {
        const tenant = await getTenantFromPathname(request)
        if (!tenant.isAdmin) throw new Error('Unauthorized')
        const reports = await getStatus()
        return Response.json(reports)
    } catch (e: any) {
        return new Response(`${e.message}`, {
            status: 500,
        })
    }
}