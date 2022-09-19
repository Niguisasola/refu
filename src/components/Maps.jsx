
import React from 'react';
import { Component } from 'react';
import GoogleMaps from "simple-react-google-maps";


export default class Maps extends Component {
    render() {
        return (
            <div className='container d-flex justify-content-center mt-2'>
                <GoogleMaps
                apiKey={"AIzaSyCnMxDM5mzZuwHEsYeb1b_CcA1Pq1nxigE"}
                    style={{ height: "400px", width: "300px" }}
                    zoom={12}
                    center={{
                        lat: 40.4127355,
                        lng: -3.695428
                    }}
                    markers={{ lat: 40.409711, lng: -3.692569}}
                />
            </div>
        );
    }
}