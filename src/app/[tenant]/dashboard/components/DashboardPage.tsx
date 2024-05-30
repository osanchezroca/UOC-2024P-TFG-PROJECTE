'use client'
import { TenantContext } from "@src/contexts/TenantContext";
import { useGetDashboardReportsQuery } from '@src/libraries/endpoints/report';
import StatusList from '@src/modules/report/status/StatusList';
import { useContext, useState } from "react";
import ReportPanel from './PanelReport';
import ReportList from "./ReportList";
import ReportsMap from './ReportsMap';

export default function DashboardPage() {
  const tenant = useContext(TenantContext)

  const latitude = tenant.initialLatitude
  const longitude = tenant.initialLongitude
  const zoom = tenant.initialZoom

  const reportsQuery = useGetDashboardReportsQuery()
  const data = reportsQuery.data

  const [selectedReport, setSelectedReport] = useState<string>(null)

  const handleSelectReport = (report_id: string) => {
    //When function is called, if selectedReport is null, will set the selectedReport to the report_id
    //If selectedReport is not null, will set the selectedReport to null
    if (selectedReport === report_id) {
      setSelectedReport(null)
    } else {
      setSelectedReport(report_id)
    }
  }

  return (
    <div className="grid grid-cols-5 overflow-y-auto grow">
      <div className="flex flex-col gap-2 p-2" style={{ maxHeight: 'calc(100vh - 58px)' }}>
        <div className='flex flex-col gap-1 relative overflow-y-auto grow'>
          <ReportList selectedReport={selectedReport} onClickReport={handleSelectReport} />
        </div>
        <div className='flex flex-col gap-1'>
          <StatusList />
        </div>
      </div>
      <div className="col-span-4 flex flex-col h-full">
        <div className="grow">
          {
            !latitude || !longitude || !zoom ? <p>Position data not found</p>
              : <ReportsMap selectedReport={selectedReport} onCLickReport={handleSelectReport} />
          }
        </div>
        {selectedReport ? <div style={{ maxHeight: '60%', minHeight: '300px' }}>
          <ReportPanel report_id={selectedReport} />
        </div> : null}
      </div>
    </div >
  );
}
