import { deleteEvent } from "@src/modules/site-event/site-event-services";
import { getTenantFromPathname } from "@src/modules/site-tenant/site-tenant-services";

export async function DELETE(request: Request, { params: { event_id } }) {
    try {
        const tenant = await getTenantFromPathname(request)
        if (!tenant.isAdmin) throw new Error('Unauthorized')
        const event = await deleteEvent(tenant.id, event_id)
        return Response.json(event)
    } catch (e: any) {
        return new Response(`${e.message}`, {
            status: 500,
        })
    }
}