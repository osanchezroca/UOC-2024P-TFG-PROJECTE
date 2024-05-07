import StatusWrapper from '@src/components/StatusWrapper';
import { useGetTenantQuery } from '@src/libraries/services/tenant';
import React, { createContext, useEffect, useState } from 'react';

interface TenantContextProps {
    name: string | null
    initialLatitude: number | null
    initialLongitude: number | null
    initialZoom: number | null
    hourOpening: string | null
    hourClosing: string | null
    code: string | null
    isAdmin: boolean
    setAdminKey: (key: string) => void
    logOut: () => void
}

const TenantContext = createContext<TenantContextProps>({
    name: null,
    initialLatitude: null,
    initialLongitude: null,
    initialZoom: null,
    hourOpening: null,
    hourClosing: null,
    code: null,
    isAdmin: false,
    setAdminKey: () => { },
    logOut: () => { }
});

const TenantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [name, setName] = useState<string | null>(null);
    const [initialLatitude, setInitialLatitude] = useState<number | null>(null);
    const [initialLongitude, setInitialLongitude] = useState<number | null>(null);
    const [initialZoom, setInitialZoom] = useState<number | null>(null);
    const [hourOpening, setHourOpening] = useState<string | null>(null);
    const [hourClosing, setHourClosing] = useState<string | null>(null);
    const [code, setCode] = useState<string | null>(null);

    const tenantQuery = useGetTenantQuery()

    const setAdminKey = (key: string) => {
        localStorage.setItem('admin-key', key)
        tenantQuery.refetch()
    }

    const logOut = () => {
        localStorage.removeItem('admin-key')
        tenantQuery.refetch()
    }

    useEffect(() => {
        if (tenantQuery.data) {
            const data = tenantQuery.data
            setName(data.name);
            setInitialLatitude(data.initial_latitude);
            setInitialLongitude(data.initial_longitude);
            setInitialZoom(data.initial_zoom);
            setHourOpening(data.hour_opening);
            setHourClosing(data.hour_closing);
            setCode(data.code);
        }
    }, [tenantQuery.data])


    const isAdmin = tenantQuery.data?.isAdmin

    if (tenantQuery.status === 'fulfilled' && !tenantQuery.data) throw new Error('Tenant not found')
    return (
        <TenantContext.Provider
            value={{
                name,
                initialLatitude,
                initialLongitude,
                initialZoom,
                hourOpening,
                hourClosing,
                code,
                isAdmin,
                setAdminKey,
                logOut
            }}
        >
            <StatusWrapper query={tenantQuery}>
                {children}
            </StatusWrapper>
        </TenantContext.Provider>
    );
};

export { TenantContext, TenantProvider };

