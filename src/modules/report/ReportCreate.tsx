'use client'
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@src/components/Button";
import Heading from '@src/components/Heading';
import StatusWrapper from "@src/components/StatusWrapper";
import { GeoContext } from "@src/contexts/GeoContext";
import { TenantContext } from "@src/contexts/TenantContext";
import { useCreateReportMutation } from "@src/libraries/endpoints/report";
import EventSelector from '@src/modules/site-event/EventSelector';
import { Form, Formik, FormikValues } from "formik";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function ReportCreate() {
    const router = useRouter();
    const tenant = useContext(TenantContext);
    const { latitude, longitude } = useContext(GeoContext);
    const [datetime, setDatetime] = useState<Date>(new Date());
    const [routing, setRouting] = useState(false);
    const [createReport, createReportQuery] = useCreateReportMutation()

    const handleSubmit = async (values: FormikValues) => {
        try {
            const report = await createReport({
                latitude: latitude,
                longitude: longitude,
                event: values.event,
                resources: values.resources
            }).unwrap();
            setRouting(true);
            alert('Esdeveniment notificat');
            router.push(`/${tenant.code}/reports/${report.id}`);
        } catch (e: any) {
            alert(`L'esdeveniment no s'ha pogut notificar`);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setDatetime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        !routing && <div className="flex flex-col justify-center space-y-2 bg-slate-200 p-2">
            <Formik
                onSubmit={handleSubmit}
                initialValues={{
                    event: '',
                    resources: []
                }}>
                <Form>
                    <StatusWrapper query={createReportQuery} allowIdle noBlock>
                        <div className="flex flex-col justify-center gap-2">
                            <p>Coordenades: {latitude || '...'}, {longitude || '...'}</p>
                            <p>Data de l'esdeveniment: {datetime.toLocaleString()}</p>
                            <Heading>Esdeveniment</Heading>
                            <EventSelector name='event' />
                            <Heading>Recursos</Heading>
                            <div className="flex items-baseline space-x-3 bg-slate-300 rounded-lg border-dashed border-4 border-slate-400 p-3">
                                <FontAwesomeIcon icon={faFile} size="lg" />
                                <p>FILE FROP ZONE</p>
                            </div>
                            <Button type='submit'>Notificar l'esdeveniment</Button>
                        </div>
                    </StatusWrapper>
                </Form>
            </Formik>
        </div>
    );
}