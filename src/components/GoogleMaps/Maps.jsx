
import React, { useState, useEffect } from 'react';
import GoogleMaps from "simple-react-google-maps";



export default function Mapa({ markers }) {
    

    return (
        <> 
        <div className='d-inline-flex justify-content-center'>
            <div className='mt-2 mb-3'>
                        
        <GoogleMaps
                    apiKey={"AIzaSyCnMxDM5mzZuwHEsYeb1b_CcA1Pq1nxigE"}
                    key={1}
                    style={{ height: "65vh", width: "100vw", margin:"10px"}}
                    zoom={15}
                    center={{ lat: 41.449802616705426, lng: 2.2032907306799157 }}
                    markers={markers} //optional
                // center={{ lat: 39.4863243, lng: -0.3602353 }}
                // markers={restrooms.map((restroom) => ({ lat: restroom.latitude, lng: restroom.longitude}))}
                />
            </div>
        </div>
        </>
    );
}


