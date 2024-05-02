import React, { createContext, useEffect, useState } from 'react';

interface GeoContextProps {
    latitude: number | null;
    longitude: number | null;
}

const GeoContext = createContext<GeoContextProps>({
    latitude: null,
    longitude: null,
});

const GeoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);

    const getCoords = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                if (latitude !== position.coords.latitude) {
                    setLatitude(position.coords.latitude);
                }
                if (longitude !== position.coords.longitude) {
                    setLongitude(position.coords.longitude);
                }
            },
            (error) => {
                console.error('Error al obtener las coordenadas:', error);
            }
        );
    }

    //each 10s check if coords are available or different than latitude and longitude
    useEffect(() => {
        const interval = setInterval(getCoords, 10000);
        getCoords()
        return () => clearInterval(interval);
    }, [getCoords]);

    return (
        <GeoContext.Provider value={{ latitude, longitude }}>
            {children}
        </GeoContext.Provider>
    );
};

export { GeoContext, GeoProvider };
