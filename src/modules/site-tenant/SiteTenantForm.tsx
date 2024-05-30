import Button from "@src/components/Button";
import StatusWrapper from "@src/components/StatusWrapper";
import { useGetTenantQuery, useUpdateTenantMutation } from "@src/libraries/endpoints/site";
import { Field, Form, Formik } from "formik";

export default function SiteTenantForm() {
    const tenantQuery = useGetTenantQuery()
    const tenant = tenantQuery.data

    const [updateTenant, updateTenantQuery] = useUpdateTenantMutation()

    const handleSubmit = async (values: any) => {
        await updateTenant({
            ...values,
            hour_opening: fromTimeToISO(tenant.hour_opening, values.hour_opening),
            hour_closing: fromTimeToISO(tenant.hour_closing, values.hour_closing)
        })
    }

    const fromISOtoTime = (iso: string) => {
        const date = new Date(iso)
        return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
    }
    const fromTimeToISO = (origin: Date, time: string) => {
        const [hours, minutes] = time.split(':')
        const date = new Date(origin)
        date.setHours(parseInt(hours))
        date.setMinutes(parseInt(minutes))
        return date.toISOString()
    }
    const getTimezoneFromISO = (iso: string) => {
        const date = new Date(iso)
        return date.toString().match(/\(([^)]+)\)$/)[1]
    }


    const initialValues = {
        name: tenant.name || '',
        initial_latitude: tenant.initial_latitude || "0",
        initial_longitude: tenant.initial_longitude || "0",
        initial_zoom: tenant.initial_zoom || "9",
        hour_opening: fromISOtoTime(tenant.hour_opening) || "00:00",
        hour_closing: fromISOtoTime(tenant.hour_closing) || "00:00",
    }
    return (<StatusWrapper query={tenantQuery}>
        <StatusWrapper query={updateTenantQuery}>
            {tenant && <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <div className="flex flex-col justify-stretch gap-2">
                        <div className="flex flex-col justify-stretch">
                            <label htmlFor="name">Name</label>
                            <Field type="text" name="name" className="border rounded p-2" />
                        </div>
                        <legend>Hores de funcionament</legend>
                        <div className="grid grid-cols-2">
                            <div className="flex flex-col">
                                <label htmlFor="hour_opening">Inici</label>
                                <p className="text-xs text-gray-600">{getTimezoneFromISO(tenant.hour_opening)}</p>
                            </div>
                            <Field type="time" name="hour_opening" className="border rounded p-2" />
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="flex flex-col">
                                <label htmlFor="hour_closing">Fi</label>
                                <p className="text-xs text-gray-600">{getTimezoneFromISO(tenant.hour_closing)}</p>
                            </div>
                            <Field type="time" name="hour_closing" className="border rounded p-2" />
                        </div>
                        <legend>Ubicació per defecte</legend>
                        <div className="grid grid-cols-2">
                            <label htmlFor="initial_latitude">Latitud</label>
                            <Field type="number" step="0.0000000000000001" max="90" min="-90" name="initial_latitude" className="border rounded p-2" />
                        </div>
                        <div className="grid grid-cols-2">
                            <label htmlFor="initial_longitude">Longitud</label>
                            <Field type="number" step="0.0000000000000001" max="180" min="-180" name="initial_longitude" className="border rounded p-2" />
                        </div>
                        <div className="grid grid-cols-2">
                            <label htmlFor="initial_zoom">Augment</label>
                            <div className="flex justify-stretch">
                                <Field type="range" min="1" max="17" step="1" name="initial_zoom" className="grow border rounded p-2" />
                                <Field type="number" min="1" max="17" step="1" name="initial_zoom" className="border rounded p-2 max-w-20" />
                            </div>
                        </div>
                        <Button>Guardar</Button>
                    </div>
                </Form>
            </Formik>}
        </StatusWrapper>
    </StatusWrapper>
    )
}