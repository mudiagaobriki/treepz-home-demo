'use client';

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// Custom components
// import isMobile from '@/components/helpers/isMobile'

const MapSection = ({ride}) => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDcpqQNbjIQasjqRriOGOYnnSQdAGOUvVs"
    })

    const [map, setMap] = React.useState(null)
    const [center, setCenter] = useState({lat: 0,
        lng: 0})

    useEffect(() => {
        setCenter({
            lat: ride?.latitude, lng: ride?.longitude
        })
        console.log({isLoaded, ride})
    }, [ride, isLoaded]);

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [ride])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="px-32">
            <div className="flex flex-col items-start gap-10 pt-8 tz-border-top-3">
                <h2 className="text-2xl font-medium tz-text-dark">Host/Vehicle location</h2>
                <div className="flex items-center justify-center w-full h-[32.5rem] bg-cover bg-center">
                    {
                        isLoaded && ride ? (
                            <GoogleMap
                                mapContainerStyle={{width: '100%', height: '100%'}}
                                center={center}
                                zoom={10}
                                onLoad={onLoad}
                                onUnmount={onUnmount}
                            >
                                { /* Child components, such as markers, info windows, etc. */ }
                                <></>
                            </GoogleMap>
                        ) : <></>
                    }
                </div>
            </div>
        </div>
        
    );
};

export default MapSection;
