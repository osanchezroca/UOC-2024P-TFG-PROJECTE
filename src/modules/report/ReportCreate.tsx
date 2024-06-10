'use client'
import Button from "@src/components/Button";
import Heading from '@src/components/Heading';
import StatusWrapper from "@src/components/StatusWrapper";
import { GeoContext } from "@src/contexts/GeoContext";
import { TenantContext } from "@src/contexts/TenantContext";
import { useCreateReportMutation, useUploadAttachmentMutation } from "@src/libraries/endpoints/report";
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
    const [uploadAttachment, uploadAttachmentQuery] = useUploadAttachmentMutation()

    const handleSubmit = async (values: FormikValues) => {
        try {
            const report = await createReport({
                latitude: latitude,
                longitude: longitude,
                event: values.event
            }).unwrap();
            for (const file of values.resources) {
                await uploadAttachment({
                    report_id: report.id,
                    resources: file
                }).unwrap();
            }
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

    return !routing && (latitude && longitude) ? (
        <div className="flex flex-col justify-center space-y-2">
            <Formik
                onSubmit={handleSubmit}
                initialValues={{
                    event: '',
                    resources: null
                }}
                validate={(values) => {
                    if (values.event === '') {
                        return { event: 'Selecciona un esdeveniment' };
                    }
                    if (values.resources) {
                        const files = values.resources as FileList;
                        //check resources does not exceed 4.5MB file size
                        let totalSize = 0;
                        for (let i = 0; i < files.length; i++) {
                            const file = files[i];
                            totalSize += file.size;
                        }
                        if (totalSize > 4.5 * 1024 * 1024) {
                            return { resources: 'Els recursos multimèdia no poden superar 4.5MB' };
                        }
                    }
                    return null;
                }}
            >
                {formik => <Form>
                    <StatusWrapper query={createReportQuery} allowIdle noBlock>
                        <StatusWrapper query={uploadAttachmentQuery} allowIdle noBlock>
                            <div className="flex flex-col justify-center gap-3">
                                <Heading>Tipus d'esdeveniment</Heading>
                                {formik.errors.event && <p className="text-red-500">{formik.errors['event'] as string}</p>}
                                <EventSelector name='event' />
                                <Heading>Recursos multimèdia</Heading>
                                {formik.errors.resources && <p className="text-red-500">{formik.errors['resources'] as string}</p>}
                                <div className={`flex items-baseline space-x-3 bg-gray-300 break-words overflow-hidden rounded-lg border-dashed border-2 border-gray-400 p-3${formik.errors.resources ? ' border-red-800 bg-red-300' : ''}`} >
                                    <input
                                        type='file'
                                        multiple
                                        capture
                                        accept={'image/*'}
                                        onChange={(e) => formik.setFieldValue('resources', e.target.files)}
                                    />
                                </div>
                                <Button color="orange" type='submit' disabled={Object.keys(formik.errors || {}).length || formik.isSubmitting}>Notificar l'esdeveniment</Button>
                                <div className="flex flex-col justify-center gap-1">
                                    <p className="text-xs">Coordenades: {latitude || '...'}, {longitude || '...'}</p>
                                    <p className="text-xs">Data de l'esdeveniment: {datetime.toLocaleString()}</p>
                                </div>
                            </div>
                        </StatusWrapper>
                    </StatusWrapper>
                </Form>}
            </Formik>
        </div>
    ) : null
}