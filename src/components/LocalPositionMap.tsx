import DynamicMap from '@src/components/DynamicMap';
import { GeoContext } from "@src/contexts/GeoContext";
import { Map } from "leaflet";
import { useContext, useEffect, useState } from "react";
import { useMap, Marker, Popup } from 'react-leaflet';

type LocalPointerProps = {
    latitude: number;
    longitude: number;
    flyTo?: boolean;
}
function LocalPointer({ latitude, longitude, flyTo = false }: LocalPointerProps) {
    const map = useMap();
    //move map pointer to current geo position
    useEffect(() => {
        if (flyTo) {
            if (map && latitude && longitude) {
                map.flyTo([latitude, longitude], 13);
            }
        }
    }, [map, latitude, longitude]);
    return <Marker position={[latitude, longitude]}>
        <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
    </Marker>
}

export default function LocalPositionMap() {
    //get current position from context
    const { latitude, longitude } = useContext(GeoContext);

    return latitude && longitude ? <DynamicMap position={[latitude, longitude]} zoom={13} >
        <LocalPointer latitude={latitude} longitude={longitude} />
    </DynamicMap> : <p>Obtenint coordenades...</p>

}
