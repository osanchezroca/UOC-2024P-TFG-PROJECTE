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

export const getPublicReports = async (tenant_id: string, client_id: string) => {
    const database = Prisma
    return await database.report.findMany({
        include: {
            report_status: true,
            site_events: true
        },
        where: {
            client_id: client_id,
            site_tenant_id: tenant_id
        }
    })
}


export const getPublicReport = async (tenant_id: string, client_id: string, report_id: string,) => {
    const database = Prisma
    return await database.report.findFirst({
        include: {
            report_status: true,
            site_events: true
        },
        where: {
            site_tenant_id: tenant_id,
            client_id: client_id,
            id: report_id
        }
    })
}