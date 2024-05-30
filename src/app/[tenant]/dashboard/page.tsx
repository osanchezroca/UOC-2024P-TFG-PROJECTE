'use client'
import Spinner from '@src/components/Spinner';
import { TenantContext } from '@src/contexts/TenantContext';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';

export default function Dashboard() {
  const router = useRouter()
  const tenant = useContext(TenantContext)

  useEffect(() => {
    if (tenant.code) {
      router.push(`/${tenant.code}/dashboard/review`)
    }
  }, [tenant.code])

  return <Spinner />

}
