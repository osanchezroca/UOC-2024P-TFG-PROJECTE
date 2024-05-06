import { getReports } from "@src/modules/report/report-services"

export async function GET(request: Request) {
    const reports = await getReports()
    return Response.json(reports)
}