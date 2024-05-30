import { getClientFromHeader } from '@src/modules/client/client-services';
import { createReport, getReports } from '@src/modules/report/report-services';
import { getTenantFromPathname } from "@src/modules/site-tenant/site-tenant-services";

export async function GET(request: Request) {
    try {
        const tenant = await getTenantFromPathname(request)
        let reports
        if (!tenant.isAdmin) {
            const client = await getClientFromHeader(request, tenant.id)
            reports = await getReports(tenant.id, client.id)
        } else {
            reports = await getReports(tenant.id)
        }
        return Response.json(reports)
    } catch (e: any) {
        return new Response(`${e.message}`, {
            status: 500,
        })
    }
}

export async function POST(request: Request) {
    try {
        const tenant = await getTenantFromPathname(request)
        const client = await getClientFromHeader(request, tenant.id)
        const body = await request.json()
        if (!body.latitude || !body.longitude || !body.event) throw new Error('Missing required fields')
        const report = await createReport(tenant.id, client.id, {
            latitude: body.latitude,
            longitude: body.longitude,
            site_event_id: body.event
        })

        return Response.json(report)
    } catch (e: any) {
        return new Response(`${e.message}`, {
            status: 500,
        })
    }
}