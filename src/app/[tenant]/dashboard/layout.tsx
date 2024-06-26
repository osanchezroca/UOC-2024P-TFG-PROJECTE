'use client'
import MenuDashboardBar from "@src/components/MenuDashobardBar";
import { TenantContext } from "@src/contexts/TenantContext";
import KeyTrap from "@src/modules/site-tenant/KeyTrap";
import { useContext } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const tenant = useContext(TenantContext)
  if (!tenant.isAdmin) return <KeyTrap />
  //El layout disposa d'una barra lateral que ocupa 1/5 de l'ample de la pantalla i un contingut principal que ocupa la resta de l'ample.
  return <div className="flex flex-col w-full h-full justify-stretch relative">
    <MenuDashboardBar />
    {children}
  </div>
}
