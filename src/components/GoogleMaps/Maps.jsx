
import React, { useState, useEffect } from 'react';
import GoogleMaps from "simple-react-google-maps";



export default function Mapa({ markers }) {


    return (
        <> 
        
            <div className='mapgoogle d-flex justify-center'>
                <div className='relative mt-2 mb-3'>
                    <GoogleMaps
                    className=''
                        apiKey={"AIzaSyCnMxDM5mzZuwHEsYeb1b_CcA1Pq1nxigE"}
                        key={1}
                        style={{height: "50vh", width: "98vw", margin: "10px" }}
                        zoom={15}
                        center={{ lat: 41.449802616705426, lng: 2.2032907306799157 }}
                        markers={markers}>
                    </GoogleMaps>
                </div>
            </div>
        </>
    );
}


