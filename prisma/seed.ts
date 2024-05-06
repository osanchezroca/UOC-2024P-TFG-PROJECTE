import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    prisma.$transaction(async (trx) => {
        const hour_opening = new Date()
        hour_opening.setHours(8, 0, 0, 0)
        const hour_closing = new Date()
        hour_closing.setHours(23, 59, 0, 0)
        const site_tenant = await trx.site_tenant.upsert({
            where: { code: 'default' },
            update: {},
            create: {
                name: "Default",
                code: "default",
                initial_latitude: 41.0878599,
                initial_longitude: 1.1523891,
                initial_zoom: 13,
                hour_opening: hour_opening.toISOString(),
                hour_closing: hour_closing.toISOString()
            }
        })
        const site_events = await trx.site_event.createMany({
            data: [
                {
                    name: "Jardineria",
                    icon: "tree",
                    code: "jardineria",
                    site_tenant_id: site_tenant.id
                },
                {
                    name: "Neteja",
                    icon: "broom",
                    code: "neteja",
                    site_tenant_id: site_tenant.id
                },
                {
                    name: "Mobilitat",
                    icon: "bus",
                    code: "mobilitat",
                    site_tenant_id: site_tenant.id
                },
                {
                    name: "Seguretat",
                    icon: "shieldAlt",
                    code: "seguretat",
                    site_tenant_id: site_tenant.id
                },
                {
                    name: "Il·luminació",
                    icon: "lightbulb",
                    code: "il-luminacio",
                    site_tenant_id: site_tenant.id
                },
                {
                    name: "Altres",
                    icon: "question",
                    code: "altres",
                    site_tenant_id: site_tenant.id
                }
            ]
        })
        const report_status = await trx.report_status.createMany({
            data: [
                {
                    name: "Entrant",
                    code: "incoming",
                    color: "blue",
                },
                {
                    name: "Llegit",
                    code: "read",
                    color: "gray",
                },
                {
                    name: "Actuat",
                    code: "act",
                    color: "green",
                },
                {
                    name: "Rebutjat",
                    code: "rejected",
                    color: "red",
                }
            ]
        })
        const client = await trx.client.create({
            data: {
                external_id: 'default',
                site_tenant_id: site_tenant.id,
            }
        })
        const statusIncoming = await trx.report_status.findFirst({
            where: {
                code: 'incoming'
            }
        })
        if (!statusIncoming) throw new Error('Event incoming not found')
        const eventJardineria = await trx.site_event.findFirst({
            where: {
                code: 'jardineria'
            }
        })
        if (!eventJardineria) throw new Error('Event jardineria not found')
        const report = await trx.report.create({
            data: {
                client_id: client.id,
                site_event_id: eventJardineria.id,
                status_id: statusIncoming.id,
                site_tenant_id: site_tenant.id,
                latitude: 41.08635505873995,
                longitude: 1.1565708032274422
            }
        })
        console.log(site_tenant, site_events, report_status, client, statusIncoming, eventJardineria, report)
    })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })