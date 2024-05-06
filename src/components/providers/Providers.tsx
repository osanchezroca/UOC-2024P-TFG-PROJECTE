'use client'

import { TenantProvider } from "@src/contexts/TenantContext"
import StoreProvider from "./StoreProvider"

export default function Providers({ children, }: { children: React.ReactNode }) {
    return <StoreProvider>
        <TenantProvider>
            {children}
        </TenantProvider>
    </StoreProvider>
}