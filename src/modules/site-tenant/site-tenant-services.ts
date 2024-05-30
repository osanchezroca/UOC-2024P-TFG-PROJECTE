import { prepareFields } from '@src/libraries/utils';
import { Prisma } from './../../libraries/database';

/**
 * Return the tenant from the database
 * @param tenant 
 * @returns 
 */
export const getTenantByCode = async (code: string) => {
    const database = Prisma
    return await database.site_tenant.findFirst({
        where: {
            code: code
        }
    })
}

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

    const tenant = await getTenantByCode(tenantCode)

    // If tenant is not found, throw an error
    if (!tenant) throw new Error('Tenant not found')

    // Check if admin key exist on tenant and if match with supposed admin key in header
    const isAdmin = tenant.admin_key ? checkAdminKey(request, tenant.admin_key) : false
    // If returnKey is false, return tenant without admin_key
    return Object.assign({}, tenant, !returnKey ? { admin_key: undefined } : {}, { isAdmin })

}

/**
 * This function checks if the tenant admin key is correct
 * @param request 
 * @param admin_key 
 * @returns 
 */
export const checkAdminKey = (request: Request, admin_key: string): boolean => {
    const adminKey = request.headers.get('admin-key')
    return String(adminKey) == String(admin_key)
}

export const updateTenant = async (tenant_id: string, data: any) => {
    const database = Prisma
    const payload = prepareFields(data, ['name', 'initial_latitude', 'initial_longitude', 'initial_zoom', 'hour_opening', 'hour_closing', 'code'])
    return await database.site_tenant.update({
        where: {
            id: tenant_id
        },
        data: {
            ...payload
        }
    })
}