'use client'
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@src/components/Button";
import Heading from '@src/components/Heading';
import { GeoContext } from "@src/contexts/GeoContext";
import { Form, Formik, FormikValues } from "formik";
import { useContext, useEffect, useState } from "react";
import EventSelector from '@src/modules/site-event/EventSelector';
import { useCreateReportMutation } from "@src/libraries/endpoints/report";
import StatusWrapper from "@src/components/StatusWrapper";
import { useRouter } from "next/navigation";
import { TenantContext } from "@src/contexts/TenantContext";

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
            <p>Coordenades: {latitude || '...'}, {longitude || '...'}</p>
            <Formik
                onSubmit={handleSubmit}
                initialValues={{
                    event: '',
                    resources: []
                }}>
                <Form>
                    <StatusWrapper query={createReportQuery} allowIdle noBlock>
                        <div className="flex flex-col justify-center">
                            <Heading>Esdeveniment</Heading>
                            <EventSelector name='event' />
                            <Heading>Recursos</Heading>
                            <div className="flex items-baseline space-x-3 bg-slate-300 rounded-lg border-dashed border-4 border-slate-400 p-3">
                                <FontAwesomeIcon icon={faFile} size="lg" />
                                <p>FILE FROP ZONE</p>
                            </div>
                            <div className='flex justify-center space-x-2'>
                                <p>Data de l'esdeveniment:</p>
                                <p className="font-serif">{datetime.toLocaleString()}</p>
                            </div>
                            <Button type='submit'>Notificar l'esdeveniment</Button>
                        </div>
                    </StatusWrapper>
                </Form>
            </Formik>
        </div>
    );
}