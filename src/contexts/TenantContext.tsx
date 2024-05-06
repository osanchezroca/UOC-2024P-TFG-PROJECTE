import StatusWrapper from '@src/components/StatusWrapper';
import { useGetTenantQuery } from '@src/libraries/services/tenant';
import React, { createContext, useEffect, useState } from 'react';

interface TenantContextProps {
    name: string | null
    initial_latitude: number | null
    initial_longitude: number | null
    initial_zoom: number | null
    hour_opening: string | null
    hour_closing: string | null
}

const TenantContext = createContext<TenantContextProps>({
    name: null,
    initial_latitude: null,
    initial_longitude: null,
    initial_zoom: null,
    hour_opening: null,
    hour_closing: null,
});

const TenantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [name, setName] = useState<string | null>(null);
    const [initial_latitude, setInitialLatitude] = useState<number | null>(null);
    const [initial_longitude, setInitialLongitude] = useState<number | null>(null);
    const [initial_zoom, setInitialZoom] = useState<number | null>(null);
    const [hour_opening, setHourOpening] = useState<string | null>(null);
    const [hour_closing, setHourClosing] = useState<string | null>(null);

    const tenantQuery = useGetTenantQuery()
    useEffect(() => {
        if (tenantQuery.data) {
            const data = tenantQuery.data
            setName(data.name);
            setInitialLatitude(data.initial_latitude);
            setInitialLongitude(data.initial_longitude);
            setInitialZoom(data.initial_zoom);
            setHourOpening(data.hour_opening);
            setHourClosing(data.hour_closing);
        }
    }, [tenantQuery.data])

    return (
        <TenantContext.Provider
            value={{
                name,
                initial_latitude,
                initial_longitude,
                initial_zoom,
                hour_opening,
                hour_closing
            }}
        >
            <StatusWrapper query={tenantQuery}>
                {children}
            </StatusWrapper>
        </TenantContext.Provider>
    );
};

export { TenantContext, TenantProvider };

