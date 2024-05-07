import { getEvents } from "@src/modules/site-event/site-event-services";
import { getTenantFromPathname } from "@src/modules/site-tenant/tenant-detect";

export async function GET(request: Request) {
    try {
        const tenant = await getTenantFromPathname(request)
        const events = await getEvents(tenant.id)
        return Response.json(events)
    } catch (e: any) {
        return new Response(`${e.message}`, {
            status: 500,
        })
    }
}