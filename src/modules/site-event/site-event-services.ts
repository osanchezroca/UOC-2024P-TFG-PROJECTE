import { Prisma } from "@src/libraries/database";
import { prepareFields } from '@src/libraries/utils';

/**
 * Return the events of a tenant
 * @param tenant 
 * @returns 
 */
export const getEvents = async (site_tenant_id: string) => {
    const database = Prisma
    return await database.site_event.findMany({
        where: {
            deleted_at: null,
            site_tenant_id: site_tenant_id
        }
    })
}

export const createEvent = async (site_tenant_id: string, data: any) => {
    const database = Prisma
    const payload = prepareFields(data, ['name', 'icon', 'code'])
    return await database.site_event.create({
        data: {
            ...payload,
            site_tenant_id: site_tenant_id
        }
    })
}

export const deleteEvent = async (site_tenant_id: string, event_id: string) => {
    const database = Prisma
    return await database.site_event.update({
        data: {
            deleted_at: new Date()
        },
        where: {
            id: event_id,
            site_tenant_id: site_tenant_id
        }
    })
}