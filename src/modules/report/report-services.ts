import { Prisma } from "@src/libraries/database";

export const getReports = async (site_tenant_id: string) => {
    const database = Prisma
    return await database.report.findMany({
        include: {
            report_status: true,
            site_events: true,
            report_log: true
        },
        where: {
            site_tenant_id: site_tenant_id
        }
    })
}

export const getPublicReports = async (site_tenant_id: string, client_id: string) => {
    const database = Prisma
    return await database.report.findMany({
        include: {
            report_status: true,
            site_events: true
        },
        where: {
            client_id: client_id,
            site_tenant_id: site_tenant_id
        }
    })
}


export const getPublicReport = async (site_tenant_id: string, client_id: string, report_id: string,) => {
    const database = Prisma
    return await database.report.findFirst({
        include: {
            report_status: true,
            site_events: true
        },
        where: {
            site_tenant_id: site_tenant_id,
            client_id: client_id,
            id: report_id
        }
    })
}

export const getReport = async (site_tenant_id: string, report_id: string,) => {
    const database = Prisma
    return await database.report.findFirst({
        include: {
            report_status: true,
            site_events: true
        },
        where: {
            site_tenant_id: site_tenant_id,
            id: report_id
        }
    })
}

export const createReport = async (site_tenant_id: string, client_id: string, data: any) => {
    const database = Prisma
    const incomingReportStatus = await database.report_status.findFirst({
        where: {
            code: 'incoming'
        }
    })
    return await database.report.create({
        data: {
            ...data,
            site_tenant_id: site_tenant_id,
            client_id: client_id,
            status_id: incomingReportStatus?.id
        }
    })
} 