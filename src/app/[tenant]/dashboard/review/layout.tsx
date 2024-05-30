'use client'
import { TenantContext } from '@src/contexts/TenantContext';
import StatusList from '@src/modules/report/status/StatusList';
import { useContext } from 'react';
import ReportList from './components/ReportList';
import ReportsMap from './components/ReportsMap';

export default function ReviewLayout({ children }) {
  const tenant = useContext(TenantContext)

  return (
    <div className="grid grid-cols-5 overflow-y-auto grow">
      <div className="flex flex-col gap-2 p-2" style={{ maxHeight: 'calc(100vh - 58px)' }}>
        <div className='flex flex-col gap-1 relative overflow-y-auto grow'>
          <ReportList />
        </div>
        <div className='flex flex-col gap-1'>
          <StatusList />
        </div>
      </div>
      <div className="col-span-4 flex flex-col h-full">
        <ReportsMap />
        {children}
      </div>
    </div >
  );
}
