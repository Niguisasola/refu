import React from 'react';
import Mapa from './Maps';
import { useLoadScript } from '@react-google-maps/api'
import {useState, useEffect} from 'react'

function Mapping() {
  const [restrooms, setRestrooms] = useState([])

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCnMxDM5mzZuwHEsYeb1b_CcA1Pq1nxigE"
  });
 
    const URL = 'https://www.refugerestrooms.org/api/v1/restrooms?page=1&per_page=100&offset=0'

    useEffect(() => {
        fetch(URL).then(res => res.json()).then(res => setRestrooms(res))
    }, [])
    console.log(restrooms)

  return (
    <>
      
      {isLoaded && restrooms.length > 0 ? <Mapa markers={restrooms.map(x => ({lat: x.latitude, lng: x.longitude}))}/> : null}
      
    </>
  )
}

export default Mapping