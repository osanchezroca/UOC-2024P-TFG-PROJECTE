import { Prisma } from "@src/libraries/database"

export const getStatus = async () => {
    const database = Prisma
    return await database.report_status.findMany()
}