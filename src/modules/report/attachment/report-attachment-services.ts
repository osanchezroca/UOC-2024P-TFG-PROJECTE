import { Prisma } from "@src/libraries/database"

export const createAttachment = async (report_id: string, route: string) => {
    const database = Prisma
    return await database.report_attachment.create({
        data: {
            report_id: report_id,
            route: route
        }
    })
}

export const deleteAttachment = async (report_id: string, route: string) => {
    const database = Prisma
    return await database.report_attachment.delete({
        where: {
            report_id: report_id,
            route: route
        }
    })
}
