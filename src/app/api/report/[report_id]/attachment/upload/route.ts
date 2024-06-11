import { getClientFromHeader } from '@src/modules/client/client-services';
import { createAttachment } from '@src/modules/report/attachment/report-attachment-services';
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
        const route = `${tenant.id}/reports/${report_id}/${timestamp}`;
        const blob = await put(route, await request.body, {
            access: 'public',
        });

        await createAttachment(report_id, route);

        return Response.json(blob.url);
    } catch (e: any) {
        return new Response(`${e.message}`, {
            status: 500,
        })
    }
}
