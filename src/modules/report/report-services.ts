import { Prisma } from "@src/libraries/database"

export const getReports = async () => {
    const database = Prisma
    return await database.report.findMany({
        include: {
            report_status: true,
            site_events: true
        }
    })
}