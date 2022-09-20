
import React, { useState, useEffect } from 'react';
import GoogleMaps from "simple-react-google-maps";



export default function Mapa({markers}) {
    return (
        <div className=' d-inline-flex justify-content-center mt-2'>
            
                <GoogleMaps
                    apiKey={"AIzaSyCnMxDM5mzZuwHEsYeb1b_CcA1Pq1nxigE"}
                    key={1}
                    style={{ height: "400px", width: "500px" }}
                    zoom={12}
                    center={{lat: 37.4224764, lng: -122.0842499}}
                    markers={markers} //optional
                    // center={{ lat: 39.4863243, lng: -0.3602353 }}
                    // markers={restrooms.map((restroom) => ({ lat: restroom.latitude, lng: restroom.longitude}))}
                />
        </div>
    );
}