import { Prisma } from "@src/libraries/database"

export const getClientByTenantAndId = async (tenant_id: string, client_id: string) => {
    const database = Prisma
    return await database.client.findFirst({
        where: {
            id: client_id,
            site_tenant_id: tenant_id
        }
    })
}
export const getClientByTenantAndCode = async (tenant_id: string, external_id: string) => {
    const database = Prisma
    return await database.client.findFirst({
        where: {
            external_id: external_id,
            site_tenant_id: tenant_id
        }
    })
}

export const getClientFromHeader = async (request: Request, tenant_id: string) => {
    const external_id = request.headers.get('client-id')
    if (!external_id) throw new Error('Client external_id not found')
    const client = await getClientByTenantAndCode(tenant_id, external_id)
    if (!client) throw new Error('Client not found')
    return client
}