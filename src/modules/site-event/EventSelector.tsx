import StatusWrapper from '@src/components/StatusWrapper';
import { useGetEventsQuery } from '@src/libraries/endpoints/event';
import { useFormikContext } from 'formik';
import EventOption from './EventOption';

type EventSelectorProps = {
    name: string;
};

export default function EventSelector({ name }: EventSelectorProps) {
    const eventsQuery = useGetEventsQuery();
    const events = eventsQuery.data;

    const formik = useFormikContext();
    return (
        <StatusWrapper query={eventsQuery}>
            <div className="grid grid-cols-4 gap-3">
                {events && events.length ? events.map((event: any) =>
                    <EventOption
                        key={event.id}
                        id={event.id}
                        icon={event.icon}
                        name={event.name}
                        isActive={formik.values[name] === event.id}
                        onClick={() => formik.setFieldValue(name, event.id)}
                    />
                ) : <p>No s'han definit esdeveniments</p>}
            </div>
        </StatusWrapper >
    );
};
