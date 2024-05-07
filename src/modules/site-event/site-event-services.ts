import { Prisma } from "@src/libraries/database"

/**
 * Return the events of a tenant
 * @param tenant 
 * @returns 
 */
export const getEvents = async (site_tenant_id: string) => {
    const database = Prisma
    return await database.site_event.findMany({
        where: {
            site_tenant_id: site_tenant_id
        }
    })
}
