import React, { useState, useEffect } from 'react';
import { GoogleMap, InfoWindow, Marker } from '@react-google-maps/api';


function Mapa() {
    const [restrooms, setRestrooms] = useState([])

    const URL = 'https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=100&offset=0&query=%22spain%22'

    useEffect(() => {
        fetch(URL).then(res => res.json()).then(res => setRestrooms(res))
    }, [])

    console.log(restrooms)
    return (
        <GoogleMap
            mapContainerStyle={{ width: "100vw", height: "100vh" }}
            defaultZoom={8}
            defaultCenter={{lat:3.345,lng:-150.644}}
        >
            {restrooms.map(({ id, name, latitude, longitude }) => (
                <Marker
                    key={id}
                    position={{ lat: latitude, lng: longitude }}
                >
                </Marker>
            ))}
            </GoogleMap>
    );
}
export default Mapa;
