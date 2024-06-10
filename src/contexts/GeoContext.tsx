import React, { createContext, useEffect, useState } from 'react';

interface GeoContextProps {
    latitude: number | null;
    longitude: number | null;
    errorMessage: string | null;
}

const GeoContext = createContext<GeoContextProps>({
    latitude: null,
    longitude: null,
    errorMessage: null
});

const GeoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const pollingInterval = 15000
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [latitude, setLatitude] = useState<number | null>(41.08845047626464);
    const [longitude, setLongitude] = useState<number | null>(1.1620017337136677);

    const getCoords = () => {
        if ("geolocation" in navigator) {
            // navigator.geolocation.getCurrentPosition(
            //     (position) => {
            //         if (latitude !== position.coords.latitude) {
            //             setLatitude(position.coords.latitude);
            //         }
            //         if (longitude !== position.coords.longitude) {
            //             setLongitude(position.coords.longitude);
            //         }
            //     },
            //     (error) => {
            //         setErrorMessage(error.message)
            //         console.error('Error al obtener las coordenadas:', error);
            //     }
            // );
        } else {
            setErrorMessage('La geolocalizació no és suportada per al navegador que està utilitzant');
        }
    }

    //each 10s check if coords are available or different than latitude and longitude
    useEffect(() => {
        // const interval = setInterval(getCoords, pollingInterval);
        // getCoords()
        // return () => clearInterval(interval);
    }, [getCoords]);

    return (
        <GeoContext.Provider value={{ latitude, longitude, errorMessage }}>
            {children}
        </GeoContext.Provider>
    );
};

export { GeoContext, GeoProvider };

