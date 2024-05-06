import { Prisma } from "@src/libraries/database"

export const getTenant = async (tenant: string) => {
    const database = Prisma
    return await database.site_tenant.findFirst({
        where: {
            code: tenant
        }
    })
}