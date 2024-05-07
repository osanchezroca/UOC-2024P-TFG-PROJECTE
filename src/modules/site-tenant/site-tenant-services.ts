import { Prisma } from "@src/libraries/database"

/**
 * Return the tenant from the database
 * @param tenant 
 * @returns 
 */
export const getTenant = async (site_tenant_id: string) => {
    const database = Prisma
    return await database.site_tenant.findFirst({
        where: {
            code: site_tenant_id
        }
    })
}

/**
 * This function checks if the tenant admin key is correct
 * @param request 
 * @param admin_key 
 * @returns 
 */
export const checkAdminKey = (request: Request, admin_key: string): boolean => {
    const adminKey = request.headers.get('admin-key')
    return adminKey === admin_key
}