import { getTenantFromPathname, updateTenant } from "@src/modules/site-tenant/site-tenant-services";

export async function GET(request: Request) {
    try {
        const tenant = await getTenantFromPathname(request, true)
        return Response.json(tenant)
    } catch (e: any) {
        return new Response(`${e.message}`, {
            status: 500,
        })
    }
}

export async function PUT(request: Request) {
    try {
        const tenant = await getTenantFromPathname(request, true)
        if (!tenant.isAdmin) throw new Error('Unauthorized')
        const data = await request.json()
        const updatedTenant = await updateTenant(tenant.id, data)
        return Response.json(updatedTenant)
    } catch (e: any) {
        return new Response(`${e.message}`, {
            status: 500,
        })
    }
}