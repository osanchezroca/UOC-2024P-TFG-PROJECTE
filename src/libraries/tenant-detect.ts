import { getTenant } from "@src/modules/site-tenant/site-tenant-services"

export const getTenantFromPathname = async (request: Request): Promise<any> => {

    const referer = request.headers.get('referer')
    if (!referer) throw new Error('Referer not found')

    // From referer, get pathname
    const pathname = new URL(referer).pathname

    // Get tenant from pathname between firsts slashes
    const tenantCode = pathname.split('/')[1]

    const tenant = await getTenant(tenantCode)
    if (!tenant) throw new Error('Tenant not found')
    return tenant
}