import { getTenantFromPathname } from "@src/modules/site-tenant/site-tenant-services"
import { getReports } from "@src/modules/report/report-services"
import { Prisma } from "@src/libraries/database"

export async function POST(request: Request) {
    try {
        const tenant = await getTenantFromPathname(request)
        const body = await request.json()

        if (!body.externalId) throw new Error('externalId is required')
        // Check if client exist on DB
        const existentClient = await Prisma.client.findFirst({
            where: {
                external_id: body.externalId,
                site_tenant_id: tenant.id
            }
        })

        if (existentClient) { // If exist, update last_access
            await Prisma.client.update({
                where: {
                    id: existentClient.id
                },
                data: {
                    last_access: new Date().toISOString()
                }
            })
            return Response.json(existentClient)
        } else if (!existentClient) {             // If not exist, create a new want
            const newClient = await Prisma.client.create({
                data: {
                    external_id: body.externalId,
                    site_tenant_id: tenant.id
                }
            })
            return Response.json(newClient)
        }
    } catch (e: any) {
        return new Response(`${e.message}`, {
            status: 500,
        })
    }
}