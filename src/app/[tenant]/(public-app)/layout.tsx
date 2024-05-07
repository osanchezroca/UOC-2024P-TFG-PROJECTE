'use client'
import MenuAppBar from "@src/components/MenuAppBar";
import { ClientProvider } from "@src/contexts/ClientContext";
import { GeoProvider } from "@src/contexts/GeoContext";
import { nanoid } from "nanoid";
import { useEffect } from "react";

export default function PublicLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  //if localStorage clientId is not set, or is not in URL Query generate a new one
  const queryId = new URLSearchParams(window.location.search).get('clientId')
  const localStorageId = localStorage.getItem('clientId')
  useEffect(() => {
    if (!localStorageId && queryId) {
      localStorage.setItem('clientId', queryId)
    } else if (!localStorageId && !queryId) {
      localStorage.setItem('clientId', nanoid(4))
    }
  }, [])

  return <ClientProvider>
    <GeoProvider>
      <div className="flex flex-col w-100 h-full justify-stretch relative">
        <MenuAppBar />
        {children}
      </div>
    </GeoProvider>
  </ClientProvider>
}
