import StatusWrapper from '@src/components/StatusWrapper';
import { useAuthClientMutation } from '@src/libraries/endpoints/client';
import { nanoid } from 'nanoid';
import React, { createContext, useCallback, useEffect, useState } from 'react';

interface ClientContextProps {
    id: string | null
    name: string | null
    externalId: string | null
    siteTenantId: string | null
    refreshClient?: () => any
}

const ClientContext = createContext<ClientContextProps>({
    id: null,
    name: null,
    externalId: null,
    siteTenantId: null,
    refreshClient: () => { }
});

const ClientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [id, setId] = useState<string | null>(null);
    const [name, setName] = useState<string | null>(null);
    const [externalId, setExternalId] = useState<string | null>(null);
    const [siteTenantId, setSiteTenantId] = useState<string | null>(null);

    const [mutationExec, clientQuery] = useAuthClientMutation()
    const client = clientQuery.data

    const localStorageClientId = localStorage.getItem('clientId') || nanoid(4)
    const refreshClient = useCallback(async () => {
        await mutationExec(localStorageClientId)
    }, [localStorageClientId])

    useEffect(() => {
        if (client) {
            setId(client.id)
            setName(client.name)
            setExternalId(client.externalId)
            setSiteTenantId(client.siteTenantId)
        } else {
            refreshClient()
        }
    }, [client])
    // if (clientQuery.status === 'fulfilled' && !clientQuery.data) throw new Error('Client not found')
    return (
        <ClientContext.Provider
            value={{
                id,
                name,
                externalId,
                siteTenantId,
                refreshClient
            }}
        >
            <StatusWrapper query={clientQuery}>
                {children}
            </StatusWrapper>
        </ClientContext.Provider>
    );
};

export { ClientContext, ClientProvider };

