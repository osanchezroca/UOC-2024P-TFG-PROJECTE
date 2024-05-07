'use client'
import DynamicMap from '@src/components/DynamicMap';
import { TenantContext } from "@src/contexts/TenantContext";
import { Map } from "leaflet";
import { useContext, useState } from "react";

export default function Dashboard() {
  const tenant = useContext(TenantContext)

  const latitude = tenant.initialLatitude
  const longitude = tenant.initialLongitude
  const zoom = tenant.initialZoom

  return (
    <div className="h-full">
      {
        !latitude || !longitude || !zoom ? <p>Position data not found</p>
          : <DynamicMap position={[latitude, longitude]} zoom={zoom} />
      }
    </div>
  );
}
