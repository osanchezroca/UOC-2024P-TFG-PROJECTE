import { getTenant } from "@src/modules/site-tenant/site-tenant-services"

/**
 * This function gets the tenant from the pathname of the referer and client_id, if exist
 * @param request 
 * @param returnKey
 * @returns 
 */
export const getTenantFromPathname = async (request: Request, returnKey: boolean = false): Promise<any> => {

    const referer = request.headers.get('referer')
    if (!referer) throw new Error('Referer not found')

    //Retrieve tenant
    // From referer, get pathname
    const pathname = new URL(referer).pathname

    // Get tenant from pathname between firsts slashes
    const tenantCode = pathname.split('/')[1]

    const tenant = await getTenant(tenantCode)

    // If tenant is not found, throw an error
    if (!tenant) throw new Error('Tenant not found')


    // If returnKey is false, return tenant without admin_key
    return Object.assign({}, tenant, !returnKey ? { admin_key: undefined } : {})

}