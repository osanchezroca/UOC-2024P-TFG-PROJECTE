import { getTenant } from "@src/modules/site-tenant/site-tenant-services"

export async function GET(request: Request) {
    console.log(request)
    const referer = request.headers.get('referer')
    if (!referer) throw new Error('Referer not found')
    // From referer, get pathname
    const pathname = new URL(referer).pathname

    // Get tenant from pathname between firsts slashes
    const tenantCode = pathname.split('/')[1]

    const tenant = await getTenant(tenantCode)
    return Response.json(tenant)
}