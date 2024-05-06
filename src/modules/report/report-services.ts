import { Prisma } from "@src/libraries/database"

export const getReports = async (tenant_id: string) => {
    const database = Prisma
    return await database.report.findMany({
        include: {
            report_status: true,
            site_events: true
        },
        where: {
            site_tenant_id: tenant_id
        }
    })
}