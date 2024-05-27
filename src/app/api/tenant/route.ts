import { checkAdminKey } from "@src/modules/site-tenant/site-tenant-services";
import { getTenantFromPathname } from "@src/modules/site-tenant/site-tenant-services";

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