import { GeoContext } from "@src/contexts/GeoContext";
import { Map } from "leaflet";
import dynamic from "next/dynamic";
import { useContext, useEffect, useMemo, useState } from "react";
import Spinner from "./Spinner";

export default function LocalPositionMap() {
    const LeafletMap = useMemo(() => dynamic(() => import('@src/components/LeafletMap'), {
        loading: () => <div className='flex w-full items-center justify-center border-solid border-4 py-4 space-x-3'>
            <Spinner />
            <p>Carregant mapa</p>
        </div>,
        ssr: false
    }), [])

    const [map, setMap] = useState<Map>();

    //get current position from context
    const { latitude, longitude } = useContext(GeoContext);

    //move map pointer to current geo position
    useEffect(() => {
        if (map && latitude && longitude) {
            map.flyTo([latitude, longitude], 13);
        }
    }, [map, latitude, longitude]);

    return latitude && longitude ? <LeafletMap position={[latitude, longitude]} zoom={13} whenCreated={setMap} /> : <p>Obtenint coordenades...</p>

}
