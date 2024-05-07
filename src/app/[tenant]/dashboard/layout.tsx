'use client'
import MenuDashboardBar from "@src/components/MenuDashobardBar";
import { TenantContext } from "@src/contexts/TenantContext";
import ReportList from "@src/modules/report/ReportList";
import KeyTrap from "@src/modules/site-tenant/KeyTrap";
import { useContext } from "react";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const tenant = useContext(TenantContext)
  if(!tenant.isAdmin) return <KeyTrap />
  //El layout disposa d'una barra lateral que ocupa 1/5 de l'ample de la pantalla i un contingut principal que ocupa la resta de l'ample.
  return <div className="flex flex-col h-full">
    <MenuDashboardBar />
    <div className="grid grid-cols-5  h-full">
      <div className="flex flex-col gap-2 p-2">
        <ReportList />
        {/* <StatusList /> */}
      </div>
      <div className="col-span-4">
        {children}
      </div>
    </div>
  </div>
}
