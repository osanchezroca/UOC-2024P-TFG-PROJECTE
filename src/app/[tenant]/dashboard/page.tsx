'use client'
import Spinner from "@src/components/Spinner";
import { TenantContext } from "@src/contexts/TenantContext";
import { Map } from "leaflet";
import dynamic from "next/dynamic";
import { useContext, useMemo, useState } from "react";

export default function Dashboard() {
  const tenant = useContext(TenantContext)
  const LeafletMap = useMemo(() => dynamic(() => import('@src/components/LeafletMap'), {
    loading: () => <div className='flex w-full items-center justify-center border-solid border-4 py-4 space-x-3'>
      <Spinner />
      <p>Carregant mapa</p>
    </div>,
    ssr: false
  }), [])
  const [map, setMap] = useState<Map>();

  const latitude = tenant.initial_latitude
  const longitude = tenant.initial_longitude
  const zoom = tenant.initial_zoom

  return (
    <div className="h-full">
      <LeafletMap position={[latitude, longitude]} zoom={zoom} whenCreated={setMap} />
    </div>
  );
}
