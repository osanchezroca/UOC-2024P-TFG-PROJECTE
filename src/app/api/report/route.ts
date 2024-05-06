import { getTenantFromPathname } from "@src/libraries/tenant-detect"
import { getReports } from "@src/modules/report/report-services"

export async function GET(request: Request) {
    const tenant = await getTenantFromPathname(request)
    console.log(tenant)
    const reports = await getReports(tenant.id)
    return Response.json(reports)
}