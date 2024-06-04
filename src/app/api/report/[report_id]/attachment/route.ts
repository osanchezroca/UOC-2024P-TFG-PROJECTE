import { getClientFromHeader } from '@src/modules/client/client-services';
import { getReport } from '@src/modules/report/report-services';
import { getTenantFromPathname } from '@src/modules/site-tenant/site-tenant-services';
import { del, list } from '@vercel/blob';

export async function GET(request: Request, { params: { report_id } }) {
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

        const route = `${tenant.id}/reports/${report_id}/`
        //Get all files in this route
        const { blobs } = await list({ prefix: route, mode: 'folded' })
        return Response.json(blobs)
    } catch (e: any) {
        return new Response(`${e.message}`, {
            status: 500,
        })
    }
}

export async function DELETE(request: Request) {
    try {
        const tenant = await getTenantFromPathname(request)
        if (!tenant.isAdmin) throw new Error('Unauthorized')

        const { route } = await request.json()

        //Verify that route includes tenant id and report id to check that current user is working in the right tenant
        if (!route.includes(`${tenant.id}/reports/`)) throw new Error('Invalid route')

        await del(route)

        return Response.json({ message: 'File deleted' })
    } catch (e: any) {
        return new Response(`${e.message}`, {
            status: 500,
        })
    }
}