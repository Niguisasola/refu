import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { restroomServices } from '../../services/infoDetailServices';
import CardRestroomInfo from './CardRestroomInfo';


export const InfoDetail =() =>{
    const [restroom, setRestroom] = useState([])
    const { query } = useParams();

    useEffect(
        ()=>{
            getRestroomByQuery(query);
        },[]
    )


const getRestroomByQuery=(query) =>{
    restroomServices.getRestroomByQuery(query).then((res)=>{
        setRestroom(res);
        console.log(res)
    })

return (
    
    <>

    {restroom.map((item, index) =>(
        <CardRestroomInfo key={index}
        name={item.name}
        street={item.street}
        city={item.city}
        state={item.state}
        directions={item.directions}
        comments={item.comments}
        country={item.country}/>
    ))}
    </>
)
}
}

export default InfoDetail