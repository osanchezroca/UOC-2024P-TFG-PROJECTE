import { Prisma } from "@src/libraries/database";
import { prepareFields } from '@src/libraries/utils';

export const getReportLogs = async (site_tenant_id: string, report_id: string) => {
    const database = Prisma
    return await database.report_log.findMany({
        where: {
            report: {
                site_tenant_id: site_tenant_id,
                id: report_id
            }
        },
        orderBy: {
            created_at: 'desc'
        }
    })
}

export const createReportLog = async (report_id: string, message: string) => {
    const database = Prisma
    const payload = prepareFields({ report_id, message }, ['report_id', 'message'])
    return await database.report_log.create({
        data: {
            ...payload
        }
    })
}