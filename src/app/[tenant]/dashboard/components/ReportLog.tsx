'use client'

import Button from "@src/components/Button"
import Heading from "@src/components/Heading"
import { Form, Formik } from "formik"

type Props = {
    report_id: any
}
export default function ReportLog({ report_id }: Props) {
    const log = [
        { id: 1, created_at: '2021-09-01T12:00:00', message: 'Missatge 1' },
    ]
    return <div className='flex flex-col bg-slate-100 rounded-md shadow-md'>
        <Heading>Missatges administratius</Heading>
        <div className="flex flex-col grow gap-1">
            {log.map((log: any) => <div key={log.id} className="bg-slate-50 border">
                <p className='text-xs text-right'>{new Date(log.created_at).toLocaleString()}</p>
                <p className='text-sm text-justify'>{log.message}</p>
            </div>
            )}
        </div>
        <p>Afegir missatge</p>
        <Formik initialValues={{ message: '' }} onSubmit={(values) => console.log(values)}>
            {({ handleChange, handleSubmit, values }) => <Form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <textarea name="message" className="border rounded" value={values.message} onChange={handleChange} />
                    <Button type="submit">Afegir missatge</Button>
                </div>
            </Form>}
        </Formik>
    </div>
}