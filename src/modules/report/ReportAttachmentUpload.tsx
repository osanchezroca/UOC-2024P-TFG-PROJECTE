'use client';

import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@src/components/Button';
import StatusWrapper from '@src/components/StatusWrapper';
import { useUploadAttachmentMutation } from '@src/libraries/endpoints/report';
import { Form, Formik, FormikValues } from 'formik';

export default function ReportAttachmentUpload({ report_id }) {
    const [uploadAttachment, uploadAttachmentQuery] = useUploadAttachmentMutation()

    const handleSubmit = async (values: FormikValues) => {
        try {
            for (const file of values.resources) {
                await uploadAttachment({
                    report_id: report_id,
                    resources: file
                }).unwrap();
            }
        } catch (e: any) {
            alert(`La pujada no s'ha pogut completar`);
        }
    }


    return <div className="flex flex-col justify-center space-y-2 bg-slate-200 p-2">
        <Formik
            onSubmit={handleSubmit}
            initialValues={{
                resources: null
            }}
            validate={(values) => {
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
                <StatusWrapper query={uploadAttachmentQuery} allowIdle noBlock>
                    <div className="flex flex-col justify-center gap-2">
                        {formik.errors.resources && <p className="text-red-500">{formik.errors['resources'] as string}</p>}
                        <div className={`flex items-baseline space-x-3 bg-slate-300 rounded-lg border-dashed border-4 border-slate-400 p-3${formik.errors.resources ? ' border-red-800 bg-red-300' : ''}`} >
                            <FontAwesomeIcon icon={faFile} size="lg" />
                            <input
                                type='file'
                                multiple
                                capture
                                accept={'image/*'}
                                onChange={(e) => formik.setFieldValue('resources', e.target.files)}
                            />
                        </div>
                        <Button type='submit' disabled={Object.keys(formik.errors || {}).length || formik.isSubmitting}>Pujar arxiu</Button>
                    </div>
                </StatusWrapper>
            </Form>}
        </Formik>
    </div>
}