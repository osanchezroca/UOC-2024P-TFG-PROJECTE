'use client'
import CardComponent from '@src/components/CardComponent';
import { TenantContext } from '@src/contexts/TenantContext';
import StatusList from '@src/modules/report/status/StatusList';
import { useContext } from 'react';
import ReportList from './components/ReportList';
import ReportsMap from './components/ReportsMap';

export default function ReviewLayout({ children }) {
  const tenant = useContext(TenantContext)

  return (
    <div className="grid grid-cols-5 overflow-y-auto grow gap-3">
      <div className="flex flex-col gap-3 ps-3 px-3 py-3" style={{ maxHeight: 'calc(100vh - 53px)' }}>
        <CardComponent className='overflow-auto px-1 py-1'>
          <ReportList />
        </CardComponent>
        <CardComponent className='flex flex-col gap-1'>
          <StatusList />
        </CardComponent>
      </div>
      <div className="col-span-4 flex flex-col h-full gap-3 pe-3 py-3">
        <CardComponent className='grow py-0 px-0 overflow-auto'>
          <ReportsMap />
        </CardComponent>
        {children}
      </div>
    </div >
  );
}
