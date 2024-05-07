import { getTenantFromPathname } from "@src/modules/site-tenant/tenant-detect";
import { checkAdminKey } from '@src/modules/site-tenant/tenant-detect';

export async function GET(request: Request) {
    try {
        const tenant = await getTenantFromPathname(request, true)
        const payload = Object.assign({}, tenant, { isAdmin: checkAdminKey(request, tenant.admin_key) })
        return Response.json(payload)
    } catch (e: any) {
        return new Response(`${e.message}`, {
            status: 500,
        })
    }
}