import SiteEvents from "./SiteEvents";
import SiteEventsForm from "./SiteEventsForm";
import SiteTenantForm from "./SiteTenantForm";

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