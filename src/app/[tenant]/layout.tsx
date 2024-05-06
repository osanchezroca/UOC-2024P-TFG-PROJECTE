'use client'

import { TenantProvider } from "@src/contexts/TenantContext"

export default function Providers({ children, }: { children: React.ReactNode }) {
    return <TenantProvider>
        {children}
    </TenantProvider>
}