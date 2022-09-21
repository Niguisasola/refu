
import React, { useState, useEffect } from 'react';
import GoogleMaps from "simple-react-google-maps";



export default function Mapa({ markers }) {
    const [ currentUbication, setCurrentUbication ] = useState({ lat: 37.4224764, lng: -122.0842499 });

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    let ubication = {}

    function success(pos) {
        const crd = pos.coords;
        ubication.lat = crd.latitude
        ubication.lng = crd.longitude
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error, options);
       // if (success) {            
        //}
        console.log(ubication)
        setCurrentUbication(ubication)
    }, []);

    return (
        <div className='d-inline-flex justify-content-center'>
            <div className='mt-2 mb-3'>

                <GoogleMaps
                    apiKey={"AIzaSyCnMxDM5mzZuwHEsYeb1b_CcA1Pq1nxigE"}
                    key={1}
                    style={{ height: "65vh", width: "100vw" }}
                    zoom={12}
                    center={currentUbication}
                    markers={markers} //optional
                // center={{ lat: 39.4863243, lng: -0.3602353 }}
                // markers={restrooms.map((restroom) => ({ lat: restroom.latitude, lng: restroom.longitude}))}
                />
            </div>
        </div>
    );
}


