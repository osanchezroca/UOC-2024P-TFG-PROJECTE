import SiteEvents from "../../../../../modules/site-event/SiteEvents";
import SiteEventsForm from "../../../../../modules/site-event/SiteEventsForm";
import SiteTenantForm from "../../../../../modules/site-tenant/SiteTenantForm";

export default function SettingsPage() {

    return (
        <div className="grid grid-cols-2 gap-2 p-2">
            <SiteTenantForm />
            <div className="flex flex-col gap-2 overflow-auto max-h-full relative">
                <div className="overflow-auto">
                    <SiteEvents />
                </div>
                <SiteEventsForm />
            </div>
        </div>
    )
}