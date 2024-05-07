import Spinner from '@src/components/Spinner';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import { MapProps } from '@src/components/LeafletMap';

export default function DynamicMap(props: MapProps) {

    const LeafletMap = useMemo(() => dynamic(() => import('@src/components/LeafletMap'), {
        loading: () => <div className='flex w-full items-center justify-center border-solid border-4 py-4 space-x-3'>
            <Spinner />
            <p>Carregant mapa</p>
        </div>,
        ssr: false
    }), [])

    return <LeafletMap {...props} />
}