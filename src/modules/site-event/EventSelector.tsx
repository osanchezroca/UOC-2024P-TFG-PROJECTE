import StatusWrapper from '@src/components/StatusWrapper';
import { useGetEventsQuery } from '@src/libraries/endpoints/event';
import { useFormikContext } from 'formik';

type EventSelectorProps = {
    name: string;
};

export default function EventSelector({ name }: EventSelectorProps) {
    const eventsQuery = useGetEventsQuery();
    const events = eventsQuery.data;

    const formik = useFormikContext();
    const values: any = formik.values;
    const currentValue = values[name];
    const itemClass = `cursor-pointer flex flex-col items-center rounded-lg shadow border-solid border-2 border-slate-400 py-3 bg-slate-300 select-none`
    return (
        <StatusWrapper query={eventsQuery}>
            <div className="grid grid-cols-4 gap-3">
                {events && events.length ? events.map((event: any) =>
                    <div key={event.id} className={`${itemClass}${currentValue === event.id ? ' bg-slate-400 border-slate-500' : ''}`}
                        onClick={() => formik.setFieldValue(name, event.id)}>
                        <p className='text-2xl'>{event.icon}</p>
                        <p>{event.name}</p>
                    </div>
                ) : <p>No s'han definit esdeveniments</p>}
            </div >
        </StatusWrapper >
    );
};
