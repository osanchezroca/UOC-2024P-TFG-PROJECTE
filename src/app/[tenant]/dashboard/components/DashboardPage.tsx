'use client'
import DynamicMap from '@src/components/DynamicMap';
import { TenantContext } from "@src/contexts/TenantContext";
import { useGetDashboardReportsQuery } from '@src/libraries/endpoints/report';
import ReportList from '@src/modules/report/ReportList';
import StatusList from '@src/modules/report/status/StatusList';
import { useContext, useState } from "react";
import ReportPanel from './PanelReport';

export default function DashboardPage() {
  const tenant = useContext(TenantContext)

  const latitude = tenant.initialLatitude
  const longitude = tenant.initialLongitude
  const zoom = tenant.initialZoom

  const reportsQuery = useGetDashboardReportsQuery()
  const data = reportsQuery.data

  const [selectedReport, setSelectedReport] = useState<string>(null)

  return (
    <div className="grid grid-cols-5 overflow-y-auto grow">
      <div className="flex flex-col gap-2 p-2" style={{ maxHeight: 'calc(100vh - 58px)' }}>
        <div className='flex flex-col gap-1 relative overflow-y-auto grow'>
          <ReportList selectedReport={selectedReport} onClickReport={(report) => setSelectedReport(report)} />
        </div>
        <div className='flex flex-col gap-1'>
          <StatusList />
        </div>
      </div>
      <div className="col-span-4 flex flex-col h-full">
        <div className="grow">
          {
            !latitude || !longitude || !zoom ? <p>Position data not found</p>
              : <DynamicMap position={[latitude, longitude]} zoom={zoom}>
                {({ Marker, Popup }) =>
                  data?.map(report => <Marker key={report.id} position={[report.latitude, report.longitude]}>
                    <Popup>
                      {selectedReport === report.id ? <p>Selected</p> : null}
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>)
                }
              </DynamicMap>
          }
        </div>
        {selectedReport ? <div style={{ maxHeight: '60%' }}>
          <ReportPanel report_id={selectedReport} />
        </div> : null}
      </div>
    </div >
  );
}
