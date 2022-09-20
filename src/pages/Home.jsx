import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import Mapa from '../components/Maps';
import { useLoadScript } from '@react-google-maps/api'

function Add() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCnMxDM5mzZuwHEsYeb1b_CcA1Pq1nxigE"
  });
  return (
    <>
      <Header />
      {isLoaded ? <Mapa /> : null}
      <Home />
    </>
  )
}

export default Add