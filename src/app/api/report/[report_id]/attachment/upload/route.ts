import { getClientFromHeader } from '@src/modules/client/client-services';
import { getReport } from '@src/modules/report/report-services';
import { getTenantFromPathname } from '@src/modules/site-tenant/site-tenant-services';
import { put } from '@vercel/blob';

export async function POST(request: Request, { params: { report_id } }) {
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

        const timestamp = new Date().getTime();
        const blob = await put(`${tenant.id}/reports/${report_id}/${timestamp}`, await request.body, {
            access: 'public',
        });

        return Response.json(blob.url);
    } catch (e: any) {
        return new Response(`${e.message}`, {
            status: 500,
        })
    }
}
