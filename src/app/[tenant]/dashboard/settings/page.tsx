'use client'

import CardComponent from '@src/components/CardComponent';
import SiteEvents from '@src/modules/site-event/SiteEvents';
import SiteEventsForm from '@src/modules/site-event/SiteEventsForm';
import SiteTenantForm from '@src/modules/site-tenant/SiteTenantForm';

export default function Dashboard() {
  return (
    <div className="grid grid-cols-2 gap-2 p-2">
      <div>
        <CardComponent>
          <SiteTenantForm />
        </CardComponent>
      </div>
      <div className="flex flex-col gap-2 overflow-auto max-h-full relative">
        <CardComponent className="overflow-auto">
          <SiteEvents />
        </CardComponent>
        <CardComponent>
          <SiteEventsForm />
        </CardComponent>
      </div>
    </div>
  );
}
