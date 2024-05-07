import { getTenant } from "@src/modules/site-tenant/site-tenant-services"

/**
 * This function gets the tenant from the pathname of the referer
 * @param request 
 * @param returnKey
 * @returns 
 */
export const getTenantFromPathname = async (request: Request, returnKey: boolean = false): Promise<any> => {

    const referer = request.headers.get('referer')
    if (!referer) throw new Error('Referer not found')

    // From referer, get pathname
    const pathname = new URL(referer).pathname

    // Get tenant from pathname between firsts slashes
    const tenantCode = pathname.split('/')[1]

    const tenant = await getTenant(tenantCode)

    // If tenant is not found, throw an error
    if (!tenant) throw new Error('Tenant not found')

    // If returnKey is false, return tenant without admin_key
    if (!returnKey) return Object.assign({}, tenant, { admin_key: undefined })
    return tenant
}

/**
 * This function checks if the admin key is correct
 * @param request 
 * @param admin_key 
 * @returns 
 */
export const checkAdminKey = (request: Request, admin_key: string): boolean => {
    const adminKey = request.headers.get('admin-key')
    return adminKey === admin_key
}