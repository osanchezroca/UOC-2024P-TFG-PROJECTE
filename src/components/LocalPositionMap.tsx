import DynamicMap from '@src/components/DynamicMap';
import Spinner from '@src/components/Spinner';
import { GeoContext } from "@src/contexts/GeoContext";
import { ReactNode, useContext, useEffect } from "react";
import { useMap } from 'react-leaflet';
import { ErrorGeolocation } from './ErrorGeolocation';

type LocalPointerProps = {
    latitude: number
    longitude: number
    flyTo?: boolean
    children?: ReactNode
}
function LocalPointer({ children, latitude, longitude, flyTo = false }: LocalPointerProps) {
    const map = useMap();
    //move map pointer to current geo position
    useEffect(() => {
        if (flyTo) {
            if (map && latitude && longitude) {
                map.flyTo([latitude, longitude], 18);
            }
        }
    }, [map, latitude, longitude]);
    return children
}

export default function LocalPositionMap() {
    const { latitude, longitude, errorMessage } = useContext(GeoContext);

    if (errorMessage) return <ErrorGeolocation error={errorMessage} />

    //use current position from geoContext
    return latitude && longitude ? <DynamicMap position={[latitude, longitude]} zoom={18} >
        {({ Marker, Popup }) => <LocalPointer latitude={latitude} longitude={longitude}>
            <Marker position={[latitude, longitude]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </LocalPointer>}
    </DynamicMap> : <div className='flex w-full items-center justify-center border-solid border-4 py-4 gap-3 h-full'>
        <Spinner />
        <p>Obtenint coordenades</p>
    </div>

}
