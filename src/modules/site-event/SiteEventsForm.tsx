import Button from "@src/components/Button";
import StatusWrapper from "@src/components/StatusWrapper";
import { useCreateEventMutation } from "@src/libraries/endpoints/event";
import { Field, Form, Formik } from "formik";

export default function SiteEventsForm() {
    const [createEvent, createEventQuery] = useCreateEventMutation()
    const handleSubmit = async (values: any) => {
        await createEvent(values)
    }
    const initialValues = {
        icon: '🟩',
        name: ''
    }
    return (
        <StatusWrapper query={createEventQuery}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                            <div className="flex flex-col">
                                <label htmlFor="icon">Icona</label>
                                <Field type="text" name="icon" list="emojis" className="border rounded p-2" />
                                <datalist id="emojis">
                                    <option value="✨">✨ estrelles</option>
                                    <option value="🟩">🟩 cuadrat verd</option>
                                    <option value="🟦">🟦 cuadrat blau</option>
                                    <option value="🟪">🟪 cuadrat lila</option>
                                    <option value="🟨">🟨 cuadrat groc</option>
                                    <option value="🟧">🟧 cuadrat taronja</option>
                                    <option value="🟥">🟥 cuadrat vermell</option>
                                </datalist>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="name">Nom de l'esdeveniment</label>
                                <Field type="text" name="name" className="border rounded p-2" />
                            </div>
                            <div className="flex items-end">
                                <Button>Afegir</Button>
                            </div>
                        </div>
                        <div className="border py-1 px-2 bg-orange-100">
                            <p className="text-slate-700 text-sm">És recomanat definir un "emoji" natiu del sistema com a icona.</p>
                            <p className="text-slate-700 text-sm">A Windows, presionant <kbd className="bg-slate-100 border px-1">windows</kbd>+<kbd className="bg-slate-100 border px-1">.</kbd>, o bé a MacOS, presionant <kbd className="bg-slate-100 border px-1">ctrl</kbd>+<kbd className="bg-slate-100 border px-1">cmd</kbd>+<kbd className="bg-slate-100 border px-1">espai</kbd></p>
                        </div>
                    </div>
                </Form>
            </Formik>
        </StatusWrapper>
    )
}