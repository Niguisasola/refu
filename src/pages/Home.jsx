import React from 'react';
import Mapping from '../components/GoogleMaps/Mapping';
import Header from '../components/Header';
import NavButtons from '../components/NavButtons';

function Home() {
    return (
        <>
            <Header />
            <Mapping />
            <NavButtons />
        </>
    )
}

export default Home