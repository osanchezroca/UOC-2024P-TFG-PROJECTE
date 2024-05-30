import Button from "@src/components/Button";
import StatusWrapper from "@src/components/StatusWrapper";
import { useGetTenantQuery } from "@src/libraries/endpoints/site";
import { Field, Form, Formik } from "formik";

export default function SiteTenantForm() {
    const tenantQuery = useGetTenantQuery()
    const tenant = tenantQuery.data

    const handleSubmit = (values: any) => {
        console.log(values)
    }
    const initialValues = {
        name: tenant.name || '',
        initial_latitude: tenant.initialLatitude || "0",
        initial_longitude: tenant.initialLongitude || "0",
        initial_zoom: tenant.initialZoom || "1",
        hour_opening: tenant.hourOpening || "0",
        hour_closing: tenant.hourClosing || "0",
    }
    return (<StatusWrapper query={tenantQuery}>
        {tenant && <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <div className="flex flex-col justify-stretch gap-2">
                    <div className="flex flex-col justify-stretch">
                        <label htmlFor="name">Name</label>
                        <Field type="text" name="name" className="border rounded p-2" />
                    </div>
                    <legend>Hores de funcionament</legend>
                    <div className="grid grid-cols-2">
                        <label htmlFor="hour_opening">Inici</label>
                        <Field type="time" name="hour_opening" className="border rounded p-2" />
                    </div>
                    <div className="grid grid-cols-2">
                        <label htmlFor="hour_closing">Fi</label>
                        <Field type="time" name="hour_closing" className="border rounded p-2" />
                    </div>
                    <legend>Ubicació per defecte</legend>
                    <div className="grid grid-cols-2">
                        <label htmlFor="initial_latitude">Latitud</label>
                        <Field type="number" step="0.000001" max="90" min="-90" name="initial_latitude" className="border rounded p-2" />
                    </div>
                    <div className="grid grid-cols-2">
                        <label htmlFor="initial_longitude">Longitud</label>
                        <Field type="number" step="0.000001" max="180" min="-180" name="initial_longitude" className="border rounded p-2" />
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
    )
}