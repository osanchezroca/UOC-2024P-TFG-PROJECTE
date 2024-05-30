'use client'

import Button from "@src/components/Button"
import StatusWrapper from "@src/components/StatusWrapper"
import { useCreateReportLogMutation } from "@src/libraries/endpoints/report"
import { Form, Formik } from "formik"

type Props = {
    report_id: any
}
export default function ReportLogForm({ report_id }: Props) {
    const [createLog, createLogQuery] = useCreateReportLogMutation()

    const handleSubmit = async (values: any) => {
        await createLog({ report_id, message: values.message })
    }

    return <StatusWrapper query={createLogQuery}>
        <Formik initialValues={{ message: '' }} onSubmit={handleSubmit}>
            {({ handleChange, handleSubmit, values }) => <Form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <textarea name="message" className="border rounded p-2" value={values.message} onChange={handleChange} />
                    <Button type="submit">Afegir missatge</Button>
                </div>
            </Form>}
        </Formik>
    </StatusWrapper>
}