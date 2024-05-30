import { createEvent, getEvents } from "@src/modules/site-event/site-event-services";
import { getTenantFromPathname } from "@src/modules/site-tenant/site-tenant-services";

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

export async function POST(request: Request) {
    try {
        const tenant = await getTenantFromPathname(request)
        if (!tenant.isAdmin) throw new Error('Unauthorized')
        const data = await request.json()
        const event = await createEvent(tenant.id, data)
        return Response.json(event)
    } catch (e: any) {
        return new Response(`${e.message}`, {
            status: 500,
        })
    }
}