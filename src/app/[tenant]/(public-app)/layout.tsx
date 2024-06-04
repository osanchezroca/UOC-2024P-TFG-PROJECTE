'use client'
import MenuAppBar from "@src/components/MenuAppBar";
import { ClientProvider } from "@src/contexts/ClientContext";
import { GeoProvider } from "@src/contexts/GeoContext";
import { TenantContext } from "@src/contexts/TenantContext";
import { nanoid } from "nanoid";
import { useContext, useEffect } from "react";

export default function PublicLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const tenant = useContext(TenantContext);

  //if localStorage clientId is not set, or is not in URL Query generate a new one
  const queryId = new URLSearchParams(window.location.search).get('clientId')
  const localStorageId = localStorage.getItem('clientId')
  const localStorageAdmin = localStorage.getItem('admin-key')

  //Define clientId using an ID provided in the URL Query or generate a new one
  //It's stored in localstorage
  useEffect(() => {
    if (!localStorageId && queryId) {
      localStorage.setItem('clientId', queryId)
    } else if (!localStorageId && !queryId) {
      localStorage.setItem('clientId', nanoid(4))
    }
    if (localStorageAdmin) {
      localStorage.removeItem('admin-key')
      window.location.reload()
    }
  }, [])

  //Opening fence: only allow access to the app during the opening time
  const currentTime = new Date().getHours() * 60 + new Date().getMinutes()
  const closingTime = new Date(tenant.hourClosing).getHours() * 60 + new Date(tenant.hourClosing).getMinutes()
  const openingTime = new Date(tenant.hourOpening).getHours() * 60 + new Date(tenant.hourOpening).getMinutes()
  if (currentTime > closingTime || currentTime < openingTime) {
    return <div className="flex flex-col w-full h-full justify-stretch relative">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-3xl">Fora de l'horari de funcionament</h1>
        <p className="text-lg">Sistema funcional entre les {new Date(tenant.hourOpening).toLocaleTimeString()} i les {new Date(tenant.hourClosing).toLocaleTimeString()}</p>
      </div>
    </div>
  }

  return <ClientProvider>
    <GeoProvider>
      <div className="flex flex-col w-full h-full justify-stretch relative">
        <MenuAppBar />
        {children}
      </div>
    </GeoProvider>
  </ClientProvider>
}
