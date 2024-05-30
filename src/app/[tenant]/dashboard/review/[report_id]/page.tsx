'use client'
import PanelReport from "./components/PanelReport";

export default function ReportPage({ params: { report_id } }) {
  return <div style={{ maxHeight: '60%', minHeight: '300px' }}>
    <PanelReport report_id={report_id} />
  </div>
}
