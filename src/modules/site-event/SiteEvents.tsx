import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from "@src/components/Button";
import StatusWrapper from "@src/components/StatusWrapper";
import { useDeleteEventMutation, useGetEventsQuery } from "@src/libraries/endpoints/event";

export default function SiteEvents() {
    const siteEventsQuery = useGetEventsQuery()
    const siteEvents = siteEventsQuery.data

    const [deleteEvent, deleteEventQuery] = useDeleteEventMutation()

    return (
        <StatusWrapper query={siteEventsQuery}>
            <StatusWrapper query={deleteEventQuery}>
                <table className="table-auto border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm relative">
                    <thead className="bg-slate-50 dark:bg-slate-700">
                        <tr>
                            <th className="border border-slate-300 dark:border-slate-600 font-semibold p-2 text-slate-900 dark:text-slate-200 text-left">
                                Icona
                            </th>
                            <th className="border border-slate-300 dark:border-slate-600 font-semibold p-2 text-slate-900 dark:text-slate-200 text-left">
                                Nom
                            </th>
                            <th className="border border-slate-300 dark:border-slate-600 font-semibold p-2 text-slate-900 dark:text-slate-200 text-left"></th>
                        </tr>
                    </thead>
                    <tbody className="overflow-auto max-h-40">
                        {siteEvents?.map((event: any) => (
                            <tr key={event.id}>
                                <td className="border border-slate-300 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400">
                                    {event.icon}
                                </td>
                                <td className="border border-slate-300 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400">
                                    {event.name}
                                </td>
                                <td className="border border-slate-300 dark:border-slate-700 p-2 text-slate-500 dark:text-slate-400">
                                    <Button className="bg-red-500 hover:bg-red-900" size="sm" onClick={() => deleteEvent(event.id)}><FontAwesomeIcon icon={faTimes} /></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </StatusWrapper >
        </StatusWrapper >
    )
}