import React, { useState, useEffect } from 'react'

const SearchComponent = () => {
    const [restrooms, setRestrooms] = useState([])
    const [search, setSearch] = useState("")

    const URL = 'https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=100&offset=0&query=%22spain%22'

    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        setRestrooms(data)
    }
    useEffect(() => {
        showData()
        console.log(restrooms)
    }, []);


    return (
        <>
            <table className='table table-striped hover mt-5 shadow-lg'>
                <thead>
                    <tr className='bc-violet'>
                        <th scope="col">Nombre</th>
                        <th scope="col">Ciudad</th>
                        <th scope="col">Estado</th>

                    </tr>
                </thead>
                <tbody className='table-group-divider'>
                    {restrooms.map((restroom) => (
                        <tr>
                            <th scope="row"key={restroom.id}>{restroom.name}</th>
                            <td>{restroom.city}</td>
                            <td>{restroom.state
}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>

    )
}

export default SearchComponent
