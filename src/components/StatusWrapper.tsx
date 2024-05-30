import { TypedUseMutationResult, TypedUseQueryHookResult } from '@reduxjs/toolkit/query/react';
import CardComponent from '@src/components/CardComponent';
import Spinner from '@src/components/Spinner';

type Props = {
    query: TypedUseQueryHookResult<any, any, any> | TypedUseMutationResult<any, any, any>;
    children: React.ReactNode;
    allowIdle?: boolean;
    noBlock?: boolean;
};
function ErrorMessage({ error }: { error: any }) {
    return <CardComponent>
        <h2>Ha ocorregut un error amb l'aplicació:</h2>
        <pre>{error?.data ?? JSON.stringify(error)}</pre>
    </CardComponent>
}

/**
 * Function that check if status is loaded or has an error
 * @param query
 * @param children
 * @returns 
 */
export default function StatusWrapper({ query, children, allowIdle = false, noBlock = false }: Props) {
    if (['fulfilled', (!query.endpointName || allowIdle) && 'uninitialized', noBlock && 'rejected'].includes(query.status)) {
        return <>
            {noBlock && query.status == 'rejected' && <ErrorMessage error={query.error?.data ?? JSON.stringify(query.error)} />}
            {children}
        </>
    } else if (['rejected', 'error'].includes(query.status)) {
        return <div className='flex flex-col h-full w-full justify-center items-center'>
            <ErrorMessage error={query.error?.data ?? JSON.stringify(query.error)} />
        </div>
    } else {
        return <div className='flex flex-col gap-1 h-full w-full justify-center items-center'>
            <div className='flex gap-4 justify-center items-center'>
                <Spinner />
                <p>Carregant</p>
            </div>
            {process.env.NODE_ENV === 'development' && <p className='text-xs text-gray-600'>Executant {query.endpointName}</p>}
        </div>
    }
}